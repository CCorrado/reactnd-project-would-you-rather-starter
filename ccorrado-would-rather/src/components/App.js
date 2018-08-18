import React, {Component, Fragment} from 'react';
import '../App.css';
import Login from "./Login";
import {handleInitialData} from "../actions/shared";
import {LoadingBar} from "react-redux-loading";
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
                        {this.props.loading === true ? null
                            : <div>
                                <Route exact path='/' component={Login}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default App;
