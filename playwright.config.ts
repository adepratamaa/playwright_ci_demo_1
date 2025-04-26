import { PlaywrightTestConfig } from 'playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  reporter: [['html', { outputFolder: 'test-results' }]],
};

export default config;
