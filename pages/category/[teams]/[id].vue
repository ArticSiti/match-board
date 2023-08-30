<script lang="ts" setup>
import {ref} from 'vue'
import useFetch from "../../../server/composable/useFecth";
//props
//computed

//data
let detailData = ref({})
let subscription = ref({})
//useFetch
//onMounted

const route = useRoute()
const {
	data: teams,
	loading: isLoading,
	fetchData: fetchTeams
} = useFetch(`football/${route.params.teams}/${route.params.id}`)
onMounted(async () => {
	await fetchTeams()
	detailData.value = teams.value.data
	subscription.value = teams.value.subscription
})
//methods
</script>
<template>
	<div class="detail__card container">
		<transition name="fade">
			<TheLoading v-if="isLoading"/>
			<div class="detail__card-wrapper" v-else>
				<div class="detail__card-preview" v-if="detailData.image_path">
					<div class="detail__card-img">
						<img :src="detailData.image_path" :alt="detailData.name" v-lazy-load/>
					</div>
				</div>
				<div class="detail__card-right">
					<div class="detail__card-title title">
						<h3>{{ detailData.name }}</h3>
					</div>
					<div class="detail__card-time" v-if="detailData.last_played_at">
						<p>Время последней игры: {{ detailData.last_played_at }}</p>
						<p v-if="detailData.founded">Дата основания: {{ detailData.founded }}</p>
						<p v-if="detailData.gender">Пол игроков: {{ detailData.gender }}</p>
					</div>
				</div>
				<TheFixtures v-if="detailData.leg" :fixtures="detailData"/>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.detail__card {
	background-color: #ffffff;
	padding: 20px;
	border-radius: 16px;

	&-wrapper {
		display: grid;
		grid-template-columns: 20% 80%;
		gap: 10px;
		align-items: center;
		@include tablet-min{
			grid-template-columns: 1fr;
		}
	}

	&-preview {
		width: 100%;
		display: flex;
		justify-content: center;
		padding-right: 20px;
	}

	&-img {
		width: 150px;
		height: 150px;
		padding: 10px;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		@include tablet-min {
			width: 50px;
			height: 50px;
			img {
				width: 50px;
				height: 50px;
			}
		}
	}

	&-title {
		text-transform: uppercase;
		@include tablet-min{
			text-align: center;
			margin: 10px 0;
		}
	}

	&-time {
		p {
			@include f-s(r-size(18px), 500);
			padding: 10px 0 0 10px;
			@include tablet-min{
				padding: 4px 0;
			}
		}

	}


}
</style>