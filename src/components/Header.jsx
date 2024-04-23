import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="header_to bg-[#070F2B] ">
                <div className="w-4/5 py-2 mx-auto flex gap-5 justify-end">
                    <Link to='/login' className="text-sm text-slate-300 hover:underline">Sign in / Guest</Link>
                    <Link to='/login' className="text-sm text-slate-300 hover:underline">Create Account</Link>
                </div>
            </div>
            <div className="bg-base-200">
                <div className="w-4/5 mx-auto">
                    <div className="navbar bg-base-200">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                            </div>
                            <Link to='/' className="btn btn-info text-xl  text-white">C</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 gap-[1px]">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                            <li><NavLink to='/cart'>Cart</NavLink></li>
                                
                            </ul>
                        </div>
                        <div class="flex-none ml-[350px]">
                            <div class="dropdown dropdown-end">
                                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                                    <div class="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span class="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div class="card-body">
                                        <span class="font-bold text-lg">8 Items</span>
                                        <span class="text-info">Subtotal: $999</span>
                                        <div class="card-actions">
                                            <button class="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header