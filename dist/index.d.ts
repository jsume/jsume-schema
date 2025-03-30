var $schema$a = "https://json-schema.org/draft/2020-12/schema";
var $id$a = "https://jsume.moo.zone/config.schema.json";
var type$9 = "object";
var config_schema = {
	$schema: $schema$a,
	$id: $id$a,
	type: type$9
};

var $schema$9 = "https://json-schema.org/draft/2020-12/schema";
var $id$9 = "https://jsume.moo.zone/data.schema.json";
var type$8 = "object";
var properties$2 = {
	about: {
		$ref: "data/about.schema.json",
		description: "Information about yourself, such as your name, email, phone number, and location"
	},
	work: {
		$ref: "data/work.schema.json",
		description: "Your work experience, including the companies you've worked for, your positions, and your responsibilities"
	},
	projects: {
		$ref: "data/projects.schema.json",
		description: "Your projects, including the names, descriptions, and URLs of your projects"
	},
	education: {
		$ref: "data/education.schema.json",
		description: "Your education history, including the schools you've attended, your degrees, and your fields of study"
	},
	awards: {
		$ref: "data/awards.schema.json",
		description: "Your awards and honors, including the names, dates, and descriptions of your awards"
	},
	languages: {
		$ref: "data/languages.schema.json",
		description: "Your language skills, including the languages you speak and your proficiency levels"
	},
	skills: {
		$ref: "data/skills.schema.json",
		description: "Your skills, including the names and keywords related to your skills"
	}
};
var required$2 = [
	"about"
];
var data_schema = {
	$schema: $schema$9,
	$id: $id$9,
	type: type$8,
	properties: properties$2,
	required: required$2
};

var $schema$8 = "https://json-schema.org/draft/2020-12/schema";
var $id$8 = "https://jsume.moo.zone/data/about.schema.json";
var type$7 = "object";
var properties$1 = {
	name: {
		type: "string",
		description: "e.g. John Doe"
	},
	label: {
		type: "string",
		description: "e.g. Web Developer"
	},
	image: {
		$ref: "/definitions.json#/$defs/url",
		description: "URL to your profile image"
	},
	email: {
		$ref: "/definitions.json#/$defs/email",
		description: "Your email address"
	},
	phone: {
		type: "string",
		description: "Phone numberslare stored as strings so use any format you like, e.g. 712-117-2923"
	},
	url: {
		$ref: "/definitions.json#/$defs/url",
		description: "URL to your website, e.g. personal homepage"
	},
	summary: {
		type: "string",
		description: "Write a short 2-3 sentence biography about yourself"
	},
	location: {
		$ref: "/definitions.json#/$defs/location",
		description: "Your current location"
	},
	profiles: {
		type: "array",
		description: "Specify any number of social networks that you participate in",
		uniqueItems: true,
		items: {
			$ref: "/definitions.json#/$defs/social"
		}
	}
};
var required$1 = [
	"name"
];
var about_schema = {
	$schema: $schema$8,
	$id: $id$8,
	type: type$7,
	properties: properties$1,
	required: required$1
};

var $schema$7 = "https://json-schema.org/draft/2020-12/schema";
var $id$7 = "https://jsume.moo.zone/data/awards.schema.json";
var type$6 = "array";
var uniqueItems$5 = true;
var items$5 = {
	type: "object",
	properties: {
		title: {
			type: "string",
			description: "e.g. Nuxt Hero"
		},
		date: {
			$ref: "/definitions.json#/$defs/date",
			description: "The date you received the award"
		},
		awarder: {
			type: "string",
			description: "e.g. NuxtLabs"
		},
		summary: {
			type: "string",
			description: "e.g. The best contributor of the year"
		},
		description: {
			type: "string",
			description: "Describe the award in detail"
		}
	},
	required: [
		"title",
		"date",
		"awarder",
		"summary"
	]
};
var awards_schema = {
	$schema: $schema$7,
	$id: $id$7,
	type: type$6,
	uniqueItems: uniqueItems$5,
	items: items$5
};

