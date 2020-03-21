import WebAudioSound = Phaser.Sound.WebAudioSound;

export class SoundService {
    public crowd_sound: Phaser.Sound.WebAudioSound;

    private _backgroundMusic: WebAudioSound;
    private static _instance: SoundService;

    readonly game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    public getSound(key: string): WebAudioSound {
        const sound = this.game.sound.add(key) as WebAudioSound;
        return sound;
    }

    public setBackgroundMusic(key: string): void {
        this._backgroundMusic = this.game.sound.add(key) as WebAudioSound;
        this._backgroundMusic.loop = true
    }

    public playBackgroundMusic(): void {
        this._backgroundMusic.play();
    }

    public static init(game: Phaser.Game): SoundService {
        SoundService._instance = new SoundService(game);
        return this._instance;
    }

    public static getInstance(): SoundService {
        if (!SoundService._instance) {
            return null;
        }
        return SoundService._instance;
    }

}
