<script>
import Login from './views/Login.vue';
import { useRouter } from "vue-router";

export default{
  data(){
    return{
      router: useRouter(),
    }
  },
  components: {
    Login,
  },
};
</script>

<template>
  <div id="app">
    <Login :path="this.$router.currentRoute.value.fullPath"
      v-if="this.$router.currentRoute.value.fullPath == '/'" />
    <RouterView  v-else/>
  </div>
</template>


