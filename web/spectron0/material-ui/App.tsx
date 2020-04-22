import * as React from 'react';
import {useState} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import DocumentRepositoryTable from "./doc_repo_table/DocumentRepositoryTable";
import {MockRepoDocInfos} from "./MockRepoDocInfos";
import {ContextMenus} from "./ContextMenus";
import {configure, GlobalHotKeys} from "react-hotkeys";
import {NULL_FUNCTION} from "polar-shared/src/util/Functions";
import TextField from "@material-ui/core/TextField";
import MUISearchBox from "./MUISearchBox";
// import {DocDropdownMenu} from "./MUIDocDropdownMenu";
// import { MUIDocDropdownButton } from './MUIDocDropdownButton';
import FlagIcon from "@material-ui/icons/Flag";
import { TagAutocompleteDemo } from './TagAutocompleteDemo';
import {AlertDialogDemo} from "./dialogs/AlertDialogDemo";
import {PromptDialogDemo} from "./dialogs/PromptDialogDemo";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {InputValidationErrorSnackbar} from "./dialogs/InputValidationErrorSnackbar";
import {MUITagInputControl} from "../../../apps/repository/js/MUITagInputControl";
import {MockTags} from "./MockTags";
import {AutocompleteOption} from "./autocomplete/MUICreatableAutocomplete";
import {Tag} from "polar-shared/src/tags/Tags";
import {arrayStream} from "polar-shared/src/util/ArrayStreams";
import {MUITagInputControls} from "../../../apps/repository/js/MUITagInputControls";
import MUITreeView from './treeview/MUITreeView';
import {MUIHelpMenu} from "./MUIHelpMenu";
import {MUIDropdownMenu} from "./dropdown_menu/MUIDropdownMenu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import SettingsIcon from '@material-ui/icons/Settings';
import {ExampleDropdownMenu} from "./dropdown_menu/ExampleDropdownMenu";
import {MUIDialogController} from "./dialogs/MUIDialogController";
import dialog = Electron.dialog;
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { GlobalCss } from './GlobalCss';
import {MUIPaperToolbar} from "./MUIPaperToolbar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {MUIToggleButton} from "../../js/ui/MUIToggleButton";
import {MUISearchBox2} from "./MUISearchBox2";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// configure({logLevel: "debug"});

