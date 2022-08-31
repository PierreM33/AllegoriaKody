import React from 'react';

const Corps = () => {
    return (
<div className="corps">

<div className="corpsLeft">
    {/* Image temporaire non détouré */}
    <img src="./statue.png" alt="image" className='imageCorpsLeft'/>
</div>

{/* Partie descriptif du contenu */}
<div className="corpsMiddle">
    <div className="titleObject">Statue-Cube figurant Senbef</div>
    <div className="bigBorder"></div>
    <div className="Desc"> 
    Egyptien Basse Epoque, début de la 26e dynastie, v 664-660 av J-C<br>
    </br>
    H: 38 cm - L: 27 cm - P : 22cm
    <br></br>
    Calcaire
    </div>
    <div className="price">2 500 €</div>
    <div className="blocButtonCorps">
        <button class="corpsButton">Acquérir</button>
        <button class="corpsButton">Proposer un prix</button>
    </div>
</div>
<div className="corpsRight">
    <ul className='menuSecond'>
        <li className='menuSecond'><a class="hover" id="oeuvre">L'oeuvre |</a></li>
        <li className='menuSecond'><a class="hover" id="descriptif">Descriptif |</a></li>
        <li className='menuSecond'><a class="hover" id="livraison">Livraison |</a></li>
        <li className='menuSecond'><a class="hover" id="similaire">Similaire |</a></li>
    </ul>
</div>

</div>
    );
};

export default Corps;