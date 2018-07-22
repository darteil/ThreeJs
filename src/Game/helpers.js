const checkIntersection = (box, activeBox, widthPrevBox, currentAxis) => {
  let intersection = false;
  let fullIntersection = false;

  if (currentAxis === 'x') {
    if (box.position.x > activeBox.position.x) {
      if (box.position.x - activeBox.position.x < widthPrevBox && box.position.x - activeBox.position.x >= 0) {
        intersection = true;
      }
    }

    if (box.position.x < activeBox.position.x) {
      if (activeBox.position.x - box.position.x < widthPrevBox && activeBox.position.x - box.position.x >= 0) {
        intersection = true;
      }
    }

    if (box.position.x === activeBox.position.x) {
      intersection = true;
      fullIntersection = true;
    }
  }

  if (currentAxis === 'z') {
    if (box.position.z > activeBox.position.z) {
      if (box.position.z - activeBox.position.z < widthPrevBox && box.position.z - activeBox.position.z >= 0) {
        intersection = true;
      }
    }

    if (box.position.z < activeBox.position.z) {
      if (activeBox.position.z - box.position.z < widthPrevBox && activeBox.position.z - box.position.z >= 0) {
        intersection = true;
      }
    }

    if (box.position.z === activeBox.position.z) {
      intersection = true;
      fullIntersection = true;
    }
  }

  return { intersection, fullIntersection };
};

const getWidthNewBox = (centerOfBox, centerOfPrevBox, widthPrevBox) => {
  if (centerOfBox > centerOfPrevBox) {
    const x1 = centerOfPrevBox + (widthPrevBox / 2);
    const x2 = centerOfBox - (widthPrevBox / 2);
    return x1 - x2;
  }
  if (centerOfBox < centerOfPrevBox) {
    const x1 = centerOfPrevBox - (widthPrevBox / 2);
    const x2 = centerOfBox + (widthPrevBox / 2);

    return x2 - x1;
  }
  if (centerOfBox === centerOfPrevBox) {
    return widthPrevBox;
  }
  return 100;
};

const getPositionForNewBox = (centerOfBox, centerOfPrevBox) => (centerOfBox + centerOfPrevBox) / 2;

module.exports = {
  checkIntersection,
  getWidthNewBox,
  getPositionForNewBox
};
