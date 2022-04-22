import sampleNavItems from "../../../data/data";
import HeaderCTA from "../../molecules/headerCTA/HeaderCTA";
import SearchInput from "../../molecules/SearchInput";
import NavigationMain from "../navigation/navigation-main";

interface HeaderProps {
  logo: string;
  logoAlt?: string;
  showLanguageSelector?: boolean;
  showSearch?: boolean;
}

// TODO: dynamic order classes depending on showSearch
const Header = ({
  logo,
  logoAlt,
  showLanguageSelector,
  showSearch,
}: HeaderProps) => {
  return (
    <header>
      <nav
        id="mainNavigation"
        className="navbar navbar-expand-lg navbar-dark bg-black"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            className="navbar-brand flex-grow-1 flex-lg-grow-0 order-2"
            href="#"
          >
            {/* TODO: should logo be configurable? is width necessary if logo has correct size */}
            <img src={logo} alt={logoAlt} width="169" />
          </a>
          <div
            className="collapse navbar-collapse order-5 order-lg-3"
            id="navbarNav"
          >
            <NavigationMain items={sampleNavItems}></NavigationMain>
          </div>
          {showSearch && (
            <div className="order-3 order-lg-4">
              <form>
                <SearchInput />
              </form>
            </div>
          )}
          <div className="cta-wrapper d-flex flex-row order-4 order-lg-5">
            {/* TODO: CTAs fix oder configurable */}
            {showLanguageSelector && (
              <HeaderCTA label="de" iconKeyName="fa-globe"></HeaderCTA>
            )}
            <HeaderCTA
              label="Einloggen"
              iconKeyName="fa-arrow-right-from-bracket"
            ></HeaderCTA>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
