<template>
    <div>
        <h1>Computed & Deep/Shallow Watch Test</h1>
        <p>
            {{list}}
            <button @click="pushList">pushList</button>
            <button @click="popList">removeList</button>
            <button @click="getCount">getCount</button>
        </p>
        <p>
            {{user}}
            <button @click="changeName">changeName</button>
        </p>
        <router-link :to="{name:'nested2', params:{a:'aaa', b:222}}">Go Nested2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Computed',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            list: [1, 2, 3],
            user: {
                memberNo: 123,
                name: '이동주',
                age: 30
            }
        };
    },
    computed: {
        count() {
            return this.list.length;
        }
    },
    watch: {
        list() {
            console.info('list watch');
            this.for();
            this.forIn();
            this.forOf();
        },
        user: {
            handler() {
                console.info('user deep watch');
            },
            deep: true
        },
        'user.name'() {
            console.info('user shallow watch');
        }
    },
    methods: {
        pushList() {
            this.list.push(1);
        },
        popList() {
            this.list.pop();
        },
        getCount() {
            alert(this.count);
        },
        changeName() {
            this.user.name = '이동주2';
        },
        for(list = this.list || []) {
            // list가 배열이 아닐경우 length 를 가져오지 못해 에러발생
            for (let i = 0; i < list.length; i++) {
                console.log(`for : ${list[i]}`);
            }
        },
        forIn(list = this.list || []) {
            for (const key in list) {
                console.log(`for in : ${list[key]}`);
            }
        },
        forOf(list = this.list || []) {
            // list가 interable 이 아닐경우 에러발생
            for (const item of list) {
                console.log(`for of : ${item}`);
            }
        }
    },
    created() {
        console.log(this);

        this.for();
        this.forIn();
        this.forOf();
    }
};
</script>