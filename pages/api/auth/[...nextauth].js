import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import InstagramProvider from 'next-auth/providers/instagram';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorizationUrl: process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZATION_URL,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    InstagramProvider({
      clientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
    }),
    {
      id: 'tiktok',
      name: 'tiktok',
      type: 'oauth',
      scope: 'user.info.basic',
      authorization: {
        url: 'https://www.tiktok.com/auth/authorize/',
        params: {
          scope: 'user.info.basic',
          response_type: 'code',
          client_key: 'aw8ho11e71voemc2',
          redirect_uri: 'https://32b3-114-124-130-59.ngrok.io',
        },
      },
      token: {
        url: 'https://open-api.tiktok.com/oauth/access_token/',
        params: {
          client_key: 'aw8ho11e71voemc2',
          client_secret: '233b01b244b5b69385907a730e19dd6a',
          grant_type: 'authorization_code',
        },
      },
      profile: 'https://open-api.tiktok.com/user/info/',
      clientId: 'aw8ho11e71voemc2',
      clientSecret: '233b01b244b5b69385907a730e19dd6a',
    },
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  debug: true,
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    // async signIn({
    // user, account, profile, email, credentials,
    // }) {
    // console.log('signIn', {
    //   user, account, profile, email, credentials,
    // });
    // return true;
    // },
    // async redirect({ url, baseUrl }) {
    // console.log('redirect', { url, baseUrl });
    // return url;
    // },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.userId = token?.id || user?.id || null;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});
