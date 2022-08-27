import User from "../models/User.js";

export const create = async ({firstName, lastName, email, password}) => {
    const user = await User.create({firstName, lastName, email, password});
    console.log("USER.............", user);
    return {firstName, lastName, email, id: user.id}
};

export const findByEmail = async (email) => {
    const user = await User.findOne({ where: { email }});
    console.log("USER", user);
    return user;
};

