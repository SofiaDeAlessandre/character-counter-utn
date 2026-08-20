const Header = ({ dark, handleDarkTheme }) => {
  return (
    <>
      <header>
        <div className="logo-title">
          <img className="header-image" src="/images/logo.png" alt="logo" />
          <h1>Character Counter</h1>
        </div>
        <button className="header-button" onClick={() => handleDarkTheme()}>
          {dark ? "☀" : "🌙"}
        </button>
      </header>
    </>
  );
};

export { Header };
