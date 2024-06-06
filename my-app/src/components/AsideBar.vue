<template>
<aside class="sidebar">
  <img class="logo" src="../assets/logo.png">
  <div class="links">
    <router-link to="/">
    <div class="item-container qr-icon" :class="{ 'active-hover': $route.path === '/' }" >
      <svg class="icons">
      <path fill="#ffffff" d="m4,11h7v-7h-7v7Zm16-7h-7v7h7v-7ZM4,20h7v-7h-7v7Zm-1,2h4v2H3c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1Zm19-5h2v4c0,1.654-1.346,3-3,3h-4v-2h4c.551,0,1-.449,1-1v-4Zm2-14v4h-2V3c0-.551-.449-1-1-1h-4V0h4c1.654,0,3,1.346,3,3ZM2,7H0V3C0,1.346,1.346,0,3,0h4v2H3c-.551,0-1,.449-1,1v4Zm11,10h3v3h-3v-3Zm4-1v-3h3v3h-3Zm-4-3h3v3h-3v-3Z"/>
      </svg>
      <p class="item-link">Inicio</p>
    </div>
    </router-link>
    <router-link to="/myHomeView">
    <div class="item-container home-icon" :class="{ 'active-hover': $route.path === '/myHomeView' }">
      <svg class="icons">
        <path fill="#ffffff" d="m12,8c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5ZM0,21v3h5v-6h-2c-1.657,0-3,1.343-3,3ZM11.343,2.227c.387-.303.928-.303,1.314,0l10.088,7.895,1.232-1.575L13.89.651c-1.113-.871-2.666-.87-3.779,0L.022,8.546l1.232,1.575L11.343,2.227Zm10.657,11.273c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm-1,4.5h-2v6h5v-3c0-1.657-1.343-3-3-3Zm-7-3h-4c-1.654,0-3,1.346-3,3v6h10v-6c0-1.654-1.346-3-3-3Zm-9.5-4c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Z"/>
      </svg>
      <p class="item-link">Mi hogar</p>
    </div>
    </router-link>
    <router-link to="/entryView">
    <div class="item-container entry-icon" :class="{ 'active-hover': $route.path === '/entryView' }">
      <svg class="icons">
        <path fill="#ffffff" d="m24,15c0,.617-.24,1.197-.678,1.634l-2.072,2.073c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.292-1.293h-6.128c-.553,0-1-.447-1-1s.447-1,1-1h6.128l-1.292-1.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.073,2.074c.437.436.677,1.016.677,1.633Zm-10-4v-5c0-1.103-.897-2-2-2h0s0,0,0,0v17.999h1c.552,0,1-.448,1-1v-2c0-.553.447-1,1-1s1,.447,1,1v2c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3V5.621C0,3.246,1.69,1.184,4.019.718L7.216.079c1.181-.236,2.391.066,3.321.829.375.307.665.685.902,1.092h.561c2.206,0,4,1.794,4,4v5c0,.553-.447,1-1,1s-1-.447-1-1Zm-5,1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
      </svg>
      <p class="item-link">Entradas</p>
    </div>
    </router-link>
    <router-link to="/permissionView">
    <div class="item-container permission-icon" :class="{ 'active-hover': $route.path === '/permissionView' }">
      <svg class="icons">
          <path fill="#ffffff" d="M19,0c-2.41,0-4.43,1.72-4.9,4H5.5c-1.93,0-3.5,1.57-3.5,3.5v2c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-2c0-.28,.22-.5,.5-.5h1.5v2.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-2.5h4.1c.46,2.28,2.48,4,4.9,4,2.76,0,5-2.24,5-5v-1c0-2.76-2.24-5-5-5Zm2,6c0,1.1-.9,2-2,2s-2-.9-2-2v-1c0-1.1,.9-2,2-2s2,.9,2,2v1Zm-.5,7c-.83,0-1.5,.67-1.5,1.5v2c0,.28-.22,.5-.5,.5h-1.5v-2.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v2.5h-4.1c-.46-2.28-2.48-4-4.9-4-2.76,0-5,2.24-5,5v1c0,2.76,2.24,5,5,5,2.41,0,4.43-1.72,4.9-4h8.6c1.93,0,3.5-1.57,3.5-3.5v-2c0-.83-.67-1.5-1.5-1.5Zm-13.5,6c0,1.1-.9,2-2,2s-2-.9-2-2v-1c0-1.1,.9-2,2-2s2,.9,2,2v1Z"/>
      </svg>
      <p class="item-link">Permisos</p>
    </div>
    </router-link>
    <router-link to="/adminView">
      <div class="item-container admin-icon" :class="{ 'active-hover': $route.path === '/adminView' || $route.path === '/adminHouseView' || $route.path === '/adminScanerView' || $route.path === '/adminVigilantView' }">
      <svg class="icons">
        <path fill="#ffffff" d="m8,12c-3.309,0-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6-2.691,6-6,6Zm14.5,6c0-.46-.089-.895-.218-1.313l1.416-.816-.998-1.733-1.411.813c-.605-.652-1.393-1.125-2.289-1.33v-1.621h-2v1.621c-.896.205-1.685.678-2.289,1.33l-1.411-.813-.998,1.733,1.416.816c-.129.418-.218.853-.218,1.313s.089.895.218,1.313l-1.416.816.998,1.733,1.411-.813c.605.652,1.393,1.125,2.289,1.33v1.621h2v-1.621c.896-.205,1.685-.678,2.289-1.33l1.411.813.998-1.733-1.416-.816c.129-.418.218-.853.218-1.313Zm-4.5,1.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm-8-1.5c0-1.459.397-2.822,1.079-4h-6.579c-2.481,0-4.5,2.019-4.5,4.5v5.5h12.721c-1.665-1.466-2.721-3.607-2.721-6Z"/>
      </svg>
      <p class="item-link" >Administrar</p>
    </div>
    </router-link>
    <router-link to="/graphView">
    <div class="item-container graph-icon" :class="{ 'active-hover': $route.path === '/graphView' }">
      <svg class="icons">
          <path fill="#ffffff" d="M22,15H0v-6H22c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-6-9H0V0H16c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-6,18H0v-6H10c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Z"/>
      </svg>
      <p class="item-link" to="/about">Gráficos</p>
    </div>
  </router-link>
    
  </div>
