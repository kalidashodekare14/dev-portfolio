# Update Quantiqen project JSON in portfolio

## Goal
Update the Quantiqen project entry in `src/data/projects.ts` to reflect current state based on the actual implementations in `quantiqen-v1`, `quantiqen-backend`, and `quantiqen_identity` (under `E:\Job Work direction\` as specified).

## Current state (in portfolio)
- id: "quantiquen", title: "Quantiquen", subtitle: "Security Decision Intelligence (SDI) platform"
- Short description says "platform connecting volunteers with people in need of assistance during disasters" (matches HelpLink/old description)
- Full description also matches disaster relief description (appears copied from HelpLink)
- Tags include Next.js, TypeScript, Tailwind CSS, ChadCN, Node.js, Express.js, Nest.js, Redis (BullMQ), Docker, PostgreSQL (Prisma ORM)
- Repos: Frontend (HelpLink_Frontend - private), Backend (quantiqen-backend - private), Auth Backend (quantiqen-identity - private)
- Live: https://quantiqen.vercel.app
- Gallery has 16 images
- Features/challenges/technical highlights appear to be from older disaster relief version

## Questions to resolve
1. Confirm actual project name/identity - is it still a disaster relief platform (HelpLink evolved to Quantiqen) or different (SDI platform as subtitle suggests)?
2. What are the correct repos for the current Quantiqen stack (frontend might be different from HelpLink_Frontend)?
3. What is the correct live URL?
4. What are the current features, tech stack, description based on actual codebase?
5. Should we keep the old gallery images or update them?
6. Are there demo credentials that need updating?
7. What about tags - current tags show modern stack (Nest.js, Prisma, Redis, Docker) which differs from HelpLink's MERN stack

## Plan
1. **Locate and read the 3 projects** from `E:\Job Work direction\` (or equivalent path):
   - `quantiqen-v1/` - likely frontend
   - `quantiqen-backend/` - main backend/API
   - `quantiqen_identity/` - auth/identity service
   Look for: README, package.json, API routes, features, env examples, architecture docs.

2. **Extract accurate project metadata**:
   - Title/subtitle/description (short + full) - what does it actually do?
   - Tech stack from dependencies
   - Features list from README/routes/UI
   - Repo URLs (if different from what's in portfolio)
   - Live URL
   - Screenshots - check for any new gallery assets

3. **Update `src/data/projects.ts`** for the `quantiquen` entry:
   - Update subtitle/description if SDI platform differs from disaster relief
   - Update tags to match actual stack
   - Update features to match actual functionality
   - Update repos if needed (frontend repo might have changed)
   - Update challenges/technicalHighlights based on actual implementation
   - Update demoCredentials if changed
   - Update gallery if there are better/new images

4. **Verify** - ensure the entry compiles and displays correctly

## Implementation notes
- Need to access `E:\Job Work direction\` to read the three repos
- The current entry might be partially outdated - compare with actual code
- If subtitle says "Security Decision Intelligence (SDI) platform" but descriptions say disaster relief, there's a mismatch to resolve
