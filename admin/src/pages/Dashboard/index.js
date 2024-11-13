import Dashboard1 from "../../component/Dashboard1";

const Dashboard = () => {
  return (
    <div>
      <div className="right-content w-100">
        <div className="row">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
             <Dashboard1 />
             <Dashboard1 />
             <Dashboard1 />
             <Dashboard1 />


             {/* TODO video at 15 min */}
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
