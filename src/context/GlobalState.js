import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
	student_id: 1,
	teacher_id: null,
	lessons: [],
	isLoading: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function updateStudentId(student_id) {
		console.log("updateStudentId running");
		dispatch({
			type: "UPDATE_STUDENT_ID",
			payload: student_id,
		});
	}

	function updateLessons(lessons) {
		dispatch({
			type: "UPDATE_LESSONS",
			payload: lessons,
		});
	}

	function updateLoading(isLoading) {
		dispatch({
			type: "UPDATE_LOADING",
			payload: isLoading,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				teacher_id: state.teacher_id,
				student_id: state.student_id,
				lessons: state.lessons,
				isLoading: state.isLoading,
				updateStudentId: updateStudentId,
				updateLessons: updateLessons,
				updateLoading: updateLoading,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
