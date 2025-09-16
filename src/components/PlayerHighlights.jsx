import styles from "./PlayerHighlights.module.css";

import PlayerCard from "../components/PlayerCard";

export default function PlayerHighlights() {
  return (
    <>
      <section className={styles.playerHighlightsSec}>
        <h2 className={styles.heading}>Player Highlights</h2>
        <div className={styles.playerSec}>
          <PlayerCard playerName={"Lisa Ann"} playerPosition={"PG"} />
          <PlayerCard playerName={"Bianca Moore"} playerPosition={"SG"} />
          <PlayerCard playerName={"Samantha Cooke"} playerPosition={"C"} />
        </div>
      </section>
    </>
  );
}
