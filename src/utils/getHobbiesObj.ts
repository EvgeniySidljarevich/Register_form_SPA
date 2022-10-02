type Arr = string[];
type InitState = {
    [key:string]: boolean;
}

export const getHobbiesObj = (arr: Arr) => {
    const initState: InitState = {};

    arr.forEach(((item: string) => {
        initState[item as keyof InitState] = false;
    }))

    return initState;
};