import React from "react";
import { YMaps, Map, ObjectManager } from "@pbe/react-yandex-maps";
import { FaBeer } from "react-icons/fa";

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
          balloonContentHeader:`
          <div>
              <img src="https://img.icons8.com/bubbles/256/city.png" width="35" height="35" alt=""/>
              <a>${point.city}</a><br>
          </div>
          `,
          balloonContentBody: `
             <div>
              <img src="https://img.icons8.com/bubbles/256/springtime.png" width="35" height="35" alt=""/>
              Средняя температура весной: ${point.average_spring_temp}
             </div>
             <div>
                <img src="https://img.icons8.com/bubbles/256/summertime.png" width="35" height="35" alt=""/>
                Средняя температура летом: ${point.average_summer_temp}
             </div>
             <div>
                <img src="https://img.icons8.com/bubbles/256/autumntime.png" width="35" height="35" alt=""/>
                Средняя температура осенью: ${point.average_autumn_temp}
             </div>
             <div>
                <img src="https://img.icons8.com/bubbles/256/wintertime.png" width="35" height="35" alt=""/>
                Средняя температура зимой: ${point.average_winter_temp}
             </div>
             <div>
                <img src="https://img.icons8.com/bubbles/256/water.png" width="35" height="35" alt=""/>
                Влажность воздуха(%): ${point.humidity}
             </div>

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
