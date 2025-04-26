import { PlaywrightTestConfig } from 'playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  reporter: [
    ['html', { outputFile: 'test-results.html' }], // Generates an HTML report
  ],
};

export default config;
