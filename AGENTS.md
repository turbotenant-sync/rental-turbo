# AGENTS.md

This project is a Netlify-hosted TanStack Start marketing site for a rental property listing service. The primary experience is a responsive landing page that helps landlords understand how to create one listing, publish it across renter sites, and manage incoming leads.

## Architecture

- `src/routes/__root.tsx` defines the root document, global metadata, and shared styles.
- `src/routes/index.tsx` contains the main rental listing landing page.
- `src/routes/products/$productId.tsx` and `src/data/products.ts` remain from the starter template and are not part of the main homepage experience.
- `src/styles.css` imports Tailwind CSS and sets global typography and background defaults.
- `public/` stores static assets served from the site root.
- `netlify.toml` configures Netlify build and dev settings.

## Conventions

- Use TypeScript with strict typing.
- Prefer route files in `src/routes/` for page-level UI.
- Use Tailwind utility classes for styling and keep custom global CSS minimal.
- Use `@/` imports for source aliases when helpful.
- Use `lucide-react` for interface icons.
- Keep copy concrete and product-specific; avoid generic placeholder messaging.

## Non-Obvious Decisions

- The homepage intentionally uses an editorial, warm landlord-service aesthetic rather than the starter product catalog layout.
- The supplied reference HTML was treated as page inspiration and metadata guidance, not copied directly.
- No persistent data storage is currently needed. If future work requires saved user data, use Netlify platform primitives and follow the Netlify Database skill guidance.
- Production build commands should be left to the Netlify validation system for agent-driven changes.
