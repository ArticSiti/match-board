<script lang="ts" setup="">
import useFetch from '../server/composable/useFecth'
import TheCard from "@/components/TheCard.vue";
//props
//computed

//data

const {data: teams, loading: isLoading, fetchData: fetchTeams} = useFetch('football/teams')
//useFetch
//onMounted
onMounted(async () => {
	!teams.value.length ? await fetchTeams() : false
})
//methods

</script>
<template>
	<div class="teams">
		<transition name="fade">
			<TheLoading v-if="isLoading"/>
			<div class="teams__wrapper" v-else>
				<div class="teams__title title">
					<h2>Список команд</h2>
				</div>
				<div class="teams__card">
					<div class="teams__card-contain" v-for="item in teams.data?.slice(0,8)" :key="item.id">
						<nuxt-link :to="`/category/teams/${item.id}`">
							<TheCard :card="item"/>
						</nuxt-link>
					</div>
				</div>
				<div class="teams__button">
					<nuxt-link :to="{ path: `/category`, query: {code:'teams'} }">Смотреть больше</nuxt-link>
				</div>
			</div>
		</transition>
	</div>

</template>

<style lang="scss" scoped>
.teams {
		margin-bottom: 40px;
	&__card {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		grid-auto-rows: 100px;
		gap: 10px;
	}

	&__title {
		text-align: center;
		margin-bottom: 20px;
	}

	&__button {
		margin-top: 20px;
		@include f-s(r-size(18px), 400);
		padding-right: 10px;
		text-align: center;

		a {
			position: relative;
			width: 180px;
			color: $black;

			&:before {
				position: absolute;
				content: '';
				width: 24px;
				height: 24px;
				background-image: url("/img/icons/arrow-right.svg");
				background-repeat: no-repeat;
				background-size: contain;
				right: -35px;
				transition: .3s;
			}

			&:hover {
				&:before {
					right: -40px;
				}
			}
		}
	}
}

</style>