<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";

export default {
	name: "AppMain",
	components: {
		AppCard,
	},
	data() {
		return {
			store,
		};
	},
};
</script>
<template>
	<div v-if="store.getMovie.length > 0" class="container">
		<h2>Movies</h2>
		<AppCard />
		<h2>Serie TV</h2>
	</div>
	<div v-else class="container-start">
		<h2>Cerca il tuo film</h2>
	</div>
</template>

<style lang="scss" scoped>
.container-start {
	display: flex;
	justify-content: center;
	font-size: 50px;
	margin-top: 100px;
}
</style>
