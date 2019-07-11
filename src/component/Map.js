import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map({ tasks }) {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 59.436962, lng: 24.753574 }}
      >
        {tasks.map(task => (
          <Marker
            key={task.id}
            position={{
              lat: task.address.location.coordinates[1],
              lng: task.address.location.coordinates[0]
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
