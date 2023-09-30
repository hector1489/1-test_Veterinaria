const { register, readDates } = require('./utils/operaciones');

const nameArguments = process.argv.slice(2);

const [operations, name, old, animal, color, sickness] = nameArguments;

if (operations === "register") {
    register(name, old, animal, color, sickness);
} else if (operations === "readDates") {
    readDates();
} else {
    console.log("Comando no válido. Por favor, use 'register' o 'readDates'.");
}
