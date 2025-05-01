import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "./types";
import { monsterHunterExplanations } from "./monsterHunterExplanations";

interface MonsterHunterGuideProps {
  pattern: PatternKey;
}

export default function MonsterHunterGuide({
  pattern,
}: MonsterHunterGuideProps) {
  const explanation = monsterHunterExplanations[pattern] || {
    title: "Monster Hunter Guide",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "",
    tips: [],
  };

  return (
    <div className={styles.monsterHunterGuide}>
      <h3>{explanation.title}</h3>
      <p>{explanation.description}</p>
      {explanation.example && (
        <div className={styles.example}>
          <h4>Example:</h4>
          <p>{explanation.example}</p>
        </div>
      )}
      {explanation.tips.length > 0 && (
        <div className={styles.tips}>
          <h4>Tips:</h4>
          <ul>
            {explanation.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
