// server/index.js

const express = require('express');
const app = express();
const cors = require('cors');
const { mongoose } = require('./db/mongoose');
const { Book } = require('./models/book');
const { User } = require('./models/user');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({ message: 'API Initialized' });
});

router.route('/users')
    .get((req, res) => {
        User.find({}).then((users) => {
            res.json(users);
        }, (e) => {
            res.status(400).send(e)
        });
    })
    .post((req, res) => {
        const user = new User({
            userName: req.body.userName,
            books: []
        })
        user.save().then((user) => {
            res.send({ message: 'User added.'});
        }, (e) => {
            res.status(400).send(e);
        });
    })

router.route('/allbooks')
    .get((req, res) => {
        Book.find({}).then((books) => {
            res.json(books);
        }, (e) => {
            res.status(400).send(e)
        });
    })
    .post((req, res) => {
        const book = new Book({
            title: req.body.result.title,
            thumbnail: req.body.result.thumbnail
        })
        book.save().then((book) => {
            res.send({ message: 'Book added.'});
        }, (e) => {
            res.status(400).send(e);
        });
    })
   
router.route('/mybooks')
    .get((req, res) => {
        User.findOne({ userName: req.body.userName }).then((user) => {
            res.json(user.books)
        }, (e) => {
            res.status(400).send(e);
        })
    })
    .put((req, res) => {
        const newBook = {title: req.body.result.title, thumbnail: req.body.result.thumbnail};
        User.findOne({ userName: req.body.userName }).then((user) => {
            if(user && user.books.indexOf(newBook) === -1) {
                User.findOneAndUpdate(
                    { userName: req.body.userName },
                    { $set: { books: user.books.concat([newBook])}}
                ).then((book) => {
                    res.send({ message: 'Book has been added to user.'});
                }, (e) => res.status(400).send(e));
            }
        }, (e) => {
            res.status(400).send(e);
        })
    })
    

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
