import React from 'react'

import { auth, database } from './../firebaseConfig'
import { mapObjectToArray } from './../utils'

import ChatInput from './ChatInput'
import MessagesList from './MessagesList';

const dbRef = database.ref('/chat')

const style = {
    // paper: {
    //     margin: 10,
    //     height: '100vh'
    // },
    chatInput: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 9999,
        margin: 10
    }
}

class Chat extends React.Component {

    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        dbRef.on(
            'value',
            snapshot => this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse(),
                newMessageText: ''
            })
        )
    }

    componentWillUnmount() {
        dbRef.off()
    }

    onNewTextMessageHandler = (event) => { this.setState({ newMessageText: event.target.value }) }

    onChatInputButtonClick = () => {
        dbRef.push({
            text: this.state.newMessageText,
            timestamp: Date.now(),
            author: {
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName
            }
        })
    }

    onDeleteMessageClickHandler = messageKey => {
        dbRef.child(messageKey).remove()
    }

    render() {

        return (
            <div
            // style={style.paper}
            >
                <ChatInput
                    style={style.chatInput}
                    onNewTextMessageHandler={this.onNewTextMessageHandler}
                    inputValue={this.state.newMessageText}
                    onChatInputButtonClick={this.onChatInputButtonClick}
                />
                <MessagesList
                    messages={this.state.messages}
                    onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
                />

            </div>
        )
    }
}

export default Chat