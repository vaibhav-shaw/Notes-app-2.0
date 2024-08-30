const db = require('../models');
const moment = require('moment');

//create main model
const Note = db.notes;

//get all notes
const getAllNotes = async (req, res) => {
    const notes = await Note.findAll();
    res.status(200).json(notes);
}

//create notes
const addNote = async (req, res) => {
    let info = {
        title: req.body.title,
        content: req.body.content,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')

    }
    const note = await Note.create(info);
    res.status(201).json(note);
}

//update notes
const updateNote = async (req, res) => {
    const id = req.params.id;
    const note = await Note.findByPk(id)
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    await Note.update(req.body, { where: { id: id } })
    res.status(200).json(note);
}

//delete notes
const deleteNote = async (req, res) => {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    await note.destroy({ where: { id: id } });
    res.status(204).json({ message: 'Note deleted successfully' });
}

module.exports = {
    getAllNotes,
    addNote,
    updateNote,
    deleteNote
}