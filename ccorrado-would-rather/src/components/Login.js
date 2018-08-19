import {connect} from 'react-redux'
import React, {Component} from 'react'
import {setAuthedUser} from "../actions/authedUser";

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    login = (e) => {
        e.preventDefault()
        const {dispatch, authedUser} = this.props

        dispatch(setAuthedUser({
            authedUser
        }))
    }

    handleChange(e) {
        this.props.authedUser = e.target.value
    }

    render() {
        return (
            <div>
                <h3 className='center'>Sign In</h3>
                {this.props.loading === true ? null :
                    <ul className='user-dropdown'>
                        <select value={this.props.authedUser} onChange={this.handleChange}>
                            {
                                Object.values(this.props.users).map((user) => (
                                    <option value={user.id}>{user.name}</option>
                                ))}
                        </select>
                    </ul>
                }
                <button className='sign-in-button' onClick={(e) => this.login(e)}>
                    Sign In
                </button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        loading: Object.keys(users).length === 0,
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Login)