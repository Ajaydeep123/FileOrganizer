let helpFunc = require("./commands/help");
let treeFunc = require("./commands/tree");
let orgFunc = require("./commands/organize");

let inputArr= process.argv.slice(2);
let command= inputArr[0];
let path = inputArr[1];


switch (command){
    case "tree":
        treeFunc.tree(path);
       // console.log("called and copied"+path);
        break;
    case "organize":
        orgFunc.organize(path);
        break;

    case "help":
        helpFunc.help();
        break;
    default:
        console.log("command not recognized:/");
        break;
}