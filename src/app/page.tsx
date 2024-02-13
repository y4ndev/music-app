import { Genres } from "@/components/Genres/Genres";
import { Popular } from "@/components/Popular/Popular";
import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.inner}>
        <Genres />
        <Popular />
      </div>
    </div>
  );
}
