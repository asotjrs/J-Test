const googleSearch=require('./script');
const mockDb=[
    "dogs.com",
    "dogies.com",
    "dogdog.com",
    "dgdg.com",
    "anotherinp.com",
    "inpie.com"
];

describe("googleSearch",()=>{

    it('should test this google function',  ()=> {
        // googleSearch("dog",mockDb)
        expect(googleSearch("dogg",mockDb)).toEqual([]);
    });

    it('works with undefined and null',  ()=> {
        expect(googleSearch(undefined,mockDb)).toEqual([]);
        expect(googleSearch(null,mockDb)).toEqual([]);
    });

    it('length would never be greater than 4',  ()=> {
        expect(googleSearch(".com",mockDb).length).toEqual(3);

    });
});


