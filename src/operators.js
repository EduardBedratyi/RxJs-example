import { interval, fromEvent } from "rxjs";
import {
  map,
  filter,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap,
} from "rxjs/operators";

fromEvent(document, "click")
  .pipe(
    // switchMap allows change direction from one "stream" to another
    switchMap((event) => {
      // return new "stream"
      return interval(1000).pipe(
        tap((v) => console.log("Tap v: ", v)),
        take(5),
        reduce((acc, v) => acc + v, 0)
      );
    })
  )
  .subscribe({
    next: (v) => console.log("Next value: ", v),
    complete: () => console.log("Complete"),
  });

// console.log("Tap v: ", v)
// Tap v:  0
// Tap v:  1
// Tap v:  2
// Tap v:  3
// Tap v:  4
// Next value:  10
