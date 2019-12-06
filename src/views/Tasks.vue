<template>
    <div class="tasks">
        <v-icon x-large class="orange-color">mdi-arrow-left-circle</v-icon>
        <h1>Tasks</h1>
        <div class="progress">
            <v-progress-linear
                v-model="knowledge"
                height="20"
                reactive
                color="#e58c4f"
                track-color="#e58c4f75"
            >
                <h3>{{ Math.ceil(knowledge) }}/{{ done }}</h3>
            </v-progress-linear>
        </div>
        <div class="expansion-panel">
            <v-expansion-panels class="mb-6">
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        1864 zone
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Backery
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        1927 zone
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Restaurant
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        1974 zone
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Bar
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<style scoped lang="scss">
.progress {
    margin-left: 10px;
    margin-top: 20px;
    margin-right: 10px;
}
.orange-color {
    color: $orange;
    position: absolute;
    top: 35px;
    left: 10px;
}
</style>

<script>
export default {
    data() {
        return {
            knowledge: 25,
            done: 10
        };
    }
};
</script>
