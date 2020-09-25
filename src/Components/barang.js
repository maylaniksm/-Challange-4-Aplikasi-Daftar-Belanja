import React, {Component} from "react";  
import $ from "jquery";
import { render } from "@testing-library/react";
class Barang extends Component{
      constructor(){  
        super();  
            this.state = {  
            belanja : [  
            {id: "1", barang: "Wajan", jumlah: "10", harga: "Rp555.000"},  
            {id: "2", barang: "Pisau", jumlah: "20", harga: "Rp300.000"},  
            {id: "3", barang: "Panci", jumlah: "15", harga: "Rp500.000"},  
            ],  
            id: "",  
            barang: "",  
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
                // mengosongkan nilai id, barang, dan jumlah  
                // pada saat tombol add ditekan  
                this.setState({  
                id:  "",  
                barang: "",  
                jumlah: "", 
                harga: "",
                action: "insert"  
                });  
                $("#modal").modal('show');
                }  
        Edit = (item) => {  
                    this.setState({  
                    id: item.id,  
                    barang: item.barang,  
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
                        barang: this.state.barang,  
                        jumlah: this.state.jumlah,
                        harga: this.state.harga 
                        });  
                        } else if (this.state.action === "update") {  
                        // mencari index data yang akan diubah  
                        let index = temp.findIndex(item => item.id === this.state.id);  
                        // mengubah data array sesuai dengan masukan pada form  
                        temp[index].barang = this.state.barang;  
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
    return(
         <div className="container">  
                { /* generate list */ }  
               {this.state.belanja.map((item,index) => {  
                    return (  
            <div className="container">  
                    <div className="form-group" key={index}>  
                    <table class="table table-striped bg-warning">
                    <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">Harga</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{item.id}</th>
                        <td>{item.barang}</td>
                        <th>{item.jumlah}</th>
                        <td>{item.harga}</td>
                        <td> 
                        <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
data-toggle="modal" data-target="#modal">  
Edit  
</button>  
<button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
Hapus  
</button>  
                        </td>
                    </tr>
                </tbody>
                </table>
                
                </div>  
                </div>
                );  
              })} 

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
Nama Barang  
<input type="text" name="barang" className="form-control" onChange={this.bind}  
value={this.state.barang} />  
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

export default Barang;