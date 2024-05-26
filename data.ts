export const API_KEY = 'AIzaSyBCqSOglayvjomFQcysFGr9EvamDDn7EkU'

export const value_converter = (value: string | number | undefined) => {
    if (value === undefined) {
        return undefined;
    }
    
    if (typeof value === 'string') {
        value = parseInt(value);
    }
    
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 10000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};