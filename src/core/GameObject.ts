import { IGameModel } from '../models';
import { TILE_SIZE } from '../consts';

export class GameObject {
    public action: Function = () => {};

    private _instance: { x: number; y: number } = {
        x: null,
        y: null
    };

    constructor(data: IGameModel) {
        this._instance.x = data.positionX * TILE_SIZE;
        this._instance.y = data.positionY * TILE_SIZE;
        this.action = data.action;
    }

    get instance(): { x: number; y: number } {
        return this._instance;
    }
}
