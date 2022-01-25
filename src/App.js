import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/antd.css';
import Search from './components/Header/Search';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <div className='container' >
        <div className='row'>
          <Sidebar />
          <div className="main">
            <Header />
            <hr />
            <h3>Hello, David Anderson</h3>
            <div className="d-flex justify-content-between">
              <div className='left-div mx-1'>

                <div className="d-flex flex-column align-item-center flex-container">
                  <div className="p-2 my-2 location ">
                    <span className='student'>Student Location</span>
                    <img src="Frame.png" alt="Location" className='location-img' />
                  </div>

                  <div className="p-2 my-2  ">
                    <div className="d-flex justify-content-between ">
                      <div className="p-2 mx-3  t-booking">Total Earnings</div>
                      <div className="p-2 mx-2 t-earning">Total Bookings</div>
                    </div>
                  </div>
                  <div className="p-2 my-2 earnings">Earnings</div>
                  <div className="p-2 my-2 progress">Your Progress</div>
                </div>

              </div>

              <div className='right-div mx-1'>
                <div className="d-flex flex-column align-item-center flex-container">
                  <div className="p-2 my-2 calender ">
                    <span>Student Location</span>
                  </div>
                  <div className="p-2 my-2 upcomming">Earnings</div>
                  <div className="p-2 my-2 upcomming">Earnings</div>
                  <div className="p-2 my-2 upcomming">Earnings</div>
                  <div className="p-2 my-2 upcomming">Earnings</div>
                </div>
                

              </div>

            </div>
          </div>

        </div>

      </div>



    </>
  );
};

export default App;

