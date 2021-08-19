// if (process && process?.env?.NODE_ENV === 'development') {
//   var rawJson = require("../rawJson.json");
//   var {
//     classMap,
//     mapsMap,
//     itemMap,
//     bubblesMap,
//     starSignMap,
//     cardEquipMap,
//     cardLevelMap,
//     cardSetMap,
//     skillIndexMap,
//     guildBonusesMap,
//     obolMap,
//     obolFamilyShapeMap,
//     obolCharacterShapeMap
//   } = require("./commons/maps");
// }

let isRunning = false;
// if (!process?.env?.NODE_ENV === 'development') {
chrome.webNavigation.onBeforeNavigate.addListener(() => {
  toggleButton(false);
});

chrome.storage.local.get('globalData', function (result) {
  parseData(result.globalData);
});

chrome.storage.onChanged.addListener(function (changes) {
  for (let [key, { newValue }] of Object.entries(changes)) {
    // Run when all of the data is set.
    if (newValue && Object.keys(newValue).length === 3) {
      console.log("key", key);
      parseData(newValue);
    }
  }
});
// }
const parseData = (data) => {
  if (isRunning || !data) {
    return;
  }
  isRunning = true;

  const final = {
    account: {},
    characters: [],
  };

  const fields = data?.save?.documentChange?.document?.fields;
  const characterNames = data?.charNames;
  const guildInfo = data?.guildInfo;

  final.account = buildAccountData(fields);

  // Initialize characters' array
  const characters = Object.keys(characterNames).map((index) => ({
    name: characterNames[index],
  }));
  final.characters = buildCharacterData(characters, fields, final.account);
  final.guild = buildGuildData(guildInfo, fields);

  // if (!process?.env?.NODE_ENV === 'development') {
  toggleButton(true, final);
  // }

  isRunning = false;

  return final;
};

const toggleButton = (display, data) => {
  // HTML
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");
  if (display) {
    content.style.display = "block";
    loader.style.display = "none";
    const copyButton = document.getElementById("copy");
    copyButton.addEventListener("click", (e) => {
      showTooltip(e, "Copied!");
      copyTextToClipboard(JSON.stringify(data));
    });
  } else {
    content.style.display = "none";
    loader.style.display = "block";
  }
};

const buildAccountData = (fields) => {
  const accountData = {};
  const cardsObject = JSON.parse(fields?.["Cards0"].stringValue);
  accountData.cards = Object.keys(cardsObject).reduce(
    (res, card) => ({
      ...res,
      [cardEquipMap?.[card]]: {
        amount: cardsObject?.[card],
        stars: calculateStars(card, cardsObject?.[card]),
      },
    }),
    {}
  );
  return accountData;
};

