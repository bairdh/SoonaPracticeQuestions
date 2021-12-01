
export const annotate = (mineField) => {
    // creating the array to return
    let diffused = []
    // creating the object that I am going to make the array into
    let mineObject = {}

    mineField.map((row, index) => {
        // creating row objects
        let rowObject = {}
        // making each cell in the row a key value pair in the rowObject
        row.split("").map((cell, index) => {
            // the key is the cell index and the value is the cell
            return rowObject[index] = cell
        })
        // adding the row object to mineObject, like the rowObject the key is the index and the value is the whole rowObject
        return mineObject[index] = rowObject
    })


    // mapping through the mineField and changing the value of the effected cells
    mineField.map((row, rowI) => {
        row.split('').map((cell, cellI) => {
            if (cell === '*') {
                if (rowI !== 0) {
                    if (cellI !== 0) {
                        //previous row cell before
                        mineObject[rowI - 1][cellI - 1] = Number(mineObject[rowI - 1][cellI - 1]) + 1 || "*"
                    }

                    // previous row same cell
                    mineObject[rowI - 1][cellI] = Number(mineObject[rowI - 1][cellI]) + 1 || "*"


                    if (cellI !== row.length - 1) {
                        // previous row cell after
                        mineObject[rowI - 1][cellI + 1] = Number(mineObject[rowI - 1][cellI + 1]) + 1 || "*"
                    }
                }
                if (cellI !== 0) {
                    // cell before
                    mineObject[rowI][cellI - 1] = Number(mineObject[rowI][cellI - 1]) + 1 || "*"
                }

                if (cellI !== row.length - 1) {
                    // cell after
                    mineObject[rowI][cellI + 1] = Number(mineObject[rowI][cellI + 1]) + 1 || "*"
                }

                if (mineField.length > 1 && rowI !== mineField.length - 1) {
                    if (cellI !== 0) {
                        //next row cell before
                        mineObject[rowI + 1][cellI - 1] = Number(mineObject[rowI + 1][cellI - 1]) + 1 || "*"
                    }
                    // next row same cell
                    if (rowI < (mineField.length - 1)) {
                        mineObject[rowI + 1][cellI] = Number(mineObject[rowI + 1][cellI]) + 1 || "*"
                    }

                    if (cellI !== row.length - 1) {
                        // next row cell after
                        mineObject[rowI + 1][cellI + 1] = Number(mineObject[rowI + 1][cellI + 1]) + 1 || "*"
                    }
                }


            }
        })
    })

    // mapping through the mineObject by key
    Object.keys(mineObject).map(row => {
        // string that will be the whole row
        let rowString = ""
        // mapping through the rowObject by key
        Object.keys(mineObject[row]).map(cell => {
            // adding each cell to the rowString
            return rowString = rowString + mineObject[row][cell]
        })
        // pushing the rowString to the diffused array
        return diffused.push(rowString)
    })

    return diffused;
};
