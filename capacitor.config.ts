/**
 * Starches Capacitor Configuration for Android & Mobile Packaging
 * Build command: npm run build && npx cap sync android
 */

interface CapacitorConfig {
  appId: string;
  appName: string;
  webDir: string;
  bundledWebRuntime?: boolean;
  server?: {
    androidScheme?: string;
    cleartext?: boolean;
    url?: string;
  };
  plugins?: Record<string, unknown>;
}

const config: CapacitorConfig = {
  appId: 'tz.co.starches.app',
  appName: 'Starches',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      backgroundColor: '#FAFAF7',
      showSpinner: false,
      androidSplashResourceName: 'splash',
    },
    Geolocation: {
      // High accuracy GPS for Tanzanian ward and street delivery
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
