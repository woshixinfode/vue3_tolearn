<template>
  <input type="text" @input="handleInput" :value="value"/>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'Ainput',
      props: {
        value: {
          type: [String, Number],
          default: ''
        }
      },
      methods: {
        handleInput (event) {
          const value = event.target.value
          this.$emit('input', value)
        }
      }
    }
</script>
<style>

</style>
