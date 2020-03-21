import { isCloseEnough, shouldTriggerNPCIdleAction } from './check-for-action';
import { DataService, SoundService } from '../services';

export function checkForActions(): void {
    const dataService = DataService.getInstance();
    const player = dataService.player;
    dataService.npcs.forEach(npc => {
        SoundService.getInstance().crowd_sound.setVolume(player.instance.y / 100);

        if (isCloseEnough(player, npc, 60)) {
            npc.tryToInfect();
        }

        if (shouldTriggerNPCIdleAction(player, npc)) {
            npc.idleAction();
        }

        if (npc.isInfected) {
            dataService.npcs.forEach(anotherNpc => {
                if (npc.id !== anotherNpc.id && isCloseEnough(anotherNpc, npc, 90)) {
                    anotherNpc.tryToInfect();
                }
            });
        }
    });
}
