# Next.js Demo with SilkHQ, TailwindCSS, and Supabase

This project is a minimal Next.js setup that demonstrates how you might use **SilkHQ** components alongside **TailwindCSS** and **Supabase**.

The dependencies are listed in `package.json` but aren't installed automatically in this environment. You need network access to run `npm install`.

## Running locally

1. Install dependencies (requires internet):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file with your Supabase keys:

```
NEXT_PUBLIC_SUPABASE_URL=<url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<key>
```

## SilkHQ Components

The page loads SilkHQ web components from a CDN. If your environment uses a different URL, update the `<link>` and `<script>` tags in `pages/index.tsx`.
