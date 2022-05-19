import styles from './topMenuItem.module.scss';

const TopMenuItem = ({title}) => {
  return (
	<div className={styles.topMenuItem}>{title}</div>
  )
}
export default TopMenuItem;