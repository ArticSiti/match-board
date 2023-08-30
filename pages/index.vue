<script lang="ts" setup="">
import TheBanner from "../components/UI/TheBanner.vue";
//props
//computed
//data
//useFetch
//onMounted
//methods
</script>
<template>
	<div class="home container">
		<client-only>
			<TheBanner class="banner"/>
		</client-only>
		<TheStandingLive class="standing-live"/>
		<TheTeams class="teams-home"/>
		<TheLeagues class="leagues-home"/>
	</div>
</template>

<style lang="scss" scoped>
.home {
	position: relative;
	display: grid;
	grid-template-columns: 20% 78%;
	grid-template-areas:
    "standing-live  banner"
    "standing-live  teams-home"
"standing-live leagues-home";
	gap: 10px;
}

.banner {
	grid-area: banner;
}

.standing-live {
	width: 100%;
	position: absolute;
	grid-area: standing-live;
}

.teams-home {
	grid-area: teams-home;
}

.leagues-home {
	grid-area: leagues-home;
}
</style>