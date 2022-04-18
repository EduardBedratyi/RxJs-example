import { Subject } from "rxjs";
// Subject is a kind of Observable, but first create "stream", then subscribe and then dispatch the event
document.addEventListener("click", () => {
  const stream$ = new Subject();

  stream$.subscribe((v) => console.log("Value: ", v));

  stream$.next("Hello");
  stream$.next("world of ");
  stream$.next("RxJs");
});
