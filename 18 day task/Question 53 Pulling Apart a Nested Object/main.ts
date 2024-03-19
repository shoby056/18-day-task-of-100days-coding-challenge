// *Question 53:** Pulling Apart a Nested Object:
//  Imagine you have a list inside another list that shows what a computer programmer knows,
//   like coding languages, tools, and software frameworks. 
//   Find a way to get three specific skills from this list and show them.




//A list of Skills
let developerSkills={
    languages:["C#","Javascript","Typescript"],
    frameworks:[".Net","React","Angular"],
    tools:["Git",'Webpack',"Docker"]
} ;

// getting skills form list
 let { languages, frameworks, tools } = developerSkills;
// print skills
 console.log(`Language: ${languages[0]}, Frameworks: ${frameworks[0]} ,Tools: ${tools[0]}`);

