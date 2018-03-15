var movies = [
	{
		title: 'Harry Ploter',
		decs: 'film o drukarce'
	},
	{
		title: 'Król kur',
		decs: 'film o kurniku'
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.decs)
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));