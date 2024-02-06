import * as React from 'react';
import Box from '@mui/material/Box';
import './Dashboard.css'
import IconButton from "@mui/material/IconButton";
import routes from "../../common/navigation/routes.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import AddStudentPage from "../AddStudentPage/AddStudentPage.jsx";
import ViewStudentPage from "../ViewStudentPage/ViewStudentPage.jsx";



export default function Dashboard() {
    const [value, setValue] = React.useState(0);

    const GetRoutes = (routes) => (
        routes.map((val) => (
            <Route path={val.path} element={val.component}/>
        ))

    )

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
            </Box>
            <Box sx={{
                backgroundColor: 'white',
                width: '72.5vw',
                height: '87vh',
                position: 'fixed',
                left: '23vw',
                top: '5vh',
                borderRadius: '20px',
                padding: '20px'
            }}>
                {/*<ViewStudentPage/>*/}
                <Routes >
                    {GetRoutes(routes)}
                    <Route path={'*'} element={<Navigate to={'/viewStudent'}/>}/>
                    {/*<Route path={'/viewStudent'} element={<ViewStudentPage/>}/>*/}
                </Routes>
            </Box>
        </Box>
    )
}