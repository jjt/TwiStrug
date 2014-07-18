# Hashed qs
# Handles strings and arrays
# Anything with a comma will be parsed as an array
module.exports =
  merge: (obj)->

  get: (field)->
  
  set: (field, val)->
    qsObj = @toObj() || {}
    qsObj[field] = val
    @setQS @toQS(qsObj)

  delete: (field)->
    qsObj = @toObj() || {}
    return if not qsObj?
    delete qsObj[field]
    @setQS @toQS qsObj

  encodeCharsIn: ['=','&']

  encodeCharsOut:['%3D','%26']

  encode: (obj)->
    if _.isArray obj
      obj = obj.join(',')
    obj.replace(@encodeCharsIn, @encodeCharsOut)

  decode: (str)->
    str = str.replace(@encodeCharsOut, @encodeCharsIn)
    if str.indexOf(',') != -1
      str = str.split(',')
    str


  toObj: (qs = window.location.hash.split('?')?[1])->
    if not qs
      return
    out = {}
    pairs = qs.split('&')
    pairs?.forEach (pair)=>
      kvArr = pair.split('=')
      out[@decode(kvArr[0])] = @decode(kvArr[1])
    out

  toQS: (obj)->
    pairs = []
    for own k,v of obj
      pairs.push "#{@encode(k)}=#{@encode(v)}"
    pairs.join('&')
       
  setQS: (qs)->
    window.location.hash = window.location.hash.split('?')[0] + '?' + qs
 


