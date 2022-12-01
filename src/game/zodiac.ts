import { Position } from "../util/position";
import { Modifier, modifierSortOrder, ModifierType } from "./modifier";

export type { Constellation, ConstellationNode, ZodiacTier, Zodiac };

export { drySelectNode, activeMods };

type ConstellationNode = {
   isEntry: boolean;
   isNotable: boolean;
   mods: Modifier[];
   position: Position;
};
type Constellation = {
   name: string;
   nodes: ConstellationNode[];
   edges: [number, number][];
};
type ZodiacTier = {
   name: string;
   constellations: Constellation[];
   requiredPoints: number;
};
type Zodiac = ZodiacTier[];

function calcAdjs(n: number, edges: [number, number][]): number[][] {
   const ret: number[][] = [];
   for (let i = 0; i < n; i++) {
      ret.push([]);
   }
   for (const edge of edges) {
      ret[edge[0]].push(edge[1]);
      ret[edge[1]].push(edge[0]);
   }
   return ret;
}

function drySelectNode(
   constellation: Constellation,
   selected: boolean[],
   targetNodeId: number | null
): boolean[] {
   if (targetNodeId === null) {
      return selected;
   }

   const n = constellation.nodes.length;
   const adjs = calcAdjs(n, constellation.edges);

   const mode = !selected[targetNodeId];
   if (mode) {
      const ret: boolean[] = [...selected];
      let cur: number[] = [];
      const back: number[] = Array(n).fill(null);
      for (let i = 0; i < selected.length; i++) {
         if (selected[i]) {
            back[i] = -1;
         } else if (!selected[i] && constellation.nodes[i].isEntry) {
            cur.push(i);
            back[i] = -1;
         } else if (adjs[i].some((j) => selected[j])) {
            cur.push(i);
            back[i] = -1;
         }
      }
      while (back[targetNodeId] === null && cur.length > 0) {
         const next: number[] = [];
         cur.forEach((i) => {
            for (const j of adjs[i]) {
               if (back[j] === null) {
                  back[j] = i;
                  next.push(j);
               }
            }
         });
         cur = next;
      }
      ret[targetNodeId] = true;
      for (let i = targetNodeId; back[i] !== -1; ) {
         i = back[i];
         ret[i] = true;
      }
      return ret;
   } else {
      const ret = Array(n).fill(false);
      const tmp = [...selected];
      tmp[targetNodeId] = false;
      for (let i = 0; i < n; i++) {
         if (constellation.nodes[i].isEntry) {
            let cur: number[] = [i];
            while (cur.length > 0) {
               const next: number[] = [];
               for (const j of cur) {
                  if (tmp[j] && !ret[j]) {
                     ret[j] = true;
                     for (const k of adjs[j]) {
                        next.push(k);
                     }
                  }
               }
               cur = next;
            }
         }
      }
      return ret;
   }
}

function activeMods(zodiac: Zodiac, selected: boolean[][][]): Modifier[] {
   const mods: Map<ModifierType, number> = new Map();
   for (let i = 0; i < Math.min(zodiac.length, selected.length); i++) {
      for (
         let j = 0;
         j < Math.min(zodiac[i].constellations.length, selected[i].length);
         j++
      ) {
         for (
            let k = 0;
            k <
            Math.min(
               zodiac[i].constellations[j].nodes.length,
               selected[i][j].length
            );
            k++
         ) {
            for (const mod of zodiac[i].constellations[j].nodes[k].mods) {
               if (selected[i][j][k]) {
                  const newAmount = (() => {
                     const prev = mods.get(mod.type) || 0;
                     if (mod.type.includes("%More")) {
                        return (
                           ((1 + prev / 100) * (1 + mod.amount / 100) - 1) * 100
                        );
                     } else if (mod.type.includes("%Less")) {
                        return (
                           (1 - (1 - prev / 100) * (1 - mod.amount / 100)) * 100
                        );
                     } else {
                        return prev + mod.amount;
                     }
                  })();
                  mods.set(mod.type, newAmount);
               }
            }
         }
      }
   }
   const ret: Modifier[] = [];
   for (const [type, amount] of mods.entries()) {
      ret.push({ type, amount });
   }
   ret.sort(
      (a: Modifier, b) => modifierSortOrder[a.type] - modifierSortOrder[b.type]
   );
   return ret;
}
