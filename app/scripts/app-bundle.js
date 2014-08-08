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


},{"../app/data/cards.json":1,"./libs":15,"./pages":41,"./router":42,"./views":60}],4:[function(require,module,exports){
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
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee");f["MicroEventClass"]=require("/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee");f["StateHistory"]=require("/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee");f["cardClassName"]=require("/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee");f["contientCodeFromOneLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee");f["continentCodeFromLetter"]=require("/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee");f["filterTruthy"]=require("/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee");f["filterUnique"]=require("/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee");f["filterValidCardIds"]=require("/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee");f["gameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee");f["gameValDisplay"]=require("/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/libs/index.coffee");f["intToStrWithSign"]=require("/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee");f["numToChar"]=require("/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee");f["oneLetterContinentCode"]=require("/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee");f["qs"]=require("/Users/jjt/Sites/twistrug/src/libs/qs.coffee");f["rangedGameVal"]=require("/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee");f["setPageTitle"]=require("/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee");f["signFromDir"]=require("/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee");f["signString"]=require("/Users/jjt/Sites/twistrug/src/libs/signString.coffee");f["signedNumOrDash"]=require("/Users/jjt/Sites/twistrug/src/libs/signedNumOrDash.coffee");f["signedStr"]=require("/Users/jjt/Sites/twistrug/src/libs/signedStr.coffee");f["sortNumerical"]=require("/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee");f["stateEncoder"]=require("/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee");f["superStats"]=require("/Users/jjt/Sites/twistrug/src/libs/superStats.coffee");f["superpowerToIndex"]=require("/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee");f["upperFirst"]=require("/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee");f["views"]=require("/Users/jjt/Sites/twistrug/src/libs/views.coffee");f["zeroPad"]=require("/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/libs/BoardStateHistory.coffee":4,"/Users/jjt/Sites/twistrug/src/libs/MicroEventClass.coffee":5,"/Users/jjt/Sites/twistrug/src/libs/StateHistory.coffee":6,"/Users/jjt/Sites/twistrug/src/libs/cardClassName.coffee":7,"/Users/jjt/Sites/twistrug/src/libs/contientCodeFromOneLetter.coffee":8,"/Users/jjt/Sites/twistrug/src/libs/continentCodeFromLetter.coffee":9,"/Users/jjt/Sites/twistrug/src/libs/filterTruthy.coffee":10,"/Users/jjt/Sites/twistrug/src/libs/filterUnique.coffee":11,"/Users/jjt/Sites/twistrug/src/libs/filterValidCardIds.coffee":12,"/Users/jjt/Sites/twistrug/src/libs/gameVal.coffee":13,"/Users/jjt/Sites/twistrug/src/libs/gameValDisplay.coffee":14,"/Users/jjt/Sites/twistrug/src/libs/index.coffee":15,"/Users/jjt/Sites/twistrug/src/libs/intToStrWithSign.coffee":16,"/Users/jjt/Sites/twistrug/src/libs/numToChar.coffee":17,"/Users/jjt/Sites/twistrug/src/libs/oneLetterContinentCode.coffee":18,"/Users/jjt/Sites/twistrug/src/libs/qs.coffee":19,"/Users/jjt/Sites/twistrug/src/libs/rangedGameVal.coffee":20,"/Users/jjt/Sites/twistrug/src/libs/setPageTitle.coffee":21,"/Users/jjt/Sites/twistrug/src/libs/signFromDir.coffee":22,"/Users/jjt/Sites/twistrug/src/libs/signString.coffee":23,"/Users/jjt/Sites/twistrug/src/libs/signedNumOrDash.coffee":24,"/Users/jjt/Sites/twistrug/src/libs/signedStr.coffee":25,"/Users/jjt/Sites/twistrug/src/libs/sortNumerical.coffee":26,"/Users/jjt/Sites/twistrug/src/libs/stateEncoder.coffee":27,"/Users/jjt/Sites/twistrug/src/libs/superStats.coffee":28,"/Users/jjt/Sites/twistrug/src/libs/superpowerToIndex.coffee":29,"/Users/jjt/Sites/twistrug/src/libs/upperFirst.coffee":30,"/Users/jjt/Sites/twistrug/src/libs/views.coffee":31,"/Users/jjt/Sites/twistrug/src/libs/zeroPad.coffee":32}],16:[function(require,module,exports){
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


},{"../libs/BoardStateHistory":4,"../libs/StateHistory":6,"../views/Board":44,"../views/BoardStateHistory":50}],35:[function(require,module,exports){
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


},{"../libs":15,"../views/CardList":56}],38:[function(require,module,exports){
module.exports = React.createClass({
  displayName: 'CountriesView ',
  render: function() {
    return R.div({
      className: 'countriesView'
    }, [R.h2({}, 'Countries')]);
  }
});


},{}],39:[function(require,module,exports){
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


},{}],40:[function(require,module,exports){
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


},{}],41:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");f["About"]=require("/Users/jjt/Sites/twistrug/src/pages/About.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/pages/Board.coffee");f["BoardPic"]=require("/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/pages/Card.coffee");f["Cards"]=require("/Users/jjt/Sites/twistrug/src/pages/Cards.coffee");f["Countries"]=require("/Users/jjt/Sites/twistrug/src/pages/Countries.coffee");f["Home"]=require("/Users/jjt/Sites/twistrug/src/pages/Home.coffee");f["Whoops"]=require("/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/pages/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/pages/About.coffee":33,"/Users/jjt/Sites/twistrug/src/pages/Board.coffee":34,"/Users/jjt/Sites/twistrug/src/pages/BoardPic.coffee":35,"/Users/jjt/Sites/twistrug/src/pages/Card.coffee":36,"/Users/jjt/Sites/twistrug/src/pages/Cards.coffee":37,"/Users/jjt/Sites/twistrug/src/pages/Countries.coffee":38,"/Users/jjt/Sites/twistrug/src/pages/Home.coffee":39,"/Users/jjt/Sites/twistrug/src/pages/Whoops.coffee":40,"/Users/jjt/Sites/twistrug/src/pages/index.coffee":41}],42:[function(require,module,exports){
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
          return node;
        });
        countries = countries.map(function(node, index, countries) {
          var isUnique;
          node.shortcutUnique = node.shortcut;
          isUnique = void 0 === _.find(countries, function(c) {
            if (c.continent === node.continent) {
              if (c.shortcut.charAt(0) === node.shortcut.charAt(0) && c.id !== node.id) {
                return true;
              } else {
                return false;
              }
            }
          });
          if (isUnique) {
            node.shortcutUnique = node.shortcut.charAt(0);
          }
          return node;
        });
        regionInfoNodes = regionInfoNodes.map(function(node) {
          node.regionInfo = true;
          node.fixed = true;
          return node;
        });
        nodes = _.union(countries, regionInfoNodes);
        nodes = _.zipObject(_.pluck(nodes, 'id'), nodes);
        countryShortcuts = _.mapValues(_.groupBy(countries, 'continent'), function(cNodes, continent) {
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


},{"../app/data/map-data.json":2,"./libs":15,"./libs/oneLetterContinentCode":18,"./vent":43}],43:[function(require,module,exports){
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


},{"./libs/MicroEventClass":5}],44:[function(require,module,exports){
var BoardLink, BoardNode, BoardNodeDiv, BoardStatus, R, contCountrySelection, continentCodeFromLetter, continentShortcutData, cx, filterTruthy, getRegionStatus, oneLetterContinentCode, rangedGameVal, signedNumOrDash, stateEncoder, superStats, superpowerToIndex, upperFirst,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

R = React.DOM;

cx = React.addons.classSet;

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
      ipSetCountry: null,
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
      ipIPChange: [0, 0],
      ipSetCountry: null
    });
  },
  ipKeySequence: function(code, ev) {
    var char, charLower, continent, countries, country, countryCode, countryIPs, delta, dir, ipChange, ipKS, ipsChanged, side, _ref;
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
        ipSetCountry: null,
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
        ipSetCountry: null,
        ipIPChange: [0, 0]
      });
      return;
    }
    continent = ipKS.charAt(1);
    if ((2 <= (_ref = ipKS.length) && _ref <= 3)) {
      ipKS += charLower;
      countryCode = ipKS.slice(2);
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
          ipSetCountry: null,
          ipIPChange: [0, 0]
        });
      }
    }
    countryCode = ipKS.slice(2, 4);
    if (countryCode.length === 1) {
      country = _.find(this.props.nodes, {
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
      country = _.find(this.props.nodes, {
        shortcut: countryCode,
        continent: continentCodeFromLetter(continent)
      });
    }
    if (country != null) {
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
      this.setState;
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
    node = _.find(this.props.nodes, {
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


},{"../libs/continentCodeFromLetter":9,"../libs/filterTruthy":10,"../libs/oneLetterContinentCode":18,"../libs/rangedGameVal":20,"../libs/signedNumOrDash":24,"../libs/stateEncoder":27,"../libs/superStats":28,"../libs/upperFirst":30,"./BoardLink":45,"./BoardNode":46,"./BoardNodeDiv":47,"./BoardStatus":52}],45:[function(require,module,exports){
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


},{}],46:[function(require,module,exports){
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


},{"./BoardNodeIP":48}],47:[function(require,module,exports){
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


},{"./BoardNodeIPDiv":49}],48:[function(require,module,exports){
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


},{}],49:[function(require,module,exports){
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


},{}],50:[function(require,module,exports){
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


},{"./BoardStateHistoryEntry":51}],51:[function(require,module,exports){
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


},{"../libs/gameValDisplay":14,"../libs/intToStrWithSign":16,"../libs/superpowerToIndex":29,"../libs/upperFirst":30,"../libs/zeroPad":32}],52:[function(require,module,exports){
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


},{"./BoardStatusValue":53,"./Die":57}],53:[function(require,module,exports){
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


},{}],54:[function(require,module,exports){
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


},{"../libs/zeroPad":32}],55:[function(require,module,exports){
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


},{"../libs/zeroPad":32}],56:[function(require,module,exports){
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


},{"./Card":54}],57:[function(require,module,exports){
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


},{}],58:[function(require,module,exports){
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


},{}],59:[function(require,module,exports){
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


},{}],60:[function(require,module,exports){
module.exports = (function () {var f = require("/Users/jjt/Sites/twistrug/src/views/index.coffee");f["Board"]=require("/Users/jjt/Sites/twistrug/src/views/Board.coffee");f["BoardLink"]=require("/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee");f["BoardNode"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee");f["BoardNodeDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee");f["BoardNodeIP"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee");f["BoardNodeIPDiv"]=require("/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee");f["BoardStateHistory"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee");f["BoardStateHistoryEntry"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee");f["BoardStatus"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee");f["BoardStatusValue"]=require("/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee");f["Card"]=require("/Users/jjt/Sites/twistrug/src/views/Card.coffee");f["CardImg"]=require("/Users/jjt/Sites/twistrug/src/views/CardImg.coffee");f["CardList"]=require("/Users/jjt/Sites/twistrug/src/views/CardList.coffee");f["Die"]=require("/Users/jjt/Sites/twistrug/src/views/Die.coffee");f["Footer"]=require("/Users/jjt/Sites/twistrug/src/views/Footer.coffee");f["Nav"]=require("/Users/jjt/Sites/twistrug/src/views/Nav.coffee");f["index"]=require("/Users/jjt/Sites/twistrug/src/views/index.coffee");return f;})();


},{"/Users/jjt/Sites/twistrug/src/views/Board.coffee":44,"/Users/jjt/Sites/twistrug/src/views/BoardLink.coffee":45,"/Users/jjt/Sites/twistrug/src/views/BoardNode.coffee":46,"/Users/jjt/Sites/twistrug/src/views/BoardNodeDiv.coffee":47,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIP.coffee":48,"/Users/jjt/Sites/twistrug/src/views/BoardNodeIPDiv.coffee":49,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistory.coffee":50,"/Users/jjt/Sites/twistrug/src/views/BoardStateHistoryEntry.coffee":51,"/Users/jjt/Sites/twistrug/src/views/BoardStatus.coffee":52,"/Users/jjt/Sites/twistrug/src/views/BoardStatusValue.coffee":53,"/Users/jjt/Sites/twistrug/src/views/Card.coffee":54,"/Users/jjt/Sites/twistrug/src/views/CardImg.coffee":55,"/Users/jjt/Sites/twistrug/src/views/CardList.coffee":56,"/Users/jjt/Sites/twistrug/src/views/Die.coffee":57,"/Users/jjt/Sites/twistrug/src/views/Footer.coffee":58,"/Users/jjt/Sites/twistrug/src/views/Nav.coffee":59,"/Users/jjt/Sites/twistrug/src/views/index.coffee":60}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvY2FyZHMuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL1R3aXN0cnVnLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9NaWNyb0V2ZW50Q2xhc3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9TdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9jYXJkQ2xhc3NOYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvY29udGllbnRDb2RlRnJvbU9uZUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2NvbnRpbmVudENvZGVGcm9tTGV0dGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVHJ1dGh5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVW5pcXVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVmFsaWRDYXJkSWRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZ2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWxEaXNwbGF5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9pbnRUb1N0cldpdGhTaWduLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvbnVtVG9DaGFyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3FzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcmFuZ2VkR2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NldFBhZ2VUaXRsZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25Gcm9tRGlyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2lnblN0cmluZy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25lZE51bU9yRGFzaC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25lZFN0ci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NvcnROdW1lcmljYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdGF0ZUVuY29kZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdXBlclN0YXRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc3VwZXJwb3dlclRvSW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy91cHBlckZpcnN0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvdmlld3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy96ZXJvUGFkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0Fib3V0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkUGljLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NhcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ2FyZHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ291bnRyaWVzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOW1GQSxJQUFBLG9GQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLElBQ0EsR0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQURwQixDQUFBOztBQUFBLE1BRUEsR0FBUyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BRnRCLENBQUE7O0FBQUEsRUFHQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFIbEIsQ0FBQTs7QUFBQSxDQUlBLEdBQUksS0FKSixDQUFBOztBQUFBLFNBTUEsR0FBWSxPQUFBLENBQVEsd0JBQVIsQ0FOWixDQUFBOztBQUFBLENBVUMsQ0FB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RUFBVyxTQUFYO0FBQUEsTUFBc0IsSUFBQSxFQUFNLFlBQTVCO0tBQU4sRUFDRSxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsV0FBWDtLQUFOLEVBQThCO01BRTVCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxlQUFYO09BQU4sRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsUUFBQSxTQUFBLEVBQVcsY0FBWDtBQUFBLFFBQTJCLElBQUEsRUFBTSxJQUFqQztPQUFKLEVBQTJDO1FBQ3pDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxLQUFYO1NBQVAsRUFBeUIsS0FBekIsQ0FEeUMsRUFFekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBUCxFQUEyQixPQUEzQixDQUZ5QztPQUEzQyxDQURGLENBRjRCLEVBUTVCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxnQkFBWDtPQUFMLEVBQWtDLENBQ2hDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQURnQyxFQUVoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FGZ0MsRUFHaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBSGdDLENBQWxDLENBUjRCO0tBQTlCLENBREYsRUFOTTtFQUFBLENBSlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGNBQVIsQ0FBQSxDQUF3QixTQUF4QixFQUFtQyxDQUFDLFVBQUQsQ0FBbkMsQ0FBakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXHIgIHtcciAgICBcImlkXCI6MSxcciAgICBcInRpdGxlXCI6XCJBc2lhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNzsgQ29udHJvbDogOTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9yZWdpb25zLWFzaWEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MixcciAgICBcInRpdGxlXCI6XCJFdXJvcGUgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiBBdXRvbWF0aWMgVmljdG9yeTsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyArMSBWUCBwZXIgY291bnRyeSBjb250cm9sbGVkIHRoYXQgaXMgYWRqYWNlbnQgdG8gZW5lbXkgc3VwZXJwb3dlcjsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMi9yZWdpb25zLWV1cm9wZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozLFxyICAgIFwidGl0bGVcIjpcIk1pZGRsZSBFYXN0IFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMzsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNzsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzEzL3JlZ2lvbnMtbWlkZGxlLWVhc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NCxcciAgICBcInRpdGxlXCI6XCJEdWNrIGFuZCBDb3ZlclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxLiBUaGUgVVMgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gNSBtaW51cyB0aGUgY3VycmVudCBERUZDT04gbGV2ZWwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2R1Y2stYW5kLWNvdmVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo1LFxyICAgIFwidGl0bGVcIjpcIkZpdmUgWWVhciBQbGFuXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbXVzdCByYW5kb21seSBkaXNjYXJkIGEgY2FyZC4gSWYgdGhlIGNhcmQgaGFzIGEgVVMgYXNzb2NpYXRlZCBFdmVudCwgdGhlIEV2ZW50IG9jY3VycyBpbW1lZGlhdGVseS4gSWYgdGhlIGNhcmQgaGFzIGEgVVNTUiBhc3NvY2lhdGVkIEV2ZW50IG9yIGFuIEV2ZW50IGFwcGxpY2FibGUgdG8gYm90aCBwbGF5ZXJzLCB0aGVuIHRoZSBjYXJkIG11c3QgYmUgZGlzY2FyZGVkIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL2ZpdmUteWVhci1wbGFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo2LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDaGluYSBDYXJkXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhpcyBjYXJkIGJlZ2lucyB0aGUgZ2FtZSB3aXRoIHRoZSBVU1NSLiBXaGVuIHBsYXllZCwgdGhlIHBsYXllciByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZCBpZiBpdCB1c2VzIGFsbCBpdHMgT3BlcmF0aW9ucyBpbiBBc2lhLiBJdCBpcyBwYXNzZWQgdG8gdGhlIG9wcG9uZW50IG9uY2UgcGxheWVkLiBBIHBsYXllciByZWNlaXZlcyAxIFZQIGZvciBob2xkaW5nIHRoaXMgY2FyZCBhdCB0aGUgZW5kIG9mIFR1cm4gMTAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzMxL3RoZS1jaGluYS1jYXJkL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcsXHIgICAgXCJ0aXRsZVwiOlwiU29jaWFsaXN0IEdvdmVybm1lbnRzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGEgdG90YWwgb2YgMyBVUyBJbmZsdWVuY2UgZnJvbSBhbnkgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODMg4oCTIFRoZSBJcm9uIExhZHnigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xMy9zb2NpYWxpc3QtZ292ZXJubWVudHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OCxcciAgICBcInRpdGxlXCI6XCJGaWRlbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIEN1YmEuIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSBpbiBDdWJhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNC9maWRlbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjksXHIgICAgXCJ0aXRsZVwiOlwiVmlldG5hbSBSZXZvbHRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIFZpZXRuYW0uIEZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiByZWNlaXZlcyArMSBPcGVyYXRpb25zIHRvIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIGEgY2FyZCB0aGF0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xNi92aWV0bmFtLXJldm9sdHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMCxcciAgICBcInRpdGxlXCI6XCJCbG9ja2FkZSpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJVbmxlc3MgdGhlIFVTIGltbWVkaWF0ZWx5IGRpc2NhcmRzIGEgY2FyZCB3aXRoIGFuIE9wZXJhdGlvbnMgdmFsdWUgb2YgMyBvciBtb3JlLCByZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTkvYmxvY2thZGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMSxcciAgICBcInRpdGxlXCI6XCJLb3JlYW4gV2FyKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIk5vcnRoIEtvcmVhIGludmFkZXMgU291dGggS29yZWEuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBTb3V0aCBLb3JlYS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCBVUyBJbmZsdWVuY2UgaW4gU291dGggS29yZWEgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8yNS9rb3JlYW4td2FyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTIsXHIgICAgXCJ0aXRsZVwiOlwiUm9tYW5pYW4gQWJkaWNhdGlvbipcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIFJvbWFuaWEuIFRoZSBVU1NSIGFkZHMgc3VmZmljaWVudCBJbmZsdWVuY2UgdG8gUm9tYW5pYSBmb3IgQ29udHJvbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMDIvcm9tYW5pYW4tYWJkaWNhdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEzLFxyICAgIFwidGl0bGVcIjpcIkFyYWItSXNyYWVsaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJQYW4tQXJhYiBDb2FsaXRpb24gaW52YWRlcyBJc3JhZWwuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIElzcmFlbCwgaWYgaXQgaXMgVVMgY29udHJvbGxlZCwgYW5kIGZvciBldmVyeSBVUyBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gSXNyYWVsLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIFVTIEluZmx1ZW5jZSBpbiBJc3JhZWwgd2l0aCBVU1NSIEluZmx1ZW5jZS4gVGhlIFVTU1IgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjNjUg4oCTIENhbXAgRGF2aWQgQWNjb3Jkc+KAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzE2L2FyYWItaXNyYWVsaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTQsXHIgICAgXCJ0aXRsZVwiOlwiQ29tZWNvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIDQgbm9uLVVTIGNvbnRyb2xsZWQgY291bnRyaWVzIG9mIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8yNC9jb21lY29uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTUsXHIgICAgXCJ0aXRsZVwiOlwiTmFzc2VyKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIEVneXB0LiBUaGUgVVMgcmVtb3ZlcyBoYWxmLCByb3VuZGVkIHVwLCBvZiBpdHMgSW5mbHVlbmNlIGZyb20gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzA2L25hc3Nlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE2LFxyICAgIFwidGl0bGVcIjpcIldhcnNhdyBQYWN0IEZvcm1lZCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIGluZmx1ZW5jZSBmcm9tIDQgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlIG9yIGFkZCA1IFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIGNhcmQgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yMC93YXJzYXctcGFjdC1mb3JtZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNyxcciAgICBcInRpdGxlXCI6XCJEZSBHYXVsbGUgTGVhZHMgRnJhbmNlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSAyIFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSBhbmQgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gRnJhbmNlLiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBGcmFuY2Ugb25seS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjQvZGUtZ2F1bGxlLWxlYWRzLWZyYW5jZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE4LFxyICAgIFwidGl0bGVcIjpcIkNhcHR1cmVkIE5hemkgU2NpZW50aXN0KlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIk1vdmUgdGhlIFNwYWNlIFJhY2UgTWFya2VyIGFoZWFkIGJ5IDEgc3BhY2UuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzI3L2NhcHR1cmVkLW5hemktc2NpZW50aXN0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTksXHIgICAgXCJ0aXRsZVwiOlwiVHJ1bWFuIERvY3RyaW5lKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVNTUiBJbmZsdWVuY2UgZnJvbSBhIHNpbmdsZSB1bmNvbnRyb2xsZWQgY291bnRyeSBpbiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzAyL3RydW1hbi1kb2N0cmluZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMCxcciAgICBcInRpdGxlXCI6XCJPbHltcGljIEdhbWVzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhpcyBwbGF5ZXIgc3BvbnNvcnMgdGhlIE9seW1waWNzLiBUaGUgb3Bwb25lbnQgbXVzdCBlaXRoZXIgcGFydGljaXBhdGUgb3IgYm95Y290dC4gSWYgdGhlIG9wcG9uZW50IHBhcnRpY2lwYXRlcywgZWFjaCBwbGF5ZXIgcm9sbHMgYSBkaWUgYW5kIHRoZSBzcG9uc29yIGFkZHMgMiB0byB0aGVpciByb2xsLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCAocmVyb2xsIHRpZXMpLiBJZiB0aGUgb3Bwb25lbnQgYm95Y290dHMsIGRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgc3BvbnNvciBtYXkgY29uZHVjdCBPcGVyYXRpb25zIGFzIGlmIHRoZXkgcGxheWVkIGEgNCBPcHMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvb2x5bXBpYy1nYW1lcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMSxcciAgICBcInRpdGxlXCI6XCJOQVRPKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIGNhbm5vdCBtYWtlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgYWdhaW5zdCBhbnkgVVMgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gRXVyb3BlLiBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUgY2Fubm90IGJlIGF0dGFja2VkIGJ5IHBsYXkgb2YgdGhlIOKAnCMzNiDigJMgQnJ1c2ggV2Fy4oCdIEV2ZW50LiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiBlaXRoZXIgdGhlIOKAnCMxNiDigJMgV2Fyc2F3IFBhY3QgRm9ybWVk4oCdIG9yIOKAnCMyMyDigJMgTWFyc2hhbGwgUGxhbuKAnSBFdmVudChzKSBpbiBvcmRlciB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEyL25hdG8vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyMixcciAgICBcInRpdGxlXCI6XCJJbmRlcGVuZGVudCBSZWRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBVUyBJbmZsdWVuY2UgdG8gZWl0aGVyIFl1Z29zbGF2aWEsIFJvbWFuaWEsIEJ1bGdhcmlhLCBIdW5nYXJ5LCBvciBDemVjaG9zbG92YWtpYSBzbyB0aGF0IGl0IGVxdWFscyB0aGUgVVNTUiBJbmZsdWVuY2UgaW4gdGhhdCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMy9pbmRlcGVuZGVudC1yZWRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIzLFxyICAgIFwidGl0bGVcIjpcIk1hcnNoYWxsIFBsYW4qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDcgbm9uLVVTU1IgY29udHJvbGxlZCBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE2L21hcnNoYWxsLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNCxcciAgICBcInRpdGxlXCI6XCJJbmRvLVBha2lzdGFuaSBXYXJcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJbmRpYSBpbnZhZGVzIFBha2lzdGFuIG9yIHZpY2UgdmVyc2EgKHBsYXllcuKAmXMgY2hvaWNlKS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIGludmFzaW9uIChJbmRpYSBvciBQYWtpc3RhbikuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgcGxheWVyIHJlY2VpdmVzIDIgVlAgYW5kIHJlcGxhY2VzIGFsbCB0aGUgb3Bwb25lbnTigJlzIEluZmx1ZW5jZSBpbiB0aGUgdGFyZ2V0IGNvdW50cnkgd2l0aCB0aGVpciBJbmZsdWVuY2UuIFRoZSBwbGF5ZXIgYWRkcyAyIHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xOS9pbmRvLXBha2lzdGFuaS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjUsXHIgICAgXCJ0aXRsZVwiOlwiQ29udGFpbm1lbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVUywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWF4aW11bSBvZiA0IE9wZXJhdGlvbnMgcGVyIGNhcmQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yMC9jb250YWlubWVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNixcciAgICBcInRpdGxlXCI6XCJDSUEgQ3JlYXRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMgZm9yIHRoaXMgdHVybi4gVGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjYvY2lhLWNyZWF0ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjcsXHIgICAgXCJ0aXRsZVwiOlwiVVMvSmFwYW4gTXV0dWFsIERlZmVuc2UgUGFjdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBKYXBhbiBmb3IgQ29udHJvbC4gVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IEphcGFuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNy91c2phcGFuLW11dHVhbC1kZWZlbnNlLXBhY3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOCxcciAgICBcInRpdGxlXCI6XCJTdWV6IENyaXNpcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSBmcm9tIEZyYW5jZSwgdGhlIFVuaXRlZCBLaW5nZG9tIGFuZCBJc3JhZWwgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI5L3N1ZXotY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjksXHIgICAgXCJ0aXRsZVwiOlwiRWFzdCBFdXJvcGVhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJFYXJseSBvciBNaWQgV2FyOiBSZW1vdmUgMSBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLiBMYXRlIFdhcjogUmVtb3ZlIDIgVVNTUiBJbmZsdWVuY2UgZnJvbSAzIGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDIvZWFzdC1ldXJvcGVhbi11bnJlc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMwLFxyICAgIFwidGl0bGVcIjpcIkRlY29sb25pemF0aW9uXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNCBjb3VudHJpZXMgaW4gQWZyaWNhIGFuZC9vciBTb3V0aGVhc3QgQXNpYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMDUvZGVjb2xvbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzEsXHIgICAgXCJ0aXRsZVwiOlwiUmVkIFNjYXJlL1B1cmdlXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIE9wZXJhdGlvbnMgdmFsdWUgKHRvIGEgbWluaW11bSB2YWx1ZSBvZiAxIE9wZXJhdGlvbnMgcG9pbnQpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8yMy9yZWQtc2NhcmVwdXJnZS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMixcciAgICBcInRpdGxlXCI6XCJVTiBJbnRlcnZlbnRpb25cIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJQbGF5IHRoaXMgY2FyZCBzaW11bHRhbmVvdXNseSB3aXRoIGEgY2FyZCBjb250YWluaW5nIGFuIG9wcG9uZW504oCZcyBhc3NvY2lhdGVkIEV2ZW50LiBUaGUgb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQgaXMgY2FuY2VsZWQgYnV0IHlvdSBtYXkgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoZSBvcHBvbmVudOKAmXMgY2FyZCB0byBjb25kdWN0IE9wZXJhdGlvbnMuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHBsYXllZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8wNy91bi1pbnRlcnZlbnRpb24vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzMsXHIgICAgXCJ0aXRsZVwiOlwiRGUtU3RhbGluaXphdGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcmVhbGxvY2F0ZSB1cCB0byBhIHRvdGFsIG9mIDQgSW5mbHVlbmNlIGZyb20gb25lIG9yIG1vcmUgY291bnRyaWVzIHRvIGFueSBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNS8yOS9kZS1zdGFsaW5pemF0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzQsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBUZXN0IEJhblwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgZXF1YWwgdG8gdGhlIGN1cnJlbnQgREVGQ09OIGxldmVsIG1pbnVzIDIgdGhlbiBpbXByb3ZlcyB0aGUgREVGQ09OIGxldmVsIGJ5IDIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA2LzExL251Y2xlYXItdGVzdC1iYW4vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzUsXHIgICAgXCJ0aXRsZVwiOlwiRm9ybW9zYW4gUmVzb2x1dGlvbipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgVGFpd2FuIHdpbGwgYmUgdHJlYXRlZCBhcyBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5LCBmb3Igc2NvcmluZyBwdXJwb3NlcyBvbmx5LCBpZiBUYWl3YW4gaXMgVVMgY29udHJvbGxlZCB3aGVuIHRoZSBBc2lhIFNjb3JpbmcgQ2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgY2FuY2VsbGVkIGFmdGVyIHRoZSBVUyBoYXMgcGxheWVkIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDIvZm9ybW9zYW4tcmVzb2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM2LFxyICAgIFwidGl0bGVcIjpcIkJydXNoIFdhclwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXIgYXR0YWNrcyBhbnkgY291bnRyeSB3aXRoIGEgc3RhYmlsaXR5IG51bWJlciBvZiAxIG9yIDIuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGFkamFjZW50IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiAzLTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMSBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDMgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L2JydXNoLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNyxcciAgICBcInRpdGxlXCI6XCJDZW50cmFsIEFtZXJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAxOyBEb21pbmF0aW9uOiAzOyBDb250cm9sOiA1OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA0L3JlZ2lvbnMtY2VudHJhbC1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM4LFxyICAgIFwidGl0bGVcIjpcIlNvdXRoZWFzdCBBc2lhIFNjb3JpbmcqXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiMSBWUCBlYWNoIGZvciBDb250cm9sIG9mIEJ1cm1hLCBDYW1ib2RpYS9MYW9zLCBWaWV0bmFtLCBNYWxheXNpYSwgSW5kb25lc2lhIGFuZCB0aGUgUGhpbGlwcGluZXMuIDIgVlAgZm9yIENvbnRyb2wgb2YgVGhhaWxhbmQ7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvcmVnaW9ucy1zb3V0aGVhc3QtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM5LFxyICAgIFwidGl0bGVcIjpcIkFybXMgUmFjZVwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkNvbXBhcmUgZWFjaCBwbGF5ZXLigJlzIHZhbHVlIG9uIHRoZSBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLiBJZiB0aGUgcGhhc2luZyBwbGF5ZXIgaGFzIGEgaGlnaGVyIHZhbHVlIHRoYW4gdGhlaXIgb3Bwb25lbnQgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDEgVlAuIElmIHRoZSBwaGFzaW5nIHBsYXllciBoYXMgYSBoaWdoZXIgdmFsdWUgdGhhbiB0aGVpciBvcHBvbmVudCwgYW5kIGhhcyBtZXQgdGhlIOKAnHJlcXVpcmVk4oCdIGFtb3VudCwgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2ssIHRoYXQgcGxheWVyIHJlY2VpdmVzIDMgVlAgaW5zdGVhZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDUvYXJtcy1yYWNlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQwLFxyICAgIFwidGl0bGVcIjpcIkN1YmFuIE1pc3NpbGUgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlNldCB0aGUgREVGQ09OIGxldmVsIHRvIDIuIEFueSBDb3VwIEF0dGVtcHRzIGJ5IHlvdXIgb3Bwb25lbnQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgd2lsbCByZXN1bHQgaW4gR2xvYmFsIFRoZXJtb251Y2xlYXIgV2FyLiBZb3VyIG9wcG9uZW50IHdpbGwgbG9zZSB0aGUgZ2FtZS4gVGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgYmUgY2FuY2VsZWQsIGF0IGFueSB0aW1lLCBpZiB0aGUgVVNTUiByZW1vdmVzIDIgSW5mbHVlbmNlIGZyb20gQ3ViYSBvciB0aGUgVVMgcmVtb3ZlcyAyIEluZmx1ZW5jZSBmcm9tIFdlc3QgR2VybWFueSBvciBUdXJrZXkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzA2L2N1YmFuLW1pc3NpbGUtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDEsXHIgICAgXCJ0aXRsZVwiOlwiTnVjbGVhciBTdWJzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlVTIE9wZXJhdGlvbnMgdXNlZCBmb3IgQ291cCBBdHRlbXB0cyBpbiBCYXR0bGVncm91bmQgY291bnRyaWVzLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIGRvIG5vdCBkZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwuIFRoaXMgY2FyZOKAmXMgRXZlbnQgZG9lcyBub3QgYXBwbHkgdG8gYW55IEV2ZW50IHRoYXQgd291bGQgYWZmZWN0IHRoZSBERUZDT04gbGV2ZWwgKGV4LiB0aGUg4oCcIzQwIOKAkyBDdWJhbiBNaXNzaWxlIENyaXNpc+KAnSBFdmVudCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEwL251Y2xlYXItc3Vicy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MixcciAgICBcInRpdGxlXCI6XCJRdWFnbWlyZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCBpdCBtdXN0IGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkIHdpdGggYSB2YWx1ZSBvZiAyIG9yIG1vcmUgYW5kIHJvbGwgMS00IG9uIGEgZGllIHRvIGNhbmNlbCB0aGlzIEV2ZW50LiBSZXBlYXQgdGhpcyBFdmVudCBmb3IgZWFjaCBVUyBhY3Rpb24gcm91bmQgdW50aWwgdGhlIFVTIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVUyBpcyB1bmFibGUgdG8gZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQsIGl0IG11c3QgcGxheSBhbGwgb2YgaXRzIHNjb3JpbmcgY2FyZHMgYW5kIHRoZW4gc2tpcCBlYWNoIGFjdGlvbiByb3VuZCBmb3IgdGhlIHJlc3Qgb2YgdGhlIHR1cm4uIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMTA2IOKAkyBOT1JBROKAnSBFdmVudCAoaWYgYXBwbGljYWJsZSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzEyL3F1YWdtaXJlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MyxcciAgICBcInRpdGxlXCI6XCJTQUxUIE5lZ290aWF0aW9ucypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMi4gRm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIGJvdGggcGxheWVycyByZWNlaXZlIC0xIHRvIGFsbCBDb3VwIEF0dGVtcHQgcm9sbHMuIFRoZSBwbGF5ZXIgb2YgdGhpcyBjYXJk4oCZcyBFdmVudCBtYXkgbG9vayB0aHJvdWdoIHRoZSBkaXNjYXJkIHBpbGUsIHBpY2sgYW55IDEgbm9uLXNjb3JpbmcgY2FyZCwgcmV2ZWFsIGl0IHRvIHRoZWlyIG9wcG9uZW50IGFuZCB0aGVuIHBsYWNlIHRoZSBkcmF3biBjYXJkIGludG8gdGhlaXIgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTcvc2FsdC1uZWdvdGlhdGlvbnMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ0LFxyICAgIFwidGl0bGVcIjpcIkJlYXIgVHJhcCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJPbiB0aGUgVVNTUuKAmXMgbmV4dCBhY3Rpb24gcm91bmQsIGl0IG11c3QgZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQgd2l0aCBhIHZhbHVlIG9mIDIgb3IgbW9yZSBhbmQgcm9sbCAxLTQgb24gYSBkaWUgdG8gY2FuY2VsIHRoaXMgRXZlbnQuIFJlcGVhdCB0aGlzIEV2ZW50IGZvciBlYWNoIFVTU1IgYWN0aW9uIHJvdW5kIHVudGlsIHRoZSBVU1NSIHN1Y2Nlc3NmdWxseSByb2xscyAxLTQgb24gYSBkaWUuIElmIHRoZSBVU1NSIGlzIHVuYWJsZSB0byBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCwgaXQgbXVzdCBwbGF5IGFsbCBvZiBpdHMgc2NvcmluZyBjYXJkcyBhbmQgdGhlbiBza2lwIGVhY2ggYWN0aW9uIHJvdW5kIGZvciB0aGUgcmVzdCBvZiB0aGUgdHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTkvYmVhci10cmFwL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDUsXHIgICAgXCJ0aXRsZVwiOlwiU3VtbWl0XCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQm90aCBwbGF5ZXJzIHJvbGwgYSBkaWUuIEVhY2ggcGxheWVyIHJlY2VpdmVzICsxIHRvIHRoZSBkaWUgcm9sbCBmb3IgZWFjaCBSZWdpb24gKEV1cm9wZSwgQXNpYSwgZXRjLikgdGhleSBEb21pbmF0ZSBvciBDb250cm9sLiBUaGUgcGxheWVyIHdpdGggdGhlIGhpZ2hlc3QgbW9kaWZpZWQgZGllIHJvbGwgcmVjZWl2ZXMgMiBWUCBhbmQgbWF5IGRlZ3JhZGUgb3IgaW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgKGRvIG5vdCByZXJvbGwgdGllcykuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzI0L3N1bW1pdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NixcciAgICBcInRpdGxlXCI6XCJIb3cgSSBMZWFybmVkIHRvIFN0b3AgV29ycnlpbmcqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiU2V0IHRoZSBERUZDT04gbGV2ZWwgdG8gYW55IGxldmVsIGRlc2lyZWQgKDEtNSkuIFRoZSBwbGF5ZXIgYWRkcyA1IHRvIGl0cyBNaWxpdGFyeSBPcGVyYXRpb25zIFRyYWNrLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8yNi9ob3ctaS1sZWFybmVkLXRvLXN0b3Atd29ycnlpbmcvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NyxcciAgICBcInRpdGxlXCI6XCJKdW50YVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAyIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS4gVGhlIHBsYXllciBtYXkgbWFrZSBmcmVlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgaW4gZWl0aGVyIENlbnRyYWwgb3IgU291dGggQW1lcmljYSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAxL2p1bnRhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ4LFxyICAgIFwidGl0bGVcIjpcIktpdGNoZW4gRGViYXRlcypcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgY29udHJvbHMgbW9yZSBCYXR0bGVncm91bmQgY291bnRyaWVzIHRoYW4gdGhlIFVTU1IsIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIHBva2UgdGhlaXIgb3Bwb25lbnQgaW4gdGhlIGNoZXN0IGFuZCByZWNlaXZlIDIgVlAhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzAzL2tpdGNoZW4tZGViYXRlcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0OSxcciAgICBcInRpdGxlXCI6XCJNaXNzaWxlIEVudnlcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJFeGNoYW5nZSB0aGlzIGNhcmQgZm9yIHlvdXIgb3Bwb25lbnTigJlzIGhpZ2hlc3QgdmFsdWUgT3BlcmF0aW9ucyBjYXJkLiBJZiAyIG9yIG1vcmUgY2FyZHMgYXJlIHRpZWQsIG9wcG9uZW50IGNob29zZXMuIElmIHRoZSBleGNoYW5nZWQgY2FyZCBjb250YWlucyBhbiBFdmVudCBhcHBsaWNhYmxlIHRvIHlvdXJzZWxmIG9yIGJvdGggcGxheWVycywgaXQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiBpdCBjb250YWlucyBhbiBvcHBvbmVudOKAmXMgRXZlbnQsIHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSAobm8gRXZlbnQpLiBUaGUgb3Bwb25lbnQgbXVzdCB1c2UgdGhpcyBjYXJkIGZvciBPcGVyYXRpb25zIGR1cmluZyB0aGVpciBuZXh0IGFjdGlvbiByb3VuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDgvbWlzc2lsZS1lbnZ5L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUwLFxyICAgIFwidGl0bGVcIjpcIldlIFdpbGwgQnVyeSBZb3UqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFVubGVzcyB0aGUgIzMyIFVOIEludGVydmVudGlvbiBjYXJkIGlzIHBsYXllZCBhcyBhbiBFdmVudCBvbiB0aGUgVVPigJlzIG5leHQgYWN0aW9uIHJvdW5kLCB0aGUgVVNTUiByZWNlaXZlcyAzIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xMC93ZS13aWxsLWJ1cnkteW91L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTEsXHIgICAgXCJ0aXRsZVwiOlwiQnJlemhuZXYgRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWxsIE9wZXJhdGlvbnMgY2FyZHMgcGxheWVkIGJ5IHRoZSBVU1NSLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtYXhpbXVtIG9mIDQgT3BlcmF0aW9ucyBwZXIgY2FyZCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzEyL2JyZXpobmV2LWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTIsXHIgICAgXCJ0aXRsZVwiOlwiUG9ydHVndWVzZSBFbXBpcmUgQ3J1bWJsZXMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gQW5nb2xhIGFuZCB0aGUgU0UgQWZyaWNhbiBTdGF0ZXMuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE1L3BvcnR1Z3Vlc2UtZW1waXJlLWNydW1ibGVzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTMsXHIgICAgXCJ0aXRsZVwiOlwiU291dGggQWZyaWNhbiBVbnJlc3RcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBlaXRoZXIgYWRkcyAyIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2Egb3IgYWRkcyAxIEluZmx1ZW5jZSB0byBTb3V0aCBBZnJpY2EgYW5kIDIgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgYWRqYWNlbnQgdG8gU291dGggQWZyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNi9zb3V0aC1hZnJpY2FuLXVucmVzdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NCxcciAgICBcInRpdGxlXCI6XCJBbGxlbmRlKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIENoaWxlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xNy9hbGxlbmRlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTUsXHIgICAgXCJ0aXRsZVwiOlwiV2lsbHkgQnJhbmR0KlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgYW5kIGFkZHMgMSBJbmZsdWVuY2UgdG8gV2VzdCBHZXJtYW55LiBUaGlzIEV2ZW50IGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzIxIOKAkyBOQVRP4oCdIEV2ZW50IGZvciBXZXN0IEdlcm1hbnkgb25seS4gVGhpcyBFdmVudCBpcyBwcmV2ZW50ZWQgLyBjYW5jZWxlZCBieSB0aGUg4oCcIzk2IOKAkyBUZWFyIERvd24gdGhpcyBXYWxs4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xOC93aWxseS1icmFuZHQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU2LFxyICAgIFwidGl0bGVcIjpcIk11c2xpbSBSZXZvbHV0aW9uXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSAyIG9mIHRoZSBmb2xsb3dpbmcgY291bnRyaWVzOiBTdWRhbiwgSXJhbiwgSXJhcSwgRWd5cHQsIExpYnlhLCBTYXVkaSBBcmFiaWEsIFN5cmlhLCBKb3JkYW4uIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCMxMTAg4oCTIEFXQUNTIFNhbGUgdG8gU2F1ZGlz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTkvbXVzbGltLXJldm9sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTcsXHIgICAgXCJ0aXRsZVwiOlwiQUJNIFRyZWF0eVwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGVuIGNvbmR1Y3QgT3BlcmF0aW9ucyB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzIzL2FibS10cmVhdHkvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTgsXHIgICAgXCJ0aXRsZVwiOlwiQ3VsdHVyYWwgUmV2b2x1dGlvbipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTIG11c3QgZ2l2ZSB0aGUgY2FyZCB0byB0aGUgVVNTUiAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIHRvIGJlIHBsYXllZCkuIElmIHRoZSBVU1NSIGFscmVhZHkgaGFzIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiByZWNlaXZlcyAxIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNC9jdWx0dXJhbC1yZXZvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTksXHIgICAgXCJ0aXRsZVwiOlwiRmxvd2VyIFBvd2VyKlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDIgVlAgZm9yIGV2ZXJ5IFVTIHBsYXllZCDigJxXYXLigJ0gY2FyZCAoQXJhYi1Jc3JhZWxpIFdhciwgS29yZWFuIFdhciwgQnJ1c2ggV2FyLCBJbmRvLVBha2lzdGFuaSBXYXIsIElyYW4tSXJhcSBXYXIpLCB1c2VkIGZvciBPcGVyYXRpb25zIG9yIGFuIEV2ZW50LCBhZnRlciB0aGlzIGNhcmQgaXMgcGxheWVkLiBUaGlzIEV2ZW50IGlzIHByZXZlbnRlZCAvIGNhbmNlbGVkIGJ5IHRoZSDigJwjOTcg4oCTIEFuIEV2aWwgRW1waXJl4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yNS9mbG93ZXItcG93ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYwLFxyICAgIFwidGl0bGVcIjpcIlUyIEluY2lkZW50KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIElmIHRoZSDigJwjMzIg4oCTIFVOIEludGVydmVudGlvbuKAnSBFdmVudCBpcyBwbGF5ZWQgbGF0ZXIgdGhpcyB0dXJuLCBlaXRoZXIgYnkgdGhlIFVTIG9yIHRoZSBVU1NSLCB0aGUgVVNTUiByZWNlaXZlcyBhbiBhZGRpdGlvbmFsIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI2L3UtMi1pbmNpZGVudC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYxLFxyICAgIFwidGl0bGVcIjpcIk9QRUNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBDb250cm9sIG9mIGVhY2ggb2YgdGhlIGZvbGxvd2luZyBjb3VudHJpZXM6IEVneXB0LCBJcmFuLCBMaWJ5YSwgU2F1ZGkgQXJhYmlhLCBJcmFxLCBHdWxmIFN0YXRlcywgVmVuZXp1ZWxhLiBUaGlzIEV2ZW50IGNhbm5vdCBiZSB1c2VkIGFmdGVyIHRoZSDigJwjODYg4oCTIE5vcnRoIFNlYSBPaWzigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8yOS9vcGVjL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYyLFxyICAgIFwidGl0bGVcIjpcIkxvbmUgR3VubWFuKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzAvbG9uZS1ndW5tYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2MyxcciAgICBcInRpdGxlXCI6XCJDb2xvbmlhbCBSZWFyIEd1YXJkc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA0IGNvdW50cmllcyBpbiBBZnJpY2EgYW5kL29yIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wMS9jb2xvbmlhbC1yZWFyLWd1YXJkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjQsXHIgICAgXCJ0aXRsZVwiOlwiUGFuYW1hIENhbmFsIFJldHVybmVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBQYW5hbWEsIENvc3RhIFJpY2EgYW5kIFZlbmV6dWVsYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDIvcGFuYW1hLWNhbmFsLXJldHVybmVkL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY1LFxyICAgIFwidGl0bGVcIjpcIkNhbXAgRGF2aWQgQWNjb3JkcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBhbmQgYWRkcyAxIEluZmx1ZW5jZSB0byBJc3JhZWwsIEpvcmRhbiBhbmQgRWd5cHQuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCMxMyDigJMgQXJhYi1Jc3JhZWxpIFdhcuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNS9jYW1wLWRhdmlkLWFjY29yZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NixcciAgICBcInRpdGxlXCI6XCJQdXBwZXQgR292ZXJubWVudHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBhZGQgMSBJbmZsdWVuY2UgdG8gMyBjb3VudHJpZXMgdGhhdCBkbyBub3QgY29udGFpbiBJbmZsdWVuY2UgZnJvbSBlaXRoZXIgdGhlIFVTIG9yIFVTU1IuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA2L3B1cHBldC1nb3Zlcm5tZW50cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NyxcciAgICBcInRpdGxlXCI6XCJHcmFpbiBTYWxlcyB0byBTb3ZpZXRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJhbmRvbWx5IHNlbGVjdHMgMSBjYXJkIGZyb20gdGhlIFVTU1LigJlzIGhhbmQgKGlmIGF2YWlsYWJsZSkuIFRoZSBVUyBtdXN0IGVpdGhlciBwbGF5IHRoZSBjYXJkIG9yIHJldHVybiBpdCB0byB0aGUgVVNTUi4gSWYgdGhlIGNhcmQgaXMgcmV0dXJuZWQsIG9yIHRoZSBVU1NSIGhhcyBubyBjYXJkcywgdGhlIFVTIG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDcvZ3JhaW4tc2FsZXMtdG8tc292aWV0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjgsXHIgICAgXCJ0aXRsZVwiOlwiSm9obiBQYXVsIElJIEVsZWN0ZWQgUG9wZSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgMiBVU1NSIEluZmx1ZW5jZSBmcm9tIFBvbGFuZCBhbmQgYWRkIDEgVVMgSW5mbHVlbmNlIHRvIFBvbGFuZC4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMxMDEg4oCTIFNvbGlkYXJpdHnigJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA4L2pvaG4tcGF1bC1paS1lbGVjdGVkLXBvcGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2OSxcciAgICBcInRpdGxlXCI6XCJMYXRpbiBBbWVyaWNhbiBEZWF0aCBTcXVhZHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgb2YgdGhlIHBoYXNpbmcgcGxheWVy4oCZcyBDb3VwIEF0dGVtcHRzIGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBkaWUgcm9sbC4gQWxsIG9mIHRoZSBvcHBvbmVudOKAmXMgQ291cCBBdHRlbXB0cyBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgZGllIHJvbGwuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA5L2xhdGluLWFtZXJpY2FuLWRlYXRoLXNxdWFkcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MCxcciAgICBcInRpdGxlXCI6XCJPQVMgRm91bmRlZCpcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIENlbnRyYWwgb3IgU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTIvb2FzLWZvdW5kZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzEsXHIgICAgXCJ0aXRsZVwiOlwiTml4b24gUGxheXMgdGhlIENoaW5hIENhcmQqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSBkb3duIGFuZCB1bmF2YWlsYWJsZSBmb3IgaW1tZWRpYXRlIHBsYXkpLiBJZiB0aGUgVVMgYWxyZWFkeSBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTMvbml4b24tcGxheXMtdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzIsXHIgICAgXCJ0aXRsZVwiOlwiU2FkYXQgRXhwZWxzIFNvdmlldHMqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIEVneXB0IGFuZCBhZGQgMSBVUyBJbmZsdWVuY2UgdG8gRWd5cHQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzE0L3NhZGF0LWV4cGVscy1zb3ZpZXRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjczLFxyICAgIFwidGl0bGVcIjpcIlNodXR0bGUgRGlwbG9tYWN5XCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhpcyBjYXJk4oCZcyBFdmVudCBpcyBpbiBlZmZlY3QsIHN1YnRyYWN0ICgtMSkgYSBCYXR0bGVncm91bmQgY291bnRyeSBmcm9tIHRoZSBVU1NSIHRvdGFsIGFuZCB0aGVuIGRpc2NhcmQgdGhpcyBjYXJkIGR1cmluZyB0aGUgbmV4dCBzY29yaW5nIG9mIHRoZSBNaWRkbGUgRWFzdCBvciBBc2lhICh3aGljaCBldmVyIGNvbWVzIGZpcnN0KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTUvc2h1dHRsZS1kaXBsb21hY3kvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzQsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIFZvaWNlIG9mIEFtZXJpY2FcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgNCBVU1NSIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgTk9UIGluIEV1cm9wZSAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTYvdGhlLXZvaWNlLW9mLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc1LFxyICAgIFwidGl0bGVcIjpcIkxpYmVyYXRpb24gVGhlb2xvZ3lcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgYSB0b3RhbCBvZiAzIFVTU1IgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQ2VudHJhbCBBbWVyaWNhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTkvbGliZXJhdGlvbi10aGVvbG9neS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NixcciAgICBcInRpdGxlXCI6XCJVc3N1cmkgUml2ZXIgU2tpcm1pc2gqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTU1IgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgdGhlIFVTU1IgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVUyAoZmFjZSB1cCBhbmQgYXZhaWxhYmxlIGZvciBwbGF5KS4gSWYgdGhlIFVTIGFscmVhZHkgaGFzIHRoZSDigJwjNiDigJMgVGhlIENoaW5hIENhcmTigJ0gY2FyZCwgYWRkIGEgdG90YWwgb2YgNCBVUyBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBBc2lhIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjAvdXNzdXJpLXJpdmVyLXNraXJtaXNoL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc3LFxyICAgIFwidGl0bGVcIjpcIkFzayBOb3QgV2hhdCBZb3VyIENvdW50cnnigKYqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBkaXNjYXJkIHVwIHRvIHRoZWlyIGVudGlyZSBoYW5kIG9mIGNhcmRzIChpbmNsdWRpbmcgc2NvcmluZyBjYXJkcykgdG8gdGhlIGRpc2NhcmQgcGlsZSBhbmQgZHJhdyByZXBsYWNlbWVudHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgbnVtYmVyIG9mIGNhcmRzIHRvIGJlIGRpc2NhcmRlZCBtdXN0IGJlIGRlY2lkZWQgYmVmb3JlIGRyYXdpbmcgYW55IHJlcGxhY2VtZW50IGNhcmRzIGZyb20gdGhlIGRyYXcgcGlsZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjEvYXNrLW5vdC13aGF0LXlvdXItY291bnRyeS1jYW4tZG8tZm9yLXlvdS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3OCxcciAgICBcInRpdGxlXCI6XCJBbGxpYW5jZSBmb3IgUHJvZ3Jlc3MqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIGFuZCBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMy9hbGxpYW5jZS1mb3ItcHJvZ3Jlc3MvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzksXHIgICAgXCJ0aXRsZVwiOlwiQWZyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMTsgRG9taW5hdGlvbjogNDsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzExL3JlZ2lvbnMtYWZyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgwLFxyICAgIFwidGl0bGVcIjpcIk9uZSBTbWFsbCBTdGVw4oCmXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgeW91IGFyZSBiZWhpbmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIG1vdmUgdGhlaXIgbWFya2VyIDIgc3BhY2VzIGZvcndhcmQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2suIFRoZSBwbGF5ZXIgcmVjZWl2ZXMgVlAgb25seSBmcm9tIHRoZSBmaW5hbCBzcGFjZSBtb3ZlZCBpbnRvLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNi9vbmUtc21hbGwtc3RlcC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MSxcciAgICBcInRpdGxlXCI6XCJTb3V0aCBBbWVyaWNhIFNjb3JpbmdcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCJQcmVzZW5jZTogMjsgRG9taW5hdGlvbjogNTsgQ29udHJvbDogNjsgKzEgVlAgcGVyIGNvbnRyb2xsZWQgQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gUmVnaW9uOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA4LzE1L3JlZ2lvbnMtc291dGgtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MixcciAgICBcInRpdGxlXCI6XCJJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGFuZCBhZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBJcmFuLiBUaGlzIGNhcmTigJlzIEV2ZW50IHJlcXVpcmVzIHRoZSBVUyB0byBkaXNjYXJkIDIgY2FyZHMsIGluc3RlYWQgb2YgMSBjYXJkLCBpZiB0aGUg4oCcIzkyIOKAkyBUZXJyb3Jpc23igJ0gRXZlbnQgaXMgcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8zMC9pcmFuaWFuLWhvc3RhZ2UtY3Jpc2lzL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4MyxcciAgICBcInRpdGxlXCI6XCJUaGUgSXJvbiBMYWR5KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIEFyZ2VudGluYSBhbmQgcmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIHRoZSBVbml0ZWQgS2luZ2RvbS4gVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM3IOKAkyBTb2NpYWxpc3QgR292ZXJubWVudHPigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDMvdGhlLWlyb24tbGFkeS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg0LFxyICAgIFwidGl0bGVcIjpcIlJlYWdhbiBCb21icyBMaWJ5YSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBmb3IgZXZlcnkgMiBVU1NSIEluZmx1ZW5jZSBpbiBMaWJ5YS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDQvcmVhZ2FuLWJvbWJzLWxpYnlhL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg1LFxyICAgIFwidGl0bGVcIjpcIlN0YXIgV2FycypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVMgaXMgYWhlYWQgb24gdGhlIFNwYWNlIFJhY2UgVHJhY2ssIHRoZSBVUyBwbGF5ZXIgdXNlcyB0aGlzIEV2ZW50IHRvIGxvb2sgdGhyb3VnaCB0aGUgZGlzY2FyZCBwaWxlLCBwaWNrIGFueSAxIG5vbi1zY29yaW5nIGNhcmQgYW5kIHBsYXkgaXQgaW1tZWRpYXRlbHkgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA1L3N0YXItd2Fycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NixcciAgICBcInRpdGxlXCI6XCJOb3J0aCBTZWEgT2lsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtYXkgcGxheSA4IGNhcmRzIChpbiA4IGFjdGlvbiByb3VuZHMpIGZvciB0aGlzIHR1cm4gb25seS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzYxIOKAkyBPUEVD4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzA2L25vcnRoLXNlYS1vaWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4NyxcciAgICBcInRpdGxlXCI6XCJUaGUgUmVmb3JtZXIqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDQgVVNTUiBJbmZsdWVuY2UgdG8gRXVyb3BlIChhZGRpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS4gSWYgdGhlIFVTU1IgaXMgYWhlYWQgb2YgdGhlIFVTIGluIFZQLCA2IEluZmx1ZW5jZSBtYXkgYmUgYWRkZWQgdG8gRXVyb3BlIGluc3RlYWQuIFRoZSBVU1NSIG1heSBubyBsb25nZXIgbWFrZSBDb3VwIEF0dGVtcHRzIGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDcvdGhlLXJlZm9ybWVyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo4OCxcciAgICBcInRpdGxlXCI6XCJNYXJpbmUgQmFycmFja3MgQm9tYmluZypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBpbiBMZWJhbm9uIGFuZCByZW1vdmUgYSB0b3RhbCBvZiAyIFVTIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgaW4gdGhlIE1pZGRsZSBFYXN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMC9tYXJpbmUtYmFycmFja3MtYm9tYmluZy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg5LFxyICAgIFwidGl0bGVcIjpcIlNvdmlldHMgU2hvb3QgRG93biBLQUwtMDA3KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgVVMgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTIG1heSBwbGFjZSBpbmZsdWVuY2Ugb3IgbWFrZSBSZWFsaWdubWVudCByb2xscywgdXNpbmcgdGhpcyBjYXJkLCBpZiBTb3V0aCBLb3JlYSBpcyBVUyBjb250cm9sbGVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xMS9zb3ZpZXRzLXNob290LWRvd24ta2FsLTAwNy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MCxcciAgICBcInRpdGxlXCI6XCJHbGFzbm9zdCpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSBhbmQgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUC4gVGhlIFVTU1IgbWF5IG1ha2UgUmVhbGlnbm1lbnQgcm9sbHMgb3IgYWRkIEluZmx1ZW5jZSwgdXNpbmcgdGhpcyBjYXJkLCBpZiB0aGUg4oCcIzg3IOKAkyBUaGUgUmVmb3JtZXLigJ0gRXZlbnQgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEyL2dsYXNub3N0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTEsXHIgICAgXCJ0aXRsZVwiOlwiT3J0ZWdhIEVsZWN0ZWQgaW4gTmljYXJhZ3VhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gTmljYXJhZ3VhLiBUaGUgVVNTUiBtYXkgbWFrZSBhIGZyZWUgQ291cCBBdHRlbXB0LCB1c2luZyB0aGlzIGNhcmTigJlzIE9wZXJhdGlvbnMgdmFsdWUsIGluIGEgY291bnRyeSBhZGphY2VudCB0byBOaWNhcmFndWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEzL29ydGVnYS1lbGVjdGVkLWluLW5pY2FyYWd1YS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkyLFxyICAgIFwidGl0bGVcIjpcIlRlcnJvcmlzbVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBwbGF5ZXLigJlzIG9wcG9uZW50IG11c3QgcmFuZG9tbHkgZGlzY2FyZCAxIGNhcmQgZnJvbSB0aGVpciBoYW5kLiBJZiB0aGUg4oCcIzgyIOKAkyBJcmFuaWFuIEhvc3RhZ2UgQ3Jpc2lz4oCdIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkLCBhIFVTIHBsYXllciAoaWYgYXBwbGljYWJsZSkgbXVzdCByYW5kb21seSBkaXNjYXJkIDIgY2FyZHMgZnJvbSB0aGVpciBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xNC90ZXJyb3Jpc20vXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTMsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1Db250cmEgU2NhbmRhbCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgVVMgUmVhbGlnbm1lbnQgcm9sbHMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBkaWUgcm9sbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTcvaXJhbi1jb250cmEtc2NhbmRhbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk0LFxyICAgIFwidGl0bGVcIjpcIkNoZXJub2J5bCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbXVzdCBkZXNpZ25hdGUgYSBzaW5nbGUgUmVnaW9uIChFdXJvcGUsIEFzaWEsIGV0Yy4pIHRoYXQsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuLCB0aGUgVVNTUiBjYW5ub3QgYWRkIEluZmx1ZW5jZSB0byB1c2luZyBPcGVyYXRpb25zIHBvaW50cy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTgvY2hlcm5vYnlsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk1LFxyICAgIFwidGl0bGVcIjpcIkxhdGluIEFtZXJpY2FuIERlYnQgQ3Jpc2lzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG11c3QgaW1tZWRpYXRlbHkgZGlzY2FyZCBhIGNhcmQgd2l0aCBhbiBPcGVyYXRpb25zIHZhbHVlIG9mIDMgb3IgbW9yZSBvciB0aGUgVVNTUiBtYXkgZG91YmxlIHRoZSBhbW91bnQgb2YgVVNTUiBJbmZsdWVuY2UgaW4gMiBjb3VudHJpZXMgaW4gU291dGggQW1lcmljYS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTkvbGF0aW4tYW1lcmljYW4tZGVidC1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTYsXHIgICAgXCJ0aXRsZVwiOlwiVGVhciBEb3duIHRoaXMgV2FsbCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gRWFzdCBHZXJtYW55LiBUaGUgVVMgbWF5IG1ha2UgZnJlZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGluIEV1cm9wZSB1c2luZyB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1NSDigJMgV2lsbHkgQnJhbmR04oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMC90ZWFyLWRvd24tdGhpcy13YWxsL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTcsXHIgICAgXCJ0aXRsZVwiOlwiQW4gRXZpbCBFbXBpcmUqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJlY2VpdmVzIDEgVlAuIFRoaXMgRXZlbnQgcHJldmVudHMgLyBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCM1OSDigJMgRmxvd2VyIFBvd2Vy4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8yMS9hbi1ldmlsLWVtcGlyZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk4LFxyICAgIFwidGl0bGVcIjpcIkFsZHJpY2ggQW1lcyBSZW1peCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmV2ZWFscyB0aGVpciBoYW5kIG9mIGNhcmRzLCBmYWNlLXVwLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiBhbmQgdGhlIFVTU1IgZGlzY2FyZHMgYSBjYXJkIGZyb20gdGhlIFVTIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzAzL2FsZHJpY2gtYW1lcy1yZW1peC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjk5LFxyICAgIFwidGl0bGVcIjpcIlBlcnNoaW5nIElJIERlcGxveWVkKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuIFJlbW92ZSAxIFVTIEluZmx1ZW5jZSBmcm9tIGFueSAzIGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDQvcGVyc2hpbmctaWktZGVwbG95ZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDAsXHIgICAgXCJ0aXRsZVwiOlwiV2FyZ2FtZXMqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIERFRkNPTiBsZXZlbCBpcyAyLCB0aGUgcGxheWVyIG1heSBpbW1lZGlhdGVseSBlbmQgdGhlIGdhbWUgYWZ0ZXIgZ2l2aW5nIHRoZWlyIG9wcG9uZW50IDYgVlAuIEhvdyBhYm91dCBhIG5pY2UgZ2FtZSBvZiBjaGVzcz9cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDcvd2FyZ2FtZXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDEsXHIgICAgXCJ0aXRsZVwiOlwiU29saWRhcml0eSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMyBVUyBJbmZsdWVuY2UgdG8gUG9sYW5kLiBUaGlzIGNhcmQgcmVxdWlyZXMgcHJpb3IgcGxheSBvZiB0aGUg4oCcIzY4IOKAkyBKb2huIFBhdWwgSUkgRWxlY3RlZCBQb3Bl4oCdIEV2ZW50IGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDgvc29saWRhcml0eS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDIsXHIgICAgXCJ0aXRsZVwiOlwiSXJhbi1JcmFxIFdhcipcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJcmFuIGludmFkZXMgSXJhcSBvciB2aWNlIHZlcnNhIChwbGF5ZXLigJlzIGNob2ljZSkuIFJvbGwgYSBkaWUgYW5kIHN1YnRyYWN0ICgtMSkgZnJvbSB0aGUgZGllIHJvbGwgZm9yIGV2ZXJ5IGVuZW15IGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byB0aGUgdGFyZ2V0IG9mIHRoZSBpbnZhc2lvbiAoSXJhbiBvciBJcmFxKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzA5L2lyYW4taXJhcS13YXIvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDMsXHIgICAgXCJ0aXRsZVwiOlwiRGVmZWN0b3JzXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBwbGF5IHRoaXMgY2FyZCBkdXJpbmcgdGhlIEhlYWRsaW5lIFBoYXNlIGluIG9yZGVyIHRvIGNhbmNlbCB0aGUgVVNTUiBIZWFkbGluZSBFdmVudCAoaW5jbHVkaW5nIGEgc2NvcmluZyBjYXJkKS4gVGhlIGNhbmNlbGVkIGNhcmQgaXMgcGxhY2VkIGludG8gdGhlIGRpc2NhcmQgcGlsZS4gSWYgdGhpcyBjYXJkIGlzIHBsYXllZCBieSB0aGUgVVNTUiBkdXJpbmcgaXRzIGFjdGlvbiByb3VuZCwgdGhlIFVTIGdhaW5zIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzA5L2RlZmVjdG9ycy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA0LFxyICAgIFwidGl0bGVcIjpcIlRoZSBDYW1icmlkZ2UgRml2ZVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIGFsbCBzY29yaW5nIGNhcmRzIGluIHRoZWlyIGhhbmQgb2YgY2FyZHMuIFRoZSBVU1NSIHBsYXllciBtYXkgYWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgUmVnaW9uIG5hbWVkIG9uIG9uZSBvZiB0aGUgcmV2ZWFsZWQgc2NvcmluZyBjYXJkcy4gVGhpcyBjYXJkIGNhbiBub3QgYmUgcGxheWVkIGFzIGFuIEV2ZW50IGR1cmluZyB0aGUgTGF0ZSBXYXIuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzExL3RoZS1jYW1icmlkZ2UtZml2ZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDUsXHIgICAgXCJ0aXRsZVwiOlwiU3BlY2lhbCBSZWxhdGlvbnNoaXBcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBhZGphY2VudCB0byB0aGUgVS5LLiBpZiB0aGUgVS5LLiBpcyBVUy1jb250cm9sbGVkIGJ1dCBOQVRPIGlzIG5vdCBpbiBlZmZlY3QuIEFkZCAyIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGluIFdlc3Rlcm4gRXVyb3BlLCBhbmQgdGhlIFVTIGdhaW5zIDIgVlAsIGlmIHRoZSBVLksuIGlzIFVTLWNvbnRyb2xsZWQgYW5kIE5BVE8gaXMgaW4gZWZmZWN0LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8xOC9zcGVjaWFsLXJlbGF0aW9uc2hpcC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA2LFxyICAgIFwidGl0bGVcIjpcIk5PUkFEKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGNvbnRhaW5pbmcgVVMgSW5mbHVlbmNlLCBhdCB0aGUgZW5kIG9mIGVhY2ggQWN0aW9uIFJvdW5kLCBpZiBDYW5hZGEgaXMgVVMtY29udHJvbGxlZCBhbmQgdGhlIERFRkNPTiBsZXZlbCBtb3ZlZCB0byAyIGR1cmluZyB0aGF0IEFjdGlvbiBSb3VuZC4gVGhpcyBFdmVudCBpcyBjYW5jZWxlZCBieSB0aGUg4oCcIzQyIOKAkyBRdWFnbWlyZeKAnSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMjUvbm9yYWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDcsXHIgICAgXCJ0aXRsZVwiOlwiQ2hlXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgbWF5IHBlcmZvcm0gYSBDb3VwIEF0dGVtcHQsIHVzaW5nIHRoaXMgY2FyZOKAmXMgT3BlcmF0aW9ucyB2YWx1ZSwgYWdhaW5zdCBhIG5vbi1CYXR0bGVncm91bmQgY291bnRyeSBpbiBDZW50cmFsIEFtZXJpY2EsIFNvdXRoIEFtZXJpY2Egb3IgQWZyaWNhLiBUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIHNlY29uZCBDb3VwIEF0dGVtcHQsIGFnYWluc3QgYSBkaWZmZXJlbnQgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EsIGlmIHRoZSBmaXJzdCBDb3VwIEF0dGVtcHQgcmVtb3ZlZCBhbnkgVVMgSW5mbHVlbmNlIGZyb20gdGhlIHRhcmdldCBjb3VudHJ5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yNy9jaGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA4LFxyICAgIFwidGl0bGVcIjpcIk91ciBNYW4gaW4gVGVocmFuKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBjb250cm9scyBhdCBsZWFzdCBvbmUgTWlkZGxlIEVhc3QgY291bnRyeSwgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gZHJhdyB0aGUgdG9wIDUgY2FyZHMgZnJvbSB0aGUgZHJhdyBwaWxlLiBUaGUgVVMgbWF5IGRpc2NhcmQgYW55IG9yIGFsbCBvZiB0aGUgZHJhd24gY2FyZHMsIGFmdGVyIHJldmVhbGluZyB0aGUgZGlzY2FyZGVkIGNhcmQocykgdG8gdGhlIFVTU1IgcGxheWVyLCB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIEV2ZW50KHMpLiBBbnkgcmVtYWluaW5nIGRyYXduIGNhcmRzIGFyZSByZXR1cm5lZCB0byB0aGUgZHJhdyBwaWxlIGFuZCB0aGUgZHJhdyBwaWxlIGlzIHJlc2h1ZmZsZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI4L291ci1tYW4taW4tdGVocmFuL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwOSxcciAgICBcInRpdGxlXCI6XCJZdXJpIGFuZCBTYW1hbnRoYSpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiByZWNlaXZlcyAxIFZQIGZvciBlYWNoIFVTIENvdXAgQXR0ZW1wdCBwZXJmb3JtZWQgZHVyaW5nIHRoZSByZW1haW5kZXIgb2YgdGhlIFR1cm4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEzLzAxLzEwL3l1cmktYW5kLXNhbWFudGhhL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTEwLFxyICAgIFwidGl0bGVcIjpcIkFXQUNTIFNhbGUgdG8gU2F1ZGlzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAyIFVTIEluZmx1ZW5jZSB0byBTYXVkaSBBcmFiaWEuIFRoaXMgRXZlbnQgcHJldmVudHMgdGhlIOKAnCM1NiDigJMgTXVzbGltIFJldm9sdXRpb27igJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTQvYXdhY3Mtc2FsZS10by1zYXVkaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfVxyXVxyIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInJlZ2lvbkluZm9Ob2Rlc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcImV1XCIsXG4gICAgICBcImdyb3VwXCI6IFwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiZXVcIixcbiAgICAgIFwibmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJFdXJvcGVcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJlXCIsXG4gICAgICBcInBvaW50c1wiOiBbMyw3LFwiV1wiXSxcbiAgICAgIFwieFwiOiA0NDAsIFwieVwiOiAyODgsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJtZVwiLFxuICAgICAgXCJncm91cFwiOiBcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcIm1lXCIsXG4gICAgICBcIm5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJNaWQgRWFzdFwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcIm1cIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDUsN10sXG4gICAgICBcInhcIjogMTA0MCwgXCJ5XCI6IDQ4MCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo2LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImFzXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYXNcIixcbiAgICAgIFwibmFtZVwiOiBcIkFzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImFcIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDcsOV0sXG4gICAgICBcImV4dHJhXCI6IFwiMSBwZXIgU0UgY291bnRyeSwgMiBmb3IgVGhhaWxhbmRcIixcbiAgICAgIFwieFwiOiA4ODAsIFwieVwiOiAxNjAsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJhZlwiLFxuICAgICAgXCJncm91cFwiOiBcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImFmXCIsXG4gICAgICBcIm5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQWZyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiZlwiLFxuICAgICAgXCJwb2ludHNcIjogWzEsNCw2XSxcbiAgICAgIFwieFwiOiA1MjAsIFwieVwiOiA1NDQsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJjYVwiLFxuICAgICAgXCJncm91cFwiOiBcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcImNhXCIsXG4gICAgICBcIm5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiQy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiY1wiLFxuICAgICAgXCJwb2ludHNcIjogWzEsMyw1XSxcbiAgICAgIFwieFwiOiAyNDAsIFwieVwiOiAzNTIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH0sIFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJzYVwiLFxuICAgICAgXCJncm91cFwiOiBcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOiBcInNhXCIsXG4gICAgICBcIm5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6IFwiUy5BbWVyaWNhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwic1wiLFxuICAgICAgXCJwb2ludHNcIjogWzIsNSw2XSxcbiAgICAgIFwieFwiOiAyNDAsIFwieVwiOiA2NzIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwibnVtQnRsXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJcIlxuICAgIH1cbiAgXSxcblxuICBcImNvdW50cnlQb3NpdGlvbnNcIjoge1xuICAgIFwiVVNBXCI6IHtcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogNjRcbiAgICB9LFxuICAgIFwiVVNTUlwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJBdXN0cmlhXCI6IHtcbiAgICAgIFwieFwiOiA1MjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkJlbmVsdXhcIjoge1xuICAgICAgXCJ4XCI6IDQwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiQnVsZ2FyaWFcIjoge1xuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiQ2FuYWRhXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiQ3plY2hvc2xvdmFraWFcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiRGVubWFya1wiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJFIEdlcm1hbnlcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiRmlubGFuZFwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIkZyYW5jZVwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJHcmVlY2VcIjoge1xuICAgICAgXCJ4XCI6IDU2MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiSHVuZ2FyeVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJJdGFseVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJOb3J3YXlcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJQb2xhbmRcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiUm9tYW5pYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJTcGFpbi9Qb3J0dWdhbFwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJTd2VkZW5cIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJUdXJrZXlcIjoge1xuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiVUtcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiVyBHZXJtYW55XCI6IHtcbiAgICAgIFwieFwiOiA0ODAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIll1Z29zbGF2aWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiRWd5cHRcIjoge1xuICAgICAgXCJ4XCI6IDc2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiR3VsZiBTdGF0ZXNcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIklyYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiSXJhcVwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJJc3JhZWxcIjoge1xuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiSm9yZGFuXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIkxlYmFub25cIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiTGlieWFcIjoge1xuICAgICAgXCJ4XCI6IDY4MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiU2F1ZGkgQXJhYmlhXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJTeXJpYVwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJBZmdoYW5pc3RhblwiOiB7XG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJBdXN0cmFsaWFcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiQnVybWFcIjoge1xuICAgICAgXCJ4XCI6IDg4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSW5kaWFcIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSW5kb25lc2lhXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkphcGFuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjRcbiAgICB9LFxuICAgIFwiTGFvcy9DYW1ib2RpYVwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDI1NlxuICAgIH0sXG4gICAgXCJNYWxheXNpYVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiTiBLb3JlYVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJQYWtpc3RhblwiOiB7XG4gICAgICBcInhcIjogODQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJQaGlsbGlwcGluZXNcIjoge1xuICAgICAgXCJ4XCI6IDkyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJTIEtvcmVhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiVGFpd2FuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogMTI4XG4gICAgfSxcbiAgICBcIlRoYWlsYW5kXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJWaWV0bmFtXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJBbGdlcmlhXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkFuZ29sYVwiOiB7XG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJCb3Rzd2FuYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJDYW1lcm9vblwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJFdGhpb3BpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJJdm9yeSBDb2FzdFwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJLZW55YVwiOiB7XG4gICAgICBcInhcIjogNzIwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJNb3JvY2NvXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIk5pZ2VyaWFcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiU0UgQWZyaWNhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIlNhaGFyYW4gU3RhdGVzXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlNvbWFsaWFcIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiU291dGggQWZyaWNhXCI6IHtcbiAgICAgIFwieFwiOiA2NDAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIlN1ZGFuXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlR1bmlzaWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiV2VzdCBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiWmFpcmVcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiWmltYmFid2VcIjoge1xuICAgICAgXCJ4XCI6IDYwMCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiQ29zdGEgUmljYVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJDdWJhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkRvbWluaWNhbiBSZXBcIjoge1xuICAgICAgXCJ4XCI6IDI4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiRWwgU2FsdmFkb3JcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJHdWF0ZW1hbGFcIjoge1xuICAgICAgXCJ4XCI6IDEyMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiSGFpdGlcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiSG9uZHVyYXNcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiTWV4aWNvXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiTmljYXJhZ3VhXCI6IHtcbiAgICAgIFwieFwiOiAyMDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIlBhbmFtYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJBcmdlbnRpbmFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA2NDBcbiAgICB9LFxuICAgIFwiQm9saXZpYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDUxMlxuICAgIH0sXG4gICAgXCJCcmF6aWxcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiQ2hpbGVcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJDb2x1bWJpYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDQ0OFxuICAgIH0sXG4gICAgXCJFY3VhZG9yXCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiUGFyYWd1YXlcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiA1NzZcbiAgICB9LFxuICAgIFwiUGVydVwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNTQ0XG4gICAgfSxcbiAgICBcIlVydWd1YXlcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiVmVuZXp1ZWxhXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfVxuICB9LFxuICBcImNvdW50cmllc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6XCJVU0FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJVU0FcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOlwidXNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwidXNhXCIsXG4gICAgICBcInN0YWJcIjo5OSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJDYW5hZGEsQ3ViYSxNZXhpY28sSmFwYW5cIixcbiAgICAgIFwiaWRcIjowXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVVNTUlwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVTU1JcIixcbiAgICAgIFwic3VwZXJwb3dlclwiOiB0cnVlLFxuICAgICAgXCJncm91cFwiOlwidXNzclwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInVzc3JcIixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkFmZ2hhbmlzdGFuLEZpbmxhbmQsTiBLb3JlYSxQb2xhbmQsUm9tYW5pYVwiLFxuICAgICAgXCJpZFwiOjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOlwiQXVzdHJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkF1c3RyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiRSBHZXJtYW55LEh1bmdhcnksSXRhbHksVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJlbmVsdXhcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCZW5lbHV4XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXIEdlcm1hbnksVUtcIixcbiAgICAgIFwiaWRcIjozXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQnVsZ2FyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCdWxnYXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVHVya2V5LEdyZWVjZVwiLFxuICAgICAgXCJpZFwiOjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDYW5hZGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDYW5hZGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjoyLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVLXCIsXG4gICAgICBcImlkXCI6NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ3plY2hcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBvbGFuZCxFIEdlcm1hbnksSHVuZ2FyeVwiLFxuICAgICAgXCJpZFwiOjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJEZW5tYXJrXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRGVubWFya1wiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVyBHZXJtYW55LFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFIEdlcm1hbnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFLkdlcm1cIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImVnXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjMsXG4gICAgICBcImxpbmtzXCI6XCJQb2xhbmQsVyBHZXJtYW55XCIsXG4gICAgICBcImlkXCI6OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkZpbmxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJGaW5sYW5kXCIsXG4gICAgICBcImdyb3VwXCI6XCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MSxcbiAgICAgIFwibGlua3NcIjpcIlN3ZWRlblwiLFxuICAgICAgXCJpZFwiOjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJGcmFuY2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJGcmFuY2VcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkFsZ2VyaWEsVUssVyBHZXJtYW55LEl0YWx5LFNwYWluL1BvcnR1Z2FsXCIsXG4gICAgICBcImlkXCI6MTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJHcmVlY2VcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJHcmVlY2VcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkl0YWx5LFl1Z29zbGF2aWEsVHVya2V5XCIsXG4gICAgICBcImlkXCI6MTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJIdW5nYXJ5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSHVuZ2FyeVwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUm9tYW5pYSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJdGFseVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkl0YWx5XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJZdWdvc2xhdmlhLFNwYWluL1BvcnR1Z2FsXCIsXG4gICAgICBcImlkXCI6MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOb3J3YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJOb3J3YXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVLLFN3ZWRlblwiLFxuICAgICAgXCJpZFwiOjE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUG9sYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUG9sYW5kXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoxNVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlJvbWFuaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJSb21hbmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUdXJrZXksWXVnb3NsYXZpYVwiLFxuICAgICAgXCJpZFwiOjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTcGFpbi9Qb1wiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTW9yb2Njb1wiLFxuICAgICAgXCJpZFwiOjE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3dlZGVuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU3dlZGVuXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoxOFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlR1cmtleVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlR1cmtleVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJVS1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVLXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6NSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoyMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlcgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlcuR2VybVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOid3ZycsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoyMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIll1Z29zbGF2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJZdWdvc2xhdlwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFZ3lwdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkVneXB0XCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIklzcmFlbCxMaWJ5YSxTdWRhblwiLFxuICAgICAgXCJpZFwiOjIzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiR3VsZiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJHdWxmIFN0c1wiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJcmFxLFNhdWRpIEFyYWJpYVwiLFxuICAgICAgXCJpZFwiOjI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXJhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklyYW5cIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImluXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIklyYXEsQWZnaGFuaXN0YW4sUGFraXN0YW5cIixcbiAgICAgIFwiaWRcIjoyNVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIklyYXFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJcmFxXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJpcVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjEsXG4gICAgICBcImxpbmtzXCI6XCJTYXVkaSBBcmFiaWEsSm9yZGFuXCIsXG4gICAgICBcImlkXCI6MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJc3JhZWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJc3JhZWxcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSm9yZGFuLExlYmFub24sU3lyaWFcIixcbiAgICAgIFwiaWRcIjoyN1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkpvcmRhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkpvcmRhblwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTYXVkaSBBcmFiaWEsTGViYW5vblwiLFxuICAgICAgXCJpZFwiOjI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTGViYW5vblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkxlYmFub25cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU3lyaWFcIixcbiAgICAgIFwiaWRcIjoyOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkxpYnlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGlieWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVHVuaXNpYVwiLFxuICAgICAgXCJpZFwiOjMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU2F1ZGkgQVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjozMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlN5cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU3lyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBZmdoYW5pc3RhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkFmZ2hhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQXVzdHJhbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQXVzdHJhbGlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjo0LFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk1hbGF5c2lhXCIsXG4gICAgICBcImlkXCI6MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCdXJtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJ1cm1hXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJJbmRpYSxMYW9zL0NhbWJvZGlhXCIsXG4gICAgICBcImlkXCI6MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJbmRpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkluZGlhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJpZFwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSW5kb25lc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSW5kb25lc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJpc1wiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTWFsYXlzaWEsUGhpbGxpcHBpbmVzXCIsXG4gICAgICBcImlkXCI6MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJKYXBhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkphcGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBoaWxsaXBwaW5lcyxTIEtvcmVhLFRhaXdhblwiLFxuICAgICAgXCJpZFwiOjM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkxhb3MvQ2FtXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUaGFpbGFuZCxWaWV0bmFtXCIsXG4gICAgICBcImlkXCI6MzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJNYWxheXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk1hbGF5c2lhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUaGFpbGFuZFwiLFxuICAgICAgXCJpZFwiOjQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTiBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk4uS29yZWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcIm5rXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MyxcbiAgICAgIFwibGlua3NcIjpcIlMgS29yZWFcIixcbiAgICAgIFwiaWRcIjo0MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGFraXN0YW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQaGlsbGlwcGluZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQaGlsbGlwXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlMgS29yZWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTLktvcmVhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJza1wiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUYWl3YW5cIixcbiAgICAgIFwiaWRcIjo0NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlRhaXdhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlRhaXdhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVGhhaWxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjo0NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJWaWV0bmFtXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFsZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBbGdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIk1vcm9jY28sVHVuaXNpYSxTYWhhcmFuIFN0YXRlc1wiLFxuICAgICAgXCJpZFwiOjQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQW5nb2xhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQW5nb2xhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkJvdHN3YW5hLFNvdXRoIEFmcmljYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQm90c3dhbmFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCb3Rzd2FuYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTb3V0aCBBZnJpY2EsWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo1MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNhbWVyb29uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ2FtZXJvb25cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTmlnZXJpYSxaYWlyZVwiLFxuICAgICAgXCJpZFwiOjUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRXRoaW9waWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJFdGhpb3BpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTdWRhbixTb21hbGlhXCIsXG4gICAgICBcImlkXCI6NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJdm9yeSBDb2FzdFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkl2b3J5IENcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiV2VzdCBBZnJpY2EsTmlnZXJpYVwiLFxuICAgICAgXCJpZFwiOjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiS2VueWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJLZW55YVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTb21hbGlhLFNFIEFmcmljYVwiLFxuICAgICAgXCJpZFwiOjU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTW9yb2Njb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk1vcm9jY29cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiV2VzdCBBZnJpY2FcIixcbiAgICAgIFwiaWRcIjo1NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5pZ2VyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJOaWdlcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTRSBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTRSBBZnJpY2FcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo1N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU2FoYXJhIFNcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcInNzXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU29tYWxpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNvbWFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTb3V0aCBBZnJpY2FcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTb3V0aCBBZlwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwic2FcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTdWRhblwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlN1ZGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVHVuaXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlR1bmlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIldlc3QgQWZcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJaYWlyZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlphaXJlXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlppbWJhYndlXCIsXG4gICAgICBcImlkXCI6NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlppbWJhYndlXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ29zdGEgUmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNvc3RhIFJcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSG9uZHVyYXMsTmljYXJhZ3VhLFBhbmFtYVwiLFxuICAgICAgXCJpZFwiOjY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ3ViYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkN1YmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSGFpdGksTmljYXJhZ3VhXCIsXG4gICAgICBcImlkXCI6NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJEb21pbmljYW4gUmVwXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRG9taW5pYyBSXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhhaXRpXCIsXG4gICAgICBcImlkXCI6NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFbCBTYWx2YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkVsIFNhbHZhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhvbmR1cmFzLEd1YXRlbWFsYVwiLFxuICAgICAgXCJpZFwiOjY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiR3VhdGVtYWxhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiR3VhdGVtYWxhXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkhvbmR1cmFzLE1leGljb1wiLFxuICAgICAgXCJpZFwiOjcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSGFpdGlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIYWl0aVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo3MVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkhvbmR1cmFzXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSG9uZHVyYXNcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTmljYXJhZ3VhXCIsXG4gICAgICBcImlkXCI6NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJNZXhpY29cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJNZXhpY29cIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOaWNhcmFndWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJOaWNhcmFndWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQYW5hbWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQYW5hbWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQ29sdW1iaWFcIixcbiAgICAgIFwiaWRcIjo3NVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFyZ2VudGluYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkFyZ2VudGluYVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJDaGlsZSxQYXJhZ3VheSxVcnVndWF5XCIsXG4gICAgICBcImlkXCI6NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCb2xpdmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQm9saXZpYVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQYXJhZ3VheSxQZXJ1XCIsXG4gICAgICBcImlkXCI6NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCcmF6aWxcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCcmF6aWxcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVXJ1Z3VheSxWZW5lenVlbGFcIixcbiAgICAgIFwiaWRcIjo3OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNoaWxlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ2hpbGVcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGVydVwiLFxuICAgICAgXCJpZFwiOjc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ29sdW1iaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDb2x1bWJpYVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJFY3VhZG9yLFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRWN1YWRvclwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkVjdWFkb3JcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGVydVwiLFxuICAgICAgXCJpZFwiOjgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGFyYWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQYXJhZ3VheVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJVcnVndWF5XCIsXG4gICAgICBcImlkXCI6ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQZXJ1XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiUGVydVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo4M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlVydWd1YXlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJVcnVndWF5XCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVmVuZXp1ZWxhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVmVuZXp1ZWxhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjg1XG4gICAgfVxuICBdLFxuXG4gIFwibGlua3NcIjogW1xuICAgIHtcbiAgICAgIFwic291cmNlXCI6MCxcbiAgICAgIFwidGFyZ2V0XCI6NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiQ2FuYWRhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjo2NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiQ3ViYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MCxcbiAgICAgIFwidGFyZ2V0XCI6NzMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIk1leGljb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MCxcbiAgICAgIFwidGFyZ2V0XCI6MzgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTQVwiLFxuICAgICAgICBcIkphcGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjozMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIkFmZ2hhbmlzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjo5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiRmlubGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6NDEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJOIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjoxNSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MSxcbiAgICAgIFwidGFyZ2V0XCI6MTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJSb21hbmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjo4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiRSBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6MTIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJIdW5nYXJ5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6MTMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBdXN0cmlhXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MyxcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJlbmVsdXhcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozLFxuICAgICAgXCJ0YXJnZXRcIjoyMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQmVuZWx1eFwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NCxcbiAgICAgIFwidGFyZ2V0XCI6MTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NCxcbiAgICAgIFwidGFyZ2V0XCI6MTEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1bGdhcmlhXCIsXG4gICAgICAgIFwiR3JlZWNlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NSxcbiAgICAgIFwidGFyZ2V0XCI6MjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNhbmFkYVwiLFxuICAgICAgICBcIlVLXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NixcbiAgICAgIFwidGFyZ2V0XCI6MTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN6ZWNob3Nsb3Zha2lhXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NixcbiAgICAgIFwidGFyZ2V0XCI6OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJFIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2LFxuICAgICAgXCJ0YXJnZXRcIjoxMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJIdW5nYXJ5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NyxcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkRlbm1hcmtcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3LFxuICAgICAgXCJ0YXJnZXRcIjoxOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRGVubWFya1wiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgsXG4gICAgICBcInRhcmdldFwiOjE1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFIEdlcm1hbnlcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4LFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRSBHZXJtYW55XCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6OSxcbiAgICAgIFwidGFyZ2V0XCI6MTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZpbmxhbmRcIixcbiAgICAgICAgXCJTd2VkZW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6NDgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIkFsZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoyMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoxMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiSXRhbHlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMCxcbiAgICAgIFwidGFyZ2V0XCI6MTcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkZyYW5jZVwiLFxuICAgICAgICBcIlNwYWluL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTEsXG4gICAgICBcInRhcmdldFwiOjEzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjExLFxuICAgICAgXCJ0YXJnZXRcIjoyMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjExLFxuICAgICAgXCJ0YXJnZXRcIjoxOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3JlZWNlXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTIsXG4gICAgICBcInRhcmdldFwiOjE2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiUm9tYW5pYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEyLFxuICAgICAgXCJ0YXJnZXRcIjoyMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSHVuZ2FyeVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMyxcbiAgICAgIFwidGFyZ2V0XCI6MjIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkl0YWx5XCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEzLFxuICAgICAgXCJ0YXJnZXRcIjoxNyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJTcGFpbi9Qb3J0dWdhbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE0LFxuICAgICAgXCJ0YXJnZXRcIjoyMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNCxcbiAgICAgIFwidGFyZ2V0XCI6MTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk5vcndheVwiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE2LFxuICAgICAgXCJ0YXJnZXRcIjoxOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIlR1cmtleVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE2LFxuICAgICAgXCJ0YXJnZXRcIjoyMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICBcIll1Z29zbGF2aWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxNyxcbiAgICAgIFwidGFyZ2V0XCI6NTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlNwYWluL1BvcnR1Z2FsXCIsXG4gICAgICAgIFwiTW9yb2Njb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTksXG4gICAgICBcInRhcmdldFwiOjMyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJUdXJrZXlcIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjMsXG4gICAgICBcInRhcmdldFwiOjI3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIklzcmFlbFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIzLFxuICAgICAgXCJ0YXJnZXRcIjozMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJMaWJ5YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIzLFxuICAgICAgXCJ0YXJnZXRcIjo2MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWd5cHRcIixcbiAgICAgICAgXCJTdWRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjQsXG4gICAgICBcInRhcmdldFwiOjI2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWxmIFN0YXRlc1wiLFxuICAgICAgICBcIklyYXFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNCxcbiAgICAgIFwidGFyZ2V0XCI6MzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjUsXG4gICAgICBcInRhcmdldFwiOjI2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI1LFxuICAgICAgXCJ0YXJnZXRcIjozMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIkFmZ2hhbmlzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNSxcbiAgICAgIFwidGFyZ2V0XCI6NDIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjYsXG4gICAgICBcInRhcmdldFwiOjMxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFxXCIsXG4gICAgICAgIFwiU2F1ZGkgQXJhYmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjYsXG4gICAgICBcInRhcmdldFwiOjI4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFxXCIsXG4gICAgICAgIFwiSm9yZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjcsXG4gICAgICBcInRhcmdldFwiOjI4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJc3JhZWxcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNyxcbiAgICAgIFwidGFyZ2V0XCI6MjksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkxlYmFub25cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNyxcbiAgICAgIFwidGFyZ2V0XCI6MzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjgsXG4gICAgICBcInRhcmdldFwiOjMxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKb3JkYW5cIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyOCxcbiAgICAgIFwidGFyZ2V0XCI6MjksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkpvcmRhblwiLFxuICAgICAgICBcIkxlYmFub25cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyOSxcbiAgICAgIFwidGFyZ2V0XCI6MzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxlYmFub25cIixcbiAgICAgICAgXCJTeXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMwLFxuICAgICAgXCJ0YXJnZXRcIjo2MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGlieWFcIixcbiAgICAgICAgXCJUdW5pc2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozMyxcbiAgICAgIFwidGFyZ2V0XCI6NDIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNCxcbiAgICAgIFwidGFyZ2V0XCI6NDAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyYWxpYVwiLFxuICAgICAgICBcIk1hbGF5c2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzUsXG4gICAgICBcInRhcmdldFwiOjM2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdXJtYVwiLFxuICAgICAgICBcIkluZGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzUsXG4gICAgICBcInRhcmdldFwiOjM5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCdXJtYVwiLFxuICAgICAgICBcIkxhb3MvQ2FtYm9kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNixcbiAgICAgIFwidGFyZ2V0XCI6NDIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkluZGlhXCIsXG4gICAgICAgIFwiUGFraXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNyxcbiAgICAgIFwidGFyZ2V0XCI6NDAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIk1hbGF5c2lhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzcsXG4gICAgICBcInRhcmdldFwiOjQzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJbmRvbmVzaWFcIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOCxcbiAgICAgIFwidGFyZ2V0XCI6NDMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUGhpbGxpcHBpbmVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzgsXG4gICAgICBcInRhcmdldFwiOjQ0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJKYXBhblwiLFxuICAgICAgICBcIlMgS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOCxcbiAgICAgIFwidGFyZ2V0XCI6NDUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzksXG4gICAgICBcInRhcmdldFwiOjQ2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOSxcbiAgICAgIFwidGFyZ2V0XCI6NDcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxhb3MvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJWaWV0bmFtXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDAsXG4gICAgICBcInRhcmdldFwiOjQ2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJNYWxheXNpYVwiLFxuICAgICAgICBcIlRoYWlsYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDEsXG4gICAgICBcInRhcmdldFwiOjQ0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOIEtvcmVhXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ0LFxuICAgICAgXCJ0YXJnZXRcIjo0NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUyBLb3JlYVwiLFxuICAgICAgICBcIlRhaXdhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ2LFxuICAgICAgXCJ0YXJnZXRcIjo0NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVGhhaWxhbmRcIixcbiAgICAgICAgXCJWaWV0bmFtXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDgsXG4gICAgICBcInRhcmdldFwiOjU1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiTW9yb2Njb1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ4LFxuICAgICAgXCJ0YXJnZXRcIjo2MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OCxcbiAgICAgIFwidGFyZ2V0XCI6NTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJTYWhhcmFuIFN0YXRlc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ5LFxuICAgICAgXCJ0YXJnZXRcIjo1MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiQm90c3dhbmFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OSxcbiAgICAgIFwidGFyZ2V0XCI6NjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFuZ29sYVwiLFxuICAgICAgICBcIlNvdXRoIEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ5LFxuICAgICAgXCJ0YXJnZXRcIjo2NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiWmFpcmVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MCxcbiAgICAgIFwidGFyZ2V0XCI6NjAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvdHN3YW5hXCIsXG4gICAgICAgIFwiU291dGggQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTAsXG4gICAgICBcInRhcmdldFwiOjY1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb3Rzd2FuYVwiLFxuICAgICAgICBcIlppbWJhYndlXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTEsXG4gICAgICBcInRhcmdldFwiOjU2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDYW1lcm9vblwiLFxuICAgICAgICBcIk5pZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MSxcbiAgICAgIFwidGFyZ2V0XCI6NjQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiWmFpcmVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MixcbiAgICAgIFwidGFyZ2V0XCI6NjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkV0aGlvcGlhXCIsXG4gICAgICAgIFwiU3VkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MixcbiAgICAgIFwidGFyZ2V0XCI6NTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkV0aGlvcGlhXCIsXG4gICAgICAgIFwiU29tYWxpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUzLFxuICAgICAgXCJ0YXJnZXRcIjo2MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXZvcnkgQ29hc3RcIixcbiAgICAgICAgXCJXZXN0IEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUzLFxuICAgICAgXCJ0YXJnZXRcIjo1NixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXZvcnkgQ29hc3RcIixcbiAgICAgICAgXCJOaWdlcmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTQsXG4gICAgICBcInRhcmdldFwiOjU5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJLZW55YVwiLFxuICAgICAgICBcIlNvbWFsaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NCxcbiAgICAgIFwidGFyZ2V0XCI6NTcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiU0UgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTUsXG4gICAgICBcInRhcmdldFwiOjYzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJNb3JvY2NvXCIsXG4gICAgICAgIFwiV2VzdCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NixcbiAgICAgIFwidGFyZ2V0XCI6NTgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk5pZ2VyaWFcIixcbiAgICAgICAgXCJTYWhhcmFuIFN0YXRlc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU3LFxuICAgICAgXCJ0YXJnZXRcIjo2NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiU0UgQWZyaWNhXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NCxcbiAgICAgIFwidGFyZ2V0XCI6NjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlphaXJlXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NixcbiAgICAgIFwidGFyZ2V0XCI6NzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvc3RhIFJpY2FcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY2LFxuICAgICAgXCJ0YXJnZXRcIjo3NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY2LFxuICAgICAgXCJ0YXJnZXRcIjo3NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIlBhbmFtYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY3LFxuICAgICAgXCJ0YXJnZXRcIjo3MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3ViYVwiLFxuICAgICAgICBcIkhhaXRpXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjcsXG4gICAgICBcInRhcmdldFwiOjc0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDdWJhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjgsXG4gICAgICBcInRhcmdldFwiOjcxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJEb21pbmljYW4gUmVwXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2OSxcbiAgICAgIFwidGFyZ2V0XCI6NzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVsIFNhbHZhZG9yXCIsXG4gICAgICAgIFwiSG9uZHVyYXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2OSxcbiAgICAgIFwidGFyZ2V0XCI6NzAsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVsIFNhbHZhZG9yXCIsXG4gICAgICAgIFwiR3VhdGVtYWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzAsXG4gICAgICBcInRhcmdldFwiOjcyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcwLFxuICAgICAgXCJ0YXJnZXRcIjo3MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VhdGVtYWxhXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzIsXG4gICAgICBcInRhcmdldFwiOjc0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJIb25kdXJhc1wiLFxuICAgICAgICBcIk5pY2FyYWd1YVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc1LFxuICAgICAgXCJ0YXJnZXRcIjo4MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUGFuYW1hXCIsXG4gICAgICAgIFwiQ29sdW1iaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc2LFxuICAgICAgXCJ0YXJnZXRcIjo3OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiQ2hpbGVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NixcbiAgICAgIFwidGFyZ2V0XCI6ODIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIlBhcmFndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzYsXG4gICAgICBcInRhcmdldFwiOjg0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzcsXG4gICAgICBcInRhcmdldFwiOjgyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCb2xpdmlhXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NyxcbiAgICAgIFwidGFyZ2V0XCI6ODMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvbGl2aWFcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzgsXG4gICAgICBcInRhcmdldFwiOjg0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzgsXG4gICAgICBcInRhcmdldFwiOjg1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCcmF6aWxcIixcbiAgICAgICAgXCJWZW5lenVlbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3OSxcbiAgICAgIFwidGFyZ2V0XCI6ODMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNoaWxlXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgwLFxuICAgICAgXCJ0YXJnZXRcIjo4MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29sdW1iaWFcIixcbiAgICAgICAgXCJFY3VhZG9yXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODAsXG4gICAgICBcInRhcmdldFwiOjg1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb2x1bWJpYVwiLFxuICAgICAgICBcIlZlbmV6dWVsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgxLFxuICAgICAgXCJ0YXJnZXRcIjo4MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWN1YWRvclwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MixcbiAgICAgIFwidGFyZ2V0XCI6ODQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlBhcmFndWF5XCIsXG4gICAgICAgIFwiVXJ1Z3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfVxuICBdXG59XG4iLCJSID0gUmVhY3QuRE9NXG5SQ1RHID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cFxudXBkYXRlID0gUmVhY3QuYWRkb25zLnVwZGF0ZVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbiQgPSBaZXB0b1xuXG5jYXJkc0RhdGEgPSByZXF1aXJlKCcuLi9hcHAvZGF0YS9jYXJkcy5qc29uJylcblxuXG4jIEFkZCBmdW5jdGlvbiB0byBaZXB0b1xuJC5nZXRTY3JpcHQgPSAoc3JjLCBmdW5jKSAtPlxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBzY3JpcHQuYXN5bmMgPSBcImFzeW5jXCJcbiAgc2NyaXB0LnNyYyA9IHNyY1xuICBpZiBmdW5jXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmNcblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblxubGlicyA9IHJlcXVpcmUgJy4vbGlicydcbnBhZ2VzID0gcmVxdWlyZSAnLi9wYWdlcydcbnZpZXdzID0gcmVxdWlyZSAnLi92aWV3cydcblxucm91dGVyID0gcmVxdWlyZSAnLi9yb3V0ZXInXG5cblR3aVN0cnVnID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgbWl4aW5zOiBbcm91dGVyXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBtZW51QWN0aXZlOm51bGxcbiAgICB2aWV3OiB7fVxuICAgIHNsaWRlSW46IHRydWVcblxuICBjb21wb25lbnRXaWxsTW91bnQ6ICgpLT5cbiAgICAkKCcjcGxhY2Vob2xkZXInKS5oaWRlKClcblxuICBjb21wb25lbnRXaWxsVXBkYXRlOiAtPlxuICAgICRzbGlkZUluID0gJChAcmVmcy5zbGlkZUluLmdldERPTU5vZGUoKSlcbiAgICAkc2xpZGVJbi5yZW1vdmVDbGFzcyAnc2xpZGVJbi1pbidcbiAgICAjJG1haW5WaWV3ID0gJChAcmVmcy5tYWluVmlldy5nZXRET01Ob2RlKCkpXG4gICAgIyRtYWluVmlldy5yZW1vdmVDbGFzcyAnbWFpblZpZXctb3V0J1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT4gQHNsaWRlSW4oKVxuXG4gIHNsaWRlSW46IC0+XG4gICAgaWYgbm90IEBzdGF0ZS5zbGlkZUluXG4gICAgICByZXR1cm5cbiAgICAkc2xpZGVJbiA9ICQoQHJlZnMuc2xpZGVJbi5nZXRET01Ob2RlKCkpXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJHNsaWRlSW4uYWRkQ2xhc3MoJ3NsaWRlSW4taW4nKVxuICAgICwgMTBcblxuXG4gIHJlbmRlcjogLT5cbiAgICAjIElmIHRoZSByb3V0ZXIgaGFzbid0IGtpY2tlZCBpbiwgZG8gbm90aGluZ1xuICAgIGlmIG5vdCBAc3RhdGU/LnZpZXdcbiAgICAgIG1haW5WaWV3ID0gUi5wIGNsYXNzTmFtZTogJ2xlYWQnLCAnVHdpU3RydWcgaXMgbG9hZGluZy4uLidcbiAgICBlbHNlXG4gICAgICBtYWluVmlldyA9IHN3aXRjaCBAc3RhdGUudmlldy5uYW1lXG4gICAgICAgIHdoZW4gJ2hvbWUnIHRoZW4gcGFnZXMuSG9tZVxuICAgICAgICAgIGNhcmRzOiBAcHJvcHMuY2FyZHNcbiAgICAgICAgICBzdGF0ZTogQHN0YXRlLnZpZXcuZGF0YS5zdGF0ZVxuICAgICAgICB3aGVuICdjYXJkJyB0aGVuIHBhZ2VzLkNhcmQgQHN0YXRlLnZpZXcuZGF0YVxuICAgICAgICB3aGVuICdjYXJkcycgdGhlbiBwYWdlcy5DYXJkc1xuICAgICAgICAgIGNhcmRzOiBAcHJvcHMuY2FyZHNcbiAgICAgICAgICBzdGF0ZTogQHN0YXRlLnZpZXcuZGF0YS5zdGF0ZVxuICAgICAgICB3aGVuICdjb3VudHJpZXMnIHRoZW4gcGFnZXMuQ291bnRyaWVzKClcbiAgICAgICAgI3doZW4gJ2JvYXJkJyB0aGVuIHJldHVybiBCb2FyZFBpY1ZpZXcoKVxuICAgICAgICB3aGVuICdib2FyZCcgdGhlbiBwYWdlcy5Cb2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2Fib3V0JyB0aGVuIHBhZ2VzLkFib3V0KClcbiAgICAgICAgd2hlbiAnd2hvb3BzJyB0aGVuIHBhZ2VzLldob29wcygpXG5cbiAgICBtYWluVmlld0NsYXNzID0gY3hcbiAgICAgICdjb250YWluZXInOiBAc3RhdGUudmlldy5uYW1lICE9ICdib2FyZCcgIyBCb2FyZCBuZWVkcyB0byBoYXZlIGl0cyBvd24gY29udGFpbmVyXG4gICAgICAnc2xpZGVJbic6IEBzdGF0ZS5zbGlkZUluXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgdmlld3MuTmF2IGtleTonbmF2JywgYWN0aXZlOiBAc3RhdGUubWVudUFjdGl2ZVxuICAgICAgUi5kaXYga2V5OidtYWludmlldycsIHJlZjogJ3NsaWRlSW4nLCBjbGFzc05hbWU6IG1haW5WaWV3Q2xhc3MsIG1haW5WaWV3XG4gICAgICB2aWV3cy5Gb290ZXIga2V5Oidmb290ZXInXG4gICAgXVxuICAgIFxuXG4jIEFkZCBrZXlzIHRvIGNhcmRzXG5hZGRSZWFjdEtleSA9IChlbCktPlxuICBlbC5rZXkgPSBcInJrLSN7ZWwuaWR9XCJcbiAgZWxcblxuUmVhY3QucmVuZGVyQ29tcG9uZW50IFR3aVN0cnVnKHtjYXJkczogY2FyZHNEYXRhLm1hcChhZGRSZWFjdEtleSl9KSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2FwcCdcbiIsIlN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4vU3RhdGVIaXN0b3J5J1xuc3VwZXJwb3dlclRvSW5kZXggPSByZXF1aXJlICcuL3N1cGVycG93ZXJUb0luZGV4J1xuc3RhdGVFbmNvZGVyID0gcmVxdWlyZSAnLi9zdGF0ZUVuY29kZXInXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQm9hcmRTdGF0ZUhpc3RvcnkgZXh0ZW5kcyBTdGF0ZUhpc3RvcnlcbiAgZW5jb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIGVuY29kZWQgPSBzdGF0ZUVuY29kZXIuZW5jb2RlIHN0YXRlXG4gICAgI2NvbnNvbGUubG9nICdCb2FyZFN0YXRlSGlzdG9yeSBlbmNvZGVTdGF0ZScsIHN0YXRlLCBlbmNvZGVkXG4gICAgZW5jb2RlZFxuXG4gIGRlY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBkZWNvZGVkID0gc3RhdGVFbmNvZGVyLmRlY29kZSBzdGF0ZVxuICAgICNjb25zb2xlLmxvZyAnQm9hcmRTdGF0ZUhpc3RvcnkgZGVjb2RlU3RhdGUnLCBzdGF0ZSwgZGVjb2RlZFxuICAgIGRlY29kZWRcbiAgXG4gIGFkZDogKHN0YXRlLCBtZXRhKS0+XG4gICAgIyBJZiBpdCdzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBwcmV2aW91cyBlbnRyeSwgZG9uJ3QgdXBkYXRlIHRoZSBoaXN0b3J5XG4gICAgIyBUaGlzIGlzIHNvIHdlIGNhbiBiYXRjaCB0aGUgY2hhbmdlcyBmb3IgZGlzcGxheVxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICAjY29uc29sZS5sb2cgY3VyXG4gICAgaWYgbm90IGN1cj9cbiAgICAgIHJldHVybiBzdXBlciBzdGF0ZSwgbWV0YVxuXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgbnMgPSBfLmNsb25lRGVlcCBzdGF0ZVxuICAgIGNtID0gY3VyLm1ldGFcbiAgICBjcyA9IGN1ci5zdGF0ZVxuICAgXG4gICAgIyBTZXQgaXAgZGVsdGEgdG8gYmUgYW4gYXJyYXlcbiAgICBpZiBtZXRhLnR5cGUgPT0gJ2lwJ1xuICAgICAgdXNhID0gaWYgbm0uc2lkZSA9PSAndXNhJyB0aGVuIG5tLmRlbHRhIGVsc2UgMFxuICAgICAgdXNzciA9IGlmIG5tLnNpZGUgPT0gJ3Vzc3InIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICBubS5kZWx0YSA9IFt1c2EsIHVzc3JdXG5cblxuICAgIGlmIG5tLnR5cGUgPT0gY20udHlwZSBhbmQgbnMuZ2FtZS5yb3VuZCA9PSBjcy5nYW1lLnJvdW5kXG4gICAgICBzaWRlU2FtZSA9IGlmIG5tLmlkID09ICdzY29yZScgdGhlbiB0cnVlIGVsc2Ugbm0uc2lkZSA9PSBjbS5zaWRlXG4gICAgICBpZFNhbWUgPSBubS5pZCA9PSBjbS5pZFxuXG4gICAgICB0eXBlSXBTYW1lID0gbm0udHlwZSA9PSAnaXAnIGFuZCBubS5jb3VudHJ5LmlkID09IGNtLmNvdW50cnkuaWRcbiAgICAgIHR5cGVWYWxTYW1lID0gbm0udHlwZSA9PSAndmFsJyBhbmQgbm0uaWQgIT0gJ3R1cm4nIGFuZFxuICAgICAgbm0uaWQgIT0gJ3JvdW5kJyBhbmQgc2lkZVNhbWUgYW5kIGlkU2FtZVxuXG4gICAgICBpZiB0eXBlSXBTYW1lIG9yIHR5cGVWYWxTYW1lXG4gICAgICAgIHJldHVybiBAbWVyZ2VXaXRoQ3VycmVudCBucywgbm1cblxuICAgIHN1cGVyIG5zLCBubVxuXG5cbiAgbWVyZ2VXaXRoQ3VycmVudDogKHN0YXRlLG1ldGEpLT5cbiAgICBjID0gXy5jbG9uZURlZXAgQGdldEN1cnJlbnQoKVxuICAgIG5tID0gXy5jbG9uZURlZXAgbWV0YVxuICAgIGNtID0gYy5tZXRhXG4gICAgc3dpdGNoIGNtLnR5cGVcbiAgICAgIHdoZW4gJ2lwJ1xuICAgICAgICBubS5kZWx0YVswXSArPSBjbS5kZWx0YVswXVxuICAgICAgICBubS5kZWx0YVsxXSArPSBjbS5kZWx0YVsxXVxuICAgICAgICBubS5zaWRlID0gJ2JvdGgnXG4gICAgICAgIGlmIG5tLmRlbHRhWzBdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3Vzc3InXG4gICAgICAgIGlmIG5tLmRlbHRhWzFdID09IDBcbiAgICAgICAgICBubS5zaWRlID0gJ3VzYSdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgICAgd2hlbiAndmFsJ1xuICAgICAgICBubS5vbGQgPSBjbS5vbGRcbiAgICAgICAgaWYgbm0ub2xkID09IG5tLm5ld1xuICAgICAgICAgIHBvcCA9IHRydWVcblxuICAgIGlmIEBsYXRlc3QgIT0gQGN1cnJlbnRcbiAgICAgIEBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlKDAsQGN1cnJlbnQrMSlcbiAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgaWYgcG9wID09IHRydWVcbiAgICAgIEBzdGF0ZXMucG9wKClcbiAgICAgIEBjdXJyZW50LS1cbiAgICAgIGlmKEBsYXRlc3QgPiBAY3VycmVudClcbiAgICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBlbHNlXG4gICAgICBAc3RhdGVzW0BjdXJyZW50XSA9XG4gICAgICAgIG1ldGE6IG5tXG4gICAgICAgIHN0YXRlOiBAZW5jb2RlU3RhdGUgc3RhdGVcblxuICAgIEBzYXZlKClcbiAgICBAZW1pdCAnbWVyZ2UnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VwZGF0ZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAnY2hhbmdlJ1xuXG5cbiAgIyBUdXJuIHN0YXRlIGludG8gYSBtaW5pbWFsIHJlcHJlc2VudGF0aW9uXG4gIGVuY29kZUN1cnJlbnQ6ICgpLT5cbiAgICBjdXIgPSBAZ2V0Q3VycmVudCgpXG4gICAgcmV0dXJuIGlmIG5vdCBjdXI/XG4gICAgc3RhdGVFbmNvZGVyLmVuY29kZSBAZ2V0Q3VycmVudCgpPy5zdGF0ZVxuXG5cbiAgdG9nZ2xlVmlzaWJsZTogKGZvcmNlLCBzaG93VGVtcD1mYWxzZSktPlxuICAgIGNsZWFyVGltZW91dCBAc2hvd1RoZW5IaWRlVGltZW91dFxuICAgIEBzaG93VGVtcCA9IHNob3dUZW1wXG4gICAgQHNob3cgPSBpZiBmb3JjZT8gdGhlbiBmb3JjZSBlbHNlICFAc2hvd1xuICAgIEBlbWl0ICd0b2dnbGVWaXNpYmxlJywgQHNob3dcbiAgICBAZW1pdCAndXBkYXRlJ1xuXG4gIHNob3dUaGVuSGlkZTogKHRpbWUgPSAxMDAwKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgaWYgbm90IEBzaG93XG4gICAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlLCB0cnVlXG4gICAgaWYgQHNob3dUZW1wXG4gICAgICBAc2hvd1RoZW5IaWRlVGltZW91dCA9IHNldFRpbWVvdXQgQHRvZ2dsZVZpc2libGUuYmluZCh0aGlzLCBmYWxzZSksIHRpbWVcblxuICBoaWRlOiAtPlxuICAgIEB0b2dnbGVWaXNpYmxlIGZhbHNlXG5cbiAgc2hvdzogLT5cbiAgICBAdG9nZ2xlVmlzaWJsZSB0cnVlXG5cbiAgIyBjYiBjYW4gYmUgYSBjYWxsYmFjayBmdW5jdGlvbiwgc2hvcnRoYW5kIG9iaiwgb3IgYSBrZXkgbmFtZVxuICAjIGh0dHA6Ly9sb2Rhc2guY29tL2RvY3MjZmluZEluZGV4XG4gIGZpbmRTdGF0ZUluZGV4OiAoY2IpLT5cbiAgICBpbmRleCA9IF8uZmluZEluZGV4IEBzdGF0ZXMsIGNiXG4gICAgaWYgaW5kZXggIT0gLTFcbiAgICAgIHJldHVybiBpbmRleCBcbiIsImNsYXNzIE1pY3JvRXZlbnRDbGFzc1xuICBfaW5pdDotPiBAX2xpc3RuIG9yIEBfbGlzdG4gPSB7fVxuICBfY3JlYXRlOihlKS0+IEBfaW5pdCgpW2VdIG9yICBAX2luaXQoKVtlXSA9IFtdXG4gIG9uOihlLCBmKS0+IChAX2NyZWF0ZSBlKS5wdXNoIGZcbiAgb2ZmOihlLCBmKS0+ICh0LnNwbGljZSAodC5pbmRleE9mIGYpLCAxKSBpZiAodCA9IEBfaW5pdCgpW2VdKT9cbiAgb25jZTooZSwgZiktPiBAb24gZSwgKHQgPSA9PiAoQG9mZiBlLCB0KSAmJiBmLmFwcGx5IEAsIGFyZ3VtZW50cylcbiAgZW1pdDooZSwgci4uLiktPiBsLmFwcGx5IEAsIHIgZm9yIGwgaW4gdCBpZiAodCA9IEBfaW5pdCgpW2VdKT87IDBcbiAgQG1peGluPSh0KS0+IHQ6OltwXSA9IEA6OltwXSBmb3IgcCBvZiBAOjo7IDBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvRXZlbnRDbGFzc1xuIiwiTWljcm9FdmVudENsYXNzID0gcmVxdWlyZSAnLi9NaWNyb0V2ZW50Q2xhc3MnXG5cbmNsYXNzIFN0YXRlSGlzdG9yeSBleHRlbmRzIE1pY3JvRXZlbnRDbGFzc1xuICAjIEBpZCBpcyB1c2VkIGZvciBwZXJzaXN0YW5jZVxuICBjb25zdHJ1Y3RvcjogKG9wdHMpLT5cbiAgICAjXy5hc3NpZ24gdGhpcywgTWljcm9FdmVudFxuICAgIEBzdGF0ZXMgPSBbXVxuICAgIEBzdGFnZWQgPSBbXVxuICAgIEBsYXRlc3QgPSBudWxsXG4gICAgQGN1cnJlbnQgPSBudWxsXG4gICAgQHNob3cgPSBmYWxzZVxuICAgIEBpZCA9IG9wdHMuaWRcbiAgICBAc3RhdGVzVG9TYXZlID0gNTBcbiAgXG4gICMgRXh0ZW5kIHRvIGFkZCBjdXN0b20gZW5jb2RpbmcvZGVjb2RpbmcgZnVuY3Rpb25hbGl0eVxuICBlbmNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgc3RhdGVcblxuICBkZWNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgc3RhdGVcbiAgXG4gIHNhdmU6IC0+XG4gICAgc3RhdGVzID0gQHN0YXRlcy5zbGljZSAwLCBAc3RhdGVzVG9TYXZlXG4gICAgXG4gICAganNvbiA9IEpTT04uc3RyaW5naWZ5IHN0YXRlc1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIEBpZCwganNvblxuXG4gIGxvYWQ6IC0+XG4gICAgc3RhdGVzID0gSlNPTi5wYXJzZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShAaWQpXG4gICAgaWYgc3RhdGVzIGFuZCBfLmlzQXJyYXkgc3RhdGVzXG4gICAgICBAc3RhdGVzID0gc3RhdGVzXG4gICAgICBAY3VycmVudCA9IHN0YXRlcy5sZW5ndGggLSAxXG4gICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgICAgQGVtaXQgJ2xvYWQnXG4gICAgICBAZW1pdCAndXBkYXRlJ1xuICAgICAgcmV0dXJuIHN0YXRlc1xuXG4gIGFkZDogKHN0YXRlLCBtZXRhPXt9KS0+XG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuXG4gICAgaWYgbm90IEBjdXJyZW50P1xuICAgICAgQGN1cnJlbnQgPSAwXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnQrK1xuXG4gICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBuZXdTdGF0ZSA9XG4gICAgICBzdGF0ZTogQGVuY29kZVN0YXRlIF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgICBtZXRhOiBfLmNsb25lRGVlcCBtZXRhXG5cbiAgICBAc3RhdGVzW0BjdXJyZW50XSA9IG5ld1N0YXRlXG5cbiAgICBAc2F2ZSgpXG5cbiAgICBAZW1pdCAnYWRkJywgbmV3U3RhdGUsICdZRUFIJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBuZXdTdGF0ZSwgJ1lFQUgnXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgXG4gIHVuZG86ICgpLT5cbiAgICBpZiBAY3VycmVudCA+IDBcbiAgICAgIEBjdXJyZW50LS1cbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndW5kbydcbiAgICBAZW1pdCAndXBkYXRlJywgc3RhdGVcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICAgIHN0YXRlXG4gIFxuICByZWRvOiAoKS0+XG4gICAgaWYgQGN1cnJlbnQgPCBAbGF0ZXN0XG4gICAgICBAY3VycmVudCsrXG4gICAgQHNob3dUaGVuSGlkZSgpXG4gICAgc3RhdGUgPSBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3JlZG8nXG4gICAgQGVtaXQgJ3VwZGF0ZScsIHN0YXRlXG4gICAgQGVtaXQgJ2NoYW5nZSdcbiAgICBzdGF0ZVxuXG4gIGdvVG86IChpbmRleCktPlxuICAgIHJldHVybiBpZiBub3QgaW5kZXg/XG4gICAgQGN1cnJlbnQgPSBpbmRleFxuICAgIEBlbWl0ICdnb1RvJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1cGRhdGUnLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ2NoYW5nZSdcblxuICBnZXQ6IChpbmRleCktPlxuICAgIHJldHVybiBudWxsIGlmIEBzdGF0ZXMubGVuZ3RoID09IDBcbiAgICBzaCA9IF8uY2xvbmVEZWVwIEBzdGF0ZXNbaW5kZXhdXG4gICAgc2guc3RhdGUgPSBAZGVjb2RlU3RhdGUgc2guc3RhdGVcbiAgICBzaFxuXG4gIGdldEN1cnJlbnQ6ICgpLT5cbiAgICBAZ2V0KEBjdXJyZW50KVxuXG4gIGdldFByZXY6IC0+XG4gICAgcHJldiA9IEBjdXJyZW50IC0gMVxuICAgIGlmIHByZXYgPCAwIHRoZW4gcHJldiA9IDBcbiAgICByZXR1cm4gQGdldChwcmV2KVxuXG4gIGdldEFsbDogLT5cbiAgICBfLm1hcCBAc3RhdGVzLCAoc2gsIGluZGV4KT0+XG4gICAgICBAZ2V0IGluZGV4XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUhpc3RvcnlcbiIsImN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gKHByb3BzKSAtPlxuICBvd25lckNsYXNzID0gXCJvd25lci0je3Byb3BzLm93bmVyfVwiXG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIG93bmVyQ2xhc3MgKyAnICcgKyBjbGFzc2VzXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbnRpbmVudCktPlxuICBpZiBjb250aW5lbnQgPT0gJ2FmJyB0aGVuICdmJyBlbHNlIGNvbnRpbmVudC5jaGFyQXQgMFxuXG4iLCJjcyA9XG4gICdhJzogJ2FzJ1xuICAnZSc6ICdldSdcbiAgJ2MnOiAnY2EnXG4gICdzJzogJ3NhJ1xuICAnZic6ICdhZidcbiAgJ20nOiAnbWUnXG5cbm1vZHVsZS5leHBvcnRzID0gKGxldHRlciktPiBjc1tsZXR0ZXJdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsKS0+IGVsIGlmIGVsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCxpLGFyciktPiBhcnIuaW5kZXhPZihlbCkgPT0gaVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gMSA8PSBlbCA8PSAxMTBcbiIsIm1vZHVsZS5leHBvcnRzID1cbiAgdHVybjogKHZhbCktPlxuICAgIHN3aXRjaCB2YWxcbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSB2YWxcbiAgcm91bmQ6ICh2YWwpLT5cbiAgICBpZiB2YWwgPT0gMCB0aGVuICdIJyBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICBcbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwsIG9wdCktPlxuICBzd2l0Y2ggaWRcbiAgICB3aGVuICd0dXJuJ1xuICAgICAgc3RhcnQgPSAnUydcbiAgICAgIGVuZCA9ICdFJ1xuICAgICAgaWYgb3B0ID09ICdsb25nJ1xuICAgICAgICBzdGFydCA9ICdOZXcgR2FtZSdcbiAgICAgICAgZW5kID0gJ0dhbWUgRW5kJ1xuICAgICAgc3dpdGNoIHZhbFxuICAgICAgICB3aGVuIDAgdGhlbiBzdGFydFxuICAgICAgICB3aGVuIDExIHRoZW4gZW5kXG4gICAgICAgIGVsc2UgdmFsXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBoID0gaWYgb3B0ID09ICdsb25nJyB0aGVuICdIZWFkbGluZScgZWxzZSAnSCdcbiAgICAgIGlmIHZhbCA9PSAwIHRoZW4gaCBlbHNlIE1hdGguY2VpbCh2YWwgLyAyKVxuICAgIHdoZW4gJ3Njb3JlJ1xuICAgICAgTWF0aC5hYnMgdmFsXG4gICAgZWxzZVxuICAgICAgdmFsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+IGlmIG51bSA+IDAgdGhlbiBcIisje251bX1cIiBlbHNlIG51bVxuIiwiIyBFbmNvZGUvZGVjb2RlIG51bWJlcnMgaW50byBzaW5nbGUtY2hhciByZXByZXNlbnRhdGlvbnNcbiMgMC0zNSAgLT4gMCwxLDIuLmEsYixjLi56XG4jIDM2LTYxIC0+IEEsQixDLi4uXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGVuY29kZTogKG4pLT5cbiAgICBpZiBuIDwgMzYgdGhlbiBvdXQgPSBuLnRvU3RyaW5nKDM2KSBlbHNlIFN0cmluZy5mcm9tQ2hhckNvZGUgbiArIDI5XG5cbiAgZGVjb2RlOiAoYyA9ICcwJyktPlxuICAgIGNvZGUgPSBjLmNoYXJDb2RlQXQgMFxuICAgICMgQ2FsY3VsYXRlIG9mZnNldCBmcm9tIGNoYXJjb2RlIHRvIHZhbHVlXG4gICAgb2Zmc2V0ID0gc3dpdGNoXG4gICAgICAjIDAtOVxuICAgICAgd2hlbiA0OCA8PSBjb2RlIDw9IDU3IHRoZW4gNDhcbiAgICAgICMgMTAtMzVcbiAgICAgIHdoZW4gOTcgPD0gY29kZSA8PSAxMjIgdGhlbiA4N1xuICAgICAgIyAzNi02MVxuICAgICAgd2hlbiA2NSA8PSBjb2RlIDw9IDkwIHRoZW4gMjlcblxuICAgIGNvZGUgLSBvZmZzZXRcbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbnRpbmVudCktPlxuICBpZiBjb250aW5lbnQgPT0gJ2FmJyB0aGVuICdmJyBlbHNlIGNvbnRpbmVudC5jaGFyQXQgMFxuXG4iLCIjIEhhc2hlZCBxc1xuIyBIYW5kbGVzIHN0cmluZ3MgYW5kIGFycmF5c1xuIyBBbnl0aGluZyB3aXRoIGEgY29tbWEgd2lsbCBiZSBwYXJzZWQgYXMgYW4gYXJyYXlcbm1vZHVsZS5leHBvcnRzID1cbiAgbWVyZ2U6IChvYmopLT5cblxuICBnZXQ6IChmaWVsZCktPlxuICBcbiAgc2V0OiAoZmllbGQsIHZhbCktPlxuICAgIHFzT2JqID0gQHRvT2JqKCkgfHwge31cbiAgICBxc09ialtmaWVsZF0gPSB2YWxcbiAgICBAc2V0UVMgQHRvUVMocXNPYmopXG5cbiAgZGVsZXRlOiAoZmllbGQpLT5cbiAgICBxc09iaiA9IEB0b09iaigpIHx8IHt9XG4gICAgcmV0dXJuIGlmIG5vdCBxc09iaj9cbiAgICBkZWxldGUgcXNPYmpbZmllbGRdXG4gICAgQHNldFFTIEB0b1FTIHFzT2JqXG5cbiAgZW5jb2RlQ2hhcnNJbjogWyc9JywnJiddXG5cbiAgZW5jb2RlQ2hhcnNPdXQ6WyclM0QnLCclMjYnXVxuXG4gIGVuY29kZTogKG9iaiktPlxuICAgIGlmIF8uaXNBcnJheSBvYmpcbiAgICAgIG9iaiA9IG9iai5qb2luKCcsJylcbiAgICBvYmoucmVwbGFjZShAZW5jb2RlQ2hhcnNJbiwgQGVuY29kZUNoYXJzT3V0KVxuXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKEBlbmNvZGVDaGFyc091dCwgQGVuY29kZUNoYXJzSW4pXG4gICAgaWYgc3RyLmluZGV4T2YoJywnKSAhPSAtMVxuICAgICAgc3RyID0gc3RyLnNwbGl0KCcsJylcbiAgICBzdHJcblxuXG4gIHRvT2JqOiAocXMgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpP1sxXSktPlxuICAgIGlmIG5vdCBxc1xuICAgICAgcmV0dXJuXG4gICAgb3V0ID0ge31cbiAgICBwYWlycyA9IHFzLnNwbGl0KCcmJylcbiAgICBwYWlycz8uZm9yRWFjaCAocGFpcik9PlxuICAgICAga3ZBcnIgPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgIG91dFtAZGVjb2RlKGt2QXJyWzBdKV0gPSBAZGVjb2RlKGt2QXJyWzFdKVxuICAgIG91dFxuXG4gIHRvUVM6IChvYmopLT5cbiAgICBwYWlycyA9IFtdXG4gICAgZm9yIG93biBrLHYgb2Ygb2JqXG4gICAgICBwYWlycy5wdXNoIFwiI3tAZW5jb2RlKGspfT0je0BlbmNvZGUodil9XCJcbiAgICBwYWlycy5qb2luKCcmJylcbiAgICAgICBcbiAgc2V0UVM6IChxcyktPlxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXSArICc/JyArIHFzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChpZCwgdmFsKS0+XG4gIHJhbmdlcyA9XG4gICAgc2NvcmU6IFstMjAsIDIwXVxuICAgIHR1cm46IFswLCAxMV1cbiAgICByb3VuZDogWzAsIDE2XVxuICAgIGRlZmNvbjogWzEsIDVdXG4gICAgbWlsb3BzOiBbMCwgNV1cbiAgICBzcGFjZTogWzAsIDhdXG5cbiAgcmFuZ2UgPSByYW5nZXNbaWRdXG5cbiAgaWYgdmFsIDwgcmFuZ2VbMF1cbiAgICByZXR1cm4gcmFuZ2VbMV1cbiAgaWYgdmFsID4gcmFuZ2VbMV1cbiAgICByZXR1cm4gcmFuZ2VbMF1cbiAgdmFsXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKGFyZ3MuLi4pLT5cbiAgZG9jdW1lbnQudGl0bGUgPSBhcmdzLmpvaW4oJyB8ICcpICsgJyAtIFR3aVN0cnVnJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZGlyKS0+IGlmIGRpciA9PSAndXAnIHRoZW4gJysnIGVsc2UgJy0nXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBpZiBudW0gPiAwXG4gICAgcmV0dXJuICcrJ1xuICBpZiBudW0gPCAwXG4gICAgcmV0dXJuICctJ1xuICByZXR1cm4gJydcbiIsIm1vZHVsZS5leHBvcnRzID0gKG51bSktPlxuICBpZiBudW0gPT0gMFxuICAgIG91dCA9ICfigJQnXG4gIGlmIG51bSA+IDBcbiAgICBvdXQgPSBcIisje251bX1cIlxuICBpZiBudW0gPCAwXG4gICAgb3V0ID0gbnVtXG4gIG91dFxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIHNpZ24gPSAnJ1xuICBpZiBudW0gPiAwXG4gICAgc2lnbiA9ICcrJ1xuICBjb25zb2xlLmxvZyBzaWduICsgbnVtXG4gIHJldHVybiBzaWduICsgbnVtXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChhLGIpLT4gYS1iXG4iLCJudW1Ub0NoYXIgPSByZXF1aXJlICcuL251bVRvQ2hhcidcblxuIyBUdXJuIGEgZ2FtZSBzdGF0ZSBvYmplY3QgaW50byBhIHN0cmluZywgdmFsdWVzIGRlbGltaXRlZCBieSBpbmRleCBpbiB0aGUgc3RyaW5nXG4jXG4jIEJ5dGVzICAgICBJdGVtc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyAwLTcgICAgICAgQm9hcmQgc3RhdGU6ICBTY29yZSwgRGVmY29uLCBUdXJuLCBSb3VuZCxcbiMgICAgICAgICAgICAgICAgICAgICAgICAgTU8gVVNBLCBNTyBVU1NSLCBTcGFjZSBVU0EsIFNwYWNlIFVTU1JcbiMgOC0xNzYgICAgIENvdW50cnkgSVBzLCAyIGJ5dGVzIGVhY2gsIHNlcXVlbnRpYWxseSBieSBpZFxubW9kdWxlLmV4cG9ydHMgPVxuICBlbmNvZGU6IChzdGF0ZSktPlxuICAgIGdhbWUgPSBzdGF0ZS5nYW1lXG4gICAgaXBzID0gc3RhdGUuaXBzXG5cbiAgICAjIFNjb3JlIGlzIGZyb20gLTIwIHRvICsyMCwgYnV0IHRoaXMgZW5jb2RlciBpcyBwb3NpdGl2ZSBpbnRlZ2VycyBvbmx5XG4gICAgYm9hcmQgPSBbXG4gICAgICBnYW1lLnNjb3JlICsgMjAsIGdhbWUuZGVmY29uLCBnYW1lLnR1cm4sIGdhbWUucm91bmQsXG4gICAgICBnYW1lLm1pbG9wc1swXSwgZ2FtZS5taWxvcHNbMV0sIGdhbWUuc3BhY2VbMF0sIGdhbWUuc3BhY2VbMV1cbiAgICBdXG5cbiAgICAjIEZpcnN0IDIgaXBzIGFyZSB0aGUgc3VwZXJwb3dlcnMgLSBwcmV0dHkgdXNlbGVzcywgc2hvdWxkIGNoYW5nZSBpbiBmdXR1cmVcbiAgICBib2FyZC5jb25jYXQgXy5mbGF0dGVuIGlwcy5zbGljZSgyKVxuICAgICAgLm1hcCBudW1Ub0NoYXIuZW5jb2RlXG4gICAgICAuam9pbiAnJ1xuICAgICAgXG4gIGRlY29kZTogKHN0ciktPlxuICAgIHJldHVybiBudWxsIGlmIG5vdCBzdHI/XG4gICAgYXJyID0gc3RyLnNwbGl0KCcnKS5tYXAgKGVsKS0+IG51bVRvQ2hhci5kZWNvZGUgZWxcbiAgICBib2FyZEFyciA9IGFyci5zbGljZSgwLDgpXG4gICAgaXBBcnIgPSBhcnIuc2xpY2UoOClcblxuICAgIFtzY29yZSwgZGVmY29uLCB0dXJuLCByb3VuZCwgbW91c2EsIG1vdXNzciwgc3B1c2EsIHNwdXNzcl0gPSBib2FyZEFyclxuICAgIG1pbG9wcyA9IFttb3VzYSwgbW91c3NyXVxuICAgIHNwYWNlID0gW3NwdXNhLCBzcHVzc3JdXG4gICAgc2NvcmUgLT0gMjBcbiAgICBnYW1lID0ge3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtaWxvcHMsIHNwYWNlfVxuXG4gICAgaXBzID0gW11cbiAgICBmb3IgaXAsIGluZGV4IGluIGlwQXJyXG4gICAgICBpcHNJbmRleCA9IE1hdGguZmxvb3IgaW5kZXgvMlxuICAgICAgc2lkZUluZGV4ID0gaW5kZXggJSAyXG4gICAgICBpZiBzaWRlSW5kZXggPT0gMFxuICAgICAgICBpcHNbaXBzSW5kZXhdID0gW2lwXVxuICAgICAgZWxzZVxuICAgICAgICBpcHNbaXBzSW5kZXhdW3NpZGVJbmRleF0gPSBpcFxuXG4gICAgIyBBZGQgdGhlIHN1cGVycG93ZXIgSVBzIGJhY2sgaW5cbiAgICBpcHMudW5zaGlmdCBbMCwwXSwgWzAsMF1cblxuICAgIHtnYW1lLCBpcHN9XG5cbiIsImdldElwU3RhdHMgPSAoaXBzLCBjb3VudHJpZXMpLT5cbiAgYWNjdW11bGF0b3IgPSAtPlxuICAgIGJ0bDogMFxuICAgIG5vbjogMFxuICAgIHRvdGFsOiAwXG4gICAgZXU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYXM6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgbWU6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgYWY6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgc2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG4gICAgY2E6ICAgbm9uOiAwLCBidGw6IDAsIHRvdGFsOiAwXG5cbiAgZm4gPSAoYWNjdW0sIGlwcywgY291bnRyeUlkKS0+XG4gICAgY291bnRyeSA9IF8uZmluZCBjb3VudHJpZXMsIGlkOiBwYXJzZUludChjb3VudHJ5SWQsIDEwKVxuICAgIGlmIGlwc1swXSAtIGlwc1sxXSA+PSBjb3VudHJ5LnN0YWJcbiAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS50b3RhbCsrXG4gICAgICBhY2N1bS50b3RhbCsrXG4gICAgICBpZiBjb3VudHJ5LmJ0bFxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0uYnRsKytcbiAgICAgICAgYWNjdW0uYnRsKytcbiAgICAgIGVsc2VcbiAgICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLm5vbisrXG4gICAgICAgIGFjY3VtLm5vbisrXG4gICAgYWNjdW1cblxuICAjIEZsaXBwZWQgdG8gaGF2ZSBVU1NSIGlwcyBmaXJzdFxuICBpcHNSZXYgPSBfLm1hcCBpcHMsIChpcHMpLT4gXy5jbG9uZURlZXAoaXBzKS5yZXZlcnNlKClcblxuICB1c2EgPSBfLnJlZHVjZSBpcHMsIGZuLCBhY2N1bXVsYXRvcigpXG4gIHVzc3IgPSBfLnJlZHVjZSBpcHNSZXYsIGZuLCBhY2N1bXVsYXRvcigpXG5cbiAge3VzYSwgdXNzcn1cblxuc3VtUmVnaW9uID0gKG1ldHJpYywgc3VtLCByZWdpb24pLT4gc3VtICsgcmVnaW9uW21ldHJpY11cblxuZ2V0UmVnaW9uU3RhdHMgPSAoaXBTdGF0cywgcmVnaW9ucyktPlxuICBzdGF0cyA9IF8ubWFwVmFsdWVzIGlwU3RhdHMsIChoZXJvLCBwb3dlciwgcG93ZXJzKS0+XG4gICAgdmlsbGFpbiA9IGlmIHBvd2VyID09ICd1c2EnIHRoZW4gcG93ZXJzLnVzc3IgZWxzZSBwb3dlcnMudXNhXG4gICAgcmVnaW9uU3RhdHMgPSByZWdpb25zLm1hcCAocmVnaW9uKS0+XG4gICAgICBoUmVnaW9uID0gaGVyb1tyZWdpb24uaWRdXG4gICAgICB2UmVnaW9uID0gdmlsbGFpbltyZWdpb24uaWRdXG4gICAgICBkb21pbmF0aW9uID0gaFJlZ2lvbi5ub24gPiAwIGFuZCBoUmVnaW9uLmJ0bCA+IHZSZWdpb24uYnRsIGFuZCBoUmVnaW9uLnRvdGFsID4gdlJlZ2lvbi50b3RhbFxuICAgICAgY29udHJvbCA9IGhSZWdpb24uYnRsID09IHJlZ2lvbi5udW1CdGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICBwcmVzZW5jZSA9IG5vdCBkb21pbmF0aW9uIGFuZCBub3QgY29udHJvbCBhbmQgaFJlZ2lvbi50b3RhbCA+IDBcbiAgICAgIHsgcHJlc2VuY2UsIGRvbWluYXRpb24sIGNvbnRyb2wgfVxuXG4gICAgcmVnaW9uU3RhdHMgPSBfLnppcE9iamVjdCBfLnBsdWNrKHJlZ2lvbnMsICdpZCcpLCByZWdpb25TdGF0c1xuICAgIHJlZ2lvblN0YXRzID0gXy5hc3NpZ24gcmVnaW9uU3RhdHMsXG4gICAgICBwcmVzZW5jZTogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdwcmVzZW5jZScpLCAwXG4gICAgICBkb21pbmF0aW9uOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2RvbWluYXRpb24nKSwgMFxuICAgICAgY29udHJvbDogXy5yZWR1Y2UgcmVnaW9uU3RhdHMsIHN1bVJlZ2lvbi5iaW5kKG51bGwsICdjb250cm9sJyksIDBcbiAgXG4gIHN0YXRzXG5cbm1vZHVsZS5leHBvcnRzID0gKGlwcywgY291bnRyeUFyciwgcmVnaW9uQXJyKS0+XG4gIGNvdW50cmllcyA9IGdldElwU3RhdHMoaXBzLCBjb3VudHJ5QXJyKVxuICByZWdpb25zID0gZ2V0UmVnaW9uU3RhdHMoY291bnRyaWVzLCByZWdpb25BcnIpXG4gIHtjb3VudHJpZXMsIHJlZ2lvbnN9XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAocG93ZXIpLT4gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyPScnKS0+IHN0ci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHIsIGxlbj0zKS0+ICgnMDAwJyArIHN0cikuc3Vic3RyKC1sZW4sbGVuKVxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQWJvdXRWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnYWJvdXRWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtOCcsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtMTInLFxuICAgICAgICAgICAgUi5oMiB7fSwgW1xuICAgICAgICAgICAgICBcIkFib3V0IFwiXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd0d2knLCAnVHdpJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc3RydWcnLCAnU3RydWcnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgICAgXCJUd2lTdHJ1ZyB3YXMgY3JlYXRlZCBhcyBhIGNhcmQgcmVmZXJlbmNlIGZvciBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIixcbiAgICAgICAgICAgICAgICBcIlR3aWxpZ2h0IFN0cnVnZ2xlXCJcbiAgICAgICAgICAgICAgXCIuIEl0IGhhcyBzaW5jZSBleHBhbmRlZCB0byBpbmNsdWRlIGEgcGxheWFibGUgdmVyc2lvbiBvZiB0aGUgYm9hcmQgZm9yXG4gICAgICAgICAgICAgIGxvY2FsIGdhbWVzIHdpdGhvdXQgdGFraW5nIHVwIGFzIG11Y2ggdGFibGUgc3BhY2UuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIkZvciBtb3JlIGluLWRlcHRoIHN0cmF0ZWd5LCBsb29rIG5vIGZ1cnRoZXIgdGhhbiB0aGUgaW5pbWl0YWJsZSBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgICAgICAgIFwiLiBJdCBoYXMgdG9ucyBvZiBncmVhdCBjb250ZW50IGFuZFxuICAgICAgICAgICAgICBhbmFseXNpcyBhdmFpbGFibGUsIGluY2x1ZGluZyBkaXNjdXNzaW9ucyBhYm91dCBuZWFybHkgZXZlcnkgY2FyZC5cbiAgICAgICAgICAgICAgUGxlYXNlIHN1cHBvcnQgVHdpbGlnaHQgU3RyYXRlZ3kgYW5kIGl0cyBhdXRob3IsIFwiXG4gICAgICAgICAgICAgIFIuZW0ge30sIFwidGhlb3J5XCJcbiAgICAgICAgICAgICAgXCIsIGJ5IHB1cmNoYXNpbmcgVHdpbGlnaHQgU3RydWdnbGUgZnJvbSBBbWF6b24gb24gdGhlIHNpZGViYXIgb2YgaGlzXG4gICAgICAgICAgICAgIHNpdGUsIG9yIGJ5IHBheWluZyBzb21lIG1vbmV5IGZvciB0aGUgYXNzb2NpYXRlZCBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2xlYW5wdWIuY29tL3R3aWxpZ2h0c3RyYXRlZ3lcIiwgXCJlLWJvb2tcIlxuICAgICAgICAgICAgICBcIi4gSXQncyBUd2lsaWdodCBTdHJhdGVneSBpbiBib29rIGZvcm0gYW5kIGRlc2VydmVzIHlvdXIgbW9uZXkuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly9qanQuaW8vXCIsIFwiSmFzb24gVHJpbGxcIlxuICAgICAgICAgICAgICBcIi4gU291cmNlIGF2YWlsYWJsZSBvbiBcIlxuICAgICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnXCIsIFwiR2l0aHViXCJcbiAgICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIuaDIge30sIFwiQWJvdXQgVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgUi5ibG9ja3F1b3RlIHt9LCBbXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJUd2lsaWdodCBTdHJ1Z2dsZSBpcyBhIGNhcmQgZHJpdmVuIGdhbWUgcGxheWVkIG92ZXIgYSBtYXhpbXVtIG9mIDEwIHR1cm5zIFtlYWNoIHdpdGggNiBvciA3IHJvdW5kc10uIFRoZSBnYW1lIG1heSBlbmQgc29vbmVyIChhbmQgZnJlcXVlbnRseSBkb2VzKS5cIlxuICAgICAgICBcbiAgICAgICAgICAgICAgUi5wIHt9LCBcIltJdF0gaXMgZnVuZGFtZW50YWxseSBhIGdhbWUgYWJvdXQgYXJlYSBjb250cm9sLiBUaGVyZSBhcmUgc2l4IGdlb3BvbGl0aWNhbCByZWdpb25zIG9uIHRoZSBtYXA6IEV1cm9wZSAoc3BsaXQgaW50byBFYXN0ZXJuIGFuZCBXZXN0ZXJuIEV1cm9wZSBzdWJyZWdpb25zKSwgQXNpYSAoaW5jbHVkaW5nIHRoZSBTb3V0aGVhc3QgQXNpYSBzdWJyZWdpb24pLCB0aGUgTWlkZGxlIEVhc3QsIEFmcmljYSwgQ2VudHJhbCBBbWVyaWNhLCBhbmQgU291dGggQW1lcmljYS4gV2l0aGluIGVhY2ggcmVnaW9uIGFyZSBjb3VudHJpZXMgdGhhdCBoYXZlIGEgc3RhYmlsaXR5IG51bWJlciwgcmVwcmVzZW50aW5nIGhvdyBzdGFibGUgdGhlIGdvdmVybm1lbnQgdGVuZHMgdG8gYmUuXCJcblxuICAgICAgICAgICAgICBSLnAge30sIFwiSGF2aW5nIGNvbnRyb2wgb2YgY291bnRyaWVzIGhlbHBzIGRldGVybWluZSB3aGV0aGVyIHlvdSBoYXZlIHByZXNlbmNlLCBkb21pbmF0aW9uLCBvciBjb250cm9sIG9mIGEgcmVnaW9uLCB3aGljaCBpbiB0dXJuIGhlbHBzIHlvdSBlYXJuIHZpY3RvcnkgcG9pbnRzLiBXaXRoaW4gZWFjaCByZWdpb24sIHRoZXJlIGFyZSBhIG51bWJlciBvZiBiYXR0bGVncm91bmQgY291bnRyaWVzLCB3aGljaCBhcmUgY29uc2lkZXJlZCBrZXkgdG8gdGhlIHJlZ2lvbi5cIlxuICAgICAgICAgICAgICBSLnAge30sXG4gICAgICAgICAgICAgICAgUi5lbSB7fSxcbiAgICAgICAgICAgICAgICAgIFIuYSBocmVmOiAnaHR0cDovL2JvYXJkZ2FtZWdlZWsuY29tL3RocmVhZC80NzE5NTMvcm9nZXJzLXJldmlld3MtZGVsdXhlLXR3aWxpZ2h0LXN0cnVnZ2xlLWNvbXByZWhlbnMnLCAnRm9ydW0gcG9zdCBieSBsZXJveTQzJ1xuICAgICAgICAgICAgXVxuXG4gICAgICAgIFxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC00JywgW1xuICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZyBpbWctZmx1aWQgQWJvdXRWaWV3LXRzYm94Jywgc3JjOiBcIi9pbWFnZXMvdHNib3guanBnXCJcbiAgICAgICAgXVxuICAgICAgXVxuXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtMTInLFxuICAgICAgICAgIFIucCB7fSxcbiAgICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdpbWctbGluaycsIGhyZWY6IFwiL2ltYWdlcy90c2JvYXJkLmpwZ1wiLFxuICAgICAgICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdpbWcgaW1nLWZsdWlkIGltZy1jZW50ZXInLCBzcmM6ICcvaW1hZ2VzL3RzYm9hcmQtbWQuanBnJ1xuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5TdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL1N0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi4vbGlicy9Cb2FyZFN0YXRlSGlzdG9yeSdcbkJvYXJkU3RhdGVIaXN0b3J5VmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmQgPSByZXF1aXJlICcuLi92aWV3cy9Cb2FyZCdcblxucmVkdWNlU2hvcnRjdXRzID0gKGFyciwgc2hvcnRjdXQpLT5cbiAgYXJyLnB1c2ggUi5kdCB7fSwgc2hvcnRjdXQua2V5XG4gIGFyci5wdXNoIFIuZGQge30sIHNob3J0Y3V0LmRlc2NcbiAgYXJyXG5cblxuQm9hcmRJbmZvID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgc2Nyb2xsVG9wOiAtPlxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyAwLDBcbiAgICAsIDBcbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHNob3J0Y3V0czpcbiAgICAgIGlwOiBbXG4gICAgICAgIHsga2V5OidpJywgZGVzYzogJ0VudGVyIElQIHBsYWNlbWVudCBieSBrZXlib2FyZCAoSVBiSykgbW9kZScgfVxuICAgICAgICB7IGtleTonZXNjJywgZGVzYzogJ0dvIFwidXBcIiAoY291bnRyeSAtPiBjb250aW5lbnQgLT4gZXhpdCBJUGJLIG1vZGUpJyB9XG4gICAgICAgIHsga2V5OidlbnRlcicsIGRlc2M6ICcoc2FtZSBhcyBhYm92ZSknIH1cbiAgICAgICAgeyBrZXk6J2EvQScsIGRlc2M6ICdVU0EgaW5mbHVlbmNlIGluYy9kZWMgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J3IvUicsIGRlc2M6ICdVU1NSIGluZmx1ZW5jZSBpbmMvZGVjICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5Oidlc2MnLCBkZXNjOiAnQ2FuY2VsIElQIHBsYWNlbWVudCAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonZW50ZXInLCBkZXNjOiAnQ29uZmlybSBJUCBwbGFjZW1lbnQgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgIF1cbiAgICAgIGxlZnQ6IFtcbiAgICAgICAgeyBrZXk6J3MvUycsIGRlc2M6ICdTY29yZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidkL0QnLCBkZXNjOiAnRGVmY29uIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J20vTScsIGRlc2M6ICdVU0EgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J28vTycsIGRlc2M6ICdVU1NSIE1pbGl0YXJ5IE9wcyBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidoJywgZGVzYzogJ1Nob3cvaGlkZSBBY3Rpb24gSGlzdG9yeScgfVxuICAgICAgICB7IGtleTonYycsIGRlc2M6ICdSb2xsIGRpY2UnIH1cbiAgICAgIF1cbiAgICAgIHJpZ2h0OiBbXG4gICAgICAgIHsga2V5Oid0L1QnLCBkZXNjOiAnVHVybiBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidyL1InLCBkZXNjOiAnUm91bmQgaW5jL2RlYycgfVxuICAgICAgICB7IGtleToncC9QJywgZGVzYzogJ1VTQSBTcGFjZSBSYWNlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2EvQScsIGRlc2M6ICdVU1NSIFNwYWNlIFJhY2UgaW5jL2RlYycgfVxuICAgICAgICB7IGtleToneicsIGRlc2M6ICdVbmRvIChBY3Rpb24gSGlzdG9yeSknIH1cbiAgICAgICAgeyBrZXk6J3knLCBkZXNjOiAnUmVkbyAoQWN0aW9uIEhpc3RvcnkpJyB9XG4gICAgICBdXG4gICAgICBcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLFxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctMTInLCBbXG4gICAgICAgICAgUi5oMyB7fSwgJ1ZpcnR1YWwgVHdpbGlnaHQgU3RydWdnbGUgYm9hcmQnXG4gICAgICAgICAgUi5wIHt9LCBcIlRoaXMgaXMgYSBmdWxseSBwbGF5YWJsZSBib2FyZCB3aXRoIGEgbW9yZVxuICAgICAgICAgICAgY29tcGFjdCBsYXlvdXQgdG8gZml0IG9uIHNtYWxsZXIgc2NyZWVucywgbGlrZSBhIENocm9tZWJvb2sgb3IgaVBhZC4gSnVzdCBhZGQgY2FyZHNcbiAgICAgICAgICAgIGFuZCB5b3UnbGwgYmUgYWJsZSB0byBwbGF5IGFueXdoZXJlLiBUaGUgYm9hcmQgaXNuJ3QgYXdhcmUgb2YgdGhlIHJ1bGVzLCBub3Igd2lsbFxuICAgICAgICAgICAgaXQgZG8gYW55dGhpbmcgYXV0b21hdGljYWxseS4gVXNlIGl0IGFzIHlvdSB3b3VsZCBhIHBoeXNpY2FsIGNvcHkgb2YgdGhlIGdhbWUuXCJcbiAgICAgICAgICBSLnAge30sIFtcbiAgICAgICAgICAgIFwiVGhpcyBnYW1lLCBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6IFwiIy9ib2FyZC8je0Bwcm9wcy5pZH1cIixcbiAgICAgICAgICAgICAgUi5jb2RlIHt9LCBAcHJvcHMuaWRcbiAgICAgICAgICAgIFwiLCB3aWxsIGJlIHNhdmVkIGluIHlvdXIgYnJvd3NlciBhbmQgY2FuIGJlIGJvb2ttYXJrZWQgYW5kIHJlc3VtZWQgYXQgYSBsYXRlciB0aW1lLCBldmVuIGlmIHlvdSBjbG9zZSB5b3VyIGJyb3dzZXIuIFwiXG4gICAgICAgICAgICBSLmEgb25DbGljazogQHNjcm9sbFRvcCwgaHJlZjonIy9ib2FyZCcsICdDbGljayBoZXJlIHRvIHN0YXJ0IGEgbmV3IGdhbWUnXG4gICAgICAgICAgICAnLidcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5wIHt9LCBcIlRoZSBVUkwgY29udGFpbnMgdGhlIGNvbXBsZXRlIHN0YXRlIG9mIHRoZSBib2FyZCBhbmQgd2lsbFxuICAgICAgICAgICAgdXBkYXRlIHdpdGggZWFjaCBhY3Rpb24gdGFrZW4uIFRoaXMgY2FuIGJlIHVzZWQgdG8gcGxheSByZW1vdGVseVxuICAgICAgICAgICAgd2l0aCBzb21lb25lIGJ5IHNlbmRpbmcgdGhlIFVSTCBiYWNrIGFuZCBmb3J0aC4gRm9yXG4gICAgICAgICAgICBpbnN0YW5jZSwgaWYgeW91IHdlcmUgdGhlIFVTU1Igc3RhcnRpbmcgYSBuZXcgZ2FtZSwgeW91IHdvdWxkIHBsYWNlIHlvdXJcbiAgICAgICAgICAgIGluaXRpYWwgaW5mbHVlbmNlIHRoZW4gY29weSB0aGUgVVJMIGFuZCBzZW5kIGl0IHRvIHlvdXIgb3Bwb25lbnQuIFRoZXlcbiAgICAgICAgICAgIHdvdWxkIGdvIHRvIHRoYXQgVVJMLCBwbGFjZSB0aGVpciBpbmZsdWVuY2UgYW5kIHNlbmQgdGhlIG5ldyBVUkwgYmFjayB0byB5b3UuIExhdGhlciwgcmluc2UsIHJlcGVhdC5cIlxuICAgICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICAgIFIuaDMge30sIFwiSW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICBSLnAge30sIFwiVG8gYWRkL3JlbW92ZSBpbmZsdW5jZSBpbiBhIGNvdW50cnksIGNsaWNrIGluIHRoZSB0b3AvYm90dG9tIG9mIHRoZSBpbmZsdWVuY2Ugc3BhY2Ugb24gdGhlIGRlc2lyZWQgc2lkZSAoVVNBIG9uIGxlZnQsIFVTU1Igb24gcmlnaHQpLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIlRvIHVuZG8vcmVkbyBvbmUgb3IgbW9yZSBhY3Rpb25zLCBwcmVzcyBaL1kgb25lIG9yIG1vcmUgdGltZXMuXCJcbiAgICAgICAgICBSLnAge30sIFwiVGhlIGRpY2UgY2FuIGJlIHJvbGxlZCBpbmRpdmlkdWFsbHkgYnkgY2xpY2tpbmcgb24gdGhlbSwgb3IgYXMgYSBwYWlyIGJ5IGNsaWNraW5nIG9uIFxcXCJST0xMIERJQ0VcXFwiLlwiXG4gICAgICAgICAgUi5wIHt9LCBcIkVhY2ggc3VwZXJwb3dlciBib3ggKFVTQSwgVVNTUikgc2hvd3MgdGhlIG51bWJlciBvZiBjb250cm9sbGVkIGJhdHRsZWdyb3VuZCBjb3VudHJpZXMgb24gdG9wLiBPbiB0aGUgYm90dG9tIGl0IHNob3dzIHRoZSBudW1iZXIgb2YgcmVnaW9ucyBpbiB3aGljaCB0aGUgcG93ZXIgaGFzIHByZXNlbmNlLCBkb21pbmF0aW9uLCBhbmQgY29udHJvbC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBVU1NSIGhhZCBcXFwiNCAyIDFcXFwiLCBpdCB3b3VsZCBtZWFuIHRoYXQgdGhleSBoYXZlIHByZXNlbmNlIGluIDQgcmVnaW9ucywgZG9taW5hdGUgMiwgYW5kIGNvbnRyb2wgMS5cIlxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy02JywgW1xuICAgICAgICAgIFIuaDMge30sIFwiS2V5Ym9hcmQgU2hvcnRjdXRzXCJcbiAgICAgICAgICBSLmRsIGNsYXNzTmFtZTonQm9hcmRQYWdlLXNob3J0Y3V0cyBjb2wtbGctNicsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMubGVmdCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIGNvbC1sZy02JywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5yaWdodCwgcmVkdWNlU2hvcnRjdXRzLCBbXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbGctMTInLCBbXG4gICAgICAgICAgICAgIFIuaDQge30sIFwiSW5mbHVlbmNlIHBsYWNlbWVudCBieSBrZXlib2FyZFwiXG4gICAgICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIEJvYXJkUGFnZS1zaG9ydGN1dHMtaXAnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLmlwLCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRWaWV3J1xuICBcbiAgc3RhdGVIaXN0b3J5OiBudWxsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBzdGF0ZUhpc3RvcnkgPSBuZXcgQm9hcmRTdGF0ZUhpc3RvcnkgaWQ6IEBwcm9wcy5nYW1lSWRcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAoblApLT5cblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgd2lkdGg6IDExNDBcbiAgICBoZWlnaHQ6IDczMFxuICAgIG5vZGU6XG4gICAgICB3aWR0aDogNjZcbiAgICAgIGhlaWdodDogNTBcbiAgICAgIGd1dHRlcjogMTRcbiAgICAgIHRpdGxlSGVpZ2h0OiAxNlxuICAgICAgdGl0bGVGb250U2l6ZTogMTJcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZGVidWdPYmo6IHt9XG5cblxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRWaWV3JywgW1xuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlWaWV3XG4gICAgICAgIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeVxuICAgICAgICBrZXk6IFwiQm9hcmRTdGF0ZUhpc3RvcnktI3tAcHJvcHMuZ2FtZUlkfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb250YWluZXInLCBbXG4gICAgICAgIEJvYXJkIF8uYXNzaWduIHN0YXRlSGlzdG9yeTogQHN0YXRlSGlzdG9yeSwgQHByb3BzXG4gICAgICAgIEJvYXJkSW5mbyBpZDogQHByb3BzLmdhbWVJZFxuICAgICAgICBSLnRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWFwLXBvc2l0aW9uLWRlYnVnJ1xuICAgICAgICAgIHJlZjonZGVidWcnXG4gICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KEBzdGF0ZS5jb29yZHMsIG51bGwsICcgJylcbiAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgIHdpZHRoOicxMDAlJ1xuICAgICAgICAgICAgaGVpZ2h0Oic2MHJlbSdcbiAgICAgIF1cbiAgICBdXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFBpY1ZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdib2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlcicsXG4gICAgICAgIFIuaDIge30sICdCb2FyZCdcbiAgICAgIFIuYSBocmVmOicvaW1hZ2VzL3RzYm9hcmQuanBnJyxcbiAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnZmx1aWQnLCBzcmM6Jy9pbWFnZXMvdHNib2FyZC5qcGcnXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5saWJzID0gcmVxdWlyZSAnLi4vbGlicydcblxubW9kdWxlLmV4cG9ydHMgID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkVmlldydcbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgJCh3aW5kb3cpLm9uICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9uICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub24gJ2tleXByZXNzJywgQGhhbmRsZUtleVByZXNzXG4gICAgQGdldFN0cmF0ZWd5KClcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICB3aW5kb3cub25rZXlwcmVzcyA9IG51bGxcbiAgICAkKHdpbmRvdykub2ZmICdzY3JvbGwnLCBAZmxvYXRpbmdDYXJkXG4gICAgJCh3aW5kb3cpLm9mZiAncmVzaXplJywgQGZsb2F0aW5nQ2FyZFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcblxuICBjb21wb25lbnREaWRVcGRhdGU6IC0+XG4gICAgQGdldFN0cmF0ZWd5KClcbiAgICAjQHNldFdpbmRvd0tleXByZXNzSGFuZGxlcigpXG5cbiAgZmxvYXRpbmdDYXJkOiAtPlxuICAgICRoZWFkZXIgPSAkIEByZWZzLmhlYWRlci5nZXRET01Ob2RlKClcbiAgICAkaW1nID0gJCBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKVxuICAgICR3aW4gPSAkIHdpbmRvd1xuICAgIGhvID0gJGhlYWRlci5vZmZzZXQoKVxuICAgIGlzU2Nyb2xsaW5nID0gJHdpbi5zY3JvbGxUb3AoKSA+IGhvLnRvcCArIGhvLmhlaWdodFxuICAgICRpbWcudG9nZ2xlQ2xhc3MgJ2NhcmQtaW1nLXNjcm9sbCcsIGlzU2Nyb2xsaW5nXG4gICAgJGltZy5jc3MgJ3JpZ2h0JywgXCIjeygkd2luLndpZHRoKCkgLSBoby53aWR0aCAtIDE1KSAvIDJ9cHhcIlxuXG4gIGhhbmRsZUtleVByZXNzOiAoZXYpIC0+XG4gICAgICBrQyA9IGV2LmtleUNvZGVcbiAgICAgIGlmIGtDID09IDEwNCBvciBrQyA9PSA3MlxuICAgICAgICBpZCA9IEBwcm9wcy5wcmV2Q2FyZC5pZFxuICAgICAgaWYga0MgPT0gMTA4IG9yIGtDID09IDc2XG4gICAgICAgIGlkID0gQHByb3BzLm5leHRDYXJkLmlkXG4gICAgICBpZiBpZD9cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIjL2NhcmQvI3tpZH1cIlxuXG4gIGdldFN0cmF0ZWd5OiAtPlxuICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgZGF0YS4uLjwvcD4nXG4gICAgJC5nZXQgXCIvZGF0YS9jYXJkU3RyYXRlZ3lMaW5rZWQvI3tsaWJzLnplcm9QYWQoQHByb3BzLmNhcmQuaWQpfS5odG1sXCIsIChkYXRhKT0+XG4gICAgICBAcmVmcy5jYXJkU3RyYXRlZ3kuZ2V0RE9NTm9kZSgpLmlubmVySFRNTCA9IGRhdGFcblxuICByZW5kZXI6IC0+XG4gICAgY2FyZCA9IEBwcm9wcy5jYXJkXG4gICAgaW1hZ2VVcmwgPSBcIi9pbWFnZXMvY2FyZHMvI3tsaWJzLnplcm9QYWQoY2FyZC5pZCl9LmpwZ1wiXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdwYWdlLWhlYWRlciBjbGVhcmZpeCcsIHJlZjogJ2hlYWRlcicsXG4gICAgICAgIFIuaDIgY2xhc3NOYW1lOiBsaWJzLmNhcmRDbGFzc05hbWUoY2FyZCksIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLW9wcycsIGlmIGNhcmQub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgY2FyZC5vcHNcbiAgICAgICAgICBcIiN7Y2FyZC50aXRsZX0gXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidjYXJkLWlkJywgXCIjI3tjYXJkLmlkfVwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZC1uYXYnLCBbXG4gICAgICAgICAgUi5hIHtocmVmOlwiIy9jYXJkLyN7QHByb3BzLnByZXZDYXJkLmlkfVwiLCBjbGFzc05hbWU6J2NhcmQtbmF2LXByZXYnfSwgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy5wcmV2Q2FyZC50aXRsZX1cIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2NhcmQtbmF2LWxhYmVsJywgW1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAn4peAICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhIKSdcbiAgICAgICAgICAgICAgJyBwcmV2J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMubmV4dENhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtbmV4dCd9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLm5leHRDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgICduZXh0ICdcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgJyhMKSdcbiAgICAgICAgICAgICAgUi5zbWFsbCB7fSwgJyDilrYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBSLnAge2NsYXNzTmFtZTogJ3B1bGwtbGVmdCBjYXJkLWJvZHknfSwgY2FyZC50ZXh0XG4gICAgICBSLmltZyBrZXk6IGltYWdlVXJsLCBzcmM6IGltYWdlVXJsLCBjbGFzc05hbWU6ICdpbWdSaWdodCcsIHJlZjonY2FyZEltZydcbiAgICAgIFIuZGl2IHtjbGFzc05hbWU6ICdjYXJkLXN0cmF0ZWd5JywgaWQ6ICdjYXJkLXN0cmF0ZWd5J30sIFtcbiAgICAgICAgUi5oMyB7fSwgW1xuICAgICAgICAgICdTdHJhdGVnaWMgTm90ZXMgZnJvbSdcbiAgICAgICAgICAnICdcbiAgICAgICAgICBSLmEgaHJlZjpjYXJkLnVybCwgJ1R3aWxpZ2h0U3RyYXRlZ3kuY29tJ1xuICAgICAgICBdXG4gICAgICAgIFIuZGl2IHJlZjonY2FyZFN0cmF0ZWd5JyxcbiAgICAgICAgICBSLnAge30sICdMb2FkaW5nIGRhdGEnXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5DYXJkTGlzdCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0NhcmRMaXN0J1xuXG5pZHNGcm9tV0dSID0gKGlkcz1bXSktPlxuICBpZHMubWFwIChpZCktPlxuICAgIHN3aXRjaCBpZFxuICAgICAgd2hlbiAzNSB0aGVuIDgxXG4gICAgICB3aGVuIDk4IHRoZW4gOTlcbiAgICAgIHdoZW4gOTkgdGhlbiAxMDBcbiAgICAgIHdoZW4gMTAwIHRoZW4gMzVcbiAgICAgIHdoZW4gMTAxIHRoZW4gMTAyXG4gICAgICB3aGVuIDEwMiB0aGVuIDEwM1xuICAgICAgd2hlbiAxMDcgdGhlbiAxMTBcbiAgICAgIHdoZW4gMTA5IHRoZW4gOThcbiAgICAgIHdoZW4gMTEwIHRoZW4gMTA0XG4gICAgICB3aGVuIDExMSB0aGVuIDEwOVxuICAgICAgd2hlbiAxMTIgdGhlbiAxMDdcbiAgICAgIGVsc2UgaWRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZHNWaWV3J1xuICBkZWZhdWx0U3RhdGU6IChwcm9wcyktPlxuICAgIGZpbHRlciA9IHByb3BzPy5zdGF0ZT8uZmlsdGVyXG4gICAgZnVsbFRleHQ6IGlmIGZpbHRlciB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGNhcmRJbWc6IGZhbHNlXG4gICAgY2FyZEZpbHRlcklucHV0OiBpZiBmaWx0ZXIgdGhlbiBmaWx0ZXIuam9pbignICcpIGVsc2UgJydcbiAgICBzb3J0OiAnc3RhZ2UnXG4gICAgZmlsdGVyOiBudWxsXG4gICAgdmlldzogJ2ltZydcbiAgICBmaWx0ZXJJc1dHUjogZmFsc2VcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIGlmIG5leHRQcm9wcy5zdGF0ZT9cbiAgICAgIEBzZXRTdGF0ZSBuZXh0UHJvcHMuc3RhdGVcbiAgICBlbHNlXG4gICAgICBAc2V0U3RhdGUgQGRlZmF1bHRTdGF0ZSgpXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIF8ubWVyZ2UgQGRlZmF1bHRTdGF0ZShAcHJvcHMpLCBAcHJvcHMuc3RhdGVcblxuICBnZXRGaWx0ZXJJZHM6ICgpIC0+XG4gICAgaWYgQHN0YXRlPy5maWx0ZXI/XG4gICAgICBmaWx0ZXJJZHMgPSBAc3RhdGUuZmlsdGVyLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVHJ1dGh5KVxuICAgICAgICAuZmlsdGVyKGxpYnMuZmlsdGVyVW5pcXVlKVxuICAgIGlmIG5vdCBmaWx0ZXJJZHM/IHRoZW4gZmlsdGVySWRzID0gW11cbiAgICByZXR1cm4gZmlsdGVySWRzXG5cbiAgIyBKdXN0IGZpbHRlcmluZyBieSBpZCByaWdodCBub3dcbiAgZ2V0RmlsdGVyZWRDYXJkczogLT5cbiAgICBpZiBAc3RhdGUuZmlsdGVyP1xuICAgICAgcmV0dXJuIEBwcm9wcy5jYXJkcy5maWx0ZXIgKGVsKSA9PlxuICAgICAgICBpZiBlbC5pZCBpbiBAc3RhdGUuZmlsdGVyXG4gICAgICAgICAgcmV0dXJuIGVsXG4gICAgQHByb3BzLmNhcmRzXG4gICAgICAgIFxuXG4gIGZpbHRlckFuZFNvcnRDYXJkczogLT5cbiAgICBjYXJkcyA9IEBnZXRGaWx0ZXJlZENhcmRzKClcbiAgICBbc29ydCwgb3JkZXJdID0gQHN0YXRlLnNvcnQuc3BsaXQgJy0nXG5cbiAgICBzb3J0UGFyYW0gPSBzd2l0Y2ggc29ydFxuICAgICAgd2hlbiAndGV4dGxlbicgdGhlbiAoZWwpIC0+IGVsLnRleHQubGVuZ3RoXG4gICAgICB3aGVuICdzaWRlJyB0aGVuIFsnb3duZXInLCdzdGFnZScsJ2lkJ11cbiAgICAgIHdoZW4gJ29wcycgdGhlbiAnb3BzJ1xuICAgICAgd2hlbiAndGl0bGVsZW4nIHRoZW4gKGVsKSAtPiBlbC50aXRsZS5sZW5ndGhcbiAgICAgIGVsc2UgWydzdGFnZScsICdpZCddXG4gICAgY2FyZHMgPSBfLnNvcnRCeSBjYXJkcywgc29ydFBhcmFtXG5cbiAgICBpZiBvcmRlciA9PSAncmV2J1xuICAgICAgY2FyZHMucmV2ZXJzZSgpXG5cbiAgICBjYXJkc1xuXG4gIGdyb3VwQ2FyZHM6IChjYXJkcyA9IEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKSktPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gW2NhcmRzXVxuXG4gICAgc29ydCA9IEBzdGF0ZS5zb3J0XG4gICAgaWYgc29ydCA9PSAnc2lkZSdcbiAgICAgIHNvcnQgPSAnb3duZXInXG4gICAgaWYgQHN0YXRlLnNvcnRcbiAgICAgIHJldHVybiBfLmdyb3VwQnkoY2FyZHMsIHNvcnQpXG4gICAgICAgICBcblxuICBoYW5kbGVGdWxsVGV4dDogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGZ1bGxUZXh0OiBAcmVmcy5mdWxsVGV4dC5nZXRET01Ob2RlKCkuY2hlY2tlZFxuXG4gIGhhbmRsZUNhcmRJbWc6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkSW1nOiBAcmVmcy5jYXJkSW1nLmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEZpbHRlckNoYW5nZTogLT5cbiAgICB2YWx1ZSA9IEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlXG4gICAgIyBJZiBXR1IgdGhlbiB3ZSBoYXZlIHRvIHRyYW5zbGF0ZSBzb21lIGlkc1xuICAgIGlzV0dSID0gdmFsdWUuc2VhcmNoKC8jLio6LykgIT0gLTFcblxuICAgICMgV0dSIGFkZHMgXCJPcHMgMzogLi4uXCIsIHNvIGRvbid0IHBpY2sgdGhvc2UgdXBcbiAgICAjIEJ1dCBzdGlsbCBwaWNrIHVwIHRoZSBzY29yaW5nIGNhcmRzXG4gICAgaWRzID0gdmFsdWUubWF0Y2goL1xcZCtbXjpdfFxcZCskfCNcXGQ6L2cpPy5tYXAgKGVsKS0+XG4gICAgICAjIFN0cmlwIG91dCBhbnkgbm9uLWRpZ2l0IGNoYXJzXG4gICAgICBlbCA9IGVsLnJlcGxhY2UgL1xcRC9nLCAnJ1xuICAgICAgcGFyc2VJbnQgZWwsIDEwXG4gICAgaWYgdmFsdWUgPT0gJycgb3Igbm90IGlkcz9cbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmaWx0ZXI6IG51bGxcbiAgICBlbHNlXG4gICAgICBpZiBpc1dHUlxuICAgICAgICBpZHMgPSBpZHNGcm9tV0dSIGlkc1xuICAgICAgaWRzID0gaWRzLnNvcnQobGlicy5zb3J0TnVtZXJpY2FsKS5maWx0ZXIobGlicy5maWx0ZXJWYWxpZENhcmRJZHMpXG4gICAgICBzdGF0ZSA9XG4gICAgICAgIGNhcmRGaWx0ZXJJbnB1dDogdmFsdWVcbiAgICAgICAgZnVsbFRleHQ6IHRydWVcbiAgICAgICAgZmlsdGVyOiBpZHNcblxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gICMgRm9ybWF0IHRoZSBpbnB1dCBmaWVsZCB0byBiZSBqdXN0IHRoZSBpZHMgb24gYmx1clxuICBoYW5kbGVDYXJkRmlsdGVyQmx1cjogLT5cbiAgICBmaWx0ZXJJZHMgPSBAZ2V0RmlsdGVySWRzKClcblxuICAgIEBzZXRTdGF0ZVxuICAgICAgY2FyZEZpbHRlcklucHV0OiBmaWx0ZXJJZHMuam9pbiAnICdcblxuICAgIGlmIGZpbHRlcklkcz8gYW5kIGZpbHRlcklkcy5sZW5ndGggPiAwXG4gICAgICBsaWJzLnFzLnNldCAnZmlsdGVyJywgZmlsdGVySWRzXG4gICAgZWxzZVxuICAgICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuICBoYW5kbGVDYXJkRmlsdGVyQ2xlYXI6ICgpLT5cbiAgICBAcmVmcy5jYXJkRmlsdGVyLmdldERPTU5vZGUoKS52YWx1ZSA9ICcnXG4gICAgQHNldFN0YXRlXG4gICAgICBmaWx0ZXI6bnVsbFxuICAgICAgY2FyZEZpbHRlcklucHV0OiAnJ1xuXG4gICAgbGlicy5xcy5kZWxldGUgJ2ZpbHRlcidcblxuICBzb3J0R3JvdXBUaXRsZTogKHNvcnQgPSBAc3RhdGUuc29ydCwgdmFsKS0+XG4gICAgdmFsSW50ID0gcGFyc2VJbnQgdmFsLCAxMFxuICAgIHN3aXRjaCBzb3J0XG4gICAgICB3aGVuICdvcHMnXG4gICAgICAgIHMgPSBpZiB2YWxJbnQgPiAxIHRoZW4gJ3MnIGVsc2UgJydcbiAgICAgICAgaWYgdmFsSW50ID09IDAgdGhlbiAnU2NvcmluZycgZWxzZSBcIiN7dmFsfSBPcCN7c31cIlxuICAgICAgd2hlbiAnc2lkZSdcbiAgICAgICAgaWYgdmFsID09ICd1cydcbiAgICAgICAgICAnVVNBJ1xuICAgICAgICBlbHNlIGlmIHZhbCA9PSAnbmV1dHJhbCdcbiAgICAgICAgICAnTmV1dHJhbCdcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHZhbC50b1VwcGVyQ2FzZSgpXG4gICAgICB3aGVuICdzdGFnZSdcbiAgICAgICAgc3dpdGNoIHZhbEludFxuICAgICAgICAgIHdoZW4gMSB0aGVuICdFYXJseSBXYXInXG4gICAgICAgICAgd2hlbiAyIHRoZW4gJ01pZCBXYXInXG4gICAgICAgICAgd2hlbiAzIHRoZW4gJ0xhdGUgd2FyJ1xuXG4gIGhhbmRsZVZpZXdDbGljazogKHZpZXcpLT5cbiAgICBAc2V0U3RhdGUgeyB2aWV3IH1cbiAgICBsaWJzLnFzLnNldCAndmlldycsIHZpZXdcblxuICByZW5kZXI6IC0+XG4gICAgc29ydExpbmsgPSAoc29ydCwgZGlzcGxheSkgPT5cbiAgICAgIGNsYXNzTmFtZSA9IGN4IGFjdGl2ZTogQHN0YXRlLnNvcnQgPT0gc29ydFxuICAgICAgcmVmID0gXCIje3NvcnR9U29ydFwiXG4gICAgICBvbkNsaWNrID0gKCktPlxuICAgICAgICBsaWJzLnFzLnNldCAnc29ydCcsIHNvcnRcbiAgICAgIFIuYSB7b25DbGljaywgcmVmLCBjbGFzc05hbWV9LCBkaXNwbGF5XG5cbiAgICBjYXJkcyA9IEBncm91cENhcmRzIEBmaWx0ZXJBbmRTb3J0Q2FyZHMoKVxuXG4gICAgY2FyZExpc3RzID0gXy5tYXAgY2FyZHMsIChjYXJkcywgdmFsKT0+XG4gICAgICBjYXJkTGlzdEhlYWRpbmcgPSBudWxsXG4gICAgICBpZiBub3QgQHN0YXRlLmZpbHRlcj9cbiAgICAgICAgY2FyZExpc3RIZWFkaW5nID0gUi5oMiBjbGFzc05hbWU6J2NhcmRMaXN0LWdyb3VwSGVhZGluZycsXG4gICAgICAgICAgQHNvcnRHcm91cFRpdGxlIEBzdGF0ZS5zb3J0LCB2YWxcbiAgICAgIFIuZGl2IHt9LCBbXG4gICAgICAgIGNhcmRMaXN0SGVhZGluZ1xuICAgICAgICBDYXJkTGlzdFxuICAgICAgICAgIGNhcmRJbWc6IEBzdGF0ZS5jYXJkSW1nXG4gICAgICAgICAgZnVsbFRleHQ6IEBzdGF0ZS5mdWxsVGV4dFxuICAgICAgICAgIGNhcmRzOiBjYXJkc1xuICAgICAgICAgIHZpZXc6IEBzdGF0ZS52aWV3XG4gICAgICBdXG5cbiAgICBjYXJkc1ZpZXdDbGFzcyA9IGN4XG4gICAgICAnY2FyZHNWaWV3JzogdHJ1ZVxuICAgICAgJ2NhcmRzVmlldy0tZmlsdGVyZWQnOiBAc3RhdGUuZmlsdGVyP1xuICAgICAgJ2NhcmRzVmlldy0tZnVsbFRleHQnOiBAc3RhdGUuZnVsbFRleHRcblxuICAgIFIuZGl2IGNsYXNzTmFtZTogY2FyZHNWaWV3Q2xhc3MsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIHJvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZENvbnRyb2xzJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2xhYmVsJywgJ1NvcnQgYnk6J1xuICAgICAgICAgICAgc29ydExpbmsgJ3N0YWdlJywgJ1N0YWdlJ1xuICAgICAgICAgICAgc29ydExpbmsgJ29wcycsICdPcHMnXG4gICAgICAgICAgICBzb3J0TGluayAnc2lkZScsICdTaWRlJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLmxhYmVsIHtodG1sRm9yOicnLCBjbGFzc05hbWU6Jyd9LCAnVmlldzogJ1xuICAgICAgICAgICAgUi5pXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVWaWV3Q2xpY2suYmluZCBudWxsLCAnaW1nJ1xuICAgICAgICAgICAgICB0aXRsZTogJ0NhcmQgaW1hZ2UnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoLWxhcmdlICN7aWYgQHN0YXRlLnZpZXcgPT0gJ2ltZycgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICd0aXRsZSdcbiAgICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSBhbmQgb3BzJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi10aCAje2lmIEBzdGF0ZS52aWV3ID09ICd0aXRsZScgdGhlbiAnYWN0aXZlJyBlbHNlICcnfVwiXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICd0ZXh0J1xuICAgICAgICAgICAgICB0aXRsZTogJ0Z1bGwgdGV4dCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tYWxpZ24tbGVmdCAje2lmIEBzdGF0ZS52aWV3ID09ICd0ZXh0JyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICNpZDogJ2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjdHlwZTonY2hlY2tib3gnXG4gICAgICAgICAgICAgICNyZWY6J2Z1bGxUZXh0J1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVGdWxsVGV4dFxuICAgICAgICAgICAgICAjY2hlY2tlZDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmxhYmVsIHtodG1sRm9yOidmdWxsVGV4dCcsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCB0ZXh0J1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5pbnB1dFxuICAgICAgICAgICAgICAjbmFtZTogJ2NhcmRJbWcnXG4gICAgICAgICAgICAgICNpZDogJ2NhcmRJbWcnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonY2FyZEltZydcbiAgICAgICAgICAgICAgI29uQ2hhbmdlOiBAaGFuZGxlQ2FyZEltZ1xuICAgICAgICAgICAgICAjY2hlY2tlZDogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2NhcmRJbWcnLCBjbGFzc05hbWU6J2NhcmQtc2hvdy10ZXh0LWxhYmVsJ30sICdTaG93IGNhcmQgaW1hZ2UnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRzLWZpbHRlci1ieS1pZCBjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmxhYmVsIGh0bWxGb3I6J2NhcmRGaWx0ZXInLCBjbGFzc05hbWU6J2NhcmRGaWx0ZXItbGFiZWwnLCBcIkZpbHRlciBieSBpZHMgXCJcbiAgICAgICAgICBSLmlucHV0XG4gICAgICAgICAgICBuYW1lOiAnY2FyZEZpbHRlcidcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2FyZEZpbHRlci1pbnB1dCdcbiAgICAgICAgICAgIHJlZjogJ2NhcmRGaWx0ZXInXG4gICAgICAgICAgICBvbkNoYW5nZTogQGhhbmRsZUNhcmRGaWx0ZXJDaGFuZ2VcbiAgICAgICAgICAgIG9uQmx1cjogQGhhbmRsZUNhcmRGaWx0ZXJCbHVyXG4gICAgICAgICAgICB2YWx1ZTogQHN0YXRlLmNhcmRGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXN0ZSBmcm9tIFdhcmdhbWVyb29tIG9yIGVudGVyIGlkcydcbiAgICAgICAgICBSLmEge2NsYXNzTmFtZTonY2FyZHMtZmlsdGVyLWJ5LWlkLWNsZWFyJywgb25DbGljazpAaGFuZGxlQ2FyZEZpbHRlckNsZWFyfSwgJ2NsZWFyJ1xuICAgICAgICBdXG4gICAgICBdXG4gICAgICBjYXJkTGlzdHNcbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ291bnRyaWVzVmlldyAnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjb3VudHJpZXNWaWV3JywgW1xuICAgICAgUi5oMiB7fSwgJ0NvdW50cmllcydcbiAgICBdXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnSG9tZVZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdIb21lVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLXhzLTEyJywgW1xuICAgICAgICAgIFIuaDEgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInR3aSBvd25lci11c1wiLCBcIlR3aVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInN0cnVnIG93bmVyLXVzc3JcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuICAgICAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQgYmx1cmInLCBbXG4gICAgICAgICAgICBcIlR3aVN0cnVnIGlzIGEgY29tcGFuaW9uIGFwcGxpY2F0aW9uIGZvciBcIlxuICAgICAgICAgICAgUi5hIGhyZWY6XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1R3aWxpZ2h0X1N0cnVnZ2xlXCIsIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgXCIuIEl0IHdvdWxkIG5vdCBleGlzdCB3aXRob3V0IFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb21cIiwgXCJUd2lsaWdodCBTdHJhdGVneVwiXG4gICAgICAgICAgICBcIi5cIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmEgY2xhc3NOYW1lOiAnaG9tZS1saW5rJywgaHJlZjogJyMvYm9hcmQnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBCb2FyZCdcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWJvYXJkLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0Z1bGx5IHBsYXlhYmxlIGJvYXJkIC0ganVzdCBhZGQgY2FyZHMnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdob21lLWxpbmsgaG9tZS1saW5rLWNhcmRzJywgaHJlZjogJyMvY2FyZHMnLCBbXG4gICAgICAgICAgICBSLmgzIHt9LCAnVmlldyBDYXJkcydcbiAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZy1yZXNwb25zaXZlJywgc3JjOiAnL2ltYWdlcy9ob21lLWNhcmRzLmpwZydcbiAgICAgICAgICAgIFIucCB7fSwgJ0V4cGxvcmUgdGhlIGNhcmRzIG9mIFR3aWxpZ2h0IFN0cnVnZ2xlJ1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnV2hvb3BzVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IHt9LCBbXG4gICAgICBSLmgyIHt9LCBcIkRFRkNPTiAxXCJcbiAgICAgIFIucCBjbGFzc05hbWU6J2xlYWQnLCBbXG4gICAgICAgIFwiTG9va3MgbGlrZSBUd2lTdHJ1ZyB0cmlnZ2VyZWQgbnVjbGVhciB3YXIuIFdIT09QU0lFIERBSVNZIVwiXG4gICAgICAgIFIuYnIge31cbiAgICAgICAgUi5hIGhyZWY6XCIjL2NhcmRzXCIsIFwiSG93IGFib3V0IGxvb2tpbmcgb3ZlciB0aGUgY2FyZHM/XCJcbiAgICAgIF1cbiAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIiwibGlicyA9IHJlcXVpcmUgJy4vbGlicydcbnZlbnQgPSByZXF1aXJlICcuL3ZlbnQnXG5tYXBEYXRhID0gcmVxdWlyZSAnLi4vYXBwL2RhdGEvbWFwLWRhdGEuanNvbidcbm9uZUxldHRlckNvbnRpbmVudENvZGUgPSByZXF1aXJlICcuL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZSdcblxuc2V0Um91dGVPcmlnaW5hbCA9IFJvdXRlcjo6c2V0Um91dGVcblJvdXRlcjo6c2V0Um91dGUgPSAtPlxuICBAY3VycmVudFJvdXRlID0gQGdldFJvdXRlKClcbiAgc2V0Um91dGVPcmlnaW5hbC5hcHBseSB0aGlzLCBhcmd1bWVudHNcblxubW9kdWxlLmV4cG9ydHMgPVxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm91dGVyOiBuZXcgUm91dGVyXG5cbiAgIyBUYWtlcyBhIHZpZXcgbmFtZSBhbmQgYXNzb2NpYXRlZCBkYXRhXG4gIHNldFZpZXc6IChuYW1lLCBwYWdlVGl0bGUsIG1lbnVBY3RpdmU9JycsIGRhdGE9e30pIC0+XG4gICAgaWYgcGFnZVRpdGxlPyB0aGVuIGxpYnMuc2V0UGFnZVRpdGxlIHBhZ2VUaXRsZVxuICAgIEBzZXRTdGF0ZVxuICAgICAgdmlldzoge25hbWUsIGRhdGF9XG4gICAgICBtZW51QWN0aXZlOiBtZW51QWN0aXZlXG4gICAgICBzbGlkZUluOiBAc3RhdGUudmlldz8ubmFtZSAhPSBuYW1lXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgc3RhdGVSb3V0ZSA9IChuYW1lLCBwYWdlVGl0bGUsIG1lbnVBY3RpdmUsIGFyZ3MpLT5cbiAgICAgIHN0YXRlID0gbGlicy5xcy50b09iaiBhcmdzXG4gICAgICAjIENvbnZlcnQgZmlsdGVyIGlkcyBmcm9tIHN0ciAtPiBudW1iZXJcbiAgICAgIGlmIHN0YXRlPy5maWx0ZXI/XG4gICAgICAgIGlmIG5vdCBfLmlzQXJyYXkgc3RhdGUuZmlsdGVyXG4gICAgICAgICAgc3RhdGUuZmlsdGVyID0gW3N0YXRlLmZpbHRlcl1cbiAgICAgICAgc3RhdGUuZmlsdGVyID0gc3RhdGUuZmlsdGVyLm1hcCAoZWwpLT5cbiAgICAgICAgICBwYXJzZUludCBlbCwgMTBcbiAgICAgIEBzZXRWaWV3IG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSxcbiAgICAgICAgc3RhdGU6IHN0YXRlXG5cbiAgICByb3V0ZXIgPSBAcHJvcHMucm91dGVyXG5cbiAgICB2ZW50Lm9uICdzZXRSb3V0ZScsIHJvdXRlci5zZXRSb3V0ZS5iaW5kIHJvdXRlclxuXG4gICAgcm91dGVyLmNvbmZpZ3VyZVxuICAgICAgbm90Zm91bmQ6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ3dob29wcycsICdXaG9vcHMnXG4gICAgICAjJy9ib2FyZCc6IEBzZXRWaWV3LmJpbmQgdGhpcywgJ2JvYXJkJywgJ0JvYXJkJ1xuXG4gICAgcm91dGVyLm9uICcvJywgQHNldFZpZXcuYmluZCB0aGlzLCAnaG9tZScsICdIb21lJ1xuXG5cbiAgICByb3V0ZXIub24gJy9jYXJkLzppZCcsIChpZCk9PlxuICAgICAgaWQgPSBwYXJzZUludCBpZCwgMTBcbiAgICAgIG5leHRJZCA9IGlmIGlkID09IDExMCB0aGVuIDEgZWxzZSBpZCArIDFcbiAgICAgIHByZXZJZCA9IGlmIGlkID09IDEgdGhlbiAxMTAgZWxzZSBpZCAtIDFcbiAgICAgIGNhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogaWRcbiAgICAgIG5leHRDYXJkID0gXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IG5leHRJZFxuICAgICAgcHJldkNhcmQgPSAgXy5maW5kIEBwcm9wcy5jYXJkcywgaWQ6IHByZXZJZFxuICAgICAgcGFnZVRpdGxlID0gXCIje2NhcmQudGl0bGV9ICgjI3tjYXJkLmlkfSlcIlxuICAgICAgQHNldFZpZXcgJ2NhcmQnLCBwYWdlVGl0bGUsICdjYXJkcycsIHtjYXJkLCBuZXh0Q2FyZCwgcHJldkNhcmR9XG5cblxuICAgIHJvdXRlci5vbiAnL2NvdW50cmllcycsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2NvdW50cmllcycsICdDb3VudHJpZXMnLCAnY291bnRyaWVzJ1xuXG5cbiAgICByb3V0ZXIub24gJy9hYm91dCcsIEBzZXRWaWV3LmJpbmQgdGhpcywgJ2Fib3V0JywgJ0Fib3V0JywgJ2Fib3V0J1xuXG5cbiAgICByb3V0ZXIub24gL2NhcmRzXFw/PyguKikvLCBzdGF0ZVJvdXRlLmJpbmQgdGhpcywgJ2NhcmRzJywgJ0NhcmRzJywgJ2NhcmRzJ1xuXG5cbiAgICByb3V0ZXIub24gL2JvYXJkXFwvPyhcXHcqKVxcLz8oLiopLywgKGdhbWVJZCwgaW5jb21pbmdTdGF0ZSk9PlxuICAgICAgI2lmIG5vdCBnYW1lSWQ/IG9yIGdhbWVJZCA9PSAnJ1xuICAgICAgICAjcmV0dXJuIHJvdXRlci5zZXRSb3V0ZSBcImJvYXJkLyN7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMil9XCJcblxuICAgICAgaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgIGdhbWVJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsMTApXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBcIkJvYXJkICN7Z2FtZUlkfVwiLCBcIiMvYm9hcmQvI3tnYW1lSWR9XCJcblxuICAgICAge2NvdW50cnlQb3NpdGlvbnMsIGNvdW50cmllcywgbGlua3MsIHJlZ2lvbkluZm9Ob2Rlc30gPSBtYXBEYXRhXG5cbiAgICAgICNjb3VudHJpZXMgPSBjb3VudHJpZXMubWFwIChub2RlKS0+XG4gICAgICAgICNub2RlLnggPSBjb3VudHJ5UG9zaXRpb25zW25vZGUubmFtZV0ueFxuICAgICAgICAjbm9kZS55ID0gY291bnRyeVBvc2l0aW9uc1tub2RlLm5hbWVdLnlcbiAgICAgICAgI2lmIG5vdCBub2RlLnNob3J0Y3V0P1xuICAgICAgICAgICNub2RlLnNob3J0Y3V0ID0gbm9kZS5zaG9ydG5hbWUuc2xpY2UoMCwyKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICNub2RlLmZpeGVkID0gdHJ1ZVxuICAgICAgICAjbm9kZVxuXG4gICAgICAjIEFkZCBzaG9ydGN1dHNcbiAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgICBub2RlLnggPSBjb3VudHJ5UG9zaXRpb25zW25vZGUubmFtZV0ueFxuICAgICAgICAgIG5vZGUueSA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS55XG4gICAgICAgICAgaWYgbm90IG5vZGUuc2hvcnRjdXQ/XG4gICAgICAgICAgICBub2RlLnNob3J0Y3V0ID0gbm9kZS5zaG9ydG5hbWUuc2xpY2UoMCwyKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgbm9kZVxuXG4gICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMubWFwIChub2RlLCBpbmRleCwgY291bnRyaWVzKS0+XG4gICAgICAgIG5vZGUuc2hvcnRjdXRVbmlxdWUgPSBub2RlLnNob3J0Y3V0XG4gICAgICAgIGlzVW5pcXVlID0gdW5kZWZpbmVkID09IF8uZmluZCBjb3VudHJpZXMsIChjKS0+XG4gICAgICAgICAgaWYgYy5jb250aW5lbnQgPT0gbm9kZS5jb250aW5lbnRcbiAgICAgICAgICAgIGlmIGMuc2hvcnRjdXQuY2hhckF0KDApID09IG5vZGUuc2hvcnRjdXQuY2hhckF0KDApIGFuZCBjLmlkICE9IG5vZGUuaWRcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmIGlzVW5pcXVlXG4gICAgICAgICAgbm9kZS5zaG9ydGN1dFVuaXF1ZSA9IG5vZGUuc2hvcnRjdXQuY2hhckF0IDBcbiAgICAgICAgbm9kZVxuXG4gICAgICAgIFxuICAgICAgXG4gICAgICByZWdpb25JbmZvTm9kZXMgPSByZWdpb25JbmZvTm9kZXMubWFwIChub2RlKS0+XG4gICAgICAgIG5vZGUucmVnaW9uSW5mbyA9IHRydWVcbiAgICAgICAgbm9kZS5maXhlZCA9IHRydWVcbiAgICAgICAgbm9kZVxuXG4gICAgICBub2RlcyA9IF8udW5pb24oY291bnRyaWVzLCByZWdpb25JbmZvTm9kZXMpXG4gICAgICBub2RlcyA9IF8uemlwT2JqZWN0IF8ucGx1Y2sobm9kZXMsICdpZCcpLCBub2Rlc1xuXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzID0gXy5tYXBWYWx1ZXMgXy5ncm91cEJ5KGNvdW50cmllcywgJ2NvbnRpbmVudCcpLCAoY05vZGVzLCBjb250aW5lbnQpLT5cbiAgICAgICAgXy5wbHVjayBjTm9kZXMsICdzaG9ydGN1dCdcbiAgICAgIGRlbGV0ZSBjb3VudHJ5U2hvcnRjdXRzLnVzYVxuICAgICAgZGVsZXRlIGNvdW50cnlTaG9ydGN1dHMudXNzclxuXG4gICAgICBzaG9ydEtleXMgPSBfLm1hcCBfLmtleXMoY291bnRyeVNob3J0Y3V0cyksIChjUyktPiBvbmVMZXR0ZXJDb250aW5lbnRDb2RlIGNTXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzID0gXy56aXBPYmplY3Qgc2hvcnRLZXlzLCBfLnZhbHVlcyhjb3VudHJ5U2hvcnRjdXRzKVxuXG4gICAgICBrZXkgPSBnYW1lSWRcblxuXG4gICAgICBib2FyZFByb3BzID0ge1xuICAgICAgICBnYW1lSWQsIG1hcERhdGEsIGNvdW50cmllcywgcmVnaW9uSW5mb05vZGVzLCBsaW5rcywgbm9kZXMsXG4gICAgICAgIGtleSwgaW5jb21pbmdTdGF0ZSwgY291bnRyeVNob3J0Y3V0c31cblxuICAgICAgQHNldFZpZXcgJ2JvYXJkJywgJ0JvYXJkJywgJ2JvYXJkJywgYm9hcmRQcm9wc1xuXG5cbiAgICByb3V0ZXIuaW5pdCgnLycpXG5cbiIsIk1pY3JvRXZlbnRDbGFzcyA9IHJlcXVpcmUgJy4vbGlicy9NaWNyb0V2ZW50Q2xhc3MnXG5jbGFzcyBWZW50IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFZlbnQoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuc3VwZXJTdGF0cyA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJTdGF0cydcbnJhbmdlZEdhbWVWYWwgPSByZXF1aXJlICcuLi9saWJzL3JhbmdlZEdhbWVWYWwnXG5zaWduZWROdW1PckRhc2ggPSByZXF1aXJlICcuLi9saWJzL3NpZ25lZE51bU9yRGFzaCdcbnN0YXRlRW5jb2RlciA9IHJlcXVpcmUgJy4uL2xpYnMvc3RhdGVFbmNvZGVyJ1xudXBwZXJGaXJzdCA9IHJlcXVpcmUgJy4uL2xpYnMvdXBwZXJGaXJzdCdcbm9uZUxldHRlckNvbnRpbmVudENvZGUgPSByZXF1aXJlICcuLi9saWJzL29uZUxldHRlckNvbnRpbmVudENvZGUnXG5jb250aW5lbnRDb2RlRnJvbUxldHRlciA9IHJlcXVpcmUgJy4uL2xpYnMvY29udGluZW50Q29kZUZyb21MZXR0ZXInXG5maWx0ZXJUcnV0aHkgPSByZXF1aXJlICcuLi9saWJzL2ZpbHRlclRydXRoeSdcblxuQm9hcmROb2RlID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGUnXG5Cb2FyZE5vZGVEaXYgPSByZXF1aXJlICcuL0JvYXJkTm9kZURpdidcbkJvYXJkU3RhdHVzID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1cydcbkJvYXJkTGluayA9IHJlcXVpcmUgJy4vQm9hcmRMaW5rJ1xuXG5cbnN1cGVycG93ZXJUb0luZGV4ID0gKHN0ciktPiBpZiBzdHIgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuXG4jIFJldHVybnMgYSBzaW1wbGUge3VzYTogJ3ByZXNlbmNlJywgdXNzcjogJ2RvbWluYXRpb24nfVxuZ2V0UmVnaW9uU3RhdHVzID0gKHN0YXRzKS0+XG4gIF8ubWFwVmFsdWVzIHN0YXRzLCAoc3RhdCktPlxuICAgIHJldHVybiAnY29udHJvbCcgaWYgc3RhdC5jb250cm9sXG4gICAgcmV0dXJuICdkb21pbmF0aW9uJyBpZiBzdGF0LmRvbWluYXRpb25cbiAgICByZXR1cm4gJ3ByZXNlbmNlJyBpZiBzdGF0LnByZXNlbmNlXG4gICAgcmV0dXJuIGZhbHNlXG5cblxuXG5cbmNvbnRpbmVudFNob3J0Y3V0RGF0YSA9IFtcbiAgeyBjaGFyOiAnQycsIHg6MTI3LCB5OjIwMCB9XG4gIHsgY2hhcjogJ1MnLCB4OjEyNywgeTo1MTAgfVxuICB7IGNoYXI6ICdGJywgeDo1MzMsIHk6NTUwIH1cbiAgeyBjaGFyOiAnRScsIHg6NDgwLCB5OjIyMCB9XG4gIHsgY2hhcjogJ0EnLCB4Ojg0MCwgeToxNTAgfVxuICB7IGNoYXI6ICdNJywgeDo4NDAsIHk6MzgwIH1cbl1cbiAgXG5cbiMgVGFrZXMgYW4gaXBLZXlTZXF1ZW5jZSBhbmQgcmV0dXJucyB0aGUgYXBwbGljYWJsZSBjb250aW5lbnQgYW5kIGNvdW50cnlcbmNvbnRDb3VudHJ5U2VsZWN0aW9uID0gKHJlZ2lvbnMsIGNvdW50cmllcywgaXBLZXlTZXEgPSAnJyktPlxuICBjb250aW5lbnQgPSBfLmZpbmQgcmVnaW9ucywge3Nob3J0Y3V0OiBpcEtleVNlcS5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKX1cbiAgY291bnRyeSA9ICcnXG4gIGNvdW50cnlLZXkgPSBpcEtleVNlcS5zbGljZSgyLDQpXG4gIGlmIGNvdW50cnlLZXkubGVuZ3RoID09IDJcbiAgICBjb3VudHJ5T2JqID0gXy5maW5kIGNvdW50cmllcywge3Nob3J0Y3V0OiBjb3VudHJ5S2V5LnRvTG93ZXJDYXNlKCksIGNvbnRpbmVudDogY29udGluZW50Py5jb250aW5lbnR9XG4gICAgY291bnRyeSA9IGNvdW50cnlPYmouc2hvcnRuYW1lXG4gIGlmIGNvdW50cnlLZXkubGVuZ3RoID09IDFcbiAgICBjb3VudHJ5ID0gXCIje2NvdW50cnlLZXkudG9VcHBlckNhc2UoKX0uLi5cIlxuXG4gIHsgY29udGluZW50LCBjb3VudHJ5IH1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkJ1xuXG4gIGdldEluaXRpYWxTdGF0ZTogKHByb3BzID0gQHByb3BzKSAtPlxuICAgIHN0YXRlSGlzdG9yeSA9IHByb3BzLnN0YXRlSGlzdG9yeVxuICAgIHN0YXRlSGlzdG9yeS5sb2FkKClcbiAgICBzdGF0ZSA9IEBoYW5kbGVJbmNvbWluZ1N0YXRlIHByb3BzLmluY29taW5nU3RhdGVcbiAgICBpZiBub3Qgc3RhdGU/XG4gICAgICBzdGF0ZSA9IHN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KCk/LnN0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgZ2FtZVN0YXRlID1cbiAgICAgICAgZ2FtZTpcbiAgICAgICAgICBzY29yZTogMFxuICAgICAgICAgIHR1cm46IDBcbiAgICAgICAgICByb3VuZDogMFxuICAgICAgICAgIGRlZmNvbjogNVxuICAgICAgICAgIG1pbG9wczogWzAsMF1cbiAgICAgICAgICBzcGFjZTogWzAsMF1cbiAgICAgICAgaXBzOiBfLm1hcCBwcm9wcy5jb3VudHJpZXMsIChjKS0+IFtjLnVzYSwgYy51c3NyXVxuXG4gICAgICBtZXRhID1cbiAgICAgICAgdHlwZTogJ3R1cm4nXG4gICAgICAgIGlkOiAndHVybidcbiAgICAgICAgbmV3R2FtZTogdHJ1ZVxuICAgICAgICBuZXc6IDBcbiAgICAgICAgb2xkOjBcblxuICAgICAgc3RhdGVIaXN0b3J5LmFkZCBnYW1lU3RhdGUsIG1ldGFcbiAgICAgIHN0YXRlID0gZ2FtZVN0YXRlXG5cbiAgICBfLmFzc2lnbiBzdGF0ZSxcbiAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgIGlwS2V5U2VxdWVuY2U6ICcnXG4gICAgICBpcFNob3dDb250aW5lbnQ6ICcnXG4gICAgICBpcFNldENvdW50cnk6IG51bGxcbiAgICAgIGlwSVBDaGFuZ2U6IFtdXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5QKS0+XG4gICAgc3RhdGUgPSBAZ2V0SW5pdGlhbFN0YXRlIG5QXG4gICAgQHNldFN0YXRlIHN0YXRlXG4gICAgI2lmIEBwcm9wcy5zdGF0ZUhpc3Rvcnkuc3RhdGVzLmxlbmd0aCA8IDFcbiAgICAgICNAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAge3N0YXRlSGlzdG9yeSwgZ2FtZUlkfSA9IEBwcm9wc1xuICAgICAgXG4gICAgIyBXaGVuIHN0YXRlIGNoYW5nZXMsIHVwZGF0ZSB0aGUgdXJsXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdjaGFuZ2UnLCA9PlxuICAgICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgaWYgc3RhdGU/IGFuZCBub3Qgc3RhdGUubWV0YS5uZXdHYW1lXG4gICAgICAgIHN0YXRlRW5jID0gc3RhdGVIaXN0b3J5LmVuY29kZUN1cnJlbnQoKVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgbnVsbCwgXCJCb2FyZCAje2dhbWVJZH1cIiwgXCIjL2JvYXJkLyN7Z2FtZUlkfS8je3N0YXRlRW5jfVwiXG5cbiAgICBzdGF0ZUhpc3Rvcnkub24gJ2dvVG8nLCAoc3RhdGUpPT5cbiAgICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuXG4gICAgQGtwSFQgPSBfLnRocm90dGxlIEBrZXlwcmVzc0hhbmRsZXIsIDEwMFxuICAgIEBrdUhUID0gXy50aHJvdHRsZSBAa2V5dXBIYW5kbGVyLCAxMDBcbiAgICBAa2RIVCA9IF8udGhyb3R0bGUgQGtleWRvd25IYW5kbGVyLCAxMDBcblxuICAgICQoZG9jdW1lbnQpLm9uICdrZXlwcmVzcycsIEBrcEhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleXVwJywgQGt1SFRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5ZG93bicsIEBrZEhUXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IC0+XG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBrcEhUXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlkb3duJywgQGtkSFRcblxuICBoYW5kbGVJbmNvbWluZ1N0YXRlOiAoc3RhdGVFbmNvZGVkID0gQHByb3BzLmluY29taW5nU3RhdGUpIC0+XG4gICAgaW5kZXggPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmZpbmRTdGF0ZUluZGV4IHN0YXRlOiBzdGF0ZUVuY29kZWRcbiAgICBpZiBpbmRleD9cbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpbmRleFxuICAgICAgY3VycmVudCA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpXG4gICAgICByZXR1cm4gY3VycmVudC5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgaWYgc3RhdGVFbmNvZGVkPyBhbmQgc3RhdGVFbmNvZGVkICE9ICcnIGFuZCBjdXJyZW50Py5tZXRhLnN0YXRlICE9IHN0YXRlRW5jb2RlZFxuICAgICAgICBzdGF0ZSA9IHN0YXRlRW5jb2Rlci5kZWNvZGUgc3RhdGVFbmNvZGVkXG4gICAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuYWRkIHN0YXRlLFxuICAgICAgICAgIHR5cGU6ICdsb2FkJ1xuICAgICAgICAgIGlkOiAnbG9hZCdcbiAgICAgICAgICBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgICAgIHJldHVybiBzdGF0ZVxuXG5cbiAgIyBBZGRzIHRoZSBzdGF0ZSB0byB0aGUgaGlzdG9yeVxuICAjIFRoaXMgaXMgdG8gYXZvaWQgaGF2aW5nIHRvIGRlZXAtY2hlY2sgdGhlIHN0YXRlIGluIGNvbXBvbmVudFdpbGxVcGRhdGVcbiAgc2V0U3RhdGVIaXN0b3J5OiAoc3RhdGUsIG1ldGEpLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSwgbWV0YVxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuXG4gIGtleXByZXNzSGFuZGxlcjogKGV2KS0+XG4gICAga0MgPSBldi5rZXlDb2RlXG4gICAgZGlyID0gaWYga0MgPj0gOTcgdGhlbiAnaW5jJyBlbHNlICdkZWMnXG5cbiAgICBpZiBAc3RhdGUuaXBLZXlTZXF1ZW5jZS5sZW5ndGggPiAwXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uoa0MpXG5cbiAgICBpZiBrQyA9PSAxMDUgb3Iga0MgPT0gNzNcbiAgICAgIHJldHVybiBAaXBLZXlTZXF1ZW5jZSBrQ1xuICAgICAgcmV0dXJuXG5cbiAgICBzd2l0Y2gga0NcbiAgICAgICMgKGMvQykgRGljZVxuICAgICAgd2hlbiA5OSwgNjdcbiAgICAgICAgQHJlZnMuQm9hcmRTdGF0dXMucm9sbERpY2UoKVxuXG4gICAgICAjIEhpc3RvcnlcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIyAoei9aKSBVbmRvXG4gICAgICB3aGVuIDEyMiwgOTBcbiAgICAgICAgQHVuZG9IaXN0KClcbiAgICAgICMgKHkvWSkgUmVkb1xuICAgICAgd2hlbiAxMjEsIDg5XG4gICAgICAgIEByZWRvSGlzdCgpXG4gICAgICAjIChoL0gpIEhpc3Rvcnkgc2hvdy9oaWRlXG4gICAgICB3aGVuIDEwNCwgNzJcbiAgICAgICAgQHRvZ2dsZUhpc3QoKVxuXG4gICAgICAjIEdhbWUgcHJvcGVydGllc1xuICAgICAgIy0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIyAodC9UKSBUdXJuIGluYy9kZWNcbiAgICAgIHdoZW4gMTE2LCA4NFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3R1cm4nLCBkaXJcbiAgICAgICMgKHIvUikgUm91bmQgaW5jL2RlY1xuICAgICAgd2hlbiAxMTQsIDgyXG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAncm91bmQnLCBkaXJcbiAgICAgICMgKFMvcykgU2NvcmUgaW5jL2RlY1xuICAgICAgd2hlbiAxMTUsIDgzXG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnc2NvcmUnLCBkaXJcbiAgICAgICMgKEQvZCkgRGVmY29uIGluYy9kZWNcbiAgICAgIHdoZW4gMTAwLCA2OFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ2RlZmNvbicsIGRpclxuICAgICAgIyAoTS9tKSBVU0EgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTA5LCA3N1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3VzYSdcbiAgICAgICMgKE8vbykgVVNTUiBNaWxPcHMgaW5jL2RlY1xuICAgICAgd2hlbiAxMTEsIDc5XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnbWlsb3BzJywgZGlyLCAndXNzcidcbiAgICAgICMgKFAvcCkgVVNBIFNwYWNlIGluYy9kZWNcbiAgICAgIHdoZW4gMTEyLCA4MFxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNhJ1xuICAgICAgIyAoQS9hKSBVU1NSIFNwYWNlIGluYy9kZWNcbiAgICAgIHdoZW4gOTcsIDY1XG4gICAgICAgIEBoYW5kbGVWYWxDbGljayAnc3BhY2UnLCBkaXIsICd1c3NyJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuXG4gICMgRXNjIGRvZXNuJ3QgdHJpZ2dlciBvbiBrZXlwcmVzcywgc28gaXQgaGFzIHRvIGJlIGtleXVwXG4gIGtleXVwSGFuZGxlcjogKGV2KS0+XG4gICAgaWYgZXYua2V5Q29kZSA9PSAyN1xuICAgICAgQHByb3BzLnN0YXRlSGlzdG9yeS50b2dnbGVWaXNpYmxlKGZhbHNlKVxuICAgIGlmIGV2LmtleUNvZGUgPT0gMjcgb3IgKDM3IDw9IGV2LmtleUNvZGUgPD0gNDApXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2UgZXYua2V5Q29kZSwgZXZcbiAgICAjaWYgZXYua2V5Q29kZSA9PSAyN1xuICAgICAgI0BjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgI3JldHVyblxuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gZmFsc2VcblxuICBrZXlkb3duSGFuZGxlcjogKGV2KS0+XG4gICAgaWYgZXYua2V5Q29kZSA9PSA4IG9yIGV2LmtleUNvZGUgPT0gMTNcbiAgICAgIEBpcEtleVNlcXVlbmNlKGV2LmtleUNvZGUpXG4gICAgICAjIFByZXZlbnQgYmFja3NwYWNlIGZyb20gbmF2aWdhdGluZyB0aGUgcGFnZVxuICAgICAgIyBPcmlkaW5hcmlseSBJIGRvbid0IGxpa2UgdGFraW5nIG92ZXIgYnJvd3NlciBzaG9ydGN1dHMsIGJ1dCBpbiB0aGlzIGNhc2VcbiAgICAgICMgd2Ugd2FudCB0byBwcmV2ZW50IHVzZXJzIGZyb20gb3Zlci1iYWNrc3BhY2luZ1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgY2xlYXJJcENoYW5nZTogKHJlc2V0SVBzID0gdHJ1ZSktPlxuICAgICMgVW5kbyBhbnkgaXAgY2hhbmdlc1xuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGUuaXBTaG93Q291bnRyaWVzXG4gICAgaWYgaXBDaGFuZ2UubWFwKGZpbHRlclRydXRoeSkubGVuZ3RoID4gMCBhbmQgaXBTaG93Q291bnRyaWVzLmxlbmd0aCA9PSAxXG4gICAgICBjb3VudHJ5ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIHtzaG9ydGN1dDogaXBTaG93Q291bnRyaWVzWzBdfVxuICAgICAgcmV0dXJuIGlmIG5vdCBjb3VudHJ5P1xuICAgICAgQHNldFN0YXRlIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICBpZiByZXNldElQc1xuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCAndXNhJywgbnVsbCwgLWlwQ2hhbmdlWzBdXG4gICAgICAgIEBoYW5kbGVJUENsaWNrIGNvdW50cnkuaWQsICd1c3NyJywgbnVsbCwgLWlwQ2hhbmdlWzFdXG5cblxuICBjbGVhcklwS2V5U2VxdWVuY2U6IC0+XG4gICAgQHNldFN0YXRlXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q291bnRyaWVzOiBbXVxuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBJUENoYW5nZTogWzAsMF1cbiAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuXG4gIGlwS2V5U2VxdWVuY2U6IChjb2RlLCBldiktPlxuICAgICNpZiBjb2RlID09IDI3XG4gICAgICAjQGNsZWFySXBLZXlTZXF1ZW5jZSgpXG4gICAgICAjZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgI3JldHVybiBmYWxzZVxuICAgIGlwS1MgPSBAc3RhdGUuaXBLZXlTZXF1ZW5jZVxuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2VcbiAgICBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxuXG4gICAgIyBCYWNrc3BhY2UgKDgpIHNob3VsZCBkZWxldGUgdGhlIGxhc3QgY2hhciBmcm9tIHRoZSBpcEtTLCBhbmQgc2V0IHRoZSBcImN1cnJlbnRcIlxuICAgICMgY2hhciB0byB0aGUgbGFzdCBjaGFyXG4gICAgIyBFbnRlciAoMTMpIHNob3VsZCBcbiAgICBcbiAgICBpZiBjb2RlID09IDI3IG9yIGNvZGUgPT0gMTNcbiAgICAgICMgRG9uJ3QgZG8gYW55dGhpbmcgaWYgd2UgZG9uJ3QgaGF2ZSBhbiBpcEtTXG4gICAgICBpZiBub3QgaXBLU1xuICAgICAgICByZXR1cm5cbiAgICAgIGlwc0NoYW5nZWQgPSBpcEtTLmxlbmd0aCA9PSA0IGFuZCBpcENoYW5nZS5maWx0ZXIoZmlsdGVyVHJ1dGh5KS5sZW5ndGggPiAwXG4gICAgICBpZiBjb2RlID09IDI3IGFuZCBpcHNDaGFuZ2VkXG4gICAgICAgIEBjbGVhcklwQ2hhbmdlKClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgY29kZSA9PSAxM1xuICAgICAgICAgIEBjbGVhcklwQ2hhbmdlKGZhbHNlKVxuICAgICAgICBkZWx0YSA9IC0xXG4gICAgICAgICMgQmFjayB1cCB0d28gc3BhY2VzIHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gICAgICAgIGlmIGlwS1MubGVuZ3RoID09IDRcbiAgICAgICAgICBkZWx0YSA9IC0yXG4gICAgICAgIGlwS1MgPSBpcEtTLnNsaWNlKDAsZGVsdGEpXG4gICAgICAgIGNoYXIgPSBpcEtTLnNsaWNlKC0xKVxuICAgICAgICBpcEtTID0gaXBLUy5zbGljZSgwLC0xKVxuXG4gICAgY2hhckxvd2VyID0gY2hhci50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiBub3QgaXBLUyBhbmQgbm90IGNoYXJcbiAgICAgIEBjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgcmV0dXJuXG5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUgZmFsc2VcbiAgICBpZiBpcEtTLmxlbmd0aCA9PSAwIGFuZCBjaGFyTG93ZXIgPT0gJ2knXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgaXBLZXlTZXF1ZW5jZTogJ2knXG4gICAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgICBpcFNldENvdW50cnk6IG51bGxcbiAgICAgICAgaXBJUENoYW5nZTogWzAsMF1cbiAgICAgIHJldHVyblxuXG4gICAgIyBDb250aW5lbnQgc2VsZWN0aW9uXG4gICAgaWYgaXBLUy5sZW5ndGggPT0gMSBhbmQgY2hhckxvd2VyIGluIFsnYycsJ3MnLCdlJywnZicsJ2EnLCdtJ11cbiAgICAgIGlwS1MgKz0gY2hhckxvd2VyXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgaXBLZXlTZXF1ZW5jZTogaXBLU1xuICAgICAgICBpcFNob3dDb3VudHJpZXM6IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NoYXJMb3dlcl1cbiAgICAgICAgaXBTaG93Q29udGluZW50OiBjaGFyTG93ZXJcbiAgICAgICAgaXBTZXRDb3VudHJ5OiBudWxsXG4gICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICByZXR1cm5cbiAgICBcbiAgICBjb250aW5lbnQgPSBpcEtTLmNoYXJBdCAxXG5cbiAgICAjIENvdW50cnkgc2VsZWN0aW9uXG4gICAgIyBpcEtTIHNob3VsZCBiZSAnaVtjb250aW5lbnRdJyBvciAnaVtjb250aW5lbnRdW2NvdW50cnlDaGFyXSdcbiAgICBpZiAyIDw9IGlwS1MubGVuZ3RoIDw9IDNcbiAgICAgIGlwS1MgKz0gY2hhckxvd2VyXG4gICAgICBjb3VudHJ5Q29kZSA9IGlwS1Muc2xpY2UoMilcblxuICAgICAgY291bnRyaWVzID0gQHByb3BzLmNvdW50cnlTaG9ydGN1dHNbY29udGluZW50XS5maWx0ZXIgKHNjID0gJycpLT5cbiAgICAgICAgc2MuY2hhckF0KDApID09IGNvdW50cnlDb2RlLmNoYXJBdCgwKVxuXG4gICAgICBpZiBjb3VudHJ5Q29kZS5sZW5ndGggPT0gMlxuICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgICAgc2MuY2hhckF0KDEpID09IGNvdW50cnlDb2RlLmNoYXJBdCgxKVxuXG4gICAgICAjIE1ha2Ugc3VyZSB3ZSBoYXZlIGF0IGxlYXN0IG9uZSBjb3VudHJ5XG4gICAgICBpZiBjb3VudHJpZXMubGVuZ3RoICE9IDBcbiAgICAgICAgQHNldFN0YXRlXG4gICAgICAgICAgaXBLZXlTZXF1ZW5jZTogaXBLU1xuICAgICAgICAgIGlwU2hvd0NvdW50cmllczogY291bnRyaWVzXG4gICAgICAgICAgaXBTZXRDb3VudHJ5OiBudWxsXG4gICAgICAgICAgaXBJUENoYW5nZTogWzAsMF1cbiAgICBcbiAgICAjIFNlZSBpZiB3ZSBoYXZlIGEgY291bnRyeSBcInNlbGVjdGVkXCIgZm9yIGlwIHBsYWNlbWVudFxuICAgIGNvdW50cnlDb2RlID0gaXBLUy5zbGljZSgyLDQpXG4gICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDFcbiAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLm5vZGVzLFxuICAgICAgICBzaG9ydGN1dFVuaXF1ZTogY291bnRyeUNvZGVcbiAgICAgICAgY29udGluZW50OiBjb250aW5lbnRDb2RlRnJvbUxldHRlciBjb250aW5lbnRcbiAgICAgICMgSWYgd2UgaGF2ZSBhIGNvdW50cnksIGFkZCB0aGUgZnVsbCBjb3VudHJ5IGNvZGUgdG8gaXBLU1xuICAgICAgaWYgY291bnRyeT9cbiAgICAgICAgaXBLUyArPSBjb3VudHJ5LnNob3J0Y3V0LmNoYXJBdCAxXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICBpZiBjb3VudHJ5Q29kZS5sZW5ndGggPT0gMlxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMubm9kZXMsXG4gICAgICAgIHNob3J0Y3V0OiBjb3VudHJ5Q29kZVxuICAgICAgICBjb250aW5lbnQ6IGNvbnRpbmVudENvZGVGcm9tTGV0dGVyIGNvbnRpbmVudFxuXG5cbiAgICBpZiBjb3VudHJ5P1xuICAgICAgaXBDaGFuZ2UgPSBAc3RhdGUuaXBJUENoYW5nZSB8fCBbMCwwXVxuICAgICAgY291bnRyeUlQcyA9IEBzdGF0ZS5pcHNbcGFyc2VJbnQoY291bnRyeS5pZCwxMCldXG4gICAgICBpZiBub3QgY291bnRyeT9cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHN3aXRjaCBjaGFyXG4gICAgICAgIHdoZW4gJ2EnXG4gICAgICAgICAgc2lkZSA9ICd1c2EnXG4gICAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgICAgIGlwQ2hhbmdlWzBdKytcbiAgICAgICAgd2hlbiAnQSdcbiAgICAgICAgICBzaWRlID0gJ3VzYSdcbiAgICAgICAgICBkaXIgPSAnZG4nXG4gICAgICAgICAgaWYgY291bnRyeUlQc1swXSA+IDBcbiAgICAgICAgICAgIGlwQ2hhbmdlWzBdLS1cbiAgICAgICAgd2hlbiAncidcbiAgICAgICAgICBzaWRlID0gJ3Vzc3InXG4gICAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgICAgIGlwQ2hhbmdlWzFdKytcbiAgICAgICAgd2hlbiAnUidcbiAgICAgICAgICBzaWRlID0gJ3Vzc3InXG4gICAgICAgICAgZGlyID0gJ2RuJ1xuICAgICAgICAgIGlmIGNvdW50cnlJUHNbMV0gPiAwXG4gICAgICAgICAgICBpcENoYW5nZVsxXS0tXG5cblxuICAgICAgaWYgc2lkZT8gYW5kIGRpcj9cbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgc2lkZSwgZGlyXG5cbiAgICAgIEBzZXRTdGF0ZVxuXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBoYW5kbGVWYWxDbGljazogKGlkLCBkaXIsIHNpZGUpLT5cbiAgICBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBkZWx0YSA9IGlmIGRpciA9PSAnaW5jJyB0aGVuIDEgZWxzZSAtMVxuICAgIGlmIGlkIGluIFsnbWlsb3BzJywgJ3NwYWNlJ11cbiAgICAgIGluZGV4ID0gaWYgc2lkZSA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4gICAgICBvbGRWYWwgPSBzdGF0ZS5nYW1lW2lkXVtpbmRleF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdW2luZGV4XSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF1baW5kZXhdID0gbmV3VmFsXG4gICAgZWxzZVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1cbiAgICAgIG5ld1ZhbCA9IHJhbmdlZEdhbWVWYWwoaWQsIHN0YXRlLmdhbWVbaWRdICsgZGVsdGEpXG4gICAgICBzdGF0ZS5nYW1lW2lkXSA9IG5ld1ZhbFxuXG4gICAgbWV0YSA9XG4gICAgICB0eXBlOiAndmFsJ1xuICAgICAgc2lkZTogaWYgc2lkZT8gdGhlbiBzaWRlIGVsc2UgJydcbiAgICAgIGlkOiBpZFxuICAgICAgb2xkOiBvbGRWYWxcbiAgICAgIG5ldzogbmV3VmFsXG5cbiAgICBpZiBpZCA9PSAndHVybicgb3IgaWQgPT0gJ3JvdW5kJ1xuICAgICAgbWV0YS50eXBlID0gaWRcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsIG1ldGFcblxuXG4gIGhhbmRsZUlQQ2xpY2s6IChub2RlSWQsIHNpZGUsIGRpciwgZGVsdGEpLT5cbiAgICByZXR1cm4gaWYgZGVsdGE/IGFuZCBkZWx0YSA9PSAwXG5cbiAgICBub2RlID0gXy5maW5kIEBwcm9wcy5ub2Rlcywge2lkOiBub2RlSWR9XG4gICAgIyBEb24ndCBsZXQgdGhlIG5vbi1jb3VudHJ5IG5vZGVzIGdldCB1cGRhdGVkIFxuICAgIGlmIG5vZGUucG9pbnRzIG9yIG5vZGUuc3VwZXJwb3dlciB0aGVuIHJldHVyblxuXG4gICAgc3RhdGUgPSBAc3RhdGVcblxuICAgIGlmIGRlbHRhP1xuICAgICAgZGlyID0gaWYgZGVsdGEgPj0gMCB0aGVuICd1cCcgZWxzZSAnZG4nXG4gICAgZWxzZVxuICAgICAgZGVsdGEgPSBpZiBkaXIgPT0gJ3VwJyB0aGVuIDEgZWxzZSAtMVxuXG4gICAgaW5kZXggPSBzdXBlcnBvd2VyVG9JbmRleCBzaWRlXG4gICAgaXAgPSBzdGF0ZS5pcHNbbm9kZUlkXVtpbmRleF1cbiAgICBpcCArPSBkZWx0YVxuICAgIGlmIGlwIDwgMCB0aGVuIHJldHVyblxuXG4gICAgc2lnbiA9IGlmIGRpciA9PSAndXAnIHRoZW4gJysnIGVsc2UgJy0nXG4gICAgc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdID0gaXBcblxuICAgIEBzZXRTdGF0ZUhpc3Rvcnkgc3RhdGUsXG4gICAgICB0eXBlOiAnaXAnXG4gICAgICBzaWRlOiBzaWRlXG4gICAgICBjb3VudHJ5OiBub2RlXG4gICAgICBpcHM6IHN0YXRlLmlwc1tub2RlSWRdXG4gICAgICBkZWx0YTpkZWx0YVxuXG4gIGhhbmRsZUhpc3RvcnlDbGljazogKHR5cGUpLT5cbiAgICBAW1wiI3t0eXBlfUhpc3RcIl0oKVxuXG4gIHVuZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS51bmRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgcmVkb0hpc3Q6IC0+XG4gICAgc3RhdGUgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LnJlZG8oKVxuICAgIEBzZXRTdGF0ZSBzdGF0ZS5zdGF0ZVxuICB0b2dnbGVIaXN0OiAtPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZSgpXG5cblxuICByZW5kZXI6IC0+XG4gICAgbm9kZVByb3BzID0gQHByb3BzLm5vZGVcblxuICAgIHN1cGVycG93ZXJTdGF0cyA9IHN1cGVyU3RhdHMgQHN0YXRlLmlwcywgQHByb3BzLmNvdW50cmllcywgQHByb3BzLnJlZ2lvbkluZm9Ob2Rlc1xuXG4gICAgaXBLZXlTZXF1ZW5jZSA9IEBzdGF0ZT8uaXBLZXlTZXF1ZW5jZVxuICAgIGlwU2hvd0NvdW50cmllcyA9IEBzdGF0ZT8uaXBTaG93Q291bnRyaWVzIHx8IFtdXG4gICAgaXBTaG93Q29udGluZW50ID0gQHN0YXRlPy5pcFNob3dDb250aW5lbnRcblxuICAgIGxpbmtzID0gQHByb3BzLmxpbmtzLm1hcCAobGlua0RhdGEpPT5cbiAgICAgIHNvdXJjZSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCBpZDogbGlua0RhdGEuc291cmNlXG4gICAgICB0YXJnZXQgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnRhcmdldFxuICAgICAgbm9kZXMgPSB7c291cmNlLCB0YXJnZXR9XG5cbiAgICAgIGpVU0EgPSAobGluaywgdGFyZyk9PlxuICAgICAgICBqYXBhblVTQUJ1bXAgPSAxOFxuICAgICAgICBpZiBfLmNvbnRhaW5zKGxpbmsubm9kZXMsICdVU0EnKSBhbmQgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnSmFwYW4nKVxuICAgICAgICAgIHJldHVybiBub2Rlc1t0YXJnXS55IC0gamFwYW5VU0FCdW1wXG4gICAgICAgIG5vZGVzW3RhcmddLnlcblxuICAgICAgbGlua1Byb3BzID1cbiAgICAgICAga2V5OiBcIkJvYXJkTGluay0je2xpbmtEYXRhLnNvdXJjZX0tI3tsaW5rRGF0YS50YXJnZXR9XCJcbiAgICAgICAgeDE6IHNvdXJjZS54XG4gICAgICAgIHkxOiBqVVNBKGxpbmtEYXRhLCAnc291cmNlJylcbiAgICAgICAgeDI6IHRhcmdldC54XG4gICAgICAgIHkyOiBqVVNBKGxpbmtEYXRhLCAndGFyZ2V0JylcbiAgICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAgIFwibGlua1wiOiB0cnVlXG4gICAgICAgICAgXCJsaW5rLWNyb3NzXCI6IGxpbmtEYXRhLmNyb3NzQ29udGluZW50XG4gICAgICAgICAgXCJsaW5rLXVzYVwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNBJ1xuICAgICAgICAgIFwibGluay11c3NyXCI6IF8uY29udGFpbnMgbGlua0RhdGEubm9kZXMsICdVU1NSJ1xuXG4gICAgICBCb2FyZExpbmsgbGlua1Byb3BzXG5cbiAgICBub2RlcyA9IF8ubWFwIEBwcm9wcy5ub2RlcywgKGNvdW50cnlEYXRhKT0+XG4gICAgICAjIERldGVybWluZSBpZiBjb3VudHJ5IHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIGlwUGxhY2VtZW50IG1hc2tcbiAgICAgIG9uVG9wID0gbm90IGlwS2V5U2VxdWVuY2Ugb3JcbiAgICAgICAgY291bnRyeURhdGEuc2hvcnRjdXQgaW4gaXBTaG93Q291bnRyaWVzIGFuZFxuICAgICAgICBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvdW50cnlEYXRhLmNvbnRpbmVudCkgPT0gaXBTaG93Q29udGluZW50IGFuZFxuICAgICAgICBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0XG4gICAgICBpcFNlbGVjdGVkID0gb25Ub3AgYW5kIGlwU2hvd0NvdW50cmllcy5sZW5ndGggPT0gMVxuICAgICAgcHJvcHMgPVxuICAgICAgICBub2RlOiBub2RlUHJvcHNcbiAgICAgICAga2V5OiBcIkJvYXJkTm9kZS0je2NvdW50cnlEYXRhLmlkfVwiXG4gICAgICAgIHg6IGNvdW50cnlEYXRhLnhcbiAgICAgICAgeTogY291bnRyeURhdGEueVxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHRcbiAgICAgICAgZ3V0dGVyOiBAcHJvcHMubm9kZS5ndXR0ZXJcbiAgICAgICAgdGl0bGVIZWlnaHQ6IEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHRpdGxlRm9udFNpemU6IEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcbiAgICAgICAgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2tcbiAgICAgICAgIyBEZXRlcm1pbmUgaWYgdGhlIGNvdW50cnkgc2hvdWxkIGJlIG9uIHRvcCBvZiB0aGUgaXAgc2hvcnRjdXQgbGF5ZXJcbiAgICAgICAgb25Ub3A6IG9uVG9wXG4gICAgICAgIGlwU2VsZWN0ZWQ6IGlwU2VsZWN0ZWRcbiAgICAgICAgICBcblxuICAgICAgXy5hc3NpZ24gcHJvcHMsIGNvdW50cnlEYXRhXG5cbiAgICAgIGlmKHByb3BzLnN1cGVycG93ZXIpXG4gICAgICAgIHByb3BzLnN0YXRzID1cbiAgICAgICAgICBjb3VudHJpZXM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMuY291bnRyaWVzW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsnYnRsJywgJ25vbicsICd0b3RhbCddXG4gICAgICAgICAgcmVnaW9uczogXy5waWNrIHN1cGVycG93ZXJTdGF0cy5yZWdpb25zW3Byb3BzLm5hbWUudG9Mb3dlckNhc2UoKV0sIFsncHJlc2VuY2UnLCAnZG9taW5hdGlvbicsICdjb250cm9sJ11cblxuICAgICAgaWYocHJvcHMucG9pbnRzKVxuICAgICAgICBwcm9wcy5zdGF0cyA9IGdldFJlZ2lvblN0YXR1c1xuICAgICAgICAgIHVzYTogc3VwZXJwb3dlclN0YXRzLnJlZ2lvbnMudXNhW3Byb3BzLmlkXVxuICAgICAgICAgIHVzc3I6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzc3JbcHJvcHMuaWRdXG4gICAgICBcbiAgICAgIGNvdW50cnlJZCA9IHBhcnNlSW50IGNvdW50cnlEYXRhLmlkLCAxMFxuICAgICAgaWYgY291bnRyeUlkIG9mIEBzdGF0ZS5pcHNcbiAgICAgICAgcHJvcHMudXNhID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzBdXG4gICAgICAgIHByb3BzLnVzc3IgPSBAc3RhdGUuaXBzW2NvdW50cnlJZF1bMV1cblxuICAgICAgQm9hcmROb2RlRGl2IHByb3BzXG5cbiAgICBib2FyZFN0YXR1c0F0dHJzID1cbiAgICAgIHJlZjonQm9hcmRTdGF0dXMnXG4gICAgICBoYW5kbGVWYWxDbGljazogQGhhbmRsZVZhbENsaWNrXG4gICAgICBoYW5kbGVIaXN0b3J5Q2xpY2s6IEBoYW5kbGVIaXN0b3J5Q2xpY2tcblxuXG5cbiAgICBjb250aW5lbnRTaG9ydGN1dHMgPSBjb250aW5lbnRTaG9ydGN1dERhdGEubWFwIChvKT0+XG4gICAgICBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA9PSAxXG4gICAgICAgIHNob3cgPSAnaW4nXG4gICAgICBhdHRycyA9XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dENvbnRpbmVudCBCb2FyZC1zaG9ydGN1dCAje3Nob3d9XCJcbiAgICAgICAgc3R5bGU6XG4gICAgICAgICAgbGVmdDogby54XG4gICAgICAgICAgdG9wOiBvLnlcbiAgICAgIFIuZGl2IGF0dHJzLCBvLmNoYXJcblxuICAgIG5vZGVzQnlDb250aW5lbnQgPSBfLmdyb3VwQnkgQHByb3BzLmNvdW50cmllcywgJ2NvbnRpbmVudCdcblxuICAgIGNvdW50cnlTaG9ydGN1dHMgPSBfLm1hcCBub2Rlc0J5Q29udGluZW50LCAobm9kZXMsIGNvbnRpbmVudCk9PlxuICAgICAgY29udEtleSA9IG9uZUxldHRlckNvbnRpbmVudENvZGUgY29udGluZW50XG4gICAgICBub2RlQ29tcG9uZW50cyA9IF8ubWFwIG5vZGVzLCAobm9kZSk9PlxuICAgICAgICBpZiBub2RlLnN1cGVycG93ZXI/IG9yIG5vZGUucG9pbnRzP1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIHNob3cgPSAnJ1xuICAgICAgICBpcEtTTCA9IGlwS2V5U2VxdWVuY2UubGVuZ3RoXG4gICAgICAgIGlmIGlwS1NMIDwgNCBhbmQgXy5jb250YWlucyhAc3RhdGUuaXBTaG93Q291bnRyaWVzLCBub2RlLnNob3J0Y3V0KSBhbmQgQHN0YXRlLmlwU2hvd0NvbnRpbmVudCA9PSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlKGNvbnRpbmVudClcbiAgICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgICBhdHRycyA9XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0IEJvYXJkLXNob3J0Y3V0Q291bnRyeSAje3Nob3d9XCJcbiAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgIGxlZnQ6IG5vZGUueFxuICAgICAgICAgICAgdG9wOiBub2RlLnlcbiAgICAgICAgUi5kaXYgYXR0cnMsIHVwcGVyRmlyc3Qobm9kZS5zaG9ydGN1dFVuaXF1ZSlcblxuICAgICAgbm9kZUNvbXBvbmVudHNcblxuICAgIGNvbnRDb3VudHJ5ID0gY29udENvdW50cnlTZWxlY3Rpb24gQHByb3BzLnJlZ2lvbkluZm9Ob2RlcywgQHByb3BzLmNvdW50cmllcywgaXBLZXlTZXF1ZW5jZVxuICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICBpcENoYW5nZVVTQSA9IGlmIGlwS2V5U2VxdWVuY2UubGVuZ3RoID49IDQgdGhlbiBSLnNwYW4gY2xhc3NOYW1lOiAnQm9hcmQtaXBIZWFkZXItdXNhJywgc2lnbmVkTnVtT3JEYXNoKGlwQ2hhbmdlWzBdKSBlbHNlIG51bGxcbiAgICBpcENoYW5nZVVTU1IgPSBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0IHRoZW4gUi5zcGFuIGNsYXNzTmFtZTogJ0JvYXJkLWlwSGVhZGVyLXVzc3InLCBzaWduZWROdW1PckRhc2goaXBDaGFuZ2VbMV0pIGVsc2UgbnVsbFxuICAgIGlwQ291bnRyeSA9IGNvbnRDb3VudHJ5LmNvdW50cnkgfHwgaWYgY29udENvdW50cnkuY29udGluZW50IHRoZW4gJ1NlbGVjdCBhIGNvdW50cnknXG4gICAgaXBDb250Q291bnRyeSA9IFtcbiAgICAgIGlwQ2hhbmdlVVNBXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRDb3VudFwiLCBbXG4gICAgICAgIFIuaDMgY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvbnRpbmVudCAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgY29udENvdW50cnkuY29udGluZW50Py5zaG9ydG5hbWUgb3IgJ1NlbGVjdCBhIGNvbnRpbmVudCdcbiAgICAgICAgUi5oMyBjbGFzc05hbWU6IFwiQm9hcmQtaXBIZWFkZXItQ291bnRyeSAje2NvbnRDb3VudHJ5LmNvbnRpbmVudD8uY29udGluZW50fURhcmtcIiwgaXBDb3VudHJ5XG4gICAgICBdXG4gICAgICBpcENoYW5nZVVTU1JcbiAgICBdXG5cblxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0JvYXJkJywgW1xuICAgICAgUi5zdmcgd2lkdGg6QHByb3BzLndpZHRoLCBoZWlnaHQ6QHByb3BzLmhlaWdodCwgcmVmOiAnc3ZnJywgW1xuICAgICAgICBsaW5rc1xuICAgICAgXVxuICAgICAgbm9kZXNcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dEhlYWRlciAje2lmIGlwS2V5U2VxdWVuY2UgdGhlbiAnaW4nIGVsc2UgJyd9XCIsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29weScsIFtcbiAgICAgICAgICBSLmgzIHt9LCBcIlBsYWNpbmcgSW5mbHVlbmNlXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCBbXG4gICAgICAgICAgICBSLmEgb25DbGljazogQGNsZWFySXBLZXlTZXF1ZW5jZSwgW1xuICAgICAgICAgICAgICBcIkNhbmNlbCAoXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgXCJlc2NcIlxuICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5hIGNsYXNzTmFtZTogKGlmIGlwQ2hhbmdlWzBdID09IDAgYW5kIGlwQ2hhbmdlWzFdID09IDAgdGhlbiAnZGlzYWJsZWQnKSwgb25DbGljazogQGlwS2V5U2VxdWVuY2UuYmluZChudWxsLCAxMyksIFtcbiAgICAgICAgICAgICAgXCJDb25maXJtIChcIlxuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCBcImVudGVyXCJcbiAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOidjaGFycycsIGlwQ29udENvdW50cnlcbiAgICAgIF1cbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dE1hc2sgI3tpZiBpcEtleVNlcXVlbmNlIHRoZW4gJ2luJyBlbHNlICcnfVwiXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnRzICN7aWYgaXBLZXlTZXF1ZW5jZSBhbmQgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPD0gMSB0aGVuICdpbicgZWxzZSAnJ31cIixcbiAgICAgICAgY29udGluZW50U2hvcnRjdXRzXG4gICAgICBjb3VudHJ5U2hvcnRjdXRzXG4gICAgICBCb2FyZFN0YXR1cyBfLmFzc2lnbiBib2FyZFN0YXR1c0F0dHJzLCBAc3RhdGUuZ2FtZVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZExpbmsnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogLT5cbiAgICBmYWxzZVxuICByZW5kZXI6IC0+XG4gICAgUi5saW5lIEBwcm9wc1xuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUCA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVAnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5leHRQcm9wcyktPlxuICAgICMgQXNzdW1lIGNvdW50cnlcbiAgICBzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMgQ29udGluZW50IGxhYmVsc1xuICAgIGlmIEBwcm9wcy5wb2ludHM/XG4gICAgICBzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICBuZXh0UHJvcHMuc3RhdHMudXNzciAhPSBAcHJvcHMuc3RhdHMudXNzclxuICAgICMgU3VwZXJwb3dlciBsYWJlbHNcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgblBTID0gbmV4dFByb3BzLnN0YXRzXG4gICAgICB0UFMgPSBAcHJvcHMuc3RhdHNcbiAgICAgIHNob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgblBTLnJlZ2lvbnMucHJlc2VuY2UgIT0gdFBTLnJlZ2lvbnMucHJlc2VuY2Ugb3JcbiAgICAgICAgblBTLnJlZ2lvbnMuZG9taW5hdGlvbiAhPSB0UFMucmVnaW9ucy5kb21pbmF0aW9uIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuXG4gICAgc2hvdWxkSXRcblxuICBoYW5kbGVJUENsaWNrOiAoc2lkZSwgZGlyKS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLmlkLCBzaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgI2NvbnNvbGUubG9nIEBwcm9wcy5zaG9ydGN1dCwgQHByb3BzLmNvbnRpbmVudFxuICAgIGNvbnRyb2xVU0EgPSAoQHByb3BzLnVzYSAtIEBwcm9wcy51c3NyKSA+PSBAcHJvcHMuc3RhYlxuICAgIGNvbnRyb2xVU1NSID0gKEBwcm9wcy51c3NyIC0gQHByb3BzLnVzYSkgPj0gQHByb3BzLnN0YWJcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IEBwcm9wcy50cmFuc2Zvcm1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlJzogdHJ1ZVxuICAgICAgICAnbm9kZS1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGUtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGUtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlLXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlLXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgc3RhYlRleHQgPSBbXG4gICAgICAgIFIudHNwYW4ge30sIFwiQmF0dGxlOiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonbnVtQnRsJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgIF1cbiAgICAgIHN0YWJUZXh0QXR0cnMueCA9IDBcbiAgICAgIHN0YWJUZXh0QXR0cnMueSArPSAxXG5cblxuXG4gICAgcmVnaW9uVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogaWYgQHByb3BzLnBvaW50cyBvciBAcHJvcHMuc3VwZXJwb3dlciB0aGVuICdub2RlLXRleHQnIGVsc2UgJ2hpZGUnXG4gICAgICB4OiAwXG4gICAgICB5OiAxMFxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoXG5cblxuICAgIHJlZ2lvblRleHQgPSAnJ1xuICAgIGlmIEBwcm9wcy5wb2ludHNcbiAgICAgIHJlZ2lvbkN4ID0gKGtleSk9PlxuICAgICAgICBvYmogPVxuICAgICAgICAgIHVzYTogQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgICB1c3NyOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXlcbiAgICAgICAgICBib3RoOiBAcHJvcHMuc3RhdHMudXNzciA9PSBrZXkgYW5kIEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgIG9ialtrZXldID0gdHJ1ZVxuICAgICAgICBjeCBvYmpcbiAgICAgICAgXG4gICAgICBjQ04gPSByZWdpb25DeCAnY29udHJvbCdcbiAgICAgIGRDTiA9IHJlZ2lvbkN4ICdkb21pbmF0aW9uJ1xuICAgICAgcENOID0gcmVnaW9uQ3ggJ3ByZXNlbmNlJ1xuXG4gICAgICByZWdpb25UZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6ZENOLCBAcHJvcHMucG9pbnRzWzFdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlLWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlLWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGUtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgICMgTm9kZSBiZ1xuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMuaGVpZ2h0XG4gICAgICAgIHRpdGxlOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIHBvbHlcblxuICAgICAgUi5yZWN0XG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtdGl0bGUtYmcnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMudGl0bGVIZWlnaHRcbiAgICAgICAgeDogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHk6IC1AcHJvcHMuaGVpZ2h0LzJcblxuICAgICAgUi5saW5lXG4gICAgICAgIGNsYXNzTmFtZTogJ25vZGUtbGluZSdcbiAgICAgICAgd2lkdGg6IEBwcm9wcy53aWR0aFxuICAgICAgICB4MTogLUBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkxOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgICAgeDI6IEBwcm9wcy53aWR0aC8yXG4gICAgICAgIHkyOiAtQHByb3BzLmhlaWdodC8yICsgQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcblxuICAgICAgUi50ZXh0IHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICBSLnRleHQgc3RhYlRleHRBdHRycywgc3RhYlRleHRcbiAgICAgIFIudGV4dCByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgICAgI1IudGV4dCBzaG9ydEN1dEF0dHJzLCBAcHJvcHMuc2hvcnRjdXRcblxuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c2EnLCBpcDogQHByb3BzLnVzYSwgY3RybDogY29udHJvbFVTQSwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNhJ1xuICAgICAgQm9hcmROb2RlSVAgbm9kZTogQHByb3BzLm5vZGUsIHNpZGU6ICd1c3NyJywgaXA6IEBwcm9wcy51c3NyLCBjdHJsOiBjb250cm9sVVNTUiwgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2ssIHJlZjogJ2lwdXNzcidcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZE5vZGVJUERpdiA9IHJlcXVpcmUgJy4vQm9hcmROb2RlSVBEaXYnXG4gXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlRGl2J1xuXG4gICNzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIyBBc3N1bWUgY291bnRyeVxuICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy51c2EgIT0gQHByb3BzLnVzYSBvciBuZXh0UHJvcHMudXNzciAhPSBAcHJvcHMudXNzclxuICAgICMjIENvbnRpbmVudCBsYWJlbHNcbiAgICAjaWYgQHByb3BzLnBvaW50cz9cbiAgICAgICNzaG91bGRJdCA9IG5leHRQcm9wcy5zdGF0cy51c2EgIT0gQHByb3BzLnN0YXRzLnVzYSBvclxuICAgICAgICAjbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIyBTdXBlcnBvd2VyIGxhYmVsc1xuICAgICNpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgI25QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgI3RQUyA9IEBwcm9wcy5zdGF0c1xuICAgICAgI3Nob3VsZEl0ID0gblBTLmNvdW50cmllcy5idGwgIT0gdFBTLmNvdW50cmllcy5idGwgb3JcbiAgICAgICAgI25QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5kb21pbmF0aW9uICE9IHRQUy5yZWdpb25zLmRvbWluYXRpb24gb3JcbiAgICAgICAgI25QUy5yZWdpb25zLmNvbnRyb2wgIT0gdFBTLnJlZ2lvbnMuY29udHJvbFxuI1xuICAgICNzaG91bGRJdFxuXG4gIGhhbmRsZUlQQ2xpY2s6IChzaWRlLCBkaXIpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuaWQsIHNpZGUsIGRpclxuXG4gIHJlbmRlcjogLT5cbiAgICBjb250cm9sVVNBID0gKEBwcm9wcy51c2EgLSBAcHJvcHMudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAcHJvcHMudXNzciAtIEBwcm9wcy51c2EpID49IEBwcm9wcy5zdGFiXG5cblxuICAgIGdBdHRycyA9XG4gICAgICBzdHlsZTpcbiAgICAgICAgbGVmdDogQHByb3BzLnggLSBAcHJvcHMud2lkdGgvMiArICdweCdcbiAgICAgICAgdG9wOiBAcHJvcHMueSAtIEBwcm9wcy5oZWlnaHQvMiArICdweCdcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LSN7QHByb3BzLmdyb3VwfSBcIiArIGN4XG4gICAgICAgICdub2RlZGl2JzogdHJ1ZVxuICAgICAgICAnbm9kZWRpdi1idGwnOiBAcHJvcHMuYnRsID09IDFcbiAgICAgICAgJ25vZGVkaXYtbm9uYnRsJzogQHByb3BzLmJ0bCAhPSAxXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtdXNhLWNvbnRyb2wnOiBjb250cm9sVVNBXG4gICAgICAgICdub2RlZGl2LXVzc3ItY29udHJvbCc6IGNvbnRyb2xVU1NSXG4gICAgICAgICdub2RlZGl2LXJlZ2lvbi1pbmZvJzogQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgJ25vZGVkaXYtb24tdG9wJzogQHByb3BzLm9uVG9wIGFuZCBub3QgKEBwcm9wcy5yZWdpb25JbmZvIG9yIEBwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICAnbm9kZWRpdi1zZWxlY3RlZCc6IEBwcm9wcy5pcFNlbGVjdGVkXG5cblxuICAgIHRpdGxlVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXRpdGxlLXRleHRcIlxuICAgICAgeDogaWYgQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtQHByb3BzLm5vZGUud2lkdGgvMiArIDJcbiAgICAgIHk6IGlmIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICAgICAtNlxuICAgICAgICAgIGVsc2UgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDZcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcblxuXG4gICAgc3RhYlRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1zdGFiXCJcbiAgICAgIHg6IChAcHJvcHMubm9kZS53aWR0aC8yKSAtIDEwXG4gICAgICB5OiAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemUgKyAxXG5cblxuXG5cbiAgICByZWdpb25UZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBpZiBAcHJvcHMucG9pbnRzIG9yIEBwcm9wcy5zdXBlcnBvd2VyIHRoZW4gJ25vZGVkaXYtdGV4dCcgZWxzZSAnaGlkZSdcbiAgICAgIHg6IDBcbiAgICAgIHk6IDEwXG4gICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcblxuXG4gICAgcmVnaW9uVGV4dCA9ICcnXG4gICAgaWYgQHByb3BzLnBvaW50c1xuICAgICAgcmVnaW9uQ3ggPSAoa2V5KT0+XG4gICAgICAgIG9iaiA9XG4gICAgICAgICAgdXNhOiBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICAgIHVzc3I6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleVxuICAgICAgICAgIGJvdGg6IEBwcm9wcy5zdGF0cy51c3NyID09IGtleSBhbmQgQHByb3BzLnN0YXRzLnVzYSA9PSBrZXlcbiAgICAgICAgb2JqW2tleV0gPSB0cnVlXG4gICAgICAgIGN4IG9ialxuICAgICAgICBcbiAgICAgIGNDTiA9IHJlZ2lvbkN4ICdjb250cm9sJ1xuICAgICAgZENOID0gcmVnaW9uQ3ggJ2RvbWluYXRpb24nXG4gICAgICBwQ04gPSByZWdpb25DeCAncHJlc2VuY2UnXG5cbiAgICAgIHJlZ2lvblRleHQgPSBbXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2JsYW5rJywgXCIgXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpkQ04sIEBwcm9wcy5wb2ludHNbMV1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmNDTiwgQHByb3BzLnBvaW50c1syXVxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHBzciA9IEBwcm9wcy5zdGF0cy5yZWdpb25zXG4gICAgICByZWdpb25UZXh0ID0gW3Bzci5wcmVzZW5jZSwgcHNyLmRvbWluYXRpb24sIHBzci5jb250cm9sXS5qb2luICcgJ1xuICAgICAgcmVnaW9uVGV4dEF0dHJzLnkgPSAyMFxuXG4gICAgIyBCYWNrZ3JvdW5kIGZvciBFK1cgRXVyb3BlIGFuZCBTRSBBc2lhXG4gICAgcG9seUNsYXNzTmFtZSA9IHN3aXRjaCBAcHJvcHMuZ3JvdXBcbiAgICAgIHdoZW4gJ2V1JyB0aGVuICdub2RlZGl2LWJnLWV1J1xuICAgICAgd2hlbiAnc2VhJyB0aGVuICdub2RlZGl2LWJnLXNlYSdcbiAgICAgIGVsc2UgbnVsbFxuXG4gICAgaWYgcG9seUNsYXNzTmFtZT8gYW5kIG5vdCBAcHJvcHMucG9pbnRzP1xuICAgICAgcG9seSA9IFIucG9seWdvblxuICAgICAgICBjbGFzc05hbWU6IHBvbHlDbGFzc05hbWVcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICBcIiN7LUBwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwje0Bwcm9wcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgXCIje0Bwcm9wcy53aWR0aC8yfSwjey1AcHJvcHMuaGVpZ2h0LzIgKyBAcHJvcHMudGl0bGVIZWlnaHR9XCJcbiAgICAgICAgICBdLmpvaW4gJyAnXG5cbiAgICBzaG9ydEN1dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogJ25vZGVkaXYtc2hvcnRjdXQnXG4gICAgICBcblxuICAgIHN0YWJUZXh0ID0gQHByb3BzLnN0YWJcblxuICAgIGlzQ291bnRyeSA9IEBwcm9wcy5zdXBlcnBvd2VyIG9yIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgaWYgbm90IGlzQ291bnRyeVxuICAgICAgaXBVU0EgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3VzYScsIGlwOiBAcHJvcHMudXNhLCBjdHJsOiBjb250cm9sVVNBLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c2EnXG4gICAgICBpcFVTU1IgPSBCb2FyZE5vZGVJUERpdiBub2RlOiBAcHJvcHMubm9kZSwgc2lkZTogJ3Vzc3InLCBpcDogQHByb3BzLnVzc3IsIGN0cmw6IGNvbnRyb2xVU1NSLCBoYW5kbGVJUENsaWNrOiBAaGFuZGxlSVBDbGljaywgcmVmOiAnaXB1c3NyJ1xuICAgICAgc3RhYiA9IFIuc3BhbiBzdGFiVGV4dEF0dHJzLCBzdGFiVGV4dFxuICAgIGVsc2VcbiAgICAgIHJlZ2lvbkluZm8gPSBSLnNwYW4gcmVnaW9uVGV4dEF0dHJzLCByZWdpb25UZXh0XG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgYnRsID1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ25vZGVkaXYtYnRsLW51bScsIFtcbiAgICAgICAgICBcIkJhdHRsZTogXCJcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc3Ryb25nJywgQHByb3BzLnN0YXRzLmNvdW50cmllcy5idGxcbiAgICAgICAgXVxuXG4gICAgUi5kaXYgZ0F0dHJzLCBbXG4gICAgICBidGxcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ25vZGVkaXYtdGl0bGUnLCBbXG4gICAgICAgIFIuc3BhbiB0aXRsZVRleHRBdHRycywgQHByb3BzLnNob3J0bmFtZVxuICAgICAgICBzdGFiXG4gICAgICBdXG4gICAgICByZWdpb25JbmZvXG4gICAgICAjUi50ZXh0IHNob3J0Q3V0QXR0cnMsIEBwcm9wcy5zaG9ydGN1dFxuICAgICAgaXBVU0FcbiAgICAgIGlwVVNTUlxuICAgICAgICBcbiAgICBdXG5cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmROb2RlSVAnXG5cbiAgaGFuZGxlSVBDbGljazogKGRpciwgZXYpLT5cbiAgICBAcHJvcHMuaGFuZGxlSVBDbGljayBAcHJvcHMuc2lkZSwgZGlyXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC5pcCAhPSBAcHJvcHMuaXBcblxuICByZW5kZXI6IC0+XG4gICAgcG9zaXRpb24gPSBpZiBAcHJvcHMuc2lkZSA9PSAndXNhJyB0aGVuIDEgZWxzZSAwXG5cbiAgICBoaWRlSVAgPSBpZiBAcHJvcHMuaXAgPT0gMCB0aGVuICdoaWRlJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgjey1AcHJvcHMubm9kZS53aWR0aC8yICogcG9zaXRpb259LCAjey1AcHJvcHMubm9kZS50aXRsZUhlaWdodC8yIC0gMX0pXCJcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aC8yXG4gICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC0je0Bwcm9wcy5zaWRlfVwiXG5cbiAgICB0ZXh0QXR0cnMgPVxuICAgICAgeDogQHByb3BzLm5vZGUud2lkdGgvNFxuICAgICAgeTogQHByb3BzLm5vZGUuaGVpZ2h0LzIgLSAxXG4gICAgICBjbGFzc05hbWU6IGhpZGVJUFxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1iZy0je0Bwcm9wcy5zaWRlfSAje2hpZGVJUH1cIlxuICAgICAgUi50ZXh0IHRleHRBdHRycywgQHByb3BzLmlwXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWNsaWNrXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAndXAnXG4gICAgICBSLnJlY3RcbiAgICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgICAgaGVpZ2h0OiBpcENsaWNrSGVpZ2h0XG4gICAgICAgIHk6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUERpdidcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLmlwICE9IEBwcm9wcy5pcFxuXG4gIHJlbmRlcjogLT5cbiAgICBwb3NpdGlvbiA9IGlmIEBwcm9wcy5zaWRlID09ICd1c2EnIHRoZW4gMSBlbHNlIDBcblxuICAgIGlwWmVybyA9IGlmIEBwcm9wcy5pcCA9PSAwIHRoZW4gJ2lwWmVybycgZWxzZSAnJ1xuXG4gICAgZ0F0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLSN7QHByb3BzLnNpZGV9IG5vZGVkaXYtaXAgI3tpcFplcm99XCJcblxuICAgIHRleHRBdHRycyA9XG4gICAgICB4OiBAcHJvcHMubm9kZS53aWR0aC80XG4gICAgICB5OiBAcHJvcHMubm9kZS5oZWlnaHQvMiAtIDFcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLXRleHRcIlxuXG4gICAgaXBDbGlja0hlaWdodCA9IChAcHJvcHMubm9kZS5oZWlnaHQgLSBAcHJvcHMubm9kZS50aXRsZUhlaWdodCkgLyAyXG5cbiAgICBpcCA9IGlmIEBwcm9wcy5pcCA+IDAgdGhlbiBAcHJvcHMuaXAgZWxzZSAnJ1xuXG4gICAgUi5kaXYgZ0F0dHJzLCBbXG4gICAgICBSLnNwYW4gdGV4dEF0dHJzLCBpcFxuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stdXBcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICd1cCdcbiAgICAgIFIuZGl2XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LWlwLWNsaWNrLWRuXCJcbiAgICAgICAgb25DbGljazogQGhhbmRsZUlQQ2xpY2suYmluZCB0aGlzLCAnZG4nXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5cbkJvYXJkU3RhdGVIaXN0b3J5RW50cnkgPSByZXF1aXJlICcuL0JvYXJkU3RhdGVIaXN0b3J5RW50cnknXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICByOiAwXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5vbiAndXBkYXRlJywgPT5cbiAgICAgIEBmb3JjZVVwZGF0ZSgpXG5cbiAgICAjZm4gPSAoKT0+XG4gICAgICAjQHNldFN0YXRlIHI6IE1hdGgucmFuZG9tKClcbiAgICAgICNzZXRUaW1lb3V0IGZuLCAyMDAwXG4gICAgI2ZuKClcbiAgIFxuICBoYW5kbGVTSENsaWNrOiAoaWQpLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaWRcblxuICBoYW5kbGVDbG9zZUhpc3Rvcnk6IC0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5oaWRlKClcblxuICByZW5kZXI6IC0+XG4gICAgc3RhdGVDb21wb25lbnRzID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRBbGwoKS5tYXAgKHNoLCBpbmRleCk9PlxuICAgICAgc2hNID0gc2gubWV0YVxuICAgICAgIyBJUCBwbGFjZW1lbnQgaW4gY291bnRyeVxuICAgICAgaWYgc2hNLmNvdW50cnk/XG4gICAgICAgIGtleSA9IFwiY291bnRyeS0je3NoTS5jb3VudHJ5LmlkfVwiXG4gICAgICBlbHNlXG4gICAgICAgIGtleSA9IFwiI3tzaE0uaWR9LSN7c2hNLnNpZGV9XCJcblxuICAgICAgQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeVxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlU0hDbGljay5iaW5kIHRoaXMsIGluZGV4XG4gICAgICAgIGtleTogXCJCU0hFLSN7aW5kZXh9LSN7a2V5fVwiXG4gICAgICAgIGlzTGF0ZXN0OiBAcHJvcHMuc3RhdGVIaXN0b3J5LmxhdGVzdCA9PSBpbmRleFxuICAgICAgICBpc0N1cnJlbnQ6IEBwcm9wcy5zdGF0ZUhpc3RvcnkuY3VycmVudCA9PSBpbmRleFxuICAgICAgICBzaDogc2hcblxuICAgIGRpdkF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ1N0YXRlSGlzdG9yeSc6IHRydWVcbiAgICAgICAgJ2luJzogQHByb3BzLnN0YXRlSGlzdG9yeS5zaG93XG5cbiAgICBSLmRpdiBkaXZBdHRycywgW1xuICAgICAgUi5hIGNsYXNzTmFtZTogJ2Nsb3NlIHB1bGwtcmlnaHQnLCBvbkNsaWNrOiBAaGFuZGxlQ2xvc2VIaXN0b3J5LCBbXG4gICAgICAgICdDbG9zZSAnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoaCknXG4gICAgICBdXG4gICAgICBSLmgzIHt9LCBcIkFjdGlvbiBIaXN0b3J5XCJcbiAgICAgIFIudWwgY2xhc3NOYW1lOiAnbGlzdC11bnN0eWxlZCcsIHN0YXRlQ29tcG9uZW50cy5yZXZlcnNlKClcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5nYW1lVmFsRGlzcGxheSA9IHJlcXVpcmUgJy4uL2xpYnMvZ2FtZVZhbERpc3BsYXknXG51cHBlckZpcnN0ID0gcmVxdWlyZSAnLi4vbGlicy91cHBlckZpcnN0J1xuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcbmludFRvU3RyV2l0aFNpZ24gPSByZXF1aXJlICcuLi9saWJzL2ludFRvU3RyV2l0aFNpZ24nXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4uL2xpYnMvc3VwZXJwb3dlclRvSW5kZXgnXG5cbnNjb3JlU2lkZSA9IChzY29yZSktPlxuICBpZiBzY29yZSA8IDBcbiAgICByZXR1cm4gJ3Vzc3InXG4gIGlmIHNjb3JlID4gMFxuICAgIHJldHVybiAndXNhJ1xuICAnJ1xuXG5cbnNoRW50cnkgPSAoc2gpLT5cbiAgcm91bmRTaWRlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAlIDIgPT0gMCB0aGVuICd1c2EnIGVsc2UgJ3Vzc3InXG4gIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgIHJvdW5kU2lkZSA9ICcnXG5cbiAgaWYgc2guc3RhdGUuZ2FtZS50dXJuID4gMTBcbiAgICB0dXJuID0gXCJFTkRcIlxuICAgIHJvdW5kID0gJydcbiAgZWxzZSBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAwXG4gICAgdHVybiA9IFwiVCN7Z2FtZVZhbERpc3BsYXkoJ3R1cm4nLCBzaC5zdGF0ZS5nYW1lLnR1cm4pfS1cIlxuICAgIGlmIHNoLnN0YXRlLmdhbWUucm91bmQgIT0gMFxuICAgICAgcm91bmQgPSBcIkFSI3tnYW1lVmFsRGlzcGxheSgncm91bmQnLCBzaC5zdGF0ZS5nYW1lLnJvdW5kKX1cIlxuICAgIGVsc2VcbiAgICAgIHJvdW5kID0gXCJIRUFEXCJcbiAgZWxzZVxuICAgIHR1cm4gPSBcIlNFVFVQXCJcbiAgICByb3VuZCA9ICcnXG5cbiAgdHVyblJvdW5kID1cbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAndHVyblJvdW5kJywgW1xuICAgICAgdHVyblxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogcm91bmRTaWRlLCByb3VuZFxuICAgIF1cblxuICBzaFNpZGUgPSBzaC5tZXRhLnNpZGVcblxuICBzd2l0Y2ggc2gubWV0YS50eXBlXG4gICAgIyBMb2FkIHN0YXRlIGZyb20gdXJsXG4gICAgd2hlbiAnbG9hZCdcbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsICdMb2FkZWQgc3RhdGUgZnJvbSBVUkwnXG4gICAgICBdXG4gICAgd2hlbiAnaXAnXG4gICAgICBbaXBVU0EsIGlwVVNTUl0gPSBzaC5tZXRhLmlwc1xuICAgICAgY291bnRyeSA9IHNoLm1ldGEuY291bnRyeVxuICAgICAgY3RybFVTQSA9IGlmIChpcFVTQSAtIGlwVVNTUikgPj0gY291bnRyeS5zdGFiIHRoZW4gJ2NvbnRyb2wnIGVsc2UgJydcbiAgICAgIGN0cmxVU1NSID0gaWYgKGlwVVNTUiAtIGlwVVNBKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuXG4gICAgICBpZiBzaC5tZXRhLnNpZGUgPT0gJ2JvdGgnXG4gICAgICAgIGlwcyA9IFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSBpcFwiLCBpbnRUb1N0cldpdGhTaWduIHNoLm1ldGEuZGVsdGFbMF1cbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcImRpdmlkZXJcIiwgJy8nXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVsxXVxuICAgICAgICBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwcyA9IFIuc3BhbiBjbGFzc05hbWU6IFwiI3tzaC5tZXRhLnNpZGV9IGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVtzdXBlcnBvd2VyVG9JbmRleCBzaC5tZXRhLnNpZGVdXG5cbiAgICAgIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGlwc1xuICAgICAgICBcIiBpbiAje3NoLm1ldGEuY291bnRyeS5zaG9ydG5hbWV9IChcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzYSAje2N0cmxVU0F9XCIsIHNoLm1ldGEuaXBzWzBdXG4gICAgICAgIFwiL1wiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNzciAje2N0cmxVU1NSfVwiLCBzaC5tZXRhLmlwc1sxXVxuICAgICAgICBcIilcIlxuICAgICAgXVxuICAgIHdoZW4gJ3ZhbCdcbiAgICAgIG9sZFNpZGUgPSBuZXdTaWRlID0gc2gubWV0YS5zaWRlXG5cbiAgICAgIGlmIHNoLm1ldGEuaWQgPT0gJ3Njb3JlJ1xuICAgICAgICBvbGRTaWRlID0gc2NvcmVTaWRlIHNoLm1ldGEub2xkXG4gICAgICAgIG5ld1NpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5uZXdcblxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBcIiN7dXBwZXJGaXJzdChzaC5tZXRhLmlkKX0gXCJcbiAgICAgICAgUi5zdHJvbmcgY2xhc3NOYW1lOiBvbGRTaWRlLCBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5vbGQsICdsb25nJyl9IFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdhcnJvdycsICfinpQgJ1xuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG5ld1NpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgXVxuICAgIHdoZW4gJ3JvdW5kJ1xuICAgICAgc2lkZSA9IHJvdW5kU2lkZVxuICAgICAgcm91bmRUaXRsZSA9IGlmIHNoLnN0YXRlLmdhbWUucm91bmQgPT0gMFxuICAgICAgICAgIFwiSGVhZGxpbmUgUGhhc2VcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgXCIje3NpZGUudG9VcHBlckNhc2UoKX0gQWN0aW9uIFJvdW5kICN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgICAgICBcbiAgICAgICNzaWRlID0gWyd1c3NyJywgJ3VzYSddWyhzaC5zdGF0ZS5nYW1lLnJvdW5kICsgMSkgJSAyXVxuICAgICAgUi5zcGFuIHt9LCBbXG4gICAgICAgIHR1cm5Sb3VuZFxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBzaWRlLCByb3VuZFRpdGxlXG4gICAgICBdXG4gICAgd2hlbiAndHVybidcbiAgICAgIGRpc3AgPSBcIiN7Z2FtZVZhbERpc3BsYXkoc2gubWV0YS5pZCwgc2gubWV0YS5uZXcsICdsb25nJyl9XCJcbiAgICAgIGlmIHNoLnN0YXRlLmdhbWUudHVybiAhPSAwIGFuZCBzaC5zdGF0ZS5nYW1lLnR1cm4gPD0gMTBcbiAgICAgICAgZGlzcCA9IFwiVHVybiAje2Rpc3B9XCJcbiAgICAgIFIuc3BhbiBjbGFzc05hbWU6J3N0cm9uZycsIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIGRpc3BcbiAgICAgIF1cbiAgICBlbHNlXG4gICAgICBzaC5tZXRhLm1zZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIHNob3VsZEl0ID0gZmFsc2VcbiAgICB0UCA9IEBwcm9wc1xuICAgIHRTaE0gPSBAcHJvcHMuc2gubWV0YVxuICAgIG5TaE0gPSBuUC5zaC5tZXRhXG4gICAgIyBJUCBwbGFjZW1lbnRcbiAgICBpZiB0U2hNPy5pcHM/XG4gICAgICBzaG91bGRJdCA9IHRTaE0uaXBzWzBdICE9IG5TaE0uaXBzWzBdIG9yXG4gICAgICAgIHRTaE0uaXBzWzFdICE9IG5TaE0uaXBzWzFdXG4gICAgaWYgdFNoTS50eXBlID09ICd2YWwnXG4gICAgICBzaG91bGRJdCA9IHRTaE0ubmV3ICE9IG5TaE0ubmV3XG4gICAgIyBJZiBjdXJyZW50L2xhdGVzdCBjaGFuZ2VkXG4gICAgaWYgdFAuaXNMYXRlc3QgIT0gblAuaXNMYXRlc3Qgb3IgdFAuaXNDdXJyZW50ICE9IG5QLmlzQ3VycmVudFxuICAgICAgc2hvdWxkSXQgPSB0cnVlXG5cbiAgICBzaG91bGRJdFxuXG4gIHJlbmRlcjotPlxuICAgIGF0dHJzID1cbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5vbkNsaWNrXG4gICAgICBjbGFzc05hbWU6IGN4XG4gICAgICAgICdjbGVhcmZpeCc6IHRydWVcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1sYXRlc3QnOiBAcHJvcHMuaXNMYXRlc3RcbiAgICAgICAgJ1N0YXRlSGlzdG9yeS1jdXJyZW50JzogQHByb3BzLmlzQ3VycmVudFxuICAgIFIubGkgYXR0cnMsIHNoRW50cnkoQHByb3BzLnNoKVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmRTdGF0dXNWYWx1ZSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXNWYWx1ZSdcbkRpZSA9IHJlcXVpcmUgJy4vRGllJ1xuXG50YWJsZSA9XG4gICdTY29yZSc6ICdTJ1xuICAnRGVmY29uJzogJ0QnXG4gICdNaWxPcHMtdXNhJzogJ00nXG4gICdNaWxPcHMtdXNzcic6ICdPJ1xuICAnVHVybic6ICdUJ1xuICAnUm91bmQnOiAnUidcbiAgJ1NwYWNlLXVzYSc6ICdwJ1xuICAnU3BhY2UtdXNzcic6ICdhJ1xuICAnQWN0aW9uIEhpc3RvcnknOiAnSCdcbiAgJ1JvbGwgZGljZSc6ICdjJ1xuXG5oaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgPSAodGl0bGUsc2lkZT0nJyktPlxuICB0aXRsZVNpZGUgPSB0aXRsZVxuICBpZiBzaWRlICE9ICcnIGFuZCB0aXRsZSAhPSAnUm91bmQnIGFuZCB0aXRsZSAhPSAnU2NvcmUnXG4gICAgdGl0bGVTaWRlID0gXCIje3RpdGxlfS0je3NpZGV9XCJcblxuICBbaGVhZCwgdGFpbF0gPSB0aXRsZS5zcGxpdCB0YWJsZVt0aXRsZVNpZGVdXG4gIG1pZCA9IHRhYmxlW3RpdGxlU2lkZV1cbiAgW1xuICAgIGhlYWRcbiAgICBSLnNwYW4gY2xhc3NOYW1lOiAnU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCBtaWRcbiAgICB0YWlsXG4gIF1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzJ1xuXG4gIHJvbGxEaWNlOiAtPlxuICAgIF8uZWFjaCBAcmVmcywgKHJlZiktPiByZWYucm9sbERpZSgpXG5cbiAgaGFuZGxlQm90aENsaWNrOiAtPlxuICAgIEByb2xsRGljZSgpXG5cbiAgcmVuZGVyOiAtPlxuICBcbiAgICBzY29yZVNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5zY29yZSAhPSAwXG4gICAgICBzY29yZVNpZGUgPSBpZiBAcHJvcHMuc2NvcmUgPCAwIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgICMgUm91bmQ6IDAgaXMgaGVhZGxpbmUsIG9kZHMgYXJlIFVTU1IsIGV2ZW5zIGFyZSBVU0FcbiAgICByb3VuZCA9IGlmIEBwcm9wcy5yb3VuZCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKEBwcm9wcy5yb3VuZCAvIDIpXG4gICAgcm91bmRTaWRlID0gJydcbiAgICBpZiBAcHJvcHMucm91bmQgIT0gMFxuICAgICAgcm91bmRTaWRlID0gaWYgQHByb3BzLnJvdW5kICUgMiA9PSAxIHRoZW4gJ3Vzc3InIGVsc2UgJ3VzYSdcblxuICAgIHR1cm4gPSBzd2l0Y2ggQHByb3BzLnR1cm5cbiAgICAgIHdoZW4gMCB0aGVuICdTJ1xuICAgICAgd2hlbiAxMSB0aGVuICdFJ1xuICAgICAgZWxzZSBAcHJvcHMudHVyblxuXG4gICAgIyBTaG9ydGhhbmQgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgc3RhdHVzVmFsdWUgPSAoaWQ9JycsIHRpdGxlPScnLCB2YWw9JycsIHNpZGU9JycpPT5cbiAgICAgIHRpdGxlID0gaGlsaWdodFNob3J0Y3V0TGV0dGVyIHRpdGxlLCBzaWRlXG4gICAgICBCb2FyZFN0YXR1c1ZhbHVlIF8uYXNzaWduIHtpZCwgdGl0bGUsIHZhbCwgc2lkZX0sIGhhbmRsZVZhbENsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2tcblxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnQm9hcmRTdGF0dXMnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzY29yZScsICdTY29yZScsIE1hdGguYWJzKEBwcm9wcy5zY29yZSksIHNjb3JlU2lkZVxuICAgICAgICBzdGF0dXNWYWx1ZSAnZGVmY29uJywgJ0RlZmNvbicsIEBwcm9wcy5kZWZjb25cbiAgICAgICAgc3RhdHVzVmFsdWUgJ21pbG9wcycsICdNaWxPcHMnLCBAcHJvcHMubWlsb3BzWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sJywgW1xuICAgICAgICBzdGF0dXNWYWx1ZSAndHVybicsICdUdXJuJywgdHVyblxuICAgICAgICBzdGF0dXNWYWx1ZSAncm91bmQnLCAnUm91bmQnLCByb3VuZCwgcm91bmRTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdzcGFjZScsICdTcGFjZScsIEBwcm9wcy5zcGFjZVswXSwgJ3VzYSdcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzFdLCAndXNzcidcbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scycsIFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy11bmRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3VuZG8nKSwgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHopJ1xuICAgICAgICAgICAgJyBVbmRvJ1xuICAgICAgICAgIF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1oaXN0b3J5JyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3RvZ2dsZScpLFxuICAgICAgICAgICAgaGlsaWdodFNob3J0Y3V0TGV0dGVyICdBY3Rpb24gSGlzdG9yeSdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2hpc3RvcnlDb250cm9scy1yZWRvJyxcbiAgICAgICAgICBSLmEgb25DbGljazogQHByb3BzLmhhbmRsZUhpc3RvcnlDbGljay5iaW5kKG51bGwsJ3JlZG8nKSwgW1xuICAgICAgICAgICAgJ1JlZG8gJ1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonU3RhdHVzTGFiZWwtc2hvcnRjdXQnLCAnKHkpJ1xuICAgICAgICAgIF1cbiAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2RpY2UnLCBbXG4gICAgICAgIERpZSByZWY6ICdkaWUtdXNhJywgc2lkZTogJ3VzYSdcbiAgICAgICAgUi5hIGNsYXNzTmFtZTogJ3JvbGwtZGljZScsIG9uQ2xpY2s6IEBoYW5kbGVCb3RoQ2xpY2ssIGhpbGlnaHRTaG9ydGN1dExldHRlcignUm9sbCBkaWNlJylcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c3NyJywgc2lkZTogJ3Vzc3InXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkU3RhdHVzVmFsdWUnXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAudmFsICE9IEBwcm9wcy52YWwgb3IgblAuc2lkZSAhPSBAcHJvcHMuc2lkZVxuICByZW5kZXI6IC0+XG4gICAgc2lkZUNsYXNzID0gc3dpdGNoIEBwcm9wcy5zaWRlXG4gICAgICB3aGVuICd1c2EnLCAndXNzcicgdGhlbiBAcHJvcHMuc2lkZVxuICAgICAgZWxzZSAnJ1xuXG4gICAgZGVjQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnZGVjJ1xuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnZGVjJywgQHByb3BzLnNpZGUpXG4gICAgaW5jQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnaW5jJyxcbiAgICAgIG9uQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGljay5iaW5kKG51bGwsIEBwcm9wcy5pZCwgJ2luYycsIEBwcm9wcy5zaWRlKVxuXG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNMYWJlbFwiLCBAcHJvcHMudGl0bGVcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJTdGF0dXNWYWx1ZSAje3NpZGVDbGFzc31cIiwgW1xuICAgICAgICBSLnNwYW4gZGVjQXR0cnMsICfil4AnXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICd2YWwnLCBAcHJvcHMudmFsXG4gICAgICAgIFIuc3BhbiBpbmNBdHRycywgJ+KWtidcbiAgICAgIF1cbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5jYXJkU3RhZ2VzID0gMTonRUFSTFknLCAyOidNSUQnLCAzOidMQVRFJ1xuXG5jYXJkQ2xhc3NOYW1lID0gKHByb3BzKSAtPlxuICBjbGFzc2VzID0gY3hcbiAgICAnYXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQXNpYSBTY29yaW5nJ1xuICAgICdldXJvcGVTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0V1cm9wZSBTY29yaW5nJ1xuICAgICdtaWRkbGVFYXN0U2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdNaWRkbGUgRWFzdCBTY29yaW5nJ1xuICAgICdjZW50cmFsQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQ2VudHJhbCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoZWFzdEFzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoZWFzdCBBc2lhIFNjb3JpbmcqJ1xuICAgICdhZnJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FmcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ1NvdXRoIEFtZXJpY2EgU2NvcmluZydcbiAgICAnb25nb2luZyc6IHByb3BzLm9uZ29pbmdcblxuICBcIm93bmVyLSN7cHJvcHMub3duZXJ9IGNhcmQtdmlldy0je3Byb3BzLnZpZXd9ICN7Y2xhc3Nlc31cIlxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZCdcbiAgcmVuZGVyOiAtPlxuICAgIG1haW4gPSBbXG4gICAgICAgIFIuc3BhbiB7Y2xhc3NOYW1lOiAnY2FyZC10aXRsZS1ob2xkZXInIH0sIFtcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1zdGFnZScsIGNhcmRTdGFnZXNbQHByb3BzLnN0YWdlXVxuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC1vcHMnLCBpZiBAcHJvcHMub3BzIDwgMSB0aGVuIFwiU1wiIGVsc2UgQHByb3BzLm9wc1xuICAgICAgICAgIFIuaDQgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScsIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMudGl0bGV9IFwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1pZCcsIFwiIyN7QHByb3BzLmlkfVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIucCBjbGFzc05hbWU6ICdjYXJkLXRleHQnLCBAcHJvcHMudGV4dFxuICAgICAgXVxuXG4gICAgaWYgQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICAgIG1haW4gPVxuICAgICAgICBSLmltZ1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcmQtaW1nJ1xuICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG5cbiAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsIGNsYXNzTmFtZTogY2FyZENsYXNzTmFtZShAcHJvcHMpICsgJyBjYXJkJywgbWFpblxuXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuemVyb1BhZCA9IHJlcXVpcmUgJy4uL2xpYnMvemVyb1BhZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRJbWcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkIGNhcmRJbWcnLFxuICAgICAgUi5hIGhyZWY6IFwiIy9jYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICBSLmltZyBzcmM6IFwiL2ltYWdlcy9jYXJkcy9zbS8je3plcm9QYWQgQHByb3BzLmlkfS5qcGdcIlxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQ2FyZCA9IHJlcXVpcmUgJy4vQ2FyZCdcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRMaXN0J1xuICByZW5kZXI6IC0+XG4gICAgY2xhc3NOYW1lID0gY3hcbiAgICAgICdjYXJkTGlzdCc6IHRydWVcbiAgICAgICdjYXJkTGlzdEZ1bGwnOiBAcHJvcHMudmlldyA9PSAndGV4dCdcbiAgICAgICdjYXJkTGlzdEltZyc6IEBwcm9wcy52aWV3ID09ICdpbWcnXG4gICAgUi5kaXYge2NsYXNzTmFtZX0sIEBwcm9wcy5jYXJkcy5tYXAgKGVsKSA9PlxuICAgICAgQ2FyZCBfLm1lcmdlIGVsLFxuICAgICAgICBrZXk6IFwiY2FyZCN7ZWwuaWR9XCJcbiAgICAgICAgc2hvd0Z1bGxUZXh0OiBAcHJvcHMuZnVsbFRleHRcbiAgICAgICAgdmlldzogQHByb3BzLnZpZXdcbiIsIlIgPSBSZWFjdC5ET01cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0RpZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCwgblMpLT5cbiAgICBuUy5yb2xsaW5nICE9IEBzdGF0ZS5yb2xsaW5nIG9yIG5TLnZhbCAhPSBAc3RhdGUudmFsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiAtPlxuICAgIHJvbGxzOiAzMFxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICB2YWw6IDFcbiAgICByb2xsaW5nOiBmYWxzZVxuICAgIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICBjbGlja0RpZTogLT5cbiAgICBAcm9sbERpZSgpXG5cbiAgcm9sbERpZTogLT5cbiAgICByZXR1cm4gaWYgQHN0YXRlLnJvbGxpbmdcbiAgICBAaXRlcmF0ZVJvbGwoKVxuXG4gIGl0ZXJhdGVSb2xsOiAtPlxuICAgIGlmIG5vdCBAc3RhdGUucm9sbGluZ1xuICAgICAgQHNldFN0YXRlIHJvbGxpbmc6IHRydWUsIHJvbGxzOiBAcHJvcHMucm9sbHNcblxuICAgIGlmIEBzdGF0ZS5yb2xscyA9PSAwXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogZmFsc2UsIHJvbGxzOiBAcHJvcHMucm9sbHNcbiAgICBlbHNlXG4gICAgICB0aW1lID0gKDEwIC0gQHN0YXRlLnJvbGxzKSAqIDE4ICsgNTBcbiAgICAgIGlmIEBzdGF0ZS5yb2xscyA+IDEwXG4gICAgICAgIHRpbWUgPSA1MFxuXG4gICAgICBAc2V0U3RhdGVcbiAgICAgICAgdmFsOiBfLnJhbmRvbSgxLDYpXG4gICAgICAgIHJvbGxzOiBAc3RhdGUucm9sbHMgLSAxXG4gICAgICBzZXRUaW1lb3V0IEBpdGVyYXRlUm9sbCwgdGltZVxuXG4gIHJlbmRlcjogLT5cbiAgICByb2xsaW5nID0gaWYgQHN0YXRlLnJvbGxpbmcgYW5kIEBzdGF0ZS5yb2xscyA+IDAgdGhlbiAncm9sbGluZycgZWxzZSAnJ1xuICAgIFIuZGl2IG9uQ2xpY2s6IEBjbGlja0RpZSwgY2xhc3NOYW1lOiBcImRpZSBkaWUtI3tAcHJvcHMuc2lkZX0gI3tyb2xsaW5nfVwiLCBAc3RhdGUudmFsXG5cbiIsIlIgPSBSZWFjdC5ET01cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2Zvb3RlcicsIFtcbiAgICAgIFIucCB7fSwgW1xuICAgICAgICBcIlR3aVN0cnVnIHdhcyBtYWRlIGJ5IFwiXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vamp0LmlvJywgJ0phc29uIFRyaWxsJ1xuICAgICAgICAnIHdpdGggaGVscCBmcm9tICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnLycsICdDb2ZmZWVTY3JpcHQnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJywgJ1JlYWN0J1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vYnJvd3NlcmlmeS5vcmcvJywgJ0Jyb3dzZXJpZnknXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9sb2Rhc2guY29tLycsICdMby1EYXNoJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLCAnQm9vdHN0cmFwJ1xuICAgICAgICAnLCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vemVwdG9qcy5jb20nLCAnWmVwdG8nXG4gICAgICAgICcsIGFuZCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ3VscGpzLmNvbScsICdHdWxwJ1xuICAgICAgICAnLidcbiAgICAgICAgUi5icigpXG4gICAgICAgICdJdCBvd2VzIGl0cyBleGlzdGVuY2UgdG8gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tJywgJ1R3aWxpZ2h0IFN0cmF0ZWd5J1xuICAgICAgICAnLiBDb21tZW50cywgc3VnZ2VzdGlvbnMsIGFuZCBidWcgcmVwb3J0cyBjYW4gYmUgYWltZWQgYXQgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2dpdGh1Yi5jb20vamp0L3R3aXN0cnVnL2lzc3VlcycsICdHaXRodWInXG4gICAgICAgICcgb3IgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL3R3aXR0ZXIuY29tL2phc29udHJpbGwnLCAnQGphc29udHJpbGwnXG4gICAgICAgICcuJ1xuICAgICAgXVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdOYXZWaWV3J1xuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgYWN0aXZlOiAnJ1xuXG4gIHJlbmRlcjogLT5cblxuICAgIGxpID0gKG1lbnVLZXksIGhyZWYsIHRpdGxlKT0+XG4gICAgICBSLmxpIGNsYXNzTmFtZTogY3goJ2FjdGl2ZSc6IEBwcm9wcy5hY3RpdmUgPT0gbWVudUtleSksXG4gICAgICAgIFIuYSBocmVmOiBocmVmLCB0aXRsZVxuXG4gICAgUi5uYXYgY2xhc3NOYW1lOiBcIm5hdmJhciBcIiwgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIsIFtcblxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6IFwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgIFIuYSBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6ICcjLycsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWdcIiwgXCJTdHJ1Z1wiXG4gICAgICAgICAgXVxuXG4gICAgICAgIFIudWwgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2XCIsIFtcbiAgICAgICAgICBsaSAnY2FyZHMnLCAnIy9jYXJkcycsICdDYXJkcydcbiAgICAgICAgICBsaSAnYm9hcmQnLCAnIy9ib2FyZCcsICdCb2FyZCdcbiAgICAgICAgICBsaSAnYWJvdXQnLCAnIy9hYm91dCcsICdBYm91dCdcbiAgICAgICAgXVxuXG4gICAgICBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpKF9fZGlybmFtZSwgWycqLmNvZmZlZSddKVxuIl19
