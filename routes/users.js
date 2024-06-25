import express from 'express';
const router = express.Router();

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

export default router;