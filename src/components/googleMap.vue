<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="12"
            :houseId="1"
            style="width:100%;  height: 100vh;"
        >
            <gmap-marker
                :position="userLocation"
                :icon="{ url: require('../assets/img/custom-icon.gif') }"
            ></gmap-marker>
            <gmap-marker
                :key="index"
                v-for="(m, index) in routeHouses"
                :position="{ lat: m.lat, lng: m.lng }"
                :description="m.description"
                :title="m.title"
                :year="m.year"
                :task="m.task"
                :id="m.id"
                ref="marker"
                @click="putData(m.description, m.title, m.id)"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<style lang="scss">
.vue-map-container {
    z-index: -1;
    position: initial;
}
.information-pop {
    z-index: 999;
    position: fixed;
}
</style>

<script>
import { db } from '../db';

export default {
    name: 'googleMap',
    components: {},
    data() {
        return {
            houses: this.$root.houses,
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: this.$root.center,
            markers: [],
            places: [],
            userLocation: this.$root.userLocation,
            currentPlace: null,
            userPos: this.$root.userPos
        };
    },

    computed: {
        routeHouses() {
            const houseIds = this.$root.selectedRoute
                ? this.$root.selectedRoute.houses
                : [];

            console.log(houseIds);
            const filteredHouses = this.$root.houses.filter(house =>
                houseIds.some(houseId => {
                    console.log(house.id);
                    return houseId === house.id;
                })
            );
            console.log(filteredHouses);
            return filteredHouses;
        }
    },

    mounted() {
        this.geolocate();
    },

    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },

        geolocate: function() {
            navigator.geolocation.watchPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(position);
                this.userLocation.lat = position.coords.latitude;
                this.userLocation.lng = position.coords.longitude;
                db.collection('userPos').add({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    timestamp: Date.now()
                });
                // this.houses.push(this.userLocation);
            });
        },
        putData(description, title, id) {
            this.$emit('pin-clicked', id);
            console.log(description + title + id);
        }
    }
};
</script>
