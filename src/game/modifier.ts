export type { Modifier, ModifierType };

export { printModifier, modifierSortOrder };

const ModifierType = [
   // ダメージ
   "Damage%",
   "Damage%Per300ArmorOnBodyArmor(Max150%)",
   "Damage%ForEachNearbyEnemy(Max150%)",
   "Damage%ForEachPartyMemberWithin600(Max60%)",
   "Damage%WhileWieldingOneHanded",
   "Damage%WhileWieldingTwoHanded",
   "Damage%WhileDualWielding",
   "Damage%IfAllStatusesAreAbove200",
   "Damage%WhileBelow40%Life",
   "Damage%DuringBuffEffect",
   "Damage%DuringOffensiveBuffEffect",
   "Damage%DuringWarcryEffect",
   "Damage%AgainstEliteEnemies",
   "Damage%AgainstEnemiesAffectedByWarcry",
   "Damage%AgainstEnemiesAffectedByAilment",
   "Damage%AgainstEnemiesAffectedByDamagingAilment",
   "Damage%AgainstBleedingEnemies",
   "Damage%AgainstBurningEnemies",
   "Damage%AgainstPoisoningEnemies",
   "Damage%AgainstEnemiesAffectedByControlAilment",
   "Damage%AgainstStunnedEnemies",
   "Damage%AgainstFrozenEnemies",
   "Damage%AgainstBinddEnemies",
   "Damage%AgainstEnemiesAffectedByDebuffAilment",
   "Damage%AgainstWoundedEnemies",
   "Damage%AgainstChilledEnemies",
   "Damage%AgainstShockedEnemies",
   "Damage%AgainstBlindedEnemies",
   "Damage%For2SecondsAfterDealingCriticalStrike",
   "Damage%For3SecondsAfterDealingCriticalStrike",
   "Damage%For2SecondsAfterHitEvaded",
   "AttackDamage%",
   "AttackDamage%For2SecondsAfterDealingHit(Max15Stack)",
   "SpellDamage%",
   "PhysicalDamage%",
   "PhysicalDamage%WhileWieldingOneHanded",
   "PhysicalDamage%WhileWieldingTwoHanded",
   "PhysicalDamage%WhileDualWielding",
   "PhysicalDamage%WhileWieldingShield",
   "ElementalDamage%",
   "ElementalDamage%WhileWieldingOneHanded",
   "ElementalDamage%WhileWieldingTwoHanded",
   "ElementalDamage%WhileDualWielding",
   "ElementalDamage%WhileWieldingShield",
   "FireDamage%",
   "ColdDamage%",
   "LightningDamage%",
   "PoisonDamage%",
   "StrikeDamage%",
   "DamageOverTime%",
   "MeleeDamage%",
   "MeleeDamage%IfStrengthAndDexterityAreAbove200",
   "ProjectileDamage%",
   "ProjectileDamage%WhileWieldingShield",
   "ProjectileDamage%IfDexterityAndIntelligenceAreAbove200",
   "AreaDamage%",
   "AreaDamage%IfStrengthAndIntelligenceAreAbove200",
   "BleedingDamage%",
   "BurningDamage%",
   "PoisoningDamage%",
   "Damage%More",
   "Damage%Less",
   "Damage%More%OfStrengthRequirementOnShield(Max15%)",
   "Damage%MoreForEachPoisoningOfTarget",
   "Damage%MoreDuringWarcryEffect",
   "Damage%MoreAgainstPoisoningEnemies",
   "Damage%MoreAgainstBleedingAndPoisoningEnemies",
   "Damage%MoreAgainstEnemiesAffectedByControlAilment",
   "Damage%MoreAgainstStunnedEnemies",
   "Damage%MoreAgainstEnemiesAffectedByDebuffAilment",
   "Damage%MoreAgainstBossEnemiesThatAreBelow25%Life",
   "Damage%MoreFor4SecondsAfterBlocking(CD4s)",
   "AttackDamage%MorePer50Strength(Max15%)",
   "PhysicalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger",
   "ElementalDamage%More",
   "ElementalDamage%MorePer50Intelligence",
   "ElementalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger",
   "ElementalDamage%MoreWhileBelow40%Life",
   "ElementalDamage%MoreWhileBarrierIsInactive",
   "StrikeDamage%More",
   "StrikeDamage%Less",
   "DamageOverTime%More",
   "DamageOverTime%MoreAgainstBossEnemies",
   "MeleeDamage%More",
   "ProjectileDamage%More",
   "AreaDamage%More",
   "MinionDamage%",
   "AbysslingDamage%",
   "AbysslingDamage%AgainstBleedingEnemies",
   "AbysslingDamage%AgainstBurningEnemies",
   "AbysslingDamage%AgainstPoisoningEnemies",
   "AbysslingDamage%AgainstChilledEnemies",
   "AbysslingDamage%AgainstShockedEnemies",
   "MinionDamage%More",
   "AbysslingDamage%MoreAgainstBleedingEnemies",
   "AbysslingDamage%MoreAgainstBurningEnemies",
   "AbysslingDamage%MoreAgainstPoisoningEnemies",
   "AbysslingDamage%MoreAgainstChilledEnemies",
   "AbysslingDamage%MoreAgainstShockedEnemies",
   "TurretDamage%",
   "TurretDamage%AgainstBleedingEnemies",
   "TurretDamage%AgainstChilledEnemies",
   "TurretDamage%AgainstShockedEnemies",
   "TurretDamage%More",
   "TurretDamage%MoreAgainstBleedingEnemies",
   "TurretDamage%MoreAgainstChilledEnemies",
   "TurretDamage%MoreAgainstShockedEnemies",
   "TurretDamage%MoreFor3SecondsAfterSummoningTurret",

   // 追加ダメージ
   "ExtraFireDamage%OfDamageOnHit",
   "ExtraColdDamage%OfDamageOnHit",
   "ExtraLightningDamage%OfDamageOnHit",
   "ExtraPoisonDamage%OfDamageOnHit",

   // 貫通
   "ArmorPenetration%Less",
   "ArmorPenetration%LessAgainstEnemiesAffectedByWarcry",
   "ElementalResistancePenetration",
   "ElementalResistancePenetration%Less",
   "FireResistancePenetration%Less",
   "ColdResistancePenetration%Less",
   "LightningResistancePenetration%Less",
   "PoisonResistancePenetration%Less",
   "MinionArmorPenetration%Less",
   "MinionElementalResistancePenetration%Less",
   "TurretArmorPenetration%Less",
   "TurretElementalResistancePenetration%Less",

   // 効果
   "BuffEffect%",
   "OffensiveBuffEffect%",
   "DefensiveBuffEffect%",
   "WarcryEffect%",
   "RuneKnightBuffEffect%",
   "DebuffAilmentEffect%",
   "WoundEffect%",
   "ChillEffect%",
   "ShockEffect%",
   "BlindEffect%",
   "PotionEffect%",
   "LifePotionEffect%",
   "ManaPotionEffect%",
   "BuffPotionEffect%",

   // 命中率
   "HitRate%",
   "AttackHitRate%OfStrength",
   "AttackHitRate%",
   "AttackHitRate%WhileWieldingOneHanded",
   "AttackHitRate%WhileWieldingTwoHanded",
   "AttackHitRate%WhileDualWielding",
   "SpellHitRate%",
   "SpellHitRate%WhileWieldingOneHanded",
   "SpellHitRate%WhileWieldingTwoHanded",
   "SpellHitRate%WhileDualWielding",
   "MinionHitRate%",
   "AbysslingHitRate%",
   "TurretHitRate%",

   // クリティカル率
   "CriticalRate%",
   "CriticalRate%WhileWieldingOneHanded",
   "CriticalRate%WhileWieldingTwoHanded",
   "CriticalRate%WhileDualWielding",
   "CriticalRate%DuringWarcryEffect",
   "AttackCriticalRate%",
   "AttackCriticalRate%Per40Dexterity",
   "AttackCriticalRate%WhileWieldingOneHanded",
   "SpellCriticalRate%",
   "SpellCriticalRate%WhileWieldingOneHanded",
   "CriticalRate%DuringBuffEffect",
   "CriticalRate%AgainstEnemiesAffectedByWarcry",
   "CriticalRate%AgainstEnemiesAffectedByControlAilment",
   "CannotDealCriticalStrike",
   "MinionCriticalRate%",
   "AbysslingCriticalRate%",
   "TurretCriticalRate%",

   // クリティカル倍率
   "CriticalDamageMultiplier%",
   "CriticalDamageMultiplier%WhileWieldingOneHanded",
   "CriticalDamageMultiplier%WhileWieldingTwoHanded",
   "CriticalDamageMultiplier%WhileDualWielding",
   "CriticalDamageMultiplier%WhileBelow40%Mana",
   "CriticalDamageMultiplier%DuringWarcryEffect",
   "CriticalDamageMultiplier%AgainstEnemiesAffectedByWarcry",
   "AttackCriticalDamageMultiplier%",
   "AttackCriticalDamageMultiplier%Per20Intelligence",
   "SpellCriticalDamageMultiplier%",
   "MinionCriticalDamageMultiplier%",
   "AbysslingCriticalDamageMultiplier%",
   "TurretCriticalDamageMultiplier%",

   // 状態異常発生率
   "AilmentRate",
   "DamagingAilmentRate",
   "BleedingRate",
   "BurningRate",
   "PoisoningRate",
   "ControlAilmentRate",
   "StunRate",
   "FreezeRate",
   "BindRate",
   "DebuffAilmentRate",
   "WoundRate",
   "ChillRate",
   "ShockRate",
   "BlindRate",
   "AbysslingBleedingRate",
   "AbysslingBurningRate",
   "AbysslingPoisoningRate",
   "AbysslingChillRate",
   "AbysslingShockRate",
   "TurretBleedingRate",
   "TurretChillRate",
   "TurretShockRate",

   // その他の確率
   "MinionDoubleDamageChance%",

   // 吸収
   "LifeLeech%OfDamageOnHit",
   "BarrierLeech%OfDamageOnHit",
   "LifeLeechLimit%OfMaximumLife",
   "BarrierLeechLimit%OfMaximumBarrier",

   // その他の効果
   "ThreatLevel%",

   // 頻度
   "AttackSpeed%",
   "AttackSpeed%Per400ArmorOnHelmet(Max20%)",
   "AttackSpeed%WhileWieldingOneHanded",
   "AttackSpeed%WhileWieldingTwoHanded",
   "AttackSpeed%WhileDualWielding",
   "AttackSpeed%For3SecondsAfterKilling(Max15Stack)",
   "AttackSpeed%More",
   "CastSpeed%",
   "CastSpeed%WhileWieldingOneHanded",
   "CastSpeed%WhileWieldingTwoHanded",
   "CastSpeed%WhileDualWielding",
   "WarcryCastSpeed%",
   "TurretSummonSpeed%",
   "TotemSummonSpeed%",
   "CastSpeed%More",
   "MinionAttackSpeed%",
   "MinionCastSpeed%",
   "TurretAttackSpeed%",

   // クールダウン
   "SkillCooldownRecovery%",
   "MovementSkillCooldownRecovery%",
   "BuffSkillCooldownRecovery%",
   "OffensiveBuffSkillCooldownRecovery%",
   "WarcrySkillCooldownRecovery%",
   "LifePotionCooldownRecovery%",
   "ManaPotionCooldownRecovery%",
   "MovementSkillCooldownUse",

   // 持続
   "OffensiveBuffDuration%",
   "DefensiveBuffDuration%",
   "WarcryDuration%",
   "TurretDuration%",
   "TotemDuration%",
   "BleedingDuration%",
   "BurningDuration%",
   "PoisoningDuration%",
   "ControlAilmentDuration%",
   "StunDuration%",
   "FreezeDuration%",
   "BindDuration%",
   "WoundDuration%",
   "ChillDuration%",
   "ShockDuration%",
   "BlindDuration%",
   "AbysslingChillDuration%",
   "AbysslingShockDuration%",
   "TurretChillDuration%",
   "TurretShockDuration%",
   "LifePotionDuration%",
   "BuffPotionDuration%",

   // 範囲
   "AreaOfEffect%",
   "AreaOfEffect%%OfWeaponRange(Max100%)",
   "WarcryAreaOfEffect%",
   "TotemAreaOfEffect%",
   "WeaponRange",

   // DoT
   "DamageOverTimeMultiplier%",
   "DamageOverTimeSpeed%",

   // 数量
   "MaximumChain",
   "MaximumPierce",
   "NumberOfProjectile",
   "MaximumPoisoningStack",
   "NumberOfSummonedAbysslingPerCast",
   "MaximumNumberOfSummonedAbyssling",
   "MaximumNumberOfSummonedTurret",
   "MaximumNumberOfSummonedTotem",

   // コスト
   "ManaCost%Less",
   "ManaCost%More",
   "ManaCost%LessForEachSummonedAbyssling",
   "ManaCost%LessForEachSummonedRuneKnight",
   "BuffManaCost%Less",
   "WarcryManaCost%Less",

   // スキルレベル
   "WarcrySkillLevel",

   // ステータス
   "Strength",
   "Dexterity",
   "Intelligence",

   // 生命力
   "MaximumLife",
   "MaximumLifePer5Dexterity(Max500)",
   "MaximumLifeWhileWieldingShield",
   "MaximumLife%",
   "MaximumLife%More",
   "LifeRegeneration",
   "LifeRegeneration%",
   "CannotRegenerateLife",
   "LifeGainOnKill",
   "LifeGainOnBlock",
   "LifeGain%OfMaximumLifeOnDodge",
   "LifeGainWhenLifePotionUsed",
   "LifeGain%OfMaximumLifeWhenLifePotionUsed",
   "MinionMaximumLife",
   "MinionMaximumLife%",
   "MinionMaximumLife%More",
   "MinionLifeRegeneration%OfMaximumLife",
   "TurretMaximumLife",
   "TurretMaximumLife%",
   "TurretLifeRegeneration%OfMaximumLife",
   "TotemMaximumLife%",
   "TotemLifeRegeneration%OfMaximumLife",

   // マナ
   "MaximumMana",
   "MaximumMana%",
   "MaximumMana%More",
   "ManaRegeneration%",
   "ManaRegeneration%WhileAffectedBy地のベール",
   "CannotRegenerateMana",
   "ManaGainOnKill",
   "ManaGainOnBlock",
   "ManaGainWhenManaPotionUsed",
   "ManaGain%OfMaximumManaWhenManaPotionUsed",

   // バリア
   "MaximumBarrier",
   "MaximumBarrier%OfArmorOnShield(Max100)",
   "MaximumBarrier%",
   "MaximumBarrier%WhileWieldingShield",
   "MaximumBarrier%More",
   "BarrierRegeneration%OfMaximumBarrierWhileBarrierIsRecharging",
   "BarrierRegeneration%OfLifeRegeneration",
   "BarrierRechargeCooldownReduction",
   "BarrierRechargeCooldownRecovery%",
   "BarrierGainOnKill",
   "CannotUseBarrier",
   "MinionMaximumBarrier%OfMaximumBarrier",

   // 防御度
   "Armor",
   "ArmorPer2EvasionOnHelmet(Max1000)",
   "ArmorPerMaximumBarrierOnHelmet(Max1000)",
   "Armor%",
   "Armor%WhileWieldingShield",
   "Armor%More",
   "MaximumPhysicalDamageReduction%FromArmor",
   "MinionArmor%",
   "TurretArmor%",
   "TotemArmor%",

   // 回避度
   "Evasion%",
   "Evasion%Per100MovementSpeed",
   "Evasion%WhileWieldingShield",
   "Evasion%WhileWieldingShield",
   "AttackEvasion%",
   "SpellEvasion%",
   "Evasion%MoreWhileOnFullLife",
   "CannotEvade",

   // 抵抗力
   "ElementalResistance",
   "ElementalResistanceWhileWieldingShield",
   "MaximumElementalResistance%",
   "FireResistance",
   "MaximumFireResistance%",
   "ColdResistance",
   "MaximumColdResistance%",
   "LightningResistance",
   "MaximumLightningResistance%",
   "PoisonResistance",
   "MaximumPoisonResistance%",
   "ChaosResistance",
   "MinionElementalResistance",
   "MinionChaosResistance",
   "TurretElementalResistance",
   "TurretChaosResistance",
   "TotemElementalResistance",

   // 受けるダメージ軽減
   "DamageTaken%More",
   "DamageTaken%LessWhileWieldingShield",
   "DamageTaken%LessFromEliteEnemies",
   "DamageTaken%LessFor3SecondsAfterBarrierDeactivated",
   "PhysicalDamageTaken%Less",
   "PhysicalDamageTaken%More",
   "PhysicalDamageTaken%LessFor60SecondsAfterBuffPotionUsed",
   "ElementalDamageTaken%Less",
   "ElementalDamageTaken%More",
   "ElementalDamageTaken%LessFor60SecondsAfterBuffPotionUsed",
   "FireDamageTaken%Less",
   "ColdDamageTaken%Less",
   "LightningDamageTaken%Less",
   "PoisonDamageTaken%Less",
   "ChaosDamageTaken%Less",
   "CriticalDamageTaken%Less",
   "ReflectedDamageTaken%Less",
   "PhysicalReflectedDamageTaken%Less",
   "ElementalReflectedDamageTaken%Less",
   "MinionDamageTaken%Less",
   "MinionPhysicalDamageTaken%Less",
   "MinionElementalDamageTaken%Less",
   "TurretPhysicalDamageTaken%Less",
   "TurretElementalDamageTaken%Less",

   // 代わりに受ける
   "DamageTakenByRuneKnightInstead%",
   "DamageTakenByTotemInstead%",
   "StrikeDamageTakenFromManaBeforeLife%",

   // ブロック
   "BlockRate",
   "BlockRateWhileWieldingShield",
   "AttackBlockRate",
   "AttackBlockRateWhileWieldingShield",
   "SpellBlockRate",
   "SpellBlockRateWhileWieldingShield",
   "ProjectileBlockRate",
   "ProjectileBlockRateWhileWieldingShield",
   "BlockCooldownRecovery%",

   // 完全回避
   "Dodge%",
   "Dodge%WhileBelow20%Life",
   "Dodge%For3SecondsAfterDealingCriticalStrike",
   "AttackDodge%",
   "AttackDodge%Per100Strength",
   "SpellDodge%",
   "SpellDodge%Per100Dexterity",

   // 状態異常回避
   "AvoidAilmentChance%",
   "AvoidAilmentChance%WhileWieldingShield",
   "AvoidDamagingAilmentChance%",
   "AvoidBleedingChance%",
   "AvoidBurningChance%",
   "AvoidPoisoningChance%",
   "AvoidControlAilmentChance%",
   "AvoidStunChance%",
   "AvoidFreezeChance%",
   "AvoidBindChance%",
   "AvoidDebuffAilmentChance%",
   "AvoidWoundChance%",
   "AvoidChillChance%",
   "AvoidShockChance%",
   "AvoidBlindChance%",
   "ImmuneToStun",
   "ImmuneToFreezeWhileBarrierIsActive",
   "ImmuneToBind",
   "ImmuneToWound",

   // その他防御
   "HitRecovery%",

   // 移動速度
   "MovementSpeed%",
   "MovementSpeed%WhileWieldingOneHanded",
   "MovementSpeed%WhileWieldingTwoHanded",
   "MovementSpeed%WhileDualWielding",
   "MovementSpeed%WhileAffectedBy風のベール",
   "MovementSpeed%For90SecondsAfterBuffPotionUsed",
   "MovementSpeed%More",
   "MovementSpeedCannotBeModifiedToBelowBaseValueWhileLifeLeeching",

   // キーワード能力
   "再生力",
   "再生力Effect%",
   "強靭さ",
   "強靭さEffect%",
   "高揚",
   "高揚Effect%",
   "圧倒",
   "圧倒Effect%",
   "集中",
   "集中Effect%",
   "粉砕",
   "粉砕Effect%",
   "加速力",
   "加速力Effect%",
   "鋭利さ",
   "鋭利さEffect%",
   "悟り",
   "悟りEffect%",
   "知識",
   "知識Effect%",
   "照準力",
   "照準力Effect%",
   "Minion圧倒",
   "Minion圧倒Effect%",
   "Minion集中",
   "Minion集中Effect%",
   "Minion加速力",
   "Minion加速力Effect%",
   "Minion鋭利さ",
   "Minion鋭利さEffect%",
   "Turret高揚",
   "Turret高揚Effect%",
   "Turret圧倒",
   "Turret圧倒Effect%",
   "Turret鋭利さ",
   "Turret鋭利さEffect%",
   "Turret照準力",
   "Turret照準力Effect%",
   "Turret近接射撃",
   "Turret近接射撃Effect%",

   // 特殊ゾディアックノード
   "狩りの時間",
   "獲物発見",
   "警戒移動",
   "野蛮性",
   "マナ転換",
   "ボウガン増幅",
   "速射砲",
   "暗殺",
   "過多出血",
   "不屈の精神",
   "聖戦士",
   "神聖なる力",
   "循環",
   "群れの力",
   "貫く",
   "自信",
   "防御戦術",
   "快速",
   "衝撃",
   "闘魂",
   "痛み(Block)",
   "ブロック専門家",
   "肉弾防御",
   "膺懲",
   "バーサーカー",
   "近接戦闘",
   "ブロック熟練",
   "武器専門家",
   "狂暴",
   "先鋒長",
   "疾風",
   "満潮",
   "能力値転移",
   "亡霊",
   "歪んだ力",
   "リチャージ",
   "狙撃",
   "切断",
   "決意",
   "改造",
   "ボウガン熟練",
   "痛み(Turret)",
   "注入",
   "攻撃戦術",
   "元素親和力",
   "元素吸収",
] as const;
type ModifierType = typeof ModifierType[number];
type Modifier = {
   type: ModifierType;
   amount: number;
};
const modifierSortOrder = Object.fromEntries(
   ModifierType.map((mod, i) => [mod, i])
);

