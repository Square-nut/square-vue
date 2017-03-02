<template>
	<div class="recharge-step">
		<div class="step1" v-show="d_isStep1">
			<div class="rechargePanel">
				<div class="moneyName" style="float: left;">
					<label>充值金额:</label>
				</div>
				<div class="moneyBox" style="float: left;">
					<form id="moneyBox_form">
						<div class="" style="font-size: 0;">
							<input type="radio" value="30" id="rechargeMoney1" name="rechargeMoney" v-model="tMoney" @click="click_baseMoney"/>
							<label class="rechargeMoney" for="rechargeMoney1">30<span>元</span></label>
							<input type="radio" value="50" id="rechargeMoney2" name="rechargeMoney" v-model="tMoney" @click="click_baseMoney"/>
							<label class="rechargeMoney" for="rechargeMoney2">50<span>元</span></label>
							<input type="radio" value="100" id="rechargeMoney3" name="rechargeMoney" v-model="tMoney" @click="click_baseMoney" />
							<label class="rechargeMoney" for="rechargeMoney3">100<span>元</span></label>
							<input type="radio" value="300" id="rechargeMoney4" name="rechargeMoney" v-model="tMoney" @click="click_baseMoney" />
							<label class="rechargeMoney" for="rechargeMoney4">300<span>元</span></label>
						</div>
						<div class="" style="margin-top: .625rem;">
							<input type="radio" id="rechargeMoney5" name="rechargeMoney" :checked="isOtherChecked"/>
							<label class="rechargeMoney another" for="rechargeMoney5">
								其他金额：<input type="text" id="anotherMoney" v-model="anotherMoney" @blur="blur_otherMoney"  @focus="focus_otherMoney" />元
							</label>
						</div>
					</form>
				</div>
			</div>
			<div class="totalMoney">
				<label>充值金额:</label>
				<span style="font-size: .875rem;color: #fc9943;">￥</span><span id="tmoney" style="font-size: 1.125rem;color: #fc9943;">{{ tMoney }}</span><span style="font-size:.75rem;color: #fc9943;">元</span>
			</div>
			<div class="nextStep">
				<input type="button" class="generalButton" id="nextStep1" value="下一步" v-on:click="st1ToSt2"/>	
			</div>
		</div>
		<div class="step2" v-show="d_isStep2">
			<div class="totalMoney">
				<label>充值金额:</label><span id="s2tmoney" style="font-size: 1.125rem;color: #fc9943;font-weight: bolder;padding-left: .875rem;">300</span><span style="color: #fc9943;">元</span>
			</div>
			<div class="rechargeType">
				<input class="inbl" type="radio" name="rechargeType" id="rechargeType" checked="checked" value="zfb"/>
				<label class="inbl" for="rechargeType"></label>
			</div>
			<div class="nextStep">
				<input type="button" class="generalButton" id="nextStep2" value="确认支付" v-on:click="st2ToTip"/>	
			</div>
		</div> 
		<div class="tipPanel-941-single" v-show="d_tip" >
			<div class="tip-head-941"><span>支付</span>
				<div class="close-popup">
					<img src="image/popupClose.png"/>
				</div>
			</div>
			<div class="tip-body-941">
				<p class="tip-body-title-941"><span>请在新打开的网银页面进行支付，支付完成前不要关闭窗口</span>
				</p>
				<p class="tip-body-content-941"></p>
			</div>
			<div class="tip-footer-941">
				<input type="button" class="tip-footer-close-941 alreadyButton" id="t9s-finish" value="已完成支付" v-on:click="tipToSt3" />
				<!--<input type="button" class="tip-footer-close-941 errorButton close-popup" id="t9s-error" value="支付遇到问题" />-->
			</div>
		</div>
		<div class="step3"  v-show="d_isStep3">
			<div class="rechargeTip">
				<img class="inbl" src="../assets/right-green.png" />
				<span class="inbl">恭喜您，支付成功！</span>
			</div>
			<div class="rechargeCode">
				订单编号：<span id="orderCode">{{ orderCode }}</span>
			</div>
			<div class="rechargeBill">
				<div class="pharmacyName">
					<p><span id="rechargeBill_pname">{{ pharmacy }}</span>，已成功充值<span id="rechargeBill_rechargeMoney">{{ successMoney }}</span>元。</p>
				</div>
				<div class="pharmacyMoney">
					支付金额:<span id="rechargeBill_realMoney">{{ realMoney }}</span>&nbsp;元
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default{
		data(){
			return {
				d_isStep1: true,
				d_isStep2: false,
				d_isStep3: false,
				d_isMask: false,
				d_tip:false,
				isOtherChecked:true,
				tMoney:0,
				rechargeToken:null,
				anotherMoney:0,
				orderCode:'HELLO-VUE-001',
				realMoney:0,
				successMoney:0,
				pharmacy:'VUE大药房'
//				rechargeTypes:'zfb'
			}
		},
		methods:{
			st1ToSt2(){
				if(this.tMoney!=0){
					this.d_isStep2=true;
					this.d_isStep1=false;
					this.$emit('changeStep','2');
				}else{
					alert("请选择一个金额！");
				}
			},
			st2ToTip(){
				var _that = this;
				//	获取token
				$.ajax({
					type:"get",
					url: "/account/getTimeStamp",
					async:true,
					success:function(res){
//						if(res.code =="000000"){
//							_that.rechargeToken = res.data.timeStamp;
							_that.rechargeToken = 123;
							window.open("F17B4.html?total_fee="+_that.rechargeToken);
							_that.$emit("openMask",true);
							_that.d_tip = true;
//						}
					}
				});
			},
			tipToSt3(){
				this.d_isStep2=false;
				this.d_tip = false;
				this.$emit("openMask",false);
				this.$emit('changeStep','3');
				this.d_isStep3=true;
			},
			click_baseMoney(){
				this.isOtherChecked=false;
			},
			focus_otherMoney(){
				this.tMoney = this.anotherMoney;
				this.isOtherChecked=true;
			},
			blur_otherMoney(){
				/*----------验证输入,不允许输入小数和非数字 start--------*/
				if(this.anotherMoney.toString().match(/\D/g)){
//					$(document).note("add", {
//						type : "error",
//						message : "充值金额最小单位为1元，请重新输入。"
//					});
					this.anotherMoney = 0;
					this.tMoney = 0;
					return false;
				}else{
					this.tMoney = this.anotherMoney;
				}
				/*----------验证输入,不允许输入小数和非数字 end----------*/
			}
		}
	}
