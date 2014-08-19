(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "countries": [
    {
      "name": "USA",
      "shortname": "USA",
      "superpower": true,
      "group": "usa",
      "continent": "usa",
      "stab": 99,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Canada,Cuba,Mexico,Japan",
      "id": 0,
      "x": 200,
      "y": 64,
      "shortcut": "us",
      "shortcutUnique": "u"
    },
    {
      "name": "USSR",
      "shortname": "USSR",
      "superpower": true,
      "group": "ussr",
      "continent": "ussr",
      "stab": 99,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Afghanistan,Finland,N Korea,Poland,Romania",
      "id": 1,
      "x": 720,
      "y": 224,
      "shortcut": "us",
      "shortcutUnique": "u"
    },
    {
      "name": "Austria",
      "shortname": "Austria",
      "group": "eu",
      "continent": "eu",
      "stab": 4,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "E Germany,Hungary,Italy,W Germany",
      "id": 2,
      "x": 520,
      "y": 288,
      "shortcut": "au",
      "shortcutUnique": "a"
    },
    {
      "name": "Benelux",
      "shortname": "Benelux",
      "group": "weu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "W Germany,UK",
      "id": 3,
      "x": 400,
      "y": 224,
      "shortcut": "be",
      "shortcutUnique": "be"
    },
    {
      "name": "Bulgaria",
      "shortname": "Bulgaria",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Turkey,Greece",
      "id": 4,
      "x": 640,
      "y": 416,
      "shortcut": "bu",
      "shortcutUnique": "bu"
    },
    {
      "name": "Canada",
      "shortname": "Canada",
      "group": "weu",
      "continent": "eu",
      "stab": 4,
      "btl": 0,
      "usa": 2,
      "ussr": 0,
      "links": "UK",
      "id": 5,
      "x": 360,
      "y": 96,
      "shortcut": "ca",
      "shortcutUnique": "ca"
    },
    {
      "name": "Czechoslovakia",
      "shortname": "Czech",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Poland,E Germany,Hungary",
      "id": 6,
      "x": 600,
      "y": 224,
      "shortcut": "cz",
      "shortcutUnique": "cz"
    },
    {
      "name": "Denmark",
      "shortname": "Denmark",
      "group": "weu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "W Germany,Sweden",
      "id": 7,
      "x": 440,
      "y": 160,
      "shortcut": "de",
      "shortcutUnique": "d"
    },
    {
      "name": "E Germany",
      "shortname": "E.Germ",
      "shortcut": "eg",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 3,
      "links": "Poland,W Germany",
      "id": 8,
      "x": 520,
      "y": 160,
      "shortcutUnique": "e"
    },
    {
      "name": "Finland",
      "shortname": "Finland",
      "group": "eu",
      "continent": "eu",
      "stab": 4,
      "btl": 0,
      "usa": 0,
      "ussr": 1,
      "links": "Sweden",
      "id": 9,
      "x": 600,
      "y": 96,
      "shortcut": "fi",
      "shortcutUnique": "fi"
    },
    {
      "name": "France",
      "shortname": "France",
      "group": "weu",
      "continent": "eu",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Algeria,UK,W Germany,Italy,Spain\/Portugal",
      "id": 10,
      "x": 360,
      "y": 288,
      "shortcut": "fr",
      "shortcutUnique": "fr"
    },
    {
      "name": "Greece",
      "shortname": "Greece",
      "group": "weu",
      "continent": "eu",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Italy,Yugoslavia,Turkey",
      "id": 11,
      "x": 560,
      "y": 416,
      "shortcut": "gr",
      "shortcutUnique": "g"
    },
    {
      "name": "Hungary",
      "shortname": "Hungary",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Romania,Yugoslavia",
      "id": 12,
      "x": 600,
      "y": 288,
      "shortcut": "hu",
      "shortcutUnique": "h"
    },
    {
      "name": "Italy",
      "shortname": "Italy",
      "group": "weu",
      "continent": "eu",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Yugoslavia,Spain\/Portugal",
      "id": 13,
      "x": 440,
      "y": 352,
      "shortcut": "it",
      "shortcutUnique": "i"
    },
    {
      "name": "Norway",
      "shortname": "Norway",
      "group": "weu",
      "continent": "eu",
      "stab": 4,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "UK,Sweden",
      "id": 14,
      "x": 440,
      "y": 96,
      "shortcut": "no",
      "shortcutUnique": "n"
    },
    {
      "name": "Poland",
      "shortname": "Poland",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 15,
      "x": 600,
      "y": 160,
      "shortcut": "po",
      "shortcutUnique": "p"
    },
    {
      "name": "Romania",
      "shortname": "Romania",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Turkey,Yugoslavia",
      "id": 16,
      "x": 600,
      "y": 352,
      "shortcut": "ro",
      "shortcutUnique": "r"
    },
    {
      "name": "Spain\/Portugal",
      "shortname": "Spain\/Po",
      "group": "weu",
      "continent": "eu",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Morocco",
      "id": 17,
      "x": 360,
      "y": 416,
      "shortcut": "sp",
      "shortcutUnique": "sp"
    },
    {
      "name": "Sweden",
      "shortname": "Sweden",
      "group": "weu",
      "continent": "eu",
      "stab": 4,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 18,
      "x": 520,
      "y": 96,
      "shortcut": "sw",
      "shortcutUnique": "sw"
    },
    {
      "name": "Turkey",
      "shortname": "Turkey",
      "group": "weu",
      "continent": "eu",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 19,
      "x": 680,
      "y": 352,
      "shortcut": "tu",
      "shortcutUnique": "t"
    },
    {
      "name": "UK",
      "shortname": "UK",
      "group": "weu",
      "continent": "eu",
      "stab": 5,
      "btl": 0,
      "usa": 5,
      "ussr": 0,
      "links": 0,
      "id": 20,
      "x": 360,
      "y": 160,
      "shortcut": "uk",
      "shortcutUnique": "u"
    },
    {
      "name": "W Germany",
      "shortname": "W.Germ",
      "shortcut": "wg",
      "group": "weu",
      "continent": "eu",
      "stab": 4,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 21,
      "x": 480,
      "y": 224,
      "shortcutUnique": "w"
    },
    {
      "name": "Yugoslavia",
      "shortname": "Yugoslav",
      "group": "eeu",
      "continent": "eu",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 22,
      "x": 520,
      "y": 352,
      "shortcut": "yu",
      "shortcutUnique": "y"
    },
    {
      "name": "Egypt",
      "shortname": "Egypt",
      "group": "me",
      "continent": "me",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Israel,Libya,Sudan",
      "id": 23,
      "x": 760,
      "y": 480,
      "shortcut": "eg",
      "shortcutUnique": "e"
    },
    {
      "name": "Gulf States",
      "shortname": "Gulf Sts",
      "group": "me",
      "continent": "me",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Iraq,Saudi Arabia",
      "id": 24,
      "x": 1040,
      "y": 352,
      "shortcut": "gu",
      "shortcutUnique": "g"
    },
    {
      "name": "Iran",
      "shortname": "Iran",
      "shortcut": "in",
      "group": "me",
      "continent": "me",
      "stab": 2,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": "Iraq,Afghanistan,Pakistan",
      "id": 25,
      "x": 800,
      "y": 352,
      "shortcutUnique": "in"
    },
    {
      "name": "Iraq",
      "shortname": "Iraq",
      "shortcut": "iq",
      "group": "me",
      "continent": "me",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 1,
      "links": "Saudi Arabia,Jordan",
      "id": 26,
      "x": 960,
      "y": 352,
      "shortcutUnique": "iq"
    },
    {
      "name": "Israel",
      "shortname": "Israel",
      "group": "me",
      "continent": "me",
      "stab": 4,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": "Jordan,Lebanon,Syria",
      "id": 27,
      "x": 880,
      "y": 416,
      "shortcut": "is",
      "shortcutUnique": "is"
    },
    {
      "name": "Jordan",
      "shortname": "Jordan",
      "group": "me",
      "continent": "me",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Saudi Arabia,Lebanon",
      "id": 28,
      "x": 960,
      "y": 416,
      "shortcut": "jo",
      "shortcutUnique": "j"
    },
    {
      "name": "Lebanon",
      "shortname": "Lebanon",
      "group": "me",
      "continent": "me",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Syria",
      "id": 29,
      "x": 960,
      "y": 480,
      "shortcut": "le",
      "shortcutUnique": "le"
    },
    {
      "name": "Libya",
      "shortname": "Libya",
      "group": "me",
      "continent": "me",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Tunisia",
      "id": 30,
      "x": 680,
      "y": 480,
      "shortcut": "li",
      "shortcutUnique": "li"
    },
    {
      "name": "Saudi Arabia",
      "shortname": "Saudi A",
      "group": "me",
      "continent": "me",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 31,
      "x": 1040,
      "y": 416,
      "shortcut": "sa",
      "shortcutUnique": "sa"
    },
    {
      "name": "Syria",
      "shortname": "Syria",
      "group": "me",
      "continent": "me",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 1,
      "links": 0,
      "id": 32,
      "x": 880,
      "y": 480,
      "shortcut": "sy",
      "shortcutUnique": "sy"
    },
    {
      "name": "Afghanistan",
      "shortname": "Afghan",
      "group": "as",
      "continent": "as",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Pakistan",
      "id": 33,
      "x": 760,
      "y": 288,
      "shortcut": "af",
      "shortcutUnique": "af"
    },
    {
      "name": "Australia",
      "shortname": "Australia",
      "group": "as",
      "continent": "as",
      "stab": 4,
      "btl": 0,
      "usa": 4,
      "ussr": 0,
      "links": "Malaysia",
      "id": 34,
      "x": 1040,
      "y": 96,
      "shortcut": "au",
      "shortcutUnique": "au"
    },
    {
      "name": "Burma",
      "shortname": "Burma",
      "group": "sea",
      "continent": "as",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "India,Laos\/Cambodia",
      "id": 35,
      "x": 880,
      "y": 224,
      "shortcut": "bu",
      "shortcutUnique": "b"
    },
    {
      "name": "India",
      "shortname": "India",
      "shortcut": "id",
      "group": "as",
      "continent": "as",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Pakistan",
      "id": 36,
      "x": 800,
      "y": 224,
      "shortcutUnique": "id"
    },
    {
      "name": "Indonesia",
      "shortname": "Indonesia",
      "shortcut": "is",
      "group": "sea",
      "continent": "as",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Malaysia,Phillippines",
      "id": 37,
      "x": 960,
      "y": 160,
      "shortcutUnique": "is"
    },
    {
      "name": "Japan",
      "shortname": "Japan",
      "group": "as",
      "continent": "as",
      "stab": 4,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": "Phillippines,S Korea,Taiwan",
      "id": 38,
      "x": 800,
      "y": 64,
      "shortcut": "ja",
      "shortcutUnique": "j"
    },
    {
      "name": "Laos\/Cambodia",
      "shortname": "Laos\/Cam",
      "group": "sea",
      "continent": "as",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Thailand,Vietnam",
      "id": 39,
      "x": 960,
      "y": 256,
      "shortcut": "la",
      "shortcutUnique": "l"
    },
    {
      "name": "Malaysia",
      "shortname": "Malaysia",
      "group": "sea",
      "continent": "as",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Thailand",
      "id": 40,
      "x": 1040,
      "y": 160,
      "shortcut": "ma",
      "shortcutUnique": "m"
    },
    {
      "name": "N Korea",
      "shortname": "N.Korea",
      "shortcut": "nk",
      "group": "as",
      "continent": "as",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 3,
      "links": "S Korea",
      "id": 41,
      "x": 720,
      "y": 160,
      "shortcutUnique": "n"
    },
    {
      "name": "Pakistan",
      "shortname": "Pakistan",
      "group": "as",
      "continent": "as",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 42,
      "x": 840,
      "y": 288,
      "shortcut": "pa",
      "shortcutUnique": "pa"
    },
    {
      "name": "Phillippines",
      "shortname": "Phillip",
      "group": "sea",
      "continent": "as",
      "stab": 2,
      "btl": 0,
      "usa": 1,
      "ussr": 0,
      "links": 0,
      "id": 43,
      "x": 920,
      "y": 96,
      "shortcut": "ph",
      "shortcutUnique": "ph"
    },
    {
      "name": "S Korea",
      "shortname": "S.Korea",
      "shortcut": "sk",
      "group": "as",
      "continent": "as",
      "stab": 3,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": "Taiwan",
      "id": 44,
      "x": 720,
      "y": 96,
      "shortcutUnique": "s"
    },
    {
      "name": "Taiwan",
      "shortname": "Taiwan",
      "group": "as",
      "continent": "as",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 45,
      "x": 800,
      "y": 128,
      "shortcut": "ta",
      "shortcutUnique": "ta"
    },
    {
      "name": "Thailand",
      "shortname": "Thailand",
      "group": "sea",
      "continent": "as",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Vietnam",
      "id": 46,
      "x": 1040,
      "y": 224,
      "shortcut": "th",
      "shortcutUnique": "th"
    },
    {
      "name": "Vietnam",
      "shortname": "Vietnam",
      "group": "sea",
      "continent": "as",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 47,
      "x": 1040,
      "y": 288,
      "shortcut": "vi",
      "shortcutUnique": "v"
    },
    {
      "name": "Algeria",
      "shortname": "Algeria",
      "group": "af",
      "continent": "af",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Morocco,Tunisia,Saharan States",
      "id": 48,
      "x": 440,
      "y": 480,
      "shortcut": "al",
      "shortcutUnique": "al"
    },
    {
      "name": "Angola",
      "shortname": "Angola",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Botswana,South Africa,Zaire",
      "id": 49,
      "x": 560,
      "y": 672,
      "shortcut": "an",
      "shortcutUnique": "an"
    },
    {
      "name": "Botswana",
      "shortname": "Botswana",
      "group": "af",
      "continent": "af",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "South Africa,Zimbabwe",
      "id": 50,
      "x": 600,
      "y": 608,
      "shortcut": "bo",
      "shortcutUnique": "b"
    },
    {
      "name": "Cameroon",
      "shortname": "Cameroon",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Nigeria,Zaire",
      "id": 51,
      "x": 440,
      "y": 672,
      "shortcut": "ca",
      "shortcutUnique": "c"
    },
    {
      "name": "Ethiopia",
      "shortname": "Ethiopia",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Sudan,Somalia",
      "id": 52,
      "x": 800,
      "y": 608,
      "shortcut": "et",
      "shortcutUnique": "e"
    },
    {
      "name": "Ivory Coast",
      "shortname": "Ivory C",
      "group": "af",
      "continent": "af",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "West Africa,Nigeria",
      "id": 53,
      "x": 360,
      "y": 608,
      "shortcut": "iv",
      "shortcutUnique": "i"
    },
    {
      "name": "Kenya",
      "shortname": "Kenya",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Somalia,SE Africa",
      "id": 54,
      "x": 720,
      "y": 672,
      "shortcut": "ke",
      "shortcutUnique": "k"
    },
    {
      "name": "Morocco",
      "shortname": "Morocco",
      "group": "af",
      "continent": "af",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "West Africa",
      "id": 55,
      "x": 360,
      "y": 480,
      "shortcut": "mo",
      "shortcutUnique": "m"
    },
    {
      "name": "Nigeria",
      "shortname": "Nigeria",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Saharan States",
      "id": 56,
      "x": 440,
      "y": 608,
      "shortcut": "ni",
      "shortcutUnique": "n"
    },
    {
      "name": "SE Africa",
      "shortname": "SE Africa",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Zimbabwe",
      "id": 57,
      "x": 720,
      "y": 608,
      "shortcut": "se",
      "shortcutUnique": "se"
    },
    {
      "name": "Saharan States",
      "shortname": "Sahara S",
      "shortcut": "ss",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 58,
      "x": 440,
      "y": 544,
      "shortcutUnique": "ss"
    },
    {
      "name": "Somalia",
      "shortname": "Somalia",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 59,
      "x": 800,
      "y": 672,
      "shortcut": "so",
      "shortcutUnique": "so"
    },
    {
      "name": "South Africa",
      "shortname": "South Af",
      "shortcut": "sa",
      "group": "af",
      "continent": "af",
      "stab": 3,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": 0,
      "id": 60,
      "x": 640,
      "y": 672,
      "shortcutUnique": "sa"
    },
    {
      "name": "Sudan",
      "shortname": "Sudan",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 61,
      "x": 800,
      "y": 544,
      "shortcut": "su",
      "shortcutUnique": "su"
    },
    {
      "name": "Tunisia",
      "shortname": "Tunisia",
      "group": "af",
      "continent": "af",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 62,
      "x": 520,
      "y": 480,
      "shortcut": "tu",
      "shortcutUnique": "t"
    },
    {
      "name": "West Africa",
      "shortname": "West Af",
      "group": "af",
      "continent": "af",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 63,
      "x": 360,
      "y": 544,
      "shortcut": "we",
      "shortcutUnique": "w"
    },
    {
      "name": "Zaire",
      "shortname": "Zaire",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Zimbabwe",
      "id": 64,
      "x": 520,
      "y": 608,
      "shortcut": "za",
      "shortcutUnique": "za"
    },
    {
      "name": "Zimbabwe",
      "shortname": "Zimbabwe",
      "group": "af",
      "continent": "af",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 65,
      "x": 600,
      "y": 544,
      "shortcut": "zi",
      "shortcutUnique": "zi"
    },
    {
      "name": "Costa Rica",
      "shortname": "Costa R",
      "group": "ca",
      "continent": "ca",
      "stab": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Honduras,Nicaragua,Panama",
      "id": 66,
      "x": 240,
      "y": 288,
      "shortcut": "co",
      "shortcutUnique": "co"
    },
    {
      "name": "Cuba",
      "shortname": "Cuba",
      "group": "ca",
      "continent": "ca",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Haiti,Nicaragua",
      "id": 67,
      "x": 160,
      "y": 160,
      "shortcut": "cu",
      "shortcutUnique": "cu"
    },
    {
      "name": "Dominican Rep",
      "shortname": "Dominic R",
      "group": "ca",
      "continent": "ca",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Haiti",
      "id": 68,
      "x": 280,
      "y": 224,
      "shortcut": "do",
      "shortcutUnique": "d"
    },
    {
      "name": "El Salvador",
      "shortname": "El Salva",
      "group": "ca",
      "continent": "ca",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Honduras,Guatemala",
      "id": 69,
      "x": 80,
      "y": 288,
      "shortcut": "el",
      "shortcutUnique": "e"
    },
    {
      "name": "Guatemala",
      "shortname": "Guatemala",
      "group": "ca",
      "continent": "ca",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Honduras,Mexico",
      "id": 70,
      "x": 120,
      "y": 224,
      "shortcut": "gu",
      "shortcutUnique": "g"
    },
    {
      "name": "Haiti",
      "shortname": "Haiti",
      "group": "ca",
      "continent": "ca",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 71,
      "x": 240,
      "y": 160,
      "shortcut": "ha",
      "shortcutUnique": "ha"
    },
    {
      "name": "Honduras",
      "shortname": "Honduras",
      "group": "ca",
      "continent": "ca",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Nicaragua",
      "id": 72,
      "x": 160,
      "y": 288,
      "shortcut": "ho",
      "shortcutUnique": "ho"
    },
    {
      "name": "Mexico",
      "shortname": "Mexico",
      "group": "ca",
      "continent": "ca",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 73,
      "x": 80,
      "y": 160,
      "shortcut": "me",
      "shortcutUnique": "m"
    },
    {
      "name": "Nicaragua",
      "shortname": "Nicaragua",
      "group": "ca",
      "continent": "ca",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 74,
      "x": 200,
      "y": 224,
      "shortcut": "ni",
      "shortcutUnique": "n"
    },
    {
      "name": "Panama",
      "shortname": "Panama",
      "group": "ca",
      "continent": "ca",
      "stab": 2,
      "btl": 1,
      "usa": 1,
      "ussr": 0,
      "links": "Columbia",
      "id": 75,
      "x": 160,
      "y": 352,
      "shortcut": "pa",
      "shortcutUnique": "p"
    },
    {
      "name": "Argentina",
      "shortname": "Argentina",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Chile,Paraguay,Uruguay",
      "id": 76,
      "x": 160,
      "y": 640,
      "shortcut": "ar",
      "shortcutUnique": "a"
    },
    {
      "name": "Bolivia",
      "shortname": "Bolivia",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Paraguay,Peru",
      "id": 77,
      "x": 160,
      "y": 512,
      "shortcut": "bo",
      "shortcutUnique": "bo"
    },
    {
      "name": "Brazil",
      "shortname": "Brazil",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Uruguay,Venezuela",
      "id": 78,
      "x": 240,
      "y": 544,
      "shortcut": "br",
      "shortcutUnique": "br"
    },
    {
      "name": "Chile",
      "shortname": "Chile",
      "group": "sa",
      "continent": "sa",
      "stab": 3,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": "Peru",
      "id": 79,
      "x": 80,
      "y": 608,
      "shortcut": "ch",
      "shortcutUnique": "ch"
    },
    {
      "name": "Columbia",
      "shortname": "Columbia",
      "group": "sa",
      "continent": "sa",
      "stab": 1,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Ecuador,Venezuela",
      "id": 80,
      "x": 160,
      "y": 448,
      "shortcut": "co",
      "shortcutUnique": "co"
    },
    {
      "name": "Ecuador",
      "shortname": "Ecuador",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Peru",
      "id": 81,
      "x": 80,
      "y": 480,
      "shortcut": "ec",
      "shortcutUnique": "e"
    },
    {
      "name": "Paraguay",
      "shortname": "Paraguay",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "Uruguay",
      "id": 82,
      "x": 160,
      "y": 576,
      "shortcut": "pa",
      "shortcutUnique": "pa"
    },
    {
      "name": "Peru",
      "shortname": "Peru",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 83,
      "x": 80,
      "y": 544,
      "shortcut": "pe",
      "shortcutUnique": "pe"
    },
    {
      "name": "Uruguay",
      "shortname": "Uruguay",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 84,
      "x": 240,
      "y": 608,
      "shortcut": "ur",
      "shortcutUnique": "u"
    },
    {
      "name": "Venezuela",
      "shortname": "Venezuela",
      "group": "sa",
      "continent": "sa",
      "stab": 2,
      "btl": 1,
      "usa": 0,
      "ussr": 0,
      "links": 0,
      "id": 85,
      "x": 240,
      "y": 480,
      "shortcut": "ve",
      "shortcutUnique": "v"
    }
  ],
  "regionInfoNodes": [
    {
      "id": "eu",
      "group": "eu",
      "continent": "eu",
      "name": "Europe",
      "shortname": "Europe",
      "shortcut": "e",
      "points": [
        3,
        7,
        "W"
      ],
      "x": 440,
      "y": 288,
      "stab": 99,
      "numBtl": 5,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    },
    {
      "id": "me",
      "group": "me",
      "continent": "me",
      "name": "Mid East",
      "shortname": "Mid East",
      "shortcut": "m",
      "points": [
        3,
        5,
        7
      ],
      "x": 1040,
      "y": 480,
      "stab": 99,
      "numBtl": 6,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    },
    {
      "id": "as",
      "group": "as",
      "continent": "as",
      "name": "Asia",
      "shortname": "Asia",
      "shortcut": "a",
      "points": [
        3,
        7,
        9
      ],
      "extra": "1 per SE country, 2 for Thailand",
      "x": 880,
      "y": 160,
      "stab": 99,
      "numBtl": 6,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    },
    {
      "id": "af",
      "group": "af",
      "continent": "af",
      "name": "Africa",
      "shortname": "Africa",
      "shortcut": "f",
      "points": [
        1,
        4,
        6
      ],
      "x": 520,
      "y": 544,
      "stab": 99,
      "numBtl": 5,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    },
    {
      "id": "ca",
      "group": "ca",
      "continent": "ca",
      "name": "C.America",
      "shortname": "C.America",
      "shortcut": "c",
      "points": [
        1,
        3,
        5
      ],
      "x": 240,
      "y": 352,
      "stab": 99,
      "numBtl": 3,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    },
    {
      "id": "sa",
      "group": "sa",
      "continent": "sa",
      "name": "S.America",
      "shortname": "S.America",
      "shortcut": "s",
      "points": [
        2,
        5,
        6
      ],
      "x": 240,
      "y": 672,
      "stab": 99,
      "numBtl": 4,
      "btl": 0,
      "usa": 0,
      "ussr": 0,
      "links": "",
      "regionInfo": true,
      "fixed": true
    }
  ],
  "links": [
    {
      "source": 0,
      "target": 5,
      "nodes": [
        "USA",
        "Canada"
      ],
      "crossContinent": true
    },
    {
      "source": 0,
      "target": 67,
      "nodes": [
        "USA",
        "Cuba"
      ],
      "crossContinent": true
    },
    {
      "source": 0,
      "target": 73,
      "nodes": [
        "USA",
        "Mexico"
      ],
      "crossContinent": true
    },
    {
      "source": 0,
      "target": 38,
      "nodes": [
        "USA",
        "Japan"
      ],
      "crossContinent": true
    },
    {
      "source": 1,
      "target": 33,
      "nodes": [
        "USSR",
        "Afghanistan"
      ],
      "crossContinent": true
    },
    {
      "source": 1,
      "target": 9,
      "nodes": [
        "USSR",
        "Finland"
      ],
      "crossContinent": true
    },
    {
      "source": 1,
      "target": 41,
      "nodes": [
        "USSR",
        "N Korea"
      ],
      "crossContinent": true
    },
    {
      "source": 1,
      "target": 15,
      "nodes": [
        "USSR",
        "Poland"
      ],
      "crossContinent": true
    },
    {
      "source": 1,
      "target": 16,
      "nodes": [
        "USSR",
        "Romania"
      ],
      "crossContinent": true
    },
    {
      "source": 2,
      "target": 8,
      "nodes": [
        "Austria",
        "E Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 2,
      "target": 12,
      "nodes": [
        "Austria",
        "Hungary"
      ],
      "crossContinent": false
    },
    {
      "source": 2,
      "target": 13,
      "nodes": [
        "Austria",
        "Italy"
      ],
      "crossContinent": false
    },
    {
      "source": 2,
      "target": 21,
      "nodes": [
        "Austria",
        "W Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 3,
      "target": 21,
      "nodes": [
        "Benelux",
        "W Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 3,
      "target": 20,
      "nodes": [
        "Benelux",
        "UK"
      ],
      "crossContinent": false
    },
    {
      "source": 4,
      "target": 19,
      "nodes": [
        "Bulgaria",
        "Turkey"
      ],
      "crossContinent": false
    },
    {
      "source": 4,
      "target": 11,
      "nodes": [
        "Bulgaria",
        "Greece"
      ],
      "crossContinent": false
    },
    {
      "source": 5,
      "target": 20,
      "nodes": [
        "Canada",
        "UK"
      ],
      "crossContinent": false
    },
    {
      "source": 6,
      "target": 15,
      "nodes": [
        "Czechoslovakia",
        "Poland"
      ],
      "crossContinent": false
    },
    {
      "source": 6,
      "target": 8,
      "nodes": [
        "Czechoslovakia",
        "E Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 6,
      "target": 12,
      "nodes": [
        "Czechoslovakia",
        "Hungary"
      ],
      "crossContinent": false
    },
    {
      "source": 7,
      "target": 21,
      "nodes": [
        "Denmark",
        "W Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 7,
      "target": 18,
      "nodes": [
        "Denmark",
        "Sweden"
      ],
      "crossContinent": false
    },
    {
      "source": 8,
      "target": 15,
      "nodes": [
        "E Germany",
        "Poland"
      ],
      "crossContinent": false
    },
    {
      "source": 8,
      "target": 21,
      "nodes": [
        "E Germany",
        "W Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 9,
      "target": 18,
      "nodes": [
        "Finland",
        "Sweden"
      ],
      "crossContinent": false
    },
    {
      "source": 10,
      "target": 48,
      "nodes": [
        "France",
        "Algeria"
      ],
      "crossContinent": true
    },
    {
      "source": 10,
      "target": 20,
      "nodes": [
        "France",
        "UK"
      ],
      "crossContinent": false
    },
    {
      "source": 10,
      "target": 21,
      "nodes": [
        "France",
        "W Germany"
      ],
      "crossContinent": false
    },
    {
      "source": 10,
      "target": 13,
      "nodes": [
        "France",
        "Italy"
      ],
      "crossContinent": false
    },
    {
      "source": 10,
      "target": 17,
      "nodes": [
        "France",
        "Spain\/Portugal"
      ],
      "crossContinent": false
    },
    {
      "source": 11,
      "target": 13,
      "nodes": [
        "Greece",
        "Italy"
      ],
      "crossContinent": false
    },
    {
      "source": 11,
      "target": 22,
      "nodes": [
        "Greece",
        "Yugoslavia"
      ],
      "crossContinent": false
    },
    {
      "source": 11,
      "target": 19,
      "nodes": [
        "Greece",
        "Turkey"
      ],
      "crossContinent": false
    },
    {
      "source": 12,
      "target": 16,
      "nodes": [
        "Hungary",
        "Romania"
      ],
      "crossContinent": false
    },
    {
      "source": 12,
      "target": 22,
      "nodes": [
        "Hungary",
        "Yugoslavia"
      ],
      "crossContinent": false
    },
    {
      "source": 13,
      "target": 22,
      "nodes": [
        "Italy",
        "Yugoslavia"
      ],
      "crossContinent": false
    },
    {
      "source": 13,
      "target": 17,
      "nodes": [
        "Italy",
        "Spain\/Portugal"
      ],
      "crossContinent": false
    },
    {
      "source": 14,
      "target": 20,
      "nodes": [
        "Norway",
        "UK"
      ],
      "crossContinent": false
    },
    {
      "source": 14,
      "target": 18,
      "nodes": [
        "Norway",
        "Sweden"
      ],
      "crossContinent": false
    },
    {
      "source": 16,
      "target": 19,
      "nodes": [
        "Romania",
        "Turkey"
      ],
      "crossContinent": false
    },
    {
      "source": 16,
      "target": 22,
      "nodes": [
        "Romania",
        "Yugoslavia"
      ],
      "crossContinent": false
    },
    {
      "source": 17,
      "target": 55,
      "nodes": [
        "Spain\/Portugal",
        "Morocco"
      ],
      "crossContinent": true
    },
    {
      "source": 19,
      "target": 32,
      "nodes": [
        "Turkey",
        "Syria"
      ],
      "crossContinent": true
    },
    {
      "source": 23,
      "target": 27,
      "nodes": [
        "Egypt",
        "Israel"
      ],
      "crossContinent": false
    },
    {
      "source": 23,
      "target": 30,
      "nodes": [
        "Egypt",
        "Libya"
      ],
      "crossContinent": false
    },
    {
      "source": 23,
      "target": 61,
      "nodes": [
        "Egypt",
        "Sudan"
      ],
      "crossContinent": true
    },
    {
      "source": 24,
      "target": 26,
      "nodes": [
        "Gulf States",
        "Iraq"
      ],
      "crossContinent": false
    },
    {
      "source": 24,
      "target": 31,
      "nodes": [
        "Gulf States",
        "Saudi Arabia"
      ],
      "crossContinent": false
    },
    {
      "source": 25,
      "target": 26,
      "nodes": [
        "Iran",
        "Iraq"
      ],
      "crossContinent": false
    },
    {
      "source": 25,
      "target": 33,
      "nodes": [
        "Iran",
        "Afghanistan"
      ],
      "crossContinent": true
    },
    {
      "source": 25,
      "target": 42,
      "nodes": [
        "Iran",
        "Pakistan"
      ],
      "crossContinent": true
    },
    {
      "source": 26,
      "target": 31,
      "nodes": [
        "Iraq",
        "Saudi Arabia"
      ],
      "crossContinent": false
    },
    {
      "source": 26,
      "target": 28,
      "nodes": [
        "Iraq",
        "Jordan"
      ],
      "crossContinent": false
    },
    {
      "source": 27,
      "target": 28,
      "nodes": [
        "Israel",
        "Jordan"
      ],
      "crossContinent": false
    },
    {
      "source": 27,
      "target": 29,
      "nodes": [
        "Israel",
        "Lebanon"
      ],
      "crossContinent": false
    },
    {
      "source": 27,
      "target": 32,
      "nodes": [
        "Israel",
        "Syria"
      ],
      "crossContinent": false
    },
    {
      "source": 28,
      "target": 31,
      "nodes": [
        "Jordan",
        "Saudi Arabia"
      ],
      "crossContinent": false
    },
    {
      "source": 28,
      "target": 29,
      "nodes": [
        "Jordan",
        "Lebanon"
      ],
      "crossContinent": false
    },
    {
      "source": 29,
      "target": 32,
      "nodes": [
        "Lebanon",
        "Syria"
      ],
      "crossContinent": false
    },
    {
      "source": 30,
      "target": 62,
      "nodes": [
        "Libya",
        "Tunisia"
      ],
      "crossContinent": true
    },
    {
      "source": 33,
      "target": 42,
      "nodes": [
        "Afghanistan",
        "Pakistan"
      ],
      "crossContinent": false
    },
    {
      "source": 34,
      "target": 40,
      "nodes": [
        "Australia",
        "Malaysia"
      ],
      "crossContinent": false
    },
    {
      "source": 35,
      "target": 36,
      "nodes": [
        "Burma",
        "India"
      ],
      "crossContinent": false
    },
    {
      "source": 35,
      "target": 39,
      "nodes": [
        "Burma",
        "Laos\/Cambodia"
      ],
      "crossContinent": false
    },
    {
      "source": 36,
      "target": 42,
      "nodes": [
        "India",
        "Pakistan"
      ],
      "crossContinent": false
    },
    {
      "source": 37,
      "target": 40,
      "nodes": [
        "Indonesia",
        "Malaysia"
      ],
      "crossContinent": false
    },
    {
      "source": 37,
      "target": 43,
      "nodes": [
        "Indonesia",
        "Phillippines"
      ],
      "crossContinent": false
    },
    {
      "source": 38,
      "target": 43,
      "nodes": [
        "Japan",
        "Phillippines"
      ],
      "crossContinent": false
    },
    {
      "source": 38,
      "target": 44,
      "nodes": [
        "Japan",
        "S Korea"
      ],
      "crossContinent": false
    },
    {
      "source": 38,
      "target": 45,
      "nodes": [
        "Japan",
        "Taiwan"
      ],
      "crossContinent": false
    },
    {
      "source": 39,
      "target": 46,
      "nodes": [
        "Laos\/Cambodia",
        "Thailand"
      ],
      "crossContinent": false
    },
    {
      "source": 39,
      "target": 47,
      "nodes": [
        "Laos\/Cambodia",
        "Vietnam"
      ],
      "crossContinent": false
    },
    {
      "source": 40,
      "target": 46,
      "nodes": [
        "Malaysia",
        "Thailand"
      ],
      "crossContinent": false
    },
    {
      "source": 41,
      "target": 44,
      "nodes": [
        "N Korea",
        "S Korea"
      ],
      "crossContinent": false
    },
    {
      "source": 44,
      "target": 45,
      "nodes": [
        "S Korea",
        "Taiwan"
      ],
      "crossContinent": false
    },
    {
      "source": 46,
      "target": 47,
      "nodes": [
        "Thailand",
        "Vietnam"
      ],
      "crossContinent": false
    },
    {
      "source": 48,
      "target": 55,
      "nodes": [
        "Algeria",
        "Morocco"
      ],
      "crossContinent": false
    },
    {
      "source": 48,
      "target": 62,
      "nodes": [
        "Algeria",
        "Tunisia"
      ],
      "crossContinent": false
    },
    {
      "source": 48,
      "target": 58,
      "nodes": [
        "Algeria",
        "Saharan States"
      ],
      "crossContinent": false
    },
    {
      "source": 49,
      "target": 50,
      "nodes": [
        "Angola",
        "Botswana"
      ],
      "crossContinent": false
    },
    {
      "source": 49,
      "target": 60,
      "nodes": [
        "Angola",
        "South Africa"
      ],
      "crossContinent": false
    },
    {
      "source": 49,
      "target": 64,
      "nodes": [
        "Angola",
        "Zaire"
      ],
      "crossContinent": false
    },
    {
      "source": 50,
      "target": 60,
      "nodes": [
        "Botswana",
        "South Africa"
      ],
      "crossContinent": false
    },
    {
      "source": 50,
      "target": 65,
      "nodes": [
        "Botswana",
        "Zimbabwe"
      ],
      "crossContinent": false
    },
    {
      "source": 51,
      "target": 56,
      "nodes": [
        "Cameroon",
        "Nigeria"
      ],
      "crossContinent": false
    },
    {
      "source": 51,
      "target": 64,
      "nodes": [
        "Cameroon",
        "Zaire"
      ],
      "crossContinent": false
    },
    {
      "source": 52,
      "target": 61,
      "nodes": [
        "Ethiopia",
        "Sudan"
      ],
      "crossContinent": false
    },
    {
      "source": 52,
      "target": 59,
      "nodes": [
        "Ethiopia",
        "Somalia"
      ],
      "crossContinent": false
    },
    {
      "source": 53,
      "target": 63,
      "nodes": [
        "Ivory Coast",
        "West Africa"
      ],
      "crossContinent": false
    },
    {
      "source": 53,
      "target": 56,
      "nodes": [
        "Ivory Coast",
        "Nigeria"
      ],
      "crossContinent": false
    },
    {
      "source": 54,
      "target": 59,
      "nodes": [
        "Kenya",
        "Somalia"
      ],
      "crossContinent": false
    },
    {
      "source": 54,
      "target": 57,
      "nodes": [
        "Kenya",
        "SE Africa"
      ],
      "crossContinent": false
    },
    {
      "source": 55,
      "target": 63,
      "nodes": [
        "Morocco",
        "West Africa"
      ],
      "crossContinent": false
    },
    {
      "source": 56,
      "target": 58,
      "nodes": [
        "Nigeria",
        "Saharan States"
      ],
      "crossContinent": false
    },
    {
      "source": 57,
      "target": 65,
      "nodes": [
        "SE Africa",
        "Zimbabwe"
      ],
      "crossContinent": false
    },
    {
      "source": 64,
      "target": 65,
      "nodes": [
        "Zaire",
        "Zimbabwe"
      ],
      "crossContinent": false
    },
    {
      "source": 66,
      "target": 72,
      "nodes": [
        "Costa Rica",
        "Honduras"
      ],
      "crossContinent": false
    },
    {
      "source": 66,
      "target": 74,
      "nodes": [
        "Costa Rica",
        "Nicaragua"
      ],
      "crossContinent": false
    },
    {
      "source": 66,
      "target": 75,
      "nodes": [
        "Costa Rica",
        "Panama"
      ],
      "crossContinent": false
    },
    {
      "source": 67,
      "target": 71,
      "nodes": [
        "Cuba",
        "Haiti"
      ],
      "crossContinent": false
    },
    {
      "source": 67,
      "target": 74,
      "nodes": [
        "Cuba",
        "Nicaragua"
      ],
      "crossContinent": false
    },
    {
      "source": 68,
      "target": 71,
      "nodes": [
        "Dominican Rep",
        "Haiti"
      ],
      "crossContinent": false
    },
    {
      "source": 69,
      "target": 72,
      "nodes": [
        "El Salvador",
        "Honduras"
      ],
      "crossContinent": false
    },
    {
      "source": 69,
      "target": 70,
      "nodes": [
        "El Salvador",
        "Guatemala"
      ],
      "crossContinent": false
    },
    {
      "source": 70,
      "target": 72,
      "nodes": [
        "Guatemala",
        "Honduras"
      ],
      "crossContinent": false
    },
    {
      "source": 70,
      "target": 73,
      "nodes": [
        "Guatemala",
        "Mexico"
      ],
      "crossContinent": false
    },
    {
      "source": 72,
      "target": 74,
      "nodes": [
        "Honduras",
        "Nicaragua"
      ],
      "crossContinent": false
    },
    {
      "source": 75,
      "target": 80,
      "nodes": [
        "Panama",
        "Columbia"
      ],
      "crossContinent": true
    },
    {
      "source": 76,
      "target": 79,
      "nodes": [
        "Argentina",
        "Chile"
      ],
      "crossContinent": false
    },
    {
      "source": 76,
      "target": 82,
      "nodes": [
        "Argentina",
        "Paraguay"
      ],
      "crossContinent": false
    },
    {
      "source": 76,
      "target": 84,
      "nodes": [
        "Argentina",
        "Uruguay"
      ],
      "crossContinent": false
    },
    {
      "source": 77,
      "target": 82,
      "nodes": [
        "Bolivia",
        "Paraguay"
      ],
      "crossContinent": false
    },
    {
      "source": 77,
      "target": 83,
      "nodes": [
        "Bolivia",
        "Peru"
      ],
      "crossContinent": false
    },
    {
      "source": 78,
      "target": 84,
      "nodes": [
        "Brazil",
        "Uruguay"
      ],
      "crossContinent": false
    },
    {
      "source": 78,
      "target": 85,
      "nodes": [
        "Brazil",
        "Venezuela"
      ],
      "crossContinent": false
    },
    {
      "source": 79,
      "target": 83,
      "nodes": [
        "Chile",
        "Peru"
      ],
      "crossContinent": false
    },
    {
      "source": 80,
      "target": 81,
      "nodes": [
        "Columbia",
        "Ecuador"
      ],
      "crossContinent": false
    },
    {
      "source": 80,
      "target": 85,
      "nodes": [
        "Columbia",
        "Venezuela"
      ],
      "crossContinent": false
    },
    {
      "source": 81,
      "target": 83,
      "nodes": [
        "Ecuador",
        "Peru"
      ],
      "crossContinent": false
    },
    {
      "source": 82,
      "target": 84,
      "nodes": [
        "Paraguay",
        "Uruguay"
      ],
      "crossContinent": false
    }
  ],
  "countryShortcuts": {
    "e": [
      "au",
      "be",
      "bu",
      "ca",
      "cz",
      "de",
      "eg",
      "fi",
      "fr",
      "gr",
      "hu",
      "it",
      "no",
      "po",
      "ro",
      "sp",
      "sw",
      "tu",
      "uk",
      "wg",
      "yu"
    ],
    "m": [
      "eg",
      "gu",
      "in",
      "iq",
      "is",
      "jo",
      "le",
      "li",
      "sa",
      "sy"
    ],
    "a": [
      "af",
      "au",
      "bu",
      "id",
      "is",
      "ja",
      "la",
      "ma",
      "nk",
      "pa",
      "ph",
      "sk",
      "ta",
      "th",
      "vi"
    ],
    "f": [
      "al",
      "an",
      "bo",
      "ca",
      "et",
      "iv",
      "ke",
      "mo",
      "ni",
      "se",
      "ss",
      "so",
      "sa",
      "su",
      "tu",
      "we",
      "za",
      "zi"
    ],
    "c": [
      "co",
      "cu",
      "do",
      "el",
      "gu",
      "ha",
      "ho",
      "me",
      "ni",
      "pa"
    ],
    "s": [
      "ar",
      "bo",
      "br",
      "ch",
      "co",
      "ec",
      "pa",
      "pe",
      "ur",
      "ve"
    ]
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "regionInfoNodes": [
    {
      "id": "eu",
      "group": "eu",
      "continent": "eu",
      "name": "Europe",
      "shortname": "Europe",
      "shortcut": "e",
      "points": [3,7,"W"],
      "x": 440, "y": 288,
      "stab":99,
      "numBtl":5,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }, 
    {
      "id": "me",
      "group": "me",
      "continent": "me",
      "name": "Mid East",
      "shortname": "Mid East",
      "shortcut": "m",
      "points": [3,5,7],
      "x": 1040, "y": 480,
      "stab":99,
      "numBtl":6,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }, 
    {
      "id": "as",
      "group": "as",
      "continent": "as",
      "name": "Asia",
      "shortname": "Asia",
      "shortcut": "a",
      "points": [3,7,9],
      "extra": "1 per SE country, 2 for Thailand",
      "x": 880, "y": 160,
      "stab":99,
      "numBtl":6,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }, 
    {
      "id": "af",
      "group": "af",
      "continent": "af",
      "name": "Africa",
      "shortname": "Africa",
      "shortcut": "f",
      "points": [1,4,6],
      "x": 520, "y": 544,
      "stab":99,
      "numBtl":5,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }, 
    {
      "id": "ca",
      "group": "ca",
      "continent": "ca",
      "name": "C.America",
      "shortname": "C.America",
      "shortcut": "c",
      "points": [1,3,5],
      "x": 240, "y": 352,
      "stab":99,
      "numBtl":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }, 
    {
      "id": "sa",
      "group": "sa",
      "continent": "sa",
      "name": "S.America",
      "shortname": "S.America",
      "shortcut": "s",
      "points": [2,5,6],
      "x": 240, "y": 672,
      "stab":99,
      "numBtl":4,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":""
    }
  ],

  "countryPositions": {
    "USA": {
      "x": 200,
      "y": 64
    },
    "USSR": {
      "x": 720,
      "y": 224
    },
    "Austria": {
      "x": 520,
      "y": 288
    },
    "Benelux": {
      "x": 400,
      "y": 224
    },
    "Bulgaria": {
      "x": 640,
      "y": 416
    },
    "Canada": {
      "x": 360,
      "y": 96
    },
    "Czechoslovakia": {
      "x": 600,
      "y": 224
    },
    "Denmark": {
      "x": 440,
      "y": 160
    },
    "E Germany": {
      "x": 520,
      "y": 160
    },
    "Finland": {
      "x": 600,
      "y": 96
    },
    "France": {
      "x": 360,
      "y": 288
    },
    "Greece": {
      "x": 560,
      "y": 416
    },
    "Hungary": {
      "x": 600,
      "y": 288
    },
    "Italy": {
      "x": 440,
      "y": 352
    },
    "Norway": {
      "x": 440,
      "y": 96
    },
    "Poland": {
      "x": 600,
      "y": 160
    },
    "Romania": {
      "x": 600,
      "y": 352
    },
    "Spain/Portugal": {
      "x": 360,
      "y": 416
    },
    "Sweden": {
      "x": 520,
      "y": 96
    },
    "Turkey": {
      "x": 680,
      "y": 352
    },
    "UK": {
      "x": 360,
      "y": 160
    },
    "W Germany": {
      "x": 480,
      "y": 224
    },
    "Yugoslavia": {
      "x": 520,
      "y": 352
    },
    "Egypt": {
      "x": 760,
      "y": 480
    },
    "Gulf States": {
      "x": 1040,
      "y": 352
    },
    "Iran": {
      "x": 800,
      "y": 352
    },
    "Iraq": {
      "x": 960,
      "y": 352
    },
    "Israel": {
      "x": 880,
      "y": 416
    },
    "Jordan": {
      "x": 960,
      "y": 416
    },
    "Lebanon": {
      "x": 960,
      "y": 480
    },
    "Libya": {
      "x": 680,
      "y": 480
    },
    "Saudi Arabia": {
      "x": 1040,
      "y": 416
    },
    "Syria": {
      "x": 880,
      "y": 480
    },
    "Afghanistan": {
      "x": 760,
      "y": 288
    },
    "Australia": {
      "x": 1040,
      "y": 96
    },
    "Burma": {
      "x": 880,
      "y": 224
    },
    "India": {
      "x": 800,
      "y": 224
    },
    "Indonesia": {
      "x": 960,
      "y": 160
    },
    "Japan": {
      "x": 800,
      "y": 64
    },
    "Laos/Cambodia": {
      "x": 960,
      "y": 256
    },
    "Malaysia": {
      "x": 1040,
      "y": 160
    },
    "N Korea": {
      "x": 720,
      "y": 160
    },
    "Pakistan": {
      "x": 840,
      "y": 288
    },
    "Phillippines": {
      "x": 920,
      "y": 96
    },
    "S Korea": {
      "x": 720,
      "y": 96
    },
    "Taiwan": {
      "x": 800,
      "y": 128
    },
    "Thailand": {
      "x": 1040,
      "y": 224
    },
    "Vietnam": {
      "x": 1040,
      "y": 288
    },
    "Algeria": {
      "x": 440,
      "y": 480
    },
    "Angola": {
      "x": 560,
      "y": 672
    },
    "Botswana": {
      "x": 600,
      "y": 608
    },
    "Cameroon": {
      "x": 440,
      "y": 672
    },
    "Ethiopia": {
      "x": 800,
      "y": 608
    },
    "Ivory Coast": {
      "x": 360,
      "y": 608
    },
    "Kenya": {
      "x": 720,
      "y": 672
    },
    "Morocco": {
      "x": 360,
      "y": 480
    },
    "Nigeria": {
      "x": 440,
      "y": 608
    },
    "SE Africa": {
      "x": 720,
      "y": 608
    },
    "Saharan States": {
      "x": 440,
      "y": 544
    },
    "Somalia": {
      "x": 800,
      "y": 672
    },
    "South Africa": {
      "x": 640,
      "y": 672
    },
    "Sudan": {
      "x": 800,
      "y": 544
    },
    "Tunisia": {
      "x": 520,
      "y": 480
    },
    "West Africa": {
      "x": 360,
      "y": 544
    },
    "Zaire": {
      "x": 520,
      "y": 608
    },
    "Zimbabwe": {
      "x": 600,
      "y": 544
    },
    "Costa Rica": {
      "x": 240,
      "y": 288
    },
    "Cuba": {
      "x": 160,
      "y": 160
    },
    "Dominican Rep": {
      "x": 280,
      "y": 224
    },
    "El Salvador": {
      "x": 80,
      "y": 288
    },
    "Guatemala": {
      "x": 120,
      "y": 224
    },
    "Haiti": {
      "x": 240,
      "y": 160
    },
    "Honduras": {
      "x": 160,
      "y": 288
    },
    "Mexico": {
      "x": 80,
      "y": 160
    },
    "Nicaragua": {
      "x": 200,
      "y": 224
    },
    "Panama": {
      "x": 160,
      "y": 352
    },
    "Argentina": {
      "x": 160,
      "y": 640
    },
    "Bolivia": {
      "x": 160,
      "y": 512
    },
    "Brazil": {
      "x": 240,
      "y": 544
    },
    "Chile": {
      "x": 80,
      "y": 608
    },
    "Columbia": {
      "x": 160,
      "y": 448
    },
    "Ecuador": {
      "x": 80,
      "y": 480
    },
    "Paraguay": {
      "x": 160,
      "y": 576
    },
    "Peru": {
      "x": 80,
      "y": 544
    },
    "Uruguay": {
      "x": 240,
      "y": 608
    },
    "Venezuela": {
      "x": 240,
      "y": 480
    }
  },
  "countries": [
    {
      "name":"USA",
      "shortname":"USA",
      "superpower": true,
      "group":"usa",
      "continent":"usa",
      "stab":99,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Canada,Cuba,Mexico,Japan",
      "id":0
    },
    {
      
      "name":"USSR",
      "shortname":"USSR",
      "superpower": true,
      "group":"ussr",
      "continent":"ussr",
      "stab":99,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Afghanistan,Finland,N Korea,Poland,Romania",
      "id":1
    },
    {
      "name":"Austria",
      "shortname":"Austria",
      "group":"eu",
      "continent":"eu",
      "stab":4,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"E Germany,Hungary,Italy,W Germany",
      "id":2
    },
    {
      
      "name":"Benelux",
      "shortname":"Benelux",
      "group":"weu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"W Germany,UK",
      "id":3
    },
    {
      
      "name":"Bulgaria",
      "shortname":"Bulgaria",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Turkey,Greece",
      "id":4
    },
    {
      
      "name":"Canada",
      "shortname":"Canada",
      "group":"weu",
      "continent":"eu",
      "stab":4,
      "btl":0,
      "usa":2,
      "ussr":0,
      "links":"UK",
      "id":5
    },
    {
      
      "name":"Czechoslovakia",
      "shortname":"Czech",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Poland,E Germany,Hungary",
      "id":6
    },
    {
      
      "name":"Denmark",
      "shortname":"Denmark",
      "group":"weu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"W Germany,Sweden",
      "id":7
    },
    {
      
      "name":"E Germany",
      "shortname":"E.Germ",
      "shortcut":"eg",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":3,
      "links":"Poland,W Germany",
      "id":8
    },
    {
      
      "name":"Finland",
      "shortname":"Finland",
      "group":"eu",
      "continent":"eu",
      "stab":4,
      "btl":0,
      "usa":0,
      "ussr":1,
      "links":"Sweden",
      "id":9
    },
    {
      
      "name":"France",
      "shortname":"France",
      "group":"weu",
      "continent":"eu",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Algeria,UK,W Germany,Italy,Spain/Portugal",
      "id":10
    },
    {
      
      "name":"Greece",
      "shortname":"Greece",
      "group":"weu",
      "continent":"eu",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Italy,Yugoslavia,Turkey",
      "id":11
    },
    {
      
      "name":"Hungary",
      "shortname":"Hungary",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Romania,Yugoslavia",
      "id":12
    },
    {
      
      "name":"Italy",
      "shortname":"Italy",
      "group":"weu",
      "continent":"eu",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Yugoslavia,Spain/Portugal",
      "id":13
    },
    {
      
      "name":"Norway",
      "shortname":"Norway",
      "group":"weu",
      "continent":"eu",
      "stab":4,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"UK,Sweden",
      "id":14
    },
    {
      
      "name":"Poland",
      "shortname":"Poland",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":15
    },
    {
      
      "name":"Romania",
      "shortname":"Romania",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Turkey,Yugoslavia",
      "id":16
    },
    {
      
      "name":"Spain/Portugal",
      "shortname":"Spain/Po",
      "group":"weu",
      "continent":"eu",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Morocco",
      "id":17
    },
    {
      
      "name":"Sweden",
      "shortname":"Sweden",
      "group":"weu",
      "continent":"eu",
      "stab":4,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":18
    },
    {
      
      "name":"Turkey",
      "shortname":"Turkey",
      "group":"weu",
      "continent":"eu",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":19
    },
    {
      
      "name":"UK",
      "shortname":"UK",
      "group":"weu",
      "continent":"eu",
      "stab":5,
      "btl":0,
      "usa":5,
      "ussr":0,
      "links":0,
      "id":20
    },
    {
      
      "name":"W Germany",
      "shortname":"W.Germ",
      "shortcut":'wg',
      "group":"weu",
      "continent":"eu",
      "stab":4,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":21
    },
    {
      
      "name":"Yugoslavia",
      "shortname":"Yugoslav",
      "group":"eeu",
      "continent":"eu",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":22
    },
    {
      
      "name":"Egypt",
      "shortname":"Egypt",
      "group":"me",
      "continent":"me",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Israel,Libya,Sudan",
      "id":23
    },
    {
      
      "name":"Gulf States",
      "shortname":"Gulf Sts",
      "group":"me",
      "continent":"me",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Iraq,Saudi Arabia",
      "id":24
    },
    {
      
      "name":"Iran",
      "shortname":"Iran",
      "shortcut":"in",
      "group":"me",
      "continent":"me",
      "stab":2,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":"Iraq,Afghanistan,Pakistan",
      "id":25
    },
    {
      
      "name":"Iraq",
      "shortname":"Iraq",
      "shortcut":"iq",
      "group":"me",
      "continent":"me",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":1,
      "links":"Saudi Arabia,Jordan",
      "id":26
    },
    {
      
      "name":"Israel",
      "shortname":"Israel",
      "group":"me",
      "continent":"me",
      "stab":4,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":"Jordan,Lebanon,Syria",
      "id":27
    },
    {
      
      "name":"Jordan",
      "shortname":"Jordan",
      "group":"me",
      "continent":"me",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Saudi Arabia,Lebanon",
      "id":28
    },
    {
      
      "name":"Lebanon",
      "shortname":"Lebanon",
      "group":"me",
      "continent":"me",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Syria",
      "id":29
    },
    {
      
      "name":"Libya",
      "shortname":"Libya",
      "group":"me",
      "continent":"me",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Tunisia",
      "id":30
    },
    {
      
      "name":"Saudi Arabia",
      "shortname":"Saudi A",
      "group":"me",
      "continent":"me",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":31
    },
    {
      
      "name":"Syria",
      "shortname":"Syria",
      "group":"me",
      "continent":"me",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":1,
      "links":0,
      "id":32
    },
    {
      
      "name":"Afghanistan",
      "shortname":"Afghan",
      "group":"as",
      "continent":"as",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Pakistan",
      "id":33
    },
    {
      
      "name":"Australia",
      "shortname":"Australia",
      "group":"as",
      "continent":"as",
      "stab":4,
      "btl":0,
      "usa":4,
      "ussr":0,
      "links":"Malaysia",
      "id":34
    },
    {
      
      "name":"Burma",
      "shortname":"Burma",
      "group":"sea",
      "continent":"as",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"India,Laos/Cambodia",
      "id":35
    },
    {
      
      "name":"India",
      "shortname":"India",
      "shortcut":"id",
      "group":"as",
      "continent":"as",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Pakistan",
      "id":36
    },
    {
      
      "name":"Indonesia",
      "shortname":"Indonesia",
      "shortcut":"is",
      "group":"sea",
      "continent":"as",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Malaysia,Phillippines",
      "id":37
    },
    {
      
      "name":"Japan",
      "shortname":"Japan",
      "group":"as",
      "continent":"as",
      "stab":4,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":"Phillippines,S Korea,Taiwan",
      "id":38
    },
    {
      
      "name":"Laos/Cambodia",
      "shortname":"Laos/Cam",
      "group":"sea",
      "continent":"as",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Thailand,Vietnam",
      "id":39
    },
    {
      
      "name":"Malaysia",
      "shortname":"Malaysia",
      "group":"sea",
      "continent":"as",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Thailand",
      "id":40
    },
    {
      
      "name":"N Korea",
      "shortname":"N.Korea",
      "shortcut":"nk",
      "group":"as",
      "continent":"as",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":3,
      "links":"S Korea",
      "id":41
    },
    {
      
      "name":"Pakistan",
      "shortname":"Pakistan",
      "group":"as",
      "continent":"as",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":42
    },
    {
      
      "name":"Phillippines",
      "shortname":"Phillip",
      "group":"sea",
      "continent":"as",
      "stab":2,
      "btl":0,
      "usa":1,
      "ussr":0,
      "links":0,
      "id":43
    },
    {
      
      "name":"S Korea",
      "shortname":"S.Korea",
      "shortcut":"sk",
      "group":"as",
      "continent":"as",
      "stab":3,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":"Taiwan",
      "id":44
    },
    {
      
      "name":"Taiwan",
      "shortname":"Taiwan",
      "group":"as",
      "continent":"as",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":45
    },
    {
      
      "name":"Thailand",
      "shortname":"Thailand",
      "group":"sea",
      "continent":"as",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Vietnam",
      "id":46
    },
    {
      
      "name":"Vietnam",
      "shortname":"Vietnam",
      "group":"sea",
      "continent":"as",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":47
    },
    {
      
      "name":"Algeria",
      "shortname":"Algeria",
      "group":"af",
      "continent":"af",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Morocco,Tunisia,Saharan States",
      "id":48
    },
    {
      
      "name":"Angola",
      "shortname":"Angola",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Botswana,South Africa,Zaire",
      "id":49
    },
    {
      
      "name":"Botswana",
      "shortname":"Botswana",
      "group":"af",
      "continent":"af",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"South Africa,Zimbabwe",
      "id":50
    },
    {
      
      "name":"Cameroon",
      "shortname":"Cameroon",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Nigeria,Zaire",
      "id":51
    },
    {
      
      "name":"Ethiopia",
      "shortname":"Ethiopia",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Sudan,Somalia",
      "id":52
    },
    {
      
      "name":"Ivory Coast",
      "shortname":"Ivory C",
      "group":"af",
      "continent":"af",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"West Africa,Nigeria",
      "id":53
    },
    {
      
      "name":"Kenya",
      "shortname":"Kenya",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Somalia,SE Africa",
      "id":54
    },
    {
      
      "name":"Morocco",
      "shortname":"Morocco",
      "group":"af",
      "continent":"af",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"West Africa",
      "id":55
    },
    {
      
      "name":"Nigeria",
      "shortname":"Nigeria",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Saharan States",
      "id":56
    },
    {
      
      "name":"SE Africa",
      "shortname":"SE Africa",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Zimbabwe",
      "id":57
    },
    {
      
      "name":"Saharan States",
      "shortname":"Sahara S",
      "shortcut":"ss",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":58
    },
    {
      
      "name":"Somalia",
      "shortname":"Somalia",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":59
    },
    {
      
      "name":"South Africa",
      "shortname":"South Af",
      "shortcut":"sa",
      "group":"af",
      "continent":"af",
      "stab":3,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":0,
      "id":60
    },
    {
      
      "name":"Sudan",
      "shortname":"Sudan",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":61
    },
    {
      
      "name":"Tunisia",
      "shortname":"Tunisia",
      "group":"af",
      "continent":"af",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":62
    },
    {
      
      "name":"West Africa",
      "shortname":"West Af",
      "group":"af",
      "continent":"af",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":63
    },
    {
      
      "name":"Zaire",
      "shortname":"Zaire",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Zimbabwe",
      "id":64
    },
    {
      
      "name":"Zimbabwe",
      "shortname":"Zimbabwe",
      "group":"af",
      "continent":"af",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":65
    },
    {
      
      "name":"Costa Rica",
      "shortname":"Costa R",
      "group":"ca",
      "continent":"ca",
      "stab":3,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Honduras,Nicaragua,Panama",
      "id":66
    },
    {
      
      "name":"Cuba",
      "shortname":"Cuba",
      "group":"ca",
      "continent":"ca",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Haiti,Nicaragua",
      "id":67
    },
    {
      
      "name":"Dominican Rep",
      "shortname":"Dominic R",
      "group":"ca",
      "continent":"ca",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Haiti",
      "id":68
    },
    {
      
      "name":"El Salvador",
      "shortname":"El Salva",
      "group":"ca",
      "continent":"ca",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Honduras,Guatemala",
      "id":69
    },
    {
      
      "name":"Guatemala",
      "shortname":"Guatemala",
      "group":"ca",
      "continent":"ca",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Honduras,Mexico",
      "id":70
    },
    {
      
      "name":"Haiti",
      "shortname":"Haiti",
      "group":"ca",
      "continent":"ca",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":71
    },
    {
      
      "name":"Honduras",
      "shortname":"Honduras",
      "group":"ca",
      "continent":"ca",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Nicaragua",
      "id":72
    },
    {
      
      "name":"Mexico",
      "shortname":"Mexico",
      "group":"ca",
      "continent":"ca",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":73
    },
    {
      
      "name":"Nicaragua",
      "shortname":"Nicaragua",
      "group":"ca",
      "continent":"ca",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":74
    },
    {
      
      "name":"Panama",
      "shortname":"Panama",
      "group":"ca",
      "continent":"ca",
      "stab":2,
      "btl":1,
      "usa":1,
      "ussr":0,
      "links":"Columbia",
      "id":75
    },
    {
      
      "name":"Argentina",
      "shortname":"Argentina",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Chile,Paraguay,Uruguay",
      "id":76
    },
    {
      
      "name":"Bolivia",
      "shortname":"Bolivia",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Paraguay,Peru",
      "id":77
    },
    {
      
      "name":"Brazil",
      "shortname":"Brazil",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Uruguay,Venezuela",
      "id":78
    },
    {
      
      "name":"Chile",
      "shortname":"Chile",
      "group":"sa",
      "continent":"sa",
      "stab":3,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":"Peru",
      "id":79
    },
    {
      
      "name":"Columbia",
      "shortname":"Columbia",
      "group":"sa",
      "continent":"sa",
      "stab":1,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Ecuador,Venezuela",
      "id":80
    },
    {
      
      "name":"Ecuador",
      "shortname":"Ecuador",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Peru",
      "id":81
    },
    {
      
      "name":"Paraguay",
      "shortname":"Paraguay",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":"Uruguay",
      "id":82
    },
    {
      
      "name":"Peru",
      "shortname":"Peru",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":83
    },
    {
      
      "name":"Uruguay",
      "shortname":"Uruguay",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":0,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":84
    },
    {
      
      "name":"Venezuela",
      "shortname":"Venezuela",
      "group":"sa",
      "continent":"sa",
      "stab":2,
      "btl":1,
      "usa":0,
      "ussr":0,
      "links":0,
      "id":85
    }
  ],

  "links": [
    {
      "source":0,
      "target":5,
      "nodes":[
        "USA",
        "Canada"
      ],
      "crossContinent":true
    },
    {
      "source":0,
      "target":67,
      "nodes":[
        "USA",
        "Cuba"
      ],
      "crossContinent":true
    },
    {
      "source":0,
      "target":73,
      "nodes":[
        "USA",
        "Mexico"
      ],
      "crossContinent":true
    },
    {
      "source":0,
      "target":38,
      "nodes":[
        "USA",
        "Japan"
      ],
      "crossContinent":true
    },
    {
      "source":1,
      "target":33,
      "nodes":[
        "USSR",
        "Afghanistan"
      ],
      "crossContinent":true
    },
    {
      "source":1,
      "target":9,
      "nodes":[
        "USSR",
        "Finland"
      ],
      "crossContinent":true
    },
    {
      "source":1,
      "target":41,
      "nodes":[
        "USSR",
        "N Korea"
      ],
      "crossContinent":true
    },
    {
      "source":1,
      "target":15,
      "nodes":[
        "USSR",
        "Poland"
      ],
      "crossContinent":true
    },
    {
      "source":1,
      "target":16,
      "nodes":[
        "USSR",
        "Romania"
      ],
      "crossContinent":true
    },
    {
      "source":2,
      "target":8,
      "nodes":[
        "Austria",
        "E Germany"
      ],
      "crossContinent":false
    },
    {
      "source":2,
      "target":12,
      "nodes":[
        "Austria",
        "Hungary"
      ],
      "crossContinent":false
    },
    {
      "source":2,
      "target":13,
      "nodes":[
        "Austria",
        "Italy"
      ],
      "crossContinent":false
    },
    {
      "source":2,
      "target":21,
      "nodes":[
        "Austria",
        "W Germany"
      ],
      "crossContinent":false
    },
    {
      "source":3,
      "target":21,
      "nodes":[
        "Benelux",
        "W Germany"
      ],
      "crossContinent":false
    },
    {
      "source":3,
      "target":20,
      "nodes":[
        "Benelux",
        "UK"
      ],
      "crossContinent":false
    },
    {
      "source":4,
      "target":19,
      "nodes":[
        "Bulgaria",
        "Turkey"
      ],
      "crossContinent":false
    },
    {
      "source":4,
      "target":11,
      "nodes":[
        "Bulgaria",
        "Greece"
      ],
      "crossContinent":false
    },
    {
      "source":5,
      "target":20,
      "nodes":[
        "Canada",
        "UK"
      ],
      "crossContinent":false
    },
    {
      "source":6,
      "target":15,
      "nodes":[
        "Czechoslovakia",
        "Poland"
      ],
      "crossContinent":false
    },
    {
      "source":6,
      "target":8,
      "nodes":[
        "Czechoslovakia",
        "E Germany"
      ],
      "crossContinent":false
    },
    {
      "source":6,
      "target":12,
      "nodes":[
        "Czechoslovakia",
        "Hungary"
      ],
      "crossContinent":false
    },
    {
      "source":7,
      "target":21,
      "nodes":[
        "Denmark",
        "W Germany"
      ],
      "crossContinent":false
    },
    {
      "source":7,
      "target":18,
      "nodes":[
        "Denmark",
        "Sweden"
      ],
      "crossContinent":false
    },
    {
      "source":8,
      "target":15,
      "nodes":[
        "E Germany",
        "Poland"
      ],
      "crossContinent":false
    },
    {
      "source":8,
      "target":21,
      "nodes":[
        "E Germany",
        "W Germany"
      ],
      "crossContinent":false
    },
    {
      "source":9,
      "target":18,
      "nodes":[
        "Finland",
        "Sweden"
      ],
      "crossContinent":false
    },
    {
      "source":10,
      "target":48,
      "nodes":[
        "France",
        "Algeria"
      ],
      "crossContinent":true
    },
    {
      "source":10,
      "target":20,
      "nodes":[
        "France",
        "UK"
      ],
      "crossContinent":false
    },
    {
      "source":10,
      "target":21,
      "nodes":[
        "France",
        "W Germany"
      ],
      "crossContinent":false
    },
    {
      "source":10,
      "target":13,
      "nodes":[
        "France",
        "Italy"
      ],
      "crossContinent":false
    },
    {
      "source":10,
      "target":17,
      "nodes":[
        "France",
        "Spain/Portugal"
      ],
      "crossContinent":false
    },
    {
      "source":11,
      "target":13,
      "nodes":[
        "Greece",
        "Italy"
      ],
      "crossContinent":false
    },
    {
      "source":11,
      "target":22,
      "nodes":[
        "Greece",
        "Yugoslavia"
      ],
      "crossContinent":false
    },
    {
      "source":11,
      "target":19,
      "nodes":[
        "Greece",
        "Turkey"
      ],
      "crossContinent":false
    },
    {
      "source":12,
      "target":16,
      "nodes":[
        "Hungary",
        "Romania"
      ],
      "crossContinent":false
    },
    {
      "source":12,
      "target":22,
      "nodes":[
        "Hungary",
        "Yugoslavia"
      ],
      "crossContinent":false
    },
    {
      "source":13,
      "target":22,
      "nodes":[
        "Italy",
        "Yugoslavia"
      ],
      "crossContinent":false
    },
    {
      "source":13,
      "target":17,
      "nodes":[
        "Italy",
        "Spain/Portugal"
      ],
      "crossContinent":false
    },
    {
      "source":14,
      "target":20,
      "nodes":[
        "Norway",
        "UK"
      ],
      "crossContinent":false
    },
    {
      "source":14,
      "target":18,
      "nodes":[
        "Norway",
        "Sweden"
      ],
      "crossContinent":false
    },
    {
      "source":16,
      "target":19,
      "nodes":[
        "Romania",
        "Turkey"
      ],
      "crossContinent":false
    },
    {
      "source":16,
      "target":22,
      "nodes":[
        "Romania",
        "Yugoslavia"
      ],
      "crossContinent":false
    },
    {
      "source":17,
      "target":55,
      "nodes":[
        "Spain/Portugal",
        "Morocco"
      ],
      "crossContinent":true
    },
    {
      "source":19,
      "target":32,
      "nodes":[
        "Turkey",
        "Syria"
      ],
      "crossContinent":true
    },
    {
      "source":23,
      "target":27,
      "nodes":[
        "Egypt",
        "Israel"
      ],
      "crossContinent":false
    },
    {
      "source":23,
      "target":30,
      "nodes":[
        "Egypt",
        "Libya"
      ],
      "crossContinent":false
    },
    {
      "source":23,
      "target":61,
      "nodes":[
        "Egypt",
        "Sudan"
      ],
      "crossContinent":true
    },
    {
      "source":24,
      "target":26,
      "nodes":[
        "Gulf States",
        "Iraq"
      ],
      "crossContinent":false
    },
    {
      "source":24,
      "target":31,
      "nodes":[
        "Gulf States",
        "Saudi Arabia"
      ],
      "crossContinent":false
    },
    {
      "source":25,
      "target":26,
      "nodes":[
        "Iran",
        "Iraq"
      ],
      "crossContinent":false
    },
    {
      "source":25,
      "target":33,
      "nodes":[
        "Iran",
        "Afghanistan"
      ],
      "crossContinent":true
    },
    {
      "source":25,
      "target":42,
      "nodes":[
        "Iran",
        "Pakistan"
      ],
      "crossContinent":true
    },
    {
      "source":26,
      "target":31,
      "nodes":[
        "Iraq",
        "Saudi Arabia"
      ],
      "crossContinent":false
    },
    {
      "source":26,
      "target":28,
      "nodes":[
        "Iraq",
        "Jordan"
      ],
      "crossContinent":false
    },
    {
      "source":27,
      "target":28,
      "nodes":[
        "Israel",
        "Jordan"
      ],
      "crossContinent":false
    },
    {
      "source":27,
      "target":29,
      "nodes":[
        "Israel",
        "Lebanon"
      ],
      "crossContinent":false
    },
    {
      "source":27,
      "target":32,
      "nodes":[
        "Israel",
        "Syria"
      ],
      "crossContinent":false
    },
    {
      "source":28,
      "target":31,
      "nodes":[
        "Jordan",
        "Saudi Arabia"
      ],
      "crossContinent":false
    },
    {
      "source":28,
      "target":29,
      "nodes":[
        "Jordan",
        "Lebanon"
      ],
      "crossContinent":false
    },
    {
      "source":29,
      "target":32,
      "nodes":[
        "Lebanon",
        "Syria"
      ],
      "crossContinent":false
    },
    {
      "source":30,
      "target":62,
      "nodes":[
        "Libya",
        "Tunisia"
      ],
      "crossContinent":true
    },
    {
      "source":33,
      "target":42,
      "nodes":[
        "Afghanistan",
        "Pakistan"
      ],
      "crossContinent":false
    },
    {
      "source":34,
      "target":40,
      "nodes":[
        "Australia",
        "Malaysia"
      ],
      "crossContinent":false
    },
    {
      "source":35,
      "target":36,
      "nodes":[
        "Burma",
        "India"
      ],
      "crossContinent":false
    },
    {
      "source":35,
      "target":39,
      "nodes":[
        "Burma",
        "Laos/Cambodia"
      ],
      "crossContinent":false
    },
    {
      "source":36,
      "target":42,
      "nodes":[
        "India",
        "Pakistan"
      ],
      "crossContinent":false
    },
    {
      "source":37,
      "target":40,
      "nodes":[
        "Indonesia",
        "Malaysia"
      ],
      "crossContinent":false
    },
    {
      "source":37,
      "target":43,
      "nodes":[
        "Indonesia",
        "Phillippines"
      ],
      "crossContinent":false
    },
    {
      "source":38,
      "target":43,
      "nodes":[
        "Japan",
        "Phillippines"
      ],
      "crossContinent":false
    },
    {
      "source":38,
      "target":44,
      "nodes":[
        "Japan",
        "S Korea"
      ],
      "crossContinent":false
    },
    {
      "source":38,
      "target":45,
      "nodes":[
        "Japan",
        "Taiwan"
      ],
      "crossContinent":false
    },
    {
      "source":39,
      "target":46,
      "nodes":[
        "Laos/Cambodia",
        "Thailand"
      ],
      "crossContinent":false
    },
    {
      "source":39,
      "target":47,
      "nodes":[
        "Laos/Cambodia",
        "Vietnam"
      ],
      "crossContinent":false
    },
    {
      "source":40,
      "target":46,
      "nodes":[
        "Malaysia",
        "Thailand"
      ],
      "crossContinent":false
    },
    {
      "source":41,
      "target":44,
      "nodes":[
        "N Korea",
        "S Korea"
      ],
      "crossContinent":false
    },
    {
      "source":44,
      "target":45,
      "nodes":[
        "S Korea",
        "Taiwan"
      ],
      "crossContinent":false
    },
    {
      "source":46,
      "target":47,
      "nodes":[
        "Thailand",
        "Vietnam"
      ],
      "crossContinent":false
    },
    {
      "source":48,
      "target":55,
      "nodes":[
        "Algeria",
        "Morocco"
      ],
      "crossContinent":false
    },
    {
      "source":48,
      "target":62,
      "nodes":[
        "Algeria",
        "Tunisia"
      ],
      "crossContinent":false
    },
    {
      "source":48,
      "target":58,
      "nodes":[
        "Algeria",
        "Saharan States"
      ],
      "crossContinent":false
    },
    {
      "source":49,
      "target":50,
      "nodes":[
        "Angola",
        "Botswana"
      ],
      "crossContinent":false
    },
    {
      "source":49,
      "target":60,
      "nodes":[
        "Angola",
        "South Africa"
      ],
      "crossContinent":false
    },
    {
      "source":49,
      "target":64,
      "nodes":[
        "Angola",
        "Zaire"
      ],
      "crossContinent":false
    },
    {
      "source":50,
      "target":60,
      "nodes":[
        "Botswana",
        "South Africa"
      ],
      "crossContinent":false
    },
    {
      "source":50,
      "target":65,
      "nodes":[
        "Botswana",
        "Zimbabwe"
      ],
      "crossContinent":false
    },
    {
      "source":51,
      "target":56,
      "nodes":[
        "Cameroon",
        "Nigeria"
      ],
      "crossContinent":false
    },
    {
      "source":51,
      "target":64,
      "nodes":[
        "Cameroon",
        "Zaire"
      ],
      "crossContinent":false
    },
    {
      "source":52,
      "target":61,
      "nodes":[
        "Ethiopia",
        "Sudan"
      ],
      "crossContinent":false
    },
    {
      "source":52,
      "target":59,
      "nodes":[
        "Ethiopia",
        "Somalia"
      ],
      "crossContinent":false
    },
    {
      "source":53,
      "target":63,
      "nodes":[
        "Ivory Coast",
        "West Africa"
      ],
      "crossContinent":false
    },
    {
      "source":53,
      "target":56,
      "nodes":[
        "Ivory Coast",
        "Nigeria"
      ],
      "crossContinent":false
    },
    {
      "source":54,
      "target":59,
      "nodes":[
        "Kenya",
        "Somalia"
      ],
      "crossContinent":false
    },
    {
      "source":54,
      "target":57,
      "nodes":[
        "Kenya",
        "SE Africa"
      ],
      "crossContinent":false
    },
    {
      "source":55,
      "target":63,
      "nodes":[
        "Morocco",
        "West Africa"
      ],
      "crossContinent":false
    },
    {
      "source":56,
      "target":58,
      "nodes":[
        "Nigeria",
        "Saharan States"
      ],
      "crossContinent":false
    },
    {
      "source":57,
      "target":65,
      "nodes":[
        "SE Africa",
        "Zimbabwe"
      ],
      "crossContinent":false
    },
    {
      "source":64,
      "target":65,
      "nodes":[
        "Zaire",
        "Zimbabwe"
      ],
      "crossContinent":false
    },
    {
      "source":66,
      "target":72,
      "nodes":[
        "Costa Rica",
        "Honduras"
      ],
      "crossContinent":false
    },
    {
      "source":66,
      "target":74,
      "nodes":[
        "Costa Rica",
        "Nicaragua"
      ],
      "crossContinent":false
    },
    {
      "source":66,
      "target":75,
      "nodes":[
        "Costa Rica",
        "Panama"
      ],
      "crossContinent":false
    },
    {
      "source":67,
      "target":71,
      "nodes":[
        "Cuba",
        "Haiti"
      ],
      "crossContinent":false
    },
    {
      "source":67,
      "target":74,
      "nodes":[
        "Cuba",
        "Nicaragua"
      ],
      "crossContinent":false
    },
    {
      "source":68,
      "target":71,
      "nodes":[
        "Dominican Rep",
        "Haiti"
      ],
      "crossContinent":false
    },
    {
      "source":69,
      "target":72,
      "nodes":[
        "El Salvador",
        "Honduras"
      ],
      "crossContinent":false
    },
    {
      "source":69,
      "target":70,
      "nodes":[
        "El Salvador",
        "Guatemala"
      ],
      "crossContinent":false
    },
    {
      "source":70,
      "target":72,
      "nodes":[
        "Guatemala",
        "Honduras"
      ],
      "crossContinent":false
    },
    {
      "source":70,
      "target":73,
      "nodes":[
        "Guatemala",
        "Mexico"
      ],
      "crossContinent":false
    },
    {
      "source":72,
      "target":74,
      "nodes":[
        "Honduras",
        "Nicaragua"
      ],
      "crossContinent":false
    },
    {
      "source":75,
      "target":80,
      "nodes":[
        "Panama",
        "Columbia"
      ],
      "crossContinent":true
    },
    {
      "source":76,
      "target":79,
      "nodes":[
        "Argentina",
        "Chile"
      ],
      "crossContinent":false
    },
    {
      "source":76,
      "target":82,
      "nodes":[
        "Argentina",
        "Paraguay"
      ],
      "crossContinent":false
    },
    {
      "source":76,
      "target":84,
      "nodes":[
        "Argentina",
        "Uruguay"
      ],
      "crossContinent":false
    },
    {
      "source":77,
      "target":82,
      "nodes":[
        "Bolivia",
        "Paraguay"
      ],
      "crossContinent":false
    },
    {
      "source":77,
      "target":83,
      "nodes":[
        "Bolivia",
        "Peru"
      ],
      "crossContinent":false
    },
    {
      "source":78,
      "target":84,
      "nodes":[
        "Brazil",
        "Uruguay"
      ],
      "crossContinent":false
    },
    {
      "source":78,
      "target":85,
      "nodes":[
        "Brazil",
        "Venezuela"
      ],
      "crossContinent":false
    },
    {
      "source":79,
      "target":83,
      "nodes":[
        "Chile",
        "Peru"
      ],
      "crossContinent":false
    },
    {
      "source":80,
      "target":81,
      "nodes":[
        "Columbia",
        "Ecuador"
      ],
      "crossContinent":false
    },
    {
      "source":80,
      "target":85,
      "nodes":[
        "Columbia",
        "Venezuela"
      ],
      "crossContinent":false
    },
    {
      "source":81,
      "target":83,
      "nodes":[
        "Ecuador",
        "Peru"
      ],
      "crossContinent":false
    },
    {
      "source":82,
      "target":84,
      "nodes":[
        "Paraguay",
        "Uruguay"
      ],
      "crossContinent":false
    }
  ]
}

},{}],3:[function(require,module,exports){
module.exports=[  {    "id":1,    "title":"Asia Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: 9; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/14/regions-asia/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":2,    "title":"Europe Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: Automatic Victory; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/12/regions-europe/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":3,    "title":"Middle East Scoring",    "ops":0,    "text":"Presence: 3; Domination: 5; Control: 7; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/02/13/regions-middle-east/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":4,    "title":"Duck and Cover",    "ops":3,    "text":"Degrade the DEFCON level by 1. The US receives VP equal to 5 minus the current DEFCON level.",    "url":"http://twilightstrategy.com/2011/12/12/duck-and-cover/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":5,    "title":"Five Year Plan",    "ops":3,    "text":"The USSR must randomly discard a card. If the card has a US associated Event, the Event occurs immediately. If the card has a USSR associated Event or an Event applicable to both players, then the card must be discarded without triggering the Event.",    "url":"http://twilightstrategy.com/2011/12/12/five-year-plan/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":6,    "title":"The China Card",    "ops":4,    "text":"This card begins the game with the USSR. When played, the player receives +1 Operations to the Operations value of this card if it uses all its Operations in Asia. It is passed to the opponent once played. A player receives 1 VP for holding this card at the end of Turn 10.",    "url":"http://twilightstrategy.com/2012/10/31/the-china-card/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1,    "cancels": 35  },  {    "id":7,    "title":"Socialist Governments",    "ops":3,    "text":"Remove a total of 3 US Influence from any countries in Western Europe (removing no more than 2 Influence per country). This Event cannot be used after the “#83 – The Iron Lady” Event has been played.",    "url":"http://twilightstrategy.com/2011/12/13/socialist-governments/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1,    "antireq": 83  },  {    "id":8,    "title":"Fidel*",    "ops":2,    "text":"Remove all US Influence from Cuba. USSR adds sufficient Influence in Cuba for Control.",    "url":"http://twilightstrategy.com/2011/12/14/fidel/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":9,    "title":"Vietnam Revolts*",    "ops":2,    "text":"Add 2 USSR Influence to Vietnam. For the remainder of the turn, the USSR receives +1 Operations to the Operations value of a card that uses all its Operations in Southeast Asia.",    "url":"http://twilightstrategy.com/2011/12/16/vietnam-revolts/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":10,    "title":"Blockade*",    "ops":1,    "text":"Unless the US immediately discards a card with an Operations value of 3 or more, remove all US Influence from West Germany.",    "url":"http://twilightstrategy.com/2011/12/19/blockade/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":11,    "title":"Korean War*",    "ops":2,    "text":"North Korea invades South Korea. Roll a die and subtract (-1) from the die roll for every US controlled country adjacent to South Korea. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in South Korea with USSR Influence. The USSR adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2011/12/25/korean-war/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":12,    "title":"Romanian Abdication*",    "ops":1,    "text":"Remove all US Influence from Romania. The USSR adds sufficient Influence to Romania for Control.",    "url":"http://twilightstrategy.com/2012/01/02/romanian-abdication/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":13,    "title":"Arab-Israeli War",    "ops":2,    "text":"Pan-Arab Coalition invades Israel. Roll a die and subtract (-1) from the die roll for Israel, if it is US controlled, and for every US controlled country adjacent to Israel. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in Israel with USSR Influence. The USSR adds 2 to its Military Operations Track. This Event cannot be used after the “#65 – Camp David Accords” Event has been played.",    "url":"http://twilightstrategy.com/2012/01/16/arab-israeli-war/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":14,    "title":"Comecon*",    "ops":3,    "text":"Add 1 USSR Influence to each of 4 non-US controlled countries of Eastern Europe.",    "url":"http://twilightstrategy.com/2012/01/24/comecon/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":15,    "title":"Nasser*",    "ops":1,    "text":"Add 2 USSR Influence to Egypt. The US removes half, rounded up, of its Influence from Egypt.",    "url":"http://twilightstrategy.com/2012/02/06/nasser/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":16,    "title":"Warsaw Pact Formed*",    "ops":3,    "text":"Remove all US influence from 4 countries in Eastern Europe or add 5 USSR Influence to any countries in Eastern Europe (adding no more than 2 Influence per country). This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":1,    "allows": 21  },  {    "id":17,    "title":"De Gaulle Leads France*",    "ops":3,    "text":"Remove 2 US Influence from France and add 1 USSR Influence to France. This Event cancels the effect(s) of the “#21 – NATO” Event for France only.",    "url":"http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":1,    "affects": 21  },  {    "id":18,    "title":"Captured Nazi Scientist*",    "ops":1,    "text":"Move the Space Race Marker ahead by 1 space.",    "url":"http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":19,    "title":"Truman Doctrine*",    "ops":1,    "text":"Remove all USSR Influence from a single uncontrolled country in Europe.",    "url":"http://twilightstrategy.com/2012/03/02/truman-doctrine/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":20,    "title":"Olympic Games",    "ops":2,    "text":"This player sponsors the Olympics. The opponent must either participate or boycott. If the opponent participates, each player rolls a die and the sponsor adds 2 to their roll. The player with the highest modified die roll receives 2 VP (reroll ties). If the opponent boycotts, degrade the DEFCON level by 1 and the sponsor may conduct Operations as if they played a 4 Ops card.",    "url":"http://twilightstrategy.com/2012/03/12/olympic-games/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":21,    "title":"NATO*",    "ops":4,    "text":"The USSR cannot make Coup Attempts or Realignment rolls against any US controlled countries in Europe. US controlled countries in Europe cannot be attacked by play of the “#36 – Brush War” Event. This card requires prior play of either the “#16 – Warsaw Pact Formed” or “#23 – Marshall Plan” Event(s) in order to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/12/nato/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "prereq":[16,23],    "affects":36  },  {    "id":22,    "title":"Independent Reds*",    "ops":2,    "text":"Add US Influence to either Yugoslavia, Romania, Bulgaria, Hungary, or Czechoslovakia so that it equals the USSR Influence in that country.",    "url":"http://twilightstrategy.com/2012/03/13/independent-reds/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":23,    "title":"Marshall Plan*",    "ops":4,    "text":"Add 1 US Influence to each of any 7 non-USSR controlled countries in Western Europe. This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/16/marshall-plan/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "allows":21  },  {    "id":24,    "title":"Indo-Pakistani War",    "ops":2,    "text":"India invades Pakistan or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (India or Pakistan). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/03/19/indo-pakistani-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":25,    "title":"Containment*",    "ops":3,    "text":"All Operations cards played by the US, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/03/20/containment/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":26,    "title":"CIA Created*",    "ops":1,    "text":"The USSR reveals their hand of cards for this turn. The US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/03/26/cia-created/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":27,    "title":"US/Japan Mutual Defense Pact*",    "ops":4,    "text":"The US adds sufficient Influence to Japan for Control. The USSR cannot make Coup Attempts or Realignment rolls against Japan.",    "url":"http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":28,    "title":"Suez Crisis*",    "ops":3,    "text":"Remove a total of 4 US Influence from France, the United Kingdom and Israel (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/03/29/suez-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":29,    "title":"East European Unrest",    "ops":3,    "text":"Early or Mid War: Remove 1 USSR Influence from 3 countries in Eastern Europe. Late War: Remove 2 USSR Influence from 3 countries in Eastern Europe.",    "url":"http://twilightstrategy.com/2012/04/02/east-european-unrest/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":30,    "title":"Decolonization",    "ops":2,    "text":"Add 1 USSR Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/04/05/decolonization/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":31,    "title":"Red Scare/Purge",    "ops":4,    "text":"All Operations cards played by the opponent, for the remainder of this turn, receive -1 to their Operations value (to a minimum value of 1 Operations point).",    "url":"http://twilightstrategy.com/2012/04/23/red-scarepurge/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":32,    "title":"UN Intervention",    "ops":1,    "text":"Play this card simultaneously with a card containing an opponent’s associated Event. The opponent’s associated Event is canceled but you may use the Operations value of the opponent’s card to conduct Operations. This Event cannot be played during the Headline Phase.",    "url":"http://twilightstrategy.com/2012/05/07/un-intervention/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":33,    "title":"De-Stalinization*",    "ops":3,    "text":"The USSR may reallocate up to a total of 4 Influence from one or more countries to any non-US controlled countries (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/05/29/de-stalinization/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":34,    "title":"Nuclear Test Ban",    "ops":4,    "text":"The player receives VP equal to the current DEFCON level minus 2 then improves the DEFCON level by 2.",    "url":"http://twilightstrategy.com/2012/06/11/nuclear-test-ban/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":35,    "title":"Formosan Resolution*",    "ops":2,    "text":"If this card’s Event is in effect, Taiwan will be treated as a Battleground country, for scoring purposes only, if Taiwan is US controlled when the Asia Scoring Card is played. This Event is cancelled after the US has played the “#6 – The China Card” card.",    "url":"http://twilightstrategy.com/2012/07/02/formosan-resolution/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":36,    "title":"Brush War",    "ops":3,    "text":"The player attacks any country with a stability number of 1 or 2. Roll a die and subtract (-1) from the die roll for every adjacent enemy controlled country. On a modified die roll of 3-6, the player receives 1 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 3 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/04/brush-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2,    "affects": 59  },  {    "id":37,    "title":"Central America Scoring",    "ops":0,    "text":"Presence: 1; Domination: 3; Control: 5; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-central-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":38,    "title":"Southeast Asia Scoring*",    "ops":0,    "text":"1 VP each for Control of Burma, Cambodia/Laos, Vietnam, Malaysia, Indonesia and the Philippines. 2 VP for Control of Thailand; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-southeast-asia/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":39,    "title":"Arms Race",    "ops":3,    "text":"Compare each player’s value on the Military Operations Track. If the phasing player has a higher value than their opponent on the Military Operations Track, that player receives 1 VP. If the phasing player has a higher value than their opponent, and has met the “required” amount, on the Military Operations Track, that player receives 3 VP instead.",    "url":"http://twilightstrategy.com/2012/09/05/arms-race/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":40,    "title":"Cuban Missile Crisis*",    "ops":3,    "text":"Set the DEFCON level to 2. Any Coup Attempts by your opponent, for the remainder of this turn, will result in Global Thermonuclear War. Your opponent will lose the game. This card’s Event may be canceled, at any time, if the USSR removes 2 Influence from Cuba or the US removes 2 Influence from West Germany or Turkey.",    "url":"http://twilightstrategy.com/2012/09/06/cuban-missile-crisis/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":41,    "title":"Nuclear Subs*",    "ops":2,    "text":"US Operations used for Coup Attempts in Battleground countries, for the remainder of this turn, do not degrade the DEFCON level. This card’s Event does not apply to any Event that would affect the DEFCON level (ex. the “#40 – Cuban Missile Crisis” Event).",    "url":"http://twilightstrategy.com/2012/09/10/nuclear-subs/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":42,    "title":"Quagmire*",    "ops":3,    "text":"On the US’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each US action round until the US successfully rolls 1-4 on a die. If the US is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn. This Event cancels the effect(s) of the “#106 – NORAD” Event (if applicable).",    "url":"http://twilightstrategy.com/2012/09/12/quagmire/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":43,    "title":"SALT Negotiations*",    "ops":3,    "text":"Improve the DEFCON level by 2. For the remainder of the turn, both players receive -1 to all Coup Attempt rolls. The player of this card’s Event may look through the discard pile, pick any 1 non-scoring card, reveal it to their opponent and then place the drawn card into their hand.",    "url":"http://twilightstrategy.com/2012/09/17/salt-negotiations/",    "owner":"neutral",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":44,    "title":"Bear Trap*",    "ops":3,    "text":"On the USSR’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each USSR action round until the USSR successfully rolls 1-4 on a die. If the USSR is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn.",    "url":"http://twilightstrategy.com/2012/09/19/bear-trap/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":45,    "title":"Summit",    "ops":1,    "text":"Both players roll a die. Each player receives +1 to the die roll for each Region (Europe, Asia, etc.) they Dominate or Control. The player with the highest modified die roll receives 2 VP and may degrade or improve the DEFCON level by 1 (do not reroll ties).",    "url":"http://twilightstrategy.com/2012/09/24/summit/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":46,    "title":"How I Learned to Stop Worrying*",    "ops":2,    "text":"Set the DEFCON level to any level desired (1-5). The player adds 5 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/26/how-i-learned-to-stop-worrying/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":47,    "title":"Junta",    "ops":2,    "text":"Add 2 Influence to a single country in Central or South America. The player may make free Coup Attempts or Realignment rolls in either Central or South America using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/01/junta/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":48,    "title":"Kitchen Debates*",    "ops":1,    "text":"If the US controls more Battleground countries than the USSR, the US player uses this Event to poke their opponent in the chest and receive 2 VP!",    "url":"http://twilightstrategy.com/2012/10/03/kitchen-debates/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":49,    "title":"Missile Envy",    "ops":2,    "text":"Exchange this card for your opponent’s highest value Operations card. If 2 or more cards are tied, opponent chooses. If the exchanged card contains an Event applicable to yourself or both players, it occurs immediately. If it contains an opponent’s Event, use the Operations value (no Event). The opponent must use this card for Operations during their next action round.",    "url":"http://twilightstrategy.com/2012/10/08/missile-envy/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":50,    "title":"We Will Bury You*",    "ops":4,    "text":"Degrade the DEFCON level by 1. Unless the #32 UN Intervention card is played as an Event on the US’s next action round, the USSR receives 3 VP.",    "url":"http://twilightstrategy.com/2012/10/10/we-will-bury-you/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":51,    "title":"Brezhnev Doctrine*",    "ops":3,    "text":"All Operations cards played by the USSR, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/10/12/brezhnev-doctrine/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":52,    "title":"Portuguese Empire Crumbles*",    "ops":2,    "text":"Add 2 USSR Influence to Angola and the SE African States.",    "url":"http://twilightstrategy.com/2012/10/15/portuguese-empire-crumbles/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":53,    "title":"South African Unrest",    "ops":2,    "text":"The USSR either adds 2 Influence to South Africa or adds 1 Influence to South Africa and 2 Influence to a single country adjacent to South Africa.",    "url":"http://twilightstrategy.com/2012/10/16/south-african-unrest/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":54,    "title":"Allende*",    "ops":1,    "text":"Add 2 USSR Influence to Chile.",    "url":"http://twilightstrategy.com/2012/10/17/allende/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":55,    "title":"Willy Brandt*",    "ops":2,    "text":"The USSR receives 1 VP and adds 1 Influence to West Germany. This Event cancels the effect(s) of the “#21 – NATO” Event for West Germany only. This Event is prevented / canceled by the “#96 – Tear Down this Wall” Event.",    "url":"http://twilightstrategy.com/2012/10/18/willy-brandt/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2,    "antireq":96,    "affects":21  },  {    "id":56,    "title":"Muslim Revolution",    "ops":4,    "text":"Remove all US Influence from 2 of the following countries: Sudan, Iran, Iraq, Egypt, Libya, Saudi Arabia, Syria, Jordan. This Event cannot be used after the “#110 – AWACS Sale to Saudis” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/19/muslim-revolution/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":57,    "title":"ABM Treaty",    "ops":4,    "text":"Improve the DEFCON level by 1 and then conduct Operations using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/23/abm-treaty/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":58,    "title":"Cultural Revolution*",    "ops":3,    "text":"If the US has the “#6 – The China Card” card, the US must give the card to the USSR (face up and available to be played). If the USSR already has “#6 – The China Card” card, the USSR receives 1 VP.",    "url":"http://twilightstrategy.com/2012/10/24/cultural-revolution/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":59,    "title":"Flower Power*",    "ops":4,    "text":"The USSR receives 2 VP for every US played “War” card (Arab-Israeli War, Korean War, Brush War, Indo-Pakistani War, Iran-Iraq War), used for Operations or an Event, after this card is played. This Event is prevented / canceled by the “#97 – An Evil Empire” Event.",    "url":"http://twilightstrategy.com/2012/10/25/flower-power/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2,    "antireq":97  },  {    "id":60,    "title":"U2 Incident*",    "ops":3,    "text":"The USSR receives 1 VP. If the “#32 – UN Intervention” Event is played later this turn, either by the US or the USSR, the USSR receives an additional 1 VP.",    "url":"http://twilightstrategy.com/2012/10/26/u-2-incident/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2,    "related":32  },  {    "id":61,    "title":"OPEC",    "ops":3,    "text":"The USSR receives 1 VP for Control of each of the following countries: Egypt, Iran, Libya, Saudi Arabia, Iraq, Gulf States, Venezuela. This Event cannot be used after the “#86 – North Sea Oil” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/29/opec/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2,    "antireq":86  },  {    "id":62,    "title":"Lone Gunman*",    "ops":1,    "text":"The US reveals their hand of cards. The USSR may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/10/30/lone-gunman/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":63,    "title":"Colonial Rear Guards",    "ops":2,    "text":"Add 1 US Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/11/01/colonial-rear-guards/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":64,    "title":"Panama Canal Returned*",    "ops":1,    "text":"Add 1 US Influence to Panama, Costa Rica and Venezuela.",    "url":"http://twilightstrategy.com/2012/11/02/panama-canal-returned/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":65,    "title":"Camp David Accords*",    "ops":2,    "text":"The US receives 1 VP and adds 1 Influence to Israel, Jordan and Egypt. This Event prevents the “#13 – Arab-Israeli War” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/11/05/camp-david-accords/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":66,    "title":"Puppet Governments*",    "ops":2,    "text":"The US may add 1 Influence to 3 countries that do not contain Influence from either the US or USSR.",    "url":"http://twilightstrategy.com/2012/11/06/puppet-governments/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":67,    "title":"Grain Sales to Soviets",    "ops":2,    "text":"The US randomly selects 1 card from the USSR’s hand (if available). The US must either play the card or return it to the USSR. If the card is returned, or the USSR has no cards, the US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/11/07/grain-sales-to-soviets/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":68,    "title":"John Paul II Elected Pope*",    "ops":2,    "text":"Remove 2 USSR Influence from Poland and add 1 US Influence to Poland. This Event allows the “#101 – Solidarity” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/11/08/john-paul-ii-elected-pope/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":69,    "title":"Latin American Death Squads",    "ops":2,    "text":"All of the phasing player’s Coup Attempts in Central and South America, for the remainder of this turn, receive +1 to their die roll. All of the opponent’s Coup Attempts in Central and South America, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/11/09/latin-american-death-squads/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":70,    "title":"OAS Founded*",    "ops":1,    "text":"Add a total of 2 US Influence to any countries in Central or South America.",    "url":"http://twilightstrategy.com/2012/11/12/oas-founded/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":71,    "title":"Nixon Plays the China Card*",    "ops":2,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face down and unavailable for immediate play). If the US already has the “#6 – The China Card” card, the US receives 2 VP.",    "url":"http://twilightstrategy.com/2012/11/13/nixon-plays-the-china-card/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":72,    "title":"Sadat Expels Soviets*",    "ops":1,    "text":"Remove all USSR Influence from Egypt and add 1 US Influence to Egypt.",    "url":"http://twilightstrategy.com/2012/11/14/sadat-expels-soviets/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":73,    "title":"Shuttle Diplomacy",    "ops":3,    "text":"If this card’s Event is in effect, subtract (-1) a Battleground country from the USSR total and then discard this card during the next scoring of the Middle East or Asia (which ever comes first).",    "url":"http://twilightstrategy.com/2012/11/15/shuttle-diplomacy/",    "owner":"us",    "removed":false,    "ongoing":true,    "stage":2  },  {    "id":74,    "title":"The Voice of America",    "ops":2,    "text":"Remove 4 USSR Influence from any countries NOT in Europe (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/16/the-voice-of-america/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":75,    "title":"Liberation Theology",    "ops":2,    "text":"Add a total of 3 USSR Influence to any countries in Central America (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/19/liberation-theology/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":76,    "title":"Ussuri River Skirmish*",    "ops":3,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face up and available for play). If the US already has the “#6 – The China Card” card, add a total of 4 US Influence to any countries in Asia (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/20/ussuri-river-skirmish/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":77,    "title":"Ask Not What Your Country…*",    "ops":3,    "text":"The US may discard up to their entire hand of cards (including scoring cards) to the discard pile and draw replacements from the draw pile. The number of cards to be discarded must be decided before drawing any replacement cards from the draw pile.",    "url":"http://twilightstrategy.com/2012/11/21/ask-not-what-your-country-can-do-for-you/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":78,    "title":"Alliance for Progress*",    "ops":3,    "text":"The US receives 1 VP for each US controlled Battleground country in Central and South America.",    "url":"http://twilightstrategy.com/2012/11/23/alliance-for-progress/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":79,    "title":"Africa Scoring",    "ops":0,    "text":"Presence: 1; Domination: 4; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/04/11/regions-africa/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":80,    "title":"One Small Step…",    "ops":2,    "text":"If you are behind on the Space Race Track, the player uses this Event to move their marker 2 spaces forward on the Space Race Track. The player receives VP only from the final space moved into.",    "url":"http://twilightstrategy.com/2012/11/26/one-small-step/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":81,    "title":"South America Scoring",    "ops":0,    "text":"Presence: 2; Domination: 5; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/08/15/regions-south-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":82,    "title":"Iranian Hostage Crisis*",    "ops":3,    "text":"Remove all US Influence and add 2 USSR Influence to Iran. This card’s Event requires the US to discard 2 cards, instead of 1 card, if the “#92 – Terrorism” Event is played.",    "url":"http://twilightstrategy.com/2012/11/30/iranian-hostage-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3,    "affects":92  },  {    "id":83,    "title":"The Iron Lady*",    "ops":3,    "text":"Add 1 USSR Influence to Argentina and remove all USSR Influence from the United Kingdom. The US receives 1 VP. This Event prevents the “#7 – Socialist Governments” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/03/the-iron-lady/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":83  },  {    "id":84,    "title":"Reagan Bombs Libya*",    "ops":2,    "text":"The US receives 1 VP for every 2 USSR Influence in Libya.",    "url":"http://twilightstrategy.com/2012/12/04/reagan-bombs-libya/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":85,    "title":"Star Wars*",    "ops":2,    "text":"If the US is ahead on the Space Race Track, the US player uses this Event to look through the discard pile, pick any 1 non-scoring card and play it immediately as an Event.",    "url":"http://twilightstrategy.com/2012/12/05/star-wars/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":86,    "title":"North Sea Oil*",    "ops":3,    "text":"The US may play 8 cards (in 8 action rounds) for this turn only. This Event prevents the “#61 – OPEC” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/06/north-sea-oil/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":61  },  {    "id":87,    "title":"The Reformer*",    "ops":3,    "text":"Add 4 USSR Influence to Europe (adding no more than 2 Influence per country). If the USSR is ahead of the US in VP, 6 Influence may be added to Europe instead. The USSR may no longer make Coup Attempts in Europe.",    "url":"http://twilightstrategy.com/2012/12/07/the-reformer/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3,    "affects":90  },  {    "id":88,    "title":"Marine Barracks Bombing*",    "ops":2,    "text":"Remove all US Influence in Lebanon and remove a total of 2 US Influence from any countries in the Middle East.",    "url":"http://twilightstrategy.com/2012/12/10/marine-barracks-bombing/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":89,    "title":"Soviets Shoot Down KAL-007*",    "ops":4,    "text":"Degrade the DEFCON level by 1 and the US receives 2 VP. The US may place influence or make Realignment rolls, using this card, if South Korea is US controlled.",    "url":"http://twilightstrategy.com/2012/12/11/soviets-shoot-down-kal-007/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":90,    "title":"Glasnost*",    "ops":4,    "text":"Improve the DEFCON level by 1 and the USSR receives 2 VP. The USSR may make Realignment rolls or add Influence, using this card, if the “#87 – The Reformer” Event has already been played.",    "url":"http://twilightstrategy.com/2012/12/12/glasnost/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":91,    "title":"Ortega Elected in Nicaragua*",    "ops":2,    "text":"Remove all US Influence from Nicaragua. The USSR may make a free Coup Attempt, using this card’s Operations value, in a country adjacent to Nicaragua.",    "url":"http://twilightstrategy.com/2012/12/13/ortega-elected-in-nicaragua/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":92,    "title":"Terrorism",    "ops":2,    "text":"The player’s opponent must randomly discard 1 card from their hand. If the “#82 – Iranian Hostage Crisis” Event has already been played, a US player (if applicable) must randomly discard 2 cards from their hand.",    "url":"http://twilightstrategy.com/2012/12/14/terrorism/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":93,    "title":"Iran-Contra Scandal*",    "ops":2,    "text":"All US Realignment rolls, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/12/17/iran-contra-scandal/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":94,    "title":"Chernobyl*",    "ops":3,    "text":"The US must designate a single Region (Europe, Asia, etc.) that, for the remainder of the turn, the USSR cannot add Influence to using Operations points.",    "url":"http://twilightstrategy.com/2012/12/18/chernobyl/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":95,    "title":"Latin American Debt Crisis",    "ops":2,    "text":"The US must immediately discard a card with an Operations value of 3 or more or the USSR may double the amount of USSR Influence in 2 countries in South America.",    "url":"http://twilightstrategy.com/2012/12/19/latin-american-debt-crisis/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":96,    "title":"Tear Down this Wall*",    "ops":3,    "text":"Add 3 US Influence to East Germany. The US may make free Coup Attempts or Realignment rolls in Europe using the Operations value of this card. This Event prevents / cancels the effect(s) of the “#55 – Willy Brandt” Event.",    "url":"http://twilightstrategy.com/2012/12/20/tear-down-this-wall/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":55  },  {    "id":97,    "title":"An Evil Empire*",    "ops":3,    "text":"The US receives 1 VP. This Event prevents / cancels the effect(s) of the “#59 – Flower Power” Event.",    "url":"http://twilightstrategy.com/2012/12/21/an-evil-empire/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":59  },  {    "id":98,    "title":"Aldrich Ames Remix*",    "ops":3,    "text":"The US reveals their hand of cards, face-up, for the remainder of the turn and the USSR discards a card from the US hand.",    "url":"http://twilightstrategy.com/2013/01/03/aldrich-ames-remix/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":99,    "title":"Pershing II Deployed*",    "ops":3,    "text":"The USSR receives 1 VP. Remove 1 US Influence from any 3 countries in Western Europe.",    "url":"http://twilightstrategy.com/2013/01/04/pershing-ii-deployed/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":100,    "title":"Wargames*",    "ops":4,    "text":"If the DEFCON level is 2, the player may immediately end the game after giving their opponent 6 VP. How about a nice game of chess?",    "url":"http://twilightstrategy.com/2013/01/07/wargames/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":101,    "title":"Solidarity*",    "ops":2,    "text":"Add 3 US Influence to Poland. This card requires prior play of the “#68 – John Paul II Elected Pope” Event in order to be played as an Event.",    "url":"http://twilightstrategy.com/2013/01/08/solidarity/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3,    "prereq":68  },  {    "id":102,    "title":"Iran-Iraq War*",    "ops":2,    "text":"Iran invades Iraq or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (Iran or Iraq). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2013/01/09/iran-iraq-war/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3,    "affects": 59  },  {    "id":103,    "title":"Defectors",    "ops":3,    "text":"The US may play this card during the Headline Phase in order to cancel the USSR Headline Event (including a scoring card). The canceled card is placed into the discard pile. If this card is played by the USSR during its action round, the US gains 1 VP.",    "url":"http://twilightstrategy.com/2012/07/09/defectors/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":104,    "title":"The Cambridge Five",    "ops":2,    "text":"The US reveals all scoring cards in their hand of cards. The USSR player may add 1 USSR Influence to a single Region named on one of the revealed scoring cards. This card can not be played as an Event during the Late War.",    "url":"http://twilightstrategy.com/2012/07/11/the-cambridge-five/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":105,    "title":"Special Relationship",    "ops":2,    "text":"Add 1 US Influence to a single country adjacent to the U.K. if the U.K. is US-controlled but NATO is not in effect. Add 2 US Influence to a single country in Western Europe, and the US gains 2 VP, if the U.K. is US-controlled and NATO is in effect.",    "url":"http://twilightstrategy.com/2012/07/18/special-relationship/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":106,    "title":"NORAD*",    "ops":3,    "text":"Add 1 US Influence to a single country containing US Influence, at the end of each Action Round, if Canada is US-controlled and the DEFCON level moved to 2 during that Action Round. This Event is canceled by the “#42 – Quagmire” Event.",    "url":"http://twilightstrategy.com/2012/07/25/norad/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "antireq": 42  },  {    "id":107,    "title":"Che",    "ops":3,    "text":"The USSR may perform a Coup Attempt, using this card’s Operations value, against a non-Battleground country in Central America, South America or Africa. The USSR may perform a second Coup Attempt, against a different non-Battleground country in Central America, South America or Africa, if the first Coup Attempt removed any US Influence from the target country.",    "url":"http://twilightstrategy.com/2012/11/27/che/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":108,    "title":"Our Man in Tehran*",    "ops":2,    "text":"If the US controls at least one Middle East country, the US player uses this Event to draw the top 5 cards from the draw pile. The US may discard any or all of the drawn cards, after revealing the discarded card(s) to the USSR player, without triggering the Event(s). Any remaining drawn cards are returned to the draw pile and the draw pile is reshuffled.",    "url":"http://twilightstrategy.com/2012/11/28/our-man-in-tehran/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":109,    "title":"Yuri and Samantha*",    "ops":2,    "text":"The USSR receives 1 VP for each US Coup Attempt performed during the remainder of the Turn.",    "url":"http://twilightstrategy.com/2013/01/10/yuri-and-samantha/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":110,    "title":"AWACS Sale to Saudis*",    "ops":3,    "text":"Add 2 US Influence to Saudi Arabia. This Event prevents the “#56 – Muslim Revolution” card from being played as an Event.",    "url":"http://twilightstrategy.com/2013/01/14/awacs-sale-to-saudis/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  }]
},{}],4:[function(require,module,exports){
var $, R, RCTG, TwiStrug, addReactKey, cardsData, cx, pages, router, update, vent, views;

R = React.DOM;

RCTG = React.addons.CSSTransitionGroup;

update = React.addons.update;

cx = React.addons.classSet;

$ = Zepto;

vent = require('./vent');

cardsData = require('../lib/cards.json');

$.getScript = function(src, func) {
  var script;
  script = document.createElement('script');
  script.async = "async";
  script.src = src;
  if (func) {
    script.onload = func;
  }
  return document.getElementsByTagName("head")[0].appendChild(script);
};

pages = require('./pages');

views = require('./views');

router = require('./router');

TwiStrug = React.createClass({
  mixins: [router],
  getInitialState: function() {
    return {
      menuActive: null,
      view: {},
      slideIn: true
    };
  },
  componentWillMount: function() {
    return $('#placeholder').hide();
  },
  componentDidMount: function() {
    return vent.on('boardStateChange', (function(_this) {
      return function(gameId, stateEnc) {
        return window.history.replaceState(null, "" + _this.state.view.name + " " + gameId, "#/" + _this.state.view.name + "/" + gameId + "/" + stateEnc);
      };
    })(this));
  },
  componentWillUpdate: function() {
    var $slideIn;
    $slideIn = $(this.refs.slideIn.getDOMNode());
    return $slideIn.removeClass('slideIn-in');
  },
  componentDidUpdate: function() {
    return this.slideIn();
  },
  slideIn: function() {
    var $slideIn;
    if (!this.state.slideIn) {
      return;
    }
    $slideIn = $(this.refs.slideIn.getDOMNode());
    return setTimeout(function() {
      return $slideIn.addClass('slideIn-in');
    }, 10);
  },
  render: function() {
    var mainView, mainViewClass, _ref, _ref1;
    if (!((_ref = this.state) != null ? _ref.view : void 0)) {
      mainView = R.p({
        className: 'lead'
      }, 'TwiStrug is loading...');
    } else {
      mainView = (function() {
        switch (this.state.view.name) {
          case 'home':
            return pages.Home({
              cards: this.props.cards,
              state: this.state.view.data.state
            });
          case 'card':
            return pages.Card(this.state.view.data);
          case 'cards':
            return pages.Cards({
              cards: this.props.cards,
              state: this.state.view.data.state
            });
          case 'countries':
            return pages.Countries();
          case 'board':
            return pages.Board(this.state.view.data);
          case 'game':
            return pages.Game(this.state.view.data);
          case 'about':
            return pages.About();
          case 'whoops':
            return pages.Whoops();
        }
      }).call(this);
    }
    mainViewClass = cx({
      'container': (_ref1 = this.state.view.name) !== 'board' && _ref1 !== 'game',
      'slideIn': this.state.slideIn
    });
    return R.div({}, [
      views.Nav({
        key: 'nav',
        active: this.state.menuActive
      }), R.div({
        key: 'mainview',
        ref: 'slideIn',
        className: mainViewClass
      }, mainView), views.Footer({
        key: 'footer'
      })
    ]);
  }
});

addReactKey = function(el) {
  el.key = "rk-" + el.id;
  return el;
};

React.renderComponent(TwiStrug({
  cards: cardsData.map(addReactKey)
}), document.getElementById('app'));


},{"../lib/cards.json":3,"./pages":43,"./router":44,"./vent":45,"./views":62}],5:[function(require,module,exports){
var BoardStateHistory, StateHistory, stateEncoder, superpowerToIndex,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

StateHistory = require('./StateHistory');

superpowerToIndex = require('./superpowerToIndex');

stateEncoder = require('./stateEncoder');

module.exports = BoardStateHistory = (function(_super) {
  __extends(BoardStateHistory, _super);

  function BoardStateHistory() {
    return BoardStateHistory.__super__.constructor.apply(this, arguments);
  }

  BoardStateHistory.prototype.encodeState = function(state) {
    var encoded;
    encoded = stateEncoder.encode(state);
    return encoded;
  };

  BoardStateHistory.prototype.decodeState = function(state) {
    var decoded;
    decoded = stateEncoder.decode(state);
    return decoded;
  };

  BoardStateHistory.prototype.add = function(state, meta) {
    var cm, cs, cur, idSame, nm, ns, sideSame, typeIpSame, typeValSame, usa, ussr;
    cur = this.getCurrent();
    if (cur == null) {
      return BoardStateHistory.__super__.add.call(this, state, meta);
    }
    nm = _.cloneDeep(meta);
    ns = _.cloneDeep(state);
    cm = cur.meta;
    cs = cur.state;
    if (meta.type === 'ip') {
      usa = nm.side === 'usa' ? nm.delta : 0;
      ussr = nm.side === 'ussr' ? nm.delta : 0;
      nm.delta = [usa, ussr];
    }
    if (nm.type === cm.type && ns.game.round === cs.game.round) {
      sideSame = nm.id === 'score' ? true : nm.side === cm.side;
      idSame = nm.id === cm.id;
      typeIpSame = nm.type === 'ip' && nm.country.id === cm.country.id;
      typeValSame = nm.type === 'val' && nm.id !== 'turn' && nm.id !== 'round' && sideSame && idSame;
      if (typeIpSame || typeValSame) {
        return this.mergeWithCurrent(ns, nm);
      }
    }
    return BoardStateHistory.__super__.add.call(this, ns, nm);
  };

  BoardStateHistory.prototype.mergeWithCurrent = function(state, meta) {
    var c, cm, nm, pop, _ref;
    c = _.cloneDeep(this.getCurrent());
    nm = _.cloneDeep(meta);
    cm = c.meta;
    switch (cm.type) {
      case 'ip':
        nm.delta[0] += cm.delta[0];
        nm.delta[1] += cm.delta[1];
        nm.side = 'both';
        if (nm.delta[0] === 0) {
          nm.side = 'ussr';
        }
        if (nm.delta[1] === 0) {
          nm.side = 'usa';
        }
        if ((nm.delta[0] === (_ref = nm.delta[1]) && _ref === 0)) {
          pop = true;
        }
        break;
      case 'val':
        nm.old = cm.old;
        if (nm.old === nm["new"]) {
          pop = true;
        }
    }
    if (this.latest !== this.current) {
      this.states = this.states.slice(0, this.current + 1);
      this.latest = this.current;
    }
    if (pop === true) {
      this.states.pop();
      this.current--;
      if (this.latest > this.current) {
        this.latest = this.current;
      }
    } else {
      this.states[this.current] = {
        meta: nm,
        state: this.encodeState(state)
      };
    }
    this.save();
    this.emit('merge', this.getCurrent());
    this.emit('update', this.getCurrent());
    return this.emit('change');
  };

  BoardStateHistory.prototype.encodeCurrent = function() {
    var cur, _ref;
    cur = this.getCurrent();
    if (cur == null) {
      return;
    }
    return stateEncoder.encode((_ref = this.getCurrent()) != null ? _ref.state : void 0);
  };

  BoardStateHistory.prototype.toggleVisible = function(force, showTemp) {
    if (showTemp == null) {
      showTemp = false;
    }
    clearTimeout(this.showThenHideTimeout);
    this.showTemp = showTemp;
    this.show = force != null ? force : !this.show;
    this.emit('toggleVisible', this.show);
    return this.emit('update');
  };

  BoardStateHistory.prototype.showThenHide = function(time) {
    if (time == null) {
      time = 1000;
    }
    clearTimeout(this.showThenHideTimeout);
    if (!this.show) {
      this.toggleVisible(true, true);
    }
    if (this.showTemp) {
      return this.showThenHideTimeout = setTimeout(this.toggleVisible.bind(this, false), time);
    }
  };

  BoardStateHistory.prototype.hide = function() {
    return this.toggleVisible(false);
  };

  BoardStateHistory.prototype.show = function() {
    return this.toggleVisible(true);
  };

  BoardStateHistory.prototype.findStateIndex = function(cb) {
    var index;
    index = _.findIndex(this.states, cb);
    if (index !== -1) {
      return index;
    }
  };

  return BoardStateHistory;

})(StateHistory);


},{"./StateHistory":7,"./stateEncoder":28,"./superpowerToIndex":30}],6:[function(require,module,exports){
var MicroEventClass,
  __slice = [].slice;

MicroEventClass = (function() {
  function MicroEventClass() {}

  MicroEventClass.prototype._init = function() {
    return this._listn || (this._listn = {});
  };

  MicroEventClass.prototype._create = function(e) {
    return this._init()[e] || (this._init()[e] = []);
  };

  MicroEventClass.prototype.on = function(e, f) {
    return (this._create(e)).push(f);
  };

  MicroEventClass.prototype.off = function(e, f) {
    var t;
    if ((t = this._init()[e]) != null) {
      return t.splice(t.indexOf(f), 1);
    }
  };

  MicroEventClass.prototype.once = function(e, f) {
    var t;
    return this.on(e, (t = (function(_this) {
      return function() {
        return (_this.off(e, t)) && f.apply(_this, arguments);
      };
    })(this)));
  };

  MicroEventClass.prototype.emit = function() {
    var e, l, r, t, _i, _len;
    e = arguments[0], r = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ((t = this._init()[e]) != null) {
      for (_i = 0, _len = t.length; _i < _len; _i++) {
        l = t[_i];
        l.apply(this, r);
      }
    }
    return 0;
  };

  MicroEventClass.mixin = function(t) {
    var p;
    for (p in this.prototype) {
      t.prototype[p] = this.prototype[p];
    }
    return 0;
  };

  return MicroEventClass;

})();

module.exports = MicroEventClass;


},{}],7:[function(require,module,exports){
var MicroEventClass, StateHistory,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MicroEventClass = require('./MicroEventClass');

StateHistory = (function(_super) {
  __extends(StateHistory, _super);

  function StateHistory(opts) {
    this.states = [];
    this.staged = [];
    this.latest = null;
    this.current = null;
    this.show = false;
    this.id = opts.id;
    this.statesToSave = 50;
  }

  StateHistory.prototype.encodeState = function(state) {
    return state;
  };

  StateHistory.prototype.decodeState = function(state) {
    return state;
  };

  StateHistory.prototype.save = function() {
    var json, states;
    states = this.states.slice(0, this.statesToSave);
    json = JSON.stringify(states);
    return localStorage.setItem(this.id, json);
  };

  StateHistory.prototype.load = function() {
    var states;
    states = JSON.parse(localStorage.getItem(this.id));
    if (states && _.isArray(states)) {
      this.states = states;
      this.current = states.length - 1;
      this.latest = this.current;
      this.emit('load');
      this.emit('update');
      return states;
    }
  };

  StateHistory.prototype.add = function(state, meta) {
    var newState;
    if (meta == null) {
      meta = {};
    }
    if (this.latest !== this.current) {
      this.states = this.states.slice(0, this.current + 1);
    }
    if (this.current == null) {
      this.current = 0;
    } else {
      this.current++;
    }
    this.latest = this.current;
    newState = {
      state: this.encodeState(_.cloneDeep(state)),
      meta: _.cloneDeep(meta)
    };
    this.states[this.current] = newState;
    this.save();
    this.emit('add', newState, 'YEAH');
    this.emit('update', newState, 'YEAH');
    return this.emit('change');
  };

  StateHistory.prototype.undo = function() {
    var state;
    if (this.current > 0) {
      this.current--;
    }
    this.showThenHide();
    state = this.getCurrent();
    this.emit('undo');
    this.emit('update', state);
    this.emit('change');
    return state;
  };

  StateHistory.prototype.redo = function() {
    var state;
    if (this.current < this.latest) {
      this.current++;
    }
    this.showThenHide();
    state = this.getCurrent();
    this.emit('redo');
    this.emit('update', state);
    this.emit('change');
    return state;
  };

  StateHistory.prototype.goTo = function(index) {
    if (index == null) {
      return;
    }
    this.current = index;
    this.emit('goTo', this.getCurrent());
    this.emit('update', this.getCurrent());
    return this.emit('change');
  };

  StateHistory.prototype.get = function(index) {
    var sh;
    if (this.states.length === 0) {
      return null;
    }
    sh = _.cloneDeep(this.states[index]);
    sh.state = this.decodeState(sh.state);
    return sh;
  };

  StateHistory.prototype.getCurrent = function() {
    return this.get(this.current);
  };

  StateHistory.prototype.getPrev = function() {
    var prev;
    prev = this.current - 1;
    if (prev < 0) {
      prev = 0;
    }
    return this.get(prev);
  };

  StateHistory.prototype.getAll = function() {
    return _.map(this.states, (function(_this) {
      return function(sh, index) {
        return _this.get(index);
      };
    })(this));
  };

  return StateHistory;

})(MicroEventClass);

module.exports = StateHistory;


},{"./MicroEventClass":6}],8:[function(require,module,exports){
var cx;

cx = React.addons.classSet;

module.exports = function(props) {
  var classes, ownerClass;
  ownerClass = "owner-" + props.owner;
  classes = cx({
    'asiaScoring': props.title === 'Asia Scoring',
    'europeScoring': props.title === 'Europe Scoring',
    'middleEastScoring': props.title === 'Middle East Scoring',
    'centralAmericaScoring': props.title === 'Central America Scoring',
    'southeastAsiaScoring': props.title === 'Southeast Asia Scoring*',
    'africaScoring': props.title === 'Africa Scoring',
    'southAmericaScoring': props.title === 'South America Scoring',
    'ongoing': props.ongoing
  });
  return ownerClass + ' ' + classes;
};


},{}],9:[function(require,module,exports){
module.exports = function(continent) {
  if (continent === 'af') {
    return 'f';
  } else {
    return continent.charAt(0);
  }
};


},{}],10:[function(require,module,exports){
var cs;

cs = {
  'a': 'as',
  'e': 'eu',
  'c': 'ca',
  's': 'sa',
  'f': 'af',
  'm': 'me'
};

module.exports = function(letter) {
  return cs[letter];
};


},{}],11:[function(require,module,exports){
module.exports = function(el) {
  if (el) {
    return el;
  }
};


},{}],12:[function(require,module,exports){
module.exports = function(el, i, arr) {
  return arr.indexOf(el) === i;
};


},{}],13:[function(require,module,exports){
module.exports = function(el) {
  return (1 <= el && el <= 110);
};


},{}],14:[function(require,module,exports){
module.exports = {
  turn: function(val) {
    switch (val) {
      case 0:
        return 'S';
      case 11:
        return 'E';
      default:
        return val;
    }
  },
  round: function(val) {
    if (val === 0) {
      return 'H';
    } else {
      return Math.ceil(val / 2);
    }
  }
};


},{}],15:[function(require,module,exports){
module.exports = function(id, val, opt) {
  var end, h, start;
  switch (id) {
    case 'turn':
      start = 'S';
      end = 'E';
      if (opt === 'long') {
        start = 'New Game';
        end = 'Game End';
      }
      switch (val) {
        case 0:
          return start;
        case 11:
          return end;
        default:
          return val;
      }
      break;
    case 'round':
      h = opt === 'long' ? 'Headline' : 'H';
      if (val === 0) {
        return h;
      } else {
        return Math.ceil(val / 2);
      }
      break;
    case 'score':
      return Math.abs(val);
    default:
      return val;
  }
};


},{}],16:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee");f["MicroEventClass"]=require("/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee");f["StateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["contientCodeFromOneLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee");f["continentCodeFromLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["gameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee");f["gameValDisplay"]=require("/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["intToStrWithSign"]=require("/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee");f["numToChar"]=require("/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee");f["oneLetterContinentCode"]=require("/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["signFromDir"]=require("/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee");f["signString"]=require("/Users/jjt/Sites/twistrug/src/libs/signString.coffee");f["signedNumOrDash"]=require("/Users/jjt/Sites/twistrug/src/libs/signedNumOrDash.coffee");f["signedStr"]=require("/Users/jjt/Sites/twistrug/src/libs/signedStr.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["stateEncoder"]=require("/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee");f["superStats"]=require("/Users/jjt/Sites/twistrug/src/libs/superStats.coffee");f["superpowerToIndex"]=require("/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee");f["upperFirst"]=require("/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":12,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":13,"/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee":14,"/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee":15,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":16,"/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee":17,"/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee":18,"/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee":19,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":20,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":21,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":22,"/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee":23,"/Users/jjt/Sites/twistrug/src/libs/signString.coffee":24,"/Users/jjt/Sites/twistrug/src/libs/signedNumOrDash.coffee":25,"/Users/jjt/Sites/twistrug/src/libs/signedStr.coffee":26,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":27,"/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee":28,"/Users/jjt/Sites/twistrug/src/libs/superStats.coffee":29,"/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee":30,"/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee":31,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":32,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":33}],17:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return "+" + num;
  } else {
    return num;
  }
};


},{}],18:[function(require,module,exports){
module.exports = {
  encode: function(n) {
    var out;
    if (n < 36) {
      return out = n.toString(36);
    } else {
      return String.fromCharCode(n + 29);
    }
  },
  decode: function(c) {
    var code, offset;
    if (c == null) {
      c = '0';
    }
    code = c.charCodeAt(0);
    offset = (function() {
      switch (false) {
        case !((48 <= code && code <= 57)):
          return 48;
        case !((97 <= code && code <= 122)):
          return 87;
        case !((65 <= code && code <= 90)):
          return 29;
      }
    })();
    return code - offset;
  }
};


},{}],19:[function(require,module,exports){
module.exports = function(continent) {
  if (continent === 'af') {
    return 'f';
  } else {
    return continent.charAt(0);
  }
};


},{}],20:[function(require,module,exports){
var __hasProp = {}.hasOwnProperty;

module.exports = {
  merge: function(obj) {},
  get: function(field) {},
  set: function(field, val) {
    var qsObj;
    qsObj = this.toObj() || {};
    qsObj[field] = val;
    return this.setQS(this.toQS(qsObj));
  },
  "delete": function(field) {
    var qsObj;
    qsObj = this.toObj() || {};
    if (qsObj == null) {
      return;
    }
    delete qsObj[field];
    return this.setQS(this.toQS(qsObj));
  },
  encodeCharsIn: ['=', '&'],
  encodeCharsOut: ['%3D', '%26'],
  encode: function(obj) {
    if (_.isArray(obj)) {
      obj = obj.join(',');
    }
    return obj.replace(this.encodeCharsIn, this.encodeCharsOut);
  },
  decode: function(str) {
    str = str.replace(this.encodeCharsOut, this.encodeCharsIn);
    if (str.indexOf(',') !== -1) {
      str = str.split(',');
    }
    return str;
  },
  toObj: function(qs) {
    var out, pairs, _ref;
    if (qs == null) {
      qs = (_ref = window.location.hash.split('?')) != null ? _ref[1] : void 0;
    }
    if (!qs) {
      return;
    }
    out = {};
    pairs = qs.split('&');
    if (pairs != null) {
      pairs.forEach((function(_this) {
        return function(pair) {
          var kvArr;
          kvArr = pair.split('=');
          return out[_this.decode(kvArr[0])] = _this.decode(kvArr[1]);
        };
      })(this));
    }
    return out;
  },
  toQS: function(obj) {
    var k, pairs, v;
    pairs = [];
    for (k in obj) {
      if (!__hasProp.call(obj, k)) continue;
      v = obj[k];
      pairs.push("" + (this.encode(k)) + "=" + (this.encode(v)));
    }
    return pairs.join('&');
  },
  setQS: function(qs) {
    return window.location.hash = window.location.hash.split('?')[0] + '?' + qs;
  }
};


},{}],21:[function(require,module,exports){
module.exports = function(id, val) {
  var range, ranges;
  ranges = {
    score: [-20, 20],
    turn: [0, 11],
    round: [0, 16],
    defcon: [1, 5],
    milops: [0, 5],
    space: [0, 8]
  };
  range = ranges[id];
  if (val < range[0]) {
    return range[1];
  }
  if (val > range[1]) {
    return range[0];
  }
  return val;
};


},{}],22:[function(require,module,exports){
var __slice = [].slice;

module.exports = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return document.title = args.join(' | ') + ' - TwiStrug';
};


},{}],23:[function(require,module,exports){
module.exports = function(dir) {
  if (dir === 'up') {
    return '+';
  } else {
    return '-';
  }
};


},{}],24:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return '+';
  }
  if (num < 0) {
    return '-';
  }
  return '';
};


},{}],25:[function(require,module,exports){
module.exports = function(num) {
  var out;
  if (num === 0) {
    out = '—';
  }
  if (num > 0) {
    out = "+" + num;
  }
  if (num < 0) {
    out = num;
  }
  return out;
};


},{}],26:[function(require,module,exports){
module.exports = function(num) {
  var sign;
  sign = '';
  if (num > 0) {
    sign = '+';
  }
  console.log(sign + num);
  return sign + num;
};


},{}],27:[function(require,module,exports){
module.exports = function(a, b) {
  return a - b;
};


},{}],28:[function(require,module,exports){
var numToChar;

numToChar = require('./numToChar');

module.exports = {
  encode: function(state) {
    var board, game, ips;
    game = state.game;
    ips = state.ips;
    board = [game.score + 20, game.defcon, game.turn, game.round, game.milops[0], game.milops[1], game.space[0], game.space[1]];
    return board.concat(_.flatten(ips.slice(2))).map(numToChar.encode).join('');
  },
  decode: function(str) {
    var arr, boardArr, defcon, game, index, ip, ipArr, ips, ipsIndex, milops, mousa, moussr, round, score, sideIndex, space, spusa, spussr, turn, _i, _len;
    if (str == null) {
      return null;
    }
    arr = str.split('').map(function(el) {
      return numToChar.decode(el);
    });
    boardArr = arr.slice(0, 8);
    ipArr = arr.slice(8);
    score = boardArr[0], defcon = boardArr[1], turn = boardArr[2], round = boardArr[3], mousa = boardArr[4], moussr = boardArr[5], spusa = boardArr[6], spussr = boardArr[7];
    milops = [mousa, moussr];
    space = [spusa, spussr];
    score -= 20;
    game = {
      score: score,
      defcon: defcon,
      turn: turn,
      round: round,
      milops: milops,
      space: space
    };
    ips = [];
    for (index = _i = 0, _len = ipArr.length; _i < _len; index = ++_i) {
      ip = ipArr[index];
      ipsIndex = Math.floor(index / 2);
      sideIndex = index % 2;
      if (sideIndex === 0) {
        ips[ipsIndex] = [ip];
      } else {
        ips[ipsIndex][sideIndex] = ip;
      }
    }
    ips.unshift([0, 0], [0, 0]);
    return {
      game: game,
      ips: ips
    };
  }
};


},{"./numToChar":18}],29:[function(require,module,exports){
var getIpStats, getRegionStats, sumRegion;

getIpStats = function(ips, countries) {
  var accumulator, fn, ipsRev, usa, ussr;
  accumulator = function() {
    return {
      btl: 0,
      non: 0,
      total: 0,
      eu: {
        non: 0,
        btl: 0,
        total: 0
      },
      as: {
        non: 0,
        btl: 0,
        total: 0
      },
      me: {
        non: 0,
        btl: 0,
        total: 0
      },
      af: {
        non: 0,
        btl: 0,
        total: 0
      },
      sa: {
        non: 0,
        btl: 0,
        total: 0
      },
      ca: {
        non: 0,
        btl: 0,
        total: 0
      }
    };
  };
  fn = function(accum, ips, countryId) {
    var country;
    country = _.find(countries, {
      id: parseInt(countryId, 10)
    });
    if (ips[0] - ips[1] >= country.stab) {
      accum[country.continent].total++;
      accum.total++;
      if (country.btl) {
        accum[country.continent].btl++;
        accum.btl++;
      } else {
        accum[country.continent].non++;
        accum.non++;
      }
    }
    return accum;
  };
  ipsRev = _.map(ips, function(ips) {
    return _.cloneDeep(ips).reverse();
  });
  usa = _.reduce(ips, fn, accumulator());
  ussr = _.reduce(ipsRev, fn, accumulator());
  return {
    usa: usa,
    ussr: ussr
  };
};

sumRegion = function(metric, sum, region) {
  return sum + region[metric];
};

getRegionStats = function(ipStats, regions) {
  var stats;
  stats = _.mapValues(ipStats, function(hero, power, powers) {
    var regionStats, villain;
    villain = power === 'usa' ? powers.ussr : powers.usa;
    regionStats = regions.map(function(region) {
      var control, domination, hRegion, presence, vRegion;
      hRegion = hero[region.id];
      vRegion = villain[region.id];
      domination = hRegion.non > 0 && hRegion.btl > vRegion.btl && hRegion.total > vRegion.total;
      control = hRegion.btl === region.numBtl && hRegion.total > vRegion.total;
      presence = !domination && !control && hRegion.total > 0;
      return {
        presence: presence,
        domination: domination,
        control: control
      };
    });
    regionStats = _.zipObject(_.pluck(regions, 'id'), regionStats);
    return regionStats = _.assign(regionStats, {
      presence: _.reduce(regionStats, sumRegion.bind(null, 'presence'), 0),
      domination: _.reduce(regionStats, sumRegion.bind(null, 'domination'), 0),
      control: _.reduce(regionStats, sumRegion.bind(null, 'control'), 0)
    });
  });
  return stats;
};

module.exports = function(ips, countryArr, regionArr) {
  var countries, regions;
  countries = getIpStats(ips, countryArr);
  regions = getRegionStats(countries, regionArr);
  return {
    countries: countries,
    regions: regions
  };
};


},{}],30:[function(require,module,exports){
module.exports = function(power) {
  if (power === 'usa') {
    return 0;
  } else {
    return 1;
  }
};


},{}],31:[function(require,module,exports){
module.exports = function(str) {
  if (str == null) {
    str = '';
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


},{}],32:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],33:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],34:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'AboutView',
  render: function() {
    return R.div({
      className: 'aboutView'
    }, [
      R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-md-8'
        }, [
          R.div({
            className: 'col-md-12'
          }, R.h2({}, [
            "About ", R.span({
              className: 'twi'
            }, 'Twi'), R.span({
              className: 'strug'
            }, 'Strug')
          ]), R.p({}, [
            "TwiStrug was created as a card reference for ", R.a({
              href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
            }, "Twilight Struggle"), ". It has since expanded to include a playable version of the board for local games without taking up as much table space."
          ]), R.p({}, [
            "For more in-depth strategy, look no further than the inimitable ", R.a({
              href: "http://twilightstrategy.com"
            }, "Twilight Strategy"), ". It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author, ", R.em({}, "theory"), ", by purchasing Twilight Struggle from Amazon on the sidebar of his site, or by paying some money for the associated ", R.a({
              href: "https://leanpub.com/twilightstrategy"
            }, "e-book"), ". It's Twilight Strategy in book form and deserves your money."
          ]), R.p({}, [
            "TwiStrug was made by ", R.a({
              href: "http://jjt.io/"
            }, "Jason Trill"), ". Source available on ", R.a({
              href: "https://github.com/jjt/twistrug"
            }, "Github"), "."
          ]), R.h2({}, "About Twilight Struggle"), R.blockquote({}, [
            R.p({}, "Twilight Struggle is a card driven game played over a maximum of 10 turns [each with 6 or 7 rounds]. The game may end sooner (and frequently does)."), R.p({}, "[It] is fundamentally a game about area control. There are six geopolitical regions on the map: Europe (split into Eastern and Western Europe subregions), Asia (including the Southeast Asia subregion), the Middle East, Africa, Central America, and South America. Within each region are countries that have a stability number, representing how stable the government tends to be."), R.p({}, "Having control of countries helps determine whether you have presence, domination, or control of a region, which in turn helps you earn victory points. Within each region, there are a number of battleground countries, which are considered key to the region."), R.p({}, R.em({}, R.a({
              href: 'http://boardgamegeek.com/thread/471953/rogers-reviews-deluxe-twilight-struggle-comprehens'
            }, 'Forum post by leroy43')))
          ]))
        ]), R.div({
          className: 'col-md-4'
        }, [
          R.img({
            className: 'img img-fluid AboutView-tsbox',
            src: "/images/tsbox.jpg"
          })
        ])
      ]), R.div({
        className: 'row'
      }, R.div({
        className: 'col-md-12'
      }, R.p({}, R.a({
        className: 'img-link',
        href: "/images/tsboard.jpg"
      }, R.img({
        className: 'img img-fluid img-center',
        src: '/images/tsboard-md.jpg'
      })))))
    ]);
  }
});


},{}],35:[function(require,module,exports){
var Board, BoardInfo, BoardStateHistory, BoardStateHistoryView, R, StateHistory, cx, reduceShortcuts;

R = React.DOM;

cx = React.addons.classSet;

StateHistory = require('../libs/StateHistory');

BoardStateHistory = require('../libs/BoardStateHistory');

BoardStateHistoryView = require('../views/BoardStateHistory');

Board = require('../views/Board');

reduceShortcuts = function(arr, shortcut) {
  arr.push(R.dt({}, shortcut.key));
  arr.push(R.dd({}, shortcut.desc));
  return arr;
};

BoardInfo = React.createClass({
  scrollTop: function() {
    return setTimeout(function() {
      return window.scrollTo(0, 0);
    }, 0);
  },
  getDefaultProps: function() {
    return {
      shortcuts: {
        ip: [
          {
            key: 'i',
            desc: 'Enter IP placement by keyboard (IPbK) mode'
          }, {
            key: 'esc',
            desc: 'Go "up" (country -> continent -> exit IPbK mode)'
          }, {
            key: 'enter',
            desc: '(same as above)'
          }, {
            key: 'a/A',
            desc: 'USA influence inc/dec (when country selected)'
          }, {
            key: 'r/R',
            desc: 'USSR influence inc/dec (when country selected)'
          }, {
            key: 'esc',
            desc: 'Cancel IP placement (when country selected)'
          }, {
            key: 'enter',
            desc: 'Confirm IP placement (when country selected)'
          }
        ],
        left: [
          {
            key: 's/S',
            desc: 'Score inc/dec'
          }, {
            key: 'd/D',
            desc: 'Defcon inc/dec'
          }, {
            key: 'm/M',
            desc: 'USA Military Ops inc/dec'
          }, {
            key: 'o/O',
            desc: 'USSR Military Ops inc/dec'
          }, {
            key: 'h',
            desc: 'Show/hide Action History'
          }, {
            key: 'c',
            desc: 'Roll dice'
          }
        ],
        right: [
          {
            key: 't/T',
            desc: 'Turn inc/dec'
          }, {
            key: 'r/R',
            desc: 'Round inc/dec'
          }, {
            key: 'p/P',
            desc: 'USA Space Race inc/dec'
          }, {
            key: 'a/A',
            desc: 'USSR Space Race inc/dec'
          }, {
            key: 'z',
            desc: 'Undo (Action History)'
          }, {
            key: 'y',
            desc: 'Redo (Action History)'
          }
        ]
      }
    };
  },
  render: function() {
    return R.div({}, [
      R.div({
        className: 'row'
      }, R.div({
        className: 'col-lg-12'
      }, [
        R.h3({}, 'Virtual Twilight Struggle board'), R.p({}, "This is a fully playable board with a more compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards and you'll be able to play anywhere. The board isn't aware of the rules, nor will it do anything automatically. Use it as you would a physical copy of the game."), R.p({}, [
          "This game, ", R.a({
            href: "#/board/" + this.props.id
          }, R.code({}, this.props.id)), ", will be saved in your browser and can be bookmarked and resumed at a later time, even if you close your browser. ", R.a({
            onClick: this.scrollTop,
            href: '#/board'
          }, 'Click here to start a new game'), '.'
        ]), R.p({}, "The URL contains the complete state of the board and will update with each action taken. This can be used to play remotely with someone by sending the URL back and forth. For instance, if you were the USSR starting a new game, you would place your initial influence then copy the URL and send it to your opponent. They would go to that URL, place their influence and send the new URL back to you. Lather, rinse, repeat.")
      ])), R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-lg-6'
        }, [R.h3({}, "Instructions"), R.p({}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."), R.p({}, "To undo/redo one or more actions, press Z/Y one or more times."), R.p({}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."), R.p({}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination, and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1.")]), R.div({
          className: 'col-lg-6'
        }, [
          R.h3({}, "Keyboard Shortcuts"), R.dl({
            className: 'BoardPage-shortcuts col-lg-6'
          }, _.reduce(this.props.shortcuts.left, reduceShortcuts, [])), R.dl({
            className: 'BoardPage-shortcuts col-lg-6'
          }, _.reduce(this.props.shortcuts.right, reduceShortcuts, [])), R.div({
            className: 'row'
          }, R.div({
            className: 'col-lg-12'
          }, [
            R.h4({}, "Influence placement by keyboard"), R.dl({
              className: 'BoardPage-shortcuts BoardPage-shortcuts-ip'
            }, _.reduce(this.props.shortcuts.ip, reduceShortcuts, []))
          ]))
        ])
      ])
    ]);
  }
});

module.exports = React.createClass({
  displayName: 'BoardView',
  stateHistory: null,
  componentWillMount: function() {
    return this.stateHistory = new BoardStateHistory({
      id: this.props.gameId
    });
  },
  getDefaultProps: function() {
    return {
      width: 1140,
      height: 730,
      node: {
        width: 66,
        height: 50,
        gutter: 14,
        titleHeight: 16,
        titleFontSize: 12
      }
    };
  },
  render: function() {
    return R.div({
      className: 'BoardView'
    }, [
      BoardStateHistoryView({
        stateHistory: this.stateHistory,
        key: "BoardStateHistory-" + this.props.gameId
      }), R.div({
        className: 'container'
      }, [
        Board(_.assign({
          stateHistory: this.stateHistory
        }, this.props)), BoardInfo({
          id: this.props.gameId
        })
      ])
    ]);
  }
});


},{"../libs/BoardStateHistory":5,"../libs/StateHistory":7,"../views/Board":46,"../views/BoardStateHistory":52}],36:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'BoardPicView',
  render: function() {
    return R.div({
      className: 'boardView'
    }, [
      R.div({
        className: 'page-header'
      }, R.h2({}, 'Board')), R.a({
        href: '/images/tsboard.jpg'
      }, R.img({
        className: 'fluid',
        src: '/images/tsboard.jpg'
      }))
    ]);
  }
});


},{}],37:[function(require,module,exports){
var R, libs;

R = React.DOM;

libs = require('../libs');

module.exports = React.createClass({
  displayName: 'CardView',
  componentDidMount: function() {
    $(window).on('scroll', this.floatingCard);
    $(window).on('resize', this.floatingCard);
    $(document).on('keypress', this.handleKeyPress);
    return this.getStrategy();
  },
  componentWillUnmount: function() {
    window.onkeypress = null;
    $(window).off('scroll', this.floatingCard);
    $(window).off('resize', this.floatingCard);
    return $(document).off('keypress', this.handleKeyPress);
  },
  componentDidUpdate: function() {
    return this.getStrategy();
  },
  floatingCard: function() {
    var $header, $img, $win, ho, isScrolling;
    $header = $(this.refs.header.getDOMNode());
    $img = $(this.refs.cardImg.getDOMNode());
    $win = $(window);
    ho = $header.offset();
    isScrolling = $win.scrollTop() > ho.top + ho.height;
    $img.toggleClass('card-img-scroll', isScrolling);
    return $img.css('right', "" + (($win.width() - ho.width - 15) / 2) + "px");
  },
  handleKeyPress: function(ev) {
    var id, kC;
    kC = ev.keyCode;
    if (kC === 104 || kC === 72) {
      id = this.props.prevCard.id;
    }
    if (kC === 108 || kC === 76) {
      id = this.props.nextCard.id;
    }
    if (id != null) {
      return window.location = "#/card/" + id;
    }
  },
  getStrategy: function() {
    this.refs.cardStrategy.getDOMNode().innerHTML = '<p>Loading data...</p>';
    return $.get("/data/cardStrategyLinked/" + (libs.zeroPad(this.props.card.id)) + ".html", (function(_this) {
      return function(data) {
        return _this.refs.cardStrategy.getDOMNode().innerHTML = data;
      };
    })(this));
  },
  render: function() {
    var card, imageUrl;
    card = this.props.card;
    imageUrl = "/images/cards/" + (libs.zeroPad(card.id)) + ".jpg";
    return R.div({
      className: 'cardView'
    }, [
      R.div({
        className: 'page-header clearfix',
        ref: 'header'
      }, R.h2({
        className: libs.cardClassName(card)
      }, [
        R.span({
          className: 'card-ops'
        }, card.ops < 1 ? "S" : card.ops), "" + card.title + " ", R.span({
          className: 'card-id'
        }, "#" + card.id)
      ]), R.div({
        className: 'card-nav'
      }, [
        R.a({
          href: "#/card/" + this.props.prevCard.id,
          className: 'card-nav-prev'
        }, [
          "" + this.props.prevCard.title, R.span({
            className: 'card-nav-label'
          }, [
            R.small({}, '◀ '), R.span({
              className: 'shortcut'
            }, '(H)'), ' prev'
          ])
        ]), R.a({
          href: "#/card/" + this.props.nextCard.id,
          className: 'card-nav-next'
        }, [
          "" + this.props.nextCard.title, R.span({
            className: 'card-nav-label'
          }, [
            'next ', R.span({
              className: 'shortcut'
            }, '(L)'), R.small({}, ' ▶')
          ])
        ])
      ])), R.p({
        className: 'pull-left card-body'
      }, card.text), R.img({
        key: imageUrl,
        src: imageUrl,
        className: 'imgRight',
        ref: 'cardImg'
      }), R.div({
        className: 'card-strategy',
        id: 'card-strategy'
      }, [
        R.h3({}, [
          'Strategic Notes from', ' ', R.a({
            href: card.url
          }, 'TwilightStrategy.com')
        ]), R.div({
          ref: 'cardStrategy'
        }, R.p({}, 'Loading data'))
      ])
    ]);
  }
});


},{"../libs":16}],38:[function(require,module,exports){
var CardList, R, cx, idsFromWGR, libs,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

libs = require('../libs');

CardList = require('../views/CardList');

idsFromWGR = function(ids) {
  if (ids == null) {
    ids = [];
  }
  return ids.map(function(id) {
    switch (id) {
      case 35:
        return 81;
      case 98:
        return 99;
      case 99:
        return 100;
      case 100:
        return 35;
      case 101:
        return 102;
      case 102:
        return 103;
      case 107:
        return 110;
      case 109:
        return 98;
      case 110:
        return 104;
      case 111:
        return 109;
      case 112:
        return 107;
      default:
        return id;
    }
  });
};

module.exports = React.createClass({
  displayName: 'CardsView',
  defaultState: function(props) {
    var filter, _ref;
    filter = props != null ? (_ref = props.state) != null ? _ref.filter : void 0 : void 0;
    return {
      fullText: filter ? true : false,
      cardImg: false,
      cardFilterInput: filter ? filter.join(' ') : '',
      sort: 'stage',
      filter: null,
      view: 'img',
      filterIsWGR: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('cWRP', nextProps);
    if (nextProps.state != null) {
      return this.setState(nextProps.state);
    } else {
      return this.setState(this.defaultState());
    }
  },
  getInitialState: function() {
    return _.merge(this.defaultState(this.props), this.props.state);
  },
  getFilterIds: function() {
    var filterIds, _ref;
    if (((_ref = this.state) != null ? _ref.filter : void 0) != null) {
      filterIds = this.state.filter.sort(libs.sortNumerical).filter(libs.filterTruthy).filter(libs.filterUnique);
    }
    if (filterIds == null) {
      filterIds = [];
    }
    return filterIds;
  },
  getFilteredCards: function() {
    if (this.state.filter != null) {
      return this.props.cards.filter((function(_this) {
        return function(el) {
          var _ref;
          if (_ref = el.id, __indexOf.call(_this.state.filter, _ref) >= 0) {
            return el;
          }
        };
      })(this));
    }
    return this.props.cards;
  },
  filterAndSortCards: function() {
    var cards, order, sort, sortParam, _ref;
    cards = this.getFilteredCards();
    _ref = this.state.sort.split('-'), sort = _ref[0], order = _ref[1];
    sortParam = (function() {
      switch (sort) {
        case 'textlen':
          return function(el) {
            return el.text.length;
          };
        case 'side':
          return ['owner', 'stage', 'id'];
        case 'ops':
          return 'ops';
        case 'titlelen':
          return function(el) {
            return el.title.length;
          };
        default:
          return ['stage', 'id'];
      }
    })();
    cards = _.sortBy(cards, sortParam);
    if (order === 'rev') {
      cards.reverse();
    }
    return cards;
  },
  groupCards: function(cards) {
    var sort;
    if (cards == null) {
      cards = this.filterAndSortCards();
    }
    if (this.state.filter != null) {
      return [cards];
    }
    sort = this.state.sort;
    if (sort === 'side') {
      sort = 'owner';
    }
    if (this.state.sort) {
      return _.groupBy(cards, sort);
    }
  },
  handleFullText: function() {
    return this.setState({
      fullText: this.refs.fullText.getDOMNode().checked
    });
  },
  handleCardImg: function() {
    return this.setState({
      cardImg: this.refs.cardImg.getDOMNode().checked
    });
  },
  handleCardFilterChange: function() {
    var ids, isWGR, state, value, _ref;
    value = this.refs.cardFilter.getDOMNode().value;
    isWGR = value.search(/#.*:/) !== -1;
    ids = (_ref = value.match(/\d+[^:]|\d+$|#\d:/g)) != null ? _ref.map(function(el) {
      el = el.replace(/\D/g, '');
      return parseInt(el, 10);
    }) : void 0;
    if (value === '' || (ids == null)) {
      state = {
        cardFilterInput: value,
        filter: null
      };
    } else {
      if (isWGR) {
        ids = idsFromWGR(ids);
      }
      ids = ids.sort(libs.sortNumerical).filter(libs.filterValidCardIds);
      state = {
        cardFilterInput: value,
        fullText: true,
        filter: ids
      };
    }
    return this.setState(state);
  },
  handleCardFilterBlur: function() {
    var filterIds;
    filterIds = this.getFilterIds();
    this.setState({
      cardFilterInput: filterIds.join(' ')
    });
    if ((filterIds != null) && filterIds.length > 0) {
      return libs.qs.set('filter', filterIds);
    } else {
      return libs.qs["delete"]('filter');
    }
  },
  handleCardFilterClear: function() {
    this.refs.cardFilter.getDOMNode().value = '';
    this.setState({
      filter: null,
      cardFilterInput: ''
    });
    return libs.qs["delete"]('filter');
  },
  sortGroupTitle: function(sort, val) {
    var s, valInt;
    if (sort == null) {
      sort = this.state.sort;
    }
    valInt = parseInt(val, 10);
    switch (sort) {
      case 'ops':
        s = valInt > 1 ? 's' : '';
        if (valInt === 0) {
          return 'Scoring';
        } else {
          return "" + val + " Op" + s;
        }
        break;
      case 'side':
        if (val === 'us') {
          return 'USA';
        } else if (val === 'neutral') {
          return 'Neutral';
        } else {
          return val.toUpperCase();
        }
        break;
      case 'stage':
        switch (valInt) {
          case 1:
            return 'Early War';
          case 2:
            return 'Mid War';
          case 3:
            return 'Late war';
        }
    }
  },
  handleViewClick: function(view) {
    this.setState({
      view: view
    });
    return libs.qs.set('view', view);
  },
  render: function() {
    var cardLists, cards, cardsViewClass, sortLink;
    console.log('render', this.state, this.props);
    sortLink = (function(_this) {
      return function(sort, display) {
        var className, onClick, ref;
        className = cx({
          active: _this.state.sort === sort
        });
        ref = "" + sort + "Sort";
        onClick = function() {
          return libs.qs.set('sort', sort);
        };
        return R.a({
          onClick: onClick,
          ref: ref,
          className: className
        }, display);
      };
    })(this);
    cards = this.groupCards(this.filterAndSortCards());
    cardLists = _.map(cards, (function(_this) {
      return function(cards, val) {
        var cardListHeading;
        cardListHeading = null;
        if (_this.state.filter == null) {
          cardListHeading = R.h2({
            className: 'cardList-groupHeading'
          }, _this.sortGroupTitle(_this.state.sort, val));
        }
        return R.div({}, [
          cardListHeading, CardList({
            cardImg: _this.state.cardImg,
            fullText: _this.state.fullText,
            cards: cards,
            view: _this.state.view
          })
        ]);
      };
    })(this));
    cardsViewClass = cx({
      'cardsView': true,
      'cardsView--filtered': this.state.filter != null,
      'cardsView--fullText': this.state.fullText
    });
    return R.div({
      className: cardsViewClass
    }, [
      R.div({
        className: 'page-header row'
      }, [
        R.div({
          className: 'col-md-6'
        }, [
          R.div({
            className: 'cardControls'
          }, [
            R.span({
              className: 'label'
            }, 'Sort by:'), sortLink('stage', 'Stage'), sortLink('ops', 'Ops'), sortLink('side', 'Side')
          ]), R.div({
            className: 'cardControls'
          }, [
            R.label({
              htmlFor: '',
              className: ''
            }, 'View: '), R.i({
              onClick: this.handleViewClick.bind(null, 'img'),
              title: 'Card image',
              className: "icon-th-large " + (this.state.view === 'img' ? 'active' : '')
            }), R.i({
              onClick: this.handleViewClick.bind(null, 'title'),
              title: 'Title and ops',
              className: "icon-th " + (this.state.view === 'title' ? 'active' : '')
            }), R.i({
              onClick: this.handleViewClick.bind(null, 'text'),
              title: 'Full text',
              className: "icon-align-left " + (this.state.view === 'text' ? 'active' : '')
            })
          ])
        ]), R.div({
          className: 'cards-filter-by-id col-md-6'
        }, [
          R.label({
            htmlFor: 'cardFilter',
            className: 'cardFilter-label'
          }, "Filter by ids "), R.input({
            name: 'cardFilter',
            type: 'text',
            className: 'cardFilter-input',
            ref: 'cardFilter',
            onChange: this.handleCardFilterChange,
            onBlur: this.handleCardFilterBlur,
            value: this.state.cardFilterInput,
            placeholder: 'Paste from Wargameroom or enter ids'
          }), R.a({
            className: 'cards-filter-by-id-clear',
            onClick: this.handleCardFilterClear
          }, 'clear')
        ])
      ]), cardLists
    ]);
  }
});


},{"../libs":16,"../views/CardList":58}],39:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],40:[function(require,module,exports){
var Board, BoardStateHistory, BoardStateHistoryView, R, StateHistory, cx;

R = React.DOM;

cx = React.addons.classSet;

StateHistory = require('../libs/StateHistory');

BoardStateHistory = require('../libs/BoardStateHistory');

BoardStateHistoryView = require('../views/BoardStateHistory');

Board = require('../views/Board');

module.exports = React.createClass({
  displayName: 'GamePage',
  stateHistory: null,
  componentWillMount: function() {
    return this.stateHistory = new BoardStateHistory({
      id: this.props.gameId
    });
  },
  getDefaultProps: function() {
    return {
      width: 1140,
      height: 730,
      node: {
        width: 66,
        height: 50,
        gutter: 14,
        titleHeight: 16,
        titleFontSize: 12
      }
    };
  },
  render: function() {
    return R.div({
      className: 'BoardView'
    }, [
      BoardStateHistoryView({
        stateHistory: this.stateHistory,
        key: "BoardStateHistory-" + this.props.gameId
      }), R.div({
        className: 'container'
      }, [
        Board(_.assign({
          stateHistory: this.stateHistory
        }, this.props))
      ])
    ]);
  }
});


},{"../libs/BoardStateHistory":5,"../libs/StateHistory":7,"../views/Board":46,"../views/BoardStateHistory":52}],41:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'HomeView',
  render: function() {
    return R.div({
      className: 'HomeView'
    }, [
      R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-xs-12'
        }, [
          R.h1({
            className: 'text-center'
          }, [
            R.span({
              className: "twi owner-us"
            }, "Twi"), R.span({
              className: "strug owner-ussr"
            }, "Strug")
          ]), R.p({
            className: 'lead blurb'
          }, [
            "TwiStrug is a companion application for ", R.a({
              href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
            }, "Twilight Struggle"), ". It would not exist without ", R.a({
              href: "http://twilightstrategy.com"
            }, "Twilight Strategy"), "."
          ])
        ])
      ]), R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-md-6'
        }, [
          R.a({
            className: 'home-link',
            href: '#/board'
          }, [
            R.h3({}, 'Virtual Board'), R.img({
              className: 'img-responsive',
              src: '/images/home-board.jpg'
            }), R.p({}, 'Fully playable board - just add cards')
          ])
        ]), R.div({
          className: 'col-md-6'
        }, [
          R.a({
            className: 'home-link home-link-cards',
            href: '#/cards'
          }, [
            R.h3({}, 'View Cards'), R.img({
              className: 'img-responsive',
              src: '/images/home-cards.jpg'
            }), R.p({}, 'Explore the cards of Twilight Struggle')
          ])
        ])
      ])
    ]);
  }
});


},{}],42:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'WhoopsView',
  render: function() {
    return R.div({}, [
      R.h2({}, "DEFCON 1"), R.p({
        className: 'lead'
      }, [
        "Looks like TwiStrug triggered nuclear war. WHOOPSIE DAISY!", R.br({}), R.a({
          href: "#/cards"
        }, "How about looking over the cards?")
      ])
    ]);
  }
});


},{}],43:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Game"]=require("/Users/jjt/Sites/twistrug/src/pages/Game.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":34,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":35,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":36,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":37,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":38,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":39,"/Users/jjt/Sites/twistrug/src/pages/Game.coffee":40,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":41,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":42,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":43}],44:[function(require,module,exports){
var mapData, mapDatav2, oneLetterContinentCode, qs, setPageTitle, setRouteOriginal, vent;

vent = require('./vent');

mapData = require('../app/data/map-data.json');

mapDatav2 = require('../app/data/map-data-v2.json');

oneLetterContinentCode = require('./libs/oneLetterContinentCode');

setPageTitle = require('./libs/setPageTitle');

qs = require('./libs/qs');

setRouteOriginal = Router.prototype.setRoute;

Router.prototype.setRoute = function() {
  this.currentRoute = this.getRoute();
  return setRouteOriginal.apply(this, arguments);
};

module.exports = {
  getDefaultProps: function() {
    return {
      router: new Router
    };
  },
  setView: function(name, title, menuActive, data) {
    var _ref;
    if (menuActive == null) {
      menuActive = '';
    }
    if (data == null) {
      data = {};
    }
    if (title != null) {
      setPageTitle(title);
    }
    return this.setState({
      view: {
        name: name,
        data: data,
        title: title
      },
      menuActive: menuActive,
      slideIn: ((_ref = this.state.view) != null ? _ref.name : void 0) !== name
    });
  },
  componentDidMount: function() {
    var router, stateRoute;
    stateRoute = (function(_this) {
      return function(name, pageTitle, menuActive, args) {
        var state;
        state = qs.toObj(args);
        if ((state != null ? state.filter : void 0) != null) {
          if (!_.isArray(state.filter)) {
            state.filter = [state.filter];
          }
          state.filter = state.filter.map(function(el) {
            return parseInt(el, 10);
          });
        }
        return _this.setView(name, pageTitle, menuActive, {
          state: state
        });
      };
    })(this);
    router = this.props.router;
    vent.on('setRoute', router.setRoute.bind(router));
    router.configure({
      notfound: this.setView.bind(this, 'whoops', 'Whoops')
    });
    router.on('/', this.setView.bind(this, 'home', 'Home'));
    router.on('/card/:id', (function(_this) {
      return function(id) {
        var card, nextCard, nextId, pageTitle, prevCard, prevId;
        id = parseInt(id, 10);
        nextId = id === 110 ? 1 : id + 1;
        prevId = id === 1 ? 110 : id - 1;
        card = _.find(_this.props.cards, {
          id: id
        });
        nextCard = _.find(_this.props.cards, {
          id: nextId
        });
        prevCard = _.find(_this.props.cards, {
          id: prevId
        });
        pageTitle = "" + card.title + " (#" + card.id + ")";
        return _this.setView('card', pageTitle, 'cards', {
          card: card,
          nextCard: nextCard,
          prevCard: prevCard
        });
      };
    })(this));
    router.on('/countries', this.setView.bind(this, 'countries', 'Countries', 'countries'));
    router.on('/about', this.setView.bind(this, 'about', 'About', 'about'));
    router.on(/cards\??(.*)/, (function(_this) {
      return function() {
        var pageQS;
        pageQS = qs.toObj();
        if (window.innerWidth < 768 && ((pageQS != null ? pageQS.view : void 0) == null)) {
          qs.set('view', 'title');
          return;
        }
        return stateRoute('cards', 'Cards', 'cards');
      };
    })(this));
    router.on(/game\/?(\w*)\/?(.*)/, (function(_this) {
      return function(gameId, incomingState) {
        var countries, countryShortcuts, links, nodes, props, regionInfoNodes;
        if ((gameId == null) || gameId === '') {
          gameId = Math.random().toString(36).slice(2, 10);
          window.history.replaceState(null, "Game " + gameId, "#/game/" + gameId);
        }
        countryShortcuts = mapDatav2.countryShortcuts, countries = mapDatav2.countries, links = mapDatav2.links, regionInfoNodes = mapDatav2.regionInfoNodes;
        nodes = _.union(countries, regionInfoNodes);
        props = {
          gameId: gameId,
          countries: countries,
          regionInfoNodes: regionInfoNodes,
          links: links,
          nodes: nodes,
          incomingState: incomingState,
          countryShortcuts: countryShortcuts
        };
        _this.setView('game', 'Game', 'game', props);
        return console.log('GAME ROUTE');
      };
    })(this));
    router.on(/board\/?(\w*)\/?(.*)/, (function(_this) {
      return function(gameId, incomingState) {
        var boardProps, countries, countryShortcuts, links, nodes, regionInfoNodes;
        if ((gameId == null) || gameId === '') {
          gameId = Math.random().toString(36).slice(2, 10);
          window.history.replaceState(null, "Board " + gameId, "#/board/" + gameId);
        }
        countryShortcuts = mapDatav2.countryShortcuts, countries = mapDatav2.countries, links = mapDatav2.links, regionInfoNodes = mapDatav2.regionInfoNodes;
        nodes = _.union(countries, regionInfoNodes);
        boardProps = {
          gameId: gameId,
          countries: countries,
          regionInfoNodes: regionInfoNodes,
          links: links,
          nodes: nodes,
          incomingState: incomingState,
          countryShortcuts: countryShortcuts
        };
        return _this.setView('board', 'Board', 'board', boardProps);
      };
    })(this));
    router.on(/(access_token.*)/, (function(_this) {
      return function(qs) {
        return console.log(qs);
      };
    })(this));
    return router.init('/');
  }
};


},{"../app/data/map-data-v2.json":1,"../app/data/map-data.json":2,"./libs/oneLetterContinentCode":19,"./libs/qs":20,"./libs/setPageTitle":22,"./vent":45}],45:[function(require,module,exports){
var MicroEventClass, Vent, vent,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MicroEventClass = require('./libs/MicroEventClass');

Vent = (function(_super) {
  __extends(Vent, _super);

  function Vent() {
    return Vent.__super__.constructor.apply(this, arguments);
  }

  return Vent;

})(MicroEventClass);

vent = new Vent();

window.vent = vent;

module.exports = vent;


},{"./libs/MicroEventClass":6}],46:[function(require,module,exports){
var BoardLink, BoardNode, BoardNodeDiv, BoardStatus, R, contCountrySelection, continentCodeFromLetter, continentShortcutData, cx, filterTruthy, getRegionStatus, oneLetterContinentCode, rangedGameVal, signedNumOrDash, stateEncoder, superStats, superpowerToIndex, upperFirst, vent,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

vent = require('../vent');

superStats = require('../libs/superStats');

rangedGameVal = require('../libs/rangedGameVal');

signedNumOrDash = require('../libs/signedNumOrDash');

stateEncoder = require('../libs/stateEncoder');

upperFirst = require('../libs/upperFirst');

oneLetterContinentCode = require('../libs/oneLetterContinentCode');

continentCodeFromLetter = require('../libs/continentCodeFromLetter');

filterTruthy = require('../libs/filterTruthy');

BoardNode = require('./BoardNode');

BoardNodeDiv = require('./BoardNodeDiv');

BoardStatus = require('./BoardStatus');

BoardLink = require('./BoardLink');

superpowerToIndex = function(str) {
  if (str === 'usa') {
    return 0;
  } else {
    return 1;
  }
};

getRegionStatus = function(stats) {
  return _.mapValues(stats, function(stat) {
    if (stat.control) {
      return 'control';
    }
    if (stat.domination) {
      return 'domination';
    }
    if (stat.presence) {
      return 'presence';
    }
    return false;
  });
};

continentShortcutData = [
  {
    char: 'C',
    x: 127,
    y: 200
  }, {
    char: 'S',
    x: 127,
    y: 510
  }, {
    char: 'F',
    x: 533,
    y: 550
  }, {
    char: 'E',
    x: 480,
    y: 220
  }, {
    char: 'A',
    x: 840,
    y: 150
  }, {
    char: 'M',
    x: 840,
    y: 380
  }
];

contCountrySelection = function(regions, countries, ipKeySeq) {
  var continent, country, countryKey, countryObj;
  if (ipKeySeq == null) {
    ipKeySeq = '';
  }
  continent = _.find(regions, {
    shortcut: ipKeySeq.charAt(1).toLowerCase()
  });
  country = '';
  countryKey = ipKeySeq.slice(2, 4);
  if (countryKey.length === 2) {
    countryObj = _.find(countries, {
      shortcut: countryKey.toLowerCase(),
      continent: continent != null ? continent.continent : void 0
    });
    country = countryObj.shortname;
  }
  if (countryKey.length === 1) {
    country = "" + (countryKey.toUpperCase()) + "...";
  }
  return {
    continent: continent,
    country: country
  };
};

module.exports = React.createClass({
  displayName: 'Board',
  getInitialState: function(props) {
    var gameState, meta, state, stateHistory, _ref;
    if (props == null) {
      props = this.props;
    }
    stateHistory = props.stateHistory;
    stateHistory.load();
    state = this.handleIncomingState(props.incomingState);
    if (state == null) {
      state = (_ref = stateHistory.getCurrent()) != null ? _ref.state : void 0;
    }
    if (state == null) {
      gameState = {
        game: {
          score: 0,
          turn: 0,
          round: 0,
          defcon: 5,
          milops: [0, 0],
          space: [0, 0]
        },
        ips: _.map(props.countries, function(c) {
          return [c.usa, c.ussr];
        })
      };
      meta = {
        type: 'turn',
        id: 'turn',
        newGame: true,
        "new": 0,
        old: 0
      };
      stateHistory.add(gameState, meta);
      state = gameState;
    }
    return _.assign(state, {
      ipShowCountries: [],
      ipKeySequence: '',
      ipShowContinent: '',
      ipIPChange: []
    });
  },
  componentWillReceiveProps: function(nP) {
    var state;
    state = this.getInitialState(nP);
    return this.setState(state);
  },
  componentWillMount: function() {
    var gameId, stateHistory, _ref;
    _ref = this.props, stateHistory = _ref.stateHistory, gameId = _ref.gameId;
    stateHistory.on('change', (function(_this) {
      return function() {
        var state, stateEnc;
        state = _this.props.stateHistory.getCurrent();
        if ((state != null) && !state.meta.newGame) {
          stateEnc = stateHistory.encodeCurrent();
          return vent.emit('boardStateChange', gameId, stateEnc);
        }
      };
    })(this));
    stateHistory.on('goTo', (function(_this) {
      return function(state) {
        return _this.setState(state.state);
      };
    })(this));
    this.kpHT = _.throttle(this.keypressHandler, 100);
    this.kuHT = _.throttle(this.keyupHandler, 100);
    this.kdHT = _.throttle(this.keydownHandler, 100);
    $(document).on('keypress', this.kpHT);
    $(document).on('keyup', this.kuHT);
    return $(document).on('keydown', this.kdHT);
  },
  componentWillUnmount: function() {
    $(document).off('keypress', this.kpHT);
    $(document).off('keyup', this.kuHT);
    return $(document).off('keydown', this.kdHT);
  },
  handleIncomingState: function(stateEncoded) {
    var current, index, state;
    if (stateEncoded == null) {
      stateEncoded = this.props.incomingState;
    }
    index = this.props.stateHistory.findStateIndex({
      state: stateEncoded
    });
    if (index != null) {
      this.props.stateHistory.goTo(index);
      current = this.props.stateHistory.getCurrent();
      return current.state;
    } else {
      current = this.props.stateHistory.getCurrent();
      if ((stateEncoded != null) && stateEncoded !== '' && (current != null ? current.meta.state : void 0) !== stateEncoded) {
        state = stateEncoder.decode(stateEncoded);
        this.props.stateHistory.add(state, {
          type: 'load',
          id: 'load',
          state: stateEncoded
        });
        return state;
      }
    }
  },
  setStateHistory: function(state, meta) {
    this.props.stateHistory.add(state, meta);
    return this.setState(state);
  },
  keypressHandler: function(ev) {
    var dir, kC;
    kC = ev.keyCode;
    dir = kC >= 97 ? 'inc' : 'dec';
    if (this.state.ipKeySequence.length > 0) {
      return this.ipKeySequence(kC);
    }
    if (kC === 105 || kC === 73) {
      return this.ipKeySequence(kC);
      return;
    }
    switch (kC) {
      case 99:
      case 67:
        this.refs.BoardStatus.rollDice();
        break;
      case 122:
      case 90:
        this.undoHist();
        break;
      case 121:
      case 89:
        this.redoHist();
        break;
      case 104:
      case 72:
        this.toggleHist();
        break;
      case 116:
      case 84:
        this.handleValClick('turn', dir);
        break;
      case 114:
      case 82:
        this.handleValClick('round', dir);
        break;
      case 115:
      case 83:
        this.handleValClick('score', dir);
        break;
      case 100:
      case 68:
        this.handleValClick('defcon', dir);
        break;
      case 109:
      case 77:
        this.handleValClick('milops', dir, 'usa');
        break;
      case 111:
      case 79:
        this.handleValClick('milops', dir, 'ussr');
        break;
      case 112:
      case 80:
        this.handleValClick('space', dir, 'usa');
        break;
      case 97:
      case 65:
        this.handleValClick('space', dir, 'ussr');
    }
    return true;
  },
  keyupHandler: function(ev) {
    var _ref;
    if (ev.keyCode === 27) {
      this.props.stateHistory.toggleVisible(false);
    }
    if (ev.keyCode === 27 || ((37 <= (_ref = ev.keyCode) && _ref <= 40))) {
      return this.ipKeySequence(ev.keyCode, ev);
    }
    ev.preventDefault();
    return false;
  },
  keydownHandler: function(ev) {
    if (ev.keyCode === 8 || ev.keyCode === 13) {
      this.ipKeySequence(ev.keyCode);
      ev.preventDefault();
      return false;
    }
  },
  clearIpChange: function(resetIPs) {
    var country, ipChange, ipShowCountries;
    if (resetIPs == null) {
      resetIPs = true;
    }
    ipChange = this.state.ipIPChange;
    ipShowCountries = this.state.ipShowCountries;
    if (ipChange.map(filterTruthy).length > 0 && ipShowCountries.length === 1) {
      country = _.find(this.props.countries, {
        shortcut: ipShowCountries[0]
      });
      if (country == null) {
        return;
      }
      this.setState({
        ipIPChange: [0, 0]
      });
      if (resetIPs) {
        this.handleIPClick(country.id, 'usa', null, -ipChange[0]);
        return this.handleIPClick(country.id, 'ussr', null, -ipChange[1]);
      }
    }
  },
  clearIpKeySequence: function() {
    return this.setState({
      ipKeySequence: '',
      ipShowCountries: [],
      ipShowContinent: '',
      ipIPChange: [0, 0]
    });
  },
  ipKeySequence: function(code, ev) {
    var char, charLower, continent, countries, country, countryCode, countryIPs, countryShortcuts, delta, dir, ipChange, ipKS, ipsChanged, side, _ref, _ref1;
    ipKS = this.state.ipKeySequence;
    ipChange = this.state.ipIPChange;
    char = String.fromCharCode(code);
    if (code === 27 || code === 13) {
      if (!ipKS) {
        return;
      }
      ipsChanged = ipKS.length === 4 && ipChange.filter(filterTruthy).length > 0;
      if (code === 27 && ipsChanged) {
        this.clearIpChange();
      } else {
        if (code === 13) {
          this.clearIpChange(false);
        }
        delta = -1;
        if (ipKS.length === 4) {
          delta = -2;
        }
        ipKS = ipKS.slice(0, delta);
        char = ipKS.slice(-1);
        ipKS = ipKS.slice(0, -1);
      }
    }
    charLower = char.toLowerCase();
    if (!ipKS && !char) {
      this.clearIpKeySequence();
      return;
    }
    this.props.stateHistory.toggleVisible(false);
    if (ipKS.length === 0 && charLower === 'i') {
      this.setState({
        ipKeySequence: 'i',
        ipShowCountries: [],
        ipShowContinent: '',
        ipIPChange: [0, 0]
      });
      return;
    }
    if (ipKS.length === 1 && (charLower === 'c' || charLower === 's' || charLower === 'e' || charLower === 'f' || charLower === 'a' || charLower === 'm')) {
      ipKS += charLower;
      this.setState({
        ipKeySequence: ipKS,
        ipShowCountries: this.props.countryShortcuts[charLower],
        ipShowContinent: charLower,
        ipIPChange: [0, 0]
      });
      return;
    }
    continent = ipKS.charAt(1);
    if (false && (2 <= (_ref = ipKS.length) && _ref <= 3)) {
      ipKS += charLower;
      countryCode = ipKS.slice(2, 4);
      countries = this.props.countryShortcuts[continent].filter(function(sc) {
        if (sc == null) {
          sc = '';
        }
        return sc.charAt(0) === countryCode.charAt(0);
      });
      if (countryCode.length === 2) {
        countries = countries.filter(function(sc) {
          if (sc == null) {
            sc = '';
          }
          return sc.charAt(1) === countryCode.charAt(1);
        });
      }
      if (countries.length !== 0) {
        this.setState({
          ipKeySequence: ipKS,
          ipShowCountries: countries,
          ipIPChange: [0, 0]
        });
      }
    }
    if ((2 <= (_ref1 = ipKS.length) && _ref1 <= 3)) {
      ipKS += charLower;
      countryCode = ipKS.slice(2, 4);
      countryShortcuts = this.props.countryShortcuts[continent].filter(function(sc) {
        if (sc == null) {
          sc = '';
        }
        return sc.charAt(0) === countryCode.charAt(0);
      });
      if (countryCode.length === 1) {
        country = _.find(this.props.countries, {
          shortcutUnique: countryCode,
          continent: continentCodeFromLetter(continent)
        });
        if (country != null) {
          ipKS += country.shortcut.charAt(1);
          this.setState({
            ipKeySequence: ipKS
          });
        }
      }
      if (countryCode.length === 2) {
        countryShortcuts = countryShortcuts.filter(function(sc) {
          if (sc == null) {
            sc = '';
          }
          return sc.charAt(1) === countryCode.charAt(1);
        });
      }
      if (countryShortcuts.length !== 0) {
        this.setState({
          ipKeySequence: ipKS,
          ipShowCountries: countryShortcuts,
          ipIPChange: [0, 0]
        });
        return;
      }
    }
    countryCode = ipKS.slice(2, 4);
    if (countryCode.length === 2) {
      country = _.find(this.props.countries, {
        shortcut: countryCode,
        continent: continentCodeFromLetter(continent)
      });
      ipChange = this.state.ipIPChange || [0, 0];
      countryIPs = this.state.ips[parseInt(country.id, 10)];
      if (country == null) {
        return;
      }
      switch (char) {
        case 'a':
          side = 'usa';
          dir = 'up';
          ipChange[0]++;
          break;
        case 'A':
          side = 'usa';
          dir = 'dn';
          if (countryIPs[0] > 0) {
            ipChange[0]--;
          }
          break;
        case 'r':
          side = 'ussr';
          dir = 'up';
          ipChange[1]++;
          break;
        case 'R':
          side = 'ussr';
          dir = 'dn';
          if (countryIPs[1] > 0) {
            ipChange[1]--;
          }
      }
      if ((side != null) && (dir != null)) {
        this.handleIPClick(country.id, side, dir);
      }
      this.setState({
        ipShowCountries: [countryCode],
        ipIPChange: ipChange
      });
      return false;
    }
  },
  handleValClick: function(id, dir, side) {
    var delta, index, meta, newVal, oldVal, state;
    state = this.state;
    delta = dir === 'inc' ? 1 : -1;
    if (id === 'milops' || id === 'space') {
      index = side === 'usa' ? 0 : 1;
      oldVal = state.game[id][index];
      newVal = rangedGameVal(id, state.game[id][index] + delta);
      state.game[id][index] = newVal;
    } else {
      oldVal = state.game[id];
      newVal = rangedGameVal(id, state.game[id] + delta);
      state.game[id] = newVal;
    }
    meta = {
      type: 'val',
      side: side != null ? side : '',
      id: id,
      old: oldVal,
      "new": newVal
    };
    if (id === 'turn' || id === 'round') {
      meta.type = id;
    }
    return this.setStateHistory(state, meta);
  },
  handleIPClick: function(nodeId, side, dir, delta) {
    var index, ip, node, sign, state;
    if ((delta != null) && delta === 0) {
      return;
    }
    node = _.find(this.props.countries, {
      id: nodeId
    });
    if (node.points || node.superpower) {
      return;
    }
    state = this.state;
    if (delta != null) {
      dir = delta >= 0 ? 'up' : 'dn';
    } else {
      delta = dir === 'up' ? 1 : -1;
    }
    index = superpowerToIndex(side);
    ip = state.ips[nodeId][index];
    ip += delta;
    if (ip < 0) {
      return;
    }
    sign = dir === 'up' ? '+' : '-';
    state.ips[nodeId][index] = ip;
    return this.setStateHistory(state, {
      type: 'ip',
      side: side,
      country: node,
      ips: state.ips[nodeId],
      delta: delta
    });
  },
  handleHistoryClick: function(type) {
    return this["" + type + "Hist"]();
  },
  undoHist: function() {
    var state;
    state = this.props.stateHistory.undo();
    return this.setState(state.state);
  },
  redoHist: function() {
    var state;
    state = this.props.stateHistory.redo();
    return this.setState(state.state);
  },
  toggleHist: function() {
    return this.props.stateHistory.toggleVisible();
  },
  render: function() {
    var boardStatusAttrs, contCountry, continentShortcuts, countryShortcuts, ipChange, ipChangeUSA, ipChangeUSSR, ipContCountry, ipCountry, ipKeySequence, ipShowContinent, ipShowCountries, links, nodeProps, nodes, nodesByContinent, superpowerStats, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    nodeProps = this.props.node;
    superpowerStats = superStats(this.state.ips, this.props.countries, this.props.regionInfoNodes);
    ipKeySequence = (_ref = this.state) != null ? _ref.ipKeySequence : void 0;
    ipShowCountries = ((_ref1 = this.state) != null ? _ref1.ipShowCountries : void 0) || [];
    ipShowContinent = (_ref2 = this.state) != null ? _ref2.ipShowContinent : void 0;
    links = this.props.links.map((function(_this) {
      return function(linkData) {
        var jUSA, linkProps, nodes, source, target;
        source = _.find(_this.props.countries, {
          id: linkData.source
        });
        target = _.find(_this.props.countries, {
          id: linkData.target
        });
        nodes = {
          source: source,
          target: target
        };
        jUSA = function(link, targ) {
          var japanUSABump;
          japanUSABump = 18;
          if (_.contains(link.nodes, 'USA') && _.contains(link.nodes, 'Japan')) {
            return nodes[targ].y - japanUSABump;
          }
          return nodes[targ].y;
        };
        linkProps = {
          key: "BoardLink-" + linkData.source + "-" + linkData.target,
          x1: source.x,
          y1: jUSA(linkData, 'source'),
          x2: target.x,
          y2: jUSA(linkData, 'target'),
          className: cx({
            "link": true,
            "link-cross": linkData.crossContinent,
            "link-usa": _.contains(linkData.nodes, 'USA'),
            "link-ussr": _.contains(linkData.nodes, 'USSR')
          })
        };
        return BoardLink(linkProps);
      };
    })(this));
    nodes = _.map(this.props.nodes, (function(_this) {
      return function(countryData) {
        var countryId, ipSelected, onTop, props, _ref3;
        onTop = !ipKeySequence || (_ref3 = countryData.shortcut, __indexOf.call(ipShowCountries, _ref3) >= 0) && oneLetterContinentCode(countryData.continent) === ipShowContinent && ipKeySequence.length >= 4;
        ipSelected = onTop && ipShowCountries.length === 1;
        props = {
          node: nodeProps,
          key: "BoardNode-" + countryData.id,
          x: countryData.x,
          y: countryData.y,
          width: _this.props.node.width,
          height: _this.props.node.height,
          gutter: _this.props.node.gutter,
          titleHeight: _this.props.node.titleHeight,
          titleFontSize: _this.props.node.titleFontSize,
          handleIPClick: _this.handleIPClick,
          onTop: onTop,
          ipSelected: ipSelected
        };
        _.assign(props, countryData);
        if (props.superpower) {
          props.stats = {
            countries: _.pick(superpowerStats.countries[props.name.toLowerCase()], ['btl', 'non', 'total']),
            regions: _.pick(superpowerStats.regions[props.name.toLowerCase()], ['presence', 'domination', 'control'])
          };
        }
        if (props.points) {
          props.stats = getRegionStatus({
            usa: superpowerStats.regions.usa[props.id],
            ussr: superpowerStats.regions.ussr[props.id]
          });
        }
        countryId = parseInt(countryData.id, 10);
        if (countryId in _this.state.ips) {
          props.usa = _this.state.ips[countryId][0];
          props.ussr = _this.state.ips[countryId][1];
        }
        return BoardNodeDiv(props);
      };
    })(this));
    boardStatusAttrs = {
      ref: 'BoardStatus',
      handleValClick: this.handleValClick,
      handleHistoryClick: this.handleHistoryClick
    };
    continentShortcuts = continentShortcutData.map((function(_this) {
      return function(o) {
        var attrs, show;
        if (ipKeySequence.length === 1) {
          show = 'in';
        }
        attrs = {
          className: "Board-shortcutContinent Board-shortcut " + show,
          style: {
            left: o.x,
            top: o.y
          }
        };
        return R.div(attrs, o.char);
      };
    })(this));
    nodesByContinent = _.groupBy(this.props.countries, 'continent');
    countryShortcuts = _.map(nodesByContinent, (function(_this) {
      return function(nodes, continent) {
        var contKey, nodeComponents;
        contKey = oneLetterContinentCode(continent);
        nodeComponents = _.map(nodes, function(node) {
          var attrs, ipKSL, show;
          if ((node.superpower != null) || (node.points != null)) {
            return null;
          }
          show = '';
          ipKSL = ipKeySequence.length;
          if (ipKSL < 4 && _.contains(_this.state.ipShowCountries, node.shortcut) && _this.state.ipShowContinent === oneLetterContinentCode(continent)) {
            show = 'in';
          }
          attrs = {
            className: "Board-shortcut Board-shortcutCountry " + show,
            style: {
              left: node.x,
              top: node.y
            }
          };
          return R.div(attrs, upperFirst(node.shortcutUnique));
        });
        return nodeComponents;
      };
    })(this));
    contCountry = contCountrySelection(this.props.regionInfoNodes, this.props.countries, ipKeySequence);
    ipChange = this.state.ipIPChange || [0, 0];
    ipChangeUSA = ipKeySequence.length >= 4 ? R.span({
      className: 'Board-ipHeader-usa'
    }, signedNumOrDash(ipChange[0])) : null;
    ipChangeUSSR = ipKeySequence.length >= 4 ? R.span({
      className: 'Board-ipHeader-ussr'
    }, signedNumOrDash(ipChange[1])) : null;
    ipCountry = contCountry.country || (contCountry.continent ? 'Select a country' : void 0);
    ipContCountry = [
      ipChangeUSA, R.span({
        className: "Board-ipHeader-ContCount"
      }, [
        R.h3({
          className: "Board-ipHeader-Continent " + ((_ref3 = contCountry.continent) != null ? _ref3.continent : void 0) + "Dark"
        }, ((_ref4 = contCountry.continent) != null ? _ref4.shortname : void 0) || 'Select a continent'), R.h3({
          className: "Board-ipHeader-Country " + ((_ref5 = contCountry.continent) != null ? _ref5.continent : void 0) + "Dark"
        }, ipCountry)
      ]), ipChangeUSSR
    ];
    return R.div({
      className: 'Board'
    }, [
      R.svg({
        width: this.props.width,
        height: this.props.height,
        ref: 'svg'
      }, [links]), nodes, R.div({
        className: "Board-shortcutHeader " + (ipKeySequence ? 'in' : '')
      }, [
        R.div({
          className: 'copy'
        }, [
          R.h3({}, "Placing Influence"), R.span({
            className: 'label'
          }, [
            R.a({
              onClick: this.clearIpKeySequence
            }, [
              "Cancel (", R.span({
                className: 'shortcut'
              }, "esc"), ")"
            ]), R.a({
              className: (ipChange[0] === 0 && ipChange[1] === 0 ? 'disabled' : void 0),
              onClick: this.ipKeySequence.bind(null, 13)
            }, [
              "Confirm (", R.span({
                className: 'shortcut'
              }, "enter"), ")"
            ])
          ])
        ]), R.div({
          className: 'chars'
        }, ipContCountry)
      ]), R.div({
        className: "Board-shortcutMask " + (ipKeySequence ? 'in' : '')
      }), R.div({
        className: "Board-shortcutContinents " + (ipKeySequence && ipKeySequence.length <= 1 ? 'in' : '')
      }, continentShortcuts), countryShortcuts, BoardStatus(_.assign(boardStatusAttrs, this.state.game))
    ]);
  }
});


},{"../libs/continentCodeFromLetter":10,"../libs/filterTruthy":11,"../libs/oneLetterContinentCode":19,"../libs/rangedGameVal":21,"../libs/signedNumOrDash":25,"../libs/stateEncoder":28,"../libs/superStats":29,"../libs/upperFirst":31,"../vent":45,"./BoardLink":47,"./BoardNode":48,"./BoardNodeDiv":49,"./BoardStatus":54}],47:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'BoardLink',
  shouldComponentUpdate: function() {
    return false;
  },
  render: function() {
    return R.line(this.props);
  }
});


},{}],48:[function(require,module,exports){
var BoardNodeIP, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardNodeIP = require('./BoardNodeIP');

module.exports = React.createClass({
  displayName: 'BoardNode',
  shouldComponentUpdate: function(nextProps) {
    var nPS, shouldIt, tPS;
    shouldIt = nextProps.usa !== this.props.usa || nextProps.ussr !== this.props.ussr;
    if (this.props.points != null) {
      shouldIt = nextProps.stats.usa !== this.props.stats.usa || nextProps.stats.ussr !== this.props.stats.ussr;
    }
    if (this.props.superpower) {
      nPS = nextProps.stats;
      tPS = this.props.stats;
      shouldIt = nPS.countries.btl !== tPS.countries.btl || nPS.regions.presence !== tPS.regions.presence || nPS.regions.domination !== tPS.regions.domination || nPS.regions.control !== tPS.regions.control;
    }
    return shouldIt;
  },
  handleIPClick: function(side, dir) {
    return this.props.handleIPClick(this.props.id, side, dir);
  },
  render: function() {
    var cCN, controlUSA, controlUSSR, dCN, gAttrs, pCN, poly, polyClassName, psr, regionCx, regionText, regionTextAttrs, shortCutAttrs, stabText, stabTextAttrs, titleTextAttrs;
    controlUSA = (this.props.usa - this.props.ussr) >= this.props.stab;
    controlUSSR = (this.props.ussr - this.props.usa) >= this.props.stab;
    gAttrs = {
      transform: this.props.transform,
      className: ("node-" + this.props.group + " ") + cx({
        'node': true,
        'node-btl': this.props.btl === 1,
        'node-nonbtl': this.props.btl !== 1,
        'node-region-info': this.props.regionInfo,
        'node-usa-control': controlUSA,
        'node-ussr-control': controlUSSR,
        'node-region-info': this.props.regionInfo
      })
    };
    titleTextAttrs = {
      className: "node-title-text",
      x: this.props.regionInfo || this.props.superpower ? 0 : -this.props.node.width / 2 + 2,
      y: this.props.regionInfo ? -6 : this.props.superpower ? 6 : -(this.props.node.height / 2) + this.props.node.titleFontSize
    };
    stabTextAttrs = {
      className: "node-stab",
      x: (this.props.node.width / 2) - 10,
      y: -(this.props.node.height / 2) + this.props.node.titleFontSize + 1
    };
    stabText = this.props.stab;
    if (this.props.superpower) {
      stabText = [
        R.tspan({}, "Battle: "), R.tspan({
          className: 'numBtl'
        }, this.props.stats.countries.btl)
      ];
      stabTextAttrs.x = 0;
      stabTextAttrs.y += 1;
    }
    regionTextAttrs = {
      className: this.props.points || this.props.superpower ? 'node-text' : 'hide',
      x: 0,
      y: 10,
      width: this.props.node.width
    };
    regionText = '';
    if (this.props.points) {
      regionCx = (function(_this) {
        return function(key) {
          var obj;
          obj = {
            usa: _this.props.stats.usa === key,
            ussr: _this.props.stats.ussr === key,
            both: _this.props.stats.ussr === key && _this.props.stats.usa === key
          };
          obj[key] = true;
          return cx(obj);
        };
      })(this);
      cCN = regionCx('control');
      dCN = regionCx('domination');
      pCN = regionCx('presence');
      regionText = [
        R.tspan({
          className: pCN
        }, this.props.points[0]), R.tspan({
          className: 'blank'
        }, " "), R.tspan({
          className: dCN
        }, this.props.points[1]), R.tspan({
          className: 'blank'
        }, " "), R.tspan({
          className: cCN
        }, this.props.points[2])
      ];
    }
    if (this.props.superpower) {
      psr = this.props.stats.regions;
      regionText = [psr.presence, psr.domination, psr.control].join(' ');
      regionTextAttrs.y = 20;
    }
    polyClassName = (function() {
      switch (this.props.group) {
        case 'eu':
          return 'node-bg-eu';
        case 'sea':
          return 'node-bg-sea';
        default:
          return null;
      }
    }).call(this);
    if ((polyClassName != null) && (this.props.points == null)) {
      poly = R.polygon({
        className: polyClassName,
        points: ["" + (-this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (-this.props.height / 2 + this.props.titleHeight)].join(' ')
      });
    }
    shortCutAttrs = {
      className: 'node-shortcut'
    };
    return R.g(gAttrs, [
      R.rect({
        className: 'node-bg',
        width: this.props.width,
        height: this.props.height,
        title: Math.random(),
        x: -this.props.width / 2,
        y: -this.props.height / 2
      }), poly, R.rect({
        className: 'node-title-bg',
        width: this.props.width,
        height: this.props.titleHeight,
        x: -this.props.width / 2,
        y: -this.props.height / 2
      }), R.line({
        className: 'node-line',
        width: this.props.width,
        x1: -this.props.width / 2,
        y1: -this.props.height / 2 + this.props.node.titleHeight,
        x2: this.props.width / 2,
        y2: -this.props.height / 2 + this.props.node.titleHeight
      }), R.text(titleTextAttrs, this.props.shortname), R.text(stabTextAttrs, stabText), R.text(regionTextAttrs, regionText), BoardNodeIP({
        node: this.props.node,
        side: 'usa',
        ip: this.props.usa,
        ctrl: controlUSA,
        handleIPClick: this.handleIPClick,
        ref: 'ipusa'
      }), BoardNodeIP({
        node: this.props.node,
        side: 'ussr',
        ip: this.props.ussr,
        ctrl: controlUSSR,
        handleIPClick: this.handleIPClick,
        ref: 'ipussr'
      })
    ]);
  }
});


},{"./BoardNodeIP":50}],49:[function(require,module,exports){
var BoardNodeIPDiv, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardNodeIPDiv = require('./BoardNodeIPDiv');

module.exports = React.createClass({
  displayName: 'BoardNodeDiv',
  handleIPClick: function(side, dir) {
    return this.props.handleIPClick(this.props.id, side, dir);
  },
  render: function() {
    var btl, cCN, controlUSA, controlUSSR, dCN, gAttrs, ipUSA, ipUSSR, isCountry, pCN, poly, polyClassName, psr, regionCx, regionInfo, regionText, regionTextAttrs, shortCutAttrs, stab, stabText, stabTextAttrs, titleTextAttrs;
    controlUSA = (this.props.usa - this.props.ussr) >= this.props.stab;
    controlUSSR = (this.props.ussr - this.props.usa) >= this.props.stab;
    gAttrs = {
      style: {
        left: this.props.x - this.props.width / 2 + 'px',
        top: this.props.y - this.props.height / 2 + 'px'
      },
      className: ("nodediv-" + this.props.group + " ") + cx({
        'nodediv': true,
        'nodediv-btl': this.props.btl === 1,
        'nodediv-nonbtl': this.props.btl !== 1,
        'nodediv-region-info': this.props.regionInfo,
        'nodediv-usa-control': controlUSA,
        'nodediv-ussr-control': controlUSSR,
        'nodediv-region-info': this.props.regionInfo,
        'nodediv-on-top': this.props.onTop && !(this.props.regionInfo || this.props.superpower),
        'nodediv-selected': this.props.ipSelected
      })
    };
    titleTextAttrs = {
      className: "nodediv-title-text",
      x: this.props.regionInfo || this.props.superpower ? 0 : -this.props.node.width / 2 + 2,
      y: this.props.regionInfo ? -6 : this.props.superpower ? 6 : -(this.props.node.height / 2) + this.props.node.titleFontSize
    };
    stabTextAttrs = {
      className: "nodediv-stab",
      x: (this.props.node.width / 2) - 10,
      y: -(this.props.node.height / 2) + this.props.node.titleFontSize + 1
    };
    regionTextAttrs = {
      className: this.props.points || this.props.superpower ? 'nodediv-text' : 'hide',
      x: 0,
      y: 10,
      width: this.props.node.width
    };
    regionText = '';
    if (this.props.points) {
      regionCx = (function(_this) {
        return function(key) {
          var obj;
          obj = {
            usa: _this.props.stats.usa === key,
            ussr: _this.props.stats.ussr === key,
            both: _this.props.stats.ussr === key && _this.props.stats.usa === key
          };
          obj[key] = true;
          return cx(obj);
        };
      })(this);
      cCN = regionCx('control');
      dCN = regionCx('domination');
      pCN = regionCx('presence');
      regionText = [
        R.span({
          className: pCN
        }, this.props.points[0]), R.span({
          className: 'blank'
        }, " "), R.span({
          className: dCN
        }, this.props.points[1]), R.span({
          className: 'blank'
        }, " "), R.span({
          className: cCN
        }, this.props.points[2])
      ];
    }
    if (this.props.superpower) {
      psr = this.props.stats.regions;
      regionText = [psr.presence, psr.domination, psr.control].join(' ');
      regionTextAttrs.y = 20;
    }
    polyClassName = (function() {
      switch (this.props.group) {
        case 'eu':
          return 'nodediv-bg-eu';
        case 'sea':
          return 'nodediv-bg-sea';
        default:
          return null;
      }
    }).call(this);
    if ((polyClassName != null) && (this.props.points == null)) {
      poly = R.polygon({
        className: polyClassName,
        points: ["" + (-this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (this.props.height / 2), "" + (this.props.width / 2) + "," + (-this.props.height / 2 + this.props.titleHeight)].join(' ')
      });
    }
    shortCutAttrs = {
      className: 'nodediv-shortcut'
    };
    stabText = this.props.stab;
    isCountry = this.props.superpower || this.props.regionInfo;
    if (!isCountry) {
      ipUSA = BoardNodeIPDiv({
        node: this.props.node,
        side: 'usa',
        ip: this.props.usa,
        ctrl: controlUSA,
        handleIPClick: this.handleIPClick,
        ref: 'ipusa'
      });
      ipUSSR = BoardNodeIPDiv({
        node: this.props.node,
        side: 'ussr',
        ip: this.props.ussr,
        ctrl: controlUSSR,
        handleIPClick: this.handleIPClick,
        ref: 'ipussr'
      });
      stab = R.span(stabTextAttrs, stabText);
    } else {
      regionInfo = R.span(regionTextAttrs, regionText);
    }
    if (this.props.superpower) {
      btl = R.span({
        className: 'nodediv-btl-num'
      }, [
        "Battle: ", R.span({
          className: 'strong'
        }, this.props.stats.countries.btl)
      ]);
    }
    return R.div(gAttrs, [
      btl, R.div({
        className: 'nodediv-title'
      }, [R.span(titleTextAttrs, this.props.shortname), stab]), regionInfo, ipUSA, ipUSSR
    ]);
  }
});


},{"./BoardNodeIPDiv":51}],50:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardNodeIP',
  handleIPClick: function(dir, ev) {
    return this.props.handleIPClick(this.props.side, dir);
  },
  shouldComponentUpdate: function(nP) {
    return nP.ip !== this.props.ip;
  },
  render: function() {
    var gAttrs, hideIP, ipClickHeight, position, textAttrs;
    position = this.props.side === 'usa' ? 1 : 0;
    hideIP = this.props.ip === 0 ? 'hide' : '';
    gAttrs = {
      transform: "translate(" + (-this.props.node.width / 2 * position) + ", " + (-this.props.node.titleHeight / 2 - 1) + ")",
      width: this.props.node.width / 2,
      height: this.props.node.height - this.props.node.titleHeight,
      className: "node-ip-" + this.props.side
    };
    textAttrs = {
      x: this.props.node.width / 4,
      y: this.props.node.height / 2 - 1,
      className: hideIP
    };
    ipClickHeight = (this.props.node.height - this.props.node.titleHeight) / 2;
    return R.g(gAttrs, [
      R.rect({
        width: this.props.node.width / 2,
        height: this.props.node.height - this.props.node.titleHeight,
        className: "node-ip-bg-" + this.props.side + " " + hideIP
      }), R.text(textAttrs, this.props.ip), R.rect({
        width: this.props.node.width / 2,
        height: ipClickHeight,
        className: "node-ip-click",
        onClick: this.handleIPClick.bind(this, 'up')
      }), R.rect({
        width: this.props.node.width / 2,
        height: ipClickHeight,
        y: ipClickHeight,
        className: "node-ip-click",
        onClick: this.handleIPClick.bind(this, 'dn')
      })
    ]);
  }
});


},{}],51:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardNodeIPDiv',
  componentDidUpdate: function() {
    var $el, fn;
    $el = $(this.refs.nodediv.getDOMNode());
    $el.addClass('nodediv-flash');
    fn = function() {
      return $el.removeClass('nodediv-flash');
    };
    return setTimeout(fn, 100);
  },
  handleIPClick: function(dir, ev) {
    return this.props.handleIPClick(this.props.side, dir);
  },
  shouldComponentUpdate: function(nP) {
    return nP.ip !== this.props.ip;
  },
  render: function() {
    var gAttrs, ip, ipClickHeight, ipZero, position, textAttrs;
    position = this.props.side === 'usa' ? 1 : 0;
    ipZero = this.props.ip === 0 ? 'ipZero' : '';
    gAttrs = {
      className: "nodediv-ip-" + this.props.side + " nodediv-ip " + ipZero,
      ref: 'nodediv'
    };
    textAttrs = {
      x: this.props.node.width / 4,
      y: this.props.node.height / 2 - 1,
      className: "nodediv-ip-text"
    };
    ipClickHeight = (this.props.node.height - this.props.node.titleHeight) / 2;
    ip = this.props.ip > 0 ? this.props.ip : '';
    return R.div(gAttrs, [
      R.span(textAttrs, ip), R.div({
        className: "nodediv-ip-click-up",
        onClick: this.handleIPClick.bind(this, 'up')
      }), R.div({
        className: "nodediv-ip-click-dn",
        onClick: this.handleIPClick.bind(this, 'dn')
      })
    ]);
  }
});


},{}],52:[function(require,module,exports){
var BoardStateHistoryEntry, R, cx;

R = React.DOM;

cx = React.addons.classSet;

BoardStateHistoryEntry = require('./BoardStateHistoryEntry');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      r: 0
    };
  },
  componentDidMount: function() {
    return this.props.stateHistory.on('update', (function(_this) {
      return function() {
        return _this.forceUpdate();
      };
    })(this));
  },
  handleSHClick: function(id) {
    return this.props.stateHistory.goTo(id);
  },
  handleCloseHistory: function() {
    return this.props.stateHistory.hide();
  },
  render: function() {
    var divAttrs, stateComponents;
    stateComponents = this.props.stateHistory.getAll().map((function(_this) {
      return function(sh, index) {
        var key, shM;
        shM = sh.meta;
        if (shM.country != null) {
          key = "country-" + shM.country.id;
        } else {
          key = "" + shM.id + "-" + shM.side;
        }
        return BoardStateHistoryEntry({
          onClick: _this.handleSHClick.bind(_this, index),
          key: "BSHE-" + index + "-" + key,
          isLatest: _this.props.stateHistory.latest === index,
          isCurrent: _this.props.stateHistory.current === index,
          sh: sh
        });
      };
    })(this));
    divAttrs = {
      className: cx({
        'StateHistory': true,
        'in': this.props.stateHistory.show
      })
    };
    return R.div(divAttrs, [
      R.a({
        className: 'close pull-right',
        onClick: this.handleCloseHistory
      }, [
        'Close ', R.span({
          className: 'StatusLabel-shortcut'
        }, '(h)')
      ]), R.h3({}, "Action History"), R.ul({
        className: 'list-unstyled'
      }, stateComponents.reverse())
    ]);
  }
});


},{"./BoardStateHistoryEntry":53}],53:[function(require,module,exports){
var R, cx, gameValDisplay, intToStrWithSign, scoreSide, shEntry, superpowerToIndex, upperFirst, zeroPad;

R = React.DOM;

cx = React.addons.classSet;

gameValDisplay = require('../libs/gameValDisplay');

upperFirst = require('../libs/upperFirst');

zeroPad = require('../libs/zeroPad');

intToStrWithSign = require('../libs/intToStrWithSign');

superpowerToIndex = require('../libs/superpowerToIndex');

scoreSide = function(score) {
  if (score < 0) {
    return 'ussr';
  }
  if (score > 0) {
    return 'usa';
  }
  return '';
};

shEntry = function(sh) {
  var country, ctrlUSA, ctrlUSSR, disp, ipUSA, ipUSSR, ips, newSide, oldSide, round, roundSide, roundTitle, shSide, side, turn, turnRound, _ref;
  roundSide = sh.state.game.round % 2 === 0 ? 'usa' : 'ussr';
  if (sh.state.game.round === 0) {
    roundSide = '';
  }
  if (sh.state.game.turn > 10) {
    turn = "END";
    round = '';
  } else if (sh.state.game.turn > 0) {
    turn = "T" + (gameValDisplay('turn', sh.state.game.turn)) + "-";
    if (sh.state.game.round !== 0) {
      round = "AR" + (gameValDisplay('round', sh.state.game.round));
    } else {
      round = "HEAD";
    }
  } else {
    turn = "SETUP";
    round = '';
  }
  turnRound = R.span({
    className: 'turnRound'
  }, [
    turn, R.span({
      className: roundSide
    }, round)
  ]);
  shSide = sh.meta.side;
  switch (sh.meta.type) {
    case 'load':
      return [
        turnRound, R.span({
          className: 'strong'
        }, 'Loaded state from URL')
      ];
    case 'ip':
      _ref = sh.meta.ips, ipUSA = _ref[0], ipUSSR = _ref[1];
      country = sh.meta.country;
      ctrlUSA = (ipUSA - ipUSSR) >= country.stab ? 'control' : '';
      ctrlUSSR = (ipUSSR - ipUSA) >= country.stab ? 'control' : '';
      if (sh.meta.side === 'both') {
        ips = [
          R.span({
            className: "usa ip"
          }, intToStrWithSign(sh.meta.delta[0])), R.span({
            className: "divider"
          }, '/'), R.span({
            className: "ussr ip"
          }, intToStrWithSign(sh.meta.delta[1]))
        ];
      } else {
        ips = R.span({
          className: "" + sh.meta.side + " ip"
        }, intToStrWithSign(sh.meta.delta[superpowerToIndex(sh.meta.side)]));
      }
      return [
        turnRound, ips, " in " + sh.meta.country.shortname + " (", R.span({
          className: "usa " + ctrlUSA
        }, sh.meta.ips[0]), "/", R.span({
          className: "ussr " + ctrlUSSR
        }, sh.meta.ips[1]), ")"
      ];
    case 'val':
      oldSide = newSide = sh.meta.side;
      if (sh.meta.id === 'score') {
        oldSide = scoreSide(sh.meta.old);
        newSide = scoreSide(sh.meta["new"]);
      }
      return R.span({}, [
        turnRound, "" + (upperFirst(sh.meta.id)) + " ", R.strong({
          className: oldSide
        }, "" + (gameValDisplay(sh.meta.id, sh.meta.old, 'long')) + " "), R.span({
          className: 'arrow'
        }, '➔ '), R.strong({
          className: newSide
        }, "" + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long')))
      ]);
    case 'round':
      side = roundSide;
      roundTitle = sh.state.game.round === 0 ? "Headline Phase" : "" + (side.toUpperCase()) + " Action Round " + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long'));
      return R.span({}, [
        turnRound, R.span({
          className: side
        }, roundTitle)
      ]);
    case 'turn':
      disp = "" + (gameValDisplay(sh.meta.id, sh.meta["new"], 'long'));
      if (sh.state.game.turn !== 0 && sh.state.game.turn <= 10) {
        disp = "Turn " + disp;
      }
      return R.span({
        className: 'strong'
      }, [turnRound, disp]);
    default:
      return sh.meta.msg;
  }
};

module.exports = React.createClass({
  displayName: 'BoardStateHistoryEntry',
  shouldComponentUpdate: function(nP) {
    var nShM, shouldIt, tP, tShM;
    shouldIt = false;
    tP = this.props;
    tShM = this.props.sh.meta;
    nShM = nP.sh.meta;
    if ((tShM != null ? tShM.ips : void 0) != null) {
      shouldIt = tShM.ips[0] !== nShM.ips[0] || tShM.ips[1] !== nShM.ips[1];
    }
    if (tShM.type === 'val') {
      shouldIt = tShM["new"] !== nShM["new"];
    }
    if (tP.isLatest !== nP.isLatest || tP.isCurrent !== nP.isCurrent) {
      shouldIt = true;
    }
    return shouldIt;
  },
  render: function() {
    var attrs;
    attrs = {
      onClick: this.props.onClick,
      className: cx({
        'clearfix': true,
        'StateHistory-latest': this.props.isLatest,
        'StateHistory-current': this.props.isCurrent
      })
    };
    return R.li(attrs, shEntry(this.props.sh));
  }
});


},{"../libs/gameValDisplay":15,"../libs/intToStrWithSign":17,"../libs/superpowerToIndex":30,"../libs/upperFirst":31,"../libs/zeroPad":33}],54:[function(require,module,exports){
var BoardStatusValue, Die, R, cx, hilightShortcutLetter, table;

R = React.DOM;

cx = React.addons.classSet;

BoardStatusValue = require('./BoardStatusValue');

Die = require('./Die');

table = {
  'Score': 'S',
  'Defcon': 'D',
  'MilOps-usa': 'M',
  'MilOps-ussr': 'O',
  'Turn': 'T',
  'Round': 'R',
  'Space-usa': 'p',
  'Space-ussr': 'a',
  'Action History': 'H',
  'Roll dice': 'c'
};

hilightShortcutLetter = function(title, side) {
  var head, mid, tail, titleSide, _ref;
  if (side == null) {
    side = '';
  }
  titleSide = title;
  if (side !== '' && title !== 'Round' && title !== 'Score') {
    titleSide = "" + title + "-" + side;
  }
  _ref = title.split(table[titleSide]), head = _ref[0], tail = _ref[1];
  mid = table[titleSide];
  return [
    head, R.span({
      className: 'StatusLabel-shortcut'
    }, mid), tail
  ];
};

module.exports = React.createClass({
  displayName: 'BoardStatus',
  rollDice: function() {
    return _.each(this.refs, function(ref) {
      return ref.rollDie();
    });
  },
  handleBothClick: function() {
    return this.rollDice();
  },
  render: function() {
    var round, roundSide, scoreSide, statusValue, turn;
    scoreSide = '';
    if (this.props.score !== 0) {
      scoreSide = this.props.score < 0 ? 'ussr' : 'usa';
    }
    round = this.props.round === 0 ? 'H' : Math.ceil(this.props.round / 2);
    roundSide = '';
    if (this.props.round !== 0) {
      roundSide = this.props.round % 2 === 1 ? 'ussr' : 'usa';
    }
    turn = (function() {
      switch (this.props.turn) {
        case 0:
          return 'S';
        case 11:
          return 'E';
        default:
          return this.props.turn;
      }
    }).call(this);
    statusValue = (function(_this) {
      return function(id, title, val, side) {
        if (id == null) {
          id = '';
        }
        if (title == null) {
          title = '';
        }
        if (val == null) {
          val = '';
        }
        if (side == null) {
          side = '';
        }
        title = hilightShortcutLetter(title, side);
        return BoardStatusValue(_.assign({
          id: id,
          title: title,
          val: val,
          side: side
        }, {
          handleValClick: _this.props.handleValClick
        }));
      };
    })(this);
    return R.div({
      className: 'BoardStatus'
    }, [
      R.div({
        className: 'col'
      }, [statusValue('score', 'Score', Math.abs(this.props.score), scoreSide), statusValue('defcon', 'Defcon', this.props.defcon), statusValue('milops', 'MilOps', this.props.milops[0], 'usa'), statusValue('milops', 'MilOps', this.props.milops[1], 'ussr')]), R.div({
        className: 'col'
      }, [statusValue('turn', 'Turn', turn), statusValue('round', 'Round', round, roundSide), statusValue('space', 'Space', this.props.space[0], 'usa'), statusValue('space', 'Space', this.props.space[1], 'ussr')]), R.div({
        className: 'historyControls'
      }, [
        R.span({
          className: 'historyControls-undo'
        }, R.a({
          onClick: this.props.handleHistoryClick.bind(null, 'undo')
        }, [
          R.span({
            className: 'StatusLabel-shortcut'
          }, '(z)'), ' Undo'
        ])), R.span({
          className: 'historyControls-history'
        }, R.a({
          onClick: this.props.handleHistoryClick.bind(null, 'toggle')
        }, hilightShortcutLetter('Action History'))), R.span({
          className: 'historyControls-redo'
        }, R.a({
          onClick: this.props.handleHistoryClick.bind(null, 'redo')
        }, [
          'Redo ', R.span({
            className: 'StatusLabel-shortcut'
          }, '(y)')
        ]))
      ]), R.div({
        className: 'dice'
      }, [
        Die({
          ref: 'die-usa',
          side: 'usa'
        }), R.a({
          className: 'roll-dice',
          onClick: this.handleBothClick
        }, hilightShortcutLetter('Roll dice')), Die({
          ref: 'die-ussr',
          side: 'ussr'
        })
      ])
    ]);
  }
});


},{"./BoardStatusValue":55,"./Die":59}],55:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardStatusValue',
  shouldComponentUpdate: function(nP) {
    return nP.val !== this.props.val || nP.side !== this.props.side;
  },
  render: function() {
    var decAttrs, incAttrs, sideClass;
    sideClass = (function() {
      switch (this.props.side) {
        case 'usa':
        case 'ussr':
          return this.props.side;
        default:
          return '';
      }
    }).call(this);
    decAttrs = {
      className: 'dec',
      onClick: this.props.handleValClick.bind(null, this.props.id, 'dec', this.props.side)
    };
    incAttrs = {
      className: 'inc',
      onClick: this.props.handleValClick.bind(null, this.props.id, 'inc', this.props.side)
    };
    return R.div({}, [
      R.div({
        className: "StatusLabel"
      }, this.props.title), R.div({
        className: "StatusValue " + sideClass
      }, [
        R.span(decAttrs, '◀'), R.span({
          className: 'val'
        }, this.props.val), R.span(incAttrs, '▶')
      ])
    ]);
  }
});


},{}],56:[function(require,module,exports){
var R, cardClassName, cardStages, cx, zeroPad;

R = React.DOM;

cx = React.addons.classSet;

zeroPad = require('../libs/zeroPad');

cardStages = {
  1: 'EARLY',
  2: 'MID',
  3: 'LATE'
};

cardClassName = function(props) {
  var classes;
  classes = cx({
    'asiaScoring': props.title === 'Asia Scoring',
    'europeScoring': props.title === 'Europe Scoring',
    'middleEastScoring': props.title === 'Middle East Scoring',
    'centralAmericaScoring': props.title === 'Central America Scoring',
    'southeastAsiaScoring': props.title === 'Southeast Asia Scoring*',
    'africaScoring': props.title === 'Africa Scoring',
    'southAmericaScoring': props.title === 'South America Scoring',
    'ongoing': props.ongoing
  });
  return "owner-" + props.owner + " card-view-" + props.view + " " + classes;
};

module.exports = React.createClass({
  displayName: 'Card',
  render: function() {
    var main;
    main = [
      R.span({
        className: 'card-title-holder'
      }, [
        R.span({
          className: 'card-stage'
        }, cardStages[this.props.stage]), R.h4({
          className: 'card-ops'
        }, this.props.ops < 1 ? "S" : this.props.ops), R.h4({
          className: 'card-title'
        }, [
          "" + this.props.title + " ", R.span({
            className: 'card-id'
          }, "#" + this.props.id)
        ])
      ]), R.p({
        className: 'card-text'
      }, this.props.text)
    ];
    if (this.props.view === 'img') {
      main = R.img({
        className: 'card-img',
        src: "/images/cards/sm/" + (zeroPad(this.props.id)) + ".jpg"
      });
    }
    return R.a({
      href: "#/card/" + this.props.id,
      className: cardClassName(this.props) + ' card'
    }, main);
  }
});


},{"../libs/zeroPad":33}],57:[function(require,module,exports){
var R, cx, zeroPad;

R = React.DOM;

cx = React.addons.classSet;

zeroPad = require('../libs/zeroPad');

module.exports = React.createClass({
  displayName: 'CardImg',
  render: function() {
    return R.div({
      className: 'card cardImg'
    }, R.a({
      href: "#/card/" + this.props.id
    }, R.img({
      src: "/images/cards/sm/" + (zeroPad(this.props.id)) + ".jpg"
    })));
  }
});


},{"../libs/zeroPad":33}],58:[function(require,module,exports){
var Card, R, cx;

R = React.DOM;

cx = React.addons.classSet;

Card = require('./Card');

module.exports = React.createClass({
  displayName: 'CardList',
  render: function() {
    var className;
    className = cx({
      'cardList': true,
      'cardListFull': this.props.view === 'text',
      'cardListImg': this.props.view === 'img'
    });
    return R.div({
      className: className
    }, this.props.cards.map((function(_this) {
      return function(el) {
        return Card(_.merge(el, {
          key: "card" + el.id,
          showFullText: _this.props.fullText,
          view: _this.props.view
        }));
      };
    })(this)));
  }
});


},{"./Card":56}],59:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'Die',
  shouldComponentUpdate: function(nP, nS) {
    return nS.rolling !== this.state.rolling || nS.val !== this.state.val;
  },
  getDefaultProps: function() {
    return {
      rolls: 30
    };
  },
  getInitialState: function() {
    return {
      val: 1,
      rolling: false,
      rolls: this.props.rolls
    };
  },
  clickDie: function() {
    return this.rollDie();
  },
  rollDie: function() {
    if (this.state.rolling) {
      return;
    }
    return this.iterateRoll();
  },
  iterateRoll: function() {
    var time;
    if (!this.state.rolling) {
      this.setState({
        rolling: true,
        rolls: this.props.rolls
      });
    }
    if (this.state.rolls === 0) {
      return this.setState({
        rolling: false,
        rolls: this.props.rolls
      });
    } else {
      time = (10 - this.state.rolls) * 18 + 50;
      if (this.state.rolls > 10) {
        time = 50;
      }
      this.setState({
        val: _.random(1, 6),
        rolls: this.state.rolls - 1
      });
      return setTimeout(this.iterateRoll, time);
    }
  },
  render: function() {
    var rolling;
    rolling = this.state.rolling && this.state.rolls > 0 ? 'rolling' : '';
    return R.div({
      onClick: this.clickDie,
      className: "die die-" + this.props.side + " " + rolling
    }, this.state.val);
  }
});


},{}],60:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  render: function() {
    return R.div({
      className: 'footer'
    }, [
      R.p({}, [
        "TwiStrug was made by ", R.a({
          href: 'http://jjt.io'
        }, 'Jason Trill'), ' with help from ', R.a({
          href: 'http://coffeescript.org/'
        }, 'CoffeeScript'), ', ', R.a({
          href: 'http://facebook.github.io/react/'
        }, 'React'), ', ', R.a({
          href: 'http://browserify.org/'
        }, 'Browserify'), ', ', R.a({
          href: 'http://lodash.com/'
        }, 'Lo-Dash'), ', ', R.a({
          href: 'http://getbootstrap.com/'
        }, 'Bootstrap'), ', ', R.a({
          href: 'http://zeptojs.com'
        }, 'Zepto'), ', and ', R.a({
          href: 'http://gulpjs.com'
        }, 'Gulp'), '.', R.br(), 'It owes its existence to ', R.a({
          href: 'http://twilightstrategy.com'
        }, 'Twilight Strategy'), '. Comments, suggestions, and bug reports can be aimed at ', R.a({
          href: 'http://github.com/jjt/twistrug/issues'
        }, 'Github'), ' or ', R.a({
          href: 'http://twitter.com/jasontrill'
        }, '@jasontrill'), '.'
      ])
    ]);
  }
});


},{}],61:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'NavView',
  getDefaultProps: function() {
    return {
      active: ''
    };
  },
  render: function() {
    var li;
    li = (function(_this) {
      return function(menuKey, href, title) {
        return R.li({
          className: cx({
            'active': _this.props.active === menuKey
          })
        }, R.a({
          href: href
        }, title));
      };
    })(this);
    return R.nav({
      className: "navbar ",
      role: "navigation"
    }, R.div({
      className: "container"
    }, [
      R.div({
        className: "navbar-header"
      }, R.a({
        className: "navbar-brand",
        href: '#/'
      }, [
        R.span({
          className: "twi"
        }, "Twi"), R.span({
          className: "strug"
        }, "Strug")
      ])), R.ul({
        className: "nav navbar-nav"
      }, [li('cards', '#/cards', 'Cards'), li('board', '#/board', 'Board'), li('about', '#/about', 'About')])
    ]));
  }
});


},{}],62:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/views/index.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/views/Board.coffee");f["BoardLink"]=require("/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee");f["BoardNode"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee");f["BoardNodeDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee");f["BoardNodeIP"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee");f["BoardNodeIPDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee");f["BoardStateHistoryEntry"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee");f["BoardStatus"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee");f["BoardStatusValue"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/views/Card.coffee");f["CardImg"]=require("/Users/jjt/Sites/twistrug/src/views/CardImg.coffee");f["CardList"]=require("/Users/jjt/Sites/twistrug/src/views/CardList.coffee");f["Die"]=require("/Users/jjt/Sites/twistrug/src/views/Die.coffee");f["Footer"]=require("/Users/jjt/Sites/twistrug/src/views/Footer.coffee");f["Nav"]=require("/Users/jjt/Sites/twistrug/src/views/Nav.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/views/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/views/Board.coffee":46,"/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee":47,"/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee":48,"/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee":49,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee":50,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee":51,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee":52,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee":53,"/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee":54,"/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee":55,"/Users/jjt/Sites/twistrug/src/views/Card.coffee":56,"/Users/jjt/Sites/twistrug/src/views/CardImg.coffee":57,"/Users/jjt/Sites/twistrug/src/views/CardList.coffee":58,"/Users/jjt/Sites/twistrug/src/views/Die.coffee":59,"/Users/jjt/Sites/twistrug/src/views/Footer.coffee":60,"/Users/jjt/Sites/twistrug/src/views/Nav.coffee":61,"/Users/jjt/Sites/twistrug/src/views/index.coffee":62}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEtdjIuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbGliL2NhcmRzLmpzb24iLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9Ud2lzdHJ1Zy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvTWljcm9FdmVudENsYXNzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvY2FyZENsYXNzTmFtZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2NvbnRpZW50Q29kZUZyb21PbmVMZXR0ZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclRydXRoeS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclVuaXF1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2ZpbHRlclZhbGlkQ2FyZElkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9nYW1lVmFsRGlzcGxheS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvaW50VG9TdHJXaXRoU2lnbi5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL251bVRvQ2hhci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9xcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3JhbmdlZEdhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zZXRQYWdlVGl0bGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zaWduRnJvbURpci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25TdHJpbmcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zaWduZWROdW1PckRhc2guY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zaWduZWRTdHIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zb3J0TnVtZXJpY2FsLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc3RhdGVFbmNvZGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc3VwZXJTdGF0cy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3N1cGVycG93ZXJUb0luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvdXBwZXJGaXJzdC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3ZpZXdzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvemVyb1BhZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9BYm91dC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Cb2FyZFBpYy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NhcmRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NvdW50cmllcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9HYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeHBGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5bUZBOztBQ0FBLElBQUEsb0ZBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7O0FBQUEsSUFDQSxHQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBRHBCLENBQUE7O0FBQUEsTUFF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LENBRjRCLEVBUTVCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxnQkFBWDtPQUFMLEVBQWtDLENBRWhDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUZnQyxFQUdoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FIZ0MsRUFJaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSmdDLENBQWxDLENBUjRCO0tBQTlCLENBREYsRUFOTTtFQUFBLENBSlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGNBQVIsQ0FBQSxDQUF3QixTQUF4QixFQUFtQyxDQUFDLFVBQUQsQ0FBbkMsQ0FBakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiY291bnRyaWVzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVU0FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVVNBXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjogXCJ1c2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwidXNhXCIsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkNhbmFkYSxDdWJhLE1leGljbyxKYXBhblwiLFxuICAgICAgXCJpZFwiOiAwLFxuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiA2NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1c1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVVNTUlwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJVU1NSXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjogXCJ1c3NyXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInVzc3JcIixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQWZnaGFuaXN0YW4sRmlubGFuZCxOIEtvcmVhLFBvbGFuZCxSb21hbmlhXCIsXG4gICAgICBcImlkXCI6IDEsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1c1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQXVzdHJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBdXN0cmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJFIEdlcm1hbnksSHVuZ2FyeSxJdGFseSxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjogMixcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImF1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCZW5lbHV4XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJlbmVsdXhcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXIEdlcm1hbnksVUtcIixcbiAgICAgIFwiaWRcIjogMyxcbiAgICAgIFwieFwiOiA0MDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQnVsZ2FyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQnVsZ2FyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUdXJrZXksR3JlZWNlXCIsXG4gICAgICBcImlkXCI6IDQsXG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJidVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhbmFkYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDYW5hZGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDIsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJVS1wiLFxuICAgICAgXCJpZFwiOiA1LFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkN6ZWNoXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUG9sYW5kLEUgR2VybWFueSxIdW5nYXJ5XCIsXG4gICAgICBcImlkXCI6IDYsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjelwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImN6XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkRlbm1hcmtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRGVubWFya1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlcgR2VybWFueSxTd2VkZW5cIixcbiAgICAgIFwiaWRcIjogNyxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImRlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRS5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWdcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMyxcbiAgICAgIFwibGlua3NcIjogXCJQb2xhbmQsVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6IDgsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZpbmxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRmlubGFuZFwiLFxuICAgICAgXCJncm91cFwiOiBcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDEsXG4gICAgICBcImxpbmtzXCI6IFwiU3dlZGVuXCIsXG4gICAgICBcImlkXCI6IDksXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImZpXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZmlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRnJhbmNlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkZyYW5jZVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkFsZ2VyaWEsVUssVyBHZXJtYW55LEl0YWx5LFNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjogMTAsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImZyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkdyZWVjZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJHcmVlY2VcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJdGFseSxZdWdvc2xhdmlhLFR1cmtleVwiLFxuICAgICAgXCJpZFwiOiAxMSxcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImdyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIdW5nYXJ5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkh1bmdhcnlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJSb21hbmlhLFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjogMTIsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJodVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXRhbHlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXRhbHlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJZdWdvc2xhdmlhLFNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjogMTMsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpdFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTm9yd2F5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk5vcndheVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVLLFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOiAxNCxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibm9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBvbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQb2xhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMTUsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUm9tYW5pYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJSb21hbmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVHVya2V5LFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjogMTYsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJyb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3BhaW5cXC9Qb3J0dWdhbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTcGFpblxcL1BvXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTW9yb2Njb1wiLFxuICAgICAgXCJpZFwiOiAxNyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNwXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3dlZGVuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN3ZWRlblwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAxOCxcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3dcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzd1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUdXJrZXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVHVya2V5XCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDE5LFxuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidHVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVLXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlVLXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiA1LFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDIwLFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidWtcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlcgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJXLkdlcm1cIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ3Z1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAyMSxcbiAgICAgIFwieFwiOiA0ODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIndcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiWXVnb3NsYXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJZdWdvc2xhdlwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAyMixcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInl1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwieVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFZ3lwdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFZ3lwdFwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSXNyYWVsLExpYnlhLFN1ZGFuXCIsXG4gICAgICBcImlkXCI6IDIzLFxuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWdcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkd1bGYgU3RzXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJcmFxLFNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJpZFwiOiAyNCxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJndVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXJhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJcmFuXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIklyYXEsQWZnaGFuaXN0YW4sUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjogMjUsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcmFxXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIklyYXFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpcVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDEsXG4gICAgICBcImxpbmtzXCI6IFwiU2F1ZGkgQXJhYmlhLEpvcmRhblwiLFxuICAgICAgXCJpZFwiOiAyNixcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklzcmFlbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJc3JhZWxcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkpvcmRhbixMZWJhbm9uLFN5cmlhXCIsXG4gICAgICBcImlkXCI6IDI3LFxuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXNcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJKb3JkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSm9yZGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTYXVkaSBBcmFiaWEsTGViYW5vblwiLFxuICAgICAgXCJpZFwiOiAyOCxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImpvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwialwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMZWJhbm9uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkxlYmFub25cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlN5cmlhXCIsXG4gICAgICBcImlkXCI6IDI5LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibGVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMaWJ5YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJMaWJ5YVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVHVuaXNpYVwiLFxuICAgICAgXCJpZFwiOiAzMCxcbiAgICAgIFwieFwiOiA2ODAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImxpXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibGlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNhdWRpIEFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAzMSxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN5cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN5cmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMSxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMzIsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzeVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInN5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFmZ2hhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjogMzMsXG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhZlwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBdXN0cmFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogNCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1hbGF5c2lhXCIsXG4gICAgICBcImlkXCI6IDM0LFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYXVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhdVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCdXJtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCdXJtYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkluZGlhLExhb3NcXC9DYW1ib2RpYVwiLFxuICAgICAgXCJpZFwiOiAzNSxcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJ1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImlkXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOiAzNixcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluZG9uZXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpc1wiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1hbGF5c2lhLFBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJpZFwiOiAzNyxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkphcGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkphcGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQaGlsbGlwcGluZXMsUyBLb3JlYSxUYWl3YW5cIixcbiAgICAgIFwiaWRcIjogMzgsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImphXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwialwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTGFvc1xcL0NhbVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlRoYWlsYW5kLFZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjogMzksXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDI1NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJsYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTWFsYXlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTWFsYXlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJpZFwiOiA0MCxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTiBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOLktvcmVhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibmtcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAzLFxuICAgICAgXCJsaW5rc1wiOiBcIlMgS29yZWFcIixcbiAgICAgIFwiaWRcIjogNDEsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDIsXG4gICAgICBcInhcIjogODQwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQaGlsbGlwXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQzLFxuICAgICAgXCJ4XCI6IDkyMCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwaFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlMgS29yZWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUy5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNrXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUYWl3YW5cIixcbiAgICAgIFwiaWRcIjogNDQsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFpd2FuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlRhaXdhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQ1LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAxMjgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjogNDYsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidGhcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJWaWV0bmFtXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlZpZXRuYW1cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDcsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFsZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWxnZXJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTW9yb2NjbyxUdW5pc2lhLFNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6IDQ4LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYWxcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBbmdvbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQW5nb2xhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJCb3Rzd2FuYSxTb3V0aCBBZnJpY2EsWmFpcmVcIixcbiAgICAgIFwiaWRcIjogNDksXG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhblwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvdHN3YW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJvdHN3YW5hXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTb3V0aCBBZnJpY2EsWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjogNTAsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJib1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2FtZXJvb25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ2FtZXJvb25cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk5pZ2VyaWEsWmFpcmVcIixcbiAgICAgIFwiaWRcIjogNTEsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRXRoaW9waWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRXRoaW9waWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlN1ZGFuLFNvbWFsaWFcIixcbiAgICAgIFwiaWRcIjogNTIsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJldFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXZvcnkgQ29hc3RcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXZvcnkgQ1wiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiV2VzdCBBZnJpY2EsTmlnZXJpYVwiLFxuICAgICAgXCJpZFwiOiA1MyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIml2XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJLZW55YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJLZW55YVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU29tYWxpYSxTRSBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjogNTQsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJrZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImtcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTW9yb2Njb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNb3JvY2NvXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJpZFwiOiA1NSxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1vXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJOaWdlcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk5pZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6IDU2LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNFIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTRSBBZnJpY2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlppbWJhYndlXCIsXG4gICAgICBcImlkXCI6IDU3LFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTYWhhcmEgU1wiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNTgsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTb21hbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNvbWFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA1OSxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNvdXRoIEFmXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MCxcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1ZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN1ZGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjEsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInN1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlR1bmlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVHVuaXNpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDYyLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidHVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIldlc3QgQWZcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIndlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwid1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJaYWlyZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJaYWlyZVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjogNjQsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ6YVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInphXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlppbWJhYndlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlppbWJhYndlXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjUsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ6aVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInppXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvc3RhIFJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ29zdGEgUlwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsTmljYXJhZ3VhLFBhbmFtYVwiLFxuICAgICAgXCJpZFwiOiA2NixcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ3ViYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDdWJhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIYWl0aSxOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjogNjcsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImN1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRG9taW5pYyBSXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIYWl0aVwiLFxuICAgICAgXCJpZFwiOiA2OCxcbiAgICAgIFwieFwiOiAyODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImRvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFbCBTYWx2YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFbCBTYWx2YVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsR3VhdGVtYWxhXCIsXG4gICAgICBcImlkXCI6IDY5LFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlbFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsTWV4aWNvXCIsXG4gICAgICBcImlkXCI6IDcwLFxuICAgICAgXCJ4XCI6IDEyMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZ3VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkhhaXRpXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkhhaXRpXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNzEsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJoYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkhvbmR1cmFzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkhvbmR1cmFzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjogNzIsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJob1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1leGljb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNZXhpY29cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA3MyxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibWVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOaWNhcmFndWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA3NCxcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm5pXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQYW5hbWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGFuYW1hXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJDb2x1bWJpYVwiLFxuICAgICAgXCJpZFwiOiA3NSxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBcmdlbnRpbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXJnZW50aW5hXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJDaGlsZSxQYXJhZ3VheSxVcnVndWF5XCIsXG4gICAgICBcImlkXCI6IDc2LFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA2NDAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYXJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvbGl2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQm9saXZpYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGFyYWd1YXksUGVydVwiLFxuICAgICAgXCJpZFwiOiA3NyxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTEyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYm9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQnJhemlsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJyYXppbFwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVXJ1Z3VheSxWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjogNzgsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJiclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNoaWxlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNoaWxlXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQZXJ1XCIsXG4gICAgICBcImlkXCI6IDc5LFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjaFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvbHVtYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNvbHVtYmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJFY3VhZG9yLFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOiA4MCxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNDQ4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRWN1YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFY3VhZG9yXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQZXJ1XCIsXG4gICAgICBcImlkXCI6IDgxLFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlY1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGFyYWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGFyYWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVydWd1YXlcIixcbiAgICAgIFwiaWRcIjogODIsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDU3NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBlcnVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGVydVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDgzLFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVydWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVXJ1Z3VheVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDg0LFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidXJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJWZW5lenVlbGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA4NSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInZlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidlwiXG4gICAgfVxuICBdLFxuICBcInJlZ2lvbkluZm9Ob2Rlc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcImV1XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwibmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIFwiV1wiXG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA1LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwibWVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWlkIEVhc3RcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTWlkIEVhc3RcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDdcbiAgICAgIF0sXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA2LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYVwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICA5XG4gICAgICBdLFxuICAgICAgXCJleHRyYVwiOiBcIjEgcGVyIFNFIGNvdW50cnksIDIgZm9yIFRoYWlsYW5kXCIsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDYsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhZlwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZlwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA1LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiY2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgNVxuICAgICAgXSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwibmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDZcbiAgICAgIF0sXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9XG4gIF0sXG4gIFwibGlua3NcIjogW1xuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiA1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiQ2FuYWRhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiA2NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkN1YmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMCxcbiAgICAgIFwidGFyZ2V0XCI6IDczLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiAzOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkphcGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiAzMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJGaW5sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiA0MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJOIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDE2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogMTIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDEzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzLFxuICAgICAgXCJ0YXJnZXRcIjogMjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQsXG4gICAgICBcInRhcmdldFwiOiAxOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0LFxuICAgICAgXCJ0YXJnZXRcIjogMTEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIkdyZWVjZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNSxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FuYWRhXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDYsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2LFxuICAgICAgXCJ0YXJnZXRcIjogOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2LFxuICAgICAgXCJ0YXJnZXRcIjogMTIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcsXG4gICAgICBcInRhcmdldFwiOiAxOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogOCxcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA5LFxuICAgICAgXCJ0YXJnZXRcIjogMTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGaW5sYW5kXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiQWxnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMTMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiAxNyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlNwYWluXFwvUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDExLFxuICAgICAgXCJ0YXJnZXRcIjogMTMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTEsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDExLFxuICAgICAgXCJ0YXJnZXRcIjogMTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEyLFxuICAgICAgXCJ0YXJnZXRcIjogMTYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTIsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMyxcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMyxcbiAgICAgIFwidGFyZ2V0XCI6IDE3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJTcGFpblxcL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNCxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE0LFxuICAgICAgXCJ0YXJnZXRcIjogMTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE2LFxuICAgICAgXCJ0YXJnZXRcIjogMTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNixcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE3LFxuICAgICAgXCJ0YXJnZXRcIjogNTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJTcGFpblxcL1BvcnR1Z2FsXCIsXG4gICAgICAgIFwiTW9yb2Njb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxOSxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVHVya2V5XCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjMsXG4gICAgICBcInRhcmdldFwiOiAyNyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiSXNyYWVsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyMyxcbiAgICAgIFwidGFyZ2V0XCI6IDMwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJMaWJ5YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjMsXG4gICAgICBcInRhcmdldFwiOiA2MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjQsXG4gICAgICBcInRhcmdldFwiOiAyNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjQsXG4gICAgICBcInRhcmdldFwiOiAzMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNSxcbiAgICAgIFwidGFyZ2V0XCI6IDI2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI1LFxuICAgICAgXCJ0YXJnZXRcIjogMzMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjUsXG4gICAgICBcInRhcmdldFwiOiA0MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNixcbiAgICAgIFwidGFyZ2V0XCI6IDMxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjYsXG4gICAgICBcInRhcmdldFwiOiAyOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI3LFxuICAgICAgXCJ0YXJnZXRcIjogMjgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI3LFxuICAgICAgXCJ0YXJnZXRcIjogMjksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNyxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI4LFxuICAgICAgXCJ0YXJnZXRcIjogMzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI4LFxuICAgICAgXCJ0YXJnZXRcIjogMjksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyOSxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGViYW5vblwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzMCxcbiAgICAgIFwidGFyZ2V0XCI6IDYyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGlieWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDMzLFxuICAgICAgXCJ0YXJnZXRcIjogNDIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNCxcbiAgICAgIFwidGFyZ2V0XCI6IDQwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM1LFxuICAgICAgXCJ0YXJnZXRcIjogMzYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdXJtYVwiLFxuICAgICAgICBcIkluZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNSxcbiAgICAgIFwidGFyZ2V0XCI6IDM5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJMYW9zXFwvQ2FtYm9kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM2LFxuICAgICAgXCJ0YXJnZXRcIjogNDIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJbmRpYVwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNyxcbiAgICAgIFwidGFyZ2V0XCI6IDQwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM3LFxuICAgICAgXCJ0YXJnZXRcIjogNDMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM4LFxuICAgICAgXCJ0YXJnZXRcIjogNDMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzgsXG4gICAgICBcInRhcmdldFwiOiA0NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzgsXG4gICAgICBcInRhcmdldFwiOiA0NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOSxcbiAgICAgIFwidGFyZ2V0XCI6IDQ2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGFvc1xcL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM5LFxuICAgICAgXCJ0YXJnZXRcIjogNDcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJWaWV0bmFtXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0MCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTWFsYXlzaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDEsXG4gICAgICBcInRhcmdldFwiOiA0NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk4gS29yZWFcIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0NCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUyBLb3JlYVwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDYsXG4gICAgICBcInRhcmdldFwiOiA0NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlRoYWlsYW5kXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDgsXG4gICAgICBcInRhcmdldFwiOiA1NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OCxcbiAgICAgIFwidGFyZ2V0XCI6IDYyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ4LFxuICAgICAgXCJ0YXJnZXRcIjogNTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ5LFxuICAgICAgXCJ0YXJnZXRcIjogNTAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJCb3Rzd2FuYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDksXG4gICAgICBcInRhcmdldFwiOiA2MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDksXG4gICAgICBcInRhcmdldFwiOiA2NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MCxcbiAgICAgIFwidGFyZ2V0XCI6IDYwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUwLFxuICAgICAgXCJ0YXJnZXRcIjogNjUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MSxcbiAgICAgIFwidGFyZ2V0XCI6IDU2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MSxcbiAgICAgIFwidGFyZ2V0XCI6IDY0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTIsXG4gICAgICBcInRhcmdldFwiOiA2MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkV0aGlvcGlhXCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUyLFxuICAgICAgXCJ0YXJnZXRcIjogNTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUzLFxuICAgICAgXCJ0YXJnZXRcIjogNjMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MyxcbiAgICAgIFwidGFyZ2V0XCI6IDU2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXZvcnkgQ29hc3RcIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NCxcbiAgICAgIFwidGFyZ2V0XCI6IDU5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NCxcbiAgICAgIFwidGFyZ2V0XCI6IDU3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTRSBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU1LFxuICAgICAgXCJ0YXJnZXRcIjogNjMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJNb3JvY2NvXCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU2LFxuICAgICAgXCJ0YXJnZXRcIjogNTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOaWdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU3LFxuICAgICAgXCJ0YXJnZXRcIjogNjUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJTRSBBZnJpY2FcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjQsXG4gICAgICBcInRhcmdldFwiOiA2NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlphaXJlXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY2LFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY2LFxuICAgICAgXCJ0YXJnZXRcIjogNzQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NixcbiAgICAgIFwidGFyZ2V0XCI6IDc1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIlBhbmFtYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjcsXG4gICAgICBcInRhcmdldFwiOiA3MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjcsXG4gICAgICBcInRhcmdldFwiOiA3NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY4LFxuICAgICAgXCJ0YXJnZXRcIjogNzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJEb21pbmljYW4gUmVwXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY5LFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2OSxcbiAgICAgIFwidGFyZ2V0XCI6IDcwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJHdWF0ZW1hbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcwLFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzAsXG4gICAgICBcInRhcmdldFwiOiA3MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzIsXG4gICAgICBcInRhcmdldFwiOiA3NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkhvbmR1cmFzXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NSxcbiAgICAgIFwidGFyZ2V0XCI6IDgwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUGFuYW1hXCIsXG4gICAgICAgIFwiQ29sdW1iaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzYsXG4gICAgICBcInRhcmdldFwiOiA3OSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIkNoaWxlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NixcbiAgICAgIFwidGFyZ2V0XCI6IDgyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc2LFxuICAgICAgXCJ0YXJnZXRcIjogODQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NyxcbiAgICAgIFwidGFyZ2V0XCI6IDgyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NyxcbiAgICAgIFwidGFyZ2V0XCI6IDgzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc4LFxuICAgICAgXCJ0YXJnZXRcIjogODQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3OCxcbiAgICAgIFwidGFyZ2V0XCI6IDg1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3OSxcbiAgICAgIFwidGFyZ2V0XCI6IDgzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2hpbGVcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MCxcbiAgICAgIFwidGFyZ2V0XCI6IDgxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJFY3VhZG9yXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MCxcbiAgICAgIFwidGFyZ2V0XCI6IDg1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgxLFxuICAgICAgXCJ0YXJnZXRcIjogODMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFY3VhZG9yXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogODIsXG4gICAgICBcInRhcmdldFwiOiA4NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlBhcmFndWF5XCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH1cbiAgXSxcbiAgXCJjb3VudHJ5U2hvcnRjdXRzXCI6IHtcbiAgICBcImVcIjogW1xuICAgICAgXCJhdVwiLFxuICAgICAgXCJiZVwiLFxuICAgICAgXCJidVwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjelwiLFxuICAgICAgXCJkZVwiLFxuICAgICAgXCJlZ1wiLFxuICAgICAgXCJmaVwiLFxuICAgICAgXCJmclwiLFxuICAgICAgXCJnclwiLFxuICAgICAgXCJodVwiLFxuICAgICAgXCJpdFwiLFxuICAgICAgXCJub1wiLFxuICAgICAgXCJwb1wiLFxuICAgICAgXCJyb1wiLFxuICAgICAgXCJzcFwiLFxuICAgICAgXCJzd1wiLFxuICAgICAgXCJ0dVwiLFxuICAgICAgXCJ1a1wiLFxuICAgICAgXCJ3Z1wiLFxuICAgICAgXCJ5dVwiXG4gICAgXSxcbiAgICBcIm1cIjogW1xuICAgICAgXCJlZ1wiLFxuICAgICAgXCJndVwiLFxuICAgICAgXCJpblwiLFxuICAgICAgXCJpcVwiLFxuICAgICAgXCJpc1wiLFxuICAgICAgXCJqb1wiLFxuICAgICAgXCJsZVwiLFxuICAgICAgXCJsaVwiLFxuICAgICAgXCJzYVwiLFxuICAgICAgXCJzeVwiXG4gICAgXSxcbiAgICBcImFcIjogW1xuICAgICAgXCJhZlwiLFxuICAgICAgXCJhdVwiLFxuICAgICAgXCJidVwiLFxuICAgICAgXCJpZFwiLFxuICAgICAgXCJpc1wiLFxuICAgICAgXCJqYVwiLFxuICAgICAgXCJsYVwiLFxuICAgICAgXCJtYVwiLFxuICAgICAgXCJua1wiLFxuICAgICAgXCJwYVwiLFxuICAgICAgXCJwaFwiLFxuICAgICAgXCJza1wiLFxuICAgICAgXCJ0YVwiLFxuICAgICAgXCJ0aFwiLFxuICAgICAgXCJ2aVwiXG4gICAgXSxcbiAgICBcImZcIjogW1xuICAgICAgXCJhbFwiLFxuICAgICAgXCJhblwiLFxuICAgICAgXCJib1wiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJldFwiLFxuICAgICAgXCJpdlwiLFxuICAgICAgXCJrZVwiLFxuICAgICAgXCJtb1wiLFxuICAgICAgXCJuaVwiLFxuICAgICAgXCJzZVwiLFxuICAgICAgXCJzc1wiLFxuICAgICAgXCJzb1wiLFxuICAgICAgXCJzYVwiLFxuICAgICAgXCJzdVwiLFxuICAgICAgXCJ0dVwiLFxuICAgICAgXCJ3ZVwiLFxuICAgICAgXCJ6YVwiLFxuICAgICAgXCJ6aVwiXG4gICAgXSxcbiAgICBcImNcIjogW1xuICAgICAgXCJjb1wiLFxuICAgICAgXCJjdVwiLFxuICAgICAgXCJkb1wiLFxuICAgICAgXCJlbFwiLFxuICAgICAgXCJndVwiLFxuICAgICAgXCJoYVwiLFxuICAgICAgXCJob1wiLFxuICAgICAgXCJtZVwiLFxuICAgICAgXCJuaVwiLFxuICAgICAgXCJwYVwiXG4gICAgXSxcbiAgICBcInNcIjogW1xuICAgICAgXCJhclwiLFxuICAgICAgXCJib1wiLFxuICAgICAgXCJiclwiLFxuICAgICAgXCJjaFwiLFxuICAgICAgXCJjb1wiLFxuICAgICAgXCJlY1wiLFxuICAgICAgXCJwYVwiLFxuICAgICAgXCJwZVwiLFxuICAgICAgXCJ1clwiLFxuICAgICAgXCJ2ZVwiXG4gICAgXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicmVnaW9uSW5mb05vZGVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkXCI6IFwiZXVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXVyb3BlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVcIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDcsXCJXXCJdLFxuICAgICAgXCJ4XCI6IDQ0MCwgXCJ5XCI6IDI4OCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcIm1lXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibVwiLFxuICAgICAgXCJwb2ludHNcIjogWzMsNSw3XSxcbiAgICAgIFwieFwiOiAxMDQwLCBcInlcIjogNDgwLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjYsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9LCBcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYVwiLFxuICAgICAgXCJwb2ludHNcIjogWzMsNyw5XSxcbiAgICAgIFwiZXh0cmFcIjogXCIxIHBlciBTRSBjb3VudHJ5LCAyIGZvciBUaGFpbGFuZFwiLFxuICAgICAgXCJ4XCI6IDg4MCwgXCJ5XCI6IDE2MCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo2LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImFmXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwibmFtZVwiOiBcIkFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSw0LDZdLFxuICAgICAgXCJ4XCI6IDUyMCwgXCJ5XCI6IDU0NCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwibmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSwzLDVdLFxuICAgICAgXCJ4XCI6IDI0MCwgXCJ5XCI6IDM1MixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwibmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzXCIsXG4gICAgICBcInBvaW50c1wiOiBbMiw1LDZdLFxuICAgICAgXCJ4XCI6IDI0MCwgXCJ5XCI6IDY3MixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfVxuICBdLFxuXG4gIFwiY291bnRyeVBvc2l0aW9uc1wiOiB7XG4gICAgXCJVU0FcIjoge1xuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiA2NFxuICAgIH0sXG4gICAgXCJVU1NSXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkF1c3RyaWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiQmVuZWx1eFwiOiB7XG4gICAgICBcInhcIjogNDAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJCdWxnYXJpYVwiOiB7XG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJDYW5hZGFcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJDemVjaG9zbG92YWtpYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJEZW5tYXJrXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkUgR2VybWFueVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJGaW5sYW5kXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiRnJhbmNlXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkdyZWVjZVwiOiB7XG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJIdW5nYXJ5XCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkl0YWx5XCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIk5vcndheVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlBvbGFuZFwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJSb21hbmlhXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIlNwYWluL1BvcnR1Z2FsXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIlN3ZWRlblwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlR1cmtleVwiOiB7XG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJVS1wiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJXIEdlcm1hbnlcIjoge1xuICAgICAgXCJ4XCI6IDQ4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiWXVnb3NsYXZpYVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJFZ3lwdFwiOiB7XG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJHdWxmIFN0YXRlc1wiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiSXJhblwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJJcmFxXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIklzcmFlbFwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJKb3JkYW5cIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiTGViYW5vblwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJMaWJ5YVwiOiB7XG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJTYXVkaSBBcmFiaWFcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIlN5cmlhXCI6IHtcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkFmZ2hhbmlzdGFuXCI6IHtcbiAgICAgIFwieFwiOiA3NjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkF1c3RyYWxpYVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJCdXJtYVwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJJbmRpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJJbmRvbmVzaWFcIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiSmFwYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NFxuICAgIH0sXG4gICAgXCJMYW9zL0NhbWJvZGlhXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMjU2XG4gICAgfSxcbiAgICBcIk1hbGF5c2lhXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJOIEtvcmVhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIlBha2lzdGFuXCI6IHtcbiAgICAgIFwieFwiOiA4NDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIlBoaWxsaXBwaW5lc1wiOiB7XG4gICAgICBcInhcIjogOTIwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlMgS29yZWFcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJUYWl3YW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAxMjhcbiAgICB9LFxuICAgIFwiVGhhaWxhbmRcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIlZpZXRuYW1cIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkFsZ2VyaWFcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiQW5nb2xhXCI6IHtcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIkJvdHN3YW5hXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkNhbWVyb29uXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIkV0aGlvcGlhXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkl2b3J5IENvYXN0XCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIktlbnlhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIk1vcm9jY29cIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiTmlnZXJpYVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJTRSBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiU2FoYXJhbiBTdGF0ZXNcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiU29tYWxpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJTb3V0aCBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiU3VkYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiVHVuaXNpYVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJXZXN0IEFmcmljYVwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJaYWlyZVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJaaW1iYWJ3ZVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJDb3N0YSBSaWNhXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkN1YmFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiRG9taW5pY2FuIFJlcFwiOiB7XG4gICAgICBcInhcIjogMjgwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJFbCBTYWx2YWRvclwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkd1YXRlbWFsYVwiOiB7XG4gICAgICBcInhcIjogMTIwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJIYWl0aVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJIb25kdXJhc1wiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJNZXhpY29cIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJOaWNhcmFndWFcIjoge1xuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiUGFuYW1hXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIkFyZ2VudGluYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDY0MFxuICAgIH0sXG4gICAgXCJCb2xpdmlhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTEyXG4gICAgfSxcbiAgICBcIkJyYXppbFwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJDaGlsZVwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkNvbHVtYmlhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNDQ4XG4gICAgfSxcbiAgICBcIkVjdWFkb3JcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJQYXJhZ3VheVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDU3NlxuICAgIH0sXG4gICAgXCJQZXJ1XCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiVXJ1Z3VheVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJWZW5lenVlbGFcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9XG4gIH0sXG4gIFwiY291bnRyaWVzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjpcIlVTQVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVTQVwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6XCJ1c2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJ1c2FcIixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNhbmFkYSxDdWJhLE1leGljbyxKYXBhblwiLFxuICAgICAgXCJpZFwiOjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJVU1NSXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVVNTUlwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6XCJ1c3NyXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwidXNzclwiLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQWZnaGFuaXN0YW4sRmlubGFuZCxOIEtvcmVhLFBvbGFuZCxSb21hbmlhXCIsXG4gICAgICBcImlkXCI6MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6XCJBdXN0cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQXVzdHJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJFIEdlcm1hbnksSHVuZ2FyeSxJdGFseSxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjoyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQmVuZWx1eFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJlbmVsdXhcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlcgR2VybWFueSxVS1wiLFxuICAgICAgXCJpZFwiOjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCdWxnYXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJ1bGdhcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUdXJrZXksR3JlZWNlXCIsXG4gICAgICBcImlkXCI6NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNhbmFkYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNhbmFkYVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjIsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVUtcIixcbiAgICAgIFwiaWRcIjo1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDemVjaFwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUG9sYW5kLEUgR2VybWFueSxIdW5nYXJ5XCIsXG4gICAgICBcImlkXCI6NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkRlbm1hcmtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJEZW5tYXJrXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXIEdlcm1hbnksU3dlZGVuXCIsXG4gICAgICBcImlkXCI6N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkUgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkUuR2VybVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiZWdcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MyxcbiAgICAgIFwibGlua3NcIjpcIlBvbGFuZCxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjo4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRmlubGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZpbmxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOlwiU3dlZGVuXCIsXG4gICAgICBcImlkXCI6OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQWxnZXJpYSxVSyxXIEdlcm1hbnksSXRhbHksU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXRhbHksWXVnb3NsYXZpYSxUdXJrZXlcIixcbiAgICAgIFwiaWRcIjoxMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkh1bmdhcnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIdW5nYXJ5XCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJSb21hbmlhLFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjoxMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkl0YWx5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXRhbHlcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIll1Z29zbGF2aWEsU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVUssU3dlZGVuXCIsXG4gICAgICBcImlkXCI6MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUm9tYW5pYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlJvbWFuaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1cmtleSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNwYWluL1BvXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcImlkXCI6MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoxOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlVLXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVUtcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjo1LFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVyBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVy5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6J3dnJyxcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWXVnb3NsYXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIll1Z29zbGF2XCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoyMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVneXB0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWd5cHRcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXNyYWVsLExpYnlhLFN1ZGFuXCIsXG4gICAgICBcImlkXCI6MjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJHdWxmIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkd1bGYgU3RzXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIklyYXEsU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcImlkXCI6MjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJcmFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXJhblwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiaW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXJhcSxBZmdoYW5pc3RhbixQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXJhcVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklyYXFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlxXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MSxcbiAgICAgIFwibGlua3NcIjpcIlNhdWRpIEFyYWJpYSxKb3JkYW5cIixcbiAgICAgIFwiaWRcIjoyNlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIklzcmFlbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklzcmFlbFwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJKb3JkYW4sTGViYW5vbixTeXJpYVwiLFxuICAgICAgXCJpZFwiOjI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSm9yZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSm9yZGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNhdWRpIEFyYWJpYSxMZWJhbm9uXCIsXG4gICAgICBcImlkXCI6MjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMZWJhbm9uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGViYW5vblwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTeXJpYVwiLFxuICAgICAgXCJpZFwiOjI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTGlieWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJMaWJ5YVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcImlkXCI6MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTYXVkaSBBcmFiaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTYXVkaSBBXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3lyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTeXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjEsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjozMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQWZnaGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6MzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBdXN0cmFsaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBdXN0cmFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjQsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwiaWRcIjozNFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJ1cm1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQnVybWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkluZGlhLExhb3MvQ2FtYm9kaWFcIixcbiAgICAgIFwiaWRcIjozNVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkluZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlkXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6MzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlzXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNYWxheXNpYSxQaGlsbGlwcGluZXNcIixcbiAgICAgIFwiaWRcIjozN1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkphcGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSmFwYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGhpbGxpcHBpbmVzLFMgS29yZWEsVGFpd2FuXCIsXG4gICAgICBcImlkXCI6MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGFvcy9DYW1cIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kLFZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjozOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1hbGF5c2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcImlkXCI6NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTi5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwibmtcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjozLFxuICAgICAgXCJsaW5rc1wiOlwiUyBLb3JlYVwiLFxuICAgICAgXCJpZFwiOjQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGFraXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBoaWxsaXBcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUyBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlMuS29yZWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcInNrXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRhaXdhblwiLFxuICAgICAgXCJpZFwiOjQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVGFpd2FuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVGFpd2FuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVGhhaWxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUaGFpbGFuZFwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVmlldG5hbVwiLFxuICAgICAgXCJpZFwiOjQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVmlldG5hbVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQWxnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkFsZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTW9yb2NjbyxUdW5pc2lhLFNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6NDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBbmdvbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBbmdvbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQm90c3dhbmEsU291dGggQWZyaWNhLFphaXJlXCIsXG4gICAgICBcImlkXCI6NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCb3Rzd2FuYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJvdHN3YW5hXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNvdXRoIEFmcmljYSxaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ2FtZXJvb25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDYW1lcm9vblwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJOaWdlcmlhLFphaXJlXCIsXG4gICAgICBcImlkXCI6NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFdGhpb3BpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkV0aGlvcGlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlN1ZGFuLFNvbWFsaWFcIixcbiAgICAgIFwiaWRcIjo1MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkl2b3J5IENvYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXZvcnkgQ1wiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXZXN0IEFmcmljYSxOaWdlcmlhXCIsXG4gICAgICBcImlkXCI6NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJLZW55YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIktlbnlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNvbWFsaWEsU0UgQWZyaWNhXCIsXG4gICAgICBcImlkXCI6NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTW9yb2Njb1wiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJpZFwiOjU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTmlnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5pZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwiaWRcIjo1NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNFIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNFIEFmcmljYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTYWhhcmEgU1wiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwic3NcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTb21hbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU29tYWxpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo1OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNvdXRoIEFmXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJzYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlN1ZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU3VkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVHVuaXNpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiV2VzdCBBZlwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlphaXJlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiWmFpcmVcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo2NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlppbWJhYndlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiWmltYmFid2VcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDb3N0YSBSaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ29zdGEgUlwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxOaWNhcmFndWEsUGFuYW1hXCIsXG4gICAgICBcImlkXCI6NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDdWJhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ3ViYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIYWl0aSxOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjo2N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJEb21pbmljIFJcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSGFpdGlcIixcbiAgICAgIFwiaWRcIjo2OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVsIFNhbHZhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWwgU2FsdmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSG9uZHVyYXMsR3VhdGVtYWxhXCIsXG4gICAgICBcImlkXCI6NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJHdWF0ZW1hbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJHdWF0ZW1hbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSG9uZHVyYXMsTWV4aWNvXCIsXG4gICAgICBcImlkXCI6NzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJIYWl0aVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkhhaXRpXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSG9uZHVyYXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIb25kdXJhc1wiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjo3MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1leGljb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk1leGljb1wiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo3M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo3NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBhbmFtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBhbmFtYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJDb2x1bWJpYVwiLFxuICAgICAgXCJpZFwiOjc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQXJnZW50aW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQXJnZW50aW5hXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNoaWxlLFBhcmFndWF5LFVydWd1YXlcIixcbiAgICAgIFwiaWRcIjo3NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJvbGl2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCb2xpdmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBhcmFndWF5LFBlcnVcIixcbiAgICAgIFwiaWRcIjo3N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJyYXppbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJyYXppbFwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJVcnVndWF5LFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOjc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ2hpbGVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDaGlsZVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQZXJ1XCIsXG4gICAgICBcImlkXCI6NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDb2x1bWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkVjdWFkb3IsVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFY3VhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWN1YWRvclwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQZXJ1XCIsXG4gICAgICBcImlkXCI6ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQYXJhZ3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBhcmFndWF5XCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVydWd1YXlcIixcbiAgICAgIFwiaWRcIjo4MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBlcnVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQZXJ1XCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVydWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJWZW5lenVlbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJWZW5lenVlbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODVcbiAgICB9XG4gIF0sXG5cbiAgXCJsaW5rc1wiOiBbXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjo1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDYW5hZGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjY3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDdWJhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjo3MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjozOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiSmFwYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjMzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJGaW5sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjo0MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIk4gS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjE1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjoxNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJFIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoxMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoxMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQmVuZWx1eFwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0LFxuICAgICAgXCJ0YXJnZXRcIjoxOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0LFxuICAgICAgXCJ0YXJnZXRcIjoxMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJHcmVlY2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1LFxuICAgICAgXCJ0YXJnZXRcIjoyMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FuYWRhXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2LFxuICAgICAgXCJ0YXJnZXRcIjoxNSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2LFxuICAgICAgXCJ0YXJnZXRcIjo4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjEyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3LFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRGVubWFya1wiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcsXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6OCxcbiAgICAgIFwidGFyZ2V0XCI6MTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFIEdlcm1hbnlcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo5LFxuICAgICAgXCJ0YXJnZXRcIjoxOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRmlubGFuZFwiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjo0OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiQWxnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjEzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoxNyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MTMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTEsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTEsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMixcbiAgICAgIFwidGFyZ2V0XCI6MTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJSb21hbmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTIsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEzLFxuICAgICAgXCJ0YXJnZXRcIjoyMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTMsXG4gICAgICBcInRhcmdldFwiOjE3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIlNwYWluL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTQsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE0LFxuICAgICAgXCJ0YXJnZXRcIjoxOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTYsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTYsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE3LFxuICAgICAgXCJ0YXJnZXRcIjo1NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxOSxcbiAgICAgIFwidGFyZ2V0XCI6MzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlR1cmtleVwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6MjcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiSXNyYWVsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjMsXG4gICAgICBcInRhcmdldFwiOjMwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIkxpYnlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjMsXG4gICAgICBcInRhcmdldFwiOjYxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNCxcbiAgICAgIFwidGFyZ2V0XCI6MjYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI0LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNSxcbiAgICAgIFwidGFyZ2V0XCI6MjYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjUsXG4gICAgICBcInRhcmdldFwiOjMzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI1LFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNixcbiAgICAgIFwidGFyZ2V0XCI6MzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNixcbiAgICAgIFwidGFyZ2V0XCI6MjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNyxcbiAgICAgIFwidGFyZ2V0XCI6MjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjoyOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyOCxcbiAgICAgIFwidGFyZ2V0XCI6MzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkpvcmRhblwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI4LFxuICAgICAgXCJ0YXJnZXRcIjoyOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI5LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGViYW5vblwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzAsXG4gICAgICBcInRhcmdldFwiOjYyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMaWJ5YVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMzLFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM0LFxuICAgICAgXCJ0YXJnZXRcIjo0MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNSxcbiAgICAgIFwidGFyZ2V0XCI6MzYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiSW5kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNSxcbiAgICAgIFwidGFyZ2V0XCI6MzksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM2LFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kaWFcIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM3LFxuICAgICAgXCJ0YXJnZXRcIjo0MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNyxcbiAgICAgIFwidGFyZ2V0XCI6NDMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOCxcbiAgICAgIFwidGFyZ2V0XCI6NDQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOSxcbiAgICAgIFwidGFyZ2V0XCI6NDYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxhb3MvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM5LFxuICAgICAgXCJ0YXJnZXRcIjo0NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0MCxcbiAgICAgIFwidGFyZ2V0XCI6NDYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk1hbGF5c2lhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0MSxcbiAgICAgIFwidGFyZ2V0XCI6NDQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk4gS29yZWFcIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDQsXG4gICAgICBcInRhcmdldFwiOjQ1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTIEtvcmVhXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDYsXG4gICAgICBcInRhcmdldFwiOjQ3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJUaGFpbGFuZFwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OCxcbiAgICAgIFwidGFyZ2V0XCI6NTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDgsXG4gICAgICBcInRhcmdldFwiOjYyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ4LFxuICAgICAgXCJ0YXJnZXRcIjo1OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjUwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJCb3Rzd2FuYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ5LFxuICAgICAgXCJ0YXJnZXRcIjo2MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiU291dGggQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjY0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUwLFxuICAgICAgXCJ0YXJnZXRcIjo2MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MCxcbiAgICAgIFwidGFyZ2V0XCI6NjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvdHN3YW5hXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MSxcbiAgICAgIFwidGFyZ2V0XCI6NTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUxLFxuICAgICAgXCJ0YXJnZXRcIjo2NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUyLFxuICAgICAgXCJ0YXJnZXRcIjo2MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTdWRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUyLFxuICAgICAgXCJ0YXJnZXRcIjo1OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTMsXG4gICAgICBcInRhcmdldFwiOjYzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTMsXG4gICAgICBcInRhcmdldFwiOjU2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIk5pZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NCxcbiAgICAgIFwidGFyZ2V0XCI6NTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiU29tYWxpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU0LFxuICAgICAgXCJ0YXJnZXRcIjo1NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTRSBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NSxcbiAgICAgIFwidGFyZ2V0XCI6NjMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk1vcm9jY29cIixcbiAgICAgICAgXCJXZXN0IEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU2LFxuICAgICAgXCJ0YXJnZXRcIjo1OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTmlnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTcsXG4gICAgICBcInRhcmdldFwiOjY1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTRSBBZnJpY2FcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY0LFxuICAgICAgXCJ0YXJnZXRcIjo2NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiWmFpcmVcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY2LFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjc0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjc1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiUGFuYW1hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjcsXG4gICAgICBcInRhcmdldFwiOjcxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDdWJhXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NyxcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2OCxcbiAgICAgIFwidGFyZ2V0XCI6NzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY5LFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY5LFxuICAgICAgXCJ0YXJnZXRcIjo3MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJHdWF0ZW1hbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MCxcbiAgICAgIFwidGFyZ2V0XCI6NzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzAsXG4gICAgICBcInRhcmdldFwiOjczLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MixcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkhvbmR1cmFzXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzUsXG4gICAgICBcInRhcmdldFwiOjgwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJQYW5hbWFcIixcbiAgICAgICAgXCJDb2x1bWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzYsXG4gICAgICBcInRhcmdldFwiOjc5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJDaGlsZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc2LFxuICAgICAgXCJ0YXJnZXRcIjo4MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NixcbiAgICAgIFwidGFyZ2V0XCI6ODQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NyxcbiAgICAgIFwidGFyZ2V0XCI6ODIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvbGl2aWFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc3LFxuICAgICAgXCJ0YXJnZXRcIjo4MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3OCxcbiAgICAgIFwidGFyZ2V0XCI6ODQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3OCxcbiAgICAgIFwidGFyZ2V0XCI6ODUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlZlbmV6dWVsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc5LFxuICAgICAgXCJ0YXJnZXRcIjo4MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2hpbGVcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODAsXG4gICAgICBcInRhcmdldFwiOjgxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb2x1bWJpYVwiLFxuICAgICAgICBcIkVjdWFkb3JcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MCxcbiAgICAgIFwidGFyZ2V0XCI6ODUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODEsXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFY3VhZG9yXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgyLFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUGFyYWd1YXlcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9XG4gIF1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPVtcciAge1xyICAgIFwiaWRcIjoxLFxyICAgIFwidGl0bGVcIjpcIkFzaWEgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiA5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE0L3JlZ2lvbnMtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyLFxyICAgIFwidGl0bGVcIjpcIkV1cm9wZSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDc7IENvbnRyb2w6IEF1dG9tYXRpYyBWaWN0b3J5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL3JlZ2lvbnMtZXVyb3BlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMsXHIgICAgXCJ0aXRsZVwiOlwiTWlkZGxlIEVhc3QgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA1OyBDb250cm9sOiA3OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMTMvcmVnaW9ucy1taWRkbGUtZWFzdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo0LFxyICAgIFwidGl0bGVcIjpcIkR1Y2sgYW5kIENvdmVyXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFRoZSBVUyByZWNlaXZlcyBWUCBlcXVhbCB0byA1IG1pbnVzIHRoZSBjdXJyZW50IERFRkNPTiBsZXZlbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZHVjay1hbmQtY292ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUsXHIgICAgXCJ0aXRsZVwiOlwiRml2ZSBZZWFyIFBsYW5cIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgYSBjYXJkLiBJZiB0aGUgY2FyZCBoYXMgYSBVUyBhc3NvY2lhdGVkIEV2ZW50LCB0aGUgRXZlbnQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiB0aGUgY2FyZCBoYXMgYSBVU1NSIGFzc29jaWF0ZWQgRXZlbnQgb3IgYW4gRXZlbnQgYXBwbGljYWJsZSB0byBib3RoIHBsYXllcnMsIHRoZW4gdGhlIGNhcmQgbXVzdCBiZSBkaXNjYXJkZWQgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZml2ZS15ZWFyLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIENoaW5hIENhcmRcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIGNhcmQgYmVnaW5zIHRoZSBnYW1lIHdpdGggdGhlIFVTU1IuIFdoZW4gcGxheWVkLCB0aGUgcGxheWVyIHJlY2VpdmVzICsxIE9wZXJhdGlvbnMgdG8gdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIGlmIGl0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIEFzaWEuIEl0IGlzIHBhc3NlZCB0byB0aGUgb3Bwb25lbnQgb25jZSBwbGF5ZWQuIEEgcGxheWVyIHJlY2VpdmVzIDEgVlAgZm9yIGhvbGRpbmcgdGhpcyBjYXJkIGF0IHRoZSBlbmQgb2YgVHVybiAxMC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzEvdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiY2FuY2Vsc1wiOiAzNVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcsXHIgICAgXCJ0aXRsZVwiOlwiU29jaWFsaXN0IEdvdmVybm1lbnRzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgMyBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODMg4oCTIFRoZSBJcm9uIExhZHnigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMy9zb2NpYWxpc3QtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYW50aXJlcVwiOiA4M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjgsXHIgICAgXCJ0aXRsZVwiOlwiRmlkZWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBDdWJhLiBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgaW4gQ3ViYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTQvZmlkZWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo5LFxyICAgIFwidGl0bGVcIjpcIlZpZXRuYW0gUmV2b2x0cypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBWaWV0bmFtLiBGb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgcmVjZWl2ZXMgKzEgT3BlcmF0aW9ucyB0byB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiBhIGNhcmQgdGhhdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTYvdmlldG5hbS1yZXZvbHRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAsXHIgICAgXCJ0aXRsZVwiOlwiQmxvY2thZGUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVW5sZXNzIHRoZSBVUyBpbW1lZGlhdGVseSBkaXNjYXJkcyBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSwgcmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE5L2Jsb2NrYWRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEsXHIgICAgXCJ0aXRsZVwiOlwiS29yZWFuIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJOb3J0aCBLb3JlYSBpbnZhZGVzIFNvdXRoIEtvcmVhLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggS29yZWEuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIFNvdXRoIEtvcmVhIHdpdGggVVNTUiBJbmZsdWVuY2UuIFRoZSBVU1NSIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMjUva29yZWFuLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMixcciAgICBcInRpdGxlXCI6XCJSb21hbmlhbiBBYmRpY2F0aW9uKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gUm9tYW5pYS4gVGhlIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBSb21hbmlhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8wMi9yb21hbmlhbi1hYmRpY2F0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTMsXHIgICAgXCJ0aXRsZVwiOlwiQXJhYi1Jc3JhZWxpIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlBhbi1BcmFiIENvYWxpdGlvbiBpbnZhZGVzIElzcmFlbC4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgSXNyYWVsLCBpZiBpdCBpcyBVUyBjb250cm9sbGVkLCBhbmQgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBJc3JhZWwuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIElzcmFlbCB3aXRoIFVTU1IgSW5mbHVlbmNlLiBUaGUgVVNTUiBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM2NSDigJMgQ2FtcCBEYXZpZCBBY2NvcmRz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMTYvYXJhYi1pc3JhZWxpLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTQsXHIgICAgXCJ0aXRsZVwiOlwiQ29tZWNvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIDQgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIG9mIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8yNC9jb21lY29uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTUsXHIgICAgXCJ0aXRsZVwiOlwiTmFzc2VyKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEVneXB0LiBUaGUgVVMgcmVtb3ZlcyBoYWxmLCByb3VuZGVkIHVwLCBvZiBpdHMgSW5mbHVlbmNlIGZyb20gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzA2L25hc3Nlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE2LFxyICAgIFwidGl0bGVcIjpcIldhcnNhdyBQYWN0IEZvcm1lZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIGluZmx1ZW5jZSBmcm9tIDQgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIG9yIGFkZCA1IFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yMC93YXJzYXctcGFjdC1mb3JtZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFsbG93c1wiOiAyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE3LFxyICAgIFwidGl0bGVcIjpcIkRlIEdhdWxsZSBMZWFkcyBGcmFuY2UqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVMgSW5mbHVlbmNlIGZyb20gRnJhbmNlIGFuZCBhZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBGcmFuY2UuIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gRXZlbnQgZm9yIEZyYW5jZSBvbmx5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yNC9kZS1nYXVsbGUtbGVhZHMtZnJhbmNlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDIxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTgsXHIgICAgXCJ0aXRsZVwiOlwiQ2FwdHVyZWQgTmF6aSBTY2llbnRpc3QqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiTW92ZSB0aGUgU3BhY2UgUmFjZSBNYXJrZXIgYWhlYWQgYnkgMSBzcGFjZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjcvY2FwdHVyZWQtbmF6aS1zY2llbnRpc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxOSxcciAgICBcInRpdGxlXCI6XCJUcnVtYW4gRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIGEgc2luZ2xlIHVuY29udHJvbGxlZCBjb3VudHJ5IGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMDIvdHJ1bWFuLWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIwLFxyICAgIFwidGl0bGVcIjpcIk9seW1waWMgR2FtZXNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIHBsYXllciBzcG9uc29ycyB0aGUgT2x5bXBpY3MuIFRoZSBvcHBvbmVudCBtdXN0IGVpdGhlciBwYXJ0aWNpcGF0ZSBvciBib3ljb3R0LiBJZiB0aGUgb3Bwb25lbnQgcGFydGljaXBhdGVzLCBlYWNoIHBsYXllciByb2xscyBhIGRpZSBhbmQgdGhlIHNwb25zb3IgYWRkcyAyIHRvIHRoZWlyIHJvbGwuIFRoZSBwbGF5ZXIgd2l0aCB0aGUgaGlnaGVzdCBtb2RpZmllZCBkaWUgcm9sbCByZWNlaXZlcyAyIFZQIChyZXJvbGwgdGllcykuIElmIHRoZSBvcHBvbmVudCBib3ljb3R0cywgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBzcG9uc29yIG1heSBjb25kdWN0IE9wZXJhdGlvbnMgYXMgaWYgdGhleSBwbGF5ZWQgYSA0IE9wcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMi9vbHltcGljLWdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIxLFxyICAgIFwidGl0bGVcIjpcIk5BVE8qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IGFueSBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUuIFVTIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIEV1cm9wZSBjYW5ub3QgYmUgYXR0YWNrZWQgYnkgcGxheSBvZiB0aGUg4oCcIzM2IOKAkyBCcnVzaCBXYXLigJ0gRXZlbnQuIFRoaXMgY2FyZCByZXF1aXJlcyBwcmlvciBwbGF5IG9mIGVpdGhlciB0aGUg4oCcIzE2IOKAkyBXYXJzYXcgUGFjdCBGb3JtZWTigJ0gb3Ig4oCcIzIzIOKAkyBNYXJzaGFsbCBQbGFu4oCdIEV2ZW50KHMpIGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvbmF0by9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcInByZXJlcVwiOlsxNiwyM10sXHIgICAgXCJhZmZlY3RzXCI6MzZcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMixcciAgICBcInRpdGxlXCI6XCJJbmRlcGVuZGVudCBSZWRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBVUyBJbmZsdWVuY2UgdG8gZWl0aGVyIFl1Z29zbGF2aWEsIFJvbWFuaWEsIEJ1bGdhcmlhLCBIdW5nYXJ5LCBvciBDemVjaG9zbG92YWtpYSBzbyB0aGF0IGl0IGVxdWFscyB0aGUgVVNTUiBJbmZsdWVuY2UgaW4gdGhhdCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMy9pbmRlcGVuZGVudC1yZWRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIzLFxyICAgIFwidGl0bGVcIjpcIk1hcnNoYWxsIFBsYW4qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDcgbm9uLVVTU1IgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE2L21hcnNoYWxsLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhbGxvd3NcIjoyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI0LFxyICAgIFwidGl0bGVcIjpcIkluZG8tUGFraXN0YW5pIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkluZGlhIGludmFkZXMgUGFraXN0YW4gb3IgdmljZSB2ZXJzYSAocGxheWVy4oCZcyBjaG9pY2UpLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBlbmVteSBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgaW52YXNpb24gKEluZGlhIG9yIFBha2lzdGFuKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE5L2luZG8tcGFraXN0YW5pLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjUsXHIgICAgXCJ0aXRsZVwiOlwiQ29udGFpbm1lbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVUywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yMC9jb250YWlubWVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNixcciAgICBcInRpdGxlXCI6XCJDSUEgQ3JlYXRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMgZm9yIHRoaXMgdHVybi4gVGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjYvY2lhLWNyZWF0ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjcsXHIgICAgXCJ0aXRsZVwiOlwiVVMvSmFwYW4gTXV0dWFsIERlZmVuc2UgUGFjdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBKYXBhbiBmb3IgQ29udHJvbC4gVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IEphcGFuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNy91c2phcGFuLW11dHVhbC1kZWZlbnNlLXBhY3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOCxcciAgICBcInRpdGxlXCI6XCJTdWV6IENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSwgdGhlIFVuaXRlZCBLaW5nZG9tIGFuZCBJc3JhZWwgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI5L3N1ZXotY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjksXHIgICAgXCJ0aXRsZVwiOlwiRWFzdCBFdXJvcGVhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJFYXJseSBvciBNaWQgV2FyOiBSZW1vdmUgMSBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLiBMYXRlIFdhcjogUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDIvZWFzdC1ldXJvcGVhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMwLFxyICAgIFwidGl0bGVcIjpcIkRlY29sb25pemF0aW9uXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDUvZGVjb2xvbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzEsXHIgICAgXCJ0aXRsZVwiOlwiUmVkIFNjYXJlL1B1cmdlXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWluaW11bSB2YWx1ZSBvZiAxIE9wZXJhdGlvbnMgcG9pbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8yMy9yZWQtc2NhcmVwdXJnZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMixcciAgICBcInRpdGxlXCI6XCJVTiBJbnRlcnZlbnRpb25cIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJQbGF5IHRoaXMgY2FyZCBzaW11bHRhbmVvdXNseSB3aXRoIGEgY2FyZCBjb250YWluaW5nIGFuIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50LiBUaGUgb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQgaXMgY2FuY2VsZWQgYnV0IHlvdSBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoZSBvcHBvbmVudOKAmXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHBsYXllZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8wNy91bi1pbnRlcnZlbnRpb24vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzMsXHIgICAgXCJ0aXRsZVwiOlwiRGUtU3RhbGluaXphdGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcmVhbGxvY2F0ZSB1cCB0byBhIHRvdGFsIG9mIDQgSW5mbHVlbmNlIGZyb20gb25lIG9yIG1vcmUgY291bnRyaWVzIHRvIGFueSBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8yOS9kZS1zdGFsaW5pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzQsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBUZXN0IEJhblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsIG1pbnVzIDIgdGhlbiBpbXByb3ZlcyB0aGUgREVGQ09OIGxldmVsIGJ5IDIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA2LzExL251Y2xlYXItdGVzdC1iYW4vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzUsXHIgICAgXCJ0aXRsZVwiOlwiRm9ybW9zYW4gUmVzb2x1dGlvbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgVGFpd2FuIHdpbGwgYmUgdHJlYXRlZCBhcyBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5LCBmb3Igc2NvcmluZyBwdXJwb3NlcyBvbmx5LCBpZiBUYWl3YW4gaXMgVVMgY29udHJvbGxlZCB3aGVuIHRoZSBBc2lhIFNjb3JpbmcgQ2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsbGVkIGFmdGVyIHRoZSBVUyBoYXMgcGxheWVkIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDIvZm9ybW9zYW4tcmVzb2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM2LFxyICAgIFwidGl0bGVcIjpcIkJydXNoIFdhclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgYXR0YWNrcyBhbnkgY291bnRyeSB3aXRoIGEgc3RhYmlsaXR5IG51bWJlciBvZiAxIG9yIDIuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGFkamFjZW50IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiAzLTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDMgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L2JydXNoLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzcsXHIgICAgXCJ0aXRsZVwiOlwiQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogMzsgQ29udHJvbDogNTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9yZWdpb25zLWNlbnRyYWwtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOCxcciAgICBcInRpdGxlXCI6XCJTb3V0aGVhc3QgQXNpYSBTY29yaW5nKlwiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIjEgVlAgZWFjaCBmb3IgQ29udHJvbCBvZiBCdXJtYSwgQ2FtYm9kaWEvTGFvcywgVmlldG5hbSwgTWFsYXlzaWEsIEluZG9uZXNpYSBhbmQgdGhlIFBoaWxpcHBpbmVzLiAyIFZQIGZvciBDb250cm9sIG9mIFRoYWlsYW5kOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtc291dGhlYXN0LWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOSxcciAgICBcInRpdGxlXCI6XCJBcm1zIFJhY2VcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJDb21wYXJlIGVhY2ggcGxheWVy4oCZcyB2YWx1ZSBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay4gSWYgdGhlIHBoYXNpbmcgcGxheWVyIGhhcyBhIGhpZ2hlciB2YWx1ZSB0aGFuIHRoZWlyIG9wcG9uZW50IG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAxIFZQLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQsIGFuZCBoYXMgbWV0IHRoZSDigJxyZXF1aXJlZOKAnSBhbW91bnQsIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAzIFZQIGluc3RlYWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA1L2FybXMtcmFjZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MCxcciAgICBcInRpdGxlXCI6XCJDdWJhbiBNaXNzaWxlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJTZXQgdGhlIERFRkNPTiBsZXZlbCB0byAyLiBBbnkgQ291cCBBdHRlbXB0cyBieSB5b3VyIG9wcG9uZW50LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHdpbGwgcmVzdWx0IGluIEdsb2JhbCBUaGVybW9udWNsZWFyIFdhci4gWW91ciBvcHBvbmVudCB3aWxsIGxvc2UgdGhlIGdhbWUuIFRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGJlIGNhbmNlbGVkLCBhdCBhbnkgdGltZSwgaWYgdGhlIFVTU1IgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIEN1YmEgb3IgdGhlIFVTIHJlbW92ZXMgMiBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkgb3IgVHVya2V5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNi9jdWJhbi1taXNzaWxlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQxLFxyICAgIFwidGl0bGVcIjpcIk51Y2xlYXIgU3VicypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJVUyBPcGVyYXRpb25zIHVzZWQgZm9yIENvdXAgQXR0ZW1wdHMgaW4gQmF0dGxlZ3JvdW5kIGNvdW50cmllcywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCBkbyBub3QgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsLiBUaGlzIGNhcmTigJlzIEV2ZW50IGRvZXMgbm90IGFwcGx5IHRvIGFueSBFdmVudCB0aGF0IHdvdWxkIGFmZmVjdCB0aGUgREVGQ09OIGxldmVsIChleC4gdGhlIOKAnCM0MCDigJMgQ3ViYW4gTWlzc2lsZSBDcmlzaXPigJ0gRXZlbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMC9udWNsZWFyLXN1YnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDIsXHIgICAgXCJ0aXRsZVwiOlwiUXVhZ21pcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgaXQgbXVzdCBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCB3aXRoIGEgdmFsdWUgb2YgMiBvciBtb3JlIGFuZCByb2xsIDEtNCBvbiBhIGRpZSB0byBjYW5jZWwgdGhpcyBFdmVudC4gUmVwZWF0IHRoaXMgRXZlbnQgZm9yIGVhY2ggVVMgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVUyBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVMgaXMgdW5hYmxlIHRvIGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkLCBpdCBtdXN0IHBsYXkgYWxsIG9mIGl0cyBzY29yaW5nIGNhcmRzIGFuZCB0aGVuIHNraXAgZWFjaCBhY3Rpb24gcm91bmQgZm9yIHRoZSByZXN0IG9mIHRoZSB0dXJuLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzEwNiDigJMgTk9SQUTigJ0gRXZlbnQgKGlmIGFwcGxpY2FibGUpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMi9xdWFnbWlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDMsXHIgICAgXCJ0aXRsZVwiOlwiU0FMVCBOZWdvdGlhdGlvbnMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDIuIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCBib3RoIHBsYXllcnMgcmVjZWl2ZSAtMSB0byBhbGwgQ291cCBBdHRlbXB0IHJvbGxzLiBUaGUgcGxheWVyIG9mIHRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQsIHJldmVhbCBpdCB0byB0aGVpciBvcHBvbmVudCBhbmQgdGhlbiBwbGFjZSB0aGUgZHJhd24gY2FyZCBpbnRvIHRoZWlyIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE3L3NhbHQtbmVnb3RpYXRpb25zL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NCxcciAgICBcInRpdGxlXCI6XCJCZWFyIFRyYXAqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVTU1LigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVU1NSIGFjdGlvbiByb3VuZCB1bnRpbCB0aGUgVVNTUiBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVNTUiBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE5L2JlYXItdHJhcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ1LFxyICAgIFwidGl0bGVcIjpcIlN1bW1pdFwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkJvdGggcGxheWVycyByb2xsIGEgZGllLiBFYWNoIHBsYXllciByZWNlaXZlcyArMSB0byB0aGUgZGllIHJvbGwgZm9yIGVhY2ggUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoZXkgRG9taW5hdGUgb3IgQ29udHJvbC4gVGhlIHBsYXllciB3aXRoIHRoZSBoaWdoZXN0IG1vZGlmaWVkIGRpZSByb2xsIHJlY2VpdmVzIDIgVlAgYW5kIG1heSBkZWdyYWRlIG9yIGltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIChkbyBub3QgcmVyb2xsIHRpZXMpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNC9zdW1taXQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDYsXHIgICAgXCJ0aXRsZVwiOlwiSG93IEkgTGVhcm5lZCB0byBTdG9wIFdvcnJ5aW5nKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIGFueSBsZXZlbCBkZXNpcmVkICgxLTUpLiBUaGUgcGxheWVyIGFkZHMgNSB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMjYvaG93LWktbGVhcm5lZC10by1zdG9wLXdvcnJ5aW5nL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDcsXHIgICAgXCJ0aXRsZVwiOlwiSnVudGFcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuIFRoZSBwbGF5ZXIgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIGVpdGhlciBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMS9qdW50YS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OCxcciAgICBcInRpdGxlXCI6XCJLaXRjaGVuIERlYmF0ZXMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIG1vcmUgQmF0dGxlZ3JvdW5kIGNvdW50cmllcyB0aGFuIHRoZSBVU1NSLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBwb2tlIHRoZWlyIG9wcG9uZW50IGluIHRoZSBjaGVzdCBhbmQgcmVjZWl2ZSAyIFZQIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMy9raXRjaGVuLWRlYmF0ZXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDksXHIgICAgXCJ0aXRsZVwiOlwiTWlzc2lsZSBFbnZ5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiRXhjaGFuZ2UgdGhpcyBjYXJkIGZvciB5b3VyIG9wcG9uZW504oCZcyBoaWdoZXN0IHZhbHVlIE9wZXJhdGlvbnMgY2FyZC4gSWYgMiBvciBtb3JlIGNhcmRzIGFyZSB0aWVkLCBvcHBvbmVudCBjaG9vc2VzLiBJZiB0aGUgZXhjaGFuZ2VkIGNhcmQgY29udGFpbnMgYW4gRXZlbnQgYXBwbGljYWJsZSB0byB5b3Vyc2VsZiBvciBib3RoIHBsYXllcnMsIGl0IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgaXQgY29udGFpbnMgYW4gb3Bwb25lbnTigJlzIEV2ZW50LCB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgKG5vIEV2ZW50KS4gVGhlIG9wcG9uZW50IG11c3QgdXNlIHRoaXMgY2FyZCBmb3IgT3BlcmF0aW9ucyBkdXJpbmcgdGhlaXIgbmV4dCBhY3Rpb24gcm91bmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzA4L21pc3NpbGUtZW52eS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MCxcciAgICBcInRpdGxlXCI6XCJXZSBXaWxsIEJ1cnkgWW91KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBVbmxlc3MgdGhlICMzMiBVTiBJbnRlcnZlbnRpb24gY2FyZCBpcyBwbGF5ZWQgYXMgYW4gRXZlbnQgb24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMyBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTAvd2Utd2lsbC1idXJ5LXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUxLFxyICAgIFwidGl0bGVcIjpcIkJyZXpobmV2IERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgVVNTUiwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMi9icmV6aG5ldi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUyLFxyICAgIFwidGl0bGVcIjpcIlBvcnR1Z3Vlc2UgRW1waXJlIENydW1ibGVzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEFuZ29sYSBhbmQgdGhlIFNFIEFmcmljYW4gU3RhdGVzLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNS9wb3J0dWd1ZXNlLWVtcGlyZS1jcnVtYmxlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUzLFxyICAgIFwidGl0bGVcIjpcIlNvdXRoIEFmcmljYW4gVW5yZXN0XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgZWl0aGVyIGFkZHMgMiBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIG9yIGFkZHMgMSBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIGFuZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGFkamFjZW50IHRvIFNvdXRoIEFmcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTYvc291dGgtYWZyaWNhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTQsXHIgICAgXCJ0aXRsZVwiOlwiQWxsZW5kZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBDaGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTcvYWxsZW5kZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU1LFxyICAgIFwidGl0bGVcIjpcIldpbGx5IEJyYW5kdCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGFuZCBhZGRzIDEgSW5mbHVlbmNlIHRvIFdlc3QgR2VybWFueS4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBFdmVudCBmb3IgV2VzdCBHZXJtYW55IG9ubHkuIFRoaXMgRXZlbnQgaXMgcHJldmVudGVkIC8gY2FuY2VsZWQgYnkgdGhlIOKAnCM5NiDigJMgVGVhciBEb3duIHRoaXMgV2FsbOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTgvd2lsbHktYnJhbmR0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6OTYsXHIgICAgXCJhZmZlY3RzXCI6MjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NixcciAgICBcInRpdGxlXCI6XCJNdXNsaW0gUmV2b2x1dGlvblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gMiBvZiB0aGUgZm9sbG93aW5nIGNvdW50cmllczogU3VkYW4sIElyYW4sIElyYXEsIEVneXB0LCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBTeXJpYSwgSm9yZGFuLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjMTEwIOKAkyBBV0FDUyBTYWxlIHRvIFNhdWRpc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE5L211c2xpbS1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU3LFxyICAgIFwidGl0bGVcIjpcIkFCTSBUcmVhdHlcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlbiBjb25kdWN0IE9wZXJhdGlvbnMgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yMy9hYm0tdHJlYXR5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU4LFxyICAgIFwidGl0bGVcIjpcIkN1bHR1cmFsIFJldm9sdXRpb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVUyBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTU1IgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSB0byBiZSBwbGF5ZWQpLiBJZiB0aGUgVVNTUiBhbHJlYWR5IGhhcyDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjQvY3VsdHVyYWwtcmV2b2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU5LFxyICAgIFwidGl0bGVcIjpcIkZsb3dlciBQb3dlcipcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAyIFZQIGZvciBldmVyeSBVUyBwbGF5ZWQg4oCcV2Fy4oCdIGNhcmQgKEFyYWItSXNyYWVsaSBXYXIsIEtvcmVhbiBXYXIsIEJydXNoIFdhciwgSW5kby1QYWtpc3RhbmkgV2FyLCBJcmFuLUlyYXEgV2FyKSwgdXNlZCBmb3IgT3BlcmF0aW9ucyBvciBhbiBFdmVudCwgYWZ0ZXIgdGhpcyBjYXJkIGlzIHBsYXllZC4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk3IOKAkyBBbiBFdmlsIEVtcGlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjUvZmxvd2VyLXBvd2VyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6OTdcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MCxcciAgICBcInRpdGxlXCI6XCJVMiBJbmNpZGVudCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBJZiB0aGUg4oCcIzMyIOKAkyBVTiBJbnRlcnZlbnRpb27igJ0gRXZlbnQgaXMgcGxheWVkIGxhdGVyIHRoaXMgdHVybiwgZWl0aGVyIGJ5IHRoZSBVUyBvciB0aGUgVVNTUiwgdGhlIFVTU1IgcmVjZWl2ZXMgYW4gYWRkaXRpb25hbCAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNi91LTItaW5jaWRlbnQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJyZWxhdGVkXCI6MzJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MSxcciAgICBcInRpdGxlXCI6XCJPUEVDXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBmb3IgQ29udHJvbCBvZiBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBFZ3lwdCwgSXJhbiwgTGlieWEsIFNhdWRpIEFyYWJpYSwgSXJhcSwgR3VsZiBTdGF0ZXMsIFZlbmV6dWVsYS4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzg2IOKAkyBOb3J0aCBTZWEgT2ls4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjkvb3BlYy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6ODZcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MixcciAgICBcInRpdGxlXCI6XCJMb25lIEd1bm1hbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMwL2xvbmUtZ3VubWFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjMsXHIgICAgXCJ0aXRsZVwiOlwiQ29sb25pYWwgUmVhciBHdWFyZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDEvY29sb25pYWwtcmVhci1ndWFyZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY0LFxyICAgIFwidGl0bGVcIjpcIlBhbmFtYSBDYW5hbCBSZXR1cm5lZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gUGFuYW1hLCBDb3N0YSBSaWNhIGFuZCBWZW5lenVlbGEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzAyL3BhbmFtYS1jYW5hbC1yZXR1cm5lZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NSxcciAgICBcInRpdGxlXCI6XCJDYW1wIERhdmlkIEFjY29yZHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gSXNyYWVsLCBKb3JkYW4gYW5kIEVneXB0LiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjMTMg4oCTIEFyYWItSXNyYWVsaSBXYXLigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDUvY2FtcC1kYXZpZC1hY2NvcmRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjYsXHIgICAgXCJ0aXRsZVwiOlwiUHVwcGV0IEdvdmVybm1lbnRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgYWRkIDEgSW5mbHVlbmNlIHRvIDMgY291bnRyaWVzIHRoYXQgZG8gbm90IGNvbnRhaW4gSW5mbHVlbmNlIGZyb20gZWl0aGVyIHRoZSBVUyBvciBVU1NSLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNi9wdXBwZXQtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjcsXHIgICAgXCJ0aXRsZVwiOlwiR3JhaW4gU2FsZXMgdG8gU292aWV0c1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByYW5kb21seSBzZWxlY3RzIDEgY2FyZCBmcm9tIHRoZSBVU1NS4oCZcyBoYW5kIChpZiBhdmFpbGFibGUpLiBUaGUgVVMgbXVzdCBlaXRoZXIgcGxheSB0aGUgY2FyZCBvciByZXR1cm4gaXQgdG8gdGhlIFVTU1IuIElmIHRoZSBjYXJkIGlzIHJldHVybmVkLCBvciB0aGUgVVNTUiBoYXMgbm8gY2FyZHMsIHRoZSBVUyBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA3L2dyYWluLXNhbGVzLXRvLXNvdmlldHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY4LFxyICAgIFwidGl0bGVcIjpcIkpvaG4gUGF1bCBJSSBFbGVjdGVkIFBvcGUqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSBQb2xhbmQgYW5kIGFkZCAxIFVTIEluZmx1ZW5jZSB0byBQb2xhbmQuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMTAxIOKAkyBTb2xpZGFyaXR54oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOC9qb2huLXBhdWwtaWktZWxlY3RlZC1wb3BlL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjksXHIgICAgXCJ0aXRsZVwiOlwiTGF0aW4gQW1lcmljYW4gRGVhdGggU3F1YWRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIG9mIHRoZSBwaGFzaW5nIHBsYXllcuKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgZGllIHJvbGwuIEFsbCBvZiB0aGUgb3Bwb25lbnTigJlzIENvdXAgQXR0ZW1wdHMgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYSwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIGRpZSByb2xsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOS9sYXRpbi1hbWVyaWNhbi1kZWF0aC1zcXVhZHMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzAsXHIgICAgXCJ0aXRsZVwiOlwiT0FTIEZvdW5kZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEyL29hcy1mb3VuZGVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcxLFxyICAgIFwidGl0bGVcIjpcIk5peG9uIFBsYXlzIHRoZSBDaGluYSBDYXJkKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgZG93biBhbmQgdW5hdmFpbGFibGUgZm9yIGltbWVkaWF0ZSBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIHJlY2VpdmVzIDIgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEzL25peG9uLXBsYXlzLXRoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcyLFxyICAgIFwidGl0bGVcIjpcIlNhZGF0IEV4cGVscyBTb3ZpZXRzKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBFZ3lwdCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIEVneXB0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNC9zYWRhdC1leHBlbHMtc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MyxcciAgICBcInRpdGxlXCI6XCJTaHV0dGxlIERpcGxvbWFjeVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoaXMgY2FyZOKAmXMgRXZlbnQgaXMgaW4gZWZmZWN0LCBzdWJ0cmFjdCAoLTEpIGEgQmF0dGxlZ3JvdW5kIGNvdW50cnkgZnJvbSB0aGUgVVNTUiB0b3RhbCBhbmQgdGhlbiBkaXNjYXJkIHRoaXMgY2FyZCBkdXJpbmcgdGhlIG5leHQgc2NvcmluZyBvZiB0aGUgTWlkZGxlIEVhc3Qgb3IgQXNpYSAod2hpY2ggZXZlciBjb21lcyBmaXJzdCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE1L3NodXR0bGUtZGlwbG9tYWN5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBWb2ljZSBvZiBBbWVyaWNhXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDQgVVNTUiBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIE5PVCBpbiBFdXJvcGUgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE2L3RoZS12b2ljZS1vZi1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NSxcciAgICBcInRpdGxlXCI6XCJMaWJlcmF0aW9uIFRoZW9sb2d5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMyBVU1NSIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgQW1lcmljYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE5L2xpYmVyYXRpb24tdGhlb2xvZ3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzYsXHIgICAgXCJ0aXRsZVwiOlwiVXNzdXJpIFJpdmVyIFNraXJtaXNoKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSBmb3IgcGxheSkuIElmIHRoZSBVUyBhbHJlYWR5IGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIGFkZCBhIHRvdGFsIG9mIDQgVVMgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQXNpYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIwL3Vzc3VyaS1yaXZlci1za2lybWlzaC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NyxcciAgICBcInRpdGxlXCI6XCJBc2sgTm90IFdoYXQgWW91ciBDb3VudHJ54oCmKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgZGlzY2FyZCB1cCB0byB0aGVpciBlbnRpcmUgaGFuZCBvZiBjYXJkcyAoaW5jbHVkaW5nIHNjb3JpbmcgY2FyZHMpIHRvIHRoZSBkaXNjYXJkIHBpbGUgYW5kIGRyYXcgcmVwbGFjZW1lbnRzIGZyb20gdGhlIGRyYXcgcGlsZS4gVGhlIG51bWJlciBvZiBjYXJkcyB0byBiZSBkaXNjYXJkZWQgbXVzdCBiZSBkZWNpZGVkIGJlZm9yZSBkcmF3aW5nIGFueSByZXBsYWNlbWVudCBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIxL2Fzay1ub3Qtd2hhdC15b3VyLWNvdW50cnktY2FuLWRvLWZvci15b3UvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzgsXHIgICAgXCJ0aXRsZVwiOlwiQWxsaWFuY2UgZm9yIFByb2dyZXNzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjMvYWxsaWFuY2UtZm9yLXByb2dyZXNzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc5LFxyICAgIFwidGl0bGVcIjpcIkFmcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDE7IERvbWluYXRpb246IDQ7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8xMS9yZWdpb25zLWFmcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MCxcciAgICBcInRpdGxlXCI6XCJPbmUgU21hbGwgU3RlcOKAplwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHlvdSBhcmUgYmVoaW5kIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBtb3ZlIHRoZWlyIG1hcmtlciAyIHNwYWNlcyBmb3J3YXJkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLiBUaGUgcGxheWVyIHJlY2VpdmVzIFZQIG9ubHkgZnJvbSB0aGUgZmluYWwgc3BhY2UgbW92ZWQgaW50by5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjYvb25lLXNtYWxsLXN0ZXAvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODEsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQW1lcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDI7IERvbWluYXRpb246IDU7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOC8xNS9yZWdpb25zLXNvdXRoLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbmlhbiBIb3N0YWdlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBhbmQgYWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gSXJhbi4gVGhpcyBjYXJk4oCZcyBFdmVudCByZXF1aXJlcyB0aGUgVVMgdG8gZGlzY2FyZCAyIGNhcmRzLCBpbnN0ZWFkIG9mIDEgY2FyZCwgaWYgdGhlIOKAnCM5MiDigJMgVGVycm9yaXNt4oCdIEV2ZW50IGlzIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMzAvaXJhbmlhbi1ob3N0YWdlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiYWZmZWN0c1wiOjkyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODMsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIElyb24gTGFkeSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBBcmdlbnRpbmEgYW5kIHJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSB0aGUgVW5pdGVkIEtpbmdkb20uIFRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNyDigJMgU29jaWFsaXN0IEdvdmVybm1lbnRz4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzAzL3RoZS1pcm9uLWxhZHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6ODNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NCxcciAgICBcInRpdGxlXCI6XCJSZWFnYW4gQm9tYnMgTGlieWEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGV2ZXJ5IDIgVVNTUiBJbmZsdWVuY2UgaW4gTGlieWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA0L3JlYWdhbi1ib21icy1saWJ5YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NSxcciAgICBcInRpdGxlXCI6XCJTdGFyIFdhcnMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGlzIGFoZWFkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBsb29rIHRocm91Z2ggdGhlIGRpc2NhcmQgcGlsZSwgcGljayBhbnkgMSBub24tc2NvcmluZyBjYXJkIGFuZCBwbGF5IGl0IGltbWVkaWF0ZWx5IGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNS9zdGFyLXdhcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODYsXHIgICAgXCJ0aXRsZVwiOlwiTm9ydGggU2VhIE9pbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IHBsYXkgOCBjYXJkcyAoaW4gOCBhY3Rpb24gcm91bmRzKSBmb3IgdGhpcyB0dXJuIG9ubHkuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM2MSDigJMgT1BFQ+KAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNi9ub3J0aC1zZWEtb2lsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiY2FuY2Vsc1wiOjYxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODcsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFJlZm9ybWVyKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCA0IFVTU1IgSW5mbHVlbmNlIHRvIEV1cm9wZSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIElmIHRoZSBVU1NSIGlzIGFoZWFkIG9mIHRoZSBVUyBpbiBWUCwgNiBJbmZsdWVuY2UgbWF5IGJlIGFkZGVkIHRvIEV1cm9wZSBpbnN0ZWFkLiBUaGUgVVNTUiBtYXkgbm8gbG9uZ2VyIG1ha2UgQ291cCBBdHRlbXB0cyBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA3L3RoZS1yZWZvcm1lci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiYWZmZWN0c1wiOjkwXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODgsXHIgICAgXCJ0aXRsZVwiOlwiTWFyaW5lIEJhcnJhY2tzIEJvbWJpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgaW4gTGViYW5vbiBhbmQgcmVtb3ZlIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIHRoZSBNaWRkbGUgRWFzdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTAvbWFyaW5lLWJhcnJhY2tzLWJvbWJpbmcvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OSxcciAgICBcInRpdGxlXCI6XCJTb3ZpZXRzIFNob290IERvd24gS0FMLTAwNypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTIHJlY2VpdmVzIDIgVlAuIFRoZSBVUyBtYXkgcGxhY2UgaW5mbHVlbmNlIG9yIG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMsIHVzaW5nIHRoaXMgY2FyZCwgaWYgU291dGggS29yZWEgaXMgVVMgY29udHJvbGxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTEvc292aWV0cy1zaG9vdC1kb3duLWthbC0wMDcvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTAsXHIgICAgXCJ0aXRsZVwiOlwiR2xhc25vc3QqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAuIFRoZSBVU1NSIG1heSBtYWtlIFJlYWxpZ25tZW50IHJvbGxzIG9yIGFkZCBJbmZsdWVuY2UsIHVzaW5nIHRoaXMgY2FyZCwgaWYgdGhlIOKAnCM4NyDigJMgVGhlIFJlZm9ybWVy4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMi9nbGFzbm9zdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkxLFxyICAgIFwidGl0bGVcIjpcIk9ydGVnYSBFbGVjdGVkIGluIE5pY2FyYWd1YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIE5pY2FyYWd1YS4gVGhlIFVTU1IgbWF5IG1ha2UgYSBmcmVlIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBpbiBhIGNvdW50cnkgYWRqYWNlbnQgdG8gTmljYXJhZ3VhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMy9vcnRlZ2EtZWxlY3RlZC1pbi1uaWNhcmFndWEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MixcciAgICBcInRpdGxlXCI6XCJUZXJyb3Jpc21cIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVy4oCZcyBvcHBvbmVudCBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgMSBjYXJkIGZyb20gdGhlaXIgaGFuZC4gSWYgdGhlIOKAnCM4MiDigJMgSXJhbmlhbiBIb3N0YWdlIENyaXNpc+KAnSBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZCwgYSBVUyBwbGF5ZXIgKGlmIGFwcGxpY2FibGUpIG11c3QgcmFuZG9tbHkgZGlzY2FyZCAyIGNhcmRzIGZyb20gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTQvdGVycm9yaXNtL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkzLFxyICAgIFwidGl0bGVcIjpcIklyYW4tQ29udHJhIFNjYW5kYWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIFVTIFJlYWxpZ25tZW50IHJvbGxzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE3L2lyYW4tY29udHJhLXNjYW5kYWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NCxcciAgICBcInRpdGxlXCI6XCJDaGVybm9ieWwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgZGVzaWduYXRlIGEgc2luZ2xlIFJlZ2lvbiAoRXVyb3BlLCBBc2lhLCBldGMuKSB0aGF0LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgY2Fubm90IGFkZCBJbmZsdWVuY2UgdG8gdXNpbmcgT3BlcmF0aW9ucyBwb2ludHMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE4L2NoZXJub2J5bC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWJ0IENyaXNpc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtdXN0IGltbWVkaWF0ZWx5IGRpc2NhcmQgYSBjYXJkIHdpdGggYW4gT3BlcmF0aW9ucyB2YWx1ZSBvZiAzIG9yIG1vcmUgb3IgdGhlIFVTU1IgbWF5IGRvdWJsZSB0aGUgYW1vdW50IG9mIFVTU1IgSW5mbHVlbmNlIGluIDIgY291bnRyaWVzIGluIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE5L2xhdGluLWFtZXJpY2FuLWRlYnQtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk2LFxyICAgIFwidGl0bGVcIjpcIlRlYXIgRG93biB0aGlzIFdhbGwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIEVhc3QgR2VybWFueS4gVGhlIFVTIG1heSBtYWtlIGZyZWUgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBpbiBFdXJvcGUgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTUg4oCTIFdpbGx5IEJyYW5kdOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjAvdGVhci1kb3duLXRoaXMtd2FsbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImNhbmNlbHNcIjo1NVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjk3LFxyICAgIFwidGl0bGVcIjpcIkFuIEV2aWwgRW1waXJlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTkg4oCTIEZsb3dlciBQb3dlcuKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjEvYW4tZXZpbC1lbXBpcmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6NTlcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OCxcciAgICBcInRpdGxlXCI6XCJBbGRyaWNoIEFtZXMgUmVtaXgqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcywgZmFjZS11cCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4gYW5kIHRoZSBVU1NSIGRpc2NhcmRzIGEgY2FyZCBmcm9tIHRoZSBVUyBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wMy9hbGRyaWNoLWFtZXMtcmVtaXgvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OSxcciAgICBcInRpdGxlXCI6XCJQZXJzaGluZyBJSSBEZXBsb3llZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBSZW1vdmUgMSBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgMyBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA0L3BlcnNoaW5nLWlpLWRlcGxveWVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAwLFxyICAgIFwidGl0bGVcIjpcIldhcmdhbWVzKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIklmIHRoZSBERUZDT04gbGV2ZWwgaXMgMiwgdGhlIHBsYXllciBtYXkgaW1tZWRpYXRlbHkgZW5kIHRoZSBnYW1lIGFmdGVyIGdpdmluZyB0aGVpciBvcHBvbmVudCA2IFZQLiBIb3cgYWJvdXQgYSBuaWNlIGdhbWUgb2YgY2hlc3M/XCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA3L3dhcmdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAxLFxyICAgIFwidGl0bGVcIjpcIlNvbGlkYXJpdHkqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBjYXJkIHJlcXVpcmVzIHByaW9yIHBsYXkgb2YgdGhlIOKAnCM2OCDigJMgSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZeKAnSBFdmVudCBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA4L3NvbGlkYXJpdHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwicHJlcmVxXCI6NjhcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1JcmFxIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJcmFuIGludmFkZXMgSXJhcSBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSXJhbiBvciBJcmFxKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA5L2lyYW4taXJhcS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAzLFxyICAgIFwidGl0bGVcIjpcIkRlZmVjdG9yc1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSB0aGlzIGNhcmQgZHVyaW5nIHRoZSBIZWFkbGluZSBQaGFzZSBpbiBvcmRlciB0byBjYW5jZWwgdGhlIFVTU1IgSGVhZGxpbmUgRXZlbnQgKGluY2x1ZGluZyBhIHNjb3JpbmcgY2FyZCkuIFRoZSBjYW5jZWxlZCBjYXJkIGlzIHBsYWNlZCBpbnRvIHRoZSBkaXNjYXJkIHBpbGUuIElmIHRoaXMgY2FyZCBpcyBwbGF5ZWQgYnkgdGhlIFVTU1IgZHVyaW5nIGl0cyBhY3Rpb24gcm91bmQsIHRoZSBVUyBnYWlucyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8wOS9kZWZlY3RvcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNCxcciAgICBcInRpdGxlXCI6XCJUaGUgQ2FtYnJpZGdlIEZpdmVcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyBhbGwgc2NvcmluZyBjYXJkcyBpbiB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBwbGF5ZXIgbWF5IGFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIFJlZ2lvbiBuYW1lZCBvbiBvbmUgb2YgdGhlIHJldmVhbGVkIHNjb3JpbmcgY2FyZHMuIFRoaXMgY2FyZCBjYW4gbm90IGJlIHBsYXllZCBhcyBhbiBFdmVudCBkdXJpbmcgdGhlIExhdGUgV2FyLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xMS90aGUtY2FtYnJpZGdlLWZpdmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA1LFxyICAgIFwidGl0bGVcIjpcIlNwZWNpYWwgUmVsYXRpb25zaGlwXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIFUuSy4gaWYgdGhlIFUuSy4gaXMgVVMtY29udHJvbGxlZCBidXQgTkFUTyBpcyBub3QgaW4gZWZmZWN0LiBBZGQgMiBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBXZXN0ZXJuIEV1cm9wZSwgYW5kIHRoZSBVUyBnYWlucyAyIFZQLCBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGFuZCBOQVRPIGlzIGluIGVmZmVjdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMTgvc3BlY2lhbC1yZWxhdGlvbnNoaXAvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNixcciAgICBcInRpdGxlXCI6XCJOT1JBRCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBjb250YWluaW5nIFVTIEluZmx1ZW5jZSwgYXQgdGhlIGVuZCBvZiBlYWNoIEFjdGlvbiBSb3VuZCwgaWYgQ2FuYWRhIGlzIFVTLWNvbnRyb2xsZWQgYW5kIHRoZSBERUZDT04gbGV2ZWwgbW92ZWQgdG8gMiBkdXJpbmcgdGhhdCBBY3Rpb24gUm91bmQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsZWQgYnkgdGhlIOKAnCM0MiDigJMgUXVhZ21pcmXigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzI1L25vcmFkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYW50aXJlcVwiOiA0MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNyxcciAgICBcInRpdGxlXCI6XCJDaGVcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBhZ2FpbnN0IGEgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EuIFRoZSBVU1NSIG1heSBwZXJmb3JtIGEgc2Vjb25kIENvdXAgQXR0ZW1wdCwgYWdhaW5zdCBhIGRpZmZlcmVudCBub24tQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBBbWVyaWNhLCBTb3V0aCBBbWVyaWNhIG9yIEFmcmljYSwgaWYgdGhlIGZpcnN0IENvdXAgQXR0ZW1wdCByZW1vdmVkIGFueSBVUyBJbmZsdWVuY2UgZnJvbSB0aGUgdGFyZ2V0IGNvdW50cnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI3L2NoZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDgsXHIgICAgXCJ0aXRsZVwiOlwiT3VyIE1hbiBpbiBUZWhyYW4qXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIGF0IGxlYXN0IG9uZSBNaWRkbGUgRWFzdCBjb3VudHJ5LCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBkcmF3IHRoZSB0b3AgNSBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuIFRoZSBVUyBtYXkgZGlzY2FyZCBhbnkgb3IgYWxsIG9mIHRoZSBkcmF3biBjYXJkcywgYWZ0ZXIgcmV2ZWFsaW5nIHRoZSBkaXNjYXJkZWQgY2FyZChzKSB0byB0aGUgVVNTUiBwbGF5ZXIsIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQocykuIEFueSByZW1haW5pbmcgZHJhd24gY2FyZHMgYXJlIHJldHVybmVkIHRvIHRoZSBkcmF3IHBpbGUgYW5kIHRoZSBkcmF3IHBpbGUgaXMgcmVzaHVmZmxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjgvb3VyLW1hbi1pbi10ZWhyYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA5LFxyICAgIFwidGl0bGVcIjpcIll1cmkgYW5kIFNhbWFudGhhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgQ291cCBBdHRlbXB0IHBlcmZvcm1lZCBkdXJpbmcgdGhlIHJlbWFpbmRlciBvZiB0aGUgVHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTAveXVyaS1hbmQtc2FtYW50aGEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMTAsXHIgICAgXCJ0aXRsZVwiOlwiQVdBQ1MgU2FsZSB0byBTYXVkaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVMgSW5mbHVlbmNlIHRvIFNhdWRpIEFyYWJpYS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzU2IOKAkyBNdXNsaW0gUmV2b2x1dGlvbuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8xNC9hd2Fjcy1zYWxlLXRvLXNhdWRpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9XHJdXHIiLCJSID0gUmVhY3QuRE9NXG5SQ1RHID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cFxudXBkYXRlID0gUmVhY3QuYWRkb25zLnVwZGF0ZVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbiQgPSBaZXB0b1xudmVudCA9IHJlcXVpcmUgJy4vdmVudCdcblxuY2FyZHNEYXRhID0gcmVxdWlyZSgnLi4vbGliL2NhcmRzLmpzb24nKVxuXG5cbiMgQWRkIGZ1bmN0aW9uIHRvIFplcHRvXG4kLmdldFNjcmlwdCA9IChzcmMsIGZ1bmMpIC0+XG4gIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdC5hc3luYyA9IFwiYXN5bmNcIlxuICBzY3JpcHQuc3JjID0gc3JjXG4gIGlmIGZ1bmNcbiAgICBzY3JpcHQub25sb2FkID0gZnVuY1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZCBzY3JpcHRcblxuXG5wYWdlcyA9IHJlcXVpcmUgJy4vcGFnZXMnXG52aWV3cyA9IHJlcXVpcmUgJy4vdmlld3MnXG5cbnJvdXRlciA9IHJlcXVpcmUgJy4vcm91dGVyJ1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIG1peGluczogW3JvdXRlcl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgbWVudUFjdGl2ZTpudWxsXG4gICAgdmlldzoge31cbiAgICBzbGlkZUluOiB0cnVlXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAoKS0+XG4gICAgJCgnI3BsYWNlaG9sZGVyJykuaGlkZSgpXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgdmVudC5vbiAnYm9hcmRTdGF0ZUNoYW5nZScsIChnYW1lSWQsIHN0YXRlRW5jKT0+XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgbnVsbCwgXCIje0BzdGF0ZS52aWV3Lm5hbWV9ICN7Z2FtZUlkfVwiLFxuICAgICAgICBcIiMvI3tAc3RhdGUudmlldy5uYW1lfS8je2dhbWVJZH0vI3tzdGF0ZUVuY31cIlxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IC0+XG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgICRzbGlkZUluLnJlbW92ZUNsYXNzICdzbGlkZUluLWluJ1xuICAgICMkbWFpblZpZXcgPSAkKEByZWZzLm1haW5WaWV3LmdldERPTU5vZGUoKSlcbiAgICAjJG1haW5WaWV3LnJlbW92ZUNsYXNzICdtYWluVmlldy1vdXQnXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPiBAc2xpZGVJbigpXG5cbiAgc2xpZGVJbjogLT5cbiAgICBpZiBub3QgQHN0YXRlLnNsaWRlSW5cbiAgICAgIHJldHVyblxuICAgICRzbGlkZUluID0gJChAcmVmcy5zbGlkZUluLmdldERPTU5vZGUoKSlcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkc2xpZGVJbi5hZGRDbGFzcygnc2xpZGVJbi1pbicpXG4gICAgLCAxMFxuXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgSWYgdGhlIHJvdXRlciBoYXNuJ3Qga2lja2VkIGluLCBkbyBub3RoaW5nXG4gICAgaWYgbm90IEBzdGF0ZT8udmlld1xuICAgICAgbWFpblZpZXcgPSBSLnAgY2xhc3NOYW1lOiAnbGVhZCcsICdUd2lTdHJ1ZyBpcyBsb2FkaW5nLi4uJ1xuICAgIGVsc2VcbiAgICAgIG1haW5WaWV3ID0gc3dpdGNoIEBzdGF0ZS52aWV3Lm5hbWVcbiAgICAgICAgd2hlbiAnaG9tZScgdGhlbiBwYWdlcy5Ib21lXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NhcmQnIHRoZW4gcGFnZXMuQ2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2NhcmRzJyB0aGVuIHBhZ2VzLkNhcmRzXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NvdW50cmllcycgdGhlbiBwYWdlcy5Db3VudHJpZXMoKVxuICAgICAgICAjd2hlbiAnYm9hcmQnIHRoZW4gcmV0dXJuIEJvYXJkUGljVmlldygpXG4gICAgICAgIHdoZW4gJ2JvYXJkJyB0aGVuIHBhZ2VzLkJvYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnZ2FtZScgdGhlbiBwYWdlcy5HYW1lIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnYWJvdXQnIHRoZW4gcGFnZXMuQWJvdXQoKVxuICAgICAgICB3aGVuICd3aG9vcHMnIHRoZW4gcGFnZXMuV2hvb3BzKClcblxuICAgIG1haW5WaWV3Q2xhc3MgPSBjeFxuICAgICAgJ2NvbnRhaW5lcic6IEBzdGF0ZS52aWV3Lm5hbWUgbm90IGluIFsnYm9hcmQnLCAnZ2FtZSddXG4gICAgICAnc2xpZGVJbic6IEBzdGF0ZS5zbGlkZUluXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgdmlld3MuTmF2IGtleTonbmF2JywgYWN0aXZlOiBAc3RhdGUubWVudUFjdGl2ZVxuICAgICAgUi5kaXYga2V5OidtYWludmlldycsIHJlZjogJ3NsaWRlSW4nLCBjbGFzc05hbWU6IG1haW5WaWV3Q2xhc3MsIG1haW5WaWV3XG4gICAgICB2aWV3cy5Gb290ZXIga2V5Oidmb290ZXInXG4gICAgXVxuICAgIFxuXG4jIEFkZCBrZXlzIHRvIGNhcmRzXG5hZGRSZWFjdEtleSA9IChlbCktPlxuICBlbC5rZXkgPSBcInJrLSN7ZWwuaWR9XCJcbiAgZWxcblxuUmVhY3QucmVuZGVyQ29tcG9uZW50IFR3aVN0cnVnKHtjYXJkczogY2FyZHNEYXRhLm1hcChhZGRSZWFjdEtleSl9KSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2FwcCdcbiIsIlN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4vU3RhdGVIaXN0b3J5J1xuc3VwZXJwb3dlclRvSW5kZXggPSByZXF1aXJlICcuL3N1cGVycG93ZXJUb0luZGV4J1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi9zdGF0ZUVuY29kZXInXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQm9hcmRTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBTdGF0ZUhpc3RvcnlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIGVuY29kZWQgPSBzdGF0ZUVuY29kZXIuZW5jb2RlIHN0YXRlXG4gICAgI2NvbnNvbGUubG9nICdCb2FyZFN0YXRlSGlzdG9yeSBlbmNvZGVTdGF0ZScsIHN0YXRlLCBlbmNvZGVkXG4gICAgZW5jb2RlZFxuXG4gIGRlY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBkZWNvZGVkID0gc3RhdGVFbmNvZGVyLmRlY29kZSBzdGF0ZVxuICAgICNjb25zb2xlLmxvZyAnQm9hcmRTdGF0ZUhpc3RvcnkgZGVjb2RlU3RhdGUnLCBzdGF0ZSwgZGVjb2RlZFxuICAgIGRlY29kZWRcbiAgXG4gIGFkZDogKHN0YXRlLCBtZXRhKS0+XG4gICAgIyBJZiBpdCdzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBwcmV2aW91cyBlbnRyeSwgZG9uJ3QgdXBkYXRlIHRoZSBoaXN0b3J5XG4gICAgIyBUaGlzIGlzIHNvIHdlIGNhbiBiYXRjaCB0aGUgY2hhbmdlcyBmb3IgZGlzcGxheVxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICAjY29uc29sZS5sb2cgY3VyXG4gICAgaWYgbm90IGN1cj9cbiAgICAgIHJldHVybiBzdXBlciBzdGF0ZSwgbWV0YVxuXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgbnMgPSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgIGNtID0gY3VyLm1ldGFcbiAgICBjcyA9IGN1ci5zdGF0ZVxuICAgXG4gICAgIyBTZXQgaXAgZGVsdGEgdG8gYmUgYW4gYXJyYXlcbiAgICBpZiBtZXRhLnR5cGUgPT0gJ2lwJ1xuICAgICAgdXNhID0gaWYgbm0uc2lkZSA9PSAndXNhJyB0aGVuIG5tLmRlbHRhIGVsc2UgMFxuICAgICAgdXNzciA9IGlmIG5tLnNpZGUgPT0gJ3Vzc3InIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICBubS5kZWx0YSA9IFt1c2EsIHVzc3JdXG5cblxuICAgIGlmIG5tLnR5cGUgPT0gY20udHlwZSBhbmQgbnMuZ2FtZS5yb3VuZCA9PSBjcy5nYW1lLnJvdW5kXG4gICAgICBzaWRlU2FtZSA9IGlmIG5tLmlkID09ICdzY29yZScgdGhlbiB0cnVlIGVsc2Ugbm0uc2lkZSA9PSBjbS5zaWRlXG4gICAgICBpZFNhbWUgPSBubS5pZCA9PSBjbS5pZFxuXG4gICAgICB0eXBlSXBTYW1lID0gbm0udHlwZSA9PSAnaXAnIGFuZCBubS5jb3VudHJ5LmlkID09IGNtLmNvdW50cnkuaWRcbiAgICAgIHR5cGVWYWxTYW1lID0gbm0udHlwZSA9PSAndmFsJyBhbmQgbm0uaWQgIT0gJ3R1cm4nIGFuZFxuICAgICAgbm0uaWQgIT0gJ3JvdW5kJyBhbmQgc2lkZVNhbWUgYW5kIGlkU2FtZVxuXG4gICAgICBpZiB0eXBlSXBTYW1lIG9yIHR5cGVWYWxTYW1lXG4gICAgICAgIHJldHVybiBAbWVyZ2VXaXRoQ3VycmVudCBucywgbm1cblxuICAgIHN1cGVyIG5zLCBubVxuXG5cbiAgbWVyZ2VXaXRoQ3VycmVudDogKHN0YXRlLG1ldGEpLT5cbiAgICBjID0gXy5jbG9uZURlZXAgQGdldEN1cnJlbnQoKVxuICAgIG5tID0gXy5jbG9uZURlZXAgbWV0YVxuICAgIGNtID0gYy5tZXRhXG4gICAgc3dpdGNoIGNtLnR5cGVcbiAgICAgIHdoZW4gJ2lwJ1xuICAgICAgICBubS5kZWx0YVswXSArPSBjbS5kZWx0YVswXVxuICAgICAgICBubS5kZWx0YVsxXSArPSBjbS5kZWx0YVsxXVxuICAgICAgICBubS5zaWRlID0gJ2JvdGgnXG4gICAgICAgIGlmIG5tLmRlbHRhWzBdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3Vzc3InXG4gICAgICAgIGlmIG5tLmRlbHRhWzFdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3VzYSdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgICAgd2hlbiAndmFsJ1xuICAgICAgICBubS5vbGQgPSBjbS5vbGRcbiAgICAgICAgaWYgbm0ub2xkID09IG5tLm5ld1xuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcbiAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgaWYgcG9wID09IHRydWVcbiAgICAgIEBzdGF0ZXMucG9wKClcbiAgICAgIEBjdXJyZW50LS1cbiAgICAgIGlmKEBsYXRlc3QgPiBAY3VycmVudClcbiAgICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBlbHNlXG4gICAgICBAc3RhdGVzW0BjdXJyZW50XSA9XG4gICAgICAgIG1ldGE6IG5tXG4gICAgICAgIHN0YXRlOiBAZW5jb2RlU3RhdGUgc3RhdGVcblxuICAgIEBzYXZlKClcbiAgICBAZW1pdCAnbWVyZ2UnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VwZGF0ZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAnY2hhbmdlJ1xuXG5cbiAgIyBUdXJuIHN0YXRlIGludG8gYSBtaW5pbWFsIHJlcHJlc2VudGF0aW9uXG4gIGVuY29kZUN1cnJlbnQ6ICgpLT5cbiAgICBjdXIgPSBAZ2V0Q3VycmVudCgpXG4gICAgcmV0dXJuIGlmIG5vdCBjdXI/XG4gICAgc3RhdGVFbmNvZGVyLmVuY29kZSBAZ2V0Q3VycmVudCgpPy5zdGF0ZVxuXG5cbiAgdG9nZ2xlVmlzaWJsZTogKGZvcmNlLCBzaG93VGVtcD1mYWxzZSktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIEBzaG93VGVtcCA9IHNob3dUZW1wXG4gICAgQHNob3cgPSBpZiBmb3JjZT8gdGhlbiBmb3JjZSBlbHNlICFAc2hvd1xuICAgIEBlbWl0ICd0b2dnbGVWaXNpYmxlJywgQHNob3dcbiAgICBAZW1pdCAndXBkYXRlJ1xuXG4gIHNob3dUaGVuSGlkZTogKHRpbWUgPSAxMDAwKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgaWYgbm90IEBzaG93XG4gICAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlLCB0cnVlXG4gICAgaWYgQHNob3dUZW1wXG4gICAgICBAc2hvd1RoZW5IaWRlVGltZW91dCA9IHNldFRpbWVvdXQgQHRvZ2dsZVZpc2libGUuYmluZCh0aGlzLCBmYWxzZSksIHRpbWVcblxuICBoaWRlOiAtPlxuICAgIEB0b2dnbGVWaXNpYmxlIGZhbHNlXG5cbiAgc2hvdzogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlXG5cbiAgIyBjYiBjYW4gYmUgYSBjYWxsYmFjayBmdW5jdGlvbiwgc2hvcnRoYW5kIG9iaiwgb3IgYSBrZXkgbmFtZVxuICAjIGh0dHA6Ly9sb2Rhc2guY29tL2RvY3MjZmluZEluZGV4XG4gIGZpbmRTdGF0ZUluZGV4OiAoY2IpLT5cbiAgICBpbmRleCA9IF8uZmluZEluZGV4IEBzdGF0ZXMsIGNiXG4gICAgaWYgaW5kZXggIT0gLTFcbiAgICAgIHJldHVybiBpbmRleCBcbiIsImNsYXNzIE1pY3JvRXZlbnRDbGFzc1xuICBfaW5pdDotPiBAX2xpc3RuIG9yIEBfbGlzdG4gPSB7fVxuICBfY3JlYXRlOihlKS0+IEBfaW5pdCgpW2VdIG9yICBAX2luaXQoKVtlXSA9IFtdXG4gIG9uOihlLCBmKS0+IChAX2NyZWF0ZSBlKS5wdXNoIGZcbiAgb2ZmOihlLCBmKS0+ICh0LnNwbGljZSAodC5pbmRleE9mIGYpLCAxKSBpZiAodCA9IEBfaW5pdCgpW2VdKT9cbiAgb25jZTooZSwgZiktPiBAb24gZSwgKHQgPSA9PiAoQG9mZiBlLCB0KSAmJiBmLmFwcGx5IEAsIGFyZ3VtZW50cylcbiAgZW1pdDooZSwgci4uLiktPiBsLmFwcGx5IEAsIHIgZm9yIGwgaW4gdCBpZiAodCA9IEBfaW5pdCgpW2VdKT87IDBcbiAgQG1peGluPSh0KS0+IHQ6OltwXSA9IEA6OltwXSBmb3IgcCBvZiBAOjo7IDBcblxubW9kdWxlLmV4cG9ydHMgPSBNaWNyb0V2ZW50Q2xhc3NcbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vTWljcm9FdmVudENsYXNzJ1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbiAgIyBAaWQgaXMgdXNlZCBmb3IgcGVyc2lzdGFuY2VcbiAgY29uc3RydWN0b3I6IChvcHRzKS0+XG4gICAgI18uYXNzaWduIHRoaXMsIE1pY3JvRXZlbnRcbiAgICBAc3RhdGVzID0gW11cbiAgICBAc3RhZ2VkID0gW11cbiAgICBAbGF0ZXN0ID0gbnVsbFxuICAgIEBjdXJyZW50ID0gbnVsbFxuICAgIEBzaG93ID0gZmFsc2VcbiAgICBAaWQgPSBvcHRzLmlkXG4gICAgQHN0YXRlc1RvU2F2ZSA9IDUwXG4gIFxuICAjIEV4dGVuZCB0byBhZGQgY3VzdG9tIGVuY29kaW5nL2RlY29kaW5nIGZ1bmN0aW9uYWxpdHlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG5cbiAgZGVjb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG4gIFxuICBzYXZlOiAtPlxuICAgIHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UgMCwgQHN0YXRlc1RvU2F2ZVxuICAgIFxuICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeSBzdGF0ZXNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSBAaWQsIGpzb25cblxuICBsb2FkOiAtPlxuICAgIHN0YXRlcyA9IEpTT04ucGFyc2UgbG9jYWxTdG9yYWdlLmdldEl0ZW0oQGlkKVxuICAgIGlmIHN0YXRlcyBhbmQgXy5pc0FycmF5IHN0YXRlc1xuICAgICAgQHN0YXRlcyA9IHN0YXRlc1xuICAgICAgQGN1cnJlbnQgPSBzdGF0ZXMubGVuZ3RoIC0gMVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICAgIEBlbWl0ICdsb2FkJ1xuICAgICAgQGVtaXQgJ3VwZGF0ZSdcbiAgICAgIHJldHVybiBzdGF0ZXNcblxuICBhZGQ6IChzdGF0ZSwgbWV0YT17fSktPlxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcblxuICAgIGlmIG5vdCBAY3VycmVudD9cbiAgICAgIEBjdXJyZW50ID0gMFxuICAgIGVsc2VcbiAgICAgIEBjdXJyZW50KytcblxuICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgbmV3U3RhdGUgPVxuICAgICAgc3RhdGU6IEBlbmNvZGVTdGF0ZSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgICAgbWV0YTogXy5jbG9uZURlZXAgbWV0YVxuXG4gICAgQHN0YXRlc1tAY3VycmVudF0gPSBuZXdTdGF0ZVxuXG4gICAgQHNhdmUoKVxuXG4gICAgQGVtaXQgJ2FkZCcsIG5ld1N0YXRlLCAnWUVBSCdcbiAgICBAZW1pdCAndXBkYXRlJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICdjaGFuZ2UnXG4gIFxuICB1bmRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPiAwXG4gICAgICBAY3VycmVudC0tXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VuZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuICBcbiAgcmVkbzogKCktPlxuICAgIGlmIEBjdXJyZW50IDwgQGxhdGVzdFxuICAgICAgQGN1cnJlbnQrK1xuICAgIEBzaG93VGhlbkhpZGUoKVxuICAgIHN0YXRlID0gQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdyZWRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBzdGF0ZVxuICAgIEBlbWl0ICdjaGFuZ2UnXG4gICAgc3RhdGVcblxuICBnb1RvOiAoaW5kZXgpLT5cbiAgICByZXR1cm4gaWYgbm90IGluZGV4P1xuICAgIEBjdXJyZW50ID0gaW5kZXhcbiAgICBAZW1pdCAnZ29UbycsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cbiAgZ2V0OiAoaW5kZXgpLT5cbiAgICByZXR1cm4gbnVsbCBpZiBAc3RhdGVzLmxlbmd0aCA9PSAwXG4gICAgc2ggPSBfLmNsb25lRGVlcCBAc3RhdGVzW2luZGV4XVxuICAgIHNoLnN0YXRlID0gQGRlY29kZVN0YXRlIHNoLnN0YXRlXG4gICAgc2hcblxuICBnZXRDdXJyZW50OiAoKS0+XG4gICAgQGdldChAY3VycmVudClcblxuICBnZXRQcmV2OiAtPlxuICAgIHByZXYgPSBAY3VycmVudCAtIDFcbiAgICBpZiBwcmV2IDwgMCB0aGVuIHByZXYgPSAwXG4gICAgcmV0dXJuIEBnZXQocHJldilcblxuICBnZXRBbGw6IC0+XG4gICAgXy5tYXAgQHN0YXRlcywgKHNoLCBpbmRleCk9PlxuICAgICAgQGdldCBpbmRleFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVIaXN0b3J5XG4iLCJjeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IChwcm9wcykgLT5cbiAgb3duZXJDbGFzcyA9IFwib3duZXItI3twcm9wcy5vd25lcn1cIlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBvd25lckNsYXNzICsgJyAnICsgY2xhc3Nlc1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiY3MgPVxuICAnYSc6ICdhcydcbiAgJ2UnOiAnZXUnXG4gICdjJzogJ2NhJ1xuICAncyc6ICdzYSdcbiAgJ2YnOiAnYWYnXG4gICdtJzogJ21lJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IChsZXR0ZXIpLT4gY3NbbGV0dGVyXVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiBlbCBpZiBlbFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwsaSxhcnIpLT4gYXJyLmluZGV4T2YoZWwpID09IGlcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IDEgPD0gZWwgPD0gMTEwXG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4gIHR1cm46ICh2YWwpLT5cbiAgICBzd2l0Y2ggdmFsXG4gICAgICB3aGVuIDAgdGhlbiAnUydcbiAgICAgIHdoZW4gMTEgdGhlbiAnRSdcbiAgICAgIGVsc2UgdmFsXG4gIHJvdW5kOiAodmFsKS0+XG4gICAgaWYgdmFsID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChpZCwgdmFsLCBvcHQpLT5cbiAgc3dpdGNoIGlkXG4gICAgd2hlbiAndHVybidcbiAgICAgIHN0YXJ0ID0gJ1MnXG4gICAgICBlbmQgPSAnRSdcbiAgICAgIGlmIG9wdCA9PSAnbG9uZydcbiAgICAgICAgc3RhcnQgPSAnTmV3IEdhbWUnXG4gICAgICAgIGVuZCA9ICdHYW1lIEVuZCdcbiAgICAgIHN3aXRjaCB2YWxcbiAgICAgICAgd2hlbiAwIHRoZW4gc3RhcnRcbiAgICAgICAgd2hlbiAxMSB0aGVuIGVuZFxuICAgICAgICBlbHNlIHZhbFxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgaCA9IGlmIG9wdCA9PSAnbG9uZycgdGhlbiAnSGVhZGxpbmUnIGVsc2UgJ0gnXG4gICAgICBpZiB2YWwgPT0gMCB0aGVuIGggZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgICB3aGVuICdzY29yZSdcbiAgICAgIE1hdGguYWJzIHZhbFxuICAgIGVsc2VcbiAgICAgIHZhbFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPiBpZiBudW0gPiAwIHRoZW4gXCIrI3tudW19XCIgZWxzZSBudW1cbiIsIiMgRW5jb2RlL2RlY29kZSBudW1iZXJzIGludG8gc2luZ2xlLWNoYXIgcmVwcmVzZW50YXRpb25zXG4jIDAtMzUgIC0+IDAsMSwyLi5hLGIsYy4uelxuIyAzNi02MSAtPiBBLEIsQy4uLlxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChuKS0+XG4gICAgaWYgbiA8IDM2IHRoZW4gb3V0ID0gbi50b1N0cmluZygzNikgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlIG4gKyAyOVxuXG4gIGRlY29kZTogKGMgPSAnMCcpLT5cbiAgICBjb2RlID0gYy5jaGFyQ29kZUF0IDBcbiAgICAjIENhbGN1bGF0ZSBvZmZzZXQgZnJvbSBjaGFyY29kZSB0byB2YWx1ZVxuICAgIG9mZnNldCA9IHN3aXRjaFxuICAgICAgIyAwLTlcbiAgICAgIHdoZW4gNDggPD0gY29kZSA8PSA1NyB0aGVuIDQ4XG4gICAgICAjIDEwLTM1XG4gICAgICB3aGVuIDk3IDw9IGNvZGUgPD0gMTIyIHRoZW4gODdcbiAgICAgICMgMzYtNjFcbiAgICAgIHdoZW4gNjUgPD0gY29kZSA8PSA5MCB0aGVuIDI5XG5cbiAgICBjb2RlIC0gb2Zmc2V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiIyBIYXNoZWQgcXNcbiMgSGFuZGxlcyBzdHJpbmdzIGFuZCBhcnJheXNcbiMgQW55dGhpbmcgd2l0aCBhIGNvbW1hIHdpbGwgYmUgcGFyc2VkIGFzIGFuIGFycmF5XG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1lcmdlOiAob2JqKS0+XG5cbiAgZ2V0OiAoZmllbGQpLT5cbiAgXG4gIHNldDogKGZpZWxkLCB2YWwpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcXNPYmpbZmllbGRdID0gdmFsXG4gICAgQHNldFFTIEB0b1FTKHFzT2JqKVxuXG4gIGRlbGV0ZTogKGZpZWxkKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHJldHVybiBpZiBub3QgcXNPYmo/XG4gICAgZGVsZXRlIHFzT2JqW2ZpZWxkXVxuICAgIEBzZXRRUyBAdG9RUyBxc09ialxuXG4gIGVuY29kZUNoYXJzSW46IFsnPScsJyYnXVxuXG4gIGVuY29kZUNoYXJzT3V0OlsnJTNEJywnJTI2J11cblxuICBlbmNvZGU6IChvYmopLT5cbiAgICBpZiBfLmlzQXJyYXkgb2JqXG4gICAgICBvYmogPSBvYmouam9pbignLCcpXG4gICAgb2JqLnJlcGxhY2UoQGVuY29kZUNoYXJzSW4sIEBlbmNvZGVDaGFyc091dClcblxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBzdHIgPSBzdHIucmVwbGFjZShAZW5jb2RlQ2hhcnNPdXQsIEBlbmNvZGVDaGFyc0luKVxuICAgIGlmIHN0ci5pbmRleE9mKCcsJykgIT0gLTFcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLCcpXG4gICAgc3RyXG5cblxuICB0b09iajogKHFzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKT9bMV0pLT5cbiAgICBpZiBub3QgcXNcbiAgICAgIHJldHVyblxuICAgIG91dCA9IHt9XG4gICAgcGFpcnMgPSBxcy5zcGxpdCgnJicpXG4gICAgcGFpcnM/LmZvckVhY2ggKHBhaXIpPT5cbiAgICAgIGt2QXJyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBvdXRbQGRlY29kZShrdkFyclswXSldID0gQGRlY29kZShrdkFyclsxXSlcbiAgICBvdXRcblxuICB0b1FTOiAob2JqKS0+XG4gICAgcGFpcnMgPSBbXVxuICAgIGZvciBvd24gayx2IG9mIG9ialxuICAgICAgcGFpcnMucHVzaCBcIiN7QGVuY29kZShrKX09I3tAZW5jb2RlKHYpfVwiXG4gICAgcGFpcnMuam9pbignJicpXG4gICAgICAgXG4gIHNldFFTOiAocXMpLT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF0gKyAnPycgKyBxc1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCktPlxuICByYW5nZXMgPVxuICAgIHNjb3JlOiBbLTIwLCAyMF1cbiAgICB0dXJuOiBbMCwgMTFdXG4gICAgcm91bmQ6IFswLCAxNl1cbiAgICBkZWZjb246IFsxLCA1XVxuICAgIG1pbG9wczogWzAsIDVdXG4gICAgc3BhY2U6IFswLCA4XVxuXG4gIHJhbmdlID0gcmFuZ2VzW2lkXVxuXG4gIGlmIHZhbCA8IHJhbmdlWzBdXG4gICAgcmV0dXJuIHJhbmdlWzFdXG4gIGlmIHZhbCA+IHJhbmdlWzFdXG4gICAgcmV0dXJuIHJhbmdlWzBdXG4gIHZhbFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhcmdzLi4uKS0+XG4gIGRvY3VtZW50LnRpdGxlID0gYXJncy5qb2luKCcgfCAnKSArICcgLSBUd2lTdHJ1ZydcbiIsIm1vZHVsZS5leHBvcnRzID0gKGRpciktPiBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID4gMFxuICAgIHJldHVybiAnKydcbiAgaWYgbnVtIDwgMFxuICAgIHJldHVybiAnLSdcbiAgcmV0dXJuICcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID09IDBcbiAgICBvdXQgPSAn4oCUJ1xuICBpZiBudW0gPiAwXG4gICAgb3V0ID0gXCIrI3tudW19XCJcbiAgaWYgbnVtIDwgMFxuICAgIG91dCA9IG51bVxuICBvdXRcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBzaWduID0gJydcbiAgaWYgbnVtID4gMFxuICAgIHNpZ24gPSAnKydcbiAgY29uc29sZS5sb2cgc2lnbiArIG51bVxuICByZXR1cm4gc2lnbiArIG51bVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoYSxiKS0+IGEtYlxuIiwibnVtVG9DaGFyID0gcmVxdWlyZSAnLi9udW1Ub0NoYXInXG5cbiMgVHVybiBhIGdhbWUgc3RhdGUgb2JqZWN0IGludG8gYSBzdHJpbmcsIHZhbHVlcyBkZWxpbWl0ZWQgYnkgaW5kZXggaW4gdGhlIHN0cmluZ1xuI1xuIyBCeXRlcyAgICAgSXRlbXNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgMC03ICAgICAgIEJvYXJkIHN0YXRlOiAgU2NvcmUsIERlZmNvbiwgVHVybiwgUm91bmQsXG4jICAgICAgICAgICAgICAgICAgICAgICAgIE1PIFVTQSwgTU8gVVNTUiwgU3BhY2UgVVNBLCBTcGFjZSBVU1NSXG4jIDgtMTc2ICAgICBDb3VudHJ5IElQcywgMiBieXRlcyBlYWNoLCBzZXF1ZW50aWFsbHkgYnkgaWRcbm1vZHVsZS5leHBvcnRzID1cbiAgZW5jb2RlOiAoc3RhdGUpLT5cbiAgICBnYW1lID0gc3RhdGUuZ2FtZVxuICAgIGlwcyA9IHN0YXRlLmlwc1xuXG4gICAgIyBTY29yZSBpcyBmcm9tIC0yMCB0byArMjAsIGJ1dCB0aGlzIGVuY29kZXIgaXMgcG9zaXRpdmUgaW50ZWdlcnMgb25seVxuICAgIGJvYXJkID0gW1xuICAgICAgZ2FtZS5zY29yZSArIDIwLCBnYW1lLmRlZmNvbiwgZ2FtZS50dXJuLCBnYW1lLnJvdW5kLFxuICAgICAgZ2FtZS5taWxvcHNbMF0sIGdhbWUubWlsb3BzWzFdLCBnYW1lLnNwYWNlWzBdLCBnYW1lLnNwYWNlWzFdXG4gICAgXVxuXG4gICAgIyBGaXJzdCAyIGlwcyBhcmUgdGhlIHN1cGVycG93ZXJzIC0gcHJldHR5IHVzZWxlc3MsIHNob3VsZCBjaGFuZ2UgaW4gZnV0dXJlXG4gICAgYm9hcmQuY29uY2F0IF8uZmxhdHRlbiBpcHMuc2xpY2UoMilcbiAgICAgIC5tYXAgbnVtVG9DaGFyLmVuY29kZVxuICAgICAgLmpvaW4gJydcbiAgICAgIFxuICBkZWNvZGU6IChzdHIpLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3Qgc3RyP1xuICAgIGFyciA9IHN0ci5zcGxpdCgnJykubWFwIChlbCktPiBudW1Ub0NoYXIuZGVjb2RlIGVsXG4gICAgYm9hcmRBcnIgPSBhcnIuc2xpY2UoMCw4KVxuICAgIGlwQXJyID0gYXJyLnNsaWNlKDgpXG5cbiAgICBbc2NvcmUsIGRlZmNvbiwgdHVybiwgcm91bmQsIG1vdXNhLCBtb3Vzc3IsIHNwdXNhLCBzcHVzc3JdID0gYm9hcmRBcnJcbiAgICBtaWxvcHMgPSBbbW91c2EsIG1vdXNzcl1cbiAgICBzcGFjZSA9IFtzcHVzYSwgc3B1c3NyXVxuICAgIHNjb3JlIC09IDIwXG4gICAgZ2FtZSA9IHtzY29yZSwgZGVmY29uLCB0dXJuLCByb3VuZCwgbWlsb3BzLCBzcGFjZX1cblxuICAgIGlwcyA9IFtdXG4gICAgZm9yIGlwLCBpbmRleCBpbiBpcEFyclxuICAgICAgaXBzSW5kZXggPSBNYXRoLmZsb29yIGluZGV4LzJcbiAgICAgIHNpZGVJbmRleCA9IGluZGV4ICUgMlxuICAgICAgaWYgc2lkZUluZGV4ID09IDBcbiAgICAgICAgaXBzW2lwc0luZGV4XSA9IFtpcF1cbiAgICAgIGVsc2VcbiAgICAgICAgaXBzW2lwc0luZGV4XVtzaWRlSW5kZXhdID0gaXBcblxuICAgICMgQWRkIHRoZSBzdXBlcnBvd2VyIElQcyBiYWNrIGluXG4gICAgaXBzLnVuc2hpZnQgWzAsMF0sIFswLDBdXG5cbiAgICB7Z2FtZSwgaXBzfVxuXG4iLCJnZXRJcFN0YXRzID0gKGlwcywgY291bnRyaWVzKS0+XG4gIGFjY3VtdWxhdG9yID0gLT5cbiAgICBidGw6IDBcbiAgICBub246IDBcbiAgICB0b3RhbDogMFxuICAgIGV1OiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGFzOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIG1lOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGFmOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIHNhOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGNhOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuXG4gIGZuID0gKGFjY3VtLCBpcHMsIGNvdW50cnlJZCktPlxuICAgIGNvdW50cnkgPSBfLmZpbmQgY291bnRyaWVzLCBpZDogcGFyc2VJbnQoY291bnRyeUlkLCAxMClcbiAgICBpZiBpcHNbMF0gLSBpcHNbMV0gPj0gY291bnRyeS5zdGFiXG4gICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0udG90YWwrK1xuICAgICAgYWNjdW0udG90YWwrK1xuICAgICAgaWYgY291bnRyeS5idGxcbiAgICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLmJ0bCsrXG4gICAgICAgIGFjY3VtLmJ0bCsrXG4gICAgICBlbHNlXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5ub24rK1xuICAgICAgICBhY2N1bS5ub24rK1xuICAgIGFjY3VtXG5cbiAgIyBGbGlwcGVkIHRvIGhhdmUgVVNTUiBpcHMgZmlyc3RcbiAgaXBzUmV2ID0gXy5tYXAgaXBzLCAoaXBzKS0+IF8uY2xvbmVEZWVwKGlwcykucmV2ZXJzZSgpXG5cbiAgdXNhID0gXy5yZWR1Y2UgaXBzLCBmbiwgYWNjdW11bGF0b3IoKVxuICB1c3NyID0gXy5yZWR1Y2UgaXBzUmV2LCBmbiwgYWNjdW11bGF0b3IoKVxuXG4gIHt1c2EsIHVzc3J9XG5cbnN1bVJlZ2lvbiA9IChtZXRyaWMsIHN1bSwgcmVnaW9uKS0+IHN1bSArIHJlZ2lvblttZXRyaWNdXG5cbmdldFJlZ2lvblN0YXRzID0gKGlwU3RhdHMsIHJlZ2lvbnMpLT5cbiAgc3RhdHMgPSBfLm1hcFZhbHVlcyBpcFN0YXRzLCAoaGVybywgcG93ZXIsIHBvd2VycyktPlxuICAgIHZpbGxhaW4gPSBpZiBwb3dlciA9PSAndXNhJyB0aGVuIHBvd2Vycy51c3NyIGVsc2UgcG93ZXJzLnVzYVxuICAgIHJlZ2lvblN0YXRzID0gcmVnaW9ucy5tYXAgKHJlZ2lvbiktPlxuICAgICAgaFJlZ2lvbiA9IGhlcm9bcmVnaW9uLmlkXVxuICAgICAgdlJlZ2lvbiA9IHZpbGxhaW5bcmVnaW9uLmlkXVxuICAgICAgZG9taW5hdGlvbiA9IGhSZWdpb24ubm9uID4gMCBhbmQgaFJlZ2lvbi5idGwgPiB2UmVnaW9uLmJ0bCBhbmQgaFJlZ2lvbi50b3RhbCA+IHZSZWdpb24udG90YWxcbiAgICAgIGNvbnRyb2wgPSBoUmVnaW9uLmJ0bCA9PSByZWdpb24ubnVtQnRsIGFuZCBoUmVnaW9uLnRvdGFsID4gdlJlZ2lvbi50b3RhbFxuICAgICAgcHJlc2VuY2UgPSBub3QgZG9taW5hdGlvbiBhbmQgbm90IGNvbnRyb2wgYW5kIGhSZWdpb24udG90YWwgPiAwXG4gICAgICB7IHByZXNlbmNlLCBkb21pbmF0aW9uLCBjb250cm9sIH1cblxuICAgIHJlZ2lvblN0YXRzID0gXy56aXBPYmplY3QgXy5wbHVjayhyZWdpb25zLCAnaWQnKSwgcmVnaW9uU3RhdHNcbiAgICByZWdpb25TdGF0cyA9IF8uYXNzaWduIHJlZ2lvblN0YXRzLFxuICAgICAgcHJlc2VuY2U6IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAncHJlc2VuY2UnKSwgMFxuICAgICAgZG9taW5hdGlvbjogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdkb21pbmF0aW9uJyksIDBcbiAgICAgIGNvbnRyb2w6IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnY29udHJvbCcpLCAwXG4gIFxuICBzdGF0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IChpcHMsIGNvdW50cnlBcnIsIHJlZ2lvbkFyciktPlxuICBjb3VudHJpZXMgPSBnZXRJcFN0YXRzKGlwcywgY291bnRyeUFycilcbiAgcmVnaW9ucyA9IGdldFJlZ2lvblN0YXRzKGNvdW50cmllcywgcmVnaW9uQXJyKVxuICB7Y291bnRyaWVzLCByZWdpb25zfVxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKHBvd2VyKS0+IGlmIHBvd2VyID09ICd1c2EnIHRoZW4gMCBlbHNlIDFcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0cj0nJyktPiBzdHIuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyLCBsZW49MyktPiAoJzAwMCcgKyBzdHIpLnN1YnN0cigtbGVuLGxlbilcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0Fib3V0VmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Fib3V0VmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTgnLCBbXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTEyJyxcbiAgICAgICAgICAgIFIuaDIge30sIFtcbiAgICAgICAgICAgICAgXCJBYm91dCBcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHdpJywgJ1R3aSdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3N0cnVnJywgJ1N0cnVnJ1xuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiVHdpU3RydWcgd2FzIGNyZWF0ZWQgYXMgYSBjYXJkIHJlZmVyZW5jZSBmb3IgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsXG4gICAgICAgICAgICAgICAgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICAgIFwiLiBJdCBoYXMgc2luY2UgZXhwYW5kZWQgdG8gaW5jbHVkZSBhIHBsYXlhYmxlIHZlcnNpb24gb2YgdGhlIGJvYXJkIGZvclxuICAgICAgICAgICAgICBsb2NhbCBnYW1lcyB3aXRob3V0IHRha2luZyB1cCBhcyBtdWNoIHRhYmxlIHNwYWNlLlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJGb3IgbW9yZSBpbi1kZXB0aCBzdHJhdGVneSwgbG9vayBubyBmdXJ0aGVyIHRoYW4gdGhlIGluaW1pdGFibGUgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgICBcIi4gSXQgaGFzIHRvbnMgb2YgZ3JlYXQgY29udGVudCBhbmRcbiAgICAgICAgICAgICAgYW5hbHlzaXMgYXZhaWxhYmxlLCBpbmNsdWRpbmcgZGlzY3Vzc2lvbnMgYWJvdXQgbmVhcmx5IGV2ZXJ5IGNhcmQuXG4gICAgICAgICAgICAgIFBsZWFzZSBzdXBwb3J0IFR3aWxpZ2h0IFN0cmF0ZWd5IGFuZCBpdHMgYXV0aG9yLCBcIlxuICAgICAgICAgICAgICBSLmVtIHt9LCBcInRoZW9yeVwiXG4gICAgICAgICAgICAgIFwiLCBieSBwdXJjaGFzaW5nIFR3aWxpZ2h0IFN0cnVnZ2xlIGZyb20gQW1hem9uIG9uIHRoZSBzaWRlYmFyIG9mIGhpc1xuICAgICAgICAgICAgICBzaXRlLCBvciBieSBwYXlpbmcgc29tZSBtb25leSBmb3IgdGhlIGFzc29jaWF0ZWQgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9sZWFucHViLmNvbS90d2lsaWdodHN0cmF0ZWd5XCIsIFwiZS1ib29rXCJcbiAgICAgICAgICAgICAgXCIuIEl0J3MgVHdpbGlnaHQgU3RyYXRlZ3kgaW4gYm9vayBmb3JtIGFuZCBkZXNlcnZlcyB5b3VyIG1vbmV5LlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vamp0LmlvL1wiLCBcIkphc29uIFRyaWxsXCJcbiAgICAgICAgICAgICAgXCIuIFNvdXJjZSBhdmFpbGFibGUgb24gXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Z1wiLCBcIkdpdGh1YlwiXG4gICAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLmgyIHt9LCBcIkFib3V0IFR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFIuYmxvY2txdW90ZSB7fSwgW1xuICAgICAgICAgICAgICBSLnAge30sIFwiVHdpbGlnaHQgU3RydWdnbGUgaXMgYSBjYXJkIGRyaXZlbiBnYW1lIHBsYXllZCBvdmVyIGEgbWF4aW11bSBvZiAxMCB0dXJucyBbZWFjaCB3aXRoIDYgb3IgNyByb3VuZHNdLiBUaGUgZ2FtZSBtYXkgZW5kIHNvb25lciAoYW5kIGZyZXF1ZW50bHkgZG9lcykuXCJcbiAgICAgICAgXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJbSXRdIGlzIGZ1bmRhbWVudGFsbHkgYSBnYW1lIGFib3V0IGFyZWEgY29udHJvbC4gVGhlcmUgYXJlIHNpeCBnZW9wb2xpdGljYWwgcmVnaW9ucyBvbiB0aGUgbWFwOiBFdXJvcGUgKHNwbGl0IGludG8gRWFzdGVybiBhbmQgV2VzdGVybiBFdXJvcGUgc3VicmVnaW9ucyksIEFzaWEgKGluY2x1ZGluZyB0aGUgU291dGhlYXN0IEFzaWEgc3VicmVnaW9uKSwgdGhlIE1pZGRsZSBFYXN0LCBBZnJpY2EsIENlbnRyYWwgQW1lcmljYSwgYW5kIFNvdXRoIEFtZXJpY2EuIFdpdGhpbiBlYWNoIHJlZ2lvbiBhcmUgY291bnRyaWVzIHRoYXQgaGF2ZSBhIHN0YWJpbGl0eSBudW1iZXIsIHJlcHJlc2VudGluZyBob3cgc3RhYmxlIHRoZSBnb3Zlcm5tZW50IHRlbmRzIHRvIGJlLlwiXG5cbiAgICAgICAgICAgICAgUi5wIHt9LCBcIkhhdmluZyBjb250cm9sIG9mIGNvdW50cmllcyBoZWxwcyBkZXRlcm1pbmUgd2hldGhlciB5b3UgaGF2ZSBwcmVzZW5jZSwgZG9taW5hdGlvbiwgb3IgY29udHJvbCBvZiBhIHJlZ2lvbiwgd2hpY2ggaW4gdHVybiBoZWxwcyB5b3UgZWFybiB2aWN0b3J5IHBvaW50cy4gV2l0aGluIGVhY2ggcmVnaW9uLCB0aGVyZSBhcmUgYSBudW1iZXIgb2YgYmF0dGxlZ3JvdW5kIGNvdW50cmllcywgd2hpY2ggYXJlIGNvbnNpZGVyZWQga2V5IHRvIHRoZSByZWdpb24uXCJcbiAgICAgICAgICAgICAgUi5wIHt9LFxuICAgICAgICAgICAgICAgIFIuZW0ge30sXG4gICAgICAgICAgICAgICAgICBSLmEgaHJlZjogJ2h0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS90aHJlYWQvNDcxOTUzL3JvZ2Vycy1yZXZpZXdzLWRlbHV4ZS10d2lsaWdodC1zdHJ1Z2dsZS1jb21wcmVoZW5zJywgJ0ZvcnVtIHBvc3QgYnkgbGVyb3k0MydcbiAgICAgICAgICAgIF1cblxuICAgICAgICBcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNCcsIFtcbiAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWcgaW1nLWZsdWlkIEFib3V0Vmlldy10c2JveCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICAgIF1cbiAgICAgIF1cblxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTEyJyxcbiAgICAgICAgICBSLnAge30sXG4gICAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaW1nLWxpbmsnLCBocmVmOiBcIi9pbWFnZXMvdHNib2FyZC5qcGdcIixcbiAgICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nIGltZy1mbHVpZCBpbWctY2VudGVyJywgc3JjOiAnL2ltYWdlcy90c2JvYXJkLW1kLmpwZydcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9TdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeVZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmQnXG5cbnJlZHVjZVNob3J0Y3V0cyA9IChhcnIsIHNob3J0Y3V0KS0+XG4gIGFyci5wdXNoIFIuZHQge30sIHNob3J0Y3V0LmtleVxuICBhcnIucHVzaCBSLmRkIHt9LCBzaG9ydGN1dC5kZXNjXG4gIGFyclxuXG5cbkJvYXJkSW5mbyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIHNjcm9sbFRvcDogLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8gMCwwXG4gICAgLCAwXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICBzaG9ydGN1dHM6XG4gICAgICBpcDogW1xuICAgICAgICB7IGtleTonaScsIGRlc2M6ICdFbnRlciBJUCBwbGFjZW1lbnQgYnkga2V5Ym9hcmQgKElQYkspIG1vZGUnIH1cbiAgICAgICAgeyBrZXk6J2VzYycsIGRlc2M6ICdHbyBcInVwXCIgKGNvdW50cnkgLT4gY29udGluZW50IC0+IGV4aXQgSVBiSyBtb2RlKScgfVxuICAgICAgICB7IGtleTonZW50ZXInLCBkZXNjOiAnKHNhbWUgYXMgYWJvdmUpJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNBIGluZmx1ZW5jZSBpbmMvZGVjICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5OidyL1InLCBkZXNjOiAnVVNTUiBpbmZsdWVuY2UgaW5jL2RlYyAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonZXNjJywgZGVzYzogJ0NhbmNlbCBJUCBwbGFjZW1lbnQgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J2VudGVyJywgZGVzYzogJ0NvbmZpcm0gSVAgcGxhY2VtZW50ICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICBdXG4gICAgICBsZWZ0OiBbXG4gICAgICAgIHsga2V5OidzL1MnLCBkZXNjOiAnU2NvcmUgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonZC9EJywgZGVzYzogJ0RlZmNvbiBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidtL00nLCBkZXNjOiAnVVNBIE1pbGl0YXJ5IE9wcyBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidvL08nLCBkZXNjOiAnVVNTUiBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonaCcsIGRlc2M6ICdTaG93L2hpZGUgQWN0aW9uIEhpc3RvcnknIH1cbiAgICAgICAgeyBrZXk6J2MnLCBkZXNjOiAnUm9sbCBkaWNlJyB9XG4gICAgICBdXG4gICAgICByaWdodDogW1xuICAgICAgICB7IGtleTondC9UJywgZGVzYzogJ1R1cm4gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonci9SJywgZGVzYzogJ1JvdW5kIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3AvUCcsIGRlc2M6ICdVU0EgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNTUiBTcGFjZSBSYWNlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3onLCBkZXNjOiAnVW5kbyAoQWN0aW9uIEhpc3RvcnkpJyB9XG4gICAgICAgIHsga2V5Oid5JywgZGVzYzogJ1JlZG8gKEFjdGlvbiBIaXN0b3J5KScgfVxuICAgICAgXVxuICAgICAgXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTEyJywgW1xuICAgICAgICAgIFIuaDMge30sICdWaXJ0dWFsIFR3aWxpZ2h0IFN0cnVnZ2xlIGJvYXJkJ1xuICAgICAgICAgIFIucCB7fSwgXCJUaGlzIGlzIGEgZnVsbHkgcGxheWFibGUgYm9hcmQgd2l0aCBhIG1vcmVcbiAgICAgICAgICAgIGNvbXBhY3QgbGF5b3V0IHRvIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMsIGxpa2UgYSBDaHJvbWVib29rIG9yIGlQYWQuIEp1c3QgYWRkIGNhcmRzXG4gICAgICAgICAgICBhbmQgeW91J2xsIGJlIGFibGUgdG8gcGxheSBhbnl3aGVyZS4gVGhlIGJvYXJkIGlzbid0IGF3YXJlIG9mIHRoZSBydWxlcywgbm9yIHdpbGxcbiAgICAgICAgICAgIGl0IGRvIGFueXRoaW5nIGF1dG9tYXRpY2FsbHkuIFVzZSBpdCBhcyB5b3Ugd291bGQgYSBwaHlzaWNhbCBjb3B5IG9mIHRoZSBnYW1lLlwiXG4gICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICBcIlRoaXMgZ2FtZSwgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOiBcIiMvYm9hcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgICAgICAgIFIuY29kZSB7fSwgQHByb3BzLmlkXG4gICAgICAgICAgICBcIiwgd2lsbCBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIgYW5kIGNhbiBiZSBib29rbWFya2VkIGFuZCByZXN1bWVkIGF0IGEgbGF0ZXIgdGltZSwgZXZlbiBpZiB5b3UgY2xvc2UgeW91ciBicm93c2VyLiBcIlxuICAgICAgICAgICAgUi5hIG9uQ2xpY2s6IEBzY3JvbGxUb3AsIGhyZWY6JyMvYm9hcmQnLCAnQ2xpY2sgaGVyZSB0byBzdGFydCBhIG5ldyBnYW1lJ1xuICAgICAgICAgICAgJy4nXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgVVJMIGNvbnRhaW5zIHRoZSBjb21wbGV0ZSBzdGF0ZSBvZiB0aGUgYm9hcmQgYW5kIHdpbGxcbiAgICAgICAgICAgIHVwZGF0ZSB3aXRoIGVhY2ggYWN0aW9uIHRha2VuLiBUaGlzIGNhbiBiZSB1c2VkIHRvIHBsYXkgcmVtb3RlbHlcbiAgICAgICAgICAgIHdpdGggc29tZW9uZSBieSBzZW5kaW5nIHRoZSBVUkwgYmFjayBhbmQgZm9ydGguIEZvclxuICAgICAgICAgICAgaW5zdGFuY2UsIGlmIHlvdSB3ZXJlIHRoZSBVU1NSIHN0YXJ0aW5nIGEgbmV3IGdhbWUsIHlvdSB3b3VsZCBwbGFjZSB5b3VyXG4gICAgICAgICAgICBpbml0aWFsIGluZmx1ZW5jZSB0aGVuIGNvcHkgdGhlIFVSTCBhbmQgc2VuZCBpdCB0byB5b3VyIG9wcG9uZW50LiBUaGV5XG4gICAgICAgICAgICB3b3VsZCBnbyB0byB0aGF0IFVSTCwgcGxhY2UgdGhlaXIgaW5mbHVlbmNlIGFuZCBzZW5kIHRoZSBuZXcgVVJMIGJhY2sgdG8geW91LiBMYXRoZXIsIHJpbnNlLCByZXBlYXQuXCJcbiAgICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctNicsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIkluc3RydWN0aW9uc1wiXG4gICAgICAgICAgUi5wIHt9LCBcIlRvIGFkZC9yZW1vdmUgaW5mbHVuY2UgaW4gYSBjb3VudHJ5LCBjbGljayBpbiB0aGUgdG9wL2JvdHRvbSBvZiB0aGUgaW5mbHVlbmNlIHNwYWNlIG9uIHRoZSBkZXNpcmVkIHNpZGUgKFVTQSBvbiBsZWZ0LCBVU1NSIG9uIHJpZ2h0KS5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyB1bmRvL3JlZG8gb25lIG9yIG1vcmUgYWN0aW9ucywgcHJlc3MgWi9ZIG9uZSBvciBtb3JlIHRpbWVzLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIlRoZSBkaWNlIGNhbiBiZSByb2xsZWQgaW5kaXZpZHVhbGx5IGJ5IGNsaWNraW5nIG9uIHRoZW0sIG9yIGFzIGEgcGFpciBieSBjbGlja2luZyBvbiBcXFwiUk9MTCBESUNFXFxcIi5cIlxuICAgICAgICAgIFIucCB7fSwgXCJFYWNoIHN1cGVycG93ZXIgYm94IChVU0EsIFVTU1IpIHNob3dzIHRoZSBudW1iZXIgb2YgY29udHJvbGxlZCBiYXR0bGVncm91bmQgY291bnRyaWVzIG9uIHRvcC4gT24gdGhlIGJvdHRvbSBpdCBzaG93cyB0aGUgbnVtYmVyIG9mIHJlZ2lvbnMgaW4gd2hpY2ggdGhlIHBvd2VyIGhhcyBwcmVzZW5jZSwgZG9taW5hdGlvbiwgYW5kIGNvbnRyb2wuIEZvciBleGFtcGxlLCBpZiB0aGUgVVNTUiBoYWQgXFxcIjQgMiAxXFxcIiwgaXQgd291bGQgbWVhbiB0aGF0IHRoZXkgaGF2ZSBwcmVzZW5jZSBpbiA0IHJlZ2lvbnMsIGRvbWluYXRlIDIsIGFuZCBjb250cm9sIDEuXCJcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctNicsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIktleWJvYXJkIFNob3J0Y3V0c1wiXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLmxlZnQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBjb2wtbGctNicsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMucmlnaHQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTEyJywgW1xuICAgICAgICAgICAgICBSLmg0IHt9LCBcIkluZmx1ZW5jZSBwbGFjZW1lbnQgYnkga2V5Ym9hcmRcIlxuICAgICAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBCb2FyZFBhZ2Utc2hvcnRjdXRzLWlwJywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5pcCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuIFxuICBkaXNwbGF5TmFtZTogJ0JvYXJkVmlldydcbiAgXG4gIHN0YXRlSGlzdG9yeTogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICBAc3RhdGVIaXN0b3J5ID0gbmV3IEJvYXJkU3RhdGVIaXN0b3J5IGlkOiBAcHJvcHMuZ2FtZUlkXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHdpZHRoOiAxMTQwXG4gICAgaGVpZ2h0OiA3MzBcbiAgICBub2RlOlxuICAgICAgd2lkdGg6IDY2XG4gICAgICBoZWlnaHQ6IDUwXG4gICAgICBndXR0ZXI6IDE0XG4gICAgICB0aXRsZUhlaWdodDogMTZcbiAgICAgIHRpdGxlRm9udFNpemU6IDEyXG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkVmlldycsIFtcbiAgICAgIEJvYXJkU3RhdGVIaXN0b3J5Vmlld1xuICAgICAgICBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnlcbiAgICAgICAga2V5OiBcIkJvYXJkU3RhdGVIaXN0b3J5LSN7QHByb3BzLmdhbWVJZH1cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgW1xuICAgICAgICBCb2FyZCBfLmFzc2lnbiBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnksIEBwcm9wc1xuICAgICAgICBCb2FyZEluZm8gaWQ6IEBwcm9wcy5nYW1lSWRcbiAgICAgIF1cbiAgICBdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFBpY1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdib2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlcicsXG4gICAgICAgIFIuaDIge30sICdCb2FyZCdcbiAgICAgIFIuYSBocmVmOicvaW1hZ2VzL3RzYm9hcmQuanBnJyxcbiAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnZmx1aWQnLCBzcmM6Jy9pbWFnZXMvdHNib2FyZC5qcGcnXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxubW9kdWxlLmV4cG9ydHMgID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkVmlldydcbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgJCh3aW5kb3cpLm9uICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9uICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub24gJ2tleXByZXNzJywgQGhhbmRsZUtleVByZXNzXG4gICAgQGdldFN0cmF0ZWd5KClcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICB3aW5kb3cub25rZXlwcmVzcyA9IG51bGxcbiAgICAkKHdpbmRvdykub2ZmICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9mZiAncmVzaXplJywgQGZsb2F0aW5nQ2FyZFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgQGdldFN0cmF0ZWd5KClcbiAgICAjQHNldFdpbmRvd0tleXByZXNzSGFuZGxlcigpXG5cbiAgZmxvYXRpbmdDYXJkOiAtPlxuICAgICRoZWFkZXIgPSAkIEByZWZzLmhlYWRlci5nZXRET01Ob2RlKClcbiAgICAkaW1nID0gJCBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKVxuICAgICR3aW4gPSAkIHdpbmRvd1xuICAgIGhvID0gJGhlYWRlci5vZmZzZXQoKVxuICAgIGlzU2Nyb2xsaW5nID0gJHdpbi5zY3JvbGxUb3AoKSA+IGhvLnRvcCArIGhvLmhlaWdodFxuICAgICRpbWcudG9nZ2xlQ2xhc3MgJ2NhcmQtaW1nLXNjcm9sbCcsIGlzU2Nyb2xsaW5nXG4gICAgJGltZy5jc3MgJ3JpZ2h0JywgXCIjeygkd2luLndpZHRoKCkgLSBoby53aWR0aCAtIDE1KSAvIDJ9cHhcIlxuXG4gIGhhbmRsZUtleVByZXNzOiAoZXYpIC0+XG4gICAgICBrQyA9IGV2LmtleUNvZGVcbiAgICAgIGlmIGtDID09IDEwNCBvciBrQyA9PSA3MlxuICAgICAgICBpZCA9IEBwcm9wcy5wcmV2Q2FyZC5pZFxuICAgICAgaWYga0MgPT0gMTA4IG9yIGtDID09IDc2XG4gICAgICAgIGlkID0gQHByb3BzLm5leHRDYXJkLmlkXG4gICAgICBpZiBpZD9cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIjL2NhcmQvI3tpZH1cIlxuXG4gIGdldFN0cmF0ZWd5OiAtPlxuICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgZGF0YS4uLjwvcD4nXG4gICAgJC5nZXQgXCIvZGF0YS9jYXJkU3RyYXRlZ3lMaW5rZWQvI3tsaWJzLnplcm9QYWQoQHByb3BzLmNhcmQuaWQpfS5odG1sXCIsIChkYXRhKT0+XG4gICAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9IGRhdGFcblxuICByZW5kZXI6IC0+XG4gICAgY2FyZCA9IEBwcm9wcy5jYXJkXG4gICAgaW1hZ2VVcmwgPSBcIi9pbWFnZXMvY2FyZHMvI3tsaWJzLnplcm9QYWQoY2FyZC5pZCl9LmpwZ1wiXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciBjbGVhcmZpeCcsIHJlZjogJ2hlYWRlcicsXG4gICAgICAgIFIuaDIgY2xhc3NOYW1lOiBsaWJzLmNhcmRDbGFzc05hbWUoY2FyZCksIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLW9wcycsIGlmIGNhcmQub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgY2FyZC5vcHNcbiAgICAgICAgICBcIiN7Y2FyZC50aXRsZX0gXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLWlkJywgXCIjI3tjYXJkLmlkfVwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZC1uYXYnLCBbXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLnByZXZDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LXByZXYnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5wcmV2Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAn4peAICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhIKSdcbiAgICAgICAgICAgICAgJyBwcmV2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMubmV4dENhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtbmV4dCd9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLm5leHRDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgICduZXh0ICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhMKSdcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJyDilrYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBSLnAge2NsYXNzTmFtZTogJ3B1bGwtbGVmdCBjYXJkLWJvZHknfSwgY2FyZC50ZXh0XG4gICAgICBSLmltZyBrZXk6IGltYWdlVXJsLCBzcmM6IGltYWdlVXJsLCBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHJlZjonY2FyZEltZydcbiAgICAgIFIuZGl2IHtjbGFzc05hbWU6ICdjYXJkLXN0cmF0ZWd5JywgaWQ6ICdjYXJkLXN0cmF0ZWd5J30sIFtcbiAgICAgICAgUi5oMyB7fSwgW1xuICAgICAgICAgICdTdHJhdGVnaWMgTm90ZXMgZnJvbSdcbiAgICAgICAgICAnICdcbiAgICAgICAgICBSLmEgaHJlZjpjYXJkLnVybCwgJ1R3aWxpZ2h0U3RyYXRlZ3kuY29tJ1xuICAgICAgICBdXG4gICAgICAgIFIuZGl2IHJlZjonY2FyZFN0cmF0ZWd5JyxcbiAgICAgICAgICBSLnAge30sICdMb2FkaW5nIGRhdGEnXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5DYXJkTGlzdCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0NhcmRMaXN0J1xuXG4jIFdhcmdhbWVyb29tIGNhcmQgaWRzIGRpZmZlciBmcm9tIFR3aVN0cnVnIChUUyBkZWx1eGUgZWRpdGlvbilcbmlkc0Zyb21XR1IgPSAoaWRzPVtdKS0+XG4gIGlkcy5tYXAgKGlkKS0+XG4gICAgc3dpdGNoIGlkXG4gICAgICB3aGVuIDM1IHRoZW4gODFcbiAgICAgIHdoZW4gOTggdGhlbiA5OVxuICAgICAgd2hlbiA5OSB0aGVuIDEwMFxuICAgICAgd2hlbiAxMDAgdGhlbiAzNVxuICAgICAgd2hlbiAxMDEgdGhlbiAxMDJcbiAgICAgIHdoZW4gMTAyIHRoZW4gMTAzXG4gICAgICB3aGVuIDEwNyB0aGVuIDExMFxuICAgICAgd2hlbiAxMDkgdGhlbiA5OFxuICAgICAgd2hlbiAxMTAgdGhlbiAxMDRcbiAgICAgIHdoZW4gMTExIHRoZW4gMTA5XG4gICAgICB3aGVuIDExMiB0aGVuIDEwN1xuICAgICAgZWxzZSBpZFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZHNWaWV3J1xuXG4gIGRlZmF1bHRTdGF0ZTogKHByb3BzKS0+XG4gICAgZmlsdGVyID0gcHJvcHM/LnN0YXRlPy5maWx0ZXJcblxuICAgIGZ1bGxUZXh0OiBpZiBmaWx0ZXIgdGhlbiB0cnVlIGVsc2UgZmFsc2VcbiAgICBjYXJkSW1nOiBmYWxzZVxuICAgIGNhcmRGaWx0ZXJJbnB1dDogaWYgZmlsdGVyIHRoZW4gZmlsdGVyLmpvaW4oJyAnKSBlbHNlICcnXG4gICAgc29ydDogJ3N0YWdlJ1xuICAgIGZpbHRlcjogbnVsbFxuICAgIHZpZXc6ICdpbWcnXG4gICAgZmlsdGVySXNXR1I6IGZhbHNlXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5leHRQcm9wcykgLT5cbiAgICBjb25zb2xlLmxvZyAnY1dSUCcsIG5leHRQcm9wc1xuICAgIGlmIG5leHRQcm9wcy5zdGF0ZT9cbiAgICAgIEBzZXRTdGF0ZSBuZXh0UHJvcHMuc3RhdGVcbiAgICBlbHNlXG4gICAgICBAc2V0U3RhdGUgQGRlZmF1bHRTdGF0ZSgpXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIF8ubWVyZ2UgQGRlZmF1bHRTdGF0ZShAcHJvcHMpLCBAcHJvcHMuc3RhdGVcblxuICBnZXRGaWx0ZXJJZHM6ICgpIC0+XG4gICAgaWYgQHN0YXRlPy5maWx0ZXI/XG4gICAgICBmaWx0ZXJJZHMgPSBAc3RhdGUuZmlsdGVyLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVHJ1dGh5KVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVW5pcXVlKVxuICAgIGlmIG5vdCBmaWx0ZXJJZHM/IHRoZW4gZmlsdGVySWRzID0gW11cbiAgICByZXR1cm4gZmlsdGVySWRzXG5cbiAgIyBKdXN0IGZpbHRlcmluZyBieSBpZCByaWdodCBub3dcbiAgZ2V0RmlsdGVyZWRDYXJkczogLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIEBwcm9wcy5jYXJkcy5maWx0ZXIgKGVsKSA9PlxuICAgICAgICBpZiBlbC5pZCBpbiBAc3RhdGUuZmlsdGVyXG4gICAgICAgICAgcmV0dXJuIGVsXG4gICAgQHByb3BzLmNhcmRzXG4gICAgICAgIFxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG4gIGdyb3VwQ2FyZHM6IChjYXJkcyA9IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKSktPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gW2NhcmRzXVxuXG4gICAgc29ydCA9IEBzdGF0ZS5zb3J0XG4gICAgaWYgc29ydCA9PSAnc2lkZSdcbiAgICAgIHNvcnQgPSAnb3duZXInXG4gICAgaWYgQHN0YXRlLnNvcnRcbiAgICAgIHJldHVybiBfLmdyb3VwQnkoY2FyZHMsIHNvcnQpXG4gICAgICAgICBcblxuICBoYW5kbGVGdWxsVGV4dDogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGZ1bGxUZXh0OiBAcmVmcy5mdWxsVGV4dC5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRJbWc6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkSW1nOiBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBJZiBXR1IgdGhlbiB3ZSBoYXZlIHRvIHRyYW5zbGF0ZSBzb21lIGlkc1xuICAgIGlzV0dSID0gdmFsdWUuc2VhcmNoKC8jLio6LykgIT0gLTFcblxuICAgICMgV0dSIGFkZHMgXCJPcHMgMzogLi4uXCIsIHNvIGRvbid0IHBpY2sgdGhvc2UgdXBcbiAgICAjIEJ1dCBzdGlsbCBwaWNrIHVwIHRoZSBzY29yaW5nIGNhcmRzXG4gICAgaWRzID0gdmFsdWUubWF0Y2goL1xcZCtbXjpdfFxcZCskfCNcXGQ6L2cpPy5tYXAgKGVsKS0+XG4gICAgICAjIFN0cmlwIG91dCBhbnkgbm9uLWRpZ2l0IGNoYXJzXG4gICAgICBlbCA9IGVsLnJlcGxhY2UgL1xcRC9nLCAnJ1xuICAgICAgcGFyc2VJbnQgZWwsIDEwXG4gICAgaWYgdmFsdWUgPT0gJycgb3Igbm90IGlkcz9cbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmaWx0ZXI6IG51bGxcbiAgICBlbHNlXG4gICAgICBpZiBpc1dHUlxuICAgICAgICBpZHMgPSBpZHNGcm9tV0dSIGlkc1xuICAgICAgaWRzID0gaWRzLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKS5maWx0ZXIobGlicy5maWx0ZXJWYWxpZENhcmRJZHMpXG4gICAgICBzdGF0ZSA9XG4gICAgICAgIGNhcmRGaWx0ZXJJbnB1dDogdmFsdWVcbiAgICAgICAgZnVsbFRleHQ6IHRydWVcbiAgICAgICAgZmlsdGVyOiBpZHNcblxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gICMgRm9ybWF0IHRoZSBpbnB1dCBmaWVsZCB0byBiZSBqdXN0IHRoZSBpZHMgb24gYmx1clxuICBoYW5kbGVDYXJkRmlsdGVyQmx1cjogLT5cbiAgICBmaWx0ZXJJZHMgPSBAZ2V0RmlsdGVySWRzKClcblxuICAgIEBzZXRTdGF0ZVxuICAgICAgY2FyZEZpbHRlcklucHV0OiBmaWx0ZXJJZHMuam9pbiAnICdcblxuICAgIGlmIGZpbHRlcklkcz8gYW5kIGZpbHRlcklkcy5sZW5ndGggPiAwXG4gICAgICBsaWJzLnFzLnNldCAnZmlsdGVyJywgZmlsdGVySWRzXG4gICAgZWxzZVxuICAgICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuICBoYW5kbGVDYXJkRmlsdGVyQ2xlYXI6ICgpLT5cbiAgICBAcmVmcy5jYXJkRmlsdGVyLmdldERPTU5vZGUoKS52YWx1ZSA9ICcnXG4gICAgQHNldFN0YXRlXG4gICAgICBmaWx0ZXI6bnVsbFxuICAgICAgY2FyZEZpbHRlcklucHV0OiAnJ1xuXG4gICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuICBzb3J0R3JvdXBUaXRsZTogKHNvcnQgPSBAc3RhdGUuc29ydCwgdmFsKS0+XG4gICAgdmFsSW50ID0gcGFyc2VJbnQgdmFsLCAxMFxuICAgIHN3aXRjaCBzb3J0XG4gICAgICB3aGVuICdvcHMnXG4gICAgICAgIHMgPSBpZiB2YWxJbnQgPiAxIHRoZW4gJ3MnIGVsc2UgJydcbiAgICAgICAgaWYgdmFsSW50ID09IDAgdGhlbiAnU2NvcmluZycgZWxzZSBcIiN7dmFsfSBPcCN7c31cIlxuICAgICAgd2hlbiAnc2lkZSdcbiAgICAgICAgaWYgdmFsID09ICd1cydcbiAgICAgICAgICAnVVNBJ1xuICAgICAgICBlbHNlIGlmIHZhbCA9PSAnbmV1dHJhbCdcbiAgICAgICAgICAnTmV1dHJhbCdcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHZhbC50b1VwcGVyQ2FzZSgpXG4gICAgICB3aGVuICdzdGFnZSdcbiAgICAgICAgc3dpdGNoIHZhbEludFxuICAgICAgICAgIHdoZW4gMSB0aGVuICdFYXJseSBXYXInXG4gICAgICAgICAgd2hlbiAyIHRoZW4gJ01pZCBXYXInXG4gICAgICAgICAgd2hlbiAzIHRoZW4gJ0xhdGUgd2FyJ1xuXG4gIGhhbmRsZVZpZXdDbGljazogKHZpZXcpLT5cbiAgICBAc2V0U3RhdGUgeyB2aWV3IH1cbiAgICBsaWJzLnFzLnNldCAndmlldycsIHZpZXdcblxuICByZW5kZXI6IC0+XG4gICAgY29uc29sZS5sb2cgJ3JlbmRlcicsIEBzdGF0ZSwgQHByb3BzXG4gICAgc29ydExpbmsgPSAoc29ydCwgZGlzcGxheSkgPT5cbiAgICAgIGNsYXNzTmFtZSA9IGN4IGFjdGl2ZTogQHN0YXRlLnNvcnQgPT0gc29ydFxuICAgICAgcmVmID0gXCIje3NvcnR9U29ydFwiXG4gICAgICBvbkNsaWNrID0gKCktPlxuICAgICAgICBsaWJzLnFzLnNldCAnc29ydCcsIHNvcnRcbiAgICAgIFIuYSB7b25DbGljaywgcmVmLCBjbGFzc05hbWV9LCBkaXNwbGF5XG5cbiAgICBjYXJkcyA9IEBncm91cENhcmRzIEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKVxuXG4gICAgY2FyZExpc3RzID0gXy5tYXAgY2FyZHMsIChjYXJkcywgdmFsKT0+XG4gICAgICBjYXJkTGlzdEhlYWRpbmcgPSBudWxsXG4gICAgICBpZiBub3QgQHN0YXRlLmZpbHRlcj9cbiAgICAgICAgY2FyZExpc3RIZWFkaW5nID0gUi5oMiBjbGFzc05hbWU6J2NhcmRMaXN0LWdyb3VwSGVhZGluZycsXG4gICAgICAgICAgQHNvcnRHcm91cFRpdGxlIEBzdGF0ZS5zb3J0LCB2YWxcbiAgICAgIFIuZGl2IHt9LCBbXG4gICAgICAgIGNhcmRMaXN0SGVhZGluZ1xuICAgICAgICBDYXJkTGlzdFxuICAgICAgICAgIGNhcmRJbWc6IEBzdGF0ZS5jYXJkSW1nXG4gICAgICAgICAgZnVsbFRleHQ6IEBzdGF0ZS5mdWxsVGV4dFxuICAgICAgICAgIGNhcmRzOiBjYXJkc1xuICAgICAgICAgIHZpZXc6IEBzdGF0ZS52aWV3XG4gICAgICBdXG5cbiAgICBjYXJkc1ZpZXdDbGFzcyA9IGN4XG4gICAgICAnY2FyZHNWaWV3JzogdHJ1ZVxuICAgICAgJ2NhcmRzVmlldy0tZmlsdGVyZWQnOiBAc3RhdGUuZmlsdGVyP1xuICAgICAgJ2NhcmRzVmlldy0tZnVsbFRleHQnOiBAc3RhdGUuZnVsbFRleHRcblxuICAgIFIuZGl2IGNsYXNzTmFtZTogY2FyZHNWaWV3Q2xhc3MsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIHJvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZENvbnRyb2xzJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2xhYmVsJywgJ1NvcnQgYnk6J1xuICAgICAgICAgICAgc29ydExpbmsgJ3N0YWdlJywgJ1N0YWdlJ1xuICAgICAgICAgICAgc29ydExpbmsgJ29wcycsICdPcHMnXG4gICAgICAgICAgICBzb3J0TGluayAnc2lkZScsICdTaWRlJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLmxhYmVsIHtodG1sRm9yOicnLCBjbGFzc05hbWU6Jyd9LCAnVmlldzogJ1xuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAnaW1nJ1xuICAgICAgICAgICAgICB0aXRsZTogJ0NhcmQgaW1hZ2UnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoLWxhcmdlICN7aWYgQHN0YXRlLnZpZXcgPT0gJ2ltZycgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICd0aXRsZSdcbiAgICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSBhbmQgb3BzJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi10aCAje2lmIEBzdGF0ZS52aWV3ID09ICd0aXRsZScgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICd0ZXh0J1xuICAgICAgICAgICAgICB0aXRsZTogJ0Z1bGwgdGV4dCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tYWxpZ24tbGVmdCAje2lmIEBzdGF0ZS52aWV3ID09ICd0ZXh0JyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICNpZDogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjdHlwZTonY2hlY2tib3gnXG4gICAgICAgICAgICAgICNyZWY6J2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVGdWxsVGV4dFxuICAgICAgICAgICAgICAjY2hlY2tlZDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmxhYmVsIHtodG1sRm9yOidmdWxsVGV4dCcsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCB0ZXh0J1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5pbnB1dFxuICAgICAgICAgICAgICAjbmFtZTogJ2NhcmRJbWcnXG4gICAgICAgICAgICAgICNpZDogJ2NhcmRJbWcnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonY2FyZEltZydcbiAgICAgICAgICAgICAgI29uQ2hhbmdlOiBAaGFuZGxlQ2FyZEltZ1xuICAgICAgICAgICAgICAjY2hlY2tlZDogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2NhcmRJbWcnLCBjbGFzc05hbWU6J2NhcmQtc2hvdy10ZXh0LWxhYmVsJ30sICdTaG93IGNhcmQgaW1hZ2UnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRzLWZpbHRlci1ieS1pZCBjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmxhYmVsIGh0bWxGb3I6J2NhcmRGaWx0ZXInLCBjbGFzc05hbWU6J2NhcmRGaWx0ZXItbGFiZWwnLCBcIkZpbHRlciBieSBpZHMgXCJcbiAgICAgICAgICBSLmlucHV0XG4gICAgICAgICAgICBuYW1lOiAnY2FyZEZpbHRlcidcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2FyZEZpbHRlci1pbnB1dCdcbiAgICAgICAgICAgIHJlZjogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICBvbkNoYW5nZTogQGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2VcbiAgICAgICAgICAgIG9uQmx1cjogQGhhbmRsZUNhcmRGaWx0ZXJCbHVyXG4gICAgICAgICAgICB2YWx1ZTogQHN0YXRlLmNhcmRGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXN0ZSBmcm9tIFdhcmdhbWVyb29tIG9yIGVudGVyIGlkcydcbiAgICAgICAgICBSLmEge2NsYXNzTmFtZTonY2FyZHMtZmlsdGVyLWJ5LWlkLWNsZWFyJywgb25DbGljazpAaGFuZGxlQ2FyZEZpbHRlckNsZWFyfSwgJ2NsZWFyJ1xuICAgICAgICBdXG4gICAgICBdXG4gICAgICBjYXJkTGlzdHNcbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ291bnRyaWVzVmlldyAnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjb3VudHJpZXNWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgJ0NvdW50cmllcydcbiAgICBdXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnlWaWV3ID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnR2FtZVBhZ2UnXG5cbiAgc3RhdGVIaXN0b3J5OiBudWxsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBzdGF0ZUhpc3RvcnkgPSBuZXcgQm9hcmRTdGF0ZUhpc3RvcnkgaWQ6IEBwcm9wcy5nYW1lSWRcblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgd2lkdGg6IDExNDBcbiAgICBoZWlnaHQ6IDczMFxuICAgIG5vZGU6XG4gICAgICB3aWR0aDogNjZcbiAgICAgIGhlaWdodDogNTBcbiAgICAgIGd1dHRlcjogMTRcbiAgICAgIHRpdGxlSGVpZ2h0OiAxNlxuICAgICAgdGl0bGVGb250U2l6ZTogMTJcblxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRWaWV3JywgW1xuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlWaWV3XG4gICAgICAgIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeVxuICAgICAgICBrZXk6IFwiQm9hcmRTdGF0ZUhpc3RvcnktI3tAcHJvcHMuZ2FtZUlkfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb250YWluZXInLCBbXG4gICAgICAgIEJvYXJkIF8uYXNzaWduIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeSwgQHByb3BzXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdIb21lVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0hvbWVWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wteHMtMTInLCBbXG4gICAgICAgICAgUi5oMSBjbGFzc05hbWU6ICd0ZXh0LWNlbnRlcicsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpIG93bmVyLXVzXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWcgb3duZXItdXNzclwiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCBibHVyYicsIFtcbiAgICAgICAgICAgIFwiVHdpU3RydWcgaXMgYSBjb21wYW5pb24gYXBwbGljYXRpb24gZm9yIFwiXG4gICAgICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIiwgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICBcIi4gSXQgd291bGQgbm90IGV4aXN0IHdpdGhvdXQgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdob21lLWxpbmsnLCBocmVmOiAnIy9ib2FyZCcsIFtcbiAgICAgICAgICAgIFIuaDMge30sICdWaXJ0dWFsIEJvYXJkJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtYm9hcmQuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRnVsbHkgcGxheWFibGUgYm9hcmQgLSBqdXN0IGFkZCBjYXJkcydcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluayBob21lLWxpbmstY2FyZHMnLCBocmVmOiAnIy9jYXJkcycsIFtcbiAgICAgICAgICAgIFIuaDMge30sICdWaWV3IENhcmRzJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtY2FyZHMuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRXhwbG9yZSB0aGUgY2FyZHMgb2YgVHdpbGlnaHQgU3RydWdnbGUnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdXaG9vcHNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuaDIge30sIFwiREVGQ09OIDFcIlxuICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCcsIFtcbiAgICAgICAgXCJMb29rcyBsaWtlIFR3aVN0cnVnIHRyaWdnZXJlZCBudWNsZWFyIHdhci4gV0hPT1BTSUUgREFJU1khXCJcbiAgICAgICAgUi5iciB7fVxuICAgICAgICBSLmEgaHJlZjpcIiMvY2FyZHNcIiwgXCJIb3cgYWJvdXQgbG9va2luZyBvdmVyIHRoZSBjYXJkcz9cIlxuICAgICAgXVxuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJ2ZW50ID0gcmVxdWlyZSAnLi92ZW50J1xubWFwRGF0YSA9IHJlcXVpcmUgJy4uL2FwcC9kYXRhL21hcC1kYXRhLmpzb24nXG5tYXBEYXRhdjIgPSByZXF1aXJlICcuLi9hcHAvZGF0YS9tYXAtZGF0YS12Mi5qc29uJ1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuc2V0UGFnZVRpdGxlID0gcmVxdWlyZSAnLi9saWJzL3NldFBhZ2VUaXRsZSdcbnFzID0gcmVxdWlyZSAnLi9saWJzL3FzJ1xuXG5zZXRSb3V0ZU9yaWdpbmFsID0gUm91dGVyOjpzZXRSb3V0ZVxuUm91dGVyOjpzZXRSb3V0ZSA9IC0+XG4gIEBjdXJyZW50Um91dGUgPSBAZ2V0Um91dGUoKVxuICBzZXRSb3V0ZU9yaWdpbmFsLmFwcGx5IHRoaXMsIGFyZ3VtZW50c1xuXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvdXRlcjogbmV3IFJvdXRlclxuXG4gICMgVGFrZXMgYSB2aWV3IG5hbWUgYW5kIGFzc29jaWF0ZWQgZGF0YVxuICBzZXRWaWV3OiAobmFtZSwgdGl0bGUsIG1lbnVBY3RpdmU9JycsIGRhdGE9e30pIC0+XG4gICAgaWYgdGl0bGU/IHRoZW4gc2V0UGFnZVRpdGxlIHRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YSwgdGl0bGV9XG4gICAgICBtZW51QWN0aXZlOiBtZW51QWN0aXZlXG4gICAgICBzbGlkZUluOiBAc3RhdGUudmlldz8ubmFtZSAhPSBuYW1lXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyk9PlxuICAgICAgc3RhdGUgPSBxcy50b09iaiBhcmdzXG4gICAgICAjIENvbnZlcnQgZmlsdGVyIGlkcyBmcm9tIHN0ciAtPiBudW1iZXJcbiAgICAgIGlmIHN0YXRlPy5maWx0ZXI/XG4gICAgICAgIGlmIG5vdCBfLmlzQXJyYXkgc3RhdGUuZmlsdGVyXG4gICAgICAgICAgc3RhdGUuZmlsdGVyID0gW3N0YXRlLmZpbHRlcl1cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBAcHJvcHMucm91dGVyXG5cbiAgICB2ZW50Lm9uICdzZXRSb3V0ZScsIHJvdXRlci5zZXRSb3V0ZS5iaW5kIHJvdXRlclxuXG4gICAgcm91dGVyLmNvbmZpZ3VyZVxuICAgICAgbm90Zm91bmQ6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ3dob29wcycsICdXaG9vcHMnXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgcm91dGVyLm9uICcvJywgQHNldFZpZXcuYmluZCB0aGlzLCAnaG9tZScsICdIb21lJ1xuXG5cbiAgICByb3V0ZXIub24gJy9jYXJkLzppZCcsIChpZCk9PlxuICAgICAgaWQgPSBwYXJzZUludCBpZCwgMTBcbiAgICAgIG5leHRJZCA9IGlmIGlkID09IDExMCB0aGVuIDEgZWxzZSBpZCArIDFcbiAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgIGNhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogaWRcbiAgICAgIG5leHRDYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IG5leHRJZFxuICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgcGFnZVRpdGxlID0gXCIje2NhcmQudGl0bGV9ICgjI3tjYXJkLmlkfSlcIlxuICAgICAgQHNldFZpZXcgJ2NhcmQnLCBwYWdlVGl0bGUsICdjYXJkcycsIHtjYXJkLCBuZXh0Q2FyZCwgcHJldkNhcmR9XG5cblxuICAgIHJvdXRlci5vbiAnL2NvdW50cmllcycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuXG5cbiAgICByb3V0ZXIub24gJy9hYm91dCcsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2Fib3V0JywgJ0Fib3V0JywgJ2Fib3V0J1xuXG5cbiAgICByb3V0ZXIub24gL2NhcmRzXFw/PyguKikvLCAoKT0+XG4gICAgICAjIElmIHdlJ3JlIG9uIGEgc21hbGwgc2NyZWVuLCByZWRpciB0aGUgdXNlciB0byB2aWV3PXRpdGxlXG4gICAgICBwYWdlUVMgPSBxcy50b09iaigpXG4gICAgICBpZiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCBhbmQgbm90IHBhZ2VRUz8udmlldz9cbiAgICAgICAgcXMuc2V0KCd2aWV3JywndGl0bGUnKVxuICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgICBzdGF0ZVJvdXRlICdjYXJkcycsICdDYXJkcycsICdjYXJkcydcblxuXG4gICAgcm91dGVyLm9uIC9nYW1lXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuXG4gICAgICBpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgZ2FtZUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiR2FtZSAje2dhbWVJZH1cIiwgXCIjL2dhbWUvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlTaG9ydGN1dHMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhdjJcblxuICAgICAgIyBDb3VudHJpZXMgYW5kIHJlZ2lvbiBpbmZvIG5vZGVzIGNvbWJpbmVkXG4gICAgICBub2RlcyA9IF8udW5pb24gY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXNcblxuICAgICAgcHJvcHMgPSB7XG4gICAgICAgIGdhbWVJZCwgY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMsIGxpbmtzLCBub2Rlc1xuICAgICAgICBpbmNvbWluZ1N0YXRlLCBjb3VudHJ5U2hvcnRjdXRzfVxuXG4gICAgICBAc2V0VmlldyAnZ2FtZScsICdHYW1lJywgJ2dhbWUnLCBwcm9wc1xuICAgICAgY29uc29sZS5sb2cgJ0dBTUUgUk9VVEUnXG5cblxuICAgIHJvdXRlci5vbiAvYm9hcmRcXC8/KFxcdyopXFwvPyguKikvLCAoZ2FtZUlkLCBpbmNvbWluZ1N0YXRlKT0+XG4gICAgICBpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgZ2FtZUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiQm9hcmQgI3tnYW1lSWR9XCIsIFwiIy9ib2FyZC8je2dhbWVJZH1cIlxuXG4gICAgICB7Y291bnRyeVNob3J0Y3V0cywgY291bnRyaWVzLCBsaW5rcywgcmVnaW9uSW5mb05vZGVzfSA9IG1hcERhdGF2MlxuXG4gICAgICAjIENvdW50cmllcyBhbmQgcmVnaW9uIGluZm8gbm9kZXMgY29tYmluZWRcbiAgICAgIG5vZGVzID0gXy51bmlvbiBjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2Rlc1xuXG4gICAgICBib2FyZFByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXNcbiAgICAgICAgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIub24gLyhhY2Nlc3NfdG9rZW4uKikvLCAocXMpPT5cbiAgICAgIGNvbnNvbGUubG9nIHFzXG5cblxuICAgIHJvdXRlci5pbml0KCcvJylcblxuIiwiTWljcm9FdmVudENsYXNzID0gcmVxdWlyZSAnLi9saWJzL01pY3JvRXZlbnRDbGFzcydcbmNsYXNzIFZlbnQgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbnZlbnQgPSBuZXcgVmVudCgpXG53aW5kb3cudmVudCA9IHZlbnRcbm1vZHVsZS5leHBvcnRzID0gdmVudFxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnZlbnQgPSByZXF1aXJlICcuLi92ZW50J1xuXG5zdXBlclN0YXRzID0gcmVxdWlyZSAnLi4vbGlicy9zdXBlclN0YXRzJ1xucmFuZ2VkR2FtZVZhbCA9IHJlcXVpcmUgJy4uL2xpYnMvcmFuZ2VkR2FtZVZhbCdcbnNpZ25lZE51bU9yRGFzaCA9IHJlcXVpcmUgJy4uL2xpYnMvc2lnbmVkTnVtT3JEYXNoJ1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi4vbGlicy9zdGF0ZUVuY29kZXInXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4uL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZSdcbmNvbnRpbmVudENvZGVGcm9tTGV0dGVyID0gcmVxdWlyZSAnLi4vbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlcidcbmZpbHRlclRydXRoeSA9IHJlcXVpcmUgJy4uL2xpYnMvZmlsdGVyVHJ1dGh5J1xuXG5Cb2FyZE5vZGUgPSByZXF1aXJlICcuL0JvYXJkTm9kZSdcbkJvYXJkTm9kZURpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlRGl2J1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cblxuc3VwZXJwb3dlclRvSW5kZXggPSAoc3RyKS0+IGlmIHN0ciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG5cbiMgUmV0dXJucyBhIHNpbXBsZSB7dXNhOiAncHJlc2VuY2UnLCB1c3NyOiAnZG9taW5hdGlvbid9XG5nZXRSZWdpb25TdGF0dXMgPSAoc3RhdHMpLT5cbiAgXy5tYXBWYWx1ZXMgc3RhdHMsIChzdGF0KS0+XG4gICAgcmV0dXJuICdjb250cm9sJyBpZiBzdGF0LmNvbnRyb2xcbiAgICByZXR1cm4gJ2RvbWluYXRpb24nIGlmIHN0YXQuZG9taW5hdGlvblxuICAgIHJldHVybiAncHJlc2VuY2UnIGlmIHN0YXQucHJlc2VuY2VcbiAgICByZXR1cm4gZmFsc2VcblxuXG5cblxuY29udGluZW50U2hvcnRjdXREYXRhID0gW1xuICB7IGNoYXI6ICdDJywgeDoxMjcsIHk6MjAwIH1cbiAgeyBjaGFyOiAnUycsIHg6MTI3LCB5OjUxMCB9XG4gIHsgY2hhcjogJ0YnLCB4OjUzMywgeTo1NTAgfVxuICB7IGNoYXI6ICdFJywgeDo0ODAsIHk6MjIwIH1cbiAgeyBjaGFyOiAnQScsIHg6ODQwLCB5OjE1MCB9XG4gIHsgY2hhcjogJ00nLCB4Ojg0MCwgeTozODAgfVxuXVxuICBcblxuIyBUYWtlcyBhbiBpcEtleVNlcXVlbmNlIGFuZCByZXR1cm5zIHRoZSBhcHBsaWNhYmxlIGNvbnRpbmVudCBhbmQgY291bnRyeVxuY29udENvdW50cnlTZWxlY3Rpb24gPSAocmVnaW9ucywgY291bnRyaWVzLCBpcEtleVNlcSA9ICcnKS0+XG4gIGNvbnRpbmVudCA9IF8uZmluZCByZWdpb25zLCB7c2hvcnRjdXQ6IGlwS2V5U2VxLmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpfVxuICBjb3VudHJ5ID0gJydcbiAgY291bnRyeUtleSA9IGlwS2V5U2VxLnNsaWNlKDIsNClcbiAgaWYgY291bnRyeUtleS5sZW5ndGggPT0gMlxuICAgIGNvdW50cnlPYmogPSBfLmZpbmQgY291bnRyaWVzLCB7c2hvcnRjdXQ6IGNvdW50cnlLZXkudG9Mb3dlckNhc2UoKSwgY29udGluZW50OiBjb250aW5lbnQ/LmNvbnRpbmVudH1cbiAgICBjb3VudHJ5ID0gY291bnRyeU9iai5zaG9ydG5hbWVcbiAgaWYgY291bnRyeUtleS5sZW5ndGggPT0gMVxuICAgIGNvdW50cnkgPSBcIiN7Y291bnRyeUtleS50b1VwcGVyQ2FzZSgpfS4uLlwiXG5cbiAgeyBjb250aW5lbnQsIGNvdW50cnkgfVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmQnXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAocHJvcHMgPSBAcHJvcHMpIC0+XG4gICAgc3RhdGVIaXN0b3J5ID0gcHJvcHMuc3RhdGVIaXN0b3J5XG4gICAgc3RhdGVIaXN0b3J5LmxvYWQoKVxuICAgIHN0YXRlID0gQGhhbmRsZUluY29taW5nU3RhdGUgcHJvcHMuaW5jb21pbmdTdGF0ZVxuICAgIGlmIG5vdCBzdGF0ZT9cbiAgICAgIHN0YXRlID0gc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKT8uc3RhdGVcbiAgICBpZiBub3Qgc3RhdGU/XG4gICAgICBnYW1lU3RhdGUgPVxuICAgICAgICBnYW1lOlxuICAgICAgICAgIHNjb3JlOiAwXG4gICAgICAgICAgdHVybjogMFxuICAgICAgICAgIHJvdW5kOiAwXG4gICAgICAgICAgZGVmY29uOiA1XG4gICAgICAgICAgbWlsb3BzOiBbMCwwXVxuICAgICAgICAgIHNwYWNlOiBbMCwwXVxuICAgICAgICBpcHM6IF8ubWFwIHByb3BzLmNvdW50cmllcywgKGMpLT4gW2MudXNhLCBjLnVzc3JdXG5cbiAgICAgIG1ldGEgPVxuICAgICAgICB0eXBlOiAndHVybidcbiAgICAgICAgaWQ6ICd0dXJuJ1xuICAgICAgICBuZXdHYW1lOiB0cnVlXG4gICAgICAgIG5ldzogMFxuICAgICAgICBvbGQ6MFxuXG4gICAgICBzdGF0ZUhpc3RvcnkuYWRkIGdhbWVTdGF0ZSwgbWV0YVxuICAgICAgc3RhdGUgPSBnYW1lU3RhdGVcblxuICAgIF8uYXNzaWduIHN0YXRlLFxuICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgaXBLZXlTZXF1ZW5jZTogJydcbiAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgIGlwSVBDaGFuZ2U6IFtdXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5QKS0+XG4gICAgc3RhdGUgPSBAZ2V0SW5pdGlhbFN0YXRlIG5QXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIHtzdGF0ZUhpc3RvcnksIGdhbWVJZH0gPSBAcHJvcHNcbiAgICAgIFxuICAgICMgV2hlbiBzdGF0ZSBjaGFuZ2VzLCBlbWl0IGV2ZW50IGZvciB0aGUgcm91dGVyIHRvIHBpY2sgdXBcbiAgICBzdGF0ZUhpc3Rvcnkub24gJ2NoYW5nZScsID0+XG4gICAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpXG4gICAgICBpZiBzdGF0ZT8gYW5kIG5vdCBzdGF0ZS5tZXRhLm5ld0dhbWVcbiAgICAgICAgc3RhdGVFbmMgPSBzdGF0ZUhpc3RvcnkuZW5jb2RlQ3VycmVudCgpXG4gICAgICAgIHZlbnQuZW1pdCAnYm9hcmRTdGF0ZUNoYW5nZScsIGdhbWVJZCwgc3RhdGVFbmNcblxuICAgIHN0YXRlSGlzdG9yeS5vbiAnZ29UbycsIChzdGF0ZSk9PlxuICAgICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG5cbiAgICBAa3BIVCA9IF8udGhyb3R0bGUgQGtleXByZXNzSGFuZGxlciwgMTAwXG4gICAgQGt1SFQgPSBfLnRocm90dGxlIEBrZXl1cEhhbmRsZXIsIDEwMFxuICAgIEBrZEhUID0gXy50aHJvdHRsZSBAa2V5ZG93bkhhbmRsZXIsIDEwMFxuXG4gICAgJChkb2N1bWVudCkub24gJ2tleXByZXNzJywgQGtwSFRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5dXAnLCBAa3VIVFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXlkb3duJywgQGtkSFRcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleXByZXNzJywgQGtwSFRcbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleXVwJywgQGt1SFRcbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleWRvd24nLCBAa2RIVFxuXG4gIGhhbmRsZUluY29taW5nU3RhdGU6IChzdGF0ZUVuY29kZWQgPSBAcHJvcHMuaW5jb21pbmdTdGF0ZSkgLT5cbiAgICBpbmRleCA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZmluZFN0YXRlSW5kZXggc3RhdGU6IHN0YXRlRW5jb2RlZFxuICAgIGlmIGluZGV4P1xuICAgICAgQHByb3BzLnN0YXRlSGlzdG9yeS5nb1RvIGluZGV4XG4gICAgICBjdXJyZW50ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIHJldHVybiBjdXJyZW50LnN0YXRlXG4gICAgZWxzZVxuICAgICAgY3VycmVudCA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpXG4gICAgICBpZiBzdGF0ZUVuY29kZWQ/IGFuZCBzdGF0ZUVuY29kZWQgIT0gJycgYW5kIGN1cnJlbnQ/Lm1ldGEuc3RhdGUgIT0gc3RhdGVFbmNvZGVkXG4gICAgICAgIHN0YXRlID0gc3RhdGVFbmNvZGVyLmRlY29kZSBzdGF0ZUVuY29kZWRcbiAgICAgICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsXG4gICAgICAgICAgdHlwZTogJ2xvYWQnXG4gICAgICAgICAgaWQ6ICdsb2FkJ1xuICAgICAgICAgIHN0YXRlOiBzdGF0ZUVuY29kZWRcbiAgICAgICAgcmV0dXJuIHN0YXRlXG5cblxuICAjIEFkZHMgdGhlIHN0YXRlIHRvIHRoZSBoaXN0b3J5XG4gICMgVGhpcyBpcyB0byBhdm9pZCBoYXZpbmcgdG8gZGVlcC1jaGVjayB0aGUgc3RhdGUgaW4gY29tcG9uZW50V2lsbFVwZGF0ZVxuICBzZXRTdGF0ZUhpc3Rvcnk6IChzdGF0ZSwgbWV0YSktPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIHN0YXRlLCBtZXRhXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAga2V5cHJlc3NIYW5kbGVyOiAoZXYpLT5cbiAgICBrQyA9IGV2LmtleUNvZGVcbiAgICBkaXIgPSBpZiBrQyA+PSA5NyB0aGVuICdpbmMnIGVsc2UgJ2RlYydcblxuICAgIGlmIEBzdGF0ZS5pcEtleVNlcXVlbmNlLmxlbmd0aCA+IDBcbiAgICAgIHJldHVybiBAaXBLZXlTZXF1ZW5jZShrQylcblxuICAgIGlmIGtDID09IDEwNSBvciBrQyA9PSA3M1xuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlIGtDXG4gICAgICByZXR1cm5cblxuICAgIHN3aXRjaCBrQ1xuICAgICAgIyAoYy9DKSBEaWNlXG4gICAgICB3aGVuIDk5LCA2N1xuICAgICAgICBAcmVmcy5Cb2FyZFN0YXR1cy5yb2xsRGljZSgpXG5cbiAgICAgICMgSGlzdG9yeVxuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAjICh6L1opIFVuZG9cbiAgICAgIHdoZW4gMTIyLCA5MFxuICAgICAgICBAdW5kb0hpc3QoKVxuICAgICAgIyAoeS9ZKSBSZWRvXG4gICAgICB3aGVuIDEyMSwgODlcbiAgICAgICAgQHJlZG9IaXN0KClcbiAgICAgICMgKGgvSCkgSGlzdG9yeSBzaG93L2hpZGVcbiAgICAgIHdoZW4gMTA0LCA3MlxuICAgICAgICBAdG9nZ2xlSGlzdCgpXG5cbiAgICAgICMgR2FtZSBwcm9wZXJ0aWVzXG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAjICh0L1QpIFR1cm4gaW5jL2RlY1xuICAgICAgd2hlbiAxMTYsIDg0XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAndHVybicsIGRpclxuICAgICAgIyAoci9SKSBSb3VuZCBpbmMvZGVjXG4gICAgICB3aGVuIDExNCwgODJcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdyb3VuZCcsIGRpclxuICAgICAgIyAoUy9zKSBTY29yZSBpbmMvZGVjXG4gICAgICB3aGVuIDExNSwgODNcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzY29yZScsIGRpclxuICAgICAgIyAoRC9kKSBEZWZjb24gaW5jL2RlY1xuICAgICAgd2hlbiAxMDAsIDY4XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnZGVmY29uJywgZGlyXG4gICAgICAjIChNL20pIFVTQSBNaWxPcHMgaW5jL2RlY1xuICAgICAgd2hlbiAxMDksIDc3XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnbWlsb3BzJywgZGlyLCAndXNhJ1xuICAgICAgIyAoTy9vKSBVU1NSIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDExMSwgNzlcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c3NyJ1xuICAgICAgIyAoUC9wKSBVU0EgU3BhY2UgaW5jL2RlY1xuICAgICAgd2hlbiAxMTIsIDgwXG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnc3BhY2UnLCBkaXIsICd1c2EnXG4gICAgICAjIChBL2EpIFVTU1IgU3BhY2UgaW5jL2RlY1xuICAgICAgd2hlbiA5NywgNjVcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3Vzc3InXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG5cbiAgIyBFc2MgZG9lc24ndCB0cmlnZ2VyIG9uIGtleXByZXNzLCBzbyBpdCBoYXMgdG8gYmUga2V5dXBcbiAga2V5dXBIYW5kbGVyOiAoZXYpLT5cbiAgICBpZiBldi5rZXlDb2RlID09IDI3XG4gICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoZmFsc2UpXG4gICAgaWYgZXYua2V5Q29kZSA9PSAyNyBvciAoMzcgPD0gZXYua2V5Q29kZSA8PSA0MClcbiAgICAgIHJldHVybiBAaXBLZXlTZXF1ZW5jZSBldi5rZXlDb2RlLCBldlxuICAgICNpZiBldi5rZXlDb2RlID09IDI3XG4gICAgICAjQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICAjcmV0dXJuXG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGtleWRvd25IYW5kbGVyOiAoZXYpLT5cbiAgICBpZiBldi5rZXlDb2RlID09IDggb3IgZXYua2V5Q29kZSA9PSAxM1xuICAgICAgQGlwS2V5U2VxdWVuY2UoZXYua2V5Q29kZSlcbiAgICAgICMgUHJldmVudCBiYWNrc3BhY2UgZnJvbSBuYXZpZ2F0aW5nIHRoZSBwYWdlXG4gICAgICAjIE9yaWRpbmFyaWx5IEkgZG9uJ3QgbGlrZSB0YWtpbmcgb3ZlciBicm93c2VyIHNob3J0Y3V0cywgYnV0IGluIHRoaXMgY2FzZVxuICAgICAgIyB3ZSB3YW50IHRvIHByZXZlbnQgdXNlcnMgZnJvbSBvdmVyLWJhY2tzcGFjaW5nXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBjbGVhcklwQ2hhbmdlOiAocmVzZXRJUHMgPSB0cnVlKS0+XG4gICAgIyBVbmRvIGFueSBpcCBjaGFuZ2VzXG4gICAgaXBDaGFuZ2UgPSBAc3RhdGUuaXBJUENoYW5nZVxuICAgIGlwU2hvd0NvdW50cmllcyA9IEBzdGF0ZS5pcFNob3dDb3VudHJpZXNcbiAgICBpZiBpcENoYW5nZS5tYXAoZmlsdGVyVHJ1dGh5KS5sZW5ndGggPiAwIGFuZCBpcFNob3dDb3VudHJpZXMubGVuZ3RoID09IDFcbiAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywge3Nob3J0Y3V0OiBpcFNob3dDb3VudHJpZXNbMF19XG4gICAgICByZXR1cm4gaWYgbm90IGNvdW50cnk/XG4gICAgICBAc2V0U3RhdGUgaXBJUENoYW5nZTogWzAsMF1cbiAgICAgIGlmIHJlc2V0SVBzXG4gICAgICAgIEBoYW5kbGVJUENsaWNrIGNvdW50cnkuaWQsICd1c2EnLCBudWxsLCAtaXBDaGFuZ2VbMF1cbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgJ3Vzc3InLCBudWxsLCAtaXBDaGFuZ2VbMV1cblxuXG4gIGNsZWFySXBLZXlTZXF1ZW5jZTogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGlwS2V5U2VxdWVuY2U6ICcnXG4gICAgICBpcFNob3dDb3VudHJpZXM6IFtdXG4gICAgICBpcFNob3dDb250aW5lbnQ6ICcnXG4gICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuXG4gIGlwS2V5U2VxdWVuY2U6IChjb2RlLCBldiktPlxuICAgICNpZiBjb2RlID09IDI3XG4gICAgICAjQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICAjZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgI3JldHVybiBmYWxzZVxuICAgIGlwS1MgPSBAc3RhdGUuaXBLZXlTZXF1ZW5jZVxuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2VcbiAgICBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxuXG4gICAgIyBCYWNrc3BhY2UgKDgpIHNob3VsZCBkZWxldGUgdGhlIGxhc3QgY2hhciBmcm9tIHRoZSBpcEtTLCBhbmQgc2V0IHRoZSBcImN1cnJlbnRcIlxuICAgICMgY2hhciB0byB0aGUgbGFzdCBjaGFyXG4gICAgIyBFbnRlciAoMTMpIHNob3VsZCBcbiAgICBcbiAgICBpZiBjb2RlID09IDI3IG9yIGNvZGUgPT0gMTNcbiAgICAgICMgRG9uJ3QgZG8gYW55dGhpbmcgaWYgd2UgZG9uJ3QgaGF2ZSBhbiBpcEtTXG4gICAgICBpZiBub3QgaXBLU1xuICAgICAgICByZXR1cm5cbiAgICAgIGlwc0NoYW5nZWQgPSBpcEtTLmxlbmd0aCA9PSA0IGFuZCBpcENoYW5nZS5maWx0ZXIoZmlsdGVyVHJ1dGh5KS5sZW5ndGggPiAwXG4gICAgICBpZiBjb2RlID09IDI3IGFuZCBpcHNDaGFuZ2VkXG4gICAgICAgIEBjbGVhcklwQ2hhbmdlKClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgY29kZSA9PSAxM1xuICAgICAgICAgIEBjbGVhcklwQ2hhbmdlKGZhbHNlKVxuICAgICAgICBkZWx0YSA9IC0xXG4gICAgICAgICMgQmFjayB1cCB0d28gc3BhY2VzIHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gICAgICAgIGlmIGlwS1MubGVuZ3RoID09IDRcbiAgICAgICAgICBkZWx0YSA9IC0yXG4gICAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsZGVsdGEpXG4gICAgICAgIGNoYXIgPSBpcEtTLnNsaWNlKC0xKVxuICAgICAgICBpcEtTID0gaXBLUy5zbGljZSgwLC0xKVxuXG4gICAgY2hhckxvd2VyID0gY2hhci50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiBub3QgaXBLUyBhbmQgbm90IGNoYXJcbiAgICAgIEBjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgcmV0dXJuXG5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUgZmFsc2VcbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAwIGFuZCBjaGFyTG93ZXIgPT0gJ2knXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgaXBLZXlTZXF1ZW5jZTogJ2knXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG5cbiAgICAjIENvbnRpbmVudCBzZWxlY3Rpb25cbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAxIGFuZCBjaGFyTG93ZXIgaW4gWydjJywncycsJ2UnLCdmJywnYScsJ20nXVxuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY2hhckxvd2VyXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6IGNoYXJMb3dlclxuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG4gICAgXG4gICAgY29udGluZW50ID0gaXBLUy5jaGFyQXQgMVxuXG4gICAgIyBDb3VudHJ5IHNlbGVjdGlvblxuICAgICMgaXBLUyBzaG91bGQgYmUgJ2lbY29udGluZW50XScgb3IgJ2lbY29udGluZW50XVtjb3VudHJ5Q2hhcl0nXG4gICAgaWYgZmFsc2UgYW5kIDIgPD0gaXBLUy5sZW5ndGggPD0gM1xuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLCA0KVxuXG4gICAgICBjb3VudHJpZXMgPSBAcHJvcHMuY291bnRyeVNob3J0Y3V0c1tjb250aW5lbnRdLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICBzYy5jaGFyQXQoMCkgPT0gY291bnRyeUNvZGUuY2hhckF0KDApXG5cbiAgICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAyXG4gICAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIgKHNjID0gJycpLT5cbiAgICAgICAgICBzYy5jaGFyQXQoMSkgPT0gY291bnRyeUNvZGUuY2hhckF0KDEpXG5cbiAgICAgICMgTWFrZSBzdXJlIHdlIGhhdmUgYXQgbGVhc3Qgb25lIGNvdW50cnlcbiAgICAgIGlmIGNvdW50cmllcy5sZW5ndGggIT0gMFxuICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgICAgaXBTaG93Q291bnRyaWVzOiBjb3VudHJpZXNcbiAgICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgIFxuICAgICMgU2VlIGlmIHdlIGhhdmUgYSBjb3VudHJ5IFwic2VsZWN0ZWRcIiBmb3IgaXAgcGxhY2VtZW50XG4gICAgaWYgMiA8PSBpcEtTLmxlbmd0aCA8PSAzXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsNClcblxuICAgICAgY291bnRyeVNob3J0Y3V0cyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMClcbiAgICAgIFxuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDFcbiAgICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLFxuICAgICAgICAgIHNob3J0Y3V0VW5pcXVlOiBjb3VudHJ5Q29kZVxuICAgICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICAgICMgSWYgd2UgaGF2ZSBhIGNvdW50cnksIGFkZCB0aGUgZnVsbCBjb3VudHJ5IGNvZGUgdG8gaXBLU1xuICAgICAgICBpZiBjb3VudHJ5P1xuICAgICAgICAgIGlwS1MgKz0gY291bnRyeS5zaG9ydGN1dC5jaGFyQXQgMVxuICAgICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgICAgaXBLZXlTZXF1ZW5jZTogaXBLU1xuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgICAgY291bnRyeVNob3J0Y3V0cyA9IGNvdW50cnlTaG9ydGN1dHMuZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgICAgc2MuY2hhckF0KDEpID09IGNvdW50cnlDb2RlLmNoYXJBdCgxKVxuXG4gICAgICAjIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IG9uZSBjb3VudHJ5XG4gICAgICBpZiBjb3VudHJ5U2hvcnRjdXRzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cnlTaG9ydGN1dHNcbiAgICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgICByZXR1cm5cblxuXG4gICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsNClcbiAgICBpZiBjb3VudHJ5Q29kZS5sZW5ndGggPT0gMlxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLFxuICAgICAgICBzaG9ydGN1dDogY291bnRyeUNvZGVcbiAgICAgICAgY29udGluZW50OiBjb250aW5lbnRDb2RlRnJvbUxldHRlciBjb250aW5lbnRcbiAgICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICAgIGNvdW50cnlJUHMgPSBAc3RhdGUuaXBzW3BhcnNlSW50KGNvdW50cnkuaWQsMTApXVxuICAgICAgaWYgbm90IGNvdW50cnk/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBzd2l0Y2ggY2hhclxuICAgICAgICB3aGVuICdhJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVswXSsrXG4gICAgICAgIHdoZW4gJ0EnXG4gICAgICAgICAgc2lkZSA9ICd1c2EnXG4gICAgICAgICAgZGlyID0gJ2RuJ1xuICAgICAgICAgIGlmIGNvdW50cnlJUHNbMF0gPiAwXG4gICAgICAgICAgICBpcENoYW5nZVswXS0tXG4gICAgICAgIHdoZW4gJ3InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVsxXSsrXG4gICAgICAgIHdoZW4gJ1InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgICBpZiBjb3VudHJ5SVBzWzFdID4gMFxuICAgICAgICAgICAgaXBDaGFuZ2VbMV0tLVxuXG4gICAgICBpZiBzaWRlPyBhbmQgZGlyP1xuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCBzaWRlLCBkaXJcbiAgICAgIFxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW2NvdW50cnlDb2RlXVxuICAgICAgICBpcElQQ2hhbmdlOiBpcENoYW5nZVxuXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBoYW5kbGVWYWxDbGljazogKGlkLCBkaXIsIHNpZGUpLT5cbiAgICBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBkZWx0YSA9IGlmIGRpciA9PSAnaW5jJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlmIGlkIGluIFsnbWlsb3BzJywgJ3NwYWNlJ11cbiAgICAgIGluZGV4ID0gaWYgc2lkZSA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4gICAgICBvbGRWYWwgPSBzdGF0ZS5nYW1lW2lkXVtpbmRleF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdW2luZGV4XSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF1baW5kZXhdID0gbmV3VmFsXG4gICAgZWxzZVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdICsgZGVsdGEpXG4gICAgICBzdGF0ZS5nYW1lW2lkXSA9IG5ld1ZhbFxuXG4gICAgbWV0YSA9XG4gICAgICB0eXBlOiAndmFsJ1xuICAgICAgc2lkZTogaWYgc2lkZT8gdGhlbiBzaWRlIGVsc2UgJydcbiAgICAgIGlkOiBpZFxuICAgICAgb2xkOiBvbGRWYWxcbiAgICAgIG5ldzogbmV3VmFsXG5cbiAgICBpZiBpZCA9PSAndHVybicgb3IgaWQgPT0gJ3JvdW5kJ1xuICAgICAgbWV0YS50eXBlID0gaWRcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsIG1ldGFcblxuXG4gIGhhbmRsZUlQQ2xpY2s6IChub2RlSWQsIHNpZGUsIGRpciwgZGVsdGEpLT5cbiAgICByZXR1cm4gaWYgZGVsdGE/IGFuZCBkZWx0YSA9PSAwXG5cbiAgICBub2RlID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIHtpZDogbm9kZUlkfVxuICAgICMgRG9uJ3QgbGV0IHRoZSBub24tY291bnRyeSBub2RlcyBnZXQgdXBkYXRlZCBcbiAgICBpZiBub2RlLnBvaW50cyBvciBub2RlLnN1cGVycG93ZXIgdGhlbiByZXR1cm5cblxuICAgIHN0YXRlID0gQHN0YXRlXG5cbiAgICBpZiBkZWx0YT9cbiAgICAgIGRpciA9IGlmIGRlbHRhID49IDAgdGhlbiAndXAnIGVsc2UgJ2RuJ1xuICAgIGVsc2VcbiAgICAgIGRlbHRhID0gaWYgZGlyID09ICd1cCcgdGhlbiAxIGVsc2UgLTFcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgaXAgKz0gZGVsdGFcbiAgICBpZiBpcCA8IDAgdGhlbiByZXR1cm5cblxuICAgIHNpZ24gPSBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuICAgIHN0YXRlLmlwc1tub2RlSWRdW2luZGV4XSA9IGlwXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLFxuICAgICAgdHlwZTogJ2lwJ1xuICAgICAgc2lkZTogc2lkZVxuICAgICAgY291bnRyeTogbm9kZVxuICAgICAgaXBzOiBzdGF0ZS5pcHNbbm9kZUlkXVxuICAgICAgZGVsdGE6ZGVsdGFcblxuICBoYW5kbGVIaXN0b3J5Q2xpY2s6ICh0eXBlKS0+XG4gICAgQFtcIiN7dHlwZX1IaXN0XCJdKClcblxuICB1bmRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkudW5kbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHJlZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5yZWRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgdG9nZ2xlSGlzdDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIG5vZGVQcm9wcyA9IEBwcm9wcy5ub2RlXG5cbiAgICBzdXBlcnBvd2VyU3RhdHMgPSBzdXBlclN0YXRzIEBzdGF0ZS5pcHMsIEBwcm9wcy5jb3VudHJpZXMsIEBwcm9wcy5yZWdpb25JbmZvTm9kZXNcblxuICAgIGlwS2V5U2VxdWVuY2UgPSBAc3RhdGU/LmlwS2V5U2VxdWVuY2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGU/LmlwU2hvd0NvdW50cmllcyB8fCBbXVxuICAgIGlwU2hvd0NvbnRpbmVudCA9IEBzdGF0ZT8uaXBTaG93Q29udGluZW50XG5cbiAgICBsaW5rcyA9IEBwcm9wcy5saW5rcy5tYXAgKGxpbmtEYXRhKT0+XG4gICAgICBzb3VyY2UgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnNvdXJjZVxuICAgICAgdGFyZ2V0ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS50YXJnZXRcbiAgICAgIG5vZGVzID0ge3NvdXJjZSwgdGFyZ2V0fVxuXG4gICAgICBqVVNBID0gKGxpbmssIHRhcmcpPT5cbiAgICAgICAgamFwYW5VU0FCdW1wID0gMThcbiAgICAgICAgaWYgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnVVNBJykgYW5kIF8uY29udGFpbnMobGluay5ub2RlcywgJ0phcGFuJylcbiAgICAgICAgICByZXR1cm4gbm9kZXNbdGFyZ10ueSAtIGphcGFuVVNBQnVtcFxuICAgICAgICBub2Rlc1t0YXJnXS55XG5cbiAgICAgIGxpbmtQcm9wcyA9XG4gICAgICAgIGtleTogXCJCb2FyZExpbmstI3tsaW5rRGF0YS5zb3VyY2V9LSN7bGlua0RhdGEudGFyZ2V0fVwiXG4gICAgICAgIHgxOiBzb3VyY2UueFxuICAgICAgICB5MTogalVTQShsaW5rRGF0YSwgJ3NvdXJjZScpXG4gICAgICAgIHgyOiB0YXJnZXQueFxuICAgICAgICB5MjogalVTQShsaW5rRGF0YSwgJ3RhcmdldCcpXG4gICAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgICBcImxpbmtcIjogdHJ1ZVxuICAgICAgICAgIFwibGluay1jcm9zc1wiOiBsaW5rRGF0YS5jcm9zc0NvbnRpbmVudFxuICAgICAgICAgIFwibGluay11c2FcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTQSdcbiAgICAgICAgICBcImxpbmstdXNzclwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNTUidcblxuICAgICAgQm9hcmRMaW5rIGxpbmtQcm9wc1xuXG4gICAgbm9kZXMgPSBfLm1hcCBAcHJvcHMubm9kZXMsIChjb3VudHJ5RGF0YSk9PlxuICAgICAgIyBEZXRlcm1pbmUgaWYgY291bnRyeSBzaG91bGQgYmUgb24gdG9wIG9mIHRoZSBpcFBsYWNlbWVudCBtYXNrXG4gICAgICBvblRvcCA9IG5vdCBpcEtleVNlcXVlbmNlIG9yXG4gICAgICAgIGNvdW50cnlEYXRhLnNob3J0Y3V0IGluIGlwU2hvd0NvdW50cmllcyBhbmRcbiAgICAgICAgb25lTGV0dGVyQ29udGluZW50Q29kZShjb3VudHJ5RGF0YS5jb250aW5lbnQpID09IGlwU2hvd0NvbnRpbmVudCBhbmRcbiAgICAgICAgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNFxuICAgICAgaXBTZWxlY3RlZCA9IG9uVG9wIGFuZCBpcFNob3dDb3VudHJpZXMubGVuZ3RoID09IDFcbiAgICAgIHByb3BzID1cbiAgICAgICAgbm9kZTogbm9kZVByb3BzXG4gICAgICAgIGtleTogXCJCb2FyZE5vZGUtI3tjb3VudHJ5RGF0YS5pZH1cIlxuICAgICAgICB4OiBjb3VudHJ5RGF0YS54XG4gICAgICAgIHk6IGNvdW50cnlEYXRhLnlcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0XG4gICAgICAgIGd1dHRlcjogQHByb3BzLm5vZGUuZ3V0dGVyXG4gICAgICAgIHRpdGxlSGVpZ2h0OiBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB0aXRsZUZvbnRTaXplOiBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG4gICAgICAgIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrXG4gICAgICAgICMgRGV0ZXJtaW5lIGlmIHRoZSBjb3VudHJ5IHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIGlwIHNob3J0Y3V0IGxheWVyXG4gICAgICAgIG9uVG9wOiBvblRvcFxuICAgICAgICBpcFNlbGVjdGVkOiBpcFNlbGVjdGVkXG4gICAgICAgICAgXG5cbiAgICAgIF8uYXNzaWduIHByb3BzLCBjb3VudHJ5RGF0YVxuXG4gICAgICBpZihwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICBwcm9wcy5zdGF0cyA9XG4gICAgICAgICAgY291bnRyaWVzOiBfLnBpY2sgc3VwZXJwb3dlclN0YXRzLmNvdW50cmllc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ2J0bCcsICdub24nLCAndG90YWwnXVxuICAgICAgICAgIHJlZ2lvbnM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMucmVnaW9uc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ3ByZXNlbmNlJywgJ2RvbWluYXRpb24nLCAnY29udHJvbCddXG5cbiAgICAgIGlmKHByb3BzLnBvaW50cylcbiAgICAgICAgcHJvcHMuc3RhdHMgPSBnZXRSZWdpb25TdGF0dXNcbiAgICAgICAgICB1c2E6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzYVtwcm9wcy5pZF1cbiAgICAgICAgICB1c3NyOiBzdXBlcnBvd2VyU3RhdHMucmVnaW9ucy51c3NyW3Byb3BzLmlkXVxuICAgICAgXG4gICAgICBjb3VudHJ5SWQgPSBwYXJzZUludCBjb3VudHJ5RGF0YS5pZCwgMTBcbiAgICAgIGlmIGNvdW50cnlJZCBvZiBAc3RhdGUuaXBzXG4gICAgICAgIHByb3BzLnVzYSA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVswXVxuICAgICAgICBwcm9wcy51c3NyID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzFdXG5cbiAgICAgIEJvYXJkTm9kZURpdiBwcm9wc1xuXG4gICAgYm9hcmRTdGF0dXNBdHRycyA9XG4gICAgICByZWY6J0JvYXJkU3RhdHVzJ1xuICAgICAgaGFuZGxlVmFsQ2xpY2s6IEBoYW5kbGVWYWxDbGlja1xuICAgICAgaGFuZGxlSGlzdG9yeUNsaWNrOiBAaGFuZGxlSGlzdG9yeUNsaWNrXG5cblxuXG4gICAgY29udGluZW50U2hvcnRjdXRzID0gY29udGluZW50U2hvcnRjdXREYXRhLm1hcCAobyk9PlxuICAgICAgaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPT0gMVxuICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgYXR0cnMgPVxuICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnQgQm9hcmQtc2hvcnRjdXQgI3tzaG93fVwiXG4gICAgICAgIHN0eWxlOlxuICAgICAgICAgIGxlZnQ6IG8ueFxuICAgICAgICAgIHRvcDogby55XG4gICAgICBSLmRpdiBhdHRycywgby5jaGFyXG5cbiAgICBub2Rlc0J5Q29udGluZW50ID0gXy5ncm91cEJ5IEBwcm9wcy5jb3VudHJpZXMsICdjb250aW5lbnQnXG5cbiAgICBjb3VudHJ5U2hvcnRjdXRzID0gXy5tYXAgbm9kZXNCeUNvbnRpbmVudCwgKG5vZGVzLCBjb250aW5lbnQpPT5cbiAgICAgIGNvbnRLZXkgPSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlIGNvbnRpbmVudFxuICAgICAgbm9kZUNvbXBvbmVudHMgPSBfLm1hcCBub2RlcywgKG5vZGUpPT5cbiAgICAgICAgaWYgbm9kZS5zdXBlcnBvd2VyPyBvciBub2RlLnBvaW50cz9cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICBzaG93ID0gJydcbiAgICAgICAgaXBLU0wgPSBpcEtleVNlcXVlbmNlLmxlbmd0aFxuICAgICAgICBpZiBpcEtTTCA8IDQgYW5kIF8uY29udGFpbnMoQHN0YXRlLmlwU2hvd0NvdW50cmllcywgbm9kZS5zaG9ydGN1dCkgYW5kIEBzdGF0ZS5pcFNob3dDb250aW5lbnQgPT0gb25lTGV0dGVyQ29udGluZW50Q29kZShjb250aW5lbnQpXG4gICAgICAgICAgc2hvdyA9ICdpbidcbiAgICAgICAgYXR0cnMgPVxuICAgICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dCBCb2FyZC1zaG9ydGN1dENvdW50cnkgI3tzaG93fVwiXG4gICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICBsZWZ0OiBub2RlLnhcbiAgICAgICAgICAgIHRvcDogbm9kZS55XG4gICAgICAgIFIuZGl2IGF0dHJzLCB1cHBlckZpcnN0KG5vZGUuc2hvcnRjdXRVbmlxdWUpXG5cbiAgICAgIG5vZGVDb21wb25lbnRzXG5cbiAgICBjb250Q291bnRyeSA9IGNvbnRDb3VudHJ5U2VsZWN0aW9uIEBwcm9wcy5yZWdpb25JbmZvTm9kZXMsIEBwcm9wcy5jb3VudHJpZXMsIGlwS2V5U2VxdWVuY2VcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlIHx8IFswLDBdXG4gICAgaXBDaGFuZ2VVU0EgPSBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0IHRoZW4gUi5zcGFuIGNsYXNzTmFtZTogJ0JvYXJkLWlwSGVhZGVyLXVzYScsIHNpZ25lZE51bU9yRGFzaChpcENoYW5nZVswXSkgZWxzZSBudWxsXG4gICAgaXBDaGFuZ2VVU1NSID0gaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNCB0aGVuIFIuc3BhbiBjbGFzc05hbWU6ICdCb2FyZC1pcEhlYWRlci11c3NyJywgc2lnbmVkTnVtT3JEYXNoKGlwQ2hhbmdlWzFdKSBlbHNlIG51bGxcbiAgICBpcENvdW50cnkgPSBjb250Q291bnRyeS5jb3VudHJ5IHx8IGlmIGNvbnRDb3VudHJ5LmNvbnRpbmVudCB0aGVuICdTZWxlY3QgYSBjb3VudHJ5J1xuICAgIGlwQ29udENvdW50cnkgPSBbXG4gICAgICBpcENoYW5nZVVTQVxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJCb2FyZC1pcEhlYWRlci1Db250Q291bnRcIiwgW1xuICAgICAgICBSLmgzIGNsYXNzTmFtZTogXCJCb2FyZC1pcEhlYWRlci1Db250aW5lbnQgI3tjb250Q291bnRyeS5jb250aW5lbnQ/LmNvbnRpbmVudH1EYXJrXCIsIGNvbnRDb3VudHJ5LmNvbnRpbmVudD8uc2hvcnRuYW1lIG9yICdTZWxlY3QgYSBjb250aW5lbnQnXG4gICAgICAgIFIuaDMgY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvdW50cnkgI3tjb250Q291bnRyeS5jb250aW5lbnQ/LmNvbnRpbmVudH1EYXJrXCIsIGlwQ291bnRyeVxuICAgICAgXVxuICAgICAgaXBDaGFuZ2VVU1NSXG4gICAgXVxuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZCcsIFtcbiAgICAgIFIuc3ZnIHdpZHRoOkBwcm9wcy53aWR0aCwgaGVpZ2h0OkBwcm9wcy5oZWlnaHQsIHJlZjogJ3N2ZycsIFtcbiAgICAgICAgbGlua3NcbiAgICAgIF1cbiAgICAgIG5vZGVzXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRIZWFkZXIgI3tpZiBpcEtleVNlcXVlbmNlIHRoZW4gJ2luJyBlbHNlICcnfVwiLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvcHknLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJQbGFjaW5nIEluZmx1ZW5jZVwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2xhYmVsJywgW1xuICAgICAgICAgICAgUi5hIG9uQ2xpY2s6IEBjbGVhcklwS2V5U2VxdWVuY2UsIFtcbiAgICAgICAgICAgICAgXCJDYW5jZWwgKFwiXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsIFwiZXNjXCJcbiAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIuYSBjbGFzc05hbWU6IChpZiBpcENoYW5nZVswXSA9PSAwIGFuZCBpcENoYW5nZVsxXSA9PSAwIHRoZW4gJ2Rpc2FibGVkJyksIG9uQ2xpY2s6IEBpcEtleVNlcXVlbmNlLmJpbmQobnVsbCwgMTMpLCBbXG4gICAgICAgICAgICAgIFwiQ29uZmlybSAoXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgXCJlbnRlclwiXG4gICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTonY2hhcnMnLCBpcENvbnRDb3VudHJ5XG4gICAgICBdXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRNYXNrICN7aWYgaXBLZXlTZXF1ZW5jZSB0aGVuICdpbicgZWxzZSAnJ31cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0Q29udGluZW50cyAje2lmIGlwS2V5U2VxdWVuY2UgYW5kIGlwS2V5U2VxdWVuY2UubGVuZ3RoIDw9IDEgdGhlbiAnaW4nIGVsc2UgJyd9XCIsXG4gICAgICAgIGNvbnRpbmVudFNob3J0Y3V0c1xuICAgICAgY291bnRyeVNob3J0Y3V0c1xuICAgICAgQm9hcmRTdGF0dXMgXy5hc3NpZ24gYm9hcmRTdGF0dXNBdHRycywgQHN0YXRlLmdhbWVcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRMaW5rJ1xuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IC0+XG4gICAgZmFsc2VcbiAgcmVuZGVyOiAtPlxuICAgIFIubGluZSBAcHJvcHNcblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuXG5cbkJvYXJkTm9kZUlQID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVJUCdcbiBcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGUnXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAobmV4dFByb3BzKS0+XG4gICAgIyBBc3N1bWUgY291bnRyeVxuICAgIHNob3VsZEl0ID0gbmV4dFByb3BzLnVzYSAhPSBAcHJvcHMudXNhIG9yIG5leHRQcm9wcy51c3NyICE9IEBwcm9wcy51c3NyXG4gICAgIyBDb250aW5lbnQgbGFiZWxzXG4gICAgaWYgQHByb3BzLnBvaW50cz9cbiAgICAgIHNob3VsZEl0ID0gbmV4dFByb3BzLnN0YXRzLnVzYSAhPSBAcHJvcHMuc3RhdHMudXNhIG9yXG4gICAgICAgIG5leHRQcm9wcy5zdGF0cy51c3NyICE9IEBwcm9wcy5zdGF0cy51c3NyXG4gICAgIyBTdXBlcnBvd2VyIGxhYmVsc1xuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBuUFMgPSBuZXh0UHJvcHMuc3RhdHNcbiAgICAgIHRQUyA9IEBwcm9wcy5zdGF0c1xuICAgICAgc2hvdWxkSXQgPSBuUFMuY291bnRyaWVzLmJ0bCAhPSB0UFMuY291bnRyaWVzLmJ0bCBvclxuICAgICAgICBuUFMucmVnaW9ucy5wcmVzZW5jZSAhPSB0UFMucmVnaW9ucy5wcmVzZW5jZSBvclxuICAgICAgICBuUFMucmVnaW9ucy5kb21pbmF0aW9uICE9IHRQUy5yZWdpb25zLmRvbWluYXRpb24gb3JcbiAgICAgICAgblBTLnJlZ2lvbnMuY29udHJvbCAhPSB0UFMucmVnaW9ucy5jb250cm9sXG5cbiAgICBzaG91bGRJdFxuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIHJlbmRlcjogLT5cbiAgICBjb250cm9sVVNBID0gKEBwcm9wcy51c2EgLSBAcHJvcHMudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAcHJvcHMudXNzciAtIEBwcm9wcy51c2EpID49IEBwcm9wcy5zdGFiXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBAcHJvcHMudHJhbnNmb3JtXG4gICAgICBjbGFzc05hbWU6IFwibm9kZS0je0Bwcm9wcy5ncm91cH0gXCIgKyBjeFxuICAgICAgICAnbm9kZSc6IHRydWVcbiAgICAgICAgJ25vZGUtYnRsJzogQHByb3BzLmJ0bCA9PSAxXG4gICAgICAgICdub2RlLW5vbmJ0bCc6IEBwcm9wcy5idGwgIT0gMVxuICAgICAgICAnbm9kZS1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlLXVzYS1jb250cm9sJzogY29udHJvbFVTQVxuICAgICAgICAnbm9kZS11c3NyLWNvbnRyb2wnOiBjb250cm9sVVNTUlxuICAgICAgICAnbm9kZS1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG5cblxuICAgIHRpdGxlVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXRpdGxlLXRleHRcIlxuICAgICAgeDogaWYgQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtQHByb3BzLm5vZGUud2lkdGgvMiArIDJcbiAgICAgIHk6IGlmIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICAgICAtNlxuICAgICAgICAgIGVsc2UgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDZcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcblxuXG4gICAgc3RhYlRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1zdGFiXCJcbiAgICAgIHg6IChAcHJvcHMubm9kZS53aWR0aC8yKSAtIDEwXG4gICAgICB5OiAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemUgKyAxXG5cbiAgICBzdGFiVGV4dCA9IEBwcm9wcy5zdGFiXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHN0YWJUZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIHt9LCBcIkJhdHRsZTogXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J251bUJ0bCcsIEBwcm9wcy5zdGF0cy5jb3VudHJpZXMuYnRsXG4gICAgICBdXG4gICAgICBzdGFiVGV4dEF0dHJzLnggPSAwXG4gICAgICBzdGFiVGV4dEF0dHJzLnkgKz0gMVxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZS10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpjQ04sIEBwcm9wcy5wb2ludHNbMl1cbiAgICAgIF1cblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBwc3IgPSBAcHJvcHMuc3RhdHMucmVnaW9uc1xuICAgICAgcmVnaW9uVGV4dCA9IFtwc3IucHJlc2VuY2UsIHBzci5kb21pbmF0aW9uLCBwc3IuY29udHJvbF0uam9pbiAnICdcbiAgICAgIHJlZ2lvblRleHRBdHRycy55ID0gMjBcblxuICAgICMgQmFja2dyb3VuZCBmb3IgRStXIEV1cm9wZSBhbmQgU0UgQXNpYVxuICAgIHBvbHlDbGFzc05hbWUgPSBzd2l0Y2ggQHByb3BzLmdyb3VwXG4gICAgICB3aGVuICdldScgdGhlbiAnbm9kZS1iZy1ldSdcbiAgICAgIHdoZW4gJ3NlYScgdGhlbiAnbm9kZS1iZy1zZWEnXG4gICAgICBlbHNlIG51bGxcblxuICAgIGlmIHBvbHlDbGFzc05hbWU/IGFuZCBub3QgQHByb3BzLnBvaW50cz9cbiAgICAgIHBvbHkgPSBSLnBvbHlnb25cbiAgICAgICAgY2xhc3NOYW1lOiBwb2x5Q2xhc3NOYW1lXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgXCIjey1AcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3stQHByb3BzLmhlaWdodC8yICsgQHByb3BzLnRpdGxlSGVpZ2h0fVwiXG4gICAgICAgICAgXS5qb2luICcgJ1xuXG4gICAgc2hvcnRDdXRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdub2RlLXNob3J0Y3V0J1xuICAgICAgXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICAjIE5vZGUgYmdcbiAgICAgIFIucmVjdFxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLWJnJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLmhlaWdodFxuICAgICAgICB0aXRsZTogTWF0aC5yYW5kb20oKVxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBwb2x5XG5cbiAgICAgIFIucmVjdFxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLXRpdGxlLWJnJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLnRpdGxlSGVpZ2h0XG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIFIubGluZVxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLWxpbmUnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgeDE6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5MTogLUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHgyOiBAcHJvcHMud2lkdGgvMlxuICAgICAgICB5MjogLUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG5cbiAgICAgIFIudGV4dCB0aXRsZVRleHRBdHRycywgQHByb3BzLnNob3J0bmFtZVxuICAgICAgUi50ZXh0IHN0YWJUZXh0QXR0cnMsIHN0YWJUZXh0XG4gICAgICBSLnRleHQgcmVnaW9uVGV4dEF0dHJzLCByZWdpb25UZXh0XG5cbiAgICAgICNSLnRleHQgc2hvcnRDdXRBdHRycywgQHByb3BzLnNob3J0Y3V0XG5cbiAgICAgIEJvYXJkTm9kZUlQIG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNhJywgaXA6IEBwcm9wcy51c2EsIGN0cmw6IGNvbnRyb2xVU0EsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzYSdcbiAgICAgIEJvYXJkTm9kZUlQIG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNzcicsIGlwOiBAcHJvcHMudXNzciwgY3RybDogY29udHJvbFVTU1IsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzc3InXG4gICAgXVxuXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmROb2RlSVBEaXYgPSByZXF1aXJlICcuL0JvYXJkTm9kZUlQRGl2J1xuIFxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZURpdidcblxuICAjc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAobmV4dFByb3BzKS0+XG4gICAgIyMgQXNzdW1lIGNvdW50cnlcbiAgICAjc2hvdWxkSXQgPSBuZXh0UHJvcHMudXNhICE9IEBwcm9wcy51c2Egb3IgbmV4dFByb3BzLnVzc3IgIT0gQHByb3BzLnVzc3JcbiAgICAjIyBDb250aW5lbnQgbGFiZWxzXG4gICAgI2lmIEBwcm9wcy5wb2ludHM/XG4gICAgICAjc2hvdWxkSXQgPSBuZXh0UHJvcHMuc3RhdHMudXNhICE9IEBwcm9wcy5zdGF0cy51c2Egb3JcbiAgICAgICAgI25leHRQcm9wcy5zdGF0cy51c3NyICE9IEBwcm9wcy5zdGF0cy51c3NyXG4gICAgIyMgU3VwZXJwb3dlciBsYWJlbHNcbiAgICAjaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICNuUFMgPSBuZXh0UHJvcHMuc3RhdHNcbiAgICAgICN0UFMgPSBAcHJvcHMuc3RhdHNcbiAgICAgICNzaG91bGRJdCA9IG5QUy5jb3VudHJpZXMuYnRsICE9IHRQUy5jb3VudHJpZXMuYnRsIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5wcmVzZW5jZSAhPSB0UFMucmVnaW9ucy5wcmVzZW5jZSBvclxuICAgICAgICAjblBTLnJlZ2lvbnMuZG9taW5hdGlvbiAhPSB0UFMucmVnaW9ucy5kb21pbmF0aW9uIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5jb250cm9sICE9IHRQUy5yZWdpb25zLmNvbnRyb2xcbiNcbiAgICAjc2hvdWxkSXRcblxuICBoYW5kbGVJUENsaWNrOiAoc2lkZSwgZGlyKS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLmlkLCBzaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgY29udHJvbFVTQSA9IChAcHJvcHMudXNhIC0gQHByb3BzLnVzc3IpID49IEBwcm9wcy5zdGFiXG4gICAgY29udHJvbFVTU1IgPSAoQHByb3BzLnVzc3IgLSBAcHJvcHMudXNhKSA+PSBAcHJvcHMuc3RhYlxuXG5cbiAgICBnQXR0cnMgPVxuICAgICAgc3R5bGU6XG4gICAgICAgIGxlZnQ6IEBwcm9wcy54IC0gQHByb3BzLndpZHRoLzIgKyAncHgnXG4gICAgICAgIHRvcDogQHByb3BzLnkgLSBAcHJvcHMuaGVpZ2h0LzIgKyAncHgnXG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi0je0Bwcm9wcy5ncm91cH0gXCIgKyBjeFxuICAgICAgICAnbm9kZWRpdic6IHRydWVcbiAgICAgICAgJ25vZGVkaXYtYnRsJzogQHByb3BzLmJ0bCA9PSAxXG4gICAgICAgICdub2RlZGl2LW5vbmJ0bCc6IEBwcm9wcy5idGwgIT0gMVxuICAgICAgICAnbm9kZWRpdi1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlZGl2LXVzYS1jb250cm9sJzogY29udHJvbFVTQVxuICAgICAgICAnbm9kZWRpdi11c3NyLWNvbnRyb2wnOiBjb250cm9sVVNTUlxuICAgICAgICAnbm9kZWRpdi1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlZGl2LW9uLXRvcCc6IEBwcm9wcy5vblRvcCBhbmQgbm90IChAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlcilcbiAgICAgICAgJ25vZGVkaXYtc2VsZWN0ZWQnOiBAcHJvcHMuaXBTZWxlY3RlZFxuXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG5cblxuICAgIHN0YWJUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtc3RhYlwiXG4gICAgICB4OiAoQHByb3BzLm5vZGUud2lkdGgvMikgLSAxMFxuICAgICAgeTogLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplICsgMVxuXG5cblxuXG4gICAgcmVnaW9uVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogaWYgQHByb3BzLnBvaW50cyBvciBAcHJvcHMuc3VwZXJwb3dlciB0aGVuICdub2RlZGl2LXRleHQnIGVsc2UgJ2hpZGUnXG4gICAgICB4OiAwXG4gICAgICB5OiAxMFxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG5cblxuICAgIHJlZ2lvblRleHQgPSAnJ1xuICAgIGlmIEBwcm9wcy5wb2ludHNcbiAgICAgIHJlZ2lvbkN4ID0gKGtleSk9PlxuICAgICAgICBvYmogPVxuICAgICAgICAgIHVzYTogQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgICB1c3NyOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXlcbiAgICAgICAgICBib3RoOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXkgYW5kIEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgIG9ialtrZXldID0gdHJ1ZVxuICAgICAgICBjeCBvYmpcbiAgICAgICAgXG4gICAgICBjQ04gPSByZWdpb25DeCAnY29udHJvbCdcbiAgICAgIGRDTiA9IHJlZ2lvbkN4ICdkb21pbmF0aW9uJ1xuICAgICAgcENOID0gcmVnaW9uQ3ggJ3ByZXNlbmNlJ1xuXG4gICAgICByZWdpb25UZXh0ID0gW1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOnBDTiwgQHByb3BzLnBvaW50c1swXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ZENOLCBAcHJvcHMucG9pbnRzWzFdXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpjQ04sIEBwcm9wcy5wb2ludHNbMl1cbiAgICAgIF1cblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBwc3IgPSBAcHJvcHMuc3RhdHMucmVnaW9uc1xuICAgICAgcmVnaW9uVGV4dCA9IFtwc3IucHJlc2VuY2UsIHBzci5kb21pbmF0aW9uLCBwc3IuY29udHJvbF0uam9pbiAnICdcbiAgICAgIHJlZ2lvblRleHRBdHRycy55ID0gMjBcblxuICAgICMgQmFja2dyb3VuZCBmb3IgRStXIEV1cm9wZSBhbmQgU0UgQXNpYVxuICAgIHBvbHlDbGFzc05hbWUgPSBzd2l0Y2ggQHByb3BzLmdyb3VwXG4gICAgICB3aGVuICdldScgdGhlbiAnbm9kZWRpdi1iZy1ldSdcbiAgICAgIHdoZW4gJ3NlYScgdGhlbiAnbm9kZWRpdi1iZy1zZWEnXG4gICAgICBlbHNlIG51bGxcblxuICAgIGlmIHBvbHlDbGFzc05hbWU/IGFuZCBub3QgQHByb3BzLnBvaW50cz9cbiAgICAgIHBvbHkgPSBSLnBvbHlnb25cbiAgICAgICAgY2xhc3NOYW1lOiBwb2x5Q2xhc3NOYW1lXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgXCIjey1AcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3stQHByb3BzLmhlaWdodC8yICsgQHByb3BzLnRpdGxlSGVpZ2h0fVwiXG4gICAgICAgICAgXS5qb2luICcgJ1xuXG4gICAgc2hvcnRDdXRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdub2RlZGl2LXNob3J0Y3V0J1xuICAgICAgXG5cbiAgICBzdGFiVGV4dCA9IEBwcm9wcy5zdGFiXG5cbiAgICBpc0NvdW50cnkgPSBAcHJvcHMuc3VwZXJwb3dlciBvciBAcHJvcHMucmVnaW9uSW5mb1xuICAgIGlmIG5vdCBpc0NvdW50cnlcbiAgICAgIGlwVVNBID0gQm9hcmROb2RlSVBEaXYgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c2EnLCBpcDogQHByb3BzLnVzYSwgY3RybDogY29udHJvbFVTQSwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNhJ1xuICAgICAgaXBVU1NSID0gQm9hcmROb2RlSVBEaXYgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c3NyJywgaXA6IEBwcm9wcy51c3NyLCBjdHJsOiBjb250cm9sVVNTUiwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNzcidcbiAgICAgIHN0YWIgPSBSLnNwYW4gc3RhYlRleHRBdHRycywgc3RhYlRleHRcbiAgICBlbHNlXG4gICAgICByZWdpb25JbmZvID0gUi5zcGFuIHJlZ2lvblRleHRBdHRycywgcmVnaW9uVGV4dFxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIGJ0bCA9XG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdub2RlZGl2LWJ0bC1udW0nLCBbXG4gICAgICAgICAgXCJCYXR0bGU6IFwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3N0cm9uZycsIEBwcm9wcy5zdGF0cy5jb3VudHJpZXMuYnRsXG4gICAgICAgIF1cblxuICAgIFIuZGl2IGdBdHRycywgW1xuICAgICAgYnRsXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdub2RlZGl2LXRpdGxlJywgW1xuICAgICAgICBSLnNwYW4gdGl0bGVUZXh0QXR0cnMsIEBwcm9wcy5zaG9ydG5hbWVcbiAgICAgICAgc3RhYlxuICAgICAgXVxuICAgICAgcmVnaW9uSW5mb1xuICAgICAgI1IudGV4dCBzaG9ydEN1dEF0dHJzLCBAcHJvcHMuc2hvcnRjdXRcbiAgICAgIGlwVVNBXG4gICAgICBpcFVTU1JcbiAgICAgICAgXG4gICAgXVxuXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZUlQJ1xuXG4gIGhhbmRsZUlQQ2xpY2s6IChkaXIsIGV2KS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLnNpZGUsIGRpclxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAuaXAgIT0gQHByb3BzLmlwXG5cbiAgcmVuZGVyOiAtPlxuICAgIHBvc2l0aW9uID0gaWYgQHByb3BzLnNpZGUgPT0gJ3VzYScgdGhlbiAxIGVsc2UgMFxuXG4gICAgaGlkZUlQID0gaWYgQHByb3BzLmlwID09IDAgdGhlbiAnaGlkZScgZWxzZSAnJ1xuXG4gICAgZ0F0dHJzID1cbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoI3stQHByb3BzLm5vZGUud2lkdGgvMiAqIHBvc2l0aW9ufSwgI3stQHByb3BzLm5vZGUudGl0bGVIZWlnaHQvMiAtIDF9KVwiXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtI3tAcHJvcHMuc2lkZX1cIlxuXG4gICAgdGV4dEF0dHJzID1cbiAgICAgIHg6IEBwcm9wcy5ub2RlLndpZHRoLzRcbiAgICAgIHk6IEBwcm9wcy5ub2RlLmhlaWdodC8yIC0gMVxuICAgICAgY2xhc3NOYW1lOiBoaWRlSVBcblxuICAgIGlwQ2xpY2tIZWlnaHQgPSAoQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHQpIC8gMlxuXG4gICAgUi5nIGdBdHRycywgW1xuICAgICAgUi5yZWN0XG4gICAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtYmctI3tAcHJvcHMuc2lkZX0gI3toaWRlSVB9XCJcbiAgICAgIFIudGV4dCB0ZXh0QXR0cnMsIEBwcm9wcy5pcFxuICAgICAgUi5yZWN0XG4gICAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICAgIGhlaWdodDogaXBDbGlja0hlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1jbGlja1wiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ3VwJ1xuICAgICAgUi5yZWN0XG4gICAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICAgIGhlaWdodDogaXBDbGlja0hlaWdodFxuICAgICAgICB5OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAnZG4nXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlSVBEaXYnXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPlxuICAgICRlbCA9ICQoQHJlZnMubm9kZWRpdi5nZXRET01Ob2RlKCkpXG4gICAgJGVsLmFkZENsYXNzICdub2RlZGl2LWZsYXNoJ1xuICAgIGZuID0gLT4gJGVsLnJlbW92ZUNsYXNzKCdub2RlZGl2LWZsYXNoJylcbiAgICBzZXRUaW1lb3V0IGZuLCAxMDBcblxuXG4gIGhhbmRsZUlQQ2xpY2s6IChkaXIsIGV2KS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLnNpZGUsIGRpclxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAuaXAgIT0gQHByb3BzLmlwXG5cbiAgcmVuZGVyOiAtPlxuICAgIHBvc2l0aW9uID0gaWYgQHByb3BzLnNpZGUgPT0gJ3VzYScgdGhlbiAxIGVsc2UgMFxuXG4gICAgaXBaZXJvID0gaWYgQHByb3BzLmlwID09IDAgdGhlbiAnaXBaZXJvJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtI3tAcHJvcHMuc2lkZX0gbm9kZWRpdi1pcCAje2lwWmVyb31cIlxuICAgICAgcmVmOiAnbm9kZWRpdidcblxuICAgIHRleHRBdHRycyA9XG4gICAgICB4OiBAcHJvcHMubm9kZS53aWR0aC80XG4gICAgICB5OiBAcHJvcHMubm9kZS5oZWlnaHQvMiAtIDFcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLXRleHRcIlxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBpcCA9IGlmIEBwcm9wcy5pcCA+IDAgdGhlbiBAcHJvcHMuaXAgZWxzZSAnJ1xuXG4gICAgUi5kaXYgZ0F0dHJzLCBbXG4gICAgICBSLnNwYW4gdGV4dEF0dHJzLCBpcFxuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stdXBcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICd1cCdcbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLWNsaWNrLWRuXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAnZG4nXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuXG5Cb2FyZFN0YXRlSGlzdG9yeUVudHJ5ID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXRlSGlzdG9yeUVudHJ5J1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgcjogMFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3Rvcnkub24gJ3VwZGF0ZScsID0+XG4gICAgICBAZm9yY2VVcGRhdGUoKVxuXG4gICAgI2ZuID0gKCk9PlxuICAgICAgI0BzZXRTdGF0ZSByOiBNYXRoLnJhbmRvbSgpXG4gICAgICAjc2V0VGltZW91dCBmbiwgMjAwMFxuICAgICNmbigpXG4gICBcbiAgaGFuZGxlU0hDbGljazogKGlkKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5nb1RvIGlkXG5cbiAgaGFuZGxlQ2xvc2VIaXN0b3J5OiAtPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuaGlkZSgpXG5cbiAgcmVuZGVyOiAtPlxuICAgIHN0YXRlQ29tcG9uZW50cyA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ2V0QWxsKCkubWFwIChzaCwgaW5kZXgpPT5cbiAgICAgIHNoTSA9IHNoLm1ldGFcbiAgICAgICMgSVAgcGxhY2VtZW50IGluIGNvdW50cnlcbiAgICAgIGlmIHNoTS5jb3VudHJ5P1xuICAgICAgICBrZXkgPSBcImNvdW50cnktI3tzaE0uY291bnRyeS5pZH1cIlxuICAgICAgZWxzZVxuICAgICAgICBrZXkgPSBcIiN7c2hNLmlkfS0je3NoTS5zaWRlfVwiXG5cbiAgICAgIEJvYXJkU3RhdGVIaXN0b3J5RW50cnlcbiAgICAgICAgb25DbGljazogQGhhbmRsZVNIQ2xpY2suYmluZCB0aGlzLCBpbmRleFxuICAgICAgICBrZXk6IFwiQlNIRS0je2luZGV4fS0je2tleX1cIlxuICAgICAgICBpc0xhdGVzdDogQHByb3BzLnN0YXRlSGlzdG9yeS5sYXRlc3QgPT0gaW5kZXhcbiAgICAgICAgaXNDdXJyZW50OiBAcHJvcHMuc3RhdGVIaXN0b3J5LmN1cnJlbnQgPT0gaW5kZXhcbiAgICAgICAgc2g6IHNoXG5cbiAgICBkaXZBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICdTdGF0ZUhpc3RvcnknOiB0cnVlXG4gICAgICAgICdpbic6IEBwcm9wcy5zdGF0ZUhpc3Rvcnkuc2hvd1xuXG4gICAgUi5kaXYgZGl2QXR0cnMsIFtcbiAgICAgIFIuYSBjbGFzc05hbWU6ICdjbG9zZSBwdWxsLXJpZ2h0Jywgb25DbGljazogQGhhbmRsZUNsb3NlSGlzdG9yeSwgW1xuICAgICAgICAnQ2xvc2UgJ1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKGgpJ1xuICAgICAgXVxuICAgICAgUi5oMyB7fSwgXCJBY3Rpb24gSGlzdG9yeVwiXG4gICAgICBSLnVsIGNsYXNzTmFtZTogJ2xpc3QtdW5zdHlsZWQnLCBzdGF0ZUNvbXBvbmVudHMucmV2ZXJzZSgpXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZ2FtZVZhbERpc3BsYXkgPSByZXF1aXJlICcuLi9saWJzL2dhbWVWYWxEaXNwbGF5J1xudXBwZXJGaXJzdCA9IHJlcXVpcmUgJy4uL2xpYnMvdXBwZXJGaXJzdCdcbnplcm9QYWQgPSByZXF1aXJlICcuLi9saWJzL3plcm9QYWQnXG5pbnRUb1N0cldpdGhTaWduID0gcmVxdWlyZSAnLi4vbGlicy9pbnRUb1N0cldpdGhTaWduJ1xuc3VwZXJwb3dlclRvSW5kZXggPSByZXF1aXJlICcuLi9saWJzL3N1cGVycG93ZXJUb0luZGV4J1xuXG5zY29yZVNpZGUgPSAoc2NvcmUpLT5cbiAgaWYgc2NvcmUgPCAwXG4gICAgcmV0dXJuICd1c3NyJ1xuICBpZiBzY29yZSA+IDBcbiAgICByZXR1cm4gJ3VzYSdcbiAgJydcblxuXG5zaEVudHJ5ID0gKHNoKS0+XG4gIHJvdW5kU2lkZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgJSAyID09IDAgdGhlbiAndXNhJyBlbHNlICd1c3NyJ1xuICBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kID09IDBcbiAgICByb3VuZFNpZGUgPSAnJ1xuXG4gIGlmIHNoLnN0YXRlLmdhbWUudHVybiA+IDEwXG4gICAgdHVybiA9IFwiRU5EXCJcbiAgICByb3VuZCA9ICcnXG4gIGVsc2UgaWYgc2guc3RhdGUuZ2FtZS50dXJuID4gMFxuICAgIHR1cm4gPSBcIlQje2dhbWVWYWxEaXNwbGF5KCd0dXJuJywgc2guc3RhdGUuZ2FtZS50dXJuKX0tXCJcbiAgICBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kICE9IDBcbiAgICAgIHJvdW5kID0gXCJBUiN7Z2FtZVZhbERpc3BsYXkoJ3JvdW5kJywgc2guc3RhdGUuZ2FtZS5yb3VuZCl9XCJcbiAgICBlbHNlXG4gICAgICByb3VuZCA9IFwiSEVBRFwiXG4gIGVsc2VcbiAgICB0dXJuID0gXCJTRVRVUFwiXG4gICAgcm91bmQgPSAnJ1xuXG4gIHR1cm5Sb3VuZCA9XG4gICAgUi5zcGFuIGNsYXNzTmFtZTogJ3R1cm5Sb3VuZCcsIFtcbiAgICAgIHR1cm5cbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHJvdW5kU2lkZSwgcm91bmRcbiAgICBdXG5cbiAgc2hTaWRlID0gc2gubWV0YS5zaWRlXG5cbiAgc3dpdGNoIHNoLm1ldGEudHlwZVxuICAgICMgTG9hZCBzdGF0ZSBmcm9tIHVybFxuICAgIHdoZW4gJ2xvYWQnXG4gICAgICBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidzdHJvbmcnLCAnTG9hZGVkIHN0YXRlIGZyb20gVVJMJ1xuICAgICAgXVxuICAgIHdoZW4gJ2lwJ1xuICAgICAgW2lwVVNBLCBpcFVTU1JdID0gc2gubWV0YS5pcHNcbiAgICAgIGNvdW50cnkgPSBzaC5tZXRhLmNvdW50cnlcbiAgICAgIGN0cmxVU0EgPSBpZiAoaXBVU0EgLSBpcFVTU1IpID49IGNvdW50cnkuc3RhYiB0aGVuICdjb250cm9sJyBlbHNlICcnXG4gICAgICBjdHJsVVNTUiA9IGlmIChpcFVTU1IgLSBpcFVTQSkgPj0gY291bnRyeS5zdGFiIHRoZW4gJ2NvbnRyb2wnIGVsc2UgJydcblxuICAgICAgaWYgc2gubWV0YS5zaWRlID09ICdib3RoJ1xuICAgICAgICBpcHMgPSBbXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c2EgaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhWzBdXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJkaXZpZGVyXCIsICcvJ1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNzciBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbMV1cbiAgICAgICAgXVxuICAgICAgZWxzZVxuICAgICAgICBpcHMgPSBSLnNwYW4gY2xhc3NOYW1lOiBcIiN7c2gubWV0YS5zaWRlfSBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbc3VwZXJwb3dlclRvSW5kZXggc2gubWV0YS5zaWRlXVxuXG4gICAgICBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBpcHNcbiAgICAgICAgXCIgaW4gI3tzaC5tZXRhLmNvdW50cnkuc2hvcnRuYW1lfSAoXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c2EgI3tjdHJsVVNBfVwiLCBzaC5tZXRhLmlwc1swXVxuICAgICAgICBcIi9cIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzc3IgI3tjdHJsVVNTUn1cIiwgc2gubWV0YS5pcHNbMV1cbiAgICAgICAgXCIpXCJcbiAgICAgIF1cbiAgICB3aGVuICd2YWwnXG4gICAgICBvbGRTaWRlID0gbmV3U2lkZSA9IHNoLm1ldGEuc2lkZVxuXG4gICAgICBpZiBzaC5tZXRhLmlkID09ICdzY29yZSdcbiAgICAgICAgb2xkU2lkZSA9IHNjb3JlU2lkZSBzaC5tZXRhLm9sZFxuICAgICAgICBuZXdTaWRlID0gc2NvcmVTaWRlIHNoLm1ldGEubmV3XG5cbiAgICAgIFIuc3BhbiB7fSwgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgXCIje3VwcGVyRmlyc3Qoc2gubWV0YS5pZCl9IFwiXG4gICAgICAgIFIuc3Ryb25nIGNsYXNzTmFtZTogb2xkU2lkZSwgXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEub2xkLCAnbG9uZycpfSBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnYXJyb3cnLCAn4p6UICdcbiAgICAgICAgUi5zdHJvbmcgY2xhc3NOYW1lOiBuZXdTaWRlLCBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgIF1cbiAgICB3aGVuICdyb3VuZCdcbiAgICAgIHNpZGUgPSByb3VuZFNpZGVcbiAgICAgIHJvdW5kVGl0bGUgPSBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kID09IDBcbiAgICAgICAgICBcIkhlYWRsaW5lIFBoYXNlXCJcbiAgICAgICAgZWxzZVxuICAgICAgICAgIFwiI3tzaWRlLnRvVXBwZXJDYXNlKCl9IEFjdGlvbiBSb3VuZCAje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICAgICAgXG4gICAgICAjc2lkZSA9IFsndXNzcicsICd1c2EnXVsoc2guc3RhdGUuZ2FtZS5yb3VuZCArIDEpICUgMl1cbiAgICAgIFIuc3BhbiB7fSwgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogc2lkZSwgcm91bmRUaXRsZVxuICAgICAgXVxuICAgIHdoZW4gJ3R1cm4nXG4gICAgICBkaXNwID0gXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gIT0gMCBhbmQgc2guc3RhdGUuZ2FtZS50dXJuIDw9IDEwXG4gICAgICAgIGRpc3AgPSBcIlR1cm4gI3tkaXNwfVwiXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOidzdHJvbmcnLCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBkaXNwXG4gICAgICBdXG4gICAgZWxzZVxuICAgICAgc2gubWV0YS5tc2dcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdGVIaXN0b3J5RW50cnknXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBzaG91bGRJdCA9IGZhbHNlXG4gICAgdFAgPSBAcHJvcHNcbiAgICB0U2hNID0gQHByb3BzLnNoLm1ldGFcbiAgICBuU2hNID0gblAuc2gubWV0YVxuICAgICMgSVAgcGxhY2VtZW50XG4gICAgaWYgdFNoTT8uaXBzP1xuICAgICAgc2hvdWxkSXQgPSB0U2hNLmlwc1swXSAhPSBuU2hNLmlwc1swXSBvclxuICAgICAgICB0U2hNLmlwc1sxXSAhPSBuU2hNLmlwc1sxXVxuICAgIGlmIHRTaE0udHlwZSA9PSAndmFsJ1xuICAgICAgc2hvdWxkSXQgPSB0U2hNLm5ldyAhPSBuU2hNLm5ld1xuICAgICMgSWYgY3VycmVudC9sYXRlc3QgY2hhbmdlZFxuICAgIGlmIHRQLmlzTGF0ZXN0ICE9IG5QLmlzTGF0ZXN0IG9yIHRQLmlzQ3VycmVudCAhPSBuUC5pc0N1cnJlbnRcbiAgICAgIHNob3VsZEl0ID0gdHJ1ZVxuXG4gICAgc2hvdWxkSXRcblxuICByZW5kZXI6LT5cbiAgICBhdHRycyA9XG4gICAgICBvbkNsaWNrOiBAcHJvcHMub25DbGlja1xuICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAnY2xlYXJmaXgnOiB0cnVlXG4gICAgICAgICdTdGF0ZUhpc3RvcnktbGF0ZXN0JzogQHByb3BzLmlzTGF0ZXN0XG4gICAgICAgICdTdGF0ZUhpc3RvcnktY3VycmVudCc6IEBwcm9wcy5pc0N1cnJlbnRcbiAgICBSLmxpIGF0dHJzLCBzaEVudHJ5KEBwcm9wcy5zaClcbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkU3RhdHVzVmFsdWUgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzVmFsdWUnXG5EaWUgPSByZXF1aXJlICcuL0RpZSdcblxudGFibGUgPVxuICAnU2NvcmUnOiAnUydcbiAgJ0RlZmNvbic6ICdEJ1xuICAnTWlsT3BzLXVzYSc6ICdNJ1xuICAnTWlsT3BzLXVzc3InOiAnTydcbiAgJ1R1cm4nOiAnVCdcbiAgJ1JvdW5kJzogJ1InXG4gICdTcGFjZS11c2EnOiAncCdcbiAgJ1NwYWNlLXVzc3InOiAnYSdcbiAgJ0FjdGlvbiBIaXN0b3J5JzogJ0gnXG4gICdSb2xsIGRpY2UnOiAnYydcblxuaGlsaWdodFNob3J0Y3V0TGV0dGVyID0gKHRpdGxlLHNpZGU9JycpLT5cbiAgdGl0bGVTaWRlID0gdGl0bGVcbiAgaWYgc2lkZSAhPSAnJyBhbmQgdGl0bGUgIT0gJ1JvdW5kJyBhbmQgdGl0bGUgIT0gJ1Njb3JlJ1xuICAgIHRpdGxlU2lkZSA9IFwiI3t0aXRsZX0tI3tzaWRlfVwiXG5cbiAgW2hlYWQsIHRhaWxdID0gdGl0bGUuc3BsaXQgdGFibGVbdGl0bGVTaWRlXVxuICBtaWQgPSB0YWJsZVt0aXRsZVNpZGVdXG4gIFtcbiAgICBoZWFkXG4gICAgUi5zcGFuIGNsYXNzTmFtZTogJ1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgbWlkXG4gICAgdGFpbFxuICBdXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXR1cydcblxuICByb2xsRGljZTogLT5cbiAgICBfLmVhY2ggQHJlZnMsIChyZWYpLT4gcmVmLnJvbGxEaWUoKVxuXG4gIGhhbmRsZUJvdGhDbGljazogLT5cbiAgICBAcm9sbERpY2UoKVxuXG4gIHJlbmRlcjogLT5cbiAgXG4gICAgc2NvcmVTaWRlID0gJydcbiAgICBpZiBAcHJvcHMuc2NvcmUgIT0gMFxuICAgICAgc2NvcmVTaWRlID0gaWYgQHByb3BzLnNjb3JlIDwgMCB0aGVuICd1c3NyJyBlbHNlICd1c2EnXG5cbiAgICAjIFJvdW5kOiAwIGlzIGhlYWRsaW5lLCBvZGRzIGFyZSBVU1NSLCBldmVucyBhcmUgVVNBXG4gICAgcm91bmQgPSBpZiBAcHJvcHMucm91bmQgPT0gMCB0aGVuICdIJyBlbHNlIE1hdGguY2VpbChAcHJvcHMucm91bmQgLyAyKVxuICAgIHJvdW5kU2lkZSA9ICcnXG4gICAgaWYgQHByb3BzLnJvdW5kICE9IDBcbiAgICAgIHJvdW5kU2lkZSA9IGlmIEBwcm9wcy5yb3VuZCAlIDIgPT0gMSB0aGVuICd1c3NyJyBlbHNlICd1c2EnXG5cbiAgICB0dXJuID0gc3dpdGNoIEBwcm9wcy50dXJuXG4gICAgICB3aGVuIDAgdGhlbiAnUydcbiAgICAgIHdoZW4gMTEgdGhlbiAnRSdcbiAgICAgIGVsc2UgQHByb3BzLnR1cm5cblxuICAgICMgU2hvcnRoYW5kIGZvciB0aGUgY29tcG9uZW50c1xuICAgIHN0YXR1c1ZhbHVlID0gKGlkPScnLCB0aXRsZT0nJywgdmFsPScnLCBzaWRlPScnKT0+XG4gICAgICB0aXRsZSA9IGhpbGlnaHRTaG9ydGN1dExldHRlciB0aXRsZSwgc2lkZVxuICAgICAgQm9hcmRTdGF0dXNWYWx1ZSBfLmFzc2lnbiB7aWQsIHRpdGxlLCB2YWwsIHNpZGV9LCBoYW5kbGVWYWxDbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrXG5cblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkU3RhdHVzJywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sJywgW1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc2NvcmUnLCAnU2NvcmUnLCBNYXRoLmFicyhAcHJvcHMuc2NvcmUpLCBzY29yZVNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ2RlZmNvbicsICdEZWZjb24nLCBAcHJvcHMuZGVmY29uXG4gICAgICAgIHN0YXR1c1ZhbHVlICdtaWxvcHMnLCAnTWlsT3BzJywgQHByb3BzLm1pbG9wc1swXSwgJ3VzYSdcbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3R1cm4nLCAnVHVybicsIHR1cm5cbiAgICAgICAgc3RhdHVzVmFsdWUgJ3JvdW5kJywgJ1JvdW5kJywgcm91bmQsIHJvdW5kU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnU3BhY2UnLCBAcHJvcHMuc3BhY2VbMF0sICd1c2EnXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzcGFjZScsICdTcGFjZScsIEBwcm9wcy5zcGFjZVsxXSwgJ3Vzc3InXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdoaXN0b3J5Q29udHJvbHMnLCBbXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdoaXN0b3J5Q29udHJvbHMtdW5kbycsXG4gICAgICAgICAgUi5hIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVIaXN0b3J5Q2xpY2suYmluZChudWxsLCd1bmRvJyksIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgJyh6KSdcbiAgICAgICAgICAgICcgVW5kbydcbiAgICAgICAgICBdXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdoaXN0b3J5Q29udHJvbHMtaGlzdG9yeScsXG4gICAgICAgICAgUi5hIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVIaXN0b3J5Q2xpY2suYmluZChudWxsLCd0b2dnbGUnKSxcbiAgICAgICAgICAgIGhpbGlnaHRTaG9ydGN1dExldHRlciAnQWN0aW9uIEhpc3RvcnknXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdoaXN0b3J5Q29udHJvbHMtcmVkbycsXG4gICAgICAgICAgUi5hIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVIaXN0b3J5Q2xpY2suYmluZChudWxsLCdyZWRvJyksIFtcbiAgICAgICAgICAgICdSZWRvICdcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgJyh5KSdcbiAgICAgICAgICBdXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdkaWNlJywgW1xuICAgICAgICBEaWUgcmVmOiAnZGllLXVzYScsIHNpZGU6ICd1c2EnXG4gICAgICAgIFIuYSBjbGFzc05hbWU6ICdyb2xsLWRpY2UnLCBvbkNsaWNrOiBAaGFuZGxlQm90aENsaWNrLCBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIoJ1JvbGwgZGljZScpXG4gICAgICAgIERpZSByZWY6ICdkaWUtdXNzcicsIHNpZGU6ICd1c3NyJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXR1c1ZhbHVlJ1xuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLnZhbCAhPSBAcHJvcHMudmFsIG9yIG5QLnNpZGUgIT0gQHByb3BzLnNpZGVcbiAgcmVuZGVyOiAtPlxuICAgIHNpZGVDbGFzcyA9IHN3aXRjaCBAcHJvcHMuc2lkZVxuICAgICAgd2hlbiAndXNhJywgJ3Vzc3InIHRoZW4gQHByb3BzLnNpZGVcbiAgICAgIGVsc2UgJydcblxuICAgIGRlY0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ2RlYydcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2RlYycsIEBwcm9wcy5zaWRlKVxuICAgIGluY0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ2luYycsXG4gICAgICBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2suYmluZChudWxsLCBAcHJvcHMuaWQsICdpbmMnLCBAcHJvcHMuc2lkZSlcblxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiU3RhdHVzTGFiZWxcIiwgQHByb3BzLnRpdGxlXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiU3RhdHVzVmFsdWUgI3tzaWRlQ2xhc3N9XCIsIFtcbiAgICAgICAgUi5zcGFuIGRlY0F0dHJzLCAn4peAJ1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAndmFsJywgQHByb3BzLnZhbFxuICAgICAgICBSLnNwYW4gaW5jQXR0cnMsICfilrYnXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcblxuY2FyZFN0YWdlcyA9IDE6J0VBUkxZJywgMjonTUlEJywgMzonTEFURSdcblxuY2FyZENsYXNzTmFtZSA9IChwcm9wcykgLT5cbiAgY2xhc3NlcyA9IGN4XG4gICAgJ2FzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FzaWEgU2NvcmluZydcbiAgICAnZXVyb3BlU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdFdXJvcGUgU2NvcmluZydcbiAgICAnbWlkZGxlRWFzdFNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnTWlkZGxlIEVhc3QgU2NvcmluZydcbiAgICAnY2VudHJhbEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0NlbnRyYWwgQW1lcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aGVhc3RBc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aGVhc3QgQXNpYSBTY29yaW5nKidcbiAgICAnYWZyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBZnJpY2EgU2NvcmluZydcbiAgICAnc291dGhBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ29uZ29pbmcnOiBwcm9wcy5vbmdvaW5nXG5cbiAgXCJvd25lci0je3Byb3BzLm93bmVyfSBjYXJkLXZpZXctI3twcm9wcy52aWV3fSAje2NsYXNzZXN9XCJcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmQnXG4gIHJlbmRlcjogLT5cbiAgICBtYWluID0gW1xuICAgICAgICBSLnNwYW4ge2NsYXNzTmFtZTogJ2NhcmQtdGl0bGUtaG9sZGVyJyB9LCBbXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtc3RhZ2UnLCBjYXJkU3RhZ2VzW0Bwcm9wcy5zdGFnZV1cbiAgICAgICAgICBSLmg0IGNsYXNzTmFtZTogJ2NhcmQtb3BzJywgaWYgQHByb3BzLm9wcyA8IDEgdGhlbiBcIlNcIiBlbHNlIEBwcm9wcy5vcHNcbiAgICAgICAgICBSLmg0IGNsYXNzTmFtZTogJ2NhcmQtdGl0bGUnLCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLnRpdGxlfSBcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtaWQnLCBcIiMje0Bwcm9wcy5pZH1cIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLnAgY2xhc3NOYW1lOiAnY2FyZC10ZXh0JywgQHByb3BzLnRleHRcbiAgICAgIF1cblxuICAgIGlmIEBwcm9wcy52aWV3ID09ICdpbWcnXG4gICAgICBtYWluID1cbiAgICAgICAgUi5pbWdcbiAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkLWltZydcbiAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9jYXJkcy9zbS8je3plcm9QYWQgQHByb3BzLmlkfS5qcGdcIlxuXG4gICAgUi5hIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwiLCBjbGFzc05hbWU6IGNhcmRDbGFzc05hbWUoQHByb3BzKSArICcgY2FyZCcsIG1haW5cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnplcm9QYWQgPSByZXF1aXJlICcuLi9saWJzL3plcm9QYWQnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkSW1nJ1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZCBjYXJkSW1nJyxcbiAgICAgIFIuYSBocmVmOiBcIiMvY2FyZC8je0Bwcm9wcy5pZH1cIixcbiAgICAgICAgUi5pbWcgc3JjOiBcIi9pbWFnZXMvY2FyZHMvc20vI3t6ZXJvUGFkIEBwcm9wcy5pZH0uanBnXCJcbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkNhcmQgPSByZXF1aXJlICcuL0NhcmQnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkTGlzdCdcbiAgcmVuZGVyOiAtPlxuICAgIGNsYXNzTmFtZSA9IGN4XG4gICAgICAnY2FyZExpc3QnOiB0cnVlXG4gICAgICAnY2FyZExpc3RGdWxsJzogQHByb3BzLnZpZXcgPT0gJ3RleHQnXG4gICAgICAnY2FyZExpc3RJbWcnOiBAcHJvcHMudmlldyA9PSAnaW1nJ1xuICAgIFIuZGl2IHtjbGFzc05hbWV9LCBAcHJvcHMuY2FyZHMubWFwIChlbCkgPT5cbiAgICAgIENhcmQgXy5tZXJnZSBlbCxcbiAgICAgICAga2V5OiBcImNhcmQje2VsLmlkfVwiXG4gICAgICAgIHNob3dGdWxsVGV4dDogQHByb3BzLmZ1bGxUZXh0XG4gICAgICAgIHZpZXc6IEBwcm9wcy52aWV3XG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdEaWUnXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblAsIG5TKS0+XG4gICAgblMucm9sbGluZyAhPSBAc3RhdGUucm9sbGluZyBvciBuUy52YWwgIT0gQHN0YXRlLnZhbFxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICByb2xsczogMzBcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgdmFsOiAxXG4gICAgcm9sbGluZzogZmFsc2VcbiAgICByb2xsczogQHByb3BzLnJvbGxzXG5cbiAgY2xpY2tEaWU6IC0+XG4gICAgQHJvbGxEaWUoKVxuXG4gIHJvbGxEaWU6IC0+XG4gICAgcmV0dXJuIGlmIEBzdGF0ZS5yb2xsaW5nXG4gICAgQGl0ZXJhdGVSb2xsKClcblxuICBpdGVyYXRlUm9sbDogLT5cbiAgICBpZiBub3QgQHN0YXRlLnJvbGxpbmdcbiAgICAgIEBzZXRTdGF0ZSByb2xsaW5nOiB0cnVlLCByb2xsczogQHByb3BzLnJvbGxzXG5cbiAgICBpZiBAc3RhdGUucm9sbHMgPT0gMFxuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IGZhbHNlLCByb2xsczogQHByb3BzLnJvbGxzXG4gICAgZWxzZVxuICAgICAgdGltZSA9ICgxMCAtIEBzdGF0ZS5yb2xscykgKiAxOCArIDUwXG4gICAgICBpZiBAc3RhdGUucm9sbHMgPiAxMFxuICAgICAgICB0aW1lID0gNTBcblxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIHZhbDogXy5yYW5kb20oMSw2KVxuICAgICAgICByb2xsczogQHN0YXRlLnJvbGxzIC0gMVxuICAgICAgc2V0VGltZW91dCBAaXRlcmF0ZVJvbGwsIHRpbWVcblxuICByZW5kZXI6IC0+XG4gICAgcm9sbGluZyA9IGlmIEBzdGF0ZS5yb2xsaW5nIGFuZCBAc3RhdGUucm9sbHMgPiAwIHRoZW4gJ3JvbGxpbmcnIGVsc2UgJydcbiAgICBSLmRpdiBvbkNsaWNrOiBAY2xpY2tEaWUsIGNsYXNzTmFtZTogXCJkaWUgZGllLSN7QHByb3BzLnNpZGV9ICN7cm9sbGluZ31cIiwgQHN0YXRlLnZhbFxuXG4iLCJSID0gUmVhY3QuRE9NXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdmb290ZXInLCBbXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2pqdC5pbycsICdKYXNvbiBUcmlsbCdcbiAgICAgICAgJyB3aXRoIGhlbHAgZnJvbSAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vY29mZmVlc2NyaXB0Lm9yZy8nLCAnQ29mZmVlU2NyaXB0J1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0LycsICdSZWFjdCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2Jyb3dzZXJpZnkub3JnLycsICdCcm93c2VyaWZ5J1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vbG9kYXNoLmNvbS8nLCAnTG8tRGFzaCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJywgJ0Jvb3RzdHJhcCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3plcHRvanMuY29tJywgJ1plcHRvJ1xuICAgICAgICAnLCBhbmQgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2d1bHBqcy5jb20nLCAnR3VscCdcbiAgICAgICAgJy4nXG4gICAgICAgIFIuYnIoKVxuICAgICAgICAnSXQgb3dlcyBpdHMgZXhpc3RlbmNlIHRvICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbScsICdUd2lsaWdodCBTdHJhdGVneSdcbiAgICAgICAgJy4gQ29tbWVudHMsIHN1Z2dlc3Rpb25zLCBhbmQgYnVnIHJlcG9ydHMgY2FuIGJlIGFpbWVkIGF0ICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Zy9pc3N1ZXMnLCAnR2l0aHViJ1xuICAgICAgICAnIG9yICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly90d2l0dGVyLmNvbS9qYXNvbnRyaWxsJywgJ0BqYXNvbnRyaWxsJ1xuICAgICAgICAnLidcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnTmF2VmlldydcbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIGFjdGl2ZTogJydcblxuICByZW5kZXI6IC0+XG5cbiAgICBsaSA9IChtZW51S2V5LCBocmVmLCB0aXRsZSk9PlxuICAgICAgUi5saSBjbGFzc05hbWU6IGN4KCdhY3RpdmUnOiBAcHJvcHMuYWN0aXZlID09IG1lbnVLZXkpLFxuICAgICAgICBSLmEgaHJlZjogaHJlZiwgdGl0bGVcblxuICAgIFIubmF2IGNsYXNzTmFtZTogXCJuYXZiYXIgXCIsIHJvbGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiLCBbXG5cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBocmVmOiAnIy8nLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInR3aVwiLCBcIlR3aVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInN0cnVnXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cblxuICAgICAgICBSLnVsIGNsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdlwiLCBbXG4gICAgICAgICAgI2xpICdnYW1lJywgJyMvZ2FtZScsICdHYW1lJ1xuICAgICAgICAgIGxpICdjYXJkcycsICcjL2NhcmRzJywgJ0NhcmRzJ1xuICAgICAgICAgIGxpICdib2FyZCcsICcjL2JvYXJkJywgJ0JvYXJkJ1xuICAgICAgICAgIGxpICdhYm91dCcsICcjL2Fib3V0JywgJ0Fib3V0J1xuICAgICAgICBdXG5cbiAgICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iXX0=
