<script lang="ts" setup>
//props
//computed

//data
//useFetch
//onMounted
//methods
</script>
<template>
	<div class="banner">
		<div class="banner__wrapper">
			<div class="banner__img">
				<img src="/img/banner.jpg" alt="" v-lazy-load>
			</div>
			<div class="banner__description">
				<p>Стремись к мечте</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.banner {

	&__wrapper {
		position: relative;
		height: 400px;
		margin-bottom: 60px;
	}

	&__img {
		width: 100%;
		height: 400px;
	}

	&__img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
	}

	&__description {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;

		&:before {
			width: 100%;
			height: 100%;
			position: absolute;
			content: '';
			background-color: rgba($black, .5);
			top: 0;
			left: 0;
			border-radius: 16px;
		}

		p {
			z-index: 10;
			@include f-s(r-size(42px), 600);
			color: #fff;
		}
	}
}
</style>