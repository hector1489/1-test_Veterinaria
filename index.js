const { register, readDates } = require('./operaciones');

const arguments = process.argv.slice(2);

const [operations, name, animal, sickness] = arguments;

if (operations === "register") {
    register(name, animal, sickness);
} else if (operations === "readDates") {
    readDates();
} else {
    console.log("Comando no válido. Por favor, use 'register' o 'readDates'.");
}