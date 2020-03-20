import { IGameModel } from '../models';
import { TILE_SIZE } from '../consts';

export class GameObject {
    public action: Function = () => {};
    public id: string;

    private _instance: { x: number; y: number } = {
        x: null,
        y: null
    };

    constructor(data: IGameModel) {
        this._instance.x = data.positionX * TILE_SIZE;
        this._instance.y = data.positionY * TILE_SIZE;
        this.action = data.action;
        this.id = data.id;
    }

    get instance(): { x: number; y: number } {
        return this._instance;
    }
}
