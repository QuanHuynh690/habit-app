import * as Location from "expo-location";
import React from "react";
import MapView, { Marker } from "react-native-maps";

import { Challenge } from "@shared/type/challenge.type";
import { getColorMarkerByType } from "@shared/utilities/map";

export interface MapViewProps {
  location: Location.LocationObjectCoords;
  nearby?: Challenge[];
  onSelectMarker: (challenge: Challenge) => void;
}
export default function MapScreen({
  location,
  nearby,
  onSelectMarker,
}: MapViewProps) {
  return (
    <MapView
      style={{ height: 500, marginTop: 24 }}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={location} title="You are here!" />

      {nearby?.map((challenge) => (
        <Marker
          key={challenge.id}
          coordinate={challenge.location.coordinate}
          title={challenge.name}
          description={`${challenge.reward.sui} SUI + ${challenge.reward?.badge}`}
          pinColor={getColorMarkerByType(challenge.type)}
          onPress={() => onSelectMarker(challenge)}
        />
      ))}
    </MapView>
  );
}
