import React from 'react'
import '../../styles/Home.scss';
import { FaSearchLocation, FaHeart } from "react-icons/fa";

const Home = () => {
    const bds = [
        {
            title: 'bds1',
            price: '0',
            description: [
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
            ],
            buttonText: 'Sign up for free',
            buttonVariant: 'outlined',
        },
        {
            title: 'Pro',
            subheader: 'Most popular',
            price: '15',
            description: [
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority email support',
            ],
            buttonText: 'Get started',
            buttonVariant: 'contained',
        },
        {
            title: 'Enterprise',
            price: '30',
            description: [
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Phone & email support',
            ],
            buttonText: 'Contact us',
            buttonVariant: 'outlined',
        },
    ];
    return (

        <>
            <div className='body'>
                <div className='picture'>
                    <div className='banner'>UY TÍN / CHẤT LƯỢNG HÀNG ĐẦU
                        <div className='main-banner'>
                        </div>

                        <div className='end-button'>
                            <button className='btn-shopnow'>XEM NHANH</button>
                        </div>

                    </div>
                </div>
            </div>
            <main>
                <div className='homecontainer'>
                    <div className='container'>
                        <section class="container-fluid">
                            <div class="row">
                                <div class="col-sm-3">
                                    <img src="https://file4.batdongsan.com.vn/crop/393x222/2022/12/15/20221215145257-e5ae_wm.jpg" width="261px" height="146px" alt="Four..." />
                                    <div className='boxbds'>
                                        <div className='boxcenter'>
                                            <div className='textbds'>
                                                <h3> MT Đường số 3 Chợ Lớn, ngay Ng.V.Luông P11 Q.6 (4x20m),4.5 lầu,nội thất gỗ căm xe,giá sốc 10.3 tỷ</h3>
                                            </div>
                                            <div className='price'>
                                                <span>10.3 tỷ</span>

                                                <span>80 m²</span>
                                            </div>
                                            <div className='local'>
                                                <FaSearchLocation />
                                                <span>Quận 6, Hồ Chí Minh</span>
                                            </div>
                                            <div className='card-contact'>

                                                <span>Đăng hôm nay</span>
                                                <FaHeart />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </main>
        </>

    )

}
export default Home;
