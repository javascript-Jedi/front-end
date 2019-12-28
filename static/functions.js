import axios from 'axios'

const baseUrl = 'http://localhost:5001/'

export const get = (type, param, success) => {
  (async () => {
    const url = `${baseUrl}${type}/${param}`
    const res = await axios.get(url)
    success(res.data)
  })()
}

export const edit = (data, type, id, success) => {
  const url = `${baseUrl}${type}/${id}`
  axios
    .put(url, { data })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const create = (data, type, success) => {
  const url = `${baseUrl}${type}`
  axios
    .post(url, data)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        success(response)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const remove = (type, id, success) => {
  const url = `${baseUrl}${type}/${id}`

  axios
    .delete(url)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        success(response)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}


export const auth = (data, type, success) => {
  const url = `${baseUrl}${type}`
  axios
    .post(url, data)
    .then(response => {
      // console.log(response)
      if (response.status === 200) {
        success(response.data)
      }
    })
    .catch(function (error) {
      console.log(error)
      success(error)
      // success(error.response.data.message)
    })
}


export const getUserData = (token, success) => {
  const url = `${baseUrl}api/me`
  const headers = {
    Authorization: 'Bearer ' + token
  }
  axios
    .get(url, { headers })
    .then(res => success(res))
}

