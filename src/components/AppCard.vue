<script>
import { store } from "../store";
export default {
	name: "AppCard",
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<ul>
		<li v-for="movieCards in store.getMovie" :key="movieCards.id">
			<h3>Titolo Film: {{ movieCards.title }}</h3>
			<h3>Titolo Originale: {{ movieCards.original_title }}</h3>
			<h3>Lingua Originale: {{ movieCards.original_language.poster_path }}</h3>
			<h3>Vote rating: {{ (movieCards.vote_average / 2).toFixed(1) }}</h3>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
li {
	margin: 50px 0;
	list-style: none;
}
</style>
