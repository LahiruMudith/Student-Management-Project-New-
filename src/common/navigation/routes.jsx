import viewStudentIcon from "../../assets/icon/viewStudent.png";
import * as React from "react";
import addStudentIcon from "../../assets/icon/addStudent.png";

const routes = [
    {
        path: '/addStudent',
        key: 'addStudent',
        icon: <img src={viewStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>
    },
    {
        path: '/viewStudent',
        key: 'viewStudent',
        icon: <img src={addStudentIcon} style={{width: '2vw', padding: '0.5vw'}}/>
    }
]

export default routes;