import { of, from, Observable, fromEvent, interval, timer } from "rxjs";
import { scan, map } from "rxjs/operators";

// method "of" allows create "stream" from any data
/* const stream$ = of(1, 2, 3, 4);

stream$.subscribe((val) => {
  console.log("value: ", val);
}); */

// method "from" always work with arrays
// const elems$ = from([1, 2, 3, 4]);

// elems$.subscribe((valOfElem) => console.log("valueOfElem: ", valOfElem));

// const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) => acc.concat(v), []));

// arr$.subscribe((valOfArray) => console.log("valueOfArray: ", valOfArray));

const stream$ = new Observable((observer) => {
  observer.next("First value");
  setTimeout(() => observer.next("Second value (after 1000 ms)"), 1000);
  // the "complete" method finishes stream and nothing run after it
  setTimeout(() => observer.complete(), 1500);
  setTimeout(() => observer.error("There was an error"), 2000);
  setTimeout(() => observer.next("Second value (after 3000 ms)"), 3000);
});

// to handele results there ara two ways

// 1. By passing into subscribe 3 callbacks (structure as try catch final)
/* stream$.subscribe(
  // next method
  (val) => console.log("ObservableVal: ", val),
  // error metod
  (err) => console.log(err),
  // this "complete" callback does not call inside Observable if stream has an error
  // that`s why we place it before the error (see above)
  () => console.log("stream is completed")
);*/

// 2. By passing into subscribe object with three keys
/*stream$.subscribe({
  next(val) {
    console.log("value: ", val);
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log("current stream is completed");
  },
});*/

// creating "stream" by Events
/*fromEvent(document.querySelector("canvas"), "mousemove")
  .pipe(
    map((e) => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext("2d"),
    }))
  )
  .subscribe((pos) => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  });

const clear$ = fromEvent(document.getElementById("clear"), "click");

clear$.subscribe(() => {
  const canvas = document.querySelector("canvas");

  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
});*/

const sub = interval(500).subscribe((v) => console.log("v: ", v));
// it is a "stream" unsubscribing in 4 seconds
setTimeout(() => {
  sub.unsubscribe();
}, 4000);

// an setTimeout analogy, which creates "stream"
timer(2500).subscribe((v) => console.log(v));
