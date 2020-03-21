import { isCloseEnough } from "./check-for-action";
import { DataService } from "../services";

export function checkForInfection(): void {
    const dataService = DataService.getInstance();
    dataService.npcs.forEach(npc => {
        if (isCloseEnough(dataService.player, npc, 60)) {
            npc.tryToInfect();
        }
        if (npc.isInfected) {
            dataService.npcs.forEach(anotherNpc => { 
                if (npc !== anotherNpc && isCloseEnough(anotherNpc, npc, 90)) {
                    anotherNpc.tryToInfect();
                }
            });
        }
    })
}
