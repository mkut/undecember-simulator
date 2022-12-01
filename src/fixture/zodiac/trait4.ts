import { ZodiacTier } from "game/zodiac";

export { Trait4 };

const Trait4: ZodiacTier = {
   name: "特性IV",
   requiredPoints: 15,
   constellations: [
      {
         name: "フリューレ",
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
               position: { x: 0, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MeleeDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 30 },
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
               position: { x: 25, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 100 },
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
               position: { x: 50, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaOfEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 75 },
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
               position: { x: 100, y: 10 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [6, 9],
            [7, 9],
            [8, 9],
         ],
      },
      {
         name: "種",
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
               position: { x: 0, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "StrikeDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 0 },
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
               position: { x: 20, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 100 },
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
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaOfEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 85 },
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
               position: { x: 100, y: 80 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [6, 9],
            [7, 9],
            [8, 9],
         ],
      },
      {
         name: "葉",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 0, y: 75 },
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
               position: { x: 10, y: 10 },
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
               position: { x: 20, y: 40 },
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
               position: { x: 35, y: 50 },
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
               position: { x: 40, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 3,
                  },
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
               ],
               position: { x: 55, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LifeRegeneration%",
                     amount: 10,
                  },
               ],
               position: { x: 85, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaRegeneration%",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockRate",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Dodge%",
                     amount: 0.5,
                  },
               ],
               position: { x: 60, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 3,
                  },
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
               ],
               position: { x: 100, y: 55 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
            [6, 10],
            [7, 10],
            [8, 10],
            [9, 10],
         ],
      },
      {
         name: "花びら",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 1,
                  },
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "FireResistance",
                     amount: 9,
                  },
               ],
               position: { x: 15, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonResistance",
                     amount: 9,
                  },
               ],
               position: { x: 35, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 2,
                  },
                  {
                     type: "MaximumLife",
                     amount: 13,
                  },
                  {
                     type: "MaximumMana",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 55 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 1,
                  },
                  {
                     type: "MaximumMana",
                     amount: 15,
                  },
               ],
               position: { x: 100, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ColdResistance",
                     amount: 9,
                  },
               ],
               position: { x: 85, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LightningResistance",
                     amount: 9,
                  },
               ],
               position: { x: 65, y: 100 },
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
               position: { x: 30, y: 25 },
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
               position: { x: 70, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 3,
                  },
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 0 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [4, 5],
            [4, 6],
            [5, 3],
            [6, 3],
            [3, 7],
            [3, 8],
            [7, 9],
            [8, 9],
         ],
      },
      {
         name: "茎",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionArmor%",
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
                     type: "MinionElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 15, y: 60 },
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
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionArmor%",
                     amount: 10,
                  },
                  {
                     type: "MinionElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 40, y: 55 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 80, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 60, y: 60 },
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
               position: { x: 55, y: 100 },
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
               position: { x: 25, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionLifeRegeneration%OfMaximumLife",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 10 },
            },
            {
               isEntry: true,
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
               position: { x: 95, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 45 },
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
                     type: "MinionAttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "MinionCastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 5 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 0 },
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
               position: { x: 30, y: 0 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [4, 5],
            [4, 6],
            [5, 3],
            [6, 3],
            [3, 7],
            [7, 8],
            [9, 10],
            [10, 11],
            [12, 13],
            [13, 11],
            [11, 14],
            [14, 8],
         ],
      },
      {
         name: "根",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretArmor%",
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
                     type: "TurretElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 15, y: 60 },
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
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretArmor%",
                     amount: 10,
                  },
                  {
                     type: "TurretElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 40, y: 55 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 80, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretMaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 60, y: 60 },
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
               position: { x: 55, y: 100 },
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
               position: { x: 25, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretLifeRegeneration%OfMaximumLife",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 5 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretAttackSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 95, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 45 },
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
               position: { x: 50, y: 10 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
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
                     type: "TurretHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 15 },
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
               position: { x: 30, y: 5 },
            },
         ],
         edges: [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
            [4, 5],
            [4, 6],
            [5, 3],
            [6, 3],
            [3, 7],
            [7, 8],
            [9, 10],
            [10, 11],
            [12, 13],
            [13, 11],
            [11, 14],
            [14, 8],
         ],
      },
   ],
};
