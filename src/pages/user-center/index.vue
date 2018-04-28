<template>
  <div>
    <div class="header">
        <div class="user" v-if="userInfo">
          <img class="avatar" :src="userInfo.avatar">
          <p class="username">{{userInfo.username}}</p>
        </div>
        <div v-else class="cover">
          <img class="avatar blank" src="/static/images/avatar.png">
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      userInfo: {
        username: '周冬雨',
        avatar: 'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg'
      }
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
