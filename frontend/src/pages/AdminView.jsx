import React from 'react'
import useGetProfile from "../hooks/useFetchData"
import {BASE_URL, token} from '../utils/config'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AdminView = () => {

    const {data: userData, loading, error} = useGetProfile(`${BASE_URL}/users`)
    //console.log(userData)
    // const getUsers = async() =>{
    //     try {
    //       const res = await fetch(`${BASE_URL}/users/`, {
    //         method:"Get",
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: `Bearer ${token}`
    //         },
    //       })
        
    //       const data = await res.json()
      
    //         // if(!res.ok){
    //         //   throw new Error(message)
    //         // }
      
    //         console.log(data)
          
    //         // toast.success(message)
    //         // navigate('/home')
      
    //     } catch (error) {
    //       toast.error(error.message)
          
    //     }
        
    //     }
  return (
    <div className="m-10">
        
       <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell"> </TableCell>
            <TableCell className="font-bold">Name</TableCell>
            <TableCell className="font-bold">Email</TableCell>
            <TableCell className="font-bold">Gender</TableCell>
            <TableCell className="font-bold">Blood Type</TableCell>
            <TableCell className="font-extrabold">Appointments</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
           {userData.filter((user) => {return user.userType === "User"})
                 .map((user) => (
          <TableRow>
             <TableCell className="tableCell">
                <div className="flex align-center">
                  <img src={user.photo} alt="" className="w-[32px] h-[32px] mr-[10px] rounded-[50%] object-cover" />
               </div>
              </TableCell>
              <TableCell className="tableCell">{user.name}</TableCell>
              <TableCell className="tableCell">{user.email}</TableCell>
              <TableCell className="tableCell">{user.gender}</TableCell>
              <TableCell className="tableCell">{user.bloodType == null ? "O-" : user.bloodType}</TableCell>
              <TableCell className="tableCell">{user.appointments==0? "No Appointments": user.appointments}</TableCell>
          </TableRow>
                 )) }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AdminView
