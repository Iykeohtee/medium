import react from 'react'
import { FaPlus } from "react-icons/fa6";
import styles from "./topics.module.css";

const Topics = () => {
    return(
        <div className={`${styles.contain}`}>
           <FaPlus/>
           <h1>For you</h1>
           <h1>Following</h1>
           <h1>Featured</h1>
           <h1>Javascript</h1>
           <h1>Money</h1>
           <h1>Software Developmemt</h1>     
           <h1>Coding</h1>
           <h1>React</h1>   
           <h1>Programming</h1>
        </div>
    )
}

export default Topics   