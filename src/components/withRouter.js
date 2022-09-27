import { useNavigate, useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const location = useLocation();

    return <Component location={location} navigate={navigate} {...props} />;
  };

  return Wrapper;
};
