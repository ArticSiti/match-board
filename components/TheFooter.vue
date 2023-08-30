<script lang="ts" setup>

//props
//computed

//data

//useFetch
//onMounted
//methods
</script>
<template>
	<footer class="footer">
		<div class="footer__wrapper container">
			<nav class="footer__nav">
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
	</footer>
</template>
<style lang="scss" scoped>
.footer {
	width: 100%;
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