<template>
  <div class="nowplaying">
    <ul>
      <li @click="bindViewTap(movie.id)" v-for="movie in movies" :key="movie">
        <card :movie="movie"></card>
      </li>
    </ul>
    </div>
</template>

<script>
import card from '@/components/card'
import { login, getHotMovies } from '../../api/api'

export default {
  data () {
    return {
      userInfo: {},
      movies: []
    }
  },
  components: {
    card
  },
  methods: {
    bindViewTap (id) {
      const url = `../detail/main?id=${id}`
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (res) => {
          login(res.code).then(ret => {
            wx.setStorageSync('token', ret.token)
            console.log(ret)
          })
        }
      })
    },
    _getHotMovies () {
      getHotMovies().then(res => {
        console.log(res)
        this.movies = res.subjects
      })
    }
  },
  created () {
    this._getHotMovies()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .nowplaying
        background: #f8f8f8
        .nowplaying-wrapper
            position: absolute
            display: block
            width: 100%
            top: 40px
            bottom: 10px
            overflow: hidden
</style>
