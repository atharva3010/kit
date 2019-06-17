import Home from './components/Home.vue'
import Admission from './components/Admission.vue'

export default[
  {
    path:'/',
    component: Home
  },
  {
    path:'/admission/:id',
    component: Admission
  }
]