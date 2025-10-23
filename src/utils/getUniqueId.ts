const getUniqueId = () => {
    const min = Math.pow(10, 14);
    const max = Math.pow(10, 15) - 1;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return String(random);
};

export default getUniqueId;
