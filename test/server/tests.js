var expect = require('chai').expect;
var assert = require('chai').assert;
var tags = require('../../server/test.practice.js');

describe("Tags", function(){
   describe("testObjects", function(){
   		it('testObjects should have the properties of getter and setter', function(){

   			expect(tags.testObjects).to.have.a.property('getter')
   			expect(tags.testObjects).to.have.a.property('setter')
   		})


       it("getter should return value", function(){
       		var results = tags.testObjects.getter()
       		expect(results).to.equal(12)
       		assert.typeOf(results, 'number', 'results is a number')
       });

       it('setter shoud set value', function(){
       		tags.testObjects.setter(15);
       		var results = tags.testObjects.getter();

       		expect(results).to.equal(15)
       })
   });
});