var movies = [
	{
		id: 1,
		title: 'Harry Ploter',
		decs: 'film o drukarce',
		photo: 'https://thumb9.shutterstock.com/display_pic_with_logo/2704957/612136502/stock-photo-large-printer-format-inkjet-working-612136502.jpg'
	},
	{
		id: 2,
		title: 'Król kur',
		decs: 'film o kurniku',
		photo: 'https://cdn.stocksnap.io/img-thumbs/280h/1HSL6PSND8.jpg'
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.decs),
		React.createElement('img', {src: movie.photo})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));