import react from 'react';
import Beat from './beatmaker/beat';
import Foot from './footer/foot';
import Home from './Homepage/Homepage';
import StepPage from './StepPage/Steppage';

const Page = ()=>{
    return(
        <>
            <Home/>
            <StepPage/>
            <Beat/>
            <Foot/>
        </>
    );
}
export default Page;