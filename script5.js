// area of overlapping rectangles
// create a function that returns the area of the overlap between two
// rectangles. the function will recieve two rectangles, each with the
// coordinates of two of its opposite angles.

function overlappingArea(l1, r1, l2, r2) {
  let x = 0;
  let y = 1;

  let area1 = Math.abs(l1[x] - r1[x]) * Math.abs(l1[y] - r1[y]);

  let area2 = Math.abs(l2[x] - r2[x]) * Math.abs(l2[y] - r2[y]);

  
  let x_dist = Math.min(r1[x], r2[x]) - Math.max(l1[x], l2[x]);

  let y_dist = Math.min(r1[y], r2[y]) - Math.max(l1[y], l2[y]);
  let areaI = 0;
  if (x_dist > 0 && y_dist > 0) areaI = x_dist * y_dist;

  return area1 + area2 - areaI;
}


let l1 = [2, 2];
let r1 = [5, 7];
let l2 = [3, 4];
let r2 = [6, 9];


console.log(overlappingArea(l1, r1, l2, r2));

