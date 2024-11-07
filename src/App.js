import Password from "./Components/Password";
import { TailwindComposedTabs } from "./Components/TailwindTab";
import { IoShieldOutline } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import YourPlan from "./Components/YourPlan";
import Accounts from "./Components/Accounts";

function App() {
  const data = [
    {
      label: "password and security",
      icon: <IoShieldOutline />,
      content: <Password />,
    },
    {
      label: "Your Plan",
      icon: <FaRegIdCard />,
      content: <YourPlan />,
    },
    {
      label: "Accounts",
      icon: <VscAccount />,
      content: <Accounts />,
    },
  ];

  return (
    <div className="bg-[#F0F1F6] h-screen lg:px-24 lg:pt-12">
      <TailwindComposedTabs data={data} />
    </div>
  );
}

export default App;
