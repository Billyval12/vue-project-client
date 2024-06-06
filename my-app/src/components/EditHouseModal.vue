<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Modificar parámetros de casa</h2>
      <form @submit.prevent="confirmEdit">
        <div class="form-group">
          <label for="residentsAllowed">Residentes permitidos:</label>
          <select id="residentsAllowed" v-model="residentsAllowed">
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="residentInCharge">Residente encargado:</label>
          <select id="residentInCharge" v-model="residentInCharge">
            <option v-for="resident in residents" :key="resident" :value="resident">{{ resident }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="qrValidity">Validez de los QR:</label>
          <select id="qrValidity" v-model="qrValidity">
            <option value="5 min">5 min</option>
            <option value="10 min">10 min</option>
            <option value="15 min">15 min</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit">Confirmar</button>
        </div>
      </form>
      <p class="note">Nota: Para designar un nuevo residente encargado, el mismo debe encontrarse registrado en el hogar.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditHouseModal',
  props: {
    show: Boolean,
    houseData: Object
  },
  data() {
    return {
      residentsAllowed: this.houseData.residentsAllowed || 6,
      residentInCharge: this.houseData.residentInCharge || '',
      qrValidity: this.houseData.qrValidity || '10 min',
      residents: ['John Doe', 'Carlos García', 'Ricardo Sibrian'] // Ejemplo de residentes
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmEdit() {
      const updatedData = {
        residentsAllowed: this.residentsAllowed,
        residentInCharge: this.residentInCharge,
        qrValidity: this.qrValidity
      };
      this.$emit('confirm', updatedData);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

select, input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #4b80e2;
}

.note {
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--title-color);
}
</style>
