import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import TableCell,{ tableCellClasses }  from "@mui/material/TableCell";
import {styled} from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Header from './Header'
import Footer from './Footer'
import Footer2 from "./Footer2";


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





const creditData= [{credit:2000, price:20},{credit:3000, price:29},{credit: 4000, price: 35}];
const Credit = ({user,setUser}) => {
  const navigate = useNavigate()




  return <div style={{display:"flex", flex:1, flexDirection: "column"}} onClick={() => navigate("/services")}>
    <nav className="bannercolor">
        <ul>
                    <li><a href="">문의사항</a></li>
                    <li><a href="">Credit 시스템이란</a></li>
                    <li><a href="https://www.v-on.kr/9381/">Osc 관련 기사</a></li>
                </ul>
         </nav>
    <Header/>
    <div style={{marginBottom:20}}><br></br>크레딧 구매 <br></br>
   Purchase Credits <br></br></div>
       <br/>
       <br/>
       <br/>
        <div style={{display:"flex", flex:1, alignItems:"center", justifyContent:"center"}}>
         <TableContainer component={Paper}  className>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell  className="TableCellStyle">크레딧 Credits</StyledTableCell>
      <StyledTableCell  className="TableCellStyle">가격 Prices</StyledTableCell>
      <StyledTableCell  className="TableCellStyle">버튼 Purchase </StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {creditData.map(({credit, price}, index) => (
   <StyledTableRow>    
      <StyledTableCell className="TableCellStyle">{credit}</StyledTableCell>
      <StyledTableCell className="TableCellStyle">{price} </StyledTableCell>
      <StyledTableCell cursor="pointer" className="TableCellStyle"><button  class="realbutton"onClick={()=>setUser({...user,credit:user.credit+credit})}>구매</button></StyledTableCell>
    </StyledTableRow>
   ))} </TableBody>
</Table>
</TableContainer>
</div>
<Footer/>
</div>

}

export default Credit

//ctrl+z 뒤로가기.