import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

//mock database

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24 

    }
]

router.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})

export default router;