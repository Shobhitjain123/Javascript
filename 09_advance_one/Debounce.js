const debounce = (fn, delay) => {
    let timer

    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}       

const search = (text) => {
    console.log("Search With", text);
}

const searchWithDebounce = debounce(search, 2000)


searchWithDebounce("H")
setTimeout(() => searchWithDebounce("He"), 1000)
searchWithDebounce("Hel")
searchWithDebounce("Hell")
searchWithDebounce("Hello")
searchWithDebounce("Hello ")
searchWithDebounce("Hello w")
searchWithDebounce("Hello wo")
searchWithDebounce("Hello wor")
searchWithDebounce("Hello worl")
searchWithDebounce("Hello world")
