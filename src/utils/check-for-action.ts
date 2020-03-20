import { Player, Character } from '../core';

const FAR_ENOUGH = 45;

export function checkForDistance(player: Player, npc: Character): number {
    const a = player.instance.x - npc.instance.x;
    const b = player.instance.y - npc.instance.y;
    return Math.sqrt(a * a + b * b);
}

export function isFarEnough(player: Player, npc: Character): boolean {
    return checkForDistance(player, npc) < FAR_ENOUGH;
}

// It's provided with normal for for break functionality
export function tryToProvideAction(player: Player, npcs: Character[]) {
    for (let i = 0; i < npcs.length; i++) {
        if (isFarEnough(player, npcs[i])) {
            npcs[i].action();
            break;
        }
    }
}
