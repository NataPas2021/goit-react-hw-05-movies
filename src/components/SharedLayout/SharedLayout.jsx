import Menu from "components/Menu/Menu";
import { Suspense } from "react";
import {Outlet} from 'react-router-dom';

const SharedLayout = () => {
    return (
        <>
        <Menu />
        <Suspense fallback={<p>...Loading</p>}>
           <Outlet />
        </Suspense>
        </>
    )
}

export default SharedLayout;