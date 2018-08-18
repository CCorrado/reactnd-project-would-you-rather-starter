import {getUsersAndQuestions} from "../utils/api";
import {receiveUsers} from "./users";
import {hideLoading, showLoading} from 'react-redux-loading'
import {receiveQuestions} from "./questions";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getUsersAndQuestions()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}