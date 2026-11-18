# Infrastructure

Hosting, deployment and domains: the parts that live outside this repo (in Azure and Namecheap) and would otherwise have to be worked out again later. Update this file whenever any of it changes. For why the site is a static export on Azure at all, see `docs/DECISIONS.md`.

## Azure

- **Subscription:** "Our Economy", a personal subscription owned by the founder. It's separate from the "New Economy Hub" subscription on purpose, so each project's costs and access stay separate.
  - New subscriptions must register a resource provider before using it. Static Web Apps needed `az provider register --namespace Microsoft.Web --wait` (first hit 2026-11-17 as `MissingSubscriptionRegistration`).
- **Resource group:** `rg-oureconomy-net`, West US 2.
- **Static Web App:** `oureconomy-net`, Free tier, West US 2.
  - Default hostname: `happy-coast-0d9ea8c1e.4.azurestaticapps.net`. This is what the DNS records point at. It only changes if the resource is deleted and recreated. It redirects to `https://oureconomy.net/`.
  - Deploys on every push to `main` via `.github/workflows/azure-static-web-apps-happy-coast-0d9ea8c1e.yml`, which Azure generated on 2026-11-17. It can also be run by hand (`workflow_dispatch`).
  - Every open pull request from a branch in this repo gets a temporary preview site, deleted when the PR closes. The deploy job posts the preview URL as a PR comment, which is why the job has `issues`/`pull-requests: write` permissions. Pull requests from forks don't get a preview: they can't read the deploy token. They still get the build check from `ci.yml`.
  - **The Free tier allows at most 3 preview environments at once.** A 4th open PR's deploy job fails with `already has the maximum number of staging environments`. Its build check still passes. Check usage with `az staticwebapp environment list -n oureconomy-net -g rg-oureconomy-net`.
  - The deploy token is the GitHub Actions secret `AZURE_STATIC_WEB_APPS_API_TOKEN_HAPPY_COAST_0D9EA8C1E`, which Azure added automatically. Only regenerate it if the resource changes.

## Domains

`oureconomy.net` is registered at Namecheap, and DNS is managed there (Advanced DNS), not in Azure DNS.

| Record | Host | Value |
|---|---|---|
| A (or ALIAS) | `@` | resolves to the Static Web App (`20.69.69.104` on 2026-11-18) |
| CNAME | `www` | `happy-coast-0d9ea8c1e.4.azurestaticapps.net` |
| TXT | `@` | `v=spf1 include:spf.efwd.registrar-servers.com ~all` (Namecheap email forwarding) |

- Both `oureconomy.net` and `www.oureconomy.net` are custom domains on the Static Web App, with Azure-managed HTTPS certificates. The TXT record Azure used to validate the apex domain was removed after validation.
- **Main address: `https://oureconomy.net`**, set as the default domain in the Azure portal (Static Web App → Custom domains). Because it's the default, Azure redirects (301) `www.oureconomy.net` and the `azurestaticapps.net` hostname to it, and plain http to https. No redirect rules are needed in the repo.
