
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
let list = [1,8, -12, 0, 0, 13, -5, 500, -5, 2, 4, 2.5, 10, 0.5, 15,-1.1, 18, -5, 20]
print("\nlist:            ", list)
print("reversed_list:   ", reversed(list))
print("ascending:       ", sorted(list))
print("descending:      ", sorted(list, "desc"), "\n")

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
let copied_list = copy(list)
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

/** More to follow later */
