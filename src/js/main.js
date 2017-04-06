new Vue ({
    el: '#app',
    data: {
        nombre: 'sergio',
        apellido: 'martinez',
        auth: false,
        dirrecion: 'http://www.lequar.es'
    },
    methods: {
        accion: function (_evt) {
            _evt.preventDefault();
            alert('Click');
        }
    }
});
