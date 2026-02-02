import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function MessageBubble({ message, isUser, delay = 0 }) {
    const bubbleVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
                delay: delay
            }
        }
    }

    return (
        <motion.div
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2 px-4`}
        >
            <div
                className={`
          relative max-w-[85%] sm:max-w-[75%] px-3 py-2 rounded-lg shadow-bubble
          ${isUser
                        ? 'bg-whatsapp-bubble-user bubble-tail-right'
                        : 'bg-whatsapp-bubble-bot bubble-tail-left'
                    }
        `}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message}
                </p>
                <span className="text-[10px] text-gray-500 float-right ml-2 mt-1">
                    {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </motion.div>
    )
}

MessageBubble.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool,
    delay: PropTypes.number
}

export default MessageBubble
