import {Button, Card, TextField} from "@mui/material";
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import Swal from "sweetalert2";

export default function AddStudentPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")

    const addStudent = ()  => {
        instance.post('/student/save', {
            student_name:name,
            student_age:age,
            student_address:address,
            student_contact:contact
        })
            .then(function (response) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Student Added Successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
                setName("")
                setAge("")
                setAddress("")
                setContact("")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <Card sx={{width:'35vw', boxShadow:8, borderRadius:'10px', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop:'19vh'}}>
                <TextField
                    sx={{margin:'2vh', width:'33vw'}}
                    required
                    label="Name" variant="outlined"
                    value={name}
                    onChange={(val) => setName(val.target.value)}
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Age" variant="outlined"
                    value={age}
                    onChange={(val) => setAge(val.target.value)}
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Address" variant="outlined"
                    value={address}
                    onChange={(val) => setAddress(val.target.value)}
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Contact" variant="outlined"
                    value={contact}
                    onChange={(val) => setContact(val.target.value)}
                />
                <Button
                    sx={{marginBottom:'20px', backgroundColor:'red', opacity:'0.9',
                        '&:hover': {
                            backgroundColor:'red',
                            opacity:'2'
                        }
                }}
                    variant="contained"
                    onClick={() => addStudent()}
                >
                    Contained
                </Button>
            </Card>
        </>
    )
}