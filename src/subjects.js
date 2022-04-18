import { Subject, BehaviorSubject, ReplaySubject } from "rxjs";
// Subject is a kind of Observable, but first create "stream", then subscribe and then dispatch the event
document.addEventListener("click", () => {
  // such "stream" remember all values or as many values as we determine in argument starting from the last one
  const stream$ = new ReplaySubject();

  stream$.next("Hello");
  stream$.next("world of ");
  stream$.next("RxJs");

  stream$.subscribe((v) => console.log("Value: ", v));
  // console.log("Value: ", v):
  // Value:  Hello
  // Value:  world of
  // Value:  RxJs
  /******************************/
  //const stream$ = new ReplaySubject(1);
  // console.log("Value: ", v):
  // Value:  RxJs
  /******************************/
  //const stream$ = new ReplaySubject(2);
  // console.log("Value: ", v):
  // Value:  world of
  // Value:  RxJs
});
