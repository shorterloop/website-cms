import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`homepage_blocks_faq_questions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`category\` text,
  	\`schema_eligible\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_faq_questions_order_idx\` ON \`homepage_blocks_faq_questions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_faq_questions_parent_id_idx\` ON \`homepage_blocks_faq_questions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'Frequently Asked Questions' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_faq_order_idx\` ON \`homepage_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_faq_parent_id_idx\` ON \`homepage_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_faq_path_idx\` ON \`homepage_blocks_faq\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`cmp_cols\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`is_self\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`compare\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cmp_cols_order_idx\` ON \`cmp_cols\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cmp_cols_parent_id_idx\` ON \`cmp_cols\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`cmp_vals\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`column_index\` numeric NOT NULL,
  	\`value\` text NOT NULL,
  	\`highlight\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cmp_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cmp_vals_order_idx\` ON \`cmp_vals\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cmp_vals_parent_id_idx\` ON \`cmp_vals\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`cmp_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`compare\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cmp_rows_order_idx\` ON \`cmp_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cmp_rows_parent_id_idx\` ON \`cmp_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`compare\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`comparison_type\` text DEFAULT 'category' NOT NULL,
  	\`conclusion\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`compare_order_idx\` ON \`compare\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`compare_parent_id_idx\` ON \`compare\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`compare_path_idx\` ON \`compare\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`feat_ben\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`feat_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`feat_ben_order_idx\` ON \`feat_ben\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feat_ben_parent_id_idx\` ON \`feat_ben\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`feat_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`feats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`feat_hero_order_idx\` ON \`feat_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feat_hero_parent_id_idx\` ON \`feat_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`feat_hero_image_idx\` ON \`feat_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`feat_add\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`feats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`feat_add_order_idx\` ON \`feat_add\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feat_add_parent_id_idx\` ON \`feat_add\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`feats\` (
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
  await db.run(sql`CREATE INDEX \`feats_order_idx\` ON \`feats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feats_parent_id_idx\` ON \`feats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`feats_path_idx\` ON \`feats\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`cap_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`capability_slug\` text NOT NULL,
  	\`capability_name\` text NOT NULL,
  	\`role_in_solution\` text NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`caps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cap_links_order_idx\` ON \`cap_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cap_links_parent_id_idx\` ON \`cap_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`caps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'Powered By' NOT NULL,
  	\`subheadline\` text,
  	\`cta_text\` text,
  	\`cta_url\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`caps_order_idx\` ON \`caps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`caps_parent_id_idx\` ON \`caps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`caps_path_idx\` ON \`caps\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`uc_results\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`has_metric\` integer DEFAULT false NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`uc_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`uc_results_order_idx\` ON \`uc_results\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`uc_results_parent_id_idx\` ON \`uc_results\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`uc_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`company_type\` text,
  	\`challenge\` text NOT NULL,
  	\`solution\` text NOT NULL,
  	\`show_quote\` integer DEFAULT false,
  	\`quote_text\` text,
  	\`quote_author_name\` text,
  	\`quote_author_title\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`ucase\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`uc_items_order_idx\` ON \`uc_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`uc_items_parent_id_idx\` ON \`uc_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`uc_items_image_idx\` ON \`uc_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`ucase\` (
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
  await db.run(sql`CREATE INDEX \`ucase_order_idx\` ON \`ucase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ucase_parent_id_idx\` ON \`ucase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ucase_path_idx\` ON \`ucase\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`homepage_blocks_faq_questions\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_faq\`;`)
  await db.run(sql`DROP TABLE \`cmp_cols\`;`)
  await db.run(sql`DROP TABLE \`cmp_vals\`;`)
  await db.run(sql`DROP TABLE \`cmp_rows\`;`)
  await db.run(sql`DROP TABLE \`compare\`;`)
  await db.run(sql`DROP TABLE \`feat_ben\`;`)
  await db.run(sql`DROP TABLE \`feat_hero\`;`)
  await db.run(sql`DROP TABLE \`feat_add\`;`)
  await db.run(sql`DROP TABLE \`feats\`;`)
  await db.run(sql`DROP TABLE \`cap_links\`;`)
  await db.run(sql`DROP TABLE \`caps\`;`)
  await db.run(sql`DROP TABLE \`uc_results\`;`)
  await db.run(sql`DROP TABLE \`uc_items\`;`)
  await db.run(sql`DROP TABLE \`ucase\`;`)
}
