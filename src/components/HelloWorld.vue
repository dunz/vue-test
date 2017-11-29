<template>
    <div>
        <menu>
            <router-link :to="{name:'computed'}">Computed</router-link>
        </menu>
<router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'HelloWorld'
};
</script>
