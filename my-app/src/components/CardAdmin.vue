<template>
<div class="card-admin">
    <img :src="src" class="card-img" alt="...">
    <h5 class="card-title">{{msg}}</h5>
</div>
</template>
  
<script>
  export default {
    name: 'CardAdmin',
    props:['src', 'msg']
  };
</script>
  
<style scoped>
.card-admin {
  width: 300px;
  height: 300px;
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
}
img{
  width: 100px;
  height: 100px;
}
h5{
  color: var(--title-color);
  font-family: var(--primary-font);
  font-size: var(--title-size2);
}
</style>
  
      