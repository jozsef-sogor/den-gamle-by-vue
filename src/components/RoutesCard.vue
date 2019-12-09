<template>
    <v-card class="mx-auto routes-card" max-width="400">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>

        <v-card-title>Top 10 Australian beaches</v-card-title>
        <div class="card-info">
            <v-card-text class="text--primary">
                <ul>
                    <li>Distance: xxx</li>
                    <li>Time: yyyy</li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <router-link to="/map">
                    <v-btn large class="btn-start" text>
                        Start
                    </v-btn>
                </router-link>
            </v-card-actions>
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.routes-card {
    margin: auto;

    .card-info {
        display: flex;
    }
}
</style>

<script>
export default {
    name: 'routesCard'
};
</script>
