import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MusicContainer from "../../components/MusicContainer";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropDownMenu from "../../components/DropdownMenu";
import TeacherStudentButtons from "../../components/TeacherStudentButtons";




function CreatePost() {
    const [Instruments, SetInstruments] = useState([]);
    const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState([]);


    return(
        <div>
        <p>asdfasddf</p>        
        <Button variant="primary">Primary</Button>{' '}
        <DropDownMenu />
        <TeacherStudentButtons />

        </div>
    )
}

export default CreatePost;