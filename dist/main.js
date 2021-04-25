/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/MarioKart8Tracks.json":
/*!****************************************!*\
  !*** ./src/data/MarioKart8Tracks.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Nitro":{"MushroomCup":{"Track1":"Mario Kart Stadium","Track2":"Water Park","Track3":"Sweet Sweet Canyon","Track4":"Thwomp Ruins"},"FlowerCup":{"Track5":"Mario Circuit","Track6":"Toad Harbor","Track7":"Twisted Mansion","Track8":"Shy Guy Falls"},"StarCup":{"Track9":"Sunshine Airport","Track10":"Dolphin Shoals","Track11":"Electrodrome","Track12":"Mount Wario"},"SpecialCup":{"Track13":"Cloudtop Cruise","Track14":"Bone-Dry Dunes","Track15":"Bowser\'s Castle","Track16":"Rainbow Road"}},"Retro":{"ShellCup":{"Track17":"Wii Moo Moo Meadows","Track18":"GBA Mario Circuit","Track19":"DS Cheep Cheep Beach","Track20":"N64 Toad\'s Turnpike"},"BananaCup":{"Track21":"GCN Dry Dry Desert","Track22":"SNES Donut Plains 3","Track23":"N64 Royal Raceway","Track24":"3DS DK Jungle"},"LeafCup":{"Track25":"DS Wario Stadium","Track26":"GCN Sherbet Land","Track27":"3DS Music Park","Track28":"N64 Yoshi Valley"},"LightningCup":{"Track29":"DS Tick-Tock Clock","Track30":"3DS Piranha Plant Slide","Track31":"Wii Grumble Volcano","Track32":"N64 Rainbow Road"}},"DLC":{"EggCup":{"Track33":"GCN Yoshi Circuit","Track34":"Excitebike Arena","Track35":"Dragon Driftway","Track36":"Mute City"},"TriforceCup":{"Track37":"Wii Wario\'s Gold Mine","Track38":"SNES Rainbow Road","Track39":"Ice Ice Outpost","Track40":"Hyrule Circuit"},"CrossingCup":{"Track41":"GCN Baby Park","Track42":"GBA Cheese Land","Track43":"Wild Woods","Track44":"Animal Crossing"},"BellCup":{"Track45":"3DS Neo Bowser City","Track46":"GBA Ribbon Road","Track47":"Super Bell Subway","Track48":"Big Blue"}}}');

/***/ }),

