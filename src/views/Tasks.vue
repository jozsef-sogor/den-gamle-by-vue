<template>
    <div class="tasks">
        <router-link to="/map" class="decoration">
            <v-icon x-large class="orange-color">mdi-arrow-left-circle</v-icon>
        </router-link>
        <h1>Tasks</h1>
        <div
            class="progress d-flex justify-space-between flex-row align-center"
        >
            <v-progress-linear
                v-model="knowledge"
                height="20"
                reactive
                color="#e58c4f"
                track-color="#e58c4f75"
            >
                <h3>{{ Math.ceil(knowledge) }}/{{ done }}</h3>
            </v-progress-linear>
            <v-icon x-large color="#e58c4f" class="pl-4">
                mdi-gift-outline
            </v-icon>
        </div>

        <div class="expansion-panel">
            <v-expansion-panels class="mb-6">
                <v-expansion-panel v-for="house of routeHouses" :key="house.id">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        <h2>{{ house.title }}</h2>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>{{ house.task.question }}</p>
                        <v-radio-group class="column">
                            <v-radio
                                color="#e58c4f"
                                v-for="option of house.task.options"
                                :key="option"
                                :label="option"
                                :value="option"
                            ></v-radio>
                        </v-radio-group>
                        <v-row class="btn-container  d-flex justify-center">
                            <v-btn @click="snackbar = true" large>
                                DONE
                            </v-btn>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-snackbar v-model="snackbar" class="snackbar">
                    {{ text }}
                    <v-btn color="pink" text @click="snackbar = false">
                        Close
                    </v-btn>
                </v-snackbar>
            </v-expansion-panels>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tasks {
    padding: 0px 16px;

    p {
        padding-top: 16px;
    }

    .btn-container {
        margin: 5px;
    }
    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: $orange;
        color: white;
        font-family: $heading-font;
    }
    .decoration {
        text-decoration: none;
    }

    .snackbar {
        bottom: 80px;
    }
}
.v-application .accent--text {
    color: $orange !important;
    caret-color: $orange !important;
}
.progress {
    margin: 20px 10px;
}
.v-input--selection-controls {
    margin-top: 0px !important;
    padding-top: 0px !important;
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
    margin-bottom: 0px !important;
}
.v-input__slot {
    margin-bottom: 0px !important;
}
.orange-color {
    color: $orange;
    position: absolute;
    top: 20px;
    left: 10px;
}
.theme--light.v-expansion-panels .v-expansion-panel {
    margin-bottom: 35px;
    border-radius: 10px;
}

.v-application--is-ltr .v-expansion-panel-header {
    border: 3px solid $blue;
    border-radius: 10px;
}

.v-expansion-panel-content__wrap {
    border: 3px solid $blue;
}
.v-expansion-panel {
    border-radius: 10px;
}

.v-expansion-panel--active > .v-expansion-panel-header {
    border-radius: 10px !important;
}
</style>

<script>
export default {
    data() {
        return {
            houses: this.$root.houses,
            knowledge: 25,
            done: 10,
            Iamalone: false,
            snackbar: false,
            text: 'Your answer has been submitted.'
        };
    },
    computed: {
        routeHouses() {
            const houseIds = this.$root.selectedRoute
                ? this.$root.selectedRoute.houses
                : [];

            console.log(houseIds);
            const filteredHouses = this.$root.houses.filter(house =>
                houseIds.some(houseId => {
                    console.log(house.id);
                    return houseId === house.id;
                })
            );
            console.log(filteredHouses);
            return filteredHouses;
        }
    }
};
</script>
