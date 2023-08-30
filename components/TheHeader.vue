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
						<nuxt-link to="/statistic">Статистика</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/livescorers">Текущие результаты</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/standings">Турнирная таблица</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/live-standings">Текущая турнирная таблица</nuxt-link>
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

	&__nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		li a{
			color: $lightGray;
			transition: .3s;
			&:hover{
				color: $black;
			}
		}
	}
}
</style>