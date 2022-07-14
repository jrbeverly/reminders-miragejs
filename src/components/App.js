import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Reminders from "./Reminders";
import { Link } from "./UI";

export default function App() {
  let location = useLocation();

  return (
    <div className="pt-12">
      <header className="max-w-md mx-auto">
        <nav className="mt-4 space-x-5">
          <Link
            className={`pb-px font-medium text-sm text-cool-gray-900 border-b-2 border-cool-gray-600`}
            to={`/${location.search}`}
          >
            Reminders
          </Link>
        </nav>
      </header>

      <main className="mt-10">
        <Switch>
          <Route path="/:listId?" exact>
            <Reminders />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
