// schemas/schema.json
var schema_default = {
  $id: "https://jsume.moo.zone/schema.json",
  type: "object",
  properties: {
    config: { $ref: "config.schema.json" },
    data: {
      type: "object",
      patternProperties: {
        "^(en|zh)$": { $ref: "data.schema.json" }
      },
      additionalProperties: false
    }
  },
  required: [
    "config",
    "data"
  ],
  additionalProperties: false
};

// schemas/definitions.json
var definitions_default = {
  $id: "https://jsume.moo.zone/definitions.json",
  $defs: {
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
      required: ["year", "month"]
    },
    endDate: {
      anyOf: [
        {
          $ref: "#/$defs/date"
        },
        {
          const: false
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
      required: ["network", "username", "url"]
    }
  }
};

// schemas/config.schema.json
var config_schema_default = {
  $id: "https://jsume.moo.zone/config.schema.json",
  type: "object"
};

// schemas/data.schema.json
var data_schema_default = {
  $id: "https://jsume.moo.zone/data.schema.json",
  type: "object",
  properties: {
    about: { $ref: "data/about.schema.json" },
    work: { $ref: "data/work.schema.json" },
    projects: { $ref: "data/projects.schema.json" },
    education: { $ref: "data/education.schema.json" },
    awards: { $ref: "data/awards.schema.json" },
    languages: { $ref: "data/languages.schema.json" },
    skills: { $ref: "data/skills.schema.json" }
  },
  required: [
    "about"
  ]
};

// schemas/data/about.schema.json
var about_schema_default = {
  $id: "https://jsume.moo.zone/data/about.schema.json",
  type: "object",
  properties: {
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
  }
};

// schemas/data/awards.schema.json
var awards_schema_default = {
  $id: "https://jsume.moo.zone/data/awards.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
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
  }
};

// schemas/data/education.schema.json
var education_schema_default = {
  $id: "https://jsume.moo.zone/data/education.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
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
  }
};

// schemas/data/languages.schema.json
var languages_schema_default = {
  $id: "https://jsume.moo.zone/data/languages.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
    type: "object",
    properties: {
      language: {
        type: "string",
        description: "e.g. English"
      },
      fluency: {
        description: "https://anglo-link.com/level/",
        enum: [
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
  }
};

// schemas/data/projects.schema.json
var projects_schema_default = {
  $id: "https://jsume.moo.zone/data/projects.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
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
      startDate: ["endDate"],
      endDate: ["startDate"]
    }
  }
};

// schemas/data/skills.schema.json
var skills_schema_default = {
  $id: "https://jsume.moo.zone/data/skills.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
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
  }
};

// schemas/data/work.schema.json
var work_schema_default = {
  $id: "https://jsume.moo.zone/data/work.schema.json",
  type: "array",
  uniqueItems: true,
  items: {
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
  }
};

export { about_schema_default, awards_schema_default, config_schema_default, data_schema_default, definitions_default, education_schema_default, languages_schema_default, projects_schema_default, schema_default, skills_schema_default, work_schema_default };
