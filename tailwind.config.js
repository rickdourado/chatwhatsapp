/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                whatsapp: {
                    green: '#075E54',
                    'green-light': '#128C7E',
                    'green-user': '#DCF8C6',
                    teal: '#25D366',
                    blue: '#34B7F1',
                    bg: '#ECE5DD',
                    'bg-dark': '#0D1418',
                    'bubble-bot': '#FFFFFF',
                    'bubble-user': '#DCF8C6',
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                'bubble': '0 1px 0.5px rgba(0,0,0,.13)',
            }
        },
    },
    plugins: [],
}
