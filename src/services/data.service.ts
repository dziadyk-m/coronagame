import { GameObject, Character, Player } from '../core';
import { head } from '../utils';

export class DataService {
    private static instance: DataService;

    public objects: GameObject[] = [];
    public npcs: Character[] = [];
    public player: Player;

    public crowd_sound: Phaser.Sound.WebAudioSound;

    public findNpcById(id: number): Character {
        return head(this.npcs.filter(npc => npc.id === id));
    }

    public findObjectById(id: string): GameObject {
        return head(this.objects.filter(object => object.id === id));
    }

    public static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService();
        }
        return DataService.instance;
    }
}
