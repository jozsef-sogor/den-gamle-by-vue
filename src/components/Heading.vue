<template>
    <div class="heading">
        <h1>Test</h1>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heading {
    h1 {
        color: $blue;
        font-size: 4rem;
        font-family: $heading-font;
        margin: 0;
        text-align: center;
    }
}
</style>

<script>
export default {
    name: 'heading'
};
</script>
