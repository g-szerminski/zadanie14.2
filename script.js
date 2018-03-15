var movies = [
	{
		id: 1,
		title: 'Harry Ploter',
		desc: 'Film o drukarce',
		photo: 'https://thumb9.shutterstock.com/display_pic_with_logo/2704957/612136502/stock-photo-large-printer-format-inkjet-working-612136502.jpg'
	},
	{
		id: 2,
		title: 'Król kur',
		desc: 'Film o kurniku',
		photo: 'https://cdn.stocksnap.io/img-thumbs/280h/1HSL6PSND8.jpg'
	},
	{
		id: 3,
		title: 'Karate kit',
		desc: 'Film o kitowaniu',
		photo: 'https://image.shutterstock.com/display_pic_with_logo/1268695/508681516/stock-photo-hand-with-putty-knife-repair-damaged-wall-508681516.jpg'
	},
	{
		id: 4,
		title: 'James błąd',
		desc: 'Film o tym, jak popełniać mniej błędów',
		photo: 'https://image.shutterstock.com/display_pic_with_logo/160669/276168278/stock-photo-desperate-employee-276168278.jpg'
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.photo})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));