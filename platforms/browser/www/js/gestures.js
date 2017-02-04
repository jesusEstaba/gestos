var app = {
	inicio: function() {
		var btnClaro = document.querySelector('#claro');
		var btnOscuro = document.querySelector('#oscuro');
		
		btnClaro.addEventListener('click', this.setClaro, false);
		btnOscuro.addEventListener('click', this.setOscuro, false);
	},

	setClaro: function(){
		document.body.className = 'claro';
	},

	setOscuro: function()(){
		document.body.className = 'oscuro';
	}
};

app.inicio();