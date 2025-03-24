var $id$a = "https://jsume.moo.zone/schema.json";
var type$9 = "object";
var properties$2 = {
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
var required$1 = [
	"config",
	"data"
];
var additionalProperties = false;
var schema = {
	$id: $id$a,
	type: type$9,
	properties: properties$2,
	required: required$1,
	additionalProperties: additionalProperties
};

var $id$9 = "https://jsume.moo.zone/definitions.json";
var $defs = {
	email: {
		type: "string",
		format: "email",
		description: "e.g. thomas@gmail.com"
	},
	url: {
		type: "string",
		format: "url"
	},
	githubUrl: {
		type: "string",
		format: "githubUrl"
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
				$ref: "#/$defs/date"
			},
			{
				"const": false
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
	$id: $id$9,
	$defs: $defs
};

var $id$8 = "https://jsume.moo.zone/config.schema.json";
var type$8 = "object";
var config_schema = {
	$id: $id$8,
	type: type$8
};

var $id$7 = "https://jsume.moo.zone/data.schema.json";
var type$7 = "object";
var properties$1 = {
	about: {
		$ref: "data/about.schema.json"
	},
	work: {
		$ref: "data/work.schema.json"
	},
	projects: {
		$ref: "data/projects.schema.json"
	},
	education: {
		$ref: "data/education.schema.json"
	},
	awards: {
		$ref: "data/awards.schema.json"
	},
	languages: {
		$ref: "data/languages.schema.json"
	},
	skills: {
		$ref: "data/skills.schema.json"
	}
};
var required = [
	"about"
];
var data_schema = {
	$id: $id$7,
	type: type$7,
	properties: properties$1,
	required: required
};

var $id$6 = "https://jsume.moo.zone/data/about.schema.json";
var type$6 = "object";
var properties = {
	name: {
		type: "string"
	},
	label: {
		type: "string",
		description: "e.g. Web Developer"
	},
	image: {
		$ref: "/definitions.json#/$defs/url"
	},
	email: {
		$ref: "/definitions.json#/$defs/email"
	},
	phone: {
		type: "string",
		description: "Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923"
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
		$ref: "/definitions.json#/$defs/location"
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
var about_schema = {
	$id: $id$6,
	type: type$6,
	properties: properties
};

var $id$5 = "https://jsume.moo.zone/data/awards.schema.json";
var type$5 = "array";
var uniqueItems$5 = true;
var items$5 = {
	type: "object",
	properties: {
		title: {
			type: "string",
			description: "e.g. Nuxt Hero"
		},
		date: {
			$ref: "/definitions.json#/$defs/date"
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
	$id: $id$5,
	type: type$5,
	uniqueItems: uniqueItems$5,
	items: items$5
};

var $id$4 = "https://jsume.moo.zone/data/education.schema.json";
var type$4 = "array";
var uniqueItems$4 = true;
var items$4 = {
	type: "object",
	properties: {
		institution: {
			type: "string",
			description: "e.g. University of California, Berkeley"
		},
		location: {
			$ref: "/definitions.json#/$defs/location"
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
			$ref: "/definitions.json#/$defs/date"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate"
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
	$id: $id$4,
	type: type$4,
	uniqueItems: uniqueItems$4,
	items: items$4
};

var $id$3 = "https://jsume.moo.zone/data/languages.schema.json";
var type$3 = "array";
var uniqueItems$3 = true;
var items$3 = {
	type: "object",
	properties: {
		language: {
			type: "string",
			description: "e.g. English"
		},
		fluency: {
			description: "https://anglo-link.com/level/",
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
	$id: $id$3,
	type: type$3,
	uniqueItems: uniqueItems$3,
	items: items$3
};

var $id$2 = "https://jsume.moo.zone/data/projects.schema.json";
var type$2 = "array";
var uniqueItems$2 = true;
var items$2 = {
	type: "object",
	properties: {
		name: {
			type: "string",
			description: "e.g. Vitest"
		},
		website: {
			$ref: "/definitions.json#/$defs/url"
		},
		githubUrl: {
			$ref: "/definitions.json#/$defs/githubUrl"
		},
		startDate: {
			$ref: "/definitions.json#/$defs/date"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate"
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
				description: "e.g. Integrated Vite into Nuxt 3 resulted in 50x faster development time."
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
	$id: $id$2,
	type: type$2,
	uniqueItems: uniqueItems$2,
	items: items$2
};

var $id$1 = "https://jsume.moo.zone/data/skills.schema.json";
var type$1 = "array";
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
			uniqueItems: true,
			items: {
				type: "string"
			}
		}
	},
	required: [
		"name",
		"keywords"
	]
};
var skills_schema = {
	$id: $id$1,
	type: type$1,
	uniqueItems: uniqueItems$1,
	items: items$1
};

var $id = "https://jsume.moo.zone/data/work.schema.json";
var type = "array";
var uniqueItems = true;
var items = {
	type: "object",
	properties: {
		company: {
			type: "string",
			description: "e.g. Facebook"
		},
		location: {
			$ref: "/definitions.json#/$defs/location"
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
			$ref: "/definitions.json#/$defs/date"
		},
		endDate: {
			$ref: "/definitions.json#/$defs/endDate"
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
	$id: $id,
	type: type,
	uniqueItems: uniqueItems,
	items: items
};

export { about_schema as aboutSchema, awards_schema as awardsSchema, config_schema as configSchema, data_schema as dataSchema, definitions, education_schema as educationSchema, languages_schema as languagesSchema, projects_schema as projectsSchema, schema, skills_schema as skillsSchema, work_schema as workSchema };
