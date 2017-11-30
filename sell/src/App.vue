<template>
  <div>
  	 <v-header v-bind:sellerData="seller"></v-header>
  	 <div class="tab border_1px">
  	 	<div class="tab-item">
  	 		<router-link to="/goods">商品</router-link>
  	 	</div>
  	 	<div class="tab-item">
  	 		<router-link to="/ratings">评论</router-link>		
  	 	</div>
  	 	<div class="tab-item">
  	 		<router-link to="/seller">商家</router-link>
  	 	</div>
  	 </div>
  	 <router-view :seller="seller"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
	import header from './components/header/header.vue';
	const RES_OK = 0;
	export default {
		data() {
			return {
				seller:{}
			};
		},
		created() {
			this.$http.get('/api/seller').then((response) => {
				response = response.body;
				if(response.errno == RES_OK){
					this.seller = response.data;
					console.log(this.seller);
				}
			});
		},
		components: {
			'v-header': header
		}
	};
</script>
<style lang="scss" type="text/css">
@import "./common/style/mixin";
.tab{
	display:flex;
	width:100%;
	height:40px;
	line-height:40px;
	@include border-1px(rgba(7,17,27,0.1));
	.tab-item{
		flex:1;
		text-align:center;
		.active{
			color:#f01414;
		}
		a{
			display:block;
			font-size:14px;
			color:rgb(77,85,93);
		}
	}
}
</style>
