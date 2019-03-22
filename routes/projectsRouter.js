const express = require('express');
const projectsData = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
  projectsData
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: 'Sorry, cant find them projects' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  projectsData
    .get(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Can I see your id?' });
    });
});

router.post('/', (req, res) => {
  const projectInfo = req.body;
  projectsData
    .insert(projectInfo)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err =>
      res.status(500).json({ errorMessage: 'Something broke inside...' })
    );
});

router.put('/', (req, res) => {
  const id = req.params.id;
  const projectBody = req.body;
  projectsData
    .update(id, projectBody)
    .then(result => {
      if (!result) {
        return res.status(404).json({
          errorMessage:
            'You are looking for something that doesnt even exist...'
        });
      } else {
        projectsData.get(id).then(project => {
          res.json(project);
        });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ errorMessage: 'I messed up, give me a moment.' });
    });
});

router.delete('/', (req, res) => {
  const id = req.params.id;
  projectsData
    .remove(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'That user must be hiding.' });
    });
});

router.get('/', (req, res) => {
  const id = req.params.id;
  projectsData
    .getProjectActions(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cant seem to find my id, officer...' });
    });
});

module.exports = router;
