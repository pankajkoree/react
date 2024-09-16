/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      //   {
      //     // as the permanent is false it will redirect to
      //     source: "/redirection",
      //     destination: "/userlist",
      //     permanent: false,
      //   },

      // last way,best way to redirect
      {
        source: "/redirection/:id",
        destination: "/userlist",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
