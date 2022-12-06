const SET_POST_LIST = 'SET_POST_LIST'

const initialState = {
  postList: [],
  
};

export const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POST_LIST:
      return {...state, postList: action.payload.posts}
    default:
      return state
  }
}

export const setListPost = (listPost) => ({type: SET_POST_LIST, payload: listPost})
