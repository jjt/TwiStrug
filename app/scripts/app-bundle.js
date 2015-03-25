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
      "stab": 2,
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
      "stab": 2,
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
module.exports=[  {    "id":1,    "title":"Asia Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: 9; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/14/regions-asia/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":2,    "title":"Europe Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: Automatic Victory; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/12/regions-europe/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":3,    "title":"Middle East Scoring",    "ops":0,    "text":"Presence: 3; Domination: 5; Control: 7; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/02/13/regions-middle-east/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":4,    "title":"Duck and Cover",    "ops":3,    "text":"Degrade the DEFCON level by 1. The US receives VP equal to 5 minus the current DEFCON level.",    "url":"http://twilightstrategy.com/2011/12/12/duck-and-cover/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":5,    "title":"Five Year Plan",    "ops":3,    "text":"The USSR must randomly discard a card. If the card has a US associated Event, the Event occurs immediately. If the card has a USSR associated Event or an Event applicable to both players, then the card must be discarded without triggering the Event.",    "url":"http://twilightstrategy.com/2011/12/12/five-year-plan/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":6,    "title":"The China Card",    "ops":4,    "text":"This card begins the game with the USSR. When played, the player receives +1 Operations to the Operations value of this card if it uses all its Operations in Asia. It is passed to the opponent once played. A player receives 1 VP for holding this card at the end of Turn 10.",    "url":"http://twilightstrategy.com/2012/10/31/the-china-card/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1,    "cancels": 35  },  {    "id":7,    "title":"Socialist Governments",    "ops":3,    "text":"Remove a total of 3 US Influence from any countries in Western Europe (removing no more than 2 Influence per country). This Event cannot be used after the “#83 – The Iron Lady” Event has been played.",    "url":"http://twilightstrategy.com/2011/12/13/socialist-governments/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1,    "antireq": 83  },  {    "id":8,    "title":"Fidel*",    "ops":2,    "text":"Remove all US Influence from Cuba. USSR adds sufficient Influence in Cuba for Control.",    "url":"http://twilightstrategy.com/2011/12/14/fidel/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":9,    "title":"Vietnam Revolts*",    "ops":2,    "text":"Add 2 USSR Influence to Vietnam. For the remainder of the turn, the USSR receives +1 Operations to the Operations value of a card that uses all its Operations in Southeast Asia.",    "url":"http://twilightstrategy.com/2011/12/16/vietnam-revolts/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":10,    "title":"Blockade*",    "ops":1,    "text":"Unless the US immediately discards a card with an Operations value of 3 or more, remove all US Influence from West Germany.",    "url":"http://twilightstrategy.com/2011/12/19/blockade/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":11,    "title":"Korean War*",    "ops":2,    "text":"North Korea invades South Korea. Roll a die and subtract (-1) from the die roll for every US controlled country adjacent to South Korea. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in South Korea with USSR Influence. The USSR adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2011/12/25/korean-war/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":12,    "title":"Romanian Abdication*",    "ops":1,    "text":"Remove all US Influence from Romania. The USSR adds sufficient Influence to Romania for Control.",    "url":"http://twilightstrategy.com/2012/01/02/romanian-abdication/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":13,    "title":"Arab-Israeli War",    "ops":2,    "text":"Pan-Arab Coalition invades Israel. Roll a die and subtract (-1) from the die roll for Israel, if it is US controlled, and for every US controlled country adjacent to Israel. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in Israel with USSR Influence. The USSR adds 2 to its Military Operations Track. This Event cannot be used after the “#65 – Camp David Accords” Event has been played.",    "url":"http://twilightstrategy.com/2012/01/16/arab-israeli-war/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":14,    "title":"Comecon*",    "ops":3,    "text":"Add 1 USSR Influence to each of 4 non-US controlled countries of Eastern Europe.",    "url":"http://twilightstrategy.com/2012/01/24/comecon/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":15,    "title":"Nasser*",    "ops":1,    "text":"Add 2 USSR Influence to Egypt. The US removes half, rounded up, of its Influence from Egypt.",    "url":"http://twilightstrategy.com/2012/02/06/nasser/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":16,    "title":"Warsaw Pact Formed*",    "ops":3,    "text":"Remove all US influence from 4 countries in Eastern Europe or add 5 USSR Influence to any countries in Eastern Europe (adding no more than 2 Influence per country). This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":1,    "allows": 21  },  {    "id":17,    "title":"De Gaulle Leads France*",    "ops":3,    "text":"Remove 2 US Influence from France and add 1 USSR Influence to France. This Event cancels the effect(s) of the “#21 – NATO” Event for France only.",    "url":"http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":1,    "affects": 21  },  {    "id":18,    "title":"Captured Nazi Scientist*",    "ops":1,    "text":"Move the Space Race Marker ahead by 1 space.",    "url":"http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":19,    "title":"Truman Doctrine*",    "ops":1,    "text":"Remove all USSR Influence from a single uncontrolled country in Europe.",    "url":"http://twilightstrategy.com/2012/03/02/truman-doctrine/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":20,    "title":"Olympic Games",    "ops":2,    "text":"This player sponsors the Olympics. The opponent must either participate or boycott. If the opponent participates, each player rolls a die and the sponsor adds 2 to their roll. The player with the highest modified die roll receives 2 VP (reroll ties). If the opponent boycotts, degrade the DEFCON level by 1 and the sponsor may conduct Operations as if they played a 4 Ops card.",    "url":"http://twilightstrategy.com/2012/03/12/olympic-games/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":21,    "title":"NATO*",    "ops":4,    "text":"The USSR cannot make Coup Attempts or Realignment rolls against any US controlled countries in Europe. US controlled countries in Europe cannot be attacked by play of the “#36 – Brush War” Event. This card requires prior play of either the “#16 – Warsaw Pact Formed” or “#23 – Marshall Plan” Event(s) in order to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/12/nato/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "prereq":[16,23],    "affects":36  },  {    "id":22,    "title":"Independent Reds*",    "ops":2,    "text":"Add US Influence to either Yugoslavia, Romania, Bulgaria, Hungary, or Czechoslovakia so that it equals the USSR Influence in that country.",    "url":"http://twilightstrategy.com/2012/03/13/independent-reds/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":23,    "title":"Marshall Plan*",    "ops":4,    "text":"Add 1 US Influence to each of any 7 non-USSR controlled countries in Western Europe. This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/16/marshall-plan/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "allows":21  },  {    "id":24,    "title":"Indo-Pakistani War",    "ops":2,    "text":"India invades Pakistan or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (India or Pakistan). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/03/19/indo-pakistani-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1,    "affects": 59  },  {    "id":25,    "title":"Containment*",    "ops":3,    "text":"All Operations cards played by the US, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/03/20/containment/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":26,    "title":"CIA Created*",    "ops":1,    "text":"The USSR reveals their hand of cards for this turn. The US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/03/26/cia-created/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":27,    "title":"US/Japan Mutual Defense Pact*",    "ops":4,    "text":"The US adds sufficient Influence to Japan for Control. The USSR cannot make Coup Attempts or Realignment rolls against Japan.",    "url":"http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":28,    "title":"Suez Crisis*",    "ops":3,    "text":"Remove a total of 4 US Influence from France, the United Kingdom and Israel (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/03/29/suez-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":29,    "title":"East European Unrest",    "ops":3,    "text":"Early or Mid War: Remove 1 USSR Influence from 3 countries in Eastern Europe. Late War: Remove 2 USSR Influence from 3 countries in Eastern Europe.",    "url":"http://twilightstrategy.com/2012/04/02/east-european-unrest/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":30,    "title":"Decolonization",    "ops":2,    "text":"Add 1 USSR Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/04/05/decolonization/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":31,    "title":"Red Scare/Purge",    "ops":4,    "text":"All Operations cards played by the opponent, for the remainder of this turn, receive -1 to their Operations value (to a minimum value of 1 Operations point).",    "url":"http://twilightstrategy.com/2012/04/23/red-scarepurge/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":32,    "title":"UN Intervention",    "ops":1,    "text":"Play this card simultaneously with a card containing an opponent’s associated Event. The opponent’s associated Event is canceled but you may use the Operations value of the opponent’s card to conduct Operations. This Event cannot be played during the Headline Phase.",    "url":"http://twilightstrategy.com/2012/05/07/un-intervention/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":33,    "title":"De-Stalinization*",    "ops":3,    "text":"The USSR may reallocate up to a total of 4 Influence from one or more countries to any non-US controlled countries (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/05/29/de-stalinization/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":34,    "title":"Nuclear Test Ban",    "ops":4,    "text":"The player receives VP equal to the current DEFCON level minus 2 then improves the DEFCON level by 2.",    "url":"http://twilightstrategy.com/2012/06/11/nuclear-test-ban/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":35,    "title":"Formosan Resolution*",    "ops":2,    "text":"If this card’s Event is in effect, Taiwan will be treated as a Battleground country, for scoring purposes only, if Taiwan is US controlled when the Asia Scoring Card is played. This Event is cancelled after the US has played the “#6 – The China Card” card.",    "url":"http://twilightstrategy.com/2012/07/02/formosan-resolution/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":36,    "title":"Brush War",    "ops":3,    "text":"The player attacks any country with a stability number of 1 or 2. Roll a die and subtract (-1) from the die roll for every adjacent enemy controlled country. On a modified die roll of 3-6, the player receives 1 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 3 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/04/brush-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2,    "affects": 59  },  {    "id":37,    "title":"Central America Scoring",    "ops":0,    "text":"Presence: 1; Domination: 3; Control: 5; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-central-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":38,    "title":"Southeast Asia Scoring*",    "ops":0,    "text":"1 VP each for Control of Burma, Cambodia/Laos, Vietnam, Malaysia, Indonesia and the Philippines. 2 VP for Control of Thailand; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-southeast-asia/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":39,    "title":"Arms Race",    "ops":3,    "text":"Compare each player’s value on the Military Operations Track. If the phasing player has a higher value than their opponent on the Military Operations Track, that player receives 1 VP. If the phasing player has a higher value than their opponent, and has met the “required” amount, on the Military Operations Track, that player receives 3 VP instead.",    "url":"http://twilightstrategy.com/2012/09/05/arms-race/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":40,    "title":"Cuban Missile Crisis*",    "ops":3,    "text":"Set the DEFCON level to 2. Any Coup Attempts by your opponent, for the remainder of this turn, will result in Global Thermonuclear War. Your opponent will lose the game. This card’s Event may be canceled, at any time, if the USSR removes 2 Influence from Cuba or the US removes 2 Influence from West Germany or Turkey.",    "url":"http://twilightstrategy.com/2012/09/06/cuban-missile-crisis/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":41,    "title":"Nuclear Subs*",    "ops":2,    "text":"US Operations used for Coup Attempts in Battleground countries, for the remainder of this turn, do not degrade the DEFCON level. This card’s Event does not apply to any Event that would affect the DEFCON level (ex. the “#40 – Cuban Missile Crisis” Event).",    "url":"http://twilightstrategy.com/2012/09/10/nuclear-subs/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":42,    "title":"Quagmire*",    "ops":3,    "text":"On the US’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each US action round until the US successfully rolls 1-4 on a die. If the US is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn. This Event cancels the effect(s) of the “#106 – NORAD” Event (if applicable).",    "url":"http://twilightstrategy.com/2012/09/12/quagmire/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":43,    "title":"SALT Negotiations*",    "ops":3,    "text":"Improve the DEFCON level by 2. For the remainder of the turn, both players receive -1 to all Coup Attempt rolls. The player of this card’s Event may look through the discard pile, pick any 1 non-scoring card, reveal it to their opponent and then place the drawn card into their hand.",    "url":"http://twilightstrategy.com/2012/09/17/salt-negotiations/",    "owner":"neutral",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":44,    "title":"Bear Trap*",    "ops":3,    "text":"On the USSR’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each USSR action round until the USSR successfully rolls 1-4 on a die. If the USSR is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn.",    "url":"http://twilightstrategy.com/2012/09/19/bear-trap/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":45,    "title":"Summit",    "ops":1,    "text":"Both players roll a die. Each player receives +1 to the die roll for each Region (Europe, Asia, etc.) they Dominate or Control. The player with the highest modified die roll receives 2 VP and may degrade or improve the DEFCON level by 1 (do not reroll ties).",    "url":"http://twilightstrategy.com/2012/09/24/summit/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":46,    "title":"How I Learned to Stop Worrying*",    "ops":2,    "text":"Set the DEFCON level to any level desired (1-5). The player adds 5 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/26/how-i-learned-to-stop-worrying/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":47,    "title":"Junta",    "ops":2,    "text":"Add 2 Influence to a single country in Central or South America. The player may make free Coup Attempts or Realignment rolls in either Central or South America using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/01/junta/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":48,    "title":"Kitchen Debates*",    "ops":1,    "text":"If the US controls more Battleground countries than the USSR, the US player uses this Event to poke their opponent in the chest and receive 2 VP!",    "url":"http://twilightstrategy.com/2012/10/03/kitchen-debates/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":49,    "title":"Missile Envy",    "ops":2,    "text":"Exchange this card for your opponent’s highest value Operations card. If 2 or more cards are tied, opponent chooses. If the exchanged card contains an Event applicable to yourself or both players, it occurs immediately. If it contains an opponent’s Event, use the Operations value (no Event). The opponent must use this card for Operations during their next action round.",    "url":"http://twilightstrategy.com/2012/10/08/missile-envy/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":50,    "title":"We Will Bury You*",    "ops":4,    "text":"Degrade the DEFCON level by 1. Unless the #32 UN Intervention card is played as an Event on the US’s next action round, the USSR receives 3 VP.",    "url":"http://twilightstrategy.com/2012/10/10/we-will-bury-you/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":51,    "title":"Brezhnev Doctrine*",    "ops":3,    "text":"All Operations cards played by the USSR, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/10/12/brezhnev-doctrine/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":52,    "title":"Portuguese Empire Crumbles*",    "ops":2,    "text":"Add 2 USSR Influence to Angola and the SE African States.",    "url":"http://twilightstrategy.com/2012/10/15/portuguese-empire-crumbles/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":53,    "title":"South African Unrest",    "ops":2,    "text":"The USSR either adds 2 Influence to South Africa or adds 1 Influence to South Africa and 2 Influence to a single country adjacent to South Africa.",    "url":"http://twilightstrategy.com/2012/10/16/south-african-unrest/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":54,    "title":"Allende*",    "ops":1,    "text":"Add 2 USSR Influence to Chile.",    "url":"http://twilightstrategy.com/2012/10/17/allende/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":55,    "title":"Willy Brandt*",    "ops":2,    "text":"The USSR receives 1 VP and adds 1 Influence to West Germany. This Event cancels the effect(s) of the “#21 – NATO” Event for West Germany only. This Event is prevented / canceled by the “#96 – Tear Down this Wall” Event.",    "url":"http://twilightstrategy.com/2012/10/18/willy-brandt/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2,    "antireq":96,    "affects":21  },  {    "id":56,    "title":"Muslim Revolution",    "ops":4,    "text":"Remove all US Influence from 2 of the following countries: Sudan, Iran, Iraq, Egypt, Libya, Saudi Arabia, Syria, Jordan. This Event cannot be used after the “#110 – AWACS Sale to Saudis” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/19/muslim-revolution/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":57,    "title":"ABM Treaty",    "ops":4,    "text":"Improve the DEFCON level by 1 and then conduct Operations using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/23/abm-treaty/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":58,    "title":"Cultural Revolution*",    "ops":3,    "text":"If the US has the “#6 – The China Card” card, the US must give the card to the USSR (face up and available to be played). If the USSR already has “#6 – The China Card” card, the USSR receives 1 VP.",    "url":"http://twilightstrategy.com/2012/10/24/cultural-revolution/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":59,    "title":"Flower Power*",    "ops":4,    "text":"The USSR receives 2 VP for every US played “War” card (Arab-Israeli War, Korean War, Brush War, Indo-Pakistani War, Iran-Iraq War), used for Operations or an Event, after this card is played. This Event is prevented / canceled by the “#97 – An Evil Empire” Event.",    "url":"http://twilightstrategy.com/2012/10/25/flower-power/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2,    "antireq":97  },  {    "id":60,    "title":"U2 Incident*",    "ops":3,    "text":"The USSR receives 1 VP. If the “#32 – UN Intervention” Event is played later this turn, either by the US or the USSR, the USSR receives an additional 1 VP.",    "url":"http://twilightstrategy.com/2012/10/26/u-2-incident/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2,    "related":32  },  {    "id":61,    "title":"OPEC",    "ops":3,    "text":"The USSR receives 1 VP for Control of each of the following countries: Egypt, Iran, Libya, Saudi Arabia, Iraq, Gulf States, Venezuela. This Event cannot be used after the “#86 – North Sea Oil” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/29/opec/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2,    "antireq":86  },  {    "id":62,    "title":"Lone Gunman*",    "ops":1,    "text":"The US reveals their hand of cards. The USSR may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/10/30/lone-gunman/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":63,    "title":"Colonial Rear Guards",    "ops":2,    "text":"Add 1 US Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/11/01/colonial-rear-guards/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":64,    "title":"Panama Canal Returned*",    "ops":1,    "text":"Add 1 US Influence to Panama, Costa Rica and Venezuela.",    "url":"http://twilightstrategy.com/2012/11/02/panama-canal-returned/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":65,    "title":"Camp David Accords*",    "ops":2,    "text":"The US receives 1 VP and adds 1 Influence to Israel, Jordan and Egypt. This Event prevents the “#13 – Arab-Israeli War” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/11/05/camp-david-accords/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":66,    "title":"Puppet Governments*",    "ops":2,    "text":"The US may add 1 Influence to 3 countries that do not contain Influence from either the US or USSR.",    "url":"http://twilightstrategy.com/2012/11/06/puppet-governments/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":67,    "title":"Grain Sales to Soviets",    "ops":2,    "text":"The US randomly selects 1 card from the USSR’s hand (if available). The US must either play the card or return it to the USSR. If the card is returned, or the USSR has no cards, the US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/11/07/grain-sales-to-soviets/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":68,    "title":"John Paul II Elected Pope*",    "ops":2,    "text":"Remove 2 USSR Influence from Poland and add 1 US Influence to Poland. This Event allows the “#101 – Solidarity” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/11/08/john-paul-ii-elected-pope/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":69,    "title":"Latin American Death Squads",    "ops":2,    "text":"All of the phasing player’s Coup Attempts in Central and South America, for the remainder of this turn, receive +1 to their die roll. All of the opponent’s Coup Attempts in Central and South America, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/11/09/latin-american-death-squads/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":70,    "title":"OAS Founded*",    "ops":1,    "text":"Add a total of 2 US Influence to any countries in Central or South America.",    "url":"http://twilightstrategy.com/2012/11/12/oas-founded/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":71,    "title":"Nixon Plays the China Card*",    "ops":2,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face down and unavailable for immediate play). If the US already has the “#6 – The China Card” card, the US receives 2 VP.",    "url":"http://twilightstrategy.com/2012/11/13/nixon-plays-the-china-card/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":72,    "title":"Sadat Expels Soviets*",    "ops":1,    "text":"Remove all USSR Influence from Egypt and add 1 US Influence to Egypt.",    "url":"http://twilightstrategy.com/2012/11/14/sadat-expels-soviets/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":73,    "title":"Shuttle Diplomacy",    "ops":3,    "text":"If this card’s Event is in effect, subtract (-1) a Battleground country from the USSR total and then discard this card during the next scoring of the Middle East or Asia (which ever comes first).",    "url":"http://twilightstrategy.com/2012/11/15/shuttle-diplomacy/",    "owner":"us",    "removed":false,    "ongoing":true,    "stage":2  },  {    "id":74,    "title":"The Voice of America",    "ops":2,    "text":"Remove 4 USSR Influence from any countries NOT in Europe (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/16/the-voice-of-america/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":75,    "title":"Liberation Theology",    "ops":2,    "text":"Add a total of 3 USSR Influence to any countries in Central America (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/19/liberation-theology/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":76,    "title":"Ussuri River Skirmish*",    "ops":3,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face up and available for play). If the US already has the “#6 – The China Card” card, add a total of 4 US Influence to any countries in Asia (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/20/ussuri-river-skirmish/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":77,    "title":"Ask Not What Your Country…*",    "ops":3,    "text":"The US may discard up to their entire hand of cards (including scoring cards) to the discard pile and draw replacements from the draw pile. The number of cards to be discarded must be decided before drawing any replacement cards from the draw pile.",    "url":"http://twilightstrategy.com/2012/11/21/ask-not-what-your-country-can-do-for-you/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":78,    "title":"Alliance for Progress*",    "ops":3,    "text":"The US receives 1 VP for each US controlled Battleground country in Central and South America.",    "url":"http://twilightstrategy.com/2012/11/23/alliance-for-progress/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":79,    "title":"Africa Scoring",    "ops":0,    "text":"Presence: 1; Domination: 4; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/04/11/regions-africa/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":80,    "title":"One Small Step…",    "ops":2,    "text":"If you are behind on the Space Race Track, the player uses this Event to move their marker 2 spaces forward on the Space Race Track. The player receives VP only from the final space moved into.",    "url":"http://twilightstrategy.com/2012/11/26/one-small-step/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":81,    "title":"South America Scoring",    "ops":0,    "text":"Presence: 2; Domination: 5; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/08/15/regions-south-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":82,    "title":"Iranian Hostage Crisis*",    "ops":3,    "text":"Remove all US Influence and add 2 USSR Influence to Iran. This card’s Event requires the US to discard 2 cards, instead of 1 card, if the “#92 – Terrorism” Event is played.",    "url":"http://twilightstrategy.com/2012/11/30/iranian-hostage-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3,    "affects":92  },  {    "id":83,    "title":"The Iron Lady*",    "ops":3,    "text":"Add 1 USSR Influence to Argentina and remove all USSR Influence from the United Kingdom. The US receives 1 VP. This Event prevents the “#7 – Socialist Governments” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/03/the-iron-lady/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":83  },  {    "id":84,    "title":"Reagan Bombs Libya*",    "ops":2,    "text":"The US receives 1 VP for every 2 USSR Influence in Libya.",    "url":"http://twilightstrategy.com/2012/12/04/reagan-bombs-libya/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":85,    "title":"Star Wars*",    "ops":2,    "text":"If the US is ahead on the Space Race Track, the US player uses this Event to look through the discard pile, pick any 1 non-scoring card and play it immediately as an Event.",    "url":"http://twilightstrategy.com/2012/12/05/star-wars/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":86,    "title":"North Sea Oil*",    "ops":3,    "text":"The US may play 8 cards (in 8 action rounds) for this turn only. This Event prevents the “#61 – OPEC” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/06/north-sea-oil/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":61  },  {    "id":87,    "title":"The Reformer*",    "ops":3,    "text":"Add 4 USSR Influence to Europe (adding no more than 2 Influence per country). If the USSR is ahead of the US in VP, 6 Influence may be added to Europe instead. The USSR may no longer make Coup Attempts in Europe.",    "url":"http://twilightstrategy.com/2012/12/07/the-reformer/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3,    "affects":90  },  {    "id":88,    "title":"Marine Barracks Bombing*",    "ops":2,    "text":"Remove all US Influence in Lebanon and remove a total of 2 US Influence from any countries in the Middle East.",    "url":"http://twilightstrategy.com/2012/12/10/marine-barracks-bombing/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":89,    "title":"Soviets Shoot Down KAL-007*",    "ops":4,    "text":"Degrade the DEFCON level by 1 and the US receives 2 VP. The US may place influence or make Realignment rolls, using this card, if South Korea is US controlled.",    "url":"http://twilightstrategy.com/2012/12/11/soviets-shoot-down-kal-007/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":90,    "title":"Glasnost*",    "ops":4,    "text":"Improve the DEFCON level by 1 and the USSR receives 2 VP. The USSR may make Realignment rolls or add Influence, using this card, if the “#87 – The Reformer” Event has already been played.",    "url":"http://twilightstrategy.com/2012/12/12/glasnost/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":91,    "title":"Ortega Elected in Nicaragua*",    "ops":2,    "text":"Remove all US Influence from Nicaragua. The USSR may make a free Coup Attempt, using this card’s Operations value, in a country adjacent to Nicaragua.",    "url":"http://twilightstrategy.com/2012/12/13/ortega-elected-in-nicaragua/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":92,    "title":"Terrorism",    "ops":2,    "text":"The player’s opponent must randomly discard 1 card from their hand. If the “#82 – Iranian Hostage Crisis” Event has already been played, a US player (if applicable) must randomly discard 2 cards from their hand.",    "url":"http://twilightstrategy.com/2012/12/14/terrorism/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":93,    "title":"Iran-Contra Scandal*",    "ops":2,    "text":"All US Realignment rolls, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/12/17/iran-contra-scandal/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":94,    "title":"Chernobyl*",    "ops":3,    "text":"The US must designate a single Region (Europe, Asia, etc.) that, for the remainder of the turn, the USSR cannot add Influence to using Operations points.",    "url":"http://twilightstrategy.com/2012/12/18/chernobyl/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":95,    "title":"Latin American Debt Crisis",    "ops":2,    "text":"The US must immediately discard a card with an Operations value of 3 or more or the USSR may double the amount of USSR Influence in 2 countries in South America.",    "url":"http://twilightstrategy.com/2012/12/19/latin-american-debt-crisis/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":96,    "title":"Tear Down this Wall*",    "ops":3,    "text":"Add 3 US Influence to East Germany. The US may make free Coup Attempts or Realignment rolls in Europe using the Operations value of this card. This Event prevents / cancels the effect(s) of the “#55 – Willy Brandt” Event.",    "url":"http://twilightstrategy.com/2012/12/20/tear-down-this-wall/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":55  },  {    "id":97,    "title":"An Evil Empire*",    "ops":3,    "text":"The US receives 1 VP. This Event prevents / cancels the effect(s) of the “#59 – Flower Power” Event.",    "url":"http://twilightstrategy.com/2012/12/21/an-evil-empire/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3,    "cancels":59  },  {    "id":98,    "title":"Aldrich Ames Remix*",    "ops":3,    "text":"The US reveals their hand of cards, face-up, for the remainder of the turn and the USSR discards a card from the US hand.",    "url":"http://twilightstrategy.com/2013/01/03/aldrich-ames-remix/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":99,    "title":"Pershing II Deployed*",    "ops":3,    "text":"The USSR receives 1 VP. Remove 1 US Influence from any 3 countries in Western Europe.",    "url":"http://twilightstrategy.com/2013/01/04/pershing-ii-deployed/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":100,    "title":"Wargames*",    "ops":4,    "text":"If the DEFCON level is 2, the player may immediately end the game after giving their opponent 6 VP. How about a nice game of chess?",    "url":"http://twilightstrategy.com/2013/01/07/wargames/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":101,    "title":"Solidarity*",    "ops":2,    "text":"Add 3 US Influence to Poland. This card requires prior play of the “#68 – John Paul II Elected Pope” Event in order to be played as an Event.",    "url":"http://twilightstrategy.com/2013/01/08/solidarity/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3,    "prereq":68  },  {    "id":102,    "title":"Iran-Iraq War*",    "ops":2,    "text":"Iran invades Iraq or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (Iran or Iraq). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2013/01/09/iran-iraq-war/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3,    "affects": 59  },  {    "id":103,    "title":"Defectors",    "ops":2,    "text":"The US may play this card during the Headline Phase in order to cancel the USSR Headline Event (including a scoring card). The canceled card is placed into the discard pile. If this card is played by the USSR during its action round, the US gains 1 VP.",    "url":"http://twilightstrategy.com/2012/07/09/defectors/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":104,    "title":"The Cambridge Five",    "ops":2,    "text":"The US reveals all scoring cards in their hand of cards. The USSR player may add 1 USSR Influence to a single Region named on one of the revealed scoring cards. This card can not be played as an Event during the Late War.",    "url":"http://twilightstrategy.com/2012/07/11/the-cambridge-five/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":105,    "title":"Special Relationship",    "ops":2,    "text":"Add 1 US Influence to a single country adjacent to the U.K. if the U.K. is US-controlled but NATO is not in effect. Add 2 US Influence to a single country in Western Europe, and the US gains 2 VP, if the U.K. is US-controlled and NATO is in effect.",    "url":"http://twilightstrategy.com/2012/07/18/special-relationship/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":106,    "title":"NORAD*",    "ops":3,    "text":"Add 1 US Influence to a single country containing US Influence, at the end of each Action Round, if Canada is US-controlled and the DEFCON level moved to 2 during that Action Round. This Event is canceled by the “#42 – Quagmire” Event.",    "url":"http://twilightstrategy.com/2012/07/25/norad/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1,    "antireq": 42  },  {    "id":107,    "title":"Che",    "ops":3,    "text":"The USSR may perform a Coup Attempt, using this card’s Operations value, against a non-Battleground country in Central America, South America or Africa. The USSR may perform a second Coup Attempt, against a different non-Battleground country in Central America, South America or Africa, if the first Coup Attempt removed any US Influence from the target country.",    "url":"http://twilightstrategy.com/2012/11/27/che/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":108,    "title":"Our Man in Tehran*",    "ops":2,    "text":"If the US controls at least one Middle East country, the US player uses this Event to draw the top 5 cards from the draw pile. The US may discard any or all of the drawn cards, after revealing the discarded card(s) to the USSR player, without triggering the Event(s). Any remaining drawn cards are returned to the draw pile and the draw pile is reshuffled.",    "url":"http://twilightstrategy.com/2012/11/28/our-man-in-tehran/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":109,    "title":"Yuri and Samantha*",    "ops":2,    "text":"The USSR receives 1 VP for each US Coup Attempt performed during the remainder of the Turn.",    "url":"http://twilightstrategy.com/2013/01/10/yuri-and-samantha/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":110,    "title":"AWACS Sale to Saudis*",    "ops":3,    "text":"Add 2 US Influence to Saudi Arabia. This Event prevents the “#56 – Muslim Revolution” card from being played as an Event.",    "url":"http://twilightstrategy.com/2013/01/14/awacs-sale-to-saudis/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  }]
},{}],3:[function(require,module,exports){
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


},{"../lib/cards.json":2,"./pages":42,"./router":43,"./vent":44,"./views":61}],4:[function(require,module,exports){
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


},{"./StateHistory":6,"./stateEncoder":27,"./superpowerToIndex":29}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
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


},{"./MicroEventClass":5}],7:[function(require,module,exports){
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


},{}],8:[function(require,module,exports){
module.exports = function(continent) {
  if (continent === 'af') {
    return 'f';
  } else {
    return continent.charAt(0);
  }
};


},{}],9:[function(require,module,exports){
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


},{}],10:[function(require,module,exports){
module.exports = function(el) {
  if (el) {
    return el;
  }
};


},{}],11:[function(require,module,exports){
module.exports = function(el, i, arr) {
  return arr.indexOf(el) === i;
};


},{}],12:[function(require,module,exports){
module.exports = function(el) {
  return (1 <= el && el <= 110);
};


},{}],13:[function(require,module,exports){
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


},{}],14:[function(require,module,exports){
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


},{}],15:[function(require,module,exports){
module.exports = (function () {var f = require("./index.coffee");f["BoardStateHistory"]=require("./BoardStateHistory.coffee");f["MicroEventClass"]=require("./MicroEventClass.coffee");f["StateHistory"]=require("./StateHistory.coffee");f["cardClassName"]=require("./cardClassName.coffee");f["contientCodeFromOneLetter"]=require("./contientCodeFromOneLetter.coffee");f["continentCodeFromLetter"]=require("./continentCodeFromLetter.coffee");f["filterTruthy"]=require("./filterTruthy.coffee");f["filterUnique"]=require("./filterUnique.coffee");f["filterValidCardIds"]=require("./filterValidCardIds.coffee");f["gameVal"]=require("./gameVal.coffee");f["gameValDisplay"]=require("./gameValDisplay.coffee");f["index"]=require("./index.coffee");f["intToStrWithSign"]=require("./intToStrWithSign.coffee");f["numToChar"]=require("./numToChar.coffee");f["oneLetterContinentCode"]=require("./oneLetterContinentCode.coffee");f["qs"]=require("./qs.coffee");f["rangedGameVal"]=require("./rangedGameVal.coffee");f["setPageTitle"]=require("./setPageTitle.coffee");f["signFromDir"]=require("./signFromDir.coffee");f["signString"]=require("./signString.coffee");f["signedNumOrDash"]=require("./signedNumOrDash.coffee");f["signedStr"]=require("./signedStr.coffee");f["sortNumerical"]=require("./sortNumerical.coffee");f["stateEncoder"]=require("./stateEncoder.coffee");f["superStats"]=require("./superStats.coffee");f["superpowerToIndex"]=require("./superpowerToIndex.coffee");f["upperFirst"]=require("./upperFirst.coffee");f["views"]=require("./views.coffee");f["zeroPad"]=require("./zeroPad.coffee");return f;})();


},{"./BoardStateHistory.coffee":4,"./MicroEventClass.coffee":5,"./StateHistory.coffee":6,"./cardClassName.coffee":7,"./contientCodeFromOneLetter.coffee":8,"./continentCodeFromLetter.coffee":9,"./filterTruthy.coffee":10,"./filterUnique.coffee":11,"./filterValidCardIds.coffee":12,"./gameVal.coffee":13,"./gameValDisplay.coffee":14,"./index.coffee":15,"./intToStrWithSign.coffee":16,"./numToChar.coffee":17,"./oneLetterContinentCode.coffee":18,"./qs.coffee":19,"./rangedGameVal.coffee":20,"./setPageTitle.coffee":21,"./signFromDir.coffee":22,"./signString.coffee":23,"./signedNumOrDash.coffee":24,"./signedStr.coffee":25,"./sortNumerical.coffee":26,"./stateEncoder.coffee":27,"./superStats.coffee":28,"./superpowerToIndex.coffee":29,"./upperFirst.coffee":30,"./views.coffee":31,"./zeroPad.coffee":32}],16:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return "+" + num;
  } else {
    return num;
  }
};


},{}],17:[function(require,module,exports){
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


},{}],18:[function(require,module,exports){
module.exports = function(continent) {
  if (continent === 'af') {
    return 'f';
  } else {
    return continent.charAt(0);
  }
};


},{}],19:[function(require,module,exports){
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


},{}],20:[function(require,module,exports){
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


},{}],21:[function(require,module,exports){
var __slice = [].slice;

module.exports = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return document.title = args.join(' | ') + ' - TwiStrug';
};


},{}],22:[function(require,module,exports){
module.exports = function(dir) {
  if (dir === 'up') {
    return '+';
  } else {
    return '-';
  }
};


},{}],23:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return '+';
  }
  if (num < 0) {
    return '-';
  }
  return '';
};


},{}],24:[function(require,module,exports){
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


},{}],25:[function(require,module,exports){
module.exports = function(num) {
  var sign;
  sign = '';
  if (num > 0) {
    sign = '+';
  }
  console.log(sign + num);
  return sign + num;
};


},{}],26:[function(require,module,exports){
module.exports = function(a, b) {
  return a - b;
};


},{}],27:[function(require,module,exports){
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


},{"./numToChar":17}],28:[function(require,module,exports){
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


},{}],29:[function(require,module,exports){
module.exports = function(power) {
  if (power === 'usa') {
    return 0;
  } else {
    return 1;
  }
};


},{}],30:[function(require,module,exports){
module.exports = function(str) {
  if (str == null) {
    str = '';
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


},{}],31:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],32:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],33:[function(require,module,exports){
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


},{}],34:[function(require,module,exports){
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


},{"../libs/BoardStateHistory":4,"../libs/StateHistory":6,"../views/Board":45,"../views/BoardStateHistory":51}],35:[function(require,module,exports){
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


},{}],36:[function(require,module,exports){
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


},{"../libs":15}],37:[function(require,module,exports){
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


},{"../libs":15,"../views/CardList":57}],38:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],39:[function(require,module,exports){
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


},{"../libs/BoardStateHistory":4,"../libs/StateHistory":6,"../views/Board":45,"../views/BoardStateHistory":51}],40:[function(require,module,exports){
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


},{}],41:[function(require,module,exports){
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


},{}],42:[function(require,module,exports){
module.exports = (function () {var f = require("./index.coffee");f["About"]=require("./About.coffee");f["Board"]=require("./Board.coffee");f["BoardPic"]=require("./BoardPic.coffee");f["Card"]=require("./Card.coffee");f["Cards"]=require("./Cards.coffee");f["Countries"]=require("./Countries.coffee");f["Game"]=require("./Game.coffee");f["Home"]=require("./Home.coffee");f["Whoops"]=require("./Whoops.coffee");f["index"]=require("./index.coffee");return f;})();


},{"./About.coffee":33,"./Board.coffee":34,"./BoardPic.coffee":35,"./Card.coffee":36,"./Cards.coffee":37,"./Countries.coffee":38,"./Game.coffee":39,"./Home.coffee":40,"./Whoops.coffee":41,"./index.coffee":42}],43:[function(require,module,exports){
var mapDatav2, oneLetterContinentCode, qs, setPageTitle, setRouteOriginal, vent;

vent = require('./vent');

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


},{"../app/data/map-data-v2.json":1,"./libs/oneLetterContinentCode":18,"./libs/qs":19,"./libs/setPageTitle":21,"./vent":44}],44:[function(require,module,exports){
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


},{"./libs/MicroEventClass":5}],45:[function(require,module,exports){
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


},{"../libs/continentCodeFromLetter":9,"../libs/filterTruthy":10,"../libs/oneLetterContinentCode":18,"../libs/rangedGameVal":20,"../libs/signedNumOrDash":24,"../libs/stateEncoder":27,"../libs/superStats":28,"../libs/upperFirst":30,"../vent":44,"./BoardLink":46,"./BoardNode":47,"./BoardNodeDiv":48,"./BoardStatus":53}],46:[function(require,module,exports){
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


},{}],47:[function(require,module,exports){
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


},{"./BoardNodeIP":49}],48:[function(require,module,exports){
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


},{"./BoardNodeIPDiv":50}],49:[function(require,module,exports){
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


},{}],50:[function(require,module,exports){
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


},{}],51:[function(require,module,exports){
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


},{"./BoardStateHistoryEntry":52}],52:[function(require,module,exports){
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


},{"../libs/gameValDisplay":14,"../libs/intToStrWithSign":16,"../libs/superpowerToIndex":29,"../libs/upperFirst":30,"../libs/zeroPad":32}],53:[function(require,module,exports){
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


},{"./BoardStatusValue":54,"./Die":58}],54:[function(require,module,exports){
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


},{}],55:[function(require,module,exports){
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


},{"../libs/zeroPad":32}],56:[function(require,module,exports){
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


},{"../libs/zeroPad":32}],57:[function(require,module,exports){
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


},{"./Card":55}],58:[function(require,module,exports){
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


},{}],59:[function(require,module,exports){
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


},{}],60:[function(require,module,exports){
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


},{}],61:[function(require,module,exports){
module.exports = (function () {var f = require("./index.coffee");f["Board"]=require("./Board.coffee");f["BoardLink"]=require("./BoardLink.coffee");f["BoardNode"]=require("./BoardNode.coffee");f["BoardNodeDiv"]=require("./BoardNodeDiv.coffee");f["BoardNodeIP"]=require("./BoardNodeIP.coffee");f["BoardNodeIPDiv"]=require("./BoardNodeIPDiv.coffee");f["BoardStateHistory"]=require("./BoardStateHistory.coffee");f["BoardStateHistoryEntry"]=require("./BoardStateHistoryEntry.coffee");f["BoardStatus"]=require("./BoardStatus.coffee");f["BoardStatusValue"]=require("./BoardStatusValue.coffee");f["Card"]=require("./Card.coffee");f["CardImg"]=require("./CardImg.coffee");f["CardList"]=require("./CardList.coffee");f["Die"]=require("./Die.coffee");f["Footer"]=require("./Footer.coffee");f["Nav"]=require("./Nav.coffee");f["index"]=require("./index.coffee");return f;})();


},{"./Board.coffee":45,"./BoardLink.coffee":46,"./BoardNode.coffee":47,"./BoardNodeDiv.coffee":48,"./BoardNodeIP.coffee":49,"./BoardNodeIPDiv.coffee":50,"./BoardStateHistory.coffee":51,"./BoardStateHistoryEntry.coffee":52,"./BoardStatus.coffee":53,"./BoardStatusValue.coffee":54,"./Card.coffee":55,"./CardImg.coffee":56,"./CardList.coffee":57,"./Die.coffee":58,"./Footer.coffee":59,"./Nav.coffee":60,"./index.coffee":61}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvYXBwL2RhdGEvbWFwLWRhdGEtdjIuanNvbiIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbGliL2NhcmRzLmpzb24iLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9Ud2lzdHJ1Zy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvTWljcm9FdmVudENsYXNzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvY2FyZENsYXNzTmFtZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2NvbnRpZW50Q29kZUZyb21PbmVMZXR0ZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclRydXRoeS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclVuaXF1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclZhbGlkQ2FyZElkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2dhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9nYW1lVmFsRGlzcGxheS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvaW50VG9TdHJXaXRoU2lnbi5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL251bVRvQ2hhci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9xcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3JhbmdlZEdhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zZXRQYWdlVGl0bGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduRnJvbURpci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3NpZ25TdHJpbmcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWROdW1PckRhc2guY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWRTdHIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zb3J0TnVtZXJpY2FsLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3RhdGVFbmNvZGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3VwZXJTdGF0cy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3N1cGVycG93ZXJUb0luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvdXBwZXJGaXJzdC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3ZpZXdzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvemVyb1BhZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9BYm91dC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZFBpYy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NhcmRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NvdW50cmllcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9HYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDLENBQUYsQ0FBSTtBQUFBLFFBQUEsU0FBQSxFQUFXLGNBQVg7QUFBQSxRQUEyQixJQUFBLEVBQU0sSUFBakM7T0FBSixFQUEyQztRQUN6QyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVcsS0FBWDtTQUFQLEVBQXlCLEtBQXpCLENBRHlDLEVBRXpDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxPQUFYO1NBQVAsRUFBMkIsT0FBM0IsQ0FGeUM7T0FBM0MsQ0FERixDQUY0QixFQVE1QixDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsUUFBQSxTQUFBLEVBQVcsZ0JBQVg7T0FBTCxFQUFrQyxDQUVoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FGZ0MsRUFHaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSGdDLEVBSWhDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUpnQyxDQUFsQyxDQVI0QjtLQUE5QixDQURGLEVBTk07RUFBQSxDQUpSO0NBRGUsQ0FIakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQUEsQ0FBUSxjQUFSLENBQUEsQ0FBd0IsU0FBeEIsRUFBbUMsQ0FBQyxVQUFELENBQW5DLENBQWpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImNvdW50cmllc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVVNBXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlVTQVwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6IFwidXNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInVzYVwiLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJDYW5hZGEsQ3ViYSxNZXhpY28sSmFwYW5cIixcbiAgICAgIFwiaWRcIjogMCxcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogNjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidXNcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVTU1JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVVNTUlwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6IFwidXNzclwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJ1c3NyXCIsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkFmZ2hhbmlzdGFuLEZpbmxhbmQsTiBLb3JlYSxQb2xhbmQsUm9tYW5pYVwiLFxuICAgICAgXCJpZFwiOiAxLFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidXNcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkF1c3RyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXVzdHJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiRSBHZXJtYW55LEh1bmdhcnksSXRhbHksVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6IDIsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQmVuZWx1eFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCZW5lbHV4XCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVyBHZXJtYW55LFVLXCIsXG4gICAgICBcImlkXCI6IDMsXG4gICAgICBcInhcIjogNDAwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJiZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJ1bGdhcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJ1bGdhcmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVHVya2V5LEdyZWVjZVwiLFxuICAgICAgXCJpZFwiOiA0LFxuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYnVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJidVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDYW5hZGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ2FuYWRhXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAyLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVUtcIixcbiAgICAgIFwiaWRcIjogNSxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY2FcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDemVjaFwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBvbGFuZCxFIEdlcm1hbnksSHVuZ2FyeVwiLFxuICAgICAgXCJpZFwiOiA2LFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY3pcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjelwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJEZW5tYXJrXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkRlbm1hcmtcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXIEdlcm1hbnksU3dlZGVuXCIsXG4gICAgICBcImlkXCI6IDcsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJkZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRSBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkUuR2VybVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVnXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDMsXG4gICAgICBcImxpbmtzXCI6IFwiUG9sYW5kLFcgR2VybWFueVwiLFxuICAgICAgXCJpZFwiOiA4LFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGaW5sYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkZpbmxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAxLFxuICAgICAgXCJsaW5rc1wiOiBcIlN3ZWRlblwiLFxuICAgICAgXCJpZFwiOiA5LFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmaVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImZpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZyYW5jZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJGcmFuY2VcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJBbGdlcmlhLFVLLFcgR2VybWFueSxJdGFseSxTcGFpblxcL1BvcnR1Z2FsXCIsXG4gICAgICBcImlkXCI6IDEwLFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZnJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJmclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJHcmVlY2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiR3JlZWNlXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSXRhbHksWXVnb3NsYXZpYSxUdXJrZXlcIixcbiAgICAgIFwiaWRcIjogMTEsXG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJnclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSHVuZ2FyeVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJIdW5nYXJ5XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUm9tYW5pYSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6IDEyLFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaHVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkl0YWx5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkl0YWx5XCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiWXVnb3NsYXZpYSxTcGFpblxcL1BvcnR1Z2FsXCIsXG4gICAgICBcImlkXCI6IDEzLFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXRcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk5vcndheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOb3J3YXlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJVSyxTd2VkZW5cIixcbiAgICAgIFwiaWRcIjogMTQsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm5vXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQb2xhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUG9sYW5kXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDE1LFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicG9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlJvbWFuaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUm9tYW5pYVwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlR1cmtleSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6IDE2LFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicm9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU3BhaW5cXC9Qb1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1vcm9jY29cIixcbiAgICAgIFwiaWRcIjogMTcsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzcFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN3ZWRlblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTd2VkZW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMTgsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInN3XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3dcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVHVya2V5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlR1cmtleVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAxOSxcbiAgICAgIFwieFwiOiA2ODAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInR1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVS1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJVS1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDUsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogNSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAyMCxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInVrXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJXIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVy5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwid2dcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMjEsXG4gICAgICBcInhcIjogNDgwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIll1Z29zbGF2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiWXVnb3NsYXZcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMjIsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ5dVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRWd5cHRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRWd5cHRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIklzcmFlbCxMaWJ5YSxTdWRhblwiLFxuICAgICAgXCJpZFwiOiAyMyxcbiAgICAgIFwieFwiOiA3NjAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVnXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJHdWxmIFN0c1wiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSXJhcSxTYXVkaSBBcmFiaWFcIixcbiAgICAgIFwiaWRcIjogMjQsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZ3VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklyYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXJhblwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImluXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJcmFxLEFmZ2hhbmlzdGFuLFBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6IDI1LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXJhcVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJcmFxXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAxLFxuICAgICAgXCJsaW5rc1wiOiBcIlNhdWRpIEFyYWJpYSxKb3JkYW5cIixcbiAgICAgIFwiaWRcIjogMjYsXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpcVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJc3JhZWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXNyYWVsXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJKb3JkYW4sTGViYW5vbixTeXJpYVwiLFxuICAgICAgXCJpZFwiOiAyNyxcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImlzXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSm9yZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkpvcmRhblwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU2F1ZGkgQXJhYmlhLExlYmFub25cIixcbiAgICAgIFwiaWRcIjogMjgsXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJqb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGViYW5vblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJMZWJhbm9uXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTeXJpYVwiLFxuICAgICAgXCJpZFwiOiAyOSxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImxlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGlieWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTGlieWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlR1bmlzaWFcIixcbiAgICAgIFwiaWRcIjogMzAsXG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJsaVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImxpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTYXVkaSBBXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMzEsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2FcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTeXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTeXJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDEsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDMyLFxuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3lcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzeVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBZmdoYW5pc3RhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBZmdoYW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6IDMzLFxuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYWZcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhZlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBdXN0cmFsaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXVzdHJhbGlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDQsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJNYWxheXNpYVwiLFxuICAgICAgXCJpZFwiOiAzNCxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImF1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYXVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQnVybWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQnVybWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJbmRpYSxMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgIFwiaWRcIjogMzUsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJidVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpZFwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjogMzYsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSW5kb25lc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJNYWxheXNpYSxQaGlsbGlwcGluZXNcIixcbiAgICAgIFwiaWRcIjogMzcsXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJKYXBhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJKYXBhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGhpbGxpcHBpbmVzLFMgS29yZWEsVGFpd2FuXCIsXG4gICAgICBcImlkXCI6IDM4LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJqYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGFvc1xcL0NhbWJvZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkxhb3NcXC9DYW1cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUaGFpbGFuZCxWaWV0bmFtXCIsXG4gICAgICBcImlkXCI6IDM5LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAyNTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1hbGF5c2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1hbGF5c2lhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVGhhaWxhbmRcIixcbiAgICAgIFwiaWRcIjogNDAsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibWFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk4gS29yZWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTi5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm5rXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMyxcbiAgICAgIFwibGlua3NcIjogXCJTIEtvcmVhXCIsXG4gICAgICBcImlkXCI6IDQxLFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQYWtpc3RhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQYWtpc3RhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQyLFxuICAgICAgXCJ4XCI6IDg0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQaGlsbGlwcGluZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGhpbGxpcFwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA0MyxcbiAgICAgIFwieFwiOiA5MjAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicGhcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlMuS29yZWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJza1wiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVGFpd2FuXCIsXG4gICAgICBcImlkXCI6IDQ0LFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRhaXdhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJUYWl3YW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA0NSxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMTI4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInRhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGhhaWxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVGhhaWxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJWaWV0bmFtXCIsXG4gICAgICBcImlkXCI6IDQ2LFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInRoXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidGhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVmlldG5hbVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJWaWV0bmFtXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQ3LFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInZpXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBbGdlcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFsZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1vcm9jY28sVHVuaXNpYSxTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJpZFwiOiA0OCxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFsXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQW5nb2xhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFuZ29sYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQm90c3dhbmEsU291dGggQWZyaWNhLFphaXJlXCIsXG4gICAgICBcImlkXCI6IDQ5LFxuICAgICAgXCJ4XCI6IDU2MCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYW5cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCb3Rzd2FuYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCb3Rzd2FuYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU291dGggQWZyaWNhLFppbWJhYndlXCIsXG4gICAgICBcImlkXCI6IDUwLFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYm9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhbWVyb29uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNhbWVyb29uXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJOaWdlcmlhLFphaXJlXCIsXG4gICAgICBcImlkXCI6IDUxLFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY2FcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkV0aGlvcGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkV0aGlvcGlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTdWRhbixTb21hbGlhXCIsXG4gICAgICBcImlkXCI6IDUyLFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZXRcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkl2b3J5IENvYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkl2b3J5IENcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIldlc3QgQWZyaWNhLE5pZ2VyaWFcIixcbiAgICAgIFwiaWRcIjogNTMsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpdlwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiS2VueWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiS2VueWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlNvbWFsaWEsU0UgQWZyaWNhXCIsXG4gICAgICBcImlkXCI6IDU0LFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwia2VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1vcm9jY29cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTW9yb2Njb1wiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjogNTUsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTmlnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOaWdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJpZFwiOiA1NixcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm5pXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTRSBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU0UgQWZyaWNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOiA1NyxcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU2FoYXJhIFNcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzc1wiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDU4LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU29tYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTb21hbGlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNTksXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTb3V0aCBBZlwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjAsXG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTdWRhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTdWRhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDYxLFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzdVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUdW5pc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlR1bmlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MixcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInR1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJXZXN0IEFmXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjMsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ3ZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIndcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiWmFpcmVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiWmFpcmVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlppbWJhYndlXCIsXG4gICAgICBcImlkXCI6IDY0LFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiemFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ6YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDY1LFxuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiemlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ6aVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDb3N0YSBSaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNvc3RhIFJcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkhvbmR1cmFzLE5pY2FyYWd1YSxQYW5hbWFcIixcbiAgICAgIFwiaWRcIjogNjYsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkN1YmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ3ViYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSGFpdGksTmljYXJhZ3VhXCIsXG4gICAgICBcImlkXCI6IDY3LFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY3VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjdVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJEb21pbmljYW4gUmVwXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkRvbWluaWMgUlwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSGFpdGlcIixcbiAgICAgIFwiaWRcIjogNjgsXG4gICAgICBcInhcIjogMjgwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJkb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRWwgU2FsdmFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRWwgU2FsdmFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkhvbmR1cmFzLEd1YXRlbWFsYVwiLFxuICAgICAgXCJpZFwiOiA2OSxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWxcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJHdWF0ZW1hbGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkhvbmR1cmFzLE1leGljb1wiLFxuICAgICAgXCJpZFwiOiA3MCxcbiAgICAgIFwieFwiOiAxMjAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImd1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIYWl0aVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJIYWl0aVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDcxLFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJoYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIb25kdXJhc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJIb25kdXJhc1wiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTmljYXJhZ3VhXCIsXG4gICAgICBcImlkXCI6IDcyLFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaG9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJob1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNZXhpY29cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTWV4aWNvXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNzMsXG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1lXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJOaWNhcmFndWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTmljYXJhZ3VhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNzQsXG4gICAgICBcInhcIjogMjAwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJuaVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGFuYW1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBhbmFtYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQ29sdW1iaWFcIixcbiAgICAgIFwiaWRcIjogNzUsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQXJnZW50aW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFyZ2VudGluYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQ2hpbGUsUGFyYWd1YXksVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOiA3NixcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNjQwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCb2xpdmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJvbGl2aWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBhcmFndWF5LFBlcnVcIixcbiAgICAgIFwiaWRcIjogNzcsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDUxMixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJib1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJyYXppbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCcmF6aWxcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVydWd1YXksVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6IDc4LFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYnJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJiclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDaGlsZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDaGlsZVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGVydVwiLFxuICAgICAgXCJpZFwiOiA3OSxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY2hcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDb2x1bWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDb2x1bWJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiRWN1YWRvcixWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjogODAsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDQ0OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVjdWFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRWN1YWRvclwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGVydVwiLFxuICAgICAgXCJpZFwiOiA4MSxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWNcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBhcmFndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBhcmFndWF5XCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJVcnVndWF5XCIsXG4gICAgICBcImlkXCI6IDgyLFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA1NzYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQZXJ1XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBlcnVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA4MyxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicGVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVcnVndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlVydWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA4NCxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInVyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJWZW5lenVlbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVmVuZXp1ZWxhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogODUsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ2ZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInZcIlxuICAgIH1cbiAgXSxcbiAgXCJyZWdpb25JbmZvTm9kZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRcIjogXCJldVwiLFxuICAgICAgXCJncm91cFwiOiBcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcIm5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRXVyb3BlXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZVwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICBcIldcIlxuICAgICAgXSxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogNSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcIm1lXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibVwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA3XG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogNixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcImFzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwibmFtZVwiOiBcIkFzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgOVxuICAgICAgXSxcbiAgICAgIFwiZXh0cmFcIjogXCIxIHBlciBTRSBjb3VudHJ5LCAyIGZvciBUaGFpbGFuZFwiLFxuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA2LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYWZcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFmcmljYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImZcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgNlxuICAgICAgXSxcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogNSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcImNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwibmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDVcbiAgICAgIF0sXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJzYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcIm5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic1wiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICA2XG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfVxuICBdLFxuICBcImxpbmtzXCI6IFtcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAwLFxuICAgICAgXCJ0YXJnZXRcIjogNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkNhbmFkYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAwLFxuICAgICAgXCJ0YXJnZXRcIjogNjcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDdWJhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiA3MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAwLFxuICAgICAgXCJ0YXJnZXRcIjogMzgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJKYXBhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogMzMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiRmlubGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogNDEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiTiBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogMTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiAxNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJSb21hbmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIsXG4gICAgICBcInRhcmdldFwiOiA4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDEyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIsXG4gICAgICBcInRhcmdldFwiOiAxMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMyxcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQmVuZWx1eFwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMyxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQmVuZWx1eFwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0LFxuICAgICAgXCJ0YXJnZXRcIjogMTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNCxcbiAgICAgIFwidGFyZ2V0XCI6IDExLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJHcmVlY2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUsXG4gICAgICBcInRhcmdldFwiOiAyMCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNhbmFkYVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2LFxuICAgICAgXCJ0YXJnZXRcIjogMTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNixcbiAgICAgIFwidGFyZ2V0XCI6IDgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNixcbiAgICAgIFwidGFyZ2V0XCI6IDEyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJIdW5nYXJ5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3LFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3LFxuICAgICAgXCJ0YXJnZXRcIjogMTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4LFxuICAgICAgXCJ0YXJnZXRcIjogMTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFIEdlcm1hbnlcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogOSxcbiAgICAgIFwidGFyZ2V0XCI6IDE4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRmlubGFuZFwiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiA0OCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkFsZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiAyMCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDEzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMTcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJTcGFpblxcL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMSxcbiAgICAgIFwidGFyZ2V0XCI6IDEzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDExLFxuICAgICAgXCJ0YXJnZXRcIjogMjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMSxcbiAgICAgIFwidGFyZ2V0XCI6IDE5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMixcbiAgICAgIFwidGFyZ2V0XCI6IDE2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEyLFxuICAgICAgXCJ0YXJnZXRcIjogMjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTMsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTMsXG4gICAgICBcInRhcmdldFwiOiAxNyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiU3BhaW5cXC9Qb3J0dWdhbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTQsXG4gICAgICBcInRhcmdldFwiOiAyMCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNCxcbiAgICAgIFwidGFyZ2V0XCI6IDE4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNixcbiAgICAgIFwidGFyZ2V0XCI6IDE5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTYsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNyxcbiAgICAgIFwidGFyZ2V0XCI6IDU1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiU3BhaW5cXC9Qb3J0dWdhbFwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTksXG4gICAgICBcInRhcmdldFwiOiAzMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlR1cmtleVwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIzLFxuICAgICAgXCJ0YXJnZXRcIjogMjcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIklzcmFlbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjMsXG4gICAgICBcInRhcmdldFwiOiAzMCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiTGlieWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIzLFxuICAgICAgXCJ0YXJnZXRcIjogNjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI0LFxuICAgICAgXCJ0YXJnZXRcIjogMjYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI0LFxuICAgICAgXCJ0YXJnZXRcIjogMzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjUsXG4gICAgICBcInRhcmdldFwiOiAyNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNSxcbiAgICAgIFwidGFyZ2V0XCI6IDMzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIkFmZ2hhbmlzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI1LFxuICAgICAgXCJ0YXJnZXRcIjogNDIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjYsXG4gICAgICBcInRhcmdldFwiOiAzMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI2LFxuICAgICAgXCJ0YXJnZXRcIjogMjgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFxXCIsXG4gICAgICAgIFwiSm9yZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNyxcbiAgICAgIFwidGFyZ2V0XCI6IDI4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiSm9yZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNyxcbiAgICAgIFwidGFyZ2V0XCI6IDI5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjcsXG4gICAgICBcInRhcmdldFwiOiAzMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyOCxcbiAgICAgIFwidGFyZ2V0XCI6IDMxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyOCxcbiAgICAgIFwidGFyZ2V0XCI6IDI5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjksXG4gICAgICBcInRhcmdldFwiOiAzMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkxlYmFub25cIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzAsXG4gICAgICBcInRhcmdldFwiOiA2MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkxpYnlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzMyxcbiAgICAgIFwidGFyZ2V0XCI6IDQyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzQsXG4gICAgICBcInRhcmdldFwiOiA0MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkF1c3RyYWxpYVwiLFxuICAgICAgICBcIk1hbGF5c2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNSxcbiAgICAgIFwidGFyZ2V0XCI6IDM2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJJbmRpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzUsXG4gICAgICBcInRhcmdldFwiOiAzOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiTGFvc1xcL0NhbWJvZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNixcbiAgICAgIFwidGFyZ2V0XCI6IDQyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSW5kaWFcIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzcsXG4gICAgICBcInRhcmdldFwiOiA0MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIk1hbGF5c2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNyxcbiAgICAgIFwidGFyZ2V0XCI6IDQzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiUGhpbGxpcHBpbmVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOCxcbiAgICAgIFwidGFyZ2V0XCI6IDQzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM4LFxuICAgICAgXCJ0YXJnZXRcIjogNDQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlMgS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM4LFxuICAgICAgXCJ0YXJnZXRcIjogNDUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzksXG4gICAgICBcInRhcmdldFwiOiA0NixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkxhb3NcXC9DYW1ib2RpYVwiLFxuICAgICAgICBcIlRoYWlsYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOSxcbiAgICAgIFwidGFyZ2V0XCI6IDQ3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGFvc1xcL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDAsXG4gICAgICBcInRhcmdldFwiOiA0NixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk1hbGF5c2lhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQxLFxuICAgICAgXCJ0YXJnZXRcIjogNDQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOIEtvcmVhXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDQsXG4gICAgICBcInRhcmdldFwiOiA0NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlMgS29yZWFcIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ2LFxuICAgICAgXCJ0YXJnZXRcIjogNDcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJUaGFpbGFuZFwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ4LFxuICAgICAgXCJ0YXJnZXRcIjogNTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiTW9yb2Njb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDgsXG4gICAgICBcInRhcmdldFwiOiA2MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OCxcbiAgICAgIFwidGFyZ2V0XCI6IDU4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OSxcbiAgICAgIFwidGFyZ2V0XCI6IDUwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiQm90c3dhbmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ5LFxuICAgICAgXCJ0YXJnZXRcIjogNjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ5LFxuICAgICAgXCJ0YXJnZXRcIjogNjQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTAsXG4gICAgICBcInRhcmdldFwiOiA2MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJvdHN3YW5hXCIsXG4gICAgICAgIFwiU291dGggQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MCxcbiAgICAgIFwidGFyZ2V0XCI6IDY1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTEsXG4gICAgICBcInRhcmdldFwiOiA1NixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTEsXG4gICAgICBcInRhcmdldFwiOiA2NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiWmFpcmVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUyLFxuICAgICAgXCJ0YXJnZXRcIjogNjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MixcbiAgICAgIFwidGFyZ2V0XCI6IDU5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MyxcbiAgICAgIFwidGFyZ2V0XCI6IDYzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXZvcnkgQ29hc3RcIixcbiAgICAgICAgXCJXZXN0IEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTMsXG4gICAgICBcInRhcmdldFwiOiA1NixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTQsXG4gICAgICBcInRhcmdldFwiOiA1OSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiU29tYWxpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTQsXG4gICAgICBcInRhcmdldFwiOiA1NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiU0UgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NSxcbiAgICAgIFwidGFyZ2V0XCI6IDYzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTW9yb2Njb1wiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NixcbiAgICAgIFwidGFyZ2V0XCI6IDU4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTmlnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NyxcbiAgICAgIFwidGFyZ2V0XCI6IDY1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiU0UgQWZyaWNhXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY0LFxuICAgICAgXCJ0YXJnZXRcIjogNjUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJaYWlyZVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NixcbiAgICAgIFwidGFyZ2V0XCI6IDcyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NixcbiAgICAgIFwidGFyZ2V0XCI6IDc0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjYsXG4gICAgICBcInRhcmdldFwiOiA3NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJQYW5hbWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY3LFxuICAgICAgXCJ0YXJnZXRcIjogNzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDdWJhXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY3LFxuICAgICAgXCJ0YXJnZXRcIjogNzQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDdWJhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2OCxcbiAgICAgIFwidGFyZ2V0XCI6IDcxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgICBcIkhhaXRpXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2OSxcbiAgICAgIFwidGFyZ2V0XCI6IDcyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjksXG4gICAgICBcInRhcmdldFwiOiA3MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVsIFNhbHZhZG9yXCIsXG4gICAgICAgIFwiR3VhdGVtYWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3MCxcbiAgICAgIFwidGFyZ2V0XCI6IDcyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcwLFxuICAgICAgXCJ0YXJnZXRcIjogNzMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcyLFxuICAgICAgXCJ0YXJnZXRcIjogNzQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJIb25kdXJhc1wiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzUsXG4gICAgICBcInRhcmdldFwiOiA4MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlBhbmFtYVwiLFxuICAgICAgICBcIkNvbHVtYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc2LFxuICAgICAgXCJ0YXJnZXRcIjogNzksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJDaGlsZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzYsXG4gICAgICBcInRhcmdldFwiOiA4MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NixcbiAgICAgIFwidGFyZ2V0XCI6IDg0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzcsXG4gICAgICBcInRhcmdldFwiOiA4MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJvbGl2aWFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzcsXG4gICAgICBcInRhcmdldFwiOiA4MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJvbGl2aWFcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3OCxcbiAgICAgIFwidGFyZ2V0XCI6IDg0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzgsXG4gICAgICBcInRhcmdldFwiOiA4NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlZlbmV6dWVsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzksXG4gICAgICBcInRhcmdldFwiOiA4MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNoaWxlXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogODAsXG4gICAgICBcInRhcmdldFwiOiA4MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiRWN1YWRvclwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogODAsXG4gICAgICBcInRhcmdldFwiOiA4NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MSxcbiAgICAgIFwidGFyZ2V0XCI6IDgzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWN1YWRvclwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgyLFxuICAgICAgXCJ0YXJnZXRcIjogODQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJQYXJhZ3VheVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9XG4gIF0sXG4gIFwiY291bnRyeVNob3J0Y3V0c1wiOiB7XG4gICAgXCJlXCI6IFtcbiAgICAgIFwiYXVcIixcbiAgICAgIFwiYmVcIixcbiAgICAgIFwiYnVcIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiY3pcIixcbiAgICAgIFwiZGVcIixcbiAgICAgIFwiZWdcIixcbiAgICAgIFwiZmlcIixcbiAgICAgIFwiZnJcIixcbiAgICAgIFwiZ3JcIixcbiAgICAgIFwiaHVcIixcbiAgICAgIFwiaXRcIixcbiAgICAgIFwibm9cIixcbiAgICAgIFwicG9cIixcbiAgICAgIFwicm9cIixcbiAgICAgIFwic3BcIixcbiAgICAgIFwic3dcIixcbiAgICAgIFwidHVcIixcbiAgICAgIFwidWtcIixcbiAgICAgIFwid2dcIixcbiAgICAgIFwieXVcIlxuICAgIF0sXG4gICAgXCJtXCI6IFtcbiAgICAgIFwiZWdcIixcbiAgICAgIFwiZ3VcIixcbiAgICAgIFwiaW5cIixcbiAgICAgIFwiaXFcIixcbiAgICAgIFwiaXNcIixcbiAgICAgIFwiam9cIixcbiAgICAgIFwibGVcIixcbiAgICAgIFwibGlcIixcbiAgICAgIFwic2FcIixcbiAgICAgIFwic3lcIlxuICAgIF0sXG4gICAgXCJhXCI6IFtcbiAgICAgIFwiYWZcIixcbiAgICAgIFwiYXVcIixcbiAgICAgIFwiYnVcIixcbiAgICAgIFwiaWRcIixcbiAgICAgIFwiaXNcIixcbiAgICAgIFwiamFcIixcbiAgICAgIFwibGFcIixcbiAgICAgIFwibWFcIixcbiAgICAgIFwibmtcIixcbiAgICAgIFwicGFcIixcbiAgICAgIFwicGhcIixcbiAgICAgIFwic2tcIixcbiAgICAgIFwidGFcIixcbiAgICAgIFwidGhcIixcbiAgICAgIFwidmlcIlxuICAgIF0sXG4gICAgXCJmXCI6IFtcbiAgICAgIFwiYWxcIixcbiAgICAgIFwiYW5cIixcbiAgICAgIFwiYm9cIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiZXRcIixcbiAgICAgIFwiaXZcIixcbiAgICAgIFwia2VcIixcbiAgICAgIFwibW9cIixcbiAgICAgIFwibmlcIixcbiAgICAgIFwic2VcIixcbiAgICAgIFwic3NcIixcbiAgICAgIFwic29cIixcbiAgICAgIFwic2FcIixcbiAgICAgIFwic3VcIixcbiAgICAgIFwidHVcIixcbiAgICAgIFwid2VcIixcbiAgICAgIFwiemFcIixcbiAgICAgIFwiemlcIlxuICAgIF0sXG4gICAgXCJjXCI6IFtcbiAgICAgIFwiY29cIixcbiAgICAgIFwiY3VcIixcbiAgICAgIFwiZG9cIixcbiAgICAgIFwiZWxcIixcbiAgICAgIFwiZ3VcIixcbiAgICAgIFwiaGFcIixcbiAgICAgIFwiaG9cIixcbiAgICAgIFwibWVcIixcbiAgICAgIFwibmlcIixcbiAgICAgIFwicGFcIlxuICAgIF0sXG4gICAgXCJzXCI6IFtcbiAgICAgIFwiYXJcIixcbiAgICAgIFwiYm9cIixcbiAgICAgIFwiYnJcIixcbiAgICAgIFwiY2hcIixcbiAgICAgIFwiY29cIixcbiAgICAgIFwiZWNcIixcbiAgICAgIFwicGFcIixcbiAgICAgIFwicGVcIixcbiAgICAgIFwidXJcIixcbiAgICAgIFwidmVcIlxuICAgIF1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9W1xyICB7XHIgICAgXCJpZFwiOjEsXHIgICAgXCJ0aXRsZVwiOlwiQXNpYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDc7IENvbnRyb2w6IDk7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTQvcmVnaW9ucy1hc2lhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIsXHIgICAgXCJ0aXRsZVwiOlwiRXVyb3BlIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNzsgQ29udHJvbDogQXV0b21hdGljIFZpY3Rvcnk7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvcmVnaW9ucy1ldXJvcGUvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MyxcciAgICBcInRpdGxlXCI6XCJNaWRkbGUgRWFzdCBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDU7IENvbnRyb2w6IDc7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8xMy9yZWdpb25zLW1pZGRsZS1lYXN0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQsXHIgICAgXCJ0aXRsZVwiOlwiRHVjayBhbmQgQ292ZXJcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMS4gVGhlIFVTIHJlY2VpdmVzIFZQIGVxdWFsIHRvIDUgbWludXMgdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9kdWNrLWFuZC1jb3Zlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NSxcciAgICBcInRpdGxlXCI6XCJGaXZlIFllYXIgUGxhblwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG11c3QgcmFuZG9tbHkgZGlzY2FyZCBhIGNhcmQuIElmIHRoZSBjYXJkIGhhcyBhIFVTIGFzc29jaWF0ZWQgRXZlbnQsIHRoZSBFdmVudCBvY2N1cnMgaW1tZWRpYXRlbHkuIElmIHRoZSBjYXJkIGhhcyBhIFVTU1IgYXNzb2NpYXRlZCBFdmVudCBvciBhbiBFdmVudCBhcHBsaWNhYmxlIHRvIGJvdGggcGxheWVycywgdGhlbiB0aGUgY2FyZCBtdXN0IGJlIGRpc2NhcmRlZCB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9maXZlLXllYXItcGxhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NixcciAgICBcInRpdGxlXCI6XCJUaGUgQ2hpbmEgQ2FyZFwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoaXMgY2FyZCBiZWdpbnMgdGhlIGdhbWUgd2l0aCB0aGUgVVNTUi4gV2hlbiBwbGF5ZWQsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgKzEgT3BlcmF0aW9ucyB0byB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgaWYgaXQgdXNlcyBhbGwgaXRzIE9wZXJhdGlvbnMgaW4gQXNpYS4gSXQgaXMgcGFzc2VkIHRvIHRoZSBvcHBvbmVudCBvbmNlIHBsYXllZC4gQSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBmb3IgaG9sZGluZyB0aGlzIGNhcmQgYXQgdGhlIGVuZCBvZiBUdXJuIDEwLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8zMS90aGUtY2hpbmEtY2FyZC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJjYW5jZWxzXCI6IDM1XHIgIH0sXHIgIHtcciAgICBcImlkXCI6NyxcciAgICBcInRpdGxlXCI6XCJTb2NpYWxpc3QgR292ZXJubWVudHNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiAzIFVTIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM4MyDigJMgVGhlIElyb24gTGFkeeKAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEzL3NvY2lhbGlzdC1nb3Zlcm5tZW50cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhbnRpcmVxXCI6IDgzXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OCxcciAgICBcInRpdGxlXCI6XCJGaWRlbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIEN1YmEuIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSBpbiBDdWJhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9maWRlbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjksXHIgICAgXCJ0aXRsZVwiOlwiVmlldG5hbSBSZXZvbHRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIFZpZXRuYW0uIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIGEgY2FyZCB0aGF0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNi92aWV0bmFtLXJldm9sdHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMCxcciAgICBcInRpdGxlXCI6XCJCbG9ja2FkZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJVbmxlc3MgdGhlIFVTIGltbWVkaWF0ZWx5IGRpc2NhcmRzIGEgY2FyZCB3aXRoIGFuIE9wZXJhdGlvbnMgdmFsdWUgb2YgMyBvciBtb3JlLCByZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTkvYmxvY2thZGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMSxcciAgICBcInRpdGxlXCI6XCJLb3JlYW4gV2FyKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIk5vcnRoIEtvcmVhIGludmFkZXMgU291dGggS29yZWEuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBTb3V0aCBLb3JlYS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCBVUyBJbmZsdWVuY2UgaW4gU291dGggS29yZWEgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8yNS9rb3JlYW4td2FyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWZmZWN0c1wiOiA1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEyLFxyICAgIFwidGl0bGVcIjpcIlJvbWFuaWFuIEFiZGljYXRpb24qXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBSb21hbmlhLiBUaGUgVVNTUiBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIHRvIFJvbWFuaWEgZm9yIENvbnRyb2wuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzAyL3JvbWFuaWFuLWFiZGljYXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMyxcciAgICBcInRpdGxlXCI6XCJBcmFiLUlzcmFlbGkgV2FyXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUGFuLUFyYWIgQ29hbGl0aW9uIGludmFkZXMgSXNyYWVsLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBJc3JhZWwsIGlmIGl0IGlzIFVTIGNvbnRyb2xsZWQsIGFuZCBmb3IgZXZlcnkgVVMgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIElzcmFlbC4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCBVUyBJbmZsdWVuY2UgaW4gSXNyYWVsIHdpdGggVVNTUiBJbmZsdWVuY2UuIFRoZSBVU1NSIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzY1IOKAkyBDYW1wIERhdmlkIEFjY29yZHPigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8xNi9hcmFiLWlzcmFlbGktd2FyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNCxcciAgICBcInRpdGxlXCI6XCJDb21lY29uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGVhY2ggb2YgNCBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgb2YgRWFzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzI0L2NvbWVjb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNSxcciAgICBcInRpdGxlXCI6XCJOYXNzZXIqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gRWd5cHQuIFRoZSBVUyByZW1vdmVzIGhhbGYsIHJvdW5kZWQgdXAsIG9mIGl0cyBJbmZsdWVuY2UgZnJvbSBFZ3lwdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMDYvbmFzc2VyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTYsXHIgICAgXCJ0aXRsZVwiOlwiV2Fyc2F3IFBhY3QgRm9ybWVkKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgaW5mbHVlbmNlIGZyb20gNCBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgb3IgYWRkIDUgVVNTUiBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzIwL3dhcnNhdy1wYWN0LWZvcm1lZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWxsb3dzXCI6IDIxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTcsXHIgICAgXCJ0aXRsZVwiOlwiRGUgR2F1bGxlIExlYWRzIEZyYW5jZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgMiBVUyBJbmZsdWVuY2UgZnJvbSBGcmFuY2UgYW5kIGFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIEZyYW5jZS4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBFdmVudCBmb3IgRnJhbmNlIG9ubHkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzI0L2RlLWdhdWxsZS1sZWFkcy1mcmFuY2UvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFmZmVjdHNcIjogMjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxOCxcciAgICBcInRpdGxlXCI6XCJDYXB0dXJlZCBOYXppIFNjaWVudGlzdCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJNb3ZlIHRoZSBTcGFjZSBSYWNlIE1hcmtlciBhaGVhZCBieSAxIHNwYWNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yNy9jYXB0dXJlZC1uYXppLXNjaWVudGlzdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE5LFxyICAgIFwidGl0bGVcIjpcIlRydW1hbiBEb2N0cmluZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gYSBzaW5nbGUgdW5jb250cm9sbGVkIGNvdW50cnkgaW4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8wMi90cnVtYW4tZG9jdHJpbmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjAsXHIgICAgXCJ0aXRsZVwiOlwiT2x5bXBpYyBHYW1lc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoaXMgcGxheWVyIHNwb25zb3JzIHRoZSBPbHltcGljcy4gVGhlIG9wcG9uZW50IG11c3QgZWl0aGVyIHBhcnRpY2lwYXRlIG9yIGJveWNvdHQuIElmIHRoZSBvcHBvbmVudCBwYXJ0aWNpcGF0ZXMsIGVhY2ggcGxheWVyIHJvbGxzIGEgZGllIGFuZCB0aGUgc3BvbnNvciBhZGRzIDIgdG8gdGhlaXIgcm9sbC4gVGhlIHBsYXllciB3aXRoIHRoZSBoaWdoZXN0IG1vZGlmaWVkIGRpZSByb2xsIHJlY2VpdmVzIDIgVlAgKHJlcm9sbCB0aWVzKS4gSWYgdGhlIG9wcG9uZW50IGJveWNvdHRzLCBkZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIHNwb25zb3IgbWF5IGNvbmR1Y3QgT3BlcmF0aW9ucyBhcyBpZiB0aGV5IHBsYXllZCBhIDQgT3BzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEyL29seW1waWMtZ2FtZXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjEsXHIgICAgXCJ0aXRsZVwiOlwiTkFUTypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBjYW5ub3QgbWFrZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGFnYWluc3QgYW55IFVTIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIEV1cm9wZS4gVVMgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gRXVyb3BlIGNhbm5vdCBiZSBhdHRhY2tlZCBieSBwbGF5IG9mIHRoZSDigJwjMzYg4oCTIEJydXNoIFdhcuKAnSBFdmVudC4gVGhpcyBjYXJkIHJlcXVpcmVzIHByaW9yIHBsYXkgb2YgZWl0aGVyIHRoZSDigJwjMTYg4oCTIFdhcnNhdyBQYWN0IEZvcm1lZOKAnSBvciDigJwjMjMg4oCTIE1hcnNoYWxsIFBsYW7igJ0gRXZlbnQocykgaW4gb3JkZXIgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMi9uYXRvL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwicHJlcmVxXCI6WzE2LDIzXSxcciAgICBcImFmZmVjdHNcIjozNlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIyLFxyICAgIFwidGl0bGVcIjpcIkluZGVwZW5kZW50IFJlZHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIFVTIEluZmx1ZW5jZSB0byBlaXRoZXIgWXVnb3NsYXZpYSwgUm9tYW5pYSwgQnVsZ2FyaWEsIEh1bmdhcnksIG9yIEN6ZWNob3Nsb3Zha2lhIHNvIHRoYXQgaXQgZXF1YWxzIHRoZSBVU1NSIEluZmx1ZW5jZSBpbiB0aGF0IGNvdW50cnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEzL2luZGVwZW5kZW50LXJlZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjMsXHIgICAgXCJ0aXRsZVwiOlwiTWFyc2hhbGwgUGxhbipcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNyBub24tVVNTUiBjb250cm9sbGVkIGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZS4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTYvbWFyc2hhbGwtcGxhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFsbG93c1wiOjIxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjQsXHIgICAgXCJ0aXRsZVwiOlwiSW5kby1QYWtpc3RhbmkgV2FyXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSW5kaWEgaW52YWRlcyBQYWtpc3RhbiBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSW5kaWEgb3IgUGFraXN0YW4pLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIHBsYXllciByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTkvaW5kby1wYWtpc3Rhbmktd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNSxcciAgICBcInRpdGxlXCI6XCJDb250YWlubWVudCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIFVTLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtYXhpbXVtIG9mIDQgT3BlcmF0aW9ucyBwZXIgY2FyZCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzIwL2NvbnRhaW5tZW50L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI2LFxyICAgIFwidGl0bGVcIjpcIkNJQSBDcmVhdGVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcyBmb3IgdGhpcyB0dXJuLiBUaGUgVVMgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNi9jaWEtY3JlYXRlZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNyxcciAgICBcInRpdGxlXCI6XCJVUy9KYXBhbiBNdXR1YWwgRGVmZW5zZSBQYWN0KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVUyBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIHRvIEphcGFuIGZvciBDb250cm9sLiBUaGUgVVNTUiBjYW5ub3QgbWFrZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGFnYWluc3QgSmFwYW4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI3L3VzamFwYW4tbXV0dWFsLWRlZmVuc2UtcGFjdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI4LFxyICAgIFwidGl0bGVcIjpcIlN1ZXogQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhIHRvdGFsIG9mIDQgVVMgSW5mbHVlbmNlIGZyb20gRnJhbmNlLCB0aGUgVW5pdGVkIEtpbmdkb20gYW5kIElzcmFlbCAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjkvc3Vlei1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOSxcciAgICBcInRpdGxlXCI6XCJFYXN0IEV1cm9wZWFuIFVucmVzdFwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkVhcmx5IG9yIE1pZCBXYXI6IFJlbW92ZSAxIFVTU1IgSW5mbHVlbmNlIGZyb20gMyBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUuIExhdGUgV2FyOiBSZW1vdmUgMiBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8wMi9lYXN0LWV1cm9wZWFuLXVucmVzdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzAsXHIgICAgXCJ0aXRsZVwiOlwiRGVjb2xvbml6YXRpb25cIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA0IGNvdW50cmllcyBpbiBBZnJpY2EgYW5kL29yIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8wNS9kZWNvbG9uaXphdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMSxcciAgICBcInRpdGxlXCI6XCJSZWQgU2NhcmUvUHVyZ2VcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIG9wcG9uZW50LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtaW5pbXVtIHZhbHVlIG9mIDEgT3BlcmF0aW9ucyBwb2ludCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzIzL3JlZC1zY2FyZXB1cmdlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMyLFxyICAgIFwidGl0bGVcIjpcIlVOIEludGVydmVudGlvblwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlBsYXkgdGhpcyBjYXJkIHNpbXVsdGFuZW91c2x5IHdpdGggYSBjYXJkIGNvbnRhaW5pbmcgYW4gb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQuIFRoZSBvcHBvbmVudOKAmXMgYXNzb2NpYXRlZCBFdmVudCBpcyBjYW5jZWxlZCBidXQgeW91IG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhlIG9wcG9uZW504oCZcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy4gVGhpcyBFdmVudCBjYW5ub3QgYmUgcGxheWVkIGR1cmluZyB0aGUgSGVhZGxpbmUgUGhhc2UuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA1LzA3L3VuLWludGVydmVudGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMyxcciAgICBcInRpdGxlXCI6XCJEZS1TdGFsaW5pemF0aW9uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG1heSByZWFsbG9jYXRlIHVwIHRvIGEgdG90YWwgb2YgNCBJbmZsdWVuY2UgZnJvbSBvbmUgb3IgbW9yZSBjb3VudHJpZXMgdG8gYW55IG5vbi1VUyBjb250cm9sbGVkIGNvdW50cmllcyAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA1LzI5L2RlLXN0YWxpbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNCxcciAgICBcInRpdGxlXCI6XCJOdWNsZWFyIFRlc3QgQmFuXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllciByZWNlaXZlcyBWUCBlcXVhbCB0byB0aGUgY3VycmVudCBERUZDT04gbGV2ZWwgbWludXMgMiB0aGVuIGltcHJvdmVzIHRoZSBERUZDT04gbGV2ZWwgYnkgMi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDYvMTEvbnVjbGVhci10ZXN0LWJhbi9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNSxcciAgICBcInRpdGxlXCI6XCJGb3Jtb3NhbiBSZXNvbHV0aW9uKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoaXMgY2FyZOKAmXMgRXZlbnQgaXMgaW4gZWZmZWN0LCBUYWl3YW4gd2lsbCBiZSB0cmVhdGVkIGFzIGEgQmF0dGxlZ3JvdW5kIGNvdW50cnksIGZvciBzY29yaW5nIHB1cnBvc2VzIG9ubHksIGlmIFRhaXdhbiBpcyBVUyBjb250cm9sbGVkIHdoZW4gdGhlIEFzaWEgU2NvcmluZyBDYXJkIGlzIHBsYXllZC4gVGhpcyBFdmVudCBpcyBjYW5jZWxsZWQgYWZ0ZXIgdGhlIFVTIGhhcyBwbGF5ZWQgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8wMi9mb3Jtb3Nhbi1yZXNvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzYsXHIgICAgXCJ0aXRsZVwiOlwiQnJ1c2ggV2FyXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllciBhdHRhY2tzIGFueSBjb3VudHJ5IHdpdGggYSBzdGFiaWxpdHkgbnVtYmVyIG9mIDEgb3IgMi4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgYWRqYWNlbnQgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5LiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDMtNiwgdGhlIHBsYXllciByZWNlaXZlcyAxIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMyB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvYnJ1c2gtd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MixcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjozNyxcciAgICBcInRpdGxlXCI6XCJDZW50cmFsIEFtZXJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAxOyBEb21pbmF0aW9uOiAzOyBDb250cm9sOiA1OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtY2VudHJhbC1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM4LFxyICAgIFwidGl0bGVcIjpcIlNvdXRoZWFzdCBBc2lhIFNjb3JpbmcqXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiMSBWUCBlYWNoIGZvciBDb250cm9sIG9mIEJ1cm1hLCBDYW1ib2RpYS9MYW9zLCBWaWV0bmFtLCBNYWxheXNpYSwgSW5kb25lc2lhIGFuZCB0aGUgUGhpbGlwcGluZXMuIDIgVlAgZm9yIENvbnRyb2wgb2YgVGhhaWxhbmQ7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvcmVnaW9ucy1zb3V0aGVhc3QtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM5LFxyICAgIFwidGl0bGVcIjpcIkFybXMgUmFjZVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkNvbXBhcmUgZWFjaCBwbGF5ZXLigJlzIHZhbHVlIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDEgVlAuIElmIHRoZSBwaGFzaW5nIHBsYXllciBoYXMgYSBoaWdoZXIgdmFsdWUgdGhhbiB0aGVpciBvcHBvbmVudCwgYW5kIGhhcyBtZXQgdGhlIOKAnHJlcXVpcmVk4oCdIGFtb3VudCwgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDMgVlAgaW5zdGVhZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDUvYXJtcy1yYWNlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQwLFxyICAgIFwidGl0bGVcIjpcIkN1YmFuIE1pc3NpbGUgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIDIuIEFueSBDb3VwIEF0dGVtcHRzIGJ5IHlvdXIgb3Bwb25lbnQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgd2lsbCByZXN1bHQgaW4gR2xvYmFsIFRoZXJtb251Y2xlYXIgV2FyLiBZb3VyIG9wcG9uZW50IHdpbGwgbG9zZSB0aGUgZ2FtZS4gVGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgYmUgY2FuY2VsZWQsIGF0IGFueSB0aW1lLCBpZiB0aGUgVVNTUiByZW1vdmVzIDIgSW5mbHVlbmNlIGZyb20gQ3ViYSBvciB0aGUgVVMgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueSBvciBUdXJrZXkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA2L2N1YmFuLW1pc3NpbGUtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDEsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBTdWJzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlVTIE9wZXJhdGlvbnMgdXNlZCBmb3IgQ291cCBBdHRlbXB0cyBpbiBCYXR0bGVncm91bmQgY291bnRyaWVzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIGRvIG5vdCBkZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwuIFRoaXMgY2FyZOKAmXMgRXZlbnQgZG9lcyBub3QgYXBwbHkgdG8gYW55IEV2ZW50IHRoYXQgd291bGQgYWZmZWN0IHRoZSBERUZDT04gbGV2ZWwgKGV4LiB0aGUg4oCcIzQwIOKAkyBDdWJhbiBNaXNzaWxlIENyaXNpc+KAnSBFdmVudCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEwL251Y2xlYXItc3Vicy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MixcciAgICBcInRpdGxlXCI6XCJRdWFnbWlyZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVUyBhY3Rpb24gcm91bmQgdW50aWwgdGhlIFVTIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVUyBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMTA2IOKAkyBOT1JBROKAnSBFdmVudCAoaWYgYXBwbGljYWJsZSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEyL3F1YWdtaXJlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MyxcciAgICBcInRpdGxlXCI6XCJTQUxUIE5lZ290aWF0aW9ucypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMi4gRm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIGJvdGggcGxheWVycyByZWNlaXZlIC0xIHRvIGFsbCBDb3VwIEF0dGVtcHQgcm9sbHMuIFRoZSBwbGF5ZXIgb2YgdGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgbG9vayB0aHJvdWdoIHRoZSBkaXNjYXJkIHBpbGUsIHBpY2sgYW55IDEgbm9uLXNjb3JpbmcgY2FyZCwgcmV2ZWFsIGl0IHRvIHRoZWlyIG9wcG9uZW50IGFuZCB0aGVuIHBsYWNlIHRoZSBkcmF3biBjYXJkIGludG8gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTcvc2FsdC1uZWdvdGlhdGlvbnMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ0LFxyICAgIFwidGl0bGVcIjpcIkJlYXIgVHJhcCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVNTUuKAmXMgbmV4dCBhY3Rpb24gcm91bmQsIGl0IG11c3QgZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQgd2l0aCBhIHZhbHVlIG9mIDIgb3IgbW9yZSBhbmQgcm9sbCAxLTQgb24gYSBkaWUgdG8gY2FuY2VsIHRoaXMgRXZlbnQuIFJlcGVhdCB0aGlzIEV2ZW50IGZvciBlYWNoIFVTU1IgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVU1NSIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVU1NSIGlzIHVuYWJsZSB0byBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCwgaXQgbXVzdCBwbGF5IGFsbCBvZiBpdHMgc2NvcmluZyBjYXJkcyBhbmQgdGhlbiBza2lwIGVhY2ggYWN0aW9uIHJvdW5kIGZvciB0aGUgcmVzdCBvZiB0aGUgdHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTkvYmVhci10cmFwL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDUsXHIgICAgXCJ0aXRsZVwiOlwiU3VtbWl0XCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQm90aCBwbGF5ZXJzIHJvbGwgYSBkaWUuIEVhY2ggcGxheWVyIHJlY2VpdmVzICsxIHRvIHRoZSBkaWUgcm9sbCBmb3IgZWFjaCBSZWdpb24gKEV1cm9wZSwgQXNpYSwgZXRjLikgdGhleSBEb21pbmF0ZSBvciBDb250cm9sLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCBhbmQgbWF5IGRlZ3JhZGUgb3IgaW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgKGRvIG5vdCByZXJvbGwgdGllcykuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzI0L3N1bW1pdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NixcciAgICBcInRpdGxlXCI6XCJIb3cgSSBMZWFybmVkIHRvIFN0b3AgV29ycnlpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiU2V0IHRoZSBERUZDT04gbGV2ZWwgdG8gYW55IGxldmVsIGRlc2lyZWQgKDEtNSkuIFRoZSBwbGF5ZXIgYWRkcyA1IHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNi9ob3ctaS1sZWFybmVkLXRvLXN0b3Atd29ycnlpbmcvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NyxcciAgICBcInRpdGxlXCI6XCJKdW50YVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS4gVGhlIHBsYXllciBtYXkgbWFrZSBmcmVlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgaW4gZWl0aGVyIENlbnRyYWwgb3IgU291dGggQW1lcmljYSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAxL2p1bnRhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ4LFxyICAgIFwidGl0bGVcIjpcIktpdGNoZW4gRGViYXRlcypcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgY29udHJvbHMgbW9yZSBCYXR0bGVncm91bmQgY291bnRyaWVzIHRoYW4gdGhlIFVTU1IsIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIHBva2UgdGhlaXIgb3Bwb25lbnQgaW4gdGhlIGNoZXN0IGFuZCByZWNlaXZlIDIgVlAhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAzL2tpdGNoZW4tZGViYXRlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OSxcciAgICBcInRpdGxlXCI6XCJNaXNzaWxlIEVudnlcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJFeGNoYW5nZSB0aGlzIGNhcmQgZm9yIHlvdXIgb3Bwb25lbnTigJlzIGhpZ2hlc3QgdmFsdWUgT3BlcmF0aW9ucyBjYXJkLiBJZiAyIG9yIG1vcmUgY2FyZHMgYXJlIHRpZWQsIG9wcG9uZW50IGNob29zZXMuIElmIHRoZSBleGNoYW5nZWQgY2FyZCBjb250YWlucyBhbiBFdmVudCBhcHBsaWNhYmxlIHRvIHlvdXJzZWxmIG9yIGJvdGggcGxheWVycywgaXQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiBpdCBjb250YWlucyBhbiBvcHBvbmVudOKAmXMgRXZlbnQsIHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSAobm8gRXZlbnQpLiBUaGUgb3Bwb25lbnQgbXVzdCB1c2UgdGhpcyBjYXJkIGZvciBPcGVyYXRpb25zIGR1cmluZyB0aGVpciBuZXh0IGFjdGlvbiByb3VuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDgvbWlzc2lsZS1lbnZ5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUwLFxyICAgIFwidGl0bGVcIjpcIldlIFdpbGwgQnVyeSBZb3UqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFVubGVzcyB0aGUgIzMyIFVOIEludGVydmVudGlvbiBjYXJkIGlzIHBsYXllZCBhcyBhbiBFdmVudCBvbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCB0aGUgVVNTUiByZWNlaXZlcyAzIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMC93ZS13aWxsLWJ1cnkteW91L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTEsXHIgICAgXCJ0aXRsZVwiOlwiQnJlemhuZXYgRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVU1NSLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtYXhpbXVtIG9mIDQgT3BlcmF0aW9ucyBwZXIgY2FyZCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzEyL2JyZXpobmV2LWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTIsXHIgICAgXCJ0aXRsZVwiOlwiUG9ydHVndWVzZSBFbXBpcmUgQ3J1bWJsZXMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gQW5nb2xhIGFuZCB0aGUgU0UgQWZyaWNhbiBTdGF0ZXMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE1L3BvcnR1Z3Vlc2UtZW1waXJlLWNydW1ibGVzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTMsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQWZyaWNhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBlaXRoZXIgYWRkcyAyIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2Egb3IgYWRkcyAxIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2EgYW5kIDIgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggQWZyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNi9zb3V0aC1hZnJpY2FuLXVucmVzdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NCxcciAgICBcInRpdGxlXCI6XCJBbGxlbmRlKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIENoaWxlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNy9hbGxlbmRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTUsXHIgICAgXCJ0aXRsZVwiOlwiV2lsbHkgQnJhbmR0KlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gV2VzdCBHZXJtYW55LiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBXZXN0IEdlcm1hbnkgb25seS4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk2IOKAkyBUZWFyIERvd24gdGhpcyBXYWxs4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xOC93aWxseS1icmFuZHQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MixcciAgICBcImFudGlyZXFcIjo5NixcciAgICBcImFmZmVjdHNcIjoyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU2LFxyICAgIFwidGl0bGVcIjpcIk11c2xpbSBSZXZvbHV0aW9uXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSAyIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBTdWRhbiwgSXJhbiwgSXJhcSwgRWd5cHQsIExpYnlhLCBTYXVkaSBBcmFiaWEsIFN5cmlhLCBKb3JkYW4uIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCMxMTAg4oCTIEFXQUNTIFNhbGUgdG8gU2F1ZGlz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTkvbXVzbGltLXJldm9sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTcsXHIgICAgXCJ0aXRsZVwiOlwiQUJNIFRyZWF0eVwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGVuIGNvbmR1Y3QgT3BlcmF0aW9ucyB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzIzL2FibS10cmVhdHkvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTgsXHIgICAgXCJ0aXRsZVwiOlwiQ3VsdHVyYWwgUmV2b2x1dGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVNTUiAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIHRvIGJlIHBsYXllZCkuIElmIHRoZSBVU1NSIGFscmVhZHkgaGFzIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiByZWNlaXZlcyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNC9jdWx0dXJhbC1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTksXHIgICAgXCJ0aXRsZVwiOlwiRmxvd2VyIFBvd2VyKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgZm9yIGV2ZXJ5IFVTIHBsYXllZCDigJxXYXLigJ0gY2FyZCAoQXJhYi1Jc3JhZWxpIFdhciwgS29yZWFuIFdhciwgQnJ1c2ggV2FyLCBJbmRvLVBha2lzdGFuaSBXYXIsIElyYW4tSXJhcSBXYXIpLCB1c2VkIGZvciBPcGVyYXRpb25zIG9yIGFuIEV2ZW50LCBhZnRlciB0aGlzIGNhcmQgaXMgcGxheWVkLiBUaGlzIEV2ZW50IGlzIHByZXZlbnRlZCAvIGNhbmNlbGVkIGJ5IHRoZSDigJwjOTcg4oCTIEFuIEV2aWwgRW1waXJl4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNS9mbG93ZXItcG93ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MixcciAgICBcImFudGlyZXFcIjo5N1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjYwLFxyICAgIFwidGl0bGVcIjpcIlUyIEluY2lkZW50KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIElmIHRoZSDigJwjMzIg4oCTIFVOIEludGVydmVudGlvbuKAnSBFdmVudCBpcyBwbGF5ZWQgbGF0ZXIgdGhpcyB0dXJuLCBlaXRoZXIgYnkgdGhlIFVTIG9yIHRoZSBVU1NSLCB0aGUgVVNTUiByZWNlaXZlcyBhbiBhZGRpdGlvbmFsIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI2L3UtMi1pbmNpZGVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MixcciAgICBcInJlbGF0ZWRcIjozMlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYxLFxyICAgIFwidGl0bGVcIjpcIk9QRUNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBDb250cm9sIG9mIGVhY2ggb2YgdGhlIGZvbGxvd2luZyBjb3VudHJpZXM6IEVneXB0LCBJcmFuLCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBJcmFxLCBHdWxmIFN0YXRlcywgVmVuZXp1ZWxhLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODYg4oCTIE5vcnRoIFNlYSBPaWzigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yOS9vcGVjL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MixcciAgICBcImFudGlyZXFcIjo4NlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYyLFxyICAgIFwidGl0bGVcIjpcIkxvbmUgR3VubWFuKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzAvbG9uZS1ndW5tYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MyxcciAgICBcInRpdGxlXCI6XCJDb2xvbmlhbCBSZWFyIEd1YXJkc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA0IGNvdW50cmllcyBpbiBBZnJpY2EgYW5kL29yIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wMS9jb2xvbmlhbC1yZWFyLWd1YXJkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjQsXHIgICAgXCJ0aXRsZVwiOlwiUGFuYW1hIENhbmFsIFJldHVybmVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBQYW5hbWEsIENvc3RhIFJpY2EgYW5kIFZlbmV6dWVsYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDIvcGFuYW1hLWNhbmFsLXJldHVybmVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY1LFxyICAgIFwidGl0bGVcIjpcIkNhbXAgRGF2aWQgQWNjb3JkcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBhbmQgYWRkcyAxIEluZmx1ZW5jZSB0byBJc3JhZWwsIEpvcmRhbiBhbmQgRWd5cHQuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCMxMyDigJMgQXJhYi1Jc3JhZWxpIFdhcuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNS9jYW1wLWRhdmlkLWFjY29yZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NixcciAgICBcInRpdGxlXCI6XCJQdXBwZXQgR292ZXJubWVudHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBhZGQgMSBJbmZsdWVuY2UgdG8gMyBjb3VudHJpZXMgdGhhdCBkbyBub3QgY29udGFpbiBJbmZsdWVuY2UgZnJvbSBlaXRoZXIgdGhlIFVTIG9yIFVTU1IuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA2L3B1cHBldC1nb3Zlcm5tZW50cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NyxcciAgICBcInRpdGxlXCI6XCJHcmFpbiBTYWxlcyB0byBTb3ZpZXRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJhbmRvbWx5IHNlbGVjdHMgMSBjYXJkIGZyb20gdGhlIFVTU1LigJlzIGhhbmQgKGlmIGF2YWlsYWJsZSkuIFRoZSBVUyBtdXN0IGVpdGhlciBwbGF5IHRoZSBjYXJkIG9yIHJldHVybiBpdCB0byB0aGUgVVNTUi4gSWYgdGhlIGNhcmQgaXMgcmV0dXJuZWQsIG9yIHRoZSBVU1NSIGhhcyBubyBjYXJkcywgdGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDcvZ3JhaW4tc2FsZXMtdG8tc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjgsXHIgICAgXCJ0aXRsZVwiOlwiSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgMiBVU1NSIEluZmx1ZW5jZSBmcm9tIFBvbGFuZCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMxMDEg4oCTIFNvbGlkYXJpdHnigJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA4L2pvaG4tcGF1bC1paS1lbGVjdGVkLXBvcGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2OSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWF0aCBTcXVhZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgb2YgdGhlIHBoYXNpbmcgcGxheWVy4oCZcyBDb3VwIEF0dGVtcHRzIGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBkaWUgcm9sbC4gQWxsIG9mIHRoZSBvcHBvbmVudOKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA5L2xhdGluLWFtZXJpY2FuLWRlYXRoLXNxdWFkcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MCxcciAgICBcInRpdGxlXCI6XCJPQVMgRm91bmRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTIvb2FzLWZvdW5kZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzEsXHIgICAgXCJ0aXRsZVwiOlwiTml4b24gUGxheXMgdGhlIENoaW5hIENhcmQqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSBkb3duIGFuZCB1bmF2YWlsYWJsZSBmb3IgaW1tZWRpYXRlIHBsYXkpLiBJZiB0aGUgVVMgYWxyZWFkeSBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTMvbml4b24tcGxheXMtdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzIsXHIgICAgXCJ0aXRsZVwiOlwiU2FkYXQgRXhwZWxzIFNvdmlldHMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIEVneXB0IGFuZCBhZGQgMSBVUyBJbmZsdWVuY2UgdG8gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE0L3NhZGF0LWV4cGVscy1zb3ZpZXRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjczLFxyICAgIFwidGl0bGVcIjpcIlNodXR0bGUgRGlwbG9tYWN5XCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhpcyBjYXJk4oCZcyBFdmVudCBpcyBpbiBlZmZlY3QsIHN1YnRyYWN0ICgtMSkgYSBCYXR0bGVncm91bmQgY291bnRyeSBmcm9tIHRoZSBVU1NSIHRvdGFsIGFuZCB0aGVuIGRpc2NhcmQgdGhpcyBjYXJkIGR1cmluZyB0aGUgbmV4dCBzY29yaW5nIG9mIHRoZSBNaWRkbGUgRWFzdCBvciBBc2lhICh3aGljaCBldmVyIGNvbWVzIGZpcnN0KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTUvc2h1dHRsZS1kaXBsb21hY3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzQsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFZvaWNlIG9mIEFtZXJpY2FcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgNCBVU1NSIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgTk9UIGluIEV1cm9wZSAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTYvdGhlLXZvaWNlLW9mLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc1LFxyICAgIFwidGl0bGVcIjpcIkxpYmVyYXRpb24gVGhlb2xvZ3lcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAzIFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQ2VudHJhbCBBbWVyaWNhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTkvbGliZXJhdGlvbi10aGVvbG9neS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NixcciAgICBcInRpdGxlXCI6XCJVc3N1cmkgUml2ZXIgU2tpcm1pc2gqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIGZvciBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgYWRkIGEgdG90YWwgb2YgNCBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBBc2lhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjAvdXNzdXJpLXJpdmVyLXNraXJtaXNoL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc3LFxyICAgIFwidGl0bGVcIjpcIkFzayBOb3QgV2hhdCBZb3VyIENvdW50cnnigKYqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBkaXNjYXJkIHVwIHRvIHRoZWlyIGVudGlyZSBoYW5kIG9mIGNhcmRzIChpbmNsdWRpbmcgc2NvcmluZyBjYXJkcykgdG8gdGhlIGRpc2NhcmQgcGlsZSBhbmQgZHJhdyByZXBsYWNlbWVudHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgbnVtYmVyIG9mIGNhcmRzIHRvIGJlIGRpc2NhcmRlZCBtdXN0IGJlIGRlY2lkZWQgYmVmb3JlIGRyYXdpbmcgYW55IHJlcGxhY2VtZW50IGNhcmRzIGZyb20gdGhlIGRyYXcgcGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjEvYXNrLW5vdC13aGF0LXlvdXItY291bnRyeS1jYW4tZG8tZm9yLXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3OCxcciAgICBcInRpdGxlXCI6XCJBbGxpYW5jZSBmb3IgUHJvZ3Jlc3MqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMy9hbGxpYW5jZS1mb3ItcHJvZ3Jlc3MvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzksXHIgICAgXCJ0aXRsZVwiOlwiQWZyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogNDsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzExL3JlZ2lvbnMtYWZyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgwLFxyICAgIFwidGl0bGVcIjpcIk9uZSBTbWFsbCBTdGVw4oCmXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgeW91IGFyZSBiZWhpbmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIG1vdmUgdGhlaXIgbWFya2VyIDIgc3BhY2VzIGZvcndhcmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2suIFRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgb25seSBmcm9tIHRoZSBmaW5hbCBzcGFjZSBtb3ZlZCBpbnRvLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNi9vbmUtc21hbGwtc3RlcC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MSxcciAgICBcInRpdGxlXCI6XCJTb3V0aCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMjsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA4LzE1L3JlZ2lvbnMtc291dGgtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MixcciAgICBcInRpdGxlXCI6XCJJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGFuZCBhZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBJcmFuLiBUaGlzIGNhcmTigJlzIEV2ZW50IHJlcXVpcmVzIHRoZSBVUyB0byBkaXNjYXJkIDIgY2FyZHMsIGluc3RlYWQgb2YgMSBjYXJkLCBpZiB0aGUg4oCcIzkyIOKAkyBUZXJyb3Jpc23igJ0gRXZlbnQgaXMgcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8zMC9pcmFuaWFuLWhvc3RhZ2UtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJhZmZlY3RzXCI6OTJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MyxcciAgICBcInRpdGxlXCI6XCJUaGUgSXJvbiBMYWR5KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIEFyZ2VudGluYSBhbmQgcmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIHRoZSBVbml0ZWQgS2luZ2RvbS4gVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM3IOKAkyBTb2NpYWxpc3QgR292ZXJubWVudHPigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDMvdGhlLWlyb24tbGFkeS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImNhbmNlbHNcIjo4M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg0LFxyICAgIFwidGl0bGVcIjpcIlJlYWdhbiBCb21icyBMaWJ5YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBmb3IgZXZlcnkgMiBVU1NSIEluZmx1ZW5jZSBpbiBMaWJ5YS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDQvcmVhZ2FuLWJvbWJzLWxpYnlhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg1LFxyICAgIFwidGl0bGVcIjpcIlN0YXIgV2FycypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaXMgYWhlYWQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQgYW5kIHBsYXkgaXQgaW1tZWRpYXRlbHkgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA1L3N0YXItd2Fycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NixcciAgICBcInRpdGxlXCI6XCJOb3J0aCBTZWEgT2lsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSA4IGNhcmRzIChpbiA4IGFjdGlvbiByb3VuZHMpIGZvciB0aGlzIHR1cm4gb25seS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzYxIOKAkyBPUEVD4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA2L25vcnRoLXNlYS1vaWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6NjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NyxcciAgICBcInRpdGxlXCI6XCJUaGUgUmVmb3JtZXIqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDQgVVNTUiBJbmZsdWVuY2UgdG8gRXVyb3BlIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gSWYgdGhlIFVTU1IgaXMgYWhlYWQgb2YgdGhlIFVTIGluIFZQLCA2IEluZmx1ZW5jZSBtYXkgYmUgYWRkZWQgdG8gRXVyb3BlIGluc3RlYWQuIFRoZSBVU1NSIG1heSBubyBsb25nZXIgbWFrZSBDb3VwIEF0dGVtcHRzIGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDcvdGhlLXJlZm9ybWVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJhZmZlY3RzXCI6OTBcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OCxcciAgICBcInRpdGxlXCI6XCJNYXJpbmUgQmFycmFja3MgQm9tYmluZypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBpbiBMZWJhbm9uIGFuZCByZW1vdmUgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgaW4gdGhlIE1pZGRsZSBFYXN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMC9tYXJpbmUtYmFycmFja3MtYm9tYmluZy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg5LFxyICAgIFwidGl0bGVcIjpcIlNvdmlldHMgU2hvb3QgRG93biBLQUwtMDA3KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTIG1heSBwbGFjZSBpbmZsdWVuY2Ugb3IgbWFrZSBSZWFsaWdubWVudCByb2xscywgdXNpbmcgdGhpcyBjYXJkLCBpZiBTb3V0aCBLb3JlYSBpcyBVUyBjb250cm9sbGVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMS9zb3ZpZXRzLXNob290LWRvd24ta2FsLTAwNy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MCxcciAgICBcInRpdGxlXCI6XCJHbGFzbm9zdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTU1IgbWF5IG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMgb3IgYWRkIEluZmx1ZW5jZSwgdXNpbmcgdGhpcyBjYXJkLCBpZiB0aGUg4oCcIzg3IOKAkyBUaGUgUmVmb3JtZXLigJ0gRXZlbnQgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEyL2dsYXNub3N0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTEsXHIgICAgXCJ0aXRsZVwiOlwiT3J0ZWdhIEVsZWN0ZWQgaW4gTmljYXJhZ3VhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gTmljYXJhZ3VhLiBUaGUgVVNTUiBtYXkgbWFrZSBhIGZyZWUgQ291cCBBdHRlbXB0LCB1c2luZyB0aGlzIGNhcmTigJlzIE9wZXJhdGlvbnMgdmFsdWUsIGluIGEgY291bnRyeSBhZGphY2VudCB0byBOaWNhcmFndWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEzL29ydGVnYS1lbGVjdGVkLWluLW5pY2FyYWd1YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkyLFxyICAgIFwidGl0bGVcIjpcIlRlcnJvcmlzbVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXLigJlzIG9wcG9uZW50IG11c3QgcmFuZG9tbHkgZGlzY2FyZCAxIGNhcmQgZnJvbSB0aGVpciBoYW5kLiBJZiB0aGUg4oCcIzgyIOKAkyBJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lz4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLCBhIFVTIHBsYXllciAoaWYgYXBwbGljYWJsZSkgbXVzdCByYW5kb21seSBkaXNjYXJkIDIgY2FyZHMgZnJvbSB0aGVpciBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xNC90ZXJyb3Jpc20vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTMsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1Db250cmEgU2NhbmRhbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgVVMgUmVhbGlnbm1lbnQgcm9sbHMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBkaWUgcm9sbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTcvaXJhbi1jb250cmEtc2NhbmRhbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk0LFxyICAgIFwidGl0bGVcIjpcIkNoZXJub2J5bCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbXVzdCBkZXNpZ25hdGUgYSBzaW5nbGUgUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoYXQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiBjYW5ub3QgYWRkIEluZmx1ZW5jZSB0byB1c2luZyBPcGVyYXRpb25zIHBvaW50cy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTgvY2hlcm5vYnlsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk1LFxyICAgIFwidGl0bGVcIjpcIkxhdGluIEFtZXJpY2FuIERlYnQgQ3Jpc2lzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgaW1tZWRpYXRlbHkgZGlzY2FyZCBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSBvciB0aGUgVVNTUiBtYXkgZG91YmxlIHRoZSBhbW91bnQgb2YgVVNTUiBJbmZsdWVuY2UgaW4gMiBjb3VudHJpZXMgaW4gU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTkvbGF0aW4tYW1lcmljYW4tZGVidC1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTYsXHIgICAgXCJ0aXRsZVwiOlwiVGVhciBEb3duIHRoaXMgV2FsbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gRWFzdCBHZXJtYW55LiBUaGUgVVMgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIEV1cm9wZSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1NSDigJMgV2lsbHkgQnJhbmR04oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMC90ZWFyLWRvd24tdGhpcy13YWxsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiY2FuY2Vsc1wiOjU1XHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTcsXHIgICAgXCJ0aXRsZVwiOlwiQW4gRXZpbCBFbXBpcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1OSDigJMgRmxvd2VyIFBvd2Vy4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMS9hbi1ldmlsLWVtcGlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImNhbmNlbHNcIjo1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjk4LFxyICAgIFwidGl0bGVcIjpcIkFsZHJpY2ggQW1lcyBSZW1peCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLCBmYWNlLXVwLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiBhbmQgdGhlIFVTU1IgZGlzY2FyZHMgYSBjYXJkIGZyb20gdGhlIFVTIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzAzL2FsZHJpY2gtYW1lcy1yZW1peC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk5LFxyICAgIFwidGl0bGVcIjpcIlBlcnNoaW5nIElJIERlcGxveWVkKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIFJlbW92ZSAxIFVTIEluZmx1ZW5jZSBmcm9tIGFueSAzIGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDQvcGVyc2hpbmctaWktZGVwbG95ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDAsXHIgICAgXCJ0aXRsZVwiOlwiV2FyZ2FtZXMqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIERFRkNPTiBsZXZlbCBpcyAyLCB0aGUgcGxheWVyIG1heSBpbW1lZGlhdGVseSBlbmQgdGhlIGdhbWUgYWZ0ZXIgZ2l2aW5nIHRoZWlyIG9wcG9uZW50IDYgVlAuIEhvdyBhYm91dCBhIG5pY2UgZ2FtZSBvZiBjaGVzcz9cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDcvd2FyZ2FtZXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDEsXHIgICAgXCJ0aXRsZVwiOlwiU29saWRhcml0eSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gUG9sYW5kLiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiB0aGUg4oCcIzY4IOKAkyBKb2huIFBhdWwgSUkgRWxlY3RlZCBQb3Bl4oCdIEV2ZW50IGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDgvc29saWRhcml0eS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJwcmVyZXFcIjo2OFxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMixcciAgICBcInRpdGxlXCI6XCJJcmFuLUlyYXEgV2FyKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklyYW4gaW52YWRlcyBJcmFxIG9yIHZpY2UgdmVyc2EgKHBsYXllcuKAmXMgY2hvaWNlKS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIGludmFzaW9uIChJcmFuIG9yIElyYXEpLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIHBsYXllciByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDkvaXJhbi1pcmFxLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDMsXHIgICAgXCJ0aXRsZVwiOlwiRGVmZWN0b3JzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBwbGF5IHRoaXMgY2FyZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlIGluIG9yZGVyIHRvIGNhbmNlbCB0aGUgVVNTUiBIZWFkbGluZSBFdmVudCAoaW5jbHVkaW5nIGEgc2NvcmluZyBjYXJkKS4gVGhlIGNhbmNlbGVkIGNhcmQgaXMgcGxhY2VkIGludG8gdGhlIGRpc2NhcmQgcGlsZS4gSWYgdGhpcyBjYXJkIGlzIHBsYXllZCBieSB0aGUgVVNTUiBkdXJpbmcgaXRzIGFjdGlvbiByb3VuZCwgdGhlIFVTIGdhaW5zIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzA5L2RlZmVjdG9ycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDYW1icmlkZ2UgRml2ZVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIGFsbCBzY29yaW5nIGNhcmRzIGluIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIHBsYXllciBtYXkgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgUmVnaW9uIG5hbWVkIG9uIG9uZSBvZiB0aGUgcmV2ZWFsZWQgc2NvcmluZyBjYXJkcy4gVGhpcyBjYXJkIGNhbiBub3QgYmUgcGxheWVkIGFzIGFuIEV2ZW50IGR1cmluZyB0aGUgTGF0ZSBXYXIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzExL3RoZS1jYW1icmlkZ2UtZml2ZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDUsXHIgICAgXCJ0aXRsZVwiOlwiU3BlY2lhbCBSZWxhdGlvbnNoaXBcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBhZGphY2VudCB0byB0aGUgVS5LLiBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGJ1dCBOQVRPIGlzIG5vdCBpbiBlZmZlY3QuIEFkZCAyIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIFdlc3Rlcm4gRXVyb3BlLCBhbmQgdGhlIFVTIGdhaW5zIDIgVlAsIGlmIHRoZSBVLksuIGlzIFVTLWNvbnRyb2xsZWQgYW5kIE5BVE8gaXMgaW4gZWZmZWN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xOC9zcGVjaWFsLXJlbGF0aW9uc2hpcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA2LFxyICAgIFwidGl0bGVcIjpcIk5PUkFEKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGNvbnRhaW5pbmcgVVMgSW5mbHVlbmNlLCBhdCB0aGUgZW5kIG9mIGVhY2ggQWN0aW9uIFJvdW5kLCBpZiBDYW5hZGEgaXMgVVMtY29udHJvbGxlZCBhbmQgdGhlIERFRkNPTiBsZXZlbCBtb3ZlZCB0byAyIGR1cmluZyB0aGF0IEFjdGlvbiBSb3VuZC4gVGhpcyBFdmVudCBpcyBjYW5jZWxlZCBieSB0aGUg4oCcIzQyIOKAkyBRdWFnbWlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMjUvbm9yYWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhbnRpcmVxXCI6IDQyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA3LFxyICAgIFwidGl0bGVcIjpcIkNoZVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG1heSBwZXJmb3JtIGEgQ291cCBBdHRlbXB0LCB1c2luZyB0aGlzIGNhcmTigJlzIE9wZXJhdGlvbnMgdmFsdWUsIGFnYWluc3QgYSBub24tQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBBbWVyaWNhLCBTb3V0aCBBbWVyaWNhIG9yIEFmcmljYS4gVGhlIFVTU1IgbWF5IHBlcmZvcm0gYSBzZWNvbmQgQ291cCBBdHRlbXB0LCBhZ2FpbnN0IGEgZGlmZmVyZW50IG5vbi1CYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIEFtZXJpY2EsIFNvdXRoIEFtZXJpY2Egb3IgQWZyaWNhLCBpZiB0aGUgZmlyc3QgQ291cCBBdHRlbXB0IHJlbW92ZWQgYW55IFVTIEluZmx1ZW5jZSBmcm9tIHRoZSB0YXJnZXQgY291bnRyeS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjcvY2hlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwOCxcciAgICBcInRpdGxlXCI6XCJPdXIgTWFuIGluIFRlaHJhbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgY29udHJvbHMgYXQgbGVhc3Qgb25lIE1pZGRsZSBFYXN0IGNvdW50cnksIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIGRyYXcgdGhlIHRvcCA1IGNhcmRzIGZyb20gdGhlIGRyYXcgcGlsZS4gVGhlIFVTIG1heSBkaXNjYXJkIGFueSBvciBhbGwgb2YgdGhlIGRyYXduIGNhcmRzLCBhZnRlciByZXZlYWxpbmcgdGhlIGRpc2NhcmRlZCBjYXJkKHMpIHRvIHRoZSBVU1NSIHBsYXllciwgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBFdmVudChzKS4gQW55IHJlbWFpbmluZyBkcmF3biBjYXJkcyBhcmUgcmV0dXJuZWQgdG8gdGhlIGRyYXcgcGlsZSBhbmQgdGhlIGRyYXcgcGlsZSBpcyByZXNodWZmbGVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yOC9vdXItbWFuLWluLXRlaHJhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDksXHIgICAgXCJ0aXRsZVwiOlwiWXVyaSBhbmQgU2FtYW50aGEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBmb3IgZWFjaCBVUyBDb3VwIEF0dGVtcHQgcGVyZm9ybWVkIGR1cmluZyB0aGUgcmVtYWluZGVyIG9mIHRoZSBUdXJuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8xMC95dXJpLWFuZC1zYW1hbnRoYS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjExMCxcciAgICBcInRpdGxlXCI6XCJBV0FDUyBTYWxlIHRvIFNhdWRpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVUyBJbmZsdWVuY2UgdG8gU2F1ZGkgQXJhYmlhLiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNTYg4oCTIE11c2xpbSBSZXZvbHV0aW9u4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzE0L2F3YWNzLXNhbGUtdG8tc2F1ZGlzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH1ccl1cciIsIlIgPSBSZWFjdC5ET01cblJDVEcgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwXG51cGRhdGUgPSBSZWFjdC5hZGRvbnMudXBkYXRlXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuJCA9IFplcHRvXG52ZW50ID0gcmVxdWlyZSAnLi92ZW50J1xuXG5jYXJkc0RhdGEgPSByZXF1aXJlKCcuLi9saWIvY2FyZHMuanNvbicpXG5cblxuIyBBZGQgZnVuY3Rpb24gdG8gWmVwdG9cbiQuZ2V0U2NyaXB0ID0gKHNyYywgZnVuYykgLT5cbiAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LmFzeW5jID0gXCJhc3luY1wiXG4gIHNjcmlwdC5zcmMgPSBzcmNcbiAgaWYgZnVuY1xuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkIHNjcmlwdFxuXG5cbnBhZ2VzID0gcmVxdWlyZSAnLi9wYWdlcydcbnZpZXdzID0gcmVxdWlyZSAnLi92aWV3cydcblxucm91dGVyID0gcmVxdWlyZSAnLi9yb3V0ZXInXG5cblR3aVN0cnVnID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgbWl4aW5zOiBbcm91dGVyXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBtZW51QWN0aXZlOm51bGxcbiAgICB2aWV3OiB7fVxuICAgIHNsaWRlSW46IHRydWVcblxuICBjb21wb25lbnRXaWxsTW91bnQ6ICgpLT5cbiAgICAkKCcjcGxhY2Vob2xkZXInKS5oaWRlKClcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICB2ZW50Lm9uICdib2FyZFN0YXRlQ2hhbmdlJywgKGdhbWVJZCwgc3RhdGVFbmMpPT5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIiN7QHN0YXRlLnZpZXcubmFtZX0gI3tnYW1lSWR9XCIsXG4gICAgICAgIFwiIy8je0BzdGF0ZS52aWV3Lm5hbWV9LyN7Z2FtZUlkfS8je3N0YXRlRW5jfVwiXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogLT5cbiAgICAkc2xpZGVJbiA9ICQoQHJlZnMuc2xpZGVJbi5nZXRET01Ob2RlKCkpXG4gICAgJHNsaWRlSW4ucmVtb3ZlQ2xhc3MgJ3NsaWRlSW4taW4nXG4gICAgIyRtYWluVmlldyA9ICQoQHJlZnMubWFpblZpZXcuZ2V0RE9NTm9kZSgpKVxuICAgICMkbWFpblZpZXcucmVtb3ZlQ2xhc3MgJ21haW5WaWV3LW91dCdcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+IEBzbGlkZUluKClcblxuICBzbGlkZUluOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUuc2xpZGVJblxuICAgICAgcmV0dXJuXG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICRzbGlkZUluLmFkZENsYXNzKCdzbGlkZUluLWluJylcbiAgICAsIDEwXG5cblxuICByZW5kZXI6IC0+XG4gICAgIyBJZiB0aGUgcm91dGVyIGhhc24ndCBraWNrZWQgaW4sIGRvIG5vdGhpbmdcbiAgICBpZiBub3QgQHN0YXRlPy52aWV3XG4gICAgICBtYWluVmlldyA9IFIucCBjbGFzc05hbWU6ICdsZWFkJywgJ1R3aVN0cnVnIGlzIGxvYWRpbmcuLi4nXG4gICAgZWxzZVxuICAgICAgbWFpblZpZXcgPSBzd2l0Y2ggQHN0YXRlLnZpZXcubmFtZVxuICAgICAgICB3aGVuICdob21lJyB0aGVuIHBhZ2VzLkhvbWVcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY2FyZCcgdGhlbiBwYWdlcy5DYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnY2FyZHMnIHRoZW4gcGFnZXMuQ2FyZHNcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY291bnRyaWVzJyB0aGVuIHBhZ2VzLkNvdW50cmllcygpXG4gICAgICAgICN3aGVuICdib2FyZCcgdGhlbiByZXR1cm4gQm9hcmRQaWNWaWV3KClcbiAgICAgICAgd2hlbiAnYm9hcmQnIHRoZW4gcGFnZXMuQm9hcmQgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdnYW1lJyB0aGVuIHBhZ2VzLkdhbWUgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdhYm91dCcgdGhlbiBwYWdlcy5BYm91dCgpXG4gICAgICAgIHdoZW4gJ3dob29wcycgdGhlbiBwYWdlcy5XaG9vcHMoKVxuXG4gICAgbWFpblZpZXdDbGFzcyA9IGN4XG4gICAgICAnY29udGFpbmVyJzogQHN0YXRlLnZpZXcubmFtZSBub3QgaW4gWydib2FyZCcsICdnYW1lJ11cbiAgICAgICdzbGlkZUluJzogQHN0YXRlLnNsaWRlSW5cblxuICAgIFIuZGl2IHt9LCBbXG4gICAgICB2aWV3cy5OYXYga2V5OiduYXYnLCBhY3RpdmU6IEBzdGF0ZS5tZW51QWN0aXZlXG4gICAgICBSLmRpdiBrZXk6J21haW52aWV3JywgcmVmOiAnc2xpZGVJbicsIGNsYXNzTmFtZTogbWFpblZpZXdDbGFzcywgbWFpblZpZXdcbiAgICAgIHZpZXdzLkZvb3RlciBrZXk6J2Zvb3RlcidcbiAgICBdXG5cblxuIyBBZGQga2V5cyB0byBjYXJkc1xuYWRkUmVhY3RLZXkgPSAoZWwpLT5cbiAgZWwua2V5ID0gXCJyay0je2VsLmlkfVwiXG4gIGVsXG5cblJlYWN0LnJlbmRlckNvbXBvbmVudCBUd2lTdHJ1Zyh7Y2FyZHM6IGNhcmRzRGF0YS5tYXAoYWRkUmVhY3RLZXkpfSksXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdhcHAnXG4iLCJTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuL1N0YXRlSGlzdG9yeSdcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi9zdXBlcnBvd2VyVG9JbmRleCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4vc3RhdGVFbmNvZGVyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJvYXJkU3RhdGVIaXN0b3J5IGV4dGVuZHMgU3RhdGVIaXN0b3J5XG4gIGVuY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBlbmNvZGVkID0gc3RhdGVFbmNvZGVyLmVuY29kZSBzdGF0ZVxuICAgICNjb25zb2xlLmxvZyAnQm9hcmRTdGF0ZUhpc3RvcnkgZW5jb2RlU3RhdGUnLCBzdGF0ZSwgZW5jb2RlZFxuICAgIGVuY29kZWRcblxuICBkZWNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgZGVjb2RlZCA9IHN0YXRlRW5jb2Rlci5kZWNvZGUgc3RhdGVcbiAgICAjY29uc29sZS5sb2cgJ0JvYXJkU3RhdGVIaXN0b3J5IGRlY29kZVN0YXRlJywgc3RhdGUsIGRlY29kZWRcbiAgICBkZWNvZGVkXG4gIFxuICBhZGQ6IChzdGF0ZSwgbWV0YSktPlxuICAgICMgSWYgaXQncyB0aGUgc2FtZSB0aGluZyBhcyB0aGUgcHJldmlvdXMgZW50cnksIGRvbid0IHVwZGF0ZSB0aGUgaGlzdG9yeVxuICAgICMgVGhpcyBpcyBzbyB3ZSBjYW4gYmF0Y2ggdGhlIGNoYW5nZXMgZm9yIGRpc3BsYXlcbiAgICBjdXIgPSBAZ2V0Q3VycmVudCgpXG4gICAgI2NvbnNvbGUubG9nIGN1clxuICAgIGlmIG5vdCBjdXI/XG4gICAgICByZXR1cm4gc3VwZXIgc3RhdGUsIG1ldGFcblxuICAgIG5tID0gXy5jbG9uZURlZXAgbWV0YVxuICAgIG5zID0gXy5jbG9uZURlZXAgc3RhdGVcbiAgICBjbSA9IGN1ci5tZXRhXG4gICAgY3MgPSBjdXIuc3RhdGVcbiAgIFxuICAgICMgU2V0IGlwIGRlbHRhIHRvIGJlIGFuIGFycmF5XG4gICAgaWYgbWV0YS50eXBlID09ICdpcCdcbiAgICAgIHVzYSA9IGlmIG5tLnNpZGUgPT0gJ3VzYScgdGhlbiBubS5kZWx0YSBlbHNlIDBcbiAgICAgIHVzc3IgPSBpZiBubS5zaWRlID09ICd1c3NyJyB0aGVuIG5tLmRlbHRhIGVsc2UgMFxuICAgICAgbm0uZGVsdGEgPSBbdXNhLCB1c3NyXVxuXG5cbiAgICBpZiBubS50eXBlID09IGNtLnR5cGUgYW5kIG5zLmdhbWUucm91bmQgPT0gY3MuZ2FtZS5yb3VuZFxuICAgICAgc2lkZVNhbWUgPSBpZiBubS5pZCA9PSAnc2NvcmUnIHRoZW4gdHJ1ZSBlbHNlIG5tLnNpZGUgPT0gY20uc2lkZVxuICAgICAgaWRTYW1lID0gbm0uaWQgPT0gY20uaWRcblxuICAgICAgdHlwZUlwU2FtZSA9IG5tLnR5cGUgPT0gJ2lwJyBhbmQgbm0uY291bnRyeS5pZCA9PSBjbS5jb3VudHJ5LmlkXG4gICAgICB0eXBlVmFsU2FtZSA9IG5tLnR5cGUgPT0gJ3ZhbCcgYW5kIG5tLmlkICE9ICd0dXJuJyBhbmRcbiAgICAgIG5tLmlkICE9ICdyb3VuZCcgYW5kIHNpZGVTYW1lIGFuZCBpZFNhbWVcblxuICAgICAgaWYgdHlwZUlwU2FtZSBvciB0eXBlVmFsU2FtZVxuICAgICAgICByZXR1cm4gQG1lcmdlV2l0aEN1cnJlbnQgbnMsIG5tXG5cbiAgICBzdXBlciBucywgbm1cblxuXG4gIG1lcmdlV2l0aEN1cnJlbnQ6IChzdGF0ZSxtZXRhKS0+XG4gICAgYyA9IF8uY2xvbmVEZWVwIEBnZXRDdXJyZW50KClcbiAgICBubSA9IF8uY2xvbmVEZWVwIG1ldGFcbiAgICBjbSA9IGMubWV0YVxuICAgIHN3aXRjaCBjbS50eXBlXG4gICAgICB3aGVuICdpcCdcbiAgICAgICAgbm0uZGVsdGFbMF0gKz0gY20uZGVsdGFbMF1cbiAgICAgICAgbm0uZGVsdGFbMV0gKz0gY20uZGVsdGFbMV1cbiAgICAgICAgbm0uc2lkZSA9ICdib3RoJ1xuICAgICAgICBpZiBubS5kZWx0YVswXSA9PSAwXG4gICAgICAgICAgbm0uc2lkZSA9ICd1c3NyJ1xuICAgICAgICBpZiBubS5kZWx0YVsxXSA9PSAwXG4gICAgICAgICAgbm0uc2lkZSA9ICd1c2EnXG4gICAgICAgIGlmIG5tLmRlbHRhWzBdID09IG5tLmRlbHRhWzFdID09IDBcbiAgICAgICAgICBwb3AgPSB0cnVlXG5cbiAgICAgIHdoZW4gJ3ZhbCdcbiAgICAgICAgbm0ub2xkID0gY20ub2xkXG4gICAgICAgIGlmIG5tLm9sZCA9PSBubS5uZXdcbiAgICAgICAgICBwb3AgPSB0cnVlXG5cbiAgICBpZiBAbGF0ZXN0ICE9IEBjdXJyZW50XG4gICAgICBAc3RhdGVzID0gQHN0YXRlcy5zbGljZSgwLEBjdXJyZW50KzEpXG4gICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIGlmIHBvcCA9PSB0cnVlXG4gICAgICBAc3RhdGVzLnBvcCgpXG4gICAgICBAY3VycmVudC0tXG4gICAgICBpZihAbGF0ZXN0ID4gQGN1cnJlbnQpXG4gICAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgZWxzZVxuICAgICAgQHN0YXRlc1tAY3VycmVudF0gPVxuICAgICAgICBtZXRhOiBubVxuICAgICAgICBzdGF0ZTogQGVuY29kZVN0YXRlIHN0YXRlXG5cbiAgICBAc2F2ZSgpXG4gICAgQGVtaXQgJ21lcmdlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1cGRhdGUnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ2NoYW5nZSdcblxuXG4gICMgVHVybiBzdGF0ZSBpbnRvIGEgbWluaW1hbCByZXByZXNlbnRhdGlvblxuICBlbmNvZGVDdXJyZW50OiAoKS0+XG4gICAgY3VyID0gQGdldEN1cnJlbnQoKVxuICAgIHJldHVybiBpZiBub3QgY3VyP1xuICAgIHN0YXRlRW5jb2Rlci5lbmNvZGUgQGdldEN1cnJlbnQoKT8uc3RhdGVcblxuXG4gIHRvZ2dsZVZpc2libGU6IChmb3JjZSwgc2hvd1RlbXA9ZmFsc2UpLT5cbiAgICBjbGVhclRpbWVvdXQgQHNob3dUaGVuSGlkZVRpbWVvdXRcbiAgICBAc2hvd1RlbXAgPSBzaG93VGVtcFxuICAgIEBzaG93ID0gaWYgZm9yY2U/IHRoZW4gZm9yY2UgZWxzZSAhQHNob3dcbiAgICBAZW1pdCAndG9nZ2xlVmlzaWJsZScsIEBzaG93XG4gICAgQGVtaXQgJ3VwZGF0ZSdcblxuICBzaG93VGhlbkhpZGU6ICh0aW1lID0gMTAwMCktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIGlmIG5vdCBAc2hvd1xuICAgICAgQHRvZ2dsZVZpc2libGUgdHJ1ZSwgdHJ1ZVxuICAgIGlmIEBzaG93VGVtcFxuICAgICAgQHNob3dUaGVuSGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0IEB0b2dnbGVWaXNpYmxlLmJpbmQodGhpcywgZmFsc2UpLCB0aW1lXG5cbiAgaGlkZTogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSBmYWxzZVxuXG4gIHNob3c6IC0+XG4gICAgQHRvZ2dsZVZpc2libGUgdHJ1ZVxuXG4gICMgY2IgY2FuIGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHNob3J0aGFuZCBvYmosIG9yIGEga2V5IG5hbWVcbiAgIyBodHRwOi8vbG9kYXNoLmNvbS9kb2NzI2ZpbmRJbmRleFxuICBmaW5kU3RhdGVJbmRleDogKGNiKS0+XG4gICAgaW5kZXggPSBfLmZpbmRJbmRleCBAc3RhdGVzLCBjYlxuICAgIGlmIGluZGV4ICE9IC0xXG4gICAgICByZXR1cm4gaW5kZXggXG4iLCJjbGFzcyBNaWNyb0V2ZW50Q2xhc3NcbiAgX2luaXQ6LT4gQF9saXN0biBvciBAX2xpc3RuID0ge31cbiAgX2NyZWF0ZTooZSktPiBAX2luaXQoKVtlXSBvciAgQF9pbml0KClbZV0gPSBbXVxuICBvbjooZSwgZiktPiAoQF9jcmVhdGUgZSkucHVzaCBmXG4gIG9mZjooZSwgZiktPiAodC5zcGxpY2UgKHQuaW5kZXhPZiBmKSwgMSkgaWYgKHQgPSBAX2luaXQoKVtlXSk/XG4gIG9uY2U6KGUsIGYpLT4gQG9uIGUsICh0ID0gPT4gKEBvZmYgZSwgdCkgJiYgZi5hcHBseSBALCBhcmd1bWVudHMpXG4gIGVtaXQ6KGUsIHIuLi4pLT4gbC5hcHBseSBALCByIGZvciBsIGluIHQgaWYgKHQgPSBAX2luaXQoKVtlXSk/OyAwXG4gIEBtaXhpbj0odCktPiB0OjpbcF0gPSBAOjpbcF0gZm9yIHAgb2YgQDo6OyAwXG5cbm1vZHVsZS5leHBvcnRzID0gTWljcm9FdmVudENsYXNzXG4iLCJNaWNyb0V2ZW50Q2xhc3MgPSByZXF1aXJlICcuL01pY3JvRXZlbnRDbGFzcydcblxuY2xhc3MgU3RhdGVIaXN0b3J5IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG4gICMgQGlkIGlzIHVzZWQgZm9yIHBlcnNpc3RhbmNlXG4gIGNvbnN0cnVjdG9yOiAob3B0cyktPlxuICAgICNfLmFzc2lnbiB0aGlzLCBNaWNyb0V2ZW50XG4gICAgQHN0YXRlcyA9IFtdXG4gICAgQHN0YWdlZCA9IFtdXG4gICAgQGxhdGVzdCA9IG51bGxcbiAgICBAY3VycmVudCA9IG51bGxcbiAgICBAc2hvdyA9IGZhbHNlXG4gICAgQGlkID0gb3B0cy5pZFxuICAgIEBzdGF0ZXNUb1NhdmUgPSA1MFxuICBcbiAgIyBFeHRlbmQgdG8gYWRkIGN1c3RvbSBlbmNvZGluZy9kZWNvZGluZyBmdW5jdGlvbmFsaXR5XG4gIGVuY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBzdGF0ZVxuXG4gIGRlY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBzdGF0ZVxuICBcbiAgc2F2ZTogLT5cbiAgICBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlIDAsIEBzdGF0ZXNUb1NhdmVcbiAgICBcbiAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkgc3RhdGVzXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0gQGlkLCBqc29uXG5cbiAgbG9hZDogLT5cbiAgICBzdGF0ZXMgPSBKU09OLnBhcnNlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKEBpZClcbiAgICBpZiBzdGF0ZXMgYW5kIF8uaXNBcnJheSBzdGF0ZXNcbiAgICAgIEBzdGF0ZXMgPSBzdGF0ZXNcbiAgICAgIEBjdXJyZW50ID0gc3RhdGVzLmxlbmd0aCAtIDFcbiAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgICBAZW1pdCAnbG9hZCdcbiAgICAgIEBlbWl0ICd1cGRhdGUnXG4gICAgICByZXR1cm4gc3RhdGVzXG5cbiAgYWRkOiAoc3RhdGUsIG1ldGE9e30pLT5cbiAgICBpZiBAbGF0ZXN0ICE9IEBjdXJyZW50XG4gICAgICBAc3RhdGVzID0gQHN0YXRlcy5zbGljZSgwLEBjdXJyZW50KzEpXG5cbiAgICBpZiBub3QgQGN1cnJlbnQ/XG4gICAgICBAY3VycmVudCA9IDBcbiAgICBlbHNlXG4gICAgICBAY3VycmVudCsrXG5cbiAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIG5ld1N0YXRlID1cbiAgICAgIHN0YXRlOiBAZW5jb2RlU3RhdGUgXy5jbG9uZURlZXAgc3RhdGVcbiAgICAgIG1ldGE6IF8uY2xvbmVEZWVwIG1ldGFcblxuICAgIEBzdGF0ZXNbQGN1cnJlbnRdID0gbmV3U3RhdGVcblxuICAgIEBzYXZlKClcblxuICAgIEBlbWl0ICdhZGQnLCBuZXdTdGF0ZSwgJ1lFQUgnXG4gICAgQGVtaXQgJ3VwZGF0ZScsIG5ld1N0YXRlLCAnWUVBSCdcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICBcbiAgdW5kbzogKCktPlxuICAgIGlmIEBjdXJyZW50ID4gMFxuICAgICAgQGN1cnJlbnQtLVxuICAgIEBzaG93VGhlbkhpZGUoKVxuICAgIHN0YXRlID0gQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1bmRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBzdGF0ZVxuICAgIEBlbWl0ICdjaGFuZ2UnXG4gICAgc3RhdGVcbiAgXG4gIHJlZG86ICgpLT5cbiAgICBpZiBAY3VycmVudCA8IEBsYXRlc3RcbiAgICAgIEBjdXJyZW50KytcbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAncmVkbydcbiAgICBAZW1pdCAndXBkYXRlJywgc3RhdGVcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICAgIHN0YXRlXG5cbiAgZ29UbzogKGluZGV4KS0+XG4gICAgcmV0dXJuIGlmIG5vdCBpbmRleD9cbiAgICBAY3VycmVudCA9IGluZGV4XG4gICAgQGVtaXQgJ2dvVG8nLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VwZGF0ZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAnY2hhbmdlJ1xuXG4gIGdldDogKGluZGV4KS0+XG4gICAgcmV0dXJuIG51bGwgaWYgQHN0YXRlcy5sZW5ndGggPT0gMFxuICAgIHNoID0gXy5jbG9uZURlZXAgQHN0YXRlc1tpbmRleF1cbiAgICBzaC5zdGF0ZSA9IEBkZWNvZGVTdGF0ZSBzaC5zdGF0ZVxuICAgIHNoXG5cbiAgZ2V0Q3VycmVudDogKCktPlxuICAgIEBnZXQoQGN1cnJlbnQpXG5cbiAgZ2V0UHJldjogLT5cbiAgICBwcmV2ID0gQGN1cnJlbnQgLSAxXG4gICAgaWYgcHJldiA8IDAgdGhlbiBwcmV2ID0gMFxuICAgIHJldHVybiBAZ2V0KHByZXYpXG5cbiAgZ2V0QWxsOiAtPlxuICAgIF8ubWFwIEBzdGF0ZXMsIChzaCwgaW5kZXgpPT5cbiAgICAgIEBnZXQgaW5kZXhcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSGlzdG9yeVxuIiwiY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSAocHJvcHMpIC0+XG4gIG93bmVyQ2xhc3MgPSBcIm93bmVyLSN7cHJvcHMub3duZXJ9XCJcbiAgY2xhc3NlcyA9IGN4XG4gICAgJ2FzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FzaWEgU2NvcmluZydcbiAgICAnZXVyb3BlU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdFdXJvcGUgU2NvcmluZydcbiAgICAnbWlkZGxlRWFzdFNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnTWlkZGxlIEVhc3QgU2NvcmluZydcbiAgICAnY2VudHJhbEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0NlbnRyYWwgQW1lcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aGVhc3RBc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aGVhc3QgQXNpYSBTY29yaW5nKidcbiAgICAnYWZyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBZnJpY2EgU2NvcmluZydcbiAgICAnc291dGhBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ29uZ29pbmcnOiBwcm9wcy5vbmdvaW5nXG5cbiAgb3duZXJDbGFzcyArICcgJyArIGNsYXNzZXNcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29udGluZW50KS0+XG4gIGlmIGNvbnRpbmVudCA9PSAnYWYnIHRoZW4gJ2YnIGVsc2UgY29udGluZW50LmNoYXJBdCAwXG5cbiIsImNzID1cbiAgJ2EnOiAnYXMnXG4gICdlJzogJ2V1J1xuICAnYyc6ICdjYSdcbiAgJ3MnOiAnc2EnXG4gICdmJzogJ2FmJ1xuICAnbSc6ICdtZSdcblxubW9kdWxlLmV4cG9ydHMgPSAobGV0dGVyKS0+IGNzW2xldHRlcl1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gZWwgaWYgZWxcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsLGksYXJyKS0+IGFyci5pbmRleE9mKGVsKSA9PSBpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiAxIDw9IGVsIDw9IDExMFxuIiwibW9kdWxlLmV4cG9ydHMgPVxuICB0dXJuOiAodmFsKS0+XG4gICAgc3dpdGNoIHZhbFxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIHZhbFxuICByb3VuZDogKHZhbCktPlxuICAgIGlmIHZhbCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gIFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCwgb3B0KS0+XG4gIHN3aXRjaCBpZFxuICAgIHdoZW4gJ3R1cm4nXG4gICAgICBzdGFydCA9ICdTJ1xuICAgICAgZW5kID0gJ0UnXG4gICAgICBpZiBvcHQgPT0gJ2xvbmcnXG4gICAgICAgIHN0YXJ0ID0gJ05ldyBHYW1lJ1xuICAgICAgICBlbmQgPSAnR2FtZSBFbmQnXG4gICAgICBzd2l0Y2ggdmFsXG4gICAgICAgIHdoZW4gMCB0aGVuIHN0YXJ0XG4gICAgICAgIHdoZW4gMTEgdGhlbiBlbmRcbiAgICAgICAgZWxzZSB2YWxcbiAgICB3aGVuICdyb3VuZCdcbiAgICAgIGggPSBpZiBvcHQgPT0gJ2xvbmcnIHRoZW4gJ0hlYWRsaW5lJyBlbHNlICdIJ1xuICAgICAgaWYgdmFsID09IDAgdGhlbiBoIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gICAgd2hlbiAnc2NvcmUnXG4gICAgICBNYXRoLmFicyB2YWxcbiAgICBlbHNlXG4gICAgICB2YWxcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT4gaWYgbnVtID4gMCB0aGVuIFwiKyN7bnVtfVwiIGVsc2UgbnVtXG4iLCIjIEVuY29kZS9kZWNvZGUgbnVtYmVycyBpbnRvIHNpbmdsZS1jaGFyIHJlcHJlc2VudGF0aW9uc1xuIyAwLTM1ICAtPiAwLDEsMi4uYSxiLGMuLnpcbiMgMzYtNjEgLT4gQSxCLEMuLi5cbm1vZHVsZS5leHBvcnRzID1cbiAgZW5jb2RlOiAobiktPlxuICAgIGlmIG4gPCAzNiB0aGVuIG91dCA9IG4udG9TdHJpbmcoMzYpIGVsc2UgU3RyaW5nLmZyb21DaGFyQ29kZSBuICsgMjlcblxuICBkZWNvZGU6IChjID0gJzAnKS0+XG4gICAgY29kZSA9IGMuY2hhckNvZGVBdCAwXG4gICAgIyBDYWxjdWxhdGUgb2Zmc2V0IGZyb20gY2hhcmNvZGUgdG8gdmFsdWVcbiAgICBvZmZzZXQgPSBzd2l0Y2hcbiAgICAgICMgMC05XG4gICAgICB3aGVuIDQ4IDw9IGNvZGUgPD0gNTcgdGhlbiA0OFxuICAgICAgIyAxMC0zNVxuICAgICAgd2hlbiA5NyA8PSBjb2RlIDw9IDEyMiB0aGVuIDg3XG4gICAgICAjIDM2LTYxXG4gICAgICB3aGVuIDY1IDw9IGNvZGUgPD0gOTAgdGhlbiAyOVxuXG4gICAgY29kZSAtIG9mZnNldFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29udGluZW50KS0+XG4gIGlmIGNvbnRpbmVudCA9PSAnYWYnIHRoZW4gJ2YnIGVsc2UgY29udGluZW50LmNoYXJBdCAwXG5cbiIsIiMgSGFzaGVkIHFzXG4jIEhhbmRsZXMgc3RyaW5ncyBhbmQgYXJyYXlzXG4jIEFueXRoaW5nIHdpdGggYSBjb21tYSB3aWxsIGJlIHBhcnNlZCBhcyBhbiBhcnJheVxubW9kdWxlLmV4cG9ydHMgPVxuICBtZXJnZTogKG9iaiktPlxuXG4gIGdldDogKGZpZWxkKS0+XG4gIFxuICBzZXQ6IChmaWVsZCwgdmFsKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHFzT2JqW2ZpZWxkXSA9IHZhbFxuICAgIEBzZXRRUyBAdG9RUyhxc09iailcblxuICBkZWxldGU6IChmaWVsZCktPlxuICAgIHFzT2JqID0gQHRvT2JqKCkgfHwge31cbiAgICByZXR1cm4gaWYgbm90IHFzT2JqP1xuICAgIGRlbGV0ZSBxc09ialtmaWVsZF1cbiAgICBAc2V0UVMgQHRvUVMgcXNPYmpcblxuICBlbmNvZGVDaGFyc0luOiBbJz0nLCcmJ11cblxuICBlbmNvZGVDaGFyc091dDpbJyUzRCcsJyUyNiddXG5cbiAgZW5jb2RlOiAob2JqKS0+XG4gICAgaWYgXy5pc0FycmF5IG9ialxuICAgICAgb2JqID0gb2JqLmpvaW4oJywnKVxuICAgIG9iai5yZXBsYWNlKEBlbmNvZGVDaGFyc0luLCBAZW5jb2RlQ2hhcnNPdXQpXG5cbiAgZGVjb2RlOiAoc3RyKS0+XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoQGVuY29kZUNoYXJzT3V0LCBAZW5jb2RlQ2hhcnNJbilcbiAgICBpZiBzdHIuaW5kZXhPZignLCcpICE9IC0xXG4gICAgICBzdHIgPSBzdHIuc3BsaXQoJywnKVxuICAgIHN0clxuXG5cbiAgdG9PYmo6IChxcyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/Jyk/WzFdKS0+XG4gICAgaWYgbm90IHFzXG4gICAgICByZXR1cm5cbiAgICBvdXQgPSB7fVxuICAgIHBhaXJzID0gcXMuc3BsaXQoJyYnKVxuICAgIHBhaXJzPy5mb3JFYWNoIChwYWlyKT0+XG4gICAgICBrdkFyciA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgb3V0W0BkZWNvZGUoa3ZBcnJbMF0pXSA9IEBkZWNvZGUoa3ZBcnJbMV0pXG4gICAgb3V0XG5cbiAgdG9RUzogKG9iaiktPlxuICAgIHBhaXJzID0gW11cbiAgICBmb3Igb3duIGssdiBvZiBvYmpcbiAgICAgIHBhaXJzLnB1c2ggXCIje0BlbmNvZGUoayl9PSN7QGVuY29kZSh2KX1cIlxuICAgIHBhaXJzLmpvaW4oJyYnKVxuICAgICAgIFxuICBzZXRRUzogKHFzKS0+XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdICsgJz8nICsgcXNcbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwpLT5cbiAgcmFuZ2VzID1cbiAgICBzY29yZTogWy0yMCwgMjBdXG4gICAgdHVybjogWzAsIDExXVxuICAgIHJvdW5kOiBbMCwgMTZdXG4gICAgZGVmY29uOiBbMSwgNV1cbiAgICBtaWxvcHM6IFswLCA1XVxuICAgIHNwYWNlOiBbMCwgOF1cblxuICByYW5nZSA9IHJhbmdlc1tpZF1cblxuICBpZiB2YWwgPCByYW5nZVswXVxuICAgIHJldHVybiByYW5nZVsxXVxuICBpZiB2YWwgPiByYW5nZVsxXVxuICAgIHJldHVybiByYW5nZVswXVxuICB2YWxcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoYXJncy4uLiktPlxuICBkb2N1bWVudC50aXRsZSA9IGFyZ3Muam9pbignIHwgJykgKyAnIC0gVHdpU3RydWcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChkaXIpLT4gaWYgZGlyID09ICd1cCcgdGhlbiAnKycgZWxzZSAnLSdcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIGlmIG51bSA+IDBcbiAgICByZXR1cm4gJysnXG4gIGlmIG51bSA8IDBcbiAgICByZXR1cm4gJy0nXG4gIHJldHVybiAnJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIGlmIG51bSA9PSAwXG4gICAgb3V0ID0gJ+KAlCdcbiAgaWYgbnVtID4gMFxuICAgIG91dCA9IFwiKyN7bnVtfVwiXG4gIGlmIG51bSA8IDBcbiAgICBvdXQgPSBudW1cbiAgb3V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgc2lnbiA9ICcnXG4gIGlmIG51bSA+IDBcbiAgICBzaWduID0gJysnXG4gIGNvbnNvbGUubG9nIHNpZ24gKyBudW1cbiAgcmV0dXJuIHNpZ24gKyBudW1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGEsYiktPiBhLWJcbiIsIm51bVRvQ2hhciA9IHJlcXVpcmUgJy4vbnVtVG9DaGFyJ1xuXG4jIFR1cm4gYSBnYW1lIHN0YXRlIG9iamVjdCBpbnRvIGEgc3RyaW5nLCB2YWx1ZXMgZGVsaW1pdGVkIGJ5IGluZGV4IGluIHRoZSBzdHJpbmdcbiNcbiMgQnl0ZXMgICAgIEl0ZW1zXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIDAtNyAgICAgICBCb2FyZCBzdGF0ZTogIFNjb3JlLCBEZWZjb24sIFR1cm4sIFJvdW5kLFxuIyAgICAgICAgICAgICAgICAgICAgICAgICBNTyBVU0EsIE1PIFVTU1IsIFNwYWNlIFVTQSwgU3BhY2UgVVNTUlxuIyA4LTE3NiAgICAgQ291bnRyeSBJUHMsIDIgYnl0ZXMgZWFjaCwgc2VxdWVudGlhbGx5IGJ5IGlkXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGVuY29kZTogKHN0YXRlKS0+XG4gICAgZ2FtZSA9IHN0YXRlLmdhbWVcbiAgICBpcHMgPSBzdGF0ZS5pcHNcblxuICAgICMgU2NvcmUgaXMgZnJvbSAtMjAgdG8gKzIwLCBidXQgdGhpcyBlbmNvZGVyIGlzIHBvc2l0aXZlIGludGVnZXJzIG9ubHlcbiAgICBib2FyZCA9IFtcbiAgICAgIGdhbWUuc2NvcmUgKyAyMCwgZ2FtZS5kZWZjb24sIGdhbWUudHVybiwgZ2FtZS5yb3VuZCxcbiAgICAgIGdhbWUubWlsb3BzWzBdLCBnYW1lLm1pbG9wc1sxXSwgZ2FtZS5zcGFjZVswXSwgZ2FtZS5zcGFjZVsxXVxuICAgIF1cblxuICAgICMgRmlyc3QgMiBpcHMgYXJlIHRoZSBzdXBlcnBvd2VycyAtIHByZXR0eSB1c2VsZXNzLCBzaG91bGQgY2hhbmdlIGluIGZ1dHVyZVxuICAgIGJvYXJkLmNvbmNhdCBfLmZsYXR0ZW4gaXBzLnNsaWNlKDIpXG4gICAgICAubWFwIG51bVRvQ2hhci5lbmNvZGVcbiAgICAgIC5qb2luICcnXG4gICAgICBcbiAgZGVjb2RlOiAoc3RyKS0+XG4gICAgcmV0dXJuIG51bGwgaWYgbm90IHN0cj9cbiAgICBhcnIgPSBzdHIuc3BsaXQoJycpLm1hcCAoZWwpLT4gbnVtVG9DaGFyLmRlY29kZSBlbFxuICAgIGJvYXJkQXJyID0gYXJyLnNsaWNlKDAsOClcbiAgICBpcEFyciA9IGFyci5zbGljZSg4KVxuXG4gICAgW3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtb3VzYSwgbW91c3NyLCBzcHVzYSwgc3B1c3NyXSA9IGJvYXJkQXJyXG4gICAgbWlsb3BzID0gW21vdXNhLCBtb3Vzc3JdXG4gICAgc3BhY2UgPSBbc3B1c2EsIHNwdXNzcl1cbiAgICBzY29yZSAtPSAyMFxuICAgIGdhbWUgPSB7c2NvcmUsIGRlZmNvbiwgdHVybiwgcm91bmQsIG1pbG9wcywgc3BhY2V9XG5cbiAgICBpcHMgPSBbXVxuICAgIGZvciBpcCwgaW5kZXggaW4gaXBBcnJcbiAgICAgIGlwc0luZGV4ID0gTWF0aC5mbG9vciBpbmRleC8yXG4gICAgICBzaWRlSW5kZXggPSBpbmRleCAlIDJcbiAgICAgIGlmIHNpZGVJbmRleCA9PSAwXG4gICAgICAgIGlwc1tpcHNJbmRleF0gPSBbaXBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwc1tpcHNJbmRleF1bc2lkZUluZGV4XSA9IGlwXG5cbiAgICAjIEFkZCB0aGUgc3VwZXJwb3dlciBJUHMgYmFjayBpblxuICAgIGlwcy51bnNoaWZ0IFswLDBdLCBbMCwwXVxuXG4gICAge2dhbWUsIGlwc31cblxuIiwiZ2V0SXBTdGF0cyA9IChpcHMsIGNvdW50cmllcyktPlxuICBhY2N1bXVsYXRvciA9IC0+XG4gICAgYnRsOiAwXG4gICAgbm9uOiAwXG4gICAgdG90YWw6IDBcbiAgICBldTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhczogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBtZTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhZjogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBzYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBjYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcblxuICBmbiA9IChhY2N1bSwgaXBzLCBjb3VudHJ5SWQpLT5cbiAgICBjb3VudHJ5ID0gXy5maW5kIGNvdW50cmllcywgaWQ6IHBhcnNlSW50KGNvdW50cnlJZCwgMTApXG4gICAgaWYgaXBzWzBdIC0gaXBzWzFdID49IGNvdW50cnkuc3RhYlxuICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLnRvdGFsKytcbiAgICAgIGFjY3VtLnRvdGFsKytcbiAgICAgIGlmIGNvdW50cnkuYnRsXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5idGwrK1xuICAgICAgICBhY2N1bS5idGwrK1xuICAgICAgZWxzZVxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0ubm9uKytcbiAgICAgICAgYWNjdW0ubm9uKytcbiAgICBhY2N1bVxuXG4gICMgRmxpcHBlZCB0byBoYXZlIFVTU1IgaXBzIGZpcnN0XG4gIGlwc1JldiA9IF8ubWFwIGlwcywgKGlwcyktPiBfLmNsb25lRGVlcChpcHMpLnJldmVyc2UoKVxuXG4gIHVzYSA9IF8ucmVkdWNlIGlwcywgZm4sIGFjY3VtdWxhdG9yKClcbiAgdXNzciA9IF8ucmVkdWNlIGlwc1JldiwgZm4sIGFjY3VtdWxhdG9yKClcblxuICB7dXNhLCB1c3NyfVxuXG5zdW1SZWdpb24gPSAobWV0cmljLCBzdW0sIHJlZ2lvbiktPiBzdW0gKyByZWdpb25bbWV0cmljXVxuXG5nZXRSZWdpb25TdGF0cyA9IChpcFN0YXRzLCByZWdpb25zKS0+XG4gIHN0YXRzID0gXy5tYXBWYWx1ZXMgaXBTdGF0cywgKGhlcm8sIHBvd2VyLCBwb3dlcnMpLT5cbiAgICB2aWxsYWluID0gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiBwb3dlcnMudXNzciBlbHNlIHBvd2Vycy51c2FcbiAgICByZWdpb25TdGF0cyA9IHJlZ2lvbnMubWFwIChyZWdpb24pLT5cbiAgICAgIGhSZWdpb24gPSBoZXJvW3JlZ2lvbi5pZF1cbiAgICAgIHZSZWdpb24gPSB2aWxsYWluW3JlZ2lvbi5pZF1cbiAgICAgIGRvbWluYXRpb24gPSBoUmVnaW9uLm5vbiA+IDAgYW5kIGhSZWdpb24uYnRsID4gdlJlZ2lvbi5idGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICBjb250cm9sID0gaFJlZ2lvbi5idGwgPT0gcmVnaW9uLm51bUJ0bCBhbmQgaFJlZ2lvbi50b3RhbCA+IHZSZWdpb24udG90YWxcbiAgICAgIHByZXNlbmNlID0gbm90IGRvbWluYXRpb24gYW5kIG5vdCBjb250cm9sIGFuZCBoUmVnaW9uLnRvdGFsID4gMFxuICAgICAgeyBwcmVzZW5jZSwgZG9taW5hdGlvbiwgY29udHJvbCB9XG5cbiAgICByZWdpb25TdGF0cyA9IF8uemlwT2JqZWN0IF8ucGx1Y2socmVnaW9ucywgJ2lkJyksIHJlZ2lvblN0YXRzXG4gICAgcmVnaW9uU3RhdHMgPSBfLmFzc2lnbiByZWdpb25TdGF0cyxcbiAgICAgIHByZXNlbmNlOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ3ByZXNlbmNlJyksIDBcbiAgICAgIGRvbWluYXRpb246IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnZG9taW5hdGlvbicpLCAwXG4gICAgICBjb250cm9sOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2NvbnRyb2wnKSwgMFxuICBcbiAgc3RhdHNcblxubW9kdWxlLmV4cG9ydHMgPSAoaXBzLCBjb3VudHJ5QXJyLCByZWdpb25BcnIpLT5cbiAgY291bnRyaWVzID0gZ2V0SXBTdGF0cyhpcHMsIGNvdW50cnlBcnIpXG4gIHJlZ2lvbnMgPSBnZXRSZWdpb25TdGF0cyhjb3VudHJpZXMsIHJlZ2lvbkFycilcbiAge2NvdW50cmllcywgcmVnaW9uc31cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChwb3dlciktPiBpZiBwb3dlciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHI9JycpLT4gc3RyLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyLCBsZW49MyktPiAoJzAwMCcgKyBzdHIpLnN1YnN0cigtbGVuLGxlbilcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdBYm91dFZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdhYm91dFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC04JywgW1xuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC0xMicsXG4gICAgICAgICAgICBSLmgyIHt9LCBbXG4gICAgICAgICAgICAgIFwiQWJvdXQgXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3R3aScsICdUd2knXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzdHJ1ZycsICdTdHJ1ZydcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIlR3aVN0cnVnIHdhcyBjcmVhdGVkIGFzIGEgY2FyZCByZWZlcmVuY2UgZm9yIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLFxuICAgICAgICAgICAgICAgIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgICBcIi4gSXQgaGFzIHNpbmNlIGV4cGFuZGVkIHRvIGluY2x1ZGUgYSBwbGF5YWJsZSB2ZXJzaW9uIG9mIHRoZSBib2FyZCBmb3JcbiAgICAgICAgICAgICAgbG9jYWwgZ2FtZXMgd2l0aG91dCB0YWtpbmcgdXAgYXMgbXVjaCB0YWJsZSBzcGFjZS5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiRm9yIG1vcmUgaW4tZGVwdGggc3RyYXRlZ3ksIGxvb2sgbm8gZnVydGhlciB0aGFuIHRoZSBpbmltaXRhYmxlIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgXCIuIEl0IGhhcyB0b25zIG9mIGdyZWF0IGNvbnRlbnQgYW5kXG4gICAgICAgICAgICAgIGFuYWx5c2lzIGF2YWlsYWJsZSwgaW5jbHVkaW5nIGRpc2N1c3Npb25zIGFib3V0IG5lYXJseSBldmVyeSBjYXJkLlxuICAgICAgICAgICAgICBQbGVhc2Ugc3VwcG9ydCBUd2lsaWdodCBTdHJhdGVneSBhbmQgaXRzIGF1dGhvciwgXCJcbiAgICAgICAgICAgICAgUi5lbSB7fSwgXCJ0aGVvcnlcIlxuICAgICAgICAgICAgICBcIiwgYnkgcHVyY2hhc2luZyBUd2lsaWdodCBTdHJ1Z2dsZSBmcm9tIEFtYXpvbiBvbiB0aGUgc2lkZWJhciBvZiBoaXNcbiAgICAgICAgICAgICAgc2l0ZSwgb3IgYnkgcGF5aW5nIHNvbWUgbW9uZXkgZm9yIHRoZSBhc3NvY2lhdGVkIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHBzOi8vbGVhbnB1Yi5jb20vdHdpbGlnaHRzdHJhdGVneVwiLCBcImUtYm9va1wiXG4gICAgICAgICAgICAgIFwiLiBJdCdzIFR3aWxpZ2h0IFN0cmF0ZWd5IGluIGJvb2sgZm9ybSBhbmQgZGVzZXJ2ZXMgeW91ciBtb25leS5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiVHdpU3RydWcgd2FzIG1hZGUgYnkgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL2pqdC5pby9cIiwgXCJKYXNvbiBUcmlsbFwiXG4gICAgICAgICAgICAgIFwiLiBTb3VyY2UgYXZhaWxhYmxlIG9uIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qanQvdHdpc3RydWdcIiwgXCJHaXRodWJcIlxuICAgICAgICAgICAgICBcIi5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICBSLmJsb2NrcXVvdGUge30sIFtcbiAgICAgICAgICAgICAgUi5wIHt9LCBcIlR3aWxpZ2h0IFN0cnVnZ2xlIGlzIGEgY2FyZCBkcml2ZW4gZ2FtZSBwbGF5ZWQgb3ZlciBhIG1heGltdW0gb2YgMTAgdHVybnMgW2VhY2ggd2l0aCA2IG9yIDcgcm91bmRzXS4gVGhlIGdhbWUgbWF5IGVuZCBzb29uZXIgKGFuZCBmcmVxdWVudGx5IGRvZXMpLlwiXG4gICAgICAgIFxuICAgICAgICAgICAgICBSLnAge30sIFwiW0l0XSBpcyBmdW5kYW1lbnRhbGx5IGEgZ2FtZSBhYm91dCBhcmVhIGNvbnRyb2wuIFRoZXJlIGFyZSBzaXggZ2VvcG9saXRpY2FsIHJlZ2lvbnMgb24gdGhlIG1hcDogRXVyb3BlIChzcGxpdCBpbnRvIEVhc3Rlcm4gYW5kIFdlc3Rlcm4gRXVyb3BlIHN1YnJlZ2lvbnMpLCBBc2lhIChpbmNsdWRpbmcgdGhlIFNvdXRoZWFzdCBBc2lhIHN1YnJlZ2lvbiksIHRoZSBNaWRkbGUgRWFzdCwgQWZyaWNhLCBDZW50cmFsIEFtZXJpY2EsIGFuZCBTb3V0aCBBbWVyaWNhLiBXaXRoaW4gZWFjaCByZWdpb24gYXJlIGNvdW50cmllcyB0aGF0IGhhdmUgYSBzdGFiaWxpdHkgbnVtYmVyLCByZXByZXNlbnRpbmcgaG93IHN0YWJsZSB0aGUgZ292ZXJubWVudCB0ZW5kcyB0byBiZS5cIlxuXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJIYXZpbmcgY29udHJvbCBvZiBjb3VudHJpZXMgaGVscHMgZGV0ZXJtaW5lIHdoZXRoZXIgeW91IGhhdmUgcHJlc2VuY2UsIGRvbWluYXRpb24sIG9yIGNvbnRyb2wgb2YgYSByZWdpb24sIHdoaWNoIGluIHR1cm4gaGVscHMgeW91IGVhcm4gdmljdG9yeSBwb2ludHMuIFdpdGhpbiBlYWNoIHJlZ2lvbiwgdGhlcmUgYXJlIGEgbnVtYmVyIG9mIGJhdHRsZWdyb3VuZCBjb3VudHJpZXMsIHdoaWNoIGFyZSBjb25zaWRlcmVkIGtleSB0byB0aGUgcmVnaW9uLlwiXG4gICAgICAgICAgICAgIFIucCB7fSxcbiAgICAgICAgICAgICAgICBSLmVtIHt9LFxuICAgICAgICAgICAgICAgICAgUi5hIGhyZWY6ICdodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20vdGhyZWFkLzQ3MTk1My9yb2dlcnMtcmV2aWV3cy1kZWx1eGUtdHdpbGlnaHQtc3RydWdnbGUtY29tcHJlaGVucycsICdGb3J1bSBwb3N0IGJ5IGxlcm95NDMnXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTQnLCBbXG4gICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nIGltZy1mbHVpZCBBYm91dFZpZXctdHNib3gnLCBzcmM6IFwiL2ltYWdlcy90c2JveC5qcGdcIlxuICAgICAgICBdXG4gICAgICBdXG5cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC0xMicsXG4gICAgICAgICAgUi5wIHt9LFxuICAgICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2ltZy1saW5rJywgaHJlZjogXCIvaW1hZ2VzL3RzYm9hcmQuanBnXCIsXG4gICAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZyBpbWctZmx1aWQgaW1nLWNlbnRlcicsIHNyYzogJy9pbWFnZXMvdHNib2FyZC1tZC5qcGcnXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnlWaWV3ID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkJ1xuXG5yZWR1Y2VTaG9ydGN1dHMgPSAoYXJyLCBzaG9ydGN1dCktPlxuICBhcnIucHVzaCBSLmR0IHt9LCBzaG9ydGN1dC5rZXlcbiAgYXJyLnB1c2ggUi5kZCB7fSwgc2hvcnRjdXQuZGVzY1xuICBhcnJcblxuXG5Cb2FyZEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBzY3JvbGxUb3A6IC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgd2luZG93LnNjcm9sbFRvIDAsMFxuICAgICwgMFxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgc2hvcnRjdXRzOlxuICAgICAgaXA6IFtcbiAgICAgICAgeyBrZXk6J2knLCBkZXNjOiAnRW50ZXIgSVAgcGxhY2VtZW50IGJ5IGtleWJvYXJkIChJUGJLKSBtb2RlJyB9XG4gICAgICAgIHsga2V5Oidlc2MnLCBkZXNjOiAnR28gXCJ1cFwiIChjb3VudHJ5IC0+IGNvbnRpbmVudCAtPiBleGl0IElQYksgbW9kZSknIH1cbiAgICAgICAgeyBrZXk6J2VudGVyJywgZGVzYzogJyhzYW1lIGFzIGFib3ZlKScgfVxuICAgICAgICB7IGtleTonYS9BJywgZGVzYzogJ1VTQSBpbmZsdWVuY2UgaW5jL2RlYyAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonci9SJywgZGVzYzogJ1VTU1IgaW5mbHVlbmNlIGluYy9kZWMgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J2VzYycsIGRlc2M6ICdDYW5jZWwgSVAgcGxhY2VtZW50ICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5OidlbnRlcicsIGRlc2M6ICdDb25maXJtIElQIHBsYWNlbWVudCAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgXVxuICAgICAgbGVmdDogW1xuICAgICAgICB7IGtleToncy9TJywgZGVzYzogJ1Njb3JlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2QvRCcsIGRlc2M6ICdEZWZjb24gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonbS9NJywgZGVzYzogJ1VTQSBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonby9PJywgZGVzYzogJ1VTU1IgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2gnLCBkZXNjOiAnU2hvdy9oaWRlIEFjdGlvbiBIaXN0b3J5JyB9XG4gICAgICAgIHsga2V5OidjJywgZGVzYzogJ1JvbGwgZGljZScgfVxuICAgICAgXVxuICAgICAgcmlnaHQ6IFtcbiAgICAgICAgeyBrZXk6J3QvVCcsIGRlc2M6ICdUdXJuIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3IvUicsIGRlc2M6ICdSb3VuZCBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidwL1AnLCBkZXNjOiAnVVNBIFNwYWNlIFJhY2UgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonYS9BJywgZGVzYzogJ1VTU1IgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5Oid6JywgZGVzYzogJ1VuZG8gKEFjdGlvbiBIaXN0b3J5KScgfVxuICAgICAgICB7IGtleToneScsIGRlc2M6ICdSZWRvIChBY3Rpb24gSGlzdG9yeSknIH1cbiAgICAgIF1cblxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBUd2lsaWdodCBTdHJ1Z2dsZSBib2FyZCdcbiAgICAgICAgICBSLnAge30sIFwiVGhpcyBpcyBhIGZ1bGx5IHBsYXlhYmxlIGJvYXJkIHdpdGggYSBtb3JlXG4gICAgICAgICAgICBjb21wYWN0IGxheW91dCB0byBmaXQgb24gc21hbGxlciBzY3JlZW5zLCBsaWtlIGEgQ2hyb21lYm9vayBvciBpUGFkLiBKdXN0IGFkZCBjYXJkc1xuICAgICAgICAgICAgYW5kIHlvdSdsbCBiZSBhYmxlIHRvIHBsYXkgYW55d2hlcmUuIFRoZSBib2FyZCBpc24ndCBhd2FyZSBvZiB0aGUgcnVsZXMsIG5vciB3aWxsXG4gICAgICAgICAgICBpdCBkbyBhbnl0aGluZyBhdXRvbWF0aWNhbGx5LiBVc2UgaXQgYXMgeW91IHdvdWxkIGEgcGh5c2ljYWwgY29weSBvZiB0aGUgZ2FtZS5cIlxuICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgXCJUaGlzIGdhbWUsIFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCIjL2JvYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICAgICAgICBSLmNvZGUge30sIEBwcm9wcy5pZFxuICAgICAgICAgICAgXCIsIHdpbGwgYmUgc2F2ZWQgaW4geW91ciBicm93c2VyIGFuZCBjYW4gYmUgYm9va21hcmtlZCBhbmQgcmVzdW1lZCBhdCBhIGxhdGVyIHRpbWUsIGV2ZW4gaWYgeW91IGNsb3NlIHlvdXIgYnJvd3Nlci4gXCJcbiAgICAgICAgICAgIFIuYSBvbkNsaWNrOiBAc2Nyb2xsVG9wLCBocmVmOicjL2JvYXJkJywgJ0NsaWNrIGhlcmUgdG8gc3RhcnQgYSBuZXcgZ2FtZSdcbiAgICAgICAgICAgICcuJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAge30sIFwiVGhlIFVSTCBjb250YWlucyB0aGUgY29tcGxldGUgc3RhdGUgb2YgdGhlIGJvYXJkIGFuZCB3aWxsXG4gICAgICAgICAgICB1cGRhdGUgd2l0aCBlYWNoIGFjdGlvbiB0YWtlbi4gVGhpcyBjYW4gYmUgdXNlZCB0byBwbGF5IHJlbW90ZWx5XG4gICAgICAgICAgICB3aXRoIHNvbWVvbmUgYnkgc2VuZGluZyB0aGUgVVJMIGJhY2sgYW5kIGZvcnRoLiBGb3JcbiAgICAgICAgICAgIGluc3RhbmNlLCBpZiB5b3Ugd2VyZSB0aGUgVVNTUiBzdGFydGluZyBhIG5ldyBnYW1lLCB5b3Ugd291bGQgcGxhY2UgeW91clxuICAgICAgICAgICAgaW5pdGlhbCBpbmZsdWVuY2UgdGhlbiBjb3B5IHRoZSBVUkwgYW5kIHNlbmQgaXQgdG8geW91ciBvcHBvbmVudC4gVGhleVxuICAgICAgICAgICAgd291bGQgZ28gdG8gdGhhdCBVUkwsIHBsYWNlIHRoZWlyIGluZmx1ZW5jZSBhbmQgc2VuZCB0aGUgbmV3IFVSTCBiYWNrIHRvIHlvdS4gTGF0aGVyLCByaW5zZSwgcmVwZWF0LlwiXG4gICAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJJbnN0cnVjdGlvbnNcIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyBhZGQvcmVtb3ZlIGluZmx1bmNlIGluIGEgY291bnRyeSwgY2xpY2sgaW4gdGhlIHRvcC9ib3R0b20gb2YgdGhlIGluZmx1ZW5jZSBzcGFjZSBvbiB0aGUgZGVzaXJlZCBzaWRlIChVU0Egb24gbGVmdCwgVVNTUiBvbiByaWdodCkuXCJcbiAgICAgICAgICBSLnAge30sIFwiVG8gdW5kby9yZWRvIG9uZSBvciBtb3JlIGFjdGlvbnMsIHByZXNzIFovWSBvbmUgb3IgbW9yZSB0aW1lcy5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgZGljZSBjYW4gYmUgcm9sbGVkIGluZGl2aWR1YWxseSBieSBjbGlja2luZyBvbiB0aGVtLCBvciBhcyBhIHBhaXIgYnkgY2xpY2tpbmcgb24gXFxcIlJPTEwgRElDRVxcXCIuXCJcbiAgICAgICAgICBSLnAge30sIFwiRWFjaCBzdXBlcnBvd2VyIGJveCAoVVNBLCBVU1NSKSBzaG93cyB0aGUgbnVtYmVyIG9mIGNvbnRyb2xsZWQgYmF0dGxlZ3JvdW5kIGNvdW50cmllcyBvbiB0b3AuIE9uIHRoZSBib3R0b20gaXQgc2hvd3MgdGhlIG51bWJlciBvZiByZWdpb25zIGluIHdoaWNoIHRoZSBwb3dlciBoYXMgcHJlc2VuY2UsIGRvbWluYXRpb24sIGFuZCBjb250cm9sLiBGb3IgZXhhbXBsZSwgaWYgdGhlIFVTU1IgaGFkIFxcXCI0IDIgMVxcXCIsIGl0IHdvdWxkIG1lYW4gdGhhdCB0aGV5IGhhdmUgcHJlc2VuY2UgaW4gNCByZWdpb25zLCBkb21pbmF0ZSAyLCBhbmQgY29udHJvbCAxLlwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJLZXlib2FyZCBTaG9ydGN1dHNcIlxuICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIGNvbC1sZy02JywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5sZWZ0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLnJpZ2h0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICAgICAgUi5oNCB7fSwgXCJJbmZsdWVuY2UgcGxhY2VtZW50IGJ5IGtleWJvYXJkXCJcbiAgICAgICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgQm9hcmRQYWdlLXNob3J0Y3V0cy1pcCcsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMuaXAsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0JvYXJkVmlldydcblxuICBzdGF0ZUhpc3Rvcnk6IG51bGxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQHN0YXRlSGlzdG9yeSA9IG5ldyBCb2FyZFN0YXRlSGlzdG9yeSBpZDogQHByb3BzLmdhbWVJZFxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFZpZXcnLCBbXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeVZpZXdcbiAgICAgICAgc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5XG4gICAgICAgIGtleTogXCJCb2FyZFN0YXRlSGlzdG9yeS0je0Bwcm9wcy5nYW1lSWR9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgQm9hcmQgXy5hc3NpZ24gc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5LCBAcHJvcHNcbiAgICAgICAgQm9hcmRJbmZvIGlkOiBAcHJvcHMuZ2FtZUlkXG4gICAgICBdXG4gICAgXVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRQaWNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYm9hcmRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXInLFxuICAgICAgICBSLmgyIHt9LCAnQm9hcmQnXG4gICAgICBSLmEgaHJlZjonL2ltYWdlcy90c2JvYXJkLmpwZycsXG4gICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ZsdWlkJywgc3JjOicvaW1hZ2VzL3RzYm9hcmQuanBnJ1xuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbm1vZHVsZS5leHBvcnRzICA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZFZpZXcnXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgICQod2luZG93KS5vbiAnc2Nyb2xsJywgQGZsb2F0aW5nQ2FyZFxuICAgICQod2luZG93KS5vbiAncmVzaXplJywgQGZsb2F0aW5nQ2FyZFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuICAgIEBnZXRTdHJhdGVneSgpXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IC0+XG4gICAgd2luZG93Lm9ua2V5cHJlc3MgPSBudWxsXG4gICAgJCh3aW5kb3cpLm9mZiAnc2Nyb2xsJywgQGZsb2F0aW5nQ2FyZFxuICAgICQod2luZG93KS5vZmYgJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleXByZXNzJywgQGhhbmRsZUtleVByZXNzXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPlxuICAgIEBnZXRTdHJhdGVneSgpXG4gICAgI0BzZXRXaW5kb3dLZXlwcmVzc0hhbmRsZXIoKVxuXG4gIGZsb2F0aW5nQ2FyZDogLT5cbiAgICAkaGVhZGVyID0gJCBAcmVmcy5oZWFkZXIuZ2V0RE9NTm9kZSgpXG4gICAgJGltZyA9ICQgQHJlZnMuY2FyZEltZy5nZXRET01Ob2RlKClcbiAgICAkd2luID0gJCB3aW5kb3dcbiAgICBobyA9ICRoZWFkZXIub2Zmc2V0KClcbiAgICBpc1Njcm9sbGluZyA9ICR3aW4uc2Nyb2xsVG9wKCkgPiBoby50b3AgKyBoby5oZWlnaHRcbiAgICAkaW1nLnRvZ2dsZUNsYXNzICdjYXJkLWltZy1zY3JvbGwnLCBpc1Njcm9sbGluZ1xuICAgICRpbWcuY3NzICdyaWdodCcsIFwiI3soJHdpbi53aWR0aCgpIC0gaG8ud2lkdGggLSAxNSkgLyAyfXB4XCJcblxuICBoYW5kbGVLZXlQcmVzczogKGV2KSAtPlxuICAgICAga0MgPSBldi5rZXlDb2RlXG4gICAgICBpZiBrQyA9PSAxMDQgb3Iga0MgPT0gNzJcbiAgICAgICAgaWQgPSBAcHJvcHMucHJldkNhcmQuaWRcbiAgICAgIGlmIGtDID09IDEwOCBvciBrQyA9PSA3NlxuICAgICAgICBpZCA9IEBwcm9wcy5uZXh0Q2FyZC5pZFxuICAgICAgaWYgaWQ/XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiIy9jYXJkLyN7aWR9XCJcblxuICBnZXRTdHJhdGVneTogLT5cbiAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIGRhdGEuLi48L3A+J1xuICAgICQuZ2V0IFwiL2RhdGEvY2FyZFN0cmF0ZWd5TGlua2VkLyN7bGlicy56ZXJvUGFkKEBwcm9wcy5jYXJkLmlkKX0uaHRtbFwiLCAoZGF0YSk9PlxuICAgICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSBkYXRhXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNhcmQgPSBAcHJvcHMuY2FyZFxuICAgIGltYWdlVXJsID0gXCIvaW1hZ2VzL2NhcmRzLyN7bGlicy56ZXJvUGFkKGNhcmQuaWQpfS5qcGdcIlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgY2xlYXJmaXgnLCByZWY6ICdoZWFkZXInLFxuICAgICAgICBSLmgyIGNsYXNzTmFtZTogbGlicy5jYXJkQ2xhc3NOYW1lKGNhcmQpLCBbXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1vcHMnLCBpZiBjYXJkLm9wcyA8IDEgdGhlbiBcIlNcIiBlbHNlIGNhcmQub3BzXG4gICAgICAgICAgXCIje2NhcmQudGl0bGV9IFwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1pZCcsIFwiIyN7Y2FyZC5pZH1cIlxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQtbmF2JywgW1xuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5wcmV2Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1wcmV2J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMucHJldkNhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJ+KXgCAnXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsICcoSCknXG4gICAgICAgICAgICAgICcgcHJldidcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLm5leHRDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LW5leHQnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5uZXh0Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICAnbmV4dCAnXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsICcoTCknXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICcg4pa2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgUi5wIHtjbGFzc05hbWU6ICdwdWxsLWxlZnQgY2FyZC1ib2R5J30sIGNhcmQudGV4dFxuICAgICAgUi5pbWcga2V5OiBpbWFnZVVybCwgc3JjOiBpbWFnZVVybCwgY2xhc3NOYW1lOiAnaW1nUmlnaHQnLCByZWY6J2NhcmRJbWcnXG4gICAgICBSLmRpdiB7Y2xhc3NOYW1lOiAnY2FyZC1zdHJhdGVneScsIGlkOiAnY2FyZC1zdHJhdGVneSd9LCBbXG4gICAgICAgIFIuaDMge30sIFtcbiAgICAgICAgICAnU3RyYXRlZ2ljIE5vdGVzIGZyb20nXG4gICAgICAgICAgJyAnXG4gICAgICAgICAgUi5hIGhyZWY6Y2FyZC51cmwsICdUd2lsaWdodFN0cmF0ZWd5LmNvbSdcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiByZWY6J2NhcmRTdHJhdGVneScsXG4gICAgICAgICAgUi5wIHt9LCAnTG9hZGluZyBkYXRhJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxuQ2FyZExpc3QgPSByZXF1aXJlICcuLi92aWV3cy9DYXJkTGlzdCdcblxuIyBXYXJnYW1lcm9vbSBjYXJkIGlkcyBkaWZmZXIgZnJvbSBUd2lTdHJ1ZyAoVFMgZGVsdXhlIGVkaXRpb24pXG5pZHNGcm9tV0dSID0gKGlkcz1bXSktPlxuICBpZHMubWFwIChpZCktPlxuICAgIHN3aXRjaCBpZFxuICAgICAgd2hlbiAzNSB0aGVuIDgxXG4gICAgICB3aGVuIDk4IHRoZW4gOTlcbiAgICAgIHdoZW4gOTkgdGhlbiAxMDBcbiAgICAgIHdoZW4gMTAwIHRoZW4gMzVcbiAgICAgIHdoZW4gMTAxIHRoZW4gMTAyXG4gICAgICB3aGVuIDEwMiB0aGVuIDEwM1xuICAgICAgd2hlbiAxMDcgdGhlbiAxMTBcbiAgICAgIHdoZW4gMTA5IHRoZW4gOThcbiAgICAgIHdoZW4gMTEwIHRoZW4gMTA0XG4gICAgICB3aGVuIDExMSB0aGVuIDEwOVxuICAgICAgd2hlbiAxMTIgdGhlbiAxMDdcbiAgICAgIGVsc2UgaWRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRzVmlldydcblxuICBkZWZhdWx0U3RhdGU6IChwcm9wcyktPlxuICAgIGZpbHRlciA9IHByb3BzPy5zdGF0ZT8uZmlsdGVyXG5cbiAgICBmdWxsVGV4dDogaWYgZmlsdGVyIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG4gICAgY2FyZEltZzogZmFsc2VcbiAgICBjYXJkRmlsdGVySW5wdXQ6IGlmIGZpbHRlciB0aGVuIGZpbHRlci5qb2luKCcgJykgZWxzZSAnJ1xuICAgIHNvcnQ6ICdzdGFnZSdcbiAgICBmaWx0ZXI6IG51bGxcbiAgICB2aWV3OiAnaW1nJ1xuICAgIGZpbHRlcklzV0dSOiBmYWxzZVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0UHJvcHMpIC0+XG4gICAgY29uc29sZS5sb2cgJ2NXUlAnLCBuZXh0UHJvcHNcbiAgICBpZiBuZXh0UHJvcHMuc3RhdGU/XG4gICAgICBAc2V0U3RhdGUgbmV4dFByb3BzLnN0YXRlXG4gICAgZWxzZVxuICAgICAgQHNldFN0YXRlIEBkZWZhdWx0U3RhdGUoKVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBfLm1lcmdlIEBkZWZhdWx0U3RhdGUoQHByb3BzKSwgQHByb3BzLnN0YXRlXG5cbiAgZ2V0RmlsdGVySWRzOiAoKSAtPlxuICAgIGlmIEBzdGF0ZT8uZmlsdGVyP1xuICAgICAgZmlsdGVySWRzID0gQHN0YXRlLmZpbHRlci5zb3J0KGxpYnMuc29ydE51bWVyaWNhbClcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclRydXRoeSlcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclVuaXF1ZSlcbiAgICBpZiBub3QgZmlsdGVySWRzPyB0aGVuIGZpbHRlcklkcyA9IFtdXG4gICAgcmV0dXJuIGZpbHRlcklkc1xuXG4gICMgSnVzdCBmaWx0ZXJpbmcgYnkgaWQgcmlnaHQgbm93XG4gIGdldEZpbHRlcmVkQ2FyZHM6IC0+XG4gICAgaWYgQHN0YXRlLmZpbHRlcj9cbiAgICAgIHJldHVybiBAcHJvcHMuY2FyZHMuZmlsdGVyIChlbCkgPT5cbiAgICAgICAgaWYgZWwuaWQgaW4gQHN0YXRlLmZpbHRlclxuICAgICAgICAgIHJldHVybiBlbFxuICAgIEBwcm9wcy5jYXJkc1xuICAgICAgICBcblxuICBmaWx0ZXJBbmRTb3J0Q2FyZHM6IC0+XG4gICAgY2FyZHMgPSBAZ2V0RmlsdGVyZWRDYXJkcygpXG4gICAgW3NvcnQsIG9yZGVyXSA9IEBzdGF0ZS5zb3J0LnNwbGl0ICctJ1xuXG4gICAgc29ydFBhcmFtID0gc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ3RleHRsZW4nIHRoZW4gKGVsKSAtPiBlbC50ZXh0Lmxlbmd0aFxuICAgICAgd2hlbiAnc2lkZScgdGhlbiBbJ293bmVyJywnc3RhZ2UnLCdpZCddXG4gICAgICB3aGVuICdvcHMnIHRoZW4gJ29wcydcbiAgICAgIHdoZW4gJ3RpdGxlbGVuJyB0aGVuIChlbCkgLT4gZWwudGl0bGUubGVuZ3RoXG4gICAgICBlbHNlIFsnc3RhZ2UnLCAnaWQnXVxuICAgIGNhcmRzID0gXy5zb3J0QnkgY2FyZHMsIHNvcnRQYXJhbVxuXG4gICAgaWYgb3JkZXIgPT0gJ3JldidcbiAgICAgIGNhcmRzLnJldmVyc2UoKVxuXG4gICAgY2FyZHNcblxuICBncm91cENhcmRzOiAoY2FyZHMgPSBAZmlsdGVyQW5kU29ydENhcmRzKCkpLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIFtjYXJkc11cblxuICAgIHNvcnQgPSBAc3RhdGUuc29ydFxuICAgIGlmIHNvcnQgPT0gJ3NpZGUnXG4gICAgICBzb3J0ID0gJ293bmVyJ1xuICAgIGlmIEBzdGF0ZS5zb3J0XG4gICAgICByZXR1cm4gXy5ncm91cEJ5KGNhcmRzLCBzb3J0KVxuICAgICAgICAgXG5cbiAgaGFuZGxlRnVsbFRleHQ6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBmdWxsVGV4dDogQHJlZnMuZnVsbFRleHQuZ2V0RE9NTm9kZSgpLmNoZWNrZWRcblxuICBoYW5kbGVDYXJkSW1nOiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgY2FyZEltZzogQHJlZnMuY2FyZEltZy5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2U6IC0+XG4gICAgdmFsdWUgPSBAcmVmcy5jYXJkRmlsdGVyLmdldERPTU5vZGUoKS52YWx1ZVxuICAgICMgSWYgV0dSIHRoZW4gd2UgaGF2ZSB0byB0cmFuc2xhdGUgc29tZSBpZHNcbiAgICBpc1dHUiA9IHZhbHVlLnNlYXJjaCgvIy4qOi8pICE9IC0xXG5cbiAgICAjIFdHUiBhZGRzIFwiT3BzIDM6IC4uLlwiLCBzbyBkb24ndCBwaWNrIHRob3NlIHVwXG4gICAgIyBCdXQgc3RpbGwgcGljayB1cCB0aGUgc2NvcmluZyBjYXJkc1xuICAgIGlkcyA9IHZhbHVlLm1hdGNoKC9cXGQrW146XXxcXGQrJHwjXFxkOi9nKT8ubWFwIChlbCktPlxuICAgICAgIyBTdHJpcCBvdXQgYW55IG5vbi1kaWdpdCBjaGFyc1xuICAgICAgZWwgPSBlbC5yZXBsYWNlIC9cXEQvZywgJydcbiAgICAgIHBhcnNlSW50IGVsLCAxMFxuICAgIGlmIHZhbHVlID09ICcnIG9yIG5vdCBpZHM/XG4gICAgICBzdGF0ZSA9XG4gICAgICAgIGNhcmRGaWx0ZXJJbnB1dDogdmFsdWVcbiAgICAgICAgZmlsdGVyOiBudWxsXG4gICAgZWxzZVxuICAgICAgaWYgaXNXR1JcbiAgICAgICAgaWRzID0gaWRzRnJvbVdHUiBpZHNcbiAgICAgIGlkcyA9IGlkcy5zb3J0KGxpYnMuc29ydE51bWVyaWNhbCkuZmlsdGVyKGxpYnMuZmlsdGVyVmFsaWRDYXJkSWRzKVxuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZ1bGxUZXh0OiB0cnVlXG4gICAgICAgIGZpbHRlcjogaWRzXG5cbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICAjIEZvcm1hdCB0aGUgaW5wdXQgZmllbGQgdG8gYmUganVzdCB0aGUgaWRzIG9uIGJsdXJcbiAgaGFuZGxlQ2FyZEZpbHRlckJsdXI6IC0+XG4gICAgZmlsdGVySWRzID0gQGdldEZpbHRlcklkcygpXG5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogZmlsdGVySWRzLmpvaW4gJyAnXG5cbiAgICBpZiBmaWx0ZXJJZHM/IGFuZCBmaWx0ZXJJZHMubGVuZ3RoID4gMFxuICAgICAgbGlicy5xcy5zZXQgJ2ZpbHRlcicsIGZpbHRlcklkc1xuICAgIGVsc2VcbiAgICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNsZWFyOiAoKS0+XG4gICAgQHJlZnMuY2FyZEZpbHRlci5nZXRET01Ob2RlKCkudmFsdWUgPSAnJ1xuICAgIEBzZXRTdGF0ZVxuICAgICAgZmlsdGVyOm51bGxcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogJydcblxuICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cbiAgc29ydEdyb3VwVGl0bGU6IChzb3J0ID0gQHN0YXRlLnNvcnQsIHZhbCktPlxuICAgIHZhbEludCA9IHBhcnNlSW50IHZhbCwgMTBcbiAgICBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAnb3BzJ1xuICAgICAgICBzID0gaWYgdmFsSW50ID4gMSB0aGVuICdzJyBlbHNlICcnXG4gICAgICAgIGlmIHZhbEludCA9PSAwIHRoZW4gJ1Njb3JpbmcnIGVsc2UgXCIje3ZhbH0gT3Aje3N9XCJcbiAgICAgIHdoZW4gJ3NpZGUnXG4gICAgICAgIGlmIHZhbCA9PSAndXMnXG4gICAgICAgICAgJ1VTQSdcbiAgICAgICAgZWxzZSBpZiB2YWwgPT0gJ25ldXRyYWwnXG4gICAgICAgICAgJ05ldXRyYWwnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB2YWwudG9VcHBlckNhc2UoKVxuICAgICAgd2hlbiAnc3RhZ2UnXG4gICAgICAgIHN3aXRjaCB2YWxJbnRcbiAgICAgICAgICB3aGVuIDEgdGhlbiAnRWFybHkgV2FyJ1xuICAgICAgICAgIHdoZW4gMiB0aGVuICdNaWQgV2FyJ1xuICAgICAgICAgIHdoZW4gMyB0aGVuICdMYXRlIHdhcidcblxuICBoYW5kbGVWaWV3Q2xpY2s6ICh2aWV3KS0+XG4gICAgQHNldFN0YXRlIHsgdmlldyB9XG4gICAgbGlicy5xcy5zZXQgJ3ZpZXcnLCB2aWV3XG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnNvbGUubG9nICdyZW5kZXInLCBAc3RhdGUsIEBwcm9wc1xuICAgIHNvcnRMaW5rID0gKHNvcnQsIGRpc3BsYXkpID0+XG4gICAgICBjbGFzc05hbWUgPSBjeCBhY3RpdmU6IEBzdGF0ZS5zb3J0ID09IHNvcnRcbiAgICAgIHJlZiA9IFwiI3tzb3J0fVNvcnRcIlxuICAgICAgb25DbGljayA9ICgpLT5cbiAgICAgICAgbGlicy5xcy5zZXQgJ3NvcnQnLCBzb3J0XG4gICAgICBSLmEge29uQ2xpY2ssIHJlZiwgY2xhc3NOYW1lfSwgZGlzcGxheVxuXG4gICAgY2FyZHMgPSBAZ3JvdXBDYXJkcyBAZmlsdGVyQW5kU29ydENhcmRzKClcblxuICAgIGNhcmRMaXN0cyA9IF8ubWFwIGNhcmRzLCAoY2FyZHMsIHZhbCk9PlxuICAgICAgY2FyZExpc3RIZWFkaW5nID0gbnVsbFxuICAgICAgaWYgbm90IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAgIGNhcmRMaXN0SGVhZGluZyA9IFIuaDIgY2xhc3NOYW1lOidjYXJkTGlzdC1ncm91cEhlYWRpbmcnLFxuICAgICAgICAgIEBzb3J0R3JvdXBUaXRsZSBAc3RhdGUuc29ydCwgdmFsXG4gICAgICBSLmRpdiB7fSwgW1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmdcbiAgICAgICAgQ2FyZExpc3RcbiAgICAgICAgICBjYXJkSW1nOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgIGZ1bGxUZXh0OiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICBjYXJkczogY2FyZHNcbiAgICAgICAgICB2aWV3OiBAc3RhdGUudmlld1xuICAgICAgXVxuXG4gICAgY2FyZHNWaWV3Q2xhc3MgPSBjeFxuICAgICAgJ2NhcmRzVmlldyc6IHRydWVcbiAgICAgICdjYXJkc1ZpZXctLWZpbHRlcmVkJzogQHN0YXRlLmZpbHRlcj9cbiAgICAgICdjYXJkc1ZpZXctLWZ1bGxUZXh0JzogQHN0YXRlLmZ1bGxUZXh0XG5cbiAgICBSLmRpdiBjbGFzc05hbWU6IGNhcmRzVmlld0NsYXNzLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciByb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdsYWJlbCcsICdTb3J0IGJ5OidcbiAgICAgICAgICAgIHNvcnRMaW5rICdzdGFnZScsICdTdGFnZSdcbiAgICAgICAgICAgIHNvcnRMaW5rICdvcHMnLCAnT3BzJ1xuICAgICAgICAgICAgc29ydExpbmsgJ3NpZGUnLCAnU2lkZSdcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZENvbnRyb2xzJywgW1xuICAgICAgICAgICAgUi5sYWJlbCB7aHRtbEZvcjonJywgY2xhc3NOYW1lOicnfSwgJ1ZpZXc6ICdcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ2ltZydcbiAgICAgICAgICAgICAgdGl0bGU6ICdDYXJkIGltYWdlJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi10aC1sYXJnZSAje2lmIEBzdGF0ZS52aWV3ID09ICdpbWcnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAndGl0bGUnXG4gICAgICAgICAgICAgIHRpdGxlOiAnVGl0bGUgYW5kIG9wcydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGggI3tpZiBAc3RhdGUudmlldyA9PSAndGl0bGUnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAndGV4dCdcbiAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIHRleHQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLWFsaWduLWxlZnQgI3tpZiBAc3RhdGUudmlldyA9PSAndGV4dCcgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICAjUi5pbnB1dFxuICAgICAgICAgICAgICAjbmFtZTogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjaWQ6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI29uQ2hhbmdlOiBAaGFuZGxlRnVsbFRleHRcbiAgICAgICAgICAgICAgI2NoZWNrZWQ6IEBzdGF0ZS5mdWxsVGV4dFxuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonZnVsbFRleHQnLCBjbGFzc05hbWU6J2NhcmQtc2hvdy10ZXh0LWxhYmVsJ30sICdTaG93IGNhcmQgdGV4dCdcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdjYXJkSW1nJ1xuICAgICAgICAgICAgICAjaWQ6ICdjYXJkSW1nJ1xuICAgICAgICAgICAgICAjdHlwZTonY2hlY2tib3gnXG4gICAgICAgICAgICAgICNyZWY6J2NhcmRJbWcnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUNhcmRJbWdcbiAgICAgICAgICAgICAgI2NoZWNrZWQ6IEBzdGF0ZS5jYXJkSW1nXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmxhYmVsIHtodG1sRm9yOidjYXJkSW1nJywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIGltYWdlJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkcy1maWx0ZXItYnktaWQgY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5sYWJlbCBodG1sRm9yOidjYXJkRmlsdGVyJywgY2xhc3NOYW1lOidjYXJkRmlsdGVyLWxhYmVsJywgXCJGaWx0ZXIgYnkgaWRzIFwiXG4gICAgICAgICAgUi5pbnB1dFxuICAgICAgICAgICAgbmFtZTogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcmRGaWx0ZXItaW5wdXQnXG4gICAgICAgICAgICByZWY6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgb25DaGFuZ2U6IEBoYW5kbGVDYXJkRmlsdGVyQ2hhbmdlXG4gICAgICAgICAgICBvbkJsdXI6IEBoYW5kbGVDYXJkRmlsdGVyQmx1clxuICAgICAgICAgICAgdmFsdWU6IEBzdGF0ZS5jYXJkRmlsdGVySW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzdGUgZnJvbSBXYXJnYW1lcm9vbSBvciBlbnRlciBpZHMnXG4gICAgICAgICAgUi5hIHtjbGFzc05hbWU6J2NhcmRzLWZpbHRlci1ieS1pZC1jbGVhcicsIG9uQ2xpY2s6QGhhbmRsZUNhcmRGaWx0ZXJDbGVhcn0sICdjbGVhcidcbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgY2FyZExpc3RzXG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NvdW50cmllc1ZpZXcgJ1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY291bnRyaWVzVmlldycsIFtcbiAgICAgIFIuaDIge30sICdDb3VudHJpZXMnXG4gICAgXVxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5TdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL1N0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5VmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmQgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0dhbWVQYWdlJ1xuXG4gIHN0YXRlSGlzdG9yeTogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICBAc3RhdGVIaXN0b3J5ID0gbmV3IEJvYXJkU3RhdGVIaXN0b3J5IGlkOiBAcHJvcHMuZ2FtZUlkXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHdpZHRoOiAxMTQwXG4gICAgaGVpZ2h0OiA3MzBcbiAgICBub2RlOlxuICAgICAgd2lkdGg6IDY2XG4gICAgICBoZWlnaHQ6IDUwXG4gICAgICBndXR0ZXI6IDE0XG4gICAgICB0aXRsZUhlaWdodDogMTZcbiAgICAgIHRpdGxlRm9udFNpemU6IDEyXG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkVmlldycsIFtcbiAgICAgIEJvYXJkU3RhdGVIaXN0b3J5Vmlld1xuICAgICAgICBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnlcbiAgICAgICAga2V5OiBcIkJvYXJkU3RhdGVIaXN0b3J5LSN7QHByb3BzLmdhbWVJZH1cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgW1xuICAgICAgICBCb2FyZCBfLmFzc2lnbiBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnksIEBwcm9wc1xuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnSG9tZVZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdIb21lVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLXhzLTEyJywgW1xuICAgICAgICAgIFIuaDEgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInR3aSBvd25lci11c1wiLCBcIlR3aVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInN0cnVnIG93bmVyLXVzc3JcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQgYmx1cmInLCBbXG4gICAgICAgICAgICBcIlR3aVN0cnVnIGlzIGEgY29tcGFuaW9uIGFwcGxpY2F0aW9uIGZvciBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgXCIuIEl0IHdvdWxkIG5vdCBleGlzdCB3aXRob3V0IFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgICAgICBcIi5cIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rJywgaHJlZjogJyMvYm9hcmQnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBCb2FyZCdcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWJvYXJkLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0Z1bGx5IHBsYXlhYmxlIGJvYXJkIC0ganVzdCBhZGQgY2FyZHMnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdob21lLWxpbmsgaG9tZS1saW5rLWNhcmRzJywgaHJlZjogJyMvY2FyZHMnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlldyBDYXJkcydcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWNhcmRzLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0V4cGxvcmUgdGhlIGNhcmRzIG9mIFR3aWxpZ2h0IFN0cnVnZ2xlJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnV2hvb3BzVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmgyIHt9LCBcIkRFRkNPTiAxXCJcbiAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQnLCBbXG4gICAgICAgIFwiTG9va3MgbGlrZSBUd2lTdHJ1ZyB0cmlnZ2VyZWQgbnVjbGVhciB3YXIuIFdIT09QU0lFIERBSVNZIVwiXG4gICAgICAgIFIuYnIge31cbiAgICAgICAgUi5hIGhyZWY6XCIjL2NhcmRzXCIsIFwiSG93IGFib3V0IGxvb2tpbmcgb3ZlciB0aGUgY2FyZHM/XCJcbiAgICAgIF1cbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwidmVudCA9IHJlcXVpcmUgJy4vdmVudCdcbm1hcERhdGF2MiA9IHJlcXVpcmUgJy4uL2FwcC9kYXRhL21hcC1kYXRhLXYyLmpzb24nXG5vbmVMZXR0ZXJDb250aW5lbnRDb2RlID0gcmVxdWlyZSAnLi9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUnXG5zZXRQYWdlVGl0bGUgPSByZXF1aXJlICcuL2xpYnMvc2V0UGFnZVRpdGxlJ1xucXMgPSByZXF1aXJlICcuL2xpYnMvcXMnXG5cbnNldFJvdXRlT3JpZ2luYWwgPSBSb3V0ZXI6OnNldFJvdXRlXG5Sb3V0ZXI6OnNldFJvdXRlID0gLT5cbiAgQGN1cnJlbnRSb3V0ZSA9IEBnZXRSb3V0ZSgpXG4gIHNldFJvdXRlT3JpZ2luYWwuYXBwbHkgdGhpcywgYXJndW1lbnRzXG5cblxubW9kdWxlLmV4cG9ydHMgPVxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm91dGVyOiBuZXcgUm91dGVyXG5cbiAgIyBUYWtlcyBhIHZpZXcgbmFtZSBhbmQgYXNzb2NpYXRlZCBkYXRhXG4gIHNldFZpZXc6IChuYW1lLCB0aXRsZSwgbWVudUFjdGl2ZT0nJywgZGF0YT17fSkgLT5cbiAgICBpZiB0aXRsZT8gdGhlbiBzZXRQYWdlVGl0bGUgdGl0bGVcbiAgICBAc2V0U3RhdGVcbiAgICAgIHZpZXc6IHtuYW1lLCBkYXRhLCB0aXRsZX1cbiAgICAgIG1lbnVBY3RpdmU6IG1lbnVBY3RpdmVcbiAgICAgIHNsaWRlSW46IEBzdGF0ZS52aWV3Py5uYW1lICE9IG5hbWVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cblxuICAgIHN0YXRlUm91dGUgPSAobmFtZSwgcGFnZVRpdGxlLCBtZW51QWN0aXZlLCBhcmdzKT0+XG4gICAgICBzdGF0ZSA9IHFzLnRvT2JqIGFyZ3NcbiAgICAgICMgQ29udmVydCBmaWx0ZXIgaWRzIGZyb20gc3RyIC0+IG51bWJlclxuICAgICAgaWYgc3RhdGU/LmZpbHRlcj9cbiAgICAgICAgaWYgbm90IF8uaXNBcnJheSBzdGF0ZS5maWx0ZXJcbiAgICAgICAgICBzdGF0ZS5maWx0ZXIgPSBbc3RhdGUuZmlsdGVyXVxuICAgICAgICBzdGF0ZS5maWx0ZXIgPSBzdGF0ZS5maWx0ZXIubWFwIChlbCktPlxuICAgICAgICAgIHBhcnNlSW50IGVsLCAxMFxuICAgICAgQHNldFZpZXcgbmFtZSwgcGFnZVRpdGxlLCBtZW51QWN0aXZlLFxuICAgICAgICBzdGF0ZTogc3RhdGVcblxuICAgIHJvdXRlciA9IEBwcm9wcy5yb3V0ZXJcblxuICAgIHZlbnQub24gJ3NldFJvdXRlJywgcm91dGVyLnNldFJvdXRlLmJpbmQgcm91dGVyXG5cbiAgICByb3V0ZXIuY29uZmlndXJlXG4gICAgICBub3Rmb3VuZDogQHNldFZpZXcuYmluZCB0aGlzLCAnd2hvb3BzJywgJ1dob29wcydcbiAgICAgICMnL2JvYXJkJzogQHNldFZpZXcuYmluZCB0aGlzLCAnYm9hcmQnLCAnQm9hcmQnXG5cbiAgICByb3V0ZXIub24gJy8nLCBAc2V0Vmlldy5iaW5kIHRoaXMsICdob21lJywgJ0hvbWUnXG5cblxuICAgIHJvdXRlci5vbiAnL2NhcmQvOmlkJywgKGlkKT0+XG4gICAgICBpZCA9IHBhcnNlSW50IGlkLCAxMFxuICAgICAgbmV4dElkID0gaWYgaWQgPT0gMTEwIHRoZW4gMSBlbHNlIGlkICsgMVxuICAgICAgcHJldklkID0gaWYgaWQgPT0gMSB0aGVuIDExMCBlbHNlIGlkIC0gMVxuICAgICAgY2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBpZFxuICAgICAgbmV4dENhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogbmV4dElkXG4gICAgICBwcmV2Q2FyZCA9ICBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogcHJldklkXG4gICAgICBwYWdlVGl0bGUgPSBcIiN7Y2FyZC50aXRsZX0gKCMje2NhcmQuaWR9KVwiXG4gICAgICBAc2V0VmlldyAnY2FyZCcsIHBhZ2VUaXRsZSwgJ2NhcmRzJywge2NhcmQsIG5leHRDYXJkLCBwcmV2Q2FyZH1cblxuXG4gICAgcm91dGVyLm9uICcvY291bnRyaWVzJywgQHNldFZpZXcuYmluZCB0aGlzLCAnY291bnRyaWVzJywgJ0NvdW50cmllcycsICdjb3VudHJpZXMnXG5cblxuICAgIHJvdXRlci5vbiAnL2Fib3V0JywgQHNldFZpZXcuYmluZCB0aGlzLCAnYWJvdXQnLCAnQWJvdXQnLCAnYWJvdXQnXG5cblxuICAgIHJvdXRlci5vbiAvY2FyZHNcXD8/KC4qKS8sICgpPT5cbiAgICAgICMgSWYgd2UncmUgb24gYSBzbWFsbCBzY3JlZW4sIHJlZGlyIHRoZSB1c2VyIHRvIHZpZXc9dGl0bGVcbiAgICAgIHBhZ2VRUyA9IHFzLnRvT2JqKClcbiAgICAgIGlmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4IGFuZCBub3QgcGFnZVFTPy52aWV3P1xuICAgICAgICBxcy5zZXQoJ3ZpZXcnLCd0aXRsZScpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBzdGF0ZVJvdXRlICdjYXJkcycsICdDYXJkcycsICdjYXJkcydcblxuXG4gICAgcm91dGVyLm9uIC9nYW1lXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuXG4gICAgICBpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgZ2FtZUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiR2FtZSAje2dhbWVJZH1cIiwgXCIjL2dhbWUvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlTaG9ydGN1dHMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhdjJcblxuICAgICAgIyBDb3VudHJpZXMgYW5kIHJlZ2lvbiBpbmZvIG5vZGVzIGNvbWJpbmVkXG4gICAgICBub2RlcyA9IF8udW5pb24gY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXNcblxuICAgICAgcHJvcHMgPSB7XG4gICAgICAgIGdhbWVJZCwgY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMsIGxpbmtzLCBub2Rlc1xuICAgICAgICBpbmNvbWluZ1N0YXRlLCBjb3VudHJ5U2hvcnRjdXRzfVxuXG4gICAgICBAc2V0VmlldyAnZ2FtZScsICdHYW1lJywgJ2dhbWUnLCBwcm9wc1xuICAgICAgY29uc29sZS5sb2cgJ0dBTUUgUk9VVEUnXG5cblxuICAgIHJvdXRlci5vbiAvYm9hcmRcXC8/KFxcdyopXFwvPyguKikvLCAoZ2FtZUlkLCBpbmNvbWluZ1N0YXRlKT0+XG4gICAgICBpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgZ2FtZUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiQm9hcmQgI3tnYW1lSWR9XCIsIFwiIy9ib2FyZC8je2dhbWVJZH1cIlxuXG4gICAgICB7Y291bnRyeVNob3J0Y3V0cywgY291bnRyaWVzLCBsaW5rcywgcmVnaW9uSW5mb05vZGVzfSA9IG1hcERhdGF2MlxuXG4gICAgICAjIENvdW50cmllcyBhbmQgcmVnaW9uIGluZm8gbm9kZXMgY29tYmluZWRcbiAgICAgIG5vZGVzID0gXy51bmlvbiBjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2Rlc1xuXG4gICAgICBib2FyZFByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXNcbiAgICAgICAgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIub24gLyhhY2Nlc3NfdG9rZW4uKikvLCAocXMpPT5cbiAgICAgIGNvbnNvbGUubG9nIHFzXG5cblxuICAgIHJvdXRlci5pbml0KCcvJylcblxuIiwiTWljcm9FdmVudENsYXNzID0gcmVxdWlyZSAnLi9saWJzL01pY3JvRXZlbnRDbGFzcydcbmNsYXNzIFZlbnQgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbnZlbnQgPSBuZXcgVmVudCgpXG53aW5kb3cudmVudCA9IHZlbnRcbm1vZHVsZS5leHBvcnRzID0gdmVudFxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnZlbnQgPSByZXF1aXJlICcuLi92ZW50J1xuXG5zdXBlclN0YXRzID0gcmVxdWlyZSAnLi4vbGlicy9zdXBlclN0YXRzJ1xucmFuZ2VkR2FtZVZhbCA9IHJlcXVpcmUgJy4uL2xpYnMvcmFuZ2VkR2FtZVZhbCdcbnNpZ25lZE51bU9yRGFzaCA9IHJlcXVpcmUgJy4uL2xpYnMvc2lnbmVkTnVtT3JEYXNoJ1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi4vbGlicy9zdGF0ZUVuY29kZXInXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4uL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZSdcbmNvbnRpbmVudENvZGVGcm9tTGV0dGVyID0gcmVxdWlyZSAnLi4vbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlcidcbmZpbHRlclRydXRoeSA9IHJlcXVpcmUgJy4uL2xpYnMvZmlsdGVyVHJ1dGh5J1xuXG5Cb2FyZE5vZGUgPSByZXF1aXJlICcuL0JvYXJkTm9kZSdcbkJvYXJkTm9kZURpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlRGl2J1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cblxuc3VwZXJwb3dlclRvSW5kZXggPSAoc3RyKS0+IGlmIHN0ciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG5cbiMgUmV0dXJucyBhIHNpbXBsZSB7dXNhOiAncHJlc2VuY2UnLCB1c3NyOiAnZG9taW5hdGlvbid9XG5nZXRSZWdpb25TdGF0dXMgPSAoc3RhdHMpLT5cbiAgXy5tYXBWYWx1ZXMgc3RhdHMsIChzdGF0KS0+XG4gICAgcmV0dXJuICdjb250cm9sJyBpZiBzdGF0LmNvbnRyb2xcbiAgICByZXR1cm4gJ2RvbWluYXRpb24nIGlmIHN0YXQuZG9taW5hdGlvblxuICAgIHJldHVybiAncHJlc2VuY2UnIGlmIHN0YXQucHJlc2VuY2VcbiAgICByZXR1cm4gZmFsc2VcblxuXG5cblxuY29udGluZW50U2hvcnRjdXREYXRhID0gW1xuICB7IGNoYXI6ICdDJywgeDoxMjcsIHk6MjAwIH1cbiAgeyBjaGFyOiAnUycsIHg6MTI3LCB5OjUxMCB9XG4gIHsgY2hhcjogJ0YnLCB4OjUzMywgeTo1NTAgfVxuICB7IGNoYXI6ICdFJywgeDo0ODAsIHk6MjIwIH1cbiAgeyBjaGFyOiAnQScsIHg6ODQwLCB5OjE1MCB9XG4gIHsgY2hhcjogJ00nLCB4Ojg0MCwgeTozODAgfVxuXVxuXG5cbiMgVGFrZXMgYW4gaXBLZXlTZXF1ZW5jZSBhbmQgcmV0dXJucyB0aGUgYXBwbGljYWJsZSBjb250aW5lbnQgYW5kIGNvdW50cnlcbmNvbnRDb3VudHJ5U2VsZWN0aW9uID0gKHJlZ2lvbnMsIGNvdW50cmllcywgaXBLZXlTZXEgPSAnJyktPlxuICBjb250aW5lbnQgPSBfLmZpbmQgcmVnaW9ucywge3Nob3J0Y3V0OiBpcEtleVNlcS5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKX1cbiAgY291bnRyeSA9ICcnXG4gIGNvdW50cnlLZXkgPSBpcEtleVNlcS5zbGljZSgyLDQpXG4gIGlmIGNvdW50cnlLZXkubGVuZ3RoID09IDJcbiAgICBjb3VudHJ5T2JqID0gXy5maW5kIGNvdW50cmllcywge3Nob3J0Y3V0OiBjb3VudHJ5S2V5LnRvTG93ZXJDYXNlKCksIGNvbnRpbmVudDogY29udGluZW50Py5jb250aW5lbnR9XG4gICAgY291bnRyeSA9IGNvdW50cnlPYmouc2hvcnRuYW1lXG4gIGlmIGNvdW50cnlLZXkubGVuZ3RoID09IDFcbiAgICBjb3VudHJ5ID0gXCIje2NvdW50cnlLZXkudG9VcHBlckNhc2UoKX0uLi5cIlxuXG4gIHsgY29udGluZW50LCBjb3VudHJ5IH1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkJ1xuXG4gIGdldEluaXRpYWxTdGF0ZTogKHByb3BzID0gQHByb3BzKSAtPlxuICAgIHN0YXRlSGlzdG9yeSA9IHByb3BzLnN0YXRlSGlzdG9yeVxuICAgIHN0YXRlSGlzdG9yeS5sb2FkKClcbiAgICBzdGF0ZSA9IEBoYW5kbGVJbmNvbWluZ1N0YXRlIHByb3BzLmluY29taW5nU3RhdGVcbiAgICBpZiBub3Qgc3RhdGU/XG4gICAgICBzdGF0ZSA9IHN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KCk/LnN0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgZ2FtZVN0YXRlID1cbiAgICAgICAgZ2FtZTpcbiAgICAgICAgICBzY29yZTogMFxuICAgICAgICAgIHR1cm46IDBcbiAgICAgICAgICByb3VuZDogMFxuICAgICAgICAgIGRlZmNvbjogNVxuICAgICAgICAgIG1pbG9wczogWzAsMF1cbiAgICAgICAgICBzcGFjZTogWzAsMF1cbiAgICAgICAgaXBzOiBfLm1hcCBwcm9wcy5jb3VudHJpZXMsIChjKS0+IFtjLnVzYSwgYy51c3NyXVxuXG4gICAgICBtZXRhID1cbiAgICAgICAgdHlwZTogJ3R1cm4nXG4gICAgICAgIGlkOiAndHVybidcbiAgICAgICAgbmV3R2FtZTogdHJ1ZVxuICAgICAgICBuZXc6IDBcbiAgICAgICAgb2xkOjBcblxuICAgICAgc3RhdGVIaXN0b3J5LmFkZCBnYW1lU3RhdGUsIG1ldGFcbiAgICAgIHN0YXRlID0gZ2FtZVN0YXRlXG5cbiAgICBfLmFzc2lnbiBzdGF0ZSxcbiAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgIGlwS2V5U2VxdWVuY2U6ICcnXG4gICAgICBpcFNob3dDb250aW5lbnQ6ICcnXG4gICAgICBpcElQQ2hhbmdlOiBbXVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuICAgIHN0YXRlID0gQGdldEluaXRpYWxTdGF0ZSBuUFxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICB7c3RhdGVIaXN0b3J5LCBnYW1lSWR9ID0gQHByb3BzXG5cbiAgICAjIFdoZW4gc3RhdGUgY2hhbmdlcywgZW1pdCBldmVudCBmb3IgdGhlIHJvdXRlciB0byBwaWNrIHVwXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdjaGFuZ2UnLCA9PlxuICAgICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgaWYgc3RhdGU/IGFuZCBub3Qgc3RhdGUubWV0YS5uZXdHYW1lXG4gICAgICAgIHN0YXRlRW5jID0gc3RhdGVIaXN0b3J5LmVuY29kZUN1cnJlbnQoKVxuICAgICAgICB2ZW50LmVtaXQgJ2JvYXJkU3RhdGVDaGFuZ2UnLCBnYW1lSWQsIHN0YXRlRW5jXG5cbiAgICBzdGF0ZUhpc3Rvcnkub24gJ2dvVG8nLCAoc3RhdGUpPT5cbiAgICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuXG4gICAgQGtwSFQgPSBfLnRocm90dGxlIEBrZXlwcmVzc0hhbmRsZXIsIDEwMFxuICAgIEBrdUhUID0gXy50aHJvdHRsZSBAa2V5dXBIYW5kbGVyLCAxMDBcbiAgICBAa2RIVCA9IF8udGhyb3R0bGUgQGtleWRvd25IYW5kbGVyLCAxMDBcblxuICAgICQoZG9jdW1lbnQpLm9uICdrZXlwcmVzcycsIEBrcEhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleXVwJywgQGt1SFRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5ZG93bicsIEBrZEhUXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IC0+XG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBrcEhUXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlkb3duJywgQGtkSFRcblxuICBoYW5kbGVJbmNvbWluZ1N0YXRlOiAoc3RhdGVFbmNvZGVkID0gQHByb3BzLmluY29taW5nU3RhdGUpIC0+XG4gICAgaW5kZXggPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmZpbmRTdGF0ZUluZGV4IHN0YXRlOiBzdGF0ZUVuY29kZWRcbiAgICBpZiBpbmRleD9cbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpbmRleFxuICAgICAgY3VycmVudCA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpXG4gICAgICByZXR1cm4gY3VycmVudC5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgaWYgc3RhdGVFbmNvZGVkPyBhbmQgc3RhdGVFbmNvZGVkICE9ICcnIGFuZCBjdXJyZW50Py5tZXRhLnN0YXRlICE9IHN0YXRlRW5jb2RlZFxuICAgICAgICBzdGF0ZSA9IHN0YXRlRW5jb2Rlci5kZWNvZGUgc3RhdGVFbmNvZGVkXG4gICAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIHN0YXRlLFxuICAgICAgICAgIHR5cGU6ICdsb2FkJ1xuICAgICAgICAgIGlkOiAnbG9hZCdcbiAgICAgICAgICBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgICAgIHJldHVybiBzdGF0ZVxuXG5cbiAgIyBBZGRzIHRoZSBzdGF0ZSB0byB0aGUgaGlzdG9yeVxuICAjIFRoaXMgaXMgdG8gYXZvaWQgaGF2aW5nIHRvIGRlZXAtY2hlY2sgdGhlIHN0YXRlIGluIGNvbXBvbmVudFdpbGxVcGRhdGVcbiAgc2V0U3RhdGVIaXN0b3J5OiAoc3RhdGUsIG1ldGEpLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSwgbWV0YVxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gIGtleXByZXNzSGFuZGxlcjogKGV2KS0+XG4gICAga0MgPSBldi5rZXlDb2RlXG4gICAgZGlyID0gaWYga0MgPj0gOTcgdGhlbiAnaW5jJyBlbHNlICdkZWMnXG5cbiAgICBpZiBAc3RhdGUuaXBLZXlTZXF1ZW5jZS5sZW5ndGggPiAwXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uoa0MpXG5cbiAgICBpZiBrQyA9PSAxMDUgb3Iga0MgPT0gNzNcbiAgICAgIHJldHVybiBAaXBLZXlTZXF1ZW5jZSBrQ1xuICAgICAgcmV0dXJuXG5cbiAgICBzd2l0Y2gga0NcbiAgICAgICMgKGMvQykgRGljZVxuICAgICAgd2hlbiA5OSwgNjdcbiAgICAgICAgQHJlZnMuQm9hcmRTdGF0dXMucm9sbERpY2UoKVxuXG4gICAgICAjIEhpc3RvcnlcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIyAoei9aKSBVbmRvXG4gICAgICB3aGVuIDEyMiwgOTBcbiAgICAgICAgQHVuZG9IaXN0KClcbiAgICAgICMgKHkvWSkgUmVkb1xuICAgICAgd2hlbiAxMjEsIDg5XG4gICAgICAgIEByZWRvSGlzdCgpXG4gICAgICAjIChoL0gpIEhpc3Rvcnkgc2hvdy9oaWRlXG4gICAgICB3aGVuIDEwNCwgNzJcbiAgICAgICAgQHRvZ2dsZUhpc3QoKVxuXG4gICAgICAjIEdhbWUgcHJvcGVydGllc1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIyAodC9UKSBUdXJuIGluYy9kZWNcbiAgICAgIHdoZW4gMTE2LCA4NFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3R1cm4nLCBkaXJcbiAgICAgICMgKHIvUikgUm91bmQgaW5jL2RlY1xuICAgICAgd2hlbiAxMTQsIDgyXG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAncm91bmQnLCBkaXJcbiAgICAgICMgKFMvcykgU2NvcmUgaW5jL2RlY1xuICAgICAgd2hlbiAxMTUsIDgzXG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnc2NvcmUnLCBkaXJcbiAgICAgICMgKEQvZCkgRGVmY29uIGluYy9kZWNcbiAgICAgIHdoZW4gMTAwLCA2OFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ2RlZmNvbicsIGRpclxuICAgICAgIyAoTS9tKSBVU0EgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTA5LCA3N1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3VzYSdcbiAgICAgICMgKE8vbykgVVNTUiBNaWxPcHMgaW5jL2RlY1xuICAgICAgd2hlbiAxMTEsIDc5XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnbWlsb3BzJywgZGlyLCAndXNzcidcbiAgICAgICMgKFAvcCkgVVNBIFNwYWNlIGluYy9kZWNcbiAgICAgIHdoZW4gMTEyLCA4MFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNhJ1xuICAgICAgIyAoQS9hKSBVU1NSIFNwYWNlIGluYy9kZWNcbiAgICAgIHdoZW4gOTcsIDY1XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnc3BhY2UnLCBkaXIsICd1c3NyJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuXG4gICMgRXNjIGRvZXNuJ3QgdHJpZ2dlciBvbiBrZXlwcmVzcywgc28gaXQgaGFzIHRvIGJlIGtleXVwXG4gIGtleXVwSGFuZGxlcjogKGV2KS0+XG4gICAgaWYgZXYua2V5Q29kZSA9PSAyN1xuICAgICAgQHByb3BzLnN0YXRlSGlzdG9yeS50b2dnbGVWaXNpYmxlKGZhbHNlKVxuICAgIGlmIGV2LmtleUNvZGUgPT0gMjcgb3IgKDM3IDw9IGV2LmtleUNvZGUgPD0gNDApXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2UgZXYua2V5Q29kZSwgZXZcbiAgICAjaWYgZXYua2V5Q29kZSA9PSAyN1xuICAgICAgI0BjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgI3JldHVyblxuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gZmFsc2VcblxuICBrZXlkb3duSGFuZGxlcjogKGV2KS0+XG4gICAgaWYgZXYua2V5Q29kZSA9PSA4IG9yIGV2LmtleUNvZGUgPT0gMTNcbiAgICAgIEBpcEtleVNlcXVlbmNlKGV2LmtleUNvZGUpXG4gICAgICAjIFByZXZlbnQgYmFja3NwYWNlIGZyb20gbmF2aWdhdGluZyB0aGUgcGFnZVxuICAgICAgIyBPcmlkaW5hcmlseSBJIGRvbid0IGxpa2UgdGFraW5nIG92ZXIgYnJvd3NlciBzaG9ydGN1dHMsIGJ1dCBpbiB0aGlzIGNhc2VcbiAgICAgICMgd2Ugd2FudCB0byBwcmV2ZW50IHVzZXJzIGZyb20gb3Zlci1iYWNrc3BhY2luZ1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgY2xlYXJJcENoYW5nZTogKHJlc2V0SVBzID0gdHJ1ZSktPlxuICAgICMgVW5kbyBhbnkgaXAgY2hhbmdlc1xuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGUuaXBTaG93Q291bnRyaWVzXG4gICAgaWYgaXBDaGFuZ2UubWFwKGZpbHRlclRydXRoeSkubGVuZ3RoID4gMCBhbmQgaXBTaG93Q291bnRyaWVzLmxlbmd0aCA9PSAxXG4gICAgICBjb3VudHJ5ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIHtzaG9ydGN1dDogaXBTaG93Q291bnRyaWVzWzBdfVxuICAgICAgcmV0dXJuIGlmIG5vdCBjb3VudHJ5P1xuICAgICAgQHNldFN0YXRlIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICBpZiByZXNldElQc1xuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCAndXNhJywgbnVsbCwgLWlwQ2hhbmdlWzBdXG4gICAgICAgIEBoYW5kbGVJUENsaWNrIGNvdW50cnkuaWQsICd1c3NyJywgbnVsbCwgLWlwQ2hhbmdlWzFdXG5cblxuICBjbGVhcklwS2V5U2VxdWVuY2U6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBJUENoYW5nZTogWzAsMF1cblxuICBpcEtleVNlcXVlbmNlOiAoY29kZSwgZXYpLT5cbiAgICAjaWYgY29kZSA9PSAyN1xuICAgICAgI0BjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgI2V2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICNyZXR1cm4gZmFsc2VcbiAgICBpcEtTID0gQHN0YXRlLmlwS2V5U2VxdWVuY2VcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlXG4gICAgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcblxuICAgICMgQmFja3NwYWNlICg4KSBzaG91bGQgZGVsZXRlIHRoZSBsYXN0IGNoYXIgZnJvbSB0aGUgaXBLUywgYW5kIHNldCB0aGUgXCJjdXJyZW50XCJcbiAgICAjIGNoYXIgdG8gdGhlIGxhc3QgY2hhclxuICAgICMgRW50ZXIgKDEzKSBzaG91bGRcblxuICAgIGlmIGNvZGUgPT0gMjcgb3IgY29kZSA9PSAxM1xuICAgICAgIyBEb24ndCBkbyBhbnl0aGluZyBpZiB3ZSBkb24ndCBoYXZlIGFuIGlwS1NcbiAgICAgIGlmIG5vdCBpcEtTXG4gICAgICAgIHJldHVyblxuICAgICAgaXBzQ2hhbmdlZCA9IGlwS1MubGVuZ3RoID09IDQgYW5kIGlwQ2hhbmdlLmZpbHRlcihmaWx0ZXJUcnV0aHkpLmxlbmd0aCA+IDBcbiAgICAgIGlmIGNvZGUgPT0gMjcgYW5kIGlwc0NoYW5nZWRcbiAgICAgICAgQGNsZWFySXBDaGFuZ2UoKVxuICAgICAgZWxzZVxuICAgICAgICBpZiBjb2RlID09IDEzXG4gICAgICAgICAgQGNsZWFySXBDaGFuZ2UoZmFsc2UpXG4gICAgICAgIGRlbHRhID0gLTFcbiAgICAgICAgIyBCYWNrIHVwIHR3byBzcGFjZXMgd2hlbiBhIGNvdW50cnkgaXMgc2VsZWN0ZWRcbiAgICAgICAgaWYgaXBLUy5sZW5ndGggPT0gNFxuICAgICAgICAgIGRlbHRhID0gLTJcbiAgICAgICAgaXBLUyA9IGlwS1Muc2xpY2UoMCxkZWx0YSlcbiAgICAgICAgY2hhciA9IGlwS1Muc2xpY2UoLTEpXG4gICAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsLTEpXG5cbiAgICBjaGFyTG93ZXIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblxuICAgIGlmIG5vdCBpcEtTIGFuZCBub3QgY2hhclxuICAgICAgQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICByZXR1cm5cblxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZSBmYWxzZVxuICAgIGlmIGlwS1MubGVuZ3RoID09IDAgYW5kIGNoYXJMb3dlciA9PSAnaSdcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiAnaSdcbiAgICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6ICcnXG4gICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICByZXR1cm5cblxuICAgICMgQ29udGluZW50IHNlbGVjdGlvblxuICAgIGlmIGlwS1MubGVuZ3RoID09IDEgYW5kIGNoYXJMb3dlciBpbiBbJ2MnLCdzJywnZScsJ2YnLCdhJywnbSddXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgaXBTaG93Q291bnRyaWVzOiBAcHJvcHMuY291bnRyeVNob3J0Y3V0c1tjaGFyTG93ZXJdXG4gICAgICAgIGlwU2hvd0NvbnRpbmVudDogY2hhckxvd2VyXG4gICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICByZXR1cm5cblxuICAgIGNvbnRpbmVudCA9IGlwS1MuY2hhckF0IDFcblxuICAgICMgQ291bnRyeSBzZWxlY3Rpb25cbiAgICAjIGlwS1Mgc2hvdWxkIGJlICdpW2NvbnRpbmVudF0nIG9yICdpW2NvbnRpbmVudF1bY291bnRyeUNoYXJdJ1xuICAgIGlmIGZhbHNlIGFuZCAyIDw9IGlwS1MubGVuZ3RoIDw9IDNcbiAgICAgIGlwS1MgKz0gY2hhckxvd2VyXG4gICAgICBjb3VudHJ5Q29kZSA9IGlwS1Muc2xpY2UoMiwgNClcblxuICAgICAgY291bnRyaWVzID0gQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY29udGluZW50XS5maWx0ZXIgKHNjID0gJycpLT5cbiAgICAgICAgc2MuY2hhckF0KDApID09IGNvdW50cnlDb2RlLmNoYXJBdCgwKVxuXG4gICAgICBpZiBjb3VudHJ5Q29kZS5sZW5ndGggPT0gMlxuICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgICAgc2MuY2hhckF0KDEpID09IGNvdW50cnlDb2RlLmNoYXJBdCgxKVxuXG4gICAgICAjIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IG9uZSBjb3VudHJ5XG4gICAgICBpZiBjb3VudHJpZXMubGVuZ3RoICE9IDBcbiAgICAgICAgQHNldFN0YXRlXG4gICAgICAgICAgaXBLZXlTZXF1ZW5jZTogaXBLU1xuICAgICAgICAgIGlwU2hvd0NvdW50cmllczogY291bnRyaWVzXG4gICAgICAgICAgaXBJUENoYW5nZTogWzAsMF1cblxuICAgICMgU2VlIGlmIHdlIGhhdmUgYSBjb3VudHJ5IFwic2VsZWN0ZWRcIiBmb3IgaXAgcGxhY2VtZW50XG4gICAgaWYgMiA8PSBpcEtTLmxlbmd0aCA8PSAzXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsNClcblxuICAgICAgY291bnRyeVNob3J0Y3V0cyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMClcblxuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDFcbiAgICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLFxuICAgICAgICAgIHNob3J0Y3V0VW5pcXVlOiBjb3VudHJ5Q29kZVxuICAgICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICAgICMgSWYgd2UgaGF2ZSBhIGNvdW50cnksIGFkZCB0aGUgZnVsbCBjb3VudHJ5IGNvZGUgdG8gaXBLU1xuICAgICAgICBpZiBjb3VudHJ5P1xuICAgICAgICAgIGlwS1MgKz0gY291bnRyeS5zaG9ydGN1dC5jaGFyQXQgMVxuICAgICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgICAgaXBLZXlTZXF1ZW5jZTogaXBLU1xuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgICAgY291bnRyeVNob3J0Y3V0cyA9IGNvdW50cnlTaG9ydGN1dHMuZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgICAgc2MuY2hhckF0KDEpID09IGNvdW50cnlDb2RlLmNoYXJBdCgxKVxuXG4gICAgICAjIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IG9uZSBjb3VudHJ5XG4gICAgICBpZiBjb3VudHJ5U2hvcnRjdXRzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cnlTaG9ydGN1dHNcbiAgICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgICByZXR1cm5cblxuXG4gICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsNClcbiAgICBpZiBjb3VudHJ5Q29kZS5sZW5ndGggPT0gMlxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLFxuICAgICAgICBzaG9ydGN1dDogY291bnRyeUNvZGVcbiAgICAgICAgY29udGluZW50OiBjb250aW5lbnRDb2RlRnJvbUxldHRlciBjb250aW5lbnRcbiAgICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICAgIGNvdW50cnlJUHMgPSBAc3RhdGUuaXBzW3BhcnNlSW50KGNvdW50cnkuaWQsMTApXVxuICAgICAgaWYgbm90IGNvdW50cnk/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBzd2l0Y2ggY2hhclxuICAgICAgICB3aGVuICdhJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVswXSsrXG4gICAgICAgIHdoZW4gJ0EnXG4gICAgICAgICAgc2lkZSA9ICd1c2EnXG4gICAgICAgICAgZGlyID0gJ2RuJ1xuICAgICAgICAgIGlmIGNvdW50cnlJUHNbMF0gPiAwXG4gICAgICAgICAgICBpcENoYW5nZVswXS0tXG4gICAgICAgIHdoZW4gJ3InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVsxXSsrXG4gICAgICAgIHdoZW4gJ1InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgICBpZiBjb3VudHJ5SVBzWzFdID4gMFxuICAgICAgICAgICAgaXBDaGFuZ2VbMV0tLVxuXG4gICAgICBpZiBzaWRlPyBhbmQgZGlyP1xuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCBzaWRlLCBkaXJcblxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW2NvdW50cnlDb2RlXVxuICAgICAgICBpcElQQ2hhbmdlOiBpcENoYW5nZVxuXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBoYW5kbGVWYWxDbGljazogKGlkLCBkaXIsIHNpZGUpLT5cbiAgICBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBkZWx0YSA9IGlmIGRpciA9PSAnaW5jJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlmIGlkIGluIFsnbWlsb3BzJywgJ3NwYWNlJ11cbiAgICAgIGluZGV4ID0gaWYgc2lkZSA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4gICAgICBvbGRWYWwgPSBzdGF0ZS5nYW1lW2lkXVtpbmRleF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdW2luZGV4XSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF1baW5kZXhdID0gbmV3VmFsXG4gICAgZWxzZVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdICsgZGVsdGEpXG4gICAgICBzdGF0ZS5nYW1lW2lkXSA9IG5ld1ZhbFxuXG4gICAgbWV0YSA9XG4gICAgICB0eXBlOiAndmFsJ1xuICAgICAgc2lkZTogaWYgc2lkZT8gdGhlbiBzaWRlIGVsc2UgJydcbiAgICAgIGlkOiBpZFxuICAgICAgb2xkOiBvbGRWYWxcbiAgICAgIG5ldzogbmV3VmFsXG5cbiAgICBpZiBpZCA9PSAndHVybicgb3IgaWQgPT0gJ3JvdW5kJ1xuICAgICAgbWV0YS50eXBlID0gaWRcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsIG1ldGFcblxuXG4gIGhhbmRsZUlQQ2xpY2s6IChub2RlSWQsIHNpZGUsIGRpciwgZGVsdGEpLT5cbiAgICByZXR1cm4gaWYgZGVsdGE/IGFuZCBkZWx0YSA9PSAwXG5cbiAgICBub2RlID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIHtpZDogbm9kZUlkfVxuICAgICMgRG9uJ3QgbGV0IHRoZSBub24tY291bnRyeSBub2RlcyBnZXQgdXBkYXRlZFxuICAgIGlmIG5vZGUucG9pbnRzIG9yIG5vZGUuc3VwZXJwb3dlciB0aGVuIHJldHVyblxuXG4gICAgc3RhdGUgPSBAc3RhdGVcblxuICAgIGlmIGRlbHRhP1xuICAgICAgZGlyID0gaWYgZGVsdGEgPj0gMCB0aGVuICd1cCcgZWxzZSAnZG4nXG4gICAgZWxzZVxuICAgICAgZGVsdGEgPSBpZiBkaXIgPT0gJ3VwJyB0aGVuIDEgZWxzZSAtMVxuXG4gICAgaW5kZXggPSBzdXBlcnBvd2VyVG9JbmRleCBzaWRlXG4gICAgaXAgPSBzdGF0ZS5pcHNbbm9kZUlkXVtpbmRleF1cbiAgICBpcCArPSBkZWx0YVxuICAgIGlmIGlwIDwgMCB0aGVuIHJldHVyblxuXG4gICAgc2lnbiA9IGlmIGRpciA9PSAndXAnIHRoZW4gJysnIGVsc2UgJy0nXG4gICAgc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdID0gaXBcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsXG4gICAgICB0eXBlOiAnaXAnXG4gICAgICBzaWRlOiBzaWRlXG4gICAgICBjb3VudHJ5OiBub2RlXG4gICAgICBpcHM6IHN0YXRlLmlwc1tub2RlSWRdXG4gICAgICBkZWx0YTpkZWx0YVxuXG4gIGhhbmRsZUhpc3RvcnlDbGljazogKHR5cGUpLT5cbiAgICBAW1wiI3t0eXBlfUhpc3RcIl0oKVxuXG4gIHVuZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS51bmRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgcmVkb0hpc3Q6IC0+XG4gICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LnJlZG8oKVxuICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuICB0b2dnbGVIaXN0OiAtPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZSgpXG5cblxuICByZW5kZXI6IC0+XG4gICAgbm9kZVByb3BzID0gQHByb3BzLm5vZGVcblxuICAgIHN1cGVycG93ZXJTdGF0cyA9IHN1cGVyU3RhdHMgQHN0YXRlLmlwcywgQHByb3BzLmNvdW50cmllcywgQHByb3BzLnJlZ2lvbkluZm9Ob2Rlc1xuXG4gICAgaXBLZXlTZXF1ZW5jZSA9IEBzdGF0ZT8uaXBLZXlTZXF1ZW5jZVxuICAgIGlwU2hvd0NvdW50cmllcyA9IEBzdGF0ZT8uaXBTaG93Q291bnRyaWVzIHx8IFtdXG4gICAgaXBTaG93Q29udGluZW50ID0gQHN0YXRlPy5pcFNob3dDb250aW5lbnRcblxuICAgIGxpbmtzID0gQHByb3BzLmxpbmtzLm1hcCAobGlua0RhdGEpPT5cbiAgICAgIHNvdXJjZSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCBpZDogbGlua0RhdGEuc291cmNlXG4gICAgICB0YXJnZXQgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnRhcmdldFxuICAgICAgbm9kZXMgPSB7c291cmNlLCB0YXJnZXR9XG5cbiAgICAgIGpVU0EgPSAobGluaywgdGFyZyk9PlxuICAgICAgICBqYXBhblVTQUJ1bXAgPSAxOFxuICAgICAgICBpZiBfLmNvbnRhaW5zKGxpbmsubm9kZXMsICdVU0EnKSBhbmQgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnSmFwYW4nKVxuICAgICAgICAgIHJldHVybiBub2Rlc1t0YXJnXS55IC0gamFwYW5VU0FCdW1wXG4gICAgICAgIG5vZGVzW3RhcmddLnlcblxuICAgICAgbGlua1Byb3BzID1cbiAgICAgICAga2V5OiBcIkJvYXJkTGluay0je2xpbmtEYXRhLnNvdXJjZX0tI3tsaW5rRGF0YS50YXJnZXR9XCJcbiAgICAgICAgeDE6IHNvdXJjZS54XG4gICAgICAgIHkxOiBqVVNBKGxpbmtEYXRhLCAnc291cmNlJylcbiAgICAgICAgeDI6IHRhcmdldC54XG4gICAgICAgIHkyOiBqVVNBKGxpbmtEYXRhLCAndGFyZ2V0JylcbiAgICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAgIFwibGlua1wiOiB0cnVlXG4gICAgICAgICAgXCJsaW5rLWNyb3NzXCI6IGxpbmtEYXRhLmNyb3NzQ29udGluZW50XG4gICAgICAgICAgXCJsaW5rLXVzYVwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNBJ1xuICAgICAgICAgIFwibGluay11c3NyXCI6IF8uY29udGFpbnMgbGlua0RhdGEubm9kZXMsICdVU1NSJ1xuXG4gICAgICBCb2FyZExpbmsgbGlua1Byb3BzXG5cbiAgICBub2RlcyA9IF8ubWFwIEBwcm9wcy5ub2RlcywgKGNvdW50cnlEYXRhKT0+XG4gICAgICAjIERldGVybWluZSBpZiBjb3VudHJ5IHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIGlwUGxhY2VtZW50IG1hc2tcbiAgICAgIG9uVG9wID0gbm90IGlwS2V5U2VxdWVuY2Ugb3JcbiAgICAgICAgY291bnRyeURhdGEuc2hvcnRjdXQgaW4gaXBTaG93Q291bnRyaWVzIGFuZFxuICAgICAgICBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvdW50cnlEYXRhLmNvbnRpbmVudCkgPT0gaXBTaG93Q29udGluZW50IGFuZFxuICAgICAgICBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0XG4gICAgICBpcFNlbGVjdGVkID0gb25Ub3AgYW5kIGlwU2hvd0NvdW50cmllcy5sZW5ndGggPT0gMVxuICAgICAgcHJvcHMgPVxuICAgICAgICBub2RlOiBub2RlUHJvcHNcbiAgICAgICAga2V5OiBcIkJvYXJkTm9kZS0je2NvdW50cnlEYXRhLmlkfVwiXG4gICAgICAgIHg6IGNvdW50cnlEYXRhLnhcbiAgICAgICAgeTogY291bnRyeURhdGEueVxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHRcbiAgICAgICAgZ3V0dGVyOiBAcHJvcHMubm9kZS5ndXR0ZXJcbiAgICAgICAgdGl0bGVIZWlnaHQ6IEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHRpdGxlRm9udFNpemU6IEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcbiAgICAgICAgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2tcbiAgICAgICAgIyBEZXRlcm1pbmUgaWYgdGhlIGNvdW50cnkgc2hvdWxkIGJlIG9uIHRvcCBvZiB0aGUgaXAgc2hvcnRjdXQgbGF5ZXJcbiAgICAgICAgb25Ub3A6IG9uVG9wXG4gICAgICAgIGlwU2VsZWN0ZWQ6IGlwU2VsZWN0ZWRcblxuXG4gICAgICBfLmFzc2lnbiBwcm9wcywgY291bnRyeURhdGFcblxuICAgICAgaWYocHJvcHMuc3VwZXJwb3dlcilcbiAgICAgICAgcHJvcHMuc3RhdHMgPVxuICAgICAgICAgIGNvdW50cmllczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5jb3VudHJpZXNbcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpXSwgWydidGwnLCAnbm9uJywgJ3RvdGFsJ11cbiAgICAgICAgICByZWdpb25zOiBfLnBpY2sgc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnNbcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpXSwgWydwcmVzZW5jZScsICdkb21pbmF0aW9uJywgJ2NvbnRyb2wnXVxuXG4gICAgICBpZihwcm9wcy5wb2ludHMpXG4gICAgICAgIHByb3BzLnN0YXRzID0gZ2V0UmVnaW9uU3RhdHVzXG4gICAgICAgICAgdXNhOiBzdXBlcnBvd2VyU3RhdHMucmVnaW9ucy51c2FbcHJvcHMuaWRdXG4gICAgICAgICAgdXNzcjogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNzcltwcm9wcy5pZF1cblxuICAgICAgY291bnRyeUlkID0gcGFyc2VJbnQgY291bnRyeURhdGEuaWQsIDEwXG4gICAgICBpZiBjb3VudHJ5SWQgb2YgQHN0YXRlLmlwc1xuICAgICAgICBwcm9wcy51c2EgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMF1cbiAgICAgICAgcHJvcHMudXNzciA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVsxXVxuXG4gICAgICBCb2FyZE5vZGVEaXYgcHJvcHNcblxuICAgIGJvYXJkU3RhdHVzQXR0cnMgPVxuICAgICAgcmVmOidCb2FyZFN0YXR1cydcbiAgICAgIGhhbmRsZVZhbENsaWNrOiBAaGFuZGxlVmFsQ2xpY2tcbiAgICAgIGhhbmRsZUhpc3RvcnlDbGljazogQGhhbmRsZUhpc3RvcnlDbGlja1xuXG5cblxuICAgIGNvbnRpbmVudFNob3J0Y3V0cyA9IGNvbnRpbmVudFNob3J0Y3V0RGF0YS5tYXAgKG8pPT5cbiAgICAgIGlmIGlwS2V5U2VxdWVuY2UubGVuZ3RoID09IDFcbiAgICAgICAgc2hvdyA9ICdpbidcbiAgICAgIGF0dHJzID1cbiAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0Q29udGluZW50IEJvYXJkLXNob3J0Y3V0ICN7c2hvd31cIlxuICAgICAgICBzdHlsZTpcbiAgICAgICAgICBsZWZ0OiBvLnhcbiAgICAgICAgICB0b3A6IG8ueVxuICAgICAgUi5kaXYgYXR0cnMsIG8uY2hhclxuXG4gICAgbm9kZXNCeUNvbnRpbmVudCA9IF8uZ3JvdXBCeSBAcHJvcHMuY291bnRyaWVzLCAnY29udGluZW50J1xuXG4gICAgY291bnRyeVNob3J0Y3V0cyA9IF8ubWFwIG5vZGVzQnlDb250aW5lbnQsIChub2RlcywgY29udGluZW50KT0+XG4gICAgICBjb250S2V5ID0gb25lTGV0dGVyQ29udGluZW50Q29kZSBjb250aW5lbnRcbiAgICAgIG5vZGVDb21wb25lbnRzID0gXy5tYXAgbm9kZXMsIChub2RlKT0+XG4gICAgICAgIGlmIG5vZGUuc3VwZXJwb3dlcj8gb3Igbm9kZS5wb2ludHM/XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgc2hvdyA9ICcnXG4gICAgICAgIGlwS1NMID0gaXBLZXlTZXF1ZW5jZS5sZW5ndGhcbiAgICAgICAgaWYgaXBLU0wgPCA0IGFuZCBfLmNvbnRhaW5zKEBzdGF0ZS5pcFNob3dDb3VudHJpZXMsIG5vZGUuc2hvcnRjdXQpIGFuZCBAc3RhdGUuaXBTaG93Q29udGluZW50ID09IG9uZUxldHRlckNvbnRpbmVudENvZGUoY29udGluZW50KVxuICAgICAgICAgIHNob3cgPSAnaW4nXG4gICAgICAgIGF0dHJzID1cbiAgICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXQgQm9hcmQtc2hvcnRjdXRDb3VudHJ5ICN7c2hvd31cIlxuICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgbGVmdDogbm9kZS54XG4gICAgICAgICAgICB0b3A6IG5vZGUueVxuICAgICAgICBSLmRpdiBhdHRycywgdXBwZXJGaXJzdChub2RlLnNob3J0Y3V0VW5pcXVlKVxuXG4gICAgICBub2RlQ29tcG9uZW50c1xuXG4gICAgY29udENvdW50cnkgPSBjb250Q291bnRyeVNlbGVjdGlvbiBAcHJvcHMucmVnaW9uSW5mb05vZGVzLCBAcHJvcHMuY291bnRyaWVzLCBpcEtleVNlcXVlbmNlXG4gICAgaXBDaGFuZ2UgPSBAc3RhdGUuaXBJUENoYW5nZSB8fCBbMCwwXVxuICAgIGlwQ2hhbmdlVVNBID0gaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNCB0aGVuIFIuc3BhbiBjbGFzc05hbWU6ICdCb2FyZC1pcEhlYWRlci11c2EnLCBzaWduZWROdW1PckRhc2goaXBDaGFuZ2VbMF0pIGVsc2UgbnVsbFxuICAgIGlwQ2hhbmdlVVNTUiA9IGlmIGlwS2V5U2VxdWVuY2UubGVuZ3RoID49IDQgdGhlbiBSLnNwYW4gY2xhc3NOYW1lOiAnQm9hcmQtaXBIZWFkZXItdXNzcicsIHNpZ25lZE51bU9yRGFzaChpcENoYW5nZVsxXSkgZWxzZSBudWxsXG4gICAgaXBDb3VudHJ5ID0gY29udENvdW50cnkuY291bnRyeSB8fCBpZiBjb250Q291bnRyeS5jb250aW5lbnQgdGhlbiAnU2VsZWN0IGEgY291bnRyeSdcbiAgICBpcENvbnRDb3VudHJ5ID0gW1xuICAgICAgaXBDaGFuZ2VVU0FcbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwiQm9hcmQtaXBIZWFkZXItQ29udENvdW50XCIsIFtcbiAgICAgICAgUi5oMyBjbGFzc05hbWU6IFwiQm9hcmQtaXBIZWFkZXItQ29udGluZW50ICN7Y29udENvdW50cnkuY29udGluZW50Py5jb250aW5lbnR9RGFya1wiLCBjb250Q291bnRyeS5jb250aW5lbnQ/LnNob3J0bmFtZSBvciAnU2VsZWN0IGEgY29udGluZW50J1xuICAgICAgICBSLmgzIGNsYXNzTmFtZTogXCJCb2FyZC1pcEhlYWRlci1Db3VudHJ5ICN7Y29udENvdW50cnkuY29udGluZW50Py5jb250aW5lbnR9RGFya1wiLCBpcENvdW50cnlcbiAgICAgIF1cbiAgICAgIGlwQ2hhbmdlVVNTUlxuICAgIF1cblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmQnLCBbXG4gICAgICBSLnN2ZyB3aWR0aDpAcHJvcHMud2lkdGgsIGhlaWdodDpAcHJvcHMuaGVpZ2h0LCByZWY6ICdzdmcnLCBbXG4gICAgICAgIGxpbmtzXG4gICAgICBdXG4gICAgICBub2Rlc1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0SGVhZGVyICN7aWYgaXBLZXlTZXF1ZW5jZSB0aGVuICdpbicgZWxzZSAnJ31cIiwgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb3B5JywgW1xuICAgICAgICAgIFIuaDMge30sIFwiUGxhY2luZyBJbmZsdWVuY2VcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdsYWJlbCcsIFtcbiAgICAgICAgICAgIFIuYSBvbkNsaWNrOiBAY2xlYXJJcEtleVNlcXVlbmNlLCBbXG4gICAgICAgICAgICAgIFwiQ2FuY2VsIChcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCBcImVzY1wiXG4gICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAoaWYgaXBDaGFuZ2VbMF0gPT0gMCBhbmQgaXBDaGFuZ2VbMV0gPT0gMCB0aGVuICdkaXNhYmxlZCcpLCBvbkNsaWNrOiBAaXBLZXlTZXF1ZW5jZS5iaW5kKG51bGwsIDEzKSwgW1xuICAgICAgICAgICAgICBcIkNvbmZpcm0gKFwiXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsIFwiZW50ZXJcIlxuICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6J2NoYXJzJywgaXBDb250Q291bnRyeVxuICAgICAgXVxuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0TWFzayAje2lmIGlwS2V5U2VxdWVuY2UgdGhlbiAnaW4nIGVsc2UgJyd9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dENvbnRpbmVudHMgI3tpZiBpcEtleVNlcXVlbmNlIGFuZCBpcEtleVNlcXVlbmNlLmxlbmd0aCA8PSAxIHRoZW4gJ2luJyBlbHNlICcnfVwiLFxuICAgICAgICBjb250aW5lbnRTaG9ydGN1dHNcbiAgICAgIGNvdW50cnlTaG9ydGN1dHNcbiAgICAgIEJvYXJkU3RhdHVzIF8uYXNzaWduIGJvYXJkU3RhdHVzQXR0cnMsIEBzdGF0ZS5nYW1lXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTGluaydcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAtPlxuICAgIGZhbHNlXG4gIHJlbmRlcjogLT5cbiAgICBSLmxpbmUgQHByb3BzXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cblxuXG5Cb2FyZE5vZGVJUCA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVAnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5leHRQcm9wcyktPlxuICAgICMgQXNzdW1lIGNvdW50cnlcbiAgICBzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMgQ29udGluZW50IGxhYmVsc1xuICAgIGlmIEBwcm9wcy5wb2ludHM/XG4gICAgICBzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICBuZXh0UHJvcHMuc3RhdHMudXNzciAhPSBAcHJvcHMuc3RhdHMudXNzclxuICAgICMgU3VwZXJwb3dlciBsYWJlbHNcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgblBTID0gbmV4dFByb3BzLnN0YXRzXG4gICAgICB0UFMgPSBAcHJvcHMuc3RhdHNcbiAgICAgIHNob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgblBTLnJlZ2lvbnMucHJlc2VuY2UgIT0gdFBTLnJlZ2lvbnMucHJlc2VuY2Ugb3JcbiAgICAgICAgblBTLnJlZ2lvbnMuZG9taW5hdGlvbiAhPSB0UFMucmVnaW9ucy5kb21pbmF0aW9uIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuXG4gICAgc2hvdWxkSXRcblxuICBoYW5kbGVJUENsaWNrOiAoc2lkZSwgZGlyKS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLmlkLCBzaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgY29udHJvbFVTQSA9IChAcHJvcHMudXNhIC0gQHByb3BzLnVzc3IpID49IEBwcm9wcy5zdGFiXG4gICAgY29udHJvbFVTU1IgPSAoQHByb3BzLnVzc3IgLSBAcHJvcHMudXNhKSA+PSBAcHJvcHMuc3RhYlxuXG4gICAgZ0F0dHJzID1cbiAgICAgIHRyYW5zZm9ybTogQHByb3BzLnRyYW5zZm9ybVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtI3tAcHJvcHMuZ3JvdXB9IFwiICsgY3hcbiAgICAgICAgJ25vZGUnOiB0cnVlXG4gICAgICAgICdub2RlLWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZS1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZS11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGUtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG5cblxuICAgIHN0YWJUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtc3RhYlwiXG4gICAgICB4OiAoQHByb3BzLm5vZGUud2lkdGgvMikgLSAxMFxuICAgICAgeTogLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplICsgMVxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBzdGFiVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiB7fSwgXCJCYXR0bGU6IFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidudW1CdGwnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgXVxuICAgICAgc3RhYlRleHRBdHRycy54ID0gMFxuICAgICAgc3RhYlRleHRBdHRycy55ICs9IDFcblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGUtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOnBDTiwgQHByb3BzLnBvaW50c1swXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGUtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGUtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIHNob3J0Q3V0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnbm9kZS1zaG9ydGN1dCdcbiAgICAgIFxuXG4gICAgUi5nIGdBdHRycywgW1xuICAgICAgIyBOb2RlIGJnXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5oZWlnaHRcbiAgICAgICAgdGl0bGU6IE1hdGgucmFuZG9tKClcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgcG9seVxuXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS10aXRsZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy50aXRsZUhlaWdodFxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBSLmxpbmVcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1saW5lJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIHgxOiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTE6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB4MjogQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTI6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuXG4gICAgICBSLnRleHQgdGl0bGVUZXh0QXR0cnMsIEBwcm9wcy5zaG9ydG5hbWVcbiAgICAgIFIudGV4dCBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgICAgUi50ZXh0IHJlZ2lvblRleHRBdHRycywgcmVnaW9uVGV4dFxuXG4gICAgICAjUi50ZXh0IHNob3J0Q3V0QXR0cnMsIEBwcm9wcy5zaG9ydGN1dFxuXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkTm9kZUlQRGl2ID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVJUERpdidcbiBcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVEaXYnXG5cbiAgI3Nob3VsZENvbXBvbmVudFVwZGF0ZTogKG5leHRQcm9wcyktPlxuICAgICMjIEFzc3VtZSBjb3VudHJ5XG4gICAgI3Nob3VsZEl0ID0gbmV4dFByb3BzLnVzYSAhPSBAcHJvcHMudXNhIG9yIG5leHRQcm9wcy51c3NyICE9IEBwcm9wcy51c3NyXG4gICAgIyMgQ29udGluZW50IGxhYmVsc1xuICAgICNpZiBAcHJvcHMucG9pbnRzP1xuICAgICAgI3Nob3VsZEl0ID0gbmV4dFByb3BzLnN0YXRzLnVzYSAhPSBAcHJvcHMuc3RhdHMudXNhIG9yXG4gICAgICAgICNuZXh0UHJvcHMuc3RhdHMudXNzciAhPSBAcHJvcHMuc3RhdHMudXNzclxuICAgICMjIFN1cGVycG93ZXIgbGFiZWxzXG4gICAgI2lmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAjblBTID0gbmV4dFByb3BzLnN0YXRzXG4gICAgICAjdFBTID0gQHByb3BzLnN0YXRzXG4gICAgICAjc2hvdWxkSXQgPSBuUFMuY291bnRyaWVzLmJ0bCAhPSB0UFMuY291bnRyaWVzLmJ0bCBvclxuICAgICAgICAjblBTLnJlZ2lvbnMucHJlc2VuY2UgIT0gdFBTLnJlZ2lvbnMucHJlc2VuY2Ugb3JcbiAgICAgICAgI25QUy5yZWdpb25zLmRvbWluYXRpb24gIT0gdFBTLnJlZ2lvbnMuZG9taW5hdGlvbiBvclxuICAgICAgICAjblBTLnJlZ2lvbnMuY29udHJvbCAhPSB0UFMucmVnaW9ucy5jb250cm9sXG4jXG4gICAgI3Nob3VsZEl0XG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuXG4gICAgZ0F0dHJzID1cbiAgICAgIHN0eWxlOlxuICAgICAgICBsZWZ0OiBAcHJvcHMueCAtIEBwcm9wcy53aWR0aC8yICsgJ3B4J1xuICAgICAgICB0b3A6IEBwcm9wcy55IC0gQHByb3BzLmhlaWdodC8yICsgJ3B4J1xuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtI3tAcHJvcHMuZ3JvdXB9IFwiICsgY3hcbiAgICAgICAgJ25vZGVkaXYnOiB0cnVlXG4gICAgICAgICdub2RlZGl2LWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZWRpdi1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGVkaXYtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZWRpdi11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGVkaXYtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGVkaXYtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZWRpdi1vbi10b3AnOiBAcHJvcHMub25Ub3AgYW5kIG5vdCAoQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXIpXG4gICAgICAgICdub2RlZGl2LXNlbGVjdGVkJzogQHByb3BzLmlwU2VsZWN0ZWRcblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZWRpdi10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGVkaXYtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGVkaXYtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIHNob3J0Q3V0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnbm9kZWRpdi1zaG9ydGN1dCdcbiAgICAgIFxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuXG4gICAgaXNDb3VudHJ5ID0gQHByb3BzLnN1cGVycG93ZXIgb3IgQHByb3BzLnJlZ2lvbkluZm9cbiAgICBpZiBub3QgaXNDb3VudHJ5XG4gICAgICBpcFVTQSA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNhJywgaXA6IEBwcm9wcy51c2EsIGN0cmw6IGNvbnRyb2xVU0EsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzYSdcbiAgICAgIGlwVVNTUiA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNzcicsIGlwOiBAcHJvcHMudXNzciwgY3RybDogY29udHJvbFVTU1IsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzc3InXG4gICAgICBzdGFiID0gUi5zcGFuIHN0YWJUZXh0QXR0cnMsIHN0YWJUZXh0XG4gICAgZWxzZVxuICAgICAgcmVnaW9uSW5mbyA9IFIuc3BhbiByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBidGwgPVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbm9kZWRpdi1idGwtbnVtJywgW1xuICAgICAgICAgIFwiQmF0dGxlOiBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzdHJvbmcnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgICBdXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIGJ0bFxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnbm9kZWRpdi10aXRsZScsIFtcbiAgICAgICAgUi5zcGFuIHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICAgIHN0YWJcbiAgICAgIF1cbiAgICAgIHJlZ2lvbkluZm9cbiAgICAgICNSLnRleHQgc2hvcnRDdXRBdHRycywgQHByb3BzLnNob3J0Y3V0XG4gICAgICBpcFVTQVxuICAgICAgaXBVU1NSXG4gICAgICAgIFxuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUCdcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLmlwICE9IEBwcm9wcy5pcFxuXG4gIHJlbmRlcjogLT5cbiAgICBwb3NpdGlvbiA9IGlmIEBwcm9wcy5zaWRlID09ICd1c2EnIHRoZW4gMSBlbHNlIDBcblxuICAgIGhpZGVJUCA9IGlmIEBwcm9wcy5pcCA9PSAwIHRoZW4gJ2hpZGUnIGVsc2UgJydcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKCN7LUBwcm9wcy5ub2RlLndpZHRoLzIgKiBwb3NpdGlvbn0sICN7LUBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0LzIgLSAxfSlcIlxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLSN7QHByb3BzLnNpZGV9XCJcblxuICAgIHRleHRBdHRycyA9XG4gICAgICB4OiBAcHJvcHMubm9kZS53aWR0aC80XG4gICAgICB5OiBAcHJvcHMubm9kZS5oZWlnaHQvMiAtIDFcbiAgICAgIGNsYXNzTmFtZTogaGlkZUlQXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWJnLSN7QHByb3BzLnNpZGV9ICN7aGlkZUlQfVwiXG4gICAgICBSLnRleHQgdGV4dEF0dHJzLCBAcHJvcHMuaXBcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICd1cCdcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgeTogaXBDbGlja0hlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1jbGlja1wiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ2RuJ1xuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZUlQRGl2J1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT5cbiAgICAkZWwgPSAkKEByZWZzLm5vZGVkaXYuZ2V0RE9NTm9kZSgpKVxuICAgICRlbC5hZGRDbGFzcyAnbm9kZWRpdi1mbGFzaCdcbiAgICBmbiA9IC0+ICRlbC5yZW1vdmVDbGFzcygnbm9kZWRpdi1mbGFzaCcpXG4gICAgc2V0VGltZW91dCBmbiwgMTAwXG5cblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLmlwICE9IEBwcm9wcy5pcFxuXG4gIHJlbmRlcjogLT5cbiAgICBwb3NpdGlvbiA9IGlmIEBwcm9wcy5zaWRlID09ICd1c2EnIHRoZW4gMSBlbHNlIDBcblxuICAgIGlwWmVybyA9IGlmIEBwcm9wcy5pcCA9PSAwIHRoZW4gJ2lwWmVybycgZWxzZSAnJ1xuXG4gICAgZ0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLSN7QHByb3BzLnNpZGV9IG5vZGVkaXYtaXAgI3tpcFplcm99XCJcbiAgICAgIHJlZjogJ25vZGVkaXYnXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC10ZXh0XCJcblxuICAgIGlwQ2xpY2tIZWlnaHQgPSAoQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHQpIC8gMlxuXG4gICAgaXAgPSBpZiBAcHJvcHMuaXAgPiAwIHRoZW4gQHByb3BzLmlwIGVsc2UgJydcblxuICAgIFIuZGl2IGdBdHRycywgW1xuICAgICAgUi5zcGFuIHRleHRBdHRycywgaXBcbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLWNsaWNrLXVwXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC1jbGljay1kblwiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ2RuJ1xuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cblxuQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHI6IDBcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5Lm9uICd1cGRhdGUnLCA9PlxuICAgICAgQGZvcmNlVXBkYXRlKClcblxuICAgICNmbiA9ICgpPT5cbiAgICAgICNAc2V0U3RhdGUgcjogTWF0aC5yYW5kb20oKVxuICAgICAgI3NldFRpbWVvdXQgZm4sIDIwMDBcbiAgICAjZm4oKVxuICAgXG4gIGhhbmRsZVNIQ2xpY2s6IChpZCktPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpZFxuXG4gIGhhbmRsZUNsb3NlSGlzdG9yeTogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmhpZGUoKVxuXG4gIHJlbmRlcjogLT5cbiAgICBzdGF0ZUNvbXBvbmVudHMgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEFsbCgpLm1hcCAoc2gsIGluZGV4KT0+XG4gICAgICBzaE0gPSBzaC5tZXRhXG4gICAgICAjIElQIHBsYWNlbWVudCBpbiBjb3VudHJ5XG4gICAgICBpZiBzaE0uY291bnRyeT9cbiAgICAgICAga2V5ID0gXCJjb3VudHJ5LSN7c2hNLmNvdW50cnkuaWR9XCJcbiAgICAgIGVsc2VcbiAgICAgICAga2V5ID0gXCIje3NoTS5pZH0tI3tzaE0uc2lkZX1cIlxuXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeUVudHJ5XG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVTSENsaWNrLmJpbmQgdGhpcywgaW5kZXhcbiAgICAgICAga2V5OiBcIkJTSEUtI3tpbmRleH0tI3trZXl9XCJcbiAgICAgICAgaXNMYXRlc3Q6IEBwcm9wcy5zdGF0ZUhpc3RvcnkubGF0ZXN0ID09IGluZGV4XG4gICAgICAgIGlzQ3VycmVudDogQHByb3BzLnN0YXRlSGlzdG9yeS5jdXJyZW50ID09IGluZGV4XG4gICAgICAgIHNoOiBzaFxuXG4gICAgZGl2QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAnU3RhdGVIaXN0b3J5JzogdHJ1ZVxuICAgICAgICAnaW4nOiBAcHJvcHMuc3RhdGVIaXN0b3J5LnNob3dcblxuICAgIFIuZGl2IGRpdkF0dHJzLCBbXG4gICAgICBSLmEgY2xhc3NOYW1lOiAnY2xvc2UgcHVsbC1yaWdodCcsIG9uQ2xpY2s6IEBoYW5kbGVDbG9zZUhpc3RvcnksIFtcbiAgICAgICAgJ0Nsb3NlICdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgJyhoKSdcbiAgICAgIF1cbiAgICAgIFIuaDMge30sIFwiQWN0aW9uIEhpc3RvcnlcIlxuICAgICAgUi51bCBjbGFzc05hbWU6ICdsaXN0LXVuc3R5bGVkJywgc3RhdGVDb21wb25lbnRzLnJldmVyc2UoKVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmdhbWVWYWxEaXNwbGF5ID0gcmVxdWlyZSAnLi4vbGlicy9nYW1lVmFsRGlzcGxheSdcbnVwcGVyRmlyc3QgPSByZXF1aXJlICcuLi9saWJzL3VwcGVyRmlyc3QnXG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuaW50VG9TdHJXaXRoU2lnbiA9IHJlcXVpcmUgJy4uL2xpYnMvaW50VG9TdHJXaXRoU2lnbidcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi4vbGlicy9zdXBlcnBvd2VyVG9JbmRleCdcblxuc2NvcmVTaWRlID0gKHNjb3JlKS0+XG4gIGlmIHNjb3JlIDwgMFxuICAgIHJldHVybiAndXNzcidcbiAgaWYgc2NvcmUgPiAwXG4gICAgcmV0dXJuICd1c2EnXG4gICcnXG5cblxuc2hFbnRyeSA9IChzaCktPlxuICByb3VuZFNpZGUgPSBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kICUgMiA9PSAwIHRoZW4gJ3VzYScgZWxzZSAndXNzcidcbiAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgcm91bmRTaWRlID0gJydcblxuICBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAxMFxuICAgIHR1cm4gPSBcIkVORFwiXG4gICAgcm91bmQgPSAnJ1xuICBlbHNlIGlmIHNoLnN0YXRlLmdhbWUudHVybiA+IDBcbiAgICB0dXJuID0gXCJUI3tnYW1lVmFsRGlzcGxheSgndHVybicsIHNoLnN0YXRlLmdhbWUudHVybil9LVwiXG4gICAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAhPSAwXG4gICAgICByb3VuZCA9IFwiQVIje2dhbWVWYWxEaXNwbGF5KCdyb3VuZCcsIHNoLnN0YXRlLmdhbWUucm91bmQpfVwiXG4gICAgZWxzZVxuICAgICAgcm91bmQgPSBcIkhFQURcIlxuICBlbHNlXG4gICAgdHVybiA9IFwiU0VUVVBcIlxuICAgIHJvdW5kID0gJydcblxuICB0dXJuUm91bmQgPVxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICd0dXJuUm91bmQnLCBbXG4gICAgICB0dXJuXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiByb3VuZFNpZGUsIHJvdW5kXG4gICAgXVxuXG4gIHNoU2lkZSA9IHNoLm1ldGEuc2lkZVxuXG4gIHN3aXRjaCBzaC5tZXRhLnR5cGVcbiAgICAjIExvYWQgc3RhdGUgZnJvbSB1cmxcbiAgICB3aGVuICdsb2FkJ1xuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgJ0xvYWRlZCBzdGF0ZSBmcm9tIFVSTCdcbiAgICAgIF1cbiAgICB3aGVuICdpcCdcbiAgICAgIFtpcFVTQSwgaXBVU1NSXSA9IHNoLm1ldGEuaXBzXG4gICAgICBjb3VudHJ5ID0gc2gubWV0YS5jb3VudHJ5XG4gICAgICBjdHJsVVNBID0gaWYgKGlwVVNBIC0gaXBVU1NSKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuICAgICAgY3RybFVTU1IgPSBpZiAoaXBVU1NSIC0gaXBVU0EpID49IGNvdW50cnkuc3RhYiB0aGVuICdjb250cm9sJyBlbHNlICcnXG5cbiAgICAgIGlmIHNoLm1ldGEuc2lkZSA9PSAnYm90aCdcbiAgICAgICAgaXBzID0gW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVswXVxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwiZGl2aWRlclwiLCAnLydcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzc3IgaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhWzFdXG4gICAgICAgIF1cbiAgICAgIGVsc2VcbiAgICAgICAgaXBzID0gUi5zcGFuIGNsYXNzTmFtZTogXCIje3NoLm1ldGEuc2lkZX0gaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhW3N1cGVycG93ZXJUb0luZGV4IHNoLm1ldGEuc2lkZV1cblxuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgaXBzXG4gICAgICAgIFwiIGluICN7c2gubWV0YS5jb3VudHJ5LnNob3J0bmFtZX0gKFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhICN7Y3RybFVTQX1cIiwgc2gubWV0YS5pcHNbMF1cbiAgICAgICAgXCIvXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyICN7Y3RybFVTU1J9XCIsIHNoLm1ldGEuaXBzWzFdXG4gICAgICAgIFwiKVwiXG4gICAgICBdXG4gICAgd2hlbiAndmFsJ1xuICAgICAgb2xkU2lkZSA9IG5ld1NpZGUgPSBzaC5tZXRhLnNpZGVcblxuICAgICAgaWYgc2gubWV0YS5pZCA9PSAnc2NvcmUnXG4gICAgICAgIG9sZFNpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5vbGRcbiAgICAgICAgbmV3U2lkZSA9IHNjb3JlU2lkZSBzaC5tZXRhLm5ld1xuXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFwiI3t1cHBlckZpcnN0KHNoLm1ldGEuaWQpfSBcIlxuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG9sZFNpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm9sZCwgJ2xvbmcnKX0gXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2Fycm93JywgJ+KelCAnXG4gICAgICAgIFIuc3Ryb25nIGNsYXNzTmFtZTogbmV3U2lkZSwgXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICBdXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBzaWRlID0gcm91bmRTaWRlXG4gICAgICByb3VuZFRpdGxlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgICAgICAgXCJIZWFkbGluZSBQaGFzZVwiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBcIiN7c2lkZS50b1VwcGVyQ2FzZSgpfSBBY3Rpb24gUm91bmQgI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgICAgIFxuICAgICAgI3NpZGUgPSBbJ3Vzc3InLCAndXNhJ11bKHNoLnN0YXRlLmdhbWUucm91bmQgKyAxKSAlIDJdXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHNpZGUsIHJvdW5kVGl0bGVcbiAgICAgIF1cbiAgICB3aGVuICd0dXJuJ1xuICAgICAgZGlzcCA9IFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgaWYgc2guc3RhdGUuZ2FtZS50dXJuICE9IDAgYW5kIHNoLnN0YXRlLmdhbWUudHVybiA8PSAxMFxuICAgICAgICBkaXNwID0gXCJUdXJuICN7ZGlzcH1cIlxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgZGlzcFxuICAgICAgXVxuICAgIGVsc2VcbiAgICAgIHNoLm1ldGEubXNnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXRlSGlzdG9yeUVudHJ5J1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgc2hvdWxkSXQgPSBmYWxzZVxuICAgIHRQID0gQHByb3BzXG4gICAgdFNoTSA9IEBwcm9wcy5zaC5tZXRhXG4gICAgblNoTSA9IG5QLnNoLm1ldGFcbiAgICAjIElQIHBsYWNlbWVudFxuICAgIGlmIHRTaE0/Lmlwcz9cbiAgICAgIHNob3VsZEl0ID0gdFNoTS5pcHNbMF0gIT0gblNoTS5pcHNbMF0gb3JcbiAgICAgICAgdFNoTS5pcHNbMV0gIT0gblNoTS5pcHNbMV1cbiAgICBpZiB0U2hNLnR5cGUgPT0gJ3ZhbCdcbiAgICAgIHNob3VsZEl0ID0gdFNoTS5uZXcgIT0gblNoTS5uZXdcbiAgICAjIElmIGN1cnJlbnQvbGF0ZXN0IGNoYW5nZWRcbiAgICBpZiB0UC5pc0xhdGVzdCAhPSBuUC5pc0xhdGVzdCBvciB0UC5pc0N1cnJlbnQgIT0gblAuaXNDdXJyZW50XG4gICAgICBzaG91bGRJdCA9IHRydWVcblxuICAgIHNob3VsZEl0XG5cbiAgcmVuZGVyOi0+XG4gICAgYXR0cnMgPVxuICAgICAgb25DbGljazogQHByb3BzLm9uQ2xpY2tcbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ2NsZWFyZml4JzogdHJ1ZVxuICAgICAgICAnU3RhdGVIaXN0b3J5LWxhdGVzdCc6IEBwcm9wcy5pc0xhdGVzdFxuICAgICAgICAnU3RhdGVIaXN0b3J5LWN1cnJlbnQnOiBAcHJvcHMuaXNDdXJyZW50XG4gICAgUi5saSBhdHRycywgc2hFbnRyeShAcHJvcHMuc2gpXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZFN0YXR1c1ZhbHVlID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1c1ZhbHVlJ1xuRGllID0gcmVxdWlyZSAnLi9EaWUnXG5cbnRhYmxlID1cbiAgJ1Njb3JlJzogJ1MnXG4gICdEZWZjb24nOiAnRCdcbiAgJ01pbE9wcy11c2EnOiAnTSdcbiAgJ01pbE9wcy11c3NyJzogJ08nXG4gICdUdXJuJzogJ1QnXG4gICdSb3VuZCc6ICdSJ1xuICAnU3BhY2UtdXNhJzogJ3AnXG4gICdTcGFjZS11c3NyJzogJ2EnXG4gICdBY3Rpb24gSGlzdG9yeSc6ICdIJ1xuICAnUm9sbCBkaWNlJzogJ2MnXG5cbmhpbGlnaHRTaG9ydGN1dExldHRlciA9ICh0aXRsZSxzaWRlPScnKS0+XG4gIHRpdGxlU2lkZSA9IHRpdGxlXG4gIGlmIHNpZGUgIT0gJycgYW5kIHRpdGxlICE9ICdSb3VuZCcgYW5kIHRpdGxlICE9ICdTY29yZSdcbiAgICB0aXRsZVNpZGUgPSBcIiN7dGl0bGV9LSN7c2lkZX1cIlxuXG4gIFtoZWFkLCB0YWlsXSA9IHRpdGxlLnNwbGl0IHRhYmxlW3RpdGxlU2lkZV1cbiAgbWlkID0gdGFibGVbdGl0bGVTaWRlXVxuICBbXG4gICAgaGVhZFxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsIG1pZFxuICAgIHRhaWxcbiAgXVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXMnXG5cbiAgcm9sbERpY2U6IC0+XG4gICAgXy5lYWNoIEByZWZzLCAocmVmKS0+IHJlZi5yb2xsRGllKClcblxuICBoYW5kbGVCb3RoQ2xpY2s6IC0+XG4gICAgQHJvbGxEaWNlKClcblxuICByZW5kZXI6IC0+XG4gIFxuICAgIHNjb3JlU2lkZSA9ICcnXG4gICAgaWYgQHByb3BzLnNjb3JlICE9IDBcbiAgICAgIHNjb3JlU2lkZSA9IGlmIEBwcm9wcy5zY29yZSA8IDAgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgIyBSb3VuZDogMCBpcyBoZWFkbGluZSwgb2RkcyBhcmUgVVNTUiwgZXZlbnMgYXJlIFVTQVxuICAgIHJvdW5kID0gaWYgQHByb3BzLnJvdW5kID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwoQHByb3BzLnJvdW5kIC8gMilcbiAgICByb3VuZFNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5yb3VuZCAhPSAwXG4gICAgICByb3VuZFNpZGUgPSBpZiBAcHJvcHMucm91bmQgJSAyID09IDEgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgdHVybiA9IHN3aXRjaCBAcHJvcHMudHVyblxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIEBwcm9wcy50dXJuXG5cbiAgICAjIFNob3J0aGFuZCBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICBzdGF0dXNWYWx1ZSA9IChpZD0nJywgdGl0bGU9JycsIHZhbD0nJywgc2lkZT0nJyk9PlxuICAgICAgdGl0bGUgPSBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgdGl0bGUsIHNpZGVcbiAgICAgIEJvYXJkU3RhdHVzVmFsdWUgXy5hc3NpZ24ge2lkLCB0aXRsZSwgdmFsLCBzaWRlfSwgaGFuZGxlVmFsQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGlja1xuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFN0YXR1cycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3Njb3JlJywgJ1Njb3JlJywgTWF0aC5hYnMoQHByb3BzLnNjb3JlKSwgc2NvcmVTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdkZWZjb24nLCAnRGVmY29uJywgQHByb3BzLmRlZmNvblxuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMF0sICd1c2EnXG4gICAgICAgIHN0YXR1c1ZhbHVlICdtaWxvcHMnLCAnTWlsT3BzJywgQHByb3BzLm1pbG9wc1sxXSwgJ3Vzc3InXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICd0dXJuJywgJ1R1cm4nLCB0dXJuXG4gICAgICAgIHN0YXR1c1ZhbHVlICdyb3VuZCcsICdSb3VuZCcsIHJvdW5kLCByb3VuZFNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnU3BhY2UnLCBAcHJvcHMuc3BhY2VbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzJywgW1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXVuZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndW5kbycpLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeiknXG4gICAgICAgICAgICAnIFVuZG8nXG4gICAgICAgICAgXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLWhpc3RvcnknLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndG9nZ2xlJyksXG4gICAgICAgICAgICBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgJ0FjdGlvbiBIaXN0b3J5J1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXJlZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwncmVkbycpLCBbXG4gICAgICAgICAgICAnUmVkbyAnXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeSknXG4gICAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnZGljZScsIFtcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c2EnLCBzaWRlOiAndXNhJ1xuICAgICAgICBSLmEgY2xhc3NOYW1lOiAncm9sbC1kaWNlJywgb25DbGljazogQGhhbmRsZUJvdGhDbGljaywgaGlsaWdodFNob3J0Y3V0TGV0dGVyKCdSb2xsIGRpY2UnKVxuICAgICAgICBEaWUgcmVmOiAnZGllLXVzc3InLCBzaWRlOiAndXNzcidcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXNWYWx1ZSdcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC52YWwgIT0gQHByb3BzLnZhbCBvciBuUC5zaWRlICE9IEBwcm9wcy5zaWRlXG4gIHJlbmRlcjogLT5cbiAgICBzaWRlQ2xhc3MgPSBzd2l0Y2ggQHByb3BzLnNpZGVcbiAgICAgIHdoZW4gJ3VzYScsICd1c3NyJyB0aGVuIEBwcm9wcy5zaWRlXG4gICAgICBlbHNlICcnXG5cbiAgICBkZWNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdkZWMnXG4gICAgICBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2suYmluZChudWxsLCBAcHJvcHMuaWQsICdkZWMnLCBAcHJvcHMuc2lkZSlcbiAgICBpbmNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdpbmMnLFxuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnaW5jJywgQHByb3BzLnNpZGUpXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c0xhYmVsXCIsIEBwcm9wcy50aXRsZVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c1ZhbHVlICN7c2lkZUNsYXNzfVwiLCBbXG4gICAgICAgIFIuc3BhbiBkZWNBdHRycywgJ+KXgCdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3ZhbCcsIEBwcm9wcy52YWxcbiAgICAgICAgUi5zcGFuIGluY0F0dHJzLCAn4pa2J1xuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnplcm9QYWQgPSByZXF1aXJlICcuLi9saWJzL3plcm9QYWQnXG5cbmNhcmRTdGFnZXMgPSAxOidFQVJMWScsIDI6J01JRCcsIDM6J0xBVEUnXG5cbmNhcmRDbGFzc05hbWUgPSAocHJvcHMpIC0+XG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIFwib3duZXItI3twcm9wcy5vd25lcn0gY2FyZC12aWV3LSN7cHJvcHMudmlld30gI3tjbGFzc2VzfVwiXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkJ1xuICByZW5kZXI6IC0+XG4gICAgbWFpbiA9IFtcbiAgICAgICAgUi5zcGFuIHtjbGFzc05hbWU6ICdjYXJkLXRpdGxlLWhvbGRlcicgfSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLXN0YWdlJywgY2FyZFN0YWdlc1tAcHJvcHMuc3RhZ2VdXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLW9wcycsIGlmIEBwcm9wcy5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBAcHJvcHMub3BzXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLXRpdGxlJywgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy50aXRsZX0gXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLWlkJywgXCIjI3tAcHJvcHMuaWR9XCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5wIGNsYXNzTmFtZTogJ2NhcmQtdGV4dCcsIEBwcm9wcy50ZXh0XG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMudmlldyA9PSAnaW1nJ1xuICAgICAgbWFpbiA9XG4gICAgICAgIFIuaW1nXG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2FyZC1pbWcnXG4gICAgICAgICAgc3JjOiBcIi9pbWFnZXMvY2FyZHMvc20vI3t6ZXJvUGFkIEBwcm9wcy5pZH0uanBnXCJcblxuICAgIFIuYSBocmVmOiBcIiMvY2FyZC8je0Bwcm9wcy5pZH1cIiwgY2xhc3NOYW1lOiBjYXJkQ2xhc3NOYW1lKEBwcm9wcykgKyAnIGNhcmQnLCBtYWluXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZEltZydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQgY2FyZEltZycsXG4gICAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgIFIuaW1nIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5DYXJkID0gcmVxdWlyZSAnLi9DYXJkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZExpc3QnXG4gIHJlbmRlcjogLT5cbiAgICBjbGFzc05hbWUgPSBjeFxuICAgICAgJ2NhcmRMaXN0JzogdHJ1ZVxuICAgICAgJ2NhcmRMaXN0RnVsbCc6IEBwcm9wcy52aWV3ID09ICd0ZXh0J1xuICAgICAgJ2NhcmRMaXN0SW1nJzogQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICBSLmRpdiB7Y2xhc3NOYW1lfSwgQHByb3BzLmNhcmRzLm1hcCAoZWwpID0+XG4gICAgICBDYXJkIF8ubWVyZ2UgZWwsXG4gICAgICAgIGtleTogXCJjYXJkI3tlbC5pZH1cIlxuICAgICAgICBzaG93RnVsbFRleHQ6IEBwcm9wcy5mdWxsVGV4dFxuICAgICAgICB2aWV3OiBAcHJvcHMudmlld1xuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnRGllJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QLCBuUyktPlxuICAgIG5TLnJvbGxpbmcgIT0gQHN0YXRlLnJvbGxpbmcgb3IgblMudmFsICE9IEBzdGF0ZS52YWxcblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm9sbHM6IDMwXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHZhbDogMVxuICAgIHJvbGxpbmc6IGZhbHNlXG4gICAgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gIGNsaWNrRGllOiAtPlxuICAgIEByb2xsRGllKClcblxuICByb2xsRGllOiAtPlxuICAgIHJldHVybiBpZiBAc3RhdGUucm9sbGluZ1xuICAgIEBpdGVyYXRlUm9sbCgpXG5cbiAgaXRlcmF0ZVJvbGw6IC0+XG4gICAgaWYgbm90IEBzdGF0ZS5yb2xsaW5nXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogdHJ1ZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gICAgaWYgQHN0YXRlLnJvbGxzID09IDBcbiAgICAgIEBzZXRTdGF0ZSByb2xsaW5nOiBmYWxzZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuICAgIGVsc2VcbiAgICAgIHRpbWUgPSAoMTAgLSBAc3RhdGUucm9sbHMpICogMTggKyA1MFxuICAgICAgaWYgQHN0YXRlLnJvbGxzID4gMTBcbiAgICAgICAgdGltZSA9IDUwXG5cbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICB2YWw6IF8ucmFuZG9tKDEsNilcbiAgICAgICAgcm9sbHM6IEBzdGF0ZS5yb2xscyAtIDFcbiAgICAgIHNldFRpbWVvdXQgQGl0ZXJhdGVSb2xsLCB0aW1lXG5cbiAgcmVuZGVyOiAtPlxuICAgIHJvbGxpbmcgPSBpZiBAc3RhdGUucm9sbGluZyBhbmQgQHN0YXRlLnJvbGxzID4gMCB0aGVuICdyb2xsaW5nJyBlbHNlICcnXG4gICAgUi5kaXYgb25DbGljazogQGNsaWNrRGllLCBjbGFzc05hbWU6IFwiZGllIGRpZS0je0Bwcm9wcy5zaWRlfSAje3JvbGxpbmd9XCIsIEBzdGF0ZS52YWxcblxuIiwiUiA9IFJlYWN0LkRPTVxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnZm9vdGVyJywgW1xuICAgICAgUi5wIHt9LCBbXG4gICAgICAgIFwiVHdpU3RydWcgd2FzIG1hZGUgYnkgXCJcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9qanQuaW8nLCAnSmFzb24gVHJpbGwnXG4gICAgICAgICcgd2l0aCBoZWxwIGZyb20gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2NvZmZlZXNjcmlwdC5vcmcvJywgJ0NvZmZlZVNjcmlwdCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC8nLCAnUmVhY3QnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9icm93c2VyaWZ5Lm9yZy8nLCAnQnJvd3NlcmlmeSdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2xvZGFzaC5jb20vJywgJ0xvLURhc2gnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsICdCb290c3RyYXAnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly96ZXB0b2pzLmNvbScsICdaZXB0bydcbiAgICAgICAgJywgYW5kICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9ndWxwanMuY29tJywgJ0d1bHAnXG4gICAgICAgICcuJ1xuICAgICAgICBSLmJyKClcbiAgICAgICAgJ0l0IG93ZXMgaXRzIGV4aXN0ZW5jZSB0byAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20nLCAnVHdpbGlnaHQgU3RyYXRlZ3knXG4gICAgICAgICcuIENvbW1lbnRzLCBzdWdnZXN0aW9ucywgYW5kIGJ1ZyByZXBvcnRzIGNhbiBiZSBhaW1lZCBhdCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2l0aHViLmNvbS9qanQvdHdpc3RydWcvaXNzdWVzJywgJ0dpdGh1YidcbiAgICAgICAgJyBvciAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpdHRlci5jb20vamFzb250cmlsbCcsICdAamFzb250cmlsbCdcbiAgICAgICAgJy4nXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ05hdlZpZXcnXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICBhY3RpdmU6ICcnXG5cbiAgcmVuZGVyOiAtPlxuXG4gICAgbGkgPSAobWVudUtleSwgaHJlZiwgdGl0bGUpPT5cbiAgICAgIFIubGkgY2xhc3NOYW1lOiBjeCgnYWN0aXZlJzogQHByb3BzLmFjdGl2ZSA9PSBtZW51S2V5KSxcbiAgICAgICAgUi5hIGhyZWY6IGhyZWYsIHRpdGxlXG5cbiAgICBSLm5hdiBjbGFzc05hbWU6IFwibmF2YmFyIFwiLCByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiwgW1xuXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgaHJlZjogJyMvJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2lcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1Z1wiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG5cbiAgICAgICAgUi51bCBjbGFzc05hbWU6IFwibmF2IG5hdmJhci1uYXZcIiwgW1xuICAgICAgICAgICNsaSAnZ2FtZScsICcjL2dhbWUnLCAnR2FtZSdcbiAgICAgICAgICBsaSAnY2FyZHMnLCAnIy9jYXJkcycsICdDYXJkcydcbiAgICAgICAgICBsaSAnYm9hcmQnLCAnIy9ib2FyZCcsICdCb2FyZCdcbiAgICAgICAgICBsaSAnYWJvdXQnLCAnIy9hYm91dCcsICdBYm91dCdcbiAgICAgICAgXVxuXG4gICAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIl19
