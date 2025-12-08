import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`trust_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`alt\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`trust\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`trust_logos_order_idx\` ON \`trust_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`trust_logos_parent_id_idx\` ON \`trust_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`trust_logos_image_idx\` ON \`trust_logos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`trust_tags\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`trust\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`trust_tags_order_idx\` ON \`trust_tags\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`trust_tags_parent_id_idx\` ON \`trust_tags\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`trust\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text,
  	\`display_mode\` text DEFAULT 'logos' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`trust_order_idx\` ON \`trust\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`trust_parent_id_idx\` ON \`trust\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`trust_path_idx\` ON \`trust\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`prev_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`anchor_id\` text NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`preview\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`prev_items_order_idx\` ON \`prev_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`prev_items_parent_id_idx\` ON \`prev_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`preview\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'What you''ll find on this page' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`preview_order_idx\` ON \`preview\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`preview_parent_id_idx\` ON \`preview\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`preview_path_idx\` ON \`preview\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`proof\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text,
  	\`proof_type\` text DEFAULT 'screenshot' NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text NOT NULL,
  	\`context\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`proof_order_idx\` ON \`proof\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`proof_parent_id_idx\` ON \`proof\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`proof_path_idx\` ON \`proof\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`proof_image_idx\` ON \`proof\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`gate_form_fields\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` text NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`gate\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`gate_form_fields_order_idx\` ON \`gate_form_fields\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`gate_form_fields_parent_idx\` ON \`gate_form_fields\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`gate\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'inline' NOT NULL,
  	\`headline\` text NOT NULL,
  	\`description\` text,
  	\`preview_image_id\` integer,
  	\`button_text\` text DEFAULT 'Download Now' NOT NULL,
  	\`privacy_note\` text DEFAULT 'We respect your privacy. Unsubscribe anytime.',
  	\`success_message\` text DEFAULT 'Check your email for the download link!',
  	\`download_file_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`preview_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`download_file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`gate_order_idx\` ON \`gate\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`gate_parent_id_idx\` ON \`gate\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`gate_path_idx\` ON \`gate\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`gate_preview_image_idx\` ON \`gate\` (\`preview_image_id\`);`)
  await db.run(sql`CREATE INDEX \`gate_download_file_idx\` ON \`gate\` (\`download_file_id\`);`)
  await db.run(sql`CREATE TABLE \`chapter\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`chapter_number\` numeric,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`body\` text NOT NULL,
  	\`key_insight\` text,
  	\`visual_id\` integer,
  	\`callout_show_callout\` integer DEFAULT false,
  	\`callout_type\` text DEFAULT 'tip',
  	\`callout_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`visual_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`chapter_order_idx\` ON \`chapter\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`chapter_parent_id_idx\` ON \`chapter\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`chapter_path_idx\` ON \`chapter\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`chapter_visual_idx\` ON \`chapter\` (\`visual_id\`);`)
  await db.run(sql`CREATE TABLE \`toc_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`anchor_id\` text,
  	\`level\` text DEFAULT 'h2',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`toc\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`toc_items_order_idx\` ON \`toc_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`toc_items_parent_id_idx\` ON \`toc_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`toc\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'On This Page',
  	\`position\` text DEFAULT 'sidebar_sticky' NOT NULL,
  	\`show_progress\` integer DEFAULT false,
  	\`auto_generate\` integer DEFAULT true,
  	\`hide_on_mobile\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`toc_order_idx\` ON \`toc\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`toc_parent_id_idx\` ON \`toc\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`toc_path_idx\` ON \`toc\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`trust_logos\`;`)
  await db.run(sql`DROP TABLE \`trust_tags\`;`)
  await db.run(sql`DROP TABLE \`trust\`;`)
  await db.run(sql`DROP TABLE \`prev_items\`;`)
  await db.run(sql`DROP TABLE \`preview\`;`)
  await db.run(sql`DROP TABLE \`proof\`;`)
  await db.run(sql`DROP TABLE \`gate_form_fields\`;`)
  await db.run(sql`DROP TABLE \`gate\`;`)
  await db.run(sql`DROP TABLE \`chapter\`;`)
  await db.run(sql`DROP TABLE \`toc_items\`;`)
  await db.run(sql`DROP TABLE \`toc\`;`)
}
