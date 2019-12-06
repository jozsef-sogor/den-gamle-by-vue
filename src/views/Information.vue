<template>
    <div class="information">
        <h1>Information</h1>
        <v-row class="icons" justify="space-around">
            <v-icon x-large>mdi-human-male-female</v-icon>

            <v-icon x-large>mdi-silverware-fork-knife</v-icon>

            <v-icon x-large>mdi-home</v-icon>
        </v-row>
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
.information {
    .icons {
        padding-top: 20px;
    }

    .expansion-panel {
        padding-top: 80px;
    }
}

.mdi-silverware-fork-knife::before {
    color: $orange;
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
</style>

<script>
export default {};
</script>
