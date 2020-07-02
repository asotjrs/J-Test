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

it('should get ppl returns count and res',  ()=> {

    const mockFetch=jest.fn().mockReturnValue(Promise.resolve(
        {json: ()=>Promise.resolve({
                count:82,
                results:[0,1,2,3,4,5]
            })}
    ));

        expect.assertions(2);
        return getPeapole.getPeople(mockFetch).then(data=>{
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    })
    
}); 