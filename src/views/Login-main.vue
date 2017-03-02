<template>
	<div class="bg">
		<div class="loginContainer">
			<nav>
				<a @click="routePage(n.id,index)" :class="{current:isLogin}" class="bar">登陆</a>
				<!--<router-link></router-link>-->
				<a @click="routePage(n.id,index)" :class="{current:!isLogin}" class="bar">注册</a>
			</nav>
			
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isLogin:false,
				setCurrentIndex:0
			}
		},
		watch:{
			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
			'$route' (to, from) {
				this.setCurrentIndex(to);
			}
		},
		methods:{
			routePage(){
				
			}
		}
	}
</script>
<style scoped>
	.bg{
		width: 100%;
		height: 100%;
		
	}
	.loginContainer{
		width: 50rem;
		height: 50rem;
	}
	.bar{
		color: #C9E6F2;
		border: 1px solid;
	}
</style>
