import { ZodiacTier } from "game/zodiac";

export { Specialization1 };

const Specialization1: ZodiacTier = {
   name: "専門化I",
   requiredPoints: 15,
   constellations: [
      {
         name: "鋼鉄",
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
                     type: "MaximumLife%",
                     amount: 3,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WeaponRange",
                     amount: 20,
                  },
               ],
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaOfEffect%%OfWeaponRange(Max100%)",
                     amount: 20,
                  },
               ],
               position: { x: 25, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WeaponRange",
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
                     type: "MeleeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "再生力Effect%",
                     amount: 50,
                  },
               ],
               position: { x: 25, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "再生力",
                     amount: 1,
                  },
               ],
               position: { x: 15, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "再生力Effect%",
                     amount: 50,
                  },
               ],
               position: { x: 10, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%More",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 85 },
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
               position: { x: 62, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "野蛮性",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 50 },
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
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "強靭さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "強靭さ",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "強靭さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 83, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ImmuneToStun",
                     amount: 1,
                  },
                  {
                     type: "CriticalDamageTaken%Less",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 95 },
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
               position: { x: 50, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MovementSpeed%More",
                     amount: 5,
                  },
               ],
               position: { x: 35, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "WarcryDuration%",
                     amount: 10,
                  },
                  {
                     type: "Damage%DuringWarcryEffect",
                     amount: 30,
                  },
               ],
               position: { x: 80, y: 0 },
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
         name: "ハンマー",
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
               position: { x: 50, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "高揚Effect%",
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
                     type: "高揚",
                     amount: 1,
                  },
               ],
               position: { x: 30, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "高揚Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ImmuneToBind",
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
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 45, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 35, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 25, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 10, y: 100 },
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
               position: { x: 55, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 40,
                  },
               ],
               position: { x: 65, y: 60 },
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
               position: { x: 50, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 6,
                  },
               ],
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 65, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaOfEffect%",
                     amount: 20,
                  },
                  {
                     type: "AreaDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 80, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaOfEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 90, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "DamagingAilmentRate",
                     amount: 4,
                  },
               ],
               position: { x: 35, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%AgainstEnemiesAffectedByDamagingAilment",
                     amount: 30,
                  },
               ],
               position: { x: 15, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WeaponRange",
                     amount: 25,
                  },
               ],
               position: { x: 75, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MeleeDamage%",
                     amount: 15,
                  },
                  {
                     type: "AvoidDamagingAilmentChance%",
                     amount: 8,
                  },
               ],
               position: { x: 95, y: 40 },
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
         name: "闇",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 5,
                  },
                  {
                     type: "MaximumBarrier%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 25, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
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
                     type: "MaximumNumberOfSummonedAbyssling",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 20 },
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
               position: { x: 30, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamageTaken%Less",
                     amount: 5,
                  },
               ],
               position: { x: 15, y: 60 },
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
               position: { x: 10, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionMaximumLife%More",
                     amount: 4,
                  },
               ],
               position: { x: 0, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 40,
                  },
               ],
               position: { x: 62, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "マナ転換",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumMana",
                     amount: 40,
                  },
               ],
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 60, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Minion圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 83, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDoubleDamageChance%",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 95 },
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
               position: { x: 50, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TotemAreaOfEffect%",
                     amount: 60,
                  },
               ],
               position: { x: 35, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
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
                     type: "DamageTaken%LessFor3SecondsAfterBarrierDeactivated",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 0 },
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
         name: "光",
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
               position: { x: 30, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 10, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalResistancePenetration%Less",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 55 },
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
               position: { x: 5, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 6,
                  },
               ],
               position: { x: 20, y: 10 },
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
               position: { x: 20, y: 50 },
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
               position: { x: 35, y: 20 },
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
               position: { x: 55, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CastSpeed%More",
                     amount: 5,
                  },
               ],
               position: { x: 70, y: 5 },
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
               position: { x: 40, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "マナ転換",
                     amount: 1,
                  },
               ],
               position: { x: 60, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 80, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%MoreWhileBelow40%Life",
                     amount: 15,
                  },
               ],
               position: { x: 95, y: 40 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 55, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 85, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 100, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor",
                     amount: 100,
                  },
               ],
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ArmorPerMaximumBarrierOnHelmet(Max1000)",
                     amount: 2,
                  },
               ],
               position: { x: 5, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageTaken%LessFor3SecondsAfterBarrierDeactivated",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 95 },
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
         name: "カスポル",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AttackDamage%",
                     amount: 15,
                  },
                  {
                     type: "TurretDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
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
                     type: "圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 30, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 15, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackCriticalRate%",
                     amount: 40,
                  },
                  {
                     type: "AttackCriticalDamageMultiplier%",
                     amount: 20,
                  },
               ],
               position: { x: 0, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 45, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumNumberOfSummonedTurret",
                     amount: 1,
                  },
               ],
               position: { x: 35, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ボウガン増幅",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret高揚Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Turret高揚",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret高揚Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 82, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 0 },
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
               position: { x: 65, y: 60 },
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
               position: { x: 80, y: 45 },
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
               position: { x: 90, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ProjectileDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 35 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "速射砲",
                     amount: 1,
                  },
               ],
               position: { x: 15, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor",
                     amount: 100,
                  },
               ],
               position: { x: 70, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ArmorPer2EvasionOnHelmet(Max1000)",
                     amount: 1,
                  },
               ],
               position: { x: 88, y: 85 },
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
         name: "陰",
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
               position: { x: 45, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%",
                     amount: 30,
                  },
                  {
                     type: "DamagingAilmentRate",
                     amount: 8,
                  },
               ],
               position: { x: 30, y: 15 },
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
               position: { x: 15, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%More",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 20 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WeaponRange",
                     amount: 25,
                  },
               ],
               position: { x: 30, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaOfEffect%%OfWeaponRange(Max100%)",
                     amount: 20,
                  },
               ],
               position: { x: 18, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WeaponRange",
                     amount: 25,
                  },
               ],
               position: { x: 12, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 0, y: 85 },
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
               position: { x: 62, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%",
                     amount: 20,
                  },
                  {
                     type: "CriticalDamageMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 50 },
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
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "暗殺",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 60, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "圧倒",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "圧倒Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 83, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
                     amount: 6,
                  },
               ],
               position: { x: 95, y: 95 },
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
               position: { x: 50, y: 100 },
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
               position: { x: 35, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageTaken%LessFor3SecondsAfterBarrierDeactivated",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 0 },
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
