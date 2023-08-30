<script lang="ts" setup>
//props
const props = defineProps({
	card: {
		type: Object
	}
})
const {card} = toRefs(props)
//computed

//data
//useFetch
//onMounted
//methods
</script>
<template>
	<div class="card">
			<div class="card__contain">
				<div class="card__preview">
					<img :src="card.image_path" :alt="card.name" v-lazy-load/>
				</div>
				<div class="card__title">
					<h2>{{ card.name }}</h2>
				</div>
			</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	height: 100%;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
	transition: .3s;
	background-color: #ffffff;
	display: flex;

	&:hover {
		box-shadow: none;
		background-color: $bg-color;
	}

	p {
		color: $black;
	}

	&__preview {
		width: 100px;
		display: flex;
		justify-content: center;

		img {
			width: 40px;
			height: 40px;
			object-fit: contain;
		}
	}

	&__title {
		margin: 8px 0;
		text-align: center;

		h2 {
			@include f-s(r-size(24px), 400)
		}
	}

	&__founded {
		margin: 12px 0;

		p {
			margin-top: 4px;

			&:last-child {
				margin-top: 12px;
			}
		}
	}
}
</style>