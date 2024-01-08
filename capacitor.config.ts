import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.marvel.app',
  appName: 'marvel-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
