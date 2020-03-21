import { DataService, SoundService } from "../services";

export function generateCrowdSound(): void {
    const dataService = DataService.getInstance();
    dataService.crowd_sound = SoundService.getInstance().getSound('crowd');
    dataService.crowd_sound.setVolume(1);
    dataService.crowd_sound.loop = true;
    dataService.crowd_sound.play();
}
