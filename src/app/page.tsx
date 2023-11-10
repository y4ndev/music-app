import { Header } from "@/components/Header/Header";
import style from "./page.module.scss";
export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.inner}>
        <div className={style.title}>Hello world</div>
        <Header />
      </div>
    </div>
  );
}
