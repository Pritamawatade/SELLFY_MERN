import DashboardBox from "./Dashboard1";
import { FaCircleUser } from "react-icons/fa6";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";


const Dashboard = () => {
  return (
    <div>
      <div className="right-content w-100">
        <div className="row">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
             <DashboardBox color={['#20a559', '#46d281']} icon={<FaCircleUser/>}/>
             <DashboardBox color={['#c013e2', '#e060fa']}  icon={<BsCartPlusFill/>}/>
             <DashboardBox color={['#2e7ae6', '#5babf3']}  icon={<AiFillProduct/>}/>
             <DashboardBox color={['#5dacf4', '#f2ca27']}  icon={<MdReviews/>}/>


            </div>
          </div>
          <div className="col-md-4">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
