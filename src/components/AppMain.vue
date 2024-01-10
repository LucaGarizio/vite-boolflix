<script>
import { store } from "../store";
export default {
	name: "AppMain",
	data() {
		return {
			store,
		};
	},
};
</script>
<template>
	<ul>
		<li style="margin-bottom: 50px" v-for="movieCards in store.getMovie">
			<h3>Titolo Film: {{ movieCards.title }}</h3>
			<h3>Titolo Originale: {{ movieCards.original_title }}</h3>
			<h3>Lingua originale: {{ movieCards.original_language }}</h3>
			<h3>Vote rating: {{ movieCards.vote_average }}</h3>
		</li>
	</ul>
</template>

<style lang="scss" scoped></style>
