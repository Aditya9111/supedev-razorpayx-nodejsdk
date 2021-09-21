const Api = require("./utills/Api");
/**
 * Creates a payout for the given details
 * @param {PayoutInfo} payoutInfo (https://razorpay.com/docs/razorpayx/api/payouts/#create-a-payout)
 * @returns {Promise<Object>} any
 */
const create = async function (payoutInfo) {
  return await new Api().call(`/payouts`, ``, "POST", undefined, payoutInfo);
};

const getAll = async function (accountNumber, filter = {}) {
  return await new Api().call(`/payouts`, ``, "GET", {
    account_number: accountNumber,
    ...filter,
  });
};

const get = async function (payoutId) {
  return await new Api().call(`/payouts`, `/${payoutId}`, "GET");
};

const cancel = async function (payoutId) {
  return await new Api().call(`/payouts`, `/${payoutId}/cancel`, "POST");
};

module.exports = { create, getAll, get, cancel };
