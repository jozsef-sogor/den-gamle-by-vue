<template>
    <div class="information-pop">
        <!-- <article v-for="house in houses" v-bind:key="house.id">
            {{ house.description }}
            {{ house.title }}
            {{ house.id }}
        </article> -->
        <template v-if="filteredHouse">
            {{ filteredHouse.description }}
        </template>
    </div>
</template>

<style scoped lang="scss"></style>

<script>
export default {
    data() {
        return {
            houses: this.$root.houses,
            houseId: '17kmMc24VIjPIFLbXM0s'
        };
    },
    computed: {
        filteredHouse() {
            return this.houses.find(h => h.id === this.houseId);
        }
    }
};
</script>
