<template>
  <div>
    <Ainput v-model="inputValue" @input="handleInput"/>
      <p>{{ inputValue }} last letter {{ inputValueLastLetter }}</p>
    <!--<Ashow :content="inputValue" />-->
    <p>{{ appName }}</p>
    <p>{{ userName }}</p>
    <p>{{ appWithVersion }}</p>
    <p>{{ firstLetter }}</p>
    <button @click="handleChangeAppName">修改appname</button>
    <p>{{ appVersion }}</p>
    <button @click="handleChangeUserName">修改username</button>
    <button @click="registerModule">动态注册模块</button>

    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  import Ainput from '../components/Ainput.vue'
  import Ashow from '../components/Ashow.vue'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
//  import { createNamespacedHelpers } from 'vuex'
//  const { mapState } = createNamespacedHelpers('user')
    export default {
      name: 'store',
      data () {
        return {
          inputValue: ''
        }
      },
      components: {
        Ainput,
        Ashow
      },
      methods: {
        ...mapMutations([
          'SET_USER_NAME',
          'SET_APP_NAME'
        ]),
        ...mapActions([
          'updateAppName'
        ]),
        handleInput (val) {
          this.inputValue = val
        },
        handleChangeAppName () {
//         this.$store.commit('SET_APP_NAME', 'newapp')
//         this.$store.commit({
//           type: 'SET_APP_NAME',
//           appName: 'newapp'
//         })
//          this.SET_APP_NAME('newappname')
          this.updateAppName()
          this.$store.commit('SET_APP_VERSION')
        },
        handleChangeUserName () {
          this.SET_USER_NAME('liuzhiqiang')
//          this.$store.dispatch('updateAppName', '123')
        },
        registerModule () {
          this.$store.registerModule(['user', 'todo'], {
            state: {
              todoList: [
                '学习mutations',
                '学习actions'
              ]
            }
          })
        }
      },
      computed: {
//        ...mapState([
//          'appName',
//          'userName'
//        ])
        ...mapState({
          appName: state => state.appName,
          userName: state => state.user.userName,
          appVersion: state => state.appVersion,
          todoList : state => state.user.todo ? state.user.todo.todoList : []
        }),
        ...mapGetters([
          'appWithVersion',
          'firstLetter'
        ]),
        appWithVersion () {
          return this.$store.getters.appWithVersion
        },
//        ...mapState({
//          userName: state => state.userName
//        })
//        appName () {
//          return this.$store.state.appName
//        },
//        userName () {
//          return this.$store.state.user.userName
        inputValueLastLetter () {
          return this.inputValue.substr(-1, 1)
        }
      }
    }
</script>
<style>

</style>
