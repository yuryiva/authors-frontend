const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_51IAcqYDle1Cl217pMufz4egXcGPGMG2Ooko3tiOqf60DtUEz7ujPSkDfPbmga6qvel7NbmK9S0o5rOtfj8pSsbWq00vW0qtt4U"
    : "pk_test_51IAcqYDle1Cl217pMufz4egXcGPGMG2Ooko3tiOqf60DtUEz7ujPSkDfPbmga6qvel7NbmK9S0o5rOtfj8pSsbWq00vW0qtt4U";

export default STRIPE_PUBLISHABLE;
