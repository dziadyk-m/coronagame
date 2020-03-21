export interface ICharacterData {
    action: Function;
    sprite: string;
    startX: number;
    startY: number;
}

export interface ICharacterMoves {
    getStep: (x : number, y : number) =>  string;
}

export class SingleStep {
    private _posX : number;
    private _posY : number;
    
    constructor(
        x : number,
        y : number
    ) {
      this._posX = x;
      this._posY = y;
    }

    public getStep(x : number, y : number) : string {
        const flattenX = Math.floor(x);
        const flattenY = Math.floor(y);
        
        if (flattenX == this._posX) {
            if (flattenY > this._posY) {
                return "up";
            } else if (flattenY < this._posY) {
                return "down";
            }
        } else if (flattenY == this._posY) {
            if (flattenX > this._posX) {
                return "left";
            } else if (flattenX < this._posX) {
                return "right";
            }
        }
        return "end";
    }
}

export class MultiSteps {
    private _steps : ICharacterMoves[];
    private _inLoop : boolean;
    private _currentStep : number;
    
    constructor(
        stepsList : ICharacterMoves[],
        endless: boolean
    ) {
      this._steps = stepsList;
      this._inLoop = endless;
      this._currentStep = 0;
    }

    public getStep(x : number, y : number) : string {
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