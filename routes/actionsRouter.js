const express = require('express');
const actionsData = require('../data/helpers/actionModel');
const router = express.Router();

router.get('/', (req, res) => {
  actionsData
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: 'Im looking for the posts, but...' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  actionsData
    .get(id)
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).json({ error: 'I promise...Im looking but...' });
    });
});

router.post('/', (req, res) => {
  const postInfo = req.body;
  actionsData
    .insert(postInfo)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err =>
      res.status(500).json({ errorMessage: 'Im getting coffee, maybe later?' })
    );
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const actionBody = req.body;
  actionsData
    .update(id, actionBody)
    .then(result => {
      if (!result) {
        return res
          .status(404)
          .json({ errorMessage: 'Yeah, that post dont even exist.' });
      } else {
        actionsData.get(id).then(action => {
          res.json(action);
        });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ errorMessage: 'Starbucks is taking FOREVER!' });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  actionsData
    .remove(id)
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: 'I looked, and then I looked again, but like...I dont see it...'
      });
    });
});

module.exports = router;
