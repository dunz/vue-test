<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>

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
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
