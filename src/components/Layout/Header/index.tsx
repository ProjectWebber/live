// Components
import HeaderContainer from "./HeaderContainer";
import NavContainer from "./Navigation/NavContainer";
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NavContainer />
        </HeaderContainer>
    );
};

export default Header;
