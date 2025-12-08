import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`headline\` text NOT NULL,
  	\`headline_emphasis_word\` text,
  	\`subheadline\` text NOT NULL,
  	\`supporting_text\` text,
  	\`primary_cta_text\` text NOT NULL,
  	\`primary_cta_url\` text NOT NULL,
  	\`secondary_cta_text\` text,
  	\`secondary_cta_url\` text,
  	\`image_id\` integer NOT NULL,
  	\`trust_note\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_order_idx\` ON \`homepage_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_parent_id_idx\` ON \`homepage_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_path_idx\` ON \`homepage_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_image_idx\` ON \`homepage_blocks_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_cta_trust_signals\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_cta_trust_signals_order_idx\` ON \`homepage_blocks_cta_trust_signals\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_cta_trust_signals_parent_id_idx\` ON \`homepage_blocks_cta_trust_signals\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'standard',
  	\`show_logo_mark\` integer DEFAULT false,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`primary_cta_text\` text NOT NULL,
  	\`primary_cta_url\` text NOT NULL,
  	\`secondary_cta_text\` text,
  	\`secondary_cta_url\` text,
  	\`show_trust_signals\` integer DEFAULT false,
  	\`additional_message\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_cta_order_idx\` ON \`homepage_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_cta_parent_id_idx\` ON \`homepage_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_cta_path_idx\` ON \`homepage_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`homepage\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`og_image_id\` integer,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_og_image_idx\` ON \`homepage\` (\`og_image_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_cta_trust_signals\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`homepage\`;`)
}
