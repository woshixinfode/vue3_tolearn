<template>
  <div>
    {{ name }}
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props: {
        name: {
          type: String,
          default: 'lison'
        }
      }

    }
</script>
<style>

</style>
