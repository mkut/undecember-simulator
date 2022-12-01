import { ZodiacTier } from "game/zodiac";

export { Trait3 };

const Trait3: ZodiacTier = {
   name: "特性III",
   requiredPoints: 10,
   constellations: [
      {
         name: "エウノス",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ManaGainWhenManaPotionUsed",
                     amount: 15,
                  },
               ],
               position: { x: 10, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaPotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 20, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaPotionCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaPotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 65, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "LifeGainWhenLifePotionUsed",
                     amount: 20,
                  },
               ],
               position: { x: 10, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LifePotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 15, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifePotionCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LifePotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 80 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "BuffPotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 100, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BuffPotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 85, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BuffPotionEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BuffPotionEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 65, y: 60 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 4],
            [9, 10],
            [10, 11],
            [11, 12],
            [12, 4],
         ],
      },
      {
         name: "岩",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
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
                     type: "AttackHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 0 },
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
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 50, y: 10 },
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
               position: { x: 70, y: 0 },
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
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 50 },
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
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackHitRate%",
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
                     type: "AttackDamage%",
                     amount: 10,
                  },
                  {
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 50, y: 90 },
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
               position: { x: 70, y: 100 },
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
            [0, 8],
            [8, 9],
            [9, 10],
            [10, 4],
         ],
      },
      {
         name: "宝石",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 10, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 10 },
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
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 50, y: 15 },
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
               position: { x: 100, y: 0 },
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
               position: { x: 80, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 30 },
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
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 90 },
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
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 25, y: 75 },
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
               position: { x: 90, y: 100 },
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
            [0, 8],
            [8, 9],
            [9, 10],
            [10, 4],
         ],
      },
      {
         name: "黄金",
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
               position: { x: 10, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 30, y: 0 },
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
               position: { x: 50, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 70, y: 0 },
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
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 100, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 30, y: 60 },
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
                     type: "TurretAttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 65, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TotemAreaOfEffect%",
                     amount: 20,
                  },
                  {
                     type: "TotemDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 20, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 85 },
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
            [0, 8],
            [8, 9],
            [9, 10],
            [10, 4],
         ],
      },
   ],
};
