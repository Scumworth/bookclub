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
    .patch((req, res) => {
        const newBook = {title: req.body.title, thumbnail: req.body.thumbnail};
        User.findOne({ userName: req.body.userName }).then((user) => {
            let placement = false;
            for (let i = 0; i < user.books.length; i++) {
                if(user.books[i].title === req.body.title){
                    placement = true;
                }
            }
            if(user && !placement) {
                User.findOneAndUpdate(
                    { userName: req.body.userName },
                    { $set: { books: user.books.concat([newBook])}}
                ).then(() => {
                    res.send({ message: 'Book has been added to user.'});
                }, (e) => res.status(400).send(e));
            }
            else if(user && placement) {
                User.findOneAndUpdate(
                    { userName: req.body.userName },
                    { $set: { books: user.books.filter(book => book.title !== req.body.title) }}
                ).then(() => {
                    res.send({ message: 'Book has been removed from user' })
                }, (e) => res.status(400).send(e))
            }
        }, (e) => {
            res.status(400).send(e);
        })
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
            title: req.body.title,
            thumbnail: req.body.thumbnail
        })
        book.save().then((book) => {
            res.send({ message: 'Book added.'});
        }, (e) => {
            res.status(400).send(e);
        });
    })
   
router.route('/mybooks')
    .get((req, res) => {
        const userName = req.query.userName;
        User.findOne({ userName: userName }).then((user) => {
            res.json(user.books)
        }, (e) => {
            res.status(400).send(e);
        })
    })
    .patch((req, res) => {
        Book.findOne({ title: req.body.title }).then((book) => {
            console.log(book.users.indexOf(req.body.userName));
            if(book && book.users.indexOf(req.body.userName) === -1) {
                Book.findOneAndUpdate(
                    { title: req.body.title },
                    { $set: { users: book.users.concat([req.body.userName])}}
                ).then(() => {
                    res.send({ message: 'User has been added to book.'});
                }, (e) => res.status(400).send(e));
            }
            else if (book && book.users.indexOf(req.body.userName) !== -1) {
                Book.findOneAndUpdate(
                    { title: req.body.title },
                    { $set: { users: book.users.filter(user => user !== req.body.userName) } },
                    { new: true }
                ).then((book) => {
                    res.send({ message: 'User had been removed from book' })
                    if(book.users.length === 0){
                        Book.remove({ title: req.body.title }).then(book => {
                            console.log(`${book.title} has no more users so it has been removed`);
                        }, (e) => res.status(400).send(e))
                    }
                }, (e) => res.status(400).send(e));
            }
        }, (e) => {res.status(400).send(e);
        })
    })

        

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
