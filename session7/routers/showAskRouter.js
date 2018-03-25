const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
const questionController = require('../controllers/questionController.js');

//-----------------------------------------------------------------------------

Router.get('/', (req, res) => {
  try {
    questionController.loadData((result) => {
      res.render('showAsk', {
        question: result.questionContent,
        id: result._id,
      })
    });
  } catch (ex) {
    console.log(ex);
  }
});

// ----------------------------------------------------------------------------
Router.post('/', (req, res) => {
  try {
    questionController.loadData((result) => {
      let id = req.body.id;
      let question = req.body.question;

      if (req.body.yes) {
        result.yes += 1;
      } else if (req.body.no) {
        result.no += 1;
      } else if (req.body.other) {
        res.redirect('/');
        return;
      }
      res.redirect('/question/' + id);
    });
  } catch (ex) {
    console.log(ex);
  }
});

//-----------------------------------------------------------------------------

module.exports = Router;
