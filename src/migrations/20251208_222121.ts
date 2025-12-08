import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`capabilities_blocks_hero\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_hero_order_idx\` ON \`capabilities_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_hero_parent_id_idx\` ON \`capabilities_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_hero_path_idx\` ON \`capabilities_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_hero_image_idx\` ON \`capabilities_blocks_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_workflow_steps\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_steps_order_idx\` ON \`capabilities_blocks_workflow_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_steps_parent_id_idx\` ON \`capabilities_blocks_workflow_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_steps_screenshot_idx\` ON \`capabilities_blocks_workflow_steps\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_workflow\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_order_idx\` ON \`capabilities_blocks_workflow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_parent_id_idx\` ON \`capabilities_blocks_workflow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_path_idx\` ON \`capabilities_blocks_workflow\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_workflow_visual_idx\` ON \`capabilities_blocks_workflow\` (\`visual_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_cta_trust_signals\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_cta_trust_signals_order_idx\` ON \`capabilities_blocks_cta_trust_signals\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_cta_trust_signals_parent_id_idx\` ON \`capabilities_blocks_cta_trust_signals\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_cta\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_cta_order_idx\` ON \`capabilities_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_cta_parent_id_idx\` ON \`capabilities_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_cta_path_idx\` ON \`capabilities_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_faq_questions\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_faq_questions_order_idx\` ON \`capabilities_blocks_faq_questions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_faq_questions_parent_id_idx\` ON \`capabilities_blocks_faq_questions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'Frequently Asked Questions' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_faq_order_idx\` ON \`capabilities_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_faq_parent_id_idx\` ON \`capabilities_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_faq_path_idx\` ON \`capabilities_blocks_faq\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_testimonial_quotes\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_quotes_order_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_quotes_parent_id_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_quotes_author_image_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`author_image_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_quotes_company_logo_idx\` ON \`capabilities_blocks_testimonial_quotes\` (\`company_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_blocks_testimonial\` (
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
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_order_idx\` ON \`capabilities_blocks_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_parent_id_idx\` ON \`capabilities_blocks_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_blocks_testimonial_path_idx\` ON \`capabilities_blocks_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_meta_keywords\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`keyword\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`capabilities_meta_keywords_order_idx\` ON \`capabilities_meta_keywords\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_meta_keywords_parent_id_idx\` ON \`capabilities_meta_keywords\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`capabilities\` (
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
  await db.run(sql`CREATE UNIQUE INDEX \`capabilities_slug_idx\` ON \`capabilities\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_og_image_idx\` ON \`capabilities\` (\`og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_updated_at_idx\` ON \`capabilities\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_created_at_idx\` ON \`capabilities\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`capabilities_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`capabilities_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`capabilities_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`capabilities_rels_order_idx\` ON \`capabilities_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_rels_parent_idx\` ON \`capabilities_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_rels_path_idx\` ON \`capabilities_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`capabilities_rels_capabilities_id_idx\` ON \`capabilities_rels\` (\`capabilities_id\`);`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_pains\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'list',
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`narrative\` text,
  	\`emotional_question\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pains\`("_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "narrative", "emotional_question", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "narrative", "emotional_question", "block_name" FROM \`pains\`;`)
  await db.run(sql`DROP TABLE \`pains\`;`)
  await db.run(sql`ALTER TABLE \`__new_pains\` RENAME TO \`pains\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`pains_order_idx\` ON \`pains\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_parent_id_idx\` ON \`pains\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pains_path_idx\` ON \`pains\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_intgr\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'grouped',
  	\`headline\` text NOT NULL,
  	\`subheadline\` text NOT NULL,
  	\`cta_text\` text,
  	\`cta_url\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_intgr\`("_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "cta_text", "cta_url", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "cta_text", "cta_url", "block_name" FROM \`intgr\`;`)
  await db.run(sql`DROP TABLE \`intgr\`;`)
  await db.run(sql`ALTER TABLE \`__new_intgr\` RENAME TO \`intgr\`;`)
  await db.run(sql`CREATE INDEX \`intgr_order_idx\` ON \`intgr\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`intgr_parent_id_idx\` ON \`intgr\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`intgr_path_idx\` ON \`intgr\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_related\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'cards',
  	\`headline\` text,
  	\`show_next_step\` integer DEFAULT true,
  	\`next_step_label\` text,
  	\`next_step_url\` text,
  	\`next_step_type\` text,
  	\`next_step_description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_related\`("_order", "_parent_id", "_path", "id", "variant", "headline", "show_next_step", "next_step_label", "next_step_url", "next_step_type", "next_step_description", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "show_next_step", "next_step_label", "next_step_url", "next_step_type", "next_step_description", "block_name" FROM \`related\`;`)
  await db.run(sql`DROP TABLE \`related\`;`)
  await db.run(sql`ALTER TABLE \`__new_related\` RENAME TO \`related\`;`)
  await db.run(sql`CREATE INDEX \`related_order_idx\` ON \`related\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`related_parent_id_idx\` ON \`related\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`related_path_idx\` ON \`related\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_compare\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`comparison_type\` text DEFAULT 'category' NOT NULL,
  	\`conclusion\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_compare\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "comparison_type", "conclusion", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "comparison_type", "conclusion", "block_name" FROM \`compare\`;`)
  await db.run(sql`DROP TABLE \`compare\`;`)
  await db.run(sql`ALTER TABLE \`__new_compare\` RENAME TO \`compare\`;`)
  await db.run(sql`CREATE INDEX \`compare_order_idx\` ON \`compare\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`compare_parent_id_idx\` ON \`compare\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`compare_path_idx\` ON \`compare\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_feats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_feats\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name" FROM \`feats\`;`)
  await db.run(sql`DROP TABLE \`feats\`;`)
  await db.run(sql`ALTER TABLE \`__new_feats\` RENAME TO \`feats\`;`)
  await db.run(sql`CREATE INDEX \`feats_order_idx\` ON \`feats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feats_parent_id_idx\` ON \`feats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`feats_path_idx\` ON \`feats\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_ucase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_ucase\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name" FROM \`ucase\`;`)
  await db.run(sql`DROP TABLE \`ucase\`;`)
  await db.run(sql`ALTER TABLE \`__new_ucase\` RENAME TO \`ucase\`;`)
  await db.run(sql`CREATE INDEX \`ucase_order_idx\` ON \`ucase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ucase_parent_id_idx\` ON \`ucase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ucase_path_idx\` ON \`ucase\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_preview\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'What you''ll find on this page' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_preview\`("_order", "_parent_id", "_path", "id", "headline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "block_name" FROM \`preview\`;`)
  await db.run(sql`DROP TABLE \`preview\`;`)
  await db.run(sql`ALTER TABLE \`__new_preview\` RENAME TO \`preview\`;`)
  await db.run(sql`CREATE INDEX \`preview_order_idx\` ON \`preview\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`preview_parent_id_idx\` ON \`preview\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`preview_path_idx\` ON \`preview\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_proof\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`capabilities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_proof\`("_order", "_parent_id", "_path", "id", "headline", "proof_type", "image_id", "caption", "context", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "proof_type", "image_id", "caption", "context", "block_name" FROM \`proof\`;`)
  await db.run(sql`DROP TABLE \`proof\`;`)
  await db.run(sql`ALTER TABLE \`__new_proof\` RENAME TO \`proof\`;`)
  await db.run(sql`CREATE INDEX \`proof_order_idx\` ON \`proof\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`proof_parent_id_idx\` ON \`proof\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`proof_path_idx\` ON \`proof\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`proof_image_idx\` ON \`proof\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_homepage_blocks_hero\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_homepage_blocks_hero\`("_order", "_parent_id", "_path", "id", "eyebrow", "headline", "headline_emphasis_word", "subheadline", "supporting_text", "primary_cta_text", "primary_cta_url", "secondary_cta_text", "secondary_cta_url", "image_id", "trust_note", "block_name") SELECT "_order", "_parent_id", "_path", "id", "eyebrow", "headline", "headline_emphasis_word", "subheadline", "supporting_text", "primary_cta_text", "primary_cta_url", "secondary_cta_text", "secondary_cta_url", "image_id", "trust_note", "block_name" FROM \`homepage_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_hero\`;`)
  await db.run(sql`ALTER TABLE \`__new_homepage_blocks_hero\` RENAME TO \`homepage_blocks_hero\`;`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_order_idx\` ON \`homepage_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_parent_id_idx\` ON \`homepage_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_path_idx\` ON \`homepage_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_image_idx\` ON \`homepage_blocks_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_int_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`status\` text DEFAULT 'live' NOT NULL,
  	\`featured\` integer DEFAULT false,
  	\`logo_id\` integer,
  	\`description\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`groups\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_int_items\`("_order", "_parent_id", "id", "name", "status", "featured", "logo_id", "description") SELECT "_order", "_parent_id", "id", "name", "status", "featured", "logo_id", "description" FROM \`int_items\`;`)
  await db.run(sql`DROP TABLE \`int_items\`;`)
  await db.run(sql`ALTER TABLE \`__new_int_items\` RENAME TO \`int_items\`;`)
  await db.run(sql`CREATE INDEX \`int_items_order_idx\` ON \`int_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`int_items_parent_id_idx\` ON \`int_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`int_items_logo_idx\` ON \`int_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_ai\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text NOT NULL,
  	\`body\` text NOT NULL,
  	\`visual_id\` integer,
  	\`disclaimer\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`visual_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_ai\`("_order", "_parent_id", "_path", "id", "eyebrow", "headline", "subheadline", "body", "visual_id", "disclaimer", "block_name") SELECT "_order", "_parent_id", "_path", "id", "eyebrow", "headline", "subheadline", "body", "visual_id", "disclaimer", "block_name" FROM \`ai\`;`)
  await db.run(sql`DROP TABLE \`ai\`;`)
  await db.run(sql`ALTER TABLE \`__new_ai\` RENAME TO \`ai\`;`)
  await db.run(sql`CREATE INDEX \`ai_order_idx\` ON \`ai\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ai_parent_id_idx\` ON \`ai\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ai_path_idx\` ON \`ai\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`ai_visual_idx\` ON \`ai\` (\`visual_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`capabilities_id\` integer REFERENCES capabilities(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_capabilities_id_idx\` ON \`payload_locked_documents_rels\` (\`capabilities_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`capabilities_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_workflow_steps\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_workflow\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_cta_trust_signals\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_faq_questions\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_faq\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_testimonial_quotes\`;`)
  await db.run(sql`DROP TABLE \`capabilities_blocks_testimonial\`;`)
  await db.run(sql`DROP TABLE \`capabilities_meta_keywords\`;`)
  await db.run(sql`DROP TABLE \`capabilities\`;`)
  await db.run(sql`DROP TABLE \`capabilities_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_pains\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'list',
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`narrative\` text,
  	\`emotional_question\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pains\`("_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "narrative", "emotional_question", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "narrative", "emotional_question", "block_name" FROM \`pains\`;`)
  await db.run(sql`DROP TABLE \`pains\`;`)
  await db.run(sql`ALTER TABLE \`__new_pains\` RENAME TO \`pains\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`pains_order_idx\` ON \`pains\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_parent_id_idx\` ON \`pains\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pains_path_idx\` ON \`pains\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_preview\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`headline\` text DEFAULT 'What you''ll find on this page' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_preview\`("_order", "_parent_id", "_path", "id", "headline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "block_name" FROM \`preview\`;`)
  await db.run(sql`DROP TABLE \`preview\`;`)
  await db.run(sql`ALTER TABLE \`__new_preview\` RENAME TO \`preview\`;`)
  await db.run(sql`CREATE INDEX \`preview_order_idx\` ON \`preview\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`preview_parent_id_idx\` ON \`preview\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`preview_path_idx\` ON \`preview\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_feats\` (
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
  await db.run(sql`INSERT INTO \`__new_feats\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name" FROM \`feats\`;`)
  await db.run(sql`DROP TABLE \`feats\`;`)
  await db.run(sql`ALTER TABLE \`__new_feats\` RENAME TO \`feats\`;`)
  await db.run(sql`CREATE INDEX \`feats_order_idx\` ON \`feats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`feats_parent_id_idx\` ON \`feats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`feats_path_idx\` ON \`feats\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_proof\` (
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
  await db.run(sql`INSERT INTO \`__new_proof\`("_order", "_parent_id", "_path", "id", "headline", "proof_type", "image_id", "caption", "context", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "proof_type", "image_id", "caption", "context", "block_name" FROM \`proof\`;`)
  await db.run(sql`DROP TABLE \`proof\`;`)
  await db.run(sql`ALTER TABLE \`__new_proof\` RENAME TO \`proof\`;`)
  await db.run(sql`CREATE INDEX \`proof_order_idx\` ON \`proof\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`proof_parent_id_idx\` ON \`proof\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`proof_path_idx\` ON \`proof\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`proof_image_idx\` ON \`proof\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_intgr\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'grouped',
  	\`headline\` text NOT NULL,
  	\`subheadline\` text NOT NULL,
  	\`cta_text\` text,
  	\`cta_url\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_intgr\`("_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "cta_text", "cta_url", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "subheadline", "cta_text", "cta_url", "block_name" FROM \`intgr\`;`)
  await db.run(sql`DROP TABLE \`intgr\`;`)
  await db.run(sql`ALTER TABLE \`__new_intgr\` RENAME TO \`intgr\`;`)
  await db.run(sql`CREATE INDEX \`intgr_order_idx\` ON \`intgr\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`intgr_parent_id_idx\` ON \`intgr\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`intgr_path_idx\` ON \`intgr\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_ucase\` (
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
  await db.run(sql`INSERT INTO \`__new_ucase\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "block_name" FROM \`ucase\`;`)
  await db.run(sql`DROP TABLE \`ucase\`;`)
  await db.run(sql`ALTER TABLE \`__new_ucase\` RENAME TO \`ucase\`;`)
  await db.run(sql`CREATE INDEX \`ucase_order_idx\` ON \`ucase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ucase_parent_id_idx\` ON \`ucase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ucase_path_idx\` ON \`ucase\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_compare\` (
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
  await db.run(sql`INSERT INTO \`__new_compare\`("_order", "_parent_id", "_path", "id", "headline", "subheadline", "comparison_type", "conclusion", "block_name") SELECT "_order", "_parent_id", "_path", "id", "headline", "subheadline", "comparison_type", "conclusion", "block_name" FROM \`compare\`;`)
  await db.run(sql`DROP TABLE \`compare\`;`)
  await db.run(sql`ALTER TABLE \`__new_compare\` RENAME TO \`compare\`;`)
  await db.run(sql`CREATE INDEX \`compare_order_idx\` ON \`compare\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`compare_parent_id_idx\` ON \`compare\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`compare_path_idx\` ON \`compare\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_related\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'cards',
  	\`headline\` text,
  	\`show_next_step\` integer DEFAULT true,
  	\`next_step_label\` text,
  	\`next_step_url\` text,
  	\`next_step_type\` text,
  	\`next_step_description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_related\`("_order", "_parent_id", "_path", "id", "variant", "headline", "show_next_step", "next_step_label", "next_step_url", "next_step_type", "next_step_description", "block_name") SELECT "_order", "_parent_id", "_path", "id", "variant", "headline", "show_next_step", "next_step_label", "next_step_url", "next_step_type", "next_step_description", "block_name" FROM \`related\`;`)
  await db.run(sql`DROP TABLE \`related\`;`)
  await db.run(sql`ALTER TABLE \`__new_related\` RENAME TO \`related\`;`)
  await db.run(sql`CREATE INDEX \`related_order_idx\` ON \`related\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`related_parent_id_idx\` ON \`related\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`related_path_idx\` ON \`related\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_int_items\` (
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
  await db.run(sql`INSERT INTO \`__new_int_items\`("_order", "_parent_id", "id", "name", "status", "featured", "logo_id", "description") SELECT "_order", "_parent_id", "id", "name", "status", "featured", "logo_id", "description" FROM \`int_items\`;`)
  await db.run(sql`DROP TABLE \`int_items\`;`)
  await db.run(sql`ALTER TABLE \`__new_int_items\` RENAME TO \`int_items\`;`)
  await db.run(sql`CREATE INDEX \`int_items_order_idx\` ON \`int_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`int_items_parent_id_idx\` ON \`int_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`int_items_logo_idx\` ON \`int_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_homepage_blocks_hero\` (
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
  await db.run(sql`INSERT INTO \`__new_homepage_blocks_hero\`("_order", "_parent_id", "_path", "id", "eyebrow", "headline", "headline_emphasis_word", "subheadline", "supporting_text", "primary_cta_text", "primary_cta_url", "secondary_cta_text", "secondary_cta_url", "image_id", "trust_note", "block_name") SELECT "_order", "_parent_id", "_path", "id", "eyebrow", "headline", "headline_emphasis_word", "subheadline", "supporting_text", "primary_cta_text", "primary_cta_url", "secondary_cta_text", "secondary_cta_url", "image_id", "trust_note", "block_name" FROM \`homepage_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_hero\`;`)
  await db.run(sql`ALTER TABLE \`__new_homepage_blocks_hero\` RENAME TO \`homepage_blocks_hero\`;`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_order_idx\` ON \`homepage_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_parent_id_idx\` ON \`homepage_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_path_idx\` ON \`homepage_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_hero_image_idx\` ON \`homepage_blocks_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_ai\` (
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
  await db.run(sql`INSERT INTO \`__new_ai\`("_order", "_parent_id", "_path", "id", "eyebrow", "headline", "subheadline", "body", "visual_id", "disclaimer", "block_name") SELECT "_order", "_parent_id", "_path", "id", "eyebrow", "headline", "subheadline", "body", "visual_id", "disclaimer", "block_name" FROM \`ai\`;`)
  await db.run(sql`DROP TABLE \`ai\`;`)
  await db.run(sql`ALTER TABLE \`__new_ai\` RENAME TO \`ai\`;`)
  await db.run(sql`CREATE INDEX \`ai_order_idx\` ON \`ai\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`ai_parent_id_idx\` ON \`ai\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`ai_path_idx\` ON \`ai\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`ai_visual_idx\` ON \`ai\` (\`visual_id\`);`)
}
