import { TILE_SIZE } from '../consts';

export interface ICharacterData {
    action: Function;
    idleAction?: Function;
    waypoints: ICharacterMoves;
    id: number;
    sprite: string;
    startX: number;
    startY: number;
    constantSpeed?: boolean;
    messages?: [{
        cooldown: number;
        message: string;
    }]
    immuneToVirus?: boolean;
}

export interface ICharacterMoves {
    getPoint: () => number[];
    getStep: (x : number, y : number) =>  string;
}

const directionMapper = {
    "up": "right",
    "right": "down",
    "down": "left",
    "left": "up"
}

const AvoidObstacleStep = 20 

export class SingleStep {
    private _posX : number;
    private _posY : number;

    private _previousPlayerX : number;
    private _previousPlayerY : number;
    private _previousDirection : string;

    private _avoidObstacleTries: number;
    private _timesBackoff: number;
    
    constructor(
        x : number,
        y : number
    ) {
      this._posX = x;
      this._posY = y;

      this._previousPlayerX = 0;
      this._previousPlayerY = 0;
      this._avoidObstacleTries = 0;

      this._previousDirection = "up"
      this._timesBackoff = 0;
    }

    public getPoint(): number[] {
        return [this._posX, this._posY]
    }

    public getStep(x : number, y : number) : string {
        var direction = "end"
        if (this._avoidObstacleTries > 0) {
            this._avoidObstacleTries--
            return this._previousDirection
        }

        const flattenX = Math.floor(x/TILE_SIZE);
        const flattenY = Math.floor(y/TILE_SIZE);
        if (flattenY > this._posY) {
            direction = "up";
        } else if (flattenY < this._posY) {
            direction = "down";
        }
        if (flattenX > this._posX) {
            direction = "left";
        } else if (flattenX < this._posX) {
            direction = "right";
        }

        if (Math.abs(this._previousPlayerX - x) < 0.2 && Math.abs(this._previousPlayerY - y) < 0.2 && this._avoidObstacleTries == 0 && direction != "end") {
            if (this._previousDirection == "up") {
                this._timesBackoff++
            }
            this._previousDirection = (<any>directionMapper)[this._previousDirection]
            this._avoidObstacleTries = this._timesBackoff * AvoidObstacleStep // Magic number lol
        }

        this._previousPlayerY = y
        this._previousPlayerX = x
        return direction
    }

}

export class MultiSteps {
    private _steps : ICharacterMoves[];
    private _inLoop : boolean;
    private _currentStep : number;
    private _stayAtEnd : boolean;
    
    constructor(
        stepsList : ICharacterMoves[],
        endless: boolean,
        stop?: boolean
    ) {
      this._steps = stepsList;
      this._inLoop = endless;
      this._currentStep = 0;
      this._stayAtEnd = stop;
    }

    public getPoint(): number[] {
        return this._steps[0].getPoint()
    }

    public getStep(x : number, y : number) : string {
        if (this._currentStep == this._steps.length && this._stayAtEnd) {
            return "stop"
        }
        const nextDirection = this._steps[this._currentStep].getStep(x, y)
        if (nextDirection == "end") {
            this._currentStep++;
            if (this._currentStep == this._steps.length) {
                if (this._inLoop) {
                    this._currentStep = 0;
                    return "stop"
                }
                return "end"
            }
        }
        return nextDirection;
    }
}