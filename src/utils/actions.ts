import { isCloseEnough, shouldTriggerNPCIdleAction } from './check-for-action';
import { DataService } from '../services';

export function checkForActions(): void {
    const dataService = DataService.getInstance();
    dataService.npcs.forEach(npc => {
        if (isCloseEnough(dataService.player, npc, 60)) {
            npc.tryToInfect();
        }
        if (shouldTriggerNPCIdleAction(dataService.player, npc)) {
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
