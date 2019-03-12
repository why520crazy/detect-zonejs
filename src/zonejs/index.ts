Zone.current
  .fork({
    name: "api",
    properties: {
      id: Math.random()
    },
    onHasTask(
      parentZoneDelegate: ZoneDelegate,
      currentZone: Zone,
      targetZone: Zone,
      hasTaskState: HasTaskState
    ) {
      console.log(`111`);
    }
  })
  .run(async () => {
    console.log(`en`);
  });
