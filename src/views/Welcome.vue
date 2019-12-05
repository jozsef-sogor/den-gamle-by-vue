<template>
    <div class="welcome">
        <h1>Den Gamle By</h1>
        <div>
            <template>
                <v-card elevation="24" max-width="400" class="mx-auto">
                    <v-carousel
                        :show-arrows="false"
                        hide-delimiter-background
                        light
                    >
                        <v-carousel-item
                            v-for="(item, i) in items"
                            :key="i"
                            :src="item.src"
                        >
                            <v-sheet height="100%">
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
                                    <v-img class="img" :src="item.src"></v-img>
                                    <v-row>
                                        <div class="text">
                                            {{ item.txt }}
                                        </div>
                                    </v-row>
                                    <v-row
                                        class="btn-container"
                                        align="center"
                                        v-model="btnActive"
                                    >
                                        <div class="btn-intro">
                                            <v-btn large>START</v-btn>
                                        </div>
                                    </v-row>
                                </v-col>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
                <v-row class="btn-container" align="center">
                    <div class="btn-intro">
                        <v-btn large>SKIP</v-btn>
                    </div>
                </v-row>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.welcome {
    background-image: url('https://i.redd.it/tolt40rquh011.jpg');
    background-size: cover;
    .mx-auto {
        color: white;
        border: 3px solid $blue;
        border-radius: 15px;
        margin: 30px 30px 30px 30px;
    }
    .heading {
        margin-top: 20px;
        margin-bottom: 30px;
        font-family: $heading-font;
        font-size: 50px;
        color: $blue;
    }
    .text {
        font-family: $body-font;
        font-size: 16px;
        margin: 30px 30px 20px 30px;
        text-align: center;
    }
    .img {
        border-radius: 50%;
        border: 3px solid $blue;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: 150px;
    }
    .btn-container {
        display: flex;
        justify-content: space-around;
    }
    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: $orange;
        color: white;
        font-family: $heading-font;
    }
}
</style>

<script>
export default {
    data() {
        return {
            btnActive: true,
            items: [
                {
                    txt:
                        'Set your preferences and create a personalised route, that you can follow while our visit to Den Gamle By.',
                    src: 'https://i.redd.it/tolt40rquh011.jpg'
                },
                {
                    txt:
                        'Choose the route that better fits you and start your visit to the past.',

                    src: 'https://i.redd.it/tolt40rquh011.jpg'
                },
                {
                    txt:
                        'Complete the tasks that will appear in the different attractions and if you answer right, a reward will wait for you.',
                    src: 'https://i.redd.it/tolt40rquh011.jpg'
                }
            ]
        };
    }
};
</script>
