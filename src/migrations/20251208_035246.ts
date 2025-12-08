import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`int_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`status\` text DEFAULT 'live' NOT NULL,
  	\`featured\` integer DEFAULT false,
  	\`logo_id\` integer NOT NULL,
  	\`description\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`groups\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`int_items_order_idx\` ON \`int_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`int_items_parent_id_idx\` ON \`int_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`int_items_logo_idx\` ON \`int_items\` (\`logo_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`int_items\`;`)
}
