export default (state, action) => {
	switch (action.type) {
		case "UPDATE_STUDENT_ID":
			console.log(action);
			return {
				...state,
				student_id: action.payload,
			};
		case "UPDATE_LESSONS":
			return {
				...state,
				lessons: action.payload,
			};
		case "UPDATE_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
