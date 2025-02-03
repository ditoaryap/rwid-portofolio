import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/", () => ({
    message: "hello Next",
  }))
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
