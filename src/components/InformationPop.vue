<template>
    <div class="information-pop">
        <!-- <article v-for="house in houses" v-bind:key="house.id">
            {{ house.description }}
            {{ house.title }}
            {{ house.id }}
        </article> -->
        <template v-if="filteredHouse" v-on:pin-clicked="test" ref="infopop">
            <div class="titlbkg">
                <router-link to="/map" class="decoration">
                    <v-icon class="close">mdi-close</v-icon>
                </router-link>
                <h2 class="titleHouse">{{ filteredHouse.title }}</h2>
            </div>
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
    .close {
        color: white;
        position: absolute;
        top: 5px;
        left: 275px;
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
        test() {
            console.log('click caugth on inforpop');
        }
    }
};
</script>