var $schema$6 = "https://json-schema.org/draft/2020-12/schema";
var $id$6 = "https://jsume.moo.zone/data/education.schema.json";
var type$5 = "array";
var uniqueItems$4 = true;
var items$4 = {
	type: "object",
	properties: {
		institution: {
			type: "string",
			description: "e.g. University of California"
		},
		location: {
			$ref: "/definitions.json#/$defs/location",
			description: "Location of the institution, e.g. Berkeley, CA"
		},
		area: {
			type: "string",
			description: "e.g. Computer Science"
		},
		degree: {
			type: "string",
			description: "e.g. Bachelor of Science"
		},
		gpa: {
			type: "number",
			description: "e.g. 3.5"
		},
		startDate: {
			$ref: "/definitions.json#/$defs/date",
			description: "The date you started studying at the institution"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate",
			description: "The date you stopped studying at the institution, or false if you are still studying there"
		},
		activities: {
			type: "array",
			description: "Specify multiple activities",
			uniqueItems: true,
			items: {
				type: "string",
				description: "e.g. President of the Computer Science Club"
			}
		},
		courses: {
			type: "array",
			description: "Specify multiple courses",
			uniqueItems: true,
			items: {
				type: "string",
				description: "e.g. CS 61A: Structure and Interpretation of Computer Programs"
			}
		}
	},
	required: [
		"institution",
		"area",
		"degree",
		"startDate",
		"endDate"
	]
};
var education_schema = {
	$schema: $schema$6,
	$id: $id$6,
	type: type$5,
	uniqueItems: uniqueItems$4,
	items: items$4
};

var $schema$5 = "https://json-schema.org/draft/2020-12/schema";
var $id$5 = "https://jsume.moo.zone/data/languages.schema.json";
var type$4 = "array";
var uniqueItems$3 = true;
var items$3 = {
	type: "object",
	properties: {
		language: {
			type: "string",
			description: "e.g. English"
		},
		fluency: {
			description: "Describe your fluency level in this language, for reference see https://anglo-link.com/level/",
			"enum": [
				"Beginner",
				"Enlementary",
				"Intermediate",
				"Advanced",
				"Fluent",
				"Proficient",
				"Native"
			]
		}
	},
	required: [
		"language",
		"fluency"
	]
};
var languages_schema = {
	$schema: $schema$5,
	$id: $id$5,
	type: type$4,
	uniqueItems: uniqueItems$3,
	items: items$3
};

var $schema$4 = "https://json-schema.org/draft/2020-12/schema";
var $id$4 = "https://jsume.moo.zone/data/projects.schema.json";
var type$3 = "array";
var uniqueItems$2 = true;
var items$2 = {
	type: "object",
	properties: {
		name: {
			type: "string",
			description: "e.g. Vitest"
		},
		website: {
			$ref: "/definitions.json#/$defs/url",
			description: "URL to the project website"
		},
		githubUrl: {
			$ref: "/definitions.json#/$defs/githubUrl",
			description: "URL to the project GitHub repository"
		},
		startDate: {
			$ref: "/definitions.json#/$defs/date",
			description: "The date you started working on the project"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate",
			description: "The date you stopped working on the project, or false if you are still working on it"
		},
		summary: {
			type: "string",
			description: "Give an overview of the project"
		},
		highlights: {
			type: "array",
			uniqueItems: true,
			description: "Specify multiple accomplishments",
			items: {
				type: "string",
				description: "e.g. Integrated Vite into Nuxt 3 resulted in 50x faster development time"
			}
		}
	},
	required: [
		"name",
		"summary"
	],
	dependentRequired: {
		startDate: [
			"endDate"
		],
		endDate: [
			"startDate"
		]
	}
};
var projects_schema = {
	$schema: $schema$4,
	$id: $id$4,
	type: type$3,
	uniqueItems: uniqueItems$2,
	items: items$2
};

var $schema$3 = "https://json-schema.org/draft/2020-12/schema";
var $id$3 = "https://jsume.moo.zone/data/skills.schema.json";
var type$2 = "array";
var uniqueItems$1 = true;
var items$1 = {
	type: "object",
	properties: {
		name: {
			type: "string",
			description: "e.g. JavaScript"
		},
		keywords: {
			type: "array",
			description: "Specify multiple keywords that are related to this skill",
			uniqueItems: true,
			items: {
				type: "string",
				description: "e.g. React, Node.js, Express"
			}
		}
	},
	required: [
		"name",
		"keywords"
	]
};
var skills_schema = {
	$schema: $schema$3,
	$id: $id$3,
	type: type$2,
	uniqueItems: uniqueItems$1,
	items: items$1
};

