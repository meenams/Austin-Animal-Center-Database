const env = {
    database: 'austin_animal_center',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 8889,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;