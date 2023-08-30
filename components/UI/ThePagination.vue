<script lang="ts" setup="">
import {paginateStore} from '~/store/paginate'
import {storeToRefs} from 'pinia'
import {ref,computed} from 'vue'

const paginateData = paginateStore()
let {paginateCurrent} = storeToRefs(paginateData)
let {SET_PAGINATE, NEXT_PAGE, PREV_PAGE} = paginateData
//props
const props = defineProps({
	totalPages: {
		type: Number,
	},
})
const {totalPages} = toRefs(props)
//computed
let displayedPageNumbers = computed(() => {
	const startPage = Math.max(
			1,
			paginateCurrent.value - Math.floor(maxDisplayedPages.value / 2)
	)
	const endPage = Math.min(
			totalPages.value,
			startPage + maxDisplayedPages.value - 1
	)
	return Array.from(
			{length: endPage - startPage + 1},
			(_, index) => startPage + index
	)
})

//data
let currentPage = ref(1)
let maxDisplayedPages = ref(10)
//useFetch
//onMounted
//methods
const emmit = defineEmits(['nextCount','prevCount','selectedCount'])
// methods
let goToPage = (pageNumber:number) => {
	if (pageNumber >= 1 && pageNumber <= totalPages.value) {
		SET_PAGINATE(pageNumber)
		emmit('selectedCount')
	}
}
let nextPage = () => {
	if (paginateCurrent.value < totalPages.value) {
		let current = 0
		NEXT_PAGE(current++)
		emmit('nextCount')
	}
}
let previousPage = () => {
	if (paginateCurrent.value > 1) {
		let current = 0
		PREV_PAGE(current--)
		emmit('prevCount')
	}
}
</script>
<template>
	<div class="paginate">
		<div class="paginate__contain">
			<button class="button prev" @click="previousPage" :disabled="paginateCurrent === 1">
			</button>
			<div class="paginate__button-wrapper">
				<button
						class="paginate__button-number"
						v-for="pageNumber in displayedPageNumbers"
						:key="pageNumber"
						@click="goToPage(pageNumber)"
						:disabled="pageNumber === paginateCurrent"
						:class="{ disabled: pageNumber === paginateCurrent }"
				>
					{{ pageNumber }}
				</button>
			</div>
			<button class="button next" @click="nextPage" :disabled="paginateCurrent === totalPages">
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.paginate {
	display: flex;
	justify-content: center;
	margin-top: 60px;
	&__contain {
		display: flex;
	}

	&__button {
		&-number {
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			font-weight: 700;
			@include f-s(r-size(16px),400);
			border-radius: 12px;
			background-color: #54b635;
			color: #fff;
			@include tablet-min{
				width: 25px;
				height: 25px;
			}
		}

		&-wrapper {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
}

.button {
	cursor: pointer;
	position: relative;
	width: 30px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;

	&:before {
		position: absolute;
		content: '';
		width: 24px;
		height: 14px;
		background-image: url("/img/icons/arrow.svg");
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
}

.button.prev {
	margin-right: 6px;

	&:before {
		transform: rotate(90deg);
	}
}

.button.next {
	margin-left: 6px;

	&:before {
		transform: rotate(-90deg);
	}
}

.disabled {
	background-color: gray;
	color: rgba(255,255,255,.7);
	pointer-events: none;
}
</style>
