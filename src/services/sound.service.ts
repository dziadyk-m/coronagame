import Scene = Phaser.Scene;
import WebAudioSound = Phaser.Sound.WebAudioSound;

export class SoundService {
    private static _instance: SoundService;
    private backgroundMusic: WebAudioSound;
    readonly _game: Scene;

    constructor(game) {
        this._game = game;
    }

    public playSound(key: string) {
        const sound = this._game.sound.add(key);
        sound.play()
    }

    public setBackgroundMusic(key: string) {
        this.backgroundMusic = this._game.sound.add(key) as WebAudioSound;
        this.backgroundMusic.loop = true
    }

    public playBackgroundMusic() {
        this.backgroundMusic.play();
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
