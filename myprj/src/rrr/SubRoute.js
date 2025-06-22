import {Routes, Route} from 'react-router-dom';

import SRT1 from './SRT1';
import SRT2 from './SRT2';
import SRT3 from './SRT3';

function SubRoute(props) {
    return (
        <Routes>
            <Route path='/sr1' element={<SRT1/>} />
            <Route path='/sr2' element={<SRT2/>} />
            <Route path='/sr3' element={<SRT3/>} />
        </Routes>
    );
}

export default SubRoute;