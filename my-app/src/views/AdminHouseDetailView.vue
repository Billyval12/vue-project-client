<template>
  <div class="house-detail">
    <HomeInfoCard :email="homeEmail" />
    <MembersTable 
      :members="members" 
      @remove-member="handleRemoveMember" 
      @show-add-member-modal="showAddMemberModal" 
    />
    <AddMemberModal 
      :visible="isAddMemberModalVisible" 
      @close="hideAddMemberModal" 
      @add-member="handleAddMember" 
    />
  </div>
</template>

<script>
import HomeInfoCard from '../components/HomeInfoCard.vue';
import MembersTable from '../components/MembersTable.vue';
import AddMemberModal from '../components/AddMemberModal.vue';

export default {
  name: 'AdminHouseDetailView',
  components: {
    HomeInfoCard,
    MembersTable,
    AddMemberModal
  },
  data() {
    return {
      homeEmail: 'john.doe@gmail.com',
      members: [
        { name: 'John Doe', email: 'john.doe@gmail.com', role: 'Administrador' },
        { name: 'Ricardo López', email: 'ricardo.lopez@gmail.com', role: 'Normal' },
        { name: 'Fernando Eguizábal', email: 'fernando.eguizabal@gmail.com', role: 'Normal' },
        { name: 'Ricardo Sibirián', email: 'fernando.eguizabal@gmail.com', role: 'Normal' },
        { name: 'Billy Valencia', email: 'fernando.eguizabal@gmail.com', role: 'Normal' }
      ],
      isAddMemberModalVisible: false
    };
  },
  methods: {
    handleRemoveMember(index) {
      this.members.splice(index, 1);
    },
    showAddMemberModal() {
      this.isAddMemberModalVisible = true;
    },
    hideAddMemberModal() {
      this.isAddMemberModalVisible = false;
    },
    handleAddMember(email) {
      const newMember = { name: 'Nuevo Miembro', email: email, role: 'Normal' };
      this.members.push(newMember);
    }
  }
}
</script>

<style scoped>
@import url('../styles.css');

.house-detail {
  padding: 20px;
}
</style>

