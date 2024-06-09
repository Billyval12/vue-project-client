<template>
  <div class="permissions-table-container">
    <h2>Gestión de permisos</h2>
    <div class="tabs">
      <button :class="{ active: activeTab === 'solicitudes' }" @click="setActiveTab('solicitudes')">Historial de solicitudes</button>
      <button :class="{ active: activeTab === 'activos' }" @click="setActiveTab('activos')">Permisos activos</button>
    </div>
    <div class="filter-container">
      <input type="text" placeholder="Buscar por nombre de visitante" v-model="searchQuery" />
      <div class="dropdown">
        <button @click="toggleDropdown" class="dropdown-button">
          Filtrar por fecha de creación
        </button>
        <div v-if="dropdownVisible" class="dropdown-menu">
          <button @click="sortPermissions('oldest')">Más antigua</button>
          <button @click="sortPermissions('newest')">Más reciente</button>
        </div>
      </div>
    </div>
    <table class="permissions-table">
      <thead>
        <tr>
          <th>Solicitante</th>
          <th>Visitante</th>
          <th>Fecha de permiso</th>
          <th>Hora de inicio</th>
          <th>Hora de fin</th>
          <th>Tipo de permiso</th>
          <th>Resuelto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="permission in filteredPermissions" :key="permission.id">
          <td>{{ permission.requester }}</td>
          <td>{{ permission.visitor }}</td>
          <td>{{ permission.permissionDate }}</td>
          <td>{{ permission.startTime }}</td>
          <td>{{ permission.endTime }}</td>
          <td>{{ permission.permissionType }}</td>
          <td>
            <button class="resolve-button accept">✔️</button>
            <button class="resolve-button deny">❌</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PermissionsTable',
  data() {
    return {
      searchQuery: '',
      dropdownVisible: false,
      activeTab: 'solicitudes',
      permissions: [
        { id: 1, requester: 'Carlos García', visitor: 'Elena Cruz', permissionDate: '02/03/2023', startTime: '15:30:00', endTime: '15:30:00', permissionType: 'Entrada única', resolved: true },
        { id: 2, requester: 'Carlos García', visitor: 'Elena Cruz', permissionDate: '02/03/2023', startTime: '15:30:00', endTime: '15:30:00', permissionType: 'Entrada única', resolved: false },
        // Agrega más permisos según sea necesario
      ],
    };
  },
  computed: {
    filteredPermissions() {
      return this.permissions.filter(permission => 
        permission.visitor.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    sortPermissions(order) {
      this.permissions.sort((a, b) => {
        return order === 'newest' ? new Date(b.permissionDate) - new Date(a.permissionDate) : new Date(a.permissionDate) - new Date(b.permissionDate);
      });
      this.dropdownVisible = false;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped>
.permissions-table-container {
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

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #4a4a4a;
  border-bottom: 2px solid transparent;
}

.tabs button.active {
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
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

.permissions-table {
  width: 100%;
  border-collapse: collapse;
}

.permissions-table th,
.permissions-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.permissions-table th {
  background-color: #f9f9f9;
}

.resolve-button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  padding-right: 12px; 
}

.resolve-button.accept {
  color: green;
}

.resolve-button.deny {
  color: red;
}
</style>

