<script lang="ts" setup="">
import useFetch from '../server/composable/useFecth'
//props
//computed

//data

const {data: teams, loading: isLoading, fetchData: fetchTeams} = useFetch('football/teams')
//useFetch
//onMounted
onMounted(async () => {
	await fetchTeams()
})
//methods

</script>
<template>
	<div class="loading" v-if="isLoading">
		loading
	</div>
	<div v-else>
		{{ teams }}
	</div>
</template>

<style lang="scss" scoped>

</style>