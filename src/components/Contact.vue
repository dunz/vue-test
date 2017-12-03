<template>
    <section class="contact-wrap">
        <section class="dimmed"></section>
        <section class="contents">
            <h1>상세페이지</h1>
            <dl>
                <dt>컨텐츠</dt>
                <dd>no: {{contact.no}}</dd>
                <dd>name: {{contact.name}}</dd>
            </dl>
            <button @click="clickGoList">목록보기</button>
        </section>
    </section>
</template>

<script>
import {find} from 'lodash';
import {contacts} from '../common/mock';

export default {
    name: 'Contact',
    data: vm => ({
        contact: {}
    }),
    props: {
        no: {
            type: Number,
            required: true
        }
    },
    methods: {
        getContent() {
            this.contact = find(contacts, item => item.no === this.no);
        },
        clickGoList() {
            this.$router.push({name: 'contacts'});
        }
    },
    watch: {
        no(value) {
            this.getContent();
        }
    },
    created() {
        this.getContent();
    }
};
</script>

<style scoped>
    .contact-wrap {

    }

    .dimmed {
        position: relative;
        width: 100%;
        height: 100%;
        background: #2c3e50;
        border: 3px solid red;
    }

    .contents {
        position: absolute;
        border: 3px solid black;
        bottom: 30%;
        left: 10%;
        right: 10%;
        background: #fff;
    }
</style>