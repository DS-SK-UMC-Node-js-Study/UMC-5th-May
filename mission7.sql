CREATE TABLE `member` (
	`id`	bigint	NOT NULL,
	`name`	varchar(20)	NOT NULL,
	`gender`	varchar(10)	NULL,
	`age`	int	NOT NULL,
	`address`	varchar(40)	NOT NULL,
    `spec_address` varchar(40) NULL,
    `status`	varchar(15)	NOT NULL,
    `inactive_date`	datetime	NULL,
    `social_type`	varchar(10) NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL,
	`email`	varchar(50)	NULL,
	`phone_number`	varchar(20)	NULL,
	`nickname`	varchar(20)	NOT NULL,
	`point`	bigint	NOT NULL,
	`profile_image`	varchar(100)	NULL
);
ALTER TABLE `member` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`id`
);

CREATE TABLE `mission` (
	`id`	bigint	NOT NULL,
	`store_id`	bigint	NOT NULL,
    `reward`	int NOT NULL,
    `deadline`	datetime NOT NULL,
	`mission_spec`	text NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `mission` ADD CONSTRAINT `PK_MISSION` PRIMARY KEY (
	`id`
);

CREATE TABLE `member_mission` (
	`id`	bigint	NOT NULL,
	`member_id`	bigint	NOT NULL,
	`mission_id`	bigint	NOT NULL,
	`status`	varchar(15)	NOT NULL,	-- 진행중/진행완료
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `member_mission` ADD CONSTRAINT `PK_MEMBER_MISSION` PRIMARY KEY (
	`id`
);

CREATE TABLE `review` (
	`id`	bigint	NOT NULL,
	`member_id`	bigint	NOT NULL,
	`store_id`	bigint	NOT NULL,
	`body`	text	NOT NULL,
	`score`	float	NOT NULL
);
ALTER TABLE `review` ADD CONSTRAINT `PK_REVIEW` PRIMARY KEY (
	`id`
);

CREATE TABLE `review_image` (
	`id`	bigint	NOT NULL,
	`review_id`	bigint	NOT NULL,
	`image_url`	text	NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `review_image` ADD CONSTRAINT `PK_REVIEW_IMAGE` PRIMARY KEY (
	`id`
);

CREATE TABLE `store` (
	`id`	bigint	NOT NULL,
	`region_id`	bigint	NOT NULL,
	`name`	varchar(50)	NOT NULL,
	`address`	varchar(50)	NOT NULL,
	`score`	float	NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `store` ADD CONSTRAINT `PK_STORE` PRIMARY KEY (
	`id`
);

CREATE TABLE `region` (
	`id`	bigint NOT NULL,
    `name`	varchar(20)	NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `region` ADD CONSTRAINT `PK_REGION` PRIMARY KEY (
	`id`
);

CREATE TABLE `member_prefer` (
	`id`	bigint	NOT NULL,
	`member_id`	bigint	NOT NULL,
	`category_id`	bigint	NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `member_prefer` ADD CONSTRAINT `PK_MEMBER_PREFER` PRIMARY KEY (
	`id`
);

CREATE TABLE `food_category` (
	`id`	bigint	NOT NULL,
	`name`	varchar(15)	NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `food_category` ADD CONSTRAINT `PK_FOOD_CATEGORY` PRIMARY KEY (
	`id`
);

CREATE TABLE `member_agree` (
	`id`	bigint NOT NULL,
    `member_id`	bigint NOT NULL,
    `terms_id`	bigint NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `member_agree` ADD CONSTRAINT `PK_MEMBER_AGREE` PRIMARY KEY (
	`id`
);

CREATE TABLE `terms` (
	`id`	bigint NOT NULL,
    `title`	varchar(20) NOT NULL,
    `body`	text NOT NULL,
    `optional` boolean NOT NULL,
    `created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NOT NULL
);
ALTER TABLE `terms` ADD CONSTRAINT `PK_TERM` PRIMARY KEY (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `FK_store_TO_mission_1` FOREIGN KEY (
	`store_id`
)
REFERENCES `store` (
	`id`
);

ALTER TABLE `member_mission` ADD CONSTRAINT `FK_member_TO_member_mission_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `member_mission` ADD CONSTRAINT `FK_mission_TO_member_mission_1` FOREIGN KEY (
	`mission_id`
)
REFERENCES `mission` (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `FK_member_TO_review_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `FK_store_TO_review_1` FOREIGN KEY (
	`store_id`
)
REFERENCES `store` (
	`id`
);

ALTER TABLE `review_image` ADD CONSTRAINT `FK_review_TO_review_image_1` FOREIGN KEY (
	`review_id`
)
REFERENCES `review` (
	`id`
);

ALTER TABLE `store` ADD CONSTRAINT `FK_region_TO_store_1` FOREIGN KEY (
	`region_id`
)
REFERENCES `region` (
	`id`
);

ALTER TABLE `member_prefer` ADD CONSTRAINT `FK_member_TO_member_prefer_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `member_prefer` ADD CONSTRAINT `FK_food_category_TO_member_prefer_1` FOREIGN KEY (
	`category_id`
)
REFERENCES `food_category` (
	`id`
);

ALTER TABLE `member_agree` ADD CONSTRAINT `FK_member_TO_member_agree_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `member_agree` ADD CONSTRAINT `FK_terms_TO_member_agree_1` FOREIGN KEY (
	`terms_id`
)
REFERENCES `terms` (
	`id`
);