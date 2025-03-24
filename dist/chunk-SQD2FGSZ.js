// src/customFormats.ts
var customFormats = {
  url: /^(https?:\/\/)?(www\.)?[-\w@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%+.~#?&/=]*)$/,
  githubUrl: /^(https?:\/\/)?(www\.)?github\.com\b([-\w@:%+.~#?&/=]*)$/
};
var customFormats_default = customFormats;

export { customFormats_default };
