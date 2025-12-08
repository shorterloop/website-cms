import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`ai_caps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`ai\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`ai_caps_order_idx\` ON \`ai_caps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ai_caps_parent_id_idx\` ON \`ai_caps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`ai\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text NOT NULL,
  	\`body\` text NOT NULL,
  	\`visual_id\` integer NOT NULL,
  	\`disclaimer\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`visual_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`ai_order_idx\` ON \`ai\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ai_parent_id_idx\` ON \`ai\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ai_path_idx\` ON \`ai\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`ai_visual_idx\` ON \`ai\` (\`visual_id\`);`)
  await db.run(sql`CREATE TABLE \`clust_feats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`clust_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`clust_feats_order_idx\` ON \`clust_feats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`clust_feats_parent_id_idx\` ON \`clust_feats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`clust_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	\`link_url\` text NOT NULL,
  	\`link_text\` text DEFAULT 'Explore →' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`clusters\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`clust_items_order_idx\` ON \`clust_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`clust_items_parent_id_idx\` ON \`clust_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`clusters\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`clusters_order_idx\` ON \`clusters\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`clusters_parent_id_idx\` ON \`clusters\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`clusters_path_idx\` ON \`clusters\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`rootc_gaps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`gap\` text NOT NULL,
  	\`consequence\` text NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`rootc\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`rootc_gaps_order_idx\` ON \`rootc_gaps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`rootc_gaps_parent_id_idx\` ON \`rootc_gaps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`rootc\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`explanation\` text NOT NULL,
  	\`reframe\` text NOT NULL,
  	\`reframe_highlight\` text,
  	\`visual_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`visual_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`rootc_order_idx\` ON \`rootc\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`rootc_parent_id_idx\` ON \`rootc\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`rootc_path_idx\` ON \`rootc\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`rootc_visual_idx\` ON \`rootc\` (\`visual_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`ai_caps\`;`)
  await db.run(sql`DROP TABLE \`ai\`;`)
  await db.run(sql`DROP TABLE \`clust_feats\`;`)
  await db.run(sql`DROP TABLE \`clust_items\`;`)
  await db.run(sql`DROP TABLE \`clusters\`;`)
  await db.run(sql`DROP TABLE \`rootc_gaps\`;`)
  await db.run(sql`DROP TABLE \`rootc\`;`)
}
