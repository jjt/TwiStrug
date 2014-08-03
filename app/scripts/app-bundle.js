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


},{"../app/data/cards.json":1,"./libs":13,"./pages":35,"./router":36,"./views":52}],4:[function(require,module,exports){
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
        state: state
      };
    }
    this.save();
    this.emit('merge', this.getCurrent());
    this.emit('update', this.getCurrent());
    return this.emit('change');
  };

  BoardStateHistory.prototype.encodeCurrent = function() {
    return stateEncoder.encode(this.getCurrent());
  };

  return BoardStateHistory;

})(StateHistory);


},{"./StateHistory":6,"./stateEncoder":22,"./superpowerToIndex":23}],5:[function(require,module,exports){
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
      state: _.cloneDeep(state),
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
    this.current = index;
    this.emit('goTo', this.getCurrent());
    this.emit('update', this.getCurrent());
    return this.emit('change');
  };

  StateHistory.prototype.get = function(index) {
    return _.cloneDeep(this.states[index]);
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

  StateHistory.prototype.toggleVisible = function(force, showTemp) {
    if (showTemp == null) {
      showTemp = false;
    }
    clearTimeout(this.showThenHideTimeout);
    this.showTemp = showTemp;
    this.show = force != null ? force : !this.show;
    this.emit('toggleVisible', this.show);
    return this.emit('update');
  };

  StateHistory.prototype.showThenHide = function(time) {
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

  StateHistory.prototype.hide = function() {
    return this.toggleVisible(false);
  };

  StateHistory.prototype.show = function() {
    return this.toggleVisible(true);
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
module.exports = function(el) {
  if (el) {
    return el;
  }
};


},{}],9:[function(require,module,exports){
module.exports = function(el, i, arr) {
  return arr.indexOf(el) === i;
};


},{}],10:[function(require,module,exports){
module.exports = function(el) {
  return (1 <= el && el <= 110);
};


},{}],11:[function(require,module,exports){
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


},{}],12:[function(require,module,exports){
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


},{}],13:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee");f["MicroEventClass"]=require("/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee");f["StateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["gameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee");f["gameValDisplay"]=require("/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["intToStrWithSign"]=require("/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee");f["numToChar"]=require("/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["signFromDir"]=require("/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee");f["signString"]=require("/Users/jjt/Sites/twistrug/src/libs/signString.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["stateEncoder"]=require("/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee");f["superpowerToIndex"]=require("/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee");f["upperFirst"]=require("/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee":4,"/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee":12,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":13,"/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee":14,"/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee":15,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":16,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":17,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":18,"/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee":19,"/Users/jjt/Sites/twistrug/src/libs/signString.coffee":20,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":21,"/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee":22,"/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee":23,"/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee":24,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":25,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":26}],14:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return "+" + num;
  } else {
    return num;
  }
};


},{}],15:[function(require,module,exports){
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


},{}],16:[function(require,module,exports){
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


},{}],17:[function(require,module,exports){
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


},{}],18:[function(require,module,exports){
var __slice = [].slice;

module.exports = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return document.title = args.join(' | ') + ' - TwiStrug';
};


},{}],19:[function(require,module,exports){
module.exports = function(dir) {
  if (dir === 'up') {
    return '+';
  } else {
    return '-';
  }
};


},{}],20:[function(require,module,exports){
module.exports = function(num) {
  if (num > 0) {
    return '+';
  }
  if (num < 0) {
    return '-';
  }
  return '';
};


},{}],21:[function(require,module,exports){
module.exports = function(a, b) {
  return a - b;
};


},{}],22:[function(require,module,exports){
var numToChar;

numToChar = require('./numToChar');

module.exports = {
  encode: function(stateObj) {
    var board, game, ips, state;
    state = stateObj.state;
    game = state.game;
    ips = state.ips;
    board = [game.score + 20, game.defcon, game.turn, game.round, game.milops[0], game.milops[1], game.space[0], game.space[1]];
    return board.concat(_.flatten(ips.slice(2))).map(numToChar.encode).join('');
  },
  decode: function(str) {
    var arr, boardArr, defcon, game, index, ip, ipArr, ips, ipsIndex, milops, mousa, moussr, round, score, sideIndex, space, spusa, spussr, turn, _i, _len;
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


},{"./numToChar":15}],23:[function(require,module,exports){
module.exports = function(power) {
  if (power === 'usa') {
    return 0;
  } else {
    return 1;
  }
};


},{}],24:[function(require,module,exports){
module.exports = function(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


},{}],25:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],26:[function(require,module,exports){
module.exports = function(str, len) {
  if (len == null) {
    len = 3;
  }
  return ('000' + str).substr(-len, len);
};


},{}],27:[function(require,module,exports){
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


},{}],28:[function(require,module,exports){
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
            key: 'z',
            desc: 'Undo action'
          }, {
            key: 'y',
            desc: 'Redo action'
          }, {
            key: 'h',
            desc: 'Show/hide action history'
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
            key: 'c',
            desc: 'Roll dice'
          }
        ]
      }
    };
  },
  render: function() {
    return R.div({}, [
      R.div({
        className: 'row'
      }, [
        R.div({
          className: 'col-lg-6'
        }, [
          R.h3({}, 'Virtual Twilight Struggle board'), R.p({}, "This is a fully playable board with a more compact layout to fit on smaller screens, like a Chromebook or iPad. Just add cards and you'll be able to play anywhere. The board isn't aware of the rules, nor will it do anything automatically. Use it as you would a physical copy of the game."), R.p({}, [
            "This game, ", R.a({
              href: "#/board/" + this.props.id
            }, R.code({}, this.props.id)), ", will be saved in your browser and can be bookmarked and resumed at a later time, even if you close your browser. ", R.a({
              onClick: this.scrollTop,
              href: '#/board'
            }, 'Click here to start a new game'), '.'
          ]), R.p({}, "The URL contains the complete state of the board and will update with each action taken. This can be used to play remotely with someone by sending the URL back and forth. For instance, if you were the USSR starting a new game, you would place your initial influence then copy the URL and send it to your opponent. They would go to that URL, place their influence and send the new URL back to you. Lather, rinse, repeat."), R.h3({}, "Keyboard Shortcuts"), R.dl({
            className: 'BoardPage-shortcuts col-lg-6'
          }, _.reduce(this.props.shortcuts.left, reduceShortcuts, [])), R.dl({
            className: 'BoardPage-shortcuts col-lg-6'
          }, _.reduce(this.props.shortcuts.right, reduceShortcuts, []))
        ]), R.div({
          className: 'col-lg-6'
        }, [R.h3({}, "Instructions"), R.p({}, "To add/remove influnce in a country, click in the top/bottom of the influence space on the desired side (USA on left, USSR on right)."), R.p({}, "To undo/redo one or more actions, press Z/Y one or more times."), R.p({}, "The dice can be rolled individually by clicking on them, or as a pair by clicking on \"ROLL DICE\"."), R.p({}, "Each superpower box (USA, USSR) shows the number of controlled battleground countries on top. On the bottom it shows the number of regions in which the power has presence, domination, and control. For example, if the USSR had \"4 2 1\", it would mean that they have presence in 4 regions, dominate 2, and control 1.")])
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


},{"../libs/BoardStateHistory":4,"../libs/StateHistory":6,"../views/Board":38,"../views/BoardStateHistory":42}],29:[function(require,module,exports){
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


},{}],30:[function(require,module,exports){
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


},{"../libs":13}],31:[function(require,module,exports){
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


},{"../libs":13,"../views/CardList":48}],32:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],33:[function(require,module,exports){
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


},{}],34:[function(require,module,exports){
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


},{}],35:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":27,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":28,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":29,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":30,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":31,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":32,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":33,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":34,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":35}],36:[function(require,module,exports){
var libs, mapData, setRouteOriginal, vent;

libs = require('./libs');

vent = require('./vent');

mapData = require('../app/data/map-data.json');

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
        var boardProps, countries, countryPositions, key, links, nodes, regionInfoNodes;
        if ((gameId == null) || gameId === '') {
          gameId = Math.random().toString(36).slice(2, 10);
          window.history.replaceState(null, "Board " + gameId, "#/board/" + gameId);
        }
        countryPositions = mapData.countryPositions, countries = mapData.countries, links = mapData.links, regionInfoNodes = mapData.regionInfoNodes;
        countries = countries.map(function(node) {
          node.x = countryPositions[node.name].x;
          node.y = countryPositions[node.name].y;
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
        key = gameId;
        boardProps = {
          gameId: gameId,
          mapData: mapData,
          countries: countries,
          regionInfoNodes: regionInfoNodes,
          links: links,
          nodes: nodes,
          key: key,
          incomingState: incomingState
        };
        return _this.setView('board', 'Board', 'board', boardProps);
      };
    })(this));
    return router.init('/');
  }
};


},{"../app/data/map-data.json":2,"./libs":13,"./vent":37}],37:[function(require,module,exports){
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


},{"./libs/MicroEventClass":5}],38:[function(require,module,exports){
var BoardLink, BoardNode, BoardStatus, R, RCTG, cx, getIpStats, getRegionStats, getRegionStatus, rangedGameVal, stateEncoder, sumRegion, superStats, superpowerToIndex;

R = React.DOM;

RCTG = React.addons.CSSTransitionGroup;

cx = React.addons.classSet;

rangedGameVal = require('../libs/rangedGameVal');

stateEncoder = require('../libs/stateEncoder');

BoardNode = require('./BoardNode');

BoardStatus = require('./BoardStatus');

BoardLink = require('./BoardLink');

superpowerToIndex = function(str) {
  if (str === 'usa') {
    return 0;
  } else {
    return 1;
  }
};

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
      var hRegion, out, vRegion;
      hRegion = hero[region.id];
      vRegion = villain[region.id];
      return out = {
        presence: hRegion.total > 0,
        domination: hRegion.non > 0 && hRegion.btl > vRegion.btl && hRegion.total > vRegion.total,
        control: hRegion.btl === region.numBtl && hRegion.total > vRegion.total
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

superStats = function(ips, countryArr, regionArr) {
  var countries, regions;
  countries = getIpStats(ips, countryArr);
  regions = getRegionStats(countries, regionArr);
  return {
    countries: countries,
    regions: regions
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
    return state;
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
    return $(document).on('keypress', this.keypressHandler);
  },
  componentWillUnmount: function() {
    return $(document).off('keypress', this.keypressHandler);
  },
  handleIncomingState: function(stateEncoded) {
    var current, state;
    if (stateEncoded == null) {
      stateEncoded = this.props.incomingState;
    }
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
  },
  setStateHistory: function(state, meta) {
    this.props.stateHistory.add(state, meta);
    return this.setState(state);
  },
  keypressHandler: function(ev) {
    var dir, kC;
    kC = ev.keyCode;
    dir = kC >= 97 ? 'inc' : 'dec';
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
    var boardStatusAttrs, links, nodeProps, nodes, superpowerStats;
    nodeProps = this.props.node;
    superpowerStats = superStats(this.state.ips, this.props.countries, this.props.regionInfoNodes);
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
        var countryId, props;
        props = {
          node: nodeProps,
          key: "BoardNode-" + countryData.id,
          transform: "translate(" + countryData.x + ", " + countryData.y + ")",
          width: _this.props.node.width,
          height: _this.props.node.height,
          gutter: _this.props.node.gutter,
          titleHeight: _this.props.node.titleHeight,
          titleFontSize: _this.props.node.titleFontSize,
          handleIPClick: _this.handleIPClick
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
        return BoardNode(props);
      };
    })(this));
    boardStatusAttrs = {
      ref: 'BoardStatus',
      handleValClick: this.handleValClick,
      handleHistoryClick: this.handleHistoryClick
    };
    return R.div({
      className: 'Board'
    }, [
      R.svg({
        width: this.props.width,
        height: this.props.height,
        ref: 'svg'
      }, [links, nodes]), BoardStatus(_.assign(boardStatusAttrs, this.state.game))
    ]);
  }
});


},{"../libs/rangedGameVal":17,"../libs/stateEncoder":22,"./BoardLink":39,"./BoardNode":40,"./BoardStatus":44}],39:[function(require,module,exports){
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


},{}],40:[function(require,module,exports){
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
    var cCN, controlUSA, controlUSSR, dCN, gAttrs, pCN, poly, polyClassName, psr, regionCx, regionText, regionTextAttrs, stabText, stabTextAttrs, titleTextAttrs;
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


},{"./BoardNodeIP":41}],41:[function(require,module,exports){
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


},{}],42:[function(require,module,exports){
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
    stateComponents = this.props.stateHistory.states.map((function(_this) {
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


},{"./BoardStateHistoryEntry":43}],43:[function(require,module,exports){
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


},{"../libs/gameValDisplay":12,"../libs/intToStrWithSign":14,"../libs/superpowerToIndex":23,"../libs/upperFirst":24,"../libs/zeroPad":26}],44:[function(require,module,exports){
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
  if (side !== '' && title !== 'Round') {
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


},{"./BoardStatusValue":45,"./Die":49}],45:[function(require,module,exports){
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


},{}],46:[function(require,module,exports){
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


},{"../libs/zeroPad":26}],47:[function(require,module,exports){
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


},{"../libs/zeroPad":26}],48:[function(require,module,exports){
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


},{"./Card":46}],49:[function(require,module,exports){
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


},{}],50:[function(require,module,exports){
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


},{}],51:[function(require,module,exports){
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


},{}],52:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/views/index.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/views/Board.coffee");f["BoardLink"]=require("/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee");f["BoardNode"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee");f["BoardNodeIP"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee");f["BoardStateHistoryEntry"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee");f["BoardStatus"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee");f["BoardStatusValue"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/views/Card.coffee");f["CardImg"]=require("/Users/jjt/Sites/twistrug/src/views/CardImg.coffee");f["CardList"]=require("/Users/jjt/Sites/twistrug/src/views/CardList.coffee");f["Die"]=require("/Users/jjt/Sites/twistrug/src/views/Die.coffee");f["Footer"]=require("/Users/jjt/Sites/twistrug/src/views/Footer.coffee");f["Nav"]=require("/Users/jjt/Sites/twistrug/src/views/Nav.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/views/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/views/Board.coffee":38,"/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee":39,"/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee":40,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee":41,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee":42,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee":43,"/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee":44,"/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee":45,"/Users/jjt/Sites/twistrug/src/views/Card.coffee":46,"/Users/jjt/Sites/twistrug/src/views/CardImg.coffee":47,"/Users/jjt/Sites/twistrug/src/views/CardList.coffee":48,"/Users/jjt/Sites/twistrug/src/views/Die.coffee":49,"/Users/jjt/Sites/twistrug/src/views/Footer.coffee":50,"/Users/jjt/Sites/twistrug/src/views/Nav.coffee":51,"/Users/jjt/Sites/twistrug/src/views/index.coffee":52}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvY2FyZHMuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL1R3aXN0cnVnLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9NaWNyb0V2ZW50Q2xhc3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9TdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9jYXJkQ2xhc3NOYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVHJ1dGh5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVW5pcXVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVmFsaWRDYXJkSWRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZ2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWxEaXNwbGF5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9pbnRUb1N0cldpdGhTaWduLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvbnVtVG9DaGFyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9yYW5nZWRHYW1lVmFsLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2V0UGFnZVRpdGxlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2lnbkZyb21EaXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zaWduU3RyaW5nLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc29ydE51bWVyaWNhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3N0YXRlRW5jb2Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3N1cGVycG93ZXJUb0luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvdXBwZXJGaXJzdC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3ZpZXdzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvemVyb1BhZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9BYm91dC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Cb2FyZFBpYy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NhcmRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NvdW50cmllcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9Ib21lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL1dob29wcy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9wYWdlcy9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9yb3V0ZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmVudC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZExpbmsuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxLQUFYO1NBQVAsRUFBeUIsS0FBekIsQ0FEeUMsRUFFekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBUCxFQUEyQixPQUEzQixDQUZ5QztPQUEzQyxDQURGLENBRjRCLEVBUTVCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxnQkFBWDtPQUFMLEVBQWtDLENBQ2hDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQURnQyxFQUVoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FGZ0MsRUFHaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSGdDLENBQWxDLENBUjRCO0tBQTlCLENBREYsRUFOTTtFQUFBLENBSlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGNBQVIsQ0FBQSxDQUF3QixTQUF4QixFQUFtQyxDQUFDLFVBQUQsQ0FBbkMsQ0FBakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXHIgIHtcciAgICBcImlkXCI6MSxcciAgICBcInRpdGxlXCI6XCJBc2lhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNzsgQ29udHJvbDogOTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9yZWdpb25zLWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MixcciAgICBcInRpdGxlXCI6XCJFdXJvcGUgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiBBdXRvbWF0aWMgVmljdG9yeTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9yZWdpb25zLWV1cm9wZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozLFxyICAgIFwidGl0bGVcIjpcIk1pZGRsZSBFYXN0IFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNzsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzEzL3JlZ2lvbnMtbWlkZGxlLWVhc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NCxcciAgICBcInRpdGxlXCI6XCJEdWNrIGFuZCBDb3ZlclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBUaGUgVVMgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gNSBtaW51cyB0aGUgY3VycmVudCBERUZDT04gbGV2ZWwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2R1Y2stYW5kLWNvdmVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo1LFxyICAgIFwidGl0bGVcIjpcIkZpdmUgWWVhciBQbGFuXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbXVzdCByYW5kb21seSBkaXNjYXJkIGEgY2FyZC4gSWYgdGhlIGNhcmQgaGFzIGEgVVMgYXNzb2NpYXRlZCBFdmVudCwgdGhlIEV2ZW50IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgdGhlIGNhcmQgaGFzIGEgVVNTUiBhc3NvY2lhdGVkIEV2ZW50IG9yIGFuIEV2ZW50IGFwcGxpY2FibGUgdG8gYm90aCBwbGF5ZXJzLCB0aGVuIHRoZSBjYXJkIG11c3QgYmUgZGlzY2FyZGVkIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2ZpdmUteWVhci1wbGFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo2LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDaGluYSBDYXJkXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhpcyBjYXJkIGJlZ2lucyB0aGUgZ2FtZSB3aXRoIHRoZSBVU1NSLiBXaGVuIHBsYXllZCwgdGhlIHBsYXllciByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCBpZiBpdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBBc2lhLiBJdCBpcyBwYXNzZWQgdG8gdGhlIG9wcG9uZW50IG9uY2UgcGxheWVkLiBBIHBsYXllciByZWNlaXZlcyAxIFZQIGZvciBob2xkaW5nIHRoaXMgY2FyZCBhdCB0aGUgZW5kIG9mIFR1cm4gMTAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMxL3RoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcsXHIgICAgXCJ0aXRsZVwiOlwiU29jaWFsaXN0IEdvdmVybm1lbnRzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgMyBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODMg4oCTIFRoZSBJcm9uIExhZHnigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMy9zb2NpYWxpc3QtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OCxcciAgICBcInRpdGxlXCI6XCJGaWRlbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIEN1YmEuIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSBpbiBDdWJhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9maWRlbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjksXHIgICAgXCJ0aXRsZVwiOlwiVmlldG5hbSBSZXZvbHRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIFZpZXRuYW0uIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIGEgY2FyZCB0aGF0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNi92aWV0bmFtLXJldm9sdHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMCxcciAgICBcInRpdGxlXCI6XCJCbG9ja2FkZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJVbmxlc3MgdGhlIFVTIGltbWVkaWF0ZWx5IGRpc2NhcmRzIGEgY2FyZCB3aXRoIGFuIE9wZXJhdGlvbnMgdmFsdWUgb2YgMyBvciBtb3JlLCByZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTkvYmxvY2thZGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMSxcciAgICBcInRpdGxlXCI6XCJLb3JlYW4gV2FyKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIk5vcnRoIEtvcmVhIGludmFkZXMgU291dGggS29yZWEuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBTb3V0aCBLb3JlYS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCBVUyBJbmZsdWVuY2UgaW4gU291dGggS29yZWEgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8yNS9rb3JlYW4td2FyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTIsXHIgICAgXCJ0aXRsZVwiOlwiUm9tYW5pYW4gQWJkaWNhdGlvbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFJvbWFuaWEuIFRoZSBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgdG8gUm9tYW5pYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMDIvcm9tYW5pYW4tYWJkaWNhdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEzLFxyICAgIFwidGl0bGVcIjpcIkFyYWItSXNyYWVsaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJQYW4tQXJhYiBDb2FsaXRpb24gaW52YWRlcyBJc3JhZWwuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIElzcmFlbCwgaWYgaXQgaXMgVVMgY29udHJvbGxlZCwgYW5kIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gSXNyYWVsLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIFVTIEluZmx1ZW5jZSBpbiBJc3JhZWwgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjNjUg4oCTIENhbXAgRGF2aWQgQWNjb3Jkc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzE2L2FyYWItaXNyYWVsaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTQsXHIgICAgXCJ0aXRsZVwiOlwiQ29tZWNvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIDQgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIG9mIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8yNC9jb21lY29uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTUsXHIgICAgXCJ0aXRsZVwiOlwiTmFzc2VyKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEVneXB0LiBUaGUgVVMgcmVtb3ZlcyBoYWxmLCByb3VuZGVkIHVwLCBvZiBpdHMgSW5mbHVlbmNlIGZyb20gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzA2L25hc3Nlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE2LFxyICAgIFwidGl0bGVcIjpcIldhcnNhdyBQYWN0IEZvcm1lZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIGluZmx1ZW5jZSBmcm9tIDQgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIG9yIGFkZCA1IFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yMC93YXJzYXctcGFjdC1mb3JtZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNyxcciAgICBcInRpdGxlXCI6XCJEZSBHYXVsbGUgTGVhZHMgRnJhbmNlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSAyIFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSBhbmQgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gRnJhbmNlLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBGcmFuY2Ugb25seS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjQvZGUtZ2F1bGxlLWxlYWRzLWZyYW5jZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE4LFxyICAgIFwidGl0bGVcIjpcIkNhcHR1cmVkIE5hemkgU2NpZW50aXN0KlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIk1vdmUgdGhlIFNwYWNlIFJhY2UgTWFya2VyIGFoZWFkIGJ5IDEgc3BhY2UuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzI3L2NhcHR1cmVkLW5hemktc2NpZW50aXN0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTksXHIgICAgXCJ0aXRsZVwiOlwiVHJ1bWFuIERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBhIHNpbmdsZSB1bmNvbnRyb2xsZWQgY291bnRyeSBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzAyL3RydW1hbi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMCxcciAgICBcInRpdGxlXCI6XCJPbHltcGljIEdhbWVzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhpcyBwbGF5ZXIgc3BvbnNvcnMgdGhlIE9seW1waWNzLiBUaGUgb3Bwb25lbnQgbXVzdCBlaXRoZXIgcGFydGljaXBhdGUgb3IgYm95Y290dC4gSWYgdGhlIG9wcG9uZW50IHBhcnRpY2lwYXRlcywgZWFjaCBwbGF5ZXIgcm9sbHMgYSBkaWUgYW5kIHRoZSBzcG9uc29yIGFkZHMgMiB0byB0aGVpciByb2xsLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCAocmVyb2xsIHRpZXMpLiBJZiB0aGUgb3Bwb25lbnQgYm95Y290dHMsIGRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgc3BvbnNvciBtYXkgY29uZHVjdCBPcGVyYXRpb25zIGFzIGlmIHRoZXkgcGxheWVkIGEgNCBPcHMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvb2x5bXBpYy1nYW1lcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMSxcciAgICBcInRpdGxlXCI6XCJOQVRPKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIGNhbm5vdCBtYWtlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgYWdhaW5zdCBhbnkgVVMgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gRXVyb3BlLiBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUgY2Fubm90IGJlIGF0dGFja2VkIGJ5IHBsYXkgb2YgdGhlIOKAnCMzNiDigJMgQnJ1c2ggV2Fy4oCdIEV2ZW50LiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiBlaXRoZXIgdGhlIOKAnCMxNiDigJMgV2Fyc2F3IFBhY3QgRm9ybWVk4oCdIG9yIOKAnCMyMyDigJMgTWFyc2hhbGwgUGxhbuKAnSBFdmVudChzKSBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEyL25hdG8vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMixcciAgICBcInRpdGxlXCI6XCJJbmRlcGVuZGVudCBSZWRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBVUyBJbmZsdWVuY2UgdG8gZWl0aGVyIFl1Z29zbGF2aWEsIFJvbWFuaWEsIEJ1bGdhcmlhLCBIdW5nYXJ5LCBvciBDemVjaG9zbG92YWtpYSBzbyB0aGF0IGl0IGVxdWFscyB0aGUgVVNTUiBJbmZsdWVuY2UgaW4gdGhhdCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMy9pbmRlcGVuZGVudC1yZWRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIzLFxyICAgIFwidGl0bGVcIjpcIk1hcnNoYWxsIFBsYW4qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDcgbm9uLVVTU1IgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE2L21hcnNoYWxsLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNCxcciAgICBcInRpdGxlXCI6XCJJbmRvLVBha2lzdGFuaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJbmRpYSBpbnZhZGVzIFBha2lzdGFuIG9yIHZpY2UgdmVyc2EgKHBsYXllcuKAmXMgY2hvaWNlKS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIGludmFzaW9uIChJbmRpYSBvciBQYWtpc3RhbikuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xOS9pbmRvLXBha2lzdGFuaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjUsXHIgICAgXCJ0aXRsZVwiOlwiQ29udGFpbm1lbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVUywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yMC9jb250YWlubWVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNixcciAgICBcInRpdGxlXCI6XCJDSUEgQ3JlYXRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMgZm9yIHRoaXMgdHVybi4gVGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjYvY2lhLWNyZWF0ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjcsXHIgICAgXCJ0aXRsZVwiOlwiVVMvSmFwYW4gTXV0dWFsIERlZmVuc2UgUGFjdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBKYXBhbiBmb3IgQ29udHJvbC4gVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IEphcGFuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNy91c2phcGFuLW11dHVhbC1kZWZlbnNlLXBhY3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOCxcciAgICBcInRpdGxlXCI6XCJTdWV6IENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSwgdGhlIFVuaXRlZCBLaW5nZG9tIGFuZCBJc3JhZWwgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI5L3N1ZXotY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjksXHIgICAgXCJ0aXRsZVwiOlwiRWFzdCBFdXJvcGVhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJFYXJseSBvciBNaWQgV2FyOiBSZW1vdmUgMSBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLiBMYXRlIFdhcjogUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDIvZWFzdC1ldXJvcGVhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMwLFxyICAgIFwidGl0bGVcIjpcIkRlY29sb25pemF0aW9uXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDUvZGVjb2xvbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzEsXHIgICAgXCJ0aXRsZVwiOlwiUmVkIFNjYXJlL1B1cmdlXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWluaW11bSB2YWx1ZSBvZiAxIE9wZXJhdGlvbnMgcG9pbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8yMy9yZWQtc2NhcmVwdXJnZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMixcciAgICBcInRpdGxlXCI6XCJVTiBJbnRlcnZlbnRpb25cIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJQbGF5IHRoaXMgY2FyZCBzaW11bHRhbmVvdXNseSB3aXRoIGEgY2FyZCBjb250YWluaW5nIGFuIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50LiBUaGUgb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQgaXMgY2FuY2VsZWQgYnV0IHlvdSBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoZSBvcHBvbmVudOKAmXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHBsYXllZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8wNy91bi1pbnRlcnZlbnRpb24vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzMsXHIgICAgXCJ0aXRsZVwiOlwiRGUtU3RhbGluaXphdGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcmVhbGxvY2F0ZSB1cCB0byBhIHRvdGFsIG9mIDQgSW5mbHVlbmNlIGZyb20gb25lIG9yIG1vcmUgY291bnRyaWVzIHRvIGFueSBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8yOS9kZS1zdGFsaW5pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzQsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBUZXN0IEJhblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsIG1pbnVzIDIgdGhlbiBpbXByb3ZlcyB0aGUgREVGQ09OIGxldmVsIGJ5IDIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA2LzExL251Y2xlYXItdGVzdC1iYW4vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzUsXHIgICAgXCJ0aXRsZVwiOlwiRm9ybW9zYW4gUmVzb2x1dGlvbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgVGFpd2FuIHdpbGwgYmUgdHJlYXRlZCBhcyBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5LCBmb3Igc2NvcmluZyBwdXJwb3NlcyBvbmx5LCBpZiBUYWl3YW4gaXMgVVMgY29udHJvbGxlZCB3aGVuIHRoZSBBc2lhIFNjb3JpbmcgQ2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsbGVkIGFmdGVyIHRoZSBVUyBoYXMgcGxheWVkIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDIvZm9ybW9zYW4tcmVzb2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM2LFxyICAgIFwidGl0bGVcIjpcIkJydXNoIFdhclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgYXR0YWNrcyBhbnkgY291bnRyeSB3aXRoIGEgc3RhYmlsaXR5IG51bWJlciBvZiAxIG9yIDIuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGFkamFjZW50IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiAzLTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDMgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L2JydXNoLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNyxcciAgICBcInRpdGxlXCI6XCJDZW50cmFsIEFtZXJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAxOyBEb21pbmF0aW9uOiAzOyBDb250cm9sOiA1OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtY2VudHJhbC1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM4LFxyICAgIFwidGl0bGVcIjpcIlNvdXRoZWFzdCBBc2lhIFNjb3JpbmcqXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiMSBWUCBlYWNoIGZvciBDb250cm9sIG9mIEJ1cm1hLCBDYW1ib2RpYS9MYW9zLCBWaWV0bmFtLCBNYWxheXNpYSwgSW5kb25lc2lhIGFuZCB0aGUgUGhpbGlwcGluZXMuIDIgVlAgZm9yIENvbnRyb2wgb2YgVGhhaWxhbmQ7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvcmVnaW9ucy1zb3V0aGVhc3QtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM5LFxyICAgIFwidGl0bGVcIjpcIkFybXMgUmFjZVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkNvbXBhcmUgZWFjaCBwbGF5ZXLigJlzIHZhbHVlIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDEgVlAuIElmIHRoZSBwaGFzaW5nIHBsYXllciBoYXMgYSBoaWdoZXIgdmFsdWUgdGhhbiB0aGVpciBvcHBvbmVudCwgYW5kIGhhcyBtZXQgdGhlIOKAnHJlcXVpcmVk4oCdIGFtb3VudCwgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDMgVlAgaW5zdGVhZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDUvYXJtcy1yYWNlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQwLFxyICAgIFwidGl0bGVcIjpcIkN1YmFuIE1pc3NpbGUgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIDIuIEFueSBDb3VwIEF0dGVtcHRzIGJ5IHlvdXIgb3Bwb25lbnQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgd2lsbCByZXN1bHQgaW4gR2xvYmFsIFRoZXJtb251Y2xlYXIgV2FyLiBZb3VyIG9wcG9uZW50IHdpbGwgbG9zZSB0aGUgZ2FtZS4gVGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgYmUgY2FuY2VsZWQsIGF0IGFueSB0aW1lLCBpZiB0aGUgVVNTUiByZW1vdmVzIDIgSW5mbHVlbmNlIGZyb20gQ3ViYSBvciB0aGUgVVMgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueSBvciBUdXJrZXkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA2L2N1YmFuLW1pc3NpbGUtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDEsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBTdWJzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlVTIE9wZXJhdGlvbnMgdXNlZCBmb3IgQ291cCBBdHRlbXB0cyBpbiBCYXR0bGVncm91bmQgY291bnRyaWVzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIGRvIG5vdCBkZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwuIFRoaXMgY2FyZOKAmXMgRXZlbnQgZG9lcyBub3QgYXBwbHkgdG8gYW55IEV2ZW50IHRoYXQgd291bGQgYWZmZWN0IHRoZSBERUZDT04gbGV2ZWwgKGV4LiB0aGUg4oCcIzQwIOKAkyBDdWJhbiBNaXNzaWxlIENyaXNpc+KAnSBFdmVudCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEwL251Y2xlYXItc3Vicy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MixcciAgICBcInRpdGxlXCI6XCJRdWFnbWlyZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVUyBhY3Rpb24gcm91bmQgdW50aWwgdGhlIFVTIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVUyBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMTA2IOKAkyBOT1JBROKAnSBFdmVudCAoaWYgYXBwbGljYWJsZSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEyL3F1YWdtaXJlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MyxcciAgICBcInRpdGxlXCI6XCJTQUxUIE5lZ290aWF0aW9ucypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMi4gRm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIGJvdGggcGxheWVycyByZWNlaXZlIC0xIHRvIGFsbCBDb3VwIEF0dGVtcHQgcm9sbHMuIFRoZSBwbGF5ZXIgb2YgdGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgbG9vayB0aHJvdWdoIHRoZSBkaXNjYXJkIHBpbGUsIHBpY2sgYW55IDEgbm9uLXNjb3JpbmcgY2FyZCwgcmV2ZWFsIGl0IHRvIHRoZWlyIG9wcG9uZW50IGFuZCB0aGVuIHBsYWNlIHRoZSBkcmF3biBjYXJkIGludG8gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTcvc2FsdC1uZWdvdGlhdGlvbnMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ0LFxyICAgIFwidGl0bGVcIjpcIkJlYXIgVHJhcCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVNTUuKAmXMgbmV4dCBhY3Rpb24gcm91bmQsIGl0IG11c3QgZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQgd2l0aCBhIHZhbHVlIG9mIDIgb3IgbW9yZSBhbmQgcm9sbCAxLTQgb24gYSBkaWUgdG8gY2FuY2VsIHRoaXMgRXZlbnQuIFJlcGVhdCB0aGlzIEV2ZW50IGZvciBlYWNoIFVTU1IgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVU1NSIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVU1NSIGlzIHVuYWJsZSB0byBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCwgaXQgbXVzdCBwbGF5IGFsbCBvZiBpdHMgc2NvcmluZyBjYXJkcyBhbmQgdGhlbiBza2lwIGVhY2ggYWN0aW9uIHJvdW5kIGZvciB0aGUgcmVzdCBvZiB0aGUgdHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTkvYmVhci10cmFwL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDUsXHIgICAgXCJ0aXRsZVwiOlwiU3VtbWl0XCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQm90aCBwbGF5ZXJzIHJvbGwgYSBkaWUuIEVhY2ggcGxheWVyIHJlY2VpdmVzICsxIHRvIHRoZSBkaWUgcm9sbCBmb3IgZWFjaCBSZWdpb24gKEV1cm9wZSwgQXNpYSwgZXRjLikgdGhleSBEb21pbmF0ZSBvciBDb250cm9sLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCBhbmQgbWF5IGRlZ3JhZGUgb3IgaW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgKGRvIG5vdCByZXJvbGwgdGllcykuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzI0L3N1bW1pdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NixcciAgICBcInRpdGxlXCI6XCJIb3cgSSBMZWFybmVkIHRvIFN0b3AgV29ycnlpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiU2V0IHRoZSBERUZDT04gbGV2ZWwgdG8gYW55IGxldmVsIGRlc2lyZWQgKDEtNSkuIFRoZSBwbGF5ZXIgYWRkcyA1IHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNi9ob3ctaS1sZWFybmVkLXRvLXN0b3Atd29ycnlpbmcvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NyxcciAgICBcInRpdGxlXCI6XCJKdW50YVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS4gVGhlIHBsYXllciBtYXkgbWFrZSBmcmVlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgaW4gZWl0aGVyIENlbnRyYWwgb3IgU291dGggQW1lcmljYSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAxL2p1bnRhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ4LFxyICAgIFwidGl0bGVcIjpcIktpdGNoZW4gRGViYXRlcypcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgY29udHJvbHMgbW9yZSBCYXR0bGVncm91bmQgY291bnRyaWVzIHRoYW4gdGhlIFVTU1IsIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIHBva2UgdGhlaXIgb3Bwb25lbnQgaW4gdGhlIGNoZXN0IGFuZCByZWNlaXZlIDIgVlAhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAzL2tpdGNoZW4tZGViYXRlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OSxcciAgICBcInRpdGxlXCI6XCJNaXNzaWxlIEVudnlcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJFeGNoYW5nZSB0aGlzIGNhcmQgZm9yIHlvdXIgb3Bwb25lbnTigJlzIGhpZ2hlc3QgdmFsdWUgT3BlcmF0aW9ucyBjYXJkLiBJZiAyIG9yIG1vcmUgY2FyZHMgYXJlIHRpZWQsIG9wcG9uZW50IGNob29zZXMuIElmIHRoZSBleGNoYW5nZWQgY2FyZCBjb250YWlucyBhbiBFdmVudCBhcHBsaWNhYmxlIHRvIHlvdXJzZWxmIG9yIGJvdGggcGxheWVycywgaXQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiBpdCBjb250YWlucyBhbiBvcHBvbmVudOKAmXMgRXZlbnQsIHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSAobm8gRXZlbnQpLiBUaGUgb3Bwb25lbnQgbXVzdCB1c2UgdGhpcyBjYXJkIGZvciBPcGVyYXRpb25zIGR1cmluZyB0aGVpciBuZXh0IGFjdGlvbiByb3VuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDgvbWlzc2lsZS1lbnZ5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUwLFxyICAgIFwidGl0bGVcIjpcIldlIFdpbGwgQnVyeSBZb3UqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFVubGVzcyB0aGUgIzMyIFVOIEludGVydmVudGlvbiBjYXJkIGlzIHBsYXllZCBhcyBhbiBFdmVudCBvbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCB0aGUgVVNTUiByZWNlaXZlcyAzIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMC93ZS13aWxsLWJ1cnkteW91L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTEsXHIgICAgXCJ0aXRsZVwiOlwiQnJlemhuZXYgRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVU1NSLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtYXhpbXVtIG9mIDQgT3BlcmF0aW9ucyBwZXIgY2FyZCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzEyL2JyZXpobmV2LWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTIsXHIgICAgXCJ0aXRsZVwiOlwiUG9ydHVndWVzZSBFbXBpcmUgQ3J1bWJsZXMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gQW5nb2xhIGFuZCB0aGUgU0UgQWZyaWNhbiBTdGF0ZXMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE1L3BvcnR1Z3Vlc2UtZW1waXJlLWNydW1ibGVzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTMsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQWZyaWNhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBlaXRoZXIgYWRkcyAyIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2Egb3IgYWRkcyAxIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2EgYW5kIDIgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggQWZyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNi9zb3V0aC1hZnJpY2FuLXVucmVzdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NCxcciAgICBcInRpdGxlXCI6XCJBbGxlbmRlKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIENoaWxlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNy9hbGxlbmRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTUsXHIgICAgXCJ0aXRsZVwiOlwiV2lsbHkgQnJhbmR0KlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gV2VzdCBHZXJtYW55LiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBXZXN0IEdlcm1hbnkgb25seS4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk2IOKAkyBUZWFyIERvd24gdGhpcyBXYWxs4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xOC93aWxseS1icmFuZHQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU2LFxyICAgIFwidGl0bGVcIjpcIk11c2xpbSBSZXZvbHV0aW9uXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSAyIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBTdWRhbiwgSXJhbiwgSXJhcSwgRWd5cHQsIExpYnlhLCBTYXVkaSBBcmFiaWEsIFN5cmlhLCBKb3JkYW4uIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCMxMTAg4oCTIEFXQUNTIFNhbGUgdG8gU2F1ZGlz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTkvbXVzbGltLXJldm9sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTcsXHIgICAgXCJ0aXRsZVwiOlwiQUJNIFRyZWF0eVwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGVuIGNvbmR1Y3QgT3BlcmF0aW9ucyB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzIzL2FibS10cmVhdHkvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTgsXHIgICAgXCJ0aXRsZVwiOlwiQ3VsdHVyYWwgUmV2b2x1dGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVNTUiAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIHRvIGJlIHBsYXllZCkuIElmIHRoZSBVU1NSIGFscmVhZHkgaGFzIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiByZWNlaXZlcyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNC9jdWx0dXJhbC1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTksXHIgICAgXCJ0aXRsZVwiOlwiRmxvd2VyIFBvd2VyKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgZm9yIGV2ZXJ5IFVTIHBsYXllZCDigJxXYXLigJ0gY2FyZCAoQXJhYi1Jc3JhZWxpIFdhciwgS29yZWFuIFdhciwgQnJ1c2ggV2FyLCBJbmRvLVBha2lzdGFuaSBXYXIsIElyYW4tSXJhcSBXYXIpLCB1c2VkIGZvciBPcGVyYXRpb25zIG9yIGFuIEV2ZW50LCBhZnRlciB0aGlzIGNhcmQgaXMgcGxheWVkLiBUaGlzIEV2ZW50IGlzIHByZXZlbnRlZCAvIGNhbmNlbGVkIGJ5IHRoZSDigJwjOTcg4oCTIEFuIEV2aWwgRW1waXJl4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNS9mbG93ZXItcG93ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYwLFxyICAgIFwidGl0bGVcIjpcIlUyIEluY2lkZW50KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIElmIHRoZSDigJwjMzIg4oCTIFVOIEludGVydmVudGlvbuKAnSBFdmVudCBpcyBwbGF5ZWQgbGF0ZXIgdGhpcyB0dXJuLCBlaXRoZXIgYnkgdGhlIFVTIG9yIHRoZSBVU1NSLCB0aGUgVVNTUiByZWNlaXZlcyBhbiBhZGRpdGlvbmFsIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI2L3UtMi1pbmNpZGVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYxLFxyICAgIFwidGl0bGVcIjpcIk9QRUNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBDb250cm9sIG9mIGVhY2ggb2YgdGhlIGZvbGxvd2luZyBjb3VudHJpZXM6IEVneXB0LCBJcmFuLCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBJcmFxLCBHdWxmIFN0YXRlcywgVmVuZXp1ZWxhLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODYg4oCTIE5vcnRoIFNlYSBPaWzigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yOS9vcGVjL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYyLFxyICAgIFwidGl0bGVcIjpcIkxvbmUgR3VubWFuKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzAvbG9uZS1ndW5tYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MyxcciAgICBcInRpdGxlXCI6XCJDb2xvbmlhbCBSZWFyIEd1YXJkc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA0IGNvdW50cmllcyBpbiBBZnJpY2EgYW5kL29yIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wMS9jb2xvbmlhbC1yZWFyLWd1YXJkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjQsXHIgICAgXCJ0aXRsZVwiOlwiUGFuYW1hIENhbmFsIFJldHVybmVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBQYW5hbWEsIENvc3RhIFJpY2EgYW5kIFZlbmV6dWVsYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDIvcGFuYW1hLWNhbmFsLXJldHVybmVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY1LFxyICAgIFwidGl0bGVcIjpcIkNhbXAgRGF2aWQgQWNjb3JkcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBhbmQgYWRkcyAxIEluZmx1ZW5jZSB0byBJc3JhZWwsIEpvcmRhbiBhbmQgRWd5cHQuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCMxMyDigJMgQXJhYi1Jc3JhZWxpIFdhcuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNS9jYW1wLWRhdmlkLWFjY29yZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NixcciAgICBcInRpdGxlXCI6XCJQdXBwZXQgR292ZXJubWVudHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBhZGQgMSBJbmZsdWVuY2UgdG8gMyBjb3VudHJpZXMgdGhhdCBkbyBub3QgY29udGFpbiBJbmZsdWVuY2UgZnJvbSBlaXRoZXIgdGhlIFVTIG9yIFVTU1IuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA2L3B1cHBldC1nb3Zlcm5tZW50cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NyxcciAgICBcInRpdGxlXCI6XCJHcmFpbiBTYWxlcyB0byBTb3ZpZXRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJhbmRvbWx5IHNlbGVjdHMgMSBjYXJkIGZyb20gdGhlIFVTU1LigJlzIGhhbmQgKGlmIGF2YWlsYWJsZSkuIFRoZSBVUyBtdXN0IGVpdGhlciBwbGF5IHRoZSBjYXJkIG9yIHJldHVybiBpdCB0byB0aGUgVVNTUi4gSWYgdGhlIGNhcmQgaXMgcmV0dXJuZWQsIG9yIHRoZSBVU1NSIGhhcyBubyBjYXJkcywgdGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDcvZ3JhaW4tc2FsZXMtdG8tc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjgsXHIgICAgXCJ0aXRsZVwiOlwiSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgMiBVU1NSIEluZmx1ZW5jZSBmcm9tIFBvbGFuZCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMxMDEg4oCTIFNvbGlkYXJpdHnigJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA4L2pvaG4tcGF1bC1paS1lbGVjdGVkLXBvcGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2OSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWF0aCBTcXVhZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgb2YgdGhlIHBoYXNpbmcgcGxheWVy4oCZcyBDb3VwIEF0dGVtcHRzIGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBkaWUgcm9sbC4gQWxsIG9mIHRoZSBvcHBvbmVudOKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA5L2xhdGluLWFtZXJpY2FuLWRlYXRoLXNxdWFkcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MCxcciAgICBcInRpdGxlXCI6XCJPQVMgRm91bmRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTIvb2FzLWZvdW5kZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzEsXHIgICAgXCJ0aXRsZVwiOlwiTml4b24gUGxheXMgdGhlIENoaW5hIENhcmQqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSBkb3duIGFuZCB1bmF2YWlsYWJsZSBmb3IgaW1tZWRpYXRlIHBsYXkpLiBJZiB0aGUgVVMgYWxyZWFkeSBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTMvbml4b24tcGxheXMtdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzIsXHIgICAgXCJ0aXRsZVwiOlwiU2FkYXQgRXhwZWxzIFNvdmlldHMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIEVneXB0IGFuZCBhZGQgMSBVUyBJbmZsdWVuY2UgdG8gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE0L3NhZGF0LWV4cGVscy1zb3ZpZXRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjczLFxyICAgIFwidGl0bGVcIjpcIlNodXR0bGUgRGlwbG9tYWN5XCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhpcyBjYXJk4oCZcyBFdmVudCBpcyBpbiBlZmZlY3QsIHN1YnRyYWN0ICgtMSkgYSBCYXR0bGVncm91bmQgY291bnRyeSBmcm9tIHRoZSBVU1NSIHRvdGFsIGFuZCB0aGVuIGRpc2NhcmQgdGhpcyBjYXJkIGR1cmluZyB0aGUgbmV4dCBzY29yaW5nIG9mIHRoZSBNaWRkbGUgRWFzdCBvciBBc2lhICh3aGljaCBldmVyIGNvbWVzIGZpcnN0KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTUvc2h1dHRsZS1kaXBsb21hY3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzQsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFZvaWNlIG9mIEFtZXJpY2FcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgNCBVU1NSIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgTk9UIGluIEV1cm9wZSAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTYvdGhlLXZvaWNlLW9mLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc1LFxyICAgIFwidGl0bGVcIjpcIkxpYmVyYXRpb24gVGhlb2xvZ3lcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAzIFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQ2VudHJhbCBBbWVyaWNhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTkvbGliZXJhdGlvbi10aGVvbG9neS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NixcciAgICBcInRpdGxlXCI6XCJVc3N1cmkgUml2ZXIgU2tpcm1pc2gqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIGZvciBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgYWRkIGEgdG90YWwgb2YgNCBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBBc2lhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjAvdXNzdXJpLXJpdmVyLXNraXJtaXNoL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc3LFxyICAgIFwidGl0bGVcIjpcIkFzayBOb3QgV2hhdCBZb3VyIENvdW50cnnigKYqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBkaXNjYXJkIHVwIHRvIHRoZWlyIGVudGlyZSBoYW5kIG9mIGNhcmRzIChpbmNsdWRpbmcgc2NvcmluZyBjYXJkcykgdG8gdGhlIGRpc2NhcmQgcGlsZSBhbmQgZHJhdyByZXBsYWNlbWVudHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgbnVtYmVyIG9mIGNhcmRzIHRvIGJlIGRpc2NhcmRlZCBtdXN0IGJlIGRlY2lkZWQgYmVmb3JlIGRyYXdpbmcgYW55IHJlcGxhY2VtZW50IGNhcmRzIGZyb20gdGhlIGRyYXcgcGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjEvYXNrLW5vdC13aGF0LXlvdXItY291bnRyeS1jYW4tZG8tZm9yLXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3OCxcciAgICBcInRpdGxlXCI6XCJBbGxpYW5jZSBmb3IgUHJvZ3Jlc3MqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMy9hbGxpYW5jZS1mb3ItcHJvZ3Jlc3MvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzksXHIgICAgXCJ0aXRsZVwiOlwiQWZyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogNDsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzExL3JlZ2lvbnMtYWZyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgwLFxyICAgIFwidGl0bGVcIjpcIk9uZSBTbWFsbCBTdGVw4oCmXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgeW91IGFyZSBiZWhpbmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIG1vdmUgdGhlaXIgbWFya2VyIDIgc3BhY2VzIGZvcndhcmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2suIFRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgb25seSBmcm9tIHRoZSBmaW5hbCBzcGFjZSBtb3ZlZCBpbnRvLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNi9vbmUtc21hbGwtc3RlcC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MSxcciAgICBcInRpdGxlXCI6XCJTb3V0aCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMjsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA4LzE1L3JlZ2lvbnMtc291dGgtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MixcciAgICBcInRpdGxlXCI6XCJJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGFuZCBhZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBJcmFuLiBUaGlzIGNhcmTigJlzIEV2ZW50IHJlcXVpcmVzIHRoZSBVUyB0byBkaXNjYXJkIDIgY2FyZHMsIGluc3RlYWQgb2YgMSBjYXJkLCBpZiB0aGUg4oCcIzkyIOKAkyBUZXJyb3Jpc23igJ0gRXZlbnQgaXMgcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8zMC9pcmFuaWFuLWhvc3RhZ2UtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MyxcciAgICBcInRpdGxlXCI6XCJUaGUgSXJvbiBMYWR5KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIEFyZ2VudGluYSBhbmQgcmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIHRoZSBVbml0ZWQgS2luZ2RvbS4gVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM3IOKAkyBTb2NpYWxpc3QgR292ZXJubWVudHPigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDMvdGhlLWlyb24tbGFkeS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg0LFxyICAgIFwidGl0bGVcIjpcIlJlYWdhbiBCb21icyBMaWJ5YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBmb3IgZXZlcnkgMiBVU1NSIEluZmx1ZW5jZSBpbiBMaWJ5YS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDQvcmVhZ2FuLWJvbWJzLWxpYnlhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg1LFxyICAgIFwidGl0bGVcIjpcIlN0YXIgV2FycypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaXMgYWhlYWQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQgYW5kIHBsYXkgaXQgaW1tZWRpYXRlbHkgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA1L3N0YXItd2Fycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NixcciAgICBcInRpdGxlXCI6XCJOb3J0aCBTZWEgT2lsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSA4IGNhcmRzIChpbiA4IGFjdGlvbiByb3VuZHMpIGZvciB0aGlzIHR1cm4gb25seS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzYxIOKAkyBPUEVD4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA2L25vcnRoLXNlYS1vaWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NyxcciAgICBcInRpdGxlXCI6XCJUaGUgUmVmb3JtZXIqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDQgVVNTUiBJbmZsdWVuY2UgdG8gRXVyb3BlIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gSWYgdGhlIFVTU1IgaXMgYWhlYWQgb2YgdGhlIFVTIGluIFZQLCA2IEluZmx1ZW5jZSBtYXkgYmUgYWRkZWQgdG8gRXVyb3BlIGluc3RlYWQuIFRoZSBVU1NSIG1heSBubyBsb25nZXIgbWFrZSBDb3VwIEF0dGVtcHRzIGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDcvdGhlLXJlZm9ybWVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OCxcciAgICBcInRpdGxlXCI6XCJNYXJpbmUgQmFycmFja3MgQm9tYmluZypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBpbiBMZWJhbm9uIGFuZCByZW1vdmUgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgaW4gdGhlIE1pZGRsZSBFYXN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMC9tYXJpbmUtYmFycmFja3MtYm9tYmluZy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg5LFxyICAgIFwidGl0bGVcIjpcIlNvdmlldHMgU2hvb3QgRG93biBLQUwtMDA3KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTIG1heSBwbGFjZSBpbmZsdWVuY2Ugb3IgbWFrZSBSZWFsaWdubWVudCByb2xscywgdXNpbmcgdGhpcyBjYXJkLCBpZiBTb3V0aCBLb3JlYSBpcyBVUyBjb250cm9sbGVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMS9zb3ZpZXRzLXNob290LWRvd24ta2FsLTAwNy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MCxcciAgICBcInRpdGxlXCI6XCJHbGFzbm9zdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTU1IgbWF5IG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMgb3IgYWRkIEluZmx1ZW5jZSwgdXNpbmcgdGhpcyBjYXJkLCBpZiB0aGUg4oCcIzg3IOKAkyBUaGUgUmVmb3JtZXLigJ0gRXZlbnQgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEyL2dsYXNub3N0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTEsXHIgICAgXCJ0aXRsZVwiOlwiT3J0ZWdhIEVsZWN0ZWQgaW4gTmljYXJhZ3VhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gTmljYXJhZ3VhLiBUaGUgVVNTUiBtYXkgbWFrZSBhIGZyZWUgQ291cCBBdHRlbXB0LCB1c2luZyB0aGlzIGNhcmTigJlzIE9wZXJhdGlvbnMgdmFsdWUsIGluIGEgY291bnRyeSBhZGphY2VudCB0byBOaWNhcmFndWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEzL29ydGVnYS1lbGVjdGVkLWluLW5pY2FyYWd1YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkyLFxyICAgIFwidGl0bGVcIjpcIlRlcnJvcmlzbVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXLigJlzIG9wcG9uZW50IG11c3QgcmFuZG9tbHkgZGlzY2FyZCAxIGNhcmQgZnJvbSB0aGVpciBoYW5kLiBJZiB0aGUg4oCcIzgyIOKAkyBJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lz4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLCBhIFVTIHBsYXllciAoaWYgYXBwbGljYWJsZSkgbXVzdCByYW5kb21seSBkaXNjYXJkIDIgY2FyZHMgZnJvbSB0aGVpciBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xNC90ZXJyb3Jpc20vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTMsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1Db250cmEgU2NhbmRhbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgVVMgUmVhbGlnbm1lbnQgcm9sbHMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBkaWUgcm9sbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTcvaXJhbi1jb250cmEtc2NhbmRhbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk0LFxyICAgIFwidGl0bGVcIjpcIkNoZXJub2J5bCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbXVzdCBkZXNpZ25hdGUgYSBzaW5nbGUgUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoYXQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiBjYW5ub3QgYWRkIEluZmx1ZW5jZSB0byB1c2luZyBPcGVyYXRpb25zIHBvaW50cy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTgvY2hlcm5vYnlsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk1LFxyICAgIFwidGl0bGVcIjpcIkxhdGluIEFtZXJpY2FuIERlYnQgQ3Jpc2lzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgaW1tZWRpYXRlbHkgZGlzY2FyZCBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSBvciB0aGUgVVNTUiBtYXkgZG91YmxlIHRoZSBhbW91bnQgb2YgVVNTUiBJbmZsdWVuY2UgaW4gMiBjb3VudHJpZXMgaW4gU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTkvbGF0aW4tYW1lcmljYW4tZGVidC1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTYsXHIgICAgXCJ0aXRsZVwiOlwiVGVhciBEb3duIHRoaXMgV2FsbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gRWFzdCBHZXJtYW55LiBUaGUgVVMgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIEV1cm9wZSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1NSDigJMgV2lsbHkgQnJhbmR04oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMC90ZWFyLWRvd24tdGhpcy13YWxsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTcsXHIgICAgXCJ0aXRsZVwiOlwiQW4gRXZpbCBFbXBpcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1OSDigJMgRmxvd2VyIFBvd2Vy4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMS9hbi1ldmlsLWVtcGlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk4LFxyICAgIFwidGl0bGVcIjpcIkFsZHJpY2ggQW1lcyBSZW1peCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLCBmYWNlLXVwLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiBhbmQgdGhlIFVTU1IgZGlzY2FyZHMgYSBjYXJkIGZyb20gdGhlIFVTIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzAzL2FsZHJpY2gtYW1lcy1yZW1peC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk5LFxyICAgIFwidGl0bGVcIjpcIlBlcnNoaW5nIElJIERlcGxveWVkKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIFJlbW92ZSAxIFVTIEluZmx1ZW5jZSBmcm9tIGFueSAzIGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDQvcGVyc2hpbmctaWktZGVwbG95ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDAsXHIgICAgXCJ0aXRsZVwiOlwiV2FyZ2FtZXMqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIERFRkNPTiBsZXZlbCBpcyAyLCB0aGUgcGxheWVyIG1heSBpbW1lZGlhdGVseSBlbmQgdGhlIGdhbWUgYWZ0ZXIgZ2l2aW5nIHRoZWlyIG9wcG9uZW50IDYgVlAuIEhvdyBhYm91dCBhIG5pY2UgZ2FtZSBvZiBjaGVzcz9cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDcvd2FyZ2FtZXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDEsXHIgICAgXCJ0aXRsZVwiOlwiU29saWRhcml0eSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gUG9sYW5kLiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiB0aGUg4oCcIzY4IOKAkyBKb2huIFBhdWwgSUkgRWxlY3RlZCBQb3Bl4oCdIEV2ZW50IGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDgvc29saWRhcml0eS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1JcmFxIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJcmFuIGludmFkZXMgSXJhcSBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSXJhbiBvciBJcmFxKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA5L2lyYW4taXJhcS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDMsXHIgICAgXCJ0aXRsZVwiOlwiRGVmZWN0b3JzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBwbGF5IHRoaXMgY2FyZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlIGluIG9yZGVyIHRvIGNhbmNlbCB0aGUgVVNTUiBIZWFkbGluZSBFdmVudCAoaW5jbHVkaW5nIGEgc2NvcmluZyBjYXJkKS4gVGhlIGNhbmNlbGVkIGNhcmQgaXMgcGxhY2VkIGludG8gdGhlIGRpc2NhcmQgcGlsZS4gSWYgdGhpcyBjYXJkIGlzIHBsYXllZCBieSB0aGUgVVNTUiBkdXJpbmcgaXRzIGFjdGlvbiByb3VuZCwgdGhlIFVTIGdhaW5zIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzA5L2RlZmVjdG9ycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDYW1icmlkZ2UgRml2ZVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIGFsbCBzY29yaW5nIGNhcmRzIGluIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIHBsYXllciBtYXkgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgUmVnaW9uIG5hbWVkIG9uIG9uZSBvZiB0aGUgcmV2ZWFsZWQgc2NvcmluZyBjYXJkcy4gVGhpcyBjYXJkIGNhbiBub3QgYmUgcGxheWVkIGFzIGFuIEV2ZW50IGR1cmluZyB0aGUgTGF0ZSBXYXIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzExL3RoZS1jYW1icmlkZ2UtZml2ZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDUsXHIgICAgXCJ0aXRsZVwiOlwiU3BlY2lhbCBSZWxhdGlvbnNoaXBcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBhZGphY2VudCB0byB0aGUgVS5LLiBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGJ1dCBOQVRPIGlzIG5vdCBpbiBlZmZlY3QuIEFkZCAyIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIFdlc3Rlcm4gRXVyb3BlLCBhbmQgdGhlIFVTIGdhaW5zIDIgVlAsIGlmIHRoZSBVLksuIGlzIFVTLWNvbnRyb2xsZWQgYW5kIE5BVE8gaXMgaW4gZWZmZWN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xOC9zcGVjaWFsLXJlbGF0aW9uc2hpcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA2LFxyICAgIFwidGl0bGVcIjpcIk5PUkFEKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGNvbnRhaW5pbmcgVVMgSW5mbHVlbmNlLCBhdCB0aGUgZW5kIG9mIGVhY2ggQWN0aW9uIFJvdW5kLCBpZiBDYW5hZGEgaXMgVVMtY29udHJvbGxlZCBhbmQgdGhlIERFRkNPTiBsZXZlbCBtb3ZlZCB0byAyIGR1cmluZyB0aGF0IEFjdGlvbiBSb3VuZC4gVGhpcyBFdmVudCBpcyBjYW5jZWxlZCBieSB0aGUg4oCcIzQyIOKAkyBRdWFnbWlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMjUvbm9yYWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDcsXHIgICAgXCJ0aXRsZVwiOlwiQ2hlXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbWF5IHBlcmZvcm0gYSBDb3VwIEF0dGVtcHQsIHVzaW5nIHRoaXMgY2FyZOKAmXMgT3BlcmF0aW9ucyB2YWx1ZSwgYWdhaW5zdCBhIG5vbi1CYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIEFtZXJpY2EsIFNvdXRoIEFtZXJpY2Egb3IgQWZyaWNhLiBUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIHNlY29uZCBDb3VwIEF0dGVtcHQsIGFnYWluc3QgYSBkaWZmZXJlbnQgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EsIGlmIHRoZSBmaXJzdCBDb3VwIEF0dGVtcHQgcmVtb3ZlZCBhbnkgVVMgSW5mbHVlbmNlIGZyb20gdGhlIHRhcmdldCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNy9jaGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA4LFxyICAgIFwidGl0bGVcIjpcIk91ciBNYW4gaW4gVGVocmFuKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBjb250cm9scyBhdCBsZWFzdCBvbmUgTWlkZGxlIEVhc3QgY291bnRyeSwgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gZHJhdyB0aGUgdG9wIDUgY2FyZHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgVVMgbWF5IGRpc2NhcmQgYW55IG9yIGFsbCBvZiB0aGUgZHJhd24gY2FyZHMsIGFmdGVyIHJldmVhbGluZyB0aGUgZGlzY2FyZGVkIGNhcmQocykgdG8gdGhlIFVTU1IgcGxheWVyLCB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIEV2ZW50KHMpLiBBbnkgcmVtYWluaW5nIGRyYXduIGNhcmRzIGFyZSByZXR1cm5lZCB0byB0aGUgZHJhdyBwaWxlIGFuZCB0aGUgZHJhdyBwaWxlIGlzIHJlc2h1ZmZsZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI4L291ci1tYW4taW4tdGVocmFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwOSxcciAgICBcInRpdGxlXCI6XCJZdXJpIGFuZCBTYW1hbnRoYSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIENvdXAgQXR0ZW1wdCBwZXJmb3JtZWQgZHVyaW5nIHRoZSByZW1haW5kZXIgb2YgdGhlIFR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzEwL3l1cmktYW5kLXNhbWFudGhhL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEwLFxyICAgIFwidGl0bGVcIjpcIkFXQUNTIFNhbGUgdG8gU2F1ZGlzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTIEluZmx1ZW5jZSB0byBTYXVkaSBBcmFiaWEuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM1NiDigJMgTXVzbGltIFJldm9sdXRpb27igJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTQvYXdhY3Mtc2FsZS10by1zYXVkaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfVxyXVxyIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInJlZ2lvbkluZm9Ob2Rlc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcImV1XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwibmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDcsXCJXXCJdLFxuICAgICAgXCJ4XCI6IDQ0MCwgXCJ5XCI6IDI4OCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcIm1lXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInBvaW50c1wiOiBbMyw1LDddLFxuICAgICAgXCJ4XCI6IDEwNDAsIFwieVwiOiA0ODAsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhc1wiLFxuICAgICAgXCJncm91cFwiOiBcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFzXCIsXG4gICAgICBcIm5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkFzaWFcIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDcsOV0sXG4gICAgICBcImV4dHJhXCI6IFwiMSBwZXIgU0UgY291bnRyeSwgMiBmb3IgVGhhaWxhbmRcIixcbiAgICAgIFwieFwiOiA4ODAsIFwieVwiOiAxNjAsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhZlwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSw0LDZdLFxuICAgICAgXCJ4XCI6IDUyMCwgXCJ5XCI6IDU0NCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwibmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwicG9pbnRzXCI6IFsxLDMsNV0sXG4gICAgICBcInhcIjogMjQwLCBcInlcIjogMzUyLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9LCBcbiAgICB7XG4gICAgICBcImlkXCI6IFwic2FcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJzYVwiLFxuICAgICAgXCJuYW1lXCI6IFwiUy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJwb2ludHNcIjogWzIsNSw2XSxcbiAgICAgIFwieFwiOiAyNDAsIFwieVwiOiA2NzIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH1cbiAgXSxcblxuICBcImNvdW50cnlQb3NpdGlvbnNcIjoge1xuICAgIFwiVVNBXCI6IHtcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogNjRcbiAgICB9LFxuICAgIFwiVVNTUlwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJBdXN0cmlhXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkJlbmVsdXhcIjoge1xuICAgICAgXCJ4XCI6IDQwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiQnVsZ2FyaWFcIjoge1xuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiQ2FuYWRhXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiQ3plY2hvc2xvdmFraWFcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiRGVubWFya1wiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJFIEdlcm1hbnlcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiRmlubGFuZFwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIkZyYW5jZVwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJHcmVlY2VcIjoge1xuICAgICAgXCJ4XCI6IDU2MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiSHVuZ2FyeVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJJdGFseVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJOb3J3YXlcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJQb2xhbmRcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiUm9tYW5pYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJTcGFpbi9Qb3J0dWdhbFwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJTd2VkZW5cIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJUdXJrZXlcIjoge1xuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiVUtcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiVyBHZXJtYW55XCI6IHtcbiAgICAgIFwieFwiOiA0ODAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIll1Z29zbGF2aWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiRWd5cHRcIjoge1xuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiR3VsZiBTdGF0ZXNcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIklyYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiSXJhcVwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJJc3JhZWxcIjoge1xuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiSm9yZGFuXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIkxlYmFub25cIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiTGlieWFcIjoge1xuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiU2F1ZGkgQXJhYmlhXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJTeXJpYVwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJBZmdoYW5pc3RhblwiOiB7XG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJBdXN0cmFsaWFcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiQnVybWFcIjoge1xuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSW5kaWFcIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSW5kb25lc2lhXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkphcGFuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjRcbiAgICB9LFxuICAgIFwiTGFvcy9DYW1ib2RpYVwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDI1NlxuICAgIH0sXG4gICAgXCJNYWxheXNpYVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiTiBLb3JlYVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJQYWtpc3RhblwiOiB7XG4gICAgICBcInhcIjogODQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJQaGlsbGlwcGluZXNcIjoge1xuICAgICAgXCJ4XCI6IDkyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJTIEtvcmVhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiVGFpd2FuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMTI4XG4gICAgfSxcbiAgICBcIlRoYWlsYW5kXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJWaWV0bmFtXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJBbGdlcmlhXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkFuZ29sYVwiOiB7XG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJCb3Rzd2FuYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJDYW1lcm9vblwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJFdGhpb3BpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJJdm9yeSBDb2FzdFwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJLZW55YVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJNb3JvY2NvXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIk5pZ2VyaWFcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiU0UgQWZyaWNhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIlNhaGFyYW4gU3RhdGVzXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlNvbWFsaWFcIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiU291dGggQWZyaWNhXCI6IHtcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIlN1ZGFuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlR1bmlzaWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiV2VzdCBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiWmFpcmVcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiWmltYmFid2VcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiQ29zdGEgUmljYVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJDdWJhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkRvbWluaWNhbiBSZXBcIjoge1xuICAgICAgXCJ4XCI6IDI4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiRWwgU2FsdmFkb3JcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJHdWF0ZW1hbGFcIjoge1xuICAgICAgXCJ4XCI6IDEyMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSGFpdGlcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiSG9uZHVyYXNcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiTWV4aWNvXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiTmljYXJhZ3VhXCI6IHtcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIlBhbmFtYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJBcmdlbnRpbmFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA2NDBcbiAgICB9LFxuICAgIFwiQm9saXZpYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDUxMlxuICAgIH0sXG4gICAgXCJCcmF6aWxcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiQ2hpbGVcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJDb2x1bWJpYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDQ0OFxuICAgIH0sXG4gICAgXCJFY3VhZG9yXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiUGFyYWd1YXlcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA1NzZcbiAgICB9LFxuICAgIFwiUGVydVwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlVydWd1YXlcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiVmVuZXp1ZWxhXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfVxuICB9LFxuICBcImNvdW50cmllc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6XCJVU0FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJVU0FcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOlwidXNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwidXNhXCIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJDYW5hZGEsQ3ViYSxNZXhpY28sSmFwYW5cIixcbiAgICAgIFwiaWRcIjowXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVVNTUlwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVTU1JcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOlwidXNzclwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInVzc3JcIixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkFmZ2hhbmlzdGFuLEZpbmxhbmQsTiBLb3JlYSxQb2xhbmQsUm9tYW5pYVwiLFxuICAgICAgXCJpZFwiOjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOlwiQXVzdHJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkF1c3RyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiRSBHZXJtYW55LEh1bmdhcnksSXRhbHksVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJlbmVsdXhcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCZW5lbHV4XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXIEdlcm1hbnksVUtcIixcbiAgICAgIFwiaWRcIjozXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnVsZ2FyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCdWxnYXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVHVya2V5LEdyZWVjZVwiLFxuICAgICAgXCJpZFwiOjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDYW5hZGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDYW5hZGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjoyLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVLXCIsXG4gICAgICBcImlkXCI6NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ3plY2hcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBvbGFuZCxFIEdlcm1hbnksSHVuZ2FyeVwiLFxuICAgICAgXCJpZFwiOjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJEZW5tYXJrXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRGVubWFya1wiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVyBHZXJtYW55LFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFLkdlcm1cIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MyxcbiAgICAgIFwibGlua3NcIjpcIlBvbGFuZCxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjo4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRmlubGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZpbmxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOlwiU3dlZGVuXCIsXG4gICAgICBcImlkXCI6OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQWxnZXJpYSxVSyxXIEdlcm1hbnksSXRhbHksU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXRhbHksWXVnb3NsYXZpYSxUdXJrZXlcIixcbiAgICAgIFwiaWRcIjoxMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkh1bmdhcnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIdW5nYXJ5XCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJSb21hbmlhLFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjoxMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkl0YWx5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXRhbHlcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIll1Z29zbGF2aWEsU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVUssU3dlZGVuXCIsXG4gICAgICBcImlkXCI6MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUm9tYW5pYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlJvbWFuaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1cmtleSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNwYWluL1BvXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcImlkXCI6MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoxOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlVLXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVUtcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjo1LFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVyBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVy5HZXJtXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoyMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIll1Z29zbGF2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJZdWdvc2xhdlwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFZ3lwdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkVneXB0XCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIklzcmFlbCxMaWJ5YSxTdWRhblwiLFxuICAgICAgXCJpZFwiOjIzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiR3VsZiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJHdWxmIFN0c1wiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJcmFxLFNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJpZFwiOjI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXJhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklyYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXJhcSxBZmdoYW5pc3RhbixQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXJhcVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklyYXFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOlwiU2F1ZGkgQXJhYmlhLEpvcmRhblwiLFxuICAgICAgXCJpZFwiOjI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXNyYWVsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXNyYWVsXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkpvcmRhbixMZWJhbm9uLFN5cmlhXCIsXG4gICAgICBcImlkXCI6MjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJKb3JkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJKb3JkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU2F1ZGkgQXJhYmlhLExlYmFub25cIixcbiAgICAgIFwiaWRcIjoyOFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkxlYmFub25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJMZWJhbm9uXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlN5cmlhXCIsXG4gICAgICBcImlkXCI6MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMaWJ5YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkxpYnlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1bmlzaWFcIixcbiAgICAgIFwiaWRcIjozMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNhdWRpIEFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTeXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlN5cmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MSxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQWZnaGFuaXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBZmdoYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjozM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkF1c3RyYWxpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6NCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNYWxheXNpYVwiLFxuICAgICAgXCJpZFwiOjM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnVybWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCdXJtYVwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSW5kaWEsTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgXCJpZFwiOjM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJbmRpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSW5kb25lc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSW5kb25lc2lhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNYWxheXNpYSxQaGlsbGlwcGluZXNcIixcbiAgICAgIFwiaWRcIjozN1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkphcGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSmFwYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGhpbGxpcHBpbmVzLFMgS29yZWEsVGFpd2FuXCIsXG4gICAgICBcImlkXCI6MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGFvcy9DYW1cIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kLFZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjozOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1hbGF5c2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcImlkXCI6NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTi5Lb3JlYVwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjMsXG4gICAgICBcImxpbmtzXCI6XCJTIEtvcmVhXCIsXG4gICAgICBcImlkXCI6NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGhpbGxpcHBpbmVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGhpbGxpcFwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUy5Lb3JlYVwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUYWl3YW5cIixcbiAgICAgIFwiaWRcIjo0NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlRhaXdhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlRhaXdhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVGhhaWxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjo0NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJWaWV0bmFtXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFsZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBbGdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk1vcm9jY28sVHVuaXNpYSxTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJpZFwiOjQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQW5nb2xhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQW5nb2xhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkJvdHN3YW5hLFNvdXRoIEFmcmljYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQm90c3dhbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCb3Rzd2FuYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTb3V0aCBBZnJpY2EsWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo1MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNhbWVyb29uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ2FtZXJvb25cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTmlnZXJpYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOjUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRXRoaW9waWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFdGhpb3BpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTdWRhbixTb21hbGlhXCIsXG4gICAgICBcImlkXCI6NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJdm9yeSBDb2FzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkl2b3J5IENcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiV2VzdCBBZnJpY2EsTmlnZXJpYVwiLFxuICAgICAgXCJpZFwiOjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiS2VueWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJLZW55YVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTb21hbGlhLFNFIEFmcmljYVwiLFxuICAgICAgXCJpZFwiOjU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTW9yb2Njb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk1vcm9jY29cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjo1NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5pZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJOaWdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTRSBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTRSBBZnJpY2FcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo1N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU2FoYXJhIFNcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTb21hbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU29tYWxpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo1OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNvdXRoIEFmXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3VkYW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTdWRhblwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlR1bmlzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJXZXN0IEFmXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWmFpcmVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJaYWlyZVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWmltYmFid2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNvc3RhIFJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDb3N0YSBSXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhvbmR1cmFzLE5pY2FyYWd1YSxQYW5hbWFcIixcbiAgICAgIFwiaWRcIjo2NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkN1YmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDdWJhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhhaXRpLE5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOjY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkRvbWluaWMgUlwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIYWl0aVwiLFxuICAgICAgXCJpZFwiOjY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRWwgU2FsdmFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFbCBTYWx2YVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxHdWF0ZW1hbGFcIixcbiAgICAgIFwiaWRcIjo2OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkd1YXRlbWFsYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxNZXhpY29cIixcbiAgICAgIFwiaWRcIjo3MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkhhaXRpXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSGFpdGlcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJIb25kdXJhc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkhvbmR1cmFzXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJpZFwiOjcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTWV4aWNvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTWV4aWNvXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjczXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTmljYXJhZ3VhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTmljYXJhZ3VhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGFuYW1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGFuYW1hXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcImlkXCI6NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBcmdlbnRpbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBcmdlbnRpbmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQ2hpbGUsUGFyYWd1YXksVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQm9saXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJvbGl2aWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGFyYWd1YXksUGVydVwiLFxuICAgICAgXCJpZFwiOjc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnJhemlsXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQnJhemlsXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVydWd1YXksVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDaGlsZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNoaWxlXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBlcnVcIixcbiAgICAgIFwiaWRcIjo3OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ29sdW1iaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiRWN1YWRvcixWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjo4MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVjdWFkb3JcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFY3VhZG9yXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBlcnVcIixcbiAgICAgIFwiaWRcIjo4MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBhcmFndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGFyYWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJpZFwiOjgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGVydVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBlcnVcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJVcnVndWF5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo4NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlZlbmV6dWVsYVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo4NVxuICAgIH1cbiAgXSxcblxuICBcImxpbmtzXCI6IFtcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkNhbmFkYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MCxcbiAgICAgIFwidGFyZ2V0XCI6NjcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkN1YmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjczLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjM4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJKYXBhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6MzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIkZpbmxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjQxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiTiBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6MTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjE2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjEyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjEzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MyxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJlbmVsdXhcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQsXG4gICAgICBcInRhcmdldFwiOjExLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdWxnYXJpYVwiLFxuICAgICAgICBcIkdyZWVjZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDYW5hZGFcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjE1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NixcbiAgICAgIFwidGFyZ2V0XCI6MTIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiSHVuZ2FyeVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NyxcbiAgICAgIFwidGFyZ2V0XCI6MTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4LFxuICAgICAgXCJ0YXJnZXRcIjoxNSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6OCxcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjksXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGaW5sYW5kXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjQ4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJBbGdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MTMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjE3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJTcGFpbi9Qb3J0dWdhbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjExLFxuICAgICAgXCJ0YXJnZXRcIjoxMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEyLFxuICAgICAgXCJ0YXJnZXRcIjoxNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMixcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTMsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMyxcbiAgICAgIFwidGFyZ2V0XCI6MTcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNCxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTQsXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNixcbiAgICAgIFwidGFyZ2V0XCI6MTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNixcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlJvbWFuaWFcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTcsXG4gICAgICBcInRhcmdldFwiOjU1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE5LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVHVya2V5XCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIzLFxuICAgICAgXCJ0YXJnZXRcIjoyNyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJJc3JhZWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6MzAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiTGlieWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6NjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI0LFxuICAgICAgXCJ0YXJnZXRcIjoyNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjQsXG4gICAgICBcInRhcmdldFwiOjMxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI1LFxuICAgICAgXCJ0YXJnZXRcIjoyNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNSxcbiAgICAgIFwidGFyZ2V0XCI6MzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjUsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI2LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI2LFxuICAgICAgXCJ0YXJnZXRcIjoyOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhcVwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjoyOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiSm9yZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjcsXG4gICAgICBcInRhcmdldFwiOjI5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjcsXG4gICAgICBcInRhcmdldFwiOjMyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI4LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjgsXG4gICAgICBcInRhcmdldFwiOjI5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJMZWJhbm9uXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjksXG4gICAgICBcInRhcmdldFwiOjMyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMZWJhbm9uXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozMCxcbiAgICAgIFwidGFyZ2V0XCI6NjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxpYnlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzMsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBZmdoYW5pc3RhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzQsXG4gICAgICBcInRhcmdldFwiOjQwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmFsaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM1LFxuICAgICAgXCJ0YXJnZXRcIjozNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJJbmRpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM1LFxuICAgICAgXCJ0YXJnZXRcIjozOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVybWFcIixcbiAgICAgICAgXCJMYW9zL0NhbWJvZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzYsXG4gICAgICBcInRhcmdldFwiOjQyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJbmRpYVwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzcsXG4gICAgICBcInRhcmdldFwiOjQwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJNYWxheXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM3LFxuICAgICAgXCJ0YXJnZXRcIjo0MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiUGhpbGxpcHBpbmVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzgsXG4gICAgICBcInRhcmdldFwiOjQzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzgsXG4gICAgICBcInRhcmdldFwiOjQ1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM5LFxuICAgICAgXCJ0YXJnZXRcIjo0NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgICBcIlRoYWlsYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzksXG4gICAgICBcInRhcmdldFwiOjQ3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQwLFxuICAgICAgXCJ0YXJnZXRcIjo0NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTWFsYXlzaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQxLFxuICAgICAgXCJ0YXJnZXRcIjo0NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTiBLb3JlYVwiLFxuICAgICAgICBcIlMgS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0NCxcbiAgICAgIFwidGFyZ2V0XCI6NDUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlMgS29yZWFcIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0NixcbiAgICAgIFwidGFyZ2V0XCI6NDcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlRoYWlsYW5kXCIsXG4gICAgICAgIFwiVmlldG5hbVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ4LFxuICAgICAgXCJ0YXJnZXRcIjo1NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIk1vcm9jY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OCxcbiAgICAgIFwidGFyZ2V0XCI6NjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDgsXG4gICAgICBcInRhcmdldFwiOjU4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OSxcbiAgICAgIFwidGFyZ2V0XCI6NTAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIkJvdHN3YW5hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjYwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OSxcbiAgICAgIFwidGFyZ2V0XCI6NjQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTAsXG4gICAgICBcInRhcmdldFwiOjYwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUwLFxuICAgICAgXCJ0YXJnZXRcIjo2NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUxLFxuICAgICAgXCJ0YXJnZXRcIjo1NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTEsXG4gICAgICBcInRhcmdldFwiOjY0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDYW1lcm9vblwiLFxuICAgICAgICBcIlphaXJlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTIsXG4gICAgICBcInRhcmdldFwiOjYxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTIsXG4gICAgICBcInRhcmdldFwiOjU5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MyxcbiAgICAgIFwidGFyZ2V0XCI6NjMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MyxcbiAgICAgIFwidGFyZ2V0XCI6NTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl2b3J5IENvYXN0XCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU0LFxuICAgICAgXCJ0YXJnZXRcIjo1OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTQsXG4gICAgICBcInRhcmdldFwiOjU3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJLZW55YVwiLFxuICAgICAgICBcIlNFIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU1LFxuICAgICAgXCJ0YXJnZXRcIjo2MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTW9yb2Njb1wiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTYsXG4gICAgICBcInRhcmdldFwiOjU4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOaWdlcmlhXCIsXG4gICAgICAgIFwiU2FoYXJhbiBTdGF0ZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NyxcbiAgICAgIFwidGFyZ2V0XCI6NjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlNFIEFmcmljYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjQsXG4gICAgICBcInRhcmdldFwiOjY1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJaYWlyZVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjcyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NixcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NixcbiAgICAgIFwidGFyZ2V0XCI6NzUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJQYW5hbWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NyxcbiAgICAgIFwidGFyZ2V0XCI6NzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY3LFxuICAgICAgXCJ0YXJnZXRcIjo3NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3ViYVwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY4LFxuICAgICAgXCJ0YXJnZXRcIjo3MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRG9taW5pY2FuIFJlcFwiLFxuICAgICAgICBcIkhhaXRpXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjksXG4gICAgICBcInRhcmdldFwiOjcyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjksXG4gICAgICBcInRhcmdldFwiOjcwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFbCBTYWx2YWRvclwiLFxuICAgICAgICBcIkd1YXRlbWFsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcwLFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MCxcbiAgICAgIFwidGFyZ2V0XCI6NzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcyLFxuICAgICAgXCJ0YXJnZXRcIjo3NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSG9uZHVyYXNcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NSxcbiAgICAgIFwidGFyZ2V0XCI6ODAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlBhbmFtYVwiLFxuICAgICAgICBcIkNvbHVtYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NixcbiAgICAgIFwidGFyZ2V0XCI6NzksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIkNoaWxlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzYsXG4gICAgICBcInRhcmdldFwiOjgyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc2LFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc3LFxuICAgICAgXCJ0YXJnZXRcIjo4MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzcsXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb2xpdmlhXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc4LFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc4LFxuICAgICAgXCJ0YXJnZXRcIjo4NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnJhemlsXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzksXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDaGlsZVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MCxcbiAgICAgIFwidGFyZ2V0XCI6ODEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiRWN1YWRvclwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgwLFxuICAgICAgXCJ0YXJnZXRcIjo4NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MSxcbiAgICAgIFwidGFyZ2V0XCI6ODMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVjdWFkb3JcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODIsXG4gICAgICBcInRhcmdldFwiOjg0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJQYXJhZ3VheVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH1cbiAgXVxufVxuIiwiUiA9IFJlYWN0LkRPTVxuUkNURyA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXBcbnVwZGF0ZSA9IFJlYWN0LmFkZG9ucy51cGRhdGVcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG4kID0gWmVwdG9cblxuY2FyZHNEYXRhID0gcmVxdWlyZSgnLi4vYXBwL2RhdGEvY2FyZHMuanNvbicpXG5cblxuIyBBZGQgZnVuY3Rpb24gdG8gWmVwdG9cbiQuZ2V0U2NyaXB0ID0gKHNyYywgZnVuYykgLT5cbiAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LmFzeW5jID0gXCJhc3luY1wiXG4gIHNjcmlwdC5zcmMgPSBzcmNcbiAgaWYgZnVuY1xuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkIHNjcmlwdFxuXG5cbmxpYnMgPSByZXF1aXJlICcuL2xpYnMnXG5wYWdlcyA9IHJlcXVpcmUgJy4vcGFnZXMnXG52aWV3cyA9IHJlcXVpcmUgJy4vdmlld3MnXG5cbnJvdXRlciA9IHJlcXVpcmUgJy4vcm91dGVyJ1xuXG5Ud2lTdHJ1ZyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIG1peGluczogW3JvdXRlcl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgbWVudUFjdGl2ZTpudWxsXG4gICAgdmlldzoge31cbiAgICBzbGlkZUluOiB0cnVlXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAoKS0+XG4gICAgJCgnI3BsYWNlaG9sZGVyJykuaGlkZSgpXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogLT5cbiAgICAkc2xpZGVJbiA9ICQoQHJlZnMuc2xpZGVJbi5nZXRET01Ob2RlKCkpXG4gICAgJHNsaWRlSW4ucmVtb3ZlQ2xhc3MgJ3NsaWRlSW4taW4nXG4gICAgIyRtYWluVmlldyA9ICQoQHJlZnMubWFpblZpZXcuZ2V0RE9NTm9kZSgpKVxuICAgICMkbWFpblZpZXcucmVtb3ZlQ2xhc3MgJ21haW5WaWV3LW91dCdcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+IEBzbGlkZUluKClcblxuICBzbGlkZUluOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUuc2xpZGVJblxuICAgICAgcmV0dXJuXG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICRzbGlkZUluLmFkZENsYXNzKCdzbGlkZUluLWluJylcbiAgICAsIDEwXG5cblxuICByZW5kZXI6IC0+XG4gICAgIyBJZiB0aGUgcm91dGVyIGhhc24ndCBraWNrZWQgaW4sIGRvIG5vdGhpbmdcbiAgICBpZiBub3QgQHN0YXRlPy52aWV3XG4gICAgICBtYWluVmlldyA9IFIucCBjbGFzc05hbWU6ICdsZWFkJywgJ1R3aVN0cnVnIGlzIGxvYWRpbmcuLi4nXG4gICAgZWxzZVxuICAgICAgbWFpblZpZXcgPSBzd2l0Y2ggQHN0YXRlLnZpZXcubmFtZVxuICAgICAgICB3aGVuICdob21lJyB0aGVuIHBhZ2VzLkhvbWVcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY2FyZCcgdGhlbiBwYWdlcy5DYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnY2FyZHMnIHRoZW4gcGFnZXMuQ2FyZHNcbiAgICAgICAgICBjYXJkczogQHByb3BzLmNhcmRzXG4gICAgICAgICAgc3RhdGU6IEBzdGF0ZS52aWV3LmRhdGEuc3RhdGVcbiAgICAgICAgd2hlbiAnY291bnRyaWVzJyB0aGVuIHBhZ2VzLkNvdW50cmllcygpXG4gICAgICAgICN3aGVuICdib2FyZCcgdGhlbiByZXR1cm4gQm9hcmRQaWNWaWV3KClcbiAgICAgICAgd2hlbiAnYm9hcmQnIHRoZW4gcGFnZXMuQm9hcmQgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdhYm91dCcgdGhlbiBwYWdlcy5BYm91dCgpXG4gICAgICAgIHdoZW4gJ3dob29wcycgdGhlbiBwYWdlcy5XaG9vcHMoKVxuXG4gICAgbWFpblZpZXdDbGFzcyA9IGN4XG4gICAgICAnY29udGFpbmVyJzogQHN0YXRlLnZpZXcubmFtZSAhPSAnYm9hcmQnICMgQm9hcmQgbmVlZHMgdG8gaGF2ZSBpdHMgb3duIGNvbnRhaW5lclxuICAgICAgJ3NsaWRlSW4nOiBAc3RhdGUuc2xpZGVJblxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIHZpZXdzLk5hdiBrZXk6J25hdicsIGFjdGl2ZTogQHN0YXRlLm1lbnVBY3RpdmVcbiAgICAgIFIuZGl2IGtleTonbWFpbnZpZXcnLCByZWY6ICdzbGlkZUluJywgY2xhc3NOYW1lOiBtYWluVmlld0NsYXNzLCBtYWluVmlld1xuICAgICAgdmlld3MuRm9vdGVyIGtleTonZm9vdGVyJ1xuICAgIF1cbiAgICBcblxuIyBBZGQga2V5cyB0byBjYXJkc1xuYWRkUmVhY3RLZXkgPSAoZWwpLT5cbiAgZWwua2V5ID0gXCJyay0je2VsLmlkfVwiXG4gIGVsXG5cblJlYWN0LnJlbmRlckNvbXBvbmVudCBUd2lTdHJ1Zyh7Y2FyZHM6IGNhcmRzRGF0YS5tYXAoYWRkUmVhY3RLZXkpfSksXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdhcHAnXG4iLCJTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuL1N0YXRlSGlzdG9yeSdcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi9zdXBlcnBvd2VyVG9JbmRleCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4vc3RhdGVFbmNvZGVyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJvYXJkU3RhdGVIaXN0b3J5IGV4dGVuZHMgU3RhdGVIaXN0b3J5XG4gIGFkZDogKHN0YXRlLCBtZXRhKS0+XG4gICAgIyBJZiBpdCdzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBwcmV2aW91cyBlbnRyeSwgZG9uJ3QgdXBkYXRlIHRoZSBoaXN0b3J5XG4gICAgIyBUaGlzIGlzIHNvIHdlIGNhbiBiYXRjaCB0aGUgY2hhbmdlcyBmb3IgZGlzcGxheVxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICBpZiBub3QgY3VyP1xuICAgICAgcmV0dXJuIHN1cGVyIHN0YXRlLCBtZXRhXG5cbiAgICBubSA9IF8uY2xvbmVEZWVwIG1ldGFcbiAgICBucyA9IF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgY20gPSBjdXIubWV0YVxuICAgIGNzID0gY3VyLnN0YXRlXG4gICBcbiAgICAjIFNldCBpcCBkZWx0YSB0byBiZSBhbiBhcnJheVxuICAgIGlmIG1ldGEudHlwZSA9PSAnaXAnXG4gICAgICB1c2EgPSBpZiBubS5zaWRlID09ICd1c2EnIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICB1c3NyID0gaWYgbm0uc2lkZSA9PSAndXNzcicgdGhlbiBubS5kZWx0YSBlbHNlIDBcbiAgICAgIG5tLmRlbHRhID0gW3VzYSwgdXNzcl1cblxuXG4gICAgaWYgbm0udHlwZSA9PSBjbS50eXBlIGFuZCBucy5nYW1lLnJvdW5kID09IGNzLmdhbWUucm91bmRcbiAgICAgIHNpZGVTYW1lID0gaWYgbm0uaWQgPT0gJ3Njb3JlJyB0aGVuIHRydWUgZWxzZSBubS5zaWRlID09IGNtLnNpZGVcbiAgICAgIGlkU2FtZSA9IG5tLmlkID09IGNtLmlkXG5cbiAgICAgIHR5cGVJcFNhbWUgPSBubS50eXBlID09ICdpcCcgYW5kIG5tLmNvdW50cnkuaWQgPT0gY20uY291bnRyeS5pZFxuICAgICAgdHlwZVZhbFNhbWUgPSBubS50eXBlID09ICd2YWwnIGFuZCBubS5pZCAhPSAndHVybicgYW5kXG4gICAgICBubS5pZCAhPSAncm91bmQnIGFuZCBzaWRlU2FtZSBhbmQgaWRTYW1lXG5cbiAgICAgIGlmIHR5cGVJcFNhbWUgb3IgdHlwZVZhbFNhbWVcbiAgICAgICAgcmV0dXJuIEBtZXJnZVdpdGhDdXJyZW50IG5zLCBubVxuXG4gICAgc3VwZXIgbnMsIG5tXG5cblxuICBtZXJnZVdpdGhDdXJyZW50OiAoc3RhdGUsbWV0YSktPlxuICAgIGMgPSBfLmNsb25lRGVlcCBAZ2V0Q3VycmVudCgpXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgY20gPSBjLm1ldGFcbiAgICBzd2l0Y2ggY20udHlwZVxuICAgICAgd2hlbiAnaXAnXG4gICAgICAgIG5tLmRlbHRhWzBdICs9IGNtLmRlbHRhWzBdXG4gICAgICAgIG5tLmRlbHRhWzFdICs9IGNtLmRlbHRhWzFdXG4gICAgICAgIG5tLnNpZGUgPSAnYm90aCdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNzcidcbiAgICAgICAgaWYgbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNhJ1xuICAgICAgICBpZiBubS5kZWx0YVswXSA9PSBubS5kZWx0YVsxXSA9PSAwXG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgICB3aGVuICd2YWwnXG4gICAgICAgIG5tLm9sZCA9IGNtLm9sZFxuICAgICAgICBpZiBubS5vbGQgPT0gbm0ubmV3XG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBpZiBwb3AgPT0gdHJ1ZVxuICAgICAgQHN0YXRlcy5wb3AoKVxuICAgICAgQGN1cnJlbnQtLVxuICAgICAgaWYoQGxhdGVzdCA+IEBjdXJyZW50KVxuICAgICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIGVsc2VcbiAgICAgIEBzdGF0ZXNbQGN1cnJlbnRdID1cbiAgICAgICAgbWV0YTogbm1cbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICBAc2F2ZSgpXG4gICAgQGVtaXQgJ21lcmdlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1cGRhdGUnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ2NoYW5nZSdcblxuXG4gICMgVHVybiBzdGF0ZSBpbnRvIGEgbWluaW1hbCByZXByZXNlbnRhdGlvblxuICBlbmNvZGVDdXJyZW50OiAoKS0+XG4gICAgc3RhdGVFbmNvZGVyLmVuY29kZSBAZ2V0Q3VycmVudCgpXG4gICAgXG4iLCJjbGFzcyBNaWNyb0V2ZW50Q2xhc3NcbiAgX2luaXQ6LT4gQF9saXN0biBvciBAX2xpc3RuID0ge31cbiAgX2NyZWF0ZTooZSktPiBAX2luaXQoKVtlXSBvciAgQF9pbml0KClbZV0gPSBbXVxuICBvbjooZSwgZiktPiAoQF9jcmVhdGUgZSkucHVzaCBmXG4gIG9mZjooZSwgZiktPiAodC5zcGxpY2UgKHQuaW5kZXhPZiBmKSwgMSkgaWYgKHQgPSBAX2luaXQoKVtlXSk/XG4gIG9uY2U6KGUsIGYpLT4gQG9uIGUsICh0ID0gPT4gKEBvZmYgZSwgdCkgJiYgZi5hcHBseSBALCBhcmd1bWVudHMpXG4gIGVtaXQ6KGUsIHIuLi4pLT4gbC5hcHBseSBALCByIGZvciBsIGluIHQgaWYgKHQgPSBAX2luaXQoKVtlXSk/OyAwXG4gIEBtaXhpbj0odCktPiB0OjpbcF0gPSBAOjpbcF0gZm9yIHAgb2YgQDo6OyAwXG5cblxubW9kdWxlLmV4cG9ydHMgPSBNaWNyb0V2ZW50Q2xhc3NcbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vTWljcm9FdmVudENsYXNzJ1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBNaWNyb0V2ZW50Q2xhc3NcbiAgIyBAaWQgaXMgdXNlZCBmb3IgcGVyc2lzdGFuY2VcbiAgY29uc3RydWN0b3I6IChvcHRzKS0+XG4gICAgI18uYXNzaWduIHRoaXMsIE1pY3JvRXZlbnRcbiAgICBAc3RhdGVzID0gW11cbiAgICBAc3RhZ2VkID0gW11cbiAgICBAbGF0ZXN0ID0gbnVsbFxuICAgIEBjdXJyZW50ID0gbnVsbFxuICAgIEBzaG93ID0gZmFsc2VcbiAgICBAaWQgPSBvcHRzLmlkXG4gICAgQHN0YXRlc1RvU2F2ZSA9IDUwXG4gIFxuICBzYXZlOiAtPlxuICAgIHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UgMCwgQHN0YXRlc1RvU2F2ZVxuICAgIFxuICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeSBzdGF0ZXNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSBAaWQsIGpzb25cblxuICBsb2FkOiAtPlxuICAgIHN0YXRlcyA9IEpTT04ucGFyc2UgbG9jYWxTdG9yYWdlLmdldEl0ZW0oQGlkKVxuICAgIGlmIHN0YXRlcyBhbmQgXy5pc0FycmF5IHN0YXRlc1xuICAgICAgQHN0YXRlcyA9IHN0YXRlc1xuICAgICAgQGN1cnJlbnQgPSBzdGF0ZXMubGVuZ3RoIC0gMVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICAgIEBlbWl0ICdsb2FkJ1xuICAgICAgQGVtaXQgJ3VwZGF0ZSdcbiAgICAgIHJldHVybiBzdGF0ZXNcblxuICBhZGQ6IChzdGF0ZSwgbWV0YT17fSktPlxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcblxuICAgIGlmIG5vdCBAY3VycmVudD9cbiAgICAgIEBjdXJyZW50ID0gMFxuICAgIGVsc2VcbiAgICAgIEBjdXJyZW50KytcblxuICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgbmV3U3RhdGUgPVxuICAgICAgc3RhdGU6IF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgICBtZXRhOiBfLmNsb25lRGVlcCBtZXRhXG5cbiAgICBAc3RhdGVzW0BjdXJyZW50XSA9IG5ld1N0YXRlXG5cbiAgICBAc2F2ZSgpXG5cbiAgICBAZW1pdCAnYWRkJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBuZXdTdGF0ZSwgJ1lFQUgnXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgXG4gIHVuZG86ICgpLT5cbiAgICBpZiBAY3VycmVudCA+IDBcbiAgICAgIEBjdXJyZW50LS1cbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndW5kbydcbiAgICBAZW1pdCAndXBkYXRlJywgc3RhdGVcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICAgIHN0YXRlXG4gIFxuICByZWRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPCBAbGF0ZXN0XG4gICAgICBAY3VycmVudCsrXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3JlZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuXG4gIGdvVG86IChpbmRleCktPlxuICAgIEBjdXJyZW50ID0gaW5kZXhcbiAgICBAZW1pdCAnZ29UbycsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cbiAgZ2V0OiAoaW5kZXgpLT5cbiAgICBfLmNsb25lRGVlcCBAc3RhdGVzW2luZGV4XVxuXG4gIGdldEN1cnJlbnQ6ICgpLT5cbiAgICBAZ2V0KEBjdXJyZW50KVxuXG4gIGdldFByZXY6IC0+XG4gICAgcHJldiA9IEBjdXJyZW50IC0gMVxuICAgIGlmIHByZXYgPCAwIHRoZW4gcHJldiA9IDBcbiAgICByZXR1cm4gQGdldChwcmV2KVxuXG4gIHRvZ2dsZVZpc2libGU6IChmb3JjZSwgc2hvd1RlbXA9ZmFsc2UpLT5cbiAgICBjbGVhclRpbWVvdXQgQHNob3dUaGVuSGlkZVRpbWVvdXRcbiAgICBAc2hvd1RlbXAgPSBzaG93VGVtcFxuICAgIEBzaG93ID0gaWYgZm9yY2U/IHRoZW4gZm9yY2UgZWxzZSAhQHNob3dcbiAgICBAZW1pdCAndG9nZ2xlVmlzaWJsZScsIEBzaG93XG4gICAgQGVtaXQgJ3VwZGF0ZSdcblxuICBzaG93VGhlbkhpZGU6ICh0aW1lID0gMTAwMCktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIGlmIG5vdCBAc2hvd1xuICAgICAgQHRvZ2dsZVZpc2libGUgdHJ1ZSwgdHJ1ZVxuICAgIGlmIEBzaG93VGVtcFxuICAgICAgQHNob3dUaGVuSGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0IEB0b2dnbGVWaXNpYmxlLmJpbmQodGhpcywgZmFsc2UpLCB0aW1lXG5cbiAgaGlkZTogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSBmYWxzZVxuXG4gIHNob3c6IC0+XG4gICAgQHRvZ2dsZVZpc2libGUgdHJ1ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSGlzdG9yeVxuIiwiY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSAocHJvcHMpIC0+XG4gIG93bmVyQ2xhc3MgPSBcIm93bmVyLSN7cHJvcHMub3duZXJ9XCJcbiAgY2xhc3NlcyA9IGN4XG4gICAgJ2FzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FzaWEgU2NvcmluZydcbiAgICAnZXVyb3BlU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdFdXJvcGUgU2NvcmluZydcbiAgICAnbWlkZGxlRWFzdFNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnTWlkZGxlIEVhc3QgU2NvcmluZydcbiAgICAnY2VudHJhbEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0NlbnRyYWwgQW1lcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aGVhc3RBc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aGVhc3QgQXNpYSBTY29yaW5nKidcbiAgICAnYWZyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBZnJpY2EgU2NvcmluZydcbiAgICAnc291dGhBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ29uZ29pbmcnOiBwcm9wcy5vbmdvaW5nXG5cbiAgb3duZXJDbGFzcyArICcgJyArIGNsYXNzZXNcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gZWwgaWYgZWxcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsLGksYXJyKS0+IGFyci5pbmRleE9mKGVsKSA9PSBpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiAxIDw9IGVsIDw9IDExMFxuIiwibW9kdWxlLmV4cG9ydHMgPVxuICB0dXJuOiAodmFsKS0+XG4gICAgc3dpdGNoIHZhbFxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIHZhbFxuICByb3VuZDogKHZhbCktPlxuICAgIGlmIHZhbCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gIFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCwgb3B0KS0+XG4gIHN3aXRjaCBpZFxuICAgIHdoZW4gJ3R1cm4nXG4gICAgICBzdGFydCA9ICdTJ1xuICAgICAgZW5kID0gJ0UnXG4gICAgICBpZiBvcHQgPT0gJ2xvbmcnXG4gICAgICAgIHN0YXJ0ID0gJ05ldyBHYW1lJ1xuICAgICAgICBlbmQgPSAnR2FtZSBFbmQnXG4gICAgICBzd2l0Y2ggdmFsXG4gICAgICAgIHdoZW4gMCB0aGVuIHN0YXJ0XG4gICAgICAgIHdoZW4gMTEgdGhlbiBlbmRcbiAgICAgICAgZWxzZSB2YWxcbiAgICB3aGVuICdyb3VuZCdcbiAgICAgIGggPSBpZiBvcHQgPT0gJ2xvbmcnIHRoZW4gJ0hlYWRsaW5lJyBlbHNlICdIJ1xuICAgICAgaWYgdmFsID09IDAgdGhlbiBoIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gICAgd2hlbiAnc2NvcmUnXG4gICAgICBNYXRoLmFicyB2YWxcbiAgICBlbHNlXG4gICAgICB2YWxcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT4gaWYgbnVtID4gMCB0aGVuIFwiKyN7bnVtfVwiIGVsc2UgbnVtXG4iLCIjIEVuY29kZS9kZWNvZGUgbnVtYmVycyBpbnRvIHNpbmdsZS1jaGFyIHJlcHJlc2VudGF0aW9uc1xuIyAwLTM1ICAtPiAwLDEsMi4uYSxiLGMuLnpcbiMgMzYtNjEgLT4gQSxCLEMuLi5cbm1vZHVsZS5leHBvcnRzID1cbiAgZW5jb2RlOiAobiktPlxuICAgIGlmIG4gPCAzNiB0aGVuIG91dCA9IG4udG9TdHJpbmcoMzYpIGVsc2UgU3RyaW5nLmZyb21DaGFyQ29kZSBuICsgMjlcblxuICBkZWNvZGU6IChjID0gJzAnKS0+XG4gICAgY29kZSA9IGMuY2hhckNvZGVBdCAwXG4gICAgIyBDYWxjdWxhdGUgb2Zmc2V0IGZyb20gY2hhcmNvZGUgdG8gdmFsdWVcbiAgICBvZmZzZXQgPSBzd2l0Y2hcbiAgICAgICMgMC05XG4gICAgICB3aGVuIDQ4IDw9IGNvZGUgPD0gNTcgdGhlbiA0OFxuICAgICAgIyAxMC0zNVxuICAgICAgd2hlbiA5NyA8PSBjb2RlIDw9IDEyMiB0aGVuIDg3XG4gICAgICAjIDM2LTYxXG4gICAgICB3aGVuIDY1IDw9IGNvZGUgPD0gOTAgdGhlbiAyOVxuXG4gICAgY29kZSAtIG9mZnNldFxuIiwiIyBIYXNoZWQgcXNcbiMgSGFuZGxlcyBzdHJpbmdzIGFuZCBhcnJheXNcbiMgQW55dGhpbmcgd2l0aCBhIGNvbW1hIHdpbGwgYmUgcGFyc2VkIGFzIGFuIGFycmF5XG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1lcmdlOiAob2JqKS0+XG5cbiAgZ2V0OiAoZmllbGQpLT5cbiAgXG4gIHNldDogKGZpZWxkLCB2YWwpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcXNPYmpbZmllbGRdID0gdmFsXG4gICAgQHNldFFTIEB0b1FTKHFzT2JqKVxuXG4gIGRlbGV0ZTogKGZpZWxkKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHJldHVybiBpZiBub3QgcXNPYmo/XG4gICAgZGVsZXRlIHFzT2JqW2ZpZWxkXVxuICAgIEBzZXRRUyBAdG9RUyBxc09ialxuXG4gIGVuY29kZUNoYXJzSW46IFsnPScsJyYnXVxuXG4gIGVuY29kZUNoYXJzT3V0OlsnJTNEJywnJTI2J11cblxuICBlbmNvZGU6IChvYmopLT5cbiAgICBpZiBfLmlzQXJyYXkgb2JqXG4gICAgICBvYmogPSBvYmouam9pbignLCcpXG4gICAgb2JqLnJlcGxhY2UoQGVuY29kZUNoYXJzSW4sIEBlbmNvZGVDaGFyc091dClcblxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBzdHIgPSBzdHIucmVwbGFjZShAZW5jb2RlQ2hhcnNPdXQsIEBlbmNvZGVDaGFyc0luKVxuICAgIGlmIHN0ci5pbmRleE9mKCcsJykgIT0gLTFcbiAgICAgIHN0ciA9IHN0ci5zcGxpdCgnLCcpXG4gICAgc3RyXG5cblxuICB0b09iajogKHFzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKT9bMV0pLT5cbiAgICBpZiBub3QgcXNcbiAgICAgIHJldHVyblxuICAgIG91dCA9IHt9XG4gICAgcGFpcnMgPSBxcy5zcGxpdCgnJicpXG4gICAgcGFpcnM/LmZvckVhY2ggKHBhaXIpPT5cbiAgICAgIGt2QXJyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBvdXRbQGRlY29kZShrdkFyclswXSldID0gQGRlY29kZShrdkFyclsxXSlcbiAgICBvdXRcblxuICB0b1FTOiAob2JqKS0+XG4gICAgcGFpcnMgPSBbXVxuICAgIGZvciBvd24gayx2IG9mIG9ialxuICAgICAgcGFpcnMucHVzaCBcIiN7QGVuY29kZShrKX09I3tAZW5jb2RlKHYpfVwiXG4gICAgcGFpcnMuam9pbignJicpXG4gICAgICAgXG4gIHNldFFTOiAocXMpLT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF0gKyAnPycgKyBxc1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCktPlxuICByYW5nZXMgPVxuICAgIHNjb3JlOiBbLTIwLCAyMF1cbiAgICB0dXJuOiBbMCwgMTFdXG4gICAgcm91bmQ6IFswLCAxNl1cbiAgICBkZWZjb246IFsxLCA1XVxuICAgIG1pbG9wczogWzAsIDVdXG4gICAgc3BhY2U6IFswLCA4XVxuXG4gIHJhbmdlID0gcmFuZ2VzW2lkXVxuXG4gIGlmIHZhbCA8IHJhbmdlWzBdXG4gICAgcmV0dXJuIHJhbmdlWzFdXG4gIGlmIHZhbCA+IHJhbmdlWzFdXG4gICAgcmV0dXJuIHJhbmdlWzBdXG4gIHZhbFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhcmdzLi4uKS0+XG4gIGRvY3VtZW50LnRpdGxlID0gYXJncy5qb2luKCcgfCAnKSArICcgLSBUd2lTdHJ1ZydcbiIsIm1vZHVsZS5leHBvcnRzID0gKGRpciktPiBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgaWYgbnVtID4gMFxuICAgIHJldHVybiAnKydcbiAgaWYgbnVtIDwgMFxuICAgIHJldHVybiAnLSdcbiAgcmV0dXJuICcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhLGIpLT4gYS1iXG4iLCJudW1Ub0NoYXIgPSByZXF1aXJlICcuL251bVRvQ2hhcidcblxuIyBUdXJuIGEgZ2FtZSBzdGF0ZSBvYmplY3QgaW50byBhIHN0cmluZywgdmFsdWVzIGRlbGltaXRlZCBieSBpbmRleCBpbiB0aGUgc3RyaW5nXG4jXG4jIEJ5dGVzICAgICBJdGVtc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAwLTcgICAgICAgQm9hcmQgc3RhdGU6ICBTY29yZSwgRGVmY29uLCBUdXJuLCBSb3VuZCxcbiMgICAgICAgICAgICAgICAgICAgICAgICAgTU8gVVNBLCBNTyBVU1NSLCBTcGFjZSBVU0EsIFNwYWNlIFVTU1JcbiMgOC0xNzYgICAgIENvdW50cnkgSVBzLCAyIGJ5dGVzIGVhY2gsIHNlcXVlbnRpYWxseSBieSBpZFxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChzdGF0ZU9iaiktPlxuICAgIHN0YXRlID0gc3RhdGVPYmouc3RhdGVcbiAgICBnYW1lID0gc3RhdGUuZ2FtZVxuICAgIGlwcyA9IHN0YXRlLmlwc1xuXG4gICAgIyBTY29yZSBpcyBmcm9tIC0yMCB0byArMjAsIGJ1dCB0aGlzIGVuY29kZXIgaXMgcG9zaXRpdmUgaW50ZWdlcnMgb25seVxuICAgIGJvYXJkID0gW1xuICAgICAgZ2FtZS5zY29yZSArIDIwLCBnYW1lLmRlZmNvbiwgZ2FtZS50dXJuLCBnYW1lLnJvdW5kLFxuICAgICAgZ2FtZS5taWxvcHNbMF0sIGdhbWUubWlsb3BzWzFdLCBnYW1lLnNwYWNlWzBdLCBnYW1lLnNwYWNlWzFdXG4gICAgXVxuXG4gICAgIyBGaXJzdCAyIGlwcyBhcmUgdGhlIHN1cGVycG93ZXJzIC0gcHJldHR5IHVzZWxlc3MsIHNob3VsZCBjaGFuZ2UgaW4gZnV0dXJlXG4gICAgYm9hcmQuY29uY2F0IF8uZmxhdHRlbiBpcHMuc2xpY2UoMilcbiAgICAgIC5tYXAgbnVtVG9DaGFyLmVuY29kZVxuICAgICAgLmpvaW4gJydcbiAgICAgIFxuICBkZWNvZGU6IChzdHIpLT5cbiAgICBhcnIgPSBzdHIuc3BsaXQoJycpLm1hcCAoZWwpLT4gbnVtVG9DaGFyLmRlY29kZSBlbFxuICAgIGJvYXJkQXJyID0gYXJyLnNsaWNlKDAsOClcbiAgICBpcEFyciA9IGFyci5zbGljZSg4KVxuXG4gICAgW3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtb3VzYSwgbW91c3NyLCBzcHVzYSwgc3B1c3NyXSA9IGJvYXJkQXJyXG4gICAgbWlsb3BzID0gW21vdXNhLCBtb3Vzc3JdXG4gICAgc3BhY2UgPSBbc3B1c2EsIHNwdXNzcl1cbiAgICBzY29yZSAtPSAyMFxuICAgIGdhbWUgPSB7c2NvcmUsIGRlZmNvbiwgdHVybiwgcm91bmQsIG1pbG9wcywgc3BhY2V9XG5cbiAgICBpcHMgPSBbXVxuICAgIGZvciBpcCwgaW5kZXggaW4gaXBBcnJcbiAgICAgIGlwc0luZGV4ID0gTWF0aC5mbG9vciBpbmRleC8yXG4gICAgICBzaWRlSW5kZXggPSBpbmRleCAlIDJcbiAgICAgIGlmIHNpZGVJbmRleCA9PSAwXG4gICAgICAgIGlwc1tpcHNJbmRleF0gPSBbaXBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwc1tpcHNJbmRleF1bc2lkZUluZGV4XSA9IGlwXG5cbiAgICAjIEFkZCB0aGUgc3VwZXJwb3dlciBJUHMgYmFjayBpblxuICAgIGlwcy51bnNoaWZ0IFswLDBdLCBbMCwwXVxuXG4gICAge2dhbWUsIGlwc31cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAocG93ZXIpLT4gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyKS0+IHN0ci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lTdHJ1Z1wiXG4gICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHNyYzogXCIvaW1hZ2VzL3RzYm94LmpwZ1wiXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgY3JlYXRlZCBhcyBhIGNhcmQgcmVmZXJlbmNlIGZvciBcIlxuICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIixcbiAgICAgICAgICBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgXCIuIEl0IGhhcyBzaW5jZSBleHBhbmRlZCB0byBpbmNsdWRlIGEgcGxheWFibGUgdmVyc2lvbiBvZiB0aGUgYm9hcmQgZm9yXG4gICAgICAgIGxvY2FsIGdhbWVzIHdpdGhvdXQgdGFraW5nIHVwIGFzIG11Y2ggdGFibGUgc3BhY2UuXCJcbiAgICAgIF1cbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIkZvciBtb3JlIGluLWRlcHRoIHN0cmF0ZWd5LCBnbyB0byB0aGUgZXhjZWxsZW50IFwiXG4gICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgXCIgc2l0ZS4gSXQgaGFzIHRvbnMgb2YgZ3JlYXQgY29udGVudCBhbmRcbiAgICAgICAgYW5hbHlzaXMgYXZhaWxhYmxlLCBpbmNsdWRpbmcgZGlzY3Vzc2lvbnMgYWJvdXQgbmVhcmx5IGV2ZXJ5IGNhcmQuXG4gICAgICAgIFBsZWFzZSBzdXBwb3J0IFR3aWxpZ2h0IFN0cmF0ZWd5IGFuZCBpdHMgYXV0aG9yLCBcIlxuICAgICAgICBSLmVtIHt9LCBcInRoZW9yeVwiXG4gICAgICAgIFwiLCBieSBwdXJjaGFzaW5nIFR3aWxpZ2h0IFN0cnVnZ2xlIGZyb20gQW1hem9uIG9uIHRoZSBzaWRlYmFyIG9mIGhpc1xuICAgICAgICBzaXRlLCBvciBieSBwYXlpbmcgc29tZSBtb25leSBmb3IgdGhlIGFzc29jaWF0ZWQgXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9sZWFucHViLmNvbS90d2lsaWdodHN0cmF0ZWd5XCIsIFwiZS1ib29rXCJcbiAgICAgICAgXCIuIEl0J3MgVHdpbGlnaHQgU3RyYXRlZ3kgaW4gYm9vayBmb3JtIGFuZCBkZXNlcnZlcyB5b3VyIG1vbmV5LlwiXG4gICAgICBdXG4gICAgICBSLnAge30sIFtcbiAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgbWFkZSBieSBcIlxuICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vamp0LmlvL1wiLCBcIkphc29uIFRyaWxsXCJcbiAgICAgICAgXCIuIFNvdXJjZSBhdmFpbGFibGUgb24gXCJcbiAgICAgICAgUi5hIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pqdC90d2lzdHJ1Z1wiLCBcIkdpdGh1YlwiXG4gICAgICAgIFwiLlwiXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnlWaWV3ID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkJ1xuXG5yZWR1Y2VTaG9ydGN1dHMgPSAoYXJyLCBzaG9ydGN1dCktPlxuICBhcnIucHVzaCBSLmR0IHt9LCBzaG9ydGN1dC5rZXlcbiAgYXJyLnB1c2ggUi5kZCB7fSwgc2hvcnRjdXQuZGVzY1xuICBhcnJcblxuXG5Cb2FyZEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBzY3JvbGxUb3A6IC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgd2luZG93LnNjcm9sbFRvIDAsMFxuICAgICwgMFxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgc2hvcnRjdXRzOlxuICAgICAgbGVmdDogW1xuICAgICAgICB7IGtleToncy9TJywgZGVzYzogJ1Njb3JlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2QvRCcsIGRlc2M6ICdEZWZjb24gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonbS9NJywgZGVzYzogJ1VTQSBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonby9PJywgZGVzYzogJ1VTU1IgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3onLCBkZXNjOiAnVW5kbyBhY3Rpb24nIH1cbiAgICAgICAgeyBrZXk6J3knLCBkZXNjOiAnUmVkbyBhY3Rpb24nIH1cbiAgICAgICAgeyBrZXk6J2gnLCBkZXNjOiAnU2hvdy9oaWRlIGFjdGlvbiBoaXN0b3J5JyB9XG4gICAgICBdXG4gICAgICByaWdodDogW1xuICAgICAgICB7IGtleTondC9UJywgZGVzYzogJ1R1cm4gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonci9SJywgZGVzYzogJ1JvdW5kIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3AvUCcsIGRlc2M6ICdVU0EgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidhL0EnLCBkZXNjOiAnVVNTUiBTcGFjZSBSYWNlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2MnLCBkZXNjOiAnUm9sbCBkaWNlJyB9XG4gICAgICBdXG4gICAgICBcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICAgIFIuaDMge30sICdWaXJ0dWFsIFR3aWxpZ2h0IFN0cnVnZ2xlIGJvYXJkJ1xuICAgICAgICAgIFIucCB7fSwgXCJUaGlzIGlzIGEgZnVsbHkgcGxheWFibGUgYm9hcmQgd2l0aCBhIG1vcmVcbiAgICAgICAgICAgIGNvbXBhY3QgbGF5b3V0IHRvIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMsIGxpa2UgYSBDaHJvbWVib29rIG9yIGlQYWQuIEp1c3QgYWRkIGNhcmRzXG4gICAgICAgICAgICBhbmQgeW91J2xsIGJlIGFibGUgdG8gcGxheSBhbnl3aGVyZS4gVGhlIGJvYXJkIGlzbid0IGF3YXJlIG9mIHRoZSBydWxlcywgbm9yIHdpbGxcbiAgICAgICAgICAgIGl0IGRvIGFueXRoaW5nIGF1dG9tYXRpY2FsbHkuIFVzZSBpdCBhcyB5b3Ugd291bGQgYSBwaHlzaWNhbCBjb3B5IG9mIHRoZSBnYW1lLlwiXG4gICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICBcIlRoaXMgZ2FtZSwgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOiBcIiMvYm9hcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgICAgICAgIFIuY29kZSB7fSwgQHByb3BzLmlkXG4gICAgICAgICAgICBcIiwgd2lsbCBiZSBzYXZlZCBpbiB5b3VyIGJyb3dzZXIgYW5kIGNhbiBiZSBib29rbWFya2VkIGFuZCByZXN1bWVkIGF0IGEgbGF0ZXIgdGltZSwgZXZlbiBpZiB5b3UgY2xvc2UgeW91ciBicm93c2VyLiBcIlxuICAgICAgICAgICAgUi5hIG9uQ2xpY2s6IEBzY3JvbGxUb3AsIGhyZWY6JyMvYm9hcmQnLCAnQ2xpY2sgaGVyZSB0byBzdGFydCBhIG5ldyBnYW1lJ1xuICAgICAgICAgICAgJy4nXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgVVJMIGNvbnRhaW5zIHRoZSBjb21wbGV0ZSBzdGF0ZSBvZiB0aGUgYm9hcmQgYW5kIHdpbGxcbiAgICAgICAgICAgIHVwZGF0ZSB3aXRoIGVhY2ggYWN0aW9uIHRha2VuLiBUaGlzIGNhbiBiZSB1c2VkIHRvIHBsYXkgcmVtb3RlbHlcbiAgICAgICAgICAgIHdpdGggc29tZW9uZSBieSBzZW5kaW5nIHRoZSBVUkwgYmFjayBhbmQgZm9ydGguIEZvclxuICAgICAgICAgICAgaW5zdGFuY2UsIGlmIHlvdSB3ZXJlIHRoZSBVU1NSIHN0YXJ0aW5nIGEgbmV3IGdhbWUsIHlvdSB3b3VsZCBwbGFjZSB5b3VyXG4gICAgICAgICAgICBpbml0aWFsIGluZmx1ZW5jZSB0aGVuIGNvcHkgdGhlIFVSTCBhbmQgc2VuZCBpdCB0byB5b3VyIG9wcG9uZW50LiBUaGV5XG4gICAgICAgICAgICB3b3VsZCBnbyB0byB0aGF0IFVSTCwgcGxhY2UgdGhlaXIgaW5mbHVlbmNlIGFuZCBzZW5kIHRoZSBuZXcgVVJMIGJhY2sgdG8geW91LiBMYXRoZXIsIHJpbnNlLCByZXBlYXQuXCJcbiAgICAgICAgICBSLmgzIHt9LCBcIktleWJvYXJkIFNob3J0Y3V0c1wiXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLmxlZnQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBjb2wtbGctNicsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMucmlnaHQsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctNicsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIkluc3RydWN0aW9uc1wiXG4gICAgICAgICAgUi5wIHt9LCBcIlRvIGFkZC9yZW1vdmUgaW5mbHVuY2UgaW4gYSBjb3VudHJ5LCBjbGljayBpbiB0aGUgdG9wL2JvdHRvbSBvZiB0aGUgaW5mbHVlbmNlIHNwYWNlIG9uIHRoZSBkZXNpcmVkIHNpZGUgKFVTQSBvbiBsZWZ0LCBVU1NSIG9uIHJpZ2h0KS5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyB1bmRvL3JlZG8gb25lIG9yIG1vcmUgYWN0aW9ucywgcHJlc3MgWi9ZIG9uZSBvciBtb3JlIHRpbWVzLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIlRoZSBkaWNlIGNhbiBiZSByb2xsZWQgaW5kaXZpZHVhbGx5IGJ5IGNsaWNraW5nIG9uIHRoZW0sIG9yIGFzIGEgcGFpciBieSBjbGlja2luZyBvbiBcXFwiUk9MTCBESUNFXFxcIi5cIlxuICAgICAgICAgIFIucCB7fSwgXCJFYWNoIHN1cGVycG93ZXIgYm94IChVU0EsIFVTU1IpIHNob3dzIHRoZSBudW1iZXIgb2YgY29udHJvbGxlZCBiYXR0bGVncm91bmQgY291bnRyaWVzIG9uIHRvcC4gT24gdGhlIGJvdHRvbSBpdCBzaG93cyB0aGUgbnVtYmVyIG9mIHJlZ2lvbnMgaW4gd2hpY2ggdGhlIHBvd2VyIGhhcyBwcmVzZW5jZSwgZG9taW5hdGlvbiwgYW5kIGNvbnRyb2wuIEZvciBleGFtcGxlLCBpZiB0aGUgVVNTUiBoYWQgXFxcIjQgMiAxXFxcIiwgaXQgd291bGQgbWVhbiB0aGF0IHRoZXkgaGF2ZSBwcmVzZW5jZSBpbiA0IHJlZ2lvbnMsIGRvbWluYXRlIDIsIGFuZCBjb250cm9sIDEuXCJcbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiBcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFZpZXcnXG4gIFxuICBzdGF0ZUhpc3Rvcnk6IG51bGxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQHN0YXRlSGlzdG9yeSA9IG5ldyBCb2FyZFN0YXRlSGlzdG9yeSBpZDogQHByb3BzLmdhbWVJZFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBkZWJ1Z09iajoge31cblxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFZpZXcnLCBbXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeVZpZXdcbiAgICAgICAgc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5XG4gICAgICAgIGtleTogXCJCb2FyZFN0YXRlSGlzdG9yeS0je0Bwcm9wcy5nYW1lSWR9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgQm9hcmQgXy5hc3NpZ24gc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5LCBAcHJvcHNcbiAgICAgICAgQm9hcmRJbmZvIGlkOiBAcHJvcHMuZ2FtZUlkXG4gICAgICAgIFIudGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU6ICdtYXAtcG9zaXRpb24tZGVidWcnXG4gICAgICAgICAgcmVmOidkZWJ1ZydcbiAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoQHN0YXRlLmNvb3JkcywgbnVsbCwgJyAnKVxuICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnXG4gICAgICAgICAgICBoZWlnaHQ6JzYwcmVtJ1xuICAgICAgXVxuICAgIF1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkUGljVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2JvYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyJyxcbiAgICAgICAgUi5oMiB7fSwgJ0JvYXJkJ1xuICAgICAgUi5hIGhyZWY6Jy9pbWFnZXMvdHNib2FyZC5qcGcnLFxuICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdmbHVpZCcsIHNyYzonL2ltYWdlcy90c2JvYXJkLmpwZydcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5tb2R1bGUuZXhwb3J0cyAgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRWaWV3J1xuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcbiAgICBAZ2V0U3RyYXRlZ3koKVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgIHdpbmRvdy5vbmtleXByZXNzID0gbnVsbFxuICAgICQod2luZG93KS5vZmYgJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub2ZmICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT5cbiAgICBAZ2V0U3RyYXRlZ3koKVxuICAgICNAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBmbG9hdGluZ0NhcmQ6IC0+XG4gICAgJGhlYWRlciA9ICQgQHJlZnMuaGVhZGVyLmdldERPTU5vZGUoKVxuICAgICRpbWcgPSAkIEByZWZzLmNhcmRJbWcuZ2V0RE9NTm9kZSgpXG4gICAgJHdpbiA9ICQgd2luZG93XG4gICAgaG8gPSAkaGVhZGVyLm9mZnNldCgpXG4gICAgaXNTY3JvbGxpbmcgPSAkd2luLnNjcm9sbFRvcCgpID4gaG8udG9wICsgaG8uaGVpZ2h0XG4gICAgJGltZy50b2dnbGVDbGFzcyAnY2FyZC1pbWctc2Nyb2xsJywgaXNTY3JvbGxpbmdcbiAgICAkaW1nLmNzcyAncmlnaHQnLCBcIiN7KCR3aW4ud2lkdGgoKSAtIGhvLndpZHRoIC0gMTUpIC8gMn1weFwiXG5cbiAgaGFuZGxlS2V5UHJlc3M6IChldikgLT5cbiAgICAgIGtDID0gZXYua2V5Q29kZVxuICAgICAgaWYga0MgPT0gMTA0IG9yIGtDID09IDcyXG4gICAgICAgIGlkID0gQHByb3BzLnByZXZDYXJkLmlkXG4gICAgICBpZiBrQyA9PSAxMDggb3Iga0MgPT0gNzZcbiAgICAgICAgaWQgPSBAcHJvcHMubmV4dENhcmQuaWRcbiAgICAgIGlmIGlkP1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIiMvY2FyZC8je2lkfVwiXG5cbiAgZ2V0U3RyYXRlZ3k6IC0+XG4gICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBkYXRhLi4uPC9wPidcbiAgICAkLmdldCBcIi9kYXRhL2NhcmRTdHJhdGVneUxpbmtlZC8je2xpYnMuemVyb1BhZChAcHJvcHMuY2FyZC5pZCl9Lmh0bWxcIiwgKGRhdGEpPT5cbiAgICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gZGF0YVxuXG4gIHJlbmRlcjogLT5cbiAgICBjYXJkID0gQHByb3BzLmNhcmRcbiAgICBpbWFnZVVybCA9IFwiL2ltYWdlcy9jYXJkcy8je2xpYnMuemVyb1BhZChjYXJkLmlkKX0uanBnXCJcbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIGNsZWFyZml4JywgcmVmOiAnaGVhZGVyJyxcbiAgICAgICAgUi5oMiBjbGFzc05hbWU6IGxpYnMuY2FyZENsYXNzTmFtZShjYXJkKSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtb3BzJywgaWYgY2FyZC5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBjYXJkLm9wc1xuICAgICAgICAgIFwiI3tjYXJkLnRpdGxlfSBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtaWQnLCBcIiMje2NhcmQuaWR9XCJcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkLW5hdicsIFtcbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMucHJldkNhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtcHJldid9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLnByZXZDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICfil4AgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEgpJ1xuICAgICAgICAgICAgICAnIHByZXYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5uZXh0Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1uZXh0J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMubmV4dENhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgJ25leHQgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEwpJ1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAnIOKWtidcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIFIucCB7Y2xhc3NOYW1lOiAncHVsbC1sZWZ0IGNhcmQtYm9keSd9LCBjYXJkLnRleHRcbiAgICAgIFIuaW1nIGtleTogaW1hZ2VVcmwsIHNyYzogaW1hZ2VVcmwsIGNsYXNzTmFtZTogJ2ltZ1JpZ2h0JywgcmVmOidjYXJkSW1nJ1xuICAgICAgUi5kaXYge2NsYXNzTmFtZTogJ2NhcmQtc3RyYXRlZ3knLCBpZDogJ2NhcmQtc3RyYXRlZ3knfSwgW1xuICAgICAgICBSLmgzIHt9LCBbXG4gICAgICAgICAgJ1N0cmF0ZWdpYyBOb3RlcyBmcm9tJ1xuICAgICAgICAgICcgJ1xuICAgICAgICAgIFIuYSBocmVmOmNhcmQudXJsLCAnVHdpbGlnaHRTdHJhdGVneS5jb20nXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgcmVmOidjYXJkU3RyYXRlZ3knLFxuICAgICAgICAgIFIucCB7fSwgJ0xvYWRpbmcgZGF0YSdcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkNhcmRMaXN0ID0gcmVxdWlyZSAnLi4vdmlld3MvQ2FyZExpc3QnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0NhcmRzVmlldydcbiAgZGVmYXVsdFN0YXRlOiAocHJvcHMpLT5cbiAgICBmaWx0ZXIgPSBwcm9wcz8uc3RhdGU/LmZpbHRlclxuICAgIGZ1bGxUZXh0OiBpZiBmaWx0ZXIgdGhlbiB0cnVlIGVsc2UgZmFsc2VcbiAgICBjYXJkSW1nOiBmYWxzZVxuICAgIGNhcmRGaWx0ZXJJbnB1dDogaWYgZmlsdGVyIHRoZW4gZmlsdGVyLmpvaW4oJyAnKSBlbHNlICcnXG4gICAgc29ydDogJ3N0YWdlJ1xuICAgIGZpbHRlcjogbnVsbFxuICAgIHZpZXc6ICdpbWcnXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5leHRQcm9wcykgLT5cbiAgICBpZiBuZXh0UHJvcHMuc3RhdGU/XG4gICAgICBAc2V0U3RhdGUgbmV4dFByb3BzLnN0YXRlXG4gICAgZWxzZVxuICAgICAgQHNldFN0YXRlIEBkZWZhdWx0U3RhdGUoKVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBfLm1lcmdlIEBkZWZhdWx0U3RhdGUoQHByb3BzKSwgQHByb3BzLnN0YXRlXG5cbiAgZ2V0RmlsdGVySWRzOiAoKSAtPlxuICAgIGlmIEBzdGF0ZT8uZmlsdGVyP1xuICAgICAgZmlsdGVySWRzID0gQHN0YXRlLmZpbHRlci5zb3J0KGxpYnMuc29ydE51bWVyaWNhbClcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclRydXRoeSlcbiAgICAgICAgLmZpbHRlcihsaWJzLmZpbHRlclVuaXF1ZSlcbiAgICBpZiBub3QgZmlsdGVySWRzPyB0aGVuIGZpbHRlcklkcyA9IFtdXG4gICAgcmV0dXJuIGZpbHRlcklkc1xuXG4gICMgSnVzdCBmaWx0ZXJpbmcgYnkgaWQgcmlnaHQgbm93XG4gIGdldEZpbHRlcmVkQ2FyZHM6IC0+XG4gICAgaWYgQHN0YXRlLmZpbHRlcj9cbiAgICAgIHJldHVybiBAcHJvcHMuY2FyZHMuZmlsdGVyIChlbCkgPT5cbiAgICAgICAgaWYgZWwuaWQgaW4gQHN0YXRlLmZpbHRlclxuICAgICAgICAgIHJldHVybiBlbFxuICAgIEBwcm9wcy5jYXJkc1xuICAgICAgICBcblxuICBmaWx0ZXJBbmRTb3J0Q2FyZHM6IC0+XG4gICAgY2FyZHMgPSBAZ2V0RmlsdGVyZWRDYXJkcygpXG4gICAgW3NvcnQsIG9yZGVyXSA9IEBzdGF0ZS5zb3J0LnNwbGl0ICctJ1xuXG4gICAgc29ydFBhcmFtID0gc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ3RleHRsZW4nIHRoZW4gKGVsKSAtPiBlbC50ZXh0Lmxlbmd0aFxuICAgICAgd2hlbiAnc2lkZScgdGhlbiBbJ293bmVyJywnc3RhZ2UnLCdpZCddXG4gICAgICB3aGVuICdvcHMnIHRoZW4gJ29wcydcbiAgICAgIHdoZW4gJ3RpdGxlbGVuJyB0aGVuIChlbCkgLT4gZWwudGl0bGUubGVuZ3RoXG4gICAgICBlbHNlIFsnc3RhZ2UnLCAnaWQnXVxuICAgIGNhcmRzID0gXy5zb3J0QnkgY2FyZHMsIHNvcnRQYXJhbVxuXG4gICAgaWYgb3JkZXIgPT0gJ3JldidcbiAgICAgIGNhcmRzLnJldmVyc2UoKVxuXG4gICAgY2FyZHNcblxuICBncm91cENhcmRzOiAoY2FyZHMgPSBAZmlsdGVyQW5kU29ydENhcmRzKCkpLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIFtjYXJkc11cblxuICAgIHNvcnQgPSBAc3RhdGUuc29ydFxuICAgIGlmIHNvcnQgPT0gJ3NpZGUnXG4gICAgICBzb3J0ID0gJ293bmVyJ1xuICAgIGlmIEBzdGF0ZS5zb3J0XG4gICAgICByZXR1cm4gXy5ncm91cEJ5KGNhcmRzLCBzb3J0KVxuICAgICAgICAgXG5cbiAgaGFuZGxlRnVsbFRleHQ6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBmdWxsVGV4dDogQHJlZnMuZnVsbFRleHQuZ2V0RE9NTm9kZSgpLmNoZWNrZWRcblxuICBoYW5kbGVDYXJkSW1nOiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgY2FyZEltZzogQHJlZnMuY2FyZEltZy5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2U6IC0+XG4gICAgdmFsdWUgPSBAcmVmcy5jYXJkRmlsdGVyLmdldERPTU5vZGUoKS52YWx1ZVxuICAgICMgV0dSIGFkZHMgXCJPcHMgMzogLi4uXCIsIHNvIGRvbid0IHBpY2sgdGhvc2UgdXBcbiAgICBpZHMgPSB2YWx1ZS5tYXRjaCgvXFxkK1teOl18XFxkKyQvZyk/Lm1hcCAoZWwpLT4gcGFyc2VJbnQgZWwsIDEwXG4gICAgaWYgdmFsdWUgPT0gJycgb3Igbm90IGlkcz9cbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmaWx0ZXI6IG51bGxcbiAgICBlbHNlXG4gICAgICBzdGF0ZSA9XG4gICAgICAgIGNhcmRGaWx0ZXJJbnB1dDogdmFsdWVcbiAgICAgICAgZnVsbFRleHQ6IHRydWVcbiAgICAgICAgZmlsdGVyOiBpZHMuc29ydChsaWJzLnNvcnROdW1lcmljYWwpLmZpbHRlcihsaWJzLmZpbHRlclZhbGlkQ2FyZElkcylcblxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gIGhhbmRsZUNhcmRGaWx0ZXJCbHVyOiAtPlxuICAgIGZpbHRlcklkcyA9IEBnZXRGaWx0ZXJJZHMoKVxuXG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6IGZpbHRlcklkcy5qb2luICcgJ1xuXG4gICAgaWYgZmlsdGVySWRzPyBhbmQgZmlsdGVySWRzLmxlbmd0aCA+IDBcbiAgICAgIGxpYnMucXMuc2V0ICdmaWx0ZXInLCBmaWx0ZXJJZHNcbiAgICBlbHNlXG4gICAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDbGVhcjogKCktPlxuICAgIEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJydcbiAgICBAc2V0U3RhdGVcbiAgICAgIGZpbHRlcjpudWxsXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6ICcnXG5cbiAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIHNvcnRHcm91cFRpdGxlOiAoc29ydCA9IEBzdGF0ZS5zb3J0LCB2YWwpLT5cbiAgICB2YWxJbnQgPSBwYXJzZUludCB2YWwsIDEwXG4gICAgc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ29wcydcbiAgICAgICAgcyA9IGlmIHZhbEludCA+IDEgdGhlbiAncycgZWxzZSAnJ1xuICAgICAgICBpZiB2YWxJbnQgPT0gMCB0aGVuICdTY29yaW5nJyBlbHNlIFwiI3t2YWx9IE9wI3tzfVwiXG4gICAgICB3aGVuICdzaWRlJ1xuICAgICAgICBpZiB2YWwgPT0gJ3VzJ1xuICAgICAgICAgICdVU0EnXG4gICAgICAgIGVsc2UgaWYgdmFsID09ICduZXV0cmFsJ1xuICAgICAgICAgICdOZXV0cmFsJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgIHdoZW4gJ3N0YWdlJ1xuICAgICAgICBzd2l0Y2ggdmFsSW50XG4gICAgICAgICAgd2hlbiAxIHRoZW4gJ0Vhcmx5IFdhcidcbiAgICAgICAgICB3aGVuIDIgdGhlbiAnTWlkIFdhcidcbiAgICAgICAgICB3aGVuIDMgdGhlbiAnTGF0ZSB3YXInXG5cbiAgaGFuZGxlVmlld0NsaWNrOiAodmlldyktPlxuICAgIEBzZXRTdGF0ZSB7IHZpZXcgfVxuICAgIGxpYnMucXMuc2V0ICd2aWV3Jywgdmlld1xuXG4gIHJlbmRlcjogLT5cbiAgICBzb3J0TGluayA9IChzb3J0LCBkaXNwbGF5KSA9PlxuICAgICAgY2xhc3NOYW1lID0gY3ggYWN0aXZlOiBAc3RhdGUuc29ydCA9PSBzb3J0XG4gICAgICByZWYgPSBcIiN7c29ydH1Tb3J0XCJcbiAgICAgIG9uQ2xpY2sgPSAoKS0+XG4gICAgICAgIGxpYnMucXMuc2V0ICdzb3J0Jywgc29ydFxuICAgICAgUi5hIHtvbkNsaWNrLCByZWYsIGNsYXNzTmFtZX0sIGRpc3BsYXlcblxuICAgIGNhcmRzID0gQGdyb3VwQ2FyZHMgQGZpbHRlckFuZFNvcnRDYXJkcygpXG5cbiAgICBjYXJkTGlzdHMgPSBfLm1hcCBjYXJkcywgKGNhcmRzLCB2YWwpPT5cbiAgICAgIGNhcmRMaXN0SGVhZGluZyA9IG51bGxcbiAgICAgIGlmIG5vdCBAc3RhdGUuZmlsdGVyP1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmcgPSBSLmgyIGNsYXNzTmFtZTonY2FyZExpc3QtZ3JvdXBIZWFkaW5nJyxcbiAgICAgICAgICBAc29ydEdyb3VwVGl0bGUgQHN0YXRlLnNvcnQsIHZhbFxuICAgICAgUi5kaXYge30sIFtcbiAgICAgICAgY2FyZExpc3RIZWFkaW5nXG4gICAgICAgIENhcmRMaXN0XG4gICAgICAgICAgY2FyZEltZzogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICBmdWxsVGV4dDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICAgICAgdmlldzogQHN0YXRlLnZpZXdcbiAgICAgIF1cblxuICAgIGNhcmRzVmlld0NsYXNzID0gY3hcbiAgICAgICdjYXJkc1ZpZXcnOiB0cnVlXG4gICAgICAnY2FyZHNWaWV3LS1maWx0ZXJlZCc6IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAnY2FyZHNWaWV3LS1mdWxsVGV4dCc6IEBzdGF0ZS5mdWxsVGV4dFxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiBjYXJkc1ZpZXdDbGFzcywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgcm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCAnU29ydCBieTonXG4gICAgICAgICAgICBzb3J0TGluayAnc3RhZ2UnLCAnU3RhZ2UnXG4gICAgICAgICAgICBzb3J0TGluayAnb3BzJywgJ09wcydcbiAgICAgICAgICAgIHNvcnRMaW5rICdzaWRlJywgJ1NpZGUnXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6JycsIGNsYXNzTmFtZTonJ30sICdWaWV3OiAnXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICdpbWcnXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZCBpbWFnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGgtbGFyZ2UgI3tpZiBAc3RhdGUudmlldyA9PSAnaW1nJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RpdGxlJ1xuICAgICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGFuZCBvcHMnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RpdGxlJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RleHQnXG4gICAgICAgICAgICAgIHRpdGxlOiAnRnVsbCB0ZXh0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi1hbGlnbi1sZWZ0ICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RleHQnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI2lkOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonZnVsbFRleHQnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUZ1bGxUZXh0XG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2Z1bGxUZXh0JywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIHRleHQnXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI2lkOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidjYXJkSW1nJ1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVDYXJkSW1nXG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonY2FyZEltZycsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCBpbWFnZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHMtZmlsdGVyLWJ5LWlkIGNvbC1tZC02JywgW1xuICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6J2NhcmRGaWx0ZXInfSwgW1xuICAgICAgICAgICAgXCJGaWx0ZXIgY2FyZHMgYnkgaWRzIFwiXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgIG5hbWU6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICByZWY6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgb25DaGFuZ2U6IEBoYW5kbGVDYXJkRmlsdGVyQ2hhbmdlXG4gICAgICAgICAgICBvbkJsdXI6IEBoYW5kbGVDYXJkRmlsdGVyQmx1clxuICAgICAgICAgICAgdmFsdWU6IEBzdGF0ZS5jYXJkRmlsdGVySW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzdGUgZnJvbSBXYXJnYW1lcm9vbSBvciBlbnRlciBpZHMnXG4gICAgICAgICAgUi5hIHtjbGFzc05hbWU6J2NhcmRzLWZpbHRlci1ieS1pZC1jbGVhcicsIG9uQ2xpY2s6QGhhbmRsZUNhcmRGaWx0ZXJDbGVhcn0sICdjbGVhcidcbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgY2FyZExpc3RzXG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NvdW50cmllc1ZpZXcgJ1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY291bnRyaWVzVmlldycsIFtcbiAgICAgIFIuaDIge30sICdDb3VudHJpZXMnXG4gICAgXVxuXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0hvbWVWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnSG9tZVZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC14cy0xMicsIFtcbiAgICAgICAgICBSLmgxIGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2kgb3duZXItdXNcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1ZyBvd25lci11c3NyXCIsIFwiU3RydWdcIlxuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAgY2xhc3NOYW1lOidsZWFkIGJsdXJiJywgW1xuICAgICAgICAgICAgXCJUd2lTdHJ1ZyBpcyBhIGNvbXBhbmlvbiBhcHBsaWNhdGlvbiBmb3IgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLCBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgIFwiLiBJdCB3b3VsZCBub3QgZXhpc3Qgd2l0aG91dCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tXCIsIFwiVHdpbGlnaHQgU3RyYXRlZ3lcIlxuICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluaycsIGhyZWY6ICcjL2JvYXJkJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpcnR1YWwgQm9hcmQnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1ib2FyZC5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdGdWxseSBwbGF5YWJsZSBib2FyZCAtIGp1c3QgYWRkIGNhcmRzJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rIGhvbWUtbGluay1jYXJkcycsIGhyZWY6ICcjL2NhcmRzJywgW1xuICAgICAgICAgICAgUi5oMyB7fSwgJ1ZpZXcgQ2FyZHMnXG4gICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWctcmVzcG9uc2l2ZScsIHNyYzogJy9pbWFnZXMvaG9tZS1jYXJkcy5qcGcnXG4gICAgICAgICAgICBSLnAge30sICdFeHBsb3JlIHRoZSBjYXJkcyBvZiBUd2lsaWdodCBTdHJ1Z2dsZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ1dob29wc1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5oMiB7fSwgXCJERUZDT04gMVwiXG4gICAgICBSLnAgY2xhc3NOYW1lOidsZWFkJywgW1xuICAgICAgICBcIkxvb2tzIGxpa2UgVHdpU3RydWcgdHJpZ2dlcmVkIG51Y2xlYXIgd2FyLiBXSE9PUFNJRSBEQUlTWSFcIlxuICAgICAgICBSLmJyIHt9XG4gICAgICAgIFIuYSBocmVmOlwiIy9jYXJkc1wiLCBcIkhvdyBhYm91dCBsb29raW5nIG92ZXIgdGhlIGNhcmRzP1wiXG4gICAgICBdXG4gICAgXVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKShfX2Rpcm5hbWUsIFsnKi5jb2ZmZWUnXSlcbiIsImxpYnMgPSByZXF1aXJlICcuL2xpYnMnXG52ZW50ID0gcmVxdWlyZSAnLi92ZW50J1xubWFwRGF0YSA9IHJlcXVpcmUgJy4uL2FwcC9kYXRhL21hcC1kYXRhLmpzb24nXG5cbnNldFJvdXRlT3JpZ2luYWwgPSBSb3V0ZXI6OnNldFJvdXRlXG5Sb3V0ZXI6OnNldFJvdXRlID0gLT5cbiAgQGN1cnJlbnRSb3V0ZSA9IEBnZXRSb3V0ZSgpXG4gIHNldFJvdXRlT3JpZ2luYWwuYXBwbHkgdGhpcywgYXJndW1lbnRzXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvdXRlcjogbmV3IFJvdXRlclxuXG4gICMgVGFrZXMgYSB2aWV3IG5hbWUgYW5kIGFzc29jaWF0ZWQgZGF0YVxuICBzZXRWaWV3OiAobmFtZSwgcGFnZVRpdGxlLCBtZW51QWN0aXZlPScnLCBkYXRhPXt9KSAtPlxuICAgIGlmIHBhZ2VUaXRsZT8gdGhlbiBsaWJzLnNldFBhZ2VUaXRsZSBwYWdlVGl0bGVcbiAgICBAc2V0U3RhdGVcbiAgICAgIHZpZXc6IHtuYW1lLCBkYXRhfVxuICAgICAgbWVudUFjdGl2ZTogbWVudUFjdGl2ZVxuICAgICAgc2xpZGVJbjogQHN0YXRlLnZpZXc/Lm5hbWUgIT0gbmFtZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIHN0YXRlUm91dGUgPSAobmFtZSwgcGFnZVRpdGxlLCBtZW51QWN0aXZlLCBhcmdzKS0+XG4gICAgICBzdGF0ZSA9IGxpYnMucXMudG9PYmogYXJnc1xuICAgICAgIyBDb252ZXJ0IGZpbHRlciBpZHMgZnJvbSBzdHIgLT4gbnVtYmVyXG4gICAgICBpZiBzdGF0ZT8uZmlsdGVyP1xuICAgICAgICBpZiBub3QgXy5pc0FycmF5IHN0YXRlLmZpbHRlclxuICAgICAgICAgIHN0YXRlLmZpbHRlciA9IFtzdGF0ZS5maWx0ZXJdXG4gICAgICAgIHN0YXRlLmZpbHRlciA9IHN0YXRlLmZpbHRlci5tYXAgKGVsKS0+XG4gICAgICAgICAgcGFyc2VJbnQgZWwsIDEwXG4gICAgICBAc2V0VmlldyBuYW1lLCBwYWdlVGl0bGUsIG1lbnVBY3RpdmUsXG4gICAgICAgIHN0YXRlOiBzdGF0ZVxuXG4gICAgcm91dGVyID0gQHByb3BzLnJvdXRlclxuXG4gICAgdmVudC5vbiAnc2V0Um91dGUnLCByb3V0ZXIuc2V0Um91dGUuYmluZCByb3V0ZXJcblxuICAgIHJvdXRlci5jb25maWd1cmVcbiAgICAgIG5vdGZvdW5kOiBAc2V0Vmlldy5iaW5kIHRoaXMsICd3aG9vcHMnLCAnV2hvb3BzJ1xuICAgICAgIycvYm9hcmQnOiBAc2V0Vmlldy5iaW5kIHRoaXMsICdib2FyZCcsICdCb2FyZCdcblxuICAgIHJvdXRlci5vbiAnLycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2hvbWUnLCAnSG9tZSdcblxuXG4gICAgcm91dGVyLm9uICcvY2FyZC86aWQnLCAoaWQpPT5cbiAgICAgIGlkID0gcGFyc2VJbnQgaWQsIDEwXG4gICAgICBuZXh0SWQgPSBpZiBpZCA9PSAxMTAgdGhlbiAxIGVsc2UgaWQgKyAxXG4gICAgICBwcmV2SWQgPSBpZiBpZCA9PSAxIHRoZW4gMTEwIGVsc2UgaWQgLSAxXG4gICAgICBjYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IGlkXG4gICAgICBuZXh0Q2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBuZXh0SWRcbiAgICAgIHByZXZDYXJkID0gIF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBwcmV2SWRcbiAgICAgIHBhZ2VUaXRsZSA9IFwiI3tjYXJkLnRpdGxlfSAoIyN7Y2FyZC5pZH0pXCJcbiAgICAgIEBzZXRWaWV3ICdjYXJkJywgcGFnZVRpdGxlLCAnY2FyZHMnLCB7Y2FyZCwgbmV4dENhcmQsIHByZXZDYXJkfVxuXG5cbiAgICByb3V0ZXIub24gJy9jb3VudHJpZXMnLCBAc2V0Vmlldy5iaW5kIHRoaXMsICdjb3VudHJpZXMnLCAnQ291bnRyaWVzJywgJ2NvdW50cmllcydcblxuXG4gICAgcm91dGVyLm9uICcvYWJvdXQnLCBAc2V0Vmlldy5iaW5kIHRoaXMsICdhYm91dCcsICdBYm91dCcsICdhYm91dCdcblxuXG4gICAgcm91dGVyLm9uIC9jYXJkc1xcPz8oLiopLywgc3RhdGVSb3V0ZS5iaW5kIHRoaXMsICdjYXJkcycsICdDYXJkcycsICdjYXJkcydcblxuXG4gICAgcm91dGVyLm9uIC9ib2FyZFxcLz8oXFx3KilcXC8/KC4qKS8sIChnYW1lSWQsIGluY29taW5nU3RhdGUpPT5cbiAgICAgICNpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgI3JldHVybiByb3V0ZXIuc2V0Um91dGUgXCJib2FyZC8je01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpfVwiXG5cbiAgICAgIGlmIG5vdCBnYW1lSWQ/IG9yIGdhbWVJZCA9PSAnJ1xuICAgICAgICBnYW1lSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDEwKVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgbnVsbCwgXCJCb2FyZCAje2dhbWVJZH1cIiwgXCIjL2JvYXJkLyN7Z2FtZUlkfVwiXG5cbiAgICAgIHtjb3VudHJ5UG9zaXRpb25zLCBjb3VudHJpZXMsIGxpbmtzLCByZWdpb25JbmZvTm9kZXN9ID0gbWFwRGF0YVxuXG4gICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMubWFwIChub2RlKS0+XG4gICAgICAgIG5vZGUueCA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS54XG4gICAgICAgIG5vZGUueSA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS55XG4gICAgICAgIG5vZGUuZml4ZWQgPSB0cnVlXG4gICAgICAgIG5vZGVcbiAgICAgIFxuICAgICAgcmVnaW9uSW5mb05vZGVzID0gcmVnaW9uSW5mb05vZGVzLm1hcCAobm9kZSktPlxuICAgICAgICBub2RlLnJlZ2lvbkluZm8gPSB0cnVlXG4gICAgICAgIG5vZGUuZml4ZWQgPSB0cnVlXG4gICAgICAgIG5vZGVcblxuICAgICAgbm9kZXMgPSBfLnVuaW9uKGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzKVxuICAgICAgbm9kZXMgPSBfLnppcE9iamVjdCBfLnBsdWNrKG5vZGVzLCAnaWQnKSwgbm9kZXNcblxuICAgICAga2V5ID0gZ2FtZUlkXG5cbiAgICAgIGJvYXJkUHJvcHMgPSB7XG4gICAgICAgIGdhbWVJZCwgbWFwRGF0YSwgY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMsIGxpbmtzLCBub2RlcyxcbiAgICAgICAga2V5LCBpbmNvbWluZ1N0YXRlIH1cblxuICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG5cbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vbGlicy9NaWNyb0V2ZW50Q2xhc3MnXG5jbGFzcyBWZW50IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFZlbnQoKVxuIiwiUiA9IFJlYWN0LkRPTVxuUkNURyA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXBcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5yYW5nZWRHYW1lVmFsID0gcmVxdWlyZSAnLi4vbGlicy9yYW5nZWRHYW1lVmFsJ1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi4vbGlicy9zdGF0ZUVuY29kZXInXG5cbkJvYXJkTm9kZSA9IHJlcXVpcmUgJy4vQm9hcmROb2RlJ1xuQm9hcmRTdGF0dXMgPSByZXF1aXJlICcuL0JvYXJkU3RhdHVzJ1xuQm9hcmRMaW5rID0gcmVxdWlyZSAnLi9Cb2FyZExpbmsnXG5cblxuc3VwZXJwb3dlclRvSW5kZXggPSAoc3RyKS0+IGlmIHN0ciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG5cblxuZ2V0SXBTdGF0cyA9IChpcHMsIGNvdW50cmllcyktPlxuICBhY2N1bXVsYXRvciA9IC0+XG4gICAgYnRsOiAwXG4gICAgbm9uOiAwXG4gICAgdG90YWw6IDBcbiAgICBldTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhczogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBtZTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhZjogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBzYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBjYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcblxuICBmbiA9IChhY2N1bSwgaXBzLCBjb3VudHJ5SWQpLT5cbiAgICBjb3VudHJ5ID0gXy5maW5kIGNvdW50cmllcywgaWQ6IHBhcnNlSW50KGNvdW50cnlJZCwgMTApXG4gICAgaWYgaXBzWzBdIC0gaXBzWzFdID49IGNvdW50cnkuc3RhYlxuICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLnRvdGFsKytcbiAgICAgIGFjY3VtLnRvdGFsKytcbiAgICAgIGlmIGNvdW50cnkuYnRsXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5idGwrK1xuICAgICAgICBhY2N1bS5idGwrK1xuICAgICAgZWxzZVxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0ubm9uKytcbiAgICAgICAgYWNjdW0ubm9uKytcbiAgICBhY2N1bVxuXG4gICMgRmxpcHBlZCB0byBoYXZlIFVTU1IgaXBzIGZpcnN0XG4gIGlwc1JldiA9IF8ubWFwIGlwcywgKGlwcyktPiBfLmNsb25lRGVlcChpcHMpLnJldmVyc2UoKVxuXG4gIHVzYSA9IF8ucmVkdWNlIGlwcywgZm4sIGFjY3VtdWxhdG9yKClcbiAgdXNzciA9IF8ucmVkdWNlIGlwc1JldiwgZm4sIGFjY3VtdWxhdG9yKClcblxuICB7dXNhLCB1c3NyfVxuXG5zdW1SZWdpb24gPSAobWV0cmljLCBzdW0sIHJlZ2lvbiktPiBzdW0gKyByZWdpb25bbWV0cmljXVxuXG5nZXRSZWdpb25TdGF0cyA9IChpcFN0YXRzLCByZWdpb25zKS0+XG4gIHN0YXRzID0gXy5tYXBWYWx1ZXMgaXBTdGF0cywgKGhlcm8sIHBvd2VyLCBwb3dlcnMpLT5cbiAgICB2aWxsYWluID0gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiBwb3dlcnMudXNzciBlbHNlIHBvd2Vycy51c2FcbiAgICByZWdpb25TdGF0cyA9IHJlZ2lvbnMubWFwIChyZWdpb24pLT5cbiAgICAgIGhSZWdpb24gPSBoZXJvW3JlZ2lvbi5pZF1cbiAgICAgIHZSZWdpb24gPSB2aWxsYWluW3JlZ2lvbi5pZF1cbiAgICAgIG91dCA9XG4gICAgICAgIHByZXNlbmNlOiBoUmVnaW9uLnRvdGFsID4gMFxuICAgICAgICBkb21pbmF0aW9uOiBoUmVnaW9uLm5vbiA+IDAgYW5kIGhSZWdpb24uYnRsID4gdlJlZ2lvbi5idGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICAgIGNvbnRyb2w6IGhSZWdpb24uYnRsID09IHJlZ2lvbi5udW1CdGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG5cbiAgICByZWdpb25TdGF0cyA9IF8uemlwT2JqZWN0IF8ucGx1Y2socmVnaW9ucywgJ2lkJyksIHJlZ2lvblN0YXRzXG4gICAgcmVnaW9uU3RhdHMgPSBfLmFzc2lnbiByZWdpb25TdGF0cyxcbiAgICAgIHByZXNlbmNlOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ3ByZXNlbmNlJyksIDBcbiAgICAgIGRvbWluYXRpb246IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnZG9taW5hdGlvbicpLCAwXG4gICAgICBjb250cm9sOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2NvbnRyb2wnKSwgMFxuICBcbiAgc3RhdHNcblxuXG4jIFJldHVybnMgYSBzaW1wbGUge3VzYTogJ3ByZXNlbmNlJywgdXNzcjogJ2RvbWluYXRpb24nfVxuZ2V0UmVnaW9uU3RhdHVzID0gKHN0YXRzKS0+XG4gIF8ubWFwVmFsdWVzIHN0YXRzLCAoc3RhdCktPlxuICAgIHJldHVybiAnY29udHJvbCcgaWYgc3RhdC5jb250cm9sXG4gICAgcmV0dXJuICdkb21pbmF0aW9uJyBpZiBzdGF0LmRvbWluYXRpb25cbiAgICByZXR1cm4gJ3ByZXNlbmNlJyBpZiBzdGF0LnByZXNlbmNlXG4gICAgcmV0dXJuIGZhbHNlXG5cblxuXG5zdXBlclN0YXRzID0gKGlwcywgY291bnRyeUFyciwgcmVnaW9uQXJyKS0+XG4gIGNvdW50cmllcyA9IGdldElwU3RhdHMoaXBzLCBjb3VudHJ5QXJyKVxuICByZWdpb25zID0gZ2V0UmVnaW9uU3RhdHMoY291bnRyaWVzLCByZWdpb25BcnIpXG4gIHtjb3VudHJpZXMsIHJlZ2lvbnN9XG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkJ1xuXG4gIGdldEluaXRpYWxTdGF0ZTogKHByb3BzID0gQHByb3BzKSAtPlxuICAgIHN0YXRlSGlzdG9yeSA9IHByb3BzLnN0YXRlSGlzdG9yeVxuICAgIHN0YXRlSGlzdG9yeS5sb2FkKClcbiAgICBzdGF0ZSA9IEBoYW5kbGVJbmNvbWluZ1N0YXRlIHByb3BzLmluY29taW5nU3RhdGVcbiAgICBpZiBub3Qgc3RhdGU/XG4gICAgICBzdGF0ZSA9IHN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KCk/LnN0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgZ2FtZVN0YXRlID1cbiAgICAgICAgZ2FtZTpcbiAgICAgICAgICBzY29yZTogMFxuICAgICAgICAgIHR1cm46IDBcbiAgICAgICAgICByb3VuZDogMFxuICAgICAgICAgIGRlZmNvbjogNVxuICAgICAgICAgIG1pbG9wczogWzAsMF1cbiAgICAgICAgICBzcGFjZTogWzAsMF1cbiAgICAgICAgaXBzOiBfLm1hcCBwcm9wcy5jb3VudHJpZXMsIChjKS0+IFtjLnVzYSwgYy51c3NyXVxuXG4gICAgICBtZXRhID1cbiAgICAgICAgdHlwZTogJ3R1cm4nXG4gICAgICAgIGlkOiAndHVybidcbiAgICAgICAgbmV3R2FtZTogdHJ1ZVxuICAgICAgICBuZXc6IDBcbiAgICAgICAgb2xkOjBcblxuICAgICAgc3RhdGVIaXN0b3J5LmFkZCBnYW1lU3RhdGUsIG1ldGFcbiAgICAgIHN0YXRlID0gZ2FtZVN0YXRlXG5cbiAgICBzdGF0ZVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuICAgIHN0YXRlID0gQGdldEluaXRpYWxTdGF0ZSBuUFxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuICAgICNpZiBAcHJvcHMuc3RhdGVIaXN0b3J5LnN0YXRlcy5sZW5ndGggPCAxXG4gICAgICAjQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIHtzdGF0ZUhpc3RvcnksIGdhbWVJZH0gPSBAcHJvcHNcblxuICAgICAgXG4gICAgIyBXaGVuIHN0YXRlIGNoYW5nZXMsIHVwZGF0ZSB0aGUgdXJsXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdjaGFuZ2UnLCA9PlxuICAgICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgaWYgc3RhdGU/IGFuZCBub3Qgc3RhdGUubWV0YS5uZXdHYW1lXG4gICAgICAgIHN0YXRlRW5jID0gc3RhdGVIaXN0b3J5LmVuY29kZUN1cnJlbnQoKVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgbnVsbCwgXCJCb2FyZCAje2dhbWVJZH1cIiwgXCIjL2JvYXJkLyN7Z2FtZUlkfS8je3N0YXRlRW5jfVwiXG5cbiAgICBzdGF0ZUhpc3Rvcnkub24gJ2dvVG8nLCAoc3RhdGUpPT5cbiAgICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuXG4gICAgJChkb2N1bWVudCkub24gJ2tleXByZXNzJywgQGtleXByZXNzSGFuZGxlclxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAa2V5cHJlc3NIYW5kbGVyXG5cbiAgaGFuZGxlSW5jb21pbmdTdGF0ZTogKHN0YXRlRW5jb2RlZCA9IEBwcm9wcy5pbmNvbWluZ1N0YXRlKSAtPlxuICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgIGlmIHN0YXRlRW5jb2RlZD8gYW5kIHN0YXRlRW5jb2RlZCAhPSAnJyBhbmQgY3VycmVudD8ubWV0YS5zdGF0ZSAhPSBzdGF0ZUVuY29kZWRcbiAgICAgIHN0YXRlID0gc3RhdGVFbmNvZGVyLmRlY29kZSBzdGF0ZUVuY29kZWRcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIHN0YXRlLFxuICAgICAgICB0eXBlOiAnbG9hZCdcbiAgICAgICAgaWQ6ICdsb2FkJ1xuICAgICAgICBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgICByZXR1cm4gc3RhdGVcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBrZXlwcmVzc0hhbmRsZXI6IChldiktPlxuICAgIGtDID0gZXYua2V5Q29kZVxuICAgIGRpciA9IGlmIGtDID49IDk3IHRoZW4gJ2luYycgZWxzZSAnZGVjJ1xuXG4gICAgc3dpdGNoIGtDXG4gICAgICAjIChjL0MpIERpY2VcbiAgICAgIHdoZW4gOTksIDY3XG4gICAgICAgIEByZWZzLkJvYXJkU3RhdHVzLnJvbGxEaWNlKClcblxuICAgICAgIyBIaXN0b3J5XG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHovWikgVW5kb1xuICAgICAgd2hlbiAxMjIsIDkwXG4gICAgICAgIEB1bmRvSGlzdCgpXG4gICAgICAjICh5L1kpIFJlZG9cbiAgICAgIHdoZW4gMTIxLCA4OVxuICAgICAgICBAcmVkb0hpc3QoKVxuICAgICAgIyAoaC9IKSBIaXN0b3J5IHNob3cvaGlkZVxuICAgICAgd2hlbiAxMDQsIDcyXG4gICAgICAgIEB0b2dnbGVIaXN0KClcblxuICAgICAgIyBHYW1lIHByb3BlcnRpZXNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHQvVCkgVHVybiBpbmMvZGVjXG4gICAgICB3aGVuIDExNiwgODRcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICd0dXJuJywgZGlyXG4gICAgICAjIChyL1IpIFJvdW5kIGluYy9kZWNcbiAgICAgIHdoZW4gMTE0LCA4MlxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3JvdW5kJywgZGlyXG4gICAgICAjIChTL3MpIFNjb3JlIGluYy9kZWNcbiAgICAgIHdoZW4gMTE1LCA4M1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3Njb3JlJywgZGlyXG4gICAgICAjIChEL2QpIERlZmNvbiBpbmMvZGVjXG4gICAgICB3aGVuIDEwMCwgNjhcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdkZWZjb24nLCBkaXJcbiAgICAgICMgKE0vbSkgVVNBIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDEwOSwgNzdcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c2EnXG4gICAgICAjIChPL28pIFVTU1IgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTExLCA3OVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3Vzc3InXG4gICAgICAjIChQL3ApIFVTQSBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDExMiwgODBcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3VzYSdcbiAgICAgICMgKEEvYSkgVVNTUiBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDk3LCA2NVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNzcidcblxuICAgIHJldHVybiB0cnVlXG5cblxuICBoYW5kbGVWYWxDbGljazogKGlkLCBkaXIsIHNpZGUpLT5cbiAgICBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBkZWx0YSA9IGlmIGRpciA9PSAnaW5jJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlmIGlkIGluIFsnbWlsb3BzJywgJ3NwYWNlJ11cbiAgICAgIGluZGV4ID0gaWYgc2lkZSA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4gICAgICBvbGRWYWwgPSBzdGF0ZS5nYW1lW2lkXVtpbmRleF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdW2luZGV4XSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF1baW5kZXhdID0gbmV3VmFsXG4gICAgZWxzZVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdICsgZGVsdGEpXG4gICAgICBzdGF0ZS5nYW1lW2lkXSA9IG5ld1ZhbFxuXG4gICAgbWV0YSA9XG4gICAgICB0eXBlOiAndmFsJ1xuICAgICAgc2lkZTogaWYgc2lkZT8gdGhlbiBzaWRlIGVsc2UgJydcbiAgICAgIGlkOiBpZFxuICAgICAgb2xkOiBvbGRWYWxcbiAgICAgIG5ldzogbmV3VmFsXG5cbiAgICBpZiBpZCA9PSAndHVybicgb3IgaWQgPT0gJ3JvdW5kJ1xuICAgICAgbWV0YS50eXBlID0gaWRcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsIG1ldGFcblxuXG4gIGhhbmRsZUlQQ2xpY2s6IChub2RlSWQsIHNpZGUsIGRpciktPlxuICAgIG5vZGUgPSBfLmZpbmQgQHByb3BzLm5vZGVzLCB7aWQ6IG5vZGVJZH1cbiAgICAjIERvbid0IGxldCB0aGUgbm9uLWNvdW50cnkgbm9kZXMgZ2V0IHVwZGF0ZWQgXG4gICAgaWYgbm9kZS5wb2ludHMgb3Igbm9kZS5zdXBlcnBvd2VyIHRoZW4gcmV0dXJuXG5cbiAgICBzdGF0ZSA9IEBzdGF0ZVxuXG4gICAgaW5kZXggPSBzdXBlcnBvd2VyVG9JbmRleCBzaWRlXG4gICAgaXAgPSBzdGF0ZS5pcHNbbm9kZUlkXVtpbmRleF1cbiAgICBkZWx0YSA9IGlmIGRpciA9PSAndXAnIHRoZW4gMSBlbHNlIC0xXG4gICAgaXAgKz0gZGVsdGFcbiAgICBpZiBpcCA8IDAgdGhlbiByZXR1cm5cblxuICAgIHNpZ24gPSBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuICAgIHN0YXRlLmlwc1tub2RlSWRdW2luZGV4XSA9IGlwXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLFxuICAgICAgdHlwZTogJ2lwJ1xuICAgICAgc2lkZTogc2lkZVxuICAgICAgY291bnRyeTogbm9kZVxuICAgICAgaXBzOiBzdGF0ZS5pcHNbbm9kZUlkXVxuICAgICAgZGVsdGE6ZGVsdGFcblxuICBoYW5kbGVIaXN0b3J5Q2xpY2s6ICh0eXBlKS0+XG4gICAgQFtcIiN7dHlwZX1IaXN0XCJdKClcblxuICB1bmRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkudW5kbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHJlZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5yZWRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgdG9nZ2xlSGlzdDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIG5vZGVQcm9wcyA9IEBwcm9wcy5ub2RlXG5cbiAgICBzdXBlcnBvd2VyU3RhdHMgPSBzdXBlclN0YXRzIEBzdGF0ZS5pcHMsIEBwcm9wcy5jb3VudHJpZXMsIEBwcm9wcy5yZWdpb25JbmZvTm9kZXNcblxuICAgIGxpbmtzID0gQHByb3BzLmxpbmtzLm1hcCAobGlua0RhdGEpPT5cbiAgICAgIHNvdXJjZSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCBpZDogbGlua0RhdGEuc291cmNlXG4gICAgICB0YXJnZXQgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnRhcmdldFxuICAgICAgbm9kZXMgPSB7c291cmNlLCB0YXJnZXR9XG5cbiAgICAgIGpVU0EgPSAobGluaywgdGFyZyk9PlxuICAgICAgICBqYXBhblVTQUJ1bXAgPSAxOFxuICAgICAgICBpZiBfLmNvbnRhaW5zKGxpbmsubm9kZXMsICdVU0EnKSBhbmQgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnSmFwYW4nKVxuICAgICAgICAgIHJldHVybiBub2Rlc1t0YXJnXS55IC0gamFwYW5VU0FCdW1wXG4gICAgICAgIG5vZGVzW3RhcmddLnlcblxuICAgICAgbGlua1Byb3BzID1cbiAgICAgICAga2V5OiBcIkJvYXJkTGluay0je2xpbmtEYXRhLnNvdXJjZX0tI3tsaW5rRGF0YS50YXJnZXR9XCJcbiAgICAgICAgeDE6IHNvdXJjZS54XG4gICAgICAgIHkxOiBqVVNBKGxpbmtEYXRhLCAnc291cmNlJylcbiAgICAgICAgeDI6IHRhcmdldC54XG4gICAgICAgIHkyOiBqVVNBKGxpbmtEYXRhLCAndGFyZ2V0JylcbiAgICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAgIFwibGlua1wiOiB0cnVlXG4gICAgICAgICAgXCJsaW5rLWNyb3NzXCI6IGxpbmtEYXRhLmNyb3NzQ29udGluZW50XG4gICAgICAgICAgXCJsaW5rLXVzYVwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNBJ1xuICAgICAgICAgIFwibGluay11c3NyXCI6IF8uY29udGFpbnMgbGlua0RhdGEubm9kZXMsICdVU1NSJ1xuXG4gICAgICBCb2FyZExpbmsgbGlua1Byb3BzXG5cbiAgICBub2RlcyA9IF8ubWFwIEBwcm9wcy5ub2RlcywgKGNvdW50cnlEYXRhKT0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIG5vZGU6IG5vZGVQcm9wc1xuICAgICAgICBrZXk6IFwiQm9hcmROb2RlLSN7Y291bnRyeURhdGEuaWR9XCJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgje2NvdW50cnlEYXRhLnh9LCAje2NvdW50cnlEYXRhLnl9KVwiXG4gICAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodFxuICAgICAgICBndXR0ZXI6IEBwcm9wcy5ub2RlLmd1dHRlclxuICAgICAgICB0aXRsZUhlaWdodDogQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgdGl0bGVGb250U2l6ZTogQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuICAgICAgICBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGlja1xuXG4gICAgICBfLmFzc2lnbiBwcm9wcywgY291bnRyeURhdGFcblxuICAgICAgaWYocHJvcHMuc3VwZXJwb3dlcilcbiAgICAgICAgcHJvcHMuc3RhdHMgPVxuICAgICAgICAgIGNvdW50cmllczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5jb3VudHJpZXNbcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpXSwgWydidGwnLCAnbm9uJywgJ3RvdGFsJ11cbiAgICAgICAgICByZWdpb25zOiBfLnBpY2sgc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnNbcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpXSwgWydwcmVzZW5jZScsICdkb21pbmF0aW9uJywgJ2NvbnRyb2wnXVxuXG4gICAgICBpZihwcm9wcy5wb2ludHMpXG4gICAgICAgIHByb3BzLnN0YXRzID0gZ2V0UmVnaW9uU3RhdHVzXG4gICAgICAgICAgdXNhOiBzdXBlcnBvd2VyU3RhdHMucmVnaW9ucy51c2FbcHJvcHMuaWRdXG4gICAgICAgICAgdXNzcjogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNzcltwcm9wcy5pZF1cbiAgICAgIFxuICAgICAgY291bnRyeUlkID0gcGFyc2VJbnQgY291bnRyeURhdGEuaWQsIDEwXG4gICAgICBpZiBjb3VudHJ5SWQgb2YgQHN0YXRlLmlwc1xuICAgICAgICBwcm9wcy51c2EgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMF1cbiAgICAgICAgcHJvcHMudXNzciA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVsxXVxuXG4gICAgICBCb2FyZE5vZGUgcHJvcHNcblxuICAgIGJvYXJkU3RhdHVzQXR0cnMgPVxuICAgICAgcmVmOidCb2FyZFN0YXR1cydcbiAgICAgIGhhbmRsZVZhbENsaWNrOiBAaGFuZGxlVmFsQ2xpY2tcbiAgICAgIGhhbmRsZUhpc3RvcnlDbGljazogQGhhbmRsZUhpc3RvcnlDbGlja1xuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmQnLCBbXG4gICAgICBSLnN2ZyB3aWR0aDpAcHJvcHMud2lkdGgsIGhlaWdodDpAcHJvcHMuaGVpZ2h0LCByZWY6ICdzdmcnLCBbXG4gICAgICAgIGxpbmtzXG4gICAgICAgIG5vZGVzXG4gICAgICBdXG4gICAgICBCb2FyZFN0YXR1cyBfLmFzc2lnbiBib2FyZFN0YXR1c0F0dHJzLCBAc3RhdGUuZ2FtZVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZExpbmsnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogLT5cbiAgICBmYWxzZVxuICByZW5kZXI6IC0+XG4gICAgUi5saW5lIEBwcm9wc1xuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUCA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVAnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5leHRQcm9wcyktPlxuICAgICMgQXNzdW1lIGNvdW50cnlcbiAgICBzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMgQ29udGluZW50IGxhYmVsc1xuICAgIGlmIEBwcm9wcy5wb2ludHM/XG4gICAgICBzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICBuZXh0UHJvcHMuc3RhdHMudXNzciAhPSBAcHJvcHMuc3RhdHMudXNzclxuICAgICMgU3VwZXJwb3dlciBsYWJlbHNcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgblBTID0gbmV4dFByb3BzLnN0YXRzXG4gICAgICB0UFMgPSBAcHJvcHMuc3RhdHNcbiAgICAgIHNob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgblBTLnJlZ2lvbnMucHJlc2VuY2UgIT0gdFBTLnJlZ2lvbnMucHJlc2VuY2Ugb3JcbiAgICAgICAgblBTLnJlZ2lvbnMuZG9taW5hdGlvbiAhPSB0UFMucmVnaW9ucy5kb21pbmF0aW9uIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuXG4gICAgc2hvdWxkSXRcblxuICBoYW5kbGVJUENsaWNrOiAoc2lkZSwgZGlyKS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLmlkLCBzaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgY29udHJvbFVTQSA9IChAcHJvcHMudXNhIC0gQHByb3BzLnVzc3IpID49IEBwcm9wcy5zdGFiXG4gICAgY29udHJvbFVTU1IgPSAoQHByb3BzLnVzc3IgLSBAcHJvcHMudXNhKSA+PSBAcHJvcHMuc3RhYlxuXG4gICAgZ0F0dHJzID1cbiAgICAgIHRyYW5zZm9ybTogQHByb3BzLnRyYW5zZm9ybVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtI3tAcHJvcHMuZ3JvdXB9IFwiICsgY3hcbiAgICAgICAgJ25vZGUnOiB0cnVlXG4gICAgICAgICdub2RlLWJ0bCc6IEBwcm9wcy5idGwgPT0gMVxuICAgICAgICAnbm9kZS1ub25idGwnOiBAcHJvcHMuYnRsICE9IDFcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAnbm9kZS11c2EtY29udHJvbCc6IGNvbnRyb2xVU0FcbiAgICAgICAgJ25vZGUtdXNzci1jb250cm9sJzogY29udHJvbFVTU1JcbiAgICAgICAgJ25vZGUtcmVnaW9uLWluZm8nOiBAcHJvcHMucmVnaW9uSW5mb1xuXG5cbiAgICB0aXRsZVRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS10aXRsZS10ZXh0XCJcbiAgICAgIHg6IGlmIEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLUBwcm9wcy5ub2RlLndpZHRoLzIgKyAyXG4gICAgICB5OiBpZiBAcHJvcHMucmVnaW9uSW5mb1xuICAgICAgICAgICAgLTZcbiAgICAgICAgICBlbHNlIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICAgICAgICA2XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplXG5cblxuICAgIHN0YWJUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtc3RhYlwiXG4gICAgICB4OiAoQHByb3BzLm5vZGUud2lkdGgvMikgLSAxMFxuICAgICAgeTogLShAcHJvcHMubm9kZS5oZWlnaHQvMikgKyBAcHJvcHMubm9kZS50aXRsZUZvbnRTaXplICsgMVxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBzdGFiVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiB7fSwgXCJCYXR0bGU6IFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidudW1CdGwnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgXVxuICAgICAgc3RhYlRleHRBdHRycy54ID0gMFxuICAgICAgc3RhYlRleHRBdHRycy55ICs9IDFcblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGUtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOnBDTiwgQHByb3BzLnBvaW50c1swXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGUtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGUtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgICMgTm9kZSBiZ1xuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIHBvbHlcblxuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtdGl0bGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMudGl0bGVIZWlnaHRcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgUi5saW5lXG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtbGluZSdcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICB4MTogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkxOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgeDI6IEBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkyOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcblxuICAgICAgUi50ZXh0IHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICBSLnRleHQgc3RhYlRleHRBdHRycywgc3RhYlRleHRcbiAgICAgIFIudGV4dCByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c2EnLCBpcDogQHByb3BzLnVzYSwgY3RybDogY29udHJvbFVTQSwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNhJ1xuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c3NyJywgaXA6IEBwcm9wcy51c3NyLCBjdHJsOiBjb250cm9sVVNTUiwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNzcidcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlSVAnXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cblxuQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHI6IDBcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5Lm9uICd1cGRhdGUnLCA9PlxuICAgICAgQGZvcmNlVXBkYXRlKClcblxuICAgICNmbiA9ICgpPT5cbiAgICAgICNAc2V0U3RhdGUgcjogTWF0aC5yYW5kb20oKVxuICAgICAgI3NldFRpbWVvdXQgZm4sIDIwMDBcbiAgICAjZm4oKVxuICAgXG4gIGhhbmRsZVNIQ2xpY2s6IChpZCktPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpZFxuXG4gIGhhbmRsZUNsb3NlSGlzdG9yeTogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmhpZGUoKVxuXG4gIHJlbmRlcjogLT5cbiAgICBzdGF0ZUNvbXBvbmVudHMgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LnN0YXRlcy5tYXAgKHNoLCBpbmRleCk9PlxuICAgICAgc2hNID0gc2gubWV0YVxuICAgICAgIyBJUCBwbGFjZW1lbnQgaW4gY291bnRyeVxuICAgICAgaWYgc2hNLmNvdW50cnk/XG4gICAgICAgIGtleSA9IFwiY291bnRyeS0je3NoTS5jb3VudHJ5LmlkfVwiXG4gICAgICBlbHNlXG4gICAgICAgIGtleSA9IFwiI3tzaE0uaWR9LSN7c2hNLnNpZGV9XCJcblxuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeVxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlU0hDbGljay5iaW5kIHRoaXMsIGluZGV4XG4gICAgICAgIGtleTogXCJCU0hFLSN7aW5kZXh9LSN7a2V5fVwiXG4gICAgICAgIGlzTGF0ZXN0OiBAcHJvcHMuc3RhdGVIaXN0b3J5LmxhdGVzdCA9PSBpbmRleFxuICAgICAgICBpc0N1cnJlbnQ6IEBwcm9wcy5zdGF0ZUhpc3RvcnkuY3VycmVudCA9PSBpbmRleFxuICAgICAgICBzaDogc2hcblxuICAgIGRpdkF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ1N0YXRlSGlzdG9yeSc6IHRydWVcbiAgICAgICAgJ2luJzogQHByb3BzLnN0YXRlSGlzdG9yeS5zaG93XG5cbiAgICBSLmRpdiBkaXZBdHRycywgW1xuICAgICAgUi5hIGNsYXNzTmFtZTogJ2Nsb3NlIHB1bGwtcmlnaHQnLCBvbkNsaWNrOiBAaGFuZGxlQ2xvc2VIaXN0b3J5LCBbXG4gICAgICAgICdDbG9zZSAnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoaCknXG4gICAgICBdXG4gICAgICBSLmgzIHt9LCBcIkFjdGlvbiBIaXN0b3J5XCJcbiAgICAgIFIudWwgY2xhc3NOYW1lOiAnbGlzdC11bnN0eWxlZCcsIHN0YXRlQ29tcG9uZW50cy5yZXZlcnNlKClcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5nYW1lVmFsRGlzcGxheSA9IHJlcXVpcmUgJy4uL2xpYnMvZ2FtZVZhbERpc3BsYXknXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcbmludFRvU3RyV2l0aFNpZ24gPSByZXF1aXJlICcuLi9saWJzL2ludFRvU3RyV2l0aFNpZ24nXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJwb3dlclRvSW5kZXgnXG5cbnNjb3JlU2lkZSA9IChzY29yZSktPlxuICBpZiBzY29yZSA8IDBcbiAgICByZXR1cm4gJ3Vzc3InXG4gIGlmIHNjb3JlID4gMFxuICAgIHJldHVybiAndXNhJ1xuICAnJ1xuXG5cbnNoRW50cnkgPSAoc2gpLT5cbiAgcm91bmRTaWRlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAlIDIgPT0gMCB0aGVuICd1c2EnIGVsc2UgJ3Vzc3InXG4gIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgIHJvdW5kU2lkZSA9ICcnXG5cbiAgaWYgc2guc3RhdGUuZ2FtZS50dXJuID4gMTBcbiAgICB0dXJuID0gXCJFTkRcIlxuICAgIHJvdW5kID0gJydcbiAgZWxzZSBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAwXG4gICAgdHVybiA9IFwiVCN7Z2FtZVZhbERpc3BsYXkoJ3R1cm4nLCBzaC5zdGF0ZS5nYW1lLnR1cm4pfS1cIlxuICAgIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgIT0gMFxuICAgICAgcm91bmQgPSBcIkFSI3tnYW1lVmFsRGlzcGxheSgncm91bmQnLCBzaC5zdGF0ZS5nYW1lLnJvdW5kKX1cIlxuICAgIGVsc2VcbiAgICAgIHJvdW5kID0gXCJIRUFEXCJcbiAgZWxzZVxuICAgIHR1cm4gPSBcIlNFVFVQXCJcbiAgICByb3VuZCA9ICcnXG5cbiAgdHVyblJvdW5kID1cbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHVyblJvdW5kJywgW1xuICAgICAgdHVyblxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogcm91bmRTaWRlLCByb3VuZFxuICAgIF1cblxuICBzaFNpZGUgPSBzaC5tZXRhLnNpZGVcblxuICBzd2l0Y2ggc2gubWV0YS50eXBlXG4gICAgIyBMb2FkIHN0YXRlIGZyb20gdXJsXG4gICAgd2hlbiAnbG9hZCdcbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsICdMb2FkZWQgc3RhdGUgZnJvbSBVUkwnXG4gICAgICBdXG4gICAgd2hlbiAnaXAnXG4gICAgICBbaXBVU0EsIGlwVVNTUl0gPSBzaC5tZXRhLmlwc1xuICAgICAgY291bnRyeSA9IHNoLm1ldGEuY291bnRyeVxuICAgICAgY3RybFVTQSA9IGlmIChpcFVTQSAtIGlwVVNTUikgPj0gY291bnRyeS5zdGFiIHRoZW4gJ2NvbnRyb2wnIGVsc2UgJydcbiAgICAgIGN0cmxVU1NSID0gaWYgKGlwVVNTUiAtIGlwVVNBKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuXG4gICAgICBpZiBzaC5tZXRhLnNpZGUgPT0gJ2JvdGgnXG4gICAgICAgIGlwcyA9IFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbMF1cbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcImRpdmlkZXJcIiwgJy8nXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVsxXVxuICAgICAgICBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwcyA9IFIuc3BhbiBjbGFzc05hbWU6IFwiI3tzaC5tZXRhLnNpZGV9IGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVtzdXBlcnBvd2VyVG9JbmRleCBzaC5tZXRhLnNpZGVdXG5cbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGlwc1xuICAgICAgICBcIiBpbiAje3NoLm1ldGEuY291bnRyeS5zaG9ydG5hbWV9IChcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSAje2N0cmxVU0F9XCIsIHNoLm1ldGEuaXBzWzBdXG4gICAgICAgIFwiL1wiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNzciAje2N0cmxVU1NSfVwiLCBzaC5tZXRhLmlwc1sxXVxuICAgICAgICBcIilcIlxuICAgICAgXVxuICAgIHdoZW4gJ3ZhbCdcbiAgICAgIG9sZFNpZGUgPSBuZXdTaWRlID0gc2gubWV0YS5zaWRlXG5cbiAgICAgIGlmIHNoLm1ldGEuaWQgPT0gJ3Njb3JlJ1xuICAgICAgICBvbGRTaWRlID0gc2NvcmVTaWRlIHNoLm1ldGEub2xkXG4gICAgICAgIG5ld1NpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5uZXdcblxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBcIiN7dXBwZXJGaXJzdChzaC5tZXRhLmlkKX0gXCJcbiAgICAgICAgUi5zdHJvbmcgY2xhc3NOYW1lOiBvbGRTaWRlLCBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5vbGQsICdsb25nJyl9IFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdhcnJvdycsICfinpQgJ1xuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG5ld1NpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgXVxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgc2lkZSA9IHJvdW5kU2lkZVxuICAgICAgcm91bmRUaXRsZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgICAgICAgIFwiSGVhZGxpbmUgUGhhc2VcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgXCIje3NpZGUudG9VcHBlckNhc2UoKX0gQWN0aW9uIFJvdW5kICN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgICAgICBcbiAgICAgICNzaWRlID0gWyd1c3NyJywgJ3VzYSddWyhzaC5zdGF0ZS5nYW1lLnJvdW5kICsgMSkgJSAyXVxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBzaWRlLCByb3VuZFRpdGxlXG4gICAgICBdXG4gICAgd2hlbiAndHVybidcbiAgICAgIGRpc3AgPSBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgIGlmIHNoLnN0YXRlLmdhbWUudHVybiAhPSAwIGFuZCBzaC5zdGF0ZS5nYW1lLnR1cm4gPD0gMTBcbiAgICAgICAgZGlzcCA9IFwiVHVybiAje2Rpc3B9XCJcbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGRpc3BcbiAgICAgIF1cbiAgICBlbHNlXG4gICAgICBzaC5tZXRhLm1zZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIHNob3VsZEl0ID0gZmFsc2VcbiAgICB0UCA9IEBwcm9wc1xuICAgIHRTaE0gPSBAcHJvcHMuc2gubWV0YVxuICAgIG5TaE0gPSBuUC5zaC5tZXRhXG4gICAgIyBJUCBwbGFjZW1lbnRcbiAgICBpZiB0U2hNPy5pcHM/XG4gICAgICBzaG91bGRJdCA9IHRTaE0uaXBzWzBdICE9IG5TaE0uaXBzWzBdIG9yXG4gICAgICAgIHRTaE0uaXBzWzFdICE9IG5TaE0uaXBzWzFdXG4gICAgaWYgdFNoTS50eXBlID09ICd2YWwnXG4gICAgICBzaG91bGRJdCA9IHRTaE0ubmV3ICE9IG5TaE0ubmV3XG4gICAgIyBJZiBjdXJyZW50L2xhdGVzdCBjaGFuZ2VkXG4gICAgaWYgdFAuaXNMYXRlc3QgIT0gblAuaXNMYXRlc3Qgb3IgdFAuaXNDdXJyZW50ICE9IG5QLmlzQ3VycmVudFxuICAgICAgc2hvdWxkSXQgPSB0cnVlXG5cbiAgICBzaG91bGRJdFxuXG4gIHJlbmRlcjotPlxuICAgIGF0dHJzID1cbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5vbkNsaWNrXG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICdjbGVhcmZpeCc6IHRydWVcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1sYXRlc3QnOiBAcHJvcHMuaXNMYXRlc3RcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1jdXJyZW50JzogQHByb3BzLmlzQ3VycmVudFxuICAgIFIubGkgYXR0cnMsIHNoRW50cnkoQHByb3BzLnNoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmRTdGF0dXNWYWx1ZSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXNWYWx1ZSdcbkRpZSA9IHJlcXVpcmUgJy4vRGllJ1xuXG50YWJsZSA9XG4gICdTY29yZSc6ICdTJ1xuICAnRGVmY29uJzogJ0QnXG4gICdNaWxPcHMtdXNhJzogJ00nXG4gICdNaWxPcHMtdXNzcic6ICdPJ1xuICAnVHVybic6ICdUJ1xuICAnUm91bmQnOiAnUidcbiAgJ1NwYWNlLXVzYSc6ICdwJ1xuICAnU3BhY2UtdXNzcic6ICdhJ1xuICAnQWN0aW9uIEhpc3RvcnknOiAnSCdcbiAgJ1JvbGwgZGljZSc6ICdjJ1xuXG5oaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgPSAodGl0bGUsc2lkZT0nJyktPlxuICB0aXRsZVNpZGUgPSB0aXRsZVxuICBpZiBzaWRlICE9ICcnIGFuZCB0aXRsZSAhPSAnUm91bmQnXG4gICAgdGl0bGVTaWRlID0gXCIje3RpdGxlfS0je3NpZGV9XCJcblxuICBbaGVhZCwgdGFpbF0gPSB0aXRsZS5zcGxpdCB0YWJsZVt0aXRsZVNpZGVdXG4gIG1pZCA9IHRhYmxlW3RpdGxlU2lkZV1cbiAgW1xuICAgIGhlYWRcbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAnU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCBtaWRcbiAgICB0YWlsXG4gIF1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzJ1xuXG4gIHJvbGxEaWNlOiAtPlxuICAgIF8uZWFjaCBAcmVmcywgKHJlZiktPiByZWYucm9sbERpZSgpXG5cbiAgaGFuZGxlQm90aENsaWNrOiAtPlxuICAgIEByb2xsRGljZSgpXG5cbiAgcmVuZGVyOiAtPlxuICBcbiAgICBzY29yZVNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5zY29yZSAhPSAwXG4gICAgICBzY29yZVNpZGUgPSBpZiBAcHJvcHMuc2NvcmUgPCAwIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgUm91bmQ6IDAgaXMgaGVhZGxpbmUsIG9kZHMgYXJlIFVTU1IsIGV2ZW5zIGFyZSBVU0FcbiAgICByb3VuZCA9IGlmIEBwcm9wcy5yb3VuZCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKEBwcm9wcy5yb3VuZCAvIDIpXG4gICAgcm91bmRTaWRlID0gJydcbiAgICBpZiBAcHJvcHMucm91bmQgIT0gMFxuICAgICAgcm91bmRTaWRlID0gaWYgQHByb3BzLnJvdW5kICUgMiA9PSAxIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgIHR1cm4gPSBzd2l0Y2ggQHByb3BzLnR1cm5cbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSBAcHJvcHMudHVyblxuXG4gICAgIyBTaG9ydGhhbmQgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgc3RhdHVzVmFsdWUgPSAoaWQ9JycsIHRpdGxlPScnLCB2YWw9JycsIHNpZGU9JycpPT5cbiAgICAgIHRpdGxlID0gaGlsaWdodFNob3J0Y3V0TGV0dGVyIHRpdGxlLCBzaWRlXG4gICAgICBCb2FyZFN0YXR1c1ZhbHVlIF8uYXNzaWduIHtpZCwgdGl0bGUsIHZhbCwgc2lkZX0sIGhhbmRsZVZhbENsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2tcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRTdGF0dXMnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzY29yZScsICdTY29yZScsIE1hdGguYWJzKEBwcm9wcy5zY29yZSksIHNjb3JlU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnZGVmY29uJywgJ0RlZmNvbicsIEBwcm9wcy5kZWZjb25cbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sJywgW1xuICAgICAgICBzdGF0dXNWYWx1ZSAndHVybicsICdUdXJuJywgdHVyblxuICAgICAgICBzdGF0dXNWYWx1ZSAncm91bmQnLCAnUm91bmQnLCByb3VuZCwgcm91bmRTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzcGFjZScsICdTcGFjZScsIEBwcm9wcy5zcGFjZVswXSwgJ3VzYSdcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scycsIFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy11bmRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3VuZG8nKSwgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHopJ1xuICAgICAgICAgICAgJyBVbmRvJ1xuICAgICAgICAgIF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1oaXN0b3J5JyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3RvZ2dsZScpLFxuICAgICAgICAgICAgaGlsaWdodFNob3J0Y3V0TGV0dGVyICdBY3Rpb24gSGlzdG9yeSdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1yZWRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3JlZG8nKSwgW1xuICAgICAgICAgICAgJ1JlZG8gJ1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHkpJ1xuICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2RpY2UnLCBbXG4gICAgICAgIERpZSByZWY6ICdkaWUtdXNhJywgc2lkZTogJ3VzYSdcbiAgICAgICAgUi5hIGNsYXNzTmFtZTogJ3JvbGwtZGljZScsIG9uQ2xpY2s6IEBoYW5kbGVCb3RoQ2xpY2ssIGhpbGlnaHRTaG9ydGN1dExldHRlcignUm9sbCBkaWNlJylcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c3NyJywgc2lkZTogJ3Vzc3InXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzVmFsdWUnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAudmFsICE9IEBwcm9wcy52YWwgb3IgblAuc2lkZSAhPSBAcHJvcHMuc2lkZVxuICByZW5kZXI6IC0+XG4gICAgc2lkZUNsYXNzID0gc3dpdGNoIEBwcm9wcy5zaWRlXG4gICAgICB3aGVuICd1c2EnLCAndXNzcicgdGhlbiBAcHJvcHMuc2lkZVxuICAgICAgZWxzZSAnJ1xuXG4gICAgZGVjQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnZGVjJ1xuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnZGVjJywgQHByb3BzLnNpZGUpXG4gICAgaW5jQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnaW5jJyxcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2luYycsIEBwcm9wcy5zaWRlKVxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNMYWJlbFwiLCBAcHJvcHMudGl0bGVcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNWYWx1ZSAje3NpZGVDbGFzc31cIiwgW1xuICAgICAgICBSLnNwYW4gZGVjQXR0cnMsICfil4AnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd2YWwnLCBAcHJvcHMudmFsXG4gICAgICAgIFIuc3BhbiBpbmNBdHRycywgJ+KWtidcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5jYXJkU3RhZ2VzID0gMTonRUFSTFknLCAyOidNSUQnLCAzOidMQVRFJ1xuXG5jYXJkQ2xhc3NOYW1lID0gKHByb3BzKSAtPlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBcIm93bmVyLSN7cHJvcHMub3duZXJ9IGNhcmQtdmlldy0je3Byb3BzLnZpZXd9ICN7Y2xhc3Nlc31cIlxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZCdcbiAgcmVuZGVyOiAtPlxuICAgIG1haW4gPSBbXG4gICAgICAgIFIuc3BhbiB7Y2xhc3NOYW1lOiAnY2FyZC10aXRsZS1ob2xkZXInIH0sIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1zdGFnZScsIGNhcmRTdGFnZXNbQHByb3BzLnN0YWdlXVxuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC1vcHMnLCBpZiBAcHJvcHMub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgQHByb3BzLm9wc1xuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScsIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMudGl0bGV9IFwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1pZCcsIFwiIyN7QHByb3BzLmlkfVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIucCBjbGFzc05hbWU6ICdjYXJkLXRleHQnLCBAcHJvcHMudGV4dFxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICAgIG1haW4gPVxuICAgICAgICBSLmltZ1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcmQtaW1nJ1xuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG5cbiAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsIGNsYXNzTmFtZTogY2FyZENsYXNzTmFtZShAcHJvcHMpICsgJyBjYXJkJywgbWFpblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRJbWcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkIGNhcmRJbWcnLFxuICAgICAgUi5hIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICBSLmltZyBzcmM6IFwiL2ltYWdlcy9jYXJkcy9zbS8je3plcm9QYWQgQHByb3BzLmlkfS5qcGdcIlxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQ2FyZCA9IHJlcXVpcmUgJy4vQ2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRMaXN0J1xuICByZW5kZXI6IC0+XG4gICAgY2xhc3NOYW1lID0gY3hcbiAgICAgICdjYXJkTGlzdCc6IHRydWVcbiAgICAgICdjYXJkTGlzdEZ1bGwnOiBAcHJvcHMudmlldyA9PSAndGV4dCdcbiAgICAgICdjYXJkTGlzdEltZyc6IEBwcm9wcy52aWV3ID09ICdpbWcnXG4gICAgUi5kaXYge2NsYXNzTmFtZX0sIEBwcm9wcy5jYXJkcy5tYXAgKGVsKSA9PlxuICAgICAgQ2FyZCBfLm1lcmdlIGVsLFxuICAgICAgICBrZXk6IFwiY2FyZCN7ZWwuaWR9XCJcbiAgICAgICAgc2hvd0Z1bGxUZXh0OiBAcHJvcHMuZnVsbFRleHRcbiAgICAgICAgdmlldzogQHByb3BzLnZpZXdcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0RpZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCwgblMpLT5cbiAgICBuUy5yb2xsaW5nICE9IEBzdGF0ZS5yb2xsaW5nIG9yIG5TLnZhbCAhPSBAc3RhdGUudmFsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvbGxzOiAzMFxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICB2YWw6IDFcbiAgICByb2xsaW5nOiBmYWxzZVxuICAgIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICBjbGlja0RpZTogLT5cbiAgICBAcm9sbERpZSgpXG5cbiAgcm9sbERpZTogLT5cbiAgICByZXR1cm4gaWYgQHN0YXRlLnJvbGxpbmdcbiAgICBAaXRlcmF0ZVJvbGwoKVxuXG4gIGl0ZXJhdGVSb2xsOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUucm9sbGluZ1xuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IHRydWUsIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICAgIGlmIEBzdGF0ZS5yb2xscyA9PSAwXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogZmFsc2UsIHJvbGxzOiBAcHJvcHMucm9sbHNcbiAgICBlbHNlXG4gICAgICB0aW1lID0gKDEwIC0gQHN0YXRlLnJvbGxzKSAqIDE4ICsgNTBcbiAgICAgIGlmIEBzdGF0ZS5yb2xscyA+IDEwXG4gICAgICAgIHRpbWUgPSA1MFxuXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgdmFsOiBfLnJhbmRvbSgxLDYpXG4gICAgICAgIHJvbGxzOiBAc3RhdGUucm9sbHMgLSAxXG4gICAgICBzZXRUaW1lb3V0IEBpdGVyYXRlUm9sbCwgdGltZVxuXG4gIHJlbmRlcjogLT5cbiAgICByb2xsaW5nID0gaWYgQHN0YXRlLnJvbGxpbmcgYW5kIEBzdGF0ZS5yb2xscyA+IDAgdGhlbiAncm9sbGluZycgZWxzZSAnJ1xuICAgIFIuZGl2IG9uQ2xpY2s6IEBjbGlja0RpZSwgY2xhc3NOYW1lOiBcImRpZSBkaWUtI3tAcHJvcHMuc2lkZX0gI3tyb2xsaW5nfVwiLCBAc3RhdGUudmFsXG5cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Zvb3RlcicsIFtcbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vamp0LmlvJywgJ0phc29uIFRyaWxsJ1xuICAgICAgICAnIHdpdGggaGVscCBmcm9tICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnLycsICdDb2ZmZWVTY3JpcHQnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJywgJ1JlYWN0J1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vYnJvd3NlcmlmeS5vcmcvJywgJ0Jyb3dzZXJpZnknXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9sb2Rhc2guY29tLycsICdMby1EYXNoJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLCAnQm9vdHN0cmFwJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vemVwdG9qcy5jb20nLCAnWmVwdG8nXG4gICAgICAgICcsIGFuZCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ3VscGpzLmNvbScsICdHdWxwJ1xuICAgICAgICAnLidcbiAgICAgICAgUi5icigpXG4gICAgICAgICdJdCBvd2VzIGl0cyBleGlzdGVuY2UgdG8gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tJywgJ1R3aWxpZ2h0IFN0cmF0ZWd5J1xuICAgICAgICAnLiBDb21tZW50cywgc3VnZ2VzdGlvbnMsIGFuZCBidWcgcmVwb3J0cyBjYW4gYmUgYWltZWQgYXQgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnL2lzc3VlcycsICdHaXRodWInXG4gICAgICAgICcgb3IgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aXR0ZXIuY29tL2phc29udHJpbGwnLCAnQGphc29udHJpbGwnXG4gICAgICAgICcuJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdOYXZWaWV3J1xuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgYWN0aXZlOiAnJ1xuXG4gIHJlbmRlcjogLT5cblxuICAgIGxpID0gKG1lbnVLZXksIGhyZWYsIHRpdGxlKT0+XG4gICAgICBSLmxpIGNsYXNzTmFtZTogY3goJ2FjdGl2ZSc6IEBwcm9wcy5hY3RpdmUgPT0gbWVudUtleSksXG4gICAgICAgIFIuYSBocmVmOiBocmVmLCB0aXRsZVxuXG4gICAgUi5uYXYgY2xhc3NOYW1lOiBcIm5hdmJhciBcIiwgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIsIFtcblxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6IFwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgIFIuYSBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6ICcjLycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWdcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuXG4gICAgICAgIFIudWwgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2XCIsIFtcbiAgICAgICAgICBsaSAnY2FyZHMnLCAnIy9jYXJkcycsICdDYXJkcydcbiAgICAgICAgICBsaSAnYm9hcmQnLCAnIy9ib2FyZCcsICdCb2FyZCdcbiAgICAgICAgICBsaSAnYWJvdXQnLCAnIy9hYm91dCcsICdBYm91dCdcbiAgICAgICAgXVxuXG4gICAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIl19
