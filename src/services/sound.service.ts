import WebAudioSound = Phaser.Sound.WebAudioSound;
import Scene = Phaser.Scene;

export class SoundService {
    private _backgroundMusic: WebAudioSound;
    private static _instance: SoundService;
    readonly game: Scene;

    constructor(game) {
        this.game = game;
    }

    public playSound(key: string): void {
        const sound = this.game.sound.add(key);
        sound.play()
    }

    public setBackgroundMusic(key: string): void {
        this._backgroundMusic = this.game.sound.add(key) as WebAudioSound;
        this._backgroundMusic.loop = true
    }

    public playBackgroundMusic(): void {
        this._backgroundMusic.play();
    }

    public static init(game): void {
        SoundService._instance = new SoundService(game);
    }

    public static getInstance(): SoundService {
        if (!SoundService._instance) {
            return null;
        }
        return SoundService._instance;
    }

}
