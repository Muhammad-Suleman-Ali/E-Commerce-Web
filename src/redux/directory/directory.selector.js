import { createSelector } from "reselect";
import directoryReducer from "../../../redux/directory/directory.reducer";


const selectDiretory = state => state.directory;

export const selectDiretorySections = createSelector(
    [selectDiretory],
    directory => directory.sections
)