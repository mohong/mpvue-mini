const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
export const baseUrl = 'http://192.168.199.131:3000'

export function getGoodsList (params) {
  let url = `${baseUrl}/goods/list?page=1&pageSize=30&priceLevel=all&sort=1`
  return fly.get(url)
}
