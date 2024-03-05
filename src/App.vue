<template><router-view v-if='!Store.loader'/></template>
<script setup>
  import Store from './stores/store.js'
</script>