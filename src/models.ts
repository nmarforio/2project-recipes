export interface Meal {
  name: string;
  category: string;
  area: string;
  instructions: string;
  image: string;
  youtube: string;
  ingredients: string[];
  measure: string[];
}

interface ServiceInit {
  status: "init";
}
interface ServiceLoading {
  status: "loading";
}
interface ServiceLoaded<T> {
  status: "loaded";
  payload: T;
}
interface ServiceError {
  status: "error";
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
