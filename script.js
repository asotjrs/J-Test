const googleDB=[
  "cats.com",
  "bikies.com",
  "cars.com",
  "cutecats.com",
  "beautifulcats.com",
   "catsmiaw.com",
   "catkitsmiaw.com",
   "animals.com",

];


const res=(inp,db)=>{

    const filtered=db.filter(link=>{
        return link.includes(inp);
    });
    return filtered.length>3 ? filtered.slice(0,3):filtered;

};

module.exports=res;