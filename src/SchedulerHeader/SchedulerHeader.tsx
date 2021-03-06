/**
 * @class SchedulerHeader
 */

import React from 'react';
import { ViewType } from '../Scheduler';

// import styles from './styles.css';

export type Props = { viewType: ViewType };

const SchedulerHeader: React.FC<Props> = () => {
  return (
    <div>
      <span>Left</span>
      <span>현재 날짜</span>
      <span>Right</span>
      <div>
        <button>일간</button>
        <button>주간</button>
        <button>월간</button>
      </div>
    </div>
  );
};

export default SchedulerHeader;
