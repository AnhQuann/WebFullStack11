const QuestionSchema = require('../models/questionSchema');

let create = (question) => {
  let newQuestion = {
    questionContent: question
  }
  QuestionSchema.create(newQuestion);
};

let loadData = (callback) => {
  QuestionSchema.count().exec(function (err, count) {
    QuestionSchema.findOne().skip(Math.floor(Math.random() * count)).exec(function (err, result) {
        if (err) return console.error(err);
        callback(result);
      })
  })
};

module.exports = {
  create,
  loadData
}
