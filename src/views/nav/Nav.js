import React from 'react';
import "../../styles/Nav.scss";
import Search from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from '@mui/material/Link';
import PersonIcon from '@mui/icons-material/Person';

const Nav = () => {

    return (
        <div  >

            <div className='home-container'>
                <div className='home-content'>

                    <div className='left-banner'>
                        Bất <div className='virgo'> Động Sản</div>
                    </div>
                    <div className='center-banner'>
                        <div className='child-banner'><Link href='/' underline="none" color="inherit">Mua bán nhà đất</Link>
                        </div>
                        <div className='child-banner'><Link href='/project' underline="none" color="inherit">Cho thuê nhà đất</Link>
                        </div>
                        <div className='child-banner'><Link href='/project' underline="none" color="inherit">Dự án</Link>
                        </div>

                    </div>

                    <div className='right-banner'>
                        <div className='icon-banner'>
                            <div className='icon'>
                                <Search fontSize="large" />
                            </div>
                            <div className='icon'>
                                <AddShoppingCartIcon fontSize="large" />
                            </div>
                            <Link href='/signin' color="inherit">
                                <div className='icon'>
                                    <PersonIcon fontSize="large" />
                                </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default Nav;