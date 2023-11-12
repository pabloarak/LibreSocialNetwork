const db = {
  user: [{ id: "1", name: "Pablo" }],
};

const list = async (table) => db[table];
const get = async (table, id) => {
  let col = await list(table);
  return col.filter((item) => item.id === id[0] || null);
};
const upsert = async (table, data) => {
  db[collection].push(data);
};
const remove = async (table, id) => true;

module.exports = {
  list,
  get,
  upsert,
  remove,
};