function printModifier(mod: Modifier): string {
   const amount = round(mod.amount);
   switch (mod.type) {
      // ダメージ
      case "Damage%": {
         return `ダメージ+${amount}%`;
      }
      case "Damage%Per300ArmorOnBodyArmor(Max150%)": {
         return `アーマーの防御度300あたり、ダメージ+${amount}%(最大150%)`;
      }
      case "Damage%ForEachNearbyEnemy(Max150%)": {
         return `半径400内の敵の数ごとにダメージ+${amount}%(最大150%)`;
      }
      case "Damage%ForEachPartyMemberWithin600(Max60%)": {
         return `半径600内のパーティーメンバー1人あたり、ダメージ+${amount}%(最大60%)`;
      }
      case "Damage%WhileWieldingOneHanded": {
         return `片手武器装着時、ダメージ+${amount}%`;
      }
      case "Damage%WhileWieldingTwoHanded": {
         return `両手武器装着時、ダメージ+${amount}%`;
      }
      case "Damage%WhileDualWielding": {
         return `双手武器装着時、ダメージ+${amount}%`;
      }
      case "Damage%IfAllStatusesAreAbove200": {
         return `力と敏捷と知能が200なら、ダメージ+${amount}%`;
      }
      case "Damage%WhileBelow40%Life": {
         return `生命力が40%以下の時、ダメージ+${amount}%`;
      }
      case "Damage%DuringBuffEffect": {
         return `強化スキル持続時間の間、ダメージ+${amount}%`;
      }
      case "Damage%DuringOffensiveBuffEffect": {
         return `攻撃強化スキル持続時間の間、ダメージ+${amount}%`;
      }
      case "Damage%DuringWarcryEffect": {
         return `雄叫びスキル効果中ダメージ+${amount}%`;
      }
      case "Damage%AgainstEliteEnemies": {
         return `精鋭にダメージ+${amount}%`;
      }
      case "Damage%AgainstEnemiesAffectedByWarcry": {
         return `雄叫びスキル効果中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstEnemiesAffectedByAilment": {
         return `状態異常中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstEnemiesAffectedByDamagingAilment": {
         return `ダメージ状態異常中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstBleedingEnemies": {
         return `出血中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstBurningEnemies": {
         return `点火中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstPoisoningEnemies": {
         return `中毒中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstEnemiesAffectedByControlAilment": {
         return `制御状態異常中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstStunnedEnemies": {
         return `気絶中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstFrozenEnemies": {
         return `氷結中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstBinddEnemies": {
         return `束縛中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstEnemiesAffectedByDebuffAilment": {
         return `弱化状態異常中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstWoundedEnemies": {
         return `回復損傷中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstChilledEnemies": {
         return `悪寒中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstShockedEnemies": {
         return `感電中の敵にダメージ+${amount}%`;
      }
      case "Damage%AgainstBlindedEnemies": {
         return `失明中の敵にダメージ+${amount}%`;
      }
      case "Damage%For2SecondsAfterDealingCriticalStrike": {
         return `クリティカルヒット時2秒間ダメージ+${amount}%`;
      }
      case "Damage%For3SecondsAfterDealingCriticalStrike": {
         return `クリティカルヒット時3秒間ダメージ+${amount}%`;
      }
      case "Damage%For2SecondsAfterHitEvaded": {
         return `攻撃失敗時、2秒間ダメージ+${amount}%`;
      }
      case "AttackDamage%": {
         return `攻撃時、ダメージ+${amount}%`;
      }
      case "AttackDamage%For2SecondsAfterDealingHit(Max15Stack)": {
         return `命中時、2秒間攻撃時、ダメージ+${amount}%(最大重複数15)`;
      }
      case "SpellDamage%": {
         return `呪文時、ダメージ+${amount}%`;
      }
      case "PhysicalDamage%": {
         return `物理ダメージ+${amount}%`;
      }
      case "PhysicalDamage%WhileWieldingOneHanded": {
         return `片手武器装着時、物理ダメージ+${amount}%`;
      }
      case "PhysicalDamage%WhileWieldingTwoHanded": {
         return `両手武器装着時、物理ダメージ+${amount}%`;
      }
      case "PhysicalDamage%WhileDualWielding": {
         return `双手武器装着時、物理ダメージ+${amount}%`;
      }
      case "PhysicalDamage%WhileWieldingShield": {
         return `盾装着時、物理ダメージ+${amount}%`;
      }
      case "ElementalDamage%": {
         return `元素ダメージ+${amount}%`;
      }
      case "ElementalDamage%WhileWieldingOneHanded": {
         return `片手武器装着時、元素ダメージ+${amount}%`;
      }
      case "ElementalDamage%WhileWieldingTwoHanded": {
         return `両手武器装着時、元素ダメージ+${amount}%`;
      }
      case "ElementalDamage%WhileDualWielding": {
         return `双手武器装着時、元素ダメージ+${amount}%`;
      }
      case "ElementalDamage%WhileWieldingShield": {
         return `盾装着時、元素ダメージ+${amount}%`;
      }
      case "FireDamage%": {
         return `炎ダメージ+${amount}%`;
      }
      case "ColdDamage%": {
         return `氷ダメージ+${amount}%`;
      }
      case "LightningDamage%": {
         return `雷ダメージ+${amount}%`;
      }
      case "PoisonDamage%": {
         return `毒ダメージ+${amount}%`;
      }
      case "StrikeDamage%": {
         return `持続ダメージ+${amount}%`;
      }
      case "DamageOverTime%": {
         return `持続ダメージ+${amount}%`;
      }
      case "MeleeDamage%": {
         return `近接ダメージ+${amount}%`;
      }
      case "MeleeDamage%IfStrengthAndDexterityAreAbove200": {
         return `力と敏捷が200以上なら、近接ダメージ+${amount}%`;
      }
      case "ProjectileDamage%": {
         return `発射体ダメージ+${amount}%`;
      }
      case "ProjectileDamage%WhileWieldingShield": {
         return `盾装着時、発射体ダメージ+${amount}%`;
      }
      case "ProjectileDamage%IfDexterityAndIntelligenceAreAbove200": {
         return `知能と敏捷が200以上なら、発射体ダメージ+${amount}%`;
      }
      case "AreaDamage%": {
         return `広域ダメージ+${amount}%`;
      }
      case "AreaDamage%IfStrengthAndIntelligenceAreAbove200": {
         return `力と知能が200以上なら、広域ダメージ+${amount}%`;
      }
      case "BleedingDamage%": {
         return `出血ダメージ+${amount}%`;
      }
      case "BurningDamage%": {
         return `点火ダメージ+${amount}%`;
      }
      case "PoisoningDamage%": {
         return `中毒ダメージ+${amount}%`;
      }
      case "Damage%More": {
         return `ダメージ${amount}%増幅`;
      }
      case "Damage%Less": {
         return `ダメージ${amount}%減幅`;
      }
      case "Damage%More%OfStrengthRequirementOnShield(Max15%)": {
         return `盾の要求力の${amount}%分、ダメージ増幅(最大15%)`;
      }
      case "Damage%MoreForEachPoisoningOfTarget": {
         return `命中時敵の中毒1あたりダメージ${amount}%増幅`;
      }
      case "Damage%MoreDuringWarcryEffect": {
         return `雄叫びスキル効果中ダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstPoisoningEnemies": {
         return `中毒中の敵にダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstBleedingAndPoisoningEnemies": {
         return `出血および中毒中の敵にダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstEnemiesAffectedByControlAilment": {
         return `制御状態異常中の敵に与えるダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstStunnedEnemies": {
         return `気絶中の敵にダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstEnemiesAffectedByDebuffAilment": {
         return `弱化状態異常中の敵に与えるダメージ${amount}%増幅`;
      }
      case "Damage%MoreAgainstBossEnemiesThatAreBelow25%Life": {
         return `生命力が25%以下のボスにダメージ${amount}%増幅`;
      }
      case "Damage%MoreFor4SecondsAfterBlocking(CD4s)": {
         return `ブロック時、4秒間ダメージ${amount}%増幅(クールタイム4秒)`;
      }
      case "AttackDamage%MorePer50Strength(Max15%)": {
         return `力50あたり、攻撃ダメージ${amount}%増幅(最大15%)`;
      }
      case "PhysicalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger": {
         return `短剣装着時、武器速度0.3あたり物理ダメージ${amount}%増幅`;
      }
      case "ElementalDamage%More": {
         return `元素ダメージ${amount}%増幅`;
      }
      case "ElementalDamage%MorePer50Intelligence": {
         return `知能50あたり、元素ダメージ${amount}%増幅`;
      }
      case "ElementalDamage%MorePer0.3WeaponSpeedWhileWieldingDagger": {
         return `短剣装着時、武器速度0.3あたり元素ダメージ${amount}%増幅`;
      }
      case "ElementalDamage%MoreWhileBelow40%Life": {
         return `生命力が40%以下の時、元素ダメージ${amount}%増幅`;
      }
      case "ElementalDamage%MoreWhileBarrierIsInactive": {
         return `バリア非アクティブ時、元素ダメージ${amount}%増幅`;
      }
      case "StrikeDamage%More": {
         return `打撃ダメージ${amount}%増幅`;
      }
      case "StrikeDamage%Less": {
         return `打撃ダメージ${amount}%減幅`;
      }
      case "DamageOverTime%More": {
         return `持続ダメージ${amount}%増幅`;
      }
      case "DamageOverTime%MoreAgainstBossEnemies": {
         return `ボスに与える持続ダメージ${amount}%増幅`;
      }
      case "MeleeDamage%More": {
         return `近接ダメージ${amount}%増幅`;
      }
      case "ProjectileDamage%More": {
         return `発射体ダメージ${amount}%増幅`;
      }
      case "AreaDamage%More": {
         return `広域ダメージ${amount}%増幅`;
      }
      case "MinionDamage%": {
         return `手下ダメージ+${amount}%`;
      }
      case "AbysslingDamage%": {
         return `深淵体ダメージ+${amount}%`;
      }
      case "AbysslingDamage%AgainstBleedingEnemies": {
         return `出血中の敵に深淵体ダメージ+${amount}%`;
      }
      case "AbysslingDamage%AgainstBurningEnemies": {
         return `点火中の敵に深淵体ダメージ+${amount}%`;
      }
      case "AbysslingDamage%AgainstPoisoningEnemies": {
         return `中毒中の敵に深淵体ダメージ+${amount}%`;
      }
      case "AbysslingDamage%AgainstChilledEnemies": {
         return `悪寒中の敵に深淵体ダメージ+${amount}%`;
      }
      case "AbysslingDamage%AgainstShockedEnemies": {
         return `感電中の敵に深淵体ダメージ+${amount}%`;
      }
      case "MinionDamage%More": {
         return `手下ダメージ${amount}%増幅`;
      }
      case "AbysslingDamage%MoreAgainstBleedingEnemies": {
         return `深淵体が出血中の敵にダメージ${amount}%増幅`;
      }
      case "AbysslingDamage%MoreAgainstBurningEnemies": {
         return `深淵体が点火中の敵にダメージ${amount}%増幅`;
      }
      case "AbysslingDamage%MoreAgainstPoisoningEnemies": {
         return `深淵体が中毒中の敵にダメージ${amount}%増幅`;
      }
      case "AbysslingDamage%MoreAgainstChilledEnemies": {
         return `深淵体が悪寒中の敵にダメージ${amount}%増幅`;
      }
      case "AbysslingDamage%MoreAgainstShockedEnemies": {
         return `深淵体が感電中の敵にダメージ${amount}%増幅`;
      }
      case "TurretDamage%": {
         return `ボウガンダメージ+${amount}%`;
      }
      case "TurretDamage%AgainstBleedingEnemies": {
         return `出血中の敵にボウガンのダメージ+${amount}%`;
      }
      case "TurretDamage%AgainstChilledEnemies": {
         return `悪寒中の敵にボウガンのダメージ+${amount}%`;
      }
      case "TurretDamage%AgainstShockedEnemies": {
         return `感電中の敵にボウガンのダメージ+${amount}%`;
      }
      case "TurretDamage%More": {
         return `ボウガンダメージ${amount}%増幅`;
      }
      case "TurretDamage%MoreAgainstBleedingEnemies": {
         return `ボウガンが出血中の敵にダメージ${amount}%増幅`;
      }
      case "TurretDamage%MoreAgainstChilledEnemies": {
         return `ボウガンが悪寒中の敵にダメージ${amount}%増幅`;
      }
      case "TurretDamage%MoreAgainstShockedEnemies": {
         return `ボウガンが感電中の敵にダメージ${amount}%増幅`;
      }
      case "TurretDamage%MoreFor3SecondsAfterSummoningTurret": {
         return `ボウガン召喚時、3秒間ボウガンで与えるダメージ${amount}%増幅`;
      }

      // 追加ダメージ
      case "ExtraFireDamage%OfDamageOnHit": {
         return `命中時、ダメージの${amount}%分追加炎ダメージ`;
      }
      case "ExtraColdDamage%OfDamageOnHit": {
         return `命中時、ダメージの${amount}%分追加氷ダメージ`;
      }
      case "ExtraLightningDamage%OfDamageOnHit": {
         return `命中時、ダメージの${amount}%分追加雷ダメージ`;
      }
      case "ExtraPoisonDamage%OfDamageOnHit": {
         return `命中時、ダメージの${amount}%分追加毒ダメージ`;
      }

      // 貫通
      case "ArmorPenetration%Less": {
         return `防御度貫通+${amount}%`;
      }
      case "ArmorPenetration%LessAgainstEnemiesAffectedByWarcry": {
         return `雄叫び効果中の敵に防御度貫通+${amount}%`;
      }
      case "ElementalResistancePenetration": {
         return `元素貫通力+${amount}`;
      }
      case "ElementalResistancePenetration%Less": {
         return `元素貫通+${amount}%`;
      }
      case "FireResistancePenetration%Less": {
         return `炎貫通+${amount}%`;
      }
      case "ColdResistancePenetration%Less": {
         return `氷貫通+${amount}%`;
      }
      case "LightningResistancePenetration%Less": {
         return `雷貫通+${amount}%`;
      }
      case "PoisonResistancePenetration%Less": {
         return `毒貫通+${amount}%`;
      }
      case "MinionArmorPenetration%Less": {
         return `手下防御度貫通+${amount}%`;
      }
      case "MinionElementalResistancePenetration%Less": {
         return `手下元素貫通貫通+${amount}%`;
      }
      case "TurretArmorPenetration%Less": {
         return `ボウガン防御度貫通+${amount}%`;
      }
      case "TurretElementalResistancePenetration%Less": {
         return `ボウガン元素貫通貫通+${amount}%`;
      }

      // 効果
      case "BuffEffect%": {
         return `強化スキルルーン効果+${amount}%`;
      }
      case "OffensiveBuffEffect%": {
         return `攻撃強化スキルルーン効果+${amount}%`;
      }
      case "DefensiveBuffEffect%": {
         return `防御強化スキルルーン効果+${amount}%`;
      }
      case "WarcryEffect%": {
         return `雄叫びスキルルーン効果+${amount}%`;
      }
      case "RuneKnightBuffEffect%": {
         return `ルーン騎士バフ効果+${amount}%`;
      }
      case "DebuffAilmentEffect%": {
         return `弱化状態異常の効果+${amount}%`;
      }
      case "WoundEffect%": {
         return `回復損傷効果+${amount}%`;
      }
      case "ChillEffect%": {
         return `悪寒効果+${amount}%`;
      }
      case "ShockEffect%": {
         return `感電効果+${amount}%`;
      }
      case "BlindEffect%": {
         return `失明効果+${amount}%`;
      }
      case "PotionEffect%": {
         return `ポーション効果+${amount}%`;
      }
      case "LifePotionEffect%": {
         return `生命力ポーション効果+${amount}%`;
      }
      case "ManaPotionEffect%": {
         return `マナポーション効果+${amount}%`;
      }
      case "BuffPotionEffect%": {
         return `強化ポーション効果+${amount}%`;
      }

      // 命中率
      case "HitRate%": {
         return `命中度+${amount}%`;
      }
      case "AttackHitRate%OfStrength": {
         return `力の${amount}%分追加攻撃命中力`;
      }
      case "AttackHitRate%": {
         return `攻撃命中度+${amount}%`;
      }
      case "AttackHitRate%WhileWieldingOneHanded": {
         return `片手武器装着時、攻撃命中度+${amount}%`;
      }
      case "AttackHitRate%WhileWieldingTwoHanded": {
         return `両手武器装着時、攻撃命中度+${amount}%`;
      }
      case "AttackHitRate%WhileDualWielding": {
         return `双手武器装着時、攻撃命中度+${amount}%`;
      }
      case "SpellHitRate%": {
         return `呪文命中度+${amount}%`;
      }
      case "SpellHitRate%WhileWieldingOneHanded": {
         return `片手武器装着時、呪文命中度+${amount}%`;
      }
      case "SpellHitRate%WhileWieldingTwoHanded": {
         return `両手武器装着時、呪文命中度+${amount}%`;
      }
      case "SpellHitRate%WhileDualWielding": {
         return `双手武器装着時、呪文命中度+${amount}%`;
      }
      case "MinionHitRate%": {
         return `手下命中度+${amount}%`;
      }
      case "AbysslingHitRate%": {
         return `深淵体命中度+${amount}%`;
      }
      case "TurretHitRate%": {
         return `ボウガン命中度+${amount}%`;
      }

      // クリティカル率
      case "CriticalRate%": {
         return `クリティカル度+${amount}%`;
      }
      case "CriticalRate%WhileWieldingOneHanded": {
         return `片手武器装着時、クリティカル度+${amount}%`;
      }
      case "CriticalRate%WhileWieldingTwoHanded": {
         return `両手武器装着時、クリティカル度+${amount}%`;
      }
      case "CriticalRate%WhileDualWielding": {
         return `双手武器装着時、クリティカル度+${amount}%`;
      }
      case "CriticalRate%DuringWarcryEffect": {
         return `雄叫びスキル効果中クリティカル度+${amount}%`;
      }
      case "AttackCriticalRate%": {
         return `攻撃クリティカル度+${amount}%`;
      }
      case "AttackCriticalRate%Per40Dexterity": {
         return `敏捷40あたり、攻撃クリティカル度+${amount}%`;
      }
      case "AttackCriticalRate%WhileWieldingOneHanded": {
         return `片手武器装着時、攻撃クリティカル度+${amount}%`;
      }
      case "SpellCriticalRate%": {
         return `呪文クリティカル度+${amount}%`;
      }
      case "SpellCriticalRate%WhileWieldingOneHanded": {
         return `片手武器装着時、呪文クリティカル度+${amount}%`;
      }
      case "CriticalRate%DuringBuffEffect": {
         return `強化スキル持続時間の間、クリティカル+${amount}%`;
      }
      case "CriticalRate%AgainstEnemiesAffectedByWarcry": {
         return `雄叫びスキル効果中の敵にクリティカル度+${amount}%`;
      }
      case "CriticalRate%AgainstEnemiesAffectedByControlAilment": {
         return `制御状態異常中の敵にクリティカル度ダメージ+${amount}%`;
      }
      case "CannotDealCriticalStrike": {
         return `クリティカルヒット発生不可`;
      }
      case "MinionCriticalRate%": {
         return `手下クリティカル度+${amount}%`;
      }
      case "AbysslingCriticalRate%": {
         return `深淵体クリティカル度+${amount}%`;
      }
      case "TurretCriticalRate%": {
         return `ボウガンクリティカル度+${amount}%`;
      }

      // クリティカル倍率
      case "CriticalDamageMultiplier%": {
         return `クリティカルダメージ+${amount}%`;
      }
      case "CriticalDamageMultiplier%WhileWieldingOneHanded": {
         return `片手武器装着時、クリティカルダメージ率+${amount}%`;
      }
      case "CriticalDamageMultiplier%WhileWieldingTwoHanded": {
         return `両手武器装着時、クリティカルダメージ率+${amount}%`;
      }
      case "CriticalDamageMultiplier%WhileDualWielding": {
         return `双手武器装着時、クリティカルダメージ+${amount}%`;
      }
      case "CriticalDamageMultiplier%WhileBelow40%Mana": {
         return `マナが40%以下の時、クリティカルダメージ率${amount}%`;
      }
      case "CriticalDamageMultiplier%DuringWarcryEffect": {
         return `雄叫びスキル効果中クリティカルダメージ+${amount}%`;
      }
      case "CriticalDamageMultiplier%AgainstEnemiesAffectedByWarcry": {
         return `雄叫びスキル効果中の敵にクリティカルダメージ+${amount}%`;
      }
      case "AttackCriticalDamageMultiplier%": {
         return `攻撃クリティカルダメージ+${amount}%`;
      }
      case "AttackCriticalDamageMultiplier%Per20Intelligence": {
         return `知能20あたり、攻撃クリティカルダメージ+${amount}%`;
      }
      case "SpellCriticalDamageMultiplier%": {
         return `呪文クリティカルダメージ+${amount}%`;
      }
      case "MinionCriticalDamageMultiplier%": {
         return `手下のクリティカルダメージ率+${amount}%`;
      }
      case "AbysslingCriticalDamageMultiplier%": {
         return `深淵体のクリティカルダメージ率+${amount}%`;
      }
      case "TurretCriticalDamageMultiplier%": {
         return `ボウガンクリティカルダメージ+${amount}%`;
      }

      // 状態異常発生率
      case "AilmentRate": {
         return `状態異常発生力+${amount}`;
      }
      case "DamagingAilmentRate": {
         return `ダメージ状態異常発生力+${amount}`;
      }
      case "BleedingRate": {
         return `出血発生力+${amount}`;
      }
      case "BurningRate": {
         return `点火発生力+${amount}`;
      }
      case "PoisoningRate": {
         return `中毒発生力+${amount}`;
      }
      case "ControlAilmentRate": {
         return `制御状態異常発生力+${amount}`;
      }
      case "StunRate": {
         return `気絶発生力+${amount}`;
      }
      case "FreezeRate": {
         return `氷結発生力+${amount}`;
      }
      case "BindRate": {
         return `束縛発生力+${amount}`;
      }
      case "DebuffAilmentRate": {
         return `弱化状態異常発生力+${amount}`;
      }
      case "WoundRate": {
         return `回復損傷発生力+${amount}`;
      }
      case "ChillRate": {
         return `悪寒発生力+${amount}`;
      }
      case "ShockRate": {
         return `感電発生力+${amount}`;
      }
      case "BlindRate": {
         return `失明発生力+${amount}`;
      }
      case "AbysslingBleedingRate": {
         return `深淵体の出血発生力+${amount}`;
      }
      case "AbysslingBurningRate": {
         return `深淵体点火発生力+${amount}`;
      }
      case "AbysslingPoisoningRate": {
         return `深淵体中毒発生力+${amount}`;
      }
      case "AbysslingChillRate": {
         return `深淵体悪寒発生力+${amount}`;
      }
      case "AbysslingShockRate": {
         return `深淵体感電発生力+${amount}`;
      }
      case "TurretBleedingRate": {
         return `ボウガン出血発生力+${amount}`;
      }
      case "TurretChillRate": {
         return `ボウガン悪寒発生力+${amount}`;
      }
      case "TurretShockRate": {
         return `ボウガン感電発生力+${amount}`;
      }

      // その他の確率
      case "MinionDoubleDamageChance%": {
         return `手下が${amount}%の確率で2倍のダメージを与える`;
      }

      // 吸収
      case "LifeLeech%OfDamageOnHit": {
         return `命中時、生命力吸収+${amount}%`;
      }
      case "BarrierLeech%OfDamageOnHit": {
         return `命中時、バリア吸収+${amount}%`;
      }
      case "LifeLeechLimit%OfMaximumLife": {
         return `生命力吸収上限値+${amount}%`;
      }
      case "BarrierLeechLimit%OfMaximumBarrier": {
         return `バリア吸収上限値+${amount}%`;
      }

      // その他の効果
      case "ThreatLevel%": {
         return `脅威水準+${amount}%`;
      }

      // 頻度
      case "AttackSpeed%": {
         return `攻撃速度+${amount}%`;
      }
      case "AttackSpeed%Per400ArmorOnHelmet(Max20%)": {
         return `ヘルム防御度400あたり攻撃速度+${amount}%(最大20%)`;
      }
      case "AttackSpeed%WhileWieldingOneHanded": {
         return `片手武器装着時、攻撃速度+${amount}%`;
      }
      case "AttackSpeed%WhileWieldingTwoHanded": {
         return `両手武器装着時、攻撃速度+${amount}%`;
      }
      case "AttackSpeed%WhileDualWielding": {
         return `双手武器装着時、攻撃速度+${amount}%`;
      }
      case "AttackSpeed%For3SecondsAfterKilling(Max15Stack)": {
         return `撃破時、3秒間攻撃速度+${amount}%(最大重複数15)`;
      }
      case "AttackSpeed%More": {
         return `攻撃速度${amount}%増幅`;
      }
      case "CastSpeed%": {
         return `詠唱速度+${amount}%`;
      }
      case "CastSpeed%WhileWieldingOneHanded": {
         return `片手武器装着時、詠唱速度+${amount}%`;
      }
      case "CastSpeed%WhileWieldingTwoHanded": {
         return `両手武器装着時、詠唱速度+${amount}%`;
      }
      case "CastSpeed%WhileDualWielding": {
         return `双手武器装着時、詠唱速度+${amount}%`;
      }
      case "WarcryCastSpeed%": {
         return `雄叫びスキルルーン詠唱速度+${amount}%`;
      }
      case "TurretSummonSpeed%": {
         return `ボウガン設置速度+${amount}%`;
      }
      case "TotemSummonSpeed%": {
         return `トーテム設置速度+${amount}%`;
      }
      case "CastSpeed%More": {
         return `詠唱速度${amount}%増幅`;
      }
      case "MinionAttackSpeed%": {
         return `手下攻撃速度+${amount}%`;
      }
      case "MinionCastSpeed%": {
         return `手下詠唱速度+${amount}%`;
      }
      case "TurretAttackSpeed%": {
         return `ボウガン攻撃速度+${amount}%`;
      }

      // クールダウン
      case "SkillCooldownRecovery%": {
         return `スキルルーンクールタイム回復速度+${amount}%`;
      }
      case "MovementSkillCooldownRecovery%": {
         return `移動スキルルーンクールタイム回復速度+${amount}%`;
      }
      case "BuffSkillCooldownRecovery%": {
         return `強化スキルルーンクールタイム回復速度+${amount}%`;
      }
      case "OffensiveBuffSkillCooldownRecovery%": {
         return `攻撃強化スキルルーンクールタイム回復速度+${amount}%`;
      }
      case "WarcrySkillCooldownRecovery%": {
         return `雄叫びスキルルーンクールタイム回復速度+${amount}%`;
      }
      case "LifePotionCooldownRecovery%": {
         return `生命力ポーションクールタイム回復速度+${amount}%`;
      }
      case "ManaPotionCooldownRecovery%": {
         return `マナポーションクールタイム回復速度+${amount}%`;
      }
      case "MovementSkillCooldownUse": {
         return `移動スキルルーン最大使用回数+${amount}`;
      }

      // 持続
      case "OffensiveBuffDuration%": {
         return `攻撃強化スキルルーン持続時間+${amount}%`;
      }
      case "DefensiveBuffDuration%": {
         return `防御強化スキルルーン持続時間+${amount}%`;
      }
      case "WarcryDuration%": {
         return `雄叫びスキルルーン持続時間+${amount}%`;
      }
      case "TurretDuration%": {
         return `ボウガン持続時間+${amount}%`;
      }
      case "TotemDuration%": {
         return `トーテム持続時間+${amount}%`;
      }
      case "BleedingDuration%": {
         return `出血持続時間+${amount}%`;
      }
      case "BurningDuration%": {
         return `点火持続時間+${amount}%`;
      }
      case "PoisoningDuration%": {
         return `中毒持続時間+${amount}%`;
      }
      case "ControlAilmentDuration%": {
         return `制御状態異常持続時間+${amount}%`;
      }
      case "StunDuration%": {
         return `気絶持続時間+${amount}%`;
      }
      case "FreezeDuration%": {
         return `氷結持続時間+${amount}%`;
      }
      case "BindDuration%": {
         return `束縛持続時間+${amount}%`;
      }
      case "WoundDuration%": {
         return `回復損傷持続時間+${amount}%`;
      }
      case "ChillDuration%": {
         return `悪寒持続時間+${amount}%`;
      }
      case "ShockDuration%": {
         return `感電持続時間+${amount}%`;
      }
      case "BlindDuration%": {
         return `失明持続時間+${amount}%`;
      }
      case "AbysslingChillDuration%": {
         return `深淵体の悪寒持続時間+${amount}%`;
      }
      case "AbysslingShockDuration%": {
         return `深淵体の感電持続時間+${amount}%`;
      }
      case "TurretChillDuration%": {
         return `ボウガンの悪寒中持続時間+${amount}%`;
      }
      case "TurretShockDuration%": {
         return `ボウガンの感電中持続時間+${amount}%`;
      }
      case "LifePotionDuration%": {
         return `生命力ポーション持続時間+${amount}%`;
      }
      case "BuffPotionDuration%": {
         return `強化ポーション持続時間+${amount}%`;
      }

      // 範囲
      case "AreaOfEffect%": {
         return `広域範囲+${amount}%`;
      }
      case "AreaOfEffect%%OfWeaponRange(Max100%)": {
         return `武器範囲の${amount}%分広域範囲増加(最大100%)`;
      }
      case "WarcryAreaOfEffect%": {
         return `雄叫びスキルルーン効果範囲+${amount}%`;
      }
      case "TotemAreaOfEffect%": {
         return `トーテム効果範囲+${amount}%`;
      }
      case "WeaponRange": {
         return `武器範囲+${amount}`;
      }

      // DoT
      case "DamageOverTimeMultiplier%": {
         return `持続ダメージ倍率+${amount}%`;
      }
      case "DamageOverTimeSpeed%": {
         return `持続ダメージ加速+${amount}%`;
      }

      // 数量
      case "MaximumChain": {
         return `連鎖回数+${amount}`;
      }
      case "MaximumPierce": {
         return `貫通回数+${amount}`;
      }
      case "NumberOfProjectile": {
         return `発射体数+${amount}`;
      }
      case "MaximumPoisoningStack": {
         return `中毒最大重複数+${amount}`;
      }
      case "NumberOfSummonedAbysslingPerCast": {
         return `深淵体同時召喚数+${amount}`;
      }
      case "MaximumNumberOfSummonedAbyssling": {
         return `深淵体最大召喚数+${amount}`;
      }
      case "MaximumNumberOfSummonedTurret": {
         return `ボウガン最大召喚数+${amount}`;
      }
      case "MaximumNumberOfSummonedTotem": {
         return `トーテム最大召喚数+${amount}`;
      }

      // コスト
      case "ManaCost%Less": {
         return `マナ消費${amount}%減幅`;
      }
      case "ManaCost%More": {
         return `マナ消費${amount}%増幅`;
      }
      case "ManaCost%LessForEachSummonedAbyssling": {
         return `深淵体1あたりマナ消費-${amount}%増幅`;
      }
      case "ManaCost%LessForEachSummonedRuneKnight": {
         return `ルーン騎士1あたりマナ消費-${amount}%増幅`;
      }
      case "BuffManaCost%Less": {
         return `強化スキルルーンマナ消費-${amount}%`;
      }
      case "WarcryManaCost%Less": {
         return `雄叫びスキルルーンマナ消費-${amount}%`;
      }

      // スキルレベル
      case "WarcrySkillLevel": {
         return `雄叫びスキルルーンレベル+${amount}`;
      }

      // ステータス
      case "Strength": {
         return `力+${amount}`;
      }
      case "Dexterity": {
         return `敏捷+${amount}`;
      }
      case "Intelligence": {
         return `知能+${amount}`;
      }

      // 生命力
      case "MaximumLife": {
         return `生命力+${amount}`;
      }
      case "MaximumLifePer5Dexterity(Max500)": {
         return `敏捷5あたり最大生命力+${amount}(最大500)`;
      }
      case "MaximumLifeWhileWieldingShield": {
         return `盾装着時、最大生命力+${amount}`;
      }
      case "MaximumLife%": {
         return `生命力+${amount}%`;
      }
      case "MaximumLife%More": {
         return `生命力${amount}%増幅`;
      }
      case "LifeRegeneration": {
         return `1秒あたり生命力再生+${amount}`;
      }
      case "LifeRegeneration%": {
         return `1秒あたり生命力再生+${amount}%`;
      }
      case "CannotRegenerateLife": {
         return `生命力が再生しない`;
      }
      case "LifeGainOnKill": {
         return `撃破時、生命力+${amount}`;
      }
      case "LifeGainOnBlock": {
         return `ブロック時、生命力回復+${amount}`;
      }
      case "LifeGain%OfMaximumLifeOnDodge": {
         return `完全回避時、生命力回復+${amount}`;
      }
      case "LifeGainWhenLifePotionUsed": {
         return `生命力ポーション使用時、即時生命力回復+${amount}`;
      }
      case "LifeGain%OfMaximumLifeWhenLifePotionUsed": {
         return `生命力ポーション使用時、最大生命力の${amount}%即時回復`;
      }
      case "MinionMaximumLife": {
         return `手下生命力+${amount}`;
      }
      case "MinionMaximumLife%": {
         return `手下生命力+${amount}%`;
      }
      case "MinionMaximumLife%More": {
         return `手下最大生命力${amount}%増幅`;
      }
      case "MinionLifeRegeneration%OfMaximumLife": {
         return `手下1秒あたり最大生命力の${amount}%再生`;
      }
      case "TurretMaximumLife": {
         return `ボウガン生命力+${amount}`;
      }
      case "TurretMaximumLife%": {
         return `ボウガン生命力+${amount}%`;
      }
      case "TurretLifeRegeneration%OfMaximumLife": {
         return `ボウガン1秒あたり最大生命力の${amount}%再生`;
      }
      case "TotemMaximumLife%": {
         return `トーテム生命力+${amount}%`;
      }
      case "TotemLifeRegeneration%OfMaximumLife": {
         return `トーテム1秒あたり最大生命力の${amount}%再生`;
      }

      // マナ
      case "MaximumMana": {
         return `マナ+${amount}`;
      }
      case "MaximumMana%": {
         return `マナ+${amount}%`;
      }
      case "MaximumMana%More": {
         return `マナ${amount}%増幅`;
      }
      case "ManaRegeneration%": {
         return `1秒あたりマナ再生+${amount}%`;
      }
      case "ManaRegeneration%WhileAffectedBy地のベール": {
         return `地のベール状態時、1秒あたりマナ再生+${amount}%`;
      }
      case "CannotRegenerateMana": {
         return `マナが再生しない`;
      }
      case "ManaGainOnKill": {
         return `撃破時、マナ+${amount}`;
      }
      case "ManaGainOnBlock": {
         return `ブロック時、マナ回復+${amount}`;
      }
      case "ManaGainWhenManaPotionUsed": {
         return `マナポーション使用時、即時生命力回復+${amount}`;
      }
      case "ManaGain%OfMaximumManaWhenManaPotionUsed": {
         return `マナポーション使用時、最大マナの${amount}%即時回復`;
      }

      // バリア
      case "MaximumBarrier": {
         return `バリア+${amount}`;
      }
      case "MaximumBarrier%OfArmorOnShield(Max100)": {
         return `盾防御度の${amount}%分、追加バリア(最大100)`;
      }
      case "MaximumBarrier%": {
         return `バリア+${amount}%`;
      }
      case "MaximumBarrier%WhileWieldingShield": {
         return `盾装着時、バリア+${amount}%`;
      }
      case "MaximumBarrier%More": {
         return `バリア${amount}%増幅`;
      }
      case "BarrierRegeneration%OfMaximumBarrierWhileBarrierIsRecharging": {
         return `バリアチャージ時、1秒あたり最大バリアの${amount}%を再生`;
      }
      case "BarrierRegeneration%OfLifeRegeneration": {
         return `生命力再生の${amount}%分バリア再生`;
      }
      case "BarrierRechargeCooldownReduction": {
         return `バリアチャージ周期-${amount}秒`;
      }
      case "BarrierRechargeCooldownRecovery%": {
         return `バリアチャージ周期回復速度+${amount}%`;
      }
      case "BarrierGainOnKill": {
         return `撃破時、バリア+${amount}`;
      }
      case "CannotUseBarrier": {
         return `撃破時、バリア+${amount}`;
      }
      case "MinionMaximumBarrier%OfMaximumBarrier": {
         return `バリアの${amount}%分召喚者にバリアを追加`;
      }

      // 防御度
      case "Armor": {
         return `防御度+${amount}`;
      }
      case "ArmorPer2EvasionOnHelmet(Max1000)": {
         return `ヘルム回避度2あたり追加防御度+${amount}`;
      }
      case "ArmorPerMaximumBarrierOnHelmet(Max1000)": {
         return `ヘルムバリア1あたり追加防御度+${amount}`;
      }
      case "Armor%": {
         return `防御度+${amount}%`;
      }
      case "Armor%WhileWieldingShield": {
         return `盾装着時、防御度+${amount}%`;
      }
      case "Armor%More": {
         return `防御度${amount}%増幅`;
      }
      case "MaximumPhysicalDamageReduction%FromArmor": {
         return `最大防御度ダメージ減少上限値+${amount}%`;
      }
      case "MinionArmor%": {
         return `手下の防御度+${amount}%`;
      }
      case "TotemArmor%": {
         return `トーテム防御度+${amount}%`;
      }
      case "TurretArmor%": {
         return `ボウガン防御度+${amount}%`;
      }

      // 回避度
      case "Evasion%": {
         return `回避度+${amount}%`;
      }
      case "Evasion%Per100MovementSpeed": {
         return `移動速度100あたり、回避度+${amount}%`;
      }
      case "Evasion%WhileWieldingShield": {
         return `盾装着時、回避度+${amount}%`;
      }
      case "Evasion%WhileWieldingShield": {
         return `盾装着時、回避度+${amount}%`;
      }
      case "AttackEvasion%": {
         return `攻撃回避度+${amount}%`;
      }
      case "SpellEvasion%": {
         return `呪文回避度+${amount}%`;
      }
      case "Evasion%MoreWhileOnFullLife": {
         return `生命力が最大値の時回避度${amount}%増幅`;
      }
      case "CannotEvade": {
         return `回避不可`;
      }

      // 抵抗力
      case "ElementalResistance": {
         return `元素抵抗力+${amount}`;
      }
      case "ElementalResistanceWhileWieldingShield": {
         return `盾装着時、元素抵抗力+${amount}`;
      }
      case "MaximumElementalResistance%": {
         return `最大元素抵抗+${amount}%`;
      }
      case "FireResistance": {
         return `炎抵抗力+${amount}`;
      }
      case "MaximumFireResistance%": {
         return `最大炎抵抗+${amount}%`;
      }
      case "ColdResistance": {
         return `氷抵抗力+${amount}`;
      }
      case "MaximumColdResistance%": {
         return `最大氷抵抗+${amount}%`;
      }
      case "LightningResistance": {
         return `雷抵抗力+${amount}`;
      }
      case "MaximumLightningResistance%": {
         return `最大雷抵抗+${amount}%`;
      }
      case "PoisonResistance": {
         return `毒抵抗力+${amount}`;
      }
      case "MaximumPoisonResistance%": {
         return `最大毒抵抗+${amount}%`;
      }
      case "ChaosResistance": {
         return `カオス抵抗力+${amount}`;
      }
      case "MinionElementalResistance": {
         return `手下の元素抵抗力+${amount}`;
      }
      case "MinionChaosResistance": {
         return `手下のカオス抵抗力+${amount}`;
      }
      case "TurretElementalResistance": {
         return `ボウガン元素抵抗力+${amount}`;
      }
      case "TurretChaosResistance": {
         return `ボウガンカオス抵抗力+${amount}`;
      }
      case "TotemElementalResistance": {
         return `トーテム元素抵抗力+${amount}`;
      }

      // 受けるダメージ軽減
      case "DamageTaken%More": {
         return `受けるダメージ${amount}%減幅`;
      }
      case "DamageTaken%LessWhileWieldingShield": {
         return `盾装着時、受けるダメージ${amount}%減少`;
      }
      case "DamageTaken%LessFromEliteEnemies": {
         return `精鋭から受けるダメージ${amount}%減少`;
      }
      case "DamageTaken%LessFor3SecondsAfterBarrierDeactivated": {
         return `バリア非アクティブ化時、3秒間受けるダメージ${amount}%減少`;
      }
      case "PhysicalDamageTaken%Less": {
         return `受ける物理ダメージ${amount}%減幅`;
      }
      case "PhysicalDamageTaken%More": {
         return `受ける物理ダメージ${amount}%増幅`;
      }
      case "PhysicalDamageTaken%LessFor60SecondsAfterBuffPotionUsed": {
         return `強化ポーション服用時、60秒間受ける物理ダメージ${round(
            amount
         )}%減少`;
      }
      case "ElementalDamageTaken%Less": {
         return `受ける元素ダメージ${amount}%減幅`;
      }
      case "ElementalDamageTaken%More": {
         return `受ける元素ダメージ${amount}%増幅`;
      }
      case "ElementalDamageTaken%LessFor60SecondsAfterBuffPotionUsed": {
         return `強化ポーション服用時60秒間受ける元素ダメージ${round(
            amount
         )}%減少`;
      }
      case "FireDamageTaken%Less": {
         return `受ける炎ダメージ${amount}%減幅`;
      }
      case "ColdDamageTaken%Less": {
         return `受ける氷ダメージ${amount}%減幅`;
      }
      case "LightningDamageTaken%Less": {
         return `受ける雷ダメージ${amount}%減幅`;
      }
      case "PoisonDamageTaken%Less": {
         return `受ける毒ダメージ${amount}%減幅`;
      }
      case "ChaosDamageTaken%Less": {
         return `受けるカオスダメージ${amount}%減幅`;
      }
      case "CriticalDamageTaken%Less": {
         return `受けるクリティカルダメージ${amount}%減少`;
      }
      case "ReflectedDamageTaken%Less": {
         return `受ける反射ダメージ${amount}%減少`;
      }
      case "PhysicalReflectedDamageTaken%Less": {
         return `受ける物理反射ダメージ${amount}%減少`;
      }
      case "ElementalReflectedDamageTaken%Less": {
         return `受ける元素反射ダメージ${amount}%減少`;
      }
      case "MinionDamageTaken%Less": {
         return `手下が受けるダメージ${amount}%減少`;
      }
      case "MinionPhysicalDamageTaken%Less": {
         return `手下が受ける物理ダメージ${amount}%減幅`;
      }
      case "MinionElementalDamageTaken%Less": {
         return `手下が受ける元素ダメージ${amount}%減幅`;
      }
      case "TurretPhysicalDamageTaken%Less": {
         return `ボウガンが受ける物理ダメージ${amount}%減幅`;
      }
      case "TurretElementalDamageTaken%Less": {
         return `ボウガンが受ける元素ダメージ${amount}%減幅`;
      }

      // 代わりに受ける
      case "DamageTakenByRuneKnightInstead%": {
         return `受けるダメージの${amount}%分ルーン騎士が代わりに受ける`;
      }
      case "DamageTakenByTotemInstead%": {
         return `受けるダメージの${amount}%分トーテムが代わりに受ける`;
      }
      case "StrikeDamageTakenFromManaBeforeLife%": {
         return `被撃するたびに受けるダメージの${amount}%分マナで代わりに受ける`;
      }

      // ブロック
      case "BlockRate": {
         return `ブロック熟練度+${amount}`;
      }
      case "BlockRateWhileWieldingShield": {
         return `盾装着時、ブロック熟練度+${amount}`;
      }
      case "AttackBlockRate": {
         return `攻撃ブロック熟練度+${amount}`;
      }
      case "AttackBlockRateWhileWieldingShield": {
         return `盾装着時、攻撃ブロック熟練度+${amount}`;
      }
      case "SpellBlockRate": {
         return `呪文ブロック熟練度+${amount}`;
      }
      case "SpellBlockRateWhileWieldingShield": {
         return `盾装着時、呪文ブロック熟練度+${amount}`;
      }
      case "ProjectileBlockRate": {
         return `発射体ブロック熟練度+${amount}`;
      }
      case "ProjectileBlockRateWhileWieldingShield": {
         return `盾装着時、発射体ブロック熟練度+${amount}`;
      }
      case "BlockCooldownRecovery%": {
         return `ブロック回復速度+${amount}%`;
      }

      // 完全回避
      case "Dodge%": {
         return `完全回避+${amount}%`;
      }
      case "Dodge%WhileBelow20%Life": {
         return `生命力が20%以下の時、完全回避+${amount}%`;
      }
      case "Dodge%For3SecondsAfterDealingCriticalStrike": {
         return `クリティカルヒット時3秒間完全回避+${amount}%`;
      }
      case "AttackDodge%": {
         return `攻撃完全回避+${amount}%`;
      }
      case "AttackDodge%Per100Strength": {
         return `力100あたり、攻撃完全回避+${amount}%`;
      }
      case "SpellDodge%": {
         return `呪文完全回避+${amount}%`;
      }
      case "SpellDodge%Per100Dexterity": {
         return `敏捷100あたり、呪文完全回避+${amount}%`;
      }

      // 状態異常回避
      case "AvoidAilmentChance%": {
         return `状態異常回避率+${amount}%`;
      }
      case "AvoidAilmentChance%WhileWieldingShield": {
         return `盾装着時、状態異常回避率+${amount}%`;
      }
      case "AvoidDamagingAilmentChance%": {
         return `ダメージ状態異常回避率+${amount}%`;
      }
      case "AvoidBleedingChance%": {
         return `出血回避率+${amount}%`;
      }
      case "AvoidBurningChance%": {
         return `点火回避率+${amount}%`;
      }
      case "AvoidPoisoningChance%": {
         return `中毒回避率+${amount}%`;
      }
      case "AvoidControlAilmentChance%": {
         return `制御状態異常回避率+${amount}%`;
      }
      case "AvoidStunChance%": {
         return `気絶回避率+${amount}%`;
      }
      case "AvoidFreezeChance%": {
         return `氷結回避率+${amount}%`;
      }
      case "AvoidBindChance%": {
         return `束縛回避率+${amount}%`;
      }
      case "AvoidDebuffAilmentChance%": {
         return `弱化状態異常回避率+${amount}%`;
      }
      case "AvoidWoundChance%": {
         return `回復損傷回避率+${amount}%`;
      }
      case "AvoidChillChance%": {
         return `悪寒回避率+${amount}%`;
      }
      case "AvoidShockChance%": {
         return `感電回避率+${amount}%`;
      }
      case "AvoidBlindChance%": {
         return `失明回避率+${amount}%`;
      }
      case "ImmuneToStun": {
         return `気絶免疫`;
      }
      case "ImmuneToFreezeWhileBarrierIsActive": {
         return `バリアアクティブ状態中氷結免疫`;
      }
      case "ImmuneToBind": {
         return `束縛免疫`;
      }
      case "ImmuneToWound": {
         return `束縛免疫`;
      }

      // その他防御
      case "HitRecovery%": {
         return `被撃回復速度+${amount}%`;
      }

      // 移動速度
      case "MovementSpeed%": {
         return `移動速度${amount}%上昇`;
      }
      case "MovementSpeed%WhileWieldingOneHanded": {
         return `片手武器装着時、移動速度${amount}%上昇`;
      }
      case "MovementSpeed%WhileWieldingTwoHanded": {
         return `両手武器装着時、移動速度${amount}%上昇`;
      }
      case "MovementSpeed%WhileDualWielding": {
         return `双手武器装着時、移動速度${amount}%上昇`;
      }
      case "MovementSpeed%WhileAffectedBy風のベール": {
         return `風のベール状態時、移動速度${amount}%上昇`;
      }
      case "MovementSpeed%For90SecondsAfterBuffPotionUsed": {
         return `強化ポーション服用時、90秒間移動速度${amount}%上昇`;
      }
      case "MovementSpeed%More": {
         return `移動速度${amount}%増幅`;
      }
      case "MovementSpeedCannotBeModifiedToBelowBaseValueWhileLifeLeeching": {
         return `生命力吸収状態の間、移動速度が規定値以下に減少しない`;
      }

      // キーワード能力
      case "再生力": {
         return `再生力`;
      }
      case "再生力Effect%": {
         return `再生力効果+${amount}%`;
      }
      case "強靭さ": {
         return `強靭さ`;
      }
      case "強靭さEffect%": {
         return `強靭さ効果+${amount}%`;
      }
      case "高揚": {
         return `高揚`;
      }
      case "高揚Effect%": {
         return `高揚効果+${amount}%`;
      }
      case "圧倒": {
         return `圧倒`;
      }
      case "圧倒Effect%": {
         return `圧倒効果+${amount}%`;
      }
      case "集中": {
         return `集中`;
      }
      case "集中Effect%": {
         return `集中効果+${amount}%`;
      }
      case "粉砕": {
         return `粉砕`;
      }
      case "粉砕Effect%": {
         return `粉砕効果+${amount}%`;
      }
      case "加速力": {
         return `加速力`;
      }
      case "加速力Effect%": {
         return `加速力効果+${amount}%`;
      }
      case "鋭利さ": {
         return `鋭さ`;
      }
      case "鋭利さEffect%": {
         return `鋭利さ効果+${amount}%`;
      }
      case "悟り": {
         return `悟り`;
      }
      case "悟りEffect%": {
         return `悟り効果+${amount}%`;
      }
      case "知識": {
         return `知識`;
      }
      case "知識Effect%": {
         return `知識効果+${amount}%`;
      }
      case "照準力": {
         return `照準力`;
      }
      case "照準力Effect%": {
         return `照準力効果+${amount}%`;
      }
      case "Minion圧倒": {
         return `圧倒：手下`;
      }
      case "Minion圧倒Effect%": {
         return `手下圧倒効果+${amount}%`;
      }
      case "Minion集中": {
         return `集中：手下`;
      }
      case "Minion集中Effect%": {
         return `手下集中効果+${amount}%`;
      }
      case "Minion加速力": {
         return `加速力：手下`;
      }
      case "Minion加速力Effect%": {
         return `手下加速力効果+${amount}%`;
      }
      case "Minion鋭利さ": {
         return `鋭利さ：手下`;
      }
      case "Minion鋭利さEffect%": {
         return `手下鋭利さ効果+${amount}%`;
      }
      case "Turret高揚": {
         return `高揚：ボウガン`;
      }
      case "Turret高揚Effect%": {
         return `ボウガン高揚効果+${amount}%`;
      }
      case "Turret圧倒": {
         return `圧倒：ボウガン`;
      }
      case "Turret圧倒Effect%": {
         return `ボウガン圧倒効果+${amount}%`;
      }
      case "Turret鋭利さ": {
         return `鋭利さ：ボウガン`;
      }
      case "Turret鋭利さEffect%": {
         return `ボウガン鋭利さ効果+${amount}%`;
      }
      case "Turret照準力": {
         return `照準力：ボウガン`;
      }
      case "Turret照準力Effect%": {
         return `ボウガン照準力効果+${amount}%`;
      }
      case "Turret近接射撃": {
         return `近接射撃：ボウガン`;
      }
      case "Turret近接射撃Effect%": {
         return `ボウガン近接射撃効果${amount}%`;
      }

      // 特殊ゾディアックノード
      case "狩りの時間": {
         return `狩りの時間`;
      }
      case "獲物発見": {
         return `獲物発見`;
      }
      case "警戒移動": {
         return `警戒移動`;
      }
      case "野蛮性": {
         return `野蛮性`;
      }
      case "マナ転換": {
         return `マナ転換`;
      }
      case "ボウガン増幅": {
         return `ボウガン増幅`;
      }
      case "速射砲": {
         return `速射砲`;
      }
      case "暗殺": {
         return `暗殺`;
      }
      case "過多出血": {
         return `過多出血`;
      }
      case "不屈の精神": {
         return `不屈の精神`;
      }
      case "聖戦士": {
         return `聖戦士`;
      }
      case "神聖なる力": {
         return `神聖なる力`;
      }
      case "循環": {
         return `循環`;
      }
      case "群れの力": {
         return `群れの力`;
      }
      case "貫く": {
         return `貫く`;
      }
      case "自信": {
         return `自信`;
      }
      case "防御戦術": {
         return `防御戦術`;
      }
      case "快速": {
         return `快速`;
      }
      case "衝撃": {
         return `衝撃`;
      }
      case "闘魂": {
         return `闘魂`;
      }
      case "痛み(Block)": {
         return `痛み`;
      }
      case "ブロック専門家": {
         return `ブロック専門家`;
      }
      case "肉弾防御": {
         return `肉弾防御`;
      }
      case "膺懲": {
         return `膺懲`;
      }
      case "バーサーカー": {
         return `バーサーカー`;
      }
      case "近接戦闘": {
         return `近接戦闘`;
      }
      case "ブロック熟練": {
         return `ブロック熟練`;
      }
      case "武器専門家": {
         return `武器専門家`;
      }
      case "狂暴": {
         return `狂暴`;
      }
      case "先鋒長": {
         return `先鋒長`;
      }
      case "疾風": {
         return `疾風`;
      }
      case "満潮": {
         return `満潮`;
      }
      case "能力値転移": {
         return `能力値転移`;
      }
      case "亡霊": {
         return `亡霊`;
      }
      case "歪んだ力": {
         return `歪んだ力`;
      }
      case "リチャージ": {
         return `リチャージ`;
      }
      case "狙撃": {
         return `狙撃`;
      }
      case "切断": {
         return `切断`;
      }
      case "決意": {
         return `決意`;
      }
      case "改造": {
         return `改造`;
      }
      case "ボウガン熟練": {
         return `ボウガン熟練`;
      }
      case "痛み(Turret)": {
         return `痛み`;
      }
      case "注入": {
         return `注入`;
      }
      case "攻撃戦術": {
         return `攻撃戦術`;
      }
      case "元素親和力": {
         return `元素親和力`;
      }
      case "元素吸収": {
         return `元素吸収`;
      }
   }
   // return `Unkown Modifier ${mod.type} +${amount}`;
}

function round(x: number): number {
   return Math.round(x * 100) / 100;
}
