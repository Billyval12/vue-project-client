<template>
  <div class="main-admin-scanner">
    <div class="add-scanner">
      <h2>Agregar un nuevo escáner</h2>
      <form @submit.prevent="addScanner">
        <label for="email">ID del escaner</label>
        <input type="email" id="email" v-model="newScannerEmail" placeholder="Identificador" required />
        <button type="submit">AGREGAR</button>
      </form>
    </div> 
    <div class="active-scanners">
      <h2>Escáneres activos</h2>
      <div class="scanner-cards">
        <div class="scanner-card" v-for="scanner in scanners" :key="scanner.email">
          <CardScanner :src="scanner.src" :name="scanner.name" :email="scanner.email" @remove="removeScanner(scanner.email)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardScanner from '../components/CardTablet.vue';
import scannerImage from '../assets/scaner.png';

export default {
  name: 'AdminScannerView',
  components: {
    CardScanner
  },
  data() {
    return {
      newScannerEmail: '',
      scanners: [
        { name: 'Carlos García', email: 'carlosgarcia@mail.com', src: scannerImage },
      ]
    };
  },
  methods: {
    addScanner() {
      if (this.newScannerEmail) {
        this.scanners.push({ name: 'Nuevo Escáner', email: this.newScannerEmail, src: scannerImage });
        this.newScannerEmail = '';
      }
    },
    removeScanner(email) {
      this.scanners = this.scanners.filter(s => s.email !== email);
    }
  }
};
</script>

<style scoped>
@import url('../styles.css');

.main-admin-scanner {
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

.add-scanner {
  background-color: var(--white-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.add-scanner h2 {
  font-size: var(--title-size2);
  color: var(--primary-color);
  margin-bottom: 10px;
}

.add-scanner form {
  display: flex;
  flex-direction: column;
}

.add-scanner label {
  margin-bottom: 5px;
}

.add-scanner input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-scanner button {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-scanner button:hover {
  background-color: #4b80e2;
}

.active-scanners {
  margin-top: 20px;
}

.active-scanners h2 {
  font-size: var(--title-size2);
  color: var(--title-color);
  margin-bottom: 10px;
}

.scanner-cards {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.scanner-card {
  flex: 0 0 auto;
}
</style>