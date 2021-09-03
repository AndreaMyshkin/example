//components/layout.js
import Head from 'next/head';
import Navbar from './navbar';


const Layout = ({children}) => {
    return(
        <div>
            <Head>
             
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            </Head>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
}
export default Layout;