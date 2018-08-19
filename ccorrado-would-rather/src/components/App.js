import React, {Component, Fragment} from 'react';
import '../App.css';
import Login from "./Login";
import {handleInitialData} from "../actions/shared";
import {LoadingBar} from "react-redux-loading";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from "react-redux";
import Dashboard from "./Dashboard";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        {this.props.loading === true ?
                            <div>
                                <Route path='/' component={Login}/>
                            </div> :
                            <div>
                                <Route path='/' component={Dashboard}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
