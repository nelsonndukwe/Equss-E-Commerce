import React
 from 'react';

import {BsTruck} from 'react-icons/bs'
import {FiRefreshCcw} from 'react-icons/fi'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {BiDollarCircle} from 'react-icons/bi'

const serviceData = [
  {
    icon: <BsTruck/>,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <FiRefreshCcw/>,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <RiSecurePaymentLine/>,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  // {
  //   icon: <BiDollarCircle/>,
  //   title: " Back Guarantee",
  //   subtitle: "Lorem ipsum dolor sit amet.",
  //   bg: "#d6e5fb",
  // },
];

export default serviceData;
