<template>
  <div class="card">
    <img :src="src" class="qr-img"> 
    <button @click="changeQR()" class="buttonQR">Generar QR</button>
  </div>
</template>

<script>
export default {
  name: 'CardQR',
  data() {
    return {
      src: require('../assets/No-QR.png')
    };
  },
  methods: {
    changeQR() {
        this.src = require('../assets/QR.png')
    }
  }
}
</script>

<style>
@import url('../styles.css');
.card{
    background-color: white;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
    border-radius: 10px; 
    border: 1px solid transparent; 
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.card .qr-img{
    width: 250px;
    height: 250px;
    border-radius: 5px;
}

.buttonQR{
    background-color: var(--primary-color);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
    border-radius: 5px;
    color: white;
    font-size: var(--menu-items-size);
    font-family: var(--primary-font);
    padding: 8px 0px 8px 10px;
    width: 250px;
    font-weight: 600;
}


</style>

