import {connect} from 'react-redux'
import React, {Component} from 'react'
import {setAuthedUser} from "../actions/authedUser";

class Login extends Component {

    state = {
        selectedUser: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    login = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        const selectedUser = this.props.users[this.state.selectedUser]
        console.log(selectedUser)
        dispatch(setAuthedUser({
            selectedUser
        }))
    }

    handleChange(e) {
        this.setState({selectedUser: e.target.value})
    }

    render() {
        return (
            <div>
                <h3 className='center'>Sign In</h3>
                <h4 className='center'>{
                    this.state.selectedUser
                }</h4>
                {this.props.loading === true ? null :
                    <ul className='user-dropdown'>
                        <select value={this.props.authedUser} onChange={this.handleChange}>
                            <option value={null}></option>
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