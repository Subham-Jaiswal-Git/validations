import React, { useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
const Menu = () => {
  const [activeSection, setActiveSection] = useState("sec1");
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {/* Selectable Menu */}
      <div className="pb-0 p-4 grid grid-cols-5 text-center">
        <button
          onClick={() => setActiveSection("sec1")}
          className={`bg-gray-200 text-gray-700 text-sm font-bold p-6 border border-t-0 border-b-0 hover:bg-gray-300 transition ${activeSection === "sec1" ? "bg-white " : ""}`}
        >
          <span>FEATURES</span>
          <br />
          <span className="text-gray-500 text-xs">Apps & Components</span>
        </button>

        <button
          onClick={() => setActiveSection("sec2")}
          className={`bg-gray-200 text-gray-700 text-sm font-bold p-6 border border-t-0 border-b-0 hover:bg-gray-300 transition ${activeSection === "sec2" ? "bg-white " : ""}`}
        >
          <span>ACCOUNTING</span>
          <br />
          <span className="text-gray-500 text-xs">Orders & Delivery</span>
        </button>

        <button
          onClick={() => setActiveSection("sec3")}
          className={`bg-gray-200 text-gray-700 text-sm font-bold p-6 border border-t-0 border-b-0 hover:bg-gray-300 transition ${activeSection === "sec3" ? "bg-white" : ""}`}
        >
          <span>ECOMMERCE</span>
          <br />
          <span className="text-gray-500 text-xs">Orders & Delivery</span>
        </button>

        <button
          onClick={() => setActiveSection("sec4")}
          className={`bg-gray-200 text-gray-700 text-sm font-bold p-6 border border-t-0 border-b-0 hover:bg-gray-300 transition ${activeSection === "sec4" ? "bg-white" : ""}`}
        >
          <span>AUDIENCE</span>
          <br />
          <span className="text-gray-500 text-xs">Customers Directory</span>
        </button>

        <button
          onClick={() => setActiveSection("sec5")}
          className={`bg-gray-200 text-gray-700 text-sm font-bold p-6 border border-t-0 border-b-0 hover:bg-gray-300 transition ${activeSection === "sec5" ? "bg-white" : ""}`}
        >
          <span>AUDIT</span>
          <br />
          <span className="text-gray-500 text-xs">Activities & Logs</span>
        </button>
      </div>

      {/* Sections */}
      <div className="p-4">
        {activeSection === "sec1" && (
          <div id="sec1" className="flex space-x-2 m-2 ml-[30px]">
            <button onClick={() => setShowDashboard(!showDashboard)} id="dashboard-button" className="text-[12px] font-bold text-gray-400 bg-gray-200 px-3 py-2 rounded hover:text-gray-700">
              Dashboards
            </button>
            <button className="text-[12px] font-bold text-gray-400 bg-gray-200 px-3 py-2 rounded hover:text-gray-700">
              Pages
            </button>
            <button className="text-[12px] font-bold text-gray-400 bg-gray-200 px-3 py-2 rounded hover:text-gray-700">
              Apps
            </button>
            <button className="text-[12px] font-bold text-gray-400 bg-gray-200 px-3 py-2 rounded hover:text-gray-700">
              Help
            </button>
          </div>
        )}

        {activeSection === "sec2" && (
          <div id="sec2" className="flex space-x-2 ml-[30px] m-2">
            <div className="bg-blue-100 text-[12px] font-bold text-blue-500 px-3 py-2 rounded-md shadow transition-all hover:bg-blue-500 hover:text-white">
              Controls
            </div>
            <div className="bg-green-100 text-[12px] font-bold text-green-500 px-3 py-2 rounded-md shadow transition-all hover:bg-green-500 hover:text-white">
              Advanced
            </div>
            <div className="bg-red-100 text-[12px] font-bold text-red-500 px-3 py-2 rounded-md shadow transition-all hover:bg-red-500 hover:text-white">
              Floating Labels
            </div>
          </div>
        )}

        {activeSection === "sec3" && (
          <div id="sec3" className="flex space-x-2 ml-[30px] m-2">
            <div className="bg-blue-100 text-[12px] font-bold text-blue-500 px-3 py-2 rounded-md shadow transition-all hover:bg-blue-500 hover:text-white">
              User Management
            </div>
            <div className="bg-green-100 text-[12px] font-bold text-green-500 px-3 py-2 rounded-md shadow transition-all hover:bg-green-500 hover:text-white">
              Inbox
            </div>
            <div className="bg-red-100 text-[12px] font-bold text-red-500 px-3 py-2 rounded-md shadow transition-all hover:bg-red-500 hover:text-white">
              File Manager
            </div>
          </div>
        )}

        {activeSection === "sec4" && (
          <div id="sec4" className="flex space-x-2 ml-[30px] m-2">
            <div className="bg-blue-100 text-[12px] font-bold text-blue-500 px-3 py-2 rounded-md shadow transition-all hover:bg-blue-500 hover:text-white">
              eCommerce
            </div>
            <div className="bg-red-100 text-[12px] font-bold text-red-500 px-3 py-2 rounded-md shadow transition-all hover:bg-red-500 hover:text-white">
              File Manager
            </div>
          </div>
        )}

        {activeSection === "sec5" && (
          <div id="sec5" className="flex space-x-2 ml-[30px] m-2">
            <div className="bg-blue-100 text-[12px] font-bold text-blue-500 px-3 py-2 rounded-md shadow transition-all hover:bg-blue-500 hover:text-white">
              Documentation
            </div>
            <div className="bg-green-100 text-[12px] font-bold text-green-500 px-3 py-2 rounded-md shadow transition-all hover:bg-green-500 hover:text-white">
              Video Tutorials
            </div>
            <div className="bg-red-100 text-[12px] font-bold text-red-500 px-3 py-2 rounded-md shadow transition-all hover:bg-red-500 hover:text-white">
              Layout Builder
            </div>
          </div>
        )}
      </div>
      {showDashboard && (
        <motion.div
          id="dashboard"
          className="p-0"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div id="" class="ml-10">
            <div class="bg-white  rounded-lg shadow-md flex w-2/3">
              <div class="w-2/3 p-6">
                <div class="grid grid-cols-2 gap-3">

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg"><HiSquares2X2 /></span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Default</h3>
                      <p class="text-gray-500 text-sm">Reports & statistics</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">🛒</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">eCommerce</h3>
                      <p class="text-gray-500 text-sm">Sales reports</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">📂</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Projects</h3>
                      <p class="text-gray-500 text-sm">Tasks, graphs & charts</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">📚</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Online Courses</h3>
                      <p class="text-gray-500 text-sm">Student progress</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg"><VscGraph /></span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Marketing</h3>
                      <p class="text-gray-500 text-sm">Campaigns & conversions</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">💰</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Bidding</h3>
                      <p class="text-gray-500 text-sm">Campaigns & conversions</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">🖥</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">POS System</h3>
                      <p class="text-gray-500 text-sm">Campaigns & conversions</p>
                    </div>
                  </a>

                  <a href="#" class="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded">
                    <span class="text-lg">📞</span>
                    <div>
                      <h3 class="font-semibold text-gray-800">Call Center</h3>
                      <p class="text-gray-500 text-sm">Campaigns & conversions</p>
                    </div>
                  </a>
                </div>

                <div class="border-t my-4"></div>
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="font-semibold text-gray-800">Landing Page Template</h3>
                    <p class="text-gray-500 text-sm">One-page landing template with pricing & others</p>
                  </div>
                  <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-300 inline-block">Explore</a>

                </div>
              </div>

              <div class="w-1/3 border-l pl-6 bg-gray-200 p-6">
                <h3 class="font-semibold text-gray-800 mb-3">More Dashboards</h3>
                <ul class="space-y-2 text-gray-600 text-sm">
                  <li><a href="#" class="hover:text-gray-800">Logistics</a></li>
                  <li><a href="#" class="hover:text-gray-800">Website Analytics</a></li>
                  <li><a href="#" class="hover:text-gray-800">Finance Performance</a></li>
                  <li><a href="#" class="hover:text-gray-800">Store Analytics</a></li>
                  <li><a href="#" class="hover:text-gray-800">Social</a></li>
                  <li><a href="#" class="hover:text-gray-800">Delivery</a></li>
                  <li><a href="#" class="hover:text-gray-800">Crypto</a></li>
                  <li><a href="#" class="hover:text-gray-800">School</a></li>
                  <li><a href="#" class="hover:text-gray-800">Podcast</a></li>
                </ul>

              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Menu;
