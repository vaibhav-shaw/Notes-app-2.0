const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'http://localhost:8081',
}

//routes
const router = require('./routes/noteRouter');
app.use('/api/notes', router);

//middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Notes App API' });
});

//port
const port = process.env.PORT || 8080;

//server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});