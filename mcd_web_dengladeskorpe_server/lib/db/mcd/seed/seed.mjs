
import dbConnect from "../../dbConnect.js";
import dishModel from "../../models/dish.model.mjs";
import categoryModel from "../../models/category.model.mjs";
import employeeModel from "../../models/employee.model.mjs";
import ingredientModel from "../../models/ingredient.model.mjs";
import messageModel from "../../models/message.model.mjs";
import orderModel from "../../models/order.model.mjs";
import { stubCategories, stubDishes, stubEmployees, stubIngredients, stubMessages, stubOrders } from "./seed.data.js";
import { seedCategory, seedDish, seedEmployee, seedIngredient, seedMessage, seedOrder, seedUser } from "./seed.helper.js";
import bcrypt from 'bcryptjs';


export const seedUsers = async () => {
    
    // Seeding Admin User
    const user = await seedUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "picture" : "/users/no-user.jpg",
        "role" : "admin",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })

    // Seeding Guest User
    const guest = await seedUser({
        "name" : "guest",
        "email" : "guest@mediacollege.dk",
        "picture" : "/users/no-user.jpg",
        "role" : "guest",
        "hashedPassword" : await bcrypt.hash("guest", 10)
    })

    return true
}


export const seedDishes = async () => {

    await dbConnect();
    const existing = await dishModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedDishes: ${existing} retter findes allerede.`);
        return;
    }

    for (let i = 0; i < stubDishes.length; i++) {

        await seedDish(stubDishes[i]);

    }

};

export const seedMessages = async () => {

    await dbConnect();
    const existing = await messageModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedMessages: ${existing} beskeder findes allerede.`);
        return;
    }

    for (let i = 0; i < stubMessages.length; i++) {

        await seedMessage(stubMessages[i]);

    }

};

export const seedEmployees = async () => {

    await dbConnect();
    const existing = await employeeModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedEmployees: ${existing} medarbejdere findes allerede.`);
        return;
    }

    for (let i = 0; i < stubEmployees.length; i++) {

        await seedEmployee(stubEmployees[i]);

    }

}

export const seedIngredients = async () => {

    await dbConnect();
    const existing = await ingredientModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedIngredients: ${existing} ingredienser findes allerede.`);
        return;
    }

    for (let i = 0; i < stubIngredients.length; i++) {

        await seedIngredient(stubIngredients[i]);

    }

}

export const seedCategories = async () => {

    await dbConnect();
    const existing = await categoryModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedCategories: ${existing} kategorier findes allerede.`);
        return;
    }

    for (let i = 0; i < stubCategories.length; i++) {

        await seedCategory(stubCategories[i]);

    }

}

export const seedOrders = async () => {
    
    await dbConnect();
    const existing = await orderModel.countDocuments({});
    if (existing > 0) {
        console.log(`Springer over seedOrders: ${existing} ordrer findes allerede.`);
        return;
    }

    let dishes = await dishModel.find({});
   
    for (let i = 0; i < stubOrders.length; i++) {

        let stub = stubOrders[i];
        stub.dishes[0].dish = dishes[i]._id;


        await seedOrder(stub);

    }

}