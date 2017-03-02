import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login_main from 'views/Login-main';
import Login from 'components/Login';
import Register from 'components/Register';
import recharge from 'views/recharge-main'

import Nav from 'components/Nav'
import Home from 'views/Home'

import VirtualQQ from 'components/virtualQQ_nav'
import QQ_setting from 'views/virtualQQ/setting'
import QQ_home from 'views/virtualQQ/talkList'
import QQ_talk from 'views/virtualQQ/talking'
import QQ_contacts from 'views/virtualQQ/contacts'
import QQ_active from 'views/virtualQQ/active'
import Recharge from 'views/recharge-main.vue'
import Myself from 'views/Myself'

const Foo = { template: '<div>foo</div>' }

const router = new VueRouter({
	routes:[
		{
			path:"/",
			component:Login_main
			,
			children:[
				{path:'login',component:Login},
				{path:'register',component:Register}
			]
		},{
			path:'home',
			component:Nav,
			children:[
				{path:'main',name:'main',component: Home},
				{
					path:'qq',
					name:'qq',
					component: VirtualQQ,
					children:[
						{path:'setting',name:'setting',component: QQ_setting},
						{path:'talk',name:'talk',component: QQ_talk},
						{path:'contacts',name:'contacts',component: QQ_contacts},
						{path:'active',name:'active',component: QQ_active}
					]
				},
				{path:'recharge',name:'recharge',component: Recharge},
				{path:'self',name:'self',component: Myself}
			]
		}

	]
});

export default router
