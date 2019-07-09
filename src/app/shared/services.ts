import { Injectable } from "@angular/core";
import { IChild } from "./models/childsModel";
@Injectable()
export class GeneralService {
  getChildrenData(): IChild[] {
    return childs;
  }

  getSingleChild(id: number): IChild {
    return childs.find((c, i) => {
      return c.id === id;
    });
  }
}
const childs: IChild[] = [
  {
    id: 1,
    name: "hilal",
    date: new Date("9/26/2090"),
    lastName: "aissani",
    age: 34,
    item: "book",
    time: "9 am",
    review: "excellent",
    elements: [1, 23, 15, 17],
    hobby: "soccer",
    height: "6.0",
    location: {
      address: "2345 east 100 st",
      city: "NYC",
      country: "USA"
    },
    sessions: [
      {
        id: 1,
        name: "session1"
      },
      {
        id: 2,
        name: "session2"
      }
    ]
  },
  {
    id: 3,
    date: new Date(),
    name: "xxxxxxxx ",
    lastName: "xxxxxx",
    age: 20,
    time: "8 am",
    elements: [1, 23, 15, 17],
    item: "car",
    review: "bad",
    hobby: "hand ball",
    height: "6.1",
    location: {
      address: "2345 east 100 st",
      city: "NYC",
      country: "USA"
    },
    sessions: [
      {
        id: 1,
        name: "session1"
      },
      {
        id: 2,
        name: "session2"
      }
    ]
  },
  {
    id: 2,
    date: new Date(),
    name: "bbabababa ",
    lastName: "",
    age: 20,
    time: "8 am",
    elements: [1, 23, 15, 17],
    item: "car",
    review: "bad",
    hobby: "hand ball",
    height: "6.1",
    location: {
      address: "2345 east 100 st",
      city: "NYC",
      country: "USA"
    },
    sessions: [
      {
        id: 1,
        name: "session1"
      },
      {
        id: 2,
        name: "session2"
      }
    ]
  }
];
