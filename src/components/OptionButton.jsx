import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function OptionButton({ option, onClick, delay = 0 }) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 24,
                delay: delay
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors shadow-sm mb-2"
        >
            <span className="font-medium text-gray-800">{option}</span>
        </motion.button>
    )
}

OptionButton.propTypes = {
    option: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    delay: PropTypes.number
}

export default OptionButton
