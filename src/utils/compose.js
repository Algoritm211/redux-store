
const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapped, func) => {
        return func(wrapped)
    }, comp)
}

export default compose