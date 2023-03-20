import React from "react";
import { YMaps, Map, ObjectManager, Placemark } from "@pbe/react-yandex-maps";

const MapYa = ({ points }) => {
  const [aItem, setAitem] = React.useState(points);



  const onItemPush = () => {
    setAitem.push({
      id: "2",
      coordinates: [61.699623, 30.690952],
      title: "Пристань Метеоров"
    });
  };
  const onItemDelete = () => {
    setAitem([]);
  };
  const mapState = {
    center: [55.73, 37.9],
    zoom: 10,
    behaviors: ["default", "scrollZoom"]
  };
  const collection = {
    type: "FeatureCollection",
    features: aItem.map((point, id) => {
      return {
        id: id,
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: point.coordinates
        },

        properties: {
          balloonContent: `
          <div>${point.title}</div>
        `,
          clusterCaption: `Метка №${id + 1}`
        }
      };
    })
  };

  return (
    <>
      <YMaps>
        <Map width="100vw" height="100vh" state={mapState}>
          <Placemark geometry={[61.702423, 30.688193]} />
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
