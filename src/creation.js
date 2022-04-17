import { of, from, scan } from "rxjs";

// method "of" allows create streams from any data
/* const stream$ = of(1, 2, 3, 4);

stream$.subscribe((val) => {
  console.log("value: ", val);
}); */

// method "from" always work with arrays
const elems$ = from([1, 2, 3, 4]);

elems$.subscribe((valOfElem) => console.log("valueOfElem: ", valOfElem));

const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) => acc.concat(v), []));

arr$.subscribe((valOfArray) => console.log("valueOfArray: ", valOfArray));
