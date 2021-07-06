import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://static.vecteezy.com/system/resources/previews/002/099/719/non_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg"
            alt=""/>
        </div>
    );
}

export default Header;