npx prisma migrate dev --schema=prisma/schema_app.prisma --create-only --name main
npx prisma generate --schema=prisma/schema_app.prisma
npx prisma migrate dev --schema=prisma/schema_app.prisma resolve --applied 20250918124518
resolve --applied 20250918124518
npx prisma migrate dev --create-only --name add_new_tables