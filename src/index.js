import { argv, exit } from 'node:process';
import { init } from './cmd/init.js';


const [_node,_index, command, ...otherArgs] = argv;

switch(command) {
case 'init':
  init(otherArgs);
  break;
default:
  //TODO encourage to ask for help
  console.log('invalid command');
  exit(1);
}
