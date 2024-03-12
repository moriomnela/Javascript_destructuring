                                    /* ======Array,Object Destructuring==== 1st practise*/
const dev = {
    name : "Moriom",
    age : 20,
    skill : "java",
};
const org = {
    name : "Rifat",
    age : 14,
    skill : "javascript",
}

const { name, age, skill } = dev;
const {name :orgName, age :orgAge, skill: orgSkill} = org;

console.log (orgSkill );

/*const {skill} = org;
console.log(`Hello ${skill} Developers`);*/


/*2nd practise*/

const dev = {
    name: "Moriom Islam Nela",
    age: 20,
    skill: "C language",
    edu: {
      bangla: 79,
      english: 80, 
      math: 85,
      science: 90,
      reli: 83,
    },
};
 
const { name,age,skill,edu } = dev;
const { bangla,english,math,science,reli} = edu;
console.log (bangla,english);
