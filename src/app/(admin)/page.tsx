/* eslint-disable array-callback-return */
/* eslint-enable array-callback-return */
import type { Metadata } from "next";
import { Mains } from "@/components/dashboards/main";
import React from "react";
import Temp from "@/components/dashboards/temp";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title:
    "IRRIoT",
  description: "Smart Solution",
};

export default function Main() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <Mains />

        {/* <MonthlySalesChart /> */}
      </div>

      <div className="col-span-12 xl:col-span-5">
        <Temp />
      </div>

      {/* <div className="col-span-12">
        <StatisticsChart />
      </div> */}

      {/* <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div> */}
    </div>
  );
}