export const App = () => {

    // We keep the theme in app state
    const [theme, setTheme] = useState<any>({
        typography: {
            htmlFontSize: 12,
            fontSize: 12
        },
        palette: {
            type: "dark"
        }
    });

    // we change the palette type of the theme in state
    const toggleDarkTheme = () => {
        const newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };

    const muiTheme = createMuiTheme(theme);

    const tags = MockTags.create();
    //
    // MUITagInputControls.prompt({
    //     availableTags: tags,
    //     existingTags: () => [],
    //     onChange: NULL_FUNCTION,
    //     onCancel: NULL_FUNCTION,
    //     onDone: NULL_FUNCTION
    // });

    return (
        // <GlobalHotKeys
        //     allowChanges={true}
        //     keyMap={globalKeyMap}>

            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline/>
                <GlobalCss />

                {/*<Container component="main" maxWidth={false} disableGutters>*/}
                    {/*<ReactVirtualizedTable/>*/}

                    {/*<Grid*/}
                    {/*      container*/}
                    {/*      spacing={1}*/}
                    {/*      direction="row"*/}
                    {/*      alignItems="center"*/}
                    {/*>*/}
                    {/*    <Grid item>*/}
                    {/*        <Chip label="hello"/>*/}
                    {/*    </Grid>*/}


                    {/*    <Grid item>*/}
                    {/*        <Chip label="world"/>*/}
                    {/*    </Grid>*/}

                    {/*</Grid>*/}

                    {/*<MUITreeView/>*/}

                    {/*<DialogDemo/>*/}

                    {/*<Box m={1}>*/}
                    {/*    <AutocompleteTags/>*/}
                    {/*</Box>*/}


                    <OutlinedInput startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                                   type="search"/>

                       <br/>
                <br/>                   <br/>
                <br/>


                    <MUISearchBox2 placeholder="This is a placeholder"
                                   onChange={NULL_FUNCTION}/>

                    <MUIToggleButton label="test"
                                     size="small"
                                     onChange={NULL_FUNCTION}/>

                    {/*<div style={{margin: '5px'}}>*/}
                    <MUISearchBox onChange={NULL_FUNCTION}/>

                    <br/>
                    <br/>

                    <IconButton size={'small'}>
                        <CloseIcon/>
                    </IconButton>

                    <br/>
                    <br/>

                    <IconButton size={'medium'}>
                        <CloseIcon/>
                    </IconButton>

                <Paper variant="outlined">
                        hello world
                    </Paper>

                    {/*<MUIHelpMenu/>*/}


                <MUIPaperToolbar borderTop
                                 borderBottom>
                    <ExampleDropdownMenu/>
                </MUIPaperToolbar>

                {/*    asdf*/}

                {/*asdfasfda*/}

                {/*asdf*/}

                <Tooltip title="hello world this is a long tooltip">
                    <Button>help</Button>
                </Tooltip>
                <br/>

                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>
                adsfadsfasdf asdfasdf asdfasdf asdfa sfasdf<br/>

                {/*<MUIDialogController render={dialogs => (*/}

                {/*    <Button onClick={() => dialogs.confirm({*/}
                {/*                         title: 'are you sure?',*/}
                {/*                         subtitle: 'because you better be',*/}
                {/*                         onAccept: NULL_FUNCTION,*/}
                {/*                         onCancel: NULL_FUNCTION*/}
                {/*                    })}>*/}
                {/*        Click me*/}
                {/*    </Button>*/}

                {/*)}/>*/}

                {/*<div style={{marginLeft: '250px'}}>*/}
                {/*    <MUIDropdownMenu button={{*/}
                {/*                        icon: <SettingsIcon/>*/}
                {/*                     }}>*/}
                {/*        <div>*/}
                {/*            <MenuItem >Profile</MenuItem>*/}
                {/*            <MenuItem >My account</MenuItem>*/}
                {/*            <MenuItem >Logout</MenuItem>*/}
                {/*        </div>*/}
                {/*    </MUIDropdownMenu>*/}
                {/*</div>*/}

                    {/*</div>*/}


                    {/*<TextField id="standard-search" type="search" InputProps={{*/}
                    {/*    startAdornment: (*/}
                    {/*        <FlagIcon/>*/}
                    {/*    )*/}
                    {/*}}/>*/}

                    {/*<TagAutocompleteDemo/>*/}
                    {/*<AlertDialogDemo/>*/}
                    {/*<PromptDialogDemo/>*/}

                    {/*<InputValidationErrorSnackbar message="This is a bad message bro"/>*/}

                    {/*<MUITagInputControl availableTags={tags}/>*/}

                    {/*<Snackbar open={true} autoHideDuration={1000} onClose={NULL_FUNCTION}>*/}
                    {/*    <Alert severity="error" onClose={NULL_FUNCTION}>*/}
                    {/*        This is a very very bad error message.*/}
                    {/*    </Alert>*/}
                    {/*</Snackbar>*/}

                    {/*<DocumentRepositoryTable data={MockRepoDocInfos.create()}*/}
                    {/*                         selected={[0, 1]}*/}
                    {/*                         selectRow={NULL_FUNCTION}*/}
                    {/*                         onOpen={() => console.log('onOpen')}*/}
                    {/*                         onShowFile={() => console.log('onShowFile')}*/}
                    {/*                         onRename={() => console.log('onRename')}*/}
                    {/*                         onCopyOriginalURL={() => console.log('onCopyOriginalURL')}*/}
                    {/*                         onCopyFilePath={() => console.log('onCopyFilePath')}*/}
                    {/*                         onDelete={() => console.log('FIXME: onDelete ' + Date.now())}*/}
                    {/*                         onCopyDocumentID={() => console.log('onCopyDocumentID')}*/}
                    {/*                         onLoadDoc={(repoDocInfo) => console.log('onLoadDoc: ', repoDocInfo)}*/}
                    {/*                         onFlagged={() => console.log('onFlagged')}*/}
                    {/*                         onArchived={() => console.log('onArchived')}*/}
                    {/*/>*/}

                    {/*<Foo/>*/}
                    {/*<Foo/>*/}
                    {/*<Foo/>*/}

                    {/*<div style={{display: 'flex'}}>*/}
                    {/*    <div style={{flexGrow: 1}}>*/}

                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <MUIDocDropdownButton/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<DocButtonsDemo/>*/}

                    {/*<Button variant="contained" color="primary" onClick={() => console.log('hello')}>*/}
                    {/*    Hello World*/}
                    {/*</Button>*/}

                    {/*<Tags/>*/}

                    {/*<ReactVirtualizedTable/>*/}

                    {/*<TreeControl/>*/}
                    {/*<TabsDemo/>*/}
                    {/*<IconsDemo/>*/}

                    {/*<DropdownMenuDemo/>*/}

                {/*</Container>*/}
            </MuiThemeProvider>
        // </GlobalHotKeys>
    );
}
