import { ethers } from "ethers";

export const parseAmount = (value, decimals) => {
  //   // value must be a string and decimals must be a number
  return ethers.parseUnits(String(value), Number(decimals)).toString();
};

export const formatAmount = (value, decimals) => {
  return ethers.formatUnits(String(value), Number(decimals));
};
// export const truncLeadingZeros = (fromAmount) => {
//   // takes in the fromAmount and truncate out the leading zeros
//
//   let startPosition;
//   const fromAmtArr = fromAmount.split("");
//   for (let i = 0; i < fromAmtArr.length; i++) {
//     //   find index of the first non-zero item
//     if (fromAmtArr[i] > "0") {
//       startPosition = i;
//       break;
//     }
//   }
//   const newFromAmount = fromAmount.substring(startPosition);
//   return newFromAmount;
// };
//
// // main function that adjusts fromAmount decimals
// export const fromAmountAdjuster = (fromAmount, tokenDecimals) => {
//   const zeros = [];
//   let adjustedFromAmount;
//
//   for (let i = 1; i <= tokenDecimals; i++) {
//     // populate decimals array with needed number of zeros
//     zeros.push("0");
//   }
//
//   // check for a preceding zeros pattern and call the truncLeadingZeros function when true. Otherwise, don't call the function
//   const pattern = /^0*[1-9][0-9]*$/;
//   if (pattern.test(fromAmount)) {
//     adjustedFromAmount = truncLeadingZeros(fromAmount) + zeros.join("");
//   } else {
//     adjustedFromAmount = fromAmount + zeros.join("");
//   }
//
//   return adjustedFromAmount;
// };
