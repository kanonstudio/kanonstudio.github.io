import NavBar from "./NavBar";

const Header = ({
  position = "fixed-top",
}: {
  position?: "fixed-top" | "sticky-top" | "";
}) => {
  return (
    <header className={position}>
      <NavBar />
    </header>
  );
};
export default Header;
