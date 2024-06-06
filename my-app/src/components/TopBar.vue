<template>
    <div class="topbar">
      <DropdownProfile></DropdownProfile>
      <img src="../assets/google-user.png" class="user-img">
      <div class="user-info">
        <p class="email-info">ricardo.sibrian@gmail.com</p>
        <p class="role-info">Residente encargado</p>
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'TopBar',
  components: {

  }
};
</script>

<style scoped>
@import url('../styles.css');
.topbar {
  width: 84%;
  right: 0;
  position: fixed;
  height: 50px;
  background-color: var(--white-color); 
  text-align: center;
  padding: 4px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}

.user-img{
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

.user-info{
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
}

.user-info .email-info{
  color: var(--title-color);
  font-family: var(--primary-font);
  font-size: var(--menu-items-size);
  font-weight: 600;
}

.user-info .role-info{
  color: var(--title-color);
  font-family: var(--primary-font);
  font-size: 0.7rem;
}
</style>
