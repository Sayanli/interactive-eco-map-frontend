import React from "react";
import { YMaps, Map, ObjectManager } from "@pbe/react-yandex-maps";

const MapYa = ({ points }) => {

  const mapState = {
    center: [55.73, 37.9],
    zoom: 10,
    behaviors: ["default", "scrollZoom"]
  };

  const collection = {
    type: "FeatureCollection",
    features: points.map((point, id) => {
      return {
        id: id,
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [point.coordinates.lat, point.coordinates.lng]
        },

        properties: {
          balloonContent: `
          <div>
             <div>${point.city}</div>
             <div>Средняя температура весной: ${point.average_spring_temp}</div>
             <div>Средняя температура летом: ${point.average_summer_temp}</div>
             <div>Средняя температура осенью: ${point.average_autumn_temp}</div>
             <div>Кирилл гей</div>
             <div>Средняя температура зимой: ${point.average_winter_temp}</div>
             <div>Влажность воздуха: ${point.humidity}</div>
             <div>Уровень загрязнения воздуха: ${point.air_pollution}</div>

          </div>
        `,
          clusterCaption: `Метка №${id + 1}`
        }
      };
    })
  };
  console.log(collection)

  return (
    <>
      <YMaps>
        <Map width="100vw" height="100vh" state={mapState}>
          <ObjectManager
            objects={{
              openBalloonOnClick: true
            }}
            clusters={{}}
            options={{
              clusterize: true,
              gridSize: 32
            }}
            defaultFeatures={collection}
            features={collection}
            modules={[
              "objectManager.addon.objectsBalloon",
              "objectManager.addon.clustersBalloon"
            ]}
          />
        
        </Map>
      </YMaps>
      
    </>
  );
};

export default MapYa;
