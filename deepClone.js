const myObject = {
        id: 20,
        details: {
            name: "John",
            address: {
                house:"19",
                town:"Redruth",
                postcode:"tr164dp"
            }
        }
    }

    const objectCopy = {
        ...myObject, 
        details: {
            ...myObject.details,
            address: {
                ...myObject.details.address
            }
        }
    };
