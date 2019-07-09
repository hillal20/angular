import { Profile } from "./profile";
import { LoginForm } from "./form/loginForm";
export const userRoutes = [
  {
    path: "profile",
    component: Profile
  },
  { path: "login", component: LoginForm }
];
