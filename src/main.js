import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faEye, 
  faEyeSlash, 
  faCalendarDays, 
  faCloudArrowUp, 
  faXmark, 
  faUser, 
  faBars, 
  faSignOutAlt, 
  faChevronDown, 
  faChevronLeft, 
  faChevronRight, 
  faUsers, 
  faThLarge, 
  faCog, 
  faFileAlt, 
  faChartBar,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { 
  faPenToSquare 
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faEye, 
  faEyeSlash, 
  faCalendarDays, 
  faCloudArrowUp, 
  faXmark, 
  faUser, 
  faBars, 
  faPenToSquare, 
  faSignOutAlt, 
  faChevronDown, 
  faChevronLeft, 
  faChevronRight, 
  faUsers, 
  faThLarge, 
  faCog, 
  faFileAlt, 
  faChartBar,
  faTrash
)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 5,
  newestOnTop: true,
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
})

app.mount('#app')

