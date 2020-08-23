export default (state, action) => {
	switch (action.type) {
		case "UPDATE_STUDENT_ID":
			return {
				...state,
				student_id: state.student_id,
			};
		default:
			return state;
	}
};
