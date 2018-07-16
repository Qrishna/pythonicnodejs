/**
 * Krishna Bhattarai
 * UT Arlington
 * July 2018
 * A helper library to make ugly javascript not suck so much. Use this library and save yourself countless hours
 */

const system = require('child_process').execSync
const _      = require('underscore')

module.exports = function() {
    let self = this

    self._ = _
    self.system = system

    self.print = function(...message){
        console.log(...message)
    }

    self.pprint = function(object){
        self.print(self.pprintr(object))
    }

    self.pprintr = function(object){
        return JSON.stringify(object, null, 2)
    }

    self.log = function (...message){
        message.unshift(self.timestamp())
        message.splice(1, 0, "::==>")
        self.print(...message)
    }

    self.type = function (object){
        return typeof object
    }

    self.abs = function (object){
        return Math.abs(object)
    }

    self.pow = function (x, y){
        return Math.pow(x, y)
    }

    self.sum = function(list){
        return list.reduce((a, b) => a + b, 0)
    }

    self.max = function(list){
        return Math.max(...list)
    }

    self.min = function (list){
        return Math.min(...list)
    }

    self.len = function(object){
        return object.length
    }

    self.avg = function(list){
        return self.sum(list)/self.len(list)
    }

    self.mean = function(list){
        return self.avg(list)
    }

    self.range = function(list){
       return self.max(list) - self.min(list)
    }

    self.mode = function(list){
        return list.sort( (a,b) => (list.filter(v => v===a)).length - (list.filter(v => v===b)).length).pop()
    }

    /** TO DO :: MERGE THESE TWO SORT METHODS **/
    self.sorted = function(list, order){
       return order !== "desc" ? list.slice().sort(function(a, b){return a-b}) :  self.reversed(list.slice().sort(function(a, b){return a-b}))
    }

    self.sorteds = function(object, order){
        return order !== "desc" ?  object.slice(0).sort() :  self.reversed( object.slice(0).sort())
    }
    /** END OF TO DO **/

    self.flatten = function(lists){
        return lists.reduce((a, b) => a.concat(b), [])
    }

    self.str = function(object){
        return object.toString()
    }

    self.int = function(string){
        return parseInt(string)
    }

    self.float = function(string){
        return parseFloat(string)
    }

    self.timestamp = function() {
        return new Date().toISOString()
    }

    self.keys = function(object){
        return Object.keys(object)
    }

    self.values = function(object){
        return Object.values(object)
    }

    /** TO DO :: MERGE THESE TWO COPY METHODS **/
    self.copy = function (array){
        return array.slice()
    }

    self.copyo = function (object){
        return Object.assign({}, object)
    }
    /** TO DO :: MERGE THESE TWO COPY METHODS **/

    self.os = function (command){
        return system(command, {"encoding": 'utf8'})
    }

    self.empty = function (object){
        return _.isEmpty(object)
    }
    self.null = function (object){
        return _.isNull(object)
    }

    self.undefined = function (object){
        return _.isUndefined(object)
    }

    self.equals = function(x, y){
        return _.isEqual(x, y)
    }

    self.index = function(object, item){
        return object.indexOf(item)
    }

    /** TO DO :: ADD TESTS FOR THESE METHODS **/
    self.first = function(array){
        return array[0]
    }

    self.last = function(array){
        return _.last(array)
    }

    self.remove = function(object, item){
        return _.without(object, item)
    }

    self.difference = function(a, b){
        return _.difference(a, b)
    }

    self.union = function(...lists){
        return _.union(...lists)
    }

    self.intersection = function(...lists){
        return _.intersection(...lists)
    }

    self.unique = function(list){
        return _.uniq(list)
    }

    self.without = function(list, ...values){
        return _.without(list, ...values)
    }

    self.base = function(number, base){
        return number.toString(base)
    }

    self.xrange = function(a, b, n){
        return _.range(a, b, n)
    }

    self.reversed = function(array) {
        return array.slice().reverse()
    }

    self.filter = function(operation, array) {
        return array.filter(operation)
    }

    self.hex = function hex(a) {
        return "0x" + (a >>> 0).toString(16)
    }

    self.map = function(operation, array) {
        return array.map(operation)
    }

    self.getattr = function(obj, name) {
        return obj[name]
    }

    self.setattr = function(obj, name, value) {
        obj[name] = value
    }

    self.hasattr = function(obj, name) {
        return name in obj
    }

    self.invert = function(object){
        return _.invert(object)
    }

    self.extend = function(destination, source){
        return _.extend(destination, source)
    }

    self.random = function(min, max){
        return _.random(min, max)
    }
}
