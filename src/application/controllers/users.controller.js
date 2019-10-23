const { fetchUrl } = require('fetch');

const usersService = {
  getUsers: (req, res) => {
    try {
      fetchUrl('https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users', (error, meta, body) => {
        if (meta.status === 200) {
          const apiUsers = JSON.parse(body.toString());

          const usersActive = apiUsers.users.filter((anUser) => anUser.is_active === true);

          const orderUsers = usersActive.sort((a, b) => a.lastname.localeCompare(b.lastname));

          orderUsers.forEach((anUser) => {
            const birthday = anUser.birthday.substring(0, 4);
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthday;

            anUser.age = age;
          });

          const users = { users: orderUsers };

          return res.status(200).json({ error: false, response: users });
        }

        if (meta.status === 400) {
          return res.status(400).json({ error: true, message: 'The server could not interpret the given request' });
        }

        if (meta.status === 401) {
          return res.status(400).json({ error: true, message: 'It is necessary to be authenticated to obtain the requested response' });
        }

        if (meta.status === 404) {
          return res.status(400).json({ error: true, message: 'The server could not find the requested content' });
        }

        if (meta.status === 500) {
          return res.status(400).json({ error: true, message: 'The server has found a situation that does not know how to handle it' });
        }

        return res.status(404).json({ error: true, message: 'The server is not responding' });
      });
    } catch (error) {
      return res.status(404).json({ error: true, message: 'The server is not responding' });
    }
  },

};

module.exports = usersService;
