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
				<div class="detail__card-title title">
					<h3>{{ detailData.name }}</h3>
					<p>Счёт матча<span>{{ detailData.leg }}</span></p>
				</div>
				<div class="detail__card-time" v-if="detailData.last_played_at">
					<p>Время последней игры: {{ detailData.last_played_at }}</p>
					<p>Дата основания: {{ detailData.founded }}</p>
					<p>Пол игроков: {{ detailData.gender }}</p>
				</div>
				<div class="detail__card-leg" v-if="detailData.leg">
					<p>Начало матча: {{ detailData.starting_at }}</p>
				</div>
				<div class="detail__card-result">
					<div class="detail__card-result-contain">
						<p>Номер лиги:{{ detailData.league_id }}</p>
						<p>Номер сезона:{{ detailData.season_id }}</p>
						<div class="detail__card-description">
							<p>Комментарий к матчу</p>
							<p>{{ detailData.result_info }}</p>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.detail__card {
	background-color: #ffffff;
	padding: 10px;
	border-radius: 16px;

	&-preview {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	&-img {
		width: 300px;
		height: 300px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&-title {
		text-align: center;
		text-transform: uppercase;

		p {
			display: flex;
			flex-direction: column;
		}
	}

	&-time {
		p {
			@include f-s(r-size(18px), 500);
			padding: 10px 0;
		}

		border-bottom: 1px solid $black;
	}

	&-subscription {
		padding-top: 10px;

		&-title {
			text-align: center;
			padding-bottom: 10px;
			border-bottom: 1px solid $black;
		}

		&-bottom {
			padding-top: 12px;
		}

		&-item {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}

		&-list {
			justify-self: center;

			p {
				@include f-s(r-size(18px), 500)
			}

			li {
				padding: 10px;
				@include f-s(r-size(16px), 500)
			}
		}
	}

	&-leg {
		text-align: center;
	}

	&-result {
		margin-top: 12px;
		display: flex;
		justify-content: center;

		p {
			margin-top: 10px;
		}
	}
}
</style>