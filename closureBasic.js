const greet = (first) => {
        return (second) => {
            console.log("First value: " + first, "Second value: " + second)
        }
    }

    greet("Hi")("Joe")

    const greeting = greet("Hey")

    greeting("John")
