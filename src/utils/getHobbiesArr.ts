export const getHobbiesArr = (obj: { [key: string]: boolean }) => {
    const hobbies = [];
    for (let key in obj) {
        if (obj[key]) {
            hobbies.push(key);
        }
    }
    return hobbies;
};