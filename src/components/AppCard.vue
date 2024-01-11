<script>
import { store } from "../store";

export default {
	name: "AppCard",
	props: {
		info: Object,
		myImg: String,
	},
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
};
</script>

<template>
	<ul>
		<li>
			<img :src="myImg + info.poster_path" alt="" />
			<h3>Titolo Film: {{ info.title || info.name }}</h3>
			<h3>Titolo Originale: {{ info.original_title || info.original_name }}</h3>
			<img
				class="flags"
				:src="
					languageFlags[info.original_language]
						? languageFlags[info.original_language]
						: 'https://iiwiki.us/mediawiki/images/d/d2/SUFlag28Stars.svg'
				"
				:alt="info.original_language"
			/>
			<h3>
				Vote rating:
				{{ Math.ceil(info.vote_average / 2).toFixed(1) }}
			</h3>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
h2 {
	text-transform: uppercase;
	font-size: 30px;
}
li {
	margin: 50px 0;
	list-style: none;
}

.flags {
	width: 100px;
}
</style>
