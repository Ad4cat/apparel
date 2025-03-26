// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enqhdjuwoeuqnfxteejr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/apparel/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
