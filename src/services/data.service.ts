import { GameObject, Character, Player } from "../core";

export class DataService {
    private static instance: DataService;

    public objects: GameObject[] = [];
    public npcs: Character[] = [];
    public player: Player;

    public static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService();
        }
        return DataService.instance;
    }
}
