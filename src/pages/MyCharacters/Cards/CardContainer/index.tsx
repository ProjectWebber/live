// Libs
import { VirtuosoGrid } from "react-virtuoso";
import { useEffect, useState } from "react";

// Components
import CardItem from "../CharacterCard";
import List from "./List";
import Footer from "./Footer";
import LayoutScrollStore from "@/stores/LayoutScrollStore";
import SavedCharactersStore from "@/stores/SavedCharactersStore";
import NoSuchCharacter from "../NoSuchCharacter";

const CardContainer = () => {
    const componentRef = LayoutScrollStore().componentRef;
    const [customScrollParent, setCustomScrollParent] = useState<HTMLElement>();
    const { savedCharacters } = SavedCharactersStore();

    useEffect(() => {
        if (componentRef.current !== null) setCustomScrollParent(componentRef.current);
    }, [componentRef]);

    return (
        <article className="h-full w-full flex-1">
            {Object.keys(savedCharacters).length === 0 ? (
                <NoSuchCharacter />
            ) : (
                <VirtuosoGrid
                    className="w-full! flex-1!"
                    totalCount={Object.keys(savedCharacters).length}
                    customScrollParent={customScrollParent}
                    data={Object.keys(savedCharacters)}
                    components={{ List, Footer }}
                    itemContent={(_, id) => (
                        <CardItem
                            id={id}
                            characterData={(() => {
                                return savedCharacters[id];
                            })()}
                        />
                    )}
                />
            )}
        </article>
    );
};

export default CardContainer;
