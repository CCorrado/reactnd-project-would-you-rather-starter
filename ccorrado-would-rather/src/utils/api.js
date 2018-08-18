import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA.js'

export function getUsersAndQuestions() {
    return Promise.all([
        _getUsers(), _getQuestions()
    ]).then(([users, questions]) => ({
        users, questions
    }))
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveAnswer({currentUser, questionId, answer}) {
    return _saveQuestionAnswer({currentUser, questionId, answer})
}