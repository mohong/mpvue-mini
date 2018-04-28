<template>
  <div class="nowplaying">
    <ul>
      <li @click="bindViewTap(movie.id)" v-for="movie in movies" :key="movie">
        <card :movie="movie"></card>
      </li>
    </ul>
    <div class="center-btn" @click="toUserCenter">
      <center-btn></center-btn>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import CenterBtn from '@/components/center-btn'
import { login, getNowMovies } from '../../api/api'

export default {
  data () {
    return {
      userInfo: {},
      movies: []
    }
  },
  components: {
    card,
    CenterBtn
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
    _getNowMovies () {
      getNowMovies().then(res => {
        this.movies = res.subjects
      })
    },
    toUserCenter () {
      const url = '../user-center/main'
      wx.navigateTo({url})
    }
  },
  created () {
    this._getNowMovies()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .nowplaying
        background: #f8f8f8
        position: relative
        .center-btn
          position: fixed
          right: 0
          bottom: 100px
          color: red
</style>
