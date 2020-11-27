function getFileName(level, locked){
    if (level == -1) level = 0;
    if (level == 0 && locked) return "https://d2gd6pc034wcta.cloudfront.net/tier/-1.svg";
    if (level == 0) return "https://d2gd6pc034wcta.cloudfront.net/tier/0.svg";
    return "https://d2gd6pc034wcta.cloudfront.net/tier/" + level + ".svg"
}

function getTier(level, locked){
    if (level === null) return "Not Found";
    if (level == -1) level = 0;
    if (level == 0 && locked) return "Not Ratable";
    if (level == 0) return "Unrated";

    const pre = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Ruby"];
    const sub = ["V", "IV", "III", "II", "I"];
    return pre[ parseInt( (level-1) / 5 ) ] + " " + sub[ (level-1) % 5 ];
}

function getTierColor(level){
    if (level === null) return "#000000";
    if (level == -1 || level == 0) return "#000000";

    if (1 <= level && level <= 5) return "#AD5600";
    if (6 <= level && level <= 10) return "#3F5C78";
    if (11 <= level && level <= 15) return "#F0AC2F";
    if (16 <= level && level <= 20) return "#27E2A4";
    if (21 <= level && level <= 25) return "#32C3FC";
    if (26 <= level && level <= 30) return "#FF0062";
}