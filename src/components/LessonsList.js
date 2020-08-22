import React, { Component } from 'react';
import './LessonsList.scss';
const axios = require('axios');

class LessonsList extends Component {

    async componentDidMount() {
        await axios({
            method: 'post',
            url: 'https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonsByStudentId/',
            headers: {},
            data: {
                student_id: 1, // This is the body part
            }}).then((response) => {
                console.log(response);  
        })
    }


    render() {
        // TBD API call here to get all lessons and their info
        //get lessons by topic? 
        // lesson id is being used as the number right now, but do we have another way of incrementing this value? 

        const lessons = [
            {
                id: "1",
                name: "Addition",
                topic: "Math",
                // TBD: do we need to display the teacher?
            }, {
                id: "2",
                name: "Subtraction",
                topic: "",
                // TBD: do we need to display the teacher?
            }, {
                id: "3",
                name: "Multiplication",
                topic: "Math",
                // TBD: do we need to display the teacher?
            }, {
                id: "4",
                name: "Division",
                topic: "",
                // TBD: do we need to display the teacher?
            },

        ]

        return (
            <div >
                <div className="pageTitle">Lessons (?)</div>
                {lessons.map((lesson) =>
                    <div className="lessonInList" onClick={() => window.location = "/lessons/" + lesson.id}>
                        Lesson {lesson.id} - {lesson.name}
                        <div className="questionGallery">
                            <div id="staticBox"></div>
                        </div></div>)}
            </div >
        )
    }
}


export default LessonsList;