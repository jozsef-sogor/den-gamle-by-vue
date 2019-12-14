<template>
    <div class="welcome">
        <div class="container">
            <div class="title">
                <h1>Den Gamle By</h1>
            </div>

            <div>
                <template>
                    <v-card elevation="24" max-width="400" class="mx-auto">
                        <v-carousel
                            v-model="activeSlide"
                            :show-arrows="false"
                            hide-delimiter-background
                            light
                        >
                            <v-carousel-item
                                v-for="(item, slideNumber) in items"
                                :key="slideNumber"
                                :src="item.src"
                            >
                                <v-sheet height="100%" class="guide">
                                    <v-col>
                                        <v-row
                                            class="fill-height"
                                            align="center"
                                            justify="center"
                                        >
                                            <div class="heading">
                                                Quick Guide
                                            </div>
                                        </v-row>
                                        <v-img
                                            class="img"
                                            :src="item.src"
                                        ></v-img>
                                        <v-row>
                                            <div class="text">
                                                {{ item.txt }}
                                            </div>
                                        </v-row>
                                        <v-row
                                            class="btn-container d-flex
                                        justify-space-around"
                                        >
                                            <router-link
                                                to="/preferences"
                                                v-if="slideNumber === 0"
                                            >
                                                <v-btn large>
                                                    SKIP
                                                </v-btn>
                                            </router-link>
                                            <v-btn
                                                @click="activeSlide--"
                                                large
                                                v-if="
                                                    slideNumber === 1 ||
                                                        slideNumber === 2
                                                "
                                            >
                                                BACK
                                            </v-btn>
                                            <v-btn
                                                @click="activeSlide++"
                                                large
                                                v-if="
                                                    slideNumber === 0 ||
                                                        slideNumber === 1
                                                "
                                            >
                                                NEXT
                                            </v-btn>
                                            <router-link
                                                to="/preferences"
                                                v-if="slideNumber === 2"
                                            >
                                                <v-btn large>
                                                    START
                                                </v-btn>
                                            </router-link>
                                        </v-row>
                                    </v-col>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.welcome {
    background-image: url('../assets/img/dengamleby.jpg');
    background-size: cover;
    overflow: hidden;
    padding: 10px 16px;
    height: 100vh;
    position: relative;

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .title {
        background-color: $blue;
        background: linear-gradient(0, #001638 0%, #002c70 100%);
        padding: 15px 0;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;

        h1 {
            color: white;
            padding: 0;
        }
    }

    .mx-auto {
        color: white;
        border: 3px solid $blue;
        border-radius: 15px;
        margin: 30px 0 0 0;
    }
    .guide {
        overflow: hidden;
    }
    .heading {
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: $heading-font;
        font-size: 30px;
        color: $blue;
    }
    .text {
        font-family: $body-font;
        font-size: 16px;
        margin: 10px 30px 10px 30px;
        text-align: center;
    }
    .img {
        border-radius: 50%;
        border: 3px solid $blue;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: 100px;
    }
    .btn-container {
        display: flex;
        justify-content: space-around;
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
}

.v-application {
    a {
        text-decoration: none !important;
    }
}

.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 15px;
}

.v-card > *:last-child:not(.v-btn):not(.v-chip) {
    max-height: 420px;
}
</style>

<script>
export default {
    data() {
        return {
            items: [
                {
                    txt:
                        'Set your preferences and create a personalised route, that you can follow while our visit to Den Gamle By.',
                    src: require(`@/assets/img/preferences.jpg`)
                },
                {
                    txt:
                        'Choose the route that better fits you and start your visit to the past.',

                    src: require(`@/assets/img/routes.jpg`)
                },
                {
                    txt:
                        'Complete the tasks that will appear in the different attractions and if you answer right, a reward will wait for you.',
                    src: require(`@/assets/img/task.jpg`)
                }
            ],
            activeSlide: 0
        };
    }
};
</script>