/***/ "./src/data/bodies.json":
/*!******************************!*\
  !*** ./src/data/bodies.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Standard Kart"},{"name":"Pipe Frame","speedGnd":-0.5,"speedWtr":0,"speedAir":-0.5,"speedGty":-0.5,"acceleration":0.5,"weight":-0.25,"handlingGnd":0.5,"handlingWtr":0.5,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0.5},{"name":"Mach 8","speedGnd":0,"speedWtr":0,"speedAir":0.25,"speedGty":0.5,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.25,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0},{"name":"Steel Driver","speedGnd":0.25,"speedWtr":0.5,"speedAir":-0.75,"speedGty":-0.25,"acceleration":-0.75,"weight":0.5,"handlingGnd":-0.5,"handlingWtr":0.75,"handlingAir":-0.5,"handlingGty":-0.5,"grip":0,"miniturbo":-0.5},{"name":"Cat Cruiser","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0.25,"speedGty":0,"acceleration":0.25,"weight":0,"handlingGnd":0.25,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25},{"name":"Circuit Special","speedGnd":0.5,"speedWtr":-0.5,"speedAir":-0.25,"speedGty":0.25,"acceleration":-0.75,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.25,"grip":-0.5,"miniturbo":-0.75},{"name":"Tri-Speeder","speedGnd":0.25,"speedWtr":0.5,"speedAir":-0.75,"speedGty":-0.25,"acceleration":-0.75,"weight":0.5,"handlingGnd":-0.5,"handlingWtr":0.75,"handlingAir":-0.5,"handlingGty":-0.5,"grip":0,"miniturbo":-0.5},{"name":"Badwagon","speedGnd":0.5,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-1,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.5,"grip":0.5,"miniturbo":-1},{"name":"Prancer","speedGnd":0.25,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":-0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":-0.25},{"name":"Biddybuggy","speedGnd":-0.75,"speedWtr":-0.5,"speedAir":-0.5,"speedGty":-0.25,"acceleration":0.75,"weight":-0.5,"handlingGnd":0.5,"handlingWtr":0.5,"handlingAir":0.25,"handlingGty":0.5,"grip":0.25,"miniturbo":0.75},{"name":"Landship","speedGnd":-0.5,"speedWtr":0.5,"speedAir":-0.25,"speedGty":-0.75,"acceleration":0.5,"weight":-0.5,"handlingGnd":0.25,"handlingWtr":0.75,"handlingAir":0,"handlingGty":-0.25,"grip":0.75,"miniturbo":0.5},{"name":"Sneeker","speedGnd":0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0,"grip":-0.75,"miniturbo":-0.25},{"name":"Sports Coupe","speedGnd":0,"speedWtr":0,"speedAir":0.25,"speedGty":0.5,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.25,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0},{"name":"Gold Standard","speedGnd":0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0,"grip":-0.75,"miniturbo":-0.25},{"name":"GLA","speedGnd":0.5,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-1,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.5,"grip":0.5,"miniturbo":-1},{"name":"W 25 Silver Arrow","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0,"handlingGty":0.25,"grip":0.5,"miniturbo":0.25},{"name":"300 SL Roadster","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Blue Falcon","speedGnd":0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":-0.25,"weight":-0.5,"handlingGnd":-0.25,"handlingWtr":0.25,"handlingAir":-0.5,"handlingGty":0.5,"grip":0,"miniturbo":-0.25},{"name":"Tanooki Kart","speedGnd":-0.25,"speedWtr":0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0.25,"handlingGnd":0.25,"handlingWtr":0.5,"handlingAir":0,"handlingGty":0,"grip":1,"miniturbo":-0.25},{"name":"B Dasher","speedGnd":0.5,"speedWtr":-0.5,"speedAir":-0.25,"speedGty":0.25,"acceleration":-0.75,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.25,"grip":-0.5,"miniturbo":-0.75},{"name":"Streetle","speedGnd":-0.5,"speedWtr":0.5,"speedAir":-0.25,"speedGty":-0.75,"acceleration":0.5,"weight":-0.5,"handlingGnd":0.25,"handlingWtr":0.75,"handlingAir":0,"handlingGty":-0.25,"grip":0.75,"miniturbo":0.5},{"name":"P-Wing","speedGnd":0.5,"speedWtr":-0.5,"speedAir":-0.25,"speedGty":0.25,"acceleration":-0.75,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.25,"grip":-0.5,"miniturbo":-0.75},{"name":"Koopa Clown","speedGnd":-0.25,"speedWtr":0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0.25,"handlingGnd":0.25,"handlingWtr":0.5,"handlingAir":0,"handlingGty":0,"grip":1,"miniturbo":-0.25},{"name":"Standard Bike","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0,"handlingGty":0.25,"grip":0.5,"miniturbo":0.25},{"name":"Comet","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0.25,"speedGty":0,"acceleration":0.25,"weight":0,"handlingGnd":0.25,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25,"insideDrift":true},{"name":"Sport Bike","speedGnd":0.25,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":-0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":-0.25,"insideDrift":true},{"name":"The Duke","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Flame Rider","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0,"handlingGty":0.25,"grip":0.5,"miniturbo":0.25},{"name":"Varmint","speedGnd":-0.5,"speedWtr":0,"speedAir":-0.5,"speedGty":-0.5,"acceleration":0.5,"weight":-0.25,"handlingGnd":0.5,"handlingWtr":0.5,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0.5},{"name":"Mr Scooty","speedGnd":-0.75,"speedWtr":-0.5,"speedAir":-0.5,"speedGty":-0.25,"acceleration":0.75,"weight":-0.5,"handlingGnd":0.5,"handlingWtr":0.5,"handlingAir":0.25,"handlingGty":0.5,"grip":0.25,"miniturbo":0.75},{"name":"Jet Bike","speedGnd":0.25,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":-0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":-0.25,"insideDrift":true},{"name":"Yoshi Bike","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0.25,"speedGty":0,"acceleration":0.25,"weight":0,"handlingGnd":0.25,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25,"insideDrift":true},{"name":"Master Cycle","speedGnd":0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0,"grip":-0.75,"miniturbo":-0.25,"insideDrift":true},{"name":"Master Cycle Zero","speedGnd":-0.25,"speedWtr":0.25,"speedAir":0,"speedGty":0,"acceleration":-0.5,"weight":0.25,"handlingGnd":0.25,"handlingWtr":0.5,"handlingAir":0,"handlingGty":0,"grip":1,"miniturbo":-0.25},{"name":"City Tripper","speedGnd":-0.5,"speedWtr":0,"speedAir":-0.5,"speedGty":-0.5,"acceleration":0.5,"weight":-0.25,"handlingGnd":0.5,"handlingWtr":0.5,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0.5},{"name":"Standard ATV","speedGnd":0.5,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-1,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.5,"grip":0.5,"miniturbo":-1},{"name":"Wild Wiggler","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0,"handlingGty":0.25,"grip":0.5,"miniturbo":0.25},{"name":"Teddy Buggy","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":0.25,"speedGty":0,"acceleration":0.25,"weight":0,"handlingGnd":0.25,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25},{"name":"Bone Rattler","speedGnd":0.25,"speedWtr":0.5,"speedAir":-0.75,"speedGty":-0.25,"acceleration":-0.75,"weight":0.5,"handlingGnd":-0.5,"handlingWtr":0.75,"handlingAir":-0.5,"handlingGty":-0.5,"grip":0,"miniturbo":-0.5},{"name":"Splat Buggy","speedGnd":0.25,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":-0.25,"weight":-0.5,"handlingGnd":-0.25,"handlingWtr":0.25,"handlingAir":-0.5,"handlingGty":0.5,"grip":0,"miniturbo":-0.25},{"name":"Inkstriker","speedGnd":0,"speedWtr":0,"speedAir":0.25,"speedGty":0.5,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.25,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0.25,"grip":0.25,"miniturbo":0}]');

/***/ }),

