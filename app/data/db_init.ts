// @vercel/postgres

// import "server-only";

// import { sql } from "@vercel/postgres";
// import { TestInsert } from "./test_insert";

// async function initDB() {
//     await sql`CREATE TABLE IF NOT EXISTS posts (
//         id SERIAL PRIMARY KEY,
//         title TEXT,
//         content TEXT,
//         created_at TIMESTAMP DEFAULT NOW()
//     );`;

//     await TestInsert.insertPost();
// }

// export const DBInit = {
//     initDB,
// };
