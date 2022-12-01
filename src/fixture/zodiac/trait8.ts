import { ZodiacTier } from "game/zodiac";

export { Trait8 };

const Trait8: ZodiacTier = {
   name: "特性VIII",
   requiredPoints: 15,
   constellations: [
      {
         name: "腐敗",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackHitRate%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 13, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%WhileWieldingOneHanded",
                     amount: 25,
                  },
               ],
               position: { x: 30, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%WhileWieldingOneHanded",
                     amount: 2,
                  },
               ],
               position: { x: 45, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalRate%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%WhileWieldingOneHanded",
                     amount: 10,
                  },
                  {
                     type: "Damage%WhileWieldingOneHanded",
                     amount: 15,
                  },
               ],
               position: { x: 32, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalDamageMultiplier%WhileWieldingOneHanded",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%WhileWieldingOneHanded",
                     amount: 25,
                  },
               ],
               position: { x: 40, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CastSpeed%WhileWieldingOneHanded",
                     amount: 2,
                  },
               ],
               position: { x: 55, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileWieldingOneHanded",
                     amount: 25,
                  },
               ],
               position: { x: 65, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackCriticalRate%WhileWieldingOneHanded",
                     amount: 25,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 82, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellCriticalRate%WhileWieldingOneHanded",
                     amount: 25,
                  },
               ],
               position: { x: 96, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileWieldingOneHanded",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileWieldingOneHanded",
                     amount: 10,
                  },
                  {
                     type: "MovementSpeed%WhileWieldingOneHanded",
                     amount: 2,
                  },
               ],
               position: { x: 93, y: 80 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 10],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 10],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [10, 13],
            [13, 14],
            [10, 15],
            [15, 16],
         ],
      },
      {
         name: "疫病",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileWieldingTwoHanded",
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
                     type: "AttackHitRate%WhileWieldingTwoHanded",
                     amount: 10,
                  },
               ],
               position: { x: 8, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%WhileWieldingTwoHanded",
                     amount: 30,
                  },
               ],
               position: { x: 25, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%WhileWieldingTwoHanded",
                     amount: 2,
                  },
               ],
               position: { x: 40, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalRate%WhileWieldingTwoHanded",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%WhileWieldingTwoHanded",
                     amount: 10,
                  },
                  {
                     type: "Damage%WhileWieldingTwoHanded",
                     amount: 20,
                  },
               ],
               position: { x: 32, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalDamageMultiplier%WhileWieldingTwoHanded",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%WhileWieldingTwoHanded",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%WhileWieldingTwoHanded",
                     amount: 30,
                  },
               ],
               position: { x: 40, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CastSpeed%WhileWieldingTwoHanded",
                     amount: 2,
                  },
               ],
               position: { x: 55, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileWieldingTwoHanded",
                     amount: 30,
                  },
               ],
               position: { x: 65, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%WhileWieldingTwoHanded",
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
                     type: "CriticalDamageMultiplier%WhileWieldingTwoHanded",
                     amount: 15,
                  },
               ],
               position: { x: 93, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%WhileWieldingTwoHanded",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%WhileWieldingTwoHanded",
                     amount: 30,
                  },
               ],
               position: { x: 75, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileWieldingTwoHanded",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileWieldingTwoHanded",
                     amount: 15,
                  },
                  {
                     type: "MovementSpeed%WhileWieldingTwoHanded",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 60 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 10],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 10],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [10, 13],
            [13, 14],
            [10, 15],
            [15, 16],
         ],
      },
      {
         name: "ライア",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackHitRate%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 3, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%WhileDualWielding",
                     amount: 30,
                  },
               ],
               position: { x: 35, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%WhileDualWielding",
                     amount: 2,
                  },
               ],
               position: { x: 55, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalRate%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%WhileDualWielding",
                     amount: 10,
                  },
                  {
                     type: "Damage%WhileDualWielding",
                     amount: 20,
                  },
               ],
               position: { x: 30, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalDamageMultiplier%WhileDualWielding",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellHitRate%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%WhileDualWielding",
                     amount: 30,
                  },
               ],
               position: { x: 30, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CastSpeed%WhileDualWielding",
                     amount: 2,
                  },
               ],
               position: { x: 55, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileDualWielding",
                     amount: 30,
                  },
               ],
               position: { x: 65, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%WhileDualWielding",
                     amount: 6,
                  },
               ],
               position: { x: 93, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CastSpeed%WhileDualWielding",
                     amount: 6,
                  },
               ],
               position: { x: 90, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%WhileDualWielding",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileDualWielding",
                     amount: 15,
                  },
                  {
                     type: "MovementSpeed%WhileDualWielding",
                     amount: 2,
                  },
               ],
               position: { x: 98, y: 65 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 10],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 10],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [10, 13],
            [13, 14],
            [10, 15],
            [15, 16],
         ],
      },
      {
         name: "大工",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "DamageTaken%LessWhileWieldingShield",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%WhileWieldingShield",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%WhileWieldingShield",
                     amount: 10,
                  },
                  {
                     type: "AttackBlockRateWhileWieldingShield",
                     amount: 5,
                  },
               ],
               position: { x: 25, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistanceWhileWieldingShield",
                     amount: 3,
                  },
               ],
               position: { x: 50, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%WhileWieldingShield",
                     amount: 12,
                  },
               ],
               position: { x: 20, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ProjectileDamage%WhileWieldingShield",
                     amount: 10,
                  },
                  {
                     type: "ProjectileBlockRateWhileWieldingShield",
                     amount: 5,
                  },
               ],
               position: { x: 30, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistanceWhileWieldingShield",
                     amount: 3,
                  },
               ],
               position: { x: 45, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%WhileWieldingShield",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%WhileWieldingShield",
                     amount: 10,
                  },
                  {
                     type: "SpellBlockRateWhileWieldingShield",
                     amount: 5,
                  },
               ],
               position: { x: 20, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistanceWhileWieldingShield",
                     amount: 3,
                  },
               ],
               position: { x: 45, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BlockRateWhileWieldingShield",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%WhileWieldingShield",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidAilmentChance%WhileWieldingShield",
                     amount: 4,
                  },
                  {
                     type: "MaximumLifeWhileWieldingShield",
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
                     type: "MaximumBarrier%WhileWieldingShield",
                     amount: 6,
                  },
               ],
               position: { x: 75, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidAilmentChance%WhileWieldingShield",
                     amount: 4,
                  },
                  {
                     type: "ElementalResistanceWhileWieldingShield",
                     amount: 2,
                  },
               ],
               position: { x: 95, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%WhileWieldingShield",
                     amount: 12,
                  },
               ],
               position: { x: 75, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidAilmentChance%WhileWieldingShield",
                     amount: 4,
                  },
                  {
                     type: "BlockRateWhileWieldingShield",
                     amount: 1,
                  },
               ],
               position: { x: 90, y: 75 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 10],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 10],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [10, 13],
            [13, 14],
            [10, 15],
            [15, 16],
         ],
      },
      {
         name: "農夫",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
               ],
               position: { x: 50, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 45, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 30, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 15, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%More",
                     amount: 3,
                  },
               ],
               position: { x: 0, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 25,
                  },
               ],
               position: { x: 20, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CannotRegenerateLife",
                     amount: 1,
                  },
                  {
                     type: "MaximumLife%More",
                     amount: 12,
                  },
               ],
               position: { x: 5, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 30, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CannotRegenerateMana",
                     amount: 1,
                  },
                  {
                     type: "Damage%More",
                     amount: 4,
                  },
               ],
               position: { x: 15, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 60, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana%More",
                     amount: 6,
                  },
               ],
               position: { x: 75, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 12,
                  },
               ],
               position: { x: 70, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier",
                     amount: 5,
                  },
               ],
               position: { x: 80, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRegeneration%OfMaximumBarrierWhileBarrierIsRecharging",
                     amount: -5,
                  },
                  {
                     type: "MaximumBarrier%More",
                     amount: 15,
                  },
               ],
               position: { x: 90, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier",
                     amount: 5,
                  },
               ],
               position: { x: 80, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumBarrier%More",
                     amount: 3,
                  },
               ],
               position: { x: 95, y: 65 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [2, 5],
            [5, 6],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [8, 11],
            [11, 12],
            [0, 13],
            [13, 14],
            [14, 15],
            [15, 16],
            [14, 17],
            [17, 18],
         ],
      },
      {
         name: "狩人",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
               ],
               position: { x: 0, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 20, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana%",
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
                     type: "ManaRegeneration%",
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
                     type: "ManaCost%Less",
                     amount: 5,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SkillCooldownRecovery%",
                     amount: 2,
                  },
               ],
               position: { x: 25, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SkillCooldownRecovery%",
                     amount: 4,
                  },
               ],
               position: { x: 45, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SkillCooldownRecovery%",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "狩りの時間",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 25, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "獲物発見",
                     amount: 1,
                  },
               ],
               position: { x: 50, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "警戒移動",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 70 },
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
               position: { x: 20, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "HitRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 95 },
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
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Evasion%MoreWhileOnFullLife",
                     amount: 15,
                  },
               ],
               position: { x: 90, y: 95 },
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
         name: "羊飼い",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByDamagingAilment",
                     amount: 12,
                  },
               ],
               position: { x: 5, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByDamagingAilment",
                     amount: 12,
                  },
               ],
               position: { x: 25, y: 5 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByDebuffAilment",
                     amount: 15,
                  },
               ],
               position: { x: 5, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByDebuffAilment",
                     amount: 15,
                  },
               ],
               position: { x: 23, y: 50 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByControlAilment",
                     amount: 20,
                  },
               ],
               position: { x: 5, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByControlAilment",
                     amount: 20,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByAilment",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "FreezeRate",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "FreezeRate",
                     amount: 2,
                  },
                  {
                     type: "FreezeDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BindRate",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BindRate",
                     amount: 2,
                  },
                  {
                     type: "BindDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "StunRate",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StunRate",
                     amount: 2,
                  },
                  {
                     type: "StunDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 95, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 6],
            [2, 3],
            [3, 6],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [6, 9],
            [9, 10],
            [6, 11],
            [11, 12],
         ],
      },
      {
         name: "鍛冶屋",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamageTaken%Less",
                     amount: 2,
                  },
               ],
               position: { x: 0, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamageTaken%Less",
                     amount: 2,
                  },
               ],
               position: { x: 25, y: 0 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "FireDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 5, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "FireDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 35 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ColdDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 5, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ColdDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 65 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "LightningDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LightningDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 100, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 75, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalDamageTaken%Less",
                     amount: 100,
                  },
                  {
                     type: "DamageTaken%More",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CannotEvade",
                     amount: 1,
                  },
                  {
                     type: "MaximumLife%More",
                     amount: 15,
                  },
               ],
               position: { x: 55, y: 50 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDodge%",
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
                     type: "AttackDodge%",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 35 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDodge%",
                     amount: 2,
                  },
               ],
               position: { x: 100, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellDodge%",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeGain%OfMaximumLifeOnDodge",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 80 },
            },
         ],
         edges: [
            [0, 1],
            [1, 10],
            [1, 11],
            [2, 3],
            [3, 10],
            [3, 11],
            [4, 5],
            [5, 10],
            [5, 11],
            [6, 7],
            [7, 10],
            [7, 11],
            [8, 9],
            [9, 10],
            [9, 11],
            [12, 13],
            [13, 16],
            [14, 15],
            [15, 16],
         ],
      },
      {
         name: "影",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%",
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
                     type: "AbysslingBleedingRate",
                     amount: 4,
                  },
               ],
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingBleedingRate",
                     amount: 4,
                  },
                  {
                     type: "AbysslingDamage%AgainstBleedingEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 28, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%AgainstBleedingEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 12, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingDamage%MoreAgainstBleedingEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 5, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingChillRate",
                     amount: 4,
                  },
               ],
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingChillDuration%",
                     amount: 10,
                  },
                  {
                     type: "AbysslingDamage%AgainstChilledEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 28, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%AgainstChilledEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 11, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingDamage%MoreAgainstChilledEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 5, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingPoisoningRate",
                     amount: 4,
                  },
               ],
               position: { x: 55, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingPoisoningRate",
                     amount: 4,
                  },
                  {
                     type: "AbysslingDamage%AgainstPoisoningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 38, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%AgainstPoisoningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 22, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingDamage%MoreAgainstPoisoningEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 5, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingShockRate",
                     amount: 4,
                  },
               ],
               position: { x: 58, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingShockDuration%",
                     amount: 10,
                  },
                  {
                     type: "AbysslingDamage%AgainstShockedEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 70, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%AgainstShockedEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingDamage%MoreAgainstShockedEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 95, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingBurningRate",
                     amount: 4,
                  },
               ],
               position: { x: 58, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingBurningRate",
                     amount: 4,
                  },
                  {
                     type: "AbysslingDamage%AgainstBurningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 70, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingDamage%AgainstBurningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 87, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingDamage%MoreAgainstBurningEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 95, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingCriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "AbysslingCriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 67, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AbysslingCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AbysslingCriticalDamageMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 0 },
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
            [0, 17],
            [17, 18],
            [18, 19],
            [19, 20],
            [0, 21],
            [21, 22],
            [22, 23],
            [23, 24],
         ],
      },
      {
         name: "オーロラ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
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
                     type: "TurretBleedingRate",
                     amount: 4,
                  },
               ],
               position: { x: 10, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretBleedingRate",
                     amount: 4,
                  },
                  {
                     type: "TurretDamage%AgainstBleedingEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%AgainstBleedingEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 65, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%MoreAgainstBleedingEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 90, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretChillRate",
                     amount: 4,
                  },
               ],
               position: { x: 20, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretChillDuration%",
                     amount: 10,
                  },
                  {
                     type: "TurretDamage%AgainstChilledEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%AgainstChilledEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 70, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%MoreAgainstChilledEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 95, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretShockRate",
                     amount: 4,
                  },
               ],
               position: { x: 15, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretShockDuration%",
                     amount: 10,
                  },
                  {
                     type: "TurretDamage%AgainstShockedEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 30, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%AgainstShockedEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 65, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%MoreAgainstShockedEnemies",
                     amount: 4,
                  },
               ],
               position: { x: 85, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretCriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "TurretSummonSpeed%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretCriticalDamageMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 90 },
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
   ],
};
