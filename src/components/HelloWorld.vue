<template>
    <div class="hello">
        <h1 class="h1">{{msg}}</h1>
        <menu>
            <router-link :to="{name:'computed'}">Computed</router-link>
            <router-link :to="{name:'contacts'}">Contacts</router-link>
            <router-link :to="{name:'transition'}">Transition</router-link>
        </menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data: () => ({
        msg: 'Welcome to Your Vue.js App'
    }),
    name: 'HelloWorld'
};
</script>
