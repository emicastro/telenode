const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_user:BhJi8ywvZrT7YQc5@cluster0-lxzrb.mongodb.net/telegrom_db',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicPath: process.env.PUBLIC_PATH || '/app',
    filesPath: process.env.FILES_PATH || 'files',
}

module.exports = config;