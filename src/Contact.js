const Api = require("./utills/Api");

const create = async function (contactInfo) {
  return await new Api().call(`/contacts`, ``, "POST", undefined, contactInfo);
};

const update = async function (contactId, contactInfo) {
  return await new Api().call(
    `/contacts`,
    `/${contactId}`,
    "PATCH",
    undefined,
    contactInfo
  );
};

const getAll = async function (filters = {}) {
  return await new Api().call(`/contacts`, ``, "GET", filters);
};

const get = async function (contactId) {
  return await new Api().call(`/contacts`, `/${contactId}`, "GET");
};

const activate = async function (contactId) {
  return await new Api().call(
    `/contacts`,
    `/${contactId}`,
    "PATCH",
    undefined,
    { active: true }
  );
};

const deactivate = async function (contactId) {
  return await new Api().call(
    `/contacts`,
    `/${contactId}`,
    "PATCH",
    undefined,
    { active: false }
  );
};
/**
 *
 */
module.exports = { create, update, getAll, get, activate, deactivate };
