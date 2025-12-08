import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`card_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`icon\` text,
  	\`description\` text,
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'top',
  	\`link_url\` text,
  	\`link_text\` text DEFAULT 'Learn more →',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`card_items_order_idx\` ON \`card_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`card_items_parent_id_idx\` ON \`card_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`card_items_image_idx\` ON \`card_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text,
  	\`subheadline\` text,
  	\`layout\` text DEFAULT 'grid-3' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cards_order_idx\` ON \`cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cards_parent_id_idx\` ON \`cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`cards_path_idx\` ON \`cards\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`card_items\`;`)
  await db.run(sql`DROP TABLE \`cards\`;`)
}
