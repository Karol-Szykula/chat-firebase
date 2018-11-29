import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'


class ChatInput extends React.Component {

    render() {

        return (
            <Paper
                style={this.props.style}
            >
                <TextField
                    type={'text'}
                    name={'message'}
                    onChange={this.props.onNewTextMessageHandler}
                    value={this.props.inputValue}
                    fullWidth={true}
                />
                <RaisedButton
                    primary={true}
                    onClick={this.props.onChatInputButtonClick}
                    label={'Add message'}
                    fullWidth={true}
                />

            </Paper>
        )
    }
}

export default ChatInput