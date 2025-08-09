import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";

export function MainForm() {
  return (
    <form action="" className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="task"
          labelText="Task"
          type="text"
          placeholder="Write task here"
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} type="submit" />
      </div>
    </form>
  );
}
