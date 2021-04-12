import Home from './components/Home.vue';
import QrCode from './components/QrCode.vue';
import StepX from './components/StepX.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/qrcode', component: QrCode, name: 'qrcode' },
    { path: '/stepx', component: StepX, name: 'stepx'  },
];

export default routes;