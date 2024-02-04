import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Dashboard.css'
import IconButton from "@mui/material/IconButton";
import addStudentIcon from '../../assets/icon/addStudent.png'
import viewStudentIcon from '../../assets/icon/viewStudent.png'
import routes from "../../common/navigation/routes.jsx";



export default function Dashboard() {
    const [value, setValue] = React.useState(0);
    return (
        <Box className={'MainBox'}>
            <Box sx={{backgroundColor:'none', width:'20vw', height:'76vh', position:'fixed', top:'5vh', left:'2vw', borderRadius:'10px'}}>
                {/*{*/}
                {/*    routes.map((val) => (*/}
                        <ul style={{listStyle: 'none', padding: '3.5vw', lineHeight: '5'}}>
                            <li>
                                <IconButton sx={{fontSize: '1.4vw', fontWeight: 'bold', color: 'white'}}>
                                    <img src={addStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>
                                    Add Student
                                </IconButton>
                            </li>
                            <li>
                                <IconButton sx={{fontSize: '1.4vw', fontWeight: 'bold', color: 'white'}}>
                                    <img src={viewStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>
                                    View Student
                                </IconButton>
                            </li>
                        </ul>
                    {/*))*/}
                {/*}*/}
            </Box>
        </Box>
    )
}