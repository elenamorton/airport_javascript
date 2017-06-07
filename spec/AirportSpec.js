'use strict';

describe('Airport', function () {
    var airport;
    var plane;
    var weather;

  beforeEach(function (){
    airport = new Airport(); 
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane = jasmine.createSpy('plane');
  });


    it('has no planes by default', function () {
       expect(airport.planes()).toEqual([]);
    });

  describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
          
    it('can land a plane', function (){
       airport.clearForLanding(plane);
       expect(airport.planes()).toEqual([plane]);
    });

    it("can clear a plane for takeoff", function (){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });
    
  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
      
    it('does not clear planes for landing', function() {
        expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
      
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});