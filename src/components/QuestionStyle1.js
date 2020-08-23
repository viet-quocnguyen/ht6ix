import React from "react";
import Banner from "../assets/mathBanner.png";
import Teacher from "../assets/Teacher.svg";
import Audio from "../assets/Audio.png";
import RightArrow from "../assets/Arrow-right.png";
import LeftArrow from "../assets/Arrow_left.svg";
import "../components/LessonStart.scss";
import './QuestionStyle1.scss';


function QuestionStyle1() {
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
        lesson_type: "Mathematics",
        lesson_id: "1"
    }

    const question = {
        question_text: "What is 1+1?",
        lesson_id: "1"
    }

    const answers = [{
        answer_id: "1",
        answer_text: "2"
    }, {
        answer_id: "2",
        answer_text: "5"
    }, {
        answer_id: "3",
        answer_text: "3"
    }, {
        answer_id: "4",
        answer_text: "1"
    },
    ]


    return (
        <div className="questionContainer">
            <div className="bannerContainer">
                <img className="lessonBanner" src={Banner} alt=""></img>
                <div className="bannerTitle">{lesson.lesson_type}</div>
            </div>

            <div className="lessonName">Lesson 1: Addition</div>
            <div className="questionBlock">
                <div className="questionSection">
                    <img src={Teacher}></img>
                    <div className="questionText">{question.question_text}<img src={Audio}></img></div>
                </div>
                <div className="answerSection">
                    {answers.map((answer) =>
                        <div className="answer">{answer.answer_text}</div>
                    )}
                </div>
                <div className="navigationSection">
                    <img src={LeftArrow} alt="previousQuestion"></img>
                    <div className="questionCount">
                        <div className="count">1</div>
                        <div className="count">1</div>
                        <div className="count">1</div>
                    </div>
                    <img src={RightArrow} alt="nextQuestion" id="rightArrow"></img>

                </div>
            </div>
        </div>
    );
}

export default QuestionStyle1;
