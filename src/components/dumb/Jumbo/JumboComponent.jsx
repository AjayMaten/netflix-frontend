import React from "react";
import JumboItem from "./JumboItem/JumboItem";
import "./JumboComponent.css";

function JumboComponent() {
  const data = [
    {
      id: 1,
      title: "Enjoy on your TV.",
      subTitle:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imgSrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    },
    {
      id: 2,
      title: "Download your shows to watch offline.",
      subTitle:
        "Save your favourites easily and always have something to watch.",
      imgSrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    },
    {
      id: 3,
      title: "Watch everywhere.",
      subTitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgSrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    },
    {
      id: 4,
      title: "Create profiles for children.",
      subTitle:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      imgSrc:
        "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420",
    },
  ];

  return (
    <div className="jumbo-component">
      {data.map((value, index) => {
        return (
          <>
            <JumboItem
              key={value.id}
              alignment={index % 2 === 0}
              title={value.title}
              imgSrc={value.imgSrc}
              subTitle={value.subTitle}
            />
            <hr className="seperator" />
          </>
        );
      })}
    </div>
  );
}

export default JumboComponent;
