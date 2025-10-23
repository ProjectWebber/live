// Components
import Container from "./Container";
import Content from "./Content";
import ActionsContainer from "./ActionsContainer";
import InputText from "@/components/Inputs/InputText";

interface ModalComponents {
    Container: typeof Container;
    Content: typeof Content;
    ActionsContainer: typeof ActionsContainer;
    Input: typeof InputText;
}

const BaseModal: ModalComponents = {
    Container: Container,
    Content: Content,
    ActionsContainer: ActionsContainer,
    Input: InputText,
};

export default BaseModal;
