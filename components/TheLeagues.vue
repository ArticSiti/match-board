<script lang="ts" setup="">

//props
//computed

//data
import useFetch from "../server/composable/useFecth";

const {data: leagues, loading: isLoading, fetchData: fetchLeagues} = useFetch('football/leagues')
//onMounted

onMounted(async () => {
	await fetchLeagues()
})
//methods

</script>
<template>
	<div class="leagues">
		<div class="leagues__title title">
			<h2>Лиги</h2>
		</div>
		<div class="leagues__wrapper">
			<div class="leagues__card" v-for="item in leagues.data?.slice(0,8)" :key="item.id">
				<nuxt-link :to="`/category/leagues/${item.id}`">
					<TheCard :card="item"/>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.leagues {
	&__wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 10px;
		margin-bottom: 60px;
	}

	&__title {
		text-align: center;
		margin-bottom: 20px;
	}
}
</style>