</script>
<style scoped>
	/*提示框,由连锁版本修改而来*/

	.inbl{
		display: inline-block;
		vertical-align: middle;
	}
	.hidden{
		display: none;
	}
	.visibility{
		visibility: hidden;
	}
	.autoFill{
		background: #DDDDDD !important;
	}

	.rechargePanel .rechargeMoney{
		width: 4.25rem;
		height: 2rem;
		display: inline-block;
		vertical-align: middle;
		border: 1px solid #eee;
		text-align: center;
		line-height: 2rem;
		font-size: .875rem;
		border-radius: .125rem;
		margin-right: .8125rem;
		cursor: pointer;
	}
	/*step样式  end*/
	.step1 .totalMoney{
		margin-top: 2rem;
	}
	.step1 .nextStep{
		margin-top: 2.25rem;
	}
	.rechargeMoney span{
		font-size: .75rem;
	}
	.moneyName{
		float: left;
		line-height: 2rem;
	}
	.moneyBox{
		float: left;
		margin-left: .5625rem;
	}
	.rechargePanel:after{
		content: '';
		clear: both;
		display: block;
	}
	[name='rechargeMoney']{
		display: none;
	}
	.rechargeMoney:checked{
		border: 1px solid #f40;
		background-image: url(../assets/right.png);
		background-position: 100% 100%;
		background-repeat: no-repeat;
	}
	input[name='rechargeMoney']:checked + label{
		border: 1px solid #fc9943;
		background-image: url(../assets/right.png);
		background-position: 100% 100%;
		background-repeat: no-repeat;
	}
	/*.rechargePanel .current{
		border: 1px solid #f40;
		background-image: url(../image/right.png);
		background-position: 100% 100%;
		background-repeat: no-repeat;
	}*/
	.rechargePanel .another{
		width: 9.4375rem;
		height: 2.25rem;
		text-align: center;
		line-height: 2rem;
		font-size: .875rem;
		border-radius: .125rem;
		border: 1px solid #eee;
		
		width: 9.4375rem;
		height: 2.25rem;
		text-align: center;
		line-height: 2rem;
		font-size: .875rem;
		border-radius: .125rem;
	}
	#anotherMoney{
		width:3.125rem;
		border: 0;
	}
	.nextStep{
		color: #fff;
		border: 0;
	}
	.step2 .rechargeType{
		margin-top: 2.5625rem;
	}
	.step2 .rechargeType label{
		width: 7.375rem;
		height: 3.3125rem;
		margin-left: 0.9375rem;
		background: url(../assets/zhifubao.png) no-repeat 0 0;
	}
	.step2 .nextStep{
		margin-top: 1.5rem;
	}
	.step3 .rechargeTip{
		height: 34px;
		text-align: center;
		font-size: 0;
		margin-bottom: 2.1875rem;
	}
	.step3 .rechargeTip span{
		padding-left: .8125rem;
		line-height: 34px;
		font-size: 1.375rem;
		vertical-align: middle;
	}
	.step3 .rechargeCode{
		padding-bottom: .8125rem;
	}
	.step3 .rechargeCode span{
		padding-left:.8125rem;
		color: #fc9943;
		font-size: 1.125rem; 
	}
	.step3 .rechargeBill{
		width: 32.125rem;
		height: 10rem;
		background: url(../assets/step3_bg.png) repeat-x;
	}
	.step3 .rechargeBill .pharmacyName{
		height: 3.3125rem;
		border-bottom: 1px dashed #d8d8d8;
	}
	.step3 .rechargeBill .pharmacyName p{
		line-height: 3.3125rem;
		padding-left: .5rem;
		font-size: .8125rem;
	}
	.step3 .rechargeBill .pharmacyMoney{
		height: 6.6875rem;
		padding-left: .5rem;
		padding-top: 2.3125rem;
	} 
	.step3 .rechargeBill #rechargeBill_realMoney{
		color: #fc9943;
		font-size: 1.375rem;
		padding-left: 0.8125rem;
	}
	/*提示框,由连锁版本修改而来*/
	.tipPanel-941-single{
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 99;
		transform: translate(-50%,-50%);
		width: 27.625rem;
		height: 10.25rem;
		background: #fff;
		 
	}
	.tipPanel-941-single .close-popup{
		position: absolute;
		right: 6px;
		bottom:6px;
		z-index: 100;
		height: 24px;
		width: 24px;
		cursor: pointer;
	}
	.tipPanel-941-single .close-popup img{
		height: 24px;
		width: 24px;
		background: url('../assets/popupClose.png');
	}
	.tipPanel-941-single .tip-head-941{
		position: relative;
		height: 2.375rem;
		line-height: 2.375rem;
		background: #eeeff3;
		font-size: .875rem;
		padding-left: .8125rem;
		border-bottom: 1px solid #e4e4e4;
	}
	.tipPanel-941-single .tip-body-title-941{
		padding-top: 1.5rem;
		padding-left: 2.3125rem;
		font-size: 0.8125rem;
	}
	.tipPanel-941-single .tip-footer-941{
		margin-top: 2.1875rem;
		text-align: center;
	}
	
	/*提示框,由连锁版本修改而来  end*/
	
	/*按钮样式,仅限此功能*/
	.generalButton{
		border: 0;
		background: #fc9943;
		padding: .2rem 1rem;
		border-radius: .125rem;
		color: #fff;
	}
	.generalButton:hover{
		background: #f58829;
		cursor: pointer;
	}
	.alreadyButton{
		border: 0;
		padding: .2rem 1rem;
		border-radius: .125rem;
		color: #fff;
		background: #e33333;
	}
	.alreadyButton:hover{
		cursor: pointer;
		background: #d83131;
	}
	.errorButton{
		border: 0;
		padding: .2rem 1rem;
		border-radius: .125rem;
		color: #fff;
		background: #bbb;
	}
	.errorButton:hover{
		cursor: pointer;
		background: #afaeae;
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
	#anotherMoney:focus{
		border: 0;
	}
	.tipPanel-941-single{
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 99;
		transform: translate(-50%,-50%);
		width: 27.625rem;
		height: 10.25rem;
		background: #fff;
		 
	}
	.tipPanel-941-single .close-popup{
		position: absolute;
		right: 6px;
		bottom:6px;
		z-index: 100;
		height: 24px;
		width: 24px;
		cursor: pointer;
	}
	.tipPanel-941-single .close-popup img{
		height: 24px;
		width: 24px;
		background: url(../assets/popupClose.png');
	}
	.tipPanel-941-single .tip-head-941{
		position: relative;
		height: 2.375rem;
		line-height: 2.375rem;
		background: #eeeff3;
		font-size: .875rem;
		padding-left: .8125rem;
		border-bottom: 1px solid #e4e4e4;
	}
	.tipPanel-941-single .tip-body-title-941{
		padding-top: 1.5rem;
		padding-left: 2.3125rem;
		font-size: 0.8125rem;
	}
	.tipPanel-941-single .tip-footer-941{
		margin-top: 2.1875rem;
		text-align: center;
	}
	
	/*提示框,由连锁版本修改而来  end*/
</style>