<template>
    <div class="information-pop">
        <!-- <article v-for="house in houses" v-bind:key="house.id">
            {{ house.description }}
            {{ house.title }}
            {{ house.id }}
        </article> -->
        <template v-if="filteredHouse">
            <h2 class="titleHouse">{{ filteredHouse.title }}</h2>
            <div class="textHouse">{{ filteredHouse.description }}</div>
            <router-link to="/tasks" class="decoration">
                <v-btn block class="btnQuiz">
                    Take a quiz
                </v-btn>
            </router-link>
        </template>
    </div>
</template>

<style scoped lang="scss">
.information-pop {
    position: absolute;
    z-index: 5;
    background-color: white;
    height: 100vh;
    width: 100vw;
    .titleHouse {
        padding: 40px 20px 20px 20px;
        color: white;
        text-align: center;
        background-color: $blue;
    }
    .textHouse {
        font-family: $body-font;
        font-size: 16px;
        margin: 30px 30px 40px 30px;
        text-align: justify;
    }
    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: $orange;
        color: white;
        font-family: $heading-font;
    }
    .decoration {
        text-decoration: none;
    }
}
</style>

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
