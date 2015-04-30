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
    value = value.replace(/U-2|KAL-007/gi, "");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvYXBwL2RhdGEvbWFwLWRhdGEtdjIuanNvbiIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbGliL2NhcmRzLmpzb24iLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9Ud2lzdHJ1Zy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvTWljcm9FdmVudENsYXNzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvY2FyZENsYXNzTmFtZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2NvbnRpZW50Q29kZUZyb21PbmVMZXR0ZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclRydXRoeS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclVuaXF1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclZhbGlkQ2FyZElkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2dhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9nYW1lVmFsRGlzcGxheS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvaW50VG9TdHJXaXRoU2lnbi5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL251bVRvQ2hhci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9xcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3JhbmdlZEdhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zZXRQYWdlVGl0bGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduRnJvbURpci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3NpZ25TdHJpbmcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWROdW1PckRhc2guY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWRTdHIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zb3J0TnVtZXJpY2FsLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3RhdGVFbmNvZGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3VwZXJTdGF0cy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3N1cGVycG93ZXJUb0luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvdXBwZXJGaXJzdC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3ZpZXdzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvemVyb1BhZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9BYm91dC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZFBpYy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NhcmRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NvdW50cmllcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9HYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TUFFNUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLGVBQVg7T0FBTixFQUNFLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxRQUFBLFNBQUEsRUFBVyxjQUFYO0FBQUEsUUFBMkIsSUFBQSxFQUFNLElBQWpDO09BQUosRUFBMkM7UUFDekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLEtBQVg7U0FBUCxFQUF5QixLQUF6QixDQUR5QyxFQUV6QyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVcsT0FBWDtTQUFQLEVBQTJCLE9BQTNCLENBRnlDO09BQTNDLENBREYsQ0FGNEIsRUFRNUIsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLFFBQUEsU0FBQSxFQUFXLGdCQUFYO09BQUwsRUFBa0MsQ0FFaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBRmdDLEVBR2hDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUhnQyxFQUloQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FKZ0MsQ0FBbEMsQ0FSNEI7S0FBOUIsQ0FERixFQU5NO0VBQUEsQ0FKUjtDQURlLENBSGpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsY0FBUixDQUFBLENBQXdCLFNBQXhCLEVBQW1DLENBQUMsVUFBRCxDQUFuQyxDQUFqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJjb3VudHJpZXNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVTQVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJVU0FcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOiBcInVzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJ1c2FcIixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQ2FuYWRhLEN1YmEsTWV4aWNvLEphcGFuXCIsXG4gICAgICBcImlkXCI6IDAsXG4gICAgICBcInhcIjogMjAwLFxuICAgICAgXCJ5XCI6IDY0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInVzXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVU1NSXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlVTU1JcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOiBcInVzc3JcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwidXNzclwiLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJBZmdoYW5pc3RhbixGaW5sYW5kLE4gS29yZWEsUG9sYW5kLFJvbWFuaWFcIixcbiAgICAgIFwiaWRcIjogMSxcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInVzXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBdXN0cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkF1c3RyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkUgR2VybWFueSxIdW5nYXJ5LEl0YWx5LFcgR2VybWFueVwiLFxuICAgICAgXCJpZFwiOiAyLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYXVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJlbmVsdXhcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQmVuZWx1eFwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlcgR2VybWFueSxVS1wiLFxuICAgICAgXCJpZFwiOiAzLFxuICAgICAgXCJ4XCI6IDQwMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYmVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCdWxnYXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCdWxnYXJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlR1cmtleSxHcmVlY2VcIixcbiAgICAgIFwiaWRcIjogNCxcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJ1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYnVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2FuYWRhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNhbmFkYVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMixcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVLXCIsXG4gICAgICBcImlkXCI6IDUsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY2FcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ3plY2hcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQb2xhbmQsRSBHZXJtYW55LEh1bmdhcnlcIixcbiAgICAgIFwiaWRcIjogNixcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImN6XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY3pcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRGVubWFya1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJEZW5tYXJrXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVyBHZXJtYW55LFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOiA3LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZGVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkUgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFLkdlcm1cIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlZ1wiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAzLFxuICAgICAgXCJsaW5rc1wiOiBcIlBvbGFuZCxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjogOCxcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRmlubGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJGaW5sYW5kXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMSxcbiAgICAgIFwibGlua3NcIjogXCJTd2VkZW5cIixcbiAgICAgIFwiaWRcIjogOSxcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJmaVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGcmFuY2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRnJhbmNlXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQWxnZXJpYSxVSyxXIEdlcm1hbnksSXRhbHksU3BhaW5cXC9Qb3J0dWdhbFwiLFxuICAgICAgXCJpZFwiOiAxMCxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImZyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZnJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR3JlZWNlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkdyZWVjZVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkl0YWx5LFl1Z29zbGF2aWEsVHVya2V5XCIsXG4gICAgICBcImlkXCI6IDExLFxuICAgICAgXCJ4XCI6IDU2MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZ3JcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkh1bmdhcnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSHVuZ2FyeVwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlJvbWFuaWEsWXVnb3NsYXZpYVwiLFxuICAgICAgXCJpZFwiOiAxMixcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImh1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJdGFseVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJdGFseVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIll1Z29zbGF2aWEsU3BhaW5cXC9Qb3J0dWdhbFwiLFxuICAgICAgXCJpZFwiOiAxMyxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIml0XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJOb3J3YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTm9yd2F5XCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVUssU3dlZGVuXCIsXG4gICAgICBcImlkXCI6IDE0LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJub1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUG9sYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBvbGFuZFwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAxNSxcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJSb21hbmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlJvbWFuaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUdXJrZXksWXVnb3NsYXZpYVwiLFxuICAgICAgXCJpZFwiOiAxNixcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInJvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTcGFpblxcL1BvcnR1Z2FsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNwYWluXFwvUG9cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJNb3JvY2NvXCIsXG4gICAgICBcImlkXCI6IDE3LFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3BcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzcFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTd2VkZW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU3dlZGVuXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDE4LFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzd1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInN3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlR1cmtleVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJUdXJrZXlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMTksXG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ0dVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVUtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVUtcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA1LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDUsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMjAsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1a1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVyBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlcuR2VybVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIndnXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDIxLFxuICAgICAgXCJ4XCI6IDQ4MCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwid1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJZdWdvc2xhdmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIll1Z29zbGF2XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDIyLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwieXVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVneXB0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkVneXB0XCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJc3JhZWwsTGlieWEsU3VkYW5cIixcbiAgICAgIFwiaWRcIjogMjMsXG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlZ1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiR3VsZiBTdHNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIklyYXEsU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcImlkXCI6IDI0LFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImd1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcmFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIklyYW5cIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpblwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSXJhcSxBZmdoYW5pc3RhbixQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOiAyNSxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImluXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklyYXFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXJhcVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImlxXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMSxcbiAgICAgIFwibGlua3NcIjogXCJTYXVkaSBBcmFiaWEsSm9yZGFuXCIsXG4gICAgICBcImlkXCI6IDI2LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaXFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXNyYWVsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIklzcmFlbFwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSm9yZGFuLExlYmFub24sU3lyaWFcIixcbiAgICAgIFwiaWRcIjogMjcsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpc1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkpvcmRhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJKb3JkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlNhdWRpIEFyYWJpYSxMZWJhbm9uXCIsXG4gICAgICBcImlkXCI6IDI4LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiam9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJqXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxlYmFub25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTGViYW5vblwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU3lyaWFcIixcbiAgICAgIFwiaWRcIjogMjksXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJsZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxpYnlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkxpYnlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUdW5pc2lhXCIsXG4gICAgICBcImlkXCI6IDMwLFxuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibGlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJsaVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU2F1ZGkgQVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDMxLFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic2FcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3lyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU3lyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAxLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAzMixcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInN5XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3lcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQWZnaGFuaXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWZnaGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOiAzMyxcbiAgICAgIFwieFwiOiA3NjAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFmXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYWZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQXVzdHJhbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiA0LFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTWFsYXlzaWFcIixcbiAgICAgIFwiaWRcIjogMzQsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImF1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJ1cm1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJ1cm1hXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSW5kaWEsTGFvc1xcL0NhbWJvZGlhXCIsXG4gICAgICBcImlkXCI6IDM1LFxuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYnVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkluZGlhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaWRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6IDM2LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkluZG9uZXNpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImlzXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTWFsYXlzaWEsUGhpbGxpcHBpbmVzXCIsXG4gICAgICBcImlkXCI6IDM3LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSmFwYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSmFwYW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBoaWxsaXBwaW5lcyxTIEtvcmVhLFRhaXdhblwiLFxuICAgICAgXCJpZFwiOiAzOCxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiamFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJqXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhb3NcXC9DYW1ib2RpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJMYW9zXFwvQ2FtXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVGhhaWxhbmQsVmlldG5hbVwiLFxuICAgICAgXCJpZFwiOiAzOSxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMjU2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImxhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNYWxheXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNYWxheXNpYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlRoYWlsYW5kXCIsXG4gICAgICBcImlkXCI6IDQwLFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1hXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJOIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk4uS29yZWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJua1wiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDMsXG4gICAgICBcImxpbmtzXCI6IFwiUyBLb3JlYVwiLFxuICAgICAgXCJpZFwiOiA0MSxcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGFraXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGFraXN0YW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA0MixcbiAgICAgIFwieFwiOiA4NDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGhpbGxpcHBpbmVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBoaWxsaXBcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDMsXG4gICAgICBcInhcIjogOTIwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBoXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicGhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUyBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLktvcmVhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2tcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlRhaXdhblwiLFxuICAgICAgXCJpZFwiOiA0NCxcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUYWl3YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVGFpd2FuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDUsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDEyOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ0YVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRoYWlsYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlRoYWlsYW5kXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVmlldG5hbVwiLFxuICAgICAgXCJpZFwiOiA0NixcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ0aFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlZpZXRuYW1cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVmlldG5hbVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA0NyxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ2aVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQWxnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBbGdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJNb3JvY2NvLFR1bmlzaWEsU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwiaWRcIjogNDgsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhbFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFuZ29sYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBbmdvbGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkJvdHN3YW5hLFNvdXRoIEFmcmljYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOiA0OSxcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFuXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQm90c3dhbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQm90c3dhbmFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlNvdXRoIEFmcmljYSxaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOiA1MCxcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDYW1lcm9vblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDYW1lcm9vblwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTmlnZXJpYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOiA1MSxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFdGhpb3BpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFdGhpb3BpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU3VkYW4sU29tYWxpYVwiLFxuICAgICAgXCJpZFwiOiA1MixcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImV0XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJdm9yeSBDXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXZXN0IEFmcmljYSxOaWdlcmlhXCIsXG4gICAgICBcImlkXCI6IDUzLFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXZcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIktlbnlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIktlbnlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTb21hbGlhLFNFIEFmcmljYVwiLFxuICAgICAgXCJpZFwiOiA1NCxcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImtlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwia1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNb3JvY2NvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1vcm9jY29cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcImlkXCI6IDU1LFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibW9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk5pZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTmlnZXJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwiaWRcIjogNTYsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJuaVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU0UgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNFIEFmcmljYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjogNTcsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNhaGFyYSBTXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3NcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA1OCxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNvbWFsaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU29tYWxpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDU5LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic29cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU291dGggQWZcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDYwLFxuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA2NzIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic2FcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3VkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiU3VkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MSxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInN1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVHVuaXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJUdW5pc2lhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjIsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ0dVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiV2VzdCBBZlwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDYzLFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwid2VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlphaXJlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlphaXJlXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOiA2NCxcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInphXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiemFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiWmltYmFid2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiWmltYmFid2VcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2NSxcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInppXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiemlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ29zdGEgUmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDb3N0YSBSXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIb25kdXJhcyxOaWNhcmFndWEsUGFuYW1hXCIsXG4gICAgICBcImlkXCI6IDY2LFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY29cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDdWJhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkN1YmFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkhhaXRpLE5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOiA2NyxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImN1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY3VcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJEb21pbmljIFJcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkhhaXRpXCIsXG4gICAgICBcImlkXCI6IDY4LFxuICAgICAgXCJ4XCI6IDI4MCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZG9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVsIFNhbHZhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkVsIFNhbHZhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIb25kdXJhcyxHdWF0ZW1hbGFcIixcbiAgICAgIFwiaWRcIjogNjksXG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVsXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJHdWF0ZW1hbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiR3VhdGVtYWxhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIb25kdXJhcyxNZXhpY29cIixcbiAgICAgIFwiaWRcIjogNzAsXG4gICAgICBcInhcIjogMTIwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJndVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSGFpdGlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSGFpdGlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA3MSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImhhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSG9uZHVyYXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSG9uZHVyYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOiA3MixcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImhvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaG9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTWV4aWNvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1leGljb1wiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDczLFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTmljYXJhZ3VhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDc0LFxuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBhbmFtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQYW5hbWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkNvbHVtYmlhXCIsXG4gICAgICBcImlkXCI6IDc1LFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwicGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFyZ2VudGluYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBcmdlbnRpbmFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkNoaWxlLFBhcmFndWF5LFVydWd1YXlcIixcbiAgICAgIFwiaWRcIjogNzYsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDY0MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQm9saXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCb2xpdmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQYXJhZ3VheSxQZXJ1XCIsXG4gICAgICBcImlkXCI6IDc3LFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA1MTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYm9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJib1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCcmF6aWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQnJhemlsXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJVcnVndWF5LFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOiA3OCxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYnJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2hpbGVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ2hpbGVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBlcnVcIixcbiAgICAgIFwiaWRcIjogNzksXG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNoXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY2hcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ29sdW1iaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ29sdW1iaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkVjdWFkb3IsVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6IDgwLFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA0NDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY29cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJjb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFY3VhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkVjdWFkb3JcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlBlcnVcIixcbiAgICAgIFwiaWRcIjogODEsXG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVjXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQYXJhZ3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQYXJhZ3VheVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOiA4MixcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTc2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGVydVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQZXJ1XCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogODMsXG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVXJ1Z3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJVcnVndWF5XCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogODQsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1clwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVmVuZXp1ZWxhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDg1LFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidmVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ2XCJcbiAgICB9XG4gIF0sXG4gIFwicmVnaW9uSW5mb05vZGVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkXCI6IFwiZXVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXVyb3BlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgXCJXXCJcbiAgICAgIF0sXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDUsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJtZVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1cIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgN1xuICAgICAgXSxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDYsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhc1wiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcIm5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFzaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDlcbiAgICAgIF0sXG4gICAgICBcImV4dHJhXCI6IFwiMSBwZXIgU0UgY291bnRyeSwgMiBmb3IgVGhhaWxhbmRcIixcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogNixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcImFmXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwibmFtZVwiOiBcIkFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDZcbiAgICAgIF0sXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDUsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJjYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcIm5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY1wiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICA1XG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwic2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgNlxuICAgICAgXSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgXCJsaW5rc1wiOiBbXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMCxcbiAgICAgIFwidGFyZ2V0XCI6IDUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDYW5hZGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMCxcbiAgICAgIFwidGFyZ2V0XCI6IDY3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiQ3ViYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAwLFxuICAgICAgXCJ0YXJnZXRcIjogNzMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMCxcbiAgICAgIFwidGFyZ2V0XCI6IDM4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiSmFwYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDMzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIkFmZ2hhbmlzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiA5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIkZpbmxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDQxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIk4gS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDE1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogMTYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJFIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIsXG4gICAgICBcInRhcmdldFwiOiAxMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJIdW5nYXJ5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogMTMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDMsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJlbmVsdXhcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDMsXG4gICAgICBcInRhcmdldFwiOiAyMCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJlbmVsdXhcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNCxcbiAgICAgIFwidGFyZ2V0XCI6IDE5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQsXG4gICAgICBcInRhcmdldFwiOiAxMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiR3JlZWNlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1LFxuICAgICAgXCJ0YXJnZXRcIjogMjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDYW5hZGFcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNixcbiAgICAgIFwidGFyZ2V0XCI6IDE1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDYsXG4gICAgICBcInRhcmdldFwiOiA4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJFIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDYsXG4gICAgICBcInRhcmdldFwiOiAxMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNyxcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRGVubWFya1wiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNyxcbiAgICAgIFwidGFyZ2V0XCI6IDE4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRGVubWFya1wiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogOCxcbiAgICAgIFwidGFyZ2V0XCI6IDE1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4LFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFIEdlcm1hbnlcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDksXG4gICAgICBcInRhcmdldFwiOiAxOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZpbmxhbmRcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogNDgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJBbGdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiAxMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDE3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiU3BhaW5cXC9Qb3J0dWdhbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTEsXG4gICAgICBcInRhcmdldFwiOiAxMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMSxcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTEsXG4gICAgICBcInRhcmdldFwiOiAxOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTIsXG4gICAgICBcInRhcmdldFwiOiAxNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJSb21hbmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMixcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEzLFxuICAgICAgXCJ0YXJnZXRcIjogMjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEzLFxuICAgICAgXCJ0YXJnZXRcIjogMTcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIlNwYWluXFwvUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE0LFxuICAgICAgXCJ0YXJnZXRcIjogMjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTQsXG4gICAgICBcInRhcmdldFwiOiAxOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTYsXG4gICAgICBcInRhcmdldFwiOiAxOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE2LFxuICAgICAgXCJ0YXJnZXRcIjogMjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTcsXG4gICAgICBcInRhcmdldFwiOiA1NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE5LFxuICAgICAgXCJ0YXJnZXRcIjogMzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJUdXJrZXlcIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyMyxcbiAgICAgIFwidGFyZ2V0XCI6IDI3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJJc3JhZWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDIzLFxuICAgICAgXCJ0YXJnZXRcIjogMzAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIkxpYnlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyMyxcbiAgICAgIFwidGFyZ2V0XCI6IDYxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJTdWRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNCxcbiAgICAgIFwidGFyZ2V0XCI6IDI2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNCxcbiAgICAgIFwidGFyZ2V0XCI6IDMxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI1LFxuICAgICAgXCJ0YXJnZXRcIjogMjYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjUsXG4gICAgICBcInRhcmdldFwiOiAzMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNSxcbiAgICAgIFwidGFyZ2V0XCI6IDQyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI2LFxuICAgICAgXCJ0YXJnZXRcIjogMzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFxXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNixcbiAgICAgIFwidGFyZ2V0XCI6IDI4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjcsXG4gICAgICBcInRhcmdldFwiOiAyOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjcsXG4gICAgICBcInRhcmdldFwiOiAyOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkxlYmFub25cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI3LFxuICAgICAgXCJ0YXJnZXRcIjogMzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjgsXG4gICAgICBcInRhcmdldFwiOiAzMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkpvcmRhblwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjgsXG4gICAgICBcInRhcmdldFwiOiAyOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkpvcmRhblwiLFxuICAgICAgICBcIkxlYmFub25cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI5LFxuICAgICAgXCJ0YXJnZXRcIjogMzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJMZWJhbm9uXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDMwLFxuICAgICAgXCJ0YXJnZXRcIjogNjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJMaWJ5YVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzMsXG4gICAgICBcInRhcmdldFwiOiA0MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM0LFxuICAgICAgXCJ0YXJnZXRcIjogNDAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmFsaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzUsXG4gICAgICBcInRhcmdldFwiOiAzNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiSW5kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM1LFxuICAgICAgXCJ0YXJnZXRcIjogMzksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdXJtYVwiLFxuICAgICAgICBcIkxhb3NcXC9DYW1ib2RpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzYsXG4gICAgICBcInRhcmdldFwiOiA0MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkluZGlhXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM3LFxuICAgICAgXCJ0YXJnZXRcIjogNDAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzcsXG4gICAgICBcInRhcmdldFwiOiA0MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzgsXG4gICAgICBcInRhcmdldFwiOiA0MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUGhpbGxpcHBpbmVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM5LFxuICAgICAgXCJ0YXJnZXRcIjogNDYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzksXG4gICAgICBcInRhcmdldFwiOiA0NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkxhb3NcXC9DYW1ib2RpYVwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQwLFxuICAgICAgXCJ0YXJnZXRcIjogNDYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJNYWxheXNpYVwiLFxuICAgICAgICBcIlRoYWlsYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0MSxcbiAgICAgIFwidGFyZ2V0XCI6IDQ0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTiBLb3JlYVwiLFxuICAgICAgICBcIlMgS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ0LFxuICAgICAgXCJ0YXJnZXRcIjogNDUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJTIEtvcmVhXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0NixcbiAgICAgIFwidGFyZ2V0XCI6IDQ3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVGhhaWxhbmRcIixcbiAgICAgICAgXCJWaWV0bmFtXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OCxcbiAgICAgIFwidGFyZ2V0XCI6IDU1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ4LFxuICAgICAgXCJ0YXJnZXRcIjogNjIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDgsXG4gICAgICBcInRhcmdldFwiOiA1OCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJTYWhhcmFuIFN0YXRlc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDksXG4gICAgICBcInRhcmdldFwiOiA1MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIkJvdHN3YW5hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OSxcbiAgICAgIFwidGFyZ2V0XCI6IDYwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiU291dGggQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OSxcbiAgICAgIFwidGFyZ2V0XCI6IDY0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiWmFpcmVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUwLFxuICAgICAgXCJ0YXJnZXRcIjogNjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTAsXG4gICAgICBcInRhcmdldFwiOiA2NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJvdHN3YW5hXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUxLFxuICAgICAgXCJ0YXJnZXRcIjogNTYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDYW1lcm9vblwiLFxuICAgICAgICBcIk5pZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUxLFxuICAgICAgXCJ0YXJnZXRcIjogNjQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDYW1lcm9vblwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MixcbiAgICAgIFwidGFyZ2V0XCI6IDYxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTdWRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTIsXG4gICAgICBcInRhcmdldFwiOiA1OSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkV0aGlvcGlhXCIsXG4gICAgICAgIFwiU29tYWxpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTMsXG4gICAgICBcInRhcmdldFwiOiA2MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUzLFxuICAgICAgXCJ0YXJnZXRcIjogNTYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIk5pZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU0LFxuICAgICAgXCJ0YXJnZXRcIjogNTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJLZW55YVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU0LFxuICAgICAgXCJ0YXJnZXRcIjogNTcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJLZW55YVwiLFxuICAgICAgICBcIlNFIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTUsXG4gICAgICBcInRhcmdldFwiOiA2MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk1vcm9jY29cIixcbiAgICAgICAgXCJXZXN0IEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTYsXG4gICAgICBcInRhcmdldFwiOiA1OCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk5pZ2VyaWFcIixcbiAgICAgICAgXCJTYWhhcmFuIFN0YXRlc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTcsXG4gICAgICBcInRhcmdldFwiOiA2NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlNFIEFmcmljYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NCxcbiAgICAgIFwidGFyZ2V0XCI6IDY1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiWmFpcmVcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjYsXG4gICAgICBcInRhcmdldFwiOiA3MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjYsXG4gICAgICBcInRhcmdldFwiOiA3NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY2LFxuICAgICAgXCJ0YXJnZXRcIjogNzUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiUGFuYW1hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NyxcbiAgICAgIFwidGFyZ2V0XCI6IDcxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ3ViYVwiLFxuICAgICAgICBcIkhhaXRpXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NyxcbiAgICAgIFwidGFyZ2V0XCI6IDc0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ3ViYVwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjgsXG4gICAgICBcInRhcmdldFwiOiA3MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjksXG4gICAgICBcInRhcmdldFwiOiA3MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVsIFNhbHZhZG9yXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY5LFxuICAgICAgXCJ0YXJnZXRcIjogNzAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkd1YXRlbWFsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzAsXG4gICAgICBcInRhcmdldFwiOiA3MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3MCxcbiAgICAgIFwidGFyZ2V0XCI6IDczLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3MixcbiAgICAgIFwidGFyZ2V0XCI6IDc0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSG9uZHVyYXNcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc1LFxuICAgICAgXCJ0YXJnZXRcIjogODAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJQYW5hbWFcIixcbiAgICAgICAgXCJDb2x1bWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NixcbiAgICAgIFwidGFyZ2V0XCI6IDc5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiQ2hpbGVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc2LFxuICAgICAgXCJ0YXJnZXRcIjogODIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzYsXG4gICAgICBcInRhcmdldFwiOiA4NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc3LFxuICAgICAgXCJ0YXJnZXRcIjogODIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCb2xpdmlhXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc3LFxuICAgICAgXCJ0YXJnZXRcIjogODMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCb2xpdmlhXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzgsXG4gICAgICBcInRhcmdldFwiOiA4NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc4LFxuICAgICAgXCJ0YXJnZXRcIjogODUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc5LFxuICAgICAgXCJ0YXJnZXRcIjogODMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDaGlsZVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgwLFxuICAgICAgXCJ0YXJnZXRcIjogODEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb2x1bWJpYVwiLFxuICAgICAgICBcIkVjdWFkb3JcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgwLFxuICAgICAgXCJ0YXJnZXRcIjogODUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb2x1bWJpYVwiLFxuICAgICAgICBcIlZlbmV6dWVsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogODEsXG4gICAgICBcInRhcmdldFwiOiA4MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVjdWFkb3JcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MixcbiAgICAgIFwidGFyZ2V0XCI6IDg0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUGFyYWd1YXlcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfVxuICBdLFxuICBcImNvdW50cnlTaG9ydGN1dHNcIjoge1xuICAgIFwiZVwiOiBbXG4gICAgICBcImF1XCIsXG4gICAgICBcImJlXCIsXG4gICAgICBcImJ1XCIsXG4gICAgICBcImNhXCIsXG4gICAgICBcImN6XCIsXG4gICAgICBcImRlXCIsXG4gICAgICBcImVnXCIsXG4gICAgICBcImZpXCIsXG4gICAgICBcImZyXCIsXG4gICAgICBcImdyXCIsXG4gICAgICBcImh1XCIsXG4gICAgICBcIml0XCIsXG4gICAgICBcIm5vXCIsXG4gICAgICBcInBvXCIsXG4gICAgICBcInJvXCIsXG4gICAgICBcInNwXCIsXG4gICAgICBcInN3XCIsXG4gICAgICBcInR1XCIsXG4gICAgICBcInVrXCIsXG4gICAgICBcIndnXCIsXG4gICAgICBcInl1XCJcbiAgICBdLFxuICAgIFwibVwiOiBbXG4gICAgICBcImVnXCIsXG4gICAgICBcImd1XCIsXG4gICAgICBcImluXCIsXG4gICAgICBcImlxXCIsXG4gICAgICBcImlzXCIsXG4gICAgICBcImpvXCIsXG4gICAgICBcImxlXCIsXG4gICAgICBcImxpXCIsXG4gICAgICBcInNhXCIsXG4gICAgICBcInN5XCJcbiAgICBdLFxuICAgIFwiYVwiOiBbXG4gICAgICBcImFmXCIsXG4gICAgICBcImF1XCIsXG4gICAgICBcImJ1XCIsXG4gICAgICBcImlkXCIsXG4gICAgICBcImlzXCIsXG4gICAgICBcImphXCIsXG4gICAgICBcImxhXCIsXG4gICAgICBcIm1hXCIsXG4gICAgICBcIm5rXCIsXG4gICAgICBcInBhXCIsXG4gICAgICBcInBoXCIsXG4gICAgICBcInNrXCIsXG4gICAgICBcInRhXCIsXG4gICAgICBcInRoXCIsXG4gICAgICBcInZpXCJcbiAgICBdLFxuICAgIFwiZlwiOiBbXG4gICAgICBcImFsXCIsXG4gICAgICBcImFuXCIsXG4gICAgICBcImJvXCIsXG4gICAgICBcImNhXCIsXG4gICAgICBcImV0XCIsXG4gICAgICBcIml2XCIsXG4gICAgICBcImtlXCIsXG4gICAgICBcIm1vXCIsXG4gICAgICBcIm5pXCIsXG4gICAgICBcInNlXCIsXG4gICAgICBcInNzXCIsXG4gICAgICBcInNvXCIsXG4gICAgICBcInNhXCIsXG4gICAgICBcInN1XCIsXG4gICAgICBcInR1XCIsXG4gICAgICBcIndlXCIsXG4gICAgICBcInphXCIsXG4gICAgICBcInppXCJcbiAgICBdLFxuICAgIFwiY1wiOiBbXG4gICAgICBcImNvXCIsXG4gICAgICBcImN1XCIsXG4gICAgICBcImRvXCIsXG4gICAgICBcImVsXCIsXG4gICAgICBcImd1XCIsXG4gICAgICBcImhhXCIsXG4gICAgICBcImhvXCIsXG4gICAgICBcIm1lXCIsXG4gICAgICBcIm5pXCIsXG4gICAgICBcInBhXCJcbiAgICBdLFxuICAgIFwic1wiOiBbXG4gICAgICBcImFyXCIsXG4gICAgICBcImJvXCIsXG4gICAgICBcImJyXCIsXG4gICAgICBcImNoXCIsXG4gICAgICBcImNvXCIsXG4gICAgICBcImVjXCIsXG4gICAgICBcInBhXCIsXG4gICAgICBcInBlXCIsXG4gICAgICBcInVyXCIsXG4gICAgICBcInZlXCJcbiAgICBdXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPVtcciAge1xyICAgIFwiaWRcIjoxLFxyICAgIFwidGl0bGVcIjpcIkFzaWEgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiA5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE0L3JlZ2lvbnMtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyLFxyICAgIFwidGl0bGVcIjpcIkV1cm9wZSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDc7IENvbnRyb2w6IEF1dG9tYXRpYyBWaWN0b3J5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL3JlZ2lvbnMtZXVyb3BlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMsXHIgICAgXCJ0aXRsZVwiOlwiTWlkZGxlIEVhc3QgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA1OyBDb250cm9sOiA3OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMTMvcmVnaW9ucy1taWRkbGUtZWFzdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo0LFxyICAgIFwidGl0bGVcIjpcIkR1Y2sgYW5kIENvdmVyXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFRoZSBVUyByZWNlaXZlcyBWUCBlcXVhbCB0byA1IG1pbnVzIHRoZSBjdXJyZW50IERFRkNPTiBsZXZlbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZHVjay1hbmQtY292ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUsXHIgICAgXCJ0aXRsZVwiOlwiRml2ZSBZZWFyIFBsYW5cIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgYSBjYXJkLiBJZiB0aGUgY2FyZCBoYXMgYSBVUyBhc3NvY2lhdGVkIEV2ZW50LCB0aGUgRXZlbnQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiB0aGUgY2FyZCBoYXMgYSBVU1NSIGFzc29jaWF0ZWQgRXZlbnQgb3IgYW4gRXZlbnQgYXBwbGljYWJsZSB0byBib3RoIHBsYXllcnMsIHRoZW4gdGhlIGNhcmQgbXVzdCBiZSBkaXNjYXJkZWQgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZml2ZS15ZWFyLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIENoaW5hIENhcmRcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIGNhcmQgYmVnaW5zIHRoZSBnYW1lIHdpdGggdGhlIFVTU1IuIFdoZW4gcGxheWVkLCB0aGUgcGxheWVyIHJlY2VpdmVzICsxIE9wZXJhdGlvbnMgdG8gdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIGlmIGl0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIEFzaWEuIEl0IGlzIHBhc3NlZCB0byB0aGUgb3Bwb25lbnQgb25jZSBwbGF5ZWQuIEEgcGxheWVyIHJlY2VpdmVzIDEgVlAgZm9yIGhvbGRpbmcgdGhpcyBjYXJkIGF0IHRoZSBlbmQgb2YgVHVybiAxMC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzEvdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiY2FuY2Vsc1wiOiAzNVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcsXHIgICAgXCJ0aXRsZVwiOlwiU29jaWFsaXN0IEdvdmVybm1lbnRzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgMyBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODMg4oCTIFRoZSBJcm9uIExhZHnigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMy9zb2NpYWxpc3QtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYW50aXJlcVwiOiA4M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjgsXHIgICAgXCJ0aXRsZVwiOlwiRmlkZWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBDdWJhLiBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgaW4gQ3ViYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTQvZmlkZWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo5LFxyICAgIFwidGl0bGVcIjpcIlZpZXRuYW0gUmV2b2x0cypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBWaWV0bmFtLiBGb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgcmVjZWl2ZXMgKzEgT3BlcmF0aW9ucyB0byB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiBhIGNhcmQgdGhhdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTYvdmlldG5hbS1yZXZvbHRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAsXHIgICAgXCJ0aXRsZVwiOlwiQmxvY2thZGUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVW5sZXNzIHRoZSBVUyBpbW1lZGlhdGVseSBkaXNjYXJkcyBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSwgcmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE5L2Jsb2NrYWRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEsXHIgICAgXCJ0aXRsZVwiOlwiS29yZWFuIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJOb3J0aCBLb3JlYSBpbnZhZGVzIFNvdXRoIEtvcmVhLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggS29yZWEuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIFNvdXRoIEtvcmVhIHdpdGggVVNTUiBJbmZsdWVuY2UuIFRoZSBVU1NSIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMjUva29yZWFuLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFmZmVjdHNcIjogNTlcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMixcciAgICBcInRpdGxlXCI6XCJSb21hbmlhbiBBYmRpY2F0aW9uKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gUm9tYW5pYS4gVGhlIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBSb21hbmlhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8wMi9yb21hbmlhbi1hYmRpY2F0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTMsXHIgICAgXCJ0aXRsZVwiOlwiQXJhYi1Jc3JhZWxpIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlBhbi1BcmFiIENvYWxpdGlvbiBpbnZhZGVzIElzcmFlbC4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgSXNyYWVsLCBpZiBpdCBpcyBVUyBjb250cm9sbGVkLCBhbmQgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBJc3JhZWwuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIElzcmFlbCB3aXRoIFVTU1IgSW5mbHVlbmNlLiBUaGUgVVNTUiBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM2NSDigJMgQ2FtcCBEYXZpZCBBY2NvcmRz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMTYvYXJhYi1pc3JhZWxpLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTQsXHIgICAgXCJ0aXRsZVwiOlwiQ29tZWNvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIDQgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIG9mIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8yNC9jb21lY29uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTUsXHIgICAgXCJ0aXRsZVwiOlwiTmFzc2VyKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEVneXB0LiBUaGUgVVMgcmVtb3ZlcyBoYWxmLCByb3VuZGVkIHVwLCBvZiBpdHMgSW5mbHVlbmNlIGZyb20gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzA2L25hc3Nlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE2LFxyICAgIFwidGl0bGVcIjpcIldhcnNhdyBQYWN0IEZvcm1lZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIGluZmx1ZW5jZSBmcm9tIDQgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIG9yIGFkZCA1IFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yMC93YXJzYXctcGFjdC1mb3JtZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFsbG93c1wiOiAyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE3LFxyICAgIFwidGl0bGVcIjpcIkRlIEdhdWxsZSBMZWFkcyBGcmFuY2UqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVMgSW5mbHVlbmNlIGZyb20gRnJhbmNlIGFuZCBhZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBGcmFuY2UuIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gRXZlbnQgZm9yIEZyYW5jZSBvbmx5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yNC9kZS1nYXVsbGUtbGVhZHMtZnJhbmNlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDIxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTgsXHIgICAgXCJ0aXRsZVwiOlwiQ2FwdHVyZWQgTmF6aSBTY2llbnRpc3QqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiTW92ZSB0aGUgU3BhY2UgUmFjZSBNYXJrZXIgYWhlYWQgYnkgMSBzcGFjZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjcvY2FwdHVyZWQtbmF6aS1zY2llbnRpc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxOSxcciAgICBcInRpdGxlXCI6XCJUcnVtYW4gRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIGEgc2luZ2xlIHVuY29udHJvbGxlZCBjb3VudHJ5IGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMDIvdHJ1bWFuLWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIwLFxyICAgIFwidGl0bGVcIjpcIk9seW1waWMgR2FtZXNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIHBsYXllciBzcG9uc29ycyB0aGUgT2x5bXBpY3MuIFRoZSBvcHBvbmVudCBtdXN0IGVpdGhlciBwYXJ0aWNpcGF0ZSBvciBib3ljb3R0LiBJZiB0aGUgb3Bwb25lbnQgcGFydGljaXBhdGVzLCBlYWNoIHBsYXllciByb2xscyBhIGRpZSBhbmQgdGhlIHNwb25zb3IgYWRkcyAyIHRvIHRoZWlyIHJvbGwuIFRoZSBwbGF5ZXIgd2l0aCB0aGUgaGlnaGVzdCBtb2RpZmllZCBkaWUgcm9sbCByZWNlaXZlcyAyIFZQIChyZXJvbGwgdGllcykuIElmIHRoZSBvcHBvbmVudCBib3ljb3R0cywgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBzcG9uc29yIG1heSBjb25kdWN0IE9wZXJhdGlvbnMgYXMgaWYgdGhleSBwbGF5ZWQgYSA0IE9wcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMi9vbHltcGljLWdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIxLFxyICAgIFwidGl0bGVcIjpcIk5BVE8qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IGFueSBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUuIFVTIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIEV1cm9wZSBjYW5ub3QgYmUgYXR0YWNrZWQgYnkgcGxheSBvZiB0aGUg4oCcIzM2IOKAkyBCcnVzaCBXYXLigJ0gRXZlbnQuIFRoaXMgY2FyZCByZXF1aXJlcyBwcmlvciBwbGF5IG9mIGVpdGhlciB0aGUg4oCcIzE2IOKAkyBXYXJzYXcgUGFjdCBGb3JtZWTigJ0gb3Ig4oCcIzIzIOKAkyBNYXJzaGFsbCBQbGFu4oCdIEV2ZW50KHMpIGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvbmF0by9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcInByZXJlcVwiOlsxNiwyM10sXHIgICAgXCJhZmZlY3RzXCI6MzZcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMixcciAgICBcInRpdGxlXCI6XCJJbmRlcGVuZGVudCBSZWRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBVUyBJbmZsdWVuY2UgdG8gZWl0aGVyIFl1Z29zbGF2aWEsIFJvbWFuaWEsIEJ1bGdhcmlhLCBIdW5nYXJ5LCBvciBDemVjaG9zbG92YWtpYSBzbyB0aGF0IGl0IGVxdWFscyB0aGUgVVNTUiBJbmZsdWVuY2UgaW4gdGhhdCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMy9pbmRlcGVuZGVudC1yZWRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIzLFxyICAgIFwidGl0bGVcIjpcIk1hcnNoYWxsIFBsYW4qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDcgbm9uLVVTU1IgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE2L21hcnNoYWxsLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhbGxvd3NcIjoyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI0LFxyICAgIFwidGl0bGVcIjpcIkluZG8tUGFraXN0YW5pIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkluZGlhIGludmFkZXMgUGFraXN0YW4gb3IgdmljZSB2ZXJzYSAocGxheWVy4oCZcyBjaG9pY2UpLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBlbmVteSBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgaW52YXNpb24gKEluZGlhIG9yIFBha2lzdGFuKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE5L2luZG8tcGFraXN0YW5pLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjUsXHIgICAgXCJ0aXRsZVwiOlwiQ29udGFpbm1lbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVUywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yMC9jb250YWlubWVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNixcciAgICBcInRpdGxlXCI6XCJDSUEgQ3JlYXRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMgZm9yIHRoaXMgdHVybi4gVGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjYvY2lhLWNyZWF0ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjcsXHIgICAgXCJ0aXRsZVwiOlwiVVMvSmFwYW4gTXV0dWFsIERlZmVuc2UgUGFjdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBKYXBhbiBmb3IgQ29udHJvbC4gVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IEphcGFuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNy91c2phcGFuLW11dHVhbC1kZWZlbnNlLXBhY3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOCxcciAgICBcInRpdGxlXCI6XCJTdWV6IENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSwgdGhlIFVuaXRlZCBLaW5nZG9tIGFuZCBJc3JhZWwgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI5L3N1ZXotY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjksXHIgICAgXCJ0aXRsZVwiOlwiRWFzdCBFdXJvcGVhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJFYXJseSBvciBNaWQgV2FyOiBSZW1vdmUgMSBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLiBMYXRlIFdhcjogUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDIvZWFzdC1ldXJvcGVhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMwLFxyICAgIFwidGl0bGVcIjpcIkRlY29sb25pemF0aW9uXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDUvZGVjb2xvbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzEsXHIgICAgXCJ0aXRsZVwiOlwiUmVkIFNjYXJlL1B1cmdlXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWluaW11bSB2YWx1ZSBvZiAxIE9wZXJhdGlvbnMgcG9pbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8yMy9yZWQtc2NhcmVwdXJnZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMixcciAgICBcInRpdGxlXCI6XCJVTiBJbnRlcnZlbnRpb25cIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJQbGF5IHRoaXMgY2FyZCBzaW11bHRhbmVvdXNseSB3aXRoIGEgY2FyZCBjb250YWluaW5nIGFuIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50LiBUaGUgb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQgaXMgY2FuY2VsZWQgYnV0IHlvdSBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoZSBvcHBvbmVudOKAmXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHBsYXllZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8wNy91bi1pbnRlcnZlbnRpb24vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzMsXHIgICAgXCJ0aXRsZVwiOlwiRGUtU3RhbGluaXphdGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcmVhbGxvY2F0ZSB1cCB0byBhIHRvdGFsIG9mIDQgSW5mbHVlbmNlIGZyb20gb25lIG9yIG1vcmUgY291bnRyaWVzIHRvIGFueSBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8yOS9kZS1zdGFsaW5pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzQsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBUZXN0IEJhblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsIG1pbnVzIDIgdGhlbiBpbXByb3ZlcyB0aGUgREVGQ09OIGxldmVsIGJ5IDIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA2LzExL251Y2xlYXItdGVzdC1iYW4vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzUsXHIgICAgXCJ0aXRsZVwiOlwiRm9ybW9zYW4gUmVzb2x1dGlvbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgVGFpd2FuIHdpbGwgYmUgdHJlYXRlZCBhcyBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5LCBmb3Igc2NvcmluZyBwdXJwb3NlcyBvbmx5LCBpZiBUYWl3YW4gaXMgVVMgY29udHJvbGxlZCB3aGVuIHRoZSBBc2lhIFNjb3JpbmcgQ2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsbGVkIGFmdGVyIHRoZSBVUyBoYXMgcGxheWVkIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDIvZm9ybW9zYW4tcmVzb2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM2LFxyICAgIFwidGl0bGVcIjpcIkJydXNoIFdhclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgYXR0YWNrcyBhbnkgY291bnRyeSB3aXRoIGEgc3RhYmlsaXR5IG51bWJlciBvZiAxIG9yIDIuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGFkamFjZW50IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiAzLTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDMgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L2JydXNoLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzcsXHIgICAgXCJ0aXRsZVwiOlwiQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogMzsgQ29udHJvbDogNTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9yZWdpb25zLWNlbnRyYWwtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOCxcciAgICBcInRpdGxlXCI6XCJTb3V0aGVhc3QgQXNpYSBTY29yaW5nKlwiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIjEgVlAgZWFjaCBmb3IgQ29udHJvbCBvZiBCdXJtYSwgQ2FtYm9kaWEvTGFvcywgVmlldG5hbSwgTWFsYXlzaWEsIEluZG9uZXNpYSBhbmQgdGhlIFBoaWxpcHBpbmVzLiAyIFZQIGZvciBDb250cm9sIG9mIFRoYWlsYW5kOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtc291dGhlYXN0LWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOSxcciAgICBcInRpdGxlXCI6XCJBcm1zIFJhY2VcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJDb21wYXJlIGVhY2ggcGxheWVy4oCZcyB2YWx1ZSBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay4gSWYgdGhlIHBoYXNpbmcgcGxheWVyIGhhcyBhIGhpZ2hlciB2YWx1ZSB0aGFuIHRoZWlyIG9wcG9uZW50IG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAxIFZQLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQsIGFuZCBoYXMgbWV0IHRoZSDigJxyZXF1aXJlZOKAnSBhbW91bnQsIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAzIFZQIGluc3RlYWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA1L2FybXMtcmFjZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MCxcciAgICBcInRpdGxlXCI6XCJDdWJhbiBNaXNzaWxlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJTZXQgdGhlIERFRkNPTiBsZXZlbCB0byAyLiBBbnkgQ291cCBBdHRlbXB0cyBieSB5b3VyIG9wcG9uZW50LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHdpbGwgcmVzdWx0IGluIEdsb2JhbCBUaGVybW9udWNsZWFyIFdhci4gWW91ciBvcHBvbmVudCB3aWxsIGxvc2UgdGhlIGdhbWUuIFRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGJlIGNhbmNlbGVkLCBhdCBhbnkgdGltZSwgaWYgdGhlIFVTU1IgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIEN1YmEgb3IgdGhlIFVTIHJlbW92ZXMgMiBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkgb3IgVHVya2V5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNi9jdWJhbi1taXNzaWxlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQxLFxyICAgIFwidGl0bGVcIjpcIk51Y2xlYXIgU3VicypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJVUyBPcGVyYXRpb25zIHVzZWQgZm9yIENvdXAgQXR0ZW1wdHMgaW4gQmF0dGxlZ3JvdW5kIGNvdW50cmllcywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCBkbyBub3QgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsLiBUaGlzIGNhcmTigJlzIEV2ZW50IGRvZXMgbm90IGFwcGx5IHRvIGFueSBFdmVudCB0aGF0IHdvdWxkIGFmZmVjdCB0aGUgREVGQ09OIGxldmVsIChleC4gdGhlIOKAnCM0MCDigJMgQ3ViYW4gTWlzc2lsZSBDcmlzaXPigJ0gRXZlbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMC9udWNsZWFyLXN1YnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDIsXHIgICAgXCJ0aXRsZVwiOlwiUXVhZ21pcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgaXQgbXVzdCBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCB3aXRoIGEgdmFsdWUgb2YgMiBvciBtb3JlIGFuZCByb2xsIDEtNCBvbiBhIGRpZSB0byBjYW5jZWwgdGhpcyBFdmVudC4gUmVwZWF0IHRoaXMgRXZlbnQgZm9yIGVhY2ggVVMgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVUyBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVMgaXMgdW5hYmxlIHRvIGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkLCBpdCBtdXN0IHBsYXkgYWxsIG9mIGl0cyBzY29yaW5nIGNhcmRzIGFuZCB0aGVuIHNraXAgZWFjaCBhY3Rpb24gcm91bmQgZm9yIHRoZSByZXN0IG9mIHRoZSB0dXJuLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzEwNiDigJMgTk9SQUTigJ0gRXZlbnQgKGlmIGFwcGxpY2FibGUpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMi9xdWFnbWlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDMsXHIgICAgXCJ0aXRsZVwiOlwiU0FMVCBOZWdvdGlhdGlvbnMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDIuIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCBib3RoIHBsYXllcnMgcmVjZWl2ZSAtMSB0byBhbGwgQ291cCBBdHRlbXB0IHJvbGxzLiBUaGUgcGxheWVyIG9mIHRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQsIHJldmVhbCBpdCB0byB0aGVpciBvcHBvbmVudCBhbmQgdGhlbiBwbGFjZSB0aGUgZHJhd24gY2FyZCBpbnRvIHRoZWlyIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE3L3NhbHQtbmVnb3RpYXRpb25zL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NCxcciAgICBcInRpdGxlXCI6XCJCZWFyIFRyYXAqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVTU1LigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVU1NSIGFjdGlvbiByb3VuZCB1bnRpbCB0aGUgVVNTUiBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVNTUiBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE5L2JlYXItdHJhcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ1LFxyICAgIFwidGl0bGVcIjpcIlN1bW1pdFwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkJvdGggcGxheWVycyByb2xsIGEgZGllLiBFYWNoIHBsYXllciByZWNlaXZlcyArMSB0byB0aGUgZGllIHJvbGwgZm9yIGVhY2ggUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoZXkgRG9taW5hdGUgb3IgQ29udHJvbC4gVGhlIHBsYXllciB3aXRoIHRoZSBoaWdoZXN0IG1vZGlmaWVkIGRpZSByb2xsIHJlY2VpdmVzIDIgVlAgYW5kIG1heSBkZWdyYWRlIG9yIGltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIChkbyBub3QgcmVyb2xsIHRpZXMpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNC9zdW1taXQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDYsXHIgICAgXCJ0aXRsZVwiOlwiSG93IEkgTGVhcm5lZCB0byBTdG9wIFdvcnJ5aW5nKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIGFueSBsZXZlbCBkZXNpcmVkICgxLTUpLiBUaGUgcGxheWVyIGFkZHMgNSB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMjYvaG93LWktbGVhcm5lZC10by1zdG9wLXdvcnJ5aW5nL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDcsXHIgICAgXCJ0aXRsZVwiOlwiSnVudGFcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuIFRoZSBwbGF5ZXIgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIGVpdGhlciBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMS9qdW50YS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OCxcciAgICBcInRpdGxlXCI6XCJLaXRjaGVuIERlYmF0ZXMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIG1vcmUgQmF0dGxlZ3JvdW5kIGNvdW50cmllcyB0aGFuIHRoZSBVU1NSLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBwb2tlIHRoZWlyIG9wcG9uZW50IGluIHRoZSBjaGVzdCBhbmQgcmVjZWl2ZSAyIFZQIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMy9raXRjaGVuLWRlYmF0ZXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDksXHIgICAgXCJ0aXRsZVwiOlwiTWlzc2lsZSBFbnZ5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiRXhjaGFuZ2UgdGhpcyBjYXJkIGZvciB5b3VyIG9wcG9uZW504oCZcyBoaWdoZXN0IHZhbHVlIE9wZXJhdGlvbnMgY2FyZC4gSWYgMiBvciBtb3JlIGNhcmRzIGFyZSB0aWVkLCBvcHBvbmVudCBjaG9vc2VzLiBJZiB0aGUgZXhjaGFuZ2VkIGNhcmQgY29udGFpbnMgYW4gRXZlbnQgYXBwbGljYWJsZSB0byB5b3Vyc2VsZiBvciBib3RoIHBsYXllcnMsIGl0IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgaXQgY29udGFpbnMgYW4gb3Bwb25lbnTigJlzIEV2ZW50LCB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgKG5vIEV2ZW50KS4gVGhlIG9wcG9uZW50IG11c3QgdXNlIHRoaXMgY2FyZCBmb3IgT3BlcmF0aW9ucyBkdXJpbmcgdGhlaXIgbmV4dCBhY3Rpb24gcm91bmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzA4L21pc3NpbGUtZW52eS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MCxcciAgICBcInRpdGxlXCI6XCJXZSBXaWxsIEJ1cnkgWW91KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBVbmxlc3MgdGhlICMzMiBVTiBJbnRlcnZlbnRpb24gY2FyZCBpcyBwbGF5ZWQgYXMgYW4gRXZlbnQgb24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMyBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTAvd2Utd2lsbC1idXJ5LXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUxLFxyICAgIFwidGl0bGVcIjpcIkJyZXpobmV2IERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgVVNTUiwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMi9icmV6aG5ldi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUyLFxyICAgIFwidGl0bGVcIjpcIlBvcnR1Z3Vlc2UgRW1waXJlIENydW1ibGVzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEFuZ29sYSBhbmQgdGhlIFNFIEFmcmljYW4gU3RhdGVzLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNS9wb3J0dWd1ZXNlLWVtcGlyZS1jcnVtYmxlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUzLFxyICAgIFwidGl0bGVcIjpcIlNvdXRoIEFmcmljYW4gVW5yZXN0XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgZWl0aGVyIGFkZHMgMiBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIG9yIGFkZHMgMSBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIGFuZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGFkamFjZW50IHRvIFNvdXRoIEFmcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTYvc291dGgtYWZyaWNhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTQsXHIgICAgXCJ0aXRsZVwiOlwiQWxsZW5kZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBDaGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTcvYWxsZW5kZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU1LFxyICAgIFwidGl0bGVcIjpcIldpbGx5IEJyYW5kdCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGFuZCBhZGRzIDEgSW5mbHVlbmNlIHRvIFdlc3QgR2VybWFueS4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBFdmVudCBmb3IgV2VzdCBHZXJtYW55IG9ubHkuIFRoaXMgRXZlbnQgaXMgcHJldmVudGVkIC8gY2FuY2VsZWQgYnkgdGhlIOKAnCM5NiDigJMgVGVhciBEb3duIHRoaXMgV2FsbOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTgvd2lsbHktYnJhbmR0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6OTYsXHIgICAgXCJhZmZlY3RzXCI6MjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NixcciAgICBcInRpdGxlXCI6XCJNdXNsaW0gUmV2b2x1dGlvblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gMiBvZiB0aGUgZm9sbG93aW5nIGNvdW50cmllczogU3VkYW4sIElyYW4sIElyYXEsIEVneXB0LCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBTeXJpYSwgSm9yZGFuLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjMTEwIOKAkyBBV0FDUyBTYWxlIHRvIFNhdWRpc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE5L211c2xpbS1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU3LFxyICAgIFwidGl0bGVcIjpcIkFCTSBUcmVhdHlcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlbiBjb25kdWN0IE9wZXJhdGlvbnMgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yMy9hYm0tdHJlYXR5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU4LFxyICAgIFwidGl0bGVcIjpcIkN1bHR1cmFsIFJldm9sdXRpb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVUyBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTU1IgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSB0byBiZSBwbGF5ZWQpLiBJZiB0aGUgVVNTUiBhbHJlYWR5IGhhcyDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjQvY3VsdHVyYWwtcmV2b2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU5LFxyICAgIFwidGl0bGVcIjpcIkZsb3dlciBQb3dlcipcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAyIFZQIGZvciBldmVyeSBVUyBwbGF5ZWQg4oCcV2Fy4oCdIGNhcmQgKEFyYWItSXNyYWVsaSBXYXIsIEtvcmVhbiBXYXIsIEJydXNoIFdhciwgSW5kby1QYWtpc3RhbmkgV2FyLCBJcmFuLUlyYXEgV2FyKSwgdXNlZCBmb3IgT3BlcmF0aW9ucyBvciBhbiBFdmVudCwgYWZ0ZXIgdGhpcyBjYXJkIGlzIHBsYXllZC4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk3IOKAkyBBbiBFdmlsIEVtcGlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjUvZmxvd2VyLXBvd2VyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6OTdcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MCxcciAgICBcInRpdGxlXCI6XCJVMiBJbmNpZGVudCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBJZiB0aGUg4oCcIzMyIOKAkyBVTiBJbnRlcnZlbnRpb27igJ0gRXZlbnQgaXMgcGxheWVkIGxhdGVyIHRoaXMgdHVybiwgZWl0aGVyIGJ5IHRoZSBVUyBvciB0aGUgVVNTUiwgdGhlIFVTU1IgcmVjZWl2ZXMgYW4gYWRkaXRpb25hbCAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNi91LTItaW5jaWRlbnQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJyZWxhdGVkXCI6MzJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MSxcciAgICBcInRpdGxlXCI6XCJPUEVDXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBmb3IgQ29udHJvbCBvZiBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBFZ3lwdCwgSXJhbiwgTGlieWEsIFNhdWRpIEFyYWJpYSwgSXJhcSwgR3VsZiBTdGF0ZXMsIFZlbmV6dWVsYS4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzg2IOKAkyBOb3J0aCBTZWEgT2ls4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjkvb3BlYy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjIsXHIgICAgXCJhbnRpcmVxXCI6ODZcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MixcciAgICBcInRpdGxlXCI6XCJMb25lIEd1bm1hbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMwL2xvbmUtZ3VubWFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjMsXHIgICAgXCJ0aXRsZVwiOlwiQ29sb25pYWwgUmVhciBHdWFyZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDEvY29sb25pYWwtcmVhci1ndWFyZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY0LFxyICAgIFwidGl0bGVcIjpcIlBhbmFtYSBDYW5hbCBSZXR1cm5lZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gUGFuYW1hLCBDb3N0YSBSaWNhIGFuZCBWZW5lenVlbGEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzAyL3BhbmFtYS1jYW5hbC1yZXR1cm5lZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NSxcciAgICBcInRpdGxlXCI6XCJDYW1wIERhdmlkIEFjY29yZHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gSXNyYWVsLCBKb3JkYW4gYW5kIEVneXB0LiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjMTMg4oCTIEFyYWItSXNyYWVsaSBXYXLigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDUvY2FtcC1kYXZpZC1hY2NvcmRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjYsXHIgICAgXCJ0aXRsZVwiOlwiUHVwcGV0IEdvdmVybm1lbnRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgYWRkIDEgSW5mbHVlbmNlIHRvIDMgY291bnRyaWVzIHRoYXQgZG8gbm90IGNvbnRhaW4gSW5mbHVlbmNlIGZyb20gZWl0aGVyIHRoZSBVUyBvciBVU1NSLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNi9wdXBwZXQtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjcsXHIgICAgXCJ0aXRsZVwiOlwiR3JhaW4gU2FsZXMgdG8gU292aWV0c1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByYW5kb21seSBzZWxlY3RzIDEgY2FyZCBmcm9tIHRoZSBVU1NS4oCZcyBoYW5kIChpZiBhdmFpbGFibGUpLiBUaGUgVVMgbXVzdCBlaXRoZXIgcGxheSB0aGUgY2FyZCBvciByZXR1cm4gaXQgdG8gdGhlIFVTU1IuIElmIHRoZSBjYXJkIGlzIHJldHVybmVkLCBvciB0aGUgVVNTUiBoYXMgbm8gY2FyZHMsIHRoZSBVUyBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA3L2dyYWluLXNhbGVzLXRvLXNvdmlldHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY4LFxyICAgIFwidGl0bGVcIjpcIkpvaG4gUGF1bCBJSSBFbGVjdGVkIFBvcGUqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSBQb2xhbmQgYW5kIGFkZCAxIFVTIEluZmx1ZW5jZSB0byBQb2xhbmQuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMTAxIOKAkyBTb2xpZGFyaXR54oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOC9qb2huLXBhdWwtaWktZWxlY3RlZC1wb3BlL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjksXHIgICAgXCJ0aXRsZVwiOlwiTGF0aW4gQW1lcmljYW4gRGVhdGggU3F1YWRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIG9mIHRoZSBwaGFzaW5nIHBsYXllcuKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgZGllIHJvbGwuIEFsbCBvZiB0aGUgb3Bwb25lbnTigJlzIENvdXAgQXR0ZW1wdHMgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYSwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIGRpZSByb2xsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOS9sYXRpbi1hbWVyaWNhbi1kZWF0aC1zcXVhZHMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzAsXHIgICAgXCJ0aXRsZVwiOlwiT0FTIEZvdW5kZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEyL29hcy1mb3VuZGVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcxLFxyICAgIFwidGl0bGVcIjpcIk5peG9uIFBsYXlzIHRoZSBDaGluYSBDYXJkKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgZG93biBhbmQgdW5hdmFpbGFibGUgZm9yIGltbWVkaWF0ZSBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIHJlY2VpdmVzIDIgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEzL25peG9uLXBsYXlzLXRoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcyLFxyICAgIFwidGl0bGVcIjpcIlNhZGF0IEV4cGVscyBTb3ZpZXRzKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBFZ3lwdCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIEVneXB0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNC9zYWRhdC1leHBlbHMtc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MyxcciAgICBcInRpdGxlXCI6XCJTaHV0dGxlIERpcGxvbWFjeVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoaXMgY2FyZOKAmXMgRXZlbnQgaXMgaW4gZWZmZWN0LCBzdWJ0cmFjdCAoLTEpIGEgQmF0dGxlZ3JvdW5kIGNvdW50cnkgZnJvbSB0aGUgVVNTUiB0b3RhbCBhbmQgdGhlbiBkaXNjYXJkIHRoaXMgY2FyZCBkdXJpbmcgdGhlIG5leHQgc2NvcmluZyBvZiB0aGUgTWlkZGxlIEVhc3Qgb3IgQXNpYSAod2hpY2ggZXZlciBjb21lcyBmaXJzdCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE1L3NodXR0bGUtZGlwbG9tYWN5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBWb2ljZSBvZiBBbWVyaWNhXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDQgVVNTUiBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIE5PVCBpbiBFdXJvcGUgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE2L3RoZS12b2ljZS1vZi1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NSxcciAgICBcInRpdGxlXCI6XCJMaWJlcmF0aW9uIFRoZW9sb2d5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMyBVU1NSIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgQW1lcmljYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE5L2xpYmVyYXRpb24tdGhlb2xvZ3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzYsXHIgICAgXCJ0aXRsZVwiOlwiVXNzdXJpIFJpdmVyIFNraXJtaXNoKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSBmb3IgcGxheSkuIElmIHRoZSBVUyBhbHJlYWR5IGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIGFkZCBhIHRvdGFsIG9mIDQgVVMgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQXNpYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIwL3Vzc3VyaS1yaXZlci1za2lybWlzaC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NyxcciAgICBcInRpdGxlXCI6XCJBc2sgTm90IFdoYXQgWW91ciBDb3VudHJ54oCmKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgZGlzY2FyZCB1cCB0byB0aGVpciBlbnRpcmUgaGFuZCBvZiBjYXJkcyAoaW5jbHVkaW5nIHNjb3JpbmcgY2FyZHMpIHRvIHRoZSBkaXNjYXJkIHBpbGUgYW5kIGRyYXcgcmVwbGFjZW1lbnRzIGZyb20gdGhlIGRyYXcgcGlsZS4gVGhlIG51bWJlciBvZiBjYXJkcyB0byBiZSBkaXNjYXJkZWQgbXVzdCBiZSBkZWNpZGVkIGJlZm9yZSBkcmF3aW5nIGFueSByZXBsYWNlbWVudCBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIxL2Fzay1ub3Qtd2hhdC15b3VyLWNvdW50cnktY2FuLWRvLWZvci15b3UvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzgsXHIgICAgXCJ0aXRsZVwiOlwiQWxsaWFuY2UgZm9yIFByb2dyZXNzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjMvYWxsaWFuY2UtZm9yLXByb2dyZXNzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc5LFxyICAgIFwidGl0bGVcIjpcIkFmcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDE7IERvbWluYXRpb246IDQ7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8xMS9yZWdpb25zLWFmcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MCxcciAgICBcInRpdGxlXCI6XCJPbmUgU21hbGwgU3RlcOKAplwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHlvdSBhcmUgYmVoaW5kIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBtb3ZlIHRoZWlyIG1hcmtlciAyIHNwYWNlcyBmb3J3YXJkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLiBUaGUgcGxheWVyIHJlY2VpdmVzIFZQIG9ubHkgZnJvbSB0aGUgZmluYWwgc3BhY2UgbW92ZWQgaW50by5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjYvb25lLXNtYWxsLXN0ZXAvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODEsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQW1lcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDI7IERvbWluYXRpb246IDU7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOC8xNS9yZWdpb25zLXNvdXRoLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbmlhbiBIb3N0YWdlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBhbmQgYWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gSXJhbi4gVGhpcyBjYXJk4oCZcyBFdmVudCByZXF1aXJlcyB0aGUgVVMgdG8gZGlzY2FyZCAyIGNhcmRzLCBpbnN0ZWFkIG9mIDEgY2FyZCwgaWYgdGhlIOKAnCM5MiDigJMgVGVycm9yaXNt4oCdIEV2ZW50IGlzIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMzAvaXJhbmlhbi1ob3N0YWdlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiYWZmZWN0c1wiOjkyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODMsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIElyb24gTGFkeSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBBcmdlbnRpbmEgYW5kIHJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSB0aGUgVW5pdGVkIEtpbmdkb20uIFRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNyDigJMgU29jaWFsaXN0IEdvdmVybm1lbnRz4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzAzL3RoZS1pcm9uLWxhZHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6ODNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NCxcciAgICBcInRpdGxlXCI6XCJSZWFnYW4gQm9tYnMgTGlieWEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGV2ZXJ5IDIgVVNTUiBJbmZsdWVuY2UgaW4gTGlieWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA0L3JlYWdhbi1ib21icy1saWJ5YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NSxcciAgICBcInRpdGxlXCI6XCJTdGFyIFdhcnMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGlzIGFoZWFkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBsb29rIHRocm91Z2ggdGhlIGRpc2NhcmQgcGlsZSwgcGljayBhbnkgMSBub24tc2NvcmluZyBjYXJkIGFuZCBwbGF5IGl0IGltbWVkaWF0ZWx5IGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNS9zdGFyLXdhcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODYsXHIgICAgXCJ0aXRsZVwiOlwiTm9ydGggU2VhIE9pbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IHBsYXkgOCBjYXJkcyAoaW4gOCBhY3Rpb24gcm91bmRzKSBmb3IgdGhpcyB0dXJuIG9ubHkuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM2MSDigJMgT1BFQ+KAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNi9ub3J0aC1zZWEtb2lsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiY2FuY2Vsc1wiOjYxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODcsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFJlZm9ybWVyKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCA0IFVTU1IgSW5mbHVlbmNlIHRvIEV1cm9wZSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIElmIHRoZSBVU1NSIGlzIGFoZWFkIG9mIHRoZSBVUyBpbiBWUCwgNiBJbmZsdWVuY2UgbWF5IGJlIGFkZGVkIHRvIEV1cm9wZSBpbnN0ZWFkLiBUaGUgVVNTUiBtYXkgbm8gbG9uZ2VyIG1ha2UgQ291cCBBdHRlbXB0cyBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA3L3RoZS1yZWZvcm1lci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiYWZmZWN0c1wiOjkwXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODgsXHIgICAgXCJ0aXRsZVwiOlwiTWFyaW5lIEJhcnJhY2tzIEJvbWJpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgaW4gTGViYW5vbiBhbmQgcmVtb3ZlIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIHRoZSBNaWRkbGUgRWFzdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTAvbWFyaW5lLWJhcnJhY2tzLWJvbWJpbmcvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OSxcciAgICBcInRpdGxlXCI6XCJTb3ZpZXRzIFNob290IERvd24gS0FMLTAwNypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTIHJlY2VpdmVzIDIgVlAuIFRoZSBVUyBtYXkgcGxhY2UgaW5mbHVlbmNlIG9yIG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMsIHVzaW5nIHRoaXMgY2FyZCwgaWYgU291dGggS29yZWEgaXMgVVMgY29udHJvbGxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTEvc292aWV0cy1zaG9vdC1kb3duLWthbC0wMDcvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTAsXHIgICAgXCJ0aXRsZVwiOlwiR2xhc25vc3QqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAuIFRoZSBVU1NSIG1heSBtYWtlIFJlYWxpZ25tZW50IHJvbGxzIG9yIGFkZCBJbmZsdWVuY2UsIHVzaW5nIHRoaXMgY2FyZCwgaWYgdGhlIOKAnCM4NyDigJMgVGhlIFJlZm9ybWVy4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMi9nbGFzbm9zdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkxLFxyICAgIFwidGl0bGVcIjpcIk9ydGVnYSBFbGVjdGVkIGluIE5pY2FyYWd1YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIE5pY2FyYWd1YS4gVGhlIFVTU1IgbWF5IG1ha2UgYSBmcmVlIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBpbiBhIGNvdW50cnkgYWRqYWNlbnQgdG8gTmljYXJhZ3VhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMy9vcnRlZ2EtZWxlY3RlZC1pbi1uaWNhcmFndWEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MixcciAgICBcInRpdGxlXCI6XCJUZXJyb3Jpc21cIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVy4oCZcyBvcHBvbmVudCBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgMSBjYXJkIGZyb20gdGhlaXIgaGFuZC4gSWYgdGhlIOKAnCM4MiDigJMgSXJhbmlhbiBIb3N0YWdlIENyaXNpc+KAnSBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZCwgYSBVUyBwbGF5ZXIgKGlmIGFwcGxpY2FibGUpIG11c3QgcmFuZG9tbHkgZGlzY2FyZCAyIGNhcmRzIGZyb20gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTQvdGVycm9yaXNtL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkzLFxyICAgIFwidGl0bGVcIjpcIklyYW4tQ29udHJhIFNjYW5kYWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIFVTIFJlYWxpZ25tZW50IHJvbGxzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE3L2lyYW4tY29udHJhLXNjYW5kYWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NCxcciAgICBcInRpdGxlXCI6XCJDaGVybm9ieWwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgZGVzaWduYXRlIGEgc2luZ2xlIFJlZ2lvbiAoRXVyb3BlLCBBc2lhLCBldGMuKSB0aGF0LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgY2Fubm90IGFkZCBJbmZsdWVuY2UgdG8gdXNpbmcgT3BlcmF0aW9ucyBwb2ludHMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE4L2NoZXJub2J5bC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWJ0IENyaXNpc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtdXN0IGltbWVkaWF0ZWx5IGRpc2NhcmQgYSBjYXJkIHdpdGggYW4gT3BlcmF0aW9ucyB2YWx1ZSBvZiAzIG9yIG1vcmUgb3IgdGhlIFVTU1IgbWF5IGRvdWJsZSB0aGUgYW1vdW50IG9mIFVTU1IgSW5mbHVlbmNlIGluIDIgY291bnRyaWVzIGluIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE5L2xhdGluLWFtZXJpY2FuLWRlYnQtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk2LFxyICAgIFwidGl0bGVcIjpcIlRlYXIgRG93biB0aGlzIFdhbGwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIEVhc3QgR2VybWFueS4gVGhlIFVTIG1heSBtYWtlIGZyZWUgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBpbiBFdXJvcGUgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTUg4oCTIFdpbGx5IEJyYW5kdOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjAvdGVhci1kb3duLXRoaXMtd2FsbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImNhbmNlbHNcIjo1NVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjk3LFxyICAgIFwidGl0bGVcIjpcIkFuIEV2aWwgRW1waXJlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTkg4oCTIEZsb3dlciBQb3dlcuKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjEvYW4tZXZpbC1lbXBpcmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6NTlcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OCxcciAgICBcInRpdGxlXCI6XCJBbGRyaWNoIEFtZXMgUmVtaXgqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcywgZmFjZS11cCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4gYW5kIHRoZSBVU1NSIGRpc2NhcmRzIGEgY2FyZCBmcm9tIHRoZSBVUyBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wMy9hbGRyaWNoLWFtZXMtcmVtaXgvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OSxcciAgICBcInRpdGxlXCI6XCJQZXJzaGluZyBJSSBEZXBsb3llZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBSZW1vdmUgMSBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgMyBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA0L3BlcnNoaW5nLWlpLWRlcGxveWVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAwLFxyICAgIFwidGl0bGVcIjpcIldhcmdhbWVzKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIklmIHRoZSBERUZDT04gbGV2ZWwgaXMgMiwgdGhlIHBsYXllciBtYXkgaW1tZWRpYXRlbHkgZW5kIHRoZSBnYW1lIGFmdGVyIGdpdmluZyB0aGVpciBvcHBvbmVudCA2IFZQLiBIb3cgYWJvdXQgYSBuaWNlIGdhbWUgb2YgY2hlc3M/XCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA3L3dhcmdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAxLFxyICAgIFwidGl0bGVcIjpcIlNvbGlkYXJpdHkqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBjYXJkIHJlcXVpcmVzIHByaW9yIHBsYXkgb2YgdGhlIOKAnCM2OCDigJMgSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZeKAnSBFdmVudCBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA4L3NvbGlkYXJpdHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwicHJlcmVxXCI6NjhcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1JcmFxIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJcmFuIGludmFkZXMgSXJhcSBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSXJhbiBvciBJcmFxKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA5L2lyYW4taXJhcS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAzLFxyICAgIFwidGl0bGVcIjpcIkRlZmVjdG9yc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSB0aGlzIGNhcmQgZHVyaW5nIHRoZSBIZWFkbGluZSBQaGFzZSBpbiBvcmRlciB0byBjYW5jZWwgdGhlIFVTU1IgSGVhZGxpbmUgRXZlbnQgKGluY2x1ZGluZyBhIHNjb3JpbmcgY2FyZCkuIFRoZSBjYW5jZWxlZCBjYXJkIGlzIHBsYWNlZCBpbnRvIHRoZSBkaXNjYXJkIHBpbGUuIElmIHRoaXMgY2FyZCBpcyBwbGF5ZWQgYnkgdGhlIFVTU1IgZHVyaW5nIGl0cyBhY3Rpb24gcm91bmQsIHRoZSBVUyBnYWlucyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8wOS9kZWZlY3RvcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNCxcciAgICBcInRpdGxlXCI6XCJUaGUgQ2FtYnJpZGdlIEZpdmVcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyBhbGwgc2NvcmluZyBjYXJkcyBpbiB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBwbGF5ZXIgbWF5IGFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIFJlZ2lvbiBuYW1lZCBvbiBvbmUgb2YgdGhlIHJldmVhbGVkIHNjb3JpbmcgY2FyZHMuIFRoaXMgY2FyZCBjYW4gbm90IGJlIHBsYXllZCBhcyBhbiBFdmVudCBkdXJpbmcgdGhlIExhdGUgV2FyLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xMS90aGUtY2FtYnJpZGdlLWZpdmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA1LFxyICAgIFwidGl0bGVcIjpcIlNwZWNpYWwgUmVsYXRpb25zaGlwXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIFUuSy4gaWYgdGhlIFUuSy4gaXMgVVMtY29udHJvbGxlZCBidXQgTkFUTyBpcyBub3QgaW4gZWZmZWN0LiBBZGQgMiBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBXZXN0ZXJuIEV1cm9wZSwgYW5kIHRoZSBVUyBnYWlucyAyIFZQLCBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGFuZCBOQVRPIGlzIGluIGVmZmVjdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMTgvc3BlY2lhbC1yZWxhdGlvbnNoaXAvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNixcciAgICBcInRpdGxlXCI6XCJOT1JBRCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBjb250YWluaW5nIFVTIEluZmx1ZW5jZSwgYXQgdGhlIGVuZCBvZiBlYWNoIEFjdGlvbiBSb3VuZCwgaWYgQ2FuYWRhIGlzIFVTLWNvbnRyb2xsZWQgYW5kIHRoZSBERUZDT04gbGV2ZWwgbW92ZWQgdG8gMiBkdXJpbmcgdGhhdCBBY3Rpb24gUm91bmQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsZWQgYnkgdGhlIOKAnCM0MiDigJMgUXVhZ21pcmXigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzI1L25vcmFkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYW50aXJlcVwiOiA0MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNyxcciAgICBcInRpdGxlXCI6XCJDaGVcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBhZ2FpbnN0IGEgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EuIFRoZSBVU1NSIG1heSBwZXJmb3JtIGEgc2Vjb25kIENvdXAgQXR0ZW1wdCwgYWdhaW5zdCBhIGRpZmZlcmVudCBub24tQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBBbWVyaWNhLCBTb3V0aCBBbWVyaWNhIG9yIEFmcmljYSwgaWYgdGhlIGZpcnN0IENvdXAgQXR0ZW1wdCByZW1vdmVkIGFueSBVUyBJbmZsdWVuY2UgZnJvbSB0aGUgdGFyZ2V0IGNvdW50cnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI3L2NoZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDgsXHIgICAgXCJ0aXRsZVwiOlwiT3VyIE1hbiBpbiBUZWhyYW4qXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIGF0IGxlYXN0IG9uZSBNaWRkbGUgRWFzdCBjb3VudHJ5LCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBkcmF3IHRoZSB0b3AgNSBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuIFRoZSBVUyBtYXkgZGlzY2FyZCBhbnkgb3IgYWxsIG9mIHRoZSBkcmF3biBjYXJkcywgYWZ0ZXIgcmV2ZWFsaW5nIHRoZSBkaXNjYXJkZWQgY2FyZChzKSB0byB0aGUgVVNTUiBwbGF5ZXIsIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQocykuIEFueSByZW1haW5pbmcgZHJhd24gY2FyZHMgYXJlIHJldHVybmVkIHRvIHRoZSBkcmF3IHBpbGUgYW5kIHRoZSBkcmF3IHBpbGUgaXMgcmVzaHVmZmxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjgvb3VyLW1hbi1pbi10ZWhyYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA5LFxyICAgIFwidGl0bGVcIjpcIll1cmkgYW5kIFNhbWFudGhhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgQ291cCBBdHRlbXB0IHBlcmZvcm1lZCBkdXJpbmcgdGhlIHJlbWFpbmRlciBvZiB0aGUgVHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTAveXVyaS1hbmQtc2FtYW50aGEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMTAsXHIgICAgXCJ0aXRsZVwiOlwiQVdBQ1MgU2FsZSB0byBTYXVkaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVMgSW5mbHVlbmNlIHRvIFNhdWRpIEFyYWJpYS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzU2IOKAkyBNdXNsaW0gUmV2b2x1dGlvbuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8xNC9hd2Fjcy1zYWxlLXRvLXNhdWRpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9XHJdXHIiLCJSID0gUmVhY3QuRE9NXG5SQ1RHID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cFxudXBkYXRlID0gUmVhY3QuYWRkb25zLnVwZGF0ZVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbiQgPSBaZXB0b1xudmVudCA9IHJlcXVpcmUgJy4vdmVudCdcblxuY2FyZHNEYXRhID0gcmVxdWlyZSgnLi4vbGliL2NhcmRzLmpzb24nKVxuXG5cbiMgQWRkIGZ1bmN0aW9uIHRvIFplcHRvXG4kLmdldFNjcmlwdCA9IChzcmMsIGZ1bmMpIC0+XG4gIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdC5hc3luYyA9IFwiYXN5bmNcIlxuICBzY3JpcHQuc3JjID0gc3JjXG4gIGlmIGZ1bmNcbiAgICBzY3JpcHQub25sb2FkID0gZnVuY1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZCBzY3JpcHRcblxuXG5wYWdlcyA9IHJlcXVpcmUgJy4vcGFnZXMnXG52aWV3cyA9IHJlcXVpcmUgJy4vdmlld3MnXG5cbnJvdXRlciA9IHJlcXVpcmUgJy4vcm91dGVyJ1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIG1peGluczogW3JvdXRlcl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgbWVudUFjdGl2ZTpudWxsXG4gICAgdmlldzoge31cbiAgICBzbGlkZUluOiB0cnVlXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAoKS0+XG4gICAgJCgnI3BsYWNlaG9sZGVyJykuaGlkZSgpXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgdmVudC5vbiAnYm9hcmRTdGF0ZUNoYW5nZScsIChnYW1lSWQsIHN0YXRlRW5jKT0+XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgbnVsbCwgXCIje0BzdGF0ZS52aWV3Lm5hbWV9ICN7Z2FtZUlkfVwiLFxuICAgICAgICBcIiMvI3tAc3RhdGUudmlldy5uYW1lfS8je2dhbWVJZH0vI3tzdGF0ZUVuY31cIlxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IC0+XG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgICRzbGlkZUluLnJlbW92ZUNsYXNzICdzbGlkZUluLWluJ1xuICAgICMkbWFpblZpZXcgPSAkKEByZWZzLm1haW5WaWV3LmdldERPTU5vZGUoKSlcbiAgICAjJG1haW5WaWV3LnJlbW92ZUNsYXNzICdtYWluVmlldy1vdXQnXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPiBAc2xpZGVJbigpXG5cbiAgc2xpZGVJbjogLT5cbiAgICBpZiBub3QgQHN0YXRlLnNsaWRlSW5cbiAgICAgIHJldHVyblxuICAgICRzbGlkZUluID0gJChAcmVmcy5zbGlkZUluLmdldERPTU5vZGUoKSlcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkc2xpZGVJbi5hZGRDbGFzcygnc2xpZGVJbi1pbicpXG4gICAgLCAxMFxuXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgSWYgdGhlIHJvdXRlciBoYXNuJ3Qga2lja2VkIGluLCBkbyBub3RoaW5nXG4gICAgaWYgbm90IEBzdGF0ZT8udmlld1xuICAgICAgbWFpblZpZXcgPSBSLnAgY2xhc3NOYW1lOiAnbGVhZCcsICdUd2lTdHJ1ZyBpcyBsb2FkaW5nLi4uJ1xuICAgIGVsc2VcbiAgICAgIG1haW5WaWV3ID0gc3dpdGNoIEBzdGF0ZS52aWV3Lm5hbWVcbiAgICAgICAgd2hlbiAnaG9tZScgdGhlbiBwYWdlcy5Ib21lXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NhcmQnIHRoZW4gcGFnZXMuQ2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2NhcmRzJyB0aGVuIHBhZ2VzLkNhcmRzXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NvdW50cmllcycgdGhlbiBwYWdlcy5Db3VudHJpZXMoKVxuICAgICAgICAjd2hlbiAnYm9hcmQnIHRoZW4gcmV0dXJuIEJvYXJkUGljVmlldygpXG4gICAgICAgIHdoZW4gJ2JvYXJkJyB0aGVuIHBhZ2VzLkJvYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnZ2FtZScgdGhlbiBwYWdlcy5HYW1lIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnYWJvdXQnIHRoZW4gcGFnZXMuQWJvdXQoKVxuICAgICAgICB3aGVuICd3aG9vcHMnIHRoZW4gcGFnZXMuV2hvb3BzKClcblxuICAgIG1haW5WaWV3Q2xhc3MgPSBjeFxuICAgICAgJ2NvbnRhaW5lcic6IEBzdGF0ZS52aWV3Lm5hbWUgbm90IGluIFsnYm9hcmQnLCAnZ2FtZSddXG4gICAgICAnc2xpZGVJbic6IEBzdGF0ZS5zbGlkZUluXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgdmlld3MuTmF2IGtleTonbmF2JywgYWN0aXZlOiBAc3RhdGUubWVudUFjdGl2ZVxuICAgICAgUi5kaXYga2V5OidtYWludmlldycsIHJlZjogJ3NsaWRlSW4nLCBjbGFzc05hbWU6IG1haW5WaWV3Q2xhc3MsIG1haW5WaWV3XG4gICAgICB2aWV3cy5Gb290ZXIga2V5Oidmb290ZXInXG4gICAgXVxuXG5cbiMgQWRkIGtleXMgdG8gY2FyZHNcbmFkZFJlYWN0S2V5ID0gKGVsKS0+XG4gIGVsLmtleSA9IFwicmstI3tlbC5pZH1cIlxuICBlbFxuXG5SZWFjdC5yZW5kZXJDb21wb25lbnQgVHdpU3RydWcoe2NhcmRzOiBjYXJkc0RhdGEubWFwKGFkZFJlYWN0S2V5KX0pLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAnYXBwJ1xuIiwiU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi9TdGF0ZUhpc3RvcnknXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4vc3VwZXJwb3dlclRvSW5kZXgnXG5zdGF0ZUVuY29kZXIgPSByZXF1aXJlICcuL3N0YXRlRW5jb2RlcidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCb2FyZFN0YXRlSGlzdG9yeSBleHRlbmRzIFN0YXRlSGlzdG9yeVxuICBlbmNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgZW5jb2RlZCA9IHN0YXRlRW5jb2Rlci5lbmNvZGUgc3RhdGVcbiAgICAjY29uc29sZS5sb2cgJ0JvYXJkU3RhdGVIaXN0b3J5IGVuY29kZVN0YXRlJywgc3RhdGUsIGVuY29kZWRcbiAgICBlbmNvZGVkXG5cbiAgZGVjb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIGRlY29kZWQgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlXG4gICAgI2NvbnNvbGUubG9nICdCb2FyZFN0YXRlSGlzdG9yeSBkZWNvZGVTdGF0ZScsIHN0YXRlLCBkZWNvZGVkXG4gICAgZGVjb2RlZFxuICBcbiAgYWRkOiAoc3RhdGUsIG1ldGEpLT5cbiAgICAjIElmIGl0J3MgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIHByZXZpb3VzIGVudHJ5LCBkb24ndCB1cGRhdGUgdGhlIGhpc3RvcnlcbiAgICAjIFRoaXMgaXMgc28gd2UgY2FuIGJhdGNoIHRoZSBjaGFuZ2VzIGZvciBkaXNwbGF5XG4gICAgY3VyID0gQGdldEN1cnJlbnQoKVxuICAgICNjb25zb2xlLmxvZyBjdXJcbiAgICBpZiBub3QgY3VyP1xuICAgICAgcmV0dXJuIHN1cGVyIHN0YXRlLCBtZXRhXG5cbiAgICBubSA9IF8uY2xvbmVEZWVwIG1ldGFcbiAgICBucyA9IF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgY20gPSBjdXIubWV0YVxuICAgIGNzID0gY3VyLnN0YXRlXG4gICBcbiAgICAjIFNldCBpcCBkZWx0YSB0byBiZSBhbiBhcnJheVxuICAgIGlmIG1ldGEudHlwZSA9PSAnaXAnXG4gICAgICB1c2EgPSBpZiBubS5zaWRlID09ICd1c2EnIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICB1c3NyID0gaWYgbm0uc2lkZSA9PSAndXNzcicgdGhlbiBubS5kZWx0YSBlbHNlIDBcbiAgICAgIG5tLmRlbHRhID0gW3VzYSwgdXNzcl1cblxuXG4gICAgaWYgbm0udHlwZSA9PSBjbS50eXBlIGFuZCBucy5nYW1lLnJvdW5kID09IGNzLmdhbWUucm91bmRcbiAgICAgIHNpZGVTYW1lID0gaWYgbm0uaWQgPT0gJ3Njb3JlJyB0aGVuIHRydWUgZWxzZSBubS5zaWRlID09IGNtLnNpZGVcbiAgICAgIGlkU2FtZSA9IG5tLmlkID09IGNtLmlkXG5cbiAgICAgIHR5cGVJcFNhbWUgPSBubS50eXBlID09ICdpcCcgYW5kIG5tLmNvdW50cnkuaWQgPT0gY20uY291bnRyeS5pZFxuICAgICAgdHlwZVZhbFNhbWUgPSBubS50eXBlID09ICd2YWwnIGFuZCBubS5pZCAhPSAndHVybicgYW5kXG4gICAgICBubS5pZCAhPSAncm91bmQnIGFuZCBzaWRlU2FtZSBhbmQgaWRTYW1lXG5cbiAgICAgIGlmIHR5cGVJcFNhbWUgb3IgdHlwZVZhbFNhbWVcbiAgICAgICAgcmV0dXJuIEBtZXJnZVdpdGhDdXJyZW50IG5zLCBubVxuXG4gICAgc3VwZXIgbnMsIG5tXG5cblxuICBtZXJnZVdpdGhDdXJyZW50OiAoc3RhdGUsbWV0YSktPlxuICAgIGMgPSBfLmNsb25lRGVlcCBAZ2V0Q3VycmVudCgpXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgY20gPSBjLm1ldGFcbiAgICBzd2l0Y2ggY20udHlwZVxuICAgICAgd2hlbiAnaXAnXG4gICAgICAgIG5tLmRlbHRhWzBdICs9IGNtLmRlbHRhWzBdXG4gICAgICAgIG5tLmRlbHRhWzFdICs9IGNtLmRlbHRhWzFdXG4gICAgICAgIG5tLnNpZGUgPSAnYm90aCdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNzcidcbiAgICAgICAgaWYgbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNhJ1xuICAgICAgICBpZiBubS5kZWx0YVswXSA9PSBubS5kZWx0YVsxXSA9PSAwXG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgICB3aGVuICd2YWwnXG4gICAgICAgIG5tLm9sZCA9IGNtLm9sZFxuICAgICAgICBpZiBubS5vbGQgPT0gbm0ubmV3XG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBpZiBwb3AgPT0gdHJ1ZVxuICAgICAgQHN0YXRlcy5wb3AoKVxuICAgICAgQGN1cnJlbnQtLVxuICAgICAgaWYoQGxhdGVzdCA+IEBjdXJyZW50KVxuICAgICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIGVsc2VcbiAgICAgIEBzdGF0ZXNbQGN1cnJlbnRdID1cbiAgICAgICAgbWV0YTogbm1cbiAgICAgICAgc3RhdGU6IEBlbmNvZGVTdGF0ZSBzdGF0ZVxuXG4gICAgQHNhdmUoKVxuICAgIEBlbWl0ICdtZXJnZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cblxuICAjIFR1cm4gc3RhdGUgaW50byBhIG1pbmltYWwgcmVwcmVzZW50YXRpb25cbiAgZW5jb2RlQ3VycmVudDogKCktPlxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICByZXR1cm4gaWYgbm90IGN1cj9cbiAgICBzdGF0ZUVuY29kZXIuZW5jb2RlIEBnZXRDdXJyZW50KCk/LnN0YXRlXG5cblxuICB0b2dnbGVWaXNpYmxlOiAoZm9yY2UsIHNob3dUZW1wPWZhbHNlKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgQHNob3dUZW1wID0gc2hvd1RlbXBcbiAgICBAc2hvdyA9IGlmIGZvcmNlPyB0aGVuIGZvcmNlIGVsc2UgIUBzaG93XG4gICAgQGVtaXQgJ3RvZ2dsZVZpc2libGUnLCBAc2hvd1xuICAgIEBlbWl0ICd1cGRhdGUnXG5cbiAgc2hvd1RoZW5IaWRlOiAodGltZSA9IDEwMDApLT5cbiAgICBjbGVhclRpbWVvdXQgQHNob3dUaGVuSGlkZVRpbWVvdXRcbiAgICBpZiBub3QgQHNob3dcbiAgICAgIEB0b2dnbGVWaXNpYmxlIHRydWUsIHRydWVcbiAgICBpZiBAc2hvd1RlbXBcbiAgICAgIEBzaG93VGhlbkhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCBAdG9nZ2xlVmlzaWJsZS5iaW5kKHRoaXMsIGZhbHNlKSwgdGltZVxuXG4gIGhpZGU6IC0+XG4gICAgQHRvZ2dsZVZpc2libGUgZmFsc2VcblxuICBzaG93OiAtPlxuICAgIEB0b2dnbGVWaXNpYmxlIHRydWVcblxuICAjIGNiIGNhbiBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBzaG9ydGhhbmQgb2JqLCBvciBhIGtleSBuYW1lXG4gICMgaHR0cDovL2xvZGFzaC5jb20vZG9jcyNmaW5kSW5kZXhcbiAgZmluZFN0YXRlSW5kZXg6IChjYiktPlxuICAgIGluZGV4ID0gXy5maW5kSW5kZXggQHN0YXRlcywgY2JcbiAgICBpZiBpbmRleCAhPSAtMVxuICAgICAgcmV0dXJuIGluZGV4IFxuIiwiY2xhc3MgTWljcm9FdmVudENsYXNzXG4gIF9pbml0Oi0+IEBfbGlzdG4gb3IgQF9saXN0biA9IHt9XG4gIF9jcmVhdGU6KGUpLT4gQF9pbml0KClbZV0gb3IgIEBfaW5pdCgpW2VdID0gW11cbiAgb246KGUsIGYpLT4gKEBfY3JlYXRlIGUpLnB1c2ggZlxuICBvZmY6KGUsIGYpLT4gKHQuc3BsaWNlICh0LmluZGV4T2YgZiksIDEpIGlmICh0ID0gQF9pbml0KClbZV0pP1xuICBvbmNlOihlLCBmKS0+IEBvbiBlLCAodCA9ID0+IChAb2ZmIGUsIHQpICYmIGYuYXBwbHkgQCwgYXJndW1lbnRzKVxuICBlbWl0OihlLCByLi4uKS0+IGwuYXBwbHkgQCwgciBmb3IgbCBpbiB0IGlmICh0ID0gQF9pbml0KClbZV0pPzsgMFxuICBAbWl4aW49KHQpLT4gdDo6W3BdID0gQDo6W3BdIGZvciBwIG9mIEA6OjsgMFxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvRXZlbnRDbGFzc1xuIiwiTWljcm9FdmVudENsYXNzID0gcmVxdWlyZSAnLi9NaWNyb0V2ZW50Q2xhc3MnXG5cbmNsYXNzIFN0YXRlSGlzdG9yeSBleHRlbmRzIE1pY3JvRXZlbnRDbGFzc1xuICAjIEBpZCBpcyB1c2VkIGZvciBwZXJzaXN0YW5jZVxuICBjb25zdHJ1Y3RvcjogKG9wdHMpLT5cbiAgICAjXy5hc3NpZ24gdGhpcywgTWljcm9FdmVudFxuICAgIEBzdGF0ZXMgPSBbXVxuICAgIEBzdGFnZWQgPSBbXVxuICAgIEBsYXRlc3QgPSBudWxsXG4gICAgQGN1cnJlbnQgPSBudWxsXG4gICAgQHNob3cgPSBmYWxzZVxuICAgIEBpZCA9IG9wdHMuaWRcbiAgICBAc3RhdGVzVG9TYXZlID0gNTBcbiAgXG4gICMgRXh0ZW5kIHRvIGFkZCBjdXN0b20gZW5jb2RpbmcvZGVjb2RpbmcgZnVuY3Rpb25hbGl0eVxuICBlbmNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgc3RhdGVcblxuICBkZWNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgc3RhdGVcbiAgXG4gIHNhdmU6IC0+XG4gICAgc3RhdGVzID0gQHN0YXRlcy5zbGljZSAwLCBAc3RhdGVzVG9TYXZlXG4gICAgXG4gICAganNvbiA9IEpTT04uc3RyaW5naWZ5IHN0YXRlc1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIEBpZCwganNvblxuXG4gIGxvYWQ6IC0+XG4gICAgc3RhdGVzID0gSlNPTi5wYXJzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShAaWQpXG4gICAgaWYgc3RhdGVzIGFuZCBfLmlzQXJyYXkgc3RhdGVzXG4gICAgICBAc3RhdGVzID0gc3RhdGVzXG4gICAgICBAY3VycmVudCA9IHN0YXRlcy5sZW5ndGggLSAxXG4gICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgICAgQGVtaXQgJ2xvYWQnXG4gICAgICBAZW1pdCAndXBkYXRlJ1xuICAgICAgcmV0dXJuIHN0YXRlc1xuXG4gIGFkZDogKHN0YXRlLCBtZXRhPXt9KS0+XG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuXG4gICAgaWYgbm90IEBjdXJyZW50P1xuICAgICAgQGN1cnJlbnQgPSAwXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnQrK1xuXG4gICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBuZXdTdGF0ZSA9XG4gICAgICBzdGF0ZTogQGVuY29kZVN0YXRlIF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgICBtZXRhOiBfLmNsb25lRGVlcCBtZXRhXG5cbiAgICBAc3RhdGVzW0BjdXJyZW50XSA9IG5ld1N0YXRlXG5cbiAgICBAc2F2ZSgpXG5cbiAgICBAZW1pdCAnYWRkJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBuZXdTdGF0ZSwgJ1lFQUgnXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgXG4gIHVuZG86ICgpLT5cbiAgICBpZiBAY3VycmVudCA+IDBcbiAgICAgIEBjdXJyZW50LS1cbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndW5kbydcbiAgICBAZW1pdCAndXBkYXRlJywgc3RhdGVcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICAgIHN0YXRlXG4gIFxuICByZWRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPCBAbGF0ZXN0XG4gICAgICBAY3VycmVudCsrXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3JlZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuXG4gIGdvVG86IChpbmRleCktPlxuICAgIHJldHVybiBpZiBub3QgaW5kZXg/XG4gICAgQGN1cnJlbnQgPSBpbmRleFxuICAgIEBlbWl0ICdnb1RvJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1cGRhdGUnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ2NoYW5nZSdcblxuICBnZXQ6IChpbmRleCktPlxuICAgIHJldHVybiBudWxsIGlmIEBzdGF0ZXMubGVuZ3RoID09IDBcbiAgICBzaCA9IF8uY2xvbmVEZWVwIEBzdGF0ZXNbaW5kZXhdXG4gICAgc2guc3RhdGUgPSBAZGVjb2RlU3RhdGUgc2guc3RhdGVcbiAgICBzaFxuXG4gIGdldEN1cnJlbnQ6ICgpLT5cbiAgICBAZ2V0KEBjdXJyZW50KVxuXG4gIGdldFByZXY6IC0+XG4gICAgcHJldiA9IEBjdXJyZW50IC0gMVxuICAgIGlmIHByZXYgPCAwIHRoZW4gcHJldiA9IDBcbiAgICByZXR1cm4gQGdldChwcmV2KVxuXG4gIGdldEFsbDogLT5cbiAgICBfLm1hcCBAc3RhdGVzLCAoc2gsIGluZGV4KT0+XG4gICAgICBAZ2V0IGluZGV4XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUhpc3RvcnlcbiIsImN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gKHByb3BzKSAtPlxuICBvd25lckNsYXNzID0gXCJvd25lci0je3Byb3BzLm93bmVyfVwiXG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIG93bmVyQ2xhc3MgKyAnICcgKyBjbGFzc2VzXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbnRpbmVudCktPlxuICBpZiBjb250aW5lbnQgPT0gJ2FmJyB0aGVuICdmJyBlbHNlIGNvbnRpbmVudC5jaGFyQXQgMFxuXG4iLCJjcyA9XG4gICdhJzogJ2FzJ1xuICAnZSc6ICdldSdcbiAgJ2MnOiAnY2EnXG4gICdzJzogJ3NhJ1xuICAnZic6ICdhZidcbiAgJ20nOiAnbWUnXG5cbm1vZHVsZS5leHBvcnRzID0gKGxldHRlciktPiBjc1tsZXR0ZXJdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IGVsIGlmIGVsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCxpLGFyciktPiBhcnIuaW5kZXhPZihlbCkgPT0gaVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gMSA8PSBlbCA8PSAxMTBcbiIsIm1vZHVsZS5leHBvcnRzID1cbiAgdHVybjogKHZhbCktPlxuICAgIHN3aXRjaCB2YWxcbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSB2YWxcbiAgcm91bmQ6ICh2YWwpLT5cbiAgICBpZiB2YWwgPT0gMCB0aGVuICdIJyBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICBcbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwsIG9wdCktPlxuICBzd2l0Y2ggaWRcbiAgICB3aGVuICd0dXJuJ1xuICAgICAgc3RhcnQgPSAnUydcbiAgICAgIGVuZCA9ICdFJ1xuICAgICAgaWYgb3B0ID09ICdsb25nJ1xuICAgICAgICBzdGFydCA9ICdOZXcgR2FtZSdcbiAgICAgICAgZW5kID0gJ0dhbWUgRW5kJ1xuICAgICAgc3dpdGNoIHZhbFxuICAgICAgICB3aGVuIDAgdGhlbiBzdGFydFxuICAgICAgICB3aGVuIDExIHRoZW4gZW5kXG4gICAgICAgIGVsc2UgdmFsXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBoID0gaWYgb3B0ID09ICdsb25nJyB0aGVuICdIZWFkbGluZScgZWxzZSAnSCdcbiAgICAgIGlmIHZhbCA9PSAwIHRoZW4gaCBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICAgIHdoZW4gJ3Njb3JlJ1xuICAgICAgTWF0aC5hYnMgdmFsXG4gICAgZWxzZVxuICAgICAgdmFsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+IGlmIG51bSA+IDAgdGhlbiBcIisje251bX1cIiBlbHNlIG51bVxuIiwiIyBFbmNvZGUvZGVjb2RlIG51bWJlcnMgaW50byBzaW5nbGUtY2hhciByZXByZXNlbnRhdGlvbnNcbiMgMC0zNSAgLT4gMCwxLDIuLmEsYixjLi56XG4jIDM2LTYxIC0+IEEsQixDLi4uXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGVuY29kZTogKG4pLT5cbiAgICBpZiBuIDwgMzYgdGhlbiBvdXQgPSBuLnRvU3RyaW5nKDM2KSBlbHNlIFN0cmluZy5mcm9tQ2hhckNvZGUgbiArIDI5XG5cbiAgZGVjb2RlOiAoYyA9ICcwJyktPlxuICAgIGNvZGUgPSBjLmNoYXJDb2RlQXQgMFxuICAgICMgQ2FsY3VsYXRlIG9mZnNldCBmcm9tIGNoYXJjb2RlIHRvIHZhbHVlXG4gICAgb2Zmc2V0ID0gc3dpdGNoXG4gICAgICAjIDAtOVxuICAgICAgd2hlbiA0OCA8PSBjb2RlIDw9IDU3IHRoZW4gNDhcbiAgICAgICMgMTAtMzVcbiAgICAgIHdoZW4gOTcgPD0gY29kZSA8PSAxMjIgdGhlbiA4N1xuICAgICAgIyAzNi02MVxuICAgICAgd2hlbiA2NSA8PSBjb2RlIDw9IDkwIHRoZW4gMjlcblxuICAgIGNvZGUgLSBvZmZzZXRcbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbnRpbmVudCktPlxuICBpZiBjb250aW5lbnQgPT0gJ2FmJyB0aGVuICdmJyBlbHNlIGNvbnRpbmVudC5jaGFyQXQgMFxuXG4iLCIjIEhhc2hlZCBxc1xuIyBIYW5kbGVzIHN0cmluZ3MgYW5kIGFycmF5c1xuIyBBbnl0aGluZyB3aXRoIGEgY29tbWEgd2lsbCBiZSBwYXJzZWQgYXMgYW4gYXJyYXlcbm1vZHVsZS5leHBvcnRzID1cbiAgbWVyZ2U6IChvYmopLT5cblxuICBnZXQ6IChmaWVsZCktPlxuICBcbiAgc2V0OiAoZmllbGQsIHZhbCktPlxuICAgIHFzT2JqID0gQHRvT2JqKCkgfHwge31cbiAgICBxc09ialtmaWVsZF0gPSB2YWxcbiAgICBAc2V0UVMgQHRvUVMocXNPYmopXG5cbiAgZGVsZXRlOiAoZmllbGQpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcmV0dXJuIGlmIG5vdCBxc09iaj9cbiAgICBkZWxldGUgcXNPYmpbZmllbGRdXG4gICAgQHNldFFTIEB0b1FTIHFzT2JqXG5cbiAgZW5jb2RlQ2hhcnNJbjogWyc9JywnJiddXG5cbiAgZW5jb2RlQ2hhcnNPdXQ6WyclM0QnLCclMjYnXVxuXG4gIGVuY29kZTogKG9iaiktPlxuICAgIGlmIF8uaXNBcnJheSBvYmpcbiAgICAgIG9iaiA9IG9iai5qb2luKCcsJylcbiAgICBvYmoucmVwbGFjZShAZW5jb2RlQ2hhcnNJbiwgQGVuY29kZUNoYXJzT3V0KVxuXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKEBlbmNvZGVDaGFyc091dCwgQGVuY29kZUNoYXJzSW4pXG4gICAgaWYgc3RyLmluZGV4T2YoJywnKSAhPSAtMVxuICAgICAgc3RyID0gc3RyLnNwbGl0KCcsJylcbiAgICBzdHJcblxuXG4gIHRvT2JqOiAocXMgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpP1sxXSktPlxuICAgIGlmIG5vdCBxc1xuICAgICAgcmV0dXJuXG4gICAgb3V0ID0ge31cbiAgICBwYWlycyA9IHFzLnNwbGl0KCcmJylcbiAgICBwYWlycz8uZm9yRWFjaCAocGFpcik9PlxuICAgICAga3ZBcnIgPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgIG91dFtAZGVjb2RlKGt2QXJyWzBdKV0gPSBAZGVjb2RlKGt2QXJyWzFdKVxuICAgIG91dFxuXG4gIHRvUVM6IChvYmopLT5cbiAgICBwYWlycyA9IFtdXG4gICAgZm9yIG93biBrLHYgb2Ygb2JqXG4gICAgICBwYWlycy5wdXNoIFwiI3tAZW5jb2RlKGspfT0je0BlbmNvZGUodil9XCJcbiAgICBwYWlycy5qb2luKCcmJylcbiAgICAgICBcbiAgc2V0UVM6IChxcyktPlxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXSArICc/JyArIHFzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChpZCwgdmFsKS0+XG4gIHJhbmdlcyA9XG4gICAgc2NvcmU6IFstMjAsIDIwXVxuICAgIHR1cm46IFswLCAxMV1cbiAgICByb3VuZDogWzAsIDE2XVxuICAgIGRlZmNvbjogWzEsIDVdXG4gICAgbWlsb3BzOiBbMCwgNV1cbiAgICBzcGFjZTogWzAsIDhdXG5cbiAgcmFuZ2UgPSByYW5nZXNbaWRdXG5cbiAgaWYgdmFsIDwgcmFuZ2VbMF1cbiAgICByZXR1cm4gcmFuZ2VbMV1cbiAgaWYgdmFsID4gcmFuZ2VbMV1cbiAgICByZXR1cm4gcmFuZ2VbMF1cbiAgdmFsXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGFyZ3MuLi4pLT5cbiAgZG9jdW1lbnQudGl0bGUgPSBhcmdzLmpvaW4oJyB8ICcpICsgJyAtIFR3aVN0cnVnJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZGlyKS0+IGlmIGRpciA9PSAndXAnIHRoZW4gJysnIGVsc2UgJy0nXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBpZiBudW0gPiAwXG4gICAgcmV0dXJuICcrJ1xuICBpZiBudW0gPCAwXG4gICAgcmV0dXJuICctJ1xuICByZXR1cm4gJydcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBpZiBudW0gPT0gMFxuICAgIG91dCA9ICfigJQnXG4gIGlmIG51bSA+IDBcbiAgICBvdXQgPSBcIisje251bX1cIlxuICBpZiBudW0gPCAwXG4gICAgb3V0ID0gbnVtXG4gIG91dFxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIHNpZ24gPSAnJ1xuICBpZiBudW0gPiAwXG4gICAgc2lnbiA9ICcrJ1xuICBjb25zb2xlLmxvZyBzaWduICsgbnVtXG4gIHJldHVybiBzaWduICsgbnVtXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhLGIpLT4gYS1iXG4iLCJudW1Ub0NoYXIgPSByZXF1aXJlICcuL251bVRvQ2hhcidcblxuIyBUdXJuIGEgZ2FtZSBzdGF0ZSBvYmplY3QgaW50byBhIHN0cmluZywgdmFsdWVzIGRlbGltaXRlZCBieSBpbmRleCBpbiB0aGUgc3RyaW5nXG4jXG4jIEJ5dGVzICAgICBJdGVtc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAwLTcgICAgICAgQm9hcmQgc3RhdGU6ICBTY29yZSwgRGVmY29uLCBUdXJuLCBSb3VuZCxcbiMgICAgICAgICAgICAgICAgICAgICAgICAgTU8gVVNBLCBNTyBVU1NSLCBTcGFjZSBVU0EsIFNwYWNlIFVTU1JcbiMgOC0xNzYgICAgIENvdW50cnkgSVBzLCAyIGJ5dGVzIGVhY2gsIHNlcXVlbnRpYWxseSBieSBpZFxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChzdGF0ZSktPlxuICAgIGdhbWUgPSBzdGF0ZS5nYW1lXG4gICAgaXBzID0gc3RhdGUuaXBzXG5cbiAgICAjIFNjb3JlIGlzIGZyb20gLTIwIHRvICsyMCwgYnV0IHRoaXMgZW5jb2RlciBpcyBwb3NpdGl2ZSBpbnRlZ2VycyBvbmx5XG4gICAgYm9hcmQgPSBbXG4gICAgICBnYW1lLnNjb3JlICsgMjAsIGdhbWUuZGVmY29uLCBnYW1lLnR1cm4sIGdhbWUucm91bmQsXG4gICAgICBnYW1lLm1pbG9wc1swXSwgZ2FtZS5taWxvcHNbMV0sIGdhbWUuc3BhY2VbMF0sIGdhbWUuc3BhY2VbMV1cbiAgICBdXG5cbiAgICAjIEZpcnN0IDIgaXBzIGFyZSB0aGUgc3VwZXJwb3dlcnMgLSBwcmV0dHkgdXNlbGVzcywgc2hvdWxkIGNoYW5nZSBpbiBmdXR1cmVcbiAgICBib2FyZC5jb25jYXQgXy5mbGF0dGVuIGlwcy5zbGljZSgyKVxuICAgICAgLm1hcCBudW1Ub0NoYXIuZW5jb2RlXG4gICAgICAuam9pbiAnJ1xuICAgICAgXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHJldHVybiBudWxsIGlmIG5vdCBzdHI/XG4gICAgYXJyID0gc3RyLnNwbGl0KCcnKS5tYXAgKGVsKS0+IG51bVRvQ2hhci5kZWNvZGUgZWxcbiAgICBib2FyZEFyciA9IGFyci5zbGljZSgwLDgpXG4gICAgaXBBcnIgPSBhcnIuc2xpY2UoOClcblxuICAgIFtzY29yZSwgZGVmY29uLCB0dXJuLCByb3VuZCwgbW91c2EsIG1vdXNzciwgc3B1c2EsIHNwdXNzcl0gPSBib2FyZEFyclxuICAgIG1pbG9wcyA9IFttb3VzYSwgbW91c3NyXVxuICAgIHNwYWNlID0gW3NwdXNhLCBzcHVzc3JdXG4gICAgc2NvcmUgLT0gMjBcbiAgICBnYW1lID0ge3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtaWxvcHMsIHNwYWNlfVxuXG4gICAgaXBzID0gW11cbiAgICBmb3IgaXAsIGluZGV4IGluIGlwQXJyXG4gICAgICBpcHNJbmRleCA9IE1hdGguZmxvb3IgaW5kZXgvMlxuICAgICAgc2lkZUluZGV4ID0gaW5kZXggJSAyXG4gICAgICBpZiBzaWRlSW5kZXggPT0gMFxuICAgICAgICBpcHNbaXBzSW5kZXhdID0gW2lwXVxuICAgICAgZWxzZVxuICAgICAgICBpcHNbaXBzSW5kZXhdW3NpZGVJbmRleF0gPSBpcFxuXG4gICAgIyBBZGQgdGhlIHN1cGVycG93ZXIgSVBzIGJhY2sgaW5cbiAgICBpcHMudW5zaGlmdCBbMCwwXSwgWzAsMF1cblxuICAgIHtnYW1lLCBpcHN9XG5cbiIsImdldElwU3RhdHMgPSAoaXBzLCBjb3VudHJpZXMpLT5cbiAgYWNjdW11bGF0b3IgPSAtPlxuICAgIGJ0bDogMFxuICAgIG5vbjogMFxuICAgIHRvdGFsOiAwXG4gICAgZXU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYXM6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgbWU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYWY6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgc2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgY2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG5cbiAgZm4gPSAoYWNjdW0sIGlwcywgY291bnRyeUlkKS0+XG4gICAgY291bnRyeSA9IF8uZmluZCBjb3VudHJpZXMsIGlkOiBwYXJzZUludChjb3VudHJ5SWQsIDEwKVxuICAgIGlmIGlwc1swXSAtIGlwc1sxXSA+PSBjb3VudHJ5LnN0YWJcbiAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS50b3RhbCsrXG4gICAgICBhY2N1bS50b3RhbCsrXG4gICAgICBpZiBjb3VudHJ5LmJ0bFxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0uYnRsKytcbiAgICAgICAgYWNjdW0uYnRsKytcbiAgICAgIGVsc2VcbiAgICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLm5vbisrXG4gICAgICAgIGFjY3VtLm5vbisrXG4gICAgYWNjdW1cblxuICAjIEZsaXBwZWQgdG8gaGF2ZSBVU1NSIGlwcyBmaXJzdFxuICBpcHNSZXYgPSBfLm1hcCBpcHMsIChpcHMpLT4gXy5jbG9uZURlZXAoaXBzKS5yZXZlcnNlKClcblxuICB1c2EgPSBfLnJlZHVjZSBpcHMsIGZuLCBhY2N1bXVsYXRvcigpXG4gIHVzc3IgPSBfLnJlZHVjZSBpcHNSZXYsIGZuLCBhY2N1bXVsYXRvcigpXG5cbiAge3VzYSwgdXNzcn1cblxuc3VtUmVnaW9uID0gKG1ldHJpYywgc3VtLCByZWdpb24pLT4gc3VtICsgcmVnaW9uW21ldHJpY11cblxuZ2V0UmVnaW9uU3RhdHMgPSAoaXBTdGF0cywgcmVnaW9ucyktPlxuICBzdGF0cyA9IF8ubWFwVmFsdWVzIGlwU3RhdHMsIChoZXJvLCBwb3dlciwgcG93ZXJzKS0+XG4gICAgdmlsbGFpbiA9IGlmIHBvd2VyID09ICd1c2EnIHRoZW4gcG93ZXJzLnVzc3IgZWxzZSBwb3dlcnMudXNhXG4gICAgcmVnaW9uU3RhdHMgPSByZWdpb25zLm1hcCAocmVnaW9uKS0+XG4gICAgICBoUmVnaW9uID0gaGVyb1tyZWdpb24uaWRdXG4gICAgICB2UmVnaW9uID0gdmlsbGFpbltyZWdpb24uaWRdXG4gICAgICBkb21pbmF0aW9uID0gaFJlZ2lvbi5ub24gPiAwIGFuZCBoUmVnaW9uLmJ0bCA+IHZSZWdpb24uYnRsIGFuZCBoUmVnaW9uLnRvdGFsID4gdlJlZ2lvbi50b3RhbFxuICAgICAgY29udHJvbCA9IGhSZWdpb24uYnRsID09IHJlZ2lvbi5udW1CdGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICBwcmVzZW5jZSA9IG5vdCBkb21pbmF0aW9uIGFuZCBub3QgY29udHJvbCBhbmQgaFJlZ2lvbi50b3RhbCA+IDBcbiAgICAgIHsgcHJlc2VuY2UsIGRvbWluYXRpb24sIGNvbnRyb2wgfVxuXG4gICAgcmVnaW9uU3RhdHMgPSBfLnppcE9iamVjdCBfLnBsdWNrKHJlZ2lvbnMsICdpZCcpLCByZWdpb25TdGF0c1xuICAgIHJlZ2lvblN0YXRzID0gXy5hc3NpZ24gcmVnaW9uU3RhdHMsXG4gICAgICBwcmVzZW5jZTogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdwcmVzZW5jZScpLCAwXG4gICAgICBkb21pbmF0aW9uOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2RvbWluYXRpb24nKSwgMFxuICAgICAgY29udHJvbDogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdjb250cm9sJyksIDBcbiAgXG4gIHN0YXRzXG5cbm1vZHVsZS5leHBvcnRzID0gKGlwcywgY291bnRyeUFyciwgcmVnaW9uQXJyKS0+XG4gIGNvdW50cmllcyA9IGdldElwU3RhdHMoaXBzLCBjb3VudHJ5QXJyKVxuICByZWdpb25zID0gZ2V0UmVnaW9uU3RhdHMoY291bnRyaWVzLCByZWdpb25BcnIpXG4gIHtjb3VudHJpZXMsIHJlZ2lvbnN9XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAocG93ZXIpLT4gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyPScnKS0+IHN0ci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtOCcsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtMTInLFxuICAgICAgICAgICAgUi5oMiB7fSwgW1xuICAgICAgICAgICAgICBcIkFib3V0IFwiXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd0d2knLCAnVHdpJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc3RydWcnLCAnU3RydWcnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgY3JlYXRlZCBhcyBhIGNhcmQgcmVmZXJlbmNlIGZvciBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIixcbiAgICAgICAgICAgICAgICBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgICAgXCIuIEl0IGhhcyBzaW5jZSBleHBhbmRlZCB0byBpbmNsdWRlIGEgcGxheWFibGUgdmVyc2lvbiBvZiB0aGUgYm9hcmQgZm9yXG4gICAgICAgICAgICAgIGxvY2FsIGdhbWVzIHdpdGhvdXQgdGFraW5nIHVwIGFzIG11Y2ggdGFibGUgc3BhY2UuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIkZvciBtb3JlIGluLWRlcHRoIHN0cmF0ZWd5LCBsb29rIG5vIGZ1cnRoZXIgdGhhbiB0aGUgaW5pbWl0YWJsZSBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgICAgICAgIFwiLiBJdCBoYXMgdG9ucyBvZiBncmVhdCBjb250ZW50IGFuZFxuICAgICAgICAgICAgICBhbmFseXNpcyBhdmFpbGFibGUsIGluY2x1ZGluZyBkaXNjdXNzaW9ucyBhYm91dCBuZWFybHkgZXZlcnkgY2FyZC5cbiAgICAgICAgICAgICAgUGxlYXNlIHN1cHBvcnQgVHdpbGlnaHQgU3RyYXRlZ3kgYW5kIGl0cyBhdXRob3IsIFwiXG4gICAgICAgICAgICAgIFIuZW0ge30sIFwidGhlb3J5XCJcbiAgICAgICAgICAgICAgXCIsIGJ5IHB1cmNoYXNpbmcgVHdpbGlnaHQgU3RydWdnbGUgZnJvbSBBbWF6b24gb24gdGhlIHNpZGViYXIgb2YgaGlzXG4gICAgICAgICAgICAgIHNpdGUsIG9yIGJ5IHBheWluZyBzb21lIG1vbmV5IGZvciB0aGUgYXNzb2NpYXRlZCBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2xlYW5wdWIuY29tL3R3aWxpZ2h0c3RyYXRlZ3lcIiwgXCJlLWJvb2tcIlxuICAgICAgICAgICAgICBcIi4gSXQncyBUd2lsaWdodCBTdHJhdGVneSBpbiBib29rIGZvcm0gYW5kIGRlc2VydmVzIHlvdXIgbW9uZXkuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly9qanQuaW8vXCIsIFwiSmFzb24gVHJpbGxcIlxuICAgICAgICAgICAgICBcIi4gU291cmNlIGF2YWlsYWJsZSBvbiBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnXCIsIFwiR2l0aHViXCJcbiAgICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIuaDIge30sIFwiQWJvdXQgVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgUi5ibG9ja3F1b3RlIHt9LCBbXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJUd2lsaWdodCBTdHJ1Z2dsZSBpcyBhIGNhcmQgZHJpdmVuIGdhbWUgcGxheWVkIG92ZXIgYSBtYXhpbXVtIG9mIDEwIHR1cm5zIFtlYWNoIHdpdGggNiBvciA3IHJvdW5kc10uIFRoZSBnYW1lIG1heSBlbmQgc29vbmVyIChhbmQgZnJlcXVlbnRseSBkb2VzKS5cIlxuICAgICAgICBcbiAgICAgICAgICAgICAgUi5wIHt9LCBcIltJdF0gaXMgZnVuZGFtZW50YWxseSBhIGdhbWUgYWJvdXQgYXJlYSBjb250cm9sLiBUaGVyZSBhcmUgc2l4IGdlb3BvbGl0aWNhbCByZWdpb25zIG9uIHRoZSBtYXA6IEV1cm9wZSAoc3BsaXQgaW50byBFYXN0ZXJuIGFuZCBXZXN0ZXJuIEV1cm9wZSBzdWJyZWdpb25zKSwgQXNpYSAoaW5jbHVkaW5nIHRoZSBTb3V0aGVhc3QgQXNpYSBzdWJyZWdpb24pLCB0aGUgTWlkZGxlIEVhc3QsIEFmcmljYSwgQ2VudHJhbCBBbWVyaWNhLCBhbmQgU291dGggQW1lcmljYS4gV2l0aGluIGVhY2ggcmVnaW9uIGFyZSBjb3VudHJpZXMgdGhhdCBoYXZlIGEgc3RhYmlsaXR5IG51bWJlciwgcmVwcmVzZW50aW5nIGhvdyBzdGFibGUgdGhlIGdvdmVybm1lbnQgdGVuZHMgdG8gYmUuXCJcblxuICAgICAgICAgICAgICBSLnAge30sIFwiSGF2aW5nIGNvbnRyb2wgb2YgY291bnRyaWVzIGhlbHBzIGRldGVybWluZSB3aGV0aGVyIHlvdSBoYXZlIHByZXNlbmNlLCBkb21pbmF0aW9uLCBvciBjb250cm9sIG9mIGEgcmVnaW9uLCB3aGljaCBpbiB0dXJuIGhlbHBzIHlvdSBlYXJuIHZpY3RvcnkgcG9pbnRzLiBXaXRoaW4gZWFjaCByZWdpb24sIHRoZXJlIGFyZSBhIG51bWJlciBvZiBiYXR0bGVncm91bmQgY291bnRyaWVzLCB3aGljaCBhcmUgY29uc2lkZXJlZCBrZXkgdG8gdGhlIHJlZ2lvbi5cIlxuICAgICAgICAgICAgICBSLnAge30sXG4gICAgICAgICAgICAgICAgUi5lbSB7fSxcbiAgICAgICAgICAgICAgICAgIFIuYSBocmVmOiAnaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3RocmVhZC80NzE5NTMvcm9nZXJzLXJldmlld3MtZGVsdXhlLXR3aWxpZ2h0LXN0cnVnZ2xlLWNvbXByZWhlbnMnLCAnRm9ydW0gcG9zdCBieSBsZXJveTQzJ1xuICAgICAgICAgICAgXVxuXG4gICAgICAgIFxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC00JywgW1xuICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZyBpbWctZmx1aWQgQWJvdXRWaWV3LXRzYm94Jywgc3JjOiBcIi9pbWFnZXMvdHNib3guanBnXCJcbiAgICAgICAgXVxuICAgICAgXVxuXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtMTInLFxuICAgICAgICAgIFIucCB7fSxcbiAgICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdpbWctbGluaycsIGhyZWY6IFwiL2ltYWdlcy90c2JvYXJkLmpwZ1wiLFxuICAgICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWcgaW1nLWZsdWlkIGltZy1jZW50ZXInLCBzcmM6ICcvaW1hZ2VzL3RzYm9hcmQtbWQuanBnJ1xuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5TdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL1N0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5VmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmQgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZCdcblxucmVkdWNlU2hvcnRjdXRzID0gKGFyciwgc2hvcnRjdXQpLT5cbiAgYXJyLnB1c2ggUi5kdCB7fSwgc2hvcnRjdXQua2V5XG4gIGFyci5wdXNoIFIuZGQge30sIHNob3J0Y3V0LmRlc2NcbiAgYXJyXG5cblxuQm9hcmRJbmZvID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgc2Nyb2xsVG9wOiAtPlxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyAwLDBcbiAgICAsIDBcbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHNob3J0Y3V0czpcbiAgICAgIGlwOiBbXG4gICAgICAgIHsga2V5OidpJywgZGVzYzogJ0VudGVyIElQIHBsYWNlbWVudCBieSBrZXlib2FyZCAoSVBiSykgbW9kZScgfVxuICAgICAgICB7IGtleTonZXNjJywgZGVzYzogJ0dvIFwidXBcIiAoY291bnRyeSAtPiBjb250aW5lbnQgLT4gZXhpdCBJUGJLIG1vZGUpJyB9XG4gICAgICAgIHsga2V5OidlbnRlcicsIGRlc2M6ICcoc2FtZSBhcyBhYm92ZSknIH1cbiAgICAgICAgeyBrZXk6J2EvQScsIGRlc2M6ICdVU0EgaW5mbHVlbmNlIGluYy9kZWMgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J3IvUicsIGRlc2M6ICdVU1NSIGluZmx1ZW5jZSBpbmMvZGVjICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5Oidlc2MnLCBkZXNjOiAnQ2FuY2VsIElQIHBsYWNlbWVudCAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonZW50ZXInLCBkZXNjOiAnQ29uZmlybSBJUCBwbGFjZW1lbnQgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgIF1cbiAgICAgIGxlZnQ6IFtcbiAgICAgICAgeyBrZXk6J3MvUycsIGRlc2M6ICdTY29yZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidkL0QnLCBkZXNjOiAnRGVmY29uIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J20vTScsIGRlc2M6ICdVU0EgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J28vTycsIGRlc2M6ICdVU1NSIE1pbGl0YXJ5IE9wcyBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidoJywgZGVzYzogJ1Nob3cvaGlkZSBBY3Rpb24gSGlzdG9yeScgfVxuICAgICAgICB7IGtleTonYycsIGRlc2M6ICdSb2xsIGRpY2UnIH1cbiAgICAgIF1cbiAgICAgIHJpZ2h0OiBbXG4gICAgICAgIHsga2V5Oid0L1QnLCBkZXNjOiAnVHVybiBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidyL1InLCBkZXNjOiAnUm91bmQgaW5jL2RlYycgfVxuICAgICAgICB7IGtleToncC9QJywgZGVzYzogJ1VTQSBTcGFjZSBSYWNlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2EvQScsIGRlc2M6ICdVU1NSIFNwYWNlIFJhY2UgaW5jL2RlYycgfVxuICAgICAgICB7IGtleToneicsIGRlc2M6ICdVbmRvIChBY3Rpb24gSGlzdG9yeSknIH1cbiAgICAgICAgeyBrZXk6J3knLCBkZXNjOiAnUmVkbyAoQWN0aW9uIEhpc3RvcnkpJyB9XG4gICAgICBdXG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctMTInLCBbXG4gICAgICAgICAgUi5oMyB7fSwgJ1ZpcnR1YWwgVHdpbGlnaHQgU3RydWdnbGUgYm9hcmQnXG4gICAgICAgICAgUi5wIHt9LCBcIlRoaXMgaXMgYSBmdWxseSBwbGF5YWJsZSBib2FyZCB3aXRoIGEgbW9yZVxuICAgICAgICAgICAgY29tcGFjdCBsYXlvdXQgdG8gZml0IG9uIHNtYWxsZXIgc2NyZWVucywgbGlrZSBhIENocm9tZWJvb2sgb3IgaVBhZC4gSnVzdCBhZGQgY2FyZHNcbiAgICAgICAgICAgIGFuZCB5b3UnbGwgYmUgYWJsZSB0byBwbGF5IGFueXdoZXJlLiBUaGUgYm9hcmQgaXNuJ3QgYXdhcmUgb2YgdGhlIHJ1bGVzLCBub3Igd2lsbFxuICAgICAgICAgICAgaXQgZG8gYW55dGhpbmcgYXV0b21hdGljYWxseS4gVXNlIGl0IGFzIHlvdSB3b3VsZCBhIHBoeXNpY2FsIGNvcHkgb2YgdGhlIGdhbWUuXCJcbiAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgIFwiVGhpcyBnYW1lLCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiIy9ib2FyZC8je0Bwcm9wcy5pZH1cIixcbiAgICAgICAgICAgICAgUi5jb2RlIHt9LCBAcHJvcHMuaWRcbiAgICAgICAgICAgIFwiLCB3aWxsIGJlIHNhdmVkIGluIHlvdXIgYnJvd3NlciBhbmQgY2FuIGJlIGJvb2ttYXJrZWQgYW5kIHJlc3VtZWQgYXQgYSBsYXRlciB0aW1lLCBldmVuIGlmIHlvdSBjbG9zZSB5b3VyIGJyb3dzZXIuIFwiXG4gICAgICAgICAgICBSLmEgb25DbGljazogQHNjcm9sbFRvcCwgaHJlZjonIy9ib2FyZCcsICdDbGljayBoZXJlIHRvIHN0YXJ0IGEgbmV3IGdhbWUnXG4gICAgICAgICAgICAnLidcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5wIHt9LCBcIlRoZSBVUkwgY29udGFpbnMgdGhlIGNvbXBsZXRlIHN0YXRlIG9mIHRoZSBib2FyZCBhbmQgd2lsbFxuICAgICAgICAgICAgdXBkYXRlIHdpdGggZWFjaCBhY3Rpb24gdGFrZW4uIFRoaXMgY2FuIGJlIHVzZWQgdG8gcGxheSByZW1vdGVseVxuICAgICAgICAgICAgd2l0aCBzb21lb25lIGJ5IHNlbmRpbmcgdGhlIFVSTCBiYWNrIGFuZCBmb3J0aC4gRm9yXG4gICAgICAgICAgICBpbnN0YW5jZSwgaWYgeW91IHdlcmUgdGhlIFVTU1Igc3RhcnRpbmcgYSBuZXcgZ2FtZSwgeW91IHdvdWxkIHBsYWNlIHlvdXJcbiAgICAgICAgICAgIGluaXRpYWwgaW5mbHVlbmNlIHRoZW4gY29weSB0aGUgVVJMIGFuZCBzZW5kIGl0IHRvIHlvdXIgb3Bwb25lbnQuIFRoZXlcbiAgICAgICAgICAgIHdvdWxkIGdvIHRvIHRoYXQgVVJMLCBwbGFjZSB0aGVpciBpbmZsdWVuY2UgYW5kIHNlbmQgdGhlIG5ldyBVUkwgYmFjayB0byB5b3UuIExhdGhlciwgcmluc2UsIHJlcGVhdC5cIlxuICAgICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICAgIFIuaDMge30sIFwiSW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICBSLnAge30sIFwiVG8gYWRkL3JlbW92ZSBpbmZsdW5jZSBpbiBhIGNvdW50cnksIGNsaWNrIGluIHRoZSB0b3AvYm90dG9tIG9mIHRoZSBpbmZsdWVuY2Ugc3BhY2Ugb24gdGhlIGRlc2lyZWQgc2lkZSAoVVNBIG9uIGxlZnQsIFVTU1Igb24gcmlnaHQpLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIlRvIHVuZG8vcmVkbyBvbmUgb3IgbW9yZSBhY3Rpb25zLCBwcmVzcyBaL1kgb25lIG9yIG1vcmUgdGltZXMuXCJcbiAgICAgICAgICBSLnAge30sIFwiVGhlIGRpY2UgY2FuIGJlIHJvbGxlZCBpbmRpdmlkdWFsbHkgYnkgY2xpY2tpbmcgb24gdGhlbSwgb3IgYXMgYSBwYWlyIGJ5IGNsaWNraW5nIG9uIFxcXCJST0xMIERJQ0VcXFwiLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIkVhY2ggc3VwZXJwb3dlciBib3ggKFVTQSwgVVNTUikgc2hvd3MgdGhlIG51bWJlciBvZiBjb250cm9sbGVkIGJhdHRsZWdyb3VuZCBjb3VudHJpZXMgb24gdG9wLiBPbiB0aGUgYm90dG9tIGl0IHNob3dzIHRoZSBudW1iZXIgb2YgcmVnaW9ucyBpbiB3aGljaCB0aGUgcG93ZXIgaGFzIHByZXNlbmNlLCBkb21pbmF0aW9uLCBhbmQgY29udHJvbC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBVU1NSIGhhZCBcXFwiNCAyIDFcXFwiLCBpdCB3b3VsZCBtZWFuIHRoYXQgdGhleSBoYXZlIHByZXNlbmNlIGluIDQgcmVnaW9ucywgZG9taW5hdGUgMiwgYW5kIGNvbnRyb2wgMS5cIlxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICAgIFIuaDMge30sIFwiS2V5Ym9hcmQgU2hvcnRjdXRzXCJcbiAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBjb2wtbGctNicsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMubGVmdCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIGNvbC1sZy02JywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5yaWdodCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctMTInLCBbXG4gICAgICAgICAgICAgIFIuaDQge30sIFwiSW5mbHVlbmNlIHBsYWNlbWVudCBieSBrZXlib2FyZFwiXG4gICAgICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIEJvYXJkUGFnZS1zaG9ydGN1dHMtaXAnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLmlwLCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdCb2FyZFZpZXcnXG5cbiAgc3RhdGVIaXN0b3J5OiBudWxsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBzdGF0ZUhpc3RvcnkgPSBuZXcgQm9hcmRTdGF0ZUhpc3RvcnkgaWQ6IEBwcm9wcy5nYW1lSWRcblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgd2lkdGg6IDExNDBcbiAgICBoZWlnaHQ6IDczMFxuICAgIG5vZGU6XG4gICAgICB3aWR0aDogNjZcbiAgICAgIGhlaWdodDogNTBcbiAgICAgIGd1dHRlcjogMTRcbiAgICAgIHRpdGxlSGVpZ2h0OiAxNlxuICAgICAgdGl0bGVGb250U2l6ZTogMTJcblxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRWaWV3JywgW1xuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlWaWV3XG4gICAgICAgIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeVxuICAgICAgICBrZXk6IFwiQm9hcmRTdGF0ZUhpc3RvcnktI3tAcHJvcHMuZ2FtZUlkfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb250YWluZXInLCBbXG4gICAgICAgIEJvYXJkIF8uYXNzaWduIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeSwgQHByb3BzXG4gICAgICAgIEJvYXJkSW5mbyBpZDogQHByb3BzLmdhbWVJZFxuICAgICAgXVxuICAgIF1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkUGljVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2JvYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyJyxcbiAgICAgICAgUi5oMiB7fSwgJ0JvYXJkJ1xuICAgICAgUi5hIGhyZWY6Jy9pbWFnZXMvdHNib2FyZC5qcGcnLFxuICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdmbHVpZCcsIHNyYzonL2ltYWdlcy90c2JvYXJkLmpwZydcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5tb2R1bGUuZXhwb3J0cyAgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRWaWV3J1xuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcbiAgICBAZ2V0U3RyYXRlZ3koKVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgIHdpbmRvdy5vbmtleXByZXNzID0gbnVsbFxuICAgICQod2luZG93KS5vZmYgJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub2ZmICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT5cbiAgICBAZ2V0U3RyYXRlZ3koKVxuICAgICNAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBmbG9hdGluZ0NhcmQ6IC0+XG4gICAgJGhlYWRlciA9ICQgQHJlZnMuaGVhZGVyLmdldERPTU5vZGUoKVxuICAgICRpbWcgPSAkIEByZWZzLmNhcmRJbWcuZ2V0RE9NTm9kZSgpXG4gICAgJHdpbiA9ICQgd2luZG93XG4gICAgaG8gPSAkaGVhZGVyLm9mZnNldCgpXG4gICAgaXNTY3JvbGxpbmcgPSAkd2luLnNjcm9sbFRvcCgpID4gaG8udG9wICsgaG8uaGVpZ2h0XG4gICAgJGltZy50b2dnbGVDbGFzcyAnY2FyZC1pbWctc2Nyb2xsJywgaXNTY3JvbGxpbmdcbiAgICAkaW1nLmNzcyAncmlnaHQnLCBcIiN7KCR3aW4ud2lkdGgoKSAtIGhvLndpZHRoIC0gMTUpIC8gMn1weFwiXG5cbiAgaGFuZGxlS2V5UHJlc3M6IChldikgLT5cbiAgICAgIGtDID0gZXYua2V5Q29kZVxuICAgICAgaWYga0MgPT0gMTA0IG9yIGtDID09IDcyXG4gICAgICAgIGlkID0gQHByb3BzLnByZXZDYXJkLmlkXG4gICAgICBpZiBrQyA9PSAxMDggb3Iga0MgPT0gNzZcbiAgICAgICAgaWQgPSBAcHJvcHMubmV4dENhcmQuaWRcbiAgICAgIGlmIGlkP1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIiMvY2FyZC8je2lkfVwiXG5cbiAgZ2V0U3RyYXRlZ3k6IC0+XG4gICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBkYXRhLi4uPC9wPidcbiAgICAkLmdldCBcIi9kYXRhL2NhcmRTdHJhdGVneUxpbmtlZC8je2xpYnMuemVyb1BhZChAcHJvcHMuY2FyZC5pZCl9Lmh0bWxcIiwgKGRhdGEpPT5cbiAgICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gZGF0YVxuXG4gIHJlbmRlcjogLT5cbiAgICBjYXJkID0gQHByb3BzLmNhcmRcbiAgICBpbWFnZVVybCA9IFwiL2ltYWdlcy9jYXJkcy8je2xpYnMuemVyb1BhZChjYXJkLmlkKX0uanBnXCJcbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIGNsZWFyZml4JywgcmVmOiAnaGVhZGVyJyxcbiAgICAgICAgUi5oMiBjbGFzc05hbWU6IGxpYnMuY2FyZENsYXNzTmFtZShjYXJkKSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtb3BzJywgaWYgY2FyZC5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBjYXJkLm9wc1xuICAgICAgICAgIFwiI3tjYXJkLnRpdGxlfSBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtaWQnLCBcIiMje2NhcmQuaWR9XCJcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkLW5hdicsIFtcbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMucHJldkNhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtcHJldid9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLnByZXZDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICfil4AgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEgpJ1xuICAgICAgICAgICAgICAnIHByZXYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5uZXh0Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1uZXh0J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMubmV4dENhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgJ25leHQgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEwpJ1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAnIOKWtidcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIFIucCB7Y2xhc3NOYW1lOiAncHVsbC1sZWZ0IGNhcmQtYm9keSd9LCBjYXJkLnRleHRcbiAgICAgIFIuaW1nIGtleTogaW1hZ2VVcmwsIHNyYzogaW1hZ2VVcmwsIGNsYXNzTmFtZTogJ2ltZ1JpZ2h0JywgcmVmOidjYXJkSW1nJ1xuICAgICAgUi5kaXYge2NsYXNzTmFtZTogJ2NhcmQtc3RyYXRlZ3knLCBpZDogJ2NhcmQtc3RyYXRlZ3knfSwgW1xuICAgICAgICBSLmgzIHt9LCBbXG4gICAgICAgICAgJ1N0cmF0ZWdpYyBOb3RlcyBmcm9tJ1xuICAgICAgICAgICcgJ1xuICAgICAgICAgIFIuYSBocmVmOmNhcmQudXJsLCAnVHdpbGlnaHRTdHJhdGVneS5jb20nXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgcmVmOidjYXJkU3RyYXRlZ3knLFxuICAgICAgICAgIFIucCB7fSwgJ0xvYWRpbmcgZGF0YSdcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkNhcmRMaXN0ID0gcmVxdWlyZSAnLi4vdmlld3MvQ2FyZExpc3QnXG5cbiMgV2FyZ2FtZXJvb20gY2FyZCBpZHMgZGlmZmVyIGZyb20gVHdpU3RydWcgKFRTIGRlbHV4ZSBlZGl0aW9uKVxuaWRzRnJvbVdHUiA9IChpZHM9W10pLT5cbiAgaWRzLm1hcCAoaWQpLT5cbiAgICBzd2l0Y2ggaWRcbiAgICAgIHdoZW4gMzUgdGhlbiA4MVxuICAgICAgd2hlbiA5OCB0aGVuIDk5XG4gICAgICB3aGVuIDk5IHRoZW4gMTAwXG4gICAgICB3aGVuIDEwMCB0aGVuIDM1XG4gICAgICB3aGVuIDEwMSB0aGVuIDEwMlxuICAgICAgd2hlbiAxMDIgdGhlbiAxMDNcbiAgICAgIHdoZW4gMTA3IHRoZW4gMTEwXG4gICAgICB3aGVuIDEwOSB0aGVuIDk4XG4gICAgICB3aGVuIDExMCB0aGVuIDEwNFxuICAgICAgd2hlbiAxMTEgdGhlbiAxMDlcbiAgICAgIHdoZW4gMTEyIHRoZW4gMTA3XG4gICAgICBlbHNlIGlkXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkc1ZpZXcnXG5cbiAgZGVmYXVsdFN0YXRlOiAocHJvcHMpLT5cbiAgICBmaWx0ZXIgPSBwcm9wcz8uc3RhdGU/LmZpbHRlclxuXG4gICAgZnVsbFRleHQ6IGlmIGZpbHRlciB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGNhcmRJbWc6IGZhbHNlXG4gICAgY2FyZEZpbHRlcklucHV0OiBpZiBmaWx0ZXIgdGhlbiBmaWx0ZXIuam9pbignICcpIGVsc2UgJydcbiAgICBzb3J0OiAnc3RhZ2UnXG4gICAgZmlsdGVyOiBudWxsXG4gICAgdmlldzogJ2ltZydcbiAgICBmaWx0ZXJJc1dHUjogZmFsc2VcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIGNvbnNvbGUubG9nICdjV1JQJywgbmV4dFByb3BzXG4gICAgaWYgbmV4dFByb3BzLnN0YXRlP1xuICAgICAgQHNldFN0YXRlIG5leHRQcm9wcy5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIEBzZXRTdGF0ZSBAZGVmYXVsdFN0YXRlKClcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgXy5tZXJnZSBAZGVmYXVsdFN0YXRlKEBwcm9wcyksIEBwcm9wcy5zdGF0ZVxuXG4gIGdldEZpbHRlcklkczogKCkgLT5cbiAgICBpZiBAc3RhdGU/LmZpbHRlcj9cbiAgICAgIGZpbHRlcklkcyA9IEBzdGF0ZS5maWx0ZXIuc29ydChsaWJzLnNvcnROdW1lcmljYWwpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJUcnV0aHkpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJVbmlxdWUpXG4gICAgaWYgbm90IGZpbHRlcklkcz8gdGhlbiBmaWx0ZXJJZHMgPSBbXVxuICAgIHJldHVybiBmaWx0ZXJJZHNcblxuICAjIEp1c3QgZmlsdGVyaW5nIGJ5IGlkIHJpZ2h0IG5vd1xuICBnZXRGaWx0ZXJlZENhcmRzOiAtPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gQHByb3BzLmNhcmRzLmZpbHRlciAoZWwpID0+XG4gICAgICAgIGlmIGVsLmlkIGluIEBzdGF0ZS5maWx0ZXJcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICBAcHJvcHMuY2FyZHNcblxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG4gIGdyb3VwQ2FyZHM6IChjYXJkcyA9IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKSktPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gW2NhcmRzXVxuXG4gICAgc29ydCA9IEBzdGF0ZS5zb3J0XG4gICAgaWYgc29ydCA9PSAnc2lkZSdcbiAgICAgIHNvcnQgPSAnb3duZXInXG4gICAgaWYgQHN0YXRlLnNvcnRcbiAgICAgIHJldHVybiBfLmdyb3VwQnkoY2FyZHMsIHNvcnQpXG5cblxuICBoYW5kbGVGdWxsVGV4dDogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGZ1bGxUZXh0OiBAcmVmcy5mdWxsVGV4dC5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRJbWc6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkSW1nOiBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBJZiBXR1IgdGhlbiB3ZSBoYXZlIHRvIHRyYW5zbGF0ZSBzb21lIGlkc1xuICAgIGlzV0dSID0gdmFsdWUuc2VhcmNoKC8jLio6LykgIT0gLTFcblxuICAgICMgU3RyaXAgb3V0IHRoZSBLQUwtMDA3IGFuZCBVLTIgaW5jaWRlbnQgY2FyZCB0ZXh0XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlIC9VLTJ8S0FMLTAwNy9naSwgXCJcIlxuXG4gICAgIyBXR1IgYWRkcyBcIk9wcyAzOiAuLi5cIiwgc28gZG9uJ3QgcGljayB0aG9zZSB1cFxuICAgICMgQnV0IHN0aWxsIHBpY2sgdXAgdGhlIHNjb3JpbmcgY2FyZHNcbiAgICBpZHMgPSB2YWx1ZS5tYXRjaCgvXFxkK1teOl18XFxkKyR8I1xcZDovZyk/Lm1hcCAoZWwpLT5cbiAgICAgICMgU3RyaXAgb3V0IGFueSBub24tZGlnaXQgY2hhcnNcbiAgICAgIGVsID0gZWwucmVwbGFjZSAvXFxEL2csICcnXG4gICAgICBwYXJzZUludCBlbCwgMTBcbiAgICBpZiB2YWx1ZSA9PSAnJyBvciBub3QgaWRzP1xuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZpbHRlcjogbnVsbFxuICAgIGVsc2VcbiAgICAgIGlmIGlzV0dSXG4gICAgICAgIGlkcyA9IGlkc0Zyb21XR1IgaWRzXG4gICAgICBpZHMgPSBpZHMuc29ydChsaWJzLnNvcnROdW1lcmljYWwpLmZpbHRlcihsaWJzLmZpbHRlclZhbGlkQ2FyZElkcylcbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmdWxsVGV4dDogdHJ1ZVxuICAgICAgICBmaWx0ZXI6IGlkc1xuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgIyBGb3JtYXQgdGhlIGlucHV0IGZpZWxkIHRvIGJlIGp1c3QgdGhlIGlkcyBvbiBibHVyXG4gIGhhbmRsZUNhcmRGaWx0ZXJCbHVyOiAtPlxuICAgIGZpbHRlcklkcyA9IEBnZXRGaWx0ZXJJZHMoKVxuXG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6IGZpbHRlcklkcy5qb2luICcgJ1xuXG4gICAgaWYgZmlsdGVySWRzPyBhbmQgZmlsdGVySWRzLmxlbmd0aCA+IDBcbiAgICAgIGxpYnMucXMuc2V0ICdmaWx0ZXInLCBmaWx0ZXJJZHNcbiAgICBlbHNlXG4gICAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDbGVhcjogKCktPlxuICAgIEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJydcbiAgICBAc2V0U3RhdGVcbiAgICAgIGZpbHRlcjpudWxsXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6ICcnXG5cbiAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIHNvcnRHcm91cFRpdGxlOiAoc29ydCA9IEBzdGF0ZS5zb3J0LCB2YWwpLT5cbiAgICB2YWxJbnQgPSBwYXJzZUludCB2YWwsIDEwXG4gICAgc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ29wcydcbiAgICAgICAgcyA9IGlmIHZhbEludCA+IDEgdGhlbiAncycgZWxzZSAnJ1xuICAgICAgICBpZiB2YWxJbnQgPT0gMCB0aGVuICdTY29yaW5nJyBlbHNlIFwiI3t2YWx9IE9wI3tzfVwiXG4gICAgICB3aGVuICdzaWRlJ1xuICAgICAgICBpZiB2YWwgPT0gJ3VzJ1xuICAgICAgICAgICdVU0EnXG4gICAgICAgIGVsc2UgaWYgdmFsID09ICduZXV0cmFsJ1xuICAgICAgICAgICdOZXV0cmFsJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgIHdoZW4gJ3N0YWdlJ1xuICAgICAgICBzd2l0Y2ggdmFsSW50XG4gICAgICAgICAgd2hlbiAxIHRoZW4gJ0Vhcmx5IFdhcidcbiAgICAgICAgICB3aGVuIDIgdGhlbiAnTWlkIFdhcidcbiAgICAgICAgICB3aGVuIDMgdGhlbiAnTGF0ZSB3YXInXG5cbiAgaGFuZGxlVmlld0NsaWNrOiAodmlldyktPlxuICAgIEBzZXRTdGF0ZSB7IHZpZXcgfVxuICAgIGxpYnMucXMuc2V0ICd2aWV3Jywgdmlld1xuXG4gIHJlbmRlcjogLT5cbiAgICBjb25zb2xlLmxvZyAncmVuZGVyJywgQHN0YXRlLCBAcHJvcHNcbiAgICBzb3J0TGluayA9IChzb3J0LCBkaXNwbGF5KSA9PlxuICAgICAgY2xhc3NOYW1lID0gY3ggYWN0aXZlOiBAc3RhdGUuc29ydCA9PSBzb3J0XG4gICAgICByZWYgPSBcIiN7c29ydH1Tb3J0XCJcbiAgICAgIG9uQ2xpY2sgPSAoKS0+XG4gICAgICAgIGxpYnMucXMuc2V0ICdzb3J0Jywgc29ydFxuICAgICAgUi5hIHtvbkNsaWNrLCByZWYsIGNsYXNzTmFtZX0sIGRpc3BsYXlcblxuICAgIGNhcmRzID0gQGdyb3VwQ2FyZHMgQGZpbHRlckFuZFNvcnRDYXJkcygpXG5cbiAgICBjYXJkTGlzdHMgPSBfLm1hcCBjYXJkcywgKGNhcmRzLCB2YWwpPT5cbiAgICAgIGNhcmRMaXN0SGVhZGluZyA9IG51bGxcbiAgICAgIGlmIG5vdCBAc3RhdGUuZmlsdGVyP1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmcgPSBSLmgyIGNsYXNzTmFtZTonY2FyZExpc3QtZ3JvdXBIZWFkaW5nJyxcbiAgICAgICAgICBAc29ydEdyb3VwVGl0bGUgQHN0YXRlLnNvcnQsIHZhbFxuICAgICAgUi5kaXYge30sIFtcbiAgICAgICAgY2FyZExpc3RIZWFkaW5nXG4gICAgICAgIENhcmRMaXN0XG4gICAgICAgICAgY2FyZEltZzogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICBmdWxsVGV4dDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICAgICAgdmlldzogQHN0YXRlLnZpZXdcbiAgICAgIF1cblxuICAgIGNhcmRzVmlld0NsYXNzID0gY3hcbiAgICAgICdjYXJkc1ZpZXcnOiB0cnVlXG4gICAgICAnY2FyZHNWaWV3LS1maWx0ZXJlZCc6IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAnY2FyZHNWaWV3LS1mdWxsVGV4dCc6IEBzdGF0ZS5mdWxsVGV4dFxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiBjYXJkc1ZpZXdDbGFzcywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgcm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCAnU29ydCBieTonXG4gICAgICAgICAgICBzb3J0TGluayAnc3RhZ2UnLCAnU3RhZ2UnXG4gICAgICAgICAgICBzb3J0TGluayAnb3BzJywgJ09wcydcbiAgICAgICAgICAgIHNvcnRMaW5rICdzaWRlJywgJ1NpZGUnXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6JycsIGNsYXNzTmFtZTonJ30sICdWaWV3OiAnXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICdpbWcnXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZCBpbWFnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGgtbGFyZ2UgI3tpZiBAc3RhdGUudmlldyA9PSAnaW1nJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RpdGxlJ1xuICAgICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGFuZCBvcHMnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RpdGxlJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RleHQnXG4gICAgICAgICAgICAgIHRpdGxlOiAnRnVsbCB0ZXh0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi1hbGlnbi1sZWZ0ICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RleHQnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI2lkOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonZnVsbFRleHQnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUZ1bGxUZXh0XG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2Z1bGxUZXh0JywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIHRleHQnXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI2lkOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidjYXJkSW1nJ1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVDYXJkSW1nXG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonY2FyZEltZycsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCBpbWFnZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHMtZmlsdGVyLWJ5LWlkIGNvbC1tZC02JywgW1xuICAgICAgICAgIFIubGFiZWwgaHRtbEZvcjonY2FyZEZpbHRlcicsIGNsYXNzTmFtZTonY2FyZEZpbHRlci1sYWJlbCcsIFwiRmlsdGVyIGJ5IGlkcyBcIlxuICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgIG5hbWU6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkRmlsdGVyLWlucHV0J1xuICAgICAgICAgICAgcmVmOiAnY2FyZEZpbHRlcidcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBAaGFuZGxlQ2FyZEZpbHRlckNoYW5nZVxuICAgICAgICAgICAgb25CbHVyOiBAaGFuZGxlQ2FyZEZpbHRlckJsdXJcbiAgICAgICAgICAgIHZhbHVlOiBAc3RhdGUuY2FyZEZpbHRlcklucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3RlIGZyb20gV2FyZ2FtZXJvb20gb3IgZW50ZXIgaWRzJ1xuICAgICAgICAgIFIuYSB7Y2xhc3NOYW1lOidjYXJkcy1maWx0ZXItYnktaWQtY2xlYXInLCBvbkNsaWNrOkBoYW5kbGVDYXJkRmlsdGVyQ2xlYXJ9LCAnY2xlYXInXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIGNhcmRMaXN0c1xuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDb3VudHJpZXNWaWV3ICdcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvdW50cmllc1ZpZXcnLCBbXG4gICAgICBSLmgyIHt9LCAnQ291bnRyaWVzJ1xuICAgIF1cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9TdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeVZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmQnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdHYW1lUGFnZSdcblxuICBzdGF0ZUhpc3Rvcnk6IG51bGxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQHN0YXRlSGlzdG9yeSA9IG5ldyBCb2FyZFN0YXRlSGlzdG9yeSBpZDogQHByb3BzLmdhbWVJZFxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFZpZXcnLCBbXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeVZpZXdcbiAgICAgICAgc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5XG4gICAgICAgIGtleTogXCJCb2FyZFN0YXRlSGlzdG9yeS0je0Bwcm9wcy5nYW1lSWR9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgQm9hcmQgXy5hc3NpZ24gc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5LCBAcHJvcHNcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0hvbWVWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnSG9tZVZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC14cy0xMicsIFtcbiAgICAgICAgICBSLmgxIGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2kgb3duZXItdXNcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1ZyBvd25lci11c3NyXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAgY2xhc3NOYW1lOidsZWFkIGJsdXJiJywgW1xuICAgICAgICAgICAgXCJUd2lTdHJ1ZyBpcyBhIGNvbXBhbmlvbiBhcHBsaWNhdGlvbiBmb3IgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLCBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFwiLiBJdCB3b3VsZCBub3QgZXhpc3Qgd2l0aG91dCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluaycsIGhyZWY6ICcjL2JvYXJkJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpcnR1YWwgQm9hcmQnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1ib2FyZC5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdGdWxseSBwbGF5YWJsZSBib2FyZCAtIGp1c3QgYWRkIGNhcmRzJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rIGhvbWUtbGluay1jYXJkcycsIGhyZWY6ICcjL2NhcmRzJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpZXcgQ2FyZHMnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1jYXJkcy5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdFeHBsb3JlIHRoZSBjYXJkcyBvZiBUd2lsaWdodCBTdHJ1Z2dsZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ1dob29wc1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5oMiB7fSwgXCJERUZDT04gMVwiXG4gICAgICBSLnAgY2xhc3NOYW1lOidsZWFkJywgW1xuICAgICAgICBcIkxvb2tzIGxpa2UgVHdpU3RydWcgdHJpZ2dlcmVkIG51Y2xlYXIgd2FyLiBXSE9PUFNJRSBEQUlTWSFcIlxuICAgICAgICBSLmJyIHt9XG4gICAgICAgIFIuYSBocmVmOlwiIy9jYXJkc1wiLCBcIkhvdyBhYm91dCBsb29raW5nIG92ZXIgdGhlIGNhcmRzP1wiXG4gICAgICBdXG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsInZlbnQgPSByZXF1aXJlICcuL3ZlbnQnXG5tYXBEYXRhdjIgPSByZXF1aXJlICcuLi9hcHAvZGF0YS9tYXAtZGF0YS12Mi5qc29uJ1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuc2V0UGFnZVRpdGxlID0gcmVxdWlyZSAnLi9saWJzL3NldFBhZ2VUaXRsZSdcbnFzID0gcmVxdWlyZSAnLi9saWJzL3FzJ1xuXG5zZXRSb3V0ZU9yaWdpbmFsID0gUm91dGVyOjpzZXRSb3V0ZVxuUm91dGVyOjpzZXRSb3V0ZSA9IC0+XG4gIEBjdXJyZW50Um91dGUgPSBAZ2V0Um91dGUoKVxuICBzZXRSb3V0ZU9yaWdpbmFsLmFwcGx5IHRoaXMsIGFyZ3VtZW50c1xuXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvdXRlcjogbmV3IFJvdXRlclxuXG4gICMgVGFrZXMgYSB2aWV3IG5hbWUgYW5kIGFzc29jaWF0ZWQgZGF0YVxuICBzZXRWaWV3OiAobmFtZSwgdGl0bGUsIG1lbnVBY3RpdmU9JycsIGRhdGE9e30pIC0+XG4gICAgaWYgdGl0bGU/IHRoZW4gc2V0UGFnZVRpdGxlIHRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YSwgdGl0bGV9XG4gICAgICBtZW51QWN0aXZlOiBtZW51QWN0aXZlXG4gICAgICBzbGlkZUluOiBAc3RhdGUudmlldz8ubmFtZSAhPSBuYW1lXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyk9PlxuICAgICAgc3RhdGUgPSBxcy50b09iaiBhcmdzXG4gICAgICAjIENvbnZlcnQgZmlsdGVyIGlkcyBmcm9tIHN0ciAtPiBudW1iZXJcbiAgICAgIGlmIHN0YXRlPy5maWx0ZXI/XG4gICAgICAgIGlmIG5vdCBfLmlzQXJyYXkgc3RhdGUuZmlsdGVyXG4gICAgICAgICAgc3RhdGUuZmlsdGVyID0gW3N0YXRlLmZpbHRlcl1cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBAcHJvcHMucm91dGVyXG5cbiAgICB2ZW50Lm9uICdzZXRSb3V0ZScsIHJvdXRlci5zZXRSb3V0ZS5iaW5kIHJvdXRlclxuXG4gICAgcm91dGVyLmNvbmZpZ3VyZVxuICAgICAgbm90Zm91bmQ6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ3dob29wcycsICdXaG9vcHMnXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgcm91dGVyLm9uICcvJywgQHNldFZpZXcuYmluZCB0aGlzLCAnaG9tZScsICdIb21lJ1xuXG5cbiAgICByb3V0ZXIub24gJy9jYXJkLzppZCcsIChpZCk9PlxuICAgICAgaWQgPSBwYXJzZUludCBpZCwgMTBcbiAgICAgIG5leHRJZCA9IGlmIGlkID09IDExMCB0aGVuIDEgZWxzZSBpZCArIDFcbiAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgIGNhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogaWRcbiAgICAgIG5leHRDYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IG5leHRJZFxuICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgcGFnZVRpdGxlID0gXCIje2NhcmQudGl0bGV9ICgjI3tjYXJkLmlkfSlcIlxuICAgICAgQHNldFZpZXcgJ2NhcmQnLCBwYWdlVGl0bGUsICdjYXJkcycsIHtjYXJkLCBuZXh0Q2FyZCwgcHJldkNhcmR9XG5cblxuICAgIHJvdXRlci5vbiAnL2NvdW50cmllcycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuXG5cbiAgICByb3V0ZXIub24gJy9hYm91dCcsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2Fib3V0JywgJ0Fib3V0JywgJ2Fib3V0J1xuXG5cbiAgICByb3V0ZXIub24gL2NhcmRzXFw/PyguKikvLCAoKT0+XG4gICAgICAjIElmIHdlJ3JlIG9uIGEgc21hbGwgc2NyZWVuLCByZWRpciB0aGUgdXNlciB0byB2aWV3PXRpdGxlXG4gICAgICBwYWdlUVMgPSBxcy50b09iaigpXG4gICAgICBpZiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCBhbmQgbm90IHBhZ2VRUz8udmlldz9cbiAgICAgICAgcXMuc2V0KCd2aWV3JywndGl0bGUnKVxuICAgICAgICByZXR1cm5cblxuICAgICAgc3RhdGVSb3V0ZSAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG5cblxuICAgIHJvdXRlci5vbiAvZ2FtZVxcLz8oXFx3KilcXC8/KC4qKS8sIChnYW1lSWQsIGluY29taW5nU3RhdGUpPT5cblxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkdhbWUgI3tnYW1lSWR9XCIsIFwiIy9nYW1lLyN7Z2FtZUlkfVwiXG5cbiAgICAgIHtjb3VudHJ5U2hvcnRjdXRzLCBjb3VudHJpZXMsIGxpbmtzLCByZWdpb25JbmZvTm9kZXN9ID0gbWFwRGF0YXYyXG5cbiAgICAgICMgQ291bnRyaWVzIGFuZCByZWdpb24gaW5mbyBub2RlcyBjb21iaW5lZFxuICAgICAgbm9kZXMgPSBfLnVuaW9uIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzXG5cbiAgICAgIHByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXNcbiAgICAgICAgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2dhbWUnLCAnR2FtZScsICdnYW1lJywgcHJvcHNcbiAgICAgIGNvbnNvbGUubG9nICdHQU1FIFJPVVRFJ1xuXG5cbiAgICByb3V0ZXIub24gL2JvYXJkXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkJvYXJkICN7Z2FtZUlkfVwiLCBcIiMvYm9hcmQvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlTaG9ydGN1dHMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhdjJcblxuICAgICAgIyBDb3VudHJpZXMgYW5kIHJlZ2lvbiBpbmZvIG5vZGVzIGNvbWJpbmVkXG4gICAgICBub2RlcyA9IF8udW5pb24gY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXNcblxuICAgICAgYm9hcmRQcm9wcyA9IHtcbiAgICAgICAgZ2FtZUlkLCBjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2RlcywgbGlua3MsIG5vZGVzXG4gICAgICAgIGluY29taW5nU3RhdGUsIGNvdW50cnlTaG9ydGN1dHN9XG5cbiAgICAgIEBzZXRWaWV3ICdib2FyZCcsICdCb2FyZCcsICdib2FyZCcsIGJvYXJkUHJvcHNcblxuXG4gICAgcm91dGVyLm9uIC8oYWNjZXNzX3Rva2VuLiopLywgKHFzKT0+XG4gICAgICBjb25zb2xlLmxvZyBxc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG5cbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vbGlicy9NaWNyb0V2ZW50Q2xhc3MnXG5jbGFzcyBWZW50IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG52ZW50ID0gbmV3IFZlbnQoKVxud2luZG93LnZlbnQgPSB2ZW50XG5tb2R1bGUuZXhwb3J0cyA9IHZlbnRcbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG52ZW50ID0gcmVxdWlyZSAnLi4vdmVudCdcblxuc3VwZXJTdGF0cyA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJTdGF0cydcbnJhbmdlZEdhbWVWYWwgPSByZXF1aXJlICcuLi9saWJzL3JhbmdlZEdhbWVWYWwnXG5zaWduZWROdW1PckRhc2ggPSByZXF1aXJlICcuLi9saWJzL3NpZ25lZE51bU9yRGFzaCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4uL2xpYnMvc3RhdGVFbmNvZGVyJ1xudXBwZXJGaXJzdCA9IHJlcXVpcmUgJy4uL2xpYnMvdXBwZXJGaXJzdCdcbm9uZUxldHRlckNvbnRpbmVudENvZGUgPSByZXF1aXJlICcuLi9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUnXG5jb250aW5lbnRDb2RlRnJvbUxldHRlciA9IHJlcXVpcmUgJy4uL2xpYnMvY29udGluZW50Q29kZUZyb21MZXR0ZXInXG5maWx0ZXJUcnV0aHkgPSByZXF1aXJlICcuLi9saWJzL2ZpbHRlclRydXRoeSdcblxuQm9hcmROb2RlID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGUnXG5Cb2FyZE5vZGVEaXYgPSByZXF1aXJlICcuL0JvYXJkTm9kZURpdidcbkJvYXJkU3RhdHVzID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1cydcbkJvYXJkTGluayA9IHJlcXVpcmUgJy4vQm9hcmRMaW5rJ1xuXG5cbnN1cGVycG93ZXJUb0luZGV4ID0gKHN0ciktPiBpZiBzdHIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuXG4jIFJldHVybnMgYSBzaW1wbGUge3VzYTogJ3ByZXNlbmNlJywgdXNzcjogJ2RvbWluYXRpb24nfVxuZ2V0UmVnaW9uU3RhdHVzID0gKHN0YXRzKS0+XG4gIF8ubWFwVmFsdWVzIHN0YXRzLCAoc3RhdCktPlxuICAgIHJldHVybiAnY29udHJvbCcgaWYgc3RhdC5jb250cm9sXG4gICAgcmV0dXJuICdkb21pbmF0aW9uJyBpZiBzdGF0LmRvbWluYXRpb25cbiAgICByZXR1cm4gJ3ByZXNlbmNlJyBpZiBzdGF0LnByZXNlbmNlXG4gICAgcmV0dXJuIGZhbHNlXG5cblxuXG5cbmNvbnRpbmVudFNob3J0Y3V0RGF0YSA9IFtcbiAgeyBjaGFyOiAnQycsIHg6MTI3LCB5OjIwMCB9XG4gIHsgY2hhcjogJ1MnLCB4OjEyNywgeTo1MTAgfVxuICB7IGNoYXI6ICdGJywgeDo1MzMsIHk6NTUwIH1cbiAgeyBjaGFyOiAnRScsIHg6NDgwLCB5OjIyMCB9XG4gIHsgY2hhcjogJ0EnLCB4Ojg0MCwgeToxNTAgfVxuICB7IGNoYXI6ICdNJywgeDo4NDAsIHk6MzgwIH1cbl1cblxuXG4jIFRha2VzIGFuIGlwS2V5U2VxdWVuY2UgYW5kIHJldHVybnMgdGhlIGFwcGxpY2FibGUgY29udGluZW50IGFuZCBjb3VudHJ5XG5jb250Q291bnRyeVNlbGVjdGlvbiA9IChyZWdpb25zLCBjb3VudHJpZXMsIGlwS2V5U2VxID0gJycpLT5cbiAgY29udGluZW50ID0gXy5maW5kIHJlZ2lvbnMsIHtzaG9ydGN1dDogaXBLZXlTZXEuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCl9XG4gIGNvdW50cnkgPSAnJ1xuICBjb3VudHJ5S2V5ID0gaXBLZXlTZXEuc2xpY2UoMiw0KVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAyXG4gICAgY291bnRyeU9iaiA9IF8uZmluZCBjb3VudHJpZXMsIHtzaG9ydGN1dDogY291bnRyeUtleS50b0xvd2VyQ2FzZSgpLCBjb250aW5lbnQ6IGNvbnRpbmVudD8uY29udGluZW50fVxuICAgIGNvdW50cnkgPSBjb3VudHJ5T2JqLnNob3J0bmFtZVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAxXG4gICAgY291bnRyeSA9IFwiI3tjb3VudHJ5S2V5LnRvVXBwZXJDYXNlKCl9Li4uXCJcblxuICB7IGNvbnRpbmVudCwgY291bnRyeSB9XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZCdcblxuICBnZXRJbml0aWFsU3RhdGU6IChwcm9wcyA9IEBwcm9wcykgLT5cbiAgICBzdGF0ZUhpc3RvcnkgPSBwcm9wcy5zdGF0ZUhpc3RvcnlcbiAgICBzdGF0ZUhpc3RvcnkubG9hZCgpXG4gICAgc3RhdGUgPSBAaGFuZGxlSW5jb21pbmdTdGF0ZSBwcm9wcy5pbmNvbWluZ1N0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgc3RhdGUgPSBzdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpPy5zdGF0ZVxuICAgIGlmIG5vdCBzdGF0ZT9cbiAgICAgIGdhbWVTdGF0ZSA9XG4gICAgICAgIGdhbWU6XG4gICAgICAgICAgc2NvcmU6IDBcbiAgICAgICAgICB0dXJuOiAwXG4gICAgICAgICAgcm91bmQ6IDBcbiAgICAgICAgICBkZWZjb246IDVcbiAgICAgICAgICBtaWxvcHM6IFswLDBdXG4gICAgICAgICAgc3BhY2U6IFswLDBdXG4gICAgICAgIGlwczogXy5tYXAgcHJvcHMuY291bnRyaWVzLCAoYyktPiBbYy51c2EsIGMudXNzcl1cblxuICAgICAgbWV0YSA9XG4gICAgICAgIHR5cGU6ICd0dXJuJ1xuICAgICAgICBpZDogJ3R1cm4nXG4gICAgICAgIG5ld0dhbWU6IHRydWVcbiAgICAgICAgbmV3OiAwXG4gICAgICAgIG9sZDowXG5cbiAgICAgIHN0YXRlSGlzdG9yeS5hZGQgZ2FtZVN0YXRlLCBtZXRhXG4gICAgICBzdGF0ZSA9IGdhbWVTdGF0ZVxuXG4gICAgXy5hc3NpZ24gc3RhdGUsXG4gICAgICBpcFNob3dDb3VudHJpZXM6IFtdXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBJUENoYW5nZTogW11cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAoblApLT5cbiAgICBzdGF0ZSA9IEBnZXRJbml0aWFsU3RhdGUgblBcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAge3N0YXRlSGlzdG9yeSwgZ2FtZUlkfSA9IEBwcm9wc1xuXG4gICAgIyBXaGVuIHN0YXRlIGNoYW5nZXMsIGVtaXQgZXZlbnQgZm9yIHRoZSByb3V0ZXIgdG8gcGljayB1cFxuICAgIHN0YXRlSGlzdG9yeS5vbiAnY2hhbmdlJywgPT5cbiAgICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlPyBhbmQgbm90IHN0YXRlLm1ldGEubmV3R2FtZVxuICAgICAgICBzdGF0ZUVuYyA9IHN0YXRlSGlzdG9yeS5lbmNvZGVDdXJyZW50KClcbiAgICAgICAgdmVudC5lbWl0ICdib2FyZFN0YXRlQ2hhbmdlJywgZ2FtZUlkLCBzdGF0ZUVuY1xuXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdnb1RvJywgKHN0YXRlKT0+XG4gICAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcblxuICAgIEBrcEhUID0gXy50aHJvdHRsZSBAa2V5cHJlc3NIYW5kbGVyLCAxMDBcbiAgICBAa3VIVCA9IF8udGhyb3R0bGUgQGtleXVwSGFuZGxlciwgMTAwXG4gICAgQGtkSFQgPSBfLnRocm90dGxlIEBrZXlkb3duSGFuZGxlciwgMTAwXG5cbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleWRvd24nLCBAa2RIVFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5dXAnLCBAa3VIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5ZG93bicsIEBrZEhUXG5cbiAgaGFuZGxlSW5jb21pbmdTdGF0ZTogKHN0YXRlRW5jb2RlZCA9IEBwcm9wcy5pbmNvbWluZ1N0YXRlKSAtPlxuICAgIGluZGV4ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5maW5kU3RhdGVJbmRleCBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgaWYgaW5kZXg/XG4gICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaW5kZXhcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhdGVcbiAgICBlbHNlXG4gICAgICBjdXJyZW50ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlRW5jb2RlZD8gYW5kIHN0YXRlRW5jb2RlZCAhPSAnJyBhbmQgY3VycmVudD8ubWV0YS5zdGF0ZSAhPSBzdGF0ZUVuY29kZWRcbiAgICAgICAgc3RhdGUgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlRW5jb2RlZFxuICAgICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSxcbiAgICAgICAgICB0eXBlOiAnbG9hZCdcbiAgICAgICAgICBpZDogJ2xvYWQnXG4gICAgICAgICAgc3RhdGU6IHN0YXRlRW5jb2RlZFxuICAgICAgICByZXR1cm4gc3RhdGVcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBrZXlwcmVzc0hhbmRsZXI6IChldiktPlxuICAgIGtDID0gZXYua2V5Q29kZVxuICAgIGRpciA9IGlmIGtDID49IDk3IHRoZW4gJ2luYycgZWxzZSAnZGVjJ1xuXG4gICAgaWYgQHN0YXRlLmlwS2V5U2VxdWVuY2UubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlKGtDKVxuXG4gICAgaWYga0MgPT0gMTA1IG9yIGtDID09IDczXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uga0NcbiAgICAgIHJldHVyblxuXG4gICAgc3dpdGNoIGtDXG4gICAgICAjIChjL0MpIERpY2VcbiAgICAgIHdoZW4gOTksIDY3XG4gICAgICAgIEByZWZzLkJvYXJkU3RhdHVzLnJvbGxEaWNlKClcblxuICAgICAgIyBIaXN0b3J5XG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHovWikgVW5kb1xuICAgICAgd2hlbiAxMjIsIDkwXG4gICAgICAgIEB1bmRvSGlzdCgpXG4gICAgICAjICh5L1kpIFJlZG9cbiAgICAgIHdoZW4gMTIxLCA4OVxuICAgICAgICBAcmVkb0hpc3QoKVxuICAgICAgIyAoaC9IKSBIaXN0b3J5IHNob3cvaGlkZVxuICAgICAgd2hlbiAxMDQsIDcyXG4gICAgICAgIEB0b2dnbGVIaXN0KClcblxuICAgICAgIyBHYW1lIHByb3BlcnRpZXNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHQvVCkgVHVybiBpbmMvZGVjXG4gICAgICB3aGVuIDExNiwgODRcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICd0dXJuJywgZGlyXG4gICAgICAjIChyL1IpIFJvdW5kIGluYy9kZWNcbiAgICAgIHdoZW4gMTE0LCA4MlxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3JvdW5kJywgZGlyXG4gICAgICAjIChTL3MpIFNjb3JlIGluYy9kZWNcbiAgICAgIHdoZW4gMTE1LCA4M1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3Njb3JlJywgZGlyXG4gICAgICAjIChEL2QpIERlZmNvbiBpbmMvZGVjXG4gICAgICB3aGVuIDEwMCwgNjhcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdkZWZjb24nLCBkaXJcbiAgICAgICMgKE0vbSkgVVNBIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDEwOSwgNzdcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c2EnXG4gICAgICAjIChPL28pIFVTU1IgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTExLCA3OVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3Vzc3InXG4gICAgICAjIChQL3ApIFVTQSBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDExMiwgODBcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3VzYSdcbiAgICAgICMgKEEvYSkgVVNTUiBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDk3LCA2NVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNzcidcblxuICAgIHJldHVybiB0cnVlXG5cblxuICAjIEVzYyBkb2Vzbid0IHRyaWdnZXIgb24ga2V5cHJlc3MsIHNvIGl0IGhhcyB0byBiZSBrZXl1cFxuICBrZXl1cEhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZShmYWxzZSlcbiAgICBpZiBldi5rZXlDb2RlID09IDI3IG9yICgzNyA8PSBldi5rZXlDb2RlIDw9IDQwKVxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlIGV2LmtleUNvZGUsIGV2XG4gICAgI2lmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgICNAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgICNyZXR1cm5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAga2V5ZG93bkhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gOCBvciBldi5rZXlDb2RlID09IDEzXG4gICAgICBAaXBLZXlTZXF1ZW5jZShldi5rZXlDb2RlKVxuICAgICAgIyBQcmV2ZW50IGJhY2tzcGFjZSBmcm9tIG5hdmlnYXRpbmcgdGhlIHBhZ2VcbiAgICAgICMgT3JpZGluYXJpbHkgSSBkb24ndCBsaWtlIHRha2luZyBvdmVyIGJyb3dzZXIgc2hvcnRjdXRzLCBidXQgaW4gdGhpcyBjYXNlXG4gICAgICAjIHdlIHdhbnQgdG8gcHJldmVudCB1c2VycyBmcm9tIG92ZXItYmFja3NwYWNpbmdcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gIGNsZWFySXBDaGFuZ2U6IChyZXNldElQcyA9IHRydWUpLT5cbiAgICAjIFVuZG8gYW55IGlwIGNoYW5nZXNcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlXG4gICAgaXBTaG93Q291bnRyaWVzID0gQHN0YXRlLmlwU2hvd0NvdW50cmllc1xuICAgIGlmIGlwQ2hhbmdlLm1hcChmaWx0ZXJUcnV0aHkpLmxlbmd0aCA+IDAgYW5kIGlwU2hvd0NvdW50cmllcy5sZW5ndGggPT0gMVxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCB7c2hvcnRjdXQ6IGlwU2hvd0NvdW50cmllc1swXX1cbiAgICAgIHJldHVybiBpZiBub3QgY291bnRyeT9cbiAgICAgIEBzZXRTdGF0ZSBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgaWYgcmVzZXRJUHNcbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgJ3VzYScsIG51bGwsIC1pcENoYW5nZVswXVxuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCAndXNzcicsIG51bGwsIC1pcENoYW5nZVsxXVxuXG5cbiAgY2xlYXJJcEtleVNlcXVlbmNlOiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgaXBLZXlTZXF1ZW5jZTogJydcbiAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG5cbiAgaXBLZXlTZXF1ZW5jZTogKGNvZGUsIGV2KS0+XG4gICAgI2lmIGNvZGUgPT0gMjdcbiAgICAgICNAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgICNldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAjcmV0dXJuIGZhbHNlXG4gICAgaXBLUyA9IEBzdGF0ZS5pcEtleVNlcXVlbmNlXG4gICAgaXBDaGFuZ2UgPSBAc3RhdGUuaXBJUENoYW5nZVxuICAgIGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG5cbiAgICAjIEJhY2tzcGFjZSAoOCkgc2hvdWxkIGRlbGV0ZSB0aGUgbGFzdCBjaGFyIGZyb20gdGhlIGlwS1MsIGFuZCBzZXQgdGhlIFwiY3VycmVudFwiXG4gICAgIyBjaGFyIHRvIHRoZSBsYXN0IGNoYXJcbiAgICAjIEVudGVyICgxMykgc2hvdWxkXG5cbiAgICBpZiBjb2RlID09IDI3IG9yIGNvZGUgPT0gMTNcbiAgICAgICMgRG9uJ3QgZG8gYW55dGhpbmcgaWYgd2UgZG9uJ3QgaGF2ZSBhbiBpcEtTXG4gICAgICBpZiBub3QgaXBLU1xuICAgICAgICByZXR1cm5cbiAgICAgIGlwc0NoYW5nZWQgPSBpcEtTLmxlbmd0aCA9PSA0IGFuZCBpcENoYW5nZS5maWx0ZXIoZmlsdGVyVHJ1dGh5KS5sZW5ndGggPiAwXG4gICAgICBpZiBjb2RlID09IDI3IGFuZCBpcHNDaGFuZ2VkXG4gICAgICAgIEBjbGVhcklwQ2hhbmdlKClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgY29kZSA9PSAxM1xuICAgICAgICAgIEBjbGVhcklwQ2hhbmdlKGZhbHNlKVxuICAgICAgICBkZWx0YSA9IC0xXG4gICAgICAgICMgQmFjayB1cCB0d28gc3BhY2VzIHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gICAgICAgIGlmIGlwS1MubGVuZ3RoID09IDRcbiAgICAgICAgICBkZWx0YSA9IC0yXG4gICAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsZGVsdGEpXG4gICAgICAgIGNoYXIgPSBpcEtTLnNsaWNlKC0xKVxuICAgICAgICBpcEtTID0gaXBLUy5zbGljZSgwLC0xKVxuXG4gICAgY2hhckxvd2VyID0gY2hhci50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiBub3QgaXBLUyBhbmQgbm90IGNoYXJcbiAgICAgIEBjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgcmV0dXJuXG5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUgZmFsc2VcbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAwIGFuZCBjaGFyTG93ZXIgPT0gJ2knXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgaXBLZXlTZXF1ZW5jZTogJ2knXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG5cbiAgICAjIENvbnRpbmVudCBzZWxlY3Rpb25cbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAxIGFuZCBjaGFyTG93ZXIgaW4gWydjJywncycsJ2UnLCdmJywnYScsJ20nXVxuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY2hhckxvd2VyXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6IGNoYXJMb3dlclxuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG5cbiAgICBjb250aW5lbnQgPSBpcEtTLmNoYXJBdCAxXG5cbiAgICAjIENvdW50cnkgc2VsZWN0aW9uXG4gICAgIyBpcEtTIHNob3VsZCBiZSAnaVtjb250aW5lbnRdJyBvciAnaVtjb250aW5lbnRdW2NvdW50cnlDaGFyXSdcbiAgICBpZiBmYWxzZSBhbmQgMiA8PSBpcEtTLmxlbmd0aCA8PSAzXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsIDQpXG5cbiAgICAgIGNvdW50cmllcyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMClcblxuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICAgIHNjLmNoYXJBdCgxKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyaWVzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cmllc1xuICAgICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG5cbiAgICAjIFNlZSBpZiB3ZSBoYXZlIGEgY291bnRyeSBcInNlbGVjdGVkXCIgZm9yIGlwIHBsYWNlbWVudFxuICAgIGlmIDIgPD0gaXBLUy5sZW5ndGggPD0gM1xuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLDQpXG5cbiAgICAgIGNvdW50cnlTaG9ydGN1dHMgPSBAcHJvcHMuY291bnRyeVNob3J0Y3V0c1tjb250aW5lbnRdLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICBzYy5jaGFyQXQoMCkgPT0gY291bnRyeUNvZGUuY2hhckF0KDApXG5cbiAgICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAxXG4gICAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcyxcbiAgICAgICAgICBzaG9ydGN1dFVuaXF1ZTogY291bnRyeUNvZGVcbiAgICAgICAgICBjb250aW5lbnQ6IGNvbnRpbmVudENvZGVGcm9tTGV0dGVyIGNvbnRpbmVudFxuICAgICAgICAjIElmIHdlIGhhdmUgYSBjb3VudHJ5LCBhZGQgdGhlIGZ1bGwgY291bnRyeSBjb2RlIHRvIGlwS1NcbiAgICAgICAgaWYgY291bnRyeT9cbiAgICAgICAgICBpcEtTICs9IGNvdW50cnkuc2hvcnRjdXQuY2hhckF0IDFcbiAgICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAyXG4gICAgICAgIGNvdW50cnlTaG9ydGN1dHMgPSBjb3VudHJ5U2hvcnRjdXRzLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICAgIHNjLmNoYXJBdCgxKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyeVNob3J0Y3V0cy5sZW5ndGggIT0gMFxuICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgICAgaXBTaG93Q291bnRyaWVzOiBjb3VudHJ5U2hvcnRjdXRzXG4gICAgICAgICAgaXBJUENoYW5nZTogWzAsMF1cbiAgICAgICAgcmV0dXJuXG5cblxuICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLDQpXG4gICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcyxcbiAgICAgICAgc2hvcnRjdXQ6IGNvdW50cnlDb2RlXG4gICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlIHx8IFswLDBdXG4gICAgICBjb3VudHJ5SVBzID0gQHN0YXRlLmlwc1twYXJzZUludChjb3VudHJ5LmlkLDEwKV1cbiAgICAgIGlmIG5vdCBjb3VudHJ5P1xuICAgICAgICByZXR1cm5cblxuICAgICAgc3dpdGNoIGNoYXJcbiAgICAgICAgd2hlbiAnYSdcbiAgICAgICAgICBzaWRlID0gJ3VzYSdcbiAgICAgICAgICBkaXIgPSAndXAnXG4gICAgICAgICAgaXBDaGFuZ2VbMF0rK1xuICAgICAgICB3aGVuICdBJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgICBpZiBjb3VudHJ5SVBzWzBdID4gMFxuICAgICAgICAgICAgaXBDaGFuZ2VbMF0tLVxuICAgICAgICB3aGVuICdyJ1xuICAgICAgICAgIHNpZGUgPSAndXNzcidcbiAgICAgICAgICBkaXIgPSAndXAnXG4gICAgICAgICAgaXBDaGFuZ2VbMV0rK1xuICAgICAgICB3aGVuICdSJ1xuICAgICAgICAgIHNpZGUgPSAndXNzcidcbiAgICAgICAgICBkaXIgPSAnZG4nXG4gICAgICAgICAgaWYgY291bnRyeUlQc1sxXSA+IDBcbiAgICAgICAgICAgIGlwQ2hhbmdlWzFdLS1cblxuICAgICAgaWYgc2lkZT8gYW5kIGRpcj9cbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgc2lkZSwgZGlyXG5cbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcFNob3dDb3VudHJpZXM6IFtjb3VudHJ5Q29kZV1cbiAgICAgICAgaXBJUENoYW5nZTogaXBDaGFuZ2VcblxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgaGFuZGxlVmFsQ2xpY2s6IChpZCwgZGlyLCBzaWRlKS0+XG4gICAgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ2luYycgdGhlbiAxIGVsc2UgLTFcbiAgICBpZiBpZCBpbiBbJ21pbG9wcycsICdzcGFjZSddXG4gICAgICBpbmRleCA9IGlmIHNpZGUgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1baW5kZXhdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gKyBkZWx0YSlcbiAgICAgIHN0YXRlLmdhbWVbaWRdW2luZGV4XSA9IG5ld1ZhbFxuICAgIGVsc2VcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF0gPSBuZXdWYWxcblxuICAgIG1ldGEgPVxuICAgICAgdHlwZTogJ3ZhbCdcbiAgICAgIHNpZGU6IGlmIHNpZGU/IHRoZW4gc2lkZSBlbHNlICcnXG4gICAgICBpZDogaWRcbiAgICAgIG9sZDogb2xkVmFsXG4gICAgICBuZXc6IG5ld1ZhbFxuXG4gICAgaWYgaWQgPT0gJ3R1cm4nIG9yIGlkID09ICdyb3VuZCdcbiAgICAgIG1ldGEudHlwZSA9IGlkXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLCBtZXRhXG5cblxuICBoYW5kbGVJUENsaWNrOiAobm9kZUlkLCBzaWRlLCBkaXIsIGRlbHRhKS0+XG4gICAgcmV0dXJuIGlmIGRlbHRhPyBhbmQgZGVsdGEgPT0gMFxuXG4gICAgbm9kZSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCB7aWQ6IG5vZGVJZH1cbiAgICAjIERvbid0IGxldCB0aGUgbm9uLWNvdW50cnkgbm9kZXMgZ2V0IHVwZGF0ZWRcbiAgICBpZiBub2RlLnBvaW50cyBvciBub2RlLnN1cGVycG93ZXIgdGhlbiByZXR1cm5cblxuICAgIHN0YXRlID0gQHN0YXRlXG5cbiAgICBpZiBkZWx0YT9cbiAgICAgIGRpciA9IGlmIGRlbHRhID49IDAgdGhlbiAndXAnIGVsc2UgJ2RuJ1xuICAgIGVsc2VcbiAgICAgIGRlbHRhID0gaWYgZGlyID09ICd1cCcgdGhlbiAxIGVsc2UgLTFcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgaXAgKz0gZGVsdGFcbiAgICBpZiBpcCA8IDAgdGhlbiByZXR1cm5cblxuICAgIHNpZ24gPSBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuICAgIHN0YXRlLmlwc1tub2RlSWRdW2luZGV4XSA9IGlwXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLFxuICAgICAgdHlwZTogJ2lwJ1xuICAgICAgc2lkZTogc2lkZVxuICAgICAgY291bnRyeTogbm9kZVxuICAgICAgaXBzOiBzdGF0ZS5pcHNbbm9kZUlkXVxuICAgICAgZGVsdGE6ZGVsdGFcblxuICBoYW5kbGVIaXN0b3J5Q2xpY2s6ICh0eXBlKS0+XG4gICAgQFtcIiN7dHlwZX1IaXN0XCJdKClcblxuICB1bmRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkudW5kbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHJlZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5yZWRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgdG9nZ2xlSGlzdDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIG5vZGVQcm9wcyA9IEBwcm9wcy5ub2RlXG5cbiAgICBzdXBlcnBvd2VyU3RhdHMgPSBzdXBlclN0YXRzIEBzdGF0ZS5pcHMsIEBwcm9wcy5jb3VudHJpZXMsIEBwcm9wcy5yZWdpb25JbmZvTm9kZXNcblxuICAgIGlwS2V5U2VxdWVuY2UgPSBAc3RhdGU/LmlwS2V5U2VxdWVuY2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGU/LmlwU2hvd0NvdW50cmllcyB8fCBbXVxuICAgIGlwU2hvd0NvbnRpbmVudCA9IEBzdGF0ZT8uaXBTaG93Q29udGluZW50XG5cbiAgICBsaW5rcyA9IEBwcm9wcy5saW5rcy5tYXAgKGxpbmtEYXRhKT0+XG4gICAgICBzb3VyY2UgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnNvdXJjZVxuICAgICAgdGFyZ2V0ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS50YXJnZXRcbiAgICAgIG5vZGVzID0ge3NvdXJjZSwgdGFyZ2V0fVxuXG4gICAgICBqVVNBID0gKGxpbmssIHRhcmcpPT5cbiAgICAgICAgamFwYW5VU0FCdW1wID0gMThcbiAgICAgICAgaWYgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnVVNBJykgYW5kIF8uY29udGFpbnMobGluay5ub2RlcywgJ0phcGFuJylcbiAgICAgICAgICByZXR1cm4gbm9kZXNbdGFyZ10ueSAtIGphcGFuVVNBQnVtcFxuICAgICAgICBub2Rlc1t0YXJnXS55XG5cbiAgICAgIGxpbmtQcm9wcyA9XG4gICAgICAgIGtleTogXCJCb2FyZExpbmstI3tsaW5rRGF0YS5zb3VyY2V9LSN7bGlua0RhdGEudGFyZ2V0fVwiXG4gICAgICAgIHgxOiBzb3VyY2UueFxuICAgICAgICB5MTogalVTQShsaW5rRGF0YSwgJ3NvdXJjZScpXG4gICAgICAgIHgyOiB0YXJnZXQueFxuICAgICAgICB5MjogalVTQShsaW5rRGF0YSwgJ3RhcmdldCcpXG4gICAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgICBcImxpbmtcIjogdHJ1ZVxuICAgICAgICAgIFwibGluay1jcm9zc1wiOiBsaW5rRGF0YS5jcm9zc0NvbnRpbmVudFxuICAgICAgICAgIFwibGluay11c2FcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTQSdcbiAgICAgICAgICBcImxpbmstdXNzclwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNTUidcblxuICAgICAgQm9hcmRMaW5rIGxpbmtQcm9wc1xuXG4gICAgbm9kZXMgPSBfLm1hcCBAcHJvcHMubm9kZXMsIChjb3VudHJ5RGF0YSk9PlxuICAgICAgIyBEZXRlcm1pbmUgaWYgY291bnRyeSBzaG91bGQgYmUgb24gdG9wIG9mIHRoZSBpcFBsYWNlbWVudCBtYXNrXG4gICAgICBvblRvcCA9IG5vdCBpcEtleVNlcXVlbmNlIG9yXG4gICAgICAgIGNvdW50cnlEYXRhLnNob3J0Y3V0IGluIGlwU2hvd0NvdW50cmllcyBhbmRcbiAgICAgICAgb25lTGV0dGVyQ29udGluZW50Q29kZShjb3VudHJ5RGF0YS5jb250aW5lbnQpID09IGlwU2hvd0NvbnRpbmVudCBhbmRcbiAgICAgICAgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNFxuICAgICAgaXBTZWxlY3RlZCA9IG9uVG9wIGFuZCBpcFNob3dDb3VudHJpZXMubGVuZ3RoID09IDFcbiAgICAgIHByb3BzID1cbiAgICAgICAgbm9kZTogbm9kZVByb3BzXG4gICAgICAgIGtleTogXCJCb2FyZE5vZGUtI3tjb3VudHJ5RGF0YS5pZH1cIlxuICAgICAgICB4OiBjb3VudHJ5RGF0YS54XG4gICAgICAgIHk6IGNvdW50cnlEYXRhLnlcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0XG4gICAgICAgIGd1dHRlcjogQHByb3BzLm5vZGUuZ3V0dGVyXG4gICAgICAgIHRpdGxlSGVpZ2h0OiBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB0aXRsZUZvbnRTaXplOiBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG4gICAgICAgIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrXG4gICAgICAgICMgRGV0ZXJtaW5lIGlmIHRoZSBjb3VudHJ5IHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIGlwIHNob3J0Y3V0IGxheWVyXG4gICAgICAgIG9uVG9wOiBvblRvcFxuICAgICAgICBpcFNlbGVjdGVkOiBpcFNlbGVjdGVkXG5cblxuICAgICAgXy5hc3NpZ24gcHJvcHMsIGNvdW50cnlEYXRhXG5cbiAgICAgIGlmKHByb3BzLnN1cGVycG93ZXIpXG4gICAgICAgIHByb3BzLnN0YXRzID1cbiAgICAgICAgICBjb3VudHJpZXM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMuY291bnRyaWVzW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsnYnRsJywgJ25vbicsICd0b3RhbCddXG4gICAgICAgICAgcmVnaW9uczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5yZWdpb25zW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsncHJlc2VuY2UnLCAnZG9taW5hdGlvbicsICdjb250cm9sJ11cblxuICAgICAgaWYocHJvcHMucG9pbnRzKVxuICAgICAgICBwcm9wcy5zdGF0cyA9IGdldFJlZ2lvblN0YXR1c1xuICAgICAgICAgIHVzYTogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNhW3Byb3BzLmlkXVxuICAgICAgICAgIHVzc3I6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzc3JbcHJvcHMuaWRdXG5cbiAgICAgIGNvdW50cnlJZCA9IHBhcnNlSW50IGNvdW50cnlEYXRhLmlkLCAxMFxuICAgICAgaWYgY291bnRyeUlkIG9mIEBzdGF0ZS5pcHNcbiAgICAgICAgcHJvcHMudXNhID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzBdXG4gICAgICAgIHByb3BzLnVzc3IgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMV1cblxuICAgICAgQm9hcmROb2RlRGl2IHByb3BzXG5cbiAgICBib2FyZFN0YXR1c0F0dHJzID1cbiAgICAgIHJlZjonQm9hcmRTdGF0dXMnXG4gICAgICBoYW5kbGVWYWxDbGljazogQGhhbmRsZVZhbENsaWNrXG4gICAgICBoYW5kbGVIaXN0b3J5Q2xpY2s6IEBoYW5kbGVIaXN0b3J5Q2xpY2tcblxuXG5cbiAgICBjb250aW5lbnRTaG9ydGN1dHMgPSBjb250aW5lbnRTaG9ydGN1dERhdGEubWFwIChvKT0+XG4gICAgICBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA9PSAxXG4gICAgICAgIHNob3cgPSAnaW4nXG4gICAgICBhdHRycyA9XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dENvbnRpbmVudCBCb2FyZC1zaG9ydGN1dCAje3Nob3d9XCJcbiAgICAgICAgc3R5bGU6XG4gICAgICAgICAgbGVmdDogby54XG4gICAgICAgICAgdG9wOiBvLnlcbiAgICAgIFIuZGl2IGF0dHJzLCBvLmNoYXJcblxuICAgIG5vZGVzQnlDb250aW5lbnQgPSBfLmdyb3VwQnkgQHByb3BzLmNvdW50cmllcywgJ2NvbnRpbmVudCdcblxuICAgIGNvdW50cnlTaG9ydGN1dHMgPSBfLm1hcCBub2Rlc0J5Q29udGluZW50LCAobm9kZXMsIGNvbnRpbmVudCk9PlxuICAgICAgY29udEtleSA9IG9uZUxldHRlckNvbnRpbmVudENvZGUgY29udGluZW50XG4gICAgICBub2RlQ29tcG9uZW50cyA9IF8ubWFwIG5vZGVzLCAobm9kZSk9PlxuICAgICAgICBpZiBub2RlLnN1cGVycG93ZXI/IG9yIG5vZGUucG9pbnRzP1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIHNob3cgPSAnJ1xuICAgICAgICBpcEtTTCA9IGlwS2V5U2VxdWVuY2UubGVuZ3RoXG4gICAgICAgIGlmIGlwS1NMIDwgNCBhbmQgXy5jb250YWlucyhAc3RhdGUuaXBTaG93Q291bnRyaWVzLCBub2RlLnNob3J0Y3V0KSBhbmQgQHN0YXRlLmlwU2hvd0NvbnRpbmVudCA9PSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvbnRpbmVudClcbiAgICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgICBhdHRycyA9XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0IEJvYXJkLXNob3J0Y3V0Q291bnRyeSAje3Nob3d9XCJcbiAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgIGxlZnQ6IG5vZGUueFxuICAgICAgICAgICAgdG9wOiBub2RlLnlcbiAgICAgICAgUi5kaXYgYXR0cnMsIHVwcGVyRmlyc3Qobm9kZS5zaG9ydGN1dFVuaXF1ZSlcblxuICAgICAgbm9kZUNvbXBvbmVudHNcblxuICAgIGNvbnRDb3VudHJ5ID0gY29udENvdW50cnlTZWxlY3Rpb24gQHByb3BzLnJlZ2lvbkluZm9Ob2RlcywgQHByb3BzLmNvdW50cmllcywgaXBLZXlTZXF1ZW5jZVxuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICBpcENoYW5nZVVTQSA9IGlmIGlwS2V5U2VxdWVuY2UubGVuZ3RoID49IDQgdGhlbiBSLnNwYW4gY2xhc3NOYW1lOiAnQm9hcmQtaXBIZWFkZXItdXNhJywgc2lnbmVkTnVtT3JEYXNoKGlwQ2hhbmdlWzBdKSBlbHNlIG51bGxcbiAgICBpcENoYW5nZVVTU1IgPSBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0IHRoZW4gUi5zcGFuIGNsYXNzTmFtZTogJ0JvYXJkLWlwSGVhZGVyLXVzc3InLCBzaWduZWROdW1PckRhc2goaXBDaGFuZ2VbMV0pIGVsc2UgbnVsbFxuICAgIGlwQ291bnRyeSA9IGNvbnRDb3VudHJ5LmNvdW50cnkgfHwgaWYgY29udENvdW50cnkuY29udGluZW50IHRoZW4gJ1NlbGVjdCBhIGNvdW50cnknXG4gICAgaXBDb250Q291bnRyeSA9IFtcbiAgICAgIGlwQ2hhbmdlVVNBXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRDb3VudFwiLCBbXG4gICAgICAgIFIuaDMgY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRpbmVudCAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgY29udENvdW50cnkuY29udGluZW50Py5zaG9ydG5hbWUgb3IgJ1NlbGVjdCBhIGNvbnRpbmVudCdcbiAgICAgICAgUi5oMyBjbGFzc05hbWU6IFwiQm9hcmQtaXBIZWFkZXItQ291bnRyeSAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgaXBDb3VudHJ5XG4gICAgICBdXG4gICAgICBpcENoYW5nZVVTU1JcbiAgICBdXG5cblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkJywgW1xuICAgICAgUi5zdmcgd2lkdGg6QHByb3BzLndpZHRoLCBoZWlnaHQ6QHByb3BzLmhlaWdodCwgcmVmOiAnc3ZnJywgW1xuICAgICAgICBsaW5rc1xuICAgICAgXVxuICAgICAgbm9kZXNcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dEhlYWRlciAje2lmIGlwS2V5U2VxdWVuY2UgdGhlbiAnaW4nIGVsc2UgJyd9XCIsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29weScsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIlBsYWNpbmcgSW5mbHVlbmNlXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCBbXG4gICAgICAgICAgICBSLmEgb25DbGljazogQGNsZWFySXBLZXlTZXF1ZW5jZSwgW1xuICAgICAgICAgICAgICBcIkNhbmNlbCAoXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgXCJlc2NcIlxuICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5hIGNsYXNzTmFtZTogKGlmIGlwQ2hhbmdlWzBdID09IDAgYW5kIGlwQ2hhbmdlWzFdID09IDAgdGhlbiAnZGlzYWJsZWQnKSwgb25DbGljazogQGlwS2V5U2VxdWVuY2UuYmluZChudWxsLCAxMyksIFtcbiAgICAgICAgICAgICAgXCJDb25maXJtIChcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCBcImVudGVyXCJcbiAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOidjaGFycycsIGlwQ29udENvdW50cnlcbiAgICAgIF1cbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dE1hc2sgI3tpZiBpcEtleVNlcXVlbmNlIHRoZW4gJ2luJyBlbHNlICcnfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnRzICN7aWYgaXBLZXlTZXF1ZW5jZSBhbmQgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPD0gMSB0aGVuICdpbicgZWxzZSAnJ31cIixcbiAgICAgICAgY29udGluZW50U2hvcnRjdXRzXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzXG4gICAgICBCb2FyZFN0YXR1cyBfLmFzc2lnbiBib2FyZFN0YXR1c0F0dHJzLCBAc3RhdGUuZ2FtZVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZExpbmsnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogLT5cbiAgICBmYWxzZVxuICByZW5kZXI6IC0+XG4gICAgUi5saW5lIEBwcm9wc1xuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5cblxuQm9hcmROb2RlSVAgPSByZXF1aXJlICcuL0JvYXJkTm9kZUlQJ1xuIFxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIEFzc3VtZSBjb3VudHJ5XG4gICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMudXNhICE9IEBwcm9wcy51c2Egb3IgbmV4dFByb3BzLnVzc3IgIT0gQHByb3BzLnVzc3JcbiAgICAjIENvbnRpbmVudCBsYWJlbHNcbiAgICBpZiBAcHJvcHMucG9pbnRzP1xuICAgICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMuc3RhdHMudXNhICE9IEBwcm9wcy5zdGF0cy51c2Egb3JcbiAgICAgICAgbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIFN1cGVycG93ZXIgbGFiZWxzXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIG5QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgdFBTID0gQHByb3BzLnN0YXRzXG4gICAgICBzaG91bGRJdCA9IG5QUy5jb3VudHJpZXMuYnRsICE9IHRQUy5jb3VudHJpZXMuYnRsIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmRvbWluYXRpb24gIT0gdFBTLnJlZ2lvbnMuZG9taW5hdGlvbiBvclxuICAgICAgICBuUFMucmVnaW9ucy5jb250cm9sICE9IHRQUy5yZWdpb25zLmNvbnRyb2xcblxuICAgIHNob3VsZEl0XG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IEBwcm9wcy50cmFuc2Zvcm1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlJzogdHJ1ZVxuICAgICAgICAnbm9kZS1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGUtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGUtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlLXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgc3RhYlRleHQgPSBbXG4gICAgICAgIFIudHNwYW4ge30sIFwiQmF0dGxlOiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonbnVtQnRsJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgIF1cbiAgICAgIHN0YWJUZXh0QXR0cnMueCA9IDBcbiAgICAgIHN0YWJUZXh0QXR0cnMueSArPSAxXG5cblxuXG4gICAgcmVnaW9uVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogaWYgQHByb3BzLnBvaW50cyBvciBAcHJvcHMuc3VwZXJwb3dlciB0aGVuICdub2RlLXRleHQnIGVsc2UgJ2hpZGUnXG4gICAgICB4OiAwXG4gICAgICB5OiAxMFxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG5cblxuICAgIHJlZ2lvblRleHQgPSAnJ1xuICAgIGlmIEBwcm9wcy5wb2ludHNcbiAgICAgIHJlZ2lvbkN4ID0gKGtleSk9PlxuICAgICAgICBvYmogPVxuICAgICAgICAgIHVzYTogQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgICB1c3NyOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXlcbiAgICAgICAgICBib3RoOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXkgYW5kIEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgIG9ialtrZXldID0gdHJ1ZVxuICAgICAgICBjeCBvYmpcbiAgICAgICAgXG4gICAgICBjQ04gPSByZWdpb25DeCAnY29udHJvbCdcbiAgICAgIGRDTiA9IHJlZ2lvbkN4ICdkb21pbmF0aW9uJ1xuICAgICAgcENOID0gcmVnaW9uQ3ggJ3ByZXNlbmNlJ1xuXG4gICAgICByZWdpb25UZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6ZENOLCBAcHJvcHMucG9pbnRzWzFdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlLWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlLWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGUtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgICMgTm9kZSBiZ1xuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIHBvbHlcblxuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtdGl0bGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMudGl0bGVIZWlnaHRcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgUi5saW5lXG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtbGluZSdcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICB4MTogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkxOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgeDI6IEBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkyOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcblxuICAgICAgUi50ZXh0IHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICBSLnRleHQgc3RhYlRleHRBdHRycywgc3RhYlRleHRcbiAgICAgIFIudGV4dCByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgICAgI1IudGV4dCBzaG9ydEN1dEF0dHJzLCBAcHJvcHMuc2hvcnRjdXRcblxuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c2EnLCBpcDogQHByb3BzLnVzYSwgY3RybDogY29udHJvbFVTQSwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNhJ1xuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c3NyJywgaXA6IEBwcm9wcy51c3NyLCBjdHJsOiBjb250cm9sVVNTUiwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNzcidcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUERpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVBEaXYnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlRGl2J1xuXG4gICNzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIyBBc3N1bWUgY291bnRyeVxuICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMjIENvbnRpbmVudCBsYWJlbHNcbiAgICAjaWYgQHByb3BzLnBvaW50cz9cbiAgICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICAjbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIyBTdXBlcnBvd2VyIGxhYmVsc1xuICAgICNpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgI25QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgI3RQUyA9IEBwcm9wcy5zdGF0c1xuICAgICAgI3Nob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgI25QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5kb21pbmF0aW9uICE9IHRQUy5yZWdpb25zLmRvbWluYXRpb24gb3JcbiAgICAgICAgI25QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuI1xuICAgICNzaG91bGRJdFxuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIHJlbmRlcjogLT5cbiAgICBjb250cm9sVVNBID0gKEBwcm9wcy51c2EgLSBAcHJvcHMudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAcHJvcHMudXNzciAtIEBwcm9wcy51c2EpID49IEBwcm9wcy5zdGFiXG5cblxuICAgIGdBdHRycyA9XG4gICAgICBzdHlsZTpcbiAgICAgICAgbGVmdDogQHByb3BzLnggLSBAcHJvcHMud2lkdGgvMiArICdweCdcbiAgICAgICAgdG9wOiBAcHJvcHMueSAtIEBwcm9wcy5oZWlnaHQvMiArICdweCdcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlZGl2JzogdHJ1ZVxuICAgICAgICAnbm9kZWRpdi1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGVkaXYtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlZGl2LXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtb24tdG9wJzogQHByb3BzLm9uVG9wIGFuZCBub3QgKEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICAnbm9kZWRpdi1zZWxlY3RlZCc6IEBwcm9wcy5pcFNlbGVjdGVkXG5cblxuICAgIHRpdGxlVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXRpdGxlLXRleHRcIlxuICAgICAgeDogaWYgQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtQHByb3BzLm5vZGUud2lkdGgvMiArIDJcbiAgICAgIHk6IGlmIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICAgICAtNlxuICAgICAgICAgIGVsc2UgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDZcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcblxuXG4gICAgc3RhYlRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1zdGFiXCJcbiAgICAgIHg6IChAcHJvcHMubm9kZS53aWR0aC8yKSAtIDEwXG4gICAgICB5OiAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemUgKyAxXG5cblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGVkaXYtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlZGl2LWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlZGl2LWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGVkaXYtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcblxuICAgIGlzQ291bnRyeSA9IEBwcm9wcy5zdXBlcnBvd2VyIG9yIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgaWYgbm90IGlzQ291bnRyeVxuICAgICAgaXBVU0EgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBpcFVTU1IgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgICAgc3RhYiA9IFIuc3BhbiBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgIGVsc2VcbiAgICAgIHJlZ2lvbkluZm8gPSBSLnNwYW4gcmVnaW9uVGV4dEF0dHJzLCByZWdpb25UZXh0XG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgYnRsID1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ25vZGVkaXYtYnRsLW51bScsIFtcbiAgICAgICAgICBcIkJhdHRsZTogXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc3Ryb25nJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgICAgXVxuXG4gICAgUi5kaXYgZ0F0dHJzLCBbXG4gICAgICBidGxcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ25vZGVkaXYtdGl0bGUnLCBbXG4gICAgICAgIFIuc3BhbiB0aXRsZVRleHRBdHRycywgQHByb3BzLnNob3J0bmFtZVxuICAgICAgICBzdGFiXG4gICAgICBdXG4gICAgICByZWdpb25JbmZvXG4gICAgICAjUi50ZXh0IHNob3J0Q3V0QXR0cnMsIEBwcm9wcy5zaG9ydGN1dFxuICAgICAgaXBVU0FcbiAgICAgIGlwVVNTUlxuICAgICAgICBcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlSVAnXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUERpdidcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgJGVsID0gJChAcmVmcy5ub2RlZGl2LmdldERPTU5vZGUoKSlcbiAgICAkZWwuYWRkQ2xhc3MgJ25vZGVkaXYtZmxhc2gnXG4gICAgZm4gPSAtPiAkZWwucmVtb3ZlQ2xhc3MoJ25vZGVkaXYtZmxhc2gnKVxuICAgIHNldFRpbWVvdXQgZm4sIDEwMFxuXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBpcFplcm8gPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdpcFplcm8nIGVsc2UgJydcblxuICAgIGdBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC0je0Bwcm9wcy5zaWRlfSBub2RlZGl2LWlwICN7aXBaZXJvfVwiXG4gICAgICByZWY6ICdub2RlZGl2J1xuXG4gICAgdGV4dEF0dHJzID1cbiAgICAgIHg6IEBwcm9wcy5ub2RlLndpZHRoLzRcbiAgICAgIHk6IEBwcm9wcy5ub2RlLmhlaWdodC8yIC0gMVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtdGV4dFwiXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIGlwID0gaWYgQHByb3BzLmlwID4gMCB0aGVuIEBwcm9wcy5pcCBlbHNlICcnXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIFIuc3BhbiB0ZXh0QXR0cnMsIGlwXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC1jbGljay11cFwiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ3VwJ1xuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stZG5cIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5cbkJvYXJkU3RhdGVIaXN0b3J5RW50cnkgPSByZXF1aXJlICcuL0JvYXJkU3RhdGVIaXN0b3J5RW50cnknXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICByOiAwXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5vbiAndXBkYXRlJywgPT5cbiAgICAgIEBmb3JjZVVwZGF0ZSgpXG5cbiAgICAjZm4gPSAoKT0+XG4gICAgICAjQHNldFN0YXRlIHI6IE1hdGgucmFuZG9tKClcbiAgICAgICNzZXRUaW1lb3V0IGZuLCAyMDAwXG4gICAgI2ZuKClcbiAgIFxuICBoYW5kbGVTSENsaWNrOiAoaWQpLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaWRcblxuICBoYW5kbGVDbG9zZUhpc3Rvcnk6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5oaWRlKClcblxuICByZW5kZXI6IC0+XG4gICAgc3RhdGVDb21wb25lbnRzID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRBbGwoKS5tYXAgKHNoLCBpbmRleCk9PlxuICAgICAgc2hNID0gc2gubWV0YVxuICAgICAgIyBJUCBwbGFjZW1lbnQgaW4gY291bnRyeVxuICAgICAgaWYgc2hNLmNvdW50cnk/XG4gICAgICAgIGtleSA9IFwiY291bnRyeS0je3NoTS5jb3VudHJ5LmlkfVwiXG4gICAgICBlbHNlXG4gICAgICAgIGtleSA9IFwiI3tzaE0uaWR9LSN7c2hNLnNpZGV9XCJcblxuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeVxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlU0hDbGljay5iaW5kIHRoaXMsIGluZGV4XG4gICAgICAgIGtleTogXCJCU0hFLSN7aW5kZXh9LSN7a2V5fVwiXG4gICAgICAgIGlzTGF0ZXN0OiBAcHJvcHMuc3RhdGVIaXN0b3J5LmxhdGVzdCA9PSBpbmRleFxuICAgICAgICBpc0N1cnJlbnQ6IEBwcm9wcy5zdGF0ZUhpc3RvcnkuY3VycmVudCA9PSBpbmRleFxuICAgICAgICBzaDogc2hcblxuICAgIGRpdkF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ1N0YXRlSGlzdG9yeSc6IHRydWVcbiAgICAgICAgJ2luJzogQHByb3BzLnN0YXRlSGlzdG9yeS5zaG93XG5cbiAgICBSLmRpdiBkaXZBdHRycywgW1xuICAgICAgUi5hIGNsYXNzTmFtZTogJ2Nsb3NlIHB1bGwtcmlnaHQnLCBvbkNsaWNrOiBAaGFuZGxlQ2xvc2VIaXN0b3J5LCBbXG4gICAgICAgICdDbG9zZSAnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoaCknXG4gICAgICBdXG4gICAgICBSLmgzIHt9LCBcIkFjdGlvbiBIaXN0b3J5XCJcbiAgICAgIFIudWwgY2xhc3NOYW1lOiAnbGlzdC11bnN0eWxlZCcsIHN0YXRlQ29tcG9uZW50cy5yZXZlcnNlKClcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5nYW1lVmFsRGlzcGxheSA9IHJlcXVpcmUgJy4uL2xpYnMvZ2FtZVZhbERpc3BsYXknXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcbmludFRvU3RyV2l0aFNpZ24gPSByZXF1aXJlICcuLi9saWJzL2ludFRvU3RyV2l0aFNpZ24nXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJwb3dlclRvSW5kZXgnXG5cbnNjb3JlU2lkZSA9IChzY29yZSktPlxuICBpZiBzY29yZSA8IDBcbiAgICByZXR1cm4gJ3Vzc3InXG4gIGlmIHNjb3JlID4gMFxuICAgIHJldHVybiAndXNhJ1xuICAnJ1xuXG5cbnNoRW50cnkgPSAoc2gpLT5cbiAgcm91bmRTaWRlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAlIDIgPT0gMCB0aGVuICd1c2EnIGVsc2UgJ3Vzc3InXG4gIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgIHJvdW5kU2lkZSA9ICcnXG5cbiAgaWYgc2guc3RhdGUuZ2FtZS50dXJuID4gMTBcbiAgICB0dXJuID0gXCJFTkRcIlxuICAgIHJvdW5kID0gJydcbiAgZWxzZSBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAwXG4gICAgdHVybiA9IFwiVCN7Z2FtZVZhbERpc3BsYXkoJ3R1cm4nLCBzaC5zdGF0ZS5nYW1lLnR1cm4pfS1cIlxuICAgIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgIT0gMFxuICAgICAgcm91bmQgPSBcIkFSI3tnYW1lVmFsRGlzcGxheSgncm91bmQnLCBzaC5zdGF0ZS5nYW1lLnJvdW5kKX1cIlxuICAgIGVsc2VcbiAgICAgIHJvdW5kID0gXCJIRUFEXCJcbiAgZWxzZVxuICAgIHR1cm4gPSBcIlNFVFVQXCJcbiAgICByb3VuZCA9ICcnXG5cbiAgdHVyblJvdW5kID1cbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHVyblJvdW5kJywgW1xuICAgICAgdHVyblxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogcm91bmRTaWRlLCByb3VuZFxuICAgIF1cblxuICBzaFNpZGUgPSBzaC5tZXRhLnNpZGVcblxuICBzd2l0Y2ggc2gubWV0YS50eXBlXG4gICAgIyBMb2FkIHN0YXRlIGZyb20gdXJsXG4gICAgd2hlbiAnbG9hZCdcbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsICdMb2FkZWQgc3RhdGUgZnJvbSBVUkwnXG4gICAgICBdXG4gICAgd2hlbiAnaXAnXG4gICAgICBbaXBVU0EsIGlwVVNTUl0gPSBzaC5tZXRhLmlwc1xuICAgICAgY291bnRyeSA9IHNoLm1ldGEuY291bnRyeVxuICAgICAgY3RybFVTQSA9IGlmIChpcFVTQSAtIGlwVVNTUikgPj0gY291bnRyeS5zdGFiIHRoZW4gJ2NvbnRyb2wnIGVsc2UgJydcbiAgICAgIGN0cmxVU1NSID0gaWYgKGlwVVNTUiAtIGlwVVNBKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuXG4gICAgICBpZiBzaC5tZXRhLnNpZGUgPT0gJ2JvdGgnXG4gICAgICAgIGlwcyA9IFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbMF1cbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcImRpdmlkZXJcIiwgJy8nXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVsxXVxuICAgICAgICBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwcyA9IFIuc3BhbiBjbGFzc05hbWU6IFwiI3tzaC5tZXRhLnNpZGV9IGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVtzdXBlcnBvd2VyVG9JbmRleCBzaC5tZXRhLnNpZGVdXG5cbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGlwc1xuICAgICAgICBcIiBpbiAje3NoLm1ldGEuY291bnRyeS5zaG9ydG5hbWV9IChcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSAje2N0cmxVU0F9XCIsIHNoLm1ldGEuaXBzWzBdXG4gICAgICAgIFwiL1wiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNzciAje2N0cmxVU1NSfVwiLCBzaC5tZXRhLmlwc1sxXVxuICAgICAgICBcIilcIlxuICAgICAgXVxuICAgIHdoZW4gJ3ZhbCdcbiAgICAgIG9sZFNpZGUgPSBuZXdTaWRlID0gc2gubWV0YS5zaWRlXG5cbiAgICAgIGlmIHNoLm1ldGEuaWQgPT0gJ3Njb3JlJ1xuICAgICAgICBvbGRTaWRlID0gc2NvcmVTaWRlIHNoLm1ldGEub2xkXG4gICAgICAgIG5ld1NpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5uZXdcblxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBcIiN7dXBwZXJGaXJzdChzaC5tZXRhLmlkKX0gXCJcbiAgICAgICAgUi5zdHJvbmcgY2xhc3NOYW1lOiBvbGRTaWRlLCBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5vbGQsICdsb25nJyl9IFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdhcnJvdycsICfinpQgJ1xuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG5ld1NpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgXVxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgc2lkZSA9IHJvdW5kU2lkZVxuICAgICAgcm91bmRUaXRsZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgICAgICAgIFwiSGVhZGxpbmUgUGhhc2VcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgXCIje3NpZGUudG9VcHBlckNhc2UoKX0gQWN0aW9uIFJvdW5kICN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgICAgICBcbiAgICAgICNzaWRlID0gWyd1c3NyJywgJ3VzYSddWyhzaC5zdGF0ZS5nYW1lLnJvdW5kICsgMSkgJSAyXVxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBzaWRlLCByb3VuZFRpdGxlXG4gICAgICBdXG4gICAgd2hlbiAndHVybidcbiAgICAgIGRpc3AgPSBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgIGlmIHNoLnN0YXRlLmdhbWUudHVybiAhPSAwIGFuZCBzaC5zdGF0ZS5nYW1lLnR1cm4gPD0gMTBcbiAgICAgICAgZGlzcCA9IFwiVHVybiAje2Rpc3B9XCJcbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGRpc3BcbiAgICAgIF1cbiAgICBlbHNlXG4gICAgICBzaC5tZXRhLm1zZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIHNob3VsZEl0ID0gZmFsc2VcbiAgICB0UCA9IEBwcm9wc1xuICAgIHRTaE0gPSBAcHJvcHMuc2gubWV0YVxuICAgIG5TaE0gPSBuUC5zaC5tZXRhXG4gICAgIyBJUCBwbGFjZW1lbnRcbiAgICBpZiB0U2hNPy5pcHM/XG4gICAgICBzaG91bGRJdCA9IHRTaE0uaXBzWzBdICE9IG5TaE0uaXBzWzBdIG9yXG4gICAgICAgIHRTaE0uaXBzWzFdICE9IG5TaE0uaXBzWzFdXG4gICAgaWYgdFNoTS50eXBlID09ICd2YWwnXG4gICAgICBzaG91bGRJdCA9IHRTaE0ubmV3ICE9IG5TaE0ubmV3XG4gICAgIyBJZiBjdXJyZW50L2xhdGVzdCBjaGFuZ2VkXG4gICAgaWYgdFAuaXNMYXRlc3QgIT0gblAuaXNMYXRlc3Qgb3IgdFAuaXNDdXJyZW50ICE9IG5QLmlzQ3VycmVudFxuICAgICAgc2hvdWxkSXQgPSB0cnVlXG5cbiAgICBzaG91bGRJdFxuXG4gIHJlbmRlcjotPlxuICAgIGF0dHJzID1cbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5vbkNsaWNrXG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICdjbGVhcmZpeCc6IHRydWVcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1sYXRlc3QnOiBAcHJvcHMuaXNMYXRlc3RcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1jdXJyZW50JzogQHByb3BzLmlzQ3VycmVudFxuICAgIFIubGkgYXR0cnMsIHNoRW50cnkoQHByb3BzLnNoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmRTdGF0dXNWYWx1ZSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXNWYWx1ZSdcbkRpZSA9IHJlcXVpcmUgJy4vRGllJ1xuXG50YWJsZSA9XG4gICdTY29yZSc6ICdTJ1xuICAnRGVmY29uJzogJ0QnXG4gICdNaWxPcHMtdXNhJzogJ00nXG4gICdNaWxPcHMtdXNzcic6ICdPJ1xuICAnVHVybic6ICdUJ1xuICAnUm91bmQnOiAnUidcbiAgJ1NwYWNlLXVzYSc6ICdwJ1xuICAnU3BhY2UtdXNzcic6ICdhJ1xuICAnQWN0aW9uIEhpc3RvcnknOiAnSCdcbiAgJ1JvbGwgZGljZSc6ICdjJ1xuXG5oaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgPSAodGl0bGUsc2lkZT0nJyktPlxuICB0aXRsZVNpZGUgPSB0aXRsZVxuICBpZiBzaWRlICE9ICcnIGFuZCB0aXRsZSAhPSAnUm91bmQnIGFuZCB0aXRsZSAhPSAnU2NvcmUnXG4gICAgdGl0bGVTaWRlID0gXCIje3RpdGxlfS0je3NpZGV9XCJcblxuICBbaGVhZCwgdGFpbF0gPSB0aXRsZS5zcGxpdCB0YWJsZVt0aXRsZVNpZGVdXG4gIG1pZCA9IHRhYmxlW3RpdGxlU2lkZV1cbiAgW1xuICAgIGhlYWRcbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAnU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCBtaWRcbiAgICB0YWlsXG4gIF1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzJ1xuXG4gIHJvbGxEaWNlOiAtPlxuICAgIF8uZWFjaCBAcmVmcywgKHJlZiktPiByZWYucm9sbERpZSgpXG5cbiAgaGFuZGxlQm90aENsaWNrOiAtPlxuICAgIEByb2xsRGljZSgpXG5cbiAgcmVuZGVyOiAtPlxuICBcbiAgICBzY29yZVNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5zY29yZSAhPSAwXG4gICAgICBzY29yZVNpZGUgPSBpZiBAcHJvcHMuc2NvcmUgPCAwIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgUm91bmQ6IDAgaXMgaGVhZGxpbmUsIG9kZHMgYXJlIFVTU1IsIGV2ZW5zIGFyZSBVU0FcbiAgICByb3VuZCA9IGlmIEBwcm9wcy5yb3VuZCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKEBwcm9wcy5yb3VuZCAvIDIpXG4gICAgcm91bmRTaWRlID0gJydcbiAgICBpZiBAcHJvcHMucm91bmQgIT0gMFxuICAgICAgcm91bmRTaWRlID0gaWYgQHByb3BzLnJvdW5kICUgMiA9PSAxIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgIHR1cm4gPSBzd2l0Y2ggQHByb3BzLnR1cm5cbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSBAcHJvcHMudHVyblxuXG4gICAgIyBTaG9ydGhhbmQgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgc3RhdHVzVmFsdWUgPSAoaWQ9JycsIHRpdGxlPScnLCB2YWw9JycsIHNpZGU9JycpPT5cbiAgICAgIHRpdGxlID0gaGlsaWdodFNob3J0Y3V0TGV0dGVyIHRpdGxlLCBzaWRlXG4gICAgICBCb2FyZFN0YXR1c1ZhbHVlIF8uYXNzaWduIHtpZCwgdGl0bGUsIHZhbCwgc2lkZX0sIGhhbmRsZVZhbENsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2tcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRTdGF0dXMnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzY29yZScsICdTY29yZScsIE1hdGguYWJzKEBwcm9wcy5zY29yZSksIHNjb3JlU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnZGVmY29uJywgJ0RlZmNvbicsIEBwcm9wcy5kZWZjb25cbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sJywgW1xuICAgICAgICBzdGF0dXNWYWx1ZSAndHVybicsICdUdXJuJywgdHVyblxuICAgICAgICBzdGF0dXNWYWx1ZSAncm91bmQnLCAnUm91bmQnLCByb3VuZCwgcm91bmRTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzcGFjZScsICdTcGFjZScsIEBwcm9wcy5zcGFjZVswXSwgJ3VzYSdcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scycsIFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy11bmRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3VuZG8nKSwgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHopJ1xuICAgICAgICAgICAgJyBVbmRvJ1xuICAgICAgICAgIF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1oaXN0b3J5JyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3RvZ2dsZScpLFxuICAgICAgICAgICAgaGlsaWdodFNob3J0Y3V0TGV0dGVyICdBY3Rpb24gSGlzdG9yeSdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1yZWRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3JlZG8nKSwgW1xuICAgICAgICAgICAgJ1JlZG8gJ1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHkpJ1xuICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2RpY2UnLCBbXG4gICAgICAgIERpZSByZWY6ICdkaWUtdXNhJywgc2lkZTogJ3VzYSdcbiAgICAgICAgUi5hIGNsYXNzTmFtZTogJ3JvbGwtZGljZScsIG9uQ2xpY2s6IEBoYW5kbGVCb3RoQ2xpY2ssIGhpbGlnaHRTaG9ydGN1dExldHRlcignUm9sbCBkaWNlJylcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c3NyJywgc2lkZTogJ3Vzc3InXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzVmFsdWUnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAudmFsICE9IEBwcm9wcy52YWwgb3IgblAuc2lkZSAhPSBAcHJvcHMuc2lkZVxuICByZW5kZXI6IC0+XG4gICAgc2lkZUNsYXNzID0gc3dpdGNoIEBwcm9wcy5zaWRlXG4gICAgICB3aGVuICd1c2EnLCAndXNzcicgdGhlbiBAcHJvcHMuc2lkZVxuICAgICAgZWxzZSAnJ1xuXG4gICAgZGVjQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnZGVjJ1xuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnZGVjJywgQHByb3BzLnNpZGUpXG4gICAgaW5jQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnaW5jJyxcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2luYycsIEBwcm9wcy5zaWRlKVxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNMYWJlbFwiLCBAcHJvcHMudGl0bGVcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNWYWx1ZSAje3NpZGVDbGFzc31cIiwgW1xuICAgICAgICBSLnNwYW4gZGVjQXR0cnMsICfil4AnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd2YWwnLCBAcHJvcHMudmFsXG4gICAgICAgIFIuc3BhbiBpbmNBdHRycywgJ+KWtidcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5jYXJkU3RhZ2VzID0gMTonRUFSTFknLCAyOidNSUQnLCAzOidMQVRFJ1xuXG5jYXJkQ2xhc3NOYW1lID0gKHByb3BzKSAtPlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBcIm93bmVyLSN7cHJvcHMub3duZXJ9IGNhcmQtdmlldy0je3Byb3BzLnZpZXd9ICN7Y2xhc3Nlc31cIlxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZCdcbiAgcmVuZGVyOiAtPlxuICAgIG1haW4gPSBbXG4gICAgICAgIFIuc3BhbiB7Y2xhc3NOYW1lOiAnY2FyZC10aXRsZS1ob2xkZXInIH0sIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1zdGFnZScsIGNhcmRTdGFnZXNbQHByb3BzLnN0YWdlXVxuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC1vcHMnLCBpZiBAcHJvcHMub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgQHByb3BzLm9wc1xuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScsIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMudGl0bGV9IFwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1pZCcsIFwiIyN7QHByb3BzLmlkfVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIucCBjbGFzc05hbWU6ICdjYXJkLXRleHQnLCBAcHJvcHMudGV4dFxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICAgIG1haW4gPVxuICAgICAgICBSLmltZ1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcmQtaW1nJ1xuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG5cbiAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsIGNsYXNzTmFtZTogY2FyZENsYXNzTmFtZShAcHJvcHMpICsgJyBjYXJkJywgbWFpblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRJbWcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkIGNhcmRJbWcnLFxuICAgICAgUi5hIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICBSLmltZyBzcmM6IFwiL2ltYWdlcy9jYXJkcy9zbS8je3plcm9QYWQgQHByb3BzLmlkfS5qcGdcIlxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQ2FyZCA9IHJlcXVpcmUgJy4vQ2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRMaXN0J1xuICByZW5kZXI6IC0+XG4gICAgY2xhc3NOYW1lID0gY3hcbiAgICAgICdjYXJkTGlzdCc6IHRydWVcbiAgICAgICdjYXJkTGlzdEZ1bGwnOiBAcHJvcHMudmlldyA9PSAndGV4dCdcbiAgICAgICdjYXJkTGlzdEltZyc6IEBwcm9wcy52aWV3ID09ICdpbWcnXG4gICAgUi5kaXYge2NsYXNzTmFtZX0sIEBwcm9wcy5jYXJkcy5tYXAgKGVsKSA9PlxuICAgICAgQ2FyZCBfLm1lcmdlIGVsLFxuICAgICAgICBrZXk6IFwiY2FyZCN7ZWwuaWR9XCJcbiAgICAgICAgc2hvd0Z1bGxUZXh0OiBAcHJvcHMuZnVsbFRleHRcbiAgICAgICAgdmlldzogQHByb3BzLnZpZXdcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0RpZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCwgblMpLT5cbiAgICBuUy5yb2xsaW5nICE9IEBzdGF0ZS5yb2xsaW5nIG9yIG5TLnZhbCAhPSBAc3RhdGUudmFsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvbGxzOiAzMFxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICB2YWw6IDFcbiAgICByb2xsaW5nOiBmYWxzZVxuICAgIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICBjbGlja0RpZTogLT5cbiAgICBAcm9sbERpZSgpXG5cbiAgcm9sbERpZTogLT5cbiAgICByZXR1cm4gaWYgQHN0YXRlLnJvbGxpbmdcbiAgICBAaXRlcmF0ZVJvbGwoKVxuXG4gIGl0ZXJhdGVSb2xsOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUucm9sbGluZ1xuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IHRydWUsIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICAgIGlmIEBzdGF0ZS5yb2xscyA9PSAwXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogZmFsc2UsIHJvbGxzOiBAcHJvcHMucm9sbHNcbiAgICBlbHNlXG4gICAgICB0aW1lID0gKDEwIC0gQHN0YXRlLnJvbGxzKSAqIDE4ICsgNTBcbiAgICAgIGlmIEBzdGF0ZS5yb2xscyA+IDEwXG4gICAgICAgIHRpbWUgPSA1MFxuXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgdmFsOiBfLnJhbmRvbSgxLDYpXG4gICAgICAgIHJvbGxzOiBAc3RhdGUucm9sbHMgLSAxXG4gICAgICBzZXRUaW1lb3V0IEBpdGVyYXRlUm9sbCwgdGltZVxuXG4gIHJlbmRlcjogLT5cbiAgICByb2xsaW5nID0gaWYgQHN0YXRlLnJvbGxpbmcgYW5kIEBzdGF0ZS5yb2xscyA+IDAgdGhlbiAncm9sbGluZycgZWxzZSAnJ1xuICAgIFIuZGl2IG9uQ2xpY2s6IEBjbGlja0RpZSwgY2xhc3NOYW1lOiBcImRpZSBkaWUtI3tAcHJvcHMuc2lkZX0gI3tyb2xsaW5nfVwiLCBAc3RhdGUudmFsXG5cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Zvb3RlcicsIFtcbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vamp0LmlvJywgJ0phc29uIFRyaWxsJ1xuICAgICAgICAnIHdpdGggaGVscCBmcm9tICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnLycsICdDb2ZmZWVTY3JpcHQnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJywgJ1JlYWN0J1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vYnJvd3NlcmlmeS5vcmcvJywgJ0Jyb3dzZXJpZnknXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9sb2Rhc2guY29tLycsICdMby1EYXNoJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLCAnQm9vdHN0cmFwJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vemVwdG9qcy5jb20nLCAnWmVwdG8nXG4gICAgICAgICcsIGFuZCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ3VscGpzLmNvbScsICdHdWxwJ1xuICAgICAgICAnLidcbiAgICAgICAgUi5icigpXG4gICAgICAgICdJdCBvd2VzIGl0cyBleGlzdGVuY2UgdG8gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tJywgJ1R3aWxpZ2h0IFN0cmF0ZWd5J1xuICAgICAgICAnLiBDb21tZW50cywgc3VnZ2VzdGlvbnMsIGFuZCBidWcgcmVwb3J0cyBjYW4gYmUgYWltZWQgYXQgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnL2lzc3VlcycsICdHaXRodWInXG4gICAgICAgICcgb3IgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aXR0ZXIuY29tL2phc29udHJpbGwnLCAnQGphc29udHJpbGwnXG4gICAgICAgICcuJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdOYXZWaWV3J1xuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgYWN0aXZlOiAnJ1xuXG4gIHJlbmRlcjogLT5cblxuICAgIGxpID0gKG1lbnVLZXksIGhyZWYsIHRpdGxlKT0+XG4gICAgICBSLmxpIGNsYXNzTmFtZTogY3goJ2FjdGl2ZSc6IEBwcm9wcy5hY3RpdmUgPT0gbWVudUtleSksXG4gICAgICAgIFIuYSBocmVmOiBocmVmLCB0aXRsZVxuXG4gICAgUi5uYXYgY2xhc3NOYW1lOiBcIm5hdmJhciBcIiwgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIsIFtcblxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6IFwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgIFIuYSBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6ICcjLycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWdcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuXG4gICAgICAgIFIudWwgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2XCIsIFtcbiAgICAgICAgICAjbGkgJ2dhbWUnLCAnIy9nYW1lJywgJ0dhbWUnXG4gICAgICAgICAgbGkgJ2NhcmRzJywgJyMvY2FyZHMnLCAnQ2FyZHMnXG4gICAgICAgICAgbGkgJ2JvYXJkJywgJyMvYm9hcmQnLCAnQm9hcmQnXG4gICAgICAgICAgbGkgJ2Fib3V0JywgJyMvYWJvdXQnLCAnQWJvdXQnXG4gICAgICAgIF1cblxuICAgICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiJdfQ==
