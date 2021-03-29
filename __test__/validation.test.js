import {isValidationPlaceName} from "../src/client/js/validation";

describe("Testing the place Name Validator", ()=>{

    const arrayInput = 
    [
        {name: 'London', result: true},
        {name: ' ', result: false},
        {name: 'Paris@', result: false},
        {name: 'Paris, France', result: true},
        {name: 'New Zealand', result: true},
        {name: ' Manchester', result: false},
        {name: 'Manchester', result: true},
        {name: 'Ireland!', result: false}, 
    ]

    arrayInput.forEach(testInput => {
        test(`test isValidationPlaceName against ${testInput.name}`, ()=>
        {
            expect(isValidationPlaceName(testInput.name)).toBe(testInput.result);
        });
    });

});