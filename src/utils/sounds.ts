import { SoundService } from "../services";

export function generateCrowdSound(): void {
    const soundService = SoundService.getInstance();
    soundService.crowd_sound = SoundService.getInstance().getSound('crowd');
    soundService.crowd_sound.setVolume(1);
    soundService.crowd_sound.loop = true;
    soundService.crowd_sound.play();
}
