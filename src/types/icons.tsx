import { Type } from "./types.enum";

const paperIcon = require('../assets/images/icon-paper.svg');
const scissorsIcon = require('../assets/images/icon-scissors.svg');
const rockIcon = require('../assets/images/icon-rock.svg');

export const Icons = {
  [Type.Paper]: paperIcon,
  [Type.Scissors]: scissorsIcon,
  [Type.Rock]: rockIcon,
}