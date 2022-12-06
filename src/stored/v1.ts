import { initialZodiacSelected } from "fixture/zodiac";
import produce from "immer";

export type { StoredV1, DataV1 };

export { sanitize, encode, decode };

type DataV1 = boolean[][][];

type StoredV1 = {
   v: 1;
   value: DataV1;
};

function sanitize(data: DataV1): DataV1 {
   return produce(initialZodiacSelected, (draft) => {
      for (let i = 0; i < Math.min(draft.length, data.length); i++) {
         for (let j = 0; j < Math.min(draft[i].length, data[i].length); j++) {
            for (
               let k = 0;
               k < Math.min(draft[i][j].length, data[i][j].length);
               k++
            ) {
               draft[i][j][k] = data[i][j][k];
            }
         }
      }
   });
}

function encode(data: DataV1): Uint8Array {
   const flatten: boolean[] = data.flat(2);
   const bs: Uint8Array = new Uint8Array((flatten.length + 7) / 8);
   for (let i = 0; i < flatten.length; i++) {
      bs[Math.floor(i / 8)] |= (flatten[i] ? 1 : 0) << i % 8;
   }
   return bs;
}

function decode(array: Uint8Array): DataV1 {
   return produce(initialZodiacSelected, (draft) => {
      let idx = 0;
      let noData = false;
      for (let i = 0; i < draft.length; i++) {
         for (let j = 0; j < draft[i].length; j++) {
            for (let k = 0; k < draft[i][j].length; k++) {
               if (Math.floor(idx / 8) >= array.length) {
                  noData = true;
                  break;
               }
               draft[i][j][k] =
                  ((array[Math.floor(idx / 8)] >> idx % 8) & 1) === 1;
               idx++;
            }
            if (noData) break;
         }
         if (noData) break;
      }
   });
}
