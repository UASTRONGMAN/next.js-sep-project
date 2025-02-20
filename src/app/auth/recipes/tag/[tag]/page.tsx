import {FC} from "react";
import {getRecipesByTag} from "@/services/api.services";
import TagFinderList from "@/components/tag-finder-list/TagFinderList";

interface IProps {
    params: {tag: string};
}

const TagFinderPage:FC<IProps> = async ({params}) => {
    const {tag} = await params;
    const response = await getRecipesByTag(tag);
    const filteredRecipesByTag = (response.recipes ?? []).filter((byTag) => byTag.tags.includes(tag || ''))

    return (
        <div>
            <h4>Recipes by {tag}:</h4>
            <TagFinderList listByTags={filteredRecipesByTag}/>
        </div>
    );
};

export default TagFinderPage;