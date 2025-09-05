import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c : any, next : () => Promise<void>){
  if(c.req.header("Authorization")){
    await next();
  }
  else {
    return c.status(411).text("You dont have access");
  }
}

app.use(authMiddleware);

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("Hello Hono");
})

app.get('/', (c) => {
  return c. json({message : "Hello Hono app is running"});
})
app.post('/user', (c) => {
  return c.text("Hello Hono")
})

export default app
