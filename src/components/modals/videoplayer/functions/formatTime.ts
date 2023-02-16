import { MIN_IN_HOUR, SEC_IN_HOUR, SEC_IN_MINUTE } from '../../../../types/constants';

const convertNumToString = (num: number): string =>
  num.toString().padStart(2, '0');

const formatTime = (time: number) => {
  toString().padStart(2, '0');
  const sec = Math.floor(time % SEC_IN_MINUTE);
  const min = Math.floor(time / SEC_IN_MINUTE) % MIN_IN_HOUR;
  const hour = Math.floor(time / SEC_IN_HOUR);
  return `-${convertNumToString(hour)}:${convertNumToString(
    min,
  )}:${convertNumToString(sec)}`;
};

export default formatTime;