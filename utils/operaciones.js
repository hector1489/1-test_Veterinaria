const fs = require('fs');

const register = (name, old, animal, color, sickness) => {
    let dates = [];
    try {
        dates = JSON.parse(fs.readFileSync('db/citas.json', 'utf-8'));
    } catch (error) {
        dates = [];
    }

    const newRegister = {
        name,
        old,
        animal,
        color,
        sickness
    };

    dates.push(newRegister);

    fs.writeFileSync('db/citas.json', JSON.stringify(dates, null, 2));

    console.log('Cita registrada con éxito.');
};

const readDates = () => {
    try {
        const dates = JSON.parse(fs.readFileSync('db/citas.json', 'utf-8'));
        console.log('Lista de citas:');
        console.log(dates);
    } catch (error) {
        console.error('Error al leer las citas:', error.message);
    }
};

module.exports = { register, readDates };
