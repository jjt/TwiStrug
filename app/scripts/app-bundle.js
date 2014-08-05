(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[  {    "id":1,    "title":"Asia Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: 9; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/14/regions-asia/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":2,    "title":"Europe Scoring",    "ops":0,    "text":"Presence: 3; Domination: 7; Control: Automatic Victory; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2011/12/12/regions-europe/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":3,    "title":"Middle East Scoring",    "ops":0,    "text":"Presence: 3; Domination: 5; Control: 7; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/02/13/regions-middle-east/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":4,    "title":"Duck and Cover",    "ops":3,    "text":"Degrade the DEFCON level by 1. The US receives VP equal to 5 minus the current DEFCON level.",    "url":"http://twilightstrategy.com/2011/12/12/duck-and-cover/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":5,    "title":"Five Year Plan",    "ops":3,    "text":"The USSR must randomly discard a card. If the card has a US associated Event, the Event occurs immediately. If the card has a USSR associated Event or an Event applicable to both players, then the card must be discarded without triggering the Event.",    "url":"http://twilightstrategy.com/2011/12/12/five-year-plan/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":6,    "title":"The China Card",    "ops":4,    "text":"This card begins the game with the USSR. When played, the player receives +1 Operations to the Operations value of this card if it uses all its Operations in Asia. It is passed to the opponent once played. A player receives 1 VP for holding this card at the end of Turn 10.",    "url":"http://twilightstrategy.com/2012/10/31/the-china-card/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":7,    "title":"Socialist Governments",    "ops":3,    "text":"Remove a total of 3 US Influence from any countries in Western Europe (removing no more than 2 Influence per country). This Event cannot be used after the “#83 – The Iron Lady” Event has been played.",    "url":"http://twilightstrategy.com/2011/12/13/socialist-governments/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":8,    "title":"Fidel*",    "ops":2,    "text":"Remove all US Influence from Cuba. USSR adds sufficient Influence in Cuba for Control.",    "url":"http://twilightstrategy.com/2011/12/14/fidel/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":9,    "title":"Vietnam Revolts*",    "ops":2,    "text":"Add 2 USSR Influence to Vietnam. For the remainder of the turn, the USSR receives +1 Operations to the Operations value of a card that uses all its Operations in Southeast Asia.",    "url":"http://twilightstrategy.com/2011/12/16/vietnam-revolts/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":10,    "title":"Blockade*",    "ops":1,    "text":"Unless the US immediately discards a card with an Operations value of 3 or more, remove all US Influence from West Germany.",    "url":"http://twilightstrategy.com/2011/12/19/blockade/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":11,    "title":"Korean War*",    "ops":2,    "text":"North Korea invades South Korea. Roll a die and subtract (-1) from the die roll for every US controlled country adjacent to South Korea. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in South Korea with USSR Influence. The USSR adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2011/12/25/korean-war/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":12,    "title":"Romanian Abdication*",    "ops":1,    "text":"Remove all US Influence from Romania. The USSR adds sufficient Influence to Romania for Control.",    "url":"http://twilightstrategy.com/2012/01/02/romanian-abdication/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":13,    "title":"Arab-Israeli War",    "ops":2,    "text":"Pan-Arab Coalition invades Israel. Roll a die and subtract (-1) from the die roll for Israel, if it is US controlled, and for every US controlled country adjacent to Israel. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in Israel with USSR Influence. The USSR adds 2 to its Military Operations Track. This Event cannot be used after the “#65 – Camp David Accords” Event has been played.",    "url":"http://twilightstrategy.com/2012/01/16/arab-israeli-war/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":14,    "title":"Comecon*",    "ops":3,    "text":"Add 1 USSR Influence to each of 4 non-US controlled countries of Eastern Europe.",    "url":"http://twilightstrategy.com/2012/01/24/comecon/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":15,    "title":"Nasser*",    "ops":1,    "text":"Add 2 USSR Influence to Egypt. The US removes half, rounded up, of its Influence from Egypt.",    "url":"http://twilightstrategy.com/2012/02/06/nasser/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":16,    "title":"Warsaw Pact Formed*",    "ops":3,    "text":"Remove all US influence from 4 countries in Eastern Europe or add 5 USSR Influence to any countries in Eastern Europe (adding no more than 2 Influence per country). This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/02/20/warsaw-pact-formed/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":17,    "title":"De Gaulle Leads France*",    "ops":3,    "text":"Remove 2 US Influence from France and add 1 USSR Influence to France. This Event cancels the effect(s) of the “#21 – NATO” Event for France only.",    "url":"http://twilightstrategy.com/2012/02/24/de-gaulle-leads-france/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":18,    "title":"Captured Nazi Scientist*",    "ops":1,    "text":"Move the Space Race Marker ahead by 1 space.",    "url":"http://twilightstrategy.com/2012/02/27/captured-nazi-scientist/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":19,    "title":"Truman Doctrine*",    "ops":1,    "text":"Remove all USSR Influence from a single uncontrolled country in Europe.",    "url":"http://twilightstrategy.com/2012/03/02/truman-doctrine/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":20,    "title":"Olympic Games",    "ops":2,    "text":"This player sponsors the Olympics. The opponent must either participate or boycott. If the opponent participates, each player rolls a die and the sponsor adds 2 to their roll. The player with the highest modified die roll receives 2 VP (reroll ties). If the opponent boycotts, degrade the DEFCON level by 1 and the sponsor may conduct Operations as if they played a 4 Ops card.",    "url":"http://twilightstrategy.com/2012/03/12/olympic-games/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":21,    "title":"NATO*",    "ops":4,    "text":"The USSR cannot make Coup Attempts or Realignment rolls against any US controlled countries in Europe. US controlled countries in Europe cannot be attacked by play of the “#36 – Brush War” Event. This card requires prior play of either the “#16 – Warsaw Pact Formed” or “#23 – Marshall Plan” Event(s) in order to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/12/nato/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":22,    "title":"Independent Reds*",    "ops":2,    "text":"Add US Influence to either Yugoslavia, Romania, Bulgaria, Hungary, or Czechoslovakia so that it equals the USSR Influence in that country.",    "url":"http://twilightstrategy.com/2012/03/13/independent-reds/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":23,    "title":"Marshall Plan*",    "ops":4,    "text":"Add 1 US Influence to each of any 7 non-USSR controlled countries in Western Europe. This Event allows the “#21 – NATO” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/03/16/marshall-plan/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":24,    "title":"Indo-Pakistani War",    "ops":2,    "text":"India invades Pakistan or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (India or Pakistan). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/03/19/indo-pakistani-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":25,    "title":"Containment*",    "ops":3,    "text":"All Operations cards played by the US, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/03/20/containment/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":26,    "title":"CIA Created*",    "ops":1,    "text":"The USSR reveals their hand of cards for this turn. The US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/03/26/cia-created/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":27,    "title":"US/Japan Mutual Defense Pact*",    "ops":4,    "text":"The US adds sufficient Influence to Japan for Control. The USSR cannot make Coup Attempts or Realignment rolls against Japan.",    "url":"http://twilightstrategy.com/2012/03/27/usjapan-mutual-defense-pact/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":28,    "title":"Suez Crisis*",    "ops":3,    "text":"Remove a total of 4 US Influence from France, the United Kingdom and Israel (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/03/29/suez-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":29,    "title":"East European Unrest",    "ops":3,    "text":"Early or Mid War: Remove 1 USSR Influence from 3 countries in Eastern Europe. Late War: Remove 2 USSR Influence from 3 countries in Eastern Europe.",    "url":"http://twilightstrategy.com/2012/04/02/east-european-unrest/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":30,    "title":"Decolonization",    "ops":2,    "text":"Add 1 USSR Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/04/05/decolonization/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":31,    "title":"Red Scare/Purge",    "ops":4,    "text":"All Operations cards played by the opponent, for the remainder of this turn, receive -1 to their Operations value (to a minimum value of 1 Operations point).",    "url":"http://twilightstrategy.com/2012/04/23/red-scarepurge/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":32,    "title":"UN Intervention",    "ops":1,    "text":"Play this card simultaneously with a card containing an opponent’s associated Event. The opponent’s associated Event is canceled but you may use the Operations value of the opponent’s card to conduct Operations. This Event cannot be played during the Headline Phase.",    "url":"http://twilightstrategy.com/2012/05/07/un-intervention/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":33,    "title":"De-Stalinization*",    "ops":3,    "text":"The USSR may reallocate up to a total of 4 Influence from one or more countries to any non-US controlled countries (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/05/29/de-stalinization/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":1  },  {    "id":34,    "title":"Nuclear Test Ban",    "ops":4,    "text":"The player receives VP equal to the current DEFCON level minus 2 then improves the DEFCON level by 2.",    "url":"http://twilightstrategy.com/2012/06/11/nuclear-test-ban/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":35,    "title":"Formosan Resolution*",    "ops":2,    "text":"If this card’s Event is in effect, Taiwan will be treated as a Battleground country, for scoring purposes only, if Taiwan is US controlled when the Asia Scoring Card is played. This Event is cancelled after the US has played the “#6 – The China Card” card.",    "url":"http://twilightstrategy.com/2012/07/02/formosan-resolution/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":36,    "title":"Brush War",    "ops":3,    "text":"The player attacks any country with a stability number of 1 or 2. Roll a die and subtract (-1) from the die roll for every adjacent enemy controlled country. On a modified die roll of 3-6, the player receives 1 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 3 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/04/brush-war/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":37,    "title":"Central America Scoring",    "ops":0,    "text":"Presence: 1; Domination: 3; Control: 5; +1 VP per controlled Battleground country in Region; +1 VP per country controlled that is adjacent to enemy superpower; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-central-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":38,    "title":"Southeast Asia Scoring*",    "ops":0,    "text":"1 VP each for Control of Burma, Cambodia/Laos, Vietnam, Malaysia, Indonesia and the Philippines. 2 VP for Control of Thailand; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/09/04/regions-southeast-asia/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":39,    "title":"Arms Race",    "ops":3,    "text":"Compare each player’s value on the Military Operations Track. If the phasing player has a higher value than their opponent on the Military Operations Track, that player receives 1 VP. If the phasing player has a higher value than their opponent, and has met the “required” amount, on the Military Operations Track, that player receives 3 VP instead.",    "url":"http://twilightstrategy.com/2012/09/05/arms-race/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":40,    "title":"Cuban Missile Crisis*",    "ops":3,    "text":"Set the DEFCON level to 2. Any Coup Attempts by your opponent, for the remainder of this turn, will result in Global Thermonuclear War. Your opponent will lose the game. This card’s Event may be canceled, at any time, if the USSR removes 2 Influence from Cuba or the US removes 2 Influence from West Germany or Turkey.",    "url":"http://twilightstrategy.com/2012/09/06/cuban-missile-crisis/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":41,    "title":"Nuclear Subs*",    "ops":2,    "text":"US Operations used for Coup Attempts in Battleground countries, for the remainder of this turn, do not degrade the DEFCON level. This card’s Event does not apply to any Event that would affect the DEFCON level (ex. the “#40 – Cuban Missile Crisis” Event).",    "url":"http://twilightstrategy.com/2012/09/10/nuclear-subs/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":42,    "title":"Quagmire*",    "ops":3,    "text":"On the US’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each US action round until the US successfully rolls 1-4 on a die. If the US is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn. This Event cancels the effect(s) of the “#106 – NORAD” Event (if applicable).",    "url":"http://twilightstrategy.com/2012/09/12/quagmire/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":43,    "title":"SALT Negotiations*",    "ops":3,    "text":"Improve the DEFCON level by 2. For the remainder of the turn, both players receive -1 to all Coup Attempt rolls. The player of this card’s Event may look through the discard pile, pick any 1 non-scoring card, reveal it to their opponent and then place the drawn card into their hand.",    "url":"http://twilightstrategy.com/2012/09/17/salt-negotiations/",    "owner":"neutral",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":44,    "title":"Bear Trap*",    "ops":3,    "text":"On the USSR’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each USSR action round until the USSR successfully rolls 1-4 on a die. If the USSR is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn.",    "url":"http://twilightstrategy.com/2012/09/19/bear-trap/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":45,    "title":"Summit",    "ops":1,    "text":"Both players roll a die. Each player receives +1 to the die roll for each Region (Europe, Asia, etc.) they Dominate or Control. The player with the highest modified die roll receives 2 VP and may degrade or improve the DEFCON level by 1 (do not reroll ties).",    "url":"http://twilightstrategy.com/2012/09/24/summit/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":46,    "title":"How I Learned to Stop Worrying*",    "ops":2,    "text":"Set the DEFCON level to any level desired (1-5). The player adds 5 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2012/09/26/how-i-learned-to-stop-worrying/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":47,    "title":"Junta",    "ops":2,    "text":"Add 2 Influence to a single country in Central or South America. The player may make free Coup Attempts or Realignment rolls in either Central or South America using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/01/junta/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":48,    "title":"Kitchen Debates*",    "ops":1,    "text":"If the US controls more Battleground countries than the USSR, the US player uses this Event to poke their opponent in the chest and receive 2 VP!",    "url":"http://twilightstrategy.com/2012/10/03/kitchen-debates/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":49,    "title":"Missile Envy",    "ops":2,    "text":"Exchange this card for your opponent’s highest value Operations card. If 2 or more cards are tied, opponent chooses. If the exchanged card contains an Event applicable to yourself or both players, it occurs immediately. If it contains an opponent’s Event, use the Operations value (no Event). The opponent must use this card for Operations during their next action round.",    "url":"http://twilightstrategy.com/2012/10/08/missile-envy/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":50,    "title":"We Will Bury You*",    "ops":4,    "text":"Degrade the DEFCON level by 1. Unless the #32 UN Intervention card is played as an Event on the US’s next action round, the USSR receives 3 VP.",    "url":"http://twilightstrategy.com/2012/10/10/we-will-bury-you/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":51,    "title":"Brezhnev Doctrine*",    "ops":3,    "text":"All Operations cards played by the USSR, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card).",    "url":"http://twilightstrategy.com/2012/10/12/brezhnev-doctrine/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":52,    "title":"Portuguese Empire Crumbles*",    "ops":2,    "text":"Add 2 USSR Influence to Angola and the SE African States.",    "url":"http://twilightstrategy.com/2012/10/15/portuguese-empire-crumbles/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":53,    "title":"South African Unrest",    "ops":2,    "text":"The USSR either adds 2 Influence to South Africa or adds 1 Influence to South Africa and 2 Influence to a single country adjacent to South Africa.",    "url":"http://twilightstrategy.com/2012/10/16/south-african-unrest/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":54,    "title":"Allende*",    "ops":1,    "text":"Add 2 USSR Influence to Chile.",    "url":"http://twilightstrategy.com/2012/10/17/allende/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":55,    "title":"Willy Brandt*",    "ops":2,    "text":"The USSR receives 1 VP and adds 1 Influence to West Germany. This Event cancels the effect(s) of the “#21 – NATO” Event for West Germany only. This Event is prevented / canceled by the “#96 – Tear Down this Wall” Event.",    "url":"http://twilightstrategy.com/2012/10/18/willy-brandt/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":56,    "title":"Muslim Revolution",    "ops":4,    "text":"Remove all US Influence from 2 of the following countries: Sudan, Iran, Iraq, Egypt, Libya, Saudi Arabia, Syria, Jordan. This Event cannot be used after the “#110 – AWACS Sale to Saudis” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/19/muslim-revolution/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":57,    "title":"ABM Treaty",    "ops":4,    "text":"Improve the DEFCON level by 1 and then conduct Operations using the Operations value of this card.",    "url":"http://twilightstrategy.com/2012/10/23/abm-treaty/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":58,    "title":"Cultural Revolution*",    "ops":3,    "text":"If the US has the “#6 – The China Card” card, the US must give the card to the USSR (face up and available to be played). If the USSR already has “#6 – The China Card” card, the USSR receives 1 VP.",    "url":"http://twilightstrategy.com/2012/10/24/cultural-revolution/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":59,    "title":"Flower Power*",    "ops":4,    "text":"The USSR receives 2 VP for every US played “War” card (Arab-Israeli War, Korean War, Brush War, Indo-Pakistani War, Iran-Iraq War), used for Operations or an Event, after this card is played. This Event is prevented / canceled by the “#97 – An Evil Empire” Event.",    "url":"http://twilightstrategy.com/2012/10/25/flower-power/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":60,    "title":"U2 Incident*",    "ops":3,    "text":"The USSR receives 1 VP. If the “#32 – UN Intervention” Event is played later this turn, either by the US or the USSR, the USSR receives an additional 1 VP.",    "url":"http://twilightstrategy.com/2012/10/26/u-2-incident/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":61,    "title":"OPEC",    "ops":3,    "text":"The USSR receives 1 VP for Control of each of the following countries: Egypt, Iran, Libya, Saudi Arabia, Iraq, Gulf States, Venezuela. This Event cannot be used after the “#86 – North Sea Oil” Event has been played.",    "url":"http://twilightstrategy.com/2012/10/29/opec/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":62,    "title":"Lone Gunman*",    "ops":1,    "text":"The US reveals their hand of cards. The USSR may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/10/30/lone-gunman/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":63,    "title":"Colonial Rear Guards",    "ops":2,    "text":"Add 1 US Influence to each of any 4 countries in Africa and/or Southeast Asia.",    "url":"http://twilightstrategy.com/2012/11/01/colonial-rear-guards/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":64,    "title":"Panama Canal Returned*",    "ops":1,    "text":"Add 1 US Influence to Panama, Costa Rica and Venezuela.",    "url":"http://twilightstrategy.com/2012/11/02/panama-canal-returned/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":65,    "title":"Camp David Accords*",    "ops":2,    "text":"The US receives 1 VP and adds 1 Influence to Israel, Jordan and Egypt. This Event prevents the “#13 – Arab-Israeli War” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/11/05/camp-david-accords/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":66,    "title":"Puppet Governments*",    "ops":2,    "text":"The US may add 1 Influence to 3 countries that do not contain Influence from either the US or USSR.",    "url":"http://twilightstrategy.com/2012/11/06/puppet-governments/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":67,    "title":"Grain Sales to Soviets",    "ops":2,    "text":"The US randomly selects 1 card from the USSR’s hand (if available). The US must either play the card or return it to the USSR. If the card is returned, or the USSR has no cards, the US may use the Operations value of this card to conduct Operations.",    "url":"http://twilightstrategy.com/2012/11/07/grain-sales-to-soviets/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":68,    "title":"John Paul II Elected Pope*",    "ops":2,    "text":"Remove 2 USSR Influence from Poland and add 1 US Influence to Poland. This Event allows the “#101 – Solidarity” card to be played as an Event.",    "url":"http://twilightstrategy.com/2012/11/08/john-paul-ii-elected-pope/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":2  },  {    "id":69,    "title":"Latin American Death Squads",    "ops":2,    "text":"All of the phasing player’s Coup Attempts in Central and South America, for the remainder of this turn, receive +1 to their die roll. All of the opponent’s Coup Attempts in Central and South America, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/11/09/latin-american-death-squads/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":70,    "title":"OAS Founded*",    "ops":1,    "text":"Add a total of 2 US Influence to any countries in Central or South America.",    "url":"http://twilightstrategy.com/2012/11/12/oas-founded/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":71,    "title":"Nixon Plays the China Card*",    "ops":2,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face down and unavailable for immediate play). If the US already has the “#6 – The China Card” card, the US receives 2 VP.",    "url":"http://twilightstrategy.com/2012/11/13/nixon-plays-the-china-card/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":72,    "title":"Sadat Expels Soviets*",    "ops":1,    "text":"Remove all USSR Influence from Egypt and add 1 US Influence to Egypt.",    "url":"http://twilightstrategy.com/2012/11/14/sadat-expels-soviets/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":73,    "title":"Shuttle Diplomacy",    "ops":3,    "text":"If this card’s Event is in effect, subtract (-1) a Battleground country from the USSR total and then discard this card during the next scoring of the Middle East or Asia (which ever comes first).",    "url":"http://twilightstrategy.com/2012/11/15/shuttle-diplomacy/",    "owner":"us",    "removed":false,    "ongoing":true,    "stage":2  },  {    "id":74,    "title":"The Voice of America",    "ops":2,    "text":"Remove 4 USSR Influence from any countries NOT in Europe (removing no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/16/the-voice-of-america/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":75,    "title":"Liberation Theology",    "ops":2,    "text":"Add a total of 3 USSR Influence to any countries in Central America (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/19/liberation-theology/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":76,    "title":"Ussuri River Skirmish*",    "ops":3,    "text":"If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face up and available for play). If the US already has the “#6 – The China Card” card, add a total of 4 US Influence to any countries in Asia (adding no more than 2 Influence per country).",    "url":"http://twilightstrategy.com/2012/11/20/ussuri-river-skirmish/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":77,    "title":"Ask Not What Your Country…*",    "ops":3,    "text":"The US may discard up to their entire hand of cards (including scoring cards) to the discard pile and draw replacements from the draw pile. The number of cards to be discarded must be decided before drawing any replacement cards from the draw pile.",    "url":"http://twilightstrategy.com/2012/11/21/ask-not-what-your-country-can-do-for-you/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":78,    "title":"Alliance for Progress*",    "ops":3,    "text":"The US receives 1 VP for each US controlled Battleground country in Central and South America.",    "url":"http://twilightstrategy.com/2012/11/23/alliance-for-progress/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":79,    "title":"Africa Scoring",    "ops":0,    "text":"Presence: 1; Domination: 4; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/04/11/regions-africa/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":80,    "title":"One Small Step…",    "ops":2,    "text":"If you are behind on the Space Race Track, the player uses this Event to move their marker 2 spaces forward on the Space Race Track. The player receives VP only from the final space moved into.",    "url":"http://twilightstrategy.com/2012/11/26/one-small-step/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":81,    "title":"South America Scoring",    "ops":0,    "text":"Presence: 2; Domination: 5; Control: 6; +1 VP per controlled Battleground country in Region; MAY NOT BE HELD!",    "url":"http://twilightstrategy.com/2012/08/15/regions-south-america/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":82,    "title":"Iranian Hostage Crisis*",    "ops":3,    "text":"Remove all US Influence and add 2 USSR Influence to Iran. This card’s Event requires the US to discard 2 cards, instead of 1 card, if the “#92 – Terrorism” Event is played.",    "url":"http://twilightstrategy.com/2012/11/30/iranian-hostage-crisis/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":83,    "title":"The Iron Lady*",    "ops":3,    "text":"Add 1 USSR Influence to Argentina and remove all USSR Influence from the United Kingdom. The US receives 1 VP. This Event prevents the “#7 – Socialist Governments” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/03/the-iron-lady/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":84,    "title":"Reagan Bombs Libya*",    "ops":2,    "text":"The US receives 1 VP for every 2 USSR Influence in Libya.",    "url":"http://twilightstrategy.com/2012/12/04/reagan-bombs-libya/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":85,    "title":"Star Wars*",    "ops":2,    "text":"If the US is ahead on the Space Race Track, the US player uses this Event to look through the discard pile, pick any 1 non-scoring card and play it immediately as an Event.",    "url":"http://twilightstrategy.com/2012/12/05/star-wars/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":86,    "title":"North Sea Oil*",    "ops":3,    "text":"The US may play 8 cards (in 8 action rounds) for this turn only. This Event prevents the “#61 – OPEC” card from being played as an Event.",    "url":"http://twilightstrategy.com/2012/12/06/north-sea-oil/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":87,    "title":"The Reformer*",    "ops":3,    "text":"Add 4 USSR Influence to Europe (adding no more than 2 Influence per country). If the USSR is ahead of the US in VP, 6 Influence may be added to Europe instead. The USSR may no longer make Coup Attempts in Europe.",    "url":"http://twilightstrategy.com/2012/12/07/the-reformer/",    "owner":"ussr",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":88,    "title":"Marine Barracks Bombing*",    "ops":2,    "text":"Remove all US Influence in Lebanon and remove a total of 2 US Influence from any countries in the Middle East.",    "url":"http://twilightstrategy.com/2012/12/10/marine-barracks-bombing/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":89,    "title":"Soviets Shoot Down KAL-007*",    "ops":4,    "text":"Degrade the DEFCON level by 1 and the US receives 2 VP. The US may place influence or make Realignment rolls, using this card, if South Korea is US controlled.",    "url":"http://twilightstrategy.com/2012/12/11/soviets-shoot-down-kal-007/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":90,    "title":"Glasnost*",    "ops":4,    "text":"Improve the DEFCON level by 1 and the USSR receives 2 VP. The USSR may make Realignment rolls or add Influence, using this card, if the “#87 – The Reformer” Event has already been played.",    "url":"http://twilightstrategy.com/2012/12/12/glasnost/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":91,    "title":"Ortega Elected in Nicaragua*",    "ops":2,    "text":"Remove all US Influence from Nicaragua. The USSR may make a free Coup Attempt, using this card’s Operations value, in a country adjacent to Nicaragua.",    "url":"http://twilightstrategy.com/2012/12/13/ortega-elected-in-nicaragua/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":92,    "title":"Terrorism",    "ops":2,    "text":"The player’s opponent must randomly discard 1 card from their hand. If the “#82 – Iranian Hostage Crisis” Event has already been played, a US player (if applicable) must randomly discard 2 cards from their hand.",    "url":"http://twilightstrategy.com/2012/12/14/terrorism/",    "owner":"neutral",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":93,    "title":"Iran-Contra Scandal*",    "ops":2,    "text":"All US Realignment rolls, for the remainder of this turn, receive -1 to their die roll.",    "url":"http://twilightstrategy.com/2012/12/17/iran-contra-scandal/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":94,    "title":"Chernobyl*",    "ops":3,    "text":"The US must designate a single Region (Europe, Asia, etc.) that, for the remainder of the turn, the USSR cannot add Influence to using Operations points.",    "url":"http://twilightstrategy.com/2012/12/18/chernobyl/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":95,    "title":"Latin American Debt Crisis",    "ops":2,    "text":"The US must immediately discard a card with an Operations value of 3 or more or the USSR may double the amount of USSR Influence in 2 countries in South America.",    "url":"http://twilightstrategy.com/2012/12/19/latin-american-debt-crisis/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":3  },  {    "id":96,    "title":"Tear Down this Wall*",    "ops":3,    "text":"Add 3 US Influence to East Germany. The US may make free Coup Attempts or Realignment rolls in Europe using the Operations value of this card. This Event prevents / cancels the effect(s) of the “#55 – Willy Brandt” Event.",    "url":"http://twilightstrategy.com/2012/12/20/tear-down-this-wall/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":97,    "title":"An Evil Empire*",    "ops":3,    "text":"The US receives 1 VP. This Event prevents / cancels the effect(s) of the “#59 – Flower Power” Event.",    "url":"http://twilightstrategy.com/2012/12/21/an-evil-empire/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  },  {    "id":98,    "title":"Aldrich Ames Remix*",    "ops":3,    "text":"The US reveals their hand of cards, face-up, for the remainder of the turn and the USSR discards a card from the US hand.",    "url":"http://twilightstrategy.com/2013/01/03/aldrich-ames-remix/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":99,    "title":"Pershing II Deployed*",    "ops":3,    "text":"The USSR receives 1 VP. Remove 1 US Influence from any 3 countries in Western Europe.",    "url":"http://twilightstrategy.com/2013/01/04/pershing-ii-deployed/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":100,    "title":"Wargames*",    "ops":4,    "text":"If the DEFCON level is 2, the player may immediately end the game after giving their opponent 6 VP. How about a nice game of chess?",    "url":"http://twilightstrategy.com/2013/01/07/wargames/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":101,    "title":"Solidarity*",    "ops":2,    "text":"Add 3 US Influence to Poland. This card requires prior play of the “#68 – John Paul II Elected Pope” Event in order to be played as an Event.",    "url":"http://twilightstrategy.com/2013/01/08/solidarity/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":102,    "title":"Iran-Iraq War*",    "ops":2,    "text":"Iran invades Iraq or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (Iran or Iraq). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track.",    "url":"http://twilightstrategy.com/2013/01/09/iran-iraq-war/",    "owner":"neutral",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":103,    "title":"Defectors",    "ops":3,    "text":"The US may play this card during the Headline Phase in order to cancel the USSR Headline Event (including a scoring card). The canceled card is placed into the discard pile. If this card is played by the USSR during its action round, the US gains 1 VP.",    "url":"http://twilightstrategy.com/2012/07/09/defectors/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":104,    "title":"The Cambridge Five",    "ops":2,    "text":"The US reveals all scoring cards in their hand of cards. The USSR player may add 1 USSR Influence to a single Region named on one of the revealed scoring cards. This card can not be played as an Event during the Late War.",    "url":"http://twilightstrategy.com/2012/07/11/the-cambridge-five/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":105,    "title":"Special Relationship",    "ops":2,    "text":"Add 1 US Influence to a single country adjacent to the U.K. if the U.K. is US-controlled but NATO is not in effect. Add 2 US Influence to a single country in Western Europe, and the US gains 2 VP, if the U.K. is US-controlled and NATO is in effect.",    "url":"http://twilightstrategy.com/2012/07/18/special-relationship/",    "owner":"us",    "removed":false,    "ongoing":false,    "stage":1  },  {    "id":106,    "title":"NORAD*",    "ops":3,    "text":"Add 1 US Influence to a single country containing US Influence, at the end of each Action Round, if Canada is US-controlled and the DEFCON level moved to 2 during that Action Round. This Event is canceled by the “#42 – Quagmire” Event.",    "url":"http://twilightstrategy.com/2012/07/25/norad/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":1  },  {    "id":107,    "title":"Che",    "ops":3,    "text":"The USSR may perform a Coup Attempt, using this card’s Operations value, against a non-Battleground country in Central America, South America or Africa. The USSR may perform a second Coup Attempt, against a different non-Battleground country in Central America, South America or Africa, if the first Coup Attempt removed any US Influence from the target country.",    "url":"http://twilightstrategy.com/2012/11/27/che/",    "owner":"ussr",    "removed":false,    "ongoing":false,    "stage":2  },  {    "id":108,    "title":"Our Man in Tehran*",    "ops":2,    "text":"If the US controls at least one Middle East country, the US player uses this Event to draw the top 5 cards from the draw pile. The US may discard any or all of the drawn cards, after revealing the discarded card(s) to the USSR player, without triggering the Event(s). Any remaining drawn cards are returned to the draw pile and the draw pile is reshuffled.",    "url":"http://twilightstrategy.com/2012/11/28/our-man-in-tehran/",    "owner":"us",    "removed":true,    "ongoing":false,    "stage":2  },  {    "id":109,    "title":"Yuri and Samantha*",    "ops":2,    "text":"The USSR receives 1 VP for each US Coup Attempt performed during the remainder of the Turn.",    "url":"http://twilightstrategy.com/2013/01/10/yuri-and-samantha/",    "owner":"ussr",    "removed":true,    "ongoing":false,    "stage":3  },  {    "id":110,    "title":"AWACS Sale to Saudis*",    "ops":3,    "text":"Add 2 US Influence to Saudi Arabia. This Event prevents the “#56 – Muslim Revolution” card from being played as an Event.",    "url":"http://twilightstrategy.com/2013/01/14/awacs-sale-to-saudis/",    "owner":"us",    "removed":true,    "ongoing":true,    "stage":3  }]
},{}],2:[function(require,module,exports){
module.exports={
  "regionInfoNodes": [
    {
      "id": "eu",
      "group": "eu",
      "continent": "eu",
      "name": "Europe",
      "shortname": "Europe",
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
var $, R, RCTG, TwiStrug, addReactKey, cardsData, cx, libs, pages, router, update, views;

R = React.DOM;

RCTG = React.addons.CSSTransitionGroup;

update = React.addons.update;

cx = React.addons.classSet;

$ = Zepto;

cardsData = require('../app/data/cards.json');

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

libs = require('./libs');

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
    var mainView, mainViewClass, _ref;
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
          case 'about':
            return pages.About();
          case 'whoops':
            return pages.Whoops();
        }
      }).call(this);
    }
    mainViewClass = cx({
      'container': this.state.view.name !== 'board',
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


},{"../app/data/cards.json":1,"./libs":15,"./pages":39,"./router":40,"./views":58}],4:[function(require,module,exports){
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


},{"./StateHistory":6,"./stateEncoder":25,"./superpowerToIndex":27}],5:[function(require,module,exports){
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
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee");f["MicroEventClass"]=require("/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee");f["StateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["contientCodeFromOneLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee");f["continentCodeFromLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["gameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee");f["gameValDisplay"]=require("/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["intToStrWithSign"]=require("/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee");f["numToChar"]=require("/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee");f["oneLetterContinentCode"]=require("/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["signFromDir"]=require("/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee");f["signString"]=require("/Users/jjt/Sites/twistrug/src/libs/signString.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["stateEncoder"]=require("/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee");f["superStats"]=require("/Users/jjt/Sites/twistrug/src/libs/superStats.coffee");f["superpowerToIndex"]=require("/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee");f["upperFirst"]=require("/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee":4,"/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":12,"/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee":13,"/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee":14,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":15,"/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee":16,"/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee":17,"/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee":18,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":19,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":20,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":21,"/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee":22,"/Users/jjt/Sites/twistrug/src/libs/signString.coffee":23,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":24,"/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee":25,"/Users/jjt/Sites/twistrug/src/libs/superStats.coffee":26,"/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee":27,"/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee":28,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":29,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":30}],16:[function(require,module,exports){
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
module.exports = function(a, b) {
  return a - b;
};


},{}],25:[function(require,module,exports){
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


},{"./numToChar":17}],26:[function(require,module,exports){
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


},{}],27:[function(require,module,exports){
module.exports = function(power) {
  if (power === 'usa') {
    return 0;
  } else {
    return 1;
  }
};


},{}],28:[function(require,module,exports){
module.exports = function(str) {
  if (str == null) {
    str = '';
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


},{}],29:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],30:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],31:[function(require,module,exports){
var R;

R = React.DOM;

module.exports = React.createClass({
  displayName: 'AboutView',
  render: function() {
    return R.div({
      className: 'aboutView'
    }, [
      R.h2({}, "About TwiStrug"), R.img({
        className: 'imgRight',
        src: "/images/tsbox.jpg"
      }), R.p({}, [
        "TwiStrug was created as a card reference for ", R.a({
          href: "http://en.wikipedia.org/wiki/Twilight_Struggle"
        }, "Twilight Struggle"), ". It has since expanded to include a playable version of the board for local games without taking up as much table space."
      ]), R.p({}, [
        "For more in-depth strategy, go to the excellent ", R.a({
          href: "http://twilightstrategy.com"
        }, "Twilight Strategy"), " site. It has tons of great content and analysis available, including discussions about nearly every card. Please support Twilight Strategy and its author, ", R.em({}, "theory"), ", by purchasing Twilight Struggle from Amazon on the sidebar of his site, or by paying some money for the associated ", R.a({
          href: "https://leanpub.com/twilightstrategy"
        }, "e-book"), ". It's Twilight Strategy in book form and deserves your money."
      ]), R.p({}, [
        "TwiStrug was made by ", R.a({
          href: "http://jjt.io/"
        }, "Jason Trill"), ". Source available on ", R.a({
          href: "https://github.com/jjt/twistrug"
        }, "Github"), "."
      ])
    ]);
  }
});


},{}],32:[function(require,module,exports){
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
            desc: 'Start influence placement by keyboard mode'
          }, {
            key: 'esc',
            desc: 'Stop influence placement by keyboard mode'
          }, {
            key: 'bksp',
            desc: 'Go back (ex. from country -> continent)'
          }, {
            key: 'a/A',
            desc: 'USA influence inc/dec (when country selected)'
          }, {
            key: 'r/R',
            desc: 'USSR influence inc/dec (when country selected)'
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
            R.h4({}, "Influence placement by keyboard mode"), R.dl({
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
  componentWillReceiveProps: function(nP) {},
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
  getInitialState: function() {
    return {
      debugObj: {}
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
        }), R.textarea({
          className: 'map-position-debug',
          ref: 'debug',
          value: JSON.stringify(this.state.coords, null, ' '),
          style: {
            width: '100%',
            height: '60rem'
          }
        })
      ])
    ]);
  }
});


},{"../libs/BoardStateHistory":4,"../libs/StateHistory":6,"../views/Board":42,"../views/BoardStateHistory":48}],33:[function(require,module,exports){
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


},{}],34:[function(require,module,exports){
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


},{"../libs":15}],35:[function(require,module,exports){
var CardList, R, cx, libs,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

libs = require('../libs');

CardList = require('../views/CardList');

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
      view: 'img'
    };
  },
  componentWillReceiveProps: function(nextProps) {
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
    var ids, state, value, _ref;
    value = this.refs.cardFilter.getDOMNode().value;
    ids = (_ref = value.match(/\d+[^:]|\d+$/g)) != null ? _ref.map(function(el) {
      return parseInt(el, 10);
    }) : void 0;
    if (value === '' || (ids == null)) {
      state = {
        cardFilterInput: value,
        filter: null
      };
    } else {
      state = {
        cardFilterInput: value,
        fullText: true,
        filter: ids.sort(libs.sortNumerical).filter(libs.filterValidCardIds)
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
            htmlFor: 'cardFilter'
          }, ["Filter cards by ids "]), R.input({
            name: 'cardFilter',
            type: 'text',
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


},{"../libs":15,"../views/CardList":54}],36:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],37:[function(require,module,exports){
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


},{}],38:[function(require,module,exports){
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


},{}],39:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":31,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":32,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":33,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":34,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":35,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":36,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":37,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":38,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":39}],40:[function(require,module,exports){
var libs, mapData, oneLetterContinentCode, setRouteOriginal, vent;

