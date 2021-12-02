// import BlogContent, {InitContent, ADDContent } from "../redux/BlogContent"
const ADD = "ADD";
const INIT = "INIT";
const THUMBSUP = "THUMBSUP";

export const ADDContent = (payload) => ({
  type: ADD,
  payload,
});
export const InitContent = (payload) => ({
  type: INIT,
  payload,
});
export const ThumbsUpContent = (payload) => ({
  type: THUMBSUP,
  id: payload,
});

const initialState = {
  contents: [],
};

export default function BlogContent(state = initialState, action) {
  let payloadFormatted = action.payload;
  if (Array.isArray(action.payload) === false)
    payloadFormatted = [payloadFormatted];

  switch (action.type) {
    case INIT:
      return { contents: payloadFormatted };
    case ADD:
      return { contents: [...state.contents, ...payloadFormatted] };
    case THUMBSUP:
      return {
        contents: state.contents.map((data) => {
          if (data.id === action.id) {
            const { id, title, content, date, thumbs } = data;
            return {
              id,
              title,
              content,
              date,
              thumbs: thumbs + 1,
              modified: true,
            };
          }
          return data;
        }),
      };
    default:
      return state;
  }
}
