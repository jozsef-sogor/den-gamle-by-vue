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
    </div>
</template>

<style scoped lang="scss">
.progress {
    margin-left: 10px;
    margin-right: 10px;
}
.orange-color {
    color: $orange;
    position: absolute;
    top: 15px;
    left: 15px;
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
