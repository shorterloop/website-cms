import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Create capabilities-specific block tables
  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_hero\` (
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
  	\`image_id\` integer,
  	\`trust_note\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_hero_order_idx\` ON \`capabilities_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_hero_parent_id_idx\` ON \`capabilities_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_hero_path_idx\` ON \`capabilities_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_hero_image_idx\` ON \`capabilities_blocks_hero\` (\`image_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_workflow_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`step_number\` numeric NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text,
  	\`is_pivot_point\` integer DEFAULT false,
  	\`screenshot_id\` integer,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities_blocks_workflow\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_steps_order_idx\` ON \`capabilities_blocks_workflow_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_steps_parent_id_idx\` ON \`capabilities_blocks_workflow_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_steps_screenshot_idx\` ON \`capabilities_blocks_workflow_steps\` (\`screenshot_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_workflow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'flow_line',
  	\`eyebrow\` text,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`conclusion\` text,
  	\`visual_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`visual_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_order_idx\` ON \`capabilities_blocks_workflow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_parent_id_idx\` ON \`capabilities_blocks_workflow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_path_idx\` ON \`capabilities_blocks_workflow\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_workflow_visual_idx\` ON \`capabilities_blocks_workflow\` (\`visual_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_cta_trust_signals\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_cta_trust_signals_order_idx\` ON \`capabilities_blocks_cta_trust_signals\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_cta_trust_signals_parent_id_idx\` ON \`capabilities_blocks_cta_trust_signals\` (\`_parent_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_cta\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_cta_order_idx\` ON \`capabilities_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_cta_parent_id_idx\` ON \`capabilities_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_cta_path_idx\` ON \`capabilities_blocks_cta\` (\`_path\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_faq_questions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`category\` text,
  	\`schema_eligible\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_faq_questions_order_idx\` ON \`capabilities_blocks_faq_questions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_faq_questions_parent_id_idx\` ON \`capabilities_blocks_faq_questions\` (\`_parent_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'Frequently Asked Questions' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_faq_order_idx\` ON \`capabilities_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_faq_parent_id_idx\` ON \`capabilities_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_faq_path_idx\` ON \`capabilities_blocks_faq\` (\`_path\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_testimonial_quotes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`quote\` text NOT NULL,
  	\`context\` text,
  	\`author_name\` text NOT NULL,
  	\`author_title\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`company_logo_id\` integer,
  	\`rating\` numeric,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`company_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_quotes_order_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_quotes_parent_id_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_quotes_author_image_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`author_image_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_quotes_company_logo_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`company_logo_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_blocks_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'single',
  	\`headline\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_order_idx\` ON \`capabilities_blocks_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_parent_id_idx\` ON \`capabilities_blocks_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_blocks_testimonial_path_idx\` ON \`capabilities_blocks_testimonial\` (\`_path\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_meta_keywords\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`keyword\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_meta_keywords_order_idx\` ON \`capabilities_meta_keywords\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_meta_keywords_parent_id_idx\` ON \`capabilities_meta_keywords\` (\`_parent_id\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`display_name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`parent_cluster\` text NOT NULL,
  	\`reason_this_capability_exists\` text NOT NULL,
  	\`pricing_note\` text,
  	\`pricing_note_type\` text,
  	\`recommended_next_step_url\` text NOT NULL,
  	\`recommended_next_step_label\` text NOT NULL,
  	\`related_article_url\` text,
  	\`related_article_title\` text,
  	\`meta_title\` text NOT NULL,
  	\`meta_description\` text NOT NULL,
  	\`og_image_id\` integer,
  	\`canonical_url\` text,
  	\`no_index\` integer DEFAULT false,
  	\`show_toc\` integer DEFAULT true,
  	\`toc_position\` text DEFAULT 'sidebar_sticky',
  	\`show_progress\` integer DEFAULT false,
  	\`status\` text DEFAULT 'draft',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS \`capabilities_slug_idx\` ON \`capabilities\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_og_image_idx\` ON \`capabilities\` (\`og_image_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_updated_at_idx\` ON \`capabilities\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_created_at_idx\` ON \`capabilities\` (\`created_at\`);`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS \`capabilities_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`capabilities_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`capabilities_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_rels_order_idx\` ON \`capabilities_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_rels_parent_idx\` ON \`capabilities_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_rels_path_idx\` ON \`capabilities_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`capabilities_rels_capabilities_id_idx\` ON \`capabilities_rels\` (\`capabilities_id\`);`)

  // Add capabilities_id to payload_locked_documents_rels (ignore if column already exists)
  try {
    await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`capabilities_id\` integer REFERENCES capabilities(id);`)
  } catch (e) {
    // Column may already exist from partial migration
  }
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`payload_locked_documents_rels_capabilities_id_idx\` ON \`payload_locked_documents_rels\` (\`capabilities_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_hero\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_workflow_steps\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_workflow\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_cta_trust_signals\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_cta\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_faq_questions\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_faq\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_testimonial_quotes\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_blocks_testimonial\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_meta_keywords\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`capabilities_rels\`;`)
}
