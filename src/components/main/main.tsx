import styles from './main.module.scss';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import SectionBanner from './sectionBanner/sectionBanner';

const Main = () => {
  return (
	<div className={styles.main}>
		<SectionBanner />
		<Section2 />
		<Section3 />
	</div>
  )
}
export default Main;
