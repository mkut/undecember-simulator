import { ZodiacTier } from "game/zodiac";

export { Specialization2 };

const Specialization2: ZodiacTier = {
   name: "専門化II",
   requiredPoints: 15,
   constellations: [
      {
         name: "悲しみ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife%",
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
                     type: "AttackDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackHitRate%OfStrength",
                     amount: 100,
                  },
               ],
               position: { x: 25, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 3,
                  },
               ],
               position: { x: 18, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%Per400ArmorOnHelmet(Max20%)",
                     amount: 3,
                  },
               ],
               position: { x: 8, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StunRate",
                     amount: 6,
                  },
                  {
                     type: "StunDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 10, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StunRate",
                     amount: 4,
                  },
                  {
                     type: "Damage%MoreAgainstStunnedEnemies",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "集中Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "集中",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "集中Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 80, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreFor4SecondsAfterBlocking(CD4s)",
                     amount: 10,
                  },
               ],
               position: { x: 90, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "粉砕Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 58, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "粉砕",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "粉砕Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 83, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "過多出血",
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
                     type: "WarcryDuration%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcryCastSpeed%",
                     amount: 50,
                  },
                  {
                     type: "Damage%AgainstEnemiesAffectedByWarcry",
                     amount: 45,
                  },
               ],
               position: { x: 63, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 40,
                  },
               ],
               position: { x: 48, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "不屈の精神",
                     amount: 1,
                  },
               ],
               position: { x: 60, y: 0 },
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
            [0, 19],
            [19, 20],
         ],
      },
      {
         name: "怒り",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%For3SecondsAfterDealingCriticalStrike",
                     amount: 40,
                  },
                  {
                     type: "Dodge%For3SecondsAfterDealingCriticalStrike",
                     amount: 2,
                  },
               ],
               position: { x: 5, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "加速力Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "加速力",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "加速力Effect%",
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
                     type: "StrikeDamage%More",
                     amount: 8,
                  },
               ],
               position: { x: 5, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 10,
                  },
                  {
                     type: "Evasion%",
                     amount: 6,
                  },
               ],
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BlockRate",
                     amount: 6,
                  },
                  {
                     type: "BlockCooldownRecovery%",
                     amount: 15,
                  },
               ],
               position: { x: 75, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 10,
                  },
                  {
                     type: "Evasion%",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeGainOnBlock",
                     amount: 60,
                  },
                  {
                     type: "ManaGainOnBlock",
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
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 63, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 10,
                  },
                  {
                     type: "StrikeDamage%Less",
                     amount: 5,
                  },
               ],
               position: { x: 75, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 88, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTimeSpeed%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryEffect%",
                     amount: 8,
                  },
               ],
               position: { x: 45, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 20,
                  },
               ],
               position: { x: 60, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSpeed%",
                     amount: 3,
                  },
               ],
               position: { x: 45, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%ForEachNearbyEnemy(Max150%)",
                     amount: 7,
                  },
               ],
               position: { x: 30, y: 0 },
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
            [0, 19],
            [19, 20],
         ],
      },
      {
         name: "ストラ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 8,
                  },
                  {
                     type: "MinionDamage%",
                     amount: 8,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Minion鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%More",
                     amount: 8,
                  },
               ],
               position: { x: 0, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "聖戦士",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 15,
                  },
               ],
               position: { x: 10, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "神聖なる力",
                     amount: 1,
                  },
               ],
               position: { x: 8, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockRate",
                     amount: 3,
                  },
               ],
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreFor4SecondsAfterBlocking(CD4s)",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockRate",
                     amount: 3,
                  },
               ],
               position: { x: 95, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeGainOnBlock",
                     amount: 60,
                  },
                  {
                     type: "ManaGainOnBlock",
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
                     type: "Minion集中Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 63, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Minion集中",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion集中Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 88, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "循環",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemSummonSpeed%",
                     amount: 25,
                  },
               ],
               position: { x: 45, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TotemSummonSpeed%",
                     amount: 25,
                  },
                  {
                     type: "MaximumNumberOfSummonedTotem",
                     amount: 1,
                  },
               ],
               position: { x: 60, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ManaCost%Less",
                     amount: 3,
                  },
               ],
               position: { x: 55, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "群れの力",
                     amount: 7,
                  },
               ],
               position: { x: 33, y: 15 },
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
            [0, 19],
            [19, 20],
         ],
      },
      {
         name: "真空",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "悟りEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "悟り",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "悟りEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "HitRecovery%",
                     amount: 10,
                  },
                  {
                     type: "ImmuneToFreezeWhileBarrierIsActive",
                     amount: 1,
                  },
               ],
               position: { x: 3, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "知識Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 35, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "知識",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "知識Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 10, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%More",
                     amount: 15,
                  },
                  {
                     type: "ElementalDamageTaken%More",
                     amount: 8,
                  },
               ],
               position: { x: 0, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
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
                     type: "鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 88, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellCriticalRate%",
                     amount: 40,
                  },
                  {
                     type: "SpellCriticalDamageMultiplier%",
                     amount: 20,
                  },
               ],
               position: { x: 98, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 63, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTimeMultiplier%",
                     amount: 8,
                  },
               ],
               position: { x: 75, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 10,
                  },
                  {
                     type: "StrikeDamage%Less",
                     amount: 5,
                  },
               ],
               position: { x: 95, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSkillCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 38, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MovementSkillCooldownUse",
                     amount: 1,
                  },
               ],
               position: { x: 55, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 30,
                  },
               ],
               position: { x: 45, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumChain",
                     amount: 1,
                  },
               ],
               position: { x: 33, y: 10 },
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
            [0, 19],
            [19, 20],
         ],
      },
      {
         name: "後悔",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 15,
                  },
                  {
                     type: "TurretDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%For3SecondsAfterDealingCriticalStrike",
                     amount: 40,
                  },
                  {
                     type: "Dodge%For3SecondsAfterDealingCriticalStrike",
                     amount: 2,
                  },
               ],
               position: { x: 5, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 3,
                  },
               ],
               position: { x: 25, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%More",
                     amount: 6,
                  },
               ],
               position: { x: 20, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumPierce",
                     amount: 1,
                  },
               ],
               position: { x: 10, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "貫く",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret圧倒Effect%",
                     amount: 40,
                  },
               ],
               position: { x: 65, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Turret圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret圧倒Effect%",
                     amount: 40,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%More",
                     amount: 8,
                  },
               ],
               position: { x: 85, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret照準力Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 63, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Turret照準力",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret照準力Effect%",
                     amount: 20,
                  },
               ],
               position: { x: 90, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "自信",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DefensiveBuffDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 47, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "防御戦術",
                     amount: 1,
                  },
               ],
               position: { x: 30, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 40,
                  },
               ],
               position: { x: 55, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLifePer5Dexterity(Max500)",
                     amount: 2,
                  },
               ],
               position: { x: 40, y: 5 },
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
            [0, 19],
            [19, 20],
         ],
      },
      {
         name: "欲望",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Damage%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTimeSpeed%",
                     amount: 8,
                  },
               ],
               position: { x: 28, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 10,
                  },
                  {
                     type: "StrikeDamage%Less",
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
                     type: "加速力Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 38, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "加速力",
                     amount: 1,
                  },
               ],
               position: { x: 28, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "加速力Effect%",
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
                     type: "StrikeDamage%More",
                     amount: 8,
                  },
               ],
               position: { x: 0, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 65, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%For3SecondsAfterDealingCriticalStrike",
                     amount: 40,
                  },
                  {
                     type: "Dodge%For3SecondsAfterDealingCriticalStrike",
                     amount: 2,
                  },
               ],
               position: { x: 95, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 18,
                  },
               ],
               position: { x: 60, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "快速",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 18,
                  },
               ],
               position: { x: 85, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Dodge%WhileBelow20%Life",
                     amount: 8,
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
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CannotDealCriticalStrike",
                     amount: 1,
                  },
                  {
                     type: "StrikeDamage%More",
                     amount: 20,
                  },
               ],
               position: { x: 55, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 18,
                  },
               ],
               position: { x: 55, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Dodge%",
                     amount: 3,
                  },
               ],
               position: { x: 35, y: 5 },
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
            [0, 19],
            [19, 20],
         ],
      },
   ],
};