/***/ "./src/data/driver.json":
/*!******************************!*\
  !*** ./src/data/driver.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Mario","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5090496be115c484806a"},{"name":"Luigi","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5086496be115c4848069"},{"name":"Peach","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5070496be115c4848067"},{"name":"Daisy","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5070496be115c4848067"},{"name":"Rosalina","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a5097496be115c484806b"},{"name":"Tanooki Mario","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5080496be115c4848068"},{"name":"Cat Peach","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5069496be115c4848066"},{"name":"Yoshi","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5070496be115c4848067"},{"name":"Toad","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5062496be115c4848065"},{"name":"Koopa Troopa","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a504a496be115c4848063"},{"name":"Shy Guy","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5062496be115c4848065"},{"name":"Lakitu","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a504a496be115c4848063"},{"name":"Toadette","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a505a496be115c4848064"},{"name":"King Boo","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a5097496be115c484806b"},{"name":"Baby Mario","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5041496be115c4848062"},{"name":"Baby Luigi","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5041496be115c4848062"},{"name":"Baby Peach","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a502f496be115c4848060"},{"name":"Baby Daisy","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a502f496be115c4848060"},{"name":"Baby Rosalina","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5038496be115c4848061"},{"name":"Metal Mario","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a50ab496be115c484806e"},{"name":"Pink Gold Peach","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a50ab496be115c484806e"},{"name":"Wario","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a50a5496be115c484806d"},{"name":"Waluigi","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a509f496be115c484806c"},{"name":"Donkey Kong","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a509f496be115c484806c"},{"name":"Bowser","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a50b1496be115c484806f"},{"name":"Dry Bones","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5041496be115c4848062"},{"name":"Bowser Jr","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a504a496be115c4848063"},{"name":"Dry Bowser","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a50a5496be115c484806d"},{"name":"Lemmy","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5038496be115c4848061"},{"name":"Larry","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5062496be115c4848065"},{"name":"Wendy","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a505a496be115c4848064"},{"name":"Ludwig","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5090496be115c484806a"},{"name":"Iggy","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5086496be115c4848069"},{"name":"Roy","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a509f496be115c484806c"},{"name":"Morton","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a50b1496be115c484806f"},{"name":"Inkling Girl","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5069496be115c4848066"},{"name":"Inkling Boy","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5080496be115c4848068"},{"name":"Link","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a5097496be115c484806b"},{"name":"Villager (male)","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5080496be115c4848068"},{"name":"Villager (female)","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5069496be115c4848066"},{"name":"Isabelle","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a505a496be115c4848064"},{"name":"Mii (Light)","size":"Small","driverModel":"http://localhost:3000/driverModel/5c8a5041496be115c4848062"},{"name":"Mii (Medium)","size":"Medium","driverModel":"http://localhost:3000/driverModel/5c8a5090496be115c484806a"},{"name":"Mii (Heavy)","size":"Large","driverModel":"http://localhost:3000/driverModel/5c8a50b1496be115c484806f"}]');

/***/ }),

