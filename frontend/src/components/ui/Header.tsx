import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
	const [count, setCount] = useState(0);
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__ul">
					<li className="header__li">
						<button
							className="header__menuButton"
							onClick={() => setCount(count => count + 1)}
						></button>
					</li>
					<li className="header__li">
						<Link to="/" className="header__name">
							{count ? count : <>Ecomoda</>}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
