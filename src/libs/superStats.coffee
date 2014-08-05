getIpStats = (ips, countries)->
  accumulator = ->
    btl: 0
    non: 0
    total: 0
    eu:   non: 0, btl: 0, total: 0
    as:   non: 0, btl: 0, total: 0
    me:   non: 0, btl: 0, total: 0
    af:   non: 0, btl: 0, total: 0
    sa:   non: 0, btl: 0, total: 0
    ca:   non: 0, btl: 0, total: 0

  fn = (accum, ips, countryId)->
    country = _.find countries, id: parseInt(countryId, 10)
    if ips[0] - ips[1] >= country.stab
      accum[country.continent].total++
      accum.total++
      if country.btl
        accum[country.continent].btl++
        accum.btl++
      else
        accum[country.continent].non++
        accum.non++
    accum

  # Flipped to have USSR ips first
  ipsRev = _.map ips, (ips)-> _.cloneDeep(ips).reverse()

  usa = _.reduce ips, fn, accumulator()
  ussr = _.reduce ipsRev, fn, accumulator()

  {usa, ussr}

sumRegion = (metric, sum, region)-> sum + region[metric]

getRegionStats = (ipStats, regions)->
  stats = _.mapValues ipStats, (hero, power, powers)->
    villain = if power == 'usa' then powers.ussr else powers.usa
    regionStats = regions.map (region)->
      hRegion = hero[region.id]
      vRegion = villain[region.id]
      domination = hRegion.non > 0 and hRegion.btl > vRegion.btl and hRegion.total > vRegion.total
      control = hRegion.btl == region.numBtl and hRegion.total > vRegion.total
      presence = not domination and not control and hRegion.total > 0
      { presence, domination, control }

    regionStats = _.zipObject _.pluck(regions, 'id'), regionStats
    regionStats = _.assign regionStats,
      presence: _.reduce regionStats, sumRegion.bind(null, 'presence'), 0
      domination: _.reduce regionStats, sumRegion.bind(null, 'domination'), 0
      control: _.reduce regionStats, sumRegion.bind(null, 'control'), 0
  
  stats

module.exports = (ips, countryArr, regionArr)->
  countries = getIpStats(ips, countryArr)
  regions = getRegionStats(countries, regionArr)
  {countries, regions}


