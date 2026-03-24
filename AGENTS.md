# Agent Instructions for nicdumz.fr

This file contains instructions and conventions for AI agents working on this repository.

## Version Control

- **System**: [Jujutsu (jj)](https://jj-vcs.github.io/jj/) - NOT git
- **Commit convention**: [Conventional Commits](https://www.conventionalcommits.org/)
- **Common types**: `feat`, `fix`, `chore`, `docs`, `refactor`

## Build System & Dependencies

### Package Manager
- **Primary**: `pnpm` (NOT npm or yarn)
- All dependencies managed via pnpm
- Single ecosystem: Node.js/JavaScript only (no Ruby, Python, etc.)

### Static Site Generator
- **Current**: Eleventy (11ty) v3.x
- **Template engine**: Liquid (same as Jekyll, for compatibility)

## Development Environment (Nix)

### shell.nix Structure
- **Preference**: Use `devshell.mkShell` (NOT plain `pkgs.mkShell`)

## Site Configuration

### Eleventy Configuration (.eleventy.js)

**Required plugins**:
1. `eleventy-sass` - For Bulma/Sass compilation
2. `@11ty/eleventy-plugin-syntaxhighlight` - Code syntax highlighting with Prism
3. `markdown-it-anchor` - Heading IDs for internal links

### Styling

**CSS Framework**: Bulma v1.x
- Compiled from Sass via `eleventy-sass` plugin
- Custom configuration in `assets/css/bulma.sass`
- Uses modern Sass syntax (`@use`, `@forward`)
- Load path includes `node_modules` for Bulma imports

**Syntax highlighting**:
- Library: Prism.js (via Eleventy plugin)
- Markdown: Use fenced code blocks (NOT `{% highlight %}` tags)
