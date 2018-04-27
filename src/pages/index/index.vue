<template>
  <div class="container" @click="clickHandle('test click', $event)">

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
    bindViewTap () {
      const url = '../goods/main'
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
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
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

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
