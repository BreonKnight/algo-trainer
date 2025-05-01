import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "./types";
import { monsterHunterExplanations } from "./monsterHunterExplanations";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

export function MonsterHunterGuide({
  currentPattern,
}: MonsterHunterGuideProps) {
  const explanation = monsterHunterExplanations[currentPattern] || {
    title: "Monster Hunter Guide",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  };

  return (
    <div
      className={`${styles.pseudocodeContainer} w-full h-full overflow-hidden`}
    >
      <div
        className={`${styles.pseudocodeContent} text-sm sm:text-base w-full h-full overflow-y-auto`}
      >
        <div className="space-y-4 p-2">
          <div>
            <h3 className="text-lg font-semibold text-accent">
              {explanation.title}
            </h3>
            <p className="mt-1 text-main">{explanation.description}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">
              Hunting Example:
            </h4>
            <p className="mt-1 italic text-main">{explanation.example}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">Hunter's Tips:</h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {explanation.tips.map((tip, index) => (
                <li key={index} className="text-main">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
