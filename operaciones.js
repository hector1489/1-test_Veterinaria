const fs = require('fs');

const register = (name, animal, sickness) => {
    let dates = [];
    try {
        dates = JSON.parse(fs.readFileSync('dates.json', 'utf-8'));
    } catch (error) {
        dates = [];
    }

    const newRegister = {
        name,
        animal,
        sickness
    };

    dates.push(newRegister);

    fs.writeFileSync('dates.json', JSON.stringify(dates, null, 2));

    console.log('Cita registrada con éxito.');
};

const readDates = () => {
    try {
        const dates = JSON.parse(fs.readFileSync('dates.json', 'utf-8'));
        console.log('Lista de citas:');
        console.log(dates);
    } catch (error) {
        console.error('Error al leer las citas:', error.message);
    }
};

module.exports = { register, readDates };
