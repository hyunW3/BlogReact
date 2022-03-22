const ADD = "ADD";
const INIT = "INIT";
const THUMBSUP = "THUMBSUP";
const UPDATE = "UPDATE";

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
export const UpdateContent = (id, payload) => ({
  type: UPDATE,
  id,
  payload,
});
const initialState = {
  contents: [],
};
export type dataType = {
  id: string;
  title: string;
  content: string;
  date: Date;
  thumbs: number;
  modified: boolean;
};
export type contentsType = {
  contents: dataType[];
};

export default function BlogContent(
  state = initialState,
  action = INIT
): contentsType {
  let payloadFormatted = action.payload;
  if (Array.isArray(action.payload) === false) {
    payloadFormatted = [payloadFormatted];
  }

  switch (action.type) {
    case INIT:
      return { contents: payloadFormatted };
    case ADD:
      return { contents: [...state.contents, ...payloadFormatted] };
    case UPDATE:
      return {
        contents: state.contents.map((data: dataType): dataType => {
          // const { dataId : string } = data;
          const dataId: string = data.id;
          if (dataId === action.id) return action.payload;
          return data;
        }),
      };
    case THUMBSUP:
      return {
        contents: state.contents.map((data: dataType): dataType => {
          if (data.id === action.id) {
            const { id, title, content, date, thumbs }: dataType = data;
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
