var movies = [
	{
		title: "In Brugess",
		rating: 5,
		seen: true
	},
	{	title: "Frozen",
		rating: 4.5,
		seen: false
	},
	{
		title: "Mad Max: Fury Road",
		rating: 5,
		seen: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		seen: false
	}];


	movies.forEach(function(movie) {
		if (movie.seen) {
			console.log(`I have watched ${movie.title} - ${movie.rating} stars`);
		} else {
			console.log(`I have not watched ${movie.title}`);
		}
	});