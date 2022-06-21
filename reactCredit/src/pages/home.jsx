import { Directions } from "@mui/icons-material"
import { yellow } from "@mui/material/colors"
import React from "react"
import { useNavigate,Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Footer2 from "./Footer2"
import { width } from "@mui/system"



const panels=document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
      panel.classList.remove('active')
    })
}



const Home = ({ user }) => {
  const navigate = useNavigate()
  return user ? (

   <>
      <nav className="bannercolor">
                <ul>
                    <li><a href="">문의사항</a></li>
                    <li><a href="">Credit 시스템이란</a></li>
                    <li><a href="">Osc 관련 기사</a></li>
                </ul>
            </nav>
    <div className="location">      
    <Header/>
      <div style={{position:"relative"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
   
      <img className="fly4" src="https://source.unsplash.com/65_sFYsNXtg"></img>    
     
     <div className="flytext" style={{color:"white",position:"absolute", width:"100%", height:"100%",top:"-10%",left:0, display:"flex",justifyContent:"center", alignItems:"center"}}> 
     크레딧 구매를 통해서 <br>
     </br>osc의 다양한 서비스를 
     <br></br>이용하실 수 있습니다.</div></div> 
      <button className="button1" onClick={() => navigate("/credit")} >크레딧 구매</button>
      <button className="button2" onClick={() => navigate("/services")}>상품 구매</button>
     
      <Footer/>       
    </div>
    </>
  ) : (

 <>
 <Header/>
 <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <font color="#041943"></font>
                    <br></br>
                    <img className="fly" id="image" src="https://source.unsplash.com/bGeupv246bM"></img>
                    
                </div>
              <div style={{display:"flex", flex:1}}>
              <img className id="image2" src="https://source.unsplash.com/HbcfaO4m03s"></img>
                  <button className="button2" onClick={()=> navigate("/register")}>회원가입하기</button>
                  <button className="button1" onClick={() => navigate("/login")}>로그인 페이지로</button>
    	          </div> 
                
	             

                <div style={{ display: "flex", flexDirection: "column" }}>
                   <font color="#041943"></font>
                   
                   <br></br>
                    <img className="fly" id="image" src="https://source.unsplash.com/wUZjnOv7t0g"></img>
       
                </div>
            </div>
            
      <Footer/>
    </>
    


  )
}

export default Home;
