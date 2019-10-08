<template>
<div class="email">
  email
  <button @click="handleClick">press</button>
</div>
</template>
<script type="text/ecmascript-6">
    export default {
      methods: {
        handleClick () {
          this.$bus.$emit('on-click', 'hello');
        }
      },
      mounted(){
        console.log(this.$bus);
      }
    }
</script>
<style>
  .email{
    border: 1px solid blue;
  }
</style>
