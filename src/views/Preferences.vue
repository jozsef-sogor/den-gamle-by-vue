<template>
    <div class="preferences">
        <h1>Preferences</h1>
        <v-container fluid class="container-border">
            <v-row>
                <v-col cols="12">
                    <h3>
                        How much time do you have?
                    </h3>
                    <div class="slider-flex">
                        <p class="hour">1h</p>
                        <v-slider
                            v-model="$root.availableTime"
                            thumb-label="always"
                            :thumb-size="40"
                            :value="1"
                            min="1"
                            max="6"
                            color="#e58c4f"
                            track-color="#e58c4f75"
                        >
                            >
                        </v-slider>
                        <p class="hour">6h</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="container-border">
            <h3>
                Which one do you prefer?
            </h3>
            <v-item-group v-model="$root.selectedCenturies">
                <v-row class="d-flex align-center flex-row">
                    <v-col
                        v-for="century in centuries"
                        :key="century.title"
                        cols="6"
                        md="6"
                    >
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                                :color="active ? 'primary' : ''"
                                class="flex-grow-1 text-center img-bck"
                                @click="toggle"
                            >
                                <v-img
                                    :src="
                                        require(`@/assets/img/${century.img}`)
                                    "
                                    class="img-bck"
                                ></v-img>
                                <div class="title-centered">
                                    {{ century.title }}
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>

        <v-container fluid class="container-border">
            <v-col cols="12">
                <h3>Who are you visiting with?</h3>

                <v-checkbox
                    v-model="$root.iamalone"
                    class="mx-2 black--text"
                    label="I am alone"
                    color="#e58c4f"
                ></v-checkbox>
                <v-checkbox
                    v-model="$root.partner"
                    class="mx-2 black--text"
                    label="Partner"
                    color="#e58c4f"
                ></v-checkbox>
                <v-checkbox
                    v-model="$root.group"
                    class="mx-2 black--text"
                    label="Group"
                    color="#e58c4f"
                ></v-checkbox>
                <v-checkbox
                    v-model="$root.children"
                    class="mx-2 black--text"
                    label="Children"
                    color="#e58c4f"
                ></v-checkbox>
            </v-col>
        </v-container>
        <v-row class="btn-container" align="center">
            <div class="btn-intro">
                <v-btn to="/routes" large>CONTINUE</v-btn>
            </div>
        </v-row>
    </div>
</template>

<style scoped lang="scss">
.preferences {
    padding: 0px 16px;
}

h5 {
    color: black;
}
.v-slider__thumb-label.primary {
    background-color: $orange;
    color: white;
    height: 40px;
    width: 40px;
}

.slider-flex {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    flex-direction: row;
}
.hour {
    margin: 0 5px;
}

.v-label.theme--light {
    color: black;
}
.v-input--selection-controls__ripple {
    border: black;
}
.v-card {
    transition: opacity 0.4s ease-in-out;
    display: grid;
    border: rgba(245, 173, 90, 0.582) solid 3px;
}

.img-bck {
    position: relative;
}

.v-card > *:first-child:not(.v-btn):not(.v-chip),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
    filter: brightness(0.7);
}

.title-centered {
    z-index: 1;
    color: white;
    position: absolute;
    display: grid;
    place-self: center;
}

.v-application {
    .primary {
        background-color: $orange !important;
        border-color: $orange !important;
        filter: drop-shadow(2px 4px 6px black);
    }
    .accent--text {
        color: $orange !important;
        caret-color: $orange !important;
    }
    .container-border {
        margin: 15px 0px;
        border-style: solid;
        border-radius: 15px;
        border-width: 3px;
        border-color: $blue;
        box-shadow: 5px 5px 15px rgba(163, 163, 163, 0.575);
    }
}
.btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: $orange;
    color: white;
    font-family: $heading-font;
}

.show-btns {
    color: rgba(255, 255, 255, 1);
}
</style>

<script>
export default {
    data: () => ({
        centuries: [
            {
                title: 'Early centuries',
                img: 'early-century.jpg'
            },
            {
                title: 'Modern centuries',
                img: 'modern-century.jpg'
            }
        ]
    }),
    mounted() {}
};
</script>
