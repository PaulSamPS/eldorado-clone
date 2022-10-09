import styles from './Timer.module.scss';
import { TimerProps } from './Timer.props';
import cn from 'classnames';
import { useTimer } from '../../hooks/useTimer';

const Timer = ({ className, ...props }: TimerProps): JSX.Element => {
  const { hours, minutes, seconds, updateProducts } = useTimer();

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <span className={styles.timer} onClick={updateProducts}>
        {hours < 10 ? `0${hours}` : hours}
        <div>:</div>
        {minutes < 10 ? `0${minutes}` : minutes}
        <div>:</div>
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
