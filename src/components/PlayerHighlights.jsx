import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PlayerCard from "../components/PlayerCard";
import Pfp from "../assets/pfp.svg";

import styles from "./PlayerHighlights.module.css";

export default function PlayerHighlights() {
  const players = [
    { playerName: "Player Name", playerPosition: "(Enter Pos)", img: Pfp },
    { playerName: "Player Name2", playerPosition: "(Enter Pos)", img: Pfp },
    { playerName: "Player Name3", playerPosition: "(Enter Pos)", img: Pfp },
    { playerName: "Player Name4", playerPosition: "(Enter Pos)", img: Pfp },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      { breakpoint: 520, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <>
      <section aria-labelledby="player-highlights" className={styles.playerSec}>
        <h2 className={styles.heading} id="Player Hightlights">
          Player Highlights
        </h2>
        <div className={styles.playerCarousel}>
          <Slider {...settings} className={styles.sliderContainer}>
            {players.map((p, i) => (
              <div key={p.playerName || i} className={styles.slide}>
                <PlayerCard {...p} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* } <PlayerCard
            playerName={"Player Name"}
            playerPosition={"(Enter Pos)"}
          />
          <PlayerCard
            playerName={"Player Name"}
            playerPosition={"(Enter Pos)"}
          />
          <PlayerCard
            playerName={"Player Name"}
            playerPosition={"(Enter Pos)"}
          />
          <PlayerCard
            playerName={"Player Name"}
            playerPosition={"(Enter Pos)"}
          /> */}
    </>
  );
}
