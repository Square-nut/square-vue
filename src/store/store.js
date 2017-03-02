import Vuex from 'vuex';
import Vue from 'vue';
import 
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		user:{
			'name':'',
			'age':0,
			'nickName':'111'
		},
		login: false,
		currentTime:0,
		talkList: []
	},
	getters:{
		user: state => state.user,
		currtenTime: state => state.currentTime,
		talkList: state => state.talkList
	},
	mutactions:{
		login(state){
			state.login = true
		}
	},
	actions:{
		loginUser(user,pwd){
			$.ajax({
				url:'',
				post:JSON.stringfy({user:user,pwd:pwd}),
				success:function(res){
					if(res.state=="200"){
						commit('login',true);
					}else{
						
					}
				},
				error:function(e){
					
				}
			})
		}
	}
});

