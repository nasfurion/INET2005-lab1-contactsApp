import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});
  
// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
});
  
// to-do: add post, put, and delete routers  
//POST
router.post('/create/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Adding contact id ${id}`);
});

//PUT
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Updating contact id ${id}`);
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleting contact id ${id}`);
});

export default router;

