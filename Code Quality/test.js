// describe("pow", function () {

//     it("2 raised to power 3 is 8", function () {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3 raised to power 3 is 27", function () {
//         assert.equal(pow(3, 3), 27);
//     });

// });

describe("pow", function () {

    describe("raises x to power 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("raises x to power negative", function () {

        it("2 raised to the power -1", function() {
            assert.equal(pow(2,-1),0.5);
        })
    });

    // ... more tests to follow here, both describe and it can be added
});