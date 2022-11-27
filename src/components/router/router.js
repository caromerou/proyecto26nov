//Router --> Direccionamiento
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "../login/login";
import inicio from "../index/index";
import PrivateRoute from "../auth/privaterouter";
import Empleados from "../empleados/inicioe";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={["/empleados"]} component={Empleados} />
        <Route exact path={["/login"]} component={login} />
        <Route exact path={["/"]} component={inicio} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
//IMPORTANTE: COLOCAR NOMBRES DE COMPONENTES TODOS CON LA PRIMERA LETRA EN MAYUSCULA