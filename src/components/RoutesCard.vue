<template>
    <v-card class="mx-auto routes-card" max-width="400">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>

        <v-card-title class="route">Route {{}}</v-card-title>
        <div class="card-info">
            <v-card-text class="text--primary">
                <ul>
                    <li>Distance: {{}} km</li>
                    <li>Time: {{}}</li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <v-btn large class="btn-start" text>
                    Start
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.routes-card {
    margin: 50px 10px 50px 10px;
    width: 100vw;
    border: 3px solid $blue;
    .route {
        font-family: $heading-font;
        color: $blue;
    }
    .card-info {
        display: flex;
        font-family: $body-font;
    }
    .text--primary li {
        list-style: none;
        font-family: $body-font;
    }
    .theme--light.v-btn {
        background-color: $orange;
        color: white;
        font-family: $heading-font;
    }
}
</style>

<script>
export default {
    name: 'routesCard'
};
</script>
