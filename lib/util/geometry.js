define(function (require) {
  var defaults = {
    pointAt: pointAt
  };

  var intensityArray = [0, 0, 0];
  var originArray = [0, 0, 0];
  var targetArray = [0, 0, 0];
  var intensityVector;
  var targetVector;
  var normalLine = Line.create([0, 0, 0], [0, 0, 1]);
  var angle;
  var turnDirection;
  var twoPies = Math.PI * 2;
  var twistedIntensity;

  function create() {
    return defaults;
  }

  function pointAt(params) {
    intensityArray[0] = params.intensity;
    originArray[0] = params.origin.x;
    originArray[1] = params.origin.y;
    targetArray[0] = params.target.x;
    targetArray[1] = params.target.y;

    intensityVector = $V(intensityArray);
    targetVector = $V(targetArray).subtract($V(originArray));
    angle = intensityVector.angleFrom(targetVector);
    turnDirection = intensityVector.cross(targetVector);
    if (turnDirection.elements[2] < 0) { angle = twoPies - angle; }
    twistedIntensity = intensityVector.rotate(angle, normalLine);
    return { x: twistedIntensity.elements[0], y: twistedIntensity.elements[1] };
  }

  return create;
});
