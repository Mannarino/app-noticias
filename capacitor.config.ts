import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-app',
  webDir: 'dist/app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
