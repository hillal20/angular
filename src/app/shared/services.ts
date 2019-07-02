import { Injectable } from "@angular/core";

@Injectable()
export class GeneralService {
  getChildrenData() {
    return childs;
  }

  getSingleChild(id: number) {
    return childs.find((c, i) => {
      return c.id === id;
    });
  }
}
const childs = [
  {
    id: 1,
    name: "hilal",
    lastName: " aissani",
    age: "34",
    item: "book",
    time: "10 am",
    review: "excellent",
    hobby: "soccer",
    height: "6.0"
  },
  {
    id: 2,
    name: "amine ",
    time: "11 am",
    age: "30",
    elements: [1, 23, 15, 17],
    review: "average",
    hobby: "basket ball",
    height: "5.9"
  },
  {
    id: 3,
    name: "hilal",
    lastName: " aissani",
    age: "20",
    time: "8 am",
    elements: [1, 23, 15, 17],
    item: "car",
    review: "bad",
    hobby: "hand ball",
    height: "6.1"
  }
];
