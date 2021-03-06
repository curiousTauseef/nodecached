net = require("net")
cache = require("./cache")
cache.init({ 'max_memory': 20}) 
server = net.createServer((c) ->
	console.log "client connected"

	c.on "data", (data) ->
		c.write cache.dispatch(data)

	c.on "end", ->
		console.log "client disconnected"
)

server.listen 11211, ->
	console.log "server bound"
