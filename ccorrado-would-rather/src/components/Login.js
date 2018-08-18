import {connect} from 'react-redux'
import React, {Component} from 'react'

class Login extends Component {
    selectedUser

    login = (e, id) => {
        e.preventDefault()
        //TODO navigate user to the dashboard to view/answer/create questions
    }

    handleChange(event) {
        this.selectedUser.user = event.target.value
    }

    render() {
        const {users} = this.props.users

        return (
            <div>
                <h3 className='center'>Sign In</h3>
                <ul className='user-dropdown'>
                    <select value={this.selectedUser} onChange={this.handleChange}>
                        {users.map((user) => (
                            <option value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </ul>
                <button className='sign-in-button' onClick={(e) => this.login(e, this.selectedUser.user.id)}>
                    Sign In
                </button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        loading: authedUser === null,
        users
    }
}

export default connect(mapStateToProps)(Login)