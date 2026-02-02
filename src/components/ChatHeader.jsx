function ChatHeader() {
    return (
        <header className="bg-whatsapp-green text-white px-4 py-3 flex items-center shadow-md">
            <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-whatsapp-green font-bold text-lg">
                    OC
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-base">Oportunidades Cariocas</h1>
                    <p className="text-xs text-green-100">Assistente Virtual</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="hover:bg-whatsapp-green-light rounded-full p-2 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default ChatHeader
