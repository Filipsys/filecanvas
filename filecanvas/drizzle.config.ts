import type { Config } from "drizzle-kit";

export default {
    dialect: "sqlite",
    schema: "./src/database/schema.ts",
    out: "drizzle/migrations",
    verbose: false,
    dbCredentials: {
        url: "./src/database/storage.sqlite"
    }
} satisfies Config;