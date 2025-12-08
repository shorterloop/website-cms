import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`homepage_blocks_workflow_steps\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_workflow\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_steps_order_idx\` ON \`homepage_blocks_workflow_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_steps_parent_id_idx\` ON \`homepage_blocks_workflow_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_steps_screenshot_idx\` ON \`homepage_blocks_workflow_steps\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_workflow\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_order_idx\` ON \`homepage_blocks_workflow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_parent_id_idx\` ON \`homepage_blocks_workflow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_path_idx\` ON \`homepage_blocks_workflow\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_workflow_visual_idx\` ON \`homepage_blocks_workflow\` (\`visual_id\`);`)
  await db.run(sql`CREATE TABLE \`pains_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text,
  	\`severity\` text,
  	\`consequence\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pains\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pains_pain_points_order_idx\` ON \`pains_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_pain_points_parent_id_idx\` ON \`pains_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pains_antagonists\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pains\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pains_antagonists_order_idx\` ON \`pains_antagonists\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_antagonists_parent_id_idx\` ON \`pains_antagonists\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pains_losses\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pains\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pains_losses_order_idx\` ON \`pains_losses\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_losses_parent_id_idx\` ON \`pains_losses\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pains\` (
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
  await db.run(sql`CREATE INDEX \`pains_order_idx\` ON \`pains\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pains_parent_id_idx\` ON \`pains\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pains_path_idx\` ON \`pains\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`xform_transformations\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`before_title\` text NOT NULL,
  	\`after_title\` text NOT NULL,
  	\`before_detail\` text,
  	\`after_detail\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`xform\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`xform_transformations_order_idx\` ON \`xform_transformations\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`xform_transformations_parent_id_idx\` ON \`xform_transformations\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`xform_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`xform\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`xform_stats_order_idx\` ON \`xform_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`xform_stats_parent_id_idx\` ON \`xform_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`xform\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'side_by_side',
  	\`eyebrow\` text,
  	\`headline\` text NOT NULL,
  	\`subheadline\` text,
  	\`before_column_label\` text DEFAULT 'Before',
  	\`after_column_label\` text DEFAULT 'After',
  	\`show_stats_bar\` integer DEFAULT false,
  	\`positioning_statement\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`xform_order_idx\` ON \`xform\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`xform_parent_id_idx\` ON \`xform\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`xform_path_idx\` ON \`xform\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`relationship_type\` text,
  	\`content_type\` text,
  	\`description\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`related\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`items_order_idx\` ON \`items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`items_parent_id_idx\` ON \`items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`items_image_idx\` ON \`items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`groups\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`group_name\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`intgr\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`groups_order_idx\` ON \`groups\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`groups_parent_id_idx\` ON \`groups\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`methods\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`intgr\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`methods_order_idx\` ON \`methods\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`methods_parent_id_idx\` ON \`methods\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`intgr\` (
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
  await db.run(sql`CREATE INDEX \`intgr_order_idx\` ON \`intgr\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`intgr_parent_id_idx\` ON \`intgr\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`intgr_path_idx\` ON \`intgr\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`related\` (
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
  await db.run(sql`CREATE INDEX \`related_order_idx\` ON \`related\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`related_parent_id_idx\` ON \`related\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`related_path_idx\` ON \`related\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`homepage_blocks_workflow_steps\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_workflow\`;`)
  await db.run(sql`DROP TABLE \`pains_pain_points\`;`)
  await db.run(sql`DROP TABLE \`pains_antagonists\`;`)
  await db.run(sql`DROP TABLE \`pains_losses\`;`)
  await db.run(sql`DROP TABLE \`pains\`;`)
  await db.run(sql`DROP TABLE \`xform_transformations\`;`)
  await db.run(sql`DROP TABLE \`xform_stats\`;`)
  await db.run(sql`DROP TABLE \`xform\`;`)
  await db.run(sql`DROP TABLE \`items\`;`)
  await db.run(sql`DROP TABLE \`groups\`;`)
  await db.run(sql`DROP TABLE \`methods\`;`)
  await db.run(sql`DROP TABLE \`intgr\`;`)
  await db.run(sql`DROP TABLE \`related\`;`)
}
