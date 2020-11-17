(function() {var implementors = {};
implementors["abstutil"] = [{"text":"impl Serialize for Manifest","synthetic":false,"types":[]},{"text":"impl Serialize for Entry","synthetic":false,"types":[]},{"text":"impl Serialize for DataPacks","synthetic":false,"types":[]},{"text":"impl Serialize for MapName","synthetic":false,"types":[]},{"text":"impl Serialize for Tags","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;IndexableKey, V&gt; Serialize for FixedMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["collisions"] = [{"text":"impl Serialize for CollisionDataset","synthetic":false,"types":[]},{"text":"impl Serialize for Collision","synthetic":false,"types":[]},{"text":"impl Serialize for Severity","synthetic":false,"types":[]}];
implementors["convert_osm"] = [{"text":"impl Serialize for OnstreetParking","synthetic":false,"types":[]},{"text":"impl Serialize for PublicOffstreetParking","synthetic":false,"types":[]},{"text":"impl Serialize for PrivateOffstreetParking","synthetic":false,"types":[]}];
implementors["game"] = [{"text":"impl Serialize for RecordedStoryMap","synthetic":false,"types":[]}];
implementors["geom"] = [{"text":"impl Serialize for Angle","synthetic":false,"types":[]},{"text":"impl Serialize for Bounds","synthetic":false,"types":[]},{"text":"impl Serialize for GPSBounds","synthetic":false,"types":[]},{"text":"impl Serialize for Circle","synthetic":false,"types":[]},{"text":"impl Serialize for Distance","synthetic":false,"types":[]},{"text":"impl Serialize for Duration","synthetic":false,"types":[]},{"text":"impl Serialize for LonLat","synthetic":false,"types":[]},{"text":"impl Serialize for Line","synthetic":false,"types":[]},{"text":"impl Serialize for InfiniteLine","synthetic":false,"types":[]},{"text":"impl Serialize for Polygon","synthetic":false,"types":[]},{"text":"impl Serialize for PolyLine","synthetic":false,"types":[]},{"text":"impl Serialize for Pt2D","synthetic":false,"types":[]},{"text":"impl Serialize for Ring","synthetic":false,"types":[]},{"text":"impl Serialize for Speed","synthetic":false,"types":[]},{"text":"impl Serialize for Statistic","synthetic":false,"types":[]},{"text":"impl Serialize for Time","synthetic":false,"types":[]}];
implementors["headless"] = [{"text":"impl Serialize for FinishedTrip","synthetic":false,"types":[]},{"text":"impl Serialize for Delays","synthetic":false,"types":[]},{"text":"impl Serialize for Throughput","synthetic":false,"types":[]},{"text":"impl Serialize for AgentPositions","synthetic":false,"types":[]},{"text":"impl Serialize for AgentPosition","synthetic":false,"types":[]},{"text":"impl Serialize for RoadThroughput","synthetic":false,"types":[]},{"text":"impl Serialize for TrafficSignalState","synthetic":false,"types":[]}];
implementors["importer"] = [{"text":"impl Serialize for GenericCityImporter","synthetic":false,"types":[]}];
implementors["kml"] = [{"text":"impl Serialize for ExtraShapes","synthetic":false,"types":[]},{"text":"impl Serialize for ExtraShape","synthetic":false,"types":[]}];
implementors["map_model"] = [{"text":"impl Serialize for City","synthetic":false,"types":[]},{"text":"impl Serialize for PermanentMapEdits","synthetic":false,"types":[]},{"text":"impl Serialize for PermanentEditIntersection","synthetic":false,"types":[]},{"text":"impl Serialize for PermanentEditCmd","synthetic":false,"types":[]},{"text":"impl Serialize for EditRoad","synthetic":false,"types":[]},{"text":"impl Serialize for MapConfig","synthetic":false,"types":[]},{"text":"impl Serialize for DrivingSide","synthetic":false,"types":[]},{"text":"impl Serialize for AreaID","synthetic":false,"types":[]},{"text":"impl Serialize for AreaType","synthetic":false,"types":[]},{"text":"impl Serialize for Area","synthetic":false,"types":[]},{"text":"impl Serialize for BuildingID","synthetic":false,"types":[]},{"text":"impl Serialize for Building","synthetic":false,"types":[]},{"text":"impl Serialize for Amenity","synthetic":false,"types":[]},{"text":"impl Serialize for OffstreetParking","synthetic":false,"types":[]},{"text":"impl Serialize for BuildingType","synthetic":false,"types":[]},{"text":"impl Serialize for NamePerLanguage","synthetic":false,"types":[]},{"text":"impl Serialize for BusStopID","synthetic":false,"types":[]},{"text":"impl Serialize for BusRouteID","synthetic":false,"types":[]},{"text":"impl Serialize for BusStop","synthetic":false,"types":[]},{"text":"impl Serialize for BusRoute","synthetic":false,"types":[]},{"text":"impl Serialize for IntersectionID","synthetic":false,"types":[]},{"text":"impl Serialize for IntersectionType","synthetic":false,"types":[]},{"text":"impl Serialize for Intersection","synthetic":false,"types":[]},{"text":"impl Serialize for LaneID","synthetic":false,"types":[]},{"text":"impl Serialize for LaneType","synthetic":false,"types":[]},{"text":"impl Serialize for Lane","synthetic":false,"types":[]},{"text":"impl Serialize for ParkingLotID","synthetic":false,"types":[]},{"text":"impl Serialize for ParkingLot","synthetic":false,"types":[]},{"text":"impl Serialize for RoadID","synthetic":false,"types":[]},{"text":"impl Serialize for Direction","synthetic":false,"types":[]},{"text":"impl Serialize for DirectedRoadID","synthetic":false,"types":[]},{"text":"impl Serialize for Road","synthetic":false,"types":[]},{"text":"impl Serialize for ControlStopSign","synthetic":false,"types":[]},{"text":"impl Serialize for RoadWithStopSign","synthetic":false,"types":[]},{"text":"impl Serialize for ControlTrafficSignal","synthetic":false,"types":[]},{"text":"impl Serialize for Stage","synthetic":false,"types":[]},{"text":"impl Serialize for PhaseType","synthetic":false,"types":[]},{"text":"impl Serialize for TurnID","synthetic":false,"types":[]},{"text":"impl Serialize for TurnType","synthetic":false,"types":[]},{"text":"impl Serialize for TurnPriority","synthetic":false,"types":[]},{"text":"impl Serialize for Turn","synthetic":false,"types":[]},{"text":"impl Serialize for MovementID","synthetic":false,"types":[]},{"text":"impl Serialize for CompressedMovementID","synthetic":false,"types":[]},{"text":"impl Serialize for Movement","synthetic":false,"types":[]},{"text":"impl Serialize for AccessRestrictions","synthetic":false,"types":[]},{"text":"impl Serialize for Zone","synthetic":false,"types":[]},{"text":"impl Serialize for NodeID","synthetic":false,"types":[]},{"text":"impl Serialize for WayID","synthetic":false,"types":[]},{"text":"impl Serialize for RelationID","synthetic":false,"types":[]},{"text":"impl Serialize for OsmID","synthetic":false,"types":[]},{"text":"impl Serialize for ContractionHierarchyPathfinder","synthetic":false,"types":[]},{"text":"impl Serialize for VehiclePathfinder","synthetic":false,"types":[]},{"text":"impl Serialize for Node","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Ord + Debug + Serialize&gt; Serialize for NodeMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for IntersectionCluster","synthetic":false,"types":[]},{"text":"impl Serialize for UberTurn","synthetic":false,"types":[]},{"text":"impl Serialize for SidewalkPathfinder","synthetic":false,"types":[]},{"text":"impl Serialize for WalkingNode","synthetic":false,"types":[]},{"text":"impl Serialize for PathStep","synthetic":false,"types":[]},{"text":"impl Serialize for Path","synthetic":false,"types":[]},{"text":"impl Serialize for PathConstraints","synthetic":false,"types":[]},{"text":"impl Serialize for PathRequest","synthetic":false,"types":[]},{"text":"impl Serialize for Pathfinder","synthetic":false,"types":[]},{"text":"impl Serialize for RawMap","synthetic":false,"types":[]},{"text":"impl Serialize for OriginalRoad","synthetic":false,"types":[]},{"text":"impl Serialize for RawRoad","synthetic":false,"types":[]},{"text":"impl Serialize for RawIntersection","synthetic":false,"types":[]},{"text":"impl Serialize for RawBuilding","synthetic":false,"types":[]},{"text":"impl Serialize for RawArea","synthetic":false,"types":[]},{"text":"impl Serialize for RawParkingLot","synthetic":false,"types":[]},{"text":"impl Serialize for RestrictionType","synthetic":false,"types":[]},{"text":"impl Serialize for RawBusRoute","synthetic":false,"types":[]},{"text":"impl Serialize for RawBusStop","synthetic":false,"types":[]},{"text":"impl Serialize for Position","synthetic":false,"types":[]},{"text":"impl Serialize for Traversable","synthetic":false,"types":[]},{"text":"impl Serialize for Map","synthetic":false,"types":[]}];
implementors["sim"] = [{"text":"impl Serialize for Analytics","synthetic":false,"types":[]},{"text":"impl&lt;X:&nbsp;Ord + Clone&gt; Serialize for TimeSeriesCount&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for CapSimState","synthetic":false,"types":[]},{"text":"impl Serialize for Zone","synthetic":false,"types":[]},{"text":"impl Serialize for AvoidCongestion","synthetic":false,"types":[]},{"text":"impl Serialize for Event","synthetic":false,"types":[]},{"text":"impl Serialize for AlertLocation","synthetic":false,"types":[]},{"text":"impl Serialize for TripPhaseType","synthetic":false,"types":[]},{"text":"impl Serialize for ScenarioGenerator","synthetic":false,"types":[]},{"text":"impl Serialize for SpawnOverTime","synthetic":false,"types":[]},{"text":"impl Serialize for BorderSpawnOverTime","synthetic":false,"types":[]},{"text":"impl Serialize for OriginDestination","synthetic":false,"types":[]},{"text":"impl Serialize for ScenarioModifier","synthetic":false,"types":[]},{"text":"impl Serialize for Scenario","synthetic":false,"types":[]},{"text":"impl Serialize for PersonSpec","synthetic":false,"types":[]},{"text":"impl Serialize for IndividTrip","synthetic":false,"types":[]},{"text":"impl Serialize for SpawnTrip","synthetic":false,"types":[]},{"text":"impl Serialize for TripPurpose","synthetic":false,"types":[]},{"text":"impl Serialize for TripSpec","synthetic":false,"types":[]},{"text":"impl Serialize for Car","synthetic":false,"types":[]},{"text":"impl Serialize for CarState","synthetic":false,"types":[]},{"text":"impl Serialize for DrivingSimState","synthetic":false,"types":[]},{"text":"impl Serialize for IntersectionSimState","synthetic":false,"types":[]},{"text":"impl Serialize for State","synthetic":false,"types":[]},{"text":"impl Serialize for SignalState","synthetic":false,"types":[]},{"text":"impl Serialize for Request","synthetic":false,"types":[]},{"text":"impl Serialize for ParkingSimState","synthetic":false,"types":[]},{"text":"impl Serialize for NormalParkingSimState","synthetic":false,"types":[]},{"text":"impl Serialize for ParkingLane","synthetic":false,"types":[]},{"text":"impl Serialize for InfiniteParkingSimState","synthetic":false,"types":[]},{"text":"impl Serialize for Queue","synthetic":false,"types":[]},{"text":"impl Serialize for WalkingSimState","synthetic":false,"types":[]},{"text":"impl Serialize for Pedestrian","synthetic":false,"types":[]},{"text":"impl Serialize for PedState","synthetic":false,"types":[]},{"text":"impl Serialize for Cmd","synthetic":false,"types":[]},{"text":"impl Serialize for Router","synthetic":false,"types":[]},{"text":"impl Serialize for Goal","synthetic":false,"types":[]},{"text":"impl Serialize for Command","synthetic":false,"types":[]},{"text":"impl Serialize for CommandType","synthetic":false,"types":[]},{"text":"impl Serialize for Item","synthetic":false,"types":[]},{"text":"impl Serialize for Scheduler","synthetic":false,"types":[]},{"text":"impl Serialize for Sim","synthetic":false,"types":[]},{"text":"impl Serialize for Stop","synthetic":false,"types":[]},{"text":"impl Serialize for Route","synthetic":false,"types":[]},{"text":"impl Serialize for Bus","synthetic":false,"types":[]},{"text":"impl Serialize for BusState","synthetic":false,"types":[]},{"text":"impl Serialize for TransitSimState","synthetic":false,"types":[]},{"text":"impl Serialize for TripManager","synthetic":false,"types":[]},{"text":"impl Serialize for Trip","synthetic":false,"types":[]},{"text":"impl Serialize for TripInfo","synthetic":false,"types":[]},{"text":"impl Serialize for TripLeg","synthetic":false,"types":[]},{"text":"impl Serialize for TripMode","synthetic":false,"types":[]},{"text":"impl Serialize for TripEndpoint","synthetic":false,"types":[]},{"text":"impl Serialize for Person","synthetic":false,"types":[]},{"text":"impl Serialize for PersonState","synthetic":false,"types":[]},{"text":"impl Serialize for CarID","synthetic":false,"types":[]},{"text":"impl Serialize for PedestrianID","synthetic":false,"types":[]},{"text":"impl Serialize for AgentID","synthetic":false,"types":[]},{"text":"impl Serialize for AgentType","synthetic":false,"types":[]},{"text":"impl Serialize for TripID","synthetic":false,"types":[]},{"text":"impl Serialize for PersonID","synthetic":false,"types":[]},{"text":"impl Serialize for OrigPersonID","synthetic":false,"types":[]},{"text":"impl Serialize for VehicleType","synthetic":false,"types":[]},{"text":"impl Serialize for Vehicle","synthetic":false,"types":[]},{"text":"impl Serialize for VehicleSpec","synthetic":false,"types":[]},{"text":"impl Serialize for ParkingSpot","synthetic":false,"types":[]},{"text":"impl Serialize for ParkedCar","synthetic":false,"types":[]},{"text":"impl Serialize for DrivingGoal","synthetic":false,"types":[]},{"text":"impl Serialize for SidewalkSpot","synthetic":false,"types":[]},{"text":"impl Serialize for SidewalkPOI","synthetic":false,"types":[]},{"text":"impl Serialize for TimeInterval","synthetic":false,"types":[]},{"text":"impl Serialize for DistanceInterval","synthetic":false,"types":[]},{"text":"impl Serialize for CreatePedestrian","synthetic":false,"types":[]},{"text":"impl Serialize for CreateCar","synthetic":false,"types":[]}];
implementors["widgetry"] = [{"text":"impl Serialize for CameraState","synthetic":false,"types":[]},{"text":"impl Serialize for Color","synthetic":false,"types":[]},{"text":"impl Serialize for ScreenDims","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()