<template>
    <v-bottom-navigation
        class="bottom-navigation"
        v-model="bottomNav"
        app
        fixed
    >
        <v-btn value="recent">
            <span>Information</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
            <span>Map</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
            <span>Tasks</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<style scoped lang="scss">
.bottom-navigation .v-btn:not(.v-btn--round).v-size--default {
    height: inherit;
}
</style>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            bottomNav: 'recent'
        };
    }
};
</script>
