import React, {lazy, Suspense} from 'react';
import { Redirect } from "react-router-dom";

const Test = lazy(() => import("../pages/indexx/"));
const Home = (props) => {
  return (
    <Suspense fallback={null}>
      <Test {...props}></Test>
    </Suspense>
  )
};
 
const Test1 = lazy(() => import("../pages/test1/"));
const Detail = (props) => {
  return (
    <Suspense fallback={null}>
      <Test1 {...props}></Test1>
    </Suspense>
  )
};

const Entry = lazy(() => import('../pages/index/'));
const En = (props) => {
  console.warn(props, 'props')
  return (
    <Suspense fallback={null}>
      <Entry {...props}></Entry>
    </Suspense>
  )
};

export default [
  {
    path: "/",
    component: En,
    routes: [
      {
        path: "/",
        exact: true,
        render:  ()=> (
          <Redirect to={"/home"}/>
        )
      },
      {
        path: "/home",
        key: 'home',
        component: Home
      },
      {
        path: "/detail",
        key: 'detail',
        component: Detail
      }
    ]
  }
]