import Header from "../components/organisms/header/header";
import Alerts from "./alerts";
import Breadcrumbs from "./breadcrumbs";
import Buttons from "./buttons";
import Forms from "./forms";
import Icons from "./icons";
import Links from "./links";

const Start = () => {
  return (
    <>
      <Header
        logo="onlineprinters-logo.jpg"
        showLanguageSelector
        showSearch
      ></Header>
      <div className="main">
        <div className="container">
          <section className="section mt-4">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="mb-5">Patterns</h1>
                <h2 className="mt-5 mb-4 text-primary">Buttons</h2>
                <Buttons />
                <h2 className="mt-5 mb-4 text-primary">Alerts</h2>
                <Alerts />
                <h2 className="mt-5 mb-4 text-primary">Forms</h2>
                <Forms />
                <h2 className="mt-5 mb-4 text-primary">Links</h2>
                <Links />
                <h2 className="mt-5 mb-4 text-primary">Icons</h2>
                <Icons />
                <h2 className="mt-5 mb-4 text-primary">Breadcrumbs</h2>
                <Breadcrumbs />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Start;
