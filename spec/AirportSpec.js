'use strict';

describe('Airport', function () {
    var airport;
    var plane;

  beforeEach(function (){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });


    it('has no planes by default', function () {
       expect(airport.planes()).toEqual([]);
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
    
    it('checks for stormy conditions', function() {
        expect(airport.isStormy()).toBeFalsy();
    } );
});
