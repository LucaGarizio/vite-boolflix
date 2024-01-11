<script>
import { store } from "../store";

export default {
	name: "AppCard",
	data() {
		return {
			store,
			languageFlags: {
				it: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png",
				es: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png",
				fr: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png",
				en: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
			},
		};
	},
	methods: {},
};
</script>

<template>
	<ul>
		<li v-for="movieCards in store.getMovie" :key="movieCards.id">
			<h3>Titolo Film: {{ movieCards.title }}</h3>
			<h3>Titolo Originale: {{ movieCards.original_title }}</h3>
			<img
				class="flag"
				:src="
					languageFlags[movieCards.original_language]
						? languageFlags[movieCards.original_language]
						: 'https://iiwiki.us/mediawiki/images/d/d2/SUFlag28Stars.svg'
				"
				:alt="movieCards.original_language"
			/>
			<h3>
				Vote rating:
				{{ Math.ceil(movieCards.vote_average / 2).toFixed(1) }}
			</h3>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
li {
	margin: 50px 0;
	list-style: none;
}
</style>
