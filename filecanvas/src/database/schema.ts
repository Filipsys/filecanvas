import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const elements = sqliteTable("elements", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    x: integer("x").notNull().default(0),
    y: integer("y").notNull().default(0),
    width: integer("width").notNull().default(100),
    height: integer("height").notNull().default(100),
    dataType: text("dataType"),
    dataLink: text("dataLink"),
    data: text("data"),
    color: text("color"),
});