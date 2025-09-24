const throttle = (fn, delay) => {
    let timer

    return function (...args){
        if(!timer){          
            timer = setTimeout(() => {
                timer = null
                fn(...args)
            }, delay)
        }
    }
}



const sendMessage = (message) => {
    console.log("Sending Message with", message);
    
}

const sendMessageWithThrottle = throttle(sendMessage, 3000)

sendMessageWithThrottle("Hello")
sendMessageWithThrottle("Hello Friend")
sendMessageWithThrottle("Hello Enemy")
sendMessageWithThrottle("Hello Parent")
sendMessageWithThrottle("Hello Relative")
setTimeout(() => sendMessageWithThrottle("Hello GuruJi"), 3000)