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
	const [lesson, setLesson] = useState({});
	const {
		student_id,
		lessons,
		isLoading,
		updateStudentId,
		updateLessons,
		updateLoading,
	} = useContext(GlobalContext);
	let rand = Math.random();

	useEffect(() => {
		updateLoading(true);
		console.log("HELLO");
		var str = window.location.href;
		var n = str.lastIndexOf("/");
		var lesson_id = parseInt(str.substring(n + 1));
		console.log(lesson_id);

		fetch("https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonById/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ lesson_id: lesson_id }),
		})
			.then((res) => res.json())
			.then((data) => {
				let result = data.rows[0];
				setLesson(result);
				console.log(result);
				updateLoading(false);
			});
	}, []);

	const classmates = [
		{
			name: "Adam",
			pic: Dan,
		},
		{
			name: "Nick",
			pic: Gon,
		},
		{
			name: "Henry",
			pic: Jen,
		},
		{
			name: "Dan",
			pic: Dan,
		},
		{
			name: "Gon",
			pic: Gon,
		},
		{
			name: "Jen",
			pic: Jen,
		},
	];

	if (isLoading) {
		return <div>LOADING...</div>;
	} else {
		return (
			<div className="startContainer">
				<div className="bannerContainer">
					<img className="lessonBanner" src={Banner} alt=""></img>
					<div className="bannerTitle">{lesson.lesson_topic}</div>
				</div>
				<div className="lessonDetails">
					<div className="startBlock ">
						<img src={Addition}></img>
						<div className="lessonNumber">
							Lesson {lesson.lesson_id}{" "}
						</div>
						<div className="lessonTitle">{lesson.lesson_name}</div>
						<div className="lessonSubtitle">
							{" "}
							Learn to add like a champ!
						</div>
						<div
							className="startButton"
							onClick={() =>
								(window.location = "/lessons/question")
							}
						>
							Click here to start!
						</div>
					</div>

					<div className="socialDetails">
						<div className="friendBlock">
							<div className="socialTitle">
								Who in your class did this
							</div>

							{classmates
								.sort(() => 0.5 - rand)
								.slice(0, 3)
								.map((classmate, id) => (
									<div key={id} className="classmateRow">
										<img
											src={classmate.pic}
											id="classmatePic"
										></img>
										<div className="classmateName">
											{classmate.name}
										</div>
									</div>
								))}
						</div>
						<div className="countBlock">
							<div className="socialTitle">
								How many times have you done this lesson
							</div>
							<div className="countText">
								You've never played this one before!
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LessonStart;
