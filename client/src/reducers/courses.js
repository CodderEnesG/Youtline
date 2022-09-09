
import { FETCH_ALL_COURSES, CREATE_COURSE, DELETE_COURSE, UPDATE_COURSE, FETCH_COURSE, START_LOADING, END_LOADING, QUESTION_COURSE } from '../constants/actionTypes';
// eslint-disable-next-line
export default (state = { isLoading: true, courses: [], course: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_COURSE:
      return { ...state, course: action.payload };
    case QUESTION_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course._id === +action.payload._id) {
            return action.payload;
          }
          return course;
        }),
      };

    case CREATE_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };
    case UPDATE_COURSE:
      return { ...state, courses: state.courses.map((courses) => (courses._id === action.payload._id ? action.payload : courses)) };
    case DELETE_COURSE:
      return { ...state, courses: state.courses.filter((courses) => courses._id !== action.payload) };
    // case DELETE_QUESTION_COURSE:
    //   const filteredCourse = { ...state, courses: state.courses.filter((courses) => courses._id !== action.payload.id) };
    //   // const item = { ...state, courses: filteredCourse.course.courseQuestions.filter((courseQuestion) => courseQuestion.questionId !== JSON.stringify(action.payload.questionId)) };
    //   // console.log(item)
    //   // return { ...state, courses: filteredCourse.course.courseQuestions.filter((courseQuestion) => courseQuestion.questionId !== JSON.stringify(action.payload.questionId)) };  
    default:
      return state;
  }
};
