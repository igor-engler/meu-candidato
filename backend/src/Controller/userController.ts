import { db } from '../db';
import { User } from "../Models/user";

const firebase = db;
const firestore = firebase.firestore();

const addUser = async (request, response, next) => {
    try {
        const { email, name, password } = request.body;

        const user: User = new User();

        Object.assign(user, {
            email,
            name,
            password,
        });

        await firestore.collection('users').doc().set({ email, name, password });

        response.status(200).send('Record saved successfuly');

    } catch (error) {
        response.status(400).send(error.message);
    }
};

export { addUser };