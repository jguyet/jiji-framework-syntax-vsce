const Jiji = require("jiji");

Jiji.initialize("browser", () => {
    Jiji.Router.init([
        {
            path: "/", controller: {
                constructor: (controller, callback, detectChange) => {
                },
                innerHTML: `<div></div>`
            }
        }

    ]);
    Jiji.Router.route();
});