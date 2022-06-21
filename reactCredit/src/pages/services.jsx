import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell,{ tableCellClasses }  from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import {styled} from '@mui/material/styles';
import axios from "axios";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
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

const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "skyblue",
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


const Services = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const onClickButton = (itemId) => {
    navigate("/complete", { state: { id: itemId } });
  };
  return ( 
    <>
     <nav className="bannercolor">
                <ul>
                    <li><a href="" onClick={() => navigate("/credit")}>크레딧 구매 페이지로</a></li>
                    <li><a href="">문의사항</a></li>
                    <li><a href="">Credit 시스템이란</a></li>
                </ul>
            </nav>
            <Header/>
            <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell2 className="TableCellStyle" >유저 id</StyledTableCell2>
            <StyledTableCell2 className="TableCellStyle" >남은 크레딧</StyledTableCell2>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell className="TableCellStyle">{user.username}</StyledTableCell>
            <StyledTableCell className="TableCellStyle">{user.credit}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      </TableContainer>
      <br></br>
      <br></br>

      <TableContainer>
      <Table className="shadowStyle">
        <TableHead>
          <TableRow>
            <StyledTableCell className="TableCellStyle">서비스 id</StyledTableCell>
            <StyledTableCell className="TableCellStyle">서비스명</StyledTableCell>
            <StyledTableCell className="TableCellStyle">가격</StyledTableCell>
            <StyledTableCell  className="TableCellStyle">신청버튼</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <StyledTableRow>
              <StyledTableCell className="TableCellStyle">{item.id}</StyledTableCell>
              <StyledTableCell className="TableCellStyle">{item.itemName}</StyledTableCell>
              <StyledTableCell className="TableCellStyle">{item.price}크레딧</StyledTableCell>
              <StyledTableCell className="TableCellStyle">
                <Button
                  variant="contained"
                  onClick={() => onClickButton(item.id)}
                >
                  신청
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Footer/>
    </>
    
  );
};
export default Services;
