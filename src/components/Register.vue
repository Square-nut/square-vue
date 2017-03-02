<template>
	<div>
		<form>
			<label>用户名：</label><input type="text" name="userName" v-model="userName"/>
			<label>密码：</label><input type="password" name="userPwd" v-model="userPwd"/>
			<label>确认密码：</label><input type="password" name="rePwd" v-model="rePwd"/>
			<label>邮箱：</label><input type="email" name="userMail" v-model="userMail"/>
			<div>
				<input type="submit" name="sub" id="sub" value="注册" />
				<input type="reset" name="sub" id="sub" value="重置" />
				<input type="button" name="sub" id="sub" value="返回" />
			</div>
		</form>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isCode:false,
				imgUrl:'',
				d_user:"",
				d_pwd:""
			}
		},
		
	}
</script>
<style scoped></style>