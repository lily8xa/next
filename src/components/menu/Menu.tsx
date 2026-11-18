import Link from "next/link";
import './Menu.css'

export const Menu=()=> {
    return (
        <ul className={'main-menu'}>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/users'}>Users</Link></li>
            <li><Link href={'/posts'}>Posts</Link></li>
            <li><Link href={'/comments'}>Comments</Link></li>
        </ul>
    );
}
