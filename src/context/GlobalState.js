import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
	student_id: 1,
	teacher_id: null,
	lessons: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function updateStudentId(student_id) {
		dispatch({
			type: "UPDATE_STUDENT_ID",
			payload: student_id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				teacher_id: state.teacher_id,
				student_id: state.student_id,
				lessons: state.lessons,
				updateStudentId: updateStudentId,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
