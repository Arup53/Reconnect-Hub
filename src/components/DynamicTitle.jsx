import { Helmet } from "react-helmet-async";

function DynamicTitle({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

export default DynamicTitle;
