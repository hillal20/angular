export interface IChild {
  id: number;
  name: string;
  lastName?: string;
  age: number;
  time: string;
  date: Date;
  elements: number[];
  item: string;
  review: string;
  hobby: string;
  height: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions?: ISession[];
}

export interface ISession {
  id: number;
  name: string;
}
