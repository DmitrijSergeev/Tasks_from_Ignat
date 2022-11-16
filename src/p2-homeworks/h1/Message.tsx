import React from 'react'
type MainType = {
    avatar: string
    name: string
    message: string
    time: number
}
function Message(props: MainType) {
    return (
        <div>
            {props.avatar}
            {props.time}
            {props.message}
            {props.name}
        </div>
    )
}

export default Message
