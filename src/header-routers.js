import { lazy } from "react";

const Profile = lazy(() => import("./components/HW_01/Task1/Profile"));
const Statistics = lazy(() => import("./components/HW_01/Task2/Statistics"));
const FriendList = lazy(() => import("./components/HW_01/Task3/FriendList"));
const TransactionHistory = lazy(() =>
  import("./components/HW_01/Task4/TransactionHistory")
);
const Feedback = lazy(() => import("./components/HW_02/Task1/Feedback"));
const Phonebook = lazy(() => import("./components/HW_02/Task2/Phonebook"));
const Gallery = lazy(() => import("./components/HW_03/Task2/Gallery"));

export default [
  {
    path: "/profile",
    label: "Profile",
    hw: "01",
    component: Profile,
  },
  {
    path: "/statistics",
    label: "Statistics",
    hw: "01",
    component: Statistics,
  },
  {
    path: "/friends",
    label: "Friends",
    hw: "01",
    component: FriendList,
  },
  {
    path: "/transactions",
    label: "Transactions",
    hw: "01",
    component: TransactionHistory,
  },
  {
    path: "/feedback",
    label: "Feedback",
    hw: "02",
    component: Feedback,
  },
  {
    path: "/phonebook",
    label: "Phonebook",
    hw: "02",
    component: Phonebook,
  },
  {
    path: "/gallery",
    label: "Gallery",
    hw: "03",
    component: Gallery,
  },
];
