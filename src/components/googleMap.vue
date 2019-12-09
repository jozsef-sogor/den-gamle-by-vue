<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="12"
            :houseId="1"
            style="width:100%;  height: 100vh;"
        >
            <gmap-marker
                :key="index"
                v-for="(m, index) in houses"
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
export default {
    name: 'googleMap',
    components: {},
    data() {
        return {
            houses: this.$root.houses,
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currentPlace: null
        };
    },

    mounted() {
        this.geolocate();
    },

    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        },
        putData(description, title, id) {
            this.$emit('pin-clicked', id);
            console.log(description + title + id);
        }
    }
};
</script>
