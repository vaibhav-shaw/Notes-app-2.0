const noteController = require('../controllers/noteController');
const router = require('express').Router();

router.get('/getall', noteController.getAllNotes);
router.post('/create', noteController.addNote);
router.put('/update/:id', noteController.updateNote);
router.delete('/delete/:id', noteController.deleteNote);

module.exports = router;