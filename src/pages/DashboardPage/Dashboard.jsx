import * as React from 'react';
import Box from '@mui/material/Box';
import './Dashboard.css'
import IconButton from "@mui/material/IconButton";
import routes from "../../common/navigation/routes.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import instance from "../../services/AxiosOrder.jsx";
import Swal from 'sweetalert2'
import StudentUpdateMenu from "../../component/StudentUpdateMenu/StudentUpdateMenu.jsx";

export default function Dashboard() {
    const [value, setValue] = React.useState(0);

    const GetRoutes = (routes) => (
        routes.map((val) => (
            <Route key={val.key} path={val.path} element={val.component}/>
        ))

    )

    const logoutClick = () => {
        instance({
            method: "get",
            url: "/logout",
        }).then(function (response) {
            Swal.fire({
                title: 'Do You Want To Log Out!',
                icon: 'info',
                confirmButtonText: 'Log Out',
                cancelButtonText: 'Cancle',
                showCancelButton: true,
            }).then( (result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('loginkey')
                    location.reload()
                }

            })

        });
    }

    return (
        <Box className={'MainBox'}>
            <Box sx={{backgroundColor:'none', width:'20vw', height:'92vh', position:'fixed', top:'5vh', left:'2vw', borderRadius:'10px', border:'1px solid white'}}>
                        <ul style={{listStyle: 'none', padding: '3.5vw', lineHeight: '5'}}>
                            {
                                routes.map((val) => (
                                    <Link key={val.key} to={val.path}>
                                        <li key={val.key}>
                                            <IconButton sx={{fontSize: '1.4vw', fontWeight: 'bold', color: 'white'}}>
                                                {val.icon}
                                                {val.name}
                                            </IconButton>
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                <IconButton
                    onClick={() => logoutClick()}
                    sx={{fontSize: '1.4vw', fontWeight: 'bold', color: 'white', position:'fixed', bottom:'3vh', right:'78vw'}}>
                    <LogoutIcon/>
                </IconButton>

            </Box>
            <Box
                component="main"
                sx={{
                flexGrow: 1, p: 3,
                backgroundColor: 'white',
                width: '72.5vw',
                height: '86.5vh',
                position: 'relative',
                left: '23vw',
                top: '5vh',
                borderRadius: '20px',
                padding: '20px'
            }}>
                <Routes>
                    {GetRoutes(routes)}
                    <Route path={'*'} element={<Navigate to={'/viewStudent'}/>}/>
                </Routes>
            </Box>
        </Box>
    )
}