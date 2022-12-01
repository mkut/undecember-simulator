import { ZodiacTier } from "game/zodiac";

export { Trait6 };

const Trait6: ZodiacTier = {
   name: "特性VI",
   requiredPoints: 15,
   constellations: [
      {
         name: "ネメラ",
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
                     type: "PhysicalDamage%",
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
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
                     type: "PhysicalDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ArmorPenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 90, y: 10 },
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
               position: { x: 30, y: 50 },
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
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 55, y: 40 },
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
               position: { x: 75, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackSpeed%",
                     amount: 4,
                  },
               ],
               position: { x: 100, y: 40 },
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
               position: { x: 25, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackCriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 50, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackCriticalRate%",
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
                     type: "AttackCriticalDamageMultiplier%",
                     amount: 10,
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
         name: "息吹",
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
               position: { x: 50, y: 50 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "FireDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "FireDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "FireDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 15, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "FireResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 5, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LightningDamage%",
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
                     type: "LightningDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 25, y: 45 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "LightningDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 10, y: 45 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "LightningResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 0, y: 40 },
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
               position: { x: 55, y: 90 },
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
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 95 },
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
               position: { x: 15, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "CastSpeed%",
                     amount: 4,
                  },
               ],
               position: { x: 0, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PoisonDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 95 },
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
               position: { x: 85, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PoisonResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 95, y: 90 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ColdDamage%",
                     amount: 10,
                  },
               ],
               position: { x: 60, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ColdDamage%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 45 },
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
               position: { x: 85, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ColdResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 100, y: 40 },
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
               position: { x: 45, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellCriticalRate%",
                     amount: 10,
                  },
                  {
                     type: "HitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 5 },
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
               position: { x: 85, y: 0 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellCriticalDamageMultiplier%",
                     amount: 10,
                  },
               ],
               position: { x: 100, y: 5 },
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
         name: "流れ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionDamage%",
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
                     type: "AbysslingHitRate%",
                     amount: 10,
                  },
               ],
               position: { x: 5, y: 40 },
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
               position: { x: 15, y: 15 },
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
               position: { x: 30, y: 0 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MinionCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 5, y: 100 },
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
               position: { x: 15, y: 80 },
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
               position: { x: 25, y: 45 },
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
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionAttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "MinionCastSpeed%",
                     amount: 2,
                  },
                  {
                     type: "MinionCriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 0 },
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
               position: { x: 60, y: 25 },
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
               position: { x: 100, y: 75 },
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
               position: { x: 90, y: 50 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionElementalResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 80, y: 75 },
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
               position: { x: 65, y: 100 },
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
               position: { x: 90, y: 0 },
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
               position: { x: 75, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionArmorPenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 70, y: 50 },
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
               position: { x: 60, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionHitRate%",
                     amount: 10,
                  },
                  {
                     type: "MinionArmorPenetration%Less",
                     amount: 4,
                  },
                  {
                     type: "MinionElementalResistancePenetration%Less",
                     amount: 4,
                  },
               ],
               position: { x: 45, y: 75 },
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
               position: { x: 30, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "MinionDamage%More",
                     amount: 3,
                  },
               ],
               position: { x: 50, y: 50 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 8],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [9, 20],
            [10, 11],
            [11, 12],
            [12, 13],
            [13, 18],
            [14, 15],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20],
         ],
      },
      {
         name: "トライ",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TotemDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemAreaOfEffect%",
                     amount: 20,
                  },
               ],
               position: { x: 15, y: 5 },
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
               position: { x: 30, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemDuration%",
                     amount: 5,
                  },
               ],
               position: { x: 45, y: 5 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TotemMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 0, y: 35 },
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
               position: { x: 20, y: 40 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TotemArmor%",
                     amount: 10,
                  },
                  {
                     type: "TotemElementalResistance",
                     amount: 2,
                  },
               ],
               position: { x: 35, y: 35 },
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
               position: { x: 50, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TotemDuration%",
                     amount: 5,
                  },
                  {
                     type: "TotemMaximumLife%",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "TotemDuration%",
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
                     type: "TotemLifeRegeneration%OfMaximumLife",
                     amount: 2,
                  },
               ],
               position: { x: 90, y: 0 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 5, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 25, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 24,
                  },
               ],
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "PhysicalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 60, y: 60 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 5, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 20, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalReflectedDamageTaken%Less",
                     amount: 24,
                  },
               ],
               position: { x: 35, y: 95 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "ElementalReflectedDamageTaken%Less",
                     amount: 12,
                  },
               ],
               position: { x: 50, y: 90 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ReflectedDamageTaken%Less",
                     amount: 10,
                  },
               ],
               position: { x: 70, y: 85 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 8],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [11, 12],
            [12, 13],
            [13, 14],
            [14, 19],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
         ],
      },
      {
         name: "遊泳",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "BlockRate",
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
                     type: "AttackBlockRate",
                     amount: 3,
                  },
               ],
               position: { x: 40, y: 35 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "AttackBlockRate",
                     amount: 3,
                  },
                  {
                     type: "BlockCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 30, y: 60 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockCooldownRecovery%",
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
                     type: "ProjectileBlockRate",
                     amount: 6,
                  },
               ],
               position: { x: 5, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockCooldownRecovery%",
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
                     type: "LifeGainOnBlock",
                     amount: 40,
                  },
               ],
               position: { x: 0, y: 100 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellBlockRate",
                     amount: 3,
                  },
               ],
               position: { x: 60, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellBlockRate",
                     amount: 3,
                  },
                  {
                     type: "BlockCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 65, y: 0 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 85, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ManaGainOnBlock",
                     amount: 20,
                  },
               ],
               position: { x: 100, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "BlockCooldownRecovery%",
                     amount: 10,
                  },
               ],
               position: { x: 80, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ProjectileBlockRate",
                     amount: 6,
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
            [2, 5],
            [5, 6],
            [0, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [8, 11],
            [11, 12],
         ],
      },
      {
         name: "循環",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 12,
                  },
               ],
               position: { x: 0, y: 55 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackEvasion%",
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
                     type: "AttackDodge%",
                     amount: 2,
                  },
               ],
               position: { x: 30, y: 25 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "AttackEvasion%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 10 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellEvasion%",
                     amount: 15,
                  },
               ],
               position: { x: 15, y: 95 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "SpellDodge%",
                     amount: 2,
                  },
               ],
               position: { x: 30, y: 85 },
            },
            {
               isEntry: false,
               isNotable: false,
               mods: [
                  {
                     type: "SpellEvasion%",
                     amount: 15,
                  },
               ],
               position: { x: 45, y: 100 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Dodge%",
                     amount: 1,
                  },
                  {
                     type: "LifeGain%OfMaximumLifeOnDodge",
                     amount: 5,
                  },
               ],
               position: { x: 60, y: 45 },
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
               position: { x: 75, y: 15 },
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
               position: { x: 95, y: 0 },
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
               position: { x: 75, y: 80 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "Dodge%WhileBelow20%Life",
                     amount: 6,
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
         name: "対流",
         nodes: [
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "FireResistance",
                     amount: 9,
                  },
               ],
               position: { x: 0, y: 70 },
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
               position: { x: 20, y: 55 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "ColdResistance",
                     amount: 9,
                  },
               ],
               position: { x: 5, y: 35 },
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
               position: { x: 25, y: 30 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "LightningResistance",
                     amount: 9,
                  },
               ],
               position: { x: 10, y: 0 },
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
               position: { x: 40, y: 5 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "PoisonResistance",
                     amount: 9,
                  },
               ],
               position: { x: 90, y: 0 },
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
               position: { x: 75, y: 15 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "ElementalDamageTaken%Less",
                     amount: 3,
                  },
               ],
               position: { x: 60, y: 40 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumLife%",
                     amount: 3,
                  },
               ],
               position: { x: 5, y: 95 },
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
               position: { x: 25, y: 100 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Evasion%",
                     amount: 12,
                  },
               ],
               position: { x: 90, y: 100 },
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
               position: { x: 70, y: 100 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "Armor%",
                     amount: 10,
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
                     amount: 10,
                  },
               ],
               position: { x: 75, y: 75 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "MaximumBarrier%",
                     amount: 6,
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
                     amount: 6,
                  },
               ],
               position: { x: 80, y: 50 },
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
               position: { x: 45, y: 80 },
            },
         ],
         edges: [
            [0, 1],
            [1, 8],
            [2, 3],
            [3, 8],
            [4, 5],
            [5, 8],
            [6, 7],
            [7, 8],
            [9, 10],
            [10, 17],
            [11, 12],
            [12, 17],
            [13, 14],
            [14, 17],
            [15, 16],
            [16, 17],
         ],
      },
      {
         name: "微笑み",
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
               position: { x: 10, y: 45 },
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
               position: { x: 0, y: 25 },
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
               position: { x: 15, y: 0 },
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
               position: { x: 35, y: 0 },
            },
            {
               isEntry: true,
               isNotable: false,
               mods: [
                  {
                     type: "TurretCriticalRate%",
                     amount: 10,
                  },
               ],
               position: { x: 35, y: 100 },
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
               position: { x: 15, y: 90 },
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
               position: { x: 25, y: 50 },
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
               position: { x: 40, y: 30 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretAttackSpeed%",
                     amount: 2,
                  },
                  {
                     type: "TurretCriticalDamageMultiplier%",
                     amount: 5,
                  },
               ],
               position: { x: 50, y: 10 },
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
               position: { x: 60, y: 25 },
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
               position: { x: 95, y: 45 },
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
               position: { x: 100, y: 70 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretElementalResistancePenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 80, y: 80 },
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
               position: { x: 65, y: 100 },
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
               position: { x: 65, y: 0 },
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
               position: { x: 80, y: 10 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretArmorPenetration%Less",
                     amount: 8,
                  },
               ],
               position: { x: 75, y: 45 },
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
               position: { x: 65, y: 60 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretHitRate%",
                     amount: 10,
                  },
                  {
                     type: "TurretArmorPenetration%Less",
                     amount: 4,
                  },
                  {
                     type: "TurretElementalResistancePenetration%Less",
                     amount: 4,
                  },
               ],
               position: { x: 55, y: 75 },
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
               position: { x: 40, y: 65 },
            },
            {
               isEntry: false,
               isNotable: true,
               mods: [
                  {
                     type: "TurretDamage%More",
                     amount: 3,
                  },
               ],
               position: { x: 50, y: 50 },
            },
         ],
         edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 8],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [9, 20],
            [10, 11],
            [11, 12],
            [12, 13],
            [13, 18],
            [14, 15],
            [15, 16],
            [16, 17],
            [17, 18],
            [18, 19],
            [19, 20],
         ],
      },
   ],
};
