<template>
  <div class="entries-table-container">
    <h2>Historial de entradas a mi hogar</h2>
    <div class="filter-container">
      <input type="text" placeholder="Buscar por nombre de visitante" v-model="searchQuery" />
      <div class="dropdown">
        <button @click="toggleDropdown" class="dropdown-button">
          Filtrar por fecha de entrada
        </button>
        <div v-if="dropdownVisible" class="dropdown-menu">
          <button @click="sortEntries('oldest')">Más antigua</button>
          <button @click="sortEntries('newest')">Más reciente</button>
        </div>
      </div>
    </div>
    <table class="entries-table">
      <thead>
        <tr>
          <th>Fecha/Hora de entrada</th>
          <th>Visitante</th>
          <th>Correo electrónico</th>
          <th>Tipo de entrada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredEntries" :key="entry.id">
          <td>{{ entry.date }}</td>
          <td>{{ entry.visitor }}</td>
          <td>{{ entry.email }}</td>
          <td>{{ entry.entryType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EntriesTable',
  data() {
    return {
      searchQuery: '',
      dropdownVisible: false,
      entries: [
        { id: 1, date: '02/03/2023 15:30:00', visitor: 'Carlos García', email: 'john.doe@gmail.com', entryType: 'Entrada única' },
        { id: 2, date: '02/03/2023 15:30:00', visitor: 'Carlos García', email: 'ricardo.lopez@gmail.com', entryType: 'Entrada única' },
        { id: 3, date: '02/03/2023 15:30:00', visitor: 'Carlos García', email: 'fernando.eguzizabal@gmail.com', entryType: 'Entrada única' },
        // Agrega más entradas según sea necesario
      ],
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(entry => 
        entry.visitor.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    sortEntries(order) {
      this.entries.sort((a, b) => {
        return order === 'newest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
      });
      this.dropdownVisible = false;
    }
  }
};
</script>

<style scoped>
.entries-table-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #4a4a4a;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 60%;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}

.dropdown {
  position: relative;
}

.dropdown-button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  background: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.dropdown-menu button {
  display: block;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}

.dropdown-menu button:hover {
  background-color: #f0f0f0;
}

.entries-table {
  width: 100%;
  border-collapse: collapse;
}

.entries-table th,
.entries-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.entries-table th {
  background-color: #f9f9f9;
}
</style>
