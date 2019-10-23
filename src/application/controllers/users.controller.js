const fetchUrl = require("fetch").fetchUrl;

let usersService = {
    getUsers: (req, res) => {
        let users;
        fetchUrl("https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users", function (error, meta, body) {
            console.log(body.toString());
            
            apiUsers = JSON.parse(body.toString());

            let usersActive = apiUsers.users.filter(anUser => anUser.is_active === true)

            let orderUsers = usersActive.sort((a, b) => a.lastname.localeCompare(b.lastname));

            orderUsers.forEach(anUser => {
                let birthday = anUser.birthday.substring(0, 4);
                let currentYear = new Date().getFullYear();
                let age = currentYear - birthday;
                console.log(age);
                anUser.age = age;
            });

            return res.status(200).json({ "error": false, "response": orderUsers });
        });
        
        
    },

}

module.exports = usersService;