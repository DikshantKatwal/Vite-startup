import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const AdminBase: React.FC = () => {

    return (
        <Fragment> 
                    <Outlet />  
        </Fragment>
    );
}

export default AdminBase;