/***/ "./src/data/driverModel.json":
/*!***********************************!*\
  !*** ./src/data/driverModel.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"LightDriverModel0","size":"Small","speedGnd":2.25,"speedWtr":2.5,"speedAir":2.75,"speedGty":2,"acceleration":4,"weight":2,"handlingGnd":5,"handlingWtr":4.5,"handlingAir":5,"handlingGty":5,"grip":4.25,"miniturbo":4,"active":false},{"name":"LightDriverModel1","size":"Small","speedGnd":2.25,"speedWtr":2.5,"speedAir":2.75,"speedGty":2,"acceleration":4.25,"weight":2,"handlingGnd":4.75,"handlingWtr":4.25,"handlingAir":4.75,"handlingGty":4.75,"grip":3.75,"miniturbo":4,"active":false},{"name":"LightDriverModel2","size":"Small","speedGnd":2.5,"speedWtr":2.75,"speedAir":3,"speedGty":2.25,"acceleration":4.25,"weight":2.25,"handlingGnd":4.5,"handlingWtr":4,"handlingAir":4.5,"handlingGty":4.5,"grip":4,"miniturbo":3.75,"active":false},{"name":"LightDriverModel3","size":"Small","speedGnd":2.75,"speedWtr":3,"speedAir":3.25,"speedGty":2.5,"acceleration":4,"weight":2.5,"handlingGnd":4.5,"handlingWtr":4,"handlingAir":4.5,"handlingGty":4.5,"grip":4.25,"miniturbo":3.75,"active":false},{"name":"LightDriverModel4","size":"Small","speedGnd":2.75,"speedWtr":3,"speedAir":3.25,"speedGty":2.5,"acceleration":4.25,"weight":2.5,"handlingGnd":4.25,"handlingWtr":3.75,"handlingAir":4.25,"handlingGty":4.25,"grip":3.5,"miniturbo":3.75,"active":false},{"name":"LightDriverModel5","size":"Small","speedGnd":3,"speedWtr":3.25,"speedAir":3.5,"speedGty":2.75,"acceleration":4,"weight":2.75,"handlingGnd":4.25,"handlingWtr":3.75,"handlingAir":4.25,"handlingGty":4.25,"grip":4,"miniturbo":3.5,"active":false},{"name":"MediumDriverModel0","size":"Medium","speedGnd":3.25,"speedWtr":3.5,"speedAir":3.75,"speedGty":3,"acceleration":4,"weight":2.75,"handlingGnd":4,"handlingWtr":3.5,"handlingAir":4,"handlingGty":4,"grip":3.75,"miniturbo":3.5,"active":false},{"name":"MediumDriverModel1","size":"Medium","speedGnd":3.5,"speedWtr":3.75,"speedAir":4,"speedGty":3.25,"acceleration":3.75,"weight":3,"handlingGnd":3.75,"handlingWtr":3.25,"handlingAir":3.75,"handlingGty":3.75,"grip":3.75,"miniturbo":3.5,"active":false},{"name":"MediumDriverModel2","size":"Medium","speedGnd":3.5,"speedWtr":3.75,"speedAir":4,"speedGty":3.25,"acceleration":3.75,"weight":3.25,"handlingGnd":3.75,"handlingWtr":3.25,"handlingAir":3.75,"handlingGty":3.75,"grip":3.25,"miniturbo":3.5,"active":false},{"name":"MediumDriverModel3","size":"Medium","speedGnd":3.75,"speedWtr":4,"speedAir":4.25,"speedGty":3.5,"acceleration":3.5,"weight":3.5,"handlingGnd":3.75,"handlingWtr":3.25,"handlingAir":3.75,"handlingGty":3.75,"grip":3.25,"miniturbo":3.25,"active":false},{"name":"MediumDriverModel4","size":"Medium","speedGnd":3.75,"speedWtr":4,"speedAir":4.25,"speedGty":3.5,"acceleration":3.5,"weight":3.5,"handlingGnd":3.5,"handlingWtr":3,"handlingAir":3.5,"handlingGty":3.5,"grip":3.5,"miniturbo":3.25,"active":false},{"name":"HeavyDriverModel0","size":"Heavy","speedGnd":4,"speedWtr":4.25,"speedAir":4.5,"speedGty":3.75,"acceleration":3.25,"weight":3.75,"handlingGnd":3.25,"handlingWtr":2.75,"handlingAir":3.25,"handlingGty":3.25,"grip":3.75,"miniturbo":3.25,"active":false},{"name":"HeavyDriverModel1","size":"Heavy","speedGnd":4.5,"speedWtr":4.75,"speedAir":5,"speedGty":4.25,"acceleration":3.25,"weight":4,"handlingGnd":3,"handlingWtr":2.5,"handlingAir":3,"handlingGty":3,"grip":3,"miniturbo":3,"active":false},{"name":"HeavyDriverModel2","size":"Heavy","speedGnd":4.75,"speedWtr":5,"speedAir":5.25,"speedGty":4.5,"acceleration":3,"weight":4.25,"handlingGnd":2.75,"handlingWtr":2.25,"handlingAir":2.75,"handlingGty":2.75,"grip":3.25,"miniturbo":2.75,"active":false},{"name":"HeavyDriverModel3","size":"Heavy","speedGnd":4.25,"speedWtr":4.5,"speedAir":4.75,"speedGty":4,"acceleration":3.25,"weight":4.5,"handlingGnd":3.25,"handlingWtr":2.75,"handlingAir":3.25,"handlingGty":3.25,"grip":3.25,"miniturbo":3,"active":false},{"name":"HeavyDriverModel4","size":"Heavy","speedGnd":4.75,"speedWtr":5,"speedAir":5.25,"speedGty":4.5,"acceleration":3,"weight":4.5,"handlingGnd":2.5,"handlingWtr":2,"handlingAir":2.5,"handlingGty":2.5,"grip":3,"miniturbo":2.75,"active":false}]');

/***/ }),

