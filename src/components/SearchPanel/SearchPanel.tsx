import style from "../SearchPanel/SearchPanel.module.scss";

const SearchPanel = () => {
  return (
    <div className={style.search}>
      <input className={style.panel} type="text" placeholder="Search" />
    </div>
  );
};

export { SearchPanel };
