const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Chỉ dùng withNativeWind nếu nativewind đã được cài
try {
  const { withNativeWind } = require('nativewind/metro');
  module.exports = withNativeWind(config, { 
    input: './global.css',
  });
} catch (error) {
  console.log('NativeWind not found, using default config');
  module.exports = config;
}
