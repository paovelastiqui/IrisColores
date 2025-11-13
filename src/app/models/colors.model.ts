export interface IColor {
    name: string;
    theme: Theme;
    group: Group;
    hex: string;
    rgb: string;
}

export enum Group {
    Aqua = "Aqua",
    Blue = "Blue",
    Brown = "Brown",
    Cyan = "Cyan",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    Yellow = "Yellow",
}

export enum Theme {
    Dark = "dark",
    Light = "light",
}
