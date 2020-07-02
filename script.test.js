const googleSearch=require('./script');
const mockDb=[
    "dogs.com",
    "dogies.com",
    "dogdog.com",
    "dgdg.com",
    "anotherinp.com",
    "inpie.com"
];

it('should test this google function',  ()=> {
   // googleSearch("dog",mockDb)
    expect(googleSearch("dogg",mockDb)).toEqual([]);
});
