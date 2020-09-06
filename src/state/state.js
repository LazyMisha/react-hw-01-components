import statisticalData from "../resources/statistical-data.json";
import friendList from "../resources/friend-list.json";
import transactions from "../resources/transaction-history.json";
import profileUser from "../resources/user.json";

let state = {
  statisticsComponent: {
    statisticalData: statisticalData,
    title: "Upload Stats",
  },
  friendListComponent: {
    friendList: friendList,
  },
  transactionHistoryComponent: {
    transactions: transactions,
  },
  profileComponent: {
    profileUser: profileUser,
  },
};

export default state;
