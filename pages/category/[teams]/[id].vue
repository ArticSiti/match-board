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
				<div class="detail__card-preview">
					<div class="detail__card-img">
						<img :src="detailData.image_path" :alt="detailData.name" v-lazy-load/>
					</div>
				</div>
				<div class="detail__card-title title">
					<h3>{{ detailData.name }}</h3>
				</div>
				<div class="detail__card-time">
					<p>Время последней игры: {{ detailData.last_played_at }}</p>
					<p>Дата основания: {{ detailData.founded }}</p>
					<p>Пол игроков: {{ detailData.gender }}</p>
				</div>
				<div class="detail__card-subscription">
					<div class="detail__card-subscription-title title">
						<h4>Подписки</h4>
					</div>
					<div class="detail__card-subscription-bottom" v-if="subscription[0].plans">
						<div class="detail__card-subscription-item" v-for="(item,index) in subscription[0].plans" :key="index">
							<div class="detail__card-subscription-list">
								<!--							<p>План подписок</p>-->
								<li>{{ item.plan }}</li>
							</div>
							<div class="detail__card-subscription-list">
								<!--							<p>Категории подписок</p>-->
								<li>{{ item.category }}</li>
							</div>
							<div class="detail__card-subscription-list">
								<!--							<p>Виды спорта</p>-->
								<li>{{ item.sport }}</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.detail__card {
	background-color: $bg-color;
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
		margin: 12px 0;
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
}
</style>