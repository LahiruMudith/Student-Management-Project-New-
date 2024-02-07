import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './RegisterPopupMenu.css'
import {TextField} from "@mui/material";
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import Swal from "sweetalert2";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function RegisterPopupMenu() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const Register = () => {
        instance.post('/register', {
            name: name,
            email: email,
            password: password,
        })
            .then((response) => {
                console.log(response.data)
                Toast.fire({
                    icon: "success",
                    title: "Register successfully"
                });
                handleClose()
            }, (error) => {
                console.log(error);
            });
    }



    return (
        <React.Fragment>
            <Button className={'registerBtn'}
                    variant="contained"
                    onClick={handleClickOpen}
            >
                Register
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Student Registation From
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <TextField className={'textFeild'} onChange={(val) => setName(val.target.value)} type={"text"} label="Name" variant="standard" />
                    <TextField className={'textFeild'} onChange={(val) => setEmail(val.target.value)} type={"text"} label="Email" variant="standard" />
                    <TextField className={'textFeild'} onChange={(val) => setPassword(val.target.value)} label="Password" type={"password"} variant="standard" />
                </DialogContent>
                <DialogActions>
                    <Button className={'popupRegisterButton'} onClick={Register}>
                        Register
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}