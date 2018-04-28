<template>
  <div>
    <div class="header">
        <img class="avatar" v-if="userInfo" src="userInfo.avatar" alt="">
        <div v-else class="cover">登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      userInfo: ''
    }
  }
}
</script>

<style scoped lang="stylus">
    .header
        height: 220px
        background-color: #2ABE7B
        position relative
        .cover
            position: absolute
            width: 80px
            height: 80px
            left: 50%
            margin-left: -40px
            top: 40px
            border-radius: 50%
            background-color: #ffffff
            color:#575757
            text-align: center
            line-height: 80px

</style>
