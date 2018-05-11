// requireds
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La bases ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            console.log(`${base} * ${i} = ${i*base}`);
            data += `${base} * ${i} = ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    })
}

let listarTabla = (base, limite = 10) => {

    console.log(`#################`.red);
    console.log(`Tabla del ${base}`.blue);
    console.log(`#################`.yellow);

    for (let i = 1; i <= limite; i++) {

        console.log(`${i} * ${base} = ${i*base}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}