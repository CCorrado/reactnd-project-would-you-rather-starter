import React, {Component} from 'react'
import {connect} from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
    render() {
        const questions = this.props.questions

        return (
            <div>
                <h3 className='center'>Questions</h3>
                {this.props.loading === true ? null :
                    <div className='question-list'>
                        {Object.values(questions).map((question) => (
                            <Question question={question}/>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        loading: Object.keys(questions).length === 0,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Dashboard)