/* const app = new Vue({
    el: '#app',
    data: {
        criterioDeBusquedaNombre: '',
        criterioDeBusquedaDNI: '',
        //Aquí, en este array es donde tienen que agregar su información
        personas: [
            {
                nombre: "Daniel",
                apellido: "Sánchez",
                correo: "danielsanchez68@hotmail.com",
                dni: "20442873"
            },
            {
                nombre: "Ariel",
                apellido: "Schermuk",
                correo: "arielschermuk@gmail.com",
                dni: "40243436"
            },
            {
                nombre: "Gerardo Alberto",
                apellido: "Tulosai",
                correo: "gerardo.tulosai@gmail.com",
                dni: "28506237"
            },
            {
                nombre: "Andres",
                apellido: "Goossen",
                correo: "goossenandres@gmail.com",
                dni: "40763987"
            },
            {
                nombre: "Luciano",
                apellido: "Ventura",
                correo: "ventura-luciano@hotmail.com",
                dni: "39387916"
            },
            {
                nombre: "Maria Celeste",
                apellido: "Alvarez",
                correo: "cel_mary@hotmail.com",
                dni: "36874250"
            },
            {
                nombre: "Javier",
                apellido: "de la Fuente",
                correo: "dlfjavier@gmail.com",
                dni: "16599452"
            },
            {
                nombre: "Alan",
                apellido: "Buengueroff",
                correo: "alanbuengue@gmail.com",
                dni: "42877999"
            },
            {
                nombre: "Lucas Ariel",
                apellido: "Horestein",
                correo: "lucas@horestein.com.ar",
                dni: "39911914"
            },
            {
                nombre: "Lucio Agustin",
                apellido: "Librera Alvarez",
                correo: "luciolibrera@gmail.com",
                dni: "39760121"
            },
            {
                nombre: "Matias Ariel",
                apellido: "Lo Castro",
                correo: "matias.locastro@hotmail.com",
                dni: "38886461"
            },
            {
                nombre: "Juan Pablo",
                apellido: "Masyk Lopez",
                correo: "juanpablomasyk@gmail.com",
                dni: "43570681"
            },
            {
                nombre: "Federico Eloy",
                apellido: "Puppo",
                correo: "fedex-92@live.com.ar",
                dni: "37141302"
            },
            {
                nombre: "Martin",
                apellido: "Questa",
                correo: "martinquesta@gmail.com",
                dni: "37113978"
            },
            {
                nombre: "Sofia",
                apellido: "Reboredo",
                correo: "sofi.reboredo@gmail.com",
                dni: "35540321"
            },
            {
                nombre: "IARA",
                apellido: "DOMINGUEZ GORDON",
                correo: "iaradg123@gmail.com",
                dni: "42645733"
            },
            {
                nombre: "Tom\u00e1s Alejandro",
                apellido: "ESEREQUIS JUNOR",
                correo: "tomasjunor@gmail.com",
                dni: "39775229"
            },
            {
                nombre: "CESAR EMANUEL",
                apellido: "DOS SANTOS",
                correo: "emanueldossantoset5@gmail.com",
                dni: "42614696"
            },
            {
                nombre: "STEFANO",
                apellido: "PLUMARI",
                correo: "stefanoplumari@gmail.com",
                dni: "40243440"
            },
            {
                nombre: "Marta",
                apellido: "Artaza",
                correo: "marta.artaza@gmail.com",
                dni: "29905670"
            },
            {
                nombre: "Ariel",
                apellido: "Feder",
                correo: "ariel.s.feder@gmail.com",
                dni: "39417573"
            },
        ]
    },
    computed: {
        personasFiltradas() {
                let nombre = this.busquedaMinimaNombre();
                let dni = this.busquedaMinimaDNI();
                return this.personas.filter((persona) => {

                let registroCompleto = `${persona.nombre} ${persona.apellido} `;
                let registroDNI =  `${persona.dni}`;

                if(nombre){
                    return registroCompleto.toLowerCase().includes(this.criterioDeBusquedaNombre.toLowerCase()) 
                }else if(dni){
                    return registroDNI.toLowerCase().includes(this.criterioDeBusquedaDNI)    
                }else{
                    return persona
                }
            });
        },
        minNombre(){
            //console.log('entra !')
            return this.criterioDeBusquedaNombre.length <  3
        },
        minDNI(){
            return this.criterioDeBusquedaDNI.length <  3
        }
    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        },
        busquedaMinimaNombre(){
            return this.criterioDeBusquedaNombre.length >=  3
        },
        busquedaMinimaDNI(){
            return this.criterioDeBusquedaDNI.length >= 3
        },
       
    }
}); */