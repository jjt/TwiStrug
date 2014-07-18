module.exports = (str, len=3)-> ('000' + str).substr(-len,len)
