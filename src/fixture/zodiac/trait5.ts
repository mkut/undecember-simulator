import { ZodiacTier } from "game/zodiac";

export { Trait5 };

const Trait5: ZodiacTier = {
   name: "特性V",
   requiredPoints: 15,
   constellations: [
      {
         name: "明暗",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%",
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
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 15, y: 20 },
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 0 },
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
               position: { x: 85, y: 10 },
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
               position: { x: 30, y: 40 },
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 30 },
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
               position: { x: 75, y: 40 },
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
               position: { x: 15, y: 60 },
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 55 },
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
               position: { x: 65, y: 65 },
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
               position: { x: 15, y: 100 },
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
                     type: "PhysicalDamage%",
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
                     type: "MaximumBarrier%",
                     amount: 6,
                  },
               ],
               position: { x: 80, y: 90 },
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 50 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 13],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 13],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 13],
            [0, 10],
            [10, 11],
            [11, 12],
            [12, 13],
         ],
      },
      {
         name: "閃光",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
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
                     type: "ElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 10, y: 0 },
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
                     type: "ElementalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 0 },
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
               position: { x: 70, y: 0 },
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
               position: { x: 25, y: 25 },
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
                     type: "ElementalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 30 },
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
               position: { x: 85, y: 40 },
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
               position: { x: 20, y: 70 },
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
                     type: "ElementalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 55 },
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
               position: { x: 70, y: 70 },
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
               position: { x: 10, y: 100 },
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
                     type: "ElementalDamage%",
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
                     type: "MaximumBarrier%",
                     amount: 6,
                  },
               ],
               position: { x: 85, y: 90 },
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 50 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 13],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 13],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 13],
            [0, 10],
            [10, 11],
            [11, 12],
            [12, 13],
         ],
      },
      {
         name: "霧",
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
               position: { x: 0, y: 55 },
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
               position: { x: 30, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeRegeneration",
                     amount: 2,
                  },
                  {
                     type: "LifeRegeneration%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 5 },
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
               position: { x: 70, y: 5 },
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
                     type: "LifeGainOnKill",
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
                     type: "MaximumMana",
                     amount: 30,
                  },
               ],
               position: { x: 25, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
                  {
                     type: "ManaRegeneration%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 50 },
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
               position: { x: 65, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumMana%",
                     amount: 5,
                  },
                  {
                     type: "ManaGainOnKill",
                     amount: 3,
                  },
               ],
               position: { x: 90, y: 45 },
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
               position: { x: 30, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRegeneration%OfMaximumBarrierWhileBarrierIsRecharging",
                     amount: 1,
                  },
               ],
               position: { x: 50, y: 90 },
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
               position: { x: 70, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRechargeCooldownRecovery%",
                     amount: 10,
                  },
                  {
                     type: "BarrierGainOnKill",
                     amount: 4,
                  },
               ],
               position: { x: 90, y: 90 },
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
         ],
      },
      {
         name: "ヒラ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryAreaOfEffect%",
                     amount: 25,
                  },
               ],
               position: { x: 20, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 5,
                  },
                  {
                     type: "WarcryEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 40, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryAreaOfEffect%",
                     amount: 25,
                  },
               ],
               position: { x: 55, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryCastSpeed%",
                     amount: 10,
                  },
               ],
               position: { x: 10, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 5,
                  },
                  {
                     type: "WarcryEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 30, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryCastSpeed%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryManaCost%Less",
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
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 5,
                  },
                  {
                     type: "WarcryEffect%",
                     amount: 5,
                  },
               ],
               position: { x: 35, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryManaCost%Less",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcrySkillLevel",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryDuration%",
                     amount: 8,
                  },
               ],
               position: { x: 80, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%AgainstEnemiesAffectedByWarcry",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryDuration%",
                     amount: 8,
                  },
               ],
               position: { x: 80, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByWarcry",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 100 },
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
         ],
      },
      {
         name: "露",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "BuffManaCost%Less",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "OffensiveBuffDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 5, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "OffensiveBuffEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "OffensiveBuffDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 55, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DefensiveBuffDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 5, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DefensiveBuffEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DefensiveBuffDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%DuringBuffEffect",
                     amount: 20,
                  },
                  {
                     type: "CriticalRate%DuringBuffEffect",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BuffEffect%",
                     amount: 4,
                  },
               ],
               position: { x: 75, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%DuringBuffEffect",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BuffEffect%",
                     amount: 4,
                  },
               ],
               position: { x: 80, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%DuringBuffEffect",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 7],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [7, 10],
            [10, 11],
         ],
      },
      {
         name: "霜",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "DamagingAilmentRate",
                     amount: 3,
                  },
               ],
               position: { x: 50, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisoningDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PoisoningRate",
                     amount: 4,
                  },
                  {
                     type: "PoisoningDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisoningDuration%",
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
                     type: "PoisoningRate",
                     amount: 4,
                  },
                  {
                     type: "Damage%AgainstPoisoningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 0, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisoningRate",
                     amount: 4,
                  },
               ],
               position: { x: 35, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PoisoningDamage%",
                     amount: 25,
                  },
               ],
               position: { x: 5, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BurningDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BurningRate",
                     amount: 4,
                  },
                  {
                     type: "BurningDamage%",
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
                     type: "BurningDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BurningRate",
                     amount: 4,
                  },
                  {
                     type: "Damage%AgainstBurningEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 20, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BurningRate",
                     amount: 4,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BurningDamage%",
                     amount: 25,
                  },
               ],
               position: { x: 10, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BleedingDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BleedingRate",
                     amount: 4,
                  },
                  {
                     type: "BleedingDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 85, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BleedingDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BleedingRate",
                     amount: 4,
                  },
                  {
                     type: "Damage%AgainstBleedingEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 100, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BleedingRate",
                     amount: 4,
                  },
               ],
               position: { x: 75, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BleedingDamage%",
                     amount: 25,
                  },
               ],
               position: { x: 95, y: 100 },
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
         name: "雷",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ControlAilmentRate",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 40 },
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
               position: { x: 5, y: 0 },
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
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstStunnedEnemies",
                     amount: 40,
                  },
               ],
               position: { x: 50, y: 5 },
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
               position: { x: 10, y: 55 },
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
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstFrozenEnemies",
                     amount: 40,
                  },
               ],
               position: { x: 45, y: 55 },
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
               position: { x: 5, y: 100 },
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
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%AgainstBinddEnemies",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ControlAilmentRate",
                     amount: 2,
                  },
                  {
                     type: "ControlAilmentDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ControlAilmentDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 75, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByControlAilment",
                     amount: 30,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ControlAilmentRate",
                     amount: 1,
                  },
               ],
               position: { x: 80, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%AgainstEnemiesAffectedByControlAilment",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 50 },
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
         ],
      },
      {
         name: "虹",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidAilmentChance%",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidDamagingAilmentChance%",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidDamagingAilmentChance%",
                     amount: 6,
                  },
               ],
               position: { x: 50, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidDamagingAilmentChance%",
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
                     type: "AvoidAilmentChance%",
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
                     type: "AvoidControlAilmentChance%",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidControlAilmentChance%",
                     amount: 6,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidControlAilmentChance%",
                     amount: 3,
                  },
               ],
               position: { x: 70, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidDebuffAilmentChance%",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AvoidDebuffAilmentChance%",
                     amount: 6,
                  },
               ],
               position: { x: 50, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidDebuffAilmentChance%",
                     amount: 3,
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
         name: "実",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 5,
                  },
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 70 },
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
               position: { x: 15, y: 5 },
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
                     type: "MinionArmor%",
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
                     type: "MinionArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 10 },
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
                     type: "MinionArmor%",
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
                     type: "MinionElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 20, y: 30 },
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
                     type: "MinionElementalResistance",
                     amount: 2,
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
               position: { x: 70, y: 35 },
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
                     type: "MinionElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 40 },
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
               position: { x: 25, y: 60 },
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
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 40, y: 75 },
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
               position: { x: 65, y: 65 },
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
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 85, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionCriticalRate%",
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
                     type: "MinionCriticalRate%",
                     amount: 5,
                  },
                  {
                     type: "MinionCriticalDamageMultiplier%",
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
                     type: "MinionCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionCriticalDamageMultiplier%",
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
      {
         name: "鉱山",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
                     amount: 5,
                  },
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 50 },
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
               position: { x: 15, y: 0 },
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
                     type: "TurretArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 10 },
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
               position: { x: 60, y: 5 },
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
                     type: "TurretArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 85, y: 5 },
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
               position: { x: 20, y: 30 },
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
                     type: "TurretElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 40 },
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
               position: { x: 70, y: 35 },
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
                     type: "TurretElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 40 },
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
               position: { x: 20, y: 60 },
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
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 40, y: 65 },
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
               position: { x: 65, y: 60 },
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
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 85, y: 60 },
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
                     amount: 5,
                  },
                  {
                     type: "TurretCriticalDamageMultiplier%",
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
                     type: "TurretCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 100 },
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
