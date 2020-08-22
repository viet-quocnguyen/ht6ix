import React, { Component } from 'react';
import './LessonsList.scss';
const axios = require('axios');

class LessonsList extends Component {
    state = {
        lessons:[]
    }

    async componentDidMount() {

        await axios({
            method: 'post',
            url: 'https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonsByStudentId/',
            data: {
                student_id: 1, 
            }
        }).then((response) => {
            this.setState({
                lessons: response.data.rows
            })
        })
    }

    render() {
        return (
            <div >
                <div className="pageTitle">Lessons</div>
                {this.state.lessons.map((lesson, i) =>
                    <div className="lessonInList" key={lesson.lesson_id} 
                    onClick={() => window.location = "/lessons/" + lesson.lesson_id}>
                        Lesson {i+1} - {lesson.lesson_name}
                        <div className="questionGallery">
                            <div id="staticBox"></div>
                            <div id="staticBox"></div>
                            <div id="staticBox"></div>
                        </div></div>)}
            </div >
        )
    }
}


export default LessonsList;