# pythonicjs
A nodejs library for those that like python


### Installation
```bash
npm install -g pythonicjs@latest
```
        
### Usage
```javascript

/** Require*/
require("pythonicjs")()

const someVariable = {
    "javascript": "javascript is awesome",
    "nodejs": "nodejs is cool"
}

/**  */
let someConst = 10000
print(`You can't do anything in nodejs without importing ${someConst} libraries.`, "Its awesome!\n")

/** Here is how you pretty print something */
pprint(reality)

/** Sorting arrays of numbers */
let pythonic_list = [1,8, -12, 0, 0, 13, -5, 500, -5, 2, 4, 2.5, 10, 0.5, 15,-1.1, 18, -5, 20]
print("\nlist:            ", pythonic_list)
print("reversed_list:   ", reversed(pythonic_list))
print("ascending:       ", sorted(pythonic_list))
print("descending:      ", sorted(pythonic_list, "desc"), "\n")

/** Sorting arrays of strings */
let strings_array = ["bs", "oj", "pasdf", "tsgs", "-123", "balsl", "a", "z", "asdf", "alskjdf l203i", "423sd"]
print("ascending:", sorteds(strings_array))
print("descending:", sorteds(strings_array, "desc"), "\n")

/** Logging with a timestamp */
log("Wow! this is awesome. I can log whatever and whenever I want with a timstamp and no more console.log or some logging module")
log("...and I can log some more ")
log("...and more ... ")
log("This is how it should work. Learn it kids ")

/** Statistics */
let copied_list = copy(pythonic_list)
print("\n")
log("***    TIME FOR SOME STATISTICS    ***")
log("copied_list =", (copied_list))
log("MAX   =", max(copied_list))
log("MIN   =", min(copied_list))
log("SUM   =", sum(copied_list))
log("AVG   =", avg(copied_list))
log("LEN   =", len(copied_list))
log("RANGE =", range(copied_list))
log("MODE  =", mode(copied_list))
log("***    END OF STATISTICS    ***")

/** Some more examples **/
let list = [-12, 0, 1, 2, 5, 12, 11, -256, 13, 21, 12, 22, 35, 57, 57,  58, 89]

HEADER("LIST OPERATIONS")
print("list:              ", list)
print("reversed:          ", reversed(list))
print("sorted-ascending:  ", sorted(list))
print("sorted-descending: ", sorted(list, "desc"))
FOOTER("LIST OPERATIONS")

HEADER("LOCATION")
print("mean:                ", avg(list))
print("q1:                  ", q1(list))
print("q2|median:           ", q2(list))
print("q3:                  ", q3(list))
print("mode:                ", mode(list))
FOOTER("LOCATION")

HEADER("DISPERSION")
print("sample standard deviation:         ", sample_standard_deviation(list))
print("poopulation standard deviation:    ", population_standard_deviation(list))

print("sample variance:              ", sample_variance(list))
print("interquartile range:          ", interquartile_range(list))
print("sample range:                 ", range(list))
print("coefficient of variation :    ", coefficient_of_variation(list))
FOOTER("DISPERSION")

/** Copy method to copy arrays or objects **/
let array = [1, 2, 3, 4, 5]
let obj = {a: 1, b: 22, c: 928}
ca = copy(array)
co = copy(obj)
print(equals(ca, array))
print(equals(co, obj))

/** More to follow later */

```