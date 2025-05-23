# jsume-schema

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

```js
import {
  schema,
  definitions,
  configSchema,
  dataSchema,
  aboutSchema,
  awardsSchema,
  educationSchema,
  languagesSchema,
  projectsSchema,
  skillsSchema,
  workSchema
} from '@jsume/schema'
```

You can also import the schemas in json format:

```js
import schema from '@jsume/schema/schema.json'
import configSchema from '@jsume/schema/config.json'
import dataSchema from '@jsume/schema/data.json'
import aboutSchema from '@jsume/schema/data/about.json'
import awardsSchema from '@jsume/schema/data/awards.json'
import educationSchema from '@jsume/schema/data/education.json'
import languagesSchema from '@jsume/schema/data/languages.json'
import projectsSchema from '@jsume/schema/data/projects.json'
import skillsSchema from '@jsume/schema/data/skills.json'
import workSchema from '@jsume/schema/data/work.json'
```

## Schema Details

<details>
<summary>Structure of the schema</summary>

<br>

```
jsume.json
├── config
└── data
    ├── en
    │   └── ...
    └── zh
        ├── about
        │   ├── name
        │   ├── label
        │   ├── image
        │   ├── email
        │   ├── phone
        │   ├── url
        │   ├── summary
        │   ├── location
        │   └── profiles
        ├── work
        │   ├── company
        │   ├── positon
        │   ├── website
        │   ├── location
        │   ├── startDate
        │   ├── endDate
        │   ├── summary
        │   └── highlights
        ├── projects
        │   ├── name
        │   ├── summary
        │   ├── description
        │   ├── githubUrl
        │   ├── website
        │   └── keywords
        ├── education
        │   ├── institution
        │   ├── description
        │   ├── area
        │   ├── degree
        │   ├── location
        │   ├── startDate
        │   ├── endDate
        │   ├── activities
        │   ├── gpa
        │   └── courses
        ├── awards
        │   ├── title
        │   ├── summary
        │   ├── description
        │   ├── awarder
        │   └── date
        ├── skills
        │   ├── name
        │   └── keywords
        └── languages
            ├── language
            └── fluency
```
</details>

### config

WIP

### data

The resume data, which is organized by language.

There are some special data types in the schema that you should be aware of at the beginning:

- `url`: Use JSON Schema's `pattern` to validate a URL. The regex can be find in the source code.
- `githubUrl`: The same as `url`, but with a stricter regex to validate a GitHub URL.
- `email`: Use JSON Schema's `format` to validate an email address. [Read more](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-7.3.2) 
- `location`: A location can be a string or an object. If it's a string, it should be a valid location name. If it's an object, it should have at least one of the following properties:
  - `city`: The city name.
  - `country`: The country name.
- `date`: A date must be an object with the following properties:
  - `year`: The year of the date.
  - `month`: The month of the date.
  - `day` (optional): The day of the date.

1. #### about

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | name | `string` | ✅ | Your name | `"John Doe"` |
    | label | `string` | ❌ | Your label | `"Programmer"` |
    | image | `url` | ❌ | URL to your profile image | `"https://picsum.photos/200"` |
    | email | `email` | ❌ | Your email address | `"john@example.com"` |
    | phone | `string` | ❌ | Phone number | `"(912) 555-4321"` |
    | url | `url` | ❌ | URL to your website | `"https://johndoe.com"` |
    | summary | `string` | ❌ | Write a short 2-3 sentence biography about yourself | `"A summary of John Doe…"` |
    | location | `location` | ❌ | Your current location | `"United States"` , `{"city": "New York", "country": "United States"}` |
    | profiles | `object` | ❌ | Specify any number of social networks that you participate in | `{"network": "X/Twitter", "username": "john", "url": "https://x.com/john"}` |

    <details>
    <summary>Example</summary>

    ```json
    {
      "name": "John Doe",
      "label": "Programmer",
      "image": "https://picsum.photos/200",
      "email": "john@example.com",
      "phone": "(912) 555-4321",
      "url": "https://johndoe.com",
      "summary": "A summary of John Doe...",
      "location": {
        "city": "New York",
        "country": "United States"
      },
      "profiles": [
        {
          "network": "X/Twitter",
          "username": "john",
          "url": "https://x.com/john"
        }
      ]
    }
    ```
    </details>

2. #### work

    List of your work experience.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | company | `string` | ✅ | Company name | `"Company"` |
    | location | `location` | ❌ | Where you worked or where the company is located | `"United States"` , `{"city": "New York", "country": "United States"}` |
    | position | `string` | ✅ | Your position at the company | `"Software Engineer"` |
    | website | `url` | ❌| URL to the company website | `"https://company.com"` |
    | startDate | `date` | ✅ | Start date of your employment at the company | `{"year": 2023, "month": 1}` , `{"year": 2023, "month": 1, "day": 1}` |
    | endDate | `fales` or `date` | ✅| End date of your employment at the company. If you are still working there, set this to false | `false` , `{"year": 2023, "month": 1}` |
    | summary | `string` | ❌ | Give an overview of your responsibilities at the company | `"A summary of the job"` |
    | highlights | `array` | ❌ | Specify multiple accomplishments | `["Highlight 1", "Highlight 2"]` |

    <details>
    <summary>Example</summary>

    ```json
    [{
      "company": "Company",
      "location": "Remote",
      "position": "Software Engineer",
      "website": "https://company.com",
      "startDate": {
        "year": 2023,
        "month": 1
      },
      "endDate": false,
      "summary": "A summary of the job",
      "highlights": [
        "Highlight 1",
        "Highlight 2"
      ]
    }]
    ```
    </details>

