module.exports = function pepega(dispatch) {
    let enabled = true
    let names = ['Keiru']
    let messages =
        [': Another One!',
         'you TRASH LMAO.',
         '. Here we go again!',
         'PEPEGA!'
        ]

    dispatch.command.add('pepega', (cmd) => {
        switch (cmd) {
            case "rng":
                sendMessage()
                break;
            default:
                enabled = !enabled
                dispatch.command.message('pepega ' + (enabled ? 'enabled' : 'disabled'))
        }
    })

    dispatch.hook('S_USER_DEATH', 1, (event) => {
       if(names.includes(event.name)){
           console.log(event.name + event.killed)
       }
    })

    function sendMessage(name) {
        setTimeout(function () {
            dispatch.toServer('C_CHAT', 1, {channel: 1, message: name + messages[rand(messages.length)]});
        }, 500);
    }

    function rand(num) {
        return Math.floor(Math.random() * num);
    }
}