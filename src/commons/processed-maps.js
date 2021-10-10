const itemMap = {
  "Blank": {
    "displayName": "Blank",
    "Type": "FISTICUFF",
    "Class": "ALL",
    "Speed": 3,
    "Reach": 55,
    "Power": 2,
    "Weapon_Power": 2
  },
  "LockedInvSpace": {
    "displayName": "LockedInvSpace",
    "Type": "FISTICUFF",
    "Class": "ALL",
    "Speed": 3,
    "Reach": 55,
    "Power": 2,
    "Weapon_Power": 2
  },
  "COIN": {
    "displayName": "Coins",
    "Type": "FISTICUFF",
    "Class": "ALL",
    "Speed": 3,
    "Reach": 55,
    "Power": 2,
    "Weapon_Power": 2
  },
  "EXP": {
    "displayName": "Exp",
    "Type": "FISTICUFF",
    "Class": "ALL",
    "Speed": 3,
    "Reach": 55,
    "Power": 2,
    "Weapon_Power": 2
  },
  "Copper": {
    "displayName": "Copper_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Iron": {
    "displayName": "Iron_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Gold": {
    "displayName": "Gold_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Plat": {
    "displayName": "Platinum_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Dementia": {
    "displayName": "Dementia_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Void": {
    "displayName": "Void_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Lustre": {
    "displayName": "Lustre_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Starfire": {
    "displayName": "Starfire_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Dreadlo": {
    "displayName": "Dreadlo_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "Godshard": {
    "displayName": "Godshard_Ore",
    "Type": "ORE",
    "description": "Smelt_down_[_Ores_into_1_Bar"
  },
  "CopperBar": {
    "displayName": "Copper_Bar",
    "Type": "BAR"
  },
  "IronBar": {
    "displayName": "Iron_Bar",
    "Type": "BAR"
  },
  "GoldBar": {
    "displayName": "Gold_Bar",
    "Type": "BAR"
  },
  "PlatBar": {
    "displayName": "Platinum_Bar",
    "Type": "BAR"
  },
  "DementiaBar": {
    "displayName": "Dementia_Bar",
    "Type": "BAR"
  },
  "VoidBar": {
    "displayName": "Void_Bar",
    "Type": "BAR"
  },
  "LustreBar": {
    "displayName": "Lustre_Bar",
    "Type": "BAR"
  },
  "StarfireBar": {
    "displayName": "Starfire_Bar",
    "Type": "BAR"
  },
  "DreadloBar": {
    "displayName": "Dreadlo_Bar",
    "Type": "BAR"
  },
  "GodshardBar": {
    "displayName": "Godshard_Bar",
    "Type": "BAR"
  },
  "OilBarrel1": {
    "displayName": "Crude_Oil",
    "Type": "BARREL",
    "lvReqToCraft": 10,
    "description": "Increases_Forging_Speed_by_[%"
  },
  "OilBarrel2": {
    "displayName": "Toxic_Sludge",
    "Type": "BARREL",
    "lvReqToCraft": 10,
    "description": "Increases_Extra_Bar_chance"
  },
  "OilBarrel3": {
    "displayName": "Radioactive_Waste",
    "Type": "BARREL",
    "lvReqToCraft": 10,
    "description": "Increases_chance_to_Not_Use_Up"
  },
  "OilBarrel4": {
    "displayName": "Glumlee's_Special_Tutorial_Oil",
    "Type": "BARREL",
    "lvReqToCraft": 999,
    "description": "Increases_Forging_Speed_by_[%"
  },
  "OilBarrel5": {
    "displayName": "Eco_Friendly_Oil",
    "Type": "BARREL",
    "lvReqToCraft": 999,
    "description": "Increases_Forging_Speed_by_[%"
  },
  "OakTree": {
    "displayName": "Oak_Logs",
    "Type": "LOG"
  },
  "BirchTree": {
    "displayName": "Bleach_Logs",
    "Type": "LOG"
  },
  "JungleTree": {
    "displayName": "Jungle_Logs",
    "Type": "LOG"
  },
  "ForestTree": {
    "displayName": "Forest_Fibres",
    "Type": "LOG"
  },
  "ToiletTree": {
    "displayName": "Potty_Rolls",
    "Type": "LOG"
  },
  "PalmTree": {
    "displayName": "Tropilogs",
    "Type": "LOG"
  },
  "StumpTree": {
    "displayName": "Veiny_Logs",
    "Type": "LOG"
  },
  "SaharanFoal": {
    "displayName": "Tundra_Logs",
    "Type": "LOG"
  },
  "Tree7": {
    "displayName": "Wispy_Lumber",
    "Type": "LOG"
  },
  "AlienTree": {
    "displayName": "Alien_Hive_Chunk",
    "Type": "LOG"
  },
  "Leaf1": {
    "displayName": "Grass_Leaf",
    "Type": "LEAF"
  },
  "Leaf2": {
    "displayName": "Twisty_Leaf",
    "Type": "LEAF"
  },
  "Leaf3": {
    "displayName": "Arctic_Leaf",
    "Type": "LEAF"
  },
  "FillerMaterial": {
    "displayName": "Not_Yet",
    "Type": "FISH",
    "description": "Sorry_gamer,_but_this_material_isn't_in_the_game_yet!_You'll_have_to_wait_for_the_next_update_to_get_it."
  },
  "Fish1": {
    "displayName": "Goldfish",
    "Type": "FISH",
    "description": "It's_not_a_snack,_and_it_certainly_doesn't_smile_back..._for_copyright_reasons!"
  },
  "Fish2": {
    "displayName": "Hermit_Can",
    "Type": "FISH",
    "description": "The_branding_on_the_soda_can_must_have_gotten_washed_off_by_some_kind_of_liquidy,_wavey_substance._Oh,_right."
  },
  "Fish3": {
    "displayName": "Jellyfish",
    "Type": "FISH",
    "description": "Don't_let_it_sting_you,_unless_you're_into_getting_tinkled_on_by_random_beach-goers."
  },
  "Fish4": {
    "displayName": "Bloach",
    "Type": "FISH",
    "description": "The_result_of_putting_Blood_and_Leech_into_a_bad_pokemon_generator."
  },
  "Fish5": {
    "displayName": "Filler",
    "Type": "FISH",
    "description": "The_result_of_putting_Blood_and_Leech_into_a_bad_pokemon_generator."
  },
  "Fish6": {
    "displayName": "Filler",
    "Type": "FISH",
    "description": "The_result_of_putting_Blood_and_Leech_into_a_bad_pokemon_generator."
  },
  "Fish7": {
    "displayName": "Filler",
    "Type": "FISH",
    "description": "The_result_of_putting_Blood_and_Leech_into_a_bad_pokemon_generator."
  },
  "Fish8": {
    "displayName": "Filler",
    "Type": "FISH",
    "description": "The_result_of_putting_Blood_and_Leech_into_a_bad_pokemon_generator."
  },
  "Bug1": {
    "displayName": "Fly",
    "Type": "BUG",
    "description": "I_don't_know_whyyyy_she_swallowed_a_flyyy,_perhaps_she'll_cry_from_being_perpetually_made_fun_of_in_the_form_of_a_nursey_rhyme_just_because_she_made_one_bad_decision..._er,_die!"
  },
  "Bug2": {
    "displayName": "Butterfly",
    "Type": "BUG",
    "description": "Butter_Fly?_Get_it???_Sorry..._I_promise_I_wont_make_this_kind_of_joke_again"
  },
  "Bug3": {
    "displayName": "Sentient_Cereal",
    "Type": "BUG",
    "description": "Honestly,_I_was_shocked_too_at_first_when_I_learned_that_cereal_in_real_life_was_harvested_from_Cereal_Bugs._Seriously,_look_it_up!_Most_cereal_before_1960_were_made_from_harvested_Cereal_Bug_Nests!"
  },
  "Bug4": {
    "displayName": "Fruitfly",
    "Type": "BUG",
    "description": "Hahaha_I_had_my_fingers_crossed!"
  },
  "Bug5": {
    "displayName": "Mosquisnow",
    "Type": "BUG",
    "description": "I'm_so_tired_of_all_these_blood_sucking_vermin_in_IdleOn..._and_these_mosquisnow_bugs_are_annoying_too!"
  },
  "Bug6": {
    "displayName": "Flycicle",
    "Type": "BUG",
    "description": "Ok_these_bugs_are_really_not_making_any_sense_anymore."
  },
  "Critter1": {
    "displayName": "Froge",
    "Type": "CRITTER",
    "description": "The_living_embodiment_of_the_classic_cryptocurrency_'Frogecoin'._Very_ribbit,_much_green,_wow!!"
  },
  "Critter1A": {
    "displayName": "Poison_Froge",
    "Type": "CRITTER",
    "description": "Ew,_it's_the_living_embodiment_of_that_scam_alt-coin_crypto_ripoff,_'Frogecoin_Cash'"
  },
  "Critter2": {
    "displayName": "Crabbo",
    "Type": "CRITTER",
    "description": "Argg,_yer_spendin'_all_me_money!"
  },
  "Critter2A": {
    "displayName": "Mutant_Crabbo",
    "Type": "CRITTER",
    "description": "Argghgg,_yershpend_inall_memuh_knee!!..._Yea,_mutants_can't_speak_very_well,_probably_on_account_of_the_radiation_poisioning_and_all_that."
  },
  "Critter3": {
    "displayName": "Scorpie",
    "Type": "CRITTER",
    "description": "This_cutie_will_stab_its_way_into_your_heart_if_you_aren't_careful!_No_seriosuly,_be_careful,_the_bugger_pricked_my_foot_the_other_day_and_it_hurt_bad."
  },
  "Critter3A": {
    "displayName": "Crescent_Scorpie",
    "Type": "CRITTER",
    "description": "This_chrome_coloured_scorpion_came_straight_from_the_future!_Fuuuutuuuuureee!_FUUTUUURREE!!!_SOMEONE_DIRECT_ME_TO_THE_CAN_OPENERRRR!!!!"
  },
  "Critter4": {
    "displayName": "Mousey",
    "Type": "CRITTER",
    "description": "Adorable!!!_Look_how_cute_it's_tail_is,_and_that_itty_bitty_nose,_and_the_fact_that_it's_a_mouse_and_not_a_rat_so_I_don't_want_to_hit_it_with_a_broom!"
  },
  "Critter4A": {
    "displayName": "Nakeo_Moleo",
    "Type": "CRITTER",
    "description": "This_mole_ain't_got_no_fur!_Ew,_gross!!_Disgusting_even!!!_What_kind_of_wretched_abomination_has_skin_but_no_thick_layer_of_fur??"
  },
  "Critter5": {
    "displayName": "Owlio",
    "Type": "CRITTER",
    "description": "Hoot_hoot!_Yea_thats_all_I_got_for_this_one."
  },
  "Critter5A": {
    "displayName": "Minervowl",
    "Type": "CRITTER",
    "description": "It's_a_more_expensive_hoot,_I_guess._I_ain't_got_no_jokes_for_owls,_they're_too_cool."
  },
  "Critter6": {
    "displayName": "Pingy",
    "Type": "CRITTER",
    "description": "It's_basically_just_Gunter_but_with_RTX_off."
  },
  "Critter6A": {
    "displayName": "Eternal_Lord_of__The_Undying_Ember",
    "Type": "CRITTER",
    "description": "Bow_before_the_destroyer_of_all_that_lies_outside_his_domain,_the_ruler_of_the_8th_dimension_and_all_that_it's_flame_encompasses,_the_bringer_of_light_to_the_blind,_and_darkness_to_those_who_recite_his_title_in_full._...ah_crap."
  },
  "Critter7": {
    "displayName": "Bunny",
    "Type": "CRITTER",
    "description": "It_could_use_a_carrot,_the_lil'_guy_needs_some_food!"
  },
  "Critter7A": {
    "displayName": "Purbunni",
    "Type": "CRITTER",
    "description": "The_other_bunny_is_brilliant..."
  },
  "Critter8": {
    "displayName": "Dung_Beat",
    "Type": "CRITTER",
    "description": "You_lean_closer_to_the_critter,_and_hear_it_say_'Dodo_tshh_do_dodo_tss_dodo_tss_badabada_dodoooo'._So_no,_that_name_isn't_a_typo."
  },
  "Critter8A": {
    "displayName": "Jade_Scarab",
    "Type": "CRITTER",
    "description": "Oh_I_guess_this_one_is_a_scarab,_not_a_beetle._You_can_tell_because_of_the_way_it_is."
  },
  "Critter9": {
    "displayName": "Honker",
    "Type": "CRITTER",
    "description": "HONK!_HONK!"
  },
  "Critter9A": {
    "displayName": "Diamond_Duck",
    "Type": "CRITTER",
    "description": "One_of_the_only_beings_strong_enough_to_take_on_the_Eternal_Lord_of_the_Undying_Ember_realm._Their_battle_would_be_legendary."
  },
  "Soul1": {
    "displayName": "Forest_Soul",
    "Type": "SOUL",
    "description": "The_soul_moans_ooOOOOooOOOoo,_because_it's_the_only_key_on_his_keyboard_that_works."
  },
  "Soul2": {
    "displayName": "Dune_Soul",
    "Type": "SOUL",
    "description": "Fat_chonker_this_one_is!_It_must_be_the_moonmoon_diet_these_ghosts_have,_they_should_start_eating_some_of_those_fruits_for_a_change!"
  },
  "Soul3": {
    "displayName": "Rooted_Soul",
    "Type": "SOUL",
    "description": "It's_smiling_as_if_it_knows_something_that_you_don't..."
  },
  "Soul4": {
    "displayName": "Frigid_Soul",
    "Type": "SOUL",
    "description": "Well,_his_mom_did_warn_him_if_that_he_kept_making_funny_faces_that_it'd_freeze_that_way!"
  },
  "Soul5": {
    "displayName": "Squiddy_Soul",
    "Type": "SOUL",
    "description": "The_soul_moans_ooOOOOooOOOoo,_because_it's_the_only_key_on_his_keyboard_that_works."
  },
  "Soul6": {
    "displayName": "Cryo_Soul",
    "Type": "SOUL",
    "description": "The_soul_moans_ooOOOOooOOOoo,_because_it's_the_only_key_on_his_keyboard_that_works."
  },
  "EquipmentHats1": {
    "displayName": "Farmer_Brim",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "Defence": 2,
    "Upgrade_Slots_Left": 1
  },
  "TestObj15": {
    "displayName": "Slime_Cap",
    "Type": "HELMET",
    "lvReqToCraft": 25,
    "lvReqToEquip": 15,
    "Class": "BEGINNER",
    "AGI": 4,
    "LUK": 2,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentHatsBeg1": {
    "displayName": "Ice_Cream_Sunday",
    "Type": "HELMET",
    "lvReqToCraft": 25,
    "lvReqToEquip": 30,
    "Class": "BEGINNER",
    "WIS": 6,
    "Defence": 5,
    "UQ1txt": "%_GOLD_FOOD_EFFECT",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats61": {
    "displayName": "Mark_of_Member",
    "Type": "HELMET",
    "lvReqToCraft": 25,
    "lvReqToEquip": 80,
    "Class": "BEGINNER",
    "LUK": 20,
    "Defence": 50,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 15,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats15": {
    "displayName": "Leather_Cap",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 6,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats5": {
    "displayName": "White_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats6": {
    "displayName": "Green_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 4,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats7": {
    "displayName": "Red_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 1,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats8": {
    "displayName": "Purple_Tupacband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 2,
    "WIS": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats9": {
    "displayName": "Yellow_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 2,
    "WIS": 3,
    "LUK": 8,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats10": {
    "displayName": "Pink_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 4,
    "AGI": 4,
    "WIS": 4,
    "LUK": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats11": {
    "displayName": "Grey_Beret",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 1,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentHats12": {
    "displayName": "Traffic_Cone",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 1,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentHats13": {
    "displayName": "Propeller_Cap",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "WIS": 1,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentHats14": {
    "displayName": "Baseball_Hat",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "Upgrade_Slots_Left": 1
  },
  "TestObj14": {
    "displayName": "Trojan_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 10,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "Upgrade_Slots_Left": 2
  },
  "TestObj16": {
    "displayName": "Demon_Horns",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 50,
    "Weapon_Power": 50,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Defence": 1,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats4Choppin": {
    "displayName": "Stump_Prop",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "AGI": 3,
    "LUK": 4,
    "Defence": 2,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats17": {
    "displayName": "Copper_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 8,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "Defence": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats18": {
    "displayName": "Iron_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "Defence": 9,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats28": {
    "displayName": "Gold_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 7,
    "AGI": 7,
    "WIS": 7,
    "Defence": 15,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 3,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats22": {
    "displayName": "Amarok_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 38,
    "Class": "ALL",
    "STR": 4,
    "AGI": 4,
    "WIS": 4,
    "LUK": 4,
    "Defence": 20,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentHats19": {
    "displayName": "Platinum_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 55,
    "Class": "ALL",
    "STR": 9,
    "AGI": 9,
    "WIS": 9,
    "Defence": 25,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentHats53": {
    "displayName": "Dementia_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "STR": 12,
    "AGI": 12,
    "WIS": 12,
    "LUK": 12,
    "Defence": 34,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 6,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentHats52": {
    "displayName": "Efaunt_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 80,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 8,
    "AGI": 8,
    "WIS": 8,
    "LUK": 8,
    "Defence": 38,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentHats54": {
    "displayName": "Void_Imperium_Helmet",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 90,
    "Class": "ALL",
    "STR": 15,
    "AGI": 15,
    "WIS": 15,
    "LUK": 15,
    "Defence": 46,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 8,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats21": {
    "displayName": "Party_Hat",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 10,
    "Class": "BEGINNER",
    "LUK": 5,
    "Defence": 10,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats23": {
    "displayName": "Farmer_Brimer",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 3,
    "Class": "ALL",
    "AGI": 4,
    "WIS": 2,
    "Defence": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats24": {
    "displayName": "Farmer_Brimest",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "Defence": 6,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats25": {
    "displayName": "Bored_Beanie",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 8,
    "Class": "ALL",
    "AGI": 7,
    "LUK": 3,
    "Defence": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats2": {
    "displayName": "Royal_Turban",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "AGI": 15,
    "Defence": 7,
    "UQ1txt": "%_GOLD_FOOD_EFFECT",
    "UQ1val": 15,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentHats27": {
    "displayName": "Paper_Boat",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "STR": 4,
    "WIS": 10,
    "Defence": 12,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentHats29": {
    "displayName": "Alien_Headband",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 13,
    "Class": "ALL",
    "AGI": 3,
    "WIS": 11,
    "Defence": 4,
    "UQ1txt": "%_MANA_REGEN",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats30": {
    "displayName": "Cowbo_Galloneer",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 6,
    "Class": "ALL",
    "STR": 2,
    "Defence": 3,
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 25,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats39": {
    "displayName": "Grandma_Disguise",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "WIS": 15,
    "Defence": 5,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 7,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentHats42": {
    "displayName": "Santa_Hat",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats44": {
    "displayName": "Jar",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Defence": 25,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats51": {
    "displayName": "Big_Pretty_Bow",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats55": {
    "displayName": "Steam_Cap",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 3
  },
  "EquipmentHats56": {
    "displayName": "Bunny_Ears",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 4,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats63": {
    "displayName": "Summer_Shell",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 4,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats20": {
    "displayName": "Militia_Helm",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 10,
    "Class": "WARRIOR",
    "STR": 7,
    "AGI": 2,
    "Defence": 11,
    "Upgrade_Slots_Left": 2
  },
  "TestObj13": {
    "displayName": "Viking_Cap",
    "Type": "HELMET",
    "lvReqToEquip": 40,
    "Class": "WARRIOR",
    "STR": 13,
    "WIS": 3,
    "Defence": 21,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats58": {
    "displayName": "Murmillo_Helm",
    "Type": "HELMET",
    "lvReqToEquip": 100,
    "Class": "WARRIOR",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 20,
    "WIS": 10,
    "Defence": 55,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats3": {
    "displayName": "Thief_Hood",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 10,
    "Class": "ARCHER",
    "STR": 3,
    "AGI": 6,
    "Defence": 9,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats41": {
    "displayName": "Sleek_Coif",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 40,
    "Class": "ARCHER",
    "STR": 4,
    "AGI": 12,
    "Defence": 18,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats59": {
    "displayName": "Conquistador_Plume",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "ARCHER",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 7,
    "AGI": 23,
    "Defence": 47,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 6,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats16": {
    "displayName": "Top_Hat",
    "Type": "HELMET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 10,
    "Class": "MAGE",
    "WIS": 8,
    "LUK": 1,
    "Defence": 7,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentHats26": {
    "displayName": "Witch_Hat",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 40,
    "Class": "MAGE",
    "AGI": 1,
    "WIS": 16,
    "Defence": 15,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentHats60": {
    "displayName": "Adornment_of_the_High_Priest",
    "Type": "HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 100,
    "Class": "MAGE",
    "Power": 1,
    "Weapon_Power": 1,
    "AGI": 5,
    "WIS": 25,
    "Defence": 40,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 30,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentPunching1": {
    "displayName": "Boxing_Gloves",
    "Type": "FISTICUFF",
    "lvReqToCraft": 2,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 55,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 2,
    "LUK": 2
  },
  "EquipmentPunching2": {
    "displayName": "The_Stingers",
    "Type": "FISTICUFF",
    "lvReqToCraft": 10,
    "lvReqToEquip": 6,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 60,
    "Power": 11,
    "Weapon_Power": 11,
    "STR": 5,
    "LUK": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPunching3": {
    "displayName": "Bandage_Wraps",
    "Type": "FISTICUFF",
    "lvReqToCraft": 10,
    "lvReqToEquip": 25,
    "Class": "BEGINNER",
    "Speed": 7,
    "Reach": 65,
    "Power": 20,
    "Weapon_Power": 20,
    "STR": 6,
    "LUK": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPunching4": {
    "displayName": "Uninflated_Glove",
    "Type": "FISTICUFF",
    "lvReqToCraft": 10,
    "lvReqToEquip": 50,
    "Class": "BEGINNER",
    "Speed": 8,
    "Reach": 65,
    "Power": 27,
    "Weapon_Power": 27,
    "LUK": 13,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentPunching5": {
    "displayName": "Eclectic_Ordeal",
    "Type": "FISTICUFF",
    "lvReqToCraft": 10,
    "lvReqToEquip": 85,
    "Class": "BEGINNER",
    "Speed": 9,
    "Reach": 85,
    "Power": 32,
    "Weapon_Power": 32,
    "LUK": 17,
    "UQ1txt": "%_CRIT_CHANCE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "TestObj1": {
    "displayName": "Wooden_Spear",
    "Type": "SPEAR",
    "lvReqToCraft": 3,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 70,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3,
    "WIS": 1,
    "Upgrade_Slots_Left": 1
  },
  "TestObj7": {
    "displayName": "Steel_Axe",
    "Type": "SPEAR",
    "lvReqToCraft": 20,
    "lvReqToEquip": 11,
    "Class": "WARRIOR",
    "Speed": 5,
    "Reach": 62,
    "Power": 14,
    "Weapon_Power": 14,
    "STR": 7,
    "WIS": 3,
    "Upgrade_Slots_Left": 2
  },
  "TestObj3": {
    "displayName": "Royal_Bayonet",
    "Type": "SPEAR",
    "lvReqToCraft": 25,
    "lvReqToEquip": 30,
    "Class": "WARRIOR",
    "Speed": 5,
    "Reach": 95,
    "Power": 20,
    "Weapon_Power": 20,
    "STR": 10,
    "WIS": 2,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentSword1": {
    "displayName": "Enforced_Slasher",
    "Type": "SPEAR",
    "lvReqToCraft": 50,
    "lvReqToEquip": 50,
    "Class": "WARRIOR",
    "Speed": 5,
    "Reach": 80,
    "Power": 26,
    "Weapon_Power": 26,
    "STR": 11,
    "WIS": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentSword2": {
    "displayName": "The_Ice_Breaker",
    "Type": "SPEAR",
    "lvReqToCraft": 50,
    "lvReqToEquip": 75,
    "Class": "WARRIOR",
    "Speed": 5,
    "Reach": 76,
    "Power": 33,
    "Weapon_Power": 33,
    "STR": 13,
    "WIS": 6,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentSword3": {
    "displayName": "Deuscythe",
    "Type": "SPEAR",
    "lvReqToCraft": 50,
    "lvReqToEquip": 90,
    "Class": "WARRIOR",
    "Speed": 6,
    "Reach": 88,
    "Power": 40,
    "Weapon_Power": 40,
    "STR": 20,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "TestObj4": {
    "displayName": "Frozen_Impaler",
    "Type": "SPEAR",
    "lvReqToCraft": 50,
    "lvReqToEquip": 45,
    "Class": "WARRIOR",
    "Speed": 3,
    "Reach": 100,
    "Power": 66,
    "Weapon_Power": 66,
    "STR": 4,
    "AGI": 2,
    "WIS": 9,
    "LUK": 2,
    "Upgrade_Slots_Left": 2
  },
  "TestObj5": {
    "displayName": "Blood_Screamer",
    "Type": "SPEAR",
    "lvReqToCraft": 30,
    "lvReqToEquip": 55,
    "Class": "WARRIOR",
    "Speed": 4,
    "Reach": 84,
    "Power": 87,
    "Weapon_Power": 87,
    "STR": 5,
    "AGI": 15,
    "WIS": 5,
    "LUK": 5,
    "Upgrade_Slots_Left": 2
  },
  "TestObj8": {
    "displayName": "Flaming_Katana",
    "Type": "SWORD",
    "lvReqToCraft": 30,
    "lvReqToEquip": 85,
    "Class": "WARRIOR",
    "Speed": 7,
    "Reach": 74,
    "Power": 36,
    "Weapon_Power": 36,
    "WIS": 6,
    "LUK": 8,
    "Upgrade_Slots_Left": 2
  },
  "TestObj9": {
    "displayName": "Emerald_Eizon",
    "Type": "SWORD",
    "lvReqToCraft": 40,
    "lvReqToEquip": 95,
    "Class": "WARRIOR",
    "Speed": 7,
    "Reach": 76,
    "Power": 45,
    "Weapon_Power": 45,
    "WIS": 3,
    "LUK": 2,
    "Upgrade_Slots_Left": 2
  },
  "TestObj10": {
    "displayName": "Stalagmite",
    "Type": "SWORD",
    "lvReqToCraft": 62,
    "lvReqToEquip": 155,
    "Class": "WARRIOR",
    "Speed": 8,
    "Reach": 78,
    "Power": 55,
    "Weapon_Power": 55,
    "STR": 10,
    "AGI": 5,
    "WIS": 6,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentWeapons1": {
    "displayName": "Iron_Sword",
    "Type": "SPEAR",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "WARRIOR",
    "Speed": 9,
    "Reach": 78,
    "Power": 25,
    "Weapon_Power": 25,
    "STR": 3,
    "LUK": 1,
    "Upgrade_Slots_Left": 2
  },
  "TestObj2": {
    "displayName": "Steel_Spear",
    "Type": "SPEAR",
    "lvReqToCraft": 10,
    "lvReqToEquip": 25,
    "Class": "WARRIOR",
    "Speed": 2,
    "Reach": 90,
    "Power": 40,
    "Weapon_Power": 40,
    "STR": 2,
    "WIS": 3,
    "LUK": 1,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentBows1": {
    "displayName": "Wooden_Bow",
    "Type": "BOW",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 150,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 2,
    "AGI": 3,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentBows3": {
    "displayName": "Birch_Longbow",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 12,
    "Class": "ARCHER",
    "Speed": 6,
    "Reach": 170,
    "Power": 12,
    "Weapon_Power": 12,
    "STR": 4,
    "AGI": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentBows4": {
    "displayName": "Carrot_Launcher",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 18,
    "Class": "ARCHER",
    "Speed": 2,
    "Reach": 225,
    "Power": 22,
    "Weapon_Power": 22,
    "AGI": 8,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentBows5": {
    "displayName": "Spiked_Menace",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 30,
    "Class": "ARCHER",
    "Speed": 6,
    "Reach": 175,
    "Power": 17,
    "Weapon_Power": 17,
    "STR": 5,
    "AGI": 8,
    "LUK": 3,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentBows6": {
    "displayName": "Pharoah_Bow",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 50,
    "Class": "ARCHER",
    "Speed": 6,
    "Reach": 200,
    "Power": 23,
    "Weapon_Power": 23,
    "STR": 1,
    "AGI": 13,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentBows7": {
    "displayName": "Blizzard_Bow",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 75,
    "Class": "ARCHER",
    "Speed": 6,
    "Reach": 205,
    "Power": 30,
    "Weapon_Power": 30,
    "AGI": 15,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentBows8": {
    "displayName": "Blackhole_Bow",
    "Type": "BOW",
    "lvReqToCraft": 22,
    "lvReqToEquip": 90,
    "Class": "ARCHER",
    "Speed": 7,
    "Reach": 230,
    "Power": 36,
    "Weapon_Power": 36,
    "STR": 10,
    "AGI": 13,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentWands1": {
    "displayName": "Gnarled_Wand",
    "Type": "WAND",
    "lvReqToCraft": 5,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 115,
    "Power": 7,
    "Weapon_Power": 7,
    "WIS": 4,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentWands2": {
    "displayName": "Quarterstaff",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 12,
    "Class": "MAGE",
    "Speed": 4,
    "Reach": 120,
    "Power": 16,
    "Weapon_Power": 16,
    "WIS": 9,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentWands5": {
    "displayName": "Starlight",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 30,
    "Class": "MAGE",
    "Speed": 4,
    "Reach": 145,
    "Power": 23,
    "Weapon_Power": 23,
    "AGI": 1,
    "WIS": 11,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentWands6": {
    "displayName": "Crows_Nest",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 50,
    "Class": "MAGE",
    "Speed": 5,
    "Reach": 160,
    "Power": 30,
    "Weapon_Power": 30,
    "AGI": 5,
    "WIS": 9,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentWands3": {
    "displayName": "Spriggly_Storm",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 75,
    "Class": "MAGE",
    "Speed": 5,
    "Reach": 155,
    "Power": 36,
    "Weapon_Power": 36,
    "WIS": 15,
    "LUK": 1,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentWands7": {
    "displayName": "Grey_Gatsby",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 90,
    "Class": "MAGE",
    "Speed": 6,
    "Reach": 170,
    "Power": 43,
    "Weapon_Power": 43,
    "AGI": 10,
    "WIS": 13,
    "LUK": 1,
    "UQ1txt": "%_CRIT_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentWands4": {
    "displayName": "Microphone",
    "Type": "WAND",
    "lvReqToCraft": 22,
    "lvReqToEquip": 1,
    "Class": "MAGE",
    "Speed": 8,
    "Reach": 160,
    "Power": 13,
    "Weapon_Power": 13,
    "AGI": 5,
    "WIS": 9,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts1": {
    "displayName": "Orange_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 3,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "STR": 2,
    "AGI": 1,
    "Defence": 3,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentShirts2": {
    "displayName": "Blue_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 4,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "AGI": 1,
    "WIS": 2,
    "Defence": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts16": {
    "displayName": "Spore_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 3,
    "Defence": 3,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentShirts3": {
    "displayName": "Black_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 5,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentShirts4": {
    "displayName": "Tanned_Hide",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ARCHER",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts6": {
    "displayName": "Paralax_Chest",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "WARRIOR",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts7": {
    "displayName": "Molten_Chest",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "WARRIOR",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts8": {
    "displayName": "REPLACE_ME",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "BEGINNER",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts9": {
    "displayName": "REPLACE_ME",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts21": {
    "displayName": "Tattered_Cloth",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "MAGE",
    "WIS": 8,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts10": {
    "displayName": "Fur_Shirt",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 18,
    "Class": "ARCHER",
    "STR": 5,
    "AGI": 9,
    "Defence": 13,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts11": {
    "displayName": "Copper_Platebody",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 8,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 7,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts12": {
    "displayName": "Iron_Platebody",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "Defence": 12,
    "UQ1val": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShirts13": {
    "displayName": "Gold_Platebody",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "Defence": 18,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts18": {
    "displayName": "Amarok_Bodyplate",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "Defence": 22,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentShirts14": {
    "displayName": "Platinum_Platbody",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "STR": 8,
    "AGI": 8,
    "WIS": 8,
    "Defence": 25,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts15": {
    "displayName": "Dementia_Body",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "STR": 10,
    "AGI": 10,
    "WIS": 10,
    "Defence": 35,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShirts26": {
    "displayName": "Efaunt_Ribcage",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 80,
    "Class": "ALL",
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "Defence": 30,
    "UQ1txt": "%_MASTERY",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentShirts27": {
    "displayName": "Void_Imperium_Platebody",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 90,
    "Class": "ALL",
    "STR": 13,
    "AGI": 13,
    "WIS": 13,
    "Defence": 45,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShirts17": {
    "displayName": "MCR_Tshirt",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "AGI": 8,
    "Defence": 1,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShirts19": {
    "displayName": "Planktop",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "STR": 6,
    "Defence": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts20": {
    "displayName": "Hide_Shirt",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "WARRIOR",
    "STR": 6,
    "Defence": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts24": {
    "displayName": "Green_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 3,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "LUK": 3,
    "Defence": 4,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentShirts25": {
    "displayName": "Purple_Tee",
    "Type": "SHIRT",
    "lvReqToCraft": 3,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "WIS": 3,
    "Defence": 3,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentShirts31": {
    "displayName": "Member_Hoodie",
    "Type": "SHIRT",
    "lvReqToCraft": 3,
    "lvReqToEquip": 80,
    "Class": "BEGINNER",
    "LUK": 25,
    "Defence": 40,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 15,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShirts5": {
    "displayName": "Studded_Hide",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 40,
    "Class": "WARRIOR",
    "STR": 10,
    "WIS": 4,
    "Defence": 22,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts23": {
    "displayName": "Feral_Leathering",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 40,
    "Class": "ARCHER",
    "STR": 2,
    "AGI": 12,
    "Defence": 18,
    "UQ1txt": "%_CATCH_EFFICINCY",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts22": {
    "displayName": "Furled_Robes",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 40,
    "Class": "MAGE",
    "AGI": 1,
    "WIS": 13,
    "Defence": 14,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShirts28": {
    "displayName": "Damascus_Plates",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 95,
    "Class": "WARRIOR",
    "STR": 17,
    "WIS": 5,
    "Defence": 52,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentShirts29": {
    "displayName": "Evergreen_Wraps",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 95,
    "Class": "ARCHER",
    "STR": 4,
    "AGI": 19,
    "Defence": 49,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentShirts30": {
    "displayName": "Elegantine_Robes",
    "Type": "SHIRT",
    "lvReqToCraft": 55,
    "lvReqToEquip": 95,
    "Class": "MAGE",
    "AGI": 1,
    "WIS": 23,
    "Defence": 47,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentPants1": {
    "displayName": "Torn_Jeans",
    "Type": "PANTS",
    "lvReqToCraft": 5,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "AGI": 2,
    "WIS": 1,
    "Defence": 4,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentPants2": {
    "displayName": "Copper_Platelegs",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 8,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 6,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants3": {
    "displayName": "Iron_Platelegs",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "Defence": 11,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants4": {
    "displayName": "Gold_Platelegs",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 4,
    "AGI": 4,
    "WIS": 4,
    "Defence": 16,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants17": {
    "displayName": "Amarok_Hinds",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 40,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 18,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentPants5": {
    "displayName": "Platinum_Shins",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "STR": 6,
    "AGI": 6,
    "WIS": 6,
    "Defence": 23,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants6": {
    "displayName": "Dementia_Shins",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "STR": 7,
    "AGI": 7,
    "WIS": 7,
    "Defence": 28,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 3,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentPants20": {
    "displayName": "Efaunt_Hipilium",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 75,
    "Class": "ALL",
    "STR": 4,
    "AGI": 4,
    "WIS": 4,
    "Defence": 32,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentPants21": {
    "displayName": "Void_Imperium_Shardshins",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 90,
    "Class": "ALL",
    "STR": 9,
    "AGI": 9,
    "WIS": 9,
    "Defence": 38,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 7,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentPants7": {
    "displayName": "Gilded_Pilates",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "WARRIOR",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants8": {
    "displayName": "Twisted_Scales",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants9": {
    "displayName": "Crystallax_Shins",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "WARRIOR",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants10": {
    "displayName": "Give_Up_On_Life_Pants",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 7,
    "Class": "ALL",
    "WIS": 6,
    "Defence": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants11": {
    "displayName": "Yellow_Belt_Ninja_Pants",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants12": {
    "displayName": "Merchantile_Pants",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants13": {
    "displayName": "Ancient_Leggings",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants14": {
    "displayName": "Forensic_Leggings",
    "Type": "PANTS",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPants15": {
    "displayName": "Bleached_Designer_Wode_Patch_Pants",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "AGI": 3,
    "WIS": 7,
    "Defence": 11,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants16": {
    "displayName": "Adam's_Leaf",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 4,
    "WIS": 13,
    "Defence": 2,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants18": {
    "displayName": "Dirty_Coal_Miner_Baggy_Soot_Pants",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "STR": 7,
    "Defence": 12,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants19": {
    "displayName": "Trimmed_Rune_Platelegs",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 82,
    "Class": "ALL",
    "STR": 4,
    "AGI": 2,
    "Defence": 20,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentPants22": {
    "displayName": "Fishing_Overalls",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 8,
    "Defence": 15,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 12,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPants23": {
    "displayName": "Bandito_Pantaloon",
    "Type": "PANTS",
    "lvReqToCraft": 25,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "AGI": 9,
    "Defence": 14,
    "UQ1txt": "%_CATCH_EFFICINCY",
    "UQ1val": 12,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes1": {
    "displayName": "Copper_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 8,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 2,
    "Defence": 2,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes15": {
    "displayName": "Iron_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes3": {
    "displayName": "Gold_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "Defence": 8,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes20": {
    "displayName": "Amarok_Paws",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "Defence": 10,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 3,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentShoes4": {
    "displayName": "Platinum_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "Defence": 15,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes5": {
    "displayName": "Dementia_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 65,
    "Class": "ALL",
    "STR": 7,
    "AGI": 7,
    "WIS": 7,
    "LUK": 7,
    "Defence": 22,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 7,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShoes21": {
    "displayName": "Efaunts_Broken_Ankles",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 75,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "Defence": 18,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentShoes22": {
    "displayName": "Void_Imperium_Kicks",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 85,
    "Class": "ALL",
    "STR": 9,
    "AGI": 9,
    "WIS": 9,
    "LUK": 9,
    "Defence": 30,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 8,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentShoes6": {
    "displayName": "Hermes_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes7": {
    "displayName": "Goo_Galoshes",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 2,
    "UQ1txt": "%_MONEY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes8": {
    "displayName": "Yeti_Walkers",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes9": {
    "displayName": "Flip_Flops",
    "Type": "SHOES",
    "lvReqToCraft": 3,
    "lvReqToEquip": 4,
    "Class": "ALL",
    "AGI": 3,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentShoes10": {
    "displayName": "Flap_Flops",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes11": {
    "displayName": "Floop_Flops",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes12": {
    "displayName": "Flux_Flops",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "STR": 5,
    "AGI": 3,
    "LUK": 8,
    "Defence": 40,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes13": {
    "displayName": "Gaia_Shoes",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 2,
    "AGI": 6,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentShoes14": {
    "displayName": "Cauldrunners",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "MAGE",
    "WIS": 9,
    "Defence": 4,
    "UQ1txt": "%_BREW_SPEED",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes16": {
    "displayName": "Cavern_Trekkers",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "STR": 5,
    "WIS": 1,
    "Defence": 10,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes17": {
    "displayName": "Logger_Heels",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "WIS": 7,
    "Defence": 6,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes18": {
    "displayName": "Angler_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "STR": 6,
    "Defence": 8,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes19": {
    "displayName": "Bandito_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "AGI": 6,
    "Defence": 8,
    "UQ1txt": "%_CATCH_EFFICINCY",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentShoes2": {
    "displayName": "Eyern_Boots",
    "Type": "SHOES",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Defence": 1,
    "UQ1txt": "%_NOVELTY",
    "UQ1val": 100,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPendant1": {
    "displayName": "Mint_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 1
  },
  "EquipmentPendant2": {
    "displayName": "Strawbu_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 2
  },
  "EquipmentPendant3": {
    "displayName": "Rok_Road_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 2,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 3,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentPendant4": {
    "displayName": "Rainbo_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 2,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentPendant5": {
    "displayName": "Chocotastic_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentPendant6": {
    "displayName": "Blubbery_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 10,
    "Weapon_Power": 10,
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 6,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPendant7": {
    "displayName": "Lava_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 12,
    "Weapon_Power": 12,
    "STR": 4,
    "AGI": 4,
    "WIS": 4,
    "LUK": 4,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 8,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPendant8": {
    "displayName": "Legends_Icey",
    "Type": "PENDANT",
    "lvReqToCraft": 999,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 15,
    "Weapon_Power": 15,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant9": {
    "displayName": "Little_Wooden_Katana",
    "Type": "PENDANT",
    "lvReqToCraft": 8,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 1,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentPendant10": {
    "displayName": "Sleek_Shank",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "Defence": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPendant11": {
    "displayName": "Carrot_Horror",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 14,
    "Class": "ALL",
    "AGI": 2,
    "WIS": 5,
    "LUK": 2,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentPendant12": {
    "displayName": "Tarantulight",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant13": {
    "displayName": "Quartz_Pendant",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant14": {
    "displayName": "Fuscismatia",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "WIS": 10,
    "Defence": 5,
    "UQ1txt": "_PURPLE_DEPTH",
    "UQ1val": 30,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant15": {
    "displayName": "Lucky_Fish_Head",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant16": {
    "displayName": "Strung_Bludgeon",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentPendant17": {
    "displayName": "Chaotic_Amarok_Pendant",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "WIS": 12,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentPendant18": {
    "displayName": "Strung_Steamy",
    "Type": "PENDANT",
    "lvReqToCraft": 17,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 3,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 3
  },
  "EquipmentRings1": {
    "displayName": "Gold_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings2": {
    "displayName": "Copper_Band",
    "Type": "RING",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 3,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRings3": {
    "displayName": "Steel_Band",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 4,
    "Defence": 1,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentRings4": {
    "displayName": "Molden_Crust",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings5": {
    "displayName": "Toxic_Bubbles_Band",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3,
    "AGI": 3,
    "LUK": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings6": {
    "displayName": "Death_Wish",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 55,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "Defence": 6,
    "UQ1txt": "%_BOSS_DAMAGE",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentRings7": {
    "displayName": "Pugilist_Demise",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "STR": 3,
    "UQ1txt": "%_BOSS_DAMAGE",
    "UQ1val": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings8": {
    "displayName": "The_Used_Bandaid",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 4,
    "LUK": 1,
    "UQ1txt": "%_BOSS_DAMAGE",
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings9": {
    "displayName": "Chat_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 12,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 2,
    "UQ1txt": "%_BOSS_DAMAGE",
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings10": {
    "displayName": "Spikeweed_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 2,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings11": {
    "displayName": "Defenders_Dignity",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "Defence": 15,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRingsFishing1": {
    "displayName": "Shallow_Watering",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 2,
    "UQ1txt": "_YELLOW_DEPTH",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRingsFishing2": {
    "displayName": "Oceanic_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 2,
    "UQ1txt": "_RED_DEPTH",
    "UQ1val": 30,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRingsFishing3": {
    "displayName": "Deepwater_Trench_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 9,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 6,
    "AGI": 2,
    "UQ1txt": "_PURPLE_DEPTH",
    "UQ1val": 40,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentRings12": {
    "displayName": "Frisbee_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 45,
    "Class": "ALL",
    "STR": 12,
    "UQ1txt": "_ACCURACY",
    "UQ1val": 20,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentRings13": {
    "displayName": "Silver_Stopwatch",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 17,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_FIGHT_AFK_GAIN",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRings14": {
    "displayName": "Dooble_Goopi",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "LUK": 1,
    "Defence": 2,
    "UQ1txt": "%_MONEY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRings15": {
    "displayName": "Sanic_Ring",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 60,
    "Class": "ALL",
    "AGI": 8,
    "LUK": 4,
    "Defence": 5,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 1,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentRings16": {
    "displayName": "Efaunt_Trunculus",
    "Type": "RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 85,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "AGI": 10,
    "Defence": 8,
    "UQ1txt": "%_CRIT_CHANCE",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentRingsChat1": {
    "displayName": "Love_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_LOVE",
    "UQ1val": 69,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat2": {
    "displayName": "Leafy_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_ALL_NATURAL",
    "UQ1val": 100,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat3": {
    "displayName": "Wealth_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "UQ1txt": "%_COOLNESS",
    "UQ1val": 777,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat4": {
    "displayName": "Bob_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_BOB",
    "UQ1val": 808,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat5": {
    "displayName": "Bubble_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_POP_CHANCE",
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat6": {
    "displayName": "Cthulu's_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_PURE_EVIL",
    "UQ1val": 666,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat8": {
    "displayName": "Lava_Sez_Buy_More_Gems",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_SELF_ESTEEM",
    "UQ1val": 1,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentRingsChat9": {
    "displayName": "HONK_Ring",
    "Type": "CHAT_RING",
    "lvReqToCraft": 55,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_HONK",
    "UQ1val": 100,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentTools1": {
    "displayName": "Junk_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "Speed": 3,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 1
  },
  "EquipmentTools2": {
    "displayName": "Copper_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 4,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 3,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentTools3": {
    "displayName": "Iron_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 4,
    "Power": 10,
    "Weapon_Power": 10,
    "STR": 5,
    "AGI": 2,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentTools5": {
    "displayName": "Gold_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 17,
    "Class": "ALL",
    "Speed": 4,
    "Power": 13,
    "Weapon_Power": 13,
    "STR": 8,
    "AGI": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentTools6": {
    "displayName": "Platinum_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 27,
    "Class": "ALL",
    "Speed": 4,
    "Power": 16,
    "Weapon_Power": 16,
    "STR": 11,
    "AGI": 4,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 1,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentTools7": {
    "displayName": "Dementia_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 37,
    "Class": "ALL",
    "Speed": 4,
    "Power": 19,
    "Weapon_Power": 19,
    "STR": 15,
    "AGI": 5,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentTools11": {
    "displayName": "Void_Imperium_Pik",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 47,
    "Class": "ALL",
    "Speed": 5,
    "Power": 24,
    "Weapon_Power": 24,
    "STR": 18,
    "AGI": 6,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 8,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentTools8": {
    "displayName": "Lustre_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 60,
    "Class": "ALL",
    "Speed": 5,
    "Power": 28,
    "Weapon_Power": 28,
    "STR": 22,
    "AGI": 7,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 5,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentTools9": {
    "displayName": "Dreadlo_Pickolo",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "Speed": 5,
    "Power": 35,
    "Weapon_Power": 35,
    "STR": 26,
    "AGI": 9,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 8,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentTools10": {
    "displayName": "Poopy_Pickaxe",
    "Type": "PICKAXE",
    "lvReqToCraft": 55,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Speed": 2,
    "Power": 18,
    "Weapon_Power": 18,
    "Defence": 3,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 2,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentToolsHatchet0": {
    "displayName": "Old_Hatchet",
    "Type": "HATCHET",
    "lvReqToCraft": 55,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "Speed": 3,
    "Power": 3,
    "Weapon_Power": 3,
    "WIS": 1,
    "Upgrade_Slots_Left": 1
  },
  "EquipmentToolsHatchet3": {
    "displayName": "Copper_Chopper",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 3,
    "Power": 7,
    "Weapon_Power": 7,
    "AGI": 1,
    "WIS": 3,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentToolsHatchet1": {
    "displayName": "Iron_Hatchet",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 3,
    "Power": 10,
    "Weapon_Power": 10,
    "STR": 2,
    "WIS": 5,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentToolsHatchet2b": {
    "displayName": "Stinky_Axe",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Speed": 2,
    "Power": 18,
    "Weapon_Power": 18,
    "WIS": 8,
    "LUK": 4,
    "Upgrade_Slots_Left": 6
  },
  "EquipmentToolsHatchet2": {
    "displayName": "Golden_Axe",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 17,
    "Class": "ALL",
    "Speed": 4,
    "Power": 14,
    "Weapon_Power": 14,
    "WIS": 8,
    "LUK": 4,
    "Upgrade_Slots_Left": 2
  },
  "EquipmentToolsHatchet4": {
    "displayName": "Plat_Hatchet",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Speed": 4,
    "Power": 18,
    "Weapon_Power": 18,
    "AGI": 5,
    "WIS": 14,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentToolsHatchet5": {
    "displayName": "Dementia_Dicer",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "Speed": 4,
    "Power": 23,
    "Weapon_Power": 23,
    "AGI": 6,
    "WIS": 17,
    "Upgrade_Slots_Left": 3
  },
  "EquipmentToolsHatchet7": {
    "displayName": "Void_Imperium_Axe",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 45,
    "Class": "ALL",
    "Speed": 5,
    "Power": 26,
    "Weapon_Power": 26,
    "AGI": 7,
    "WIS": 20,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentToolsHatchet6": {
    "displayName": "Lustre_Logger",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 65,
    "Class": "ALL",
    "Speed": 5,
    "Power": 29,
    "Weapon_Power": 29,
    "WIS": 24,
    "LUK": 8,
    "Upgrade_Slots_Left": 4
  },
  "EquipmentToolsHatchet8": {
    "displayName": "Starfire_Hatchet",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 80,
    "Class": "ALL",
    "Speed": 5,
    "Power": 35,
    "Weapon_Power": 35,
    "AGI": 9,
    "WIS": 28,
    "LUK": 3,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentToolsHatchet9": {
    "displayName": "Dreadlo_Eviscerator",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 90,
    "Class": "ALL",
    "Speed": 5,
    "Power": 40,
    "Weapon_Power": 40,
    "STR": 4,
    "AGI": 4,
    "WIS": 32,
    "LUK": 4,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentToolsHatchet10": {
    "displayName": "Annihilator_of_the_Yggdrasil",
    "Type": "HATCHET",
    "lvReqToCraft": 15,
    "lvReqToEquip": 100,
    "Class": "ALL",
    "Speed": 6,
    "Power": 50,
    "Weapon_Power": 50,
    "STR": 5,
    "AGI": 5,
    "WIS": 40,
    "LUK": 5,
    "Upgrade_Slots_Left": 6
  },
  "FishingRod1": {
    "displayName": "Wood_Fishing_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "Speed": 3,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 1,
    "Upgrade_Slots_Left": 2
  },
  "FishingRod2": {
    "displayName": "Copper_Fish_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 3,
    "Power": 8,
    "Weapon_Power": 8,
    "STR": 2,
    "Upgrade_Slots_Left": 2
  },
  "FishingRod3": {
    "displayName": "Iron_Fishing_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 4,
    "Power": 13,
    "Weapon_Power": 13,
    "STR": 4,
    "WIS": 1,
    "Upgrade_Slots_Left": 2
  },
  "FishingRod4": {
    "displayName": "Gold_Fishing_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Speed": 4,
    "Power": 19,
    "Weapon_Power": 19,
    "STR": 6,
    "LUK": 4,
    "Upgrade_Slots_Left": 3
  },
  "FishingRod5": {
    "displayName": "Plat_Fishing_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Speed": 5,
    "Power": 25,
    "Weapon_Power": 25,
    "STR": 9,
    "Upgrade_Slots_Left": 3
  },
  "FishingRod6": {
    "displayName": "Dementia_Rod_for_Fishing",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 33,
    "Class": "ALL",
    "Speed": 5,
    "Power": 30,
    "Weapon_Power": 30,
    "STR": 12,
    "Upgrade_Slots_Left": 3
  },
  "FishingRod7": {
    "displayName": "Void_Imperium_Rod",
    "Type": "FISHING_ROD",
    "lvReqToCraft": 15,
    "lvReqToEquip": 40,
    "Class": "ALL",
    "Speed": 5,
    "Power": 36,
    "Weapon_Power": 36,
    "STR": 15,
    "Upgrade_Slots_Left": 4
  },
  "CatchingNet1": {
    "displayName": "Bug_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "ALL",
    "Speed": 4,
    "Power": 4,
    "Weapon_Power": 4,
    "AGI": 2,
    "Upgrade_Slots_Left": 2
  },
  "CatchingNet2": {
    "displayName": "Copper_Netted_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 4,
    "Power": 9,
    "Weapon_Power": 9,
    "STR": 1,
    "AGI": 3,
    "Upgrade_Slots_Left": 2
  },
  "CatchingNet3": {
    "displayName": "Reinforced_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 4,
    "Power": 14,
    "Weapon_Power": 14,
    "STR": 2,
    "AGI": 4,
    "Upgrade_Slots_Left": 2
  },
  "CatchingNet4": {
    "displayName": "Gilded_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 17,
    "Class": "ALL",
    "Speed": 5,
    "Power": 20,
    "Weapon_Power": 20,
    "STR": 2,
    "AGI": 6,
    "Upgrade_Slots_Left": 2
  },
  "CatchingNet5": {
    "displayName": "Platinet",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Speed": 5,
    "Power": 26,
    "Weapon_Power": 26,
    "STR": 3,
    "AGI": 7,
    "Upgrade_Slots_Left": 3
  },
  "CatchingNet6": {
    "displayName": "Dementia_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "Speed": 5,
    "Power": 31,
    "Weapon_Power": 31,
    "STR": 4,
    "AGI": 9,
    "Upgrade_Slots_Left": 3
  },
  "CatchingNet7": {
    "displayName": "Void_Imperium_Net",
    "Type": "BUG_CATCHING_NET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 45,
    "Class": "ALL",
    "Speed": 5,
    "Power": 37,
    "Weapon_Power": 37,
    "STR": 6,
    "AGI": 12,
    "Upgrade_Slots_Left": 4
  },
  "TrapBoxSet1": {
    "displayName": "Cardboard_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 4,
    "Power": 4,
    "Weapon_Power": 4,
    "AGI": 2,
    "Upgrade_Slots_Left": 1
  },
  "TrapBoxSet2": {
    "displayName": "Silkskin_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 4,
    "Power": 8,
    "Weapon_Power": 8,
    "AGI": 4,
    "Upgrade_Slots_Left": 1
  },
  "TrapBoxSet3": {
    "displayName": "Wooden_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Speed": 4,
    "Power": 13,
    "Weapon_Power": 13,
    "AGI": 7,
    "Upgrade_Slots_Left": 2
  },
  "TrapBoxSet4": {
    "displayName": "Natural_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 30,
    "Class": "ALL",
    "Speed": 4,
    "Power": 20,
    "Weapon_Power": 20,
    "AGI": 10,
    "Upgrade_Slots_Left": 2
  },
  "TrapBoxSet5": {
    "displayName": "Steel_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 40,
    "Class": "ALL",
    "Speed": 4,
    "Power": 26,
    "Weapon_Power": 26,
    "AGI": 12,
    "Upgrade_Slots_Left": 3
  },
  "TrapBoxSet6": {
    "displayName": "Royal_Traps",
    "Type": "TRAP_BOX_SET",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "Speed": 4,
    "Power": 34,
    "Weapon_Power": 34,
    "AGI": 15,
    "Upgrade_Slots_Left": 4
  },
  "WorshipSkull1": {
    "displayName": "Wax_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 4,
    "Power": 4,
    "Weapon_Power": 4,
    "WIS": 2,
    "Upgrade_Slots_Left": 1,
    "worshipMaxCharge": 100
  },
  "WorshipSkull2": {
    "displayName": "Ceramic_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 5,
    "Power": 8,
    "Weapon_Power": 8,
    "WIS": 4,
    "Upgrade_Slots_Left": 1,
    "worshipMaxCharge": 200
  },
  "WorshipSkull3": {
    "displayName": "Horned_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 25,
    "Class": "ALL",
    "Speed": 5,
    "Power": 13,
    "Weapon_Power": 13,
    "WIS": 7,
    "Upgrade_Slots_Left": 2,
    "worshipMaxCharge": 400
  },
  "WorshipSkull4": {
    "displayName": "Prickle_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 35,
    "Class": "ALL",
    "Speed": 6,
    "Power": 20,
    "Weapon_Power": 20,
    "WIS": 10,
    "Upgrade_Slots_Left": 2,
    "worshipMaxCharge": 750
  },
  "WorshipSkull5": {
    "displayName": "Manifested_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 55,
    "Class": "ALL",
    "Speed": 7,
    "Power": 26,
    "Weapon_Power": 26,
    "WIS": 12,
    "Upgrade_Slots_Left": 3,
    "worshipMaxCharge": 1250
  },
  "WorshipSkull6": {
    "displayName": "Wax_Skull",
    "Type": "WORSHIP_SKULL",
    "lvReqToEquip": 70,
    "Class": "ALL",
    "Speed": 4,
    "Power": 34,
    "Weapon_Power": 34,
    "WIS": 15,
    "Upgrade_Slots_Left": 4,
    "worshipMaxCharge": 2000
  },
  "FoodHealth1": {
    "displayName": "Nomwich",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth3": {
    "displayName": "Hot_Dog",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth2": {
    "displayName": "Cheezy_Pizza",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "Peanut": {
    "displayName": "Peanut",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth4": {
    "displayName": "Saucy_Weiner",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth6": {
    "displayName": "Kebab_Sticks",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth7": {
    "displayName": "Meat_Pie",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth10": {
    "displayName": "Mountain_Bread",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth9": {
    "displayName": "Yeti_Ham",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth11": {
    "displayName": "Sheepie_Dairy",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth5": {
    "displayName": "Cranberry_Jam",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodHealth8": {
    "displayName": "Crabby_Cake_Supreme",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodEvent8": {
    "displayName": "Milk_Choco",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "Meatloaf": {
    "displayName": "Magic_Meatloaf",
    "Type": "HEALTH_FOOD",
    "lvReqToCraft": 10,
    "description": "Auto-Used_when_your_health_goes"
  },
  "FoodPotOr1": {
    "displayName": "Small_Strength_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_Dmg_by_[."
  },
  "FoodPotOr2": {
    "displayName": "Average_Strength_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_Dmg_by_[."
  },
  "FoodPotOr3": {
    "displayName": "Decent_Strength_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_Dmg_by_[."
  },
  "FoodPotRe1": {
    "displayName": "Small_Life_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_HP_by_[."
  },
  "FoodPotRe2": {
    "displayName": "Average_Life_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_HP_by_[."
  },
  "FoodPotRe3": {
    "displayName": "Decent_Life_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_HP_by_[."
  },
  "FoodPotGr1": {
    "displayName": "Small_Speed_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Move_Spd_by_[%."
  },
  "FoodPotGr2": {
    "displayName": "Average_Speed_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Move_Spd_by_[%."
  },
  "FoodPotGr3": {
    "displayName": "Decent_Speed_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Move_Spd_by_[%."
  },
  "FoodEvent7": {
    "displayName": "Minto_Choco",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Move_Spd_by_[%."
  },
  "FoodPotMana1": {
    "displayName": "Small_Mana_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Boosts_Mana_Regen_Rate_by_[%"
  },
  "FoodPotMana2": {
    "displayName": "Average_Mana_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Boosts_Mana_Regen_Rate_by_[%"
  },
  "FoodPotMana3": {
    "displayName": "Decent_Mana_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Boosts_Mana_Regen_Rate_by_[%"
  },
  "FoodPotYe1": {
    "displayName": "Small_EXP_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Exp_Gain_by_[%",
    "Class": "ClassEXP"
  },
  "FoodPotYe2": {
    "displayName": "Average_EXP_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Exp_Gain_by_[%",
    "Class": "ClassEXP"
  },
  "FoodPotYe3": {
    "displayName": "Decent_EXP_Potion",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Exp_Gain_by_[%",
    "Class": "ClassEXP"
  },
  "FoodEvent6": {
    "displayName": "Lemony_Choco",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Exp_Gain_by_[%",
    "Class": "ClassEXP"
  },
  "Pearl3": {
    "displayName": "Shiny_Pearl",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Exp_Gain_by_[%",
    "Class": "ClassEXP"
  },
  "FoodMining1": {
    "displayName": "Icing_Ironbite",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Mining_Speed_by_[%"
  },
  "FoodEvent1": {
    "displayName": "Giftybread_Man",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Mining_Speed_by_[%"
  },
  "Pearl2": {
    "displayName": "Stained_Pearl",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Mining_Speed_by_[%"
  },
  "FoodChoppin1": {
    "displayName": "Saucy_Logfries",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Choppin'_Speed_by_[%"
  },
  "FoodEvent2": {
    "displayName": "Chogg_Nog",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Choppin'_Speed_by_[%"
  },
  "FoodFish1": {
    "displayName": "Slurpin_Herm",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Fishing_Spd_by_[%"
  },
  "FoodEvent3": {
    "displayName": "Candy_Canes",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Fishing_Spd_by_[%"
  },
  "Pearl1": {
    "displayName": "Aqua_Pearl",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Fishing_Spd_by_[%"
  },
  "FoodCatch1": {
    "displayName": "Buttered_Toasted_Butter",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Catching_Spd_by_[%"
  },
  "FoodEvent4": {
    "displayName": "Mistleberries",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Catching_Spd_by_[%"
  },
  "FoodTrapping1": {
    "displayName": "Critter_Numnums",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Shiny_Odds_by_[%"
  },
  "FoodWorship1": {
    "displayName": "Soulble_Gum",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Soul_Gain_by_[%"
  },
  "Bullet": {
    "displayName": "Bullet",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Weapon_Power_by_[."
  },
  "BulletB": {
    "displayName": "FMJ_Bullet",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Weapon_Power_by_[."
  },
  "MidnightCookie": {
    "displayName": "Midnight_Cookie",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Weapon_Power_by_[."
  },
  "FoodEvent5": {
    "displayName": "Cherry_Choco",
    "Type": "BOOST_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Weapon_Power_by_[."
  },
  "PeanutG": {
    "displayName": "Golden_Peanut",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Mining_Efficiency"
  },
  "FoodG1": {
    "displayName": "Golden_Jam",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_your_Max_Health_by"
  },
  "FoodG2": {
    "displayName": "Golden_Kebabs",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Total_Damage_to"
  },
  "FoodG3": {
    "displayName": "Golden_Meat_Pie",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_your_Total_Defence"
  },
  "FoodG4": {
    "displayName": "Golden_Nomwich",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Base_Damage_Dealt_to"
  },
  "FoodG5": {
    "displayName": "Golden_Ham",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_Skill_EXP_earned"
  },
  "FoodG6": {
    "displayName": "Golden_Bread",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Claiming_AFK_gains_levels"
  },
  "ButterBar": {
    "displayName": "Butter_Bar",
    "Type": "GOLDEN_FOOD",
    "lvReqToCraft": 10,
    "description": "Increases_your_Base_Accuracy"
  },
  "rtt0": {
    "displayName": "Bottled_Town_Teleport",
    "Type": "TELEPORT",
    "lvReqToCraft": 5,
    "description": "Hold_down_on_this_item_to_be"
  },
  "ResetFrag": {
    "displayName": "Talent_Point_Reset_Fragment",
    "Type": "FRAGMENT",
    "lvReqToCraft": 5,
    "description": "Hold_down_on_this_item_to_turn_10_Fragments_into_1_Talent_Point_Reset_Potion._You'll_need_1_open_inventory_space_for_this_to_work."
  },
  "ResetCompleted": {
    "displayName": "Talent_Point_Reset_Potion",
    "Type": "RESET_POTION",
    "lvReqToCraft": 5,
    "description": "Hold_down_on_this_item_to_respec_all_your_Talent_Points!_Well,_except_for_the_Star_tab_points,_there's_a_different_potion_for_that."
  },
  "ResetCompletedS": {
    "displayName": "Star_Talent_Reset_Potion",
    "Type": "RESET_POTION",
    "lvReqToCraft": 5,
    "description": "Hold_down_on_this_item_to_refund_all_your_Star_Talent_Points!_Well,_except_for_the_Star_tab_points,_there's_a_different_potion_for..._no_wait,_this_IS_the_potion_for_that!"
  },
  "ClassSwap": {
    "displayName": "Sub_Class_Swap_Token",
    "Type": "USABLE",
    "lvReqToCraft": 5,
    "description": "Hold_down_on_this_item_to_change_sub_class_within_your_class._It_won't_let_you_change_classes,_you'll_need_to_reach_world_3_to_do_that."
  },
  "ResetBox": {
    "displayName": "Post_Office_Box_Reseto_Magnifico",
    "Type": "USABLE",
    "lvReqToCraft": 5,
    "description": "Hold_down_to_reset_all_post_office_upgrades_made_on_this_character!_You'll_get_all_the_Box_Points_refunded_of_course,_no_problemo!"
  },
  "Ht": {
    "displayName": "Hat_Premiumifier",
    "Type": "USABLE",
    "lvReqToCraft": 5,
    "description": "Drag_this_onto_any_normal_hat_to_turn_it_into_a_premium_hat!_Doing_so_will_wipe_all_it's_stats,_and_give_it_{1_all_stat_and_5_Premium_Upgrade_Slots,_just_like_any_other_premium_hat."
  },
  "StonePremRestore": {
    "displayName": "Premium_Stone_Refunder",
    "Type": "USABLE",
    "lvReqToCraft": 5,
    "description": "Drag_this_onto_any_Premium_Hat_to_refund_all_Premium_Stones_used_on_it._You_must_have_at_least_4_open_inventory_spaces_to_use_this_btw"
  },
  "ExpBalloon1": {
    "displayName": "Small_Experience_Balloon",
    "Type": "EXP_BALLOON",
    "lvReqToCraft": 5,
    "description": "Hold_down_to_gain_EXP_in_the_skill_that's_displayed_in_the_corner_of_your_screen._If_you're_in_a_town,_you_will_gain_EXP_in_the_town_skill._The_amount_of_EXP_you_get_is_based_on_your_skill's_Lv."
  },
  "ExpBalloon2": {
    "displayName": "Medium_Experience_Balloon",
    "Type": "EXP_BALLOON",
    "lvReqToCraft": 5,
    "description": "Hold_down_to_gain_EXP_in_the_skill_that's_displayed_in_the_corner_of_your_screen._If_you're_in_a_town,_you_will_gain_EXP_in_the_town_skill._The_amount_of_EXP_you_get_is_based_on_your_skill's_Lv."
  },
  "ExpBalloon3": {
    "displayName": "Large_Experience_Balloon",
    "Type": "EXP_BALLOON",
    "lvReqToCraft": 5,
    "description": "Hold_down_to_gain_EXP_in_the_skill_that's_displayed_in_the_corner_of_your_screen._If_you're_in_a_town,_you_will_gain_EXP_in_the_town_skill._The_amount_of_EXP_you_get_is_based_on_your_skill's_Lv."
  },
  "JobApplication": {
    "displayName": "Job_Application",
    "Type": "QUEST_ITEM",
    "description": "It's_a_registration_form_for_the"
  },
  "SmithingHammerChisel": {
    "displayName": "Sculpting_Tools",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "You_gotta_embrace_the_marble!"
  },
  "SmithingHammerChisel2": {
    "displayName": "Guilding_Tools",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Drop_this_on_the_statue_man,_and_you'll_turn_him_to_gold_and_unlock_Golden_Statues!"
  },
  "BobJoePickle": {
    "displayName": "BobJoePickle",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "He_was_one_of_the_good_ones..."
  },
  "Quest1": {
    "displayName": "Mining_Certificate",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It's_proof_that_you_can_mine,_and"
  },
  "Crystal1": {
    "displayName": "Desert_Topaz",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Restores_power_to_the_Desert"
  },
  "Crystal2": {
    "displayName": "Glacier_Quartz",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Restores_power_to_the_Glacial_Portal_in_the_desert_town,_allowing_travel_to_World_3!"
  },
  "Crystal3": {
    "displayName": "Galaxial_Amethyst",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Restores_power_to_the_Galaxy_Portal_in_the_glacier_town,_allowing_travel_to_World_4!"
  },
  "Quest2": {
    "displayName": "Mining_Certificate",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Filler"
  },
  "PeanutS": {
    "displayName": "Stone_Peanut",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It's_like_a_regular_peanut,_except"
  },
  "Quest3": {
    "displayName": "Ketchup_Bottle",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "A_tiny_ketchup_bottle,_small_enough"
  },
  "Quest4": {
    "displayName": "Mustard_Bottle",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "A_tiny_mustard_bottle,_small_enough"
  },
  "Mayo": {
    "displayName": "Mayonnaise_Bottle",
    "Type": "TRASH",
    "lvReqToCraft": 15,
    "description": "Why_did_someone_bury_a_bottle_of_mayo?_Wait..._why_did_you_go_dig_it_up??"
  },
  "Trash": {
    "displayName": "Broken_Weapon",
    "Type": "TRASH",
    "lvReqToCraft": 15,
    "description": "It's_totally_broken."
  },
  "Trash2": {
    "displayName": "Dried_Paint_Blob",
    "Type": "TRASH",
    "lvReqToCraft": 15,
    "description": "Its_all_hard_and_crusty_now."
  },
  "Trash3": {
    "displayName": "Engraved_Bullet",
    "Type": "TRASH",
    "lvReqToCraft": 15,
    "description": "It's_a_bullet,_and_it's_got_your_name_on_it!"
  },
  "Quest5": {
    "displayName": "Golden_Jam",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It's_a_fake_jar_filled_with_springs!"
  },
  "Quest6": {
    "displayName": "Scouting_Report",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It_says_a_Giant_Wolf-like_Golem_was"
  },
  "Quest7": {
    "displayName": "Strange_Rock",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Looks_like_the_piece_of_a_golem."
  },
  "Quest8": {
    "displayName": "Filler_bc_I_messed_up",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Filler."
  },
  "Quest10": {
    "displayName": "Green_Tea",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "You're_playing_a_game_right_now"
  },
  "Quest11": {
    "displayName": "Forest_Villas_Flyer_Thingy",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Solid_evidence_that_it's_possible"
  },
  "Quest12": {
    "displayName": "Dog_Bone",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Dog_Bone_must_have_died_from_a_blunt_strike_to_the_head,_surely_that's_where_he_got_his_Ghost-Name_from!_Pretty_proud_of_myself_for_solving_this,_even_if_Item_Descriptions_like_me_aren't_capable_of_feeling_pride!"
  },
  "Quest13": {
    "displayName": "Empty_Box",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "An_empty_box,_the_perfect_place_to_put_all_your_Hermit_Cans,_Megalodon_teeth,_and_pure_water..._that_you_don't_have_anymore_haha!"
  },
  "Quest14": {
    "displayName": "Employment_Statistics",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Wait_a_minute,_these_stats_have_misleading_Y-axes_and_invalid_sampling_methods!_Even_then,_they_show_no_clear_evidence_for_rats_stealing_jobs!_How_could_anyone_possibly_believe_this_data?"
  },
  "Quest15": {
    "displayName": "Red_Frisbee",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Sprout's_red_frisbee!_I_hope_you_didn't_get_shrunken_down_by_a_magic_apple_on_your_way_up,_or_your_stetchy_dog_brother_might_laugh_at_you!"
  },
  "Quest16": {
    "displayName": "Broken_Mic",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "The_guy_who_carelessly_dropped_this_microphone_is_a_moron,_and_that's_a_fact._Boom,_mic_drop..._ah_crap."
  },
  "Quest17": {
    "displayName": "Amarok_Slab",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "A_piece_of_rock_from_the_big_bad_wolf_himself._Careful,_it's_overflowing_with_green_plasma_energy!_No_wait,_that's_just_some_moss."
  },
  "Quest18": {
    "displayName": "Loomi's_Room_Key",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "A_key_to_a_door,_but_there_are_still_more!_Why_so_many?_They_were_on_sale_for_a_penny!"
  },
  "Quest19": {
    "displayName": "Golden_Dubloon",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Avast,_land_lubber!_This_coin_be_property_of_the_YumYum_Sea_Pirates!_Ye_best_be_returning_it,_lest_ye_want_an_underwater_funeral,_arg!"
  },
  "Quest20": {
    "displayName": "Signed_Arrest_Warrant",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "That's_weird,_Bandit_Bob's_signature_looks_an_awful_lot_like_yours..."
  },
  "Quest21": {
    "displayName": "Time_Thingy",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Yea_yea_I_know,_this_quest_doesn't_really_make_sense._Although,_if_you_reeeaaally_think_about_it,_you'll_realize_that_it_still_makes_no_sense..._so_it's_best_not_to_think_about_it!"
  },
  "Quest22": {
    "displayName": "Corporatube_Sub",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Represents_a_single_subscriber_on_the_Corporatube_Video_Platform._It_You'sed_to_be_called_something_else,_but_no_one_around_here_remembers."
  },
  "Quest23": {
    "displayName": "Instablab_Follower",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Represents_a_single_follower_on_Instablab,_who_probably_sound_like_this:_'Oh_mah_gawd_Becky,_you_would_not_Buh_Leeeeve_how_lame_this_game_I'm_playing_is._They_have_a_joke_about_Insta_that_tooootally_isn't_funnay,_like_seriouslayy!"
  },
  "Quest24": {
    "displayName": "Cloudsound_Follower",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Represents_a_single_follower_on_Cloudsound._This_isn't_a_website,_it's_literally_a_giant_cloud_that_emits_sound_that_people_enjoy_following_around._Why,_what_were_YOU_thinking_this_was?"
  },
  "Quest25": {
    "displayName": "Birthday_Card",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It'll_mean_more_to_you_when_you're_older..._or_may_when_this_game_is_older_and_I_add_a_use_for_this_item,_can't_remember_which."
  },
  "Quest26": {
    "displayName": "Pre_Crime_Box",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "The_traditional_gift_given_to_those_about_to_be_victimized._A_favorite_amongst_criminals!"
  },
  "Quest27": {
    "displayName": "Bag_o_Nuts",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Mmmmm,_these_nuts_are_so_yuuuummy!"
  },
  "Quest28": {
    "displayName": "IOU_One_Blue_Crystal",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Hold_down_on_this_IOU,_and_a_Blue_Crystal_will_drop_at_your_feet!"
  },
  "Quest29": {
    "displayName": "Chaotic_Amarok_Slab",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "A_piece_of_rock_from_the_bigger_badder_wolf_himself._Careful,_it's_overflowing_with_poisonous_ooze!_No_wait,_that's_just_plasma_energy..."
  },
  "GoldricP1": {
    "displayName": "Casual_Confidante",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It's_a_painting_of_a_strangely_out_of_place_gold_bar_fellow._They_look_nervous_underneath_their_outward_bravado."
  },
  "GoldricP2": {
    "displayName": "Triumphant_Treason",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It's_a_rendition_of_the_Battle_of_Sassasge,_wherein_Goldrichius_Von_Gallbladder_waged_war_on_the_municipal_kingdom_of_Sterling_S._Elvar"
  },
  "GoldricP3": {
    "displayName": "Claiming_Cashe",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "The_victory_portrait_of_King_Goldrichius_Sr._after_successfully_dethroning_S.S._Elvar_from_the_East_Yum-Yum_dunedaries."
  },
  "Quest30": {
    "displayName": "Giftmas_Box",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_open!_There's_a_santa_hat_in_one_of_these,_as_well_as_various_holiday_exclusive_goodies,_even_cards!"
  },
  "Quest31": {
    "displayName": "Gem_Note",
    "Type": "LAVA_LETTER",
    "lvReqToCraft": 15,
    "description": "Did_you_like_those_20_gems_you_just_picked_up?_Well_you'll_LOVE_the_500_gems_I_just_added_to_your_account._This_paper_is_worthless_btw_lol_it's_just_a_picture_of_a_gem."
  },
  "Cutter": {
    "displayName": "Bolt_Cutters",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "The_engraving_reads_'Strong_enough_to_cut_through_2_pixels_of_solid_metal!'_____How_strange..._theres_no_joke_or_pun_in_that_description!_It_must_be_a_serious_hint_or_something!"
  },
  "Quest32": {
    "displayName": "Monster_Rating",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "'I_literally_just_die_over_and_over,_I_can't_even_fight_back_other_than_just_running_into_them._Honestly_I_wish_I_was_dead,_but_even_then_I_just_keep_respawning,_literally_the_worst_experience_ever,_1_star!!'"
  },
  "Quest33": {
    "displayName": "Player_Rating_With_Letter_P",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "'WTF_y_do_my_items_CONSTANTLY_DISAPPEAR_I_HATE_IT!!_Complete_RUBBISH!_1_STAR_UNTIL_YOU_FIX_MY_SPECIFIC_PROBLEM_and_even_then_I'll_probably_just_raise_it_to_2_stars_lol'"
  },
  "Quest34": {
    "displayName": "Player_Rating_With_Letter_S",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "'This_is_NOT_an_Idle_game!_I_actually_have_to_play_it_sometimes!_And_why_are_there_actual_pictures_on_the_screen,_instead_of_just_words_and_text_boxes??_I_can't_believe_I_paid_0_dollars_for_this_trash!'"
  },
  "Quest35": {
    "displayName": "Googley_Eyes",
    "Type": "SUMMON_ITEM",
    "lvReqToCraft": 15,
    "description": "I_remember_when_I_was_a_kid,_I_spent_an_HOUR_making_a_GLASS_container_look_like_it_was_a_little_friend_using_googley_eyes_just_like_these!_If_only_there_was_a_CONTAINER_in_this_game,_so_you_could_do_it_to!"
  },
  "Quest36": {
    "displayName": "Dootjat_Eye",
    "Type": "SUMMON_ITEM",
    "lvReqToCraft": 15,
    "description": "Blinks_repeatedly_when_close_to_the_Black_Market,_where_you_buy_the_Ankh_used_in_the_ice_zone_to_get_the_Hedjet..._wait,_wrong_game,_sorry!"
  },
  "Quest37": {
    "displayName": "Silver_Antique",
    "Type": "HUNK_OF_JUNK",
    "lvReqToCraft": 15,
    "description": "An_old_lady_pawned_it_off_to_the_bazaar_claiming_it_was_some_'ancient_artifact_of_the_pharoah_King_Doot'._It's_probably_just_scrap_metal,_doubt_it's_even_real_silver._Would_make_for_a_decent_Necklace!"
  },
  "Quest38": {
    "displayName": "Guild_Giftbox",
    "Type": "USABLE_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_open!_Contains_a_random_cool-kid_item,_like_gems,_exp_balloons,_or_even_time_candy!_Also,_1_in_every_500_gifts_contains_the_'Ultra_Unboxer'_Trophy!"
  },
  "Quest39": {
    "displayName": "Lovey_Dovey_Letter",
    "Type": "EVENT_ITEM",
    "lvReqToCraft": 15,
    "description": "Hold_down_on_5_letters_to_spawn_a_Valentslime,_or_turn_these_in_each_day_to_the_Loveulyte_for_a_reward!"
  },
  "Quest40": {
    "displayName": "Choco_Box",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_open_this_box_of_meatballs..._err_chestnuts..._err_chocolate!_There's_a_Giant_Bow_Hat_in_one_of_these,_as_well_as_various_holiday_exclusive_goodies,_even_cards!"
  },
  "Quest41": {
    "displayName": "Flowies",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Curse_you_flowey!_I_trusted_you,_I_accepted_your_pellets_of_friendship,_and_then_you_had_to_go_and_throw_it_all_away!_And_now_here_you_are,_trying_to_take_over_yet_another_video_game..._well_I_NOT_GONNA_LE--_oh_wait,_these_are_just_normal_flowers"
  },
  "Quest42": {
    "displayName": "Egg_Capsule",
    "Type": "EVENT_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_open_for_a_random_reward!_Or,_hold_down_for_a_LONG_time_to_open_them_faster..._yea,_dreams_do_come_true_#"
  },
  "Quest43": {
    "displayName": "Gummy_Bunny",
    "Type": "EVENT_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_summon_a_friendly_easter_monster._But_be_careful,_unlike_real_life_where_all_friends_are_genuine,_these_monsters_are_just_pretending_to_be_your_friend_for_personal_gain!"
  },
  "Quest44": {
    "displayName": "Goldegg_Capsule",
    "Type": "EVENT_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_summon_a_mini_boss_or_a_green_mushroom._Mostly_the_second_thing."
  },
  "Quest45": {
    "displayName": "Sesame_Seed",
    "Type": "DUNGEON_KEY",
    "lvReqToCraft": 15,
    "description": "The_key_to_Bandit_Bob's_Party_Dungeon!_Not_sure_why_a_sesame_seed_opens_a_door_out_here_in_the_desert_though,_seems_weird."
  },
  "Quest46": {
    "displayName": "The_Bobber_Challenge_Scroll",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "A_great_behemoth_has_emerged_from_its_slumber..._and_it_now_roams_the_fishing_minigame!_If_you_catch_2_whales,_then_purposefully_avoid_catching_the_3rd_whale,_the_ocean_behemoth_will_eventually_appear!_Catch_it_to_win_a_trophy!"
  },
  "Quest47": {
    "displayName": "Elderly_Peanut",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "It_has_a_very_peculiar_stench..._the_smell_is_so_unbearable,_your_damage_is_lowered_by_50%_and_your_Max_HP_is_just_1!_Only_the_sands_of_a_dead_Biggie_Hours_Miniboss_could_reverse_the_aging_this_peanut_has_undergone!"
  },
  "Quest48": {
    "displayName": "Pete_the_Peanut",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Now_that's_a_happy_looking_peanut!_I_wish_he_was_MY_best_friend,_but_no_one_wants_to_be_friends_with_sentient_item_dialogue_^"
  },
  "Quest49": {
    "displayName": "Summer_Cooler",
    "Type": "EVENT_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_open_for_a_random_reward!_Or,_hold_down_for_a_LONG_time_to_open_them_faster."
  },
  "Quest50": {
    "displayName": "Beach_Oyster",
    "Type": "EVENT_BOX",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_summon_a_bunch_of_Summer_Monsters,_and_get_a_random_Pearl!"
  },
  "Pearl4": {
    "displayName": "Black_Pearl",
    "Type": "USABLE",
    "lvReqToCraft": 15,
    "description": "Hold_down_to_gain_20%_EXP_in_the_skill_that's_shown_in_the_corner_of_the_screen._If_you're_in_a_town,_you_will_gain_EXP_in_the_town_skill._Only_works_on_skills_below_level_30."
  },
  "NPCtoken8": {
    "displayName": "FILLER",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 45,
    "description": "eafwef"
  },
  "BadgeG1": {
    "displayName": "Blunderhills_NPC_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Made_up_of_all_the_tokens_that_you"
  },
  "BadgeG2": {
    "displayName": "Blunder_Skills_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Proof_that_you_mastered_the_art"
  },
  "BadgeG3": {
    "displayName": "Blunderhills_Misc_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Proof_that_you_collected_all"
  },
  "BadgeD1": {
    "displayName": "Yumyum_Desert_NPC_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Made_up_of_all_the_tokens_that_you"
  },
  "BadgeD2": {
    "displayName": "Yumyum_Skills_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Proof_that_you_mastered_the_art"
  },
  "BadgeD3": {
    "displayName": "Yumyum_Misc_Completion_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 50,
    "description": "Proof_that_you_collected_all"
  },
  "NPCtoken1": {
    "displayName": "Easy_Blunderhills_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Made_up_of_the_tokens_from"
  },
  "NPCtoken2": {
    "displayName": "Med_Blunderhills_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 30,
    "description": "Made_up_of_the_tokens_from"
  },
  "NPCtoken3": {
    "displayName": "Hard_Blunderhills_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 45,
    "description": "Made_up_of_the_tokens_from"
  },
  "NPCtoken5": {
    "displayName": "Woodsman_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken6": {
    "displayName": "Glumlee_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken4": {
    "displayName": "Stiltzcho_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken9": {
    "displayName": "Funguy_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken10": {
    "displayName": "Krunk_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken11": {
    "displayName": "Tiki_Chief_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken13": {
    "displayName": "Dog_Bone_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken7": {
    "displayName": "Papua_Piggea_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "Quest9": {
    "displayName": "Picnic_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_were_able_to"
  },
  "NPCtoken15": {
    "displayName": "TP_Pete_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken12": {
    "displayName": "Sproutinald_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken14": {
    "displayName": "Dazey_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken16": {
    "displayName": "Bandit_Bob_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken17": {
    "displayName": "Snake_Jar_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken18": {
    "displayName": "Whattso_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken19": {
    "displayName": "Cowbo_Jones_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken20": {
    "displayName": "Carpetiem_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken21": {
    "displayName": "Goldric_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken27": {
    "displayName": "Cattleprod_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_Cattleprod_is_a_little_brat_of_a_pig..._like,_he_seriously_went_and_SOLD_his_own_token_to_the_store???"
  },
  "NPCtoken22": {
    "displayName": "Fishpaste_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken24": {
    "displayName": "Loominadi_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken25": {
    "displayName": "Djonnut_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken26": {
    "displayName": "Scubidew_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all_of"
  },
  "NPCtoken23": {
    "displayName": "Wellington_Token",
    "Type": "QUEST_ITEM",
    "description": "Proof_that_you_completed_all"
  },
  "NPCtoken28": {
    "displayName": "Easy_Yumyum_Dez_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 15,
    "description": "Made_up_of_the_tokens_from"
  },
  "NPCtoken29": {
    "displayName": "Med_Yumyum_Dez_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 30,
    "description": "Made_up_of_the_tokens_from"
  },
  "NPCtoken30": {
    "displayName": "Hard_Yumyum_Dez_NPC_Token",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 45,
    "description": "Made_up_of_the_tokens_from"
  },
  "EquipmentSmithingTabs2": {
    "displayName": "Anvil_Tab_2",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_2nd_tab_of_craftable"
  },
  "EquipmentSmithingTabs3": {
    "displayName": "Anvil_Tab_3",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_3rd_tab_of_craftable"
  },
  "EquipmentSmithingTabs4": {
    "displayName": "Anvil_Tab_4",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_4th_tab_of_craftable"
  },
  "EquipmentSmithingTabs5": {
    "displayName": "Anvil_Tab_5",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_5th_tab_of_craftable"
  },
  "EquipmentSmithingTabs6": {
    "displayName": "Anvil_Tab_6",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_6th_tab_of_craftable"
  },
  "EquipmentSmithingTabs7": {
    "displayName": "Anvil_Tab_7",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_7th_tab_of_craftable"
  },
  "EquipmentSmithingTabs8": {
    "displayName": "Anvil_Tab_8",
    "Type": "ANVIL_EXPANSION",
    "lvReqToCraft": 15,
    "description": "Unlocks_the_8th_tab_of_craftable"
  },
  "EquipmentStatues1": {
    "displayName": "Power_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_sculpted_in_the"
  },
  "EquipmentStatues2": {
    "displayName": "Speed_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_that_isnt_actually"
  },
  "EquipmentStatues3": {
    "displayName": "Mining_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_that_resembles"
  },
  "EquipmentStatues4": {
    "displayName": "Feasty_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_that_looks_good"
  },
  "EquipmentStatues5": {
    "displayName": "Health_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_made_by_someone"
  },
  "EquipmentStatues6": {
    "displayName": "Kachow_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_named_after_the"
  },
  "EquipmentStatues7": {
    "displayName": "Lumberbob_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_stone_statue_named_in_a_world"
  },
  "EquipmentStatues8": {
    "displayName": "Thicc_Skin_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "I_don't_think_the_sculptor_who_named_this_statue_back_in_3000_BC_would_be_happy_with_how_his_typo_would_be_interpreted."
  },
  "EquipmentStatues9": {
    "displayName": "Oceanman_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "What's_that,_statue?_You_want_to..._take_me_by_the_hand_and_lead_me_to_the_land?_With_that_land_pecifically_being_the_one_that_you_understand?"
  },
  "EquipmentStatues10": {
    "displayName": "Ol_Reliable_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "It_takes_a_true_artist_to_make_a_realistic_statue_like_this_one._He_captured_the_flying_aspect_of_those_stone_flies_perfectly!"
  },
  "EquipmentStatues11": {
    "displayName": "Exp_Book_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "I_haven't_read_a_book_since_middle_school,_so_I'm_just_assuming_this_is_what_they_look_like."
  },
  "EquipmentStatues12": {
    "displayName": "Anvil_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_little_monument_to_the_efforts_of_a_most_devious_coyote,_whose_dreams_were_always_just_out_of_reach,_and_whose_head_often_felt_the_crushing_blow_of_defeat."
  },
  "EquipmentStatues13": {
    "displayName": "Cauldron_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "They_used_to_tie_women_to_these_things_and_throw_them_into_the_ocean_to_see_if_they_were_a_witch._If_they_were,_they'd_use_all_the_water_in_the_ocean_to_upgrade_the_cauldron_and_thus_not_drown!_Not_sure_what_happened_if_they_werent."
  },
  "EquipmentStatues14": {
    "displayName": "Beholder_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "This_statue_is_beautiful!_Well,_at_least_to_me."
  },
  "EquipmentStatues15": {
    "displayName": "Bullseye_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "This_statue_was_created_by_shooting_a_target_statue_into_a_stationary_arrow_statue."
  },
  "EquipmentStatues16": {
    "displayName": "Box_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "It's_more_of_an_open_container_than_a_box,_really."
  },
  "EquipmentStatues17": {
    "displayName": "Twosoul_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "A_statue_of_the_soul."
  },
  "EquipmentStatues18": {
    "displayName": "EhExPee_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "The_sculptor_got_so_fed_up_with_people_misinterpreting_his_previous_statues,_he_felt_the_need_to_spell_this_one_out."
  },
  "EquipmentStatues19": {
    "displayName": "Seesaw_Statue",
    "Type": "STATUE",
    "lvReqToCraft": 5,
    "description": "The_end_result_of_someone_trying_to_cut_a_slab_in_half_with_a_ceramic_saw,_and_then_leaving_early_after_they_saw_me_watching_them_in_the_bushes,_writing_down_what_they_were_doing_in_this_description."
  },
  "SmithingRecipes1": {
    "displayName": "Beginner_Recipe",
    "Type": "ANVIL_RECIPE",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ALL"
  },
  "SmithingRecipes2": {
    "displayName": "Novice_Recipe",
    "Type": "ANVIL_RECIPE",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ALL"
  },
  "SmithingRecipes3": {
    "displayName": "Apprentice_Recipe",
    "Type": "ANVIL_RECIPE",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ALL"
  },
  "SmithingRecipes4": {
    "displayName": "Journeyman_Recipe",
    "Type": "ANVIL_RECIPE",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ALL"
  },
  "TalentBook1": {
    "displayName": "Special_Talent_Book",
    "Type": "TALENT_BOOK",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ALL"
  },
  "TalentBook2": {
    "displayName": "Beginner_Talent_Book",
    "Type": "TALENT_BOOK",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "BEGINNER"
  },
  "TalentBook3": {
    "displayName": "Warrior_Talent_Book",
    "Type": "TALENT_BOOK",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "WARRIOR",
    "STR": 3
  },
  "TalentBook4": {
    "displayName": "Archer_Talent_Book",
    "Type": "TALENT_BOOK",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "ARCHER",
    "STR": 3
  },
  "TalentBook5": {
    "displayName": "Wizard_Talent_Book",
    "Type": "TALENT_BOOK",
    "lvReqToCraft": 1,
    "lvReqToEquip": 999,
    "Class": "MAGE",
    "STR": 3
  },
  "MaxCapBagT2": {
    "displayName": "Miniature_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "Mining",
    "Speed": 5,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBag1": {
    "displayName": "Cramped_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Mining",
    "Speed": 25,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBag2": {
    "displayName": "Small_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Mining",
    "Speed": 118,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBag3": {
    "displayName": "Average_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Mining",
    "Speed": 5,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBag4": {
    "displayName": "Sizable_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Mining",
    "Speed": 170,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBag5": {
    "displayName": "Big_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Mining",
    "Speed": 240,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBagMi6": {
    "displayName": "Large_Mining_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Mining",
    "Speed": 240,
    "Reach": 10,
    "STR": 3
  },
  "MaxCapBagT1": {
    "displayName": "Miniature_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "Chopping",
    "Speed": 5,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBag7": {
    "displayName": "Cramped_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Chopping",
    "Speed": 25,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBag9": {
    "displayName": "Small_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Chopping",
    "Speed": 118,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBagT3": {
    "displayName": "Average_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Chopping",
    "Speed": 5,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBagT4": {
    "displayName": "Sizable_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Chopping",
    "Speed": 170,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBagT5": {
    "displayName": "Big_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Chopping",
    "Speed": 240,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBagT6": {
    "displayName": "Large_Choppin_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Chopping",
    "Speed": 240,
    "Reach": 10,
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 3
  },
  "MaxCapBag6": {
    "displayName": "Miniscule_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "Foods",
    "Speed": 5,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBag8": {
    "displayName": "Cramped_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Foods",
    "Speed": 25,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBag10": {
    "displayName": "Small_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Foods",
    "Speed": 118,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBagF3": {
    "displayName": "Average_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Foods",
    "Speed": 5,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBagF4": {
    "displayName": "Sizable_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Foods",
    "Speed": 170,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBagF5": {
    "displayName": "Big_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Foods",
    "Speed": 240,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBagF6": {
    "displayName": "Large_Food_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Foods",
    "Speed": 240,
    "Reach": 10,
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 3
  },
  "MaxCapBagM1": {
    "displayName": "Mini_Materials_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "bCraft",
    "Speed": 10,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM2": {
    "displayName": "Cramped_Material_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "bCraft",
    "Speed": 15,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM3": {
    "displayName": "Small_Material_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "bCraft",
    "Speed": 118,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM4": {
    "displayName": "Average_Material_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "bCraft",
    "Speed": 5,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM5": {
    "displayName": "Sizable_Materials_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "bCraft",
    "Speed": 170,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM6": {
    "displayName": "Big_Materials_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "bCraft",
    "Speed": 240,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagM7": {
    "displayName": "Large_Materials_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "bCraft",
    "Speed": 240,
    "Reach": 10,
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 3
  },
  "MaxCapBagFi0": {
    "displayName": "Miniature_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "Fishing",
    "Speed": 10,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi1": {
    "displayName": "Cramped_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Fishing",
    "Speed": 25,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi2": {
    "displayName": "Small_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Fishing",
    "Speed": 118,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi3": {
    "displayName": "Average_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Fishing",
    "Speed": 5,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi4": {
    "displayName": "Sizable_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Fishing",
    "Speed": 170,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi5": {
    "displayName": "Big_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Fishing",
    "Speed": 240,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagFi6": {
    "displayName": "Large_Fish_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Fishing",
    "Speed": 240,
    "Reach": 10,
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3
  },
  "MaxCapBagB0": {
    "displayName": "Miniature_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 25,
    "Class": "Bugs",
    "Speed": 5,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB1": {
    "displayName": "Cramped_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Bugs",
    "Speed": 250,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB2": {
    "displayName": "Small_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Bugs",
    "Speed": 118,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB3": {
    "displayName": "Average_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Bugs",
    "Speed": 5,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB4": {
    "displayName": "Sizable_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Bugs",
    "Speed": 170,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB5": {
    "displayName": "Big_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Bugs",
    "Speed": 240,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagB6": {
    "displayName": "Large_Bug_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Bugs",
    "Speed": 240,
    "Reach": 10,
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 3
  },
  "MaxCapBagTr0": {
    "displayName": "Cramped_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Critters",
    "Speed": 250,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagTr1": {
    "displayName": "Small_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Critters",
    "Speed": 118,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagTr2": {
    "displayName": "Average_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Critters",
    "Speed": 5,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagTr3": {
    "displayName": "Sizable_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Critters",
    "Speed": 170,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagTr4": {
    "displayName": "Big_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Critters",
    "Speed": 240,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagTr5": {
    "displayName": "Large_Critter_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Critters",
    "Speed": 240,
    "Reach": 10,
    "Power": 6,
    "Weapon_Power": 6,
    "STR": 3
  },
  "MaxCapBagS0": {
    "displayName": "Cramped_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "Souls",
    "Speed": 250,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "MaxCapBagS1": {
    "displayName": "Small_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 100,
    "Class": "Souls",
    "Speed": 118,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "MaxCapBagS2": {
    "displayName": "Average_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 250,
    "Class": "Souls",
    "Speed": 5,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "MaxCapBagS3": {
    "displayName": "Sizable_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 500,
    "Class": "Souls",
    "Speed": 170,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "MaxCapBagS4": {
    "displayName": "Big_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "Souls",
    "Speed": 240,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "MaxCapBagS5": {
    "displayName": "Large_Soul_Pouch",
    "Type": "CARRY_BAG",
    "lvReqToCraft": 1,
    "lvReqToEquip": 2,
    "Class": "Souls",
    "Speed": 240,
    "Reach": 10,
    "Power": 7,
    "Weapon_Power": 7,
    "STR": 3
  },
  "ObolBronze0": {
    "displayName": "Bronze_STR_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1
  },
  "ObolBronze1": {
    "displayName": "Bronze_AGI_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 1
  },
  "ObolBronze2": {
    "displayName": "Bronze_WIS_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "WIS": 1
  },
  "ObolBronze3": {
    "displayName": "Bronze_LUK_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 1
  },
  "ObolSilver0": {
    "displayName": "Silver_STR_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2
  },
  "ObolSilver1": {
    "displayName": "Silver_AGI_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 2
  },
  "ObolSilver2": {
    "displayName": "Silver_WIS_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "WIS": 2
  },
  "ObolSilver3": {
    "displayName": "Silver_LUK_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 2
  },
  "ObolGold0": {
    "displayName": "Gold_STR_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 4
  },
  "ObolGold1": {
    "displayName": "Gold_AGI_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 4
  },
  "ObolGold2": {
    "displayName": "Gold_WIS_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "WIS": 4
  },
  "ObolGold3": {
    "displayName": "Gold_LUK_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 4
  },
  "ObolPlatinum0": {
    "displayName": "Platinum_STR_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 7
  },
  "ObolPlatinum1": {
    "displayName": "Platinum_AGI_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 7
  },
  "ObolPlatinum2": {
    "displayName": "Platinum_WIS_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "WIS": 7
  },
  "ObolPlatinum3": {
    "displayName": "Platinum_LUK_Obol",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 7
  },
  "ObolPink0": {
    "displayName": "Dementia_STR_Obol",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 12
  },
  "ObolPink1": {
    "displayName": "Dementia_AGI_Obol",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "AGI": 12
  },
  "ObolPink2": {
    "displayName": "Dementia_WIS_Obol",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "WIS": 12
  },
  "ObolPink3": {
    "displayName": "Dementia_LUK_Obol",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "LUK": 12
  },
  "ObolBronzeDamage": {
    "displayName": "Bronze_Obol_of_Puny_Damage",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 5
  },
  "ObolSilverDamage": {
    "displayName": "Silver_Obol_of_Little_Damage",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 10
  },
  "ObolGoldDamage": {
    "displayName": "Golden_Obol_of_Big_Boy_Damage",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 20
  },
  "ObolPlatinumDamage": {
    "displayName": "Platinum_Obol_of_Lethal_Damage",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 2,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 50
  },
  "ObolPinkDamage": {
    "displayName": "Dementia_Obol_of_Infinite_Damage",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "UQ1txt": "_BASE_DAMAGE",
    "UQ1val": 100
  },
  "ObolPlatinumSpeed": {
    "displayName": "Platinum_Obol_of_Blinding_Speed",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 4,
    "UQ1txt": "%_MOVEMENT_SPEED",
    "UQ1val": 2
  },
  "ObolSilverMoney": {
    "displayName": "Silver_Obol_of_Pocket_Change",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_MONEY",
    "UQ1val": 6
  },
  "ObolGoldMoney": {
    "displayName": "Golden_Obol_of_Plentiful_Riches",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_MONEY",
    "UQ1val": 10
  },
  "ObolBronzeMining": {
    "displayName": "Bronze_Obol_of_Small_Swings",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverMining": {
    "displayName": "Silver_Obol_of_Moderate_Mining",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 1
  },
  "ObolGoldMining": {
    "displayName": "Golden_Obol_of_Diligent_Digging",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 2
  },
  "ObolPlatinumMining": {
    "displayName": "Platinum_Obol_of_Dwarven_Delving",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 2
  },
  "ObolPinkMining": {
    "displayName": "Dementia_Obol_of_Magisterial_Metals",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 5,
    "UQ1txt": "%_MINING_EFFICINCY",
    "UQ1val": 8
  },
  "ObolBronzeChoppin": {
    "displayName": "Bronze_Obol_of_Chippin_Chops",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverChoppin": {
    "displayName": "Silver_Obol_of_Big_Bark",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "WIS": 1
  },
  "ObolGoldChoppin": {
    "displayName": "Golden_Obol_of_Huge_Hackin",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "WIS": 2
  },
  "ObolPlatinumChoppin": {
    "displayName": "Platinum_Obol_of_Lumby_Loggo",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "WIS": 3,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 2
  },
  "ObolPinkChoppin": {
    "displayName": "Dementia_Obol_of_WOWOWOWWO",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "WIS": 5,
    "UQ1txt": "%_CHOP_EFFICIENCY",
    "UQ1val": 8
  },
  "ObolBronzeFishing": {
    "displayName": "Bronze_Obol_of_Finite_Fish",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverFishing": {
    "displayName": "Silver_Obol_of_Puny_Pikes",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 1
  },
  "ObolGoldFishing": {
    "displayName": "Golden_Obol_of_Crazy_Carp",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 2
  },
  "ObolPlatinumFishing": {
    "displayName": "Platinum_Obol_of_Tremendous_Trout",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 2
  },
  "ObolPinkFishing": {
    "displayName": "Dementia_Obol_of_Monument_Marlins",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 5,
    "UQ1txt": "%_FISHIN_EFFICINCY",
    "UQ1val": 8
  },
  "ObolBronzeCatching": {
    "displayName": "Bronze_Obol_of_Few_Flies",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverCatching": {
    "displayName": "Silver_Obol_of_Big_Bugs",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "AGI": 1
  },
  "ObolGoldCatching": {
    "displayName": "Golden_Obol_of_Insane_Insects",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "AGI": 2
  },
  "ObolPlatinumCatching": {
    "displayName": "Platinum_Obol_of_Idk_Yet",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "AGI": 3,
    "UQ1txt": "%_CATCH_EFFICINCY",
    "UQ1val": 2
  },
  "ObolPinkCatching": {
    "displayName": "Dementia_Obol_of_Idk_Yet",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "AGI": 5,
    "UQ1txt": "%_CATCH_EFFICINCY",
    "UQ1val": 8
  },
  "ObolSilverLuck": {
    "displayName": "Silver_Obol_of_Double_Sixes",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 2,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 5
  },
  "ObolGoldLuck": {
    "displayName": "Golden_Obol_of_Triple_Sixes",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 3,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 7
  },
  "ObolPlatinumLuck": {
    "displayName": "Platinum_Obol_of_Yahtzee_Sixes",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 5,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 10
  },
  "ObolPinkLuck": {
    "displayName": "Dementia_Obol_of_Infinisixes",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 7,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 15
  },
  "ObolBronzePop": {
    "displayName": "Bronze_Obol_of_Pop",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 1,
    "Defence": 1,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 2
  },
  "ObolSilverPop": {
    "displayName": "Silver_Obol_of_Pop_Pop",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 3,
    "Defence": 2,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 3
  },
  "ObolGoldPop": {
    "displayName": "Golden_Obol_of_Poppity_Pop",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 6,
    "Defence": 3,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 4
  },
  "ObolPlatinumPop": {
    "displayName": "Platinum_Obol_of_Poppity_Poppy",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 9,
    "Defence": 4,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 6
  },
  "ObolPinkPop": {
    "displayName": "Dementia_Obol_of_Pop_Pop_Pop_Pop",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 12,
    "Defence": 5,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 9
  },
  "ObolEfauntA": {
    "displayName": "Skeletal_Obol_of_Efaunt's_Gaze",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "UQ1txt": "%_BOSS_DAMAGE",
    "UQ1val": 5
  },
  "ObolAmarokA": {
    "displayName": "Granite_Obol_of_Amarok's_Stare",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 2,
    "Defence": 5,
    "UQ1txt": "%_DEFENCE",
    "UQ1val": 4
  },
  "ObolBronzeKill": {
    "displayName": "Bronze_Obol_of_Multikill",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_MULTIKILL",
    "UQ1val": 1
  },
  "ObolSilverKill": {
    "displayName": "Silver_Obol_of_Megakill",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_MULTIKILL",
    "UQ1val": 2
  },
  "ObolGoldKill": {
    "displayName": "Golden_Obol_of_Ultrakill",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "UQ1txt": "%_MULTIKILL",
    "UQ1val": 3
  },
  "ObolPlatinumKill": {
    "displayName": "Platinum_Obol_of_Killimanjaro",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "UQ1txt": "%_MULTIKILL",
    "UQ1val": 5
  },
  "ObolPinkKill": {
    "displayName": "Dementia_Obol_of_Killionaire",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "UQ1txt": "%_MULTIKILL",
    "UQ1val": 10
  },
  "ObolBronzeEXP": {
    "displayName": "Bronze_Obol_of_Experience",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 1
  },
  "ObolSilverEXP": {
    "displayName": "Silver_Obol_of_Experience",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 1
  },
  "ObolGoldEXP": {
    "displayName": "Golden_Obol_of_Experience",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 2
  },
  "ObolPlatinumEXP": {
    "displayName": "Platinum_Obol_of_Experience",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 3
  },
  "ObolPinkEXP": {
    "displayName": "Dementia_Obol_of_Experience",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 4
  },
  "ObolBronzeCard": {
    "displayName": "Bronze_Obol_of_Cards",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_CARD_DROP_CHANCE",
    "UQ1val": 1
  },
  "ObolSilverCard": {
    "displayName": "Silver_Obol_of_Cards",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "UQ1txt": "%_CARD_DROP_CHANCE",
    "UQ1val": 3
  },
  "ObolGoldCard": {
    "displayName": "Golden_Obol_of_Cards",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "UQ1txt": "%_CARD_DROP_CHANCE",
    "UQ1val": 5
  },
  "ObolPlatinumCard": {
    "displayName": "Platinum_Obol_of_Cards",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "UQ1txt": "%_CARD_DROP_CHANCE",
    "UQ1val": 7
  },
  "ObolPinkCard": {
    "displayName": "Dementia_Obol_of_Cards",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "UQ1txt": "%_CARD_DROP_CHANCE",
    "UQ1val": 10
  },
  "ObolBronzeDef": {
    "displayName": "Bronze_Obol_of_Defence",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 1
  },
  "ObolSilverDef": {
    "displayName": "Silver_Obol_of_Defence",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 3
  },
  "ObolGoldDef": {
    "displayName": "Golden_Obol_of_Defence",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 6
  },
  "ObolPlatinumDef": {
    "displayName": "Platinum_Obol_of_Defense_with_an_S",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 15
  },
  "ObolPinkDef": {
    "displayName": "Dementia_Obol_of_Defence",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Defence": 25
  },
  "ObolBronzeTrapping": {
    "displayName": "Bronze_Obol_of_Trapping",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverTrapping": {
    "displayName": "Silver_Obol_of_Trapping",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "AGI": 1
  },
  "ObolGoldTrapping": {
    "displayName": "Golden_Obol_of_Trapping",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "AGI": 2
  },
  "ObolPlatinumTrapping": {
    "displayName": "Platinum_Obol_of_Trapping",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "AGI": 3
  },
  "ObolPinkTrapping": {
    "displayName": "Dementia_Obol_of_Trapping",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 7,
    "Weapon_Power": 7,
    "AGI": 5
  },
  "ObolBronzeCons": {
    "displayName": "Bronze_Obol_of_Construction",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "UQ1txt": "%_BUILD_SPD",
    "UQ1val": 1
  },
  "ObolSilverCons": {
    "displayName": "Silver_Obol_of_Construction",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "UQ1txt": "%_BUILD_SPD",
    "UQ1val": 2
  },
  "ObolGoldCons": {
    "displayName": "Golden_Obol_of_Construction",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "UQ1txt": "%_BUILD_SPD",
    "UQ1val": 5
  },
  "ObolPlatinumCons": {
    "displayName": "Platinum_Obol_of_Construction",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 3,
    "UQ1txt": "%_BUILD_SPD",
    "UQ1val": 12
  },
  "ObolPinkCons": {
    "displayName": "Dementia_Obol_of_Construction",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 5,
    "UQ1txt": "%_BUILD_SPD",
    "UQ1val": 20
  },
  "ObolBronzeWorship": {
    "displayName": "Bronze_Obol_of_Worship",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1
  },
  "ObolSilverWorship": {
    "displayName": "Silver_Obol_of_Worship",
    "Type": "CIRCLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "WIS": 1
  },
  "ObolGoldWorship": {
    "displayName": "Golden_Obol_of_Worship",
    "Type": "SQUARE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "WIS": 2
  },
  "ObolPlatinumWorship": {
    "displayName": "Platinum_Obol_of_Worship",
    "Type": "HEXAGON_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "WIS": 3
  },
  "ObolPinkWorship": {
    "displayName": "Dementia_Obol_of_Worship",
    "Type": "SPARKLE_OBOL",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 7,
    "Weapon_Power": 7,
    "WIS": 5
  },
  "ExpSmith1": {
    "displayName": "Smithing_Exp",
    "Type": "EXPERIENCE",
    "lvReqToCraft": 3,
    "description": "A_little_ball_of_pure_energy!"
  },
  "StampA1": {
    "displayName": "Sword_Stamp",
    "Type": "STAMP",
    "description": "BaseDmg,add,1,0,5,Grasslands1,20,5,50,1.3,0,{}_Base_Damage,3"
  },
  "StampA2": {
    "displayName": "Heart_Stamp",
    "Type": "STAMP",
    "description": "BaseHP,add,1,0,5,OakTree,25,7,50,1.3,0,{}_Base_HP,3"
  },
  "StampA3": {
    "displayName": "Mana_Stamp",
    "Type": "STAMP",
    "description": "BaseMP,add,1,0,5,Copper,25,7,50,1.3,0,{}_Base_MP,0"
  },
  "StampA4": {
    "displayName": "Tomahawk_Stamp",
    "Type": "STAMP",
    "description": "PctDmg,decay,6,40,4,CopperBar,15,6,50,1.3,0,{}%_Total_Damage,3"
  },
  "StampA5": {
    "displayName": "Target_Stamp",
    "Type": "STAMP",
    "description": "BaseAcc,add,1,0,5,CraftMat1,25,6,50,1.3,0,{}_Base_Accuracy,3"
  },
  "StampA6": {
    "displayName": "Shield_Stamp",
    "Type": "STAMP",
    "description": "BaseDef,add,1,0,5,Iron,50,7,50,1.3,0,{}_Base_Defence,3",
    "Defence": 1
  },
  "StampA7": {
    "displayName": "Longsword_Stamp",
    "Type": "STAMP",
    "description": "BaseDmg,add,2,0,4,Grasslands3,50,6,50,1.3,0,{}_Base_Damage,6"
  },
  "StampA8": {
    "displayName": "Kapow_Stamp",
    "Type": "STAMP",
    "description": "CritDmg,decay,8,40,3,CraftMat5,50,6,50,1.3,0,{}%_Critical_Damage,6"
  },
  "StampA9": {
    "displayName": "Fist_Stamp",
    "Type": "STAMP",
    "description": "BaseSTR,add,1,0,2,BirchTree,50,7,50,1.3,0,{}_STR,3",
    "STR": 1
  },
  "StampA10": {
    "displayName": "Battleaxe_Stamp",
    "Type": "STAMP",
    "description": "PctDmg,decay,10,40,4,Leaf1,25,4,50,1.3,0,{}%_Total_Damage,5"
  },
  "StampA11": {
    "displayName": "Agile_Stamp",
    "Type": "STAMP",
    "description": "BaseAGI,add,1,0,2,EquipmentToolsHatchet3,1,4,50,1.3,0,{}_AGI,0",
    "AGI": 1
  },
  "StampA12": {
    "displayName": "Vitality_Stamp",
    "Type": "STAMP",
    "description": "BaseHP,add,2,0,4,Jungle2,25,6,50,1.3,0,{}_Base_HP,6"
  },
  "StampA13": {
    "displayName": "Book_Stamp",
    "Type": "STAMP",
    "description": "BaseWIS,add,1,0,2,IronBar,20,5,50,1.35,0,{}_WIS,3",
    "WIS": 1
  },
  "StampA14": {
    "displayName": "Manamoar_Stamp",
    "Type": "STAMP",
    "description": "BaseMP,add,2,0,3,Forest1,25,6,75,1.32,0,{}_Base_MP,2"
  },
  "StampA15": {
    "displayName": "Clover_Stamp",
    "Type": "STAMP",
    "description": "BaseLUK,add,1,0,2,EquipmentShirts12,1,2,300,1.38,0,{}_LUK,6",
    "LUK": 1
  },
  "StampA16": {
    "displayName": "Scimitar_Stamp",
    "Type": "STAMP",
    "description": "BaseDmg,add,3,0,4,Fish1,75,7,2000,1.33,0,{}_Base_Damage,0"
  },
  "StampA17": {
    "displayName": "Bullseye_Stamp",
    "Type": "STAMP",
    "description": "BaseAcc,add,2,0,5,Bug3,100,10,5000,1.36,0,{}_Base_Accuracy,0"
  },
  "StampA18": {
    "displayName": "Feather_Stamp",
    "Type": "STAMP",
    "description": "PctMoveSpd,decay,5,50,5,DesertB1,25,6,2500,1.3,0,{}_Base_Move_Speed,0",
    "Speed": 5
  },
  "StampA19": {
    "displayName": "Polearm_Stamp",
    "Type": "STAMP",
    "description": "PctDmg,decay,16,40,6,TestObj7,1,2,3000,1.3,0,{}%_Total_Damage,0"
  },
  "StampA20": {
    "displayName": "Violence_Stamp",
    "Type": "STAMP",
    "description": "BaseSTR,add,1,0,3,Dementia,10,7,10000,1.3,0,{}_STR,0",
    "STR": 1
  },
  "StampA21": {
    "displayName": "Buckler_Stamp",
    "Type": "STAMP",
    "description": "BaseDef,add,1,0,7,PlatBar,25,6,2200,1.305,0,{}_Base_Defence,0",
    "Defence": 1
  },
  "StampA22": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA23": {
    "displayName": "Sukka_Foo",
    "Type": "STAMP",
    "description": "BossDmg,decay,24,60,10,Quest17,3,5,10000,1.34,0,{}%_Boss_Damage,0"
  },
  "StampA24": {
    "displayName": "Arcane_Stamp",
    "Type": "STAMP",
    "description": "BaseWIS,add,1,0,3,GoldBar,50,7,1550,1.36,0,{}_Base_WIS,0",
    "WIS": 1
  },
  "StampA25": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,5000,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA26": {
    "displayName": "Steve_Sword",
    "Type": "STAMP",
    "description": "PctDmg,decay,20,60,10,Bug4,150,5,10000,1.32,0,{}%_Total_Damage,0"
  },
  "StampA27": {
    "displayName": "Blover_Stamp",
    "Type": "STAMP",
    "description": "BaseLUK,add,1,0,4,Fish3,100,7,25000,1.39,0,{}_Base_LUK,0",
    "LUK": 1
  },
  "StampA28": {
    "displayName": "Stat_Graph_Stamp",
    "Type": "STAMP",
    "description": "BaseAllStat,add,1,0,2,StoneZ1,2,2,2000,1.36,0,{}_All_Stats,0"
  },
  "StampA29": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA30": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA31": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA32": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA33": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA34": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampA35": {
    "displayName": "FILLER",
    "Type": "STAMP",
    "description": "BaseDef,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_Defence,0",
    "Defence": 30
  },
  "StampB1": {
    "displayName": "Pickaxe_Stamp",
    "Type": "STAMP",
    "description": "BaseMinEff,add,1,0,10,OakTree,25,7,50,1.3,1,{}_Mining_Efficiency,0"
  },
  "StampB2": {
    "displayName": "Hatchet_Stamp",
    "Type": "STAMP",
    "description": "BaseChopEff,add,1,0,10,CraftMat1,25,6,50,1.3,3,{}_Choppin_Efficiency,0"
  },
  "StampB3": {
    "displayName": "Anvil_Zoomer_Stamp",
    "Type": "STAMP",
    "description": "AnvilPAspd,add,1,0,5,Copper,25,6,50,1.3,2,{}%_Anvil_Production_Spd,0"
  },
  "StampB4": {
    "displayName": "Lil'_Mining_Baggy_Stamp",
    "Type": "STAMP",
    "description": "MinCap,add,1,0,10,JungleTree,25,6,50,1.3,1,{}_Mining_Carry_Cap,0"
  },
  "StampB5": {
    "displayName": "Twin_Ores_Stamp",
    "Type": "STAMP",
    "description": "DoubleMin,decay,15,40,5,EquipmentHats3,1,3,10000,1.3,1,{}%_Multi_Ore_Chance,0"
  },
  "StampB6": {
    "displayName": "Choppin'_Bag_Stamp",
    "Type": "STAMP",
    "description": "ChopCap,add,1,0,10,Jungle3,25,6,50,1.3,3,{}_Choppin_Carry_Cap,0"
  },
  "StampB7": {
    "displayName": "Duplogs_Stamp",
    "Type": "STAMP",
    "description": "DoubleChop,decay,15,40,5,EquipmentHats20,1,3,20000,1.3,3,{}%_Multi_Log_Chance,0"
  },
  "StampB8": {
    "displayName": "Matty_Bag_Stamp",
    "Type": "STAMP",
    "description": "MatCap,add,1,0,10,MaxCapBagM2,1,2,50,1.3,2,{}_Material_Carry_Cap,0"
  },
  "StampB9": {
    "displayName": "Smart_Dirt_Stamp",
    "Type": "STAMP",
    "description": "MinExp,add,1,0,5,Forest2,25,6,80,1.35,1,{}%_Mining_Exp,0"
  },
  "StampB10": {
    "displayName": "Cool_Diggy_Tool_Stamp",
    "Type": "STAMP",
    "description": "BaseMinEff,add,2,0,10,EquipmentToolsHatchet1,1,2,35000,1.4,\\t1,{}_Mining_Efficiency,0"
  },
  "StampB11": {
    "displayName": "High_IQ_Lumber_Stamp",
    "Type": "STAMP",
    "description": "ChopExp,add,1,0,5,Forest3,25,6,80,1.35,3,{}%_Choppin_Exp,0"
  },
  "StampB12": {
    "displayName": "Swag_Swingy_Tool_Stamp",
    "Type": "STAMP",
    "description": "BaseChopEff,add,2,0,10,EquipmentTools2,1,2,50000,1.36,3,{}_Choppin_Efficiency,0"
  },
  "StampB13": {
    "displayName": "Alch_Go_Brrr_Stamp",
    "Type": "STAMP",
    "description": "AlchSpd,add,1,0,4,ForestTree,40,6,800,1.29,-1,{}%_Alch_Speed,0",
    "Speed": 1
  },
  "StampB14": {
    "displayName": "Brainstew_Stamps",
    "Type": "STAMP",
    "description": "AlchExp,add,1,0,5,Gold,40,6,1250,1.28,5,{}%_Alch_Exp,0"
  },
  "StampB15": {
    "displayName": "Drippy_Drop_Stamp",
    "Type": "STAMP",
    "description": "LiquidSpd,add,1,0,5,DesertA1,60,6,1000,1.3,-1,{}%_Liquid_Spd,0"
  },
  "StampB16": {
    "displayName": "Droplots_Stamp",
    "Type": "STAMP",
    "description": "LiquidCap,add,1,0,2,Fish4,25,4,2500,1.3,-1,{}_Liquid_Cap,0"
  },
  "StampB17": {
    "displayName": "Fishing_Rod_Stamp",
    "Type": "STAMP",
    "description": "BaseFishEff,add,2,0,5,Bug1,50,6,1000,1.32,4,{}_Fishing_Efficiency,0"
  },
  "StampB18": {
    "displayName": "Fishhead_Stamp",
    "Type": "STAMP",
    "description": "FishExp,add,1,0,5,DesertA2,55,9,1500,1.33,4,{}%_Fishing_Exp,0"
  },
  "StampB19": {
    "displayName": "Catch_Net_Stamp",
    "Type": "STAMP",
    "description": "BaseCatchEff,add,2,0,5,Fish1,50,6,1000,1.3,6,{}_Catching_Efficiency,0"
  },
  "StampB20": {
    "displayName": "Fly_Intel_Stamp",
    "Type": "STAMP",
    "description": "CatchExp,add,1,0,5,DesertA3,40,10,1500,1.33,6,{}%_Catching_Exp,0"
  },
  "StampB21": {
    "displayName": "Bag_o_Heads_Stamp",
    "Type": "STAMP",
    "description": "FishCap,add,1,0,8,Bug2,35,7,1000,1.3,4,{}%_Fish_Carry_Cap,0"
  },
  "StampB22": {
    "displayName": "Holy_Mackerel_Stamp",
    "Type": "STAMP",
    "description": "DoubleFish,decay,20,40,5,Plat,30,6,1500,1.3,4,{}%_Multifish_Chance,0"
  },
  "StampB23": {
    "displayName": "Bugsack_Stamp",
    "Type": "STAMP",
    "description": "CatchCap,add,1,0,8,Fish2,35,7,1000,1.3,6,{}%_Bug_Carry_Cap,0"
  },
  "StampB24": {
    "displayName": "Buzz_Buzz_Stamp",
    "Type": "STAMP",
    "description": "DoubleCatch,decay,20,40,5,ToiletTree,45,6,1500,1.3,6,{}%_Multibug_Chance,0"
  },
  "StampB25": {
    "displayName": "Hidey_Box_Stamp",
    "Type": "STAMP",
    "description": "TrappingEff,add,2,0,10,Critter2,100,5,7500,1.3,7,{}_Trapping_Efficiency,0"
  },
  "StampB26": {
    "displayName": "Purp_Froge_Stamp",
    "Type": "STAMP",
    "description": "ShinyChance,add,1,0,5,Critter3,125,6,10000,1.3,7,{}%_Shiny_Chance,0"
  },
  "StampB27": {
    "displayName": "Spikemouth_Stamp",
    "Type": "STAMP",
    "description": "TrappingExp,add,1,0,3,Critter4,150,6,12500,1.3,7,{}%_Trapping_Exp,0"
  },
  "StampB28": {
    "displayName": "Shiny_Crab_Stamp",
    "Type": "STAMP",
    "description": "ShinyChance,add,2,0,3,Critter5,200,7,15000,1.3,7,{}%_Shiny_Chance,0"
  },
  "StampB29": {
    "displayName": "Gear_Stamp",
    "Type": "STAMP",
    "description": "BuildProd,add,1,0,3,SnowB1,100,5,10000,1.3,8,{}%_Building_Spd,0"
  },
  "StampB30": {
    "displayName": "Stample_Stamp",
    "Type": "STAMP",
    "description": "SampleRate,decay,4,30,4,SnowA1,100,6,10000,1.3,0,{}%_Sample_Size,0"
  },
  "StampB31": {
    "displayName": "Saw_Stamp",
    "Type": "STAMP",
    "description": "ConstructionExp,add,1,0,3,DementiaBar,20,5,15000,1.3,8,{}%_Construction_Exp,0"
  },
  "StampB32": {
    "displayName": "Amplestample_Stamp",
    "Type": "STAMP",
    "description": "SampleRate,decay,5,30,4,Bug5,200,11,25000,1.3,0,{}%_Sample_Size,0"
  },
  "StampB33": {
    "displayName": "SpoOoky_Stamp",
    "Type": "STAMP",
    "description": "WorshipEff,add,2,0,10,Soul1,45,6,7500,1.3,9,{}_Worship_Efficiency,0"
  },
  "StampB34": {
    "displayName": "Flowin_Stamp",
    "Type": "STAMP",
    "description": "WorshipCharge,add,1,0,2,Refinery1,2,5,15000,1.3,9,{}%_Charging_Speed,0",
    "Speed": 1
  },
  "StampB35": {
    "displayName": "Prayday_Stamp",
    "Type": "STAMP",
    "description": "WorshipMax,add,1,0,2,SnowB4,150,6,10000,1.3,9,{}%_Max_Charge,0"
  },
  "StampB36": {
    "displayName": "Banked_Pts_Stamp",
    "Type": "STAMP",
    "description": "WorshipPTS,add,1,0,6,Soul2,100,3,6000,1.3,9,{}_Starting_TD_Pts,0"
  },
  "StampC1": {
    "displayName": "Questin_Stamp",
    "Type": "STAMP",
    "description": "QuestExp,decay,70,50,10,Jungle1,30,6,500,1.32,0,{}%_Quest_EXP,3"
  },
  "StampC2": {
    "displayName": "Mason_Jar_Stamp",
    "Type": "STAMP",
    "description": "AllCarryCap,add,1,0,4,DesertA1b,1,3,4000,1.28,0,{}%_All_Carry_Cap,3"
  },
  "StampC3": {
    "displayName": "Crystallin",
    "Type": "STAMP",
    "description": "CrySpawn,decay,110,50,10,CraftMat6,35,8,800,1.31,0,{}%_Spawn_Chance,3"
  },
  "StampC4": {
    "displayName": "Blank",
    "Type": "STAMP",
    "description": "BaseDmg,add,30,0,10,Copper,25,6,50,1.30,0,{}_Base_HP,3"
  },
  "StampC5": {
    "displayName": "Apple_Stamp",
    "Type": "STAMP",
    "description": "HFood,add,1,0,5,FoodHealth7,50,5.5,200,1.30,0,{}%_HP_Food_Effect,3"
  },
  "StampC6": {
    "displayName": "Potion_Stamp",
    "Type": "STAMP",
    "description": "BFood,add,1,0,5,FoodMining1,50,8,1500,1.305,0,{}%_Boost_Food_Effect,3"
  },
  "StampC7": {
    "displayName": "Golden_Apple_Stamp",
    "Type": "STAMP",
    "description": "GFood,add,1,0,4,FoodG4,2,4,3000,1.30,0,{}%_Gold_Food_Effect,3"
  },
  "StampC8": {
    "displayName": "Blank",
    "Type": "STAMP",
    "description": "BaseDmg,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_HP,3"
  },
  "StampC9": {
    "displayName": "Card_Stamp",
    "Type": "STAMP",
    "description": "CardDrop,add,1,0,10,DesertB2,25,6,1200,1.31,0,{}%_Card_Drop_Rate,3"
  },
  "StampC10": {
    "displayName": "Blank",
    "Type": "STAMP",
    "description": "BaseDmg,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_HP,3"
  },
  "StampC11": {
    "displayName": "Blank",
    "Type": "STAMP",
    "description": "BaseDmg,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_HP,3"
  },
  "StampC12": {
    "displayName": "Blank",
    "Type": "STAMP",
    "description": "BaseDmg,add,30,0,10,Copper,25,6,50,1.3,0,{}_Base_HP,3"
  },
  "StampC13": {
    "displayName": "Talent_I_Stamp",
    "Type": "STAMP",
    "description": "Talent1,add,1,0,2,Grasslands2,25,6,50,1.3,0,{}_Talent_1_Pts,3"
  },
  "StampC14": {
    "displayName": "Talent_II_Stamp",
    "Type": "STAMP",
    "description": "Talent2,add,1,0,2,DesertB3,200,8,4000,1.35,0,{}_Talent_2_Pts,3"
  },
  "StampC15": {
    "displayName": "Talent_III_Stamp",
    "Type": "STAMP",
    "description": "Talent3,add,1,0,2,Leaf3,20,4,40000,1.35,0,{}_Talent_3_Pts,3"
  },
  "StampC16": {
    "displayName": "Talent_IV_Stamp",
    "Type": "STAMP",
    "description": "Talent4,add,1,0,2,Copper,25,6,50,1.3,0,{}_Talent_4_Pts,3"
  },
  "StampC17": {
    "displayName": "Talent_V_Stamp",
    "Type": "STAMP",
    "description": "Talent5,add,1,0,2,Copper,25,6,50,1.3,0,{}_Talent_5_Pts,3"
  },
  "StampC18": {
    "displayName": "Talent_S_Stamp",
    "Type": "STAMP",
    "description": "TalentS,add,1,0,2,Leaf2,20,4,50,1.3,0,{}_Star_Talent_Pts,3"
  },
  "StampC19": {
    "displayName": "Multikill_Stamp",
    "Type": "STAMP",
    "description": "Overkill,add,1,0,2,Grasslands1,100,3,10000,1.3,0,{}%_Base_Overkill,3"
  },
  "StampC20": {
    "displayName": "Biblio_Stamp",
    "Type": "STAMP",
    "description": "BookSpd,add,1,0,2,SaharanFoal,125,5,12500,1.3,0,{}%_Faster_Books,3"
  },
  "StoneWe": {
    "displayName": "Easter_Weapon_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Power": 1,
    "Defence": 1,
    "Weapon_Power": 1
  },
  "StoneWeb": {
    "displayName": "Summer_Weapon_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Defence": 1
  },
  "StoneW1": {
    "displayName": "Weapon_Upgrade_Stone_I",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Power": 1,
    "Weapon_Power": 1
  },
  "StoneW2": {
    "displayName": "Weapon_Upgrade_Stone_II",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Power": 1,
    "Weapon_Power": 1
  },
  "StoneW3": {
    "displayName": "Weapon_Upgrade_Stone_III",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Power": 2,
    "Weapon_Power": 2
  },
  "StoneW6": {
    "displayName": "Warped_Weapon_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Weapon_to_apply.",
    "Power": 3,
    "Weapon_Power": 3
  },
  "StoneAe": {
    "displayName": "Easter_Armor_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 1
  },
  "StoneAeB": {
    "displayName": "Summer_Armor_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 3
  },
  "StoneA1": {
    "displayName": "Armor_Upgrade_Stone_I",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 2
  },
  "StoneA1b": {
    "displayName": "Armor_Upgrade_Stone_G",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply."
  },
  "StoneA2": {
    "displayName": "Armor_Upgrade_Stone_II",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 2
  },
  "StoneA2b": {
    "displayName": "Armor_Upgrade_Stone_B",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 5
  },
  "StoneA3": {
    "displayName": "Armor_Upgrade_Stone_III",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Defence": 3
  },
  "StoneA3b": {
    "displayName": "Armor_Upgrade_Stone_C",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Armor_to_apply.",
    "Power": 1,
    "Weapon_Power": 1
  },
  "StoneTe": {
    "displayName": "Easter_Tool_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply."
  },
  "StoneT1": {
    "displayName": "Tool_Upgrade_Stone_I",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply.",
    "Power": 1,
    "Weapon_Power": 1
  },
  "StoneT1e": {
    "displayName": "Giftmas_Tool_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply."
  },
  "StoneT1eb": {
    "displayName": "Summer_Tool_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply.",
    "Defence": 3
  },
  "StoneT2": {
    "displayName": "Tool_Upgrade_Stone_II",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply.",
    "Power": 2,
    "Weapon_Power": 2
  },
  "StoneT3": {
    "displayName": "Tool_Upgrade_Stone_III",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Tool_to_apply.",
    "Power": 3,
    "Weapon_Power": 3
  },
  "StoneHelm1": {
    "displayName": "Helmet_Upgrade_Stone_I",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Helmet_to_apply."
  },
  "StoneHelm6": {
    "displayName": "Warped_Helmet_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Helmet_to_apply."
  },
  "StoneHelm1b": {
    "displayName": "Giftmas_Helmet_Upgrade_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Helmet_to_apply."
  },
  "StoneZ1": {
    "displayName": "Mystery_Upgrade_Stone_I",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply."
  },
  "StoneZ2": {
    "displayName": "Mystery_Upgrade_Stone_II",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply."
  },
  "StonePremSTR": {
    "displayName": "Premium_STR_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply.",
    "STR": 5
  },
  "StonePremAGI": {
    "displayName": "Premium_AGI_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply.",
    "AGI": 5
  },
  "StonePremWIS": {
    "displayName": "Premium_WIS_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply.",
    "WIS": 5
  },
  "StonePremLUK": {
    "displayName": "Premium_LUK_Stone",
    "Type": "UPGRADE",
    "lvReqToCraft": 3,
    "description": "Drag_onto_any_Equip_to_apply.",
    "LUK": 5
  },
  "Refinery1": {
    "displayName": "Redox_Salts",
    "Type": "REFINERY_SALTS",
    "description": "It's_red,_and_boring."
  },
  "Refinery2": {
    "displayName": "Explosive_Salts",
    "Type": "REFINERY_SALTS",
    "description": "It's_orange,_and_explodey."
  },
  "Refinery3": {
    "displayName": "Spontaneity_Salts",
    "Type": "REFINERY_SALTS",
    "description": "It's_blue,_and_currently_has_a_flight_scheduled_to_Tahiti_that_it_booked_earlier_this_morning_on_a_whim."
  },
  "Refinery4": {
    "displayName": "Dioxide_Synthesis",
    "Type": "REFINERY_SALTS",
    "description": "It's_green,_and_carbony."
  },
  "Refinery5": {
    "displayName": "Red_Salt",
    "Type": "REFINERY_SALTS",
    "description": "It's_red,_and_boring."
  },
  "Refinery6": {
    "displayName": "Red_Salt",
    "Type": "REFINERY_SALTS",
    "description": "It's_red,_and_boring."
  },
  "CraftMat1": {
    "displayName": "Thread",
    "Type": "MATERIAL",
    "description": "It's_basically_string_cheese,_but_without_the_cheese._CRAFT_THESE_IN_THE_'PRODUCE'_TAB_IN_ANVIL!"
  },
  "CraftMat2": {
    "displayName": "Crimson_String",
    "Type": "MATERIAL",
    "description": "I_think_Scripticus_forgot_to_take"
  },
  "CraftMat3": {
    "displayName": "Cue_Tape",
    "Type": "MATERIAL",
    "description": "Ohh_that's_why_it's_called_Cue_tape!"
  },
  "CraftMat5": {
    "displayName": "Trusty_Nails",
    "Type": "MATERIAL",
    "description": "Twice_the_nailage,_so_you_can_feel"
  },
  "CraftMat6": {
    "displayName": "Boring_Brick",
    "Type": "MATERIAL",
    "description": "Go_get_your_shovel..."
  },
  "CraftMat7": {
    "displayName": "Chain_Link",
    "Type": "MATERIAL",
    "description": "Better_keep_an_eye_on_this_or_it"
  },
  "CraftMat9": {
    "displayName": "Leather_Hide",
    "Type": "MATERIAL",
    "description": "I_mean_come_on,_would_this_really_be_a_Fantasy_MMO_if_it_didn't_have_a_leather_material_item?"
  },
  "CraftMat8": {
    "displayName": "Pinion_Spur",
    "Type": "MATERIAL",
    "description": "The_big_one_is_the_Spur."
  },
  "CraftMat10": {
    "displayName": "Lugi_Bracket",
    "Type": "MATERIAL",
    "description": "Hey_look_Mario!_I_have-a_my_own_reference_in_the_game!"
  },
  "CraftMat11": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat12": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat13": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat14": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat15": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat16": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "CraftMat17": {
    "displayName": "Filler",
    "Type": "MATERIAL",
    "description": "Filler_text_lol"
  },
  "PureWater": {
    "displayName": "Distilled_Water",
    "Type": "MATERIAL",
    "description": "The_full_filtration_process_also_invovles_filtering_the_diamonds_through_a_vat_of_diamonds_before_using_those_filtered_diamonds_to_filter_the_water!_If_only_they'd_filter_their_filtration_process_through_diamonds_so_this_item_description_wouldn't_be_so_long."
  },
  "PureWater2": {
    "displayName": "Dense_Water",
    "Type": "MATERIAL",
    "description": "It's_like_a_bowl_of_oatmeal,_but_double_the_thiccness_and_hold_the_oats."
  },
  "Grasslands1": {
    "displayName": "Spore_Cap",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_often_misunderstood_that_this"
  },
  "Grasslands2": {
    "displayName": "Frog_Leg",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Imagine_if_humans_had_legs_like_this._Actually,_it_would_be_better_if_you_didn't,_unless_you_want_nightmares_about_humans_violently_jumping_at_you_from_20_feet_away."
  },
  "Grasslands3": {
    "displayName": "Bean_Slices",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "There's_something_disturbing_about"
  },
  "Grasslands4": {
    "displayName": "Red_Spore_Cap",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_often_misunderstood_that_this_is_just_the_spore's_stylish_hat,_due_to_the_cosmetic_nature_of_Green_Spores,_but_this_cap_is_actually_part_of_this_spore's_head."
  },
  "Jungle1": {
    "displayName": "Slime_Sludge",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Ewww,_slimey."
  },
  "Jungle2": {
    "displayName": "Snake_Skin",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "''Theres_a_snake_in_me_boots!_Oh"
  },
  "Jungle3": {
    "displayName": "Carrot_Cube",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Probably_the_only_time_you'll"
  },
  "Forest1": {
    "displayName": "Glublin_Ear",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "This_item_will_listen_to_anything"
  },
  "Forest2": {
    "displayName": "Plank",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "I_wonder_what_the_Ed_Boys"
  },
  "Forest3": {
    "displayName": "Bullfrog_Horn",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Makes_a_loud_noise_when_thrown_at"
  },
  "Sewers1": {
    "displayName": "Corn_Kernels",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "I_guess_what_they_say_about_corn_is_true..."
  },
  "Sewers1b": {
    "displayName": "Golden_Plop",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Conker_would_have_called_this_something_else.__________________NOTE:_This_is_a_very_rare_drop_from_Poops"
  },
  "Sewers2": {
    "displayName": "Rats_Tail",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Ew_why_did_you_pick_this_up?"
  },
  "Sewers3": {
    "displayName": "Bonemeal",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Imagine_the_guy_who_came_up_with_this_name..._''wait,_you_guys_HAVENT_been_eating_this_stuff?''"
  },
  "TreeInterior1": {
    "displayName": "Stick",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Made_of_wood."
  },
  "TreeInterior1b": {
    "displayName": "Woodular_Circle",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Made_of_circle_that's_been_carved_into_the_shape_of_a_wood.____________NOTE:_This_is_a_very_rare_drop_from_Branches"
  },
  "TreeInterior2": {
    "displayName": "Acorn",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Every_time_I_plant_one_of_these,_someone_eventually_steals_it_and_puts_a_fully_grown_tree_in_its_place!_Very_annoying!"
  },
  "BabaYagaETC": {
    "displayName": "Baba_Yaga_Baby_Eggs",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Eventually_you'll_be_able_to_turn_these_into_a_hatchable_egg!_Or_maybe_you_already_can!_Or_maybe_you_never_will!_Who_knows_what_future_content_there_may_be!"
  },
  "DesertA1": {
    "displayName": "Pocket_Sand",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "This_sand_aint_right,_I_tell_you_hwat!"
  },
  "DesertA1b": {
    "displayName": "Glass_Shard",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "The_result_of_letting_heat_and_sand_get_it_on_if_you_know_what_I'm_sayin.________________________NOTE:_This_is_a_very_rare_drop_from_Sandy_Pots"
  },
  "DesertA2": {
    "displayName": "Megalodon_Tooth",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Wait_a_minute,_this_isn't_a_real_megalodon_tooth!"
  },
  "DesertA3": {
    "displayName": "Crabby_Cakey",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "You_could_probably_start_a_restaurant_selling_these!_Just_employ_an_overeager_cook,_give_the_place_a_cool_name_like_The_Crispy_Crustacean,_and_you'd_be_set!"
  },
  "DesertA3b": {
    "displayName": "Nuget_Cake",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Ohhhhh,_that's_what_people_mean_when_they_say_Love_At_First_Sight!_____________________________NOTE:_This_is_a_very_rare_drop_from_Crabcakes"
  },
  "DesertB1": {
    "displayName": "Coconotnotto",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "How_many_O's_are_in_this_item's_name?_Yep,_you're_right,_there's_six!_Good_job!"
  },
  "DesertB2": {
    "displayName": "Furled_Flag",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_an_American_Flag_with_red_paint_spilled_on_all_the_non-red_bits..._no_wait,_it's_the_German_Flag,_but_they_ran_out_of_black_and_yellow_material."
  },
  "DesertB3": {
    "displayName": "Pincer_Arm",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "That_looks_sharp!_Is_probably_what_the_pincermin_said_before_you_cut_his_arm_off."
  },
  "DesertB4": {
    "displayName": "Potato_Remains",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Mashed_potatos,_I_get_it!"
  },
  "DesertC1": {
    "displayName": "High_Steaks",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": ""
  },
  "DesertC2": {
    "displayName": "Wakka_Cherry",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Weoweoweoweowdingding!"
  },
  "DesertC2b": {
    "displayName": "Ghost",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "In_case_you_haven't_noticed,_these_are_all_references_to_the_famous_early_90s_videogame_called_Gex!_This_description_is_like_a_bad_joke_at_Louis_CK's_house!"
  },
  "DesertC3": {
    "displayName": "Singlecle",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_like_a_monocle,_but_not_quite."
  },
  "DesertC4": {
    "displayName": "Shrapshell",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "The_very_tippy_top_of_the_shell,_with_some_of_the_underneath_part_attached_as_well."
  },
  "SnowA1": {
    "displayName": "Floof_Ploof",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "A_ball_of_sheep_wool._Well,_it_used_to_be_a_ball_of_ice_cream_but_then_I_re-drew_it."
  },
  "SnowA2": {
    "displayName": "Melty_Cube",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Eugh_whats_this_WATER_doing_around_my_ice???"
  },
  "SnowA2a": {
    "displayName": "Yellow_Snowflake",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Mmm_yellow,_my_favorite_flavor_of_snow!"
  },
  "SnowA3": {
    "displayName": "Moustache_Comb",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Sad_times_I_hope_I_remember_to_change_this_before_relase."
  },
  "SnowA4": {
    "displayName": "Ram_Wool",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_got_a_horn_stuck_in_it._I_guess_you_could_say_this_wool_is_kinda_"
  },
  "SnowB1": {
    "displayName": "Sticky_Stick",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_ALLLLL_sticky!"
  },
  "SnowB2": {
    "displayName": "Mamooth_Tusk",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "No_see,_this_is_a_mamOOth_tusk,_not_a_mammoth_tusk,_thats_why_you_think_it_looks_weird._Trust_me,_it's_an_incredibly_drawn_mamooth_tusk,_truly_a_work_of_art."
  },
  "SnowB2a": {
    "displayName": "Ice_Age_3",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "The_thrilling_documentary_that_captures_the_first_three_years_of_Jonathan_Ice's_life,_from_birth_to_preschool._It_also_has_thousands_of_1_Star_Ratings_online_claiming_it's_false_advertising."
  },
  "SnowB5": {
    "displayName": "Snow_Ball",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "If_you_have_two_of_these_together,_please_be_careful_what_other_objects_you_put_near_them,_I_need_to_keep_this_game_age_appropirate!"
  },
  "SnowB3": {
    "displayName": "Pen",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Click_the_pen_on,_then_hold_it_down_against_your_desk_and_let_go,_and_BAM_that_baby_will_fly_you_straight_to_the_principal's_office!"
  },
  "SnowB4": {
    "displayName": "Cracked_Glass",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Ah_Mr._Thermostat,_not_looking_so_hot_now_that_I've_broken_you_into_tiny_little_bits..._no_seriously,_I_can't_tell_the_temperature_now_that_you're_broken."
  },
  "SnowC1": {
    "displayName": "Sippy_Straw",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "This_vacuum_operated_liquid_transfer_system_is_capable_of_dispencing_over_500_mL_of_dangerous_dihydrogen_monoxide_chemical_compounds_from_one_end_to_the_other!"
  },
  "SnowC2": {
    "displayName": "Cryosnake_Skin",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Wow_this_is_just_a_cheap_recolouring_of_the_normal_snakeskin!_I_want_my_money_back!"
  },
  "SnowC3": {
    "displayName": "Audio_Cord",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Uhhhh..._which_one_which_one...??_The_red_or_the_blue???_Cmon_think_think_think.._Blue...?_'BOOOOOM'._______Wait,_this_is_an_audio_cord_description?_Whoops,_I_thought_this_was_the_Bomb_Defuser_description!!"
  },
  "SnowC4": {
    "displayName": "Contact_Lense",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_the_only_transparent_item_in_IdleOn!_If_they_weren't,_they'd_just_be_pirate_eyepatches_after_all..."
  },
  "SnowC4a": {
    "displayName": "Black_Lense",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Why_yes,_I_have_also_played_that_game_for_100s_of_hours_since_it_released_over_10_years_ago!"
  },
  "IceMountains2": {
    "displayName": "Ice_A_La_Crem",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_just_a_normal_ice_cream._It's"
  },
  "Hgg": {
    "displayName": "Minuteglass",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "It's_a_bit_small,_so_it's_not_quite_an_hourglass,_is_it."
  },
  "EfauntDrop1": {
    "displayName": "Ripped_Tunic",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "A_piece_of_Efaunt's_tunic._I_guess_it_must_have_gotten_torn_off_while_you_were_absolutely_obliterating_them_with_big_time_Damage."
  },
  "EfauntDrop2": {
    "displayName": "Ribbed_Tunic",
    "Type": "MONSTER_DROP",
    "lvReqToCraft": 15,
    "description": "Chaotic_Efaunt_is_probably_glad_you_removed_a_few_of_his_ribs,_for_uhh..._various_reasons."
  },
  "Trophy1": {
    "displayName": "King_of_Food",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 65,
    "Class": "ALL",
    "Power": 3,
    "Weapon_Power": 3,
    "STR": 10,
    "AGI": 10,
    "WIS": 10,
    "LUK": 10,
    "Defence": 25,
    "UQ1txt": "%_FOOD_EFFECT",
    "UQ1val": 20
  },
  "Trophy2": {
    "displayName": "Lucky_Lad",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "LUK": 7,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 7
  },
  "Trophy3": {
    "displayName": "Club_Member",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "BEGINNER",
    "LUK": 5,
    "Defence": 5,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 3
  },
  "Trophy4": {
    "displayName": "I_Made_This_Game",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "UQ1txt": "%_PLAYER_HEIGHT",
    "UQ1val": 100,
    "UQ2txt": "%_RED_COLOURING",
    "UQ2val": 42
  },
  "Trophy5": {
    "displayName": "Dice_Dynamo",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 1,
    "Weapon_Power": 1,
    "LUK": 5,
    "UQ1txt": "%_LUK",
    "UQ1val": 2
  },
  "Trophy6": {
    "displayName": "Blunder_Hero",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 50,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "Defence": 15,
    "UQ1txt": "%_SKILL_AFK_GAIN",
    "UQ1val": 3
  },
  "Trophy7": {
    "displayName": "Original_Gamer",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 2,
    "AGI": 2,
    "WIS": 2,
    "LUK": 2,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 2
  },
  "Trophy8": {
    "displayName": "Trailblazer",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 4,
    "Weapon_Power": 4,
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 20
  },
  "Trophy9": {
    "displayName": "Ultra_Unboxer",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 3,
    "AGI": 3,
    "WIS": 3,
    "LUK": 3,
    "Defence": 3,
    "UQ1txt": "%_DROP_CHANCE",
    "UQ1val": 3
  },
  "Trophy10": {
    "displayName": "Critter_Baron",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "AGI": 10,
    "UQ1txt": "%_AGI",
    "UQ1val": 3
  },
  "Trophy11": {
    "displayName": "YumYum_Sheriff",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 8,
    "AGI": 8,
    "WIS": 8,
    "LUK": 8,
    "Defence": 25,
    "UQ1txt": "%_BOSS_DAMAGE",
    "UQ1val": 8
  },
  "Trophy12": {
    "displayName": "Megalodon",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 5,
    "Weapon_Power": 5,
    "STR": 15,
    "Defence": 30,
    "UQ1txt": "%_CRIT_CHANCE",
    "UQ1val": 9
  },
  "Trophy13": {
    "displayName": "Club_Maestro",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 70,
    "Class": "BEGINNER",
    "Power": 1,
    "Weapon_Power": 1,
    "LUK": 20,
    "Defence": 20,
    "UQ1txt": "%_SKILL_EXP",
    "UQ1val": 35
  },
  "Trophy14": {
    "displayName": "Beach_Bro",
    "Type": "TROPHY",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Power": 2,
    "Weapon_Power": 2,
    "STR": 5,
    "AGI": 5,
    "WIS": 5,
    "LUK": 5,
    "UQ1txt": "%_MONEY",
    "UQ1val": 50
  },
  "Starlight": {
    "displayName": "Starlight_Ore",
    "Type": "ORE",
    "description": "These_ores_cannot_be_smelted_into"
  },
  "AlienTreetutorial": {
    "displayName": "Alien_Logs",
    "Type": "LOG"
  },
  "EquipmentWeapons2": {
    "displayName": "Flesh_Reaper",
    "Type": "SPEAR",
    "lvReqToCraft": 85,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 5,
    "Reach": 70,
    "Power": 690,
    "Weapon_Power": 690,
    "AGI": 80,
    "LUK": 420
  },
  "Secretstone": {
    "displayName": "Secretstone",
    "Type": "QUEST_ITEM",
    "lvReqToCraft": 88,
    "description": "It's_almost_as_if_the_very_essence"
  },
  "Timecandy1": {
    "displayName": "1_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "Hold_down_to_instantly_get_1_Hour_of_AFK_Gains."
  },
  "Timecandy2": {
    "displayName": "2_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "Hold_down_to_instantly_get_2_Hour_of_AFK_Gains."
  },
  "Timecandy3": {
    "displayName": "4_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "Hold_down_to_instantly_get_4_Hour_of_AFK_Gains."
  },
  "Timecandy4": {
    "displayName": "12_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "Twelve_hours,_that's_a_long_time!_Hold_down_to_instantly_get_12_Hour_of_AFK_Gains."
  },
  "Timecandy5": {
    "displayName": "24_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "An_entire_day,_just_like_that!_Hold_down_to_instantly_get_24_Hour_of_AFK_Gains."
  },
  "Timecandy6": {
    "displayName": "72_HR_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "The_LEGENDARY_72_Hour_candy._Hold_down_to_instantly_get_30_Seconds_of_AFK_Gai..._just_kidding,_you'll_get_72_Hours!"
  },
  "Timecandy7": {
    "displayName": "Steamy_Time_Candy",
    "Type": "TIME_CANDY",
    "lvReqToCraft": 88,
    "description": "Thanks_for_playing_on_Steam!_Hold_down_to_instantly_get_anywhere_from_10_minutes_to_24_hours_of_AFK_time!"
  },
  "InvBag1": {
    "displayName": "Inventory_Bag_A",
    "Type": "INVENTORY_G",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 20,
    "Reach": 10
  },
  "InvBag2": {
    "displayName": "Inventory_Bag_B",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 3,
    "Class": "ALL",
    "Speed": 20,
    "Reach": 10
  },
  "InvBag3": {
    "displayName": "Inventory_Bag_C",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 20,
    "Reach": 10
  },
  "InvBag4": {
    "displayName": "Inventory_Bag_D",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 10,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag5": {
    "displayName": "Inventory_Bag_E",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag6": {
    "displayName": "Inventory_Bag_F",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag7": {
    "displayName": "Inventory_Bag_G",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag8": {
    "displayName": "Inventory_Bag_H",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag9": {
    "displayName": "Inventory_Bag_I",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Speed": 165,
    "Reach": 10
  },
  "InvBag21": {
    "displayName": "Inventory_Bag_U",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag22": {
    "displayName": "Inventory_Bag_V",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag23": {
    "displayName": "Inventory_Bag_W",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag24": {
    "displayName": "Inventory_Bag_X",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag25": {
    "displayName": "Inventory_Bag_Y",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag26": {
    "displayName": "Inventory_Bag_Z",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvBag100": {
    "displayName": "Snakeskinventory_Bag",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 120,
    "Reach": 10
  },
  "InvBag101": {
    "displayName": "Totally_Normal_and_not_fake_Bag",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 20,
    "Reach": 10
  },
  "InvBag102": {
    "displayName": "Blunderbag",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 5,
    "Class": "ALL",
    "Speed": 20,
    "Reach": 10
  },
  "InvBag103": {
    "displayName": "Sandy_Satchel",
    "Type": "INVENTORY_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 20,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag104": {
    "displayName": "Bummo_Bag",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag105": {
    "displayName": "Capitalist_Case",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 15,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag106": {
    "displayName": "Wealthy_Wallet",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 35,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag107": {
    "displayName": "Prosperous_Pouch",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 70,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag108": {
    "displayName": "Sack_of_Success",
    "Type": "INVENTORY_",
    "lvReqToCraft": 2,
    "lvReqToEquip": 120,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag109": {
    "displayName": "Shivering_Sack",
    "Type": "INVENTORY_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 65,
    "Class": "ALL",
    "Reach": 10
  },
  "InvBag110": {
    "displayName": "Mamooth_Hide_Bag",
    "Type": "INVENTORY_",
    "lvReqToCraft": 1,
    "lvReqToEquip": 55,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage1": {
    "displayName": "Storage_Chest_1",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 330,
    "Reach": 10
  },
  "InvStorage2": {
    "displayName": "Storage_Chest_2",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 330,
    "Reach": 10
  },
  "InvStorage3": {
    "displayName": "Storage_Chest_3",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 330,
    "Reach": 10
  },
  "InvStorage4": {
    "displayName": "Storage_Chest_4",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 330,
    "Reach": 10
  },
  "InvStorage5": {
    "displayName": "Storage_Chest_5",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 330,
    "Reach": 10
  },
  "InvStorage6": {
    "displayName": "Storage_Chest_6",
    "Type": "STORAGE_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 170,
    "Reach": 10
  },
  "InvStorage7": {
    "displayName": "Storage_Chest_7",
    "Type": "STORAGE_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 170,
    "Reach": 10
  },
  "InvStorage8": {
    "displayName": "Storage_Chest_8",
    "Type": "STORAGE_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 170,
    "Reach": 10
  },
  "InvStorage9": {
    "displayName": "Storage_Chest_9",
    "Type": "STORAGE_",
    "lvReqToCraft": 4,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 170,
    "Reach": 10
  },
  "InvStorage10": {
    "displayName": "Storage_Chest_10",
    "Type": "STORAGE_",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage11": {
    "displayName": "Storage_Chest_11",
    "Type": "STORAGE_",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage12": {
    "displayName": "Storage_Chest_12",
    "Type": "STORAGE_",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage13": {
    "displayName": "Storage_Chest_13",
    "Type": "STORAGE_",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage14": {
    "displayName": "Storage_Chest_14",
    "Type": "STORAGE_",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "InvStorage15": {
    "displayName": "Storage_Chest_15",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage16": {
    "displayName": "Storage_Chest_16",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage17": {
    "displayName": "Storage_Chest_17",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage18": {
    "displayName": "Storage_Chest_18",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage19": {
    "displayName": "Storage_Chest_19",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage20": {
    "displayName": "Storage_Chest_20",
    "Type": "STORAGE_",
    "lvReqToCraft": 7,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage21": {
    "displayName": "Storage_Chest_21",
    "Type": "STORAGE_",
    "lvReqToCraft": 7,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 290,
    "Reach": 10
  },
  "InvStorage31": {
    "displayName": "Storage_Chest_90",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage32": {
    "displayName": "Storage_Chest_91",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage33": {
    "displayName": "Storage_Chest_92",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage34": {
    "displayName": "Storage_Chest_93",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage35": {
    "displayName": "Storage_Chest_94",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage36": {
    "displayName": "Storage_Chest_95",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage37": {
    "displayName": "Storage_Chest_96",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage38": {
    "displayName": "Storage_Chest_97",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage39": {
    "displayName": "Storage_Chest_98",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage40": {
    "displayName": "Storage_Chest_99",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage41": {
    "displayName": "Storage_Chest_99B",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorage42": {
    "displayName": "Storage_Chest_99C",
    "Type": "STORAGE_",
    "lvReqToCraft": 6,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Speed": 150,
    "Reach": 10
  },
  "InvStorageF": {
    "displayName": "Dank_Paypay_Chest",
    "Type": "STORAGE_",
    "lvReqToCraft": 3,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "Reach": 10
  },
  "Key1": {
    "displayName": "Forest_Villa_Key",
    "Type": "BOSS_KEY",
    "description": "Hold_down_to_add_these_Forest_Boss_Keys_to_your_account._Account_items_are_shared_between_all_your_Characters!"
  },
  "Key2": {
    "displayName": "Efaunt's_Tomb_Key",
    "Type": "BOSS_KEY",
    "description": "Hold_down_to_add_these_Desert_Boss_Keys_to_your_account."
  },
  "Key3": {
    "displayName": "Chizoar's_Cavern_Key",
    "Type": "BOSS_KEY",
    "description": "Hold_down_to_add_these_Iceland_Boss_Keys_to_your_account."
  },
  "ObolFrag": {
    "displayName": "Obol_Fragment",
    "Type": "OBOL_FRAGMENT",
    "description": "Hold_down_to_add_these_Obol_Fragments_to_your_account._Account_items_are_shared_between_all_your_Characters!"
  },
  "DoubleAFKtix": {
    "displayName": "Double_AFK_Gain_Ticket",
    "Type": "TICKET",
    "description": "Hold_down_to_add_these_Double_AFK_tickets_to_your_account._Account_items_are_shared_between_all_your_Characters!"
  },
  "TixCol": {
    "displayName": "Colosseum_Ticket",
    "Type": "TICKET",
    "description": "Hold_down_to_add_these_Colosseum_tickets_to_your_account._Account_items_are_shared_between_all_your_Characters!"
  },
  "DeliveryBox": {
    "displayName": "Delivery_Box",
    "Type": "BOX",
    "description": "Hold_down_to_add_these_Delivery_Boxes_to_your_Post-Office_Upgrade_amount!_These_will_be_shared_between_all_your_Characters!"
  },
  "SilverPen": {
    "displayName": "Silver_Pen",
    "Type": "OFFICE_PEN",
    "description": "Hold_down_to_add_a_Silver_Pen_to_your_Post-Office!_You_can_use_it_to_skip_a_Delivery!"
  },
  "PremiumGem": {
    "displayName": "Gem",
    "Type": "GEM",
    "description": "Hold_down_to_add_these_gems_to_your_account._You_can_then_spend_them_in_the_Gem_Shop!"
  },
  "TalentPoint1": {
    "displayName": "Talent_Point_Tab_1",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_first_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "TalentPoint2": {
    "displayName": "Talent_Point_Tab_2",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_second_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "TalentPoint3": {
    "displayName": "Talent_Point_Tab_3",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_third_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "TalentPoint4": {
    "displayName": "Talent_Point_Tab_4",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_fourth_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "TalentPoint5": {
    "displayName": "Talent_Point_Tab_4",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_fifth_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "TalentPoint6": {
    "displayName": "Talent_Point_Special_Tab",
    "Type": "TALENT_POINT",
    "description": "Hold_down_to_gain_a_Talent_Point_for_the_Special_tab_of_talents._THIS_APPLIES_TO_ALL_CHARACTERS,_even_ones_you_haven't_made_yet,_so_it_doesn't_matter_which_character_uses_this_item."
  },
  "Line1": {
    "displayName": "Copper_Twine",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line2": {
    "displayName": "Silver_Twine",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line3": {
    "displayName": "Gold_Twine",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line4": {
    "displayName": "Platinum_Twine",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line5": {
    "displayName": "Leafy_Vines",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line6": {
    "displayName": "Fun_Flags",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line7": {
    "displayName": "Electrical_Wiring",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line8": {
    "displayName": "Wiener_Links",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line9": {
    "displayName": "Zeus_Gon_Fishin",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line10": {
    "displayName": "Needledrop",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!_Also_turns_your_character_into_Idleon's_busiest_music_nerd_for_0.01_seconds."
  },
  "Line11": {
    "displayName": "Spoons_Lol",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line12": {
    "displayName": "Its_a_Boy_Celebration",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line13": {
    "displayName": "Its_a_Girl_Celebration",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Line14": {
    "displayName": "Its_Alright_Celebration",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight1": {
    "displayName": "Wormie_Weight",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight2": {
    "displayName": "Iron_Hook",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight3": {
    "displayName": "Basic_Bobber",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight4": {
    "displayName": "Dualhook_Prongs",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight5": {
    "displayName": "One_Pound_of_Steel",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight6": {
    "displayName": "One_Pound_of_Feathers",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight7": {
    "displayName": "Massless_Unit_for_Physics_Questions",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight8": {
    "displayName": "Literal_Elephant",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight9": {
    "displayName": "Valve_Patented_Circle_Thingies",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight10": {
    "displayName": "Dynamite",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight11": {
    "displayName": "Not_Dynamite",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!_Also,_the_name_is_technically_true."
  },
  "Weight12": {
    "displayName": "Triple_Threat",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!"
  },
  "Weight13": {
    "displayName": "Crash_Box",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!_Woah._Woah!_WOAAHHH!!!"
  },
  "Weight14": {
    "displayName": "Fat_Albert",
    "Type": "FISHING_ACCESSORY",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_add_this_accessory_to_it_to_your_fishing_toolkit,_where_it_can_be_accessed_by_all_characters!_Oh_Albert,_what_were_you_thinking?_Seriously,_I_genuinely_can't_comprehend_what_you_were_thinking_haha!"
  },
  "CardsA0": {
    "displayName": "CardsA0",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "mushG"
  },
  "CardsA1": {
    "displayName": "CardsA1",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "mushR"
  },
  "CardsA2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "frogG"
  },
  "CardsA3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "beanG"
  },
  "CardsA4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "slimeG"
  },
  "CardsA5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "snakeG"
  },
  "CardsA6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "carrotO"
  },
  "CardsA7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "goblinG"
  },
  "CardsA8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "plank"
  },
  "CardsA9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "frogBIG"
  },
  "CardsA10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "poopSmall"
  },
  "CardsA11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ratB"
  },
  "CardsA12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "branch"
  },
  "CardsA13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "acorn"
  },
  "CardsA14": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Crystal0"
  },
  "CardsA15": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "poopD"
  },
  "CardsA16": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "mushW"
  },
  "CardsB1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "jarSand"
  },
  "CardsB2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "mimicA"
  },
  "CardsB3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "crabcake"
  },
  "CardsB4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "coconut"
  },
  "CardsB5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "sandcastle"
  },
  "CardsB6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "pincermin"
  },
  "CardsB7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "potato"
  },
  "CardsB8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "steak"
  },
  "CardsB9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "moonman"
  },
  "CardsB10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "sandgiant"
  },
  "CardsB11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "snailZ"
  },
  "CardsB12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "shovelR"
  },
  "CardsB13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Crystal1"
  },
  "CardsB14": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bandit_Bob"
  },
  "CardsC1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Copper"
  },
  "CardsC2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Iron"
  },
  "CardsC3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Gold"
  },
  "CardsC4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "OakTree"
  },
  "CardsC5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "BirchTree"
  },
  "CardsC6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "JungleTree"
  },
  "CardsC7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ForestTree"
  },
  "CardsC8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Fish1"
  },
  "CardsC9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Fish2"
  },
  "CardsC10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Fish3"
  },
  "CardsC11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug1"
  },
  "CardsC12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug2"
  },
  "CardsC13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CopperBar"
  },
  "CardsC14": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "IronBar"
  },
  "CardsC15": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "GoldBar"
  },
  "CardsC16": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ForgeA"
  },
  "CardsD1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Dementia"
  },
  "CardsD2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Plat"
  },
  "CardsD3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Void"
  },
  "CardsD4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Lustre"
  },
  "CardsD5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ToiletTree"
  },
  "CardsD6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "StumpTree"
  },
  "CardsD7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "PalmTree"
  },
  "CardsD8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SaharanFoal"
  },
  "CardsD9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug4"
  },
  "CardsD10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug3"
  },
  "CardsD11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Fish4"
  },
  "CardsD12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "_"
  },
  "CardsD13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "_"
  },
  "CardsD16": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ForgeB"
  },
  "CardsD17": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SoulCard1"
  },
  "CardsD18": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SoulCard2"
  },
  "CardsD19": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard1"
  },
  "CardsD20": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard2"
  },
  "CardsD21": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard3"
  },
  "CardsE0": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "sheep"
  },
  "CardsE1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "flake"
  },
  "CardsE2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "stache"
  },
  "CardsE3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "bloque"
  },
  "CardsE4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "mamoth"
  },
  "CardsE5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "snowball"
  },
  "CardsE6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "penguin"
  },
  "CardsE7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "thermostat"
  },
  "CardsE8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "glass"
  },
  "CardsE9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "snakeB"
  },
  "CardsE10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "speaker"
  },
  "CardsE11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "eye"
  },
  "CardsE12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "skele"
  },
  "CardsE13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "skele2"
  },
  "CardsE14": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ram"
  },
  "CardsE15": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Crystal2"
  },
  "CardsF1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "whoops"
  },
  "CardsF2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Tree7"
  },
  "CardsF3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SoulCard3"
  },
  "CardsF4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard4"
  },
  "CardsF5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard5"
  },
  "CardsF6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard6"
  },
  "CardsF7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "CritterCard7"
  },
  "CardsF8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug5"
  },
  "CardsF9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Bug6"
  },
  "CardsF10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SoulCard4"
  },
  "CardsF11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SoulCard5"
  },
  "CardsY0": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "ghost"
  },
  "CardsY1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "xmasEvent"
  },
  "CardsY2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "xmasEvent2"
  },
  "CardsY3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "slimeR"
  },
  "CardsY4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "loveEvent"
  },
  "CardsY5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "loveEvent2"
  },
  "CardsY6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "sheepB"
  },
  "CardsY7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "snakeY"
  },
  "CardsY8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "EasterEvent1"
  },
  "CardsY9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "EasterEvent2"
  },
  "CardsY10": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "crabcakeB"
  },
  "CardsY11": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SummerEvent1"
  },
  "CardsY12": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "SummerEvent2"
  },
  "CardsY13": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "shovelY"
  },
  "CardsZ0": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "babayaga"
  },
  "CardsZ1": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "poopBig"
  },
  "CardsZ2": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "wolfA"
  },
  "CardsZ3": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Boss2A"
  },
  "CardsZ4": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "wolfB"
  },
  "CardsZ5": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "babaHour"
  },
  "CardsZ6": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "babaMummy"
  },
  "CardsZ7": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Boss2B"
  },
  "CardsZ8": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Boss3A"
  },
  "CardsZ9": {
    "displayName": "DONTFILL",
    "Type": "CARD",
    "lvReqToCraft": 2,
    "description": "Boss3B"
  },
  "CardPack1": {
    "displayName": "Newbie_Card_Pack",
    "Type": "CARD_PACK",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_open_the_pack!_The_cards_drop_on_the_ground,_make_sure_to_pick_them_up!!"
  },
  "CardPack2": {
    "displayName": "Ancient_Card_Pack",
    "Type": "CARD_PACK",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_open_the_pack!_The_cards_drop_on_the_ground,_make_sure_to_pick_them_up!!"
  },
  "CardPack3": {
    "displayName": "Eternal_Card_Pack",
    "Type": "CARD_PACK",
    "lvReqToCraft": 2,
    "description": "Hold_down_to_open_the_pack!_The_cards_drop_on_the_ground,_make_sure_to_pick_them_up!!"
  },
  "EquipmentHats31": {
    "displayName": "Smitty's_Bubble_Blowing_Hat",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats32": {
    "displayName": "Bandit_Bob_Mask",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats33": {
    "displayName": "Paper_Bag",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats34": {
    "displayName": "Parasite",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats35": {
    "displayName": "Diamon_Horns",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 7
  },
  "EquipmentHats36": {
    "displayName": "Halloween_Pumpkin",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats40": {
    "displayName": "Pardoned_Turkey",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats37": {
    "displayName": "Hotdog_Hero",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats38": {
    "displayName": "Invisible_Hat",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats46": {
    "displayName": "Strawbiggy",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats47": {
    "displayName": "Pop_Cat",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats48": {
    "displayName": "Dairy_Dunk",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats49": {
    "displayName": "The_Classic",
    "Class": "ALL",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats50": {
    "displayName": "Green_Beanie",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats43": {
    "displayName": "Snowman",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats45": {
    "displayName": "Giftmas_Tree",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 10,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats57": {
    "displayName": "Big_Bunny",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 11,
    "Upgrade_Slots_Left": 5
  },
  "EquipmentHats62": {
    "displayName": "Fluffy_Ramsy",
    "Type": "PREMIUM_HELMET",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "UQ1txt": "%_XP_FROM_MONSTERS",
    "UQ1val": 11,
    "Upgrade_Slots_Left": 5
  },
  "GemP1": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemP9": {
    "displayName": "Quality_Obol_Stack",
    "Type": "OBOL_STACK",
    "lvReqToCraft": 88,
    "description": "Hold_down_and_3_obols_will_drop_at_your_feet!_YOU_MUST_BE_IN_WORLD_2_TOWN_TO_USE_THIS!_This_way_you_can_trash_other_obols_incase_you're_out_of_space!"
  },
  "GemP10": {
    "displayName": "Marvelous_Obol_Stack",
    "Type": "OBOL_STACK",
    "lvReqToCraft": 88,
    "description": "Hold_down_and_3_obols_will_drop_at_your_feet!_YOU_MUST_BE_IN_WORLD_2_TOWN_TO_USE_THIS!_This_way_you_can_trash_other_obols_incase_you're_out_of_space!"
  },
  "GemQ1": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ2": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ3": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ4": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ5": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ6": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ7": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ8": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  },
  "GemQ9": {
    "displayName": "Infinite_Forge",
    "Type": "ERROR",
    "lvReqToCraft": 5,
    "lvReqToEquip": 1,
    "Class": "ALL",
    "STR": 1,
    "AGI": 1,
    "WIS": 1,
    "LUK": 1,
    "Upgrade_Slots_Left": 5
  }
};
const vialMapping = {
  "0": {
    "name": "COPPER_CORONA",
    "mainItem": "Copper",
    "desc": "Orange_bubble_cauldron_brew_speed_is_increased_by_+{%",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Copper",
        "name": "Copper_Ore"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "1": {
    "name": "SIPPY_SPLINTERS",
    "mainItem": "OakTree",
    "desc": "Green_bubble_cauldron_brew_speed_is_increased_by_+{%",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "OakTree",
        "name": "Oak_Logs"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "2": {
    "name": "MUSHROOM_SOUP",
    "mainItem": "Grasslands1",
    "desc": "Yellow_cauldron_brew_speed_is_increased_by_+{%",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Grasslands1",
        "name": "Spore_Cap"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "3": {
    "name": "SPOOL_SPRITE",
    "mainItem": "CraftMat1",
    "desc": "Purple_cauldron_brew_speed_is_increased_by_+{%",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "CraftMat1",
        "name": "Thread"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "4": {
    "name": "BARIUM_MIXTURE",
    "mainItem": "CopperBar",
    "desc": "+{_Water_Droplet_max_capacity._Thats_the_1st_liquid_type_in_Alchemy,_btw.",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "CopperBar",
        "name": "Copper_Bar"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "5": {
    "name": "DIETER_DRINK",
    "mainItem": "Grasslands3",
    "desc": "Monsters_drop_+{%_more_money.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Grasslands3",
        "name": "Bean_Slices"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "6": {
    "name": "SKINNY_0_CAL",
    "mainItem": "Jungle2",
    "desc": "+{%_chance_to_get_double_points_when_depositing_statues._So_like..._if_you_deposit_one_statue,_it_might_count_as_one!_Or_two.",
    "func": "add",
    "x1": 2.5,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Jungle2",
        "name": "Snake_Skin"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "7": {
    "name": "THUMB_POW",
    "mainItem": "CraftMat5",
    "desc": "When_converting_Skill_EXP_into_Class_EXP_using_the_'EXP_CONVERTER'_star_talent,_you'll_get_{%_more_Class_EXP_than_you_usually_do.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "CraftMat5",
        "name": "Trusty_Nails"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "8": {
    "name": "JUNGLE_JUICE",
    "mainItem": "JungleTree",
    "desc": "+{%_liquid_regen_rate_for_all_liquid_cauldrons._Yes,_even_the_secret_one!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "JungleTree",
        "name": "Jungle_Logs"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "9": {
    "name": "BARLEY_BREW",
    "mainItem": "IronBar",
    "desc": "Alchemy_bubble_upgrade_costs_are_{%_lower_for_all_bubbles!_Even_the_giraffe_bubbles_that_look_strangely_like_elephants!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "IronBar",
        "name": "Iron_Bar"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "10": {
    "name": "ANEARFUL",
    "mainItem": "Forest1",
    "desc": "+{%_Card_drop_rate._Even_works_offline,_just_like_it_always_has!_What_do_you_mean_this_used_to_say_something_different...?",
    "func": "add",
    "x1": 2,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Forest1",
        "name": "Glublin_Ear"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "11": {
    "name": "TEA_WITH_PEA",
    "mainItem": "ToiletTree",
    "desc": "+{_Liquid_Nitrogen_max_capacity._Thats_the_2nd_liquid_type_in_Alchemy,_btw.",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "ToiletTree",
        "name": "Potty_Rolls"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "12": {
    "name": "GOLD_GUZZLE",
    "mainItem": "Gold",
    "desc": "+{%_Shop_sell_price.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Gold",
        "name": "Gold_Ore"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "13": {
    "name": "RAMIFICOCTION",
    "mainItem": "Forest3",
    "desc": "+{_Talent_Points_for_Tab_1._Shout_out_to_that_1_person_who'll_make_it_this_far_without_knowing_what_talents_are,_you're_my_hero!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Forest3",
        "name": "Bullfrog_Horn"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "14": {
    "name": "SEAWATER",
    "mainItem": "Fish1",
    "desc": "+{%_chance_for_1_kill_to_count_for_2_when_trying_to_open_new_portals,_but_only_while_actively_playing._One,_two,_buckle_my_shoe.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Fish1",
        "name": "Goldfish"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "15": {
    "name": "TAIL_TIME",
    "mainItem": "Sewers2",
    "desc": "+{_Weapon_Power._This_is_gonna_be_OP_in_later_worlds_I_can_already_tell.",
    "func": "add",
    "x1": 0.5,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Sewers2",
        "name": "Rats_Tail"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "16": {
    "name": "FLY_IN_MY_DRINK",
    "mainItem": "Bug1",
    "desc": "Eww_go_get_me_another_one,_I_can't_drink_this!_...what,_why_are_you_looking_at_me_like_that?_OH_right,_uh,_this_gives_+{_base_Accuracy.",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Bug1",
        "name": "Fly"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "17": {
    "name": "MIMICRAUGHT",
    "mainItem": "DesertA2",
    "desc": "+{%_EXP_from_monsters._Sorry,_I_know_this_is_a_lame_bonus._Send_me_an_email_if_you_want_me_change_it_to_+{%_NPC_dialogue_talking_speed.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "DesertA2",
        "name": "Megalodon_Tooth"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "18": {
    "name": "BLUE_FLAV",
    "mainItem": "Plat",
    "desc": "-{%_material_cost_for_stamps._You_know_how_it's_hard_to_increase_stamps_max_levels?_Well_this_kinda_makes_that_a_bit_less_factual!",
    "func": "decay",
    "x1": 30,
    "x2": 7,
    "itemReq": [
      {
        "rawName": "Plat",
        "name": "Platinum_Ore"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "19": {
    "name": "SLUG_SLURP",
    "mainItem": "Fish2",
    "desc": "+{_Post_Office_Box_Points_for_every_character,_and_easily_the_best_bonus_in_the_game._A_box_will_never_abandon_you!",
    "func": "add",
    "x1": 2,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Fish2",
        "name": "Hermit_Can"
      },
      {
        "rawName": "Liquid1",
        "name": "Liquid1"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "20": {
    "name": "PICKLE_JAR",
    "mainItem": "BobJoePickle",
    "desc": "+{%_Nothing._Absolutely_nothing,_now_and_forever._It's_a_darn_pickle,_what_were_you_expecting?",
    "func": "add",
    "x1": 50,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "BobJoePickle",
        "name": "BobJoePickle"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "21": {
    "name": "FUR_REFRESHER",
    "mainItem": "SnowA1",
    "desc": "+{%_higher_Shiny_Critter_chance._This_is_a_multiplier,_so_+1%_from_this_vial_means_1.01x,_so_5%_shiny_chance_would_go_to_5.05%.",
    "func": "add",
    "x1": 2,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowA1",
        "name": "Floof_Ploof"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "22": {
    "name": "SIPPY_SOUL",
    "mainItem": "Soul1",
    "desc": "+{_Talent_Points_for_Tab_2.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Soul1",
        "name": "Forest_Soul"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "23": {
    "name": "CRAB_JUICE",
    "mainItem": "Critter2",
    "desc": "+{_Starting_points_in_Worship_Tower_Defence._Of_course,_a_true_balloon_monkey_wouldn't_accept_handouts_like_this.",
    "func": "add",
    "x1": 4,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Critter2",
        "name": "Crabbo"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "24": {
    "name": "VOID_VIAL",
    "mainItem": "Void",
    "desc": "+{%_Mining_Efficiency.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Void",
        "name": "Void_Ore"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "25": {
    "name": "RED_MALT",
    "mainItem": "Refinery1",
    "desc": "+{%_Refinery_Cycle_Speed._I_just_want_to_see_you_squirm_a_bit_more_as_you_decide_where_to_spend_your_precious_salts_hahahaha!!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Refinery1",
        "name": "Redox_Salts"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "26": {
    "name": "EW_GROSS_GROSS",
    "mainItem": "Bug5",
    "desc": "+{%_Catching_Efficiency.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Bug5",
        "name": "Mosquisnow"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "27": {
    "name": "THE_SPANISH_SAHARA",
    "mainItem": "SaharanFoal",
    "desc": "+{%_Choppin_Efficiency.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SaharanFoal",
        "name": "Tundra_Logs"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "28": {
    "name": "POISON_TINCTURE",
    "mainItem": "Critter1A",
    "desc": "Eagle_Eye_Trap-O-Vision_gives_+{%_more_critters._It_will_always_give_less_than_if_you_manually_collected_the_traps_though.",
    "func": "add",
    "x1": 3,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Critter1A",
        "name": "Poison_Froge"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "29": {
    "name": "ETRUSCAN_LAGER",
    "mainItem": "SnowB2",
    "desc": "+{%_Fishing_Efficiency.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowB2",
        "name": "Mamooth_Tusk"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "30": {
    "name": "CHONKER_CHUG",
    "mainItem": "Soul2",
    "desc": "+{%_Talent_Book_Library_checkout_speed._",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Soul2",
        "name": "Dune_Soul"
      },
      {
        "rawName": "Liquid2",
        "name": "Liquid2"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "31": {
    "name": "BUBONIC_BURP",
    "mainItem": "Critter4",
    "desc": "+{_Cog_Inventory_spaces._DONT_PANIC!!!_I_KNOW_HOW_ALARMING_IT_IS_THAT_A_VIAL_FINALLY_GIVES_A_USEFUL_BONUS_FOR_ONCE,_BUT_STAY_CALM!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Critter4",
        "name": "Mousey"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "32": {
    "name": "VISIBLE_INK",
    "mainItem": "SnowB3",
    "desc": "+{%_Construction_Exp_gain.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowB3",
        "name": "Pen"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "33": {
    "name": "ORANGE_MALT",
    "mainItem": "Refinery2",
    "desc": "+{%_higher_Shiny_Critter_chance._This_stacks_with_the_shiny_chance_from_the_Fur_Refresher_vial._You_see,_they_have_the_same_shaped_vial.",
    "func": "add",
    "x1": 5,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Refinery2",
        "name": "Explosive_Salts"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "34": {
    "name": "SNOW_SLURRY",
    "mainItem": "SnowB5",
    "desc": "+{%_Printer_sample_size._My_my_there_are_a_lot_of_these_'sample_size'_bonuses_in_the_game..._too_many...",
    "func": "add",
    "x1": 0.5,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowB5",
        "name": "Snow_Ball"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "35": {
    "name": "SLOWERGY_DRINK",
    "mainItem": "Soul4",
    "desc": "+{%_Base_Multikill_per_Multikill_Tier_for_all_worlds._Stack_them_skulls!",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Soul4",
        "name": "Frigid_Soul"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "36": {
    "name": "SIPPY_CUP",
    "mainItem": "SnowC1",
    "desc": "+{%_Cog_production_speed.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowC1",
        "name": "Sippy_Straw"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "37": {
    "name": "BUNNY_BREW",
    "mainItem": "Critter7",
    "desc": "+{_Talent_Points_for_Tab_3.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Critter7",
        "name": "Bunny"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "38": {
    "name": "40-40_PURITY",
    "mainItem": "SnowC4",
    "desc": "+{_Liquid_Mercury_max_capacity._Thats_the_3rd_liquid_type_in_Alchemy,_btw.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "SnowC4",
        "name": "Contact_Lense"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "39": {
    "name": "SPOOK_PINT",
    "mainItem": "Soul6",
    "desc": "+{%_base_Giant_Monster_spawn_rate.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Soul6",
        "name": "Cryo_Soul"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  },
  "40": {
    "name": "GOOSEY_GLUG",
    "mainItem": "Critter9",
    "desc": "You_know,_I_was_talking_to_the_goose_in_that_vial,_and_they_just_aren't_ready_to_give_you_a_bonus.",
    "func": "add",
    "x1": 1,
    "x2": 0,
    "itemReq": [
      {
        "rawName": "Critter9",
        "name": "Honker"
      },
      {
        "rawName": "Liquid3",
        "name": "Liquid3"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      },
      {
        "rawName": "Blank",
        "name": "Blank"
      }
    ]
  }
};
const stampsMap = {
  "combat": {
    "0": {
      "displayName": "Sword_Stamp",
      "rawName": "StampA1",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 20,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}_Base_Damage",
      "itemReq": [
        {
          "name": "Spore_Cap",
          "rawName": "Grasslands1"
        }
      ]
    },
    "1": {
      "displayName": "Heart_Stamp",
      "rawName": "StampA2",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Oak_Logs",
          "rawName": "OakTree"
        }
      ]
    },
    "2": {
      "displayName": "Mana_Stamp",
      "rawName": "StampA3",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_Base_MP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "3": {
      "displayName": "Tomahawk_Stamp",
      "rawName": "StampA4",
      "func": "decay",
      "x1": 6,
      "x2": 40,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 15,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Total_Damage",
      "itemReq": [
        {
          "name": "Copper_Bar",
          "rawName": "CopperBar"
        }
      ]
    },
    "4": {
      "displayName": "Target_Stamp",
      "rawName": "StampA5",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Accuracy",
      "itemReq": [
        {
          "name": "Thread",
          "rawName": "CraftMat1"
        }
      ]
    },
    "5": {
      "displayName": "Shield_Stamp",
      "rawName": "StampA6",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 50,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Iron_Ore",
          "rawName": "Iron"
        }
      ]
    },
    "6": {
      "displayName": "Longsword_Stamp",
      "rawName": "StampA7",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 50,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Damage",
      "itemReq": [
        {
          "name": "Bean_Slices",
          "rawName": "Grasslands3"
        }
      ]
    },
    "7": {
      "displayName": "Kapow_Stamp",
      "rawName": "StampA8",
      "func": "decay",
      "x1": 8,
      "x2": 40,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 50,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Critical_Damage",
      "itemReq": [
        {
          "name": "Trusty_Nails",
          "rawName": "CraftMat5"
        }
      ]
    },
    "8": {
      "displayName": "Fist_Stamp",
      "rawName": "StampA9",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 50,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_STR",
      "itemReq": [
        {
          "name": "Bleach_Logs",
          "rawName": "BirchTree"
        }
      ]
    },
    "9": {
      "displayName": "Battleaxe_Stamp",
      "rawName": "StampA10",
      "func": "decay",
      "x1": 10,
      "x2": 40,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 4,
      "effect": "{}%_Total_Damage",
      "itemReq": [
        {
          "name": "Grass_Leaf",
          "rawName": "Leaf1"
        }
      ]
    },
    "10": {
      "displayName": "Agile_Stamp",
      "rawName": "StampA11",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 1,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 4,
      "effect": "{}_AGI",
      "itemReq": [
        {
          "name": "Copper_Chopper",
          "rawName": "EquipmentToolsHatchet3"
        }
      ]
    },
    "11": {
      "displayName": "Vitality_Stamp",
      "rawName": "StampA12",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Snake_Skin",
          "rawName": "Jungle2"
        }
      ]
    },
    "12": {
      "displayName": "Book_Stamp",
      "rawName": "StampA13",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 20,
      "baseCoinCost": 50,
      "powCoinBase": 1.35,
      "powMatBase": 5,
      "effect": "{}_WIS",
      "itemReq": [
        {
          "name": "Iron_Bar",
          "rawName": "IronBar"
        }
      ]
    },
    "13": {
      "displayName": "Manamoar_Stamp",
      "rawName": "StampA14",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 25,
      "baseCoinCost": 75,
      "powCoinBase": 1.32,
      "powMatBase": 6,
      "effect": "{}_Base_MP",
      "itemReq": [
        {
          "name": "Glublin_Ear",
          "rawName": "Forest1"
        }
      ]
    },
    "14": {
      "displayName": "Clover_Stamp",
      "rawName": "StampA15",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 1,
      "baseCoinCost": 300,
      "powCoinBase": 1.38,
      "powMatBase": 2,
      "effect": "{}_LUK",
      "itemReq": [
        {
          "name": "Iron_Platebody",
          "rawName": "EquipmentShirts12"
        }
      ]
    },
    "15": {
      "displayName": "Scimitar_Stamp",
      "rawName": "StampA16",
      "func": "add",
      "x1": 3,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 75,
      "baseCoinCost": 2000,
      "powCoinBase": 1.33,
      "powMatBase": 7,
      "effect": "{}_Base_Damage",
      "itemReq": [
        {
          "name": "Goldfish",
          "rawName": "Fish1"
        }
      ]
    },
    "16": {
      "displayName": "Bullseye_Stamp",
      "rawName": "StampA17",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 100,
      "baseCoinCost": 5000,
      "powCoinBase": 1.36,
      "powMatBase": 10,
      "effect": "{}_Base_Accuracy",
      "itemReq": [
        {
          "name": "Sentient_Cereal",
          "rawName": "Bug3"
        }
      ]
    },
    "17": {
      "displayName": "Feather_Stamp",
      "rawName": "StampA18",
      "func": "decay",
      "x1": 5,
      "x2": 50,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 2500,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Move_Speed",
      "itemReq": [
        {
          "name": "Coconotnotto",
          "rawName": "DesertB1"
        }
      ]
    },
    "18": {
      "displayName": "Polearm_Stamp",
      "rawName": "StampA19",
      "func": "decay",
      "x1": 16,
      "x2": 40,
      "reqItemMultiplicationLevel": 6,
      "baseMatCost": 1,
      "baseCoinCost": 3000,
      "powCoinBase": 1.3,
      "powMatBase": 2,
      "effect": "{}%_Total_Damage",
      "itemReq": [
        {
          "name": "Steel_Axe",
          "rawName": "TestObj7"
        }
      ]
    },
    "19": {
      "displayName": "Violence_Stamp",
      "rawName": "StampA20",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 10,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_STR",
      "itemReq": [
        {
          "name": "Dementia_Ore",
          "rawName": "Dementia"
        }
      ]
    },
    "20": {
      "displayName": "Buckler_Stamp",
      "rawName": "StampA21",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 7,
      "baseMatCost": 25,
      "baseCoinCost": 2200,
      "powCoinBase": 1.305,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Platinum_Bar",
          "rawName": "PlatBar"
        }
      ]
    },
    "21": {
      "displayName": "FILLER",
      "rawName": "StampA22",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "22": {
      "displayName": "Sukka_Foo",
      "rawName": "StampA23",
      "func": "decay",
      "x1": 24,
      "x2": 60,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 3,
      "baseCoinCost": 10000,
      "powCoinBase": 1.34,
      "powMatBase": 5,
      "effect": "{}%_Boss_Damage",
      "itemReq": [
        {
          "name": "Amarok_Slab",
          "rawName": "Quest17"
        }
      ]
    },
    "23": {
      "displayName": "Arcane_Stamp",
      "rawName": "StampA24",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 50,
      "baseCoinCost": 1550,
      "powCoinBase": 1.36,
      "powMatBase": 7,
      "effect": "{}_Base_WIS",
      "itemReq": [
        {
          "name": "Gold_Bar",
          "rawName": "GoldBar"
        }
      ]
    },
    "24": {
      "displayName": "FILLER",
      "rawName": "StampA25",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 5000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "25": {
      "displayName": "Steve_Sword",
      "rawName": "StampA26",
      "func": "decay",
      "x1": 20,
      "x2": 60,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 150,
      "baseCoinCost": 10000,
      "powCoinBase": 1.32,
      "powMatBase": 5,
      "effect": "{}%_Total_Damage",
      "itemReq": [
        {
          "name": "Fruitfly",
          "rawName": "Bug4"
        }
      ]
    },
    "26": {
      "displayName": "Blover_Stamp",
      "rawName": "StampA27",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 100,
      "baseCoinCost": 25000,
      "powCoinBase": 1.39,
      "powMatBase": 7,
      "effect": "{}_Base_LUK",
      "itemReq": [
        {
          "name": "Jellyfish",
          "rawName": "Fish3"
        }
      ]
    },
    "27": {
      "displayName": "Stat_Graph_Stamp",
      "rawName": "StampA28",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 2,
      "baseCoinCost": 2000,
      "powCoinBase": 1.36,
      "powMatBase": 2,
      "effect": "{}_All_Stats",
      "itemReq": [
        {
          "name": "Mystery_Upgrade_Stone_I",
          "rawName": "StoneZ1"
        }
      ]
    },
    "28": {
      "displayName": "FILLER",
      "rawName": "StampA29",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "29": {
      "displayName": "FILLER",
      "rawName": "StampA30",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "30": {
      "displayName": "FILLER",
      "rawName": "StampA31",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "31": {
      "displayName": "FILLER",
      "rawName": "StampA32",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "32": {
      "displayName": "FILLER",
      "rawName": "StampA33",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "33": {
      "displayName": "FILLER",
      "rawName": "StampA34",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "34": {
      "displayName": "FILLER",
      "rawName": "StampA35",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_Defence",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    }
  },
  "skills": {
    "0": {
      "displayName": "Pickaxe_Stamp",
      "rawName": "StampB1",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}_Mining_Efficiency",
      "itemReq": [
        {
          "name": "Oak_Logs",
          "rawName": "OakTree"
        }
      ]
    },
    "1": {
      "displayName": "Hatchet_Stamp",
      "rawName": "StampB2",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Choppin_Efficiency",
      "itemReq": [
        {
          "name": "Thread",
          "rawName": "CraftMat1"
        }
      ]
    },
    "2": {
      "displayName": "Anvil_Zoomer_Stamp",
      "rawName": "StampB3",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Anvil_Production_Spd",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "3": {
      "displayName": "Lil'_Mining_Baggy_Stamp",
      "rawName": "StampB4",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Mining_Carry_Cap",
      "itemReq": [
        {
          "name": "Jungle_Logs",
          "rawName": "JungleTree"
        }
      ]
    },
    "4": {
      "displayName": "Twin_Ores_Stamp",
      "rawName": "StampB5",
      "func": "decay",
      "x1": 15,
      "x2": 40,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 1,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 3,
      "effect": "{}%_Multi_Ore_Chance",
      "itemReq": [
        {
          "name": "Thief_Hood",
          "rawName": "EquipmentHats3"
        }
      ]
    },
    "5": {
      "displayName": "Choppin'_Bag_Stamp",
      "rawName": "StampB6",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Choppin_Carry_Cap",
      "itemReq": [
        {
          "name": "Carrot_Cube",
          "rawName": "Jungle3"
        }
      ]
    },
    "6": {
      "displayName": "Duplogs_Stamp",
      "rawName": "StampB7",
      "func": "decay",
      "x1": 15,
      "x2": 40,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 1,
      "baseCoinCost": 20000,
      "powCoinBase": 1.3,
      "powMatBase": 3,
      "effect": "{}%_Multi_Log_Chance",
      "itemReq": [
        {
          "name": "Militia_Helm",
          "rawName": "EquipmentHats20"
        }
      ]
    },
    "7": {
      "displayName": "Matty_Bag_Stamp",
      "rawName": "StampB8",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 1,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 2,
      "effect": "{}_Material_Carry_Cap",
      "itemReq": [
        {
          "name": "Cramped_Material_Pouch",
          "rawName": "MaxCapBagM2"
        }
      ]
    },
    "8": {
      "displayName": "Smart_Dirt_Stamp",
      "rawName": "StampB9",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 80,
      "powCoinBase": 1.35,
      "powMatBase": 6,
      "effect": "{}%_Mining_Exp",
      "itemReq": [
        {
          "name": "Plank",
          "rawName": "Forest2"
        }
      ]
    },
    "9": {
      "displayName": "Cool_Diggy_Tool_Stamp",
      "rawName": "StampB10",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 1,
      "baseCoinCost": 35000,
      "powCoinBase": 1.4,
      "powMatBase": 2,
      "effect": "{}_Mining_Efficiency",
      "itemReq": [
        {
          "name": "Iron_Hatchet",
          "rawName": "EquipmentToolsHatchet1"
        }
      ]
    },
    "10": {
      "displayName": "High_IQ_Lumber_Stamp",
      "rawName": "StampB11",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 25,
      "baseCoinCost": 80,
      "powCoinBase": 1.35,
      "powMatBase": 6,
      "effect": "{}%_Choppin_Exp",
      "itemReq": [
        {
          "name": "Bullfrog_Horn",
          "rawName": "Forest3"
        }
      ]
    },
    "11": {
      "displayName": "Swag_Swingy_Tool_Stamp",
      "rawName": "StampB12",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 1,
      "baseCoinCost": 50000,
      "powCoinBase": 1.36,
      "powMatBase": 2,
      "effect": "{}_Choppin_Efficiency",
      "itemReq": [
        {
          "name": "Copper_Pickaxe",
          "rawName": "EquipmentTools2"
        }
      ]
    },
    "12": {
      "displayName": "Alch_Go_Brrr_Stamp",
      "rawName": "StampB13",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 40,
      "baseCoinCost": 800,
      "powCoinBase": 1.29,
      "powMatBase": 6,
      "effect": "{}%_Alch_Speed",
      "itemReq": [
        {
          "name": "Forest_Fibres",
          "rawName": "ForestTree"
        }
      ]
    },
    "13": {
      "displayName": "Brainstew_Stamps",
      "rawName": "StampB14",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 40,
      "baseCoinCost": 1250,
      "powCoinBase": 1.28,
      "powMatBase": 6,
      "effect": "{}%_Alch_Exp",
      "itemReq": [
        {
          "name": "Gold_Ore",
          "rawName": "Gold"
        }
      ]
    },
    "14": {
      "displayName": "Drippy_Drop_Stamp",
      "rawName": "StampB15",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 60,
      "baseCoinCost": 1000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Liquid_Spd",
      "itemReq": [
        {
          "name": "Pocket_Sand",
          "rawName": "DesertA1"
        }
      ]
    },
    "15": {
      "displayName": "Droplots_Stamp",
      "rawName": "StampB16",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 25,
      "baseCoinCost": 2500,
      "powCoinBase": 1.3,
      "powMatBase": 4,
      "effect": "{}_Liquid_Cap",
      "itemReq": [
        {
          "name": "Bloach",
          "rawName": "Fish4"
        }
      ]
    },
    "16": {
      "displayName": "Fishing_Rod_Stamp",
      "rawName": "StampB17",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 50,
      "baseCoinCost": 1000,
      "powCoinBase": 1.32,
      "powMatBase": 6,
      "effect": "{}_Fishing_Efficiency",
      "itemReq": [
        {
          "name": "Fly",
          "rawName": "Bug1"
        }
      ]
    },
    "17": {
      "displayName": "Fishhead_Stamp",
      "rawName": "StampB18",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 55,
      "baseCoinCost": 1500,
      "powCoinBase": 1.33,
      "powMatBase": 9,
      "effect": "{}%_Fishing_Exp",
      "itemReq": [
        {
          "name": "Megalodon_Tooth",
          "rawName": "DesertA2"
        }
      ]
    },
    "18": {
      "displayName": "Catch_Net_Stamp",
      "rawName": "StampB19",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 50,
      "baseCoinCost": 1000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Catching_Efficiency",
      "itemReq": [
        {
          "name": "Goldfish",
          "rawName": "Fish1"
        }
      ]
    },
    "19": {
      "displayName": "Fly_Intel_Stamp",
      "rawName": "StampB20",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 40,
      "baseCoinCost": 1500,
      "powCoinBase": 1.33,
      "powMatBase": 10,
      "effect": "{}%_Catching_Exp",
      "itemReq": [
        {
          "name": "Crabby_Cakey",
          "rawName": "DesertA3"
        }
      ]
    },
    "20": {
      "displayName": "Bag_o_Heads_Stamp",
      "rawName": "StampB21",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 8,
      "baseMatCost": 35,
      "baseCoinCost": 1000,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}%_Fish_Carry_Cap",
      "itemReq": [
        {
          "name": "Butterfly",
          "rawName": "Bug2"
        }
      ]
    },
    "21": {
      "displayName": "Holy_Mackerel_Stamp",
      "rawName": "StampB22",
      "func": "decay",
      "x1": 20,
      "x2": 40,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 30,
      "baseCoinCost": 1500,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Multifish_Chance",
      "itemReq": [
        {
          "name": "Platinum_Ore",
          "rawName": "Plat"
        }
      ]
    },
    "22": {
      "displayName": "Bugsack_Stamp",
      "rawName": "StampB23",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 8,
      "baseMatCost": 35,
      "baseCoinCost": 1000,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}%_Bug_Carry_Cap",
      "itemReq": [
        {
          "name": "Hermit_Can",
          "rawName": "Fish2"
        }
      ]
    },
    "23": {
      "displayName": "Buzz_Buzz_Stamp",
      "rawName": "StampB24",
      "func": "decay",
      "x1": 20,
      "x2": 40,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 45,
      "baseCoinCost": 1500,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Multibug_Chance",
      "itemReq": [
        {
          "name": "Potty_Rolls",
          "rawName": "ToiletTree"
        }
      ]
    },
    "24": {
      "displayName": "Hidey_Box_Stamp",
      "rawName": "StampB25",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 100,
      "baseCoinCost": 7500,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}_Trapping_Efficiency",
      "itemReq": [
        {
          "name": "Crabbo",
          "rawName": "Critter2"
        }
      ]
    },
    "25": {
      "displayName": "Purp_Froge_Stamp",
      "rawName": "StampB26",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 125,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Shiny_Chance",
      "itemReq": [
        {
          "name": "Scorpie",
          "rawName": "Critter3"
        }
      ]
    },
    "26": {
      "displayName": "Spikemouth_Stamp",
      "rawName": "StampB27",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 150,
      "baseCoinCost": 12500,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Trapping_Exp",
      "itemReq": [
        {
          "name": "Mousey",
          "rawName": "Critter4"
        }
      ]
    },
    "27": {
      "displayName": "Shiny_Crab_Stamp",
      "rawName": "StampB28",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 200,
      "baseCoinCost": 15000,
      "powCoinBase": 1.3,
      "powMatBase": 7,
      "effect": "{}%_Shiny_Chance",
      "itemReq": [
        {
          "name": "Owlio",
          "rawName": "Critter5"
        }
      ]
    },
    "28": {
      "displayName": "Gear_Stamp",
      "rawName": "StampB29",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 100,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}%_Building_Spd",
      "itemReq": [
        {
          "name": "Sticky_Stick",
          "rawName": "SnowB1"
        }
      ]
    },
    "29": {
      "displayName": "Stample_Stamp",
      "rawName": "StampB30",
      "func": "decay",
      "x1": 4,
      "x2": 30,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 100,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Sample_Size",
      "itemReq": [
        {
          "name": "Floof_Ploof",
          "rawName": "SnowA1"
        }
      ]
    },
    "30": {
      "displayName": "Saw_Stamp",
      "rawName": "StampB31",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 3,
      "baseMatCost": 20,
      "baseCoinCost": 15000,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}%_Construction_Exp",
      "itemReq": [
        {
          "name": "Dementia_Bar",
          "rawName": "DementiaBar"
        }
      ]
    },
    "31": {
      "displayName": "Amplestample_Stamp",
      "rawName": "StampB32",
      "func": "decay",
      "x1": 5,
      "x2": 30,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 200,
      "baseCoinCost": 25000,
      "powCoinBase": 1.3,
      "powMatBase": 11,
      "effect": "{}%_Sample_Size",
      "itemReq": [
        {
          "name": "Mosquisnow",
          "rawName": "Bug5"
        }
      ]
    },
    "32": {
      "displayName": "SpoOoky_Stamp",
      "rawName": "StampB33",
      "func": "add",
      "x1": 2,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 45,
      "baseCoinCost": 7500,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Worship_Efficiency",
      "itemReq": [
        {
          "name": "Forest_Soul",
          "rawName": "Soul1"
        }
      ]
    },
    "33": {
      "displayName": "Flowin_Stamp",
      "rawName": "StampB34",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 2,
      "baseCoinCost": 15000,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}%_Charging_Speed",
      "itemReq": [
        {
          "name": "Redox_Salts",
          "rawName": "Refinery1"
        }
      ]
    },
    "34": {
      "displayName": "Prayday_Stamp",
      "rawName": "StampB35",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 150,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}%_Max_Charge",
      "itemReq": [
        {
          "name": "Cracked_Glass",
          "rawName": "SnowB4"
        }
      ]
    },
    "35": {
      "displayName": "Banked_Pts_Stamp",
      "rawName": "StampB36",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 6,
      "baseMatCost": 100,
      "baseCoinCost": 6000,
      "powCoinBase": 1.3,
      "powMatBase": 3,
      "effect": "{}_Starting_TD_Pts",
      "itemReq": [
        {
          "name": "Dune_Soul",
          "rawName": "Soul2"
        }
      ]
    }
  },
  "misc": {
    "0": {
      "displayName": "Questin_Stamp",
      "rawName": "StampC1",
      "func": "decay",
      "x1": 70,
      "x2": 50,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 30,
      "baseCoinCost": 500,
      "powCoinBase": 1.32,
      "powMatBase": 6,
      "effect": "{}%_Quest_EXP",
      "itemReq": [
        {
          "name": "Slime_Sludge",
          "rawName": "Jungle1"
        }
      ]
    },
    "1": {
      "displayName": "Mason_Jar_Stamp",
      "rawName": "StampC2",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 1,
      "baseCoinCost": 4000,
      "powCoinBase": 1.28,
      "powMatBase": 3,
      "effect": "{}%_All_Carry_Cap",
      "itemReq": [
        {
          "name": "Glass_Shard",
          "rawName": "DesertA1b"
        }
      ]
    },
    "2": {
      "displayName": "Crystallin",
      "rawName": "StampC3",
      "func": "decay",
      "x1": 110,
      "x2": 50,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 35,
      "baseCoinCost": 800,
      "powCoinBase": 1.31,
      "powMatBase": 8,
      "effect": "{}%_Spawn_Chance",
      "itemReq": [
        {
          "name": "Boring_Brick",
          "rawName": "CraftMat6"
        }
      ]
    },
    "3": {
      "displayName": "Blank",
      "rawName": "StampC4",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "4": {
      "displayName": "Apple_Stamp",
      "rawName": "StampC5",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 50,
      "baseCoinCost": 200,
      "powCoinBase": 1.3,
      "powMatBase": 5.5,
      "effect": "{}%_HP_Food_Effect",
      "itemReq": [
        {
          "name": "Meat_Pie",
          "rawName": "FoodHealth7"
        }
      ]
    },
    "5": {
      "displayName": "Potion_Stamp",
      "rawName": "StampC6",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 5,
      "baseMatCost": 50,
      "baseCoinCost": 1500,
      "powCoinBase": 1.305,
      "powMatBase": 8,
      "effect": "{}%_Boost_Food_Effect",
      "itemReq": [
        {
          "name": "Icing_Ironbite",
          "rawName": "FoodMining1"
        }
      ]
    },
    "6": {
      "displayName": "Golden_Apple_Stamp",
      "rawName": "StampC7",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 4,
      "baseMatCost": 2,
      "baseCoinCost": 3000,
      "powCoinBase": 1.3,
      "powMatBase": 4,
      "effect": "{}%_Gold_Food_Effect",
      "itemReq": [
        {
          "name": "Golden_Nomwich",
          "rawName": "FoodG4"
        }
      ]
    },
    "7": {
      "displayName": "Blank",
      "rawName": "StampC8",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "8": {
      "displayName": "Card_Stamp",
      "rawName": "StampC9",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 1200,
      "powCoinBase": 1.31,
      "powMatBase": 6,
      "effect": "{}%_Card_Drop_Rate",
      "itemReq": [
        {
          "name": "Furled_Flag",
          "rawName": "DesertB2"
        }
      ]
    },
    "9": {
      "displayName": "Blank",
      "rawName": "StampC10",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "10": {
      "displayName": "Blank",
      "rawName": "StampC11",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "11": {
      "displayName": "Blank",
      "rawName": "StampC12",
      "func": "add",
      "x1": 30,
      "x2": 0,
      "reqItemMultiplicationLevel": 10,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Base_HP",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "12": {
      "displayName": "Talent_I_Stamp",
      "rawName": "StampC13",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Talent_1_Pts",
      "itemReq": [
        {
          "name": "Frog_Leg",
          "rawName": "Grasslands2"
        }
      ]
    },
    "13": {
      "displayName": "Talent_II_Stamp",
      "rawName": "StampC14",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 200,
      "baseCoinCost": 4000,
      "powCoinBase": 1.35,
      "powMatBase": 8,
      "effect": "{}_Talent_2_Pts",
      "itemReq": [
        {
          "name": "Pincer_Arm",
          "rawName": "DesertB3"
        }
      ]
    },
    "14": {
      "displayName": "Talent_III_Stamp",
      "rawName": "StampC15",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 20,
      "baseCoinCost": 40000,
      "powCoinBase": 1.35,
      "powMatBase": 4,
      "effect": "{}_Talent_3_Pts",
      "itemReq": [
        {
          "name": "Arctic_Leaf",
          "rawName": "Leaf3"
        }
      ]
    },
    "15": {
      "displayName": "Talent_IV_Stamp",
      "rawName": "StampC16",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Talent_4_Pts",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "16": {
      "displayName": "Talent_V_Stamp",
      "rawName": "StampC17",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 25,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 6,
      "effect": "{}_Talent_5_Pts",
      "itemReq": [
        {
          "name": "Copper_Ore",
          "rawName": "Copper"
        }
      ]
    },
    "17": {
      "displayName": "Talent_S_Stamp",
      "rawName": "StampC18",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 20,
      "baseCoinCost": 50,
      "powCoinBase": 1.3,
      "powMatBase": 4,
      "effect": "{}_Star_Talent_Pts",
      "itemReq": [
        {
          "name": "Twisty_Leaf",
          "rawName": "Leaf2"
        }
      ]
    },
    "18": {
      "displayName": "Multikill_Stamp",
      "rawName": "StampC19",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 100,
      "baseCoinCost": 10000,
      "powCoinBase": 1.3,
      "powMatBase": 3,
      "effect": "{}%_Base_Overkill",
      "itemReq": [
        {
          "name": "Spore_Cap",
          "rawName": "Grasslands1"
        }
      ]
    },
    "19": {
      "displayName": "Biblio_Stamp",
      "rawName": "StampC20",
      "func": "add",
      "x1": 1,
      "x2": 0,
      "reqItemMultiplicationLevel": 2,
      "baseMatCost": 125,
      "baseCoinCost": 12500,
      "powCoinBase": 1.3,
      "powMatBase": 5,
      "effect": "{}%_Faster_Books",
      "itemReq": [
        {
          "name": "Tundra_Logs",
          "rawName": "SaharanFoal"
        }
      ]
    }
  }
};
const talentsMap = {
  "Beginner": [
    "0",
    "1",
    "8",
    "9",
    "5",
    "10",
    "11",
    "12",
    "13",
    "6",
    "75",
    "76",
    "77",
    "78",
    "79"
  ],
  "Journeyman": [
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29"
  ],
  "Maestro": [
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44"
  ],
  "Virtuoso": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "48",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Infinilyte": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Rage Basics": [
    "0",
    "1",
    "8",
    "9",
    "5",
    "10",
    "11",
    "12",
    "13",
    "6",
    "85",
    "86",
    "87",
    "88",
    "89"
  ],
  "Warrior": [
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
    "101",
    "102",
    "103",
    "104"
  ],
  "Barbarian": [
    "105",
    "106",
    "107",
    "108",
    "109",
    "110",
    "111",
    "112",
    "81",
    "114",
    "115",
    "116",
    "117",
    "118",
    "119"
  ],
  "Squire": [
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "111",
    "127",
    "81",
    "129",
    "130",
    "131",
    "132",
    "133",
    "119"
  ],
  "Blood Berserker": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Death Bringer": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Diving Knight": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Royal Guardian": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Calm Basics": [
    "0",
    "1",
    "8",
    "9",
    "5",
    "10",
    "11",
    "12",
    "13",
    "6",
    "263",
    "266",
    "267",
    "268",
    "269"
  ],
  "Archer": [
    "270",
    "271",
    "272",
    "273",
    "274",
    "284",
    "276",
    "277",
    "278",
    "279",
    "280",
    "281",
    "282",
    "283",
    "265"
  ],
  "Bowman": [
    "285",
    "286",
    "287",
    "288",
    "289",
    "290",
    "291",
    "292",
    "293",
    "294",
    "295",
    "296",
    "297",
    "298",
    "299"
  ],
  "Hunter": [
    "300",
    "301",
    "302",
    "303",
    "304",
    "305",
    "291",
    "307",
    "293",
    "309",
    "310",
    "311",
    "312",
    "313",
    "299"
  ],
  "Siege Breaker": [
    "315",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Mayheim": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Wind Walker": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Beast Master": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Savvy Basics": [
    "0",
    "1",
    "8",
    "9",
    "5",
    "10",
    "11",
    "12",
    "13",
    "6",
    "445",
    "446",
    "447",
    "448",
    "449"
  ],
  "Mage": [
    "450",
    "451",
    "452",
    "453",
    "454",
    "455",
    "456",
    "457",
    "458",
    "459",
    "460",
    "461",
    "462",
    "464",
    "463"
  ],
  "Wizard": [
    "465",
    "466",
    "467",
    "468",
    "469",
    "470",
    "486",
    "472",
    "488",
    "474",
    "475",
    "476",
    "477",
    "478",
    "494"
  ],
  "Shaman": [
    "480",
    "481",
    "482",
    "483",
    "484",
    "485",
    "486",
    "487",
    "488",
    "489",
    "490",
    "491",
    "492",
    "493",
    "494"
  ],
  "Elemental Sorcerer": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Spiritual Monk": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Bubonic Conjuror": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Arcane Cultist": [
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45",
    "45"
  ],
  "Star Talents": [
    "84",
    "616",
    "84",
    "618",
    "619",
    "620",
    "621",
    "622",
    "623",
    "624",
    "625",
    "626",
    "627",
    "632",
    "631",
    "630",
    "84",
    "628",
    "84",
    "634",
    "635",
    "84",
    "84",
    "84",
    "639",
    "84"
  ]
};
const shopStockMapping = {
  "Blunder_Hills": [
    {
      "name": "Nomwich",
      "rawName": "FoodHealth1"
    },
    {
      "name": "Hot_Dog",
      "rawName": "FoodHealth3"
    },
    {
      "name": "Cheezy_Pizza",
      "rawName": "FoodHealth2"
    },
    {
      "name": "Cue_Tape",
      "rawName": "CraftMat3"
    },
    {
      "name": "Small_Mana_Potion",
      "rawName": "FoodPotMana1"
    },
    {
      "name": "Small_Strength_Potion",
      "rawName": "FoodPotOr1"
    },
    {
      "name": "Small_Life_Potion",
      "rawName": "FoodPotRe1"
    },
    {
      "name": "Small_Speed_Potion",
      "rawName": "FoodPotGr1"
    },
    {
      "name": "Crude_Oil",
      "rawName": "OilBarrel1"
    },
    {
      "name": "Weapon_Upgrade_Stone_I",
      "rawName": "StoneW1"
    },
    {
      "name": "Armor_Upgrade_Stone_I",
      "rawName": "StoneA1"
    },
    {
      "name": "Tool_Upgrade_Stone_I",
      "rawName": "StoneT1"
    },
    {
      "name": "Pugilist_Demise",
      "rawName": "EquipmentRings7"
    },
    {
      "name": "Power_Statue",
      "rawName": "EquipmentStatues1"
    },
    {
      "name": "Sculpting_Tools",
      "rawName": "SmithingHammerChisel"
    },
    {
      "name": "Target_Stamp",
      "rawName": "StampA5"
    },
    {
      "name": "Shield_Stamp",
      "rawName": "StampA6"
    },
    {
      "name": "Mana_Stamp",
      "rawName": "StampA3"
    },
    {
      "name": "Bummo_Bag",
      "rawName": "InvBag104"
    },
    {
      "name": "Storage_Chest_2",
      "rawName": "InvStorage2"
    },
    {
      "name": "Storage_Chest_6",
      "rawName": "InvStorage6"
    },
    {
      "name": "Storage_Chest_7",
      "rawName": "InvStorage7"
    },
    {
      "name": "Bottled_Town_Teleport",
      "rawName": "rtt0"
    },
    {
      "name": "Talent_Point_Reset_Fragment",
      "rawName": "ResetFrag"
    }
  ],
  "Encroaching_Forest_Villas": [
    {
      "name": "Hot_Dog",
      "rawName": "FoodHealth3"
    },
    {
      "name": "Cheezy_Pizza",
      "rawName": "FoodHealth2"
    },
    {
      "name": "Cranberry_Jam",
      "rawName": "FoodHealth5"
    },
    {
      "name": "Average_Strength_Potion",
      "rawName": "FoodPotOr2"
    },
    {
      "name": "Small_EXP_Potion",
      "rawName": "FoodPotYe1"
    },
    {
      "name": "Armor_Upgrade_Stone_II",
      "rawName": "StoneA2"
    },
    {
      "name": "Vitality_Stamp",
      "rawName": "StampA12"
    },
    {
      "name": "Tarantulight",
      "rawName": "EquipmentPendant12"
    },
    {
      "name": "Silver_Antique",
      "rawName": "Quest37"
    },
    {
      "name": "Capitalist_Case",
      "rawName": "InvBag105"
    },
    {
      "name": "Storage_Chest_8",
      "rawName": "InvStorage8"
    },
    {
      "name": "Storage_Chest_12",
      "rawName": "InvStorage12"
    },
    {
      "name": "Bottled_Town_Teleport",
      "rawName": "rtt0"
    },
    {
      "name": "Talent_Point_Reset_Fragment",
      "rawName": "ResetFrag"
    }
  ],
  "YumYum_Grotto": [
    {
      "name": "Kebab_Sticks",
      "rawName": "FoodHealth6"
    },
    {
      "name": "Meat_Pie",
      "rawName": "FoodHealth7"
    },
    {
      "name": "Saucy_Weiner",
      "rawName": "FoodHealth4"
    },
    {
      "name": "Golden_Dubloon",
      "rawName": "Quest19"
    },
    {
      "name": "BobJoePickle",
      "rawName": "BobJoePickle"
    },
    {
      "name": "Weapon_Upgrade_Stone_II",
      "rawName": "StoneW2"
    },
    {
      "name": "Armor_Upgrade_Stone_II",
      "rawName": "StoneA2"
    },
    {
      "name": "Tool_Upgrade_Stone_II",
      "rawName": "StoneT2"
    },
    {
      "name": "Average_Strength_Potion",
      "rawName": "FoodPotOr2"
    },
    {
      "name": "Average_Speed_Potion",
      "rawName": "FoodPotGr2"
    },
    {
      "name": "Average_Life_Potion",
      "rawName": "FoodPotRe2"
    },
    {
      "name": "Wealthy_Wallet",
      "rawName": "InvBag106"
    },
    {
      "name": "Storage_Chest_9",
      "rawName": "InvStorage9"
    },
    {
      "name": "Storage_Chest_10",
      "rawName": "InvStorage10"
    },
    {
      "name": "Storage_Chest_13",
      "rawName": "InvStorage13"
    },
    {
      "name": "Storage_Chest_15",
      "rawName": "InvStorage15"
    },
    {
      "name": "Guilding_Tools",
      "rawName": "SmithingHammerChisel2"
    },
    {
      "name": "Bottled_Town_Teleport",
      "rawName": "rtt0"
    },
    {
      "name": "Talent_Point_Reset_Fragment",
      "rawName": "ResetFrag"
    }
  ],
  "Faraway_Piers": [
    {
      "name": "Copper_Twine",
      "rawName": "Line1"
    },
    {
      "name": "Wormie_Weight",
      "rawName": "Weight1"
    },
    {
      "name": "Leafy_Vines",
      "rawName": "Line5"
    },
    {
      "name": "One_Pound_of_Steel",
      "rawName": "Weight5"
    },
    {
      "name": "Dynamite",
      "rawName": "Weight10"
    },
    {
      "name": "Needledrop",
      "rawName": "Line10"
    },
    {
      "name": "Not_Dynamite",
      "rawName": "Weight11"
    },
    {
      "name": "Tool_Upgrade_Stone_I",
      "rawName": "StoneT1"
    },
    {
      "name": "Tool_Upgrade_Stone_II",
      "rawName": "StoneT2"
    },
    {
      "name": "Matty_Bag_Stamp",
      "rawName": "StampB8"
    },
    {
      "name": "Clover_Stamp",
      "rawName": "StampA15"
    },
    {
      "name": "Cattleprod_Token",
      "rawName": "NPCtoken27"
    },
    {
      "name": "Talent_Point_Reset_Fragment",
      "rawName": "ResetFrag"
    }
  ],
  "Frostbite_Towndra": [
    {
      "name": "Mountain_Bread",
      "rawName": "FoodHealth10"
    },
    {
      "name": "Yeti_Ham",
      "rawName": "FoodHealth9"
    },
    {
      "name": "Sheepie_Dairy",
      "rawName": "FoodHealth11"
    },
    {
      "name": "Cardboard_Traps",
      "rawName": "TrapBoxSet1"
    },
    {
      "name": "Wax_Skull",
      "rawName": "WorshipSkull1"
    },
    {
      "name": "Weapon_Upgrade_Stone_III",
      "rawName": "StoneW3"
    },
    {
      "name": "Armor_Upgrade_Stone_III",
      "rawName": "StoneA3"
    },
    {
      "name": "Tool_Upgrade_Stone_III",
      "rawName": "StoneT3"
    },
    {
      "name": "Decent_Strength_Potion",
      "rawName": "FoodPotOr3"
    },
    {
      "name": "Decent_Speed_Potion",
      "rawName": "FoodPotGr3"
    },
    {
      "name": "Decent_Life_Potion",
      "rawName": "FoodPotRe3"
    },
    {
      "name": "Prosperous_Pouch",
      "rawName": "InvBag107"
    },
    {
      "name": "Storage_Chest_16",
      "rawName": "InvStorage16"
    },
    {
      "name": "Storage_Chest_17",
      "rawName": "InvStorage17"
    },
    {
      "name": "Storage_Chest_18",
      "rawName": "InvStorage18"
    },
    {
      "name": "Storage_Chest_19",
      "rawName": "InvStorage19"
    },
    {
      "name": "Storage_Chest_20",
      "rawName": "InvStorage20"
    },
    {
      "name": "Storage_Chest_21",
      "rawName": "InvStorage21"
    },
    {
      "name": "Bottled_Town_Teleport",
      "rawName": "rtt0"
    },
    {
      "name": "Talent_Point_Reset_Fragment",
      "rawName": "ResetFrag"
    }
  ]
};
const cauldronMapping = {
  "power": {
    "0": {
      "bubbleName": "ROID_RAGIN",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "+{_Total_STR._'Total'_here_means_that,_for_example,_a_+10%_STR_bonus_from_something_else_wouldn't_affect_this_bonus.",
      "stat": "TotalSTR",
      "itemReq": [
        {
          "rawName": "OakTree",
          "name": "Oak_Logs",
          "baseCost": 25
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "1": {
      "bubbleName": "WARRIORS_RULE",
      "x1": 2,
      "x2": 50,
      "func": "decayMulti",
      "desc": "All_Orange_Passive_Bubbles,_which_are_the_smaller_sized_ones,_give_a_{x_higher_bonus_to_your_warrior-based_classes.",
      "stat": "Opassz",
      "itemReq": [
        {
          "rawName": "Grasslands1",
          "name": "Spore_Cap",
          "baseCost": 20
        },
        {
          "rawName": "CraftMat1",
          "name": "Thread",
          "baseCost": 3
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "2": {
      "bubbleName": "HEARTY_DIGGY",
      "x1": 50,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_mining_efficiency_per_power_of_10_max_HP_that_your_character_has._The_perfect_bonus_for_miners_with_infinite_HP!",
      "stat": "MinEff",
      "itemReq": [
        {
          "rawName": "JungleTree",
          "name": "Jungle_Logs",
          "baseCost": 40
        },
        {
          "rawName": "CopperBar",
          "name": "Copper_Bar",
          "baseCost": 18
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "3": {
      "bubbleName": "WYOMING_BLOOD",
      "x1": 23.5,
      "x2": 1.5,
      "func": "bigBase",
      "desc": "Multi-Ore_mining_chance_is_increased_by_+{%,_and_your_max_Multi-Ore_chance_is_300%_instead_of_100%.",
      "stat": "MiningACTIVE",
      "itemReq": [
        {
          "rawName": "Bug1",
          "name": "Fly",
          "baseCost": 30
        },
        {
          "rawName": "Forest1",
          "name": "Glublin_Ear",
          "baseCost": 50
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "4": {
      "bubbleName": "REELY_SMART",
      "x1": 100,
      "x2": 80,
      "func": "decay",
      "desc": "+{%_Mining_and_Fishing_EXP_gain._Y'know_what,_I'll_even_DOUBLE_that_bonus_for_whichever_skill_has_the_lower_level!",
      "stat": "MinFishEXP",
      "itemReq": [
        {
          "rawName": "CraftMat6",
          "name": "Boring_Brick",
          "baseCost": 25
        },
        {
          "rawName": "DesertA3",
          "name": "Crabby_Cakey",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "5": {
      "bubbleName": "BIG_MEATY_CLAWS",
      "x1": 1,
      "x2": 0.02,
      "func": "add",
      "desc": "Increases_base_damage_by_+$._This_bonus_increases_based_on_how_much_Max_HP_you_have_above_250.",
      "stat": "bdmgHP",
      "itemReq": [
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "baseCost": 200
        },
        {
          "rawName": "DesertB2",
          "name": "Furled_Flag",
          "baseCost": 75
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "6": {
      "bubbleName": "SPLOOSH_SPLOOSH",
      "x1": 23.5,
      "x2": 1.5,
      "func": "bigBase",
      "desc": "Multi-Fish_fishing_chance_is_increased_by_+{%,_and_your_max_Multi-Fish_chance_is_300%_instead_of_100%.",
      "stat": "FishingACTIVE",
      "itemReq": [
        {
          "rawName": "Fish2",
          "name": "Hermit_Can",
          "baseCost": 100
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "7": {
      "bubbleName": "STRONK_TOOLS",
      "x1": 65,
      "x2": 70,
      "func": "decay",
      "desc": "The_following_tools_give_+{%_more_skilling_Power_than_normal:_$",
      "stat": "ToolW",
      "itemReq": [
        {
          "rawName": "Plat",
          "name": "Platinum_Ore",
          "baseCost": 60
        },
        {
          "rawName": "Grasslands2",
          "name": "Frog_Leg",
          "baseCost": 200
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "8": {
      "bubbleName": "FMJ",
      "x1": 0.5,
      "x2": 0,
      "func": "add",
      "desc": "+{%_more_defence_from_Equipment._Also,_+1_base_Def_per_Class_LV,_up_to_+{.",
      "stat": "DefPct",
      "itemReq": [
        {
          "rawName": "Bug4",
          "name": "Fruitfly",
          "baseCost": 50
        },
        {
          "rawName": "DesertC2",
          "name": "Wakka_Cherry",
          "baseCost": 140
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "9": {
      "bubbleName": "BAPPITY_BOOPITY",
      "x1": 35,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_critical_Damage._Badabing,_badaboom!_Or_in_Italian,_Babadabinga,_babadaboomahh!",
      "stat": "critDMG",
      "itemReq": [
        {
          "rawName": "CraftMat8",
          "name": "Pinion_Spur",
          "baseCost": 100
        },
        {
          "rawName": "JungleTree",
          "name": "Jungle_Logs",
          "baseCost": 700
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "10": {
      "bubbleName": "BRITTLEY_SPEARS",
      "x1": 40,
      "x2": 50,
      "func": "decay",
      "desc": "+{%_Total_damage._This_multiplies_with_other_damage_bonuses,_but_adds_with_the_other_'+%_Total_Damage'_bubbles.",
      "stat": "pctDmg1",
      "itemReq": [
        {
          "rawName": "Critter1",
          "name": "Froge",
          "baseCost": 10
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "11": {
      "bubbleName": "CALL_ME_BOB",
      "x1": 25,
      "x2": 2.5,
      "func": "bigBase",
      "desc": "+{%_Construction_EXP_Gain._Also_gives_+50%_Bug-Fixing_speed_if_your_username_is_LavaFlame2._Actually,_better_make_that_+500%...",
      "stat": "conEXPACTIVE",
      "itemReq": [
        {
          "rawName": "SnowA3",
          "name": "Moustache_Comb",
          "baseCost": 120
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "12": {
      "bubbleName": "CARPENTER",
      "x1": 2,
      "x2": 50,
      "func": "decay",
      "desc": "+{%_Build_Speed_per_Construction_Level.",
      "stat": "Construction",
      "itemReq": [
        {
          "rawName": "Refinery2",
          "name": "Explosive_Salts",
          "baseCost": 3
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "13": {
      "bubbleName": "BUFF_BOI_TALENT",
      "x1": 5,
      "x2": 1,
      "func": "bigBase",
      "desc": "+{_Talent_Points_for_EACH_tab!_Yea,_it's_amazing_right?_But_it's_just_for_warriors,_don't_tell_the_other_classes!!",
      "stat": "TalWarrior",
      "itemReq": [
        {
          "rawName": "Critter4",
          "name": "Mousey",
          "baseCost": 50
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "14": {
      "bubbleName": "ORANGE_BARGAIN",
      "x1": 40,
      "x2": 12,
      "func": "decay",
      "desc": "The_material_costs_of_ALL_orange_bubbles_are_{%_lower",
      "stat": "BubbleCostOr",
      "itemReq": [
        {
          "rawName": "Soul4",
          "name": "Frigid_Soul",
          "baseCost": 30
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    }
  },
  "quicc": {
    "0": {
      "bubbleName": "SWIFT_STEPPIN",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "+{_Total_AGI._Probably_the_lamest_of_the_five_stats..._err,_I_mean_four,_hehe.",
      "stat": "TotalAGI",
      "itemReq": [
        {
          "rawName": "Copper",
          "name": "Copper_Ore",
          "baseCost": 15
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "1": {
      "bubbleName": "ARCHER_OR_BUST",
      "x1": 2,
      "x2": 50,
      "func": "decayMulti",
      "desc": "All_Green_Passive_Bonuses,_which_are_the_smaller_sized_ones,_give_{x_more_bonuses_to_your_archer-based_characters.",
      "stat": "Gpassz",
      "itemReq": [
        {
          "rawName": "Grasslands1",
          "name": "Spore_Cap",
          "baseCost": 20
        },
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "2": {
      "bubbleName": "HAMMER_HAMMER",
      "x1": 23,
      "x2": 2,
      "func": "bigBase",
      "desc": "You_can_now_produce_+1_more_items_at_once_in_the_anvil,_and_your_production_speed_is_increased_by_{%.",
      "stat": "AnvilACTIVE",
      "itemReq": [
        {
          "rawName": "Iron",
          "name": "Iron_Ore",
          "baseCost": 30
        },
        {
          "rawName": "Grasslands3",
          "name": "Bean_Slices",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "3": {
      "bubbleName": "LIL_BIG_DAMAGE",
      "x1": 20,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_Mastery._Mastery_is_your_stat_that_boosts_minimum_damage._Just_like_in_Maplest..._err,_just_like_how_I_thought_it_up_myself!",
      "stat": "Mastery",
      "itemReq": [
        {
          "rawName": "Fish1",
          "name": "Goldfish",
          "baseCost": 25
        },
        {
          "rawName": "Jungle3",
          "name": "Carrot_Cube",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "4": {
      "bubbleName": "ANVILNOMICS",
      "x1": 40,
      "x2": 100,
      "func": "decay",
      "desc": "Costs_for_buying_Anvil_Production_Points_is_reduced_by_{%._This_is_just_like_a_tax_cut,_so_remember_me_as_a_hero!",
      "stat": "AnvilProdCost",
      "itemReq": [
        {
          "rawName": "ForestTree",
          "name": "Forest_Fibres",
          "baseCost": 50
        },
        {
          "rawName": "Gold",
          "name": "Gold_Ore",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "5": {
      "bubbleName": "QUICK_SLAP",
      "x1": 1,
      "x2": 0.02,
      "func": "add",
      "desc": "Increases_base_damage_by_+$._This_bonus_increases_based_on_how_much_Movement_Speed_you_have_above_110%.",
      "stat": "bdmgSPD",
      "itemReq": [
        {
          "rawName": "DesertB1",
          "name": "Coconotnotto",
          "baseCost": 90
        },
        {
          "rawName": "CraftMat6",
          "name": "Boring_Brick",
          "baseCost": 200
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "6": {
      "bubbleName": "SANIC_TOOLS",
      "x1": 65,
      "x2": 70,
      "func": "decay",
      "desc": "The_following_tools_give_+{%_more_skilling_Power_than_normal:_$",
      "stat": "ToolA",
      "itemReq": [
        {
          "rawName": "Jungle1",
          "name": "Slime_Sludge",
          "baseCost": 130
        },
        {
          "rawName": "GoldBar",
          "name": "Gold_Bar",
          "baseCost": 6
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "7": {
      "bubbleName": "BUG]",
      "x1": 23.5,
      "x2": 1.5,
      "func": "bigBase",
      "desc": "Multi-Bug_catching_chance_is_increased_by_+{%,_and_your_max_Multi-Bug_chance_is_300%_instead_of_100%.",
      "stat": "CatchingACTIVE",
      "itemReq": [
        {
          "rawName": "Bug3",
          "name": "Sentient_Cereal",
          "baseCost": 70
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "8": {
      "bubbleName": "SHAQURACY",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "Your_secondary_stat_(WIS_for_warrior,_STR_for_archer,_AGI_for_mage)_gives_+{%_more_Accuracy_than_normal.",
      "stat": "AccPct",
      "itemReq": [
        {
          "rawName": "Fish4",
          "name": "Bloach",
          "baseCost": 65
        },
        {
          "rawName": "PalmTree",
          "name": "Tropilogs",
          "baseCost": 250
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "9": {
      "bubbleName": "CHEAP_SHOT",
      "x1": 7,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_critical_Chance,_as_it_increases_the_chance_for_your_attack_to_hit_the_monster's_privates,_and_for_the_monster_to_be_male.",
      "stat": "CritChance",
      "itemReq": [
        {
          "rawName": "Bug5",
          "name": "Mosquisnow",
          "baseCost": 35
        },
        {
          "rawName": "DesertC3",
          "name": "Singlecle",
          "baseCost": 150
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "10": {
      "bubbleName": "BOW_JACK",
      "x1": 40,
      "x2": 50,
      "func": "decay",
      "desc": "+{%_Total_damage._This_multiplies_with_other_damage_bonuses,_but_adds_with_the_other_'+%_Total_Damage'_bubbles.",
      "stat": "pctDmg2",
      "itemReq": [
        {
          "rawName": "Soul1",
          "name": "Forest_Soul",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "11": {
      "bubbleName": "CALL_ME_ASH",
      "x1": 25,
      "x2": 2,
      "func": "bigBase",
      "desc": "+1_Placeable_Trap,_and_+{%_Trapping_Efficiency.",
      "stat": "TrapACTIVE",
      "itemReq": [
        {
          "rawName": "SaharanFoal",
          "name": "Tundra_Logs",
          "baseCost": 100
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "12": {
      "bubbleName": "CUZ_I_CATCH_EM_ALL",
      "x1": 3,
      "x2": 100,
      "func": "decayMulti",
      "desc": "{x_more_likely_to_catch_shiny_critters_when_opening_a_trap.",
      "stat": "CritShiny",
      "itemReq": [
        {
          "rawName": "Soul3",
          "name": "Rooted_Soul",
          "baseCost": 25
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "13": {
      "bubbleName": "FAST_BOI_TALENT",
      "x1": 5,
      "x2": 1,
      "func": "bigBase",
      "desc": "+{_Talent_Points_for_EACH_tab,_but_just_for_Archers!_Well,_and_'that'_class,_you_know_who_you_are!",
      "stat": "TalArchers",
      "itemReq": [
        {
          "rawName": "Bug6",
          "name": "Flycicle",
          "baseCost": 120
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "14": {
      "bubbleName": "GREEN_BARGAIN",
      "x1": 40,
      "x2": 12,
      "func": "decay",
      "desc": "The_material_costs_of_ALL_green_bubbles_are_{%_lower",
      "stat": "BubbleCostGr",
      "itemReq": [
        {
          "rawName": "Critter5",
          "name": "Owlio",
          "baseCost": 200
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    }
  },
  "high-iq": {
    "0": {
      "bubbleName": "STABLE_JENIUS",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "+{_Total_WIS._Honesty_the_greatest_bonus_in_any_Idle_Game,_believe_me._Absolutely_incredible,_everyone_says_so!",
      "stat": "TotalWIS",
      "itemReq": [
        {
          "rawName": "CraftMat1",
          "name": "Thread",
          "baseCost": 10
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "1": {
      "bubbleName": "MAGE_IS_BEST",
      "x1": 2,
      "x2": 50,
      "func": "decayMulti",
      "desc": "All_Purple_Passive_Bonuses,_which_are_the_smaller_sized_ones,_give_{x_more_bonuses_to_your_mage-based_characters.",
      "stat": "Ppassz",
      "itemReq": [
        {
          "rawName": "Grasslands1",
          "name": "Spore_Cap",
          "baseCost": 25
        },
        {
          "rawName": "CopperBar",
          "name": "Copper_Bar",
          "baseCost": 13
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "2": {
      "bubbleName": "HOCUS_CHOPPUS",
      "x1": 50,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_choppin_efficiency_per_power_of_10_max_MP_that_your_character_has._Super_diaper!_Err,_duper.",
      "stat": "ChopEff",
      "itemReq": [
        {
          "rawName": "CraftMat5",
          "name": "Trusty_Nails",
          "baseCost": 22
        },
        {
          "rawName": "ForestTree",
          "name": "Forest_Fibres",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "3": {
      "bubbleName": "MOLTO_LOGGO",
      "x1": 23.5,
      "x2": 1.5,
      "func": "bigBase",
      "desc": "Multi-Log_chop_chance_is_increased_by_+{%,_and_your_max_Multi-Log_chance_is_now_300%_instead_of_100%.",
      "stat": "MultiLogACTIVE",
      "itemReq": [
        {
          "rawName": "IronBar",
          "name": "Iron_Bar",
          "baseCost": 21
        },
        {
          "rawName": "DesertA2",
          "name": "Megalodon_Tooth",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "4": {
      "bubbleName": "NOODUBBLE",
      "x1": 100,
      "x2": 60,
      "func": "decay",
      "desc": "+{%_Choppin'_and_Alchemy_EXP_gain._Y'know_what,_I'll_even..._actually,_never_mind.",
      "stat": "ChopAlchEXP",
      "itemReq": [
        {
          "rawName": "CraftMat7",
          "name": "Chain_Link",
          "baseCost": 20
        },
        {
          "rawName": "Fish2",
          "name": "Hermit_Can",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "5": {
      "bubbleName": "NAME_I_GUESS",
      "x1": 1,
      "x2": 0.02,
      "func": "add",
      "desc": "Increases_base_damage_by_+$._This_bonus_increases_based_on_how_much_Max_MP_you_have_above_150.",
      "stat": "bdmgMP",
      "itemReq": [
        {
          "rawName": "Jungle2",
          "name": "Snake_Skin",
          "baseCost": 110
        },
        {
          "rawName": "Gold",
          "name": "Gold_Ore",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "6": {
      "bubbleName": "LE_BRAIN_TOOLS",
      "x1": 65,
      "x2": 70,
      "func": "decay",
      "desc": "The_following_tools_give_+{%_more_skilling_Power_than_normal:_$",
      "stat": "ToolM",
      "itemReq": [
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "baseCost": 250
        },
        {
          "rawName": "Bug3",
          "name": "Sentient_Cereal",
          "baseCost": 55
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "7": {
      "bubbleName": "COOKIN_ROADKILL",
      "x1": 120,
      "x2": 70,
      "func": "decay",
      "desc": "Cranium_Cooking_lasts_{%_longer,_gives_{%_more_progress_per_kill,_and_has_a_{%_lower_cooldown._Also_+{%_Alchemy_EXP!",
      "stat": "AlchemyACTIVE",
      "itemReq": [
        {
          "rawName": "ToiletTree",
          "name": "Potty_Rolls",
          "baseCost": 75
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "8": {
      "bubbleName": "BREWSTACHIO",
      "x1": 50,
      "x2": 100,
      "func": "decay",
      "desc": "+{%_Brew_Speed._This_a_multiplicative_bonus,_which_means_its_ultra_powerful,_all_the_time!_Even_on_Mondays,_the_worst_day!",
      "stat": "BrewSpd",
      "itemReq": [
        {
          "rawName": "DesertC1",
          "name": "High_Steaks",
          "baseCost": 150
        },
        {
          "rawName": "Fish4",
          "name": "Bloach",
          "baseCost": 50
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "9": {
      "bubbleName": "ALL_FOR_KILL",
      "x1": 40,
      "x2": 100,
      "func": "decay",
      "desc": "Attack_Talents_give_+{%_higher_bonuses_to_Offline_Gains_than_they_normally_do._So_you_might_as_well_just_AFK_forever,_bye!",
      "stat": "AttackAfk",
      "itemReq": [
        {
          "rawName": "StumpTree",
          "name": "Veiny_Logs",
          "baseCost": 100
        },
        {
          "rawName": "PlatBar",
          "name": "Platinum_Bar",
          "baseCost": 5
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 5
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 2
        }
      ]
    },
    "10": {
      "bubbleName": "MATTY_STAFFORD",
      "x1": 40,
      "x2": 50,
      "func": "decay",
      "desc": "+{%_Total_damage._This_multiplies_with_other_damage_bonuses,_but_adds_with_the_other_'+%_Total_Damage'_bubbles.",
      "stat": "pctDmg3",
      "itemReq": [
        {
          "rawName": "Refinery1",
          "name": "Redox_Salts",
          "baseCost": 3
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "11": {
      "bubbleName": "CALL_ME_POPE",
      "x1": 2.4,
      "x2": 70,
      "func": "decayMulti",
      "desc": "{x_Worship_Charge_rate_per_hour._Also,_{x_Max_Worship_Charge!_You_bouta_go_super_with_all_that_charge..._just_sayin'",
      "stat": "worshipACTIVE",
      "itemReq": [
        {
          "rawName": "Critter2",
          "name": "Crabbo",
          "baseCost": 25
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "12": {
      "bubbleName": "GOSPEL_LEADER",
      "x1": 60,
      "x2": 30,
      "func": "decay",
      "desc": "+{%_Max_Charge_per_10_Worship_levels._I_guess_you_could_say_this_upgrade_doesn't_come_Free_of_Charge!",
      "stat": "maxCharge",
      "itemReq": [
        {
          "rawName": "Bug5",
          "name": "Mosquisnow",
          "baseCost": 150
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "13": {
      "bubbleName": "SMART_BOI_TALENT",
      "x1": 5,
      "x2": 1,
      "func": "bigBase",
      "desc": "Sorry,_mages_don't_get_anything_because_you're_lame...._Ok_fine,_you_can_have_+{_Talent_Points_for_each_tab,_but_I'm_not_happy_about_it.",
      "stat": "TalWiz",
      "itemReq": [
        {
          "rawName": "SnowC1",
          "name": "Sippy_Straw",
          "baseCost": 150
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "14": {
      "bubbleName": "PURPLE_BARGAIN",
      "x1": 40,
      "x2": 12,
      "func": "decay",
      "desc": "The_material_costs_of_ALL_purple_bubbles_are_{%_lower",
      "stat": "BubbleCostPu",
      "itemReq": [
        {
          "rawName": "Soul1",
          "name": "Forest_Soul",
          "baseCost": 800
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    }
  },
  "kazam": {
    "0": {
      "bubbleName": "LOTTO_SKILLS",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "+{_LUK._Also,_this_will_increase_your_chances_ofwinning_the_lottery_in_real_life_from_0.0%_to_0.000%!_I'm_not_even_joking,_it's_true!!",
      "stat": "TotalLUK",
      "itemReq": [
        {
          "rawName": "Copper",
          "name": "Copper_Ore",
          "baseCost": 11
        },
        {
          "rawName": "OakTree",
          "name": "Oak_Logs",
          "baseCost": 15
        },
        {
          "rawName": "CraftMat1",
          "name": "Thread",
          "baseCost": 8
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        }
      ]
    },
    "1": {
      "bubbleName": "DROPPIN_LOADS",
      "x1": 40,
      "x2": 70,
      "func": "decay",
      "desc": "+{%_Drop_Rate._Thanks_to_this_upgrade,_you_can_get_even_MORE_angry_when_you_keep_not_getting_that_rare_pet_drop_from_the_boss!",
      "stat": "DropRate",
      "itemReq": [
        {
          "rawName": "Fish1",
          "name": "Goldfish",
          "baseCost": 20
        },
        {
          "rawName": "Bug1",
          "name": "Fly",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "2": {
      "bubbleName": "STARTUE_EXP",
      "x1": 25,
      "x2": 60,
      "func": "decay",
      "desc": "Leveling_up_a_statue_resets_it's_exp_bar_down_to_{%,_instead_of_0%._Staturrific!_Yea..._the_jokes_are_only_gonna_go_downhill_from_here_lol",
      "stat": "StatueStartEXP",
      "itemReq": [
        {
          "rawName": "DesertA1",
          "name": "Pocket_Sand",
          "baseCost": 30
        },
        {
          "rawName": "Forest2",
          "name": "Plank",
          "baseCost": 40
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "3": {
      "bubbleName": "LEVEL_UP_GIFT",
      "x1": 100,
      "x2": 30,
      "func": "decay",
      "desc": "Whenever_you_level_up_anything,_{%_chance_to_drop_a_gift!_It_could_be_an_EXP_balloon,_a_Gem_for_the_gem_shop,_or_something_crazy_weird!",
      "stat": "LevelUpACTIVE",
      "itemReq": [
        {
          "rawName": "Iron",
          "name": "Iron_Ore",
          "baseCost": 35
        },
        {
          "rawName": "JungleTree",
          "name": "Jungle_Logs",
          "baseCost": 70
        },
        {
          "rawName": "CraftMat5",
          "name": "Trusty_Nails",
          "baseCost": 30
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 2
        }
      ]
    },
    "4": {
      "bubbleName": "PROWESESSARY",
      "x1": 1.5,
      "x2": 60,
      "func": "decayMulti",
      "desc": "The_Prowess_Bonus_for_every_skill_is_multiplied_by_{._Prowess_lowers_the_Efficiency_needed_to_get_multiple_QTY_per_drop_from_resources.",
      "stat": "ProwessMulti",
      "itemReq": [
        {
          "rawName": "GoldBar",
          "name": "Gold_Bar",
          "baseCost": 25
        },
        {
          "rawName": "ToiletTree",
          "name": "Potty_Rolls",
          "baseCost": 50
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "5": {
      "bubbleName": "STAMP_TRAMP",
      "x1": 1,
      "x2": 0,
      "func": "add",
      "desc": "Increases_the_Max_Lv_of_the_'Toilet_Paper_Postage'_Talent_to_{._You_can_unlock_this_talent_by_typing_'More_like_Poopy_Pete'_near_Pete.",
      "stat": "TPpostage",
      "itemReq": [
        {
          "rawName": "Bug2",
          "name": "Butterfly",
          "baseCost": 65
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "6": {
      "bubbleName": "UNDEVELOPED_COSTS",
      "x1": 40,
      "x2": 70,
      "func": "decay",
      "desc": "Reduces_the_material_costs_of_all_Alchemy_Bubbles_by_{%._They_are_just_bubbles_though,_how_much_could_they_even_cost?_10_dollars?",
      "stat": "BubbleCost",
      "itemReq": [
        {
          "rawName": "Fish3",
          "name": "Jellyfish",
          "baseCost": 75
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 6
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "7": {
      "bubbleName": "DA_DAILY_DRIP",
      "x1": 30,
      "x2": 100,
      "func": "decay",
      "desc": "Increases_the_Max_Cap_for_every_liquid_by_+$._This_bonus_increases_based_on_the_combined_Alchemy_LV_of_all_your_characters!",
      "stat": "LqdCap",
      "itemReq": [
        {
          "rawName": "CraftMat9",
          "name": "Leather_Hide",
          "baseCost": 125
        },
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 8
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "8": {
      "bubbleName": "GRIND_TIME",
      "x1": 9.7,
      "x2": 0.3,
      "func": "bigBase",
      "desc": "+{%_Class_EXP._The_go-to_active_bubble_for_anyone_who_wants_to_reach_max_level_faster_and_finally_start_playing_the_game!",
      "stat": "expACTIVE",
      "itemReq": [
        {
          "rawName": "Liquid1",
          "name": "Liquid1",
          "baseCost": 50
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 25
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "9": {
      "bubbleName": "LAAARRRRYYYY",
      "x1": 120,
      "x2": 100,
      "func": "decay",
      "desc": "Every_time_you_upgrade_an_Alchemy_bubble,_there's_a_{%_chance_it'll_upgrade_2_times,_for_no_extra_cost!_Two_fer_one,_getter_dun!",
      "stat": "DoubleBubbleUpg",
      "itemReq": [
        {
          "rawName": "Dementia",
          "name": "Dementia_Ore",
          "baseCost": 50
        },
        {
          "rawName": "DesertC4",
          "name": "Shrapshell",
          "baseCost": 130
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "10": {
      "bubbleName": "COGS_FOR_HANDS",
      "x1": 4,
      "x2": 0,
      "func": "add",
      "desc": "+{%_Cog_Production_speed._Cogs_are_great._I_really_really_like_cogs._I_guess_you_could_say_I_think_they're_pretty_Coggers...",
      "stat": "CogMakeSpd",
      "itemReq": [
        {
          "rawName": "SnowA2",
          "name": "Melty_Cube",
          "baseCost": 50
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "11": {
      "bubbleName": "SAMPLE_IT",
      "x1": 12,
      "x2": 40,
      "func": "decay",
      "desc": "+{%_Sample_Size_when_taking_samples_for_the_3d_printer._Finally,_your_statisitcal_analysis_will_be_accurate!",
      "stat": "SampleSize",
      "itemReq": [
        {
          "rawName": "Soul2",
          "name": "Dune_Soul",
          "baseCost": 15
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "12": {
      "bubbleName": "BIG_GAME_HUNTER",
      "x1": 70,
      "x2": 50,
      "func": "decay",
      "desc": "Each_time_a_Giant_Monster_spawns,_the_chance_for_another_Giant_Monster_in_that_same_week_goes_down_by_{%_less_than_normal.",
      "stat": "GiantsACTIVE",
      "itemReq": [
        {
          "rawName": "Critter3",
          "name": "Scorpie",
          "baseCost": 40
        },
        {
          "rawName": "Liquid2",
          "name": "Liquid2",
          "baseCost": 4
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "13": {
      "bubbleName": "IGNORE_OVERDUES",
      "x1": 100,
      "x2": 60,
      "func": "decay",
      "desc": "+{%_Book_Checkout_speed,_thanks_to_this_one_little_bubble_that_librarians_do_NOT_want_you_to_know_about!",
      "stat": "booksSpeed",
      "itemReq": [
        {
          "rawName": "Tree7",
          "name": "Wispy_Lumber",
          "baseCost": 120
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 2
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    },
    "14": {
      "bubbleName": "YELLOW_BARGAIN",
      "x1": 40,
      "x2": 12,
      "func": "decay",
      "desc": "The_material_costs_of_ALL_yellow_bubbles_are_{%_lower.",
      "stat": "BubbleCostYe",
      "itemReq": [
        {
          "rawName": "Critter6",
          "name": "Pingy",
          "baseCost": 250
        },
        {
          "rawName": "Liquid3",
          "name": "Liquid3",
          "baseCost": 3
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        },
        {
          "rawName": "Blank",
          "name": "Blank",
          "baseCost": 0
        }
      ]
    }
  }
};
const questsMap = {
  "TP_Pete": {
    "1": {
      "questTitle": "Roll_of_Anger",
      "dialogText": "Go_defeat_40_poops_in_200_seconds."
    },
    "2": {
      "questTitle": "The_Rats_are_to_Blame!",
      "dialogText": "Defeat_rats_for_employment_research!",
      "itemReq": [
        {
          "rawName": "Quest14",
          "name": "Employment_Statistics",
          "amount": 50
        }
      ]
    },
    "3": {
      "questTitle": "Fired_for_BS_Reasons!",
      "dialogText": "Reinstate_Pete_as_Comissioner.",
      "itemReq": [
        {
          "rawName": "JobApplication",
          "name": "Job_Application",
          "amount": 1
        }
      ]
    }
  },
  "Town_Marble": {
    "1": {
      "questTitle": "Visualizing_the_Sculpture_Within...",
      "dialogText": "Sculpt_this_marble_into_a_statue_worthy_of_the_gods.",
      "itemReq": [
        {
          "rawName": "SmithingHammerChisel",
          "name": "Sculpting_Tools",
          "amount": 1
        }
      ]
    }
  },
  "Obol_Altar": {
    "1": {
      "questTitle": "Bad_Kitty,_get_off_that_altar!",
      "dialogText": "Find_something_to_scare_the_cat_off_the_Obol_Altar",
      "itemReq": [
        {
          "rawName": "BobJoePickle",
          "name": "BobJoePickle",
          "amount": 1
        }
      ]
    }
  },
  "Woodsman": {
    "1": {
      "questTitle": "A_noob's_first_swing",
      "dialogText": "Chop_down_that_Tree,_and_collect_10_Oak_Logs!",
      "itemReq": [
        {
          "rawName": "OakTree",
          "name": "Oak_Logs",
          "amount": 10
        }
      ]
    },
    "2": {
      "questTitle": "A_noob's_2nd_first_swing",
      "dialogText": "Turn_the_tree_into_the_absence_of_a_tree,_and_get_100_Oak_Logs.",
      "itemReq": [
        {
          "rawName": "OakTree",
          "name": "Oak_Logs",
          "amount": 100
        }
      ]
    },
    "3": {
      "questTitle": "It's_Just_a_Plank,_Bro!",
      "dialogText": "Bring_1000_logs..._you_should_come_back_to_this_quest_later,_once_you_have_a_higher_Log_Carry_Capacity!",
      "itemReq": [
        {
          "rawName": "OakTree",
          "name": "Oak_Logs",
          "amount": 1000
        }
      ]
    },
    "4": {
      "questTitle": "Exotic_Pranks..._I_mean_Logs!",
      "dialogText": "Get_a_Forest_Log_by_earning_a_choppin'_highscore_of_150!",
      "itemReq": [
        {
          "rawName": "ForestTree",
          "name": "Forest_Fibres",
          "amount": 1
        }
      ]
    }
  },
  "Scripticus": {
    "2": {
      "questTitle": "Hardcore_Gamer_Status,_Here_I_Come!",
      "dialogText": "Go_to_the_right_and_defeat_5_green_spores.",
      "itemReq": []
    },
    "3": {
      "questTitle": "Gear_Up,_Gamer!",
      "dialogText": "Buy_some_Tape_from_the_Shop_and_then_make_some_gloves",
      "itemReq": []
    },
    "4": {
      "questTitle": "Mr._Worldwide",
      "dialogText": "Reach_map_2",
      "itemReq": []
    },
    "5": {
      "questTitle": "The_Choice_is_Yours!",
      "dialogText": "Spend_5_Talent_Points",
      "itemReq": []
    },
    "6": {
      "questTitle": "Certified_Swinger,_of_Pickaxes_of_course!",
      "dialogText": "Get_Glumlee's_Certification",
      "itemReq": [
        {
          "rawName": "Quest1",
          "name": "Mining_Certificate",
          "amount": 1
        }
      ]
    },
    "7": {
      "questTitle": "The_Smithing_Grind",
      "dialogText": "Craft_Farmer_Brim_and_Orange_Tee",
      "itemReq": []
    },
    "8": {
      "questTitle": "The_Unoccupied_Picnic",
      "dialogText": "Retrieve_the_Golden_Jam",
      "itemReq": [
        {
          "rawName": "Quest5",
          "name": "Golden_Jam",
          "amount": 1
        }
      ]
    },
    "9": {
      "questTitle": "Seeking_Foreign_Aid",
      "dialogText": "Get_a_scouting_report_from_the_Jungle_resident.",
      "itemReq": [
        {
          "rawName": "Quest6",
          "name": "Scouting_Report",
          "amount": 1
        }
      ]
    },
    "10": {
      "questTitle": "What_Lies_at_the_Heart_of_the_Forest",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "11": {
      "questTitle": "The_Bigger_they_are,_the_Bigger_they_Fall!",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "12": {
      "questTitle": "Champion_of_the_Grasslands",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "BadgeG1",
          "name": "Blunderhills_NPC_Completion_Token",
          "amount": 1
        },
        {
          "rawName": "BadgeG2",
          "name": "Blunder_Skills_Completion_Token",
          "amount": 1
        },
        {
          "rawName": "BadgeG3",
          "name": "Blunderhills_Misc_Completion_Token",
          "amount": 1
        }
      ]
    }
  },
  "f": {
    "1": {
      "questTitle": "f"
    }
  },
  "Krunk": {
    "1": {
      "questTitle": "A_Plot_to_be_Perfect",
      "dialogText": "Get_Krunk_some_things_that_will_probably_not_explode_when_mixed.",
      "itemReq": [
        {
          "rawName": "Iron",
          "name": "Iron_Ore",
          "amount": 200
        },
        {
          "rawName": "FoodPotMana1",
          "name": "Small_Mana_Potion",
          "amount": 50
        }
      ]
    },
    "2": {
      "questTitle": "The_Scientific_Method,_According_to_a_Rock",
      "dialogText": "He_want's_shiny_things.",
      "itemReq": [
        {
          "rawName": "Gold",
          "name": "Gold_Ore",
          "amount": 200
        },
        {
          "rawName": "IronBar",
          "name": "Iron_Bar",
          "amount": 100
        },
        {
          "rawName": "EquipmentStatues1",
          "name": "Power_Statue",
          "amount": 20
        }
      ]
    },
    "3": {
      "questTitle": "King_of_the_Cavern",
      "dialogText": "Gather_some_construction_materials_for_Hank..._I_mean_Krunk.",
      "itemReq": [
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "amount": 1200
        },
        {
          "rawName": "CraftMat5",
          "name": "Trusty_Nails",
          "amount": 300
        },
        {
          "rawName": "CraftMat1",
          "name": "Thread",
          "amount": 600
        }
      ]
    }
  },
  "Glumlee": {
    "1": {
      "questTitle": "Learning_to_Swing",
      "dialogText": "Mine_5_Copper_Ore",
      "itemReq": [
        {
          "rawName": "Copper",
          "name": "Copper_Ore",
          "amount": 5
        }
      ]
    },
    "2": {
      "questTitle": "Learning_to_Smelt",
      "dialogText": "Smelt_a_Copper_Bar",
      "itemReq": [
        {
          "rawName": "CopperBar",
          "name": "Copper_Bar",
          "amount": 1
        }
      ]
    },
    "3": {
      "questTitle": "Literally_Burning_your_Money",
      "dialogText": "Upgrade_the_forge_3_times",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Impossible_Task",
      "dialogText": "Pick_up_the_microphone._Good_luck,_you'll_need_it...",
      "itemReq": [
        {
          "rawName": "Quest16",
          "name": "Broken_Mic",
          "amount": 1
        }
      ]
    },
    "5": {
      "questTitle": "He's_Havin'_a_Bad_Day",
      "dialogText": "Yea,_he_dropped_it_again..._you_know_what_to_do.",
      "itemReq": [
        {
          "rawName": "Quest16",
          "name": "Broken_Mic",
          "amount": 1
        }
      ]
    }
  },
  "Picnic_Stowaway": {
    "1": {
      "questTitle": "The_Hungry_Stowaway",
      "dialogText": "Buy_and_bring_50_Nomwiches_from_the_Town_Shop.",
      "itemReq": [
        {
          "rawName": "FoodHealth1",
          "name": "Nomwich",
          "amount": 50
        }
      ]
    },
    "2": {
      "questTitle": "Beating_Up_Frogs_for_some_Sauce",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Quest3",
          "name": "Ketchup_Bottle",
          "amount": 3
        },
        {
          "rawName": "Quest4",
          "name": "Mustard_Bottle",
          "amount": 3
        }
      ]
    },
    "3": {
      "questTitle": "Live-Action_Entertainment",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Most_Important_Meal_of_the_Day",
      "dialogText": "Get_frog_legs_and_bean_slices",
      "itemReq": [
        {
          "rawName": "Grasslands2",
          "name": "Frog_Leg",
          "amount": 200
        },
        {
          "rawName": "Grasslands3",
          "name": "Bean_Slices",
          "amount": 100
        }
      ]
    },
    "5": {
      "questTitle": "Brunchin'_with_the_Blobs",
      "dialogText": "Get_some_peanuts_and_foliage.",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 100
        },
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "amount": 1500
        },
        {
          "rawName": "Leaf1",
          "name": "Grass_Leaf",
          "amount": 50
        }
      ]
    },
    "6": {
      "questTitle": "Luncheon_with_the_Inlaws",
      "dialogText": "Help_gather_fake_blobulyte_materials",
      "itemReq": [
        {
          "rawName": "OilBarrel1",
          "name": "Crude_Oil",
          "amount": 200
        },
        {
          "rawName": "IronBar",
          "name": "Iron_Bar",
          "amount": 100
        },
        {
          "rawName": "SmithingHammerChisel",
          "name": "Sculpting_Tools",
          "amount": 1
        }
      ]
    },
    "7": {
      "questTitle": "Afternoon_Tea_in_a_Jiffy",
      "dialogText": "Get_the_tea_back_before_it_gets_cold!",
      "itemReq": []
    },
    "8": {
      "questTitle": "Early_Evening_Eating_Endeavor",
      "dialogText": "Get_baby_here_a_little_baby_bowl_because_he_can't_eat_kebabs_like_a_big_boy.",
      "itemReq": [
        {
          "rawName": "EquipmentHats18",
          "name": "Iron_Helmet",
          "amount": 1
        },
        {
          "rawName": "FoodHealth6",
          "name": "Kebab_Sticks",
          "amount": 500
        }
      ]
    },
    "9": {
      "questTitle": "The_Last_Supper,_at_Least_for_Today!",
      "dialogText": "Hope_you_read_the_previous_dialogue!",
      "itemReq": [
        {
          "rawName": "Meatloaf",
          "name": "Magic_Meatloaf",
          "amount": 1
        }
      ]
    },
    "10": {
      "questTitle": "Don't_Desert_the_Dessert",
      "dialogText": "Mmmmm,_nuget_caaaaaakee....",
      "itemReq": [
        {
          "rawName": "DesertA3b",
          "name": "Nuget_Cake",
          "amount": 2
        }
      ]
    },
    "11": {
      "questTitle": "A_Midnight_Snack",
      "dialogText": "Get_rare_cookie_drops_from_Twilight_Desert_mobs.",
      "itemReq": [
        {
          "rawName": "MidnightCookie",
          "name": "Midnight_Cookie",
          "amount": 2
        }
      ]
    },
    "12": {
      "questTitle": "King_of_Food",
      "dialogText": "Collect_30_Picnic_tokens,_and_you'll_get_a_trophy!",
      "itemReq": [
        {
          "rawName": "Quest9",
          "name": "Picnic_Token",
          "amount": 30
        }
      ]
    }
  },
  "Hamish": {
    "1": {
      "questTitle": "The_Hamazing_Plot_Twist",
      "dialogText": "Find_an_axe_to_trade_for_the_stamp!",
      "itemReq": [
        {
          "rawName": "EquipmentToolsHatchet3",
          "name": "Copper_Chopper",
          "amount": 1
        }
      ]
    },
    "2": {
      "questTitle": "Should_We_Tell_Him?",
      "dialogText": "Use_the_recipe_and_craft_the_helmet.",
      "itemReq": [
        {
          "rawName": "EquipmentHats8",
          "name": "Purple_Tupacband",
          "amount": 1
        }
      ]
    },
    "3": {
      "questTitle": "Slime_for_Storage",
      "dialogText": "Get_them_50_slime_sludge._They're_like_lv._3,_they'll_accept.",
      "itemReq": [
        {
          "rawName": "Jungle1",
          "name": "Slime_Sludge",
          "amount": 50
        }
      ]
    }
  },
  "Mr_Pigibank": {
    "1": {
      "questTitle": "A_Pig_and_his_Stamps",
      "dialogText": "Find_out_who_stole_the_Stamp_Collection",
      "itemReq": []
    }
  },
  "Secretkeeper": {
    "1": {
      "questTitle": "The_Few,_the_Proud",
      "dialogText": "Find_the_Secretstone",
      "itemReq": [
        {
          "rawName": "Secretstone",
          "name": "Secretstone",
          "amount": 1
        }
      ]
    }
  },
  "Promotheus": {
    "1": {
      "questTitle": "I'm_Ready,_Promotion!",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "2": {
      "questTitle": "Three_Right_Answers",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "3": {
      "questTitle": "Slovakian_Scare",
      "dialogText": "Find_the_house_monster_in_the_Birch_Grove.",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Witcher,_but_not_Really",
      "dialogText": "Me_too,_go_kill_it_and_see_what_loot_you_get!",
      "itemReq": []
    }
  },
  "Bushlyte": {
    "1": {
      "questTitle": "A_Peanut_for_your_Thoughts",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 50
        }
      ]
    },
    "2": {
      "questTitle": "Honk_if_you_Love_Peanuts!",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 200
        }
      ]
    },
    "3": {
      "questTitle": "A_Peanut_Saved_is_a_Peanut_not_Eaten!",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 400
        }
      ]
    }
  },
  "Rocklyte": {
    "1": {
      "questTitle": "How_It's_Made,_Episode_7._The_Super_Peanut",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 500
        }
      ]
    },
    "2": {
      "questTitle": "If_Life_Gives_you_Peanuts,_make_Shiny_Peanuts!",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "PeanutG",
          "name": "Golden_Peanut",
          "amount": 5
        }
      ]
    },
    "3": {
      "questTitle": "Becoming_the_Best_Beginner",
      "dialogText": "No Dialog...",
      "itemReq": []
    }
  },
  "Stiltzcho": {
    "1": {
      "questTitle": "Outta_the_Way_Slimes",
      "dialogText": "Kill_12_Slimes_before_time_runs_out",
      "itemReq": []
    },
    "2": {
      "questTitle": "No_Stone_Unturned",
      "dialogText": "Kill_Baby_Boas_until_you_find_a_clue",
      "itemReq": [
        {
          "rawName": "Quest7",
          "name": "Strange_Rock",
          "amount": 5
        }
      ]
    },
    "3": {
      "questTitle": "Investigator_by_Day,_Prankster_by_Night",
      "dialogText": "Gather_carrots_from_the_Vegetable_Grove_as_well_as_some_logs.",
      "itemReq": [
        {
          "rawName": "Jungle3",
          "name": "Carrot_Cube",
          "amount": 2
        },
        {
          "rawName": "BirchTree",
          "name": "Bleach_Logs",
          "amount": 3
        }
      ]
    },
    "4": {
      "questTitle": "Time_Crime_Episode_1",
      "dialogText": "Investigate_Green_Spores_near_town_to_see_which_one_is_stealing_Stiltzcho's_time.",
      "itemReq": []
    },
    "5": {
      "questTitle": "Time_Crime_Episode_2",
      "dialogText": "Investigate_Frogs_to_see_which_one_is_has_been_hoppin'_away_with_Stiltzcho's_time!",
      "itemReq": []
    },
    "6": {
      "questTitle": "Time_Crime_Season_Finale",
      "dialogText": "Investigate_Slimes_to_see_which__of_these_slimeballs_is_the_real_thief_of_with_Stiltzcho's_time!!",
      "itemReq": []
    }
  },
  "Tiki_Chief": {
    "1": {
      "questTitle": "Brochure_Building",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Forest2",
          "name": "Plank",
          "amount": 500
        },
        {
          "rawName": "CraftMat5",
          "name": "Trusty_Nails",
          "amount": 1000
        }
      ]
    },
    "2": {
      "questTitle": "Three_Strikes,_you're_Out!",
      "dialogText": "Hand_out_flyers_by_dropping_them_on_the_right_NPCs",
      "itemReq": []
    },
    "3": {
      "questTitle": "Blame_it_on_the_Glublins",
      "dialogText": "Clear_out_some_Goblins,_and_totally_invite_everyone_again!",
      "itemReq": []
    },
    "4": {
      "questTitle": "Hotel?_Tikivago._Sorry,_couldn't_Help_It!",
      "dialogText": "Defeat_the_boss_5_times,_and_1_time_in_under_30_seconds.",
      "itemReq": []
    }
  },
  "Builder_Bird": {
    "1": {
      "questTitle": "Restoring_Power_to_the_Portal",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Crystal1",
          "name": "Desert_Topaz",
          "amount": 1
        }
      ]
    }
  },
  "Mutton": {
    "1": {
      "questTitle": "Beatboxing_Starterpack",
      "dialogText": "Find_the_right_clothes_for_an_aspiring_fool_who_doesn't_realize_his_beatboxing_sucks.",
      "itemReq": [
        {
          "rawName": "EquipmentHats5",
          "name": "White_Headband",
          "amount": 1
        },
        {
          "rawName": "EquipmentPants10",
          "name": "Give_Up_On_Life_Pants",
          "amount": 1
        },
        {
          "rawName": "EquipmentShoes9",
          "name": "Flip_Flops",
          "amount": 1
        }
      ]
    },
    "2": {
      "questTitle": "Clout_Chasin'",
      "dialogText": "Beat_up_the_trashiest_monsters_until_Mutt_becomes_famous",
      "itemReq": [
        {
          "rawName": "Quest22",
          "name": "Corporatube_Sub",
          "amount": 300
        }
      ]
    },
    "3": {
      "questTitle": "Cross_Platform_Promotion",
      "dialogText": "Find_some_more_followers,_probably_from_the_Sewers_again_since_his_beatboxing_still_sucks.",
      "itemReq": [
        {
          "rawName": [
            "Quest22",
            "Quest23"
          ],
          "amount": null
        }
      ]
    },
    "4": {
      "questTitle": "7_Figure_Followers",
      "dialogText": "Get_a_million_followers.",
      "itemReq": [
        {
          "rawName": "Quest22",
          "name": "Corporatube_Sub",
          "amount": 200000
        },
        {
          "rawName": "Quest23",
          "name": "Instablab_Follower",
          "amount": 300000
        },
        {
          "rawName": "Quest24",
          "name": "Cloudsound_Follower",
          "amount": 500000
        }
      ]
    }
  },
  "Funguy": {
    "1": {
      "questTitle": "Mushroom_Munchies",
      "dialogText": "Be_the_food_hookup",
      "itemReq": [
        {
          "rawName": "Peanut",
          "name": "Peanut",
          "amount": 100
        },
        {
          "rawName": "FoodHealth2",
          "name": "Cheezy_Pizza",
          "amount": 25
        },
        {
          "rawName": "FoodPotOr2",
          "name": "Average_Strength_Potion",
          "amount": 100
        }
      ]
    },
    "2": {
      "questTitle": "Videogame_Highscores_are_COOL!",
      "dialogText": "Get_a_score_of_35_in_the_Choppin_Minigame.",
      "itemReq": []
    },
    "3": {
      "questTitle": "Partycrastination",
      "dialogText": "Wait_until_the_party_starts.",
      "itemReq": [
        {
          "rawName": "Quest21",
          "name": "Time_Thingy",
          "amount": 250
        }
      ]
    },
    "4": {
      "questTitle": "Party_Crashin'",
      "dialogText": "Go_on_then,_party!",
      "itemReq": []
    },
    "5": {
      "questTitle": "Wicked_Party_Cleanup",
      "dialogText": "Get_toilet_paper_to_help_clean.",
      "itemReq": [
        {
          "rawName": "ToiletTree",
          "name": "Potty_Rolls",
          "amount": 10000
        }
      ]
    }
  },
  "Dog_Bone": {
    "1": {
      "questTitle": "Why_he_Die???",
      "dialogText": "Defeat_Board_Monsters_below_until_you_find_out_how_ghostie_here_died",
      "itemReq": [
        {
          "rawName": "Quest12",
          "name": "Dog_Bone",
          "amount": 10
        }
      ]
    },
    "2": {
      "questTitle": "Bow_Wow_going_Dow..n!",
      "dialogText": "Bring_some_stones_back_from_Amarok_to_show_to_Dog_Bone_as_a_token_of_his_revenge.",
      "itemReq": [
        {
          "rawName": "Quest17",
          "name": "Amarok_Slab",
          "amount": 25
        }
      ]
    }
  },
  "Speccius": {
    "1": {
      "questTitle": "More_like_'Sleepius'_lmao",
      "dialogText": "Wake_up_the_Special-Class_giver.",
      "itemReq": [
        {
          "rawName": "FoodHealth6",
          "name": "Kebab_Sticks",
          "amount": 130
        },
        {
          "rawName": "DesertA3",
          "name": "Crabby_Cakey",
          "amount": 150
        }
      ]
    },
    "2": {
      "questTitle": "Specialization_Station",
      "dialogText": "No Dialog...",
      "itemReq": []
    }
  },
  "Whattso": {
    "1": {
      "questTitle": "Mopey_Dick",
      "dialogText": "What_are_they_looking_at?",
      "itemReq": [
        {
          "rawName": "Fish1",
          "name": "Goldfish",
          "amount": 20
        }
      ]
    },
    "2": {
      "questTitle": "The_Whaley_Hard_Minigame",
      "dialogText": "They_look_even_sadder_now,_try_doing_something_else...",
      "itemReq": []
    },
    "3": {
      "questTitle": "Bobbin'_Bobbers",
      "dialogText": "Thats_a_good_face,_I_think!_Do_whatever_you_just_did_some_more!",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Biggest_Fish_in_the_Sea...?",
      "dialogText": "The_whale_stares_at_you._He's_too_happy._You_know_what_must_be_done.",
      "itemReq": []
    }
  },
  "Scubidew": {
    "1": {
      "questTitle": "Don't_Step_to_Me,_Bro!",
      "dialogText": "Show_him_there_are_no_water_monters.",
      "itemReq": [
        {
          "rawName": "Fish1",
          "name": "Goldfish",
          "amount": 400
        },
        {
          "rawName": "Fish2",
          "name": "Hermit_Can",
          "amount": 100
        },
        {
          "rawName": "Fish3",
          "name": "Jellyfish",
          "amount": 25
        }
      ]
    },
    "2": {
      "questTitle": "Uncovering_the_Deep_Sea_State!!!",
      "dialogText": "Catch_5_fish_in_2_minutes,_right_here,_right_now.",
      "itemReq": []
    },
    "3": {
      "questTitle": "A_Normal_Quest.",
      "dialogText": "He's_much_better_this_way._I_can't_have_too_many_free_thinkers,_not_in_this_world,_not_in_its_current_state._Get_him_a_fish.",
      "itemReq": [
        {
          "rawName": "Fish1",
          "name": "Goldfish",
          "amount": 1
        }
      ]
    }
  },
  "Fishpaste97": {
    "1": {
      "questTitle": "'Accidental'_Exploit",
      "dialogText": "Catch_some_Butterflies.",
      "itemReq": [
        {
          "rawName": "Bug2",
          "name": "Butterfly",
          "amount": 1500
        }
      ]
    },
    "2": {
      "questTitle": "Can_you_do_the_Can_Can?",
      "dialogText": "Catch_3_Hermit_Cans_in_a_row,_manually.",
      "itemReq": []
    }
  },
  "Postboy_Pablob": {
    "1": {
      "questTitle": "Signed,_Sealed_and_Lost_in_the_Post",
      "dialogText": "Craft_some_Empty_Boxes_from_Anvil_Tab_2",
      "itemReq": [
        {
          "rawName": "Quest13",
          "name": "Empty_Box",
          "amount": 5
        }
      ]
    }
  },
  "Sprout": {
    "1": {
      "questTitle": "Sticks_and_Stone_Something_Something_Bones...",
      "dialogText": "Collect_all_the_sticks_and_stones_so_Sprout_won't_ever_break_his_bones.",
      "itemReq": [
        {
          "rawName": "TreeInterior1",
          "name": "Stick",
          "amount": 500
        },
        {
          "rawName": "Iron",
          "name": "Iron_Ore",
          "amount": 1500
        }
      ]
    },
    "2": {
      "questTitle": "Justice_Wears_No_Clothes",
      "dialogText": "Defeat_stick_monsters_with_no_clothes_equipped,_just_a_weapon.",
      "itemReq": []
    },
    "3": {
      "questTitle": "Shoe_Shopping_with_Sprout",
      "dialogText": "Get_a_bunch_of_shoes_for_Sprout_to_try_on.",
      "itemReq": [
        {
          "rawName": "EquipmentShoes15",
          "name": "Iron_Boots",
          "amount": 2
        },
        {
          "rawName": "EquipmentShoes7",
          "name": "Goo_Galoshes",
          "amount": 2
        },
        {
          "rawName": "EquipmentShoes9",
          "name": "Flip_Flops",
          "amount": 2
        }
      ]
    },
    "4": {
      "questTitle": "Frisbee_Fanatic",
      "dialogText": "Get_the_frisbee_back_from_the_top_of_this_tree.",
      "itemReq": [
        {
          "rawName": "Quest15",
          "name": "Red_Frisbee",
          "amount": 1
        }
      ]
    }
  },
  "Desert_Davey": {
    "1": {
      "questTitle": "More_Tasks_Pls"
    },
    "2": {
      "questTitle": "U_Cool?",
      "dialogText": "Bring_cool_proof._And_dont_worry,_you'll_get_to_keep_the_items!",
      "itemReq": [
        {
          "rawName": "TestObj7",
          "name": "Steel_Axe",
          "amount": 1
        },
        {
          "rawName": "EquipmentBows3",
          "name": "Birch_Longbow",
          "amount": 1
        },
        {
          "rawName": "EquipmentWands2",
          "name": "Quarterstaff",
          "amount": 1
        }
      ]
    }
  },
  "Cowbo_Jones": {
    "1": {
      "questTitle": "The_Grind_Begins...?",
      "dialogText": "Kill_99,999_Sandy_Pots",
      "itemReq": []
    },
    "2": {
      "questTitle": "The_Hatless_Howerhouse!",
      "dialogText": "Kill_20_Sandy_Pots,_without_your_precious_hat_equipped.",
      "itemReq": []
    },
    "3": {
      "questTitle": "No_Country_for_One_Character",
      "dialogText": "Create_at_least_3_new_players_for_your_Account.",
      "itemReq": []
    },
    "4": {
      "questTitle": "Say_Goodbye_to_your_Dubloon!",
      "dialogText": "Buy_a_Gold_Dubloon_to_prove_your_worth.",
      "itemReq": [
        {
          "rawName": "Quest19",
          "name": "Golden_Dubloon",
          "amount": 1
        }
      ]
    },
    "5": {
      "questTitle": "Alchemial_Apprentice",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "6": {
      "questTitle": "Three_Vials?_Those_are_Rookie_Numbers!",
      "dialogText": "Unlock_2_Vials._Stand_infront_of_the_Cauldron,_then_drag_an_item,_like_Copper,_out_of_your_inventory",
      "itemReq": []
    },
    "7": {
      "questTitle": "The_Notorious_B.O.B",
      "dialogText": "Find_the_criminal!",
      "itemReq": []
    },
    "8": {
      "questTitle": "Bake_Him_Away,_Toys",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Quest20",
          "name": "Signed_Arrest_Warrant",
          "amount": 1
        }
      ]
    },
    "9": {
      "questTitle": "A_Hat_in_Crime",
      "dialogText": "Yes,_Bandit_Bob_set_you_up._Guess_you're_taking_orders_from_a_cactus_now!",
      "itemReq": [
        {
          "rawName": "CraftMat9",
          "name": "Leather_Hide",
          "amount": 100
        },
        {
          "rawName": "CraftMat5",
          "name": "Trusty_Nails",
          "amount": 750
        }
      ]
    },
    "10": {
      "questTitle": "Commence_Criminal_Crimes!",
      "dialogText": "Commit_a_crime_on_whoever_the_quest_helper_says_to_lol",
      "itemReq": []
    },
    "11": {
      "questTitle": "The_Worst_Trade_Deal_in_History",
      "dialogText": "Buy_and_sell_a_total_of_10_Golden_Dubloons.",
      "itemReq": []
    },
    "12": {
      "questTitle": "Children?_What'd_they_ever_do_for_Me...",
      "dialogText": "Donate_to_the_Starving_Orphan_Monsters_foundation_in_the_Cauldron.",
      "itemReq": []
    },
    "13": {
      "questTitle": "Oh_No,_not_the_Elderly!",
      "dialogText": "Find_some_old_coot_to_assist._Some_old_rag,_a_real_carpet_of_a_fella,_you_know_what_I_mean.",
      "itemReq": []
    },
    "14": {
      "questTitle": "Tomb_Raid",
      "dialogText": "Raid_Efaunt's_tomb,_and_steal_his_crystal.",
      "itemReq": []
    },
    "15": {
      "questTitle": "The_New_Sheriff",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "BadgeD1",
          "name": "Yumyum_Desert_NPC_Completion_Token",
          "amount": 1
        },
        {
          "rawName": "BadgeD2",
          "name": "Yumyum_Skills_Completion_Token",
          "amount": 1
        },
        {
          "rawName": "BadgeD3",
          "name": "Yumyum_Misc_Completion_Token",
          "amount": 1
        }
      ]
    }
  },
  "Loominadi": {
    "1": {
      "questTitle": "Rhyming_is_Key!",
      "dialogText": "Kill_moonmen_until_they_drop_all_the_keys_you_need.",
      "itemReq": [
        {
          "rawName": "Quest18",
          "name": "Loomi's_Room_Key",
          "amount": 10
        }
      ]
    },
    "2": {
      "questTitle": "Uh,_Something_About_Vials?",
      "dialogText": "Upgrade_13_Vials_up_to_light-blue_rarity_or_higher",
      "itemReq": []
    },
    "3": {
      "questTitle": "Journey_to_the_Center_of_the_Blundermines",
      "dialogText": "Reach_the_Ol'_Straightaway_mining_area,_with_Plat_and_Dementia_ore.",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Mummy_of_Mystery",
      "dialogText": "Find_the_biggest_secret_in_all_of_YumYum_Desert,_and_defeat_it.",
      "itemReq": []
    }
  },
  "Goldric": {
    "1": {
      "questTitle": "Trickle_Down_Economics",
      "dialogText": "Collect_copper_coins_by_running_over_them.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Hoopsies",
      "dialogText": "Pass_through_15_hoops_in_a_row._@_OR_@_Pass_a_total_of_90_hoops_across_all_attempts",
      "itemReq": []
    },
    "3": {
      "questTitle": "Only_Winners_have_Portraits",
      "dialogText": "Find_various_goldric_paintings_from_Desert_Monsters.",
      "itemReq": [
        {
          "rawName": "GoldricP1",
          "name": "Casual_Confidante",
          "amount": 200
        },
        {
          "rawName": "GoldricP2",
          "name": "Triumphant_Treason",
          "amount": 200
        },
        {
          "rawName": "GoldricP3",
          "name": "Claiming_Cashe",
          "amount": 200
        }
      ]
    },
    "4": {
      "questTitle": "Criminal_Code_of_Conduct",
      "dialogText": "Find_the_perfect_gift_for_an_animated_gold_bar_monarch._You_may_have_to_sift_through_a_lot_of_crap_to_find_it!",
      "itemReq": [
        {
          "rawName": "Sewers1b",
          "name": "Golden_Plop",
          "amount": 1
        }
      ]
    },
    "5": {
      "questTitle": "Dress_to_Impress",
      "dialogText": "Equip_a_golden_helmet,_platebody,_platelegs,_and_any_golden_tool.",
      "itemReq": []
    },
    "6": {
      "questTitle": "Dont_lay_a_finger_on_my_Sheepies!!!",
      "dialogText": "Defeat_all_sandcastle_monsters_without_hurting_the_sheepies.",
      "itemReq": []
    }
  },
  "Djonnut": {
    "1": {
      "questTitle": "Genie_Dieting",
      "dialogText": "Collect_some_very_blue_thingies_for_this_very_blue_dude",
      "itemReq": [
        {
          "rawName": "FoodPotMana2",
          "name": "Average_Mana_Potion",
          "amount": 200
        },
        {
          "rawName": "FoodMining1",
          "name": "Icing_Ironbite",
          "amount": 600
        },
        {
          "rawName": "Fish3",
          "name": "Jellyfish",
          "amount": 150
        }
      ]
    },
    "2": {
      "questTitle": "I'm_Blue_Dabadedada",
      "dialogText": "Defeat_Moonmen_and_retrieve_some_ghosts",
      "itemReq": []
    },
    "3": {
      "questTitle": "The_Blue_New_World",
      "dialogText": "He's_blue,_nuff_said.",
      "itemReq": [
        {
          "rawName": "SnowA2",
          "name": "Melty_Cube",
          "amount": 2500
        },
        {
          "rawName": "SnowB1",
          "name": "Sticky_Stick",
          "amount": 2500
        },
        {
          "rawName": "SnowB2",
          "name": "Mamooth_Tusk",
          "amount": 2500
        }
      ]
    }
  },
  "Bandit_Bob": {
    "1": {
      "questTitle": "Bullets_for_Bandit_Bob!",
      "dialogText": "Get_ya_boy_Bob_some_bullets!",
      "itemReq": [
        {
          "rawName": "Bullet",
          "name": "Bullet",
          "amount": 300
        }
      ]
    },
    "2": {
      "questTitle": "Bob's_Brand_New_Bandana",
      "dialogText": "Get_Bob_a_yellow_bandana,_even_though_it_would_ruin_his_style.",
      "itemReq": [
        {
          "rawName": "EquipmentHats9",
          "name": "Yellow_Headband",
          "amount": 1
        }
      ]
    },
    "3": {
      "questTitle": "Bringing_Bob's_Boxes",
      "dialogText": "Make_some_deliveries_for_Plan-It_Experess_over_at_the_post_office.",
      "itemReq": []
    },
    "4": {
      "questTitle": "The_Desert_Dungeon_Prequest",
      "dialogText": "Go_get_a_Sesame_Seed,_so_you_can_play_the_party_dungeon!",
      "itemReq": [
        {
          "rawName": "Quest45",
          "name": "Sesame_Seed",
          "amount": 1
        }
      ]
    }
  },
  "Papua_Piggea": {
    "1": {
      "questTitle": "Crystal_Crime_Stopper",
      "dialogText": "Retrieve_the_stolen_item!",
      "itemReq": [
        {
          "rawName": "StampA8",
          "name": "Kapow_Stamp",
          "amount": 1
        }
      ]
    },
    "2": {
      "questTitle": "Stamp_Collecting",
      "dialogText": "Retrieve_the_stolen_item!",
      "itemReq": [
        {
          "rawName": "StampC3",
          "name": "Crystallin",
          "amount": 1
        }
      ]
    },
    "3": {
      "questTitle": "This_Little_Piggy_Felt_Remorse",
      "dialogText": "Bring_more_stamps,_but_not_so_many_that_the_pig_would_have_to_pay_Stampcome_Tax",
      "itemReq": [
        {
          "rawName": "StampA7",
          "name": "Longsword_Stamp",
          "amount": 3
        },
        {
          "rawName": "StampA3",
          "name": "Mana_Stamp",
          "amount": 5
        },
        {
          "rawName": "StampB9",
          "name": "Smart_Dirt_Stamp",
          "amount": 2
        }
      ]
    },
    "4": {
      "questTitle": "Oinko_Boinko",
      "dialogText": "Upgrade_your_stamps_a_bunch_to_cheer_them_up",
      "itemReq": []
    }
  },
  "Carpetiem": {
    "1": {
      "questTitle": "Darn_Lazy_Gamers!",
      "dialogText": "Kill_750_Potatos._Idle_kills_don't_count.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Old_Timey_Craftin'",
      "dialogText": "No Dialog...",
      "itemReq": []
    },
    "3": {
      "questTitle": "Be_like_Buster!",
      "dialogText": "Defeat_the_former_Heavyweight_Champ_with_Red_Boxing_Gloves_equipped.",
      "itemReq": []
    },
    "4": {
      "questTitle": "Helping_100_times_over",
      "dialogText": "Say_'The_boomer_aint_so_bad'_to_30_different_players.",
      "itemReq": []
    }
  },
  "Typhoon": {
    "1": {
      "questTitle": "Surprise_Attack!",
      "dialogText": "Kill_froggies._Forfeit_the_quest_by_clicking_the_Codex_if_you_fail!",
      "itemReq": []
    }
  },
  "Giftmas_Blobulyte": {
    "1": {
      "questTitle": "Boo,_Headshot!",
      "dialogText": "Defeat_Giftmas_Ghosts,_which_have_a_rare_chance_to_spawn_from_defeating_normal_monsters.",
      "itemReq": []
    },
    "2": {
      "questTitle": "You_Shouldn't_Have!_No,_really.",
      "dialogText": "Ah,_they_mean_cash_and_jewelry!_Go_get_a_dubloon_and_some_shiny_glass_from_Sandy_Pots,_both_from_the_Desert!",
      "itemReq": [
        {
          "rawName": "DesertA1b",
          "name": "Glass_Shard",
          "amount": 1
        },
        {
          "rawName": "Quest19",
          "name": "Golden_Dubloon",
          "amount": 1
        }
      ]
    }
  },
  "Meel": {
    "1": {
      "questTitle": "Spooky_Scary_Skelepoops",
      "dialogText": "Defeat_the_Boops!",
      "itemReq": []
    },
    "2": {
      "questTitle": "Waitin'_for_the_Cards_to_Drop",
      "dialogText": "Collect_Bonemeal_for_Meel!_This_will_take_a_while...",
      "itemReq": [
        {
          "rawName": "Sewers3",
          "name": "Bonemeal",
          "amount": 777
        }
      ]
    }
  },
  "Wellington": {
    "1": {
      "questTitle": "Platforms_in_Disguise,_Platsformers!",
      "dialogText": "Find_the_3_invisible_platforms_hidden_throughout_the_game.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Findin'_Fingerprints",
      "dialogText": "Collect_materials,_maybe_the_blobulyte_left_some_fingerprints_on_one?",
      "itemReq": [
        {
          "rawName": "DesertC1",
          "name": "High_Steaks",
          "amount": 2500
        },
        {
          "rawName": "DesertC2",
          "name": "Wakka_Cherry",
          "amount": 2500
        },
        {
          "rawName": "DesertC3",
          "name": "Singlecle",
          "amount": 2500
        }
      ]
    },
    "3": {
      "questTitle": "You_Can't_Run,_but_you_Can_Hide",
      "dialogText": "Give_up_on_your_search_for_the_Maestro_Blobulyte_by_saying_'Darn_you,_Blobulyte!_Why_must_you_hide_like_a_coward'",
      "itemReq": []
    },
    "4": {
      "questTitle": "Puzzles_and_Math,_a_Winning_Combination!",
      "dialogText": "Do_the_puzzle!",
      "itemReq": []
    }
  },
  "XxX_Cattleprod_XxX": {
    "1": {
      "questTitle": "Peak_Gaming",
      "dialogText": "Kill_all_the_Mafioso's_before_they_respawn.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Wait_No,_I_meant_Pathetic_Gaming",
      "dialogText": "Defeat_Mafiosos_and_Sand_Castles_super_fast",
      "itemReq": []
    },
    "3": {
      "questTitle": "Ok,_NOW_it's_Peak_Gaming!",
      "dialogText": "Collect_ratings_from_mobs_and_ask_other_players_whose_names_start_with_P_or_S_to_say_'1_star,_game_sucks!'_to_collect_more_ratings.",
      "itemReq": [
        {
          "rawName": "Quest32",
          "name": "Monster_Rating",
          "amount": 1000
        },
        {
          "rawName": "Quest33",
          "name": "Player_Rating_With_Letter_P",
          "amount": 1
        },
        {
          "rawName": "Quest34",
          "name": "Player_Rating_With_Letter_S",
          "amount": 1
        }
      ]
    }
  },
  "Snake_Jar": {
    "1": {
      "questTitle": "Lookin'_Like_a_Snack",
      "dialogText": "Get_some_teeth_so_you_can_be_eaten!_Mmm,_yummy!",
      "itemReq": [
        {
          "rawName": "DesertA2",
          "name": "Megalodon_Tooth",
          "amount": 4200
        }
      ]
    },
    "2": {
      "questTitle": "Red_Stuff_Bad!",
      "dialogText": "BLOOD_FOR_THE_BLOOD_GODS!!!_Err..._I_mean,_get_HP_pots!",
      "itemReq": [
        {
          "rawName": "FoodPotRe1",
          "name": "Small_Life_Potion",
          "amount": 8500
        }
      ]
    },
    "3": {
      "questTitle": "PSA._You_Are_Being_Eaten!",
      "dialogText": "Wait,_why_do_they_want_to_pretend_to_have_eaten_you_again?_Uh_oh,_I_don't_like_the_look_of_that_Quest_Helper...",
      "itemReq": []
    },
    "4": {
      "questTitle": "A_Noob,_served_Medium_Rare!",
      "dialogText": "Lure_another_player_to_Snakejar's_platform,_and_have_them_say_'Im_a_total_noob'.",
      "itemReq": []
    }
  },
  "Centurion": {
    "1": {
      "questTitle": "Down_The_Mimic_Hole!",
      "dialogText": "Defeat_all_mimics_before_the_time_runs_out.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Which_one_of_yous_is_the_Mafia?",
      "dialogText": "Defeat_Mafiosos_and_bring_proof.",
      "itemReq": [
        {
          "rawName": "DesertB1",
          "name": "Coconotnotto",
          "amount": 2500
        }
      ]
    },
    "3": {
      "questTitle": "High_Scorer",
      "dialogText": "Get_a_200K+_colosseum_score._Remember_to_skip_rounds_to_grow_your_score_multiplier!",
      "itemReq": []
    },
    "4": {
      "questTitle": "Colosseum_Champ!",
      "dialogText": "Complete_all_15_waves_with_a_final_score_of_350K+",
      "itemReq": []
    },
    "5": {
      "questTitle": "Colosseum_GDQ",
      "dialogText": "Complete_the_three_colosseums_with_lots_of_Time_Remaining_after_beating_all_waves.",
      "itemReq": []
    }
  },
  "Telescope": {
    "1": {
      "questTitle": "I'm_Seeing_Stars!",
      "dialogText": "Follow_the_engraving's_advice,_and_press_the_little_constellation_on_the_bottom_right_branch.",
      "itemReq": []
    }
  },
  "Loveulyte": {
    "1": {
      "questTitle": "Heart_Hogger",
      "dialogText": "Defeat_monsters_and_collect_their_old_Love_Letters_for_this_joy-hogging_blobulyte.",
      "itemReq": [
        {
          "rawName": "Quest39",
          "name": "Lovey_Dovey_Letter",
          "amount": 25
        }
      ]
    },
    "2": {
      "questTitle": "Heartbreaker",
      "dialogText": "Hold_down_on_Love_Letters_and_break_some_hearts!",
      "itemReq": []
    }
  },
  "Constructor_Crow": {
    "1": {
      "questTitle": "Restoring_Power_to_another_Portal",
      "dialogText": "No Dialog...",
      "itemReq": [
        {
          "rawName": "Crystal2",
          "name": "Glacier_Quartz",
          "amount": 1
        }
      ]
    }
  },
  "Iceland_Irwin": {
    "1": {
      "questTitle": "Crikey,_it's_cold_out!",
      "dialogText": "Go_defeat_Frost_Flakes,_past_the_Sheepies,_and_collect_their_cool_shapes!",
      "itemReq": [
        {
          "rawName": "SnowA2",
          "name": "Melty_Cube",
          "amount": 250
        }
      ]
    }
  },
  "Dazey": {
    "1": {
      "questTitle": "Dressing_like_a_Dork",
      "dialogText": "Help_Dazey_build_a_Sprout_costume._You_don't_actually_need_a_pea_brain,_that_was_just_her_being_a_jerk.",
      "itemReq": [
        {
          "rawName": "ForestTree",
          "name": "Forest_Fibres",
          "amount": 1000
        },
        {
          "rawName": "Quest41",
          "name": "Flowies",
          "amount": 5
        }
      ]
    },
    "2": {
      "questTitle": "Literally_Physics",
      "dialogText": "Get_some_woodular_circles_from_branches,_and_do_something_with_them?_I_don't_go_to_Dazey's_school_either,_I'm_as_confused_as_you_are.",
      "itemReq": [
        {
          "rawName": "ForestTree",
          "name": "Forest_Fibres",
          "amount": 1000
        },
        {
          "rawName": "Quest41",
          "name": "Flowies",
          "amount": 5
        },
        {
          "rawName": "TreeInterior1b",
          "name": "Woodular_Circle",
          "amount": 1
        }
      ]
    }
  },
  "Egggulyte": {
    "1": {
      "questTitle": "Egg_Shaped_Lootboxes!",
      "dialogText": "Defeat_monsters_and_find_an_egg_capsule!_Don't_worry,_they_won't_take_them_back_from_You..._if_they_did,_they_wouldn't_have_hid_them_in_the_first_place!",
      "itemReq": []
    },
    "2": {
      "questTitle": "I've_Got_a_Golden_Tickegg!",
      "dialogText": "Open_Egg_Capsules_until_you_find_a_Golden_Egg!_Previously_found_ones_don't_count!",
      "itemReq": []
    }
  },
  "Lord_of_the_Hunt": {
    "1": {
      "questTitle": "Pelt_for_the_Pelt_God",
      "dialogText": "Collect_material_from_Snelbie_Snails,_and_Snakes._Also,_buy_a_trap_from_the_Town_Shop.",
      "itemReq": [
        {
          "rawName": "DesertC4",
          "name": "Shrapshell",
          "amount": 10
        },
        {
          "rawName": "Jungle2",
          "name": "Snake_Skin",
          "amount": 12
        },
        {
          "rawName": "TrapBoxSet1",
          "name": "Cardboard_Traps",
          "amount": 1
        }
      ]
    },
    "2": {
      "questTitle": "Frogecoin_to_the_MOON!",
      "dialogText": "Go_trap_Froge_Critters,_found_in_the_SLIME_map_in_Blunder_Hills.",
      "itemReq": [
        {
          "rawName": "Critter1",
          "name": "Froge",
          "amount": 100
        },
        {
          "rawName": "Critter1A",
          "name": "Poison_Froge",
          "amount": 1
        }
      ]
    },
    "3": {
      "questTitle": "Yet_another_Cartoon_Reference",
      "dialogText": "Go_trap_Crabbo_Critters,_found_by_the_sea.",
      "itemReq": [
        {
          "rawName": "Critter2",
          "name": "Crabbo",
          "amount": 250
        },
        {
          "rawName": "Critter2A",
          "name": "Mutant_Crabbo",
          "amount": 1
        }
      ]
    },
    "4": {
      "questTitle": "Small_Stingers,_Big_Owie",
      "dialogText": "Go_trap_Scorpie_Critters._No_hint_where_they_are,_sorry..._I'm_still_stuck_on_the_Crabbo_quest_myself!",
      "itemReq": [
        {
          "rawName": "Critter3",
          "name": "Scorpie",
          "amount": 500
        },
        {
          "rawName": "Critter3A",
          "name": "Crescent_Scorpie",
          "amount": 2
        }
      ]
    },
    "5": {
      "questTitle": "The_Mouse_n_the_Molerat",
      "dialogText": "Go_trap_some_Mousey_Critters.",
      "itemReq": [
        {
          "rawName": "Critter4",
          "name": "Mousey",
          "amount": 1000
        },
        {
          "rawName": "Critter4A",
          "name": "Nakeo_Moleo",
          "amount": 2
        }
      ]
    },
    "6": {
      "questTitle": "Happy_Tree_Friend",
      "dialogText": "Go_trap_Owlio_Critters.",
      "itemReq": [
        {
          "rawName": "Critter5",
          "name": "Owlio",
          "amount": 1500
        },
        {
          "rawName": "Critter5A",
          "name": "Minervowl",
          "amount": 3
        }
      ]
    },
    "7": {
      "questTitle": "Noot_Noot!",
      "dialogText": "Go_trap_some_Pingy_Critters.",
      "itemReq": [
        {
          "rawName": "Critter6",
          "name": "Pingy",
          "amount": 2500
        },
        {
          "rawName": "Critter6A",
          "name": "Eternal_Lord_of__The_Undying_Ember",
          "amount": 4
        }
      ]
    },
    "8": {
      "questTitle": "Bunny_you_Should_Say_That!",
      "dialogText": "Go_trap_Bunny_Critters.",
      "itemReq": [
        {
          "rawName": "Critter7",
          "name": "Bunny",
          "amount": 4000
        },
        {
          "rawName": "Critter7A",
          "name": "Purbunni",
          "amount": 6
        }
      ]
    },
    "9": {
      "questTitle": "Rollin'_Thunder!",
      "dialogText": "Go_trap_Dung_Beat_Critters.",
      "itemReq": [
        {
          "rawName": "Critter8",
          "name": "Dung_Beat",
          "amount": 8000
        },
        {
          "rawName": "Critter8A",
          "name": "Jade_Scarab",
          "amount": 10
        }
      ]
    },
    "10": {
      "questTitle": "Untitled_Quest",
      "dialogText": "Go_trap_Honker_Critters.",
      "itemReq": [
        {
          "rawName": "Critter9",
          "name": "Honker",
          "amount": 65000
        },
        {
          "rawName": "Critter9A",
          "name": "Diamond_Duck",
          "amount": 1
        }
      ]
    },
    "11": {
      "questTitle": "To_Trap_or_not_to_Trap",
      "dialogText": "Catch_a_TON_of_Shinies..._like,_a_TOOOOOON.",
      "itemReq": [
        {
          "rawName": "Critter3A",
          "name": "Crescent_Scorpie",
          "amount": 500
        },
        {
          "rawName": "Critter6A",
          "name": "Eternal_Lord_of__The_Undying_Ember",
          "amount": 250
        },
        {
          "rawName": "Critter9A",
          "name": "Diamond_Duck",
          "amount": 100
        }
      ]
    }
  },
  "Hoggindaz": {
    "1": {
      "questTitle": "Turn_ON_for_what???",
      "dialogText": "Turn_on_Redox_Combustion_in_the_refinery,_and_collect_Mushroom_Caps_and_Copper_Ore_until_you_have_24_hours_of_fuel.",
      "itemReq": []
    },
    "2": {
      "questTitle": "Trapping_with_the_Lord",
      "dialogText": "Go_to_the_map_to_the_left,_and_learn_about_the_Trapping_Skill.",
      "itemReq": []
    },
    "3": {
      "questTitle": "Constructing_a_Tower",
      "dialogText": "Build_the_Red_and_Orange_Signposts,_and_also_make_some_Cogs_by_going_to_the_'Cog'_Tab_and_opening_the_Cog_Shelf_and_dragging_in_some_players.",
      "itemReq": []
    },
    "4": {
      "questTitle": "Monke_Tower_Time!",
      "dialogText": "Start_a_round_of_Tower_Defence,_by_going_to_the_Goblin_Map_in_World_1._Also,_equip_that_wax_skull!",
      "itemReq": []
    },
    "5": {
      "questTitle": "Taking_Samples",
      "dialogText": "Use_the_Star_Book,_then_add_the_talent_to_your_attack_bar_and_take_samples!",
      "itemReq": []
    }
  },
  "Lonely_Hunter": {
    "1": {
      "questTitle": "Leaf_Him_Alone!",
      "dialogText": "Well,_you_heard_him!",
      "itemReq": [
        {
          "rawName": "Leaf1",
          "name": "Grass_Leaf",
          "amount": 200
        },
        {
          "rawName": "Leaf2",
          "name": "Twisty_Leaf",
          "amount": 50
        }
      ]
    },
    "2": {
      "questTitle": "Skeleton?_Skelegone!",
      "dialogText": "Summon_Skeletons_by_breaking_the_skull_rock_in_the_top_right_of_the_colosseum,_and_destroy_them!",
      "itemReq": []
    }
  },
  "Snouts": {
    "1": {
      "questTitle": "A_Salty_Fall",
      "dialogText": "Get_some_Refinery_Salts_to_make_into_a_pile_for_Snouts_to_fall_onto.",
      "itemReq": [
        {
          "rawName": "Refinery1",
          "name": "Redox_Salts",
          "amount": 50
        }
      ]
    },
    "2": {
      "questTitle": "Gravity_VS_Salt",
      "dialogText": "Get_some_Orange_Refinery_Salts,_hopefully_they_wont_react_with_the_snow.",
      "itemReq": [
        {
          "rawName": "Refinery2",
          "name": "Explosive_Salts",
          "amount": 75
        }
      ]
    },
    "3": {
      "questTitle": "Big_Ol_Chonker",
      "dialogText": "Defeat_a_giant_monster._You_need_a_Prayer_for_giants_to_spawn_at_all_remember.",
      "itemReq": []
    }
  },
  "Cactolyte": {
    "1": {
      "questTitle": "Super_Skillage",
      "dialogText": "Get_the_required_skill_levels_in_Mining,_Smithing,_and_Choppin_to_impress_Cactolyte_club_member!",
      "itemReq": []
    },
    "2": {
      "questTitle": "Top_Skillage",
      "dialogText": "Get_the_required_skill_levels_in_Fishing,_Alchemy,_and_Catching_to_impress_Cactolyte_club_member!",
      "itemReq": []
    },
    "3": {
      "questTitle": "Peanut_De-Aging",
      "dialogText": "Defeat_Biggie_Hours_with_this_peanut_in_your_inventory._Don't_drop_it,_or_it'll_decay_to_dust_in_5_seconds_flat!",
      "itemReq": [
        {
          "rawName": "Quest48",
          "name": "Pete_the_Peanut",
          "amount": 1
        }
      ]
    },
    "4": {
      "questTitle": "Maestro!_The_Stro!_Mman!",
      "dialogText": "No Dialog...",
      "itemReq": []
    }
  },
  "Coastiolyte": {
    "1": {
      "questTitle": "Cooler_than_a_Cooler!",
      "dialogText": "Crack_open_some_Coolers_with_the_lads!",
      "itemReq": []
    },
    "2": {
      "questTitle": "Vibe_Check",
      "dialogText": "Clear_the_beach_of_all_these_'Out_of_Towner'_monsters",
      "itemReq": []
    }
  },
  "Walupiggy": {
    "1": {
      "questTitle": "Treasure_Hunt_1",
      "dialogText": "Complete_the_1st_Treasure_Hunt!_You_need_to_go_to_the_Legends_of_IdleOn_youtube_channel_to_find_the_clues_to_follow_to_complete_this!",
      "itemReq": []
    },
    "2": {
      "questTitle": "Treasure_Hunt_2",
      "dialogText": "Complete_the_2nd_Treasure_Hunt!_Clues_are_at_the_Legends_of_Idleon_youtube_channel_remember!",
      "itemReq": []
    },
    "3": {
      "questTitle": "Treasure_Hunt_3",
      "dialogText": "Complete_the_3rd_Treasure_Hunt!_Clues_are_on_the_Legends_of_Idleon_youtube_channel!",
      "itemReq": []
    },
    "4": {
      "questTitle": "Treasure_Hunt_4",
      "dialogText": "Complete_the_4th_Treasure_Hunt!_Clues_are_on_the_Legends_of_Idleon_youtube_channel!",
      "itemReq": []
    }
  }
};
const bribesMap = [
  {
    "name": "Insider_Trading",
    "desc": "All_stamps_cost_5%_less_coins_to_upgrade.",
    "price": 750,
    "effectName": "StampCostPct",
    "value": 8
  },
  {
    "name": "Tracking_Chips",
    "desc": "Stamps_drop_+15%_more_often_from_monsters_and_resources_that_drop_stamps.",
    "price": 1800,
    "effectName": "StampDrop",
    "value": 15
  },
  {
    "name": "Mandatory_Fire_Sale",
    "desc": "All_shop_items_cost_7%_less_coins.",
    "price": 3200,
    "effectName": "ShopCostPct",
    "value": 7
  },
  {
    "name": "Sleeping_on_the_Job",
    "desc": "Boosts_fighting_AFK_Gains_Rate_by_+5%",
    "price": 6000,
    "effectName": "FightAfkRate",
    "value": 5
  },
  {
    "name": "Artificial_Demand",
    "desc": "Items_sell_to_shops_for_+10%_more_than_their_normal_value.",
    "price": 9000,
    "effectName": "ShopSellPct",
    "value": 10
  },
  {
    "name": "The_Art_of_the_Deal",
    "desc": "Unlocks_the_next_set_of_7_Bribes_to_be_purchased.",
    "price": 15000,
    "effectName": "BribeExpansion",
    "value": 6
  },
  {
    "name": "Overstock_Regulations",
    "desc": "Item_Quantity_in_all_shops_increased_by_+20%._Takes_effect_only_after_Shops_restock.",
    "price": 20000,
    "effectName": "ShopQtyPct",
    "value": 20
  },
  {
    "name": "Double_Exp_Scheme",
    "desc": "Whenever_you_claim_AFK_rewards,_there_is_a_2.2%_chance_to_get_x2_EXP.",
    "price": 222222,
    "effectName": "AfkDoubleEXP",
    "value": 2.2
  },
  {
    "name": "Tagged_Indicators",
    "desc": "Stamps_drop_+20%_more_often._Stacks_with_previous_bribe_of_this_type.",
    "price": 30000,
    "effectName": "StampDrop",
    "value": 20
  },
  {
    "name": "Fossil_Fuel_Legislation",
    "desc": "Oil_Barrel_consumption_chance_is_reduced_to_80%_of_the_original_chance.",
    "price": 55000,
    "effectName": "OilConsume",
    "value": 0.2
  },
  {
    "name": "Five_Aces_in_the_Deck",
    "desc": "Card_drop_rate_boosted_by_1.20x_for_all_areas_of_the_game.",
    "price": 70000,
    "effectName": "CardDropPct",
    "value": 20
  },
  {
    "name": "Fake_Teleport_Tickets",
    "desc": "Get_+2_Map_Teleport_every_24_hours._Caps_at_6,_so_being_gone_for_4_days_only_gives_6_tele.",
    "price": 99000,
    "effectName": "FreeTeleport",
    "value": 3
  },
  {
    "name": "The_Art_of_the_Steal",
    "desc": "Unlocks_the_next_set_of_7_Bribes_to_be_purchased.",
    "price": 200000,
    "effectName": "BribeExpansion",
    "value": 13
  },
  {
    "name": "Counterfeit_Telepassports",
    "desc": "You_now_get_+4_Map_Teleports_every_24_hours,_and_caps_at_12_before_you_need_to_login.",
    "price": 300000,
    "effectName": "FreeTeleport2",
    "value": 2
  },
  {
    "name": "Weighted_Marbles",
    "desc": "+2_daily_pachinko_balls_for_the_Arcade._It's_not_open_yet,_consider_this_a_preorder.",
    "price": 725000,
    "effectName": "ArcadeBallz",
    "value": 2
  },
  {
    "name": "Changing_the_Code",
    "desc": "Unlock_the_2nd_Alchemy_Bubble_slot_for_ALL_players._Don't_go_tellin'_Lava_'bout_this_one...",
    "price": 1500000,
    "effectName": "BubbleSlot",
    "value": 1
  },
  {
    "name": "Taxidermied_Cog_Pouches",
    "desc": "+4_Cog_Inventory_slots.",
    "price": 750000,
    "effectName": "CogInve",
    "value": 4
  },
  {
    "name": "Guild_VIP_Fraud",
    "desc": "Logging_in_each_day_now_contributes_20_GP_to_your_guild,_instead_of_the_normal_10.",
    "price": 400000,
    "effectName": "BonusType",
    "value": 10
  },
  {
    "name": "Library_Double_Agent",
    "desc": "+4_minimum_Lv_for_all_Talent_Books_from_the_library,_so_you_get_more_of_the_goood_stuff.",
    "price": 9156348,
    "effectName": "BonusType",
    "value": 4
  },
  {
    "name": "The_Art_of_the_Fail",
    "desc": "Look,_I'm_in_a_bit_of_a_situation_right_now_and_need_time_to_clean_it_up..._come_back_later.",
    "price": 99999999,
    "effectName": "BribeExpansion",
    "value": 20
  },
  {
    "name": "Filler",
    "desc": "You_now_get_+2_Map_Teleports_every_24_hours,_and_caps_at_6_before_you_need_to_login.",
    "price": 300000,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "Filler",
    "desc": "+2_daily_pachinko_balls_for_the_Arcade._It's_not_open_yet,_consider_this_a_preorder.",
    "price": 725000,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "Filler",
    "desc": "Unlock_the_2nd_Alchemy_Bubble_slot,_for_ALL_players.",
    "price": 2500000,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "Filler",
    "desc": "+4_Cog_Inventory_slots.",
    "price": 1000000,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "Filler",
    "desc": "Logging_in_each_day_now_contributes_20_GP_to_your_guild,_instead_of_the_normal_10.",
    "price": 400000,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "Filler",
    "desc": "+4_minimum_Lv_for_all_Talent_Books_from_the_library,_so_you_get_more_of_the_goood_stuff.",
    "price": 9156348,
    "effectName": "BonusType",
    "value": null
  },
  {
    "name": "The_Art_of_the_Bail",
    "desc": "Look,_I'm_in_a_bit_of_a_situation_right_now_and_need_time_to_clean_it_up..._come_back_later.",
    "price": 99999999,
    "effectName": "BribeExpansion",
    "value": 20
  }
];
export {
  itemMap,
  vialMapping,
  stampsMap,
  talentsMap,
  shopStockMapping,
  cauldronMapping,
  questsMap,
  bribesMap
}
    