/***/ "./src/data/gliders.json":
/*!*******************************!*\
  !*** ./src/data/gliders.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Super Glider","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Cloud Glider","speedGnd":-0.25,"speedWtr":0,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25},{"name":"Wario Wing","speedGnd":0,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0,"weight":0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0},{"name":"Waddle Wing","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Peach Parasol","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":0,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0.25},{"name":"Parachute","speedGnd":-0.25,"speedWtr":0,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25},{"name":"Parafoil","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":0,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0.25},{"name":"Flower Glider","speedGnd":-0.25,"speedWtr":0,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25},{"name":"Bowser Kite","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":0,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0.25},{"name":"Plane Glider","speedGnd":0,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0,"weight":0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0},{"name":"MKTV Parafoil","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":0,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0.25},{"name":"Gold Glider","speedGnd":0,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0,"weight":0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0},{"name":"Hylian Kite","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Paraglider","speedGnd":0,"speedWtr":-0.25,"speedAir":0,"speedGty":0.25,"acceleration":0,"weight":0.25,"handlingGnd":0,"handlingWtr":0.25,"handlingAir":0,"handlingGty":-0.25,"grip":-0.25,"miniturbo":0},{"name":"Paper Glider","speedGnd":-0.25,"speedWtr":0,"speedAir":-0.25,"speedGty":0.25,"acceleration":0.25,"weight":-0.25,"handlingGnd":0,"handlingWtr":0,"handlingAir":0.25,"handlingGty":0,"grip":0,"miniturbo":0.25}]');

/***/ }),

