const QuestionSchema = require('../models/questionSchema');

let create = (question) => {
  let newQuestion = {
    questionContent: question
  }
  QuestionSchema.create(newQuestion);
};

module.exports = {
  create
}
