import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/silva93felipe.png" alt="Felipe"/>
            <div>
                <strong>Felipe Santos</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}