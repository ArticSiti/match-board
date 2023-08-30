<script lang="ts" setup="">
import useFetch from '../../server/composable/useFecth'
import {ref} from 'vue'
import TheCard from "@/components/TheCard.vue";
import ThePagination from "../components/UI/ThePagination.vue";
import {paginateStore} from '~/store/paginate'
import {storeToRefs} from 'pinia'
import TheSearchResult from "../components/UI/TheSearchResult.vue";

const paginateData = paginateStore()
let {paginateCurrent} = storeToRefs(paginateData)
//props
//computed

//data
let teamsData = ref([])
let searchData = ref('')
let searchResult = ref([])
const route = useRoute()
const {data: teams, loading: isLoading, fetchData: fetchTeams} = useFetch(`football/${route.query.code}`)
//useFetch
//onMounted
onMounted(async () => {
	!teams.value.length ? await fetchTeams() : false
	teamsData.value = teams.value.data
})
//methods
let paginationCount = async () => {
	let currentTotal = paginateCurrent.value
	const {
		data: teams,
		loading: isLoading,
		fetchData: fetchTeams
	} = useFetch(`football/${route.query.code}`, `${paginateCurrent.value}`)
	await fetchTeams()
	teamsData.value = teams.value.data
}
let search = async (value: string) => {
	const {
		data: teams,
		loading: isLoading,
		fetchData: fetchTeams
	} = useFetch(`football/${route.query.code}/search/${searchData.value}`, `${paginateCurrent.value}`)
	await fetchTeams()
	!searchData.value ? searchResult.value = [] : searchResult.value = teams.value.data
}
</script>
<template>
	<div class="teams container">
		<transition name="fade">
			<TheLoading v-if="isLoading"/>
			<div class="teams__wrapper" v-else>
				<div class="teams__title title">
					<h2>Список команд</h2>
				</div>
				<div class="teams__search">
					<input v-model="searchData" type="text" placeholder="Поиск" @input="search"/>
					<transition name="fade">
						<TheSearchResult v-if="searchResult.length" class="teams__search-result" :result="searchResult"/>
					</transition>
				</div>
				<div class="teams__card">
					<TheCard v-for="item in teamsData" :key="item.id" :card="item"/>
				</div>
				<ThePagination :total-pages="teamsData.length"
				               @selectedCount="paginationCount"
				               @prevCount="paginationCount"
				               @nextCount="paginationCount"/>
			</div>
		</transition>
	</div>

</template>

<style lang="scss" scoped>
.teams {
	&__card {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-auto-rows: 100px;
		gap: 10px;
	}

	&__title {
		text-align: center;
	}

	&__button {
		margin-top: 40px;
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

	&__search {
		position: relative;
		display: flex;
		align-items: center;
		margin-bottom: 40px;

		input {
			width: 100%;
			border-bottom: 1px solid $lightGray;
			padding: 10px;
			background: none;
		}

		&:before {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			right: 20px;
			background-image: url("/img/icons/search.svg");
			background-repeat: no-repeat;
			background-size: contain;
		}

		&-result {
			position: absolute;
			top: 20px;
		}
	}
}

</style>