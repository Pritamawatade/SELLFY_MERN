import React from "react";

function DashboardBox(props) {
  return (
    <>
      <div
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
        }}
      >

        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white">
              Total Users
            </h4>
            <span className="text-white">
              277
            </span>
            <p className="text-white mt-4">
              Last month
            </p>

          </div>
          
          <div className="ml-auto p-2">
              <span className="icon">
               { props?.icon && props.icon}
              </span>
            </div>
        </div>
      </div>
    </>
  );
}

export default DashboardBox;
