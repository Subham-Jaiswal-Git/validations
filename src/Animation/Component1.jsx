import React from 'react'
import { motion } from "framer-motion"
import Component2 from "./Component2";
import Component3 from "./Component3"
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Ani from './Ani';

const Component1 = () => {

    return (
        <>  
            {/* Rotation */}
            {/* <motion.div
                animate={{
                    scale: [1, 2, 2, 2, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            >
                <div className='h-[200px] w-[200px] flex justify-center items-center bg-blue-500'><p>component1 :Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam labore doloribus consectetur omnis vitae in quae possimus corporis nihil!</p></div>
            </motion.div> */}

            {/* animation */}

            {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className='h-[200px] w-[200px] flex justify-center items-center bg-gray-500'>
                    <p>component2 : Lorem ipsum dolor sit amet consectetur adipisicing elit, totam labore doloribus consectetur omnis vitae in quae possimus corporis nihil!</p>
                </div>
            </motion.div> */}

            {/* toggle menu */}
            {/* <div className="h-screen float-start bg-gray-200">
                <Component2 />
            </div> */}

            {/* zoom effect */}
            {/* <div className="h-screen flex items-center justify-center bg-gray-200">
                <Component3 />
            </div> */}

            {/* Draggable Box */}
            {/* <div className="h-screen flex items-center justify-center bg-gray-200">
                <Component4 />
            </div> */}

            {/* <div className="">
                <Component5 />
            </div> */}
            
            {/*Scroll-linked animation */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            /> */}



            {/* Scroll-linked animation */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ width: "200px", height: "100px", background: "blue" }} // Ensure visibility
            >
                <p style={{ color: "white", textAlign: "center" }}>Hello, Motion!</p>
            </motion.div> */}

            {/* <Component6/> */}

            {/* <Component7/> */}
            

            <Ani/>

        </>
    )
}

export default Component1