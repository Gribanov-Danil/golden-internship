import {onScrollHeader} from "./onScrollHeader.js";
import {toggler} from "./toggler.js";

document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
    onScrollHeader() // вызываем основную функцию onScrollHeader
    toggler()
});