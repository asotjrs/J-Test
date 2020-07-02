const fetch=require('node-fetch');
const getPeapole=require('./script2');

it('should call swapi to get ppl',  ()=> {
    expect.assertions(1);
    return getPeapole.getPeople(fetch).then(data=>{
        expect(data.count).toEqual(82);

    });
});
it('should call swapi to get ppl with a async',  ()=> {
    expect.assertions(2);
    return  getPeapole.getPeopleAsync(fetch).then(data=>{
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })


});
