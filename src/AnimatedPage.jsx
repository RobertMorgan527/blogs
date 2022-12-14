import {motion} from 'framer-motion'

const animations = {
    inital: {opacity: 0, x: 0},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x:0},
}

const AnimatedPage = ({children}) => {
    return(
        <motion.div 
            variants={animations} 
            inital="intial"
            anitmate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}
export default AnimatedPage