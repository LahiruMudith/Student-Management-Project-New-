import {Box, Card, CardContent, List} from "@mui/material";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import UpdateIcon from "../../assets/icon/updateStudent.png"
import StudentUpdateMenu from "../../component/StudentUpdateMenu/StudentUpdateMenu.jsx";
import {MutatingDots} from "react-loader-spinner";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export default function ViewStudentPage() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        instance({
            method: "get",
            url: "/student/getAll",
        }).then(function (response) {
            setData(response.data)
            setLoader(false)
        });
    }, []);

    const studentDelete = (id) => {
        Swal.fire({
            title: "Do you want Delete This Student?",
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton:false,
            denyButtonText: `Yes`,
            cancelButtonText:'No'
        }).then((result) => {
            if (result.isDenied) {
                instance.delete(`/student/delete/${id}`)
                    .then(response => {
                        Toast.fire({
                            icon: "success",
                            title: "Delete successfully"
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                window.location.reload()
                            }
                        });
                    })
            }
        });
    }

    return (
        <>
            {
                loader ?
                    <MutatingDots
                        visible={true}
                        height="170"
                        width="160"
                        color="#191a1e"
                        secondaryColor="#191a1e"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{position:'relative', top:'40%', left:'45%'}}
                        wrapperClass=""
                    />
                    :
                    <Box sx={{display:'flex', flexWrap:"wrap", height:'86.5vh', overflow:'scroll', flexGrow: 0, p: 0, }}>
                        {
                            data.map((val, index) => (
                                <Card key={val.id} sx={{ maxWidth: '22.5vw', minheight:'30vh', margin:'10px', borderRadius:'10px', boxShadow:'5'}}>
                                    <CardContent>
                                        <Box sx={{position: 'relative', bottom: '3.5vh', left: '33vh', display:'flex'}}>
                                            <IconButton sx={{color: 'black'}}>
                                                <StudentUpdateMenu
                                                    Name={val.student_name}
                                                    Age={val.student_age}
                                                    Address={val.student_address}
                                                    Contact={val.student_contact}
                                                    id={val.id}
                                                />
                                            </IconButton>
                                            <IconButton sx={{color: 'black'}}
                                                        onClick={() => studentDelete(val.id)}
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Box>
                                        <List sx={{fontWeight: 'bold', lineHeight: '5vh', width: '20vw',height:'20vh', position:'relative', top:'-5vh'}}>
                                            <p>Name : <span style={{fontWeight: '500'}}>{val.student_name}</span></p>
                                            <p>Age : <span style={{fontWeight: '500'}}>{val.student_age}</span></p>
                                            <p>Address : <span style={{fontWeight: '500'}}>{val.student_address}</span></p>
                                            <p>Contact : <span style={{fontWeight: '500'}}>{val.student_contact}</span></p>
                                        </List>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Box>
            }

        </>
    )
}