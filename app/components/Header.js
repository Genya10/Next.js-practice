import Link from "next/link";
 const Header =()=>{
    return(
        <header>
         <strong>Header</strong> 
         <nav>
         <Link href='/'>Main</Link>
         <Link href='/about'>About</Link>
         </nav>
        </header>
    )
}

export default Header;