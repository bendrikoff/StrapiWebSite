module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80c22deb13ba85df3fdbdcb1bb586c87'),
  },
});
