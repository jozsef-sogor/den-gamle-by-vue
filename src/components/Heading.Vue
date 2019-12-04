<template>
    <div class="heading">
        <h1>Test</h1>
        <a class="waves-effect waves-light btn">button</a>
        <a class="waves-effect waves-light btn"
            ><i class="material-icons left">cloud</i>button</a
        >
        <a class="waves-effect waves-light btn"
            ><i class="material-icons right">cloud</i>button</a
        >
    </div>
</template>

<style lang="scss">
.heading {
    font-size: 2rem;
    border: 1px solid black;

    h1 {
        margin: 0;
    }
}
</style>

<script>
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

export default {
    name: 'head'
};
</script>