var $schema$2 = "https://json-schema.org/draft/2020-12/schema";
var $id$2 = "https://jsume.moo.zone/data/work.schema.json";
var type$1 = "array";
var uniqueItems = true;
var items = {
	type: "object",
	properties: {
		company: {
			type: "string",
			description: "e.g. Facebook"
		},
		location: {
			$ref: "/definitions.json#/$defs/location",
			description: "Location of the company, e.g. Menlo Park, CA"
		},
		position: {
			type: "string",
			description: "e.g. Software Engineer"
		},
		website: {
			$ref: "/definitions.json#/$defs/url",
			description: "e.g. http://facebook.example.com"
		},
		startDate: {
			$ref: "/definitions.json#/$defs/date",
			description: "The date you started working at the company"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate",
			description: "The date you stopped working at the company, or false if you are still working there"
		},
		summary: {
			type: "string",
			description: "Give an overview of your responsibilities at the company"
		},
		highlights: {
			type: "array",
			description: "Specify multiple accomplishments",
			uniqueItems: true,
			items: {
				type: "string",
				description: "e.g. Increased profits by 20% from 2011-2012 through viral advertising"
			}
		}
	},
	required: [
		"company",
		"position",
		"startDate",
		"endDate"
	]
};
var work_schema = {
	$schema: $schema$2,
	$id: $id$2,
	type: type$1,
	uniqueItems: uniqueItems,
	items: items
};

var $schema$1 = "https://json-schema.org/draft/2020-12/schema";
var $id$1 = "https://jsume.moo.zone/definitions.json";
var $defs = {
	email: {
		type: "string",
		format: "email",
		description: "e.g. thomas@gmail.com"
	},
	url: {
		type: "string",
		pattern: "^(https?:\\/\\/)?(www\\.)?[-\\w@:%.+~#=]{2,256}\\.[a-z]{2,6}\\b([-\\w@:%+.~#?&/=]*)$",
		description: "e.g. https://jsume.moo.zone"
	},
	githubUrl: {
		type: "string",
		pattern: "^(https?:\\/\\/)?(www\\.)?github\\.com\\b([-\\w@:%+.~#?&/=]*)$",
		description: "Should be a valid GitHub URL"
	},
	year: {
		type: "integer",
		minimum: 1900
	},
	month: {
		type: "integer",
		minimum: 1,
		maximum: 12
	},
	day: {
		type: "integer",
		minimum: 1,
		maximum: 31
	},
	date: {
		type: "object",
		properties: {
			year: {
				$ref: "#/$defs/year"
			},
			month: {
				$ref: "#/$defs/month"
			},
			day: {
				$ref: "#/$defs/day"
			}
		},
		required: [
			"year",
			"month"
		]
	},
	endDate: {
		anyOf: [
			{
				$ref: "#/$defs/date",
				description: "A date object with year, month and day(optional)"
			},
			{
				"const": false,
				description: "No end date"
			}
		]
	},
	location: {
		anyOf: [
			{
				type: "string",
				description: "e.g. Remote or GitHub"
			},
			{
				type: "object",
				properties: {
					city: {
						type: "string",
						description: "e.g. New York"
					},
					country: {
						type: "string",
						description: "e.g. United States"
					}
				},
				minProperties: 1
			}
		]
	},
	social: {
		type: "object",
		properties: {
			network: {
				type: "string",
				description: "e.g. Facebook or Twitter"
			},
			username: {
				type: "string",
				description: "e.g. MoozonWei"
			},
			url: {
				$ref: "#/$defs/url"
			}
		},
		required: [
			"network",
			"username",
			"url"
		]
	}
};
var definitions = {
	$schema: $schema$1,
	$id: $id$1,
	$defs: $defs
};

var $schema = "https://json-schema.org/draft/2020-12/schema";
var $id = "https://jsume.moo.zone/schema.json";
var type = "object";
var properties = {
	config: {
		$ref: "config.schema.json"
	},
	data: {
		type: "object",
		patternProperties: {
			"^(en|zh)$": {
				$ref: "data.schema.json"
			}
		},
		additionalProperties: false
	}
};
var required = [
	"config",
	"data"
];
var additionalProperties = false;
var schema = {
	$schema: $schema,
	$id: $id,
	type: type,
	properties: properties,
	required: required,
	additionalProperties: additionalProperties
};

export { about_schema as aboutSchema, awards_schema as awardsSchema, config_schema as configSchema, data_schema as dataSchema, definitions, education_schema as educationSchema, languages_schema as languagesSchema, projects_schema as projectsSchema, schema, skills_schema as skillsSchema, work_schema as workSchema };
