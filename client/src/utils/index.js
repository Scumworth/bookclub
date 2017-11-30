// utils/index.js

export const requestCheck = (title, results) => {
    let requestExists = false;
    if (results) {
        for (let i = 0; i < results.length; i++) {
            if (results[i].title === title) {
                requestExists = true;
            }
        }
    }
    return requestExists;
} 

export const inventoryCheck = (title, results) => {
    let itemInInventory = false;
    if (results) {
        for (let i = 0; i < results.length; i++) {
            if (results[i].title === title) {
                itemInInventory = true;
            }
        }
    }
    return itemInInventory;
}
