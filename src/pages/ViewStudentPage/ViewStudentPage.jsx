import {Box, Card, CardContent, List} from "@mui/material";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import UpdateIcon from "../../assets/icon/updateStudent.png"
import StudentUpdateMenu from "../../component/StudentUpdateMenu/StudentUpdateMenu.jsx";

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
            <Box sx={{display:'flex', flexWrap:"wrap", border:'2px solid red', height:'50px'}}>
                {
                    data.map((val, index) => (
                        <Card key={val.id} sx={{ minWidth: '22.5vw', height:'30vh', margin:'10px', borderRadius:'10px', boxShadow:'5', border:'1px solid #e10c0c'}}>
                            <CardContent>
                                <List sx={{fontWeight:'bold', lineHeight:'5vh'}}>
                                    <p>Name : <span style={{fontWeight:'500'}}>{val.student_name}</span> </p>
                                    <p>Age : <span style={{fontWeight:'500'}}>{val.student_age}</span> </p>
                                    <p>Address : <span style={{fontWeight:'500'}}>{val.student_address}</span> </p>
                                    <p>Contact : <span style={{fontWeight:'500'}}>{val.student_contact}</span> </p>
                                </List>
                                <div style={{position:'relative', bottom:'1vh', left:'33vh'}}>
                                    <IconButton sx={{color:'black'}}>
                                        <StudentUpdateMenu/>
                                    </IconButton>
                                    <IconButton sx={{color:'black'}}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </Box>

        </>
    )
}