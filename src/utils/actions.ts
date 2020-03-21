import { isCloseEnough, shouldTriggerNPCIdleAction } from './check-for-action';
import { DataService, SoundService } from '../services';

const PLAYER_INFECTION_RADIUS = 90;
const NPC_INFECTION_RADIUS = 120;

export function checkForActions(): void {
    const dataService = DataService.getInstance();
    const player = dataService.player;
    dataService.npcs.forEach(npc => {
        SoundService.getInstance().crowd_sound.setVolume(player.instance.y / 100);

        if (isCloseEnough(player, npc, PLAYER_INFECTION_RADIUS)) {
            npc.tryToInfect();
        }

        if (shouldTriggerNPCIdleAction(player, npc)) {
            npc.idleAction();
        }

        if (npc.isInfected) {
            dataService.npcs.forEach(anotherNpc => {
                if (npc.id !== anotherNpc.id && isCloseEnough(anotherNpc, npc, NPC_INFECTION_RADIUS)) {
                    anotherNpc.tryToInfect();
                }
            });
        }
    });
}
