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
        var countryId, onTop, props, _ref3;
        onTop = !ipKeySequence || (_ref3 = countryData.shortcut, __indexOf.call(ipShowCountries, _ref3) >= 0) && oneLetterContinentCode(countryData.continent) === ipShowContinent && ipKeySequence.length >= 4;
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
        'nodediv-on-top': this.props.onTop && !(this.props.regionInfo || this.props.superpower)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvY2FyZHMuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvYXBwL2RhdGEvbWFwLWRhdGEuanNvbiIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL1R3aXN0cnVnLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvQm9hcmRTdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9NaWNyb0V2ZW50Q2xhc3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9TdGF0ZUhpc3RvcnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9jYXJkQ2xhc3NOYW1lLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvY29udGllbnRDb2RlRnJvbU9uZUxldHRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2NvbnRpbmVudENvZGVGcm9tTGV0dGVyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVHJ1dGh5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVW5pcXVlLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZmlsdGVyVmFsaWRDYXJkSWRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvZ2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL2dhbWVWYWxEaXNwbGF5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvaW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9pbnRUb1N0cldpdGhTaWduLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvbnVtVG9DaGFyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvb25lTGV0dGVyQ29udGluZW50Q29kZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3FzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvcmFuZ2VkR2FtZVZhbC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NldFBhZ2VUaXRsZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25Gcm9tRGlyLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc2lnblN0cmluZy5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25lZE51bU9yRGFzaC5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NpZ25lZFN0ci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy9saWJzL3NvcnROdW1lcmljYWwuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdGF0ZUVuY29kZXIuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy9zdXBlclN0YXRzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvc3VwZXJwb3dlclRvSW5kZXguY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy91cHBlckZpcnN0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL2xpYnMvdmlld3MuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvbGlicy96ZXJvUGFkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0Fib3V0LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0JvYXJkUGljLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0NhcmQuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ2FyZHMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvQ291bnRyaWVzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL0hvbWUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvcGFnZXMvV2hvb3BzLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3BhZ2VzL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3JvdXRlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92ZW50LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTGluay5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9Cb2FyZE5vZGUuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmROb2RlRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkTm9kZUlQRGl2LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5LmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0JvYXJkU3RhdGVIaXN0b3J5RW50cnkuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXMuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQm9hcmRTdGF0dXNWYWx1ZS5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9DYXJkLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0NhcmRJbWcuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvQ2FyZExpc3QuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvRGllLmNvZmZlZSIsIi9Vc2Vycy9qanQvU2l0ZXMvdHdpc3RydWcvc3JjL3ZpZXdzL0Zvb3Rlci5jb2ZmZWUiLCIvVXNlcnMvamp0L1NpdGVzL3R3aXN0cnVnL3NyYy92aWV3cy9OYXYuY29mZmVlIiwiL1VzZXJzL2pqdC9TaXRlcy90d2lzdHJ1Zy9zcmMvdmlld3MvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOW1GQSxJQUFBLG9GQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLElBQ0EsR0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQURwQixDQUFBOztBQUFBLE1BRUEsR0FBUyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BRnRCLENBQUE7O0FBQUEsRUFHQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFIbEIsQ0FBQTs7QUFBQSxDQUlBLEdBQUksS0FKSixDQUFBOztBQUFBLFNBTUEsR0FBWSxPQUFBLENBQVEsd0JBQVIsQ0FOWixDQUFBOztBQUFBLENBVUMsQ0FBQyxTQUFGLEdBQWMsU0FBQyxHQUFELEVBQU0sSUFBTixHQUFBO0FBQ1osTUFBQSxNQUFBO0FBQUEsRUFBQSxNQUFBLEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQUFBO0FBQUEsRUFDQSxNQUFNLENBQUMsS0FBUCxHQUFlLE9BRGYsQ0FBQTtBQUFBLEVBRUEsTUFBTSxDQUFDLEdBQVAsR0FBYSxHQUZiLENBQUE7QUFHQSxFQUFBLElBQUcsSUFBSDtBQUNFLElBQUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsSUFBaEIsQ0FERjtHQUhBO1NBTUEsUUFBUSxDQUFDLG9CQUFULENBQThCLE1BQTlCLENBQXNDLENBQUEsQ0FBQSxDQUFFLENBQUMsV0FBekMsQ0FBcUQsTUFBckQsRUFQWTtBQUFBLENBVmQsQ0FBQTs7QUFBQSxJQW9CQSxHQUFPLE9BQUEsQ0FBUSxRQUFSLENBcEJQLENBQUE7O0FBQUEsS0FxQkEsR0FBUSxPQUFBLENBQVEsU0FBUixDQXJCUixDQUFBOztBQUFBLEtBc0JBLEdBQVEsT0FBQSxDQUFRLFNBQVIsQ0F0QlIsQ0FBQTs7QUFBQSxNQXdCQSxHQUFTLE9BQUEsQ0FBUSxVQUFSLENBeEJULENBQUE7O0FBQUEsUUEwQkEsR0FBVyxLQUFLLENBQUMsV0FBTixDQUNUO0FBQUEsRUFBQSxNQUFBLEVBQVEsQ0FBQyxNQUFELENBQVI7QUFBQSxFQUVBLGVBQUEsRUFBaUIsU0FBQSxHQUFBO1dBQ2Y7QUFBQSxNQUFBLFVBQUEsRUFBVyxJQUFYO0FBQUEsTUFDQSxJQUFBLEVBQU0sRUFETjtBQUFBLE1BRUEsT0FBQSxFQUFTLElBRlQ7TUFEZTtFQUFBLENBRmpCO0FBQUEsRUFPQSxrQkFBQSxFQUFvQixTQUFBLEdBQUE7V0FDbEIsQ0FBQSxDQUFFLGNBQUYsQ0FBaUIsQ0FBQyxJQUFsQixDQUFBLEVBRGtCO0VBQUEsQ0FQcEI7QUFBQSxFQVVBLG1CQUFBLEVBQXFCLFNBQUEsR0FBQTtBQUNuQixRQUFBLFFBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBZCxDQUFBLENBQUYsQ0FBWCxDQUFBO1dBQ0EsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsWUFBckIsRUFGbUI7RUFBQSxDQVZyQjtBQUFBLEVBZ0JBLGtCQUFBLEVBQW9CLFNBQUEsR0FBQTtXQUFHLElBQUMsQ0FBQSxPQUFELENBQUEsRUFBSDtFQUFBLENBaEJwQjtBQUFBLEVBa0JBLE9BQUEsRUFBUyxTQUFBLEdBQUE7QUFDUCxRQUFBLFFBQUE7QUFBQSxJQUFBLElBQUcsQ0FBQSxJQUFLLENBQUEsS0FBSyxDQUFDLE9BQWQ7QUFDRSxZQUFBLENBREY7S0FBQTtBQUFBLElBRUEsUUFBQSxHQUFXLENBQUEsQ0FBRSxJQUFDLENBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFkLENBQUEsQ0FBRixDQUZYLENBQUE7V0FHQSxVQUFBLENBQVcsU0FBQSxHQUFBO2FBQ1QsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsWUFBbEIsRUFEUztJQUFBLENBQVgsRUFFRSxFQUZGLEVBSk87RUFBQSxDQWxCVDtBQUFBLEVBMkJBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFFTixRQUFBLDZCQUFBO0FBQUEsSUFBQSxJQUFHLENBQUEsbUNBQVUsQ0FBRSxjQUFmO0FBQ0UsTUFBQSxRQUFBLEdBQVcsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFFBQUEsU0FBQSxFQUFXLE1BQVg7T0FBSixFQUF1Qix3QkFBdkIsQ0FBWCxDQURGO0tBQUEsTUFBQTtBQUdFLE1BQUEsUUFBQTtBQUFXLGdCQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQW5CO0FBQUEsZUFDSixNQURJO21CQUNRLEtBQUssQ0FBQyxJQUFOLENBQ2Y7QUFBQSxjQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQWQ7QUFBQSxjQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FEeEI7YUFEZSxFQURSO0FBQUEsZUFJSixNQUpJO21CQUlRLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBdkIsRUFKUjtBQUFBLGVBS0osT0FMSTttQkFLUyxLQUFLLENBQUMsS0FBTixDQUNoQjtBQUFBLGNBQUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBZDtBQUFBLGNBQ0EsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUR4QjthQURnQixFQUxUO0FBQUEsZUFRSixXQVJJO21CQVFhLEtBQUssQ0FBQyxTQUFOLENBQUEsRUFSYjtBQUFBLGVBVUosT0FWSTttQkFVUyxLQUFLLENBQUMsS0FBTixDQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQXhCLEVBVlQ7QUFBQSxlQVdKLE9BWEk7bUJBV1MsS0FBSyxDQUFDLEtBQU4sQ0FBQSxFQVhUO0FBQUEsZUFZSixRQVpJO21CQVlVLEtBQUssQ0FBQyxNQUFOLENBQUEsRUFaVjtBQUFBO21CQUFYLENBSEY7S0FBQTtBQUFBLElBaUJBLGFBQUEsR0FBZ0IsRUFBQSxDQUNkO0FBQUEsTUFBQSxXQUFBLEVBQWEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBWixLQUFvQixPQUFqQztBQUFBLE1BQ0EsU0FBQSxFQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsT0FEbEI7S0FEYyxDQWpCaEIsQ0FBQTtXQXFCQSxDQUFDLENBQUMsR0FBRixDQUFNLEVBQU4sRUFBVTtNQUNSLEtBQUssQ0FBQyxHQUFOLENBQVU7QUFBQSxRQUFBLEdBQUEsRUFBSSxLQUFKO0FBQUEsUUFBVyxNQUFBLEVBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUExQjtPQUFWLENBRFEsRUFFUixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxHQUFBLEVBQUksVUFBSjtBQUFBLFFBQWdCLEdBQUEsRUFBSyxTQUFyQjtBQUFBLFFBQWdDLFNBQUEsRUFBVyxhQUEzQztPQUFOLEVBQWdFLFFBQWhFLENBRlEsRUFHUixLQUFLLENBQUMsTUFBTixDQUFhO0FBQUEsUUFBQSxHQUFBLEVBQUksUUFBSjtPQUFiLENBSFE7S0FBVixFQXZCTTtFQUFBLENBM0JSO0NBRFMsQ0ExQlgsQ0FBQTs7QUFBQSxXQXFGQSxHQUFjLFNBQUMsRUFBRCxHQUFBO0FBQ1osRUFBQSxFQUFFLENBQUMsR0FBSCxHQUFVLEtBQUEsR0FBSSxFQUFFLENBQUMsRUFBakIsQ0FBQTtTQUNBLEdBRlk7QUFBQSxDQXJGZCxDQUFBOztBQUFBLEtBeUZLLENBQUMsZUFBTixDQUFzQixRQUFBLENBQVM7QUFBQSxFQUFDLEtBQUEsRUFBTyxTQUFTLENBQUMsR0FBVixDQUFjLFdBQWQsQ0FBUjtDQUFULENBQXRCLEVBQ0UsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FERixDQXpGQSxDQUFBOzs7O0FDQUEsSUFBQSxnRUFBQTtFQUFBO2lTQUFBOztBQUFBLFlBQUEsR0FBZSxPQUFBLENBQVEsZ0JBQVIsQ0FBZixDQUFBOztBQUFBLGlCQUNBLEdBQW9CLE9BQUEsQ0FBUSxxQkFBUixDQURwQixDQUFBOztBQUFBLFlBRUEsR0FBZSxPQUFBLENBQVEsZ0JBQVIsQ0FGZixDQUFBOztBQUFBLE1BSU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLHNDQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSw4QkFBQSxXQUFBLEdBQWEsU0FBQyxLQUFELEdBQUE7QUFDWCxRQUFBLE9BQUE7QUFBQSxJQUFBLE9BQUEsR0FBVSxZQUFZLENBQUMsTUFBYixDQUFvQixLQUFwQixDQUFWLENBQUE7V0FFQSxRQUhXO0VBQUEsQ0FBYixDQUFBOztBQUFBLDhCQUtBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtBQUNYLFFBQUEsT0FBQTtBQUFBLElBQUEsT0FBQSxHQUFVLFlBQVksQ0FBQyxNQUFiLENBQW9CLEtBQXBCLENBQVYsQ0FBQTtXQUVBLFFBSFc7RUFBQSxDQUxiLENBQUE7O0FBQUEsOEJBVUEsR0FBQSxHQUFLLFNBQUMsS0FBRCxFQUFRLElBQVIsR0FBQTtBQUdILFFBQUEseUVBQUE7QUFBQSxJQUFBLEdBQUEsR0FBTSxJQUFDLENBQUEsVUFBRCxDQUFBLENBQU4sQ0FBQTtBQUVBLElBQUEsSUFBTyxXQUFQO0FBQ0UsYUFBTywyQ0FBTSxLQUFOLEVBQWEsSUFBYixDQUFQLENBREY7S0FGQTtBQUFBLElBS0EsRUFBQSxHQUFLLENBQUMsQ0FBQyxTQUFGLENBQVksSUFBWixDQUxMLENBQUE7QUFBQSxJQU1BLEVBQUEsR0FBSyxDQUFDLENBQUMsU0FBRixDQUFZLEtBQVosQ0FOTCxDQUFBO0FBQUEsSUFPQSxFQUFBLEdBQUssR0FBRyxDQUFDLElBUFQsQ0FBQTtBQUFBLElBUUEsRUFBQSxHQUFLLEdBQUcsQ0FBQyxLQVJULENBQUE7QUFXQSxJQUFBLElBQUcsSUFBSSxDQUFDLElBQUwsS0FBYSxJQUFoQjtBQUNFLE1BQUEsR0FBQSxHQUFTLEVBQUUsQ0FBQyxJQUFILEtBQVcsS0FBZCxHQUF5QixFQUFFLENBQUMsS0FBNUIsR0FBdUMsQ0FBN0MsQ0FBQTtBQUFBLE1BQ0EsSUFBQSxHQUFVLEVBQUUsQ0FBQyxJQUFILEtBQVcsTUFBZCxHQUEwQixFQUFFLENBQUMsS0FBN0IsR0FBd0MsQ0FEL0MsQ0FBQTtBQUFBLE1BRUEsRUFBRSxDQUFDLEtBQUgsR0FBVyxDQUFDLEdBQUQsRUFBTSxJQUFOLENBRlgsQ0FERjtLQVhBO0FBaUJBLElBQUEsSUFBRyxFQUFFLENBQUMsSUFBSCxLQUFXLEVBQUUsQ0FBQyxJQUFkLElBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBUixLQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQW5EO0FBQ0UsTUFBQSxRQUFBLEdBQWMsRUFBRSxDQUFDLEVBQUgsS0FBUyxPQUFaLEdBQXlCLElBQXpCLEdBQW1DLEVBQUUsQ0FBQyxJQUFILEtBQVcsRUFBRSxDQUFDLElBQTVELENBQUE7QUFBQSxNQUNBLE1BQUEsR0FBUyxFQUFFLENBQUMsRUFBSCxLQUFTLEVBQUUsQ0FBQyxFQURyQixDQUFBO0FBQUEsTUFHQSxVQUFBLEdBQWEsRUFBRSxDQUFDLElBQUgsS0FBVyxJQUFYLElBQW9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBWCxLQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBSDdELENBQUE7QUFBQSxNQUlBLFdBQUEsR0FBYyxFQUFFLENBQUMsSUFBSCxLQUFXLEtBQVgsSUFBcUIsRUFBRSxDQUFDLEVBQUgsS0FBUyxNQUE5QixJQUNkLEVBQUUsQ0FBQyxFQUFILEtBQVMsT0FESyxJQUNPLFFBRFAsSUFDb0IsTUFMbEMsQ0FBQTtBQU9BLE1BQUEsSUFBRyxVQUFBLElBQWMsV0FBakI7QUFDRSxlQUFPLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixFQUFsQixFQUFzQixFQUF0QixDQUFQLENBREY7T0FSRjtLQWpCQTtXQTRCQSwyQ0FBTSxFQUFOLEVBQVUsRUFBVixFQS9CRztFQUFBLENBVkwsQ0FBQTs7QUFBQSw4QkE0Q0EsZ0JBQUEsR0FBa0IsU0FBQyxLQUFELEVBQU8sSUFBUCxHQUFBO0FBQ2hCLFFBQUEsb0JBQUE7QUFBQSxJQUFBLENBQUEsR0FBSSxDQUFDLENBQUMsU0FBRixDQUFZLElBQUMsQ0FBQSxVQUFELENBQUEsQ0FBWixDQUFKLENBQUE7QUFBQSxJQUNBLEVBQUEsR0FBSyxDQUFDLENBQUMsU0FBRixDQUFZLElBQVosQ0FETCxDQUFBO0FBQUEsSUFFQSxFQUFBLEdBQUssQ0FBQyxDQUFDLElBRlAsQ0FBQTtBQUdBLFlBQU8sRUFBRSxDQUFDLElBQVY7QUFBQSxXQUNPLElBRFA7QUFFSSxRQUFBLEVBQUUsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFULElBQWUsRUFBRSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQXhCLENBQUE7QUFBQSxRQUNBLEVBQUUsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFULElBQWUsRUFBRSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBRHhCLENBQUE7QUFBQSxRQUVBLEVBQUUsQ0FBQyxJQUFILEdBQVUsTUFGVixDQUFBO0FBR0EsUUFBQSxJQUFHLEVBQUUsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFULEtBQWUsQ0FBbEI7QUFDRSxVQUFBLEVBQUUsQ0FBQyxJQUFILEdBQVUsTUFBVixDQURGO1NBSEE7QUFLQSxRQUFBLElBQUcsRUFBRSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQVQsS0FBZSxDQUFsQjtBQUNFLFVBQUEsRUFBRSxDQUFDLElBQUgsR0FBVSxLQUFWLENBREY7U0FMQTtBQU9BLFFBQUEsSUFBRyxDQUFBLEVBQUUsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFULGFBQWUsRUFBRSxDQUFDLEtBQU0sQ0FBQSxDQUFBLEVBQXhCLFFBQUEsS0FBOEIsQ0FBOUIsQ0FBSDtBQUNFLFVBQUEsR0FBQSxHQUFNLElBQU4sQ0FERjtTQVRKO0FBQ087QUFEUCxXQVlPLEtBWlA7QUFhSSxRQUFBLEVBQUUsQ0FBQyxHQUFILEdBQVMsRUFBRSxDQUFDLEdBQVosQ0FBQTtBQUNBLFFBQUEsSUFBRyxFQUFFLENBQUMsR0FBSCxLQUFVLEVBQUUsQ0FBQyxLQUFELENBQWY7QUFDRSxVQUFBLEdBQUEsR0FBTSxJQUFOLENBREY7U0FkSjtBQUFBLEtBSEE7QUFvQkEsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFELEtBQVcsSUFBQyxDQUFBLE9BQWY7QUFDRSxNQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxLQUFSLENBQWMsQ0FBZCxFQUFnQixJQUFDLENBQUEsT0FBRCxHQUFTLENBQXpCLENBQVYsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsT0FEWCxDQURGO0tBcEJBO0FBd0JBLElBQUEsSUFBRyxHQUFBLEtBQU8sSUFBVjtBQUNFLE1BQUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxHQUFSLENBQUEsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsT0FBRCxFQURBLENBQUE7QUFFQSxNQUFBLElBQUcsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsT0FBZDtBQUNFLFFBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsT0FBWCxDQURGO09BSEY7S0FBQSxNQUFBO0FBT0UsTUFBQSxJQUFDLENBQUEsTUFBTyxDQUFBLElBQUMsQ0FBQSxPQUFELENBQVIsR0FDRTtBQUFBLFFBQUEsSUFBQSxFQUFNLEVBQU47QUFBQSxRQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsV0FBRCxDQUFhLEtBQWIsQ0FEUDtPQURGLENBUEY7S0F4QkE7QUFBQSxJQW1DQSxJQUFDLENBQUEsSUFBRCxDQUFBLENBbkNBLENBQUE7QUFBQSxJQW9DQSxJQUFDLENBQUEsSUFBRCxDQUFNLE9BQU4sRUFBZSxJQUFDLENBQUEsVUFBRCxDQUFBLENBQWYsQ0FwQ0EsQ0FBQTtBQUFBLElBcUNBLElBQUMsQ0FBQSxJQUFELENBQU0sUUFBTixFQUFnQixJQUFDLENBQUEsVUFBRCxDQUFBLENBQWhCLENBckNBLENBQUE7V0FzQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxRQUFOLEVBdkNnQjtFQUFBLENBNUNsQixDQUFBOztBQUFBLDhCQXVGQSxhQUFBLEdBQWUsU0FBQSxHQUFBO0FBQ2IsUUFBQSxTQUFBO0FBQUEsSUFBQSxHQUFBLEdBQU0sSUFBQyxDQUFBLFVBQUQsQ0FBQSxDQUFOLENBQUE7QUFDQSxJQUFBLElBQWMsV0FBZDtBQUFBLFlBQUEsQ0FBQTtLQURBO1dBRUEsWUFBWSxDQUFDLE1BQWIsMENBQWlDLENBQUUsY0FBbkMsRUFIYTtFQUFBLENBdkZmLENBQUE7O0FBQUEsOEJBNkZBLGFBQUEsR0FBZSxTQUFDLEtBQUQsRUFBUSxRQUFSLEdBQUE7O01BQVEsV0FBUztLQUM5QjtBQUFBLElBQUEsWUFBQSxDQUFhLElBQUMsQ0FBQSxtQkFBZCxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxRQUFELEdBQVksUUFEWixDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsSUFBRCxHQUFXLGFBQUgsR0FBZSxLQUFmLEdBQTBCLENBQUEsSUFBRSxDQUFBLElBRnBDLENBQUE7QUFBQSxJQUdBLElBQUMsQ0FBQSxJQUFELENBQU0sZUFBTixFQUF1QixJQUFDLENBQUEsSUFBeEIsQ0FIQSxDQUFBO1dBSUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxRQUFOLEVBTGE7RUFBQSxDQTdGZixDQUFBOztBQUFBLDhCQW9HQSxZQUFBLEdBQWMsU0FBQyxJQUFELEdBQUE7O01BQUMsT0FBTztLQUNwQjtBQUFBLElBQUEsWUFBQSxDQUFhLElBQUMsQ0FBQSxtQkFBZCxDQUFBLENBQUE7QUFDQSxJQUFBLElBQUcsQ0FBQSxJQUFLLENBQUEsSUFBUjtBQUNFLE1BQUEsSUFBQyxDQUFBLGFBQUQsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLENBQUEsQ0FERjtLQURBO0FBR0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxRQUFKO2FBQ0UsSUFBQyxDQUFBLG1CQUFELEdBQXVCLFVBQUEsQ0FBVyxJQUFDLENBQUEsYUFBYSxDQUFDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsS0FBMUIsQ0FBWCxFQUE2QyxJQUE3QyxFQUR6QjtLQUpZO0VBQUEsQ0FwR2QsQ0FBQTs7QUFBQSw4QkEyR0EsSUFBQSxHQUFNLFNBQUEsR0FBQTtXQUNKLElBQUMsQ0FBQSxhQUFELENBQWUsS0FBZixFQURJO0VBQUEsQ0EzR04sQ0FBQTs7QUFBQSw4QkE4R0EsSUFBQSxHQUFNLFNBQUEsR0FBQTtXQUNKLElBQUMsQ0FBQSxhQUFELENBQWUsSUFBZixFQURJO0VBQUEsQ0E5R04sQ0FBQTs7QUFBQSw4QkFtSEEsY0FBQSxHQUFnQixTQUFDLEVBQUQsR0FBQTtBQUNkLFFBQUEsS0FBQTtBQUFBLElBQUEsS0FBQSxHQUFRLENBQUMsQ0FBQyxTQUFGLENBQVksSUFBQyxDQUFBLE1BQWIsRUFBcUIsRUFBckIsQ0FBUixDQUFBO0FBQ0EsSUFBQSxJQUFHLEtBQUEsS0FBUyxDQUFBLENBQVo7QUFDRSxhQUFPLEtBQVAsQ0FERjtLQUZjO0VBQUEsQ0FuSGhCLENBQUE7OzJCQUFBOztHQUQrQyxhQUpqRCxDQUFBOzs7O0FDQUEsSUFBQSxlQUFBO0VBQUEsa0JBQUE7O0FBQUE7K0JBQ0U7O0FBQUEsNEJBQUEsS0FBQSxHQUFNLFNBQUEsR0FBQTtXQUFHLElBQUMsQ0FBQSxNQUFELElBQVcsQ0FBQSxJQUFDLENBQUEsTUFBRCxHQUFVLEVBQVYsRUFBZDtFQUFBLENBQU4sQ0FBQTs7QUFBQSw0QkFDQSxPQUFBLEdBQVEsU0FBQyxDQUFELEdBQUE7V0FBTSxJQUFDLENBQUEsS0FBRCxDQUFBLENBQVMsQ0FBQSxDQUFBLENBQVQsSUFBZ0IsQ0FBQSxJQUFDLENBQUEsS0FBRCxDQUFBLENBQVMsQ0FBQSxDQUFBLENBQVQsR0FBYyxFQUFkLEVBQXRCO0VBQUEsQ0FEUixDQUFBOztBQUFBLDRCQUVBLEVBQUEsR0FBRyxTQUFDLENBQUQsRUFBSSxDQUFKLEdBQUE7V0FBUyxDQUFDLElBQUMsQ0FBQSxPQUFELENBQVMsQ0FBVCxDQUFELENBQVksQ0FBQyxJQUFiLENBQWtCLENBQWxCLEVBQVQ7RUFBQSxDQUZILENBQUE7O0FBQUEsNEJBR0EsR0FBQSxHQUFJLFNBQUMsQ0FBRCxFQUFJLENBQUosR0FBQTtBQUFTLFFBQUEsQ0FBQTtBQUFBLElBQUEsSUFBK0IsNkJBQS9CO2FBQUMsQ0FBQyxDQUFDLE1BQUYsQ0FBVSxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsQ0FBVixFQUF3QixDQUF4QixFQUFEO0tBQVQ7RUFBQSxDQUhKLENBQUE7O0FBQUEsNEJBSUEsSUFBQSxHQUFLLFNBQUMsQ0FBRCxFQUFJLENBQUosR0FBQTtBQUFTLFFBQUEsQ0FBQTtXQUFBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBSixFQUFPLENBQUMsQ0FBQSxHQUFJLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFBLEdBQUE7ZUFBRyxDQUFDLEtBQUMsQ0FBQSxHQUFELENBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRCxDQUFBLElBQWUsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLEVBQVcsU0FBWCxFQUFsQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUwsQ0FBUCxFQUFUO0VBQUEsQ0FKTCxDQUFBOztBQUFBLDRCQUtBLElBQUEsR0FBSyxTQUFBLEdBQUE7QUFBWSxRQUFBLG9CQUFBO0FBQUEsSUFBWCxrQkFBRywyREFBUSxDQUFBO0FBQUEsSUFBQSxJQUEyQiw2QkFBM0I7QUFBQSxXQUFBLHdDQUFBO2tCQUFBO0FBQUEsUUFBQSxDQUFDLENBQUMsS0FBRixDQUFRLElBQVIsRUFBVyxDQUFYLENBQUEsQ0FBQTtBQUFBLE9BQUE7S0FBQTtXQUErQyxFQUEzRDtFQUFBLENBTEwsQ0FBQTs7QUFBQSxFQU1BLGVBQUMsQ0FBQSxLQUFELEdBQU8sU0FBQyxDQUFELEdBQUE7QUFBTSxRQUFBLENBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUE7QUFBQSxNQUFBLENBQUMsQ0FBQSxTQUFHLENBQUEsQ0FBQSxDQUFKLEdBQVMsSUFBQyxDQUFBLFNBQUcsQ0FBQSxDQUFBLENBQWIsQ0FBQTtBQUFBLEtBQUE7V0FBOEIsRUFBcEM7RUFBQSxDQU5QLENBQUE7O3lCQUFBOztJQURGLENBQUE7O0FBQUEsTUFVTSxDQUFDLE9BQVAsR0FBaUIsZUFWakIsQ0FBQTs7OztBQ0FBLElBQUEsNkJBQUE7RUFBQTtpU0FBQTs7QUFBQSxlQUFBLEdBQWtCLE9BQUEsQ0FBUSxtQkFBUixDQUFsQixDQUFBOztBQUFBO0FBSUUsaUNBQUEsQ0FBQTs7QUFBYSxFQUFBLHNCQUFDLElBQUQsR0FBQTtBQUVYLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxFQUFWLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxNQUFELEdBQVUsRUFEVixDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBRlYsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUhYLENBQUE7QUFBQSxJQUlBLElBQUMsQ0FBQSxJQUFELEdBQVEsS0FKUixDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxFQUxYLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxZQUFELEdBQWdCLEVBTmhCLENBRlc7RUFBQSxDQUFiOztBQUFBLHlCQVdBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtXQUNYLE1BRFc7RUFBQSxDQVhiLENBQUE7O0FBQUEseUJBY0EsV0FBQSxHQUFhLFNBQUMsS0FBRCxHQUFBO1dBQ1gsTUFEVztFQUFBLENBZGIsQ0FBQTs7QUFBQSx5QkFpQkEsSUFBQSxHQUFNLFNBQUEsR0FBQTtBQUNKLFFBQUEsWUFBQTtBQUFBLElBQUEsTUFBQSxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FBUixDQUFjLENBQWQsRUFBaUIsSUFBQyxDQUFBLFlBQWxCLENBQVQsQ0FBQTtBQUFBLElBRUEsSUFBQSxHQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUZQLENBQUE7V0FHQSxZQUFZLENBQUMsT0FBYixDQUFxQixJQUFDLENBQUEsRUFBdEIsRUFBMEIsSUFBMUIsRUFKSTtFQUFBLENBakJOLENBQUE7O0FBQUEseUJBdUJBLElBQUEsR0FBTSxTQUFBLEdBQUE7QUFDSixRQUFBLE1BQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLFlBQVksQ0FBQyxPQUFiLENBQXFCLElBQUMsQ0FBQSxFQUF0QixDQUFYLENBQVQsQ0FBQTtBQUNBLElBQUEsSUFBRyxNQUFBLElBQVcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDRSxNQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBVixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBRDNCLENBQUE7QUFBQSxNQUVBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE9BRlgsQ0FBQTtBQUFBLE1BSUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxNQUFOLENBSkEsQ0FBQTtBQUFBLE1BS0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxRQUFOLENBTEEsQ0FBQTtBQU1BLGFBQU8sTUFBUCxDQVBGO0tBRkk7RUFBQSxDQXZCTixDQUFBOztBQUFBLHlCQWtDQSxHQUFBLEdBQUssU0FBQyxLQUFELEVBQVEsSUFBUixHQUFBO0FBQ0gsUUFBQSxRQUFBOztNQURXLE9BQUs7S0FDaEI7QUFBQSxJQUFBLElBQUcsSUFBQyxDQUFBLE1BQUQsS0FBVyxJQUFDLENBQUEsT0FBZjtBQUNFLE1BQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsTUFBTSxDQUFDLEtBQVIsQ0FBYyxDQUFkLEVBQWdCLElBQUMsQ0FBQSxPQUFELEdBQVMsQ0FBekIsQ0FBVixDQURGO0tBQUE7QUFHQSxJQUFBLElBQU8sb0JBQVA7QUFDRSxNQUFBLElBQUMsQ0FBQSxPQUFELEdBQVcsQ0FBWCxDQURGO0tBQUEsTUFBQTtBQUdFLE1BQUEsSUFBQyxDQUFBLE9BQUQsRUFBQSxDQUhGO0tBSEE7QUFBQSxJQVFBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE9BUlgsQ0FBQTtBQUFBLElBVUEsUUFBQSxHQUNFO0FBQUEsTUFBQSxLQUFBLEVBQU8sSUFBQyxDQUFBLFdBQUQsQ0FBYSxDQUFDLENBQUMsU0FBRixDQUFZLEtBQVosQ0FBYixDQUFQO0FBQUEsTUFDQSxJQUFBLEVBQU0sQ0FBQyxDQUFDLFNBQUYsQ0FBWSxJQUFaLENBRE47S0FYRixDQUFBO0FBQUEsSUFjQSxJQUFDLENBQUEsTUFBTyxDQUFBLElBQUMsQ0FBQSxPQUFELENBQVIsR0FBb0IsUUFkcEIsQ0FBQTtBQUFBLElBZ0JBLElBQUMsQ0FBQSxJQUFELENBQUEsQ0FoQkEsQ0FBQTtBQUFBLElBa0JBLElBQUMsQ0FBQSxJQUFELENBQU0sS0FBTixFQUFhLFFBQWIsRUFBdUIsTUFBdkIsQ0FsQkEsQ0FBQTtBQUFBLElBbUJBLElBQUMsQ0FBQSxJQUFELENBQU0sUUFBTixFQUFnQixRQUFoQixFQUEwQixNQUExQixDQW5CQSxDQUFBO1dBb0JBLElBQUMsQ0FBQSxJQUFELENBQU0sUUFBTixFQXJCRztFQUFBLENBbENMLENBQUE7O0FBQUEseUJBeURBLElBQUEsR0FBTSxTQUFBLEdBQUE7QUFDSixRQUFBLEtBQUE7QUFBQSxJQUFBLElBQUcsSUFBQyxDQUFBLE9BQUQsR0FBVyxDQUFkO0FBQ0UsTUFBQSxJQUFDLENBQUEsT0FBRCxFQUFBLENBREY7S0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUZBLENBQUE7QUFBQSxJQUdBLEtBQUEsR0FBUSxJQUFDLENBQUEsVUFBRCxDQUFBLENBSFIsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxNQUFOLENBSkEsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxRQUFOLEVBQWdCLEtBQWhCLENBTEEsQ0FBQTtBQUFBLElBTUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxRQUFOLENBTkEsQ0FBQTtXQU9BLE1BUkk7RUFBQSxDQXpETixDQUFBOztBQUFBLHlCQW1FQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBQ0osUUFBQSxLQUFBO0FBQUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE1BQWY7QUFDRSxNQUFBLElBQUMsQ0FBQSxPQUFELEVBQUEsQ0FERjtLQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsWUFBRCxDQUFBLENBRkEsQ0FBQTtBQUFBLElBR0EsS0FBQSxHQUFRLElBQUMsQ0FBQSxVQUFELENBQUEsQ0FIUixDQUFBO0FBQUEsSUFJQSxJQUFDLENBQUEsSUFBRCxDQUFNLE1BQU4sQ0FKQSxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsSUFBRCxDQUFNLFFBQU4sRUFBZ0IsS0FBaEIsQ0FMQSxDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsSUFBRCxDQUFNLFFBQU4sQ0FOQSxDQUFBO1dBT0EsTUFSSTtFQUFBLENBbkVOLENBQUE7O0FBQUEseUJBNkVBLElBQUEsR0FBTSxTQUFDLEtBQUQsR0FBQTtBQUNKLElBQUEsSUFBYyxhQUFkO0FBQUEsWUFBQSxDQUFBO0tBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxPQUFELEdBQVcsS0FEWCxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsSUFBRCxDQUFNLE1BQU4sRUFBYyxJQUFDLENBQUEsVUFBRCxDQUFBLENBQWQsQ0FGQSxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsSUFBRCxDQUFNLFFBQU4sRUFBZ0IsSUFBQyxDQUFBLFVBQUQsQ0FBQSxDQUFoQixDQUhBLENBQUE7V0FJQSxJQUFDLENBQUEsSUFBRCxDQUFNLFFBQU4sRUFMSTtFQUFBLENBN0VOLENBQUE7O0FBQUEseUJBb0ZBLEdBQUEsR0FBSyxTQUFDLEtBQUQsR0FBQTtBQUNILFFBQUEsRUFBQTtBQUFBLElBQUEsSUFBZSxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBakM7QUFBQSxhQUFPLElBQVAsQ0FBQTtLQUFBO0FBQUEsSUFDQSxFQUFBLEdBQUssQ0FBQyxDQUFDLFNBQUYsQ0FBWSxJQUFDLENBQUEsTUFBTyxDQUFBLEtBQUEsQ0FBcEIsQ0FETCxDQUFBO0FBQUEsSUFFQSxFQUFFLENBQUMsS0FBSCxHQUFXLElBQUMsQ0FBQSxXQUFELENBQWEsRUFBRSxDQUFDLEtBQWhCLENBRlgsQ0FBQTtXQUdBLEdBSkc7RUFBQSxDQXBGTCxDQUFBOztBQUFBLHlCQTBGQSxVQUFBLEdBQVksU0FBQSxHQUFBO1dBQ1YsSUFBQyxDQUFBLEdBQUQsQ0FBSyxJQUFDLENBQUEsT0FBTixFQURVO0VBQUEsQ0ExRlosQ0FBQTs7QUFBQSx5QkE2RkEsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLFFBQUEsSUFBQTtBQUFBLElBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxPQUFELEdBQVcsQ0FBbEIsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFBLEdBQU8sQ0FBVjtBQUFpQixNQUFBLElBQUEsR0FBTyxDQUFQLENBQWpCO0tBREE7QUFFQSxXQUFPLElBQUMsQ0FBQSxHQUFELENBQUssSUFBTCxDQUFQLENBSE87RUFBQSxDQTdGVCxDQUFBOztBQUFBLHlCQWtHQSxNQUFBLEdBQVEsU0FBQSxHQUFBO1dBQ04sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxJQUFDLENBQUEsTUFBUCxFQUFlLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEVBQUQsRUFBSyxLQUFMLEdBQUE7ZUFDYixLQUFDLENBQUEsR0FBRCxDQUFLLEtBQUwsRUFEYTtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWYsRUFETTtFQUFBLENBbEdSLENBQUE7O3NCQUFBOztHQUZ5QixnQkFGM0IsQ0FBQTs7QUFBQSxNQTJHTSxDQUFDLE9BQVAsR0FBaUIsWUEzR2pCLENBQUE7Ozs7QUNBQSxJQUFBLEVBQUE7O0FBQUEsRUFBQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBbEIsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUFpQixTQUFDLEtBQUQsR0FBQTtBQUNmLE1BQUEsbUJBQUE7QUFBQSxFQUFBLFVBQUEsR0FBYyxRQUFBLEdBQU8sS0FBSyxDQUFDLEtBQTNCLENBQUE7QUFBQSxFQUNBLE9BQUEsR0FBVSxFQUFBLENBQ1I7QUFBQSxJQUFBLGFBQUEsRUFBZSxLQUFLLENBQUMsS0FBTixLQUFlLGNBQTlCO0FBQUEsSUFDQSxlQUFBLEVBQWlCLEtBQUssQ0FBQyxLQUFOLEtBQWUsZ0JBRGhDO0FBQUEsSUFFQSxtQkFBQSxFQUFxQixLQUFLLENBQUMsS0FBTixLQUFlLHFCQUZwQztBQUFBLElBR0EsdUJBQUEsRUFBeUIsS0FBSyxDQUFDLEtBQU4sS0FBZSx5QkFIeEM7QUFBQSxJQUlBLHNCQUFBLEVBQXdCLEtBQUssQ0FBQyxLQUFOLEtBQWUseUJBSnZDO0FBQUEsSUFLQSxlQUFBLEVBQWlCLEtBQUssQ0FBQyxLQUFOLEtBQWUsZ0JBTGhDO0FBQUEsSUFNQSxxQkFBQSxFQUF1QixLQUFLLENBQUMsS0FBTixLQUFlLHVCQU50QztBQUFBLElBT0EsU0FBQSxFQUFXLEtBQUssQ0FBQyxPQVBqQjtHQURRLENBRFYsQ0FBQTtTQVdBLFVBQUEsR0FBYSxHQUFiLEdBQW1CLFFBWko7QUFBQSxDQUZqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxTQUFELEdBQUE7QUFDZixFQUFBLElBQUcsU0FBQSxLQUFhLElBQWhCO1dBQTBCLElBQTFCO0dBQUEsTUFBQTtXQUFtQyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixFQUFuQztHQURlO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLElBQUEsRUFBQTs7QUFBQSxFQUFBLEdBQ0U7QUFBQSxFQUFBLEdBQUEsRUFBSyxJQUFMO0FBQUEsRUFDQSxHQUFBLEVBQUssSUFETDtBQUFBLEVBRUEsR0FBQSxFQUFLLElBRkw7QUFBQSxFQUdBLEdBQUEsRUFBSyxJQUhMO0FBQUEsRUFJQSxHQUFBLEVBQUssSUFKTDtBQUFBLEVBS0EsR0FBQSxFQUFLLElBTEw7Q0FERixDQUFBOztBQUFBLE1BUU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsTUFBRCxHQUFBO1NBQVcsRUFBRyxDQUFBLE1BQUEsRUFBZDtBQUFBLENBUmpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEVBQUQsR0FBQTtBQUFPLEVBQUEsSUFBTSxFQUFOO1dBQUEsR0FBQTtHQUFQO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsRUFBRCxFQUFJLENBQUosRUFBTSxHQUFOLEdBQUE7U0FBYSxHQUFHLENBQUMsT0FBSixDQUFZLEVBQVosQ0FBQSxLQUFtQixFQUFoQztBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEVBQUQsR0FBQTtTQUFPLENBQUEsQ0FBQSxJQUFLLEVBQUwsSUFBSyxFQUFMLElBQVcsR0FBWCxFQUFQO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxFQUFBLElBQUEsRUFBTSxTQUFDLEdBQUQsR0FBQTtBQUNKLFlBQU8sR0FBUDtBQUFBLFdBQ08sQ0FEUDtlQUNjLElBRGQ7QUFBQSxXQUVPLEVBRlA7ZUFFZSxJQUZmO0FBQUE7ZUFHTyxJQUhQO0FBQUEsS0FESTtFQUFBLENBQU47QUFBQSxFQUtBLEtBQUEsRUFBTyxTQUFDLEdBQUQsR0FBQTtBQUNMLElBQUEsSUFBRyxHQUFBLEtBQU8sQ0FBVjthQUFpQixJQUFqQjtLQUFBLE1BQUE7YUFBMEIsSUFBSSxDQUFDLElBQUwsQ0FBVSxHQUFBLEdBQU0sQ0FBaEIsRUFBMUI7S0FESztFQUFBLENBTFA7Q0FERixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsR0FBQTtBQUNmLE1BQUEsYUFBQTtBQUFBLFVBQU8sRUFBUDtBQUFBLFNBQ08sTUFEUDtBQUVJLE1BQUEsS0FBQSxHQUFRLEdBQVIsQ0FBQTtBQUFBLE1BQ0EsR0FBQSxHQUFNLEdBRE4sQ0FBQTtBQUVBLE1BQUEsSUFBRyxHQUFBLEtBQU8sTUFBVjtBQUNFLFFBQUEsS0FBQSxHQUFRLFVBQVIsQ0FBQTtBQUFBLFFBQ0EsR0FBQSxHQUFNLFVBRE4sQ0FERjtPQUZBO0FBS0EsY0FBTyxHQUFQO0FBQUEsYUFDTyxDQURQO2lCQUNjLE1BRGQ7QUFBQSxhQUVPLEVBRlA7aUJBRWUsSUFGZjtBQUFBO2lCQUdPLElBSFA7QUFBQSxPQVBKO0FBQ087QUFEUCxTQVdPLE9BWFA7QUFZSSxNQUFBLENBQUEsR0FBTyxHQUFBLEtBQU8sTUFBVixHQUFzQixVQUF0QixHQUFzQyxHQUExQyxDQUFBO0FBQ0EsTUFBQSxJQUFHLEdBQUEsS0FBTyxDQUFWO2VBQWlCLEVBQWpCO09BQUEsTUFBQTtlQUF3QixJQUFJLENBQUMsSUFBTCxDQUFVLEdBQUEsR0FBTSxDQUFoQixFQUF4QjtPQWJKO0FBV087QUFYUCxTQWNPLE9BZFA7YUFlSSxJQUFJLENBQUMsR0FBTCxDQUFTLEdBQVQsRUFmSjtBQUFBO2FBaUJJLElBakJKO0FBQUEsR0FEZTtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsY0FBUixDQUFBLENBQXdCLFNBQXhCLEVBQW1DLENBQUMsVUFBRCxDQUFuQyxDQUFqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxHQUFELEdBQUE7QUFBUSxFQUFBLElBQUcsR0FBQSxHQUFNLENBQVQ7V0FBaUIsR0FBQSxHQUFFLElBQW5CO0dBQUEsTUFBQTtXQUErQixJQUEvQjtHQUFSO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0dBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxFQUFBLE1BQUEsRUFBUSxTQUFDLENBQUQsR0FBQTtBQUNOLFFBQUEsR0FBQTtBQUFBLElBQUEsSUFBRyxDQUFBLEdBQUksRUFBUDthQUFlLEdBQUEsR0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLEVBQVgsRUFBckI7S0FBQSxNQUFBO2FBQXlDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLENBQUEsR0FBSSxFQUF4QixFQUF6QztLQURNO0VBQUEsQ0FBUjtBQUFBLEVBR0EsTUFBQSxFQUFRLFNBQUMsQ0FBRCxHQUFBO0FBQ04sUUFBQSxZQUFBOztNQURPLElBQUk7S0FDWDtBQUFBLElBQUEsSUFBQSxHQUFPLENBQUMsQ0FBQyxVQUFGLENBQWEsQ0FBYixDQUFQLENBQUE7QUFBQSxJQUVBLE1BQUE7QUFBUyxjQUFBLEtBQUE7QUFBQSxlQUVGLENBQUEsRUFBQSxJQUFNLElBQU4sSUFBTSxJQUFOLElBQWMsRUFBZCxFQUZFO2lCQUVvQixHQUZwQjtBQUFBLGVBSUYsQ0FBQSxFQUFBLElBQU0sSUFBTixJQUFNLElBQU4sSUFBYyxHQUFkLEVBSkU7aUJBSXFCLEdBSnJCO0FBQUEsZUFNRixDQUFBLEVBQUEsSUFBTSxJQUFOLElBQU0sSUFBTixJQUFjLEVBQWQsRUFORTtpQkFNb0IsR0FOcEI7QUFBQTtRQUZULENBQUE7V0FVQSxJQUFBLEdBQU8sT0FYRDtFQUFBLENBSFI7Q0FERixDQUFBOzs7O0FDSEEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxTQUFELEdBQUE7QUFDZixFQUFBLElBQUcsU0FBQSxLQUFhLElBQWhCO1dBQTBCLElBQTFCO0dBQUEsTUFBQTtXQUFtQyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixFQUFuQztHQURlO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0dBLElBQUEsNkJBQUE7O0FBQUEsTUFBTSxDQUFDLE9BQVAsR0FDRTtBQUFBLEVBQUEsS0FBQSxFQUFPLFNBQUMsR0FBRCxHQUFBLENBQVA7QUFBQSxFQUVBLEdBQUEsRUFBSyxTQUFDLEtBQUQsR0FBQSxDQUZMO0FBQUEsRUFJQSxHQUFBLEVBQUssU0FBQyxLQUFELEVBQVEsR0FBUixHQUFBO0FBQ0gsUUFBQSxLQUFBO0FBQUEsSUFBQSxLQUFBLEdBQVEsSUFBQyxDQUFBLEtBQUQsQ0FBQSxDQUFBLElBQVksRUFBcEIsQ0FBQTtBQUFBLElBQ0EsS0FBTSxDQUFBLEtBQUEsQ0FBTixHQUFlLEdBRGYsQ0FBQTtXQUVBLElBQUMsQ0FBQSxLQUFELENBQU8sSUFBQyxDQUFBLElBQUQsQ0FBTSxLQUFOLENBQVAsRUFIRztFQUFBLENBSkw7QUFBQSxFQVNBLFFBQUEsRUFBUSxTQUFDLEtBQUQsR0FBQTtBQUNOLFFBQUEsS0FBQTtBQUFBLElBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFELENBQUEsQ0FBQSxJQUFZLEVBQXBCLENBQUE7QUFDQSxJQUFBLElBQWMsYUFBZDtBQUFBLFlBQUEsQ0FBQTtLQURBO0FBQUEsSUFFQSxNQUFBLENBQUEsS0FBYSxDQUFBLEtBQUEsQ0FGYixDQUFBO1dBR0EsSUFBQyxDQUFBLEtBQUQsQ0FBTyxJQUFDLENBQUEsSUFBRCxDQUFNLEtBQU4sQ0FBUCxFQUpNO0VBQUEsQ0FUUjtBQUFBLEVBZUEsYUFBQSxFQUFlLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FmZjtBQUFBLEVBaUJBLGNBQUEsRUFBZSxDQUFDLEtBQUQsRUFBTyxLQUFQLENBakJmO0FBQUEsRUFtQkEsTUFBQSxFQUFRLFNBQUMsR0FBRCxHQUFBO0FBQ04sSUFBQSxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsR0FBVixDQUFIO0FBQ0UsTUFBQSxHQUFBLEdBQU0sR0FBRyxDQUFDLElBQUosQ0FBUyxHQUFULENBQU4sQ0FERjtLQUFBO1dBRUEsR0FBRyxDQUFDLE9BQUosQ0FBWSxJQUFDLENBQUEsYUFBYixFQUE0QixJQUFDLENBQUEsY0FBN0IsRUFITTtFQUFBLENBbkJSO0FBQUEsRUF3QkEsTUFBQSxFQUFRLFNBQUMsR0FBRCxHQUFBO0FBQ04sSUFBQSxHQUFBLEdBQU0sR0FBRyxDQUFDLE9BQUosQ0FBWSxJQUFDLENBQUEsY0FBYixFQUE2QixJQUFDLENBQUEsYUFBOUIsQ0FBTixDQUFBO0FBQ0EsSUFBQSxJQUFHLEdBQUcsQ0FBQyxPQUFKLENBQVksR0FBWixDQUFBLEtBQW9CLENBQUEsQ0FBdkI7QUFDRSxNQUFBLEdBQUEsR0FBTSxHQUFHLENBQUMsS0FBSixDQUFVLEdBQVYsQ0FBTixDQURGO0tBREE7V0FHQSxJQUpNO0VBQUEsQ0F4QlI7QUFBQSxFQStCQSxLQUFBLEVBQU8sU0FBQyxFQUFELEdBQUE7QUFDTCxRQUFBLGdCQUFBOztNQURNLDREQUFzQyxDQUFBLENBQUE7S0FDNUM7QUFBQSxJQUFBLElBQUcsQ0FBQSxFQUFIO0FBQ0UsWUFBQSxDQURGO0tBQUE7QUFBQSxJQUVBLEdBQUEsR0FBTSxFQUZOLENBQUE7QUFBQSxJQUdBLEtBQUEsR0FBUSxFQUFFLENBQUMsS0FBSCxDQUFTLEdBQVQsQ0FIUixDQUFBOztNQUlBLEtBQUssQ0FBRSxPQUFQLENBQWUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO0FBQ2IsY0FBQSxLQUFBO0FBQUEsVUFBQSxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLENBQVIsQ0FBQTtpQkFDQSxHQUFJLENBQUEsS0FBQyxDQUFBLE1BQUQsQ0FBUSxLQUFNLENBQUEsQ0FBQSxDQUFkLENBQUEsQ0FBSixHQUF5QixLQUFDLENBQUEsTUFBRCxDQUFRLEtBQU0sQ0FBQSxDQUFBLENBQWQsRUFGWjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWY7S0FKQTtXQU9BLElBUks7RUFBQSxDQS9CUDtBQUFBLEVBeUNBLElBQUEsRUFBTSxTQUFDLEdBQUQsR0FBQTtBQUNKLFFBQUEsV0FBQTtBQUFBLElBQUEsS0FBQSxHQUFRLEVBQVIsQ0FBQTtBQUNBLFNBQUEsUUFBQTs7aUJBQUE7QUFDRSxNQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsRUFBQSxHQUFFLENBQUEsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFSLENBQUEsQ0FBRixHQUFjLEdBQWQsR0FBZ0IsQ0FBQSxJQUFDLENBQUEsTUFBRCxDQUFRLENBQVIsQ0FBQSxDQUEzQixDQUFBLENBREY7QUFBQSxLQURBO1dBR0EsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFYLEVBSkk7RUFBQSxDQXpDTjtBQUFBLEVBK0NBLEtBQUEsRUFBTyxTQUFDLEVBQUQsR0FBQTtXQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsR0FBdUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBZ0MsQ0FBQSxDQUFBLENBQWhDLEdBQXFDLEdBQXJDLEdBQTJDLEdBRDdEO0VBQUEsQ0EvQ1A7Q0FERixDQUFBOzs7O0FDSEEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxFQUFELEVBQUssR0FBTCxHQUFBO0FBQ2YsTUFBQSxhQUFBO0FBQUEsRUFBQSxNQUFBLEdBQ0U7QUFBQSxJQUFBLEtBQUEsRUFBTyxDQUFDLENBQUEsRUFBRCxFQUFNLEVBQU4sQ0FBUDtBQUFBLElBQ0EsSUFBQSxFQUFNLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FETjtBQUFBLElBRUEsS0FBQSxFQUFPLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FGUDtBQUFBLElBR0EsTUFBQSxFQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIUjtBQUFBLElBSUEsTUFBQSxFQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKUjtBQUFBLElBS0EsS0FBQSxFQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMUDtHQURGLENBQUE7QUFBQSxFQVFBLEtBQUEsR0FBUSxNQUFPLENBQUEsRUFBQSxDQVJmLENBQUE7QUFVQSxFQUFBLElBQUcsR0FBQSxHQUFNLEtBQU0sQ0FBQSxDQUFBLENBQWY7QUFDRSxXQUFPLEtBQU0sQ0FBQSxDQUFBLENBQWIsQ0FERjtHQVZBO0FBWUEsRUFBQSxJQUFHLEdBQUEsR0FBTSxLQUFNLENBQUEsQ0FBQSxDQUFmO0FBQ0UsV0FBTyxLQUFNLENBQUEsQ0FBQSxDQUFiLENBREY7R0FaQTtTQWNBLElBZmU7QUFBQSxDQUFqQixDQUFBOzs7O0FDQUEsSUFBQSxrQkFBQTs7QUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBLEdBQUE7QUFDZixNQUFBLElBQUE7QUFBQSxFQURnQiw4REFDaEIsQ0FBQTtTQUFBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixDQUFBLEdBQW1CLGNBRHJCO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsR0FBRCxHQUFBO0FBQVEsRUFBQSxJQUFHLEdBQUEsS0FBTyxJQUFWO1dBQW9CLElBQXBCO0dBQUEsTUFBQTtXQUE2QixJQUE3QjtHQUFSO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsR0FBRCxHQUFBO0FBQ2YsRUFBQSxJQUFHLEdBQUEsR0FBTSxDQUFUO0FBQ0UsV0FBTyxHQUFQLENBREY7R0FBQTtBQUVBLEVBQUEsSUFBRyxHQUFBLEdBQU0sQ0FBVDtBQUNFLFdBQU8sR0FBUCxDQURGO0dBRkE7QUFJQSxTQUFPLEVBQVAsQ0FMZTtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEdBQUQsR0FBQTtBQUNmLE1BQUEsR0FBQTtBQUFBLEVBQUEsSUFBRyxHQUFBLEtBQU8sQ0FBVjtBQUNFLElBQUEsR0FBQSxHQUFNLEdBQU4sQ0FERjtHQUFBO0FBRUEsRUFBQSxJQUFHLEdBQUEsR0FBTSxDQUFUO0FBQ0UsSUFBQSxHQUFBLEdBQU8sR0FBQSxHQUFFLEdBQVQsQ0FERjtHQUZBO0FBSUEsRUFBQSxJQUFHLEdBQUEsR0FBTSxDQUFUO0FBQ0UsSUFBQSxHQUFBLEdBQU0sR0FBTixDQURGO0dBSkE7U0FNQSxJQVBlO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsR0FBRCxHQUFBO0FBQ2YsTUFBQSxJQUFBO0FBQUEsRUFBQSxJQUFBLEdBQU8sRUFBUCxDQUFBO0FBQ0EsRUFBQSxJQUFHLEdBQUEsR0FBTSxDQUFUO0FBQ0UsSUFBQSxJQUFBLEdBQU8sR0FBUCxDQURGO0dBREE7QUFBQSxFQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFPLEdBQW5CLENBSEEsQ0FBQTtBQUlBLFNBQU8sSUFBQSxHQUFPLEdBQWQsQ0FMZTtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLENBQUQsRUFBRyxDQUFILEdBQUE7U0FBUSxDQUFBLEdBQUUsRUFBVjtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxJQUFBLFNBQUE7O0FBQUEsU0FBQSxHQUFZLE9BQUEsQ0FBUSxhQUFSLENBQVosQ0FBQTs7QUFBQSxNQVNNLENBQUMsT0FBUCxHQUNFO0FBQUEsRUFBQSxNQUFBLEVBQVEsU0FBQyxLQUFELEdBQUE7QUFDTixRQUFBLGdCQUFBO0FBQUEsSUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDLElBQWIsQ0FBQTtBQUFBLElBQ0EsR0FBQSxHQUFNLEtBQUssQ0FBQyxHQURaLENBQUE7QUFBQSxJQUlBLEtBQUEsR0FBUSxDQUNOLElBQUksQ0FBQyxLQUFMLEdBQWEsRUFEUCxFQUNXLElBQUksQ0FBQyxNQURoQixFQUN3QixJQUFJLENBQUMsSUFEN0IsRUFDbUMsSUFBSSxDQUFDLEtBRHhDLEVBRU4sSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBRk4sRUFFVSxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FGdEIsRUFFMEIsSUFBSSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBRnJDLEVBRXlDLElBQUksQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUZwRCxDQUpSLENBQUE7V0FVQSxLQUFLLENBQUMsTUFBTixDQUFhLENBQUMsQ0FBQyxPQUFGLENBQVUsR0FBRyxDQUFDLEtBQUosQ0FBVSxDQUFWLENBQVYsQ0FBYixDQUNFLENBQUMsR0FESCxDQUNPLFNBQVMsQ0FBQyxNQURqQixDQUVFLENBQUMsSUFGSCxDQUVRLEVBRlIsRUFYTTtFQUFBLENBQVI7QUFBQSxFQWVBLE1BQUEsRUFBUSxTQUFDLEdBQUQsR0FBQTtBQUNOLFFBQUEsa0pBQUE7QUFBQSxJQUFBLElBQW1CLFdBQW5CO0FBQUEsYUFBTyxJQUFQLENBQUE7S0FBQTtBQUFBLElBQ0EsR0FBQSxHQUFNLEdBQUcsQ0FBQyxLQUFKLENBQVUsRUFBVixDQUFhLENBQUMsR0FBZCxDQUFrQixTQUFDLEVBQUQsR0FBQTthQUFPLFNBQVMsQ0FBQyxNQUFWLENBQWlCLEVBQWpCLEVBQVA7SUFBQSxDQUFsQixDQUROLENBQUE7QUFBQSxJQUVBLFFBQUEsR0FBVyxHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFBWSxDQUFaLENBRlgsQ0FBQTtBQUFBLElBR0EsS0FBQSxHQUFRLEdBQUcsQ0FBQyxLQUFKLENBQVUsQ0FBVixDQUhSLENBQUE7QUFBQSxJQUtDLG1CQUFELEVBQVEsb0JBQVIsRUFBZ0Isa0JBQWhCLEVBQXNCLG1CQUF0QixFQUE2QixtQkFBN0IsRUFBb0Msb0JBQXBDLEVBQTRDLG1CQUE1QyxFQUFtRCxvQkFMbkQsQ0FBQTtBQUFBLElBTUEsTUFBQSxHQUFTLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FOVCxDQUFBO0FBQUEsSUFPQSxLQUFBLEdBQVEsQ0FBQyxLQUFELEVBQVEsTUFBUixDQVBSLENBQUE7QUFBQSxJQVFBLEtBQUEsSUFBUyxFQVJULENBQUE7QUFBQSxJQVNBLElBQUEsR0FBTztBQUFBLE1BQUMsT0FBQSxLQUFEO0FBQUEsTUFBUSxRQUFBLE1BQVI7QUFBQSxNQUFnQixNQUFBLElBQWhCO0FBQUEsTUFBc0IsT0FBQSxLQUF0QjtBQUFBLE1BQTZCLFFBQUEsTUFBN0I7QUFBQSxNQUFxQyxPQUFBLEtBQXJDO0tBVFAsQ0FBQTtBQUFBLElBV0EsR0FBQSxHQUFNLEVBWE4sQ0FBQTtBQVlBLFNBQUEsNERBQUE7d0JBQUE7QUFDRSxNQUFBLFFBQUEsR0FBVyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUEsR0FBTSxDQUFqQixDQUFYLENBQUE7QUFBQSxNQUNBLFNBQUEsR0FBWSxLQUFBLEdBQVEsQ0FEcEIsQ0FBQTtBQUVBLE1BQUEsSUFBRyxTQUFBLEtBQWEsQ0FBaEI7QUFDRSxRQUFBLEdBQUksQ0FBQSxRQUFBLENBQUosR0FBZ0IsQ0FBQyxFQUFELENBQWhCLENBREY7T0FBQSxNQUFBO0FBR0UsUUFBQSxHQUFJLENBQUEsUUFBQSxDQUFVLENBQUEsU0FBQSxDQUFkLEdBQTJCLEVBQTNCLENBSEY7T0FIRjtBQUFBLEtBWkE7QUFBQSxJQXFCQSxHQUFHLENBQUMsT0FBSixDQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBWixFQUFtQixDQUFDLENBQUQsRUFBRyxDQUFILENBQW5CLENBckJBLENBQUE7V0F1QkE7QUFBQSxNQUFDLE1BQUEsSUFBRDtBQUFBLE1BQU8sS0FBQSxHQUFQO01BeEJNO0VBQUEsQ0FmUjtDQVZGLENBQUE7Ozs7QUNBQSxJQUFBLHFDQUFBOztBQUFBLFVBQUEsR0FBYSxTQUFDLEdBQUQsRUFBTSxTQUFOLEdBQUE7QUFDWCxNQUFBLGtDQUFBO0FBQUEsRUFBQSxXQUFBLEdBQWMsU0FBQSxHQUFBO1dBQ1o7QUFBQSxNQUFBLEdBQUEsRUFBSyxDQUFMO0FBQUEsTUFDQSxHQUFBLEVBQUssQ0FETDtBQUFBLE1BRUEsS0FBQSxFQUFPLENBRlA7QUFBQSxNQUdBLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BSE47QUFBQSxNQUlBLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BSk47QUFBQSxNQUtBLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BTE47QUFBQSxNQU1BLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BTk47QUFBQSxNQU9BLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BUE47QUFBQSxNQVFBLEVBQUEsRUFBTTtBQUFBLFFBQUEsR0FBQSxFQUFLLENBQUw7QUFBQSxRQUFRLEdBQUEsRUFBSyxDQUFiO0FBQUEsUUFBZ0IsS0FBQSxFQUFPLENBQXZCO09BUk47TUFEWTtFQUFBLENBQWQsQ0FBQTtBQUFBLEVBV0EsRUFBQSxHQUFLLFNBQUMsS0FBRCxFQUFRLEdBQVIsRUFBYSxTQUFiLEdBQUE7QUFDSCxRQUFBLE9BQUE7QUFBQSxJQUFBLE9BQUEsR0FBVSxDQUFDLENBQUMsSUFBRixDQUFPLFNBQVAsRUFBa0I7QUFBQSxNQUFBLEVBQUEsRUFBSSxRQUFBLENBQVMsU0FBVCxFQUFvQixFQUFwQixDQUFKO0tBQWxCLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxHQUFJLENBQUEsQ0FBQSxDQUFKLEdBQVMsR0FBSSxDQUFBLENBQUEsQ0FBYixJQUFtQixPQUFPLENBQUMsSUFBOUI7QUFDRSxNQUFBLEtBQU0sQ0FBQSxPQUFPLENBQUMsU0FBUixDQUFrQixDQUFDLEtBQXpCLEVBQUEsQ0FBQTtBQUFBLE1BQ0EsS0FBSyxDQUFDLEtBQU4sRUFEQSxDQUFBO0FBRUEsTUFBQSxJQUFHLE9BQU8sQ0FBQyxHQUFYO0FBQ0UsUUFBQSxLQUFNLENBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsQ0FBQyxHQUF6QixFQUFBLENBQUE7QUFBQSxRQUNBLEtBQUssQ0FBQyxHQUFOLEVBREEsQ0FERjtPQUFBLE1BQUE7QUFJRSxRQUFBLEtBQU0sQ0FBQSxPQUFPLENBQUMsU0FBUixDQUFrQixDQUFDLEdBQXpCLEVBQUEsQ0FBQTtBQUFBLFFBQ0EsS0FBSyxDQUFDLEdBQU4sRUFEQSxDQUpGO09BSEY7S0FEQTtXQVVBLE1BWEc7RUFBQSxDQVhMLENBQUE7QUFBQSxFQXlCQSxNQUFBLEdBQVMsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxHQUFOLEVBQVcsU0FBQyxHQUFELEdBQUE7V0FBUSxDQUFDLENBQUMsU0FBRixDQUFZLEdBQVosQ0FBZ0IsQ0FBQyxPQUFqQixDQUFBLEVBQVI7RUFBQSxDQUFYLENBekJULENBQUE7QUFBQSxFQTJCQSxHQUFBLEdBQU0sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxHQUFULEVBQWMsRUFBZCxFQUFrQixXQUFBLENBQUEsQ0FBbEIsQ0EzQk4sQ0FBQTtBQUFBLEVBNEJBLElBQUEsR0FBTyxDQUFDLENBQUMsTUFBRixDQUFTLE1BQVQsRUFBaUIsRUFBakIsRUFBcUIsV0FBQSxDQUFBLENBQXJCLENBNUJQLENBQUE7U0E4QkE7QUFBQSxJQUFDLEtBQUEsR0FBRDtBQUFBLElBQU0sTUFBQSxJQUFOO0lBL0JXO0FBQUEsQ0FBYixDQUFBOztBQUFBLFNBaUNBLEdBQVksU0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLE1BQWQsR0FBQTtTQUF3QixHQUFBLEdBQU0sTUFBTyxDQUFBLE1BQUEsRUFBckM7QUFBQSxDQWpDWixDQUFBOztBQUFBLGNBbUNBLEdBQWlCLFNBQUMsT0FBRCxFQUFVLE9BQVYsR0FBQTtBQUNmLE1BQUEsS0FBQTtBQUFBLEVBQUEsS0FBQSxHQUFRLENBQUMsQ0FBQyxTQUFGLENBQVksT0FBWixFQUFxQixTQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsTUFBZCxHQUFBO0FBQzNCLFFBQUEsb0JBQUE7QUFBQSxJQUFBLE9BQUEsR0FBYSxLQUFBLEtBQVMsS0FBWixHQUF1QixNQUFNLENBQUMsSUFBOUIsR0FBd0MsTUFBTSxDQUFDLEdBQXpELENBQUE7QUFBQSxJQUNBLFdBQUEsR0FBYyxPQUFPLENBQUMsR0FBUixDQUFZLFNBQUMsTUFBRCxHQUFBO0FBQ3hCLFVBQUEsK0NBQUE7QUFBQSxNQUFBLE9BQUEsR0FBVSxJQUFLLENBQUEsTUFBTSxDQUFDLEVBQVAsQ0FBZixDQUFBO0FBQUEsTUFDQSxPQUFBLEdBQVUsT0FBUSxDQUFBLE1BQU0sQ0FBQyxFQUFQLENBRGxCLENBQUE7QUFBQSxNQUVBLFVBQUEsR0FBYSxPQUFPLENBQUMsR0FBUixHQUFjLENBQWQsSUFBb0IsT0FBTyxDQUFDLEdBQVIsR0FBYyxPQUFPLENBQUMsR0FBMUMsSUFBa0QsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsT0FBTyxDQUFDLEtBRnZGLENBQUE7QUFBQSxNQUdBLE9BQUEsR0FBVSxPQUFPLENBQUMsR0FBUixLQUFlLE1BQU0sQ0FBQyxNQUF0QixJQUFpQyxPQUFPLENBQUMsS0FBUixHQUFnQixPQUFPLENBQUMsS0FIbkUsQ0FBQTtBQUFBLE1BSUEsUUFBQSxHQUFXLENBQUEsVUFBQSxJQUFtQixDQUFBLE9BQW5CLElBQW1DLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLENBSjlELENBQUE7YUFLQTtBQUFBLFFBQUUsVUFBQSxRQUFGO0FBQUEsUUFBWSxZQUFBLFVBQVo7QUFBQSxRQUF3QixTQUFBLE9BQXhCO1FBTndCO0lBQUEsQ0FBWixDQURkLENBQUE7QUFBQSxJQVNBLFdBQUEsR0FBYyxDQUFDLENBQUMsU0FBRixDQUFZLENBQUMsQ0FBQyxLQUFGLENBQVEsT0FBUixFQUFpQixJQUFqQixDQUFaLEVBQW9DLFdBQXBDLENBVGQsQ0FBQTtXQVVBLFdBQUEsR0FBYyxDQUFDLENBQUMsTUFBRixDQUFTLFdBQVQsRUFDWjtBQUFBLE1BQUEsUUFBQSxFQUFVLENBQUMsQ0FBQyxNQUFGLENBQVMsV0FBVCxFQUFzQixTQUFTLENBQUMsSUFBVixDQUFlLElBQWYsRUFBcUIsVUFBckIsQ0FBdEIsRUFBd0QsQ0FBeEQsQ0FBVjtBQUFBLE1BQ0EsVUFBQSxFQUFZLENBQUMsQ0FBQyxNQUFGLENBQVMsV0FBVCxFQUFzQixTQUFTLENBQUMsSUFBVixDQUFlLElBQWYsRUFBcUIsWUFBckIsQ0FBdEIsRUFBMEQsQ0FBMUQsQ0FEWjtBQUFBLE1BRUEsT0FBQSxFQUFTLENBQUMsQ0FBQyxNQUFGLENBQVMsV0FBVCxFQUFzQixTQUFTLENBQUMsSUFBVixDQUFlLElBQWYsRUFBcUIsU0FBckIsQ0FBdEIsRUFBdUQsQ0FBdkQsQ0FGVDtLQURZLEVBWGE7RUFBQSxDQUFyQixDQUFSLENBQUE7U0FnQkEsTUFqQmU7QUFBQSxDQW5DakIsQ0FBQTs7QUFBQSxNQXNETSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxHQUFELEVBQU0sVUFBTixFQUFrQixTQUFsQixHQUFBO0FBQ2YsTUFBQSxrQkFBQTtBQUFBLEVBQUEsU0FBQSxHQUFZLFVBQUEsQ0FBVyxHQUFYLEVBQWdCLFVBQWhCLENBQVosQ0FBQTtBQUFBLEVBQ0EsT0FBQSxHQUFVLGNBQUEsQ0FBZSxTQUFmLEVBQTBCLFNBQTFCLENBRFYsQ0FBQTtTQUVBO0FBQUEsSUFBQyxXQUFBLFNBQUQ7QUFBQSxJQUFZLFNBQUEsT0FBWjtJQUhlO0FBQUEsQ0F0RGpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEtBQUQsR0FBQTtBQUFVLEVBQUEsSUFBRyxLQUFBLEtBQVMsS0FBWjtXQUF1QixFQUF2QjtHQUFBLE1BQUE7V0FBOEIsRUFBOUI7R0FBVjtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEdBQUQsR0FBQTs7SUFBQyxNQUFJO0dBQU07U0FBQSxHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFBWSxDQUFaLENBQWMsQ0FBQyxXQUFmLENBQUEsQ0FBQSxHQUErQixHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFBMUM7QUFBQSxDQUFqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxHQUFELEVBQU0sR0FBTixHQUFBOztJQUFNLE1BQUk7R0FBSztTQUFBLENBQUMsS0FBQSxHQUFRLEdBQVQsQ0FBYSxDQUFDLE1BQWQsQ0FBcUIsQ0FBQSxHQUFyQixFQUEwQixHQUExQixFQUFmO0FBQUEsQ0FBakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsR0FBRCxFQUFNLEdBQU4sR0FBQTs7SUFBTSxNQUFJO0dBQUs7U0FBQSxDQUFDLEtBQUEsR0FBUSxHQUFULENBQWEsQ0FBQyxNQUFkLENBQXFCLENBQUEsR0FBckIsRUFBMEIsR0FBMUIsRUFBZjtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQSxJQUFBLENBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLFdBQWI7QUFBQSxFQUNBLE1BQUEsRUFBUSxTQUFBLEdBQUE7V0FDTixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsV0FBWDtLQUFOLEVBQThCO01BQzVCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxLQUFYO09BQU4sRUFBd0I7UUFDdEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFVBQUEsU0FBQSxFQUFXLFVBQVg7U0FBTixFQUE2QjtVQUMzQixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsWUFBQSxTQUFBLEVBQVcsV0FBWDtXQUFOLEVBQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLEVBQVM7WUFDUCxRQURPLEVBRVAsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLGNBQUEsU0FBQSxFQUFXLEtBQVg7YUFBUCxFQUF5QixLQUF6QixDQUZPLEVBR1AsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLGNBQUEsU0FBQSxFQUFXLE9BQVg7YUFBUCxFQUEyQixPQUEzQixDQUhPO1dBQVQsQ0FERixFQU1FLENBQUMsQ0FBQyxDQUFGLENBQUksRUFBSixFQUFRO1lBQ04sK0NBRE0sRUFFTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsY0FBQSxJQUFBLEVBQUssZ0RBQUw7YUFBSixFQUNFLG1CQURGLENBRk0sRUFJTiwySEFKTTtXQUFSLENBTkYsRUFhRSxDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUTtZQUNOLGtFQURNLEVBRU4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLGNBQUEsSUFBQSxFQUFNLDZCQUFOO2FBQUosRUFBeUMsbUJBQXpDLENBRk0sRUFHTix5SkFITSxFQU1OLENBQUMsQ0FBQyxFQUFGLENBQUssRUFBTCxFQUFTLFFBQVQsQ0FOTSxFQU9OLHVIQVBNLEVBU04sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLGNBQUEsSUFBQSxFQUFNLHNDQUFOO2FBQUosRUFBa0QsUUFBbEQsQ0FUTSxFQVVOLGdFQVZNO1dBQVIsQ0FiRixFQXlCRSxDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUTtZQUNOLHVCQURNLEVBRU4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLGNBQUEsSUFBQSxFQUFNLGdCQUFOO2FBQUosRUFBNEIsYUFBNUIsQ0FGTSxFQUdOLHdCQUhNLEVBSU4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLGNBQUEsSUFBQSxFQUFNLGlDQUFOO2FBQUosRUFBNkMsUUFBN0MsQ0FKTSxFQUtOLEdBTE07V0FBUixDQXpCRixFQWdDRSxDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyx5QkFBVCxDQWhDRixFQWlDRSxDQUFDLENBQUMsVUFBRixDQUFhLEVBQWIsRUFBaUI7WUFDZixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUSxxSkFBUixDQURlLEVBR2YsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsMlhBQVIsQ0FIZSxFQUtmLENBQUMsQ0FBQyxDQUFGLENBQUksRUFBSixFQUFRLG1RQUFSLENBTGUsRUFNZixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFDRSxDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsY0FBQSxJQUFBLEVBQU0sMkZBQU47YUFBSixFQUF1Ryx1QkFBdkcsQ0FERixDQURGLENBTmU7V0FBakIsQ0FqQ0YsQ0FEMkI7U0FBN0IsQ0FEc0IsRUFnRHRCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxVQUFBLFNBQUEsRUFBVyxVQUFYO1NBQU4sRUFBNkI7VUFDM0IsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFlBQUEsU0FBQSxFQUFXLCtCQUFYO0FBQUEsWUFBNEMsR0FBQSxFQUFLLG1CQUFqRDtXQUFOLENBRDJCO1NBQTdCLENBaERzQjtPQUF4QixDQUQ0QixFQXNENUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLEtBQVg7T0FBTixFQUNFLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxXQUFYO09BQU4sRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsUUFBQSxTQUFBLEVBQVcsVUFBWDtBQUFBLFFBQXVCLElBQUEsRUFBTSxxQkFBN0I7T0FBSixFQUNFLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVywwQkFBWDtBQUFBLFFBQXVDLEdBQUEsRUFBSyx3QkFBNUM7T0FBTixDQURGLENBREYsQ0FERixDQURGLENBdEQ0QjtLQUE5QixFQURNO0VBQUEsQ0FEUjtDQURlLENBRmpCLENBQUE7Ozs7QUNBQSxJQUFBLGdHQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLEVBQ0EsR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBRGxCLENBQUE7O0FBQUEsWUFFQSxHQUFlLE9BQUEsQ0FBUSxzQkFBUixDQUZmLENBQUE7O0FBQUEsaUJBR0EsR0FBb0IsT0FBQSxDQUFRLDJCQUFSLENBSHBCLENBQUE7O0FBQUEscUJBSUEsR0FBd0IsT0FBQSxDQUFRLDRCQUFSLENBSnhCLENBQUE7O0FBQUEsS0FLQSxHQUFRLE9BQUEsQ0FBUSxnQkFBUixDQUxSLENBQUE7O0FBQUEsZUFPQSxHQUFrQixTQUFDLEdBQUQsRUFBTSxRQUFOLEdBQUE7QUFDaEIsRUFBQSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUMsQ0FBQyxFQUFGLENBQUssRUFBTCxFQUFTLFFBQVEsQ0FBQyxHQUFsQixDQUFULENBQUEsQ0FBQTtBQUFBLEVBQ0EsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxRQUFRLENBQUMsSUFBbEIsQ0FBVCxDQURBLENBQUE7U0FFQSxJQUhnQjtBQUFBLENBUGxCLENBQUE7O0FBQUEsU0FhQSxHQUFZLEtBQUssQ0FBQyxXQUFOLENBQ1Y7QUFBQSxFQUFBLFNBQUEsRUFBVyxTQUFBLEdBQUE7V0FDVCxVQUFBLENBQVcsU0FBQSxHQUFBO2FBQ1QsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFEUztJQUFBLENBQVgsRUFFRSxDQUZGLEVBRFM7RUFBQSxDQUFYO0FBQUEsRUFJQSxlQUFBLEVBQWlCLFNBQUEsR0FBQTtXQUNmO0FBQUEsTUFBQSxTQUFBLEVBQ0U7QUFBQSxRQUFBLEVBQUEsRUFBSTtVQUNGO0FBQUEsWUFBRSxHQUFBLEVBQUksR0FBTjtBQUFBLFlBQVcsSUFBQSxFQUFNLDRDQUFqQjtXQURFLEVBRUY7QUFBQSxZQUFFLEdBQUEsRUFBSSxLQUFOO0FBQUEsWUFBYSxJQUFBLEVBQU0sa0RBQW5CO1dBRkUsRUFHRjtBQUFBLFlBQUUsR0FBQSxFQUFJLE9BQU47QUFBQSxZQUFlLElBQUEsRUFBTSxpQkFBckI7V0FIRSxFQUlGO0FBQUEsWUFBRSxHQUFBLEVBQUksS0FBTjtBQUFBLFlBQWEsSUFBQSxFQUFNLCtDQUFuQjtXQUpFLEVBS0Y7QUFBQSxZQUFFLEdBQUEsRUFBSSxLQUFOO0FBQUEsWUFBYSxJQUFBLEVBQU0sZ0RBQW5CO1dBTEUsRUFNRjtBQUFBLFlBQUUsR0FBQSxFQUFJLEtBQU47QUFBQSxZQUFhLElBQUEsRUFBTSw2Q0FBbkI7V0FORSxFQU9GO0FBQUEsWUFBRSxHQUFBLEVBQUksT0FBTjtBQUFBLFlBQWUsSUFBQSxFQUFNLDhDQUFyQjtXQVBFO1NBQUo7QUFBQSxRQVNBLElBQUEsRUFBTTtVQUNKO0FBQUEsWUFBRSxHQUFBLEVBQUksS0FBTjtBQUFBLFlBQWEsSUFBQSxFQUFNLGVBQW5CO1dBREksRUFFSjtBQUFBLFlBQUUsR0FBQSxFQUFJLEtBQU47QUFBQSxZQUFhLElBQUEsRUFBTSxnQkFBbkI7V0FGSSxFQUdKO0FBQUEsWUFBRSxHQUFBLEVBQUksS0FBTjtBQUFBLFlBQWEsSUFBQSxFQUFNLDBCQUFuQjtXQUhJLEVBSUo7QUFBQSxZQUFFLEdBQUEsRUFBSSxLQUFOO0FBQUEsWUFBYSxJQUFBLEVBQU0sMkJBQW5CO1dBSkksRUFLSjtBQUFBLFlBQUUsR0FBQSxFQUFJLEdBQU47QUFBQSxZQUFXLElBQUEsRUFBTSwwQkFBakI7V0FMSSxFQU1KO0FBQUEsWUFBRSxHQUFBLEVBQUksR0FBTjtBQUFBLFlBQVcsSUFBQSxFQUFNLFdBQWpCO1dBTkk7U0FUTjtBQUFBLFFBaUJBLEtBQUEsRUFBTztVQUNMO0FBQUEsWUFBRSxHQUFBLEVBQUksS0FBTjtBQUFBLFlBQWEsSUFBQSxFQUFNLGNBQW5CO1dBREssRUFFTDtBQUFBLFlBQUUsR0FBQSxFQUFJLEtBQU47QUFBQSxZQUFhLElBQUEsRUFBTSxlQUFuQjtXQUZLLEVBR0w7QUFBQSxZQUFFLEdBQUEsRUFBSSxLQUFOO0FBQUEsWUFBYSxJQUFBLEVBQU0sd0JBQW5CO1dBSEssRUFJTDtBQUFBLFlBQUUsR0FBQSxFQUFJLEtBQU47QUFBQSxZQUFhLElBQUEsRUFBTSx5QkFBbkI7V0FKSyxFQUtMO0FBQUEsWUFBRSxHQUFBLEVBQUksR0FBTjtBQUFBLFlBQVcsSUFBQSxFQUFNLHVCQUFqQjtXQUxLLEVBTUw7QUFBQSxZQUFFLEdBQUEsRUFBSSxHQUFOO0FBQUEsWUFBVyxJQUFBLEVBQU0sdUJBQWpCO1dBTks7U0FqQlA7T0FERjtNQURlO0VBQUEsQ0FKakI7QUFBQSxFQWdDQSxNQUFBLEVBQVEsU0FBQSxHQUFBO1dBQ04sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxFQUFOLEVBQVU7TUFDUixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVcsS0FBWDtPQUFOLEVBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLFdBQVg7T0FBTixFQUE4QjtRQUM1QixDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxpQ0FBVCxDQUQ0QixFQUU1QixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUSxpU0FBUixDQUY0QixFQU01QixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUTtVQUNOLGFBRE0sRUFFTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsWUFBQSxJQUFBLEVBQU8sVUFBQSxHQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBdkI7V0FBSixFQUNFLENBQUMsQ0FBQyxJQUFGLENBQU8sRUFBUCxFQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBbEIsQ0FERixDQUZNLEVBSU4scUhBSk0sRUFLTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsWUFBQSxPQUFBLEVBQVMsSUFBQyxDQUFBLFNBQVY7QUFBQSxZQUFxQixJQUFBLEVBQUssU0FBMUI7V0FBSixFQUF5QyxnQ0FBekMsQ0FMTSxFQU1OLEdBTk07U0FBUixDQU40QixFQWM1QixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUSxxYUFBUixDQWQ0QjtPQUE5QixDQURGLENBRFEsRUF1QlIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLEtBQVg7T0FBTixFQUF3QjtRQUN0QixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsVUFBQSxTQUFBLEVBQVcsVUFBWDtTQUFOLEVBQTZCLENBQzNCLENBQUMsQ0FBQyxFQUFGLENBQUssRUFBTCxFQUFTLGNBQVQsQ0FEMkIsRUFFM0IsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsdUlBQVIsQ0FGMkIsRUFHM0IsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsZ0VBQVIsQ0FIMkIsRUFJM0IsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEscUdBQVIsQ0FKMkIsRUFLM0IsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsNlRBQVIsQ0FMMkIsQ0FBN0IsQ0FEc0IsRUFRdEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFVBQUEsU0FBQSxFQUFXLFVBQVg7U0FBTixFQUE2QjtVQUMzQixDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxvQkFBVCxDQUQyQixFQUUzQixDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsWUFBQSxTQUFBLEVBQVUsOEJBQVY7V0FBTCxFQUErQyxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQTFCLEVBQWdDLGVBQWhDLEVBQWlELEVBQWpELENBQS9DLENBRjJCLEVBRzNCLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxZQUFBLFNBQUEsRUFBVSw4QkFBVjtXQUFMLEVBQStDLENBQUMsQ0FBQyxNQUFGLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBMUIsRUFBaUMsZUFBakMsRUFBa0QsRUFBbEQsQ0FBL0MsQ0FIMkIsRUFJM0IsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFlBQUEsU0FBQSxFQUFXLEtBQVg7V0FBTixFQUNFLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxZQUFBLFNBQUEsRUFBVyxXQUFYO1dBQU4sRUFBOEI7WUFDNUIsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLEVBQVMsaUNBQVQsQ0FENEIsRUFFNUIsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLGNBQUEsU0FBQSxFQUFVLDRDQUFWO2FBQUwsRUFBNkQsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUExQixFQUE4QixlQUE5QixFQUErQyxFQUEvQyxDQUE3RCxDQUY0QjtXQUE5QixDQURGLENBSjJCO1NBQTdCLENBUnNCO09BQXhCLENBdkJRO0tBQVYsRUFETTtFQUFBLENBaENSO0NBRFUsQ0FiWixDQUFBOztBQUFBLE1BNkZNLENBQUMsT0FBUCxHQUFpQixLQUFLLENBQUMsV0FBTixDQUVmO0FBQUEsRUFBQSxXQUFBLEVBQWEsV0FBYjtBQUFBLEVBRUEsWUFBQSxFQUFjLElBRmQ7QUFBQSxFQUlBLGtCQUFBLEVBQW9CLFNBQUEsR0FBQTtXQUNsQixJQUFDLENBQUEsWUFBRCxHQUFvQixJQUFBLGlCQUFBLENBQWtCO0FBQUEsTUFBQSxFQUFBLEVBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFYO0tBQWxCLEVBREY7RUFBQSxDQUpwQjtBQUFBLEVBT0EseUJBQUEsRUFBMkIsU0FBQyxFQUFELEdBQUEsQ0FQM0I7QUFBQSxFQVNBLGVBQUEsRUFBaUIsU0FBQSxHQUFBO1dBQ2Y7QUFBQSxNQUFBLEtBQUEsRUFBTyxJQUFQO0FBQUEsTUFDQSxNQUFBLEVBQVEsR0FEUjtBQUFBLE1BRUEsSUFBQSxFQUNFO0FBQUEsUUFBQSxLQUFBLEVBQU8sRUFBUDtBQUFBLFFBQ0EsTUFBQSxFQUFRLEVBRFI7QUFBQSxRQUVBLE1BQUEsRUFBUSxFQUZSO0FBQUEsUUFHQSxXQUFBLEVBQWEsRUFIYjtBQUFBLFFBSUEsYUFBQSxFQUFlLEVBSmY7T0FIRjtNQURlO0VBQUEsQ0FUakI7QUFBQSxFQW1CQSxlQUFBLEVBQWlCLFNBQUEsR0FBQTtXQUNmO0FBQUEsTUFBQSxRQUFBLEVBQVUsRUFBVjtNQURlO0VBQUEsQ0FuQmpCO0FBQUEsRUF1QkEsTUFBQSxFQUFRLFNBQUEsR0FBQTtXQUNOLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLFNBQUEsRUFBVyxXQUFYO0tBQU4sRUFBOEI7TUFDNUIscUJBQUEsQ0FDRTtBQUFBLFFBQUEsWUFBQSxFQUFjLElBQUMsQ0FBQSxZQUFmO0FBQUEsUUFDQSxHQUFBLEVBQU0sb0JBQUEsR0FBbUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQURoQztPQURGLENBRDRCLEVBSTVCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxXQUFYO09BQU4sRUFBOEI7UUFDNUIsS0FBQSxDQUFNLENBQUMsQ0FBQyxNQUFGLENBQVM7QUFBQSxVQUFBLFlBQUEsRUFBYyxJQUFDLENBQUEsWUFBZjtTQUFULEVBQXNDLElBQUMsQ0FBQSxLQUF2QyxDQUFOLENBRDRCLEVBRTVCLFNBQUEsQ0FBVTtBQUFBLFVBQUEsRUFBQSxFQUFJLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBWDtTQUFWLENBRjRCLEVBRzVCLENBQUMsQ0FBQyxRQUFGLENBQ0U7QUFBQSxVQUFBLFNBQUEsRUFBVyxvQkFBWDtBQUFBLFVBQ0EsR0FBQSxFQUFJLE9BREo7QUFBQSxVQUVBLEtBQUEsRUFBTyxJQUFJLENBQUMsU0FBTCxDQUFlLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0MsR0FBcEMsQ0FGUDtBQUFBLFVBR0EsS0FBQSxFQUNFO0FBQUEsWUFBQSxLQUFBLEVBQU0sTUFBTjtBQUFBLFlBQ0EsTUFBQSxFQUFPLE9BRFA7V0FKRjtTQURGLENBSDRCO09BQTlCLENBSjRCO0tBQTlCLEVBRE07RUFBQSxDQXZCUjtDQUZlLENBN0ZqQixDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLGNBQWI7QUFBQSxFQUNBLE1BQUEsRUFBUSxTQUFBLEdBQUE7V0FDTixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsV0FBWDtLQUFOLEVBQThCO01BQzVCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxhQUFYO09BQU4sRUFDRSxDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxPQUFULENBREYsQ0FENEIsRUFHNUIsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFFBQUEsSUFBQSxFQUFLLHFCQUFMO09BQUosRUFDRSxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVcsT0FBWDtBQUFBLFFBQW9CLEdBQUEsRUFBSSxxQkFBeEI7T0FBTixDQURGLENBSDRCO0tBQTlCLEVBRE07RUFBQSxDQURSO0NBRGUsQ0FBakIsQ0FBQTs7OztBQ0FBLElBQUEsT0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxJQUNBLEdBQU8sT0FBQSxDQUFRLFNBQVIsQ0FEUCxDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQWtCLEtBQUssQ0FBQyxXQUFOLENBQ2hCO0FBQUEsRUFBQSxXQUFBLEVBQWEsVUFBYjtBQUFBLEVBQ0EsaUJBQUEsRUFBbUIsU0FBQSxHQUFBO0FBQ2pCLElBQUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLElBQUMsQ0FBQSxZQUF4QixDQUFBLENBQUE7QUFBQSxJQUNBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QixJQUFDLENBQUEsWUFBeEIsQ0FEQSxDQUFBO0FBQUEsSUFFQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLFVBQWYsRUFBMkIsSUFBQyxDQUFBLGNBQTVCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxXQUFELENBQUEsRUFKaUI7RUFBQSxDQURuQjtBQUFBLEVBT0Esb0JBQUEsRUFBc0IsU0FBQSxHQUFBO0FBQ3BCLElBQUEsTUFBTSxDQUFDLFVBQVAsR0FBb0IsSUFBcEIsQ0FBQTtBQUFBLElBQ0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEdBQVYsQ0FBYyxRQUFkLEVBQXdCLElBQUMsQ0FBQSxZQUF6QixDQURBLENBQUE7QUFBQSxJQUVBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxHQUFWLENBQWMsUUFBZCxFQUF3QixJQUFDLENBQUEsWUFBekIsQ0FGQSxDQUFBO1dBR0EsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEIsSUFBQyxDQUFBLGNBQTdCLEVBSm9CO0VBQUEsQ0FQdEI7QUFBQSxFQWFBLGtCQUFBLEVBQW9CLFNBQUEsR0FBQTtXQUNsQixJQUFDLENBQUEsV0FBRCxDQUFBLEVBRGtCO0VBQUEsQ0FicEI7QUFBQSxFQWlCQSxZQUFBLEVBQWMsU0FBQSxHQUFBO0FBQ1osUUFBQSxvQ0FBQTtBQUFBLElBQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxJQUFDLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFiLENBQUEsQ0FBRixDQUFWLENBQUE7QUFBQSxJQUNBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBZCxDQUFBLENBQUYsQ0FEUCxDQUFBO0FBQUEsSUFFQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLE1BQUYsQ0FGUCxDQUFBO0FBQUEsSUFHQSxFQUFBLEdBQUssT0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUhMLENBQUE7QUFBQSxJQUlBLFdBQUEsR0FBYyxJQUFJLENBQUMsU0FBTCxDQUFBLENBQUEsR0FBbUIsRUFBRSxDQUFDLEdBQUgsR0FBUyxFQUFFLENBQUMsTUFKN0MsQ0FBQTtBQUFBLElBS0EsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DLFdBQXBDLENBTEEsQ0FBQTtXQU1BLElBQUksQ0FBQyxHQUFMLENBQVMsT0FBVCxFQUFrQixFQUFBLEdBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFMLENBQUEsQ0FBQSxHQUFlLEVBQUUsQ0FBQyxLQUFsQixHQUEwQixFQUEzQixDQUFBLEdBQWlDLENBQWpDLENBQUYsR0FBc0MsSUFBeEQsRUFQWTtFQUFBLENBakJkO0FBQUEsRUEwQkEsY0FBQSxFQUFnQixTQUFDLEVBQUQsR0FBQTtBQUNaLFFBQUEsTUFBQTtBQUFBLElBQUEsRUFBQSxHQUFLLEVBQUUsQ0FBQyxPQUFSLENBQUE7QUFDQSxJQUFBLElBQUcsRUFBQSxLQUFNLEdBQU4sSUFBYSxFQUFBLEtBQU0sRUFBdEI7QUFDRSxNQUFBLEVBQUEsR0FBSyxJQUFDLENBQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQURGO0tBREE7QUFHQSxJQUFBLElBQUcsRUFBQSxLQUFNLEdBQU4sSUFBYSxFQUFBLEtBQU0sRUFBdEI7QUFDRSxNQUFBLEVBQUEsR0FBSyxJQUFDLENBQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQURGO0tBSEE7QUFLQSxJQUFBLElBQUcsVUFBSDthQUNFLE1BQU0sQ0FBQyxRQUFQLEdBQW1CLFNBQUEsR0FBUSxHQUQ3QjtLQU5ZO0VBQUEsQ0ExQmhCO0FBQUEsRUFtQ0EsV0FBQSxFQUFhLFNBQUEsR0FBQTtBQUNYLElBQUEsSUFBQyxDQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBbkIsQ0FBQSxDQUErQixDQUFDLFNBQWhDLEdBQTRDLHdCQUE1QyxDQUFBO1dBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTywyQkFBQSxHQUEwQixDQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBQSxDQUExQixHQUF3RCxPQUEvRCxFQUF1RSxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxJQUFELEdBQUE7ZUFDckUsS0FBQyxDQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBbkIsQ0FBQSxDQUErQixDQUFDLFNBQWhDLEdBQTRDLEtBRHlCO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdkUsRUFGVztFQUFBLENBbkNiO0FBQUEsRUF3Q0EsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEsY0FBQTtBQUFBLElBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBZCxDQUFBO0FBQUEsSUFDQSxRQUFBLEdBQVksZ0JBQUEsR0FBZSxDQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxDQUFDLEVBQWxCLENBQUEsQ0FBZixHQUFzQyxNQURsRCxDQUFBO1dBRUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsU0FBQSxFQUFXLFVBQVg7S0FBTixFQUE2QjtNQUMzQixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVcsc0JBQVg7QUFBQSxRQUFtQyxHQUFBLEVBQUssUUFBeEM7T0FBTixFQUNFLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxRQUFBLFNBQUEsRUFBVyxJQUFJLENBQUMsYUFBTCxDQUFtQixJQUFuQixDQUFYO09BQUwsRUFBMEM7UUFDeEMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFVLFVBQVY7U0FBUCxFQUFnQyxJQUFJLENBQUMsR0FBTCxHQUFXLENBQWQsR0FBcUIsR0FBckIsR0FBOEIsSUFBSSxDQUFDLEdBQWhFLENBRHdDLEVBRXhDLEVBQUEsR0FBRSxJQUFJLENBQUMsS0FBUCxHQUFjLEdBRjBCLEVBR3hDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVSxTQUFWO1NBQVAsRUFBNkIsR0FBQSxHQUFFLElBQUksQ0FBQyxFQUFwQyxDQUh3QztPQUExQyxDQURGLEVBTUUsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLFVBQVg7T0FBTixFQUE2QjtRQUMzQixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQyxJQUFBLEVBQU0sU0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQS9CO0FBQUEsVUFBc0MsU0FBQSxFQUFVLGVBQWhEO1NBQUosRUFBc0U7VUFDcEUsRUFBQSxHQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBRGtELEVBRXBFLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxZQUFBLFNBQUEsRUFBVyxnQkFBWDtXQUFQLEVBQW9DO1lBQ2xDLENBQUMsQ0FBQyxLQUFGLENBQVEsRUFBUixFQUFZLElBQVosQ0FEa0MsRUFFbEMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLGNBQUEsU0FBQSxFQUFXLFVBQVg7YUFBUCxFQUE4QixLQUE5QixDQUZrQyxFQUdsQyxPQUhrQztXQUFwQyxDQUZvRTtTQUF0RSxDQUQyQixFQVMzQixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQyxJQUFBLEVBQU0sU0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQS9CO0FBQUEsVUFBc0MsU0FBQSxFQUFVLGVBQWhEO1NBQUosRUFBc0U7VUFDcEUsRUFBQSxHQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBRGtELEVBRXBFLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxZQUFBLFNBQUEsRUFBVyxnQkFBWDtXQUFQLEVBQW9DO1lBQ2xDLE9BRGtDLEVBRWxDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxjQUFBLFNBQUEsRUFBVyxVQUFYO2FBQVAsRUFBOEIsS0FBOUIsQ0FGa0MsRUFHbEMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxFQUFSLEVBQVksSUFBWixDQUhrQztXQUFwQyxDQUZvRTtTQUF0RSxDQVQyQjtPQUE3QixDQU5GLENBRDJCLEVBeUIzQixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsUUFBQyxTQUFBLEVBQVcscUJBQVo7T0FBSixFQUF3QyxJQUFJLENBQUMsSUFBN0MsQ0F6QjJCLEVBMEIzQixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxHQUFBLEVBQUssUUFBTDtBQUFBLFFBQWUsR0FBQSxFQUFLLFFBQXBCO0FBQUEsUUFBOEIsU0FBQSxFQUFXLFVBQXpDO0FBQUEsUUFBcUQsR0FBQSxFQUFJLFNBQXpEO09BQU4sQ0ExQjJCLEVBMkIzQixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQyxTQUFBLEVBQVcsZUFBWjtBQUFBLFFBQTZCLEVBQUEsRUFBSSxlQUFqQztPQUFOLEVBQXlEO1FBQ3ZELENBQUMsQ0FBQyxFQUFGLENBQUssRUFBTCxFQUFTO1VBQ1Asc0JBRE8sRUFFUCxHQUZPLEVBR1AsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFlBQUEsSUFBQSxFQUFLLElBQUksQ0FBQyxHQUFWO1dBQUosRUFBbUIsc0JBQW5CLENBSE87U0FBVCxDQUR1RCxFQU12RCxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsVUFBQSxHQUFBLEVBQUksY0FBSjtTQUFOLEVBQ0UsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsY0FBUixDQURGLENBTnVEO09BQXpELENBM0IyQjtLQUE3QixFQUhNO0VBQUEsQ0F4Q1I7Q0FEZ0IsQ0FIbEIsQ0FBQTs7OztBQ0FBLElBQUEsaUNBQUE7RUFBQSxxSkFBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLElBRUEsR0FBTyxPQUFBLENBQVEsU0FBUixDQUZQLENBQUE7O0FBQUEsUUFJQSxHQUFXLE9BQUEsQ0FBUSxtQkFBUixDQUpYLENBQUE7O0FBQUEsVUFNQSxHQUFhLFNBQUMsR0FBRCxHQUFBOztJQUFDLE1BQUk7R0FDaEI7U0FBQSxHQUFHLENBQUMsR0FBSixDQUFRLFNBQUMsRUFBRCxHQUFBO0FBQ04sWUFBTyxFQUFQO0FBQUEsV0FDTyxFQURQO2VBQ2UsR0FEZjtBQUFBLFdBRU8sRUFGUDtlQUVlLEdBRmY7QUFBQSxXQUdPLEVBSFA7ZUFHZSxJQUhmO0FBQUEsV0FJTyxHQUpQO2VBSWdCLEdBSmhCO0FBQUEsV0FLTyxHQUxQO2VBS2dCLElBTGhCO0FBQUEsV0FNTyxHQU5QO2VBTWdCLElBTmhCO0FBQUEsV0FPTyxHQVBQO2VBT2dCLElBUGhCO0FBQUEsV0FRTyxHQVJQO2VBUWdCLEdBUmhCO0FBQUEsV0FTTyxHQVRQO2VBU2dCLElBVGhCO0FBQUEsV0FVTyxHQVZQO2VBVWdCLElBVmhCO0FBQUEsV0FXTyxHQVhQO2VBV2dCLElBWGhCO0FBQUE7ZUFZTyxHQVpQO0FBQUEsS0FETTtFQUFBLENBQVIsRUFEVztBQUFBLENBTmIsQ0FBQTs7QUFBQSxNQXNCTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FFZjtBQUFBLEVBQUEsV0FBQSxFQUFhLFdBQWI7QUFBQSxFQUNBLFlBQUEsRUFBYyxTQUFDLEtBQUQsR0FBQTtBQUNaLFFBQUEsWUFBQTtBQUFBLElBQUEsTUFBQSxzREFBcUIsQ0FBRSx3QkFBdkIsQ0FBQTtXQUNBO0FBQUEsTUFBQSxRQUFBLEVBQWEsTUFBSCxHQUFlLElBQWYsR0FBeUIsS0FBbkM7QUFBQSxNQUNBLE9BQUEsRUFBUyxLQURUO0FBQUEsTUFFQSxlQUFBLEVBQW9CLE1BQUgsR0FBZSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosQ0FBZixHQUFxQyxFQUZ0RDtBQUFBLE1BR0EsSUFBQSxFQUFNLE9BSE47QUFBQSxNQUlBLE1BQUEsRUFBUSxJQUpSO0FBQUEsTUFLQSxJQUFBLEVBQU0sS0FMTjtBQUFBLE1BTUEsV0FBQSxFQUFhLEtBTmI7TUFGWTtFQUFBLENBRGQ7QUFBQSxFQVdBLHlCQUFBLEVBQTJCLFNBQUMsU0FBRCxHQUFBO0FBQ3pCLElBQUEsSUFBRyx1QkFBSDthQUNFLElBQUMsQ0FBQSxRQUFELENBQVUsU0FBUyxDQUFDLEtBQXBCLEVBREY7S0FBQSxNQUFBO2FBR0UsSUFBQyxDQUFBLFFBQUQsQ0FBVSxJQUFDLENBQUEsWUFBRCxDQUFBLENBQVYsRUFIRjtLQUR5QjtFQUFBLENBWDNCO0FBQUEsRUFpQkEsZUFBQSxFQUFpQixTQUFBLEdBQUE7V0FDZixDQUFDLENBQUMsS0FBRixDQUFRLElBQUMsQ0FBQSxZQUFELENBQWMsSUFBQyxDQUFBLEtBQWYsQ0FBUixFQUErQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQXRDLEVBRGU7RUFBQSxDQWpCakI7QUFBQSxFQW9CQSxZQUFBLEVBQWMsU0FBQSxHQUFBO0FBQ1osUUFBQSxlQUFBO0FBQUEsSUFBQSxJQUFHLDREQUFIO0FBQ0UsTUFBQSxTQUFBLEdBQVksSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBZCxDQUFtQixJQUFJLENBQUMsYUFBeEIsQ0FDVixDQUFDLE1BRFMsQ0FDRixJQUFJLENBQUMsWUFESCxDQUVWLENBQUMsTUFGUyxDQUVGLElBQUksQ0FBQyxZQUZILENBQVosQ0FERjtLQUFBO0FBSUEsSUFBQSxJQUFPLGlCQUFQO0FBQXVCLE1BQUEsU0FBQSxHQUFZLEVBQVosQ0FBdkI7S0FKQTtBQUtBLFdBQU8sU0FBUCxDQU5ZO0VBQUEsQ0FwQmQ7QUFBQSxFQTZCQSxnQkFBQSxFQUFrQixTQUFBLEdBQUE7QUFDaEIsSUFBQSxJQUFHLHlCQUFIO0FBQ0UsYUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFiLENBQW9CLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLEVBQUQsR0FBQTtBQUN6QixjQUFBLElBQUE7QUFBQSxVQUFBLFdBQUcsRUFBRSxDQUFDLEVBQUgsRUFBQSxlQUFTLEtBQUMsQ0FBQSxLQUFLLENBQUMsTUFBaEIsRUFBQSxJQUFBLE1BQUg7QUFDRSxtQkFBTyxFQUFQLENBREY7V0FEeUI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQixDQUFQLENBREY7S0FBQTtXQUlBLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFMUztFQUFBLENBN0JsQjtBQUFBLEVBcUNBLGtCQUFBLEVBQW9CLFNBQUEsR0FBQTtBQUNsQixRQUFBLG1DQUFBO0FBQUEsSUFBQSxLQUFBLEdBQVEsSUFBQyxDQUFBLGdCQUFELENBQUEsQ0FBUixDQUFBO0FBQUEsSUFDQSxPQUFnQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFaLENBQWtCLEdBQWxCLENBQWhCLEVBQUMsY0FBRCxFQUFPLGVBRFAsQ0FBQTtBQUFBLElBR0EsU0FBQTtBQUFZLGNBQU8sSUFBUDtBQUFBLGFBQ0wsU0FESztpQkFDVSxTQUFDLEVBQUQsR0FBQTttQkFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQWhCO1VBQUEsRUFEVjtBQUFBLGFBRUwsTUFGSztpQkFFTyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLElBQWpCLEVBRlA7QUFBQSxhQUdMLEtBSEs7aUJBR00sTUFITjtBQUFBLGFBSUwsVUFKSztpQkFJVyxTQUFDLEVBQUQsR0FBQTttQkFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQWpCO1VBQUEsRUFKWDtBQUFBO2lCQUtMLENBQUMsT0FBRCxFQUFVLElBQVYsRUFMSztBQUFBO1FBSFosQ0FBQTtBQUFBLElBU0EsS0FBQSxHQUFRLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVCxFQUFnQixTQUFoQixDQVRSLENBQUE7QUFXQSxJQUFBLElBQUcsS0FBQSxLQUFTLEtBQVo7QUFDRSxNQUFBLEtBQUssQ0FBQyxPQUFOLENBQUEsQ0FBQSxDQURGO0tBWEE7V0FjQSxNQWZrQjtFQUFBLENBckNwQjtBQUFBLEVBc0RBLFVBQUEsRUFBWSxTQUFDLEtBQUQsR0FBQTtBQUNWLFFBQUEsSUFBQTs7TUFEVyxRQUFRLElBQUMsQ0FBQSxrQkFBRCxDQUFBO0tBQ25CO0FBQUEsSUFBQSxJQUFHLHlCQUFIO0FBQ0UsYUFBTyxDQUFDLEtBQUQsQ0FBUCxDQURGO0tBQUE7QUFBQSxJQUdBLElBQUEsR0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLElBSGQsQ0FBQTtBQUlBLElBQUEsSUFBRyxJQUFBLEtBQVEsTUFBWDtBQUNFLE1BQUEsSUFBQSxHQUFPLE9BQVAsQ0FERjtLQUpBO0FBTUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBVjtBQUNFLGFBQU8sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxLQUFWLEVBQWlCLElBQWpCLENBQVAsQ0FERjtLQVBVO0VBQUEsQ0F0RFo7QUFBQSxFQWlFQSxjQUFBLEVBQWdCLFNBQUEsR0FBQTtXQUNkLElBQUMsQ0FBQSxRQUFELENBQ0U7QUFBQSxNQUFBLFFBQUEsRUFBVSxJQUFDLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFmLENBQUEsQ0FBMkIsQ0FBQyxPQUF0QztLQURGLEVBRGM7RUFBQSxDQWpFaEI7QUFBQSxFQXFFQSxhQUFBLEVBQWUsU0FBQSxHQUFBO1dBQ2IsSUFBQyxDQUFBLFFBQUQsQ0FDRTtBQUFBLE1BQUEsT0FBQSxFQUFTLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQWQsQ0FBQSxDQUEwQixDQUFDLE9BQXBDO0tBREYsRUFEYTtFQUFBLENBckVmO0FBQUEsRUF5RUEsc0JBQUEsRUFBd0IsU0FBQSxHQUFBO0FBQ3RCLFFBQUEsOEJBQUE7QUFBQSxJQUFBLEtBQUEsR0FBUSxJQUFDLENBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFqQixDQUFBLENBQTZCLENBQUMsS0FBdEMsQ0FBQTtBQUFBLElBRUEsS0FBQSxHQUFRLEtBQUssQ0FBQyxNQUFOLENBQWEsTUFBYixDQUFBLEtBQXdCLENBQUEsQ0FGaEMsQ0FBQTtBQUFBLElBTUEsR0FBQSw0REFBdUMsQ0FBRSxHQUFuQyxDQUF1QyxTQUFDLEVBQUQsR0FBQTtBQUUzQyxNQUFBLEVBQUEsR0FBSyxFQUFFLENBQUMsT0FBSCxDQUFXLEtBQVgsRUFBa0IsRUFBbEIsQ0FBTCxDQUFBO2FBQ0EsUUFBQSxDQUFTLEVBQVQsRUFBYSxFQUFiLEVBSDJDO0lBQUEsQ0FBdkMsVUFOTixDQUFBO0FBVUEsSUFBQSxJQUFHLEtBQUEsS0FBUyxFQUFULElBQW1CLGFBQXRCO0FBQ0UsTUFBQSxLQUFBLEdBQ0U7QUFBQSxRQUFBLGVBQUEsRUFBaUIsS0FBakI7QUFBQSxRQUNBLE1BQUEsRUFBUSxJQURSO09BREYsQ0FERjtLQUFBLE1BQUE7QUFLRSxNQUFBLElBQUcsS0FBSDtBQUNFLFFBQUEsR0FBQSxHQUFNLFVBQUEsQ0FBVyxHQUFYLENBQU4sQ0FERjtPQUFBO0FBQUEsTUFFQSxHQUFBLEdBQU0sR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFJLENBQUMsYUFBZCxDQUE0QixDQUFDLE1BQTdCLENBQW9DLElBQUksQ0FBQyxrQkFBekMsQ0FGTixDQUFBO0FBQUEsTUFHQSxLQUFBLEdBQ0U7QUFBQSxRQUFBLGVBQUEsRUFBaUIsS0FBakI7QUFBQSxRQUNBLFFBQUEsRUFBVSxJQURWO0FBQUEsUUFFQSxNQUFBLEVBQVEsR0FGUjtPQUpGLENBTEY7S0FWQTtXQXVCQSxJQUFDLENBQUEsUUFBRCxDQUFVLEtBQVYsRUF4QnNCO0VBQUEsQ0F6RXhCO0FBQUEsRUFvR0Esb0JBQUEsRUFBc0IsU0FBQSxHQUFBO0FBQ3BCLFFBQUEsU0FBQTtBQUFBLElBQUEsU0FBQSxHQUFZLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FBWixDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsUUFBRCxDQUNFO0FBQUEsTUFBQSxlQUFBLEVBQWlCLFNBQVMsQ0FBQyxJQUFWLENBQWUsR0FBZixDQUFqQjtLQURGLENBRkEsQ0FBQTtBQUtBLElBQUEsSUFBRyxtQkFBQSxJQUFlLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQXJDO2FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixTQUF0QixFQURGO0tBQUEsTUFBQTthQUdFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBRCxDQUFQLENBQWUsUUFBZixFQUhGO0tBTm9CO0VBQUEsQ0FwR3RCO0FBQUEsRUErR0EscUJBQUEsRUFBdUIsU0FBQSxHQUFBO0FBQ3JCLElBQUEsSUFBQyxDQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBakIsQ0FBQSxDQUE2QixDQUFDLEtBQTlCLEdBQXNDLEVBQXRDLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxRQUFELENBQ0U7QUFBQSxNQUFBLE1BQUEsRUFBTyxJQUFQO0FBQUEsTUFDQSxlQUFBLEVBQWlCLEVBRGpCO0tBREYsQ0FEQSxDQUFBO1dBS0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFELENBQVAsQ0FBZSxRQUFmLEVBTnFCO0VBQUEsQ0EvR3ZCO0FBQUEsRUF1SEEsY0FBQSxFQUFnQixTQUFDLElBQUQsRUFBcUIsR0FBckIsR0FBQTtBQUNkLFFBQUEsU0FBQTs7TUFEZSxPQUFPLElBQUMsQ0FBQSxLQUFLLENBQUM7S0FDN0I7QUFBQSxJQUFBLE1BQUEsR0FBUyxRQUFBLENBQVMsR0FBVCxFQUFjLEVBQWQsQ0FBVCxDQUFBO0FBQ0EsWUFBTyxJQUFQO0FBQUEsV0FDTyxLQURQO0FBRUksUUFBQSxDQUFBLEdBQU8sTUFBQSxHQUFTLENBQVosR0FBbUIsR0FBbkIsR0FBNEIsRUFBaEMsQ0FBQTtBQUNBLFFBQUEsSUFBRyxNQUFBLEtBQVUsQ0FBYjtpQkFBb0IsVUFBcEI7U0FBQSxNQUFBO2lCQUFtQyxFQUFBLEdBQUUsR0FBRixHQUFPLEtBQVAsR0FBVyxFQUE5QztTQUhKO0FBQ087QUFEUCxXQUlPLE1BSlA7QUFLSSxRQUFBLElBQUcsR0FBQSxLQUFPLElBQVY7aUJBQ0UsTUFERjtTQUFBLE1BRUssSUFBRyxHQUFBLEtBQU8sU0FBVjtpQkFDSCxVQURHO1NBQUEsTUFBQTtpQkFHSCxHQUFHLENBQUMsV0FBSixDQUFBLEVBSEc7U0FQVDtBQUlPO0FBSlAsV0FXTyxPQVhQO0FBWUksZ0JBQU8sTUFBUDtBQUFBLGVBQ08sQ0FEUDttQkFDYyxZQURkO0FBQUEsZUFFTyxDQUZQO21CQUVjLFVBRmQ7QUFBQSxlQUdPLENBSFA7bUJBR2MsV0FIZDtBQUFBLFNBWko7QUFBQSxLQUZjO0VBQUEsQ0F2SGhCO0FBQUEsRUEwSUEsZUFBQSxFQUFpQixTQUFDLElBQUQsR0FBQTtBQUNmLElBQUEsSUFBQyxDQUFBLFFBQUQsQ0FBVTtBQUFBLE1BQUUsTUFBQSxJQUFGO0tBQVYsQ0FBQSxDQUFBO1dBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQixFQUZlO0VBQUEsQ0ExSWpCO0FBQUEsRUE4SUEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEsMENBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxJQUFELEVBQU8sT0FBUCxHQUFBO0FBQ1QsWUFBQSx1QkFBQTtBQUFBLFFBQUEsU0FBQSxHQUFZLEVBQUEsQ0FBRztBQUFBLFVBQUEsTUFBQSxFQUFRLEtBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxLQUFlLElBQXZCO1NBQUgsQ0FBWixDQUFBO0FBQUEsUUFDQSxHQUFBLEdBQU0sRUFBQSxHQUFFLElBQUYsR0FBUSxNQURkLENBQUE7QUFBQSxRQUVBLE9BQUEsR0FBVSxTQUFBLEdBQUE7aUJBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQixFQURRO1FBQUEsQ0FGVixDQUFBO2VBSUEsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUMsU0FBQSxPQUFEO0FBQUEsVUFBVSxLQUFBLEdBQVY7QUFBQSxVQUFlLFdBQUEsU0FBZjtTQUFKLEVBQStCLE9BQS9CLEVBTFM7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFYLENBQUE7QUFBQSxJQU9BLEtBQUEsR0FBUSxJQUFDLENBQUEsVUFBRCxDQUFZLElBQUMsQ0FBQSxrQkFBRCxDQUFBLENBQVosQ0FQUixDQUFBO0FBQUEsSUFTQSxTQUFBLEdBQVksQ0FBQyxDQUFDLEdBQUYsQ0FBTSxLQUFOLEVBQWEsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUMsS0FBRCxFQUFRLEdBQVIsR0FBQTtBQUN2QixZQUFBLGVBQUE7QUFBQSxRQUFBLGVBQUEsR0FBa0IsSUFBbEIsQ0FBQTtBQUNBLFFBQUEsSUFBTywwQkFBUDtBQUNFLFVBQUEsZUFBQSxHQUFrQixDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsWUFBQSxTQUFBLEVBQVUsdUJBQVY7V0FBTCxFQUNoQixLQUFDLENBQUEsY0FBRCxDQUFnQixLQUFDLENBQUEsS0FBSyxDQUFDLElBQXZCLEVBQTZCLEdBQTdCLENBRGdCLENBQWxCLENBREY7U0FEQTtlQUlBLENBQUMsQ0FBQyxHQUFGLENBQU0sRUFBTixFQUFVO1VBQ1IsZUFEUSxFQUVSLFFBQUEsQ0FDRTtBQUFBLFlBQUEsT0FBQSxFQUFTLEtBQUMsQ0FBQSxLQUFLLENBQUMsT0FBaEI7QUFBQSxZQUNBLFFBQUEsRUFBVSxLQUFDLENBQUEsS0FBSyxDQUFDLFFBRGpCO0FBQUEsWUFFQSxLQUFBLEVBQU8sS0FGUDtBQUFBLFlBR0EsSUFBQSxFQUFNLEtBQUMsQ0FBQSxLQUFLLENBQUMsSUFIYjtXQURGLENBRlE7U0FBVixFQUx1QjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWIsQ0FUWixDQUFBO0FBQUEsSUF1QkEsY0FBQSxHQUFpQixFQUFBLENBQ2Y7QUFBQSxNQUFBLFdBQUEsRUFBYSxJQUFiO0FBQUEsTUFDQSxxQkFBQSxFQUF1Qix5QkFEdkI7QUFBQSxNQUVBLHFCQUFBLEVBQXVCLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFGOUI7S0FEZSxDQXZCakIsQ0FBQTtXQTRCQSxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsY0FBWDtLQUFOLEVBQWlDO01BQy9CLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxpQkFBWDtPQUFOLEVBQW9DO1FBQ2xDLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxVQUFBLFNBQUEsRUFBVyxVQUFYO1NBQU4sRUFBNkI7VUFDM0IsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFlBQUEsU0FBQSxFQUFXLGNBQVg7V0FBTixFQUFpQztZQUMvQixDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsY0FBQSxTQUFBLEVBQVcsT0FBWDthQUFQLEVBQTJCLFVBQTNCLENBRCtCLEVBRS9CLFFBQUEsQ0FBUyxPQUFULEVBQWtCLE9BQWxCLENBRitCLEVBRy9CLFFBQUEsQ0FBUyxLQUFULEVBQWdCLEtBQWhCLENBSCtCLEVBSS9CLFFBQUEsQ0FBUyxNQUFULEVBQWlCLE1BQWpCLENBSitCO1dBQWpDLENBRDJCLEVBTzNCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxZQUFBLFNBQUEsRUFBVyxjQUFYO1dBQU4sRUFBaUM7WUFDL0IsQ0FBQyxDQUFDLEtBQUYsQ0FBUTtBQUFBLGNBQUMsT0FBQSxFQUFRLEVBQVQ7QUFBQSxjQUFhLFNBQUEsRUFBVSxFQUF2QjthQUFSLEVBQW9DLFFBQXBDLENBRCtCLEVBRS9CLENBQUMsQ0FBQyxDQUFGLENBQ0U7QUFBQSxjQUFBLE9BQUEsRUFBUyxJQUFDLENBQUEsZUFBZSxDQUFDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQVQ7QUFBQSxjQUNBLEtBQUEsRUFBTyxZQURQO0FBQUEsY0FFQSxTQUFBLEVBQVksZ0JBQUEsR0FBZSxDQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxLQUFlLEtBQWxCLEdBQTZCLFFBQTdCLEdBQTJDLEVBQTNDLENBRjNCO2FBREYsQ0FGK0IsRUFNL0IsQ0FBQyxDQUFDLENBQUYsQ0FDRTtBQUFBLGNBQUEsT0FBQSxFQUFTLElBQUMsQ0FBQSxlQUFlLENBQUMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsQ0FBVDtBQUFBLGNBQ0EsS0FBQSxFQUFPLGVBRFA7QUFBQSxjQUVBLFNBQUEsRUFBWSxVQUFBLEdBQVMsQ0FBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsS0FBZSxPQUFsQixHQUErQixRQUEvQixHQUE2QyxFQUE3QyxDQUZyQjthQURGLENBTitCLEVBVS9CLENBQUMsQ0FBQyxDQUFGLENBQ0U7QUFBQSxjQUFBLE9BQUEsRUFBUyxJQUFDLENBQUEsZUFBZSxDQUFDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLENBQVQ7QUFBQSxjQUNBLEtBQUEsRUFBTyxXQURQO0FBQUEsY0FFQSxTQUFBLEVBQVksa0JBQUEsR0FBaUIsQ0FBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsS0FBZSxNQUFsQixHQUE4QixRQUE5QixHQUE0QyxFQUE1QyxDQUY3QjthQURGLENBVitCO1dBQWpDLENBUDJCO1NBQTdCLENBRGtDLEVBMkNsQyxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsVUFBQSxTQUFBLEVBQVcsNkJBQVg7U0FBTixFQUFnRDtVQUM5QyxDQUFDLENBQUMsS0FBRixDQUFRO0FBQUEsWUFBQSxPQUFBLEVBQVEsWUFBUjtBQUFBLFlBQXNCLFNBQUEsRUFBVSxrQkFBaEM7V0FBUixFQUE0RCxnQkFBNUQsQ0FEOEMsRUFFOUMsQ0FBQyxDQUFDLEtBQUYsQ0FDRTtBQUFBLFlBQUEsSUFBQSxFQUFNLFlBQU47QUFBQSxZQUNBLElBQUEsRUFBTSxNQUROO0FBQUEsWUFFQSxTQUFBLEVBQVcsa0JBRlg7QUFBQSxZQUdBLEdBQUEsRUFBSyxZQUhMO0FBQUEsWUFJQSxRQUFBLEVBQVUsSUFBQyxDQUFBLHNCQUpYO0FBQUEsWUFLQSxNQUFBLEVBQVEsSUFBQyxDQUFBLG9CQUxUO0FBQUEsWUFNQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxlQU5kO0FBQUEsWUFPQSxXQUFBLEVBQWEscUNBUGI7V0FERixDQUY4QyxFQVc5QyxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsWUFBQyxTQUFBLEVBQVUsMEJBQVg7QUFBQSxZQUF1QyxPQUFBLEVBQVEsSUFBQyxDQUFBLHFCQUFoRDtXQUFKLEVBQTRFLE9BQTVFLENBWDhDO1NBQWhELENBM0NrQztPQUFwQyxDQUQrQixFQTBEL0IsU0ExRCtCO0tBQWpDLEVBN0JNO0VBQUEsQ0E5SVI7Q0FGZSxDQXRCakIsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxnQkFBYjtBQUFBLEVBQ0EsTUFBQSxFQUFRLFNBQUEsR0FBQTtXQUNOLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLFNBQUEsRUFBVyxlQUFYO0tBQU4sRUFBa0MsQ0FDaEMsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLEVBQVMsV0FBVCxDQURnQyxDQUFsQyxFQURNO0VBQUEsQ0FEUjtDQURlLENBQWpCLENBQUE7Ozs7QUNBQSxJQUFBLENBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLFVBQWI7QUFBQSxFQUNBLE1BQUEsRUFBUSxTQUFBLEdBQUE7V0FDTixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQSxTQUFBLEVBQVcsVUFBWDtLQUFOLEVBQTZCO01BQzNCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxLQUFYO09BQU4sRUFBd0I7UUFDdEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFVBQUEsU0FBQSxFQUFXLFdBQVg7U0FBTixFQUE4QjtVQUM1QixDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsWUFBQSxTQUFBLEVBQVcsYUFBWDtXQUFMLEVBQStCO1lBQzdCLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxjQUFBLFNBQUEsRUFBVyxjQUFYO2FBQVAsRUFBa0MsS0FBbEMsQ0FENkIsRUFFN0IsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLGNBQUEsU0FBQSxFQUFXLGtCQUFYO2FBQVAsRUFBc0MsT0FBdEMsQ0FGNkI7V0FBL0IsQ0FENEIsRUFLNUIsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFlBQUEsU0FBQSxFQUFVLFlBQVY7V0FBSixFQUE0QjtZQUMxQiwwQ0FEMEIsRUFFMUIsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLGNBQUEsSUFBQSxFQUFLLGdEQUFMO2FBQUosRUFBMkQsbUJBQTNELENBRjBCLEVBRzFCLCtCQUgwQixFQUkxQixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsY0FBQSxJQUFBLEVBQU0sNkJBQU47YUFBSixFQUF5QyxtQkFBekMsQ0FKMEIsRUFLMUIsR0FMMEI7V0FBNUIsQ0FMNEI7U0FBOUIsQ0FEc0I7T0FBeEIsQ0FEMkIsRUFnQjNCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxRQUFBLFNBQUEsRUFBVyxLQUFYO09BQU4sRUFBd0I7UUFDdEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFVBQUEsU0FBQSxFQUFXLFVBQVg7U0FBTixFQUE2QjtVQUMzQixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsWUFBQSxTQUFBLEVBQVcsV0FBWDtBQUFBLFlBQXdCLElBQUEsRUFBTSxTQUE5QjtXQUFKLEVBQTZDO1lBQzNDLENBQUMsQ0FBQyxFQUFGLENBQUssRUFBTCxFQUFTLGVBQVQsQ0FEMkMsRUFFM0MsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLGNBQUEsU0FBQSxFQUFXLGdCQUFYO0FBQUEsY0FBNkIsR0FBQSxFQUFLLHdCQUFsQzthQUFOLENBRjJDLEVBRzNDLENBQUMsQ0FBQyxDQUFGLENBQUksRUFBSixFQUFRLHVDQUFSLENBSDJDO1dBQTdDLENBRDJCO1NBQTdCLENBRHNCLEVBUXRCLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxVQUFBLFNBQUEsRUFBVyxVQUFYO1NBQU4sRUFBNkI7VUFDM0IsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFlBQUEsU0FBQSxFQUFXLDJCQUFYO0FBQUEsWUFBd0MsSUFBQSxFQUFNLFNBQTlDO1dBQUosRUFBNkQ7WUFDM0QsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLEVBQVMsWUFBVCxDQUQyRCxFQUUzRCxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsY0FBQSxTQUFBLEVBQVcsZ0JBQVg7QUFBQSxjQUE2QixHQUFBLEVBQUssd0JBQWxDO2FBQU4sQ0FGMkQsRUFHM0QsQ0FBQyxDQUFDLENBQUYsQ0FBSSxFQUFKLEVBQVEsd0NBQVIsQ0FIMkQ7V0FBN0QsQ0FEMkI7U0FBN0IsQ0FSc0I7T0FBeEIsQ0FoQjJCO0tBQTdCLEVBRE07RUFBQSxDQURSO0NBRGUsQ0FGakIsQ0FBQTs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUFpQixLQUFLLENBQUMsV0FBTixDQUNmO0FBQUEsRUFBQSxXQUFBLEVBQWEsWUFBYjtBQUFBLEVBQ0EsTUFBQSxFQUFRLFNBQUEsR0FBQTtXQUNOLENBQUMsQ0FBQyxHQUFGLENBQU0sRUFBTixFQUFVO01BQ1IsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLEVBQVMsVUFBVCxDQURRLEVBRVIsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFFBQUEsU0FBQSxFQUFVLE1BQVY7T0FBSixFQUFzQjtRQUNwQiw0REFEb0IsRUFFcEIsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxFQUFMLENBRm9CLEVBR3BCLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxVQUFBLElBQUEsRUFBSyxTQUFMO1NBQUosRUFBb0IsbUNBQXBCLENBSG9CO09BQXRCLENBRlE7S0FBVixFQURNO0VBQUEsQ0FEUjtDQURlLENBRmpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsY0FBUixDQUFBLENBQXdCLFNBQXhCLEVBQW1DLENBQUMsVUFBRCxDQUFuQyxDQUFqQixDQUFBOzs7O0FDQUEsSUFBQSw2REFBQTs7QUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLFFBQVIsQ0FBUCxDQUFBOztBQUFBLElBQ0EsR0FBTyxPQUFBLENBQVEsUUFBUixDQURQLENBQUE7O0FBQUEsT0FFQSxHQUFVLE9BQUEsQ0FBUSwyQkFBUixDQUZWLENBQUE7O0FBQUEsc0JBR0EsR0FBeUIsT0FBQSxDQUFRLCtCQUFSLENBSHpCLENBQUE7O0FBQUEsZ0JBS0EsR0FBbUIsTUFBTSxDQUFBLFNBQUUsQ0FBQSxRQUwzQixDQUFBOztBQUFBLE1BTU0sQ0FBQSxTQUFFLENBQUEsUUFBUixHQUFtQixTQUFBLEdBQUE7QUFDakIsRUFBQSxJQUFDLENBQUEsWUFBRCxHQUFnQixJQUFDLENBQUEsUUFBRCxDQUFBLENBQWhCLENBQUE7U0FDQSxnQkFBZ0IsQ0FBQyxLQUFqQixDQUF1QixJQUF2QixFQUE2QixTQUE3QixFQUZpQjtBQUFBLENBTm5CLENBQUE7O0FBQUEsTUFVTSxDQUFDLE9BQVAsR0FDRTtBQUFBLEVBQUEsZUFBQSxFQUFpQixTQUFBLEdBQUE7V0FDZjtBQUFBLE1BQUEsTUFBQSxFQUFRLEdBQUEsQ0FBQSxNQUFSO01BRGU7RUFBQSxDQUFqQjtBQUFBLEVBSUEsT0FBQSxFQUFTLFNBQUMsSUFBRCxFQUFPLFNBQVAsRUFBa0IsVUFBbEIsRUFBaUMsSUFBakMsR0FBQTtBQUNQLFFBQUEsSUFBQTs7TUFEeUIsYUFBVztLQUNwQzs7TUFEd0MsT0FBSztLQUM3QztBQUFBLElBQUEsSUFBRyxpQkFBSDtBQUFtQixNQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLFNBQWxCLENBQUEsQ0FBbkI7S0FBQTtXQUNBLElBQUMsQ0FBQSxRQUFELENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTTtBQUFBLFFBQUMsTUFBQSxJQUFEO0FBQUEsUUFBTyxNQUFBLElBQVA7T0FBTjtBQUFBLE1BQ0EsVUFBQSxFQUFZLFVBRFo7QUFBQSxNQUVBLE9BQUEsMENBQW9CLENBQUUsY0FBYixLQUFxQixJQUY5QjtLQURGLEVBRk87RUFBQSxDQUpUO0FBQUEsRUFXQSxpQkFBQSxFQUFtQixTQUFBLEdBQUE7QUFDakIsUUFBQSxrQkFBQTtBQUFBLElBQUEsVUFBQSxHQUFhLFNBQUMsSUFBRCxFQUFPLFNBQVAsRUFBa0IsVUFBbEIsRUFBOEIsSUFBOUIsR0FBQTtBQUNYLFVBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBUixDQUFBO0FBRUEsTUFBQSxJQUFHLCtDQUFIO0FBQ0UsUUFBQSxJQUFHLENBQUEsQ0FBSyxDQUFDLE9BQUYsQ0FBVSxLQUFLLENBQUMsTUFBaEIsQ0FBUDtBQUNFLFVBQUEsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFDLEtBQUssQ0FBQyxNQUFQLENBQWYsQ0FERjtTQUFBO0FBQUEsUUFFQSxLQUFLLENBQUMsTUFBTixHQUFlLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYixDQUFpQixTQUFDLEVBQUQsR0FBQTtpQkFDOUIsUUFBQSxDQUFTLEVBQVQsRUFBYSxFQUFiLEVBRDhCO1FBQUEsQ0FBakIsQ0FGZixDQURGO09BRkE7YUFPQSxJQUFDLENBQUEsT0FBRCxDQUFTLElBQVQsRUFBZSxTQUFmLEVBQTBCLFVBQTFCLEVBQ0U7QUFBQSxRQUFBLEtBQUEsRUFBTyxLQUFQO09BREYsRUFSVztJQUFBLENBQWIsQ0FBQTtBQUFBLElBV0EsTUFBQSxHQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFYaEIsQ0FBQTtBQUFBLElBYUEsSUFBSSxDQUFDLEVBQUwsQ0FBUSxVQUFSLEVBQW9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsQ0FBcUIsTUFBckIsQ0FBcEIsQ0FiQSxDQUFBO0FBQUEsSUFlQSxNQUFNLENBQUMsU0FBUCxDQUNFO0FBQUEsTUFBQSxRQUFBLEVBQVUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsSUFBZCxFQUFvQixRQUFwQixFQUE4QixRQUE5QixDQUFWO0tBREYsQ0FmQSxDQUFBO0FBQUEsSUFtQkEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxHQUFWLEVBQWUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixNQUE1QixDQUFmLENBbkJBLENBQUE7QUFBQSxJQXNCQSxNQUFNLENBQUMsRUFBUCxDQUFVLFdBQVYsRUFBdUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUMsRUFBRCxHQUFBO0FBQ3JCLFlBQUEsbURBQUE7QUFBQSxRQUFBLEVBQUEsR0FBSyxRQUFBLENBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBTCxDQUFBO0FBQUEsUUFDQSxNQUFBLEdBQVksRUFBQSxLQUFNLEdBQVQsR0FBa0IsQ0FBbEIsR0FBeUIsRUFBQSxHQUFLLENBRHZDLENBQUE7QUFBQSxRQUVBLE1BQUEsR0FBWSxFQUFBLEtBQU0sQ0FBVCxHQUFnQixHQUFoQixHQUF5QixFQUFBLEdBQUssQ0FGdkMsQ0FBQTtBQUFBLFFBR0EsSUFBQSxHQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBQyxDQUFBLEtBQUssQ0FBQyxLQUFkLEVBQXFCO0FBQUEsVUFBQSxFQUFBLEVBQUksRUFBSjtTQUFyQixDQUhQLENBQUE7QUFBQSxRQUlBLFFBQUEsR0FBVyxDQUFDLENBQUMsSUFBRixDQUFPLEtBQUMsQ0FBQSxLQUFLLENBQUMsS0FBZCxFQUFxQjtBQUFBLFVBQUEsRUFBQSxFQUFJLE1BQUo7U0FBckIsQ0FKWCxDQUFBO0FBQUEsUUFLQSxRQUFBLEdBQVksQ0FBQyxDQUFDLElBQUYsQ0FBTyxLQUFDLENBQUEsS0FBSyxDQUFDLEtBQWQsRUFBcUI7QUFBQSxVQUFBLEVBQUEsRUFBSSxNQUFKO1NBQXJCLENBTFosQ0FBQTtBQUFBLFFBTUEsU0FBQSxHQUFZLEVBQUEsR0FBRSxJQUFJLENBQUMsS0FBUCxHQUFjLEtBQWQsR0FBa0IsSUFBSSxDQUFDLEVBQXZCLEdBQTJCLEdBTnZDLENBQUE7ZUFPQSxLQUFDLENBQUEsT0FBRCxDQUFTLE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsT0FBNUIsRUFBcUM7QUFBQSxVQUFDLE1BQUEsSUFBRDtBQUFBLFVBQU8sVUFBQSxRQUFQO0FBQUEsVUFBaUIsVUFBQSxRQUFqQjtTQUFyQyxFQVJxQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZCLENBdEJBLENBQUE7QUFBQSxJQWlDQSxNQUFNLENBQUMsRUFBUCxDQUFVLFlBQVYsRUFBd0IsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQyxXQUFqQyxFQUE4QyxXQUE5QyxDQUF4QixDQWpDQSxDQUFBO0FBQUEsSUFvQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLElBQWQsRUFBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFBc0MsT0FBdEMsQ0FBcEIsQ0FwQ0EsQ0FBQTtBQUFBLElBdUNBLE1BQU0sQ0FBQyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFVLENBQUMsSUFBWCxDQUFnQixJQUFoQixFQUFzQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxDQUExQixDQXZDQSxDQUFBO0FBQUEsSUEwQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxNQUFELEVBQVMsYUFBVCxHQUFBO0FBSWhDLFlBQUEsd0dBQUE7QUFBQSxRQUFBLElBQU8sZ0JBQUosSUFBZSxNQUFBLEtBQVUsRUFBNUI7QUFDRSxVQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQWEsQ0FBQyxRQUFkLENBQXVCLEVBQXZCLENBQTBCLENBQUMsS0FBM0IsQ0FBaUMsQ0FBakMsRUFBbUMsRUFBbkMsQ0FBVCxDQUFBO0FBQUEsVUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBbUMsUUFBQSxHQUFPLE1BQTFDLEVBQXNELFVBQUEsR0FBUyxNQUEvRCxDQURBLENBREY7U0FBQTtBQUFBLFFBSUMsMkJBQUEsZ0JBQUQsRUFBbUIsb0JBQUEsU0FBbkIsRUFBOEIsZ0JBQUEsS0FBOUIsRUFBcUMsMEJBQUEsZUFKckMsQ0FBQTtBQUFBLFFBZUEsU0FBQSxHQUFZLFNBQVMsQ0FBQyxHQUFWLENBQWMsU0FBQyxJQUFELEdBQUE7QUFDdEIsVUFBQSxJQUFJLENBQUMsQ0FBTCxHQUFTLGdCQUFpQixDQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxDQUFyQyxDQUFBO0FBQUEsVUFDQSxJQUFJLENBQUMsQ0FBTCxHQUFTLGdCQUFpQixDQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxDQURyQyxDQUFBO0FBRUEsVUFBQSxJQUFPLHFCQUFQO0FBQ0UsWUFBQSxJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQWYsQ0FBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsQ0FBeUIsQ0FBQyxXQUExQixDQUFBLENBQWhCLENBREY7V0FGQTtpQkFJQSxLQUxzQjtRQUFBLENBQWQsQ0FmWixDQUFBO0FBQUEsUUFzQkEsU0FBQSxHQUFZLFNBQVMsQ0FBQyxHQUFWLENBQWMsU0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLFNBQWQsR0FBQTtBQUN4QixjQUFBLFFBQUE7QUFBQSxVQUFBLElBQUksQ0FBQyxjQUFMLEdBQXNCLElBQUksQ0FBQyxRQUEzQixDQUFBO0FBQUEsVUFDQSxRQUFBLEdBQVcsTUFBQSxLQUFhLENBQUMsQ0FBQyxJQUFGLENBQU8sU0FBUCxFQUFrQixTQUFDLENBQUQsR0FBQTtBQUN4QyxZQUFBLElBQUcsQ0FBQyxDQUFDLFNBQUYsS0FBZSxJQUFJLENBQUMsU0FBdkI7QUFDRSxjQUFBLElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFYLENBQWtCLENBQWxCLENBQUEsS0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFkLENBQXFCLENBQXJCLENBQXhCLElBQW9ELENBQUMsQ0FBQyxFQUFGLEtBQVEsSUFBSSxDQUFDLEVBQXBFO0FBQ0UsdUJBQU8sSUFBUCxDQURGO2VBQUEsTUFBQTtBQUdFLHVCQUFPLEtBQVAsQ0FIRjtlQURGO2FBRHdDO1VBQUEsQ0FBbEIsQ0FEeEIsQ0FBQTtBQU9BLFVBQUEsSUFBRyxRQUFIO0FBQ0UsWUFBQSxJQUFJLENBQUMsY0FBTCxHQUFzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQWQsQ0FBcUIsQ0FBckIsQ0FBdEIsQ0FERjtXQVBBO2lCQVNBLEtBVndCO1FBQUEsQ0FBZCxDQXRCWixDQUFBO0FBQUEsUUFvQ0EsZUFBQSxHQUFrQixlQUFlLENBQUMsR0FBaEIsQ0FBb0IsU0FBQyxJQUFELEdBQUE7QUFDcEMsVUFBQSxJQUFJLENBQUMsVUFBTCxHQUFrQixJQUFsQixDQUFBO0FBQUEsVUFDQSxJQUFJLENBQUMsS0FBTCxHQUFhLElBRGIsQ0FBQTtpQkFFQSxLQUhvQztRQUFBLENBQXBCLENBcENsQixDQUFBO0FBQUEsUUF5Q0EsS0FBQSxHQUFRLENBQUMsQ0FBQyxLQUFGLENBQVEsU0FBUixFQUFtQixlQUFuQixDQXpDUixDQUFBO0FBQUEsUUEwQ0EsS0FBQSxHQUFRLENBQUMsQ0FBQyxTQUFGLENBQVksQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLEVBQWUsSUFBZixDQUFaLEVBQWtDLEtBQWxDLENBMUNSLENBQUE7QUFBQSxRQTRDQSxnQkFBQSxHQUFtQixDQUFDLENBQUMsU0FBRixDQUFZLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBVixFQUFpQixXQUFqQixDQUFaLEVBQTJDLFNBQUMsTUFBRCxFQUFTLFNBQVQsR0FBQTtpQkFDNUQsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxNQUFSLEVBQWdCLFVBQWhCLEVBRDREO1FBQUEsQ0FBM0MsQ0E1Q25CLENBQUE7QUFBQSxRQThDQSxNQUFBLENBQUEsZ0JBQXVCLENBQUMsR0E5Q3hCLENBQUE7QUFBQSxRQStDQSxNQUFBLENBQUEsZ0JBQXVCLENBQUMsSUEvQ3hCLENBQUE7QUFBQSxRQWlEQSxTQUFBLEdBQVksQ0FBQyxDQUFDLEdBQUYsQ0FBTSxDQUFDLENBQUMsSUFBRixDQUFPLGdCQUFQLENBQU4sRUFBZ0MsU0FBQyxFQUFELEdBQUE7aUJBQU8sc0JBQUEsQ0FBdUIsRUFBdkIsRUFBUDtRQUFBLENBQWhDLENBakRaLENBQUE7QUFBQSxRQWtEQSxnQkFBQSxHQUFtQixDQUFDLENBQUMsU0FBRixDQUFZLFNBQVosRUFBdUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxnQkFBVCxDQUF2QixDQWxEbkIsQ0FBQTtBQUFBLFFBb0RBLEdBQUEsR0FBTSxNQXBETixDQUFBO0FBQUEsUUF1REEsVUFBQSxHQUFhO0FBQUEsVUFDWCxRQUFBLE1BRFc7QUFBQSxVQUNILFNBQUEsT0FERztBQUFBLFVBQ00sV0FBQSxTQUROO0FBQUEsVUFDaUIsaUJBQUEsZUFEakI7QUFBQSxVQUNrQyxPQUFBLEtBRGxDO0FBQUEsVUFDeUMsT0FBQSxLQUR6QztBQUFBLFVBRVgsS0FBQSxHQUZXO0FBQUEsVUFFTixlQUFBLGFBRk07QUFBQSxVQUVTLGtCQUFBLGdCQUZUO1NBdkRiLENBQUE7ZUEyREEsS0FBQyxDQUFBLE9BQUQsQ0FBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLEVBQW9DLFVBQXBDLEVBL0RnQztNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxDLENBMUNBLENBQUE7V0E0R0EsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBN0dpQjtFQUFBLENBWG5CO0NBWEYsQ0FBQTs7OztBQ0FBLElBQUEscUJBQUE7RUFBQTtpU0FBQTs7QUFBQSxlQUFBLEdBQWtCLE9BQUEsQ0FBUSx3QkFBUixDQUFsQixDQUFBOztBQUFBO0FBQ0EseUJBQUEsQ0FBQTs7OztHQUFBOztjQUFBOztHQUFtQixnQkFEbkIsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUFxQixJQUFBLElBQUEsQ0FBQSxDQUhyQixDQUFBOzs7O0FDQUEsSUFBQSw0UUFBQTtFQUFBLHFKQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLEVBQ0EsR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBRGxCLENBQUE7O0FBQUEsVUFHQSxHQUFhLE9BQUEsQ0FBUSxvQkFBUixDQUhiLENBQUE7O0FBQUEsYUFJQSxHQUFnQixPQUFBLENBQVEsdUJBQVIsQ0FKaEIsQ0FBQTs7QUFBQSxlQUtBLEdBQWtCLE9BQUEsQ0FBUSx5QkFBUixDQUxsQixDQUFBOztBQUFBLFlBTUEsR0FBZSxPQUFBLENBQVEsc0JBQVIsQ0FOZixDQUFBOztBQUFBLFVBT0EsR0FBYSxPQUFBLENBQVEsb0JBQVIsQ0FQYixDQUFBOztBQUFBLHNCQVFBLEdBQXlCLE9BQUEsQ0FBUSxnQ0FBUixDQVJ6QixDQUFBOztBQUFBLHVCQVNBLEdBQTBCLE9BQUEsQ0FBUSxpQ0FBUixDQVQxQixDQUFBOztBQUFBLFlBVUEsR0FBZSxPQUFBLENBQVEsc0JBQVIsQ0FWZixDQUFBOztBQUFBLFNBWUEsR0FBWSxPQUFBLENBQVEsYUFBUixDQVpaLENBQUE7O0FBQUEsWUFhQSxHQUFlLE9BQUEsQ0FBUSxnQkFBUixDQWJmLENBQUE7O0FBQUEsV0FjQSxHQUFjLE9BQUEsQ0FBUSxlQUFSLENBZGQsQ0FBQTs7QUFBQSxTQWVBLEdBQVksT0FBQSxDQUFRLGFBQVIsQ0FmWixDQUFBOztBQUFBLGlCQWtCQSxHQUFvQixTQUFDLEdBQUQsR0FBQTtBQUFRLEVBQUEsSUFBRyxHQUFBLEtBQU8sS0FBVjtXQUFxQixFQUFyQjtHQUFBLE1BQUE7V0FBNEIsRUFBNUI7R0FBUjtBQUFBLENBbEJwQixDQUFBOztBQUFBLGVBcUJBLEdBQWtCLFNBQUMsS0FBRCxHQUFBO1NBQ2hCLENBQUMsQ0FBQyxTQUFGLENBQVksS0FBWixFQUFtQixTQUFDLElBQUQsR0FBQTtBQUNqQixJQUFBLElBQW9CLElBQUksQ0FBQyxPQUF6QjtBQUFBLGFBQU8sU0FBUCxDQUFBO0tBQUE7QUFDQSxJQUFBLElBQXVCLElBQUksQ0FBQyxVQUE1QjtBQUFBLGFBQU8sWUFBUCxDQUFBO0tBREE7QUFFQSxJQUFBLElBQXFCLElBQUksQ0FBQyxRQUExQjtBQUFBLGFBQU8sVUFBUCxDQUFBO0tBRkE7QUFHQSxXQUFPLEtBQVAsQ0FKaUI7RUFBQSxDQUFuQixFQURnQjtBQUFBLENBckJsQixDQUFBOztBQUFBLHFCQStCQSxHQUF3QjtFQUN0QjtBQUFBLElBQUUsSUFBQSxFQUFNLEdBQVI7QUFBQSxJQUFhLENBQUEsRUFBRSxHQUFmO0FBQUEsSUFBb0IsQ0FBQSxFQUFFLEdBQXRCO0dBRHNCLEVBRXRCO0FBQUEsSUFBRSxJQUFBLEVBQU0sR0FBUjtBQUFBLElBQWEsQ0FBQSxFQUFFLEdBQWY7QUFBQSxJQUFvQixDQUFBLEVBQUUsR0FBdEI7R0FGc0IsRUFHdEI7QUFBQSxJQUFFLElBQUEsRUFBTSxHQUFSO0FBQUEsSUFBYSxDQUFBLEVBQUUsR0FBZjtBQUFBLElBQW9CLENBQUEsRUFBRSxHQUF0QjtHQUhzQixFQUl0QjtBQUFBLElBQUUsSUFBQSxFQUFNLEdBQVI7QUFBQSxJQUFhLENBQUEsRUFBRSxHQUFmO0FBQUEsSUFBb0IsQ0FBQSxFQUFFLEdBQXRCO0dBSnNCLEVBS3RCO0FBQUEsSUFBRSxJQUFBLEVBQU0sR0FBUjtBQUFBLElBQWEsQ0FBQSxFQUFFLEdBQWY7QUFBQSxJQUFvQixDQUFBLEVBQUUsR0FBdEI7R0FMc0IsRUFNdEI7QUFBQSxJQUFFLElBQUEsRUFBTSxHQUFSO0FBQUEsSUFBYSxDQUFBLEVBQUUsR0FBZjtBQUFBLElBQW9CLENBQUEsRUFBRSxHQUF0QjtHQU5zQjtDQS9CeEIsQ0FBQTs7QUFBQSxvQkEwQ0EsR0FBdUIsU0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixRQUFyQixHQUFBO0FBQ3JCLE1BQUEsMENBQUE7O0lBRDBDLFdBQVc7R0FDckQ7QUFBQSxFQUFBLFNBQUEsR0FBWSxDQUFDLENBQUMsSUFBRixDQUFPLE9BQVAsRUFBZ0I7QUFBQSxJQUFDLFFBQUEsRUFBVSxRQUFRLENBQUMsTUFBVCxDQUFnQixDQUFoQixDQUFrQixDQUFDLFdBQW5CLENBQUEsQ0FBWDtHQUFoQixDQUFaLENBQUE7QUFBQSxFQUNBLE9BQUEsR0FBVSxFQURWLENBQUE7QUFBQSxFQUVBLFVBQUEsR0FBYSxRQUFRLENBQUMsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FGYixDQUFBO0FBR0EsRUFBQSxJQUFHLFVBQVUsQ0FBQyxNQUFYLEtBQXFCLENBQXhCO0FBQ0UsSUFBQSxVQUFBLEdBQWEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxTQUFQLEVBQWtCO0FBQUEsTUFBQyxRQUFBLEVBQVUsVUFBVSxDQUFDLFdBQVgsQ0FBQSxDQUFYO0FBQUEsTUFBcUMsU0FBQSxzQkFBVyxTQUFTLENBQUUsa0JBQTNEO0tBQWxCLENBQWIsQ0FBQTtBQUFBLElBQ0EsT0FBQSxHQUFVLFVBQVUsQ0FBQyxTQURyQixDQURGO0dBSEE7QUFNQSxFQUFBLElBQUcsVUFBVSxDQUFDLE1BQVgsS0FBcUIsQ0FBeEI7QUFDRSxJQUFBLE9BQUEsR0FBVSxFQUFBLEdBQUUsQ0FBQSxVQUFVLENBQUMsV0FBWCxDQUFBLENBQUEsQ0FBRixHQUE0QixLQUF0QyxDQURGO0dBTkE7U0FTQTtBQUFBLElBQUUsV0FBQSxTQUFGO0FBQUEsSUFBYSxTQUFBLE9BQWI7SUFWcUI7QUFBQSxDQTFDdkIsQ0FBQTs7QUFBQSxNQXlETSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLE9BQWI7QUFBQSxFQUVBLGVBQUEsRUFBaUIsU0FBQyxLQUFELEdBQUE7QUFDZixRQUFBLDBDQUFBOztNQURnQixRQUFRLElBQUMsQ0FBQTtLQUN6QjtBQUFBLElBQUEsWUFBQSxHQUFlLEtBQUssQ0FBQyxZQUFyQixDQUFBO0FBQUEsSUFDQSxZQUFZLENBQUMsSUFBYixDQUFBLENBREEsQ0FBQTtBQUFBLElBRUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxtQkFBRCxDQUFxQixLQUFLLENBQUMsYUFBM0IsQ0FGUixDQUFBO0FBR0EsSUFBQSxJQUFPLGFBQVA7QUFDRSxNQUFBLEtBQUEsb0RBQWlDLENBQUUsY0FBbkMsQ0FERjtLQUhBO0FBS0EsSUFBQSxJQUFPLGFBQVA7QUFDRSxNQUFBLFNBQUEsR0FDRTtBQUFBLFFBQUEsSUFBQSxFQUNFO0FBQUEsVUFBQSxLQUFBLEVBQU8sQ0FBUDtBQUFBLFVBQ0EsSUFBQSxFQUFNLENBRE47QUFBQSxVQUVBLEtBQUEsRUFBTyxDQUZQO0FBQUEsVUFHQSxNQUFBLEVBQVEsQ0FIUjtBQUFBLFVBSUEsTUFBQSxFQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FKUjtBQUFBLFVBS0EsS0FBQSxFQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FMUDtTQURGO0FBQUEsUUFPQSxHQUFBLEVBQUssQ0FBQyxDQUFDLEdBQUYsQ0FBTSxLQUFLLENBQUMsU0FBWixFQUF1QixTQUFDLENBQUQsR0FBQTtpQkFBTSxDQUFDLENBQUMsQ0FBQyxHQUFILEVBQVEsQ0FBQyxDQUFDLElBQVYsRUFBTjtRQUFBLENBQXZCLENBUEw7T0FERixDQUFBO0FBQUEsTUFVQSxJQUFBLEdBQ0U7QUFBQSxRQUFBLElBQUEsRUFBTSxNQUFOO0FBQUEsUUFDQSxFQUFBLEVBQUksTUFESjtBQUFBLFFBRUEsT0FBQSxFQUFTLElBRlQ7QUFBQSxRQUdBLEtBQUEsRUFBSyxDQUhMO0FBQUEsUUFJQSxHQUFBLEVBQUksQ0FKSjtPQVhGLENBQUE7QUFBQSxNQWlCQSxZQUFZLENBQUMsR0FBYixDQUFpQixTQUFqQixFQUE0QixJQUE1QixDQWpCQSxDQUFBO0FBQUEsTUFrQkEsS0FBQSxHQUFRLFNBbEJSLENBREY7S0FMQTtXQTBCQSxDQUFDLENBQUMsTUFBRixDQUFTLEtBQVQsRUFDRTtBQUFBLE1BQUEsZUFBQSxFQUFpQixFQUFqQjtBQUFBLE1BQ0EsYUFBQSxFQUFlLEVBRGY7QUFBQSxNQUVBLGVBQUEsRUFBaUIsRUFGakI7QUFBQSxNQUdBLFlBQUEsRUFBYyxJQUhkO0FBQUEsTUFJQSxVQUFBLEVBQVksRUFKWjtLQURGLEVBM0JlO0VBQUEsQ0FGakI7QUFBQSxFQW9DQSx5QkFBQSxFQUEyQixTQUFDLEVBQUQsR0FBQTtBQUN6QixRQUFBLEtBQUE7QUFBQSxJQUFBLEtBQUEsR0FBUSxJQUFDLENBQUEsZUFBRCxDQUFpQixFQUFqQixDQUFSLENBQUE7V0FDQSxJQUFDLENBQUEsUUFBRCxDQUFVLEtBQVYsRUFGeUI7RUFBQSxDQXBDM0I7QUFBQSxFQTBDQSxrQkFBQSxFQUFvQixTQUFBLEdBQUE7QUFDbEIsUUFBQSwwQkFBQTtBQUFBLElBQUEsT0FBeUIsSUFBQyxDQUFBLEtBQTFCLEVBQUMsb0JBQUEsWUFBRCxFQUFlLGNBQUEsTUFBZixDQUFBO0FBQUEsSUFHQSxZQUFZLENBQUMsRUFBYixDQUFnQixRQUFoQixFQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQSxHQUFBO0FBQ3hCLFlBQUEsZUFBQTtBQUFBLFFBQUEsS0FBQSxHQUFRLEtBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQXBCLENBQUEsQ0FBUixDQUFBO0FBQ0EsUUFBQSxJQUFHLGVBQUEsSUFBVyxDQUFBLEtBQVMsQ0FBQyxJQUFJLENBQUMsT0FBN0I7QUFDRSxVQUFBLFFBQUEsR0FBVyxZQUFZLENBQUMsYUFBYixDQUFBLENBQVgsQ0FBQTtpQkFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBbUMsUUFBQSxHQUFPLE1BQTFDLEVBQXNELFVBQUEsR0FBUyxNQUFULEdBQWlCLEdBQWpCLEdBQW1CLFFBQXpFLEVBRkY7U0FGd0I7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQixDQUhBLENBQUE7QUFBQSxJQVNBLFlBQVksQ0FBQyxFQUFiLENBQWdCLE1BQWhCLEVBQXdCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEtBQUQsR0FBQTtlQUN0QixLQUFDLENBQUEsUUFBRCxDQUFVLEtBQUssQ0FBQyxLQUFoQixFQURzQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCLENBVEEsQ0FBQTtBQUFBLElBWUEsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFDLENBQUMsUUFBRixDQUFXLElBQUMsQ0FBQSxlQUFaLEVBQTZCLEdBQTdCLENBWlIsQ0FBQTtBQUFBLElBYUEsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFDLENBQUMsUUFBRixDQUFXLElBQUMsQ0FBQSxZQUFaLEVBQTBCLEdBQTFCLENBYlIsQ0FBQTtBQUFBLElBY0EsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFDLENBQUMsUUFBRixDQUFXLElBQUMsQ0FBQSxjQUFaLEVBQTRCLEdBQTVCLENBZFIsQ0FBQTtBQUFBLElBZ0JBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsVUFBZixFQUEyQixJQUFDLENBQUEsSUFBNUIsQ0FoQkEsQ0FBQTtBQUFBLElBaUJBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixJQUFDLENBQUEsSUFBekIsQ0FqQkEsQ0FBQTtXQWtCQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLFNBQWYsRUFBMEIsSUFBQyxDQUFBLElBQTNCLEVBbkJrQjtFQUFBLENBMUNwQjtBQUFBLEVBK0RBLG9CQUFBLEVBQXNCLFNBQUEsR0FBQTtBQUNwQixJQUFBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxHQUFaLENBQWdCLFVBQWhCLEVBQTRCLElBQUMsQ0FBQSxJQUE3QixDQUFBLENBQUE7QUFBQSxJQUNBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxHQUFaLENBQWdCLE9BQWhCLEVBQXlCLElBQUMsQ0FBQSxJQUExQixDQURBLENBQUE7V0FFQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsR0FBWixDQUFnQixTQUFoQixFQUEyQixJQUFDLENBQUEsSUFBNUIsRUFIb0I7RUFBQSxDQS9EdEI7QUFBQSxFQW9FQSxtQkFBQSxFQUFxQixTQUFDLFlBQUQsR0FBQTtBQUNuQixRQUFBLHFCQUFBOztNQURvQixlQUFlLElBQUMsQ0FBQSxLQUFLLENBQUM7S0FDMUM7QUFBQSxJQUFBLEtBQUEsR0FBUSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFwQixDQUFtQztBQUFBLE1BQUEsS0FBQSxFQUFPLFlBQVA7S0FBbkMsQ0FBUixDQUFBO0FBQ0EsSUFBQSxJQUFHLGFBQUg7QUFDRSxNQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQXBCLENBQXlCLEtBQXpCLENBQUEsQ0FBQTtBQUFBLE1BQ0EsT0FBQSxHQUFVLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQXBCLENBQUEsQ0FEVixDQUFBO0FBRUEsYUFBTyxPQUFPLENBQUMsS0FBZixDQUhGO0tBQUEsTUFBQTtBQUtFLE1BQUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQXBCLENBQUEsQ0FBVixDQUFBO0FBQ0EsTUFBQSxJQUFHLHNCQUFBLElBQWtCLFlBQUEsS0FBZ0IsRUFBbEMsdUJBQXlDLE9BQU8sQ0FBRSxJQUFJLENBQUMsZUFBZCxLQUF1QixZQUFuRTtBQUNFLFFBQUEsS0FBQSxHQUFRLFlBQVksQ0FBQyxNQUFiLENBQW9CLFlBQXBCLENBQVIsQ0FBQTtBQUFBLFFBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBcEIsQ0FBd0IsS0FBeEIsRUFDRTtBQUFBLFVBQUEsSUFBQSxFQUFNLE1BQU47QUFBQSxVQUNBLEVBQUEsRUFBSSxNQURKO0FBQUEsVUFFQSxLQUFBLEVBQU8sWUFGUDtTQURGLENBREEsQ0FBQTtBQUtBLGVBQU8sS0FBUCxDQU5GO09BTkY7S0FGbUI7RUFBQSxDQXBFckI7QUFBQSxFQXVGQSxlQUFBLEVBQWlCLFNBQUMsS0FBRCxFQUFRLElBQVIsR0FBQTtBQUNmLElBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBcEIsQ0FBd0IsS0FBeEIsRUFBK0IsSUFBL0IsQ0FBQSxDQUFBO1dBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFWLEVBRmU7RUFBQSxDQXZGakI7QUFBQSxFQTJGQSxlQUFBLEVBQWlCLFNBQUMsRUFBRCxHQUFBO0FBQ2YsUUFBQSxPQUFBO0FBQUEsSUFBQSxFQUFBLEdBQUssRUFBRSxDQUFDLE9BQVIsQ0FBQTtBQUFBLElBQ0EsR0FBQSxHQUFTLEVBQUEsSUFBTSxFQUFULEdBQWlCLEtBQWpCLEdBQTRCLEtBRGxDLENBQUE7QUFHQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBckIsR0FBOEIsQ0FBakM7QUFDRSxhQUFPLElBQUMsQ0FBQSxhQUFELENBQWUsRUFBZixDQUFQLENBREY7S0FIQTtBQU1BLElBQUEsSUFBRyxFQUFBLEtBQU0sR0FBTixJQUFhLEVBQUEsS0FBTSxFQUF0QjtBQUNFLGFBQU8sSUFBQyxDQUFBLGFBQUQsQ0FBZSxFQUFmLENBQVAsQ0FBQTtBQUNBLFlBQUEsQ0FGRjtLQU5BO0FBVUEsWUFBTyxFQUFQO0FBQUEsV0FFTyxFQUZQO0FBQUEsV0FFVyxFQUZYO0FBR0ksUUFBQSxJQUFDLENBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFsQixDQUFBLENBQUEsQ0FISjtBQUVXO0FBRlgsV0FRTyxHQVJQO0FBQUEsV0FRWSxFQVJaO0FBU0ksUUFBQSxJQUFDLENBQUEsUUFBRCxDQUFBLENBQUEsQ0FUSjtBQVFZO0FBUlosV0FXTyxHQVhQO0FBQUEsV0FXWSxFQVhaO0FBWUksUUFBQSxJQUFDLENBQUEsUUFBRCxDQUFBLENBQUEsQ0FaSjtBQVdZO0FBWFosV0FjTyxHQWRQO0FBQUEsV0FjWSxFQWRaO0FBZUksUUFBQSxJQUFDLENBQUEsVUFBRCxDQUFBLENBQUEsQ0FmSjtBQWNZO0FBZFosV0FvQk8sR0FwQlA7QUFBQSxXQW9CWSxFQXBCWjtBQXFCSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLE1BQWhCLEVBQXdCLEdBQXhCLENBQUEsQ0FyQko7QUFvQlk7QUFwQlosV0F1Qk8sR0F2QlA7QUFBQSxXQXVCWSxFQXZCWjtBQXdCSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLE9BQWhCLEVBQXlCLEdBQXpCLENBQUEsQ0F4Qko7QUF1Qlk7QUF2QlosV0EwQk8sR0ExQlA7QUFBQSxXQTBCWSxFQTFCWjtBQTJCSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLE9BQWhCLEVBQXlCLEdBQXpCLENBQUEsQ0EzQko7QUEwQlk7QUExQlosV0E2Qk8sR0E3QlA7QUFBQSxXQTZCWSxFQTdCWjtBQThCSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLFFBQWhCLEVBQTBCLEdBQTFCLENBQUEsQ0E5Qko7QUE2Qlk7QUE3QlosV0FnQ08sR0FoQ1A7QUFBQSxXQWdDWSxFQWhDWjtBQWlDSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLFFBQWhCLEVBQTBCLEdBQTFCLEVBQStCLEtBQS9CLENBQUEsQ0FqQ0o7QUFnQ1k7QUFoQ1osV0FtQ08sR0FuQ1A7QUFBQSxXQW1DWSxFQW5DWjtBQW9DSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLFFBQWhCLEVBQTBCLEdBQTFCLEVBQStCLE1BQS9CLENBQUEsQ0FwQ0o7QUFtQ1k7QUFuQ1osV0FzQ08sR0F0Q1A7QUFBQSxXQXNDWSxFQXRDWjtBQXVDSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLE9BQWhCLEVBQXlCLEdBQXpCLEVBQThCLEtBQTlCLENBQUEsQ0F2Q0o7QUFzQ1k7QUF0Q1osV0F5Q08sRUF6Q1A7QUFBQSxXQXlDVyxFQXpDWDtBQTBDSSxRQUFBLElBQUMsQ0FBQSxjQUFELENBQWdCLE9BQWhCLEVBQXlCLEdBQXpCLEVBQThCLE1BQTlCLENBQUEsQ0ExQ0o7QUFBQSxLQVZBO0FBc0RBLFdBQU8sSUFBUCxDQXZEZTtFQUFBLENBM0ZqQjtBQUFBLEVBc0pBLFlBQUEsRUFBYyxTQUFDLEVBQUQsR0FBQTtBQUNaLFFBQUEsSUFBQTtBQUFBLElBQUEsSUFBRyxFQUFFLENBQUMsT0FBSCxLQUFjLEVBQWpCO0FBQ0UsTUFBQSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFwQixDQUFrQyxLQUFsQyxDQUFBLENBREY7S0FBQTtBQUVBLElBQUEsSUFBRyxFQUFFLENBQUMsT0FBSCxLQUFjLEVBQWQsSUFBb0IsQ0FBQyxDQUFBLEVBQUEsWUFBTSxFQUFFLENBQUMsUUFBVCxRQUFBLElBQW9CLEVBQXBCLENBQUQsQ0FBdkI7QUFDRSxhQUFPLElBQUMsQ0FBQSxhQUFELENBQWUsRUFBRSxDQUFDLE9BQWxCLEVBQTJCLEVBQTNCLENBQVAsQ0FERjtLQUZBO0FBQUEsSUFPQSxFQUFFLENBQUMsY0FBSCxDQUFBLENBUEEsQ0FBQTtBQVFBLFdBQU8sS0FBUCxDQVRZO0VBQUEsQ0F0SmQ7QUFBQSxFQWlLQSxjQUFBLEVBQWdCLFNBQUMsRUFBRCxHQUFBO0FBQ2QsSUFBQSxJQUFHLEVBQUUsQ0FBQyxPQUFILEtBQWMsQ0FBZCxJQUFtQixFQUFFLENBQUMsT0FBSCxLQUFjLEVBQXBDO0FBQ0UsTUFBQSxJQUFDLENBQUEsYUFBRCxDQUFlLEVBQUUsQ0FBQyxPQUFsQixDQUFBLENBQUE7QUFBQSxNQUlBLEVBQUUsQ0FBQyxjQUFILENBQUEsQ0FKQSxDQUFBO0FBS0EsYUFBTyxLQUFQLENBTkY7S0FEYztFQUFBLENBaktoQjtBQUFBLEVBMEtBLGFBQUEsRUFBZSxTQUFDLFFBQUQsR0FBQTtBQUViLFFBQUEsa0NBQUE7O01BRmMsV0FBVztLQUV6QjtBQUFBLElBQUEsUUFBQSxHQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBbEIsQ0FBQTtBQUFBLElBQ0EsZUFBQSxHQUFrQixJQUFDLENBQUEsS0FBSyxDQUFDLGVBRHpCLENBQUE7QUFFQSxJQUFBLElBQUcsUUFBUSxDQUFDLEdBQVQsQ0FBYSxZQUFiLENBQTBCLENBQUMsTUFBM0IsR0FBb0MsQ0FBcEMsSUFBMEMsZUFBZSxDQUFDLE1BQWhCLEtBQTBCLENBQXZFO0FBQ0UsTUFBQSxPQUFBLEdBQVUsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLFNBQWQsRUFBeUI7QUFBQSxRQUFDLFFBQUEsRUFBVSxlQUFnQixDQUFBLENBQUEsQ0FBM0I7T0FBekIsQ0FBVixDQUFBO0FBQ0EsTUFBQSxJQUFjLGVBQWQ7QUFBQSxjQUFBLENBQUE7T0FEQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFFBQUQsQ0FBVTtBQUFBLFFBQUEsVUFBQSxFQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBWjtPQUFWLENBRkEsQ0FBQTtBQUdBLE1BQUEsSUFBRyxRQUFIO0FBQ0UsUUFBQSxJQUFDLENBQUEsYUFBRCxDQUFlLE9BQU8sQ0FBQyxFQUF2QixFQUEyQixLQUEzQixFQUFrQyxJQUFsQyxFQUF3QyxDQUFBLFFBQVUsQ0FBQSxDQUFBLENBQWxELENBQUEsQ0FBQTtlQUNBLElBQUMsQ0FBQSxhQUFELENBQWUsT0FBTyxDQUFDLEVBQXZCLEVBQTJCLE1BQTNCLEVBQW1DLElBQW5DLEVBQXlDLENBQUEsUUFBVSxDQUFBLENBQUEsQ0FBbkQsRUFGRjtPQUpGO0tBSmE7RUFBQSxDQTFLZjtBQUFBLEVBdUxBLGtCQUFBLEVBQW9CLFNBQUEsR0FBQTtXQUNsQixJQUFDLENBQUEsUUFBRCxDQUNFO0FBQUEsTUFBQSxhQUFBLEVBQWUsRUFBZjtBQUFBLE1BQ0EsZUFBQSxFQUFpQixFQURqQjtBQUFBLE1BRUEsZUFBQSxFQUFpQixFQUZqQjtBQUFBLE1BR0EsVUFBQSxFQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIWjtBQUFBLE1BSUEsWUFBQSxFQUFjLElBSmQ7S0FERixFQURrQjtFQUFBLENBdkxwQjtBQUFBLEVBK0xBLGFBQUEsRUFBZSxTQUFDLElBQUQsRUFBTyxFQUFQLEdBQUE7QUFLYixRQUFBLDJIQUFBO0FBQUEsSUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFkLENBQUE7QUFBQSxJQUNBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBRGxCLENBQUE7QUFBQSxJQUVBLElBQUEsR0FBTyxNQUFNLENBQUMsWUFBUCxDQUFvQixJQUFwQixDQUZQLENBQUE7QUFRQSxJQUFBLElBQUcsSUFBQSxLQUFRLEVBQVIsSUFBYyxJQUFBLEtBQVEsRUFBekI7QUFFRSxNQUFBLElBQUcsQ0FBQSxJQUFIO0FBQ0UsY0FBQSxDQURGO09BQUE7QUFBQSxNQUVBLFVBQUEsR0FBYSxJQUFJLENBQUMsTUFBTCxLQUFlLENBQWYsSUFBcUIsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsWUFBaEIsQ0FBNkIsQ0FBQyxNQUE5QixHQUF1QyxDQUZ6RSxDQUFBO0FBR0EsTUFBQSxJQUFHLElBQUEsS0FBUSxFQUFSLElBQWUsVUFBbEI7QUFDRSxRQUFBLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FBQSxDQURGO09BQUEsTUFBQTtBQUdFLFFBQUEsSUFBRyxJQUFBLEtBQVEsRUFBWDtBQUNFLFVBQUEsSUFBQyxDQUFBLGFBQUQsQ0FBZSxLQUFmLENBQUEsQ0FERjtTQUFBO0FBQUEsUUFFQSxLQUFBLEdBQVEsQ0FBQSxDQUZSLENBQUE7QUFJQSxRQUFBLElBQUcsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUFsQjtBQUNFLFVBQUEsS0FBQSxHQUFRLENBQUEsQ0FBUixDQURGO1NBSkE7QUFBQSxRQU1BLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsRUFBYSxLQUFiLENBTlAsQ0FBQTtBQUFBLFFBT0EsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQSxDQUFYLENBUFAsQ0FBQTtBQUFBLFFBUUEsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQUEsQ0FBYixDQVJQLENBSEY7T0FMRjtLQVJBO0FBQUEsSUEwQkEsU0FBQSxHQUFZLElBQUksQ0FBQyxXQUFMLENBQUEsQ0ExQlosQ0FBQTtBQTRCQSxJQUFBLElBQUcsQ0FBQSxJQUFBLElBQWEsQ0FBQSxJQUFoQjtBQUNFLE1BQUEsSUFBQyxDQUFBLGtCQUFELENBQUEsQ0FBQSxDQUFBO0FBQ0EsWUFBQSxDQUZGO0tBNUJBO0FBQUEsSUFnQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBcEIsQ0FBa0MsS0FBbEMsQ0FoQ0EsQ0FBQTtBQWlDQSxJQUFBLElBQUcsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUFmLElBQXFCLFNBQUEsS0FBYSxHQUFyQztBQUNFLE1BQUEsSUFBQyxDQUFBLFFBQUQsQ0FDRTtBQUFBLFFBQUEsYUFBQSxFQUFlLEdBQWY7QUFBQSxRQUNBLGVBQUEsRUFBaUIsRUFEakI7QUFBQSxRQUVBLGVBQUEsRUFBaUIsRUFGakI7QUFBQSxRQUdBLFlBQUEsRUFBYyxJQUhkO0FBQUEsUUFJQSxVQUFBLEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUpaO09BREYsQ0FBQSxDQUFBO0FBTUEsWUFBQSxDQVBGO0tBakNBO0FBMkNBLElBQUEsSUFBRyxJQUFJLENBQUMsTUFBTCxLQUFlLENBQWYsSUFBcUIsQ0FBQSxTQUFBLEtBQWMsR0FBZCxJQUFBLFNBQUEsS0FBa0IsR0FBbEIsSUFBQSxTQUFBLEtBQXNCLEdBQXRCLElBQUEsU0FBQSxLQUEwQixHQUExQixJQUFBLFNBQUEsS0FBOEIsR0FBOUIsSUFBQSxTQUFBLEtBQWtDLEdBQWxDLENBQXhCO0FBQ0UsTUFBQSxJQUFBLElBQVEsU0FBUixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsUUFBRCxDQUNFO0FBQUEsUUFBQSxhQUFBLEVBQWUsSUFBZjtBQUFBLFFBQ0EsZUFBQSxFQUFpQixJQUFDLENBQUEsS0FBSyxDQUFDLGdCQUFpQixDQUFBLFNBQUEsQ0FEekM7QUFBQSxRQUVBLGVBQUEsRUFBaUIsU0FGakI7QUFBQSxRQUdBLFlBQUEsRUFBYyxJQUhkO0FBQUEsUUFJQSxVQUFBLEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUpaO09BREYsQ0FEQSxDQUFBO0FBT0EsWUFBQSxDQVJGO0tBM0NBO0FBQUEsSUFxREEsU0FBQSxHQUFZLElBQUksQ0FBQyxNQUFMLENBQVksQ0FBWixDQXJEWixDQUFBO0FBeURBLElBQUEsSUFBRyxDQUFBLENBQUEsWUFBSyxJQUFJLENBQUMsT0FBVixRQUFBLElBQW9CLENBQXBCLENBQUg7QUFDRSxNQUFBLElBQUEsSUFBUSxTQUFSLENBQUE7QUFBQSxNQUNBLFdBQUEsR0FBYyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsQ0FEZCxDQUFBO0FBQUEsTUFHQSxTQUFBLEdBQVksSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBaUIsQ0FBQSxTQUFBLENBQVUsQ0FBQyxNQUFuQyxDQUEwQyxTQUFDLEVBQUQsR0FBQTs7VUFBQyxLQUFLO1NBQzFEO2VBQUEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxDQUFWLENBQUEsS0FBZ0IsV0FBVyxDQUFDLE1BQVosQ0FBbUIsQ0FBbkIsRUFEb0M7TUFBQSxDQUExQyxDQUhaLENBQUE7QUFNQSxNQUFBLElBQUcsV0FBVyxDQUFDLE1BQVosS0FBc0IsQ0FBekI7QUFDRSxRQUFBLFNBQUEsR0FBWSxTQUFTLENBQUMsTUFBVixDQUFpQixTQUFDLEVBQUQsR0FBQTs7WUFBQyxLQUFLO1dBQ2pDO2lCQUFBLEVBQUUsQ0FBQyxNQUFILENBQVUsQ0FBVixDQUFBLEtBQWdCLFdBQVcsQ0FBQyxNQUFaLENBQW1CLENBQW5CLEVBRFc7UUFBQSxDQUFqQixDQUFaLENBREY7T0FOQTtBQVdBLE1BQUEsSUFBRyxTQUFTLENBQUMsTUFBVixLQUFvQixDQUF2QjtBQUNFLFFBQUEsSUFBQyxDQUFBLFFBQUQsQ0FDRTtBQUFBLFVBQUEsYUFBQSxFQUFlLElBQWY7QUFBQSxVQUNBLGVBQUEsRUFBaUIsU0FEakI7QUFBQSxVQUVBLFlBQUEsRUFBYyxJQUZkO0FBQUEsVUFHQSxVQUFBLEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhaO1NBREYsQ0FBQSxDQURGO09BWkY7S0F6REE7QUFBQSxJQTZFQSxXQUFBLEdBQWMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBYixDQTdFZCxDQUFBO0FBOEVBLElBQUEsSUFBRyxXQUFXLENBQUMsTUFBWixLQUFzQixDQUF6QjtBQUNFLE1BQUEsT0FBQSxHQUFVLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFkLEVBQ1I7QUFBQSxRQUFBLGNBQUEsRUFBZ0IsV0FBaEI7QUFBQSxRQUNBLFNBQUEsRUFBVyx1QkFBQSxDQUF3QixTQUF4QixDQURYO09BRFEsQ0FBVixDQUFBO0FBSUEsTUFBQSxJQUFHLGVBQUg7QUFDRSxRQUFBLElBQUEsSUFBUSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQWpCLENBQXdCLENBQXhCLENBQVIsQ0FBQTtBQUFBLFFBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FDRTtBQUFBLFVBQUEsYUFBQSxFQUFlLElBQWY7U0FERixDQURBLENBREY7T0FMRjtLQTlFQTtBQXVGQSxJQUFBLElBQUcsV0FBVyxDQUFDLE1BQVosS0FBc0IsQ0FBekI7QUFDRSxNQUFBLE9BQUEsR0FBVSxDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBZCxFQUNSO0FBQUEsUUFBQSxRQUFBLEVBQVUsV0FBVjtBQUFBLFFBQ0EsU0FBQSxFQUFXLHVCQUFBLENBQXdCLFNBQXhCLENBRFg7T0FEUSxDQUFWLENBREY7S0F2RkE7QUE2RkEsSUFBQSxJQUFHLGVBQUg7QUFDRSxNQUFBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVAsSUFBcUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFoQyxDQUFBO0FBQUEsTUFDQSxVQUFBLEdBQWEsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFJLENBQUEsUUFBQSxDQUFTLE9BQU8sQ0FBQyxFQUFqQixFQUFvQixFQUFwQixDQUFBLENBRHhCLENBQUE7QUFFQSxNQUFBLElBQU8sZUFBUDtBQUNFLGNBQUEsQ0FERjtPQUZBO0FBS0EsY0FBTyxJQUFQO0FBQUEsYUFDTyxHQURQO0FBRUksVUFBQSxJQUFBLEdBQU8sS0FBUCxDQUFBO0FBQUEsVUFDQSxHQUFBLEdBQU0sSUFETixDQUFBO0FBQUEsVUFFQSxRQUFTLENBQUEsQ0FBQSxDQUFULEVBRkEsQ0FGSjtBQUNPO0FBRFAsYUFLTyxHQUxQO0FBTUksVUFBQSxJQUFBLEdBQU8sS0FBUCxDQUFBO0FBQUEsVUFDQSxHQUFBLEdBQU0sSUFETixDQUFBO0FBRUEsVUFBQSxJQUFHLFVBQVcsQ0FBQSxDQUFBLENBQVgsR0FBZ0IsQ0FBbkI7QUFDRSxZQUFBLFFBQVMsQ0FBQSxDQUFBLENBQVQsRUFBQSxDQURGO1dBUko7QUFLTztBQUxQLGFBVU8sR0FWUDtBQVdJLFVBQUEsSUFBQSxHQUFPLE1BQVAsQ0FBQTtBQUFBLFVBQ0EsR0FBQSxHQUFNLElBRE4sQ0FBQTtBQUFBLFVBRUEsUUFBUyxDQUFBLENBQUEsQ0FBVCxFQUZBLENBWEo7QUFVTztBQVZQLGFBY08sR0FkUDtBQWVJLFVBQUEsSUFBQSxHQUFPLE1BQVAsQ0FBQTtBQUFBLFVBQ0EsR0FBQSxHQUFNLElBRE4sQ0FBQTtBQUVBLFVBQUEsSUFBRyxVQUFXLENBQUEsQ0FBQSxDQUFYLEdBQWdCLENBQW5CO0FBQ0UsWUFBQSxRQUFTLENBQUEsQ0FBQSxDQUFULEVBQUEsQ0FERjtXQWpCSjtBQUFBLE9BTEE7QUEwQkEsTUFBQSxJQUFHLGNBQUEsSUFBVSxhQUFiO0FBQ0UsUUFBQSxJQUFDLENBQUEsYUFBRCxDQUFlLE9BQU8sQ0FBQyxFQUF2QixFQUEyQixJQUEzQixFQUFpQyxHQUFqQyxDQUFBLENBREY7T0ExQkE7QUFBQSxNQTZCQSxJQUFDLENBQUEsUUE3QkQsQ0FBQTtBQStCQSxhQUFPLEtBQVAsQ0FoQ0Y7S0FsR2E7RUFBQSxDQS9MZjtBQUFBLEVBbVVBLGNBQUEsRUFBZ0IsU0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLElBQVYsR0FBQTtBQUNkLFFBQUEseUNBQUE7QUFBQSxJQUFBLEtBQUEsR0FBUSxJQUFJLENBQUMsS0FBYixDQUFBO0FBQUEsSUFDQSxLQUFBLEdBQVcsR0FBQSxLQUFPLEtBQVYsR0FBcUIsQ0FBckIsR0FBNEIsQ0FBQSxDQURwQyxDQUFBO0FBRUEsSUFBQSxJQUFHLEVBQUEsS0FBTyxRQUFQLElBQUEsRUFBQSxLQUFpQixPQUFwQjtBQUNFLE1BQUEsS0FBQSxHQUFXLElBQUEsS0FBUSxLQUFYLEdBQXNCLENBQXRCLEdBQTZCLENBQXJDLENBQUE7QUFBQSxNQUNBLE1BQUEsR0FBUyxLQUFLLENBQUMsSUFBSyxDQUFBLEVBQUEsQ0FBSSxDQUFBLEtBQUEsQ0FEeEIsQ0FBQTtBQUFBLE1BRUEsTUFBQSxHQUFTLGFBQUEsQ0FBYyxFQUFkLEVBQWtCLEtBQUssQ0FBQyxJQUFLLENBQUEsRUFBQSxDQUFJLENBQUEsS0FBQSxDQUFmLEdBQXdCLEtBQTFDLENBRlQsQ0FBQTtBQUFBLE1BR0EsS0FBSyxDQUFDLElBQUssQ0FBQSxFQUFBLENBQUksQ0FBQSxLQUFBLENBQWYsR0FBd0IsTUFIeEIsQ0FERjtLQUFBLE1BQUE7QUFNRSxNQUFBLE1BQUEsR0FBUyxLQUFLLENBQUMsSUFBSyxDQUFBLEVBQUEsQ0FBcEIsQ0FBQTtBQUFBLE1BQ0EsTUFBQSxHQUFTLGFBQUEsQ0FBYyxFQUFkLEVBQWtCLEtBQUssQ0FBQyxJQUFLLENBQUEsRUFBQSxDQUFYLEdBQWlCLEtBQW5DLENBRFQsQ0FBQTtBQUFBLE1BRUEsS0FBSyxDQUFDLElBQUssQ0FBQSxFQUFBLENBQVgsR0FBaUIsTUFGakIsQ0FORjtLQUZBO0FBQUEsSUFZQSxJQUFBLEdBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxLQUFOO0FBQUEsTUFDQSxJQUFBLEVBQVMsWUFBSCxHQUFjLElBQWQsR0FBd0IsRUFEOUI7QUFBQSxNQUVBLEVBQUEsRUFBSSxFQUZKO0FBQUEsTUFHQSxHQUFBLEVBQUssTUFITDtBQUFBLE1BSUEsS0FBQSxFQUFLLE1BSkw7S0FiRixDQUFBO0FBbUJBLElBQUEsSUFBRyxFQUFBLEtBQU0sTUFBTixJQUFnQixFQUFBLEtBQU0sT0FBekI7QUFDRSxNQUFBLElBQUksQ0FBQyxJQUFMLEdBQVksRUFBWixDQURGO0tBbkJBO1dBc0JBLElBQUMsQ0FBQSxlQUFELENBQWlCLEtBQWpCLEVBQXdCLElBQXhCLEVBdkJjO0VBQUEsQ0FuVWhCO0FBQUEsRUE2VkEsYUFBQSxFQUFlLFNBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CLEtBQXBCLEdBQUE7QUFDYixRQUFBLDRCQUFBO0FBQUEsSUFBQSxJQUFVLGVBQUEsSUFBVyxLQUFBLEtBQVMsQ0FBOUI7QUFBQSxZQUFBLENBQUE7S0FBQTtBQUFBLElBRUEsSUFBQSxHQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFkLEVBQXFCO0FBQUEsTUFBQyxFQUFBLEVBQUksTUFBTDtLQUFyQixDQUZQLENBQUE7QUFJQSxJQUFBLElBQUcsSUFBSSxDQUFDLE1BQUwsSUFBZSxJQUFJLENBQUMsVUFBdkI7QUFBdUMsWUFBQSxDQUF2QztLQUpBO0FBQUEsSUFNQSxLQUFBLEdBQVEsSUFBQyxDQUFBLEtBTlQsQ0FBQTtBQVFBLElBQUEsSUFBRyxhQUFIO0FBQ0UsTUFBQSxHQUFBLEdBQVMsS0FBQSxJQUFTLENBQVosR0FBbUIsSUFBbkIsR0FBNkIsSUFBbkMsQ0FERjtLQUFBLE1BQUE7QUFHRSxNQUFBLEtBQUEsR0FBVyxHQUFBLEtBQU8sSUFBVixHQUFvQixDQUFwQixHQUEyQixDQUFBLENBQW5DLENBSEY7S0FSQTtBQUFBLElBYUEsS0FBQSxHQUFRLGlCQUFBLENBQWtCLElBQWxCLENBYlIsQ0FBQTtBQUFBLElBY0EsRUFBQSxHQUFLLEtBQUssQ0FBQyxHQUFJLENBQUEsTUFBQSxDQUFRLENBQUEsS0FBQSxDQWR2QixDQUFBO0FBQUEsSUFlQSxFQUFBLElBQU0sS0FmTixDQUFBO0FBZ0JBLElBQUEsSUFBRyxFQUFBLEdBQUssQ0FBUjtBQUFlLFlBQUEsQ0FBZjtLQWhCQTtBQUFBLElBa0JBLElBQUEsR0FBVSxHQUFBLEtBQU8sSUFBVixHQUFvQixHQUFwQixHQUE2QixHQWxCcEMsQ0FBQTtBQUFBLElBbUJBLEtBQUssQ0FBQyxHQUFJLENBQUEsTUFBQSxDQUFRLENBQUEsS0FBQSxDQUFsQixHQUEyQixFQW5CM0IsQ0FBQTtXQXFCQSxJQUFDLENBQUEsZUFBRCxDQUFpQixLQUFqQixFQUNFO0FBQUEsTUFBQSxJQUFBLEVBQU0sSUFBTjtBQUFBLE1BQ0EsSUFBQSxFQUFNLElBRE47QUFBQSxNQUVBLE9BQUEsRUFBUyxJQUZUO0FBQUEsTUFHQSxHQUFBLEVBQUssS0FBSyxDQUFDLEdBQUksQ0FBQSxNQUFBLENBSGY7QUFBQSxNQUlBLEtBQUEsRUFBTSxLQUpOO0tBREYsRUF0QmE7RUFBQSxDQTdWZjtBQUFBLEVBMFhBLGtCQUFBLEVBQW9CLFNBQUMsSUFBRCxHQUFBO1dBQ2xCLElBQUUsQ0FBQSxFQUFBLEdBQUUsSUFBRixHQUFRLE1BQVIsQ0FBRixDQUFBLEVBRGtCO0VBQUEsQ0ExWHBCO0FBQUEsRUE2WEEsUUFBQSxFQUFVLFNBQUEsR0FBQTtBQUNSLFFBQUEsS0FBQTtBQUFBLElBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQXBCLENBQUEsQ0FBUixDQUFBO1dBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFLLENBQUMsS0FBaEIsRUFGUTtFQUFBLENBN1hWO0FBQUEsRUFnWUEsUUFBQSxFQUFVLFNBQUEsR0FBQTtBQUNSLFFBQUEsS0FBQTtBQUFBLElBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQXBCLENBQUEsQ0FBUixDQUFBO1dBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFLLENBQUMsS0FBaEIsRUFGUTtFQUFBLENBaFlWO0FBQUEsRUFtWUEsVUFBQSxFQUFZLFNBQUEsR0FBQTtXQUNWLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQXBCLENBQUEsRUFEVTtFQUFBLENBbllaO0FBQUEsRUF1WUEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEsd1JBQUE7QUFBQSxJQUFBLFNBQUEsR0FBWSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQW5CLENBQUE7QUFBQSxJQUVBLGVBQUEsR0FBa0IsVUFBQSxDQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBbEIsRUFBdUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUE5QixFQUF5QyxJQUFDLENBQUEsS0FBSyxDQUFDLGVBQWhELENBRmxCLENBQUE7QUFBQSxJQUlBLGFBQUEscUNBQXNCLENBQUUsc0JBSnhCLENBQUE7QUFBQSxJQUtBLGVBQUEsd0NBQXdCLENBQUUseUJBQVIsSUFBMkIsRUFMN0MsQ0FBQTtBQUFBLElBTUEsZUFBQSx1Q0FBd0IsQ0FBRSx3QkFOMUIsQ0FBQTtBQUFBLElBUUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQWIsQ0FBaUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUMsUUFBRCxHQUFBO0FBQ3ZCLFlBQUEsc0NBQUE7QUFBQSxRQUFBLE1BQUEsR0FBUyxDQUFDLENBQUMsSUFBRixDQUFPLEtBQUMsQ0FBQSxLQUFLLENBQUMsU0FBZCxFQUF5QjtBQUFBLFVBQUEsRUFBQSxFQUFJLFFBQVEsQ0FBQyxNQUFiO1NBQXpCLENBQVQsQ0FBQTtBQUFBLFFBQ0EsTUFBQSxHQUFTLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBQyxDQUFBLEtBQUssQ0FBQyxTQUFkLEVBQXlCO0FBQUEsVUFBQSxFQUFBLEVBQUksUUFBUSxDQUFDLE1BQWI7U0FBekIsQ0FEVCxDQUFBO0FBQUEsUUFFQSxLQUFBLEdBQVE7QUFBQSxVQUFDLFFBQUEsTUFBRDtBQUFBLFVBQVMsUUFBQSxNQUFUO1NBRlIsQ0FBQTtBQUFBLFFBSUEsSUFBQSxHQUFPLFNBQUMsSUFBRCxFQUFPLElBQVAsR0FBQTtBQUNMLGNBQUEsWUFBQTtBQUFBLFVBQUEsWUFBQSxHQUFlLEVBQWYsQ0FBQTtBQUNBLFVBQUEsSUFBRyxDQUFDLENBQUMsUUFBRixDQUFXLElBQUksQ0FBQyxLQUFoQixFQUF1QixLQUF2QixDQUFBLElBQWtDLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBSSxDQUFDLEtBQWhCLEVBQXVCLE9BQXZCLENBQXJDO0FBQ0UsbUJBQU8sS0FBTSxDQUFBLElBQUEsQ0FBSyxDQUFDLENBQVosR0FBZ0IsWUFBdkIsQ0FERjtXQURBO2lCQUdBLEtBQU0sQ0FBQSxJQUFBLENBQUssQ0FBQyxFQUpQO1FBQUEsQ0FKUCxDQUFBO0FBQUEsUUFVQSxTQUFBLEdBQ0U7QUFBQSxVQUFBLEdBQUEsRUFBTSxZQUFBLEdBQVcsUUFBUSxDQUFDLE1BQXBCLEdBQTRCLEdBQTVCLEdBQThCLFFBQVEsQ0FBQyxNQUE3QztBQUFBLFVBQ0EsRUFBQSxFQUFJLE1BQU0sQ0FBQyxDQURYO0FBQUEsVUFFQSxFQUFBLEVBQUksSUFBQSxDQUFLLFFBQUwsRUFBZSxRQUFmLENBRko7QUFBQSxVQUdBLEVBQUEsRUFBSSxNQUFNLENBQUMsQ0FIWDtBQUFBLFVBSUEsRUFBQSxFQUFJLElBQUEsQ0FBSyxRQUFMLEVBQWUsUUFBZixDQUpKO0FBQUEsVUFLQSxTQUFBLEVBQVcsRUFBQSxDQUNUO0FBQUEsWUFBQSxNQUFBLEVBQVEsSUFBUjtBQUFBLFlBQ0EsWUFBQSxFQUFjLFFBQVEsQ0FBQyxjQUR2QjtBQUFBLFlBRUEsVUFBQSxFQUFZLENBQUMsQ0FBQyxRQUFGLENBQVcsUUFBUSxDQUFDLEtBQXBCLEVBQTJCLEtBQTNCLENBRlo7QUFBQSxZQUdBLFdBQUEsRUFBYSxDQUFDLENBQUMsUUFBRixDQUFXLFFBQVEsQ0FBQyxLQUFwQixFQUEyQixNQUEzQixDQUhiO1dBRFMsQ0FMWDtTQVhGLENBQUE7ZUFzQkEsU0FBQSxDQUFVLFNBQVYsRUF2QnVCO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakIsQ0FSUixDQUFBO0FBQUEsSUFpQ0EsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUFGLENBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFiLEVBQW9CLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLFdBQUQsR0FBQTtBQUUxQixZQUFBLDhCQUFBO0FBQUEsUUFBQSxLQUFBLEdBQVEsQ0FBQSxhQUFBLElBQ04sU0FBQSxXQUFXLENBQUMsUUFBWixFQUFBLGVBQXdCLGVBQXhCLEVBQUEsS0FBQSxNQUFBLENBRE0sSUFFTixzQkFBQSxDQUF1QixXQUFXLENBQUMsU0FBbkMsQ0FBQSxLQUFpRCxlQUYzQyxJQUdOLGFBQWEsQ0FBQyxNQUFkLElBQXdCLENBSDFCLENBQUE7QUFBQSxRQUlBLEtBQUEsR0FDRTtBQUFBLFVBQUEsSUFBQSxFQUFNLFNBQU47QUFBQSxVQUNBLEdBQUEsRUFBTSxZQUFBLEdBQVcsV0FBVyxDQUFDLEVBRDdCO0FBQUEsVUFFQSxDQUFBLEVBQUcsV0FBVyxDQUFDLENBRmY7QUFBQSxVQUdBLENBQUEsRUFBRyxXQUFXLENBQUMsQ0FIZjtBQUFBLFVBSUEsS0FBQSxFQUFPLEtBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBSm5CO0FBQUEsVUFLQSxNQUFBLEVBQVEsS0FBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFMcEI7QUFBQSxVQU1BLE1BQUEsRUFBUSxLQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQU5wQjtBQUFBLFVBT0EsV0FBQSxFQUFhLEtBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBUHpCO0FBQUEsVUFRQSxhQUFBLEVBQWUsS0FBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFSM0I7QUFBQSxVQVNBLGFBQUEsRUFBZSxLQUFDLENBQUEsYUFUaEI7QUFBQSxVQVdBLEtBQUEsRUFBTyxLQVhQO1NBTEYsQ0FBQTtBQUFBLFFBbUJBLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVCxFQUFnQixXQUFoQixDQW5CQSxDQUFBO0FBcUJBLFFBQUEsSUFBRyxLQUFLLENBQUMsVUFBVDtBQUNFLFVBQUEsS0FBSyxDQUFDLEtBQU4sR0FDRTtBQUFBLFlBQUEsU0FBQSxFQUFXLENBQUMsQ0FBQyxJQUFGLENBQU8sZUFBZSxDQUFDLFNBQVUsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVgsQ0FBQSxDQUFBLENBQWpDLEVBQTRELENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBQTVELENBQVg7QUFBQSxZQUNBLE9BQUEsRUFBUyxDQUFDLENBQUMsSUFBRixDQUFPLGVBQWUsQ0FBQyxPQUFRLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFYLENBQUEsQ0FBQSxDQUEvQixFQUEwRCxDQUFDLFVBQUQsRUFBYSxZQUFiLEVBQTJCLFNBQTNCLENBQTFELENBRFQ7V0FERixDQURGO1NBckJBO0FBMEJBLFFBQUEsSUFBRyxLQUFLLENBQUMsTUFBVDtBQUNFLFVBQUEsS0FBSyxDQUFDLEtBQU4sR0FBYyxlQUFBLENBQ1o7QUFBQSxZQUFBLEdBQUEsRUFBSyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBQSxLQUFLLENBQUMsRUFBTixDQUFqQztBQUFBLFlBQ0EsSUFBQSxFQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFBLEtBQUssQ0FBQyxFQUFOLENBRG5DO1dBRFksQ0FBZCxDQURGO1NBMUJBO0FBQUEsUUErQkEsU0FBQSxHQUFZLFFBQUEsQ0FBUyxXQUFXLENBQUMsRUFBckIsRUFBeUIsRUFBekIsQ0EvQlosQ0FBQTtBQWdDQSxRQUFBLElBQUcsU0FBQSxJQUFhLEtBQUMsQ0FBQSxLQUFLLENBQUMsR0FBdkI7QUFDRSxVQUFBLEtBQUssQ0FBQyxHQUFOLEdBQVksS0FBQyxDQUFBLEtBQUssQ0FBQyxHQUFJLENBQUEsU0FBQSxDQUFXLENBQUEsQ0FBQSxDQUFsQyxDQUFBO0FBQUEsVUFDQSxLQUFLLENBQUMsSUFBTixHQUFhLEtBQUMsQ0FBQSxLQUFLLENBQUMsR0FBSSxDQUFBLFNBQUEsQ0FBVyxDQUFBLENBQUEsQ0FEbkMsQ0FERjtTQWhDQTtlQW9DQSxZQUFBLENBQWEsS0FBYixFQXRDMEI7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQixDQWpDUixDQUFBO0FBQUEsSUF5RUEsZ0JBQUEsR0FDRTtBQUFBLE1BQUEsR0FBQSxFQUFJLGFBQUo7QUFBQSxNQUNBLGNBQUEsRUFBZ0IsSUFBQyxDQUFBLGNBRGpCO0FBQUEsTUFFQSxrQkFBQSxFQUFvQixJQUFDLENBQUEsa0JBRnJCO0tBMUVGLENBQUE7QUFBQSxJQWdGQSxrQkFBQSxHQUFxQixxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxDQUFELEdBQUE7QUFDN0MsWUFBQSxXQUFBO0FBQUEsUUFBQSxJQUFHLGFBQWEsQ0FBQyxNQUFkLEtBQXdCLENBQTNCO0FBQ0UsVUFBQSxJQUFBLEdBQU8sSUFBUCxDQURGO1NBQUE7QUFBQSxRQUVBLEtBQUEsR0FDRTtBQUFBLFVBQUEsU0FBQSxFQUFZLHlDQUFBLEdBQXdDLElBQXBEO0FBQUEsVUFDQSxLQUFBLEVBQ0U7QUFBQSxZQUFBLElBQUEsRUFBTSxDQUFDLENBQUMsQ0FBUjtBQUFBLFlBQ0EsR0FBQSxFQUFLLENBQUMsQ0FBQyxDQURQO1dBRkY7U0FIRixDQUFBO2VBT0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxLQUFOLEVBQWEsQ0FBQyxDQUFDLElBQWYsRUFSNkM7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQixDQWhGckIsQ0FBQTtBQUFBLElBMEZBLGdCQUFBLEdBQW1CLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBQyxDQUFBLEtBQUssQ0FBQyxTQUFqQixFQUE0QixXQUE1QixDQTFGbkIsQ0FBQTtBQUFBLElBNEZBLGdCQUFBLEdBQW1CLENBQUMsQ0FBQyxHQUFGLENBQU0sZ0JBQU4sRUFBd0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUMsS0FBRCxFQUFRLFNBQVIsR0FBQTtBQUN6QyxZQUFBLHVCQUFBO0FBQUEsUUFBQSxPQUFBLEdBQVUsc0JBQUEsQ0FBdUIsU0FBdkIsQ0FBVixDQUFBO0FBQUEsUUFDQSxjQUFBLEdBQWlCLENBQUMsQ0FBQyxHQUFGLENBQU0sS0FBTixFQUFhLFNBQUMsSUFBRCxHQUFBO0FBQzVCLGNBQUEsa0JBQUE7QUFBQSxVQUFBLElBQUcseUJBQUEsSUFBb0IscUJBQXZCO0FBQ0UsbUJBQU8sSUFBUCxDQURGO1dBQUE7QUFBQSxVQUVBLElBQUEsR0FBTyxFQUZQLENBQUE7QUFBQSxVQUdBLEtBQUEsR0FBUSxhQUFhLENBQUMsTUFIdEIsQ0FBQTtBQUlBLFVBQUEsSUFBRyxLQUFBLEdBQVEsQ0FBUixJQUFjLENBQUMsQ0FBQyxRQUFGLENBQVcsS0FBQyxDQUFBLEtBQUssQ0FBQyxlQUFsQixFQUFtQyxJQUFJLENBQUMsUUFBeEMsQ0FBZCxJQUFvRSxLQUFDLENBQUEsS0FBSyxDQUFDLGVBQVAsS0FBMEIsc0JBQUEsQ0FBdUIsU0FBdkIsQ0FBakc7QUFDRSxZQUFBLElBQUEsR0FBTyxJQUFQLENBREY7V0FKQTtBQUFBLFVBTUEsS0FBQSxHQUNFO0FBQUEsWUFBQSxTQUFBLEVBQVksdUNBQUEsR0FBc0MsSUFBbEQ7QUFBQSxZQUNBLEtBQUEsRUFDRTtBQUFBLGNBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxDQUFYO0FBQUEsY0FDQSxHQUFBLEVBQUssSUFBSSxDQUFDLENBRFY7YUFGRjtXQVBGLENBQUE7aUJBV0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxLQUFOLEVBQWEsVUFBQSxDQUFXLElBQUksQ0FBQyxjQUFoQixDQUFiLEVBWjRCO1FBQUEsQ0FBYixDQURqQixDQUFBO2VBZUEsZUFoQnlDO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBeEIsQ0E1Rm5CLENBQUE7QUFBQSxJQThHQSxXQUFBLEdBQWMsb0JBQUEsQ0FBcUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxlQUE1QixFQUE2QyxJQUFDLENBQUEsS0FBSyxDQUFDLFNBQXBELEVBQStELGFBQS9ELENBOUdkLENBQUE7QUFBQSxJQStHQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLElBQXFCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0EvR2hDLENBQUE7QUFBQSxJQWdIQSxXQUFBLEdBQWlCLGFBQWEsQ0FBQyxNQUFkLElBQXdCLENBQTNCLEdBQWtDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxNQUFBLFNBQUEsRUFBVyxvQkFBWDtLQUFQLEVBQXdDLGVBQUEsQ0FBZ0IsUUFBUyxDQUFBLENBQUEsQ0FBekIsQ0FBeEMsQ0FBbEMsR0FBNEcsSUFoSDFILENBQUE7QUFBQSxJQWlIQSxZQUFBLEdBQWtCLGFBQWEsQ0FBQyxNQUFkLElBQXdCLENBQTNCLEdBQWtDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxNQUFBLFNBQUEsRUFBVyxxQkFBWDtLQUFQLEVBQXlDLGVBQUEsQ0FBZ0IsUUFBUyxDQUFBLENBQUEsQ0FBekIsQ0FBekMsQ0FBbEMsR0FBNkcsSUFqSDVILENBQUE7QUFBQSxJQWtIQSxTQUFBLEdBQVksV0FBVyxDQUFDLE9BQVosSUFBdUIsQ0FBRyxXQUFXLENBQUMsU0FBZixHQUE4QixrQkFBOUIsR0FBQSxNQUFBLENBbEhuQyxDQUFBO0FBQUEsSUFtSEEsYUFBQSxHQUFnQjtNQUNkLFdBRGMsRUFFZCxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsUUFBQSxTQUFBLEVBQVcsMEJBQVg7T0FBUCxFQUE4QztRQUM1QyxDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsVUFBQSxTQUFBLEVBQVksMkJBQUEsR0FBMEIsZ0RBQXFCLENBQUUsa0JBQXZCLENBQTFCLEdBQTRELE1BQXhFO1NBQUwsa0RBQXlHLENBQUUsbUJBQXZCLElBQW9DLG9CQUF4SCxDQUQ0QyxFQUU1QyxDQUFDLENBQUMsRUFBRixDQUFLO0FBQUEsVUFBQSxTQUFBLEVBQVkseUJBQUEsR0FBd0IsZ0RBQXFCLENBQUUsa0JBQXZCLENBQXhCLEdBQTBELE1BQXRFO1NBQUwsRUFBa0YsU0FBbEYsQ0FGNEM7T0FBOUMsQ0FGYyxFQU1kLFlBTmM7S0FuSGhCLENBQUE7V0E2SEEsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsU0FBQSxFQUFXLE9BQVg7S0FBTixFQUEwQjtNQUN4QixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxLQUFBLEVBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFiO0FBQUEsUUFBb0IsTUFBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBbEM7QUFBQSxRQUEwQyxHQUFBLEVBQUssS0FBL0M7T0FBTixFQUE0RCxDQUMxRCxLQUQwRCxDQUE1RCxDQUR3QixFQUl4QixLQUp3QixFQUt4QixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVksdUJBQUEsR0FBc0IsQ0FBRyxhQUFILEdBQXNCLElBQXRCLEdBQWdDLEVBQWhDLENBQWxDO09BQU4sRUFBK0U7UUFDN0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFVBQUEsU0FBQSxFQUFXLE1BQVg7U0FBTixFQUF5QjtVQUN2QixDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxtQkFBVCxDQUR1QixFQUV2QixDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsWUFBQSxTQUFBLEVBQVcsT0FBWDtXQUFQLEVBQTJCO1lBQ3pCLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxjQUFBLE9BQUEsRUFBUyxJQUFDLENBQUEsa0JBQVY7YUFBSixFQUFrQztjQUNoQyxVQURnQyxFQUVoQyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsZ0JBQUEsU0FBQSxFQUFXLFVBQVg7ZUFBUCxFQUE4QixLQUE5QixDQUZnQyxFQUdoQyxHQUhnQzthQUFsQyxDQUR5QixFQU16QixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsY0FBQSxTQUFBLEVBQVcsQ0FBSSxRQUFTLENBQUEsQ0FBQSxDQUFULEtBQWUsQ0FBZixJQUFxQixRQUFTLENBQUEsQ0FBQSxDQUFULEtBQWUsQ0FBdkMsR0FBOEMsVUFBOUMsR0FBQSxNQUFELENBQVg7QUFBQSxjQUF1RSxPQUFBLEVBQVMsSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQWhGO2FBQUosRUFBbUg7Y0FDakgsV0FEaUgsRUFFakgsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLGdCQUFBLFNBQUEsRUFBVyxVQUFYO2VBQVAsRUFBOEIsT0FBOUIsQ0FGaUgsRUFHakgsR0FIaUg7YUFBbkgsQ0FOeUI7V0FBM0IsQ0FGdUI7U0FBekIsQ0FENkUsRUFnQjdFLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxVQUFBLFNBQUEsRUFBVSxPQUFWO1NBQU4sRUFBeUIsYUFBekIsQ0FoQjZFO09BQS9FLENBTHdCLEVBdUJ4QixDQUFDLENBQUMsR0FBRixDQUNFO0FBQUEsUUFBQSxTQUFBLEVBQVkscUJBQUEsR0FBb0IsQ0FBRyxhQUFILEdBQXNCLElBQXRCLEdBQWdDLEVBQWhDLENBQWhDO09BREYsQ0F2QndCLEVBeUJ4QixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVksMkJBQUEsR0FBMEIsQ0FBRyxhQUFBLElBQWtCLGFBQWEsQ0FBQyxNQUFkLElBQXdCLENBQTdDLEdBQW9ELElBQXBELEdBQThELEVBQTlELENBQXRDO09BQU4sRUFDRSxrQkFERixDQXpCd0IsRUEyQnhCLGdCQTNCd0IsRUE0QnhCLFdBQUEsQ0FBWSxDQUFDLENBQUMsTUFBRixDQUFTLGdCQUFULEVBQTJCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBbEMsQ0FBWixDQTVCd0I7S0FBMUIsRUE5SE07RUFBQSxDQXZZUjtDQURlLENBekRqQixDQUFBOzs7O0FDQUEsSUFBQSxDQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLE1BQ00sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxXQUFiO0FBQUEsRUFDQSxxQkFBQSxFQUF1QixTQUFBLEdBQUE7V0FDckIsTUFEcUI7RUFBQSxDQUR2QjtBQUFBLEVBR0EsTUFBQSxFQUFRLFNBQUEsR0FBQTtXQUNOLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLEtBQVIsRUFETTtFQUFBLENBSFI7Q0FEZSxDQURqQixDQUFBOzs7O0FDQUEsSUFBQSxrQkFBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLFdBR0EsR0FBYyxPQUFBLENBQVEsZUFBUixDQUhkLENBQUE7O0FBQUEsTUFLTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLFdBQWI7QUFBQSxFQUVBLHFCQUFBLEVBQXVCLFNBQUMsU0FBRCxHQUFBO0FBRXJCLFFBQUEsa0JBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxTQUFTLENBQUMsR0FBVixLQUFpQixJQUFDLENBQUEsS0FBSyxDQUFDLEdBQXhCLElBQStCLFNBQVMsQ0FBQyxJQUFWLEtBQWtCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBbkUsQ0FBQTtBQUVBLElBQUEsSUFBRyx5QkFBSDtBQUNFLE1BQUEsUUFBQSxHQUFXLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBaEIsS0FBdUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBcEMsSUFDVCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQWhCLEtBQXdCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLElBRHZDLENBREY7S0FGQTtBQU1BLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVY7QUFDRSxNQUFBLEdBQUEsR0FBTSxTQUFTLENBQUMsS0FBaEIsQ0FBQTtBQUFBLE1BQ0EsR0FBQSxHQUFNLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FEYixDQUFBO0FBQUEsTUFFQSxRQUFBLEdBQVcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFkLEtBQXFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBbkMsSUFDVCxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVosS0FBd0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUQzQixJQUVULEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBWixLQUEwQixHQUFHLENBQUMsT0FBTyxDQUFDLFVBRjdCLElBR1QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFaLEtBQXVCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FMckMsQ0FERjtLQU5BO1dBY0EsU0FoQnFCO0VBQUEsQ0FGdkI7QUFBQSxFQW9CQSxhQUFBLEVBQWUsU0FBQyxJQUFELEVBQU8sR0FBUCxHQUFBO1dBQ2IsSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLENBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBNUIsRUFBZ0MsSUFBaEMsRUFBc0MsR0FBdEMsRUFEYTtFQUFBLENBcEJmO0FBQUEsRUF1QkEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUVOLFFBQUEsdUtBQUE7QUFBQSxJQUFBLFVBQUEsR0FBYSxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxHQUFhLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBckIsQ0FBQSxJQUE4QixJQUFDLENBQUEsS0FBSyxDQUFDLElBQWxELENBQUE7QUFBQSxJQUNBLFdBQUEsR0FBYyxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxHQUFjLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBdEIsQ0FBQSxJQUE4QixJQUFDLENBQUEsS0FBSyxDQUFDLElBRG5ELENBQUE7QUFBQSxJQUdBLE1BQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBbEI7QUFBQSxNQUNBLFNBQUEsRUFBVyxDQUFDLE9BQUEsR0FBTSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQWIsR0FBb0IsR0FBckIsQ0FBQSxHQUEwQixFQUFBLENBQ25DO0FBQUEsUUFBQSxNQUFBLEVBQVEsSUFBUjtBQUFBLFFBQ0EsVUFBQSxFQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxLQUFjLENBRDFCO0FBQUEsUUFFQSxhQUFBLEVBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLEtBQWMsQ0FGN0I7QUFBQSxRQUdBLGtCQUFBLEVBQW9CLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFIM0I7QUFBQSxRQUlBLGtCQUFBLEVBQW9CLFVBSnBCO0FBQUEsUUFLQSxtQkFBQSxFQUFxQixXQUxyQjtBQUFBLFFBTUEsa0JBQUEsRUFBb0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQU4zQjtPQURtQyxDQURyQztLQUpGLENBQUE7QUFBQSxJQWVBLGNBQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFXLGlCQUFYO0FBQUEsTUFDQSxDQUFBLEVBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLElBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBL0IsR0FDRyxDQURILEdBR0csQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFiLEdBQW1CLENBQW5CLEdBQXVCLENBSjdCO0FBQUEsTUFLQSxDQUFBLEVBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWLEdBQ0csQ0FBQSxDQURILEdBRVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWLEdBQ0gsQ0FERyxHQUdILENBQUEsQ0FBRSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQW1CLENBQXBCLENBQUQsR0FBMEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFWNUM7S0FoQkYsQ0FBQTtBQUFBLElBNkJBLGFBQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFXLFdBQVg7QUFBQSxNQUNBLENBQUEsRUFBRyxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQVosR0FBa0IsQ0FBbkIsQ0FBQSxHQUF3QixFQUQzQjtBQUFBLE1BRUEsQ0FBQSxFQUFHLENBQUEsQ0FBRSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQW1CLENBQXBCLENBQUQsR0FBMEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBdEMsR0FBc0QsQ0FGekQ7S0E5QkYsQ0FBQTtBQUFBLElBa0NBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLElBbENsQixDQUFBO0FBbUNBLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVY7QUFDRSxNQUFBLFFBQUEsR0FBVztRQUNULENBQUMsQ0FBQyxLQUFGLENBQVEsRUFBUixFQUFZLFVBQVosQ0FEUyxFQUVULENBQUMsQ0FBQyxLQUFGLENBQVE7QUFBQSxVQUFBLFNBQUEsRUFBVSxRQUFWO1NBQVIsRUFBNEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQW5ELENBRlM7T0FBWCxDQUFBO0FBQUEsTUFJQSxhQUFhLENBQUMsQ0FBZCxHQUFrQixDQUpsQixDQUFBO0FBQUEsTUFLQSxhQUFhLENBQUMsQ0FBZCxJQUFtQixDQUxuQixDQURGO0tBbkNBO0FBQUEsSUE2Q0EsZUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQWMsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLElBQWlCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBM0IsR0FBMkMsV0FBM0MsR0FBNEQsTUFBdkU7QUFBQSxNQUNBLENBQUEsRUFBRyxDQURIO0FBQUEsTUFFQSxDQUFBLEVBQUcsRUFGSDtBQUFBLE1BR0EsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBSG5CO0tBOUNGLENBQUE7QUFBQSxJQW9EQSxVQUFBLEdBQWEsRUFwRGIsQ0FBQTtBQXFEQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFWO0FBQ0UsTUFBQSxRQUFBLEdBQVcsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsR0FBRCxHQUFBO0FBQ1QsY0FBQSxHQUFBO0FBQUEsVUFBQSxHQUFBLEdBQ0U7QUFBQSxZQUFBLEdBQUEsRUFBSyxLQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFiLEtBQW9CLEdBQXpCO0FBQUEsWUFDQSxJQUFBLEVBQU0sS0FBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBYixLQUFxQixHQUQzQjtBQUFBLFlBRUEsSUFBQSxFQUFNLEtBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQWIsS0FBcUIsR0FBckIsSUFBNkIsS0FBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBYixLQUFvQixHQUZ2RDtXQURGLENBQUE7QUFBQSxVQUlBLEdBQUksQ0FBQSxHQUFBLENBQUosR0FBVyxJQUpYLENBQUE7aUJBS0EsRUFBQSxDQUFHLEdBQUgsRUFOUztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVgsQ0FBQTtBQUFBLE1BUUEsR0FBQSxHQUFNLFFBQUEsQ0FBUyxTQUFULENBUk4sQ0FBQTtBQUFBLE1BU0EsR0FBQSxHQUFNLFFBQUEsQ0FBUyxZQUFULENBVE4sQ0FBQTtBQUFBLE1BVUEsR0FBQSxHQUFNLFFBQUEsQ0FBUyxVQUFULENBVk4sQ0FBQTtBQUFBLE1BWUEsVUFBQSxHQUFhO1FBQ1gsQ0FBQyxDQUFDLEtBQUYsQ0FBUTtBQUFBLFVBQUEsU0FBQSxFQUFVLEdBQVY7U0FBUixFQUF1QixJQUFDLENBQUEsS0FBSyxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQXJDLENBRFcsRUFFWCxDQUFDLENBQUMsS0FBRixDQUFRO0FBQUEsVUFBQSxTQUFBLEVBQVUsT0FBVjtTQUFSLEVBQTJCLEdBQTNCLENBRlcsRUFHWCxDQUFDLENBQUMsS0FBRixDQUFRO0FBQUEsVUFBQSxTQUFBLEVBQVUsR0FBVjtTQUFSLEVBQXVCLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBckMsQ0FIVyxFQUlYLENBQUMsQ0FBQyxLQUFGLENBQVE7QUFBQSxVQUFBLFNBQUEsRUFBVSxPQUFWO1NBQVIsRUFBMkIsR0FBM0IsQ0FKVyxFQUtYLENBQUMsQ0FBQyxLQUFGLENBQVE7QUFBQSxVQUFBLFNBQUEsRUFBVSxHQUFWO1NBQVIsRUFBdUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFyQyxDQUxXO09BWmIsQ0FERjtLQXJEQTtBQTBFQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWO0FBQ0UsTUFBQSxHQUFBLEdBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBbkIsQ0FBQTtBQUFBLE1BQ0EsVUFBQSxHQUFhLENBQUMsR0FBRyxDQUFDLFFBQUwsRUFBZSxHQUFHLENBQUMsVUFBbkIsRUFBK0IsR0FBRyxDQUFDLE9BQW5DLENBQTJDLENBQUMsSUFBNUMsQ0FBaUQsR0FBakQsQ0FEYixDQUFBO0FBQUEsTUFFQSxlQUFlLENBQUMsQ0FBaEIsR0FBb0IsRUFGcEIsQ0FERjtLQTFFQTtBQUFBLElBZ0ZBLGFBQUE7QUFBZ0IsY0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQWQ7QUFBQSxhQUNULElBRFM7aUJBQ0MsYUFERDtBQUFBLGFBRVQsS0FGUztpQkFFRSxjQUZGO0FBQUE7aUJBR1QsS0FIUztBQUFBO2lCQWhGaEIsQ0FBQTtBQXFGQSxJQUFBLElBQUcsdUJBQUEsSUFBdUIsMkJBQTFCO0FBQ0UsTUFBQSxJQUFBLEdBQU8sQ0FBQyxDQUFDLE9BQUYsQ0FDTDtBQUFBLFFBQUEsU0FBQSxFQUFXLGFBQVg7QUFBQSxRQUNBLE1BQUEsRUFBUSxDQUNKLEVBQUEsR0FBRSxDQUFBLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxLQUFSLEdBQWMsQ0FBZCxDQUFGLEdBQW1CLEdBQW5CLEdBQXFCLENBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLEdBQWMsQ0FBZCxDQURqQixFQUVKLEVBQUEsR0FBRSxDQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFhLENBQWIsQ0FBRixHQUFrQixHQUFsQixHQUFvQixDQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxHQUFjLENBQWQsQ0FGaEIsRUFHSixFQUFBLEdBQUUsQ0FBQSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsR0FBYSxDQUFiLENBQUYsR0FBa0IsR0FBbEIsR0FBb0IsQ0FBQSxDQUFBLElBQUUsQ0FBQSxLQUFLLENBQUMsTUFBUixHQUFlLENBQWYsR0FBbUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUExQixDQUhoQixDQUlMLENBQUMsSUFKSSxDQUlDLEdBSkQsQ0FEUjtPQURLLENBQVAsQ0FERjtLQXJGQTtBQUFBLElBOEZBLGFBQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFXLGVBQVg7S0EvRkYsQ0FBQTtXQWtHQSxDQUFDLENBQUMsQ0FBRixDQUFJLE1BQUosRUFBWTtNQUVWLENBQUMsQ0FBQyxJQUFGLENBQ0U7QUFBQSxRQUFBLFNBQUEsRUFBVyxTQUFYO0FBQUEsUUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQURkO0FBQUEsUUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUZmO0FBQUEsUUFHQSxLQUFBLEVBQU8sSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUhQO0FBQUEsUUFJQSxDQUFBLEVBQUcsQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLEtBQVIsR0FBYyxDQUpqQjtBQUFBLFFBS0EsQ0FBQSxFQUFHLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxNQUFSLEdBQWUsQ0FMbEI7T0FERixDQUZVLEVBVVYsSUFWVSxFQVlWLENBQUMsQ0FBQyxJQUFGLENBQ0U7QUFBQSxRQUFBLFNBQUEsRUFBVyxlQUFYO0FBQUEsUUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQURkO0FBQUEsUUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUZmO0FBQUEsUUFHQSxDQUFBLEVBQUcsQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLEtBQVIsR0FBYyxDQUhqQjtBQUFBLFFBSUEsQ0FBQSxFQUFHLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxNQUFSLEdBQWUsQ0FKbEI7T0FERixDQVpVLEVBbUJWLENBQUMsQ0FBQyxJQUFGLENBQ0U7QUFBQSxRQUFBLFNBQUEsRUFBVyxXQUFYO0FBQUEsUUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQURkO0FBQUEsUUFFQSxFQUFBLEVBQUksQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLEtBQVIsR0FBYyxDQUZsQjtBQUFBLFFBR0EsRUFBQSxFQUFJLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxNQUFSLEdBQWUsQ0FBZixHQUFtQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUhuQztBQUFBLFFBSUEsRUFBQSxFQUFJLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFhLENBSmpCO0FBQUEsUUFLQSxFQUFBLEVBQUksQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLE1BQVIsR0FBZSxDQUFmLEdBQW1CLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBTG5DO09BREYsQ0FuQlUsRUEyQlYsQ0FBQyxDQUFDLElBQUYsQ0FBTyxjQUFQLEVBQXVCLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBOUIsQ0EzQlUsRUE0QlYsQ0FBQyxDQUFDLElBQUYsQ0FBTyxhQUFQLEVBQXNCLFFBQXRCLENBNUJVLEVBNkJWLENBQUMsQ0FBQyxJQUFGLENBQU8sZUFBUCxFQUF3QixVQUF4QixDQTdCVSxFQWlDVixXQUFBLENBQVk7QUFBQSxRQUFBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQWI7QUFBQSxRQUFtQixJQUFBLEVBQU0sS0FBekI7QUFBQSxRQUFnQyxFQUFBLEVBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUEzQztBQUFBLFFBQWdELElBQUEsRUFBTSxVQUF0RDtBQUFBLFFBQWtFLGFBQUEsRUFBZSxJQUFDLENBQUEsYUFBbEY7QUFBQSxRQUFpRyxHQUFBLEVBQUssT0FBdEc7T0FBWixDQWpDVSxFQWtDVixXQUFBLENBQVk7QUFBQSxRQUFBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQWI7QUFBQSxRQUFtQixJQUFBLEVBQU0sTUFBekI7QUFBQSxRQUFpQyxFQUFBLEVBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUE1QztBQUFBLFFBQWtELElBQUEsRUFBTSxXQUF4RDtBQUFBLFFBQXFFLGFBQUEsRUFBZSxJQUFDLENBQUEsYUFBckY7QUFBQSxRQUFvRyxHQUFBLEVBQUssUUFBekc7T0FBWixDQWxDVTtLQUFaLEVBcEdNO0VBQUEsQ0F2QlI7Q0FEZSxDQUxqQixDQUFBOzs7O0FDQUEsSUFBQSxxQkFBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLGNBR0EsR0FBaUIsT0FBQSxDQUFRLGtCQUFSLENBSGpCLENBQUE7O0FBQUEsTUFLTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLGNBQWI7QUFBQSxFQW9CQSxhQUFBLEVBQWUsU0FBQyxJQUFELEVBQU8sR0FBUCxHQUFBO1dBQ2IsSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLENBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBNUIsRUFBZ0MsSUFBaEMsRUFBc0MsR0FBdEMsRUFEYTtFQUFBLENBcEJmO0FBQUEsRUF1QkEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEsd05BQUE7QUFBQSxJQUFBLFVBQUEsR0FBYSxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxHQUFhLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBckIsQ0FBQSxJQUE4QixJQUFDLENBQUEsS0FBSyxDQUFDLElBQWxELENBQUE7QUFBQSxJQUNBLFdBQUEsR0FBYyxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxHQUFjLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBdEIsQ0FBQSxJQUE4QixJQUFDLENBQUEsS0FBSyxDQUFDLElBRG5ELENBQUE7QUFBQSxJQUlBLE1BQUEsR0FDRTtBQUFBLE1BQUEsS0FBQSxFQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFQLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWEsQ0FBeEIsR0FBNEIsSUFBbEM7QUFBQSxRQUNBLEdBQUEsRUFBSyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVAsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBYyxDQUF6QixHQUE2QixJQURsQztPQURGO0FBQUEsTUFHQSxTQUFBLEVBQVcsQ0FBQyxVQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFoQixHQUF1QixHQUF4QixDQUFBLEdBQTZCLEVBQUEsQ0FDdEM7QUFBQSxRQUFBLFNBQUEsRUFBVyxJQUFYO0FBQUEsUUFDQSxhQUFBLEVBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLEtBQWMsQ0FEN0I7QUFBQSxRQUVBLGdCQUFBLEVBQWtCLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxLQUFjLENBRmhDO0FBQUEsUUFHQSxxQkFBQSxFQUF1QixJQUFDLENBQUEsS0FBSyxDQUFDLFVBSDlCO0FBQUEsUUFJQSxxQkFBQSxFQUF1QixVQUp2QjtBQUFBLFFBS0Esc0JBQUEsRUFBd0IsV0FMeEI7QUFBQSxRQU1BLHFCQUFBLEVBQXVCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFOOUI7QUFBQSxRQU9BLGdCQUFBLEVBQWtCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxJQUFpQixDQUFBLENBQUssSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLElBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBN0IsQ0FQdkM7T0FEc0MsQ0FIeEM7S0FMRixDQUFBO0FBQUEsSUFtQkEsY0FBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQVcsb0JBQVg7QUFBQSxNQUNBLENBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVAsSUFBcUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUEvQixHQUNHLENBREgsR0FHRyxDQUFBLElBQUUsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWIsR0FBbUIsQ0FBbkIsR0FBdUIsQ0FKN0I7QUFBQSxNQUtBLENBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVYsR0FDRyxDQUFBLENBREgsR0FFUyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVYsR0FDSCxDQURHLEdBR0gsQ0FBQSxDQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQVosR0FBbUIsQ0FBcEIsQ0FBRCxHQUEwQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxhQVY1QztLQXBCRixDQUFBO0FBQUEsSUFpQ0EsYUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQVcsY0FBWDtBQUFBLE1BQ0EsQ0FBQSxFQUFHLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBWixHQUFrQixDQUFuQixDQUFBLEdBQXdCLEVBRDNCO0FBQUEsTUFFQSxDQUFBLEVBQUcsQ0FBQSxDQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQVosR0FBbUIsQ0FBcEIsQ0FBRCxHQUEwQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUF0QyxHQUFzRCxDQUZ6RDtLQWxDRixDQUFBO0FBQUEsSUF5Q0EsZUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQWMsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLElBQWlCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBM0IsR0FBMkMsY0FBM0MsR0FBK0QsTUFBMUU7QUFBQSxNQUNBLENBQUEsRUFBRyxDQURIO0FBQUEsTUFFQSxDQUFBLEVBQUcsRUFGSDtBQUFBLE1BR0EsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBSG5CO0tBMUNGLENBQUE7QUFBQSxJQWdEQSxVQUFBLEdBQWEsRUFoRGIsQ0FBQTtBQWlEQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFWO0FBQ0UsTUFBQSxRQUFBLEdBQVcsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsR0FBRCxHQUFBO0FBQ1QsY0FBQSxHQUFBO0FBQUEsVUFBQSxHQUFBLEdBQ0U7QUFBQSxZQUFBLEdBQUEsRUFBSyxLQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFiLEtBQW9CLEdBQXpCO0FBQUEsWUFDQSxJQUFBLEVBQU0sS0FBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBYixLQUFxQixHQUQzQjtBQUFBLFlBRUEsSUFBQSxFQUFNLEtBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQWIsS0FBcUIsR0FBckIsSUFBNkIsS0FBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBYixLQUFvQixHQUZ2RDtXQURGLENBQUE7QUFBQSxVQUlBLEdBQUksQ0FBQSxHQUFBLENBQUosR0FBVyxJQUpYLENBQUE7aUJBS0EsRUFBQSxDQUFHLEdBQUgsRUFOUztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVgsQ0FBQTtBQUFBLE1BUUEsR0FBQSxHQUFNLFFBQUEsQ0FBUyxTQUFULENBUk4sQ0FBQTtBQUFBLE1BU0EsR0FBQSxHQUFNLFFBQUEsQ0FBUyxZQUFULENBVE4sQ0FBQTtBQUFBLE1BVUEsR0FBQSxHQUFNLFFBQUEsQ0FBUyxVQUFULENBVk4sQ0FBQTtBQUFBLE1BWUEsVUFBQSxHQUFhO1FBQ1gsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFVLEdBQVY7U0FBUCxFQUFzQixJQUFDLENBQUEsS0FBSyxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQXBDLENBRFcsRUFFWCxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVUsT0FBVjtTQUFQLEVBQTBCLEdBQTFCLENBRlcsRUFHWCxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVUsR0FBVjtTQUFQLEVBQXNCLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBcEMsQ0FIVyxFQUlYLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVSxPQUFWO1NBQVAsRUFBMEIsR0FBMUIsQ0FKVyxFQUtYLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVSxHQUFWO1NBQVAsRUFBc0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFwQyxDQUxXO09BWmIsQ0FERjtLQWpEQTtBQXNFQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWO0FBQ0UsTUFBQSxHQUFBLEdBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBbkIsQ0FBQTtBQUFBLE1BQ0EsVUFBQSxHQUFhLENBQUMsR0FBRyxDQUFDLFFBQUwsRUFBZSxHQUFHLENBQUMsVUFBbkIsRUFBK0IsR0FBRyxDQUFDLE9BQW5DLENBQTJDLENBQUMsSUFBNUMsQ0FBaUQsR0FBakQsQ0FEYixDQUFBO0FBQUEsTUFFQSxlQUFlLENBQUMsQ0FBaEIsR0FBb0IsRUFGcEIsQ0FERjtLQXRFQTtBQUFBLElBNEVBLGFBQUE7QUFBZ0IsY0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQWQ7QUFBQSxhQUNULElBRFM7aUJBQ0MsZ0JBREQ7QUFBQSxhQUVULEtBRlM7aUJBRUUsaUJBRkY7QUFBQTtpQkFHVCxLQUhTO0FBQUE7aUJBNUVoQixDQUFBO0FBaUZBLElBQUEsSUFBRyx1QkFBQSxJQUF1QiwyQkFBMUI7QUFDRSxNQUFBLElBQUEsR0FBTyxDQUFDLENBQUMsT0FBRixDQUNMO0FBQUEsUUFBQSxTQUFBLEVBQVcsYUFBWDtBQUFBLFFBQ0EsTUFBQSxFQUFRLENBQ0osRUFBQSxHQUFFLENBQUEsQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLEtBQVIsR0FBYyxDQUFkLENBQUYsR0FBbUIsR0FBbkIsR0FBcUIsQ0FBQSxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBYyxDQUFkLENBRGpCLEVBRUosRUFBQSxHQUFFLENBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWEsQ0FBYixDQUFGLEdBQWtCLEdBQWxCLEdBQW9CLENBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLEdBQWMsQ0FBZCxDQUZoQixFQUdKLEVBQUEsR0FBRSxDQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFhLENBQWIsQ0FBRixHQUFrQixHQUFsQixHQUFvQixDQUFBLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxNQUFSLEdBQWUsQ0FBZixHQUFtQixJQUFDLENBQUEsS0FBSyxDQUFDLFdBQTFCLENBSGhCLENBSUwsQ0FBQyxJQUpJLENBSUMsR0FKRCxDQURSO09BREssQ0FBUCxDQURGO0tBakZBO0FBQUEsSUEwRkEsYUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQVcsa0JBQVg7S0EzRkYsQ0FBQTtBQUFBLElBOEZBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLElBOUZsQixDQUFBO0FBQUEsSUFnR0EsU0FBQSxHQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxJQUFxQixJQUFDLENBQUEsS0FBSyxDQUFDLFVBaEd4QyxDQUFBO0FBaUdBLElBQUEsSUFBRyxDQUFBLFNBQUg7QUFDRSxNQUFBLEtBQUEsR0FBUSxjQUFBLENBQWU7QUFBQSxRQUFBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQWI7QUFBQSxRQUFtQixJQUFBLEVBQU0sS0FBekI7QUFBQSxRQUFnQyxFQUFBLEVBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUEzQztBQUFBLFFBQWdELElBQUEsRUFBTSxVQUF0RDtBQUFBLFFBQWtFLGFBQUEsRUFBZSxJQUFDLENBQUEsYUFBbEY7QUFBQSxRQUFpRyxHQUFBLEVBQUssT0FBdEc7T0FBZixDQUFSLENBQUE7QUFBQSxNQUNBLE1BQUEsR0FBUyxjQUFBLENBQWU7QUFBQSxRQUFBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQWI7QUFBQSxRQUFtQixJQUFBLEVBQU0sTUFBekI7QUFBQSxRQUFpQyxFQUFBLEVBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUE1QztBQUFBLFFBQWtELElBQUEsRUFBTSxXQUF4RDtBQUFBLFFBQXFFLGFBQUEsRUFBZSxJQUFDLENBQUEsYUFBckY7QUFBQSxRQUFvRyxHQUFBLEVBQUssUUFBekc7T0FBZixDQURULENBQUE7QUFBQSxNQUVBLElBQUEsR0FBTyxDQUFDLENBQUMsSUFBRixDQUFPLGFBQVAsRUFBc0IsUUFBdEIsQ0FGUCxDQURGO0tBQUEsTUFBQTtBQUtFLE1BQUEsVUFBQSxHQUFhLENBQUMsQ0FBQyxJQUFGLENBQU8sZUFBUCxFQUF3QixVQUF4QixDQUFiLENBTEY7S0FqR0E7QUF3R0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBVjtBQUNFLE1BQUEsR0FBQSxHQUNFLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxRQUFBLFNBQUEsRUFBVyxpQkFBWDtPQUFQLEVBQXFDO1FBQ25DLFVBRG1DLEVBRW5DLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxRQUFYO1NBQVAsRUFBNEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQW5ELENBRm1DO09BQXJDLENBREYsQ0FERjtLQXhHQTtXQStHQSxDQUFDLENBQUMsR0FBRixDQUFNLE1BQU4sRUFBYztNQUNaLEdBRFksRUFFWixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVcsZUFBWDtPQUFOLEVBQWtDLENBQ2hDLENBQUMsQ0FBQyxJQUFGLENBQU8sY0FBUCxFQUF1QixJQUFDLENBQUEsS0FBSyxDQUFDLFNBQTlCLENBRGdDLEVBRWhDLElBRmdDLENBQWxDLENBRlksRUFNWixVQU5ZLEVBUVosS0FSWSxFQVNaLE1BVFk7S0FBZCxFQWhITTtFQUFBLENBdkJSO0NBRGUsQ0FMakIsQ0FBQTs7OztBQ0FBLElBQUEsS0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxhQUFiO0FBQUEsRUFFQSxhQUFBLEVBQWUsU0FBQyxHQUFELEVBQU0sRUFBTixHQUFBO1dBQ2IsSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLENBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBNUIsRUFBa0MsR0FBbEMsRUFEYTtFQUFBLENBRmY7QUFBQSxFQUtBLHFCQUFBLEVBQXVCLFNBQUMsRUFBRCxHQUFBO1dBQ3JCLEVBQUUsQ0FBQyxFQUFILEtBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQURLO0VBQUEsQ0FMdkI7QUFBQSxFQVFBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFDTixRQUFBLGtEQUFBO0FBQUEsSUFBQSxRQUFBLEdBQWMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLEtBQWUsS0FBbEIsR0FBNkIsQ0FBN0IsR0FBb0MsQ0FBL0MsQ0FBQTtBQUFBLElBRUEsTUFBQSxHQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxLQUFhLENBQWhCLEdBQXVCLE1BQXZCLEdBQW1DLEVBRjVDLENBQUE7QUFBQSxJQUlBLE1BQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFZLFlBQUEsR0FBVyxDQUFBLENBQUEsSUFBRSxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBYixHQUFtQixDQUFuQixHQUF1QixRQUF2QixDQUFYLEdBQTRDLElBQTVDLEdBQStDLENBQUEsQ0FBQSxJQUFFLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFiLEdBQXlCLENBQXpCLEdBQTZCLENBQTdCLENBQS9DLEdBQStFLEdBQTNGO0FBQUEsTUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBWixHQUFrQixDQUR6QjtBQUFBLE1BRUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQVosR0FBcUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FGekM7QUFBQSxNQUdBLFNBQUEsRUFBWSxVQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUg1QjtLQUxGLENBQUE7QUFBQSxJQVVBLFNBQUEsR0FDRTtBQUFBLE1BQUEsQ0FBQSxFQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQVosR0FBa0IsQ0FBckI7QUFBQSxNQUNBLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQW1CLENBQW5CLEdBQXVCLENBRDFCO0FBQUEsTUFFQSxTQUFBLEVBQVcsTUFGWDtLQVhGLENBQUE7QUFBQSxJQWVBLGFBQUEsR0FBZ0IsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQWxDLENBQUEsR0FBaUQsQ0FmakUsQ0FBQTtXQWlCQSxDQUFDLENBQUMsQ0FBRixDQUFJLE1BQUosRUFBWTtNQUNWLENBQUMsQ0FBQyxJQUFGLENBQ0U7QUFBQSxRQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFaLEdBQWtCLENBQXpCO0FBQUEsUUFDQSxNQUFBLEVBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBWixHQUFxQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUR6QztBQUFBLFFBRUEsU0FBQSxFQUFZLGFBQUEsR0FBWSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQW5CLEdBQXlCLEdBQXpCLEdBQTJCLE1BRnZDO09BREYsQ0FEVSxFQUtWLENBQUMsQ0FBQyxJQUFGLENBQU8sU0FBUCxFQUFrQixJQUFDLENBQUEsS0FBSyxDQUFDLEVBQXpCLENBTFUsRUFNVixDQUFDLENBQUMsSUFBRixDQUNFO0FBQUEsUUFBQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBWixHQUFrQixDQUF6QjtBQUFBLFFBQ0EsTUFBQSxFQUFRLGFBRFI7QUFBQSxRQUVBLFNBQUEsRUFBVyxlQUZYO0FBQUEsUUFHQSxPQUFBLEVBQVMsSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBSFQ7T0FERixDQU5VLEVBV1YsQ0FBQyxDQUFDLElBQUYsQ0FDRTtBQUFBLFFBQUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQVosR0FBa0IsQ0FBekI7QUFBQSxRQUNBLE1BQUEsRUFBUSxhQURSO0FBQUEsUUFFQSxDQUFBLEVBQUcsYUFGSDtBQUFBLFFBR0EsU0FBQSxFQUFXLGVBSFg7QUFBQSxRQUlBLE9BQUEsRUFBUyxJQUFDLENBQUEsYUFBYSxDQUFDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FKVDtPQURGLENBWFU7S0FBWixFQWxCTTtFQUFBLENBUlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsSUFBQSxLQUFBOztBQUFBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBVixDQUFBOztBQUFBLEVBQ0EsR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBRGxCLENBQUE7O0FBQUEsTUFHTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLGdCQUFiO0FBQUEsRUFFQSxhQUFBLEVBQWUsU0FBQyxHQUFELEVBQU0sRUFBTixHQUFBO1dBQ2IsSUFBQyxDQUFBLEtBQUssQ0FBQyxhQUFQLENBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBNUIsRUFBa0MsR0FBbEMsRUFEYTtFQUFBLENBRmY7QUFBQSxFQUtBLHFCQUFBLEVBQXVCLFNBQUMsRUFBRCxHQUFBO1dBQ3JCLEVBQUUsQ0FBQyxFQUFILEtBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQURLO0VBQUEsQ0FMdkI7QUFBQSxFQVFBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFDTixRQUFBLHNEQUFBO0FBQUEsSUFBQSxRQUFBLEdBQWMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLEtBQWUsS0FBbEIsR0FBNkIsQ0FBN0IsR0FBb0MsQ0FBL0MsQ0FBQTtBQUFBLElBRUEsTUFBQSxHQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxLQUFhLENBQWhCLEdBQXVCLFFBQXZCLEdBQXFDLEVBRjlDLENBQUE7QUFBQSxJQUlBLE1BQUEsR0FDRTtBQUFBLE1BQUEsU0FBQSxFQUFZLGFBQUEsR0FBWSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQW5CLEdBQXlCLGNBQXpCLEdBQXNDLE1BQWxEO0tBTEYsQ0FBQTtBQUFBLElBT0EsU0FBQSxHQUNFO0FBQUEsTUFBQSxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBWixHQUFrQixDQUFyQjtBQUFBLE1BQ0EsQ0FBQSxFQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQVosR0FBbUIsQ0FBbkIsR0FBdUIsQ0FEMUI7QUFBQSxNQUVBLFNBQUEsRUFBVyxpQkFGWDtLQVJGLENBQUE7QUFBQSxJQVlBLGFBQUEsR0FBZ0IsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQXFCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQWxDLENBQUEsR0FBaUQsQ0FaakUsQ0FBQTtBQUFBLElBY0EsRUFBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxHQUFZLENBQWYsR0FBc0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUE3QixHQUFxQyxFQWQxQyxDQUFBO1dBZ0JBLENBQUMsQ0FBQyxHQUFGLENBQU0sTUFBTixFQUFjO01BQ1osQ0FBQyxDQUFDLElBQUYsQ0FBTyxTQUFQLEVBQWtCLEVBQWxCLENBRFksRUFFWixDQUFDLENBQUMsR0FBRixDQUNFO0FBQUEsUUFBQSxTQUFBLEVBQVcscUJBQVg7QUFBQSxRQUNBLE9BQUEsRUFBUyxJQUFDLENBQUEsYUFBYSxDQUFDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FEVDtPQURGLENBRlksRUFLWixDQUFDLENBQUMsR0FBRixDQUNFO0FBQUEsUUFBQSxTQUFBLEVBQVcscUJBQVg7QUFBQSxRQUNBLE9BQUEsRUFBUyxJQUFDLENBQUEsYUFBYSxDQUFDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FEVDtPQURGLENBTFk7S0FBZCxFQWpCTTtFQUFBLENBUlI7Q0FEZSxDQUhqQixDQUFBOzs7O0FDQUEsSUFBQSw2QkFBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLHNCQUlBLEdBQXlCLE9BQUEsQ0FBUSwwQkFBUixDQUp6QixDQUFBOztBQUFBLE1BUU0sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLGVBQUEsRUFBaUIsU0FBQSxHQUFBO1dBQ2Y7QUFBQSxNQUFBLENBQUEsRUFBRyxDQUFIO01BRGU7RUFBQSxDQUFqQjtBQUFBLEVBR0EsaUJBQUEsRUFBbUIsU0FBQSxHQUFBO1dBQ2pCLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQXBCLENBQXVCLFFBQXZCLEVBQWlDLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFBLEdBQUE7ZUFDL0IsS0FBQyxDQUFBLFdBQUQsQ0FBQSxFQUQrQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWpDLEVBRGlCO0VBQUEsQ0FIbkI7QUFBQSxFQVlBLGFBQUEsRUFBZSxTQUFDLEVBQUQsR0FBQTtXQUNiLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQXBCLENBQXlCLEVBQXpCLEVBRGE7RUFBQSxDQVpmO0FBQUEsRUFlQSxrQkFBQSxFQUFvQixTQUFBLEdBQUE7V0FDbEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBcEIsQ0FBQSxFQURrQjtFQUFBLENBZnBCO0FBQUEsRUFrQkEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEseUJBQUE7QUFBQSxJQUFBLGVBQUEsR0FBa0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBcEIsQ0FBQSxDQUE0QixDQUFDLEdBQTdCLENBQWlDLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEVBQUQsRUFBSyxLQUFMLEdBQUE7QUFDakQsWUFBQSxRQUFBO0FBQUEsUUFBQSxHQUFBLEdBQU0sRUFBRSxDQUFDLElBQVQsQ0FBQTtBQUVBLFFBQUEsSUFBRyxtQkFBSDtBQUNFLFVBQUEsR0FBQSxHQUFPLFVBQUEsR0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBREY7U0FBQSxNQUFBO0FBR0UsVUFBQSxHQUFBLEdBQU0sRUFBQSxHQUFFLEdBQUcsQ0FBQyxFQUFOLEdBQVUsR0FBVixHQUFZLEdBQUcsQ0FBQyxJQUF0QixDQUhGO1NBRkE7ZUFPQSxzQkFBQSxDQUNFO0FBQUEsVUFBQSxPQUFBLEVBQVMsS0FBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLEtBQXBCLEVBQTBCLEtBQTFCLENBQVQ7QUFBQSxVQUNBLEdBQUEsRUFBTSxPQUFBLEdBQU0sS0FBTixHQUFhLEdBQWIsR0FBZSxHQURyQjtBQUFBLFVBRUEsUUFBQSxFQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQXBCLEtBQThCLEtBRnhDO0FBQUEsVUFHQSxTQUFBLEVBQVcsS0FBQyxDQUFBLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBcEIsS0FBK0IsS0FIMUM7QUFBQSxVQUlBLEVBQUEsRUFBSSxFQUpKO1NBREYsRUFSaUQ7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqQyxDQUFsQixDQUFBO0FBQUEsSUFlQSxRQUFBLEdBQ0U7QUFBQSxNQUFBLFNBQUEsRUFBVyxFQUFBLENBQ1Q7QUFBQSxRQUFBLGNBQUEsRUFBZ0IsSUFBaEI7QUFBQSxRQUNBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUQxQjtPQURTLENBQVg7S0FoQkYsQ0FBQTtXQW9CQSxDQUFDLENBQUMsR0FBRixDQUFNLFFBQU4sRUFBZ0I7TUFDZCxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsUUFBQSxTQUFBLEVBQVcsa0JBQVg7QUFBQSxRQUErQixPQUFBLEVBQVMsSUFBQyxDQUFBLGtCQUF6QztPQUFKLEVBQWlFO1FBQy9ELFFBRCtELEVBRS9ELENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxzQkFBWDtTQUFQLEVBQTBDLEtBQTFDLENBRitEO09BQWpFLENBRGMsRUFLZCxDQUFDLENBQUMsRUFBRixDQUFLLEVBQUwsRUFBUyxnQkFBVCxDQUxjLEVBTWQsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLFFBQUEsU0FBQSxFQUFXLGVBQVg7T0FBTCxFQUFpQyxlQUFlLENBQUMsT0FBaEIsQ0FBQSxDQUFqQyxDQU5jO0tBQWhCLEVBckJNO0VBQUEsQ0FsQlI7Q0FEZSxDQVJqQixDQUFBOzs7O0FDQUEsSUFBQSxtR0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLGNBR0EsR0FBaUIsT0FBQSxDQUFRLHdCQUFSLENBSGpCLENBQUE7O0FBQUEsVUFJQSxHQUFhLE9BQUEsQ0FBUSxvQkFBUixDQUpiLENBQUE7O0FBQUEsT0FLQSxHQUFVLE9BQUEsQ0FBUSxpQkFBUixDQUxWLENBQUE7O0FBQUEsZ0JBTUEsR0FBbUIsT0FBQSxDQUFRLDBCQUFSLENBTm5CLENBQUE7O0FBQUEsaUJBT0EsR0FBb0IsT0FBQSxDQUFRLDJCQUFSLENBUHBCLENBQUE7O0FBQUEsU0FTQSxHQUFZLFNBQUMsS0FBRCxHQUFBO0FBQ1YsRUFBQSxJQUFHLEtBQUEsR0FBUSxDQUFYO0FBQ0UsV0FBTyxNQUFQLENBREY7R0FBQTtBQUVBLEVBQUEsSUFBRyxLQUFBLEdBQVEsQ0FBWDtBQUNFLFdBQU8sS0FBUCxDQURGO0dBRkE7U0FJQSxHQUxVO0FBQUEsQ0FUWixDQUFBOztBQUFBLE9BaUJBLEdBQVUsU0FBQyxFQUFELEdBQUE7QUFDUixNQUFBLHlJQUFBO0FBQUEsRUFBQSxTQUFBLEdBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBZCxHQUFzQixDQUF0QixLQUEyQixDQUE5QixHQUFxQyxLQUFyQyxHQUFnRCxNQUE1RCxDQUFBO0FBQ0EsRUFBQSxJQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWQsS0FBdUIsQ0FBMUI7QUFDRSxJQUFBLFNBQUEsR0FBWSxFQUFaLENBREY7R0FEQTtBQUlBLEVBQUEsSUFBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFkLEdBQXFCLEVBQXhCO0FBQ0UsSUFBQSxJQUFBLEdBQU8sS0FBUCxDQUFBO0FBQUEsSUFDQSxLQUFBLEdBQVEsRUFEUixDQURGO0dBQUEsTUFHSyxJQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQWQsR0FBcUIsQ0FBeEI7QUFDSCxJQUFBLElBQUEsR0FBUSxHQUFBLEdBQUUsQ0FBQSxjQUFBLENBQWUsTUFBZixFQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFyQyxDQUFBLENBQUYsR0FBOEMsR0FBdEQsQ0FBQTtBQUNBLElBQUEsSUFBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFkLEtBQXVCLENBQTFCO0FBQ0UsTUFBQSxLQUFBLEdBQVMsSUFBQSxHQUFHLENBQUEsY0FBQSxDQUFlLE9BQWYsRUFBd0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBdEMsQ0FBQSxDQUFaLENBREY7S0FBQSxNQUFBO0FBR0UsTUFBQSxLQUFBLEdBQVEsTUFBUixDQUhGO0tBRkc7R0FBQSxNQUFBO0FBT0gsSUFBQSxJQUFBLEdBQU8sT0FBUCxDQUFBO0FBQUEsSUFDQSxLQUFBLEdBQVEsRUFEUixDQVBHO0dBUEw7QUFBQSxFQWlCQSxTQUFBLEdBQ0UsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLElBQUEsU0FBQSxFQUFXLFdBQVg7R0FBUCxFQUErQjtJQUM3QixJQUQ2QixFQUU3QixDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsTUFBQSxTQUFBLEVBQVcsU0FBWDtLQUFQLEVBQTZCLEtBQTdCLENBRjZCO0dBQS9CLENBbEJGLENBQUE7QUFBQSxFQXVCQSxNQUFBLEdBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQXZCakIsQ0FBQTtBQXlCQSxVQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBZjtBQUFBLFNBRU8sTUFGUDthQUdJO1FBQ0UsU0FERixFQUVFLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVSxRQUFWO1NBQVAsRUFBMkIsdUJBQTNCLENBRkY7UUFISjtBQUFBLFNBT08sSUFQUDtBQVFJLE1BQUEsT0FBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUExQixFQUFDLGVBQUQsRUFBUSxnQkFBUixDQUFBO0FBQUEsTUFDQSxPQUFBLEdBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQURsQixDQUFBO0FBQUEsTUFFQSxPQUFBLEdBQWEsQ0FBQyxLQUFBLEdBQVEsTUFBVCxDQUFBLElBQW9CLE9BQU8sQ0FBQyxJQUEvQixHQUF5QyxTQUF6QyxHQUF3RCxFQUZsRSxDQUFBO0FBQUEsTUFHQSxRQUFBLEdBQWMsQ0FBQyxNQUFBLEdBQVMsS0FBVixDQUFBLElBQW9CLE9BQU8sQ0FBQyxJQUEvQixHQUF5QyxTQUF6QyxHQUF3RCxFQUhuRSxDQUFBO0FBS0EsTUFBQSxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBUixLQUFnQixNQUFuQjtBQUNFLFFBQUEsR0FBQSxHQUFNO1VBQ0osQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFlBQUEsU0FBQSxFQUFXLFFBQVg7V0FBUCxFQUE0QixnQkFBQSxDQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQS9CLENBQTVCLENBREksRUFFSixDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsWUFBQSxTQUFBLEVBQVcsU0FBWDtXQUFQLEVBQTZCLEdBQTdCLENBRkksRUFHSixDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsWUFBQSxTQUFBLEVBQVcsU0FBWDtXQUFQLEVBQTZCLGdCQUFBLENBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBL0IsQ0FBN0IsQ0FISTtTQUFOLENBREY7T0FBQSxNQUFBO0FBT0UsUUFBQSxHQUFBLEdBQU0sQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLEVBQUEsR0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQVYsR0FBZ0IsS0FBM0I7U0FBUCxFQUF3QyxnQkFBQSxDQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQSxpQkFBQSxDQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQTFCLENBQUEsQ0FBL0IsQ0FBeEMsQ0FBTixDQVBGO09BTEE7YUFjQTtRQUNFLFNBREYsRUFFRSxHQUZGLEVBR0csTUFBQSxHQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQXJCLEdBQWdDLElBSG5DLEVBSUUsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFZLE1BQUEsR0FBSyxPQUFqQjtTQUFQLEVBQW9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBaEQsQ0FKRixFQUtFLEdBTEYsRUFNRSxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVksT0FBQSxHQUFNLFFBQWxCO1NBQVAsRUFBc0MsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFJLENBQUEsQ0FBQSxDQUFsRCxDQU5GLEVBT0UsR0FQRjtRQXRCSjtBQUFBLFNBK0JPLEtBL0JQO0FBZ0NJLE1BQUEsT0FBQSxHQUFVLE9BQUEsR0FBVSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQTVCLENBQUE7QUFFQSxNQUFBLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLEtBQWMsT0FBakI7QUFDRSxRQUFBLE9BQUEsR0FBVSxTQUFBLENBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFsQixDQUFWLENBQUE7QUFBQSxRQUNBLE9BQUEsR0FBVSxTQUFBLENBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFELENBQWpCLENBRFYsQ0FERjtPQUZBO2FBTUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxFQUFQLEVBQVc7UUFDVCxTQURTLEVBRVQsRUFBQSxHQUFFLENBQUEsVUFBQSxDQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBQSxDQUFGLEdBQTBCLEdBRmpCLEVBR1QsQ0FBQyxDQUFDLE1BQUYsQ0FBUztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBVCxFQUE2QixFQUFBLEdBQUUsQ0FBQSxjQUFBLENBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUF2QixFQUEyQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQW5DLEVBQXdDLE1BQXhDLENBQUEsQ0FBRixHQUFtRCxHQUFoRixDQUhTLEVBSVQsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBUCxFQUEyQixJQUEzQixDQUpTLEVBS1QsQ0FBQyxDQUFDLE1BQUYsQ0FBUztBQUFBLFVBQUEsU0FBQSxFQUFXLE9BQVg7U0FBVCxFQUE2QixFQUFBLEdBQUUsQ0FBQSxjQUFBLENBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUF2QixFQUEyQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUQsQ0FBbEMsRUFBd0MsTUFBeEMsQ0FBQSxDQUEvQixDQUxTO09BQVgsRUF0Q0o7QUFBQSxTQTZDTyxPQTdDUDtBQThDSSxNQUFBLElBQUEsR0FBTyxTQUFQLENBQUE7QUFBQSxNQUNBLFVBQUEsR0FBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBZCxLQUF1QixDQUExQixHQUNULGdCQURTLEdBR1QsRUFBQSxHQUFFLENBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBQSxDQUFBLENBQUYsR0FBc0IsZ0JBQXRCLEdBQXFDLENBQUEsY0FBQSxDQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBdkIsRUFBMkIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFELENBQWxDLEVBQXdDLE1BQXhDLENBQUEsQ0FKekMsQ0FBQTthQU9BLENBQUMsQ0FBQyxJQUFGLENBQU8sRUFBUCxFQUFXO1FBQ1QsU0FEUyxFQUVULENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxJQUFYO1NBQVAsRUFBd0IsVUFBeEIsQ0FGUztPQUFYLEVBckRKO0FBQUEsU0F5RE8sTUF6RFA7QUEwREksTUFBQSxJQUFBLEdBQU8sRUFBQSxHQUFFLENBQUEsY0FBQSxDQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBdkIsRUFBMkIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFELENBQWxDLEVBQXdDLE1BQXhDLENBQUEsQ0FBVCxDQUFBO0FBQ0EsTUFBQSxJQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQWQsS0FBc0IsQ0FBdEIsSUFBNEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBZCxJQUFzQixFQUFyRDtBQUNFLFFBQUEsSUFBQSxHQUFRLE9BQUEsR0FBTSxJQUFkLENBREY7T0FEQTthQUdBLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxRQUFBLFNBQUEsRUFBVSxRQUFWO09BQVAsRUFBMkIsQ0FDekIsU0FEeUIsRUFFekIsSUFGeUIsQ0FBM0IsRUE3REo7QUFBQTthQWtFSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBbEVaO0FBQUEsR0ExQlE7QUFBQSxDQWpCVixDQUFBOztBQUFBLE1BK0dNLENBQUMsT0FBUCxHQUFpQixLQUFLLENBQUMsV0FBTixDQUNmO0FBQUEsRUFBQSxXQUFBLEVBQWEsd0JBQWI7QUFBQSxFQUVBLHFCQUFBLEVBQXVCLFNBQUMsRUFBRCxHQUFBO0FBQ3JCLFFBQUEsd0JBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxLQUFYLENBQUE7QUFBQSxJQUNBLEVBQUEsR0FBSyxJQUFDLENBQUEsS0FETixDQUFBO0FBQUEsSUFFQSxJQUFBLEdBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFGakIsQ0FBQTtBQUFBLElBR0EsSUFBQSxHQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFIYixDQUFBO0FBS0EsSUFBQSxJQUFHLDBDQUFIO0FBQ0UsTUFBQSxRQUFBLEdBQVcsSUFBSSxDQUFDLEdBQUksQ0FBQSxDQUFBLENBQVQsS0FBZSxJQUFJLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBeEIsSUFDVCxJQUFJLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBVCxLQUFlLElBQUksQ0FBQyxHQUFJLENBQUEsQ0FBQSxDQUQxQixDQURGO0tBTEE7QUFRQSxJQUFBLElBQUcsSUFBSSxDQUFDLElBQUwsS0FBYSxLQUFoQjtBQUNFLE1BQUEsUUFBQSxHQUFXLElBQUksQ0FBQyxLQUFELENBQUosS0FBWSxJQUFJLENBQUMsS0FBRCxDQUEzQixDQURGO0tBUkE7QUFXQSxJQUFBLElBQUcsRUFBRSxDQUFDLFFBQUgsS0FBZSxFQUFFLENBQUMsUUFBbEIsSUFBOEIsRUFBRSxDQUFDLFNBQUgsS0FBZ0IsRUFBRSxDQUFDLFNBQXBEO0FBQ0UsTUFBQSxRQUFBLEdBQVcsSUFBWCxDQURGO0tBWEE7V0FjQSxTQWZxQjtFQUFBLENBRnZCO0FBQUEsRUFtQkEsTUFBQSxFQUFPLFNBQUEsR0FBQTtBQUNMLFFBQUEsS0FBQTtBQUFBLElBQUEsS0FBQSxHQUNFO0FBQUEsTUFBQSxPQUFBLEVBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxPQUFoQjtBQUFBLE1BQ0EsU0FBQSxFQUFXLEVBQUEsQ0FDVDtBQUFBLFFBQUEsVUFBQSxFQUFZLElBQVo7QUFBQSxRQUNBLHFCQUFBLEVBQXVCLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFEOUI7QUFBQSxRQUVBLHNCQUFBLEVBQXdCLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FGL0I7T0FEUyxDQURYO0tBREYsQ0FBQTtXQU1BLENBQUMsQ0FBQyxFQUFGLENBQUssS0FBTCxFQUFZLE9BQUEsQ0FBUSxJQUFDLENBQUEsS0FBSyxDQUFDLEVBQWYsQ0FBWixFQVBLO0VBQUEsQ0FuQlA7Q0FEZSxDQS9HakIsQ0FBQTs7OztBQ0FBLElBQUEsMERBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7O0FBQUEsRUFDQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFEbEIsQ0FBQTs7QUFBQSxnQkFHQSxHQUFtQixPQUFBLENBQVEsb0JBQVIsQ0FIbkIsQ0FBQTs7QUFBQSxHQUlBLEdBQU0sT0FBQSxDQUFRLE9BQVIsQ0FKTixDQUFBOztBQUFBLEtBTUEsR0FDRTtBQUFBLEVBQUEsT0FBQSxFQUFTLEdBQVQ7QUFBQSxFQUNBLFFBQUEsRUFBVSxHQURWO0FBQUEsRUFFQSxZQUFBLEVBQWMsR0FGZDtBQUFBLEVBR0EsYUFBQSxFQUFlLEdBSGY7QUFBQSxFQUlBLE1BQUEsRUFBUSxHQUpSO0FBQUEsRUFLQSxPQUFBLEVBQVMsR0FMVDtBQUFBLEVBTUEsV0FBQSxFQUFhLEdBTmI7QUFBQSxFQU9BLFlBQUEsRUFBYyxHQVBkO0FBQUEsRUFRQSxnQkFBQSxFQUFrQixHQVJsQjtBQUFBLEVBU0EsV0FBQSxFQUFhLEdBVGI7Q0FQRixDQUFBOztBQUFBLHFCQWtCQSxHQUF3QixTQUFDLEtBQUQsRUFBTyxJQUFQLEdBQUE7QUFDdEIsTUFBQSxnQ0FBQTs7SUFENkIsT0FBSztHQUNsQztBQUFBLEVBQUEsU0FBQSxHQUFZLEtBQVosQ0FBQTtBQUNBLEVBQUEsSUFBRyxJQUFBLEtBQVEsRUFBUixJQUFlLEtBQUEsS0FBUyxPQUF4QixJQUFvQyxLQUFBLEtBQVMsT0FBaEQ7QUFDRSxJQUFBLFNBQUEsR0FBWSxFQUFBLEdBQUUsS0FBRixHQUFTLEdBQVQsR0FBVyxJQUF2QixDQURGO0dBREE7QUFBQSxFQUlBLE9BQWUsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFNLENBQUEsU0FBQSxDQUFsQixDQUFmLEVBQUMsY0FBRCxFQUFPLGNBSlAsQ0FBQTtBQUFBLEVBS0EsR0FBQSxHQUFNLEtBQU0sQ0FBQSxTQUFBLENBTFosQ0FBQTtTQU1BO0lBQ0UsSUFERixFQUVFLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxNQUFBLFNBQUEsRUFBVyxzQkFBWDtLQUFQLEVBQTBDLEdBQTFDLENBRkYsRUFHRSxJQUhGO0lBUHNCO0FBQUEsQ0FsQnhCLENBQUE7O0FBQUEsTUErQk0sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxhQUFiO0FBQUEsRUFFQSxRQUFBLEVBQVUsU0FBQSxHQUFBO1dBQ1IsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsSUFBUixFQUFjLFNBQUMsR0FBRCxHQUFBO2FBQVEsR0FBRyxDQUFDLE9BQUosQ0FBQSxFQUFSO0lBQUEsQ0FBZCxFQURRO0VBQUEsQ0FGVjtBQUFBLEVBS0EsZUFBQSxFQUFpQixTQUFBLEdBQUE7V0FDZixJQUFDLENBQUEsUUFBRCxDQUFBLEVBRGU7RUFBQSxDQUxqQjtBQUFBLEVBUUEsTUFBQSxFQUFRLFNBQUEsR0FBQTtBQUVOLFFBQUEsOENBQUE7QUFBQSxJQUFBLFNBQUEsR0FBWSxFQUFaLENBQUE7QUFDQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEtBQWdCLENBQW5CO0FBQ0UsTUFBQSxTQUFBLEdBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWUsQ0FBbEIsR0FBeUIsTUFBekIsR0FBcUMsS0FBakQsQ0FERjtLQURBO0FBQUEsSUFLQSxLQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEtBQWdCLENBQW5CLEdBQTBCLEdBQTFCLEdBQW1DLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWUsQ0FBekIsQ0FMM0MsQ0FBQTtBQUFBLElBTUEsU0FBQSxHQUFZLEVBTlosQ0FBQTtBQU9BLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsS0FBZ0IsQ0FBbkI7QUFDRSxNQUFBLFNBQUEsR0FBZSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsR0FBZSxDQUFmLEtBQW9CLENBQXZCLEdBQThCLE1BQTlCLEdBQTBDLEtBQXRELENBREY7S0FQQTtBQUFBLElBVUEsSUFBQTtBQUFPLGNBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFkO0FBQUEsYUFDQSxDQURBO2lCQUNPLElBRFA7QUFBQSxhQUVBLEVBRkE7aUJBRVEsSUFGUjtBQUFBO2lCQUdBLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FIUDtBQUFBO2lCQVZQLENBQUE7QUFBQSxJQWdCQSxXQUFBLEdBQWMsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUMsRUFBRCxFQUFRLEtBQVIsRUFBa0IsR0FBbEIsRUFBMEIsSUFBMUIsR0FBQTs7VUFBQyxLQUFHO1NBQ2hCOztVQURvQixRQUFNO1NBQzFCOztVQUQ4QixNQUFJO1NBQ2xDOztVQURzQyxPQUFLO1NBQzNDO0FBQUEsUUFBQSxLQUFBLEdBQVEscUJBQUEsQ0FBc0IsS0FBdEIsRUFBNkIsSUFBN0IsQ0FBUixDQUFBO2VBQ0EsZ0JBQUEsQ0FBaUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUztBQUFBLFVBQUMsSUFBQSxFQUFEO0FBQUEsVUFBSyxPQUFBLEtBQUw7QUFBQSxVQUFZLEtBQUEsR0FBWjtBQUFBLFVBQWlCLE1BQUEsSUFBakI7U0FBVCxFQUFpQztBQUFBLFVBQUEsY0FBQSxFQUFnQixLQUFDLENBQUEsS0FBSyxDQUFDLGNBQXZCO1NBQWpDLENBQWpCLEVBRlk7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQWhCZCxDQUFBO1dBcUJBLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLFNBQUEsRUFBVyxhQUFYO0tBQU4sRUFBZ0M7TUFDOUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLEtBQVg7T0FBTixFQUF3QixDQUN0QixXQUFBLENBQVksT0FBWixFQUFxQixPQUFyQixFQUE4QixJQUFJLENBQUMsR0FBTCxDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBaEIsQ0FBOUIsRUFBc0QsU0FBdEQsQ0FEc0IsRUFFdEIsV0FBQSxDQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUF2QyxDQUZzQixFQUd0QixXQUFBLENBQVksUUFBWixFQUFzQixRQUF0QixFQUFnQyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQTlDLEVBQWtELEtBQWxELENBSHNCLEVBSXRCLFdBQUEsQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBOUMsRUFBa0QsTUFBbEQsQ0FKc0IsQ0FBeEIsQ0FEOEIsRUFPOUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLEtBQVg7T0FBTixFQUF3QixDQUN0QixXQUFBLENBQVksTUFBWixFQUFvQixNQUFwQixFQUE0QixJQUE1QixDQURzQixFQUV0QixXQUFBLENBQVksT0FBWixFQUFxQixPQUFyQixFQUE4QixLQUE5QixFQUFxQyxTQUFyQyxDQUZzQixFQUd0QixXQUFBLENBQVksT0FBWixFQUFxQixPQUFyQixFQUE4QixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQTNDLEVBQStDLEtBQS9DLENBSHNCLEVBSXRCLFdBQUEsQ0FBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBM0MsRUFBK0MsTUFBL0MsQ0FKc0IsQ0FBeEIsQ0FQOEIsRUFhOUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLGlCQUFYO09BQU4sRUFBb0M7UUFDbEMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLHNCQUFYO1NBQVAsRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxPQUFBLEVBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUExQixDQUErQixJQUEvQixFQUFvQyxNQUFwQyxDQUFUO1NBQUosRUFBMEQ7VUFDeEQsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFlBQUEsU0FBQSxFQUFVLHNCQUFWO1dBQVAsRUFBeUMsS0FBekMsQ0FEd0QsRUFFeEQsT0FGd0Q7U0FBMUQsQ0FERixDQURrQyxFQU1sQyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVcseUJBQVg7U0FBUCxFQUNFLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxVQUFBLE9BQUEsRUFBUyxJQUFDLENBQUEsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQTFCLENBQStCLElBQS9CLEVBQW9DLFFBQXBDLENBQVQ7U0FBSixFQUNFLHFCQUFBLENBQXNCLGdCQUF0QixDQURGLENBREYsQ0FOa0MsRUFTbEMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLHNCQUFYO1NBQVAsRUFDRSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxPQUFBLEVBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUExQixDQUErQixJQUEvQixFQUFvQyxNQUFwQyxDQUFUO1NBQUosRUFBMEQ7VUFDeEQsT0FEd0QsRUFFeEQsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFlBQUEsU0FBQSxFQUFVLHNCQUFWO1dBQVAsRUFBeUMsS0FBekMsQ0FGd0Q7U0FBMUQsQ0FERixDQVRrQztPQUFwQyxDQWI4QixFQTRCOUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLE1BQVg7T0FBTixFQUF5QjtRQUN2QixHQUFBLENBQUk7QUFBQSxVQUFBLEdBQUEsRUFBSyxTQUFMO0FBQUEsVUFBZ0IsSUFBQSxFQUFNLEtBQXRCO1NBQUosQ0FEdUIsRUFFdkIsQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsU0FBQSxFQUFXLFdBQVg7QUFBQSxVQUF3QixPQUFBLEVBQVMsSUFBQyxDQUFBLGVBQWxDO1NBQUosRUFBdUQscUJBQUEsQ0FBc0IsV0FBdEIsQ0FBdkQsQ0FGdUIsRUFHdkIsR0FBQSxDQUFJO0FBQUEsVUFBQSxHQUFBLEVBQUssVUFBTDtBQUFBLFVBQWlCLElBQUEsRUFBTSxNQUF2QjtTQUFKLENBSHVCO09BQXpCLENBNUI4QjtLQUFoQyxFQXZCTTtFQUFBLENBUlI7Q0FEZSxDQS9CakIsQ0FBQTs7OztBQ0FBLElBQUEsS0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxrQkFBYjtBQUFBLEVBQ0EscUJBQUEsRUFBdUIsU0FBQyxFQUFELEdBQUE7V0FDckIsRUFBRSxDQUFDLEdBQUgsS0FBVSxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQWpCLElBQXdCLEVBQUUsQ0FBQyxJQUFILEtBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQURyQjtFQUFBLENBRHZCO0FBQUEsRUFHQSxNQUFBLEVBQVEsU0FBQSxHQUFBO0FBQ04sUUFBQSw2QkFBQTtBQUFBLElBQUEsU0FBQTtBQUFZLGNBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFkO0FBQUEsYUFDTCxLQURLO0FBQUEsYUFDRSxNQURGO2lCQUNjLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FEckI7QUFBQTtpQkFFTCxHQUZLO0FBQUE7aUJBQVosQ0FBQTtBQUFBLElBSUEsUUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQVcsS0FBWDtBQUFBLE1BQ0EsT0FBQSxFQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBeEMsRUFBNEMsS0FBNUMsRUFBbUQsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUExRCxDQURUO0tBTEYsQ0FBQTtBQUFBLElBT0EsUUFBQSxHQUNFO0FBQUEsTUFBQSxTQUFBLEVBQVcsS0FBWDtBQUFBLE1BQ0EsT0FBQSxFQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBeEMsRUFBNEMsS0FBNUMsRUFBbUQsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUExRCxDQURUO0tBUkYsQ0FBQTtXQVdBLENBQUMsQ0FBQyxHQUFGLENBQU0sRUFBTixFQUFVO01BQ1IsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLGFBQVg7T0FBTixFQUFnQyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQXZDLENBRFEsRUFFUixDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsUUFBQSxTQUFBLEVBQVksY0FBQSxHQUFhLFNBQXpCO09BQU4sRUFBNkM7UUFDM0MsQ0FBQyxDQUFDLElBQUYsQ0FBTyxRQUFQLEVBQWlCLEdBQWpCLENBRDJDLEVBRTNDLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxVQUFBLFNBQUEsRUFBVyxLQUFYO1NBQVAsRUFBeUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFoQyxDQUYyQyxFQUczQyxDQUFDLENBQUMsSUFBRixDQUFPLFFBQVAsRUFBaUIsR0FBakIsQ0FIMkM7T0FBN0MsQ0FGUTtLQUFWLEVBWk07RUFBQSxDQUhSO0NBRGUsQ0FIakIsQ0FBQTs7OztBQ0FBLElBQUEseUNBQUE7O0FBQUEsQ0FBQSxHQUFJLEtBQUssQ0FBQyxHQUFWLENBQUE7O0FBQUEsRUFDQSxHQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFEbEIsQ0FBQTs7QUFBQSxPQUVBLEdBQVUsT0FBQSxDQUFRLGlCQUFSLENBRlYsQ0FBQTs7QUFBQSxVQUlBLEdBQWE7QUFBQSxFQUFBLENBQUEsRUFBRSxPQUFGO0FBQUEsRUFBVyxDQUFBLEVBQUUsS0FBYjtBQUFBLEVBQW9CLENBQUEsRUFBRSxNQUF0QjtDQUpiLENBQUE7O0FBQUEsYUFNQSxHQUFnQixTQUFDLEtBQUQsR0FBQTtBQUNkLE1BQUEsT0FBQTtBQUFBLEVBQUEsT0FBQSxHQUFVLEVBQUEsQ0FDUjtBQUFBLElBQUEsYUFBQSxFQUFlLEtBQUssQ0FBQyxLQUFOLEtBQWUsY0FBOUI7QUFBQSxJQUNBLGVBQUEsRUFBaUIsS0FBSyxDQUFDLEtBQU4sS0FBZSxnQkFEaEM7QUFBQSxJQUVBLG1CQUFBLEVBQXFCLEtBQUssQ0FBQyxLQUFOLEtBQWUscUJBRnBDO0FBQUEsSUFHQSx1QkFBQSxFQUF5QixLQUFLLENBQUMsS0FBTixLQUFlLHlCQUh4QztBQUFBLElBSUEsc0JBQUEsRUFBd0IsS0FBSyxDQUFDLEtBQU4sS0FBZSx5QkFKdkM7QUFBQSxJQUtBLGVBQUEsRUFBaUIsS0FBSyxDQUFDLEtBQU4sS0FBZSxnQkFMaEM7QUFBQSxJQU1BLHFCQUFBLEVBQXVCLEtBQUssQ0FBQyxLQUFOLEtBQWUsdUJBTnRDO0FBQUEsSUFPQSxTQUFBLEVBQVcsS0FBSyxDQUFDLE9BUGpCO0dBRFEsQ0FBVixDQUFBO1NBVUMsUUFBQSxHQUFPLEtBQUssQ0FBQyxLQUFiLEdBQW9CLGFBQXBCLEdBQWdDLEtBQUssQ0FBQyxJQUF0QyxHQUE0QyxHQUE1QyxHQUE4QyxRQVhqQztBQUFBLENBTmhCLENBQUE7O0FBQUEsTUFtQk0sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxNQUFiO0FBQUEsRUFDQSxNQUFBLEVBQVEsU0FBQSxHQUFBO0FBQ04sUUFBQSxJQUFBO0FBQUEsSUFBQSxJQUFBLEdBQU87TUFDSCxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsUUFBQyxTQUFBLEVBQVcsbUJBQVo7T0FBUCxFQUEwQztRQUN4QyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVcsWUFBWDtTQUFQLEVBQWdDLFVBQVcsQ0FBQSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsQ0FBM0MsQ0FEd0MsRUFFeEMsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLFVBQUEsU0FBQSxFQUFXLFVBQVg7U0FBTCxFQUErQixJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsR0FBYSxDQUFoQixHQUF1QixHQUF2QixHQUFnQyxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQW5FLENBRndDLEVBR3hDLENBQUMsQ0FBQyxFQUFGLENBQUs7QUFBQSxVQUFBLFNBQUEsRUFBVyxZQUFYO1NBQUwsRUFBOEI7VUFDNUIsRUFBQSxHQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBVCxHQUFnQixHQURZLEVBRTVCLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQSxZQUFBLFNBQUEsRUFBVyxTQUFYO1dBQVAsRUFBOEIsR0FBQSxHQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBdkMsQ0FGNEI7U0FBOUIsQ0FId0M7T0FBMUMsQ0FERyxFQVNILENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxRQUFBLFNBQUEsRUFBVyxXQUFYO09BQUosRUFBNEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFuQyxDQVRHO0tBQVAsQ0FBQTtBQVlBLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsS0FBZSxLQUFsQjtBQUNFLE1BQUEsSUFBQSxHQUNFLENBQUMsQ0FBQyxHQUFGLENBQ0U7QUFBQSxRQUFBLFNBQUEsRUFBVyxVQUFYO0FBQUEsUUFDQSxHQUFBLEVBQU0sbUJBQUEsR0FBa0IsQ0FBQSxPQUFBLENBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFmLENBQUEsQ0FBbEIsR0FBcUMsTUFEM0M7T0FERixDQURGLENBREY7S0FaQTtXQWtCQSxDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsTUFBQSxJQUFBLEVBQU8sU0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBdEI7QUFBQSxNQUE2QixTQUFBLEVBQVcsYUFBQSxDQUFjLElBQUMsQ0FBQSxLQUFmLENBQUEsR0FBd0IsT0FBaEU7S0FBSixFQUE2RSxJQUE3RSxFQW5CTTtFQUFBLENBRFI7Q0FEZSxDQW5CakIsQ0FBQTs7OztBQ0FBLElBQUEsY0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLE9BRUEsR0FBVSxPQUFBLENBQVEsaUJBQVIsQ0FGVixDQUFBOztBQUFBLE1BSU0sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxTQUFiO0FBQUEsRUFDQSxNQUFBLEVBQVEsU0FBQSxHQUFBO1dBQ04sQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsU0FBQSxFQUFXLGNBQVg7S0FBTixFQUNFLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxNQUFBLElBQUEsRUFBTyxTQUFBLEdBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUF0QjtLQUFKLEVBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsR0FBQSxFQUFNLG1CQUFBLEdBQWtCLENBQUEsT0FBQSxDQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBZixDQUFBLENBQWxCLEdBQXFDLE1BQTNDO0tBQU4sQ0FERixDQURGLEVBRE07RUFBQSxDQURSO0NBRGUsQ0FKakIsQ0FBQTs7OztBQ0FBLElBQUEsV0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLElBR0EsR0FBTyxPQUFBLENBQVEsUUFBUixDQUhQLENBQUE7O0FBQUEsTUFLTSxDQUFDLE9BQVAsR0FBaUIsS0FBSyxDQUFDLFdBQU4sQ0FDZjtBQUFBLEVBQUEsV0FBQSxFQUFhLFVBQWI7QUFBQSxFQUNBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFDTixRQUFBLFNBQUE7QUFBQSxJQUFBLFNBQUEsR0FBWSxFQUFBLENBQ1Y7QUFBQSxNQUFBLFVBQUEsRUFBWSxJQUFaO0FBQUEsTUFDQSxjQUFBLEVBQWdCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxLQUFlLE1BRC9CO0FBQUEsTUFFQSxhQUFBLEVBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLEtBQWUsS0FGOUI7S0FEVSxDQUFaLENBQUE7V0FJQSxDQUFDLENBQUMsR0FBRixDQUFNO0FBQUEsTUFBQyxXQUFBLFNBQUQ7S0FBTixFQUFtQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFiLENBQWlCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEVBQUQsR0FBQTtlQUNsQyxJQUFBLENBQUssQ0FBQyxDQUFDLEtBQUYsQ0FBUSxFQUFSLEVBQ0g7QUFBQSxVQUFBLEdBQUEsRUFBTSxNQUFBLEdBQUssRUFBRSxDQUFDLEVBQWQ7QUFBQSxVQUNBLFlBQUEsRUFBYyxLQUFDLENBQUEsS0FBSyxDQUFDLFFBRHJCO0FBQUEsVUFFQSxJQUFBLEVBQU0sS0FBQyxDQUFBLEtBQUssQ0FBQyxJQUZiO1NBREcsQ0FBTCxFQURrQztNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWpCLENBQW5CLEVBTE07RUFBQSxDQURSO0NBRGUsQ0FMakIsQ0FBQTs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUFpQixLQUFLLENBQUMsV0FBTixDQUNmO0FBQUEsRUFBQSxXQUFBLEVBQWEsS0FBYjtBQUFBLEVBRUEscUJBQUEsRUFBdUIsU0FBQyxFQUFELEVBQUssRUFBTCxHQUFBO1dBQ3JCLEVBQUUsQ0FBQyxPQUFILEtBQWMsSUFBQyxDQUFBLEtBQUssQ0FBQyxPQUFyQixJQUFnQyxFQUFFLENBQUMsR0FBSCxLQUFVLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFENUI7RUFBQSxDQUZ2QjtBQUFBLEVBS0EsZUFBQSxFQUFpQixTQUFBLEdBQUE7V0FDZjtBQUFBLE1BQUEsS0FBQSxFQUFPLEVBQVA7TUFEZTtFQUFBLENBTGpCO0FBQUEsRUFRQSxlQUFBLEVBQWlCLFNBQUEsR0FBQTtXQUNmO0FBQUEsTUFBQSxHQUFBLEVBQUssQ0FBTDtBQUFBLE1BQ0EsT0FBQSxFQUFTLEtBRFQ7QUFBQSxNQUVBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBRmQ7TUFEZTtFQUFBLENBUmpCO0FBQUEsRUFhQSxRQUFBLEVBQVUsU0FBQSxHQUFBO1dBQ1IsSUFBQyxDQUFBLE9BQUQsQ0FBQSxFQURRO0VBQUEsQ0FiVjtBQUFBLEVBZ0JBLE9BQUEsRUFBUyxTQUFBLEdBQUE7QUFDUCxJQUFBLElBQVUsSUFBQyxDQUFBLEtBQUssQ0FBQyxPQUFqQjtBQUFBLFlBQUEsQ0FBQTtLQUFBO1dBQ0EsSUFBQyxDQUFBLFdBQUQsQ0FBQSxFQUZPO0VBQUEsQ0FoQlQ7QUFBQSxFQW9CQSxXQUFBLEVBQWEsU0FBQSxHQUFBO0FBQ1gsUUFBQSxJQUFBO0FBQUEsSUFBQSxJQUFHLENBQUEsSUFBSyxDQUFBLEtBQUssQ0FBQyxPQUFkO0FBQ0UsTUFBQSxJQUFDLENBQUEsUUFBRCxDQUFVO0FBQUEsUUFBQSxPQUFBLEVBQVMsSUFBVDtBQUFBLFFBQWUsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBN0I7T0FBVixDQUFBLENBREY7S0FBQTtBQUdBLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsS0FBZ0IsQ0FBbkI7YUFDRSxJQUFDLENBQUEsUUFBRCxDQUFVO0FBQUEsUUFBQSxPQUFBLEVBQVMsS0FBVDtBQUFBLFFBQWdCLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQTlCO09BQVYsRUFERjtLQUFBLE1BQUE7QUFHRSxNQUFBLElBQUEsR0FBTyxDQUFDLEVBQUEsR0FBSyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQWIsQ0FBQSxHQUFzQixFQUF0QixHQUEyQixFQUFsQyxDQUFBO0FBQ0EsTUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlLEVBQWxCO0FBQ0UsUUFBQSxJQUFBLEdBQU8sRUFBUCxDQURGO09BREE7QUFBQSxNQUlBLElBQUMsQ0FBQSxRQUFELENBQ0U7QUFBQSxRQUFBLEdBQUEsRUFBSyxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQUw7QUFBQSxRQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsR0FBZSxDQUR0QjtPQURGLENBSkEsQ0FBQTthQU9BLFVBQUEsQ0FBVyxJQUFDLENBQUEsV0FBWixFQUF5QixJQUF6QixFQVZGO0tBSlc7RUFBQSxDQXBCYjtBQUFBLEVBb0NBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFDTixRQUFBLE9BQUE7QUFBQSxJQUFBLE9BQUEsR0FBYSxJQUFDLENBQUEsS0FBSyxDQUFDLE9BQVAsSUFBbUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWUsQ0FBckMsR0FBNEMsU0FBNUMsR0FBMkQsRUFBckUsQ0FBQTtXQUNBLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLE9BQUEsRUFBUyxJQUFDLENBQUEsUUFBVjtBQUFBLE1BQW9CLFNBQUEsRUFBWSxVQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFoQixHQUFzQixHQUF0QixHQUF3QixPQUF4RDtLQUFOLEVBQTBFLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBakYsRUFGTTtFQUFBLENBcENSO0NBRGUsQ0FGakIsQ0FBQTs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxNQUNNLENBQUMsT0FBUCxHQUFpQixLQUFLLENBQUMsV0FBTixDQUNmO0FBQUEsRUFBQSxNQUFBLEVBQVEsU0FBQSxHQUFBO1dBQ04sQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsU0FBQSxFQUFXLFFBQVg7S0FBTixFQUEyQjtNQUN6QixDQUFDLENBQUMsQ0FBRixDQUFJLEVBQUosRUFBUTtRQUNOLHVCQURNLEVBRU4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsSUFBQSxFQUFLLGVBQUw7U0FBSixFQUEwQixhQUExQixDQUZNLEVBR04sa0JBSE0sRUFJTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxJQUFBLEVBQUssMEJBQUw7U0FBSixFQUFxQyxjQUFyQyxDQUpNLEVBS04sSUFMTSxFQU1OLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxVQUFBLElBQUEsRUFBSyxrQ0FBTDtTQUFKLEVBQTZDLE9BQTdDLENBTk0sRUFPTixJQVBNLEVBUU4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsSUFBQSxFQUFLLHdCQUFMO1NBQUosRUFBbUMsWUFBbkMsQ0FSTSxFQVNOLElBVE0sRUFVTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxJQUFBLEVBQUssb0JBQUw7U0FBSixFQUErQixTQUEvQixDQVZNLEVBV04sSUFYTSxFQVlOLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxVQUFBLElBQUEsRUFBSywwQkFBTDtTQUFKLEVBQXFDLFdBQXJDLENBWk0sRUFhTixJQWJNLEVBY04sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsSUFBQSxFQUFLLG9CQUFMO1NBQUosRUFBK0IsT0FBL0IsQ0FkTSxFQWVOLFFBZk0sRUFnQk4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsSUFBQSxFQUFLLG1CQUFMO1NBQUosRUFBOEIsTUFBOUIsQ0FoQk0sRUFpQk4sR0FqQk0sRUFrQk4sQ0FBQyxDQUFDLEVBQUYsQ0FBQSxDQWxCTSxFQW1CTiwyQkFuQk0sRUFvQk4sQ0FBQyxDQUFDLENBQUYsQ0FBSTtBQUFBLFVBQUEsSUFBQSxFQUFLLDZCQUFMO1NBQUosRUFBd0MsbUJBQXhDLENBcEJNLEVBcUJOLDJEQXJCTSxFQXNCTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxJQUFBLEVBQUssdUNBQUw7U0FBSixFQUFrRCxRQUFsRCxDQXRCTSxFQXVCTixNQXZCTSxFQXdCTixDQUFDLENBQUMsQ0FBRixDQUFJO0FBQUEsVUFBQSxJQUFBLEVBQUssK0JBQUw7U0FBSixFQUEwQyxhQUExQyxDQXhCTSxFQXlCTixHQXpCTTtPQUFSLENBRHlCO0tBQTNCLEVBRE07RUFBQSxDQUFSO0NBRGUsQ0FEakIsQ0FBQTs7OztBQ0FBLElBQUEsS0FBQTs7QUFBQSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQURsQixDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQWlCLEtBQUssQ0FBQyxXQUFOLENBQ2Y7QUFBQSxFQUFBLFdBQUEsRUFBYSxTQUFiO0FBQUEsRUFDQSxlQUFBLEVBQWlCLFNBQUEsR0FBQTtXQUNmO0FBQUEsTUFBQSxNQUFBLEVBQVEsRUFBUjtNQURlO0VBQUEsQ0FEakI7QUFBQSxFQUlBLE1BQUEsRUFBUSxTQUFBLEdBQUE7QUFFTixRQUFBLEVBQUE7QUFBQSxJQUFBLEVBQUEsR0FBSyxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixLQUFoQixHQUFBO2VBQ0gsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLFVBQUEsU0FBQSxFQUFXLEVBQUEsQ0FBRztBQUFBLFlBQUEsUUFBQSxFQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxLQUFpQixPQUEzQjtXQUFILENBQVg7U0FBTCxFQUNFLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxVQUFBLElBQUEsRUFBTSxJQUFOO1NBQUosRUFBZ0IsS0FBaEIsQ0FERixFQURHO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBTCxDQUFBO1dBSUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLE1BQUEsU0FBQSxFQUFXLFNBQVg7QUFBQSxNQUFzQixJQUFBLEVBQU0sWUFBNUI7S0FBTixFQUNFLENBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLFNBQUEsRUFBVyxXQUFYO0tBQU4sRUFBOEI7TUFFNUIsQ0FBQyxDQUFDLEdBQUYsQ0FBTTtBQUFBLFFBQUEsU0FBQSxFQUFXLGVBQVg7T0FBTixFQUNFLENBQUMsQ0FBQyxDQUFGLENBQUk7QUFBQSxRQUFBLFNBQUEsRUFBVyxjQUFYO0FBQUEsUUFBMkIsSUFBQSxFQUFNLElBQWpDO09BQUosRUFBMkM7UUFDekMsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUFBLFVBQUEsU0FBQSxFQUFXLEtBQVg7U0FBUCxFQUF5QixLQUF6QixDQUR5QyxFQUV6QyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUEsVUFBQSxTQUFBLEVBQVcsT0FBWDtTQUFQLEVBQTJCLE9BQTNCLENBRnlDO09BQTNDLENBREYsQ0FGNEIsRUFRNUIsQ0FBQyxDQUFDLEVBQUYsQ0FBSztBQUFBLFFBQUEsU0FBQSxFQUFXLGdCQUFYO09BQUwsRUFBa0MsQ0FDaEMsRUFBQSxDQUFHLE9BQUgsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBRGdDLEVBRWhDLEVBQUEsQ0FBRyxPQUFILEVBQVksU0FBWixFQUF1QixPQUF2QixDQUZnQyxFQUdoQyxFQUFBLENBQUcsT0FBSCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FIZ0MsQ0FBbEMsQ0FSNEI7S0FBOUIsQ0FERixFQU5NO0VBQUEsQ0FKUjtDQURlLENBSGpCLENBQUE7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsY0FBUixDQUFBLENBQXdCLFNBQXhCLEVBQW1DLENBQUMsVUFBRCxDQUFuQyxDQUFqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcciAge1xyICAgIFwiaWRcIjoxLFxyICAgIFwidGl0bGVcIjpcIkFzaWEgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA3OyBDb250cm9sOiA5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE0L3JlZ2lvbnMtYXNpYS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyLFxyICAgIFwidGl0bGVcIjpcIkV1cm9wZSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDM7IERvbWluYXRpb246IDc7IENvbnRyb2w6IEF1dG9tYXRpYyBWaWN0b3J5OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247ICsxIFZQIHBlciBjb3VudHJ5IGNvbnRyb2xsZWQgdGhhdCBpcyBhZGphY2VudCB0byBlbmVteSBzdXBlcnBvd2VyOyBNQVkgTk9UIEJFIEhFTEQhXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEyL3JlZ2lvbnMtZXVyb3BlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMsXHIgICAgXCJ0aXRsZVwiOlwiTWlkZGxlIEVhc3QgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAzOyBEb21pbmF0aW9uOiA1OyBDb250cm9sOiA3OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMTMvcmVnaW9ucy1taWRkbGUtZWFzdC9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo0LFxyICAgIFwidGl0bGVcIjpcIkR1Y2sgYW5kIENvdmVyXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEuIFRoZSBVUyByZWNlaXZlcyBWUCBlcXVhbCB0byA1IG1pbnVzIHRoZSBjdXJyZW50IERFRkNPTiBsZXZlbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZHVjay1hbmQtY292ZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjUsXHIgICAgXCJ0aXRsZVwiOlwiRml2ZSBZZWFyIFBsYW5cIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgYSBjYXJkLiBJZiB0aGUgY2FyZCBoYXMgYSBVUyBhc3NvY2lhdGVkIEV2ZW50LCB0aGUgRXZlbnQgb2NjdXJzIGltbWVkaWF0ZWx5LiBJZiB0aGUgY2FyZCBoYXMgYSBVU1NSIGFzc29jaWF0ZWQgRXZlbnQgb3IgYW4gRXZlbnQgYXBwbGljYWJsZSB0byBib3RoIHBsYXllcnMsIHRoZW4gdGhlIGNhcmQgbXVzdCBiZSBkaXNjYXJkZWQgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTEvMTIvMTIvZml2ZS15ZWFyLXBsYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIENoaW5hIENhcmRcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIGNhcmQgYmVnaW5zIHRoZSBnYW1lIHdpdGggdGhlIFVTU1IuIFdoZW4gcGxheWVkLCB0aGUgcGxheWVyIHJlY2VpdmVzICsxIE9wZXJhdGlvbnMgdG8gdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhpcyBjYXJkIGlmIGl0IHVzZXMgYWxsIGl0cyBPcGVyYXRpb25zIGluIEFzaWEuIEl0IGlzIHBhc3NlZCB0byB0aGUgb3Bwb25lbnQgb25jZSBwbGF5ZWQuIEEgcGxheWVyIHJlY2VpdmVzIDEgVlAgZm9yIGhvbGRpbmcgdGhpcyBjYXJkIGF0IHRoZSBlbmQgb2YgVHVybiAxMC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMzEvdGhlLWNoaW5hLWNhcmQvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NyxcciAgICBcInRpdGxlXCI6XCJTb2NpYWxpc3QgR292ZXJubWVudHNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYSB0b3RhbCBvZiAzIFVTIEluZmx1ZW5jZSBmcm9tIGFueSBjb3VudHJpZXMgaW4gV2VzdGVybiBFdXJvcGUgKHJlbW92aW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM4MyDigJMgVGhlIElyb24gTGFkeeKAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzEzL3NvY2lhbGlzdC1nb3Zlcm5tZW50cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjo4LFxyICAgIFwidGl0bGVcIjpcIkZpZGVsKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gQ3ViYS4gVVNTUiBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIGluIEN1YmEgZm9yIENvbnRyb2wuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE0L2ZpZGVsL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OSxcciAgICBcInRpdGxlXCI6XCJWaWV0bmFtIFJldm9sdHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gVmlldG5hbS4gRm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIHRoZSBVU1NSIHJlY2VpdmVzICsxIE9wZXJhdGlvbnMgdG8gdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgYSBjYXJkIHRoYXQgdXNlcyBhbGwgaXRzIE9wZXJhdGlvbnMgaW4gU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzE2L3ZpZXRuYW0tcmV2b2x0cy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwLFxyICAgIFwidGl0bGVcIjpcIkJsb2NrYWRlKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlVubGVzcyB0aGUgVVMgaW1tZWRpYXRlbHkgZGlzY2FyZHMgYSBjYXJkIHdpdGggYW4gT3BlcmF0aW9ucyB2YWx1ZSBvZiAzIG9yIG1vcmUsIHJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gV2VzdCBHZXJtYW55LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMS8xMi8xOS9ibG9ja2FkZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjExLFxyICAgIFwidGl0bGVcIjpcIktvcmVhbiBXYXIqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiTm9ydGggS29yZWEgaW52YWRlcyBTb3V0aCBLb3JlYS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgVVMgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIFNvdXRoIEtvcmVhLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIFVTIEluZmx1ZW5jZSBpbiBTb3V0aCBLb3JlYSB3aXRoIFVTU1IgSW5mbHVlbmNlLiBUaGUgVVNTUiBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDExLzEyLzI1L2tvcmVhbi13YXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMixcciAgICBcInRpdGxlXCI6XCJSb21hbmlhbiBBYmRpY2F0aW9uKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGZyb20gUm9tYW5pYS4gVGhlIFVTU1IgYWRkcyBzdWZmaWNpZW50IEluZmx1ZW5jZSB0byBSb21hbmlhIGZvciBDb250cm9sLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMS8wMi9yb21hbmlhbi1hYmRpY2F0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTMsXHIgICAgXCJ0aXRsZVwiOlwiQXJhYi1Jc3JhZWxpIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlBhbi1BcmFiIENvYWxpdGlvbiBpbnZhZGVzIElzcmFlbC4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgSXNyYWVsLCBpZiBpdCBpcyBVUyBjb250cm9sbGVkLCBhbmQgZm9yIGV2ZXJ5IFVTIGNvbnRyb2xsZWQgY291bnRyeSBhZGphY2VudCB0byBJc3JhZWwuIE9uIGEgbW9kaWZpZWQgZGllIHJvbGwgb2YgNC02LCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgVVMgSW5mbHVlbmNlIGluIElzcmFlbCB3aXRoIFVTU1IgSW5mbHVlbmNlLiBUaGUgVVNTUiBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM2NSDigJMgQ2FtcCBEYXZpZCBBY2NvcmRz4oCdIEV2ZW50IGhhcyBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDEvMTYvYXJhYi1pc3JhZWxpLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNCxcciAgICBcInRpdGxlXCI6XCJDb21lY29uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAxIFVTU1IgSW5mbHVlbmNlIHRvIGVhY2ggb2YgNCBub24tVVMgY29udHJvbGxlZCBjb3VudHJpZXMgb2YgRWFzdGVybiBFdXJvcGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAxLzI0L2NvbWVjb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxNSxcciAgICBcInRpdGxlXCI6XCJOYXNzZXIqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gRWd5cHQuIFRoZSBVUyByZW1vdmVzIGhhbGYsIHJvdW5kZWQgdXAsIG9mIGl0cyBJbmZsdWVuY2UgZnJvbSBFZ3lwdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMDYvbmFzc2VyL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTYsXHIgICAgXCJ0aXRsZVwiOlwiV2Fyc2F3IFBhY3QgRm9ybWVkKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgaW5mbHVlbmNlIGZyb20gNCBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUgb3IgYWRkIDUgVVNTUiBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBFYXN0ZXJuIEV1cm9wZSAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuIFRoaXMgRXZlbnQgYWxsb3dzIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gY2FyZCB0byBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAyLzIwL3dhcnNhdy1wYWN0LWZvcm1lZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjE3LFxyICAgIFwidGl0bGVcIjpcIkRlIEdhdWxsZSBMZWFkcyBGcmFuY2UqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIDIgVVMgSW5mbHVlbmNlIGZyb20gRnJhbmNlIGFuZCBhZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBGcmFuY2UuIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gRXZlbnQgZm9yIEZyYW5jZSBvbmx5LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMi8yNC9kZS1nYXVsbGUtbGVhZHMtZnJhbmNlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTgsXHIgICAgXCJ0aXRsZVwiOlwiQ2FwdHVyZWQgTmF6aSBTY2llbnRpc3QqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiTW92ZSB0aGUgU3BhY2UgUmFjZSBNYXJrZXIgYWhlYWQgYnkgMSBzcGFjZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDIvMjcvY2FwdHVyZWQtbmF6aS1zY2llbnRpc3QvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxOSxcciAgICBcInRpdGxlXCI6XCJUcnVtYW4gRG9jdHJpbmUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVU1NSIEluZmx1ZW5jZSBmcm9tIGEgc2luZ2xlIHVuY29udHJvbGxlZCBjb3VudHJ5IGluIEV1cm9wZS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMDIvdHJ1bWFuLWRvY3RyaW5lL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIwLFxyICAgIFwidGl0bGVcIjpcIk9seW1waWMgR2FtZXNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGlzIHBsYXllciBzcG9uc29ycyB0aGUgT2x5bXBpY3MuIFRoZSBvcHBvbmVudCBtdXN0IGVpdGhlciBwYXJ0aWNpcGF0ZSBvciBib3ljb3R0LiBJZiB0aGUgb3Bwb25lbnQgcGFydGljaXBhdGVzLCBlYWNoIHBsYXllciByb2xscyBhIGRpZSBhbmQgdGhlIHNwb25zb3IgYWRkcyAyIHRvIHRoZWlyIHJvbGwuIFRoZSBwbGF5ZXIgd2l0aCB0aGUgaGlnaGVzdCBtb2RpZmllZCBkaWUgcm9sbCByZWNlaXZlcyAyIFZQIChyZXJvbGwgdGllcykuIElmIHRoZSBvcHBvbmVudCBib3ljb3R0cywgZGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBzcG9uc29yIG1heSBjb25kdWN0IE9wZXJhdGlvbnMgYXMgaWYgdGhleSBwbGF5ZWQgYSA0IE9wcyBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8xMi9vbHltcGljLWdhbWVzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIxLFxyICAgIFwidGl0bGVcIjpcIk5BVE8qXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgY2Fubm90IG1ha2UgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBhZ2FpbnN0IGFueSBVUyBjb250cm9sbGVkIGNvdW50cmllcyBpbiBFdXJvcGUuIFVTIGNvbnRyb2xsZWQgY291bnRyaWVzIGluIEV1cm9wZSBjYW5ub3QgYmUgYXR0YWNrZWQgYnkgcGxheSBvZiB0aGUg4oCcIzM2IOKAkyBCcnVzaCBXYXLigJ0gRXZlbnQuIFRoaXMgY2FyZCByZXF1aXJlcyBwcmlvciBwbGF5IG9mIGVpdGhlciB0aGUg4oCcIzE2IOKAkyBXYXJzYXcgUGFjdCBGb3JtZWTigJ0gb3Ig4oCcIzIzIOKAkyBNYXJzaGFsbCBQbGFu4oCdIEV2ZW50KHMpIGluIG9yZGVyIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTIvbmF0by9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjIyLFxyICAgIFwidGl0bGVcIjpcIkluZGVwZW5kZW50IFJlZHMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIFVTIEluZmx1ZW5jZSB0byBlaXRoZXIgWXVnb3NsYXZpYSwgUm9tYW5pYSwgQnVsZ2FyaWEsIEh1bmdhcnksIG9yIEN6ZWNob3Nsb3Zha2lhIHNvIHRoYXQgaXQgZXF1YWxzIHRoZSBVU1NSIEluZmx1ZW5jZSBpbiB0aGF0IGNvdW50cnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzEzL2luZGVwZW5kZW50LXJlZHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MjMsXHIgICAgXCJ0aXRsZVwiOlwiTWFyc2hhbGwgUGxhbipcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVUyBJbmZsdWVuY2UgdG8gZWFjaCBvZiBhbnkgNyBub24tVVNTUiBjb250cm9sbGVkIGNvdW50cmllcyBpbiBXZXN0ZXJuIEV1cm9wZS4gVGhpcyBFdmVudCBhbGxvd3MgdGhlIOKAnCMyMSDigJMgTkFUT+KAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMTYvbWFyc2hhbGwtcGxhbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI0LFxyICAgIFwidGl0bGVcIjpcIkluZG8tUGFraXN0YW5pIFdhclwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkluZGlhIGludmFkZXMgUGFraXN0YW4gb3IgdmljZSB2ZXJzYSAocGxheWVy4oCZcyBjaG9pY2UpLiBSb2xsIGEgZGllIGFuZCBzdWJ0cmFjdCAoLTEpIGZyb20gdGhlIGRpZSByb2xsIGZvciBldmVyeSBlbmVteSBjb250cm9sbGVkIGNvdW50cnkgYWRqYWNlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgaW52YXNpb24gKEluZGlhIG9yIFBha2lzdGFuKS4gT24gYSBtb2RpZmllZCBkaWUgcm9sbCBvZiA0LTYsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgMiBWUCBhbmQgcmVwbGFjZXMgYWxsIHRoZSBvcHBvbmVudOKAmXMgSW5mbHVlbmNlIGluIHRoZSB0YXJnZXQgY291bnRyeSB3aXRoIHRoZWlyIEluZmx1ZW5jZS4gVGhlIHBsYXllciBhZGRzIDIgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzE5L2luZG8tcGFraXN0YW5pLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNSxcciAgICBcInRpdGxlXCI6XCJDb250YWlubWVudCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIFVTLCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgKzEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtYXhpbXVtIG9mIDQgT3BlcmF0aW9ucyBwZXIgY2FyZCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzIwL2NvbnRhaW5tZW50L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI2LFxyICAgIFwidGl0bGVcIjpcIkNJQSBDcmVhdGVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcyBmb3IgdGhpcyB0dXJuLiBUaGUgVVMgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wMy8yNi9jaWEtY3JlYXRlZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyNyxcciAgICBcInRpdGxlXCI6XCJVUy9KYXBhbiBNdXR1YWwgRGVmZW5zZSBQYWN0KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIlRoZSBVUyBhZGRzIHN1ZmZpY2llbnQgSW5mbHVlbmNlIHRvIEphcGFuIGZvciBDb250cm9sLiBUaGUgVVNTUiBjYW5ub3QgbWFrZSBDb3VwIEF0dGVtcHRzIG9yIFJlYWxpZ25tZW50IHJvbGxzIGFnYWluc3QgSmFwYW4uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzAzLzI3L3VzamFwYW4tbXV0dWFsLWRlZmVuc2UtcGFjdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjI4LFxyICAgIFwidGl0bGVcIjpcIlN1ZXogQ3Jpc2lzKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlJlbW92ZSBhIHRvdGFsIG9mIDQgVVMgSW5mbHVlbmNlIGZyb20gRnJhbmNlLCB0aGUgVW5pdGVkIEtpbmdkb20gYW5kIElzcmFlbCAocmVtb3Zpbmcgbm8gbW9yZSB0aGFuIDIgSW5mbHVlbmNlIHBlciBjb3VudHJ5KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDMvMjkvc3Vlei1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoyOSxcciAgICBcInRpdGxlXCI6XCJFYXN0IEV1cm9wZWFuIFVucmVzdFwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkVhcmx5IG9yIE1pZCBXYXI6IFJlbW92ZSAxIFVTU1IgSW5mbHVlbmNlIGZyb20gMyBjb3VudHJpZXMgaW4gRWFzdGVybiBFdXJvcGUuIExhdGUgV2FyOiBSZW1vdmUgMiBVU1NSIEluZmx1ZW5jZSBmcm9tIDMgY291bnRyaWVzIGluIEVhc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8wMi9lYXN0LWV1cm9wZWFuLXVucmVzdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzAsXHIgICAgXCJ0aXRsZVwiOlwiRGVjb2xvbml6YXRpb25cIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBlYWNoIG9mIGFueSA0IGNvdW50cmllcyBpbiBBZnJpY2EgYW5kL29yIFNvdXRoZWFzdCBBc2lhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNC8wNS9kZWNvbG9uaXphdGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMSxcciAgICBcInRpdGxlXCI6XCJSZWQgU2NhcmUvUHVyZ2VcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIG9wcG9uZW50LCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGlzIHR1cm4sIHJlY2VpdmUgLTEgdG8gdGhlaXIgT3BlcmF0aW9ucyB2YWx1ZSAodG8gYSBtaW5pbXVtIHZhbHVlIG9mIDEgT3BlcmF0aW9ucyBwb2ludCkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA0LzIzL3JlZC1zY2FyZXB1cmdlL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjMyLFxyICAgIFwidGl0bGVcIjpcIlVOIEludGVydmVudGlvblwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIlBsYXkgdGhpcyBjYXJkIHNpbXVsdGFuZW91c2x5IHdpdGggYSBjYXJkIGNvbnRhaW5pbmcgYW4gb3Bwb25lbnTigJlzIGFzc29jaWF0ZWQgRXZlbnQuIFRoZSBvcHBvbmVudOKAmXMgYXNzb2NpYXRlZCBFdmVudCBpcyBjYW5jZWxlZCBidXQgeW91IG1heSB1c2UgdGhlIE9wZXJhdGlvbnMgdmFsdWUgb2YgdGhlIG9wcG9uZW504oCZcyBjYXJkIHRvIGNvbmR1Y3QgT3BlcmF0aW9ucy4gVGhpcyBFdmVudCBjYW5ub3QgYmUgcGxheWVkIGR1cmluZyB0aGUgSGVhZGxpbmUgUGhhc2UuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA1LzA3L3VuLWludGVydmVudGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozMyxcciAgICBcInRpdGxlXCI6XCJEZS1TdGFsaW5pemF0aW9uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIG1heSByZWFsbG9jYXRlIHVwIHRvIGEgdG90YWwgb2YgNCBJbmZsdWVuY2UgZnJvbSBvbmUgb3IgbW9yZSBjb3VudHJpZXMgdG8gYW55IG5vbi1VUyBjb250cm9sbGVkIGNvdW50cmllcyAoYWRkaW5nIG5vIG1vcmUgdGhhbiAyIEluZmx1ZW5jZSBwZXIgY291bnRyeSkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA1LzI5L2RlLXN0YWxpbml6YXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNCxcciAgICBcInRpdGxlXCI6XCJOdWNsZWFyIFRlc3QgQmFuXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllciByZWNlaXZlcyBWUCBlcXVhbCB0byB0aGUgY3VycmVudCBERUZDT04gbGV2ZWwgbWludXMgMiB0aGVuIGltcHJvdmVzIHRoZSBERUZDT04gbGV2ZWwgYnkgMi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDYvMTEvbnVjbGVhci10ZXN0LWJhbi9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjozNSxcciAgICBcInRpdGxlXCI6XCJGb3Jtb3NhbiBSZXNvbHV0aW9uKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoaXMgY2FyZOKAmXMgRXZlbnQgaXMgaW4gZWZmZWN0LCBUYWl3YW4gd2lsbCBiZSB0cmVhdGVkIGFzIGEgQmF0dGxlZ3JvdW5kIGNvdW50cnksIGZvciBzY29yaW5nIHB1cnBvc2VzIG9ubHksIGlmIFRhaXdhbiBpcyBVUyBjb250cm9sbGVkIHdoZW4gdGhlIEFzaWEgU2NvcmluZyBDYXJkIGlzIHBsYXllZC4gVGhpcyBFdmVudCBpcyBjYW5jZWxsZWQgYWZ0ZXIgdGhlIFVTIGhhcyBwbGF5ZWQgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8wMi9mb3Jtb3Nhbi1yZXNvbHV0aW9uL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoxXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzYsXHIgICAgXCJ0aXRsZVwiOlwiQnJ1c2ggV2FyXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllciBhdHRhY2tzIGFueSBjb3VudHJ5IHdpdGggYSBzdGFiaWxpdHkgbnVtYmVyIG9mIDEgb3IgMi4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgYWRqYWNlbnQgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5LiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDMtNiwgdGhlIHBsYXllciByZWNlaXZlcyAxIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMyB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvYnJ1c2gtd2FyL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjM3LFxyICAgIFwidGl0bGVcIjpcIkNlbnRyYWwgQW1lcmljYSBTY29yaW5nXCIsXHIgICAgXCJvcHNcIjowLFxyICAgIFwidGV4dFwiOlwiUHJlc2VuY2U6IDE7IERvbWluYXRpb246IDM7IENvbnRyb2w6IDU7ICsxIFZQIHBlciBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIFJlZ2lvbjsgKzEgVlAgcGVyIGNvdW50cnkgY29udHJvbGxlZCB0aGF0IGlzIGFkamFjZW50IHRvIGVuZW15IHN1cGVycG93ZXI7IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDQvcmVnaW9ucy1jZW50cmFsLWFtZXJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzgsXHIgICAgXCJ0aXRsZVwiOlwiU291dGhlYXN0IEFzaWEgU2NvcmluZypcIixcciAgICBcIm9wc1wiOjAsXHIgICAgXCJ0ZXh0XCI6XCIxIFZQIGVhY2ggZm9yIENvbnRyb2wgb2YgQnVybWEsIENhbWJvZGlhL0xhb3MsIFZpZXRuYW0sIE1hbGF5c2lhLCBJbmRvbmVzaWEgYW5kIHRoZSBQaGlsaXBwaW5lcy4gMiBWUCBmb3IgQ29udHJvbCBvZiBUaGFpbGFuZDsgTUFZIE5PVCBCRSBIRUxEIVwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNC9yZWdpb25zLXNvdXRoZWFzdC1hc2lhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MzksXHIgICAgXCJ0aXRsZVwiOlwiQXJtcyBSYWNlXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQ29tcGFyZSBlYWNoIHBsYXllcuKAmXMgdmFsdWUgb24gdGhlIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suIElmIHRoZSBwaGFzaW5nIHBsYXllciBoYXMgYSBoaWdoZXIgdmFsdWUgdGhhbiB0aGVpciBvcHBvbmVudCBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjaywgdGhhdCBwbGF5ZXIgcmVjZWl2ZXMgMSBWUC4gSWYgdGhlIHBoYXNpbmcgcGxheWVyIGhhcyBhIGhpZ2hlciB2YWx1ZSB0aGFuIHRoZWlyIG9wcG9uZW50LCBhbmQgaGFzIG1ldCB0aGUg4oCccmVxdWlyZWTigJ0gYW1vdW50LCBvbiB0aGUgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjaywgdGhhdCBwbGF5ZXIgcmVjZWl2ZXMgMyBWUCBpbnN0ZWFkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8wNS9hcm1zLXJhY2UvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDAsXHIgICAgXCJ0aXRsZVwiOlwiQ3ViYW4gTWlzc2lsZSBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiU2V0IHRoZSBERUZDT04gbGV2ZWwgdG8gMi4gQW55IENvdXAgQXR0ZW1wdHMgYnkgeW91ciBvcHBvbmVudCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCB3aWxsIHJlc3VsdCBpbiBHbG9iYWwgVGhlcm1vbnVjbGVhciBXYXIuIFlvdXIgb3Bwb25lbnQgd2lsbCBsb3NlIHRoZSBnYW1lLiBUaGlzIGNhcmTigJlzIEV2ZW50IG1heSBiZSBjYW5jZWxlZCwgYXQgYW55IHRpbWUsIGlmIHRoZSBVU1NSIHJlbW92ZXMgMiBJbmZsdWVuY2UgZnJvbSBDdWJhIG9yIHRoZSBVUyByZW1vdmVzIDIgSW5mbHVlbmNlIGZyb20gV2VzdCBHZXJtYW55IG9yIFR1cmtleS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMDYvY3ViYW4tbWlzc2lsZS1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0MSxcciAgICBcInRpdGxlXCI6XCJOdWNsZWFyIFN1YnMqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVVMgT3BlcmF0aW9ucyB1c2VkIGZvciBDb3VwIEF0dGVtcHRzIGluIEJhdHRsZWdyb3VuZCBjb3VudHJpZXMsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgZG8gbm90IGRlZ3JhZGUgdGhlIERFRkNPTiBsZXZlbC4gVGhpcyBjYXJk4oCZcyBFdmVudCBkb2VzIG5vdCBhcHBseSB0byBhbnkgRXZlbnQgdGhhdCB3b3VsZCBhZmZlY3QgdGhlIERFRkNPTiBsZXZlbCAoZXguIHRoZSDigJwjNDAg4oCTIEN1YmFuIE1pc3NpbGUgQ3Jpc2lz4oCdIEV2ZW50KS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTAvbnVjbGVhci1zdWJzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQyLFxyICAgIFwidGl0bGVcIjpcIlF1YWdtaXJlKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIk9uIHRoZSBVU+KAmXMgbmV4dCBhY3Rpb24gcm91bmQsIGl0IG11c3QgZGlzY2FyZCBhbiBPcGVyYXRpb25zIGNhcmQgd2l0aCBhIHZhbHVlIG9mIDIgb3IgbW9yZSBhbmQgcm9sbCAxLTQgb24gYSBkaWUgdG8gY2FuY2VsIHRoaXMgRXZlbnQuIFJlcGVhdCB0aGlzIEV2ZW50IGZvciBlYWNoIFVTIGFjdGlvbiByb3VuZCB1bnRpbCB0aGUgVVMgc3VjY2Vzc2Z1bGx5IHJvbGxzIDEtNCBvbiBhIGRpZS4gSWYgdGhlIFVTIGlzIHVuYWJsZSB0byBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCwgaXQgbXVzdCBwbGF5IGFsbCBvZiBpdHMgc2NvcmluZyBjYXJkcyBhbmQgdGhlbiBza2lwIGVhY2ggYWN0aW9uIHJvdW5kIGZvciB0aGUgcmVzdCBvZiB0aGUgdHVybi4gVGhpcyBFdmVudCBjYW5jZWxzIHRoZSBlZmZlY3Qocykgb2YgdGhlIOKAnCMxMDYg4oCTIE5PUkFE4oCdIEV2ZW50IChpZiBhcHBsaWNhYmxlKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMTIvcXVhZ21pcmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQzLFxyICAgIFwidGl0bGVcIjpcIlNBTFQgTmVnb3RpYXRpb25zKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAyLiBGb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgdHVybiwgYm90aCBwbGF5ZXJzIHJlY2VpdmUgLTEgdG8gYWxsIENvdXAgQXR0ZW1wdCByb2xscy4gVGhlIHBsYXllciBvZiB0aGlzIGNhcmTigJlzIEV2ZW50IG1heSBsb29rIHRocm91Z2ggdGhlIGRpc2NhcmQgcGlsZSwgcGljayBhbnkgMSBub24tc2NvcmluZyBjYXJkLCByZXZlYWwgaXQgdG8gdGhlaXIgb3Bwb25lbnQgYW5kIHRoZW4gcGxhY2UgdGhlIGRyYXduIGNhcmQgaW50byB0aGVpciBoYW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xNy9zYWx0LW5lZ290aWF0aW9ucy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDQsXHIgICAgXCJ0aXRsZVwiOlwiQmVhciBUcmFwKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIk9uIHRoZSBVU1NS4oCZcyBuZXh0IGFjdGlvbiByb3VuZCwgaXQgbXVzdCBkaXNjYXJkIGFuIE9wZXJhdGlvbnMgY2FyZCB3aXRoIGEgdmFsdWUgb2YgMiBvciBtb3JlIGFuZCByb2xsIDEtNCBvbiBhIGRpZSB0byBjYW5jZWwgdGhpcyBFdmVudC4gUmVwZWF0IHRoaXMgRXZlbnQgZm9yIGVhY2ggVVNTUiBhY3Rpb24gcm91bmQgdW50aWwgdGhlIFVTU1Igc3VjY2Vzc2Z1bGx5IHJvbGxzIDEtNCBvbiBhIGRpZS4gSWYgdGhlIFVTU1IgaXMgdW5hYmxlIHRvIGRpc2NhcmQgYW4gT3BlcmF0aW9ucyBjYXJkLCBpdCBtdXN0IHBsYXkgYWxsIG9mIGl0cyBzY29yaW5nIGNhcmRzIGFuZCB0aGVuIHNraXAgZWFjaCBhY3Rpb24gcm91bmQgZm9yIHRoZSByZXN0IG9mIHRoZSB0dXJuLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wOS8xOS9iZWFyLXRyYXAvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo0NSxcciAgICBcInRpdGxlXCI6XCJTdW1taXRcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJCb3RoIHBsYXllcnMgcm9sbCBhIGRpZS4gRWFjaCBwbGF5ZXIgcmVjZWl2ZXMgKzEgdG8gdGhlIGRpZSByb2xsIGZvciBlYWNoIFJlZ2lvbiAoRXVyb3BlLCBBc2lhLCBldGMuKSB0aGV5IERvbWluYXRlIG9yIENvbnRyb2wuIFRoZSBwbGF5ZXIgd2l0aCB0aGUgaGlnaGVzdCBtb2RpZmllZCBkaWUgcm9sbCByZWNlaXZlcyAyIFZQIGFuZCBtYXkgZGVncmFkZSBvciBpbXByb3ZlIHRoZSBERUZDT04gbGV2ZWwgYnkgMSAoZG8gbm90IHJlcm9sbCB0aWVzKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDkvMjQvc3VtbWl0L1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ2LFxyICAgIFwidGl0bGVcIjpcIkhvdyBJIExlYXJuZWQgdG8gU3RvcCBXb3JyeWluZypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJTZXQgdGhlIERFRkNPTiBsZXZlbCB0byBhbnkgbGV2ZWwgZGVzaXJlZCAoMS01KS4gVGhlIHBsYXllciBhZGRzIDUgdG8gaXRzIE1pbGl0YXJ5IE9wZXJhdGlvbnMgVHJhY2suXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA5LzI2L2hvdy1pLWxlYXJuZWQtdG8tc3RvcC13b3JyeWluZy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ3LFxyICAgIFwidGl0bGVcIjpcIkp1bnRhXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgaW4gQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhLiBUaGUgcGxheWVyIG1heSBtYWtlIGZyZWUgQ291cCBBdHRlbXB0cyBvciBSZWFsaWdubWVudCByb2xscyBpbiBlaXRoZXIgQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDEvanVudGEvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NDgsXHIgICAgXCJ0aXRsZVwiOlwiS2l0Y2hlbiBEZWJhdGVzKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBjb250cm9scyBtb3JlIEJhdHRsZWdyb3VuZCBjb3VudHJpZXMgdGhhbiB0aGUgVVNTUiwgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gcG9rZSB0aGVpciBvcHBvbmVudCBpbiB0aGUgY2hlc3QgYW5kIHJlY2VpdmUgMiBWUCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMDMva2l0Y2hlbi1kZWJhdGVzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjQ5LFxyICAgIFwidGl0bGVcIjpcIk1pc3NpbGUgRW52eVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkV4Y2hhbmdlIHRoaXMgY2FyZCBmb3IgeW91ciBvcHBvbmVudOKAmXMgaGlnaGVzdCB2YWx1ZSBPcGVyYXRpb25zIGNhcmQuIElmIDIgb3IgbW9yZSBjYXJkcyBhcmUgdGllZCwgb3Bwb25lbnQgY2hvb3Nlcy4gSWYgdGhlIGV4Y2hhbmdlZCBjYXJkIGNvbnRhaW5zIGFuIEV2ZW50IGFwcGxpY2FibGUgdG8geW91cnNlbGYgb3IgYm90aCBwbGF5ZXJzLCBpdCBvY2N1cnMgaW1tZWRpYXRlbHkuIElmIGl0IGNvbnRhaW5zIGFuIG9wcG9uZW504oCZcyBFdmVudCwgdXNlIHRoZSBPcGVyYXRpb25zIHZhbHVlIChubyBFdmVudCkuIFRoZSBvcHBvbmVudCBtdXN0IHVzZSB0aGlzIGNhcmQgZm9yIE9wZXJhdGlvbnMgZHVyaW5nIHRoZWlyIG5leHQgYWN0aW9uIHJvdW5kLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8wOC9taXNzaWxlLWVudnkvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTAsXHIgICAgXCJ0aXRsZVwiOlwiV2UgV2lsbCBCdXJ5IFlvdSpcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJEZWdyYWRlIHRoZSBERUZDT04gbGV2ZWwgYnkgMS4gVW5sZXNzIHRoZSAjMzIgVU4gSW50ZXJ2ZW50aW9uIGNhcmQgaXMgcGxheWVkIGFzIGFuIEV2ZW50IG9uIHRoZSBVU+KAmXMgbmV4dCBhY3Rpb24gcm91bmQsIHRoZSBVU1NSIHJlY2VpdmVzIDMgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzEwL3dlLXdpbGwtYnVyeS15b3UvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MSxcciAgICBcInRpdGxlXCI6XCJCcmV6aG5ldiBEb2N0cmluZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBbGwgT3BlcmF0aW9ucyBjYXJkcyBwbGF5ZWQgYnkgdGhlIFVTU1IsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSArMSB0byB0aGVpciBPcGVyYXRpb25zIHZhbHVlICh0byBhIG1heGltdW0gb2YgNCBPcGVyYXRpb25zIHBlciBjYXJkKS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTIvYnJlemhuZXYtZG9jdHJpbmUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MixcciAgICBcInRpdGxlXCI6XCJQb3J0dWd1ZXNlIEVtcGlyZSBDcnVtYmxlcypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgMiBVU1NSIEluZmx1ZW5jZSB0byBBbmdvbGEgYW5kIHRoZSBTRSBBZnJpY2FuIFN0YXRlcy5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMTUvcG9ydHVndWVzZS1lbXBpcmUtY3J1bWJsZXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1MyxcciAgICBcInRpdGxlXCI6XCJTb3V0aCBBZnJpY2FuIFVucmVzdFwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIGVpdGhlciBhZGRzIDIgSW5mbHVlbmNlIHRvIFNvdXRoIEFmcmljYSBvciBhZGRzIDEgSW5mbHVlbmNlIHRvIFNvdXRoIEFmcmljYSBhbmQgMiBJbmZsdWVuY2UgdG8gYSBzaW5nbGUgY291bnRyeSBhZGphY2VudCB0byBTb3V0aCBBZnJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE2L3NvdXRoLWFmcmljYW4tdW5yZXN0L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjU0LFxyICAgIFwidGl0bGVcIjpcIkFsbGVuZGUqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVNTUiBJbmZsdWVuY2UgdG8gQ2hpbGUuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE3L2FsbGVuZGUvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NSxcciAgICBcInRpdGxlXCI6XCJXaWxseSBCcmFuZHQqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUCBhbmQgYWRkcyAxIEluZmx1ZW5jZSB0byBXZXN0IEdlcm1hbnkuIFRoaXMgRXZlbnQgY2FuY2VscyB0aGUgZWZmZWN0KHMpIG9mIHRoZSDigJwjMjEg4oCTIE5BVE/igJ0gRXZlbnQgZm9yIFdlc3QgR2VybWFueSBvbmx5LiBUaGlzIEV2ZW50IGlzIHByZXZlbnRlZCAvIGNhbmNlbGVkIGJ5IHRoZSDigJwjOTYg4oCTIFRlYXIgRG93biB0aGlzIFdhbGzigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzE4L3dpbGx5LWJyYW5kdC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NTYsXHIgICAgXCJ0aXRsZVwiOlwiTXVzbGltIFJldm9sdXRpb25cIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTIEluZmx1ZW5jZSBmcm9tIDIgb2YgdGhlIGZvbGxvd2luZyBjb3VudHJpZXM6IFN1ZGFuLCBJcmFuLCBJcmFxLCBFZ3lwdCwgTGlieWEsIFNhdWRpIEFyYWJpYSwgU3lyaWEsIEpvcmRhbi4gVGhpcyBFdmVudCBjYW5ub3QgYmUgdXNlZCBhZnRlciB0aGUg4oCcIzExMCDigJMgQVdBQ1MgU2FsZSB0byBTYXVkaXPigJ0gRXZlbnQgaGFzIGJlZW4gcGxheWVkLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8xOS9tdXNsaW0tcmV2b2x1dGlvbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1NyxcciAgICBcInRpdGxlXCI6XCJBQk0gVHJlYXR5XCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiSW1wcm92ZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZW4gY29uZHVjdCBPcGVyYXRpb25zIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjMvYWJtLXRyZWF0eS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1OCxcciAgICBcInRpdGxlXCI6XCJDdWx0dXJhbCBSZXZvbHV0aW9uKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVMgbXVzdCBnaXZlIHRoZSBjYXJkIHRvIHRoZSBVU1NSIChmYWNlIHVwIGFuZCBhdmFpbGFibGUgdG8gYmUgcGxheWVkKS4gSWYgdGhlIFVTU1IgYWxyZWFkeSBoYXMg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVU1NSIHJlY2VpdmVzIDEgVlAuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI0L2N1bHR1cmFsLXJldm9sdXRpb24vXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo1OSxcciAgICBcInRpdGxlXCI6XCJGbG93ZXIgUG93ZXIqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMiBWUCBmb3IgZXZlcnkgVVMgcGxheWVkIOKAnFdhcuKAnSBjYXJkIChBcmFiLUlzcmFlbGkgV2FyLCBLb3JlYW4gV2FyLCBCcnVzaCBXYXIsIEluZG8tUGFraXN0YW5pIFdhciwgSXJhbi1JcmFxIFdhciksIHVzZWQgZm9yIE9wZXJhdGlvbnMgb3IgYW4gRXZlbnQsIGFmdGVyIHRoaXMgY2FyZCBpcyBwbGF5ZWQuIFRoaXMgRXZlbnQgaXMgcHJldmVudGVkIC8gY2FuY2VsZWQgYnkgdGhlIOKAnCM5NyDigJMgQW4gRXZpbCBFbXBpcmXigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI1L2Zsb3dlci1wb3dlci9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjAsXHIgICAgXCJ0aXRsZVwiOlwiVTIgSW5jaWRlbnQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC4gSWYgdGhlIOKAnCMzMiDigJMgVU4gSW50ZXJ2ZW50aW9u4oCdIEV2ZW50IGlzIHBsYXllZCBsYXRlciB0aGlzIHR1cm4sIGVpdGhlciBieSB0aGUgVVMgb3IgdGhlIFVTU1IsIHRoZSBVU1NSIHJlY2VpdmVzIGFuIGFkZGl0aW9uYWwgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTAvMjYvdS0yLWluY2lkZW50L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjEsXHIgICAgXCJ0aXRsZVwiOlwiT1BFQ1wiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgZm9yIENvbnRyb2wgb2YgZWFjaCBvZiB0aGUgZm9sbG93aW5nIGNvdW50cmllczogRWd5cHQsIElyYW4sIExpYnlhLCBTYXVkaSBBcmFiaWEsIElyYXEsIEd1bGYgU3RhdGVzLCBWZW5lenVlbGEuIFRoaXMgRXZlbnQgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgdGhlIOKAnCM4NiDigJMgTm9ydGggU2VhIE9pbOKAnSBFdmVudCBoYXMgYmVlbiBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEwLzI5L29wZWMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjIsXHIgICAgXCJ0aXRsZVwiOlwiTG9uZSBHdW5tYW4qXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgdGhlaXIgaGFuZCBvZiBjYXJkcy4gVGhlIFVTU1IgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMC8zMC9sb25lLWd1bm1hbi9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjYzLFxyICAgIFwidGl0bGVcIjpcIkNvbG9uaWFsIFJlYXIgR3VhcmRzXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGVhY2ggb2YgYW55IDQgY291bnRyaWVzIGluIEFmcmljYSBhbmQvb3IgU291dGhlYXN0IEFzaWEuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzAxL2NvbG9uaWFsLXJlYXItZ3VhcmRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2NCxcciAgICBcInRpdGxlXCI6XCJQYW5hbWEgQ2FuYWwgUmV0dXJuZWQqXCIsXHIgICAgXCJvcHNcIjoxLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIFBhbmFtYSwgQ29zdGEgUmljYSBhbmQgVmVuZXp1ZWxhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wMi9wYW5hbWEtY2FuYWwtcmV0dXJuZWQvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NjUsXHIgICAgXCJ0aXRsZVwiOlwiQ2FtcCBEYXZpZCBBY2NvcmRzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGFuZCBhZGRzIDEgSW5mbHVlbmNlIHRvIElzcmFlbCwgSm9yZGFuIGFuZCBFZ3lwdC4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzEzIOKAkyBBcmFiLUlzcmFlbGkgV2Fy4oCdIGNhcmQgZnJvbSBiZWluZyBwbGF5ZWQgYXMgYW4gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzA1L2NhbXAtZGF2aWQtYWNjb3Jkcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY2LFxyICAgIFwidGl0bGVcIjpcIlB1cHBldCBHb3Zlcm5tZW50cypcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IGFkZCAxIEluZmx1ZW5jZSB0byAzIGNvdW50cmllcyB0aGF0IGRvIG5vdCBjb250YWluIEluZmx1ZW5jZSBmcm9tIGVpdGhlciB0aGUgVVMgb3IgVVNTUi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDYvcHVwcGV0LWdvdmVybm1lbnRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY3LFxyICAgIFwidGl0bGVcIjpcIkdyYWluIFNhbGVzIHRvIFNvdmlldHNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmFuZG9tbHkgc2VsZWN0cyAxIGNhcmQgZnJvbSB0aGUgVVNTUuKAmXMgaGFuZCAoaWYgYXZhaWxhYmxlKS4gVGhlIFVTIG11c3QgZWl0aGVyIHBsYXkgdGhlIGNhcmQgb3IgcmV0dXJuIGl0IHRvIHRoZSBVU1NSLiBJZiB0aGUgY2FyZCBpcyByZXR1cm5lZCwgb3IgdGhlIFVTU1IgaGFzIG5vIGNhcmRzLCB0aGUgVVMgbWF5IHVzZSB0aGUgT3BlcmF0aW9ucyB2YWx1ZSBvZiB0aGlzIGNhcmQgdG8gY29uZHVjdCBPcGVyYXRpb25zLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8wNy9ncmFpbi1zYWxlcy10by1zb3ZpZXRzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo2OCxcciAgICBcInRpdGxlXCI6XCJKb2huIFBhdWwgSUkgRWxlY3RlZCBQb3BlKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSAyIFVTU1IgSW5mbHVlbmNlIGZyb20gUG9sYW5kIGFuZCBhZGQgMSBVUyBJbmZsdWVuY2UgdG8gUG9sYW5kLiBUaGlzIEV2ZW50IGFsbG93cyB0aGUg4oCcIzEwMSDigJMgU29saWRhcml0eeKAnSBjYXJkIHRvIGJlIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDgvam9obi1wYXVsLWlpLWVsZWN0ZWQtcG9wZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjY5LFxyICAgIFwidGl0bGVcIjpcIkxhdGluIEFtZXJpY2FuIERlYXRoIFNxdWFkc1wiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFsbCBvZiB0aGUgcGhhc2luZyBwbGF5ZXLigJlzIENvdXAgQXR0ZW1wdHMgaW4gQ2VudHJhbCBhbmQgU291dGggQW1lcmljYSwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlICsxIHRvIHRoZWlyIGRpZSByb2xsLiBBbGwgb2YgdGhlIG9wcG9uZW504oCZcyBDb3VwIEF0dGVtcHRzIGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoaXMgdHVybiwgcmVjZWl2ZSAtMSB0byB0aGVpciBkaWUgcm9sbC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMDkvbGF0aW4tYW1lcmljYW4tZGVhdGgtc3F1YWRzL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjcwLFxyICAgIFwidGl0bGVcIjpcIk9BUyBGb3VuZGVkKlwiLFxyICAgIFwib3BzXCI6MSxcciAgICBcInRleHRcIjpcIkFkZCBhIHRvdGFsIG9mIDIgVVMgSW5mbHVlbmNlIHRvIGFueSBjb3VudHJpZXMgaW4gQ2VudHJhbCBvciBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xMi9vYXMtZm91bmRlZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MSxcciAgICBcInRpdGxlXCI6XCJOaXhvbiBQbGF5cyB0aGUgQ2hpbmEgQ2FyZCpcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVNTUiBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTIChmYWNlIGRvd24gYW5kIHVuYXZhaWxhYmxlIGZvciBpbW1lZGlhdGUgcGxheSkuIElmIHRoZSBVUyBhbHJlYWR5IGhhcyB0aGUg4oCcIzYg4oCTIFRoZSBDaGluYSBDYXJk4oCdIGNhcmQsIHRoZSBVUyByZWNlaXZlcyAyIFZQLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xMy9uaXhvbi1wbGF5cy10aGUtY2hpbmEtY2FyZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3MixcciAgICBcInRpdGxlXCI6XCJTYWRhdCBFeHBlbHMgU292aWV0cypcIixcciAgICBcIm9wc1wiOjEsXHIgICAgXCJ0ZXh0XCI6XCJSZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gRWd5cHQgYW5kIGFkZCAxIFVTIEluZmx1ZW5jZSB0byBFZ3lwdC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMTQvc2FkYXQtZXhwZWxzLXNvdmlldHMvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzMsXHIgICAgXCJ0aXRsZVwiOlwiU2h1dHRsZSBEaXBsb21hY3lcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGlzIGNhcmTigJlzIEV2ZW50IGlzIGluIGVmZmVjdCwgc3VidHJhY3QgKC0xKSBhIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGZyb20gdGhlIFVTU1IgdG90YWwgYW5kIHRoZW4gZGlzY2FyZCB0aGlzIGNhcmQgZHVyaW5nIHRoZSBuZXh0IHNjb3Jpbmcgb2YgdGhlIE1pZGRsZSBFYXN0IG9yIEFzaWEgKHdoaWNoIGV2ZXIgY29tZXMgZmlyc3QpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNS9zaHV0dGxlLWRpcGxvbWFjeS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3NCxcciAgICBcInRpdGxlXCI6XCJUaGUgVm9pY2Ugb2YgQW1lcmljYVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSA0IFVTU1IgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBOT1QgaW4gRXVyb3BlIChyZW1vdmluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xNi90aGUtdm9pY2Utb2YtYW1lcmljYS9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzUsXHIgICAgXCJ0aXRsZVwiOlwiTGliZXJhdGlvbiBUaGVvbG9neVwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCBhIHRvdGFsIG9mIDMgVVNTUiBJbmZsdWVuY2UgdG8gYW55IGNvdW50cmllcyBpbiBDZW50cmFsIEFtZXJpY2EgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8xOS9saWJlcmF0aW9uLXRoZW9sb2d5L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc2LFxyICAgIFwidGl0bGVcIjpcIlVzc3VyaSBSaXZlciBTa2lybWlzaCpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgVVNTUiBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCB0aGUgVVNTUiBtdXN0IGdpdmUgdGhlIGNhcmQgdG8gdGhlIFVTIChmYWNlIHVwIGFuZCBhdmFpbGFibGUgZm9yIHBsYXkpLiBJZiB0aGUgVVMgYWxyZWFkeSBoYXMgdGhlIOKAnCM2IOKAkyBUaGUgQ2hpbmEgQ2FyZOKAnSBjYXJkLCBhZGQgYSB0b3RhbCBvZiA0IFVTIEluZmx1ZW5jZSB0byBhbnkgY291bnRyaWVzIGluIEFzaWEgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMC91c3N1cmktcml2ZXItc2tpcm1pc2gvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6NzcsXHIgICAgXCJ0aXRsZVwiOlwiQXNrIE5vdCBXaGF0IFlvdXIgQ291bnRyeeKApipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IGRpc2NhcmQgdXAgdG8gdGhlaXIgZW50aXJlIGhhbmQgb2YgY2FyZHMgKGluY2x1ZGluZyBzY29yaW5nIGNhcmRzKSB0byB0aGUgZGlzY2FyZCBwaWxlIGFuZCBkcmF3IHJlcGxhY2VtZW50cyBmcm9tIHRoZSBkcmF3IHBpbGUuIFRoZSBudW1iZXIgb2YgY2FyZHMgdG8gYmUgZGlzY2FyZGVkIG11c3QgYmUgZGVjaWRlZCBiZWZvcmUgZHJhd2luZyBhbnkgcmVwbGFjZW1lbnQgY2FyZHMgZnJvbSB0aGUgZHJhdyBwaWxlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMS8yMS9hc2stbm90LXdoYXQteW91ci1jb3VudHJ5LWNhbi1kby1mb3IteW91L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjc4LFxyICAgIFwidGl0bGVcIjpcIkFsbGlhbmNlIGZvciBQcm9ncmVzcypcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUCBmb3IgZWFjaCBVUyBjb250cm9sbGVkIEJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgYW5kIFNvdXRoIEFtZXJpY2EuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzIzL2FsbGlhbmNlLWZvci1wcm9ncmVzcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjo3OSxcciAgICBcInRpdGxlXCI6XCJBZnJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAxOyBEb21pbmF0aW9uOiA0OyBDb250cm9sOiA2OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDQvMTEvcmVnaW9ucy1hZnJpY2EvXCIsXHIgICAgXCJvd25lclwiOlwibmV1dHJhbFwiLFxyICAgIFwicmVtb3ZlZFwiOmZhbHNlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODAsXHIgICAgXCJ0aXRsZVwiOlwiT25lIFNtYWxsIFN0ZXDigKZcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJJZiB5b3UgYXJlIGJlaGluZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjaywgdGhlIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gbW92ZSB0aGVpciBtYXJrZXIgMiBzcGFjZXMgZm9yd2FyZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjay4gVGhlIHBsYXllciByZWNlaXZlcyBWUCBvbmx5IGZyb20gdGhlIGZpbmFsIHNwYWNlIG1vdmVkIGludG8uXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI2L29uZS1zbWFsbC1zdGVwL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgxLFxyICAgIFwidGl0bGVcIjpcIlNvdXRoIEFtZXJpY2EgU2NvcmluZ1wiLFxyICAgIFwib3BzXCI6MCxcciAgICBcInRleHRcIjpcIlByZXNlbmNlOiAyOyBEb21pbmF0aW9uOiA1OyBDb250cm9sOiA2OyArMSBWUCBwZXIgY29udHJvbGxlZCBCYXR0bGVncm91bmQgY291bnRyeSBpbiBSZWdpb247IE1BWSBOT1QgQkUgSEVMRCFcIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDgvMTUvcmVnaW9ucy1zb3V0aC1hbWVyaWNhL1wiLFxyICAgIFwib3duZXJcIjpcIm5ldXRyYWxcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MlxyICB9LFxyICB7XHIgICAgXCJpZFwiOjgyLFxyICAgIFwidGl0bGVcIjpcIklyYW5pYW4gSG9zdGFnZSBDcmlzaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgYW5kIGFkZCAyIFVTU1IgSW5mbHVlbmNlIHRvIElyYW4uIFRoaXMgY2FyZOKAmXMgRXZlbnQgcmVxdWlyZXMgdGhlIFVTIHRvIGRpc2NhcmQgMiBjYXJkcywgaW5zdGVhZCBvZiAxIGNhcmQsIGlmIHRoZSDigJwjOTIg4oCTIFRlcnJvcmlzbeKAnSBFdmVudCBpcyBwbGF5ZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzMwL2lyYW5pYW4taG9zdGFnZS1jcmlzaXMvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjgzLFxyICAgIFwidGl0bGVcIjpcIlRoZSBJcm9uIExhZHkqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVNTUiBJbmZsdWVuY2UgdG8gQXJnZW50aW5hIGFuZCByZW1vdmUgYWxsIFVTU1IgSW5mbHVlbmNlIGZyb20gdGhlIFVuaXRlZCBLaW5nZG9tLiBUaGUgVVMgcmVjZWl2ZXMgMSBWUC4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzcg4oCTIFNvY2lhbGlzdCBHb3Zlcm5tZW50c+KAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wMy90aGUtaXJvbi1sYWR5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODQsXHIgICAgXCJ0aXRsZVwiOlwiUmVhZ2FuIEJvbWJzIExpYnlhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVUyByZWNlaXZlcyAxIFZQIGZvciBldmVyeSAyIFVTU1IgSW5mbHVlbmNlIGluIExpYnlhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNC9yZWFnYW4tYm9tYnMtbGlieWEvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODUsXHIgICAgXCJ0aXRsZVwiOlwiU3RhciBXYXJzKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklmIHRoZSBVUyBpcyBhaGVhZCBvbiB0aGUgU3BhY2UgUmFjZSBUcmFjaywgdGhlIFVTIHBsYXllciB1c2VzIHRoaXMgRXZlbnQgdG8gbG9vayB0aHJvdWdoIHRoZSBkaXNjYXJkIHBpbGUsIHBpY2sgYW55IDEgbm9uLXNjb3JpbmcgY2FyZCBhbmQgcGxheSBpdCBpbW1lZGlhdGVseSBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDUvc3Rhci13YXJzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg2LFxyICAgIFwidGl0bGVcIjpcIk5vcnRoIFNlYSBPaWwqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIG1heSBwbGF5IDggY2FyZHMgKGluIDggYWN0aW9uIHJvdW5kcykgZm9yIHRoaXMgdHVybiBvbmx5LiBUaGlzIEV2ZW50IHByZXZlbnRzIHRoZSDigJwjNjEg4oCTIE9QRUPigJ0gY2FyZCBmcm9tIGJlaW5nIHBsYXllZCBhcyBhbiBFdmVudC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMDYvbm9ydGgtc2VhLW9pbC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg3LFxyICAgIFwidGl0bGVcIjpcIlRoZSBSZWZvcm1lcipcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJBZGQgNCBVU1NSIEluZmx1ZW5jZSB0byBFdXJvcGUgKGFkZGluZyBubyBtb3JlIHRoYW4gMiBJbmZsdWVuY2UgcGVyIGNvdW50cnkpLiBJZiB0aGUgVVNTUiBpcyBhaGVhZCBvZiB0aGUgVVMgaW4gVlAsIDYgSW5mbHVlbmNlIG1heSBiZSBhZGRlZCB0byBFdXJvcGUgaW5zdGVhZC4gVGhlIFVTU1IgbWF5IG5vIGxvbmdlciBtYWtlIENvdXAgQXR0ZW1wdHMgaW4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8wNy90aGUtcmVmb3JtZXIvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjg4LFxyICAgIFwidGl0bGVcIjpcIk1hcmluZSBCYXJyYWNrcyBCb21iaW5nKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlJlbW92ZSBhbGwgVVMgSW5mbHVlbmNlIGluIExlYmFub24gYW5kIHJlbW92ZSBhIHRvdGFsIG9mIDIgVVMgSW5mbHVlbmNlIGZyb20gYW55IGNvdW50cmllcyBpbiB0aGUgTWlkZGxlIEVhc3QuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzEwL21hcmluZS1iYXJyYWNrcy1ib21iaW5nL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6ODksXHIgICAgXCJ0aXRsZVwiOlwiU292aWV0cyBTaG9vdCBEb3duIEtBTC0wMDcqXCIsXHIgICAgXCJvcHNcIjo0LFxyICAgIFwidGV4dFwiOlwiRGVncmFkZSB0aGUgREVGQ09OIGxldmVsIGJ5IDEgYW5kIHRoZSBVUyByZWNlaXZlcyAyIFZQLiBUaGUgVVMgbWF5IHBsYWNlIGluZmx1ZW5jZSBvciBtYWtlIFJlYWxpZ25tZW50IHJvbGxzLCB1c2luZyB0aGlzIGNhcmQsIGlmIFNvdXRoIEtvcmVhIGlzIFVTIGNvbnRyb2xsZWQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzExL3NvdmlldHMtc2hvb3QtZG93bi1rYWwtMDA3L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjkwLFxyICAgIFwidGl0bGVcIjpcIkdsYXNub3N0KlwiLFxyICAgIFwib3BzXCI6NCxcciAgICBcInRleHRcIjpcIkltcHJvdmUgdGhlIERFRkNPTiBsZXZlbCBieSAxIGFuZCB0aGUgVVNTUiByZWNlaXZlcyAyIFZQLiBUaGUgVVNTUiBtYXkgbWFrZSBSZWFsaWdubWVudCByb2xscyBvciBhZGQgSW5mbHVlbmNlLCB1c2luZyB0aGlzIGNhcmQsIGlmIHRoZSDigJwjODcg4oCTIFRoZSBSZWZvcm1lcuKAnSBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTIvZ2xhc25vc3QvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MSxcciAgICBcInRpdGxlXCI6XCJPcnRlZ2EgRWxlY3RlZCBpbiBOaWNhcmFndWEqXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiUmVtb3ZlIGFsbCBVUyBJbmZsdWVuY2UgZnJvbSBOaWNhcmFndWEuIFRoZSBVU1NSIG1heSBtYWtlIGEgZnJlZSBDb3VwIEF0dGVtcHQsIHVzaW5nIHRoaXMgY2FyZOKAmXMgT3BlcmF0aW9ucyB2YWx1ZSwgaW4gYSBjb3VudHJ5IGFkamFjZW50IHRvIE5pY2FyYWd1YS5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTIvMTMvb3J0ZWdhLWVsZWN0ZWQtaW4tbmljYXJhZ3VhL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTIsXHIgICAgXCJ0aXRsZVwiOlwiVGVycm9yaXNtXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIHBsYXllcuKAmXMgb3Bwb25lbnQgbXVzdCByYW5kb21seSBkaXNjYXJkIDEgY2FyZCBmcm9tIHRoZWlyIGhhbmQuIElmIHRoZSDigJwjODIg4oCTIElyYW5pYW4gSG9zdGFnZSBDcmlzaXPigJ0gRXZlbnQgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQsIGEgVVMgcGxheWVyIChpZiBhcHBsaWNhYmxlKSBtdXN0IHJhbmRvbWx5IGRpc2NhcmQgMiBjYXJkcyBmcm9tIHRoZWlyIGhhbmQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzE0L3RlcnJvcmlzbS9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5MyxcciAgICBcInRpdGxlXCI6XCJJcmFuLUNvbnRyYSBTY2FuZGFsKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFsbCBVUyBSZWFsaWdubWVudCByb2xscywgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhpcyB0dXJuLCByZWNlaXZlIC0xIHRvIHRoZWlyIGRpZSByb2xsLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xNy9pcmFuLWNvbnRyYS1zY2FuZGFsL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTQsXHIgICAgXCJ0aXRsZVwiOlwiQ2hlcm5vYnlsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyBtdXN0IGRlc2lnbmF0ZSBhIHNpbmdsZSBSZWdpb24gKEV1cm9wZSwgQXNpYSwgZXRjLikgdGhhdCwgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIHR1cm4sIHRoZSBVU1NSIGNhbm5vdCBhZGQgSW5mbHVlbmNlIHRvIHVzaW5nIE9wZXJhdGlvbnMgcG9pbnRzLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xOC9jaGVybm9ieWwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTUsXHIgICAgXCJ0aXRsZVwiOlwiTGF0aW4gQW1lcmljYW4gRGVidCBDcmlzaXNcIixcciAgICBcIm9wc1wiOjIsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbXVzdCBpbW1lZGlhdGVseSBkaXNjYXJkIGEgY2FyZCB3aXRoIGFuIE9wZXJhdGlvbnMgdmFsdWUgb2YgMyBvciBtb3JlIG9yIHRoZSBVU1NSIG1heSBkb3VibGUgdGhlIGFtb3VudCBvZiBVU1NSIEluZmx1ZW5jZSBpbiAyIGNvdW50cmllcyBpbiBTb3V0aCBBbWVyaWNhLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8xMi8xOS9sYXRpbi1hbWVyaWNhbi1kZWJ0LWNyaXNpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NixcciAgICBcInRpdGxlXCI6XCJUZWFyIERvd24gdGhpcyBXYWxsKlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIkFkZCAzIFVTIEluZmx1ZW5jZSB0byBFYXN0IEdlcm1hbnkuIFRoZSBVUyBtYXkgbWFrZSBmcmVlIENvdXAgQXR0ZW1wdHMgb3IgUmVhbGlnbm1lbnQgcm9sbHMgaW4gRXVyb3BlIHVzaW5nIHRoZSBPcGVyYXRpb25zIHZhbHVlIG9mIHRoaXMgY2FyZC4gVGhpcyBFdmVudCBwcmV2ZW50cyAvIGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzU1IOKAkyBXaWxseSBCcmFuZHTigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzIwL3RlYXItZG93bi10aGlzLXdhbGwvXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOnRydWUsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjo5NyxcciAgICBcInRpdGxlXCI6XCJBbiBFdmlsIEVtcGlyZSpcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgcmVjZWl2ZXMgMSBWUC4gVGhpcyBFdmVudCBwcmV2ZW50cyAvIGNhbmNlbHMgdGhlIGVmZmVjdChzKSBvZiB0aGUg4oCcIzU5IOKAkyBGbG93ZXIgUG93ZXLigJ0gRXZlbnQuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzEyLzIxL2FuLWV2aWwtZW1waXJlL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjp0cnVlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTgsXHIgICAgXCJ0aXRsZVwiOlwiQWxkcmljaCBBbWVzIFJlbWl4KlwiLFxyICAgIFwib3BzXCI6MyxcciAgICBcInRleHRcIjpcIlRoZSBVUyByZXZlYWxzIHRoZWlyIGhhbmQgb2YgY2FyZHMsIGZhY2UtdXAsIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSB0dXJuIGFuZCB0aGUgVVNTUiBkaXNjYXJkcyBhIGNhcmQgZnJvbSB0aGUgVVMgaGFuZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDMvYWxkcmljaC1hbWVzLXJlbWl4L1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjozXHIgIH0sXHIgIHtcciAgICBcImlkXCI6OTksXHIgICAgXCJ0aXRsZVwiOlwiUGVyc2hpbmcgSUkgRGVwbG95ZWQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTU1IgcmVjZWl2ZXMgMSBWUC4gUmVtb3ZlIDEgVVMgSW5mbHVlbmNlIGZyb20gYW55IDMgY291bnRyaWVzIGluIFdlc3Rlcm4gRXVyb3BlLlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wNC9wZXJzaGluZy1paS1kZXBsb3llZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMCxcciAgICBcInRpdGxlXCI6XCJXYXJnYW1lcypcIixcciAgICBcIm9wc1wiOjQsXHIgICAgXCJ0ZXh0XCI6XCJJZiB0aGUgREVGQ09OIGxldmVsIGlzIDIsIHRoZSBwbGF5ZXIgbWF5IGltbWVkaWF0ZWx5IGVuZCB0aGUgZ2FtZSBhZnRlciBnaXZpbmcgdGhlaXIgb3Bwb25lbnQgNiBWUC4gSG93IGFib3V0IGEgbmljZSBnYW1lIG9mIGNoZXNzP1wiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wNy93YXJnYW1lcy9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMSxcciAgICBcInRpdGxlXCI6XCJTb2xpZGFyaXR5KlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAzIFVTIEluZmx1ZW5jZSB0byBQb2xhbmQuIFRoaXMgY2FyZCByZXF1aXJlcyBwcmlvciBwbGF5IG9mIHRoZSDigJwjNjgg4oCTIEpvaG4gUGF1bCBJSSBFbGVjdGVkIFBvcGXigJ0gRXZlbnQgaW4gb3JkZXIgdG8gYmUgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8wOC9zb2xpZGFyaXR5L1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMixcciAgICBcInRpdGxlXCI6XCJJcmFuLUlyYXEgV2FyKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIklyYW4gaW52YWRlcyBJcmFxIG9yIHZpY2UgdmVyc2EgKHBsYXllcuKAmXMgY2hvaWNlKS4gUm9sbCBhIGRpZSBhbmQgc3VidHJhY3QgKC0xKSBmcm9tIHRoZSBkaWUgcm9sbCBmb3IgZXZlcnkgZW5lbXkgY29udHJvbGxlZCBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIGludmFzaW9uIChJcmFuIG9yIElyYXEpLiBPbiBhIG1vZGlmaWVkIGRpZSByb2xsIG9mIDQtNiwgdGhlIHBsYXllciByZWNlaXZlcyAyIFZQIGFuZCByZXBsYWNlcyBhbGwgdGhlIG9wcG9uZW504oCZcyBJbmZsdWVuY2UgaW4gdGhlIHRhcmdldCBjb3VudHJ5IHdpdGggdGhlaXIgSW5mbHVlbmNlLiBUaGUgcGxheWVyIGFkZHMgMiB0byBpdHMgTWlsaXRhcnkgT3BlcmF0aW9ucyBUcmFjay5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMDkvaXJhbi1pcmFxLXdhci9cIixcciAgICBcIm93bmVyXCI6XCJuZXV0cmFsXCIsXHIgICAgXCJyZW1vdmVkXCI6dHJ1ZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6M1xyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwMyxcciAgICBcInRpdGxlXCI6XCJEZWZlY3RvcnNcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVMgbWF5IHBsYXkgdGhpcyBjYXJkIGR1cmluZyB0aGUgSGVhZGxpbmUgUGhhc2UgaW4gb3JkZXIgdG8gY2FuY2VsIHRoZSBVU1NSIEhlYWRsaW5lIEV2ZW50IChpbmNsdWRpbmcgYSBzY29yaW5nIGNhcmQpLiBUaGUgY2FuY2VsZWQgY2FyZCBpcyBwbGFjZWQgaW50byB0aGUgZGlzY2FyZCBwaWxlLiBJZiB0aGlzIGNhcmQgaXMgcGxheWVkIGJ5IHRoZSBVU1NSIGR1cmluZyBpdHMgYWN0aW9uIHJvdW5kLCB0aGUgVVMgZ2FpbnMgMSBWUC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMDkvZGVmZWN0b3JzL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDQsXHIgICAgXCJ0aXRsZVwiOlwiVGhlIENhbWJyaWRnZSBGaXZlXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiVGhlIFVTIHJldmVhbHMgYWxsIHNjb3JpbmcgY2FyZHMgaW4gdGhlaXIgaGFuZCBvZiBjYXJkcy4gVGhlIFVTU1IgcGxheWVyIG1heSBhZGQgMSBVU1NSIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBSZWdpb24gbmFtZWQgb24gb25lIG9mIHRoZSByZXZlYWxlZCBzY29yaW5nIGNhcmRzLiBUaGlzIGNhcmQgY2FuIG5vdCBiZSBwbGF5ZWQgYXMgYW4gRXZlbnQgZHVyaW5nIHRoZSBMYXRlIFdhci5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMDcvMTEvdGhlLWNhbWJyaWRnZS1maXZlL1wiLFxyICAgIFwib3duZXJcIjpcInVzc3JcIixcciAgICBcInJlbW92ZWRcIjpmYWxzZSxcciAgICBcIm9uZ29pbmdcIjpmYWxzZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNSxcciAgICBcInRpdGxlXCI6XCJTcGVjaWFsIFJlbGF0aW9uc2hpcFwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIkFkZCAxIFVTIEluZmx1ZW5jZSB0byBhIHNpbmdsZSBjb3VudHJ5IGFkamFjZW50IHRvIHRoZSBVLksuIGlmIHRoZSBVLksuIGlzIFVTLWNvbnRyb2xsZWQgYnV0IE5BVE8gaXMgbm90IGluIGVmZmVjdC4gQWRkIDIgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgaW4gV2VzdGVybiBFdXJvcGUsIGFuZCB0aGUgVVMgZ2FpbnMgMiBWUCwgaWYgdGhlIFUuSy4gaXMgVVMtY29udHJvbGxlZCBhbmQgTkFUTyBpcyBpbiBlZmZlY3QuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzA3LzE4L3NwZWNpYWwtcmVsYXRpb25zaGlwL1wiLFxyICAgIFwib3duZXJcIjpcInVzXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjFcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDYsXHIgICAgXCJ0aXRsZVwiOlwiTk9SQUQqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDEgVVMgSW5mbHVlbmNlIHRvIGEgc2luZ2xlIGNvdW50cnkgY29udGFpbmluZyBVUyBJbmZsdWVuY2UsIGF0IHRoZSBlbmQgb2YgZWFjaCBBY3Rpb24gUm91bmQsIGlmIENhbmFkYSBpcyBVUy1jb250cm9sbGVkIGFuZCB0aGUgREVGQ09OIGxldmVsIG1vdmVkIHRvIDIgZHVyaW5nIHRoYXQgQWN0aW9uIFJvdW5kLiBUaGlzIEV2ZW50IGlzIGNhbmNlbGVkIGJ5IHRoZSDigJwjNDIg4oCTIFF1YWdtaXJl4oCdIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMi8wNy8yNS9ub3JhZC9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6MVxyICB9LFxyICB7XHIgICAgXCJpZFwiOjEwNyxcciAgICBcInRpdGxlXCI6XCJDaGVcIixcciAgICBcIm9wc1wiOjMsXHIgICAgXCJ0ZXh0XCI6XCJUaGUgVVNTUiBtYXkgcGVyZm9ybSBhIENvdXAgQXR0ZW1wdCwgdXNpbmcgdGhpcyBjYXJk4oCZcyBPcGVyYXRpb25zIHZhbHVlLCBhZ2FpbnN0IGEgbm9uLUJhdHRsZWdyb3VuZCBjb3VudHJ5IGluIENlbnRyYWwgQW1lcmljYSwgU291dGggQW1lcmljYSBvciBBZnJpY2EuIFRoZSBVU1NSIG1heSBwZXJmb3JtIGEgc2Vjb25kIENvdXAgQXR0ZW1wdCwgYWdhaW5zdCBhIGRpZmZlcmVudCBub24tQmF0dGxlZ3JvdW5kIGNvdW50cnkgaW4gQ2VudHJhbCBBbWVyaWNhLCBTb3V0aCBBbWVyaWNhIG9yIEFmcmljYSwgaWYgdGhlIGZpcnN0IENvdXAgQXR0ZW1wdCByZW1vdmVkIGFueSBVUyBJbmZsdWVuY2UgZnJvbSB0aGUgdGFyZ2V0IGNvdW50cnkuXCIsXHIgICAgXCJ1cmxcIjpcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbS8yMDEyLzExLzI3L2NoZS9cIixcciAgICBcIm93bmVyXCI6XCJ1c3NyXCIsXHIgICAgXCJyZW1vdmVkXCI6ZmFsc2UsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjJcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMDgsXHIgICAgXCJ0aXRsZVwiOlwiT3VyIE1hbiBpbiBUZWhyYW4qXCIsXHIgICAgXCJvcHNcIjoyLFxyICAgIFwidGV4dFwiOlwiSWYgdGhlIFVTIGNvbnRyb2xzIGF0IGxlYXN0IG9uZSBNaWRkbGUgRWFzdCBjb3VudHJ5LCB0aGUgVVMgcGxheWVyIHVzZXMgdGhpcyBFdmVudCB0byBkcmF3IHRoZSB0b3AgNSBjYXJkcyBmcm9tIHRoZSBkcmF3IHBpbGUuIFRoZSBVUyBtYXkgZGlzY2FyZCBhbnkgb3IgYWxsIG9mIHRoZSBkcmF3biBjYXJkcywgYWZ0ZXIgcmV2ZWFsaW5nIHRoZSBkaXNjYXJkZWQgY2FyZChzKSB0byB0aGUgVVNTUiBwbGF5ZXIsIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgRXZlbnQocykuIEFueSByZW1haW5pbmcgZHJhd24gY2FyZHMgYXJlIHJldHVybmVkIHRvIHRoZSBkcmF3IHBpbGUgYW5kIHRoZSBkcmF3IHBpbGUgaXMgcmVzaHVmZmxlZC5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTIvMTEvMjgvb3VyLW1hbi1pbi10ZWhyYW4vXCIsXHIgICAgXCJvd25lclwiOlwidXNcIixcciAgICBcInJlbW92ZWRcIjp0cnVlLFxyICAgIFwib25nb2luZ1wiOmZhbHNlLFxyICAgIFwic3RhZ2VcIjoyXHIgIH0sXHIgIHtcciAgICBcImlkXCI6MTA5LFxyICAgIFwidGl0bGVcIjpcIll1cmkgYW5kIFNhbWFudGhhKlwiLFxyICAgIFwib3BzXCI6MixcciAgICBcInRleHRcIjpcIlRoZSBVU1NSIHJlY2VpdmVzIDEgVlAgZm9yIGVhY2ggVVMgQ291cCBBdHRlbXB0IHBlcmZvcm1lZCBkdXJpbmcgdGhlIHJlbWFpbmRlciBvZiB0aGUgVHVybi5cIixcciAgICBcInVybFwiOlwiaHR0cDovL3R3aWxpZ2h0c3RyYXRlZ3kuY29tLzIwMTMvMDEvMTAveXVyaS1hbmQtc2FtYW50aGEvXCIsXHIgICAgXCJvd25lclwiOlwidXNzclwiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6ZmFsc2UsXHIgICAgXCJzdGFnZVwiOjNcciAgfSxcciAge1xyICAgIFwiaWRcIjoxMTAsXHIgICAgXCJ0aXRsZVwiOlwiQVdBQ1MgU2FsZSB0byBTYXVkaXMqXCIsXHIgICAgXCJvcHNcIjozLFxyICAgIFwidGV4dFwiOlwiQWRkIDIgVVMgSW5mbHVlbmNlIHRvIFNhdWRpIEFyYWJpYS4gVGhpcyBFdmVudCBwcmV2ZW50cyB0aGUg4oCcIzU2IOKAkyBNdXNsaW0gUmV2b2x1dGlvbuKAnSBjYXJkIGZyb20gYmVpbmcgcGxheWVkIGFzIGFuIEV2ZW50LlwiLFxyICAgIFwidXJsXCI6XCJodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20vMjAxMy8wMS8xNC9hd2Fjcy1zYWxlLXRvLXNhdWRpcy9cIixcciAgICBcIm93bmVyXCI6XCJ1c1wiLFxyICAgIFwicmVtb3ZlZFwiOnRydWUsXHIgICAgXCJvbmdvaW5nXCI6dHJ1ZSxcciAgICBcInN0YWdlXCI6M1xyICB9XHJdXHIiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicmVnaW9uSW5mb05vZGVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkXCI6IFwiZXVcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJldVwiLFxuICAgICAgXCJuYW1lXCI6IFwiRXVyb3BlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIkV1cm9wZVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOiBcImVcIixcbiAgICAgIFwicG9pbnRzXCI6IFszLDcsXCJXXCJdLFxuICAgICAgXCJ4XCI6IDQ0MCwgXCJ5XCI6IDI4OCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcIm1lXCIsXG4gICAgICBcImdyb3VwXCI6IFwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwibWVcIixcbiAgICAgIFwibmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOiBcIk1pZCBFYXN0XCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwibVwiLFxuICAgICAgXCJwb2ludHNcIjogWzMsNSw3XSxcbiAgICAgIFwieFwiOiAxMDQwLCBcInlcIjogNDgwLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcIm51bUJ0bFwiOjYsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiXCJcbiAgICB9LCBcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYXNcIixcbiAgICAgIFwiZ3JvdXBcIjogXCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjogXCJhc1wiLFxuICAgICAgXCJuYW1lXCI6IFwiQXNpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBc2lhXCIsXG4gICAgICBcInNob3J0Y3V0XCI6IFwiYVwiLFxuICAgICAgXCJwb2ludHNcIjogWzMsNyw5XSxcbiAgICAgIFwiZXh0cmFcIjogXCIxIHBlciBTRSBjb3VudHJ5LCAyIGZvciBUaGFpbGFuZFwiLFxuICAgICAgXCJ4XCI6IDg4MCwgXCJ5XCI6IDE2MCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo2LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImFmXCIsXG4gICAgICBcImdyb3VwXCI6IFwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiYWZcIixcbiAgICAgIFwibmFtZVwiOiBcIkFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJBZnJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJmXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSw0LDZdLFxuICAgICAgXCJ4XCI6IDUyMCwgXCJ5XCI6IDU0NCxcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcImNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwiY2FcIixcbiAgICAgIFwibmFtZVwiOiBcIkMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJDLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJjXCIsXG4gICAgICBcInBvaW50c1wiOiBbMSwzLDVdLFxuICAgICAgXCJ4XCI6IDI0MCwgXCJ5XCI6IDM1MixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfSwgXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNhXCIsXG4gICAgICBcImdyb3VwXCI6IFwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6IFwic2FcIixcbiAgICAgIFwibmFtZVwiOiBcIlMuQW1lcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjogXCJTLkFtZXJpY2FcIixcbiAgICAgIFwic2hvcnRjdXRcIjogXCJzXCIsXG4gICAgICBcInBvaW50c1wiOiBbMiw1LDZdLFxuICAgICAgXCJ4XCI6IDI0MCwgXCJ5XCI6IDY3MixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJudW1CdGxcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlwiXG4gICAgfVxuICBdLFxuXG4gIFwiY291bnRyeVBvc2l0aW9uc1wiOiB7XG4gICAgXCJVU0FcIjoge1xuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiA2NFxuICAgIH0sXG4gICAgXCJVU1NSXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIkF1c3RyaWFcIjoge1xuICAgICAgXCJ4XCI6IDUyMCxcbiAgICAgIFwieVwiOiAyODhcbiAgICB9LFxuICAgIFwiQmVuZWx1eFwiOiB7XG4gICAgICBcInhcIjogNDAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJCdWxnYXJpYVwiOiB7XG4gICAgICBcInhcIjogNjQwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJDYW5hZGFcIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJDemVjaG9zbG92YWtpYVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJEZW5tYXJrXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIkUgR2VybWFueVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJGaW5sYW5kXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogOTZcbiAgICB9LFxuICAgIFwiRnJhbmNlXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkdyZWVjZVwiOiB7XG4gICAgICBcInhcIjogNTYwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJIdW5nYXJ5XCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkl0YWx5XCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIk5vcndheVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlBvbGFuZFwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJSb21hbmlhXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIlNwYWluL1BvcnR1Z2FsXCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIlN3ZWRlblwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlR1cmtleVwiOiB7XG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJVS1wiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJXIEdlcm1hbnlcIjoge1xuICAgICAgXCJ4XCI6IDQ4MCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiWXVnb3NsYXZpYVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJFZ3lwdFwiOiB7XG4gICAgICBcInhcIjogNzYwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJHdWxmIFN0YXRlc1wiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiAzNTJcbiAgICB9LFxuICAgIFwiSXJhblwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDM1MlxuICAgIH0sXG4gICAgXCJJcmFxXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIklzcmFlbFwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDQxNlxuICAgIH0sXG4gICAgXCJKb3JkYW5cIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiA0MTZcbiAgICB9LFxuICAgIFwiTGViYW5vblwiOiB7XG4gICAgICBcInhcIjogOTYwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJMaWJ5YVwiOiB7XG4gICAgICBcInhcIjogNjgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJTYXVkaSBBcmFiaWFcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogNDE2XG4gICAgfSxcbiAgICBcIlN5cmlhXCI6IHtcbiAgICAgIFwieFwiOiA4ODAsXG4gICAgICBcInlcIjogNDgwXG4gICAgfSxcbiAgICBcIkFmZ2hhbmlzdGFuXCI6IHtcbiAgICAgIFwieFwiOiA3NjAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkF1c3RyYWxpYVwiOiB7XG4gICAgICBcInhcIjogMTA0MCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJCdXJtYVwiOiB7XG4gICAgICBcInhcIjogODgwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJJbmRpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJJbmRvbmVzaWFcIjoge1xuICAgICAgXCJ4XCI6IDk2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiSmFwYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA2NFxuICAgIH0sXG4gICAgXCJMYW9zL0NhbWJvZGlhXCI6IHtcbiAgICAgIFwieFwiOiA5NjAsXG4gICAgICBcInlcIjogMjU2XG4gICAgfSxcbiAgICBcIk1hbGF5c2lhXCI6IHtcbiAgICAgIFwieFwiOiAxMDQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJOIEtvcmVhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogMTYwXG4gICAgfSxcbiAgICBcIlBha2lzdGFuXCI6IHtcbiAgICAgIFwieFwiOiA4NDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIlBoaWxsaXBwaW5lc1wiOiB7XG4gICAgICBcInhcIjogOTIwLFxuICAgICAgXCJ5XCI6IDk2XG4gICAgfSxcbiAgICBcIlMgS29yZWFcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA5NlxuICAgIH0sXG4gICAgXCJUYWl3YW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiAxMjhcbiAgICB9LFxuICAgIFwiVGhhaWxhbmRcIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjI0XG4gICAgfSxcbiAgICBcIlZpZXRuYW1cIjoge1xuICAgICAgXCJ4XCI6IDEwNDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkFsZ2VyaWFcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiQW5nb2xhXCI6IHtcbiAgICAgIFwieFwiOiA1NjAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIkJvdHN3YW5hXCI6IHtcbiAgICAgIFwieFwiOiA2MDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkNhbWVyb29uXCI6IHtcbiAgICAgIFwieFwiOiA0NDAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIkV0aGlvcGlhXCI6IHtcbiAgICAgIFwieFwiOiA4MDAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkl2b3J5IENvYXN0XCI6IHtcbiAgICAgIFwieFwiOiAzNjAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIktlbnlhXCI6IHtcbiAgICAgIFwieFwiOiA3MjAsXG4gICAgICBcInlcIjogNjcyXG4gICAgfSxcbiAgICBcIk1vcm9jY29cIjoge1xuICAgICAgXCJ4XCI6IDM2MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9LFxuICAgIFwiTmlnZXJpYVwiOiB7XG4gICAgICBcInhcIjogNDQwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJTRSBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDcyMCxcbiAgICAgIFwieVwiOiA2MDhcbiAgICB9LFxuICAgIFwiU2FoYXJhbiBTdGF0ZXNcIjoge1xuICAgICAgXCJ4XCI6IDQ0MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiU29tYWxpYVwiOiB7XG4gICAgICBcInhcIjogODAwLFxuICAgICAgXCJ5XCI6IDY3MlxuICAgIH0sXG4gICAgXCJTb3V0aCBBZnJpY2FcIjoge1xuICAgICAgXCJ4XCI6IDY0MCxcbiAgICAgIFwieVwiOiA2NzJcbiAgICB9LFxuICAgIFwiU3VkYW5cIjoge1xuICAgICAgXCJ4XCI6IDgwMCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiVHVuaXNpYVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJXZXN0IEFmcmljYVwiOiB7XG4gICAgICBcInhcIjogMzYwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJaYWlyZVwiOiB7XG4gICAgICBcInhcIjogNTIwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJaaW1iYWJ3ZVwiOiB7XG4gICAgICBcInhcIjogNjAwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJDb3N0YSBSaWNhXCI6IHtcbiAgICAgIFwieFwiOiAyNDAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkN1YmFcIjoge1xuICAgICAgXCJ4XCI6IDE2MCxcbiAgICAgIFwieVwiOiAxNjBcbiAgICB9LFxuICAgIFwiRG9taW5pY2FuIFJlcFwiOiB7XG4gICAgICBcInhcIjogMjgwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJFbCBTYWx2YWRvclwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogMjg4XG4gICAgfSxcbiAgICBcIkd1YXRlbWFsYVwiOiB7XG4gICAgICBcInhcIjogMTIwLFxuICAgICAgXCJ5XCI6IDIyNFxuICAgIH0sXG4gICAgXCJIYWl0aVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJIb25kdXJhc1wiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDI4OFxuICAgIH0sXG4gICAgXCJNZXhpY29cIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDE2MFxuICAgIH0sXG4gICAgXCJOaWNhcmFndWFcIjoge1xuICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgIFwieVwiOiAyMjRcbiAgICB9LFxuICAgIFwiUGFuYW1hXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogMzUyXG4gICAgfSxcbiAgICBcIkFyZ2VudGluYVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDY0MFxuICAgIH0sXG4gICAgXCJCb2xpdmlhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNTEyXG4gICAgfSxcbiAgICBcIkJyYXppbFwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDU0NFxuICAgIH0sXG4gICAgXCJDaGlsZVwiOiB7XG4gICAgICBcInhcIjogODAsXG4gICAgICBcInlcIjogNjA4XG4gICAgfSxcbiAgICBcIkNvbHVtYmlhXCI6IHtcbiAgICAgIFwieFwiOiAxNjAsXG4gICAgICBcInlcIjogNDQ4XG4gICAgfSxcbiAgICBcIkVjdWFkb3JcIjoge1xuICAgICAgXCJ4XCI6IDgwLFxuICAgICAgXCJ5XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJQYXJhZ3VheVwiOiB7XG4gICAgICBcInhcIjogMTYwLFxuICAgICAgXCJ5XCI6IDU3NlxuICAgIH0sXG4gICAgXCJQZXJ1XCI6IHtcbiAgICAgIFwieFwiOiA4MCxcbiAgICAgIFwieVwiOiA1NDRcbiAgICB9LFxuICAgIFwiVXJ1Z3VheVwiOiB7XG4gICAgICBcInhcIjogMjQwLFxuICAgICAgXCJ5XCI6IDYwOFxuICAgIH0sXG4gICAgXCJWZW5lenVlbGFcIjoge1xuICAgICAgXCJ4XCI6IDI0MCxcbiAgICAgIFwieVwiOiA0ODBcbiAgICB9XG4gIH0sXG4gIFwiY291bnRyaWVzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjpcIlVTQVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVTQVwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6XCJ1c2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJ1c2FcIixcbiAgICAgIFwic3RhYlwiOjk5LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNhbmFkYSxDdWJhLE1leGljbyxKYXBhblwiLFxuICAgICAgXCJpZFwiOjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJVU1NSXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVVNTUlwiLFxuICAgICAgXCJzdXBlcnBvd2VyXCI6IHRydWUsXG4gICAgICBcImdyb3VwXCI6XCJ1c3NyXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwidXNzclwiLFxuICAgICAgXCJzdGFiXCI6OTksXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQWZnaGFuaXN0YW4sRmlubGFuZCxOIEtvcmVhLFBvbGFuZCxSb21hbmlhXCIsXG4gICAgICBcImlkXCI6MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6XCJBdXN0cmlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQXVzdHJpYVwiLFxuICAgICAgXCJncm91cFwiOlwiZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJFIEdlcm1hbnksSHVuZ2FyeSxJdGFseSxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjoyXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQmVuZWx1eFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJlbmVsdXhcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlcgR2VybWFueSxVS1wiLFxuICAgICAgXCJpZFwiOjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCdWxnYXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJ1bGdhcmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUdXJrZXksR3JlZWNlXCIsXG4gICAgICBcImlkXCI6NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkNhbmFkYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNhbmFkYVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjIsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVUtcIixcbiAgICAgIFwiaWRcIjo1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDemVjaFwiLFxuICAgICAgXCJncm91cFwiOlwiZWV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUG9sYW5kLEUgR2VybWFueSxIdW5nYXJ5XCIsXG4gICAgICBcImlkXCI6NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkRlbm1hcmtcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJEZW5tYXJrXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXIEdlcm1hbnksU3dlZGVuXCIsXG4gICAgICBcImlkXCI6N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkUgR2VybWFueVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkUuR2VybVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiZWdcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MyxcbiAgICAgIFwibGlua3NcIjpcIlBvbGFuZCxXIEdlcm1hbnlcIixcbiAgICAgIFwiaWRcIjo4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiRmlubGFuZFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZpbmxhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImV1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjoxLFxuICAgICAgXCJsaW5rc1wiOlwiU3dlZGVuXCIsXG4gICAgICBcImlkXCI6OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkZyYW5jZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQWxnZXJpYSxVSyxXIEdlcm1hbnksSXRhbHksU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxMFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkdyZWVjZVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXRhbHksWXVnb3NsYXZpYSxUdXJrZXlcIixcbiAgICAgIFwiaWRcIjoxMVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkh1bmdhcnlcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIdW5nYXJ5XCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJSb21hbmlhLFl1Z29zbGF2aWFcIixcbiAgICAgIFwiaWRcIjoxMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkl0YWx5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXRhbHlcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIll1Z29zbGF2aWEsU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgIFwiaWRcIjoxM1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5vcndheVwiLFxuICAgICAgXCJncm91cFwiOlwid2V1XCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiZXVcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVUssU3dlZGVuXCIsXG4gICAgICBcImlkXCI6MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQb2xhbmRcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUm9tYW5pYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlJvbWFuaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImVldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlR1cmtleSxZdWdvc2xhdmlhXCIsXG4gICAgICBcImlkXCI6MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTcGFpbi9Qb3J0dWdhbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNwYWluL1BvXCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcImlkXCI6MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTd2VkZW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVHVya2V5XCIsXG4gICAgICBcImdyb3VwXCI6XCJ3ZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoxOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlVLXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVUtcIixcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo1LFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjo1LFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVyBHZXJtYW55XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVy5HZXJtXCIsXG4gICAgICBcInNob3J0Y3V0XCI6J3dnJyxcbiAgICAgIFwiZ3JvdXBcIjpcIndldVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImV1XCIsXG4gICAgICBcInN0YWJcIjo0LFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiWXVnb3NsYXZpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIll1Z29zbGF2XCIsXG4gICAgICBcImdyb3VwXCI6XCJlZXVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJldVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjoyMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVneXB0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWd5cHRcIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXNyYWVsLExpYnlhLFN1ZGFuXCIsXG4gICAgICBcImlkXCI6MjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJHdWxmIFN0YXRlc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkd1bGYgU3RzXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIklyYXEsU2F1ZGkgQXJhYmlhXCIsXG4gICAgICBcImlkXCI6MjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJcmFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXJhblwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwiaW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcIm1lXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwibWVcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSXJhcSxBZmdoYW5pc3RhbixQYWtpc3RhblwiLFxuICAgICAgXCJpZFwiOjI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSXJhcVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklyYXFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlxXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MSxcbiAgICAgIFwibGlua3NcIjpcIlNhdWRpIEFyYWJpYSxKb3JkYW5cIixcbiAgICAgIFwiaWRcIjoyNlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIklzcmFlbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIklzcmFlbFwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6NCxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJKb3JkYW4sTGViYW5vbixTeXJpYVwiLFxuICAgICAgXCJpZFwiOjI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSm9yZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSm9yZGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNhdWRpIEFyYWJpYSxMZWJhbm9uXCIsXG4gICAgICBcImlkXCI6MjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMZWJhbm9uXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGViYW5vblwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJTeXJpYVwiLFxuICAgICAgXCJpZFwiOjI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTGlieWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJMaWJ5YVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcImlkXCI6MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTYXVkaSBBcmFiaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTYXVkaSBBXCIsXG4gICAgICBcImdyb3VwXCI6XCJtZVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcIm1lXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU3lyaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTeXJpYVwiLFxuICAgICAgXCJncm91cFwiOlwibWVcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJtZVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjEsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjozMlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkFmZ2hhbmlzdGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQWZnaGFuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6MzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBdXN0cmFsaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBdXN0cmFsaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjQsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwiaWRcIjozNFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJ1cm1hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQnVybWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkluZGlhLExhb3MvQ2FtYm9kaWFcIixcbiAgICAgIFwiaWRcIjozNVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkluZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSW5kaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlkXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBha2lzdGFuXCIsXG4gICAgICBcImlkXCI6MzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJJbmRvbmVzaWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcImlzXCIsXG4gICAgICBcImdyb3VwXCI6XCJzZWFcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJNYWxheXNpYSxQaGlsbGlwcGluZXNcIixcbiAgICAgIFwiaWRcIjozN1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkphcGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSmFwYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjQsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjEsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiUGhpbGxpcHBpbmVzLFMgS29yZWEsVGFpd2FuXCIsXG4gICAgICBcImlkXCI6MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJMYW9zL0NhbWJvZGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTGFvcy9DYW1cIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kLFZpZXRuYW1cIixcbiAgICAgIFwiaWRcIjozOVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1hbGF5c2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTWFsYXlzaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRoYWlsYW5kXCIsXG4gICAgICBcImlkXCI6NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJOIEtvcmVhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTi5Lb3JlYVwiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwibmtcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFzXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjMsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjozLFxuICAgICAgXCJsaW5rc1wiOlwiUyBLb3JlYVwiLFxuICAgICAgXCJpZFwiOjQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUGFraXN0YW5cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQYWtpc3RhblwiLFxuICAgICAgXCJncm91cFwiOlwiYXNcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhc1wiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo0MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBoaWxsaXBwaW5lc1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBoaWxsaXBcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiUyBLb3JlYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlMuS29yZWFcIixcbiAgICAgIFwic2hvcnRjdXRcIjpcInNrXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjoxLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlRhaXdhblwiLFxuICAgICAgXCJpZFwiOjQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVGFpd2FuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVGFpd2FuXCIsXG4gICAgICBcImdyb3VwXCI6XCJhc1wiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjozLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVGhhaWxhbmRcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJUaGFpbGFuZFwiLFxuICAgICAgXCJncm91cFwiOlwic2VhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYXNcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiVmlldG5hbVwiLFxuICAgICAgXCJpZFwiOjQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVmlldG5hbVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlZpZXRuYW1cIixcbiAgICAgIFwiZ3JvdXBcIjpcInNlYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFzXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQWxnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkFsZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiTW9yb2NjbyxUdW5pc2lhLFNhaGFyYW4gU3RhdGVzXCIsXG4gICAgICBcImlkXCI6NDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJBbmdvbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJBbmdvbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiQm90c3dhbmEsU291dGggQWZyaWNhLFphaXJlXCIsXG4gICAgICBcImlkXCI6NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJCb3Rzd2FuYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJvdHN3YW5hXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNvdXRoIEFmcmljYSxaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ2FtZXJvb25cIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDYW1lcm9vblwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJOaWdlcmlhLFphaXJlXCIsXG4gICAgICBcImlkXCI6NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFdGhpb3BpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkV0aGlvcGlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlN1ZGFuLFNvbWFsaWFcIixcbiAgICAgIFwiaWRcIjo1MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkl2b3J5IENvYXN0XCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiSXZvcnkgQ1wiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXZXN0IEFmcmljYSxOaWdlcmlhXCIsXG4gICAgICBcImlkXCI6NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJLZW55YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIktlbnlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJhZlwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImFmXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlNvbWFsaWEsU0UgQWZyaWNhXCIsXG4gICAgICBcImlkXCI6NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJNb3JvY2NvXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiTW9yb2Njb1wiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJXZXN0IEFmcmljYVwiLFxuICAgICAgXCJpZFwiOjU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiTmlnZXJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5pZ2VyaWFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwiaWRcIjo1NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNFIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNFIEFmcmljYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJaaW1iYWJ3ZVwiLFxuICAgICAgXCJpZFwiOjU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiU2FoYXJhbiBTdGF0ZXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJTYWhhcmEgU1wiLFxuICAgICAgXCJzaG9ydGN1dFwiOlwic3NcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJTb21hbGlhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU29tYWxpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo1OVxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlNvdXRoIEFmXCIsXG4gICAgICBcInNob3J0Y3V0XCI6XCJzYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlN1ZGFuXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiU3VkYW5cIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJUdW5pc2lhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiVHVuaXNpYVwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIldlc3QgQWZyaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiV2VzdCBBZlwiLFxuICAgICAgXCJncm91cFwiOlwiYWZcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJhZlwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo2M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlphaXJlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiWmFpcmVcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiWmltYmFid2VcIixcbiAgICAgIFwiaWRcIjo2NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlppbWJhYndlXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiWmltYmFid2VcIixcbiAgICAgIFwiZ3JvdXBcIjpcImFmXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiYWZcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6NjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDb3N0YSBSaWNhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ29zdGEgUlwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIb25kdXJhcyxOaWNhcmFndWEsUGFuYW1hXCIsXG4gICAgICBcImlkXCI6NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDdWJhXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQ3ViYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJIYWl0aSxOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjo2N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJEb21pbmljIFJcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSGFpdGlcIixcbiAgICAgIFwiaWRcIjo2OFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkVsIFNhbHZhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWwgU2FsdmFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSG9uZHVyYXMsR3VhdGVtYWxhXCIsXG4gICAgICBcImlkXCI6NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJHdWF0ZW1hbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJHdWF0ZW1hbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcImNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwiY2FcIixcbiAgICAgIFwic3RhYlwiOjEsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOlwiSG9uZHVyYXMsTWV4aWNvXCIsXG4gICAgICBcImlkXCI6NzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJIYWl0aVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkhhaXRpXCIsXG4gICAgICBcImdyb3VwXCI6XCJjYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcImNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiSG9uZHVyYXNcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJIb25kdXJhc1wiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJOaWNhcmFndWFcIixcbiAgICAgIFwiaWRcIjo3MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk1leGljb1wiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk1leGljb1wiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo3M1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIk5pY2FyYWd1YVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MSxcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6MCxcbiAgICAgIFwiaWRcIjo3NFxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBhbmFtYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBhbmFtYVwiLFxuICAgICAgXCJncm91cFwiOlwiY2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJjYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MSxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJDb2x1bWJpYVwiLFxuICAgICAgXCJpZFwiOjc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQXJnZW50aW5hXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiQXJnZW50aW5hXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjoxLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkNoaWxlLFBhcmFndWF5LFVydWd1YXlcIixcbiAgICAgIFwiaWRcIjo3NlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJvbGl2aWFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJCb2xpdmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlBhcmFndWF5LFBlcnVcIixcbiAgICAgIFwiaWRcIjo3N1xuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIkJyYXppbFwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkJyYXppbFwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJVcnVndWF5LFZlbmV6dWVsYVwiLFxuICAgICAgXCJpZFwiOjc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiQ2hpbGVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJDaGlsZVwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MyxcbiAgICAgIFwiYnRsXCI6MSxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQZXJ1XCIsXG4gICAgICBcImlkXCI6NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJDb2x1bWJpYVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIkNvbHVtYmlhXCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoxLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIkVjdWFkb3IsVmVuZXp1ZWxhXCIsXG4gICAgICBcImlkXCI6ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJFY3VhZG9yXCIsXG4gICAgICBcInNob3J0bmFtZVwiOlwiRWN1YWRvclwiLFxuICAgICAgXCJncm91cFwiOlwic2FcIixcbiAgICAgIFwiY29udGluZW50XCI6XCJzYVwiLFxuICAgICAgXCJzdGFiXCI6MixcbiAgICAgIFwiYnRsXCI6MCxcbiAgICAgIFwidXNhXCI6MCxcbiAgICAgIFwidXNzclwiOjAsXG4gICAgICBcImxpbmtzXCI6XCJQZXJ1XCIsXG4gICAgICBcImlkXCI6ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJQYXJhZ3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlBhcmFndWF5XCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjpcIlVydWd1YXlcIixcbiAgICAgIFwiaWRcIjo4MlxuICAgIH0sXG4gICAge1xuICAgICAgXG4gICAgICBcIm5hbWVcIjpcIlBlcnVcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJQZXJ1XCIsXG4gICAgICBcImdyb3VwXCI6XCJzYVwiLFxuICAgICAgXCJjb250aW5lbnRcIjpcInNhXCIsXG4gICAgICBcInN0YWJcIjoyLFxuICAgICAgXCJidGxcIjowLFxuICAgICAgXCJ1c2FcIjowLFxuICAgICAgXCJ1c3NyXCI6MCxcbiAgICAgIFwibGlua3NcIjowLFxuICAgICAgXCJpZFwiOjgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcbiAgICAgIFwibmFtZVwiOlwiVXJ1Z3VheVwiLFxuICAgICAgXCJzaG9ydG5hbWVcIjpcIlVydWd1YXlcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjAsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgICAgXCJuYW1lXCI6XCJWZW5lenVlbGFcIixcbiAgICAgIFwic2hvcnRuYW1lXCI6XCJWZW5lenVlbGFcIixcbiAgICAgIFwiZ3JvdXBcIjpcInNhXCIsXG4gICAgICBcImNvbnRpbmVudFwiOlwic2FcIixcbiAgICAgIFwic3RhYlwiOjIsXG4gICAgICBcImJ0bFwiOjEsXG4gICAgICBcInVzYVwiOjAsXG4gICAgICBcInVzc3JcIjowLFxuICAgICAgXCJsaW5rc1wiOjAsXG4gICAgICBcImlkXCI6ODVcbiAgICB9XG4gIF0sXG5cbiAgXCJsaW5rc1wiOiBbXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjo1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDYW5hZGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjAsXG4gICAgICBcInRhcmdldFwiOjY3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU0FcIixcbiAgICAgICAgXCJDdWJhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjo3MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiTWV4aWNvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjowLFxuICAgICAgXCJ0YXJnZXRcIjozOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNBXCIsXG4gICAgICAgIFwiSmFwYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjMzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlVTU1JcIixcbiAgICAgICAgXCJGaW5sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjo0MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIk4gS29yZWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEsXG4gICAgICBcInRhcmdldFwiOjE1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJVU1NSXCIsXG4gICAgICAgIFwiUG9sYW5kXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxLFxuICAgICAgXCJ0YXJnZXRcIjoxNixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiVVNTUlwiLFxuICAgICAgICBcIlJvbWFuaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjIsXG4gICAgICBcInRhcmdldFwiOjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJFIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoxMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyLFxuICAgICAgXCJ0YXJnZXRcIjoxMyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJpYVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MixcbiAgICAgIFwidGFyZ2V0XCI6MjEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkF1c3RyaWFcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQmVuZWx1eFwiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJCZW5lbHV4XCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0LFxuICAgICAgXCJ0YXJnZXRcIjoxOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0LFxuICAgICAgXCJ0YXJnZXRcIjoxMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgXCJHcmVlY2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1LFxuICAgICAgXCJ0YXJnZXRcIjoyMCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FuYWRhXCIsXG4gICAgICAgIFwiVUtcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2LFxuICAgICAgXCJ0YXJnZXRcIjoxNSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ3plY2hvc2xvdmFraWFcIixcbiAgICAgICAgXCJQb2xhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2LFxuICAgICAgXCJ0YXJnZXRcIjo4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkUgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjYsXG4gICAgICBcInRhcmdldFwiOjEyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDemVjaG9zbG92YWtpYVwiLFxuICAgICAgICBcIkh1bmdhcnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3LFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRGVubWFya1wiLFxuICAgICAgICBcIlcgR2VybWFueVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjcsXG4gICAgICBcInRhcmdldFwiOjE4LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJEZW5tYXJrXCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6OCxcbiAgICAgIFwidGFyZ2V0XCI6MTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkUgR2VybWFueVwiLFxuICAgICAgICBcIlBvbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgsXG4gICAgICBcInRhcmdldFwiOjIxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFIEdlcm1hbnlcIixcbiAgICAgICAgXCJXIEdlcm1hbnlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo5LFxuICAgICAgXCJ0YXJnZXRcIjoxOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRmlubGFuZFwiLFxuICAgICAgICBcIlN3ZWRlblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjo0OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiQWxnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoyMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiVyBHZXJtYW55XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTAsXG4gICAgICBcInRhcmdldFwiOjEzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJGcmFuY2VcIixcbiAgICAgICAgXCJJdGFseVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEwLFxuICAgICAgXCJ0YXJnZXRcIjoxNyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRnJhbmNlXCIsXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMSxcbiAgICAgIFwidGFyZ2V0XCI6MTMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkdyZWVjZVwiLFxuICAgICAgICBcIkl0YWx5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTEsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTEsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHcmVlY2VcIixcbiAgICAgICAgXCJUdXJrZXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxMixcbiAgICAgIFwidGFyZ2V0XCI6MTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkh1bmdhcnlcIixcbiAgICAgICAgXCJSb21hbmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTIsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjEzLFxuICAgICAgXCJ0YXJnZXRcIjoyMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgXCJZdWdvc2xhdmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTMsXG4gICAgICBcInRhcmdldFwiOjE3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdGFseVwiLFxuICAgICAgICBcIlNwYWluL1BvcnR1Z2FsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTQsXG4gICAgICBcInRhcmdldFwiOjIwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJOb3J3YXlcIixcbiAgICAgICAgXCJVS1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE0LFxuICAgICAgXCJ0YXJnZXRcIjoxOCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTm9yd2F5XCIsXG4gICAgICAgIFwiU3dlZGVuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTYsXG4gICAgICBcInRhcmdldFwiOjE5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiVHVya2V5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MTYsXG4gICAgICBcInRhcmdldFwiOjIyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJSb21hbmlhXCIsXG4gICAgICAgIFwiWXVnb3NsYXZpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjE3LFxuICAgICAgXCJ0YXJnZXRcIjo1NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiU3BhaW4vUG9ydHVnYWxcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoxOSxcbiAgICAgIFwidGFyZ2V0XCI6MzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIlR1cmtleVwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyMyxcbiAgICAgIFwidGFyZ2V0XCI6MjcsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkVneXB0XCIsXG4gICAgICAgIFwiSXNyYWVsXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjMsXG4gICAgICBcInRhcmdldFwiOjMwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIkxpYnlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjMsXG4gICAgICBcInRhcmdldFwiOjYxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFZ3lwdFwiLFxuICAgICAgICBcIlN1ZGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNCxcbiAgICAgIFwidGFyZ2V0XCI6MjYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1bGYgU3RhdGVzXCIsXG4gICAgICAgIFwiSXJhcVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI0LFxuICAgICAgXCJ0YXJnZXRcIjozMSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiR3VsZiBTdGF0ZXNcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNSxcbiAgICAgIFwidGFyZ2V0XCI6MjYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYW5cIixcbiAgICAgICAgXCJJcmFxXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MjUsXG4gICAgICBcInRhcmdldFwiOjMzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJcmFuXCIsXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI1LFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXJhblwiLFxuICAgICAgICBcIlBha2lzdGFuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6dHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNixcbiAgICAgIFwidGFyZ2V0XCI6MzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJTYXVkaSBBcmFiaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNixcbiAgICAgIFwidGFyZ2V0XCI6MjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklyYXFcIixcbiAgICAgICAgXCJKb3JkYW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyNyxcbiAgICAgIFwidGFyZ2V0XCI6MjgsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIklzcmFlbFwiLFxuICAgICAgICBcIkpvcmRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjoyOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI3LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSXNyYWVsXCIsXG4gICAgICAgIFwiU3lyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjoyOCxcbiAgICAgIFwidGFyZ2V0XCI6MzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkpvcmRhblwiLFxuICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI4LFxuICAgICAgXCJ0YXJnZXRcIjoyOSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSm9yZGFuXCIsXG4gICAgICAgIFwiTGViYW5vblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjI5LFxuICAgICAgXCJ0YXJnZXRcIjozMixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGViYW5vblwiLFxuICAgICAgICBcIlN5cmlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6MzAsXG4gICAgICBcInRhcmdldFwiOjYyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJMaWJ5YVwiLFxuICAgICAgICBcIlR1bmlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjp0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjMzLFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWZnaGFuaXN0YW5cIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM0LFxuICAgICAgXCJ0YXJnZXRcIjo0MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXVzdHJhbGlhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNSxcbiAgICAgIFwidGFyZ2V0XCI6MzYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiSW5kaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNSxcbiAgICAgIFwidGFyZ2V0XCI6MzksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJ1cm1hXCIsXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM2LFxuICAgICAgXCJ0YXJnZXRcIjo0MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kaWFcIixcbiAgICAgICAgXCJQYWtpc3RhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM3LFxuICAgICAgXCJ0YXJnZXRcIjo0MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSW5kb25lc2lhXCIsXG4gICAgICAgIFwiTWFsYXlzaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozNyxcbiAgICAgIFwidGFyZ2V0XCI6NDMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkluZG9uZXNpYVwiLFxuICAgICAgICBcIlBoaWxsaXBwaW5lc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJQaGlsbGlwcGluZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOCxcbiAgICAgIFwidGFyZ2V0XCI6NDQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkphcGFuXCIsXG4gICAgICAgIFwiUyBLb3JlYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM4LFxuICAgICAgXCJ0YXJnZXRcIjo0NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiSmFwYW5cIixcbiAgICAgICAgXCJUYWl3YW5cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjozOSxcbiAgICAgIFwidGFyZ2V0XCI6NDYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkxhb3MvQ2FtYm9kaWFcIixcbiAgICAgICAgXCJUaGFpbGFuZFwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjM5LFxuICAgICAgXCJ0YXJnZXRcIjo0NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTGFvcy9DYW1ib2RpYVwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0MCxcbiAgICAgIFwidGFyZ2V0XCI6NDYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk1hbGF5c2lhXCIsXG4gICAgICAgIFwiVGhhaWxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0MSxcbiAgICAgIFwidGFyZ2V0XCI6NDQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk4gS29yZWFcIixcbiAgICAgICAgXCJTIEtvcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDQsXG4gICAgICBcInRhcmdldFwiOjQ1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTIEtvcmVhXCIsXG4gICAgICAgIFwiVGFpd2FuXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDYsXG4gICAgICBcInRhcmdldFwiOjQ3LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJUaGFpbGFuZFwiLFxuICAgICAgICBcIlZpZXRuYW1cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo0OCxcbiAgICAgIFwidGFyZ2V0XCI6NTUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFsZ2VyaWFcIixcbiAgICAgICAgXCJNb3JvY2NvXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDgsXG4gICAgICBcInRhcmdldFwiOjYyLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbGdlcmlhXCIsXG4gICAgICAgIFwiVHVuaXNpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ4LFxuICAgICAgXCJ0YXJnZXRcIjo1OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQWxnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjUwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJCb3Rzd2FuYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjQ5LFxuICAgICAgXCJ0YXJnZXRcIjo2MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQW5nb2xhXCIsXG4gICAgICAgIFwiU291dGggQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NDksXG4gICAgICBcInRhcmdldFwiOjY0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBbmdvbGFcIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUwLFxuICAgICAgXCJ0YXJnZXRcIjo2MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm90c3dhbmFcIixcbiAgICAgICAgXCJTb3V0aCBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MCxcbiAgICAgIFwidGFyZ2V0XCI6NjUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvdHN3YW5hXCIsXG4gICAgICAgIFwiWmltYmFid2VcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1MSxcbiAgICAgIFwidGFyZ2V0XCI6NTYsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNhbWVyb29uXCIsXG4gICAgICAgIFwiTmlnZXJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUxLFxuICAgICAgXCJ0YXJnZXRcIjo2NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2FtZXJvb25cIixcbiAgICAgICAgXCJaYWlyZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUyLFxuICAgICAgXCJ0YXJnZXRcIjo2MSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTdWRhblwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjUyLFxuICAgICAgXCJ0YXJnZXRcIjo1OSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRXRoaW9waWFcIixcbiAgICAgICAgXCJTb21hbGlhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTMsXG4gICAgICBcInRhcmdldFwiOjYzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIldlc3QgQWZyaWNhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTMsXG4gICAgICBcInRhcmdldFwiOjU2LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgICAgICBcIk5pZ2VyaWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NCxcbiAgICAgIFwidGFyZ2V0XCI6NTksXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIktlbnlhXCIsXG4gICAgICAgIFwiU29tYWxpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU0LFxuICAgICAgXCJ0YXJnZXRcIjo1NyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiS2VueWFcIixcbiAgICAgICAgXCJTRSBBZnJpY2FcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo1NSxcbiAgICAgIFwidGFyZ2V0XCI6NjMsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIk1vcm9jY29cIixcbiAgICAgICAgXCJXZXN0IEFmcmljYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjU2LFxuICAgICAgXCJ0YXJnZXRcIjo1OCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiTmlnZXJpYVwiLFxuICAgICAgICBcIlNhaGFyYW4gU3RhdGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NTcsXG4gICAgICBcInRhcmdldFwiOjY1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJTRSBBZnJpY2FcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY0LFxuICAgICAgXCJ0YXJnZXRcIjo2NSxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiWmFpcmVcIixcbiAgICAgICAgXCJaaW1iYWJ3ZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY2LFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ29zdGEgUmljYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjc0LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjYsXG4gICAgICBcInRhcmdldFwiOjc1LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgIFwiUGFuYW1hXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NjcsXG4gICAgICBcInRhcmdldFwiOjcxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDdWJhXCIsXG4gICAgICAgIFwiSGFpdGlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2NyxcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkN1YmFcIixcbiAgICAgICAgXCJOaWNhcmFndWFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo2OCxcbiAgICAgIFwidGFyZ2V0XCI6NzEsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkRvbWluaWNhbiBSZXBcIixcbiAgICAgICAgXCJIYWl0aVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY5LFxuICAgICAgXCJ0YXJnZXRcIjo3MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJIb25kdXJhc1wiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjY5LFxuICAgICAgXCJ0YXJnZXRcIjo3MCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiRWwgU2FsdmFkb3JcIixcbiAgICAgICAgXCJHdWF0ZW1hbGFcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MCxcbiAgICAgIFwidGFyZ2V0XCI6NzIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkd1YXRlbWFsYVwiLFxuICAgICAgICBcIkhvbmR1cmFzXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzAsXG4gICAgICBcInRhcmdldFwiOjczLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJHdWF0ZW1hbGFcIixcbiAgICAgICAgXCJNZXhpY29cIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3MixcbiAgICAgIFwidGFyZ2V0XCI6NzQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkhvbmR1cmFzXCIsXG4gICAgICAgIFwiTmljYXJhZ3VhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzUsXG4gICAgICBcInRhcmdldFwiOjgwLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJQYW5hbWFcIixcbiAgICAgICAgXCJDb2x1bWJpYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOnRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6NzYsXG4gICAgICBcInRhcmdldFwiOjc5LFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJBcmdlbnRpbmFcIixcbiAgICAgICAgXCJDaGlsZVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc2LFxuICAgICAgXCJ0YXJnZXRcIjo4MixcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQXJnZW50aW5hXCIsXG4gICAgICAgIFwiUGFyYWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NixcbiAgICAgIFwidGFyZ2V0XCI6ODQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkFyZ2VudGluYVwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3NyxcbiAgICAgIFwidGFyZ2V0XCI6ODIsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJvbGl2aWFcIixcbiAgICAgICAgXCJQYXJhZ3VheVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc3LFxuICAgICAgXCJ0YXJnZXRcIjo4MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQm9saXZpYVwiLFxuICAgICAgICBcIlBlcnVcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3OCxcbiAgICAgIFwidGFyZ2V0XCI6ODQsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlVydWd1YXlcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo3OCxcbiAgICAgIFwidGFyZ2V0XCI6ODUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkJyYXppbFwiLFxuICAgICAgICBcIlZlbmV6dWVsYVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjc5LFxuICAgICAgXCJ0YXJnZXRcIjo4MyxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiQ2hpbGVcIixcbiAgICAgICAgXCJQZXJ1XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODAsXG4gICAgICBcInRhcmdldFwiOjgxLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJDb2x1bWJpYVwiLFxuICAgICAgICBcIkVjdWFkb3JcIlxuICAgICAgXSxcbiAgICAgIFwiY3Jvc3NDb250aW5lbnRcIjpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJzb3VyY2VcIjo4MCxcbiAgICAgIFwidGFyZ2V0XCI6ODUsXG4gICAgICBcIm5vZGVzXCI6W1xuICAgICAgICBcIkNvbHVtYmlhXCIsXG4gICAgICAgIFwiVmVuZXp1ZWxhXCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic291cmNlXCI6ODEsXG4gICAgICBcInRhcmdldFwiOjgzLFxuICAgICAgXCJub2Rlc1wiOltcbiAgICAgICAgXCJFY3VhZG9yXCIsXG4gICAgICAgIFwiUGVydVwiXG4gICAgICBdLFxuICAgICAgXCJjcm9zc0NvbnRpbmVudFwiOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNvdXJjZVwiOjgyLFxuICAgICAgXCJ0YXJnZXRcIjo4NCxcbiAgICAgIFwibm9kZXNcIjpbXG4gICAgICAgIFwiUGFyYWd1YXlcIixcbiAgICAgICAgXCJVcnVndWF5XCJcbiAgICAgIF0sXG4gICAgICBcImNyb3NzQ29udGluZW50XCI6ZmFsc2VcbiAgICB9XG4gIF1cbn1cbiIsIlIgPSBSZWFjdC5ET01cblJDVEcgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwXG51cGRhdGUgPSBSZWFjdC5hZGRvbnMudXBkYXRlXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuJCA9IFplcHRvXG5cbmNhcmRzRGF0YSA9IHJlcXVpcmUoJy4uL2FwcC9kYXRhL2NhcmRzLmpzb24nKVxuXG5cbiMgQWRkIGZ1bmN0aW9uIHRvIFplcHRvXG4kLmdldFNjcmlwdCA9IChzcmMsIGZ1bmMpIC0+XG4gIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdC5hc3luYyA9IFwiYXN5bmNcIlxuICBzY3JpcHQuc3JjID0gc3JjXG4gIGlmIGZ1bmNcbiAgICBzY3JpcHQub25sb2FkID0gZnVuY1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZCBzY3JpcHRcblxuXG5saWJzID0gcmVxdWlyZSAnLi9saWJzJ1xucGFnZXMgPSByZXF1aXJlICcuL3BhZ2VzJ1xudmlld3MgPSByZXF1aXJlICcuL3ZpZXdzJ1xuXG5yb3V0ZXIgPSByZXF1aXJlICcuL3JvdXRlcidcblxuVHdpU3RydWcgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBtaXhpbnM6IFtyb3V0ZXJdXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIG1lbnVBY3RpdmU6bnVsbFxuICAgIHZpZXc6IHt9XG4gICAgc2xpZGVJbjogdHJ1ZVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogKCktPlxuICAgICQoJyNwbGFjZWhvbGRlcicpLmhpZGUoKVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IC0+XG4gICAgJHNsaWRlSW4gPSAkKEByZWZzLnNsaWRlSW4uZ2V0RE9NTm9kZSgpKVxuICAgICRzbGlkZUluLnJlbW92ZUNsYXNzICdzbGlkZUluLWluJ1xuICAgICMkbWFpblZpZXcgPSAkKEByZWZzLm1haW5WaWV3LmdldERPTU5vZGUoKSlcbiAgICAjJG1haW5WaWV3LnJlbW92ZUNsYXNzICdtYWluVmlldy1vdXQnXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiAtPiBAc2xpZGVJbigpXG5cbiAgc2xpZGVJbjogLT5cbiAgICBpZiBub3QgQHN0YXRlLnNsaWRlSW5cbiAgICAgIHJldHVyblxuICAgICRzbGlkZUluID0gJChAcmVmcy5zbGlkZUluLmdldERPTU5vZGUoKSlcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkc2xpZGVJbi5hZGRDbGFzcygnc2xpZGVJbi1pbicpXG4gICAgLCAxMFxuXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgSWYgdGhlIHJvdXRlciBoYXNuJ3Qga2lja2VkIGluLCBkbyBub3RoaW5nXG4gICAgaWYgbm90IEBzdGF0ZT8udmlld1xuICAgICAgbWFpblZpZXcgPSBSLnAgY2xhc3NOYW1lOiAnbGVhZCcsICdUd2lTdHJ1ZyBpcyBsb2FkaW5nLi4uJ1xuICAgIGVsc2VcbiAgICAgIG1haW5WaWV3ID0gc3dpdGNoIEBzdGF0ZS52aWV3Lm5hbWVcbiAgICAgICAgd2hlbiAnaG9tZScgdGhlbiBwYWdlcy5Ib21lXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NhcmQnIHRoZW4gcGFnZXMuQ2FyZCBAc3RhdGUudmlldy5kYXRhXG4gICAgICAgIHdoZW4gJ2NhcmRzJyB0aGVuIHBhZ2VzLkNhcmRzXG4gICAgICAgICAgY2FyZHM6IEBwcm9wcy5jYXJkc1xuICAgICAgICAgIHN0YXRlOiBAc3RhdGUudmlldy5kYXRhLnN0YXRlXG4gICAgICAgIHdoZW4gJ2NvdW50cmllcycgdGhlbiBwYWdlcy5Db3VudHJpZXMoKVxuICAgICAgICAjd2hlbiAnYm9hcmQnIHRoZW4gcmV0dXJuIEJvYXJkUGljVmlldygpXG4gICAgICAgIHdoZW4gJ2JvYXJkJyB0aGVuIHBhZ2VzLkJvYXJkIEBzdGF0ZS52aWV3LmRhdGFcbiAgICAgICAgd2hlbiAnYWJvdXQnIHRoZW4gcGFnZXMuQWJvdXQoKVxuICAgICAgICB3aGVuICd3aG9vcHMnIHRoZW4gcGFnZXMuV2hvb3BzKClcblxuICAgIG1haW5WaWV3Q2xhc3MgPSBjeFxuICAgICAgJ2NvbnRhaW5lcic6IEBzdGF0ZS52aWV3Lm5hbWUgIT0gJ2JvYXJkJyAjIEJvYXJkIG5lZWRzIHRvIGhhdmUgaXRzIG93biBjb250YWluZXJcbiAgICAgICdzbGlkZUluJzogQHN0YXRlLnNsaWRlSW5cblxuICAgIFIuZGl2IHt9LCBbXG4gICAgICB2aWV3cy5OYXYga2V5OiduYXYnLCBhY3RpdmU6IEBzdGF0ZS5tZW51QWN0aXZlXG4gICAgICBSLmRpdiBrZXk6J21haW52aWV3JywgcmVmOiAnc2xpZGVJbicsIGNsYXNzTmFtZTogbWFpblZpZXdDbGFzcywgbWFpblZpZXdcbiAgICAgIHZpZXdzLkZvb3RlciBrZXk6J2Zvb3RlcidcbiAgICBdXG4gICAgXG5cbiMgQWRkIGtleXMgdG8gY2FyZHNcbmFkZFJlYWN0S2V5ID0gKGVsKS0+XG4gIGVsLmtleSA9IFwicmstI3tlbC5pZH1cIlxuICBlbFxuXG5SZWFjdC5yZW5kZXJDb21wb25lbnQgVHdpU3RydWcoe2NhcmRzOiBjYXJkc0RhdGEubWFwKGFkZFJlYWN0S2V5KX0pLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAnYXBwJ1xuIiwiU3RhdGVIaXN0b3J5ID0gcmVxdWlyZSAnLi9TdGF0ZUhpc3RvcnknXG5zdXBlcnBvd2VyVG9JbmRleCA9IHJlcXVpcmUgJy4vc3VwZXJwb3dlclRvSW5kZXgnXG5zdGF0ZUVuY29kZXIgPSByZXF1aXJlICcuL3N0YXRlRW5jb2RlcidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCb2FyZFN0YXRlSGlzdG9yeSBleHRlbmRzIFN0YXRlSGlzdG9yeVxuICBlbmNvZGVTdGF0ZTogKHN0YXRlKS0+XG4gICAgZW5jb2RlZCA9IHN0YXRlRW5jb2Rlci5lbmNvZGUgc3RhdGVcbiAgICAjY29uc29sZS5sb2cgJ0JvYXJkU3RhdGVIaXN0b3J5IGVuY29kZVN0YXRlJywgc3RhdGUsIGVuY29kZWRcbiAgICBlbmNvZGVkXG5cbiAgZGVjb2RlU3RhdGU6IChzdGF0ZSktPlxuICAgIGRlY29kZWQgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlXG4gICAgI2NvbnNvbGUubG9nICdCb2FyZFN0YXRlSGlzdG9yeSBkZWNvZGVTdGF0ZScsIHN0YXRlLCBkZWNvZGVkXG4gICAgZGVjb2RlZFxuICBcbiAgYWRkOiAoc3RhdGUsIG1ldGEpLT5cbiAgICAjIElmIGl0J3MgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIHByZXZpb3VzIGVudHJ5LCBkb24ndCB1cGRhdGUgdGhlIGhpc3RvcnlcbiAgICAjIFRoaXMgaXMgc28gd2UgY2FuIGJhdGNoIHRoZSBjaGFuZ2VzIGZvciBkaXNwbGF5XG4gICAgY3VyID0gQGdldEN1cnJlbnQoKVxuICAgICNjb25zb2xlLmxvZyBjdXJcbiAgICBpZiBub3QgY3VyP1xuICAgICAgcmV0dXJuIHN1cGVyIHN0YXRlLCBtZXRhXG5cbiAgICBubSA9IF8uY2xvbmVEZWVwIG1ldGFcbiAgICBucyA9IF8uY2xvbmVEZWVwIHN0YXRlXG4gICAgY20gPSBjdXIubWV0YVxuICAgIGNzID0gY3VyLnN0YXRlXG4gICBcbiAgICAjIFNldCBpcCBkZWx0YSB0byBiZSBhbiBhcnJheVxuICAgIGlmIG1ldGEudHlwZSA9PSAnaXAnXG4gICAgICB1c2EgPSBpZiBubS5zaWRlID09ICd1c2EnIHRoZW4gbm0uZGVsdGEgZWxzZSAwXG4gICAgICB1c3NyID0gaWYgbm0uc2lkZSA9PSAndXNzcicgdGhlbiBubS5kZWx0YSBlbHNlIDBcbiAgICAgIG5tLmRlbHRhID0gW3VzYSwgdXNzcl1cblxuXG4gICAgaWYgbm0udHlwZSA9PSBjbS50eXBlIGFuZCBucy5nYW1lLnJvdW5kID09IGNzLmdhbWUucm91bmRcbiAgICAgIHNpZGVTYW1lID0gaWYgbm0uaWQgPT0gJ3Njb3JlJyB0aGVuIHRydWUgZWxzZSBubS5zaWRlID09IGNtLnNpZGVcbiAgICAgIGlkU2FtZSA9IG5tLmlkID09IGNtLmlkXG5cbiAgICAgIHR5cGVJcFNhbWUgPSBubS50eXBlID09ICdpcCcgYW5kIG5tLmNvdW50cnkuaWQgPT0gY20uY291bnRyeS5pZFxuICAgICAgdHlwZVZhbFNhbWUgPSBubS50eXBlID09ICd2YWwnIGFuZCBubS5pZCAhPSAndHVybicgYW5kXG4gICAgICBubS5pZCAhPSAncm91bmQnIGFuZCBzaWRlU2FtZSBhbmQgaWRTYW1lXG5cbiAgICAgIGlmIHR5cGVJcFNhbWUgb3IgdHlwZVZhbFNhbWVcbiAgICAgICAgcmV0dXJuIEBtZXJnZVdpdGhDdXJyZW50IG5zLCBubVxuXG4gICAgc3VwZXIgbnMsIG5tXG5cblxuICBtZXJnZVdpdGhDdXJyZW50OiAoc3RhdGUsbWV0YSktPlxuICAgIGMgPSBfLmNsb25lRGVlcCBAZ2V0Q3VycmVudCgpXG4gICAgbm0gPSBfLmNsb25lRGVlcCBtZXRhXG4gICAgY20gPSBjLm1ldGFcbiAgICBzd2l0Y2ggY20udHlwZVxuICAgICAgd2hlbiAnaXAnXG4gICAgICAgIG5tLmRlbHRhWzBdICs9IGNtLmRlbHRhWzBdXG4gICAgICAgIG5tLmRlbHRhWzFdICs9IGNtLmRlbHRhWzFdXG4gICAgICAgIG5tLnNpZGUgPSAnYm90aCdcbiAgICAgICAgaWYgbm0uZGVsdGFbMF0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNzcidcbiAgICAgICAgaWYgbm0uZGVsdGFbMV0gPT0gMFxuICAgICAgICAgIG5tLnNpZGUgPSAndXNhJ1xuICAgICAgICBpZiBubS5kZWx0YVswXSA9PSBubS5kZWx0YVsxXSA9PSAwXG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgICB3aGVuICd2YWwnXG4gICAgICAgIG5tLm9sZCA9IGNtLm9sZFxuICAgICAgICBpZiBubS5vbGQgPT0gbm0ubmV3XG4gICAgICAgICAgcG9wID0gdHJ1ZVxuXG4gICAgaWYgQGxhdGVzdCAhPSBAY3VycmVudFxuICAgICAgQHN0YXRlcyA9IEBzdGF0ZXMuc2xpY2UoMCxAY3VycmVudCsxKVxuICAgICAgQGxhdGVzdCA9IEBjdXJyZW50XG5cbiAgICBpZiBwb3AgPT0gdHJ1ZVxuICAgICAgQHN0YXRlcy5wb3AoKVxuICAgICAgQGN1cnJlbnQtLVxuICAgICAgaWYoQGxhdGVzdCA+IEBjdXJyZW50KVxuICAgICAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIGVsc2VcbiAgICAgIEBzdGF0ZXNbQGN1cnJlbnRdID1cbiAgICAgICAgbWV0YTogbm1cbiAgICAgICAgc3RhdGU6IEBlbmNvZGVTdGF0ZSBzdGF0ZVxuXG4gICAgQHNhdmUoKVxuICAgIEBlbWl0ICdtZXJnZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAndXBkYXRlJywgQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICdjaGFuZ2UnXG5cblxuICAjIFR1cm4gc3RhdGUgaW50byBhIG1pbmltYWwgcmVwcmVzZW50YXRpb25cbiAgZW5jb2RlQ3VycmVudDogKCktPlxuICAgIGN1ciA9IEBnZXRDdXJyZW50KClcbiAgICByZXR1cm4gaWYgbm90IGN1cj9cbiAgICBzdGF0ZUVuY29kZXIuZW5jb2RlIEBnZXRDdXJyZW50KCk/LnN0YXRlXG5cblxuICB0b2dnbGVWaXNpYmxlOiAoZm9yY2UsIHNob3dUZW1wPWZhbHNlKS0+XG4gICAgY2xlYXJUaW1lb3V0IEBzaG93VGhlbkhpZGVUaW1lb3V0XG4gICAgQHNob3dUZW1wID0gc2hvd1RlbXBcbiAgICBAc2hvdyA9IGlmIGZvcmNlPyB0aGVuIGZvcmNlIGVsc2UgIUBzaG93XG4gICAgQGVtaXQgJ3RvZ2dsZVZpc2libGUnLCBAc2hvd1xuICAgIEBlbWl0ICd1cGRhdGUnXG5cbiAgc2hvd1RoZW5IaWRlOiAodGltZSA9IDEwMDApLT5cbiAgICBjbGVhclRpbWVvdXQgQHNob3dUaGVuSGlkZVRpbWVvdXRcbiAgICBpZiBub3QgQHNob3dcbiAgICAgIEB0b2dnbGVWaXNpYmxlIHRydWUsIHRydWVcbiAgICBpZiBAc2hvd1RlbXBcbiAgICAgIEBzaG93VGhlbkhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCBAdG9nZ2xlVmlzaWJsZS5iaW5kKHRoaXMsIGZhbHNlKSwgdGltZVxuXG4gIGhpZGU6IC0+XG4gICAgQHRvZ2dsZVZpc2libGUgZmFsc2VcblxuICBzaG93OiAtPlxuICAgIEB0b2dnbGVWaXNpYmxlIHRydWVcblxuICAjIGNiIGNhbiBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBzaG9ydGhhbmQgb2JqLCBvciBhIGtleSBuYW1lXG4gICMgaHR0cDovL2xvZGFzaC5jb20vZG9jcyNmaW5kSW5kZXhcbiAgZmluZFN0YXRlSW5kZXg6IChjYiktPlxuICAgIGluZGV4ID0gXy5maW5kSW5kZXggQHN0YXRlcywgY2JcbiAgICBpZiBpbmRleCAhPSAtMVxuICAgICAgcmV0dXJuIGluZGV4IFxuIiwiY2xhc3MgTWljcm9FdmVudENsYXNzXG4gIF9pbml0Oi0+IEBfbGlzdG4gb3IgQF9saXN0biA9IHt9XG4gIF9jcmVhdGU6KGUpLT4gQF9pbml0KClbZV0gb3IgIEBfaW5pdCgpW2VdID0gW11cbiAgb246KGUsIGYpLT4gKEBfY3JlYXRlIGUpLnB1c2ggZlxuICBvZmY6KGUsIGYpLT4gKHQuc3BsaWNlICh0LmluZGV4T2YgZiksIDEpIGlmICh0ID0gQF9pbml0KClbZV0pP1xuICBvbmNlOihlLCBmKS0+IEBvbiBlLCAodCA9ID0+IChAb2ZmIGUsIHQpICYmIGYuYXBwbHkgQCwgYXJndW1lbnRzKVxuICBlbWl0OihlLCByLi4uKS0+IGwuYXBwbHkgQCwgciBmb3IgbCBpbiB0IGlmICh0ID0gQF9pbml0KClbZV0pPzsgMFxuICBAbWl4aW49KHQpLT4gdDo6W3BdID0gQDo6W3BdIGZvciBwIG9mIEA6OjsgMFxuXG5cbm1vZHVsZS5leHBvcnRzID0gTWljcm9FdmVudENsYXNzXG4iLCJNaWNyb0V2ZW50Q2xhc3MgPSByZXF1aXJlICcuL01pY3JvRXZlbnRDbGFzcydcblxuY2xhc3MgU3RhdGVIaXN0b3J5IGV4dGVuZHMgTWljcm9FdmVudENsYXNzXG4gICMgQGlkIGlzIHVzZWQgZm9yIHBlcnNpc3RhbmNlXG4gIGNvbnN0cnVjdG9yOiAob3B0cyktPlxuICAgICNfLmFzc2lnbiB0aGlzLCBNaWNyb0V2ZW50XG4gICAgQHN0YXRlcyA9IFtdXG4gICAgQHN0YWdlZCA9IFtdXG4gICAgQGxhdGVzdCA9IG51bGxcbiAgICBAY3VycmVudCA9IG51bGxcbiAgICBAc2hvdyA9IGZhbHNlXG4gICAgQGlkID0gb3B0cy5pZFxuICAgIEBzdGF0ZXNUb1NhdmUgPSA1MFxuICBcbiAgIyBFeHRlbmQgdG8gYWRkIGN1c3RvbSBlbmNvZGluZy9kZWNvZGluZyBmdW5jdGlvbmFsaXR5XG4gIGVuY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBzdGF0ZVxuXG4gIGRlY29kZVN0YXRlOiAoc3RhdGUpLT5cbiAgICBzdGF0ZVxuICBcbiAgc2F2ZTogLT5cbiAgICBzdGF0ZXMgPSBAc3RhdGVzLnNsaWNlIDAsIEBzdGF0ZXNUb1NhdmVcbiAgICBcbiAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkgc3RhdGVzXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0gQGlkLCBqc29uXG5cbiAgbG9hZDogLT5cbiAgICBzdGF0ZXMgPSBKU09OLnBhcnNlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKEBpZClcbiAgICBpZiBzdGF0ZXMgYW5kIF8uaXNBcnJheSBzdGF0ZXNcbiAgICAgIEBzdGF0ZXMgPSBzdGF0ZXNcbiAgICAgIEBjdXJyZW50ID0gc3RhdGVzLmxlbmd0aCAtIDFcbiAgICAgIEBsYXRlc3QgPSBAY3VycmVudFxuXG4gICAgICBAZW1pdCAnbG9hZCdcbiAgICAgIEBlbWl0ICd1cGRhdGUnXG4gICAgICByZXR1cm4gc3RhdGVzXG5cbiAgYWRkOiAoc3RhdGUsIG1ldGE9e30pLT5cbiAgICBpZiBAbGF0ZXN0ICE9IEBjdXJyZW50XG4gICAgICBAc3RhdGVzID0gQHN0YXRlcy5zbGljZSgwLEBjdXJyZW50KzEpXG5cbiAgICBpZiBub3QgQGN1cnJlbnQ/XG4gICAgICBAY3VycmVudCA9IDBcbiAgICBlbHNlXG4gICAgICBAY3VycmVudCsrXG5cbiAgICBAbGF0ZXN0ID0gQGN1cnJlbnRcblxuICAgIG5ld1N0YXRlID1cbiAgICAgIHN0YXRlOiBAZW5jb2RlU3RhdGUgXy5jbG9uZURlZXAgc3RhdGVcbiAgICAgIG1ldGE6IF8uY2xvbmVEZWVwIG1ldGFcblxuICAgIEBzdGF0ZXNbQGN1cnJlbnRdID0gbmV3U3RhdGVcblxuICAgIEBzYXZlKClcblxuICAgIEBlbWl0ICdhZGQnLCBuZXdTdGF0ZSwgJ1lFQUgnXG4gICAgQGVtaXQgJ3VwZGF0ZScsIG5ld1N0YXRlLCAnWUVBSCdcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICBcbiAgdW5kbzogKCktPlxuICAgIGlmIEBjdXJyZW50ID4gMFxuICAgICAgQGN1cnJlbnQtLVxuICAgIEBzaG93VGhlbkhpZGUoKVxuICAgIHN0YXRlID0gQGdldEN1cnJlbnQoKVxuICAgIEBlbWl0ICd1bmRvJ1xuICAgIEBlbWl0ICd1cGRhdGUnLCBzdGF0ZVxuICAgIEBlbWl0ICdjaGFuZ2UnXG4gICAgc3RhdGVcbiAgXG4gIHJlZG86ICgpLT5cbiAgICBpZiBAY3VycmVudCA8IEBsYXRlc3RcbiAgICAgIEBjdXJyZW50KytcbiAgICBAc2hvd1RoZW5IaWRlKClcbiAgICBzdGF0ZSA9IEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAncmVkbydcbiAgICBAZW1pdCAndXBkYXRlJywgc3RhdGVcbiAgICBAZW1pdCAnY2hhbmdlJ1xuICAgIHN0YXRlXG5cbiAgZ29UbzogKGluZGV4KS0+XG4gICAgcmV0dXJuIGlmIG5vdCBpbmRleD9cbiAgICBAY3VycmVudCA9IGluZGV4XG4gICAgQGVtaXQgJ2dvVG8nLCBAZ2V0Q3VycmVudCgpXG4gICAgQGVtaXQgJ3VwZGF0ZScsIEBnZXRDdXJyZW50KClcbiAgICBAZW1pdCAnY2hhbmdlJ1xuXG4gIGdldDogKGluZGV4KS0+XG4gICAgcmV0dXJuIG51bGwgaWYgQHN0YXRlcy5sZW5ndGggPT0gMFxuICAgIHNoID0gXy5jbG9uZURlZXAgQHN0YXRlc1tpbmRleF1cbiAgICBzaC5zdGF0ZSA9IEBkZWNvZGVTdGF0ZSBzaC5zdGF0ZVxuICAgIHNoXG5cbiAgZ2V0Q3VycmVudDogKCktPlxuICAgIEBnZXQoQGN1cnJlbnQpXG5cbiAgZ2V0UHJldjogLT5cbiAgICBwcmV2ID0gQGN1cnJlbnQgLSAxXG4gICAgaWYgcHJldiA8IDAgdGhlbiBwcmV2ID0gMFxuICAgIHJldHVybiBAZ2V0KHByZXYpXG5cbiAgZ2V0QWxsOiAtPlxuICAgIF8ubWFwIEBzdGF0ZXMsIChzaCwgaW5kZXgpPT5cbiAgICAgIEBnZXQgaW5kZXhcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSGlzdG9yeVxuIiwiY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSAocHJvcHMpIC0+XG4gIG93bmVyQ2xhc3MgPSBcIm93bmVyLSN7cHJvcHMub3duZXJ9XCJcbiAgY2xhc3NlcyA9IGN4XG4gICAgJ2FzaWFTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0FzaWEgU2NvcmluZydcbiAgICAnZXVyb3BlU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdFdXJvcGUgU2NvcmluZydcbiAgICAnbWlkZGxlRWFzdFNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnTWlkZGxlIEVhc3QgU2NvcmluZydcbiAgICAnY2VudHJhbEFtZXJpY2FTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ0NlbnRyYWwgQW1lcmljYSBTY29yaW5nJ1xuICAgICdzb3V0aGVhc3RBc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aGVhc3QgQXNpYSBTY29yaW5nKidcbiAgICAnYWZyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBZnJpY2EgU2NvcmluZydcbiAgICAnc291dGhBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdTb3V0aCBBbWVyaWNhIFNjb3JpbmcnXG4gICAgJ29uZ29pbmcnOiBwcm9wcy5vbmdvaW5nXG5cbiAgb3duZXJDbGFzcyArICcgJyArIGNsYXNzZXNcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29udGluZW50KS0+XG4gIGlmIGNvbnRpbmVudCA9PSAnYWYnIHRoZW4gJ2YnIGVsc2UgY29udGluZW50LmNoYXJBdCAwXG5cbiIsImNzID1cbiAgJ2EnOiAnYXMnXG4gICdlJzogJ2V1J1xuICAnYyc6ICdjYSdcbiAgJ3MnOiAnc2EnXG4gICdmJzogJ2FmJ1xuICAnbSc6ICdtZSdcblxubW9kdWxlLmV4cG9ydHMgPSAobGV0dGVyKS0+IGNzW2xldHRlcl1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwpLT4gZWwgaWYgZWxcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVsLGksYXJyKS0+IGFyci5pbmRleE9mKGVsKSA9PSBpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCktPiAxIDw9IGVsIDw9IDExMFxuIiwibW9kdWxlLmV4cG9ydHMgPVxuICB0dXJuOiAodmFsKS0+XG4gICAgc3dpdGNoIHZhbFxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIHZhbFxuICByb3VuZDogKHZhbCktPlxuICAgIGlmIHZhbCA9PSAwIHRoZW4gJ0gnIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gIFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoaWQsIHZhbCwgb3B0KS0+XG4gIHN3aXRjaCBpZFxuICAgIHdoZW4gJ3R1cm4nXG4gICAgICBzdGFydCA9ICdTJ1xuICAgICAgZW5kID0gJ0UnXG4gICAgICBpZiBvcHQgPT0gJ2xvbmcnXG4gICAgICAgIHN0YXJ0ID0gJ05ldyBHYW1lJ1xuICAgICAgICBlbmQgPSAnR2FtZSBFbmQnXG4gICAgICBzd2l0Y2ggdmFsXG4gICAgICAgIHdoZW4gMCB0aGVuIHN0YXJ0XG4gICAgICAgIHdoZW4gMTEgdGhlbiBlbmRcbiAgICAgICAgZWxzZSB2YWxcbiAgICB3aGVuICdyb3VuZCdcbiAgICAgIGggPSBpZiBvcHQgPT0gJ2xvbmcnIHRoZW4gJ0hlYWRsaW5lJyBlbHNlICdIJ1xuICAgICAgaWYgdmFsID09IDAgdGhlbiBoIGVsc2UgTWF0aC5jZWlsKHZhbCAvIDIpXG4gICAgd2hlbiAnc2NvcmUnXG4gICAgICBNYXRoLmFicyB2YWxcbiAgICBlbHNlXG4gICAgICB2YWxcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT4gaWYgbnVtID4gMCB0aGVuIFwiKyN7bnVtfVwiIGVsc2UgbnVtXG4iLCIjIEVuY29kZS9kZWNvZGUgbnVtYmVycyBpbnRvIHNpbmdsZS1jaGFyIHJlcHJlc2VudGF0aW9uc1xuIyAwLTM1ICAtPiAwLDEsMi4uYSxiLGMuLnpcbiMgMzYtNjEgLT4gQSxCLEMuLi5cbm1vZHVsZS5leHBvcnRzID1cbiAgZW5jb2RlOiAobiktPlxuICAgIGlmIG4gPCAzNiB0aGVuIG91dCA9IG4udG9TdHJpbmcoMzYpIGVsc2UgU3RyaW5nLmZyb21DaGFyQ29kZSBuICsgMjlcblxuICBkZWNvZGU6IChjID0gJzAnKS0+XG4gICAgY29kZSA9IGMuY2hhckNvZGVBdCAwXG4gICAgIyBDYWxjdWxhdGUgb2Zmc2V0IGZyb20gY2hhcmNvZGUgdG8gdmFsdWVcbiAgICBvZmZzZXQgPSBzd2l0Y2hcbiAgICAgICMgMC05XG4gICAgICB3aGVuIDQ4IDw9IGNvZGUgPD0gNTcgdGhlbiA0OFxuICAgICAgIyAxMC0zNVxuICAgICAgd2hlbiA5NyA8PSBjb2RlIDw9IDEyMiB0aGVuIDg3XG4gICAgICAjIDM2LTYxXG4gICAgICB3aGVuIDY1IDw9IGNvZGUgPD0gOTAgdGhlbiAyOVxuXG4gICAgY29kZSAtIG9mZnNldFxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29udGluZW50KS0+XG4gIGlmIGNvbnRpbmVudCA9PSAnYWYnIHRoZW4gJ2YnIGVsc2UgY29udGluZW50LmNoYXJBdCAwXG5cbiIsIiMgSGFzaGVkIHFzXG4jIEhhbmRsZXMgc3RyaW5ncyBhbmQgYXJyYXlzXG4jIEFueXRoaW5nIHdpdGggYSBjb21tYSB3aWxsIGJlIHBhcnNlZCBhcyBhbiBhcnJheVxubW9kdWxlLmV4cG9ydHMgPVxuICBtZXJnZTogKG9iaiktPlxuXG4gIGdldDogKGZpZWxkKS0+XG4gIFxuICBzZXQ6IChmaWVsZCwgdmFsKS0+XG4gICAgcXNPYmogPSBAdG9PYmooKSB8fCB7fVxuICAgIHFzT2JqW2ZpZWxkXSA9IHZhbFxuICAgIEBzZXRRUyBAdG9RUyhxc09iailcblxuICBkZWxldGU6IChmaWVsZCktPlxuICAgIHFzT2JqID0gQHRvT2JqKCkgfHwge31cbiAgICByZXR1cm4gaWYgbm90IHFzT2JqP1xuICAgIGRlbGV0ZSBxc09ialtmaWVsZF1cbiAgICBAc2V0UVMgQHRvUVMgcXNPYmpcblxuICBlbmNvZGVDaGFyc0luOiBbJz0nLCcmJ11cblxuICBlbmNvZGVDaGFyc091dDpbJyUzRCcsJyUyNiddXG5cbiAgZW5jb2RlOiAob2JqKS0+XG4gICAgaWYgXy5pc0FycmF5IG9ialxuICAgICAgb2JqID0gb2JqLmpvaW4oJywnKVxuICAgIG9iai5yZXBsYWNlKEBlbmNvZGVDaGFyc0luLCBAZW5jb2RlQ2hhcnNPdXQpXG5cbiAgZGVjb2RlOiAoc3RyKS0+XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoQGVuY29kZUNoYXJzT3V0LCBAZW5jb2RlQ2hhcnNJbilcbiAgICBpZiBzdHIuaW5kZXhPZignLCcpICE9IC0xXG4gICAgICBzdHIgPSBzdHIuc3BsaXQoJywnKVxuICAgIHN0clxuXG5cbiAgdG9PYmo6IChxcyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/Jyk/WzFdKS0+XG4gICAgaWYgbm90IHFzXG4gICAgICByZXR1cm5cbiAgICBvdXQgPSB7fVxuICAgIHBhaXJzID0gcXMuc3BsaXQoJyYnKVxuICAgIHBhaXJzPy5mb3JFYWNoIChwYWlyKT0+XG4gICAgICBrdkFyciA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgb3V0W0BkZWNvZGUoa3ZBcnJbMF0pXSA9IEBkZWNvZGUoa3ZBcnJbMV0pXG4gICAgb3V0XG5cbiAgdG9RUzogKG9iaiktPlxuICAgIHBhaXJzID0gW11cbiAgICBmb3Igb3duIGssdiBvZiBvYmpcbiAgICAgIHBhaXJzLnB1c2ggXCIje0BlbmNvZGUoayl9PSN7QGVuY29kZSh2KX1cIlxuICAgIHBhaXJzLmpvaW4oJyYnKVxuICAgICAgIFxuICBzZXRRUzogKHFzKS0+XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdICsgJz8nICsgcXNcbiIsIm1vZHVsZS5leHBvcnRzID0gKGlkLCB2YWwpLT5cbiAgcmFuZ2VzID1cbiAgICBzY29yZTogWy0yMCwgMjBdXG4gICAgdHVybjogWzAsIDExXVxuICAgIHJvdW5kOiBbMCwgMTZdXG4gICAgZGVmY29uOiBbMSwgNV1cbiAgICBtaWxvcHM6IFswLCA1XVxuICAgIHNwYWNlOiBbMCwgOF1cblxuICByYW5nZSA9IHJhbmdlc1tpZF1cblxuICBpZiB2YWwgPCByYW5nZVswXVxuICAgIHJldHVybiByYW5nZVsxXVxuICBpZiB2YWwgPiByYW5nZVsxXVxuICAgIHJldHVybiByYW5nZVswXVxuICB2YWxcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoYXJncy4uLiktPlxuICBkb2N1bWVudC50aXRsZSA9IGFyZ3Muam9pbignIHwgJykgKyAnIC0gVHdpU3RydWcnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChkaXIpLT4gaWYgZGlyID09ICd1cCcgdGhlbiAnKycgZWxzZSAnLSdcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIGlmIG51bSA+IDBcbiAgICByZXR1cm4gJysnXG4gIGlmIG51bSA8IDBcbiAgICByZXR1cm4gJy0nXG4gIHJldHVybiAnJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSAobnVtKS0+XG4gIGlmIG51bSA9PSAwXG4gICAgb3V0ID0gJ+KAlCdcbiAgaWYgbnVtID4gMFxuICAgIG91dCA9IFwiKyN7bnVtfVwiXG4gIGlmIG51bSA8IDBcbiAgICBvdXQgPSBudW1cbiAgb3V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChudW0pLT5cbiAgc2lnbiA9ICcnXG4gIGlmIG51bSA+IDBcbiAgICBzaWduID0gJysnXG4gIGNvbnNvbGUubG9nIHNpZ24gKyBudW1cbiAgcmV0dXJuIHNpZ24gKyBudW1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGEsYiktPiBhLWJcbiIsIm51bVRvQ2hhciA9IHJlcXVpcmUgJy4vbnVtVG9DaGFyJ1xuXG4jIFR1cm4gYSBnYW1lIHN0YXRlIG9iamVjdCBpbnRvIGEgc3RyaW5nLCB2YWx1ZXMgZGVsaW1pdGVkIGJ5IGluZGV4IGluIHRoZSBzdHJpbmdcbiNcbiMgQnl0ZXMgICAgIEl0ZW1zXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIDAtNyAgICAgICBCb2FyZCBzdGF0ZTogIFNjb3JlLCBEZWZjb24sIFR1cm4sIFJvdW5kLFxuIyAgICAgICAgICAgICAgICAgICAgICAgICBNTyBVU0EsIE1PIFVTU1IsIFNwYWNlIFVTQSwgU3BhY2UgVVNTUlxuIyA4LTE3NiAgICAgQ291bnRyeSBJUHMsIDIgYnl0ZXMgZWFjaCwgc2VxdWVudGlhbGx5IGJ5IGlkXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGVuY29kZTogKHN0YXRlKS0+XG4gICAgZ2FtZSA9IHN0YXRlLmdhbWVcbiAgICBpcHMgPSBzdGF0ZS5pcHNcblxuICAgICMgU2NvcmUgaXMgZnJvbSAtMjAgdG8gKzIwLCBidXQgdGhpcyBlbmNvZGVyIGlzIHBvc2l0aXZlIGludGVnZXJzIG9ubHlcbiAgICBib2FyZCA9IFtcbiAgICAgIGdhbWUuc2NvcmUgKyAyMCwgZ2FtZS5kZWZjb24sIGdhbWUudHVybiwgZ2FtZS5yb3VuZCxcbiAgICAgIGdhbWUubWlsb3BzWzBdLCBnYW1lLm1pbG9wc1sxXSwgZ2FtZS5zcGFjZVswXSwgZ2FtZS5zcGFjZVsxXVxuICAgIF1cblxuICAgICMgRmlyc3QgMiBpcHMgYXJlIHRoZSBzdXBlcnBvd2VycyAtIHByZXR0eSB1c2VsZXNzLCBzaG91bGQgY2hhbmdlIGluIGZ1dHVyZVxuICAgIGJvYXJkLmNvbmNhdCBfLmZsYXR0ZW4gaXBzLnNsaWNlKDIpXG4gICAgICAubWFwIG51bVRvQ2hhci5lbmNvZGVcbiAgICAgIC5qb2luICcnXG4gICAgICBcbiAgZGVjb2RlOiAoc3RyKS0+XG4gICAgcmV0dXJuIG51bGwgaWYgbm90IHN0cj9cbiAgICBhcnIgPSBzdHIuc3BsaXQoJycpLm1hcCAoZWwpLT4gbnVtVG9DaGFyLmRlY29kZSBlbFxuICAgIGJvYXJkQXJyID0gYXJyLnNsaWNlKDAsOClcbiAgICBpcEFyciA9IGFyci5zbGljZSg4KVxuXG4gICAgW3Njb3JlLCBkZWZjb24sIHR1cm4sIHJvdW5kLCBtb3VzYSwgbW91c3NyLCBzcHVzYSwgc3B1c3NyXSA9IGJvYXJkQXJyXG4gICAgbWlsb3BzID0gW21vdXNhLCBtb3Vzc3JdXG4gICAgc3BhY2UgPSBbc3B1c2EsIHNwdXNzcl1cbiAgICBzY29yZSAtPSAyMFxuICAgIGdhbWUgPSB7c2NvcmUsIGRlZmNvbiwgdHVybiwgcm91bmQsIG1pbG9wcywgc3BhY2V9XG5cbiAgICBpcHMgPSBbXVxuICAgIGZvciBpcCwgaW5kZXggaW4gaXBBcnJcbiAgICAgIGlwc0luZGV4ID0gTWF0aC5mbG9vciBpbmRleC8yXG4gICAgICBzaWRlSW5kZXggPSBpbmRleCAlIDJcbiAgICAgIGlmIHNpZGVJbmRleCA9PSAwXG4gICAgICAgIGlwc1tpcHNJbmRleF0gPSBbaXBdXG4gICAgICBlbHNlXG4gICAgICAgIGlwc1tpcHNJbmRleF1bc2lkZUluZGV4XSA9IGlwXG5cbiAgICAjIEFkZCB0aGUgc3VwZXJwb3dlciBJUHMgYmFjayBpblxuICAgIGlwcy51bnNoaWZ0IFswLDBdLCBbMCwwXVxuXG4gICAge2dhbWUsIGlwc31cblxuIiwiZ2V0SXBTdGF0cyA9IChpcHMsIGNvdW50cmllcyktPlxuICBhY2N1bXVsYXRvciA9IC0+XG4gICAgYnRsOiAwXG4gICAgbm9uOiAwXG4gICAgdG90YWw6IDBcbiAgICBldTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhczogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBtZTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBhZjogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBzYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcbiAgICBjYTogICBub246IDAsIGJ0bDogMCwgdG90YWw6IDBcblxuICBmbiA9IChhY2N1bSwgaXBzLCBjb3VudHJ5SWQpLT5cbiAgICBjb3VudHJ5ID0gXy5maW5kIGNvdW50cmllcywgaWQ6IHBhcnNlSW50KGNvdW50cnlJZCwgMTApXG4gICAgaWYgaXBzWzBdIC0gaXBzWzFdID49IGNvdW50cnkuc3RhYlxuICAgICAgYWNjdW1bY291bnRyeS5jb250aW5lbnRdLnRvdGFsKytcbiAgICAgIGFjY3VtLnRvdGFsKytcbiAgICAgIGlmIGNvdW50cnkuYnRsXG4gICAgICAgIGFjY3VtW2NvdW50cnkuY29udGluZW50XS5idGwrK1xuICAgICAgICBhY2N1bS5idGwrK1xuICAgICAgZWxzZVxuICAgICAgICBhY2N1bVtjb3VudHJ5LmNvbnRpbmVudF0ubm9uKytcbiAgICAgICAgYWNjdW0ubm9uKytcbiAgICBhY2N1bVxuXG4gICMgRmxpcHBlZCB0byBoYXZlIFVTU1IgaXBzIGZpcnN0XG4gIGlwc1JldiA9IF8ubWFwIGlwcywgKGlwcyktPiBfLmNsb25lRGVlcChpcHMpLnJldmVyc2UoKVxuXG4gIHVzYSA9IF8ucmVkdWNlIGlwcywgZm4sIGFjY3VtdWxhdG9yKClcbiAgdXNzciA9IF8ucmVkdWNlIGlwc1JldiwgZm4sIGFjY3VtdWxhdG9yKClcblxuICB7dXNhLCB1c3NyfVxuXG5zdW1SZWdpb24gPSAobWV0cmljLCBzdW0sIHJlZ2lvbiktPiBzdW0gKyByZWdpb25bbWV0cmljXVxuXG5nZXRSZWdpb25TdGF0cyA9IChpcFN0YXRzLCByZWdpb25zKS0+XG4gIHN0YXRzID0gXy5tYXBWYWx1ZXMgaXBTdGF0cywgKGhlcm8sIHBvd2VyLCBwb3dlcnMpLT5cbiAgICB2aWxsYWluID0gaWYgcG93ZXIgPT0gJ3VzYScgdGhlbiBwb3dlcnMudXNzciBlbHNlIHBvd2Vycy51c2FcbiAgICByZWdpb25TdGF0cyA9IHJlZ2lvbnMubWFwIChyZWdpb24pLT5cbiAgICAgIGhSZWdpb24gPSBoZXJvW3JlZ2lvbi5pZF1cbiAgICAgIHZSZWdpb24gPSB2aWxsYWluW3JlZ2lvbi5pZF1cbiAgICAgIGRvbWluYXRpb24gPSBoUmVnaW9uLm5vbiA+IDAgYW5kIGhSZWdpb24uYnRsID4gdlJlZ2lvbi5idGwgYW5kIGhSZWdpb24udG90YWwgPiB2UmVnaW9uLnRvdGFsXG4gICAgICBjb250cm9sID0gaFJlZ2lvbi5idGwgPT0gcmVnaW9uLm51bUJ0bCBhbmQgaFJlZ2lvbi50b3RhbCA+IHZSZWdpb24udG90YWxcbiAgICAgIHByZXNlbmNlID0gbm90IGRvbWluYXRpb24gYW5kIG5vdCBjb250cm9sIGFuZCBoUmVnaW9uLnRvdGFsID4gMFxuICAgICAgeyBwcmVzZW5jZSwgZG9taW5hdGlvbiwgY29udHJvbCB9XG5cbiAgICByZWdpb25TdGF0cyA9IF8uemlwT2JqZWN0IF8ucGx1Y2socmVnaW9ucywgJ2lkJyksIHJlZ2lvblN0YXRzXG4gICAgcmVnaW9uU3RhdHMgPSBfLmFzc2lnbiByZWdpb25TdGF0cyxcbiAgICAgIHByZXNlbmNlOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ3ByZXNlbmNlJyksIDBcbiAgICAgIGRvbWluYXRpb246IF8ucmVkdWNlIHJlZ2lvblN0YXRzLCBzdW1SZWdpb24uYmluZChudWxsLCAnZG9taW5hdGlvbicpLCAwXG4gICAgICBjb250cm9sOiBfLnJlZHVjZSByZWdpb25TdGF0cywgc3VtUmVnaW9uLmJpbmQobnVsbCwgJ2NvbnRyb2wnKSwgMFxuICBcbiAgc3RhdHNcblxubW9kdWxlLmV4cG9ydHMgPSAoaXBzLCBjb3VudHJ5QXJyLCByZWdpb25BcnIpLT5cbiAgY291bnRyaWVzID0gZ2V0SXBTdGF0cyhpcHMsIGNvdW50cnlBcnIpXG4gIHJlZ2lvbnMgPSBnZXRSZWdpb25TdGF0cyhjb3VudHJpZXMsIHJlZ2lvbkFycilcbiAge2NvdW50cmllcywgcmVnaW9uc31cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChwb3dlciktPiBpZiBwb3dlciA9PSAndXNhJyB0aGVuIDAgZWxzZSAxXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzdHI9JycpLT4gc3RyLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoc3RyLCBsZW49MyktPiAoJzAwMCcgKyBzdHIpLnN1YnN0cigtbGVuLGxlbilcbiIsIm1vZHVsZS5leHBvcnRzID0gKHN0ciwgbGVuPTMpLT4gKCcwMDAnICsgc3RyKS5zdWJzdHIoLWxlbixsZW4pXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdBYm91dFZpZXcnXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdhYm91dFZpZXcnLCBbXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC04JywgW1xuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC0xMicsXG4gICAgICAgICAgICBSLmgyIHt9LCBbXG4gICAgICAgICAgICAgIFwiQWJvdXQgXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3R3aScsICdUd2knXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzdHJ1ZycsICdTdHJ1ZydcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgICBcIlR3aVN0cnVnIHdhcyBjcmVhdGVkIGFzIGEgY2FyZCByZWZlcmVuY2UgZm9yIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOlwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ud2lsaWdodF9TdHJ1Z2dsZVwiLFxuICAgICAgICAgICAgICAgIFwiVHdpbGlnaHQgU3RydWdnbGVcIlxuICAgICAgICAgICAgICBcIi4gSXQgaGFzIHNpbmNlIGV4cGFuZGVkIHRvIGluY2x1ZGUgYSBwbGF5YWJsZSB2ZXJzaW9uIG9mIHRoZSBib2FyZCBmb3JcbiAgICAgICAgICAgICAgbG9jYWwgZ2FtZXMgd2l0aG91dCB0YWtpbmcgdXAgYXMgbXVjaCB0YWJsZSBzcGFjZS5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiRm9yIG1vcmUgaW4tZGVwdGggc3RyYXRlZ3ksIGxvb2sgbm8gZnVydGhlciB0aGFuIHRoZSBpbmltaXRhYmxlIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgXCIuIEl0IGhhcyB0b25zIG9mIGdyZWF0IGNvbnRlbnQgYW5kXG4gICAgICAgICAgICAgIGFuYWx5c2lzIGF2YWlsYWJsZSwgaW5jbHVkaW5nIGRpc2N1c3Npb25zIGFib3V0IG5lYXJseSBldmVyeSBjYXJkLlxuICAgICAgICAgICAgICBQbGVhc2Ugc3VwcG9ydCBUd2lsaWdodCBTdHJhdGVneSBhbmQgaXRzIGF1dGhvciwgXCJcbiAgICAgICAgICAgICAgUi5lbSB7fSwgXCJ0aGVvcnlcIlxuICAgICAgICAgICAgICBcIiwgYnkgcHVyY2hhc2luZyBUd2lsaWdodCBTdHJ1Z2dsZSBmcm9tIEFtYXpvbiBvbiB0aGUgc2lkZWJhciBvZiBoaXNcbiAgICAgICAgICAgICAgc2l0ZSwgb3IgYnkgcGF5aW5nIHNvbWUgbW9uZXkgZm9yIHRoZSBhc3NvY2lhdGVkIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHBzOi8vbGVhbnB1Yi5jb20vdHdpbGlnaHRzdHJhdGVneVwiLCBcImUtYm9va1wiXG4gICAgICAgICAgICAgIFwiLiBJdCdzIFR3aWxpZ2h0IFN0cmF0ZWd5IGluIGJvb2sgZm9ybSBhbmQgZGVzZXJ2ZXMgeW91ciBtb25leS5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5wIHt9LCBbXG4gICAgICAgICAgICAgIFwiVHdpU3RydWcgd2FzIG1hZGUgYnkgXCJcbiAgICAgICAgICAgICAgUi5hIGhyZWY6IFwiaHR0cDovL2pqdC5pby9cIiwgXCJKYXNvbiBUcmlsbFwiXG4gICAgICAgICAgICAgIFwiLiBTb3VyY2UgYXZhaWxhYmxlIG9uIFwiXG4gICAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qanQvdHdpc3RydWdcIiwgXCJHaXRodWJcIlxuICAgICAgICAgICAgICBcIi5cIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgUi5oMiB7fSwgXCJBYm91dCBUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICBSLmJsb2NrcXVvdGUge30sIFtcbiAgICAgICAgICAgICAgUi5wIHt9LCBcIlR3aWxpZ2h0IFN0cnVnZ2xlIGlzIGEgY2FyZCBkcml2ZW4gZ2FtZSBwbGF5ZWQgb3ZlciBhIG1heGltdW0gb2YgMTAgdHVybnMgW2VhY2ggd2l0aCA2IG9yIDcgcm91bmRzXS4gVGhlIGdhbWUgbWF5IGVuZCBzb29uZXIgKGFuZCBmcmVxdWVudGx5IGRvZXMpLlwiXG4gICAgICAgIFxuICAgICAgICAgICAgICBSLnAge30sIFwiW0l0XSBpcyBmdW5kYW1lbnRhbGx5IGEgZ2FtZSBhYm91dCBhcmVhIGNvbnRyb2wuIFRoZXJlIGFyZSBzaXggZ2VvcG9saXRpY2FsIHJlZ2lvbnMgb24gdGhlIG1hcDogRXVyb3BlIChzcGxpdCBpbnRvIEVhc3Rlcm4gYW5kIFdlc3Rlcm4gRXVyb3BlIHN1YnJlZ2lvbnMpLCBBc2lhIChpbmNsdWRpbmcgdGhlIFNvdXRoZWFzdCBBc2lhIHN1YnJlZ2lvbiksIHRoZSBNaWRkbGUgRWFzdCwgQWZyaWNhLCBDZW50cmFsIEFtZXJpY2EsIGFuZCBTb3V0aCBBbWVyaWNhLiBXaXRoaW4gZWFjaCByZWdpb24gYXJlIGNvdW50cmllcyB0aGF0IGhhdmUgYSBzdGFiaWxpdHkgbnVtYmVyLCByZXByZXNlbnRpbmcgaG93IHN0YWJsZSB0aGUgZ292ZXJubWVudCB0ZW5kcyB0byBiZS5cIlxuXG4gICAgICAgICAgICAgIFIucCB7fSwgXCJIYXZpbmcgY29udHJvbCBvZiBjb3VudHJpZXMgaGVscHMgZGV0ZXJtaW5lIHdoZXRoZXIgeW91IGhhdmUgcHJlc2VuY2UsIGRvbWluYXRpb24sIG9yIGNvbnRyb2wgb2YgYSByZWdpb24sIHdoaWNoIGluIHR1cm4gaGVscHMgeW91IGVhcm4gdmljdG9yeSBwb2ludHMuIFdpdGhpbiBlYWNoIHJlZ2lvbiwgdGhlcmUgYXJlIGEgbnVtYmVyIG9mIGJhdHRsZWdyb3VuZCBjb3VudHJpZXMsIHdoaWNoIGFyZSBjb25zaWRlcmVkIGtleSB0byB0aGUgcmVnaW9uLlwiXG4gICAgICAgICAgICAgIFIucCB7fSxcbiAgICAgICAgICAgICAgICBSLmVtIHt9LFxuICAgICAgICAgICAgICAgICAgUi5hIGhyZWY6ICdodHRwOi8vYm9hcmRnYW1lZ2Vlay5jb20vdGhyZWFkLzQ3MTk1My9yb2dlcnMtcmV2aWV3cy1kZWx1eGUtdHdpbGlnaHQtc3RydWdnbGUtY29tcHJlaGVucycsICdGb3J1bSBwb3N0IGJ5IGxlcm95NDMnXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTQnLCBbXG4gICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nIGltZy1mbHVpZCBBYm91dFZpZXctdHNib3gnLCBzcmM6IFwiL2ltYWdlcy90c2JveC5qcGdcIlxuICAgICAgICBdXG4gICAgICBdXG5cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC0xMicsXG4gICAgICAgICAgUi5wIHt9LFxuICAgICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2ltZy1saW5rJywgaHJlZjogXCIvaW1hZ2VzL3RzYm9hcmQuanBnXCIsXG4gICAgICAgICAgICAgIFIuaW1nIGNsYXNzTmFtZTogJ2ltZyBpbWctZmx1aWQgaW1nLWNlbnRlcicsIHNyYzogJy9pbWFnZXMvdHNib2FyZC1tZC5qcGcnXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblN0YXRlSGlzdG9yeSA9IHJlcXVpcmUgJy4uL2xpYnMvU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnkgPSByZXF1aXJlICcuLi9saWJzL0JvYXJkU3RhdGVIaXN0b3J5J1xuQm9hcmRTdGF0ZUhpc3RvcnlWaWV3ID0gcmVxdWlyZSAnLi4vdmlld3MvQm9hcmRTdGF0ZUhpc3RvcnknXG5Cb2FyZCA9IHJlcXVpcmUgJy4uL3ZpZXdzL0JvYXJkJ1xuXG5yZWR1Y2VTaG9ydGN1dHMgPSAoYXJyLCBzaG9ydGN1dCktPlxuICBhcnIucHVzaCBSLmR0IHt9LCBzaG9ydGN1dC5rZXlcbiAgYXJyLnB1c2ggUi5kZCB7fSwgc2hvcnRjdXQuZGVzY1xuICBhcnJcblxuXG5Cb2FyZEluZm8gPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBzY3JvbGxUb3A6IC0+XG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgd2luZG93LnNjcm9sbFRvIDAsMFxuICAgICwgMFxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgc2hvcnRjdXRzOlxuICAgICAgaXA6IFtcbiAgICAgICAgeyBrZXk6J2knLCBkZXNjOiAnRW50ZXIgSVAgcGxhY2VtZW50IGJ5IGtleWJvYXJkIChJUGJLKSBtb2RlJyB9XG4gICAgICAgIHsga2V5Oidlc2MnLCBkZXNjOiAnR28gXCJ1cFwiIChjb3VudHJ5IC0+IGNvbnRpbmVudCAtPiBleGl0IElQYksgbW9kZSknIH1cbiAgICAgICAgeyBrZXk6J2VudGVyJywgZGVzYzogJyhzYW1lIGFzIGFib3ZlKScgfVxuICAgICAgICB7IGtleTonYS9BJywgZGVzYzogJ1VTQSBpbmZsdWVuY2UgaW5jL2RlYyAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgICB7IGtleTonci9SJywgZGVzYzogJ1VTU1IgaW5mbHVlbmNlIGluYy9kZWMgKHdoZW4gY291bnRyeSBzZWxlY3RlZCknIH1cbiAgICAgICAgeyBrZXk6J2VzYycsIGRlc2M6ICdDYW5jZWwgSVAgcGxhY2VtZW50ICh3aGVuIGNvdW50cnkgc2VsZWN0ZWQpJyB9XG4gICAgICAgIHsga2V5OidlbnRlcicsIGRlc2M6ICdDb25maXJtIElQIHBsYWNlbWVudCAod2hlbiBjb3VudHJ5IHNlbGVjdGVkKScgfVxuICAgICAgXVxuICAgICAgbGVmdDogW1xuICAgICAgICB7IGtleToncy9TJywgZGVzYzogJ1Njb3JlIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2QvRCcsIGRlc2M6ICdEZWZjb24gaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonbS9NJywgZGVzYzogJ1VTQSBNaWxpdGFyeSBPcHMgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonby9PJywgZGVzYzogJ1VTU1IgTWlsaXRhcnkgT3BzIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J2gnLCBkZXNjOiAnU2hvdy9oaWRlIEFjdGlvbiBIaXN0b3J5JyB9XG4gICAgICAgIHsga2V5OidjJywgZGVzYzogJ1JvbGwgZGljZScgfVxuICAgICAgXVxuICAgICAgcmlnaHQ6IFtcbiAgICAgICAgeyBrZXk6J3QvVCcsIGRlc2M6ICdUdXJuIGluYy9kZWMnIH1cbiAgICAgICAgeyBrZXk6J3IvUicsIGRlc2M6ICdSb3VuZCBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5OidwL1AnLCBkZXNjOiAnVVNBIFNwYWNlIFJhY2UgaW5jL2RlYycgfVxuICAgICAgICB7IGtleTonYS9BJywgZGVzYzogJ1VTU1IgU3BhY2UgUmFjZSBpbmMvZGVjJyB9XG4gICAgICAgIHsga2V5Oid6JywgZGVzYzogJ1VuZG8gKEFjdGlvbiBIaXN0b3J5KScgfVxuICAgICAgICB7IGtleToneScsIGRlc2M6ICdSZWRvIChBY3Rpb24gSGlzdG9yeSknIH1cbiAgICAgIF1cbiAgICAgIFxuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICBSLmgzIHt9LCAnVmlydHVhbCBUd2lsaWdodCBTdHJ1Z2dsZSBib2FyZCdcbiAgICAgICAgICBSLnAge30sIFwiVGhpcyBpcyBhIGZ1bGx5IHBsYXlhYmxlIGJvYXJkIHdpdGggYSBtb3JlXG4gICAgICAgICAgICBjb21wYWN0IGxheW91dCB0byBmaXQgb24gc21hbGxlciBzY3JlZW5zLCBsaWtlIGEgQ2hyb21lYm9vayBvciBpUGFkLiBKdXN0IGFkZCBjYXJkc1xuICAgICAgICAgICAgYW5kIHlvdSdsbCBiZSBhYmxlIHRvIHBsYXkgYW55d2hlcmUuIFRoZSBib2FyZCBpc24ndCBhd2FyZSBvZiB0aGUgcnVsZXMsIG5vciB3aWxsXG4gICAgICAgICAgICBpdCBkbyBhbnl0aGluZyBhdXRvbWF0aWNhbGx5LiBVc2UgaXQgYXMgeW91IHdvdWxkIGEgcGh5c2ljYWwgY29weSBvZiB0aGUgZ2FtZS5cIlxuICAgICAgICAgIFIucCB7fSwgW1xuICAgICAgICAgICAgXCJUaGlzIGdhbWUsIFwiXG4gICAgICAgICAgICBSLmEgaHJlZjogXCIjL2JvYXJkLyN7QHByb3BzLmlkfVwiLFxuICAgICAgICAgICAgICBSLmNvZGUge30sIEBwcm9wcy5pZFxuICAgICAgICAgICAgXCIsIHdpbGwgYmUgc2F2ZWQgaW4geW91ciBicm93c2VyIGFuZCBjYW4gYmUgYm9va21hcmtlZCBhbmQgcmVzdW1lZCBhdCBhIGxhdGVyIHRpbWUsIGV2ZW4gaWYgeW91IGNsb3NlIHlvdXIgYnJvd3Nlci4gXCJcbiAgICAgICAgICAgIFIuYSBvbkNsaWNrOiBAc2Nyb2xsVG9wLCBocmVmOicjL2JvYXJkJywgJ0NsaWNrIGhlcmUgdG8gc3RhcnQgYSBuZXcgZ2FtZSdcbiAgICAgICAgICAgICcuJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBSLnAge30sIFwiVGhlIFVSTCBjb250YWlucyB0aGUgY29tcGxldGUgc3RhdGUgb2YgdGhlIGJvYXJkIGFuZCB3aWxsXG4gICAgICAgICAgICB1cGRhdGUgd2l0aCBlYWNoIGFjdGlvbiB0YWtlbi4gVGhpcyBjYW4gYmUgdXNlZCB0byBwbGF5IHJlbW90ZWx5XG4gICAgICAgICAgICB3aXRoIHNvbWVvbmUgYnkgc2VuZGluZyB0aGUgVVJMIGJhY2sgYW5kIGZvcnRoLiBGb3JcbiAgICAgICAgICAgIGluc3RhbmNlLCBpZiB5b3Ugd2VyZSB0aGUgVVNTUiBzdGFydGluZyBhIG5ldyBnYW1lLCB5b3Ugd291bGQgcGxhY2UgeW91clxuICAgICAgICAgICAgaW5pdGlhbCBpbmZsdWVuY2UgdGhlbiBjb3B5IHRoZSBVUkwgYW5kIHNlbmQgaXQgdG8geW91ciBvcHBvbmVudC4gVGhleVxuICAgICAgICAgICAgd291bGQgZ28gdG8gdGhhdCBVUkwsIHBsYWNlIHRoZWlyIGluZmx1ZW5jZSBhbmQgc2VuZCB0aGUgbmV3IFVSTCBiYWNrIHRvIHlvdS4gTGF0aGVyLCByaW5zZSwgcmVwZWF0LlwiXG4gICAgICAgIF1cbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3JvdycsIFtcbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJJbnN0cnVjdGlvbnNcIlxuICAgICAgICAgIFIucCB7fSwgXCJUbyBhZGQvcmVtb3ZlIGluZmx1bmNlIGluIGEgY291bnRyeSwgY2xpY2sgaW4gdGhlIHRvcC9ib3R0b20gb2YgdGhlIGluZmx1ZW5jZSBzcGFjZSBvbiB0aGUgZGVzaXJlZCBzaWRlIChVU0Egb24gbGVmdCwgVVNTUiBvbiByaWdodCkuXCJcbiAgICAgICAgICBSLnAge30sIFwiVG8gdW5kby9yZWRvIG9uZSBvciBtb3JlIGFjdGlvbnMsIHByZXNzIFovWSBvbmUgb3IgbW9yZSB0aW1lcy5cIlxuICAgICAgICAgIFIucCB7fSwgXCJUaGUgZGljZSBjYW4gYmUgcm9sbGVkIGluZGl2aWR1YWxseSBieSBjbGlja2luZyBvbiB0aGVtLCBvciBhcyBhIHBhaXIgYnkgY2xpY2tpbmcgb24gXFxcIlJPTEwgRElDRVxcXCIuXCJcbiAgICAgICAgICBSLnAge30sIFwiRWFjaCBzdXBlcnBvd2VyIGJveCAoVVNBLCBVU1NSKSBzaG93cyB0aGUgbnVtYmVyIG9mIGNvbnRyb2xsZWQgYmF0dGxlZ3JvdW5kIGNvdW50cmllcyBvbiB0b3AuIE9uIHRoZSBib3R0b20gaXQgc2hvd3MgdGhlIG51bWJlciBvZiByZWdpb25zIGluIHdoaWNoIHRoZSBwb3dlciBoYXMgcHJlc2VuY2UsIGRvbWluYXRpb24sIGFuZCBjb250cm9sLiBGb3IgZXhhbXBsZSwgaWYgdGhlIFVTU1IgaGFkIFxcXCI0IDIgMVxcXCIsIGl0IHdvdWxkIG1lYW4gdGhhdCB0aGV5IGhhdmUgcHJlc2VuY2UgaW4gNCByZWdpb25zLCBkb21pbmF0ZSAyLCBhbmQgY29udHJvbCAxLlwiXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLWxnLTYnLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJLZXlib2FyZCBTaG9ydGN1dHNcIlxuICAgICAgICAgIFIuZGwgY2xhc3NOYW1lOidCb2FyZFBhZ2Utc2hvcnRjdXRzIGNvbC1sZy02JywgXy5yZWR1Y2UgQHByb3BzLnNob3J0Y3V0cy5sZWZ0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgY29sLWxnLTYnLCBfLnJlZHVjZSBAcHJvcHMuc2hvcnRjdXRzLnJpZ2h0LCByZWR1Y2VTaG9ydGN1dHMsIFtdXG4gICAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JyxcbiAgICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsIFtcbiAgICAgICAgICAgICAgUi5oNCB7fSwgXCJJbmZsdWVuY2UgcGxhY2VtZW50IGJ5IGtleWJvYXJkXCJcbiAgICAgICAgICAgICAgUi5kbCBjbGFzc05hbWU6J0JvYXJkUGFnZS1zaG9ydGN1dHMgQm9hcmRQYWdlLXNob3J0Y3V0cy1pcCcsIF8ucmVkdWNlIEBwcm9wcy5zaG9ydGN1dHMuaXAsIHJlZHVjZVNob3J0Y3V0cywgW11cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiBcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFZpZXcnXG4gIFxuICBzdGF0ZUhpc3Rvcnk6IG51bGxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQHN0YXRlSGlzdG9yeSA9IG5ldyBCb2FyZFN0YXRlSGlzdG9yeSBpZDogQHByb3BzLmdhbWVJZFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICB3aWR0aDogMTE0MFxuICAgIGhlaWdodDogNzMwXG4gICAgbm9kZTpcbiAgICAgIHdpZHRoOiA2NlxuICAgICAgaGVpZ2h0OiA1MFxuICAgICAgZ3V0dGVyOiAxNFxuICAgICAgdGl0bGVIZWlnaHQ6IDE2XG4gICAgICB0aXRsZUZvbnRTaXplOiAxMlxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBkZWJ1Z09iajoge31cblxuXG4gIHJlbmRlcjogLT5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFZpZXcnLCBbXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeVZpZXdcbiAgICAgICAgc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5XG4gICAgICAgIGtleTogXCJCb2FyZFN0YXRlSGlzdG9yeS0je0Bwcm9wcy5nYW1lSWR9XCJcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIFtcbiAgICAgICAgQm9hcmQgXy5hc3NpZ24gc3RhdGVIaXN0b3J5OiBAc3RhdGVIaXN0b3J5LCBAcHJvcHNcbiAgICAgICAgQm9hcmRJbmZvIGlkOiBAcHJvcHMuZ2FtZUlkXG4gICAgICAgIFIudGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU6ICdtYXAtcG9zaXRpb24tZGVidWcnXG4gICAgICAgICAgcmVmOidkZWJ1ZydcbiAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoQHN0YXRlLmNvb3JkcywgbnVsbCwgJyAnKVxuICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnXG4gICAgICAgICAgICBoZWlnaHQ6JzYwcmVtJ1xuICAgICAgXVxuICAgIF1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkUGljVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2JvYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyJyxcbiAgICAgICAgUi5oMiB7fSwgJ0JvYXJkJ1xuICAgICAgUi5hIGhyZWY6Jy9pbWFnZXMvdHNib2FyZC5qcGcnLFxuICAgICAgICBSLmltZyBjbGFzc05hbWU6ICdmbHVpZCcsIHNyYzonL2ltYWdlcy90c2JvYXJkLmpwZydcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmxpYnMgPSByZXF1aXJlICcuLi9saWJzJ1xuXG5tb2R1bGUuZXhwb3J0cyAgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0NhcmRWaWV3J1xuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIEBmbG9hdGluZ0NhcmRcbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAaGFuZGxlS2V5UHJlc3NcbiAgICBAZ2V0U3RyYXRlZ3koKVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgIHdpbmRvdy5vbmtleXByZXNzID0gbnVsbFxuICAgICQod2luZG93KS5vZmYgJ3Njcm9sbCcsIEBmbG9hdGluZ0NhcmRcbiAgICAkKHdpbmRvdykub2ZmICdyZXNpemUnLCBAZmxvYXRpbmdDYXJkXG4gICAgJChkb2N1bWVudCkub2ZmICdrZXlwcmVzcycsIEBoYW5kbGVLZXlQcmVzc1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogLT5cbiAgICBAZ2V0U3RyYXRlZ3koKVxuICAgICNAc2V0V2luZG93S2V5cHJlc3NIYW5kbGVyKClcblxuICBmbG9hdGluZ0NhcmQ6IC0+XG4gICAgJGhlYWRlciA9ICQgQHJlZnMuaGVhZGVyLmdldERPTU5vZGUoKVxuICAgICRpbWcgPSAkIEByZWZzLmNhcmRJbWcuZ2V0RE9NTm9kZSgpXG4gICAgJHdpbiA9ICQgd2luZG93XG4gICAgaG8gPSAkaGVhZGVyLm9mZnNldCgpXG4gICAgaXNTY3JvbGxpbmcgPSAkd2luLnNjcm9sbFRvcCgpID4gaG8udG9wICsgaG8uaGVpZ2h0XG4gICAgJGltZy50b2dnbGVDbGFzcyAnY2FyZC1pbWctc2Nyb2xsJywgaXNTY3JvbGxpbmdcbiAgICAkaW1nLmNzcyAncmlnaHQnLCBcIiN7KCR3aW4ud2lkdGgoKSAtIGhvLndpZHRoIC0gMTUpIC8gMn1weFwiXG5cbiAgaGFuZGxlS2V5UHJlc3M6IChldikgLT5cbiAgICAgIGtDID0gZXYua2V5Q29kZVxuICAgICAgaWYga0MgPT0gMTA0IG9yIGtDID09IDcyXG4gICAgICAgIGlkID0gQHByb3BzLnByZXZDYXJkLmlkXG4gICAgICBpZiBrQyA9PSAxMDggb3Iga0MgPT0gNzZcbiAgICAgICAgaWQgPSBAcHJvcHMubmV4dENhcmQuaWRcbiAgICAgIGlmIGlkP1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIiMvY2FyZC8je2lkfVwiXG5cbiAgZ2V0U3RyYXRlZ3k6IC0+XG4gICAgQHJlZnMuY2FyZFN0cmF0ZWd5LmdldERPTU5vZGUoKS5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBkYXRhLi4uPC9wPidcbiAgICAkLmdldCBcIi9kYXRhL2NhcmRTdHJhdGVneUxpbmtlZC8je2xpYnMuemVyb1BhZChAcHJvcHMuY2FyZC5pZCl9Lmh0bWxcIiwgKGRhdGEpPT5cbiAgICAgIEByZWZzLmNhcmRTdHJhdGVneS5nZXRET01Ob2RlKCkuaW5uZXJIVE1MID0gZGF0YVxuXG4gIHJlbmRlcjogLT5cbiAgICBjYXJkID0gQHByb3BzLmNhcmRcbiAgICBpbWFnZVVybCA9IFwiL2ltYWdlcy9jYXJkcy8je2xpYnMuemVyb1BhZChjYXJkLmlkKX0uanBnXCJcbiAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkVmlldycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ3BhZ2UtaGVhZGVyIGNsZWFyZml4JywgcmVmOiAnaGVhZGVyJyxcbiAgICAgICAgUi5oMiBjbGFzc05hbWU6IGxpYnMuY2FyZENsYXNzTmFtZShjYXJkKSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtb3BzJywgaWYgY2FyZC5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBjYXJkLm9wc1xuICAgICAgICAgIFwiI3tjYXJkLnRpdGxlfSBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6J2NhcmQtaWQnLCBcIiMje2NhcmQuaWR9XCJcbiAgICAgICAgXVxuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkLW5hdicsIFtcbiAgICAgICAgICBSLmEge2hyZWY6XCIjL2NhcmQvI3tAcHJvcHMucHJldkNhcmQuaWR9XCIsIGNsYXNzTmFtZTonY2FyZC1uYXYtcHJldid9LCBbXG4gICAgICAgICAgICBcIiN7QHByb3BzLnByZXZDYXJkLnRpdGxlfVwiXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnY2FyZC1uYXYtbGFiZWwnLCBbXG4gICAgICAgICAgICAgIFIuc21hbGwge30sICfil4AgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEgpJ1xuICAgICAgICAgICAgICAnIHByZXYnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuYSB7aHJlZjpcIiMvY2FyZC8je0Bwcm9wcy5uZXh0Q2FyZC5pZH1cIiwgY2xhc3NOYW1lOidjYXJkLW5hdi1uZXh0J30sIFtcbiAgICAgICAgICAgIFwiI3tAcHJvcHMubmV4dENhcmQudGl0bGV9XCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLW5hdi1sYWJlbCcsIFtcbiAgICAgICAgICAgICAgJ25leHQgJ1xuICAgICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnc2hvcnRjdXQnLCAnKEwpJ1xuICAgICAgICAgICAgICBSLnNtYWxsIHt9LCAnIOKWtidcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIFIucCB7Y2xhc3NOYW1lOiAncHVsbC1sZWZ0IGNhcmQtYm9keSd9LCBjYXJkLnRleHRcbiAgICAgIFIuaW1nIGtleTogaW1hZ2VVcmwsIHNyYzogaW1hZ2VVcmwsIGNsYXNzTmFtZTogJ2ltZ1JpZ2h0JywgcmVmOidjYXJkSW1nJ1xuICAgICAgUi5kaXYge2NsYXNzTmFtZTogJ2NhcmQtc3RyYXRlZ3knLCBpZDogJ2NhcmQtc3RyYXRlZ3knfSwgW1xuICAgICAgICBSLmgzIHt9LCBbXG4gICAgICAgICAgJ1N0cmF0ZWdpYyBOb3RlcyBmcm9tJ1xuICAgICAgICAgICcgJ1xuICAgICAgICAgIFIuYSBocmVmOmNhcmQudXJsLCAnVHdpbGlnaHRTdHJhdGVneS5jb20nXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgcmVmOidjYXJkU3RyYXRlZ3knLFxuICAgICAgICAgIFIucCB7fSwgJ0xvYWRpbmcgZGF0YSdcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxubGlicyA9IHJlcXVpcmUgJy4uL2xpYnMnXG5cbkNhcmRMaXN0ID0gcmVxdWlyZSAnLi4vdmlld3MvQ2FyZExpc3QnXG5cbmlkc0Zyb21XR1IgPSAoaWRzPVtdKS0+XG4gIGlkcy5tYXAgKGlkKS0+XG4gICAgc3dpdGNoIGlkXG4gICAgICB3aGVuIDM1IHRoZW4gODFcbiAgICAgIHdoZW4gOTggdGhlbiA5OVxuICAgICAgd2hlbiA5OSB0aGVuIDEwMFxuICAgICAgd2hlbiAxMDAgdGhlbiAzNVxuICAgICAgd2hlbiAxMDEgdGhlbiAxMDJcbiAgICAgIHdoZW4gMTAyIHRoZW4gMTAzXG4gICAgICB3aGVuIDEwNyB0aGVuIDExMFxuICAgICAgd2hlbiAxMDkgdGhlbiA5OFxuICAgICAgd2hlbiAxMTAgdGhlbiAxMDRcbiAgICAgIHdoZW4gMTExIHRoZW4gMTA5XG4gICAgICB3aGVuIDExMiB0aGVuIDEwN1xuICAgICAgZWxzZSBpZFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdDYXJkc1ZpZXcnXG4gIGRlZmF1bHRTdGF0ZTogKHByb3BzKS0+XG4gICAgZmlsdGVyID0gcHJvcHM/LnN0YXRlPy5maWx0ZXJcbiAgICBmdWxsVGV4dDogaWYgZmlsdGVyIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG4gICAgY2FyZEltZzogZmFsc2VcbiAgICBjYXJkRmlsdGVySW5wdXQ6IGlmIGZpbHRlciB0aGVuIGZpbHRlci5qb2luKCcgJykgZWxzZSAnJ1xuICAgIHNvcnQ6ICdzdGFnZSdcbiAgICBmaWx0ZXI6IG51bGxcbiAgICB2aWV3OiAnaW1nJ1xuICAgIGZpbHRlcklzV0dSOiBmYWxzZVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0UHJvcHMpIC0+XG4gICAgaWYgbmV4dFByb3BzLnN0YXRlP1xuICAgICAgQHNldFN0YXRlIG5leHRQcm9wcy5zdGF0ZVxuICAgIGVsc2VcbiAgICAgIEBzZXRTdGF0ZSBAZGVmYXVsdFN0YXRlKClcblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgXy5tZXJnZSBAZGVmYXVsdFN0YXRlKEBwcm9wcyksIEBwcm9wcy5zdGF0ZVxuXG4gIGdldEZpbHRlcklkczogKCkgLT5cbiAgICBpZiBAc3RhdGU/LmZpbHRlcj9cbiAgICAgIGZpbHRlcklkcyA9IEBzdGF0ZS5maWx0ZXIuc29ydChsaWJzLnNvcnROdW1lcmljYWwpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJUcnV0aHkpXG4gICAgICAgIC5maWx0ZXIobGlicy5maWx0ZXJVbmlxdWUpXG4gICAgaWYgbm90IGZpbHRlcklkcz8gdGhlbiBmaWx0ZXJJZHMgPSBbXVxuICAgIHJldHVybiBmaWx0ZXJJZHNcblxuICAjIEp1c3QgZmlsdGVyaW5nIGJ5IGlkIHJpZ2h0IG5vd1xuICBnZXRGaWx0ZXJlZENhcmRzOiAtPlxuICAgIGlmIEBzdGF0ZS5maWx0ZXI/XG4gICAgICByZXR1cm4gQHByb3BzLmNhcmRzLmZpbHRlciAoZWwpID0+XG4gICAgICAgIGlmIGVsLmlkIGluIEBzdGF0ZS5maWx0ZXJcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICBAcHJvcHMuY2FyZHNcbiAgICAgICAgXG5cbiAgZmlsdGVyQW5kU29ydENhcmRzOiAtPlxuICAgIGNhcmRzID0gQGdldEZpbHRlcmVkQ2FyZHMoKVxuICAgIFtzb3J0LCBvcmRlcl0gPSBAc3RhdGUuc29ydC5zcGxpdCAnLSdcblxuICAgIHNvcnRQYXJhbSA9IHN3aXRjaCBzb3J0XG4gICAgICB3aGVuICd0ZXh0bGVuJyB0aGVuIChlbCkgLT4gZWwudGV4dC5sZW5ndGhcbiAgICAgIHdoZW4gJ3NpZGUnIHRoZW4gWydvd25lcicsJ3N0YWdlJywnaWQnXVxuICAgICAgd2hlbiAnb3BzJyB0aGVuICdvcHMnXG4gICAgICB3aGVuICd0aXRsZWxlbicgdGhlbiAoZWwpIC0+IGVsLnRpdGxlLmxlbmd0aFxuICAgICAgZWxzZSBbJ3N0YWdlJywgJ2lkJ11cbiAgICBjYXJkcyA9IF8uc29ydEJ5IGNhcmRzLCBzb3J0UGFyYW1cblxuICAgIGlmIG9yZGVyID09ICdyZXYnXG4gICAgICBjYXJkcy5yZXZlcnNlKClcblxuICAgIGNhcmRzXG5cbiAgZ3JvdXBDYXJkczogKGNhcmRzID0gQGZpbHRlckFuZFNvcnRDYXJkcygpKS0+XG4gICAgaWYgQHN0YXRlLmZpbHRlcj9cbiAgICAgIHJldHVybiBbY2FyZHNdXG5cbiAgICBzb3J0ID0gQHN0YXRlLnNvcnRcbiAgICBpZiBzb3J0ID09ICdzaWRlJ1xuICAgICAgc29ydCA9ICdvd25lcidcbiAgICBpZiBAc3RhdGUuc29ydFxuICAgICAgcmV0dXJuIF8uZ3JvdXBCeShjYXJkcywgc29ydClcbiAgICAgICAgIFxuXG4gIGhhbmRsZUZ1bGxUZXh0OiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgZnVsbFRleHQ6IEByZWZzLmZ1bGxUZXh0LmdldERPTU5vZGUoKS5jaGVja2VkXG5cbiAgaGFuZGxlQ2FyZEltZzogLT5cbiAgICBAc2V0U3RhdGVcbiAgICAgIGNhcmRJbWc6IEByZWZzLmNhcmRJbWcuZ2V0RE9NTm9kZSgpLmNoZWNrZWRcblxuICBoYW5kbGVDYXJkRmlsdGVyQ2hhbmdlOiAtPlxuICAgIHZhbHVlID0gQHJlZnMuY2FyZEZpbHRlci5nZXRET01Ob2RlKCkudmFsdWVcbiAgICAjIElmIFdHUiB0aGVuIHdlIGhhdmUgdG8gdHJhbnNsYXRlIHNvbWUgaWRzXG4gICAgaXNXR1IgPSB2YWx1ZS5zZWFyY2goLyMuKjovKSAhPSAtMVxuXG4gICAgIyBXR1IgYWRkcyBcIk9wcyAzOiAuLi5cIiwgc28gZG9uJ3QgcGljayB0aG9zZSB1cFxuICAgICMgQnV0IHN0aWxsIHBpY2sgdXAgdGhlIHNjb3JpbmcgY2FyZHNcbiAgICBpZHMgPSB2YWx1ZS5tYXRjaCgvXFxkK1teOl18XFxkKyR8I1xcZDovZyk/Lm1hcCAoZWwpLT5cbiAgICAgICMgU3RyaXAgb3V0IGFueSBub24tZGlnaXQgY2hhcnNcbiAgICAgIGVsID0gZWwucmVwbGFjZSAvXFxEL2csICcnXG4gICAgICBwYXJzZUludCBlbCwgMTBcbiAgICBpZiB2YWx1ZSA9PSAnJyBvciBub3QgaWRzP1xuICAgICAgc3RhdGUgPVxuICAgICAgICBjYXJkRmlsdGVySW5wdXQ6IHZhbHVlXG4gICAgICAgIGZpbHRlcjogbnVsbFxuICAgIGVsc2VcbiAgICAgIGlmIGlzV0dSXG4gICAgICAgIGlkcyA9IGlkc0Zyb21XR1IgaWRzXG4gICAgICBpZHMgPSBpZHMuc29ydChsaWJzLnNvcnROdW1lcmljYWwpLmZpbHRlcihsaWJzLmZpbHRlclZhbGlkQ2FyZElkcylcbiAgICAgIHN0YXRlID1cbiAgICAgICAgY2FyZEZpbHRlcklucHV0OiB2YWx1ZVxuICAgICAgICBmdWxsVGV4dDogdHJ1ZVxuICAgICAgICBmaWx0ZXI6IGlkc1xuXG4gICAgQHNldFN0YXRlIHN0YXRlXG5cbiAgIyBGb3JtYXQgdGhlIGlucHV0IGZpZWxkIHRvIGJlIGp1c3QgdGhlIGlkcyBvbiBibHVyXG4gIGhhbmRsZUNhcmRGaWx0ZXJCbHVyOiAtPlxuICAgIGZpbHRlcklkcyA9IEBnZXRGaWx0ZXJJZHMoKVxuXG4gICAgQHNldFN0YXRlXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6IGZpbHRlcklkcy5qb2luICcgJ1xuXG4gICAgaWYgZmlsdGVySWRzPyBhbmQgZmlsdGVySWRzLmxlbmd0aCA+IDBcbiAgICAgIGxpYnMucXMuc2V0ICdmaWx0ZXInLCBmaWx0ZXJJZHNcbiAgICBlbHNlXG4gICAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIGhhbmRsZUNhcmRGaWx0ZXJDbGVhcjogKCktPlxuICAgIEByZWZzLmNhcmRGaWx0ZXIuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJydcbiAgICBAc2V0U3RhdGVcbiAgICAgIGZpbHRlcjpudWxsXG4gICAgICBjYXJkRmlsdGVySW5wdXQ6ICcnXG5cbiAgICBsaWJzLnFzLmRlbGV0ZSAnZmlsdGVyJ1xuXG4gIHNvcnRHcm91cFRpdGxlOiAoc29ydCA9IEBzdGF0ZS5zb3J0LCB2YWwpLT5cbiAgICB2YWxJbnQgPSBwYXJzZUludCB2YWwsIDEwXG4gICAgc3dpdGNoIHNvcnRcbiAgICAgIHdoZW4gJ29wcydcbiAgICAgICAgcyA9IGlmIHZhbEludCA+IDEgdGhlbiAncycgZWxzZSAnJ1xuICAgICAgICBpZiB2YWxJbnQgPT0gMCB0aGVuICdTY29yaW5nJyBlbHNlIFwiI3t2YWx9IE9wI3tzfVwiXG4gICAgICB3aGVuICdzaWRlJ1xuICAgICAgICBpZiB2YWwgPT0gJ3VzJ1xuICAgICAgICAgICdVU0EnXG4gICAgICAgIGVsc2UgaWYgdmFsID09ICduZXV0cmFsJ1xuICAgICAgICAgICdOZXV0cmFsJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgIHdoZW4gJ3N0YWdlJ1xuICAgICAgICBzd2l0Y2ggdmFsSW50XG4gICAgICAgICAgd2hlbiAxIHRoZW4gJ0Vhcmx5IFdhcidcbiAgICAgICAgICB3aGVuIDIgdGhlbiAnTWlkIFdhcidcbiAgICAgICAgICB3aGVuIDMgdGhlbiAnTGF0ZSB3YXInXG5cbiAgaGFuZGxlVmlld0NsaWNrOiAodmlldyktPlxuICAgIEBzZXRTdGF0ZSB7IHZpZXcgfVxuICAgIGxpYnMucXMuc2V0ICd2aWV3Jywgdmlld1xuXG4gIHJlbmRlcjogLT5cbiAgICBzb3J0TGluayA9IChzb3J0LCBkaXNwbGF5KSA9PlxuICAgICAgY2xhc3NOYW1lID0gY3ggYWN0aXZlOiBAc3RhdGUuc29ydCA9PSBzb3J0XG4gICAgICByZWYgPSBcIiN7c29ydH1Tb3J0XCJcbiAgICAgIG9uQ2xpY2sgPSAoKS0+XG4gICAgICAgIGxpYnMucXMuc2V0ICdzb3J0Jywgc29ydFxuICAgICAgUi5hIHtvbkNsaWNrLCByZWYsIGNsYXNzTmFtZX0sIGRpc3BsYXlcblxuICAgIGNhcmRzID0gQGdyb3VwQ2FyZHMgQGZpbHRlckFuZFNvcnRDYXJkcygpXG5cbiAgICBjYXJkTGlzdHMgPSBfLm1hcCBjYXJkcywgKGNhcmRzLCB2YWwpPT5cbiAgICAgIGNhcmRMaXN0SGVhZGluZyA9IG51bGxcbiAgICAgIGlmIG5vdCBAc3RhdGUuZmlsdGVyP1xuICAgICAgICBjYXJkTGlzdEhlYWRpbmcgPSBSLmgyIGNsYXNzTmFtZTonY2FyZExpc3QtZ3JvdXBIZWFkaW5nJyxcbiAgICAgICAgICBAc29ydEdyb3VwVGl0bGUgQHN0YXRlLnNvcnQsIHZhbFxuICAgICAgUi5kaXYge30sIFtcbiAgICAgICAgY2FyZExpc3RIZWFkaW5nXG4gICAgICAgIENhcmRMaXN0XG4gICAgICAgICAgY2FyZEltZzogQHN0YXRlLmNhcmRJbWdcbiAgICAgICAgICBmdWxsVGV4dDogQHN0YXRlLmZ1bGxUZXh0XG4gICAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICAgICAgdmlldzogQHN0YXRlLnZpZXdcbiAgICAgIF1cblxuICAgIGNhcmRzVmlld0NsYXNzID0gY3hcbiAgICAgICdjYXJkc1ZpZXcnOiB0cnVlXG4gICAgICAnY2FyZHNWaWV3LS1maWx0ZXJlZCc6IEBzdGF0ZS5maWx0ZXI/XG4gICAgICAnY2FyZHNWaWV3LS1mdWxsVGV4dCc6IEBzdGF0ZS5mdWxsVGV4dFxuXG4gICAgUi5kaXYgY2xhc3NOYW1lOiBjYXJkc1ZpZXdDbGFzcywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncGFnZS1oZWFkZXIgcm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wtbWQtNicsIFtcbiAgICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjYXJkQ29udHJvbHMnLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbGFiZWwnLCAnU29ydCBieTonXG4gICAgICAgICAgICBzb3J0TGluayAnc3RhZ2UnLCAnU3RhZ2UnXG4gICAgICAgICAgICBzb3J0TGluayAnb3BzJywgJ09wcydcbiAgICAgICAgICAgIHNvcnRMaW5rICdzaWRlJywgJ1NpZGUnXG4gICAgICAgICAgXVxuICAgICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmRDb250cm9scycsIFtcbiAgICAgICAgICAgIFIubGFiZWwge2h0bWxGb3I6JycsIGNsYXNzTmFtZTonJ30sICdWaWV3OiAnXG4gICAgICAgICAgICBSLmlcbiAgICAgICAgICAgICAgb25DbGljazogQGhhbmRsZVZpZXdDbGljay5iaW5kIG51bGwsICdpbWcnXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZCBpbWFnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImljb24tdGgtbGFyZ2UgI3tpZiBAc3RhdGUudmlldyA9PSAnaW1nJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RpdGxlJ1xuICAgICAgICAgICAgICB0aXRsZTogJ1RpdGxlIGFuZCBvcHMnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpY29uLXRoICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RpdGxlJyB0aGVuICdhY3RpdmUnIGVsc2UgJyd9XCJcbiAgICAgICAgICAgIFIuaVxuICAgICAgICAgICAgICBvbkNsaWNrOiBAaGFuZGxlVmlld0NsaWNrLmJpbmQgbnVsbCwgJ3RleHQnXG4gICAgICAgICAgICAgIHRpdGxlOiAnRnVsbCB0ZXh0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaWNvbi1hbGlnbi1sZWZ0ICN7aWYgQHN0YXRlLnZpZXcgPT0gJ3RleHQnIHRoZW4gJ2FjdGl2ZScgZWxzZSAnJ31cIlxuICAgICAgICAgICAgI1IuaW5wdXRcbiAgICAgICAgICAgICAgI25hbWU6ICdmdWxsVGV4dCdcbiAgICAgICAgICAgICAgI2lkOiAnZnVsbFRleHQnXG4gICAgICAgICAgICAgICN0eXBlOidjaGVja2JveCdcbiAgICAgICAgICAgICAgI3JlZjonZnVsbFRleHQnXG4gICAgICAgICAgICAgICNvbkNoYW5nZTogQGhhbmRsZUZ1bGxUZXh0XG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuZnVsbFRleHRcbiAgICAgICAgICAgICNcIiBcIlxuICAgICAgICAgICAgI1IubGFiZWwge2h0bWxGb3I6J2Z1bGxUZXh0JywgY2xhc3NOYW1lOidjYXJkLXNob3ctdGV4dC1sYWJlbCd9LCAnU2hvdyBjYXJkIHRleHQnXG4gICAgICAgICAgICAjXCIgXCJcbiAgICAgICAgICAgICNSLmlucHV0XG4gICAgICAgICAgICAgICNuYW1lOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI2lkOiAnY2FyZEltZydcbiAgICAgICAgICAgICAgI3R5cGU6J2NoZWNrYm94J1xuICAgICAgICAgICAgICAjcmVmOidjYXJkSW1nJ1xuICAgICAgICAgICAgICAjb25DaGFuZ2U6IEBoYW5kbGVDYXJkSW1nXG4gICAgICAgICAgICAgICNjaGVja2VkOiBAc3RhdGUuY2FyZEltZ1xuICAgICAgICAgICAgI1wiIFwiXG4gICAgICAgICAgICAjUi5sYWJlbCB7aHRtbEZvcjonY2FyZEltZycsIGNsYXNzTmFtZTonY2FyZC1zaG93LXRleHQtbGFiZWwnfSwgJ1Nob3cgY2FyZCBpbWFnZSdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY2FyZHMtZmlsdGVyLWJ5LWlkIGNvbC1tZC02JywgW1xuICAgICAgICAgIFIubGFiZWwgaHRtbEZvcjonY2FyZEZpbHRlcicsIGNsYXNzTmFtZTonY2FyZEZpbHRlci1sYWJlbCcsIFwiRmlsdGVyIGJ5IGlkcyBcIlxuICAgICAgICAgIFIuaW5wdXRcbiAgICAgICAgICAgIG5hbWU6ICdjYXJkRmlsdGVyJ1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkRmlsdGVyLWlucHV0J1xuICAgICAgICAgICAgcmVmOiAnY2FyZEZpbHRlcidcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBAaGFuZGxlQ2FyZEZpbHRlckNoYW5nZVxuICAgICAgICAgICAgb25CbHVyOiBAaGFuZGxlQ2FyZEZpbHRlckJsdXJcbiAgICAgICAgICAgIHZhbHVlOiBAc3RhdGUuY2FyZEZpbHRlcklucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3RlIGZyb20gV2FyZ2FtZXJvb20gb3IgZW50ZXIgaWRzJ1xuICAgICAgICAgIFIuYSB7Y2xhc3NOYW1lOidjYXJkcy1maWx0ZXItYnktaWQtY2xlYXInLCBvbkNsaWNrOkBoYW5kbGVDYXJkRmlsdGVyQ2xlYXJ9LCAnY2xlYXInXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICAgIGNhcmRMaXN0c1xuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDb3VudHJpZXNWaWV3ICdcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvdW50cmllc1ZpZXcnLCBbXG4gICAgICBSLmgyIHt9LCAnQ291bnRyaWVzJ1xuICAgIF1cblxuXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdIb21lVmlldydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ0hvbWVWaWV3JywgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAncm93JywgW1xuICAgICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wteHMtMTInLCBbXG4gICAgICAgICAgUi5oMSBjbGFzc05hbWU6ICd0ZXh0LWNlbnRlcicsIFtcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidHdpIG93bmVyLXVzXCIsIFwiVHdpXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwic3RydWcgb3duZXItdXNzclwiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG4gICAgICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCBibHVyYicsIFtcbiAgICAgICAgICAgIFwiVHdpU3RydWcgaXMgYSBjb21wYW5pb24gYXBwbGljYXRpb24gZm9yIFwiXG4gICAgICAgICAgICBSLmEgaHJlZjpcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHdpbGlnaHRfU3RydWdnbGVcIiwgXCJUd2lsaWdodCBTdHJ1Z2dsZVwiXG4gICAgICAgICAgICBcIi4gSXQgd291bGQgbm90IGV4aXN0IHdpdGhvdXQgXCJcbiAgICAgICAgICAgIFIuYSBocmVmOiBcImh0dHA6Ly90d2lsaWdodHN0cmF0ZWd5LmNvbVwiLCBcIlR3aWxpZ2h0IFN0cmF0ZWd5XCJcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdyb3cnLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbC1tZC02JywgW1xuICAgICAgICAgIFIuYSBjbGFzc05hbWU6ICdob21lLWxpbmsnLCBocmVmOiAnIy9ib2FyZCcsIFtcbiAgICAgICAgICAgIFIuaDMge30sICdWaXJ0dWFsIEJvYXJkJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtYm9hcmQuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRnVsbHkgcGxheWFibGUgYm9hcmQgLSBqdXN0IGFkZCBjYXJkcydcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnY29sLW1kLTYnLCBbXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogJ2hvbWUtbGluayBob21lLWxpbmstY2FyZHMnLCBocmVmOiAnIy9jYXJkcycsIFtcbiAgICAgICAgICAgIFIuaDMge30sICdWaWV3IENhcmRzJ1xuICAgICAgICAgICAgUi5pbWcgY2xhc3NOYW1lOiAnaW1nLXJlc3BvbnNpdmUnLCBzcmM6ICcvaW1hZ2VzL2hvbWUtY2FyZHMuanBnJ1xuICAgICAgICAgICAgUi5wIHt9LCAnRXhwbG9yZSB0aGUgY2FyZHMgb2YgVHdpbGlnaHQgU3RydWdnbGUnXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXVxuXG4iLCJSID0gUmVhY3QuRE9NXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdXaG9vcHNWaWV3J1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYge30sIFtcbiAgICAgIFIuaDIge30sIFwiREVGQ09OIDFcIlxuICAgICAgUi5wIGNsYXNzTmFtZTonbGVhZCcsIFtcbiAgICAgICAgXCJMb29rcyBsaWtlIFR3aVN0cnVnIHRyaWdnZXJlZCBudWNsZWFyIHdhci4gV0hPT1BTSUUgREFJU1khXCJcbiAgICAgICAgUi5iciB7fVxuICAgICAgICBSLmEgaHJlZjpcIiMvY2FyZHNcIiwgXCJIb3cgYWJvdXQgbG9va2luZyBvdmVyIHRoZSBjYXJkcz9cIlxuICAgICAgXVxuICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iLCJsaWJzID0gcmVxdWlyZSAnLi9saWJzJ1xudmVudCA9IHJlcXVpcmUgJy4vdmVudCdcbm1hcERhdGEgPSByZXF1aXJlICcuLi9hcHAvZGF0YS9tYXAtZGF0YS5qc29uJ1xub25lTGV0dGVyQ29udGluZW50Q29kZSA9IHJlcXVpcmUgJy4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuXG5zZXRSb3V0ZU9yaWdpbmFsID0gUm91dGVyOjpzZXRSb3V0ZVxuUm91dGVyOjpzZXRSb3V0ZSA9IC0+XG4gIEBjdXJyZW50Um91dGUgPSBAZ2V0Um91dGUoKVxuICBzZXRSb3V0ZU9yaWdpbmFsLmFwcGx5IHRoaXMsIGFyZ3VtZW50c1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICByb3V0ZXI6IG5ldyBSb3V0ZXJcblxuICAjIFRha2VzIGEgdmlldyBuYW1lIGFuZCBhc3NvY2lhdGVkIGRhdGFcbiAgc2V0VmlldzogKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZT0nJywgZGF0YT17fSkgLT5cbiAgICBpZiBwYWdlVGl0bGU/IHRoZW4gbGlicy5zZXRQYWdlVGl0bGUgcGFnZVRpdGxlXG4gICAgQHNldFN0YXRlXG4gICAgICB2aWV3OiB7bmFtZSwgZGF0YX1cbiAgICAgIG1lbnVBY3RpdmU6IG1lbnVBY3RpdmVcbiAgICAgIHNsaWRlSW46IEBzdGF0ZS52aWV3Py5uYW1lICE9IG5hbWVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBzdGF0ZVJvdXRlID0gKG5hbWUsIHBhZ2VUaXRsZSwgbWVudUFjdGl2ZSwgYXJncyktPlxuICAgICAgc3RhdGUgPSBsaWJzLnFzLnRvT2JqIGFyZ3NcbiAgICAgICMgQ29udmVydCBmaWx0ZXIgaWRzIGZyb20gc3RyIC0+IG51bWJlclxuICAgICAgaWYgc3RhdGU/LmZpbHRlcj9cbiAgICAgICAgaWYgbm90IF8uaXNBcnJheSBzdGF0ZS5maWx0ZXJcbiAgICAgICAgICBzdGF0ZS5maWx0ZXIgPSBbc3RhdGUuZmlsdGVyXVxuICAgICAgICBzdGF0ZS5maWx0ZXIgPSBzdGF0ZS5maWx0ZXIubWFwIChlbCktPlxuICAgICAgICAgIHBhcnNlSW50IGVsLCAxMFxuICAgICAgQHNldFZpZXcgbmFtZSwgcGFnZVRpdGxlLCBtZW51QWN0aXZlLFxuICAgICAgICBzdGF0ZTogc3RhdGVcblxuICAgIHJvdXRlciA9IEBwcm9wcy5yb3V0ZXJcblxuICAgIHZlbnQub24gJ3NldFJvdXRlJywgcm91dGVyLnNldFJvdXRlLmJpbmQgcm91dGVyXG5cbiAgICByb3V0ZXIuY29uZmlndXJlXG4gICAgICBub3Rmb3VuZDogQHNldFZpZXcuYmluZCB0aGlzLCAnd2hvb3BzJywgJ1dob29wcydcbiAgICAgICMnL2JvYXJkJzogQHNldFZpZXcuYmluZCB0aGlzLCAnYm9hcmQnLCAnQm9hcmQnXG5cbiAgICByb3V0ZXIub24gJy8nLCBAc2V0Vmlldy5iaW5kIHRoaXMsICdob21lJywgJ0hvbWUnXG5cblxuICAgIHJvdXRlci5vbiAnL2NhcmQvOmlkJywgKGlkKT0+XG4gICAgICBpZCA9IHBhcnNlSW50IGlkLCAxMFxuICAgICAgbmV4dElkID0gaWYgaWQgPT0gMTEwIHRoZW4gMSBlbHNlIGlkICsgMVxuICAgICAgcHJldklkID0gaWYgaWQgPT0gMSB0aGVuIDExMCBlbHNlIGlkIC0gMVxuICAgICAgY2FyZCA9IF8uZmluZCBAcHJvcHMuY2FyZHMsIGlkOiBpZFxuICAgICAgbmV4dENhcmQgPSBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogbmV4dElkXG4gICAgICBwcmV2Q2FyZCA9ICBfLmZpbmQgQHByb3BzLmNhcmRzLCBpZDogcHJldklkXG4gICAgICBwYWdlVGl0bGUgPSBcIiN7Y2FyZC50aXRsZX0gKCMje2NhcmQuaWR9KVwiXG4gICAgICBAc2V0VmlldyAnY2FyZCcsIHBhZ2VUaXRsZSwgJ2NhcmRzJywge2NhcmQsIG5leHRDYXJkLCBwcmV2Q2FyZH1cblxuXG4gICAgcm91dGVyLm9uICcvY291bnRyaWVzJywgQHNldFZpZXcuYmluZCB0aGlzLCAnY291bnRyaWVzJywgJ0NvdW50cmllcycsICdjb3VudHJpZXMnXG5cblxuICAgIHJvdXRlci5vbiAnL2Fib3V0JywgQHNldFZpZXcuYmluZCB0aGlzLCAnYWJvdXQnLCAnQWJvdXQnLCAnYWJvdXQnXG5cblxuICAgIHJvdXRlci5vbiAvY2FyZHNcXD8/KC4qKS8sIHN0YXRlUm91dGUuYmluZCB0aGlzLCAnY2FyZHMnLCAnQ2FyZHMnLCAnY2FyZHMnXG5cblxuICAgIHJvdXRlci5vbiAvYm9hcmRcXC8/KFxcdyopXFwvPyguKikvLCAoZ2FtZUlkLCBpbmNvbWluZ1N0YXRlKT0+XG4gICAgICAjaWYgbm90IGdhbWVJZD8gb3IgZ2FtZUlkID09ICcnXG4gICAgICAgICNyZXR1cm4gcm91dGVyLnNldFJvdXRlIFwiYm9hcmQvI3tNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKX1cIlxuXG4gICAgICBpZiBub3QgZ2FtZUlkPyBvciBnYW1lSWQgPT0gJydcbiAgICAgICAgZ2FtZUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiQm9hcmQgI3tnYW1lSWR9XCIsIFwiIy9ib2FyZC8je2dhbWVJZH1cIlxuXG4gICAgICB7Y291bnRyeVBvc2l0aW9ucywgY291bnRyaWVzLCBsaW5rcywgcmVnaW9uSW5mb05vZGVzfSA9IG1hcERhdGFcblxuICAgICAgI2NvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgI25vZGUueCA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS54XG4gICAgICAgICNub2RlLnkgPSBjb3VudHJ5UG9zaXRpb25zW25vZGUubmFtZV0ueVxuICAgICAgICAjaWYgbm90IG5vZGUuc2hvcnRjdXQ/XG4gICAgICAgICAgI25vZGUuc2hvcnRjdXQgPSBub2RlLnNob3J0bmFtZS5zbGljZSgwLDIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgI25vZGUuZml4ZWQgPSB0cnVlXG4gICAgICAgICNub2RlXG5cbiAgICAgICMgQWRkIHNob3J0Y3V0c1xuICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLm1hcCAobm9kZSktPlxuICAgICAgICAgIG5vZGUueCA9IGNvdW50cnlQb3NpdGlvbnNbbm9kZS5uYW1lXS54XG4gICAgICAgICAgbm9kZS55ID0gY291bnRyeVBvc2l0aW9uc1tub2RlLm5hbWVdLnlcbiAgICAgICAgICBpZiBub3Qgbm9kZS5zaG9ydGN1dD9cbiAgICAgICAgICAgIG5vZGUuc2hvcnRjdXQgPSBub2RlLnNob3J0bmFtZS5zbGljZSgwLDIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBub2RlXG5cbiAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAgKG5vZGUsIGluZGV4LCBjb3VudHJpZXMpLT5cbiAgICAgICAgbm9kZS5zaG9ydGN1dFVuaXF1ZSA9IG5vZGUuc2hvcnRjdXRcbiAgICAgICAgaXNVbmlxdWUgPSB1bmRlZmluZWQgPT0gXy5maW5kIGNvdW50cmllcywgKGMpLT5cbiAgICAgICAgICBpZiBjLmNvbnRpbmVudCA9PSBub2RlLmNvbnRpbmVudFxuICAgICAgICAgICAgaWYgYy5zaG9ydGN1dC5jaGFyQXQoMCkgPT0gbm9kZS5zaG9ydGN1dC5jaGFyQXQoMCkgYW5kIGMuaWQgIT0gbm9kZS5pZFxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgaXNVbmlxdWVcbiAgICAgICAgICBub2RlLnNob3J0Y3V0VW5pcXVlID0gbm9kZS5zaG9ydGN1dC5jaGFyQXQgMFxuICAgICAgICBub2RlXG5cbiAgICAgICAgXG4gICAgICBcbiAgICAgIHJlZ2lvbkluZm9Ob2RlcyA9IHJlZ2lvbkluZm9Ob2Rlcy5tYXAgKG5vZGUpLT5cbiAgICAgICAgbm9kZS5yZWdpb25JbmZvID0gdHJ1ZVxuICAgICAgICBub2RlLmZpeGVkID0gdHJ1ZVxuICAgICAgICBub2RlXG5cbiAgICAgIG5vZGVzID0gXy51bmlvbihjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2RlcylcbiAgICAgIG5vZGVzID0gXy56aXBPYmplY3QgXy5wbHVjayhub2RlcywgJ2lkJyksIG5vZGVzXG5cbiAgICAgIGNvdW50cnlTaG9ydGN1dHMgPSBfLm1hcFZhbHVlcyBfLmdyb3VwQnkobm9kZXMsICdjb250aW5lbnQnKSwgKGNOb2RlcywgY29udGluZW50KS0+XG4gICAgICAgIF8ucGx1Y2sgY05vZGVzLCAnc2hvcnRjdXQnXG4gICAgICBkZWxldGUgY291bnRyeVNob3J0Y3V0cy51c2FcbiAgICAgIGRlbGV0ZSBjb3VudHJ5U2hvcnRjdXRzLnVzc3JcblxuICAgICAgc2hvcnRLZXlzID0gXy5tYXAgXy5rZXlzKGNvdW50cnlTaG9ydGN1dHMpLCAoY1MpLT4gb25lTGV0dGVyQ29udGluZW50Q29kZSBjU1xuICAgICAgY291bnRyeVNob3J0Y3V0cyA9IF8uemlwT2JqZWN0IHNob3J0S2V5cywgXy52YWx1ZXMoY291bnRyeVNob3J0Y3V0cylcblxuICAgICAga2V5ID0gZ2FtZUlkXG5cblxuICAgICAgYm9hcmRQcm9wcyA9IHtcbiAgICAgICAgZ2FtZUlkLCBtYXBEYXRhLCBjb3VudHJpZXMsIHJlZ2lvbkluZm9Ob2RlcywgbGlua3MsIG5vZGVzLFxuICAgICAgICBrZXksIGluY29taW5nU3RhdGUsIGNvdW50cnlTaG9ydGN1dHN9XG5cbiAgICAgIEBzZXRWaWV3ICdib2FyZCcsICdCb2FyZCcsICdib2FyZCcsIGJvYXJkUHJvcHNcblxuXG4gICAgcm91dGVyLmluaXQoJy8nKVxuXG4iLCJNaWNyb0V2ZW50Q2xhc3MgPSByZXF1aXJlICcuL2xpYnMvTWljcm9FdmVudENsYXNzJ1xuY2xhc3MgVmVudCBleHRlbmRzIE1pY3JvRXZlbnRDbGFzc1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBWZW50KClcbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbnN1cGVyU3RhdHMgPSByZXF1aXJlICcuLi9saWJzL3N1cGVyU3RhdHMnXG5yYW5nZWRHYW1lVmFsID0gcmVxdWlyZSAnLi4vbGlicy9yYW5nZWRHYW1lVmFsJ1xuc2lnbmVkTnVtT3JEYXNoID0gcmVxdWlyZSAnLi4vbGlicy9zaWduZWROdW1PckRhc2gnXG5zdGF0ZUVuY29kZXIgPSByZXF1aXJlICcuLi9saWJzL3N0YXRlRW5jb2RlcidcbnVwcGVyRmlyc3QgPSByZXF1aXJlICcuLi9saWJzL3VwcGVyRmlyc3QnXG5vbmVMZXR0ZXJDb250aW5lbnRDb2RlID0gcmVxdWlyZSAnLi4vbGlicy9vbmVMZXR0ZXJDb250aW5lbnRDb2RlJ1xuY29udGluZW50Q29kZUZyb21MZXR0ZXIgPSByZXF1aXJlICcuLi9saWJzL2NvbnRpbmVudENvZGVGcm9tTGV0dGVyJ1xuZmlsdGVyVHJ1dGh5ID0gcmVxdWlyZSAnLi4vbGlicy9maWx0ZXJUcnV0aHknXG5cbkJvYXJkTm9kZSA9IHJlcXVpcmUgJy4vQm9hcmROb2RlJ1xuQm9hcmROb2RlRGl2ID0gcmVxdWlyZSAnLi9Cb2FyZE5vZGVEaXYnXG5Cb2FyZFN0YXR1cyA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0dXMnXG5Cb2FyZExpbmsgPSByZXF1aXJlICcuL0JvYXJkTGluaydcblxuXG5zdXBlcnBvd2VyVG9JbmRleCA9IChzdHIpLT4gaWYgc3RyID09ICd1c2EnIHRoZW4gMCBlbHNlIDFcblxuIyBSZXR1cm5zIGEgc2ltcGxlIHt1c2E6ICdwcmVzZW5jZScsIHVzc3I6ICdkb21pbmF0aW9uJ31cbmdldFJlZ2lvblN0YXR1cyA9IChzdGF0cyktPlxuICBfLm1hcFZhbHVlcyBzdGF0cywgKHN0YXQpLT5cbiAgICByZXR1cm4gJ2NvbnRyb2wnIGlmIHN0YXQuY29udHJvbFxuICAgIHJldHVybiAnZG9taW5hdGlvbicgaWYgc3RhdC5kb21pbmF0aW9uXG4gICAgcmV0dXJuICdwcmVzZW5jZScgaWYgc3RhdC5wcmVzZW5jZVxuICAgIHJldHVybiBmYWxzZVxuXG5cblxuXG5jb250aW5lbnRTaG9ydGN1dERhdGEgPSBbXG4gIHsgY2hhcjogJ0MnLCB4OjEyNywgeToyMDAgfVxuICB7IGNoYXI6ICdTJywgeDoxMjcsIHk6NTEwIH1cbiAgeyBjaGFyOiAnRicsIHg6NTMzLCB5OjU1MCB9XG4gIHsgY2hhcjogJ0UnLCB4OjQ4MCwgeToyMjAgfVxuICB7IGNoYXI6ICdBJywgeDo4NDAsIHk6MTUwIH1cbiAgeyBjaGFyOiAnTScsIHg6ODQwLCB5OjM4MCB9XG5dXG4gIFxuXG4jIFRha2VzIGFuIGlwS2V5U2VxdWVuY2UgYW5kIHJldHVybnMgdGhlIGFwcGxpY2FibGUgY29udGluZW50IGFuZCBjb3VudHJ5XG5jb250Q291bnRyeVNlbGVjdGlvbiA9IChyZWdpb25zLCBjb3VudHJpZXMsIGlwS2V5U2VxID0gJycpLT5cbiAgY29udGluZW50ID0gXy5maW5kIHJlZ2lvbnMsIHtzaG9ydGN1dDogaXBLZXlTZXEuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCl9XG4gIGNvdW50cnkgPSAnJ1xuICBjb3VudHJ5S2V5ID0gaXBLZXlTZXEuc2xpY2UoMiw0KVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAyXG4gICAgY291bnRyeU9iaiA9IF8uZmluZCBjb3VudHJpZXMsIHtzaG9ydGN1dDogY291bnRyeUtleS50b0xvd2VyQ2FzZSgpLCBjb250aW5lbnQ6IGNvbnRpbmVudD8uY29udGluZW50fVxuICAgIGNvdW50cnkgPSBjb3VudHJ5T2JqLnNob3J0bmFtZVxuICBpZiBjb3VudHJ5S2V5Lmxlbmd0aCA9PSAxXG4gICAgY291bnRyeSA9IFwiI3tjb3VudHJ5S2V5LnRvVXBwZXJDYXNlKCl9Li4uXCJcblxuICB7IGNvbnRpbmVudCwgY291bnRyeSB9XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZCdcblxuICBnZXRJbml0aWFsU3RhdGU6IChwcm9wcyA9IEBwcm9wcykgLT5cbiAgICBzdGF0ZUhpc3RvcnkgPSBwcm9wcy5zdGF0ZUhpc3RvcnlcbiAgICBzdGF0ZUhpc3RvcnkubG9hZCgpXG4gICAgc3RhdGUgPSBAaGFuZGxlSW5jb21pbmdTdGF0ZSBwcm9wcy5pbmNvbWluZ1N0YXRlXG4gICAgaWYgbm90IHN0YXRlP1xuICAgICAgc3RhdGUgPSBzdGF0ZUhpc3RvcnkuZ2V0Q3VycmVudCgpPy5zdGF0ZVxuICAgIGlmIG5vdCBzdGF0ZT9cbiAgICAgIGdhbWVTdGF0ZSA9XG4gICAgICAgIGdhbWU6XG4gICAgICAgICAgc2NvcmU6IDBcbiAgICAgICAgICB0dXJuOiAwXG4gICAgICAgICAgcm91bmQ6IDBcbiAgICAgICAgICBkZWZjb246IDVcbiAgICAgICAgICBtaWxvcHM6IFswLDBdXG4gICAgICAgICAgc3BhY2U6IFswLDBdXG4gICAgICAgIGlwczogXy5tYXAgcHJvcHMuY291bnRyaWVzLCAoYyktPiBbYy51c2EsIGMudXNzcl1cblxuICAgICAgbWV0YSA9XG4gICAgICAgIHR5cGU6ICd0dXJuJ1xuICAgICAgICBpZDogJ3R1cm4nXG4gICAgICAgIG5ld0dhbWU6IHRydWVcbiAgICAgICAgbmV3OiAwXG4gICAgICAgIG9sZDowXG5cbiAgICAgIHN0YXRlSGlzdG9yeS5hZGQgZ2FtZVN0YXRlLCBtZXRhXG4gICAgICBzdGF0ZSA9IGdhbWVTdGF0ZVxuXG4gICAgXy5hc3NpZ24gc3RhdGUsXG4gICAgICBpcFNob3dDb3VudHJpZXM6IFtdXG4gICAgICBpcEtleVNlcXVlbmNlOiAnJ1xuICAgICAgaXBTaG93Q29udGluZW50OiAnJ1xuICAgICAgaXBTZXRDb3VudHJ5OiBudWxsXG4gICAgICBpcElQQ2hhbmdlOiBbXVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuUCktPlxuICAgIHN0YXRlID0gQGdldEluaXRpYWxTdGF0ZSBuUFxuICAgIEBzZXRTdGF0ZSBzdGF0ZVxuICAgICNpZiBAcHJvcHMuc3RhdGVIaXN0b3J5LnN0YXRlcy5sZW5ndGggPCAxXG4gICAgICAjQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIHtzdGF0ZUhpc3RvcnksIGdhbWVJZH0gPSBAcHJvcHNcbiAgICAgIFxuICAgICMgV2hlbiBzdGF0ZSBjaGFuZ2VzLCB1cGRhdGUgdGhlIHVybFxuICAgIHN0YXRlSGlzdG9yeS5vbiAnY2hhbmdlJywgPT5cbiAgICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlPyBhbmQgbm90IHN0YXRlLm1ldGEubmV3R2FtZVxuICAgICAgICBzdGF0ZUVuYyA9IHN0YXRlSGlzdG9yeS5lbmNvZGVDdXJyZW50KClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlIG51bGwsIFwiQm9hcmQgI3tnYW1lSWR9XCIsIFwiIy9ib2FyZC8je2dhbWVJZH0vI3tzdGF0ZUVuY31cIlxuXG4gICAgc3RhdGVIaXN0b3J5Lm9uICdnb1RvJywgKHN0YXRlKT0+XG4gICAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcblxuICAgIEBrcEhUID0gXy50aHJvdHRsZSBAa2V5cHJlc3NIYW5kbGVyLCAxMDBcbiAgICBAa3VIVCA9IF8udGhyb3R0bGUgQGtleXVwSGFuZGxlciwgMTAwXG4gICAgQGtkSFQgPSBfLnRocm90dGxlIEBrZXlkb3duSGFuZGxlciwgMTAwXG5cbiAgICAkKGRvY3VtZW50KS5vbiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9uICdrZXl1cCcsIEBrdUhUXG4gICAgJChkb2N1bWVudCkub24gJ2tleWRvd24nLCBAa2RIVFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiAtPlxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5cHJlc3MnLCBAa3BIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5dXAnLCBAa3VIVFxuICAgICQoZG9jdW1lbnQpLm9mZiAna2V5ZG93bicsIEBrZEhUXG5cbiAgaGFuZGxlSW5jb21pbmdTdGF0ZTogKHN0YXRlRW5jb2RlZCA9IEBwcm9wcy5pbmNvbWluZ1N0YXRlKSAtPlxuICAgIGluZGV4ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5maW5kU3RhdGVJbmRleCBzdGF0ZTogc3RhdGVFbmNvZGVkXG4gICAgaWYgaW5kZXg/XG4gICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmdvVG8gaW5kZXhcbiAgICAgIGN1cnJlbnQgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEN1cnJlbnQoKVxuICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhdGVcbiAgICBlbHNlXG4gICAgICBjdXJyZW50ID0gQHByb3BzLnN0YXRlSGlzdG9yeS5nZXRDdXJyZW50KClcbiAgICAgIGlmIHN0YXRlRW5jb2RlZD8gYW5kIHN0YXRlRW5jb2RlZCAhPSAnJyBhbmQgY3VycmVudD8ubWV0YS5zdGF0ZSAhPSBzdGF0ZUVuY29kZWRcbiAgICAgICAgc3RhdGUgPSBzdGF0ZUVuY29kZXIuZGVjb2RlIHN0YXRlRW5jb2RlZFxuICAgICAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmFkZCBzdGF0ZSxcbiAgICAgICAgICB0eXBlOiAnbG9hZCdcbiAgICAgICAgICBpZDogJ2xvYWQnXG4gICAgICAgICAgc3RhdGU6IHN0YXRlRW5jb2RlZFxuICAgICAgICByZXR1cm4gc3RhdGVcblxuXG4gICMgQWRkcyB0aGUgc3RhdGUgdG8gdGhlIGhpc3RvcnlcbiAgIyBUaGlzIGlzIHRvIGF2b2lkIGhhdmluZyB0byBkZWVwLWNoZWNrIHRoZSBzdGF0ZSBpbiBjb21wb25lbnRXaWxsVXBkYXRlXG4gIHNldFN0YXRlSGlzdG9yeTogKHN0YXRlLCBtZXRhKS0+XG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS5hZGQgc3RhdGUsIG1ldGFcbiAgICBAc2V0U3RhdGUgc3RhdGVcblxuICBrZXlwcmVzc0hhbmRsZXI6IChldiktPlxuICAgIGtDID0gZXYua2V5Q29kZVxuICAgIGRpciA9IGlmIGtDID49IDk3IHRoZW4gJ2luYycgZWxzZSAnZGVjJ1xuXG4gICAgaWYgQHN0YXRlLmlwS2V5U2VxdWVuY2UubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlKGtDKVxuXG4gICAgaWYga0MgPT0gMTA1IG9yIGtDID09IDczXG4gICAgICByZXR1cm4gQGlwS2V5U2VxdWVuY2Uga0NcbiAgICAgIHJldHVyblxuXG4gICAgc3dpdGNoIGtDXG4gICAgICAjIChjL0MpIERpY2VcbiAgICAgIHdoZW4gOTksIDY3XG4gICAgICAgIEByZWZzLkJvYXJkU3RhdHVzLnJvbGxEaWNlKClcblxuICAgICAgIyBIaXN0b3J5XG4gICAgICAjLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHovWikgVW5kb1xuICAgICAgd2hlbiAxMjIsIDkwXG4gICAgICAgIEB1bmRvSGlzdCgpXG4gICAgICAjICh5L1kpIFJlZG9cbiAgICAgIHdoZW4gMTIxLCA4OVxuICAgICAgICBAcmVkb0hpc3QoKVxuICAgICAgIyAoaC9IKSBIaXN0b3J5IHNob3cvaGlkZVxuICAgICAgd2hlbiAxMDQsIDcyXG4gICAgICAgIEB0b2dnbGVIaXN0KClcblxuICAgICAgIyBHYW1lIHByb3BlcnRpZXNcbiAgICAgICMtLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICMgKHQvVCkgVHVybiBpbmMvZGVjXG4gICAgICB3aGVuIDExNiwgODRcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICd0dXJuJywgZGlyXG4gICAgICAjIChyL1IpIFJvdW5kIGluYy9kZWNcbiAgICAgIHdoZW4gMTE0LCA4MlxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3JvdW5kJywgZGlyXG4gICAgICAjIChTL3MpIFNjb3JlIGluYy9kZWNcbiAgICAgIHdoZW4gMTE1LCA4M1xuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3Njb3JlJywgZGlyXG4gICAgICAjIChEL2QpIERlZmNvbiBpbmMvZGVjXG4gICAgICB3aGVuIDEwMCwgNjhcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdkZWZjb24nLCBkaXJcbiAgICAgICMgKE0vbSkgVVNBIE1pbE9wcyBpbmMvZGVjXG4gICAgICB3aGVuIDEwOSwgNzdcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdtaWxvcHMnLCBkaXIsICd1c2EnXG4gICAgICAjIChPL28pIFVTU1IgTWlsT3BzIGluYy9kZWNcbiAgICAgIHdoZW4gMTExLCA3OVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ21pbG9wcycsIGRpciwgJ3Vzc3InXG4gICAgICAjIChQL3ApIFVTQSBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDExMiwgODBcbiAgICAgICAgQGhhbmRsZVZhbENsaWNrICdzcGFjZScsIGRpciwgJ3VzYSdcbiAgICAgICMgKEEvYSkgVVNTUiBTcGFjZSBpbmMvZGVjXG4gICAgICB3aGVuIDk3LCA2NVxuICAgICAgICBAaGFuZGxlVmFsQ2xpY2sgJ3NwYWNlJywgZGlyLCAndXNzcidcblxuICAgIHJldHVybiB0cnVlXG5cblxuICAjIEVzYyBkb2Vzbid0IHRyaWdnZXIgb24ga2V5cHJlc3MsIHNvIGl0IGhhcyB0byBiZSBrZXl1cFxuICBrZXl1cEhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkudG9nZ2xlVmlzaWJsZShmYWxzZSlcbiAgICBpZiBldi5rZXlDb2RlID09IDI3IG9yICgzNyA8PSBldi5rZXlDb2RlIDw9IDQwKVxuICAgICAgcmV0dXJuIEBpcEtleVNlcXVlbmNlIGV2LmtleUNvZGUsIGV2XG4gICAgI2lmIGV2LmtleUNvZGUgPT0gMjdcbiAgICAgICNAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgICNyZXR1cm5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAga2V5ZG93bkhhbmRsZXI6IChldiktPlxuICAgIGlmIGV2LmtleUNvZGUgPT0gOCBvciBldi5rZXlDb2RlID09IDEzXG4gICAgICBAaXBLZXlTZXF1ZW5jZShldi5rZXlDb2RlKVxuICAgICAgIyBQcmV2ZW50IGJhY2tzcGFjZSBmcm9tIG5hdmlnYXRpbmcgdGhlIHBhZ2VcbiAgICAgICMgT3JpZGluYXJpbHkgSSBkb24ndCBsaWtlIHRha2luZyBvdmVyIGJyb3dzZXIgc2hvcnRjdXRzLCBidXQgaW4gdGhpcyBjYXNlXG4gICAgICAjIHdlIHdhbnQgdG8gcHJldmVudCB1c2VycyBmcm9tIG92ZXItYmFja3NwYWNpbmdcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gIGNsZWFySXBDaGFuZ2U6IChyZXNldElQcyA9IHRydWUpLT5cbiAgICAjIFVuZG8gYW55IGlwIGNoYW5nZXNcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlXG4gICAgaXBTaG93Q291bnRyaWVzID0gQHN0YXRlLmlwU2hvd0NvdW50cmllc1xuICAgIGlmIGlwQ2hhbmdlLm1hcChmaWx0ZXJUcnV0aHkpLmxlbmd0aCA+IDAgYW5kIGlwU2hvd0NvdW50cmllcy5sZW5ndGggPT0gMVxuICAgICAgY291bnRyeSA9IF8uZmluZCBAcHJvcHMuY291bnRyaWVzLCB7c2hvcnRjdXQ6IGlwU2hvd0NvdW50cmllc1swXX1cbiAgICAgIHJldHVybiBpZiBub3QgY291bnRyeT9cbiAgICAgIEBzZXRTdGF0ZSBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgaWYgcmVzZXRJUHNcbiAgICAgICAgQGhhbmRsZUlQQ2xpY2sgY291bnRyeS5pZCwgJ3VzYScsIG51bGwsIC1pcENoYW5nZVswXVxuICAgICAgICBAaGFuZGxlSVBDbGljayBjb3VudHJ5LmlkLCAndXNzcicsIG51bGwsIC1pcENoYW5nZVsxXVxuXG5cbiAgY2xlYXJJcEtleVNlcXVlbmNlOiAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgaXBLZXlTZXF1ZW5jZTogJydcbiAgICAgIGlwU2hvd0NvdW50cmllczogW11cbiAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICBpcFNldENvdW50cnk6IG51bGxcblxuICBpcEtleVNlcXVlbmNlOiAoY29kZSwgZXYpLT5cbiAgICAjaWYgY29kZSA9PSAyN1xuICAgICAgI0BjbGVhcklwS2V5U2VxdWVuY2UoKVxuICAgICAgI2V2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICNyZXR1cm4gZmFsc2VcbiAgICBpcEtTID0gQHN0YXRlLmlwS2V5U2VxdWVuY2VcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlXG4gICAgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcblxuICAgICMgQmFja3NwYWNlICg4KSBzaG91bGQgZGVsZXRlIHRoZSBsYXN0IGNoYXIgZnJvbSB0aGUgaXBLUywgYW5kIHNldCB0aGUgXCJjdXJyZW50XCJcbiAgICAjIGNoYXIgdG8gdGhlIGxhc3QgY2hhclxuICAgICMgRW50ZXIgKDEzKSBzaG91bGQgXG4gICAgXG4gICAgaWYgY29kZSA9PSAyNyBvciBjb2RlID09IDEzXG4gICAgICAjIERvbid0IGRvIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgYW4gaXBLU1xuICAgICAgaWYgbm90IGlwS1NcbiAgICAgICAgcmV0dXJuXG4gICAgICBpcHNDaGFuZ2VkID0gaXBLUy5sZW5ndGggPT0gNCBhbmQgaXBDaGFuZ2UuZmlsdGVyKGZpbHRlclRydXRoeSkubGVuZ3RoID4gMFxuICAgICAgaWYgY29kZSA9PSAyNyBhbmQgaXBzQ2hhbmdlZFxuICAgICAgICBAY2xlYXJJcENoYW5nZSgpXG4gICAgICBlbHNlXG4gICAgICAgIGlmIGNvZGUgPT0gMTNcbiAgICAgICAgICBAY2xlYXJJcENoYW5nZShmYWxzZSlcbiAgICAgICAgZGVsdGEgPSAtMVxuICAgICAgICAjIEJhY2sgdXAgdHdvIHNwYWNlcyB3aGVuIGEgY291bnRyeSBpcyBzZWxlY3RlZFxuICAgICAgICBpZiBpcEtTLmxlbmd0aCA9PSA0XG4gICAgICAgICAgZGVsdGEgPSAtMlxuICAgICAgICBpcEtTID0gaXBLUy5zbGljZSgwLGRlbHRhKVxuICAgICAgICBjaGFyID0gaXBLUy5zbGljZSgtMSlcbiAgICAgICAgaXBLUyA9IGlwS1Muc2xpY2UoMCwtMSlcblxuICAgIGNoYXJMb3dlciA9IGNoYXIudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgbm90IGlwS1MgYW5kIG5vdCBjaGFyXG4gICAgICBAY2xlYXJJcEtleVNlcXVlbmNlKClcbiAgICAgIHJldHVyblxuXG4gICAgQHByb3BzLnN0YXRlSGlzdG9yeS50b2dnbGVWaXNpYmxlIGZhbHNlXG4gICAgaWYgaXBLUy5sZW5ndGggPT0gMCBhbmQgY2hhckxvd2VyID09ICdpJ1xuICAgICAgQHNldFN0YXRlXG4gICAgICAgIGlwS2V5U2VxdWVuY2U6ICdpJ1xuICAgICAgICBpcFNob3dDb3VudHJpZXM6IFtdXG4gICAgICAgIGlwU2hvd0NvbnRpbmVudDogJydcbiAgICAgICAgaXBTZXRDb3VudHJ5OiBudWxsXG4gICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgICByZXR1cm5cblxuICAgICMgQ29udGluZW50IHNlbGVjdGlvblxuICAgIGlmIGlwS1MubGVuZ3RoID09IDEgYW5kIGNoYXJMb3dlciBpbiBbJ2MnLCdzJywnZScsJ2YnLCdhJywnbSddXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgQHNldFN0YXRlXG4gICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgaXBTaG93Q291bnRyaWVzOiBAcHJvcHMuY291bnRyeVNob3J0Y3V0c1tjaGFyTG93ZXJdXG4gICAgICAgIGlwU2hvd0NvbnRpbmVudDogY2hhckxvd2VyXG4gICAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuICAgICAgICBpcElQQ2hhbmdlOiBbMCwwXVxuICAgICAgcmV0dXJuXG4gICAgXG4gICAgY29udGluZW50ID0gaXBLUy5jaGFyQXQgMVxuXG4gICAgIyBDb3VudHJ5IHNlbGVjdGlvblxuICAgICMgaXBLUyBzaG91bGQgYmUgJ2lbY29udGluZW50XScgb3IgJ2lbY29udGluZW50XVtjb3VudHJ5Q2hhcl0nXG4gICAgaWYgMiA8PSBpcEtTLmxlbmd0aCA8PSAzXG4gICAgICBpcEtTICs9IGNoYXJMb3dlclxuICAgICAgY291bnRyeUNvZGUgPSBpcEtTLnNsaWNlKDIpXG5cbiAgICAgIGNvdW50cmllcyA9IEBwcm9wcy5jb3VudHJ5U2hvcnRjdXRzW2NvbnRpbmVudF0uZmlsdGVyIChzYyA9ICcnKS0+XG4gICAgICAgIHNjLmNoYXJBdCgwKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMClcblxuICAgICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlciAoc2MgPSAnJyktPlxuICAgICAgICAgIHNjLmNoYXJBdCgxKSA9PSBjb3VudHJ5Q29kZS5jaGFyQXQoMSlcblxuICAgICAgIyBNYWtlIHN1cmUgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgY291bnRyeVxuICAgICAgaWYgY291bnRyaWVzLmxlbmd0aCAhPSAwXG4gICAgICAgIEBzZXRTdGF0ZVxuICAgICAgICAgIGlwS2V5U2VxdWVuY2U6IGlwS1NcbiAgICAgICAgICBpcFNob3dDb3VudHJpZXM6IGNvdW50cmllc1xuICAgICAgICAgIGlwU2V0Q291bnRyeTogbnVsbFxuICAgICAgICAgIGlwSVBDaGFuZ2U6IFswLDBdXG4gICAgXG4gICAgIyBTZWUgaWYgd2UgaGF2ZSBhIGNvdW50cnkgXCJzZWxlY3RlZFwiIGZvciBpcCBwbGFjZW1lbnRcbiAgICBjb3VudHJ5Q29kZSA9IGlwS1Muc2xpY2UoMiw0KVxuICAgIGlmIGNvdW50cnlDb2RlLmxlbmd0aCA9PSAxXG4gICAgICBjb3VudHJ5ID0gXy5maW5kIEBwcm9wcy5ub2RlcyxcbiAgICAgICAgc2hvcnRjdXRVbmlxdWU6IGNvdW50cnlDb2RlXG4gICAgICAgIGNvbnRpbmVudDogY29udGluZW50Q29kZUZyb21MZXR0ZXIgY29udGluZW50XG4gICAgICAjIElmIHdlIGhhdmUgYSBjb3VudHJ5LCBhZGQgdGhlIGZ1bGwgY291bnRyeSBjb2RlIHRvIGlwS1NcbiAgICAgIGlmIGNvdW50cnk/XG4gICAgICAgIGlwS1MgKz0gY291bnRyeS5zaG9ydGN1dC5jaGFyQXQgMVxuICAgICAgICBAc2V0U3RhdGVcbiAgICAgICAgICBpcEtleVNlcXVlbmNlOiBpcEtTXG4gICAgaWYgY291bnRyeUNvZGUubGVuZ3RoID09IDJcbiAgICAgIGNvdW50cnkgPSBfLmZpbmQgQHByb3BzLm5vZGVzLFxuICAgICAgICBzaG9ydGN1dDogY291bnRyeUNvZGVcbiAgICAgICAgY29udGluZW50OiBjb250aW5lbnRDb2RlRnJvbUxldHRlciBjb250aW5lbnRcblxuXG4gICAgaWYgY291bnRyeT9cbiAgICAgIGlwQ2hhbmdlID0gQHN0YXRlLmlwSVBDaGFuZ2UgfHwgWzAsMF1cbiAgICAgIGNvdW50cnlJUHMgPSBAc3RhdGUuaXBzW3BhcnNlSW50KGNvdW50cnkuaWQsMTApXVxuICAgICAgaWYgbm90IGNvdW50cnk/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBzd2l0Y2ggY2hhclxuICAgICAgICB3aGVuICdhJ1xuICAgICAgICAgIHNpZGUgPSAndXNhJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVswXSsrXG4gICAgICAgIHdoZW4gJ0EnXG4gICAgICAgICAgc2lkZSA9ICd1c2EnXG4gICAgICAgICAgZGlyID0gJ2RuJ1xuICAgICAgICAgIGlmIGNvdW50cnlJUHNbMF0gPiAwXG4gICAgICAgICAgICBpcENoYW5nZVswXS0tXG4gICAgICAgIHdoZW4gJ3InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICd1cCdcbiAgICAgICAgICBpcENoYW5nZVsxXSsrXG4gICAgICAgIHdoZW4gJ1InXG4gICAgICAgICAgc2lkZSA9ICd1c3NyJ1xuICAgICAgICAgIGRpciA9ICdkbidcbiAgICAgICAgICBpZiBjb3VudHJ5SVBzWzFdID4gMFxuICAgICAgICAgICAgaXBDaGFuZ2VbMV0tLVxuXG5cbiAgICAgIGlmIHNpZGU/IGFuZCBkaXI/XG4gICAgICAgIEBoYW5kbGVJUENsaWNrIGNvdW50cnkuaWQsIHNpZGUsIGRpclxuXG4gICAgICBAc2V0U3RhdGVcblxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgaGFuZGxlVmFsQ2xpY2s6IChpZCwgZGlyLCBzaWRlKS0+XG4gICAgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgZGVsdGEgPSBpZiBkaXIgPT0gJ2luYycgdGhlbiAxIGVsc2UgLTFcbiAgICBpZiBpZCBpbiBbJ21pbG9wcycsICdzcGFjZSddXG4gICAgICBpbmRleCA9IGlmIHNpZGUgPT0gJ3VzYScgdGhlbiAwIGVsc2UgMVxuICAgICAgb2xkVmFsID0gc3RhdGUuZ2FtZVtpZF1baW5kZXhdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXVtpbmRleF0gKyBkZWx0YSlcbiAgICAgIHN0YXRlLmdhbWVbaWRdW2luZGV4XSA9IG5ld1ZhbFxuICAgIGVsc2VcbiAgICAgIG9sZFZhbCA9IHN0YXRlLmdhbWVbaWRdXG4gICAgICBuZXdWYWwgPSByYW5nZWRHYW1lVmFsKGlkLCBzdGF0ZS5nYW1lW2lkXSArIGRlbHRhKVxuICAgICAgc3RhdGUuZ2FtZVtpZF0gPSBuZXdWYWxcblxuICAgIG1ldGEgPVxuICAgICAgdHlwZTogJ3ZhbCdcbiAgICAgIHNpZGU6IGlmIHNpZGU/IHRoZW4gc2lkZSBlbHNlICcnXG4gICAgICBpZDogaWRcbiAgICAgIG9sZDogb2xkVmFsXG4gICAgICBuZXc6IG5ld1ZhbFxuXG4gICAgaWYgaWQgPT0gJ3R1cm4nIG9yIGlkID09ICdyb3VuZCdcbiAgICAgIG1ldGEudHlwZSA9IGlkXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLCBtZXRhXG5cblxuICBoYW5kbGVJUENsaWNrOiAobm9kZUlkLCBzaWRlLCBkaXIsIGRlbHRhKS0+XG4gICAgcmV0dXJuIGlmIGRlbHRhPyBhbmQgZGVsdGEgPT0gMFxuXG4gICAgbm9kZSA9IF8uZmluZCBAcHJvcHMubm9kZXMsIHtpZDogbm9kZUlkfVxuICAgICMgRG9uJ3QgbGV0IHRoZSBub24tY291bnRyeSBub2RlcyBnZXQgdXBkYXRlZCBcbiAgICBpZiBub2RlLnBvaW50cyBvciBub2RlLnN1cGVycG93ZXIgdGhlbiByZXR1cm5cblxuICAgIHN0YXRlID0gQHN0YXRlXG5cbiAgICBpZiBkZWx0YT9cbiAgICAgIGRpciA9IGlmIGRlbHRhID49IDAgdGhlbiAndXAnIGVsc2UgJ2RuJ1xuICAgIGVsc2VcbiAgICAgIGRlbHRhID0gaWYgZGlyID09ICd1cCcgdGhlbiAxIGVsc2UgLTFcblxuICAgIGluZGV4ID0gc3VwZXJwb3dlclRvSW5kZXggc2lkZVxuICAgIGlwID0gc3RhdGUuaXBzW25vZGVJZF1baW5kZXhdXG4gICAgaXAgKz0gZGVsdGFcbiAgICBpZiBpcCA8IDAgdGhlbiByZXR1cm5cblxuICAgIHNpZ24gPSBpZiBkaXIgPT0gJ3VwJyB0aGVuICcrJyBlbHNlICctJ1xuICAgIHN0YXRlLmlwc1tub2RlSWRdW2luZGV4XSA9IGlwXG5cbiAgICBAc2V0U3RhdGVIaXN0b3J5IHN0YXRlLFxuICAgICAgdHlwZTogJ2lwJ1xuICAgICAgc2lkZTogc2lkZVxuICAgICAgY291bnRyeTogbm9kZVxuICAgICAgaXBzOiBzdGF0ZS5pcHNbbm9kZUlkXVxuICAgICAgZGVsdGE6ZGVsdGFcblxuICBoYW5kbGVIaXN0b3J5Q2xpY2s6ICh0eXBlKS0+XG4gICAgQFtcIiN7dHlwZX1IaXN0XCJdKClcblxuICB1bmRvSGlzdDogLT5cbiAgICBzdGF0ZSA9IEBwcm9wcy5zdGF0ZUhpc3RvcnkudW5kbygpXG4gICAgQHNldFN0YXRlIHN0YXRlLnN0YXRlXG4gIHJlZG9IaXN0OiAtPlxuICAgIHN0YXRlID0gQHByb3BzLnN0YXRlSGlzdG9yeS5yZWRvKClcbiAgICBAc2V0U3RhdGUgc3RhdGUuc3RhdGVcbiAgdG9nZ2xlSGlzdDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LnRvZ2dsZVZpc2libGUoKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIG5vZGVQcm9wcyA9IEBwcm9wcy5ub2RlXG5cbiAgICBzdXBlcnBvd2VyU3RhdHMgPSBzdXBlclN0YXRzIEBzdGF0ZS5pcHMsIEBwcm9wcy5jb3VudHJpZXMsIEBwcm9wcy5yZWdpb25JbmZvTm9kZXNcblxuICAgIGlwS2V5U2VxdWVuY2UgPSBAc3RhdGU/LmlwS2V5U2VxdWVuY2VcbiAgICBpcFNob3dDb3VudHJpZXMgPSBAc3RhdGU/LmlwU2hvd0NvdW50cmllcyB8fCBbXVxuICAgIGlwU2hvd0NvbnRpbmVudCA9IEBzdGF0ZT8uaXBTaG93Q29udGluZW50XG5cbiAgICBsaW5rcyA9IEBwcm9wcy5saW5rcy5tYXAgKGxpbmtEYXRhKT0+XG4gICAgICBzb3VyY2UgPSBfLmZpbmQgQHByb3BzLmNvdW50cmllcywgaWQ6IGxpbmtEYXRhLnNvdXJjZVxuICAgICAgdGFyZ2V0ID0gXy5maW5kIEBwcm9wcy5jb3VudHJpZXMsIGlkOiBsaW5rRGF0YS50YXJnZXRcbiAgICAgIG5vZGVzID0ge3NvdXJjZSwgdGFyZ2V0fVxuXG4gICAgICBqVVNBID0gKGxpbmssIHRhcmcpPT5cbiAgICAgICAgamFwYW5VU0FCdW1wID0gMThcbiAgICAgICAgaWYgXy5jb250YWlucyhsaW5rLm5vZGVzLCAnVVNBJykgYW5kIF8uY29udGFpbnMobGluay5ub2RlcywgJ0phcGFuJylcbiAgICAgICAgICByZXR1cm4gbm9kZXNbdGFyZ10ueSAtIGphcGFuVVNBQnVtcFxuICAgICAgICBub2Rlc1t0YXJnXS55XG5cbiAgICAgIGxpbmtQcm9wcyA9XG4gICAgICAgIGtleTogXCJCb2FyZExpbmstI3tsaW5rRGF0YS5zb3VyY2V9LSN7bGlua0RhdGEudGFyZ2V0fVwiXG4gICAgICAgIHgxOiBzb3VyY2UueFxuICAgICAgICB5MTogalVTQShsaW5rRGF0YSwgJ3NvdXJjZScpXG4gICAgICAgIHgyOiB0YXJnZXQueFxuICAgICAgICB5MjogalVTQShsaW5rRGF0YSwgJ3RhcmdldCcpXG4gICAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgICBcImxpbmtcIjogdHJ1ZVxuICAgICAgICAgIFwibGluay1jcm9zc1wiOiBsaW5rRGF0YS5jcm9zc0NvbnRpbmVudFxuICAgICAgICAgIFwibGluay11c2FcIjogXy5jb250YWlucyBsaW5rRGF0YS5ub2RlcywgJ1VTQSdcbiAgICAgICAgICBcImxpbmstdXNzclwiOiBfLmNvbnRhaW5zIGxpbmtEYXRhLm5vZGVzLCAnVVNTUidcblxuICAgICAgQm9hcmRMaW5rIGxpbmtQcm9wc1xuXG4gICAgbm9kZXMgPSBfLm1hcCBAcHJvcHMubm9kZXMsIChjb3VudHJ5RGF0YSk9PlxuICAgICAgIyBEZXRlcm1pbmUgaWYgY291bnRyeSBzaG91bGQgYmUgb24gdG9wIG9mIHRoZSBpcFBsYWNlbWVudCBtYXNrXG4gICAgICBvblRvcCA9IG5vdCBpcEtleVNlcXVlbmNlIG9yXG4gICAgICAgIGNvdW50cnlEYXRhLnNob3J0Y3V0IGluIGlwU2hvd0NvdW50cmllcyBhbmRcbiAgICAgICAgb25lTGV0dGVyQ29udGluZW50Q29kZShjb3VudHJ5RGF0YS5jb250aW5lbnQpID09IGlwU2hvd0NvbnRpbmVudCBhbmRcbiAgICAgICAgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNFxuICAgICAgcHJvcHMgPVxuICAgICAgICBub2RlOiBub2RlUHJvcHNcbiAgICAgICAga2V5OiBcIkJvYXJkTm9kZS0je2NvdW50cnlEYXRhLmlkfVwiXG4gICAgICAgIHg6IGNvdW50cnlEYXRhLnhcbiAgICAgICAgeTogY291bnRyeURhdGEueVxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGhcbiAgICAgICAgaGVpZ2h0OiBAcHJvcHMubm9kZS5oZWlnaHRcbiAgICAgICAgZ3V0dGVyOiBAcHJvcHMubm9kZS5ndXR0ZXJcbiAgICAgICAgdGl0bGVIZWlnaHQ6IEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHRpdGxlRm9udFNpemU6IEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcbiAgICAgICAgaGFuZGxlSVBDbGljazogQGhhbmRsZUlQQ2xpY2tcbiAgICAgICAgIyBEZXRlcm1pbmUgaWYgdGhlIGNvdW50cnkgc2hvdWxkIGJlIG9uIHRvcCBvZiB0aGUgaXAgc2hvcnRjdXQgbGF5ZXJcbiAgICAgICAgb25Ub3A6IG9uVG9wXG4gICAgICAgICAgXG5cbiAgICAgIF8uYXNzaWduIHByb3BzLCBjb3VudHJ5RGF0YVxuXG4gICAgICBpZihwcm9wcy5zdXBlcnBvd2VyKVxuICAgICAgICBwcm9wcy5zdGF0cyA9XG4gICAgICAgICAgY291bnRyaWVzOiBfLnBpY2sgc3VwZXJwb3dlclN0YXRzLmNvdW50cmllc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ2J0bCcsICdub24nLCAndG90YWwnXVxuICAgICAgICAgIHJlZ2lvbnM6IF8ucGljayBzdXBlcnBvd2VyU3RhdHMucmVnaW9uc1twcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCldLCBbJ3ByZXNlbmNlJywgJ2RvbWluYXRpb24nLCAnY29udHJvbCddXG5cbiAgICAgIGlmKHByb3BzLnBvaW50cylcbiAgICAgICAgcHJvcHMuc3RhdHMgPSBnZXRSZWdpb25TdGF0dXNcbiAgICAgICAgICB1c2E6IHN1cGVycG93ZXJTdGF0cy5yZWdpb25zLnVzYVtwcm9wcy5pZF1cbiAgICAgICAgICB1c3NyOiBzdXBlcnBvd2VyU3RhdHMucmVnaW9ucy51c3NyW3Byb3BzLmlkXVxuICAgICAgXG4gICAgICBjb3VudHJ5SWQgPSBwYXJzZUludCBjb3VudHJ5RGF0YS5pZCwgMTBcbiAgICAgIGlmIGNvdW50cnlJZCBvZiBAc3RhdGUuaXBzXG4gICAgICAgIHByb3BzLnVzYSA9IEBzdGF0ZS5pcHNbY291bnRyeUlkXVswXVxuICAgICAgICBwcm9wcy51c3NyID0gQHN0YXRlLmlwc1tjb3VudHJ5SWRdWzFdXG5cbiAgICAgIEJvYXJkTm9kZURpdiBwcm9wc1xuXG4gICAgYm9hcmRTdGF0dXNBdHRycyA9XG4gICAgICByZWY6J0JvYXJkU3RhdHVzJ1xuICAgICAgaGFuZGxlVmFsQ2xpY2s6IEBoYW5kbGVWYWxDbGlja1xuICAgICAgaGFuZGxlSGlzdG9yeUNsaWNrOiBAaGFuZGxlSGlzdG9yeUNsaWNrXG5cblxuXG4gICAgY29udGluZW50U2hvcnRjdXRzID0gY29udGluZW50U2hvcnRjdXREYXRhLm1hcCAobyk9PlxuICAgICAgaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPT0gMVxuICAgICAgICBzaG93ID0gJ2luJ1xuICAgICAgYXR0cnMgPVxuICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRDb250aW5lbnQgQm9hcmQtc2hvcnRjdXQgI3tzaG93fVwiXG4gICAgICAgIHN0eWxlOlxuICAgICAgICAgIGxlZnQ6IG8ueFxuICAgICAgICAgIHRvcDogby55XG4gICAgICBSLmRpdiBhdHRycywgby5jaGFyXG5cbiAgICBub2Rlc0J5Q29udGluZW50ID0gXy5ncm91cEJ5IEBwcm9wcy5jb3VudHJpZXMsICdjb250aW5lbnQnXG5cbiAgICBjb3VudHJ5U2hvcnRjdXRzID0gXy5tYXAgbm9kZXNCeUNvbnRpbmVudCwgKG5vZGVzLCBjb250aW5lbnQpPT5cbiAgICAgIGNvbnRLZXkgPSBvbmVMZXR0ZXJDb250aW5lbnRDb2RlIGNvbnRpbmVudFxuICAgICAgbm9kZUNvbXBvbmVudHMgPSBfLm1hcCBub2RlcywgKG5vZGUpPT5cbiAgICAgICAgaWYgbm9kZS5zdXBlcnBvd2VyPyBvciBub2RlLnBvaW50cz9cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICBzaG93ID0gJydcbiAgICAgICAgaXBLU0wgPSBpcEtleVNlcXVlbmNlLmxlbmd0aFxuICAgICAgICBpZiBpcEtTTCA8IDQgYW5kIF8uY29udGFpbnMoQHN0YXRlLmlwU2hvd0NvdW50cmllcywgbm9kZS5zaG9ydGN1dCkgYW5kIEBzdGF0ZS5pcFNob3dDb250aW5lbnQgPT0gb25lTGV0dGVyQ29udGluZW50Q29kZShjb250aW5lbnQpXG4gICAgICAgICAgc2hvdyA9ICdpbidcbiAgICAgICAgYXR0cnMgPVxuICAgICAgICAgIGNsYXNzTmFtZTogXCJCb2FyZC1zaG9ydGN1dCBCb2FyZC1zaG9ydGN1dENvdW50cnkgI3tzaG93fVwiXG4gICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICBsZWZ0OiBub2RlLnhcbiAgICAgICAgICAgIHRvcDogbm9kZS55XG4gICAgICAgIFIuZGl2IGF0dHJzLCB1cHBlckZpcnN0KG5vZGUuc2hvcnRjdXRVbmlxdWUpXG5cbiAgICAgIG5vZGVDb21wb25lbnRzXG5cbiAgICBjb250Q291bnRyeSA9IGNvbnRDb3VudHJ5U2VsZWN0aW9uIEBwcm9wcy5yZWdpb25JbmZvTm9kZXMsIEBwcm9wcy5jb3VudHJpZXMsIGlwS2V5U2VxdWVuY2VcbiAgICBpcENoYW5nZSA9IEBzdGF0ZS5pcElQQ2hhbmdlIHx8IFswLDBdXG4gICAgaXBDaGFuZ2VVU0EgPSBpZiBpcEtleVNlcXVlbmNlLmxlbmd0aCA+PSA0IHRoZW4gUi5zcGFuIGNsYXNzTmFtZTogJ0JvYXJkLWlwSGVhZGVyLXVzYScsIHNpZ25lZE51bU9yRGFzaChpcENoYW5nZVswXSkgZWxzZSBudWxsXG4gICAgaXBDaGFuZ2VVU1NSID0gaWYgaXBLZXlTZXF1ZW5jZS5sZW5ndGggPj0gNCB0aGVuIFIuc3BhbiBjbGFzc05hbWU6ICdCb2FyZC1pcEhlYWRlci11c3NyJywgc2lnbmVkTnVtT3JEYXNoKGlwQ2hhbmdlWzFdKSBlbHNlIG51bGxcbiAgICBpcENvdW50cnkgPSBjb250Q291bnRyeS5jb3VudHJ5IHx8IGlmIGNvbnRDb3VudHJ5LmNvbnRpbmVudCB0aGVuICdTZWxlY3QgYSBjb3VudHJ5J1xuICAgIGlwQ29udENvdW50cnkgPSBbXG4gICAgICBpcENoYW5nZVVTQVxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJCb2FyZC1pcEhlYWRlci1Db250Q291bnRcIiwgW1xuICAgICAgICBSLmgzIGNsYXNzTmFtZTogXCJCb2FyZC1pcEhlYWRlci1Db250aW5lbnQgI3tjb250Q291bnRyeS5jb250aW5lbnQ/LmNvbnRpbmVudH1EYXJrXCIsIGNvbnRDb3VudHJ5LmNvbnRpbmVudD8uc2hvcnRuYW1lIG9yICdTZWxlY3QgYSBjb250aW5lbnQnXG4gICAgICAgIFIuaDMgY2xhc3NOYW1lOiBcIkJvYXJkLWlwSGVhZGVyLUNvdW50cnkgI3tjb250Q291bnRyeS5jb250aW5lbnQ/LmNvbnRpbmVudH1EYXJrXCIsIGlwQ291bnRyeVxuICAgICAgXVxuICAgICAgaXBDaGFuZ2VVU1NSXG4gICAgXVxuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZCcsIFtcbiAgICAgIFIuc3ZnIHdpZHRoOkBwcm9wcy53aWR0aCwgaGVpZ2h0OkBwcm9wcy5oZWlnaHQsIHJlZjogJ3N2ZycsIFtcbiAgICAgICAgbGlua3NcbiAgICAgIF1cbiAgICAgIG5vZGVzXG4gICAgICBSLmRpdiBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRIZWFkZXIgI3tpZiBpcEtleVNlcXVlbmNlIHRoZW4gJ2luJyBlbHNlICcnfVwiLCBbXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvcHknLCBbXG4gICAgICAgICAgUi5oMyB7fSwgXCJQbGFjaW5nIEluZmx1ZW5jZVwiXG4gICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2xhYmVsJywgW1xuICAgICAgICAgICAgUi5hIG9uQ2xpY2s6IEBjbGVhcklwS2V5U2VxdWVuY2UsIFtcbiAgICAgICAgICAgICAgXCJDYW5jZWwgKFwiXG4gICAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzaG9ydGN1dCcsIFwiZXNjXCJcbiAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFIuYSBjbGFzc05hbWU6IChpZiBpcENoYW5nZVswXSA9PSAwIGFuZCBpcENoYW5nZVsxXSA9PSAwIHRoZW4gJ2Rpc2FibGVkJyksIG9uQ2xpY2s6IEBpcEtleVNlcXVlbmNlLmJpbmQobnVsbCwgMTMpLCBbXG4gICAgICAgICAgICAgIFwiQ29uZmlybSAoXCJcbiAgICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3Nob3J0Y3V0JywgXCJlbnRlclwiXG4gICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTonY2hhcnMnLCBpcENvbnRDb3VudHJ5XG4gICAgICBdXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwiQm9hcmQtc2hvcnRjdXRNYXNrICN7aWYgaXBLZXlTZXF1ZW5jZSB0aGVuICdpbicgZWxzZSAnJ31cIlxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIkJvYXJkLXNob3J0Y3V0Q29udGluZW50cyAje2lmIGlwS2V5U2VxdWVuY2UgYW5kIGlwS2V5U2VxdWVuY2UubGVuZ3RoIDw9IDEgdGhlbiAnaW4nIGVsc2UgJyd9XCIsXG4gICAgICAgIGNvbnRpbmVudFNob3J0Y3V0c1xuICAgICAgY291bnRyeVNob3J0Y3V0c1xuICAgICAgQm9hcmRTdGF0dXMgXy5hc3NpZ24gYm9hcmRTdGF0dXNBdHRycywgQHN0YXRlLmdhbWVcbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRMaW5rJ1xuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IC0+XG4gICAgZmFsc2VcbiAgcmVuZGVyOiAtPlxuICAgIFIubGluZSBAcHJvcHNcblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmROb2RlSVAgPSByZXF1aXJlICcuL0JvYXJkTm9kZUlQJ1xuIFxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZSdcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuZXh0UHJvcHMpLT5cbiAgICAjIEFzc3VtZSBjb3VudHJ5XG4gICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMudXNhICE9IEBwcm9wcy51c2Egb3IgbmV4dFByb3BzLnVzc3IgIT0gQHByb3BzLnVzc3JcbiAgICAjIENvbnRpbmVudCBsYWJlbHNcbiAgICBpZiBAcHJvcHMucG9pbnRzP1xuICAgICAgc2hvdWxkSXQgPSBuZXh0UHJvcHMuc3RhdHMudXNhICE9IEBwcm9wcy5zdGF0cy51c2Egb3JcbiAgICAgICAgbmV4dFByb3BzLnN0YXRzLnVzc3IgIT0gQHByb3BzLnN0YXRzLnVzc3JcbiAgICAjIFN1cGVycG93ZXIgbGFiZWxzXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIG5QUyA9IG5leHRQcm9wcy5zdGF0c1xuICAgICAgdFBTID0gQHByb3BzLnN0YXRzXG4gICAgICBzaG91bGRJdCA9IG5QUy5jb3VudHJpZXMuYnRsICE9IHRQUy5jb3VudHJpZXMuYnRsIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLnByZXNlbmNlICE9IHRQUy5yZWdpb25zLnByZXNlbmNlIG9yXG4gICAgICAgIG5QUy5yZWdpb25zLmRvbWluYXRpb24gIT0gdFBTLnJlZ2lvbnMuZG9taW5hdGlvbiBvclxuICAgICAgICBuUFMucmVnaW9ucy5jb250cm9sICE9IHRQUy5yZWdpb25zLmNvbnRyb2xcblxuICAgIHNob3VsZEl0XG5cbiAgaGFuZGxlSVBDbGljazogKHNpZGUsIGRpciktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5pZCwgc2lkZSwgZGlyXG5cbiAgcmVuZGVyOiAtPlxuICAgICNjb25zb2xlLmxvZyBAcHJvcHMuc2hvcnRjdXQsIEBwcm9wcy5jb250aW5lbnRcbiAgICBjb250cm9sVVNBID0gKEBwcm9wcy51c2EgLSBAcHJvcHMudXNzcikgPj0gQHByb3BzLnN0YWJcbiAgICBjb250cm9sVVNTUiA9IChAcHJvcHMudXNzciAtIEBwcm9wcy51c2EpID49IEBwcm9wcy5zdGFiXG5cbiAgICBnQXR0cnMgPVxuICAgICAgdHJhbnNmb3JtOiBAcHJvcHMudHJhbnNmb3JtXG4gICAgICBjbGFzc05hbWU6IFwibm9kZS0je0Bwcm9wcy5ncm91cH0gXCIgKyBjeFxuICAgICAgICAnbm9kZSc6IHRydWVcbiAgICAgICAgJ25vZGUtYnRsJzogQHByb3BzLmJ0bCA9PSAxXG4gICAgICAgICdub2RlLW5vbmJ0bCc6IEBwcm9wcy5idGwgIT0gMVxuICAgICAgICAnbm9kZS1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlLXVzYS1jb250cm9sJzogY29udHJvbFVTQVxuICAgICAgICAnbm9kZS11c3NyLWNvbnRyb2wnOiBjb250cm9sVVNTUlxuICAgICAgICAnbm9kZS1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG5cblxuICAgIHRpdGxlVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLXRpdGxlLXRleHRcIlxuICAgICAgeDogaWYgQHByb3BzLnJlZ2lvbkluZm8gb3IgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtQHByb3BzLm5vZGUud2lkdGgvMiArIDJcbiAgICAgIHk6IGlmIEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICAgICAtNlxuICAgICAgICAgIGVsc2UgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICAgICAgIDZcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemVcblxuXG4gICAgc3RhYlRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IFwibm9kZS1zdGFiXCJcbiAgICAgIHg6IChAcHJvcHMubm9kZS53aWR0aC8yKSAtIDEwXG4gICAgICB5OiAtKEBwcm9wcy5ub2RlLmhlaWdodC8yKSArIEBwcm9wcy5ub2RlLnRpdGxlRm9udFNpemUgKyAxXG5cbiAgICBzdGFiVGV4dCA9IEBwcm9wcy5zdGFiXG4gICAgaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgIHN0YWJUZXh0ID0gW1xuICAgICAgICBSLnRzcGFuIHt9LCBcIkJhdHRsZTogXCJcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6J251bUJ0bCcsIEBwcm9wcy5zdGF0cy5jb3VudHJpZXMuYnRsXG4gICAgICBdXG4gICAgICBzdGFiVGV4dEF0dHJzLnggPSAwXG4gICAgICBzdGFiVGV4dEF0dHJzLnkgKz0gMVxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZS10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi50c3BhbiBjbGFzc05hbWU6cENOLCBAcHJvcHMucG9pbnRzWzBdXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIudHNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnRzcGFuIGNsYXNzTmFtZTpjQ04sIEBwcm9wcy5wb2ludHNbMl1cbiAgICAgIF1cblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBwc3IgPSBAcHJvcHMuc3RhdHMucmVnaW9uc1xuICAgICAgcmVnaW9uVGV4dCA9IFtwc3IucHJlc2VuY2UsIHBzci5kb21pbmF0aW9uLCBwc3IuY29udHJvbF0uam9pbiAnICdcbiAgICAgIHJlZ2lvblRleHRBdHRycy55ID0gMjBcblxuICAgICMgQmFja2dyb3VuZCBmb3IgRStXIEV1cm9wZSBhbmQgU0UgQXNpYVxuICAgIHBvbHlDbGFzc05hbWUgPSBzd2l0Y2ggQHByb3BzLmdyb3VwXG4gICAgICB3aGVuICdldScgdGhlbiAnbm9kZS1iZy1ldSdcbiAgICAgIHdoZW4gJ3NlYScgdGhlbiAnbm9kZS1iZy1zZWEnXG4gICAgICBlbHNlIG51bGxcblxuICAgIGlmIHBvbHlDbGFzc05hbWU/IGFuZCBub3QgQHByb3BzLnBvaW50cz9cbiAgICAgIHBvbHkgPSBSLnBvbHlnb25cbiAgICAgICAgY2xhc3NOYW1lOiBwb2x5Q2xhc3NOYW1lXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgXCIjey1AcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3tAcHJvcHMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIFwiI3tAcHJvcHMud2lkdGgvMn0sI3stQHByb3BzLmhlaWdodC8yICsgQHByb3BzLnRpdGxlSGVpZ2h0fVwiXG4gICAgICAgICAgXS5qb2luICcgJ1xuXG4gICAgc2hvcnRDdXRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdub2RlLXNob3J0Y3V0J1xuICAgICAgXG5cbiAgICBSLmcgZ0F0dHJzLCBbXG4gICAgICAjIE5vZGUgYmdcbiAgICAgIFIucmVjdFxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLWJnJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLmhlaWdodFxuICAgICAgICB0aXRsZTogTWF0aC5yYW5kb20oKVxuICAgICAgICB4OiAtQHByb3BzLndpZHRoLzJcbiAgICAgICAgeTogLUBwcm9wcy5oZWlnaHQvMlxuXG4gICAgICBwb2x5XG5cbiAgICAgIFIucmVjdFxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLXRpdGxlLWJnJ1xuICAgICAgICB3aWR0aDogQHByb3BzLndpZHRoXG4gICAgICAgIGhlaWdodDogQHByb3BzLnRpdGxlSGVpZ2h0XG4gICAgICAgIHg6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5OiAtQHByb3BzLmhlaWdodC8yXG5cbiAgICAgIFIubGluZVxuICAgICAgICBjbGFzc05hbWU6ICdub2RlLWxpbmUnXG4gICAgICAgIHdpZHRoOiBAcHJvcHMud2lkdGhcbiAgICAgICAgeDE6IC1AcHJvcHMud2lkdGgvMlxuICAgICAgICB5MTogLUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIHgyOiBAcHJvcHMud2lkdGgvMlxuICAgICAgICB5MjogLUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG5cbiAgICAgIFIudGV4dCB0aXRsZVRleHRBdHRycywgQHByb3BzLnNob3J0bmFtZVxuICAgICAgUi50ZXh0IHN0YWJUZXh0QXR0cnMsIHN0YWJUZXh0XG4gICAgICBSLnRleHQgcmVnaW9uVGV4dEF0dHJzLCByZWdpb25UZXh0XG5cbiAgICAgICNSLnRleHQgc2hvcnRDdXRBdHRycywgQHByb3BzLnNob3J0Y3V0XG5cbiAgICAgIEJvYXJkTm9kZUlQIG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNhJywgaXA6IEBwcm9wcy51c2EsIGN0cmw6IGNvbnRyb2xVU0EsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzYSdcbiAgICAgIEJvYXJkTm9kZUlQIG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNzcicsIGlwOiBAcHJvcHMudXNzciwgY3RybDogY29udHJvbFVTU1IsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzc3InXG4gICAgXVxuXG5cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuQm9hcmROb2RlSVBEaXYgPSByZXF1aXJlICcuL0JvYXJkTm9kZUlQRGl2J1xuIFxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZURpdidcblxuICAjc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAobmV4dFByb3BzKS0+XG4gICAgIyMgQXNzdW1lIGNvdW50cnlcbiAgICAjc2hvdWxkSXQgPSBuZXh0UHJvcHMudXNhICE9IEBwcm9wcy51c2Egb3IgbmV4dFByb3BzLnVzc3IgIT0gQHByb3BzLnVzc3JcbiAgICAjIyBDb250aW5lbnQgbGFiZWxzXG4gICAgI2lmIEBwcm9wcy5wb2ludHM/XG4gICAgICAjc2hvdWxkSXQgPSBuZXh0UHJvcHMuc3RhdHMudXNhICE9IEBwcm9wcy5zdGF0cy51c2Egb3JcbiAgICAgICAgI25leHRQcm9wcy5zdGF0cy51c3NyICE9IEBwcm9wcy5zdGF0cy51c3NyXG4gICAgIyMgU3VwZXJwb3dlciBsYWJlbHNcbiAgICAjaWYgQHByb3BzLnN1cGVycG93ZXJcbiAgICAgICNuUFMgPSBuZXh0UHJvcHMuc3RhdHNcbiAgICAgICN0UFMgPSBAcHJvcHMuc3RhdHNcbiAgICAgICNzaG91bGRJdCA9IG5QUy5jb3VudHJpZXMuYnRsICE9IHRQUy5jb3VudHJpZXMuYnRsIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5wcmVzZW5jZSAhPSB0UFMucmVnaW9ucy5wcmVzZW5jZSBvclxuICAgICAgICAjblBTLnJlZ2lvbnMuZG9taW5hdGlvbiAhPSB0UFMucmVnaW9ucy5kb21pbmF0aW9uIG9yXG4gICAgICAgICNuUFMucmVnaW9ucy5jb250cm9sICE9IHRQUy5yZWdpb25zLmNvbnRyb2xcbiNcbiAgICAjc2hvdWxkSXRcblxuICBoYW5kbGVJUENsaWNrOiAoc2lkZSwgZGlyKS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLmlkLCBzaWRlLCBkaXJcblxuICByZW5kZXI6IC0+XG4gICAgY29udHJvbFVTQSA9IChAcHJvcHMudXNhIC0gQHByb3BzLnVzc3IpID49IEBwcm9wcy5zdGFiXG4gICAgY29udHJvbFVTU1IgPSAoQHByb3BzLnVzc3IgLSBAcHJvcHMudXNhKSA+PSBAcHJvcHMuc3RhYlxuXG5cbiAgICBnQXR0cnMgPVxuICAgICAgc3R5bGU6XG4gICAgICAgIGxlZnQ6IEBwcm9wcy54IC0gQHByb3BzLndpZHRoLzIgKyAncHgnXG4gICAgICAgIHRvcDogQHByb3BzLnkgLSBAcHJvcHMuaGVpZ2h0LzIgKyAncHgnXG4gICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi0je0Bwcm9wcy5ncm91cH0gXCIgKyBjeFxuICAgICAgICAnbm9kZWRpdic6IHRydWVcbiAgICAgICAgJ25vZGVkaXYtYnRsJzogQHByb3BzLmJ0bCA9PSAxXG4gICAgICAgICdub2RlZGl2LW5vbmJ0bCc6IEBwcm9wcy5idGwgIT0gMVxuICAgICAgICAnbm9kZWRpdi1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlZGl2LXVzYS1jb250cm9sJzogY29udHJvbFVTQVxuICAgICAgICAnbm9kZWRpdi11c3NyLWNvbnRyb2wnOiBjb250cm9sVVNTUlxuICAgICAgICAnbm9kZWRpdi1yZWdpb24taW5mbyc6IEBwcm9wcy5yZWdpb25JbmZvXG4gICAgICAgICdub2RlZGl2LW9uLXRvcCc6IEBwcm9wcy5vblRvcCBhbmQgbm90IChAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlcilcblxuXG4gICAgdGl0bGVUZXh0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtdGl0bGUtdGV4dFwiXG4gICAgICB4OiBpZiBAcHJvcHMucmVnaW9uSW5mbyBvciBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC1AcHJvcHMubm9kZS53aWR0aC8yICsgMlxuICAgICAgeTogaWYgQHByb3BzLnJlZ2lvbkluZm9cbiAgICAgICAgICAgIC02XG4gICAgICAgICAgZWxzZSBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgICAgICAgNlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZVxuXG5cbiAgICBzdGFiVGV4dEF0dHJzID1cbiAgICAgIGNsYXNzTmFtZTogXCJub2RlZGl2LXN0YWJcIlxuICAgICAgeDogKEBwcm9wcy5ub2RlLndpZHRoLzIpIC0gMTBcbiAgICAgIHk6IC0oQHByb3BzLm5vZGUuaGVpZ2h0LzIpICsgQHByb3BzLm5vZGUudGl0bGVGb250U2l6ZSArIDFcblxuXG5cblxuICAgIHJlZ2lvblRleHRBdHRycyA9XG4gICAgICBjbGFzc05hbWU6IGlmIEBwcm9wcy5wb2ludHMgb3IgQHByb3BzLnN1cGVycG93ZXIgdGhlbiAnbm9kZWRpdi10ZXh0JyBlbHNlICdoaWRlJ1xuICAgICAgeDogMFxuICAgICAgeTogMTBcbiAgICAgIHdpZHRoOiBAcHJvcHMubm9kZS53aWR0aFxuXG5cbiAgICByZWdpb25UZXh0ID0gJydcbiAgICBpZiBAcHJvcHMucG9pbnRzXG4gICAgICByZWdpb25DeCA9IChrZXkpPT5cbiAgICAgICAgb2JqID1cbiAgICAgICAgICB1c2E6IEBwcm9wcy5zdGF0cy51c2EgPT0ga2V5XG4gICAgICAgICAgdXNzcjogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5XG4gICAgICAgICAgYm90aDogQHByb3BzLnN0YXRzLnVzc3IgPT0ga2V5IGFuZCBAcHJvcHMuc3RhdHMudXNhID09IGtleVxuICAgICAgICBvYmpba2V5XSA9IHRydWVcbiAgICAgICAgY3ggb2JqXG4gICAgICAgIFxuICAgICAgY0NOID0gcmVnaW9uQ3ggJ2NvbnRyb2wnXG4gICAgICBkQ04gPSByZWdpb25DeCAnZG9taW5hdGlvbidcbiAgICAgIHBDTiA9IHJlZ2lvbkN4ICdwcmVzZW5jZSdcblxuICAgICAgcmVnaW9uVGV4dCA9IFtcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTpwQ04sIEBwcm9wcy5wb2ludHNbMF1cbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonYmxhbmsnLCBcIiBcIlxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOmRDTiwgQHByb3BzLnBvaW50c1sxXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidibGFuaycsIFwiIFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6Y0NOLCBAcHJvcHMucG9pbnRzWzJdXG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMuc3VwZXJwb3dlclxuICAgICAgcHNyID0gQHByb3BzLnN0YXRzLnJlZ2lvbnNcbiAgICAgIHJlZ2lvblRleHQgPSBbcHNyLnByZXNlbmNlLCBwc3IuZG9taW5hdGlvbiwgcHNyLmNvbnRyb2xdLmpvaW4gJyAnXG4gICAgICByZWdpb25UZXh0QXR0cnMueSA9IDIwXG5cbiAgICAjIEJhY2tncm91bmQgZm9yIEUrVyBFdXJvcGUgYW5kIFNFIEFzaWFcbiAgICBwb2x5Q2xhc3NOYW1lID0gc3dpdGNoIEBwcm9wcy5ncm91cFxuICAgICAgd2hlbiAnZXUnIHRoZW4gJ25vZGVkaXYtYmctZXUnXG4gICAgICB3aGVuICdzZWEnIHRoZW4gJ25vZGVkaXYtYmctc2VhJ1xuICAgICAgZWxzZSBudWxsXG5cbiAgICBpZiBwb2x5Q2xhc3NOYW1lPyBhbmQgbm90IEBwcm9wcy5wb2ludHM/XG4gICAgICBwb2x5ID0gUi5wb2x5Z29uXG4gICAgICAgIGNsYXNzTmFtZTogcG9seUNsYXNzTmFtZVxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICAgIFwiI3stQHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7QHByb3BzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICBcIiN7QHByb3BzLndpZHRoLzJ9LCN7LUBwcm9wcy5oZWlnaHQvMiArIEBwcm9wcy50aXRsZUhlaWdodH1cIlxuICAgICAgICAgIF0uam9pbiAnICdcblxuICAgIHNob3J0Q3V0QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiAnbm9kZWRpdi1zaG9ydGN1dCdcbiAgICAgIFxuXG4gICAgc3RhYlRleHQgPSBAcHJvcHMuc3RhYlxuXG4gICAgaXNDb3VudHJ5ID0gQHByb3BzLnN1cGVycG93ZXIgb3IgQHByb3BzLnJlZ2lvbkluZm9cbiAgICBpZiBub3QgaXNDb3VudHJ5XG4gICAgICBpcFVTQSA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNhJywgaXA6IEBwcm9wcy51c2EsIGN0cmw6IGNvbnRyb2xVU0EsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzYSdcbiAgICAgIGlwVVNTUiA9IEJvYXJkTm9kZUlQRGl2IG5vZGU6IEBwcm9wcy5ub2RlLCBzaWRlOiAndXNzcicsIGlwOiBAcHJvcHMudXNzciwgY3RybDogY29udHJvbFVTU1IsIGhhbmRsZUlQQ2xpY2s6IEBoYW5kbGVJUENsaWNrLCByZWY6ICdpcHVzc3InXG4gICAgICBzdGFiID0gUi5zcGFuIHN0YWJUZXh0QXR0cnMsIHN0YWJUZXh0XG4gICAgZWxzZVxuICAgICAgcmVnaW9uSW5mbyA9IFIuc3BhbiByZWdpb25UZXh0QXR0cnMsIHJlZ2lvblRleHRcblxuICAgIGlmIEBwcm9wcy5zdXBlcnBvd2VyXG4gICAgICBidGwgPVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnbm9kZWRpdi1idGwtbnVtJywgW1xuICAgICAgICAgIFwiQmF0dGxlOiBcIlxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdzdHJvbmcnLCBAcHJvcHMuc3RhdHMuY291bnRyaWVzLmJ0bFxuICAgICAgICBdXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIGJ0bFxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnbm9kZWRpdi10aXRsZScsIFtcbiAgICAgICAgUi5zcGFuIHRpdGxlVGV4dEF0dHJzLCBAcHJvcHMuc2hvcnRuYW1lXG4gICAgICAgIHN0YWJcbiAgICAgIF1cbiAgICAgIHJlZ2lvbkluZm9cbiAgICAgICNSLnRleHQgc2hvcnRDdXRBdHRycywgQHByb3BzLnNob3J0Y3V0XG4gICAgICBpcFVTQVxuICAgICAgaXBVU1NSXG4gICAgICAgIFxuICAgIF1cblxuXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZE5vZGVJUCdcblxuICBoYW5kbGVJUENsaWNrOiAoZGlyLCBldiktPlxuICAgIEBwcm9wcy5oYW5kbGVJUENsaWNrIEBwcm9wcy5zaWRlLCBkaXJcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IChuUCktPlxuICAgIG5QLmlwICE9IEBwcm9wcy5pcFxuXG4gIHJlbmRlcjogLT5cbiAgICBwb3NpdGlvbiA9IGlmIEBwcm9wcy5zaWRlID09ICd1c2EnIHRoZW4gMSBlbHNlIDBcblxuICAgIGhpZGVJUCA9IGlmIEBwcm9wcy5pcCA9PSAwIHRoZW4gJ2hpZGUnIGVsc2UgJydcblxuICAgIGdBdHRycyA9XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKCN7LUBwcm9wcy5ub2RlLndpZHRoLzIgKiBwb3NpdGlvbn0sICN7LUBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0LzIgLSAxfSlcIlxuICAgICAgd2lkdGg6IEBwcm9wcy5ub2RlLndpZHRoLzJcbiAgICAgIGhlaWdodDogQHByb3BzLm5vZGUuaGVpZ2h0IC0gQHByb3BzLm5vZGUudGl0bGVIZWlnaHRcbiAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLSN7QHByb3BzLnNpZGV9XCJcblxuICAgIHRleHRBdHRycyA9XG4gICAgICB4OiBAcHJvcHMubm9kZS53aWR0aC80XG4gICAgICB5OiBAcHJvcHMubm9kZS5oZWlnaHQvMiAtIDFcbiAgICAgIGNsYXNzTmFtZTogaGlkZUlQXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIFIuZyBnQXR0cnMsIFtcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZTogXCJub2RlLWlwLWJnLSN7QHByb3BzLnNpZGV9ICN7aGlkZUlQfVwiXG4gICAgICBSLnRleHQgdGV4dEF0dHJzLCBAcHJvcHMuaXBcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGUtaXAtY2xpY2tcIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICd1cCdcbiAgICAgIFIucmVjdFxuICAgICAgICB3aWR0aDogQHByb3BzLm5vZGUud2lkdGgvMlxuICAgICAgICBoZWlnaHQ6IGlwQ2xpY2tIZWlnaHRcbiAgICAgICAgeTogaXBDbGlja0hlaWdodFxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZS1pcC1jbGlja1wiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ2RuJ1xuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ0JvYXJkTm9kZUlQRGl2J1xuXG4gIGhhbmRsZUlQQ2xpY2s6IChkaXIsIGV2KS0+XG4gICAgQHByb3BzLmhhbmRsZUlQQ2xpY2sgQHByb3BzLnNpZGUsIGRpclxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgblAuaXAgIT0gQHByb3BzLmlwXG5cbiAgcmVuZGVyOiAtPlxuICAgIHBvc2l0aW9uID0gaWYgQHByb3BzLnNpZGUgPT0gJ3VzYScgdGhlbiAxIGVsc2UgMFxuXG4gICAgaXBaZXJvID0gaWYgQHByb3BzLmlwID09IDAgdGhlbiAnaXBaZXJvJyBlbHNlICcnXG5cbiAgICBnQXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtI3tAcHJvcHMuc2lkZX0gbm9kZWRpdi1pcCAje2lwWmVyb31cIlxuXG4gICAgdGV4dEF0dHJzID1cbiAgICAgIHg6IEBwcm9wcy5ub2RlLndpZHRoLzRcbiAgICAgIHk6IEBwcm9wcy5ub2RlLmhlaWdodC8yIC0gMVxuICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtdGV4dFwiXG5cbiAgICBpcENsaWNrSGVpZ2h0ID0gKEBwcm9wcy5ub2RlLmhlaWdodCAtIEBwcm9wcy5ub2RlLnRpdGxlSGVpZ2h0KSAvIDJcblxuICAgIGlwID0gaWYgQHByb3BzLmlwID4gMCB0aGVuIEBwcm9wcy5pcCBlbHNlICcnXG5cbiAgICBSLmRpdiBnQXR0cnMsIFtcbiAgICAgIFIuc3BhbiB0ZXh0QXR0cnMsIGlwXG4gICAgICBSLmRpdlxuICAgICAgICBjbGFzc05hbWU6IFwibm9kZWRpdi1pcC1jbGljay11cFwiXG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVJUENsaWNrLmJpbmQgdGhpcywgJ3VwJ1xuICAgICAgUi5kaXZcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vZGVkaXYtaXAtY2xpY2stZG5cIlxuICAgICAgICBvbkNsaWNrOiBAaGFuZGxlSVBDbGljay5iaW5kIHRoaXMsICdkbidcbiAgICBdXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cblxuQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSA9IHJlcXVpcmUgJy4vQm9hcmRTdGF0ZUhpc3RvcnlFbnRyeSdcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHI6IDBcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5Lm9uICd1cGRhdGUnLCA9PlxuICAgICAgQGZvcmNlVXBkYXRlKClcblxuICAgICNmbiA9ICgpPT5cbiAgICAgICNAc2V0U3RhdGUgcjogTWF0aC5yYW5kb20oKVxuICAgICAgI3NldFRpbWVvdXQgZm4sIDIwMDBcbiAgICAjZm4oKVxuICAgXG4gIGhhbmRsZVNIQ2xpY2s6IChpZCktPlxuICAgIEBwcm9wcy5zdGF0ZUhpc3RvcnkuZ29UbyBpZFxuXG4gIGhhbmRsZUNsb3NlSGlzdG9yeTogLT5cbiAgICBAcHJvcHMuc3RhdGVIaXN0b3J5LmhpZGUoKVxuXG4gIHJlbmRlcjogLT5cbiAgICBzdGF0ZUNvbXBvbmVudHMgPSBAcHJvcHMuc3RhdGVIaXN0b3J5LmdldEFsbCgpLm1hcCAoc2gsIGluZGV4KT0+XG4gICAgICBzaE0gPSBzaC5tZXRhXG4gICAgICAjIElQIHBsYWNlbWVudCBpbiBjb3VudHJ5XG4gICAgICBpZiBzaE0uY291bnRyeT9cbiAgICAgICAga2V5ID0gXCJjb3VudHJ5LSN7c2hNLmNvdW50cnkuaWR9XCJcbiAgICAgIGVsc2VcbiAgICAgICAga2V5ID0gXCIje3NoTS5pZH0tI3tzaE0uc2lkZX1cIlxuXG4gICAgICBCb2FyZFN0YXRlSGlzdG9yeUVudHJ5XG4gICAgICAgIG9uQ2xpY2s6IEBoYW5kbGVTSENsaWNrLmJpbmQgdGhpcywgaW5kZXhcbiAgICAgICAga2V5OiBcIkJTSEUtI3tpbmRleH0tI3trZXl9XCJcbiAgICAgICAgaXNMYXRlc3Q6IEBwcm9wcy5zdGF0ZUhpc3RvcnkubGF0ZXN0ID09IGluZGV4XG4gICAgICAgIGlzQ3VycmVudDogQHByb3BzLnN0YXRlSGlzdG9yeS5jdXJyZW50ID09IGluZGV4XG4gICAgICAgIHNoOiBzaFxuXG4gICAgZGl2QXR0cnMgPVxuICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgICAnU3RhdGVIaXN0b3J5JzogdHJ1ZVxuICAgICAgICAnaW4nOiBAcHJvcHMuc3RhdGVIaXN0b3J5LnNob3dcblxuICAgIFIuZGl2IGRpdkF0dHJzLCBbXG4gICAgICBSLmEgY2xhc3NOYW1lOiAnY2xvc2UgcHVsbC1yaWdodCcsIG9uQ2xpY2s6IEBoYW5kbGVDbG9zZUhpc3RvcnksIFtcbiAgICAgICAgJ0Nsb3NlICdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ1N0YXR1c0xhYmVsLXNob3J0Y3V0JywgJyhoKSdcbiAgICAgIF1cbiAgICAgIFIuaDMge30sIFwiQWN0aW9uIEhpc3RvcnlcIlxuICAgICAgUi51bCBjbGFzc05hbWU6ICdsaXN0LXVuc3R5bGVkJywgc3RhdGVDb21wb25lbnRzLnJldmVyc2UoKVxuICAgIF1cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmdhbWVWYWxEaXNwbGF5ID0gcmVxdWlyZSAnLi4vbGlicy9nYW1lVmFsRGlzcGxheSdcbnVwcGVyRmlyc3QgPSByZXF1aXJlICcuLi9saWJzL3VwcGVyRmlyc3QnXG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuaW50VG9TdHJXaXRoU2lnbiA9IHJlcXVpcmUgJy4uL2xpYnMvaW50VG9TdHJXaXRoU2lnbidcbnN1cGVycG93ZXJUb0luZGV4ID0gcmVxdWlyZSAnLi4vbGlicy9zdXBlcnBvd2VyVG9JbmRleCdcblxuc2NvcmVTaWRlID0gKHNjb3JlKS0+XG4gIGlmIHNjb3JlIDwgMFxuICAgIHJldHVybiAndXNzcidcbiAgaWYgc2NvcmUgPiAwXG4gICAgcmV0dXJuICd1c2EnXG4gICcnXG5cblxuc2hFbnRyeSA9IChzaCktPlxuICByb3VuZFNpZGUgPSBpZiBzaC5zdGF0ZS5nYW1lLnJvdW5kICUgMiA9PSAwIHRoZW4gJ3VzYScgZWxzZSAndXNzcidcbiAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgcm91bmRTaWRlID0gJydcblxuICBpZiBzaC5zdGF0ZS5nYW1lLnR1cm4gPiAxMFxuICAgIHR1cm4gPSBcIkVORFwiXG4gICAgcm91bmQgPSAnJ1xuICBlbHNlIGlmIHNoLnN0YXRlLmdhbWUudHVybiA+IDBcbiAgICB0dXJuID0gXCJUI3tnYW1lVmFsRGlzcGxheSgndHVybicsIHNoLnN0YXRlLmdhbWUudHVybil9LVwiXG4gICAgaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCAhPSAwXG4gICAgICByb3VuZCA9IFwiQVIje2dhbWVWYWxEaXNwbGF5KCdyb3VuZCcsIHNoLnN0YXRlLmdhbWUucm91bmQpfVwiXG4gICAgZWxzZVxuICAgICAgcm91bmQgPSBcIkhFQURcIlxuICBlbHNlXG4gICAgdHVybiA9IFwiU0VUVVBcIlxuICAgIHJvdW5kID0gJydcblxuICB0dXJuUm91bmQgPVxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICd0dXJuUm91bmQnLCBbXG4gICAgICB0dXJuXG4gICAgICBSLnNwYW4gY2xhc3NOYW1lOiByb3VuZFNpZGUsIHJvdW5kXG4gICAgXVxuXG4gIHNoU2lkZSA9IHNoLm1ldGEuc2lkZVxuXG4gIHN3aXRjaCBzaC5tZXRhLnR5cGVcbiAgICAjIExvYWQgc3RhdGUgZnJvbSB1cmxcbiAgICB3aGVuICdsb2FkJ1xuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgJ0xvYWRlZCBzdGF0ZSBmcm9tIFVSTCdcbiAgICAgIF1cbiAgICB3aGVuICdpcCdcbiAgICAgIFtpcFVTQSwgaXBVU1NSXSA9IHNoLm1ldGEuaXBzXG4gICAgICBjb3VudHJ5ID0gc2gubWV0YS5jb3VudHJ5XG4gICAgICBjdHJsVVNBID0gaWYgKGlwVVNBIC0gaXBVU1NSKSA+PSBjb3VudHJ5LnN0YWIgdGhlbiAnY29udHJvbCcgZWxzZSAnJ1xuICAgICAgY3RybFVTU1IgPSBpZiAoaXBVU1NSIC0gaXBVU0EpID49IGNvdW50cnkuc3RhYiB0aGVuICdjb250cm9sJyBlbHNlICcnXG5cbiAgICAgIGlmIHNoLm1ldGEuc2lkZSA9PSAnYm90aCdcbiAgICAgICAgaXBzID0gW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhIGlwXCIsIGludFRvU3RyV2l0aFNpZ24gc2gubWV0YS5kZWx0YVswXVxuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwiZGl2aWRlclwiLCAnLydcbiAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiBcInVzc3IgaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhWzFdXG4gICAgICAgIF1cbiAgICAgIGVsc2VcbiAgICAgICAgaXBzID0gUi5zcGFuIGNsYXNzTmFtZTogXCIje3NoLm1ldGEuc2lkZX0gaXBcIiwgaW50VG9TdHJXaXRoU2lnbiBzaC5tZXRhLmRlbHRhW3N1cGVycG93ZXJUb0luZGV4IHNoLm1ldGEuc2lkZV1cblxuICAgICAgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgaXBzXG4gICAgICAgIFwiIGluICN7c2gubWV0YS5jb3VudHJ5LnNob3J0bmFtZX0gKFwiXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IFwidXNhICN7Y3RybFVTQX1cIiwgc2gubWV0YS5pcHNbMF1cbiAgICAgICAgXCIvXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ1c3NyICN7Y3RybFVTU1J9XCIsIHNoLm1ldGEuaXBzWzFdXG4gICAgICAgIFwiKVwiXG4gICAgICBdXG4gICAgd2hlbiAndmFsJ1xuICAgICAgb2xkU2lkZSA9IG5ld1NpZGUgPSBzaC5tZXRhLnNpZGVcblxuICAgICAgaWYgc2gubWV0YS5pZCA9PSAnc2NvcmUnXG4gICAgICAgIG9sZFNpZGUgPSBzY29yZVNpZGUgc2gubWV0YS5vbGRcbiAgICAgICAgbmV3U2lkZSA9IHNjb3JlU2lkZSBzaC5tZXRhLm5ld1xuXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFwiI3t1cHBlckZpcnN0KHNoLm1ldGEuaWQpfSBcIlxuICAgICAgICBSLnN0cm9uZyBjbGFzc05hbWU6IG9sZFNpZGUsIFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm9sZCwgJ2xvbmcnKX0gXCJcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ2Fycm93JywgJ+KelCAnXG4gICAgICAgIFIuc3Ryb25nIGNsYXNzTmFtZTogbmV3U2lkZSwgXCIje2dhbWVWYWxEaXNwbGF5KHNoLm1ldGEuaWQsIHNoLm1ldGEubmV3LCAnbG9uZycpfVwiXG4gICAgICBdXG4gICAgd2hlbiAncm91bmQnXG4gICAgICBzaWRlID0gcm91bmRTaWRlXG4gICAgICByb3VuZFRpdGxlID0gaWYgc2guc3RhdGUuZ2FtZS5yb3VuZCA9PSAwXG4gICAgICAgICAgXCJIZWFkbGluZSBQaGFzZVwiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBcIiN7c2lkZS50b1VwcGVyQ2FzZSgpfSBBY3Rpb24gUm91bmQgI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgICAgIFxuICAgICAgI3NpZGUgPSBbJ3Vzc3InLCAndXNhJ11bKHNoLnN0YXRlLmdhbWUucm91bmQgKyAxKSAlIDJdXG4gICAgICBSLnNwYW4ge30sIFtcbiAgICAgICAgdHVyblJvdW5kXG4gICAgICAgIFIuc3BhbiBjbGFzc05hbWU6IHNpZGUsIHJvdW5kVGl0bGVcbiAgICAgIF1cbiAgICB3aGVuICd0dXJuJ1xuICAgICAgZGlzcCA9IFwiI3tnYW1lVmFsRGlzcGxheShzaC5tZXRhLmlkLCBzaC5tZXRhLm5ldywgJ2xvbmcnKX1cIlxuICAgICAgaWYgc2guc3RhdGUuZ2FtZS50dXJuICE9IDAgYW5kIHNoLnN0YXRlLmdhbWUudHVybiA8PSAxMFxuICAgICAgICBkaXNwID0gXCJUdXJuICN7ZGlzcH1cIlxuICAgICAgUi5zcGFuIGNsYXNzTmFtZTonc3Ryb25nJywgW1xuICAgICAgICB0dXJuUm91bmRcbiAgICAgICAgZGlzcFxuICAgICAgXVxuICAgIGVsc2VcbiAgICAgIHNoLm1ldGEubXNnXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdCb2FyZFN0YXRlSGlzdG9yeUVudHJ5J1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QKS0+XG4gICAgc2hvdWxkSXQgPSBmYWxzZVxuICAgIHRQID0gQHByb3BzXG4gICAgdFNoTSA9IEBwcm9wcy5zaC5tZXRhXG4gICAgblNoTSA9IG5QLnNoLm1ldGFcbiAgICAjIElQIHBsYWNlbWVudFxuICAgIGlmIHRTaE0/Lmlwcz9cbiAgICAgIHNob3VsZEl0ID0gdFNoTS5pcHNbMF0gIT0gblNoTS5pcHNbMF0gb3JcbiAgICAgICAgdFNoTS5pcHNbMV0gIT0gblNoTS5pcHNbMV1cbiAgICBpZiB0U2hNLnR5cGUgPT0gJ3ZhbCdcbiAgICAgIHNob3VsZEl0ID0gdFNoTS5uZXcgIT0gblNoTS5uZXdcbiAgICAjIElmIGN1cnJlbnQvbGF0ZXN0IGNoYW5nZWRcbiAgICBpZiB0UC5pc0xhdGVzdCAhPSBuUC5pc0xhdGVzdCBvciB0UC5pc0N1cnJlbnQgIT0gblAuaXNDdXJyZW50XG4gICAgICBzaG91bGRJdCA9IHRydWVcblxuICAgIHNob3VsZEl0XG5cbiAgcmVuZGVyOi0+XG4gICAgYXR0cnMgPVxuICAgICAgb25DbGljazogQHByb3BzLm9uQ2xpY2tcbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICAgICAgJ2NsZWFyZml4JzogdHJ1ZVxuICAgICAgICAnU3RhdGVIaXN0b3J5LWxhdGVzdCc6IEBwcm9wcy5pc0xhdGVzdFxuICAgICAgICAnU3RhdGVIaXN0b3J5LWN1cnJlbnQnOiBAcHJvcHMuaXNDdXJyZW50XG4gICAgUi5saSBhdHRycywgc2hFbnRyeShAcHJvcHMuc2gpXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5Cb2FyZFN0YXR1c1ZhbHVlID0gcmVxdWlyZSAnLi9Cb2FyZFN0YXR1c1ZhbHVlJ1xuRGllID0gcmVxdWlyZSAnLi9EaWUnXG5cbnRhYmxlID1cbiAgJ1Njb3JlJzogJ1MnXG4gICdEZWZjb24nOiAnRCdcbiAgJ01pbE9wcy11c2EnOiAnTSdcbiAgJ01pbE9wcy11c3NyJzogJ08nXG4gICdUdXJuJzogJ1QnXG4gICdSb3VuZCc6ICdSJ1xuICAnU3BhY2UtdXNhJzogJ3AnXG4gICdTcGFjZS11c3NyJzogJ2EnXG4gICdBY3Rpb24gSGlzdG9yeSc6ICdIJ1xuICAnUm9sbCBkaWNlJzogJ2MnXG5cbmhpbGlnaHRTaG9ydGN1dExldHRlciA9ICh0aXRsZSxzaWRlPScnKS0+XG4gIHRpdGxlU2lkZSA9IHRpdGxlXG4gIGlmIHNpZGUgIT0gJycgYW5kIHRpdGxlICE9ICdSb3VuZCcgYW5kIHRpdGxlICE9ICdTY29yZSdcbiAgICB0aXRsZVNpZGUgPSBcIiN7dGl0bGV9LSN7c2lkZX1cIlxuXG4gIFtoZWFkLCB0YWlsXSA9IHRpdGxlLnNwbGl0IHRhYmxlW3RpdGxlU2lkZV1cbiAgbWlkID0gdGFibGVbdGl0bGVTaWRlXVxuICBbXG4gICAgaGVhZFxuICAgIFIuc3BhbiBjbGFzc05hbWU6ICdTdGF0dXNMYWJlbC1zaG9ydGN1dCcsIG1pZFxuICAgIHRhaWxcbiAgXVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXMnXG5cbiAgcm9sbERpY2U6IC0+XG4gICAgXy5lYWNoIEByZWZzLCAocmVmKS0+IHJlZi5yb2xsRGllKClcblxuICBoYW5kbGVCb3RoQ2xpY2s6IC0+XG4gICAgQHJvbGxEaWNlKClcblxuICByZW5kZXI6IC0+XG4gIFxuICAgIHNjb3JlU2lkZSA9ICcnXG4gICAgaWYgQHByb3BzLnNjb3JlICE9IDBcbiAgICAgIHNjb3JlU2lkZSA9IGlmIEBwcm9wcy5zY29yZSA8IDAgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgIyBSb3VuZDogMCBpcyBoZWFkbGluZSwgb2RkcyBhcmUgVVNTUiwgZXZlbnMgYXJlIFVTQVxuICAgIHJvdW5kID0gaWYgQHByb3BzLnJvdW5kID09IDAgdGhlbiAnSCcgZWxzZSBNYXRoLmNlaWwoQHByb3BzLnJvdW5kIC8gMilcbiAgICByb3VuZFNpZGUgPSAnJ1xuICAgIGlmIEBwcm9wcy5yb3VuZCAhPSAwXG4gICAgICByb3VuZFNpZGUgPSBpZiBAcHJvcHMucm91bmQgJSAyID09IDEgdGhlbiAndXNzcicgZWxzZSAndXNhJ1xuXG4gICAgdHVybiA9IHN3aXRjaCBAcHJvcHMudHVyblxuICAgICAgd2hlbiAwIHRoZW4gJ1MnXG4gICAgICB3aGVuIDExIHRoZW4gJ0UnXG4gICAgICBlbHNlIEBwcm9wcy50dXJuXG5cbiAgICAjIFNob3J0aGFuZCBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICBzdGF0dXNWYWx1ZSA9IChpZD0nJywgdGl0bGU9JycsIHZhbD0nJywgc2lkZT0nJyk9PlxuICAgICAgdGl0bGUgPSBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgdGl0bGUsIHNpZGVcbiAgICAgIEJvYXJkU3RhdHVzVmFsdWUgXy5hc3NpZ24ge2lkLCB0aXRsZSwgdmFsLCBzaWRlfSwgaGFuZGxlVmFsQ2xpY2s6IEBwcm9wcy5oYW5kbGVWYWxDbGlja1xuXG5cbiAgICBSLmRpdiBjbGFzc05hbWU6ICdCb2FyZFN0YXR1cycsIFtcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NvbCcsIFtcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3Njb3JlJywgJ1Njb3JlJywgTWF0aC5hYnMoQHByb3BzLnNjb3JlKSwgc2NvcmVTaWRlXG4gICAgICAgIHN0YXR1c1ZhbHVlICdkZWZjb24nLCAnRGVmY29uJywgQHByb3BzLmRlZmNvblxuICAgICAgICBzdGF0dXNWYWx1ZSAnbWlsb3BzJywgJ01pbE9wcycsIEBwcm9wcy5taWxvcHNbMF0sICd1c2EnXG4gICAgICAgIHN0YXR1c1ZhbHVlICdtaWxvcHMnLCAnTWlsT3BzJywgQHByb3BzLm1pbG9wc1sxXSwgJ3Vzc3InXG4gICAgICBdXG4gICAgICBSLmRpdiBjbGFzc05hbWU6ICdjb2wnLCBbXG4gICAgICAgIHN0YXR1c1ZhbHVlICd0dXJuJywgJ1R1cm4nLCB0dXJuXG4gICAgICAgIHN0YXR1c1ZhbHVlICdyb3VuZCcsICdSb3VuZCcsIHJvdW5kLCByb3VuZFNpZGVcbiAgICAgICAgc3RhdHVzVmFsdWUgJ3NwYWNlJywgJ1NwYWNlJywgQHByb3BzLnNwYWNlWzBdLCAndXNhJ1xuICAgICAgICBzdGF0dXNWYWx1ZSAnc3BhY2UnLCAnU3BhY2UnLCBAcHJvcHMuc3BhY2VbMV0sICd1c3NyJ1xuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzJywgW1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXVuZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndW5kbycpLCBbXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeiknXG4gICAgICAgICAgICAnIFVuZG8nXG4gICAgICAgICAgXVxuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLWhpc3RvcnknLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwndG9nZ2xlJyksXG4gICAgICAgICAgICBoaWxpZ2h0U2hvcnRjdXRMZXR0ZXIgJ0FjdGlvbiBIaXN0b3J5J1xuICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOiAnaGlzdG9yeUNvbnRyb2xzLXJlZG8nLFxuICAgICAgICAgIFIuYSBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlSGlzdG9yeUNsaWNrLmJpbmQobnVsbCwncmVkbycpLCBbXG4gICAgICAgICAgICAnUmVkbyAnXG4gICAgICAgICAgICBSLnNwYW4gY2xhc3NOYW1lOidTdGF0dXNMYWJlbC1zaG9ydGN1dCcsICcoeSknXG4gICAgICAgICAgXVxuICAgICAgXVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiAnZGljZScsIFtcbiAgICAgICAgRGllIHJlZjogJ2RpZS11c2EnLCBzaWRlOiAndXNhJ1xuICAgICAgICBSLmEgY2xhc3NOYW1lOiAncm9sbC1kaWNlJywgb25DbGljazogQGhhbmRsZUJvdGhDbGljaywgaGlsaWdodFNob3J0Y3V0TGV0dGVyKCdSb2xsIGRpY2UnKVxuICAgICAgICBEaWUgcmVmOiAnZGllLXVzc3InLCBzaWRlOiAndXNzcidcbiAgICAgIF1cbiAgICBdXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQm9hcmRTdGF0dXNWYWx1ZSdcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoblApLT5cbiAgICBuUC52YWwgIT0gQHByb3BzLnZhbCBvciBuUC5zaWRlICE9IEBwcm9wcy5zaWRlXG4gIHJlbmRlcjogLT5cbiAgICBzaWRlQ2xhc3MgPSBzd2l0Y2ggQHByb3BzLnNpZGVcbiAgICAgIHdoZW4gJ3VzYScsICd1c3NyJyB0aGVuIEBwcm9wcy5zaWRlXG4gICAgICBlbHNlICcnXG5cbiAgICBkZWNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdkZWMnXG4gICAgICBvbkNsaWNrOiBAcHJvcHMuaGFuZGxlVmFsQ2xpY2suYmluZChudWxsLCBAcHJvcHMuaWQsICdkZWMnLCBAcHJvcHMuc2lkZSlcbiAgICBpbmNBdHRycyA9XG4gICAgICBjbGFzc05hbWU6ICdpbmMnLFxuICAgICAgb25DbGljazogQHByb3BzLmhhbmRsZVZhbENsaWNrLmJpbmQobnVsbCwgQHByb3BzLmlkLCAnaW5jJywgQHByb3BzLnNpZGUpXG5cbiAgICBSLmRpdiB7fSwgW1xuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c0xhYmVsXCIsIEBwcm9wcy50aXRsZVxuICAgICAgUi5kaXYgY2xhc3NOYW1lOiBcIlN0YXR1c1ZhbHVlICN7c2lkZUNsYXNzfVwiLCBbXG4gICAgICAgIFIuc3BhbiBkZWNBdHRycywgJ+KXgCdcbiAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogJ3ZhbCcsIEBwcm9wcy52YWxcbiAgICAgICAgUi5zcGFuIGluY0F0dHJzLCAn4pa2J1xuICAgICAgXVxuICAgIF1cblxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcbnplcm9QYWQgPSByZXF1aXJlICcuLi9saWJzL3plcm9QYWQnXG5cbmNhcmRTdGFnZXMgPSAxOidFQVJMWScsIDI6J01JRCcsIDM6J0xBVEUnXG5cbmNhcmRDbGFzc05hbWUgPSAocHJvcHMpIC0+XG4gIGNsYXNzZXMgPSBjeFxuICAgICdhc2lhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdBc2lhIFNjb3JpbmcnXG4gICAgJ2V1cm9wZVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnRXVyb3BlIFNjb3JpbmcnXG4gICAgJ21pZGRsZUVhc3RTY29yaW5nJzogcHJvcHMudGl0bGUgPT0gJ01pZGRsZSBFYXN0IFNjb3JpbmcnXG4gICAgJ2NlbnRyYWxBbWVyaWNhU2NvcmluZyc6IHByb3BzLnRpdGxlID09ICdDZW50cmFsIEFtZXJpY2EgU2NvcmluZydcbiAgICAnc291dGhlYXN0QXNpYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGhlYXN0IEFzaWEgU2NvcmluZyonXG4gICAgJ2FmcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnQWZyaWNhIFNjb3JpbmcnXG4gICAgJ3NvdXRoQW1lcmljYVNjb3JpbmcnOiBwcm9wcy50aXRsZSA9PSAnU291dGggQW1lcmljYSBTY29yaW5nJ1xuICAgICdvbmdvaW5nJzogcHJvcHMub25nb2luZ1xuXG4gIFwib3duZXItI3twcm9wcy5vd25lcn0gY2FyZC12aWV3LSN7cHJvcHMudmlld30gI3tjbGFzc2VzfVwiXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3NcbiAgZGlzcGxheU5hbWU6ICdDYXJkJ1xuICByZW5kZXI6IC0+XG4gICAgbWFpbiA9IFtcbiAgICAgICAgUi5zcGFuIHtjbGFzc05hbWU6ICdjYXJkLXRpdGxlLWhvbGRlcicgfSwgW1xuICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLXN0YWdlJywgY2FyZFN0YWdlc1tAcHJvcHMuc3RhZ2VdXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLW9wcycsIGlmIEBwcm9wcy5vcHMgPCAxIHRoZW4gXCJTXCIgZWxzZSBAcHJvcHMub3BzXG4gICAgICAgICAgUi5oNCBjbGFzc05hbWU6ICdjYXJkLXRpdGxlJywgW1xuICAgICAgICAgICAgXCIje0Bwcm9wcy50aXRsZX0gXCJcbiAgICAgICAgICAgIFIuc3BhbiBjbGFzc05hbWU6ICdjYXJkLWlkJywgXCIjI3tAcHJvcHMuaWR9XCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgUi5wIGNsYXNzTmFtZTogJ2NhcmQtdGV4dCcsIEBwcm9wcy50ZXh0XG4gICAgICBdXG5cbiAgICBpZiBAcHJvcHMudmlldyA9PSAnaW1nJ1xuICAgICAgbWFpbiA9XG4gICAgICAgIFIuaW1nXG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2FyZC1pbWcnXG4gICAgICAgICAgc3JjOiBcIi9pbWFnZXMvY2FyZHMvc20vI3t6ZXJvUGFkIEBwcm9wcy5pZH0uanBnXCJcblxuICAgIFIuYSBocmVmOiBcIiMvY2FyZC8je0Bwcm9wcy5pZH1cIiwgY2xhc3NOYW1lOiBjYXJkQ2xhc3NOYW1lKEBwcm9wcykgKyAnIGNhcmQnLCBtYWluXG5cbiIsIlIgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG56ZXJvUGFkID0gcmVxdWlyZSAnLi4vbGlicy96ZXJvUGFkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZEltZydcbiAgcmVuZGVyOiAtPlxuICAgIFIuZGl2IGNsYXNzTmFtZTogJ2NhcmQgY2FyZEltZycsXG4gICAgICBSLmEgaHJlZjogXCIjL2NhcmQvI3tAcHJvcHMuaWR9XCIsXG4gICAgICAgIFIuaW1nIHNyYzogXCIvaW1hZ2VzL2NhcmRzL3NtLyN7emVyb1BhZCBAcHJvcHMuaWR9LmpwZ1wiXG4iLCJSID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5DYXJkID0gcmVxdWlyZSAnLi9DYXJkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQ2FyZExpc3QnXG4gIHJlbmRlcjogLT5cbiAgICBjbGFzc05hbWUgPSBjeFxuICAgICAgJ2NhcmRMaXN0JzogdHJ1ZVxuICAgICAgJ2NhcmRMaXN0RnVsbCc6IEBwcm9wcy52aWV3ID09ICd0ZXh0J1xuICAgICAgJ2NhcmRMaXN0SW1nJzogQHByb3BzLnZpZXcgPT0gJ2ltZydcbiAgICBSLmRpdiB7Y2xhc3NOYW1lfSwgQHByb3BzLmNhcmRzLm1hcCAoZWwpID0+XG4gICAgICBDYXJkIF8ubWVyZ2UgZWwsXG4gICAgICAgIGtleTogXCJjYXJkI3tlbC5pZH1cIlxuICAgICAgICBzaG93RnVsbFRleHQ6IEBwcm9wcy5mdWxsVGV4dFxuICAgICAgICB2aWV3OiBAcHJvcHMudmlld1xuIiwiUiA9IFJlYWN0LkRPTVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnRGllJ1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogKG5QLCBuUyktPlxuICAgIG5TLnJvbGxpbmcgIT0gQHN0YXRlLnJvbGxpbmcgb3IgblMudmFsICE9IEBzdGF0ZS52YWxcblxuICBnZXREZWZhdWx0UHJvcHM6IC0+XG4gICAgcm9sbHM6IDMwXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIHZhbDogMVxuICAgIHJvbGxpbmc6IGZhbHNlXG4gICAgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gIGNsaWNrRGllOiAtPlxuICAgIEByb2xsRGllKClcblxuICByb2xsRGllOiAtPlxuICAgIHJldHVybiBpZiBAc3RhdGUucm9sbGluZ1xuICAgIEBpdGVyYXRlUm9sbCgpXG5cbiAgaXRlcmF0ZVJvbGw6IC0+XG4gICAgaWYgbm90IEBzdGF0ZS5yb2xsaW5nXG4gICAgICBAc2V0U3RhdGUgcm9sbGluZzogdHJ1ZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuXG4gICAgaWYgQHN0YXRlLnJvbGxzID09IDBcbiAgICAgIEBzZXRTdGF0ZSByb2xsaW5nOiBmYWxzZSwgcm9sbHM6IEBwcm9wcy5yb2xsc1xuICAgIGVsc2VcbiAgICAgIHRpbWUgPSAoMTAgLSBAc3RhdGUucm9sbHMpICogMTggKyA1MFxuICAgICAgaWYgQHN0YXRlLnJvbGxzID4gMTBcbiAgICAgICAgdGltZSA9IDUwXG5cbiAgICAgIEBzZXRTdGF0ZVxuICAgICAgICB2YWw6IF8ucmFuZG9tKDEsNilcbiAgICAgICAgcm9sbHM6IEBzdGF0ZS5yb2xscyAtIDFcbiAgICAgIHNldFRpbWVvdXQgQGl0ZXJhdGVSb2xsLCB0aW1lXG5cbiAgcmVuZGVyOiAtPlxuICAgIHJvbGxpbmcgPSBpZiBAc3RhdGUucm9sbGluZyBhbmQgQHN0YXRlLnJvbGxzID4gMCB0aGVuICdyb2xsaW5nJyBlbHNlICcnXG4gICAgUi5kaXYgb25DbGljazogQGNsaWNrRGllLCBjbGFzc05hbWU6IFwiZGllIGRpZS0je0Bwcm9wcy5zaWRlfSAje3JvbGxpbmd9XCIsIEBzdGF0ZS52YWxcblxuIiwiUiA9IFJlYWN0LkRPTVxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICByZW5kZXI6IC0+XG4gICAgUi5kaXYgY2xhc3NOYW1lOiAnZm9vdGVyJywgW1xuICAgICAgUi5wIHt9LCBbXG4gICAgICAgIFwiVHdpU3RydWcgd2FzIG1hZGUgYnkgXCJcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9qanQuaW8nLCAnSmFzb24gVHJpbGwnXG4gICAgICAgICcgd2l0aCBoZWxwIGZyb20gJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2NvZmZlZXNjcmlwdC5vcmcvJywgJ0NvZmZlZVNjcmlwdCdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC8nLCAnUmVhY3QnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9icm93c2VyaWZ5Lm9yZy8nLCAnQnJvd3NlcmlmeSdcbiAgICAgICAgJywgJ1xuICAgICAgICBSLmEgaHJlZjonaHR0cDovL2xvZGFzaC5jb20vJywgJ0xvLURhc2gnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsICdCb290c3RyYXAnXG4gICAgICAgICcsICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly96ZXB0b2pzLmNvbScsICdaZXB0bydcbiAgICAgICAgJywgYW5kICdcbiAgICAgICAgUi5hIGhyZWY6J2h0dHA6Ly9ndWxwanMuY29tJywgJ0d1bHAnXG4gICAgICAgICcuJ1xuICAgICAgICBSLmJyKClcbiAgICAgICAgJ0l0IG93ZXMgaXRzIGV4aXN0ZW5jZSB0byAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpbGlnaHRzdHJhdGVneS5jb20nLCAnVHdpbGlnaHQgU3RyYXRlZ3knXG4gICAgICAgICcuIENvbW1lbnRzLCBzdWdnZXN0aW9ucywgYW5kIGJ1ZyByZXBvcnRzIGNhbiBiZSBhaW1lZCBhdCAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vZ2l0aHViLmNvbS9qanQvdHdpc3RydWcvaXNzdWVzJywgJ0dpdGh1YidcbiAgICAgICAgJyBvciAnXG4gICAgICAgIFIuYSBocmVmOidodHRwOi8vdHdpdHRlci5jb20vamFzb250cmlsbCcsICdAamFzb250cmlsbCdcbiAgICAgICAgJy4nXG4gICAgICBdXG4gICAgXVxuIiwiUiA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuICBkaXNwbGF5TmFtZTogJ05hdlZpZXcnXG4gIGdldERlZmF1bHRQcm9wczogLT5cbiAgICBhY3RpdmU6ICcnXG5cbiAgcmVuZGVyOiAtPlxuXG4gICAgbGkgPSAobWVudUtleSwgaHJlZiwgdGl0bGUpPT5cbiAgICAgIFIubGkgY2xhc3NOYW1lOiBjeCgnYWN0aXZlJzogQHByb3BzLmFjdGl2ZSA9PSBtZW51S2V5KSxcbiAgICAgICAgUi5hIGhyZWY6IGhyZWYsIHRpdGxlXG5cbiAgICBSLm5hdiBjbGFzc05hbWU6IFwibmF2YmFyIFwiLCByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiwgW1xuXG4gICAgICAgIFIuZGl2IGNsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgUi5hIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgaHJlZjogJyMvJywgW1xuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJ0d2lcIiwgXCJUd2lcIlxuICAgICAgICAgICAgUi5zcGFuIGNsYXNzTmFtZTogXCJzdHJ1Z1wiLCBcIlN0cnVnXCJcbiAgICAgICAgICBdXG5cbiAgICAgICAgUi51bCBjbGFzc05hbWU6IFwibmF2IG5hdmJhci1uYXZcIiwgW1xuICAgICAgICAgIGxpICdjYXJkcycsICcjL2NhcmRzJywgJ0NhcmRzJ1xuICAgICAgICAgIGxpICdib2FyZCcsICcjL2JvYXJkJywgJ0JvYXJkJ1xuICAgICAgICAgIGxpICdhYm91dCcsICcjL2Fib3V0JywgJ0Fib3V0J1xuICAgICAgICBdXG5cbiAgICAgIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJykoX19kaXJuYW1lLCBbJyouY29mZmVlJ10pXG4iXX0=
