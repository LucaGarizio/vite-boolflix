<script>
// importa store
import { store } from "../store";

// importa componenti
import AppCard from "./AppCard.vue";

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
	<!-- se la lunghezza dell'array della chiamata dell'api è maggiore di zero allora mostra film e serie tv **-->
	<div
		v-if="store.getMovie.length > 0 || store.getTvSeries > 0"
		class="container"
	>
		<!-- sezione v-for per film -->
		<section>
			<h2>Movies</h2>
			<div class="card">
				<AppCard
					v-for="cards in store.getMovie"
					:key="cards.id"
					:info="cards"
					:myImg="store.apiImg"
				/>
			</div>
		</section>

		<!-- sezione v-for per serie tv -->
		<section>
			<h2>TV Series</h2>
			<div class="card">
				<AppCard
					v-for="cards in store.getTvSeries"
					:key="cards.id"
					:info="cards"
					:myImg="store.apiImg"
				/>
			</div>
		</section>
	</div>

	<!--** altrimenti mostra messaggio  -->
	<div v-else class="container-start">
		<h2>Cerca il tuo film o serie tv</h2>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	height: calc(100vh - 70px);
	overflow: auto;
	padding: 0 40px;

	h2 {
		font-size: 30px;
		margin: 30px 0 0;
		text-transform: uppercase;
		color: #ff0000;
	}

	.card {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}

.container-start {
	display: flex;
	justify-content: center;
	font-size: 40px;
	margin-top: 100px;

	h2 {
		text-transform: uppercase;
	}
}
</style>
