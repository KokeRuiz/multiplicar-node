const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        //.then(salida => console.log(salida))
        //.catch(err => console.log('Revento:', err));
        break;
    case 'crear':
        console.log(`crear con base ${argv.base} con limite ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log('Revento:', err));
        break;
    default:
        console.log('Otro');
        break;
}


// let base = '11';

//console.log(process.argv);
//let argv2 = process.argv;

// console.log(`base`, argv.base);
// console.log(`Limite`, argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);