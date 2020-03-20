import { TILE_SIZE } from "../consts";

export class GameObject {
    public action: Function = () => {};

    private _x: number;
    private _y: number;

    constructor(x: number, y: number, action: Function) {
        this._x = x;
        this._y = y;
        this.action = action;
    }

    get x(): number {
        return this._x * TILE_SIZE;
    }

    get y(): number {
        return this._y * TILE_SIZE;
    }
}
