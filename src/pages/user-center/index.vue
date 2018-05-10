<template>
  <div>
    <div class="header">
        <div class="user" v-if="userInfo">
          <img class="avatar" :src="userInfo.avatarUrl">
          <p class="username">{{userInfo.nickName}}</p>
        </div>
        <div v-else class="cover">
          <img @click="getUserInfo" class="avatar blank" src="/static/images/avatar.png">
        </div>
    </div>
    <div v-if="userInfo" class="action">
      <p class="item">
        <!-- 需要增加接口 -->
        <span>收藏</span><span>30</span>
      </p>
      <p class="item">
        <span>喜欢</span><span>12</span>
      </p>
      <p class="item">
        <span>评论</span><span>20</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {login} from '../../api/api'

export default {
  data () {
    return {
      userInfo: ''
    }
  },
  methods: {
    getUserInfo () {
      let that = this
      wx.login({
        success (ret1) {
          const code = ret1.code
          wx.getUserInfo({
            success (ret2) {
              const encryptedData = ret2.encryptedData
              const iv = ret2.iv
              login(code, encryptedData, iv).then(ret3 => {
                const token = ret3.token
                that.userInfo = ret2.userInfo
                wx.setStorageSync('token', token)
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
    .header
        height: 220px
        background-color: #2ABE7B
        position relative
        .user, .cover
            margin: auto
            position: absolute
            text-align: center
            left: 0
            right: 0
            top: 30px
            bottom: 0
            .avatar
                background-color: #ffffff
                width: 80px
                height: 80px
                border-radius: 50%
                &.blank
                    box-sizing: border-box
                    border: 20px solid #ffffff
            .username
                margin-top: 10px
                color: #ffffff
                font-size: 14px
    .action
      .item
        color: #999
        font-size: 14px
        padding:  0 30px
        height: 60px
        line-height: 60px
        border-bottom: 1px solid #f8f8f8
        display: flex
        justify-content: space-between
</style>
