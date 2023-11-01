export default () => {
    return {
        port: process.env.PORT,
        mal_token: process.env.MAL_TOKEN,
        tg_token: process.env.TG_TOKEN,
        db_name: process.env.POSTGRES_DB,
        db_host: process.env.POSTGRES_HOST,
        db_user: process.env.POSTGRES_USER,
        db_password: process.env.POSTGRES_PASSWORD,
        db_port: process.env.POSTGRES_PORT,
    };
};
