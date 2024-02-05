import viewStudentIcon from "../../assets/icon/viewStudent.png";
import * as React from "react";
import addStudentIcon from "../../assets/icon/addStudent.png";

const routes = [
    {
        path: '/addStudent',
        key: 'addStudent',
        icon: <img src={addStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>,
        name: 'Add Student'
    },
    {
        path: '/viewStudent',
        key: 'viewStudent',
        icon: <img src={viewStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>,
        name: 'View Student'
    }
]

export default routes;