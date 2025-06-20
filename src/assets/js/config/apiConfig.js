const hostname = window.location.hostname.trim(); // Trimming whitespace from the hostname
let baseUrl = "http://localhost";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";

if (
  hostname === "medicine.gomzilifesciences.in" ||
  hostname === "www.medicine.gomzilifesciences.in"
) {
  baseUrl = "https://api.fggroup.in";
  razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.medicine.gomzilifesciences.in") {
  baseUrl = "https://dev-api.fggroup.in";
} else {
  baseUrl = "https://dev-api.fggroup.in";
  // baseUrl = "http://localhost";
}

const apiConfig = {
  BASE_URL: baseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;
