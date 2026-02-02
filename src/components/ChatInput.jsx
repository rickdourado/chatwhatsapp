import { useState } from 'react'
import PropTypes from 'prop-types'

function ChatInput({ onSendMessage }) {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            onSendMessage(input.trim())
            setInput('')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-t border-gray-200"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-whatsapp-green"
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className="bg-whatsapp-green text-white rounded-full p-2 hover:bg-whatsapp-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
            </button>
        </form>
    )
}

ChatInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}

export default ChatInput
