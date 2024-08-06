import { db } from "@/database/db";
import { elements } from "@/database/schema";
import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const appRouter = router({
  elementList: publicProcedure.query(async () => {
    const output = await db.select().from(elements);
    return output;
  }),
  sayHello: publicProcedure.query(() => {
    return "Hello world!";
  }),
  elementCreate: publicProcedure
    .input(
      z.object({
        id: z.number(),
        x: z.number(),
        y: z.number(),
        width: z.number(),
        height: z.number(),
        dataType: z.string(),
        dataLink: z.string(),
        data: z.string(),
        color: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;

      const output = await db.insert(elements).values(input);
      return output;
    }),
});

export type AppRouter = typeof appRouter;
