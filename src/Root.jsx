import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header.jsx";

const Root = () => {
    const [pageName, setPageName] = useState("");
    function changePageName(name) {
        setPageName(name);
    }

    return (
        <>
            <Header pageName={pageName} />
            <Container maxWidth="md">
                <Outlet context={changePageName} />
            </Container>
        </>
    );
};

export default Root;
