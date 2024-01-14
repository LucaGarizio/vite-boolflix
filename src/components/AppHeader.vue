<script>
// importa store
import { store } from "../store";

// importa componenti
import AppCard from "./AppCard.vue";

export default {
	name: "AppHeader",
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
	<nav>
		<div class="row">
			<div class="title">Boolflix</div>
			<!-- bonus seleziona genere -->
			<div class="search">
				<!-- <select
					style="padding: 5px; margin-right: 20px"
					@change="$emit('search')"
					name=""
					id="search"
					v-model="store.searchGenre"
				>
					<option value="">Seleziona Genere</option>
					<option v-for="select in store.getGenre" :value="select.id">
						{{ select.name }}
					</option>
				</select> -->
				<input
					v-model="store.searchMovie"
					type="text"
					placeholder="Ricerca"
					@keyup.enter="$emit('search')"
				/>
				<button @click="$emit('search')">Cerca</button>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	background-color: black;
}
.row {
	height: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 30px;

	.title {
		color: #ff0000;
		text-transform: uppercase;
		font-size: 40px;
	}

	button {
		border: none;
		font-size: 15px;
		padding: 8px;
		background-color: #ff0000;
	}

	input {
		padding: 8px;
		margin-left: 20px;
	}
}

@media all and (max-width: 576px) {
	button {
		display: none;
	}
}
</style>
