export interface IFrame {
    animationStart: number;
    animationEnd: number;
    frameRate?: number;
    key?: string;
}

export interface ICharacterFrames {
    up: IFrame;
    down: IFrame;
    left: IFrame;
    right: IFrame;
    idle?: IFrame;
}
