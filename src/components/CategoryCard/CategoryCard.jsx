import styles from './CategoryCard.module.css';

export const CategoryCard = ({ icon, title, specs, color }) => {
  return (
    <article
      className={styles.card}
      style={{
        borderColor: color
      }}
    >
      <i className={styles.icon}>
        {icon}
      </i>

      <h1 className={styles.title}>
        {title}
      </h1>

      <ul className={styles.list}>
        {
          specs.map(
            (spec) =>
              // eslint-disable-next-line react/jsx-key
              <li>
                <p className={styles.spec}>{spec}</p>
              </li>
          )
        }
      </ul>

      <a
        className={styles.link}
        href='#'
      >
        View all
      </a>
    </article>
  )
}