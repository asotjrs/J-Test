const fetch=require('node-fetch');

const getPeople=fetch=>{
   return fetch("https://swapi.dev/api/people").then(
       res=>res.json()
   ).then(
       data=>{
           return {
               count : data.count,
               results: data.results
           }
       }
   )

};
const getPeopleAsync=async fetch=>{
   const ppl=  await fetch("https://swapi.dev/api/people");
    const data= await ppl.json();

    return {
               count : data.count,
               results: data.results
           }



};


module.exports={
    getPeople,
    getPeopleAsync
};