import React, { Component } from 'react';
import './LessonsList.scss';

class LessonsList extends Component {
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
            },{
                id: "2",
                name: "Subtraction",
                topic: "",
                // TBD: do we need to display the teacher?
            },{
                id: "3",
                name: "Multiplication",
                topic: "Math",
                // TBD: do we need to display the teacher?
            },{
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
                    <div className="lessonInList" onClick={()=> window.location="/lessons/"+lesson.id}>
                        Lesson {lesson.id} - {lesson.name} 
                        <div className="questionGallery">
                            <div id="staticBox"></div>
                            <div id="staticBox"></div>
                            <div id="staticBox"></div>
                            <div id="staticBox"></div>
                        </div></div>)}
            </div >
        )
    }
}


export default LessonsList;