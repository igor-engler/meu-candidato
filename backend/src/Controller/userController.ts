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

        const id = user.id;

        await firestore.collection('users').doc().set({ id, email, name, password });

        response.status(200).send('Record saved successfuly');

    } catch (error) {
        response.status(400).send(error.message);
    }
};

export { addUser };