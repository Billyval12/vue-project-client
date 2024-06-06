<template>
  <div class="card-home">
    <div class="group-merge">
      <div class="group1">
        <img src="../assets/home.png" class="home-img"> 
        <div class="group2">
          <h4>Casa #5</h4>
          <p>9765432180</p>
        </div>
      </div>
      <div class="group3">
        <div class="group4">
          <h4>5</h4>
          <p>Miembros actuales</p>
        </div>
        <div class="group5">
          <h4>6</h4>
          <p>Miembros máximos</p>
        </div>
      </div>
    </div>
    <div class="group-merge2">
      <div class="group6">
        <p><strong>Residente encargado:</strong></p>
        <p class="email-resident">ricardoo.sibrian@gmail.com</p>
      </div>
    </div>
    <button class="edit-button" @click="showModal = true">
      <img src="../assets/edit_image.png" alt="Edit Icon" />
    </button>
    <EditHouseModal v-if="showModal" :show="showModal" :houseData="houseData" @close="showModal = false" @confirm="updateHouseData" />
  </div>
</template>

<script>
import EditHouseModal from '../components/EditHouseModal.vue';

export default {    
  name: 'CardHome',
  components: {
    EditHouseModal
  },
  data() {
    return {
      showModal: false,
      houseData: {
        residentsAllowed: 6,
        residentInCharge: 'John Doe',
        qrValidity: '10 min'
      }
    };
  },
  methods: {
    updateHouseData(updatedData) {
      this.houseData = { ...this.houseData, ...updatedData };
    }
  }
}
</script>

<style>
@import url('../styles.css');

.card-home{
  background-color: var(--white-color);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
  border-radius: 10px; 
  border: 1px solid transparent; 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0px 20px 0px;
  gap: 20px;
  position: relative; /* Añadido */
}

.group-merge{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}

.group6{
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: var(--title-color);
  font-family: var(--primary-font);
  font-size: 15px;
}

.group6 .email-resident{
  background-color: var(--bg-color);
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
}

.group1{
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
}

.group1 img{
  width: 100px;
  height: 100px;
} 

.group2{
  display: flex;
  flex-direction: column;
  color: var(--title-color);
  font-family: var(--primary-font);
  align-items: start;
}

.group2 h4{
  font-size: var(--title-size);
}

.group2 p{
  font-size: 15px;
}

.group3{
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: var(--title-color);
  font-family: var(--primary-font);
}

.group4{
  display: flex;
  flex-direction: column;
}

.group4 h4, .group5 h4{
  font-size: var(--title-size);
}

.group4 p, .group5 p{
  font-size: 15px;
}

.group5{
  display: flex;
  flex-direction: column;
}

/* Estilos para el botón de editar */
.edit-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.edit-button img {
  width: 24px;
  height: 24px;
}
</style>





