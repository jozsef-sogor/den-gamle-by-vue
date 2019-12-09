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
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        <h2>Question 1</h2>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>Question number 1</p>
                        <v-checkbox
                            v-model="Iamalone"
                            class="mx-2 black--text"
                            label="I am alone"
                            color="#e58c4f"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="Partner"
                            class="mx-2 black--text"
                            label="Partner"
                            color="#e58c4f"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="Children"
                            class="mx-2 black--text"
                            label="Children"
                            color="#e58c4f"
                        ></v-checkbox>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tasks {
    padding: 0px 16px;
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
</style>

<script>
export default {
    data() {
        return {
            knowledge: 25,
            done: 10,
            Iamalone: false,
            Partner: false,
            Children: false
        };
    }
};
</script>