const buildCharacterData = (characters, fields, account) => {
  return characters.map((character, index) => {
    const extendedChar = {};
    const classObject = fields[`CharacterClass_${index}`];
    extendedChar.class =
      classMap[parseInt(classObject?.doubleValue || classObject?.integerValue)];
    extendedChar.afkTarget = fields[`AFKtarget_${index}`]?.stringValue;

    // stats
    const statsArray = fields[`PVStatList_${index}`]?.arrayValue?.values;
    extendedChar.level = parseInt(statsArray[4]?.integerValue);
    extendedChar.stats = {
      strength: parseInt(statsArray[0]?.integerValue),
      agility: parseInt(statsArray[1]?.integerValue),
      wisdom: parseInt(statsArray[2]?.integerValue),
      luck: parseInt(statsArray[3]?.integerValue),
    };

    extendedChar.currentMap =
      mapsMap?.[parseInt(fields?.[`CurrentMap_${index}`]?.integerValue)];

    // inventory bags used
    const rawInvBagsUsed = JSON.parse(
      fields?.[`InvBagsUsed_${index}`]?.stringValue
    );
    const bags = Object.keys(rawInvBagsUsed);
    extendedChar.invBagsUsed = bags?.map((bag) => ({
      id: bag,
      name: itemMap[`InvBag${bag}`],
    }));

    // equipment indices (0 = armor, 1 = tools, 2 = food)
    const equipmentMapping = { 0: "armor", 1: "tools", 2: "food" };
    const equippableNames = fields[
      `EquipOrder_${index}`
      ]?.arrayValue?.values?.reduce(
      (result, item, index) => ({
        ...result,
        [equipmentMapping?.[index]]: item.mapValue.fields,
      }),
      {}
    );
    const equipapbleAmount = fields[
      `EquipQTY_${index}`
      ]?.arrayValue?.values?.reduce(
      (result, item, index) => ({
        ...result,
        [equipmentMapping?.[index]]: item?.mapValue?.fields,
      }),
      {}
    );
    extendedChar.equipment = Array.from(
      Object.values(equippableNames.armor)
    ).reduce(
      (res, { stringValue }) =>
        stringValue ? [...res, { name: itemMap?.[stringValue] }] : res,
      []
    );
    extendedChar.tools = Array.from(
      Object.values(equippableNames.tools)
    ).reduce(
      (res, { stringValue }) =>
        stringValue ? [...res, { name: itemMap?.[stringValue] }] : res,
      []
    );
    extendedChar.food = Array.from(Object.values(equippableNames.food)).reduce(
      (res, { stringValue }, index) =>
        stringValue
          ? [
            ...res,
            {
              name: itemMap[stringValue],
              amount: parseInt(equipapbleAmount.food[index]?.integerValue),
            },
          ]
          : res,
      []
    );

    // star signs
    const starSignsObject = fields?.[`PVtStarSign_${index}`]?.stringValue;
    extendedChar.starSigns = starSignsObject
      .split(",")
      .filter((item) => parseInt(item))
      .map((starSign) => starSignMap?.[starSign]);

    // equipped bubbles
    const cauldronBubbles = JSON.parse(fields?.CauldronBubbles?.stringValue);
    extendedChar.equippedBubbles = cauldronBubbles?.[index].reduce(
      (res, bubbleInd) => (bubbleInd ? [...res, bubblesMap?.[bubbleInd]] : res),
      []
    );

    // crafting material in production
    const anvilCraftsMapping =
      fields[`AnvilPAselect_${index}`]?.arrayValue?.values;
    const selectedProducts = anvilCraftsMapping
      .sort((a, b) => a?.integerValue - b?.integerValue)
      .map(({ integerValue }) => itemMap?.[`CraftMat${integerValue}`]);
    extendedChar.anvil = {
      selected: selectedProducts,
    };
    const skillsInfoObject = fields?.[`Lv0_${index}`]?.arrayValue?.values;
    extendedChar.skillsInfo = skillsInfoObject.reduce(
      (res, { integerValue }, index) =>
        integerValue !== "-1"
          ? {
            ...res,
            [skillIndexMap[index]]: integerValue,
          }
          : res,
      {}
    );

    const cardSet = JSON.parse(fields?.[`CSetEq_${index}`]?.stringValue);
    const equippedCards = fields?.[`CardEquip_${index}`]?.arrayValue?.values
      .map(({ stringValue }) => ({
        cardName: cardEquipMap[stringValue],
        stars: account?.cards?.[cardEquipMap?.[stringValue]]?.stars,
      }))
      .filter((_, ind) => ind < 8); //cardEquipMap
    extendedChar.cards = {
      cardSet: cardSetMap[Object.keys(cardSet)[0]],
      equippedCards,
    };
    // printer
    const fieldsPrint = JSON.parse(fields.Print.stringValue);
    const printData = fieldsPrint.slice(5, fieldsPrint.length); // REMOVE 5 '0' ELEMENTS
    // There are 14 items per character
    // Every 2 items represent an item and it's value in the printer.
    // The first 5 pairs represent the stored samples in the printer.
    // The last 2 pairs represent the samples in production.
    const chunk = 14;
    const relevantPrinterData = printData.slice(
      index * chunk,
      index * chunk + chunk
    );
    extendedChar.printer = relevantPrinterData.reduce(
      (result, printItem, sampleIndex, array) => {
        if (sampleIndex % 2 === 0) {
          const sample = array
            .slice(sampleIndex, sampleIndex + 2)
            .map((item, sampleIndex) =>
              sampleIndex === 0 ? itemMap[item] : item
            );
          if (sampleIndex < 10) {
            result.stored.push({ item: sample[0], value: sample[1] });
          } else {
            result.selected.push({ item: sample[0], value: sample[1] });
          }
        }
        return result;
      },
      { stored: [], selected: [] }
    );

    const obolObject = fields[`ObolEqO0_${index}`].arrayValue.values;
    extendedChar.obols = obolObject.map(({ stringValue }, index) => ({
      name: obolMap[stringValue],
      shape: obolCharacterShapeMap[index]
    }));

    return {
      ...character,
      ...extendedChar,
    };
  });
};

const buildGuildData = (guildInfo, fields) => {
  const guildData = {};
  const totalMembers = Object.keys(guildInfo);
  guildData.members = Object.keys(guildInfo).map((memberInfo, index) => {
    const {
      a: name,
      // b: unknown,
      c: className,
      d: level,
      e: guildPoints,
      f: wantedPerk,
      g: rank,
    } = guildInfo[memberInfo];
    return {
      name,
      className: classMap[className],
      level,
      guildPoints,
      wantedPerk: guildBonusesMap[wantedPerk],
      rank,
      accountId: totalMembers[index],
    };
  });
  const guildBonusesObject = JSON.parse(fields?.Guild?.stringValue);
  guildData.bonuses = guildBonusesObject[0].map((bonus, index) => ({
    name: guildBonusesMap[index],
    level: bonus,
  }));
  // guildData.maxMembers = totalMembers.length + 4 *
  return guildData;
};

const calculateStars = (card, amountOfCards) => {
  const base = cardLevelMap[card];
  // 1 star - base, 2 stars - base * 3, 3 stars - base * 5
  if (amountOfCards < base) {
    return 0;
  } else if (amountOfCards >= base * 9) {
    return 3;
  } else if (amountOfCards >= base * 4) {
    return 2;
  } else if (amountOfCards >= base) {
    return 1;
  }
  return null;
};

const copyTextToClipboard = (text) => {
  const el = document.createElement("textarea");
  el.value = text;
  // fix the stutter in the page when adding the new element to the page.
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const showTooltip = (e, text) => {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerText = text;
  if (e.clientX + 80 > window.innerWidth) {
    tooltip.style.top = e.clientY + 20 + "px";
    tooltip.style.left = e.clientX - 60 + "px";
  } else if (e.clientY + 50 > window.innerHeight) {
    tooltip.style.top = e.clientY - 50 + "px";
    tooltip.style.left = e.clientX + 20 + "px";
  } else {
    tooltip.style.top = e.clientY + 20 + "px";
    tooltip.style.left = e.clientX + 20 + "px";
  }
  tooltip.style.display = "block";
  setTimeout(() => {
    tooltip.style.display = "none";
  }, 1000);
};

//
// if (process && process?.env?.NODE_ENV === 'development') {
//   const fs = require("fs");
//   const data = parseData(rawJson);
//   fs.writeFile("morta1.json", JSON.stringify(data), "utf8", (err) => {
//     if (err) console.log("Error occurred while creating morta1.json");
//     console.log("Done");
//   });
// }
