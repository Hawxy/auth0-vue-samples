<template>
   <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
    <footer class="bg-light text-center p-3">
      <div class="logo"></div>
      <p>
        Sample project provided by
        <a href="https://auth0.com">Auth0</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import {useAuth} from '@/auth/useAuthService'
import NavBar from '@/components/NavBar.vue'
import Error from '@/components/Error.vue'


export default defineComponent({
  components: {       
    NavBar,
    Error
  },
  setup() {
     const { initializeAuth } = useAuth();

    onMounted(() =>
      initializeAuth({
        domain: process.env.VUE_APP_AUTH0_DOMAIN as string,
        client_id: process.env.VUE_APP_AUTH0_CLIENTID as string,
        audience: process.env.VUE_APP_AUTH0_AUDIENCE as string,
        scope: 'openid profile email'
      })
    );
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
