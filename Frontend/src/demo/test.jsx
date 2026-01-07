import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {

    let[getUser,setGetUser]=useState([]); 

    
    // let[getUser,setGetUser]=useState([

    //     {
    //         id:1,
    //         name:"devi",
    //         age:22,
    //         email:"123sh@getImageListItemBarUtilityClass.com"
    //     },
    //     {
    //         id:2,
    //         name:"beulah",
    //         age:22,
    //         email:"123beuu@getImageListItemBarUtilityClass.com"
    //     }
    // ]); 


    async function getData() {
        let res=await axios.get("http://localhost:8080/user/get")
        let userTotalDetails= await res.data
        setGetUser(userTotalDetails)

        
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <>
            <h1>Hello</h1>



            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>
                        S.No
                    </TableCell>

                    <TableCell>
                        Name
                    </TableCell>

                    <TableCell>
                        Age
                    </TableCell>

                    <TableCell>
                        Email
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        getUser.map((obj)=>{
                            return(
                            <TableRow>
                             <TableCell>
                                {obj.id}
                             </TableCell>

                              <TableCell>
                                {obj.name}
                             </TableCell>

                              <TableCell>
                                {obj.age}
                             </TableCell>

                              <TableCell>
                                {obj.email}
                             </TableCell>

                            </TableRow>)
                        })
                    }

                </TableBody>
            </Table>

        </>
    )


}