import React, { useContext, useEffect, useState } from "react";
import "./LessonsList.scss";

// import global context to use global state
import { GlobalContext } from "../context/GlobalState";
const axios = require("axios");

function LessonsList() {
	const { student_id } = useContext(GlobalContext);
	const [lessons, setLessons] = useState([]);

	useEffect(() => {
		axios({
			method: "post",
			url:
				"https://vietjs.api.stdlib.com/ht6ix@dev/lesson/getLessonsByStudentId/",
			headers: {},
			data: {
				student_id: student_id, // This is the body part
			},
		}).then((response) => {
			let lessons = response.data.rows;

			setLessons(lessons);
		});
	});
	return (
		<div>
			<div className="pageTitle">Lessons (?)</div>
			{lessons.map((lesson, id) => (
				<div
					key={id}
					className="lessonInList"
					onClick={() => (window.location = "/lessons/" + lesson.id)}
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
