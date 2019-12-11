<template>
    <div class="routes">
        <h1>Routes</h1>
        <routesCard v-for="route of routes" :key="route.id" :route="route" />
    </div>
</template>

<style scoped lang="scss"></style>

<script>
import routesCard from '../components/RoutesCard.vue';

export default {
    components: {
        routesCard
    },
    data() {
        return {
            routes: this.$root.routes
        };
    },
    computed: {
        // filteredRoutes() {
        //     return this.routes.filter(
        //         r =>
        //             r.time <= this.$root.availableTime &&
        //             r.children === this.$root.children &&
        //             r.centuries == this.$root.selectedCenturies
        //     );
        // }
    }
};
</script>
