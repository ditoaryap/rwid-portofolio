import swagger from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(swagger())
  .get(
    "/",
    () => ({
      message: "hello Next",
    }), 
    { detail: { tags: ["Home"] } }
  )
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
