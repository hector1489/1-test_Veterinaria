const { register, readDates } = require('./utils/operaciones');

const arguments = process.argv.slice(2);

const [operations, name, old, animal, color, sickness] = arguments;

if (operations === "register") {
    register(name, old, animal, color, sickness);
} else if (operations === "readDates") {
    readDates();
} else {
    console.log("Comando no válido. Por favor, use 'register' o 'readDates'.");
}