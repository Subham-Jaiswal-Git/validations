import React from 'react'
import { motion } from "framer-motion";
import MyComponent from "./MyComponent";
const Ani = () => {
    return (
        <>
            {/* Move left to right */}
            {/* <motion.div
                    animate={{ x: 300 }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="w-20 h-20 bg-blue-500 rounded-lg"
                >
                <p>igvjvv</p>
                </motion.div> */}
            {/*  */}
            {/* <motion.div
                animate={{ x: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                <p className='bg-blue-50'>dfjkl</p>                
            </motion.div> */}

            {/* Motion2 */}
            {/* <motion.div animate={{ x: 100 }}>
                <p className='bg-blue-50'>fghjklg</p>
            </motion.div>  */}

            {/* Right shift with scrool */}
            {/* <motion.div animate={{ x: 100 }} initial={false} >
                <p className='bg-blue-50'>fghjklg</p>
            </motion.div> */}

            {/* Exit ANIMATION */}
            {/* <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
                <p>jkcfvhhjh</p>
            </AnimatePresence> */}
            {/* <MyComponent/> */}


            {/* KeyFrames */}

            {/* <motion.div
                animate={{ x: [0, 100, 0] }}>
                <p className='bg-blue-100'>qwerty</p>
            </motion.div> */}

            {/* <motion.div animate={{ x: [null, 100, 0] }} >
                <p className='bg-blue-100'>qwerty</p>
            </motion.div> */}

            <motion.circle
                cx={500}
                animate={{ cx: [null, 100] }}>
                <p className='bg-blue-100'>qwerty</p>
            </motion.circle>
{/* 
            <motion.circle
                cx={500}
                animate={{ cx: [null, 100, 200] }}
                transition={{ duration: 3, times: [0, 0.2, 1] }}>
                <p className='bg-blue-100'>qwerty</p>
            </motion.circle> */}


        </>
    )
}

export default Ani