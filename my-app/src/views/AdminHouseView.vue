<template>
  <div class="main-admin-house">
    <h2>Módulo de administración de hogares</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nº de casa</th>
            <th>Encargado</th>
            <th>Habitantes</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.id">
            <td>{{ house.numeroCasa }}</td>
            <td>{{ house.encargado }}</td>
            <td>{{ house.habitantes }}</td>
            <td><router-link to="/adminHouseDetailView" class="card-link"><a>Administrar</a></router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHouseView',
  data() {
    return {
      houses: [
        { id: 1, numeroCasa: 1, encargado: 'Carlos García', habitantes: 3 },
        { id: 2, numeroCasa: 2, encargado: 'Carlos García', habitantes: 4 },
        { id: 3, numeroCasa: 3, encargado: 'Carlos García', habitantes: 5 },
        { id: 4, numeroCasa: 4, encargado: 'Carlos García', habitantes: 2 },
        { id: 5, numeroCasa: 5, encargado: 'Carlos García', habitantes: 6 },
        { id: 6, numeroCasa: 6, encargado: 'Carlos García', habitantes: 2 },
        { id: 7, numeroCasa: 7, encargado: 'Carlos García', habitantes: 3 },
        { id: 8, numeroCasa: 8, encargado: 'Carlos García', habitantes: 4 },
        { id: 9, numeroCasa: 9, encargado: 'Carlos García', habitantes: 3 },
        { id: 10, numeroCasa: 10, encargado: 'Carlos García', habitantes: 2 },
      ]
    };
  },
  methods: {
    administrar(id) {
      console.log(`Administrar casa con id: ${id}`);
    }
  }
}
</script>

<style scoped>
@import url('../styles.css');

.main-admin-house {
  padding: 20px;
}

.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #f4f4f4;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

a {
  color: #1e90ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
