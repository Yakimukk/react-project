const SET_LIST_NEWS = 'SET_LIST_NEWS'

const initialState = {
  newsList: [],
  
};

export const newsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LIST_NEWS:
      return {...state, newsList: action.payload.posts}
    default:
      return state
  }
}

export const setListNews = (listNews) => ({type: SET_LIST_NEWS, payload: listNews})
