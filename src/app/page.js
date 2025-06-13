import Navbar from "@/components/Navbar/Navbar"
import Topics from "@/components/Topics/Topics"
import { getPost } from "@/utils/fetchData"

export default function Home() {

  return (
    <div>
      <Navbar/>  

      <div className="contain">    

        <div className="left_contain">
           <div>
             <Topics/>
           </div>
        </div>

        <div className="right_contain">
          <h1>Hello there</h1>
        </div>

      </div>     
          
    </div>   
     
  )
}

// Mosh Hamadani

