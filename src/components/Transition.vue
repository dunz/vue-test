<template>
    <div>
        <button @click="toggleVisible">보여주기토글</button>
        <span v-if="visible">하하하하하</span>
        <!--<transition name="fade">-->
        <!--<span v-if="visible">하하하하하</span>-->
        <!--</transition>-->
    </div>
</template>

<script>
export default {
    name: 'Transition',
    data: () => ({
        visible: false
    }),
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style>
    /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s*/
    /*}*/

    /*.fade-enter, .fade-leave-to {*/
    /*opacity: 0*/
    /*}*/
</style>