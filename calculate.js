function process(input, callback) {
    setTimeout(() => {
        callback(null, input * 2);
    }, 100);
}

function combine(input, val, callback) {
    setTimeout(() => {
        callback(null, input + val);
    }, 100);
}



function calculate_t1(input, callback) {
    process(input, (err1, temp) => {
        if (err1) {
            return callback(err1);
        }
        combine(input, temp, (err2, result) => {
            if (err2) {
                return callback(err2);
            }
            let finalVal = result + temp;
            callback(null, finalVal);
        });
    });
}
function calculate_t2(input, callback) {
    process(input, (err1, qux) => {
        if (err1) {
            return callback(err1);
        }
        if (qux < input) {
            combine(input, qux, (err2, result) => {
                if (err2) {
                    return callback(err2);
                }
                qux += result;
                callback(null, qux);
            })
        } else {
            callback(null, "Not calculated");
        }
    });
}
function calculate_t3(input, callback) {
    process(input, (err1, qux) => {
        if (err1) {
            return callback(err1);
        }
        
        function iterate() {
            if (qux >= input) {
                return callback(null, qux);
            }

            combine(input, qux, (err2, result) => {
                if (err2) {
                    return callback(err2);
                }

                qux += result;
                iterate();
            });
        }

        iterate();
    });
}


calculate_t1(3, (err, res) => {
    if (err) {
        console.error(err);
    }

    console.log("Result t1: ", res);
});

calculate_t2(4, (err, res) => {
    if (err) {
        console.error(err);
    }

    console.log("Result t2: ", res);
});

calculate_t3(5, (err, res) => {
    if (err) {
        console.error(err);
    }

    console.log("Result t3: ", res);
});






