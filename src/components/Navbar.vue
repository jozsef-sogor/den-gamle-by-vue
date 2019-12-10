<template>
    <v-bottom-navigation
        class="bottom-navigation"
        v-model="bottomNav"
        app
        fixed
    >
        <router-link to="/information">
            <v-btn value="information">
                Information
                <v-icon>mdi-information-variant</v-icon>
            </v-btn>
        </router-link>

        <router-link to="/map">
            <v-btn value="map">
                Map
                <v-icon>mdi-map-outline</v-icon>
            </v-btn>
        </router-link>

        <router-link to="/tasks">
            <v-btn value="tasks">
                Tasks
                <v-icon>mdi-format-list-checks</v-icon>
            </v-btn>
        </router-link>
    </v-bottom-navigation>
</template>

<style scoped lang="scss">
.bottom-navigation .v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
    min-width: 100px;
}

.v-application a {
    text-decoration: none;
    color: $orange;
}
</style>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            bottomNav: window.location.pathname.substring(1)
        };
    }
};
</script>
