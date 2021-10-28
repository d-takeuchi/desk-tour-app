import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1635396206899 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`posts\` (
        \`id\` int(11) NOT NULL AUTO_INCREMENT,
        \`title\` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        \`description\` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        \`deskImage\` mediumtext COLLATE utf8_unicode_ci NOT NULL,
        \`userId\` int(11) NOT NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci`,
    );

    await queryRunner.query(
      `CREATE TABLE \`tags\` (
            \`id\` int(11) NOT NULL,
            \`name\` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
            PRIMARY KEY (\`id\`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci`,
    );

    await queryRunner.query(
      `CREATE TABLE \`users\` (
            \`id\` int(11) NOT NULL AUTO_INCREMENT,
            \`name\` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
            \`email\` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
            \`password\` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
            \`image\` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
            \`roleId\` enum('1','2') COLLATE utf8_unicode_ci NOT NULL DEFAULT '2',
            PRIMARY KEY (\`id\`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci`,
    );

    await queryRunner.query(
      `CREATE TABLE \`post_tags\` (
        \`postId\` int(11) NOT NULL,
        \`tagId\` int(11) NOT NULL,
        PRIMARY KEY (\`postId\`,\`tagId\`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `posts`');
    await queryRunner.query('DROP TABLE `post_tags`');
    await queryRunner.query('DROP TABLE `users`');
    await queryRunner.query('DROP TABLE `tags`');
  }
}
