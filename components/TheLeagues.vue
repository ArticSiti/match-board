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
	<div>
	</div>
</template>

<style lang="scss" scoped>

</style>