import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    VitePWA({
      includeAssets: ['Puck.jpeg','runningdog.gif','defaultuser.png'],
      manifest: {
        name: "Doggr",
        short_name: "Doggr",
        description: "Check in for dogs",
        theme_color: "#DDD8C4",
        icons: [],
      },
      devOptions: { enabled: true },
      registerType: 'autoUpdate'
    }),
  ],
  envDir: "env"
})
