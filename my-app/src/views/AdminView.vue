<template>
  <div class="main-admin">
      <router-link to="/adminHouseView" class="card-link"><CardAdmin :src="house" msg="Administrar hogares"></CardAdmin></router-link>
      <router-link to="/adminVigilantView" class="card-link"><CardAdmin :src="vigilant" msg="Administrar vigilantes"></CardAdmin></router-link>
      <router-link to="/adminScanerView" class="card-link"><CardAdmin :src="scaner" msg="Administrar escáneres"></CardAdmin></router-link>
  </div>
</template>

<script>
import CardAdmin from '@/components/CardAdmin.vue';
export default {
  name: 'AdminView',
  components:{
    CardAdmin
  },
  data() {
    return {
      house: require('../assets/home.png'), 
      vigilant: require('../assets/vigilant.png'),
      scaner: require('../assets/scaner.png'),
    };
  },
}
</script>

<style scoped>

  .grCard{
    margin-top: 0;

  }

  .main-admin{
    text-align: center;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
    gap: 10px;
    padding: 20px;
  }

  .card-link {
  cursor: pointer; 
  transition: transform 0.3s; 
  text-decoration: none;
  }

  .card-link:hover {
    transform: scale(1.02); 
  }

</style>
