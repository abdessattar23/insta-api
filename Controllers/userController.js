const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

exports.getUserInfo = async (req, res) => {
  try {
    await ig.account.login(username, password);
    const user = await ig.user.search(req.params.username);
    const userInfo = await ig.user.info(user.pk);
    res.json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user info' });
  }
};
