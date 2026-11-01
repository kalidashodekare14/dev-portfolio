# Plan: Show only icon for private GitHub repos in Projects section

## Problem
In `src/components/Projects.tsx`, when `repo.isPrivate` is true, it currently renders a pill with lock icon + text `"{label} (Private)"`. The request is to show only the icon (like GitHub UI style), not the text.

## Affected files
- `src/components/Projects.tsx` (line ~78-89)

## Changes
Change the private repo rendering from:
```tsx
<div
  key={repo.label}
  title={`${repo.label} repository is private`}
  aria-label={`${repo.label} repository is private`}
  onClick={(e) => e.stopPropagation()}
  className="h-9 px-3 rounded-full bg-primary/5 border border-primary/10 flex items-center gap-1.5 text-foreground/40 text-xs font-medium cursor-not-allowed select-none"
>
  <Lock className="w-3.5 h-3.5" />
  <span>{repo.label} (Private)</span>
</div>
```
to:
```tsx
<div
  key={repo.label}
  title={`${repo.label} repository is private`}
  aria-label={`${repo.label} repository is private`}
  onClick={(e) => e.stopPropagation()}
  className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/40 cursor-not-allowed select-none"
>
  <Lock className="w-4 h-4" />
</div>
```

Same styling pattern as the live repo button (circular icon button).

## Validation
- Verify in UI that private repos show just the lock icon
- Check accessibility (title/aria-label preserved)
- Ensure no layout shift
