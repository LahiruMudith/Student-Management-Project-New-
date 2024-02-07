import {Box, Card, CardContent, List} from "@mui/material";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";

export default function ViewStudentPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        instance({
            method: "get",
            url: "/student/getAll",
        }).then(function (response) {
            setData(response.data)
        });
    }, []);

    return (
        <>
            <Box sx={{display:'flex', flexWrap:"wrap", border:'2px solid red', height:'87vh'}}>
                {
                    data.map((val, index) => (
                        <Card sx={{ minWidth: '22.5vw',height:'auto', margin:'10px', borderRadius:'10px', boxShadow:'5'}}>
                            <CardContent>
                                <List sx={{fontWeight:'bold', lineHeight:'5vh'}}>
                                    <p>Name : <span style={{fontWeight:'500'}}>{val.student_name}</span> </p>
                                    <p>Age : <span style={{fontWeight:'500'}}>{val.student_age}</span> </p>
                                    <p>Address : <span style={{fontWeight:'500'}}>{val.student_address}</span> </p>
                                    <p>Contact : <span style={{fontWeight:'500'}}>{val.student_contact}</span> </p>
                                </List>
                            </CardContent>
                        </Card>
                    ))
                }
                {/*<Card sx={{ minWidth: '22.5vw',height:'20vh', margin:'10px', borderRadius:'10px', boxShadow:'5'}}>*/}
                {/*    <CardContent>*/}
                {/*        <List sx={{fontWeight:'bold', lineHeight:'5vh'}}>*/}
                {/*            <p>Name : <span style={{fontWeight:'500'}}>Lahiru</span> </p>*/}
                {/*            <p>Age : <span style={{fontWeight:'500'}}>17</span> </p>*/}
                {/*            <p>Address : <span style={{fontWeight:'500'}}>Kaluthara</span> </p>*/}
                {/*            <p>Contact : <span style={{fontWeight:'500'}}>0761298256</span> </p>*/}
                {/*        </List>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </Box>

        </>
    )
}