libs = require('./libs');

vent = require('./vent');

mapData = require('../app/data/map-data.json');

oneLetterContinentCode = require('./libs/oneLetterContinentCode');

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
  setView: function(name, pageTitle, menuActive, data) {
    var _ref;
    if (menuActive == null) {
      menuActive = '';
    }
    if (data == null) {
      data = {};
    }
    if (pageTitle != null) {
      libs.setPageTitle(pageTitle);
    }
    return this.setState({
      view: {
        name: name,
        data: data
      },
      menuActive: menuActive,
      slideIn: ((_ref = this.state.view) != null ? _ref.name : void 0) !== name
    });
  },
  componentDidMount: function() {
    var router, stateRoute;
    stateRoute = function(name, pageTitle, menuActive, args) {
      var state;
      state = libs.qs.toObj(args);
      if ((state != null ? state.filter : void 0) != null) {
        if (!_.isArray(state.filter)) {
          state.filter = [state.filter];
        }
        state.filter = state.filter.map(function(el) {
          return parseInt(el, 10);
        });
      }
      return this.setView(name, pageTitle, menuActive, {
        state: state
      });
    };
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
    router.on(/cards\??(.*)/, stateRoute.bind(this, 'cards', 'Cards', 'cards'));
    router.on(/board\/?(\w*)\/?(.*)/, (function(_this) {
      return function(gameId, incomingState) {
        var boardProps, countries, countryPositions, countryShortcuts, key, links, nodes, regionInfoNodes, shortKeys;
        if ((gameId == null) || gameId === '') {
          gameId = Math.random().toString(36).slice(2, 10);
          window.history.replaceState(null, "Board " + gameId, "#/board/" + gameId);
        }
        countryPositions = mapData.countryPositions, countries = mapData.countries, links = mapData.links, regionInfoNodes = mapData.regionInfoNodes;
        countries = countries.map(function(node) {
          node.x = countryPositions[node.name].x;
          node.y = countryPositions[node.name].y;
          if (node.shortcut == null) {
            node.shortcut = node.shortname.slice(0, 2).toLowerCase();
          }
          node.fixed = true;
          return node;
        });
        regionInfoNodes = regionInfoNodes.map(function(node) {
          node.regionInfo = true;
          node.fixed = true;
          return node;
        });
        nodes = _.union(countries, regionInfoNodes);
        nodes = _.zipObject(_.pluck(nodes, 'id'), nodes);
        countryShortcuts = _.mapValues(_.groupBy(nodes, 'continent'), function(cNodes, continent) {
          return _.pluck(cNodes, 'shortcut');
        });
        delete countryShortcuts.usa;
        delete countryShortcuts.ussr;
        shortKeys = _.map(_.keys(countryShortcuts), function(cS) {
          return oneLetterContinentCode(cS);
        });
        countryShortcuts = _.zipObject(shortKeys, _.values(countryShortcuts));
        key = gameId;
        boardProps = {
          gameId: gameId,
          mapData: mapData,
          countries: countries,
          regionInfoNodes: regionInfoNodes,
          links: links,
          nodes: nodes,
          key: key,
          incomingState: incomingState,
          countryShortcuts: countryShortcuts
        };
        return _this.setView('board', 'Board', 'board', boardProps);
      };
    })(this));
    return router.init('/');
  }
};


},{"../app/data/map-data.json":2,"./libs":15,"./libs/oneLetterContinentCode":18,"./vent":41}],41:[function(require,module,exports){
var MicroEventClass, Vent,
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

module.exports = new Vent();


},{"./libs/MicroEventClass":5}],42:[function(require,module,exports){
var BoardLink, BoardNode, BoardNodeDiv, BoardStatus, R, continentCodeFromLetter, continentShortcutData, cx, getRegionStatus, oneLetterContinentCode, rangedGameVal, stateEncoder, superStats, superpowerToIndex, upperFirst,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

superStats = require('../libs/superStats');

rangedGameVal = require('../libs/rangedGameVal');

stateEncoder = require('../libs/stateEncoder');

upperFirst = require('../libs/upperFirst');

oneLetterContinentCode = require('../libs/oneLetterContinentCode');

continentCodeFromLetter = require('../libs/continentCodeFromLetter');

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
      ipSetCountry: null
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
          return window.history.replaceState(null, "Board " + gameId, "#/board/" + gameId + "/" + stateEnc);
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
    if ((37 <= (_ref = ev.keyCode) && _ref <= 40)) {
      return this.ipKeySequence(ev.keyCode);
    }
    if (ev.keyCode === 27) {
      this.clearIpKeySequence();
      return;
    }
    ev.preventDefault();
    return false;
  },
  keydownHandler: function(ev) {
    if (ev.keyCode === 8) {
      ev.preventDefault();
      this.ipKeySequence(ev.keyCode);
      return false;
    }
  },
  clearIpKeySequence: function() {
    return this.setState({
      ipKeySequence: '',
      ipShowCountries: [],
      ipShowContinent: '',
      ipSetCountry: null
    });
  },
  ipKeySequence: function(code) {
    var char, charLower, continent, countries, country, delta, dir, ipKS, node, side, _ref;
    ipKS = this.state.ipKeySequence;
    char = String.fromCharCode(code);
    if (code === 8) {
      delta = -1;
      if (ipKS.length === 4) {
        delta = -2;
      }
      ipKS = ipKS.slice(0, delta);
      char = ipKS.slice(-1);
      ipKS = ipKS.slice(0, -1);
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
        ipSetCountry: null
      });
      return;
    }
    if (ipKS.length === 1 && (charLower === 'c' || charLower === 's' || charLower === 'e' || charLower === 'f' || charLower === 'a' || charLower === 'm')) {
      ipKS += charLower;
      this.setState({
        ipKeySequence: ipKS,
        ipShowCountries: this.props.countryShortcuts[charLower],
        ipShowContinent: charLower,
        ipSetCountry: null
      });
      return;
    }
    continent = ipKS.charAt(1);
    if ((2 <= (_ref = ipKS.length) && _ref <= 3)) {
      ipKS += charLower;
      country = ipKS.slice(2);
      countries = this.props.countryShortcuts[continent].filter(function(sc) {
        if (sc == null) {
          sc = '';
        }
        return sc.charAt(0) === country.charAt(0);
      });
      if (country.length === 2) {
        countries = countries.filter(function(sc) {
          if (sc == null) {
            sc = '';
          }
          return sc.charAt(1) === country.charAt(1);
        });
      }
      if (countries.length !== 0) {
        this.setState({
          ipKeySequence: ipKS,
          ipShowCountries: countries,
          ipSetCountry: null
        });
      }
      return;
    }
    country = ipKS.slice(2);
    if (ipKS.length === 4 && country.length === 2) {
      node = _.find(this.props.nodes, {
        shortcut: country,
        continent: continentCodeFromLetter(continent)
      });
      if (node == null) {
        return;
      }
      switch (char) {
        case 'a':
          side = 'usa';
          dir = 'up';
          break;
        case 'A':
          side = 'usa';
          dir = 'dn';
          break;
        case 'r':
          side = 'ussr';
          dir = 'up';
          break;
        case 'R':
          side = 'ussr';
          dir = 'dn';
      }
      if ((side != null) && (dir != null)) {
        this.handleIPClick(node.id, side, dir);
      }
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
  handleIPClick: function(nodeId, side, dir) {
    var delta, index, ip, node, sign, state;
    node = _.find(this.props.nodes, {
      id: nodeId
    });
    if (node.points || node.superpower) {
      return;
    }
    state = this.state;
    index = superpowerToIndex(side);
    ip = state.ips[nodeId][index];
    delta = dir === 'up' ? 1 : -1;
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
    var boardStatusAttrs, continentShortcuts, countryShortcuts, ipKeySequence, ipShowContinent, ipShowCountries, links, nodeProps, nodes, nodesByContinent, superpowerStats, _ref, _ref1, _ref2;
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
        var countryId, onTop, props, _ref3;
        onTop = !ipKeySequence || (_ref3 = countryData.shortcut, __indexOf.call(ipShowCountries, _ref3) >= 0) && oneLetterContinentCode(countryData.continent) === ipShowContinent && ipKeySequence.length >= 4;
        props = {
          node: nodeProps,
          key: "BoardNode-" + countryData.id,
          transform: "translate(" + countryData.x + ", " + countryData.y + ")",
          x: countryData.x,
          y: countryData.y,
          width: _this.props.node.width,
          height: _this.props.node.height,
          gutter: _this.props.node.gutter,
          titleHeight: _this.props.node.titleHeight,
          titleFontSize: _this.props.node.titleFontSize,
          handleIPClick: _this.handleIPClick,
          onTop: onTop
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
    nodesByContinent = _.groupBy(this.props.nodes, 'continent');
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
          return R.div(attrs, upperFirst(node.shortcut));
        });
        return nodeComponents;
      };
    })(this));
    return R.div({
      className: 'Board'
    }, [
      R.svg({
        width: this.props.width,
        height: this.props.height,
        ref: 'svg'
      }, [links]), nodes, R.div({
        onClick: this.clearIpKeySequence,
        className: "Board-shortcutHeader " + (ipKeySequence ? 'in' : '')
      }, [
        R.h3({}, "Placing Influence"), R.span({}, [
          "Press ", R.span({
            className: 'shortcut'
          }, "ESC"), " or click this box to exit"
        ])
      ]), R.div({
        className: "Board-shortcutMask " + (ipKeySequence ? 'in' : '')
      }), R.div({
        className: "Board-shortcutContinents " + (ipKeySequence && ipKeySequence.length <= 1 ? 'in' : '')
      }, continentShortcuts), countryShortcuts, BoardStatus(_.assign(boardStatusAttrs, this.state.game))
    ]);
  }
});


},{"../libs/continentCodeFromLetter":9,"../libs/oneLetterContinentCode":18,"../libs/rangedGameVal":20,"../libs/stateEncoder":25,"../libs/superStats":26,"../libs/upperFirst":28,"./BoardLink":43,"./BoardNode":44,"./BoardNodeDiv":45,"./BoardStatus":50}],43:[function(require,module,exports){
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


},{}],44:[function(require,module,exports){
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


},{"./BoardNodeIP":46}],45:[function(require,module,exports){
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
        'nodediv-on-top': this.props.onTop
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


},{"./BoardNodeIPDiv":47}],46:[function(require,module,exports){
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


},{}],47:[function(require,module,exports){
var R, cx;

R = React.DOM;

cx = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'BoardNodeIPDiv',
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
      className: "nodediv-ip-" + this.props.side + " nodediv-ip " + ipZero
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


},{}],48:[function(require,module,exports){
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


},{"./BoardStateHistoryEntry":49}],49:[function(require,module,exports){
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


},{"../libs/gameValDisplay":14,"../libs/intToStrWithSign":16,"../libs/superpowerToIndex":27,"../libs/upperFirst":28,"../libs/zeroPad":30}],50:[function(require,module,exports){
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


},{"./BoardStatusValue":51,"./Die":55}],51:[function(require,module,exports){
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


},{}],52:[function(require,module,exports){
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


},{"../libs/zeroPad":30}],53:[function(require,module,exports){
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


},{"../libs/zeroPad":30}],54:[function(require,module,exports){
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


},{"./Card":52}],55:[function(require,module,exports){
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


},{}],56:[function(require,module,exports){
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


},{}],57:[function(require,module,exports){
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


},{}],58:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/views/index.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/views/Board.coffee");f["BoardLink"]=require("/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee");f["BoardNode"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee");f["BoardNodeDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee");f["BoardNodeIP"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee");f["BoardNodeIPDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee");f["BoardStateHistoryEntry"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee");f["BoardStatus"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee");f["BoardStatusValue"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/views/Card.coffee");f["CardImg"]=require("/Users/jjt/Sites/twistrug/src/views/CardImg.coffee");f["CardList"]=require("/Users/jjt/Sites/twistrug/src/views/CardList.coffee");f["Die"]=require("/Users/jjt/Sites/twistrug/src/views/Die.coffee");f["Footer"]=require("/Users/jjt/Sites/twistrug/src/views/Footer.coffee");f["Nav"]=require("/Users/jjt/Sites/twistrug/src/views/Nav.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/views/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/views/Board.coffee":42,"/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee":43,"/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee":44,"/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee":45,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee":46,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee":47,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee":48,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee":49,"/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee":50,"/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee":51,"/Users/jjt/Sites/twistrug/src/views/Card.coffee":52,"/Users/jjt/Sites/twistrug/src/views/CardImg.coffee":53,"/Users/jjt/Sites/twistrug/src/views/CardList.coffee":54,"/Users/jjt/Sites/twistrug/src/views/Die.coffee":55,"/Users/jjt/Sites/twistrug/src/views/Footer.coffee":56,"/Users/jjt/Sites/twistrug/src/views/Nav.coffee":57,"/Users/jjt/Sites/twistrug/src/views/index.coffee":58}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvY2FyZHMuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL1R3aXN0cnVnLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9NaWNyb0V2ZW50Q2xhc3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9TdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9jYXJkQ2xhc3NOYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvY29udGllbnRDb2RlRnJvbU9uZUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2NvbnRpbmVudENvZGVGcm9tTGV0dGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVHJ1dGh5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVW5pcXVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVmFsaWRDYXJkSWRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZ2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWxEaXNwbGF5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9pbnRUb1N0cldpdGhTaWduLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvbnVtVG9DaGFyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3FzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcmFuZ2VkR2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NldFBhZ2VUaXRsZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25Gcm9tRGlyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2lnblN0cmluZy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NvcnROdW1lcmljYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdGF0ZUVuY29kZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdXBlclN0YXRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc3VwZXJwb3dlclRvSW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy91cHBlckZpcnN0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvdmlld3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy96ZXJvUGFkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0Fib3V0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkUGljLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NhcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ2FyZHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ291bnRyaWVzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxPQUFYO1NBQVAsRUFBMkIsT0FBM0IsQ0FGeUM7T0FBM0MsQ0FERixDQUY0QixFQVE1QixDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsUUFBQSxTQUFBLEVBQVcsZ0JBQVg7T0FBTCxFQUFrQyxDQUNoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FEZ0MsRUFFaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBRmdDLEVBR2hDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUhnQyxDQUFsQyxDQVI0QjtLQUE5QixDQURGLEVBTk07RUFBQSxDQUpSO0NBRGUsQ0FIakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQUEsQ0FBUSxjQUFSLENBQUEsQ0FBd0IsU0FBeEIsRUFBbUMsQ0FBQyxVQUFELENBQW5DLENBQWpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9W1xyICB7XHIgICAgXCJpZFwiOjEsXHIgICAgXCJ0aXRsZVwiOlwiQXNpYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDc7IENvbnRyb2w6IDk7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTQvcmVnaW9ucy1hc2lhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIsXHIgICAgXCJ0aXRsZVwiOlwiRXVyb3BlIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNzsgQ29udHJvbDogQXV0b21hdGljIFZpY3Rvcnk7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvcmVnaW9ucy1ldXJvcGUvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MyxcciAgICBcInRpdGxlXCI6XCJNaWRkbGUgRWFzdCBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDU7IENvbnRyb2w6IDc7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8xMy9yZWdpb25zLW1pZGRsZS1lYXN0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQsXHIgICAgXCJ0aXRsZVwiOlwiRHVjayBhbmQgQ292ZXJcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMS4gVGhlIFVTIHJlY2VpdmVzIFZQIGVxdWFsIHRvIDUgbWludXMgdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9kdWNrLWFuZC1jb3Zlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NSxcciAgICBcInRpdGxlXCI6XCJGaXZlIFllYXIgUGxhblwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG11c3QgcmFuZG9tbHkgZGlzY2FyZCBhIGNhcmQuIElmIHRoZSBjYXJkIGhhcyBhIFVTIGFzc29jaWF0ZWQgRXZlbnQsIHRoZSBFdmVudCBvY2N1cnMgaW1tZWRpYXRlbHkuIElmIHRoZSBjYXJkIGhhcyBhIFVTU1IgYXNzb2NpYXRlZCBFdmVudCBvciBhbiBFdmVudCBhcHBsaWNhYmxlIHRvIGJvdGggcGxheWVycywgdGhlbiB0aGUgY2FyZCBtdXN0IGJlIGRpc2NhcmRlZCB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9maXZlLXllYXItcGxhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NixcciAgICBcInRpdGxlXCI6XCJUaGUgQ2hpbmEgQ2FyZFwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoaXMgY2FyZCBiZWdpbnMgdGhlIGdhbWUgd2l0aCB0aGUgVVNTUi4gV2hlbiBwbGF5ZWQsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgKzEgT3BlcmF0aW9ucyB0byB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgaWYgaXQgdXNlcyBhbGwgaXRzIE9wZXJhdGlvbnMgaW4gQXNpYS4gSXQgaXMgcGFzc2VkIHRvIHRoZSBvcHBvbmVudCBvbmNlIHBsYXllZC4gQSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBmb3IgaG9sZGluZyB0aGlzIGNhcmQgYXQgdGhlIGVuZCBvZiBUdXJuIDEwLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8zMS90aGUtY2hpbmEtY2FyZC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo3LFxyICAgIFwidGl0bGVcIjpcIlNvY2lhbGlzdCBHb3Zlcm5tZW50c1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhIHRvdGFsIG9mIDMgVVMgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZSAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzgzIOKAkyBUaGUgSXJvbiBMYWR54oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTMvc29jaWFsaXN0LWdvdmVybm1lbnRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgsXHIgICAgXCJ0aXRsZVwiOlwiRmlkZWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBDdWJhLiBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgaW4gQ3ViYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTQvZmlkZWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo5LFxyICAgIFwidGl0bGVcIjpcIlZpZXRuYW0gUmV2b2x0cypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBWaWV0bmFtLiBGb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgcmVjZWl2ZXMgKzEgT3BlcmF0aW9ucyB0byB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiBhIGNhcmQgdGhhdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTYvdmlldG5hbS1yZXZvbHRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAsXHIgICAgXCJ0aXRsZVwiOlwiQmxvY2thZGUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVW5sZXNzIHRoZSBVUyBpbW1lZGlhdGVseSBkaXNjYXJkcyBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSwgcmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE5L2Jsb2NrYWRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEsXHIgICAgXCJ0aXRsZVwiOlwiS29yZWFuIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJOb3J0aCBLb3JlYSBpbnZhZGVzIFNvdXRoIEtvcmVhLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggS29yZWEuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIFNvdXRoIEtvcmVhIHdpdGggVVNTUiBJbmZsdWVuY2UuIFRoZSBVU1NSIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMjUva29yZWFuLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEyLFxyICAgIFwidGl0bGVcIjpcIlJvbWFuaWFuIEFiZGljYXRpb24qXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBSb21hbmlhLiBUaGUgVVNTUiBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIHRvIFJvbWFuaWEgZm9yIENvbnRyb2wuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzAyL3JvbWFuaWFuLWFiZGljYXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMyxcciAgICBcInRpdGxlXCI6XCJBcmFiLUlzcmFlbGkgV2FyXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUGFuLUFyYWIgQ29hbGl0aW9uIGludmFkZXMgSXNyYWVsLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBJc3JhZWwsIGlmIGl0IGlzIFVTIGNvbnRyb2xsZWQsIGFuZCBmb3IgZXZlcnkgVVMgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIElzcmFlbC4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCBVUyBJbmZsdWVuY2UgaW4gSXNyYWVsIHdpdGggVVNTUiBJbmZsdWVuY2UuIFRoZSBVU1NSIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzY1IOKAkyBDYW1wIERhdmlkIEFjY29yZHPigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8xNi9hcmFiLWlzcmFlbGktd2FyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE0LFxyICAgIFwidGl0bGVcIjpcIkNvbWVjb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiA0IG5vbi1VUyBjb250cm9sbGVkIGNvdW50cmllcyBvZiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMjQvY29tZWNvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE1LFxyICAgIFwidGl0bGVcIjpcIk5hc3NlcipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBFZ3lwdC4gVGhlIFVTIHJlbW92ZXMgaGFsZiwgcm91bmRlZCB1cCwgb2YgaXRzIEluZmx1ZW5jZSBmcm9tIEVneXB0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8wNi9uYXNzZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNixcciAgICBcInRpdGxlXCI6XCJXYXJzYXcgUGFjdCBGb3JtZWQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBpbmZsdWVuY2UgZnJvbSA0IGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZSBvciBhZGQgNSBVU1NSIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjAvd2Fyc2F3LXBhY3QtZm9ybWVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTcsXHIgICAgXCJ0aXRsZVwiOlwiRGUgR2F1bGxlIExlYWRzIEZyYW5jZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgMiBVUyBJbmZsdWVuY2UgZnJvbSBGcmFuY2UgYW5kIGFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIEZyYW5jZS4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBFdmVudCBmb3IgRnJhbmNlIG9ubHkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzI0L2RlLWdhdWxsZS1sZWFkcy1mcmFuY2UvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxOCxcciAgICBcInRpdGxlXCI6XCJDYXB0dXJlZCBOYXppIFNjaWVudGlzdCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJNb3ZlIHRoZSBTcGFjZSBSYWNlIE1hcmtlciBhaGVhZCBieSAxIHNwYWNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yNy9jYXB0dXJlZC1uYXppLXNjaWVudGlzdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE5LFxyICAgIFwidGl0bGVcIjpcIlRydW1hbiBEb2N0cmluZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gYSBzaW5nbGUgdW5jb250cm9sbGVkIGNvdW50cnkgaW4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8wMi90cnVtYW4tZG9jdHJpbmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjAsXHIgICAgXCJ0aXRsZVwiOlwiT2x5bXBpYyBHYW1lc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoaXMgcGxheWVyIHNwb25zb3JzIHRoZSBPbHltcGljcy4gVGhlIG9wcG9uZW50IG11c3QgZWl0aGVyIHBhcnRpY2lwYXRlIG9yIGJveWNvdHQuIElmIHRoZSBvcHBvbmVudCBwYXJ0aWNpcGF0ZXMsIGVhY2ggcGxheWVyIHJvbGxzIGEgZGllIGFuZCB0aGUgc3BvbnNvciBhZGRzIDIgdG8gdGhlaXIgcm9sbC4gVGhlIHBsYXllciB3aXRoIHRoZSBoaWdoZXN0IG1vZGlmaWVkIGRpZSByb2xsIHJlY2VpdmVzIDIgVlAgKHJlcm9sbCB0aWVzKS4gSWYgdGhlIG9wcG9uZW50IGJveWNvdHRzLCBkZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIHNwb25zb3IgbWF5IGNvbmR1Y3QgT3BlcmF0aW9ucyBhcyBpZiB0aGV5IHBsYXllZCBhIDQgT3BzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEyL29seW1waWMtZ2FtZXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjEsXHIgICAgXCJ0aXRsZVwiOlwiTkFUTypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBjYW5ub3QgbWFrZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGFnYWluc3QgYW55IFVTIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIEV1cm9wZS4gVVMgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gRXVyb3BlIGNhbm5vdCBiZSBhdHRhY2tlZCBieSBwbGF5IG9mIHRoZSDigJwjMzYg4oCTIEJydXNoIFdhcuKAnSBFdmVudC4gVGhpcyBjYXJkIHJlcXVpcmVzIHByaW9yIHBsYXkgb2YgZWl0aGVyIHRoZSDigJwjMTYg4oCTIFdhcnNhdyBQYWN0IEZvcm1lZOKAnSBvciDigJwjMjMg4oCTIE1hcnNoYWxsIFBsYW7igJ0gRXZlbnQocykgaW4gb3JkZXIgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMi9uYXRvL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjIsXHIgICAgXCJ0aXRsZVwiOlwiSW5kZXBlbmRlbnQgUmVkcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgVVMgSW5mbHVlbmNlIHRvIGVpdGhlciBZdWdvc2xhdmlhLCBSb21hbmlhLCBCdWxnYXJpYSwgSHVuZ2FyeSwgb3IgQ3plY2hvc2xvdmFraWEgc28gdGhhdCBpdCBlcXVhbHMgdGhlIFVTU1IgSW5mbHVlbmNlIGluIHRoYXQgY291bnRyeS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTMvaW5kZXBlbmRlbnQtcmVkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMyxcciAgICBcInRpdGxlXCI6XCJNYXJzaGFsbCBQbGFuKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA3IG5vbi1VU1NSIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xNi9tYXJzaGFsbC1wbGFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjQsXHIgICAgXCJ0aXRsZVwiOlwiSW5kby1QYWtpc3RhbmkgV2FyXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSW5kaWEgaW52YWRlcyBQYWtpc3RhbiBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSW5kaWEgb3IgUGFraXN0YW4pLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIHBsYXllciByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTkvaW5kby1wYWtpc3Rhbmktd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI1LFxyICAgIFwidGl0bGVcIjpcIkNvbnRhaW5tZW50KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgVVMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1heGltdW0gb2YgNCBPcGVyYXRpb25zIHBlciBjYXJkKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjAvY29udGFpbm1lbnQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjYsXHIgICAgXCJ0aXRsZVwiOlwiQ0lBIENyZWF0ZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzIGZvciB0aGlzIHR1cm4uIFRoZSBVUyBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI2L2NpYS1jcmVhdGVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI3LFxyICAgIFwidGl0bGVcIjpcIlVTL0phcGFuIE11dHVhbCBEZWZlbnNlIFBhY3QqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgdG8gSmFwYW4gZm9yIENvbnRyb2wuIFRoZSBVU1NSIGNhbm5vdCBtYWtlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgYWdhaW5zdCBKYXBhbi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjcvdXNqYXBhbi1tdXR1YWwtZGVmZW5zZS1wYWN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjgsXHIgICAgXCJ0aXRsZVwiOlwiU3VleiBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgNCBVUyBJbmZsdWVuY2UgZnJvbSBGcmFuY2UsIHRoZSBVbml0ZWQgS2luZ2RvbSBhbmQgSXNyYWVsIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yOS9zdWV6LWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI5LFxyICAgIFwidGl0bGVcIjpcIkVhc3QgRXVyb3BlYW4gVW5yZXN0XCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiRWFybHkgb3IgTWlkIFdhcjogUmVtb3ZlIDEgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS4gTGF0ZSBXYXI6IFJlbW92ZSAyIFVTU1IgSW5mbHVlbmNlIGZyb20gMyBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzAyL2Vhc3QtZXVyb3BlYW4tdW5yZXN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMCxcciAgICBcInRpdGxlXCI6XCJEZWNvbG9uaXphdGlvblwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDQgY291bnRyaWVzIGluIEFmcmljYSBhbmQvb3IgU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzA1L2RlY29sb25pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMxLFxyICAgIFwidGl0bGVcIjpcIlJlZCBTY2FyZS9QdXJnZVwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgb3Bwb25lbnQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1pbmltdW0gdmFsdWUgb2YgMSBPcGVyYXRpb25zIHBvaW50KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMjMvcmVkLXNjYXJlcHVyZ2UvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzIsXHIgICAgXCJ0aXRsZVwiOlwiVU4gSW50ZXJ2ZW50aW9uXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUGxheSB0aGlzIGNhcmQgc2ltdWx0YW5lb3VzbHkgd2l0aCBhIGNhcmQgY29udGFpbmluZyBhbiBvcHBvbmVudOKAmXMgYXNzb2NpYXRlZCBFdmVudC4gVGhlIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50IGlzIGNhbmNlbGVkIGJ1dCB5b3UgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGUgb3Bwb25lbnTigJlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSBwbGF5ZWQgZHVyaW5nIHRoZSBIZWFkbGluZSBQaGFzZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDUvMDcvdW4taW50ZXJ2ZW50aW9uL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMzLFxyICAgIFwidGl0bGVcIjpcIkRlLVN0YWxpbml6YXRpb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbWF5IHJlYWxsb2NhdGUgdXAgdG8gYSB0b3RhbCBvZiA0IEluZmx1ZW5jZSBmcm9tIG9uZSBvciBtb3JlIGNvdW50cmllcyB0byBhbnkgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDUvMjkvZGUtc3RhbGluaXphdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM0LFxyICAgIFwidGl0bGVcIjpcIk51Y2xlYXIgVGVzdCBCYW5cIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVyIHJlY2VpdmVzIFZQIGVxdWFsIHRvIHRoZSBjdXJyZW50IERFRkNPTiBsZXZlbCBtaW51cyAyIHRoZW4gaW1wcm92ZXMgdGhlIERFRkNPTiBsZXZlbCBieSAyLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNi8xMS9udWNsZWFyLXRlc3QtYmFuL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM1LFxyICAgIFwidGl0bGVcIjpcIkZvcm1vc2FuIFJlc29sdXRpb24qXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhpcyBjYXJk4oCZcyBFdmVudCBpcyBpbiBlZmZlY3QsIFRhaXdhbiB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBCYXR0bGVncm91bmQgY291bnRyeSwgZm9yIHNjb3JpbmcgcHVycG9zZXMgb25seSwgaWYgVGFpd2FuIGlzIFVTIGNvbnRyb2xsZWQgd2hlbiB0aGUgQXNpYSBTY29yaW5nIENhcmQgaXMgcGxheWVkLiBUaGlzIEV2ZW50IGlzIGNhbmNlbGxlZCBhZnRlciB0aGUgVVMgaGFzIHBsYXllZCB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzAyL2Zvcm1vc2FuLXJlc29sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNixcciAgICBcInRpdGxlXCI6XCJCcnVzaCBXYXJcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVyIGF0dGFja3MgYW55IGNvdW50cnkgd2l0aCBhIHN0YWJpbGl0eSBudW1iZXIgb2YgMSBvciAyLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBhZGphY2VudCBlbmVteSBjb250cm9sbGVkIGNvdW50cnkuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgMy02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDEgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAzIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9icnVzaC13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzcsXHIgICAgXCJ0aXRsZVwiOlwiQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogMzsgQ29udHJvbDogNTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9yZWdpb25zLWNlbnRyYWwtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOCxcciAgICBcInRpdGxlXCI6XCJTb3V0aGVhc3QgQXNpYSBTY29yaW5nKlwiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIjEgVlAgZWFjaCBmb3IgQ29udHJvbCBvZiBCdXJtYSwgQ2FtYm9kaWEvTGFvcywgVmlldG5hbSwgTWFsYXlzaWEsIEluZG9uZXNpYSBhbmQgdGhlIFBoaWxpcHBpbmVzLiAyIFZQIGZvciBDb250cm9sIG9mIFRoYWlsYW5kOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtc291dGhlYXN0LWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjozOSxcciAgICBcInRpdGxlXCI6XCJBcm1zIFJhY2VcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJDb21wYXJlIGVhY2ggcGxheWVy4oCZcyB2YWx1ZSBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay4gSWYgdGhlIHBoYXNpbmcgcGxheWVyIGhhcyBhIGhpZ2hlciB2YWx1ZSB0aGFuIHRoZWlyIG9wcG9uZW50IG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAxIFZQLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQsIGFuZCBoYXMgbWV0IHRoZSDigJxyZXF1aXJlZOKAnSBhbW91bnQsIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLCB0aGF0IHBsYXllciByZWNlaXZlcyAzIFZQIGluc3RlYWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA1L2FybXMtcmFjZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MCxcciAgICBcInRpdGxlXCI6XCJDdWJhbiBNaXNzaWxlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJTZXQgdGhlIERFRkNPTiBsZXZlbCB0byAyLiBBbnkgQ291cCBBdHRlbXB0cyBieSB5b3VyIG9wcG9uZW50LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHdpbGwgcmVzdWx0IGluIEdsb2JhbCBUaGVybW9udWNsZWFyIFdhci4gWW91ciBvcHBvbmVudCB3aWxsIGxvc2UgdGhlIGdhbWUuIFRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGJlIGNhbmNlbGVkLCBhdCBhbnkgdGltZSwgaWYgdGhlIFVTU1IgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIEN1YmEgb3IgdGhlIFVTIHJlbW92ZXMgMiBJbmZsdWVuY2UgZnJvbSBXZXN0IEdlcm1hbnkgb3IgVHVya2V5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNi9jdWJhbi1taXNzaWxlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQxLFxyICAgIFwidGl0bGVcIjpcIk51Y2xlYXIgU3VicypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJVUyBPcGVyYXRpb25zIHVzZWQgZm9yIENvdXAgQXR0ZW1wdHMgaW4gQmF0dGxlZ3JvdW5kIGNvdW50cmllcywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCBkbyBub3QgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsLiBUaGlzIGNhcmTigJlzIEV2ZW50IGRvZXMgbm90IGFwcGx5IHRvIGFueSBFdmVudCB0aGF0IHdvdWxkIGFmZmVjdCB0aGUgREVGQ09OIGxldmVsIChleC4gdGhlIOKAnCM0MCDigJMgQ3ViYW4gTWlzc2lsZSBDcmlzaXPigJ0gRXZlbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMC9udWNsZWFyLXN1YnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDIsXHIgICAgXCJ0aXRsZVwiOlwiUXVhZ21pcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgaXQgbXVzdCBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCB3aXRoIGEgdmFsdWUgb2YgMiBvciBtb3JlIGFuZCByb2xsIDEtNCBvbiBhIGRpZSB0byBjYW5jZWwgdGhpcyBFdmVudC4gUmVwZWF0IHRoaXMgRXZlbnQgZm9yIGVhY2ggVVMgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVUyBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVMgaXMgdW5hYmxlIHRvIGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkLCBpdCBtdXN0IHBsYXkgYWxsIG9mIGl0cyBzY29yaW5nIGNhcmRzIGFuZCB0aGVuIHNraXAgZWFjaCBhY3Rpb24gcm91bmQgZm9yIHRoZSByZXN0IG9mIHRoZSB0dXJuLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzEwNiDigJMgTk9SQUTigJ0gRXZlbnQgKGlmIGFwcGxpY2FibGUpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xMi9xdWFnbWlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDMsXHIgICAgXCJ0aXRsZVwiOlwiU0FMVCBOZWdvdGlhdGlvbnMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDIuIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCBib3RoIHBsYXllcnMgcmVjZWl2ZSAtMSB0byBhbGwgQ291cCBBdHRlbXB0IHJvbGxzLiBUaGUgcGxheWVyIG9mIHRoaXMgY2FyZOKAmXMgRXZlbnQgbWF5IGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQsIHJldmVhbCBpdCB0byB0aGVpciBvcHBvbmVudCBhbmQgdGhlbiBwbGFjZSB0aGUgZHJhd24gY2FyZCBpbnRvIHRoZWlyIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE3L3NhbHQtbmVnb3RpYXRpb25zL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NCxcciAgICBcInRpdGxlXCI6XCJCZWFyIFRyYXAqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiT24gdGhlIFVTU1LigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVU1NSIGFjdGlvbiByb3VuZCB1bnRpbCB0aGUgVVNTUiBzdWNjZXNzZnVsbHkgcm9sbHMgMS00IG9uIGEgZGllLiBJZiB0aGUgVVNTUiBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzE5L2JlYXItdHJhcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ1LFxyICAgIFwidGl0bGVcIjpcIlN1bW1pdFwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkJvdGggcGxheWVycyByb2xsIGEgZGllLiBFYWNoIHBsYXllciByZWNlaXZlcyArMSB0byB0aGUgZGllIHJvbGwgZm9yIGVhY2ggUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoZXkgRG9taW5hdGUgb3IgQ29udHJvbC4gVGhlIHBsYXllciB3aXRoIHRoZSBoaWdoZXN0IG1vZGlmaWVkIGRpZSByb2xsIHJlY2VpdmVzIDIgVlAgYW5kIG1heSBkZWdyYWRlIG9yIGltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIChkbyBub3QgcmVyb2xsIHRpZXMpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNC9zdW1taXQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDYsXHIgICAgXCJ0aXRsZVwiOlwiSG93IEkgTGVhcm5lZCB0byBTdG9wIFdvcnJ5aW5nKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIGFueSBsZXZlbCBkZXNpcmVkICgxLTUpLiBUaGUgcGxheWVyIGFkZHMgNSB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMjYvaG93LWktbGVhcm5lZC10by1zdG9wLXdvcnJ5aW5nL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDcsXHIgICAgXCJ0aXRsZVwiOlwiSnVudGFcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuIFRoZSBwbGF5ZXIgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIGVpdGhlciBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMS9qdW50YS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OCxcciAgICBcInRpdGxlXCI6XCJLaXRjaGVuIERlYmF0ZXMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIG1vcmUgQmF0dGxlZ3JvdW5kIGNvdW50cmllcyB0aGFuIHRoZSBVU1NSLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBwb2tlIHRoZWlyIG9wcG9uZW50IGluIHRoZSBjaGVzdCBhbmQgcmVjZWl2ZSAyIFZQIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wMy9raXRjaGVuLWRlYmF0ZXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDksXHIgICAgXCJ0aXRsZVwiOlwiTWlzc2lsZSBFbnZ5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiRXhjaGFuZ2UgdGhpcyBjYXJkIGZvciB5b3VyIG9wcG9uZW504oCZcyBoaWdoZXN0IHZhbHVlIE9wZXJhdGlvbnMgY2FyZC4gSWYgMiBvciBtb3JlIGNhcmRzIGFyZSB0aWVkLCBvcHBvbmVudCBjaG9vc2VzLiBJZiB0aGUgZXhjaGFuZ2VkIGNhcmQgY29udGFpbnMgYW4gRXZlbnQgYXBwbGljYWJsZSB0byB5b3Vyc2VsZiBvciBib3RoIHBsYXllcnMsIGl0IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgaXQgY29udGFpbnMgYW4gb3Bwb25lbnTigJlzIEV2ZW50LCB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgKG5vIEV2ZW50KS4gVGhlIG9wcG9uZW50IG11c3QgdXNlIHRoaXMgY2FyZCBmb3IgT3BlcmF0aW9ucyBkdXJpbmcgdGhlaXIgbmV4dCBhY3Rpb24gcm91bmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzA4L21pc3NpbGUtZW52eS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MCxcciAgICBcInRpdGxlXCI6XCJXZSBXaWxsIEJ1cnkgWW91KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBVbmxlc3MgdGhlICMzMiBVTiBJbnRlcnZlbnRpb24gY2FyZCBpcyBwbGF5ZWQgYXMgYW4gRXZlbnQgb24gdGhlIFVT4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMyBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTAvd2Utd2lsbC1idXJ5LXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUxLFxyICAgIFwidGl0bGVcIjpcIkJyZXpobmV2IERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFsbCBPcGVyYXRpb25zIGNhcmRzIHBsYXllZCBieSB0aGUgVVNTUiwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMi9icmV6aG5ldi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUyLFxyICAgIFwidGl0bGVcIjpcIlBvcnR1Z3Vlc2UgRW1waXJlIENydW1ibGVzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEFuZ29sYSBhbmQgdGhlIFNFIEFmcmljYW4gU3RhdGVzLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNS9wb3J0dWd1ZXNlLWVtcGlyZS1jcnVtYmxlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUzLFxyICAgIFwidGl0bGVcIjpcIlNvdXRoIEFmcmljYW4gVW5yZXN0XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgZWl0aGVyIGFkZHMgMiBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIG9yIGFkZHMgMSBJbmZsdWVuY2UgdG8gU291dGggQWZyaWNhIGFuZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGFkamFjZW50IHRvIFNvdXRoIEFmcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTYvc291dGgtYWZyaWNhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTQsXHIgICAgXCJ0aXRsZVwiOlwiQWxsZW5kZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBDaGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTcvYWxsZW5kZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU1LFxyICAgIFwidGl0bGVcIjpcIldpbGx5IEJyYW5kdCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGFuZCBhZGRzIDEgSW5mbHVlbmNlIHRvIFdlc3QgR2VybWFueS4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBFdmVudCBmb3IgV2VzdCBHZXJtYW55IG9ubHkuIFRoaXMgRXZlbnQgaXMgcHJldmVudGVkIC8gY2FuY2VsZWQgYnkgdGhlIOKAnCM5NiDigJMgVGVhciBEb3duIHRoaXMgV2FsbOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTgvd2lsbHktYnJhbmR0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NixcciAgICBcInRpdGxlXCI6XCJNdXNsaW0gUmV2b2x1dGlvblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gMiBvZiB0aGUgZm9sbG93aW5nIGNvdW50cmllczogU3VkYW4sIElyYW4sIElyYXEsIEVneXB0LCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBTeXJpYSwgSm9yZGFuLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjMTEwIOKAkyBBV0FDUyBTYWxlIHRvIFNhdWRpc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE5L211c2xpbS1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU3LFxyICAgIFwidGl0bGVcIjpcIkFCTSBUcmVhdHlcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlbiBjb25kdWN0IE9wZXJhdGlvbnMgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yMy9hYm0tdHJlYXR5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU4LFxyICAgIFwidGl0bGVcIjpcIkN1bHR1cmFsIFJldm9sdXRpb24qXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVUyBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTU1IgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSB0byBiZSBwbGF5ZWQpLiBJZiB0aGUgVVNTUiBhbHJlYWR5IGhhcyDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjQvY3VsdHVyYWwtcmV2b2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU5LFxyICAgIFwidGl0bGVcIjpcIkZsb3dlciBQb3dlcipcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAyIFZQIGZvciBldmVyeSBVUyBwbGF5ZWQg4oCcV2Fy4oCdIGNhcmQgKEFyYWItSXNyYWVsaSBXYXIsIEtvcmVhbiBXYXIsIEJydXNoIFdhciwgSW5kby1QYWtpc3RhbmkgV2FyLCBJcmFuLUlyYXEgV2FyKSwgdXNlZCBmb3IgT3BlcmF0aW9ucyBvciBhbiBFdmVudCwgYWZ0ZXIgdGhpcyBjYXJkIGlzIHBsYXllZC4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk3IOKAkyBBbiBFdmlsIEVtcGlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjUvZmxvd2VyLXBvd2VyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MCxcciAgICBcInRpdGxlXCI6XCJVMiBJbmNpZGVudCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBJZiB0aGUg4oCcIzMyIOKAkyBVTiBJbnRlcnZlbnRpb27igJ0gRXZlbnQgaXMgcGxheWVkIGxhdGVyIHRoaXMgdHVybiwgZWl0aGVyIGJ5IHRoZSBVUyBvciB0aGUgVVNTUiwgdGhlIFVTU1IgcmVjZWl2ZXMgYW4gYWRkaXRpb25hbCAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNi91LTItaW5jaWRlbnQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MSxcciAgICBcInRpdGxlXCI6XCJPUEVDXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBmb3IgQ29udHJvbCBvZiBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBFZ3lwdCwgSXJhbiwgTGlieWEsIFNhdWRpIEFyYWJpYSwgSXJhcSwgR3VsZiBTdGF0ZXMsIFZlbmV6dWVsYS4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzg2IOKAkyBOb3J0aCBTZWEgT2ls4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjkvb3BlYy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MixcciAgICBcInRpdGxlXCI6XCJMb25lIEd1bm1hbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMwL2xvbmUtZ3VubWFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjMsXHIgICAgXCJ0aXRsZVwiOlwiQ29sb25pYWwgUmVhciBHdWFyZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDEvY29sb25pYWwtcmVhci1ndWFyZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY0LFxyICAgIFwidGl0bGVcIjpcIlBhbmFtYSBDYW5hbCBSZXR1cm5lZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gUGFuYW1hLCBDb3N0YSBSaWNhIGFuZCBWZW5lenVlbGEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzAyL3BhbmFtYS1jYW5hbC1yZXR1cm5lZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NSxcciAgICBcInRpdGxlXCI6XCJDYW1wIERhdmlkIEFjY29yZHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gSXNyYWVsLCBKb3JkYW4gYW5kIEVneXB0LiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjMTMg4oCTIEFyYWItSXNyYWVsaSBXYXLigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDUvY2FtcC1kYXZpZC1hY2NvcmRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjYsXHIgICAgXCJ0aXRsZVwiOlwiUHVwcGV0IEdvdmVybm1lbnRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgYWRkIDEgSW5mbHVlbmNlIHRvIDMgY291bnRyaWVzIHRoYXQgZG8gbm90IGNvbnRhaW4gSW5mbHVlbmNlIGZyb20gZWl0aGVyIHRoZSBVUyBvciBVU1NSLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNi9wdXBwZXQtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjcsXHIgICAgXCJ0aXRsZVwiOlwiR3JhaW4gU2FsZXMgdG8gU292aWV0c1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByYW5kb21seSBzZWxlY3RzIDEgY2FyZCBmcm9tIHRoZSBVU1NS4oCZcyBoYW5kIChpZiBhdmFpbGFibGUpLiBUaGUgVVMgbXVzdCBlaXRoZXIgcGxheSB0aGUgY2FyZCBvciByZXR1cm4gaXQgdG8gdGhlIFVTU1IuIElmIHRoZSBjYXJkIGlzIHJldHVybmVkLCBvciB0aGUgVVNTUiBoYXMgbm8gY2FyZHMsIHRoZSBVUyBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA3L2dyYWluLXNhbGVzLXRvLXNvdmlldHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY4LFxyICAgIFwidGl0bGVcIjpcIkpvaG4gUGF1bCBJSSBFbGVjdGVkIFBvcGUqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSBQb2xhbmQgYW5kIGFkZCAxIFVTIEluZmx1ZW5jZSB0byBQb2xhbmQuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMTAxIOKAkyBTb2xpZGFyaXR54oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOC9qb2huLXBhdWwtaWktZWxlY3RlZC1wb3BlL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjksXHIgICAgXCJ0aXRsZVwiOlwiTGF0aW4gQW1lcmljYW4gRGVhdGggU3F1YWRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIG9mIHRoZSBwaGFzaW5nIHBsYXllcuKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgZGllIHJvbGwuIEFsbCBvZiB0aGUgb3Bwb25lbnTigJlzIENvdXAgQXR0ZW1wdHMgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYSwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIGRpZSByb2xsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wOS9sYXRpbi1hbWVyaWNhbi1kZWF0aC1zcXVhZHMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzAsXHIgICAgXCJ0aXRsZVwiOlwiT0FTIEZvdW5kZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBDZW50cmFsIG9yIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEyL29hcy1mb3VuZGVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcxLFxyICAgIFwidGl0bGVcIjpcIk5peG9uIFBsYXlzIHRoZSBDaGluYSBDYXJkKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgZG93biBhbmQgdW5hdmFpbGFibGUgZm9yIGltbWVkaWF0ZSBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIHJlY2VpdmVzIDIgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzEzL25peG9uLXBsYXlzLXRoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcyLFxyICAgIFwidGl0bGVcIjpcIlNhZGF0IEV4cGVscyBTb3ZpZXRzKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBFZ3lwdCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIEVneXB0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNC9zYWRhdC1leHBlbHMtc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MyxcciAgICBcInRpdGxlXCI6XCJTaHV0dGxlIERpcGxvbWFjeVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoaXMgY2FyZOKAmXMgRXZlbnQgaXMgaW4gZWZmZWN0LCBzdWJ0cmFjdCAoLTEpIGEgQmF0dGxlZ3JvdW5kIGNvdW50cnkgZnJvbSB0aGUgVVNTUiB0b3RhbCBhbmQgdGhlbiBkaXNjYXJkIHRoaXMgY2FyZCBkdXJpbmcgdGhlIG5leHQgc2NvcmluZyBvZiB0aGUgTWlkZGxlIEVhc3Qgb3IgQXNpYSAod2hpY2ggZXZlciBjb21lcyBmaXJzdCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE1L3NodXR0bGUtZGlwbG9tYWN5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBWb2ljZSBvZiBBbWVyaWNhXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDQgVVNTUiBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIE5PVCBpbiBFdXJvcGUgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE2L3RoZS12b2ljZS1vZi1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NSxcciAgICBcInRpdGxlXCI6XCJMaWJlcmF0aW9uIFRoZW9sb2d5XCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIGEgdG90YWwgb2YgMyBVU1NSIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgQW1lcmljYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE5L2xpYmVyYXRpb24tdGhlb2xvZ3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzYsXHIgICAgXCJ0aXRsZVwiOlwiVXNzdXJpIFJpdmVyIFNraXJtaXNoKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoZSBVU1NSIGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVMgKGZhY2UgdXAgYW5kIGF2YWlsYWJsZSBmb3IgcGxheSkuIElmIHRoZSBVUyBhbHJlYWR5IGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIGFkZCBhIHRvdGFsIG9mIDQgVVMgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQXNpYSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIwL3Vzc3VyaS1yaXZlci1za2lybWlzaC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NyxcciAgICBcInRpdGxlXCI6XCJBc2sgTm90IFdoYXQgWW91ciBDb3VudHJ54oCmKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgZGlzY2FyZCB1cCB0byB0aGVpciBlbnRpcmUgaGFuZCBvZiBjYXJkcyAoaW5jbHVkaW5nIHNjb3JpbmcgY2FyZHMpIHRvIHRoZSBkaXNjYXJkIHBpbGUgYW5kIGRyYXcgcmVwbGFjZW1lbnRzIGZyb20gdGhlIGRyYXcgcGlsZS4gVGhlIG51bWJlciBvZiBjYXJkcyB0byBiZSBkaXNjYXJkZWQgbXVzdCBiZSBkZWNpZGVkIGJlZm9yZSBkcmF3aW5nIGFueSByZXBsYWNlbWVudCBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIxL2Fzay1ub3Qtd2hhdC15b3VyLWNvdW50cnktY2FuLWRvLWZvci15b3UvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzgsXHIgICAgXCJ0aXRsZVwiOlwiQWxsaWFuY2UgZm9yIFByb2dyZXNzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjMvYWxsaWFuY2UtZm9yLXByb2dyZXNzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc5LFxyICAgIFwidGl0bGVcIjpcIkFmcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDE7IERvbWluYXRpb246IDQ7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8xMS9yZWdpb25zLWFmcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MCxcciAgICBcInRpdGxlXCI6XCJPbmUgU21hbGwgU3RlcOKAplwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHlvdSBhcmUgYmVoaW5kIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBtb3ZlIHRoZWlyIG1hcmtlciAyIHNwYWNlcyBmb3J3YXJkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLiBUaGUgcGxheWVyIHJlY2VpdmVzIFZQIG9ubHkgZnJvbSB0aGUgZmluYWwgc3BhY2UgbW92ZWQgaW50by5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjYvb25lLXNtYWxsLXN0ZXAvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODEsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQW1lcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDI7IERvbWluYXRpb246IDU7IENvbnRyb2w6IDY7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOC8xNS9yZWdpb25zLXNvdXRoLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbmlhbiBIb3N0YWdlIENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBhbmQgYWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gSXJhbi4gVGhpcyBjYXJk4oCZcyBFdmVudCByZXF1aXJlcyB0aGUgVVMgdG8gZGlzY2FyZCAyIGNhcmRzLCBpbnN0ZWFkIG9mIDEgY2FyZCwgaWYgdGhlIOKAnCM5MiDigJMgVGVycm9yaXNt4oCdIEV2ZW50IGlzIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMzAvaXJhbmlhbi1ob3N0YWdlLWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODMsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIElyb24gTGFkeSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBBcmdlbnRpbmEgYW5kIHJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSB0aGUgVW5pdGVkIEtpbmdkb20uIFRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNyDigJMgU29jaWFsaXN0IEdvdmVybm1lbnRz4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzAzL3RoZS1pcm9uLWxhZHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NCxcciAgICBcInRpdGxlXCI6XCJSZWFnYW4gQm9tYnMgTGlieWEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGV2ZXJ5IDIgVVNTUiBJbmZsdWVuY2UgaW4gTGlieWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA0L3JlYWdhbi1ib21icy1saWJ5YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NSxcciAgICBcInRpdGxlXCI6XCJTdGFyIFdhcnMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGlzIGFoZWFkIG9uIHRoZSBTcGFjZSBSYWNlIFRyYWNrLCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBsb29rIHRocm91Z2ggdGhlIGRpc2NhcmQgcGlsZSwgcGljayBhbnkgMSBub24tc2NvcmluZyBjYXJkIGFuZCBwbGF5IGl0IGltbWVkaWF0ZWx5IGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNS9zdGFyLXdhcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODYsXHIgICAgXCJ0aXRsZVwiOlwiTm9ydGggU2VhIE9pbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IHBsYXkgOCBjYXJkcyAoaW4gOCBhY3Rpb24gcm91bmRzKSBmb3IgdGhpcyB0dXJuIG9ubHkuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM2MSDigJMgT1BFQ+KAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNi9ub3J0aC1zZWEtb2lsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODcsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFJlZm9ybWVyKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCA0IFVTU1IgSW5mbHVlbmNlIHRvIEV1cm9wZSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIElmIHRoZSBVU1NSIGlzIGFoZWFkIG9mIHRoZSBVUyBpbiBWUCwgNiBJbmZsdWVuY2UgbWF5IGJlIGFkZGVkIHRvIEV1cm9wZSBpbnN0ZWFkLiBUaGUgVVNTUiBtYXkgbm8gbG9uZ2VyIG1ha2UgQ291cCBBdHRlbXB0cyBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA3L3RoZS1yZWZvcm1lci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODgsXHIgICAgXCJ0aXRsZVwiOlwiTWFyaW5lIEJhcnJhY2tzIEJvbWJpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgaW4gTGViYW5vbiBhbmQgcmVtb3ZlIGEgdG90YWwgb2YgMiBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIHRoZSBNaWRkbGUgRWFzdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTAvbWFyaW5lLWJhcnJhY2tzLWJvbWJpbmcvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OSxcciAgICBcInRpdGxlXCI6XCJTb3ZpZXRzIFNob290IERvd24gS0FMLTAwNypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTIHJlY2VpdmVzIDIgVlAuIFRoZSBVUyBtYXkgcGxhY2UgaW5mbHVlbmNlIG9yIG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMsIHVzaW5nIHRoaXMgY2FyZCwgaWYgU291dGggS29yZWEgaXMgVVMgY29udHJvbGxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTEvc292aWV0cy1zaG9vdC1kb3duLWthbC0wMDcvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTAsXHIgICAgXCJ0aXRsZVwiOlwiR2xhc25vc3QqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAuIFRoZSBVU1NSIG1heSBtYWtlIFJlYWxpZ25tZW50IHJvbGxzIG9yIGFkZCBJbmZsdWVuY2UsIHVzaW5nIHRoaXMgY2FyZCwgaWYgdGhlIOKAnCM4NyDigJMgVGhlIFJlZm9ybWVy4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMi9nbGFzbm9zdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkxLFxyICAgIFwidGl0bGVcIjpcIk9ydGVnYSBFbGVjdGVkIGluIE5pY2FyYWd1YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIE5pY2FyYWd1YS4gVGhlIFVTU1IgbWF5IG1ha2UgYSBmcmVlIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBpbiBhIGNvdW50cnkgYWRqYWNlbnQgdG8gTmljYXJhZ3VhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMy9vcnRlZ2EtZWxlY3RlZC1pbi1uaWNhcmFndWEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MixcciAgICBcInRpdGxlXCI6XCJUZXJyb3Jpc21cIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgcGxheWVy4oCZcyBvcHBvbmVudCBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgMSBjYXJkIGZyb20gdGhlaXIgaGFuZC4gSWYgdGhlIOKAnCM4MiDigJMgSXJhbmlhbiBIb3N0YWdlIENyaXNpc+KAnSBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZCwgYSBVUyBwbGF5ZXIgKGlmIGFwcGxpY2FibGUpIG11c3QgcmFuZG9tbHkgZGlzY2FyZCAyIGNhcmRzIGZyb20gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTQvdGVycm9yaXNtL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkzLFxyICAgIFwidGl0bGVcIjpcIklyYW4tQ29udHJhIFNjYW5kYWwqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWxsIFVTIFJlYWxpZ25tZW50IHJvbGxzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE3L2lyYW4tY29udHJhLXNjYW5kYWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NCxcciAgICBcInRpdGxlXCI6XCJDaGVybm9ieWwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgZGVzaWduYXRlIGEgc2luZ2xlIFJlZ2lvbiAoRXVyb3BlLCBBc2lhLCBldGMuKSB0aGF0LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgdGhlIFVTU1IgY2Fubm90IGFkZCBJbmZsdWVuY2UgdG8gdXNpbmcgT3BlcmF0aW9ucyBwb2ludHMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE4L2NoZXJub2J5bC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWJ0IENyaXNpc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyBtdXN0IGltbWVkaWF0ZWx5IGRpc2NhcmQgYSBjYXJkIHdpdGggYW4gT3BlcmF0aW9ucyB2YWx1ZSBvZiAzIG9yIG1vcmUgb3IgdGhlIFVTU1IgbWF5IGRvdWJsZSB0aGUgYW1vdW50IG9mIFVTU1IgSW5mbHVlbmNlIGluIDIgY291bnRyaWVzIGluIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE5L2xhdGluLWFtZXJpY2FuLWRlYnQtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk2LFxyICAgIFwidGl0bGVcIjpcIlRlYXIgRG93biB0aGlzIFdhbGwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIEVhc3QgR2VybWFueS4gVGhlIFVTIG1heSBtYWtlIGZyZWUgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBpbiBFdXJvcGUgdXNpbmcgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTUg4oCTIFdpbGx5IEJyYW5kdOKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjAvdGVhci1kb3duLXRoaXMtd2FsbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk3LFxyICAgIFwidGl0bGVcIjpcIkFuIEV2aWwgRW1waXJlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQLiBUaGlzIEV2ZW50IHByZXZlbnRzIC8gY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjNTkg4oCTIEZsb3dlciBQb3dlcuKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMjEvYW4tZXZpbC1lbXBpcmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OCxcciAgICBcInRpdGxlXCI6XCJBbGRyaWNoIEFtZXMgUmVtaXgqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcywgZmFjZS11cCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4gYW5kIHRoZSBVU1NSIGRpc2NhcmRzIGEgY2FyZCBmcm9tIHRoZSBVUyBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wMy9hbGRyaWNoLWFtZXMtcmVtaXgvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5OSxcciAgICBcInRpdGxlXCI6XCJQZXJzaGluZyBJSSBEZXBsb3llZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQLiBSZW1vdmUgMSBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgMyBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA0L3BlcnNoaW5nLWlpLWRlcGxveWVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAwLFxyICAgIFwidGl0bGVcIjpcIldhcmdhbWVzKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIklmIHRoZSBERUZDT04gbGV2ZWwgaXMgMiwgdGhlIHBsYXllciBtYXkgaW1tZWRpYXRlbHkgZW5kIHRoZSBnYW1lIGFmdGVyIGdpdmluZyB0aGVpciBvcHBvbmVudCA2IFZQLiBIb3cgYWJvdXQgYSBuaWNlIGdhbWUgb2YgY2hlc3M/XCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA3L3dhcmdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAxLFxyICAgIFwidGl0bGVcIjpcIlNvbGlkYXJpdHkqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDMgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBjYXJkIHJlcXVpcmVzIHByaW9yIHBsYXkgb2YgdGhlIOKAnCM2OCDigJMgSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZeKAnSBFdmVudCBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA4L3NvbGlkYXJpdHkvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAyLFxyICAgIFwidGl0bGVcIjpcIklyYW4tSXJhcSBXYXIqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSXJhbiBpbnZhZGVzIElyYXEgb3IgdmljZSB2ZXJzYSAocGxheWVy4oCZcyBjaG9pY2UpLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBlbmVteSBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgaW52YXNpb24gKElyYW4gb3IgSXJhcSkuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wOS9pcmFuLWlyYXEtd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTAzLFxyICAgIFwidGl0bGVcIjpcIkRlZmVjdG9yc1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSB0aGlzIGNhcmQgZHVyaW5nIHRoZSBIZWFkbGluZSBQaGFzZSBpbiBvcmRlciB0byBjYW5jZWwgdGhlIFVTU1IgSGVhZGxpbmUgRXZlbnQgKGluY2x1ZGluZyBhIHNjb3JpbmcgY2FyZCkuIFRoZSBjYW5jZWxlZCBjYXJkIGlzIHBsYWNlZCBpbnRvIHRoZSBkaXNjYXJkIHBpbGUuIElmIHRoaXMgY2FyZCBpcyBwbGF5ZWQgYnkgdGhlIFVTU1IgZHVyaW5nIGl0cyBhY3Rpb24gcm91bmQsIHRoZSBVUyBnYWlucyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8wOS9kZWZlY3RvcnMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNCxcciAgICBcInRpdGxlXCI6XCJUaGUgQ2FtYnJpZGdlIEZpdmVcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyBhbGwgc2NvcmluZyBjYXJkcyBpbiB0aGVpciBoYW5kIG9mIGNhcmRzLiBUaGUgVVNTUiBwbGF5ZXIgbWF5IGFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIFJlZ2lvbiBuYW1lZCBvbiBvbmUgb2YgdGhlIHJldmVhbGVkIHNjb3JpbmcgY2FyZHMuIFRoaXMgY2FyZCBjYW4gbm90IGJlIHBsYXllZCBhcyBhbiBFdmVudCBkdXJpbmcgdGhlIExhdGUgV2FyLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xMS90aGUtY2FtYnJpZGdlLWZpdmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA1LFxyICAgIFwidGl0bGVcIjpcIlNwZWNpYWwgUmVsYXRpb25zaGlwXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIFUuSy4gaWYgdGhlIFUuSy4gaXMgVVMtY29udHJvbGxlZCBidXQgTkFUTyBpcyBub3QgaW4gZWZmZWN0LiBBZGQgMiBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBpbiBXZXN0ZXJuIEV1cm9wZSwgYW5kIHRoZSBVUyBnYWlucyAyIFZQLCBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGFuZCBOQVRPIGlzIGluIGVmZmVjdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMTgvc3BlY2lhbC1yZWxhdGlvbnNoaXAvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNixcciAgICBcInRpdGxlXCI6XCJOT1JBRCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBjb250YWluaW5nIFVTIEluZmx1ZW5jZSwgYXQgdGhlIGVuZCBvZiBlYWNoIEFjdGlvbiBSb3VuZCwgaWYgQ2FuYWRhIGlzIFVTLWNvbnRyb2xsZWQgYW5kIHRoZSBERUZDT04gbGV2ZWwgbW92ZWQgdG8gMiBkdXJpbmcgdGhhdCBBY3Rpb24gUm91bmQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsZWQgYnkgdGhlIOKAnCM0MiDigJMgUXVhZ21pcmXigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzI1L25vcmFkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA3LFxyICAgIFwidGl0bGVcIjpcIkNoZVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG1heSBwZXJmb3JtIGEgQ291cCBBdHRlbXB0LCB1c2luZyB0aGlzIGNhcmTigJlzIE9wZXJhdGlvbnMgdmFsdWUsIGFnYWluc3QgYSBub24tQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBBbWVyaWNhLCBTb3V0aCBBbWVyaWNhIG9yIEFmcmljYS4gVGhlIFVTU1IgbWF5IHBlcmZvcm0gYSBzZWNvbmQgQ291cCBBdHRlbXB0LCBhZ2FpbnN0IGEgZGlmZmVyZW50IG5vbi1CYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIEFtZXJpY2EsIFNvdXRoIEFtZXJpY2Egb3IgQWZyaWNhLCBpZiB0aGUgZmlyc3QgQ291cCBBdHRlbXB0IHJlbW92ZWQgYW55IFVTIEluZmx1ZW5jZSBmcm9tIHRoZSB0YXJnZXQgY291bnRyeS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjcvY2hlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwOCxcciAgICBcInRpdGxlXCI6XCJPdXIgTWFuIGluIFRlaHJhbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgY29udHJvbHMgYXQgbGVhc3Qgb25lIE1pZGRsZSBFYXN0IGNvdW50cnksIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIGRyYXcgdGhlIHRvcCA1IGNhcmRzIGZyb20gdGhlIGRyYXcgcGlsZS4gVGhlIFVTIG1heSBkaXNjYXJkIGFueSBvciBhbGwgb2YgdGhlIGRyYXduIGNhcmRzLCBhZnRlciByZXZlYWxpbmcgdGhlIGRpc2NhcmRlZCBjYXJkKHMpIHRvIHRoZSBVU1NSIHBsYXllciwgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBFdmVudChzKS4gQW55IHJlbWFpbmluZyBkcmF3biBjYXJkcyBhcmUgcmV0dXJuZWQgdG8gdGhlIGRyYXcgcGlsZSBhbmQgdGhlIGRyYXcgcGlsZSBpcyByZXNodWZmbGVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yOC9vdXItbWFuLWluLXRlaHJhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDksXHIgICAgXCJ0aXRsZVwiOlwiWXVyaSBhbmQgU2FtYW50aGEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBmb3IgZWFjaCBVUyBDb3VwIEF0dGVtcHQgcGVyZm9ybWVkIGR1cmluZyB0aGUgcmVtYWluZGVyIG9mIHRoZSBUdXJuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8xMC95dXJpLWFuZC1zYW1hbnRoYS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjExMCxcciAgICBcInRpdGxlXCI6XCJBV0FDUyBTYWxlIHRvIFNhdWRpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVUyBJbmZsdWVuY2UgdG8gU2F1ZGkgQXJhYmlhLiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNTYg4oCTIE11c2xpbSBSZXZvbHV0aW9u4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzE0L2F3YWNzLXNhbGUtdG8tc2F1ZGlzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH1ccl1cciIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJyZWdpb25JbmZvTm9kZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRcIjogXCJldVwiLFxuICAgICAgXCJncm91cFwiOiBcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImV1XCIsXG4gICAgICBcIm5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiRXVyb3BlXCIsXG4gICAgICBcInBvaW50c1wiOiBbMyw3LFwiV1wiXSxcbiAgICAgIFwieFwiOiA0NDAsIFwieVwiOiAyODgsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJtZVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJwb2ludHNcIjogWzMsNSw3XSxcbiAgICAgIFwieFwiOiAxMDQwLCBcInlcIjogNDgwLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjYsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9LCBcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInBvaW50c1wiOiBbMyw3LDldLFxuICAgICAgXCJleHRyYVwiOiBcIjEgcGVyIFNFIGNvdW50cnksIDIgZm9yIFRoYWlsYW5kXCIsXG4gICAgICBcInhcIjogODgwLCBcInlcIjogMTYwLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjYsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9LCBcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYWZcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhZlwiLFxuICAgICAgXCJuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFmcmljYVwiLFxuICAgICAgXCJwb2ludHNcIjogWzEsNCw2XSxcbiAgICAgIFwieFwiOiA1MjAsIFwieVwiOiA1NDQsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJjYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcIm5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQy5BbWVyaWNhXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSwzLDVdLFxuICAgICAgXCJ4XCI6IDI0MCwgXCJ5XCI6IDM1MixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwibmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwicG9pbnRzXCI6IFsyLDUsNl0sXG4gICAgICBcInhcIjogMjQwLCBcInlcIjogNjcyLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9XG4gIF0sXG5cbiAgXCJjb3VudHJ5UG9zaXRpb25zXCI6IHtcbiAgICBcIlVTQVwiOiB7XG4gICAgICBcInhcIjogMjAwLFxuICAgICAgXCJ5XCI6IDY0XG4gICAgfSxcbiAgICBcIlVTU1JcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiQXVzdHJpYVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJCZW5lbHV4XCI6IHtcbiAgICAgIFwieFwiOiA0MDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkJ1bGdhcmlhXCI6IHtcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIkNhbmFkYVwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIkN6ZWNob3Nsb3Zha2lhXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkRlbm1hcmtcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiRSBHZXJtYW55XCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkZpbmxhbmRcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJGcmFuY2VcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiR3JlZWNlXCI6IHtcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIkh1bmdhcnlcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiSXRhbHlcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiTm9yd2F5XCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiUG9sYW5kXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIlJvbWFuaWFcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiU3BhaW4vUG9ydHVnYWxcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiU3dlZGVuXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiVHVya2V5XCI6IHtcbiAgICAgIFwieFwiOiA2ODAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIlVLXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIlcgR2VybWFueVwiOiB7XG4gICAgICBcInhcIjogNDgwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJZdWdvc2xhdmlhXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIkVneXB0XCI6IHtcbiAgICAgIFwieFwiOiA3NjAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkd1bGYgU3RhdGVzXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJJcmFuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIklyYXFcIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiSXNyYWVsXCI6IHtcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIkpvcmRhblwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJMZWJhbm9uXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkxpYnlhXCI6IHtcbiAgICAgIFwieFwiOiA2ODAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIlNhdWRpIEFyYWJpYVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiU3lyaWFcIjoge1xuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiQWZnaGFuaXN0YW5cIjoge1xuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiQXVzdHJhbGlhXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIkJ1cm1hXCI6IHtcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkluZGlhXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkluZG9uZXNpYVwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJKYXBhblwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY0XG4gICAgfSxcbiAgICBcIkxhb3MvQ2FtYm9kaWFcIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAyNTZcbiAgICB9LFxuICAgIFwiTWFsYXlzaWFcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIk4gS29yZWFcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiUGFraXN0YW5cIjoge1xuICAgICAgXCJ4XCI6IDg0MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiUGhpbGxpcHBpbmVzXCI6IHtcbiAgICAgIFwieFwiOiA5MjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiUyBLb3JlYVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlRhaXdhblwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDEyOFxuICAgIH0sXG4gICAgXCJUaGFpbGFuZFwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiVmlldG5hbVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiQWxnZXJpYVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJBbmdvbGFcIjoge1xuICAgICAgXCJ4XCI6IDU2MCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiQm90c3dhbmFcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiQ2FtZXJvb25cIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiRXRoaW9waWFcIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiSXZvcnkgQ29hc3RcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiS2VueWFcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiTW9yb2Njb1wiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJOaWdlcmlhXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIlNFIEFmcmljYVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJTYWhhcmFuIFN0YXRlc1wiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJTb21hbGlhXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIlNvdXRoIEFmcmljYVwiOiB7XG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJTdWRhblwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJUdW5pc2lhXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIldlc3QgQWZyaWNhXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlphaXJlXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIlppbWJhYndlXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIkNvc3RhIFJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiQ3ViYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJEb21pbmljYW4gUmVwXCI6IHtcbiAgICAgIFwieFwiOiAyODAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkVsIFNhbHZhZG9yXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiR3VhdGVtYWxhXCI6IHtcbiAgICAgIFwieFwiOiAxMjAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkhhaXRpXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkhvbmR1cmFzXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIk1leGljb1wiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIk5pY2FyYWd1YVwiOiB7XG4gICAgICBcInhcIjogMjAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJQYW5hbWFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiQXJnZW50aW5hXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNjQwXG4gICAgfSxcbiAgICBcIkJvbGl2aWFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA1MTJcbiAgICB9LFxuICAgIFwiQnJhemlsXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIkNoaWxlXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiQ29sdW1iaWFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA0NDhcbiAgICB9LFxuICAgIFwiRWN1YWRvclwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIlBhcmFndWF5XCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTc2XG4gICAgfSxcbiAgICBcIlBlcnVcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJVcnVndWF5XCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIlZlbmV6dWVsYVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH1cbiAgfSxcbiAgXCJjb3VudHJpZXNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOlwiVVNBXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVVNBXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjpcInVzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInVzYVwiLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQ2FuYWRhLEN1YmEsTWV4aWNvLEphcGFuXCIsXG4gICAgICBcImlkXCI6MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlVTU1JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJVU1NSXCIsXG4gICAgICBcInN1cGVycG93ZXJcIjogdHJ1ZSxcbiAgICAgIFwiZ3JvdXBcIjpcInVzc3JcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJ1c3NyXCIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJBZmdoYW5pc3RhbixGaW5sYW5kLE4gS29yZWEsUG9sYW5kLFJvbWFuaWFcIixcbiAgICAgIFwiaWRcIjoxXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjpcIkF1c3RyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBdXN0cmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkUgR2VybWFueSxIdW5nYXJ5LEl0YWx5LFcgR2VybWFueVwiLFxuICAgICAgXCJpZFwiOjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCZW5lbHV4XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQmVuZWx1eFwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVyBHZXJtYW55LFVLXCIsXG4gICAgICBcImlkXCI6M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJ1bGdhcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQnVsZ2FyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1cmtleSxHcmVlY2VcIixcbiAgICAgIFwiaWRcIjo0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ2FuYWRhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ2FuYWRhXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MixcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJVS1wiLFxuICAgICAgXCJpZFwiOjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkN6ZWNoXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQb2xhbmQsRSBHZXJtYW55LEh1bmdhcnlcIixcbiAgICAgIFwiaWRcIjo2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRGVubWFya1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkRlbm1hcmtcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlcgR2VybWFueSxTd2VkZW5cIixcbiAgICAgIFwiaWRcIjo3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRSBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRS5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJlZ1wiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjozLFxuICAgICAgXCJsaW5rc1wiOlwiUG9sYW5kLFcgR2VybWFueVwiLFxuICAgICAgXCJpZFwiOjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJGaW5sYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRmlubGFuZFwiLFxuICAgICAgXCJncm91cFwiOlwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjEsXG4gICAgICBcImxpbmtzXCI6XCJTd2VkZW5cIixcbiAgICAgIFwiaWRcIjo5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRnJhbmNlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRnJhbmNlXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJBbGdlcmlhLFVLLFcgR2VybWFueSxJdGFseSxTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgXCJpZFwiOjEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiR3JlZWNlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiR3JlZWNlXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJdGFseSxZdWdvc2xhdmlhLFR1cmtleVwiLFxuICAgICAgXCJpZFwiOjExXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSHVuZ2FyeVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkh1bmdhcnlcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlJvbWFuaWEsWXVnb3NsYXZpYVwiLFxuICAgICAgXCJpZFwiOjEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXRhbHlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJdGFseVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiWXVnb3NsYXZpYSxTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgXCJpZFwiOjEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTm9yd2F5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTm9yd2F5XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJVSyxTd2VkZW5cIixcbiAgICAgIFwiaWRcIjoxNFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBvbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBvbGFuZFwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJSb21hbmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUm9tYW5pYVwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVHVya2V5LFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjoxNlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNwYWluL1BvcnR1Z2FsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU3BhaW4vUG9cIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk1vcm9jY29cIixcbiAgICAgIFwiaWRcIjoxN1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlN3ZWRlblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlN3ZWRlblwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MThcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJUdXJrZXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUdXJrZXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVUtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJVS1wiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjUsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjUsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJXIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJXLkdlcm1cIixcbiAgICAgIFwic2hvcnRjdXRcIjond2cnLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJZdWdvc2xhdmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiWXVnb3NsYXZcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRWd5cHRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFZ3lwdFwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJc3JhZWwsTGlieWEsU3VkYW5cIixcbiAgICAgIFwiaWRcIjoyM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkd1bGYgU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiR3VsZiBTdHNcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXJhcSxTYXVkaSBBcmFiaWFcIixcbiAgICAgIFwiaWRcIjoyNFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIklyYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJcmFuXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJpblwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJcmFxLEFmZ2hhbmlzdGFuLFBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJcmFxXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXJhcVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiaXFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOlwiU2F1ZGkgQXJhYmlhLEpvcmRhblwiLFxuICAgICAgXCJpZFwiOjI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXNyYWVsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXNyYWVsXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkpvcmRhbixMZWJhbm9uLFN5cmlhXCIsXG4gICAgICBcImlkXCI6MjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJKb3JkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJKb3JkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU2F1ZGkgQXJhYmlhLExlYmFub25cIixcbiAgICAgIFwiaWRcIjoyOFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkxlYmFub25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJMZWJhbm9uXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlN5cmlhXCIsXG4gICAgICBcImlkXCI6MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMaWJ5YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkxpYnlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1bmlzaWFcIixcbiAgICAgIFwiaWRcIjozMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNhdWRpIEFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTeXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlN5cmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MSxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQWZnaGFuaXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBZmdoYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjozM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6NCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNYWxheXNpYVwiLFxuICAgICAgXCJpZFwiOjM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnVybWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCdXJtYVwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSW5kaWEsTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgXCJpZFwiOjM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiaWRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjozNlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkluZG9uZXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkluZG9uZXNpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiaXNcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk1hbGF5c2lhLFBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJpZFwiOjM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSmFwYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJKYXBhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQaGlsbGlwcGluZXMsUyBLb3JlYSxUYWl3YW5cIixcbiAgICAgIFwiaWRcIjozOFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkxhb3MvQ2FtYm9kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJMYW9zL0NhbVwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVGhhaWxhbmQsVmlldG5hbVwiLFxuICAgICAgXCJpZFwiOjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJNYWxheXNpYVwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVGhhaWxhbmRcIixcbiAgICAgIFwiaWRcIjo0MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk4gS29yZWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJOLktvcmVhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJua1wiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjMsXG4gICAgICBcImxpbmtzXCI6XCJTIEtvcmVhXCIsXG4gICAgICBcImlkXCI6NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGhpbGxpcHBpbmVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGhpbGxpcFwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUy5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwic2tcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVGFpd2FuXCIsXG4gICAgICBcImlkXCI6NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJUYWl3YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUYWl3YW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJUaGFpbGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJWaWV0bmFtXCIsXG4gICAgICBcImlkXCI6NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJWaWV0bmFtXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVmlldG5hbVwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBbGdlcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQWxnZXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNb3JvY2NvLFR1bmlzaWEsU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwiaWRcIjo0OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFuZ29sYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkFuZ29sYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJCb3Rzd2FuYSxTb3V0aCBBZnJpY2EsWmFpcmVcIixcbiAgICAgIFwiaWRcIjo0OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJvdHN3YW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQm90c3dhbmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU291dGggQWZyaWNhLFppbWJhYndlXCIsXG4gICAgICBcImlkXCI6NTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDYW1lcm9vblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNhbWVyb29uXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk5pZ2VyaWEsWmFpcmVcIixcbiAgICAgIFwiaWRcIjo1MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkV0aGlvcGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRXRoaW9waWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU3VkYW4sU29tYWxpYVwiLFxuICAgICAgXCJpZFwiOjUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXZvcnkgQ29hc3RcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJdm9yeSBDXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIldlc3QgQWZyaWNhLE5pZ2VyaWFcIixcbiAgICAgIFwiaWRcIjo1M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIktlbnlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiS2VueWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU29tYWxpYSxTRSBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjo1NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1vcm9jY29cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcImlkXCI6NTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOaWdlcmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTmlnZXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJpZFwiOjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU0UgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU0UgQWZyaWNhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlppbWJhYndlXCIsXG4gICAgICBcImlkXCI6NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNhaGFyYSBTXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJzc1wiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo1OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNvbWFsaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTb21hbGlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU291dGggQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU291dGggQWZcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcInNhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3VkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTdWRhblwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlR1bmlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJXZXN0IEFmXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWmFpcmVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJaYWlyZVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWmltYmFid2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNvc3RhIFJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDb3N0YSBSXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhvbmR1cmFzLE5pY2FyYWd1YSxQYW5hbWFcIixcbiAgICAgIFwiaWRcIjo2NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkN1YmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDdWJhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhhaXRpLE5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOjY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkRvbWluaWMgUlwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIYWl0aVwiLFxuICAgICAgXCJpZFwiOjY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRWwgU2FsdmFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFbCBTYWx2YVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxHdWF0ZW1hbGFcIixcbiAgICAgIFwiaWRcIjo2OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxNZXhpY29cIixcbiAgICAgIFwiaWRcIjo3MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkhhaXRpXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSGFpdGlcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJIb25kdXJhc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkhvbmR1cmFzXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOjcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTWV4aWNvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTWV4aWNvXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjczXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTmljYXJhZ3VhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTmljYXJhZ3VhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGFuYW1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGFuYW1hXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcImlkXCI6NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBcmdlbnRpbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBcmdlbnRpbmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQ2hpbGUsUGFyYWd1YXksVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQm9saXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJvbGl2aWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGFyYWd1YXksUGVydVwiLFxuICAgICAgXCJpZFwiOjc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnJhemlsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQnJhemlsXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVydWd1YXksVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDaGlsZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNoaWxlXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBlcnVcIixcbiAgICAgIFwiaWRcIjo3OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ29sdW1iaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiRWN1YWRvcixWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjo4MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVjdWFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFY3VhZG9yXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBlcnVcIixcbiAgICAgIFwiaWRcIjo4MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBhcmFndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGFyYWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOjgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGVydVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBlcnVcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJVcnVndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo4NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo4NVxuICAgIH1cbiAgXSxcblxuICBcImxpbmtzXCI6IFtcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkNhbmFkYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MCxcbiAgICAgIFwidGFyZ2V0XCI6NjcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkN1YmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjczLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjM4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJKYXBhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6MzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIkZpbmxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjQxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiTiBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6MTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjE2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjEyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjEzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MyxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJlbmVsdXhcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQsXG4gICAgICBcInRhcmdldFwiOjExLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIkdyZWVjZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDYW5hZGFcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjE1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NixcbiAgICAgIFwidGFyZ2V0XCI6MTIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NyxcbiAgICAgIFwidGFyZ2V0XCI6MTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4LFxuICAgICAgXCJ0YXJnZXRcIjoxNSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6OCxcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjksXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGaW5sYW5kXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjQ4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJBbGdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MTMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjE3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJTcGFpbi9Qb3J0dWdhbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjExLFxuICAgICAgXCJ0YXJnZXRcIjoxMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEyLFxuICAgICAgXCJ0YXJnZXRcIjoxNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMixcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTMsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMyxcbiAgICAgIFwidGFyZ2V0XCI6MTcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNCxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTQsXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNixcbiAgICAgIFwidGFyZ2V0XCI6MTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNixcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTcsXG4gICAgICBcInRhcmdldFwiOjU1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE5LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVHVya2V5XCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIzLFxuICAgICAgXCJ0YXJnZXRcIjoyNyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJJc3JhZWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6MzAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiTGlieWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6NjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI0LFxuICAgICAgXCJ0YXJnZXRcIjoyNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjQsXG4gICAgICBcInRhcmdldFwiOjMxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI1LFxuICAgICAgXCJ0YXJnZXRcIjoyNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNSxcbiAgICAgIFwidGFyZ2V0XCI6MzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjUsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI2LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI2LFxuICAgICAgXCJ0YXJnZXRcIjoyOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjoyOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiSm9yZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjcsXG4gICAgICBcInRhcmdldFwiOjI5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjcsXG4gICAgICBcInRhcmdldFwiOjMyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI4LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjgsXG4gICAgICBcInRhcmdldFwiOjI5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjksXG4gICAgICBcInRhcmdldFwiOjMyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMZWJhbm9uXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozMCxcbiAgICAgIFwidGFyZ2V0XCI6NjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxpYnlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzMsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzQsXG4gICAgICBcInRhcmdldFwiOjQwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmFsaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM1LFxuICAgICAgXCJ0YXJnZXRcIjozNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJJbmRpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM1LFxuICAgICAgXCJ0YXJnZXRcIjozOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJMYW9zL0NhbWJvZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzYsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJbmRpYVwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzcsXG4gICAgICBcInRhcmdldFwiOjQwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM3LFxuICAgICAgXCJ0YXJnZXRcIjo0MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiUGhpbGxpcHBpbmVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzgsXG4gICAgICBcInRhcmdldFwiOjQzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzgsXG4gICAgICBcInRhcmdldFwiOjQ1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM5LFxuICAgICAgXCJ0YXJnZXRcIjo0NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgICBcIlRoYWlsYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzksXG4gICAgICBcInRhcmdldFwiOjQ3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQwLFxuICAgICAgXCJ0YXJnZXRcIjo0NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTWFsYXlzaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQxLFxuICAgICAgXCJ0YXJnZXRcIjo0NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTiBLb3JlYVwiLFxuICAgICAgICBcIlMgS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0NCxcbiAgICAgIFwidGFyZ2V0XCI6NDUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlMgS29yZWFcIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0NixcbiAgICAgIFwidGFyZ2V0XCI6NDcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlRoYWlsYW5kXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ4LFxuICAgICAgXCJ0YXJnZXRcIjo1NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OCxcbiAgICAgIFwidGFyZ2V0XCI6NjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDgsXG4gICAgICBcInRhcmdldFwiOjU4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OSxcbiAgICAgIFwidGFyZ2V0XCI6NTAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIkJvdHN3YW5hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjYwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OSxcbiAgICAgIFwidGFyZ2V0XCI6NjQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTAsXG4gICAgICBcInRhcmdldFwiOjYwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUwLFxuICAgICAgXCJ0YXJnZXRcIjo2NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUxLFxuICAgICAgXCJ0YXJnZXRcIjo1NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTEsXG4gICAgICBcInRhcmdldFwiOjY0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDYW1lcm9vblwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTIsXG4gICAgICBcInRhcmdldFwiOjYxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTIsXG4gICAgICBcInRhcmdldFwiOjU5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MyxcbiAgICAgIFwidGFyZ2V0XCI6NjMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MyxcbiAgICAgIFwidGFyZ2V0XCI6NTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU0LFxuICAgICAgXCJ0YXJnZXRcIjo1OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTQsXG4gICAgICBcInRhcmdldFwiOjU3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJLZW55YVwiLFxuICAgICAgICBcIlNFIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU1LFxuICAgICAgXCJ0YXJnZXRcIjo2MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTW9yb2Njb1wiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTYsXG4gICAgICBcInRhcmdldFwiOjU4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOaWdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NyxcbiAgICAgIFwidGFyZ2V0XCI6NjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlNFIEFmcmljYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjQsXG4gICAgICBcInRhcmdldFwiOjY1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJaYWlyZVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjcyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NixcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NixcbiAgICAgIFwidGFyZ2V0XCI6NzUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJQYW5hbWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NyxcbiAgICAgIFwidGFyZ2V0XCI6NzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY3LFxuICAgICAgXCJ0YXJnZXRcIjo3NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3ViYVwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY4LFxuICAgICAgXCJ0YXJnZXRcIjo3MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgICBcIkhhaXRpXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjksXG4gICAgICBcInRhcmdldFwiOjcyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjksXG4gICAgICBcInRhcmdldFwiOjcwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkd1YXRlbWFsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcwLFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MCxcbiAgICAgIFwidGFyZ2V0XCI6NzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcyLFxuICAgICAgXCJ0YXJnZXRcIjo3NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSG9uZHVyYXNcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NSxcbiAgICAgIFwidGFyZ2V0XCI6ODAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlBhbmFtYVwiLFxuICAgICAgICBcIkNvbHVtYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NixcbiAgICAgIFwidGFyZ2V0XCI6NzksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIkNoaWxlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzYsXG4gICAgICBcInRhcmdldFwiOjgyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc2LFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc3LFxuICAgICAgXCJ0YXJnZXRcIjo4MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzcsXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb2xpdmlhXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc4LFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc4LFxuICAgICAgXCJ0YXJnZXRcIjo4NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzksXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDaGlsZVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MCxcbiAgICAgIFwidGFyZ2V0XCI6ODEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiRWN1YWRvclwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgwLFxuICAgICAgXCJ0YXJnZXRcIjo4NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MSxcbiAgICAgIFwidGFyZ2V0XCI6ODMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVjdWFkb3JcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODIsXG4gICAgICBcInRhcmdldFwiOjg0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJQYXJhZ3VheVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH1cbiAgXVxufVxuIiwiUiA9IFJlYWN0LkRPTVxuUkNURyA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXBcbnVwZGF0ZSA9IFJlYWN0LmFkZG9ucy51cGRhdGVcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG4kID0gWmVwdG9cblxuY2FyZHNEYXRhID0gcmVxdWlyZSgnLi4vYXBwL2RhdGEvY2FyZHMuanNvbicpXG5cblxuIyBBZGQgZnVuY3Rpb24gdG8gWmVwdG9cbiQuZ2V0U2NyaXB0ID0gKHNyYywgZnVuYykgLT5cbiAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LmFzeW5jID0gXCJhc3luY1wiXG4gIHNjcmlwdC5zcmMgPSBzcmNcbiAgaWYgZnVuY1xuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkIHNjcmlwdFxuXG5cbmxpYnMgPSByZXF1aXJlICcuL2xpYnMnXG5wYWdlcyA9IHJlcXVpcmUgJy4vcGFnZXMnXG52aWV3cyA9IHJlcXVpcmUgJy4vdmlld3MnXG5cbnJvdXRlciA9IHJlcXVpcmUgJy4vcm91dGVyJ1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIG1peGluczogW3JvdXRlcl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgbWVudUFjdGl2ZTpudWxsXG4gICAgdmlldzoge31cbiAgICBzbGlkZUluOiB0cnVlXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAoKS0+XG4gICAgJCgnI3BsYWNlaG9sZGVyJykuaGlkZSgpXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogLT5cbiAgICAkc2xpZGVJbiA9ICQoQHJlZnMuc2xpZGVJbi5nZXRET01Ob2RlKCkpXG4gICAgJHNsaWRlSW4ucmVtb3ZlQ2xhc3MgJ3NsaWRlSW4taW4nXG4gICAgIyRtYWluVmlldyA9ICQoQHJlZnMubWFpblZpZXcuZ2V0RE9NTm9kZSgpKVxuICAgICMkbWFpblZpZXcucmVtb3ZlQ2xhc3MgJ21haW5WaWV3LW91dCdcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+IEBzbGlkZUluKClcblxuICBzbGlkZUluOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUuc2xpZGVJblxuICAgICAgcmV0dXJuXG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICRzbGlkZUluLmFkZENsYXNzKCdzbGlkZUluLWluJylcbiAgICAsIDEwXG5cblxuICByZW5kZXI6IC0+XG4gICAgIyBJZiB0aGUgcm91dGVyIGhhc24ndCBraWNrZWQgaW4sIGRvIG5vdGhpbmdcbiAgICBpZiBub3QgQHN0YXRlPy52aWV3XG4gICAgICBtYWluVmlldyA9IFIucCBjbGFzc05hbWU6ICdsZWFkJywgJ1R3aVN0cnVnIGlzIGxvYWRpbmcuLi4nXG4gICAgZWxzZVxuICAgICAgbWFpblZpZXcgPSBzd2l0Y2ggQHN0YXRlLnZpZXcubmFtZVxuICAgICAgICB3aGVuICdob21lJyB0aGVuIHBhZ2VzLkhvbWVcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY2FyZCcgdGhlbiBwYWdlcy5DYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnY2FyZHMnIHRoZW4gcGFnZXMuQ2FyZHNcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY291bnRyaWVzJyB0aGVuIHBhZ2VzLkNvdW50cmllcygpXG4gICAgICAgICN3aGVuICdib2FyZCcgdGhlbiByZXR1cm4gQm9hcmRQaWNWaWV3KClcbiAgICAgICAgd2hlbiAnYm9hcmQnIHRoZW4gcGFnZXMuQm9hcmQgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdhYm91dCcgdGhlbiBwYWdlcy5BYm91dCgpXG4gICAgICAgIHdoZW4gJ3dob29wcycgdGhlbiBwYWdlcy5XaG9vcHMoKVxuXG4gICAgbWFpblZpZXdDbGFzcyA9IGN4XG4gICAgICAnY29udGFpbmVyJzogQHN0YXRlLnZpZXcubmFtZSAhPSAnYm9hcmQnICMgQm9hcmQgbmVlZHMgdG8gaGF2ZSBpdHMgb3duIGNvbnRhaW5lclxuICAgICAgJ3NsaWRlSW4nOiBAc3RhdGUuc2xpZGVJblxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIHZpZXdzLk5hdiBrZXk6J25hdicsIGFjdGl2ZTogQHN0YXRlLm1lbnVBY3RpdmVcbiAgICAgIFIuZGl2IGtleTonbWFpbnZpZXcnLCByZWY6ICdzbGlkZUluJywgY2xhc3NOYW1lOiBtYWluVmlld0NsYXNzLCBtYWluVmlld1xuICAgICAgdmlld3MuRm9vdGVyIGtleTonZm9vdGVyJ1xuICAgIF1cbiAgICBcblxuIyBBZGQga2V5cyB0byBjYXJkc1xuYWRkUmVhY3RLZXkgPSAoZWwpLT5cbiAgZWwua2V5ID0gXCJyay0je2VsLmlkfVwiXG4gIGVsXG5cblJlYWN0LnJlbmRlckNvbXBvbmVudCBUd2lTdHJ1Zyh7Y2FyZHM6IGNhcmRzRGF0YS5tYXAoYWRkUmVhY3RLZXkpfSksXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdhcHAnXG4iLCJTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuL1N0YXRlSGlzdG9yeSdcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi9zdXBlcnBvd2VyVG9JbmRleCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4vc3RhdGVFbmNvZGVyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJvYXJkU3RhdGVIaXN0b3J5IGV4dGVuZHMgU3RhdGVIaXN0b3J5XG4gIGVuY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBlbmNvZGVkID0gc3RhdGVFbmNvZGVyLmVuY29kZSBzdGF0ZVxuICAgICNjb25zb2xlLmxvZyAnQm9hcmRTdGF0ZUhpc3RvcnkgZW5jb2RlU3RhdGUnLCBzdGF0ZSwgZW5jb2RlZFxuICAgIGVuY29kZWRcblxuICBkZWNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgZGVjb2RlZCA9IHN0YXRlRW5jb2Rlci5kZWNvZGUgc3RhdGVcbiAgICAjY29uc29sZS5sb2cgJ0JvYXJkU3RhdGVIaXN0b3J5IGRlY29kZVN0YXRlJywgc3RhdGUsIGRlY29kZWRcbiAgICBkZWNvZGVkXG4gIFxuICBhZGQ6IChzdGF0ZSwgbWV0YSktPlxuICAgICMgSWYgaXQncyB0aGUgc2FtZSB0aGluZyBhcyB0aGUgcHJldmlvdXMgZW50cnksIGRvbid0IHVwZGF0ZSB0aGUgaGlzdG9yeVxuICAgICMgVGhpcyBpcyBzbyB3ZSBjYW4gYmF0Y2ggdGhlIGNoYW5nZXMgZm9yIGRpc3BsYXlcbiAgICBjdXIgPSBAZ2V0Q3VycmVudCgpXG4gICAgI2NvbnNvbGUubG9nIGN1clxuICAgIGlmIG5vdCBjdXI/XG4gICAgICByZXR1cm4gc3VwZXIgc3RhdGUsIG1ldGFcblxuICAgIG5tID0gXy5jbG9uZURlZXAgbWV0YVxuICAgIG5zID0gXy5jbG9uZURlZXAgc3RhdGVcbiAgICBjbSA9IGN1ci5tZXRhXG4gICAgY3MgPSBjdXIuc3RhdGVcbiAgIFxuICAgICMgU2V0IGlwIGRlbHRhIHRvIGJlIGFuIGFycmF5XG4gICAgaWYgbWV0YS50eXBlID09ICdpcCdcbiAgICAgIHVzYSA9IGlmIG5tLnNpZGUgPT0gJ3VzYScgdGhlbiBubS5kZWx0YSBlbHNlIDBcbiAgICAgIHVzc3IgPSBpZiBubS5zaWRlID09ICd1c3NyJyB0aGVuIG5tLmRlbHRhIGVsc2UgMFxuICAgICAgbm0uZGVsdGEgPSBbdXNhLCB1c3NyXVxuXG5cbiAgICBpZiBubS50eXBlID09IGNtLnR5cGUgYW5kIG5zLmdhbWUucm91bmQgPT0gY3MuZ2FtZS5yb3VuZFxuICAgICAgc2lkZVNhbWUgPSBpZiBubS5pZCA9PSAnc2NvcmUnIHRoZW4gdHJ1ZSBlbHNlIG5tLnNpZGUgPT0gY20uc2lkZVxuICAgICAgaWRTYW1lID0gbm0uaWQgPT0gY20uaWRcblxuICAgICAgdHlwZUlwU2FtZSA9IG5tLnR5cGUgPT0gJ2lwJyBhbmQgbm0uY291bnRyeS5pZCA9PSBjbS5jb3VudHJ5LmlkXG4gICAgICB0eXBlVmFsU2FtZSA9IG5tLnR5cGUgPT0gJ3ZhbCcgYW5kIG5tLmlkICE9ICd0dXJuJyBhbmRcbiAgICAgIG5tLmlkICE9ICdyb3VuZCcgYW5kIHNpZGVTYW1lIGFuZCBpZFNhbWVcblxuICAgICAgaWYgdHlwZUlwU2FtZSBvciB0eXBlVmFsU2FtZVxuICAgICAgICByZXR1cm4gQG1lcmdlV2l0aEN1cnJlbnQgbnMsIG5tXG5cbiAgICBzdXBlciBucywgbm1cblxuXG4gIG1lcmdlV2l0aEN1cnJlbnQ6IChzdGF0ZSxtZXRhKS0+XG4gICAgYyA9IF8uY2xvbmVEZWVwIEBnZXRDdXJyZW50KClcbiAgICBubSA9IF8uY2xvbmVEZWVwIG1ldGFcbiAgICBjbSA9IGMubWV0YVxuICAgIHN3aXRjaCBjbS50eXBlXG4gICAgICB3aGVuICdpcCdcbiAgICAgICAgbm0uZGVsdGFbMF0gKz0gY20uZGVsdGFbMF1cbiAgICAgICAgbm0uZGVsdGFbMV0gKz0gY20uZGVsdGFbMV1cbiAgICAgICAgbm0uc2lkZSA9ICdib3RoJ1xuICAgICAgICBpZiBubS5kZWx0YVswXSA9PSAwXG4gICAgICAgICAgbm0uc2lkZSA9ICd1c3NyJ1xuICAgICAgICBpZiBubS5kZWx0YVsxXSA9PSAwXG4gICAgICAgICAgbm0uc2lkZSA9ICd1c2EnXG4gICAgICAgIGlmIG5tLmRlbHRhWzBdID09IG5tLmRlbHRhWzFdID09IDBcbiAgICAgICAgICBwb3AgPSB0cnVlXG5cbiAgICAgIHdoZW4gJ3ZhbCdcbiAgICAgICAgbm0ub2xkID0gY20ub2xkXG4gICAgICAgIGlmIG5tLm9sZCA9PSBubS5uZXdcbiAgICAgICAgICBwb3AgPSB0cnVlXG5cbiAgICBpZiBAbGF0ZXN0ICE9IEBjdXJyZW50XG4gICAgICBAc3RhdGVzID0gQHN0YXRlcy5zbGljZSgwLEBjdXJyZW50KzEpXG4gICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIGlmIHBvcCA9PSB0cnVlXG4gICAgICBAc3RhdGVzLnBvcCgpXG4gICAgICBAY3VycmVudC0tXG4gICAgICBpZihAbGF0ZXN0ID4gQGN1cnJlbnQpXG4gICAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgZWxzZVxuICAgICAgQHN0YXRlc1tAY3VycmVudF0gPVxuICAgICAgICBtZXRhOiBubVxuICAgICAgICBzdGF0ZTogQGVuY29kZVN0YXRlIHN0YXRlXG5cbiAgICBAc2F2ZSgpXG4gICAgQGVtaXQgJ21lcmdlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1cGRhdGUnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ2NoYW5nZSdcblxuXG4gICMgVHVybiBzdGF0ZSBpbnRvIGEgbWluaW1hbCByZXByZXNlbnRhdGlvblxuICBlbmNvZGVDdXJyZW50OiAoKS0+XG4gICAgY3VyID0gQGdldEN1cnJlbnQoKVxuICAgIHJldHVybiBpZiBub3QgY3VyP1xuICAgIHN0YXRlRW5jb2Rlci5lbmNvZGUgQGdldEN1cnJlbnQoKT8uc3RhdGVcblxuXG4gIHRvZ2dsZVZpc2libGU6IChmb3JjZSwgc2hvd1RlbXA9ZmFsc2UpLT5cbiAgICBjbGVhclRpbWVvdXQgQHNob3dUaGVuSGlkZVRpbWVvdXRcbiAgICBAc2hvd1RlbXAgPSBzaG93VGVtcFxuICAgIEBzaG93ID0gaWYgZm9yY2U/IHRoZW4gZm9yY2UgZWxzZSAhQHNob3dcbiAgICBAZW1pdCAndG9nZ2xlVmlzaWJsZScsIEBzaG93XG4gICAgQGVtaXQgJ3VwZGF0ZSdcblxuICBzaG93VGhlbkhpZGU6ICh0aW1lID0gMTAwMCktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIGlmIG5vdCBAc2hvd1xuICAgICAgQHRvZ2dsZVZpc2libGUgdHJ1ZSwgdHJ1ZVxuICAgIGlmIEBzaG93VGVtcFxuICAgICAgQHNob3dUaGVuSGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0IEB0b2dnbGVWaXNpYmxlLmJpbmQodGhpcywgZmFsc2UpLCB0aW1lXG5cbiAgaGlkZTogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSBmYWxzZVxuXG4gIHNob3c6IC0+XG4gICAgQHRvZ2dsZVZpc2libGUgdHJ1ZVxuXG4gICMgY2IgY2FuIGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24sIHNob3J0aGFuZCBvYmosIG9yIGEga2V5IG5hbWVcbiAgIyBodHRwOi8vbG9kYXNoLmNvbS9kb2NzI2ZpbmRJbmRleFxuICBmaW5kU3RhdGVJbmRleDogKGNiKS0+XG4gICAgaW5kZXggPSBfLmZpbmRJbmRleCBAc3RhdGVzLCBjYlxuICAgIGlmIGluZGV4ICE9IC0xXG4gICAgICByZXR1cm4gaW5kZXggXG4iLCJjbGFzcyBNaWNyb0V2ZW50Q2xhc3NcbiAgX2luaXQ6LT4gQF9saXN0biBvciBAX2xpc3RuID0ge31cbiAgX2NyZWF0ZTooZSktPiBAX2luaXQoKVtlXSBvciAgQF9pbml0KClbZV0gPSBbXVxuICBvbjooZSwgZiktPiAoQF9jcmVhdGUgZSkucHVzaCBmXG4gIG9mZjooZSwgZiktPiAodC5zcGxpY2UgKHQuaW5kZXhPZiBmKSwgMSkgaWYgKHQgPSBAX2luaXQoKVtlXSk/XG4gIG9uY2U6KGUsIGYpLT4gQG9uIGUsICh0ID0gPT4gKEBvZmYgZSwgdCkgJiYgZi5hcHBseSBALCBhcmd1bWVudHMpXG4gIGVtaXQ6KGUsIHIuLi4pLT4gbC5hcHBseSBALCByIGZvciBsIGluIHQgaWYgKHQgPSBAX2luaXQoKVtlXSk/OyAwXG4gIEBtaXhpbj0odCktPiB0OjpbcF0gPSBAOjpbcF0gZm9yIHAgb2YgQDo6OyAwXG5cblxubW9kdWxlLmV4cG9ydHMgPSBNaWNyb0V2ZW50Q2xhc3NcbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vTWljcm9FdmVudENsYXNzJ1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbiAgIyBAaWQgaXMgdXNlZCBmb3IgcGVyc2lzdGFuY2VcbiAgY29uc3RydWN0b3I6IChvcHRzKS0+XG4gICAgI18uYXNzaWduIHRoaXMsIE1pY3JvRXZlbnRcbiAgICBAc3RhdGVzID0gW11cbiAgICBAc3RhZ2VkID0gW11cbiAgICBAbGF0ZXN0ID0gbnVsbFxuICAgIEBjdXJyZW50ID0gbnVsbFxuICAgIEBzaG93ID0gZmFsc2VcbiAgICBAaWQgPSBvcHRzLmlkXG4gICAgQHN0YXRlc1RvU2F2ZSA9IDUwXG4gIFxuICAjIEV4dGVuZCB0byBhZGQgY3VzdG9tIGVuY29kaW5nL2RlY29kaW5nIGZ1bmN0aW9uYWxpdHlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG5cbiAgZGVjb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIHN0YXRlXG4gIFxuICBzYXZlOiAtPlxuICAgIHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UgMCwgQHN0YXRlc1RvU2F2ZVxuICAgIFxuICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeSBzdGF0ZXNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSBAaWQsIGpzb25cblxuICBsb2FkOiAtPlxuICAgIHN0YXRlcyA9IEpTT04ucGFyc2UgbG9jYWxTdG9yYWdlLmdldEl0ZW0oQGlkKVxuICAgIGlmIHN0YXRlcyBhbmQgXy5pc0FycmF5IHN0YXRlc1xuICAgICAgQHN0YXRlcyA9IHN0YXRlc1xuICAgICAgQGN1cnJlbnQgPSBzdGF0ZXMubGVuZ3RoIC0gMVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICAgIEBlbWl0ICdsb2FkJ1xuICAgICAgQGVtaXQgJ3VwZGF0ZSdcbiAgICAgIHJldHVybiBzdGF0ZXNcblxuICBhZGQ6IChzdGF0ZSwgbWV0YT17fSktPlxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcblxuICAgIGlmIG5vdCBAY3VycmVudD9cbiAgICAgIEBjdXJyZW50ID0gMFxuICAgIGVsc2VcbiAgICAgIEBjdXJyZW50KytcblxuICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgbmV3U3RhdGUgPVxuICAgICAgc3RhdGU6IEBlbmNvZGVTdGF0ZSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgICAgbWV0YTogXy5jbG9uZURlZXAgbWV0YVxuXG4gICAgQHN0YXRlc1tAY3VycmVudF0gPSBuZXdTdGF0ZVxuXG4gICAgQHNhdmUoKVxuXG4gICAgQGVtaXQgJ2FkZCcsIG5ld1N0YXRlLCAnWUVBSCdcbiAgICBAZW1pdCAndXBkYXRlJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICdjaGFuZ2UnXG4gIFxuICB1bmRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPiAwXG4gICAgICBAY3VycmVudC0tXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VuZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuICBcbiAgcmVkbzogKCktPlxuICAgIGlmIEBjdXJyZW50IDwgQGxhdGVzdFxuICAgICAgQGN1cnJlbnQrK1xuICAgIEBzaG93VGhlbkhpZGUoKVxuICAgIHN0YXRlID0gQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdyZWRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBzdGF0ZVxuICAgIEBlbWl0ICdjaGFuZ2UnXG4gICAgc3RhdGVcblxuICBnb1RvOiAoaW5kZXgpLT5cbiAgICByZXR1cm4gaWYgbm90IGluZGV4P1xuICAgIEBjdXJyZW50ID0gaW5kZXhcbiAgICBAZW1pdCAnZ29UbycsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cbiAgZ2V0OiAoaW5kZXgpLT5cbiAgICByZXR1cm4gbnVsbCBpZiBAc3RhdGVzLmxlbmd0aCA9PSAwXG4gICAgc2ggPSBfLmNsb25lRGVlcCBAc3RhdGVzW2luZGV4XVxuICAgIHNoLnN0YXRlID0gQGRlY29kZVN0YXRlIHNoLnN0YXRlXG4gICAgc2hcblxuICBnZXRDdXJyZW50OiAoKS0+XG4gICAgQGdldChAY3VycmVudClcblxuICBnZXRQcmV2OiAtPlxuICAgIHByZXYgPSBAY3VycmVudCAtIDFcbiAgICBpZiBwcmV2IDwgMCB0aGVuIHByZXYgPSAwXG4gICAgcmV0dXJuIEBnZXQocHJldilcblxuICBnZXRBbGw6IC0+XG4gICAgXy5tYXAgQHN0YXRlcywgKHNoLCBpbmRleCk9PlxuICAgICAgQGdldCBpbmRleFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVIaXN0b3J5XG4iLCJjeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IChwcm9wcykgLT5cbiAgb3duZXJDbGFzcyA9IFwib3duZXItI3twcm9wcy5vd25lcn1cIlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBvd25lckNsYXNzICsgJyAnICsgY2xhc3Nlc1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiY3MgPVxuICAnYSc6ICdhcydcbiAgJ2UnOiAnZXUnXG4gICdjJzogJ2NhJ1xuICAncyc6ICdzYSdcbiAgJ2YnOiAnYWYnXG4gICdtJzogJ21lJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IChsZXR0ZXIpLT4gY3NbbGV0dGVyXVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiBlbCBpZiBlbFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwsaSxhcnIpLT4gYXJyLmluZGV4T2YoZWwpID09IGlcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IDEgPD0gZWwgPD0gMTEwXG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4gIHR1cm46ICh2YWwpLT5cbiAgICBzd2l0Y2ggdmFsXG4gICAgICB3aGVuIDAgdGhlbiAnUydcbiAgICAgIHdoZW4gMTEgdGhlbiAnRSdcbiAgICAgIGVsc2UgdmFsXG4gIHJvdW5kOiAodmFsKS0+XG4gICAgaWYgdmFsID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChpZCwgdmFsLCBvcHQpLT5cbiAgc3dpdGNoIGlkXG4gICAgd2hlbiAndHVybidcbiAgICAgIHN0YXJ0ID0gJ1MnXG4gICAgICBlbmQgPSAnRSdcbiAgICAgIGlmIG9wdCA9PSAnbG9uZydcbiAgICAgICAgc3RhcnQgPSAnTmV3IEdhbWUnXG4gICAgICAgIGVuZCA9ICdHYW1lIEVuZCdcbiAgICAgIHN3aXRjaCB2YWxcbiAgICAgICAgd2hlbiAwIHRoZW4gc3RhcnRcbiAgICAgICAgd2hlbiAxMSB0aGVuIGVuZFxuICAgICAgICBlbHNlIHZhbFxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgaCA9IGlmIG9wdCA9PSAnbG9uZycgdGhlbiAnSGVhZGxpbmUnIGVsc2UgJ0gnXG4gICAgICBpZiB2YWwgPT0gMCB0aGVuIGggZWxzZSBNYXRoLmNlaWwodmFsIC8gMilcbiAgICB3aGVuICdzY29yZSdcbiAgICAgIE1hdGguYWJzIHZhbFxuICAgIGVsc2VcbiAgICAgIHZhbFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPiBpZiBudW0gPiAwIHRoZW4gXCIrI3tudW19XCIgZWxzZSBudW1cbiIsIiMgRW5jb2RlL2RlY29kZSBudW1iZXJzIGludG8gc2luZ2xlLWNoYXIgcmVwcmVzZW50YXRpb25zXG4jIDAtMzUgIC0+IDAsMSwyLi5hLGIsYy4uelxuIyAzNi02MSAtPiBBLEIsQy4uLlxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChuKS0+XG4gICAgaWYgbiA8IDM2IHRoZW4gb3V0ID0gbi50b1N0cmluZygzNikgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlIG4gKyAyOVxuXG4gIGRlY29kZTogKGMgPSAnMCcpLT5cbiAgICBjb2RlID0gYy5jaGFyQ29kZUF0IDBcbiAgICAjIENhbGN1bGF0ZSBvZmZzZXQgZnJvbSBjaGFyY29kZSB0byB2YWx1ZVxuICAgIG9mZnNldCA9IHN3aXRjaFxuICAgICAgIyAwLTlcbiAgICAgIHdoZW4gNDggPD0gY29kZSA8PSA1NyB0aGVuIDQ4XG4gICAgICAjIDEwLTM1XG4gICAgICB3aGVuIDk3IDw9IGNvZGUgPD0gMTIyIHRoZW4gODdcbiAgICAgICMgMzYtNjFcbiAgICAgIHdoZW4gNjUgPD0gY29kZSA8PSA5MCB0aGVuIDI5XG5cbiAgICBjb2RlIC0gb2Zmc2V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb250aW5lbnQpLT5cbiAgaWYgY29udGluZW50ID09ICdhZicgdGhlbiAnZicgZWxzZSBjb250aW5lbnQuY2hhckF0IDBcblxuIiwiIyBIYXNoZWQgcXNcbiMgSGFuZGxlcyBzdHJpbmdzIGFuZCBhcnJheXNcbiMgQW55dGhpbmcgd2l0aCBhIGNvbW1hIHdpbGwgYmUgcGFyc2VkIGFzIGFuIGFycmF5XG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1lcmdlOiAob2JqKS0+XG5cbiAgZ2V0OiAoZmllbGQpLT5cbiAgXG4gIHNldDogKGZpZWxkLCB2YWwpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcXNPYmpbZmllbGRdID0gdmFsXG4gICAgQHNldFFTIEB0b1FTKHFzT2JqKVxuXG4gIGRlbGV0ZTogKGZpZWxkKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHJldHVybiBpZiBub3QgcXNPYmo/XG4gICAgZGVsZXRlIHFzT2JqW2ZpZWxkXVxuICAgIEBzZXRRUyBAdG9RUyBxc09ialxuXG4gIGVuY29kZUNoYXJzSW46IFsnPScsJyYnXVxuXG4gIGVuY29kZUNoYXJzT3V0OlsnJTNEJywnJTI2J11cblxuICBlbmNvZGU6IChvYmopLT5cbiAgICBpZiBfLmlzQXJyYXkgb2JqXG4gICAgICBvYmogPSBvYmouam9pbignLCcpXG4gICAgb2JqLnJlcGxhY2UoQGVuY29kZUNoYXJzSW4sIEBlbmNvZGVDaGFyc091dClcblxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBzdHIgPSBzdHIucmVwbGFjZShAZW5jb2RlQ2hhcnNPdXQsIEBlbmNvZGVDaGFyc0luKVxuICAgIGlmIHN0ci5pbmRleE9mKCcsJykgIT0gLTFcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLCcpXG4gICAgc3RyXG5cblxuICB0b09iajogKHFzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKT9bMV0pLT5cbiAgICBpZiBub3QgcXNcbiAgICAgIHJldHVyblxuICAgIG91dCA9IHt9XG4gICAgcGFpcnMgPSBxcy5zcGxpdCgnJicpXG4gICAgcGFpcnM/LmZvckVhY2ggKHBhaXIpPT5cbiAgICAgIGt2QXJyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBvdXRbQGRlY29kZShrdkFyclswXSldID0gQGRlY29kZShrdkFyclsxXSlcbiAgICBvdXRcblxuICB0b1FTOiAob2JqKS0+XG4gICAgcGFpcnMgPSBbXVxuICAgIGZvciBvd24gayx2IG9mIG9ialxuICAgICAgcGFpcnMucHVzaCBcIiN7QGVuY29kZShrKX09I3tAZW5jb2RlKHYpfVwiXG4gICAgcGFpcnMuam9pbignJicpXG4gICAgICAgXG4gIHNldFFTOiAocXMpLT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF0gKyAnPycgKyBxc1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCktPlxuICByYW5nZXMgPVxuICAgIHNjb3JlOiBbLTIwLCAyMF1cbiAgICB0dXJuOiBbMCwgMTFdXG4gICAgcm91bmQ6IFswLCAxNl1cbiAgICBkZWZjb246IFsxLCA1XVxuICAgIG1pbG9wczogWzAsIDVdXG4gICAgc3BhY2U6IFswLCA4XVxuXG4gIHJhbmdlID0gcmFuZ2VzW2lkXVxuXG4gIGlmIHZhbCA8IHJhbmdlWzBdXG4gICAgcmV0dXJuIHJhbmdlWzFdXG4gIGlmIHZhbCA+IHJhbmdlWzFdXG4gICAgcmV0dXJuIHJhbmdlWzBdXG4gIHZhbFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhcmdzLi4uKS0+XG4gIGRvY3VtZW50LnRpdGxlID0gYXJncy5qb2luKCcgfCAnKSArICcgLSBUd2lTdHJ1ZydcbiIsIm1vZHVsZS5leHBvcnRzID0gKGRpciktPiBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID4gMFxuICAgIHJldHVybiAnKydcbiAgaWYgbnVtIDwgMFxuICAgIHJldHVybiAnLSdcbiAgcmV0dXJuICcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhLGIpLT4gYS1iXG4iLCJudW1Ub0NoYXIgPSByZXF1aXJlICcuL251bVRvQ2hhcidcblxuIyBUdXJuIGEgZ2FtZSBzdGF0ZSBvYmplY3QgaW50byBhIHN0cmluZywgdmFsdWVzIGRlbGltaXRlZCBieSBpbmRleCBpbiB0aGUgc3RyaW5nXG4jXG4jIEJ5dGVzICAgICBJdGVtc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAwLTcgICAgICAgQm9hcmQgc3RhdGU6ICBTY29yZSwgRGVmY29uLCBUdXJuLCBSb3VuZCxcbiMgICAgICAgICAgICAgICAgICAgICAgICAgTU8gVVNBLCBNTyBVU1NSLCBTcGFjZSBVU0EsIFNwYWNlIFVTU1JcbiMgOC0xNzYgICAgIENvdW50cnkgSVBzLCAyIGJ5dGVzIGVhY2gsIHNlcXVlbnRpYWxseSBieSBpZFxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChzdGF0ZSktPlxuICAgIGdhbWUgPSBzdGF0ZS5nYW1lXG4gICAgaXBzID0gc3RhdGUuaXBzXG5cbiAgICAjIFNjb3JlIGlzIGZyb20gLTIwIHRvICsyMCwgYnV0IHRoaXMgZW5jb2RlciBpcyBwb3NpdGl2ZSBpbnRlZ2VycyBvbmx5XG4gICAgYm9hcmQgPSBbXG4gICAgICBnYW1lLnNjb3JlICsgMjAsIGdhbWUuZGVmY29uLCBnYW1lLnR1cm4sIGdhbWUucm91bmQsXG4gICAgICBnYW1lLm1pbG9wc1swXSwgZ2FtZS5taWxvcHNbMV0sIGdhbWUuc3BhY2VbMF0sIGdhbWUuc3BhY2VbMV1cbiAgICBdXG5cbiAgICAjIEZpcnN0IDIgaXBzIGFyZSB0aGUgc3VwZXJwb3dlcnMgLSBwcmV0dHkgdXNlbGVzcywgc2hvdWxkIGNoYW5nZSBpbiBmdXR1cmVcbiAgICBib2FyZC5jb25jYXQgXy5mbGF0dGVuIGlwcy5zbGljZSgyKVxuICAgICAgLm1hcCBudW1Ub0NoYXIuZW5jb2RlXG4gICAgICAuam9pbiAnJ1xuICAgICAgXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHJldHVybiBudWxsIGlmIG5vdCBzdHI/XG4gICAgYXJyID0gc3RyLnNwbGl0KCcnKS5tYXAgKGVsKS0+IG51bVRvQ2hhci5kZWNvZGUgZWxcbiAgICBib2FyZEFyciA9IGFyci5zbGljZSgwLDgpXG4gICAgaXBBcnIgPSBhcnIuc2xpY2UoOClcblxuICAgIFtzY29yZSwgZGVmY29uLCB0dXJuLCByb3VuZCwgbW91c2EsIG1vdXNzciwgc3B1c2EsIHNwdXNzcl0gPSBib2FyZEFyclxuICAgIG1pbG9wcyA9IFttb3VzYSwgbW91c3NyXVxuICAgIHNwYWNlID0gW3NwdXNhLCBzcHVzc3JdXG4gICAgc2NvcmUgLT0gMjBcbiAgICBnYW1lID0ge3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtaWxvcHMsIHNwYWNlfVxuXG4gICAgaXBzID0gW11cbiAgICBmb3IgaXAsIGluZGV4IGluIGlwQXJyXG4gICAgICBpcHNJbmRleCA9IE1hdGguZmxvb3IgaW5kZXgvMlxuICAgICAgc2lkZUluZGV4ID0gaW5kZXggJSAyXG4gICAgICBpZiBzaWRlSW5kZXggPT0gMFxuICAgICAgICBpcHNbaXBzSW5kZXhdID0gW2lwXVxuICAgICAgZWxzZVxuICAgICAgICBpcHNbaXBzSW5kZXhdW3NpZGVJbmRleF0gPSBpcFxuXG4gICAgIyBBZGQgdGhlIHN1cGVycG93ZXIgSVBzIGJhY2sgaW5cbiAgICBpcHMudW5zaGlmdCBbMCwwXSwgWzAsMF1cblxuICAgIHtnYW1lLCBpcHN9XG5cbiIsImdldElwU3RhdHMgPSAoaXBzLCBjb3VudHJpZXMpLT5cbiAgYWNjdW11bGF0b3IgPSAtPlxuICAgIGJ0bDogMFxuICAgIG5vbjogMFxuICAgIHRvdGFsOiAwXG4gICAgZXU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYXM6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgbWU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYWY6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgc2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgY2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG5cbiAgZm4gPSAoYWNjdW0sIGlwcywgY291bnRyeUlkKS0+XG4gICAgY291bnRyeSA9IF8uZmluZCBjb3VudHJpZXMsIGlkOiBwYXJzZUludChjb3VudHJ5SWQsIDEwKVxuICAgIGlmIGlwc1swXSAtIGlwc1sxXSA+PSBjb3VudHJ5LnN0YWJcbiAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS50b3RhbCsrXG4gICAgICBhY2N1bS50b3RhbCsrXG4gICAgICBpZiBjb3VudHJ5LmJ0bFxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0uYnRsKytcbiAgICAgICAgYWNjdW0uYnRsKytcbiAgICAgIGVsc2VcbiAgICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLm5vbisrXG4gICAgICAgIGFjY3VtLm5vbisrXG4gICAgYWNjdW1cblxuICAjIEZsaXBwZWQgdG8gaGF2ZSBVU1NSIGlwcyBmaXJzdFxuICBpcHNSZXYgPSBfLm1hcCBpcHMsIChpcHMpLT4gXy5jbG9uZURlZXAoaXBzKS5yZXZlcnNlKClcblxuICB1c2EgPSBfLnJlZHVjZSBpcHMsIGZuLCBhY2N1bXVsYXRvcigpXG4gIHVzc3IgPSBfLnJlZHVjZSBpcHNSZXYsIGZuLCBhY2N1bXVsYXRvcigpXG5cbiAge3VzYSwgdXNzcn1cblxuc3VtUmVnaW9uID0gKG1ldHJpYywgc3VtLCByZWdpb24pLT4gc3VtICsgcmVnaW9uW21ldHJpY11cblxuZ2V0UmVnaW9uU3RhdHMgPSAoaXBTdGF0cywgcmVnaW9ucyktPlxuICBzdGF0cyA9IF8ubWFwVmFsdWVzIGlwU3RhdHMsIChoZXJvLCBwb3dlciwgcG93ZXJzKS0+XG4gICAgdmlsbGFpbiA9IGlmIHBvd2VyID09ICd1c2EnIHRoZW4gcG93ZXJzLnVzc3IgZWxzZSBwb3dlcnMudXNhXG4gICAgcmVnaW9uU3RhdHMgPSByZWdpb25zLm1hcCAocmVnaW9uKS0+XG4gICAgICBoUmVnaW9uID0gaGVyb1tyZWdpb24uaWRdXG4gICAgICB2UmVnaW9uID0gdmlsbGFpbltyZWdpb24uaWRdXG4gICAgICBkb21pbmF0aW9uID0gaFJlZ2lvbi5ub24gPiAwIGFuZCBoUmVnaW9uLmJ0bCA+IHZSZWdpb24uYnRsIGFuZCBoUmVnaW9uLnRvdGFsID4gdlJlZ2lvbi50b3RhbFxuICAgICAgY29udHJvbCA9IGhSZWdpb24uYnRsID09IHJlZ2lvbi5udW1CdGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICBwcmVzZW5jZSA9IG5vdCBkb21pbmF0aW9uIGFuZCBub3QgY29udHJvbCBhbmQgaFJlZ2lvbi50b3RhbCA+IDBcbiAgICAgIHsgcHJlc2VuY2UsIGRvbWluYXRpb24sIGNvbnRyb2wgfVxuXG4gICAgcmVnaW9uU3RhdHMgPSBfLnppcE9iamVjdCBfLnBsdWNrKHJlZ2lvbnMsICdpZCcpLCByZWdpb25TdGF0c1xuICAgIHJlZ2lvblN0YXRzID0gXy5hc3NpZ24gcmVnaW9uU3RhdHMsXG4gICAgICBwcmVzZW5jZTogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdwcmVzZW5jZScpLCAwXG4gICAgICBkb21pbmF0aW9uOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2RvbWluYXRpb24nKSwgMFxuICAgICAgY29udHJvbDogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdjb250cm9sJyksIDBcbiAgXG4gIHN0YXRzXG5cbm1vZHVsZS5leHBvcnRzID0gKGlwcywgY291bnRyeUFyciwgcmVnaW9uQXJyKS0+XG4gIGNvdW50cmllcyA9IGdldElwU3RhdHMoaXBzLCBjb3VudHJ5QXJyKVxuICByZWdpb25zID0gZ2V0UmVnaW9uU3RhdHMoY291bnRyaWVzLCByZWdpb25BcnIpXG4gIHtjb3VudHJpZXMsIHJlZ2lvbnN9XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAocG93ZXIpLT4gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyPScnKS0+IHN0ci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lTdHJ1Z1wiXG4gICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgY3JlYXRlZCBhcyBhIGNhcmQgcmVmZXJlbmNlIGZvciBcIlxuICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIixcbiAgICAgICAgICBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgXCIuIEl0IGhhcyBzaW5jZSBleHBhbmRlZCB0byBpbmNsdWRlIGEgcGxheWFibGUgdmVyc2lvbiBvZiB0aGUgYm9hcmQgZm9yXG4gICAgICAgIGxvY2FsIGdhbWVzIHdpdGhvdXQgdGFraW5nIHVwIGFzIG11Y2ggdGFibGUgc3BhY2UuXCJcbiAgICAgIF1cbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIkZvciBtb3JlIGluLWRlcHRoIHN0cmF0ZWd5LCBnbyB0byB0aGUgZXhjZWxsZW50IFwiXG4gICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgXCIgc2l0ZS4gSXQgaGFzIHRvbnMgb2YgZ3JlYXQgY29udGVudCBhbmRcbiAgICAgICAgYW5hbHlzaXMgYXZhaWxhYmxlLCBpbmNsdWRpbmcgZGlzY3Vzc2lvbnMgYWJvdXQgbmVhcmx5IGV2ZXJ5IGNhcmQuXG4gICAgICAgIFBsZWFzZSBzdXBwb3J0IFR3aWxpZ2h0IFN0cmF0ZWd5IGFuZCBpdHMgYXV0aG9yLCBcIlxuICAgICAgICBSLmVtIHt9LCBcInRoZW9yeVwiXG4gICAgICAgIFwiLCBieSBwdXJjaGFzaW5nIFR3aWxpZ2h0IFN0cnVnZ2xlIGZyb20gQW1hem9uIG9uIHRoZSBzaWRlYmFyIG9mIGhpc1xuICAgICAgICBzaXRlLCBvciBieSBwYXlpbmcgc29tZSBtb25leSBmb3IgdGhlIGFzc29jaWF0ZWQgXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9sZWFucHViLmNvbS90d2lsaWdodHN0cmF0ZWd5XCIsIFwiZS1ib29rXCJcbiAgICAgICAgXCIuIEl0J3MgVHdpbGlnaHQgU3RyYXRlZ3kgaW4gYm9vayBmb3JtIGFuZCBkZXNlcnZlcyB5b3VyIG1vbmV5LlwiXG4gICAgICBdXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vamp0LmlvL1wiLCBcIkphc29uIFRyaWxsXCJcbiAgICAgICAgXCIuIFNvdXJjZSBhdmFpbGFibGUgb24gXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Z1wiLCBcIkdpdGh1YlwiXG4gICAgICAgIFwiLlwiXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnlWaWV3ID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkJ1xuXG5yZWR1Y2VTaG9ydGN1dHMgPSAoYXJyLCBzaG9ydGN1dCktPlxuICBhcnIucHVzaCBSLmR0IHt9LCBzaG9ydGN1dC5rZXlcbiAgYXJyLnB1c2ggUi5kZCB7fSwgc2hvcnRjdXQuZGVzY1xuICBhcnJcblxuXG5Cb2FyZEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBzY3JvbGxUb3A6IC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgd2luZG93LnNjcm9sbFRvIDAsMFxuICAgICwgMFxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgc2hvcnRjdXRzOlxuICAgICAgaXA6IFtcbiAgICAgICAgeyBrZXk6J2knLCBkZXNjOiAnU3RhcnQgaW5mbHVlbmNlIHBsYWNlbWVudCBieSBrZXlib2FyZCBtb2RlJyB9XG4gICAgICAgIHsga2V5Oidlc2MnLCBkZXNjOiAnU3RvcCBpbmZsdWVuY2UgcGxhY2VtZW50IGJ5IGtleWJvYXJkIG1vZGUnIH1cbiAgICAgICAgeyBrZXk6J2Jrc3AnLCBkZXNjOiAnR28gYmFjayAoZXguIGZyb20gY291bnRyeSAtPiBjb250aW5lbnQpJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNBIGluZmx1ZW5jZSBpbmMvZGVjICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5OidyL1InLCBkZXNjOiAnVVNTUiBpbmZsdWVuY2UgaW5jL2RlYyAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgXVxuICAgICAgbGVmdDogW1xuICAgICAgICB7IGtleToncy9TJywgZGVzYzogJ1Njb3JlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2QvRCcsIGRlc2M6ICdEZWZjb24gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonbS9NJywgZGVzYzogJ1VTQSBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonby9PJywgZGVzYzogJ1VTU1IgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2gnLCBkZXNjOiAnU2hvdy9oaWRlIEFjdGlvbiBIaXN0b3J5JyB9XG4gICAgICAgIHsga2V5OidjJywgZGVzYzogJ1JvbGwgZGljZScgfVxuICAgICAgXVxuICAgICAgcmlnaHQ6IFtcbiAgICAgICAgeyBrZXk6J3QvVCcsIGRlc2M6ICdUdXJuIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3IvUicsIGRlc2M6ICdSb3VuZCBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidwL1AnLCBkZXNjOiAnVVNBIFNwYWNlIFJhY2UgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonYS9BJywgZGVzYzogJ1VTU1IgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5Oid6JywgZGVzYzogJ1VuZG8gKEFjdGlvbiBIaXN0b3J5KScgfVxuICAgICAgICB7IGtleToneScsIGRlc2M6ICdSZWRvIChBY3Rpb24gSGlzdG9yeSknIH1cbiAgICAgIF1cbiAgICAgIFxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBUd2lsaWdodCBTdHJ1Z2dsZSBib2FyZCdcbiAgICAgICAgICBSLnAge30sIFwiVGhpcyBpcyBhIGZ1bGx5IHBsYXlhYmxlIGJvYXJkIHdpdGggYSBtb3JlXG4gICAgICAgICAgICBjb21wYWN0IGxheW91dCB0byBmaXQgb24gc21hbGxlciBzY3JlZW5zLCBsaWtlIGEgQ2hyb21lYm9vayBvciBpUGFkLiBKdXN0IGFkZCBjYXJkc1xuICAgICAgICAgICAgYW5kIHlvdSdsbCBiZSBhYmxlIHRvIHBsYXkgYW55d2hlcmUuIFRoZSBib2FyZCBpc24ndCBhd2FyZSBvZiB0aGUgcnVsZXMsIG5vciB3aWxsXG4gICAgICAgICAgICBpdCBkbyBhbnl0aGluZyBhdXRvbWF0aWNhbGx5LiBVc2UgaXQgYXMgeW91IHdvdWxkIGEgcGh5c2ljYWwgY29weSBvZiB0aGUgZ2FtZS5cIlxuICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgXCJUaGlzIGdhbWUsIFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCIjL2JvYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICAgICAgICBSLmNvZGUge30sIEBwcm9wcy5pZFxuICAgICAgICAgICAgXCIsIHdpbGwgYmUgc2F2ZWQgaW4geW91ciBicm93c2VyIGFuZCBjYW4gYmUgYm9va21hcmtlZCBhbmQgcmVzdW1lZCBhdCBhIGxhdGVyIHRpbWUsIGV2ZW4gaWYgeW91IGNsb3NlIHlvdXIgYnJvd3Nlci4gXCJcbiAgICAgICAgICAgIFIuYSBvbkNsaWNrOiBAc2Nyb2xsVG9wLCBocmVmOicjL2JvYXJkJywgJ0NsaWNrIGhlcmUgdG8gc3RhcnQgYSBuZXcgZ2FtZSdcbiAgICAgICAgICAgICcuJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAge30sIFwiVGhlIFVSTCBjb250YWlucyB0aGUgY29tcGxldGUgc3RhdGUgb2YgdGhlIGJvYXJkIGFuZCB3aWxsXG4gICAgICAgICAgICB1cGRhdGUgd2l0aCBlYWNoIGFjdGlvbiB0YWtlbi4gVGhpcyBjYW4gYmUgdXNlZCB0byBwbGF5IHJlbW90ZWx5XG4gICAgICAgICAgICB3aXRoIHNvbWVvbmUgYnkgc2VuZGluZyB0aGUgVVJMIGJhY2sgYW5kIGZvcnRoLiBGb3JcbiAgICAgICAgICAgIGluc3RhbmNlLCBpZiB5b3Ugd2VyZSB0aGUgVVNTUiBzdGFydGluZyBhIG5ldyBnYW1lLCB5b3Ugd291bGQgcGxhY2UgeW91clxuICAgICAgICAgICAgaW5pdGlhbCBpbmZsdWVuY2UgdGhlbiBjb3B5IHRoZSBVUkwgYW5kIHNlbmQgaXQgdG8geW91ciBvcHBvbmVudC4gVGhleVxuICAgICAgICAgICAgd291bGQgZ28gdG8gdGhhdCBVUkwsIHBsYWNlIHRoZWlyIGluZmx1ZW5jZSBhbmQgc2VuZCB0aGUgbmV3IFVSTCBiYWNrIHRvIHlvdS4gTGF0aGVyLCByaW5zZSwgcmVwZWF0LlwiXG4gICAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJJbnN0cnVjdGlvbnNcIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyBhZGQvcmVtb3ZlIGluZmx1bmNlIGluIGEgY291bnRyeSwgY2xpY2sgaW4gdGhlIHRvcC9ib3R0b20gb2YgdGhlIGluZmx1ZW5jZSBzcGFjZSBvbiB0aGUgZGVzaXJlZCBzaWRlIChVU0Egb24gbGVmdCwgVVNTUiBvbiByaWdodCkuXCJcbiAgICAgICAgICBSLnAge30sIFwiVG8gdW5kby9yZWRvIG9uZSBvciBtb3JlIGFjdGlvbnMsIHByZXNzIFovWSBvbmUgb3IgbW9yZSB0aW1lcy5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgZGljZSBjYW4gYmUgcm9sbGVkIGluZGl2aWR1YWxseSBieSBjbGlja2luZyBvbiB0aGVtLCBvciBhcyBhIHBhaXIgYnkgY2xpY2tpbmcgb24gXFxcIlJPTEwgRElDRVxcXCIuXCJcbiAgICAgICAgICBSLnAge30sIFwiRWFjaCBzdXBlcnBvd2VyIGJveCAoVVNBLCBVU1NSKSBzaG93cyB0aGUgbnVtYmVyIG9mIGNvbnRyb2xsZWQgYmF0dGxlZ3JvdW5kIGNvdW50cmllcyBvbiB0b3AuIE9uIHRoZSBib3R0b20gaXQgc2hvd3MgdGhlIG51bWJlciBvZiByZWdpb25zIGluIHdoaWNoIHRoZSBwb3dlciBoYXMgcHJlc2VuY2UsIGRvbWluYXRpb24sIGFuZCBjb250cm9sLiBGb3IgZXhhbXBsZSwgaWYgdGhlIFVTU1IgaGFkIFxcXCI0IDIgMVxcXCIsIGl0IHdvdWxkIG1lYW4gdGhhdCB0aGV5IGhhdmUgcHJlc2VuY2UgaW4gNCByZWdpb25zLCBkb21pbmF0ZSAyLCBhbmQgY29udHJvbCAxLlwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJLZXlib2FyZCBTaG9ydGN1dHNcIlxuICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIGNvbC1sZy02JywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5sZWZ0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLnJpZ2h0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICAgICAgUi5oNCB7fSwgXCJJbmZsdWVuY2UgcGxhY2VtZW50IGJ5IGtleWJvYXJkIG1vZGVcIlxuICAgICAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBCb2FyZFBhZ2Utc2hvcnRjdXRzLWlwJywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5pcCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuIFxuICBkaXNwbGF5TmFtZTogJ0JvYXJkVmlldydcbiAgXG4gIHN0YXRlSGlzdG9yeTogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICBAc3RhdGVIaXN0b3J5ID0gbmV3IEJvYXJkU3RhdGVIaXN0b3J5IGlkOiBAcHJvcHMuZ2FtZUlkXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5QKS0+XG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHdpZHRoOiAxMTQwXG4gICAgaGVpZ2h0OiA3MzBcbiAgICBub2RlOlxuICAgICAgd2lkdGg6IDY2XG4gICAgICBoZWlnaHQ6IDUwXG4gICAgICBndXR0ZXI6IDE0XG4gICAgICB0aXRsZUhlaWdodDogMTZcbiAgICAgIHRpdGxlRm9udFNpemU6IDEyXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGRlYnVnT2JqOiB7fVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkVmlldycsIFtcbiAgICAgIEJvYXJkU3RhdGVIaXN0b3J5Vmlld1xuICAgICAgICBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnlcbiAgICAgICAga2V5OiBcIkJvYXJkU3RhdGVIaXN0b3J5LSN7QHByb3BzLmdhbWVJZH1cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29udGFpbmVyJywgW1xuICAgICAgICBCb2FyZCBfLmFzc2lnbiBzdGF0ZUhpc3Rvcnk6IEBzdGF0ZUhpc3RvcnksIEBwcm9wc1xuICAgICAgICBCb2FyZEluZm8gaWQ6IEBwcm9wcy5nYW1lSWRcbiAgICAgICAgUi50ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZTogJ21hcC1wb3NpdGlvbi1kZWJ1ZydcbiAgICAgICAgICByZWY6J2RlYnVnJ1xuICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShAc3RhdGUuY29vcmRzLCBudWxsLCAnICcpXG4gICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICB3aWR0aDonMTAwJSdcbiAgICAgICAgICAgIGhlaWdodDonNjByZW0nXG4gICAgICBdXG4gICAgXVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRQaWNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYm9hcmRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXInLFxuICAgICAgICBSLmgyIHt9LCAnQm9hcmQnXG4gICAgICBSLmEgaHJlZjonL2ltYWdlcy90c2JvYXJkLmpwZycsXG4gICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ZsdWlkJywgc3JjOicvaW1hZ2VzL3RzYm9hcmQuanBnJ1xuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbm1vZHVsZS5leHBvcnRzICA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZFZpZXcnXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgICQod2luZG93KS5vbiAnc2Nyb2xsJywgQGZsb2F0aW5nQ2FyZFxuICAgICQod2luZG93KS5vbiAncmVzaXplJywgQGZsb2F0aW5nQ2FyZFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuICAgIEBnZXRTdHJhdGVneSgpXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IC0+XG4gICAgd2luZG93Lm9ua2V5cHJlc3MgPSBudWxsXG4gICAgJCh3aW5kb3cpLm9mZiAnc2Nyb2xsJywgQGZsb2F0aW5nQ2FyZFxuICAgICQod2luZG93KS5vZmYgJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vZmYgJ2tleXByZXNzJywgQGhhbmRsZUtleVByZXNzXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPlxuICAgIEBnZXRTdHJhdGVneSgpXG4gICAgI0BzZXRXaW5kb3dLZXlwcmVzc0hhbmRsZXIoKVxuXG4gIGZsb2F0aW5nQ2FyZDogLT5cbiAgICAkaGVhZGVyID0gJCBAcmVmcy5oZWFkZXIuZ2V0RE9NTm9kZSgpXG4gICAgJGltZyA9ICQgQHJlZnMuY2FyZEltZy5nZXRET01Ob2RlKClcbiAgICAkd2luID0gJCB3aW5kb3dcbiAgICBobyA9ICRoZWFkZXIub2Zmc2V0KClcbiAgICBpc1Njcm9sbGluZyA9ICR3aW4uc2Nyb2xsVG9wKCkgPiBoby50b3AgKyBoby5oZWlnaHRcbiAgICAkaW1nLnRvZ2dsZUNsYXNzICdjYXJkLWltZy1zY3JvbGwnLCBpc1Njcm9sbGluZ1xuICAgICRpbWcuY3NzICdyaWdodCcsIFwiI3soJHdpbi53aWR0aCgpIC0gaG8ud2lkdGggLSAxNSkgLyAyfXB4XCJcblxuICBoYW5kbGVLZXlQcmVzczogKGV2KSAtPlxuICAgICAga0MgPSBldi5rZXlDb2RlXG4gICAgICBpZiBrQyA9PSAxMDQgb3Iga0MgPT0gNzJcbiAgICAgICAgaWQgPSBAcHJvcHMucHJldkNhcmQuaWRcbiAgICAgIGlmIGtDID09IDEwOCBvciBrQyA9PSA3NlxuICAgICAgICBpZCA9IEBwcm9wcy5uZXh0Q2FyZC5pZFxuICAgICAgaWYgaWQ/XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiIy9jYXJkLyN7aWR9XCJcblxuICBnZXRTdHJhdGVneTogLT5cbiAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIGRhdGEuLi48L3A+J1xuICAgICQuZ2V0IFwiL2RhdGEvY2FyZFN0cmF0ZWd5TGlua2VkLyN7bGlicy56ZXJvUGFkKEBwcm9wcy5jYXJkLmlkKX0uaHRtbFwiLCAoZGF0YSk9PlxuICAgICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSBkYXRhXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNhcmQgPSBAcHJvcHMuY2FyZFxuICAgIGltYWdlVXJsID0gXCIvaW1hZ2VzL2NhcmRzLyN7bGlicy56ZXJvUGFkKGNhcmQuaWQpfS5qcGdcIlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgY2xlYXJmaXgnLCByZWY6ICdoZWFkZXInLFxuICAgICAgICBSLmgyIGNsYXNzTmFtZTogbGlicy5jYXJkQ2xhc3NOYW1lKGNhcmQpLCBbXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1vcHMnLCBpZiBjYXJkLm9wcyA8IDEgdGhlbiBcIlNcIiBlbHNlIGNhcmQub3BzXG4gICAgICAgICAgXCIje2NhcmQudGl0bGV9IFwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonY2FyZC1pZCcsIFwiIyN7Y2FyZC5pZH1cIlxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQtbmF2JywgW1xuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5wcmV2Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1wcmV2J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMucHJldkNhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJ+KXgCAnXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsICcoSCknXG4gICAgICAgICAgICAgICcgcHJldidcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLm5leHRDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LW5leHQnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5uZXh0Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICAnbmV4dCAnXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsICcoTCknXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICcg4pa2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgUi5wIHtjbGFzc05hbWU6ICdwdWxsLWxlZnQgY2FyZC1ib2R5J30sIGNhcmQudGV4dFxuICAgICAgUi5pbWcga2V5OiBpbWFnZVVybCwgc3JjOiBpbWFnZVVybCwgY2xhc3NOYW1lOiAnaW1nUmlnaHQnLCByZWY6J2NhcmRJbWcnXG4gICAgICBSLmRpdiB7Y2xhc3NOYW1lOiAnY2FyZC1zdHJhdGVneScsIGlkOiAnY2FyZC1zdHJhdGVneSd9LCBbXG4gICAgICAgIFIuaDMge30sIFtcbiAgICAgICAgICAnU3RyYXRlZ2ljIE5vdGVzIGZyb20nXG4gICAgICAgICAgJyAnXG4gICAgICAgICAgUi5hIGhyZWY6Y2FyZC51cmwsICdUd2lsaWdodFN0cmF0ZWd5LmNvbSdcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiByZWY6J2NhcmRTdHJhdGVneScsXG4gICAgICAgICAgUi5wIHt9LCAnTG9hZGluZyBkYXRhJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxuQ2FyZExpc3QgPSByZXF1aXJlICcuLi92aWV3cy9DYXJkTGlzdCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZHNWaWV3J1xuICBkZWZhdWx0U3RhdGU6IChwcm9wcyktPlxuICAgIGZpbHRlciA9IHByb3BzPy5zdGF0ZT8uZmlsdGVyXG4gICAgZnVsbFRleHQ6IGlmIGZpbHRlciB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGNhcmRJbWc6IGZhbHNlXG4gICAgY2FyZEZpbHRlcklucHV0OiBpZiBmaWx0ZXIgdGhlbiBmaWx0ZXIuam9pbignICcpIGVsc2UgJydcbiAgICBzb3J0OiAnc3RhZ2UnXG4gICAgZmlsdGVyOiBudWxsXG4gICAgdmlldzogJ2ltZydcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIGlmIG5leHRQcm9wcy5zdGF0ZT9cbiAgICAgIEBzZXRTdGF0ZSBuZXh0UHJvcHMuc3RhdGVcbiAgICBlbHNlXG4gICAgICBAc2V0U3RhdGUgQGRlZmF1bHRTdGF0ZSgpXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIF8ubWVyZ2UgQGRlZmF1bHRTdGF0ZShAcHJvcHMpLCBAcHJvcHMuc3RhdGVcblxuICBnZXRGaWx0ZXJJZHM6ICgpIC0+XG4gICAgaWYgQHN0YXRlPy5maWx0ZXI/XG4gICAgICBmaWx0ZXJJZHMgPSBAc3RhdGUuZmlsdGVyLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVHJ1dGh5KVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVW5pcXVlKVxuICAgIGlmIG5vdCBmaWx0ZXJJZHM/IHRoZW4gZmlsdGVySWRzID0gW11cbiAgICByZXR1cm4gZmlsdGVySWRzXG5cbiAgIyBKdXN0IGZpbHRlcmluZyBieSBpZCByaWdodCBub3dcbiAgZ2V0RmlsdGVyZWRDYXJkczogLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIEBwcm9wcy5jYXJkcy5maWx0ZXIgKGVsKSA9PlxuICAgICAgICBpZiBlbC5pZCBpbiBAc3RhdGUuZmlsdGVyXG4gICAgICAgICAgcmV0dXJuIGVsXG4gICAgQHByb3BzLmNhcmRzXG4gICAgICAgIFxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG4gIGdyb3VwQ2FyZHM6IChjYXJkcyA9IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKSktPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gW2NhcmRzXVxuXG4gICAgc29ydCA9IEBzdGF0ZS5zb3J0XG4gICAgaWYgc29ydCA9PSAnc2lkZSdcbiAgICAgIHNvcnQgPSAnb3duZXInXG4gICAgaWYgQHN0YXRlLnNvcnRcbiAgICAgIHJldHVybiBfLmdyb3VwQnkoY2FyZHMsIHNvcnQpXG4gICAgICAgICBcblxuICBoYW5kbGVGdWxsVGV4dDogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGZ1bGxUZXh0OiBAcmVmcy5mdWxsVGV4dC5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRJbWc6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkSW1nOiBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBXR1IgYWRkcyBcIk9wcyAzOiAuLi5cIiwgc28gZG9uJ3QgcGljayB0aG9zZSB1cFxuICAgIGlkcyA9IHZhbHVlLm1hdGNoKC9cXGQrW146XXxcXGQrJC9nKT8ubWFwIChlbCktPiBwYXJzZUludCBlbCwgMTBcbiAgICBpZiB2YWx1ZSA9PSAnJyBvciBub3QgaWRzP1xuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZpbHRlcjogbnVsbFxuICAgIGVsc2VcbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmdWxsVGV4dDogdHJ1ZVxuICAgICAgICBmaWx0ZXI6IGlkcy5zb3J0KGxpYnMuc29ydE51bWVyaWNhbCkuZmlsdGVyKGxpYnMuZmlsdGVyVmFsaWRDYXJkSWRzKVxuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckJsdXI6IC0+XG4gICAgZmlsdGVySWRzID0gQGdldEZpbHRlcklkcygpXG5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogZmlsdGVySWRzLmpvaW4gJyAnXG5cbiAgICBpZiBmaWx0ZXJJZHM/IGFuZCBmaWx0ZXJJZHMubGVuZ3RoID4gMFxuICAgICAgbGlicy5xcy5zZXQgJ2ZpbHRlcicsIGZpbHRlcklkc1xuICAgIGVsc2VcbiAgICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNsZWFyOiAoKS0+XG4gICAgQHJlZnMuY2FyZEZpbHRlci5nZXRET01Ob2RlKCkudmFsdWUgPSAnJ1xuICAgIEBzZXRTdGF0ZVxuICAgICAgZmlsdGVyOm51bGxcbiAgICAgIGNhcmRGaWx0ZXJJbnB1dDogJydcblxuICAgIGxpYnMucXMuZGVsZXRlICdmaWx0ZXInXG5cbiAgc29ydEdyb3VwVGl0bGU6IChzb3J0ID0gQHN0YXRlLnNvcnQsIHZhbCktPlxuICAgIHZhbEludCA9IHBhcnNlSW50IHZhbCwgMTBcbiAgICBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAnb3BzJ1xuICAgICAgICBzID0gaWYgdmFsSW50ID4gMSB0aGVuICdzJyBlbHNlICcnXG4gICAgICAgIGlmIHZhbEludCA9PSAwIHRoZW4gJ1Njb3JpbmcnIGVsc2UgXCIje3ZhbH0gT3Aje3N9XCJcbiAgICAgIHdoZW4gJ3NpZGUnXG4gICAgICAgIGlmIHZhbCA9PSAndXMnXG4gICAgICAgICAgJ1VTQSdcbiAgICAgICAgZWxzZSBpZiB2YWwgPT0gJ25ldXRyYWwnXG4gICAgICAgICAgJ05ldXRyYWwnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB2YWwudG9VcHBlckNhc2UoKVxuICAgICAgd2hlbiAnc3RhZ2UnXG4gICAgICAgIHN3aXRjaCB2YWxJbnRcbiAgICAgICAgICB3aGVuIDEgdGhlbiAnRWFybHkgV2FyJ1xuICAgICAgICAgIHdoZW4gMiB0aGVuICdNaWQgV2FyJ1xuICAgICAgICAgIHdoZW4gMyB0aGVuICdMYXRlIHdhcidcblxuICBoYW5kbGVWaWV3Q2xpY2s6ICh2aWV3KS0+XG4gICAgQHNldFN0YXRlIHsgdmlldyB9XG4gICAgbGlicy5xcy5zZXQgJ3ZpZXcnLCB2aWV3XG5cbiAgcmVuZGVyOiAtPlxuICAgIHNvcnRMaW5rID0gKHNvcnQsIGRpc3BsYXkpID0+XG4gICAgICBjbGFzc05hbWUgPSBjeCBhY3RpdmU6IEBzdGF0ZS5zb3J0ID09IHNvcnRcbiAgICAgIHJlZiA9IFwiI3tzb3J0fVNvcnRcIlxuICAgICAgb25DbGljayA9ICgpLT5cbiAgICAgICAgbGlicy5xcy5zZXQgJ3NvcnQnLCBzb3J0XG4gICAgICBSLmEge29uQ2xpY2ssIHJlZiwgY2xhc3NOYW1lfSwgZGlzcGxheVxuXG4gICAgY2FyZHMgPSBAZ3JvdXBDYXJkcyBAZmlsdGVyQW5kU29ydENhcmRzKClcblxuICAgIGNhcmRMaXN0cyA9IF8ubWFwIGNhcmRzLCAoY2FyZHMsIHZhbCk9PlxuICAgICAgY2FyZExpc3RIZWFkaW5nID0gbnVsbFxuICAgICAgaWYgbm90IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAgIGNhcmRMaXN0SGVhZGluZyA9IFIuaDIgY2xhc3NOYW1lOidjYXJkTGlzdC1ncm91cEhlYWRpbmcnLFxuICAgICAgICAgIEBzb3J0R3JvdXBUaXRsZSBAc3RhdGUuc29ydCwgdmFsXG4gICAgICBSLmRpdiB7fSwgW1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmdcbiAgICAgICAgQ2FyZExpc3RcbiAgICAgICAgICBjYXJkSW1nOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgIGZ1bGxUZXh0OiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICBjYXJkczogY2FyZHNcbiAgICAgICAgICB2aWV3OiBAc3RhdGUudmlld1xuICAgICAgXVxuXG4gICAgY2FyZHNWaWV3Q2xhc3MgPSBjeFxuICAgICAgJ2NhcmRzVmlldyc6IHRydWVcbiAgICAgICdjYXJkc1ZpZXctLWZpbHRlcmVkJzogQHN0YXRlLmZpbHRlcj9cbiAgICAgICdjYXJkc1ZpZXctLWZ1bGxUZXh0JzogQHN0YXRlLmZ1bGxUZXh0XG5cbiAgICBSLmRpdiBjbGFzc05hbWU6IGNhcmRzVmlld0NsYXNzLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciByb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdsYWJlbCcsICdTb3J0IGJ5OidcbiAgICAgICAgICAgIHNvcnRMaW5rICdzdGFnZScsICdTdGFnZSdcbiAgICAgICAgICAgIHNvcnRMaW5rICdvcHMnLCAnT3BzJ1xuICAgICAgICAgICAgc29ydExpbmsgJ3NpZGUnLCAnU2lkZSdcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZENvbnRyb2xzJywgW1xuICAgICAgICAgICAgUi5sYWJlbCB7aHRtbEZvcjonJywgY2xhc3NOYW1lOicnfSwgJ1ZpZXc6ICdcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ2ltZydcbiAgICAgICAgICAgICAgdGl0bGU6ICdDYXJkIGltYWdlJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi10aC1sYXJnZSAje2lmIEBzdGF0ZS52aWV3ID09ICdpbWcnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAndGl0bGUnXG4gICAgICAgICAgICAgIHRpdGxlOiAnVGl0bGUgYW5kIG9wcydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGggI3tpZiBAc3RhdGUudmlldyA9PSAndGl0bGUnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAndGV4dCdcbiAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIHRleHQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLWFsaWduLWxlZnQgI3tpZiBAc3RhdGUudmlldyA9PSAndGV4dCcgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICAjUi5pbnB1dFxuICAgICAgICAgICAgICAjbmFtZTogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjaWQ6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI29uQ2hhbmdlOiBAaGFuZGxlRnVsbFRleHRcbiAgICAgICAgICAgICAgI2NoZWNrZWQ6IEBzdGF0ZS5mdWxsVGV4dFxuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonZnVsbFRleHQnLCBjbGFzc05hbWU6J2NhcmQtc2hvdy10ZXh0LWxhYmVsJ30sICdTaG93IGNhcmQgdGV4dCdcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdjYXJkSW1nJ1xuICAgICAgICAgICAgICAjaWQ6ICdjYXJkSW1nJ1xuICAgICAgICAgICAgICAjdHlwZTonY2hlY2tib3gnXG4gICAgICAgICAgICAgICNyZWY6J2NhcmRJbWcnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUNhcmRJbWdcbiAgICAgICAgICAgICAgI2NoZWNrZWQ6IEBzdGF0ZS5jYXJkSW1nXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmxhYmVsIHtodG1sRm9yOidjYXJkSW1nJywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIGltYWdlJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkcy1maWx0ZXItYnktaWQgY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5sYWJlbCB7aHRtbEZvcjonY2FyZEZpbHRlcid9LCBbXG4gICAgICAgICAgICBcIkZpbHRlciBjYXJkcyBieSBpZHMgXCJcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5pbnB1dFxuICAgICAgICAgICAgbmFtZTogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgIHJlZjogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICBvbkNoYW5nZTogQGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2VcbiAgICAgICAgICAgIG9uQmx1cjogQGhhbmRsZUNhcmRGaWx0ZXJCbHVyXG4gICAgICAgICAgICB2YWx1ZTogQHN0YXRlLmNhcmRGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXN0ZSBmcm9tIFdhcmdhbWVyb29tIG9yIGVudGVyIGlkcydcbiAgICAgICAgICBSLmEge2NsYXNzTmFtZTonY2FyZHMtZmlsdGVyLWJ5LWlkLWNsZWFyJywgb25DbGljazpAaGFuZGxlQ2FyZEZpbHRlckNsZWFyfSwgJ2NsZWFyJ1xuICAgICAgICBdXG4gICAgICBdXG4gICAgICBjYXJkTGlzdHNcbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ291bnRyaWVzVmlldyAnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjb3VudHJpZXNWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgJ0NvdW50cmllcydcbiAgICBdXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnSG9tZVZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdIb21lVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLXhzLTEyJywgW1xuICAgICAgICAgIFIuaDEgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInR3aSBvd25lci11c1wiLCBcIlR3aVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInN0cnVnIG93bmVyLXVzc3JcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQgYmx1cmInLCBbXG4gICAgICAgICAgICBcIlR3aVN0cnVnIGlzIGEgY29tcGFuaW9uIGFwcGxpY2F0aW9uIGZvciBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgXCIuIEl0IHdvdWxkIG5vdCBleGlzdCB3aXRob3V0IFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgICAgICBcIi5cIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rJywgaHJlZjogJyMvYm9hcmQnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBCb2FyZCdcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWJvYXJkLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0Z1bGx5IHBsYXlhYmxlIGJvYXJkIC0ganVzdCBhZGQgY2FyZHMnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdob21lLWxpbmsgaG9tZS1saW5rLWNhcmRzJywgaHJlZjogJyMvY2FyZHMnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlldyBDYXJkcydcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWNhcmRzLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0V4cGxvcmUgdGhlIGNhcmRzIG9mIFR3aWxpZ2h0IFN0cnVnZ2xlJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnV2hvb3BzVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmgyIHt9LCBcIkRFRkNPTiAxXCJcbiAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQnLCBbXG4gICAgICAgIFwiTG9va3MgbGlrZSBUd2lTdHJ1ZyB0cmlnZ2VyZWQgbnVjbGVhciB3YXIuIFdIT09QU0lFIERBSVNZIVwiXG4gICAgICAgIFIuYnIge31cbiAgICAgICAgUi5hIGhyZWY6XCIjL2NhcmRzXCIsIFwiSG93IGFib3V0IGxvb2tpbmcgb3ZlciB0aGUgY2FyZHM/XCJcbiAgICAgIF1cbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwibGlicyA9IHJlcXVpcmUgJy4vbGlicydcbnZlbnQgPSByZXF1aXJlICcuL3ZlbnQnXG5tYXBEYXRhID0gcmVxdWlyZSAnLi4vYXBwL2RhdGEvbWFwLWRhdGEuanNvbidcbm9uZUxldHRlckNvbnRpbmVudENvZGUgPSByZXF1aXJlICcuL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZSdcblxuc2V0Um91dGVPcmlnaW5hbCA9IFJvdXRlcjo6c2V0Um91dGVcblJvdXRlcjo6c2V0Um91dGUgPSAtPlxuICBAY3VycmVudFJvdXRlID0gQGdldFJvdXRlKClcbiAgc2V0Um91dGVPcmlnaW5hbC5hcHBseSB0aGlzLCBhcmd1bWVudHNcblxubW9kdWxlLmV4cG9ydHMgPVxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm91dGVyOiBuZXcgUm91dGVyXG5cbiAgIyBUYWtlcyBhIHZpZXcgbmFtZSBhbmQgYXNzb2NpYXRlZCBkYXRhXG4gIHNldFZpZXc6IChuYW1lLCBwYWdlVGl0bGUsIG1lbnVBY3RpdmU9JycsIGRhdGE9e30pIC0+XG4gICAgaWYgcGFnZVRpdGxlPyB0aGVuIGxpYnMuc2V0UGFnZVRpdGxlIHBhZ2VUaXRsZVxuICAgIEBzZXRTdGF0ZVxuICAgICAgdmlldzoge25hbWUsIGRhdGF9XG4gICAgICBtZW51QWN0aXZlOiBtZW51QWN0aXZlXG4gICAgICBzbGlkZUluOiBAc3RhdGUudmlldz8ubmFtZSAhPSBuYW1lXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgc3RhdGVSb3V0ZSA9IChuYW1lLCBwYWdlVGl0bGUsIG1lbnVBY3RpdmUsIGFyZ3MpLT5cbiAgICAgIHN0YXRlID0gbGlicy5xcy50b09iaiBhcmdzXG4gICAgICAjIENvbnZlcnQgZmlsdGVyIGlkcyBmcm9tIHN0ciAtPiBudW1iZXJcbiAgICAgIGlmIHN0YXRlPy5maWx0ZXI/XG4gICAgICAgIGlmIG5vdCBfLmlzQXJyYXkgc3RhdGUuZmlsdGVyXG4gICAgICAgICAgc3RhdGUuZmlsdGVyID0gW3N0YXRlLmZpbHRlcl1cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBAcHJvcHMucm91dGVyXG5cbiAgICB2ZW50Lm9uICdzZXRSb3V0ZScsIHJvdXRlci5zZXRSb3V0ZS5iaW5kIHJvdXRlclxuXG4gICAgcm91dGVyLmNvbmZpZ3VyZVxuICAgICAgbm90Zm91bmQ6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ3dob29wcycsICdXaG9vcHMnXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgcm91dGVyLm9uICcvJywgQHNldFZpZXcuYmluZCB0aGlzLCAnaG9tZScsICdIb21lJ1xuXG5cbiAgICByb3V0ZXIub24gJy9jYXJkLzppZCcsIChpZCk9PlxuICAgICAgaWQgPSBwYXJzZUludCBpZCwgMTBcbiAgICAgIG5leHRJZCA9IGlmIGlkID09IDExMCB0aGVuIDEgZWxzZSBpZCArIDFcbiAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgIGNhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogaWRcbiAgICAgIG5leHRDYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IG5leHRJZFxuICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgcGFnZVRpdGxlID0gXCIje2NhcmQudGl0bGV9ICgjI3tjYXJkLmlkfSlcIlxuICAgICAgQHNldFZpZXcgJ2NhcmQnLCBwYWdlVGl0bGUsICdjYXJkcycsIHtjYXJkLCBuZXh0Q2FyZCwgcHJldkNhcmR9XG5cblxuICAgIHJvdXRlci5vbiAnL2NvdW50cmllcycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuXG5cbiAgICByb3V0ZXIub24gJy9hYm91dCcsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2Fib3V0JywgJ0Fib3V0JywgJ2Fib3V0J1xuXG5cbiAgICByb3V0ZXIub24gL2NhcmRzXFw/PyguKikvLCBzdGF0ZVJvdXRlLmJpbmQgdGhpcywgJ2NhcmRzJywgJ0NhcmRzJywgJ2NhcmRzJ1xuXG5cbiAgICByb3V0ZXIub24gL2JvYXJkXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuICAgICAgI2lmIG5vdCBnYW1lSWQ/IG9yIGdhbWVJZCA9PSAnJ1xuICAgICAgICAjcmV0dXJuIHJvdXRlci5zZXRSb3V0ZSBcImJvYXJkLyN7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMil9XCJcblxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkJvYXJkICN7Z2FtZUlkfVwiLCBcIiMvYm9hcmQvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlQb3NpdGlvbnMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhXG5cbiAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgbm9kZS54ID0gY291bnRyeVBvc2l0aW9uc1tub2RlLm5hbWVdLnhcbiAgICAgICAgbm9kZS55ID0gY291bnRyeVBvc2l0aW9uc1tub2RlLm5hbWVdLnlcbiAgICAgICAgaWYgbm90IG5vZGUuc2hvcnRjdXQ/XG4gICAgICAgICAgbm9kZS5zaG9ydGN1dCA9IG5vZGUuc2hvcnRuYW1lLnNsaWNlKDAsMikudG9Mb3dlckNhc2UoKVxuICAgICAgICBub2RlLmZpeGVkID0gdHJ1ZVxuICAgICAgICBub2RlXG5cbiAgICAgIFxuICAgICAgcmVnaW9uSW5mb05vZGVzID0gcmVnaW9uSW5mb05vZGVzLm1hcCAobm9kZSktPlxuICAgICAgICBub2RlLnJlZ2lvbkluZm8gPSB0cnVlXG4gICAgICAgIG5vZGUuZml4ZWQgPSB0cnVlXG4gICAgICAgIG5vZGVcblxuICAgICAgbm9kZXMgPSBfLnVuaW9uKGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzKVxuICAgICAgbm9kZXMgPSBfLnppcE9iamVjdCBfLnBsdWNrKG5vZGVzLCAnaWQnKSwgbm9kZXNcblxuICAgICAgY291bnRyeVNob3J0Y3V0cyA9IF8ubWFwVmFsdWVzIF8uZ3JvdXBCeShub2RlcywgJ2NvbnRpbmVudCcpLCAoY05vZGVzLCBjb250aW5lbnQpLT5cbiAgICAgICAgXy5wbHVjayBjTm9kZXMsICdzaG9ydGN1dCdcbiAgICAgIGRlbGV0ZSBjb3VudHJ5U2hvcnRjdXRzLnVzYVxuICAgICAgZGVsZXRlIGNvdW50cnlTaG9ydGN1dHMudXNzclxuXG4gICAgICBzaG9ydEtleXMgPSBfLm1hcCBfLmtleXMoY291bnRyeVNob3J0Y3V0cyksIChjUyktPiBvbmVMZXR0ZXJDb250aW5lbnRDb2RlIGNTXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzID0gXy56aXBPYmplY3Qgc2hvcnRLZXlzLCBfLnZhbHVlcyhjb3VudHJ5U2hvcnRjdXRzKVxuXG4gICAgICBrZXkgPSBnYW1lSWRcblxuXG4gICAgICBib2FyZFByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIG1hcERhdGEsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXMsXG4gICAgICAgIGtleSwgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG5cbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vbGlicy9NaWNyb0V2ZW50Q2xhc3MnXG5jbGFzcyBWZW50IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFZlbnQoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuc3VwZXJTdGF0cyA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJTdGF0cydcbnJhbmdlZEdhbWVWYWwgPSByZXF1aXJlICcuLi9saWJzL3JhbmdlZEdhbWVWYWwnXG5zdGF0ZUVuY29kZXIgPSByZXF1aXJlICcuLi9saWJzL3N0YXRlRW5jb2RlcidcbnVwcGVyRmlyc3QgPSByZXF1aXJlICcuLi9saWJzL3VwcGVyRmlyc3QnXG5vbmVMZXR0ZXJDb250aW5lbnRDb2RlID0gcmVxdWlyZSAnLi4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuY29udGluZW50Q29kZUZyb21MZXR0ZXIgPSByZXF1aXJlICcuLi9saWJzL2NvbnRpbmVudENvZGVGcm9tTGV0dGVyJ1xuXG5Cb2FyZE5vZGUgPSByZXF1aXJlICcuL0JvYXJkTm9kZSdcbkJvYXJkTm9kZURpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlRGl2J1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cblxuc3VwZXJwb3dlclRvSW5kZXggPSAoc3RyKS0+IGlmIHN0ciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG5cbiMgUmV0dXJucyBhIHNpbXBsZSB7dXNhOiAncHJlc2VuY2UnLCB1c3NyOiAnZG9taW5hdGlvbid9XG5nZXRSZWdpb25TdGF0dXMgPSAoc3RhdHMpLT5cbiAgXy5tYXBWYWx1ZXMgc3RhdHMsIChzdGF0KS0+XG4gICAgcmV0dXJuICdjb250cm9sJyBpZiBzdGF0LmNvbnRyb2xcbiAgICByZXR1cm4gJ2RvbWluYXRpb24nIGlmIHN0YXQuZG9taW5hdGlvblxuICAgIHJldHVybiAncHJlc2VuY2UnIGlmIHN0YXQucHJlc2VuY2VcbiAgICByZXR1cm4gZmFsc2VcblxuXG5cblxuY29udGluZW50U2hvcnRjdXREYXRhID0gW1xuICB7IGNoYXI6ICdDJywgeDoxMjcsIHk6MjAwIH1cbiAgeyBjaGFyOiAnUycsIHg6MTI3LCB5OjUxMCB9XG4gIHsgY2hhcjogJ0YnLCB4OjUzMywgeTo1NTAgfVxuICB7IGNoYXI6ICdFJywgeDo0ODAsIHk6MjIwIH1cbiAgeyBjaGFyOiAnQScsIHg6ODQwLCB5OjE1MCB9XG4gIHsgY2hhcjogJ00nLCB4Ojg0MCwgeTozODAgfVxuXVxuICBcblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmQnXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAocHJvcHMgPSBAcHJvcHMpIC0+XG4gICAgc3RhdGVIaXN0b3J5ID0gcHJvcHMuc3RhdGVIaXN0b3J5XG4gICAgc3RhdGVIaXN0b3J5LmxvYWQoKVxuICAgIHN0YXRlID0gQGhhbmRsZUluY29taW5nU3RhdGUgcHJvcHMuaW5jb21pbmdTdGF0ZVxuICAgIGlmIG5vdCBzdGF0ZT9cbiAgICAgIHN0YXRlID0gc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKT8uc3RhdGVcbiAgICBpZiBub3Qgc3RhdGU/XG4gICAgICBnYW1lU3RhdGUgPVxuICAgICAgICBnYW1lOlxuICAgICAgICAgIHNjb3JlOiAwXG4gICAgICAgICAgdHVybjogMFxuICAgICAgICAgIHJvdW5kOiAwXG4gICAgICAgICAgZGVmY29uOiA1XG4gICAgICAgICAgbWlsb3BzOiBbMCwwXVxuICAgICAgICAgIHNwYWNlOiBbMCwwXVxuICAgICAgICBpcHM6IF8ubWFwIHByb3BzLmNvdW50cmllcywgKGMpLT4gW2MudXNhLCBjLnVzc3JdXG5cbiAgICAgIG1ldGEgPVxuICAgICAgICB0eXBlOiAndHVybidcbiAgICAgICAgaWQ6ICd0dXJuJ1xuICAgICAgICBuZXdHYW1lOiB0cnVlXG4gICAgICAgIG5ldzogMFxuICAgICAgICBvbGQ6MFxuXG4gICAgICBzdGF0ZUhpc3RvcnkuYWRkIGdhbWVTdGF0ZSwgbWV0YVxuICAgICAgc3RhdGUgPSBnYW1lU3RhdGVcblxuICAgIF8uYXNzaWduIHN0YXRlLFxuICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgaXBLZXlTZXF1ZW5jZTogJydcbiAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuICAgIHN0YXRlID0gQGdldEluaXRpYWxTdGF0ZSBuUFxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuICAgICNpZiBAcHJvcHMuc3RhdGVIaXN0b3J5LnN0YXRlcy5sZW5ndGggPCAxXG4gICAgICAjQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIHtzdGF0ZUhpc3RvcnksIGdhbWVJZH0gPSBAcHJvcHNcbiAgICAgIFxuICAgICMgV2hlbiBzdGF0ZSBjaGFuZ2VzLCB1cGRhdGUgdGhlIHVybFxuICAgIHN0YXRlSGlzdG9yeS5vbiAnY2hhbmdlJywgPT5cbiAgICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlPyBhbmQgbm90IHN0YXRlLm1ldGEubmV3R2FtZVxuICAgICAgICBzdGF0ZUVuYyA9IHN0YXRlSGlzdG9yeS5lbmNvZGVDdXJyZW50KClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiQm9hcmQgI3tnYW1lSWR9XCIsIFwiIy9ib2FyZC8je2dhbWVJZH0vI3tzdGF0ZUVuY31cIlxuXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdnb1RvJywgKHN0YXRlKT0+XG4gICAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcblxuICAgIEBrcEhUID0gXy50aHJvdHRsZSBAa2V5cHJlc3NIYW5kbGVyLCAxMDBcbiAgICBAa3VIVCA9IF8udGhyb3R0bGUgQGtleXVwSGFuZGxlciwgMTAwXG4gICAgQGtkSFQgPSBfLnRocm90dGxlIEBrZXlkb3duSGFuZGxlciwgMTAwXG5cbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleWRvd24nLCBAa2RIVFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5dXAnLCBAa3VIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5ZG93bicsIEBrZEhUXG5cbiAgaGFuZGxlSW5jb21pbmdTdGF0ZTogKHN0YXRlRW5jb2RlZCA9IEBwcm9wcy5pbmNvbWluZ1N0YXRlKSAtPlxuICAgIGluZGV4ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5maW5kU3RhdGVJbmRleCBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgaWYgaW5kZXg/XG4gICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaW5kZXhcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhdGVcbiAgICBlbHNlXG4gICAgICBjdXJyZW50ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlRW5jb2RlZD8gYW5kIHN0YXRlRW5jb2RlZCAhPSAnJyBhbmQgY3VycmVudD8ubWV0YS5zdGF0ZSAhPSBzdGF0ZUVuY29kZWRcbiAgICAgICAgc3RhdGUgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlRW5jb2RlZFxuICAgICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSxcbiAgICAgICAgICB0eXBlOiAnbG9hZCdcbiAgICAgICAgICBpZDogJ2xvYWQnXG4gICAgICAgICAgc3RhdGU6IHN0YXRlRW5jb2RlZFxuICAgICAgICByZXR1cm4gc3RhdGVcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBrZXlwcmVzc0hhbmRsZXI6IChldiktPlxuICAgIGtDID0gZXYua2V5Q29kZVxuICAgIGRpciA9IGlmIGtDID49IDk3IHRoZW4gJ2luYycgZWxzZSAnZGVjJ1xuXG4gICAgaWYgQHN0YXRlLmlwS2V5U2VxdWVuY2UubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlKGtDKVxuXG4gICAgaWYga0MgPT0gMTA1IG9yIGtDID09IDczXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uga0NcbiAgICAgIHJldHVyblxuXG4gICAgc3dpdGNoIGtDXG4gICAgICAjIChjL0MpIERpY2VcbiAgICAgIHdoZW4gOTksIDY3XG4gICAgICAgIEByZWZzLkJvYXJkU3RhdHVzLnJvbGxEaWNlKClcblxuICAgICAgIyBIaXN0b3J5XG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHovWikgVW5kb1xuICAgICAgd2hlbiAxMjIsIDkwXG4gICAgICAgIEB1bmRvSGlzdCgpXG4gICAgICAjICh5L1kpIFJlZG9cbiAgICAgIHdoZW4gMTIxLCA4OVxuICAgICAgICBAcmVkb0hpc3QoKVxuICAgICAgIyAoaC9IKSBIaXN0b3J5IHNob3cvaGlkZVxuICAgICAgd2hlbiAxMDQsIDcyXG4gICAgICAgIEB0b2dnbGVIaXN0KClcblxuICAgICAgIyBHYW1lIHByb3BlcnRpZXNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHQvVCkgVHVybiBpbmMvZGVjXG4gICAgICB3aGVuIDExNiwgODRcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICd0dXJuJywgZGlyXG4gICAgICAjIChyL1IpIFJvdW5kIGluYy9kZWNcbiAgICAgIHdoZW4gMTE0LCA4MlxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3JvdW5kJywgZGlyXG4gICAgICAjIChTL3MpIFNjb3JlIGluYy9kZWNcbiAgICAgIHdoZW4gMTE1LCA4M1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3Njb3JlJywgZGlyXG4gICAgICAjIChEL2QpIERlZmNvbiBpbmMvZGVjXG4gICAgICB3aGVuIDEwMCwgNjhcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdkZWZjb24nLCBkaXJcbiAgICAgICMgKE0vbSkgVVNBIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDEwOSwgNzdcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c2EnXG4gICAgICAjIChPL28pIFVTU1IgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTExLCA3OVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3Vzc3InXG4gICAgICAjIChQL3ApIFVTQSBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDExMiwgODBcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3VzYSdcbiAgICAgICMgKEEvYSkgVVNTUiBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDk3LCA2NVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNzcidcblxuICAgIHJldHVybiB0cnVlXG5cblxuICAjIEVzYyBkb2Vzbid0IHRyaWdnZXIgb24ga2V5cHJlc3MsIHNvIGl0IGhhcyB0byBiZSBrZXl1cFxuICBrZXl1cEhhbmRsZXI6IChldiktPlxuICAgIGlmIDM3IDw9IGV2LmtleUNvZGUgPD0gNDBcbiAgICAgIHJldHVybiBAaXBLZXlTZXF1ZW5jZSBldi5rZXlDb2RlXG4gICAgaWYgZXYua2V5Q29kZSA9PSAyN1xuICAgICAgQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICByZXR1cm5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAga2V5ZG93bkhhbmRsZXI6IChldiktPlxuICAgICMgUHJldmVudCBiYWNrc3BhY2UgZnJvbSBuYXZpZ2F0aW5nIHRoZSBwYWdlXG4gICAgIyBPcmlkaW5hcmlseSBJIGRvbid0IGxpa2UgdGFraW5nIG92ZXIgYnJvd3NlciBzaG9ydGN1dHMsIGJ1dCBpbiB0aGlzIGNhc2VcbiAgICAjIHdlIHdhbnQgdG8gcHJldmVudCB1c2VycyBmcm9tIG92ZXItYmFja3NwYWNpbmdcbiAgICBpZiBldi5rZXlDb2RlID09IDhcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIEBpcEtleVNlcXVlbmNlKGV2LmtleUNvZGUpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBjbGVhcklwS2V5U2VxdWVuY2U6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBTZXRDb3VudHJ5OiBudWxsXG5cbiAgaXBLZXlTZXF1ZW5jZTogKGNvZGUpLT5cbiAgICBpcEtTID0gQHN0YXRlLmlwS2V5U2VxdWVuY2VcbiAgICBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxuXG4gICAgIyBCYWNrc3BhY2Ugc2hvdWxkIGRlbGV0ZSB0aGUgbGFzdCBjaGFyIGZyb20gdGhlIGlwS1MsIGFuZCBzZXQgdGhlIFwiY3VycmVudFwiXG4gICAgIyBjaGFyIHRvIHRoZSBsYXN0IGNoYXJcbiAgICBpZiBjb2RlID09IDhcbiAgICAgICMgQmFjayB1cCB0d28gc3BhY2VzIHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gICAgICBkZWx0YSA9IC0xXG4gICAgICBpZiBpcEtTLmxlbmd0aCA9PSA0XG4gICAgICAgIGRlbHRhID0gLTJcbiAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsZGVsdGEpXG4gICAgICBjaGFyID0gaXBLUy5zbGljZSgtMSlcbiAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsLTEpXG5cbiAgICBjaGFyTG93ZXIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblxuICAgIGlmIG5vdCBpcEtTIGFuZCBub3QgY2hhclxuICAgICAgQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICByZXR1cm5cblxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZSBmYWxzZVxuICAgIGlmIGlwS1MubGVuZ3RoID09IDAgYW5kIGNoYXJMb3dlciA9PSAnaSdcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiAnaSdcbiAgICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6ICcnXG4gICAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuICAgICAgcmV0dXJuXG5cbiAgICAjIENvbnRpbmVudCBzZWxlY3Rpb25cbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAxIGFuZCBjaGFyTG93ZXIgaW4gWydjJywncycsJ2UnLCdmJywnYScsJ20nXVxuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY2hhckxvd2VyXVxuICAgICAgICBpcFNob3dDb250aW5lbnQ6IGNoYXJMb3dlclxuICAgICAgICBpcFNldENvdW50cnk6IG51bGxcbiAgICAgIHJldHVyblxuICAgIFxuICAgIGNvbnRpbmVudCA9IGlwS1MuY2hhckF0IDFcblxuICAgICMgQ291bnRyeSBzZWxlY3Rpb25cbiAgICAjIGlwS1Mgc2hvdWxkIGJlICdpW2NvbnRpbmVudF0nIG9yICdpW2NvbnRpbmVudF1bY291bnRyeUNoYXJdJ1xuICAgIGlmIDIgPD0gaXBLUy5sZW5ndGggPD0gM1xuICAgICAgaXBLUyArPSBjaGFyTG93ZXJcbiAgICAgIGNvdW50cnkgPSBpcEtTLnNsaWNlKDIpXG5cbiAgICAgIGNvdW50cmllcyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5LmNoYXJBdCgwKVxuXG4gICAgICBpZiBjb3VudHJ5Lmxlbmd0aCA9PSAyXG4gICAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIgKHNjID0gJycpLT5cbiAgICAgICAgICBzYy5jaGFyQXQoMSkgPT0gY291bnRyeS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyaWVzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cmllc1xuICAgICAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuICAgICAgcmV0dXJuXG4gICAgXG4gICAgIyBXZSBoYXZlIGEgY291bnRyeSBcInNlbGVjdGVkXCIgZm9yIGlwIHBsYWNlbWVudFxuICAgIGNvdW50cnkgPSBpcEtTLnNsaWNlKDIpXG4gICAgaWYgaXBLUy5sZW5ndGggPT0gNCBhbmQgY291bnRyeS5sZW5ndGggPT0gMlxuICAgICAgbm9kZSA9IF8uZmluZCBAcHJvcHMubm9kZXMsXG4gICAgICAgIHNob3J0Y3V0OiBjb3VudHJ5XG4gICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICBpZiBub3Qgbm9kZT9cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHN3aXRjaCBjaGFyXG4gICAgICAgIHdoZW4gJ2EnXG4gICAgICAgICAgc2lkZSA9ICd1c2EnXG4gICAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgICB3aGVuICdBJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgd2hlbiAncidcbiAgICAgICAgICBzaWRlID0gJ3Vzc3InXG4gICAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgICB3aGVuICdSJ1xuICAgICAgICAgIHNpZGUgPSAndXNzcidcbiAgICAgICAgICBkaXIgPSAnZG4nXG5cbiAgICAgIGlmIHNpZGU/IGFuZCBkaXI/XG4gICAgICAgIEBoYW5kbGVJUENsaWNrIG5vZGUuaWQsIHNpZGUsIGRpclxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgaGFuZGxlVmFsQ2xpY2s6IChpZCwgZGlyLCBzaWRlKS0+XG4gICAgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ2luYycgdGhlbiAxIGVsc2UgLTFcbiAgICBpZiBpZCBpbiBbJ21pbG9wcycsICdzcGFjZSddXG4gICAgICBpbmRleCA9IGlmIHNpZGUgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1baW5kZXhdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gKyBkZWx0YSlcbiAgICAgIHN0YXRlLmdhbWVbaWRdW2luZGV4XSA9IG5ld1ZhbFxuICAgIGVsc2VcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF0gPSBuZXdWYWxcblxuICAgIG1ldGEgPVxuICAgICAgdHlwZTogJ3ZhbCdcbiAgICAgIHNpZGU6IGlmIHNpZGU/IHRoZW4gc2lkZSBlbHNlICcnXG4gICAgICBpZDogaWRcbiAgICAgIG9sZDogb2xkVmFsXG4gICAgICBuZXc6IG5ld1ZhbFxuXG4gICAgaWYgaWQgPT0gJ3R1cm4nIG9yIGlkID09ICdyb3VuZCdcbiAgICAgIG1ldGEudHlwZSA9IGlkXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLCBtZXRhXG5cblxuICBoYW5kbGVJUENsaWNrOiAobm9kZUlkLCBzaWRlLCBkaXIpLT5cbiAgICBub2RlID0gXy5maW5kIEBwcm9wcy5ub2Rlcywge2lkOiBub2RlSWR9XG4gICAgIyBEb24ndCBsZXQgdGhlIG5vbi1jb3VudHJ5IG5vZGVzIGdldCB1cGRhdGVkIFxuICAgIGlmIG5vZGUucG9pbnRzIG9yIG5vZGUuc3VwZXJwb3dlciB0aGVuIHJldHVyblxuXG4gICAgc3RhdGUgPSBAc3RhdGVcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ3VwJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlwICs9IGRlbHRhXG4gICAgaWYgaXAgPCAwIHRoZW4gcmV0dXJuXG5cbiAgICBzaWduID0gaWYgZGlyID09ICd1cCcgdGhlbiAnKycgZWxzZSAnLSdcbiAgICBzdGF0ZS5pcHNbbm9kZUlkXVtpbmRleF0gPSBpcFxuXG4gICAgQHNldFN0YXRlSGlzdG9yeSBzdGF0ZSxcbiAgICAgIHR5cGU6ICdpcCdcbiAgICAgIHNpZGU6IHNpZGVcbiAgICAgIGNvdW50cnk6IG5vZGVcbiAgICAgIGlwczogc3RhdGUuaXBzW25vZGVJZF1cbiAgICAgIGRlbHRhOmRlbHRhXG5cbiAgaGFuZGxlSGlzdG9yeUNsaWNrOiAodHlwZSktPlxuICAgIEBbXCIje3R5cGV9SGlzdFwiXSgpXG5cbiAgdW5kb0hpc3Q6IC0+XG4gICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LnVuZG8oKVxuICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuICByZWRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkucmVkbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHRvZ2dsZUhpc3Q6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS50b2dnbGVWaXNpYmxlKClcblxuXG4gIHJlbmRlcjogLT5cbiAgICBub2RlUHJvcHMgPSBAcHJvcHMubm9kZVxuXG4gICAgc3VwZXJwb3dlclN0YXRzID0gc3VwZXJTdGF0cyBAc3RhdGUuaXBzLCBAcHJvcHMuY291bnRyaWVzLCBAcHJvcHMucmVnaW9uSW5mb05vZGVzXG5cbiAgICBpcEtleVNlcXVlbmNlID0gQHN0YXRlPy5pcEtleVNlcXVlbmNlXG4gICAgaXBTaG93Q291bnRyaWVzID0gQHN0YXRlPy5pcFNob3dDb3VudHJpZXMgfHwgW11cbiAgICBpcFNob3dDb250aW5lbnQgPSBAc3RhdGU/LmlwU2hvd0NvbnRpbmVudFxuXG4gICAgbGlua3MgPSBAcHJvcHMubGlua3MubWFwIChsaW5rRGF0YSk9PlxuICAgICAgc291cmNlID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS5zb3VyY2VcbiAgICAgIHRhcmdldCA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCBpZDogbGlua0RhdGEudGFyZ2V0XG4gICAgICBub2RlcyA9IHtzb3VyY2UsIHRhcmdldH1cblxuICAgICAgalVTQSA9IChsaW5rLCB0YXJnKT0+XG4gICAgICAgIGphcGFuVVNBQnVtcCA9IDE4XG4gICAgICAgIGlmIF8uY29udGFpbnMobGluay5ub2RlcywgJ1VTQScpIGFuZCBfLmNvbnRhaW5zKGxpbmsubm9kZXMsICdKYXBhbicpXG4gICAgICAgICAgcmV0dXJuIG5vZGVzW3RhcmddLnkgLSBqYXBhblVTQUJ1bXBcbiAgICAgICAgbm9kZXNbdGFyZ10ueVxuXG4gICAgICBsaW5rUHJvcHMgPVxuICAgICAgICBrZXk6IFwiQm9hcmRMaW5rLSN7bGlua0RhdGEuc291cmNlfS0je2xpbmtEYXRhLnRhcmdldH1cIlxuICAgICAgICB4MTogc291cmNlLnhcbiAgICAgICAgeTE6IGpVU0EobGlua0RhdGEsICdzb3VyY2UnKVxuICAgICAgICB4MjogdGFyZ2V0LnhcbiAgICAgICAgeTI6IGpVU0EobGlua0RhdGEsICd0YXJnZXQnKVxuICAgICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICAgXCJsaW5rXCI6IHRydWVcbiAgICAgICAgICBcImxpbmstY3Jvc3NcIjogbGlua0RhdGEuY3Jvc3NDb250aW5lbnRcbiAgICAgICAgICBcImxpbmstdXNhXCI6IF8uY29udGFpbnMgbGlua0RhdGEubm9kZXMsICdVU0EnXG4gICAgICAgICAgXCJsaW5rLXVzc3JcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTU1InXG5cbiAgICAgIEJvYXJkTGluayBsaW5rUHJvcHNcblxuICAgIG5vZGVzID0gXy5tYXAgQHByb3BzLm5vZGVzLCAoY291bnRyeURhdGEpPT5cbiAgICAgIG9uVG9wID0gbm90IGlwS2V5U2VxdWVuY2Ugb3JcbiAgICAgICAgY291bnRyeURhdGEuc2hvcnRjdXQgaW4gaXBTaG93Q291bnRyaWVzIGFuZFxuICAgICAgICBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvdW50cnlEYXRhLmNvbnRpbmVudCkgPT0gaXBTaG93Q29udGluZW50IGFuZFxuICAgICAgICBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0XG4gICAgICBwcm9wcyA9XG4gICAgICAgIG5vZGU6IG5vZGVQcm9wc1xuICAgICAgICBrZXk6IFwiQm9hcmROb2RlLSN7Y291bnRyeURhdGEuaWR9XCJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgje2NvdW50cnlEYXRhLnh9LCAje2NvdW50cnlEYXRhLnl9KVwiXG4gICAgICAgIHg6IGNvdW50cnlEYXRhLnhcbiAgICAgICAgeTogY291bnRyeURhdGEueVxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHRcbiAgICAgICAgZ3V0dGVyOiBAcHJvcHMubm9kZS5ndXR0ZXJcbiAgICAgICAgdGl0bGVIZWlnaHQ6IEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHRpdGxlRm9udFNpemU6IEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcbiAgICAgICAgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2tcbiAgICAgICAgIyBEZXRlcm1pbmUgaWYgdGhlIGNvdW50cnkgc2hvdWxkIGJlIG9uIHRvcCBvZiB0aGUgaXAgc2hvcnRjdXQgbGF5ZXJcbiAgICAgICAgb25Ub3A6IG9uVG9wXG4gICAgICAgICAgXG5cbiAgICAgIF8uYXNzaWduIHByb3BzLCBjb3VudHJ5RGF0YVxuXG4gICAgICBpZihwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICBwcm9wcy5zdGF0cyA9XG4gICAgICAgICAgY291bnRyaWVzOiBfLnBpY2sgc3VwZXJwb3dlclN0YXRzLmNvdW50cmllc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ2J0bCcsICdub24nLCAndG90YWwnXVxuICAgICAgICAgIHJlZ2lvbnM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMucmVnaW9uc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ3ByZXNlbmNlJywgJ2RvbWluYXRpb24nLCAnY29udHJvbCddXG5cbiAgICAgIGlmKHByb3BzLnBvaW50cylcbiAgICAgICAgcHJvcHMuc3RhdHMgPSBnZXRSZWdpb25TdGF0dXNcbiAgICAgICAgICB1c2E6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzYVtwcm9wcy5pZF1cbiAgICAgICAgICB1c3NyOiBzdXBlcnBvd2VyU3RhdHMucmVnaW9ucy51c3NyW3Byb3BzLmlkXVxuICAgICAgXG4gICAgICBjb3VudHJ5SWQgPSBwYXJzZUludCBjb3VudHJ5RGF0YS5pZCwgMTBcbiAgICAgIGlmIGNvdW50cnlJZCBvZiBAc3RhdGUuaXBzXG4gICAgICAgIHByb3BzLnVzYSA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVswXVxuICAgICAgICBwcm9wcy51c3NyID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzFdXG5cbiAgICAgIEJvYXJkTm9kZURpdiBwcm9wc1xuXG4gICAgYm9hcmRTdGF0dXNBdHRycyA9XG4gICAgICByZWY6J0JvYXJkU3RhdHVzJ1xuICAgICAgaGFuZGxlVmFsQ2xpY2s6IEBoYW5kbGVWYWxDbGlja1xuICAgICAgaGFuZGxlSGlzdG9yeUNsaWNrOiBAaGFuZGxlSGlzdG9yeUNsaWNrXG5cblxuXG4gICAgY29udGluZW50U2hvcnRjdXRzID0gY29udGluZW50U2hvcnRjdXREYXRhLm1hcCAobyk9PlxuICAgICAgaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPT0gMVxuICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgYXR0cnMgPVxuICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnQgQm9hcmQtc2hvcnRjdXQgI3tzaG93fVwiXG4gICAgICAgIHN0eWxlOlxuICAgICAgICAgIGxlZnQ6IG8ueFxuICAgICAgICAgIHRvcDogby55XG4gICAgICBSLmRpdiBhdHRycywgby5jaGFyXG5cbiAgICBub2Rlc0J5Q29udGluZW50ID0gXy5ncm91cEJ5IEBwcm9wcy5ub2RlcywgJ2NvbnRpbmVudCdcblxuICAgIGNvdW50cnlTaG9ydGN1dHMgPSBfLm1hcCBub2Rlc0J5Q29udGluZW50LCAobm9kZXMsIGNvbnRpbmVudCk9PlxuICAgICAgY29udEtleSA9IG9uZUxldHRlckNvbnRpbmVudENvZGUgY29udGluZW50XG4gICAgICBub2RlQ29tcG9uZW50cyA9IF8ubWFwIG5vZGVzLCAobm9kZSk9PlxuICAgICAgICBpZiBub2RlLnN1cGVycG93ZXI/IG9yIG5vZGUucG9pbnRzP1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIHNob3cgPSAnJ1xuICAgICAgICBpcEtTTCA9IGlwS2V5U2VxdWVuY2UubGVuZ3RoXG4gICAgICAgIGlmIGlwS1NMIDwgNCBhbmQgXy5jb250YWlucyhAc3RhdGUuaXBTaG93Q291bnRyaWVzLCBub2RlLnNob3J0Y3V0KSBhbmQgQHN0YXRlLmlwU2hvd0NvbnRpbmVudCA9PSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvbnRpbmVudClcbiAgICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgICBhdHRycyA9XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0IEJvYXJkLXNob3J0Y3V0Q291bnRyeSAje3Nob3d9XCJcbiAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgIGxlZnQ6IG5vZGUueFxuICAgICAgICAgICAgdG9wOiBub2RlLnlcbiAgICAgICAgUi5kaXYgYXR0cnMsIHVwcGVyRmlyc3Qobm9kZS5zaG9ydGN1dClcblxuICAgICAgbm9kZUNvbXBvbmVudHNcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmQnLCBbXG4gICAgICBSLnN2ZyB3aWR0aDpAcHJvcHMud2lkdGgsIGhlaWdodDpAcHJvcHMuaGVpZ2h0LCByZWY6ICdzdmcnLCBbXG4gICAgICAgIGxpbmtzXG4gICAgICBdXG4gICAgICBub2Rlc1xuICAgICAgUi5kaXYgb25DbGljazogQGNsZWFySXBLZXlTZXF1ZW5jZSAsY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0SGVhZGVyICN7aWYgaXBLZXlTZXF1ZW5jZSB0aGVuICdpbicgZWxzZSAnJ31cIiwgW1xuICAgICAgICBSLmgzIHt9LCBcIlBsYWNpbmcgSW5mbHVlbmNlXCJcbiAgICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgICAgXCJQcmVzcyBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsIFwiRVNDXCJcbiAgICAgICAgICBcIiBvciBjbGljayB0aGlzIGJveCB0byBleGl0XCJcbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0TWFzayAje2lmIGlwS2V5U2VxdWVuY2UgdGhlbiAnaW4nIGVsc2UgJyd9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dENvbnRpbmVudHMgI3tpZiBpcEtleVNlcXVlbmNlIGFuZCBpcEtleVNlcXVlbmNlLmxlbmd0aCA8PSAxIHRoZW4gJ2luJyBlbHNlICcnfVwiLFxuICAgICAgICBjb250aW5lbnRTaG9ydGN1dHNcbiAgICAgIGNvdW50cnlTaG9ydGN1dHNcbiAgICAgIEJvYXJkU3RhdHVzIF8uYXNzaWduIGJvYXJkU3RhdHVzQXR0cnMsIEBzdGF0ZS5nYW1lXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTGluaydcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAtPlxuICAgIGZhbHNlXG4gIHJlbmRlcjogLT5cbiAgICBSLmxpbmUgQHByb3BzXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkTm9kZUlQID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVJUCdcbiBcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGUnXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAobmV4dFByb3BzKS0+XG4gICAgIyBBc3N1bWUgY291bnRyeVxuICAgIHNob3VsZEl0ID0gbmV4dFByb3BzLnVzYSAhPSBAcHJvcHMudXNhIG9yIG5leHRQcm9wcy51c3NyICE9IEBwcm9wcy51c3NyXG4gICAgIyBDb250aW5lbnQgbGFiZWxzXG4gICAgaWYgQHByb3BzLnBvaW50cz9cbiAgICAgIHNob3VsZEl0ID0gbmV4dFByb3BzLnN0YXRzLnVzYSAhPSBAcHJvcHMuc3RhdHMudXNhIG9yXG4gICAgICAgIG5leHRQcm9wcy5zdGF0cy51c3NyICE9IEBwcm9wcy5zdGF0cy51c3NyXG4gICAgIyBTdXBlcnBvd2VyIGxhYmVsc1xuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBuUFMgPSBuZXh0UHJvcHMuc3RhdHNcbiAgICAgIHRQUyA9IEBwcm9wcy5zdGF0c1xuICAgICAgc2hvdWxkSXQgPSBuUFMuY291bnRyaWVzLmJ0bCAhPSB0UFMuY291bnRyaWVzLmJ0bCBvclxuICAgICAgICBuUFMucmVnaW9ucy5wcmVzZW5jZSAhPSB0UFMucmVnaW9ucy5wcmVzZW5jZSBvclxuICAgICAgICBuUFMucmVnaW9ucy5kb21pbmF0aW9uICE9IHRQUy5yZWdpb25zLmRvbWluYXRpb24gb3JcbiAgICAgICAgblBTLnJlZ2lvbnMuY29udHJvbCAhPSB0UFMucmVnaW9ucy5jb250cm9sXG5cbiAgICBzaG91bGRJdFxuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIHJlbmRlcjogLT5cbiAgICAjY29uc29sZS5sb2cgQHByb3BzLnNob3J0Y3V0LCBAcHJvcHMuY29udGluZW50XG4gICAgY29udHJvbFVTQSA9IChAcHJvcHMudXNhIC0gQHByb3BzLnVzc3IpID49IEBwcm9wcy5zdGFiXG4gICAgY29udHJvbFVTU1IgPSAoQHByb3BzLnVzc3IgLSBAcHJvcHMudXNhKSA+PSBAcHJvcHMuc3RhYlxuXG4gICAgZ0F0dHJzID1cbiAgICAgIHRyYW5zZm9ybTogQHByb3BzLnRyYW5zZm9ybVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtI3tAcHJvcHMuZ3JvdXB9IFwiICsgY3hcbiAgICAgICAgJ25vZGUnOiB0cnVlXG4gICAgICAgICdub2RlLWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZS1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZS11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGUtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG5cblxuICAgIHN0YWJUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtc3RhYlwiXG4gICAgICB4OiAoQHByb3BzLm5vZGUud2lkdGgvMikgLSAxMFxuICAgICAgeTogLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplICsgMVxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBzdGFiVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiB7fSwgXCJCYXR0bGU6IFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidudW1CdGwnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgXVxuICAgICAgc3RhYlRleHRBdHRycy54ID0gMFxuICAgICAgc3RhYlRleHRBdHRycy55ICs9IDFcblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGUtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOnBDTiwgQHByb3BzLnBvaW50c1swXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGUtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGUtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIHNob3J0Q3V0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnbm9kZS1zaG9ydGN1dCdcbiAgICAgIFxuXG4gICAgUi5nIGdBdHRycywgW1xuICAgICAgIyBOb2RlIGJnXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5oZWlnaHRcbiAgICAgICAgdGl0bGU6IE1hdGgucmFuZG9tKClcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgcG9seVxuXG4gICAgICBSLnJlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS10aXRsZS1iZydcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy50aXRsZUhlaWdodFxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBSLmxpbmVcbiAgICAgICAgY2xhc3NOYW1lOiAnbm9kZS1saW5lJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIHgxOiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTE6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICB4MjogQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTI6IC1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuXG4gICAgICBSLnRleHQgdGl0bGVUZXh0QXR0cnMsIEBwcm9wcy5zaG9ydG5hbWVcbiAgICAgIFIudGV4dCBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgICAgUi50ZXh0IHJlZ2lvblRleHRBdHRycywgcmVnaW9uVGV4dFxuXG4gICAgICAjUi50ZXh0IHNob3J0Q3V0QXR0cnMsIEBwcm9wcy5zaG9ydGN1dFxuXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBCb2FyZE5vZGVJUCBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbkJvYXJkTm9kZUlQRGl2ID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVJUERpdidcbiBcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVEaXYnXG5cbiAgI3Nob3VsZENvbXBvbmVudFVwZGF0ZTogKG5leHRQcm9wcyktPlxuICAgICMjIEFzc3VtZSBjb3VudHJ5XG4gICAgI3Nob3VsZEl0ID0gbmV4dFByb3BzLnVzYSAhPSBAcHJvcHMudXNhIG9yIG5leHRQcm9wcy51c3NyICE9IEBwcm9wcy51c3NyXG4gICAgIyMgQ29udGluZW50IGxhYmVsc1xuICAgICNpZiBAcHJvcHMucG9pbnRzP1xuICAgICAgI3Nob3VsZEl0ID0gbmV4dFByb3BzLnN0YXRzLnVzYSAhPSBAcHJvcHMuc3RhdHMudXNhIG9yXG4gICAgICAgICNuZXh0UHJvcHMuc3RhdHMudXNzciAhPSBAcHJvcHMuc3RhdHMudXNzclxuICAgICMjIFN1cGVycG93ZXIgbGFiZWxzXG4gICAgI2lmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAjblBTID0gbmV4dFByb3BzLnN0YXRzXG4gICAgICAjdFBTID0gQHByb3BzLnN0YXRzXG4gICAgICAjc2hvdWxkSXQgPSBuUFMuY291bnRyaWVzLmJ0bCAhPSB0UFMuY291bnRyaWVzLmJ0bCBvclxuICAgICAgICAjblBTLnJlZ2lvbnMucHJlc2VuY2UgIT0gdFBTLnJlZ2lvbnMucHJlc2VuY2Ugb3JcbiAgICAgICAgI25QUy5yZWdpb25zLmRvbWluYXRpb24gIT0gdFBTLnJlZ2lvbnMuZG9taW5hdGlvbiBvclxuICAgICAgICAjblBTLnJlZ2lvbnMuY29udHJvbCAhPSB0UFMucmVnaW9ucy5jb250cm9sXG4jXG4gICAgI3Nob3VsZEl0XG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuXG4gICAgZ0F0dHJzID1cbiAgICAgIHN0eWxlOlxuICAgICAgICBsZWZ0OiBAcHJvcHMueCAtIEBwcm9wcy53aWR0aC8yICsgJ3B4J1xuICAgICAgICB0b3A6IEBwcm9wcy55IC0gQHByb3BzLmhlaWdodC8yICsgJ3B4J1xuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtI3tAcHJvcHMuZ3JvdXB9IFwiICsgY3hcbiAgICAgICAgJ25vZGVkaXYnOiB0cnVlXG4gICAgICAgICdub2RlZGl2LWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZWRpdi1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGVkaXYtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZWRpdi11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGVkaXYtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGVkaXYtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZWRpdi1vbi10b3AnOiBAcHJvcHMub25Ub3BcblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZWRpdi10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGVkaXYtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGVkaXYtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIHNob3J0Q3V0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnbm9kZWRpdi1zaG9ydGN1dCdcbiAgICAgIFxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuXG4gICAgaXNDb3VudHJ5ID0gQHByb3BzLnN1cGVycG93ZXIgb3IgQHByb3BzLnJlZ2lvbkluZm9cbiAgICBpZiBub3QgaXNDb3VudHJ5XG4gICAgICBpcFVTQSA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNhJywgaXA6IEBwcm9wcy51c2EsIGN0cmw6IGNvbnRyb2xVU0EsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzYSdcbiAgICAgIGlwVVNTUiA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNzcicsIGlwOiBAcHJvcHMudXNzciwgY3RybDogY29udHJvbFVTU1IsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzc3InXG4gICAgICBzdGFiID0gUi5zcGFuIHN0YWJUZXh0QXR0cnMsIHN0YWJUZXh0XG4gICAgZWxzZVxuICAgICAgcmVnaW9uSW5mbyA9IFIuc3BhbiByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBidGwgPVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbm9kZWRpdi1idGwtbnVtJywgW1xuICAgICAgICAgIFwiQmF0dGxlOiBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzdHJvbmcnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgICBdXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIGJ0bFxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnbm9kZWRpdi10aXRsZScsIFtcbiAgICAgICAgUi5zcGFuIHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICAgIHN0YWJcbiAgICAgIF1cbiAgICAgIHJlZ2lvbkluZm9cbiAgICAgICNSLnRleHQgc2hvcnRDdXRBdHRycywgQHByb3BzLnNob3J0Y3V0XG4gICAgICBpcFVTQVxuICAgICAgaXBVU1NSXG4gICAgICAgIFxuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUCdcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLmlwICE9IEBwcm9wcy5pcFxuXG4gIHJlbmRlcjogLT5cbiAgICBwb3NpdGlvbiA9IGlmIEBwcm9wcy5zaWRlID09ICd1c2EnIHRoZW4gMSBlbHNlIDBcblxuICAgIGhpZGVJUCA9IGlmIEBwcm9wcy5pcCA9PSAwIHRoZW4gJ2hpZGUnIGVsc2UgJydcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKCN7LUBwcm9wcy5ub2RlLndpZHRoLzIgKiBwb3NpdGlvbn0sICN7LUBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0LzIgLSAxfSlcIlxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLSN7QHByb3BzLnNpZGV9XCJcblxuICAgIHRleHRBdHRycyA9XG4gICAgICB4OiBAcHJvcHMubm9kZS53aWR0aC80XG4gICAgICB5OiBAcHJvcHMubm9kZS5oZWlnaHQvMiAtIDFcbiAgICAgIGNsYXNzTmFtZTogaGlkZUlQXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWJnLSN7QHByb3BzLnNpZGV9ICN7aGlkZUlQfVwiXG4gICAgICBSLnRleHQgdGV4dEF0dHJzLCBAcHJvcHMuaXBcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICd1cCdcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgeTogaXBDbGlja0hlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1jbGlja1wiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ2RuJ1xuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZUlQRGl2J1xuXG4gIGhhbmRsZUlQQ2xpY2s6IChkaXIsIGV2KS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLnNpZGUsIGRpclxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAuaXAgIT0gQHByb3BzLmlwXG5cbiAgcmVuZGVyOiAtPlxuICAgIHBvc2l0aW9uID0gaWYgQHByb3BzLnNpZGUgPT0gJ3VzYScgdGhlbiAxIGVsc2UgMFxuXG4gICAgaXBaZXJvID0gaWYgQHByb3BzLmlwID09IDAgdGhlbiAnaXBaZXJvJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtI3tAcHJvcHMuc2lkZX0gbm9kZWRpdi1pcCAje2lwWmVyb31cIlxuXG4gICAgdGV4dEF0dHJzID1cbiAgICAgIHg6IEBwcm9wcy5ub2RlLndpZHRoLzRcbiAgICAgIHk6IEBwcm9wcy5ub2RlLmhlaWdodC8yIC0gMVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtdGV4dFwiXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIGlwID0gaWYgQHByb3BzLmlwID4gMCB0aGVuIEBwcm9wcy5pcCBlbHNlICcnXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIFIuc3BhbiB0ZXh0QXR0cnMsIGlwXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC1jbGljay11cFwiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ3VwJ1xuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stZG5cIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cblxuQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHI6IDBcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5Lm9uICd1cGRhdGUnLCA9PlxuICAgICAgQGZvcmNlVXBkYXRlKClcblxuICAgICNmbiA9ICgpPT5cbiAgICAgICNAc2V0U3RhdGUgcjogTWF0aC5yYW5kb20oKVxuICAgICAgI3NldFRpbWVvdXQgZm4sIDIwMDBcbiAgICAjZm4oKVxuICAgXG4gIGhhbmRsZVNIQ2xpY2s6IChpZCktPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpZFxuXG4gIGhhbmRsZUNsb3NlSGlzdG9yeTogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmhpZGUoKVxuXG4gIHJlbmRlcjogLT5cbiAgICBzdGF0ZUNvbXBvbmVudHMgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEFsbCgpLm1hcCAoc2gsIGluZGV4KT0+XG4gICAgICBzaE0gPSBzaC5tZXRhXG4gICAgICAjIElQIHBsYWNlbWVudCBpbiBjb3VudHJ5XG4gICAgICBpZiBzaE0uY291bnRyeT9cbiAgICAgICAga2V5ID0gXCJjb3VudHJ5LSN7c2hNLmNvdW50cnkuaWR9XCJcbiAgICAgIGVsc2VcbiAgICAgICAga2V5ID0gXCIje3NoTS5pZH0tI3tzaE0uc2lkZX1cIlxuXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeUVudHJ5XG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVTSENsaWNrLmJpbmQgdGhpcywgaW5kZXhcbiAgICAgICAga2V5OiBcIkJTSEUtI3tpbmRleH0tI3trZXl9XCJcbiAgICAgICAgaXNMYXRlc3Q6IEBwcm9wcy5zdGF0ZUhpc3RvcnkubGF0ZXN0ID09IGluZGV4XG4gICAgICAgIGlzQ3VycmVudDogQHByb3BzLnN0YXRlSGlzdG9yeS5jdXJyZW50ID09IGluZGV4XG4gICAgICAgIHNoOiBzaFxuXG4gICAgZGl2QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAnU3RhdGVIaXN0b3J5JzogdHJ1ZVxuICAgICAgICAnaW4nOiBAcHJvcHMuc3RhdGVIaXN0b3J5LnNob3dcblxuICAgIFIuZGl2IGRpdkF0dHJzLCBbXG4gICAgICBSLmEgY2xhc3NOYW1lOiAnY2xvc2UgcHVsbC1yaWdodCcsIG9uQ2xpY2s6IEBoYW5kbGVDbG9zZUhpc3RvcnksIFtcbiAgICAgICAgJ0Nsb3NlICdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgJyhoKSdcbiAgICAgIF1cbiAgICAgIFIuaDMge30sIFwiQWN0aW9uIEhpc3RvcnlcIlxuICAgICAgUi51bCBjbGFzc05hbWU6ICdsaXN0LXVuc3R5bGVkJywgc3RhdGVDb21wb25lbnRzLnJldmVyc2UoKVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmdhbWVWYWxEaXNwbGF5ID0gcmVxdWlyZSAnLi4vbGlicy9nYW1lVmFsRGlzcGxheSdcbnVwcGVyRmlyc3QgPSByZXF1aXJlICcuLi9saWJzL3VwcGVyRmlyc3QnXG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuaW50VG9TdHJXaXRoU2lnbiA9IHJlcXVpcmUgJy4uL2xpYnMvaW50VG9TdHJXaXRoU2lnbidcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi4vbGlicy9zdXBlcnBvd2VyVG9JbmRleCdcblxuc2NvcmVTaWRlID0gKHNjb3JlKS0+XG4gIGlmIHNjb3JlIDwgMFxuICAgIHJldHVybiAndXNzcidcbiAgaWYgc2NvcmUgPiAwXG4gICAgcmV0dXJuICd1c2EnXG4gICcnXG5cblxuc2hFbnRyeSA9IChzaCktPlxuICByb3VuZFNpZGUgPSBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kICUgMiA9PSAwIHRoZW4gJ3VzYScgZWxzZSAndXNzcidcbiAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgcm91bmRTaWRlID0gJydcblxuICBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAxMFxuICAgIHR1cm4gPSBcIkVORFwiXG4gICAgcm91bmQgPSAnJ1xuICBlbHNlIGlmIHNoLnN0YXRlLmdhbWUudHVybiA+IDBcbiAgICB0dXJuID0gXCJUI3tnYW1lVmFsRGlzcGxheSgndHVybicsIHNoLnN0YXRlLmdhbWUudHVybil9LVwiXG4gICAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAhPSAwXG4gICAgICByb3VuZCA9IFwiQVIje2dhbWVWYWxEaXNwbGF5KCdyb3VuZCcsIHNoLnN0YXRlLmdhbWUucm91bmQpfVwiXG4gICAgZWxzZVxuICAgICAgcm91bmQgPSBcIkhFQURcIlxuICBlbHNlXG4gICAgdHVybiA9IFwiU0VUVVBcIlxuICAgIHJvdW5kID0gJydcblxuICB0dXJuUm91bmQgPVxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICd0dXJuUm91bmQnLCBbXG4gICAgICB0dXJuXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiByb3VuZFNpZGUsIHJvdW5kXG4gICAgXVxuXG4gIHNoU2lkZSA9IHNoLm1ldGEuc2lkZVxuXG4gIHN3aXRjaCBzaC5tZXRhLnR5cGVcbiAgICAjIExvYWQgc3RhdGUgZnJvbSB1cmxcbiAgICB3aGVuICdsb2FkJ1xuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgJ0xvYWRlZCBzdGF0ZSBmcm9tIFVSTCdcbiAgICAgIF1cbiAgICB3aGVuICdpcCdcbiAgICAgIFtpcFVTQSwgaXBVU1NSXSA9IHNoLm1ldGEuaXBzXG4gICAgICBjb3VudHJ5ID0gc2gubWV0YS5jb3VudHJ5XG4gICAgICBjdHJsVVNBID0gaWYgKGlwVVNBIC0gaXBVU1NSKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuICAgICAgY3RybFVTU1IgPSBpZiAoaXBVU1NSIC0gaXBVU0EpID49IGNvdW50cnkuc3RhYiB0aGVuICdjb250cm9sJyBlbHNlICcnXG5cbiAgICAgIGlmIHNoLm1ldGEuc2lkZSA9PSAnYm90aCdcbiAgICAgICAgaXBzID0gW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVswXVxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwiZGl2aWRlclwiLCAnLydcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzc3IgaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhWzFdXG4gICAgICAgIF1cbiAgICAgIGVsc2VcbiAgICAgICAgaXBzID0gUi5zcGFuIGNsYXNzTmFtZTogXCIje3NoLm1ldGEuc2lkZX0gaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhW3N1cGVycG93ZXJUb0luZGV4IHNoLm1ldGEuc2lkZV1cblxuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgaXBzXG4gICAgICAgIFwiIGluICN7c2gubWV0YS5jb3VudHJ5LnNob3J0bmFtZX0gKFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhICN7Y3RybFVTQX1cIiwgc2gubWV0YS5pcHNbMF1cbiAgICAgICAgXCIvXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyICN7Y3RybFVTU1J9XCIsIHNoLm1ldGEuaXBzWzFdXG4gICAgICAgIFwiKVwiXG4gICAgICBdXG4gICAgd2hlbiAndmFsJ1xuICAgICAgb2xkU2lkZSA9IG5ld1NpZGUgPSBzaC5tZXRhLnNpZGVcblxuICAgICAgaWYgc2gubWV0YS5pZCA9PSAnc2NvcmUnXG4gICAgICAgIG9sZFNpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5vbGRcbiAgICAgICAgbmV3U2lkZSA9IHNjb3JlU2lkZSBzaC5tZXRhLm5ld1xuXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFwiI3t1cHBlckZpcnN0KHNoLm1ldGEuaWQpfSBcIlxuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG9sZFNpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm9sZCwgJ2xvbmcnKX0gXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2Fycm93JywgJ+KelCAnXG4gICAgICAgIFIuc3Ryb25nIGNsYXNzTmFtZTogbmV3U2lkZSwgXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICBdXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBzaWRlID0gcm91bmRTaWRlXG4gICAgICByb3VuZFRpdGxlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgICAgICAgXCJIZWFkbGluZSBQaGFzZVwiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBcIiN7c2lkZS50b1VwcGVyQ2FzZSgpfSBBY3Rpb24gUm91bmQgI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgICAgIFxuICAgICAgI3NpZGUgPSBbJ3Vzc3InLCAndXNhJ11bKHNoLnN0YXRlLmdhbWUucm91bmQgKyAxKSAlIDJdXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHNpZGUsIHJvdW5kVGl0bGVcbiAgICAgIF1cbiAgICB3aGVuICd0dXJuJ1xuICAgICAgZGlzcCA9IFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgaWYgc2guc3RhdGUuZ2FtZS50dXJuICE9IDAgYW5kIHNoLnN0YXRlLmdhbWUudHVybiA8PSAxMFxuICAgICAgICBkaXNwID0gXCJUdXJuICN7ZGlzcH1cIlxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgZGlzcFxuICAgICAgXVxuICAgIGVsc2VcbiAgICAgIHNoLm1ldGEubXNnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXRlSGlzdG9yeUVudHJ5J1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgc2hvdWxkSXQgPSBmYWxzZVxuICAgIHRQID0gQHByb3BzXG4gICAgdFNoTSA9IEBwcm9wcy5zaC5tZXRhXG4gICAgblNoTSA9IG5QLnNoLm1ldGFcbiAgICAjIElQIHBsYWNlbWVudFxuICAgIGlmIHRTaE0/Lmlwcz9cbiAgICAgIHNob3VsZEl0ID0gdFNoTS5pcHNbMF0gIT0gblNoTS5pcHNbMF0gb3JcbiAgICAgICAgdFNoTS5pcHNbMV0gIT0gblNoTS5pcHNbMV1cbiAgICBpZiB0U2hNLnR5cGUgPT0gJ3ZhbCdcbiAgICAgIHNob3VsZEl0ID0gdFNoTS5uZXcgIT0gblNoTS5uZXdcbiAgICAjIElmIGN1cnJlbnQvbGF0ZXN0IGNoYW5nZWRcbiAgICBpZiB0UC5pc0xhdGVzdCAhPSBuUC5pc0xhdGVzdCBvciB0UC5pc0N1cnJlbnQgIT0gblAuaXNDdXJyZW50XG4gICAgICBzaG91bGRJdCA9IHRydWVcblxuICAgIHNob3VsZEl0XG5cbiAgcmVuZGVyOi0+XG4gICAgYXR0cnMgPVxuICAgICAgb25DbGljazogQHByb3BzLm9uQ2xpY2tcbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ2NsZWFyZml4JzogdHJ1ZVxuICAgICAgICAnU3RhdGVIaXN0b3J5LWxhdGVzdCc6IEBwcm9wcy5pc0xhdGVzdFxuICAgICAgICAnU3RhdGVIaXN0b3J5LWN1cnJlbnQnOiBAcHJvcHMuaXNDdXJyZW50XG4gICAgUi5saSBhdHRycywgc2hFbnRyeShAcHJvcHMuc2gpXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZFN0YXR1c1ZhbHVlID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1c1ZhbHVlJ1xuRGllID0gcmVxdWlyZSAnLi9EaWUnXG5cbnRhYmxlID1cbiAgJ1Njb3JlJzogJ1MnXG4gICdEZWZjb24nOiAnRCdcbiAgJ01pbE9wcy11c2EnOiAnTSdcbiAgJ01pbE9wcy11c3NyJzogJ08nXG4gICdUdXJuJzogJ1QnXG4gICdSb3VuZCc6ICdSJ1xuICAnU3BhY2UtdXNhJzogJ3AnXG4gICdTcGFjZS11c3NyJzogJ2EnXG4gICdBY3Rpb24gSGlzdG9yeSc6ICdIJ1xuICAnUm9sbCBkaWNlJzogJ2MnXG5cbmhpbGlnaHRTaG9ydGN1dExldHRlciA9ICh0aXRsZSxzaWRlPScnKS0+XG4gIHRpdGxlU2lkZSA9IHRpdGxlXG4gIGlmIHNpZGUgIT0gJycgYW5kIHRpdGxlICE9ICdSb3VuZCcgYW5kIHRpdGxlICE9ICdTY29yZSdcbiAgICB0aXRsZVNpZGUgPSBcIiN7dGl0bGV9LSN7c2lkZX1cIlxuXG4gIFtoZWFkLCB0YWlsXSA9IHRpdGxlLnNwbGl0IHRhYmxlW3RpdGxlU2lkZV1cbiAgbWlkID0gdGFibGVbdGl0bGVTaWRlXVxuICBbXG4gICAgaGVhZFxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsIG1pZFxuICAgIHRhaWxcbiAgXVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXMnXG5cbiAgcm9sbERpY2U6IC0+XG4gICAgXy5lYWNoIEByZWZzLCAocmVmKS0+IHJlZi5yb2xsRGllKClcblxuICBoYW5kbGVCb3RoQ2xpY2s6IC0+XG4gICAgQHJvbGxEaWNlKClcblxuICByZW5kZXI6IC0+XG4gIFxuICAgIHNjb3JlU2lkZSA9ICcnXG4gICAgaWYgQHByb3BzLnNjb3JlICE9IDBcbiAgICAgIHNjb3JlU2lkZSA9IGlmIEBwcm9wcy5zY29yZSA8IDAgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgIyBSb3VuZDogMCBpcyBoZWFkbGluZSwgb2RkcyBhcmUgVVNTUiwgZXZlbnMgYXJlIFVTQVxuICAgIHJvdW5kID0gaWYgQHByb3BzLnJvdW5kID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwoQHByb3BzLnJvdW5kIC8gMilcbiAgICByb3VuZFNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5yb3VuZCAhPSAwXG4gICAgICByb3VuZFNpZGUgPSBpZiBAcHJvcHMucm91bmQgJSAyID09IDEgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgdHVybiA9IHN3aXRjaCBAcHJvcHMudHVyblxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIEBwcm9wcy50dXJuXG5cbiAgICAjIFNob3J0aGFuZCBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICBzdGF0dXNWYWx1ZSA9IChpZD0nJywgdGl0bGU9JycsIHZhbD0nJywgc2lkZT0nJyk9PlxuICAgICAgdGl0bGUgPSBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgdGl0bGUsIHNpZGVcbiAgICAgIEJvYXJkU3RhdHVzVmFsdWUgXy5hc3NpZ24ge2lkLCB0aXRsZSwgdmFsLCBzaWRlfSwgaGFuZGxlVmFsQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGlja1xuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFN0YXR1cycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3Njb3JlJywgJ1Njb3JlJywgTWF0aC5hYnMoQHByb3BzLnNjb3JlKSwgc2NvcmVTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdkZWZjb24nLCAnRGVmY29uJywgQHByb3BzLmRlZmNvblxuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMF0sICd1c2EnXG4gICAgICAgIHN0YXR1c1ZhbHVlICdtaWxvcHMnLCAnTWlsT3BzJywgQHByb3BzLm1pbG9wc1sxXSwgJ3Vzc3InXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICd0dXJuJywgJ1R1cm4nLCB0dXJuXG4gICAgICAgIHN0YXR1c1ZhbHVlICdyb3VuZCcsICdSb3VuZCcsIHJvdW5kLCByb3VuZFNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnU3BhY2UnLCBAcHJvcHMuc3BhY2VbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzJywgW1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXVuZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndW5kbycpLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeiknXG4gICAgICAgICAgICAnIFVuZG8nXG4gICAgICAgICAgXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLWhpc3RvcnknLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndG9nZ2xlJyksXG4gICAgICAgICAgICBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgJ0FjdGlvbiBIaXN0b3J5J1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXJlZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwncmVkbycpLCBbXG4gICAgICAgICAgICAnUmVkbyAnXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeSknXG4gICAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnZGljZScsIFtcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c2EnLCBzaWRlOiAndXNhJ1xuICAgICAgICBSLmEgY2xhc3NOYW1lOiAncm9sbC1kaWNlJywgb25DbGljazogQGhhbmRsZUJvdGhDbGljaywgaGlsaWdodFNob3J0Y3V0TGV0dGVyKCdSb2xsIGRpY2UnKVxuICAgICAgICBEaWUgcmVmOiAnZGllLXVzc3InLCBzaWRlOiAndXNzcidcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXNWYWx1ZSdcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC52YWwgIT0gQHByb3BzLnZhbCBvciBuUC5zaWRlICE9IEBwcm9wcy5zaWRlXG4gIHJlbmRlcjogLT5cbiAgICBzaWRlQ2xhc3MgPSBzd2l0Y2ggQHByb3BzLnNpZGVcbiAgICAgIHdoZW4gJ3VzYScsICd1c3NyJyB0aGVuIEBwcm9wcy5zaWRlXG4gICAgICBlbHNlICcnXG5cbiAgICBkZWNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdkZWMnXG4gICAgICBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2suYmluZChudWxsLCBAcHJvcHMuaWQsICdkZWMnLCBAcHJvcHMuc2lkZSlcbiAgICBpbmNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdpbmMnLFxuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnaW5jJywgQHByb3BzLnNpZGUpXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c0xhYmVsXCIsIEBwcm9wcy50aXRsZVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c1ZhbHVlICN7c2lkZUNsYXNzfVwiLCBbXG4gICAgICAgIFIuc3BhbiBkZWNBdHRycywgJ+KXgCdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3ZhbCcsIEBwcm9wcy52YWxcbiAgICAgICAgUi5zcGFuIGluY0F0dHJzLCAn4pa2J1xuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnplcm9QYWQgPSByZXF1aXJlICcuLi9saWJzL3plcm9QYWQnXG5cbmNhcmRTdGFnZXMgPSAxOidFQVJMWScsIDI6J01JRCcsIDM6J0xBVEUnXG5cbmNhcmRDbGFzc05hbWUgPSAocHJvcHMpIC0+XG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIFwib3duZXItI3twcm9wcy5vd25lcn0gY2FyZC12aWV3LSN7cHJvcHMudmlld30gI3tjbGFzc2VzfVwiXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkJ1xuICByZW5kZXI6IC0+XG4gICAgbWFpbiA9IFtcbiAgICAgICAgUi5zcGFuIHtjbGFzc05hbWU6ICdjYXJkLXRpdGxlLWhvbGRlcicgfSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLXN0YWdlJywgY2FyZFN0YWdlc1tAcHJvcHMuc3RhZ2VdXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLW9wcycsIGlmIEBwcm9wcy5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBAcHJvcHMub3BzXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLXRpdGxlJywgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy50aXRsZX0gXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLWlkJywgXCIjI3tAcHJvcHMuaWR9XCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5wIGNsYXNzTmFtZTogJ2NhcmQtdGV4dCcsIEBwcm9wcy50ZXh0XG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMudmlldyA9PSAnaW1nJ1xuICAgICAgbWFpbiA9XG4gICAgICAgIFIuaW1nXG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2FyZC1pbWcnXG4gICAgICAgICAgc3JjOiBcIi9pbWFnZXMvY2FyZHMvc20vI3t6ZXJvUGFkIEBwcm9wcy5pZH0uanBnXCJcblxuICAgIFIuYSBocmVmOiBcIiMvY2FyZC8je0Bwcm9wcy5pZH1cIiwgY2xhc3NOYW1lOiBjYXJkQ2xhc3NOYW1lKEBwcm9wcykgKyAnIGNhcmQnLCBtYWluXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZEltZydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQgY2FyZEltZycsXG4gICAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgIFIuaW1nIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5DYXJkID0gcmVxdWlyZSAnLi9DYXJkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZExpc3QnXG4gIHJlbmRlcjogLT5cbiAgICBjbGFzc05hbWUgPSBjeFxuICAgICAgJ2NhcmRMaXN0JzogdHJ1ZVxuICAgICAgJ2NhcmRMaXN0RnVsbCc6IEBwcm9wcy52aWV3ID09ICd0ZXh0J1xuICAgICAgJ2NhcmRMaXN0SW1nJzogQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICBSLmRpdiB7Y2xhc3NOYW1lfSwgQHByb3BzLmNhcmRzLm1hcCAoZWwpID0+XG4gICAgICBDYXJkIF8ubWVyZ2UgZWwsXG4gICAgICAgIGtleTogXCJjYXJkI3tlbC5pZH1cIlxuICAgICAgICBzaG93RnVsbFRleHQ6IEBwcm9wcy5mdWxsVGV4dFxuICAgICAgICB2aWV3OiBAcHJvcHMudmlld1xuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnRGllJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QLCBuUyktPlxuICAgIG5TLnJvbGxpbmcgIT0gQHN0YXRlLnJvbGxpbmcgb3IgblMudmFsICE9IEBzdGF0ZS52YWxcblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm9sbHM6IDMwXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHZhbDogMVxuICAgIHJvbGxpbmc6IGZhbHNlXG4gICAgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gIGNsaWNrRGllOiAtPlxuICAgIEByb2xsRGllKClcblxuICByb2xsRGllOiAtPlxuICAgIHJldHVybiBpZiBAc3RhdGUucm9sbGluZ1xuICAgIEBpdGVyYXRlUm9sbCgpXG5cbiAgaXRlcmF0ZVJvbGw6IC0+XG4gICAgaWYgbm90IEBzdGF0ZS5yb2xsaW5nXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogdHJ1ZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gICAgaWYgQHN0YXRlLnJvbGxzID09IDBcbiAgICAgIEBzZXRTdGF0ZSByb2xsaW5nOiBmYWxzZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuICAgIGVsc2VcbiAgICAgIHRpbWUgPSAoMTAgLSBAc3RhdGUucm9sbHMpICogMTggKyA1MFxuICAgICAgaWYgQHN0YXRlLnJvbGxzID4gMTBcbiAgICAgICAgdGltZSA9IDUwXG5cbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICB2YWw6IF8ucmFuZG9tKDEsNilcbiAgICAgICAgcm9sbHM6IEBzdGF0ZS5yb2xscyAtIDFcbiAgICAgIHNldFRpbWVvdXQgQGl0ZXJhdGVSb2xsLCB0aW1lXG5cbiAgcmVuZGVyOiAtPlxuICAgIHJvbGxpbmcgPSBpZiBAc3RhdGUucm9sbGluZyBhbmQgQHN0YXRlLnJvbGxzID4gMCB0aGVuICdyb2xsaW5nJyBlbHNlICcnXG4gICAgUi5kaXYgb25DbGljazogQGNsaWNrRGllLCBjbGFzc05hbWU6IFwiZGllIGRpZS0je0Bwcm9wcy5zaWRlfSAje3JvbGxpbmd9XCIsIEBzdGF0ZS52YWxcblxuIiwiUiA9IFJlYWN0LkRPTVxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnZm9vdGVyJywgW1xuICAgICAgUi5wIHt9LCBbXG4gICAgICAgIFwiVHdpU3RydWcgd2FzIG1hZGUgYnkgXCJcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9qanQuaW8nLCAnSmFzb24gVHJpbGwnXG4gICAgICAgICcgd2l0aCBoZWxwIGZyb20gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2NvZmZlZXNjcmlwdC5vcmcvJywgJ0NvZmZlZVNjcmlwdCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC8nLCAnUmVhY3QnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9icm93c2VyaWZ5Lm9yZy8nLCAnQnJvd3NlcmlmeSdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2xvZGFzaC5jb20vJywgJ0xvLURhc2gnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsICdCb290c3RyYXAnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly96ZXB0b2pzLmNvbScsICdaZXB0bydcbiAgICAgICAgJywgYW5kICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9ndWxwanMuY29tJywgJ0d1bHAnXG4gICAgICAgICcuJ1xuICAgICAgICBSLmJyKClcbiAgICAgICAgJ0l0IG93ZXMgaXRzIGV4aXN0ZW5jZSB0byAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20nLCAnVHdpbGlnaHQgU3RyYXRlZ3knXG4gICAgICAgICcuIENvbW1lbnRzLCBzdWdnZXN0aW9ucywgYW5kIGJ1ZyByZXBvcnRzIGNhbiBiZSBhaW1lZCBhdCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2l0aHViLmNvbS9qanQvdHdpc3RydWcvaXNzdWVzJywgJ0dpdGh1YidcbiAgICAgICAgJyBvciAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpdHRlci5jb20vamFzb250cmlsbCcsICdAamFzb250cmlsbCdcbiAgICAgICAgJy4nXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ05hdlZpZXcnXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICBhY3RpdmU6ICcnXG5cbiAgcmVuZGVyOiAtPlxuXG4gICAgbGkgPSAobWVudUtleSwgaHJlZiwgdGl0bGUpPT5cbiAgICAgIFIubGkgY2xhc3NOYW1lOiBjeCgnYWN0aXZlJzogQHByb3BzLmFjdGl2ZSA9PSBtZW51S2V5KSxcbiAgICAgICAgUi5hIGhyZWY6IGhyZWYsIHRpdGxlXG5cbiAgICBSLm5hdiBjbGFzc05hbWU6IFwibmF2YmFyIFwiLCByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiwgW1xuXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgaHJlZjogJyMvJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2lcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1Z1wiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG5cbiAgICAgICAgUi51bCBjbGFzc05hbWU6IFwibmF2IG5hdmJhci1uYXZcIiwgW1xuICAgICAgICAgIGxpICdjYXJkcycsICcjL2NhcmRzJywgJ0NhcmRzJ1xuICAgICAgICAgIGxpICdib2FyZCcsICcjL2JvYXJkJywgJ0JvYXJkJ1xuICAgICAgICAgIGxpICdhYm91dCcsICcjL2Fib3V0JywgJ0Fib3V0J1xuICAgICAgICBdXG5cbiAgICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iXX0=
