import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UpdateIcon from "../../assets/icon/updateStudent.png";
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";

export default function StudentUpdateMenu({Name, Age, Address, Contact, id}) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState(Name)
    const [age, setAge] = useState(Age)
    const [address, setAddress] = useState(Address)
    const [contact, setContact] = useState(Contact)
    // setName(Name)

    const handleClickOpen = (Sid) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const update = () => {
        instance.put(`/student/update/${id}`, {
            student_name:name,
            student_age:age,
            student_address:address,
            student_contact:contact
        }).then((response) => {
            window.location.reload()
        })
            .catch((error) => {
                console.error(error);
            });
    }

    // const getAll = () => {
    //     useEffect(() => {
    //         instance({
    //             method: "get",
    //             url: "/student/getAll",
    //         }).then(function (response) {
    //             setData(response.data)
    //         });
    //     }, []);
    // }


    return (
        <React.Fragment>
                <IconButton onClick={handleClickOpen}>
                    <img src={UpdateIcon} style={{width: '23px'}}/>
                </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}


            >
                <DialogContent>
                    <DialogContentText>
                        Please Bouble Check Your Update Details !
                    </DialogContentText>
                    <TextField
                        sx={{margin:'10px', width:'35vw', marginTop:'25px'}}
                        value={name}
                        variant="outlined"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        required
                        value={age}
                        type="number"
                        variant="outlined"
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        required
                        value={address}
                        type="text"
                        variant="outlined"
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        required
                        value={contact}
                        type="text"
                        variant="outlined"
                        onChange={(event) => setContact(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="text" onClick={() => update(id)}>Update</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}