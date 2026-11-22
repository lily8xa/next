import Link from "next/link";
import './Menu.css'

export const Menu = () => {
    return (
        <ul className={'main-menu'}>
            <li><Link href={'/cars'}>All Cars</Link></li>
            <li><Link href={'/create'}>Add new Car</Link></li>
        </ul>
    );
};
