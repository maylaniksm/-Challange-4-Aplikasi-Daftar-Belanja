import React, {Component} from "react";  
import $ from "jquery";
class Buah extends React.Component {  
constructor(){  
    super();  
        this.state = {  
        belanja : [  
        {id: "1", nama: "Anggur", jumlah: "10", harga: "Rp355.000"},  
        {id: "2", nama: "Apel", jumlah: "7", harga: "Rp70.000"},  
        {id: "3", nama: "Durian", jumlah: "15", harga: "Rp500.000"},  
        ],  
        id: "",  
        nama: "",  
        jumlah: "",
        harga: "",
        action: "" 
        } 
    } 
    bind = (event) => {  
        this.setState({[event.target.name]: event.target.value});  
        /* fungsi ini digunakan untuk memasukkan data dari elemen input 
        ke variable state. 
        contoh ketika input id diisi, maka secara otomatis variabel id 
        pada state bernilai sesuai dengan inputan 
        */  
        } 
    Add = () => {  
            // mengosongkan nilai id, nama, dan jumlah  
            // pada saat tombol add ditekan  
            this.setState({  
            id:  "",  
            nama: "",  
            jumlah: "", 
            harga: "",
            action: "insert"  
            });  
            $("#modal").modal('show');
            }  
    Edit = (item) => {  
                this.setState({  
                id: item.id,  
                nama: item.nama,  
                jumlah: item.jumlah,
                harga: item.harga, 
                action: "update"  
                });
                $("#modal").modal('show');  
                }  
    SaveBelanja = (event) =>{  
                    event.preventDefault();  
                    // temp digunakan untuk menyimpan sementara  
                    // data array belanja  
                    let temp = this.state.belanja;  
                    
                    if (this.state.action === "insert") {  
                    // temp akan ditambahkan dengan data belanja yang baru  
                    // sesuai dengan data yang dimasukkan pada form  
                    temp.push({  
                    id: this.state.id,  
                    nama: this.state.nama,  
                    jumlah: this.state.jumlah,
                    harga: this.state.harga 
                    });  
                    } else if (this.state.action === "update") {  
                    // mencari index data yang akan diubah  
                    let index = temp.findIndex(item => item.id === this.state.id);  
                    // mengubah data array sesuai dengan masukan pada form  
                    temp[index].nama = this.state.nama;  
                    temp[index].jumlah = this.state.jumlah; 
                    temp[index].harga = this.state.harga;   
                    }  
                     
                    // array belanja diupdate dengan nilai data temp  
                    this.setState({belanja: temp});  
                    
                    // menutup modal  
                    $("#modal").modal('hide');  
                    }  
                    Drop = (index) => {  
                        // temp digunakan untuk menyimpan sementara  
                        // data array belanja  
                        let temp = this.state.belanja;  
                        
                        // menghapus data pada index yang dihapus  
                        temp.splice(index,1);  
                        
                        // array belanja diupdate dengan nilai data temp  
                        this.setState({belanja: temp});  
                        }                              
render(){  
return (  
    <div className="container bg-danger">  
    { /* generate list */ }  
    <ul className="list-group">  
    {this.state.belanja.map((item,index) => {  
return (  
<center><li className="list-group-item bg-warning" key={index}>  
    <h5 className="text-info">{item.nama}</h5>  
    <h6>No: {item.id}</h6>  
    <h6>Jumlah: {item.jumlah}</h6>
    <h6>Harga: {item.harga}</h6>  
    
<button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
data-toggle="modal" data-target="#modal">  
Edit  
</button>  
<button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
Hapus  
</button>  
</li> </center>
);  
})}  
</ul>  
<button className="btn btn-sm btn-success m-3" onClick={this.Add}  
data-toggle="modal" data-target="#modal">  
<h5>+ Tambah Data </h5> 
</button> 

{ /* elemen form modal */ }  
<div className="modal fade" id="modal">  
<div className="modal-dialog">  
<div className="modal-content">  
<div className="modal-header bg-success text-white">  
<center><h5>Form Belanjaan</h5></center>
</div>  
<form onSubmit={this.SaveBelanja}>  
<div className="modal-body">  
No  
<input type="text" name="id" className="form-control" onChange={this.bind}  
value={this.state.id} />  
Nama Buah  
<input type="text" name="nama" className="form-control" onChange={this.bind}  
value={this.state.nama} />  
Jumlah  
<input type="text" name="jumlah" className="form-control" onChange={this.bind}  
value={this.state.jumlah} />
Harga
<input type="text" name="harga" className="form-control" onChange={this.bind}  
value={this.state.harga} />
</div>  
<div className="modal-footer">  
<button type="submit" className="btn btn-primary">  
Simpan  
</button>  
</div>  
</form>  
</div>  
</div>  
</div>  
</div>
  
);  

}  

}

export default Buah;  
