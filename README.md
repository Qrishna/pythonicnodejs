# pythonicnodejs
A simple nodejs library for those that hate the ugly javascript syntax and love python. Javascript sucks and so does nodejs. This is my attempt to make it stop sucking so much.

### Installation
```bash
npm install -g pythonicnodejs@latest
```
        
### Importing this module and using it 
Note:: This is the only and correct way to run this module. Anything else would be against the spirit of this endeavour  
```javascript
require("pythonicnodejs")()
```

```text
/**
Notice how the module is immediately called after requiring? This is because you shouldn't have to say some bullshit like this:
something     = somebullshitmodule.doSomething()     /** wtf??? **/ 
somethingelse = somebullshitmodule.doSomethingElse() /** wtf??? **/ 
That is just horrible!. You should not have to do that. If you have already gone through the effort of 
importing some module why should you have to say that.doSomeBullShit() ? You shouldn't. It should just immediately
be available to you and you should be able to use all of its functions as if they were right there on your current module.
**/
```


### Usage
```javascript
/**
 * Golden Rules
 * 1. Code needs to be simple, short, clean, and readable and other people need to be able to contribute to it
 * 2. Use the right tool for the right job which means stop trying to use nodejs for everything. It is not a right tool for anything!
 */

/** This is how you import things like a pro */
require("./index.js")()

const reality = {
    "javascript": "javascript sucks",
    "nodejs": "nodejs sucks even more"
}

/** Here is how you get rid of the console.log() bullshit */
let suckers = 10000
print(`You can't do a goddamn thing in nodejs with importing ${suckers} libraries.`, "It is horrible!\n")

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
log("Wow! this is awesome. I can log whatever and whenever I want with a timstamp and no more console.log bullshit or some dumbass logging module")
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
### Contributing
```bash
You are more than welcome to fork this repo, make your changes, and create pull requests. I will attend to them ASAP.
Any comments, suggestions, contributions etc are much welcomed and appreciated!
```