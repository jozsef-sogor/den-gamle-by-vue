<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="18"
            :options="{ disableDefaultUI: true, gestureHandling: 'greedy' }"
            style="width:100%;"
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
            center: { lat: 56.15956, lng: 10.190563 },
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
            for (let filteredHouse of filteredHouses) {
                //console.log(this.userLocation, filteredHouse);
                if (
                    Number(this.userLocation.lng).toFixed(5) ==
                        Number(filteredHouse.lng).toFixed(5) &&
                    Number(this.userLocation.lat).toFixed(5) ==
                        Number(filteredHouse.lat).toFixed(5)
                ) {
                    console.log(filteredHouse.id);
                    this.$emit('positionMatch', filteredHouse.id);
                }
            }
            return filteredHouses;
        }
    },

    mounted() {
        this.geolocate();

        //this function would prevent the app to display pieces of the map
        //outside of Den Gamle By so the user can use it only there plus
        //they can't get lost

        //this.$refs.gmap.$mapObject.fitBounds(boundaries of DGB);
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
                console.log(this.routeLng);

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
