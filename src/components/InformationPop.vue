<template>
    <div class="information-pop">
        <!-- <article v-for="house in houses" v-bind:key="house.id">
            {{ house.description }}
            {{ house.title }}
            {{ house.id }}
        </article> -->
        <div class="titlbkg">
            <v-icon class="close" @click="closeInfoPop">mdi-close</v-icon>
            <h2 class="titleHouse">{{ filteredHouse.title }}</h2>
        </div>
        <div class="textHouse">{{ filteredHouse.description }}</div>
        <router-link to="/tasks" class="decoration d-flex justify-center">
            <v-btn large class="btnQuiz center">
                Take a quiz
            </v-btn>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.information-pop {
    position: fixed;
    z-index: 5;
    background-color: white;
    height: 100%;
    width: 100vw;

    .close {
        color: white;
        position: fixed;
        right: 0;
        padding: 5px 5px 0;
    }
    .titlbkg {
        background-color: $blue;
    }
    .titleHouse {
        padding: 20px 20px 20px 20px;
        color: white;
        text-align: center;
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
            houseId: ''
        };
    },
    computed: {
        filteredHouse() {
            return this.houses.find(h => h.id === this.$attrs.houseId);
        }
    },
    methods: {
        closeInfoPop() {
            this.$emit('close-clicked', '');
        }
    }
};
</script>