</aside>
</template>

<script>
export default {
  name: 'AsideBar',
  methods: {
    addHoverClass() {
      if (this.$route.path === '/') {
        this.$refs.item.classList.add('hover'); 
      }
    }
  }
};
</script>

<style scoped>
@import url('../styles.css');
.sidebar {
  position: fixed;
  left: 0;
  top: 0; 
  bottom: 0; 
  background-color: var(--primary-color); 
  width: 16%;
  display: flex;
  flex-direction: column;
}

.logo{
  margin-top: 20px;
  width: 100px;
  height: 125px;
  margin-left: auto;
  margin-right: auto;
}

.links {
  display: flex;
  width: 83%;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  gap: 10px;
}

.item-container{
  padding: 8px 25px 8px 25px;
  gap: 10px;
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
}

.item-container .item-link{
  color: var(--white-color);
  font-family: var(--primary-font);
  font-size: var(--menu-items-size);
  font-weight: 300;
}

.icons{
  width: 25px;
  height: 25px; 
}

.item-link {
  text-decoration: none;
}

.item-container:hover, .item-container.active-hover {
  background-color: var(--white-color);
  border-radius: 5px;
  cursor: pointer;
}

.item-container:hover .item-link, .item-container.active-hover .item-link {
  color: var(--primary-color); 
  font-weight: bold;
}

.item-container:hover .icons path, .item-container.active-hover .icons path {
  fill: var(--primary-color);
}
</style>

