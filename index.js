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



                        
