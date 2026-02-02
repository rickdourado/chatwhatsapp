import ChatHeader from './components/ChatHeader'
import ChatContainer from './components/ChatContainer'
import ChatInput from './components/ChatInput'
import { useChat } from './hooks/useChat'

function App() {
    const { messages, isTyping, sendMessage } = useChat()

    return (
        <div className="app-container">
            <div className="flex flex-col h-full bg-whatsapp-bg-dark">
                <ChatHeader />
                <ChatContainer messages={messages} isTyping={isTyping} />
                <ChatInput onSendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default App
