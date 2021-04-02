export function getUserData() {
    const email = sessionStorage.getItem('email');
    if (email) {
        return JSON.parse(email);
    } else {
        return undefined;
    }
}

export function setUserData(email) {
    sessionStorage.setItem('email', JSON.stringify(email));
}

export function clearUserData() {
    sessionStorage.removeItem('email');
}