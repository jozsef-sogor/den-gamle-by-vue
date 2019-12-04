<template>
    <nav class="navbar">
        <v-bottom-navigation v-model="bottomNav">
            <v-btn value="recent">
                <router-link to="/information">Information</router-link>
                <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn value="favorites">
                <router-link to="/map">Map</router-link>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn value="nearby">
                <router-link to="/tasks">Tasks</router-link>
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </nav>
</template>

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
