<p align="center"><img src="assets/nody-wordmark.svg" alt="Nody" width="142" height="40"></p>

# Nody

Nody is organized as a monorepo. Deployable applications live in `apps/`; shared capabilities live in `packages/` and are consumed by those applications.

```text
nody/
├── apps/
│   ├── web/             # Web client
│   ├── api/             # HTTP API
│   └── worker/          # Background jobs
├── packages/
│   ├── ui/              # Design system and shared UI components
│   ├── database/        # Schema, migrations, and data access
│   ├── auth/            # Authentication and authorization
│   └── config/          # Shared configuration
├── docs/                # Architecture documentation
└── infra/               # Infrastructure and deployment configuration
```
