// LendersList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './LendersList.css'; // Importing the CSS file
// import fibeImg from '../images/fibelogo.jpg';
import fibeImg from '../NewPersonalLoanImages/fibelogo.jpg';
import coin from '../NewPersonalLoanImages/SmartCoin.png';
import ltfs from '../NewPersonalLoanImages/ltfs.png';

const LendersList = ({ json1 }) => {
  return (
<>
    {console.log("in lendersList json : ",json1.lender_details)}

    <div>
      {json1.lender_details.map((lender, index) => (
        <div key={index} className="card-container">
          <div className="card-content">
            <img alt="logo" src={lender.logo} className="logo" />
            <div className="text-content">
              <Typography variant="h5" component="div" className="title">
                {lender.product}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="data">
                Quick Personal Loans, 100% digital collateral-free
              </Typography>
            </div>
          </div>
          <div className="details">
            <div className="detail">
              <Typography variant="body2" color="textSecondary">
                <span className="detail-label">{lender.maxloanamount}</span> <br />Max Amount
              </Typography>
            </div>
            <div className="detail">
              <Typography variant="body2" color="textSecondary">
                <span className="detail-labels">{lender.tenure}</span> <br />Tenure
              </Typography>
            </div>
            <div className="detail">
              <Typography variant="body2" color="textSecondary">
                <span className="detail-labels">{lender.interest}</span> <br />Interest
              </Typography>
            </div>
          </div>
          <div className="action-button">
            <Link to={`/NewPersonalLoan/${lender.product}`} className="getLoanButtonLink">
              <button
                size="small"
                variant="contained"
                className="getLoanButton"
              >
                Get Loan
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

// export default LendersList;


export default LendersList;
