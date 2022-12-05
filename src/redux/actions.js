import axios from 'axios'
import { setListNews } from './reducer'


export const getListNews = () => {
  return async (dispatch) => {
    const res = await axios.get('https://dummyjson.com/posts')
    dispatch(setListNews(res.data))
  }
}

export const getNews = async (id, setNews) => {
  const res = await axios.get(`https://dummyjson.com/posts/${id}`)
  setNews(res.data)
}

export const getComments = async (id, setComments) => {
  const res = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
  setComments(res.data.comments)
}

