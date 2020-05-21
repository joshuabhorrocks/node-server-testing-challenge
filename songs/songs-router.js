const express = require('express');

const Songs = require('./songs-model');

const router = express.Router();

router.get('/', (req, res) => {
  Songs.getAll()
  .then(songs => {
    res.json(songs);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get songs' });
  });
});

router.post('/', (req, res) => {
    const songData = req.body;

    Songs.insert(songData)
    .then(song => {
        res.status(201).json(song);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to add song' });
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Songs.remove(id)
    .then(song => {
        res.json(song);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete song' });
    });
});

module.exports = router;