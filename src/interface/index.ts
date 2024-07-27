export interface Object {
    [key: string]: string | string[] | number | number[] | object | object[];
}

export interface FilterObject extends Object {}

export interface RegBody extends Object {}
