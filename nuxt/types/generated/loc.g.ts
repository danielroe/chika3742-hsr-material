export type Loc =
  | "common.appName"
  | "common.gameName"
  | "common.alphaWarning"
  | "common.ok"
  | "common.cancel"
  | "common.rarity"
  | "common.path"
  | "common.combatType"
  | "common.filter"
  | "common.expandAll"
  | "common.collapseAll"
  | "common.currentLevel"
  | "common.targetLevel"
  | "common.skillTypes.basicAttack"
  | "common.skillTypes.skill"
  | "common.skillTypes.ultimate"
  | "common.skillTypes.talent"
  | "pageTitles.home"
  | "pageTitles.characters"
  | "pageTitles.characterDetails"
  | "pageTitles.lightCones"
  | "pageTitles.lightConeDetails"
  | "pageTitles.materials"
  | "pageTitles.materialDetails"
  | "pageTitles.warps"
  | "pageTitles.tpCalc"
  | "pageTitles.releaseNotes"
  | "pageTitles.terms"
  | "pageTitles.termsSummarized"
  | "pageTitles.privacy"
  | "pageTitles.about"
  | "footer.feedback"
  | "footer.theme"
  | "footer.disclaimer"
  | "footer.themeOptions.light"
  | "footer.themeOptions.dark"
  | "footer.themeOptions.auto"
  | "characterDetailsPage.ascension"
  | "characterDetailsPage.skills"
  | "lightConesPage.showSkillDescriptions"
  | "lightConeDetailsPage.ascension"
  | "lightConeDetailsPage.skillDescriptions"
  | "materialDetailsPage.characterUsage"
  | "materialDetailsPage.lightConeUsage"
  | "warpsPage.warpTypes.1"
  | "warpsPage.warpTypes.11"
  | "warpsPage.warpTypes.12"
  | "warpsPage.urlInput"
  | "warpsPage.get"
  | "warpsPage.clear"
  | "warpsPage.progress"
  | "warpsPage.preparing"
  | "warpsPage.getPityHistory"
  | "warpsPage.getPityHistoryDesc"
  | "warpsPage.noNewWarps"
  | "warpsPage.fetched"
  | "warpsPage.clearDialog"
  | "warpsPage.cleared"
  | "warpsPage.pityCountWithStar"
  | "warpsPage.pityCount"
  | "warpsPage.dateTime"
  | "warpsPage.rarity"
  | "warpsPage.itemName"
  | "warpsPage.pityHistory"
  | "warpsPage.lastPulled"
  | "warpsPage.prob"
  | "warpsPage.errors.invalidUrl"
  | "warpsPage.errors.authKeyExpired"
  | "warpsPage.errors.authKeyInvalid"
  | "warpsPage.errors.tooManyRequests"
  | "warpsPage.errors.internal"
  | "warpsPage.aboutTitle"
  | "warpsPage.about"
  | "warpsPage.howToGetUrl.windows.title"
  | "warpsPage.howToGetUrl.windows.contents"
  | "warpsPage.howToGetUrl.ios.title"
  | "warpsPage.howToGetUrl.ios.contents"
  | "tpCalcPage.baseTime"
  | "tpCalcPage.currentTpCount"
  | "tpCalcPage.fullReplenishmentTime"
  | "tpCalcPage.remainingTime"
  | "tpCalcPage.duration"
  | "tpCalcPage.alreadyReplenished"
  | "tpCalcPage.rangeError"
  | "tpCalcPage.wastedTp"
  | "tpCalcPage.howToUse"
  | "aboutPage.feedback"
  | "aboutPage.support"
  | "aboutPage.supportButton"
  | "aboutPage.developer"
  | "paths.abundance"
  | "paths.destruction"
  | "paths.erudition"
  | "paths.harmony"
  | "paths.nihility"
  | "paths.preservation"
  | "paths.the_hunt"
  | "combatTypes.fire"
  | "combatTypes.ice"
  | "combatTypes.imaginary"
  | "combatTypes.lightning"
  | "combatTypes.physical"
  | "combatTypes.wind"
  | "combatTypes.quantum"
  | "characterNames.trailblazer"
  | "characterNames.march-7th"
  | "characterNames.dan-heng"
  | "characterNames.himeko"
  | "characterNames.welt"
  | "characterNames.kafka"
  | "characterNames.silver-wolf"
  | "characterNames.arlan"
  | "characterNames.asta"
  | "characterNames.herta"
  | "characterNames.bronya"
  | "characterNames.seele"
  | "characterNames.serval"
  | "characterNames.gepard"
  | "characterNames.natasha"
  | "characterNames.pela"
  | "characterNames.clara"
  | "characterNames.sampo"
  | "characterNames.hook"
  | "characterNames.qingque"
  | "characterNames.tingyun"
  | "characterNames.luocha"
  | "characterNames.jing-yuan"
  | "characterNames.sushang"
  | "characterNames.yukong"
  | "characterNames.yanqing"
  | "characterNames.bailu"
  | "materialCategories.exp"
  | "materialCategories.character_ascension"
  | "materialCategories.light_cone_or_skill_upgrade"
  | "materialCategories.common"
  | "materialCategories.advanced_skill_upgrade"
  | "materialCategories.others"
  | "materialNames.travel-encounters"
  | "materialNames.adventure-log"
  | "materialNames.travelers-guide"
  | "materialNames.horn-of-snow"
  | "materialNames.storm-eye"
  | "materialNames.endotherm-chitin"
  | "materialNames.golden-crown-of-the-past-shadow"
  | "materialNames.shape-shifters-lightning-staff"
  | "materialNames.void-cast-iron"
  | "materialNames.lightning-crown-of-the-past-shadow"
  | "materialNames.broken-teeth-of-iron-wolf"
  | "materialNames.enigmatic-ectostella"
  | "materialNames.thiefs-instinct"
  | "materialNames.usurpers-scheme"
  | "materialNames.conquerors-will"
  | "materialNames.extinguished-core"
  | "materialNames.glimmering-core"
  | "materialNames.squirming-core"
  | "materialNames.silvermane-badge"
  | "materialNames.silvermane-insignia"
  | "materialNames.silvermane-medal"
  | "materialNames.ancient-part"
  | "materialNames.ancient-spindle"
  | "materialNames.ancient-engine"
  | "materialNames.immortal-scionette"
  | "materialNames.immortal-aeroblossom"
  | "materialNames.immortal-lumintwig"
  | "materialNames.artifexs-module"
  | "materialNames.artifexs-cogwheel"
  | "materialNames.artifexs-gyreheart"
  | "materialNames.endurance-of-bronze"
  | "materialNames.oath-of-steel"
  | "materialNames.safeguard-of-amber"
  | "materialNames.arrow-of-the-beast-hunter"
  | "materialNames.arrow-of-the-demon-slayer"
  | "materialNames.arrow-of-the-starchaser"
  | "materialNames.key-of-inspiration"
  | "materialNames.key-of-knowledge"
  | "materialNames.key-of-wisdom"
  | "materialNames.obsidian-of-dread"
  | "materialNames.obsidian-of-desolation"
  | "materialNames.obsidian-of-obsession"
  | "materialNames.shattered-blade"
  | "materialNames.lifeless-blade"
  | "materialNames.worldbreaker-blade"
  | "materialNames.harmonic-tune"
  | "materialNames.ancestral-hymn"
  | "materialNames.stellaris-symphony"
  | "materialNames.seed-of-abundance"
  | "materialNames.sprout-of-life"
  | "materialNames.flower-of-eternity"
  | "materialNames.destroyers-final-road"
  | "materialNames.guardians-lament"
  | "materialNames.tracks-of-destiny"
  | "materialNames.credit"
  | "materialNames.gelid-chitin"
  | "materialNames.sparse-aether"
  | "materialNames.condensed-aether"
  | "materialNames.refined-aether"
  | "skillTitles.trailblazer.destruction.basicAttack"
  | "skillTitles.trailblazer.destruction.skill"
  | "skillTitles.trailblazer.destruction.ultimate"
  | "skillTitles.trailblazer.destruction.talent"
  | "skillTitles.trailblazer.preservation.basicAttack"
  | "skillTitles.trailblazer.preservation.skill"
  | "skillTitles.trailblazer.preservation.ultimate"
  | "skillTitles.trailblazer.preservation.talent"
  | "skillTitles.march-7th.basicAttack"
  | "skillTitles.march-7th.skill"
  | "skillTitles.march-7th.ultimate"
  | "skillTitles.march-7th.talent"
  | "skillTitles.dan-heng.basicAttack"
  | "skillTitles.dan-heng.skill"
  | "skillTitles.dan-heng.ultimate"
  | "skillTitles.dan-heng.talent"
  | "skillTitles.himeko.basicAttack"
  | "skillTitles.himeko.skill"
  | "skillTitles.himeko.ultimate"
  | "skillTitles.himeko.talent"
  | "skillTitles.welt.basicAttack"
  | "skillTitles.welt.skill"
  | "skillTitles.welt.ultimate"
  | "skillTitles.welt.talent"
  | "skillTitles.silver-wolf.basicAttack"
  | "skillTitles.silver-wolf.skill"
  | "skillTitles.silver-wolf.ultimate"
  | "skillTitles.silver-wolf.talent"
  | "skillTitles.arlan.basicAttack"
  | "skillTitles.arlan.skill"
  | "skillTitles.arlan.ultimate"
  | "skillTitles.arlan.talent"
  | "skillTitles.asta.basicAttack"
  | "skillTitles.asta.skill"
  | "skillTitles.asta.ultimate"
  | "skillTitles.asta.talent"
  | "skillTitles.herta.basicAttack"
  | "skillTitles.herta.skill"
  | "skillTitles.herta.ultimate"
  | "skillTitles.herta.talent"
  | "skillTitles.bronya.basicAttack"
  | "skillTitles.bronya.skill"
  | "skillTitles.bronya.ultimate"
  | "skillTitles.bronya.talent"
  | "skillTitles.seele.basicAttack"
  | "skillTitles.seele.skill"
  | "skillTitles.seele.ultimate"
  | "skillTitles.seele.talent"
  | "skillTitles.serval.basicAttack"
  | "skillTitles.serval.skill"
  | "skillTitles.serval.ultimate"
  | "skillTitles.serval.talent"
  | "skillTitles.gepard.basicAttack"
  | "skillTitles.gepard.skill"
  | "skillTitles.gepard.ultimate"
  | "skillTitles.gepard.talent"
  | "skillTitles.natasha.basicAttack"
  | "skillTitles.natasha.skill"
  | "skillTitles.natasha.ultimate"
  | "skillTitles.natasha.talent"
  | "skillTitles.pela.basicAttack"
  | "skillTitles.pela.skill"
  | "skillTitles.pela.ultimate"
  | "skillTitles.pela.talent"
  | "skillTitles.clara.basicAttack"
  | "skillTitles.clara.skill"
  | "skillTitles.clara.ultimate"
  | "skillTitles.clara.talent"
  | "skillTitles.sampo.basicAttack"
  | "skillTitles.sampo.skill"
  | "skillTitles.sampo.ultimate"
  | "skillTitles.sampo.talent"
  | "skillTitles.hook.basicAttack"
  | "skillTitles.hook.skill"
  | "skillTitles.hook.ultimate"
  | "skillTitles.hook.talent"
  | "skillTitles.qingque.basicAttack"
  | "skillTitles.qingque.skill"
  | "skillTitles.qingque.ultimate"
  | "skillTitles.qingque.talent"
  | "skillTitles.tingyun.basicAttack"
  | "skillTitles.tingyun.skill"
  | "skillTitles.tingyun.ultimate"
  | "skillTitles.tingyun.talent"
  | "skillTitles.jing-yuan.basicAttack"
  | "skillTitles.jing-yuan.skill"
  | "skillTitles.jing-yuan.ultimate"
  | "skillTitles.jing-yuan.talent"
  | "skillTitles.sushang.basicAttack"
  | "skillTitles.sushang.skill"
  | "skillTitles.sushang.ultimate"
  | "skillTitles.sushang.talent"
  | "skillTitles.yanqing.basicAttack"
  | "skillTitles.yanqing.skill"
  | "skillTitles.yanqing.ultimate"
  | "skillTitles.yanqing.talent"
  | "skillTitles.bailu.basicAttack"
  | "skillTitles.bailu.skill"
  | "skillTitles.bailu.ultimate"
  | "skillTitles.bailu.talent"
  | "lightConeNames.arrows"
  | "lightConeNames.cornucopia"
  | "lightConeNames.collapsing-sky"
  | "lightConeNames.amber"
  | "lightConeNames.void"
  | "lightConeNames.chorus"
  | "lightConeNames.data-bank"
  | "lightConeNames.darting-arrow"
  | "lightConeNames.fine-fruit"
  | "lightConeNames.shattered-home"
  | "lightConeNames.defense"
  | "lightConeNames.loop"
  | "lightConeNames.meshing-cogs"
  | "lightConeNames.passkey"
  | "lightConeNames.adversarial"
  | "lightConeNames.multiplication"
  | "lightConeNames.mutual-demise"
  | "lightConeNames.pioneering"
  | "lightConeNames.hidden-shadow"
  | "lightConeNames.mediation"
  | "lightConeNames.sagacity"
  | "lightConeNames.post-op-conversation"
  | "lightConeNames.good-night-and-sleep-well"
  | "lightConeNames.day-one-of-my-new-life"
  | "lightConeNames.only-silence-remains"
  | "lightConeNames.memories-of-the-past"
  | "lightConeNames.the-moles-welcome-you"
  | "lightConeNames.the-birth-of-the-self"
  | "lightConeNames.shared-feeling"
  | "lightConeNames.eyes-of-the-prey"
  | "lightConeNames.landaus-choice"
  | "lightConeNames.swordplay"
  | "lightConeNames.planetary-rendezvous"
  | "lightConeNames.a-secret-vow"
  | "lightConeNames.perfect-timing"
  | "lightConeNames.resolution-shines-as-pearls-of-sweat"
  | "lightConeNames.trend-of-the-universal-market"
  | "lightConeNames.subscribe-for-more"
  | "lightConeNames.quid-pro-quo"
  | "lightConeNames.warmth-shortens-cold-nights"
  | "lightConeNames.in-the-night"
  | "lightConeNames.but-the-battle-isnt-over"
  | "lightConeNames.in-the-name-of-the-world"
  | "lightConeNames.moment-of-victory"
  | "lightConeNames.sleep-like-the-dead"
  | "lightConeNames.time-waits-for-no-one"
  | "lightConeNames.on-the-fall-of-an-aeon"
  | "lightConeNames.cruising-in-the-stellar-sea"
  | "lightConeNames.texture-of-memories"
  | "lightConeNames.make-the-world-clamor"
  | "lightConeNames.night-on-the-milky-way"
  | "lightConeNames.before-dawn"
  | "lightConeNames.under-the-blue-sky"
  | "lightConeNames.geniuses-repose"
  | "lightConeNames.we-are-wildfire"
  | "lightConeNames.river-flows-in-spring"
  | "lightConeNames.fermata"
  | "lightConeNames.woof-walk-time"
  | "lightConeNames.the-seriousness-of-breakfast"
  | "lightConeNames.we-will-meet-again"
  | "lightConeNames.this-is-me"
  | "lightConeNames.return-to-darkness"
  | "lightConeNames.carve-the-moon-weave-the-clouds"
  | "lightConeNames.nowhere-to-run"
  | "lightConeNames.today-is-another-peaceful-day"
  | "lightConeNames.something-irreplaceable"
  | "lightConeNames.dance-dance-dance"
  | "lightConeNames.past-and-future"
  | "lightConeSkillDescriptions.arrows"
  | "lightConeSkillDescriptions.cornucopia"
  | "lightConeSkillDescriptions.collapsing-sky"
  | "lightConeSkillDescriptions.amber"
  | "lightConeSkillDescriptions.void"
  | "lightConeSkillDescriptions.chorus"
  | "lightConeSkillDescriptions.data-bank"
  | "lightConeSkillDescriptions.darting-arrow"
  | "lightConeSkillDescriptions.fine-fruit"
  | "lightConeSkillDescriptions.shattered-home"
  | "lightConeSkillDescriptions.defense"
  | "lightConeSkillDescriptions.loop"
  | "lightConeSkillDescriptions.meshing-cogs"
  | "lightConeSkillDescriptions.passkey"
  | "lightConeSkillDescriptions.adversarial"
  | "lightConeSkillDescriptions.multiplication"
  | "lightConeSkillDescriptions.mutual-demise"
  | "lightConeSkillDescriptions.pioneering"
  | "lightConeSkillDescriptions.hidden-shadow"
  | "lightConeSkillDescriptions.mediation"
  | "lightConeSkillDescriptions.sagacity"
  | "lightConeSkillDescriptions.post-op-conversation"
  | "lightConeSkillDescriptions.good-night-and-sleep-well"
  | "lightConeSkillDescriptions.day-one-of-my-new-life"
  | "lightConeSkillDescriptions.only-silence-remains"
  | "lightConeSkillDescriptions.memories-of-the-past"
  | "lightConeSkillDescriptions.the-moles-welcome-you"
  | "lightConeSkillDescriptions.the-birth-of-the-self"
  | "lightConeSkillDescriptions.shared-feeling"
  | "lightConeSkillDescriptions.eyes-of-the-prey"
  | "lightConeSkillDescriptions.landaus-choice"
  | "lightConeSkillDescriptions.swordplay"
  | "lightConeSkillDescriptions.planetary-rendezvous"
  | "lightConeSkillDescriptions.a-secret-vow"
  | "lightConeSkillDescriptions.perfect-timing"
  | "lightConeSkillDescriptions.resolution-shines-as-pearls-of-sweat"
  | "lightConeSkillDescriptions.trend-of-the-universal-market"
  | "lightConeSkillDescriptions.subscribe-for-more"
  | "lightConeSkillDescriptions.quid-pro-quo"
  | "lightConeSkillDescriptions.warmth-shortens-cold-nights"
  | "lightConeSkillDescriptions.in-the-night"
  | "lightConeSkillDescriptions.but-the-battle-isnt-over"
  | "lightConeSkillDescriptions.in-the-name-of-the-world"
  | "lightConeSkillDescriptions.moment-of-victory"
  | "lightConeSkillDescriptions.sleep-like-the-dead"
  | "lightConeSkillDescriptions.time-waits-for-no-one"
  | "lightConeSkillDescriptions.on-the-fall-of-an-aeon"
  | "lightConeSkillDescriptions.cruising-in-the-stellar-sea"
  | "lightConeSkillDescriptions.texture-of-memories"
  | "lightConeSkillDescriptions.make-the-world-clamor"
  | "lightConeSkillDescriptions.night-on-the-milky-way"
  | "lightConeSkillDescriptions.before-dawn"
  | "lightConeSkillDescriptions.under-the-blue-sky"
  | "lightConeSkillDescriptions.geniuses-repose"
  | "lightConeSkillDescriptions.we-are-wildfire"
  | "lightConeSkillDescriptions.river-flows-in-spring"
  | "lightConeSkillDescriptions.fermata"
  | "lightConeSkillDescriptions.woof-walk-time"
  | "lightConeSkillDescriptions.the-seriousness-of-breakfast"
  | "lightConeSkillDescriptions.we-will-meet-again"
  | "lightConeSkillDescriptions.this-is-me"
  | "lightConeSkillDescriptions.return-to-darkness"
  | "lightConeSkillDescriptions.carve-the-moon-weave-the-clouds"
  | "lightConeSkillDescriptions.nowhere-to-run"
  | "lightConeSkillDescriptions.today-is-another-peaceful-day"
  | "lightConeSkillDescriptions.something-irreplaceable"
  | "lightConeSkillDescriptions.dance-dance-dance"
  | "lightConeSkillDescriptions.past-and-future"
  | string
