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
import {useState} from "react";

export default function StudentUpdateMenu() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('Name')
    const [age, setAge] = useState('Age')
    const [address, setAddress] = useState('Address')
    const [contact, setContact] = useState('Contact')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
                <IconButton onClick={handleClickOpen}>
                    <img src={UpdateIcon} style={{width: '23px'}}/>
                </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                {/*<DialogTitle>Subscribe</DialogTitle>*/}
                <DialogContent>
                    <DialogContentText>
                        Please Bouble Check Your Update Details !
                    </DialogContentText>
                    <TextField
                        sx={{margin:'10px', width:'35vw', marginTop:'25px'}}
                        autoFocus
                        label={name}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        autoFocus
                        label={age}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        autoFocus
                        label={address}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{margin:'10px', width:'35vw'}}
                        autoFocus
                        label={contact}
                        type="text"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="text">Update</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}