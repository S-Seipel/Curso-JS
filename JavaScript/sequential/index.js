const { taskOne, taskTwo } = require('./tasks')


async function main() {
    try {
        console.time('measuring time')
        
        const results = await Promise.all([taskOne(), taskTwo()])
 
        console.timeEnd('measuring time')
        console.log(results[0]);
        console.log(results[1]); 
    } catch(e) {
        console.log(e);
    }
}

main();