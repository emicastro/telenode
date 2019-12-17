const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicPath: process.env.PUBLIC_PATH || '/app',
    filesPath: process.env.FILES_PATH || 'files',
}

module.exports = config;