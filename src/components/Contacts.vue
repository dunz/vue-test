<template>
    <div>
        <ul>
            <li v-for="(contact, index) in Contacts" :key="index">
                <router-link :to="{name:'contact', params:{no:contact.no}}">{{contact.name}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
import {contacts} from '../common/mock';

export default {
    name: 'Contacts',
    data: vm => ({
        Contacts: []
    }),
    methods: {
        getContacts() {
            setTimeout(() => {
                this.Contacts = contacts;
            }, 1000);
        }
    },
    created() {
        this.getContacts();
    }
};
</script>