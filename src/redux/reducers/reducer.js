const INITIAL_STATES = {
  user: null,
  courses: null,
  loader: false,
  isLogin: false,
  isLoginFaculty: false,
  isLoginAdmin: false,
  bearer_token: "",
  polls: [],
  myPolls: [],
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "Course":
      return {
        ...state,
        courses: action.payload,
      };
    case "SAVE_POLLS":
      return {
        ...state,
        polls: [...state.polls, ...action.payload],
      };
    case "REFRESH_POLLS":
      return {
        ...state,
        polls: action.payload,
      };
    case "SAVE_MY_POLLS":
      return {
        ...state,
        myPolls: [...state.myPolls, ...action.payload],
      };
    case "REFRESH_MY_POLLS":
      return {
        ...state,
        myPolls: action.payload,
      };
    case "SAVE_BEARER_TOKEN":
      return {
        ...state,
        bearer_token: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        bearer_token: "",
        polls: [],
      };
    case "isLogin":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "isLoginFaculty":
      return {
        ...state,
        isLoginFaculty: action.payload,
      };
    case "isLoginAdmin":
      return {
        ...state,
        isLoginAdmin: action.payload,
      };
    case "LOADER_START":
      return {
        ...state,
        loader: true,
      };
    case "LOADER_STOP":
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
}
