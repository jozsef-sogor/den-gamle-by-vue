<template>
    <v-bottom-navigation class="bottom-navigation" app fixed>
        <v-btn value="information" to="/information">
            Information
            <v-icon>mdi-information-variant</v-icon>
        </v-btn>
        <v-btn to="/map">
            Map
            <v-icon>mdi-map-outline</v-icon>
        </v-btn>
        <v-btn to="/tasks">
            Tasks
            <v-icon>mdi-format-list-checks</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<style scoped lang="scss">
.bottom-navigation .v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
    min-width: 100px;
}

.theme--light.v-bottom-navigation {
    color: $orange;
}
</style>

<script>
export default {
    name: 'navbar'
};
</script>
