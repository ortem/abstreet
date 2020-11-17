(function() {var implementors = {};
implementors["abstutil"] = [{"text":"impl Clone for MapName","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Clone, V:&nbsp;Clone&gt; Clone for MultiMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + PartialEq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Ord + PartialEq + Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Ord + PartialEq&gt; Clone for Counter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Tags","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Clone + IndexableKey, V:&nbsp;Clone&gt; Clone for FixedMap&lt;K, V&gt;","synthetic":false,"types":[]}];
implementors["collisions"] = [{"text":"impl Clone for Severity","synthetic":false,"types":[]}];
implementors["convert_osm"] = [{"text":"impl Clone for OnstreetParking","synthetic":false,"types":[]},{"text":"impl Clone for PublicOffstreetParking","synthetic":false,"types":[]},{"text":"impl Clone for PrivateOffstreetParking","synthetic":false,"types":[]}];
implementors["game"] = [{"text":"impl Clone for Flags","synthetic":false,"types":[]},{"text":"impl Clone for ColorSchemeChoice","synthetic":false,"types":[]},{"text":"impl Clone for HeatmapOptions","synthetic":false,"types":[]},{"text":"impl Clone for Source","synthetic":false,"types":[]},{"text":"impl Clone for Show","synthetic":false,"types":[]},{"text":"impl Clone for Value","synthetic":false,"types":[]},{"text":"impl Clone for RecordedStoryMap","synthetic":false,"types":[]},{"text":"impl Clone for BundleEdits","synthetic":false,"types":[]},{"text":"impl Clone for ID","synthetic":false,"types":[]},{"text":"impl Clone for OpenTrip","synthetic":false,"types":[]},{"text":"impl Clone for Tab","synthetic":false,"types":[]},{"text":"impl Clone for DataOptions","synthetic":false,"types":[]},{"text":"impl Clone for SEIR","synthetic":false,"types":[]},{"text":"impl Clone for Options","synthetic":false,"types":[]},{"text":"impl Clone for Loc","synthetic":false,"types":[]},{"text":"impl Clone for Options","synthetic":false,"types":[]},{"text":"impl Clone for Options","synthetic":false,"types":[]},{"text":"impl Clone for TrafficSignalStyle","synthetic":false,"types":[]},{"text":"impl Clone for CameraAngle","synthetic":false,"types":[]},{"text":"impl Clone for UnzoomedAgents","synthetic":false,"types":[]},{"text":"impl Clone for BlockSelection","synthetic":false,"types":[]},{"text":"impl Clone for DashTab","synthetic":false,"types":[]},{"text":"impl Clone for TutorialPointer","synthetic":false,"types":[]},{"text":"impl Clone for Task","synthetic":false,"types":[]},{"text":"impl Clone for GameplayMode","synthetic":false,"types":[]},{"text":"impl Clone for SpeedSetting","synthetic":false,"types":[]}];
implementors["geom"] = [{"text":"impl Clone for Angle","synthetic":false,"types":[]},{"text":"impl Clone for Bounds","synthetic":false,"types":[]},{"text":"impl Clone for GPSBounds","synthetic":false,"types":[]},{"text":"impl Clone for Circle","synthetic":false,"types":[]},{"text":"impl Clone for Distance","synthetic":false,"types":[]},{"text":"impl Clone for Duration","synthetic":false,"types":[]},{"text":"impl Clone for LonLat","synthetic":false,"types":[]},{"text":"impl Clone for Line","synthetic":false,"types":[]},{"text":"impl Clone for InfiniteLine","synthetic":false,"types":[]},{"text":"impl Clone for Percent","synthetic":false,"types":[]},{"text":"impl Clone for Polygon","synthetic":false,"types":[]},{"text":"impl Clone for Triangle","synthetic":false,"types":[]},{"text":"impl Clone for PolyLine","synthetic":false,"types":[]},{"text":"impl Clone for Pt2D","synthetic":false,"types":[]},{"text":"impl Clone for HashablePt2D","synthetic":false,"types":[]},{"text":"impl Clone for Ring","synthetic":false,"types":[]},{"text":"impl Clone for Speed","synthetic":false,"types":[]},{"text":"impl Clone for Statistic","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + HgramValue&lt;T&gt;&gt; Clone for Histogram&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Time","synthetic":false,"types":[]},{"text":"impl Clone for UnitFmt","synthetic":false,"types":[]}];
implementors["kml"] = [{"text":"impl Clone for ExtraShape","synthetic":false,"types":[]}];
implementors["map_editor"] = [{"text":"impl Clone for ID","synthetic":false,"types":[]}];
implementors["map_model"] = [{"text":"impl Clone for PermanentMapEdits","synthetic":false,"types":[]},{"text":"impl Clone for PermanentEditIntersection","synthetic":false,"types":[]},{"text":"impl Clone for PermanentEditCmd","synthetic":false,"types":[]},{"text":"impl Clone for MapEdits","synthetic":false,"types":[]},{"text":"impl Clone for EditIntersection","synthetic":false,"types":[]},{"text":"impl Clone for EditRoad","synthetic":false,"types":[]},{"text":"impl Clone for EditCmd","synthetic":false,"types":[]},{"text":"impl Clone for Partition","synthetic":false,"types":[]},{"text":"impl Clone for MapConfig","synthetic":false,"types":[]},{"text":"impl Clone for DrivingSide","synthetic":false,"types":[]},{"text":"impl Clone for AreaID","synthetic":false,"types":[]},{"text":"impl Clone for AreaType","synthetic":false,"types":[]},{"text":"impl Clone for BuildingID","synthetic":false,"types":[]},{"text":"impl Clone for Amenity","synthetic":false,"types":[]},{"text":"impl Clone for OffstreetParking","synthetic":false,"types":[]},{"text":"impl Clone for NamePerLanguage","synthetic":false,"types":[]},{"text":"impl Clone for BusStopID","synthetic":false,"types":[]},{"text":"impl Clone for BusRouteID","synthetic":false,"types":[]},{"text":"impl Clone for BusStop","synthetic":false,"types":[]},{"text":"impl Clone for IntersectionID","synthetic":false,"types":[]},{"text":"impl Clone for IntersectionType","synthetic":false,"types":[]},{"text":"impl Clone for LaneID","synthetic":false,"types":[]},{"text":"impl Clone for LaneType","synthetic":false,"types":[]},{"text":"impl Clone for ParkingLotID","synthetic":false,"types":[]},{"text":"impl Clone for RoadID","synthetic":false,"types":[]},{"text":"impl Clone for Direction","synthetic":false,"types":[]},{"text":"impl Clone for DirectedRoadID","synthetic":false,"types":[]},{"text":"impl Clone for ControlStopSign","synthetic":false,"types":[]},{"text":"impl Clone for RoadWithStopSign","synthetic":false,"types":[]},{"text":"impl Clone for ControlTrafficSignal","synthetic":false,"types":[]},{"text":"impl Clone for Stage","synthetic":false,"types":[]},{"text":"impl Clone for PhaseType","synthetic":false,"types":[]},{"text":"impl Clone for TurnID","synthetic":false,"types":[]},{"text":"impl Clone for TurnType","synthetic":false,"types":[]},{"text":"impl Clone for TurnPriority","synthetic":false,"types":[]},{"text":"impl Clone for Turn","synthetic":false,"types":[]},{"text":"impl Clone for MovementID","synthetic":false,"types":[]},{"text":"impl Clone for CompressedMovementID","synthetic":false,"types":[]},{"text":"impl Clone for Movement","synthetic":false,"types":[]},{"text":"impl Clone for AccessRestrictions","synthetic":false,"types":[]},{"text":"impl Clone for RoadRank","synthetic":false,"types":[]},{"text":"impl Clone for NodeID","synthetic":false,"types":[]},{"text":"impl Clone for WayID","synthetic":false,"types":[]},{"text":"impl Clone for RelationID","synthetic":false,"types":[]},{"text":"impl Clone for OsmID","synthetic":false,"types":[]},{"text":"impl Clone for Node","synthetic":false,"types":[]},{"text":"impl Clone for IntersectionCluster","synthetic":false,"types":[]},{"text":"impl Clone for UberTurn","synthetic":false,"types":[]},{"text":"impl Clone for WalkingNode","synthetic":false,"types":[]},{"text":"impl Clone for PathStep","synthetic":false,"types":[]},{"text":"impl Clone for Path","synthetic":false,"types":[]},{"text":"impl Clone for PathConstraints","synthetic":false,"types":[]},{"text":"impl Clone for PathRequest","synthetic":false,"types":[]},{"text":"impl Clone for OriginalRoad","synthetic":false,"types":[]},{"text":"impl Clone for RawRoad","synthetic":false,"types":[]},{"text":"impl Clone for RawIntersection","synthetic":false,"types":[]},{"text":"impl Clone for RawBuilding","synthetic":false,"types":[]},{"text":"impl Clone for RawArea","synthetic":false,"types":[]},{"text":"impl Clone for RawParkingLot","synthetic":false,"types":[]},{"text":"impl Clone for RestrictionType","synthetic":false,"types":[]},{"text":"impl Clone for TurnRestriction","synthetic":false,"types":[]},{"text":"impl Clone for Position","synthetic":false,"types":[]},{"text":"impl Clone for Traversable","synthetic":false,"types":[]}];
implementors["sim"] = [{"text":"impl Clone for Analytics","synthetic":false,"types":[]},{"text":"impl&lt;X:&nbsp;Clone + Ord&gt; Clone for TimeSeriesCount&lt;X&gt;","synthetic":false,"types":[]},{"text":"impl Clone for CapSimState","synthetic":false,"types":[]},{"text":"impl Clone for Zone","synthetic":false,"types":[]},{"text":"impl Clone for AvoidCongestion","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for AlertLocation","synthetic":false,"types":[]},{"text":"impl Clone for TripPhaseType","synthetic":false,"types":[]},{"text":"impl Clone for ScenarioGenerator","synthetic":false,"types":[]},{"text":"impl Clone for SpawnOverTime","synthetic":false,"types":[]},{"text":"impl Clone for BorderSpawnOverTime","synthetic":false,"types":[]},{"text":"impl Clone for OriginDestination","synthetic":false,"types":[]},{"text":"impl Clone for SimFlags","synthetic":false,"types":[]},{"text":"impl Clone for ScenarioModifier","synthetic":false,"types":[]},{"text":"impl Clone for Scenario","synthetic":false,"types":[]},{"text":"impl Clone for PersonSpec","synthetic":false,"types":[]},{"text":"impl Clone for IndividTrip","synthetic":false,"types":[]},{"text":"impl Clone for SpawnTrip","synthetic":false,"types":[]},{"text":"impl Clone for TripPurpose","synthetic":false,"types":[]},{"text":"impl Clone for TripSpec","synthetic":false,"types":[]},{"text":"impl Clone for Car","synthetic":false,"types":[]},{"text":"impl Clone for CarState","synthetic":false,"types":[]},{"text":"impl Clone for DrivingSimState","synthetic":false,"types":[]},{"text":"impl Clone for IntersectionSimState","synthetic":false,"types":[]},{"text":"impl Clone for State","synthetic":false,"types":[]},{"text":"impl Clone for SignalState","synthetic":false,"types":[]},{"text":"impl Clone for Request","synthetic":false,"types":[]},{"text":"impl Clone for ParkingSimState","synthetic":false,"types":[]},{"text":"impl Clone for NormalParkingSimState","synthetic":false,"types":[]},{"text":"impl Clone for ParkingLane","synthetic":false,"types":[]},{"text":"impl Clone for InfiniteParkingSimState","synthetic":false,"types":[]},{"text":"impl Clone for Queue","synthetic":false,"types":[]},{"text":"impl Clone for WalkingSimState","synthetic":false,"types":[]},{"text":"impl Clone for Pedestrian","synthetic":false,"types":[]},{"text":"impl Clone for PedState","synthetic":false,"types":[]},{"text":"impl Clone for PandemicModel","synthetic":false,"types":[]},{"text":"impl Clone for Cmd","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Ord&gt; Clone for SharedSpace&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for AnyTime","synthetic":false,"types":[]},{"text":"impl Clone for StateEvent","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for State","synthetic":false,"types":[]},{"text":"impl Clone for TrafficRecorder","synthetic":false,"types":[]},{"text":"impl Clone for DrawPedestrianInput","synthetic":false,"types":[]},{"text":"impl Clone for PedCrowdLocation","synthetic":false,"types":[]},{"text":"impl Clone for DrawCarInput","synthetic":false,"types":[]},{"text":"impl Clone for CarStatus","synthetic":false,"types":[]},{"text":"impl Clone for Router","synthetic":false,"types":[]},{"text":"impl Clone for Goal","synthetic":false,"types":[]},{"text":"impl Clone for Command","synthetic":false,"types":[]},{"text":"impl Clone for CommandType","synthetic":false,"types":[]},{"text":"impl Clone for SimpleCommandType","synthetic":false,"types":[]},{"text":"impl Clone for Item","synthetic":false,"types":[]},{"text":"impl Clone for Scheduler","synthetic":false,"types":[]},{"text":"impl Clone for Sim","synthetic":false,"types":[]},{"text":"impl Clone for SimOptions","synthetic":false,"types":[]},{"text":"impl Clone for AlertHandler","synthetic":false,"types":[]},{"text":"impl Clone for Stop","synthetic":false,"types":[]},{"text":"impl Clone for Route","synthetic":false,"types":[]},{"text":"impl Clone for Bus","synthetic":false,"types":[]},{"text":"impl Clone for BusState","synthetic":false,"types":[]},{"text":"impl Clone for TransitSimState","synthetic":false,"types":[]},{"text":"impl Clone for TripManager","synthetic":false,"types":[]},{"text":"impl Clone for Trip","synthetic":false,"types":[]},{"text":"impl Clone for TripInfo","synthetic":false,"types":[]},{"text":"impl Clone for TripLeg","synthetic":false,"types":[]},{"text":"impl Clone for TripMode","synthetic":false,"types":[]},{"text":"impl Clone for TripEndpoint","synthetic":false,"types":[]},{"text":"impl Clone for Person","synthetic":false,"types":[]},{"text":"impl Clone for PersonState","synthetic":false,"types":[]},{"text":"impl Clone for CarID","synthetic":false,"types":[]},{"text":"impl Clone for PedestrianID","synthetic":false,"types":[]},{"text":"impl Clone for AgentID","synthetic":false,"types":[]},{"text":"impl Clone for AgentType","synthetic":false,"types":[]},{"text":"impl Clone for TripID","synthetic":false,"types":[]},{"text":"impl Clone for PersonID","synthetic":false,"types":[]},{"text":"impl Clone for OrigPersonID","synthetic":false,"types":[]},{"text":"impl Clone for VehicleType","synthetic":false,"types":[]},{"text":"impl Clone for Vehicle","synthetic":false,"types":[]},{"text":"impl Clone for VehicleSpec","synthetic":false,"types":[]},{"text":"impl Clone for ParkingSpot","synthetic":false,"types":[]},{"text":"impl Clone for ParkedCar","synthetic":false,"types":[]},{"text":"impl Clone for DrivingGoal","synthetic":false,"types":[]},{"text":"impl Clone for SidewalkSpot","synthetic":false,"types":[]},{"text":"impl Clone for SidewalkPOI","synthetic":false,"types":[]},{"text":"impl Clone for TimeInterval","synthetic":false,"types":[]},{"text":"impl Clone for DistanceInterval","synthetic":false,"types":[]},{"text":"impl Clone for CreatePedestrian","synthetic":false,"types":[]},{"text":"impl Clone for CreateCar","synthetic":false,"types":[]}];
implementors["widgetry"] = [{"text":"impl Clone for HorizontalAlignment","synthetic":false,"types":[]},{"text":"impl Clone for VerticalAlignment","synthetic":false,"types":[]},{"text":"impl Clone for Color","synthetic":false,"types":[]},{"text":"impl Clone for Fill","synthetic":false,"types":[]},{"text":"impl Clone for Texture","synthetic":false,"types":[]},{"text":"impl Clone for LinearGradient","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Key","synthetic":false,"types":[]},{"text":"impl Clone for MultiKey","synthetic":false,"types":[]},{"text":"impl Clone for UpdateType","synthetic":false,"types":[]},{"text":"impl Clone for GeomBatch","synthetic":false,"types":[]},{"text":"impl Clone for ScreenPt","synthetic":false,"types":[]},{"text":"impl Clone for ScreenRectangle","synthetic":false,"types":[]},{"text":"impl Clone for ScreenDims","synthetic":false,"types":[]},{"text":"impl Clone for Style","synthetic":false,"types":[]},{"text":"impl Clone for Font","synthetic":false,"types":[]},{"text":"impl Clone for TextSpan","synthetic":false,"types":[]},{"text":"impl Clone for Text","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()