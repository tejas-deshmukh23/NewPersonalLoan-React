import React, { useEffect, useState } from 'react';
import img from '../../images/logo1-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loader = () => {
  const navigate=useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  const messages=["Waiting...","Verifying...","Checking eligibility...", "Finding lenders...", "Creating app..."];
     
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create a FormData object
/*const formData = new FormData();
formData.append('userPhoneNumber', userPhoneNumber);*/


// Add data to the FormData
const userPhoneNumber = sessionStorage.getItem('userPhoneNumber');


// Convert FormData to JSON object
const data = {
  mobilenumber: userPhoneNumber 
};

        
        console.log("hitting api");
      
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/submit`, data, {
          headers: {
            'Content-Type': 'application/json',
            'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
          }
        });
      
        console.log(response.data);
        if(response.data.code ===200)
        {
          const mydata={
           product:response.data.data.lender_details[0].product,
           logo:response.data.data.lender_details[0].logo,
          url:response.data.data.lender_details[0].applicationlink,
          amount:response.data.data.lender_details[0].maxloanamount,
        }

          sessionStorage.setItem('sucessData',JSON.stringify(mydata));
           navigate('/sucess')
        }
        else{
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };
    fetchData();
  }, []); // No need to include user in the dependency array if it's not used in the API call

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to cplist after 7 seconds
      // navigate('/con');
    }, 3000); // 7 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    
    <div style={{ background: 'linear-gradient(rgb(255 221 157 / 9%), rgb(179 133 240 / 27%))', width: '100%', height: '100%', position: 'fixed', left: 0, top: 0, opacity: 0.9 }}>       <style>
        {`
          #loading-wrapper {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
          }
          
          #loading-text {
            display: block;
            position: absolute;
            
           top: 25%;
           left: 49%;
            color: #999;
            width: 100px;
            height: 30px;
            margin: -7px 0 0 -45px;
            text-align: center;
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 20px;
          }
          
          #loading-content {
            display: block;
            position: relative;
            left: 50%;
            top: 30%;
            width: 170px;
            height: 170px;
            margin: -85px 0 0 -85px;
            border: 3px solid #F00;
          }
          
          #loading-content:after {
            content: "";
            position: absolute;
            border: 3px solid #0F0;
            left: 15px;
            right: 15px;
            top: 15px;
            bottom: 15px;
          }
          
          #loading-content:before {
            content: "";
            position: absolute;
            border: 3px solid #00F;
            left: 5px;
            right: 5px;
            top: 5px;
            bottom: 5px;
          }
          
          #loading-content {
            border: 3px solid transparent;
            border-top-color: #9747ff;
            border-bottom-color: #9747ff;
            border-radius: 50%;
            -webkit-animation: loader 2s linear infinite;
            -moz-animation: loader 2s linear infinite;
            -o-animation: loader 2s linear infinite;
            animation: loader 2s linear infinite;
          }
          
          #loading-content:before {
            border: 3px solid transparent;
            border-top-color: #F9BA45;
            border-bottom-color: #F9BA45;
            border-radius: 50%;
            -webkit-animation: loader 3s linear infinite;
              -moz-animation: loader 2s linear infinite;
            -o-animation: loader 2s linear infinite;
            animation: loader 3s linear infinite;
          }
          
          #loading-content:after {
            border: 3px solid transparent;
            border-top-color: #F9BA45;
            border-bottom-color: #9f47ff;
            border-radius: 50%;
            -webkit-animation: loader 1.5s linear infinite;
            animation: loader 1.5s linear infinite;
              -moz-animation: loader 2s linear infinite;
            -o-animation: loader 2s linear infinite;
          }
           
          @-webkit-keyframes loaders {
            0% {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @keyframes loader {
            0% {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          #content-wrapper {
            color: #FFF;
            position: fixed;
            left: 0;
            top: 20px;
            width: 100%;
            height: 100%;
          }
          
          #header
          {
            width: 800px;
            margin: 0 auto;
            text-align: center;
            height: 100px;
            background-color: #666;
          }
          
          #content
          {
            width: 800px;
            height: 1000px;
            margin: 0 auto;
            text-align: center;
            background-color: #888;
          }
          
          @media (max-width: 768px) {
            img {
                margin-left: -10%;
                height: 410%;
                margin-top: -18%;
            }
          }
          @media (max-width: 576px) {
            img {
                margin-left: -10%;
                height: 410%;
                margin-top: -18%;
            }
          }
          @media only screen and (max-width: 768px) {
            p {
              font-size: 18px !important;
              margin-top: 100% !important;
            }
          }
          @media only screen and (max-width: 576px) {
            p {
              font-size: 18px !important;
              margin-top: 100% !important;
            }
          }
          
        `}
      </style>
      
      <div id="loading-wrapper">
          <div id="loading-text">
            <img src={img} alt="logo" style={{ marginBottom:'30%',width:'120px',height:'-120px',marginRight:'40%'}} />
          </div>
          <div id="loading-content"></div>
        </div>
      </div>
      <p style={{fontSize: '20px', textAlign: 'center',marginTop:'30%'}}>
      {messages[messageIndex]}
      </p>
    </>
  );
};

export default Loader;
