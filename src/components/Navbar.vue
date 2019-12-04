<template>
    <nav class="navbar">
        <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <router-link to="/information">Information</router-link>
                </li>
                <li><router-link to="/map">Map</router-link></li>
                <li><router-link to="/tasks">Tasks</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

export default {
    name: 'navbar'
};
</script>
