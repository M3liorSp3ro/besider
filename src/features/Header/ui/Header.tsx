import { HumburgerIcon, XIcon } from "@shared/assets/svg";
import { Button, Drawer, Flex } from "antd";
import { useState } from "react";
import './Header.scss';

export const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="header">
                <Button
                    className="menuButton"
                    icon={<img src={HumburgerIcon} />}
                    onClick={() => setOpen(true)}
                />
                <h1 className="title">BESIDER</h1>
            </header>

            <Drawer
                className="menuDrawer"
                placement="left"
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
                width={'100%'}
            >
                <Flex
                    className="closeIcon"
                >
                    <img src={XIcon}
                        onClick={() => setOpen(false)}
                        className=""
                    />
                </Flex>

                <Flex

                    vertical
                    gap={28}
                >
                    <p className="menuItem">SCIENCE</p>
                    <p className="menuItem">GENERAL</p>
                    <p className="menuItem">ENTERTAINMENT</p>
                    <p className="menuItem">TECHNOLOGY</p>
                    <p className="menuItem">BUSINESS</p>
                    <p className="menuItem">HEALTH</p>
                    <p className="menuItem">SPORTS</p>
                </Flex>

            </Drawer>
        </>
    )
}
