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
                            v-model="slider"
                            thumb-label="always"
                            :thumb-size="40"
                            :value="[0, 1]"
                            min="1"
                            max="6"
                            color="#e58c4f"
                            track-color="#e58c4f75"
                        ></v-slider>
                        <p class="hour">6h</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="container-border">
            <h3>
                Which one do you prefer?
            </h3>
            <v-item-group multiple>
                <v-row>
                    <v-col
                        v-for="item in items"
                        :key="item"
                        cols="6"
                        md="1"
                        class="d-flex align-center flex-row"
                    >
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                                :color="active ? 'primary' : ''"
                                class="flex-grow-1 text-center img-bck"
                                height="100px"
                                width="100px"
                                @click="toggle"
                            >
                                <v-img
                                    :src="`${item.img}`"
                                    class="img-bck"
                                ></v-img>
                                <div class="title-centered">
                                    {{ item.title }}
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>

        <v-container class="container-border">
            <v-col cols="12">
                <h3>Who are you visiting with?</h3>

                <v-checkbox
                    v-model="Iamalone"
                    class="mx-2 black--text"
                    label="I am alone"
                ></v-checkbox>
                <v-checkbox
                    v-model="Partner"
                    class="mx-2 black--text"
                    label="Partner"
                ></v-checkbox>
                <v-checkbox
                    v-model="Children"
                    class="mx-2 black--text"
                    label="Children"
                ></v-checkbox>
            </v-col>
        </v-container>
        <router-link to="/map">
            <v-row class="btn-container" align="center">
                <div class="btn-intro">
                    <v-btn large>CONTINUE</v-btn>
                </div>
            </v-row>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.preferences {
    margin-left: auto;
    margin-right: auto;
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
        Iamalone: false,
        Partner: false,
        Children: false,
        slider: 1,
        items: [
            {
                title: 'Early centuries',
                img:
                    'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
            },
            {
                title: 'Modern centuries',
                img:
                    'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
            }
        ]
    })
};
</script>
