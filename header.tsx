import headerStyles from "./Header.module.css"
interface IHeaderProps{
    toggleForm:(isVisible:boolean)=>void;
    toggleContactDetails:(isVisible:boolean)=>void;
}

const Header=(props:IHeaderProps)=>{      
        return(
            <div className='Header'>
                <div className={headerStyles.titleBar}>
                    <p>Address Book</p>
                </div>
                <div className={headerStyles.nav}>
                <nav>
                    <div className={headerStyles.nav}>
                        <button className={headerStyles.btn1} onClick={()=>{props.toggleForm(false);props.toggleContactDetails(false)}}>HOME</button>
                        <button className={headerStyles.btn2} onClick={()=>{props.toggleForm(true);props.toggleContactDetails(false)}}>+ADD</button>
                        <div className={headerStyles.logo}><img src={process.env.PUBLIC_URL + "/blog-icon.png"} alt="logo" id="logo"/></div>
                    </div>
                </nav>
            </div>

            </div>
        )
}
export default Header