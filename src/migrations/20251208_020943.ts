import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`homepage_blocks_testimonial_quotes\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_quotes_order_idx\` ON \`homepage_blocks_testimonial_quotes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_quotes_parent_id_idx\` ON \`homepage_blocks_testimonial_quotes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_quotes_author_image_idx\` ON \`homepage_blocks_testimonial_quotes\` (\`author_image_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_quotes_company_logo_idx\` ON \`homepage_blocks_testimonial_quotes\` (\`company_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'single',
  	\`headline\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_order_idx\` ON \`homepage_blocks_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_parent_id_idx\` ON \`homepage_blocks_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_testimonial_path_idx\` ON \`homepage_blocks_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_metrics_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`context\` text,
  	\`highlighted\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_metrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_metrics_stats_order_idx\` ON \`homepage_blocks_metrics_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_metrics_stats_parent_id_idx\` ON \`homepage_blocks_metrics_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_blocks_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`variant\` text DEFAULT 'bar',
  	\`headline\` text,
  	\`subheadline\` text,
  	\`source\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_blocks_metrics_order_idx\` ON \`homepage_blocks_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_metrics_parent_id_idx\` ON \`homepage_blocks_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_blocks_metrics_path_idx\` ON \`homepage_blocks_metrics\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`homepage_meta_keywords\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`keyword\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_meta_keywords_order_idx\` ON \`homepage_meta_keywords\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_meta_keywords_parent_id_idx\` ON \`homepage_meta_keywords\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`homepage\` ADD \`canonical_url\` text;`)
  await db.run(sql`ALTER TABLE \`homepage\` ADD \`no_index\` integer DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`homepage_blocks_testimonial_quotes\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_testimonial\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_metrics_stats\`;`)
  await db.run(sql`DROP TABLE \`homepage_blocks_metrics\`;`)
  await db.run(sql`DROP TABLE \`homepage_meta_keywords\`;`)
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`canonical_url\`;`)
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`no_index\`;`)
}
