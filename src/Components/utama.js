import React from 'react'
import {Switch, Route} from 'react-router-dom';


import Beranda from './beranda'
import Pasar from './pasar';
import Sayuran from './sayuran';
import Buah from './buah';
import Barang from './barang';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/Pasar" component={Pasar} />
        <Route path="/Sayuran" component={Sayuran} />
        <Route path="/Buah" component={Buah} />
        <Route path="/Barang" component={Barang} />
        
    </Switch>
)

export default Utama;