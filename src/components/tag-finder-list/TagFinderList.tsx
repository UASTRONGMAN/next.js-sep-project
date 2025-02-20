import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import TagFinder from "@/components/tag-finder-list/tag-finder/TagFinder";


interface IProps{
    listByTags: IRecipe[],
}

const TagFinderList:FC<IProps> = ({listByTags}) => {
    return (
        <div>
            {listByTags.map(recipesByTag => <TagFinder recipesByTag={recipesByTag} key={recipesByTag.id}/>)}
        </div>
    );
};

export default TagFinderList;