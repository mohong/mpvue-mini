<template>
  <div v-if="image">
    <img class="cover" :src="image" alt="">  
    <p>详情: {{name}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      name: '',
      image: ''
    }
  },
  mounted () {
    this.name = this.$root.$mp.query.id
    this.image = this.$root.$mp.query.img
  },
  onUnload () {
    console.log('onUnload')
    this.name = ''
    this.image = ''
  },
  onShareAppMessage: function () {
    return {
      title: this.name,
      path: './main'
    }
  }
}
</script>

<style scoped>
  .cover {
      width: 100%;
  }
</style>
