import Navbar from "../components/Navbar";
import Landing from "../pages/Landing";
// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param comonent the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  comonent: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar />
      {comonent}
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: "/",
    element: renderWithNav(<Landing />, true),
  },
];

export default routes;

// ---------------
