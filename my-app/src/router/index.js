import { createRouter, createWebHistory } from 'vue-router'
import QRView from '/src/views/QRView.vue'
import MyHomeView from '/src/views/MyHomeView.vue'
import EntryView from '/src/views/EntryView.vue'
import PermissionView from '/src/views/PermissionView.vue'
import AdminView from '/src/views/AdminView.vue'
import GraphView from '/src/views/GraphView.vue'
import AdminHouseView from '/src/views/AdminHouseView.vue'
import AdminScanerView from '/src/views/AdminScanerView.vue'
import AdminVigilantView from '/src/views/AdminVigilantView.vue'
import AdminHouseDetailView from '@/views/AdminHouseDetailView.vue'

const routes = [
  { path: '/', component: QRView },
  { path: '/myHomeView', component: MyHomeView },
  { path: '/entryView', component: EntryView },
  { path: '/permissionView', component: PermissionView },
  { path: '/adminView', component: AdminView },
  { path: '/graphView', component: GraphView },
  { path: '/adminHouseView', component: AdminHouseView },
  { path: '/adminScanerView', component: AdminScanerView },
  { path: '/adminVigilantView', component: AdminVigilantView },
  { path: '/adminHouseDetailView', component: AdminHouseDetailView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;