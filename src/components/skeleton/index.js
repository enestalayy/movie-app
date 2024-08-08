import styles from "./styles.module.css";

const Skeleton = ({ width, height }) => {
  return (
    <div className={styles.skeleton} style={{ width, height }}>
      Skeleton
    </div>
  );
};

export default Skeleton;
