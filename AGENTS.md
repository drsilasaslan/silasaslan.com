# Agents.md

This document defines the specialized agents available for this project and their roles, capabilities, and usage guidelines.

## Persona Alignment

For tone, voice, and writing cues that reflect Dr. Silas Aslan’s personality, use:

- `AGENTS-DETAILS.md`

## 🤖 Available Agents

### 1. General Agent (`general`)
**Purpose**: General-purpose development and problem-solving tasks
**Capabilities**:
- Multi-step project planning and execution
- Parallel task orchestration
- Cross-functional development work
- Code analysis and debugging
**Usage**: For complex tasks that span multiple areas or require systematic planning
**Access**: `subagent_type: "general"`

### 2. Explore Agent (`explore`)
**Purpose**: Fast codebase exploration and search tasks
**Capabilities**:
- Quick codebase searches and file finding
- Pattern matching and regex searches
- Structure analysis and code navigation
- Rapid information gathering
**Usage**: For finding files, code patterns, or understanding project structure
**Access**: `subagent_type: "explore"`

## 📋 Usage Guidelines

### When to Use General Agent:
- Complex multi-step tasks (3+ steps)
- Tasks requiring project-wide understanding
- Code refactoring across multiple files
- Feature development with dependencies
- Problem-solving requiring systematic approach

### When to Use Explore Agent:
- Simple file searches and navigation
- Understanding code structure
- Finding specific functions or patterns
- Quick codebase analysis
- Single-focus information gathering

## 🚀 Quick Reference

```javascript
// For complex tasks
agent_type: "general"
example: "Optimize the entire application performance"

// For exploration tasks  
agent_type: "explore"
thoroughness: "quick" | "medium" | "very thorough"
example: "Find all React components using hooks"
```

## 📝 Project-Specific Context

This is a **Next.js static site** for Dr. Silas Aslan's professional landing page:

**Architecture**:
- Frontend: Next.js 16.0.6 with React 19
- Styling: TailwindCSS 4
- Content: JSON-based data files in `/data/`
- Deployment: Static export (no CMS)
- Languages: German only (previously 2, now corrected)

**Key Directories**:
- `/src/components/` - React components
- `/src/app/` - Next.js app router pages
- `/data/` - JSON content files
- `/public/images/` - Static assets and favicons
- `/out/` - Build output for deployment

**Common Tasks**:
- Content updates via JSON files
- Component modifications
- SEO metadata adjustments
- Performance optimizations
- Favicon and asset management

## 🎯 Best Practices

1. **Start with Explore** for code discovery
2. **Use General** for implementation work
3. **Always check JSON files** before component changes
4. **Verify favicon and metadata** after changes
5. **Test locally** before deployment
6. **Build with `npm run build`** for production

## 🔧 Deployment Process

1. Make changes in development
2. Test with `npx next dev -p 3006`
3. Build with `npm run build`
4. Deploy with `scp -r out/* all-inkl:/www/htdocs/w01fa976/silasaslan.com/`

## 📧 Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Deploy
scp -r out/* all-inkl:/www/htdocs/w01fa976/silasaslan.com/

# Test deployment
curl -s -o /dev/null -w "%{http_code}" https://www.silasaslan.com/
```

---

*Last updated: January 30, 2026*
*Project: Dr. Silas Aslan Landing Page*