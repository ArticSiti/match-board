<script lang="ts" setup>

//props
//computed

//data

//useFetch
//onMounted
//methods
</script>
<template>
	<header class="header">
		<div class="header__wrapper container">
			<nav class="header__nav">
				<ul>
					<li>
						<nuxt-link to="/">Главная</nuxt-link>
					</li>
					<li>
						<nuxt-link :to="{ path: `/category`, query: {code:'teams'} }">Команды</nuxt-link>
					</li>
					<li>
						<nuxt-link :to="{ path: `/category`, query: {code:'leagues'} }">Лиги</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<style lang="scss" scoped>
.header {
	width: 100%;
	position: fixed;
	background-color: #ffffff;
	z-index: 150;
	top: 0;
	left: 0;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;

	&__nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;

		li:not(:first-child) {

				margin-left: 12px;

		}

		li a {
			color: $lightGray;
			transition: .3s;

			&:hover {
				color: $black;
			}
		}
	}
}
</style>