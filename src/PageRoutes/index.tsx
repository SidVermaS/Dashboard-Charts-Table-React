import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route,  Redirect } from "react-router-dom";
// import { Router, } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import cookies from "react-cookies";
import {  unsecuredRoutes, securedRoutes,  } from "./routes";
import { logout, setUser } from "../store/actions/user.action";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";

import { useHistory } from "react-router-dom";
const PageRoutes = (props: any) => {
  
  const history:any = useHistory();

  let [displayedUser, setDisplayedUser] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.load("refresh_token") && cookies.load("access_token")) {
      props.setUser();// eslint-disable-next-line
      displayedUser = true;
    } else {
      props.logout();
      displayedUser = false;
    }
    setDisplayedUser(displayedUser)
    //  eslint-disable-next-line
  }, [cookies.load("refresh_token"), cookies.load("access_token")]);

  return (
    <div>
<button type='button' onClick={()=>    history.push('/orders')}>click</button>
      {displayedUser && <HeadAppBar />}
      <Router>
        <Switch>
          {displayedUser?securedRoutes.map((route: any) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
          )) : unsecuredRoutes.map((route: any) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
              ))}{" "}
          {(!cookies.load("refresh_token") || !cookies.load("access_token")) && <Redirect to={unsecuredRoutes[0].path} />}
            <Route component={NotFound} />

          </Switch>
        </Router>
    </div>
  );
};
const mapStateToProps = ({ user }: any) => ({
  type: user.type,
});
export default connect(mapStateToProps, { logout, setUser })(PageRoutes);
