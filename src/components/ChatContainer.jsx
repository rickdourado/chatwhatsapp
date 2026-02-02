import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MessageBubble from './MessageBubble'
import OptionButton from './OptionButton'
import TypingIndicator from './TypingIndicator'

function ChatContainer({ messages, isTyping }) {
    const containerRef = useRef(null)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    return (
        <div
            ref={containerRef}
            className="flex-1 overflow-y-auto whatsapp-bg chat-scrollbar py-4"
        >
            {messages.map((msg, index) => (
                <div key={index}>
                    {msg.type === 'text' && (
                        <MessageBubble
                            message={msg.content}
                            isUser={msg.isUser}
                            delay={index * 0.1}
                        />
                    )}
                    {msg.type === 'options' && (
                        <div className="px-4 mb-4">
                            {msg.options.map((option, optIndex) => (
                                <OptionButton
                                    key={optIndex}
                                    option={option.text}
                                    onClick={() => msg.onOptionClick(option.value)}
                                    delay={optIndex * 0.05}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
        </div>
    )
}

ChatContainer.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['text', 'options']).isRequired,
            content: PropTypes.string,
            isUser: PropTypes.bool,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })
            ),
            onOptionClick: PropTypes.func
        })
    ).isRequired,
    isTyping: PropTypes.bool
}

export default ChatContainer
