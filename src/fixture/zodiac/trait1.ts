import { ZodiacTier } from "game/zodiac";

export { Trait1 };

const Trait1: ZodiacTier = {
   name: "特性I",
   requiredPoints: 0,
   constellations: [
      {
         name: "アプロス",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 5,
                  },
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
               ],
               position: { x: 0, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 10,
                  },
                  {
                     type: "AttackHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 10,
                  },
                  {
                     type: "AttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "AttackHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [0, 5],
            [5, 6],
            [6, 7],
            [7, 4],
         ],
      },
      {
         name: "絶壁",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 5,
                  },
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
               ],
               position: { x: 15, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 10,
                  },
                  {
                     type: "SpellHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 10,
                  },
                  {
                     type: "CastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CastSpeed%",
                     amount: 2,
                  },
                  {
                     type: "SpellHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 80, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [0, 5],
            [5, 6],
            [6, 7],
            [7, 4],
         ],
      },
      {
         name: "草原",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 10,
                  },
                  {
                     type: "TurretDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 10, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 10,
                  },
                  {
                     type: "MinionHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionAttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "MinionCastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 20,
                  },
                  {
                     type: "TurretDamage%",
                     amount: 20,
                  },
               ],
               position: { x: 100, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
                     amount: 10,
                  },
                  {
                     type: "TurretHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretAttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 80, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [0, 5],
            [5, 6],
            [6, 7],
            [7, 4],
         ],
      },
   ],
};
