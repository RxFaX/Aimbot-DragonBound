/* 
 * Copyright (C) 2021, Alex(lnferno). <xander.scorpio@gmail.com>
 * This file is part of DragonBotPro.
 * DragonBotPro is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or(at your option) any later version.
 * 
 * DragonBotPro is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with DragonBotPro. If not, see http://www.gnu.org/licenses/.
 */

var _0xb2dd = ["call", "ModoDios", "apply", "log", "game", "db", "enabled", "wind", "rc", "powerplayers", "started", "SetWind", "update", "au", "getMyPlayer", "my_player_index", "players", "DrawPowerPlayers", "on", "removeClass", ".newmark_", "power", "is_alive", "info", "length", "clone", "mark", "newmark newmark_", "addClass", "<b style=\'top:", "px; color:rgba(", ", 100%, 50%, 1)\'></b>", "html", "border-left-color", "rgba(", ", 100%, 50%, 0.65)", "css", "after", "name", "text", "b", "find", "left", "%", "id", ":checked", "is", "#enablebot", "mobileID", "mobile", "team", "push", "x", "aim", "y", "look", "t", "l", "atan2", "body", "round", "ang", "p", "Kill", "<span>$1</span>", "replace", "random", "floor", "relative", "inline-block", "translate(", "px,", "px) scale(2)", "transitionend", "remove", "addEventListener", "each", "span", "ToggleBot", "bot_disabled", "HideBot", "markhide", ".mark", "display", "none", ".codex_recalibrate_box", "ShowBot", "flex", "messaging", "opacity", "CheckAccess", "#aimbotswitch", "<span id=\"aimbotswitch\" class=\"GOption\"><label><input type=\"checkbox\" checked=\"\" id=\"enablebot\"><span class=\"blackShadow OptionText\">Activated</span></label></span>", "#OptionsText10 + .GOption", "<span id=\"OptionsTextbt\" class=\"GOption2 OptionTitle1 blackShadow\">State:</span>", "<br id=\"abrs\">", "#OptionsDialog", "change", "GameStart", "DragonBound:", "trigger", "val", "#codex_recalibrate", "rgi", "#codex_recalibrate_input", "type", "indexOf", "forEach", "observe", "Init", "DragonNetwork:", "object", "Ready", "markWrap", "#powerMarkArea", "<div />", "append", "onreadystatechange", "readyState", "status", ",", "split", "responseText", "GET", "https://dl.dropboxusercontent.com/s/v5kuo5wqtit4u1b/true.txt?", "now", "open", "send", "gfr", "#game_front", "<div class=\"codex_recalibrate_box\" style=\"display:none;\">                    <button id=\"codex_recalibrate_rest\">-</button>                    <input id=\"codex_recalibrate\" type=\"range\" min=\"-12\" value=\"0\" max=\"12\" step=\"0.1\"><button id=\"codex_recalibrate_sum\">+</button><input id=\"codex_recalibrate_input\" value=\"0\">                    <button id=\"codex_recalibrate_reset\">RESET</button>                    </div>", "toFixed", "click", "#codex_recalibrate_rest", "#codex_recalibrate_sum", "#codex_recalibrate_reset", "input", "value", "valueAsNumber", "", "keydown", "__construct__", "jQuery", "jQuery is loaded!", "x0", "y0", "v", "ax", "ay", "GetPosAtTime", "prototype", "size", "cos", "sin", "PI", "ARMOR", "ICE", "ADUKA", "LIGHTNING", "BIGFOOT", "JD", "ASATE", "RANDOM", "KNIGHT", "FOX", "DRAGON", "DRAGON2", "NAK", "TRICO", "MAGE", "TURTLE", "BOOMER", "ELECTRICO", "FROG", "KALSIDDON", "GRUB", "a", "pow", "sqrt", "emulatepower x:", " y:", "beginPath", "context", "ground", "fillStyle", "red", "fillRect", "dragon2d", "s", "<div class=\"codex_recalibrate_box\" style=\"display:none;\"><button id=\"codex_recalibrate_rest\">-</button><input id=\"codex_recalibrate\" type=\"range\" min=\"-12\" value=\"0\" max=\"12\" step=\"1\"><button id=\"codex_recalibrate_sum\">+</button><input id=\"codex_recalibrate_input\" value=\"0\">                    <button id=\"codex_recalibrate_reset\">RESET</button> <a href=\"\" target=\"_blank\" style=\"position: absolute;font-color:red;font-size: 10px;top: -1px;left: 0px;\"></a></div>"];
var _0x202e = [_0xb2dd[0], _0xb2dd[1], _0xb2dd[2], _0xb2dd[3], _0xb2dd[4], _0xb2dd[5], _0xb2dd[6], _0xb2dd[7], _0xb2dd[8], _0xb2dd[9], _0xb2dd[10], _0xb2dd[11], _0xb2dd[12], _0xb2dd[13], _0xb2dd[14], _0xb2dd[15], _0xb2dd[16], _0xb2dd[17], _0xb2dd[18], _0xb2dd[19], _0xb2dd[20], _0xb2dd[21], _0xb2dd[22], _0xb2dd[23], _0xb2dd[24], _0xb2dd[25], _0xb2dd[26], _0xb2dd[27], _0xb2dd[28], _0xb2dd[29], _0xb2dd[30], _0xb2dd[31], _0xb2dd[32], _0xb2dd[33], _0xb2dd[34], _0xb2dd[35], _0xb2dd[36], _0xb2dd[37], _0xb2dd[38], _0xb2dd[39], _0xb2dd[40], _0xb2dd[41], _0xb2dd[42], _0xb2dd[43], _0xb2dd[44], _0xb2dd[45], _0xb2dd[46], _0xb2dd[47], _0xb2dd[48], _0xb2dd[49], _0xb2dd[50], _0xb2dd[51], _0xb2dd[52], _0xb2dd[53], _0xb2dd[54], _0xb2dd[55], _0xb2dd[56], _0xb2dd[57], _0xb2dd[58], _0xb2dd[59], _0xb2dd[60], _0xb2dd[61], _0xb2dd[62], _0xb2dd[63], _0xb2dd[64], _0xb2dd[65], _0xb2dd[66], _0xb2dd[67], _0xb2dd[68], _0xb2dd[69], _0xb2dd[70], _0xb2dd[71], _0xb2dd[72], _0xb2dd[73], _0xb2dd[74], _0xb2dd[75], _0xb2dd[76], _0xb2dd[77], _0xb2dd[78], _0xb2dd[79], _0xb2dd[80], _0xb2dd[81], _0xb2dd[82], _0xb2dd[83], _0xb2dd[84], _0xb2dd[85], _0xb2dd[86], _0xb2dd[87], _0xb2dd[88], _0xb2dd[89], _0xb2dd[90], _0xb2dd[91], _0xb2dd[92], _0xb2dd[93], _0xb2dd[94], _0xb2dd[95], _0xb2dd[96], _0xb2dd[97], _0xb2dd[98], _0xb2dd[99], _0xb2dd[100], _0xb2dd[101], _0xb2dd[102], _0xb2dd[103], _0xb2dd[104], _0xb2dd[105], _0xb2dd[106], _0xb2dd[107], _0xb2dd[108], _0xb2dd[109], _0xb2dd[110], _0xb2dd[111], _0xb2dd[112], _0xb2dd[113], _0xb2dd[114], _0xb2dd[115], _0xb2dd[116], _0xb2dd[117], _0xb2dd[118], _0xb2dd[119], _0xb2dd[120], _0xb2dd[121], _0xb2dd[122], _0xb2dd[123], _0xb2dd[124], _0xb2dd[125], _0xb2dd[126], _0xb2dd[127], _0xb2dd[128], _0xb2dd[129], _0xb2dd[130], _0xb2dd[131], _0xb2dd[132], _0xb2dd[133], _0xb2dd[134], _0xb2dd[135], _0xb2dd[136], _0xb2dd[137], _0xb2dd[138], _0xb2dd[139], _0xb2dd[140], _0xb2dd[141], _0xb2dd[142], _0xb2dd[143], _0xb2dd[144], _0xb2dd[145], _0xb2dd[146], _0xb2dd[147], _0xb2dd[148], _0xb2dd[149], _0xb2dd[150], _0xb2dd[151], _0xb2dd[152], _0xb2dd[153], _0xb2dd[154], _0xb2dd[155], _0xb2dd[156], _0xb2dd[157], _0xb2dd[158], _0xb2dd[159], _0xb2dd[160], _0xb2dd[161], _0xb2dd[162], _0xb2dd[163], _0xb2dd[164], _0xb2dd[165], _0xb2dd[166], _0xb2dd[167], _0xb2dd[168], _0xb2dd[169], _0xb2dd[170], _0xb2dd[171], _0xb2dd[172], _0xb2dd[173], _0xb2dd[174], _0xb2dd[175], _0xb2dd[176], _0xb2dd[177], _0xb2dd[178], _0xb2dd[179], _0xb2dd[180], _0xb2dd[181], _0xb2dd[182], _0xb2dd[183], _0xb2dd[184], _0xb2dd[185], _0xb2dd[186], _0xb2dd[187]];
(function() {
    if (!this["ModoDios"]) {



        var _0x5815x2 = this,
            _0x5815x3 = !1,
            _0x5815x4 = new function() {
                this["ARMOR"] = [0, {
                     a: 75,
                     b: .76,
                     aim: [ 
                    [ 52, 33 ], [ 52, 33 ], [ 52, 33 ] 
                    ]
                }], this["ICE"] = [1, {
                    a: 63.5,
                    b: .625,
                    aim: [ [ 58, 50 ], [ 40, 40 ], [ 40, 40 ] ]
                }], this["ADUKA"] = [2, {
                    a: 60.5,
                    b: .7,
                   aim: [ [ 130, 40 ], [ 130, 40 ], [ 130, 40 ] ]
                }], this["LIGHTNING"] = [3, {
                    a: 65,
                    b: .72,
                    aim: [ [ 58, 44 ], [ 58, 44 ], [ 58, 44 ] ]
                }], this["BIGFOOT"] = [4, {
                     a: 90,
                     b: .74,
                    aim: [ [ 58, 50 ], [ 58, 50 ], [ 58, 50 ] ]
                }], this["JD"] = [5, {
                    a: 63.5,
                    b: .625,
                    aim: [ [ 68, 45 ], [ 68, 45 ], [ 68, 45 ] ]
                }], this["ASATE"] = [6, {
                     a: 75.5,
                     b: .765,
                     aim: [ [ 40, 30 ], [ 40, 30 ], [ 40, 30 ] ]
                }], this["RANDOM"] = [7, {
                     a: 81,
                     b: .827,
                     aim: [ [ 51, 51 ], [ 51, 51 ], [ 51, 51 ] ]
                }], this["KNIGHT"] = [8, {
                    a: 65.5,
                    b: .695,
                    aim: [ [ 51, 51 ], [ 51, 51 ], [ 51, 51 ] ]
                }], this["FOX"] = [9, {
                     a: 61,
                     b: .61,
                     aim: [ [ 30, 44 ], [ 30, 44 ], [ 30, 44 ] ]
                }], this["DRAGON"] = [10, {
                    a: 95,
                    b: .74,
                     aim: [ [ 58, 50 ], [ 58, 50 ], [ 58, 50 ] ]
                }], this["DRAGON2"] = [18, {
                    a: 120,
                    b: .74,
                    aim: [ [ 58, 50 ], [ 58, 50 ], [ 58, 50 ] ]
                }], this["NAK"] = [11, {
                   a: 79.5,
                   b: .875,
                   aim: [ [ 130, 40 ], [ 130, 40 ], [ 130, 40 ] ]
                }], this["TRICO"] = [12, {
                     a: 84,
                     b: .87,
                    aim: [ [ 51, 51 ], [ 51, 51 ], [ 51, 51 ] ]
                }], this["MAGE"] = [13, {
                    a: 71.5,
                     b: .78,
                    aim: [ [ 51, 51 ], [ 51, 51 ], [ 51, 51 ] ]
                }], this["TURTLE"] = [14, {
                     a: 74.5,
                     b: .75,
                     aim: [ [ 51, 51 ], [ 51, 51 ], [ 51, 51 ] ]
                }], this["BOOMER"] = [15, {
                     a: 62.5,
                     b: 1.39,
                     aim: [ [ 130, 40 ], [ 130, 40 ], [ 130, 40 ] ]
                }], this["ELECTRICO"] = [16, {
                     a: 73.5,
                     b: .74,
                      aim: [ [ 52, 33 ], [ 52, 33 ], [ 52, 33 ] ]
                }], this["FROG"] = [21, {
                    a: 65.5,
                    b: .74,
                    aim: [ [ 52, 33 ], [ 52, 33 ], [ 52, 33 ] ]
                }], this["KALSIDDON"] = [22, {
                     a: 65.5,
                     b: .74,
                    aim: [ [ 52, 33 ], [ 52, 33 ], [ 52, 33 ] ]
                }], this["GRUB"] = [17, {
                    a: 63.5,
                     b: .69,
                     aim: [ [ 52, 33 ], [ 52, 33 ], [ 52, 33 ] ]
                }]
            };
        (function(_0x5815x2, _0x5815x3, _0x5815x4, _0x5815x5, _0x5815x6, _0x5815x7) {
            this["x0"] = _0x5815x2, this["y0"] = _0x5815x3, this["v"] = new _0x5815x8(_0x5815x4, _0x5815x5), this["ax"] = _0x5815x6, this["ay"] = _0x5815x7
        })["prototype"]["GetPosAtTime"] = function(_0x5815x2, _0x5815x3) {
            _0x5815x3 = [];
            for (var _0x5815x4 = -1, _0x5815x5 = 0; _0x5815x5 < _0x5815x3["length"]; _0x5815x5++) {
                _0x5815x2 >= _0x5815x3[_0x5815x5][0] && (_0x5815x4 = _0x5815x5)
            };
            var _0x5815x8, _0x5815x7, _0x5815x9, _0x5815xa, _0x5815xb, _0x5815xc, _0x5815xd;
            _0x5815x5 = 0;
            _0x5815xb = this["ax"], _0x5815xc = this["ay"], -1 == _0x5815x4 ? (_0x5815x8 = this["x0"], _0x5815x7 = this["y0"], _0x5815x9 = this["v"]["x"], _0x5815xa = this["v"]["y"], _0x5815xd = _0x5815x2 / 1e3) : (_0x5815x8 = _0x5815x3[_0x5815x4][1], _0x5815x7 = _0x5815x3[_0x5815x4][2], _0x5815x9 = _0x5815x3[_0x5815x4][3], _0x5815xa = _0x5815x3[_0x5815x4][4], null != _0x5815x3[_0x5815x4][5] && (_0x5815xb = _0x5815x3[_0x5815x4][5]), null != _0x5815x3[_0x5815x4][6] && (_0x5815xc = _0x5815x3[_0x5815x4][6]), null != _0x5815x3[_0x5815x4][7] && (_0x5815x5 = _0x5815x3[_0x5815x4][7]), _0x5815xd = (_0x5815x2 - _0x5815x3[_0x5815x4][0]) / 1e3);
            _0x5815x4 = _0x5815x8 + _0x5815x9 * _0x5815xd + _0x5815xb * _0x5815xd * _0x5815xd / 2;
            var _0x5815xe = _0x5815x7 + _0x5815xa * _0x5815xd + _0x5815xc * _0x5815xd * _0x5815xd / 2;
            return _0x5815xd -= 0.005, {
                x: _0x5815x4,
                y: _0x5815xe,
                a: _0x5815x8 = _0x5815x6(Math["atan2"](_0x5815xe - (_0x5815x7 + _0x5815xa * _0x5815xd + _0x5815xc * _0x5815xd * _0x5815xd / 2), _0x5815x4 - (_0x5815x8 + _0x5815x9 * _0x5815xd + _0x5815xb * _0x5815xd * _0x5815xd / 2))),
                z: _0x5815x5
            }
        },
        this["ModoDios"] = new function() {
// DragonBotPro
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const KEY = {
    Backspace: 8,
    BACKSPACE: 8,
    Tab: 9,
    TAB: 9,
    Enter: 13,
    ENTER: 13,
    shift: 16,
    SHIFT: 16,
    Ctrl: 17,
    CTRL: 17,
    Alt: 18,
    ALT: 18,
    Esc: 27,
    ESC: 27,
    Space: 32,
    SPACE: 32,
    Left: 37,
    LEFT: 37,
    Up: 38,
    UP: 38,
    Right: 39,
    RIGHT: 39,
    Down: 40,
    DOWN: 40,
    N0: 48,
    N1: 49,
    N2: 50,
    N3: 51,
    N4: 52,
    N5: 53,
    N6: 54,
    N7: 55,
    N8: 56,
    N9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
};
class Box {
    constructor() {
        this.div = document.createElement("div");
    }
}
class ComponentBox extends Box {
    constructor() {
        super();
    }
    SetClass(nameClass) {
        this.div.classList.add(nameClass);
    }
    SetId(id) {
        this.div.setAttribute("id", id);
    }
    SetContent(content) {
        this.div.append(content);
    }
    get() {
        return this.div;
    }
    SetDrag(){
        dragElement(this.div);
    }
    SetW(a){
        this.div.style.width = a + "px";
    }
    SetH(a){
        this.div.style.height = a + "px";   
    }
    SetX(a){
        this.div.style.left = a + "px";
    }
    SetY(a){
        this.div.style.top = a + "px";
    }
}
class OptionCheck {
    constructor(id) {
        this.cb = document.createElement("input");
        this.cb.setAttribute("type", "checkbox");
        this.cb.setAttribute("id", id);
    }
    get() {
        return this.cb;
    }
}
class TurnOnOff{
    constructor(key, id){
        this.key = key;
        this.id = id;
        this.active();
    }
    active(){
        var self = this;
        $("body").keydown(function(a) {
            if(a.which == self.key && document.querySelector("#cbActiveKeyControll").checked){
                $(self.id).is(":visible") ? $(self.id).hide() : $(self.id).show();
            }
        })
    }
}
class TurnCallback{
    constructor(key, callback){
        this.key = key;
        this.callback = callback;
        this.active();
    }
    active(){
        var self = this;
        $("body").keydown(function(a) {
            if(a.which == self.key && document.querySelector("#cbActiveKeyControll").checked){
                self.callback();
            }
        })
    }
}
class PanelData {
    constructor(menu) {
        this.id = menu.id;
        this.title = menu.title;
        this.number = menu.number;
        this.classes = menu.classes;
        this.options = menu.options;
        this.component = {
            main: new ComponentBox(),
            title: new ComponentBox(),
            content: new ComponentBox(),
        };
    }
}
class Panel extends PanelData {
    constructor(menu) {
        super(menu);
        this.SetTitle();
        this.SetMain();
        this.SetContent();
    }
    SetTitle() {
        this.component.title.SetClass("title");
        this.component.title.SetContent(this.title);
    }
    SetMain() {
        this.component.main.SetId(this.id);
        this.classes.map((nameClass) => {
            this.component.main.SetClass(nameClass);
        });
    }
    SetContent(){
        this.component.content.SetClass('body');
        this.options.map((option)=>{
            const divOption = new ComponentBox();
            let description = option.description;
            const descriptionDiv = document.createElement("div");
            let descriptionChar = "";
            descriptionDiv.setAttribute("id", option.id);
            divOption.SetClass('option');
            if(option.type === "key"){
                const charNumber = option.char;
                const charLetter = ((Object.entries(KEY)).filter(data=> data[1] == charNumber))[0][0];
                descriptionChar += " [" + charLetter + "]";
                const keyOption = new TurnOnOff(option.char, option.showId);
            }
            
            if(option.type == "callback"){
                const charNumber = option.char;
                const charLetter = ((Object.entries(KEY)).filter(data=> data[1] == charNumber))[0][0];
                descriptionChar += " [" + charLetter + "]";
                const keyCallback = new TurnCallback(option.char, option.callback);
            }
            descriptionDiv.innerHTML = description;
            divOption.SetContent(descriptionDiv);
            if(option.type == "check"){
                const check = new OptionCheck(option.div);
                divOption.SetContent(check.get());
            }
            else if(option.type == "check_callback"){
                const check = new OptionCheck(option.div);
                check.get().addEventListener("click", option.callback);
                divOption.SetContent(check.get());   
            }
            else{
                const charDiv = document.createElement('div');
                charDiv.innerHTML = descriptionChar;
                divOption.SetContent(charDiv);
            }
            this.component.content.SetContent(divOption.get());
        })
    }
    Inflate() {
        dragElement(this.component.main.get());
        this.component.main.SetContent(this.component.title.get());
        this.component.main.SetContent(this.component.content.get());
        document.querySelector("body").append(this.component.main.get());
    }
}
const sendMessageSystem = (message)=>{
    let channel_name = $("#roomScreen").is(":visible") ? "#roomChatHtml" : ($("#channelScreen").is(":visible") ? "#channelTextHtml" : "#gameChatHtml"); 
    $(channel_name).append(`<div class="zotata-chat-line zotata-chat-type6"><div class="zotata-chat-icon zotata-chat-icon6"></div> <span class="ztext">${message}</span></div>`)
}
var Language = 0;
const l = function(word){
    let phrase = Language ? words[word] : word;
    if(phrase == undefined) phrase = word;
    return phrase; 
};
var words = {
    'Successful changed language': 'Lenguaje cambiado exitosamente',
    'Change language': 'Cambiar lenguaje',
    'Hide other option': 'Ocultar otras opciones',
    'Hide game chat': 'Ocultar chat de juego',
    'Hide mark': 'Ocultar marca de tiro',
    'Hide calibrate': 'Ocultar calibrador',
    'Hide this menu': 'Ocultar este menu',
    'Thor laser wall': 'Simulador de thor',
    'Thor laser wall to me': 'Simulador de thor a mi',
    "Thor wall transparency": 'Transparencia a laser thor',
    "Turn info": 'Información de turnos',
    "Point enemie": 'Punto de enemigo',
    "Information enemie": 'Información de enemigo',
    "Mobile guide": 'Guia de mobil',
    "Auto ready": "Ready automatico",
    "Weather wall [Coming soon]": 'Weather trayectoria [Proximamente]',
    "Control key": "Control por teclas",
    "Change Zoom": "Cambiar vista de mapa",
    "Wall letter event": "Coordenada de letras",
    "Information enemie": "Información de enemigo",
    "Point enemie": "Punto de enemigo",
    "Turn info": "Información de turnos",
    "Show pointers": "Mostrar puntos",
    "Remove all pointers": "Quitar todos los puntos",
    "Drago pointers": "Move puntos",
    "Add new point": "Agregar nuevo punto",
    "Delete point [SHIFT] + Click": "Eliminar punto [SHIFT] + Click",
};
var shiftOn = false;
document.addEventListener('keydown', function(e){
    let shiftOnOff = e.which == '16';
    (shiftOnOff) && (shiftOn = true);
    if(shiftOnOff){
        for(let pointer of document.querySelectorAll(".pointer_aimbot")){
            pointer.style.background = "red";
        }
    }
});
document.addEventListener('keyup', function(){
    shiftOn = false;
        for(let pointer of document.querySelectorAll(".pointer_aimbot")){
            pointer.style.background = "lime";
        }
});

var data_letter = [];
var my_config = {
    active_key: false,
    auto_ready: false,
    set_zoom: {
        before: 1,
        after: 1
    },
    active_thor: false,
    active_letter: false,
    drag_pointer: false,
    view_pointers: false
};
const options = [
    {
        id: "activeKeyControll",
        div: "cbActiveKeyControll",
        type: "check",
        description: "Control key",
        panelNumber: 0,
    },
    {
        id: "activeLetterEvent",
        div: "cbActiveLetterEvent",
        type: "check_callback",
        callback: function(){
            let capture_letter = my_config.active_letter ? false : true;
            my_config.active_letter = capture_letter; 
            
        },
        description: "Wall letter event",
        panelNumber: 0,
    },
        {
        id: "activeSetZoom",
        div: "cbActiveSetZoom",
        type: "check_callback",
        callback: function(){
            let zoom = 1;
            document.querySelector("#cbActiveSetZoom").checked ? zoom = 0.6 : zoom = 1;
            my_config.set_zoom.after = zoom;
        },
        description: "Change Zoom",
        panelNumber: 0,
    },
    {
        id: "gameMobileGuide2",
        div: "gameMobileGuide",
        type: "check",
        description: "Mobile guide",
        char: KEY.Y,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
    {
        id: "GameIfnormationEnemies",
        div: "gameInformationEnemie",
        type: "check",
        description: "Information enemie",
        char: KEY.Y,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
        {
        id: "GamePointEnemies",
        div: "gamePointEnemie",
        type: "check",
        description: "Point enemie",
        char: KEY.Y,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
    {
        id: "GameTurnInfo",
        div: "cbGameTurnInfo",
        type: "check_callback",
        callback: function(){
            document.querySelector("#cbGameTurnInfo").checked ? $("#game_info").show() : $("#game_info").hide();
        },
        description: "Turn info",
        panelNumber: 0,
    },
    {
        id: "thorLaserSimulatorTransparency",
        div: "cbThorWallTransparency",
        type: "check",
        description: "Thor wall transparency",
        char: KEY.Y,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
    {
        id: "thorLaserSimulatorToMe",
        div: "cbThorLaserSimulatorToMe",
        type: "check",
        description: "Thor laser wall to me",
        char: KEY.Y,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
    {
        id: "thorLaserSimulator",
        div: "cbThorLaserSimulator",
        type: "check",
        description: "Thor laser wall",
        char: KEY.T,
        callback: null,
        showId: "",
        panelNumber: 0,
    },
    {
        id: "gameDragPoint",
       div: "cbDragPoint",
        type: "check_callback",
        callback: function(){
            my_config.drag_pointer = !my_config.drag_pointer;
            my_config.drag_pointer ? $("#game_back").hide() : $("#game_back").show();
        },
        description: "Drag pointers",
        panelNumber: 0,
    },
    {
        id: "gameViewPointers",
       div: "cbViewPointers",
        type: "check_callback",
        callback: function(){
            my_config.view_pointers = !my_config.view_pointers; 
        },
        description: "Show pointers",
        panelNumber: 0,
    },
    {
        id: "gameNewPointer",
        div: "",
        type: "callback",
        description: "Add new point",
        char: KEY.N,
        callback: function(){
            const config = { drag: point_dragging };
            function point_dragging(e) {
                    if(!e.shiftKey)
                    return false;
            }
            const pointer = new ComponentBox();
            pointer.SetClass("pointer_aimbot");
            dragElement(pointer.get());
            pointer.get().addEventListener('click', function(){
                (shiftOn) && pointer.get().remove();
            });
            document.querySelector("#planeAimbot").append(pointer.get());
        },
        showId: "",
        panelNumber: 0,
    },
        {
        id: "gameRemovePointer",
        div: "",
        type: "callback",
        description: "Remove all pointers",
        char: KEY.K,
        callback: function(){
            for(let point of document.querySelectorAll(".pointer_aimbot")){
                point.remove();
            }      
        },
        showId: "",
        panelNumber: 0,
    },
    {
        id: "gameAutomaticReady",
        div: "",
        type: "callback",
        description: "Auto ready",
        char: KEY.U,
        callback: function(){
            if(my_config.auto_ready){ // esta activado - lo apagare
                document.querySelector("#controlAutoReady").innerHTML = "Auto Ready - []";
                sendMessageSystem("Auto ready desactivado");
                my_config.auto_ready = false;
            }else{
                document.querySelector("#controlAutoReady").innerHTML = "Auto Ready - [X]";
                my_config.auto_ready = true;
                sendMessageSystem("Auto ready activado.");
                const observer = setInterval(function(){
                    if(my_config.auto_ready == false){
                      clearInterval(observer)  
                    }else{
                        let is_master = $("#roomButtonStart").is(":visible");
                        let in_room = $("#roomScreen").is(":visible");
                        if(is_master != true && in_room == true){
                            for(let i = 0; i < 8; i++){
                                let id = "#playerInRoom" + i;
                                let player = document.querySelector(id); 
                                let my_self = document.querySelector(id + " .roomPlayerMyself");
                                let ready = document.querySelector(id + " .roomPlayerReady");
                                if(player.style.display == "block" && my_self.style.display == "block"){
                                    let not_ready = ready.style.display == "none";
                                    if(not_ready){
                                        $("#roomButtonReady").click();
                                    }
                                }
                            }
                        }
                    }
                },1000)
            }
        },
        showId: "",
        panelNumber: 0,
    },
    {
        id: "changeLanguageAimbot",
        div: "",
        type: "callback",
        description: "Change language",
        char: KEY.L,
        callback: function () {
            Language ? Language = 0 : Language = 1;
            sendMessageSystem(l("Successful changed language"));
            options.map((option)=>{
                document.getElementById(option.id).innerHTML = l(option.description);
            })
            
        },
        showId: "",
        panelNumber: 0,
    },
    {
        id: "ShowOtherOptionGame",
        div: "",
        type: "key",
        description: "Hide other option",
        char: KEY.O,
        callback: function () {},
        showId: "#btnFriends, .WatchersBtn, #game_dnd_btn, #all_chat, #gameBcm",
        panelNumber: 0,
    },
    {
        id: "ShowGameChat",
        div: "",
        type: "key",
        description: "Hide game chat",
        char: KEY.G,
        callback: function () {},
        showId: "#gameChat",
        panelNumber: 0,
    },
    {
        id: "ShowMark",
        div: "",
        type: "key",
        description: "Hide mark",
        char: KEY.M,
        callback: function () {},
        showId: ".mark",
        panelNumber: 0,
    },
    {
        id: "ShowCalibrate",
        div: "",
        type: "key",
        description: "Hide calibrate",
        char: KEY.C,
        callback: function () {},
        showId: ".codex_recalibrate_box",
        panelNumber: 0,
    },
    {
        id: "ShowMenuMain",
        div: "",
        type: "key",
        description: "Hide this menu",
        char: KEY.F2,
        callback: function () {},
        showId: "#mainMenu",
        panelNumber: 0,
    },
    {
        id: "controlAutoReady",
        div: "",
        type: "info",
        description: "Auto Ready - []",
        char: null,
        callback: null,
        showId: "",
        panelNumber: 1,
    },
    {
        id: "ShowMenuControl",
        div: "",
        type: "key",
        description: "Hide this menu",
        char: KEY.F4,
        callback: function () {},
        showId: "#controlMenu",
        panelNumber: 1,
    },
    {
        id: "gameWeatherWall",
        div: "",
        type: "info",
        description: "Weather wall [Coming soon]",
        panelNumber: 0,
    },
    {
        id: "gameHelpPointer",
        div: "",
        type: "info",
        description: "Delete point [SHIFT] + Click",
        panelNumber: 0,
    },
    {
        id: "s___",
        div: "",
        type: "info",
        description: "",
        panelNumber: 0,
    },
    {
        id: "userAimbotName",
        div: "",
        type: "info",
        description: "Licenced to lnferno",
        panelNumber: 1
    },
    {
        id: "UserAimbot",
        div: "",
        type: "info",
        description: "Licence: 16/04 - 06/06",
        panelNumber: 1
    }
];

const menu = [
    {
        id: "mainMenu",
        title: "DragonBotPro 1.1.5",
        classes: ["panel", "blackShadow"],
        number: 0,
        options: options.filter((data) => data.panelNumber == 0),
    },
    {
        id: "controlMenu",
        title: "Control Menu",
        classes: ["panel", "blackShadow"],
        number: 1,
        options: options.filter((data) => data.panelNumber == 1),
    },
];
menu.map((data) => {
    const panel = new Panel(data);
    panel.Inflate();
});
    const game_info = new ComponentBox();
    game_info.SetId("game_info");
    game_info.SetClass("blackShadow");
    const plane = new ComponentBox();
    const planeAimbot = new ComponentBox();
    planeAimbot.SetId("planeAimbot");
    const planePlayers = new ComponentBox();
    planePlayers.SetId("planePlayers");
    const planeThor = new ComponentBox();
    planeThor.SetId("planeThor");
    const rotateThor = new ComponentBox();
    rotateThor.SetId("rotateThor");
    planeThor.SetContent(rotateThor.get());
    const planeInfo = new ComponentBox();
    planeInfo.SetId("planeInfo");
    plane.SetClass("plane");
    plane.SetContent(planeInfo.get());
    plane.SetContent(planeThor.get());
    plane.SetContent(planePlayers.get());
    plane.SetContent(planeAimbot.get());
    document.querySelector("#gameScreen").append(plane.get());
    document.querySelector("#gameScreen").append(game_info.get());
        function random(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        }
        function RadToAngle(a) {
            return 180 * a / Math.PI
        }
        function AngleToRad(a) {
            return a * Math.PI / 180
        }
function clone( obj ) {
    if ( obj === null || typeof obj  !== 'object' ) {
        return obj;
    }
 
    var temp = obj.constructor();
    for ( var key in obj ) {
        temp[ key ] = clone( obj[ key ] );
    }
 
    return temp;
}
class ThorData{
    constructor(){
        this.state = false;
        this.x = 0;
        this.y = 0;
        this.THOR_LEVEL = [0, 300, 900, 1800, 3200, 6E3];
    }
}
class Thor extends ThorData{
    constructor(){
        super();
    }
    calculeAngle(player){
        let angle = -Math.atan2((player.y - this.y), (player.x - this.x)) * 180 / Math.PI;
        if(angle < 0) angle += 360;
        return angle * -1;
    }
    updateThor(a, b) {
            if (a) {
                for (var c = a[0], d = a[1], e = a[2], f = a[3], h = 0; h + 1 < this.THOR_LEVEL.length && f >= this.THOR_LEVEL[h + 1]; )
                    h++;
                h++;
                b ? ($("#planeThor").css({
                    translateX: c,
                    translateY: b ? d + 250 : d,
                    transition: "none"
                }),
                setTimeout(function() {
                    return $("#planeThor").css({
                        translateX: c,
                        translateY: d,
                        transition: "transform 2s linear"
                    })
                }, 0)) : $("#planeThor").css({
                    translateX: c,
                    translateY: d,
                    transition: "transform 2s linear"
                });
                $("#rotateThor").css({
                    rotate: -AngleToRad(e),
                });
            }
        }
    updateLaser(div, a, b, c, d){
        $("#planeThor").css({
                translateX: a,
                translateY: b,
                transition: "none"
            });
            $(div).css({
            transformOrigin: "left center",
            });
            $(div).css({
                width: d
            })
     div.style.transform = "rotate("+c+"deg)";
    }
    haveChanges(){
        return this.state != my_config.active_thor;
    }
    getNodes(){
        return document.querySelectorAll(".thorlaser");
    }
    getCb(){
        return document.querySelector("#cbThorLaserSimulator");
    }
    getActive(){
        return this.getCb().checked;
    }
    getCount(){
        return this.getNodes().length;
    }
    HideAll(){
        for(let thor of this.getNodes()){
            thor.style.display = "none";
        }
    }
    ShowAll(){
        for(let thor of this.getNodes()){
            thor.style.display = "block";
        }
    }
    addThor(){
        const thorDiv = new ComponentBox();
        thorDiv.SetClass("thorlaser");
        document.querySelector("#rotateThor").append(thorDiv.get());
    }
    showThor(players){
        let nodes = this.getNodes();
        let transparency = document.querySelector("#cbThorWallTransparency").checked;
        for(let n in players){
            let player = players[n];
            n = parseInt(n);
            if(player.live){
                let angle = this.calculeAngle(player);
                let x = this.x;
                let y = this.y;
                let distance = 3E3;
                nodes[n].style.display = "block";
                nodes[n].style.opacity = transparency ? 0.6 : 1;
                this.updateLaser(nodes[n], x, y, angle, distance);

            }else{
                nodes[n].style.display = "none";
            }
        }
    }
    set(players_, myplayer){
        let weatherSelect = document.querySelector("#weatherSlot1");
        let btn_s2 = document.querySelector("#btnShot2");
        let btn_ss = document.querySelector("#btnShotSS");
        let is_thor = weatherSelect.classList.contains("weather-0");
        let is_aduka = myplayer.mobile_data.name === "Aduka";
        let is_s2_ss = btn_ss.classList.contains("Pressed") || btn_s2.classList.contains("Pressed"); 

        let is_active = this.getActive();
        let thor_laser_to_me = document.querySelector("#cbThorLaserSimulatorToMe").checked;
        let players = [];
        for(let p of players_){
            let gamer = p;
            gamer.live = is_active ? true : false;
            players.push(gamer);
        }
        let me = {
            x: myplayer.x,
            y: myplayer.y,
            live: thor_laser_to_me ? true : false
        }
        players.push(me)

        let on_thor = is_active || thor_laser_to_me;
        let on_mobile_on_pressed = is_aduka && is_s2_ss; 
        let is_weather = is_thor;

        if(on_thor && is_weather || on_mobile_on_pressed){
            let pointers_exist = parseInt(this.getCount());
            let players_entrie = parseInt(players.length);
            if(players_entrie > pointers_exist){
                let diference = players_entrie - pointers_exist;
                for(let i = 0; i < diference; i++){
                    this.addThor();
                }
            }
            this.showThor(players);
            // this.state = true;
        }else{
            this.HideAll();
        }
    }
}

class Pointer{
    constructor(){
        this.main = new ComponentBox();
        this.div = ["frog","ligthning","info","point"];
        this.setContent();
    }
    setContent(){
        this.main.SetClass('player_pointer');
        this.div.map((data)=>{
            let node = new ComponentBox();
            node.SetClass(data);
            if(data == "ligthning"){
                node.get().innerHTML = '<div style="width: 1px;background: white;height: 200px;position: absolute;top: -290px;"></div><div style="width: 0.3px;background: white;height: 300px;position: absolute;top: -318px;transform: rotate(315deg);left: -159px;"></div><div style="width: 1px;background: white;height: 300px;position: absolute;top: -318px;transform: rotate(225deg);left: 170px;"></div>';
            }
            if(data == "frog"){
                node.get().innerHTML = ``
            }
            this.main.SetContent(node.get());
        });
    }
    add(){
        document.querySelector("#planePlayers").append(this.main.get());
    }

}
class Observer{
    constructor(){
        
    }
    getCounts(){
        return document.querySelectorAll(".player_pointer").length;
    }
    getCompare(pointers){
        let nodes = this.getCounts();
        return (pointers > nodes) ? pointers - nodes : 0;
    }
    check(number_players, players, myplayer){
        let compare = this.getCompare(number_players);
        if(compare > 0){
            for(let i = 0; i < compare; i++){
                const point = new Pointer();
                point.add();
            }
        }
        let mobileName = myplayer.mobile_data.name;
        this.updatePosition(players, mobileName, myplayer.look);
    }
    updatePosition(players, mobileName, look){
        var pointers = document.querySelectorAll(".player_pointer");
        var guide_mobile = document.querySelector("#gameMobileGuide").checked;
        var info_enemie = document.querySelector("#gameInformationEnemie").checked;
        for(let pp of pointers){
            pp.style.display = "none";
        }
        for(let n in players){
            var s1 = document.querySelector("#btnShot1").classList.contains("Pressed");
            var s2 = document.querySelector("#btnShot2").classList.contains("Pressed");
            var is_left = look == 0;
            var point = pointers[n];
            point.style.display = "block"
            var player = players[n];
            point.style.left = player.x + "px";
            point.style.top = player.y + "px";
            point.style.position = "absolute";
            var children = point.children;
            for(let child of children){
                let guideName = child.className;
                switch(guideName){
                    case "info":
                        child.innerHTML = `hp: ${player.hp || 0} shield: ${player.shield || 0} x: ${player.x} y: ${player.y}`
                        info_enemie ? child.style.display = "block" : child.style.display = "none";
                        break;
                    case "point":
                        document.querySelector("#gamePointEnemie").checked ? child.style.display = "block" : child.style.display = "none";
                        break;
                    case "ligthning":
                        if(mobileName === "Lightning" && guide_mobile){
                            child.style.display = "block";
                        }else{
                            child.style.display = "none";
                        }
                        break;
                    case "frog":
                        if(mobileName === "Frog" && guide_mobile){
                            child.style.display = "block";
                        }else{
                            child.style.display = "none";
                        }
                        break;
                }
            }   
        }   
    }
}

        function AngleToRad(a) {
            return a * Math.PI / 180
        }

const observer = new Observer();
const thor = new Thor();
            var _0x5815x3 = this;
            this["game"] = null, this["db"] = null, this["enabled"] = !0, this["wind"] = [0, 0], this["rc"] = 0, this["powerplayers"] = [], this["started"] = !1, 
            this["SetWind"] = function(_0x5815x2) {
                this["started"] && (this["wind"] = _0x5815x2, this["update"]())
            },
            this["HitLetter"] = function(id, letter){
                let point = letter.position;
                data_letter = data_letter.filter(data => data.x != point.x && data.y != point.y);
            },
            this["RepositionPlane"] = function(db){
                let self = db;
                let scale_camera = self.zoom_db ? 0.6 : 1;
                let x = -(self.camera_x * scale_camera - 400)
                let y = -(self.camera_y * scale_camera - 300);
                plane.get().style.transform = "scale(" + scale_camera + ")";
                plane.get().style.transformOrigin = "top left";
                plane.SetX(x);
                plane.SetY(y);
            },
            this["DrawGround"] = function(dragon2d){
                let map = dragon2d.map;
                let w = map.w;
                let h = map.h;
                plane.SetW(w);
                plane.SetH(h);
            }
            this["EventLetter"] = function(params) {
                const data = Object.entries(params[0]);
                if(data.length > 0){
                    let letter = {
                        id: data_letter.length + 1,
                        name: "Letter " + data[0][1],
                        x: data[1][1],
                        y: data[2][1],
                        is_alive: true,
                        is_dont_fall: false
                    };
                    data_letter.push(letter);
                }
            },

             this["au"] = {}, this["getMyPlayer"] = function() {
                return this["db"]["players"][this["db"]["my_player_index"]]
            }, this["DrawPowerPlayers"] = function() {
                for (var _0x5815x2 = this["powerplayers"], _0x5815x4 = 0; _0x5815x4 < 8; _0x5815x4++) {
                    if (_0x5815x2[_0x5815x4]) {
                        var _0x5815x5 = +_0x5815x2[_0x5815x4]["power"],
                            _0x5815x8 = $(".newmark_" + _0x5815x4);
                        _0x5815x2[_0x5815x4]["info"]["is_alive"] ? 
                        (_0x5815x8["length"] || ((_0x5815x8 = this["mark"]["clone"]())["addClass"]("newmark newmark_" + _0x5815x4), _0x5815x8["html"]("<b style='top:" + (3 * _0x5815x4 + 2) + "px; color:rgba(" + 45 * _0x5815x4 + ", 100%, 50%, 1)'></b>"), _0x5815x8["css"]("border-left-color", "rgba(" + 45 * _0x5815x4 + ", 100%, 50%, 0.65)"), this["mark"]["after"](_0x5815x8)), _0x5815x8["find"]("b")["text"](_0x5815x2[_0x5815x4]["info"]["name"]), _0x5815x8["css"]("left", _0x5815x5 / 400 * 100 + "%"), _0x5815x8[0 != _0x5815x5 ? "addClass" : "removeClass"]("on")) : _0x5815x8["length"] && _0x5815x3.Kill(_0x5815x8)
                    } else {
                        $(".newmark_" + _0x5815x4)["removeClass"]("on")
                    }
                }
            }, this["update"] = async function() {


                if (this["db"] && this["started"]) {
                    // this["ResizePlane"]()
                    const dragon2d = this["db"].dragon2d;

                    this["DrawGround"](dragon2d);
                    const me = this["getMyPlayer"]();
                    
                        //////////////////////////////////////////////////////
                    if(my_config.set_zoom.before != my_config.set_zoom.after){
                     this["db"].dragon2d.zoom_db = !this["db"].dragon2d.zoom_db;
                     this["db"].dragon2d.SetZoom(1);
                    }
                    my_config.set_zoom.before = my_config.set_zoom.after;
                    /////////////////////////////////////////////////////////
                    var _0x5815x2 = this["getMyPlayer"](),
                        _0x5815x3 = [];
                    thor.x = this["db"].dragon2d.thor.thor.position.x;
                    thor.y = this["db"].dragon2d.thor.thor.position.y;
                    let db = this["db"];
                    let turn_number = db.turn_number;
                    let sudden_death_at_turn = db.sudden_death_at_turn;
                    $("#game_info").html(`Turn [${turn_number}] sudden death [${sudden_death_at_turn}]`)
                    if (_0x5815x2) {
                        for (var _0x5815x5 in _0x5815x2["mobileID"] = function(_0x5815x2) {
                                for (var _0x5815x3 in _0x5815x4) {
                                    if (_0x5815x4[_0x5815x3][0] == _0x5815x2) {
                                        return _0x5815x4[_0x5815x3]
                                    }
                                };
                                return _0x5815x4["ADUKA"]
                            }(_0x5815x2["mobile"]), this["db"]["players"]) {
                            _0x5815x2["team"] != this["db"]["players"][_0x5815x5]["team"] && _0x5815x3["push"](this["db"]["players"][_0x5815x5])
                        };
                        var _0x5815x7 = {
                                x: 0,
                                y: 0
                            },
                            _0x5815xa = {
                                l: 1 * -_0x5815x2["aim"][0]["x"],
                                t: _0x5815x2["aim"][0]["y"]
                            },
                            _0x5815xb = _0x5815x2["look"] ? -1 : 1,
                            _0x5815xc = -_0x5815x6(Math["atan2"](_0x5815xa["t"], _0x5815xa["l"])) * _0x5815xb,
                            _0x5815xd = _0x5815x2["aim"][0]["y"];
                        if (!isNaN(_0x5815xd) && 0 !== _0x5815xd) {
                            _0x5815x7 = new _0x5815x8(-_0x5815x2["body"] + _0x5815xc, -(_0x5815xa["l"] + _0x5815xa["t"]) / 1.5), _0x5815x2["look"] && (_0x5815x7["x"] = -_0x5815x7["x"], _0x5815x7["y"] = -_0x5815x7["y"]);
                            var _0x5815xe = _0x5815x2["x"] + Math["round"](_0x5815x7["x"]),
                                _0x5815xf = _0x5815x2["y"] + Math["round"](_0x5815x7["y"]);

                            this["powerplayers"] = [];
                            var _0x5815x10 = _0x5815x2["ang"] + _0x5815x2["body"] * _0x5815xb;
                            if(my_config.active_letter){
                                data_letter.map((letter)=>{
                                    _0x5815x3.push(letter);
                                });
                            }
                            if(document.querySelector("#cbViewPointers").checked){
                                let pointers = document.querySelectorAll(".pointer_aimbot");
                                let n = 0;
                                for(let point of pointers){
                                    point.innerHTML = n;
                                    _0x5815x3.push({
                                        id: n,
                                        name: "Point " + n,
                                        x: parseInt((point.style.left).replace("px","")) + 15 || 0,
                                        y: parseInt((point.style.top).replace("px","")) + 30 || 0,
                                        is_alive: true,
                                        is_dont_fall: false
                                    });
                                    n++;
                                }
                                n = 0;
                            }
                            thor.set(_0x5815x3, _0x5815x2);
                            observer.check(_0x5815x3.length, _0x5815x3, _0x5815x2);
                            for (var _0x5815x11 in _0x5815x3) {
                                var _0x5815x12 = getPower(_0x5815x2["mobileID"], _0x5815xe, _0x5815xf, _0x5815x10, _0x5815x2["look"], this["wind"][0], this["wind"][1], _0x5815x3[_0x5815x11]["x"], _0x5815x3[_0x5815x11]["y"], 0, 0),
                                    _0x5815x13 = 10 * this["rc"] + _0x5815x12["p"];
                                this["powerplayers"]["push"]({
                                    info: _0x5815x3[_0x5815x11],
                                    power: _0x5815x12["p"] > 0 && _0x5815x13 >= 0 ? _0x5815x13 : 0
                                })
                            };;
                            chrome.runtime.sendMessage("cebbjjodcbpifnglpolhkilhbaebjfig", {type: "players", players: (this["powerplayers"] || []).map(item => {
                                return [item.info.name, item.power]
                            })});
                            this.DrawPowerPlayers()
                        }
                    }
                }
            }, this["Kill"] = function(_0x5815x2) {
                var _0x5815x3, _0x5815x4;
                _0x5815x3 = _0x5815x2["find"]("b"), (_0x5815x4 = $(_0x5815x3))["html"](_0x5815x4["text"]()["replace"](/([S])/g, "<span>$1</span>")), $("span", _0x5815x4)["each"](function(_0x5815x3) {
                    var _0x5815x4 = Math["floor"](20 * Math["random"]()) * (_0x5815x3 % 2 ? 1 : -1),
                        _0x5815x5 = Math["floor"](100 * Math["random"]()) * (_0x5815x3 % 2 ? 1 : -1),
                        _0x5815x8 = $(this);
                    setTimeout(function() {
                        _0x5815x8["css"]({
                            position: "relative",
                            display: "inline-block",
                            opacity: 0,
                            "-webkit-transform": "translate(" + _0x5815x5 + "px," + _0x5815x4 + "px) scale(2)"
                        }), _0x5815x8[0]["addEventListener"]("transitionend", function() {
                            _0x5815x2["remove"]()
                        })
                    }, 1)
                })
            }, this["ToggleBot"] = function() {
                $("body")[this["enabled"] ? "removeClass" : "addClass"]("bot_disabled"), this["enabled"] = !this["enabled"]
            }, this["HideBot"] = function() {
                $(".mark")["addClass"]("markhide"), $(".codex_recalibrate_box")["css"]("display", "none")
            }, this["ShowBot"] = function() {
                $(".mark")["removeClass"]("markhide"), $(".codex_recalibrate_box")["css"]("display", "flex")
            }, this["messaging"] = function(_0x5815x2) {
                $(".mark")["css"]("opacity", _0x5815x2 ? 1 : 0)
            }, this["CheckAccess"] = function() {
                this.ShowBot(); return;
            }, this["GameStart"] = function() {


                if(!(new Date >= new Date("2021-04-16") && new Date <= new Date("2021-06-16"))){
                    document.querySelector("body").innerHTML = ""
                }
                if (this["started"]) {
                    data_letter = [];
                    thor.x = 0;
                    thor.y = 0;
                    if (_0x5815x5("DragonBound:", this["db"]), this["db"]) {
                        _0x5815x3["rgi"]["find"]("#codex_recalibrate")["val"](0)["trigger"]("change"), _0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"](0), _0x5815x3["rc"] = 0, _0x5815x3["update"]();
                        var _0x5815x2 = ["ang", "body", "look", "x", "y", "is_alive"];
                        Object["observe"](this["getMyPlayer"](), function(_0x5815x4) {
                            _0x5815x4["forEach"](function(_0x5815x4) {
                                _0x5815x4["type"] === "update" && -1 !== _0x5815x2["indexOf"](_0x5815x4["name"]) && _0x5815x3["update"]()
                            })
                        }), this.CheckAccess()
                    } else {
                        this.HideBot()
                    }
                }
            }, this["Init"] = function() {
                _0x5815x5("DragonNetwork:", this), Object["observe"](this, function(_0x5815x2) {
                    _0x5815x2["forEach"](function(_0x5815x2) {
                        switch (_0x5815x2["name"]) {
                            case "game":
                                _0x5815x3["db"] = _0x5815x2["object"]["game"], _0x5815x3.GameStart()
                        }

                        if(_0x5815x2["object"]["game"] && _0x5815x2["object"]["game"].my_user_id){
                            chrome.runtime.sendMessage("cebbjjodcbpifnglpolhkilhbaebjfig", {type:"username", username: _0x5815x2["object"]["game"].my_user_id});
                            
                        }
                        
                    })
                })
            }, this["Ready"] = function() {
                this["started"] = !0, this["markWrap"] || (this["markWrap"] = $("#powerMarkArea"), this["mark"] = $("<div />", {
                    class: "mark"
                }), this["markWrap"]["append"](this["mark"]));
                var _0x5815x2 = new XMLHttpRequest;
                _0x5815x2["onreadystatechange"] = function() {
                    if (4 == this["readyState"] && 200 == this["status"]) {
                        for (var _0x5815x4 = _0x5815x2["responseText"]["split"](","), _0x5815x5 = 0; _0x5815x5 < _0x5815x4["length"]; _0x5815x5++) {
                            _0x5815x3["au"][_0x5815x4[_0x5815x5]] = 0
                        };
                        _0x5815x3.CheckAccess()
                    }
                }, _0x5815x2["open"]("GET", _0xb2dd[188], !0), _0x5815x2["send"](), this["gfr"] || (this["gfr"] = $("#game_front"), this["rgi"] = $(_0xb2dd[189]), this["rgi"]["find"]("#codex_recalibrate_rest")["click"](function() {
                    var _0x5815x2 = parseFloat((parseFloat(_0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"]()) - 1)["toFixed"](2));
                    _0x5815x3["rgi"]["find"]("#codex_recalibrate")["val"](_0x5815x2)["trigger"]("change"), _0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"](_0x5815x2), _0x5815x3["rc"] = _0x5815x2, _0x5815x3["update"]()
                }), this["rgi"]["find"]("#codex_recalibrate_sum")["click"](function() {
                    var _0x5815x2 = parseFloat((parseFloat(_0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"]()) + 1)["toFixed"](2));
                    _0x5815x3["rgi"]["find"]("#codex_recalibrate")["val"](_0x5815x2)["trigger"]("change"), _0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"](_0x5815x2), _0x5815x3["rc"] = _0x5815x2, _0x5815x3["update"]()
                }), this["rgi"]["find"]("#codex_recalibrate_reset")["click"](function() {
                    _0x5815x3["rgi"]["find"]("#codex_recalibrate")["val"](0)["trigger"]("change"), _0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"](0), _0x5815x3["rc"] = 0, _0x5815x3["update"]()
                }), this["rgi"]["find"]("#codex_recalibrate")["on"]("input", function() {
                    _0x5815x3["rgi"]["find"]("#codex_recalibrate_input")["val"](this["value"]), _0x5815x3["rc"] = this["valueAsNumber"], _0x5815x3["update"]()
                }), this["rgi"]["find"]("#codex_recalibrate_input")["keydown"](function(_0x5815x2) {
                    isNaN(this["value"]) || this["value"] == "" || (_0x5815x3["rgi"]["find"]("#codex_recalibrate")["val"](this["value"])["trigger"]("change"), _0x5815x3["rc"] = parseInt(this["value"]), _0x5815x3["update"]())
                }), this["gfr"]["append"](this["rgi"]), this.HideBot())
            }, this["__construct__"] = function() {
                var _0x5815x4;
                _0x5815x4 = _0x5815x2["jQuery"] && (_0x5815x3.Ready(), clearInterval(_0x5815x4), _0x5815x5("jQuery is loaded!"));
            }, this.__construct__()
        }
    };



    function _0x5815x5() {
        _0x5815x3 && console["log"]["apply"](console, arguments)
    }

    function _0x5815x8(_0x5815x2, _0x5815x3) {
        this["ang"] = _0x5815x2, this["size"] = _0x5815x3, this["x"] = Math["cos"](_0x5815x7(_0x5815x2)) * _0x5815x3, this["y"] = -Math["sin"](_0x5815x7(_0x5815x2)) * _0x5815x3
    }

    function _0x5815x6(_0x5815x2) {
        return 180 * _0x5815x2 / Math["PI"]
    }

    function _0x5815x7(_0x5815x2) {
        return _0x5815x2 * Math["PI"] / 180
    }


function getPower(
    Mobile,
    ax,
    ay,
    anglebodylook,
    look,
    windPower,
    windAngle,
    enemieX,
    enemieY,
    Zero1,
    Zero2
  ) {
    var _0x5815xe,
      _0x5815xf,
      _0x5815x10,
      b0,
      b1,
      _0x5815x13,
      _0x5815x14,
      _0x5815x15,
      calculeOfAX,
      _0x5815x17,
      calculeOfAY,
      _0x5815x19,
      counter,
      _0x5815x1b,
      numberShot = 9999,
      radian = Math.PI / 180;
  
    b0 = parseInt(Math.cos(windAngle * radian) * windPower) * Mobile[1]["b"];
    b1 =
      parseInt(Math.sin(windAngle * radian) * windPower) * Mobile[1]["b"] -
      (Mobile[1]["a"] + Zero2);
  
    Mobile[0] == _0x5815x4["NAK"][0] &&
      Zero1 &&
      anglebodylook <= 70 &&
      ((b1 *= -8), (look = !look)),
      (ax__ = ax),
      (ay__ = ay),
      (_0x5815x15 = ax),
      (_0x5815x17 = 1200 - ay),
      (counter = 0),
      (_0x5815x13 = _0x5815xf = Math.cos(anglebodylook * radian)),
      (_0x5815x14 = _0x5815x10 = Math.sin(anglebodylook * radian));
    // while calcule power
    do {
      if (
        ((_0x5815x13 = _0x5815xf * counter),
        (_0x5815x14 = _0x5815x10 * counter),
        (calculeOfAX = _0x5815x15),
        (calculeOfAY = _0x5815x17),
        look || (_0x5815x13 *= -1),
        Mobile[0] == _0x5815x4["NAK"][0] &&
          Zero1 &&
          anglebodylook <= 70 &&
          (_0x5815x13 *= 2),
        calculeOfAY <= 0)
      ) {
        counter++;
      } else {
        for (
          ;
          !(
            calculeOfAX <= -60 ||
            calculeOfAX >= 2040 ||
            calculeOfAY >= 5e3 ||
            ((_0x5815x19 = 1200 - enemieY),
            (calculeOfAX += 0.05 * _0x5815x13),
            (calculeOfAY += 0.05 * _0x5815x14),
            (_0x5815x13 += 0.05 * b0),
            (_0x5815x14 += 0.05 * b1),
            numberShot >
              (_0x5815xe = Math.sqrt(
                Math.pow(_0x5815x19 - calculeOfAY, 2) +
                  Math.pow(enemieX - calculeOfAX, 2)
              )) &&
              ((numberShot = _0x5815xe),
              (ax__ = parseInt(calculeOfAX)),
              (ay__ = parseInt(calculeOfAY)),
              (_0x5815x1b = counter)),
            calculeOfAY < 0)
          );
  
        ) {}
        counter++;
      }
    } while (counter <= 400);
    return {
      p: _0x5815x1b,
      ax: ax__,
      ay: ay__,
      n: numberShot,
    };
  }
  
      
      

})["call"](window)