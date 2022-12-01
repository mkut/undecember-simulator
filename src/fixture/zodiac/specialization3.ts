import { ZodiacTier } from "game/zodiac";

export { Specialization3 };

const Specialization3: ZodiacTier = {
   name: "専門化III",
   requiredPoints: 15,
   constellations: [
      {
         name: "松明",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MeleeDamage%",
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
                     type: "AttackDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%",
                     amount: 40,
                  },
                  {
                     type: "AreaOfEffect%",
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
                     type: "AttackDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 8, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 10,
                  },
               ],
               position: { x: 0, y: 0 },
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
               position: { x: 35, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 100,
                  },
               ],
               position: { x: 25, y: 60 },
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
               position: { x: 10, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeLeech%OfDamageOnHit",
                     amount: 0.3,
                  },
                  {
                     type: "LifeLeechLimit%OfMaximumLife",
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
                     type: "WarcrySkillCooldownRecovery%",
                     amount: 15,
                  },
               ],
               position: { x: 62, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%DuringWarcryEffect",
                     amount: 20,
                  },
                  {
                     type: "CriticalDamageMultiplier%DuringWarcryEffect",
                     amount: 20,
                  },
               ],
               position: { x: 73, y: 35 },
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
               position: { x: 85, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ArmorPenetration%LessAgainstEnemiesAffectedByWarcry",
                     amount: 50,
                  },
               ],
               position: { x: 95, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MeleeDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 55, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackDamage%MorePer50Strength(Max15%)",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MeleeDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 83, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstBossEnemiesThatAreBelow25%Life",
                     amount: 30,
                  },
               ],
               position: { x: 95, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 15,
                  },
               ],
               position: { x: 40, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Armor%More",
                     amount: 6,
                  },
                  {
                     type: "MaximumPhysicalDamageReduction%FromArmor",
                     amount: 3,
                  },
               ],
               position: { x: 20, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackHitRate%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "衝撃",
                     amount: 1,
                  },
               ],
               position: { x: 80, y: 15 },
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
         name: "ティパン",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 15,
                  },
                  {
                     type: "ThreatLevel%",
                     amount: 100,
                  },
               ],
               position: { x: 50, y: 50 },
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
               position: { x: 35, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%Per300ArmorOnBodyArmor(Max150%)",
                     amount: 10,
                  },
               ],
               position: { x: 28, y: 15 },
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
               position: { x: 15, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%More%OfStrengthRequirementOnShield(Max15%)",
                     amount: 5,
                  },
               ],
               position: { x: 5, y: 10 },
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
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreDuringWarcryEffect",
                     amount: 12,
                  },
               ],
               position: { x: 30, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "WarcryEffect%",
                     amount: 10,
                  },
               ],
               position: { x: 20, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CriticalRate%AgainstEnemiesAffectedByWarcry",
                     amount: 50,
                  },
                  {
                     type: "CriticalDamageMultiplier%AgainstEnemiesAffectedByWarcry",
                     amount: 20,
                  },
               ],
               position: { x: 10, y: 70 },
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
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%More",
                     amount: 9,
                  },
               ],
               position: { x: 70, y: 10 },
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
               position: { x: 85, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "闘魂",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 0 },
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
               position: { x: 60, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "痛み(Block)",
                     amount: 1,
                  },
               ],
               position: { x: 73, y: 40 },
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
               position: { x: 85, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ブロック専門家",
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
                     type: "Armor%",
                     amount: 15,
                  },
               ],
               position: { x: 55, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "肉弾防御",
                     amount: 1,
                  },
               ],
               position: { x: 73, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 4,
                  },
               ],
               position: { x: 55, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 10,
                  },
                  {
                     type: "MaximumElementalResistance%",
                     amount: 2,
                  },
               ],
               position: { x: 40, y: 0 },
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
         name: "たき火",
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
               position: { x: 50, y: 50 },
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
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%More",
                     amount: 9,
                  },
               ],
               position: { x: 30, y: 10 },
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
               position: { x: 15, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "膺懲",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumLife%More",
                     amount: 9,
                  },
               ],
               position: { x: 30, y: 60 },
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
               position: { x: 15, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamage%More",
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
                     type: "AttackCriticalRate%",
                     amount: 15,
                  },
               ],
               position: { x: 60, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackDamage%For2SecondsAfterDealingHit(Max15Stack)",
                     amount: 5,
                  },
               ],
               position: { x: 70, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackCriticalDamageMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 85, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "バーサーカー",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 10 },
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
               position: { x: 60, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 100,
                  },
               ],
               position: { x: 73, y: 90 },
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
               position: { x: 85, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "近接戦闘",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSkillCooldownRecovery%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 95 },
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
               position: { x: 30, y: 90 },
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
               position: { x: 48, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ブロック熟練",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 10 },
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
         name: "炎",
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
               position: { x: 50, y: 35 },
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
               position: { x: 38, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeLeech%OfDamageOnHit",
                     amount: 0.2,
                  },
                  {
                     type: "LifeLeechLimit%OfMaximumLife",
                     amount: 5,
                  },
               ],
               position: { x: 25, y: 20 },
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
               position: { x: 15, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ImmuneToWound",
                     amount: 1,
                  },
                  {
                     type: "MovementSpeedCannotBeModifiedToBelowBaseValueWhileLifeLeeching",
                     amount: 1,
                  },
               ],
               position: { x: 10, y: 0 },
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
               position: { x: 45, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%More",
                     amount: 15,
                  },
                  {
                     type: "PhysicalDamageTaken%More",
                     amount: 8,
                  },
               ],
               position: { x: 30, y: 60 },
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
               position: { x: 15, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTime%MoreAgainstBossEnemies",
                     amount: 15,
                  },
               ],
               position: { x: 5, y: 65 },
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
               position: { x: 62, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%For3SecondsAfterKilling(Max15Stack)",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 45 },
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
               position: { x: 80, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "武器専門家",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 30 },
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
               position: { x: 55, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%",
                     amount: 50,
                  },
                  {
                     type: "AreaOfEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 70, y: 75 },
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
               position: { x: 85, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Dodge%",
                     amount: 1,
                  },
               ],
               position: { x: 50, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackDodge%Per100Strength",
                     amount: 1,
                  },
                  {
                     type: "SpellDodge%Per100Dexterity",
                     amount: 1,
                  },
               ],
               position: { x: 30, y: 90 },
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
               position: { x: 45, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "狂暴",
                     amount: 1,
                  },
               ],
               position: { x: 60, y: 10 },
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
         name: "釣り人",
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
                     type: "ManaRegeneration%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaCost%More",
                     amount: 8,
                  },
                  {
                     type: "Damage%More",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 15 },
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
               position: { x: 20, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamageTakenFromManaBeforeLife%",
                     amount: 10,
                  },
                  {
                     type: "MaximumMana%",
                     amount: 15,
                  },
               ],
               position: { x: 12, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "先鋒長",
                     amount: 1,
                  },
               ],
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 4,
                  },
               ],
               position: { x: 25, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%More",
                     amount: 10,
                  },
                  {
                     type: "Damage%ForEachPartyMemberWithin600(Max60%)",
                     amount: 6,
                  },
               ],
               position: { x: 15, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifeRegeneration",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 5 },
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
               position: { x: 85, y: 10 },
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
                     type: "BarrierRegeneration%OfLifeRegeneration",
                     amount: 100,
                  },
               ],
               position: { x: 100, y: 20 },
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
               position: { x: 60, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "疾風",
                     amount: 1,
                  },
               ],
               position: { x: 70, y: 75 },
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
               position: { x: 82, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageTakenByTotemInstead%",
                     amount: 10,
                  },
                  {
                     type: "TotemMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 92, y: 85 },
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
               position: { x: 40, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumBarrier%OfArmorOnShield(Max100)",
                     amount: 4,
                  },
               ],
               position: { x: 20, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BuffSkillCooldownRecovery%",
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
                     type: "満潮",
                     amount: 1,
                  },
               ],
               position: { x: 85, y: 50 },
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
         name: "帆船",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
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
                     type: "MinionMaximumLife%",
                     amount: 7,
                  },
               ],
               position: { x: 45, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "RuneKnightBuffEffect%",
                     amount: 50,
                  },
               ],
               position: { x: 32, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 7,
                  },
               ],
               position: { x: 18, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageTakenByRuneKnightInstead%",
                     amount: 15,
                  },
               ],
               position: { x: 12, y: 0 },
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
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%More",
                     amount: 20,
                  },
                  {
                     type: "Damage%Less",
                     amount: 50,
                  },
                  {
                     type: "CastSpeed%More",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 85 },
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
               position: { x: 15, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "能力値転移",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 80 },
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
               position: { x: 55, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%More",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 15 },
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
               position: { x: 80, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumNumberOfSummonedAbyssling",
                     amount: 1,
                  },
                  {
                     type: "NumberOfSummonedAbysslingPerCast",
                     amount: 1,
                  },
               ],
               position: { x: 95, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion加速力Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 62, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Minion加速力",
                     amount: 1,
                  },
               ],
               position: { x: 85, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Minion加速力Effect%",
                     amount: 15,
                  },
               ],
               position: { x: 95, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "亡霊",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 70 },
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
               position: { x: 35, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "歪んだ力",
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
                     type: "MaximumBarrier",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRegeneration%OfMaximumBarrierWhileBarrierIsRecharging",
                     amount: 4,
                  },
               ],
               position: { x: 53, y: 80 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MinionMaximumLife%",
                     amount: 7,
                  },
               ],
               position: { x: 60, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaCost%LessForEachSummonedAbyssling",
                     amount: 5,
                  },
                  {
                     type: "ManaCost%LessForEachSummonedRuneKnight",
                     amount: 15,
                  },
               ],
               position: { x: 77, y: 90 },
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
               position: { x: 70, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CannotUseBarrier",
                     amount: 4,
                  },
                  {
                     type: "MinionMaximumBarrier%OfMaximumBarrier",
                     amount: 30,
                  },
               ],
               position: { x: 90, y: 40 },
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
            [0, 21],
            [21, 22],
            [0, 23],
            [23, 24],
         ],
      },
      {
         name: "滝",
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
               position: { x: 50, y: 40 },
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
               position: { x: 40, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierLeech%OfDamageOnHit",
                     amount: 0.3,
                  },
                  {
                     type: "BarrierLeechLimit%OfMaximumBarrier",
                     amount: 3,
                  },
               ],
               position: { x: 25, y: 10 },
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
               position: { x: 12, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaCost%More",
                     amount: 8,
                  },
                  {
                     type: "ElementalDamage%More",
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
                     type: "ElementalDamage%",
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
                     type: "ElementalDamage%MorePer50Intelligence",
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
                     type: "CastSpeed%",
                     amount: 3,
                  },
               ],
               position: { x: 15, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CastSpeed%More",
                     amount: 8,
                  },
               ],
               position: { x: 5, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 62, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "NumberOfProjectile",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 90, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 8,
                  },
                  {
                     type: "AreaOfEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 100, y: 40 },
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
               position: { x: 62, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalReflectedDamageTaken%Less",
                     amount: 100,
                  },
               ],
               position: { x: 75, y: 80 },
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
               position: { x: 85, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "リチャージ",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellCriticalRate%",
                     amount: 15,
                  },
               ],
               position: { x: 52, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellCriticalDamageMultiplier%",
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
                     type: "MaximumBarrier%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumBarrier%More",
                     amount: 6,
                  },
               ],
               position: { x: 60, y: 10 },
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
         name: "海賊",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "AilmentRate",
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
                     type: "ManaRegeneration%",
                     amount: 15,
                  },
               ],
               position: { x: 38, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaCost%More",
                     amount: 8,
                  },
                  {
                     type: "ElementalDamage%More",
                     amount: 15,
                  },
               ],
               position: { x: 30, y: 20 },
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
               position: { x: 17, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "StrikeDamageTakenFromManaBeforeLife%",
                     amount: 5,
                  },
               ],
               position: { x: 12, y: 0 },
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
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DamageOverTimeMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 60 },
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
               position: { x: 15, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ExtraFireDamage%OfDamageOnHit",
                     amount: 8,
                  },
               ],
               position: { x: 5, y: 55 },
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
               position: { x: 65, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstEnemiesAffectedByControlAilment",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 25 },
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
               position: { x: 88, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ExtraColdDamage%OfDamageOnHit",
                     amount: 8,
                  },
               ],
               position: { x: 95, y: 20 },
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
               position: { x: 65, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstEnemiesAffectedByDebuffAilment",
                     amount: 10,
                  },
               ],
               position: { x: 78, y: 50 },
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
               position: { x: 80, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ExtraLightningDamage%OfDamageOnHit",
                     amount: 8,
                  },
               ],
               position: { x: 95, y: 70 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BarrierRechargeCooldownReduction",
                     amount: 0.3,
                  },
               ],
               position: { x: 40, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "BarrierRechargeCooldownRecovery%",
                     amount: 30,
                  },
               ],
               position: { x: 57, y: 90 },
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
               position: { x: 57, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SkillCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 38, y: 5 },
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
         name: "灯火",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
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
                     type: "照準力Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 35, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "照準力",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "照準力Effect%",
                     amount: 30,
                  },
               ],
               position: { x: 15, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "狙撃",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 0 },
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
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%More",
                     amount: 9,
                  },
               ],
               position: { x: 25, y: 75 },
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
               position: { x: 15, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "切断",
                     amount: 1,
                  },
               ],
               position: { x: 5, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
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
                     type: "NumberOfProjectile",
                     amount: 2,
                  },
               ],
               position: { x: 70, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ProjectileDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ProjectileDamage%More",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 20 },
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
               position: { x: 65, y: 55 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 100,
                  },
               ],
               position: { x: 80, y: 40 },
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
               position: { x: 90, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "決意",
                     amount: 1,
                  },
               ],
               position: { x: 100, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AreaOfEffect%",
                     amount: 30,
                  },
               ],
               position: { x: 50, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AreaDamage%More",
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 80 },
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
               position: { x: 50, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Evasion%Per100MovementSpeed",
                     amount: 10,
                  },
               ],
               position: { x: 33, y: 0 },
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
         name: "火鉢",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife",
                     amount: 20,
                  },
                  {
                     type: "TurretDamage%",
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
                     type: "Turret近接射撃Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Turret近接射撃",
                     amount: 1,
                  },
               ],
               position: { x: 30, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret近接射撃Effect%",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 20 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "改造",
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
                     type: "TurretMaximumLife%",
                     amount: 8,
                  },
               ],
               position: { x: 35, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ボウガン熟練",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TurretMaximumLife%",
                     amount: 8,
                  },
               ],
               position: { x: 12, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "痛み(Turret)",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 65, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Turret鋭利さ",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "Turret鋭利さEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 85, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "注入",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 15 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "OffensiveBuffDuration%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "攻撃戦術",
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
                     type: "OffensiveBuffDuration%",
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
                     type: "OffensiveBuffSkillCooldownRecovery%",
                     amount: 50,
                  },
               ],
               position: { x: 92, y: 90 },
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
               position: { x: 40, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%MoreFor3SecondsAfterSummoningTurret",
                     amount: 12,
                  },
               ],
               position: { x: 25, y: 100 },
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
               position: { x: 60, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LifePotionDuration%",
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
         name: "ガニダ",
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
                     type: "AttackCriticalRate%",
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
                     type: "AttackCriticalRate%Per40Dexterity",
                     amount: 4,
                  },
                  {
                     type: "AttackCriticalDamageMultiplier%Per20Intelligence",
                     amount: 1,
                  },
               ],
               position: { x: 25, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackCriticalRate%",
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
                     type: "AttackCriticalDamageMultiplier%",
                     amount: 30,
                  },
               ],
               position: { x: 0, y: 15 },
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
               position: { x: 25, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%More",
                     amount: 9,
                  },
               ],
               position: { x: 15, y: 50 },
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
               position: { x: 10, y: 85 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "切断",
                     amount: 1,
                  },
               ],
               position: { x: 0, y: 75 },
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
               position: { x: 62, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger",
                     amount: 2,
                  },
               ],
               position: { x: 75, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BleedingRate",
                     amount: 6,
                  },
               ],
               position: { x: 85, y: 25 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstBleedingAndPoisoningEnemies",
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
                     type: "PoisonDamage%",
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
                     type: "ExtraPoisonDamage%OfDamageOnHit",
                     amount: 8,
                  },
               ],
               position: { x: 70, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisoningRate",
                     amount: 6,
                  },
               ],
               position: { x: 82, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreForEachPoisoningOfTarget",
                     amount: 2,
                  },
               ],
               position: { x: 95, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "MovementSkillCooldownRecovery%",
                     amount: 15,
                  },
               ],
               position: { x: 50, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 100,
                  },
               ],
               position: { x: 35, y: 75 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "OffensiveBuffEffect%",
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
                     type: "Damage%DuringOffensiveBuffEffect",
                     amount: 70,
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
         name: "小川",
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
               position: { x: 50, y: 60 },
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
               position: { x: 35, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalResistancePenetration",
                     amount: 8,
                  },
               ],
               position: { x: 25, y: 20 },
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
               position: { x: 15, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger",
                     amount: 2,
                  },
               ],
               position: { x: 10, y: 5 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonDamage%",
                     amount: 15,
                  },
               ],
               position: { x: 35, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstPoisoningEnemies",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 60 },
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
               position: { x: 10, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MaximumPoisoningStack",
                     amount: 5,
                  },
               ],
               position: { x: 20, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalResistance",
                     amount: 3,
                  },
               ],
               position: { x: 62, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "元素親和力",
                     amount: 1,
                  },
               ],
               position: { x: 75, y: 30 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ChaosResistance",
                     amount: 9,
                  },
               ],
               position: { x: 85, y: 5 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "元素吸収",
                     amount: 15,
                  },
               ],
               position: { x: 95, y: 20 },
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
               position: { x: 65, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "DebuffAilmentRate",
                     amount: 4,
                  },
                  {
                     type: "DebuffAilmentEffect%",
                     amount: 15,
                  },
               ],
               position: { x: 77, y: 50 },
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
               position: { x: 85, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Damage%MoreAgainstEnemiesAffectedByDebuffAilment",
                     amount: 10,
                  },
               ],
               position: { x: 95, y: 60 },
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
               position: { x: 45, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamage%MoreWhileBarrierIsInactive",
                     amount: 15,
                  },
               ],
               position: { x: 55, y: 100 },
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
               position: { x: 65, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MovementSpeed%WhileAffectedBy風のベール",
                     amount: 12,
                  },
                  {
                     type: "ManaRegeneration%WhileAffectedBy地のベール",
                     amount: 50,
                  },
               ],
               position: { x: 48, y: 10 },
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
