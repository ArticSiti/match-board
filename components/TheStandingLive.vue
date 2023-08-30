<script lang="ts" setup>
import useFetch from "../server/composable/useFecth";
import {ref} from 'vue'
//props
//computed

//data
let standings = ref({})
//useFetch
//onMounted

const {data: dataFetch, loading: isLoading, fetchData: getData} = useFetch('football/fixtures')
onMounted(() => {
	getData()
})
//methods
</script>
<template>
	<div class="standing" v-if="!isLoading">
		<div class="standing__wrapper">
			<div class="standing__title">
				<h2>Таблица матчей</h2>
			</div>
			<nuxt-link :to="`/category/fixtures/${item.id}`" v-for="item in dataFetch.data" :key="item.id">
			<div class="standing__item" >
				<div class="standing__number">
					<h2>{{ item.name }}</h2>
				</div>
			</div>
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.standing {
	height: 1000px;
	overflow: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar-thumb {
		background: none;
		border-radius: 20px;
	}

	&::-webkit-scrollbar {
		background: none;
		width: 6px;
		border-radius: 20px;
	}
	&__title{
		text-align: center;
		margin-bottom: 16px;
		h2{
			@include f-s(r-size(24px),600)
		}
	}

	&__item {
		background-color: #ffffff;
		padding: 16px;
		border-radius: 16px;
		margin-bottom: 12px;
		transition: .3s;
		&:hover{
			box-shadow: 3px 5px 8px rgba(255,255,255,.7);
		}
	}

	&__number {
		text-align: center;

		h2 {
			@include f-s(r-size(20px), 500)
		}
	}

}
</style>