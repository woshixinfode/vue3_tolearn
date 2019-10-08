<template>
  <div>
    <Ainput v-model="inputValue" @input="handleInput"/>
      <p>{{ inputValue }}</p>
    <Ashow :content="inputValue" />
  </div>
</template>
<script type="text/ecmascript-6">
  import Ainput from '../components/Ainput.vue'
  import Ashow from '../components/Ashow.vue'
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
        handleInput (val) {
          this.inputValue = val
        }
      }
    }
</script>
<style>

</style>
