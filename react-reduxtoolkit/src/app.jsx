import React from "react";
import "./app.css";

import { CakeView } from "./features/cake/CakeView";
import { IcecreamView } from "./features/icecream/IcecreamView";
import { UserView } from "./features/user/UserView";

export function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}
