<template>
    <div>
        <h2>Nested2 width routes props</h2>
        <ul>
            <li><h3>routeString: {{routeString}}</h3></li>
            <li><h3>routeNumber: {{routeNumber}}</h3></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nested2',
    props: {
        routeString: {
            type: String
        },
        routeNumber: {
            type: Number
        }
    }
};
</script>