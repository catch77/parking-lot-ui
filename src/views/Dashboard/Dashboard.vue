<template>
  <div>
    <h2>Hello, {{$store.getters['admin/user'].name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {};
  },
};
</script>
