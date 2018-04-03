const QuestionSchema = require('../models/questionSchema');

let addQuestion = (question, callback) => {
  let newQuestion = {
    questionContent: question
  }
  try {
    QuestionSchema.create(newQuestion, function(err, question) {
      callback(err, question)
    });
  } catch (ex) {
    console.log(ex);
  }
};

let findQuestionById = (id, callback) => {
  try {
    QuestionSchema.findOne({_id: id}, function(err, doc){
      callback(err, doc)
    });
  } catch (ex) {
    console.log(ex);
  }
};

// let updateQuestion = (id, answer, callback) => {
//   try {
//     QuestionSchema.findById(id, (err, doc) => {
//       if (err) console.log();
//       if (answer == 'yes') {
//         doc.yes += 1;
//       } else {
//         doc.no += 1;
//       }
//       doc.save((err) => {
//         callback(err, doc);
//       });
//     })
//   } catch (ex) {
//     console.log(ex);
//   }
// };

let updateQuestion = (id, answer) => {
  try {
    cosnt question = await QuestionSchema.findById(id)
      if (answer == 'yes') {
        doc.yes += 1;
      } else {
        doc.no += 1;
      }
      doc.save((err) => {
        callback(err, doc);
      });

  } catch (ex) {
    console.log(ex);
  }
};
const findPromise = QuestionSchema.findById(id);
findPromise
.then((question) => {
    if (answer == 'yes') {
      doc.yes += 1;
    } else {
      doc.no += 1;
    }
    return question.save();
  })
  .then ((question) => {
    callback(null, question)
  })
  .catch(err => callback(err, null))

let loadData = (callback) => {
  QuestionSchema.count().exec(function (err, count) {
    QuestionSchema.findOne().skip(Math.floor(Math.random() * count)).exec(function (err, result) {
        if (err) return console.error(err);
        callback(result);
      })
  })
};

module.exports = {
  addQuestion,
  findQuestionById,
  updateQuestion,
  loadData
}
