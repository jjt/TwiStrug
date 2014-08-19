MicroEventClass = require './libs/MicroEventClass'
class Vent extends MicroEventClass
vent = new Vent()
window.vent = vent
module.exports = vent
