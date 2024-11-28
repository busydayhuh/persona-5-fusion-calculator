const elements = [
    "phys",
    "gun",
    "fire",
    "ice",
    "elec",
    "wind",
    "psy",
    "nuke",
    "bless",
    "curse",
    "healing",
    "ailment",
    "support",
    "almighty",
    "passive",
];

const inheritanceChart = {
    phys: [
        "true",
        "true",
        "false",
        "false",
        "false",
        "false",
        "false",
        "false",
        "false",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    fire: [
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    ice: [
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    elec: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    wind: [
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    psy: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    nuke: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    bless: [
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "false",
        "true",
        "true",
        "true",
    ],
    curse: [
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
    ],
    healing: [
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
    ailment: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "false",
        "true",
        "true",
        "true",
        "true",
    ],
    almighty: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
    ],
};

export function getInheritedElements(inheritanceType) {
    const inheritanceList = inheritanceChart[inheritanceType];
    const inheritedElements = [];

    for (let i = 0; i < inheritanceList.length; i++) {
        if (inheritanceList[i] === "true") {
            inheritedElements.push(elements[i]);
        }
    }

    return inheritedElements;
}
