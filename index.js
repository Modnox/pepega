module.exports = function pepega(dispatch) {
    const config = require('./config.json')
    let enabled = true
    let names = config.name
    let messages = config.messages
    let pepegamode = false;

    dispatch.command.add('pepega', (cmd) => {
        switch (cmd) {
            case "rng":
                sendMessage('Test')
                break;
            default:
                enabled = !enabled
                dispatch.command.message('pepega ' + (enabled ? 'enabled' : 'disabled'))
        }
    })

    dispatch.hook('S_USER_DEATH', 1, (event) => {
        if (enabled) {
            if (names.includes(event.name)) {
                sendMessage(event.name)
            }
            if (pepegamode) {
                dispatch.command.exec('pr valk')
            }
        }
    })

    dispatch.hook('S_LOGIN', 14, e => {
            if (e.name === 'Keezy' || e.name === 'Valnox') {
                console.log('Pepegamode enabled')
                pepegamode = true;
            }
        }
    )

    function sendMessage(name) {
        setTimeout(function () {
            dispatch.toServer('C_CHAT', 1, {channel: 1, message: name + messages[rand(messages.length - 1)]});
        }, 500);
    }

    function rand(num) {
        return Math.floor(Math.random() * num);
    }
}