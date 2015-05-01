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
      }, [
        R.div({
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
        ]), R.h2({
          className: libs.cardClassName(card)
        }, [
          R.span({
            className: 'card-ops'
          }, card.ops < 1 ? "S" : card.ops), "" + card.title + " ", R.span({
            className: 'card-id'
          }, "#" + card.id)
        ])
      ]), R.p({
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
      R.div({
        className: 'container'
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
          }, 'Gulp'), '.'
        ]), R.p({}, [
          'It owes its existence to ', R.a({
            href: 'http://twilightstrategy.com'
          }, 'Twilight Strategy'), '. Comments, suggestions, and bug reports can be aimed at ', R.a({
            href: 'http://github.com/jjt/twistrug/issues'
          }, 'Github'), ' or ', R.a({
            href: 'http://twitter.com/jasontrill'
          }, '@jasontrill'), '.'
        ])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvYXBwL2RhdGEvbWFwLWRhdGEtdjIuanNvbiIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvbGliL2NhcmRzLmpzb24iLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9Ud2lzdHJ1Zy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvTWljcm9FdmVudENsYXNzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvY2FyZENsYXNzTmFtZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2NvbnRpZW50Q29kZUZyb21PbmVMZXR0ZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9jb250aW5lbnRDb2RlRnJvbUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclRydXRoeS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclVuaXF1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2ZpbHRlclZhbGlkQ2FyZElkcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2dhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9nYW1lVmFsRGlzcGxheS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvaW50VG9TdHJXaXRoU2lnbi5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL251bVRvQ2hhci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9xcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3JhbmdlZEdhbWVWYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zZXRQYWdlVGl0bGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduRnJvbURpci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3NpZ25TdHJpbmcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWROdW1PckRhc2guY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zaWduZWRTdHIuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvbGlicy9zb3J0TnVtZXJpY2FsLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3RhdGVFbmNvZGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvc3VwZXJTdGF0cy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3N1cGVycG93ZXJUb0luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvdXBwZXJGaXJzdC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9saWJzL3ZpZXdzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL2xpYnMvemVyb1BhZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9BYm91dC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9Cb2FyZFBpYy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NhcmRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0NvdW50cmllcy5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy9wYWdlcy9HYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvcHJvamVjdHMvVHdpU3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L3Byb2plY3RzL1R3aVN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9wcm9qZWN0cy9Ud2lTdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFYO0FBQUEsTUFBc0IsSUFBQSxFQUFNLFlBQTVCO0tBQU4sRUFDRSxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsV0FBWDtLQUFOLEVBQThCO01BRTVCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxlQUFYO09BQU4sRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsUUFBQSxTQUFBLEVBQVcsY0FBWDtBQUFBLFFBQTJCLElBQUEsRUFBTSxJQUFqQztPQUFKLEVBQTJDO1FBQ3pDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxLQUFYO1NBQVAsRUFBeUIsS0FBekIsQ0FEeUMsRUFFekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBUCxFQUEyQixPQUEzQixDQUZ5QztPQUEzQyxDQURGLENBRjRCLEVBUTVCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxnQkFBWDtPQUFMLEVBQWtDLENBRWhDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUZnQyxFQUdoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FIZ0MsRUFJaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSmdDLENBQWxDLENBUjRCO0tBQTlCLENBREYsRUFOTTtFQUFBLENBSlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGNBQVIsQ0FBQSxDQUF3QixTQUF4QixFQUFtQyxDQUFDLFVBQUQsQ0FBbkMsQ0FBakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiY291bnRyaWVzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVU0FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVVNBXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjogXCJ1c2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwidXNhXCIsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkNhbmFkYSxDdWJhLE1leGljbyxKYXBhblwiLFxuICAgICAgXCJpZFwiOiAwLFxuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiA2NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1c1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVVNTUlwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJVU1NSXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjogXCJ1c3NyXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInVzc3JcIixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiQWZnaGFuaXN0YW4sRmlubGFuZCxOIEtvcmVhLFBvbGFuZCxSb21hbmlhXCIsXG4gICAgICBcImlkXCI6IDEsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ1c1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQXVzdHJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBdXN0cmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJFIEdlcm1hbnksSHVuZ2FyeSxJdGFseSxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjogMixcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImF1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCZW5lbHV4XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJlbmVsdXhcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXIEdlcm1hbnksVUtcIixcbiAgICAgIFwiaWRcIjogMyxcbiAgICAgIFwieFwiOiA0MDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQnVsZ2FyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQnVsZ2FyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUdXJrZXksR3JlZWNlXCIsXG4gICAgICBcImlkXCI6IDQsXG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJidVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhbmFkYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDYW5hZGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDIsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJVS1wiLFxuICAgICAgXCJpZFwiOiA1LFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkN6ZWNoXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUG9sYW5kLEUgR2VybWFueSxIdW5nYXJ5XCIsXG4gICAgICBcImlkXCI6IDYsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDIyNCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjelwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImN6XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkRlbm1hcmtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRGVubWFya1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlcgR2VybWFueSxTd2VkZW5cIixcbiAgICAgIFwiaWRcIjogNyxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImRlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRS5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWdcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMyxcbiAgICAgIFwibGlua3NcIjogXCJQb2xhbmQsVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6IDgsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZpbmxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRmlubGFuZFwiLFxuICAgICAgXCJncm91cFwiOiBcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNCxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDEsXG4gICAgICBcImxpbmtzXCI6IFwiU3dlZGVuXCIsXG4gICAgICBcImlkXCI6IDksXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImZpXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZmlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRnJhbmNlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkZyYW5jZVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkFsZ2VyaWEsVUssVyBHZXJtYW55LEl0YWx5LFNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjogMTAsXG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImZyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkdyZWVjZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJHcmVlY2VcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJdGFseSxZdWdvc2xhdmlhLFR1cmtleVwiLFxuICAgICAgXCJpZFwiOiAxMSxcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImdyXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJIdW5nYXJ5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkh1bmdhcnlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJSb21hbmlhLFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjogMTIsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJodVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXRhbHlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXRhbHlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJZdWdvc2xhdmlhLFNwYWluXFwvUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjogMTMsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpdFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTm9yd2F5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk5vcndheVwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVLLFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOiAxNCxcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibm9cIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBvbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQb2xhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMTUsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUm9tYW5pYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJSb21hbmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVHVya2V5LFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjogMTYsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJyb1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3BhaW5cXC9Qb3J0dWdhbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTcGFpblxcL1BvXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTW9yb2Njb1wiLFxuICAgICAgXCJpZFwiOiAxNyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNwXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic3BcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU3dlZGVuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN3ZWRlblwiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAxOCxcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic3dcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzd1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUdXJrZXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVHVya2V5XCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDE5LFxuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiAzNTIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidHVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVLXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlVLXCIsXG4gICAgICBcImdyb3VwXCI6IFwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcInN0YWJcIjogNSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiA1LFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDIwLFxuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidWtcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlcgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJXLkdlcm1cIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ3Z1wiLFxuICAgICAgXCJncm91cFwiOiBcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAyMSxcbiAgICAgIFwieFwiOiA0ODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIndcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiWXVnb3NsYXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJZdWdvc2xhdlwiLFxuICAgICAgXCJncm91cFwiOiBcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAyMixcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInl1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwieVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFZ3lwdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFZ3lwdFwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSXNyYWVsLExpYnlhLFN1ZGFuXCIsXG4gICAgICBcImlkXCI6IDIzLFxuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZWdcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkd1bGYgU3RzXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJJcmFxLFNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJpZFwiOiAyNCxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJndVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXJhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJcmFuXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaW5cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIklyYXEsQWZnaGFuaXN0YW4sUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjogMjUsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDM1MixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJcmFxXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIklyYXFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpcVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDEsXG4gICAgICBcImxpbmtzXCI6IFwiU2F1ZGkgQXJhYmlhLEpvcmRhblwiLFxuICAgICAgXCJpZFwiOiAyNixcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIklzcmFlbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJc3JhZWxcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkpvcmRhbixMZWJhbm9uLFN5cmlhXCIsXG4gICAgICBcImlkXCI6IDI3LFxuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0MTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiaXNcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJpc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJKb3JkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSm9yZGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTYXVkaSBBcmFiaWEsTGViYW5vblwiLFxuICAgICAgXCJpZFwiOiAyOCxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDE2LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImpvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwialwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMZWJhbm9uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkxlYmFub25cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlN5cmlhXCIsXG4gICAgICBcImlkXCI6IDI5LFxuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibGVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMaWJ5YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJMaWJ5YVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVHVuaXNpYVwiLFxuICAgICAgXCJpZFwiOiAzMCxcbiAgICAgIFwieFwiOiA2ODAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImxpXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibGlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNhdWRpIEFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiAzMSxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDQxNixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN5cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN5cmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMSxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogMzIsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzeVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInN5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFmZ2hhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjogMzMsXG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhZlwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBdXN0cmFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogNCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1hbGF5c2lhXCIsXG4gICAgICBcImlkXCI6IDM0LFxuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogOTYsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYXVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhdVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCdXJtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJCdXJtYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIkluZGlhLExhb3NcXC9DYW1ib2RpYVwiLFxuICAgICAgXCJpZFwiOiAzNSxcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJ1XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImlkXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOiAzNixcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluZG9uZXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJpc1wiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk1hbGF5c2lhLFBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJpZFwiOiAzNyxcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMTYwLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImlzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkphcGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkphcGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiA0LFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQaGlsbGlwcGluZXMsUyBLb3JlYSxUYWl3YW5cIixcbiAgICAgIFwiaWRcIjogMzgsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImphXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwialwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTGFvc1xcL0NhbVwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlRoYWlsYW5kLFZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjogMzksXG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDI1NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJsYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTWFsYXlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTWFsYXlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJpZFwiOiA0MCxcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcIm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTiBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOLktvcmVhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibmtcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAzLFxuICAgICAgXCJsaW5rc1wiOiBcIlMgS29yZWFcIixcbiAgICAgIFwiaWRcIjogNDEsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlBha2lzdGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDIsXG4gICAgICBcInhcIjogODQwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJQaGlsbGlwXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAxLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQzLFxuICAgICAgXCJ4XCI6IDkyMCxcbiAgICAgIFwieVwiOiA5NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwaFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlMgS29yZWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUy5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNrXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJUYWl3YW5cIixcbiAgICAgIFwiaWRcIjogNDQsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDk2LFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFpd2FuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlRhaXdhblwiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDQ1LFxuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAxMjgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidGFcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJUaGFpbGFuZFwiLFxuICAgICAgXCJncm91cFwiOiBcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjogNDYsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidGhcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJWaWV0bmFtXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlZpZXRuYW1cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNDcsXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFsZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWxnZXJpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiTW9yb2NjbyxUdW5pc2lhLFNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6IDQ4LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYWxcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBbmdvbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQW5nb2xhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJCb3Rzd2FuYSxTb3V0aCBBZnJpY2EsWmFpcmVcIixcbiAgICAgIFwiaWRcIjogNDksXG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJhblwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvdHN3YW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJvdHN3YW5hXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJTb3V0aCBBZnJpY2EsWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjogNTAsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJib1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2FtZXJvb25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ2FtZXJvb25cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIk5pZ2VyaWEsWmFpcmVcIixcbiAgICAgIFwiaWRcIjogNTEsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRXRoaW9waWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRXRoaW9waWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlN1ZGFuLFNvbWFsaWFcIixcbiAgICAgIFwiaWRcIjogNTIsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJldFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiSXZvcnkgQ29hc3RcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiSXZvcnkgQ1wiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiV2VzdCBBZnJpY2EsTmlnZXJpYVwiLFxuICAgICAgXCJpZFwiOiA1MyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNjA4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIml2XCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiaVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJLZW55YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJLZW55YVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiU29tYWxpYSxTRSBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjogNTQsXG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJrZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImtcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTW9yb2Njb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNb3JvY2NvXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJpZFwiOiA1NSxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1vXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwibVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJOaWdlcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk5pZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6IDU2LFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibmlcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNFIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTRSBBZnJpY2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlppbWJhYndlXCIsXG4gICAgICBcImlkXCI6IDU3LFxuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTYWhhcmEgU1wiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNTgsXG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTb21hbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNvbWFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA1OSxcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwic29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlNvdXRoIEFmXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDMsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMSxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MCxcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNjcyLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1ZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlN1ZGFuXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjEsXG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInN1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlR1bmlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVHVuaXNpYVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDYyLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidHVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIldlc3QgQWZcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA2MyxcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNTQ0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIndlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwid1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJaYWlyZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJaYWlyZVwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjogNjQsXG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ6YVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInphXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlppbWJhYndlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlppbWJhYndlXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNjUsXG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJ6aVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInppXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvc3RhIFJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQ29zdGEgUlwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsTmljYXJhZ3VhLFBhbmFtYVwiLFxuICAgICAgXCJpZFwiOiA2NixcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMjg4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ3ViYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDdWJhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIYWl0aSxOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjogNjcsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjdVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImN1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRG9taW5pYyBSXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJIYWl0aVwiLFxuICAgICAgXCJpZFwiOiA2OCxcbiAgICAgIFwieFwiOiAyODAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImRvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJFbCBTYWx2YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFbCBTYWx2YVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsR3VhdGVtYWxhXCIsXG4gICAgICBcImlkXCI6IDY5LFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlbFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcInN0YWJcIjogMSxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiSG9uZHVyYXMsTWV4aWNvXCIsXG4gICAgICBcImlkXCI6IDcwLFxuICAgICAgXCJ4XCI6IDEyMCxcbiAgICAgIFwieVwiOiAyMjQsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZ3VcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkhhaXRpXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkhhaXRpXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogMCxcbiAgICAgIFwiaWRcIjogNzEsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJoYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkhvbmR1cmFzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkhvbmR1cmFzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjogNzIsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDI4OCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJob1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImhvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1leGljb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNZXhpY29cIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA3MyxcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAxNjAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibWVcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJOaWNhcmFndWFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJzdGFiXCI6IDEsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA3NCxcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogMjI0LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm5pXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQYW5hbWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGFuYW1hXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDEsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJDb2x1bWJpYVwiLFxuICAgICAgXCJpZFwiOiA3NSxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInBhXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwicFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBcmdlbnRpbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXJnZW50aW5hXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJDaGlsZSxQYXJhZ3VheSxVcnVndWF5XCIsXG4gICAgICBcImlkXCI6IDc2LFxuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA2NDAsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYXJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvbGl2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQm9saXZpYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiUGFyYWd1YXksUGVydVwiLFxuICAgICAgXCJpZFwiOiA3NyxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTEyLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImJvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiYm9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQnJhemlsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkJyYXppbFwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDEsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiVXJ1Z3VheSxWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjogNzgsXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJiclwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImJyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNoaWxlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNoaWxlXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAzLFxuICAgICAgXCJidGxcIjogMSxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQZXJ1XCIsXG4gICAgICBcImlkXCI6IDc5LFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDYwOCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjaFwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvbHVtYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkNvbHVtYmlhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAxLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJFY3VhZG9yLFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOiA4MCxcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNDQ4LFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNvXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwiY29cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRWN1YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFY3VhZG9yXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwic3RhYlwiOiAyLFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJQZXJ1XCIsXG4gICAgICBcImlkXCI6IDgxLFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlY1wiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcImVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUGFyYWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGFyYWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlVydWd1YXlcIixcbiAgICAgIFwiaWRcIjogODIsXG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDU3NixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwYVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBlcnVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUGVydVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDgzLFxuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDU0NCxcbiAgICAgIFwic2hvcnRjdXRcIjogXCJwZVwiLFxuICAgICAgXCJzaG9ydGN1dFVuaXF1ZVwiOiBcInBlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlVydWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiVXJ1Z3VheVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcInN0YWJcIjogMixcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IDAsXG4gICAgICBcImlkXCI6IDg0LFxuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA2MDgsXG4gICAgICBcInNob3J0Y3V0XCI6IFwidXJcIixcbiAgICAgIFwic2hvcnRjdXRVbmlxdWVcIjogXCJ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJWZW5lenVlbGFcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJzdGFiXCI6IDIsXG4gICAgICBcImJ0bFwiOiAxLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiAwLFxuICAgICAgXCJpZFwiOiA4NSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNDgwLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcInZlXCIsXG4gICAgICBcInNob3J0Y3V0VW5pcXVlXCI6IFwidlwiXG4gICAgfVxuICBdLFxuICBcInJlZ2lvbkluZm9Ob2Rlc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcImV1XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwibmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIFwiV1wiXG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAyODgsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA1LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwibWVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJtZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiTWlkIEVhc3RcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiTWlkIEVhc3RcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJtXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDdcbiAgICAgIF0sXG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA0ODAsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA2LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYVwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICA5XG4gICAgICBdLFxuICAgICAgXCJleHRyYVwiOiBcIjEgcGVyIFNFIGNvdW50cnksIDIgZm9yIFRoYWlsYW5kXCIsXG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDE2MCxcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDYsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhZlwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZlwiLFxuICAgICAgXCJwb2ludHNcIjogW1xuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdLFxuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA1NDQsXG4gICAgICBcInN0YWJcIjogOTksXG4gICAgICBcIm51bUJ0bFwiOiA1LFxuICAgICAgXCJidGxcIjogMCxcbiAgICAgIFwidXNhXCI6IDAsXG4gICAgICBcInVzc3JcIjogMCxcbiAgICAgIFwibGlua3NcIjogXCJcIixcbiAgICAgIFwicmVnaW9uSW5mb1wiOiB0cnVlLFxuICAgICAgXCJmaXhlZFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiY2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJjYVwiLFxuICAgICAgXCJuYW1lXCI6IFwiQy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImNcIixcbiAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgNVxuICAgICAgXSxcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMzUyLFxuICAgICAgXCJzdGFiXCI6IDk5LFxuICAgICAgXCJudW1CdGxcIjogMyxcbiAgICAgIFwiYnRsXCI6IDAsXG4gICAgICBcInVzYVwiOiAwLFxuICAgICAgXCJ1c3NyXCI6IDAsXG4gICAgICBcImxpbmtzXCI6IFwiXCIsXG4gICAgICBcInJlZ2lvbkluZm9cIjogdHJ1ZSxcbiAgICAgIFwiZml4ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwibmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzXCIsXG4gICAgICBcInBvaW50c1wiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDZcbiAgICAgIF0sXG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDY3MixcbiAgICAgIFwic3RhYlwiOiA5OSxcbiAgICAgIFwibnVtQnRsXCI6IDQsXG4gICAgICBcImJ0bFwiOiAwLFxuICAgICAgXCJ1c2FcIjogMCxcbiAgICAgIFwidXNzclwiOiAwLFxuICAgICAgXCJsaW5rc1wiOiBcIlwiLFxuICAgICAgXCJyZWdpb25JbmZvXCI6IHRydWUsXG4gICAgICBcImZpeGVkXCI6IHRydWVcbiAgICB9XG4gIF0sXG4gIFwibGlua3NcIjogW1xuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiA1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiQ2FuYWRhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiA2NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkN1YmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMCxcbiAgICAgIFwidGFyZ2V0XCI6IDczLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDAsXG4gICAgICBcInRhcmdldFwiOiAzOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkphcGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiAzMyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxLFxuICAgICAgXCJ0YXJnZXRcIjogOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJGaW5sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiA0MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJOIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMSxcbiAgICAgIFwidGFyZ2V0XCI6IDE2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogMTIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMixcbiAgICAgIFwidGFyZ2V0XCI6IDEzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzLFxuICAgICAgXCJ0YXJnZXRcIjogMjAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQsXG4gICAgICBcInRhcmdldFwiOiAxOSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0LFxuICAgICAgXCJ0YXJnZXRcIjogMTEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIkdyZWVjZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNSxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FuYWRhXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDYsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2LFxuICAgICAgXCJ0YXJnZXRcIjogOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2LFxuICAgICAgXCJ0YXJnZXRcIjogMTIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcsXG4gICAgICBcInRhcmdldFwiOiAyMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcsXG4gICAgICBcInRhcmdldFwiOiAxOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgsXG4gICAgICBcInRhcmdldFwiOiAxNSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogOCxcbiAgICAgIFwidGFyZ2V0XCI6IDIxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA5LFxuICAgICAgXCJ0YXJnZXRcIjogMTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGaW5sYW5kXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ4LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiQWxnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMCxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMjEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEwLFxuICAgICAgXCJ0YXJnZXRcIjogMTMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTAsXG4gICAgICBcInRhcmdldFwiOiAxNyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlNwYWluXFwvUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDExLFxuICAgICAgXCJ0YXJnZXRcIjogMTMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTEsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDExLFxuICAgICAgXCJ0YXJnZXRcIjogMTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDEyLFxuICAgICAgXCJ0YXJnZXRcIjogMTYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMTIsXG4gICAgICBcInRhcmdldFwiOiAyMixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMyxcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxMyxcbiAgICAgIFwidGFyZ2V0XCI6IDE3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJTcGFpblxcL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNCxcbiAgICAgIFwidGFyZ2V0XCI6IDIwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE0LFxuICAgICAgXCJ0YXJnZXRcIjogMTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE2LFxuICAgICAgXCJ0YXJnZXRcIjogMTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxNixcbiAgICAgIFwidGFyZ2V0XCI6IDIyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDE3LFxuICAgICAgXCJ0YXJnZXRcIjogNTUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJTcGFpblxcL1BvcnR1Z2FsXCIsXG4gICAgICAgIFwiTW9yb2Njb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAxOSxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiVHVya2V5XCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjMsXG4gICAgICBcInRhcmdldFwiOiAyNyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiSXNyYWVsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyMyxcbiAgICAgIFwidGFyZ2V0XCI6IDMwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJMaWJ5YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjMsXG4gICAgICBcInRhcmdldFwiOiA2MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjQsXG4gICAgICBcInRhcmdldFwiOiAyNixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjQsXG4gICAgICBcInRhcmdldFwiOiAzMSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNSxcbiAgICAgIFwidGFyZ2V0XCI6IDI2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI1LFxuICAgICAgXCJ0YXJnZXRcIjogMzMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjUsXG4gICAgICBcInRhcmdldFwiOiA0MixcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNixcbiAgICAgIFwidGFyZ2V0XCI6IDMxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMjYsXG4gICAgICBcInRhcmdldFwiOiAyOCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI3LFxuICAgICAgXCJ0YXJnZXRcIjogMjgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI3LFxuICAgICAgXCJ0YXJnZXRcIjogMjksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyNyxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI4LFxuICAgICAgXCJ0YXJnZXRcIjogMzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDI4LFxuICAgICAgXCJ0YXJnZXRcIjogMjksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAyOSxcbiAgICAgIFwidGFyZ2V0XCI6IDMyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGViYW5vblwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzMCxcbiAgICAgIFwidGFyZ2V0XCI6IDYyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGlieWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDMzLFxuICAgICAgXCJ0YXJnZXRcIjogNDIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNCxcbiAgICAgIFwidGFyZ2V0XCI6IDQwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM1LFxuICAgICAgXCJ0YXJnZXRcIjogMzYsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCdXJtYVwiLFxuICAgICAgICBcIkluZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNSxcbiAgICAgIFwidGFyZ2V0XCI6IDM5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJMYW9zXFwvQ2FtYm9kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM2LFxuICAgICAgXCJ0YXJnZXRcIjogNDIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJbmRpYVwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzNyxcbiAgICAgIFwidGFyZ2V0XCI6IDQwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM3LFxuICAgICAgXCJ0YXJnZXRcIjogNDMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM4LFxuICAgICAgXCJ0YXJnZXRcIjogNDMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzgsXG4gICAgICBcInRhcmdldFwiOiA0NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogMzgsXG4gICAgICBcInRhcmdldFwiOiA0NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiAzOSxcbiAgICAgIFwidGFyZ2V0XCI6IDQ2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTGFvc1xcL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDM5LFxuICAgICAgXCJ0YXJnZXRcIjogNDcsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJMYW9zXFwvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJWaWV0bmFtXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0MCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiTWFsYXlzaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDEsXG4gICAgICBcInRhcmdldFwiOiA0NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIk4gS29yZWFcIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0NCxcbiAgICAgIFwidGFyZ2V0XCI6IDQ1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUyBLb3JlYVwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDYsXG4gICAgICBcInRhcmdldFwiOiA0NyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlRoYWlsYW5kXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDgsXG4gICAgICBcInRhcmdldFwiOiA1NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA0OCxcbiAgICAgIFwidGFyZ2V0XCI6IDYyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ4LFxuICAgICAgXCJ0YXJnZXRcIjogNTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDQ5LFxuICAgICAgXCJ0YXJnZXRcIjogNTAsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJCb3Rzd2FuYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDksXG4gICAgICBcInRhcmdldFwiOiA2MCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNDksXG4gICAgICBcInRhcmdldFwiOiA2NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MCxcbiAgICAgIFwidGFyZ2V0XCI6IDYwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUwLFxuICAgICAgXCJ0YXJnZXRcIjogNjUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MSxcbiAgICAgIFwidGFyZ2V0XCI6IDU2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MSxcbiAgICAgIFwidGFyZ2V0XCI6IDY0LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNTIsXG4gICAgICBcInRhcmdldFwiOiA2MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkV0aGlvcGlhXCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUyLFxuICAgICAgXCJ0YXJnZXRcIjogNTksXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDUzLFxuICAgICAgXCJ0YXJnZXRcIjogNjMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1MyxcbiAgICAgIFwidGFyZ2V0XCI6IDU2LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiSXZvcnkgQ29hc3RcIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NCxcbiAgICAgIFwidGFyZ2V0XCI6IDU5LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA1NCxcbiAgICAgIFwidGFyZ2V0XCI6IDU3LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTRSBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU1LFxuICAgICAgXCJ0YXJnZXRcIjogNjMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJNb3JvY2NvXCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU2LFxuICAgICAgXCJ0YXJnZXRcIjogNTgsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJOaWdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDU3LFxuICAgICAgXCJ0YXJnZXRcIjogNjUsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJTRSBBZnJpY2FcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjQsXG4gICAgICBcInRhcmdldFwiOiA2NSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlphaXJlXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY2LFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY2LFxuICAgICAgXCJ0YXJnZXRcIjogNzQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2NixcbiAgICAgIFwidGFyZ2V0XCI6IDc1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIlBhbmFtYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjcsXG4gICAgICBcInRhcmdldFwiOiA3MSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNjcsXG4gICAgICBcInRhcmdldFwiOiA3NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY4LFxuICAgICAgXCJ0YXJnZXRcIjogNzEsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJEb21pbmljYW4gUmVwXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDY5LFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA2OSxcbiAgICAgIFwidGFyZ2V0XCI6IDcwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJHdWF0ZW1hbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDcwLFxuICAgICAgXCJ0YXJnZXRcIjogNzIsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzAsXG4gICAgICBcInRhcmdldFwiOiA3MyxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzIsXG4gICAgICBcInRhcmdldFwiOiA3NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkhvbmR1cmFzXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NSxcbiAgICAgIFwidGFyZ2V0XCI6IDgwLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiUGFuYW1hXCIsXG4gICAgICAgIFwiQ29sdW1iaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogNzYsXG4gICAgICBcInRhcmdldFwiOiA3OSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIkNoaWxlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NixcbiAgICAgIFwidGFyZ2V0XCI6IDgyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc2LFxuICAgICAgXCJ0YXJnZXRcIjogODQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NyxcbiAgICAgIFwidGFyZ2V0XCI6IDgyLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3NyxcbiAgICAgIFwidGFyZ2V0XCI6IDgzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDc4LFxuICAgICAgXCJ0YXJnZXRcIjogODQsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3OCxcbiAgICAgIFwidGFyZ2V0XCI6IDg1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA3OSxcbiAgICAgIFwidGFyZ2V0XCI6IDgzLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ2hpbGVcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MCxcbiAgICAgIFwidGFyZ2V0XCI6IDgxLFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJFY3VhZG9yXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOiA4MCxcbiAgICAgIFwidGFyZ2V0XCI6IDg1LFxuICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6IDgxLFxuICAgICAgXCJ0YXJnZXRcIjogODMsXG4gICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgXCJFY3VhZG9yXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjogODIsXG4gICAgICBcInRhcmdldFwiOiA4NCxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICBcIlBhcmFndWF5XCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOiBmYWxzZVxuICAgIH1cbiAgXSxcbiAgXCJjb3VudHJ5U2hvcnRjdXRzXCI6IHtcbiAgICBcImVcIjogW1xuICAgICAgXCJhdVwiLFxuICAgICAgXCJiZVwiLFxuICAgICAgXCJidVwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjelwiLFxuICAgICAgXCJkZVwiLFxuICAgICAgXCJlZ1wiLFxuICAgICAgXCJmaVwiLFxuICAgICAgXCJmclwiLFxuICAgICAgXCJnclwiLFxuICAgICAgXCJodVwiLFxuICAgICAgXCJpdFwiLFxuICAgICAgXCJub1wiLFxuICAgICAgXCJwb1wiLFxuICAgICAgXCJyb1wiLFxuICAgICAgXCJzcFwiLFxuICAgICAgXCJzd1wiLFxuICAgICAgXCJ0dVwiLFxuICAgICAgXCJ1a1wiLFxuICAgICAgXCJ3Z1wiLFxuICAgICAgXCJ5dVwiXG4gICAgXSxcbiAgICBcIm1cIjogW1xuICAgICAgXCJlZ1wiLFxuICAgICAgXCJndVwiLFxuICAgICAgXCJpblwiLFxuICAgICAgXCJpcVwiLFxuICAgICAgXCJpc1wiLFxuICAgICAgXCJqb1wiLFxuICAgICAgXCJsZVwiLFxuICAgICAgXCJsaVwiLFxuICAgICAgXCJzYVwiLFxuICAgICAgXCJzeVwiXG4gICAgXSxcbiAgICBcImFcIjogW1xuICAgICAgXCJhZlwiLFxuICAgICAgXCJhdVwiLFxuICAgICAgXCJidVwiLFxuICAgICAgXCJpZFwiLFxuICAgICAgXCJpc1wiLFxuICAgICAgXCJqYVwiLFxuICAgICAgXCJsYVwiLFxuICAgICAgXCJtYVwiLFxuICAgICAgXCJua1wiLFxuICAgICAgXCJwYVwiLFxuICAgICAgXCJwaFwiLFxuICAgICAgXCJza1wiLFxuICAgICAgXCJ0YVwiLFxuICAgICAgXCJ0aFwiLFxuICAgICAgXCJ2aVwiXG4gICAgXSxcbiAgICBcImZcIjogW1xuICAgICAgXCJhbFwiLFxuICAgICAgXCJhblwiLFxuICAgICAgXCJib1wiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJldFwiLFxuICAgICAgXCJpdlwiLFxuICAgICAgXCJrZVwiLFxuICAgICAgXCJtb1wiLFxuICAgICAgXCJuaVwiLFxuICAgICAgXCJzZVwiLFxuICAgICAgXCJzc1wiLFxuICAgICAgXCJzb1wiLFxuICAgICAgXCJzYVwiLFxuICAgICAgXCJzdVwiLFxuICAgICAgXCJ0dVwiLFxuICAgICAgXCJ3ZVwiLFxuICAgICAgXCJ6YVwiLFxuICAgICAgXCJ6aVwiXG4gICAgXSxcbiAgICBcImNcIjogW1xuICAgICAgXCJjb1wiLFxuICAgICAgXCJjdVwiLFxuICAgICAgXCJkb1wiLFxuICAgICAgXCJlbFwiLFxuICAgICAgXCJndVwiLFxuICAgICAgXCJoYVwiLFxuICAgICAgXCJob1wiLFxuICAgICAgXCJtZVwiLFxuICAgICAgXCJuaVwiLFxuICAgICAgXCJwYVwiXG4gICAgXSxcbiAgICBcInNcIjogW1xuICAgICAgXCJhclwiLFxuICAgICAgXCJib1wiLFxuICAgICAgXCJiclwiLFxuICAgICAgXCJjaFwiLFxuICAgICAgXCJjb1wiLFxuICAgICAgXCJlY1wiLFxuICAgICAgXCJwYVwiLFxuICAgICAgXCJwZVwiLFxuICAgICAgXCJ1clwiLFxuICAgICAgXCJ2ZVwiXG4gICAgXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz1bXHIgIHtcciAgICBcImlkXCI6MSxcciAgICBcInRpdGxlXCI6XCJBc2lhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNzsgQ29udHJvbDogOTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9yZWdpb25zLWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MixcciAgICBcInRpdGxlXCI6XCJFdXJvcGUgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiBBdXRvbWF0aWMgVmljdG9yeTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9yZWdpb25zLWV1cm9wZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozLFxyICAgIFwidGl0bGVcIjpcIk1pZGRsZSBFYXN0IFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNzsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzEzL3JlZ2lvbnMtbWlkZGxlLWVhc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NCxcciAgICBcInRpdGxlXCI6XCJEdWNrIGFuZCBDb3ZlclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBUaGUgVVMgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gNSBtaW51cyB0aGUgY3VycmVudCBERUZDT04gbGV2ZWwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2R1Y2stYW5kLWNvdmVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo1LFxyICAgIFwidGl0bGVcIjpcIkZpdmUgWWVhciBQbGFuXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbXVzdCByYW5kb21seSBkaXNjYXJkIGEgY2FyZC4gSWYgdGhlIGNhcmQgaGFzIGEgVVMgYXNzb2NpYXRlZCBFdmVudCwgdGhlIEV2ZW50IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgdGhlIGNhcmQgaGFzIGEgVVNTUiBhc3NvY2lhdGVkIEV2ZW50IG9yIGFuIEV2ZW50IGFwcGxpY2FibGUgdG8gYm90aCBwbGF5ZXJzLCB0aGVuIHRoZSBjYXJkIG11c3QgYmUgZGlzY2FyZGVkIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2ZpdmUteWVhci1wbGFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo2LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDaGluYSBDYXJkXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhpcyBjYXJkIGJlZ2lucyB0aGUgZ2FtZSB3aXRoIHRoZSBVU1NSLiBXaGVuIHBsYXllZCwgdGhlIHBsYXllciByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCBpZiBpdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBBc2lhLiBJdCBpcyBwYXNzZWQgdG8gdGhlIG9wcG9uZW50IG9uY2UgcGxheWVkLiBBIHBsYXllciByZWNlaXZlcyAxIFZQIGZvciBob2xkaW5nIHRoaXMgY2FyZCBhdCB0aGUgZW5kIG9mIFR1cm4gMTAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMxL3RoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImNhbmNlbHNcIjogMzVcciAgfSxcciAge1xyICAgIFwiaWRcIjo3LFxyICAgIFwidGl0bGVcIjpcIlNvY2lhbGlzdCBHb3Zlcm5tZW50c1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhIHRvdGFsIG9mIDMgVVMgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZSAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzgzIOKAkyBUaGUgSXJvbiBMYWR54oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTMvc29jaWFsaXN0LWdvdmVybm1lbnRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFudGlyZXFcIjogODNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4LFxyICAgIFwidGl0bGVcIjpcIkZpZGVsKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gQ3ViYS4gVVNTUiBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIGluIEN1YmEgZm9yIENvbnRyb2wuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE0L2ZpZGVsL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OSxcciAgICBcInRpdGxlXCI6XCJWaWV0bmFtIFJldm9sdHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gVmlldG5hbS4gRm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIHRoZSBVU1NSIHJlY2VpdmVzICsxIE9wZXJhdGlvbnMgdG8gdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgYSBjYXJkIHRoYXQgdXNlcyBhbGwgaXRzIE9wZXJhdGlvbnMgaW4gU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE2L3ZpZXRuYW0tcmV2b2x0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwLFxyICAgIFwidGl0bGVcIjpcIkJsb2NrYWRlKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlVubGVzcyB0aGUgVVMgaW1tZWRpYXRlbHkgZGlzY2FyZHMgYSBjYXJkIHdpdGggYW4gT3BlcmF0aW9ucyB2YWx1ZSBvZiAzIG9yIG1vcmUsIHJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gV2VzdCBHZXJtYW55LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xOS9ibG9ja2FkZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjExLFxyICAgIFwidGl0bGVcIjpcIktvcmVhbiBXYXIqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiTm9ydGggS29yZWEgaW52YWRlcyBTb3V0aCBLb3JlYS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgVVMgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIFNvdXRoIEtvcmVhLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIFVTIEluZmx1ZW5jZSBpbiBTb3V0aCBLb3JlYSB3aXRoIFVTU1IgSW5mbHVlbmNlLiBUaGUgVVNTUiBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzI1L2tvcmVhbi13YXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhZmZlY3RzXCI6IDU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTIsXHIgICAgXCJ0aXRsZVwiOlwiUm9tYW5pYW4gQWJkaWNhdGlvbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFJvbWFuaWEuIFRoZSBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgdG8gUm9tYW5pYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMDIvcm9tYW5pYW4tYWJkaWNhdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEzLFxyICAgIFwidGl0bGVcIjpcIkFyYWItSXNyYWVsaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJQYW4tQXJhYiBDb2FsaXRpb24gaW52YWRlcyBJc3JhZWwuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIElzcmFlbCwgaWYgaXQgaXMgVVMgY29udHJvbGxlZCwgYW5kIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gSXNyYWVsLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIFVTIEluZmx1ZW5jZSBpbiBJc3JhZWwgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjNjUg4oCTIENhbXAgRGF2aWQgQWNjb3Jkc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzE2L2FyYWItaXNyYWVsaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWZmZWN0c1wiOiA1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE0LFxyICAgIFwidGl0bGVcIjpcIkNvbWVjb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiA0IG5vbi1VUyBjb250cm9sbGVkIGNvdW50cmllcyBvZiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMjQvY29tZWNvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE1LFxyICAgIFwidGl0bGVcIjpcIk5hc3NlcipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBFZ3lwdC4gVGhlIFVTIHJlbW92ZXMgaGFsZiwgcm91bmRlZCB1cCwgb2YgaXRzIEluZmx1ZW5jZSBmcm9tIEVneXB0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8wNi9uYXNzZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNixcciAgICBcInRpdGxlXCI6XCJXYXJzYXcgUGFjdCBGb3JtZWQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBpbmZsdWVuY2UgZnJvbSA0IGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZSBvciBhZGQgNSBVU1NSIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjAvd2Fyc2F3LXBhY3QtZm9ybWVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJhbGxvd3NcIjogMjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNyxcciAgICBcInRpdGxlXCI6XCJEZSBHYXVsbGUgTGVhZHMgRnJhbmNlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSAyIFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSBhbmQgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gRnJhbmNlLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBGcmFuY2Ugb25seS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjQvZGUtZ2F1bGxlLWxlYWRzLWZyYW5jZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWZmZWN0c1wiOiAyMVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE4LFxyICAgIFwidGl0bGVcIjpcIkNhcHR1cmVkIE5hemkgU2NpZW50aXN0KlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIk1vdmUgdGhlIFNwYWNlIFJhY2UgTWFya2VyIGFoZWFkIGJ5IDEgc3BhY2UuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzI3L2NhcHR1cmVkLW5hemktc2NpZW50aXN0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTksXHIgICAgXCJ0aXRsZVwiOlwiVHJ1bWFuIERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBhIHNpbmdsZSB1bmNvbnRyb2xsZWQgY291bnRyeSBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzAyL3RydW1hbi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMCxcciAgICBcInRpdGxlXCI6XCJPbHltcGljIEdhbWVzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhpcyBwbGF5ZXIgc3BvbnNvcnMgdGhlIE9seW1waWNzLiBUaGUgb3Bwb25lbnQgbXVzdCBlaXRoZXIgcGFydGljaXBhdGUgb3IgYm95Y290dC4gSWYgdGhlIG9wcG9uZW50IHBhcnRpY2lwYXRlcywgZWFjaCBwbGF5ZXIgcm9sbHMgYSBkaWUgYW5kIHRoZSBzcG9uc29yIGFkZHMgMiB0byB0aGVpciByb2xsLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCAocmVyb2xsIHRpZXMpLiBJZiB0aGUgb3Bwb25lbnQgYm95Y290dHMsIGRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgc3BvbnNvciBtYXkgY29uZHVjdCBPcGVyYXRpb25zIGFzIGlmIHRoZXkgcGxheWVkIGEgNCBPcHMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvb2x5bXBpYy1nYW1lcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMSxcciAgICBcInRpdGxlXCI6XCJOQVRPKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIGNhbm5vdCBtYWtlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgYWdhaW5zdCBhbnkgVVMgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gRXVyb3BlLiBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUgY2Fubm90IGJlIGF0dGFja2VkIGJ5IHBsYXkgb2YgdGhlIOKAnCMzNiDigJMgQnJ1c2ggV2Fy4oCdIEV2ZW50LiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiBlaXRoZXIgdGhlIOKAnCMxNiDigJMgV2Fyc2F3IFBhY3QgRm9ybWVk4oCdIG9yIOKAnCMyMyDigJMgTWFyc2hhbGwgUGxhbuKAnSBFdmVudChzKSBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEyL25hdG8vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjEsXHIgICAgXCJwcmVyZXFcIjpbMTYsMjNdLFxyICAgIFwiYWZmZWN0c1wiOjM2XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjIsXHIgICAgXCJ0aXRsZVwiOlwiSW5kZXBlbmRlbnQgUmVkcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgVVMgSW5mbHVlbmNlIHRvIGVpdGhlciBZdWdvc2xhdmlhLCBSb21hbmlhLCBCdWxnYXJpYSwgSHVuZ2FyeSwgb3IgQ3plY2hvc2xvdmFraWEgc28gdGhhdCBpdCBlcXVhbHMgdGhlIFVTU1IgSW5mbHVlbmNlIGluIHRoYXQgY291bnRyeS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTMvaW5kZXBlbmRlbnQtcmVkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMyxcciAgICBcInRpdGxlXCI6XCJNYXJzaGFsbCBQbGFuKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA3IG5vbi1VU1NSIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xNi9tYXJzaGFsbC1wbGFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWxsb3dzXCI6MjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNCxcciAgICBcInRpdGxlXCI6XCJJbmRvLVBha2lzdGFuaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJbmRpYSBpbnZhZGVzIFBha2lzdGFuIG9yIHZpY2UgdmVyc2EgKHBsYXllcuKAmXMgY2hvaWNlKS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIGludmFzaW9uIChJbmRpYSBvciBQYWtpc3RhbikuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xOS9pbmRvLXBha2lzdGFuaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxLFxyICAgIFwiYWZmZWN0c1wiOiA1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI1LFxyICAgIFwidGl0bGVcIjpcIkNvbnRhaW5tZW50KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgVVMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1heGltdW0gb2YgNCBPcGVyYXRpb25zIHBlciBjYXJkKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjAvY29udGFpbm1lbnQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjYsXHIgICAgXCJ0aXRsZVwiOlwiQ0lBIENyZWF0ZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzIGZvciB0aGlzIHR1cm4uIFRoZSBVUyBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI2L2NpYS1jcmVhdGVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI3LFxyICAgIFwidGl0bGVcIjpcIlVTL0phcGFuIE11dHVhbCBEZWZlbnNlIFBhY3QqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgdG8gSmFwYW4gZm9yIENvbnRyb2wuIFRoZSBVU1NSIGNhbm5vdCBtYWtlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgYWdhaW5zdCBKYXBhbi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjcvdXNqYXBhbi1tdXR1YWwtZGVmZW5zZS1wYWN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjgsXHIgICAgXCJ0aXRsZVwiOlwiU3VleiBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgNCBVUyBJbmZsdWVuY2UgZnJvbSBGcmFuY2UsIHRoZSBVbml0ZWQgS2luZ2RvbSBhbmQgSXNyYWVsIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yOS9zdWV6LWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI5LFxyICAgIFwidGl0bGVcIjpcIkVhc3QgRXVyb3BlYW4gVW5yZXN0XCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiRWFybHkgb3IgTWlkIFdhcjogUmVtb3ZlIDEgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS4gTGF0ZSBXYXI6IFJlbW92ZSAyIFVTU1IgSW5mbHVlbmNlIGZyb20gMyBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzAyL2Vhc3QtZXVyb3BlYW4tdW5yZXN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMCxcciAgICBcInRpdGxlXCI6XCJEZWNvbG9uaXphdGlvblwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDQgY291bnRyaWVzIGluIEFmcmljYSBhbmQvb3IgU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzA1L2RlY29sb25pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMxLFxyICAgIFwidGl0bGVcIjpcIlJlZCBTY2FyZS9QdXJnZVwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgb3Bwb25lbnQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1pbmltdW0gdmFsdWUgb2YgMSBPcGVyYXRpb25zIHBvaW50KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMjMvcmVkLXNjYXJlcHVyZ2UvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzIsXHIgICAgXCJ0aXRsZVwiOlwiVU4gSW50ZXJ2ZW50aW9uXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUGxheSB0aGlzIGNhcmQgc2ltdWx0YW5lb3VzbHkgd2l0aCBhIGNhcmQgY29udGFpbmluZyBhbiBvcHBvbmVudOKAmXMgYXNzb2NpYXRlZCBFdmVudC4gVGhlIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50IGlzIGNhbmNlbGVkIGJ1dCB5b3UgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGUgb3Bwb25lbnTigJlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSBwbGF5ZWQgZHVyaW5nIHRoZSBIZWFkbGluZSBQaGFzZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDUvMDcvdW4taW50ZXJ2ZW50aW9uL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMzLFxyICAgIFwidGl0bGVcIjpcIkRlLVN0YWxpbml6YXRpb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbWF5IHJlYWxsb2NhdGUgdXAgdG8gYSB0b3RhbCBvZiA0IEluZmx1ZW5jZSBmcm9tIG9uZSBvciBtb3JlIGNvdW50cmllcyB0byBhbnkgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDUvMjkvZGUtc3RhbGluaXphdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM0LFxyICAgIFwidGl0bGVcIjpcIk51Y2xlYXIgVGVzdCBCYW5cIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVyIHJlY2VpdmVzIFZQIGVxdWFsIHRvIHRoZSBjdXJyZW50IERFRkNPTiBsZXZlbCBtaW51cyAyIHRoZW4gaW1wcm92ZXMgdGhlIERFRkNPTiBsZXZlbCBieSAyLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNi8xMS9udWNsZWFyLXRlc3QtYmFuL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM1LFxyICAgIFwidGl0bGVcIjpcIkZvcm1vc2FuIFJlc29sdXRpb24qXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhpcyBjYXJk4oCZcyBFdmVudCBpcyBpbiBlZmZlY3QsIFRhaXdhbiB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBCYXR0bGVncm91bmQgY291bnRyeSwgZm9yIHNjb3JpbmcgcHVycG9zZXMgb25seSwgaWYgVGFpd2FuIGlzIFVTIGNvbnRyb2xsZWQgd2hlbiB0aGUgQXNpYSBTY29yaW5nIENhcmQgaXMgcGxheWVkLiBUaGlzIEV2ZW50IGlzIGNhbmNlbGxlZCBhZnRlciB0aGUgVVMgaGFzIHBsYXllZCB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzAyL2Zvcm1vc2FuLXJlc29sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNixcciAgICBcInRpdGxlXCI6XCJCcnVzaCBXYXJcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVyIGF0dGFja3MgYW55IGNvdW50cnkgd2l0aCBhIHN0YWJpbGl0eSBudW1iZXIgb2YgMSBvciAyLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBhZGphY2VudCBlbmVteSBjb250cm9sbGVkIGNvdW50cnkuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgMy02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDEgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAzIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9icnVzaC13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyLFxyICAgIFwiYWZmZWN0c1wiOiA1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM3LFxyICAgIFwidGl0bGVcIjpcIkNlbnRyYWwgQW1lcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDE7IERvbWluYXRpb246IDM7IENvbnRyb2w6IDU7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvcmVnaW9ucy1jZW50cmFsLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzgsXHIgICAgXCJ0aXRsZVwiOlwiU291dGhlYXN0IEFzaWEgU2NvcmluZypcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCIxIFZQIGVhY2ggZm9yIENvbnRyb2wgb2YgQnVybWEsIENhbWJvZGlhL0xhb3MsIFZpZXRuYW0sIE1hbGF5c2lhLCBJbmRvbmVzaWEgYW5kIHRoZSBQaGlsaXBwaW5lcy4gMiBWUCBmb3IgQ29udHJvbCBvZiBUaGFpbGFuZDsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9yZWdpb25zLXNvdXRoZWFzdC1hc2lhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzksXHIgICAgXCJ0aXRsZVwiOlwiQXJtcyBSYWNlXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQ29tcGFyZSBlYWNoIHBsYXllcuKAmXMgdmFsdWUgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suIElmIHRoZSBwaGFzaW5nIHBsYXllciBoYXMgYSBoaWdoZXIgdmFsdWUgdGhhbiB0aGVpciBvcHBvbmVudCBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjaywgdGhhdCBwbGF5ZXIgcmVjZWl2ZXMgMSBWUC4gSWYgdGhlIHBoYXNpbmcgcGxheWVyIGhhcyBhIGhpZ2hlciB2YWx1ZSB0aGFuIHRoZWlyIG9wcG9uZW50LCBhbmQgaGFzIG1ldCB0aGUg4oCccmVxdWlyZWTigJ0gYW1vdW50LCBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjaywgdGhhdCBwbGF5ZXIgcmVjZWl2ZXMgMyBWUCBpbnN0ZWFkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNS9hcm1zLXJhY2UvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDAsXHIgICAgXCJ0aXRsZVwiOlwiQ3ViYW4gTWlzc2lsZSBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiU2V0IHRoZSBERUZDT04gbGV2ZWwgdG8gMi4gQW55IENvdXAgQXR0ZW1wdHMgYnkgeW91ciBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCB3aWxsIHJlc3VsdCBpbiBHbG9iYWwgVGhlcm1vbnVjbGVhciBXYXIuIFlvdXIgb3Bwb25lbnQgd2lsbCBsb3NlIHRoZSBnYW1lLiBUaGlzIGNhcmTigJlzIEV2ZW50IG1heSBiZSBjYW5jZWxlZCwgYXQgYW55IHRpbWUsIGlmIHRoZSBVU1NSIHJlbW92ZXMgMiBJbmZsdWVuY2UgZnJvbSBDdWJhIG9yIHRoZSBVUyByZW1vdmVzIDIgSW5mbHVlbmNlIGZyb20gV2VzdCBHZXJtYW55IG9yIFR1cmtleS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDYvY3ViYW4tbWlzc2lsZS1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MSxcciAgICBcInRpdGxlXCI6XCJOdWNsZWFyIFN1YnMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVVMgT3BlcmF0aW9ucyB1c2VkIGZvciBDb3VwIEF0dGVtcHRzIGluIEJhdHRsZWdyb3VuZCBjb3VudHJpZXMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgZG8gbm90IGRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbC4gVGhpcyBjYXJk4oCZcyBFdmVudCBkb2VzIG5vdCBhcHBseSB0byBhbnkgRXZlbnQgdGhhdCB3b3VsZCBhZmZlY3QgdGhlIERFRkNPTiBsZXZlbCAoZXguIHRoZSDigJwjNDAg4oCTIEN1YmFuIE1pc3NpbGUgQ3Jpc2lz4oCdIEV2ZW50KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTAvbnVjbGVhci1zdWJzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQyLFxyICAgIFwidGl0bGVcIjpcIlF1YWdtaXJlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIk9uIHRoZSBVU+KAmXMgbmV4dCBhY3Rpb24gcm91bmQsIGl0IG11c3QgZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQgd2l0aCBhIHZhbHVlIG9mIDIgb3IgbW9yZSBhbmQgcm9sbCAxLTQgb24gYSBkaWUgdG8gY2FuY2VsIHRoaXMgRXZlbnQuIFJlcGVhdCB0aGlzIEV2ZW50IGZvciBlYWNoIFVTIGFjdGlvbiByb3VuZCB1bnRpbCB0aGUgVVMgc3VjY2Vzc2Z1bGx5IHJvbGxzIDEtNCBvbiBhIGRpZS4gSWYgdGhlIFVTIGlzIHVuYWJsZSB0byBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCwgaXQgbXVzdCBwbGF5IGFsbCBvZiBpdHMgc2NvcmluZyBjYXJkcyBhbmQgdGhlbiBza2lwIGVhY2ggYWN0aW9uIHJvdW5kIGZvciB0aGUgcmVzdCBvZiB0aGUgdHVybi4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMxMDYg4oCTIE5PUkFE4oCdIEV2ZW50IChpZiBhcHBsaWNhYmxlKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTIvcXVhZ21pcmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQzLFxyICAgIFwidGl0bGVcIjpcIlNBTFQgTmVnb3RpYXRpb25zKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAyLiBGb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgYm90aCBwbGF5ZXJzIHJlY2VpdmUgLTEgdG8gYWxsIENvdXAgQXR0ZW1wdCByb2xscy4gVGhlIHBsYXllciBvZiB0aGlzIGNhcmTigJlzIEV2ZW50IG1heSBsb29rIHRocm91Z2ggdGhlIGRpc2NhcmQgcGlsZSwgcGljayBhbnkgMSBub24tc2NvcmluZyBjYXJkLCByZXZlYWwgaXQgdG8gdGhlaXIgb3Bwb25lbnQgYW5kIHRoZW4gcGxhY2UgdGhlIGRyYXduIGNhcmQgaW50byB0aGVpciBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xNy9zYWx0LW5lZ290aWF0aW9ucy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDQsXHIgICAgXCJ0aXRsZVwiOlwiQmVhciBUcmFwKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIk9uIHRoZSBVU1NS4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgaXQgbXVzdCBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCB3aXRoIGEgdmFsdWUgb2YgMiBvciBtb3JlIGFuZCByb2xsIDEtNCBvbiBhIGRpZSB0byBjYW5jZWwgdGhpcyBFdmVudC4gUmVwZWF0IHRoaXMgRXZlbnQgZm9yIGVhY2ggVVNTUiBhY3Rpb24gcm91bmQgdW50aWwgdGhlIFVTU1Igc3VjY2Vzc2Z1bGx5IHJvbGxzIDEtNCBvbiBhIGRpZS4gSWYgdGhlIFVTU1IgaXMgdW5hYmxlIHRvIGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkLCBpdCBtdXN0IHBsYXkgYWxsIG9mIGl0cyBzY29yaW5nIGNhcmRzIGFuZCB0aGVuIHNraXAgZWFjaCBhY3Rpb24gcm91bmQgZm9yIHRoZSByZXN0IG9mIHRoZSB0dXJuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xOS9iZWFyLXRyYXAvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NSxcciAgICBcInRpdGxlXCI6XCJTdW1taXRcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJCb3RoIHBsYXllcnMgcm9sbCBhIGRpZS4gRWFjaCBwbGF5ZXIgcmVjZWl2ZXMgKzEgdG8gdGhlIGRpZSByb2xsIGZvciBlYWNoIFJlZ2lvbiAoRXVyb3BlLCBBc2lhLCBldGMuKSB0aGV5IERvbWluYXRlIG9yIENvbnRyb2wuIFRoZSBwbGF5ZXIgd2l0aCB0aGUgaGlnaGVzdCBtb2RpZmllZCBkaWUgcm9sbCByZWNlaXZlcyAyIFZQIGFuZCBtYXkgZGVncmFkZSBvciBpbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSAoZG8gbm90IHJlcm9sbCB0aWVzKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMjQvc3VtbWl0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ2LFxyICAgIFwidGl0bGVcIjpcIkhvdyBJIExlYXJuZWQgdG8gU3RvcCBXb3JyeWluZypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJTZXQgdGhlIERFRkNPTiBsZXZlbCB0byBhbnkgbGV2ZWwgZGVzaXJlZCAoMS01KS4gVGhlIHBsYXllciBhZGRzIDUgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzI2L2hvdy1pLWxlYXJuZWQtdG8tc3RvcC13b3JyeWluZy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ3LFxyICAgIFwidGl0bGVcIjpcIkp1bnRhXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgaW4gQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhLiBUaGUgcGxheWVyIG1heSBtYWtlIGZyZWUgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBpbiBlaXRoZXIgQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDEvanVudGEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDgsXHIgICAgXCJ0aXRsZVwiOlwiS2l0Y2hlbiBEZWJhdGVzKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBjb250cm9scyBtb3JlIEJhdHRsZWdyb3VuZCBjb3VudHJpZXMgdGhhbiB0aGUgVVNTUiwgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gcG9rZSB0aGVpciBvcHBvbmVudCBpbiB0aGUgY2hlc3QgYW5kIHJlY2VpdmUgMiBWUCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDMva2l0Y2hlbi1kZWJhdGVzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ5LFxyICAgIFwidGl0bGVcIjpcIk1pc3NpbGUgRW52eVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkV4Y2hhbmdlIHRoaXMgY2FyZCBmb3IgeW91ciBvcHBvbmVudOKAmXMgaGlnaGVzdCB2YWx1ZSBPcGVyYXRpb25zIGNhcmQuIElmIDIgb3IgbW9yZSBjYXJkcyBhcmUgdGllZCwgb3Bwb25lbnQgY2hvb3Nlcy4gSWYgdGhlIGV4Y2hhbmdlZCBjYXJkIGNvbnRhaW5zIGFuIEV2ZW50IGFwcGxpY2FibGUgdG8geW91cnNlbGYgb3IgYm90aCBwbGF5ZXJzLCBpdCBvY2N1cnMgaW1tZWRpYXRlbHkuIElmIGl0IGNvbnRhaW5zIGFuIG9wcG9uZW504oCZcyBFdmVudCwgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIChubyBFdmVudCkuIFRoZSBvcHBvbmVudCBtdXN0IHVzZSB0aGlzIGNhcmQgZm9yIE9wZXJhdGlvbnMgZHVyaW5nIHRoZWlyIG5leHQgYWN0aW9uIHJvdW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wOC9taXNzaWxlLWVudnkvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTAsXHIgICAgXCJ0aXRsZVwiOlwiV2UgV2lsbCBCdXJ5IFlvdSpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMS4gVW5sZXNzIHRoZSAjMzIgVU4gSW50ZXJ2ZW50aW9uIGNhcmQgaXMgcGxheWVkIGFzIGFuIEV2ZW50IG9uIHRoZSBVU+KAmXMgbmV4dCBhY3Rpb24gcm91bmQsIHRoZSBVU1NSIHJlY2VpdmVzIDMgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzEwL3dlLXdpbGwtYnVyeS15b3UvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MSxcciAgICBcInRpdGxlXCI6XCJCcmV6aG5ldiBEb2N0cmluZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIFVTU1IsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1heGltdW0gb2YgNCBPcGVyYXRpb25zIHBlciBjYXJkKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTIvYnJlemhuZXYtZG9jdHJpbmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MixcciAgICBcInRpdGxlXCI6XCJQb3J0dWd1ZXNlIEVtcGlyZSBDcnVtYmxlcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBBbmdvbGEgYW5kIHRoZSBTRSBBZnJpY2FuIFN0YXRlcy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTUvcG9ydHVndWVzZS1lbXBpcmUtY3J1bWJsZXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MyxcciAgICBcInRpdGxlXCI6XCJTb3V0aCBBZnJpY2FuIFVucmVzdFwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIGVpdGhlciBhZGRzIDIgSW5mbHVlbmNlIHRvIFNvdXRoIEFmcmljYSBvciBhZGRzIDEgSW5mbHVlbmNlIHRvIFNvdXRoIEFmcmljYSBhbmQgMiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBhZGphY2VudCB0byBTb3V0aCBBZnJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE2L3NvdXRoLWFmcmljYW4tdW5yZXN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU0LFxyICAgIFwidGl0bGVcIjpcIkFsbGVuZGUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gQ2hpbGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE3L2FsbGVuZGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NSxcciAgICBcInRpdGxlXCI6XCJXaWxseSBCcmFuZHQqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBhbmQgYWRkcyAxIEluZmx1ZW5jZSB0byBXZXN0IEdlcm1hbnkuIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gRXZlbnQgZm9yIFdlc3QgR2VybWFueSBvbmx5LiBUaGlzIEV2ZW50IGlzIHByZXZlbnRlZCAvIGNhbmNlbGVkIGJ5IHRoZSDigJwjOTYg4oCTIFRlYXIgRG93biB0aGlzIFdhbGzigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE4L3dpbGx5LWJyYW5kdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyLFxyICAgIFwiYW50aXJlcVwiOjk2LFxyICAgIFwiYWZmZWN0c1wiOjIxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTYsXHIgICAgXCJ0aXRsZVwiOlwiTXVzbGltIFJldm9sdXRpb25cIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIDIgb2YgdGhlIGZvbGxvd2luZyBjb3VudHJpZXM6IFN1ZGFuLCBJcmFuLCBJcmFxLCBFZ3lwdCwgTGlieWEsIFNhdWRpIEFyYWJpYSwgU3lyaWEsIEpvcmRhbi4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzExMCDigJMgQVdBQ1MgU2FsZSB0byBTYXVkaXPigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xOS9tdXNsaW0tcmV2b2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NyxcciAgICBcInRpdGxlXCI6XCJBQk0gVHJlYXR5XCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZW4gY29uZHVjdCBPcGVyYXRpb25zIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjMvYWJtLXRyZWF0eS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1OCxcciAgICBcInRpdGxlXCI6XCJDdWx0dXJhbCBSZXZvbHV0aW9uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVMgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVU1NSIChmYWNlIHVwIGFuZCBhdmFpbGFibGUgdG8gYmUgcGxheWVkKS4gSWYgdGhlIFVTU1IgYWxyZWFkeSBoYXMg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI0L2N1bHR1cmFsLXJldm9sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1OSxcciAgICBcInRpdGxlXCI6XCJGbG93ZXIgUG93ZXIqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBmb3IgZXZlcnkgVVMgcGxheWVkIOKAnFdhcuKAnSBjYXJkIChBcmFiLUlzcmFlbGkgV2FyLCBLb3JlYW4gV2FyLCBCcnVzaCBXYXIsIEluZG8tUGFraXN0YW5pIFdhciwgSXJhbi1JcmFxIFdhciksIHVzZWQgZm9yIE9wZXJhdGlvbnMgb3IgYW4gRXZlbnQsIGFmdGVyIHRoaXMgY2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgcHJldmVudGVkIC8gY2FuY2VsZWQgYnkgdGhlIOKAnCM5NyDigJMgQW4gRXZpbCBFbXBpcmXigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI1L2Zsb3dlci1wb3dlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyLFxyICAgIFwiYW50aXJlcVwiOjk3XHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjAsXHIgICAgXCJ0aXRsZVwiOlwiVTIgSW5jaWRlbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC4gSWYgdGhlIOKAnCMzMiDigJMgVU4gSW50ZXJ2ZW50aW9u4oCdIEV2ZW50IGlzIHBsYXllZCBsYXRlciB0aGlzIHR1cm4sIGVpdGhlciBieSB0aGUgVVMgb3IgdGhlIFVTU1IsIHRoZSBVU1NSIHJlY2VpdmVzIGFuIGFkZGl0aW9uYWwgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjYvdS0yLWluY2lkZW50L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyLFxyICAgIFwicmVsYXRlZFwiOjMyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjEsXHIgICAgXCJ0aXRsZVwiOlwiT1BFQ1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgZm9yIENvbnRyb2wgb2YgZWFjaCBvZiB0aGUgZm9sbG93aW5nIGNvdW50cmllczogRWd5cHQsIElyYW4sIExpYnlhLCBTYXVkaSBBcmFiaWEsIElyYXEsIEd1bGYgU3RhdGVzLCBWZW5lenVlbGEuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM4NiDigJMgTm9ydGggU2VhIE9pbOKAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI5L29wZWMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyLFxyICAgIFwiYW50aXJlcVwiOjg2XHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjIsXHIgICAgXCJ0aXRsZVwiOlwiTG9uZSBHdW5tYW4qXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcy4gVGhlIFVTU1IgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8zMC9sb25lLWd1bm1hbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYzLFxyICAgIFwidGl0bGVcIjpcIkNvbG9uaWFsIFJlYXIgR3VhcmRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDQgY291bnRyaWVzIGluIEFmcmljYSBhbmQvb3IgU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzAxL2NvbG9uaWFsLXJlYXItZ3VhcmRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NCxcciAgICBcInRpdGxlXCI6XCJQYW5hbWEgQ2FuYWwgUmV0dXJuZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIFBhbmFtYSwgQ29zdGEgUmljYSBhbmQgVmVuZXp1ZWxhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wMi9wYW5hbWEtY2FuYWwtcmV0dXJuZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjUsXHIgICAgXCJ0aXRsZVwiOlwiQ2FtcCBEYXZpZCBBY2NvcmRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGFuZCBhZGRzIDEgSW5mbHVlbmNlIHRvIElzcmFlbCwgSm9yZGFuIGFuZCBFZ3lwdC4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzEzIOKAkyBBcmFiLUlzcmFlbGkgV2Fy4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA1L2NhbXAtZGF2aWQtYWNjb3Jkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY2LFxyICAgIFwidGl0bGVcIjpcIlB1cHBldCBHb3Zlcm5tZW50cypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IGFkZCAxIEluZmx1ZW5jZSB0byAzIGNvdW50cmllcyB0aGF0IGRvIG5vdCBjb250YWluIEluZmx1ZW5jZSBmcm9tIGVpdGhlciB0aGUgVVMgb3IgVVNTUi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDYvcHVwcGV0LWdvdmVybm1lbnRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY3LFxyICAgIFwidGl0bGVcIjpcIkdyYWluIFNhbGVzIHRvIFNvdmlldHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmFuZG9tbHkgc2VsZWN0cyAxIGNhcmQgZnJvbSB0aGUgVVNTUuKAmXMgaGFuZCAoaWYgYXZhaWxhYmxlKS4gVGhlIFVTIG11c3QgZWl0aGVyIHBsYXkgdGhlIGNhcmQgb3IgcmV0dXJuIGl0IHRvIHRoZSBVU1NSLiBJZiB0aGUgY2FyZCBpcyByZXR1cm5lZCwgb3IgdGhlIFVTU1IgaGFzIG5vIGNhcmRzLCB0aGUgVVMgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNy9ncmFpbi1zYWxlcy10by1zb3ZpZXRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2OCxcciAgICBcInRpdGxlXCI6XCJKb2huIFBhdWwgSUkgRWxlY3RlZCBQb3BlKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSAyIFVTU1IgSW5mbHVlbmNlIGZyb20gUG9sYW5kIGFuZCBhZGQgMSBVUyBJbmZsdWVuY2UgdG8gUG9sYW5kLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzEwMSDigJMgU29saWRhcml0eeKAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDgvam9obi1wYXVsLWlpLWVsZWN0ZWQtcG9wZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY5LFxyICAgIFwidGl0bGVcIjpcIkxhdGluIEFtZXJpY2FuIERlYXRoIFNxdWFkc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFsbCBvZiB0aGUgcGhhc2luZyBwbGF5ZXLigJlzIENvdXAgQXR0ZW1wdHMgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYSwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIGRpZSByb2xsLiBBbGwgb2YgdGhlIG9wcG9uZW504oCZcyBDb3VwIEF0dGVtcHRzIGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBkaWUgcm9sbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDkvbGF0aW4tYW1lcmljYW4tZGVhdGgtc3F1YWRzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcwLFxyICAgIFwidGl0bGVcIjpcIk9BUyBGb3VuZGVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCBhIHRvdGFsIG9mIDIgVVMgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xMi9vYXMtZm91bmRlZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MSxcciAgICBcInRpdGxlXCI6XCJOaXhvbiBQbGF5cyB0aGUgQ2hpbmEgQ2FyZCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVNTUiBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTIChmYWNlIGRvd24gYW5kIHVuYXZhaWxhYmxlIGZvciBpbW1lZGlhdGUgcGxheSkuIElmIHRoZSBVUyBhbHJlYWR5IGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVUyByZWNlaXZlcyAyIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xMy9uaXhvbi1wbGF5cy10aGUtY2hpbmEtY2FyZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MixcciAgICBcInRpdGxlXCI6XCJTYWRhdCBFeHBlbHMgU292aWV0cypcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gRWd5cHQgYW5kIGFkZCAxIFVTIEluZmx1ZW5jZSB0byBFZ3lwdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTQvc2FkYXQtZXhwZWxzLXNvdmlldHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzMsXHIgICAgXCJ0aXRsZVwiOlwiU2h1dHRsZSBEaXBsb21hY3lcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgc3VidHJhY3QgKC0xKSBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGZyb20gdGhlIFVTU1IgdG90YWwgYW5kIHRoZW4gZGlzY2FyZCB0aGlzIGNhcmQgZHVyaW5nIHRoZSBuZXh0IHNjb3Jpbmcgb2YgdGhlIE1pZGRsZSBFYXN0IG9yIEFzaWEgKHdoaWNoIGV2ZXIgY29tZXMgZmlyc3QpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNS9zaHV0dGxlLWRpcGxvbWFjeS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NCxcciAgICBcInRpdGxlXCI6XCJUaGUgVm9pY2Ugb2YgQW1lcmljYVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSA0IFVTU1IgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBOT1QgaW4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNi90aGUtdm9pY2Utb2YtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzUsXHIgICAgXCJ0aXRsZVwiOlwiTGliZXJhdGlvbiBUaGVvbG9neVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBhIHRvdGFsIG9mIDMgVVNTUiBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBDZW50cmFsIEFtZXJpY2EgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xOS9saWJlcmF0aW9uLXRoZW9sb2d5L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc2LFxyICAgIFwidGl0bGVcIjpcIlVzc3VyaSBSaXZlciBTa2lybWlzaCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVNTUiBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTIChmYWNlIHVwIGFuZCBhdmFpbGFibGUgZm9yIHBsYXkpLiBJZiB0aGUgVVMgYWxyZWFkeSBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCBhZGQgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIEFzaWEgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMC91c3N1cmktcml2ZXItc2tpcm1pc2gvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzcsXHIgICAgXCJ0aXRsZVwiOlwiQXNrIE5vdCBXaGF0IFlvdXIgQ291bnRyeeKApipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IGRpc2NhcmQgdXAgdG8gdGhlaXIgZW50aXJlIGhhbmQgb2YgY2FyZHMgKGluY2x1ZGluZyBzY29yaW5nIGNhcmRzKSB0byB0aGUgZGlzY2FyZCBwaWxlIGFuZCBkcmF3IHJlcGxhY2VtZW50cyBmcm9tIHRoZSBkcmF3IHBpbGUuIFRoZSBudW1iZXIgb2YgY2FyZHMgdG8gYmUgZGlzY2FyZGVkIG11c3QgYmUgZGVjaWRlZCBiZWZvcmUgZHJhd2luZyBhbnkgcmVwbGFjZW1lbnQgY2FyZHMgZnJvbSB0aGUgZHJhdyBwaWxlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMS9hc2stbm90LXdoYXQteW91ci1jb3VudHJ5LWNhbi1kby1mb3IteW91L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc4LFxyICAgIFwidGl0bGVcIjpcIkFsbGlhbmNlIGZvciBQcm9ncmVzcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBmb3IgZWFjaCBVUyBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIzL2FsbGlhbmNlLWZvci1wcm9ncmVzcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3OSxcciAgICBcInRpdGxlXCI6XCJBZnJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAxOyBEb21pbmF0aW9uOiA0OyBDb250cm9sOiA2OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMTEvcmVnaW9ucy1hZnJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODAsXHIgICAgXCJ0aXRsZVwiOlwiT25lIFNtYWxsIFN0ZXDigKZcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB5b3UgYXJlIGJlaGluZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjaywgdGhlIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gbW92ZSB0aGVpciBtYXJrZXIgMiBzcGFjZXMgZm9yd2FyZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjay4gVGhlIHBsYXllciByZWNlaXZlcyBWUCBvbmx5IGZyb20gdGhlIGZpbmFsIHNwYWNlIG1vdmVkIGludG8uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI2L29uZS1zbWFsbC1zdGVwL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgxLFxyICAgIFwidGl0bGVcIjpcIlNvdXRoIEFtZXJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAyOyBEb21pbmF0aW9uOiA1OyBDb250cm9sOiA2OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDgvMTUvcmVnaW9ucy1zb3V0aC1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgyLFxyICAgIFwidGl0bGVcIjpcIklyYW5pYW4gSG9zdGFnZSBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgYW5kIGFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIElyYW4uIFRoaXMgY2FyZOKAmXMgRXZlbnQgcmVxdWlyZXMgdGhlIFVTIHRvIGRpc2NhcmQgMiBjYXJkcywgaW5zdGVhZCBvZiAxIGNhcmQsIGlmIHRoZSDigJwjOTIg4oCTIFRlcnJvcmlzbeKAnSBFdmVudCBpcyBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzMwL2lyYW5pYW4taG9zdGFnZS1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImFmZmVjdHNcIjo5MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgzLFxyICAgIFwidGl0bGVcIjpcIlRoZSBJcm9uIExhZHkqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gQXJnZW50aW5hIGFuZCByZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gdGhlIFVuaXRlZCBLaW5nZG9tLiBUaGUgVVMgcmVjZWl2ZXMgMSBWUC4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzcg4oCTIFNvY2lhbGlzdCBHb3Zlcm5tZW50c+KAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wMy90aGUtaXJvbi1sYWR5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiY2FuY2Vsc1wiOjgzXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODQsXHIgICAgXCJ0aXRsZVwiOlwiUmVhZ2FuIEJvbWJzIExpYnlhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGZvciBldmVyeSAyIFVTU1IgSW5mbHVlbmNlIGluIExpYnlhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNC9yZWFnYW4tYm9tYnMtbGlieWEvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODUsXHIgICAgXCJ0aXRsZVwiOlwiU3RhciBXYXJzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBpcyBhaGVhZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjaywgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gbG9vayB0aHJvdWdoIHRoZSBkaXNjYXJkIHBpbGUsIHBpY2sgYW55IDEgbm9uLXNjb3JpbmcgY2FyZCBhbmQgcGxheSBpdCBpbW1lZGlhdGVseSBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDUvc3Rhci13YXJzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg2LFxyICAgIFwidGl0bGVcIjpcIk5vcnRoIFNlYSBPaWwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBwbGF5IDggY2FyZHMgKGluIDggYWN0aW9uIHJvdW5kcykgZm9yIHRoaXMgdHVybiBvbmx5LiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNjEg4oCTIE9QRUPigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDYvbm9ydGgtc2VhLW9pbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImNhbmNlbHNcIjo2MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjg3LFxyICAgIFwidGl0bGVcIjpcIlRoZSBSZWZvcm1lcipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgNCBVU1NSIEluZmx1ZW5jZSB0byBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBJZiB0aGUgVVNTUiBpcyBhaGVhZCBvZiB0aGUgVVMgaW4gVlAsIDYgSW5mbHVlbmNlIG1heSBiZSBhZGRlZCB0byBFdXJvcGUgaW5zdGVhZC4gVGhlIFVTU1IgbWF5IG5vIGxvbmdlciBtYWtlIENvdXAgQXR0ZW1wdHMgaW4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNy90aGUtcmVmb3JtZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcImFmZmVjdHNcIjo5MFxyICB9LFxyICB7XHIgICAgXCJpZFwiOjg4LFxyICAgIFwidGl0bGVcIjpcIk1hcmluZSBCYXJyYWNrcyBCb21iaW5nKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGluIExlYmFub24gYW5kIHJlbW92ZSBhIHRvdGFsIG9mIDIgVVMgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBpbiB0aGUgTWlkZGxlIEVhc3QuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEwL21hcmluZS1iYXJyYWNrcy1ib21iaW5nL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODksXHIgICAgXCJ0aXRsZVwiOlwiU292aWV0cyBTaG9vdCBEb3duIEtBTC0wMDcqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBVUyByZWNlaXZlcyAyIFZQLiBUaGUgVVMgbWF5IHBsYWNlIGluZmx1ZW5jZSBvciBtYWtlIFJlYWxpZ25tZW50IHJvbGxzLCB1c2luZyB0aGlzIGNhcmQsIGlmIFNvdXRoIEtvcmVhIGlzIFVTIGNvbnRyb2xsZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzExL3NvdmlldHMtc2hvb3QtZG93bi1rYWwtMDA3L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkwLFxyICAgIFwidGl0bGVcIjpcIkdsYXNub3N0KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQLiBUaGUgVVNTUiBtYXkgbWFrZSBSZWFsaWdubWVudCByb2xscyBvciBhZGQgSW5mbHVlbmNlLCB1c2luZyB0aGlzIGNhcmQsIGlmIHRoZSDigJwjODcg4oCTIFRoZSBSZWZvcm1lcuKAnSBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTIvZ2xhc25vc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MSxcciAgICBcInRpdGxlXCI6XCJPcnRlZ2EgRWxlY3RlZCBpbiBOaWNhcmFndWEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBOaWNhcmFndWEuIFRoZSBVU1NSIG1heSBtYWtlIGEgZnJlZSBDb3VwIEF0dGVtcHQsIHVzaW5nIHRoaXMgY2FyZOKAmXMgT3BlcmF0aW9ucyB2YWx1ZSwgaW4gYSBjb3VudHJ5IGFkamFjZW50IHRvIE5pY2FyYWd1YS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTMvb3J0ZWdhLWVsZWN0ZWQtaW4tbmljYXJhZ3VhL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTIsXHIgICAgXCJ0aXRsZVwiOlwiVGVycm9yaXNtXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllcuKAmXMgb3Bwb25lbnQgbXVzdCByYW5kb21seSBkaXNjYXJkIDEgY2FyZCBmcm9tIHRoZWlyIGhhbmQuIElmIHRoZSDigJwjODIg4oCTIElyYW5pYW4gSG9zdGFnZSBDcmlzaXPigJ0gRXZlbnQgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQsIGEgVVMgcGxheWVyIChpZiBhcHBsaWNhYmxlKSBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgMiBjYXJkcyBmcm9tIHRoZWlyIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE0L3RlcnJvcmlzbS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MyxcciAgICBcInRpdGxlXCI6XCJJcmFuLUNvbnRyYSBTY2FuZGFsKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFsbCBVUyBSZWFsaWdubWVudCByb2xscywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIGRpZSByb2xsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xNy9pcmFuLWNvbnRyYS1zY2FuZGFsL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTQsXHIgICAgXCJ0aXRsZVwiOlwiQ2hlcm5vYnlsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtdXN0IGRlc2lnbmF0ZSBhIHNpbmdsZSBSZWdpb24gKEV1cm9wZSwgQXNpYSwgZXRjLikgdGhhdCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIHRoZSBVU1NSIGNhbm5vdCBhZGQgSW5mbHVlbmNlIHRvIHVzaW5nIE9wZXJhdGlvbnMgcG9pbnRzLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xOC9jaGVybm9ieWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTUsXHIgICAgXCJ0aXRsZVwiOlwiTGF0aW4gQW1lcmljYW4gRGVidCBDcmlzaXNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbXVzdCBpbW1lZGlhdGVseSBkaXNjYXJkIGEgY2FyZCB3aXRoIGFuIE9wZXJhdGlvbnMgdmFsdWUgb2YgMyBvciBtb3JlIG9yIHRoZSBVU1NSIG1heSBkb3VibGUgdGhlIGFtb3VudCBvZiBVU1NSIEluZmx1ZW5jZSBpbiAyIGNvdW50cmllcyBpbiBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xOS9sYXRpbi1hbWVyaWNhbi1kZWJ0LWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NixcciAgICBcInRpdGxlXCI6XCJUZWFyIERvd24gdGhpcyBXYWxsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAzIFVTIEluZmx1ZW5jZSB0byBFYXN0IEdlcm1hbnkuIFRoZSBVUyBtYXkgbWFrZSBmcmVlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgaW4gRXVyb3BlIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC4gVGhpcyBFdmVudCBwcmV2ZW50cyAvIGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzU1IOKAkyBXaWxseSBCcmFuZHTigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzIwL3RlYXItZG93bi10aGlzLXdhbGwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjMsXHIgICAgXCJjYW5jZWxzXCI6NTVcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NyxcciAgICBcInRpdGxlXCI6XCJBbiBFdmlsIEVtcGlyZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUC4gVGhpcyBFdmVudCBwcmV2ZW50cyAvIGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzU5IOKAkyBGbG93ZXIgUG93ZXLigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzIxL2FuLWV2aWwtZW1waXJlL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiY2FuY2Vsc1wiOjU5XHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTgsXHIgICAgXCJ0aXRsZVwiOlwiQWxkcmljaCBBbWVzIFJlbWl4KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMsIGZhY2UtdXAsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuIGFuZCB0aGUgVVNTUiBkaXNjYXJkcyBhIGNhcmQgZnJvbSB0aGUgVVMgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDMvYWxkcmljaC1hbWVzLXJlbWl4L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTksXHIgICAgXCJ0aXRsZVwiOlwiUGVyc2hpbmcgSUkgRGVwbG95ZWQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC4gUmVtb3ZlIDEgVVMgSW5mbHVlbmNlIGZyb20gYW55IDMgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wNC9wZXJzaGluZy1paS1kZXBsb3llZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMCxcciAgICBcInRpdGxlXCI6XCJXYXJnYW1lcypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgREVGQ09OIGxldmVsIGlzIDIsIHRoZSBwbGF5ZXIgbWF5IGltbWVkaWF0ZWx5IGVuZCB0aGUgZ2FtZSBhZnRlciBnaXZpbmcgdGhlaXIgb3Bwb25lbnQgNiBWUC4gSG93IGFib3V0IGEgbmljZSBnYW1lIG9mIGNoZXNzP1wiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wNy93YXJnYW1lcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMSxcciAgICBcInRpdGxlXCI6XCJTb2xpZGFyaXR5KlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAzIFVTIEluZmx1ZW5jZSB0byBQb2xhbmQuIFRoaXMgY2FyZCByZXF1aXJlcyBwcmlvciBwbGF5IG9mIHRoZSDigJwjNjgg4oCTIEpvaG4gUGF1bCBJSSBFbGVjdGVkIFBvcGXigJ0gRXZlbnQgaW4gb3JkZXIgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wOC9zb2xpZGFyaXR5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MyxcciAgICBcInByZXJlcVwiOjY4XHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAyLFxyICAgIFwidGl0bGVcIjpcIklyYW4tSXJhcSBXYXIqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSXJhbiBpbnZhZGVzIElyYXEgb3IgdmljZSB2ZXJzYSAocGxheWVy4oCZcyBjaG9pY2UpLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBlbmVteSBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgaW52YXNpb24gKElyYW4gb3IgSXJhcSkuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wOS9pcmFuLWlyYXEtd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozLFxyICAgIFwiYWZmZWN0c1wiOiA1OVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMyxcciAgICBcInRpdGxlXCI6XCJEZWZlY3RvcnNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IHBsYXkgdGhpcyBjYXJkIGR1cmluZyB0aGUgSGVhZGxpbmUgUGhhc2UgaW4gb3JkZXIgdG8gY2FuY2VsIHRoZSBVU1NSIEhlYWRsaW5lIEV2ZW50IChpbmNsdWRpbmcgYSBzY29yaW5nIGNhcmQpLiBUaGUgY2FuY2VsZWQgY2FyZCBpcyBwbGFjZWQgaW50byB0aGUgZGlzY2FyZCBwaWxlLiBJZiB0aGlzIGNhcmQgaXMgcGxheWVkIGJ5IHRoZSBVU1NSIGR1cmluZyBpdHMgYWN0aW9uIHJvdW5kLCB0aGUgVVMgZ2FpbnMgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDkvZGVmZWN0b3JzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDQsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIENhbWJyaWRnZSBGaXZlXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgYWxsIHNjb3JpbmcgY2FyZHMgaW4gdGhlaXIgaGFuZCBvZiBjYXJkcy4gVGhlIFVTU1IgcGxheWVyIG1heSBhZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBSZWdpb24gbmFtZWQgb24gb25lIG9mIHRoZSByZXZlYWxlZCBzY29yaW5nIGNhcmRzLiBUaGlzIGNhcmQgY2FuIG5vdCBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQgZHVyaW5nIHRoZSBMYXRlIFdhci5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMTEvdGhlLWNhbWJyaWRnZS1maXZlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNSxcciAgICBcInRpdGxlXCI6XCJTcGVjaWFsIFJlbGF0aW9uc2hpcFwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSBVLksuIGlmIHRoZSBVLksuIGlzIFVTLWNvbnRyb2xsZWQgYnV0IE5BVE8gaXMgbm90IGluIGVmZmVjdC4gQWRkIDIgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgaW4gV2VzdGVybiBFdXJvcGUsIGFuZCB0aGUgVVMgZ2FpbnMgMiBWUCwgaWYgdGhlIFUuSy4gaXMgVVMtY29udHJvbGxlZCBhbmQgTkFUTyBpcyBpbiBlZmZlY3QuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzE4L3NwZWNpYWwtcmVsYXRpb25zaGlwL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDYsXHIgICAgXCJ0aXRsZVwiOlwiTk9SQUQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgY29udGFpbmluZyBVUyBJbmZsdWVuY2UsIGF0IHRoZSBlbmQgb2YgZWFjaCBBY3Rpb24gUm91bmQsIGlmIENhbmFkYSBpcyBVUy1jb250cm9sbGVkIGFuZCB0aGUgREVGQ09OIGxldmVsIG1vdmVkIHRvIDIgZHVyaW5nIHRoYXQgQWN0aW9uIFJvdW5kLiBUaGlzIEV2ZW50IGlzIGNhbmNlbGVkIGJ5IHRoZSDigJwjNDIg4oCTIFF1YWdtaXJl4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8yNS9ub3JhZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MSxcciAgICBcImFudGlyZXFcIjogNDJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDcsXHIgICAgXCJ0aXRsZVwiOlwiQ2hlXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbWF5IHBlcmZvcm0gYSBDb3VwIEF0dGVtcHQsIHVzaW5nIHRoaXMgY2FyZOKAmXMgT3BlcmF0aW9ucyB2YWx1ZSwgYWdhaW5zdCBhIG5vbi1CYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIEFtZXJpY2EsIFNvdXRoIEFtZXJpY2Egb3IgQWZyaWNhLiBUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIHNlY29uZCBDb3VwIEF0dGVtcHQsIGFnYWluc3QgYSBkaWZmZXJlbnQgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EsIGlmIHRoZSBmaXJzdCBDb3VwIEF0dGVtcHQgcmVtb3ZlZCBhbnkgVVMgSW5mbHVlbmNlIGZyb20gdGhlIHRhcmdldCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNy9jaGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA4LFxyICAgIFwidGl0bGVcIjpcIk91ciBNYW4gaW4gVGVocmFuKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBjb250cm9scyBhdCBsZWFzdCBvbmUgTWlkZGxlIEVhc3QgY291bnRyeSwgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gZHJhdyB0aGUgdG9wIDUgY2FyZHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgVVMgbWF5IGRpc2NhcmQgYW55IG9yIGFsbCBvZiB0aGUgZHJhd24gY2FyZHMsIGFmdGVyIHJldmVhbGluZyB0aGUgZGlzY2FyZGVkIGNhcmQocykgdG8gdGhlIFVTU1IgcGxheWVyLCB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIEV2ZW50KHMpLiBBbnkgcmVtYWluaW5nIGRyYXduIGNhcmRzIGFyZSByZXR1cm5lZCB0byB0aGUgZHJhdyBwaWxlIGFuZCB0aGUgZHJhdyBwaWxlIGlzIHJlc2h1ZmZsZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI4L291ci1tYW4taW4tdGVocmFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwOSxcciAgICBcInRpdGxlXCI6XCJZdXJpIGFuZCBTYW1hbnRoYSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIENvdXAgQXR0ZW1wdCBwZXJmb3JtZWQgZHVyaW5nIHRoZSByZW1haW5kZXIgb2YgdGhlIFR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzEwL3l1cmktYW5kLXNhbWFudGhhL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEwLFxyICAgIFwidGl0bGVcIjpcIkFXQUNTIFNhbGUgdG8gU2F1ZGlzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTIEluZmx1ZW5jZSB0byBTYXVkaSBBcmFiaWEuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM1NiDigJMgTXVzbGltIFJldm9sdXRpb27igJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTQvYXdhY3Mtc2FsZS10by1zYXVkaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfVxyXVxyIiwiUiA9IFJlYWN0LkRPTVxuUkNURyA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXBcbnVwZGF0ZSA9IFJlYWN0LmFkZG9ucy51cGRhdGVcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG4kID0gWmVwdG9cbnZlbnQgPSByZXF1aXJlICcuL3ZlbnQnXG5cbmNhcmRzRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi9jYXJkcy5qc29uJylcblxuXG4jIEFkZCBmdW5jdGlvbiB0byBaZXB0b1xuJC5nZXRTY3JpcHQgPSAoc3JjLCBmdW5jKSAtPlxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBzY3JpcHQuYXN5bmMgPSBcImFzeW5jXCJcbiAgc2NyaXB0LnNyYyA9IHNyY1xuICBpZiBmdW5jXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmNcblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblxucGFnZXMgPSByZXF1aXJlICcuL3BhZ2VzJ1xudmlld3MgPSByZXF1aXJlICcuL3ZpZXdzJ1xuXG5yb3V0ZXIgPSByZXF1aXJlICcuL3JvdXRlcidcblxuVHdpU3RydWcgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBtaXhpbnM6IFtyb3V0ZXJdXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIG1lbnVBY3RpdmU6bnVsbFxuICAgIHZpZXc6IHt9XG4gICAgc2xpZGVJbjogdHJ1ZVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogKCktPlxuICAgICQoJyNwbGFjZWhvbGRlcicpLmhpZGUoKVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIHZlbnQub24gJ2JvYXJkU3RhdGVDaGFuZ2UnLCAoZ2FtZUlkLCBzdGF0ZUVuYyk9PlxuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiI3tAc3RhdGUudmlldy5uYW1lfSAje2dhbWVJZH1cIixcbiAgICAgICAgXCIjLyN7QHN0YXRlLnZpZXcubmFtZX0vI3tnYW1lSWR9LyN7c3RhdGVFbmN9XCJcblxuICBjb21wb25lbnRXaWxsVXBkYXRlOiAtPlxuICAgICRzbGlkZUluID0gJChAcmVmcy5zbGlkZUluLmdldERPTU5vZGUoKSlcbiAgICAkc2xpZGVJbi5yZW1vdmVDbGFzcyAnc2xpZGVJbi1pbidcbiAgICAjJG1haW5WaWV3ID0gJChAcmVmcy5tYWluVmlldy5nZXRET01Ob2RlKCkpXG4gICAgIyRtYWluVmlldy5yZW1vdmVDbGFzcyAnbWFpblZpZXctb3V0J1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT4gQHNsaWRlSW4oKVxuXG4gIHNsaWRlSW46IC0+XG4gICAgaWYgbm90IEBzdGF0ZS5zbGlkZUluXG4gICAgICByZXR1cm5cbiAgICAkc2xpZGVJbiA9ICQoQHJlZnMuc2xpZGVJbi5nZXRET01Ob2RlKCkpXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJHNsaWRlSW4uYWRkQ2xhc3MoJ3NsaWRlSW4taW4nKVxuICAgICwgMTBcblxuXG4gIHJlbmRlcjogLT5cbiAgICAjIElmIHRoZSByb3V0ZXIgaGFzbid0IGtpY2tlZCBpbiwgZG8gbm90aGluZ1xuICAgIGlmIG5vdCBAc3RhdGU/LnZpZXdcbiAgICAgIG1haW5WaWV3ID0gUi5wIGNsYXNzTmFtZTogJ2xlYWQnLCAnVHdpU3RydWcgaXMgbG9hZGluZy4uLidcbiAgICBlbHNlXG4gICAgICBtYWluVmlldyA9IHN3aXRjaCBAc3RhdGUudmlldy5uYW1lXG4gICAgICAgIHdoZW4gJ2hvbWUnIHRoZW4gcGFnZXMuSG9tZVxuICAgICAgICAgIGNhcmRzOiBAcHJvcHMuY2FyZHNcbiAgICAgICAgICBzdGF0ZTogQHN0YXRlLnZpZXcuZGF0YS5zdGF0ZVxuICAgICAgICB3aGVuICdjYXJkJyB0aGVuIHBhZ2VzLkNhcmQgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdjYXJkcycgdGhlbiBwYWdlcy5DYXJkc1xuICAgICAgICAgIGNhcmRzOiBAcHJvcHMuY2FyZHNcbiAgICAgICAgICBzdGF0ZTogQHN0YXRlLnZpZXcuZGF0YS5zdGF0ZVxuICAgICAgICB3aGVuICdjb3VudHJpZXMnIHRoZW4gcGFnZXMuQ291bnRyaWVzKClcbiAgICAgICAgI3doZW4gJ2JvYXJkJyB0aGVuIHJldHVybiBCb2FyZFBpY1ZpZXcoKVxuICAgICAgICB3aGVuICdib2FyZCcgdGhlbiBwYWdlcy5Cb2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2dhbWUnIHRoZW4gcGFnZXMuR2FtZSBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2Fib3V0JyB0aGVuIHBhZ2VzLkFib3V0KClcbiAgICAgICAgd2hlbiAnd2hvb3BzJyB0aGVuIHBhZ2VzLldob29wcygpXG5cbiAgICBtYWluVmlld0NsYXNzID0gY3hcbiAgICAgICdjb250YWluZXInOiBAc3RhdGUudmlldy5uYW1lIG5vdCBpbiBbJ2JvYXJkJywgJ2dhbWUnXVxuICAgICAgJ3NsaWRlSW4nOiBAc3RhdGUuc2xpZGVJblxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIHZpZXdzLk5hdiBrZXk6J25hdicsIGFjdGl2ZTogQHN0YXRlLm1lbnVBY3RpdmVcbiAgICAgIFIuZGl2IGtleTonbWFpbnZpZXcnLCByZWY6ICdzbGlkZUluJywgY2xhc3NOYW1lOiBtYWluVmlld0NsYXNzLCBtYWluVmlld1xuICAgICAgdmlld3MuRm9vdGVyIGtleTonZm9vdGVyJ1xuICAgIF1cblxuXG4jIEFkZCBrZXlzIHRvIGNhcmRzXG5hZGRSZWFjdEtleSA9IChlbCktPlxuICBlbC5rZXkgPSBcInJrLSN7ZWwuaWR9XCJcbiAgZWxcblxuUmVhY3QucmVuZGVyQ29tcG9uZW50IFR3aVN0cnVnKHtjYXJkczogY2FyZHNEYXRhLm1hcChhZGRSZWFjdEtleSl9KSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2FwcCdcbiIsIlN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4vU3RhdGVIaXN0b3J5J1xuc3VwZXJwb3dlclRvSW5kZXggPSByZXF1aXJlICcuL3N1cGVycG93ZXJUb0luZGV4J1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi9zdGF0ZUVuY29kZXInXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQm9hcmRTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBTdGF0ZUhpc3RvcnlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIGVuY29kZWQgPSBzdGF0ZUVuY29kZXIuZW5jb2RlIHN0YXRlXG4gICAgI2NvbnNvbGUubG9nICdCb2FyZFN0YXRlSGlzdG9yeSBlbmNvZGVTdGF0ZScsIHN0YXRlLCBlbmNvZGVkXG4gICAgZW5jb2RlZFxuXG4gIGRlY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBkZWNvZGVkID0gc3RhdGVFbmNvZGVyLmRlY29kZSBzdGF0ZVxuICAgICNjb25zb2xlLmxvZyAnQm9hcmRTdGF0ZUhpc3RvcnkgZGVjb2RlU3RhdGUnLCBzdGF0ZSwgZGVjb2RlZFxuICAgIGRlY29kZWRcbiAgXG4gIGFkZDogKHN0YXRlLCBtZXRhKS0+XG4gICAgIyBJZiBpdCdzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBwcmV2aW91cyBlbnRyeSwgZG9uJ3QgdXBkYXRlIHRoZSBoaXN0b3J5XG4gICAgIyBUaGlzIGlzIHNvIHdlIGNhbiBiYXRjaCB0aGUgY2hhbmdlcyBmb3IgZGlzcGxheVxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICAjY29uc29sZS5sb2cgY3VyXG4gICAgaWYgbm90IGN1cj9cbiAgICAgIHJldHVybiBzdXBlciBzdGF0ZSwgbWV0YVxuXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgbnMgPSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgIGNtID0gY3VyLm1ldGFcbiAgICBjcyA9IGN1ci5zdGF0ZVxuICAgXG4gICAgIyBTZXQgaXAgZGVsdGEgdG8gYmUgYW4gYXJyYXlcbiAgICBpZiBtZXRhLnR5cGUgPT0gJ2lwJ1xuICAgICAgdXNhID0gaWYgbm0uc2lkZSA9PSAndXNhJyB0aGVuIG5tLmRlbHRhIGVsc2UgMFxuICAgICAgdXNzciA9IGlmIG5tLnNpZGUgPT0gJ3Vzc3InIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICBubS5kZWx0YSA9IFt1c2EsIHVzc3JdXG5cblxuICAgIGlmIG5tLnR5cGUgPT0gY20udHlwZSBhbmQgbnMuZ2FtZS5yb3VuZCA9PSBjcy5nYW1lLnJvdW5kXG4gICAgICBzaWRlU2FtZSA9IGlmIG5tLmlkID09ICdzY29yZScgdGhlbiB0cnVlIGVsc2Ugbm0uc2lkZSA9PSBjbS5zaWRlXG4gICAgICBpZFNhbWUgPSBubS5pZCA9PSBjbS5pZFxuXG4gICAgICB0eXBlSXBTYW1lID0gbm0udHlwZSA9PSAnaXAnIGFuZCBubS5jb3VudHJ5LmlkID09IGNtLmNvdW50cnkuaWRcbiAgICAgIHR5cGVWYWxTYW1lID0gbm0udHlwZSA9PSAndmFsJyBhbmQgbm0uaWQgIT0gJ3R1cm4nIGFuZFxuICAgICAgbm0uaWQgIT0gJ3JvdW5kJyBhbmQgc2lkZVNhbWUgYW5kIGlkU2FtZVxuXG4gICAgICBpZiB0eXBlSXBTYW1lIG9yIHR5cGVWYWxTYW1lXG4gICAgICAgIHJldHVybiBAbWVyZ2VXaXRoQ3VycmVudCBucywgbm1cblxuICAgIHN1cGVyIG5zLCBubVxuXG5cbiAgbWVyZ2VXaXRoQ3VycmVudDogKHN0YXRlLG1ldGEpLT5cbiAgICBjID0gXy5jbG9uZURlZXAgQGdldEN1cnJlbnQoKVxuICAgIG5tID0gXy5jbG9uZURlZXAgbWV0YVxuICAgIGNtID0gYy5tZXRhXG4gICAgc3dpdGNoIGNtLnR5cGVcbiAgICAgIHdoZW4gJ2lwJ1xuICAgICAgICBubS5kZWx0YVswXSArPSBjbS5kZWx0YVswXVxuICAgICAgICBubS5kZWx0YVsxXSArPSBjbS5kZWx0YVsxXVxuICAgICAgICBubS5zaWRlID0gJ2JvdGgnXG4gICAgICAgIGlmIG5tLmRlbHRhWzBdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3Vzc3InXG4gICAgICAgIGlmIG5tLmRlbHRhWzFdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3VzYSdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgICAgd2hlbiAndmFsJ1xuICAgICAgICBubS5vbGQgPSBjbS5vbGRcbiAgICAgICAgaWYgbm0ub2xkID09IG5tLm5ld1xuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcbiAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgaWYgcG9wID09IHRydWVcbiAgICAgIEBzdGF0ZXMucG9wKClcbiAgICAgIEBjdXJyZW50LS1cbiAgICAgIGlmKEBsYXRlc3QgPiBAY3VycmVudClcbiAgICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBlbHNlXG4gICAgICBAc3RhdGVzW0BjdXJyZW50XSA9XG4gICAgICAgIG1ldGE6IG5tXG4gICAgICAgIHN0YXRlOiBAZW5jb2RlU3RhdGUgc3RhdGVcblxuICAgIEBzYXZlKClcbiAgICBAZW1pdCAnbWVyZ2UnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VwZGF0ZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAnY2hhbmdlJ1xuXG5cbiAgIyBUdXJuIHN0YXRlIGludG8gYSBtaW5pbWFsIHJlcHJlc2VudGF0aW9uXG4gIGVuY29kZUN1cnJlbnQ6ICgpLT5cbiAgICBjdXIgPSBAZ2V0Q3VycmVudCgpXG4gICAgcmV0dXJuIGlmIG5vdCBjdXI/XG4gICAgc3RhdGVFbmNvZGVyLmVuY29kZSBAZ2V0Q3VycmVudCgpPy5zdGF0ZVxuXG5cbiAgdG9nZ2xlVmlzaWJsZTogKGZvcmNlLCBzaG93VGVtcD1mYWxzZSktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIEBzaG93VGVtcCA9IHNob3dUZW1wXG4gICAgQHNob3cgPSBpZiBmb3JjZT8gdGhlbiBmb3JjZSBlbHNlICFAc2hvd1xuICAgIEBlbWl0ICd0b2dnbGVWaXNpYmxlJywgQHNob3dcbiAgICBAZW1pdCAndXBkYXRlJ1xuXG4gIHNob3dUaGVuSGlkZTogKHRpbWUgPSAxMDAwKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgaWYgbm90IEBzaG93XG4gICAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlLCB0cnVlXG4gICAgaWYgQHNob3dUZW1wXG4gICAgICBAc2hvd1RoZW5IaWRlVGltZW91dCA9IHNldFRpbWVvdXQgQHRvZ2dsZVZpc2libGUuYmluZCh0aGlzLCBmYWxzZSksIHRpbWVcblxuICBoaWRlOiAtPlxuICAgIEB0b2dnbGVWaXNpYmxlIGZhbHNlXG5cbiAgc2hvdzogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlXG5cbiAgIyBjYiBjYW4gYmUgYSBjYWxsYmFjayBmdW5jdGlvbiwgc2hvcnRoYW5kIG9iaiwgb3IgYSBrZXkgbmFtZVxuICAjIGh0dHA6Ly9sb2Rhc2guY29tL2RvY3MjZmluZEluZGV4XG4gIGZpbmRTdGF0ZUluZGV4OiAoY2IpLT5cbiAgICBpbmRleCA9IF8uZmluZEluZGV4IEBzdGF0ZXMsIGNiXG4gICAgaWYgaW5kZXggIT0gLTFcbiAgICAgIHJldHVybiBpbmRleCBcbiIsImNsYXNzIE1pY3JvRXZlbnRDbGFzc1xuICBfaW5pdDotPiBAX2xpc3RuIG9yIEBfbGlzdG4gPSB7fVxuICBfY3JlYXRlOihlKS0+IEBfaW5pdCgpW2VdIG9yICBAX2luaXQoKVtlXSA9IFtdXG4gIG9uOihlLCBmKS0+IChAX2NyZWF0ZSBlKS5wdXNoIGZcbiAgb2ZmOihlLCBmKS0+ICh0LnNwbGljZSAodC5pbmRleE9mIGYpLCAxKSBpZiAodCA9IEBfaW5pdCgpW2VdKT9cbiAgb25jZTooZSwgZiktPiBAb24gZSwgKHQgPSA9PiAoQG9mZiBlLCB0KSAmJiBmLmFwcGx5IEAsIGFyZ3VtZW50cylcbiAgZW1pdDooZSwgci4uLiktPiBsLmFwcGx5IEAsIHIgZm9yIGwgaW4gdCBpZiAodCA9IEBfaW5pdCgpW2VdKT87IDBcbiAgQG1peGluPSh0KS0+IHQ6OltwXSA9IEA6OltwXSBmb3IgcCBvZiBAOjo7IDBcblxubW9kdWxlLmV4cG9ydHMgPSBNaWNyb0V2ZW50Q2xhc3NcbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vTWljcm9FdmVudENsYXNzJ1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbiAgIyBAaWQgaXMgdXNlZCBmb3IgcGVyc2lzdGFuY2VcbiAgY29uc3RydWN0b3I6IChvcHRzKS0+XG4gICAgI18uYXNzaWduIHRoaXMsIE1pY3JvRXZlbnRcbiAgICBAc3RhdGVzID0gW11cbiAgICBAc3RhZ2VkID0gW11cbiAgICBAbGF0ZXN0ID0gbnVsbFxuICAgIEBjdXJyZW50ID0gbnVsbFxuICAgIEBzaG93ID0gZmFsc2VcbiAgICBAaWQgPSBvcHRzLmlkXG4gICAgQHN0YXRlc1RvU2F2ZSA9IDUwXG4gIFxuICAjIEV4dGVuZCB0byBhZGQgY3VzdG9tIGVuY29kaW5nL2RlY29kaW5nIGZ1bmN0aW9uYWxpdHlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG5cbiAgZGVjb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG4gIFxuICBzYXZlOiAtPlxuICAgIHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UgMCwgQHN0YXRlc1RvU2F2ZVxuICAgIFxuICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeSBzdGF0ZXNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSBAaWQsIGpzb25cblxuICBsb2FkOiAtPlxuICAgIHN0YXRlcyA9IEpTT04ucGFyc2UgbG9jYWxTdG9yYWdlLmdldEl0ZW0oQGlkKVxuICAgIGlmIHN0YXRlcyBhbmQgXy5pc0FycmF5IHN0YXRlc1xuICAgICAgQHN0YXRlcyA9IHN0YXRlc1xuICAgICAgQGN1cnJlbnQgPSBzdGF0ZXMubGVuZ3RoIC0gMVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICAgIEBlbWl0ICdsb2FkJ1xuICAgICAgQGVtaXQgJ3VwZGF0ZSdcbiAgICAgIHJldHVybiBzdGF0ZXNcblxuICBhZGQ6IChzdGF0ZSwgbWV0YT17fSktPlxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcblxuICAgIGlmIG5vdCBAY3VycmVudD9cbiAgICAgIEBjdXJyZW50ID0gMFxuICAgIGVsc2VcbiAgICAgIEBjdXJyZW50KytcblxuICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgbmV3U3RhdGUgPVxuICAgICAgc3RhdGU6IEBlbmNvZGVTdGF0ZSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgICAgbWV0YTogXy5jbG9uZURlZXAgbWV0YVxuXG4gICAgQHN0YXRlc1tAY3VycmVudF0gPSBuZXdTdGF0ZVxuXG4gICAgQHNhdmUoKVxuXG4gICAgQGVtaXQgJ2FkZCcsIG5ld1N0YXRlLCAnWUVBSCdcbiAgICBAZW1pdCAndXBkYXRlJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICdjaGFuZ2UnXG4gIFxuICB1bmRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPiAwXG4gICAgICBAY3VycmVudC0tXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VuZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuICBcbiAgcmVkbzogKCktPlxuICAgIGlmIEBjdXJyZW50IDwgQGxhdGVzdFxuICAgICAgQGN1cnJlbnQrK1xuICAgIEBzaG93VGhlbkhpZGUoKVxuICAgIHN0YXRlID0gQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdyZWRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBzdGF0ZVxuICAgIEBlbWl0ICdjaGFuZ2UnXG4gICAgc3RhdGVcblxuICBnb1RvOiAoaW5kZXgpLT5cbiAgICByZXR1cm4gaWYgbm90IGluZGV4P1xuICAgIEBjdXJyZW50ID0gaW5kZXhcbiAgICBAZW1pdCAnZ29UbycsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cbiAgZ2V0OiAoaW5kZXgpLT5cbiAgICByZXR1cm4gbnVsbCBpZiBAc3RhdGVzLmxlbmd0aCA9PSAwXG4gICAgc2ggPSBfLmNsb25lRGVlcCBAc3RhdGVzW2luZGV4XVxuICAgIHNoLnN0YXRlID0gQGRlY29kZVN0YXRlIHNoLnN0YXRlXG4gICAgc2hcblxuICBnZXRDdXJyZW50OiAoKS0+XG4gICAgQGdldChAY3VycmVudClcblxuICBnZXRQcmV2OiAtPlxuICAgIHByZXYgPSBAY3VycmVudCAtIDFcbiAgICBpZiBwcmV2IDwgMCB0aGVuIHByZXYgPSAwXG4gICAgcmV0dXJuIEBnZXQocHJldilcblxuICBnZXRBbGw6IC0+XG4gICAgXy5tYXAgQHN0YXRlcywgKHNoLCBpbmRleCk9PlxuICAgICAgQGdldCBpbmRleFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVIaXN0b3J5XG4iLCJjeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IChwcm9wcykgLT5cbiAgb3duZXJDbGFzcyA9IFwib3duZXItI3twcm9wcy5vd25lcn1cIlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBvd25lckNsYXNzICsgJyAnICsgY2xhc3Nlc1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiY3MgPVxuICAnYSc6ICdhcydcbiAgJ2UnOiAnZXUnXG4gICdjJzogJ2NhJ1xuICAncyc6ICdzYSdcbiAgJ2YnOiAnYWYnXG4gICdtJzogJ21lJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IChsZXR0ZXIpLT4gY3NbbGV0dGVyXVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiBlbCBpZiBlbFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwsaSxhcnIpLT4gYXJyLmluZGV4T2YoZWwpID09IGlcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IDEgPD0gZWwgPD0gMTEwXG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4gIHR1cm46ICh2YWwpLT5cbiAgICBzd2l0Y2ggdmFsXG4gICAgICB3aGVuIDAgdGhlbiAnUydcbiAgICAgIHdoZW4gMTEgdGhlbiAnRSdcbiAgICAgIGVsc2UgdmFsXG4gIHJvdW5kOiAodmFsKS0+XG4gICAgaWYgdmFsID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChpZCwgdmFsLCBvcHQpLT5cbiAgc3dpdGNoIGlkXG4gICAgd2hlbiAndHVybidcbiAgICAgIHN0YXJ0ID0gJ1MnXG4gICAgICBlbmQgPSAnRSdcbiAgICAgIGlmIG9wdCA9PSAnbG9uZydcbiAgICAgICAgc3RhcnQgPSAnTmV3IEdhbWUnXG4gICAgICAgIGVuZCA9ICdHYW1lIEVuZCdcbiAgICAgIHN3aXRjaCB2YWxcbiAgICAgICAgd2hlbiAwIHRoZW4gc3RhcnRcbiAgICAgICAgd2hlbiAxMSB0aGVuIGVuZFxuICAgICAgICBlbHNlIHZhbFxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgaCA9IGlmIG9wdCA9PSAnbG9uZycgdGhlbiAnSGVhZGxpbmUnIGVsc2UgJ0gnXG4gICAgICBpZiB2YWwgPT0gMCB0aGVuIGggZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgICB3aGVuICdzY29yZSdcbiAgICAgIE1hdGguYWJzIHZhbFxuICAgIGVsc2VcbiAgICAgIHZhbFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPiBpZiBudW0gPiAwIHRoZW4gXCIrI3tudW19XCIgZWxzZSBudW1cbiIsIiMgRW5jb2RlL2RlY29kZSBudW1iZXJzIGludG8gc2luZ2xlLWNoYXIgcmVwcmVzZW50YXRpb25zXG4jIDAtMzUgIC0+IDAsMSwyLi5hLGIsYy4uelxuIyAzNi02MSAtPiBBLEIsQy4uLlxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChuKS0+XG4gICAgaWYgbiA8IDM2IHRoZW4gb3V0ID0gbi50b1N0cmluZygzNikgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlIG4gKyAyOVxuXG4gIGRlY29kZTogKGMgPSAnMCcpLT5cbiAgICBjb2RlID0gYy5jaGFyQ29kZUF0IDBcbiAgICAjIENhbGN1bGF0ZSBvZmZzZXQgZnJvbSBjaGFyY29kZSB0byB2YWx1ZVxuICAgIG9mZnNldCA9IHN3aXRjaFxuICAgICAgIyAwLTlcbiAgICAgIHdoZW4gNDggPD0gY29kZSA8PSA1NyB0aGVuIDQ4XG4gICAgICAjIDEwLTM1XG4gICAgICB3aGVuIDk3IDw9IGNvZGUgPD0gMTIyIHRoZW4gODdcbiAgICAgICMgMzYtNjFcbiAgICAgIHdoZW4gNjUgPD0gY29kZSA8PSA5MCB0aGVuIDI5XG5cbiAgICBjb2RlIC0gb2Zmc2V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiIyBIYXNoZWQgcXNcbiMgSGFuZGxlcyBzdHJpbmdzIGFuZCBhcnJheXNcbiMgQW55dGhpbmcgd2l0aCBhIGNvbW1hIHdpbGwgYmUgcGFyc2VkIGFzIGFuIGFycmF5XG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1lcmdlOiAob2JqKS0+XG5cbiAgZ2V0OiAoZmllbGQpLT5cbiAgXG4gIHNldDogKGZpZWxkLCB2YWwpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcXNPYmpbZmllbGRdID0gdmFsXG4gICAgQHNldFFTIEB0b1FTKHFzT2JqKVxuXG4gIGRlbGV0ZTogKGZpZWxkKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHJldHVybiBpZiBub3QgcXNPYmo/XG4gICAgZGVsZXRlIHFzT2JqW2ZpZWxkXVxuICAgIEBzZXRRUyBAdG9RUyBxc09ialxuXG4gIGVuY29kZUNoYXJzSW46IFsnPScsJyYnXVxuXG4gIGVuY29kZUNoYXJzT3V0OlsnJTNEJywnJTI2J11cblxuICBlbmNvZGU6IChvYmopLT5cbiAgICBpZiBfLmlzQXJyYXkgb2JqXG4gICAgICBvYmogPSBvYmouam9pbignLCcpXG4gICAgb2JqLnJlcGxhY2UoQGVuY29kZUNoYXJzSW4sIEBlbmNvZGVDaGFyc091dClcblxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBzdHIgPSBzdHIucmVwbGFjZShAZW5jb2RlQ2hhcnNPdXQsIEBlbmNvZGVDaGFyc0luKVxuICAgIGlmIHN0ci5pbmRleE9mKCcsJykgIT0gLTFcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLCcpXG4gICAgc3RyXG5cblxuICB0b09iajogKHFzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKT9bMV0pLT5cbiAgICBpZiBub3QgcXNcbiAgICAgIHJldHVyblxuICAgIG91dCA9IHt9XG4gICAgcGFpcnMgPSBxcy5zcGxpdCgnJicpXG4gICAgcGFpcnM/LmZvckVhY2ggKHBhaXIpPT5cbiAgICAgIGt2QXJyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBvdXRbQGRlY29kZShrdkFyclswXSldID0gQGRlY29kZShrdkFyclsxXSlcbiAgICBvdXRcblxuICB0b1FTOiAob2JqKS0+XG4gICAgcGFpcnMgPSBbXVxuICAgIGZvciBvd24gayx2IG9mIG9ialxuICAgICAgcGFpcnMucHVzaCBcIiN7QGVuY29kZShrKX09I3tAZW5jb2RlKHYpfVwiXG4gICAgcGFpcnMuam9pbignJicpXG4gICAgICAgXG4gIHNldFFTOiAocXMpLT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF0gKyAnPycgKyBxc1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCktPlxuICByYW5nZXMgPVxuICAgIHNjb3JlOiBbLTIwLCAyMF1cbiAgICB0dXJuOiBbMCwgMTFdXG4gICAgcm91bmQ6IFswLCAxNl1cbiAgICBkZWZjb246IFsxLCA1XVxuICAgIG1pbG9wczogWzAsIDVdXG4gICAgc3BhY2U6IFswLCA4XVxuXG4gIHJhbmdlID0gcmFuZ2VzW2lkXVxuXG4gIGlmIHZhbCA8IHJhbmdlWzBdXG4gICAgcmV0dXJuIHJhbmdlWzFdXG4gIGlmIHZhbCA+IHJhbmdlWzFdXG4gICAgcmV0dXJuIHJhbmdlWzBdXG4gIHZhbFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhcmdzLi4uKS0+XG4gIGRvY3VtZW50LnRpdGxlID0gYXJncy5qb2luKCcgfCAnKSArICcgLSBUd2lTdHJ1ZydcbiIsIm1vZHVsZS5leHBvcnRzID0gKGRpciktPiBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID4gMFxuICAgIHJldHVybiAnKydcbiAgaWYgbnVtIDwgMFxuICAgIHJldHVybiAnLSdcbiAgcmV0dXJuICcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID09IDBcbiAgICBvdXQgPSAn4oCUJ1xuICBpZiBudW0gPiAwXG4gICAgb3V0ID0gXCIrI3tudW19XCJcbiAgaWYgbnVtIDwgMFxuICAgIG91dCA9IG51bVxuICBvdXRcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBzaWduID0gJydcbiAgaWYgbnVtID4gMFxuICAgIHNpZ24gPSAnKydcbiAgY29uc29sZS5sb2cgc2lnbiArIG51bVxuICByZXR1cm4gc2lnbiArIG51bVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoYSxiKS0+IGEtYlxuIiwibnVtVG9DaGFyID0gcmVxdWlyZSAnLi9udW1Ub0NoYXInXG5cbiMgVHVybiBhIGdhbWUgc3RhdGUgb2JqZWN0IGludG8gYSBzdHJpbmcsIHZhbHVlcyBkZWxpbWl0ZWQgYnkgaW5kZXggaW4gdGhlIHN0cmluZ1xuI1xuIyBCeXRlcyAgICAgSXRlbXNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgMC03ICAgICAgIEJvYXJkIHN0YXRlOiAgU2NvcmUsIERlZmNvbiwgVHVybiwgUm91bmQsXG4jICAgICAgICAgICAgICAgICAgICAgICAgIE1PIFVTQSwgTU8gVVNTUiwgU3BhY2UgVVNBLCBTcGFjZSBVU1NSXG4jIDgtMTc2ICAgICBDb3VudHJ5IElQcywgMiBieXRlcyBlYWNoLCBzZXF1ZW50aWFsbHkgYnkgaWRcbm1vZHVsZS5leHBvcnRzID1cbiAgZW5jb2RlOiAoc3RhdGUpLT5cbiAgICBnYW1lID0gc3RhdGUuZ2FtZVxuICAgIGlwcyA9IHN0YXRlLmlwc1xuXG4gICAgIyBTY29yZSBpcyBmcm9tIC0yMCB0byArMjAsIGJ1dCB0aGlzIGVuY29kZXIgaXMgcG9zaXRpdmUgaW50ZWdlcnMgb25seVxuICAgIGJvYXJkID0gW1xuICAgICAgZ2FtZS5zY29yZSArIDIwLCBnYW1lLmRlZmNvbiwgZ2FtZS50dXJuLCBnYW1lLnJvdW5kLFxuICAgICAgZ2FtZS5taWxvcHNbMF0sIGdhbWUubWlsb3BzWzFdLCBnYW1lLnNwYWNlWzBdLCBnYW1lLnNwYWNlWzFdXG4gICAgXVxuXG4gICAgIyBGaXJzdCAyIGlwcyBhcmUgdGhlIHN1cGVycG93ZXJzIC0gcHJldHR5IHVzZWxlc3MsIHNob3VsZCBjaGFuZ2UgaW4gZnV0dXJlXG4gICAgYm9hcmQuY29uY2F0IF8uZmxhdHRlbiBpcHMuc2xpY2UoMilcbiAgICAgIC5tYXAgbnVtVG9DaGFyLmVuY29kZVxuICAgICAgLmpvaW4gJydcbiAgICAgIFxuICBkZWNvZGU6IChzdHIpLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3Qgc3RyP1xuICAgIGFyciA9IHN0ci5zcGxpdCgnJykubWFwIChlbCktPiBudW1Ub0NoYXIuZGVjb2RlIGVsXG4gICAgYm9hcmRBcnIgPSBhcnIuc2xpY2UoMCw4KVxuICAgIGlwQXJyID0gYXJyLnNsaWNlKDgpXG5cbiAgICBbc2NvcmUsIGRlZmNvbiwgdHVybiwgcm91bmQsIG1vdXNhLCBtb3Vzc3IsIHNwdXNhLCBzcHVzc3JdID0gYm9hcmRBcnJcbiAgICBtaWxvcHMgPSBbbW91c2EsIG1vdXNzcl1cbiAgICBzcGFjZSA9IFtzcHVzYSwgc3B1c3NyXVxuICAgIHNjb3JlIC09IDIwXG4gICAgZ2FtZSA9IHtzY29yZSwgZGVmY29uLCB0dXJuLCByb3VuZCwgbWlsb3BzLCBzcGFjZX1cblxuICAgIGlwcyA9IFtdXG4gICAgZm9yIGlwLCBpbmRleCBpbiBpcEFyclxuICAgICAgaXBzSW5kZXggPSBNYXRoLmZsb29yIGluZGV4LzJcbiAgICAgIHNpZGVJbmRleCA9IGluZGV4ICUgMlxuICAgICAgaWYgc2lkZUluZGV4ID09IDBcbiAgICAgICAgaXBzW2lwc0luZGV4XSA9IFtpcF1cbiAgICAgIGVsc2VcbiAgICAgICAgaXBzW2lwc0luZGV4XVtzaWRlSW5kZXhdID0gaXBcblxuICAgICMgQWRkIHRoZSBzdXBlcnBvd2VyIElQcyBiYWNrIGluXG4gICAgaXBzLnVuc2hpZnQgWzAsMF0sIFswLDBdXG5cbiAgICB7Z2FtZSwgaXBzfVxuXG4iLCJnZXRJcFN0YXRzID0gKGlwcywgY291bnRyaWVzKS0+XG4gIGFjY3VtdWxhdG9yID0gLT5cbiAgICBidGw6IDBcbiAgICBub246IDBcbiAgICB0b3RhbDogMFxuICAgIGV1OiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGFzOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIG1lOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGFmOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIHNhOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuICAgIGNhOiAgIG5vbjogMCwgYnRsOiAwLCB0b3RhbDogMFxuXG4gIGZuID0gKGFjY3VtLCBpcHMsIGNvdW50cnlJZCktPlxuICAgIGNvdW50cnkgPSBfLmZpbmQgY291bnRyaWVzLCBpZDogcGFyc2VJbnQoY291bnRyeUlkLCAxMClcbiAgICBpZiBpcHNbMF0gLSBpcHNbMV0gPj0gY291bnRyeS5zdGFiXG4gICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0udG90YWwrK1xuICAgICAgYWNjdW0udG90YWwrK1xuICAgICAgaWYgY291bnRyeS5idGxcbiAgICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLmJ0bCsrXG4gICAgICAgIGFjY3VtLmJ0bCsrXG4gICAgICBlbHNlXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5ub24rK1xuICAgICAgICBhY2N1bS5ub24rK1xuICAgIGFjY3VtXG5cbiAgIyBGbGlwcGVkIHRvIGhhdmUgVVNTUiBpcHMgZmlyc3RcbiAgaXBzUmV2ID0gXy5tYXAgaXBzLCAoaXBzKS0+IF8uY2xvbmVEZWVwKGlwcykucmV2ZXJzZSgpXG5cbiAgdXNhID0gXy5yZWR1Y2UgaXBzLCBmbiwgYWNjdW11bGF0b3IoKVxuICB1c3NyID0gXy5yZWR1Y2UgaXBzUmV2LCBmbiwgYWNjdW11bGF0b3IoKVxuXG4gIHt1c2EsIHVzc3J9XG5cbnN1bVJlZ2lvbiA9IChtZXRyaWMsIHN1bSwgcmVnaW9uKS0+IHN1bSArIHJlZ2lvblttZXRyaWNdXG5cbmdldFJlZ2lvblN0YXRzID0gKGlwU3RhdHMsIHJlZ2lvbnMpLT5cbiAgc3RhdHMgPSBfLm1hcFZhbHVlcyBpcFN0YXRzLCAoaGVybywgcG93ZXIsIHBvd2VycyktPlxuICAgIHZpbGxhaW4gPSBpZiBwb3dlciA9PSAndXNhJyB0aGVuIHBvd2Vycy51c3NyIGVsc2UgcG93ZXJzLnVzYVxuICAgIHJlZ2lvblN0YXRzID0gcmVnaW9ucy5tYXAgKHJlZ2lvbiktPlxuICAgICAgaFJlZ2lvbiA9IGhlcm9bcmVnaW9uLmlkXVxuICAgICAgdlJlZ2lvbiA9IHZpbGxhaW5bcmVnaW9uLmlkXVxuICAgICAgZG9taW5hdGlvbiA9IGhSZWdpb24ubm9uID4gMCBhbmQgaFJlZ2lvbi5idGwgPiB2UmVnaW9uLmJ0bCBhbmQgaFJlZ2lvbi50b3RhbCA+IHZSZWdpb24udG90YWxcbiAgICAgIGNvbnRyb2wgPSBoUmVnaW9uLmJ0bCA9PSByZWdpb24ubnVtQnRsIGFuZCBoUmVnaW9uLnRvdGFsID4gdlJlZ2lvbi50b3RhbFxuICAgICAgcHJlc2VuY2UgPSBub3QgZG9taW5hdGlvbiBhbmQgbm90IGNvbnRyb2wgYW5kIGhSZWdpb24udG90YWwgPiAwXG4gICAgICB7IHByZXNlbmNlLCBkb21pbmF0aW9uLCBjb250cm9sIH1cblxuICAgIHJlZ2lvblN0YXRzID0gXy56aXBPYmplY3QgXy5wbHVjayhyZWdpb25zLCAnaWQnKSwgcmVnaW9uU3RhdHNcbiAgICByZWdpb25TdGF0cyA9IF8uYXNzaWduIHJlZ2lvblN0YXRzLFxuICAgICAgcHJlc2VuY2U6IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAncHJlc2VuY2UnKSwgMFxuICAgICAgZG9taW5hdGlvbjogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdkb21pbmF0aW9uJyksIDBcbiAgICAgIGNvbnRyb2w6IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnY29udHJvbCcpLCAwXG4gIFxuICBzdGF0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IChpcHMsIGNvdW50cnlBcnIsIHJlZ2lvbkFyciktPlxuICBjb3VudHJpZXMgPSBnZXRJcFN0YXRzKGlwcywgY291bnRyeUFycilcbiAgcmVnaW9ucyA9IGdldFJlZ2lvblN0YXRzKGNvdW50cmllcywgcmVnaW9uQXJyKVxuICB7Y291bnRyaWVzLCByZWdpb25zfVxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKHBvd2VyKS0+IGlmIHBvd2VyID09ICd1c2EnIHRoZW4gMCBlbHNlIDFcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0cj0nJyktPiBzdHIuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyLCBsZW49MyktPiAoJzAwMCcgKyBzdHIpLnN1YnN0cigtbGVuLGxlbilcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0Fib3V0VmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Fib3V0VmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTgnLCBbXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTEyJyxcbiAgICAgICAgICAgIFIuaDIge30sIFtcbiAgICAgICAgICAgICAgXCJBYm91dCBcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHdpJywgJ1R3aSdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3N0cnVnJywgJ1N0cnVnJ1xuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiVHdpU3RydWcgd2FzIGNyZWF0ZWQgYXMgYSBjYXJkIHJlZmVyZW5jZSBmb3IgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsXG4gICAgICAgICAgICAgICAgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICAgIFwiLiBJdCBoYXMgc2luY2UgZXhwYW5kZWQgdG8gaW5jbHVkZSBhIHBsYXlhYmxlIHZlcnNpb24gb2YgdGhlIGJvYXJkIGZvclxuICAgICAgICAgICAgICBsb2NhbCBnYW1lcyB3aXRob3V0IHRha2luZyB1cCBhcyBtdWNoIHRhYmxlIHNwYWNlLlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJGb3IgbW9yZSBpbi1kZXB0aCBzdHJhdGVneSwgbG9vayBubyBmdXJ0aGVyIHRoYW4gdGhlIGluaW1pdGFibGUgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgICBcIi4gSXQgaGFzIHRvbnMgb2YgZ3JlYXQgY29udGVudCBhbmRcbiAgICAgICAgICAgICAgYW5hbHlzaXMgYXZhaWxhYmxlLCBpbmNsdWRpbmcgZGlzY3Vzc2lvbnMgYWJvdXQgbmVhcmx5IGV2ZXJ5IGNhcmQuXG4gICAgICAgICAgICAgIFBsZWFzZSBzdXBwb3J0IFR3aWxpZ2h0IFN0cmF0ZWd5IGFuZCBpdHMgYXV0aG9yLCBcIlxuICAgICAgICAgICAgICBSLmVtIHt9LCBcInRoZW9yeVwiXG4gICAgICAgICAgICAgIFwiLCBieSBwdXJjaGFzaW5nIFR3aWxpZ2h0IFN0cnVnZ2xlIGZyb20gQW1hem9uIG9uIHRoZSBzaWRlYmFyIG9mIGhpc1xuICAgICAgICAgICAgICBzaXRlLCBvciBieSBwYXlpbmcgc29tZSBtb25leSBmb3IgdGhlIGFzc29jaWF0ZWQgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9sZWFucHViLmNvbS90d2lsaWdodHN0cmF0ZWd5XCIsIFwiZS1ib29rXCJcbiAgICAgICAgICAgICAgXCIuIEl0J3MgVHdpbGlnaHQgU3RyYXRlZ3kgaW4gYm9vayBmb3JtIGFuZCBkZXNlcnZlcyB5b3VyIG1vbmV5LlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vamp0LmlvL1wiLCBcIkphc29uIFRyaWxsXCJcbiAgICAgICAgICAgICAgXCIuIFNvdXJjZSBhdmFpbGFibGUgb24gXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Z1wiLCBcIkdpdGh1YlwiXG4gICAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLmgyIHt9LCBcIkFib3V0IFR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFIuYmxvY2txdW90ZSB7fSwgW1xuICAgICAgICAgICAgICBSLnAge30sIFwiVHdpbGlnaHQgU3RydWdnbGUgaXMgYSBjYXJkIGRyaXZlbiBnYW1lIHBsYXllZCBvdmVyIGEgbWF4aW11bSBvZiAxMCB0dXJucyBbZWFjaCB3aXRoIDYgb3IgNyByb3VuZHNdLiBUaGUgZ2FtZSBtYXkgZW5kIHNvb25lciAoYW5kIGZyZXF1ZW50bHkgZG9lcykuXCJcbiAgICAgICAgXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJbSXRdIGlzIGZ1bmRhbWVudGFsbHkgYSBnYW1lIGFib3V0IGFyZWEgY29udHJvbC4gVGhlcmUgYXJlIHNpeCBnZW9wb2xpdGljYWwgcmVnaW9ucyBvbiB0aGUgbWFwOiBFdXJvcGUgKHNwbGl0IGludG8gRWFzdGVybiBhbmQgV2VzdGVybiBFdXJvcGUgc3VicmVnaW9ucyksIEFzaWEgKGluY2x1ZGluZyB0aGUgU291dGhlYXN0IEFzaWEgc3VicmVnaW9uKSwgdGhlIE1pZGRsZSBFYXN0LCBBZnJpY2EsIENlbnRyYWwgQW1lcmljYSwgYW5kIFNvdXRoIEFtZXJpY2EuIFdpdGhpbiBlYWNoIHJlZ2lvbiBhcmUgY291bnRyaWVzIHRoYXQgaGF2ZSBhIHN0YWJpbGl0eSBudW1iZXIsIHJlcHJlc2VudGluZyBob3cgc3RhYmxlIHRoZSBnb3Zlcm5tZW50IHRlbmRzIHRvIGJlLlwiXG5cbiAgICAgICAgICAgICAgUi5wIHt9LCBcIkhhdmluZyBjb250cm9sIG9mIGNvdW50cmllcyBoZWxwcyBkZXRlcm1pbmUgd2hldGhlciB5b3UgaGF2ZSBwcmVzZW5jZSwgZG9taW5hdGlvbiwgb3IgY29udHJvbCBvZiBhIHJlZ2lvbiwgd2hpY2ggaW4gdHVybiBoZWxwcyB5b3UgZWFybiB2aWN0b3J5IHBvaW50cy4gV2l0aGluIGVhY2ggcmVnaW9uLCB0aGVyZSBhcmUgYSBudW1iZXIgb2YgYmF0dGxlZ3JvdW5kIGNvdW50cmllcywgd2hpY2ggYXJlIGNvbnNpZGVyZWQga2V5IHRvIHRoZSByZWdpb24uXCJcbiAgICAgICAgICAgICAgUi5wIHt9LFxuICAgICAgICAgICAgICAgIFIuZW0ge30sXG4gICAgICAgICAgICAgICAgICBSLmEgaHJlZjogJ2h0dHA6Ly9ib2FyZGdhbWVnZWVrLmNvbS90aHJlYWQvNDcxOTUzL3JvZ2Vycy1yZXZpZXdzLWRlbHV4ZS10d2lsaWdodC1zdHJ1Z2dsZS1jb21wcmVoZW5zJywgJ0ZvcnVtIHBvc3QgYnkgbGVyb3k0MydcbiAgICAgICAgICAgIF1cblxuICAgICAgICBcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNCcsIFtcbiAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWcgaW1nLWZsdWlkIEFib3V0Vmlldy10c2JveCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICAgIF1cbiAgICAgIF1cblxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTEyJyxcbiAgICAgICAgICBSLnAge30sXG4gICAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaW1nLWxpbmsnLCBocmVmOiBcIi9pbWFnZXMvdHNib2FyZC5qcGdcIixcbiAgICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nIGltZy1mbHVpZCBpbWctY2VudGVyJywgc3JjOiAnL2ltYWdlcy90c2JvYXJkLW1kLmpwZydcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9TdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeVZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmQnXG5cbnJlZHVjZVNob3J0Y3V0cyA9IChhcnIsIHNob3J0Y3V0KS0+XG4gIGFyci5wdXNoIFIuZHQge30sIHNob3J0Y3V0LmtleVxuICBhcnIucHVzaCBSLmRkIHt9LCBzaG9ydGN1dC5kZXNjXG4gIGFyclxuXG5cbkJvYXJkSW5mbyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIHNjcm9sbFRvcDogLT5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8gMCwwXG4gICAgLCAwXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICBzaG9ydGN1dHM6XG4gICAgICBpcDogW1xuICAgICAgICB7IGtleTonaScsIGRlc2M6ICdFbnRlciBJUCBwbGFjZW1lbnQgYnkga2V5Ym9hcmQgKElQYkspIG1vZGUnIH1cbiAgICAgICAgeyBrZXk6J2VzYycsIGRlc2M6ICdHbyBcInVwXCIgKGNvdW50cnkgLT4gY29udGluZW50IC0+IGV4aXQgSVBiSyBtb2RlKScgfVxuICAgICAgICB7IGtleTonZW50ZXInLCBkZXNjOiAnKHNhbWUgYXMgYWJvdmUpJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNBIGluZmx1ZW5jZSBpbmMvZGVjICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5OidyL1InLCBkZXNjOiAnVVNTUiBpbmZsdWVuY2UgaW5jL2RlYyAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonZXNjJywgZGVzYzogJ0NhbmNlbCBJUCBwbGFjZW1lbnQgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J2VudGVyJywgZGVzYzogJ0NvbmZpcm0gSVAgcGxhY2VtZW50ICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICBdXG4gICAgICBsZWZ0OiBbXG4gICAgICAgIHsga2V5OidzL1MnLCBkZXNjOiAnU2NvcmUgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonZC9EJywgZGVzYzogJ0RlZmNvbiBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidtL00nLCBkZXNjOiAnVVNBIE1pbGl0YXJ5IE9wcyBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidvL08nLCBkZXNjOiAnVVNTUiBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonaCcsIGRlc2M6ICdTaG93L2hpZGUgQWN0aW9uIEhpc3RvcnknIH1cbiAgICAgICAgeyBrZXk6J2MnLCBkZXNjOiAnUm9sbCBkaWNlJyB9XG4gICAgICBdXG4gICAgICByaWdodDogW1xuICAgICAgICB7IGtleTondC9UJywgZGVzYzogJ1R1cm4gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonci9SJywgZGVzYzogJ1JvdW5kIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3AvUCcsIGRlc2M6ICdVU0EgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNTUiBTcGFjZSBSYWNlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3onLCBkZXNjOiAnVW5kbyAoQWN0aW9uIEhpc3RvcnkpJyB9XG4gICAgICAgIHsga2V5Oid5JywgZGVzYzogJ1JlZG8gKEFjdGlvbiBIaXN0b3J5KScgfVxuICAgICAgXVxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTEyJywgW1xuICAgICAgICAgIFIuaDMge30sICdWaXJ0dWFsIFR3aWxpZ2h0IFN0cnVnZ2xlIGJvYXJkJ1xuICAgICAgICAgIFIucCB7fSwgXCJUaGlzIGlzIGEgZnVsbHkgcGxheWFibGUgYm9hcmQgd2l0aCBhIG1vcmVcbiAgICAgICAgICAgIGNvbXBhY3QgbGF5b3V0IHRvIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMsIGxpa2UgYSBDaHJvbWVib29rIG9yIGlQYWQuIEp1c3QgYWRkIGNhcmRzXG4gICAgICAgICAgICBhbmQgeW91J2xsIGJlIGFibGUgdG8gcGxheSBhbnl3aGVyZS4gVGhlIGJvYXJkIGlzbid0IGF3YXJlIG9mIHRoZSBydWxlcywgbm9yIHdpbGxcbiAgICAgICAgICAgIGl0IGRvIGFueXRoaW5nIGF1dG9tYXRpY2FsbHkuIFVzZSBpdCBhcyB5b3Ugd291bGQgYSBwaHlzaWNhbCBjb3B5IG9mIHRoZSBnYW1lLlwiXG4gICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICBcIlRoaXMgZ2FtZSwgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOiBcIiMvYm9hcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgICAgICAgIFIuY29kZSB7fSwgQHByb3BzLmlkXG4gICAgICAgICAgICBcIiwgd2lsbCBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIgYW5kIGNhbiBiZSBib29rbWFya2VkIGFuZCByZXN1bWVkIGF0IGEgbGF0ZXIgdGltZSwgZXZlbiBpZiB5b3UgY2xvc2UgeW91ciBicm93c2VyLiBcIlxuICAgICAgICAgICAgUi5hIG9uQ2xpY2s6IEBzY3JvbGxUb3AsIGhyZWY6JyMvYm9hcmQnLCAnQ2xpY2sgaGVyZSB0byBzdGFydCBhIG5ldyBnYW1lJ1xuICAgICAgICAgICAgJy4nXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgVVJMIGNvbnRhaW5zIHRoZSBjb21wbGV0ZSBzdGF0ZSBvZiB0aGUgYm9hcmQgYW5kIHdpbGxcbiAgICAgICAgICAgIHVwZGF0ZSB3aXRoIGVhY2ggYWN0aW9uIHRha2VuLiBUaGlzIGNhbiBiZSB1c2VkIHRvIHBsYXkgcmVtb3RlbHlcbiAgICAgICAgICAgIHdpdGggc29tZW9uZSBieSBzZW5kaW5nIHRoZSBVUkwgYmFjayBhbmQgZm9ydGguIEZvclxuICAgICAgICAgICAgaW5zdGFuY2UsIGlmIHlvdSB3ZXJlIHRoZSBVU1NSIHN0YXJ0aW5nIGEgbmV3IGdhbWUsIHlvdSB3b3VsZCBwbGFjZSB5b3VyXG4gICAgICAgICAgICBpbml0aWFsIGluZmx1ZW5jZSB0aGVuIGNvcHkgdGhlIFVSTCBhbmQgc2VuZCBpdCB0byB5b3VyIG9wcG9uZW50LiBUaGV5XG4gICAgICAgICAgICB3b3VsZCBnbyB0byB0aGF0IFVSTCwgcGxhY2UgdGhlaXIgaW5mbHVlbmNlIGFuZCBzZW5kIHRoZSBuZXcgVVJMIGJhY2sgdG8geW91LiBMYXRoZXIsIHJpbnNlLCByZXBlYXQuXCJcbiAgICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctNicsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIkluc3RydWN0aW9uc1wiXG4gICAgICAgICAgUi5wIHt9LCBcIlRvIGFkZC9yZW1vdmUgaW5mbHVuY2UgaW4gYSBjb3VudHJ5LCBjbGljayBpbiB0aGUgdG9wL2JvdHRvbSBvZiB0aGUgaW5mbHVlbmNlIHNwYWNlIG9uIHRoZSBkZXNpcmVkIHNpZGUgKFVTQSBvbiBsZWZ0LCBVU1NSIG9uIHJpZ2h0KS5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyB1bmRvL3JlZG8gb25lIG9yIG1vcmUgYWN0aW9ucywgcHJlc3MgWi9ZIG9uZSBvciBtb3JlIHRpbWVzLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIlRoZSBkaWNlIGNhbiBiZSByb2xsZWQgaW5kaXZpZHVhbGx5IGJ5IGNsaWNraW5nIG9uIHRoZW0sIG9yIGFzIGEgcGFpciBieSBjbGlja2luZyBvbiBcXFwiUk9MTCBESUNFXFxcIi5cIlxuICAgICAgICAgIFIucCB7fSwgXCJFYWNoIHN1cGVycG93ZXIgYm94IChVU0EsIFVTU1IpIHNob3dzIHRoZSBudW1iZXIgb2YgY29udHJvbGxlZCBiYXR0bGVncm91bmQgY291bnRyaWVzIG9uIHRvcC4gT24gdGhlIGJvdHRvbSBpdCBzaG93cyB0aGUgbnVtYmVyIG9mIHJlZ2lvbnMgaW4gd2hpY2ggdGhlIHBvd2VyIGhhcyBwcmVzZW5jZSwgZG9taW5hdGlvbiwgYW5kIGNvbnRyb2wuIEZvciBleGFtcGxlLCBpZiB0aGUgVVNTUiBoYWQgXFxcIjQgMiAxXFxcIiwgaXQgd291bGQgbWVhbiB0aGF0IHRoZXkgaGF2ZSBwcmVzZW5jZSBpbiA0IHJlZ2lvbnMsIGRvbWluYXRlIDIsIGFuZCBjb250cm9sIDEuXCJcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctNicsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIktleWJvYXJkIFNob3J0Y3V0c1wiXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLmxlZnQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBjb2wtbGctNicsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMucmlnaHQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTEyJywgW1xuICAgICAgICAgICAgICBSLmg0IHt9LCBcIkluZmx1ZW5jZSBwbGFjZW1lbnQgYnkga2V5Ym9hcmRcIlxuICAgICAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBCb2FyZFBhZ2Utc2hvcnRjdXRzLWlwJywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5pcCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRWaWV3J1xuXG4gIHN0YXRlSGlzdG9yeTogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICBAc3RhdGVIaXN0b3J5ID0gbmV3IEJvYXJkU3RhdGVIaXN0b3J5IGlkOiBAcHJvcHMuZ2FtZUlkXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHdpZHRoOiAxMTQwXG4gICAgaGVpZ2h0OiA3MzBcbiAgICBub2RlOlxuICAgICAgd2lkdGg6IDY2XG4gICAgICBoZWlnaHQ6IDUwXG4gICAgICBndXR0ZXI6IDE0XG4gICAgICB0aXRsZUhlaWdodDogMTZcbiAgICAgIHRpdGxlRm9udFNpemU6IDEyXG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkVmlldycsIFtcbiAgICAgIEJvYXJkU3RhdGVIaXN0b3J5Vmlld1xuICAgICAgICBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnlcbiAgICAgICAga2V5OiBcIkJvYXJkU3RhdGVIaXN0b3J5LSN7QHByb3BzLmdhbWVJZH1cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgW1xuICAgICAgICBCb2FyZCBfLmFzc2lnbiBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnksIEBwcm9wc1xuICAgICAgICBCb2FyZEluZm8gaWQ6IEBwcm9wcy5nYW1lSWRcbiAgICAgIF1cbiAgICBdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFBpY1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdib2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlcicsXG4gICAgICAgIFIuaDIge30sICdCb2FyZCdcbiAgICAgIFIuYSBocmVmOicvaW1hZ2VzL3RzYm9hcmQuanBnJyxcbiAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnZmx1aWQnLCBzcmM6Jy9pbWFnZXMvdHNib2FyZC5qcGcnXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxubW9kdWxlLmV4cG9ydHMgID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkVmlldydcbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgJCh3aW5kb3cpLm9uICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9uICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub24gJ2tleXByZXNzJywgQGhhbmRsZUtleVByZXNzXG4gICAgQGdldFN0cmF0ZWd5KClcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICB3aW5kb3cub25rZXlwcmVzcyA9IG51bGxcbiAgICAkKHdpbmRvdykub2ZmICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9mZiAncmVzaXplJywgQGZsb2F0aW5nQ2FyZFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgQGdldFN0cmF0ZWd5KClcbiAgICAjQHNldFdpbmRvd0tleXByZXNzSGFuZGxlcigpXG5cbiAgZmxvYXRpbmdDYXJkOiAtPlxuICAgICRoZWFkZXIgPSAkIEByZWZzLmhlYWRlci5nZXRET01Ob2RlKClcbiAgICAkaW1nID0gJCBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKVxuICAgICR3aW4gPSAkIHdpbmRvd1xuICAgIGhvID0gJGhlYWRlci5vZmZzZXQoKVxuICAgIGlzU2Nyb2xsaW5nID0gJHdpbi5zY3JvbGxUb3AoKSA+IGhvLnRvcCArIGhvLmhlaWdodFxuICAgICRpbWcudG9nZ2xlQ2xhc3MgJ2NhcmQtaW1nLXNjcm9sbCcsIGlzU2Nyb2xsaW5nXG4gICAgJGltZy5jc3MgJ3JpZ2h0JywgXCIjeygkd2luLndpZHRoKCkgLSBoby53aWR0aCAtIDE1KSAvIDJ9cHhcIlxuXG4gIGhhbmRsZUtleVByZXNzOiAoZXYpIC0+XG4gICAgICBrQyA9IGV2LmtleUNvZGVcbiAgICAgIGlmIGtDID09IDEwNCBvciBrQyA9PSA3MlxuICAgICAgICBpZCA9IEBwcm9wcy5wcmV2Q2FyZC5pZFxuICAgICAgaWYga0MgPT0gMTA4IG9yIGtDID09IDc2XG4gICAgICAgIGlkID0gQHByb3BzLm5leHRDYXJkLmlkXG4gICAgICBpZiBpZD9cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIjL2NhcmQvI3tpZH1cIlxuXG4gIGdldFN0cmF0ZWd5OiAtPlxuICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgZGF0YS4uLjwvcD4nXG4gICAgJC5nZXQgXCIvZGF0YS9jYXJkU3RyYXRlZ3lMaW5rZWQvI3tsaWJzLnplcm9QYWQoQHByb3BzLmNhcmQuaWQpfS5odG1sXCIsIChkYXRhKT0+XG4gICAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9IGRhdGFcblxuICByZW5kZXI6IC0+XG4gICAgY2FyZCA9IEBwcm9wcy5jYXJkXG4gICAgaW1hZ2VVcmwgPSBcIi9pbWFnZXMvY2FyZHMvI3tsaWJzLnplcm9QYWQoY2FyZC5pZCl9LmpwZ1wiXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciBjbGVhcmZpeCcsIHJlZjogJ2hlYWRlcicsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZC1uYXYnLCBbXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLnByZXZDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LXByZXYnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5wcmV2Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAn4peAICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhIKSdcbiAgICAgICAgICAgICAgJyBwcmV2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMubmV4dENhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtbmV4dCd9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLm5leHRDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgICduZXh0ICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhMKSdcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJyDilrYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuaDIgY2xhc3NOYW1lOiBsaWJzLmNhcmRDbGFzc05hbWUoY2FyZCksIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLW9wcycsIGlmIGNhcmQub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgY2FyZC5vcHNcbiAgICAgICAgICBcIiN7Y2FyZC50aXRsZX0gXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLWlkJywgXCIjI3tjYXJkLmlkfVwiXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIucCB7Y2xhc3NOYW1lOiAncHVsbC1sZWZ0IGNhcmQtYm9keSd9LCBjYXJkLnRleHRcbiAgICAgIFIuaW1nIGtleTogaW1hZ2VVcmwsIHNyYzogaW1hZ2VVcmwsIGNsYXNzTmFtZTogJ2ltZ1JpZ2h0JywgcmVmOidjYXJkSW1nJ1xuICAgICAgUi5kaXYge2NsYXNzTmFtZTogJ2NhcmQtc3RyYXRlZ3knLCBpZDogJ2NhcmQtc3RyYXRlZ3knfSwgW1xuICAgICAgICBSLmgzIHt9LCBbXG4gICAgICAgICAgJ1N0cmF0ZWdpYyBOb3RlcyBmcm9tJ1xuICAgICAgICAgICcgJ1xuICAgICAgICAgIFIuYSBocmVmOmNhcmQudXJsLCAnVHdpbGlnaHRTdHJhdGVneS5jb20nXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgcmVmOidjYXJkU3RyYXRlZ3knLFxuICAgICAgICAgIFIucCB7fSwgJ0xvYWRpbmcgZGF0YSdcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkNhcmRMaXN0ID0gcmVxdWlyZSAnLi4vdmlld3MvQ2FyZExpc3QnXG5cbiMgV2FyZ2FtZXJvb20gY2FyZCBpZHMgZGlmZmVyIGZyb20gVHdpU3RydWcgKFRTIGRlbHV4ZSBlZGl0aW9uKVxuaWRzRnJvbVdHUiA9IChpZHM9W10pLT5cbiAgaWRzLm1hcCAoaWQpLT5cbiAgICBzd2l0Y2ggaWRcbiAgICAgIHdoZW4gMzUgdGhlbiA4MVxuICAgICAgd2hlbiA5OCB0aGVuIDk5XG4gICAgICB3aGVuIDk5IHRoZW4gMTAwXG4gICAgICB3aGVuIDEwMCB0aGVuIDM1XG4gICAgICB3aGVuIDEwMSB0aGVuIDEwMlxuICAgICAgd2hlbiAxMDIgdGhlbiAxMDNcbiAgICAgIHdoZW4gMTA3IHRoZW4gMTEwXG4gICAgICB3aGVuIDEwOSB0aGVuIDk4XG4gICAgICB3aGVuIDExMCB0aGVuIDEwNFxuICAgICAgd2hlbiAxMTEgdGhlbiAxMDlcbiAgICAgIHdoZW4gMTEyIHRoZW4gMTA3XG4gICAgICBlbHNlIGlkXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkc1ZpZXcnXG5cbiAgZGVmYXVsdFN0YXRlOiAocHJvcHMpLT5cbiAgICBmaWx0ZXIgPSBwcm9wcz8uc3RhdGU/LmZpbHRlclxuXG4gICAgZnVsbFRleHQ6IGlmIGZpbHRlciB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGNhcmRJbWc6IGZhbHNlXG4gICAgY2FyZEZpbHRlcklucHV0OiBpZiBmaWx0ZXIgdGhlbiBmaWx0ZXIuam9pbignICcpIGVsc2UgJydcbiAgICBzb3J0OiAnc3RhZ2UnXG4gICAgZmlsdGVyOiBudWxsXG4gICAgdmlldzogJ2ltZydcbiAgICBmaWx0ZXJJc1dHUjogZmFsc2VcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIGNvbnNvbGUubG9nICdjV1JQJywgbmV4dFByb3BzXG4gICAgaWYgbmV4dFByb3BzLnN0YXRlP1xuICAgICAgQHNldFN0YXRlIG5leHRQcm9wcy5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIEBzZXRTdGF0ZSBAZGVmYXVsdFN0YXRlKClcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgXy5tZXJnZSBAZGVmYXVsdFN0YXRlKEBwcm9wcyksIEBwcm9wcy5zdGF0ZVxuXG4gIGdldEZpbHRlcklkczogKCkgLT5cbiAgICBpZiBAc3RhdGU/LmZpbHRlcj9cbiAgICAgIGZpbHRlcklkcyA9IEBzdGF0ZS5maWx0ZXIuc29ydChsaWJzLnNvcnROdW1lcmljYWwpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJUcnV0aHkpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJVbmlxdWUpXG4gICAgaWYgbm90IGZpbHRlcklkcz8gdGhlbiBmaWx0ZXJJZHMgPSBbXVxuICAgIHJldHVybiBmaWx0ZXJJZHNcblxuICAjIEp1c3QgZmlsdGVyaW5nIGJ5IGlkIHJpZ2h0IG5vd1xuICBnZXRGaWx0ZXJlZENhcmRzOiAtPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gQHByb3BzLmNhcmRzLmZpbHRlciAoZWwpID0+XG4gICAgICAgIGlmIGVsLmlkIGluIEBzdGF0ZS5maWx0ZXJcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICBAcHJvcHMuY2FyZHNcblxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG4gIGdyb3VwQ2FyZHM6IChjYXJkcyA9IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKSktPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gW2NhcmRzXVxuXG4gICAgc29ydCA9IEBzdGF0ZS5zb3J0XG4gICAgaWYgc29ydCA9PSAnc2lkZSdcbiAgICAgIHNvcnQgPSAnb3duZXInXG4gICAgaWYgQHN0YXRlLnNvcnRcbiAgICAgIHJldHVybiBfLmdyb3VwQnkoY2FyZHMsIHNvcnQpXG5cblxuICBoYW5kbGVGdWxsVGV4dDogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGZ1bGxUZXh0OiBAcmVmcy5mdWxsVGV4dC5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRJbWc6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkSW1nOiBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBJZiBXR1IgdGhlbiB3ZSBoYXZlIHRvIHRyYW5zbGF0ZSBzb21lIGlkc1xuICAgIGlzV0dSID0gdmFsdWUuc2VhcmNoKC8jLio6LykgIT0gLTFcblxuICAgICMgU3RyaXAgb3V0IHRoZSBLQUwtMDA3IGFuZCBVLTIgaW5jaWRlbnQgY2FyZCB0ZXh0XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlIC9VLTJ8S0FMLTAwNy9naSwgXCJcIlxuXG4gICAgIyBXR1IgYWRkcyBcIk9wcyAzOiAuLi5cIiwgc28gZG9uJ3QgcGljayB0aG9zZSB1cFxuICAgICMgQnV0IHN0aWxsIHBpY2sgdXAgdGhlIHNjb3JpbmcgY2FyZHNcbiAgICBpZHMgPSB2YWx1ZS5tYXRjaCgvXFxkK1teOl18XFxkKyR8I1xcZDovZyk/Lm1hcCAoZWwpLT5cbiAgICAgICMgU3RyaXAgb3V0IGFueSBub24tZGlnaXQgY2hhcnNcbiAgICAgIGVsID0gZWwucmVwbGFjZSAvXFxEL2csICcnXG4gICAgICBwYXJzZUludCBlbCwgMTBcbiAgICBpZiB2YWx1ZSA9PSAnJyBvciBub3QgaWRzP1xuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZpbHRlcjogbnVsbFxuICAgIGVsc2VcbiAgICAgIGlmIGlzV0dSXG4gICAgICAgIGlkcyA9IGlkc0Zyb21XR1IgaWRzXG4gICAgICBpZHMgPSBpZHMuc29ydChsaWJzLnNvcnROdW1lcmljYWwpLmZpbHRlcihsaWJzLmZpbHRlclZhbGlkQ2FyZElkcylcbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmdWxsVGV4dDogdHJ1ZVxuICAgICAgICBmaWx0ZXI6IGlkc1xuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgIyBGb3JtYXQgdGhlIGlucHV0IGZpZWxkIHRvIGJlIGp1c3QgdGhlIGlkcyBvbiBibHVyXG4gIGhhbmRsZUNhcmRGaWx0ZXJCbHVyOiAtPlxuICAgIGZpbHRlcklkcyA9IEBnZXRGaWx0ZXJJZHMoKVxuXG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6IGZpbHRlcklkcy5qb2luICcgJ1xuXG4gICAgaWYgZmlsdGVySWRzPyBhbmQgZmlsdGVySWRzLmxlbmd0aCA+IDBcbiAgICAgIGxpYnMucXMuc2V0ICdmaWx0ZXInLCBmaWx0ZXJJZHNcbiAgICBlbHNlXG4gICAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDbGVhcjogKCktPlxuICAgIEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJydcbiAgICBAc2V0U3RhdGVcbiAgICAgIGZpbHRlcjpudWxsXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6ICcnXG5cbiAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIHNvcnRHcm91cFRpdGxlOiAoc29ydCA9IEBzdGF0ZS5zb3J0LCB2YWwpLT5cbiAgICB2YWxJbnQgPSBwYXJzZUludCB2YWwsIDEwXG4gICAgc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ29wcydcbiAgICAgICAgcyA9IGlmIHZhbEludCA+IDEgdGhlbiAncycgZWxzZSAnJ1xuICAgICAgICBpZiB2YWxJbnQgPT0gMCB0aGVuICdTY29yaW5nJyBlbHNlIFwiI3t2YWx9IE9wI3tzfVwiXG4gICAgICB3aGVuICdzaWRlJ1xuICAgICAgICBpZiB2YWwgPT0gJ3VzJ1xuICAgICAgICAgICdVU0EnXG4gICAgICAgIGVsc2UgaWYgdmFsID09ICduZXV0cmFsJ1xuICAgICAgICAgICdOZXV0cmFsJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgIHdoZW4gJ3N0YWdlJ1xuICAgICAgICBzd2l0Y2ggdmFsSW50XG4gICAgICAgICAgd2hlbiAxIHRoZW4gJ0Vhcmx5IFdhcidcbiAgICAgICAgICB3aGVuIDIgdGhlbiAnTWlkIFdhcidcbiAgICAgICAgICB3aGVuIDMgdGhlbiAnTGF0ZSB3YXInXG5cbiAgaGFuZGxlVmlld0NsaWNrOiAodmlldyktPlxuICAgIEBzZXRTdGF0ZSB7IHZpZXcgfVxuICAgIGxpYnMucXMuc2V0ICd2aWV3Jywgdmlld1xuXG4gIHJlbmRlcjogLT5cbiAgICBjb25zb2xlLmxvZyAncmVuZGVyJywgQHN0YXRlLCBAcHJvcHNcbiAgICBzb3J0TGluayA9IChzb3J0LCBkaXNwbGF5KSA9PlxuICAgICAgY2xhc3NOYW1lID0gY3ggYWN0aXZlOiBAc3RhdGUuc29ydCA9PSBzb3J0XG4gICAgICByZWYgPSBcIiN7c29ydH1Tb3J0XCJcbiAgICAgIG9uQ2xpY2sgPSAoKS0+XG4gICAgICAgIGxpYnMucXMuc2V0ICdzb3J0Jywgc29ydFxuICAgICAgUi5hIHtvbkNsaWNrLCByZWYsIGNsYXNzTmFtZX0sIGRpc3BsYXlcblxuICAgIGNhcmRzID0gQGdyb3VwQ2FyZHMgQGZpbHRlckFuZFNvcnRDYXJkcygpXG5cbiAgICBjYXJkTGlzdHMgPSBfLm1hcCBjYXJkcywgKGNhcmRzLCB2YWwpPT5cbiAgICAgIGNhcmRMaXN0SGVhZGluZyA9IG51bGxcbiAgICAgIGlmIG5vdCBAc3RhdGUuZmlsdGVyP1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmcgPSBSLmgyIGNsYXNzTmFtZTonY2FyZExpc3QtZ3JvdXBIZWFkaW5nJyxcbiAgICAgICAgICBAc29ydEdyb3VwVGl0bGUgQHN0YXRlLnNvcnQsIHZhbFxuICAgICAgUi5kaXYge30sIFtcbiAgICAgICAgY2FyZExpc3RIZWFkaW5nXG4gICAgICAgIENhcmRMaXN0XG4gICAgICAgICAgY2FyZEltZzogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICBmdWxsVGV4dDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICAgICAgdmlldzogQHN0YXRlLnZpZXdcbiAgICAgIF1cblxuICAgIGNhcmRzVmlld0NsYXNzID0gY3hcbiAgICAgICdjYXJkc1ZpZXcnOiB0cnVlXG4gICAgICAnY2FyZHNWaWV3LS1maWx0ZXJlZCc6IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAnY2FyZHNWaWV3LS1mdWxsVGV4dCc6IEBzdGF0ZS5mdWxsVGV4dFxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiBjYXJkc1ZpZXdDbGFzcywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgcm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCAnU29ydCBieTonXG4gICAgICAgICAgICBzb3J0TGluayAnc3RhZ2UnLCAnU3RhZ2UnXG4gICAgICAgICAgICBzb3J0TGluayAnb3BzJywgJ09wcydcbiAgICAgICAgICAgIHNvcnRMaW5rICdzaWRlJywgJ1NpZGUnXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6JycsIGNsYXNzTmFtZTonJ30sICdWaWV3OiAnXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICdpbWcnXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZCBpbWFnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGgtbGFyZ2UgI3tpZiBAc3RhdGUudmlldyA9PSAnaW1nJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RpdGxlJ1xuICAgICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGFuZCBvcHMnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RpdGxlJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RleHQnXG4gICAgICAgICAgICAgIHRpdGxlOiAnRnVsbCB0ZXh0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi1hbGlnbi1sZWZ0ICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RleHQnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI2lkOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonZnVsbFRleHQnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUZ1bGxUZXh0XG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2Z1bGxUZXh0JywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIHRleHQnXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI2lkOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidjYXJkSW1nJ1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVDYXJkSW1nXG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonY2FyZEltZycsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCBpbWFnZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHMtZmlsdGVyLWJ5LWlkIGNvbC1tZC02JywgW1xuICAgICAgICAgIFIubGFiZWwgaHRtbEZvcjonY2FyZEZpbHRlcicsIGNsYXNzTmFtZTonY2FyZEZpbHRlci1sYWJlbCcsIFwiRmlsdGVyIGJ5IGlkcyBcIlxuICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgIG5hbWU6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkRmlsdGVyLWlucHV0J1xuICAgICAgICAgICAgcmVmOiAnY2FyZEZpbHRlcidcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBAaGFuZGxlQ2FyZEZpbHRlckNoYW5nZVxuICAgICAgICAgICAgb25CbHVyOiBAaGFuZGxlQ2FyZEZpbHRlckJsdXJcbiAgICAgICAgICAgIHZhbHVlOiBAc3RhdGUuY2FyZEZpbHRlcklucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3RlIGZyb20gV2FyZ2FtZXJvb20gb3IgZW50ZXIgaWRzJ1xuICAgICAgICAgIFIuYSB7Y2xhc3NOYW1lOidjYXJkcy1maWx0ZXItYnktaWQtY2xlYXInLCBvbkNsaWNrOkBoYW5kbGVDYXJkRmlsdGVyQ2xlYXJ9LCAnY2xlYXInXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIGNhcmRMaXN0c1xuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDb3VudHJpZXNWaWV3ICdcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvdW50cmllc1ZpZXcnLCBbXG4gICAgICBSLmgyIHt9LCAnQ291bnRyaWVzJ1xuICAgIF1cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9TdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZFN0YXRlSGlzdG9yeVZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmQnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdHYW1lUGFnZSdcblxuICBzdGF0ZUhpc3Rvcnk6IG51bGxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQHN0YXRlSGlzdG9yeSA9IG5ldyBCb2FyZFN0YXRlSGlzdG9yeSBpZDogQHByb3BzLmdhbWVJZFxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFZpZXcnLCBbXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeVZpZXdcbiAgICAgICAgc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5XG4gICAgICAgIGtleTogXCJCb2FyZFN0YXRlSGlzdG9yeS0je0Bwcm9wcy5nYW1lSWR9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgQm9hcmQgXy5hc3NpZ24gc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5LCBAcHJvcHNcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0hvbWVWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnSG9tZVZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC14cy0xMicsIFtcbiAgICAgICAgICBSLmgxIGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2kgb3duZXItdXNcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1ZyBvd25lci11c3NyXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAgY2xhc3NOYW1lOidsZWFkIGJsdXJiJywgW1xuICAgICAgICAgICAgXCJUd2lTdHJ1ZyBpcyBhIGNvbXBhbmlvbiBhcHBsaWNhdGlvbiBmb3IgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLCBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFwiLiBJdCB3b3VsZCBub3QgZXhpc3Qgd2l0aG91dCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluaycsIGhyZWY6ICcjL2JvYXJkJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpcnR1YWwgQm9hcmQnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1ib2FyZC5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdGdWxseSBwbGF5YWJsZSBib2FyZCAtIGp1c3QgYWRkIGNhcmRzJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rIGhvbWUtbGluay1jYXJkcycsIGhyZWY6ICcjL2NhcmRzJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpZXcgQ2FyZHMnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1jYXJkcy5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdFeHBsb3JlIHRoZSBjYXJkcyBvZiBUd2lsaWdodCBTdHJ1Z2dsZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ1dob29wc1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5oMiB7fSwgXCJERUZDT04gMVwiXG4gICAgICBSLnAgY2xhc3NOYW1lOidsZWFkJywgW1xuICAgICAgICBcIkxvb2tzIGxpa2UgVHdpU3RydWcgdHJpZ2dlcmVkIG51Y2xlYXIgd2FyLiBXSE9PUFNJRSBEQUlTWSFcIlxuICAgICAgICBSLmJyIHt9XG4gICAgICAgIFIuYSBocmVmOlwiIy9jYXJkc1wiLCBcIkhvdyBhYm91dCBsb29raW5nIG92ZXIgdGhlIGNhcmRzP1wiXG4gICAgICBdXG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsInZlbnQgPSByZXF1aXJlICcuL3ZlbnQnXG5tYXBEYXRhdjIgPSByZXF1aXJlICcuLi9hcHAvZGF0YS9tYXAtZGF0YS12Mi5qc29uJ1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuc2V0UGFnZVRpdGxlID0gcmVxdWlyZSAnLi9saWJzL3NldFBhZ2VUaXRsZSdcbnFzID0gcmVxdWlyZSAnLi9saWJzL3FzJ1xuXG5zZXRSb3V0ZU9yaWdpbmFsID0gUm91dGVyOjpzZXRSb3V0ZVxuUm91dGVyOjpzZXRSb3V0ZSA9IC0+XG4gIEBjdXJyZW50Um91dGUgPSBAZ2V0Um91dGUoKVxuICBzZXRSb3V0ZU9yaWdpbmFsLmFwcGx5IHRoaXMsIGFyZ3VtZW50c1xuXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvdXRlcjogbmV3IFJvdXRlclxuXG4gICMgVGFrZXMgYSB2aWV3IG5hbWUgYW5kIGFzc29jaWF0ZWQgZGF0YVxuICBzZXRWaWV3OiAobmFtZSwgdGl0bGUsIG1lbnVBY3RpdmU9JycsIGRhdGE9e30pIC0+XG4gICAgaWYgdGl0bGU/IHRoZW4gc2V0UGFnZVRpdGxlIHRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YSwgdGl0bGV9XG4gICAgICBtZW51QWN0aXZlOiBtZW51QWN0aXZlXG4gICAgICBzbGlkZUluOiBAc3RhdGUudmlldz8ubmFtZSAhPSBuYW1lXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyk9PlxuICAgICAgc3RhdGUgPSBxcy50b09iaiBhcmdzXG4gICAgICAjIENvbnZlcnQgZmlsdGVyIGlkcyBmcm9tIHN0ciAtPiBudW1iZXJcbiAgICAgIGlmIHN0YXRlPy5maWx0ZXI/XG4gICAgICAgIGlmIG5vdCBfLmlzQXJyYXkgc3RhdGUuZmlsdGVyXG4gICAgICAgICAgc3RhdGUuZmlsdGVyID0gW3N0YXRlLmZpbHRlcl1cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBAcHJvcHMucm91dGVyXG5cbiAgICB2ZW50Lm9uICdzZXRSb3V0ZScsIHJvdXRlci5zZXRSb3V0ZS5iaW5kIHJvdXRlclxuXG4gICAgcm91dGVyLmNvbmZpZ3VyZVxuICAgICAgbm90Zm91bmQ6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ3dob29wcycsICdXaG9vcHMnXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgcm91dGVyLm9uICcvJywgQHNldFZpZXcuYmluZCB0aGlzLCAnaG9tZScsICdIb21lJ1xuXG5cbiAgICByb3V0ZXIub24gJy9jYXJkLzppZCcsIChpZCk9PlxuICAgICAgaWQgPSBwYXJzZUludCBpZCwgMTBcbiAgICAgIG5leHRJZCA9IGlmIGlkID09IDExMCB0aGVuIDEgZWxzZSBpZCArIDFcbiAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgIGNhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogaWRcbiAgICAgIG5leHRDYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IG5leHRJZFxuICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgcGFnZVRpdGxlID0gXCIje2NhcmQudGl0bGV9ICgjI3tjYXJkLmlkfSlcIlxuICAgICAgQHNldFZpZXcgJ2NhcmQnLCBwYWdlVGl0bGUsICdjYXJkcycsIHtjYXJkLCBuZXh0Q2FyZCwgcHJldkNhcmR9XG5cblxuICAgIHJvdXRlci5vbiAnL2NvdW50cmllcycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuXG5cbiAgICByb3V0ZXIub24gJy9hYm91dCcsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2Fib3V0JywgJ0Fib3V0JywgJ2Fib3V0J1xuXG5cbiAgICByb3V0ZXIub24gL2NhcmRzXFw/PyguKikvLCAoKT0+XG4gICAgICAjIElmIHdlJ3JlIG9uIGEgc21hbGwgc2NyZWVuLCByZWRpciB0aGUgdXNlciB0byB2aWV3PXRpdGxlXG4gICAgICBwYWdlUVMgPSBxcy50b09iaigpXG4gICAgICBpZiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCBhbmQgbm90IHBhZ2VRUz8udmlldz9cbiAgICAgICAgcXMuc2V0KCd2aWV3JywndGl0bGUnKVxuICAgICAgICByZXR1cm5cblxuICAgICAgc3RhdGVSb3V0ZSAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG5cblxuICAgIHJvdXRlci5vbiAvZ2FtZVxcLz8oXFx3KilcXC8/KC4qKS8sIChnYW1lSWQsIGluY29taW5nU3RhdGUpPT5cblxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkdhbWUgI3tnYW1lSWR9XCIsIFwiIy9nYW1lLyN7Z2FtZUlkfVwiXG5cbiAgICAgIHtjb3VudHJ5U2hvcnRjdXRzLCBjb3VudHJpZXMsIGxpbmtzLCByZWdpb25JbmZvTm9kZXN9ID0gbWFwRGF0YXYyXG5cbiAgICAgICMgQ291bnRyaWVzIGFuZCByZWdpb24gaW5mbyBub2RlcyBjb21iaW5lZFxuICAgICAgbm9kZXMgPSBfLnVuaW9uIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzXG5cbiAgICAgIHByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXNcbiAgICAgICAgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2dhbWUnLCAnR2FtZScsICdnYW1lJywgcHJvcHNcbiAgICAgIGNvbnNvbGUubG9nICdHQU1FIFJPVVRFJ1xuXG5cbiAgICByb3V0ZXIub24gL2JvYXJkXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkJvYXJkICN7Z2FtZUlkfVwiLCBcIiMvYm9hcmQvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlTaG9ydGN1dHMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhdjJcblxuICAgICAgIyBDb3VudHJpZXMgYW5kIHJlZ2lvbiBpbmZvIG5vZGVzIGNvbWJpbmVkXG4gICAgICBub2RlcyA9IF8udW5pb24gY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXNcblxuICAgICAgYm9hcmRQcm9wcyA9IHtcbiAgICAgICAgZ2FtZUlkLCBjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2RlcywgbGlua3MsIG5vZGVzXG4gICAgICAgIGluY29taW5nU3RhdGUsIGNvdW50cnlTaG9ydGN1dHN9XG5cbiAgICAgIEBzZXRWaWV3ICdib2FyZCcsICdCb2FyZCcsICdib2FyZCcsIGJvYXJkUHJvcHNcblxuXG4gICAgcm91dGVyLm9uIC8oYWNjZXNzX3Rva2VuLiopLywgKHFzKT0+XG4gICAgICBjb25zb2xlLmxvZyBxc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG5cbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vbGlicy9NaWNyb0V2ZW50Q2xhc3MnXG5jbGFzcyBWZW50IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG52ZW50ID0gbmV3IFZlbnQoKVxud2luZG93LnZlbnQgPSB2ZW50XG5tb2R1bGUuZXhwb3J0cyA9IHZlbnRcbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG52ZW50ID0gcmVxdWlyZSAnLi4vdmVudCdcblxuc3VwZXJTdGF0cyA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJTdGF0cydcbnJhbmdlZEdhbWVWYWwgPSByZXF1aXJlICcuLi9saWJzL3JhbmdlZEdhbWVWYWwnXG5zaWduZWROdW1PckRhc2ggPSByZXF1aXJlICcuLi9saWJzL3NpZ25lZE51bU9yRGFzaCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4uL2xpYnMvc3RhdGVFbmNvZGVyJ1xudXBwZXJGaXJzdCA9IHJlcXVpcmUgJy4uL2xpYnMvdXBwZXJGaXJzdCdcbm9uZUxldHRlckNvbnRpbmVudENvZGUgPSByZXF1aXJlICcuLi9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUnXG5jb250aW5lbnRDb2RlRnJvbUxldHRlciA9IHJlcXVpcmUgJy4uL2xpYnMvY29udGluZW50Q29kZUZyb21MZXR0ZXInXG5maWx0ZXJUcnV0aHkgPSByZXF1aXJlICcuLi9saWJzL2ZpbHRlclRydXRoeSdcblxuQm9hcmROb2RlID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGUnXG5Cb2FyZE5vZGVEaXYgPSByZXF1aXJlICcuL0JvYXJkTm9kZURpdidcbkJvYXJkU3RhdHVzID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1cydcbkJvYXJkTGluayA9IHJlcXVpcmUgJy4vQm9hcmRMaW5rJ1xuXG5cbnN1cGVycG93ZXJUb0luZGV4ID0gKHN0ciktPiBpZiBzdHIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuXG4jIFJldHVybnMgYSBzaW1wbGUge3VzYTogJ3ByZXNlbmNlJywgdXNzcjogJ2RvbWluYXRpb24nfVxuZ2V0UmVnaW9uU3RhdHVzID0gKHN0YXRzKS0+XG4gIF8ubWFwVmFsdWVzIHN0YXRzLCAoc3RhdCktPlxuICAgIHJldHVybiAnY29udHJvbCcgaWYgc3RhdC5jb250cm9sXG4gICAgcmV0dXJuICdkb21pbmF0aW9uJyBpZiBzdGF0LmRvbWluYXRpb25cbiAgICByZXR1cm4gJ3ByZXNlbmNlJyBpZiBzdGF0LnByZXNlbmNlXG4gICAgcmV0dXJuIGZhbHNlXG5cblxuXG5cbmNvbnRpbmVudFNob3J0Y3V0RGF0YSA9IFtcbiAgeyBjaGFyOiAnQycsIHg6MTI3LCB5OjIwMCB9XG4gIHsgY2hhcjogJ1MnLCB4OjEyNywgeTo1MTAgfVxuICB7IGNoYXI6ICdGJywgeDo1MzMsIHk6NTUwIH1cbiAgeyBjaGFyOiAnRScsIHg6NDgwLCB5OjIyMCB9XG4gIHsgY2hhcjogJ0EnLCB4Ojg0MCwgeToxNTAgfVxuICB7IGNoYXI6ICdNJywgeDo4NDAsIHk6MzgwIH1cbl1cblxuXG4jIFRha2VzIGFuIGlwS2V5U2VxdWVuY2UgYW5kIHJldHVybnMgdGhlIGFwcGxpY2FibGUgY29udGluZW50IGFuZCBjb3VudHJ5XG5jb250Q291bnRyeVNlbGVjdGlvbiA9IChyZWdpb25zLCBjb3VudHJpZXMsIGlwS2V5U2VxID0gJycpLT5cbiAgY29udGluZW50ID0gXy5maW5kIHJlZ2lvbnMsIHtzaG9ydGN1dDogaXBLZXlTZXEuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCl9XG4gIGNvdW50cnkgPSAnJ1xuICBjb3VudHJ5S2V5ID0gaXBLZXlTZXEuc2xpY2UoMiw0KVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAyXG4gICAgY291bnRyeU9iaiA9IF8uZmluZCBjb3VudHJpZXMsIHtzaG9ydGN1dDogY291bnRyeUtleS50b0xvd2VyQ2FzZSgpLCBjb250aW5lbnQ6IGNvbnRpbmVudD8uY29udGluZW50fVxuICAgIGNvdW50cnkgPSBjb3VudHJ5T2JqLnNob3J0bmFtZVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAxXG4gICAgY291bnRyeSA9IFwiI3tjb3VudHJ5S2V5LnRvVXBwZXJDYXNlKCl9Li4uXCJcblxuICB7IGNvbnRpbmVudCwgY291bnRyeSB9XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZCdcblxuICBnZXRJbml0aWFsU3RhdGU6IChwcm9wcyA9IEBwcm9wcykgLT5cbiAgICBzdGF0ZUhpc3RvcnkgPSBwcm9wcy5zdGF0ZUhpc3RvcnlcbiAgICBzdGF0ZUhpc3RvcnkubG9hZCgpXG4gICAgc3RhdGUgPSBAaGFuZGxlSW5jb21pbmdTdGF0ZSBwcm9wcy5pbmNvbWluZ1N0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgc3RhdGUgPSBzdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpPy5zdGF0ZVxuICAgIGlmIG5vdCBzdGF0ZT9cbiAgICAgIGdhbWVTdGF0ZSA9XG4gICAgICAgIGdhbWU6XG4gICAgICAgICAgc2NvcmU6IDBcbiAgICAgICAgICB0dXJuOiAwXG4gICAgICAgICAgcm91bmQ6IDBcbiAgICAgICAgICBkZWZjb246IDVcbiAgICAgICAgICBtaWxvcHM6IFswLDBdXG4gICAgICAgICAgc3BhY2U6IFswLDBdXG4gICAgICAgIGlwczogXy5tYXAgcHJvcHMuY291bnRyaWVzLCAoYyktPiBbYy51c2EsIGMudXNzcl1cblxuICAgICAgbWV0YSA9XG4gICAgICAgIHR5cGU6ICd0dXJuJ1xuICAgICAgICBpZDogJ3R1cm4nXG4gICAgICAgIG5ld0dhbWU6IHRydWVcbiAgICAgICAgbmV3OiAwXG4gICAgICAgIG9sZDowXG5cbiAgICAgIHN0YXRlSGlzdG9yeS5hZGQgZ2FtZVN0YXRlLCBtZXRhXG4gICAgICBzdGF0ZSA9IGdhbWVTdGF0ZVxuXG4gICAgXy5hc3NpZ24gc3RhdGUsXG4gICAgICBpcFNob3dDb3VudHJpZXM6IFtdXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBJUENoYW5nZTogW11cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAoblApLT5cbiAgICBzdGF0ZSA9IEBnZXRJbml0aWFsU3RhdGUgblBcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAge3N0YXRlSGlzdG9yeSwgZ2FtZUlkfSA9IEBwcm9wc1xuXG4gICAgIyBXaGVuIHN0YXRlIGNoYW5nZXMsIGVtaXQgZXZlbnQgZm9yIHRoZSByb3V0ZXIgdG8gcGljayB1cFxuICAgIHN0YXRlSGlzdG9yeS5vbiAnY2hhbmdlJywgPT5cbiAgICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlPyBhbmQgbm90IHN0YXRlLm1ldGEubmV3R2FtZVxuICAgICAgICBzdGF0ZUVuYyA9IHN0YXRlSGlzdG9yeS5lbmNvZGVDdXJyZW50KClcbiAgICAgICAgdmVudC5lbWl0ICdib2FyZFN0YXRlQ2hhbmdlJywgZ2FtZUlkLCBzdGF0ZUVuY1xuXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdnb1RvJywgKHN0YXRlKT0+XG4gICAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcblxuICAgIEBrcEhUID0gXy50aHJvdHRsZSBAa2V5cHJlc3NIYW5kbGVyLCAxMDBcbiAgICBAa3VIVCA9IF8udGhyb3R0bGUgQGtleXVwSGFuZGxlciwgMTAwXG4gICAgQGtkSFQgPSBfLnRocm90dGxlIEBrZXlkb3duSGFuZGxlciwgMTAwXG5cbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleWRvd24nLCBAa2RIVFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5dXAnLCBAa3VIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5ZG93bicsIEBrZEhUXG5cbiAgaGFuZGxlSW5jb21pbmdTdGF0ZTogKHN0YXRlRW5jb2RlZCA9IEBwcm9wcy5pbmNvbWluZ1N0YXRlKSAtPlxuICAgIGluZGV4ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5maW5kU3RhdGVJbmRleCBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgaWYgaW5kZXg/XG4gICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaW5kZXhcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhdGVcbiAgICBlbHNlXG4gICAgICBjdXJyZW50ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlRW5jb2RlZD8gYW5kIHN0YXRlRW5jb2RlZCAhPSAnJyBhbmQgY3VycmVudD8ubWV0YS5zdGF0ZSAhPSBzdGF0ZUVuY29kZWRcbiAgICAgICAgc3RhdGUgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlRW5jb2RlZFxuICAgICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSxcbiAgICAgICAgICB0eXBlOiAnbG9hZCdcbiAgICAgICAgICBpZDogJ2xvYWQnXG4gICAgICAgICAgc3RhdGU6IHN0YXRlRW5jb2RlZFxuICAgICAgICByZXR1cm4gc3RhdGVcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBrZXlwcmVzc0hhbmRsZXI6IChldiktPlxuICAgIGtDID0gZXYua2V5Q29kZVxuICAgIGRpciA9IGlmIGtDID49IDk3IHRoZW4gJ2luYycgZWxzZSAnZGVjJ1xuXG4gICAgaWYgQHN0YXRlLmlwS2V5U2VxdWVuY2UubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlKGtDKVxuXG4gICAgaWYga0MgPT0gMTA1IG9yIGtDID09IDczXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uga0NcbiAgICAgIHJldHVyblxuXG4gICAgc3dpdGNoIGtDXG4gICAgICAjIChjL0MpIERpY2VcbiAgICAgIHdoZW4gOTksIDY3XG4gICAgICAgIEByZWZzLkJvYXJkU3RhdHVzLnJvbGxEaWNlKClcblxuICAgICAgIyBIaXN0b3J5XG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHovWikgVW5kb1xuICAgICAgd2hlbiAxMjIsIDkwXG4gICAgICAgIEB1bmRvSGlzdCgpXG4gICAgICAjICh5L1kpIFJlZG9cbiAgICAgIHdoZW4gMTIxLCA4OVxuICAgICAgICBAcmVkb0hpc3QoKVxuICAgICAgIyAoaC9IKSBIaXN0b3J5IHNob3cvaGlkZVxuICAgICAgd2hlbiAxMDQsIDcyXG4gICAgICAgIEB0b2dnbGVIaXN0KClcblxuICAgICAgIyBHYW1lIHByb3BlcnRpZXNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHQvVCkgVHVybiBpbmMvZGVjXG4gICAgICB3aGVuIDExNiwgODRcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICd0dXJuJywgZGlyXG4gICAgICAjIChyL1IpIFJvdW5kIGluYy9kZWNcbiAgICAgIHdoZW4gMTE0LCA4MlxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3JvdW5kJywgZGlyXG4gICAgICAjIChTL3MpIFNjb3JlIGluYy9kZWNcbiAgICAgIHdoZW4gMTE1LCA4M1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3Njb3JlJywgZGlyXG4gICAgICAjIChEL2QpIERlZmNvbiBpbmMvZGVjXG4gICAgICB3aGVuIDEwMCwgNjhcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdkZWZjb24nLCBkaXJcbiAgICAgICMgKE0vbSkgVVNBIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDEwOSwgNzdcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c2EnXG4gICAgICAjIChPL28pIFVTU1IgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTExLCA3OVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3Vzc3InXG4gICAgICAjIChQL3ApIFVTQSBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDExMiwgODBcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3VzYSdcbiAgICAgICMgKEEvYSkgVVNTUiBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDk3LCA2NVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNzcidcblxuICAgIHJldHVybiB0cnVlXG5cblxuICAjIEVzYyBkb2Vzbid0IHRyaWdnZXIgb24ga2V5cHJlc3MsIHNvIGl0IGhhcyB0byBiZSBrZXl1cFxuICBrZXl1cEhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZShmYWxzZSlcbiAgICBpZiBldi5rZXlDb2RlID09IDI3IG9yICgzNyA8PSBldi5rZXlDb2RlIDw9IDQwKVxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlIGV2LmtleUNvZGUsIGV2XG4gICAgI2lmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgICNAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgICNyZXR1cm5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAga2V5ZG93bkhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gOCBvciBldi5rZXlDb2RlID09IDEzXG4gICAgICBAaXBLZXlTZXF1ZW5jZShldi5rZXlDb2RlKVxuICAgICAgIyBQcmV2ZW50IGJhY2tzcGFjZSBmcm9tIG5hdmlnYXRpbmcgdGhlIHBhZ2VcbiAgICAgICMgT3JpZGluYXJpbHkgSSBkb24ndCBsaWtlIHRha2luZyBvdmVyIGJyb3dzZXIgc2hvcnRjdXRzLCBidXQgaW4gdGhpcyBjYXNlXG4gICAgICAjIHdlIHdhbnQgdG8gcHJldmVudCB1c2VycyBmcm9tIG92ZXItYmFja3NwYWNpbmdcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gIGNsZWFySXBDaGFuZ2U6IChyZXNldElQcyA9IHRydWUpLT5cbiAgICAjIFVuZG8gYW55IGlwIGNoYW5nZXNcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlXG4gICAgaXBTaG93Q291bnRyaWVzID0gQHN0YXRlLmlwU2hvd0NvdW50cmllc1xuICAgIGlmIGlwQ2hhbmdlLm1hcChmaWx0ZXJUcnV0aHkpLmxlbmd0aCA+IDAgYW5kIGlwU2hvd0NvdW50cmllcy5sZW5ndGggPT0gMVxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCB7c2hvcnRjdXQ6IGlwU2hvd0NvdW50cmllc1swXX1cbiAgICAgIHJldHVybiBpZiBub3QgY291bnRyeT9cbiAgICAgIEBzZXRTdGF0ZSBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgaWYgcmVzZXRJUHNcbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgJ3VzYScsIG51bGwsIC1pcENoYW5nZVswXVxuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCAndXNzcicsIG51bGwsIC1pcENoYW5nZVsxXVxuXG5cbiAgY2xlYXJJcEtleVNlcXVlbmNlOiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgaXBLZXlTZXF1ZW5jZTogJydcbiAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG5cbiAgaXBLZXlTZXF1ZW5jZTogKGNvZGUsIGV2KS0+XG4gICAgI2lmIGNvZGUgPT0gMjdcbiAgICAgICNAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgICNldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAjcmV0dXJuIGZhbHNlXG4gICAgaXBLUyA9IEBzdGF0ZS5pcEtleVNlcXVlbmNlXG4gICAgaXBDaGFuZ2UgPSBAc3RhdGUuaXBJUENoYW5nZVxuICAgIGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG5cbiAgICAjIEJhY2tzcGFjZSAoOCkgc2hvdWxkIGRlbGV0ZSB0aGUgbGFzdCBjaGFyIGZyb20gdGhlIGlwS1MsIGFuZCBzZXQgdGhlIFwiY3VycmVudFwiXG4gICAgIyBjaGFyIHRvIHRoZSBsYXN0IGNoYXJcbiAgICAjIEVudGVyICgxMykgc2hvdWxkXG5cbiAgICBpZiBjb2RlID09IDI3IG9yIGNvZGUgPT0gMTNcbiAgICAgICMgRG9uJ3QgZG8gYW55dGhpbmcgaWYgd2UgZG9uJ3QgaGF2ZSBhbiBpcEtTXG4gICAgICBpZiBub3QgaXBLU1xuICAgICAgICByZXR1cm5cbiAgICAgIGlwc0NoYW5nZWQgPSBpcEtTLmxlbmd0aCA9PSA0IGFuZCBpcENoYW5nZS5maWx0ZXIoZmlsdGVyVHJ1dGh5KS5sZW5ndGggPiAwXG4gICAgICBpZiBjb2RlID09IDI3IGFuZCBpcHNDaGFuZ2VkXG4gICAgICAgIEBjbGVhcklwQ2hhbmdlKClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgY29kZSA9PSAxM1xuICAgICAgICAgIEBjbGVhcklwQ2hhbmdlKGZhbHNlKVxuICAgICAgICBkZWx0YSA9IC0xXG4gICAgICAgICMgQmFjayB1cCB0d28gc3BhY2VzIHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gICAgICAgIGlmIGlwS1MubGVuZ3RoID09IDRcbiAgICAgICAgICBkZWx0YSA9IC0yXG4gICAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsZGVsdGEpXG4gICAgICAgIGNoYXIgPSBpcEtTLnNsaWNlKC0xKVxuICAgICAgICBpcEtTID0gaXBLUy5zbGljZSgwLC0xKVxuXG4gICAgY2hhckxvd2VyID0gY2hhci50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiBub3QgaXBLUyBhbmQgbm90IGNoYXJcbiAgICAgIEBjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgcmV0dXJuXG5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUgZmFsc2VcbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAwIGFuZCBjaGFyTG93ZXIgPT0gJ2knXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgaXBLZXlTZXF1ZW5jZTogJ2knXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG5cbiAgICAjIENvbnRpbmVudCBzZWxlY3Rpb25cbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAxIGFuZCBjaGFyTG93ZXIgaW4gWydjJywncycsJ2UnLCdmJywnYScsJ20nXVxuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY2hhckxvd2VyXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6IGNoYXJMb3dlclxuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG5cbiAgICBjb250aW5lbnQgPSBpcEtTLmNoYXJBdCAxXG5cbiAgICAjIENvdW50cnkgc2VsZWN0aW9uXG4gICAgIyBpcEtTIHNob3VsZCBiZSAnaVtjb250aW5lbnRdJyBvciAnaVtjb250aW5lbnRdW2NvdW50cnlDaGFyXSdcbiAgICBpZiBmYWxzZSBhbmQgMiA8PSBpcEtTLmxlbmd0aCA8PSAzXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIsIDQpXG5cbiAgICAgIGNvdW50cmllcyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMClcblxuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICAgIHNjLmNoYXJBdCgxKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyaWVzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cmllc1xuICAgICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG5cbiAgICAjIFNlZSBpZiB3ZSBoYXZlIGEgY291bnRyeSBcInNlbGVjdGVkXCIgZm9yIGlwIHBsYWNlbWVudFxuICAgIGlmIDIgPD0gaXBLUy5sZW5ndGggPD0gM1xuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLDQpXG5cbiAgICAgIGNvdW50cnlTaG9ydGN1dHMgPSBAcHJvcHMuY291bnRyeVNob3J0Y3V0c1tjb250aW5lbnRdLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICBzYy5jaGFyQXQoMCkgPT0gY291bnRyeUNvZGUuY2hhckF0KDApXG5cbiAgICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAxXG4gICAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcyxcbiAgICAgICAgICBzaG9ydGN1dFVuaXF1ZTogY291bnRyeUNvZGVcbiAgICAgICAgICBjb250aW5lbnQ6IGNvbnRpbmVudENvZGVGcm9tTGV0dGVyIGNvbnRpbmVudFxuICAgICAgICAjIElmIHdlIGhhdmUgYSBjb3VudHJ5LCBhZGQgdGhlIGZ1bGwgY291bnRyeSBjb2RlIHRvIGlwS1NcbiAgICAgICAgaWYgY291bnRyeT9cbiAgICAgICAgICBpcEtTICs9IGNvdW50cnkuc2hvcnRjdXQuY2hhckF0IDFcbiAgICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAyXG4gICAgICAgIGNvdW50cnlTaG9ydGN1dHMgPSBjb3VudHJ5U2hvcnRjdXRzLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICAgIHNjLmNoYXJBdCgxKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyeVNob3J0Y3V0cy5sZW5ndGggIT0gMFxuICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgICAgaXBTaG93Q291bnRyaWVzOiBjb3VudHJ5U2hvcnRjdXRzXG4gICAgICAgICAgaXBJUENoYW5nZTogWzAsMF1cbiAgICAgICAgcmV0dXJuXG5cblxuICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLDQpXG4gICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcyxcbiAgICAgICAgc2hvcnRjdXQ6IGNvdW50cnlDb2RlXG4gICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlIHx8IFswLDBdXG4gICAgICBjb3VudHJ5SVBzID0gQHN0YXRlLmlwc1twYXJzZUludChjb3VudHJ5LmlkLDEwKV1cbiAgICAgIGlmIG5vdCBjb3VudHJ5P1xuICAgICAgICByZXR1cm5cblxuICAgICAgc3dpdGNoIGNoYXJcbiAgICAgICAgd2hlbiAnYSdcbiAgICAgICAgICBzaWRlID0gJ3VzYSdcbiAgICAgICAgICBkaXIgPSAndXAnXG4gICAgICAgICAgaXBDaGFuZ2VbMF0rK1xuICAgICAgICB3aGVuICdBJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgICBpZiBjb3VudHJ5SVBzWzBdID4gMFxuICAgICAgICAgICAgaXBDaGFuZ2VbMF0tLVxuICAgICAgICB3aGVuICdyJ1xuICAgICAgICAgIHNpZGUgPSAndXNzcidcbiAgICAgICAgICBkaXIgPSAndXAnXG4gICAgICAgICAgaXBDaGFuZ2VbMV0rK1xuICAgICAgICB3aGVuICdSJ1xuICAgICAgICAgIHNpZGUgPSAndXNzcidcbiAgICAgICAgICBkaXIgPSAnZG4nXG4gICAgICAgICAgaWYgY291bnRyeUlQc1sxXSA+IDBcbiAgICAgICAgICAgIGlwQ2hhbmdlWzFdLS1cblxuICAgICAgaWYgc2lkZT8gYW5kIGRpcj9cbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgc2lkZSwgZGlyXG5cbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcFNob3dDb3VudHJpZXM6IFtjb3VudHJ5Q29kZV1cbiAgICAgICAgaXBJUENoYW5nZTogaXBDaGFuZ2VcblxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgaGFuZGxlVmFsQ2xpY2s6IChpZCwgZGlyLCBzaWRlKS0+XG4gICAgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ2luYycgdGhlbiAxIGVsc2UgLTFcbiAgICBpZiBpZCBpbiBbJ21pbG9wcycsICdzcGFjZSddXG4gICAgICBpbmRleCA9IGlmIHNpZGUgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1baW5kZXhdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gKyBkZWx0YSlcbiAgICAgIHN0YXRlLmdhbWVbaWRdW2luZGV4XSA9IG5ld1ZhbFxuICAgIGVsc2VcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF0gPSBuZXdWYWxcblxuICAgIG1ldGEgPVxuICAgICAgdHlwZTogJ3ZhbCdcbiAgICAgIHNpZGU6IGlmIHNpZGU/IHRoZW4gc2lkZSBlbHNlICcnXG4gICAgICBpZDogaWRcbiAgICAgIG9sZDogb2xkVmFsXG4gICAgICBuZXc6IG5ld1ZhbFxuXG4gICAgaWYgaWQgPT0gJ3R1cm4nIG9yIGlkID09ICdyb3VuZCdcbiAgICAgIG1ldGEudHlwZSA9IGlkXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLCBtZXRhXG5cblxuICBoYW5kbGVJUENsaWNrOiAobm9kZUlkLCBzaWRlLCBkaXIsIGRlbHRhKS0+XG4gICAgcmV0dXJuIGlmIGRlbHRhPyBhbmQgZGVsdGEgPT0gMFxuXG4gICAgbm9kZSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCB7aWQ6IG5vZGVJZH1cbiAgICAjIERvbid0IGxldCB0aGUgbm9uLWNvdW50cnkgbm9kZXMgZ2V0IHVwZGF0ZWRcbiAgICBpZiBub2RlLnBvaW50cyBvciBub2RlLnN1cGVycG93ZXIgdGhlbiByZXR1cm5cblxuICAgIHN0YXRlID0gQHN0YXRlXG5cbiAgICBpZiBkZWx0YT9cbiAgICAgIGRpciA9IGlmIGRlbHRhID49IDAgdGhlbiAndXAnIGVsc2UgJ2RuJ1xuICAgIGVsc2VcbiAgICAgIGRlbHRhID0gaWYgZGlyID09ICd1cCcgdGhlbiAxIGVsc2UgLTFcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgaXAgKz0gZGVsdGFcbiAgICBpZiBpcCA8IDAgdGhlbiByZXR1cm5cblxuICAgIHNpZ24gPSBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuICAgIHN0YXRlLmlwc1tub2RlSWRdW2luZGV4XSA9IGlwXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLFxuICAgICAgdHlwZTogJ2lwJ1xuICAgICAgc2lkZTogc2lkZVxuICAgICAgY291bnRyeTogbm9kZVxuICAgICAgaXBzOiBzdGF0ZS5pcHNbbm9kZUlkXVxuICAgICAgZGVsdGE6ZGVsdGFcblxuICBoYW5kbGVIaXN0b3J5Q2xpY2s6ICh0eXBlKS0+XG4gICAgQFtcIiN7dHlwZX1IaXN0XCJdKClcblxuICB1bmRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkudW5kbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHJlZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5yZWRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgdG9nZ2xlSGlzdDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIG5vZGVQcm9wcyA9IEBwcm9wcy5ub2RlXG5cbiAgICBzdXBlcnBvd2VyU3RhdHMgPSBzdXBlclN0YXRzIEBzdGF0ZS5pcHMsIEBwcm9wcy5jb3VudHJpZXMsIEBwcm9wcy5yZWdpb25JbmZvTm9kZXNcblxuICAgIGlwS2V5U2VxdWVuY2UgPSBAc3RhdGU/LmlwS2V5U2VxdWVuY2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGU/LmlwU2hvd0NvdW50cmllcyB8fCBbXVxuICAgIGlwU2hvd0NvbnRpbmVudCA9IEBzdGF0ZT8uaXBTaG93Q29udGluZW50XG5cbiAgICBsaW5rcyA9IEBwcm9wcy5saW5rcy5tYXAgKGxpbmtEYXRhKT0+XG4gICAgICBzb3VyY2UgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnNvdXJjZVxuICAgICAgdGFyZ2V0ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS50YXJnZXRcbiAgICAgIG5vZGVzID0ge3NvdXJjZSwgdGFyZ2V0fVxuXG4gICAgICBqVVNBID0gKGxpbmssIHRhcmcpPT5cbiAgICAgICAgamFwYW5VU0FCdW1wID0gMThcbiAgICAgICAgaWYgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnVVNBJykgYW5kIF8uY29udGFpbnMobGluay5ub2RlcywgJ0phcGFuJylcbiAgICAgICAgICByZXR1cm4gbm9kZXNbdGFyZ10ueSAtIGphcGFuVVNBQnVtcFxuICAgICAgICBub2Rlc1t0YXJnXS55XG5cbiAgICAgIGxpbmtQcm9wcyA9XG4gICAgICAgIGtleTogXCJCb2FyZExpbmstI3tsaW5rRGF0YS5zb3VyY2V9LSN7bGlua0RhdGEudGFyZ2V0fVwiXG4gICAgICAgIHgxOiBzb3VyY2UueFxuICAgICAgICB5MTogalVTQShsaW5rRGF0YSwgJ3NvdXJjZScpXG4gICAgICAgIHgyOiB0YXJnZXQueFxuICAgICAgICB5MjogalVTQShsaW5rRGF0YSwgJ3RhcmdldCcpXG4gICAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgICBcImxpbmtcIjogdHJ1ZVxuICAgICAgICAgIFwibGluay1jcm9zc1wiOiBsaW5rRGF0YS5jcm9zc0NvbnRpbmVudFxuICAgICAgICAgIFwibGluay11c2FcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTQSdcbiAgICAgICAgICBcImxpbmstdXNzclwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNTUidcblxuICAgICAgQm9hcmRMaW5rIGxpbmtQcm9wc1xuXG4gICAgbm9kZXMgPSBfLm1hcCBAcHJvcHMubm9kZXMsIChjb3VudHJ5RGF0YSk9PlxuICAgICAgIyBEZXRlcm1pbmUgaWYgY291bnRyeSBzaG91bGQgYmUgb24gdG9wIG9mIHRoZSBpcFBsYWNlbWVudCBtYXNrXG4gICAgICBvblRvcCA9IG5vdCBpcEtleVNlcXVlbmNlIG9yXG4gICAgICAgIGNvdW50cnlEYXRhLnNob3J0Y3V0IGluIGlwU2hvd0NvdW50cmllcyBhbmRcbiAgICAgICAgb25lTGV0dGVyQ29udGluZW50Q29kZShjb3VudHJ5RGF0YS5jb250aW5lbnQpID09IGlwU2hvd0NvbnRpbmVudCBhbmRcbiAgICAgICAgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNFxuICAgICAgaXBTZWxlY3RlZCA9IG9uVG9wIGFuZCBpcFNob3dDb3VudHJpZXMubGVuZ3RoID09IDFcbiAgICAgIHByb3BzID1cbiAgICAgICAgbm9kZTogbm9kZVByb3BzXG4gICAgICAgIGtleTogXCJCb2FyZE5vZGUtI3tjb3VudHJ5RGF0YS5pZH1cIlxuICAgICAgICB4OiBjb3VudHJ5RGF0YS54XG4gICAgICAgIHk6IGNvdW50cnlEYXRhLnlcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0XG4gICAgICAgIGd1dHRlcjogQHByb3BzLm5vZGUuZ3V0dGVyXG4gICAgICAgIHRpdGxlSGVpZ2h0OiBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB0aXRsZUZvbnRTaXplOiBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG4gICAgICAgIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrXG4gICAgICAgICMgRGV0ZXJtaW5lIGlmIHRoZSBjb3VudHJ5IHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIGlwIHNob3J0Y3V0IGxheWVyXG4gICAgICAgIG9uVG9wOiBvblRvcFxuICAgICAgICBpcFNlbGVjdGVkOiBpcFNlbGVjdGVkXG5cblxuICAgICAgXy5hc3NpZ24gcHJvcHMsIGNvdW50cnlEYXRhXG5cbiAgICAgIGlmKHByb3BzLnN1cGVycG93ZXIpXG4gICAgICAgIHByb3BzLnN0YXRzID1cbiAgICAgICAgICBjb3VudHJpZXM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMuY291bnRyaWVzW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsnYnRsJywgJ25vbicsICd0b3RhbCddXG4gICAgICAgICAgcmVnaW9uczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5yZWdpb25zW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsncHJlc2VuY2UnLCAnZG9taW5hdGlvbicsICdjb250cm9sJ11cblxuICAgICAgaWYocHJvcHMucG9pbnRzKVxuICAgICAgICBwcm9wcy5zdGF0cyA9IGdldFJlZ2lvblN0YXR1c1xuICAgICAgICAgIHVzYTogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNhW3Byb3BzLmlkXVxuICAgICAgICAgIHVzc3I6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzc3JbcHJvcHMuaWRdXG5cbiAgICAgIGNvdW50cnlJZCA9IHBhcnNlSW50IGNvdW50cnlEYXRhLmlkLCAxMFxuICAgICAgaWYgY291bnRyeUlkIG9mIEBzdGF0ZS5pcHNcbiAgICAgICAgcHJvcHMudXNhID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzBdXG4gICAgICAgIHByb3BzLnVzc3IgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMV1cblxuICAgICAgQm9hcmROb2RlRGl2IHByb3BzXG5cbiAgICBib2FyZFN0YXR1c0F0dHJzID1cbiAgICAgIHJlZjonQm9hcmRTdGF0dXMnXG4gICAgICBoYW5kbGVWYWxDbGljazogQGhhbmRsZVZhbENsaWNrXG4gICAgICBoYW5kbGVIaXN0b3J5Q2xpY2s6IEBoYW5kbGVIaXN0b3J5Q2xpY2tcblxuXG5cbiAgICBjb250aW5lbnRTaG9ydGN1dHMgPSBjb250aW5lbnRTaG9ydGN1dERhdGEubWFwIChvKT0+XG4gICAgICBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA9PSAxXG4gICAgICAgIHNob3cgPSAnaW4nXG4gICAgICBhdHRycyA9XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dENvbnRpbmVudCBCb2FyZC1zaG9ydGN1dCAje3Nob3d9XCJcbiAgICAgICAgc3R5bGU6XG4gICAgICAgICAgbGVmdDogby54XG4gICAgICAgICAgdG9wOiBvLnlcbiAgICAgIFIuZGl2IGF0dHJzLCBvLmNoYXJcblxuICAgIG5vZGVzQnlDb250aW5lbnQgPSBfLmdyb3VwQnkgQHByb3BzLmNvdW50cmllcywgJ2NvbnRpbmVudCdcblxuICAgIGNvdW50cnlTaG9ydGN1dHMgPSBfLm1hcCBub2Rlc0J5Q29udGluZW50LCAobm9kZXMsIGNvbnRpbmVudCk9PlxuICAgICAgY29udEtleSA9IG9uZUxldHRlckNvbnRpbmVudENvZGUgY29udGluZW50XG4gICAgICBub2RlQ29tcG9uZW50cyA9IF8ubWFwIG5vZGVzLCAobm9kZSk9PlxuICAgICAgICBpZiBub2RlLnN1cGVycG93ZXI/IG9yIG5vZGUucG9pbnRzP1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIHNob3cgPSAnJ1xuICAgICAgICBpcEtTTCA9IGlwS2V5U2VxdWVuY2UubGVuZ3RoXG4gICAgICAgIGlmIGlwS1NMIDwgNCBhbmQgXy5jb250YWlucyhAc3RhdGUuaXBTaG93Q291bnRyaWVzLCBub2RlLnNob3J0Y3V0KSBhbmQgQHN0YXRlLmlwU2hvd0NvbnRpbmVudCA9PSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvbnRpbmVudClcbiAgICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgICBhdHRycyA9XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0IEJvYXJkLXNob3J0Y3V0Q291bnRyeSAje3Nob3d9XCJcbiAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgIGxlZnQ6IG5vZGUueFxuICAgICAgICAgICAgdG9wOiBub2RlLnlcbiAgICAgICAgUi5kaXYgYXR0cnMsIHVwcGVyRmlyc3Qobm9kZS5zaG9ydGN1dFVuaXF1ZSlcblxuICAgICAgbm9kZUNvbXBvbmVudHNcblxuICAgIGNvbnRDb3VudHJ5ID0gY29udENvdW50cnlTZWxlY3Rpb24gQHByb3BzLnJlZ2lvbkluZm9Ob2RlcywgQHByb3BzLmNvdW50cmllcywgaXBLZXlTZXF1ZW5jZVxuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICBpcENoYW5nZVVTQSA9IGlmIGlwS2V5U2VxdWVuY2UubGVuZ3RoID49IDQgdGhlbiBSLnNwYW4gY2xhc3NOYW1lOiAnQm9hcmQtaXBIZWFkZXItdXNhJywgc2lnbmVkTnVtT3JEYXNoKGlwQ2hhbmdlWzBdKSBlbHNlIG51bGxcbiAgICBpcENoYW5nZVVTU1IgPSBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0IHRoZW4gUi5zcGFuIGNsYXNzTmFtZTogJ0JvYXJkLWlwSGVhZGVyLXVzc3InLCBzaWduZWROdW1PckRhc2goaXBDaGFuZ2VbMV0pIGVsc2UgbnVsbFxuICAgIGlwQ291bnRyeSA9IGNvbnRDb3VudHJ5LmNvdW50cnkgfHwgaWYgY29udENvdW50cnkuY29udGluZW50IHRoZW4gJ1NlbGVjdCBhIGNvdW50cnknXG4gICAgaXBDb250Q291bnRyeSA9IFtcbiAgICAgIGlwQ2hhbmdlVVNBXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRDb3VudFwiLCBbXG4gICAgICAgIFIuaDMgY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRpbmVudCAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgY29udENvdW50cnkuY29udGluZW50Py5zaG9ydG5hbWUgb3IgJ1NlbGVjdCBhIGNvbnRpbmVudCdcbiAgICAgICAgUi5oMyBjbGFzc05hbWU6IFwiQm9hcmQtaXBIZWFkZXItQ291bnRyeSAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgaXBDb3VudHJ5XG4gICAgICBdXG4gICAgICBpcENoYW5nZVVTU1JcbiAgICBdXG5cblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkJywgW1xuICAgICAgUi5zdmcgd2lkdGg6QHByb3BzLndpZHRoLCBoZWlnaHQ6QHByb3BzLmhlaWdodCwgcmVmOiAnc3ZnJywgW1xuICAgICAgICBsaW5rc1xuICAgICAgXVxuICAgICAgbm9kZXNcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dEhlYWRlciAje2lmIGlwS2V5U2VxdWVuY2UgdGhlbiAnaW4nIGVsc2UgJyd9XCIsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29weScsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIlBsYWNpbmcgSW5mbHVlbmNlXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCBbXG4gICAgICAgICAgICBSLmEgb25DbGljazogQGNsZWFySXBLZXlTZXF1ZW5jZSwgW1xuICAgICAgICAgICAgICBcIkNhbmNlbCAoXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgXCJlc2NcIlxuICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5hIGNsYXNzTmFtZTogKGlmIGlwQ2hhbmdlWzBdID09IDAgYW5kIGlwQ2hhbmdlWzFdID09IDAgdGhlbiAnZGlzYWJsZWQnKSwgb25DbGljazogQGlwS2V5U2VxdWVuY2UuYmluZChudWxsLCAxMyksIFtcbiAgICAgICAgICAgICAgXCJDb25maXJtIChcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCBcImVudGVyXCJcbiAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOidjaGFycycsIGlwQ29udENvdW50cnlcbiAgICAgIF1cbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dE1hc2sgI3tpZiBpcEtleVNlcXVlbmNlIHRoZW4gJ2luJyBlbHNlICcnfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnRzICN7aWYgaXBLZXlTZXF1ZW5jZSBhbmQgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPD0gMSB0aGVuICdpbicgZWxzZSAnJ31cIixcbiAgICAgICAgY29udGluZW50U2hvcnRjdXRzXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzXG4gICAgICBCb2FyZFN0YXR1cyBfLmFzc2lnbiBib2FyZFN0YXR1c0F0dHJzLCBAc3RhdGUuZ2FtZVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZExpbmsnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogLT5cbiAgICBmYWxzZVxuICByZW5kZXI6IC0+XG4gICAgUi5saW5lIEBwcm9wc1xuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5cblxuQm9hcmROb2RlSVAgPSByZXF1aXJlICcuL0JvYXJkTm9kZUlQJ1xuIFxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIEFzc3VtZSBjb3VudHJ5XG4gICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMudXNhICE9IEBwcm9wcy51c2Egb3IgbmV4dFByb3BzLnVzc3IgIT0gQHByb3BzLnVzc3JcbiAgICAjIENvbnRpbmVudCBsYWJlbHNcbiAgICBpZiBAcHJvcHMucG9pbnRzP1xuICAgICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMuc3RhdHMudXNhICE9IEBwcm9wcy5zdGF0cy51c2Egb3JcbiAgICAgICAgbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIFN1cGVycG93ZXIgbGFiZWxzXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIG5QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgdFBTID0gQHByb3BzLnN0YXRzXG4gICAgICBzaG91bGRJdCA9IG5QUy5jb3VudHJpZXMuYnRsICE9IHRQUy5jb3VudHJpZXMuYnRsIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmRvbWluYXRpb24gIT0gdFBTLnJlZ2lvbnMuZG9taW5hdGlvbiBvclxuICAgICAgICBuUFMucmVnaW9ucy5jb250cm9sICE9IHRQUy5yZWdpb25zLmNvbnRyb2xcblxuICAgIHNob3VsZEl0XG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IEBwcm9wcy50cmFuc2Zvcm1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlJzogdHJ1ZVxuICAgICAgICAnbm9kZS1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGUtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGUtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlLXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgc3RhYlRleHQgPSBbXG4gICAgICAgIFIudHNwYW4ge30sIFwiQmF0dGxlOiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonbnVtQnRsJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgIF1cbiAgICAgIHN0YWJUZXh0QXR0cnMueCA9IDBcbiAgICAgIHN0YWJUZXh0QXR0cnMueSArPSAxXG5cblxuXG4gICAgcmVnaW9uVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogaWYgQHByb3BzLnBvaW50cyBvciBAcHJvcHMuc3VwZXJwb3dlciB0aGVuICdub2RlLXRleHQnIGVsc2UgJ2hpZGUnXG4gICAgICB4OiAwXG4gICAgICB5OiAxMFxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG5cblxuICAgIHJlZ2lvblRleHQgPSAnJ1xuICAgIGlmIEBwcm9wcy5wb2ludHNcbiAgICAgIHJlZ2lvbkN4ID0gKGtleSk9PlxuICAgICAgICBvYmogPVxuICAgICAgICAgIHVzYTogQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgICB1c3NyOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXlcbiAgICAgICAgICBib3RoOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXkgYW5kIEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgIG9ialtrZXldID0gdHJ1ZVxuICAgICAgICBjeCBvYmpcbiAgICAgICAgXG4gICAgICBjQ04gPSByZWdpb25DeCAnY29udHJvbCdcbiAgICAgIGRDTiA9IHJlZ2lvbkN4ICdkb21pbmF0aW9uJ1xuICAgICAgcENOID0gcmVnaW9uQ3ggJ3ByZXNlbmNlJ1xuXG4gICAgICByZWdpb25UZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6ZENOLCBAcHJvcHMucG9pbnRzWzFdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlLWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlLWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGUtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgICMgTm9kZSBiZ1xuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIHBvbHlcblxuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtdGl0bGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMudGl0bGVIZWlnaHRcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgUi5saW5lXG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtbGluZSdcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICB4MTogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkxOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgeDI6IEBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkyOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcblxuICAgICAgUi50ZXh0IHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICBSLnRleHQgc3RhYlRleHRBdHRycywgc3RhYlRleHRcbiAgICAgIFIudGV4dCByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgICAgI1IudGV4dCBzaG9ydEN1dEF0dHJzLCBAcHJvcHMuc2hvcnRjdXRcblxuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c2EnLCBpcDogQHByb3BzLnVzYSwgY3RybDogY29udHJvbFVTQSwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNhJ1xuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c3NyJywgaXA6IEBwcm9wcy51c3NyLCBjdHJsOiBjb250cm9sVVNTUiwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNzcidcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUERpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVBEaXYnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlRGl2J1xuXG4gICNzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIyBBc3N1bWUgY291bnRyeVxuICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMjIENvbnRpbmVudCBsYWJlbHNcbiAgICAjaWYgQHByb3BzLnBvaW50cz9cbiAgICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICAjbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIyBTdXBlcnBvd2VyIGxhYmVsc1xuICAgICNpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgI25QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgI3RQUyA9IEBwcm9wcy5zdGF0c1xuICAgICAgI3Nob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgI25QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5kb21pbmF0aW9uICE9IHRQUy5yZWdpb25zLmRvbWluYXRpb24gb3JcbiAgICAgICAgI25QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuI1xuICAgICNzaG91bGRJdFxuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIHJlbmRlcjogLT5cbiAgICBjb250cm9sVVNBID0gKEBwcm9wcy51c2EgLSBAcHJvcHMudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAcHJvcHMudXNzciAtIEBwcm9wcy51c2EpID49IEBwcm9wcy5zdGFiXG5cblxuICAgIGdBdHRycyA9XG4gICAgICBzdHlsZTpcbiAgICAgICAgbGVmdDogQHByb3BzLnggLSBAcHJvcHMud2lkdGgvMiArICdweCdcbiAgICAgICAgdG9wOiBAcHJvcHMueSAtIEBwcm9wcy5oZWlnaHQvMiArICdweCdcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlZGl2JzogdHJ1ZVxuICAgICAgICAnbm9kZWRpdi1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGVkaXYtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlZGl2LXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtb24tdG9wJzogQHByb3BzLm9uVG9wIGFuZCBub3QgKEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICAnbm9kZWRpdi1zZWxlY3RlZCc6IEBwcm9wcy5pcFNlbGVjdGVkXG5cblxuICAgIHRpdGxlVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXRpdGxlLXRleHRcIlxuICAgICAgeDogaWYgQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtQHByb3BzLm5vZGUud2lkdGgvMiArIDJcbiAgICAgIHk6IGlmIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICAgICAtNlxuICAgICAgICAgIGVsc2UgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDZcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcblxuXG4gICAgc3RhYlRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1zdGFiXCJcbiAgICAgIHg6IChAcHJvcHMubm9kZS53aWR0aC8yKSAtIDEwXG4gICAgICB5OiAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemUgKyAxXG5cblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGVkaXYtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlZGl2LWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlZGl2LWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGVkaXYtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcblxuICAgIGlzQ291bnRyeSA9IEBwcm9wcy5zdXBlcnBvd2VyIG9yIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgaWYgbm90IGlzQ291bnRyeVxuICAgICAgaXBVU0EgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBpcFVTU1IgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgICAgc3RhYiA9IFIuc3BhbiBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgIGVsc2VcbiAgICAgIHJlZ2lvbkluZm8gPSBSLnNwYW4gcmVnaW9uVGV4dEF0dHJzLCByZWdpb25UZXh0XG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgYnRsID1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ25vZGVkaXYtYnRsLW51bScsIFtcbiAgICAgICAgICBcIkJhdHRsZTogXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc3Ryb25nJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgICAgXVxuXG4gICAgUi5kaXYgZ0F0dHJzLCBbXG4gICAgICBidGxcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ25vZGVkaXYtdGl0bGUnLCBbXG4gICAgICAgIFIuc3BhbiB0aXRsZVRleHRBdHRycywgQHByb3BzLnNob3J0bmFtZVxuICAgICAgICBzdGFiXG4gICAgICBdXG4gICAgICByZWdpb25JbmZvXG4gICAgICAjUi50ZXh0IHNob3J0Q3V0QXR0cnMsIEBwcm9wcy5zaG9ydGN1dFxuICAgICAgaXBVU0FcbiAgICAgIGlwVVNTUlxuICAgICAgICBcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlSVAnXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUERpdidcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgJGVsID0gJChAcmVmcy5ub2RlZGl2LmdldERPTU5vZGUoKSlcbiAgICAkZWwuYWRkQ2xhc3MgJ25vZGVkaXYtZmxhc2gnXG4gICAgZm4gPSAtPiAkZWwucmVtb3ZlQ2xhc3MoJ25vZGVkaXYtZmxhc2gnKVxuICAgIHNldFRpbWVvdXQgZm4sIDEwMFxuXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBpcFplcm8gPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdpcFplcm8nIGVsc2UgJydcblxuICAgIGdBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC0je0Bwcm9wcy5zaWRlfSBub2RlZGl2LWlwICN7aXBaZXJvfVwiXG4gICAgICByZWY6ICdub2RlZGl2J1xuXG4gICAgdGV4dEF0dHJzID1cbiAgICAgIHg6IEBwcm9wcy5ub2RlLndpZHRoLzRcbiAgICAgIHk6IEBwcm9wcy5ub2RlLmhlaWdodC8yIC0gMVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtdGV4dFwiXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIGlwID0gaWYgQHByb3BzLmlwID4gMCB0aGVuIEBwcm9wcy5pcCBlbHNlICcnXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIFIuc3BhbiB0ZXh0QXR0cnMsIGlwXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC1jbGljay11cFwiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ3VwJ1xuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stZG5cIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5cbkJvYXJkU3RhdGVIaXN0b3J5RW50cnkgPSByZXF1aXJlICcuL0JvYXJkU3RhdGVIaXN0b3J5RW50cnknXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICByOiAwXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5vbiAndXBkYXRlJywgPT5cbiAgICAgIEBmb3JjZVVwZGF0ZSgpXG5cbiAgICAjZm4gPSAoKT0+XG4gICAgICAjQHNldFN0YXRlIHI6IE1hdGgucmFuZG9tKClcbiAgICAgICNzZXRUaW1lb3V0IGZuLCAyMDAwXG4gICAgI2ZuKClcbiAgIFxuICBoYW5kbGVTSENsaWNrOiAoaWQpLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaWRcblxuICBoYW5kbGVDbG9zZUhpc3Rvcnk6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5oaWRlKClcblxuICByZW5kZXI6IC0+XG4gICAgc3RhdGVDb21wb25lbnRzID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRBbGwoKS5tYXAgKHNoLCBpbmRleCk9PlxuICAgICAgc2hNID0gc2gubWV0YVxuICAgICAgIyBJUCBwbGFjZW1lbnQgaW4gY291bnRyeVxuICAgICAgaWYgc2hNLmNvdW50cnk/XG4gICAgICAgIGtleSA9IFwiY291bnRyeS0je3NoTS5jb3VudHJ5LmlkfVwiXG4gICAgICBlbHNlXG4gICAgICAgIGtleSA9IFwiI3tzaE0uaWR9LSN7c2hNLnNpZGV9XCJcblxuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeVxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlU0hDbGljay5iaW5kIHRoaXMsIGluZGV4XG4gICAgICAgIGtleTogXCJCU0hFLSN7aW5kZXh9LSN7a2V5fVwiXG4gICAgICAgIGlzTGF0ZXN0OiBAcHJvcHMuc3RhdGVIaXN0b3J5LmxhdGVzdCA9PSBpbmRleFxuICAgICAgICBpc0N1cnJlbnQ6IEBwcm9wcy5zdGF0ZUhpc3RvcnkuY3VycmVudCA9PSBpbmRleFxuICAgICAgICBzaDogc2hcblxuICAgIGRpdkF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ1N0YXRlSGlzdG9yeSc6IHRydWVcbiAgICAgICAgJ2luJzogQHByb3BzLnN0YXRlSGlzdG9yeS5zaG93XG5cbiAgICBSLmRpdiBkaXZBdHRycywgW1xuICAgICAgUi5hIGNsYXNzTmFtZTogJ2Nsb3NlIHB1bGwtcmlnaHQnLCBvbkNsaWNrOiBAaGFuZGxlQ2xvc2VIaXN0b3J5LCBbXG4gICAgICAgICdDbG9zZSAnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoaCknXG4gICAgICBdXG4gICAgICBSLmgzIHt9LCBcIkFjdGlvbiBIaXN0b3J5XCJcbiAgICAgIFIudWwgY2xhc3NOYW1lOiAnbGlzdC11bnN0eWxlZCcsIHN0YXRlQ29tcG9uZW50cy5yZXZlcnNlKClcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5nYW1lVmFsRGlzcGxheSA9IHJlcXVpcmUgJy4uL2xpYnMvZ2FtZVZhbERpc3BsYXknXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcbmludFRvU3RyV2l0aFNpZ24gPSByZXF1aXJlICcuLi9saWJzL2ludFRvU3RyV2l0aFNpZ24nXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJwb3dlclRvSW5kZXgnXG5cbnNjb3JlU2lkZSA9IChzY29yZSktPlxuICBpZiBzY29yZSA8IDBcbiAgICByZXR1cm4gJ3Vzc3InXG4gIGlmIHNjb3JlID4gMFxuICAgIHJldHVybiAndXNhJ1xuICAnJ1xuXG5cbnNoRW50cnkgPSAoc2gpLT5cbiAgcm91bmRTaWRlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAlIDIgPT0gMCB0aGVuICd1c2EnIGVsc2UgJ3Vzc3InXG4gIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgIHJvdW5kU2lkZSA9ICcnXG5cbiAgaWYgc2guc3RhdGUuZ2FtZS50dXJuID4gMTBcbiAgICB0dXJuID0gXCJFTkRcIlxuICAgIHJvdW5kID0gJydcbiAgZWxzZSBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAwXG4gICAgdHVybiA9IFwiVCN7Z2FtZVZhbERpc3BsYXkoJ3R1cm4nLCBzaC5zdGF0ZS5nYW1lLnR1cm4pfS1cIlxuICAgIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgIT0gMFxuICAgICAgcm91bmQgPSBcIkFSI3tnYW1lVmFsRGlzcGxheSgncm91bmQnLCBzaC5zdGF0ZS5nYW1lLnJvdW5kKX1cIlxuICAgIGVsc2VcbiAgICAgIHJvdW5kID0gXCJIRUFEXCJcbiAgZWxzZVxuICAgIHR1cm4gPSBcIlNFVFVQXCJcbiAgICByb3VuZCA9ICcnXG5cbiAgdHVyblJvdW5kID1cbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHVyblJvdW5kJywgW1xuICAgICAgdHVyblxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogcm91bmRTaWRlLCByb3VuZFxuICAgIF1cblxuICBzaFNpZGUgPSBzaC5tZXRhLnNpZGVcblxuICBzd2l0Y2ggc2gubWV0YS50eXBlXG4gICAgIyBMb2FkIHN0YXRlIGZyb20gdXJsXG4gICAgd2hlbiAnbG9hZCdcbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsICdMb2FkZWQgc3RhdGUgZnJvbSBVUkwnXG4gICAgICBdXG4gICAgd2hlbiAnaXAnXG4gICAgICBbaXBVU0EsIGlwVVNTUl0gPSBzaC5tZXRhLmlwc1xuICAgICAgY291bnRyeSA9IHNoLm1ldGEuY291bnRyeVxuICAgICAgY3RybFVTQSA9IGlmIChpcFVTQSAtIGlwVVNTUikgPj0gY291bnRyeS5zdGFiIHRoZW4gJ2NvbnRyb2wnIGVsc2UgJydcbiAgICAgIGN0cmxVU1NSID0gaWYgKGlwVVNTUiAtIGlwVVNBKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuXG4gICAgICBpZiBzaC5tZXRhLnNpZGUgPT0gJ2JvdGgnXG4gICAgICAgIGlwcyA9IFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbMF1cbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcImRpdmlkZXJcIiwgJy8nXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVsxXVxuICAgICAgICBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwcyA9IFIuc3BhbiBjbGFzc05hbWU6IFwiI3tzaC5tZXRhLnNpZGV9IGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVtzdXBlcnBvd2VyVG9JbmRleCBzaC5tZXRhLnNpZGVdXG5cbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGlwc1xuICAgICAgICBcIiBpbiAje3NoLm1ldGEuY291bnRyeS5zaG9ydG5hbWV9IChcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSAje2N0cmxVU0F9XCIsIHNoLm1ldGEuaXBzWzBdXG4gICAgICAgIFwiL1wiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNzciAje2N0cmxVU1NSfVwiLCBzaC5tZXRhLmlwc1sxXVxuICAgICAgICBcIilcIlxuICAgICAgXVxuICAgIHdoZW4gJ3ZhbCdcbiAgICAgIG9sZFNpZGUgPSBuZXdTaWRlID0gc2gubWV0YS5zaWRlXG5cbiAgICAgIGlmIHNoLm1ldGEuaWQgPT0gJ3Njb3JlJ1xuICAgICAgICBvbGRTaWRlID0gc2NvcmVTaWRlIHNoLm1ldGEub2xkXG4gICAgICAgIG5ld1NpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5uZXdcblxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBcIiN7dXBwZXJGaXJzdChzaC5tZXRhLmlkKX0gXCJcbiAgICAgICAgUi5zdHJvbmcgY2xhc3NOYW1lOiBvbGRTaWRlLCBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5vbGQsICdsb25nJyl9IFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdhcnJvdycsICfinpQgJ1xuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG5ld1NpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgXVxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgc2lkZSA9IHJvdW5kU2lkZVxuICAgICAgcm91bmRUaXRsZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgICAgICAgIFwiSGVhZGxpbmUgUGhhc2VcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgXCIje3NpZGUudG9VcHBlckNhc2UoKX0gQWN0aW9uIFJvdW5kICN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgICAgICBcbiAgICAgICNzaWRlID0gWyd1c3NyJywgJ3VzYSddWyhzaC5zdGF0ZS5nYW1lLnJvdW5kICsgMSkgJSAyXVxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBzaWRlLCByb3VuZFRpdGxlXG4gICAgICBdXG4gICAgd2hlbiAndHVybidcbiAgICAgIGRpc3AgPSBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgIGlmIHNoLnN0YXRlLmdhbWUudHVybiAhPSAwIGFuZCBzaC5zdGF0ZS5nYW1lLnR1cm4gPD0gMTBcbiAgICAgICAgZGlzcCA9IFwiVHVybiAje2Rpc3B9XCJcbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGRpc3BcbiAgICAgIF1cbiAgICBlbHNlXG4gICAgICBzaC5tZXRhLm1zZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIHNob3VsZEl0ID0gZmFsc2VcbiAgICB0UCA9IEBwcm9wc1xuICAgIHRTaE0gPSBAcHJvcHMuc2gubWV0YVxuICAgIG5TaE0gPSBuUC5zaC5tZXRhXG4gICAgIyBJUCBwbGFjZW1lbnRcbiAgICBpZiB0U2hNPy5pcHM/XG4gICAgICBzaG91bGRJdCA9IHRTaE0uaXBzWzBdICE9IG5TaE0uaXBzWzBdIG9yXG4gICAgICAgIHRTaE0uaXBzWzFdICE9IG5TaE0uaXBzWzFdXG4gICAgaWYgdFNoTS50eXBlID09ICd2YWwnXG4gICAgICBzaG91bGRJdCA9IHRTaE0ubmV3ICE9IG5TaE0ubmV3XG4gICAgIyBJZiBjdXJyZW50L2xhdGVzdCBjaGFuZ2VkXG4gICAgaWYgdFAuaXNMYXRlc3QgIT0gblAuaXNMYXRlc3Qgb3IgdFAuaXNDdXJyZW50ICE9IG5QLmlzQ3VycmVudFxuICAgICAgc2hvdWxkSXQgPSB0cnVlXG5cbiAgICBzaG91bGRJdFxuXG4gIHJlbmRlcjotPlxuICAgIGF0dHJzID1cbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5vbkNsaWNrXG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICdjbGVhcmZpeCc6IHRydWVcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1sYXRlc3QnOiBAcHJvcHMuaXNMYXRlc3RcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1jdXJyZW50JzogQHByb3BzLmlzQ3VycmVudFxuICAgIFIubGkgYXR0cnMsIHNoRW50cnkoQHByb3BzLnNoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmRTdGF0dXNWYWx1ZSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXNWYWx1ZSdcbkRpZSA9IHJlcXVpcmUgJy4vRGllJ1xuXG50YWJsZSA9XG4gICdTY29yZSc6ICdTJ1xuICAnRGVmY29uJzogJ0QnXG4gICdNaWxPcHMtdXNhJzogJ00nXG4gICdNaWxPcHMtdXNzcic6ICdPJ1xuICAnVHVybic6ICdUJ1xuICAnUm91bmQnOiAnUidcbiAgJ1NwYWNlLXVzYSc6ICdwJ1xuICAnU3BhY2UtdXNzcic6ICdhJ1xuICAnQWN0aW9uIEhpc3RvcnknOiAnSCdcbiAgJ1JvbGwgZGljZSc6ICdjJ1xuXG5oaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgPSAodGl0bGUsc2lkZT0nJyktPlxuICB0aXRsZVNpZGUgPSB0aXRsZVxuICBpZiBzaWRlICE9ICcnIGFuZCB0aXRsZSAhPSAnUm91bmQnIGFuZCB0aXRsZSAhPSAnU2NvcmUnXG4gICAgdGl0bGVTaWRlID0gXCIje3RpdGxlfS0je3NpZGV9XCJcblxuICBbaGVhZCwgdGFpbF0gPSB0aXRsZS5zcGxpdCB0YWJsZVt0aXRsZVNpZGVdXG4gIG1pZCA9IHRhYmxlW3RpdGxlU2lkZV1cbiAgW1xuICAgIGhlYWRcbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAnU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCBtaWRcbiAgICB0YWlsXG4gIF1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzJ1xuXG4gIHJvbGxEaWNlOiAtPlxuICAgIF8uZWFjaCBAcmVmcywgKHJlZiktPiByZWYucm9sbERpZSgpXG5cbiAgaGFuZGxlQm90aENsaWNrOiAtPlxuICAgIEByb2xsRGljZSgpXG5cbiAgcmVuZGVyOiAtPlxuICBcbiAgICBzY29yZVNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5zY29yZSAhPSAwXG4gICAgICBzY29yZVNpZGUgPSBpZiBAcHJvcHMuc2NvcmUgPCAwIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgUm91bmQ6IDAgaXMgaGVhZGxpbmUsIG9kZHMgYXJlIFVTU1IsIGV2ZW5zIGFyZSBVU0FcbiAgICByb3VuZCA9IGlmIEBwcm9wcy5yb3VuZCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKEBwcm9wcy5yb3VuZCAvIDIpXG4gICAgcm91bmRTaWRlID0gJydcbiAgICBpZiBAcHJvcHMucm91bmQgIT0gMFxuICAgICAgcm91bmRTaWRlID0gaWYgQHByb3BzLnJvdW5kICUgMiA9PSAxIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgIHR1cm4gPSBzd2l0Y2ggQHByb3BzLnR1cm5cbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSBAcHJvcHMudHVyblxuXG4gICAgIyBTaG9ydGhhbmQgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgc3RhdHVzVmFsdWUgPSAoaWQ9JycsIHRpdGxlPScnLCB2YWw9JycsIHNpZGU9JycpPT5cbiAgICAgIHRpdGxlID0gaGlsaWdodFNob3J0Y3V0TGV0dGVyIHRpdGxlLCBzaWRlXG4gICAgICBCb2FyZFN0YXR1c1ZhbHVlIF8uYXNzaWduIHtpZCwgdGl0bGUsIHZhbCwgc2lkZX0sIGhhbmRsZVZhbENsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2tcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRTdGF0dXMnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzY29yZScsICdTY29yZScsIE1hdGguYWJzKEBwcm9wcy5zY29yZSksIHNjb3JlU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnZGVmY29uJywgJ0RlZmNvbicsIEBwcm9wcy5kZWZjb25cbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sJywgW1xuICAgICAgICBzdGF0dXNWYWx1ZSAndHVybicsICdUdXJuJywgdHVyblxuICAgICAgICBzdGF0dXNWYWx1ZSAncm91bmQnLCAnUm91bmQnLCByb3VuZCwgcm91bmRTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzcGFjZScsICdTcGFjZScsIEBwcm9wcy5zcGFjZVswXSwgJ3VzYSdcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scycsIFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy11bmRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3VuZG8nKSwgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHopJ1xuICAgICAgICAgICAgJyBVbmRvJ1xuICAgICAgICAgIF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1oaXN0b3J5JyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3RvZ2dsZScpLFxuICAgICAgICAgICAgaGlsaWdodFNob3J0Y3V0TGV0dGVyICdBY3Rpb24gSGlzdG9yeSdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1yZWRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3JlZG8nKSwgW1xuICAgICAgICAgICAgJ1JlZG8gJ1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHkpJ1xuICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2RpY2UnLCBbXG4gICAgICAgIERpZSByZWY6ICdkaWUtdXNhJywgc2lkZTogJ3VzYSdcbiAgICAgICAgUi5hIGNsYXNzTmFtZTogJ3JvbGwtZGljZScsIG9uQ2xpY2s6IEBoYW5kbGVCb3RoQ2xpY2ssIGhpbGlnaHRTaG9ydGN1dExldHRlcignUm9sbCBkaWNlJylcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c3NyJywgc2lkZTogJ3Vzc3InXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzVmFsdWUnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAudmFsICE9IEBwcm9wcy52YWwgb3IgblAuc2lkZSAhPSBAcHJvcHMuc2lkZVxuICByZW5kZXI6IC0+XG4gICAgc2lkZUNsYXNzID0gc3dpdGNoIEBwcm9wcy5zaWRlXG4gICAgICB3aGVuICd1c2EnLCAndXNzcicgdGhlbiBAcHJvcHMuc2lkZVxuICAgICAgZWxzZSAnJ1xuXG4gICAgZGVjQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnZGVjJ1xuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnZGVjJywgQHByb3BzLnNpZGUpXG4gICAgaW5jQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnaW5jJyxcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2luYycsIEBwcm9wcy5zaWRlKVxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNMYWJlbFwiLCBAcHJvcHMudGl0bGVcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNWYWx1ZSAje3NpZGVDbGFzc31cIiwgW1xuICAgICAgICBSLnNwYW4gZGVjQXR0cnMsICfil4AnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd2YWwnLCBAcHJvcHMudmFsXG4gICAgICAgIFIuc3BhbiBpbmNBdHRycywgJ+KWtidcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5jYXJkU3RhZ2VzID0gMTonRUFSTFknLCAyOidNSUQnLCAzOidMQVRFJ1xuXG5jYXJkQ2xhc3NOYW1lID0gKHByb3BzKSAtPlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBcIm93bmVyLSN7cHJvcHMub3duZXJ9IGNhcmQtdmlldy0je3Byb3BzLnZpZXd9ICN7Y2xhc3Nlc31cIlxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZCdcbiAgcmVuZGVyOiAtPlxuICAgIG1haW4gPSBbXG4gICAgICAgIFIuc3BhbiB7Y2xhc3NOYW1lOiAnY2FyZC10aXRsZS1ob2xkZXInIH0sIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1zdGFnZScsIGNhcmRTdGFnZXNbQHByb3BzLnN0YWdlXVxuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC1vcHMnLCBpZiBAcHJvcHMub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgQHByb3BzLm9wc1xuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScsIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMudGl0bGV9IFwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1pZCcsIFwiIyN7QHByb3BzLmlkfVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIucCBjbGFzc05hbWU6ICdjYXJkLXRleHQnLCBAcHJvcHMudGV4dFxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICAgIG1haW4gPVxuICAgICAgICBSLmltZ1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcmQtaW1nJ1xuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG5cbiAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsIGNsYXNzTmFtZTogY2FyZENsYXNzTmFtZShAcHJvcHMpICsgJyBjYXJkJywgbWFpblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRJbWcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkIGNhcmRJbWcnLFxuICAgICAgUi5hIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICBSLmltZyBzcmM6IFwiL2ltYWdlcy9jYXJkcy9zbS8je3plcm9QYWQgQHByb3BzLmlkfS5qcGdcIlxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQ2FyZCA9IHJlcXVpcmUgJy4vQ2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRMaXN0J1xuICByZW5kZXI6IC0+XG4gICAgY2xhc3NOYW1lID0gY3hcbiAgICAgICdjYXJkTGlzdCc6IHRydWVcbiAgICAgICdjYXJkTGlzdEZ1bGwnOiBAcHJvcHMudmlldyA9PSAndGV4dCdcbiAgICAgICdjYXJkTGlzdEltZyc6IEBwcm9wcy52aWV3ID09ICdpbWcnXG4gICAgUi5kaXYge2NsYXNzTmFtZX0sIEBwcm9wcy5jYXJkcy5tYXAgKGVsKSA9PlxuICAgICAgQ2FyZCBfLm1lcmdlIGVsLFxuICAgICAgICBrZXk6IFwiY2FyZCN7ZWwuaWR9XCJcbiAgICAgICAgc2hvd0Z1bGxUZXh0OiBAcHJvcHMuZnVsbFRleHRcbiAgICAgICAgdmlldzogQHByb3BzLnZpZXdcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0RpZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCwgblMpLT5cbiAgICBuUy5yb2xsaW5nICE9IEBzdGF0ZS5yb2xsaW5nIG9yIG5TLnZhbCAhPSBAc3RhdGUudmFsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvbGxzOiAzMFxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICB2YWw6IDFcbiAgICByb2xsaW5nOiBmYWxzZVxuICAgIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICBjbGlja0RpZTogLT5cbiAgICBAcm9sbERpZSgpXG5cbiAgcm9sbERpZTogLT5cbiAgICByZXR1cm4gaWYgQHN0YXRlLnJvbGxpbmdcbiAgICBAaXRlcmF0ZVJvbGwoKVxuXG4gIGl0ZXJhdGVSb2xsOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUucm9sbGluZ1xuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IHRydWUsIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICAgIGlmIEBzdGF0ZS5yb2xscyA9PSAwXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogZmFsc2UsIHJvbGxzOiBAcHJvcHMucm9sbHNcbiAgICBlbHNlXG4gICAgICB0aW1lID0gKDEwIC0gQHN0YXRlLnJvbGxzKSAqIDE4ICsgNTBcbiAgICAgIGlmIEBzdGF0ZS5yb2xscyA+IDEwXG4gICAgICAgIHRpbWUgPSA1MFxuXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgdmFsOiBfLnJhbmRvbSgxLDYpXG4gICAgICAgIHJvbGxzOiBAc3RhdGUucm9sbHMgLSAxXG4gICAgICBzZXRUaW1lb3V0IEBpdGVyYXRlUm9sbCwgdGltZVxuXG4gIHJlbmRlcjogLT5cbiAgICByb2xsaW5nID0gaWYgQHN0YXRlLnJvbGxpbmcgYW5kIEBzdGF0ZS5yb2xscyA+IDAgdGhlbiAncm9sbGluZycgZWxzZSAnJ1xuICAgIFIuZGl2IG9uQ2xpY2s6IEBjbGlja0RpZSwgY2xhc3NOYW1lOiBcImRpZSBkaWUtI3tAcHJvcHMuc2lkZX0gI3tyb2xsaW5nfVwiLCBAc3RhdGUudmFsXG5cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Zvb3RlcicsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vamp0LmlvJywgJ0phc29uIFRyaWxsJ1xuICAgICAgICAgICcgd2l0aCBoZWxwIGZyb20gJ1xuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vY29mZmVlc2NyaXB0Lm9yZy8nLCAnQ29mZmVlU2NyaXB0J1xuICAgICAgICAgICcsICdcbiAgICAgICAgICBSLmEgaHJlZjonaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC8nLCAnUmVhY3QnXG4gICAgICAgICAgJywgJ1xuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vYnJvd3NlcmlmeS5vcmcvJywgJ0Jyb3dzZXJpZnknXG4gICAgICAgICAgJywgJ1xuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vbG9kYXNoLmNvbS8nLCAnTG8tRGFzaCdcbiAgICAgICAgICAnLCAnXG4gICAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsICdCb290c3RyYXAnXG4gICAgICAgICAgJywgJ1xuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vemVwdG9qcy5jb20nLCAnWmVwdG8nXG4gICAgICAgICAgJywgYW5kICdcbiAgICAgICAgICBSLmEgaHJlZjonaHR0cDovL2d1bHBqcy5jb20nLCAnR3VscCdcbiAgICAgICAgICAnLidcbiAgICAgICAgXVxuICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAnSXQgb3dlcyBpdHMgZXhpc3RlbmNlIHRvICdcbiAgICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tJywgJ1R3aWxpZ2h0IFN0cmF0ZWd5J1xuICAgICAgICAgICcuIENvbW1lbnRzLCBzdWdnZXN0aW9ucywgYW5kIGJ1ZyByZXBvcnRzIGNhbiBiZSBhaW1lZCBhdCAnXG4gICAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Zy9pc3N1ZXMnLCAnR2l0aHViJ1xuICAgICAgICAgICcgb3IgJ1xuICAgICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpdHRlci5jb20vamFzb250cmlsbCcsICdAamFzb250cmlsbCdcbiAgICAgICAgICAnLidcbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdOYXZWaWV3J1xuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgYWN0aXZlOiAnJ1xuXG4gIHJlbmRlcjogLT5cblxuICAgIGxpID0gKG1lbnVLZXksIGhyZWYsIHRpdGxlKT0+XG4gICAgICBSLmxpIGNsYXNzTmFtZTogY3goJ2FjdGl2ZSc6IEBwcm9wcy5hY3RpdmUgPT0gbWVudUtleSksXG4gICAgICAgIFIuYSBocmVmOiBocmVmLCB0aXRsZVxuXG4gICAgUi5uYXYgY2xhc3NOYW1lOiBcIm5hdmJhciBcIiwgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIsIFtcblxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6IFwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgIFIuYSBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6ICcjLycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWdcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuXG4gICAgICAgIFIudWwgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2XCIsIFtcbiAgICAgICAgICAjbGkgJ2dhbWUnLCAnIy9nYW1lJywgJ0dhbWUnXG4gICAgICAgICAgbGkgJ2NhcmRzJywgJyMvY2FyZHMnLCAnQ2FyZHMnXG4gICAgICAgICAgbGkgJ2JvYXJkJywgJyMvYm9hcmQnLCAnQm9hcmQnXG4gICAgICAgICAgbGkgJ2Fib3V0JywgJyMvYWJvdXQnLCAnQWJvdXQnXG4gICAgICAgIF1cblxuICAgICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiJdfQ==
