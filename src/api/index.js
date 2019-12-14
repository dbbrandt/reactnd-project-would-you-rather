import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author })
}

export function saveAnswer (authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}
