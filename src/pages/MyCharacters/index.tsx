// Components
import FadeInOut from "@/components/Animations/FadeInOut";
import CardContainer from "./Cards/CardContainer";
import PageTitle from "./PageTitle";

const MyCharactersPage = () => {
    return (
        <FadeInOut
            className="px-screen-responsive flex h-full w-full flex-1 flex-col pt-5" key="MyCharactersPage"
        >
            <PageTitle />
            <CardContainer />
        </FadeInOut>
    );
};

export default MyCharactersPage;
