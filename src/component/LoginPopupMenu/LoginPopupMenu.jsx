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
import {TextField} from "@mui/material";
import {useState} from "react";
import './LoginPopupMenu.css'
import instance from "../../services/AxiosOrder.jsx";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Swal from 'sweetalert2'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function LoginPopupMenu() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Login = () => {
        instance.post('/login', {
            email: email,
            password: password,
        })
            .then((response) => {
                const token = (response.data.token)
                if (token) {
                    localStorage.setItem('loginkey', token),
                        Swal.fire({
                            title: 'Login Successfully!',
                            icon: 'success',
                        })
                    handleClose()
                    window.location.reload()

                }

            }, (error) => {
                console.log(error);
            });
    }

    return (
        <>
                <React.Fragment>
                    <Button className={'loginBtn'}
                            onClick={handleClickOpen}
                    >
                        Login
                    </Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} >
                            Student Login Menu
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
                            <TextField className={'textFeild'} onChange={(val) => setEmail(val.target.value)} type={"text"} label="Email" variant="standard" />
                            <TextField className={'textFeild'} onChange={(val) => setPassword(val.target.value)} type={"password"} label="Password" variant="standard" />
                        </DialogContent>
                        <DialogActions>
                            <Button className={'LoginBtn'} onClick={() => Login()}>
                                Login
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </React.Fragment>


        </>

    );
}