<template>
	<view class="content">
		<view class="tiptext">
			<text>请到</text><text class="red">{{room}}</text><text> 重置密码 </text>
		</view>
		<image class="tipimage" src="../../static/images/without.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				room:' 【 综 A-101 】 '
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
		
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tipimage{
		width: 100%;
		height: 430rpx;
		margin-top: 35%;
	}
	.tiptext{
		margin-top: 20%;
		display: flex;
		text-align: center;
		text{
			font-size: 45rpx;
			font-weight: 600;
			color: #00aeff;
		}
		.red{
			font-size: 45rpx;
			font-weight: 600;
			color: #c36c31 !important;
		}
	}
	
</style>
