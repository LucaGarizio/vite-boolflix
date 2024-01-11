<script>
import { store } from "../store";
export default {
	name: "AppHeader",
	data() {
		return {
			store,
		};
	},
};
</script>
<template>
	<div class="row">
		<div class="title">Boolflix</div>
		<div class="search">
			<input v-model="store.searchMovie" type="text" placeholder="Ricerca" />
			<button @click="$emit('search')">Cerca</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row {
	background-color: black;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		color: red;
		margin-left: 20px;
		text-transform: uppercase;
		font-size: 40px;
	}

	button {
		border: none;
		margin-right: 20px;
		font-size: 15px;
		padding: 5px;
	}

	input {
		padding: 5px;
	}
}
</style>
