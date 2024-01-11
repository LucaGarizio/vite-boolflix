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
	<div
		v-if="store.getMovie.length > 0 || store.getTvSeries > 0"
		class="container"
	>
		<section>
			<h1>Film</h1>
			<div class="col">
				<AppCard
					v-for="cards in store.getMovie"
					:key="cards.id"
					:info="cards"
					:myImg="store.apiImg"
				/>
			</div>
		</section>
		<section>
			<h1>Serie</h1>
			<div class="col">
				<AppCard
					v-for="cards in store.getTvSeries"
					:key="cards.id"
					:info="cards"
					:myImg="store.apiImg"
				/>
			</div>
		</section>
	</div>

	<div v-else class="container-start">
		<h2>Cerca il tuo film o serie tv</h2>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 90%;
	margin: 50px auto;
	border: 1px solid black;
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
