import MainBanner from './mainBanner/mainBanner';
import styles from './sectionBanner.module.scss';
import TopMenu from './topMenu/topMenu';

const sectionBanner = () => {
  return (
	<div className={styles.sectionBanner}>
		<TopMenu />
		<MainBanner />
	</div>
  )
}
export default sectionBanner;
