import styles from './cardQuestion.module.scss';
import floor from '../../../../images/floor.png';

const CardQuestion = () => {
  return (
	<div className={styles.cardQuestion}>
		<img src={floor} />

	</div>
  )
}
export default CardQuestion;