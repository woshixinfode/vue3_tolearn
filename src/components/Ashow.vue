<template>
<div>
  <p>Ashow : {{ content }}</p>
</div>
</template>
<script type="text/ecmascript-6">
    export default {
      props: {
        content: {
          type: [String, Number],
          default: ''
        }

      }
    }
</script>
<style>

</style>
