import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { loginSchema } from '@mmai/shared';

const app = new Hono();

app.get('/health', (c) => c.json({ ok: true }));
app.post('/auth/login', zValidator('json', loginSchema), async (c) => {
  const payload = c.req.valid('json');
  return c.json({ message: 'Authenticate via Supabase Auth client', email: payload.email });
});

export default app;
