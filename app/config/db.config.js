export default {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "",
    DB: process.env.DB_NAME || "db",
    PORT: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: process.env.NODE_ENV === "production"
            ? { require: true, rejectUnauthorized: false }
            : false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};