/***/ "./src/data/tires.json":
/*!*****************************!*\
  !*** ./src/data/tires.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Standard","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Monster","speedGnd":0,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.5,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.5,"handlingAir":-0.5,"handlingGty":-0.75,"grip":0.5,"miniturbo":-0.25},{"name":"Roller","speedGnd":-0.5,"speedWtr":0,"speedAir":0,"speedGty":-0.5,"acceleration":0.5,"weight":-0.5,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":0.25,"grip":-0.25,"miniturbo":0.75},{"name":"Slim","speedGnd":0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.5,"acceleration":-0.5,"weight":0,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":0,"grip":-1,"miniturbo":-0.25},{"name":"Slick","speedGnd":0.5,"speedWtr":-0.75,"speedAir":-0.75,"speedGty":0.5,"acceleration":-0.75,"weight":0.25,"handlingGnd":-0.25,"handlingWtr":-0.75,"handlingAir":-0.5,"handlingGty":-0.25,"grip":-1.25,"miniturbo":-0.75},{"name":"Metal","speedGnd":0.5,"speedWtr":0,"speedAir":-0.25,"speedGty":-0.25,"acceleration":-1,"weight":0.5,"handlingGnd":-0.25,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.5,"grip":-0.75,"miniturbo":-0.75},{"name":"Button","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0,"acceleration":0.25,"weight":-0.5,"handlingGnd":0,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0.25,"grip":-0.5,"miniturbo":0.5},{"name":"Off-Road","speedGnd":0.25,"speedWtr":0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.5,"handlingAir":-0.25,"handlingGty":-0.25,"grip":0.25,"miniturbo":-0.5},{"name":"Sponge","speedGnd":-0.25,"speedWtr":-0.5,"speedAir":0.25,"speedGty":-0.25,"acceleration":0,"weight":-0.25,"handlingGnd":-0.25,"handlingWtr":-0.5,"handlingAir":0,"handlingGty":-0.25,"grip":0.25,"miniturbo":0.25},{"name":"Wood","speedGnd":0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.5,"acceleration":-0.5,"weight":0,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":0,"grip":-1,"miniturbo":-0.25},{"name":"Cushion","speedGnd":-0.25,"speedWtr":-0.5,"speedAir":0.25,"speedGty":-0.25,"acceleration":0,"weight":-0.25,"handlingGnd":-0.25,"handlingWtr":-0.5,"handlingAir":0,"handlingGty":-0.25,"grip":0.25,"miniturbo":0.25},{"name":"Blue Standard","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Hot Monster","speedGnd":0,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.5,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.5,"handlingAir":-0.5,"handlingGty":-0.75,"grip":0.5,"miniturbo":-0.25},{"name":"Azure Roller","speedGnd":-0.5,"speedWtr":0,"speedAir":0,"speedGty":-0.5,"acceleration":0.5,"weight":-0.5,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":0.25,"grip":-0.25,"miniturbo":0.75},{"name":"Crimson Slim","speedGnd":0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0.5,"acceleration":-0.5,"weight":0,"handlingGnd":0.25,"handlingWtr":0.25,"handlingAir":0.25,"handlingGty":0,"grip":-1,"miniturbo":-0.25},{"name":"Cyber Slick","speedGnd":0.5,"speedWtr":-0.75,"speedAir":-0.75,"speedGty":0.5,"acceleration":-0.75,"weight":0.25,"handlingGnd":-0.25,"handlingWtr":-0.75,"handlingAir":-0.5,"handlingGty":-0.25,"grip":-1.25,"miniturbo":-0.75},{"name":"Retro Off-Road","speedGnd":0.25,"speedWtr":0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.5,"handlingAir":-0.25,"handlingGty":-0.25,"grip":0.25,"miniturbo":-0.5},{"name":"Gold Tires","speedGnd":0.5,"speedWtr":0,"speedAir":-0.25,"speedGty":-0.25,"acceleration":-1,"weight":0.5,"handlingGnd":-0.25,"handlingWtr":-0.25,"handlingAir":-0.75,"handlingGty":-0.5,"grip":-0.75,"miniturbo":-0.75},{"name":"GLA Tires","speedGnd":0,"speedWtr":0,"speedAir":0,"speedGty":0,"acceleration":0,"weight":0,"handlingGnd":0,"handlingWtr":0,"handlingAir":0,"handlingGty":0,"grip":0,"miniturbo":0},{"name":"Triforce Tires","speedGnd":0.25,"speedWtr":0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.25,"weight":0.25,"handlingGnd":-0.5,"handlingWtr":-0.5,"handlingAir":-0.25,"handlingGty":-0.25,"grip":0.25,"miniturbo":-0.5},{"name":"Ancient Tires","speedGnd":0,"speedWtr":-0.25,"speedAir":-0.5,"speedGty":0,"acceleration":-0.5,"weight":0.5,"handlingGnd":-0.75,"handlingWtr":-0.5,"handlingAir":-0.5,"handlingGty":-0.75,"grip":0.5,"miniturbo":-0.25},{"name":"Leaf Tires","speedGnd":-0.25,"speedWtr":-0.25,"speedAir":-0.25,"speedGty":0,"acceleration":0.25,"weight":-0.5,"handlingGnd":0,"handlingWtr":0,"handlingAir":-0.25,"handlingGty":0.25,"grip":-0.5,"miniturbo":0.5}]');

/***/ }),

