import { CronJob } from 'cron';
import { refreshAllVideos } from './ytapi.js';

export const job = new CronJob({
  cronTime: '*/5 * * * * *',
  onTick: refreshAllVideos,
});

export default () => job.start();
