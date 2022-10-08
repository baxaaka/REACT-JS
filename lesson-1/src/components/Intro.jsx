import React from 'react';
import search from '../assets/img/search.svg';
import btn2 from '../assets/img/btn-2.svg';
import img1 from '../assets/img/img-1.svg';
import img2 from '../assets/img/img-2.svg';
import img3 from '../assets/img/img-3.svg';
import img4 from '../assets/img/img-4.svg';
import img5 from '../assets/img/img-5.svg';
import img6 from '../assets/img/img-6.svg';
import img7 from '../assets/img/img-7.svg';
import card from '../assets/img/card.svg';
import card2 from '../assets/img/card-2.svg';
import soqqa from '../assets/img/soqqa.svg';
import des1 from '../assets/img/Desktop - 16.svg';
import des2 from '../assets/img/Desktop - 18.svg';
import des3 from '../assets/img/Desktop - 19.svg';



const Intro = () => {
    return (
        <>
        
        <div className="box-1">
            <h5><span>Pojok Baca</span> Probolinggo</h5>
            <h1>Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat</h1>
        </div>

        <div className="box-2">
            <img src={search}alt=""/>
            <img src={btn2} alt=""/>
        </div>
        
        <div className="box-3">
            <img src={img1} alt="" className="img-1"/>
            <img src={img2} alt="" className="img-2"/>
            <img src={img3} alt="" className="img-3"/>
            <img src={img4} alt="" className="img-4"/>
            <img src={img5} alt="" className="img-5"/>
            <img src={img6} alt="" className="img-6"/>
            <img src={img7} alt="" className="img-7"/>

           


        </div>
         
        <div className="box-4">

            <h3>Kenapa Kita <span>Harus</span> Membaca Buku?</h3>
            <div className="card">
                <div className="imgg">
             <img src={card} alt=""/>    
             <img src={card2} alt=""/>
            </div>
            </div>
            <div className="imm">
                <img src={soqqa} alt="" className="soqqa"/>
                <img src={des1} alt=""/>
                <img src={des2} alt=""/>
                <img src={des3} alt=""/>
            </div>
           
        </div> 
        </>
    );
};

export default Intro;