import { Player, Character, GameObject } from '../core';
import { combine } from './ramda';

const FAR_ENOUGH = 30;

export function checkForDistance(
    player: Player | Character,
    object: Character | GameObject
): number {
    const a = player.instance.x - object.instance.x;
    const b = player.instance.y - object.instance.y;
    return Math.sqrt(a * a + b * b);
}

export function isCloseEnough(
    player: Player | Character,
    object: Character | GameObject,
    howFar = FAR_ENOUGH
): boolean {
    return checkForDistance(player, object) < howFar;
}

// It's provided with normal for for break functionality
export function tryToProvideAction(
    player: Player,
    npcs: Character[],
    objects: GameObject[]
) {
    const interactive = combine(objects, npcs);

    for (let i = 0; i < interactive.length; i++) {
        if (isCloseEnough(player, interactive[i])) {
            interactive[i].action();
            break;
        }
    }
}

export const shouldTriggerNPCIdleAction = (player: Player, npc: Character) =>
    isCloseEnough(player, npc, 120) && !npc.isIdleActionDone;
