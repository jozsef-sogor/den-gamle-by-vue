<template>
    <div class="preferences">
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <h5>
                        How much time do you have?
                    </h5>
                    <div class="slider-flex">
                        <p class="hour">1h</p>
                        <v-slider
                            v-model="slider"
                            thumb-label="always"
                            :thumb-size="40"
                            :value="[0, 1]"
                            min="1"
                            max="6"
                        ></v-slider>
                        <p class="hour">6h</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-col cols="12">
            <h5>Who are you visiting with?</h5>

            <v-checkbox
                v-model="Iamalone"
                class="mx-2"
                label="I am alone"
            ></v-checkbox>
            <v-checkbox
                v-model="Partner"
                class="mx-2"
                label="Partner"
            ></v-checkbox>
            <v-checkbox
                v-model="Children"
                class="mx-2"
                label="Children"
            ></v-checkbox>
        </v-col>
    </div>
</template>

<style lang="scss">
h5 {
    color: black;
}
.v-slider__thumb-label.primary {
    background-color: $orange;
    color: white;
    height: 40px;
    width: 40px;
}
.v-slider__thumb.primary {
    color: $orange;
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
</style>

<script>
export default {
    data: () => ({
        Iamalone: false,
        Partner: false,
        Children: false
    })
};
</script>