/***/ "./src/lib/flattenTracks.js":
/*!**********************************!*\
  !*** ./src/lib/flattenTracks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flattenTracks)
/* harmony export */ });
function flattenTracks(tracks) {
    let flatTracks = {};

    Object.keys(tracks).map((set) => {
        Object.keys(tracks[set]).map((cup) => {
            flatTracks = {
                ...flatTracks,
                ...tracks[set][cup],
            };
        });
    });
    return Object.values(flatTracks);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_bodies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/bodies.json */ "./src/data/bodies.json");
/* harmony import */ var _data_driver_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/driver.json */ "./src/data/driver.json");
/* harmony import */ var _data_driverModel_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/driverModel.json */ "./src/data/driverModel.json");
/* harmony import */ var _data_gliders_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/gliders.json */ "./src/data/gliders.json");
/* harmony import */ var _data_tires_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/tires.json */ "./src/data/tires.json");
/* harmony import */ var _data_MarioKart8Tracks_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/MarioKart8Tracks.json */ "./src/data/MarioKart8Tracks.json");
/* harmony import */ var _lib_flattenTracks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/flattenTracks */ "./src/lib/flattenTracks.js");










function convertToOptions(source, destination) {
  for (let i = 0; i < source.length; i++) {
    let el = document.createElement('option');
    el.value = source[i].name;
    el.textContent = source[i].name;
    destination.appendChild(el);
  }
}

let flatTracks = (0,_lib_flattenTracks__WEBPACK_IMPORTED_MODULE_6__.default)(_data_MarioKart8Tracks_json__WEBPACK_IMPORTED_MODULE_5__);
let trackName = document.querySelector('#track-name');
let character = document.querySelector('#character');
let body = document.querySelector('#body');
let tire = document.querySelector('#tire');
let glider = document.querySelector('#glider');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
let toJson = document.querySelector('#toJson');
let textarea = document.querySelector('textarea');

let currentTrack = 0;
let storedValues = Array(flatTracks.length);

let ls = window.localStorage.getItem('tracks');
if (ls) {
  storedValues = JSON.parse(ls);
}

convertToOptions(_data_driver_json__WEBPACK_IMPORTED_MODULE_1__, character);
convertToOptions(_data_bodies_json__WEBPACK_IMPORTED_MODULE_0__, body);
convertToOptions(_data_tires_json__WEBPACK_IMPORTED_MODULE_4__, tire);
convertToOptions(_data_gliders_json__WEBPACK_IMPORTED_MODULE_3__, glider);

updateValues();

function SaveTrack() {
  let selectedCharacter = character.selectedIndex;
  let selectedBody = body.selectedIndex;
  let selectedTire = tire.selectedIndex;
  let selectedGlider = glider.selectedIndex;

  storedValues[currentTrack] = {
    character: selectedCharacter,
    body: selectedBody,
    tire: selectedTire,
    glider: selectedGlider,
  };

  console.log(storedValues);

  window.localStorage.setItem('tracks', JSON.stringify(storedValues));
}

function updateValues() {
  if (storedValues[currentTrack] === undefined || storedValues[currentTrack] === null) {
    storedValues[currentTrack] = {
      character: 0,
      body: 0,
      tire: 0,
      glider: 0,
    };
  };

  let selectedCharacter = storedValues[currentTrack].character;
  let selectedBody = storedValues[currentTrack].body;
  let selectedTire = storedValues[currentTrack].tire;
  let selectedGlider = storedValues[currentTrack].glider;

  trackName.textContent = flatTracks[currentTrack];

  character.selectedIndex = selectedCharacter;
  body.selectedIndex = selectedBody;
  tire.selectedIndex = selectedTire;
  glider.selectedIndex = selectedGlider;

}

function handleNextClick() {
  SaveTrack();
  if (currentTrack < flatTracks.length - 1) {
    currentTrack++;
  } else {
    alert('done!');
  }
  updateValues();
}

function handlePreviousClick() {
  SaveTrack();
  if (currentTrack > 0) {
    currentTrack--;
  }

  updateValues();
}

function handleToJsonClick() {
  textarea.textContent = JSON.stringify(storedValues, null, 2);
}

next.addEventListener('click', handleNextClick);
previous.addEventListener('click', handlePreviousClick);
toJson.addEventListener('click', handleToJsonClick);
})();

/******/ })()
;