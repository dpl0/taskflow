# TaskFlow - gRPC + SQLAlchemy + React + moonrepo

Monorepo with moon.

## Stack
- Backend: Python, gRPC, SQLAlchemy (SQLite), pytest
- Frontend: TypeScript, React, Vite, @improbable-eng/grpc-web, Vitest
- Proto: proto/tasks.proto
- Orchestration: moonrepo

## Structure
```
apps/backend - Python gRPC server
apps/frontend - React client
proto/tasks.proto - contract
```

## Running (requires moon, python3.11, node20)

moon run backend:install
moon run backend:generate  # generates Python gRPC code from proto
moon run backend:run  # :50051 gRPC, :8000 HTTP bridge for web

in another terminal:
moon run frontend:install
moon run frontend:dev  # http://localhost:5173

## Tests
moon run backend:test
moon run frontend:test
moon run :test  # all at once
```

Project: TaskFlow - CRUD for tasks with statuses, priorities, and filters.
