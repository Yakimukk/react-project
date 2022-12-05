import axios from 'axios'
import { setListNews } from './reducer'


export const getListNews = () => {
  return async (dispatch) => {
    const res = await axios.get('https://dummyjson.com/posts')
    dispatch(setListNews(res.data))
  }
}