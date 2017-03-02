<template>
	<div class="masks" v-show='isM'></div>
</template>
<style scoped>
	.masks {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 98;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
<script>
	export default{
		data(){
			return{
				isM:false
			}
		},
		props:['open'],
		watch:{
			open(val, oldVal){
				this.isM = val;
			}
		}
	}
</script>