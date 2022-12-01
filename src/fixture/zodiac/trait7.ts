import { ZodiacTier } from "game/zodiac";

export { Trait7 };

const Trait7: ZodiacTier = {
   name: "特性VII",
   requiredPoints: 15,
   constellations: [
      {
         name: "粉塵",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PotionEffect%",
                     amount: 2,
                  },
               ],
               position: { x: 55, y: 60 },
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
               position: { x: 40, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifePotionEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LifePotionCooldownRecovery%",
                     amount: 5,
                  },
               ],
               position: { x: 20, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeGain%OfMaximumLifeWhenLifePotionUsed",
                     amount: 5,
                  },
               ],
               position: { x: 10, y: 0 },
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
               position: { x: 40, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaPotionEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaPotionCooldownRecovery%",
                     amount: 5,
                  },
               ],
               position: { x: 35, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaGain%OfMaximumManaWhenManaPotionUsed",
                     amount: 5,
                  },
               ],
               position: { x: 10, y: 90 },
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
               position: { x: 55, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BuffPotionDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 50 },
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
               position: { x: 75, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamageTaken%LessFor60SecondsAfterBuffPotionUsed",
                     amount: 5,
                  },
               ],
               position: { x: 90, y: 10 },
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
               position: { x: 100, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MovementSpeed%For90SecondsAfterBuffPotionUsed",
                     amount: 5,
                  },
               ],
               position: { x: 90, y: 90 },
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
               position: { x: 65, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamageTaken%LessFor60SecondsAfterBuffPotionUsed",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 100 },
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
            [10, 13],
            [13, 14],
            [10, 15],
            [15, 16],
         ],
      },
      {
         name: "香り",
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
                     type: "HitRate%",
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
                     type: "AreaDamage%",
                     amount: 20,
                  },
               ],
               position: { x: 55, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaDamage%",
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
                     type: "AreaOfEffect%",
                     amount: 40,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstEliteEnemies",
                     amount: 25,
                  },
               ],
               position: { x: 45, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
               ],
               position: { x: 65, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageTaken%LessFromEliteEnemies",
                     amount: 3,
                  },
               ],
               position: { x: 85, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "CriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "CriticalRate%",
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
                     type: "Damage%For2SecondsAfterDealingCriticalStrike",
                     amount: 40,
                  },
               ],
               position: { x: 95, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
               ],
               position: { x: 5, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
                  {
                     type: "AttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "CastSpeed%",
                     amount: 2,
                  },
               ],
               position: { x: 35, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 9,
                  },
               ],
               position: { x: 75, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%For2SecondsAfterHitEvaded",
                     amount: 40,
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
         name: "悪臭",
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
               position: { x: 50, y: 45 },
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
               position: { x: 45, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 5,
                  },
                  {
                     type: "MinionArmor%",
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
                     type: "MinionArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionPhysicalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 3, y: 0 },
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
               position: { x: 40, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionAttackSpeed%",
                     amount: 4,
                  },
                  {
                     type: "MinionCastSpeed%",
                     amount: 4,
                  },
               ],
               position: { x: 30, y: 30 },
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
               position: { x: 15, y: 30 },
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
               position: { x: 0, y: 20 },
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
               position: { x: 40, y: 65 },
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
               position: { x: 30, y: 70 },
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
               position: { x: 15, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionCriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "MinionCriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 2, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionChaosResistance",
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
                     type: "MinionElementalResistance",
                     amount: 4,
                  },
               ],
               position: { x: 30, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionChaosResistance",
                     amount: 6,
                  },
               ],
               position: { x: 17, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionElementalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 2, y: 95 },
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
               position: { x: 55, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 5,
                  },
                  {
                     type: "TurretArmor%",
                     amount: 10,
                  },
               ],
               position: { x: 68, y: 90 },
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
               position: { x: 80, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretPhysicalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 98, y: 90 },
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
               position: { x: 57, y: 65 },
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
               position: { x: 73, y: 60 },
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
               position: { x: 80, y: 75 },
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
                     type: "TurretCriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 97, y: 65 },
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
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretAttackSpeed%",
                     amount: 4,
                  },
               ],
               position: { x: 71, y: 40 },
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
               position: { x: 82, y: 35 },
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
               position: { x: 100, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretChaosResistance",
                     amount: 6,
                  },
               ],
               position: { x: 58, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretElementalResistance",
                     amount: 4,
                  },
               ],
               position: { x: 70, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretChaosResistance",
                     amount: 6,
                  },
               ],
               position: { x: 81, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretElementalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 98, y: 0 },
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
            [0, 25],
            [25, 26],
            [26, 27],
            [27, 28],
            [0, 29],
            [29, 30],
            [30, 31],
            [31, 32],
         ],
      },
      {
         name: "オルテミス",
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
               position: { x: 50, y: 50 },
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
               position: { x: 45, y: 10 },
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
               position: { x: 35, y: 0 },
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
               position: { x: 23, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%WhileBelow40%Life",
                     amount: 40,
                  },
               ],
               position: { x: 5, y: 0 },
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
               position: { x: 25, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeRegeneration",
                     amount: 2,
                  },
               ],
               position: { x: 10, y: 55 },
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
               position: { x: 40, y: 60 },
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
               position: { x: 30, y: 90 },
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
               position: { x: 18, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalDamageMultiplier%WhileBelow40%Mana",
                     amount: 20,
                  },
               ],
               position: { x: 8, y: 100 },
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
               position: { x: 45, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaGainOnKill",
                     amount: 8,
                  },
               ],
               position: { x: 60, y: 100 },
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
               position: { x: 60, y: 40 },
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
               position: { x: 75, y: 0 },
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
               position: { x: 85, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRechargeCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 0 },
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
               position: { x: 70, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%MoreWhileBarrierIsInactive",
                     amount: 6,
                  },
               ],
               position: { x: 85, y: 90 },
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
         name: "大気",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
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
                     type: "FireResistance",
                     amount: 9,
                  },
               ],
               position: { x: 35, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "FireDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 25, y: 0 },
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
               position: { x: 12, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumFireResistance%",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 0 },
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
               position: { x: 35, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LightningDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 25, y: 45 },
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
               position: { x: 12, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLightningResistance%",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 55 },
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
               position: { x: 45, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 30, y: 95 },
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
               position: { x: 15, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Armor%More",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 95 },
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
               position: { x: 60, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PoisonDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 75, y: 90 },
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
               position: { x: 90, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumPoisonResistance%",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 85 },
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
               position: { x: 60, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ColdDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 75, y: 40 },
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
               position: { x: 90, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumColdResistance%",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChaosResistance",
                     amount: 6,
                  },
               ],
               position: { x: 50, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ChaosDamageTaken%Less",
                     amount: 2,
                  },
               ],
               position: { x: 60, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChaosResistance",
                     amount: 6,
                  },
               ],
               position: { x: 75, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ChaosResistance",
                     amount: 12,
                  },
               ],
               position: { x: 90, y: 0 },
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
         name: "猛毒",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "DebuffAilmentRate",
                     amount: 1,
                  },
               ],
               position: { x: 50, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlindRate",
                     amount: 2,
                  },
               ],
               position: { x: 50, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BlindDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlindRate",
                     amount: 2,
                  },
               ],
               position: { x: 20, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstBlindedEnemies",
                     amount: 30,
                  },
               ],
               position: { x: 5, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlindRate",
                     amount: 2,
                  },
               ],
               position: { x: 25, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BlindEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 10, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ShockRate",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ShockDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ShockRate",
                     amount: 2,
                  },
               ],
               position: { x: 45, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstShockedEnemies",
                     amount: 20,
                  },
               ],
               position: { x: 30, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ShockRate",
                     amount: 2,
                  },
               ],
               position: { x: 20, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ShockEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 5, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChillRate",
                     amount: 2,
                  },
               ],
               position: { x: 65, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ChillDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChillRate",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstChilledEnemies",
                     amount: 30,
                  },
               ],
               position: { x: 100, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChillRate",
                     amount: 2,
                  },
               ],
               position: { x: 85, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ChillEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 95, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WoundRate",
                     amount: 2,
                  },
               ],
               position: { x: 60, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WoundDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WoundRate",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstWoundedEnemies",
                     amount: 30,
                  },
               ],
               position: { x: 100, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WoundRate",
                     amount: 2,
                  },
               ],
               position: { x: 80, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WoundEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 100, y: 35 },
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
            [0, 19],
            [19, 20],
            [20, 21],
            [21, 22],
            [20, 23],
            [23, 24],
         ],
      },
      {
         name: "クモ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBleedingChance%",
                     amount: 6,
                  },
               ],
               position: { x: 10, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBleedingChance%",
                     amount: 6,
                  },
               ],
               position: { x: 5, y: 40 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBurningChance%",
                     amount: 6,
                  },
               ],
               position: { x: 25, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBurningChance%",
                     amount: 6,
                  },
               ],
               position: { x: 20, y: 50 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidPoisoningChance%",
                     amount: 6,
                  },
               ],
               position: { x: 30, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidPoisoningChance%",
                     amount: 6,
                  },
               ],
               position: { x: 15, y: 90 },
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
               position: { x: 0, y: 85 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidStunChance%",
                     amount: 6,
                  },
               ],
               position: { x: 60, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidStunChance%",
                     amount: 6,
                  },
               ],
               position: { x: 45, y: 10 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidFreezeChance%",
                     amount: 6,
                  },
               ],
               position: { x: 62, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidFreezeChance%",
                     amount: 6,
                  },
               ],
               position: { x: 50, y: 40 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBindChance%",
                     amount: 6,
                  },
               ],
               position: { x: 60, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBindChance%",
                     amount: 6,
                  },
               ],
               position: { x: 45, y: 80 },
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
               position: { x: 35, y: 45 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidChillChance%",
                     amount: 6,
                  },
               ],
               position: { x: 70, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidChillChance%",
                     amount: 6,
                  },
               ],
               position: { x: 70, y: 75 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidShockChance%",
                     amount: 6,
                  },
               ],
               position: { x: 80, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidShockChance%",
                     amount: 6,
                  },
               ],
               position: { x: 80, y: 50 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidWoundChance%",
                     amount: 6,
                  },
               ],
               position: { x: 90, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidWoundChance%",
                     amount: 6,
                  },
               ],
               position: { x: 90, y: 65 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBlindChance%",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AvoidBlindChance%",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 80 },
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
               position: { x: 85, y: 100 },
            },
         ],
         edges: [
            [0, 1],
            [1, 6],
            [2, 3],
            [3, 6],
            [4, 5],
            [5, 6],
            [7, 8],
            [8, 13],
            [9, 10],
            [10, 13],
            [11, 12],
            [12, 13],
            [14, 15],
            [15, 22],
            [16, 17],
            [17, 22],
            [18, 19],
            [19, 22],
            [20, 21],
            [21, 22],
         ],
      },
      {
         name: "ウジ虫",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Strength",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Strength",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 100 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Dexterity",
                     amount: 5,
                  },
               ],
               position: { x: 90, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Dexterity",
                     amount: 5,
                  },
               ],
               position: { x: 80, y: 55 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Intelligence",
                     amount: 5,
                  },
               ],
               position: { x: 40, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Intelligence",
                     amount: 5,
                  },
               ],
               position: { x: 55, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MeleeDamage%IfStrengthAndDexterityAreAbove200",
                     amount: 30,
                  },
               ],
               position: { x: 100, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ProjectileDamage%IfDexterityAndIntelligenceAreAbove200",
                     amount: 30,
                  },
               ],
               position: { x: 60, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%IfStrengthAndIntelligenceAreAbove200",
                     amount: 30,
                  },
               ],
               position: { x: 30, y: 55 },
            },
            {
               isEntry: true,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%IfAllStatusesAreAbove200",
                     amount: 40,
                  },
               ],
               position: { x: 5, y: 30 },
            },
         ],
         edges: [
            [0, 1],
            [1, 6],
            [1, 8],
            [2, 3],
            [3, 6],
            [3, 7],
            [4, 5],
            [5, 7],
            [5, 8],
         ],
      },
   ],
};
