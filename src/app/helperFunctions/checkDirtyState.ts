import { CreateChild } from "../component/createChild/createChild";

export const checkDirtyState = (component: CreateChild) => {
  console.log("component ==> ", component);
  if (component.isDirty) {
    return window.confirm(
      " you have not saved this child yet , do you really want to cancel? "
    );
  } else {
    return true;
  }
};
