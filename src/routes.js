import Home from './components/Home.vue'
import Admission from './components/Admission.vue'
import thankYou from './components/thankYou.vue'
import Contact from './components/Contact.vue'

export default[
  {
    path:'/',
    component: Home
  },
  {
    path:'/admission/:id',
    component: Admission
  },
  {
    path:'/thanks',
    component: thankYou
  },
  {
    path:'/contact',
    component: Contact
  }
]