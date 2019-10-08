<template>
<div>
  166666666666
  <p class="tel">{{message}}</p>
</div>
</template>
<script type="text/ecmascript-6">
    export default {
      data (){
        return {
          message: ''
        }
      },
      mounted (){
        this.$bus.$on('on-click', mes => {
          this.message = mes
        })
      }
    }
</script>
<style>
 .tel{
   border:1px solid red;
 }
</style>
