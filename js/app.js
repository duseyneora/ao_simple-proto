const autoOrder = {
    // page variables
    html: document.querySelector('html'),
    body: document.querySelector('body'),

    // global variables
    
    // methods
    notifyMe: (message, type) =>
    {
        // variables
        let notificationCopy = document.querySelector('.notification-copy');
        let notificationAlert = document.querySelector('.notification-style-alerts');
        // arguments
        notificationAlert.classList = 'notification-style-alerts ' + type;
        notificationCopy.innerHTML = message;
        // functionality
        setTimeout(() => {
            notificationAlert.style.top = '75px';
            setTimeout(() => {
                notificationAlert.style.top = '-100px';
            }, 4000)
        }, 1000)
    },
};


autoOrder.notifyMe('', 'success');