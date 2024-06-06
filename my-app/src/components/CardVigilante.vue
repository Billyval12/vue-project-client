<template>
  <div class="card-admin">
    <img :src="src" class="card-img" alt="Vigilant Image">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-email">{{email}}</p>
    <button @click="$emit('remove')">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: 'CardAdmin',
  props: ['src', 'name', 'email']
};
</script>

<style scoped>
.card-admin {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px; 
  border: 1px solid transparent; 
  background-color: #ffffff;
  gap: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
  margin-bottom: 20px;
  padding: 20px;
}

.card-img {
  width: 100px;
  height: 100px;
}

.card-title {
  color: var(--title-color);
  font-family: var(--primary-font);
  font-size: var(--title-size2);
}

.card-email {
  font-size: var(--menu-items-size);
  color: var(--title-color);
}

button {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #4b80e2;
}
</style>

  