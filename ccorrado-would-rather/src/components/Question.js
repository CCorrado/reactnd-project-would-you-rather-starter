import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Question extends Component {
    render() {
        const {question, users} = this.props

        return (
            <div className='container'>
                <h3 className='question'>${users[question.author]} asks:</h3>
                <div className='avatar'>
                    <img
                        src={users[question.author].avatarURL}
                        alt={`Avatar of ${users[question.author].name}`}
                        className='avatar'
                    />
                </div>
                <div className='question-info'>
                    <p>
                        {question.optionOne.votes > question.optionTwo.votes ?
                            question.optionOne.text : question.optionTwo.text
                        }
                    </p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {question}) {
    return {
        loading: authedUser === null,
        users,
        questions,
        question
    }
}

export default withRouter(connect(mapStateToProps)(Question))