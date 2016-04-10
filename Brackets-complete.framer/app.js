(function() {
  var aniShot, shot, sketch;

  sketch = Framer.Importer.load("imported/CameraTagging@4x");

  Utils.globalLayers(sketch);

  shot = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: "white",
    visible: false
  });

  item1.states.add({
    on: {
      opacity: 1.0
    },
    off: {
      opacity: 0.0
    }
  });

  item1.states.switchInstant("off");

  item2.states.add({
    on: {
      opacity: 1.0
    },
    off: {
      opacity: 0.0
    }
  });

  item2.states.switchInstant("off");

  tag1.states.add({
    on: {
      opacity: 1.0
    },
    off: {
      opacity: 0.0
    }
  });

  tag1.states.switchInstant("off");

  tag2.states.add({
    on: {
      opacity: 1.0
    },
    off: {
      opacity: 0.0
    }
  });

  tag2.states.switchInstant("off");

  camera.states.add({
    on: {
      opacity: 0.0
    },
    off: {
      opacity: 1.0
    }
  });

  aniShot = new Animation({
    layer: shot,
    properties: {
      opacity: 0.0
    },
    time: 0.3
  });

  camera.on(Events.Click, function() {
    camera.states.switchInstant("on");
    shot.visible = true;
    aniShot.start();
    tag1.states["switch"]("on", {
      delay: 1.0
    });
    return tag2.states["switch"]("on", {
      delay: 0.5
    });
  });

  tag1.on(Events.Click, function() {
    return item1.states["switch"]("on");
  });

  tag2.on(Events.Click, function() {
    return item2.states["switch"]("on");
  });

  item1.onClick(function() {
    if (item1.states.current === "on") {
      camera.states.switchInstant("off");
      tag1.states.switchInstant("off");
      tag2.states.switchInstant("off");
      item1.states.switchInstant("off");
      return item2.states.switchInstant("off");
    }
  });

  item2.onClick(function() {
    if (item2.states.current === "on") {
      camera.states.switchInstant("off");
      tag1.states.switchInstant("off");
      tag2.states.switchInstant("off");
      item1.states.switchInstant("off");
      return item2.states.switchInstant("off");
    }
  });

}).call(this);
