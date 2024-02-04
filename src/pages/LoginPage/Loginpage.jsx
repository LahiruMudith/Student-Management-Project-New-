import {Box, Button} from "@mui/material";
import backgroundImage from '../../assets/Background.jpg'
import './LoginPage.css'
import manImage from '../../assets/image.png'
import textImage from '../../assets/SystemManagementText.png'
import RegisterPopupMenu from "../../component/RegisterPopupMenu/RegisterPopupMenu.jsx";
import LoginPopupMenu from "../../component/LoginPopupMenu/LoginPopupMenu.jsx";

export default function Loginpage() {
    return (
        <Box sx={{padding: 'none', margin: '0'}}>
            <Box>
                <img src={backgroundImage} className={"backgroundImage"}/>
            </Box>
            <img src={manImage} style={{width: '550px', position: 'absolute', bottom: '10vh', left: '58vw'}}/>
            <img src={textImage} style={{width: '550px', position: 'absolute', bottom: '30vh', left: '3vw'}}/>
            <Button className={'contactUsBtn'}>Contact Us</Button>
            <RegisterPopupMenu/>
            <LoginPopupMenu/>

        </Box>
    )
}