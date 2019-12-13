<template>
    <div id="app">
        <transition name="slide">
            <information-pop
                :houseId="childData"
                v-if="childData"
                @close-clicked="closePopUp"
            />
        </transition>
        <google-map @pin-clicked="openPopUp" @positionMatch="openPopUp" />
    </div>
</template>

<style lang="scss">
.slide-enter-active {
    -webkit-animation: slide-in-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: slide-in-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-leave-active {
    -webkit-animation: slide-in-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        reverse both;
    animation: slide-in-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
        both;
}

@-webkit-keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
@keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
</style>

<script>
import googleMap from '../components/googleMap';
import InformationPop from '../components/InformationPop';

export default {
    name: 'App',
    components: {
        googleMap,
        InformationPop
    },
    data: function() {
        return {
            childData: ''
        };
    },
    methods: {
        openPopUp(id) {
            console.log(id);
            this.childData = id;
        },
        closePopUp() {
            this.childData = '';
        }
    }
};
</script>
