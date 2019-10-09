<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click = "handleClick('back')">返回上一页</button>
    <button @click = "handleClick('push')">跳转到parent</button>
    <button @click = "handleClick('replace')">replace到parent</button>
    {{ food }}
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  components: {
//    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    next()
//    if()
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('sure to leave?')
    if (leave) next()
    else next(false)
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name,from.name)
  },
  methods: {
    handleClick (argu) {
      if (argu === 'back') this.$router.back()
      else if (argu === 'push') {
        const name = 'lison'
        this.$router.push({
          path: `/argu/${name}`,
//          name: 'argu',
//          params: {
//            name: 'lison'
//          }
//          query: {
//            name: 'lison'
//          }
        })
      } else if (argu === 'replace'){
        this.$router.replace({
          name: parent
        })
      }

    }
  }
}
</script>
