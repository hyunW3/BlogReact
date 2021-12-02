export const ADD = "ADD";
export const MINUS = "MINUS";
export const TOGGLE = "TOGGLE";

export const reduxADD = () => ({
  type: ADD,
});
export const reduxMINUS = () => ({
  type: MINUS,
});
export const reduxTOGGLE = () => ({
  type: TOGGLE,
});
const initialState = {
  count: 0,
  status: "FINE",
};
export default function ReduxStarter(state = initialState, action) {
  // console.log("Redux : ",state)
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1,
        status: state.status,
      };
    case MINUS:
      return {
        count: state.count - 1,
        status: state.status,
      };
    case TOGGLE:
      switch (state.status) {
        case "FINE":
          return { count: state.count, status: "BAD" };
        default:
          return { count: state.count, status: "FINE" };
      }
    default:
      return state;
  }
}
