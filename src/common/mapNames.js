
export const mapNames = (arrayWithName) => {
    const names = arrayWithName.map((element) => element.name).join(", ");
    return names;
};