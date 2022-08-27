import Transaction from "../models/Transaction.js";

export const create = async ({ type, amount, inventoryItemId, serviceId, customerId, userId }) => {
    const entry = await Transaction.create({type, amount, inventoryItemId, serviceId, customerId, userId});
    console.log("Entry-----------", entry)
    return entry;
};