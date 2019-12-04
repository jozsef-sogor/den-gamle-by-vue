<template>
    <div class="welcome">
        <h1>Den Gamle By</h1>
        <div>
            <v-carousel :show-arrows="false">
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src:
                        'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]
        };
    }
};
</script>
