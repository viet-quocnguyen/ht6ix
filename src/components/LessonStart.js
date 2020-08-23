import React, { useContext, useEffect, useState } from "react";
import Banner from "../assets/mathBanner.png";
import Addition from "../assets/Addition.svg";
import Dan from "../assets/Dan.svg";
import Gon from "../assets/Gon.svg";
import Jen from "../assets/Jen.svg";
import "../components/LessonStart.scss";

// import global context to use global state
import { GlobalContext } from "../context/GlobalState";

function LessonStart() {
    // const { student_id } = useContext(GlobalContext);
    // const [lessons, setLessons] = useState([]);

    // useEffect(() => {
    // 	axios({
    // 		method: "post",
    // 		url:
    // 			"https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonsByStudentId/",
    // 		headers: {},
    // 		data: {
    // 			student_id: student_id, // This is the body part
    // 		},
    // 	}).then((response) => {
    // 		let lessons = response.data.rows;

    // 		setLessons(lessons);
    // 	});
    // });

    const lesson = {
        lesson_name: "Addition",
        lesson_type: "Mathematics",
        lesson_id: "1"
    }

    const classmates = [
        {
            name: "Dan",
            pic: Dan
        }, {
            name: "Gon",
            pic: Gon
        }, {
            name: "Jen",
            pic: Jen
        }

    ]


    return (
        <div className="startContainer">
            <div className="bannerContainer">
                <img className="lessonBanner" src={Banner} alt=""></img>
                <div className="bannerTitle">{lesson.lesson_type}</div>
            </div>
            <div className="lessonDetails">
                <div className="startBlock ">
                    <img src={Addition}></img>
                    <div className="lessonNumber">Lesson 1 </div>
                    <div className="lessonTitle">{lesson.lesson_name}</div>
                    <div className="lessonSubtitle"> Learn to add like a champ!</div>
                    <div className="startButton" onClick={() => window.location = 'lessons/' + lesson.lesson_id + '/1'}>
                        Click here to start!</div>
                </div>

                <div className="socialDetails">
                    <div className="friendBlock">
                        <div className="socialTitle">Who in your class did this</div>
                        {classmates.map((classmate) =>
                            <div className="classmateRow">
                                <img src={classmate.pic} id="classmatePic"></img>
                                <div className="classmateName">{classmate.name}</div>
                            </div>)}
                    </div>
                    <div className="countBlock">
                        <div className="socialTitle">How many times have you done this lesson</div>
                        <div className="countText">You've never played this one before!</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LessonStart;
