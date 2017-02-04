var app = {
	inicio: function() {
		this.inicioBotones();
		this.iniciaFastclick();
		this.iniciaHammer();
	},
	
	inicioBotones: function() {
		var btnClaro = document.querySelector('#claro');
		var btnOscuro = document.querySelector('#oscuro');
		
		btnClaro.addEventListener('click', this.setClaro, false);
		btnOscuro.addEventListener('click', this.setOscuro, false);
	},

	setClaro: function(){
		document.body.className = 'claro';
	},

	setOscuro: function(){
		document.body.className = 'oscuro';
	},

	iniciaFastclick: function(){
		FastClick.attach(document.body);
	},

	iniciaHammer: function(){
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);

		hammertime.get('pinch').set({enable: true});
		hammertime.get('rotate').set({enable: true});

		zona.addEventListener('webkitAnimationEnd', function(e){
			zona.className = '';
		});

		hammertime.on('doubletap', function(e){
			zona.className = 'doubletap';
		});

		hammertime.on('press', function(e){
			zona.className = 'press';
		});
	}
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
}