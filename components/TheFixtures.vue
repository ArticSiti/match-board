<script lang="ts" setup="">
//props
const props = defineProps({
	fixtures: {
		type: Object
	}
})
const {fixtures} = toRefs(props)
//computed

//data
//useFetch
//onMounted
//methods
</script>
<template>
	<div>
		<p v-if="fixtures.leg">Счёт матча<span>{{ fixtures.leg }}</span></p>
		<div class="detail__card-leg" v-if="fixtures.leg">
			<p>Начало матча: {{ fixtures.starting_at }}</p>
		</div>
		<div class="detail__card-result" v-if="fixtures.league_id">
			<div class="detail__card-result-contain">
				<p>Номер лиги:{{ fixtures.league_id }}</p>
				<p>Номер сезона:{{ fixtures.season_id }}</p>
				<div class="detail__card-description">
					<p>Комментарий к матчу</p>
					<p>{{ fixtures.result_info }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>