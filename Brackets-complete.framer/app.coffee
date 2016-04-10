# Import file "CameraTagging" (sizes and positions are scaled 1:4)
sketch = Framer.Importer.load("imported/CameraTagging@4x")

Utils.globalLayers(sketch)

# Show kayer
shot = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "white"
	visible: false
	
# States
item1.states.add
	on:
		opacity: 1.0
	off:
		opacity: 0.0
item1.states.switchInstant "off"

item2.states.add
	on:
		opacity: 1.0
	off:
		opacity: 0.0
item2.states.switchInstant "off"

tag1.states.add
	on:
		opacity: 1.0
	off:
		opacity: 0.0
tag1.states.switchInstant "off"

tag2.states.add
	on:
		opacity: 1.0
	off:
		opacity: 0.0
tag2.states.switchInstant "off"	

camera.states.add 
	on:
		opacity: 0.0
	off:
		opacity: 1.0
		
# Animation
aniShot = new Animation
	layer: shot
	properties: 
		opacity: 0.0
	time: 0.3
	
# Events
camera.on Events.Click, ->
	camera.states.switchInstant "on"
	shot.visible = true
	aniShot.start()
	tag1.states.switch "on", delay: 1.0
	tag2.states.switch "on", delay: 0.5

tag1.on Events.Click, ->
	#print "tag1"
	item1.states.switch "on"

tag2.on Events.Click, ->
	#print "tag2"
	item2.states.switch "on"

item1.onClick ->
	#print "item1"
	if item1.states.current is "on"
		#print "item1 on"
        camera.states.switchInstant "off"
        tag1.states.switchInstant "off"
        tag2.states.switchInstant "off"
        item1.states.switchInstant "off"
        item2.states.switchInstant "off"

item2.onClick ->
	#print "item2"
	if item2.states.current is "on"
        #print "item2 on"
        camera.states.switchInstant "off"
        tag1.states.switchInstant "off"
        tag2.states.switchInstant "off"
        item1.states.switchInstant "off"
        item2.states.switchInstant "off"	