import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverView />
      <Header />
    </div>
  );
}

export default AppLayout;
