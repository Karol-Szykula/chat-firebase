import React from 'react'

import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AuthForms from './AuthForms'
import { auth, googleProvider } from './../firebaseConfig'

const style = {
    paper: {
        margin: 15
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'center'
    }
}

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                }
                else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onEmailTextFieldChange = event => this.setState({ email: event.target.value })
    onPasswordTextFieldChange = event => this.setState({ password: event.target.value })

    onLoginClickButton = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        // .then(console.log)
        // .catch(console.log)

        // auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    }

    onLoginGoogleClickButton = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
    }

    render() {
        return (
            <Paper
                style={style.paper}
            >
                {
                    this.state.isUserLoggedIn ?
                        <div>

                            <FloatingActionButton
                                secondary={true}
                                style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999, color: 'white' }}
                                onClick={this.onLogOutClickHandler}
                            >
                                <ContentAdd />
                            </FloatingActionButton>
                            {this.props.children}
                        </div>
                        :

                        <AuthForms
                            onEmailTextFieldChange={this.onEmailTextFieldChange}
                            onPasswordTextFieldChange={this.onPasswordTextFieldChange}
                            onLoginClickButton={this.onLoginClickButton}
                            onLoginGoogleClickButton={this.onLoginGoogleClickButton}
                            buttonDivStyles={style.buttonDiv}
                        />
                }
            </Paper>
        )
    }
}

export default Auth