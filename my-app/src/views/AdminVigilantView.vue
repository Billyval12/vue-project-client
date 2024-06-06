<template>
  <div class="main-admin-vigilant">
    <div class="add-vigilant">
      <h2>Agregar un nuevo vigilante</h2>
      <form @submit.prevent="addVigilant">
        <label for="email">Correo electrónico del nuevo vigilante</label>
        <input type="email" id="email" v-model="newVigilantEmail" placeholder="Correo electrónico" required />
        <button type="submit">AGREGAR</button>
      </form>
    </div>
    <div class="active-vigilants">
      <h2>Vigilantes activos</h2>
      <div class="vigilant-cards">
        <div class="vigilant-card" v-for="vigilant in vigilants" :key="vigilant.email">
          <CardAdmin :src="vigilant.src" :name="vigilant.name" :email="vigilant.email" @remove="removeVigilant(vigilant.email)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAdmin from '../components/CardVigilante.vue';
import vigilantImage from '../assets/vigilant.png';

export default {
  name: 'AdminVigilantView',
  components: {
    CardAdmin
  },
  data() {
    return {
      newVigilantEmail: '',
      vigilants: [
        { name: 'Carlos García', email: 'carlosgarcia@mail.com', src: vigilantImage },
      ]
    };
  },
  methods: {
    addVigilant() {
      if (this.newVigilantEmail) {
        this.vigilants.push({ name: 'Nuevo Vigilante', email: this.newVigilantEmail, src: vigilantImage });
        this.newVigilantEmail = '';
      }
    },
    removeVigilant(email) {
      this.vigilants = this.vigilants.filter(v => v.email !== email);
    }
  }
};
</script>

<style scoped>
@import url('../styles.css');

.main-admin-vigilant {
  padding: 20px;
  background-color: var(--bg-color);
  font-family: var(--primary-font);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: var(--title-size);
  color: var(--title-color);
}

.add-vigilant {
  background-color: var(--white-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.add-vigilant h2 {
  font-size: var(--title-size2);
  color: var(--primary-color);
  margin-bottom: 10px;
}

.add-vigilant form {
  display: flex;
  flex-direction: column;
}

.add-vigilant label {
  margin-bottom: 5px;
}

.add-vigilant input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-vigilant button {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-vigilant button:hover {
  background-color: #4b80e2;
}

.active-vigilants {
  margin-top: 20px;
}

.active-vigilants h2 {
  font-size: var(--title-size2);
  color: var(--title-color);
  margin-bottom: 10px;
}

.vigilant-cards {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.vigilant-card {
  flex: 0 0 auto;
}
</style>



