import { interval } from "rxjs";
import { map, filter, tap, take, takeLast, takeWhile } from "rxjs/operators";

const stream$ = interval(1000).pipe(
  // "tap" operator use to call some side effects
  tap((v) => console.log("Tap v: ", v)),
  // map((v) => v * 3),
  // filter((v) => v % 2 === 0),
  // "take" operator allows define quantity of elements
  // take(5),
  // without takeLast the process of taking "tap" will continue infinitely
  // takeLast(2)
  takeWhile((v) => v < 3)
);

stream$.subscribe({
  next: (v) => console.log("Next value: ", v),
  complete: () => console.log("Complete"),
});

// console.log("Tap v: ", v)
// Tap v:  0
// Next value:  0
// Tap v:  1
// Next value:  1
// Tap v:  2
// Next value:  2
// Tap v:  3
// Complete
