import { Zodiac } from "../game/zodiac";
import { Specialization1 } from "./zodiac/specialization1";
import { Specialization2 } from "./zodiac/specialization2";
import { Specialization3 } from "./zodiac/specialization3";
import { Trait1 } from "./zodiac/trait1";
import { Trait2 } from "./zodiac/trait2";
import { Trait3 } from "./zodiac/trait3";
import { Trait4 } from "./zodiac/trait4";
import { Trait5 } from "./zodiac/trait5";
import { Trait6 } from "./zodiac/trait6";
import { Trait7 } from "./zodiac/trait7";
import { Trait8 } from "./zodiac/trait8";

export { zodiac, initialZodiacSelected };

const zodiac: Zodiac = [
   Trait1,
   Trait2,
   Trait3,
   Trait4,
   Trait5,
   Trait6,
   Trait7,
   Trait8,
   Specialization1,
   Specialization2,
   Specialization3,
];

const initialZodiacSelected: boolean[][][] = [
   [8, 8, 8],
   [9, 9, 17, 9],
   [13, 11, 11, 11],
   [10, 10, 11, 10, 15, 15],
   [14, 14, 13, 15, 12, 19, 15, 11, 17, 17],
   [13, 25, 21, 20, 13, 12, 18, 21],
   [17, 17, 33, 19, 25, 25, 23, 10],
   [17, 17, 17, 17, 19, 17, 13, 17, 25, 17],
   [21, 21, 21, 21, 21, 21],
   [21, 21, 21, 21, 21, 21],
   [21, 21, 21, 21, 21, 25, 21, 21, 21, 21, 21, 21],
].map((page) => page.map((size) => Array(size).fill(false)));
