<template>
  <div class="main-permission">
    <PermissionsTable></PermissionsTable>
  </div>
</template>

<script>
import PermissionsTable from '@/components/PermissionsTable.vue';

export default {
  name: 'PermissionView',
  components:{
    PermissionsTable
  }
}
</script>

<style scoped>
@import url('../styles.css');

.main-permission{
  padding: 20px;
}
</style>