3. #### projects

    List of your projects.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | name | `string` | ✅ | Project name | `"Project"` |
    | website | `url` | ❌ | Where you worked or where the company is located | `"United States"` , `{"city": "New York", "country": "United States"}` |
    | githubUrl | `githubUrl` | ❌| URL to the project GitHub repository | `"https://github.com/johndoe/reponame"` |
    | startDate | `date` | ✅* | Start date of your project | `{"year": 2023, "month": 1}` |
    | endDate | `fales` or `date` | ✅*| End date of your project. If you are still working on it, set this to false | `false` , `{"year": 2023, "month": 1}` |
    | summary | `string` | ❌ | Give an overview of your project | `"A summary of the project"` |
    | highlights | `array` | ❌ | Specify multiple accomplishments | `["Highlight 1", "Highlight 2"]` |

    > `startDate` and `endDate` are dependent required fields. If you specify `startDate`, you must also specify `endDate`. If you specify `endDate`, you must also specify `startDate`.

    <details>
    <summary>Example</summary>

    ```json
    [{
      "name": "Project",
      "website": "https://project.com",
      "githubUrl": "https://github.com/johndoe/reponame",
      "startDate": {
          "year": 2023,
          "month": 1
      },
      "endDate": false,
      "summary": "A summary of the project",
      "highlights": [
          "Highlight 1",
          "Highlight 2"
      ]
    }]
    ```
    </details>

4. #### education

    List of your education.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | institution | `string` | ✅ | Institution name | `"University"` |
    | location | `location` | ❌ | Where you studied or where the institution is located | `"United States"` , `{"city": "New York", "country": "United States"}` |
    | area | `string` | ✅ | Your area of study | `"Computer Science"` |
    | degree | `string` | ✅ | Your degree | `"Bachelor of Science"` |
    | gpa | `number` | ❌ | Your GPA | `3.5` |
    | startDate | `date` | ✅ | Start date of your education | `{"year": 2023, "month": 1}` |
    | endDate | `fales` or `date` | ✅| End date of your education. If you are still studying there, set this to false | `false` , `{"year": 2023, "month": 1}` |
    | activities | `array` | ❌ | Specify multiple activities you participated in during your education | `["Activity 1", "Activity 2"]` |
    | courses | `array` | ❌ | Specify multiple courses you took during your education | `["Course 1", "Course 2"]` |

    <details>
    <summary>Example</summary>

    ```json
    [{
      "institution": "University",
      "location": {
        "city": "New York",
        "country": "United States"
      },
      "area": "Computer Science",
      "degree": "Bachelor of Science",
      "gpa": 3.5,
      "startDate": {
        "year": 2023,
        "month": 1
      },
      "endDate": {
        "year": 2023,
        "month": 1
        },
      "activities": [
        "Activity 1",
        "Activity 2"
      ],
      "courses": [
        "Course 1",
        "Course 2"
      ]
    }]
    ```
    </details>

5. #### awards

    List of your awards.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | title | `string` | ✅ | The title of the award | `"Award"` |
    | date | `date` | ✅ | The date you recived the award | `{"year": 2023, "month": 1, "day": 1}` |
    | awarder | `string` | ✅ | The name of the awarder | `"Company"` |
    | summary | `string` | ✅ | A short summary of the award | `"A summary of the award"` |
    | description | `string` | ❌ | Describe the award in detail | `"This is a description of the award"` |

    <details>
    <summary>Example</summary>

    ```json
    [{
      "title": "Award",
      "date": {
        "year": 2023,
        "month": 1,
        "day": 1
      },
      "awarder": "Company",
      "summary": "A summary of the award",
      "description": "This is a description of the award"
    }]
    ```
    </details>

6. #### skills

    List of your skills.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | name | `string` | ✅ | Skill name | `"Frontend"` |
    | keywords | `array` | ✅| List of keywords to describe your skill | `["JavaScript", "React", "Vue"]` |

    <details>
    <summary>Example</summary>

    ```json
    [{
      "name": "Frontend",
      "keywords": [
        "JavaScript",
        "React",
        "Vue"
      ]
    }]
    ```
    </details>

7. #### languages

    List the languages you speak.

    | property | type | required | desc | e.g. |
    |:---:|:---:|:---:|---|---|
    | language | `string` | ✅ | Language name | `"English"` |
    | fluency | `enum`* | ✅ | Fluency level | `"Fluent"` |

    > `enum`*: Fluency levels can be one of the following: `Beginner`, `Elementary`, `Intermediate`, `Advanced`, `Fluent`, `Proficient`, `Native`.

    <details>
    <summary>Example</summary>

    ```json
    [
      {
        "language": "English",
        "fluency": "Fluent"
      },
      {
        "language": "Chinese",
        "fluency": "Native"
      }
    ]
    ```
    </details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/%40jsume%2Fschema?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/%40jsume%2Fschema
[npm-downloads-src]: https://img.shields.io/npm/dm/%40jsume%2Fschema?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/%40jsume%2Fschema
