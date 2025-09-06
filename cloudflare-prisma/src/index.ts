import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request : Request, env : Env, ctx : ExecutionContext) : Promise<Response> {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate());

		const response = await prisma.log.create({
			data : {
				level : "Info",
				message : "Hello from Cloudflare Workers and Prisma!",
				meta : { 
					headers : JSON.stringify(request.headers),
					timestamp: new Date().toISOString() 
				}
			}
		})
		console.log(JSON.stringify(response));
    const log = await prisma.log.findMany({});
    const result = JSON.stringify(log);
		console.log(result);
    return new Response(`request method : ${request.method}`);
  },
} satisfies ExportedHandler<Env>;