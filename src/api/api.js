import fly from './fly'

export function getGoodsList (params) {
  let url = `/goods/list?page=1&pageSize=30&priceLevel=all&sort=1`
  return fly.get(url)
}

export function login (code) {
  let url = `/auth/login`
  return fly.post(url, {
    code: code
  })
}

export function getHotMovies () {
  let url = `/movie/hot`
  return fly.get(url)
}

export function getDetail (id) {
  let url = `/movie/detail?id=${id}`
  return fly.get(url)
}
