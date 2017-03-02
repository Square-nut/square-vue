<template>
	<div>
		<form method="post">
			<label>用户名</label><input type="text" name="loginUser" v-model="d_user"/>
			<label>密码</label><input type="password" name="loginPwd" v-model="d_pwd"/>
			<div class="codeWrap" v-show="isCode">
				<label>验证码</label><input type="text" name="logeinCode" /><img :src="imgUrl" id="loginCode"/>
			</div>
			<div>
				<input type="submit" value=""/>
				<input type="button" name="sub" id="sub" value="提交" />
				<input type="button" name="sub" id="sub" value="注册" />
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