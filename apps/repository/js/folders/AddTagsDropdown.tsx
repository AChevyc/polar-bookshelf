import * as React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {FolderIcon, PlusIcon, TagIcon} from "../../../../web/js/ui/icons/FixedWidthIcons";
import {NULL_FUNCTION} from "polar-shared/src/util/Functions";

export class AddTagsDropdown extends React.Component<IProps, IState> {


    constructor(props: IProps, context: any) {
        super(props, context);

    }

    public render() {

        return (

            <UncontrolledDropdown>

                <DropdownToggle color="light"
                                className="ml-1 pl-1 pr-1"
                                style={{outline: 'none', boxShadow: 'none'}}
                                caret>

                    <PlusIcon/>

                </DropdownToggle>

                <DropdownMenu className="shadow" right>

                    <DropdownItem onClick={() => NULL_FUNCTION}>
                        <FolderIcon/> Create Folder
                    </DropdownItem>

                    <DropdownItem onClick={() => NULL_FUNCTION}>
                        <TagIcon/> Create Tag
                    </DropdownItem>

                </DropdownMenu>

            </UncontrolledDropdown>

        );
    }

}

export interface IProps {
}

export interface IState {
}

