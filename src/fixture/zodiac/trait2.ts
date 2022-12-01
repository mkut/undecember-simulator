import { ZodiacTier } from "game/zodiac";

export { Trait2 };

const Trait2: ZodiacTier = {
   name: "特性II",
   requiredPoints: 5,
   constellations: [
      {
         name: "探検家",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
                  {
                     type: "MaximumMana",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 50,
                  },
                  {
                     type: "AttackHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 25,
                  },
                  {
                     type: "Armor%",
                     amount: 10,
                  },
                  {
                     type: "Evasion%",
                     amount: 12,
                  },
               ],
               position: { x: 80, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 12,
                  },
               ],
               position: { x: 35, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 50,
                  },
               ],
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 12,
                  },
               ],
               position: { x: 80, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 3,
                  },
               ],
               position: { x: 60, y: 40 },
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
            [2, 8],
            [6, 8],
         ],
      },
      {
         name: "放浪者",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
                  {
                     type: "MaximumMana",
                     amount: 15,
                  },
               ],
               position: { x: 30, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 40,
                  },
               ],
               position: { x: 50, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 20,
                  },
                  {
                     type: "MaximumBarrier%",
                     amount: 6,
                  },
                  {
                     type: "ManaRegeneration%",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaRegeneration%",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 40,
                  },
               ],
               position: { x: 50, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaRegeneration%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 65 },
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
            [2, 8],
            [6, 8],
         ],
      },
      {
         name: "沼地",
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
               position: { x: 0, y: 50 },
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
               position: { x: 20, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
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
               position: { x: 40, y: 10 },
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
               position: { x: 65, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 20,
                  },
               ],
               position: { x: 90, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionMaximumLife",
                     amount: 50,
                  },
               ],
               position: { x: 95, y: 40 },
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
               position: { x: 25, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
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
               position: { x: 40, y: 70 },
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
               position: { x: 65, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%",
                     amount: 20,
                  },
               ],
               position: { x: 85, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 55, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretMaximumLife",
                     amount: 50,
                  },
               ],
               position: { x: 100, y: 100 },
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
            [7, 8],
            [0, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [0, 13],
            [13, 14],
            [14, 15],
            [15, 16],
         ],
      },
      {
         name: "森",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%",
                     amount: 20,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 55 },
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
            [2, 8],
            [6, 8],
         ],
      },
   ],
};
