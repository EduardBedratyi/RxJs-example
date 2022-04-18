import { interval } from "rxjs";
import { map, filter, tap, take } from "rxjs/operators";

const stream$ = interval(1000).pipe(
  // "tap" operator use to call some side effects
  tap((v) => console.log("Tap v: ", v)),
  map((v) => v * 3),
  filter((v) => v % 2 === 0),
  // "take" operator allows define quantity of elements
  take(5)
);

stream$.subscribe({
  next: (v) => console.log("Next value: ", v),
  complete: () => console.log("Complete"),
});
