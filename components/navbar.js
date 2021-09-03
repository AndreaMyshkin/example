//components/navbar.js
import Link from 'next/link';

const Navbar = () => {
    return(
        <div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/characters"><a>Characters</a></Link></li>
                <li><Link href="/episodes"><a>Episodes</a></Link></li>
            </ul>
<style jsx>{`
                ul {
                    background: #008d9a;
                    color: #fff;
                    list-style: none;
                    display: flex;
                }
ul li {
                    font-size: 20px;
                    margin-right: 60px;
                }
ul li a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
}
export default Navbar;