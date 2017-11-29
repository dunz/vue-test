import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Computed from '@/components/Computed';
import Nested2 from '@/components/Nested2';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: {
                name: 'nested2',
                params: {
                    a: 'initRouteString',
                    b: '123'
                }
            }
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld,
            children: [
                {
                    path: 'computed',
                    name: 'computed',
                    component: Computed,
                    children: [
                        {
                            path: 'nested2/:a/:b',
                            name: 'nested2',
                            component: Nested2,
                            props: route => ({
                                routeString: route.params.a,
                                routeNumber: Number(route.params.b)
                            })
                        }
                    ]
                }
            ]
        }
    
    ]
});
