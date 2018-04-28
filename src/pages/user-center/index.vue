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
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      userInfo: ''
    }
  },
  methods: {
    getUserInfo () {
      let that = this
      wx.getUserInfo({
        success (ret) {
          that.userInfo = ret.userInfo
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
</style>
