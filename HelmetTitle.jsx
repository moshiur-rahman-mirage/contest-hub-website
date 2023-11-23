
import { Helmet } from 'react-helmet';
const HelmetTitle = ({title}) => {
    return (
       <Helmet>
            <title>{title}</title>
       </Helmet>
    );
};

export default HelmetTitle;