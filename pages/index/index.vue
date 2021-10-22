<template>
	<view class="content">
		<image class="bgimage" src="../../static/images/bgimage1.jpg"></image>
		<image class="logo" src="/static/images/LNlogo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="int">
			<view class="int-title"><text>账 号</text></view>
			<view class="empty"></view>
			<view class="right">
				<slot></slot>
			</view>
			<input type="number" v-model="userNum" placeholder=" 请输入学号 / 工号" maxlength="12" />
		</view>
		<view class="int">
			<view class="int-title"><text>密 码</text></view>
			<view class="empty"></view>
			<view class="right">
				<slot></slot>
			</view>
			<input type="text" v-model="userPwd" :password="filled" password="ture" placeholder=" 请输入密码" />
		</view>
		<view class="forget" @click="forget()"><text>忘记密码？</text></view>
		<!-- <image class="logopic" src="../../static/images/index.jpg"></image> -->
		<view class="butt">
			<button class="register" @click="onregister()()">注 册</button>
			<button class="login" @click="onlogin()">登 录</button>
		</view>
		<view class="copyright">© 2021-2022 · 岭梦空间  </view>
	</view>
</template>

<script>
	export default {
		data() {

			return {
				filled:false, 
				barHeight: uni.getStorageSync("barHeight"),
				disabled:false,
				//用户输入内容
				userNum:"",
				userPwd:"",
				// form:{
				// 	account:'', //账号
				// 	pwd:'',	//密码
				// },
				//验证规则
				rules:{
					userNum:{
						rule: /^20[123456789]\d{9}$/,
						msg: "手机号格式错误"
					},
				}
			};
		},
		
		onLoad() {
			uni.getSystemInfo({
				success:function(res){
					console.log(res);
					Window.windowWidth = res.windowWidth;
					Window.windowHeight = res.windowHeight;
				}
			})
		},
		
		methods: {
			forget(){
				uni.navigateTo({
					url:"/pages/index/forget",
				})
			},
			onregister() {
				uni.navigateTo({
					url: "/pages/index/register",
				})
			},
			onlogin() {
				uni.navigateTo({
					url: "/pages/admin/function/function",
				})
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		// background-image: url(../../static/images/bgimage1.jpg);
		
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.bgimage{
		margin-top: 78%;
		background-repeat: no-repeat;
		position: absolute;
		z-index: -1;
		background-size: 100%;
		width: 100%;
		min-height: 100%;
		opacity:0.6;
	}

	.logo {
		height: 210rpx;
		width: 680rpx;
		margin-top: 80rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.int{
		margin: 30rpx 25rpx 20rpx;
		border-radius: 25rpx;
		padding: 20rpx;
		display: flex;
		align-items: center;
		border: 3rpx solid #965353;
		// box-shadow: darkgray 2px 2px 4px;
		input{
			content: '';
			width: 420rpx;
			height: 55rpx;
			flex: 1;
			font-size: 32rpx;
		}
		&-title{
			
			width: 100rpx;
			line-height: 30rpx;
			text{
				display: flex;
				font-size: 33rpx;
				font-weight: 600;
				color: #965353;
				
			}
		}
	}
	.logopic{
		// display: flex;
		height: 480rpx;
		background-size: 100%;
		width: 100%;
		position: absolute;
		bottom: 8vw;
		opacity:0.7;
	}
	.empty{
		height: 35rpx;
		width: 2rpx;
		background-color: #bbbbbb;
		margin-left: rpx;
	}
	.right{
		flex: 0;
		padding-right: 25rpx;
	}
	.forget{
		position: relative;
		left: 27vw;
		text{
			color: #808080;
		}
	}
	.butt{
		display: flex;
		margin-top: 30rpx;
		width: 600rpx;
		text{
			display: flex;
			align-items: center;
			text-align: center;
		}
		.login,.register{
			text-align: center;
			width: 210rpx;
			height: 80rpx;
			border-radius: 20rpx;
			background-color: #02a7ff;
			color: white;
			font-size: 33rpx;
			font-weight: 600;
			box-shadow: darkgray 2px 2px 4px;
		}
	}
	.copyright{
		position: absolute;
		bottom: 10rpx;
		font-size: 28rpx;
		color: #9f9f9f;
	}
	

</style>
