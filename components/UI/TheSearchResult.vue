<script lang="ts" setup>
//props
const props = defineProps({
	result: {
		type: Array
	}
})
//computed

//data
//useFetch
//onMounted
//methods
</script>
<template>
	<div class="result">
		<nuxt-link :to="`/category/teams/${item.id}`" v-for="(item,index) in result" :key="item.id">
			<div class="result__item">
				<div class="result__item-img">
					<img :src="item.image_path" :alt="item.name" v-lazy-load>
				</div>
				<div class="result__item-title">
					<h2>{{ item.name }}</h2>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
.result {
	margin-top: 20px;
	width: 100%;
	height: 500px;
	overflow: hidden;
	overflow-y: scroll;
	border-radius: 16px;
	box-shadow: 3px 4px 5px $bg-color;
	background-color: #ffffff;
	z-index: 150;

	&__item {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 10px;
		cursor: pointer;
		transition: .3s;

		&:hover {
			background-color: #54B635FF;

			.result__item-title h2{
				color: #ffffff;
			}
		}

		&-img {
			width: 50px;
			height: 50px;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&-title {
			padding: 10px;

			h2 {
				@include f-s(r-size(18px), 400)
			}
		}
	}
}
</style>