<template>
  <div class="main-entry">
    <EntriesTable></EntriesTable>
  </div>
</template>

<script>
import EntriesTable from '@/components/EntriesTable.vue';

export default {
  name: 'EntryView',
  components:{
    EntriesTable
  }
}
</script>

<style scoped>
@import url('../styles.css');

.main-entry{
  padding: 20px;
}
</style>
