import { Subject, BehaviorSubject } from "rxjs";
// Subject is a kind of Observable, but first create "stream", then subscribe and then dispatch the event
document.addEventListener("click", () => {
  // const stream$ = new Subject();

  // BehaviorSubject need an initial value
  const stream$ = new BehaviorSubject("First of all");

  stream$.subscribe((v) => console.log("Value: ", v));
  // console.log("Value: ", v):
  // Value:  First of all
  // Value:  Hello
  // Value:  world of
  // Value:  RxJs

  stream$.next("Hello");
  stream$.next("world of ");
  stream$.next("RxJs");

  // in case when subscribe places after all, initial value changes to last value
  /*
  stream$.next("Hello");
  stream$.next("world of ");
  stream$.next("RxJs"); 

  stream$.subscribe((v) => console.log("Value: ", v));
  // console.log("Value: ", v):
  // Value:  RxJs
  */
});
