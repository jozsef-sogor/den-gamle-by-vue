import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
        meta: { hideNavigation: true }
    },
    {
        path: '/preferences',
        name: 'preferences',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "Preferences" */ '../views/Preferences.vue'
            ),
        meta: { hideNavigation: true }
    },
    {
        path: '/routes',
        name: 'routes',
        component: () =>
            import(/* webpackChunkName: "Routes" */ '../views/Routes.vue'),
        meta: { hideNavigation: true }
    },
    {
        path: '/map',
        name: 'map',
        component: () =>
            import(/* webpackChunkName: "Map" */ '../views/Map.vue')
    },
    {
        path: '/information',
        name: 'information',
        component: () =>
            import(
                /* webpackChunkName: "Information" */ '../views/Information.vue'
            )
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: () =>
            import(/* webpackChunkName: "Tasks" */ '../views/Tasks.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
