// visit the page of the streamer you are interested in "assisting"
// alter the settings of the page to display all Highlights
// scroll to bottom to load all highlights as it's lazy loading based

// simple command to craft an array of all hrefs
// we're going to use a set to ignore any duplicates, since this pulls the hrefs twice
const videoLinks = [...new Set(
	// find all the videos
	Array.from(document.querySelectorAll('a'))
	// snag the href attribute
	.map(link => link.href)
	// snag only specific to this prefix
	.filter(href => href.startsWith('https://www.twitch.tv/videos/'))
)];

// log the results in the console
console.log(videoLinks.join("\n"));