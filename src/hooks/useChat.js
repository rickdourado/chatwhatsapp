import { useState, useCallback, useRef } from 'react'
import { conversationTree } from '../data/conversationTree'
import { keywords, frustrationKeywords, specialCommands } from '../data/keywords'

export function useChat() {
    const [messages, setMessages] = useState([])
    const [currentNode, setCurrentNode] = useState('welcome')
    const [isTyping, setIsTyping] = useState(false)

    const isInitialized = useRef(false)

    // Initialize chat with welcome message
    const initializeChat = useCallback(() => {
        if (!isInitialized.current) {
            isInitialized.current = true
            setTimeout(() => {
                addBotMessages('welcome')
            }, 500)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Add bot messages from a node
    const addBotMessages = useCallback((nodeId) => {
        const node = conversationTree[nodeId]
        if (!node) return

        setIsTyping(true)

        setTimeout(() => {
            const newMessages = []

            // Add text messages
            if (node.messages) {
                node.messages.forEach((msg) => {
                    let processedMsg = msg
                    // Replace placeholders
                    if (processedMsg.includes('{{PROTOCOL}}')) {
                        const protocol = Math.floor(10000 + Math.random() * 90000)
                        processedMsg = processedMsg.replace('{{PROTOCOL}}', protocol)
                    }

                    newMessages.push({
                        type: 'text',
                        content: processedMsg,
                        isUser: false
                    })
                })
            }

            // Add footer if exists
            if (node.footer) {
                newMessages.push({
                    type: 'text',
                    content: `_${node.footer}_`,
                    isUser: false
                })
            }

            // Add options if exists
            if (node.options) {
                newMessages.push({
                    type: 'options',
                    options: node.options,
                    onOptionClick: (value) => handleOptionClick(value, node.options)
                })
            }

            setMessages((prev) => [...prev, ...newMessages])
            setIsTyping(false)
            setCurrentNode(nodeId)
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Handle option button click
    const handleOptionClick = useCallback((value, options) => {
        const selectedOption = options.find(opt => opt.value === value)

        // Add user message
        setMessages((prev) => [
            ...prev,
            {
                type: 'text',
                content: selectedOption.text,
                isUser: true
            }
        ])

        // Navigate to next node
        setTimeout(() => {
            addBotMessages(value)
        }, 500)
    }, [addBotMessages])

    // Detect keywords in user input
    const detectKeyword = useCallback((input) => {
        const lowerInput = input.toLowerCase()

        // Check special commands first
        for (const [command, nodeId] of Object.entries(specialCommands)) {
            if (lowerInput === command) {
                return nodeId === 'help' ? 'show_help' : nodeId
            }
        }

        // Check frustration keywords - show help instead
        for (const keyword of frustrationKeywords) {
            if (lowerInput.includes(keyword)) {
                return 'show_help'
            }
        }

        // Check regular keywords
        for (const [keyword, nodeId] of Object.entries(keywords)) {
            if (lowerInput.includes(keyword)) {
                return nodeId
            }
        }

        return null
    }, [])

    // Handle user text input
    const sendMessage = useCallback((input) => {
        // Add user message
        setMessages((prev) => [
            ...prev,
            {
                type: 'text',
                content: input,
                isUser: true
            }
        ])

        const node = conversationTree[currentNode]

        // If current node is collecting input
        if (node?.collectInput) {
            // Move to next node
            setTimeout(() => {
                if (node.nextNode) {
                    addBotMessages(node.nextNode)
                }
            }, 500)
            return
        }

        // Try to detect keyword
        const detectedNode = detectKeyword(input)

        if (detectedNode === 'show_help') {
            // Show help message
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        type: 'text',
                        content: '📋 COMANDOS DISPONÍVEIS\n\nVocê pode usar:\n\n• "Menu" - Voltar ao menu principal\n• "Cursos" - Ir para menu de cursos\n• "MEI" - Ir para oportunidades MEI\n• "Atendente" - Falar com uma pessoa\n\nOu simplesmente escreva sua dúvida! 😊',
                        isUser: false
                    }
                ])
            }, 500)
            return
        }

        if (detectedNode) {
            setTimeout(() => {
                addBotMessages(detectedNode)
            }, 500)
        } else {
            // Show not understood message
            setTimeout(() => {
                addBotMessages('not_understood')
            }, 500)
        }
    }, [currentNode, detectKeyword, addBotMessages])

    // Initialize on mount
    if (!isInitialized.current) {
        initializeChat()
    }

    return {
        messages,
        isTyping,
        sendMessage,
        currentNode
    }
}

export default useChat
