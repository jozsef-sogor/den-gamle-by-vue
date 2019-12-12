<template>
    <div class="routes">
        <h1>Routes</h1>
        <routesCard
            v-for="route of filteredRoutes"
            :key="route.id"
            :route="route"
        />
    </div>
</template>

<style scoped lang="scss">
.routes {
    padding: 0 16px;
}
</style>

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
    mounted: function() {
        console.log(
            'Imported routes:',
            this.routes,
            'Filtered routes:',
            this.filteredRoutes
        );
        console.log(this.routes.centuries);
    },
    computed: {
        filteredRoutes() {
            return this.routes.filter(
                r =>
                    r.time <= this.$root.availableTime &&
                    r.children === this.$root.children &&
                    JSON.stringify(r.centuries) ==
                        JSON.stringify(this.$root.selectedCenturies)
            );
        }
    }
};
</script>
