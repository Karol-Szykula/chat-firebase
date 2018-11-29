import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const AuthForms = (props) => (
    <div>
        <div>
            <TextField
                type={'text'}
                name={'login'}
                value={props.email}
                onChange={props.onEmailTextFieldChange}
                fullWidth={true}
            />
        </div>
        <div>
            <TextField
                type={'password'}
                name={'password'}
                value={props.password}
                onChange={props.onPasswordTextFieldChange}
                fullWidth={true}

            />
        </div>
        <div
            style={props.buttonDivStyles}
        >
            <RaisedButton
                label={'Log In'}
                primary={true}
                onClick={props.onLoginClickButton}
            />
            <RaisedButton
                label={'Log in with Google'}
                secondary={true}
                onClick={props.onLoginGoogleClickButton}

            />
        </div>
    </div>
)



export default AuthForms