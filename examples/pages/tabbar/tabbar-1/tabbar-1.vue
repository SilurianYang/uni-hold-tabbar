<template>
	<view class="content">
		页面 - 1
		<div class="box">
			1
		</div>
		<div class="box">
			2
		</div>
		<div class="box">
			3
		</div>
		<div class="box">
			4
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
.box{
	height: 400rpx;
	width: 100%;
	background-color: #ccc;
	margin-bottom: 10rpx;
}
</style>
