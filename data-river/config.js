const config = {
    sourceDatabaseConfig: {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: '',
        password: '',
        ssl: false,
        poolSize: 5,
    }, 
    destinationDatabaseConfig: {
        host: 'staging-db.pluang.com',
        port: 5432,
        database: 'pluang_users',
        user: 'postgres',
        password: 'FtEv3Xx4Epx4CE5G',
        ssl: false,
        poolSize: 5,
    }
};

module.exports = config;
