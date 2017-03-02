<template>
	<div id="">
		<StatusBar :stepState='sS' v-show='sbar'/>
		<reChargeStep @changeStep='changeStep' @openMask='maskState' />
		<Masks :open='isMask' />
	</div>
	
</template>
<script>
	import statusBar from 'src/components/recharge-statusBar';
	import reChargeStep from 'src/components/recharge-step';
	import Mask from 'src/components/Mask';
	export default ({
		data(){
			return {
				isMask:false,
				sS:'1',
				sbar:true
			}
		},
		components:{
			'StatusBar':{
				...statusBar
			}
			,
			'reChargeStep':{
				...reChargeStep
			}
			,
			'Masks':{
				...Mask
			}
		},
		methods:{
			changeStep(e){
				if(e=='2'){
					this.sS='2';
				}
				if(e=="3"){
					this.sS='3';
					this.sbar=false;
				}
			},
			maskState(e){
				if(e){
					this.isMask=true;
				}else{
					this.isMask=false;
				}
			}
		}
	});
</script>