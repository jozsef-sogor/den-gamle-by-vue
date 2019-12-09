<template>
    <div class="information-pop">
        <!-- <article v-for="house in houses" v-bind:key="house.id">
            {{ house.description }}
            {{ house.title }}
            {{ house.id }}
        </article> -->
        <template v-if="filteredHouse" v-on:pin-clicked="test" ref="infopop">
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
            houseId: ''
        };
    },
    computed: {
        filteredHouse() {
            return this.houses.find(h => h.id === this.$attrs.houseId);
        }
    },
    methods: {
        test() {
            console.log('click caugth on inforpop');
        }
    }
};
</script>
