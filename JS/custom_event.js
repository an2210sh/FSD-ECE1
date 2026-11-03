import { readIntroFile } from 'events';

const emitter = new EventEmitter()

//Event register using .on() method

emitter.on("login", () => {
    console.log("User logged in");
});
