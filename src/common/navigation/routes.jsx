import viewStudentIcon from "../../assets/icon/viewStudent.png";
import * as React from "react";
import addStudentIcon from "../../assets/icon/addStudent.png";
import AddStudentPage from "../../pages/AddStudentPage/AddStudentPage.jsx";
import ViewStudentPage from "../../pages/ViewStudentPage/ViewStudentPage.jsx";

const routes = [
    {
        path: '/addStudent',
        key: 'addStudent',
        component:<AddStudentPage/>,
        icon: <img src={addStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>,
        name: 'Add Student',
    },
    {
        path: '/viewStudent',
        key: 'viewStudent',
        component: <ViewStudentPage/>,
        icon: <img src={viewStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>,
        name: 'View Student'
    }
]

export default routes;