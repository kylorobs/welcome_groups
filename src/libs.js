export function retrieveLocallyStoredValue(key) {
    try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return undefined
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        // If error also return initialValue
        console.log(error);
        return undefined;
    }
}

export function setLocallyStoredValue(key, value) {
    try {
        // Allow value to be a function
        const valueToStore = value instanceof Function ? value() : value;
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
    }
}

export function removeLocallyStoredValue(key) {
    try {
        // Save to local storage
        window.localStorage.removeItem(key);
    } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
    }
}
