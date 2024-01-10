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
		<h3>Movies</h3>
		<AppCard />
		<h3>Serie TV</h3>
	</div>

	<div v-else class="container-start">
		<h2>Cerca il tuo film</h2>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 90%;
	margin: 50px auto;
	border: 1px solid black;
	h3 {
		text-transform: uppercase;
		font-size: 30px;
	}
}

.container-start {
	display: flex;
	justify-content: center;
	font-size: 50px;
	margin-top: 100px;

	h2 {
		text-transform: uppercase;
	}
}
</style>
