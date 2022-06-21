
import Table from "@mui/material/Table";
import axios from "axios";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell,{ tableCellClasses }  from "@mui/material/TableCell";
import {styled} from '@mui/material/styles';
import { useLocation, useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Header from "./Header"
import Footer from "./Footer"
import Footer2 from "./Footer2";
/*import { useEffect,useState } from "react"*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const Complete = ({user ,setUser}) => {
  const navigate = useNavigate();
  const location=useLocation();
  const [item, setItems] = useState({id:'',itemName:'',price:''});

  useEffect(() => {
    axios.get("http://localhost:8080/items").then((res) => {
      setItems(res.data.find(data=>data.id===location.state.id)); 
      
    });
  }, []);

  return (
   <>

    <div>
    <nav className="bannercolor">
   <ul>
                   
                    <li><a onClick={() => navigate("/")}>첫 페이지로</a></li>
                    <li><a>Osc 관련 기사</a></li>
                    <li><a>문의사항</a></li>
                </ul>
   </nav>
    <Header/>
      <br></br>
      <br></br>
      <div style={{marginBottom:20}}>
      
        신청되셨습니다. 곧 연락 드리겠습니다.
      <br></br>

               We will get back to you soon.
               </div>  
              
               <br></br>  
               <br></br>
               <br></br>   
               <br></br>
               <br></br>  
                      
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  className="TableCellStyle">유저(user)</StyledTableCell>
            <StyledTableCell  className="TableCellStyle">신청 서비스(service) </StyledTableCell>
            <StyledTableCell  className="TableCellStyle">가격(price) </StyledTableCell>
            <StyledTableCell  className="TableCellStyle">남은 크레딧(credit left)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         <StyledTableRow>
            <StyledTableCell className="TableCellStyle">{user.username}</StyledTableCell>
            <StyledTableCell className="TableCellStyle">{item.itemName} </StyledTableCell>
            <StyledTableCell className="TableCellStyle">{item.price}</StyledTableCell>
              <StyledTableCell className="TableCellStyle">{user.credit-item.price}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
        </Table>
        </TableContainer>
        <Footer/>
      
</div>
</>
  )
}






export default Complete
