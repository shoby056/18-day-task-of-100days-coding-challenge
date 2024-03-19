// *Question 53:** Pulling Apart a Nested Object:
//  Imagine you have a list inside another list that shows what a computer programmer knows,
//   like coding languages, tools, and software frameworks. 
//   Find a way to get three specific skills from this list and show them.
//A list of Skills
var developerSkills = {
    languages: ["C#", "Javascript", "Typescript"],
    frameworks: [".Net", "React", "Angular"],
    tools: ["Git", 'Webpack', "Docker"]
};
// getting skills form list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// print skills
console.log("Language: ".concat(languages[0], ", Frameworks: ").concat(frameworks[0], " ,Tools: ").concat(tools[0]));
