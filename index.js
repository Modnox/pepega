module.exports = function pepega(dispatch) {
    const config = require('./config.json')
    let enabled = true
    let names = config.name
    let messages =
        [': Another One!',
            ' you TRASH LMAO.',
            '. Here we go again!',
            ' PEPEGA!',
            ' nice floormat.',
            ' is getting closer to the wheelchair.',
            '. /drop when?',
            ' is taking a break.',
            '. Nice parse!',
            ' is living the Youtuber lifestyle.',
            '.exe has stopped working.',
            '! Guide has been disabled.',
            '. Mistakes were made.'
        ]

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
        if (names.includes(event.name)) {
            sendMessage(event.name)
        }
    })

    function sendMessage(name) {
        setTimeout(function () {
            dispatch.toServer('C_CHAT', 1, {channel: 1, message: name  + messages[rand(messages.length-1)]});
        }, 500);
    }

    function rand(num) {
        return Math.floor(Math.random() * num);
    }
}