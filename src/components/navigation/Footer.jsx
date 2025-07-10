const Footer = () => {
  let current_year = new Date().getFullYear();
  return (
    <div className="absolute bottom-4 m-2 mx-4 text-center mb-auto">
      <p className="font-light font-serif text-sm">
        @{ current_year } by Diego Cadenas
      </p>
    </div>
  );
};

export default Footer;
