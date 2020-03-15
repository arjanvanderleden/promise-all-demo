import { doHttpRequest, createServer } from "./helpers"

const run = async () => {
    console.log('start')
}

const exit = () => {
    console.log('done')
    process.exit()
}

const doOneCall = (port: number, path: string) =>
    doHttpRequest(`http://localhost:${port}/${path}`)
    .then((responseString: string) => {

        // example:
        // const result = await translationRepository.store(requestString, resultString)
        // return result;

        console.log(`doing with something with response: "${responseString}"`)
        return responseString;
    });

const doManyCalls = (port: number) => {
    const promises = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ]
        .map(path => doOneCall(port, path));
    return Promise.all(promises);
}

run()
    .then(createServer(8080))
    .then(doManyCalls)
    .then(exit)