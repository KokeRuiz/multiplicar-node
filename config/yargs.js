const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de cultiplicar', opt)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}