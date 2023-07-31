import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return <Box marginLeft="1rem" marginTop="1rem">
    <Menu>
        <MenuButton as={IconButton} aria-label='Pages' icon={<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>} variant='outline'/>
        <MenuList>
            <MenuItem>
                <Link to='/home'>Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to='/aquarium'>Aquarium</Link>
            </MenuItem>
        </MenuList>
    </Menu>
    <Outlet></Outlet>
    </Box>
}