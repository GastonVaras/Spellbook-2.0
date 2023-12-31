const spells = [
    // {
    //     name: "spellTitle",
    //     castingTime: "spellTitle",
    //     school: "spellTitle",
    //     components: "spellTitle",
    //     level: "spellTitle",

    //     image: "spellIllustration",
    //     imageDescription:"spellIllustration",
    
    //     range: "spellAttributes",
    //     target: "spellAttributes",
    //     effect: "spellAttributes",
    //     area: "spellAttributes",
    //     duration: "spellAttributes",
    //     savingThrow: "spellAttributes",
    //     spellResistance: "spellAttributes",

    //     description: "spellDescription",

    //     materialComponents: "spellExtra",
    //     XPCost: "spellExtra",
    //     focus: "spellExtra",
    // },
    {
        name: "Create Water",
        school: "Conjuration",
        level: "0",
        image: "./images/water-template.png",
        imageDescription:"Create up to 2 gallons of water/level.~~   1 gallon weighs about 8 pounds.~~    One cubic foot contains roughly 8 gallons and weighs about 60 pounds.",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },

    {
        name: "Cure Minor Wounds",
        school: "Conjuration",
        level: "0",
        image: "./images/cure-minor-wounds.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Touch",
        target: "Creature touched",
        effect: "",
        area: "",
        duration: "Instantaneous",
        savingThrow: "Will half (harmless) (see text)",
        spellResistance: "Yes (harmless)",
        XPCost: "",
        focus: "",
        description: "When laying your hand upon a living creature, you channel positive energy that cures 1 points of damage +1 point per caster level (maximum +5).~        Since undead are powered by negative energy, this spell deals damage to them instead of curing their wounds. An undead creature can apply spell resistance, and can attempt a Will save to take half damage.",
    },
    {
        name: "Detect Magic",
        school: "Divination",
        level: "0",
        image: "./images/detect-magic.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "60 ft.",
        target: "",
        effect: "",
        area: "Quarter circle emanating from the character to the extreme of the range",
        duration: "Concentration, up to 1 minute/level (D)",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "The character detect magical auras. The amount of information revealed depends on how long the character studies a particular area or subject:~1st Round: Presence or absence of magical auras.~2nd Round: Number of different magical auras and the strength of the strongest aura.~3rd Round: The strength and location of each aura. If the items or creatures bearing the auras are in line of sight, the character can make Spellcraft skill checks to determine the school of magic involved in each. (Make one check per aura; DC 15 + spell level, or 15 + half caster level for a nonspell effect.)~Magical areas, multiple types of magic, or strong local magical emanations may confuse or conceal weaker auras.~        Aura Strength: An aura’s magical power and strength depend on a spell’s functioning spell level or an item’s caster level.~      If an aura falls into more than one category, detect magic indicates the stronger of the two.~        Length Aura Lingers: How long the aura lingers depends on its original strength.~     Note: Each round, the character can turn to detect things in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it. Outsiders and elementals are not magical in themselves, but if they are conjured, the conjuration spell registers.",
    },
    {
        name: "Detect Poison",
        school: "Divination",
        level: "0",
        image: "./images/detect-poison.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "One creature, one object, or a 5-ft. cube",
        effect: "",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "The character determine whether a creature, object, or area has been poisoned or is poisonous. The character can determine the exact type of poison with a successful Wisdom check (DC 20). A character with the Alchemy skill may try an Alchemy check (DC 20) if the Wisdom check fails, or may try the Alchemy check prior to the Wisdom check.~        Note: The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
    },
    {
        name: "Flare (Light)",
        school: "Evocation",
        level: "0",
        image: "./images/flare.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Burst of light",
        area: "",
        duration: "Instantaneous",
        savingThrow: "Fortitude negates",
        spellResistance: "Yes",
        XPCost: "",
        focus: "",
        description: "This cantrip creates a burst of bright light. If the character causes the light to burst directly in front of a single creature, that creature is dazzled. A dazzled creature suffers a –1 penalty on attack rolls. The creature recovers in 1 minute. Sightless creatures are not affected by flare.",
    },
    {
        name: "Guidance",
        school: "Divination",
        level: "0",
        image: "./images/guidance.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Touch",
        target: "Creature touched",
        effect: "",
        area: "",
        duration: "1 minute or until discharged",
        savingThrow: "None",
        spellResistance: "Yes",
        XPCost: "",
        focus: "",
        description: "This spell imbues the subject with a touch of divine guidance. The creature gets a +1 competence bonus on a single attack roll, saving throw, or skill check. It must choose to use the bonus before making the roll to which it applies.",
    },
    {
        name: "Know Direction",
        school: "Divination",
        level: "0",
        image: "./images/know-direction.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Personal",
        target: "",
        effect: "",
        area: "",
        duration: "Instantaneous",
        savingThrow: "",
        spellResistance: "",
        XPCost: "",
        focus: "",
        description: "The character instantly knows the direction of north from the character's current position. The spell is effective in any environment in which 'north' exists, but it may not work in extraplanar settings. The character's knowledge of north is correct at the moment of casting, but note that the character can get lost again within moments if the character doesn’t find some external reference point to help the character keep track of direction.",
    },
    {
        name: "Light (Light)",
        school: "Evocation",
        level: "0",
        image: "./images/light.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, M/DF",
        materialComponents: "A firefly or a piece of phosphorescent moss.  ",
        castingTime: "1 action",
        range: "Touch",
        target: "Object touched  ",
        effect: "",
        area: "",
        duration: "10 minutes/level (D)",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell causes an object to glow like a torch, shedding light in a 20-foot radius from the point the character touches. The effect is immobile, but it can be cast on a movable object. Light taken into an area of magical darkness does not function.",
    },
    {
        name: "Create Water",
        school: "Abjuration",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Divination",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Conjuration",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Enchantment",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Evocation",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Illusion",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "Necromancy",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
    {
        name: "Create Water",
        school: "transmutation",
        level: "0",
        image: "./images/create-water.png",
        imageDescription:"UN GALON DE AGUA",
        components: "V, S",
        materialComponents: "",
        castingTime: "1 action",
        range: "Close (25 ft. + 5 ft./2 levels)",
        target: "",
        effect: "Up to 2 gallons of water/level",
        area: "",
        duration: "Instantaneous",
        savingThrow: "None",
        spellResistance: "No",
        XPCost: "",
        focus: "",
        description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large (possibly creating a downpour or filling many small receptacles). ~Note: Conjuration spells can’t create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
    },
];

export {
    spells
};