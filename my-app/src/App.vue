<template>
  <AsideBar></AsideBar>
  <div class="container">
    <TopBar class="topbar"></TopBar>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AsideBar from './components/AsideBar.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    AsideBar,
    TopBar
  }
}
</script>

<style>
@import url('./styles.css');

html, body{
  background-color: var(--bg-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 16%;
}

.router{
  margin-top: 50px;
  width: 100%;
}

</style>