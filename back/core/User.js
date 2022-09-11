module.exports = class User {

    base = null
    
    constructor(bdd){        
        this.base = bdd
    }


    
    signUp(res,params){

        var post = [params.nomUser,params.prenomUser,params.pseudo,params.tel,params.email,params.password,params.photo,params.idTypeUser]

        this.base.query("INSERT INTO utilisateur(nomUser,prenomUser,pseudo,tel,email,password,photo,idTypeUser) VALUES(?,?,?,?,?,?,?,?)",post,(err,data)=>{
            if(err) throw err
            res.send(true)

        })

    }


    
    logIn(res,params){
        
        this.base.query("SELECT idUser,photo FROM utilisateur WHERE pseudo = ? AND password = ?",[params.pseudo,params.password],(err,data,rows)=>{
            if(err) throw err
            
            if(data.length != 0){
                data[0].token = "bsjdflqksfjqlkfj"
                res.send(data[0])
            }else{
                
                res.send(false)
            }
        
        })

    }

    







}