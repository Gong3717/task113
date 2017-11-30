const main = require('../main/main');

describe('taxi fee', function () {
    describe(" taxiFee",function(){
        it("return the fee when the distance less than 2km and no stop",function(){
            let distance = 1.2;
            let stopminutes = 0;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 6(元)\n");
        });
        it("return the fee when the distance less than 2km and stop two minutes",function(){
            let distance = 1.2;
            let stopminutes = 2;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 7(元)\n");
        });
        it("return the fee when the distance more than 2km and less than 8km and no stop",function(){
            let distance = 4;
            let stopminutes = 0;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 8(元)\n");
        });
        it("return the fee when the distance more than 2km and less than 8km and stop two minutes",function(){
            let distance = 4;
            let stopminutes = 2;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 8(元)\n");
        });
        it("return the fee when the distance more than 8km and less than 8km and no stop",function(){
            let distance = 9;
            let stopminutes = 0;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 12(元)\n");
        });
        it("return the fee when the distance more than 8km and less than 8km and stop two minutes",function(){
            let distance = 9;
            let stopminutes = 2;
            let result = main(distance,stopminutes);
            expect(result).toEqual("The taxi fee is : 13(元)\n");
        });
    });
});
