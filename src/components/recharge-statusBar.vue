<template>
	<div id="statusBar">
		<div class="step-state">
			<div class="stepLine">
				<div class="line1"></div>
				<div class="line2" v-show="isS2"></div>
			</div>
			<div class="stepCircle">
				<div class="circle1 circle" :class="{'current': isS1}">
					1
				</div>
				<div class="circle2 circle" :class="{'current': isS2}">
					2
				</div>
				<div class="circle3 circle" :class="{'current': isS3}">
					3
				</div>
			</div>
			<div class="stepTip">
				<span class="tip1 tip" :class="{'current': isS3}">
					选择金额
				</span>
				<span class="tip2 tip" :class="{'current': isS3}">
					确认支付方式
				</span>
				<span class="tip3 tip" :class="{'current': isS3}">
					完成
				</span>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				isS1:true,
				isS2:false,
				isS3:false
			}
		},
		props:['stepState'],
		watch:{
			stepState(val, oldVal){
				if(this.stepState == "1"){
					this.isS1 = true;
					this.isS2 = false;
					this.isS3=false;
				}else if(this.stepState == "2"){
					this.isS1 = true;
					this.isS2=true;
					this.isS3=false;
				}else{
					this.isS1 = true;
					this.isS2=true;
					this.isS3=true;
				}
			}
		}
	}
</script>
<style scoped>
	.inbl{
		display: inline-block;
		vertical-align: middle;
	}
	.visibility{
		visibility: hidden;
	}
	.autoFill{
		background: #DDDDDD !important;
	}
	.step-state{
		position: relative;
		width: 40.125rem;
		height: 4.4375rem;/*height: 3.125rem;*/
		margin: auto;
		margin-top: 1.0625rem;
	}
	.step1{
		width: 24.938rem;
		margin: auto;
		margin-top: 2.25rem;	
	}
	.step2{
		width: 24.938rem;
		margin: auto;
		margin-top: 2.8125rem;
	}
	.step3{
		width: 32.125rem;
		margin: auto;
		margin-top: 2.25rem;
	}
	/*line*/
	.stepLine{
		position: relative;
		width: 40.125rem;
		height: .625rem;
		top: 1.25rem;
		background: #eee;
		border-radius: 0.31rem;
	}
	.stepLine .line1{
		position: absolute;
		left: .1875rem;
		top: .25rem;
		z-index: 2;
		width: 8rem;
		height: .125rem;
		background: #fc9943;
	}
	.stepLine .line2{
		position: absolute;
		left: 10.3125rem;
		top: .25rem;
		z-index: 2;
		width: 8.6875rem;
		height: .125rem;
		background: #fc9943;
	}
	/*circle*/
	.stepCircle .circle{
		position: absolute;
		top: 0;
		width: 2.125rem;
		height: 2.125rem;
		text-align: center;
		line-height: 2.125rem;
		font-size: 1.125rem;
		color: #7e7e7e;
		border-radius: 50%;
		border: .5rem solid #eee;
		background: #eee;	
	}
	.stepCircle .circle1{
		left: 7.6875rem;
	}
	.stepCircle .circle2{	
		left: 18.5rem;
	}
	.stepCircle .circle3{
		left: 29.3125rem; 
	}
	.stepCircle .current{
		color:#fff;
		background: #fc9943;
	}
	/*stepTip*/
	.stepTip .tip{
		position: absolute;
		bottom: 0;
		font-size: .8125rem;
		color: #666;
	}
	.stepTip .tip1{
		left: 7.6875rem;
	}
	.stepTip .tip2{	
		left: 17.7rem;	
	}
	.stepTip .tip3{
		/*left: 29.3125rem;*/ 	
		left: 30.013rem;
	}
	.stepTip .current {
		color: #fc9943;
	}
</style>