import React, { useContext, useEffect, useState } from "react";
import Addition from "../assets/Addition.svg";
import Subtraction from "../assets/Subtraction.svg";
import Multiplication from "../assets/Multiplication.svg";
import Division from "../assets/Division.svg";
import Banner from "../assets/mathBanner.png";
import "./LessonsList.scss";

// import global context to use global state
import { GlobalContext } from "../context/GlobalState";

function LessonsList() {
	const {
		student_id,
		lessons,
		isLoading,
		updateStudentId,
		updateLessons,
		updateLoading,
	} = useContext(GlobalContext);

	useEffect(() => {
		updateLoading(true);
		fetch(
			"https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonsByStudentId/",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ student_id: student_id }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				updateLessons(data.rows);
				updateLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div className="pageTitle">LOADING ...</div>;
	}

	return (
		<div className="lessonsContainer">
			<div className="bannerContainer">
				<img className="lessonBanner" src={Banner} alt=""></img>
				<div className="bannerTitle">Lessons</div>
			</div>

			<div className="pageTitle">Lessons (?)</div>
			{lessons.map((lesson, id) => (
				<div
					key={id}
					className="lessonInList"
					onClick={() =>
						(window.location = "/lessons/" + lesson.lesson_id)
					}
				>
					Lesson {id + 1} - {lesson.lesson_name}
					<div className="questionGallery">
						<div id="staticBox"></div>
					</div>
				</div>
			))}
		</div>
	);
}

export default LessonsList;
