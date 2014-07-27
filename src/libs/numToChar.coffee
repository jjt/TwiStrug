# Encode/decode numbers into single-char representations
# 0-35  -> 0,1,2..a,b,c..z
# 36-61 -> A,B,C...
module.exports =
  encode: (n)->
    if n < 36 then out = n.toString(36) else String.fromCharCode n + 29

  decode: (c = '0')->
    code = c.charCodeAt 0
    # Calculate offset from charcode to value
    offset = switch
      # 0-9
      when 48 <= code <= 57 then 48
      # 10-35
      when 97 <= code <= 122 then 87
      # 36-61
      when 65 <= code <= 90 then 29

    code - offset
