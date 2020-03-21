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

// (1, 10) -> (199, 10) -> (1, 10) 
// (1, 6) -> (199, 6) -> (1, 6)
// (1,19) -> (39, 19) -> [(39, 22), (68, 19)]