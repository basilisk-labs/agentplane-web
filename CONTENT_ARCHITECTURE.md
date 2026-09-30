# Agentplane web content architecture

## Ownership

- Git is canonical for application code, visual components, EmDash schema, and baseline seed content.
- `basilisk-labs/agentplane` is canonical for product documentation.
- Production D1 is the live editorial projection for drafts, revisions, scheduling, and agent-authored posts.
- A CMS-only change is not durable project canon until it is exported back to Git or explicitly accepted as runtime-only editorial state.

EmDash seed is bootstrap data, not bidirectional synchronization. It must not overwrite later production editorial state on every deploy.

## Release-agent policy

A release agent may use EmDash MCP inside the same Agentplane task that cuts a release.

- Patch release: publish may be granted explicitly by release policy.
- Minor/major release: default to draft + explicit publication approval.
- Release posts may only claim facts supported by release evidence.
- Visual/component changes still go through Git and PR review.

## Deployment

Origin: https://v2.agentplane.org

Cloudflare Worker: `agentplane-v2`
D1: `agentplane-v2`
R2: `agentplane-v2-media`

The hostname is committed as a Wrangler Custom Domain so DNS/certificate provisioning is part of deploy configuration rather than undocumented dashboard state.
