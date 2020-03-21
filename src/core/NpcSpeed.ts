import {
    NPC_MODERATE_SPEED,
    NPC_SPRINT_SPEED,
    NPC_SLOW_SPEED,
    NPC_STOPPED
} from '../consts/human-consts';

export class NpcSpeed {
    protected _currentPeace: number;
    protected _staminaLevel: number;
    protected _inRush: boolean;

    constructor() {
        this._currentPeace = NPC_MODERATE_SPEED;
        this._staminaLevel = 100;
        this._inRush = false;
    }

    public getSpeed(): number {
        if (this._staminaLevel > 90) {
            this._currentPeace = [NPC_SPRINT_SPEED, NPC_MODERATE_SPEED][
                Math.floor(Math.random() * 2)
            ];
        } else if (this._staminaLevel > 40) {
            this._currentPeace = [NPC_MODERATE_SPEED, NPC_SLOW_SPEED][
                Math.floor(Math.random() * 2)
            ];
        } else {
            this._currentPeace = [NPC_SLOW_SPEED, NPC_STOPPED][
                Math.floor(Math.random() * 2)
            ];
        }

        switch (this._currentPeace) {
            case NPC_STOPPED: {
                this._staminaLevel += 5;
                break;
            }
            case NPC_SLOW_SPEED: {
                this._staminaLevel += 2;
                break;
            }
            case NPC_SPRINT_SPEED: {
                this._staminaLevel -= 20;
                break;
            }
        }

        if (this._staminaLevel > 100) {
            this._staminaLevel = 100;
        }
        return this._currentPeace;
    }
}
